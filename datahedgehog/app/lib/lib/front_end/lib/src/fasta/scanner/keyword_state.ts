/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/keyword_state.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../scanner/token";
import * as lib4 from "./characters";

export namespace KeywordState {
    export type Constructors = 'KeywordState';
    export type Interface = Omit<KeywordState, Constructors>;
}
@DartClass
export class KeywordState {
    @Abstract
    next(c : number) : KeywordState{ throw 'abstract'}
    @Abstract
    nextCapital(c : number) : KeywordState{ throw 'abstract'}
    @AbstractProperty
    get keyword() : lib3.Keyword{ throw 'abstract'}
    private static __$_KEYWORD_STATE : KeywordState;
    static get _KEYWORD_STATE() : KeywordState { 
        return this.__$_KEYWORD_STATE;
    }
    static set _KEYWORD_STATE(__$value : KeywordState)  { 
        this.__$_KEYWORD_STATE = __$value;
    }

    static get KEYWORD_STATE() : KeywordState {
        if (op(Op.EQUALS,KeywordState._KEYWORD_STATE,null)) {
            let strings : core.DartList<string> = new core.DartList<string>(lib3.Keyword.values.length);
            for(let i : number = 0; i < lib3.Keyword.values.length; i++){
                strings[i] = lib3.Keyword.values[i].lexeme;
            }
            strings.sort((a : any,b : any) =>  {
                return new core.DartString(a).compareTo(b);
            });
            KeywordState._KEYWORD_STATE = KeywordState.computeKeywordStateTable(0,strings,0,strings.length);
        }
        return KeywordState._KEYWORD_STATE;
    }
    static computeKeywordStateTable(start : number,strings : core.DartList<string>,offset : number,length : number) : KeywordState {
        let isLowercase : boolean = true;
        let table : core.DartList<KeywordState> = new core.DartList<KeywordState>(lib4.properties.$z - lib4.properties.$A + 1);
        /* TODO (AssertStatementImpl) : assert (length != 0); */;
        let chunk : number = 0;
        let chunkStart : number = -1;
        let isLeaf : boolean = false;
        for(let i : number = offset; i < offset + length; i++){
            if (new core.DartString(strings[i]).length == start) {
                isLeaf = true;
            }
            if (new core.DartString(strings[i]).length > start) {
                let c : number = new core.DartString(strings[i]).codeUnitAt(start);
                if (lib4.properties.$A <= c && c <= lib4.properties.$Z) {
                    isLowercase = false;
                }
                if (chunk != c) {
                    if (chunkStart != -1) {
                        /* TODO (AssertStatementImpl) : assert (table[chunk - $A] == null); */;
                        table[chunk - lib4.properties.$A] = KeywordState.computeKeywordStateTable(start + 1,strings,chunkStart,i - chunkStart);
                    }
                    chunkStart = i;
                    chunk = c;
                }
            }
        }
        if (chunkStart != -1) {
            /* TODO (AssertStatementImpl) : assert (table[chunk - $A] == null); */;
            table[chunk - lib4.properties.$A] = KeywordState.computeKeywordStateTable(start + 1,strings,chunkStart,offset + length - chunkStart);
        }else {
            /* TODO (AssertStatementImpl) : assert (length == 1); */;
            return new LeafKeywordState(strings[offset]);
        }
        let syntax : string = isLeaf ? strings[offset] : null;
        if (isLowercase) {
            table = table.sublist(lib4.properties.$a - lib4.properties.$A);
            return new LowerCaseArrayKeywordState(table,syntax);
        }else {
            return new UpperCaseArrayKeywordState(table,syntax);
        }
    }
    constructor() {
    }
    @defaultConstructor
    KeywordState() {
    }
}

export namespace ArrayKeywordState {
    export type Constructors = 'ArrayKeywordState';
    export type Interface = Omit<ArrayKeywordState, Constructors>;
}
@DartClass
@Implements(KeywordState)
export class ArrayKeywordState implements KeywordState.Interface {
    table : core.DartList<KeywordState>;

    keyword : lib3.Keyword;

    constructor(table : core.DartList<KeywordState>,syntax : string) {
    }
    @defaultConstructor
    ArrayKeywordState(table : core.DartList<KeywordState>,syntax : string) {
        this.keyword = ((syntax == null) ? null : lib3.Keyword.keywords.get(syntax));
        this.table = table;
    }
    @Abstract
    next(c : number) : KeywordState{ throw 'abstract'}
    @Abstract
    nextCapital(c : number) : KeywordState{ throw 'abstract'}
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write("[");
        if (this.keyword != null) {
            sb.write("*");
            sb.write(this.keyword);
            sb.write(" ");
        }
        let foo : core.DartList<KeywordState> = this.table;
        for(let i : number = 0; i < foo.length; i++){
            if (foo[i] != null) {
                sb.write(`${new core.DartString.fromCharCodes(new core.DartList.literal(i + lib4.properties.$a)).valueOf()}: ` + `${foo[i]}; `);
            }
        }
        sb.write("]");
        return sb.toString();
    }
}

export namespace LeafKeywordState {
    export type Constructors = 'LeafKeywordState';
    export type Interface = Omit<LeafKeywordState, Constructors>;
}
@DartClass
@Implements(KeywordState)
export class LeafKeywordState implements KeywordState.Interface {
    keyword : lib3.Keyword;

    constructor(syntax : string) {
    }
    @defaultConstructor
    LeafKeywordState(syntax : string) {
        this.keyword = lib3.Keyword.keywords.get(syntax);
    }
    next(c : number) : KeywordState {
        return null;
    }
    nextCapital(c : number) : KeywordState {
        return null;
    }
    toString() : string {
        return this.keyword.lexeme;
    }
}

export namespace LowerCaseArrayKeywordState {
    export type Constructors = ArrayKeywordState.Constructors | 'LowerCaseArrayKeywordState';
    export type Interface = Omit<LowerCaseArrayKeywordState, Constructors>;
}
@DartClass
export class LowerCaseArrayKeywordState extends ArrayKeywordState {
    constructor(table : core.DartList<KeywordState>,syntax : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LowerCaseArrayKeywordState(table : core.DartList<KeywordState>,syntax : string) {
        super.ArrayKeywordState(table,syntax);
        /* TODO (AssertStatementImpl) : assert (table.length == $z - $a + 1); */;
    }
    next(c : number) : KeywordState {
        return this.table[c - lib4.properties.$a];
    }
    nextCapital(c : number) : KeywordState {
        return null;
    }
}

export namespace UpperCaseArrayKeywordState {
    export type Constructors = ArrayKeywordState.Constructors | 'UpperCaseArrayKeywordState';
    export type Interface = Omit<UpperCaseArrayKeywordState, Constructors>;
}
@DartClass
export class UpperCaseArrayKeywordState extends ArrayKeywordState {
    constructor(table : core.DartList<KeywordState>,syntax : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UpperCaseArrayKeywordState(table : core.DartList<KeywordState>,syntax : string) {
        super.ArrayKeywordState(table,syntax);
        /* TODO (AssertStatementImpl) : assert (table.length == $z - $A + 1); */;
    }
    next(c : number) : KeywordState {
        return this.table[c - lib4.properties.$A];
    }
    nextCapital(c : number) : KeywordState {
        return this.table[c - lib4.properties.$A];
    }
}

export class properties {
}
