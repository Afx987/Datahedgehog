/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/token_constants.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./characters";

export class properties {
    private static __$PERIOD_TOKEN : number;
    static get PERIOD_TOKEN() : number { 
        if (this.__$PERIOD_TOKEN===undefined) {
            this.__$PERIOD_TOKEN = lib3.properties.$PERIOD;
        }
        return this.__$PERIOD_TOKEN;
    }
    static set PERIOD_TOKEN(__$value : number)  { 
        this.__$PERIOD_TOKEN = __$value;
    }

    private static __$KEYWORD_TOKEN : number;
    static get KEYWORD_TOKEN() : number { 
        if (this.__$KEYWORD_TOKEN===undefined) {
            this.__$KEYWORD_TOKEN = lib3.properties.$k;
        }
        return this.__$KEYWORD_TOKEN;
    }
    static set KEYWORD_TOKEN(__$value : number)  { 
        this.__$KEYWORD_TOKEN = __$value;
    }

    private static __$IDENTIFIER_TOKEN : number;
    static get IDENTIFIER_TOKEN() : number { 
        if (this.__$IDENTIFIER_TOKEN===undefined) {
            this.__$IDENTIFIER_TOKEN = lib3.properties.$a;
        }
        return this.__$IDENTIFIER_TOKEN;
    }
    static set IDENTIFIER_TOKEN(__$value : number)  { 
        this.__$IDENTIFIER_TOKEN = __$value;
    }

    private static __$SCRIPT_TOKEN : number;
    static get SCRIPT_TOKEN() : number { 
        if (this.__$SCRIPT_TOKEN===undefined) {
            this.__$SCRIPT_TOKEN = lib3.properties.$b;
        }
        return this.__$SCRIPT_TOKEN;
    }
    static set SCRIPT_TOKEN(__$value : number)  { 
        this.__$SCRIPT_TOKEN = __$value;
    }

    private static __$BAD_INPUT_TOKEN : number;
    static get BAD_INPUT_TOKEN() : number { 
        if (this.__$BAD_INPUT_TOKEN===undefined) {
            this.__$BAD_INPUT_TOKEN = lib3.properties.$X;
        }
        return this.__$BAD_INPUT_TOKEN;
    }
    static set BAD_INPUT_TOKEN(__$value : number)  { 
        this.__$BAD_INPUT_TOKEN = __$value;
    }

    private static __$DOUBLE_TOKEN : number;
    static get DOUBLE_TOKEN() : number { 
        if (this.__$DOUBLE_TOKEN===undefined) {
            this.__$DOUBLE_TOKEN = lib3.properties.$d;
        }
        return this.__$DOUBLE_TOKEN;
    }
    static set DOUBLE_TOKEN(__$value : number)  { 
        this.__$DOUBLE_TOKEN = __$value;
    }

    private static __$INT_TOKEN : number;
    static get INT_TOKEN() : number { 
        if (this.__$INT_TOKEN===undefined) {
            this.__$INT_TOKEN = lib3.properties.$i;
        }
        return this.__$INT_TOKEN;
    }
    static set INT_TOKEN(__$value : number)  { 
        this.__$INT_TOKEN = __$value;
    }

    private static __$RECOVERY_TOKEN : number;
    static get RECOVERY_TOKEN() : number { 
        if (this.__$RECOVERY_TOKEN===undefined) {
            this.__$RECOVERY_TOKEN = lib3.properties.$r;
        }
        return this.__$RECOVERY_TOKEN;
    }
    static set RECOVERY_TOKEN(__$value : number)  { 
        this.__$RECOVERY_TOKEN = __$value;
    }

    private static __$HEXADECIMAL_TOKEN : number;
    static get HEXADECIMAL_TOKEN() : number { 
        if (this.__$HEXADECIMAL_TOKEN===undefined) {
            this.__$HEXADECIMAL_TOKEN = lib3.properties.$x;
        }
        return this.__$HEXADECIMAL_TOKEN;
    }
    static set HEXADECIMAL_TOKEN(__$value : number)  { 
        this.__$HEXADECIMAL_TOKEN = __$value;
    }

    private static __$STRING_TOKEN : number;
    static get STRING_TOKEN() : number { 
        if (this.__$STRING_TOKEN===undefined) {
            this.__$STRING_TOKEN = lib3.properties.$SQ;
        }
        return this.__$STRING_TOKEN;
    }
    static set STRING_TOKEN(__$value : number)  { 
        this.__$STRING_TOKEN = __$value;
    }

