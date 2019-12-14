/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/characters.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var isUtf16TrailSurrogate : (value : number) => boolean = (value : number) : boolean =>  {
    return value >= 56320 && value <= 57343;
};
export var isHexDigit : (characterCode : number) => boolean = (characterCode : number) : boolean =>  {
    if (characterCode <= properties.$9) return properties.$0 <= characterCode;
    characterCode |= properties.$a ^ properties.$A;
    return (properties.$a <= characterCode && characterCode <= properties.$f);
};
export var hexDigitValue : (hexDigit : number) => number = (hexDigit : number) : number =>  {
    /* TODO (AssertStatementImpl) : assert (isHexDigit(hexDigit)); */;
    if (hexDigit <= properties.$9) return hexDigit - properties.$0;
    return (hexDigit | (properties.$a ^ properties.$A)) - (properties.$a - 10);
};
export var isUnicodeScalarValue : (value : number) => boolean = (value : number) : boolean =>  {
    return value < properties.$FIRST_SURROGATE || (value > properties.$LAST_SURROGATE && value <= properties.$LAST_CODE_POINT);
};
export var isUtf16LeadSurrogate : (value : number) => boolean = (value : number) : boolean =>  {
    return value >= 55296 && value <= 56319;
};
export class properties {
    private static __$$GT : number;
    static get $GT() : number { 
        if (this.__$$GT===undefined) {
            this.__$$GT = 62;
        }
        return this.__$$GT;
    }
    static set $GT(__$value : number)  { 
        this.__$$GT = __$value;
    }

    private static __$$STX : number;
    static get $STX() : number { 
        if (this.__$$STX===undefined) {
            this.__$$STX = 2;
        }
        return this.__$$STX;
    }
    static set $STX(__$value : number)  { 
        this.__$$STX = __$value;
    }

    private static __$$BS : number;
    static get $BS() : number { 
        if (this.__$$BS===undefined) {
            this.__$$BS = 8;
        }
        return this.__$$BS;
    }
    static set $BS(__$value : number)  { 
        this.__$$BS = __$value;
    }

    private static __$$TAB : number;
    static get $TAB() : number { 
        if (this.__$$TAB===undefined) {
            this.__$$TAB = 9;
        }
        return this.__$$TAB;
    }
    static set $TAB(__$value : number)  { 
        this.__$$TAB = __$value;
    }

    private static __$$LF : number;
    static get $LF() : number { 
        if (this.__$$LF===undefined) {
            this.__$$LF = 10;
        }
        return this.__$$LF;
    }
    static set $LF(__$value : number)  { 
        this.__$$LF = __$value;
    }

    private static __$$VTAB : number;
    static get $VTAB() : number { 
        if (this.__$$VTAB===undefined) {
            this.__$$VTAB = 11;
        }
        return this.__$$VTAB;
    }
    static set $VTAB(__$value : number)  { 
        this.__$$VTAB = __$value;
    }

    private static __$$FF : number;
    static get $FF() : number { 
        if (this.__$$FF===undefined) {
            this.__$$FF = 12;
        }
        return this.__$$FF;
    }
    static set $FF(__$value : number)  { 
        this.__$$FF = __$value;
    }

    private static __$$CR : number;
    static get $CR() : number { 
        if (this.__$$CR===undefined) {
            this.__$$CR = 13;
        }
        return this.__$$CR;
    }
    static set $CR(__$value : number)  { 
        this.__$$CR = __$value;
    }

    private static __$$SPACE : number;
    static get $SPACE() : number { 
        if (this.__$$SPACE===undefined) {
            this.__$$SPACE = 32;
        }
        return this.__$$SPACE;
    }
    static set $SPACE(__$value : number)  { 
        this.__$$SPACE = __$value;
    }

    private static __$$BANG : number;
    static get $BANG() : number { 
        if (this.__$$BANG===undefined) {
            this.__$$BANG = 33;
        }
        return this.__$$BANG;
    }
    static set $BANG(__$value : number)  { 
        this.__$$BANG = __$value;
    }

