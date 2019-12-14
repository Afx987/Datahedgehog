/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/precedence_info_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(PrecedenceInfoTest);
    });
};
export namespace PrecedenceInfoTest {
    export type Constructors = 'PrecedenceInfoTest';
    export type Interface = Omit<PrecedenceInfoTest, Constructors>;
}
@DartClass
export class PrecedenceInfoTest {
    assertInfo(check : (source : string,token : any) => any,_namedArguments? : {includeLazyAssignmentOperators? : boolean}) : void {
        let {includeLazyAssignmentOperators} = Object.assign({
            "includeLazyAssignmentOperators" : true}, _namedArguments );
        var assertLexeme : (source : string) => void = (source : string) : void =>  {
            if (source == null || new core.DartString(source).isEmpty) return;
            let scanner = new bare.createInstance(any,null,source,{
                includeComments : true});
            let token = scanner.tokenize();
            check(source,token);
        };
        for(let type of TokenType.all) {
            assertLexeme(type.value);
        }
        assertLexeme('1.0');
        assertLexeme('0xA');
        assertLexeme('1');
        assertLexeme('var');
        assertLexeme('#!/');
        assertLexeme('"foo"');
        assertLexeme('bar');
        if (includeLazyAssignmentOperators) {
            assertLexeme('&&=');
            assertLexeme('||=');
        }
    }
    test_isOperator() : void {
        let operatorLexemes = new core.DartSet.from(new core.DartList.literal('&','&&','&&=','&=','!','!=','|','||','||=','|=','^','^=','=','==','>','>=','>>','>>=','[]','[]=','<','<=','<<','<<=','-','-=','--','%','%=','..','+','+=','++','?','?.','??','??=','/','/=','*','*=','~','~/','~/='));
        this.assertInfo((source : string,token : any) =>  {
            expect(token.isOperator,operatorLexemes.contains(source),{
                reason : source});
            expect(token.type.isOperator,operatorLexemes.contains(source),{
                reason : source});
        });
    }
    test_isAdditiveOperator() : void {
        let additiveLexemes = new core.DartList.literal('-','+');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isAdditiveOperator,additiveLexemes.contains(source),{
                reason : source});
        });
    }
    test_isAssignmentOperator() : void {
        let assignmentLexemes = new core.DartList.literal('&=','|=','^=','=','>>=','<<=','-=','%=','+=','??=','/=','*=','~/=');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isAssignmentOperator,assignmentLexemes.contains(source),{
                reason : source});
        });
    }
    test_isAssociativeOperator() : void {
        let associativeLexemes = new core.DartList.literal('&','&&','|','||','^','+','*');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isAssociativeOperator,associativeLexemes.contains(source),{
                reason : source});
        },{
            includeLazyAssignmentOperators : false});
    }
    test_isEqualityOperator() : void {
        let equalityLexemes = new core.DartList.literal('!=','==');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isEqualityOperator,equalityLexemes.contains(source),{
                reason : source});
        });
    }
    test_isIncrementOperator() : void {
        let incrementLexemes = new core.DartList.literal('--','++');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isIncrementOperator,incrementLexemes.contains(source),{
                reason : source});
        });
    }
    test_isMultiplicativeOperator() : void {
        let multiplicativeLexemes = new core.DartList.literal('%','/','*','~/');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isMultiplicativeOperator,multiplicativeLexemes.contains(source),{
                reason : source});
        });
    }
    test_isRelationalOperator() : void {
        let relationalLexemes = new core.DartList.literal('>','>=','<','<=');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isRelationalOperator,relationalLexemes.contains(source),{
                reason : source});
        });
    }
    test_isShiftOperator() : void {
        let shiftLexemes = new core.DartList.literal('>>','<<');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isShiftOperator,shiftLexemes.contains(source),{
                reason : source});
        });
    }
    test_isUnaryPostfixOperator() : void {
        let unaryPostfixLexemes = new core.DartList.literal('--','(','[','.','++','?.');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isUnaryPostfixOperator,unaryPostfixLexemes.contains(source),{
                reason : source});
        });
    }
    test_isUnaryPrefixOperator() : void {
        let unaryPrefixLexemes = new core.DartList.literal('!','--','++','~');
        this.assertInfo((source : string,token : any) =>  {
            expect(token.type.isUnaryPrefixOperator,unaryPrefixLexemes.contains(source),{
                reason : source});
        });
    }
    test_isUserDefinableOperator() : void {
        let userDefinableOperatorLexemes = new core.DartList.literal('&','|','^','==','>','>=','>>','[]','[]=','<','<=','<<','-','%','+','/','*','~','~/');
        this.assertInfo((source : string,token : any) =>  {
            let userDefinable = userDefinableOperatorLexemes.contains(source);
            expect(token.type.isUserDefinableOperator,userDefinable,{
                reason : source});
            expect(token.isUserDefinableOperator,userDefinable,{
                reason : source});
            expect(null /*topLevl*/.isUserDefinableOperator(token.lexeme),userDefinable,{
                reason : source});
        });
    }
    test_name() : void {
        var assertName : (source : string,name : string,_namedArguments? : {offset? : number}) => void = (source : string,name : string,_namedArguments? : {offset? : number}) : void =>  {
            let {offset} = Object.assign({
                "offset" : 0}, _namedArguments );
            if (source == null || new core.DartString(source).isEmpty) return;
            let scanner = new bare.createInstance(any,null,source,{
                includeComments : true});
            let token = scanner.tokenize();
            while (op(Op.LT,token.offset,offset)){
                token = token.next;
            }
            expect(token.type.name,name,{
                reason : `source: ${source}\ntoken: ${token.lexeme}`});
        };
        assertName('&','AMPERSAND');
        assertName('&&','AMPERSAND_AMPERSAND');
        assertName('&=','AMPERSAND_EQ');
        assertName('@','AT');
        assertName('!','BANG');
        assertName('!=','BANG_EQ');
        assertName('|','BAR');
        assertName('||','BAR_BAR');
        assertName('|=','BAR_EQ');
        assertName(':','COLON');
        assertName(',','COMMA');
        assertName('^','CARET');
        assertName('^=','CARET_EQ');
        assertName('}','CLOSE_CURLY_BRACKET');
        assertName(')','CLOSE_PAREN');
        assertName(']','CLOSE_SQUARE_BRACKET');
        assertName('=','EQ');
        assertName('==','EQ_EQ');
        assertName('=>','FUNCTION');
        assertName('>','GT');
        assertName('>=','GT_EQ');
        assertName('>>','GT_GT');
        assertName('>>=','GT_GT_EQ');
        assertName('#','HASH');
        assertName('[]','INDEX');
        assertName('[]=','INDEX_EQ');
        assertName('<','LT');
        assertName('<=','LT_EQ');
        assertName('<<','LT_LT');
        assertName('<<=','LT_LT_EQ');
        assertName('-','MINUS');
        assertName('-=','MINUS_EQ');
        assertName('--','MINUS_MINUS');
        assertName('{','OPEN_CURLY_BRACKET');
        assertName('(','OPEN_PAREN');
        assertName('[','OPEN_SQUARE_BRACKET');
        assertName('%','PERCENT');
        assertName('%=','PERCENT_EQ');
        assertName('.','PERIOD');
        assertName('..','PERIOD_PERIOD');
        assertName('+','PLUS');
        assertName('+=','PLUS_EQ');
        assertName('++','PLUS_PLUS');
        assertName('?','QUESTION');
        assertName('?.','QUESTION_PERIOD');
        assertName('??','QUESTION_QUESTION');
        assertName('??=','QUESTION_QUESTION_EQ');
        assertName(';','SEMICOLON');
        assertName('/','SLASH');
        assertName('/=','SLASH_EQ');
        assertName('*','STAR');
        assertName('*=','STAR_EQ');
        assertName('"${','STRING_INTERPOLATION_EXPRESSION',{
            offset : 1});
        assertName('"$','STRING_INTERPOLATION_IDENTIFIER',{
            offset : 1});
        assertName('~','TILDE');
        assertName('~/','TILDE_SLASH');
        assertName('~/=','TILDE_SLASH_EQ');
        assertName('`','BACKPING');
        assertName('\','BACKSLASH');
        assertName('...','PERIOD_PERIOD_PERIOD');
    }
    test_precedence() : void {
        let precedenceTable = new core.DartMap.literal([
            [16,new core.DartList.literal<string>('.','?.','++','--','[','(')],
            [15,new core.DartList.literal<string>('!','~')],
            [14,new core.DartList.literal<string>('*','/','~/','%')],
            [13,new core.DartList.literal<string>('+','-')],
            [12,new core.DartList.literal<string>('<<','>>')],
            [11,new core.DartList.literal<string>('&')],
            [10,new core.DartList.literal<string>('^')],
            [9,new core.DartList.literal<string>('|')],
            [8,new core.DartList.literal<string>('<','>','<=','>=','as','is','is!')],
            [7,new core.DartList.literal<string>('==','!=')],
            [6,new core.DartList.literal<string>('&&')],
            [5,new core.DartList.literal<string>('||')],
            [4,new core.DartList.literal<string>('??')],
            [3,new core.DartList.literal<string>('? :')],
            [2,new core.DartList.literal<string>('..')],
            [1,new core.DartList.literal<string>('=','*=','/=','+=','-=','&=','^=')]]);
        precedenceTable.forEach((precedence : any,lexemes : any) =>  {
            for(let source of lexemes) {
                let scanner = new bare.createInstance(any,null,source,{
                    includeComments : true});
                let token = scanner.tokenize();
                expect(token.type.precedence,precedence,{
                    reason : source});
            }
        });
    }
    test_type() : void {
        var assertLexeme : (source : string,tt : any) => void = (source : string,tt : any) : void =>  {
            let scanner = new bare.createInstance(any,null,source,{
                includeComments : true});
            let token = scanner.tokenize();
            expect(token.type,same(tt),{
                reason : source});
        };
        assertLexeme('1.0',TokenType.DOUBLE);
        assertLexeme('0xA',TokenType.HEXADECIMAL);
        assertLexeme('1',TokenType.INT);
        assertLexeme('var',Keyword.VAR);
        assertLexeme('#!/',TokenType.SCRIPT_TAG);
        assertLexeme('foo',TokenType.IDENTIFIER);
        assertLexeme('"foo"',TokenType.STRING);
    }
    constructor() {
    }
    @defaultConstructor
    PrecedenceInfoTest() {
    }
}

export class properties {
}