    private static __$AMPERSAND_TOKEN : number;
    static get AMPERSAND_TOKEN() : number { 
        if (this.__$AMPERSAND_TOKEN===undefined) {
            this.__$AMPERSAND_TOKEN = lib3.properties.$AMPERSAND;
        }
        return this.__$AMPERSAND_TOKEN;
    }
    static set AMPERSAND_TOKEN(__$value : number)  { 
        this.__$AMPERSAND_TOKEN = __$value;
    }

    private static __$BACKPING_TOKEN : number;
    static get BACKPING_TOKEN() : number { 
        if (this.__$BACKPING_TOKEN===undefined) {
            this.__$BACKPING_TOKEN = lib3.properties.$BACKPING;
        }
        return this.__$BACKPING_TOKEN;
    }
    static set BACKPING_TOKEN(__$value : number)  { 
        this.__$BACKPING_TOKEN = __$value;
    }

    private static __$BACKSLASH_TOKEN : number;
    static get BACKSLASH_TOKEN() : number { 
        if (this.__$BACKSLASH_TOKEN===undefined) {
            this.__$BACKSLASH_TOKEN = lib3.properties.$BACKSLASH;
        }
        return this.__$BACKSLASH_TOKEN;
    }
    static set BACKSLASH_TOKEN(__$value : number)  { 
        this.__$BACKSLASH_TOKEN = __$value;
    }

    private static __$BANG_TOKEN : number;
    static get BANG_TOKEN() : number { 
        if (this.__$BANG_TOKEN===undefined) {
            this.__$BANG_TOKEN = lib3.properties.$BANG;
        }
        return this.__$BANG_TOKEN;
    }
    static set BANG_TOKEN(__$value : number)  { 
        this.__$BANG_TOKEN = __$value;
    }

    private static __$BAR_TOKEN : number;
    static get BAR_TOKEN() : number { 
        if (this.__$BAR_TOKEN===undefined) {
            this.__$BAR_TOKEN = lib3.properties.$BAR;
        }
        return this.__$BAR_TOKEN;
    }
    static set BAR_TOKEN(__$value : number)  { 
        this.__$BAR_TOKEN = __$value;
    }

    private static __$COLON_TOKEN : number;
    static get COLON_TOKEN() : number { 
        if (this.__$COLON_TOKEN===undefined) {
            this.__$COLON_TOKEN = lib3.properties.$COLON;
        }
        return this.__$COLON_TOKEN;
    }
    static set COLON_TOKEN(__$value : number)  { 
        this.__$COLON_TOKEN = __$value;
    }

    private static __$COMMA_TOKEN : number;
    static get COMMA_TOKEN() : number { 
        if (this.__$COMMA_TOKEN===undefined) {
            this.__$COMMA_TOKEN = lib3.properties.$COMMA;
        }
        return this.__$COMMA_TOKEN;
    }
    static set COMMA_TOKEN(__$value : number)  { 
        this.__$COMMA_TOKEN = __$value;
    }

    private static __$EQ_TOKEN : number;
    static get EQ_TOKEN() : number { 
        if (this.__$EQ_TOKEN===undefined) {
            this.__$EQ_TOKEN = lib3.properties.$EQ;
        }
        return this.__$EQ_TOKEN;
    }
    static set EQ_TOKEN(__$value : number)  { 
        this.__$EQ_TOKEN = __$value;
    }

    private static __$GT_TOKEN : number;
    static get GT_TOKEN() : number { 
        if (this.__$GT_TOKEN===undefined) {
            this.__$GT_TOKEN = lib3.properties.$GT;
        }
        return this.__$GT_TOKEN;
    }
    static set GT_TOKEN(__$value : number)  { 
        this.__$GT_TOKEN = __$value;
    }

    private static __$HASH_TOKEN : number;
    static get HASH_TOKEN() : number { 
        if (this.__$HASH_TOKEN===undefined) {
            this.__$HASH_TOKEN = lib3.properties.$HASH;
        }
        return this.__$HASH_TOKEN;
    }
    static set HASH_TOKEN(__$value : number)  { 
        this.__$HASH_TOKEN = __$value;
    }

    private static __$OPEN_CURLY_BRACKET_TOKEN : number;
    static get OPEN_CURLY_BRACKET_TOKEN() : number { 
        if (this.__$OPEN_CURLY_BRACKET_TOKEN===undefined) {
            this.__$OPEN_CURLY_BRACKET_TOKEN = lib3.properties.$OPEN_CURLY_BRACKET;
        }
        return this.__$OPEN_CURLY_BRACKET_TOKEN;
    }
    static set OPEN_CURLY_BRACKET_TOKEN(__$value : number)  { 
        this.__$OPEN_CURLY_BRACKET_TOKEN = __$value;
    }

