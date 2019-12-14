/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/scanner_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CharSequenceReaderTest);
        defineReflectiveTests(KeywordStateTest);
        defineReflectiveTests(ScannerTest);
        defineReflectiveTests(TokenTypeTest);
    });
};
export namespace CharSequenceReaderTest {
    export type Constructors = 'CharSequenceReaderTest';
    export type Interface = Omit<CharSequenceReaderTest, Constructors>;
}
@DartClass
export class CharSequenceReaderTest {
    test_advance() : void {
        let reader : any = new bare.createInstance(any,null,"x");
        expect(reader.advance(),120);
        expect(reader.advance(),-1);
        expect(reader.advance(),-1);
    }
    test_creation() : void {
        expect(new bare.createInstance(any,null,"x"),isNotNull);
    }
    test_getOffset() : void {
        let reader : any = new bare.createInstance(any,null,"x");
        expect(reader.offset,-1);
        reader.advance();
        expect(reader.offset,0);
        reader.advance();
        expect(reader.offset,0);
    }
    test_getString() : void {
        let reader : any = new bare.createInstance(any,null,"xyzzy");
        reader.offset = 3;
        expect(reader.getString(1,0),"yzz");
        expect(reader.getString(2,1),"zzy");
    }
    test_peek() : void {
        let reader : any = new bare.createInstance(any,null,"xy");
        expect(reader.peek(),120);
        expect(reader.peek(),120);
        reader.advance();
        expect(reader.peek(),121);
        expect(reader.peek(),121);
        reader.advance();
        expect(reader.peek(),-1);
        expect(reader.peek(),-1);
    }
    test_setOffset() : void {
        let reader : any = new bare.createInstance(any,null,"xyz");
        reader.offset = 2;
        expect(reader.offset,2);
    }
    constructor() {
    }
    @defaultConstructor
    CharSequenceReaderTest() {
    }
}

export namespace ErrorListener {
    export type Constructors = 'ErrorListener';
    export type Interface = Omit<ErrorListener, Constructors>;
}
@DartClass
export class ErrorListener {
    errors;

    assertErrors(expectedErrors : core.DartList<TestError>) : void {
        expect(this.errors,unorderedEquals(expectedErrors));
    }
    assertNoErrors() : void {
        this.assertErrors(new core.DartList.literal());
    }
    constructor() {
    }
    @defaultConstructor
    ErrorListener() {
        this.errors = new core.DartList.literal<TestError>();
    }
}

