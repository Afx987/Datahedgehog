/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/token_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./scanner_roundtrip_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TokenTest);
    });
};
export namespace TokenTest {
    export type Constructors = 'TokenTest';
    export type Interface = Omit<TokenTest, Constructors>;
}
@DartClass
export class TokenTest {
    test_comments() : void {
        let source = '/// Single line dartdoc comment\nclass Foo {\n  /**\n   * Multi-line dartdoc comment\n   */\n  void bar() {\n    // Single line comment\n    int x = 0;\n    /* Multi-line comment */\n    x = x + 1;\n  }\n}\n';
        let scanner = new bare.createInstance(any,null,source,{
            includeComments : true});
        let token : any = scanner.tokenize();
        var nextComment : () => any = () : any =>  {
            while (!token.isEof){
                let comment : any = token.precedingComments;
                token = token.next;
                if (comment != null) return comment;
            }
            return null;
        };
        let comment : any = nextComment();
        expect(comment.lexeme,contains('Single line dartdoc comment'));
        expect(comment.type,TokenType.SINGLE_LINE_COMMENT);
        expect(comment,new bare.createInstance(any,null));
        comment = nextComment();
        expect(comment.lexeme,contains('Multi-line dartdoc comment'));
        expect(comment.type,TokenType.MULTI_LINE_COMMENT);
        expect(comment,new bare.createInstance(any,null));
        comment = nextComment();
        expect(comment.lexeme,contains('Single line comment'));
        expect(comment.type,TokenType.SINGLE_LINE_COMMENT);
        expect(comment,new bare.createInstance(any,null));
        comment = nextComment();
        expect(comment.lexeme,contains('Multi-line comment'));
        expect(comment.type,TokenType.MULTI_LINE_COMMENT);
        expect(comment,new bare.createInstance(any,null));
    }
    test_copy() : void {
        let source : string = '/* 1 */ /* 2 */ main() {print("hello"); return;}';
        let commentCount : number = 0;
        var assertCopiedToken : (token1 : any,token2 : any) => void = (token1 : any,token2 : any) : void =>  {
            if (op(Op.EQUALS,token1,null)) {
                expect(token2,isNull);
                return;
            }
            expect(token1.lexeme,token2.lexeme);
            expect(token1.offset,token2.offset,{
                reason : token1.lexeme});
            let comment1 = token1.precedingComments;
            let comment2 = token2.precedingComments;
            while (comment1 != null){
                ++commentCount;
                assertCopiedToken(comment1,comment2);
                comment1 = comment1.next;
                comment2 = comment2.next;
            }
            expect(comment2,isNull,{
                reason : ((t)=>(!!t)?t.lexeme:null)(comment2)});
        };
        let token1 = new bare.createInstance(any,null,source,{
            includeComments : true}).tokenize();
        let analyzerScanner = new lib3.TestScanner(new bare.createInstance(any,null,source));
        analyzerScanner.preserveComments = true;
        let token2 = analyzerScanner.tokenize();
        let stringTokenFound : boolean = false;
        let keywordTokenFound : boolean = false;
        let symbolTokenFound : boolean = false;
        let beginGroupTokenFound : boolean = false;
        while (!token1.isEof){
            if (is(token1, any)) stringTokenFound = true;
            if (is(token1, any)) keywordTokenFound = true;
            if (is(token1, any)) symbolTokenFound = true;
            if (is(token1, any)) beginGroupTokenFound = true;
            let copy1 = token1.copy();
            expect(copy1,isNotNull);
            let copy2 = token2.copy();
            expect(copy2,isNotNull);
            assertCopiedToken(copy1,copy2);
            token1 = token1.next;
            token2 = token2.next;
        }
        expect(token2.type,TokenType.EOF);
        expect(commentCount,2);
        expect(stringTokenFound,isTrue);
        expect(keywordTokenFound,isTrue);
        expect(symbolTokenFound,isTrue);
        expect(beginGroupTokenFound,isTrue);
    }
    test_isSynthetic() : void {
        let scanner = new bare.createInstance(any,null,'/* 1 */ foo',{
            includeComments : true});
        let token = scanner.tokenize();
        expect(token.isSynthetic,false);
        expect(token.precedingComments.isSynthetic,false);
        expect(token.previous.isSynthetic,true);
        expect(token.next.isEof,true);
        expect(token.next.isSynthetic,true);
    }
    test_matchesAny() : void {
        let scanner = new bare.createInstance(any,null,'true',{
            includeComments : true});
        let token = scanner.tokenize();
        expect(token.matchesAny(new core.DartList.literal(Keyword.TRUE)),true);
        expect(token.matchesAny(new core.DartList.literal(TokenType.AMPERSAND,Keyword.TRUE)),true);
        expect(token.matchesAny(new core.DartList.literal(TokenType.AMPERSAND)),false);
    }
    test_built_in_keywords() : void {
        let builtInKeywords = new core.DartSet.from(new core.DartList.literal(Keyword.ABSTRACT,Keyword.AS,Keyword.COVARIANT,Keyword.DEFERRED,Keyword.DYNAMIC,Keyword.EXPORT,Keyword.EXTERNAL,Keyword.FACTORY,Keyword.GET,Keyword.IMPLEMENTS,Keyword.IMPORT,Keyword.LIBRARY,Keyword.OPERATOR,Keyword.PART,Keyword.SET,Keyword.STATIC,Keyword.TYPEDEF));
        for(let keyword of Keyword.values) {
            let isBuiltIn = builtInKeywords.contains(keyword);
            expect(keyword.isBuiltIn,isBuiltIn,{
                reason : keyword.name});
            expect(keyword.isBuiltIn,isBuiltIn,{
                reason : keyword.name});
        }
    }
    test_pseudo_keywords() : void {
        let pseudoKeywords = new core.DartSet.from(new core.DartList.literal(Keyword.ASYNC,Keyword.AWAIT,Keyword.FUNCTION,Keyword.HIDE,Keyword.NATIVE,Keyword.OF,Keyword.ON,Keyword.PATCH,Keyword.SHOW,Keyword.SOURCE,Keyword.SYNC,Keyword.YIELD));
        for(let keyword of Keyword.values) {
            let isPseudo = pseudoKeywords.contains(keyword);
            expect(keyword.isPseudo,isPseudo,{
                reason : keyword.name});
        }
    }
    test_value() : void {
        let scanner = new bare.createInstance(any,null,'true & "home"',{
            includeComments : true});
        let token = scanner.tokenize();
        expect(token.lexeme,'true');
        expect(token.value(),Keyword.TRUE);
        token = token.next;
        expect(token.lexeme,'&');
        expect(token.value(),'&');
        token = token.next;
        expect(token.lexeme,'"home"');
        expect(token.value(),'"home"');
    }
    constructor() {
    }
    @defaultConstructor
    TokenTest() {
    }
}

export class properties {
}