    private static __$OPEN_SQUARE_BRACKET_TOKEN : number;
    static get OPEN_SQUARE_BRACKET_TOKEN() : number { 
        if (this.__$OPEN_SQUARE_BRACKET_TOKEN===undefined) {
            this.__$OPEN_SQUARE_BRACKET_TOKEN = lib3.properties.$OPEN_SQUARE_BRACKET;
        }
        return this.__$OPEN_SQUARE_BRACKET_TOKEN;
    }
    static set OPEN_SQUARE_BRACKET_TOKEN(__$value : number)  { 
        this.__$OPEN_SQUARE_BRACKET_TOKEN = __$value;
    }

    private static __$OPEN_PAREN_TOKEN : number;
    static get OPEN_PAREN_TOKEN() : number { 
        if (this.__$OPEN_PAREN_TOKEN===undefined) {
            this.__$OPEN_PAREN_TOKEN = lib3.properties.$OPEN_PAREN;
        }
        return this.__$OPEN_PAREN_TOKEN;
    }
    static set OPEN_PAREN_TOKEN(__$value : number)  { 
        this.__$OPEN_PAREN_TOKEN = __$value;
    }

    private static __$LT_TOKEN : number;
    static get LT_TOKEN() : number { 
        if (this.__$LT_TOKEN===undefined) {
            this.__$LT_TOKEN = lib3.properties.$LT;
        }
        return this.__$LT_TOKEN;
    }
    static set LT_TOKEN(__$value : number)  { 
        this.__$LT_TOKEN = __$value;
    }

    private static __$MINUS_TOKEN : number;
    static get MINUS_TOKEN() : number { 
        if (this.__$MINUS_TOKEN===undefined) {
            this.__$MINUS_TOKEN = lib3.properties.$MINUS;
        }
        return this.__$MINUS_TOKEN;
    }
    static set MINUS_TOKEN(__$value : number)  { 
        this.__$MINUS_TOKEN = __$value;
    }

    private static __$EOF_TOKEN : number;
    static get EOF_TOKEN() : number { 
        if (this.__$EOF_TOKEN===undefined) {
            this.__$EOF_TOKEN = 0;
        }
        return this.__$EOF_TOKEN;
    }
    static set EOF_TOKEN(__$value : number)  { 
        this.__$EOF_TOKEN = __$value;
    }

    private static __$PLUS_TOKEN : number;
    static get PLUS_TOKEN() : number { 
        if (this.__$PLUS_TOKEN===undefined) {
            this.__$PLUS_TOKEN = lib3.properties.$PLUS;
        }
        return this.__$PLUS_TOKEN;
    }
    static set PLUS_TOKEN(__$value : number)  { 
        this.__$PLUS_TOKEN = __$value;
    }

    private static __$QUESTION_TOKEN : number;
    static get QUESTION_TOKEN() : number { 
        if (this.__$QUESTION_TOKEN===undefined) {
            this.__$QUESTION_TOKEN = lib3.properties.$QUESTION;
        }
        return this.__$QUESTION_TOKEN;
    }
    static set QUESTION_TOKEN(__$value : number)  { 
        this.__$QUESTION_TOKEN = __$value;
    }

    private static __$AT_TOKEN : number;
    static get AT_TOKEN() : number { 
        if (this.__$AT_TOKEN===undefined) {
            this.__$AT_TOKEN = lib3.properties.$AT;
        }
        return this.__$AT_TOKEN;
    }
    static set AT_TOKEN(__$value : number)  { 
        this.__$AT_TOKEN = __$value;
    }

    private static __$CLOSE_CURLY_BRACKET_TOKEN : number;
    static get CLOSE_CURLY_BRACKET_TOKEN() : number { 
        if (this.__$CLOSE_CURLY_BRACKET_TOKEN===undefined) {
            this.__$CLOSE_CURLY_BRACKET_TOKEN = lib3.properties.$CLOSE_CURLY_BRACKET;
        }
        return this.__$CLOSE_CURLY_BRACKET_TOKEN;
    }
    static set CLOSE_CURLY_BRACKET_TOKEN(__$value : number)  { 
        this.__$CLOSE_CURLY_BRACKET_TOKEN = __$value;
    }

    private static __$CLOSE_SQUARE_BRACKET_TOKEN : number;
    static get CLOSE_SQUARE_BRACKET_TOKEN() : number { 
        if (this.__$CLOSE_SQUARE_BRACKET_TOKEN===undefined) {
            this.__$CLOSE_SQUARE_BRACKET_TOKEN = lib3.properties.$CLOSE_SQUARE_BRACKET;
        }
        return this.__$CLOSE_SQUARE_BRACKET_TOKEN;
    }
    static set CLOSE_SQUARE_BRACKET_TOKEN(__$value : number)  { 
        this.__$CLOSE_SQUARE_BRACKET_TOKEN = __$value;
    }