    private static __$$DQ : number;
    static get $DQ() : number { 
        if (this.__$$DQ===undefined) {
            this.__$$DQ = 34;
        }
        return this.__$$DQ;
    }
    static set $DQ(__$value : number)  { 
        this.__$$DQ = __$value;
    }

    private static __$$HASH : number;
    static get $HASH() : number { 
        if (this.__$$HASH===undefined) {
            this.__$$HASH = 35;
        }
        return this.__$$HASH;
    }
    static set $HASH(__$value : number)  { 
        this.__$$HASH = __$value;
    }

    private static __$$$ : number;
    static get $$() : number { 
        if (this.__$$$===undefined) {
            this.__$$$ = 36;
        }
        return this.__$$$;
    }
    static set $$(__$value : number)  { 
        this.__$$$ = __$value;
    }

    private static __$$PERCENT : number;
    static get $PERCENT() : number { 
        if (this.__$$PERCENT===undefined) {
            this.__$$PERCENT = 37;
        }
        return this.__$$PERCENT;
    }
    static set $PERCENT(__$value : number)  { 
        this.__$$PERCENT = __$value;
    }

    private static __$$AMPERSAND : number;
    static get $AMPERSAND() : number { 
        if (this.__$$AMPERSAND===undefined) {
            this.__$$AMPERSAND = 38;
        }
        return this.__$$AMPERSAND;
    }
    static set $AMPERSAND(__$value : number)  { 
        this.__$$AMPERSAND = __$value;
    }

    private static __$$SQ : number;
    static get $SQ() : number { 
        if (this.__$$SQ===undefined) {
            this.__$$SQ = 39;
        }
        return this.__$$SQ;
    }
    static set $SQ(__$value : number)  { 
        this.__$$SQ = __$value;
    }

    private static __$$OPEN_PAREN : number;
    static get $OPEN_PAREN() : number { 
        if (this.__$$OPEN_PAREN===undefined) {
            this.__$$OPEN_PAREN = 40;
        }
        return this.__$$OPEN_PAREN;
    }
    static set $OPEN_PAREN(__$value : number)  { 
        this.__$$OPEN_PAREN = __$value;
    }

    private static __$$CLOSE_PAREN : number;
    static get $CLOSE_PAREN() : number { 
        if (this.__$$CLOSE_PAREN===undefined) {
            this.__$$CLOSE_PAREN = 41;
        }
        return this.__$$CLOSE_PAREN;
    }
    static set $CLOSE_PAREN(__$value : number)  { 
        this.__$$CLOSE_PAREN = __$value;
    }

    private static __$$STAR : number;
    static get $STAR() : number { 
        if (this.__$$STAR===undefined) {
            this.__$$STAR = 42;
        }
        return this.__$$STAR;
    }
    static set $STAR(__$value : number)  { 
        this.__$$STAR = __$value;
    }

    private static __$$PLUS : number;
    static get $PLUS() : number { 
        if (this.__$$PLUS===undefined) {
            this.__$$PLUS = 43;
        }
        return this.__$$PLUS;
    }
    static set $PLUS(__$value : number)  { 
        this.__$$PLUS = __$value;
    }

    private static __$$COMMA : number;
    static get $COMMA() : number { 
        if (this.__$$COMMA===undefined) {
            this.__$$COMMA = 44;
        }
        return this.__$$COMMA;
    }
    static set $COMMA(__$value : number)  { 
        this.__$$COMMA = __$value;
    }

    private static __$$MINUS : number;
    static get $MINUS() : number { 
        if (this.__$$MINUS===undefined) {
            this.__$$MINUS = 45;
        }
        return this.__$$MINUS;
    }
    static set $MINUS(__$value : number)  { 
        this.__$$MINUS = __$value;
    }

    private static __$$PERIOD : number;
    static get $PERIOD() : number { 
        if (this.__$$PERIOD===undefined) {
            this.__$$PERIOD = 46;
        }
        return this.__$$PERIOD;
    }
    static set $PERIOD(__$value : number)  { 
        this.__$$PERIOD = __$value;
    }

