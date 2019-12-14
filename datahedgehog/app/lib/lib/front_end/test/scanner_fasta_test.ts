/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/scanner_fasta_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./scanner_test";
import * as lib4 from "@dart2ts.packages/front_end/lib/src/fasta/scanner/error_token";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ScannerTest_Fasta);
        defineReflectiveTests(ScannerTest_Fasta_Direct);
        defineReflectiveTests(ScannerTest_Fasta_Roundtrip);
    });
};
export namespace ScannerTest_Fasta {
    export type Constructors = lib3.ScannerTestBase.Constructors | 'ScannerTest_Fasta';
    export type Interface = Omit<ScannerTest_Fasta, Constructors>;
}
@DartClass
export class ScannerTest_Fasta extends lib3.ScannerTestBase {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scanWithListener(source : string,listener : lib3.ErrorListener,_namedArguments? : {genericMethodComments? : boolean,lazyAssignmentOperators? : boolean}) : any {
        let {genericMethodComments,lazyAssignmentOperators} = Object.assign({
            "genericMethodComments" : false,
            "lazyAssignmentOperators" : false}, _namedArguments );
        let scanner = new bare.createInstance(any,null,source,{
            includeComments : true,scanGenericMethodComments : genericMethodComments,scanLazyAssignmentOperators : lazyAssignmentOperators});
        let token = scanner.tokenize();
        return new ToAnalyzerTokenStreamConverter_WithListener(listener).convertTokens(token);
    }
    test_comments() : void {
        let source = '       /// Doc comment before class\n       /// second line\n       /// third\n       class Foo {\n         // Random comment\n         Object someField; // trailing comment\n         dynamic secondField;\n         /// Method doc\n         void someMethod(/* comment before closing paren */) {\n           // body comment\n         }\n         /** Doc comment 2 */\n         Foo2 bar() => new Baz();\n       } // EOF comment\n    ';
        var scanSource : (_namedArguments? : {includeComments? : boolean}) => any = (_namedArguments? : {includeComments? : boolean}) : any =>  {
            let {includeComments} = Object.assign({
            }, _namedArguments );
            return new bare.createInstance(any,null,source,{
                includeComments : includeComments}).tokenize();
        };
        let tokenCount : number = 0;
        let token : any = scanSource({
            includeComments : false});
        while (!token.isEof){
            ++tokenCount;
            expect(token.precedingComments,isNull);
            expect(token.type.kind,isNot(lib4.COMMENT_TOKEN));
            token = token.next;
        }
        expect(token.precedingComments,isNull);
        expect(tokenCount,26);
        tokenCount = 0;
        let previousEnd : number = 0;
        let spotCheckCount : number = 0;
        let commentTokenCount : number = 0;
        token = scanSource({
            includeComments : true});
        while (!token.isEof){
            ++tokenCount;
            let comment : any = token.precedingComments;
            while (comment != null){
                ++commentTokenCount;
                expect(comment.type.kind,lib4.COMMENT_TOKEN);
                expect(comment.charOffset,greaterThanOrEqualTo(previousEnd));
                previousEnd = op(Op.PLUS,comment.charOffset,comment.charCount);
                comment = comment.next;
            }
            expect(token.type.kind,isNot(lib4.COMMENT_TOKEN));
            expect(token.charOffset,greaterThanOrEqualTo(previousEnd));
            previousEnd = op(Op.PLUS,token.charOffset,token.charCount);
            if (op(Op.EQUALS,token.lexeme,'class')) {
                ++spotCheckCount;
                expect(((t)=>(!!t)?t.lexeme:null)(token.precedingComments),'/// Doc comment before class');
                expect(((t)=>(!!t)?t.lexeme:null)(((t)=>(!!t)?t.next:null)(token.precedingComments)),'/// second line');
                expect(((t)=>(!!t)?t.lexeme:null)(((t)=>(!!t)?t.next:null)(((t)=>(!!t)?t.next:null)(token.precedingComments))),'/// third');
                expect(((t)=>(!!t)?t.next:null)(((t)=>(!!t)?t.next:null)(((t)=>(!!t)?t.next:null)(token.precedingComments))),isNull);
            }else if (op(Op.EQUALS,token.lexeme,'Foo2')) {
                ++spotCheckCount;
                expect(((t)=>(!!t)?t.lexeme:null)(token.precedingComments),'/** Doc comment 2 */');
            }else if (op(Op.EQUALS,token.lexeme,')')) {
                if (token.precedingComments != null) {
                    ++spotCheckCount;
                    expect(((t)=>(!!t)?t.lexeme:null)(token.precedingComments),'/* comment before closing paren */');
                    expect(((t)=>(!!t)?t.next:null)(token.precedingComments),isNull);
                }
            }
            token = token.next;
        }
        expect(tokenCount,26);
        expect(spotCheckCount,3);
        expect(commentTokenCount,9);
        expect(((t)=>(!!t)?t.lexeme:null)(token.precedingComments),'// EOF comment');
    }
    test_CommentToken_remove() : void {
        let code = '/// aaa\n/// bbbb\n/// ccccc\nmain() {}\n';
        let token : any;
        let c1 : any;
        let c2 : any;
        let c3 : any;
        var prepareTokens : () => void = () : void =>  {
            token = new bare.createInstance(any,null,code,{
                includeComments : true}).tokenize();
            expect(token.type.kind,lib4.IDENTIFIER_TOKEN);
            c1 = token.precedingComments;
            c2 = c1.next;
            c3 = c2.next;
            expect(c3.next,isNull);
            expect(c1.parent,token);
            expect(c2.parent,token);
            expect(c3.parent,token);
            expect(c1.lexeme,'/// aaa');
            expect(c2.lexeme,'/// bbbb');
            expect(c3.lexeme,'/// ccccc');
        };
        {
            prepareTokens();
            c1.remove();
            expect(token.precedingComments,c2);
            expect(c2.next,c3);
            expect(c3.next,isNull);
        }
        {
            prepareTokens();
            c2.remove();
            expect(token.precedingComments,c1);
            expect(c1.next,c3);
            expect(c3.next,isNull);
        }
        {
            prepareTokens();
            c3.remove();
            expect(token.precedingComments,c1);
            expect(c1.next,c2);
            expect(c2.next,isNull);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_incomplete_string_interpolation() : void {
        super.test_incomplete_string_interpolation();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_mismatched_closer() : void {
        super.test_mismatched_closer();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_mismatched_opener() : void {
        super.test_mismatched_opener();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_mismatched_opener_in_interpolation() : void {
        let stringStart = this._scan('"${({(}}"');
        let interpolationStart = stringStart.next as any;
        let openParen1 = interpolationStart.next as any;
        let openBrace = openParen1.next as any;
        let openParen2 = openBrace.next as any;
        let closeParen2 = openParen2.next;
        let closeBrace = closeParen2.next;
        let closeParen1 = closeBrace.next;
        let interpolationEnd = closeParen1.next;
        let stringEnd = interpolationEnd.next;
        expect(stringEnd.next.type,TokenType.EOF);
        expect(interpolationStart.endToken,same(interpolationEnd));
        expect(openParen1.endToken,same(closeParen1));
        expect(openBrace.endToken,same(closeBrace));
        expect(openParen2.endToken,same(closeParen2));
    }
    test_next_previous() : void {
        let source = 'int a; /*1*/ /*2*/ /*3*/ B f(){if (a < 2) {}}';
        let token : any = new bare.createInstance(any,null,source,{
            includeComments : true}).tokenize();
        while (!token.isEof){
            expect(token.next.previous,token);
            let commentToken : any = token.precedingComments;
            while (commentToken != null){
                if (commentToken.next != null) {
                    expect(commentToken.next.previous,commentToken);
                }
                commentToken = commentToken.next;
            }
            token = token.next;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_multi_unterminated() : void {
        super.test_string_multi_unterminated();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_multi_unterminated_interpolation_block() : void {
        super.test_string_multi_unterminated_interpolation_block();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_multi_unterminated_interpolation_identifier() : void {
        super.test_string_multi_unterminated_interpolation_identifier();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_raw_multi_unterminated() : void {
        super.test_string_raw_multi_unterminated();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_raw_simple_unterminated_eof() : void {
        super.test_string_raw_simple_unterminated_eof();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_raw_simple_unterminated_eol() : void {
        super.test_string_raw_simple_unterminated_eol();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_simple_unterminated_eof() : void {
        super.test_string_simple_unterminated_eof();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_simple_unterminated_eol() : void {
        super.test_string_simple_unterminated_eol();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_simple_unterminated_interpolation_block() : void {
        super.test_string_simple_unterminated_interpolation_block();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_simple_unterminated_interpolation_identifier() : void {
        super.test_string_simple_unterminated_interpolation_identifier();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unmatched_openers() : void {
        let openBrace = this._scan('{[(') as any;
        let openBracket = openBrace.next as any;
        let openParen = openBracket.next as any;
        let closeParen = openParen.next;
        let closeBracket = closeParen.next;
        let closeBrace = closeBracket.next;
        expect(closeBrace.next.type,TokenType.EOF);
        expect(openBrace.endToken,same(closeBrace));
        expect(openBracket.endToken,same(closeBracket));
        expect(openParen.endToken,same(closeParen));
    }
    _scan(source : string,_namedArguments? : {genericMethodComments? : boolean,lazyAssignmentOperators? : boolean}) : any {
        let {genericMethodComments,lazyAssignmentOperators} = Object.assign({
            "genericMethodComments" : false,
            "lazyAssignmentOperators" : false}, _namedArguments );
        let listener : lib3.ErrorListener = new lib3.ErrorListener();
        let token : any = this.scanWithListener(source,listener,{
            genericMethodComments : genericMethodComments,lazyAssignmentOperators : lazyAssignmentOperators});
        listener.assertNoErrors();
        return token;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScannerTest_Fasta() {
    }
}

export namespace ScannerTest_Fasta_Base {
    export type Constructors = 'ScannerTest_Fasta_Base';
    export type Interface = Omit<ScannerTest_Fasta_Base, Constructors>;
}
@DartClass
export class ScannerTest_Fasta_Base {
    @Abstract
    scan(source : string) : any{ throw 'abstract'}
    test_match_angle_brackets() : void {
        let x = this.scan('x<y>');
        let lessThan = x.next as any;
        let y = lessThan.next;
        let greaterThan = y.next;
        expect(greaterThan.next.isEof,isTrue);
        expect(lessThan.endGroup,same(greaterThan));
    }
    test_match_angle_brackets_gt_gt() : void {
        let x = this.scan('x<y<z>>');
        let lessThan1 = x.next as any;
        let y = lessThan1.next;
        let lessThan2 = y.next as any;
        let z = lessThan2.next;
        let greaterThans = z.next;
        expect(greaterThans.next.isEof,isTrue);
        expect(lessThan1.endGroup,same(greaterThans));
        expect(lessThan2.endGroup,isNull);
    }
    test_match_angle_brackets_interrupted_by_close_brace() : void {
        let openBrace = this.scan('{x<y}>z') as any;
        let x = openBrace.next;
        let lessThan = x.next as any;
        let y = lessThan.next;
        let closeBrace = y.next;
        let greaterThan = closeBrace.next;
        let z = greaterThan.next;
        expect(z.next.isEof,isTrue);
        expect(openBrace.endGroup,same(closeBrace));
        expect(lessThan.endGroup,isNull);
    }
    test_match_angle_brackets_interrupted_by_close_bracket() : void {
        let openBracket = this.scan('[x<y]>z') as any;
        let x = openBracket.next;
        let lessThan = x.next as any;
        let y = lessThan.next;
        let closeBracket = y.next;
        let greaterThan = closeBracket.next;
        let z = greaterThan.next;
        expect(z.next.isEof,isTrue);
        expect(openBracket.endGroup,same(closeBracket));
        expect(lessThan.endGroup,isNull);
    }
    test_match_angle_brackets_interrupted_by_close_paren() : void {
        let openParen = this.scan('(x<y)>z') as any;
        let x = openParen.next;
        let lessThan = x.next as any;
        let y = lessThan.next;
        let closeParen = y.next;
        let greaterThan = closeParen.next;
        let z = greaterThan.next;
        expect(z.next.isEof,isTrue);
        expect(openParen.endGroup,same(closeParen));
        expect(lessThan.endGroup,isNull);
    }
    test_match_angle_brackets_interrupted_by_interpolation_expr() : void {
        let x = this.scan('x<"${y>z}"');
        let lessThan = x.next as any;
        let beginString = lessThan.next;
        let beginInterpolation = beginString.next as any;
        let y = beginInterpolation.next;
        let greaterThan = y.next;
        let z = greaterThan.next;
        let endInterpolation = z.next;
        let endString = endInterpolation.next;
        expect(endString.next.isEof,isTrue);
        expect(lessThan.endGroup,isNull);
        expect(beginInterpolation.endGroup,same(endInterpolation));
    }
    test_match_angle_brackets_interrupted_by_open_brace() : void {
        let x = this.scan('x<{y>z}');
        let lessThan = x.next as any;
        let openBrace = lessThan.next as any;
        let y = openBrace.next;
        let greaterThan = y.next;
        let z = greaterThan.next;
        let closeBrace = z.next;
        expect(closeBrace.next.isEof,isTrue);
        expect(lessThan.endGroup,isNull);
        expect(openBrace.endGroup,same(closeBrace));
    }
    test_match_angle_brackets_interrupted_by_open_bracket() : void {
        let x = this.scan('x<y[z>a]');
        let lessThan = x.next as any;
        let y = lessThan.next;
        let openBracket = y.next as any;
        let z = openBracket.next;
        let greaterThan = z.next;
        let a = greaterThan.next;
        let closeBracket = a.next;
        expect(closeBracket.next.isEof,isTrue);
        expect(lessThan.endGroup,isNull);
        expect(openBracket.endGroup,same(closeBracket));
    }
    test_match_angle_brackets_interrupted_by_open_paren() : void {
        let x = this.scan('x<y(z>a)');
        let lessThan = x.next as any;
        let y = lessThan.next;
        let openParen = y.next as any;
        let z = openParen.next;
        let greaterThan = z.next;
        let a = greaterThan.next;
        let closeParen = a.next;
        expect(closeParen.next.isEof,isTrue);
        expect(lessThan.endGroup,isNull);
        expect(openParen.endGroup,same(closeParen));
    }
    test_match_angle_brackets_nested() : void {
        let x = this.scan('x<y<z>,a>');
        let lessThan1 = x.next as any;
        let y = lessThan1.next;
        let lessThan2 = y.next as any;
        let z = lessThan2.next;
        let greaterThan1 = z.next;
        let comma = greaterThan1.next;
        let a = comma.next;
        let greaterThan2 = a.next;
        expect(greaterThan2.next.isEof,isTrue);
        expect(lessThan1.endGroup,same(greaterThan2));
        expect(lessThan2.endGroup,same(greaterThan1));
    }
    test_match_angle_brackets_unmatched_gt_gt() : void {
        let x = this.scan('x<y>>z');
        let lessThan = x.next as any;
        let y = lessThan.next;
        let greaterThans = y.next;
        let z = greaterThans.next;
        expect(z.next.isEof,isTrue);
        expect(lessThan.endGroup,isNull);
    }
    constructor() {
    }
    @defaultConstructor
    ScannerTest_Fasta_Base() {
    }
}

export namespace ToAnalyzerTokenStreamConverter_NoErrors {
    export type Constructors = 'ToAnalyzerTokenStreamConverter_NoErrors';
    export type Interface = Omit<ToAnalyzerTokenStreamConverter_NoErrors, Constructors>;
}
@DartClass
export class ToAnalyzerTokenStreamConverter_NoErrors extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
        fail(`Unexpected error: ${errorCode}, ${offset}, ${arguments}`);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ToAnalyzerTokenStreamConverter_NoErrors() {
    }
}

export namespace ToAnalyzerTokenStreamConverter_WithListener {
    export type Constructors = 'ToAnalyzerTokenStreamConverter_WithListener';
    export type Interface = Omit<ToAnalyzerTokenStreamConverter_WithListener, Constructors>;
}
@DartClass
export class ToAnalyzerTokenStreamConverter_WithListener extends any {
    _listener : lib3.ErrorListener;

    constructor(_listener : lib3.ErrorListener) {
    }
    @defaultConstructor
    ToAnalyzerTokenStreamConverter_WithListener(_listener : lib3.ErrorListener) {
        this._listener = _listener;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
        this._listener.errors.add(new lib3.TestError(offset,errorCode,arguments));
    }
}

export namespace ScannerTest_Fasta_Direct {
    export type Constructors = ScannerTest_Fasta_Base.Constructors | 'ScannerTest_Fasta_Direct';
    export type Interface = Omit<ScannerTest_Fasta_Direct, Constructors>;
}
@DartClass
export class ScannerTest_Fasta_Direct extends ScannerTest_Fasta_Base {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scan(source : string) : any {
        let scanner = new bare.createInstance(any,null,source,{
            includeComments : true});
        return scanner.tokenize();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScannerTest_Fasta_Direct() {
    }
}

export namespace ScannerTest_Fasta_Roundtrip {
    export type Constructors = ScannerTest_Fasta_Base.Constructors | 'ScannerTest_Fasta_Roundtrip';
    export type Interface = Omit<ScannerTest_Fasta_Roundtrip, Constructors>;
}
@DartClass
export class ScannerTest_Fasta_Roundtrip extends ScannerTest_Fasta_Base {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scan(source : string) : any {
        let scanner = new bare.createInstance(any,null,source,{
            includeComments : true});
        let fastaTokenStream = scanner.tokenize();
        let analyzerTokenStream = new ToAnalyzerTokenStreamConverter_NoErrors().convertTokens(fastaTokenStream);
        return fromAnalyzerTokenStream(analyzerTokenStream);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScannerTest_Fasta_Roundtrip() {
    }
}

export class properties {
}