    private static __$CLOSE_PAREN_TOKEN : number;
    static get CLOSE_PAREN_TOKEN() : number { 
        if (this.__$CLOSE_PAREN_TOKEN===undefined) {
            this.__$CLOSE_PAREN_TOKEN = lib3.properties.$CLOSE_PAREN;
        }
        return this.__$CLOSE_PAREN_TOKEN;
    }
    static set CLOSE_PAREN_TOKEN(__$value : number)  { 
        this.__$CLOSE_PAREN_TOKEN = __$value;
    }

    private static __$SEMICOLON_TOKEN : number;
    static get SEMICOLON_TOKEN() : number { 
        if (this.__$SEMICOLON_TOKEN===undefined) {
            this.__$SEMICOLON_TOKEN = lib3.properties.$SEMICOLON;
        }
        return this.__$SEMICOLON_TOKEN;
    }
    static set SEMICOLON_TOKEN(__$value : number)  { 
        this.__$SEMICOLON_TOKEN = __$value;
    }

    private static __$SLASH_TOKEN : number;
    static get SLASH_TOKEN() : number { 
        if (this.__$SLASH_TOKEN===undefined) {
            this.__$SLASH_TOKEN = lib3.properties.$SLASH;
        }
        return this.__$SLASH_TOKEN;
    }
    static set SLASH_TOKEN(__$value : number)  { 
        this.__$SLASH_TOKEN = __$value;
    }

    private static __$TILDE_TOKEN : number;
    static get TILDE_TOKEN() : number { 
        if (this.__$TILDE_TOKEN===undefined) {
            this.__$TILDE_TOKEN = lib3.properties.$TILDE;
        }
        return this.__$TILDE_TOKEN;
    }
    static set TILDE_TOKEN(__$value : number)  { 
        this.__$TILDE_TOKEN = __$value;
    }

    private static __$STAR_TOKEN : number;
    static get STAR_TOKEN() : number { 
        if (this.__$STAR_TOKEN===undefined) {
            this.__$STAR_TOKEN = lib3.properties.$STAR;
        }
        return this.__$STAR_TOKEN;
    }
    static set STAR_TOKEN(__$value : number)  { 
        this.__$STAR_TOKEN = __$value;
    }

    private static __$PERCENT_TOKEN : number;
    static get PERCENT_TOKEN() : number { 
        if (this.__$PERCENT_TOKEN===undefined) {
            this.__$PERCENT_TOKEN = lib3.properties.$PERCENT;
        }
        return this.__$PERCENT_TOKEN;
    }
    static set PERCENT_TOKEN(__$value : number)  { 
        this.__$PERCENT_TOKEN = __$value;
    }

    private static __$CARET_TOKEN : number;
    static get CARET_TOKEN() : number { 
        if (this.__$CARET_TOKEN===undefined) {
            this.__$CARET_TOKEN = lib3.properties.$CARET;
        }
        return this.__$CARET_TOKEN;
    }
    static set CARET_TOKEN(__$value : number)  { 
        this.__$CARET_TOKEN = __$value;
    }

    private static __$STRING_INTERPOLATION_TOKEN : number;
    static get STRING_INTERPOLATION_TOKEN() : number { 
        if (this.__$STRING_INTERPOLATION_TOKEN===undefined) {
            this.__$STRING_INTERPOLATION_TOKEN = 128;
        }
        return this.__$STRING_INTERPOLATION_TOKEN;
    }
    static set STRING_INTERPOLATION_TOKEN(__$value : number)  { 
        this.__$STRING_INTERPOLATION_TOKEN = __$value;
    }

    private static __$LT_EQ_TOKEN : number;
    static get LT_EQ_TOKEN() : number { 
        if (this.__$LT_EQ_TOKEN===undefined) {
            this.__$LT_EQ_TOKEN = properties.STRING_INTERPOLATION_TOKEN + 1;
        }
        return this.__$LT_EQ_TOKEN;
    }
    static set LT_EQ_TOKEN(__$value : number)  { 
        this.__$LT_EQ_TOKEN = __$value;
    }

    private static __$FUNCTION_TOKEN : number;
    static get FUNCTION_TOKEN() : number { 
        if (this.__$FUNCTION_TOKEN===undefined) {
            this.__$FUNCTION_TOKEN = properties.LT_EQ_TOKEN + 1;
        }
        return this.__$FUNCTION_TOKEN;
    }
    static set FUNCTION_TOKEN(__$value : number)  { 
        this.__$FUNCTION_TOKEN = __$value;
    }

