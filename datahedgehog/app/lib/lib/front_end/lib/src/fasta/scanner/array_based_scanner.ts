/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/array_based_scanner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_scanner";
import * as lib4 from "./../util/link";
import * as lib5 from "./../../scanner/token";
import * as lib6 from "./token";
import * as lib7 from "./characters";
import * as lib8 from "./token_constants";
import * as lib9 from "./error_token";

export namespace ArrayBasedScanner {
    export type Constructors = lib3.AbstractScanner.Constructors | 'ArrayBasedScanner';
    export type Interface = Omit<ArrayBasedScanner, Constructors>;
}
@DartClass
export class ArrayBasedScanner extends lib3.AbstractScanner {
    hasErrors : boolean;

    constructor(includeComments : boolean,scanGenericMethodComments : boolean,scanLazyAssignmentOperators : boolean,_namedArguments? : {numberOfBytesHint? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ArrayBasedScanner(includeComments : boolean,scanGenericMethodComments : boolean,scanLazyAssignmentOperators : boolean,_namedArguments? : {numberOfBytesHint? : number}) {
        let {numberOfBytesHint} = Object.assign({
        }, _namedArguments );
        this.hasErrors = false;
        this.groupingStack = new lib4.Link<lib6.BeginGroupToken>();
        super.AbstractScanner(includeComments,scanGenericMethodComments,scanLazyAssignmentOperators,{
            numberOfBytesHint : numberOfBytesHint});
    }
    groupingStack : lib4.Link<lib6.BeginGroupToken>;

    appendPrecedenceToken(type : lib5.TokenType) : void {
        this.appendToken(new lib6.SymbolToken(type,this.tokenStart,this.comments));
    }
    select(choice : number,yes : lib5.TokenType,no : lib5.TokenType) : number {
        let next : number = this.advance();
        if (core.identical(next,choice)) {
            this.appendPrecedenceToken(yes);
            return this.advance();
        }else {
            this.appendPrecedenceToken(no);
            return next;
        }
    }
    appendKeywordToken(keyword : lib5.Keyword) : void {
        let syntax : string = keyword.lexeme;
        if (core.identical(syntax,'this')) {
            this.discardOpenLt();
        }
        this.appendToken(new lib5.KeywordTokenWithComment(keyword,this.tokenStart,this.comments));
    }
    appendEofToken() : void {
        this.beginToken();
        this.discardOpenLt();
        while (!this.groupingStack.isEmpty){
            this.unmatchedBeginGroup(this.groupingStack.head);
            this.groupingStack = this.groupingStack.tail;
        }
        this.appendToken(new lib6.SymbolToken.eof(this.tokenStart,this.comments));
    }
    appendWhiteSpace(next : number) : void {
        if (next == lib7.properties.$LF) {
            this.lineStarts.add(this.stringOffset + 1);
        }
    }
    lineFeedInMultiline() : void {
        this.lineStarts.add(this.stringOffset + 1);
    }
    appendBeginGroup(type : lib5.TokenType) : void {
        let token : lib5.Token = new lib6.BeginGroupToken(type,this.tokenStart,this.comments);
        this.appendToken(token);
        if (!core.identical(type.kind,lib8.properties.LT_TOKEN) && !core.identical(type.kind,lib8.properties.OPEN_PAREN_TOKEN)) {
            this.discardOpenLt();
        }
        this.groupingStack = this.groupingStack.prepend(token);
    }
    appendEndGroup(type : lib5.TokenType,openKind : number) : number {
        /* TODO (AssertStatementImpl) : assert (!identical(openKind, LT_TOKEN)); */;
        this.discardBeginGroupUntil(openKind);
        this.appendPrecedenceToken(type);
        let close : lib5.Token = this.tail;
        if (this.groupingStack.isEmpty) {
            return this.advance();
        }
        let begin : lib6.BeginGroupToken = this.groupingStack.head;
        if (!core.identical(begin.kind,openKind)) {
            /* TODO (AssertStatementImpl) : assert (begin.kind == STRING_INTERPOLATION_TOKEN && openKind == OPEN_CURLY_BRACKET_TOKEN); */;
            begin.endGroup = close;
            this.groupingStack = this.groupingStack.tail;
            return lib7.properties.$STX;
        }
        begin.endGroup = close;
        this.groupingStack = this.groupingStack.tail;
        return this.advance();
    }
    discardBeginGroupUntil(openKind : number) : void {
        while (!this.groupingStack.isEmpty){
            this.discardOpenLt();
            if (this.groupingStack.isEmpty) return;
            let begin : lib6.BeginGroupToken = this.groupingStack.head;
            if (openKind == begin.kind) return;
            if (openKind == lib8.properties.OPEN_CURLY_BRACKET_TOKEN && begin.kind == lib8.properties.STRING_INTERPOLATION_TOKEN) return;
            this.unmatchedBeginGroup(begin);
            this.groupingStack = this.groupingStack.tail;
        }
    }
    appendGt(type : lib5.TokenType) : void {
        this.appendPrecedenceToken(type);
        if (this.groupingStack.isEmpty) return;
        if (core.identical(this.groupingStack.head.kind,lib8.properties.LT_TOKEN)) {
            this.groupingStack.head.endGroup = this.tail;
            this.groupingStack = this.groupingStack.tail;
        }
    }
    appendGtGt(type : lib5.TokenType) : void {
        this.appendPrecedenceToken(type);
        if (this.groupingStack.isEmpty) return;
        if (core.identical(this.groupingStack.head.kind,lib8.properties.LT_TOKEN)) {
            this.groupingStack = this.groupingStack.tail;
        }
        if (this.groupingStack.isEmpty) return;
        if (core.identical(this.groupingStack.head.kind,lib8.properties.LT_TOKEN)) {
            this.groupingStack.head.endGroup = this.tail;
            this.groupingStack = this.groupingStack.tail;
        }
    }
    appendErrorToken(token : lib9.ErrorToken) : void {
        this.hasErrors = true;
        this.appendToken(token);
    }
    appendSubstringToken(type : lib5.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : void {
        extraOffset = extraOffset || 0;
        this.appendToken(this.createSubstringToken(type,start,asciiOnly,extraOffset));
    }
    @Abstract
    createSubstringToken(type : lib5.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib6.StringToken{ throw 'abstract'}
    discardOpenLt() : void {
        while (!this.groupingStack.isEmpty && core.identical(this.groupingStack.head.kind,lib8.properties.LT_TOKEN)){
            this.groupingStack = this.groupingStack.tail;
        }
    }
    unmatchedBeginGroup(begin : lib6.BeginGroupToken) : void {
        let type : lib5.TokenType = lib3.closeBraceInfoFor(begin);
        this.appendToken(new lib6.SyntheticSymbolToken(type,this.tokenStart,this.comments));
        begin.endGroup = this.tail;
        this.appendErrorToken(new lib9.UnmatchedToken(begin));
    }
}

export class properties {
}