    private static __$$SLASH : number;
    static get $SLASH() : number { 
        if (this.__$$SLASH===undefined) {
            this.__$$SLASH = 47;
        }
        return this.__$$SLASH;
    }
    static set $SLASH(__$value : number)  { 
        this.__$$SLASH = __$value;
    }

    private static __$$0 : number;
    static get $0() : number { 
        if (this.__$$0===undefined) {
            this.__$$0 = 48;
        }
        return this.__$$0;
    }
    static set $0(__$value : number)  { 
        this.__$$0 = __$value;
    }

    private static __$$1 : number;
    static get $1() : number { 
        if (this.__$$1===undefined) {
            this.__$$1 = 49;
        }
        return this.__$$1;
    }
    static set $1(__$value : number)  { 
        this.__$$1 = __$value;
    }

    private static __$$2 : number;
    static get $2() : number { 
        if (this.__$$2===undefined) {
            this.__$$2 = 50;
        }
        return this.__$$2;
    }
    static set $2(__$value : number)  { 
        this.__$$2 = __$value;
    }

    private static __$$3 : number;
    static get $3() : number { 
        if (this.__$$3===undefined) {
            this.__$$3 = 51;
        }
        return this.__$$3;
    }
    static set $3(__$value : number)  { 
        this.__$$3 = __$value;
    }

    private static __$$4 : number;
    static get $4() : number { 
        if (this.__$$4===undefined) {
            this.__$$4 = 52;
        }
        return this.__$$4;
    }
    static set $4(__$value : number)  { 
        this.__$$4 = __$value;
    }

    private static __$$5 : number;
    static get $5() : number { 
        if (this.__$$5===undefined) {
            this.__$$5 = 53;
        }
        return this.__$$5;
    }
    static set $5(__$value : number)  { 
        this.__$$5 = __$value;
    }

    private static __$$6 : number;
    static get $6() : number { 
        if (this.__$$6===undefined) {
            this.__$$6 = 54;
        }
        return this.__$$6;
    }
    static set $6(__$value : number)  { 
        this.__$$6 = __$value;
    }

    private static __$$7 : number;
    static get $7() : number { 
        if (this.__$$7===undefined) {
            this.__$$7 = 55;
        }
        return this.__$$7;
    }
    static set $7(__$value : number)  { 
        this.__$$7 = __$value;
    }

    private static __$$8 : number;
    static get $8() : number { 
        if (this.__$$8===undefined) {
            this.__$$8 = 56;
        }
        return this.__$$8;
    }
    static set $8(__$value : number)  { 
        this.__$$8 = __$value;
    }

    private static __$$9 : number;
    static get $9() : number { 
        if (this.__$$9===undefined) {
            this.__$$9 = 57;
        }
        return this.__$$9;
    }
    static set $9(__$value : number)  { 
        this.__$$9 = __$value;
    }

    private static __$$COLON : number;
    static get $COLON() : number { 
        if (this.__$$COLON===undefined) {
            this.__$$COLON = 58;
        }
        return this.__$$COLON;
    }
    static set $COLON(__$value : number)  { 
        this.__$$COLON = __$value;
    }

    private static __$$SEMICOLON : number;
    static get $SEMICOLON() : number { 
        if (this.__$$SEMICOLON===undefined) {
            this.__$$SEMICOLON = 59;
        }
        return this.__$$SEMICOLON;
    }
    static set $SEMICOLON(__$value : number)  { 
        this.__$$SEMICOLON = __$value;
    }

    private static __$$LT : number;
    static get $LT() : number { 
        if (this.__$$LT===undefined) {
            this.__$$LT = 60;
        }
        return this.__$$LT;
    }
    static set $LT(__$value : number)  { 
        this.__$$LT = __$value;
    }

    private static __$$EQ : number;
    static get $EQ() : number { 
        if (this.__$$EQ===undefined) {
            this.__$$EQ = 61;
        }
        return this.__$$EQ;
    }
    static set $EQ(__$value : number)  { 
        this.__$$EQ = __$value;
    }