    private static __$SLASH_EQ_TOKEN : number;
    static get SLASH_EQ_TOKEN() : number { 
        if (this.__$SLASH_EQ_TOKEN===undefined) {
            this.__$SLASH_EQ_TOKEN = properties.FUNCTION_TOKEN + 1;
        }
        return this.__$SLASH_EQ_TOKEN;
    }
    static set SLASH_EQ_TOKEN(__$value : number)  { 
        this.__$SLASH_EQ_TOKEN = __$value;
    }

    private static __$PERIOD_PERIOD_PERIOD_TOKEN : number;
    static get PERIOD_PERIOD_PERIOD_TOKEN() : number { 
        if (this.__$PERIOD_PERIOD_PERIOD_TOKEN===undefined) {
            this.__$PERIOD_PERIOD_PERIOD_TOKEN = properties.SLASH_EQ_TOKEN + 1;
        }
        return this.__$PERIOD_PERIOD_PERIOD_TOKEN;
    }
    static set PERIOD_PERIOD_PERIOD_TOKEN(__$value : number)  { 
        this.__$PERIOD_PERIOD_PERIOD_TOKEN = __$value;
    }

    private static __$PERIOD_PERIOD_TOKEN : number;
    static get PERIOD_PERIOD_TOKEN() : number { 
        if (this.__$PERIOD_PERIOD_TOKEN===undefined) {
            this.__$PERIOD_PERIOD_TOKEN = properties.PERIOD_PERIOD_PERIOD_TOKEN + 1;
        }
        return this.__$PERIOD_PERIOD_TOKEN;
    }
    static set PERIOD_PERIOD_TOKEN(__$value : number)  { 
        this.__$PERIOD_PERIOD_TOKEN = __$value;
    }

    private static __$EQ_EQ_EQ_TOKEN : number;
    static get EQ_EQ_EQ_TOKEN() : number { 
        if (this.__$EQ_EQ_EQ_TOKEN===undefined) {
            this.__$EQ_EQ_EQ_TOKEN = properties.PERIOD_PERIOD_TOKEN + 1;
        }
        return this.__$EQ_EQ_EQ_TOKEN;
    }
    static set EQ_EQ_EQ_TOKEN(__$value : number)  { 
        this.__$EQ_EQ_EQ_TOKEN = __$value;
    }

    private static __$EQ_EQ_TOKEN : number;
    static get EQ_EQ_TOKEN() : number { 
        if (this.__$EQ_EQ_TOKEN===undefined) {
            this.__$EQ_EQ_TOKEN = properties.EQ_EQ_EQ_TOKEN + 1;
        }
        return this.__$EQ_EQ_TOKEN;
    }
    static set EQ_EQ_TOKEN(__$value : number)  { 
        this.__$EQ_EQ_TOKEN = __$value;
    }

    private static __$LT_LT_EQ_TOKEN : number;
    static get LT_LT_EQ_TOKEN() : number { 
        if (this.__$LT_LT_EQ_TOKEN===undefined) {
            this.__$LT_LT_EQ_TOKEN = properties.EQ_EQ_TOKEN + 1;
        }
        return this.__$LT_LT_EQ_TOKEN;
    }
    static set LT_LT_EQ_TOKEN(__$value : number)  { 
        this.__$LT_LT_EQ_TOKEN = __$value;
    }

    private static __$LT_LT_TOKEN : number;
    static get LT_LT_TOKEN() : number { 
        if (this.__$LT_LT_TOKEN===undefined) {
            this.__$LT_LT_TOKEN = properties.LT_LT_EQ_TOKEN + 1;
        }
        return this.__$LT_LT_TOKEN;
    }
    static set LT_LT_TOKEN(__$value : number)  { 
        this.__$LT_LT_TOKEN = __$value;
    }

    private static __$GT_EQ_TOKEN : number;
    static get GT_EQ_TOKEN() : number { 
        if (this.__$GT_EQ_TOKEN===undefined) {
            this.__$GT_EQ_TOKEN = properties.LT_LT_TOKEN + 1;
        }
        return this.__$GT_EQ_TOKEN;
    }
    static set GT_EQ_TOKEN(__$value : number)  { 
        this.__$GT_EQ_TOKEN = __$value;
    }