export namespace KeywordStateTest {
    export type Constructors = 'KeywordStateTest';
    export type Interface = Omit<KeywordStateTest, Constructors>;
}
@DartClass
export class KeywordStateTest {
    test_KeywordState() : void {
        let keywords : core.DartList<any> = Keyword.values;
        let keywordCount : number = keywords.length;
        let textToTest : core.DartList<string> = new core.DartList<string>(keywordCount * 3);
        for(let i : number = 0; i < keywordCount; i++){
            let syntax : string = keywords[i].lexeme;
            textToTest[i] = syntax;
            textToTest[i + keywordCount] = `${syntax}x`;
            textToTest[i + keywordCount * 2] = new core.DartString(syntax).substring(0,new core.DartString(syntax).length - 1);
        }
        let firstState : any = KeywordState.KEYWORD_STATE;
        for(let i : number = 0; i < textToTest.length; i++){
            let text : string = textToTest[i];
            let index : number = 0;
            let length : number = new core.DartString(text).length;
            let state : any = firstState;
            while (index < length && state != null){
                state = state.next(new core.DartString(text).codeUnitAt(index));
                index++;
            }
            if (i < keywordCount) {
                expect(state,isNotNull);
                expect(state.keyword(),isNotNull);
                expect(state.keyword(),keywords[i]);
            }else if (i < keywordCount * 2) {
                expect(state,isNull);
            }else {
                expect(state,isNotNull);
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    KeywordStateTest() {
    }
}

export namespace ScannerTestBase {
    export type Constructors = 'ScannerTestBase';
    export type Interface = Omit<ScannerTestBase, Constructors>;
}
@DartClass
export class ScannerTestBase {
    @Abstract
    scanWithListener(source : string,listener : ErrorListener,_namedArguments? : {genericMethodComments? : boolean,lazyAssignmentOperators? : boolean}) : any{ throw 'abstract'}
    test_ampersand() : void {
        this._assertToken(TokenType.AMPERSAND,"&");
    }
    test_ampersand_ampersand() : void {
        this._assertToken(TokenType.AMPERSAND_AMPERSAND,"&&");
    }
    test_ampersand_ampersand_eq() : void {
        this._assertToken(TokenType.AMPERSAND_AMPERSAND_EQ,"&&=",{
            lazyAssignmentOperators : true});
    }
    test_ampersand_eq() : void {
        this._assertToken(TokenType.AMPERSAND_EQ,"&=");
    }
    test_angle_brackets() : void {
        let lessThan = this._scan('<String>');
        let identifier = lessThan.next;
        let greaterThan = identifier.next;
        expect(greaterThan.next.type,TokenType.EOF);
        if (is(lessThan, any)) {
            expect(lessThan.endToken,greaterThan);
        }
        expect(greaterThan,isNot(new bare.createInstance(any,null)));
    }
    test_async_star() : void {
        let token : any = this._scan("async*");
        expect(token.type.isKeyword,true);
        expect(token.lexeme,'async');
        expect(token.next.type,TokenType.STAR);
        expect(token.next.next.type,TokenType.EOF);
    }
    test_at() : void {
        this._assertToken(TokenType.AT,"@");
    }
    test_backping() : void {
        this._assertToken(TokenType.BACKPING,"`");
    }
    test_backslash() : void {
        this._assertToken(TokenType.BACKSLASH,"\");
    }
    test_bang() : void {
        this._assertToken(TokenType.BANG,"!");
    }
    test_bang_eq() : void {
        this._assertToken(TokenType.BANG_EQ,"!=");
    }
    test_bar() : void {
        this._assertToken(TokenType.BAR,"|");
    }
    test_bar_bar() : void {
        this._assertToken(TokenType.BAR_BAR,"||");
    }
    test_bar_bar_eq() : void {
        this._assertToken(TokenType.BAR_BAR_EQ,"||=",{
            lazyAssignmentOperators : true});
    }
    test_bar_eq() : void {
        this._assertToken(TokenType.BAR_EQ,"|=");
    }
    test_caret() : void {
        this._assertToken(TokenType.CARET,"^");
    }
    test_caret_eq() : void {
        this._assertToken(TokenType.CARET_EQ,"^=");
    }
    test_close_curly_bracket() : void {
        this._assertToken(TokenType.CLOSE_CURLY_BRACKET,"}");
    }
    test_close_paren() : void {
        this._assertToken(TokenType.CLOSE_PAREN,")");
    }
    test_close_quare_bracket() : void {
        this._assertToken(TokenType.CLOSE_SQUARE_BRACKET,"]");
    }
    test_colon() : void {
        this._assertToken(TokenType.COLON,":");
    }
    test_comma() : void {
        this._assertToken(TokenType.COMMA,",");
    }
    test_comment_disabled_multi() : void {
        let scanner : any = new _TestScanner(new bare.createInstance(any,null,"/* comment */ "));
        scanner.preserveComments = false;
        let token : any = scanner.tokenize();
        expect(token,isNotNull);
        expect(token.precedingComments,isNull);
    }
    test_comment_generic_method_type_assign() : void {
        this._assertComment(TokenType.MULTI_LINE_COMMENT,"/*=comment*/");
        this._assertComment(TokenType.GENERIC_METHOD_TYPE_ASSIGN,"/*=comment*/",{
            genericMethodComments : true});
    }
    test_comment_generic_method_type_list() : void {
        this._assertComment(TokenType.MULTI_LINE_COMMENT,"/*<comment>*/");
        this._assertComment(TokenType.GENERIC_METHOD_TYPE_LIST,"/*<comment>*/",{
            genericMethodComments : true});
    }
    test_comment_multi() : void {
        this._assertComment(TokenType.MULTI_LINE_COMMENT,"/* comment */");
    }
    test_comment_multi_consecutive_2() : void {
        let token : any = this._scan("/* x */ /* y */ z");
        expect(token.type,TokenType.IDENTIFIER);
        expect(token.precedingComments,isNotNull);
        expect(token.precedingComments.value(),"/* x */");
        expect(token.precedingComments.previous,isNull);
        expect(token.precedingComments.next,isNotNull);
        expect(token.precedingComments.next.value(),"/* y */");
        expect(token.precedingComments.next.previous,same(token.precedingComments));
        expect(token.precedingComments.next.next,isNull);
    }
    test_comment_multi_consecutive_3() : void {
        let token : any = this._scan("/* x */ /* y */ /* z */ a");
        expect(token.type,TokenType.IDENTIFIER);
        expect(token.precedingComments,isNotNull);
        expect(token.precedingComments.value(),"/* x */");
        expect(token.precedingComments.previous,isNull);
        expect(token.precedingComments.next,isNotNull);
        expect(token.precedingComments.next.value(),"/* y */");
        expect(token.precedingComments.next.previous,same(token.precedingComments));
        expect(token.precedingComments.next.next,isNotNull);
        expect(token.precedingComments.next.next.value(),"/* z */");
        expect(token.precedingComments.next.next.previous,same(token.precedingComments.next));
        expect(token.precedingComments.next.next.next,isNull);
    }
    test_comment_multi_lineEnds() : void {
        let code : string = '/**\n * aa\n * bbb\n * c\n */';
        let listener : ErrorListener = new ErrorListener();
        let scanner : any = new _TestScanner(new bare.createInstance(any,null,code),listener);
        scanner.tokenize();
        expect(scanner.lineStarts,equals(new core.DartList.literal<number>(new core.DartString(code).indexOf('/**'),new core.DartString(code).indexOf(' * aa'),new core.DartString(code).indexOf(' * bbb'),new core.DartString(code).indexOf(' * c'),new core.DartString(code).indexOf(' */'))));
    }
    test_comment_multi_unterminated() : void {
        this._assertError(ScannerErrorCode.UNTERMINATED_MULTI_LINE_COMMENT,3,"/* x");
    }
    test_comment_nested() : void {
        this._assertComment(TokenType.MULTI_LINE_COMMENT,"/* comment /* within a */ comment */");
    }
    test_comment_single() : void {
        this._assertComment(TokenType.SINGLE_LINE_COMMENT,"// comment");
    }
    test_double_both_E() : void {
        this._assertToken(TokenType.DOUBLE,"0.123E4");
    }
    test_double_both_e() : void {
        this._assertToken(TokenType.DOUBLE,"0.123e4");
    }
    test_double_fraction() : void {
        this._assertToken(TokenType.DOUBLE,".123");
    }
    test_double_fraction_E() : void {
        this._assertToken(TokenType.DOUBLE,".123E4");
    }
    test_double_fraction_e() : void {
        this._assertToken(TokenType.DOUBLE,".123e4");
    }
    test_double_missingDigitInExponent() : void {
        this._assertError(ScannerErrorCode.MISSING_DIGIT,1,"1e");
    }
    test_double_whole_E() : void {
        this._assertToken(TokenType.DOUBLE,"12E4");
    }
    test_double_whole_e() : void {
        this._assertToken(TokenType.DOUBLE,"12e4");
    }
    test_eq() : void {
        this._assertToken(TokenType.EQ,"=");
    }
    test_eq_eq() : void {
        this._assertToken(TokenType.EQ_EQ,"==");
    }
    test_function() : void {
        this._assertToken(TokenType.FUNCTION,"=>");
    }
    test_gt() : void {
        this._assertToken(TokenType.GT,">");
    }
    test_gt_eq() : void {
        this._assertToken(TokenType.GT_EQ,">=");
    }
    test_gt_gt() : void {
        this._assertToken(TokenType.GT_GT,">>");
    }
    test_gt_gt_eq() : void {
        this._assertToken(TokenType.GT_GT_EQ,">>=");
    }
    test_hash() : void {
        this._assertToken(TokenType.HASH,"#");
    }
    test_hexidecimal() : void {
        this._assertToken(TokenType.HEXADECIMAL,"0x1A2B3C");
    }
    test_hexidecimal_missingDigit() : void {
        this._assertError(ScannerErrorCode.MISSING_HEX_DIGIT,1,"0x");
    }
    test_identifier() : void {
        this._assertToken(TokenType.IDENTIFIER,"result");
    }
    test_illegalChar_cyrillicLetter_middle() : void {
        this._assertError(ScannerErrorCode.ILLEGAL_CHARACTER,5,"Shcheгlov",new core.DartList.literal(1075));
    }
    test_illegalChar_cyrillicLetter_start() : void {
        this._assertError(ScannerErrorCode.ILLEGAL_CHARACTER,0,"Щ",new core.DartList.literal(1065));
    }
    test_illegalChar_nbsp() : void {
        this._assertError(ScannerErrorCode.ILLEGAL_CHARACTER,0," ",new core.DartList.literal(160));
    }
    test_illegalChar_notLetter() : void {
        this._assertError(ScannerErrorCode.ILLEGAL_CHARACTER,0,"̒",new core.DartList.literal(786));
    }
    test_incomplete_string_interpolation() : void {
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,9,"\"foo ${bar",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"\"foo ",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_EXPRESSION,"${",5),new bare.createInstance(any,null,TokenType.IDENTIFIER,"bar",7)));
    }
    test_index() : void {
        this._assertToken(TokenType.INDEX,"[]");
    }
    test_index_eq() : void {
        this._assertToken(TokenType.INDEX_EQ,"[]=");
    }
    test_int() : void {
        this._assertToken(TokenType.INT,"123");
    }
    test_int_initialZero() : void {
        this._assertToken(TokenType.INT,"0123");
    }
    test_keyword_abstract() : void {
        this._assertKeywordToken("abstract");
    }
    test_keyword_as() : void {
        this._assertKeywordToken("as");
    }
    test_keyword_assert() : void {
        this._assertKeywordToken("assert");
    }
    test_keyword_async() : void {
        this._assertKeywordToken("async");
    }
    test_keyword_await() : void {
        this._assertKeywordToken("await");
    }
    test_keyword_break() : void {
        this._assertKeywordToken("break");
    }
    test_keyword_case() : void {
        this._assertKeywordToken("case");
    }
    test_keyword_catch() : void {
        this._assertKeywordToken("catch");
    }
    test_keyword_class() : void {
        this._assertKeywordToken("class");
    }
    test_keyword_const() : void {
        this._assertKeywordToken("const");
    }
    test_keyword_continue() : void {
        this._assertKeywordToken("continue");
    }
    test_keyword_default() : void {
        this._assertKeywordToken("default");
    }
    test_keyword_deferred() : void {
        this._assertKeywordToken("deferred");
    }
    test_keyword_do() : void {
        this._assertKeywordToken("do");
    }
    test_keyword_dynamic() : void {
        this._assertKeywordToken("dynamic");
    }
    test_keyword_else() : void {
        this._assertKeywordToken("else");
    }
    test_keyword_enum() : void {
        this._assertKeywordToken("enum");
    }
    test_keyword_export() : void {
        this._assertKeywordToken("export");
    }
    test_keyword_extends() : void {
        this._assertKeywordToken("extends");
    }
    test_keyword_factory() : void {
        this._assertKeywordToken("factory");
    }
    test_keyword_false() : void {
        this._assertKeywordToken("false");
    }
    test_keyword_final() : void {
        this._assertKeywordToken("final");
    }
    test_keyword_finally() : void {
        this._assertKeywordToken("finally");
    }
    test_keyword_for() : void {
        this._assertKeywordToken("for");
    }
    test_keyword_get() : void {
        this._assertKeywordToken("get");
    }
    test_keyword_hide() : void {
        this._assertKeywordToken("hide");
    }
    test_keyword_if() : void {
        this._assertKeywordToken("if");
    }
    test_keyword_implements() : void {
        this._assertKeywordToken("implements");
    }
    test_keyword_import() : void {
        this._assertKeywordToken("import");
    }
    test_keyword_in() : void {
        this._assertKeywordToken("in");
    }
    test_keyword_is() : void {
        this._assertKeywordToken("is");
    }
    test_keyword_library() : void {
        this._assertKeywordToken("library");
    }
    test_keyword_native() : void {
        this._assertKeywordToken("native");
    }
    test_keyword_new() : void {
        this._assertKeywordToken("new");
    }
    test_keyword_null() : void {
        this._assertKeywordToken("null");
    }
    test_keyword_of() : void {
        this._assertKeywordToken("of");
    }
    test_keyword_on() : void {
        this._assertKeywordToken("on");
    }
    test_keyword_operator() : void {
        this._assertKeywordToken("operator");
    }
    test_keyword_part() : void {
        this._assertKeywordToken("part");
    }
    test_keyword_patch() : void {
        this._assertKeywordToken("patch");
    }
    test_keyword_rethrow() : void {
        this._assertKeywordToken("rethrow");
    }
    test_keyword_return() : void {
        this._assertKeywordToken("return");
    }
    test_keyword_set() : void {
        this._assertKeywordToken("set");
    }
    test_keyword_show() : void {
        this._assertKeywordToken("show");
    }
    test_keyword_source() : void {
        this._assertKeywordToken("source");
    }
    test_keyword_static() : void {
        this._assertKeywordToken("static");
    }
    test_keyword_super() : void {
        this._assertKeywordToken("super");
    }
    test_keyword_switch() : void {
        this._assertKeywordToken("switch");
    }
    test_keyword_sync() : void {
        this._assertKeywordToken("sync");
    }
    test_keyword_this() : void {
        this._assertKeywordToken("this");
    }
    test_keyword_throw() : void {
        this._assertKeywordToken("throw");
    }
    test_keyword_true() : void {
        this._assertKeywordToken("true");
    }
    test_keyword_try() : void {
        this._assertKeywordToken("try");
    }
    test_keyword_typedef() : void {
        this._assertKeywordToken("typedef");
    }
    test_keyword_var() : void {
        this._assertKeywordToken("var");
    }
    test_keyword_void() : void {
        this._assertKeywordToken("void");
    }
    test_keyword_while() : void {
        this._assertKeywordToken("while");
    }
    test_keyword_with() : void {
        this._assertKeywordToken("with");
    }
    test_keyword_yield() : void {
        this._assertKeywordToken("yield");
    }
    test_lt() : void {
        this._assertToken(TokenType.LT,"<");
    }
    test_lt_eq() : void {
        this._assertToken(TokenType.LT_EQ,"<=");
    }
    test_lt_lt() : void {
        this._assertToken(TokenType.LT_LT,"<<");
    }
    test_lt_lt_eq() : void {
        this._assertToken(TokenType.LT_LT_EQ,"<<=");
    }
    test_matching_braces() : void {
        let openBrace1 = this._scan('{1: {2: 3}}') as any;
        let one = openBrace1.next;
        let colon1 = one.next;
        let openBrace2 = colon1.next as any;
        let two = openBrace2.next;
        let colon2 = two.next;
        let three = colon2.next;
        let closeBrace1 = three.next;
        let closeBrace2 = closeBrace1.next;
        expect(closeBrace2.next.type,TokenType.EOF);
        expect(openBrace1.endToken,same(closeBrace2));
        expect(openBrace2.endToken,same(closeBrace1));
    }
    test_matching_brackets() : void {
        let openBracket1 = this._scan('[1, [2]]') as any;
        let one = openBracket1.next;
        let comma = one.next;
        let openBracket2 = comma.next as any;
        let two = openBracket2.next;
        let closeBracket1 = two.next;
        let closeBracket2 = closeBracket1.next;
        expect(closeBracket2.next.type,TokenType.EOF);
        expect(openBracket1.endToken,same(closeBracket2));
        expect(openBracket2.endToken,same(closeBracket1));
    }
    test_matching_parens() : void {
        let openParen1 = this._scan('(f(x))') as any;
        let f = openParen1.next;
        let openParen2 = f.next as any;
        let x = openParen2.next;
        let closeParen1 = x.next;
        let closeParen2 = closeParen1.next;
        expect(closeParen2.next.type,TokenType.EOF);
        expect(openParen1.endToken,same(closeParen2));
        expect(openParen2.endToken,same(closeParen1));
    }
    test_minus() : void {
        this._assertToken(TokenType.MINUS,"-");
    }
    test_minus_eq() : void {
        this._assertToken(TokenType.MINUS_EQ,"-=");
    }
    test_minus_minus() : void {
        this._assertToken(TokenType.MINUS_MINUS,"--");
    }
    test_mismatched_closer() : void {
        let openParen = this._scan('(])') as any;
        let closeBracket = openParen.next;
        let closeParen = closeBracket.next;
        expect(closeParen.next.type,TokenType.EOF);
        expect(openParen.endToken,same(closeParen));
    }
    test_mismatched_opener() : void {
        let openParen = this._scan('([)') as any;
        let openBracket = openParen.next as any;
        let closeParen = openBracket.next;
        expect(closeParen.next.type,TokenType.EOF);
        expect(openParen.endToken,isNull);
        expect(openBracket.endToken,isNull);
    }
    test_mismatched_opener_in_interpolation() : void {
        let stringStart = this._scan('"${({(}}"');
        let interpolationStart = stringStart.next as any;
        let openParen1 = interpolationStart.next as any;
        let openBrace = openParen1.next as any;
        let openParen2 = openBrace.next as any;
        let closeBrace = openParen2.next;
        let interpolationEnd = closeBrace.next;
        let stringEnd = interpolationEnd.next;
        expect(stringEnd.next.type,TokenType.EOF);
        expect(interpolationStart.endToken,same(interpolationEnd));
        expect(openParen1.endToken,isNull);
        expect(openBrace.endToken,same(closeBrace));
        expect(openParen2.endToken,isNull);
    }
    test_open_curly_bracket() : void {
        this._assertToken(TokenType.OPEN_CURLY_BRACKET,"{");
    }
    test_open_paren() : void {
        this._assertToken(TokenType.OPEN_PAREN,"(");
    }
    test_open_square_bracket() : void {
        this._assertToken(TokenType.OPEN_SQUARE_BRACKET,"[");
    }
    test_percent() : void {
        this._assertToken(TokenType.PERCENT,"%");
    }
    test_percent_eq() : void {
        this._assertToken(TokenType.PERCENT_EQ,"%=");
    }
    test_period() : void {
        this._assertToken(TokenType.PERIOD,".");
    }
    test_period_period() : void {
        this._assertToken(TokenType.PERIOD_PERIOD,"..");
    }
    test_period_period_period() : void {
        this._assertToken(TokenType.PERIOD_PERIOD_PERIOD,"...");
    }
    test_periodAfterNumberNotIncluded_identifier() : void {
        this._assertTokens("42.isEven()",new core.DartList.literal(new bare.createInstance(any,null,TokenType.INT,"42",0),new bare.createInstance(any,null,TokenType.PERIOD,2),new bare.createInstance(any,null,TokenType.IDENTIFIER,"isEven",3),new bare.createInstance(any,null,TokenType.OPEN_PAREN,9),new bare.createInstance(any,null,TokenType.CLOSE_PAREN,10)));
    }
    test_periodAfterNumberNotIncluded_period() : void {
        this._assertTokens("42..isEven()",new core.DartList.literal(new bare.createInstance(any,null,TokenType.INT,"42",0),new bare.createInstance(any,null,TokenType.PERIOD_PERIOD,2),new bare.createInstance(any,null,TokenType.IDENTIFIER,"isEven",4),new bare.createInstance(any,null,TokenType.OPEN_PAREN,10),new bare.createInstance(any,null,TokenType.CLOSE_PAREN,11)));
    }
    test_plus() : void {
        this._assertToken(TokenType.PLUS,"+");
    }
    test_plus_eq() : void {
        this._assertToken(TokenType.PLUS_EQ,"+=");
    }
    test_plus_plus() : void {
        this._assertToken(TokenType.PLUS_PLUS,"++");
    }
    test_question() : void {
        this._assertToken(TokenType.QUESTION,"?");
    }
    test_question_dot() : void {
        this._assertToken(TokenType.QUESTION_PERIOD,"?.");
    }
    test_question_question() : void {
        this._assertToken(TokenType.QUESTION_QUESTION,"??");
    }
    test_question_question_eq() : void {
        this._assertToken(TokenType.QUESTION_QUESTION_EQ,"??=");
    }
    test_scriptTag_withArgs() : void {
        this._assertToken(TokenType.SCRIPT_TAG,"#!/bin/dart -debug");
    }
    test_scriptTag_withoutSpace() : void {
        this._assertToken(TokenType.SCRIPT_TAG,"#!/bin/dart");
    }
    test_scriptTag_withSpace() : void {
        this._assertToken(TokenType.SCRIPT_TAG,"#! /bin/dart");
    }
    test_semicolon() : void {
        this._assertToken(TokenType.SEMICOLON,";");
    }
    test_setSourceStart() : void {
        let offsetDelta : number = 42;
        let listener : ErrorListener = new ErrorListener();
        let scanner : any = new _TestScanner(new bare.createInstance(any,null,"a",offsetDelta),listener);
        scanner.setSourceStart(3,9);
        scanner.tokenize();
        let lineStarts : core.DartList<number> = scanner.lineStarts;
        expect(lineStarts,isNotNull);
        expect(lineStarts.length,3);
        expect(lineStarts[2],33);
    }
    test_slash() : void {
        this._assertToken(TokenType.SLASH,"/");
    }
    test_slash_eq() : void {
        this._assertToken(TokenType.SLASH_EQ,"/=");
    }
    test_star() : void {
        this._assertToken(TokenType.STAR,"*");
    }
    test_star_eq() : void {
        this._assertToken(TokenType.STAR_EQ,"*=");
    }
    test_startAndEnd() : void {
        let token : any = this._scan("a");
        expect(token.offset,0);
        let previous : any = token.previous;
        expect(previous.next,token);
        expect(previous.previous,previous);
        expect(previous.type,TokenType.EOF);
        expect(previous.offset,-1);
        let next : any = token.next;
        expect(next.next,next);
        expect(next.previous,token);
        expect(next.type,TokenType.EOF);
        expect(next.offset,op(Op.PLUS,token.offset,token.length));
    }
    test_string_multi_double() : void {
        this._assertToken(TokenType.STRING,"\"\"\"line1\nline2\"\"\"");
    }
    test_string_multi_embeddedQuotes() : void {
        this._assertToken(TokenType.STRING,"\"\"\"line1\n\"\"\nline2\"\"\"");
    }
    test_string_multi_embeddedQuotes_escapedChar() : void {
        this._assertToken(TokenType.STRING,"\"\"\"a\"\"\tb\"\"\"");
    }
    test_string_multi_interpolation_block() : void {
        this._assertTokens("\"Hello ${name}!\"",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"\"Hello ",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_EXPRESSION,"${",7),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",9),new bare.createInstance(any,null,TokenType.CLOSE_CURLY_BRACKET,13),new bare.createInstance(any,null,TokenType.STRING,"!\"",14)));
    }
    test_string_multi_interpolation_identifier() : void {
        this._assertTokens("\"Hello $name!\"",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"\"Hello ",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",7),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",8),new bare.createInstance(any,null,TokenType.STRING,"!\"",12)));
    }
    test_string_multi_single() : void {
        this._assertToken(TokenType.STRING,"'''string'''");
    }
    test_string_multi_slashEnter() : void {
        this._assertToken(TokenType.STRING,"'''\\n'''");
    }
    test_string_multi_unterminated() : void {
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,8,"'''string",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'''string",0)));
    }
    test_string_multi_unterminated_interpolation_block() : void {
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,8,"'''${name",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'''",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_EXPRESSION,"${",3),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",5),new bare.createInstance(any,null,TokenType.STRING,"",9)));
    }
    test_string_multi_unterminated_interpolation_identifier() : void {
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,7,"'''$name",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'''",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",3),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",4),new bare.createInstance(any,null,TokenType.STRING,"",8)));
    }
    test_string_raw_multi_double() : void {
        this._assertToken(TokenType.STRING,"r\"\"\"line1\nline2\"\"\"");
    }
    test_string_raw_multi_single() : void {
        this._assertToken(TokenType.STRING,"r'''string'''");
    }
    test_string_raw_multi_unterminated() : void {
        let source : string = "r'''string";
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,9,source,new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,source,0)));
    }
    test_string_raw_simple_double() : void {
        this._assertToken(TokenType.STRING,"r\"string\"");
    }
    test_string_raw_simple_single() : void {
        this._assertToken(TokenType.STRING,"r'string'");
    }
    test_string_raw_simple_unterminated_eof() : void {
        let source : string = "r'string";
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,7,source,new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,source,0)));
    }
    test_string_raw_simple_unterminated_eol() : void {
        let source : string = "r'string";
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,8,`${source}\n`,new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,source,0)));
    }
    test_string_simple_double() : void {
        this._assertToken(TokenType.STRING,"\"string\"");
    }
    test_string_simple_escapedDollar() : void {
        this._assertToken(TokenType.STRING,"'a\$b'");
    }
    test_string_simple_interpolation_adjacentIdentifiers() : void {
        this._assertTokens("'$a$b'",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",1),new bare.createInstance(any,null,TokenType.IDENTIFIER,"a",2),new bare.createInstance(any,null,TokenType.STRING,"",3),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",3),new bare.createInstance(any,null,TokenType.IDENTIFIER,"b",4),new bare.createInstance(any,null,TokenType.STRING,"'",5)));
    }
    test_string_simple_interpolation_block() : void {
        this._assertTokens("'Hello ${name}!'",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'Hello ",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_EXPRESSION,"${",7),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",9),new bare.createInstance(any,null,TokenType.CLOSE_CURLY_BRACKET,13),new bare.createInstance(any,null,TokenType.STRING,"!'",14)));
    }
    test_string_simple_interpolation_blockWithNestedMap() : void {
        this._assertTokens("'a ${f({'b' : 'c'})} d'",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'a ",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_EXPRESSION,"${",3),new bare.createInstance(any,null,TokenType.IDENTIFIER,"f",5),new bare.createInstance(any,null,TokenType.OPEN_PAREN,6),new bare.createInstance(any,null,TokenType.OPEN_CURLY_BRACKET,7),new bare.createInstance(any,null,TokenType.STRING,"'b'",8),new bare.createInstance(any,null,TokenType.COLON,12),new bare.createInstance(any,null,TokenType.STRING,"'c'",14),new bare.createInstance(any,null,TokenType.CLOSE_CURLY_BRACKET,17),new bare.createInstance(any,null,TokenType.CLOSE_PAREN,18),new bare.createInstance(any,null,TokenType.CLOSE_CURLY_BRACKET,19),new bare.createInstance(any,null,TokenType.STRING," d'",20)));
    }
    test_string_simple_interpolation_firstAndLast() : void {
        this._assertTokens("'$greeting $name'",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",1),new bare.createInstance(any,null,TokenType.IDENTIFIER,"greeting",2),new bare.createInstance(any,null,TokenType.STRING," ",10),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",11),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",12),new bare.createInstance(any,null,TokenType.STRING,"'",16)));
    }
    test_string_simple_interpolation_identifier() : void {
        this._assertTokens("'Hello $name!'",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'Hello ",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",7),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",8),new bare.createInstance(any,null,TokenType.STRING,"!'",12)));
    }
    test_string_simple_interpolation_missingIdentifier() : void {
        this._assertTokens("'$x$'",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",1),new bare.createInstance(any,null,TokenType.IDENTIFIER,"x",2),new bare.createInstance(any,null,TokenType.STRING,"",3),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",3),new bare.createInstance(any,null,TokenType.STRING,"'",4)));
    }
    test_string_simple_interpolation_nonIdentifier() : void {
        this._assertTokens("'$1'",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",1),new bare.createInstance(any,null,TokenType.STRING,"1'",2)));
    }
    test_string_simple_single() : void {
        this._assertToken(TokenType.STRING,"'string'");
    }
    test_string_simple_unterminated_eof() : void {
        let source : string = "'string";
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,6,source,new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,source,0)));
    }
    test_string_simple_unterminated_eol() : void {
        let source : string = "'string";
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,7,`${source}`,new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,source,0)));
    }
    test_string_simple_unterminated_interpolation_block() : void {
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,6,"'${name",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_EXPRESSION,"${",1),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",3),new bare.createInstance(any,null,TokenType.STRING,"",7)));
    }
    test_string_simple_unterminated_interpolation_identifier() : void {
        this._assertErrorAndTokens(ScannerErrorCode.UNTERMINATED_STRING_LITERAL,5,"'$name",new core.DartList.literal(new bare.createInstance(any,null,TokenType.STRING,"'",0),new bare.createInstance(any,null,TokenType.STRING_INTERPOLATION_IDENTIFIER,"$",1),new bare.createInstance(any,null,TokenType.IDENTIFIER,"name",2),new bare.createInstance(any,null,TokenType.STRING,"",6)));
    }
    test_sync_star() : void {
        let token : any = this._scan("sync*");
        expect(token.type.isKeyword,true);
        expect(token.lexeme,'sync');
        expect(token.next.type,TokenType.STAR);
        expect(token.next.next.type,TokenType.EOF);
    }
    test_tilde() : void {
        this._assertToken(TokenType.TILDE,"~");
    }
    test_tilde_slash() : void {
        this._assertToken(TokenType.TILDE_SLASH,"~/");
    }
    test_tilde_slash_eq() : void {
        this._assertToken(TokenType.TILDE_SLASH_EQ,"~/=");
    }
    test_unclosedPairInInterpolation() : void {
        let listener : ErrorListener = new ErrorListener();
        this.scanWithListener("'${(}'",listener);
    }
    test_unmatched_openers() : void {
        let openBrace = this._scan('{[(') as any;
        let openBracket = openBrace.next as any;
        let openParen = openBracket.next as any;
        expect(openParen.next.type,TokenType.EOF);
        expect(openBrace.endToken,isNull);
        expect(openBracket.endToken,isNull);
        expect(openParen.endToken,isNull);
    }
    _assertComment(commentType : any,source : string,_namedArguments? : {genericMethodComments? : boolean}) : void {
        let {genericMethodComments} = Object.assign({
            "genericMethodComments" : false}, _namedArguments );
        let token : any = this._scan(source,{
            genericMethodComments : genericMethodComments});
        expect(token,isNotNull);
        expect(token.type,TokenType.EOF);
        let comment : any = token.precedingComments;
        expect(comment,isNotNull);
        expect(comment.type,commentType);
        expect(comment.offset,0);
        expect(comment.length,new core.DartString(source).length);
        expect(comment.lexeme,source);
        token = this._scan(`${source}\n`,{
            genericMethodComments : genericMethodComments});
        expect(token,isNotNull);
        expect(token.type,TokenType.EOF);
        comment = token.precedingComments;
        expect(comment,isNotNull);
        expect(comment.type,commentType);
        expect(comment.offset,0);
        expect(comment.length,new core.DartString(source).length);
        expect(comment.lexeme,source);
    }
    _assertError(expectedError : any,expectedOffset : number,source : string,arguments? : core.DartList<core.DartObject>) : void {
        let listener : ErrorListener = new ErrorListener();
        this.scanWithListener(source,listener);
        listener.assertErrors(new core.DartList.literal(new TestError(expectedOffset,expectedError,arguments)));
    }
    _assertErrorAndTokens(expectedError : any,expectedOffset : number,source : string,expectedTokens : core.DartList<any>) : void {
        let listener : ErrorListener = new ErrorListener();
        let token : any = this.scanWithListener(source,listener);
        listener.assertErrors(new core.DartList.literal(new TestError(expectedOffset,expectedError,null)));
        this._checkTokens(token,expectedTokens);
    }
    _assertKeywordToken(source : string) : void {
        let token : any = this._scan(source);
        expect(token,isNotNull);
        expect(token.type.isKeyword,true);
        expect(token.offset,0);
        expect(token.length,new core.DartString(source).length);
        expect(token.lexeme,source);
        let value : core.DartObject = token.value();
        expect(is(value, any),isTrue);
        expect((value as any).lexeme,source);
        token = this._scan(` ${source} `);
        expect(token,isNotNull);
        expect(token.type.isKeyword,true);
        expect(token.offset,1);
        expect(token.length,new core.DartString(source).length);
        expect(token.lexeme,source);
        value = token.value();
        expect(is(value, any),isTrue);
        expect((value as any).lexeme,source);
        expect(token.next.type,TokenType.EOF);
    }
    _assertToken(expectedType : any,source : string,_namedArguments? : {lazyAssignmentOperators? : boolean}) : any {
        let {lazyAssignmentOperators} = Object.assign({
            "lazyAssignmentOperators" : false}, _namedArguments );
        let originalToken : any = this._scan(source,{
            lazyAssignmentOperators : lazyAssignmentOperators});
        expect(originalToken,isNotNull);
        expect(originalToken.type,expectedType);
        expect(originalToken.offset,0);
        expect(originalToken.length,new core.DartString(source).length);
        expect(originalToken.lexeme,source);
        if (op(Op.EQUALS,expectedType,TokenType.SCRIPT_TAG)) {
            return originalToken;
        }else if (op(Op.EQUALS,expectedType,TokenType.SINGLE_LINE_COMMENT)) {
            let tokenWithSpaces : any = this._scan(` ${source}`,{
                lazyAssignmentOperators : lazyAssignmentOperators});
            expect(tokenWithSpaces,isNotNull);
            expect(tokenWithSpaces.type,expectedType);
            expect(tokenWithSpaces.offset,1);
            expect(tokenWithSpaces.length,new core.DartString(source).length);
            expect(tokenWithSpaces.lexeme,source);
            return originalToken;
        }else if (op(Op.EQUALS,expectedType,TokenType.INT) || op(Op.EQUALS,expectedType,TokenType.DOUBLE)) {
            let tokenWithLowerD : any = this._scan(`${source}d`,{
                lazyAssignmentOperators : lazyAssignmentOperators});
            expect(tokenWithLowerD,isNotNull);
            expect(tokenWithLowerD.type,expectedType);
            expect(tokenWithLowerD.offset,0);
            expect(tokenWithLowerD.length,new core.DartString(source).length);
            expect(tokenWithLowerD.lexeme,source);
            let tokenWithUpperD : any = this._scan(`${source}D`,{
                lazyAssignmentOperators : lazyAssignmentOperators});
            expect(tokenWithUpperD,isNotNull);
            expect(tokenWithUpperD.type,expectedType);
            expect(tokenWithUpperD.offset,0);
            expect(tokenWithUpperD.length,new core.DartString(source).length);
            expect(tokenWithUpperD.lexeme,source);
        }
        let tokenWithSpaces : any = this._scan(` ${source} `,{
            lazyAssignmentOperators : lazyAssignmentOperators});
        expect(tokenWithSpaces,isNotNull);
        expect(tokenWithSpaces.type,expectedType);
        expect(tokenWithSpaces.offset,1);
        expect(tokenWithSpaces.length,new core.DartString(source).length);
        expect(tokenWithSpaces.lexeme,source);
        return originalToken;
    }
    _assertTokens(source : string,expectedTokens : core.DartList<any>) : void {
        let token : any = this._scan(source);
        this._checkTokens(token,expectedTokens);
    }
    _checkTokens(firstToken : any,expectedTokens : core.DartList<any>) : void {
        expect(firstToken,isNotNull);
        let token : any = firstToken;
        for(let i : number = 0; i < expectedTokens.length; i++){
            let expectedToken : any = expectedTokens[i];
            expect(token.type,expectedToken.type,{
                reason : `Wrong type for token ${i}`});
            expect(token.offset,expectedToken.offset,{
                reason : `Wrong offset for token ${i}`});
            expect(token.length,expectedToken.length,{
                reason : `Wrong length for token ${i}`});
            expect(token.lexeme,expectedToken.lexeme,{
                reason : `Wrong lexeme for token ${i}`});
            token = token.next;
            expect(token,isNotNull);
        }
        expect(token.type,TokenType.EOF);
    }
    _scan(source : string,_namedArguments? : {genericMethodComments? : boolean,lazyAssignmentOperators? : boolean}) : any {
        let {genericMethodComments,lazyAssignmentOperators} = Object.assign({
            "genericMethodComments" : false,
            "lazyAssignmentOperators" : false}, _namedArguments );
        let listener : ErrorListener = new ErrorListener();
        let token : any = this.scanWithListener(source,listener,{
            genericMethodComments : genericMethodComments,lazyAssignmentOperators : lazyAssignmentOperators});
        listener.assertNoErrors();
        return token;
    }
    constructor() {
    }
    @defaultConstructor
    ScannerTestBase() {
    }
}