    private static __$$EOF : number;
    static get $EOF() : number { 
        if (this.__$$EOF===undefined) {
            this.__$$EOF = 0;
        }
        return this.__$$EOF;
    }
    static set $EOF(__$value : number)  { 
        this.__$$EOF = __$value;
    }

    private static __$$QUESTION : number;
    static get $QUESTION() : number { 
        if (this.__$$QUESTION===undefined) {
            this.__$$QUESTION = 63;
        }
        return this.__$$QUESTION;
    }
    static set $QUESTION(__$value : number)  { 
        this.__$$QUESTION = __$value;
    }

    private static __$$AT : number;
    static get $AT() : number { 
        if (this.__$$AT===undefined) {
            this.__$$AT = 64;
        }
        return this.__$$AT;
    }
    static set $AT(__$value : number)  { 
        this.__$$AT = __$value;
    }

    private static __$$A : number;
    static get $A() : number { 
        if (this.__$$A===undefined) {
            this.__$$A = 65;
        }
        return this.__$$A;
    }
    static set $A(__$value : number)  { 
        this.__$$A = __$value;
    }

    private static __$$B : number;
    static get $B() : number { 
        if (this.__$$B===undefined) {
            this.__$$B = 66;
        }
        return this.__$$B;
    }
    static set $B(__$value : number)  { 
        this.__$$B = __$value;
    }

    private static __$$C : number;
    static get $C() : number { 
        if (this.__$$C===undefined) {
            this.__$$C = 67;
        }
        return this.__$$C;
    }
    static set $C(__$value : number)  { 
        this.__$$C = __$value;
    }

    private static __$$D : number;
    static get $D() : number { 
        if (this.__$$D===undefined) {
            this.__$$D = 68;
        }
        return this.__$$D;
    }
    static set $D(__$value : number)  { 
        this.__$$D = __$value;
    }

    private static __$$E : number;
    static get $E() : number { 
        if (this.__$$E===undefined) {
            this.__$$E = 69;
        }
        return this.__$$E;
    }
    static set $E(__$value : number)  { 
        this.__$$E = __$value;
    }

    private static __$$F : number;
    static get $F() : number { 
        if (this.__$$F===undefined) {
            this.__$$F = 70;
        }
        return this.__$$F;
    }
    static set $F(__$value : number)  { 
        this.__$$F = __$value;
    }

    private static __$$G : number;
    static get $G() : number { 
        if (this.__$$G===undefined) {
            this.__$$G = 71;
        }
        return this.__$$G;
    }
    static set $G(__$value : number)  { 
        this.__$$G = __$value;
    }

    private static __$$H : number;
    static get $H() : number { 
        if (this.__$$H===undefined) {
            this.__$$H = 72;
        }
        return this.__$$H;
    }
    static set $H(__$value : number)  { 
        this.__$$H = __$value;
    }

    private static __$$I : number;
    static get $I() : number { 
        if (this.__$$I===undefined) {
            this.__$$I = 73;
        }
        return this.__$$I;
    }
    static set $I(__$value : number)  { 
        this.__$$I = __$value;
    }

    private static __$$J : number;
    static get $J() : number { 
        if (this.__$$J===undefined) {
            this.__$$J = 74;
        }
        return this.__$$J;
    }
    static set $J(__$value : number)  { 
        this.__$$J = __$value;
    }

    private static __$$K : number;
    static get $K() : number { 
        if (this.__$$K===undefined) {
            this.__$$K = 75;
        }
        return this.__$$K;
    }
    static set $K(__$value : number)  { 
        this.__$$K = __$value;
    }

    private static __$$L : number;
    static get $L() : number { 
        if (this.__$$L===undefined) {
            this.__$$L = 76;
        }
        return this.__$$L;
    }
    static set $L(__$value : number)  { 
        this.__$$L = __$value;
    }