    private static __$GENERIC_METHOD_TYPE_LIST_TOKEN : number;
    static get GENERIC_METHOD_TYPE_LIST_TOKEN() : number { 
        if (this.__$GENERIC_METHOD_TYPE_LIST_TOKEN===undefined) {
            this.__$GENERIC_METHOD_TYPE_LIST_TOKEN = properties.GENERIC_METHOD_TYPE_ASSIGN_TOKEN + 1;
        }
        return this.__$GENERIC_METHOD_TYPE_LIST_TOKEN;
    }
    static set GENERIC_METHOD_TYPE_LIST_TOKEN(__$value : number)  { 
        this.__$GENERIC_METHOD_TYPE_LIST_TOKEN = __$value;
    }

    private static __$INDEX_EQ_TOKEN : number;
    static get INDEX_EQ_TOKEN() : number { 
        if (this.__$INDEX_EQ_TOKEN===undefined) {
            this.__$INDEX_EQ_TOKEN = properties.GT_GT_EQ_TOKEN + 1;
        }
        return this.__$INDEX_EQ_TOKEN;
    }
    static set INDEX_EQ_TOKEN(__$value : number)  { 
        this.__$INDEX_EQ_TOKEN = __$value;
    }

    private static __$INDEX_TOKEN : number;
    static get INDEX_TOKEN() : number { 
        if (this.__$INDEX_TOKEN===undefined) {
            this.__$INDEX_TOKEN = properties.INDEX_EQ_TOKEN + 1;
        }
        return this.__$INDEX_TOKEN;
    }
    static set INDEX_TOKEN(__$value : number)  { 
        this.__$INDEX_TOKEN = __$value;
    }

    private static __$BANG_EQ_EQ_TOKEN : number;
    static get BANG_EQ_EQ_TOKEN() : number { 
        if (this.__$BANG_EQ_EQ_TOKEN===undefined) {
            this.__$BANG_EQ_EQ_TOKEN = properties.INDEX_TOKEN + 1;
        }
        return this.__$BANG_EQ_EQ_TOKEN;
    }
    static set BANG_EQ_EQ_TOKEN(__$value : number)  { 
        this.__$BANG_EQ_EQ_TOKEN = __$value;
    }

    private static __$BANG_EQ_TOKEN : number;
    static get BANG_EQ_TOKEN() : number { 
        if (this.__$BANG_EQ_TOKEN===undefined) {
            this.__$BANG_EQ_TOKEN = properties.BANG_EQ_EQ_TOKEN + 1;
        }
        return this.__$BANG_EQ_TOKEN;
    }
    static set BANG_EQ_TOKEN(__$value : number)  { 
        this.__$BANG_EQ_TOKEN = __$value;
    }

    private static __$AMPERSAND_AMPERSAND_TOKEN : number;
    static get AMPERSAND_AMPERSAND_TOKEN() : number { 
        if (this.__$AMPERSAND_AMPERSAND_TOKEN===undefined) {
            this.__$AMPERSAND_AMPERSAND_TOKEN = properties.BANG_EQ_TOKEN + 1;
        }
        return this.__$AMPERSAND_AMPERSAND_TOKEN;
    }
    static set AMPERSAND_AMPERSAND_TOKEN(__$value : number)  { 
        this.__$AMPERSAND_AMPERSAND_TOKEN = __$value;
    }

    private static __$AMPERSAND_EQ_TOKEN : number;
    static get AMPERSAND_EQ_TOKEN() : number { 
        if (this.__$AMPERSAND_EQ_TOKEN===undefined) {
            this.__$AMPERSAND_EQ_TOKEN = properties.AMPERSAND_AMPERSAND_TOKEN + 1;
        }
        return this.__$AMPERSAND_EQ_TOKEN;
    }
    static set AMPERSAND_EQ_TOKEN(__$value : number)  { 
        this.__$AMPERSAND_EQ_TOKEN = __$value;
    }

    private static __$BAR_BAR_TOKEN : number;
    static get BAR_BAR_TOKEN() : number { 
        if (this.__$BAR_BAR_TOKEN===undefined) {
            this.__$BAR_BAR_TOKEN = properties.AMPERSAND_EQ_TOKEN + 1;
        }
        return this.__$BAR_BAR_TOKEN;
    }
    static set BAR_BAR_TOKEN(__$value : number)  { 
        this.__$BAR_BAR_TOKEN = __$value;
    }

    private static __$BAR_EQ_TOKEN : number;
    static get BAR_EQ_TOKEN() : number { 
        if (this.__$BAR_EQ_TOKEN===undefined) {
            this.__$BAR_EQ_TOKEN = properties.BAR_BAR_TOKEN + 1;
        }
        return this.__$BAR_EQ_TOKEN;
    }
    static set BAR_EQ_TOKEN(__$value : number)  { 
        this.__$BAR_EQ_TOKEN = __$value;
    }