export namespace TestError {
    export type Constructors = 'TestError';
    export type Interface = Omit<TestError, Constructors>;
}
@DartClass
export class TestError {
    offset : number;

    errorCode : any;

    arguments : core.DartList<core.DartObject>;

    constructor(offset : number,errorCode : any,arguments : core.DartList<core.DartObject>) {
    }
    @defaultConstructor
    TestError(offset : number,errorCode : any,arguments : core.DartList<core.DartObject>) {
        this.offset = offset;
        this.errorCode = errorCode;
        this.arguments = arguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() {
        let h = ((_) : any =>  {
            {
                add(this.offset);
                add(this.errorCode);
                return _;
            }
        })(new bare.createInstance(any,null));
        if (this.arguments != null) {
            for(let argument of this.arguments) {
                h.add(argument);
            }
        }
        return h.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) {
        if (is(other, TestError) && this.offset == other.offset && op(Op.EQUALS,this.errorCode,other.errorCode)) {
            if (this.arguments == null) return other.arguments == null;
            if (other.arguments == null) return false;
            if (this.arguments.length != other.arguments.length) return false;
            for(let i : number = 0; i < this.arguments.length; i++){
                if (this.arguments[i] != other.arguments[i]) return false;
            }
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() {
        let argString = this.arguments == null ? '' : `(${this.arguments.join(', ')})`;
        return `Error(${this.offset}, ${this.errorCode}${argString})`;
    }
}

export namespace TokenTypeTest {
    export type Constructors = 'TokenTypeTest';
    export type Interface = Omit<TokenTypeTest, Constructors>;
}
@DartClass
export class TokenTypeTest {
    test_isOperator() : void {
        expect(TokenType.AMPERSAND.isOperator,isTrue);
        expect(TokenType.AMPERSAND_AMPERSAND.isOperator,isTrue);
        expect(TokenType.AMPERSAND_EQ.isOperator,isTrue);
        expect(TokenType.BANG.isOperator,isTrue);
        expect(TokenType.BANG_EQ.isOperator,isTrue);
        expect(TokenType.BAR.isOperator,isTrue);
        expect(TokenType.BAR_BAR.isOperator,isTrue);
        expect(TokenType.BAR_EQ.isOperator,isTrue);
        expect(TokenType.CARET.isOperator,isTrue);
        expect(TokenType.CARET_EQ.isOperator,isTrue);
        expect(TokenType.EQ.isOperator,isTrue);
        expect(TokenType.EQ_EQ.isOperator,isTrue);
        expect(TokenType.GT.isOperator,isTrue);
        expect(TokenType.GT_EQ.isOperator,isTrue);
        expect(TokenType.GT_GT.isOperator,isTrue);
        expect(TokenType.GT_GT_EQ.isOperator,isTrue);
        expect(TokenType.INDEX.isOperator,isTrue);
        expect(TokenType.INDEX_EQ.isOperator,isTrue);
        expect(TokenType.LT.isOperator,isTrue);
        expect(TokenType.LT_EQ.isOperator,isTrue);
        expect(TokenType.LT_LT.isOperator,isTrue);
        expect(TokenType.LT_LT_EQ.isOperator,isTrue);
        expect(TokenType.MINUS.isOperator,isTrue);
        expect(TokenType.MINUS_EQ.isOperator,isTrue);
        expect(TokenType.MINUS_MINUS.isOperator,isTrue);
        expect(TokenType.PERCENT.isOperator,isTrue);
        expect(TokenType.PERCENT_EQ.isOperator,isTrue);
        expect(TokenType.PERIOD_PERIOD.isOperator,isTrue);
        expect(TokenType.PLUS.isOperator,isTrue);
        expect(TokenType.PLUS_EQ.isOperator,isTrue);
        expect(TokenType.PLUS_PLUS.isOperator,isTrue);
        expect(TokenType.QUESTION.isOperator,isTrue);
        expect(TokenType.SLASH.isOperator,isTrue);
        expect(TokenType.SLASH_EQ.isOperator,isTrue);
        expect(TokenType.STAR.isOperator,isTrue);
        expect(TokenType.STAR_EQ.isOperator,isTrue);
        expect(TokenType.TILDE.isOperator,isTrue);
        expect(TokenType.TILDE_SLASH.isOperator,isTrue);
        expect(TokenType.TILDE_SLASH_EQ.isOperator,isTrue);
    }
    test_isUserDefinableOperator() : void {
        expect(TokenType.AMPERSAND.isUserDefinableOperator,isTrue);
        expect(TokenType.BAR.isUserDefinableOperator,isTrue);
        expect(TokenType.CARET.isUserDefinableOperator,isTrue);
        expect(TokenType.EQ_EQ.isUserDefinableOperator,isTrue);
        expect(TokenType.GT.isUserDefinableOperator,isTrue);
        expect(TokenType.GT_EQ.isUserDefinableOperator,isTrue);
        expect(TokenType.GT_GT.isUserDefinableOperator,isTrue);
        expect(TokenType.INDEX.isUserDefinableOperator,isTrue);
        expect(TokenType.INDEX_EQ.isUserDefinableOperator,isTrue);
        expect(TokenType.LT.isUserDefinableOperator,isTrue);
        expect(TokenType.LT_EQ.isUserDefinableOperator,isTrue);
        expect(TokenType.LT_LT.isUserDefinableOperator,isTrue);
        expect(TokenType.MINUS.isUserDefinableOperator,isTrue);
        expect(TokenType.PERCENT.isUserDefinableOperator,isTrue);
        expect(TokenType.PLUS.isUserDefinableOperator,isTrue);
        expect(TokenType.SLASH.isUserDefinableOperator,isTrue);
        expect(TokenType.STAR.isUserDefinableOperator,isTrue);
        expect(TokenType.TILDE.isUserDefinableOperator,isTrue);
        expect(TokenType.TILDE_SLASH.isUserDefinableOperator,isTrue);
    }
    constructor() {
    }
    @defaultConstructor
    TokenTypeTest() {
    }
}

export namespace _TestScanner {
    export type Constructors = '_TestScanner';
    export type Interface = Omit<_TestScanner, Constructors>;
}
@DartClass
export class _TestScanner extends any {
    listener : ErrorListener;

    constructor(reader : any,listener? : ErrorListener) {
    }
    @defaultConstructor
    _TestScanner(reader : any,listener? : ErrorListener) {
        super.create(reader);
        this.listener = listener;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
        if (this.listener != null) {
            this.listener.errors.add(new TestError(offset,errorCode,arguments));
        }
    }
}

export namespace ScannerTest {
    export type Constructors = ScannerTestBase.Constructors | 'ScannerTest';
    export type Interface = Omit<ScannerTest, Constructors>;
}
@DartClass
export class ScannerTest extends ScannerTestBase {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scanWithListener(source : string,listener : ErrorListener,_namedArguments? : {genericMethodComments? : boolean,lazyAssignmentOperators? : boolean}) : any {
        let {genericMethodComments,lazyAssignmentOperators} = Object.assign({
            "genericMethodComments" : false,
            "lazyAssignmentOperators" : false}, _namedArguments );
        let scanner : any = new _TestScanner(new bare.createInstance(any,null,source),listener);
        scanner.scanGenericMethodComments = genericMethodComments;
        scanner.scanLazyAssignmentOperators = lazyAssignmentOperators;
        return scanner.tokenize();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_incomplete_string_interpolation() : void {
        super.test_incomplete_string_interpolation();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScannerTest() {
    }
}

export class properties {
}