    private static __$$M : number;
    static get $M() : number { 
        if (this.__$$M===undefined) {
            this.__$$M = 77;
        }
        return this.__$$M;
    }
    static set $M(__$value : number)  { 
        this.__$$M = __$value;
    }

    private static __$$N : number;
    static get $N() : number { 
        if (this.__$$N===undefined) {
            this.__$$N = 78;
        }
        return this.__$$N;
    }
    static set $N(__$value : number)  { 
        this.__$$N = __$value;
    }

    private static __$$O : number;
    static get $O() : number { 
        if (this.__$$O===undefined) {
            this.__$$O = 79;
        }
        return this.__$$O;
    }
    static set $O(__$value : number)  { 
        this.__$$O = __$value;
    }

    private static __$$P : number;
    static get $P() : number { 
        if (this.__$$P===undefined) {
            this.__$$P = 80;
        }
        return this.__$$P;
    }
    static set $P(__$value : number)  { 
        this.__$$P = __$value;
    }

    private static __$$Q : number;
    static get $Q() : number { 
        if (this.__$$Q===undefined) {
            this.__$$Q = 81;
        }
        return this.__$$Q;
    }
    static set $Q(__$value : number)  { 
        this.__$$Q = __$value;
    }

    private static __$$R : number;
    static get $R() : number { 
        if (this.__$$R===undefined) {
            this.__$$R = 82;
        }
        return this.__$$R;
    }
    static set $R(__$value : number)  { 
        this.__$$R = __$value;
    }

    private static __$$S : number;
    static get $S() : number { 
        if (this.__$$S===undefined) {
            this.__$$S = 83;
        }
        return this.__$$S;
    }
    static set $S(__$value : number)  { 
        this.__$$S = __$value;
    }

    private static __$$T : number;
    static get $T() : number { 
        if (this.__$$T===undefined) {
            this.__$$T = 84;
        }
        return this.__$$T;
    }
    static set $T(__$value : number)  { 
        this.__$$T = __$value;
    }

    private static __$$U : number;
    static get $U() : number { 
        if (this.__$$U===undefined) {
            this.__$$U = 85;
        }
        return this.__$$U;
    }
    static set $U(__$value : number)  { 
        this.__$$U = __$value;
    }

    private static __$$V : number;
    static get $V() : number { 
        if (this.__$$V===undefined) {
            this.__$$V = 86;
        }
        return this.__$$V;
    }
    static set $V(__$value : number)  { 
        this.__$$V = __$value;
    }

    private static __$$W : number;
    static get $W() : number { 
        if (this.__$$W===undefined) {
            this.__$$W = 87;
        }
        return this.__$$W;
    }
    static set $W(__$value : number)  { 
        this.__$$W = __$value;
    }

    private static __$$X : number;
    static get $X() : number { 
        if (this.__$$X===undefined) {
            this.__$$X = 88;
        }
        return this.__$$X;
    }
    static set $X(__$value : number)  { 
        this.__$$X = __$value;
    }

    private static __$$Y : number;
    static get $Y() : number { 
        if (this.__$$Y===undefined) {
            this.__$$Y = 89;
        }
        return this.__$$Y;
    }
    static set $Y(__$value : number)  { 
        this.__$$Y = __$value;
    }

    private static __$$Z : number;
    static get $Z() : number { 
        if (this.__$$Z===undefined) {
            this.__$$Z = 90;
        }
        return this.__$$Z;
    }
    static set $Z(__$value : number)  { 
        this.__$$Z = __$value;
    }

    private static __$$OPEN_SQUARE_BRACKET : number;
    static get $OPEN_SQUARE_BRACKET() : number { 
        if (this.__$$OPEN_SQUARE_BRACKET===undefined) {
            this.__$$OPEN_SQUARE_BRACKET = 91;
        }
        return this.__$$OPEN_SQUARE_BRACKET;
    }
    static set $OPEN_SQUARE_BRACKET(__$value : number)  { 
        this.__$$OPEN_SQUARE_BRACKET = __$value;
    }