    private static __$STAR_EQ_TOKEN : number;
    static get STAR_EQ_TOKEN() : number { 
        if (this.__$STAR_EQ_TOKEN===undefined) {
            this.__$STAR_EQ_TOKEN = properties.BAR_EQ_TOKEN + 1;
        }
        return this.__$STAR_EQ_TOKEN;
    }
    static set STAR_EQ_TOKEN(__$value : number)  { 
        this.__$STAR_EQ_TOKEN = __$value;
    }

    private static __$PLUS_PLUS_TOKEN : number;
    static get PLUS_PLUS_TOKEN() : number { 
        if (this.__$PLUS_PLUS_TOKEN===undefined) {
            this.__$PLUS_PLUS_TOKEN = properties.STAR_EQ_TOKEN + 1;
        }
        return this.__$PLUS_PLUS_TOKEN;
    }
    static set PLUS_PLUS_TOKEN(__$value : number)  { 
        this.__$PLUS_PLUS_TOKEN = __$value;
    }

    private static __$PLUS_EQ_TOKEN : number;
    static get PLUS_EQ_TOKEN() : number { 
        if (this.__$PLUS_EQ_TOKEN===undefined) {
            this.__$PLUS_EQ_TOKEN = properties.PLUS_PLUS_TOKEN + 1;
        }
        return this.__$PLUS_EQ_TOKEN;
    }
    static set PLUS_EQ_TOKEN(__$value : number)  { 
        this.__$PLUS_EQ_TOKEN = __$value;
    }

    private static __$MINUS_MINUS_TOKEN : number;
    static get MINUS_MINUS_TOKEN() : number { 
        if (this.__$MINUS_MINUS_TOKEN===undefined) {
            this.__$MINUS_MINUS_TOKEN = properties.PLUS_EQ_TOKEN + 1;
        }
        return this.__$MINUS_MINUS_TOKEN;
    }
    static set MINUS_MINUS_TOKEN(__$value : number)  { 
        this.__$MINUS_MINUS_TOKEN = __$value;
    }

    private static __$MINUS_EQ_TOKEN : number;
    static get MINUS_EQ_TOKEN() : number { 
        if (this.__$MINUS_EQ_TOKEN===undefined) {
            this.__$MINUS_EQ_TOKEN = properties.MINUS_MINUS_TOKEN + 1;
        }
        return this.__$MINUS_EQ_TOKEN;
    }
    static set MINUS_EQ_TOKEN(__$value : number)  { 
        this.__$MINUS_EQ_TOKEN = __$value;
    }

    private static __$TILDE_SLASH_EQ_TOKEN : number;
    static get TILDE_SLASH_EQ_TOKEN() : number { 
        if (this.__$TILDE_SLASH_EQ_TOKEN===undefined) {
            this.__$TILDE_SLASH_EQ_TOKEN = properties.MINUS_EQ_TOKEN + 1;
        }
        return this.__$TILDE_SLASH_EQ_TOKEN;
    }
    static set TILDE_SLASH_EQ_TOKEN(__$value : number)  { 
        this.__$TILDE_SLASH_EQ_TOKEN = __$value;
    }

    private static __$TILDE_SLASH_TOKEN : number;
    static get TILDE_SLASH_TOKEN() : number { 
        if (this.__$TILDE_SLASH_TOKEN===undefined) {
            this.__$TILDE_SLASH_TOKEN = properties.TILDE_SLASH_EQ_TOKEN + 1;
        }
        return this.__$TILDE_SLASH_TOKEN;
    }
    static set TILDE_SLASH_TOKEN(__$value : number)  { 
        this.__$TILDE_SLASH_TOKEN = __$value;
    }

    private static __$PERCENT_EQ_TOKEN : number;
    static get PERCENT_EQ_TOKEN() : number { 
        if (this.__$PERCENT_EQ_TOKEN===undefined) {
            this.__$PERCENT_EQ_TOKEN = properties.TILDE_SLASH_TOKEN + 1;
        }
        return this.__$PERCENT_EQ_TOKEN;
    }
    static set PERCENT_EQ_TOKEN(__$value : number)  { 
        this.__$PERCENT_EQ_TOKEN = __$value;
    }

    private static __$GT_GT_TOKEN : number;
    static get GT_GT_TOKEN() : number { 
        if (this.__$GT_GT_TOKEN===undefined) {
            this.__$GT_GT_TOKEN = properties.PERCENT_EQ_TOKEN + 1;
        }
        return this.__$GT_GT_TOKEN;
    }
    static set GT_GT_TOKEN(__$value : number)  { 
        this.__$GT_GT_TOKEN = __$value;
    }

