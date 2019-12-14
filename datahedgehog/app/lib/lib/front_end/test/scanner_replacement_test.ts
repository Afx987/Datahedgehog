/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/scanner_replacement_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./scanner_test";
import * as convert from "@dart2ts/dart/convert";
import * as lib5 from "@dart2ts.packages/front_end/lib/src/scanner/token";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ScannerTest_Replacement);
    });
};
export namespace ScannerTest_Replacement {
    export type Constructors = lib3.ScannerTest.Constructors | 'ScannerTest_Replacement';
    export type Interface = Omit<ScannerTest_Replacement, Constructors>;
}
@DartClass
export class ScannerTest_Replacement extends lib3.ScannerTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scanWithListener(source : string,listener : lib3.ErrorListener,_namedArguments? : {genericMethodComments? : boolean,lazyAssignmentOperators? : boolean}) : any {
        let {genericMethodComments,lazyAssignmentOperators} = Object.assign({
            "genericMethodComments" : false,
            "lazyAssignmentOperators" : false}, _namedArguments );
        let result : any = null /*topLevl*/.scanString(source,{
            includeComments : true,scanGenericMethodComments : genericMethodComments,scanLazyAssignmentOperators : lazyAssignmentOperators,recover : ((bytes : core.DartList<number>,tokens : any,lineStarts : core.DartList<number>) =>  {
                return tokens;
            })});
        let tokens : any = result.tokens;
        this.assertValidTokenStream(tokens);
        this.assertValidBeginTokens(tokens);
        if (result.hasErrors) {
            let bytes : core.DartList<number> = convert.properties.UTF8.encode(source);
            tokens = defaultRecoveryStrategy(bytes,tokens,result.lineStarts);
            this.assertValidTokenStream(tokens,{
                errorsFirst : true});
        }
        return this.extractErrors(tokens,listener);
    }
    _assertOpenClosePair(source : string) : void {
        let open : any = this._scan(source);
        let close : any = open.next;
        expect(close.next.isEof,isTrue);
        expect(open.endGroup,close);
        expect(open.isSynthetic,isFalse);
        expect(close.isSynthetic,isFalse);
    }
    _assertOpenOnly(source : string) : void {
        let open : any = this._scan(source);
        let close : any = open.next;
        expect(close.next.isEof,isTrue);
        expect(open.endGroup,close);
        expect(open.isSynthetic,isFalse);
        expect(close.isSynthetic,isTrue);
    }
    test_lt() : void {
        let lt : any = this._scan('<');
        expect(lt.next.isEof,isTrue);
        expect(lt.isSynthetic,isFalse);
    }
    test_lt_gt() : void {
        this._assertOpenClosePair('< >');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_open_curly_bracket() : void {
        this._assertOpenOnly('{');
    }
    test_open_curly_bracket_with_close() : void {
        this._assertOpenClosePair('{ }');
    }
    test_open_paren() : void {
        this._assertOpenOnly('(');
    }
    test_open_paren_with_close() : void {
        this._assertOpenClosePair('( )');
    }
    test_open_square_bracket() : void {
        this._assertOpenOnly('[');
    }
    test_open_square_bracket_with_close() : void {
        this._assertOpenClosePair('[ ]');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_mismatched_closer() : void {
        let openParen : any = this._scan('(])');
        let closeParen : any = openParen.next;
        let closeBracket : any = closeParen.next;
        let closeParen2 : any = closeBracket.next;
        let eof : any = closeParen2.next;
        expect(openParen.endToken,same(closeParen));
        expect(closeParen.isSynthetic,isTrue);
        expect(eof.isEof,isTrue);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_mismatched_opener() : void {
        let openParen : any = this._scan('([)');
        let openBracket : any = openParen.next;
        let closeBracket : any = openBracket.next;
        let closeParen : any = closeBracket.next;
        let eof : any = closeParen.next;
        expect(openParen.endToken,same(closeParen));
        expect(closeParen.isSynthetic,isFalse);
        expect(openBracket.endToken,same(closeBracket));
        expect(closeBracket.isSynthetic,isTrue);
        expect(eof.isEof,isTrue);
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
        let eof = stringEnd.next;
        expect(interpolationStart.endToken,same(interpolationEnd));
        expect(interpolationEnd.isSynthetic,isFalse);
        expect(openParen1.endToken,same(closeParen1));
        expect(closeParen1.isSynthetic,isTrue);
        expect(openBrace.endToken,same(closeBrace));
        expect(closeBrace.isSynthetic,isFalse);
        expect(openParen2.endToken,same(closeParen2));
        expect(closeParen2.isSynthetic,isTrue);
        expect(eof.isEof,isTrue);
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
    test_string_simple_interpolation_missingIdentifier() : void {
        super.test_string_simple_interpolation_missingIdentifier();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_string_simple_interpolation_nonIdentifier() : void {
        super.test_string_simple_interpolation_nonIdentifier();
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
        let openBrace = this._scan('{[(<') as any;
        let openBracket = openBrace.next as any;
        let openParen = openBracket.next as any;
        let openLT = openParen.next as any;
        let closeParen = openLT.next;
        let closeBracket = closeParen.next;
        let closeBrace = closeBracket.next;
        let eof = closeBrace.next;
        expect(openBrace.endGroup,same(closeBrace));
        expect(openBracket.endGroup,same(closeBracket));
        expect(openParen.endGroup,same(closeParen));
        expect(eof.isEof,true);
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
    extractErrors(firstToken : any,listener : lib3.ErrorListener) : any {
        let token = firstToken;
        while (op(Op.EQUALS,token.type,lib5.TokenType.BAD_INPUT)){
            translateErrorToken(token,(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) =>  {
                listener.errors.add(new lib3.TestError(offset,errorCode,arguments));
            });
            token = token.next;
        }
        if (!token.previous.isEof) {
            let head = new bare.createInstance(any,null,lib5.TokenType.EOF,-1);
            token.previous = head;
            head.next = token;
        }
        return token;
    }
    assertValidTokenStream(firstToken : any,_namedArguments? : {errorsFirst? : boolean}) : void {
        let {errorsFirst} = Object.assign({
            "errorsFirst" : false}, _namedArguments );
        let token : any = firstToken;
        let previous : any = token.previous;
        expect(previous.isEof,isTrue,{
            reason : 'Missing leading EOF'});
        expect(previous.next,token,{
            reason : 'Invalid leading EOF'});
        expect(previous.previous,previous,{
            reason : 'Invalid leading EOF'});
        if (errorsFirst) {
            while (!token.isEof && is(token, any)){
                token = token.next;
            }
        }
        let isNotErrorToken = isNot(new bare.createInstance(any,null));
        while (!token.isEof){
            if (errorsFirst) expect(token,isNotErrorToken);
            previous = token;
            token = token.next;
            expect(token,isNotNull,{
                reason : previous.toString()});
            expect(token.previous,previous,{
                reason : token.toString()});
        }
        expect(token.next,token,{
            reason : 'Invalid trailing EOF'});
    }
    assertValidBeginTokens(firstToken : any) : void {
        let openerStack = new core.DartList.literal<any>();
        let lastClosedGroup : any;
        let token : any = firstToken;
        while (!token.isEof){
            if (is(token, any)) {
                if (token.lexeme != '<') expect(token.endGroup,isNotNull,{
                    reason : token.lexeme});
                if (token.endGroup != null) openerStack.add(token);
            }else if (openerStack.isNotEmpty && op(Op.EQUALS,openerStack.last.endGroup,token)) {
                lastClosedGroup = openerStack.removeLast();
                expect(token.isSynthetic,is(token.next, any),{
                    reason : 'Expect synthetic closer then error token'});
            }else if (is(token, any)) {
                expect(((t)=>(!!t)?t.next:null)(((t)=>(!!t)?t.endGroup:null)(lastClosedGroup)),same(token),{
                    reason : `Unexpected error token for group: ${lastClosedGroup}`});
                expect(token.begin,lastClosedGroup);
            }
            token = token.next;
        }
        expect(openerStack,isEmpty,{
            reason : 'Missing closers'});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScannerTest_Replacement() {
    }
}

export class properties {
}