    private static __$$BACKSLASH : number;
    static get $BACKSLASH() : number { 
        if (this.__$$BACKSLASH===undefined) {
            this.__$$BACKSLASH = 92;
        }
        return this.__$$BACKSLASH;
    }
    static set $BACKSLASH(__$value : number)  { 
        this.__$$BACKSLASH = __$value;
    }

    private static __$$CLOSE_SQUARE_BRACKET : number;
    static get $CLOSE_SQUARE_BRACKET() : number { 
        if (this.__$$CLOSE_SQUARE_BRACKET===undefined) {
            this.__$$CLOSE_SQUARE_BRACKET = 93;
        }
        return this.__$$CLOSE_SQUARE_BRACKET;
    }
    static set $CLOSE_SQUARE_BRACKET(__$value : number)  { 
        this.__$$CLOSE_SQUARE_BRACKET = __$value;
    }

    private static __$$CARET : number;
    static get $CARET() : number { 
        if (this.__$$CARET===undefined) {
            this.__$$CARET = 94;
        }
        return this.__$$CARET;
    }
    static set $CARET(__$value : number)  { 
        this.__$$CARET = __$value;
    }

    private static __$$_ : number;
    static get $_() : number { 
        if (this.__$$_===undefined) {
            this.__$$_ = 95;
        }
        return this.__$$_;
    }
    static set $_(__$value : number)  { 
        this.__$$_ = __$value;
    }

    private static __$$BACKPING : number;
    static get $BACKPING() : number { 
        if (this.__$$BACKPING===undefined) {
            this.__$$BACKPING = 96;
        }
        return this.__$$BACKPING;
    }
    static set $BACKPING(__$value : number)  { 
        this.__$$BACKPING = __$value;
    }

    private static __$$a : number;
    static get $a() : number { 
        if (this.__$$a===undefined) {
            this.__$$a = 97;
        }
        return this.__$$a;
    }
    static set $a(__$value : number)  { 
        this.__$$a = __$value;
    }

    private static __$$b : number;
    static get $b() : number { 
        if (this.__$$b===undefined) {
            this.__$$b = 98;
        }
        return this.__$$b;
    }
    static set $b(__$value : number)  { 
        this.__$$b = __$value;
    }

    private static __$$c : number;
    static get $c() : number { 
        if (this.__$$c===undefined) {
            this.__$$c = 99;
        }
        return this.__$$c;
    }
    static set $c(__$value : number)  { 
        this.__$$c = __$value;
    }

    private static __$$e : number;
    static get $e() : number { 
        if (this.__$$e===undefined) {
            this.__$$e = 101;
        }
        return this.__$$e;
    }
    static set $e(__$value : number)  { 
        this.__$$e = __$value;
    }

    private static __$$f : number;
    static get $f() : number { 
        if (this.__$$f===undefined) {
            this.__$$f = 102;
        }
        return this.__$$f;
    }
    static set $f(__$value : number)  { 
        this.__$$f = __$value;
    }

    private static __$$g : number;
    static get $g() : number { 
        if (this.__$$g===undefined) {
            this.__$$g = 103;
        }
        return this.__$$g;
    }
    static set $g(__$value : number)  { 
        this.__$$g = __$value;
    }

    private static __$$h : number;
    static get $h() : number { 
        if (this.__$$h===undefined) {
            this.__$$h = 104;
        }
        return this.__$$h;
    }
    static set $h(__$value : number)  { 
        this.__$$h = __$value;
    }

    private static __$$i : number;
    static get $i() : number { 
        if (this.__$$i===undefined) {
            this.__$$i = 105;
        }
        return this.__$$i;
    }
    static set $i(__$value : number)  { 
        this.__$$i = __$value;
    }

    private static __$$j : number;
    static get $j() : number { 
        if (this.__$$j===undefined) {
            this.__$$j = 106;
        }
        return this.__$$j;
    }
    static set $j(__$value : number)  { 
        this.__$$j = __$value;
    }

    private static __$$k : number;
    static get $k() : number { 
        if (this.__$$k===undefined) {
            this.__$$k = 107;
        }
        return this.__$$k;
    }
    static set $k(__$value : number)  { 
        this.__$$k = __$value;
    }