    private static __$CARET_EQ_TOKEN : number;
    static get CARET_EQ_TOKEN() : number { 
        if (this.__$CARET_EQ_TOKEN===undefined) {
            this.__$CARET_EQ_TOKEN = properties.GT_GT_TOKEN + 1;
        }
        return this.__$CARET_EQ_TOKEN;
    }
    static set CARET_EQ_TOKEN(__$value : number)  { 
        this.__$CARET_EQ_TOKEN = __$value;
    }

    private static __$COMMENT_TOKEN : number;
    static get COMMENT_TOKEN() : number { 
        if (this.__$COMMENT_TOKEN===undefined) {
            this.__$COMMENT_TOKEN = properties.CARET_EQ_TOKEN + 1;
        }
        return this.__$COMMENT_TOKEN;
    }
    static set COMMENT_TOKEN(__$value : number)  { 
        this.__$COMMENT_TOKEN = __$value;
    }

    private static __$STRING_INTERPOLATION_IDENTIFIER_TOKEN : number;
    static get STRING_INTERPOLATION_IDENTIFIER_TOKEN() : number { 
        if (this.__$STRING_INTERPOLATION_IDENTIFIER_TOKEN===undefined) {
            this.__$STRING_INTERPOLATION_IDENTIFIER_TOKEN = properties.COMMENT_TOKEN + 1;
        }
        return this.__$STRING_INTERPOLATION_IDENTIFIER_TOKEN;
    }
    static set STRING_INTERPOLATION_IDENTIFIER_TOKEN(__$value : number)  { 
        this.__$STRING_INTERPOLATION_IDENTIFIER_TOKEN = __$value;
    }

    private static __$QUESTION_PERIOD_TOKEN : number;
    static get QUESTION_PERIOD_TOKEN() : number { 
        if (this.__$QUESTION_PERIOD_TOKEN===undefined) {
            this.__$QUESTION_PERIOD_TOKEN = properties.STRING_INTERPOLATION_IDENTIFIER_TOKEN + 1;
        }
        return this.__$QUESTION_PERIOD_TOKEN;
    }
    static set QUESTION_PERIOD_TOKEN(__$value : number)  { 
        this.__$QUESTION_PERIOD_TOKEN = __$value;
    }

    private static __$QUESTION_QUESTION_TOKEN : number;
    static get QUESTION_QUESTION_TOKEN() : number { 
        if (this.__$QUESTION_QUESTION_TOKEN===undefined) {
            this.__$QUESTION_QUESTION_TOKEN = properties.QUESTION_PERIOD_TOKEN + 1;
        }
        return this.__$QUESTION_QUESTION_TOKEN;
    }
    static set QUESTION_QUESTION_TOKEN(__$value : number)  { 
        this.__$QUESTION_QUESTION_TOKEN = __$value;
    }

    private static __$QUESTION_QUESTION_EQ_TOKEN : number;
    static get QUESTION_QUESTION_EQ_TOKEN() : number { 
        if (this.__$QUESTION_QUESTION_EQ_TOKEN===undefined) {
            this.__$QUESTION_QUESTION_EQ_TOKEN = properties.QUESTION_QUESTION_TOKEN + 1;
        }
        return this.__$QUESTION_QUESTION_EQ_TOKEN;
    }
    static set QUESTION_QUESTION_EQ_TOKEN(__$value : number)  { 
        this.__$QUESTION_QUESTION_EQ_TOKEN = __$value;
    }

    private static __$GENERIC_METHOD_TYPE_ASSIGN_TOKEN : number;
    static get GENERIC_METHOD_TYPE_ASSIGN_TOKEN() : number { 
        if (this.__$GENERIC_METHOD_TYPE_ASSIGN_TOKEN===undefined) {
            this.__$GENERIC_METHOD_TYPE_ASSIGN_TOKEN = properties.QUESTION_QUESTION_EQ_TOKEN + 1;
        }
        return this.__$GENERIC_METHOD_TYPE_ASSIGN_TOKEN;
    }
    static set GENERIC_METHOD_TYPE_ASSIGN_TOKEN(__$value : number)  { 
        this.__$GENERIC_METHOD_TYPE_ASSIGN_TOKEN = __$value;
    }

    private static __$GT_GT_EQ_TOKEN : number;
    static get GT_GT_EQ_TOKEN() : number { 
        if (this.__$GT_GT_EQ_TOKEN===undefined) {
            this.__$GT_GT_EQ_TOKEN = properties.GT_EQ_TOKEN + 1;
        }
        return this.__$GT_GT_EQ_TOKEN;
    }
    static set GT_GT_EQ_TOKEN(__$value : number)  { 
        this.__$GT_GT_EQ_TOKEN = __$value;
    }

}