    private static __$$l : number;
    static get $l() : number { 
        if (this.__$$l===undefined) {
            this.__$$l = 108;
        }
        return this.__$$l;
    }
    static set $l(__$value : number)  { 
        this.__$$l = __$value;
    }

    private static __$$m : number;
    static get $m() : number { 
        if (this.__$$m===undefined) {
            this.__$$m = 109;
        }
        return this.__$$m;
    }
    static set $m(__$value : number)  { 
        this.__$$m = __$value;
    }

    private static __$$n : number;
    static get $n() : number { 
        if (this.__$$n===undefined) {
            this.__$$n = 110;
        }
        return this.__$$n;
    }
    static set $n(__$value : number)  { 
        this.__$$n = __$value;
    }

    private static __$$o : number;
    static get $o() : number { 
        if (this.__$$o===undefined) {
            this.__$$o = 111;
        }
        return this.__$$o;
    }
    static set $o(__$value : number)  { 
        this.__$$o = __$value;
    }

    private static __$$p : number;
    static get $p() : number { 
        if (this.__$$p===undefined) {
            this.__$$p = 112;
        }
        return this.__$$p;
    }
    static set $p(__$value : number)  { 
        this.__$$p = __$value;
    }

    private static __$$q : number;
    static get $q() : number { 
        if (this.__$$q===undefined) {
            this.__$$q = 113;
        }
        return this.__$$q;
    }
    static set $q(__$value : number)  { 
        this.__$$q = __$value;
    }

    private static __$$r : number;
    static get $r() : number { 
        if (this.__$$r===undefined) {
            this.__$$r = 114;
        }
        return this.__$$r;
    }
    static set $r(__$value : number)  { 
        this.__$$r = __$value;
    }

    private static __$$s : number;
    static get $s() : number { 
        if (this.__$$s===undefined) {
            this.__$$s = 115;
        }
        return this.__$$s;
    }
    static set $s(__$value : number)  { 
        this.__$$s = __$value;
    }

    private static __$$t : number;
    static get $t() : number { 
        if (this.__$$t===undefined) {
            this.__$$t = 116;
        }
        return this.__$$t;
    }
    static set $t(__$value : number)  { 
        this.__$$t = __$value;
    }

    private static __$$u : number;
    static get $u() : number { 
        if (this.__$$u===undefined) {
            this.__$$u = 117;
        }
        return this.__$$u;
    }
    static set $u(__$value : number)  { 
        this.__$$u = __$value;
    }

    private static __$$v : number;
    static get $v() : number { 
        if (this.__$$v===undefined) {
            this.__$$v = 118;
        }
        return this.__$$v;
    }
    static set $v(__$value : number)  { 
        this.__$$v = __$value;
    }

    private static __$$w : number;
    static get $w() : number { 
        if (this.__$$w===undefined) {
            this.__$$w = 119;
        }
        return this.__$$w;
    }
    static set $w(__$value : number)  { 
        this.__$$w = __$value;
    }

    private static __$$x : number;
    static get $x() : number { 
        if (this.__$$x===undefined) {
            this.__$$x = 120;
        }
        return this.__$$x;
    }
    static set $x(__$value : number)  { 
        this.__$$x = __$value;
    }

    private static __$$y : number;
    static get $y() : number { 
        if (this.__$$y===undefined) {
            this.__$$y = 121;
        }
        return this.__$$y;
    }
    static set $y(__$value : number)  { 
        this.__$$y = __$value;
    }

    private static __$$z : number;
    static get $z() : number { 
        if (this.__$$z===undefined) {
            this.__$$z = 122;
        }
        return this.__$$z;
    }
    static set $z(__$value : number)  { 
        this.__$$z = __$value;
    }

    private static __$$OPEN_CURLY_BRACKET : number;
    static get $OPEN_CURLY_BRACKET() : number { 
        if (this.__$$OPEN_CURLY_BRACKET===undefined) {
            this.__$$OPEN_CURLY_BRACKET = 123;
        }
        return this.__$$OPEN_CURLY_BRACKET;
    }
    static set $OPEN_CURLY_BRACKET(__$value : number)  { 
        this.__$$OPEN_CURLY_BRACKET = __$value;
    }

    private static __$$BAR : number;
    static get $BAR() : number { 
        if (this.__$$BAR===undefined) {
            this.__$$BAR = 124;
        }
        return this.__$$BAR;
    }
    static set $BAR(__$value : number)  { 
        this.__$$BAR = __$value;
    }

    private static __$$CLOSE_CURLY_BRACKET : number;
    static get $CLOSE_CURLY_BRACKET() : number { 
        if (this.__$$CLOSE_CURLY_BRACKET===undefined) {
            this.__$$CLOSE_CURLY_BRACKET = 125;
        }
        return this.__$$CLOSE_CURLY_BRACKET;
    }
    static set $CLOSE_CURLY_BRACKET(__$value : number)  { 
        this.__$$CLOSE_CURLY_BRACKET = __$value;
    }

    private static __$$TILDE : number;
    static get $TILDE() : number { 
        if (this.__$$TILDE===undefined) {
            this.__$$TILDE = 126;
        }
        return this.__$$TILDE;
    }
    static set $TILDE(__$value : number)  { 
        this.__$$TILDE = __$value;
    }

    private static __$$DEL : number;
    static get $DEL() : number { 
        if (this.__$$DEL===undefined) {
            this.__$$DEL = 127;
        }
        return this.__$$DEL;
    }
    static set $DEL(__$value : number)  { 
        this.__$$DEL = __$value;
    }

    private static __$$NBSP : number;
    static get $NBSP() : number { 
        if (this.__$$NBSP===undefined) {
            this.__$$NBSP = 160;
        }
        return this.__$$NBSP;
    }
    static set $NBSP(__$value : number)  { 
        this.__$$NBSP = __$value;
    }

    private static __$$LS : number;
    static get $LS() : number { 
        if (this.__$$LS===undefined) {
            this.__$$LS = 8232;
        }
        return this.__$$LS;
    }
    static set $LS(__$value : number)  { 
        this.__$$LS = __$value;
    }

    private static __$$PS : number;
    static get $PS() : number { 
        if (this.__$$PS===undefined) {
            this.__$$PS = 8233;
        }
        return this.__$$PS;
    }
    static set $PS(__$value : number)  { 
        this.__$$PS = __$value;
    }

    private static __$$FIRST_SURROGATE : number;
    static get $FIRST_SURROGATE() : number { 
        if (this.__$$FIRST_SURROGATE===undefined) {
            this.__$$FIRST_SURROGATE = 55296;
        }
        return this.__$$FIRST_SURROGATE;
    }
    static set $FIRST_SURROGATE(__$value : number)  { 
        this.__$$FIRST_SURROGATE = __$value;
    }

    private static __$$LAST_SURROGATE : number;
    static get $LAST_SURROGATE() : number { 
        if (this.__$$LAST_SURROGATE===undefined) {
            this.__$$LAST_SURROGATE = 57343;
        }
        return this.__$$LAST_SURROGATE;
    }
    static set $LAST_SURROGATE(__$value : number)  { 
        this.__$$LAST_SURROGATE = __$value;
    }

    private static __$$LAST_CODE_POINT : number;
    static get $LAST_CODE_POINT() : number { 
        if (this.__$$LAST_CODE_POINT===undefined) {
            this.__$$LAST_CODE_POINT = 1114111;
        }
        return this.__$$LAST_CODE_POINT;
    }
    static set $LAST_CODE_POINT(__$value : number)  { 
        this.__$$LAST_CODE_POINT = __$value;
    }

    private static __$$d : number;
    static get $d() : number { 
        if (this.__$$d===undefined) {
            this.__$$d = 100;
        }
        return this.__$$d;
    }
    static set $d(__$value : number)  { 
        this.__$$d = __$value;
    }

}
