/** Library asset:datahedgehog_monitor/lib/lib/core/core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as _internal from "@dart2ts/dart/_internal";
import * as collection from "@dart2ts/dart/core";
import * as math from "@dart2ts/dart/math";
import * as convert from "@dart2ts/dart/convert";
import * as typed_data from "@dart2ts/dart/typed_data";

export var _startsWithData : (text : String,start : int) => int = (text : String,start : int) : int =>  {
    let delta : int = op(Op.TIMES,(op(Op.XOR,text.codeUnitAt(op(Op.PLUS,start,4)),properties._COLON)),3);
    delta |= op(Op.XOR,text.codeUnitAt(start),100);
    delta |= op(Op.XOR,text.codeUnitAt(op(Op.PLUS,start,1)),97);
    delta |= op(Op.XOR,text.codeUnitAt(op(Op.PLUS,start,2)),116);
    delta |= op(Op.XOR,text.codeUnitAt(op(Op.PLUS,start,3)),97);
    return delta;
};
export var _scan : (uri : String,start : int,end : int,state : int,indices : List<int>) => int = (uri : String,start : int,end : int,state : int,indices : List<int>) : int =>  {
    let tables = properties._scannerTables;
    /* TODO (AssertStatementImpl) : assert (end <= uri.length); */;
    for(let i : int = start; op(Op.LT,i,end); i++){
        let table = tables[state];
        let char : int = op(Op.XOR,uri.codeUnitAt(i),96);
        if (op(Op.GT,char,95)) char = 31;
        let transition : int = op(Op.INDEX,table,char);
        state = op(Op.BITAND,transition,31);
        indices[op(Op.SHIFTRIGHT,transition,5)] = i;
    }
    return state;
};
export var _createTables : () => List<typed_data.Uint8List> = () : List<typed_data.Uint8List> =>  {
    let stateCount : int = 22;
    let schemeOrPath : int = 1;
    let authOrPath : int = 2;
    let authOrPathSlash : int = 3;
    let uinfoOrHost0 : int = 4;
    let uinfoOrHost : int = 5;
    let uinfoOrPort0 : int = 6;
    let uinfoOrPort : int = 7;
    let ipv6Host : int = 8;
    let relPathSeg : int = 9;
    let pathSeg : int = 10;
    let path : int = 11;
    let query : int = 12;
    let fragment : int = 13;
    let schemeOrPathDot : int = 14;
    let schemeOrPathDot2 : int = 15;
    let relPathSegDot : int = 16;
    let relPathSegDot2 : int = 17;
    let pathSegDot : int = 18;
    let pathSegDot2 : int = 19;
    let scheme0 : int = properties._schemeStart;
    let scheme : int = 21;
    let schemeEnd : int = op(Op.SHIFTLEFT,properties._schemeEndIndex,5);
    let hostStart : int = op(Op.SHIFTLEFT,properties._hostStartIndex,5);
    let portStart : int = op(Op.SHIFTLEFT,properties._portStartIndex,5);
    let pathStart : int = op(Op.SHIFTLEFT,properties._pathStartIndex,5);
    let queryStart : int = op(Op.SHIFTLEFT,properties._queryStartIndex,5);
    let fragmentStart : int = op(Op.SHIFTLEFT,properties._fragmentStartIndex,5);
    let notSimple : int = op(Op.SHIFTLEFT,properties._notSimpleIndex,5);
    let unreserved = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~";
    let subDelims = "!$&'()*+,;=";
    let pchar = `${unreserved}${subDelims}`;
    let tables = new List.generate(stateCount,(_ : any) =>  {
        return new typed_data.Uint8List(96);
    });
    var build : (state : any,defaultTransition : any) => typed_data.Uint8List = (state : any,defaultTransition : any) : typed_data.Uint8List =>  {
        return ((_) : typed_data.Uint8List =>  {
            {
                _.fillRange(0,96,defaultTransition);
                return _;
            }
        })(tables[state]);
    };
    var setChars : (target : typed_data.Uint8List,chars : String,transition : int) => void = (target : typed_data.Uint8List,chars : String,transition : int) : void =>  {
        for(let i : int = 0; op(Op.LT,i,chars.length); i++){
            let char = chars.codeUnitAt(i);
            op(Op.INDEX_ASSIGN,target,op(Op.XOR,char,96),transition);
        }
    };
    var setRange : (target : typed_data.Uint8List,range : String,transition : int) => void = (target : typed_data.Uint8List,range : String,transition : int) : void =>  {
        for(let i : int = range.codeUnitAt(0), n : int = range.codeUnitAt(1); op(Op.LEQ,i,n); i++){
            op(Op.INDEX_ASSIGN,target,op(Op.XOR,i,96),transition);
        }
    };
    let b;
    b = build(properties._uriStart,op(Op.BITOR,schemeOrPath,notSimple));
    setChars(b,pchar,schemeOrPath);
    setChars(b,".",schemeOrPathDot);
    setChars(b,":",op(Op.BITOR,authOrPath,schemeEnd));
    setChars(b,"/",authOrPathSlash);
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(schemeOrPathDot,op(Op.BITOR,schemeOrPath,notSimple));
    setChars(b,pchar,schemeOrPath);
    setChars(b,".",schemeOrPathDot2);
    setChars(b,':',op(Op.BITOR,authOrPath,schemeEnd));
    setChars(b,"/",op(Op.BITOR,pathSeg,notSimple));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(schemeOrPathDot2,op(Op.BITOR,schemeOrPath,notSimple));
    setChars(b,pchar,schemeOrPath);
    setChars(b,"%",op(Op.BITOR,schemeOrPath,notSimple));
    setChars(b,':',op(Op.BITOR,authOrPath,schemeEnd));
    setChars(b,"/",relPathSeg);
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(schemeOrPath,op(Op.BITOR,schemeOrPath,notSimple));
    setChars(b,pchar,schemeOrPath);
    setChars(b,':',op(Op.BITOR,authOrPath,schemeEnd));
    setChars(b,"/",pathSeg);
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(authOrPath,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,op(Op.BITOR,path,pathStart));
    setChars(b,"/",op(Op.BITOR,authOrPathSlash,pathStart));
    setChars(b,".",op(Op.BITOR,pathSegDot,pathStart));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(authOrPathSlash,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,path);
    setChars(b,"/",op(Op.BITOR,uinfoOrHost0,hostStart));
    setChars(b,".",pathSegDot);
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(uinfoOrHost0,op(Op.BITOR,uinfoOrHost,notSimple));
    setChars(b,pchar,uinfoOrHost);
    setRange(b,"AZ",op(Op.BITOR,uinfoOrHost,notSimple));
    setChars(b,":",op(Op.BITOR,uinfoOrPort0,portStart));
    setChars(b,"@",op(Op.BITOR,uinfoOrHost0,hostStart));
    setChars(b,"[",op(Op.BITOR,ipv6Host,notSimple));
    setChars(b,"/",op(Op.BITOR,pathSeg,pathStart));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(uinfoOrHost,op(Op.BITOR,uinfoOrHost,notSimple));
    setChars(b,pchar,uinfoOrHost);
    setRange(b,"AZ",op(Op.BITOR,uinfoOrHost,notSimple));
    setChars(b,":",op(Op.BITOR,uinfoOrPort0,portStart));
    setChars(b,"@",op(Op.BITOR,uinfoOrHost0,hostStart));
    setChars(b,"/",op(Op.BITOR,pathSeg,pathStart));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(uinfoOrPort0,op(Op.BITOR,uinfoOrPort,notSimple));
    setRange(b,"19",uinfoOrPort);
    setChars(b,"@",op(Op.BITOR,uinfoOrHost0,hostStart));
    setChars(b,"/",op(Op.BITOR,pathSeg,pathStart));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(uinfoOrPort,op(Op.BITOR,uinfoOrPort,notSimple));
    setRange(b,"09",uinfoOrPort);
    setChars(b,"@",op(Op.BITOR,uinfoOrHost0,hostStart));
    setChars(b,"/",op(Op.BITOR,pathSeg,pathStart));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(ipv6Host,ipv6Host);
    setChars(b,"]",uinfoOrHost);
    b = build(relPathSeg,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,path);
    setChars(b,".",relPathSegDot);
    setChars(b,"/",op(Op.BITOR,pathSeg,notSimple));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(relPathSegDot,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,path);
    setChars(b,".",relPathSegDot2);
    setChars(b,"/",op(Op.BITOR,pathSeg,notSimple));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(relPathSegDot2,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,path);
    setChars(b,"/",relPathSeg);
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(pathSeg,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,path);
    setChars(b,".",pathSegDot);
    setChars(b,"/",op(Op.BITOR,pathSeg,notSimple));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(pathSegDot,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,path);
    setChars(b,".",pathSegDot2);
    setChars(b,"/",op(Op.BITOR,pathSeg,notSimple));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(pathSegDot2,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,path);
    setChars(b,"/",op(Op.BITOR,pathSeg,notSimple));
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(path,op(Op.BITOR,path,notSimple));
    setChars(b,pchar,path);
    setChars(b,"/",pathSeg);
    setChars(b,"?",op(Op.BITOR,query,queryStart));
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(query,op(Op.BITOR,query,notSimple));
    setChars(b,pchar,query);
    setChars(b,"?",query);
    setChars(b,"#",op(Op.BITOR,fragment,fragmentStart));
    b = build(fragment,op(Op.BITOR,fragment,notSimple));
    setChars(b,pchar,fragment);
    setChars(b,"?",fragment);
    b = build(scheme0,op(Op.BITOR,scheme,notSimple));
    setRange(b,"az",scheme);
    b = build(scheme,op(Op.BITOR,scheme,notSimple));
    setRange(b,"az",scheme);
    setRange(b,"09",scheme);
    setChars(b,"+-.",scheme);
    return tables;
};
export var identical : (a : Object,b : Object) => bool = (a : Object,b : Object) : bool =>  {
};
export var identityHashCode : (object : Object) => int = (object : Object) : int =>  {
};
export var print : (object : Object) => void = (object : Object) : void =>  {
    let line : String = `${object}`;
    if (_internal.properties.printToZone == null) {
        _internal.printToConsole(line);
    }else {
        _internal.properties.printToZone(line);
    }
};
export var _isLeadSurrogate : (code : int) => bool = (code : int) : bool =>  {
    return op(Op.EQUALS,(op(Op.BITAND,code,64512)),55296);
};
export var _isTrailSurrogate : (code : int) => bool = (code : int) : bool =>  {
    return op(Op.EQUALS,(op(Op.BITAND,code,64512)),56320);
};
export var _combineSurrogatePair : (start : int,end : int) => int = (start : int,end : int) : int =>  {
    return 65536 + (op(Op.SHIFTLEFT,(op(Op.BITAND,start,1023)),10)) + (op(Op.BITAND,end,1023));
};
export var _stringOrNullLength : (s : String) => int = (s : String) : int =>  {
    return (op(Op.EQUALS,s,null)) ? 0 : s.length;
};
export namespace RegExp {
    export type Constructors = never;
    export type Interface = Omit<RegExp, Constructors>;
}
@DartClass
@Implements(Pattern)
export class RegExp implements Pattern.Interface {
    constructor(source : String,_namedArguments? : {multiLine? : bool,caseSensitive? : bool}) {
    }
    @defaultFactory
    static $RegExp(source : String,_namedArguments? : {multiLine? : bool,caseSensitive? : bool}) : RegExp {
        let {multiLine,caseSensitive} = Object.assign({
            "multiLine" : false,
            "caseSensitive" : true}, _namedArguments );
    }
    @Abstract
    firstMatch(input : String) : Match{ throw 'abstract'}
    @Abstract
    allMatches(input : String,start? : int) : Iterable<Match>{ throw 'abstract'}
    @Abstract
    hasMatch(input : String) : bool{ throw 'abstract'}
    @Abstract
    stringMatch(input : String) : String{ throw 'abstract'}
    @AbstractProperty
    get pattern() : String{ throw 'abstract'}
    @AbstractProperty
    get isMultiLine() : bool{ throw 'abstract'}
    @AbstractProperty
    get isCaseSensitive() : bool{ throw 'abstract'}
}

export namespace Iterator {
    export type Constructors = 'Iterator';
    export type Interface<E> = Omit<Iterator<E>, Constructors>;
}
@DartClass
export class Iterator<E> {
    @Abstract
    moveNext() : bool{ throw 'abstract'}
    @AbstractProperty
    get current() : E{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Iterator() {
    }
}

export namespace List {
    export type Constructors = never;
    export type Interface<E> = Omit<List<E>, Constructors>;
}
@DartClass
@Implements(_internal.EfficientLengthIterable)
export class List<E> implements _internal.EfficientLengthIterable.Interface<E> {
    constructor(length? : int) {
    }
    @defaultFactory
    static $List<E>(length? : int) : List<E> {
    }
    @namedFactory
    static $filled<E>(length : int,fill : E,_namedArguments? : {growable? : bool}) : List<E> {
        let {growable} = Object.assign({
            "growable" : false}, _namedArguments );
    }
    static filled : new<E>(length : int,fill : E,_namedArguments? : {growable? : bool}) => List<E>;

    @namedFactory
    static $from<E>(elements : Iterable<any>,_namedArguments? : {growable? : bool}) : List<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
    }
    static from : new<E>(elements : Iterable<any>,_namedArguments? : {growable? : bool}) => List<E>;

    @namedFactory
    static $generate<E>(length : int,generator : <E>(index : int) => E,_namedArguments? : {growable? : bool}) : List<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        let result : List<E>;
        if (growable) {
            result = ((_) : core.DartList<E> =>  {
                {
                    _.length = length;
                    return _;
                }
            })(new core.DartList.literal<E>());
        }else {
            result = new List<E>(length);
        }
        for(let i : int = 0; op(Op.LT,i,length); i++){
            result[i] = generator(i);
        }
        return result;
    }
    static generate : new<E>(length : int,generator : <E>(index : int) => E,_namedArguments? : {growable? : bool}) => List<E>;

    @namedFactory
    static $unmodifiable<E>(elements : Iterable<any>) : List<E> {
    }
    static unmodifiable : new<E>(elements : Iterable<any>) => List<E>;

    @Abstract
    [OperatorMethods.INDEX](index : int) : E{ throw 'abstract'}
    @Abstract
    [OperatorMethods.INDEX_EQ](index : int,value : E) : void{ throw 'abstract'}
    @AbstractProperty
    get length() : int{ throw 'abstract'}
    set length(newLength : int){ throw 'abstract'}
    @Abstract
    add(value : E) : void{ throw 'abstract'}
    @Abstract
    addAll(iterable : Iterable<E>) : void{ throw 'abstract'}
    @AbstractProperty
    get reversed() : Iterable<E>{ throw 'abstract'}
    @Abstract
    sort(compare? : <E>(a : E,b : E) => int) : void{ throw 'abstract'}
    @Abstract
    shuffle(random? : math.Random) : void{ throw 'abstract'}
    @Abstract
    indexOf(element : E,start? : int) : int{ throw 'abstract'}
    @Abstract
    lastIndexOf(element : E,start? : int) : int{ throw 'abstract'}
    @Abstract
    clear() : void{ throw 'abstract'}
    @Abstract
    insert(index : int,element : E) : void{ throw 'abstract'}
    @Abstract
    insertAll(index : int,iterable : Iterable<E>) : void{ throw 'abstract'}
    @Abstract
    setAll(index : int,iterable : Iterable<E>) : void{ throw 'abstract'}
    @Abstract
    remove(value : Object) : bool{ throw 'abstract'}
    @Abstract
    removeAt(index : int) : E{ throw 'abstract'}
    @Abstract
    removeLast() : E{ throw 'abstract'}
    @Abstract
    removeWhere(test : <E>(element : E) => bool) : void{ throw 'abstract'}
    @Abstract
    retainWhere(test : <E>(element : E) => bool) : void{ throw 'abstract'}
    @Abstract
    sublist(start : int,end? : int) : List<E>{ throw 'abstract'}
    @Abstract
    getRange(start : int,end : int) : Iterable<E>{ throw 'abstract'}
    @Abstract
    setRange(start : int,end : int,iterable : Iterable<E>,skipCount? : int) : void{ throw 'abstract'}
    @Abstract
    removeRange(start : int,end : int) : void{ throw 'abstract'}
    @Abstract
    fillRange(start : int,end : int,fillValue? : E) : void{ throw 'abstract'}
    @Abstract
    replaceRange(start : int,end : int,replacement : Iterable<E>) : void{ throw 'abstract'}
    @Abstract
    asMap() : Map<int,E>{ throw 'abstract'}
}

export namespace Map {
    export type Constructors = never;
    export type Interface<K,V> = Omit<Map<K,V>, Constructors>;
}
@DartClass
export class Map<K,V> {
    constructor() {
    }
    @defaultFactory
    static $Map<K,V>() : Map<K,V> {
    }
    @namedFactory
    static $from<K,V>(other : Map<any,any>) : Map<K,V> {
        return new core.DartLinkedHashMap.from(other);
    }
    static from : new<K,V>(other : Map<any,any>) => Map<K,V>;

    @namedFactory
    static $unmodifiable<K,V>(other : Map<any,any>) : Map<K,V> {
    }
    static unmodifiable : new<K,V>(other : Map<any,any>) => Map<K,V>;

    @namedFactory
    static $identity<K,V>() : Map<K,V> {
        return new core.DartLinkedHashMap.identity();
    }
    static identity : new<K,V>() => Map<K,V>;

    @namedFactory
    static $fromIterable<K,V>(iterable : Iterable<any>,_namedArguments? : {key? : <K,V>(element : any) => K,value? : <K,V>(element : any) => V}) : Map<K,V> {
        let {key,value} = Object.assign({
        }, _namedArguments );
        return new core.DartLinkedHashMap.fromIterable(iterable,{
            key : key,value : value});
    }
    static fromIterable : new<K,V>(iterable : Iterable<any>,_namedArguments? : {key? : <K,V>(element : any) => K,value? : <K,V>(element : any) => V}) => Map<K,V>;

    @namedFactory
    static $fromIterables<K,V>(keys : Iterable<K>,values : Iterable<V>) : Map<K,V> {
        return new core.DartLinkedHashMap.fromIterables(keys,values);
    }
    static fromIterables : new<K,V>(keys : Iterable<K>,values : Iterable<V>) => Map<K,V>;

    @Abstract
    containsValue(value : Object) : bool{ throw 'abstract'}
    @Abstract
    containsKey(key : Object) : bool{ throw 'abstract'}
    @Abstract
    [OperatorMethods.INDEX](key : Object) : V{ throw 'abstract'}
    @Abstract
    [OperatorMethods.INDEX_EQ](key : K,value : V) : void{ throw 'abstract'}
    @Abstract
    putIfAbsent(key : K,ifAbsent : <K,V>() => V) : V{ throw 'abstract'}
    @Abstract
    addAll(other : Map<K,V>) : void{ throw 'abstract'}
    @Abstract
    remove(key : Object) : V{ throw 'abstract'}
    @Abstract
    clear() : void{ throw 'abstract'}
    @Abstract
    forEach(f : <K,V>(key : K,value : V) => void) : void{ throw 'abstract'}
    @AbstractProperty
    get keys() : Iterable<K>{ throw 'abstract'}
    @AbstractProperty
    get values() : Iterable<V>{ throw 'abstract'}
    @AbstractProperty
    get length() : int{ throw 'abstract'}
    @AbstractProperty
    get isEmpty() : bool{ throw 'abstract'}
    @AbstractProperty
    get isNotEmpty() : bool{ throw 'abstract'}
}

export namespace Null {
    export type Constructors = never;
    export type Interface = Omit<Null, Constructors>;
}
@DartClass
export class Null {
    @namedFactory
    static $_uninstantiable() : Null {
        throw new UnsupportedError('class Null cannot be instantiated');
    }
    static _uninstantiable : new() => Null;

    get hashCode() : int {
    }
    toString() : String {
        return "null";
    }
}

export namespace num {
    export type Constructors = 'num';
    export type Interface = Omit<num, Constructors>;
}
@DartClass
@Implements(Comparable)
export class num implements Comparable.Interface<num> {
    @Abstract
    [OperatorMethods.EQUALS](other : Object) : bool{ throw 'abstract'}
    @AbstractProperty
    get hashCode() : int{ throw 'abstract'}
    @Abstract
    compareTo(other : num) : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.PLUS](other : num) : num{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MINUS](other : num) : num{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MULTIPLY](other : num) : num{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MODULE](other : num) : num{ throw 'abstract'}
    @Abstract
    [OperatorMethods.DIVIDE](other : num) : double{ throw 'abstract'}
    @Abstract
    [OperatorMethods.QUOTIENT](other : num) : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.NEGATE]() : num{ throw 'abstract'}
    @Abstract
    remainder(other : num) : num{ throw 'abstract'}
    @Abstract
    [OperatorMethods.LT](other : num) : bool{ throw 'abstract'}
    @Abstract
    [OperatorMethods.LEQ](other : num) : bool{ throw 'abstract'}
    @Abstract
    [OperatorMethods.GT](other : num) : bool{ throw 'abstract'}
    @Abstract
    [OperatorMethods.GEQ](other : num) : bool{ throw 'abstract'}
    @AbstractProperty
    get isNaN() : bool{ throw 'abstract'}
    @AbstractProperty
    get isNegative() : bool{ throw 'abstract'}
    @AbstractProperty
    get isInfinite() : bool{ throw 'abstract'}
    @AbstractProperty
    get isFinite() : bool{ throw 'abstract'}
    @Abstract
    abs() : num{ throw 'abstract'}
    @AbstractProperty
    get sign() : num{ throw 'abstract'}
    @Abstract
    round() : int{ throw 'abstract'}
    @Abstract
    floor() : int{ throw 'abstract'}
    @Abstract
    ceil() : int{ throw 'abstract'}
    @Abstract
    truncate() : int{ throw 'abstract'}
    @Abstract
    roundToDouble() : double{ throw 'abstract'}
    @Abstract
    floorToDouble() : double{ throw 'abstract'}
    @Abstract
    ceilToDouble() : double{ throw 'abstract'}
    @Abstract
    truncateToDouble() : double{ throw 'abstract'}
    @Abstract
    clamp(lowerLimit : num,upperLimit : num) : num{ throw 'abstract'}
    @Abstract
    toInt() : int{ throw 'abstract'}
    @Abstract
    toDouble() : double{ throw 'abstract'}
    @Abstract
    toStringAsFixed(fractionDigits : int) : String{ throw 'abstract'}
    @Abstract
    toStringAsExponential(fractionDigits? : int) : String{ throw 'abstract'}
    @Abstract
    toStringAsPrecision(precision : int) : String{ throw 'abstract'}
    @Abstract
    toString() : String{ throw 'abstract'}
    static parse(input : String,onError? : (input : String) => num) : num {
        let source : String = input.trim();
        let result : num = int.parse(source,{
            onError : num._returnIntNull.bind(this)});
        if (result != null) return result;
        result = double.parse(source,num._returnDoubleNull.bind(this));
        if (result != null) return result;
        if (op(Op.EQUALS,onError,null)) throw new FormatException(input);
        return onError(input);
    }
    static _returnIntNull(_ : String) : int {
        return null;
    }
    static _returnDoubleNull(_ : String) : double {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    num() {
    }
}

export namespace Object {
    export type Constructors = 'Object';
    export type Interface = Omit<Object, Constructors>;
}
@DartClass
export class Object {
    constructor() {
    }
    @defaultConstructor
    Object() {
    }
    [OperatorMethods.EQUALS](other : any) : bool {
    }
    get hashCode() : int {
    }
    toString() : String {
    }
    noSuchMethod(invocation : Invocation) : any {
    }
    get runtimeType() : Type {
    }
}

export namespace Pattern {
    export type Constructors = 'Pattern';
    export type Interface = Omit<Pattern, Constructors>;
}
@DartClass
export class Pattern {
    @Abstract
    allMatches(string : String,start? : int) : Iterable<Match>{ throw 'abstract'}
    @Abstract
    matchAsPrefix(string : String,start? : int) : Match{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Pattern() {
    }
}

export namespace Match {
    export type Constructors = 'Match';
    export type Interface = Omit<Match, Constructors>;
}
@DartClass
export class Match {
    @AbstractProperty
    get start() : int{ throw 'abstract'}
    @AbstractProperty
    get end() : int{ throw 'abstract'}
    @Abstract
    group(group : int) : String{ throw 'abstract'}
    @Abstract
    [OperatorMethods.INDEX](group : int) : String{ throw 'abstract'}
    @Abstract
    groups(groupIndices : List<int>) : List<String>{ throw 'abstract'}
    @AbstractProperty
    get groupCount() : int{ throw 'abstract'}
    @AbstractProperty
    get input() : String{ throw 'abstract'}
    @AbstractProperty
    get pattern() : Pattern{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Match() {
    }
}

export namespace _Override {
    export type Constructors = '_Override';
    export type Interface = Omit<_Override, Constructors>;
}
@DartClass
export class _Override {
    constructor() {
    }
    @defaultConstructor
    _Override() {
    }
}

export namespace Function {
    export type Constructors = 'Function';
    export type Interface = Omit<Function, Constructors>;
}
@DartClass
export class Function {
    static apply(function : Function,positionalArguments : List<any>,namedArguments? : Map<Symbol,any>) {
    }
    @AbstractProperty
    get hashCode() : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : Object) : bool{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Function() {
    }
}

export namespace Set {
    export type Constructors = _internal.EfficientLengthIterable.Constructors | never;
    export type Interface<E> = Omit<Set<E>, Constructors>;
}
@DartClass
export class Set<E> extends _internal.EfficientLengthIterable<E> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $Set<E>() : Set<E> {
        return new core.DartLinkedHashSet.$create();
    }
    @namedFactory
    static $identity<E>() : Set<E> {
        return new core.DartLinkedHashSet.identity();
    }
    static identity : new<E>() => Set<E>;

    @namedFactory
    static $from<E>(elements : Iterable<any>) : Set<E> {
        return new core.DartLinkedHashSet.from(elements);
    }
    static from : new<E>(elements : Iterable<any>) => Set<E>;

    @AbstractProperty
    get iterator() : Iterator<E>{ throw 'abstract'}
    @Abstract
    contains(value : Object) : bool{ throw 'abstract'}
    @Abstract
    add(value : E) : bool{ throw 'abstract'}
    @Abstract
    addAll(elements : Iterable<E>) : void{ throw 'abstract'}
    @Abstract
    remove(value : Object) : bool{ throw 'abstract'}
    @Abstract
    lookup(object : Object) : E{ throw 'abstract'}
    @Abstract
    removeAll(elements : Iterable<Object>) : void{ throw 'abstract'}
    @Abstract
    retainAll(elements : Iterable<Object>) : void{ throw 'abstract'}
    @Abstract
    removeWhere(test : <E>(element : E) => bool) : void{ throw 'abstract'}
    @Abstract
    retainWhere(test : <E>(element : E) => bool) : void{ throw 'abstract'}
    @Abstract
    containsAll(other : Iterable<Object>) : bool{ throw 'abstract'}
    @Abstract
    intersection(other : Set<Object>) : Set<E>{ throw 'abstract'}
    @Abstract
    union(other : Set<E>) : Set<E>{ throw 'abstract'}
    @Abstract
    difference(other : Set<Object>) : Set<E>{ throw 'abstract'}
    @Abstract
    clear() : void{ throw 'abstract'}
    @Abstract
    toSet() : Set<E>{ throw 'abstract'}
}

export namespace Sink {
    export type Constructors = 'Sink';
    export type Interface<T> = Omit<Sink<T>, Constructors>;
}
@DartClass
export class Sink<T> {
    @Abstract
    add(data : T) : void{ throw 'abstract'}
    @Abstract
    close() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Sink() {
    }
}

export namespace StackTrace {
    export type Constructors = 'StackTrace';
    export type Interface = Omit<StackTrace, Constructors>;
}
@DartClass
export class StackTrace {
    constructor() {
    }
    @defaultConstructor
    StackTrace() {
    }
    @namedFactory
    static $fromString(stackTraceString : String) : StackTrace {
        return new _StringStackTrace(stackTraceString);
    }
    static fromString : new(stackTraceString : String) => StackTrace;

    static get current() : StackTrace {
    }
    @Abstract
    toString() : String{ throw 'abstract'}
}

export namespace _StringStackTrace {
    export type Constructors = '_StringStackTrace';
    export type Interface = Omit<_StringStackTrace, Constructors>;
}
@DartClass
@Implements(StackTrace)
export class _StringStackTrace implements StackTrace.Interface {
    _stackTrace : String;

    constructor(_stackTrace : String) {
    }
    @defaultConstructor
    _StringStackTrace(_stackTrace : String) {
        this._stackTrace = _stackTrace;
    }
    toString() : String {
        return this._stackTrace;
    }
}

export namespace Stopwatch {
    export type Constructors = 'Stopwatch';
    export type Interface = Omit<Stopwatch, Constructors>;
}
@DartClass
export class Stopwatch {
    private static __$_frequency : int;
    static get _frequency() : int { 
        return this.__$_frequency;
    }
    static set _frequency(__$value : int)  { 
        this.__$_frequency = __$value;
    }

    _start : int;

    _stop : int;

    constructor() {
    }
    @defaultConstructor
    Stopwatch() {
        this._start = 0;
        this._stop = 0;
        if (op(Op.EQUALS,Stopwatch._frequency,null)) Stopwatch._initTicker();
    }
    get frequency() : int {
        return Stopwatch._frequency;
    }
    start() : void {
        if (this._stop != null) {
            this._start += op(Op.MINUS,Stopwatch._now(),this._stop);
            this._stop = null;
        }
    }
    stop() : void {
        this._stop = ( this._stop ) || ( Stopwatch._now() );
    }
    reset() : void {
        this._start = (this._stop || Stopwatch._now());
    }
    get elapsedTicks() : int {
        return op(Op.MINUS,((this._stop || Stopwatch._now())),this._start);
    }
    get elapsed() : Duration {
        return new Duration({
            microseconds : this.elapsedMicroseconds});
    }
    get elapsedMicroseconds() : int {
        return op(Op.QUOTIENT,(op(Op.TIMES,this.elapsedTicks,1000000)),this.frequency);
    }
    get elapsedMilliseconds() : int {
        return op(Op.QUOTIENT,(op(Op.TIMES,this.elapsedTicks,1000)),this.frequency);
    }
    get isRunning() : bool {
        return op(Op.EQUALS,this._stop,null);
    }
    static _initTicker() : void {
    }
    static _now() : int {
    }
}

export namespace String {
    export type Constructors = never;
    export type Interface = Omit<String, Constructors>;
}
@DartClass
@Implements(Comparable,Pattern)
export class String implements Comparable.Interface<String>,Pattern.Interface {
    @namedFactory
    static $fromCharCodes(charCodes : Iterable<int>,start? : int,end? : int) : String {
        start = start || 0;
    }
    static fromCharCodes : new(charCodes : Iterable<int>,start : int,end : int) => String;

    @namedFactory
    static $fromCharCode(charCode : int) : String {
    }
    static fromCharCode : new(charCode : int) => String;

    @namedFactory
    static $fromEnvironment(name : String,_namedArguments? : {defaultValue? : String}) : String {
        let {defaultValue} = Object.assign({
        }, _namedArguments );
    }
    static fromEnvironment : new(name : String,_namedArguments? : {defaultValue? : String}) => String;

    @Abstract
    [OperatorMethods.INDEX](index : int) : String{ throw 'abstract'}
    @Abstract
    codeUnitAt(index : int) : int{ throw 'abstract'}
    @AbstractProperty
    get length() : int{ throw 'abstract'}
    @AbstractProperty
    get hashCode() : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : Object) : bool{ throw 'abstract'}
    @Abstract
    endsWith(other : String) : bool{ throw 'abstract'}
    @Abstract
    startsWith(pattern : Pattern,index? : int) : bool{ throw 'abstract'}
    @Abstract
    indexOf(pattern : Pattern,start? : int) : int{ throw 'abstract'}
    @Abstract
    lastIndexOf(pattern : Pattern,start? : int) : int{ throw 'abstract'}
    @AbstractProperty
    get isEmpty() : bool{ throw 'abstract'}
    @AbstractProperty
    get isNotEmpty() : bool{ throw 'abstract'}
    @Abstract
    [OperatorMethods.PLUS](other : String) : String{ throw 'abstract'}
    @Abstract
    substring(startIndex : int,endIndex? : int) : String{ throw 'abstract'}
    @Abstract
    trim() : String{ throw 'abstract'}
    @Abstract
    trimLeft() : String{ throw 'abstract'}
    @Abstract
    trimRight() : String{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MULTIPLY](times : int) : String{ throw 'abstract'}
    @Abstract
    padLeft(width : int,padding? : String) : String{ throw 'abstract'}
    @Abstract
    padRight(width : int,padding? : String) : String{ throw 'abstract'}
    @Abstract
    contains(other : Pattern,startIndex? : int) : bool{ throw 'abstract'}
    @Abstract
    replaceFirst(from : Pattern,to : String,startIndex? : int) : String{ throw 'abstract'}
    @Abstract
    replaceFirstMapped(from : Pattern,replace : (match : Match) => String,startIndex? : int) : String{ throw 'abstract'}
    @Abstract
    replaceAll(from : Pattern,replace : String) : String{ throw 'abstract'}
    @Abstract
    replaceAllMapped(from : Pattern,replace : (match : Match) => String) : String{ throw 'abstract'}
    @Abstract
    replaceRange(start : int,end : int,replacement : String) : String{ throw 'abstract'}
    @Abstract
    split(pattern : Pattern) : List<String>{ throw 'abstract'}
    @Abstract
    splitMapJoin(pattern : Pattern,_namedArguments? : {onMatch? : (match : Match) => String,onNonMatch? : (nonMatch : String) => String}) : String{ throw 'abstract'}
    @AbstractProperty
    get codeUnits() : List<int>{ throw 'abstract'}
    @AbstractProperty
    get runes() : Runes{ throw 'abstract'}
    @Abstract
    toLowerCase() : String{ throw 'abstract'}
    @Abstract
    toUpperCase() : String{ throw 'abstract'}
}

export namespace Uri {
    export type Constructors = never;
    export type Interface = Omit<Uri, Constructors>;
}
@DartClass
export class Uri {
    static get base() : Uri {
    }
    constructor(_namedArguments? : {scheme? : String,userInfo? : String,host? : String,port? : int,path? : String,pathSegments? : Iterable<String>,query? : String,queryParameters? : Map<String,any>,fragment? : String}) {
    }
    @defaultFactory
    static $Uri(_namedArguments? : {scheme? : String,userInfo? : String,host? : String,port? : int,path? : String,pathSegments? : Iterable<String>,query? : String,queryParameters? : Map<String,any>,fragment? : String}) : Uri {
        let {scheme,userInfo,host,port,path,pathSegments,query,queryParameters,fragment} = Object.assign({
        }, _namedArguments );
        return new _Uri.$create({
            scheme : scheme,userInfo : userInfo,host : host,port : port,path : path,pathSegments : pathSegments,query : query,queryParameters : queryParameters,fragment : fragment});
    }
    @namedFactory
    static $http(authority : String,unencodedPath : String,queryParameters? : Map<String,String>) : Uri {
        return new _Uri.http(authority,unencodedPath,queryParameters);
    }
    static http : new(authority : String,unencodedPath : String,queryParameters : Map<String,String>) => Uri;

    @namedFactory
    static $https(authority : String,unencodedPath : String,queryParameters? : Map<String,String>) : Uri {
        return new _Uri.https(authority,unencodedPath,queryParameters);
    }
    static https : new(authority : String,unencodedPath : String,queryParameters : Map<String,String>) => Uri;

    @namedFactory
    static $file(path : String,_namedArguments? : {windows? : bool}) : Uri {
        let {windows} = Object.assign({
        }, _namedArguments );
        return new _Uri.file(path,{
            windows : windows});
    }
    static file : new(path : String,_namedArguments? : {windows? : bool}) => Uri;

    @namedFactory
    static $directory(path : String,_namedArguments? : {windows? : bool}) : Uri {
        let {windows} = Object.assign({
        }, _namedArguments );
        return new _Uri.directory(path,{
            windows : windows});
    }
    static directory : new(path : String,_namedArguments? : {windows? : bool}) => Uri;

    @namedFactory
    static $dataFromString(content : String,_namedArguments? : {mimeType? : String,encoding? : convert.Encoding,parameters? : Map<String,String>,base64? : bool}) : Uri {
        let {mimeType,encoding,parameters,base64} = Object.assign({
            "base64" : false}, _namedArguments );
        let data : UriData = new UriData.fromString(content,{
            mimeType : mimeType,encoding : encoding,parameters : parameters,base64 : base64});
        return data.uri;
    }
    static dataFromString : new(content : String,_namedArguments? : {mimeType? : String,encoding? : convert.Encoding,parameters? : Map<String,String>,base64? : bool}) => Uri;

    @namedFactory
    static $dataFromBytes(bytes : List<int>,_namedArguments? : {mimeType? : any,parameters? : Map<String,String>,percentEncoded? : any}) : Uri {
        let {mimeType,parameters,percentEncoded} = Object.assign({
            "mimeType" : "application/octet-stream",
            "percentEncoded" : false}, _namedArguments );
        let data : UriData = new UriData.fromBytes(bytes,{
            mimeType : mimeType,parameters : parameters,percentEncoded : percentEncoded});
        return data.uri;
    }
    static dataFromBytes : new(bytes : List<int>,_namedArguments? : {mimeType? : any,parameters? : Map<String,String>,percentEncoded? : any}) => Uri;

    @AbstractProperty
    get scheme() : String{ throw 'abstract'}
    @AbstractProperty
    get authority() : String{ throw 'abstract'}
    @AbstractProperty
    get userInfo() : String{ throw 'abstract'}
    @AbstractProperty
    get host() : String{ throw 'abstract'}
    @AbstractProperty
    get port() : int{ throw 'abstract'}
    @AbstractProperty
    get path() : String{ throw 'abstract'}
    @AbstractProperty
    get query() : String{ throw 'abstract'}
    @AbstractProperty
    get fragment() : String{ throw 'abstract'}
    @AbstractProperty
    get pathSegments() : List<String>{ throw 'abstract'}
    @AbstractProperty
    get queryParameters() : Map<String,String>{ throw 'abstract'}
    @AbstractProperty
    get queryParametersAll() : Map<String,List<String>>{ throw 'abstract'}
    @AbstractProperty
    get isAbsolute() : bool{ throw 'abstract'}
    get hasScheme() : bool {
        return this.scheme.isNotEmpty;
    }
    @AbstractProperty
    get hasAuthority() : bool{ throw 'abstract'}
    @AbstractProperty
    get hasPort() : bool{ throw 'abstract'}
    @AbstractProperty
    get hasQuery() : bool{ throw 'abstract'}
    @AbstractProperty
    get hasFragment() : bool{ throw 'abstract'}
    @AbstractProperty
    get hasEmptyPath() : bool{ throw 'abstract'}
    @AbstractProperty
    get hasAbsolutePath() : bool{ throw 'abstract'}
    @AbstractProperty
    get origin() : String{ throw 'abstract'}
    @Abstract
    isScheme(scheme : String) : bool{ throw 'abstract'}
    @Abstract
    toFilePath(_namedArguments? : {windows? : bool}) : String{ throw 'abstract'}
    @AbstractProperty
    get data() : UriData{ throw 'abstract'}
    @AbstractProperty
    get hashCode() : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : Object) : bool{ throw 'abstract'}
    @Abstract
    toString() : String{ throw 'abstract'}
    @Abstract
    replace(_namedArguments? : {scheme? : String,userInfo? : String,host? : String,port? : int,path? : String,pathSegments? : Iterable<String>,query? : String,queryParameters? : Map<String,any>,fragment? : String}) : Uri{ throw 'abstract'}
    @Abstract
    removeFragment() : Uri{ throw 'abstract'}
    @Abstract
    resolve(reference : String) : Uri{ throw 'abstract'}
    @Abstract
    resolveUri(reference : Uri) : Uri{ throw 'abstract'}
    @Abstract
    normalizePath() : Uri{ throw 'abstract'}
    static parse(uri : String,start? : int,end? : int) : Uri {
        start = start || 0;
        end = ( end ) || ( uri.length );
        if (op(Op.GEQ,end,op(Op.PLUS,start,5))) {
            let dataDelta : int = _startsWithData(uri,start);
            if (op(Op.EQUALS,dataDelta,0)) {
                if (op(Op.GT,start,0) || op(Op.LT,end,uri.length)) uri = uri.substring(start,end);
                return UriData._parse(uri,5,null).uri;
            }else if (op(Op.EQUALS,dataDelta,32)) {
                return UriData._parse(uri.substring(op(Op.PLUS,start,5),end),0,null).uri;
            }
        }
        let indices = new List<int>(8);
        ((_) : List<int> =>  {
            {
                _[0] = 0;
                _[properties._schemeEndIndex] = op(Op.MINUS,start,1);
                _[properties._hostStartIndex] = op(Op.MINUS,start,1);
                _[properties._notSimpleIndex] = op(Op.MINUS,start,1);
                _[properties._portStartIndex] = start;
                _[properties._pathStartIndex] = start;
                _[properties._queryStartIndex] = end;
                _[properties._fragmentStartIndex] = end;
                return _;
            }
        })(indices);
        let state = _scan(uri,start,end,properties._uriStart,indices);
        if (op(Op.GEQ,state,properties._nonSimpleEndStates)) {
            indices[properties._notSimpleIndex] = end;
        }
        let schemeEnd : int = indices[properties._schemeEndIndex];
        if (op(Op.GEQ,schemeEnd,start)) {
            state = _scan(uri,start,schemeEnd,properties._schemeStart,indices);
            if (op(Op.EQUALS,state,properties._schemeStart)) {
                indices[properties._notSimpleIndex] = schemeEnd;
            }
        }
        let hostStart : int = op(Op.PLUS,indices[properties._hostStartIndex],1);
        let portStart : int = indices[properties._portStartIndex];
        let pathStart : int = indices[properties._pathStartIndex];
        let queryStart : int = indices[properties._queryStartIndex];
        let fragmentStart : int = indices[properties._fragmentStartIndex];
        let scheme : String;
        if (op(Op.LT,fragmentStart,queryStart)) queryStart = fragmentStart;
        if (op(Op.LT,pathStart,hostStart) || op(Op.LEQ,pathStart,schemeEnd)) {
            pathStart = queryStart;
        }
        if (op(Op.LT,portStart,hostStart)) portStart = pathStart;
        /* TODO (AssertStatementImpl) : assert (hostStart == start || schemeEnd <= hostStart); */;
        /* TODO (AssertStatementImpl) : assert (hostStart <= portStart); */;
        /* TODO (AssertStatementImpl) : assert (schemeEnd <= pathStart); */;
        /* TODO (AssertStatementImpl) : assert (portStart <= pathStart); */;
        /* TODO (AssertStatementImpl) : assert (pathStart <= queryStart); */;
        /* TODO (AssertStatementImpl) : assert (queryStart <= fragmentStart); */;
        let isSimple : bool = op(Op.LT,indices[properties._notSimpleIndex],start);
        if (isSimple) {
            if (op(Op.GT,hostStart,op(Op.PLUS,schemeEnd,3))) {
                isSimple = false;
            }else if (op(Op.GT,portStart,start) && op(Op.EQUALS,op(Op.PLUS,portStart,1),pathStart)) {
                isSimple = false;
            }else if (op(Op.LT,queryStart,end) && (op(Op.EQUALS,queryStart,op(Op.PLUS,pathStart,2)) && uri.startsWith("..",pathStart)) || (op(Op.GT,queryStart,op(Op.PLUS,pathStart,2)) && uri.startsWith("/..",op(Op.MINUS,queryStart,3)))) {
                isSimple = false;
            }else {
                if (op(Op.EQUALS,schemeEnd,op(Op.PLUS,start,4))) {
                    if (uri.startsWith("file",start)) {
                        scheme = "file";
                        if (op(Op.LEQ,hostStart,start)) {
                            let schemeAuth : String = "file://";
                            let delta : int = 2;
                            if (!uri.startsWith("/",pathStart)) {
                                schemeAuth = "file:///";
                                delta = 3;
                            }
                            uri = op(Op.PLUS,schemeAuth,uri.substring(pathStart,end));
                            schemeEnd -= start;
                            hostStart = 7;
                            portStart = 7;
                            pathStart = 7;
                            queryStart += op(Op.MINUS,delta,start);
                            fragmentStart += op(Op.MINUS,delta,start);
                            start = 0;
                            end = uri.length;
                        }else if (op(Op.EQUALS,pathStart,queryStart)) {
                            if (op(Op.EQUALS,start,0) && op(Op.EQUALS,end,uri.length)) {
                                uri = uri.replaceRange(pathStart,queryStart,"/");
                                queryStart += 1;
                                fragmentStart += 1;
                                end += 1;
                            }else {
                                uri = `${uri.substring(start,pathStart)}/` + `${uri.substring(queryStart,end)}`;
                                schemeEnd -= start;
                                hostStart -= start;
                                portStart -= start;
                                pathStart -= start;
                                queryStart += 1 - start;
                                fragmentStart += 1 - start;
                                start = 0;
                                end = uri.length;
                            }
                        }
                    }else if (uri.startsWith("http",start)) {
                        scheme = "http";
                        if (op(Op.GT,portStart,start) && op(Op.EQUALS,op(Op.PLUS,portStart,3),pathStart) && uri.startsWith("80",op(Op.PLUS,portStart,1))) {
                            if (op(Op.EQUALS,start,0) && op(Op.EQUALS,end,uri.length)) {
                                uri = uri.replaceRange(portStart,pathStart,"");
                                pathStart -= 3;
                                queryStart -= 3;
                                fragmentStart -= 3;
                                end -= 3;
                            }else {
                                uri = op(Op.PLUS,uri.substring(start,portStart),uri.substring(pathStart,end));
                                schemeEnd -= start;
                                hostStart -= start;
                                portStart -= start;
                                pathStart -= 3 + start;
                                queryStart -= 3 + start;
                                fragmentStart -= 3 + start;
                                start = 0;
                                end = uri.length;
                            }
                        }
                    }
                }else if (op(Op.EQUALS,schemeEnd,op(Op.PLUS,start,5)) && uri.startsWith("https",start)) {
                    scheme = "https";
                    if (op(Op.GT,portStart,start) && op(Op.EQUALS,op(Op.PLUS,portStart,4),pathStart) && uri.startsWith("443",op(Op.PLUS,portStart,1))) {
                        if (op(Op.EQUALS,start,0) && op(Op.EQUALS,end,uri.length)) {
                            uri = uri.replaceRange(portStart,pathStart,"");
                            pathStart -= 4;
                            queryStart -= 4;
                            fragmentStart -= 4;
                            end -= 3;
                        }else {
                            uri = op(Op.PLUS,uri.substring(start,portStart),uri.substring(pathStart,end));
                            schemeEnd -= start;
                            hostStart -= start;
                            portStart -= start;
                            pathStart -= 4 + start;
                            queryStart -= 4 + start;
                            fragmentStart -= 4 + start;
                            start = 0;
                            end = uri.length;
                        }
                    }
                }
            }
        }
        if (isSimple) {
            if (op(Op.GT,start,0) || op(Op.LT,end,uri.length)) {
                uri = uri.substring(start,end);
                schemeEnd -= start;
                hostStart -= start;
                portStart -= start;
                pathStart -= start;
                queryStart -= start;
                fragmentStart -= start;
            }
            return new _SimpleUri(uri,schemeEnd,hostStart,portStart,pathStart,queryStart,fragmentStart,scheme);
        }
        return new _Uri.notSimple(uri,start,end,schemeEnd,hostStart,portStart,pathStart,queryStart,fragmentStart,scheme);
    }
    static encodeComponent(component : String) : String {
        return _Uri._uriEncode(_Uri._unreserved2396Table,component,convert.properties.UTF8,false);
    }
    static encodeQueryComponent(component : String,_namedArguments? : {encoding? : convert.Encoding}) : String {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        return _Uri._uriEncode(_Uri._unreservedTable,component,encoding,true);
    }
    static decodeComponent(encodedComponent : String) : String {
        return _Uri._uriDecode(encodedComponent,0,encodedComponent.length,convert.properties.UTF8,false);
    }
    static decodeQueryComponent(encodedComponent : String,_namedArguments? : {encoding? : convert.Encoding}) : String {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        return _Uri._uriDecode(encodedComponent,0,encodedComponent.length,encoding,true);
    }
    static encodeFull(uri : String) : String {
        return _Uri._uriEncode(_Uri._encodeFullTable,uri,convert.properties.UTF8,false);
    }
    static decodeFull(uri : String) : String {
        return _Uri._uriDecode(uri,0,uri.length,convert.properties.UTF8,false);
    }
    static splitQueryString(query : String,_namedArguments? : {encoding? : convert.Encoding}) : Map<String,String> {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        return query.split("&").fold(new core.DartMap.literal([
        ]),(map : any,element : any) =>  {
            let index : int = element.indexOf("=");
            if (op(Op.EQUALS,index,-1)) {
                if (element != "") {
                    op(Op.INDEX_ASSIGN,map,Uri.decodeQueryComponent(element,{
                        encoding : encoding}),"");
                }
            }else if (index != 0) {
                let key = element.substring(0,index);
                let value = element.substring(op(Op.PLUS,index,1));
                op(Op.INDEX_ASSIGN,map,Uri.decodeQueryComponent(key,{
                    encoding : encoding}),Uri.decodeQueryComponent(value,{
                    encoding : encoding}));
            }
            return map;
        });
    }
    static parseIPv4Address(host : String) : List<int> {
        return Uri._parseIPv4Address(host,0,host.length);
    }
    static _parseIPv4Address(host : String,start : int,end : int) : List<int> {
        var error : (msg : String,position : int) => void = (msg : String,position : int) : void =>  {
            throw new FormatException(`Illegal IPv4 address, ${msg}`,host,position);
        };
        let result = new typed_data.Uint8List(4);
        let partIndex : int = 0;
        let partStart : int = start;
        for(let i : int = start; op(Op.LT,i,end); i++){
            let char : int = host.codeUnitAt(i);
            if (char != properties._DOT) {
                if (op(Op.GT,op(Op.XOR,char,48),9)) {
                    error("invalid character",i);
                }
            }else {
                if (op(Op.EQUALS,partIndex,3)) {
                    error('IPv4 address should contain exactly 4 parts',i);
                }
                let part : int = int.parse(host.substring(partStart,i));
                if (op(Op.GT,part,255)) {
                    error("each part must be in the range 0..255",partStart);
                }
                op(Op.INDEX_ASSIGN,result,partIndex++,part);
                partStart = op(Op.PLUS,i,1);
            }
        }
        if (partIndex != 3) {
            error('IPv4 address should contain exactly 4 parts',end);
        }
        let part : int = int.parse(host.substring(partStart,end));
        if (op(Op.GT,part,255)) {
            error("each part must be in the range 0..255",partStart);
        }
        op(Op.INDEX_ASSIGN,result,partIndex,part);
        return result;
    }
    static parseIPv6Address(host : String,start? : int,end? : int) : List<int> {
        start = start || 0;
        if (op(Op.EQUALS,end,null)) end = host.length;
        var error : (msg : String,position? : any) => void = (msg : String,position? : any) : void =>  {
            throw new FormatException(`Illegal IPv6 address, ${msg}`,host,position);
        };
        var parseHex : (start : int,end : int) => int = (start : int,end : int) : int =>  {
            if (op(Op.GT,op(Op.MINUS,end,start),4)) {
                error('an IPv6 part can only contain a maximum of 4 hex digits',start);
            }
            let value : int = int.parse(host.substring(start,end),{
                radix : 16});
            if (op(Op.LT,value,0) || op(Op.GT,value,65535)) {
                error('each part must be in the range of `0x0..0xFFFF`',start);
            }
            return value;
        };
        if (op(Op.LT,host.length,2)) error('address is too short');
        let parts : List<int> = new core.DartList.literal();
        let wildcardSeen : bool = false;
        let seenDot : bool = false;
        let partStart : int = start;
        for(let i : int = start; op(Op.LT,i,end); i++){
            let char : int = host.codeUnitAt(i);
            if (op(Op.EQUALS,char,properties._COLON)) {
                if (op(Op.EQUALS,i,start)) {
                    i++;
                    if (host.codeUnitAt(i) != properties._COLON) {
                        error('invalid start colon.',i);
                    }
                    partStart = i;
                }
                if (op(Op.EQUALS,i,partStart)) {
                    if (wildcardSeen) {
                        error('only one wildcard `::` is allowed',i);
                    }
                    wildcardSeen = true;
                    parts.add(-1);
                }else {
                    parts.add(parseHex(partStart,i));
                }
                partStart = op(Op.PLUS,i,1);
            }else if (op(Op.EQUALS,char,properties._DOT)) {
                seenDot = true;
            }
        }
        if (op(Op.EQUALS,parts.length,0)) error('too few parts');
        let atEnd : bool = (op(Op.EQUALS,partStart,end));
        let isLastWildcard : bool = (op(Op.EQUALS,parts.last,-1));
        if (atEnd && !isLastWildcard) {
            error('expected a part after last `:`',end);
        }
        if (!atEnd) {
            if (!seenDot) {
                parts.add(parseHex(partStart,end));
            }else {
                let last : List<int> = Uri._parseIPv4Address(host,partStart,end);
                parts.add(op(Op.BITOR,op(Op.SHIFTLEFT,last[0],8),last[1]));
                parts.add(op(Op.BITOR,op(Op.SHIFTLEFT,last[2],8),last[3]));
            }
        }
        if (wildcardSeen) {
            if (op(Op.GT,parts.length,7)) {
                error('an address with a wildcard must have less than 7 parts');
            }
        }else if (parts.length != 8) {
            error('an address without a wildcard must contain exactly 8 parts');
        }
        let bytes : List<int> = new typed_data.Uint8List(16);
        for(let i : int = 0, index : int = 0; op(Op.LT,i,parts.length); i++){
            let value : int = parts[i];
            if (op(Op.EQUALS,value,-1)) {
                let wildCardLength : int = 9 - parts.length;
                for(let j : int = 0; op(Op.LT,j,wildCardLength); j++){
                    bytes[index] = 0;
                    bytes[op(Op.PLUS,index,1)] = 0;
                    index += 2;
                }
            }else {
                bytes[index] = op(Op.SHIFTRIGHT,value,8);
                bytes[op(Op.PLUS,index,1)] = op(Op.BITAND,value,255);
                index += 2;
            }
        }
        return bytes;
    }
}

export namespace bool {
    export type Constructors = never;
    export type Interface = Omit<bool, Constructors>;
}
@DartClass
export class bool {
    @namedFactory
    static $fromEnvironment(name : String,_namedArguments? : {defaultValue? : bool}) : bool {
        let {defaultValue} = Object.assign({
            "defaultValue" : false}, _namedArguments );
    }
    static fromEnvironment : new(name : String,_namedArguments? : {defaultValue? : bool}) => bool;

    get hashCode() : int {
    }
    toString() : String {
        return this ? "true" : "false";
    }
}

export namespace Comparable {
    export type Constructors = 'Comparable';
    export type Interface<T> = Omit<Comparable<T>, Constructors>;
}
@DartClass
export class Comparable<T> {
    @Abstract
    compareTo(other : T) : int{ throw 'abstract'}
    static compare(a : Comparable<any>,b : Comparable<any>) : int {
        return a.compareTo(b);
    }
    constructor() {
    }
    @defaultConstructor
    Comparable() {
    }
}

export namespace DateTime {
    export type Constructors = 'DateTime' | 'utc' | 'now' | 'fromMillisecondsSinceEpoch' | 'fromMicrosecondsSinceEpoch' | '_withValue' | '_internal' | '_now';
    export type Interface = Omit<DateTime, Constructors>;
}
@DartClass
@Implements(Comparable)
export class DateTime implements Comparable.Interface<DateTime> {
    private static __$MONDAY : int;
    static get MONDAY() : int { 
        if (this.__$MONDAY===undefined) {
            this.__$MONDAY = 1;
        }
        return this.__$MONDAY;
    }

    private static __$TUESDAY : int;
    static get TUESDAY() : int { 
        if (this.__$TUESDAY===undefined) {
            this.__$TUESDAY = 2;
        }
        return this.__$TUESDAY;
    }

    private static __$WEDNESDAY : int;
    static get WEDNESDAY() : int { 
        if (this.__$WEDNESDAY===undefined) {
            this.__$WEDNESDAY = 3;
        }
        return this.__$WEDNESDAY;
    }

    private static __$THURSDAY : int;
    static get THURSDAY() : int { 
        if (this.__$THURSDAY===undefined) {
            this.__$THURSDAY = 4;
        }
        return this.__$THURSDAY;
    }

    private static __$FRIDAY : int;
    static get FRIDAY() : int { 
        if (this.__$FRIDAY===undefined) {
            this.__$FRIDAY = 5;
        }
        return this.__$FRIDAY;
    }

    private static __$SATURDAY : int;
    static get SATURDAY() : int { 
        if (this.__$SATURDAY===undefined) {
            this.__$SATURDAY = 6;
        }
        return this.__$SATURDAY;
    }

    private static __$SUNDAY : int;
    static get SUNDAY() : int { 
        if (this.__$SUNDAY===undefined) {
            this.__$SUNDAY = 7;
        }
        return this.__$SUNDAY;
    }

    private static __$DAYS_PER_WEEK : int;
    static get DAYS_PER_WEEK() : int { 
        if (this.__$DAYS_PER_WEEK===undefined) {
            this.__$DAYS_PER_WEEK = 7;
        }
        return this.__$DAYS_PER_WEEK;
    }

    private static __$JANUARY : int;
    static get JANUARY() : int { 
        if (this.__$JANUARY===undefined) {
            this.__$JANUARY = 1;
        }
        return this.__$JANUARY;
    }

    private static __$FEBRUARY : int;
    static get FEBRUARY() : int { 
        if (this.__$FEBRUARY===undefined) {
            this.__$FEBRUARY = 2;
        }
        return this.__$FEBRUARY;
    }

    private static __$MARCH : int;
    static get MARCH() : int { 
        if (this.__$MARCH===undefined) {
            this.__$MARCH = 3;
        }
        return this.__$MARCH;
    }

    private static __$APRIL : int;
    static get APRIL() : int { 
        if (this.__$APRIL===undefined) {
            this.__$APRIL = 4;
        }
        return this.__$APRIL;
    }

    private static __$MAY : int;
    static get MAY() : int { 
        if (this.__$MAY===undefined) {
            this.__$MAY = 5;
        }
        return this.__$MAY;
    }

    private static __$JUNE : int;
    static get JUNE() : int { 
        if (this.__$JUNE===undefined) {
            this.__$JUNE = 6;
        }
        return this.__$JUNE;
    }

    private static __$JULY : int;
    static get JULY() : int { 
        if (this.__$JULY===undefined) {
            this.__$JULY = 7;
        }
        return this.__$JULY;
    }

    private static __$AUGUST : int;
    static get AUGUST() : int { 
        if (this.__$AUGUST===undefined) {
            this.__$AUGUST = 8;
        }
        return this.__$AUGUST;
    }

    private static __$SEPTEMBER : int;
    static get SEPTEMBER() : int { 
        if (this.__$SEPTEMBER===undefined) {
            this.__$SEPTEMBER = 9;
        }
        return this.__$SEPTEMBER;
    }

    private static __$OCTOBER : int;
    static get OCTOBER() : int { 
        if (this.__$OCTOBER===undefined) {
            this.__$OCTOBER = 10;
        }
        return this.__$OCTOBER;
    }

    private static __$NOVEMBER : int;
    static get NOVEMBER() : int { 
        if (this.__$NOVEMBER===undefined) {
            this.__$NOVEMBER = 11;
        }
        return this.__$NOVEMBER;
    }

    private static __$DECEMBER : int;
    static get DECEMBER() : int { 
        if (this.__$DECEMBER===undefined) {
            this.__$DECEMBER = 12;
        }
        return this.__$DECEMBER;
    }

    private static __$MONTHS_PER_YEAR : int;
    static get MONTHS_PER_YEAR() : int { 
        if (this.__$MONTHS_PER_YEAR===undefined) {
            this.__$MONTHS_PER_YEAR = 12;
        }
        return this.__$MONTHS_PER_YEAR;
    }

    _value : int;

    isUtc : bool;

    constructor(year : int,month? : int,day? : int,hour? : int,minute? : int,second? : int,millisecond? : int,microsecond? : int) {
    }
    @defaultConstructor
    DateTime(year : int,month? : int,day? : int,hour? : int,minute? : int,second? : int,millisecond? : int,microsecond? : int) {
        month = month || 1;
        day = day || 1;
        hour = hour || 0;
        minute = minute || 0;
        second = second || 0;
        millisecond = millisecond || 0;
        microsecond = microsecond || 0;
        this._internal(year,month,day,hour,minute,second,millisecond,microsecond,false);
    }
    @namedConstructor
    utc(year : int,month? : int,day? : int,hour? : int,minute? : int,second? : int,millisecond? : int,microsecond? : int) {
        month = month || 1;
        day = day || 1;
        hour = hour || 0;
        minute = minute || 0;
        second = second || 0;
        millisecond = millisecond || 0;
        microsecond = microsecond || 0;
        this._internal(year,month,day,hour,minute,second,millisecond,microsecond,true);
    }
    static utc : new(year : int,month : int,day : int,hour : int,minute : int,second : int,millisecond : int,microsecond : int) => DateTime;

    @namedConstructor
    now() {
        this._now();
    }
    static now : new() => DateTime;

    static parse(formattedString : String) : DateTime {
        let re : RegExp = new RegExp('^([+-]?\d{4,6})-?(\d\d)-?(\d\d)' + '(?:[ T](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{1,6}))?)?)?' + '( ?[zZ]| ?([-+])(\d\d)(?::?(\d\d))?)?)?$');
        let match : Match = re.firstMatch(formattedString);
        if (match != null) {
            var parseIntOrZero : (matched : String) => int = (matched : String) : int =>  {
                if (op(Op.EQUALS,matched,null)) return 0;
                return int.parse(matched);
            };
            var parseMilliAndMicroseconds : (matched : String) => int = (matched : String) : int =>  {
                if (op(Op.EQUALS,matched,null)) return 0;
                let length : int = matched.length;
                /* TODO (AssertStatementImpl) : assert (length >= 1); */;
                /* TODO (AssertStatementImpl) : assert (length <= 6); */;
                let result : int = 0;
                for(let i : int = 0; op(Op.LT,i,6); i++){
                    result *= 10;
                    if (op(Op.LT,i,matched.length)) {
                        result += op(Op.XOR,matched.codeUnitAt(i),48);
                    }
                }
                return result;
            };
            let years : int = int.parse(op(Op.INDEX,match,1));
            let month : int = int.parse(op(Op.INDEX,match,2));
            let day : int = int.parse(op(Op.INDEX,match,3));
            let hour : int = parseIntOrZero(op(Op.INDEX,match,4));
            let minute : int = parseIntOrZero(op(Op.INDEX,match,5));
            let second : int = parseIntOrZero(op(Op.INDEX,match,6));
            let addOneMillisecond : bool = false;
            let milliAndMicroseconds : int = parseMilliAndMicroseconds(op(Op.INDEX,match,7));
            let millisecond : int = op(Op.QUOTIENT,milliAndMicroseconds,Duration.MICROSECONDS_PER_MILLISECOND);
            let microsecond : int = milliAndMicroseconds.remainder(Duration.MICROSECONDS_PER_MILLISECOND);
            let isUtc : bool = false;
            if (op(Op.INDEX,match,8) != null) {
                isUtc = true;
                if (op(Op.INDEX,match,9) != null) {
                    let sign : int = (op(Op.EQUALS,op(Op.INDEX,match,9),'-')) ? -1 : 1;
                    let hourDifference : int = int.parse(op(Op.INDEX,match,10));
                    let minuteDifference : int = parseIntOrZero(op(Op.INDEX,match,11));
                    minuteDifference += 60 * hourDifference;
                    minute -= op(Op.TIMES,sign,minuteDifference);
                }
            }
            let value : int = DateTime._brokenDownDateToValue(years,month,day,hour,minute,second,millisecond,microsecond,isUtc);
            if (op(Op.EQUALS,value,null)) {
                throw new FormatException("Time out of range",formattedString);
            }
            return new DateTime._withValue(value,{
                isUtc : isUtc});
        }else {
            throw new FormatException("Invalid date format",formattedString);
        }
    }
    private static __$_MAX_MILLISECONDS_SINCE_EPOCH : int;
    static get _MAX_MILLISECONDS_SINCE_EPOCH() : int { 
        if (this.__$_MAX_MILLISECONDS_SINCE_EPOCH===undefined) {
            this.__$_MAX_MILLISECONDS_SINCE_EPOCH = 8640000000000000;
        }
        return this.__$_MAX_MILLISECONDS_SINCE_EPOCH;
    }

    @namedConstructor
    fromMillisecondsSinceEpoch(millisecondsSinceEpoch : int,_namedArguments? : {isUtc? : bool}) {
        let {isUtc} = Object.assign({
            "isUtc" : false}, _namedArguments );
    }
    static fromMillisecondsSinceEpoch : new(millisecondsSinceEpoch : int,_namedArguments? : {isUtc? : bool}) => DateTime;

    @namedConstructor
    fromMicrosecondsSinceEpoch(microsecondsSinceEpoch : int,_namedArguments? : {isUtc? : bool}) {
        let {isUtc} = Object.assign({
            "isUtc" : false}, _namedArguments );
    }
    static fromMicrosecondsSinceEpoch : new(microsecondsSinceEpoch : int,_namedArguments? : {isUtc? : bool}) => DateTime;

    @namedConstructor
    _withValue(_value : int,_namedArguments? : {isUtc? : bool}) {
        let {isUtc} = Object.assign({
        }, _namedArguments );
        this._value = _value;
        this.isUtc = isUtc;
        if (op(Op.GT,this.millisecondsSinceEpoch.abs(),DateTime._MAX_MILLISECONDS_SINCE_EPOCH) || (op(Op.EQUALS,this.millisecondsSinceEpoch.abs(),DateTime._MAX_MILLISECONDS_SINCE_EPOCH) && this.microsecond != 0)) {
            throw new ArgumentError(this.millisecondsSinceEpoch);
        }
        if (op(Op.EQUALS,this.isUtc,null)) throw new ArgumentError(this.isUtc);
    }
    static _withValue : new(_value : int,_namedArguments? : {isUtc? : bool}) => DateTime;

    [OperatorMethods.EQUALS](other : any) : bool {
        if (!(is(other, DateTime))) return false;
        return (op(Op.EQUALS,this._value,other._value) && op(Op.EQUALS,this.isUtc,other.isUtc));
    }
    isBefore(other : DateTime) : bool {
        return op(Op.LT,this._value,other._value);
    }
    isAfter(other : DateTime) : bool {
        return op(Op.GT,this._value,other._value);
    }
    isAtSameMomentAs(other : DateTime) : bool {
        return op(Op.EQUALS,this._value,other._value);
    }
    compareTo(other : DateTime) : int {
        return this._value.compareTo(other._value);
    }
    get hashCode() : int {
        return op(Op.BITAND,(op(Op.XOR,this._value,(op(Op.SHIFTRIGHT,this._value,30)))),1073741823);
    }
    toLocal() : DateTime {
        if (this.isUtc) {
            return new DateTime._withValue(this._value,{
                isUtc : false});
        }
        return this;
    }
    toUtc() : DateTime {
        if (this.isUtc) return this;
        return new DateTime._withValue(this._value,{
            isUtc : true});
    }
    static _fourDigits(n : int) : String {
        let absN : int = n.abs();
        let sign : String = op(Op.LT,n,0) ? "-" : "";
        if (op(Op.GEQ,absN,1000)) return `${n}`;
        if (op(Op.GEQ,absN,100)) return `${sign}0${absN}`;
        if (op(Op.GEQ,absN,10)) return `${sign}00${absN}`;
        return `${sign}000${absN}`;
    }
    static _sixDigits(n : int) : String {
        /* TODO (AssertStatementImpl) : assert (n < -9999 || n > 9999); */;
        let absN : int = n.abs();
        let sign : String = op(Op.LT,n,0) ? "-" : "+";
        if (op(Op.GEQ,absN,100000)) return `${sign}${absN}`;
        return `${sign}0${absN}`;
    }
    static _threeDigits(n : int) : String {
        if (op(Op.GEQ,n,100)) return `${n}`;
        if (op(Op.GEQ,n,10)) return `0${n}`;
        return `00${n}`;
    }
    static _twoDigits(n : int) : String {
        if (op(Op.GEQ,n,10)) return `${n}`;
        return `0${n}`;
    }
    toString() : String {
        let y : String = DateTime._fourDigits(this.year);
        let m : String = DateTime._twoDigits(this.month);
        let d : String = DateTime._twoDigits(this.day);
        let h : String = DateTime._twoDigits(this.hour);
        let min : String = DateTime._twoDigits(this.minute);
        let sec : String = DateTime._twoDigits(this.second);
        let ms : String = DateTime._threeDigits(this.millisecond);
        let us : String = op(Op.EQUALS,this.microsecond,0) ? "" : DateTime._threeDigits(this.microsecond);
        if (this.isUtc) {
            return `${y}-${m}-${d} ${h}:${min}:${sec}.${ms}${us}Z`;
        }else {
            return `${y}-${m}-${d} ${h}:${min}:${sec}.${ms}${us}`;
        }
    }
    toIso8601String() : String {
        let y : String = (op(Op.GEQ,this.year,-9999) && op(Op.LEQ,this.year,9999)) ? DateTime._fourDigits(this.year) : DateTime._sixDigits(this.year);
        let m : String = DateTime._twoDigits(this.month);
        let d : String = DateTime._twoDigits(this.day);
        let h : String = DateTime._twoDigits(this.hour);
        let min : String = DateTime._twoDigits(this.minute);
        let sec : String = DateTime._twoDigits(this.second);
        let ms : String = DateTime._threeDigits(this.millisecond);
        let us : String = op(Op.EQUALS,this.microsecond,0) ? "" : DateTime._threeDigits(this.microsecond);
        if (this.isUtc) {
            return `${y}-${m}-${d}T${h}:${min}:${sec}.${ms}${us}Z`;
        }else {
            return `${y}-${m}-${d}T${h}:${min}:${sec}.${ms}${us}`;
        }
    }
    add(duration : Duration) : DateTime {
    }
    subtract(duration : Duration) : DateTime {
    }
    difference(other : DateTime) : Duration {
    }
    @namedConstructor
    _internal(year : int,month : int,day : int,hour : int,minute : int,second : int,millisecond : int,microsecond : int,isUtc : bool) {
    }
    static _internal : new(year : int,month : int,day : int,hour : int,minute : int,second : int,millisecond : int,microsecond : int,isUtc : bool) => DateTime;

    @namedConstructor
    _now() {
    }
    static _now : new() => DateTime;

    static _brokenDownDateToValue(year : int,month : int,day : int,hour : int,minute : int,second : int,millisecond : int,microsecond : int,isUtc : bool) : int {
    }
    get millisecondsSinceEpoch() : int {
    }
    get microsecondsSinceEpoch() : int {
    }
    get timeZoneName() : String {
    }
    get timeZoneOffset() : Duration {
    }
    get year() : int {
    }
    get month() : int {
    }
    get day() : int {
    }
    get hour() : int {
    }
    get minute() : int {
    }
    get second() : int {
    }
    get millisecond() : int {
    }
    get microsecond() : int {
    }
    get weekday() : int {
    }
}

export namespace RuneIterator {
    export type Constructors = 'RuneIterator' | 'at';
    export type Interface = Omit<RuneIterator, Constructors>;
}
@DartClass
@Implements(BidirectionalIterator)
export class RuneIterator implements BidirectionalIterator.Interface<int> {
    string : String;

    _position : int;

    _nextPosition : int;

    _currentCodePoint : int;

    constructor(string : String) {
    }
    @defaultConstructor
    RuneIterator(string : String) {
        this.string = string;
        this._position = 0;
        this._nextPosition = 0;
    }
    @namedConstructor
    at(string : String,index : int) {
        this.string = string;
        this._position = index;
        this._nextPosition = index;
        RangeError.checkValueInInterval(index,0,string.length);
        this._checkSplitSurrogate(index);
    }
    static at : new(string : String,index : int) => RuneIterator;

    _checkSplitSurrogate(index : int) : void {
        if (op(Op.GT,index,0) && op(Op.LT,index,this.string.length) && _isLeadSurrogate(this.string.codeUnitAt(op(Op.MINUS,index,1))) && _isTrailSurrogate(this.string.codeUnitAt(index))) {
            throw new ArgumentError(`Index inside surrogate pair: ${index}`);
        }
    }
    get rawIndex() : int {
        return (this._position != this._nextPosition) ? this._position : null;
    }
    set rawIndex(rawIndex : int) {
        RangeError.checkValidIndex(rawIndex,this.string,"rawIndex");
        this.reset(rawIndex);
        this.moveNext();
    }
    reset(rawIndex? : int) : void {
        rawIndex = rawIndex || 0;
        RangeError.checkValueInInterval(rawIndex,0,this.string.length,"rawIndex");
        this._checkSplitSurrogate(rawIndex);
        this._position = this._nextPosition = rawIndex;
        this._currentCodePoint = null;
    }
    get current() : int {
        return this._currentCodePoint;
    }
    get currentSize() : int {
        return op(Op.MINUS,this._nextPosition,this._position);
    }
    get currentAsString() : String {
        if (op(Op.EQUALS,this._position,this._nextPosition)) return null;
        if (op(Op.EQUALS,op(Op.PLUS,this._position,1),this._nextPosition)) return op(Op.INDEX,this.string,this._position);
        return this.string.substring(this._position,this._nextPosition);
    }
    moveNext() : bool {
        this._position = this._nextPosition;
        if (op(Op.EQUALS,this._position,this.string.length)) {
            this._currentCodePoint = null;
            return false;
        }
        let codeUnit : int = this.string.codeUnitAt(this._position);
        let nextPosition : int = op(Op.PLUS,this._position,1);
        if (_isLeadSurrogate(codeUnit) && op(Op.LT,nextPosition,this.string.length)) {
            let nextCodeUnit : int = this.string.codeUnitAt(nextPosition);
            if (_isTrailSurrogate(nextCodeUnit)) {
                this._nextPosition = op(Op.PLUS,nextPosition,1);
                this._currentCodePoint = _combineSurrogatePair(codeUnit,nextCodeUnit);
                return true;
            }
        }
        this._nextPosition = nextPosition;
        this._currentCodePoint = codeUnit;
        return true;
    }
    movePrevious() : bool {
        this._nextPosition = this._position;
        if (op(Op.EQUALS,this._position,0)) {
            this._currentCodePoint = null;
            return false;
        }
        let position : int = op(Op.MINUS,this._position,1);
        let codeUnit : int = this.string.codeUnitAt(position);
        if (_isTrailSurrogate(codeUnit) && op(Op.GT,position,0)) {
            let prevCodeUnit : int = this.string.codeUnitAt(op(Op.MINUS,position,1));
            if (_isLeadSurrogate(prevCodeUnit)) {
                this._position = op(Op.MINUS,position,1);
                this._currentCodePoint = _combineSurrogatePair(prevCodeUnit,codeUnit);
                return true;
            }
        }
        this._position = position;
        this._currentCodePoint = codeUnit;
        return true;
    }
}

export namespace StringBuffer {
    export type Constructors = 'StringBuffer';
    export type Interface = Omit<StringBuffer, Constructors>;
}
@DartClass
@Implements(StringSink)
export class StringBuffer implements StringSink.Interface {
    constructor(content? : Object) {
    }
    @defaultConstructor
    StringBuffer(content? : Object) {
        content = content || "";
    }
    get length() : int {
    }
    get isEmpty() : bool {
        return op(Op.EQUALS,this.length,0);
    }
    get isNotEmpty() : bool {
        return !this.isEmpty;
    }
    write(obj : Object) : void {
    }
    writeCharCode(charCode : int) : void {
    }
    writeAll(objects : Iterable<any>,separator? : String) : void {
        separator = separator || "";
    }
    writeln(obj? : Object) : void {
        obj = obj || "";
    }
    clear() : void {
    }
    toString() : String {
    }
}

export namespace StringSink {
    export type Constructors = 'StringSink';
    export type Interface = Omit<StringSink, Constructors>;
}
@DartClass
export class StringSink {
    @Abstract
    write(obj : Object) : void{ throw 'abstract'}
    @Abstract
    writeAll(objects : Iterable<any>,separator? : String) : void{ throw 'abstract'}
    @Abstract
    writeln(obj? : Object) : void{ throw 'abstract'}
    @Abstract
    writeCharCode(charCode : int) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    StringSink() {
    }
}

export namespace Symbol {
    export type Constructors = never;
    export type Interface = Omit<Symbol, Constructors>;
}
@DartClass
export class Symbol {
    constructor(name : String) {
    }
    @defaultFactory
    static $Symbol(name : String) : Symbol {
        return new _internal.Symbol(name);
    }
    @AbstractProperty
    get hashCode() : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : bool{ throw 'abstract'}
}

export namespace Type {
    export type Constructors = 'Type';
    export type Interface = Omit<Type, Constructors>;
}
@DartClass
export class Type {
    constructor() {
    }
    @defaultConstructor
    Type() {
    }
}

export namespace _Proxy {
    export type Constructors = '_Proxy';
    export type Interface = Omit<_Proxy, Constructors>;
}
@DartClass
export class _Proxy {
    constructor() {
    }
    @defaultConstructor
    _Proxy() {
    }
}

export namespace OutOfMemoryError {
    export type Constructors = 'OutOfMemoryError';
    export type Interface = Omit<OutOfMemoryError, Constructors>;
}
@DartClass
@Implements(Error)
export class OutOfMemoryError implements Error.Interface {
    constructor() {
    }
    @defaultConstructor
    OutOfMemoryError() {
    }
    toString() : String {
        return "Out of Memory";
    }
    get stackTrace() : StackTrace {
        return null;
    }
}

export namespace StackOverflowError {
    export type Constructors = 'StackOverflowError';
    export type Interface = Omit<StackOverflowError, Constructors>;
}
@DartClass
@Implements(Error)
export class StackOverflowError implements Error.Interface {
    constructor() {
    }
    @defaultConstructor
    StackOverflowError() {
    }
    toString() : String {
        return "Stack Overflow";
    }
    get stackTrace() : StackTrace {
        return null;
    }
}

export namespace Duration {
    export type Constructors = 'Duration' | '_microseconds';
    export type Interface = Omit<Duration, Constructors>;
}
@DartClass
@Implements(Comparable)
export class Duration implements Comparable.Interface<Duration> {
    private static __$MICROSECONDS_PER_MILLISECOND : int;
    static get MICROSECONDS_PER_MILLISECOND() : int { 
        if (this.__$MICROSECONDS_PER_MILLISECOND===undefined) {
            this.__$MICROSECONDS_PER_MILLISECOND = 1000;
        }
        return this.__$MICROSECONDS_PER_MILLISECOND;
    }

    private static __$MILLISECONDS_PER_SECOND : int;
    static get MILLISECONDS_PER_SECOND() : int { 
        if (this.__$MILLISECONDS_PER_SECOND===undefined) {
            this.__$MILLISECONDS_PER_SECOND = 1000;
        }
        return this.__$MILLISECONDS_PER_SECOND;
    }

    private static __$SECONDS_PER_MINUTE : int;
    static get SECONDS_PER_MINUTE() : int { 
        if (this.__$SECONDS_PER_MINUTE===undefined) {
            this.__$SECONDS_PER_MINUTE = 60;
        }
        return this.__$SECONDS_PER_MINUTE;
    }

    private static __$MINUTES_PER_HOUR : int;
    static get MINUTES_PER_HOUR() : int { 
        if (this.__$MINUTES_PER_HOUR===undefined) {
            this.__$MINUTES_PER_HOUR = 60;
        }
        return this.__$MINUTES_PER_HOUR;
    }

    private static __$HOURS_PER_DAY : int;
    static get HOURS_PER_DAY() : int { 
        if (this.__$HOURS_PER_DAY===undefined) {
            this.__$HOURS_PER_DAY = 24;
        }
        return this.__$HOURS_PER_DAY;
    }

    private static __$MICROSECONDS_PER_SECOND : int;
    static get MICROSECONDS_PER_SECOND() : int { 
        if (this.__$MICROSECONDS_PER_SECOND===undefined) {
            this.__$MICROSECONDS_PER_SECOND = op(Op.TIMES,Duration.MICROSECONDS_PER_MILLISECOND,Duration.MILLISECONDS_PER_SECOND);
        }
        return this.__$MICROSECONDS_PER_SECOND;
    }

    private static __$MICROSECONDS_PER_MINUTE : int;
    static get MICROSECONDS_PER_MINUTE() : int { 
        if (this.__$MICROSECONDS_PER_MINUTE===undefined) {
            this.__$MICROSECONDS_PER_MINUTE = op(Op.TIMES,Duration.MICROSECONDS_PER_SECOND,Duration.SECONDS_PER_MINUTE);
        }
        return this.__$MICROSECONDS_PER_MINUTE;
    }

    private static __$MICROSECONDS_PER_HOUR : int;
    static get MICROSECONDS_PER_HOUR() : int { 
        if (this.__$MICROSECONDS_PER_HOUR===undefined) {
            this.__$MICROSECONDS_PER_HOUR = op(Op.TIMES,Duration.MICROSECONDS_PER_MINUTE,Duration.MINUTES_PER_HOUR);
        }
        return this.__$MICROSECONDS_PER_HOUR;
    }

    private static __$MICROSECONDS_PER_DAY : int;
    static get MICROSECONDS_PER_DAY() : int { 
        if (this.__$MICROSECONDS_PER_DAY===undefined) {
            this.__$MICROSECONDS_PER_DAY = op(Op.TIMES,Duration.MICROSECONDS_PER_HOUR,Duration.HOURS_PER_DAY);
        }
        return this.__$MICROSECONDS_PER_DAY;
    }

    private static __$MILLISECONDS_PER_MINUTE : int;
    static get MILLISECONDS_PER_MINUTE() : int { 
        if (this.__$MILLISECONDS_PER_MINUTE===undefined) {
            this.__$MILLISECONDS_PER_MINUTE = op(Op.TIMES,Duration.MILLISECONDS_PER_SECOND,Duration.SECONDS_PER_MINUTE);
        }
        return this.__$MILLISECONDS_PER_MINUTE;
    }

    private static __$MILLISECONDS_PER_HOUR : int;
    static get MILLISECONDS_PER_HOUR() : int { 
        if (this.__$MILLISECONDS_PER_HOUR===undefined) {
            this.__$MILLISECONDS_PER_HOUR = op(Op.TIMES,Duration.MILLISECONDS_PER_MINUTE,Duration.MINUTES_PER_HOUR);
        }
        return this.__$MILLISECONDS_PER_HOUR;
    }

    private static __$MILLISECONDS_PER_DAY : int;
    static get MILLISECONDS_PER_DAY() : int { 
        if (this.__$MILLISECONDS_PER_DAY===undefined) {
            this.__$MILLISECONDS_PER_DAY = op(Op.TIMES,Duration.MILLISECONDS_PER_HOUR,Duration.HOURS_PER_DAY);
        }
        return this.__$MILLISECONDS_PER_DAY;
    }

    private static __$SECONDS_PER_HOUR : int;
    static get SECONDS_PER_HOUR() : int { 
        if (this.__$SECONDS_PER_HOUR===undefined) {
            this.__$SECONDS_PER_HOUR = op(Op.TIMES,Duration.SECONDS_PER_MINUTE,Duration.MINUTES_PER_HOUR);
        }
        return this.__$SECONDS_PER_HOUR;
    }

    private static __$SECONDS_PER_DAY : int;
    static get SECONDS_PER_DAY() : int { 
        if (this.__$SECONDS_PER_DAY===undefined) {
            this.__$SECONDS_PER_DAY = op(Op.TIMES,Duration.SECONDS_PER_HOUR,Duration.HOURS_PER_DAY);
        }
        return this.__$SECONDS_PER_DAY;
    }

    private static __$MINUTES_PER_DAY : int;
    static get MINUTES_PER_DAY() : int { 
        if (this.__$MINUTES_PER_DAY===undefined) {
            this.__$MINUTES_PER_DAY = op(Op.TIMES,Duration.MINUTES_PER_HOUR,Duration.HOURS_PER_DAY);
        }
        return this.__$MINUTES_PER_DAY;
    }

    private static __$ZERO : Duration;
    static get ZERO() : Duration { 
        if (this.__$ZERO===undefined) {
            this.__$ZERO = new Duration({
                seconds : 0});
        }
        return this.__$ZERO;
    }

    _duration : int;

    constructor(_namedArguments? : {days? : int,hours? : int,minutes? : int,seconds? : int,milliseconds? : int,microseconds? : int}) {
    }
    @defaultConstructor
    Duration(_namedArguments? : {days? : int,hours? : int,minutes? : int,seconds? : int,milliseconds? : int,microseconds? : int}) {
        let {days,hours,minutes,seconds,milliseconds,microseconds} = Object.assign({
            "days" : 0,
            "hours" : 0,
            "minutes" : 0,
            "seconds" : 0,
            "milliseconds" : 0,
            "microseconds" : 0}, _namedArguments );
        this._microseconds(op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,op(Op.TIMES,Duration.MICROSECONDS_PER_DAY,days),op(Op.TIMES,Duration.MICROSECONDS_PER_HOUR,hours)),op(Op.TIMES,Duration.MICROSECONDS_PER_MINUTE,minutes)),op(Op.TIMES,Duration.MICROSECONDS_PER_SECOND,seconds)),op(Op.TIMES,Duration.MICROSECONDS_PER_MILLISECOND,milliseconds)),microseconds));
    }
    @namedConstructor
    _microseconds(_duration : int) {
        this._duration = _duration;
    }
    static _microseconds : new(_duration : int) => Duration;

    [OperatorMethods.PLUS](other : Duration) : Duration {
        return new Duration._microseconds(op(Op.PLUS,this._duration,other._duration));
    }
    [OperatorMethods.MINUS](other : Duration) : Duration {
        return new Duration._microseconds(op(Op.MINUS,this._duration,other._duration));
    }
    [OperatorMethods.MULTIPLY](factor : num) : Duration {
        return new Duration._microseconds((op(Op.TIMES,this._duration,factor)).round());
    }
    [OperatorMethods.QUOTIENT](quotient : int) : Duration {
        if (op(Op.EQUALS,quotient,0)) throw new IntegerDivisionByZeroException();
        return new Duration._microseconds(op(Op.QUOTIENT,this._duration,quotient));
    }
    [OperatorMethods.LT](other : Duration) : bool {
        return op(Op.LT,this._duration,other._duration);
    }
    [OperatorMethods.GT](other : Duration) : bool {
        return op(Op.GT,this._duration,other._duration);
    }
    [OperatorMethods.LEQ](other : Duration) : bool {
        return op(Op.LEQ,this._duration,other._duration);
    }
    [OperatorMethods.GEQ](other : Duration) : bool {
        return op(Op.GEQ,this._duration,other._duration);
    }
    get inDays() : int {
        return op(Op.QUOTIENT,this._duration,Duration.MICROSECONDS_PER_DAY);
    }
    get inHours() : int {
        return op(Op.QUOTIENT,this._duration,Duration.MICROSECONDS_PER_HOUR);
    }
    get inMinutes() : int {
        return op(Op.QUOTIENT,this._duration,Duration.MICROSECONDS_PER_MINUTE);
    }
    get inSeconds() : int {
        return op(Op.QUOTIENT,this._duration,Duration.MICROSECONDS_PER_SECOND);
    }
    get inMilliseconds() : int {
        return op(Op.QUOTIENT,this._duration,Duration.MICROSECONDS_PER_MILLISECOND);
    }
    get inMicroseconds() : int {
        return this._duration;
    }
    [OperatorMethods.EQUALS](other : any) : bool {
        if (isNot(other, Duration)) return false;
        return op(Op.EQUALS,this._duration,other._duration);
    }
    get hashCode() : int {
        return this._duration.hashCode;
    }
    compareTo(other : Duration) : int {
        return this._duration.compareTo(other._duration);
    }
    toString() : String {
        var sixDigits : (n : int) => String = (n : int) : String =>  {
            if (op(Op.GEQ,n,100000)) return `${n}`;
            if (op(Op.GEQ,n,10000)) return `0${n}`;
            if (op(Op.GEQ,n,1000)) return `00${n}`;
            if (op(Op.GEQ,n,100)) return `000${n}`;
            if (op(Op.GEQ,n,10)) return `0000${n}`;
            return `00000${n}`;
        };
        var twoDigits : (n : int) => String = (n : int) : String =>  {
            if (op(Op.GEQ,n,10)) return `${n}`;
            return `0${n}`;
        };
        if (op(Op.LT,this.inMicroseconds,0)) {
            return `-${op(Op.NEG,this)}`;
        }
        let twoDigitMinutes : String = twoDigits(this.inMinutes.remainder(Duration.MINUTES_PER_HOUR));
        let twoDigitSeconds : String = twoDigits(this.inSeconds.remainder(Duration.SECONDS_PER_MINUTE));
        let sixDigitUs : String = sixDigits(this.inMicroseconds.remainder(Duration.MICROSECONDS_PER_SECOND));
        return `${this.inHours}:${twoDigitMinutes}:${twoDigitSeconds}.${sixDigitUs}`;
    }
    get isNegative() : bool {
        return op(Op.LT,this._duration,0);
    }
    abs() : Duration {
        return new Duration._microseconds(this._duration.abs());
    }
    [OperatorMethods.NEGATE]() : Duration {
        return new Duration._microseconds(0 - this._duration);
    }
}

export namespace Exception {
    export type Constructors = never;
    export type Interface = Omit<Exception, Constructors>;
}
@DartClass
export class Exception {
    constructor(message? : any) {
    }
    @defaultFactory
    static $Exception(message? : any) : Exception {
        return new _Exception(message);
    }
}

export namespace _Exception {
    export type Constructors = '_Exception';
    export type Interface = Omit<_Exception, Constructors>;
}
@DartClass
@Implements(Exception)
export class _Exception implements Exception.Interface {
    message;

    constructor(message? : any) {
    }
    @defaultConstructor
    _Exception(message? : any) {
        this.message = message;
    }
    toString() : String {
        if (op(Op.EQUALS,this.message,null)) return "Exception";
        return `Exception: ${this.message}`;
    }
}

export namespace FormatException {
    export type Constructors = 'FormatException';
    export type Interface = Omit<FormatException, Constructors>;
}
@DartClass
@Implements(Exception)
export class FormatException implements Exception.Interface {
    message : String;

    source;

    offset : int;

    constructor(message? : String,source? : any,offset? : int) {
    }
    @defaultConstructor
    FormatException(message? : String,source? : any,offset? : int) {
        message = message || "";
        this.message = message;
        this.source = source;
        this.offset = offset;
    }
    toString() : String {
        let report : String = "FormatException";
        if (this.message != null && "" != this.message) {
            report = `${report}: ${this.message}`;
        }
        let offset : int = this.offset;
        if (isNot(this.source, String)) {
            if (offset != null) {
                report += ` (at offset ${offset})`;
            }
            return report;
        }
        if (offset != null && (op(Op.LT,offset,0) || op(Op.GT,offset,this.source.length))) {
            offset = null;
        }
        if (op(Op.EQUALS,offset,null)) {
            let source : String = this.source;
            if (op(Op.GT,source.length,78)) {
                source = op(Op.PLUS,source.substring(0,75),"...");
            }
            return `${report}\n${source}`;
        }
        let lineNum : int = 1;
        let lineStart : int = 0;
        let previousCharWasCR : bool = false;
        for(let i : int = 0; op(Op.LT,i,offset); i++){
            let char : int = this.source.codeUnitAt(i);
            if (op(Op.EQUALS,char,10)) {
                if (lineStart != i || !previousCharWasCR) {
                    lineNum++;
                }
                lineStart = op(Op.PLUS,i,1);
                previousCharWasCR = false;
            }else if (op(Op.EQUALS,char,13)) {
                lineNum++;
                lineStart = op(Op.PLUS,i,1);
                previousCharWasCR = true;
            }
        }
        if (op(Op.GT,lineNum,1)) {
            report += ` (at line ${lineNum}, character ${op(Op.PLUS,op(Op.MINUS,offset,lineStart),1)})\n`;
        }else {
            report += ` (at character ${op(Op.PLUS,offset,1)})\n`;
        }
        let lineEnd : int = this.source.length;
        for(let i : int = offset; op(Op.LT,i,this.source.length); i++){
            let char : int = this.source.codeUnitAt(i);
            if (op(Op.EQUALS,char,10) || op(Op.EQUALS,char,13)) {
                lineEnd = i;
                break;
            }
        }
        let length : int = op(Op.MINUS,lineEnd,lineStart);
        let start : int = lineStart;
        let end : int = lineEnd;
        let prefix : String = "";
        let postfix : String = "";
        if (op(Op.GT,length,78)) {
            let index : int = op(Op.MINUS,offset,lineStart);
            if (op(Op.LT,index,75)) {
                end = op(Op.PLUS,start,75);
                postfix = "...";
            }else if (op(Op.LT,op(Op.MINUS,end,offset),75)) {
                start = op(Op.MINUS,end,75);
                prefix = "...";
            }else {
                start = op(Op.MINUS,offset,36);
                end = op(Op.PLUS,offset,36);
                prefix = postfix = "...";
            }
        }
        let slice : String = this.source.substring(start,end);
        let markOffset : int = op(Op.PLUS,op(Op.MINUS,offset,start),prefix.length);
        return `${report}${prefix}${slice}${postfix}\n${op(Op.TIMES," ",markOffset)}^\n`;
    }
}

export namespace IntegerDivisionByZeroException {
    export type Constructors = 'IntegerDivisionByZeroException';
    export type Interface = Omit<IntegerDivisionByZeroException, Constructors>;
}
@DartClass
@Implements(Exception)
export class IntegerDivisionByZeroException implements Exception.Interface {
    constructor() {
    }
    @defaultConstructor
    IntegerDivisionByZeroException() {
    }
    toString() : String {
        return "IntegerDivisionByZeroException";
    }
}

export namespace Expando {
    export type Constructors = 'Expando';
    export type Interface<T> = Omit<Expando<T>, Constructors>;
}
@DartClass
export class Expando<T> {
    name : String;

    constructor(name? : String) {
    }
    @defaultConstructor
    Expando(name? : String) {
    }
    toString() : String {
        return `Expando:${this.name}`;
    }
    [OperatorMethods.INDEX](object : Object) : T {
    }
    [OperatorMethods.INDEX_EQ](object : Object,value : T) : void {
    }
}

export namespace Deprecated {
    export type Constructors = 'Deprecated';
    export type Interface = Omit<Deprecated, Constructors>;
}
@DartClass
export class Deprecated {
    expires : String;

    constructor(expires : String) {
    }
    @defaultConstructor
    Deprecated(expires : String) {
        this.expires = expires;
    }
    toString() : String {
        return `Deprecated feature. Will be removed ${this.expires}`;
    }
}

export namespace Error {
    export type Constructors = 'Error';
    export type Interface = Omit<Error, Constructors>;
}
@DartClass
export class Error {
    constructor() {
    }
    @defaultConstructor
    Error() {
    }
    static safeToString(object : Object) : String {
        if (is(object, num) || is(object, bool) || op(Op.EQUALS,null,object)) {
            return object.toString();
        }
        if (is(object, String)) {
            return Error._stringToSafeString(object);
        }
        return Error._objectToString(object);
    }
    static _stringToSafeString(string : String) : String {
    }
    static _objectToString(object : Object) : String {
    }
    get stackTrace() : StackTrace {
    }
}

export namespace _SimpleUri {
    export type Constructors = '_SimpleUri';
    export type Interface = Omit<_SimpleUri, Constructors>;
}
@DartClass
@Implements(Uri)
export class _SimpleUri implements Uri.Interface {
    _uri : String;

    _schemeEnd : int;

    _hostStart : int;

    _portStart : int;

    _pathStart : int;

    _queryStart : int;

    _fragmentStart : int;

    _schemeCache : String;

    _hashCodeCache : int;

    constructor(_uri : String,_schemeEnd : int,_hostStart : int,_portStart : int,_pathStart : int,_queryStart : int,_fragmentStart : int,_schemeCache : String) {
    }
    @defaultConstructor
    _SimpleUri(_uri : String,_schemeEnd : int,_hostStart : int,_portStart : int,_pathStart : int,_queryStart : int,_fragmentStart : int,_schemeCache : String) {
        this._uri = _uri;
        this._schemeEnd = _schemeEnd;
        this._hostStart = _hostStart;
        this._portStart = _portStart;
        this._pathStart = _pathStart;
        this._queryStart = _queryStart;
        this._fragmentStart = _fragmentStart;
        this._schemeCache = _schemeCache;
    }
    get hasScheme() : bool {
        return op(Op.GT,this._schemeEnd,0);
    }
    get hasAuthority() : bool {
        return op(Op.GT,this._hostStart,0);
    }
    get hasUserInfo() : bool {
        return op(Op.GT,this._hostStart,op(Op.PLUS,this._schemeEnd,4));
    }
    get hasPort() : bool {
        return op(Op.GT,this._hostStart,0) && op(Op.LT,op(Op.PLUS,this._portStart,1),this._pathStart);
    }
    get hasQuery() : bool {
        return op(Op.LT,this._queryStart,this._fragmentStart);
    }
    get hasFragment() : bool {
        return op(Op.LT,this._fragmentStart,this._uri.length);
    }
    get _isFile() : bool {
        return op(Op.EQUALS,this._schemeEnd,4) && this._uri.startsWith("file");
    }
    get _isHttp() : bool {
        return op(Op.EQUALS,this._schemeEnd,4) && this._uri.startsWith("http");
    }
    get _isHttps() : bool {
        return op(Op.EQUALS,this._schemeEnd,5) && this._uri.startsWith("https");
    }
    get _isPackage() : bool {
        return op(Op.EQUALS,this._schemeEnd,7) && this._uri.startsWith("package");
    }
    _isScheme(scheme : String) : bool {
        return op(Op.EQUALS,this._schemeEnd,scheme.length) && this._uri.startsWith(scheme);
    }
    get hasAbsolutePath() : bool {
        return this._uri.startsWith("/",this._pathStart);
    }
    get hasEmptyPath() : bool {
        return op(Op.EQUALS,this._pathStart,this._queryStart);
    }
    get isAbsolute() : bool {
        return this.hasScheme && !this.hasFragment;
    }
    isScheme(scheme : String) : bool {
        if (op(Op.EQUALS,scheme,null) || scheme.isEmpty) return op(Op.LT,this._schemeEnd,0);
        if (scheme.length != this._schemeEnd) return false;
        return _Uri._compareScheme(scheme,this._uri);
    }
    get scheme() : String {
        if (op(Op.LEQ,this._schemeEnd,0)) return "";
        if (this._schemeCache != null) return this._schemeCache;
        if (this._isHttp) {
            this._schemeCache = "http";
        }else if (this._isHttps) {
            this._schemeCache = "https";
        }else if (this._isFile) {
            this._schemeCache = "file";
        }else if (this._isPackage) {
            this._schemeCache = "package";
        }else {
            this._schemeCache = this._uri.substring(0,this._schemeEnd);
        }
        return this._schemeCache;
    }
    get authority() : String {
        return op(Op.GT,this._hostStart,0) ? this._uri.substring(op(Op.PLUS,this._schemeEnd,3),this._pathStart) : "";
    }
    get userInfo() : String {
        return (op(Op.GT,this._hostStart,op(Op.PLUS,this._schemeEnd,3))) ? this._uri.substring(op(Op.PLUS,this._schemeEnd,3),op(Op.MINUS,this._hostStart,1)) : "";
    }
    get host() : String {
        return op(Op.GT,this._hostStart,0) ? this._uri.substring(this._hostStart,this._portStart) : "";
    }
    get port() : int {
        if (this.hasPort) return int.parse(this._uri.substring(op(Op.PLUS,this._portStart,1),this._pathStart));
        if (this._isHttp) return 80;
        if (this._isHttps) return 443;
        return 0;
    }
    get path() : String {
        return this._uri.substring(this._pathStart,this._queryStart);
    }
    get query() : String {
        return (op(Op.LT,this._queryStart,this._fragmentStart)) ? this._uri.substring(op(Op.PLUS,this._queryStart,1),this._fragmentStart) : "";
    }
    get fragment() : String {
        return (op(Op.LT,this._fragmentStart,this._uri.length)) ? this._uri.substring(op(Op.PLUS,this._fragmentStart,1)) : "";
    }
    get origin() : String {
        let isHttp : bool = this._isHttp;
        if (op(Op.LT,this._schemeEnd,0)) {
            throw new StateError(`Cannot use origin without a scheme: ${this}`);
        }
        if (!isHttp && !this._isHttps) {
            throw new StateError(`Origin is only applicable to schemes http and https: ${this}`);
        }
        if (op(Op.EQUALS,this._hostStart,this._portStart)) {
            throw new StateError(`A ${this.scheme}: URI should have a non-empty host name: ${this}`);
        }
        if (op(Op.EQUALS,this._hostStart,op(Op.PLUS,this._schemeEnd,3))) {
            return this._uri.substring(0,this._pathStart);
        }
        return op(Op.PLUS,this._uri.substring(0,op(Op.PLUS,this._schemeEnd,3)),this._uri.substring(this._hostStart,this._pathStart));
    }
    get pathSegments() : List<String> {
        let start : int = this._pathStart;
        let end : int = this._queryStart;
        if (this._uri.startsWith("/",start)) start++;
        if (op(Op.EQUALS,start,end)) return new core.DartList.literal<String>();
        let parts : List<String> = new core.DartList.literal();
        for(let i : int = start; op(Op.LT,i,end); i++){
            let char = this._uri.codeUnitAt(i);
            if (op(Op.EQUALS,char,properties._SLASH)) {
                parts.add(this._uri.substring(start,i));
                start = op(Op.PLUS,i,1);
            }
        }
        parts.add(this._uri.substring(start,end));
        return new List.unmodifiable(parts);
    }
    get queryParameters() : Map<String,String> {
        if (!this.hasQuery) return new core.DartMap.literal([
        ]);
        return new core.DartUnmodifiableMapView<String,String>(Uri.splitQueryString(this.query));
    }
    get queryParametersAll() : Map<String,List<String>> {
        if (!this.hasQuery) return new core.DartMap.literal([
        ]);
        let queryParameterLists : Map<any,any> = _Uri._splitQueryStringAll(this.query);
        for(let key of queryParameterLists.keys) {
            queryParameterLists[key] = new List.unmodifiable(queryParameterLists[key]);
        }
        return new Map.unmodifiable(queryParameterLists);
    }
    _isPort(port : String) : bool {
        let portDigitStart : int = op(Op.PLUS,this._portStart,1);
        return op(Op.EQUALS,op(Op.PLUS,portDigitStart,port.length),this._pathStart) && this._uri.startsWith(port,portDigitStart);
    }
    normalizePath() : Uri {
        return this;
    }
    removeFragment() : Uri {
        if (!this.hasFragment) return this;
        return new _SimpleUri(this._uri.substring(0,this._fragmentStart),this._schemeEnd,this._hostStart,this._portStart,this._pathStart,this._queryStart,this._fragmentStart,this._schemeCache);
    }
    replace(_namedArguments? : {scheme? : String,userInfo? : String,host? : String,port? : int,path? : String,pathSegments? : Iterable<String>,query? : String,queryParameters? : Map<String,any>,fragment? : String}) : Uri {
        let {scheme,userInfo,host,port,path,pathSegments,query,queryParameters,fragment} = Object.assign({
        }, _namedArguments );
        let schemeChanged : bool = false;
        if (scheme != null) {
            scheme = _Uri._makeScheme(scheme,0,scheme.length);
            schemeChanged = !this._isScheme(scheme);
        }else {
            scheme = this.scheme;
        }
        let isFile : bool = (op(Op.EQUALS,scheme,"file"));
        if (userInfo != null) {
            userInfo = _Uri._makeUserInfo(userInfo,0,userInfo.length);
        }else if (op(Op.GT,this._hostStart,0)) {
            userInfo = this._uri.substring(op(Op.PLUS,this._schemeEnd,3),this._hostStart);
        }else {
            userInfo = "";
        }
        if (port != null) {
            port = _Uri._makePort(port,scheme);
        }else {
            port = this.hasPort ? this.port : null;
            if (schemeChanged) {
                port = _Uri._makePort(port,scheme);
            }
        }
        if (host != null) {
            host = _Uri._makeHost(host,0,host.length,false);
        }else if (op(Op.GT,this._hostStart,0)) {
            host = this._uri.substring(this._hostStart,this._portStart);
        }else if (userInfo.isNotEmpty || port != null || isFile) {
            host = "";
        }
        let hasAuthority : bool = host != null;
        if (path != null || pathSegments != null) {
            path = _Uri._makePath(path,0,_stringOrNullLength(path),pathSegments,scheme,hasAuthority);
        }else {
            path = this._uri.substring(this._pathStart,this._queryStart);
            if ((isFile || (hasAuthority && !path.isEmpty)) && !path.startsWith('/')) {
                path = "/" + path;
            }
        }
        if (query != null || queryParameters != null) {
            query = _Uri._makeQuery(query,0,_stringOrNullLength(query),queryParameters);
        }else if (op(Op.LT,this._queryStart,this._fragmentStart)) {
            query = this._uri.substring(op(Op.PLUS,this._queryStart,1),this._fragmentStart);
        }
        if (fragment != null) {
            fragment = _Uri._makeFragment(fragment,0,fragment.length);
        }else if (op(Op.LT,this._fragmentStart,this._uri.length)) {
            fragment = this._uri.substring(op(Op.PLUS,this._fragmentStart,1));
        }
        return new _Uri._internal(scheme,userInfo,host,port,path,query,fragment);
    }
    resolve(reference : String) : Uri {
        return this.resolveUri(Uri.parse(reference));
    }
    resolveUri(reference : Uri) : Uri {
        if (is(reference, _SimpleUri)) {
            return this._simpleMerge(this,reference);
        }
        return this._toNonSimple().resolveUri(reference);
    }
    _simpleMerge(base : _SimpleUri,ref : _SimpleUri) : Uri {
        if (ref.hasScheme) return ref;
        if (ref.hasAuthority) {
            if (!base.hasScheme) return ref;
            let isSimple : bool = true;
            if (base._isFile) {
                isSimple = !ref.hasEmptyPath;
            }else if (base._isHttp) {
                isSimple = !ref._isPort("80");
            }else if (base._isHttps) {
                isSimple = !ref._isPort("443");
            }
            if (isSimple) {
                let delta = op(Op.PLUS,base._schemeEnd,1);
                let newUri = op(Op.PLUS,base._uri.substring(0,op(Op.PLUS,base._schemeEnd,1)),ref._uri.substring(op(Op.PLUS,ref._schemeEnd,1)));
                return new _SimpleUri(newUri,base._schemeEnd,op(Op.PLUS,ref._hostStart,delta),op(Op.PLUS,ref._portStart,delta),op(Op.PLUS,ref._pathStart,delta),op(Op.PLUS,ref._queryStart,delta),op(Op.PLUS,ref._fragmentStart,delta),base._schemeCache);
            }else {
                return this._toNonSimple().resolveUri(ref);
            }
        }
        if (ref.hasEmptyPath) {
            if (ref.hasQuery) {
                let delta : int = op(Op.MINUS,base._queryStart,ref._queryStart);
                let newUri = op(Op.PLUS,base._uri.substring(0,base._queryStart),ref._uri.substring(ref._queryStart));
                return new _SimpleUri(newUri,base._schemeEnd,base._hostStart,base._portStart,base._pathStart,op(Op.PLUS,ref._queryStart,delta),op(Op.PLUS,ref._fragmentStart,delta),base._schemeCache);
            }
            if (ref.hasFragment) {
                let delta : int = op(Op.MINUS,base._fragmentStart,ref._fragmentStart);
                let newUri = op(Op.PLUS,base._uri.substring(0,base._fragmentStart),ref._uri.substring(ref._fragmentStart));
                return new _SimpleUri(newUri,base._schemeEnd,base._hostStart,base._portStart,base._pathStart,base._queryStart,op(Op.PLUS,ref._fragmentStart,delta),base._schemeCache);
            }
            return base.removeFragment();
        }
        if (ref.hasAbsolutePath) {
            let delta = op(Op.MINUS,base._pathStart,ref._pathStart);
            let newUri = op(Op.PLUS,base._uri.substring(0,base._pathStart),ref._uri.substring(ref._pathStart));
            return new _SimpleUri(newUri,base._schemeEnd,base._hostStart,base._portStart,base._pathStart,op(Op.PLUS,ref._queryStart,delta),op(Op.PLUS,ref._fragmentStart,delta),base._schemeCache);
        }
        if (base.hasEmptyPath && base.hasAuthority) {
            let refStart : int = ref._pathStart;
            while (ref._uri.startsWith("../",refStart)){
                refStart += 3;
            }
            let delta = op(Op.PLUS,op(Op.MINUS,base._pathStart,refStart),1);
            let newUri = `${base._uri.substring(0,base._pathStart)}/` + `${ref._uri.substring(refStart)}`;
            return new _SimpleUri(newUri,base._schemeEnd,base._hostStart,base._portStart,base._pathStart,op(Op.PLUS,ref._queryStart,delta),op(Op.PLUS,ref._fragmentStart,delta),base._schemeCache);
        }
        let baseUri : String = base._uri;
        let refUri : String = ref._uri;
        let baseStart : int = base._pathStart;
        let baseEnd : int = base._queryStart;
        while (baseUri.startsWith("../",baseStart))baseStart += 3;
        let refStart : int = ref._pathStart;
        let refEnd : int = ref._queryStart;
        let backCount : int = 0;
        while (op(Op.LEQ,op(Op.PLUS,refStart,3),refEnd) && refUri.startsWith("../",refStart)){
            refStart += 3;
            backCount += 1;
        }
        let insert : String = "";
        while (op(Op.GT,baseEnd,baseStart)){
            baseEnd--;
            let char : int = baseUri.codeUnitAt(baseEnd);
            if (op(Op.EQUALS,char,properties._SLASH)) {
                insert = "/";
                if (op(Op.EQUALS,backCount,0)) break;
                backCount--;
            }
        }
        if (op(Op.EQUALS,baseEnd,baseStart) && !base.hasScheme && !base.hasAbsolutePath) {
            insert = "";
            refStart -= op(Op.TIMES,backCount,3);
        }
        let delta = op(Op.PLUS,op(Op.MINUS,baseEnd,refStart),insert.length);
        let newUri = `${base._uri.substring(0,baseEnd)}${insert}` + `${ref._uri.substring(refStart)}`;
        return new _SimpleUri(newUri,base._schemeEnd,base._hostStart,base._portStart,base._pathStart,op(Op.PLUS,ref._queryStart,delta),op(Op.PLUS,ref._fragmentStart,delta),base._schemeCache);
    }
    toFilePath(_namedArguments? : {windows? : bool}) : String {
        let {windows} = Object.assign({
        }, _namedArguments );
        if (op(Op.GEQ,this._schemeEnd,0) && !this._isFile) {
            throw new UnsupportedError(`Cannot extract a file path from a ${this.scheme} URI`);
        }
        if (op(Op.LT,this._queryStart,this._uri.length)) {
            if (op(Op.LT,this._queryStart,this._fragmentStart)) {
                throw new UnsupportedError("Cannot extract a file path from a URI with a query component");
            }
            throw new UnsupportedError("Cannot extract a file path from a URI with a fragment component");
        }
        if (op(Op.EQUALS,windows,null)) windows = _Uri._isWindows;
        return windows ? _Uri._toWindowsFilePath(this) : this._toFilePath();
    }
    _toFilePath() : String {
        if (op(Op.LT,this._hostStart,this._portStart)) {
            throw new UnsupportedError("Cannot extract a non-Windows file path from a file URI " + "with an authority");
        }
        return this.path;
    }
    get data() : UriData {
        /* TODO (AssertStatementImpl) : assert (scheme != "data"); */;
        return null;
    }
    get hashCode() : int {
        return this._hashCodeCache = ( this._hashCodeCache ) || ( this._uri.hashCode );
    }
    [OperatorMethods.EQUALS](other : Object) : bool {
        if (identical(this,other)) return true;
        if (is(other, Uri)) return op(Op.EQUALS,this._uri,other.toString());
        return false;
    }
    _toNonSimple() : Uri {
        return new _Uri._internal(this.scheme,this.userInfo,this.hasAuthority ? this.host : null,this.hasPort ? this.port : null,this.path,this.hasQuery ? this.query : null,this.hasFragment ? this.fragment : null);
    }
    toString() : String {
        return this._uri;
    }
}

export namespace _Uri {
    export type Constructors = '_internal';
    export type Interface = Omit<_Uri, Constructors>;
}
@DartClass
@Implements(Uri)
export class _Uri implements Uri.Interface {
    scheme : String;

    _userInfo : String;

    _host : String;

    _port : int;

    path : String;

    _query : String;

    _fragment : String;

    _pathSegments : List<String>;

    _text : String;

    _hashCodeCache : int;

    _queryParameters : Map<String,String>;

    _queryParameterLists : Map<String,List<String>>;

    @namedConstructor
    _internal(scheme : String,_userInfo : String,_host : String,_port : int,path : String,_query : String,_fragment : String) {
        this.scheme = scheme;
        this._userInfo = _userInfo;
        this._host = _host;
        this._port = _port;
        this.path = path;
        this._query = _query;
        this._fragment = _fragment;
    }
    static _internal : new(scheme : String,_userInfo : String,_host : String,_port : int,path : String,_query : String,_fragment : String) => _Uri;

    @namedFactory
    static $notSimple(uri : String,start : int,end : int,schemeEnd : int,hostStart : int,portStart : int,pathStart : int,queryStart : int,fragmentStart : int,scheme : String) : _Uri {
        if (op(Op.EQUALS,scheme,null)) {
            scheme = "";
            if (op(Op.GT,schemeEnd,start)) {
                scheme = _Uri._makeScheme(uri,start,schemeEnd);
            }else if (op(Op.EQUALS,schemeEnd,start)) {
                _Uri._fail(uri,start,"Invalid empty scheme");
            }
        }
        let userInfo : String = "";
        let host : String;
        let port : int;
        if (op(Op.GT,hostStart,start)) {
            let userInfoStart : int = op(Op.PLUS,schemeEnd,3);
            if (op(Op.LT,userInfoStart,hostStart)) {
                userInfo = _Uri._makeUserInfo(uri,userInfoStart,op(Op.MINUS,hostStart,1));
            }
            host = _Uri._makeHost(uri,hostStart,portStart,false);
            if (op(Op.LT,op(Op.PLUS,portStart,1),pathStart)) {
                port = int.parse(uri.substring(op(Op.PLUS,portStart,1),pathStart),{
                    onError : (_ : any) =>  {
                        throw new FormatException("Invalid port",uri,op(Op.PLUS,portStart,1));
                    }});
                port = _Uri._makePort(port,scheme);
            }
        }
        let path : String = _Uri._makePath(uri,pathStart,queryStart,null,scheme,host != null);
        let query : String;
        if (op(Op.LT,queryStart,fragmentStart)) {
            query = _Uri._makeQuery(uri,op(Op.PLUS,queryStart,1),fragmentStart,null);
        }
        let fragment : String;
        if (op(Op.LT,fragmentStart,end)) {
            fragment = _Uri._makeFragment(uri,op(Op.PLUS,fragmentStart,1),end);
        }
        return new _Uri._internal(scheme,userInfo,host,port,path,query,fragment);
    }
    static notSimple : new(uri : String,start : int,end : int,schemeEnd : int,hostStart : int,portStart : int,pathStart : int,queryStart : int,fragmentStart : int,scheme : String) => _Uri;

    constructor(_namedArguments? : {scheme? : String,userInfo? : String,host? : String,port? : int,path? : String,pathSegments? : Iterable<String>,query? : String,queryParameters? : Map<String,any>,fragment? : String}) {
    }
    @defaultFactory
    static $_Uri(_namedArguments? : {scheme? : String,userInfo? : String,host? : String,port? : int,path? : String,pathSegments? : Iterable<String>,query? : String,queryParameters? : Map<String,any>,fragment? : String}) : _Uri {
        let {scheme,userInfo,host,port,path,pathSegments,query,queryParameters,fragment} = Object.assign({
        }, _namedArguments );
        scheme = _Uri._makeScheme(scheme,0,_stringOrNullLength(scheme));
        userInfo = _Uri._makeUserInfo(userInfo,0,_stringOrNullLength(userInfo));
        host = _Uri._makeHost(host,0,_stringOrNullLength(host),false);
        if (op(Op.EQUALS,query,"")) query = null;
        query = _Uri._makeQuery(query,0,_stringOrNullLength(query),queryParameters);
        fragment = _Uri._makeFragment(fragment,0,_stringOrNullLength(fragment));
        port = _Uri._makePort(port,scheme);
        let isFile : bool = (op(Op.EQUALS,scheme,"file"));
        if (op(Op.EQUALS,host,null) && (userInfo.isNotEmpty || port != null || isFile)) {
            host = "";
        }
        let hasAuthority : bool = (host != null);
        path = _Uri._makePath(path,0,_stringOrNullLength(path),pathSegments,scheme,hasAuthority);
        if (scheme.isEmpty && op(Op.EQUALS,host,null) && !path.startsWith('/')) {
            let allowScheme : bool = scheme.isNotEmpty || host != null;
            path = _Uri._normalizeRelativePath(path,allowScheme);
        }else {
            path = _Uri._removeDotSegments(path);
        }
        if (op(Op.EQUALS,host,null) && path.startsWith("//")) {
            host = "";
        }
        return new _Uri._internal(scheme,userInfo,host,port,path,query,fragment);
    }
    @namedFactory
    static $http(authority : String,unencodedPath : String,queryParameters? : Map<String,String>) : _Uri {
        return _Uri._makeHttpUri("http",authority,unencodedPath,queryParameters);
    }
    static http : new(authority : String,unencodedPath : String,queryParameters : Map<String,String>) => _Uri;

    @namedFactory
    static $https(authority : String,unencodedPath : String,queryParameters? : Map<String,String>) : _Uri {
        return _Uri._makeHttpUri("https",authority,unencodedPath,queryParameters);
    }
    static https : new(authority : String,unencodedPath : String,queryParameters : Map<String,String>) => _Uri;

    get authority() : String {
        if (!this.hasAuthority) return "";
        let sb = new StringBuffer();
        this._writeAuthority(sb);
        return sb.toString();
    }
    get userInfo() : String {
        return this._userInfo;
    }
    get host() : String {
        if (op(Op.EQUALS,this._host,null)) return "";
        if (this._host.startsWith('[')) {
            return this._host.substring(1,op(Op.MINUS,this._host.length,1));
        }
        return this._host;
    }
    get port() : int {
        if (op(Op.EQUALS,this._port,null)) return _Uri._defaultPort(this.scheme);
        return this._port;
    }
    static _defaultPort(scheme : String) : int {
        if (op(Op.EQUALS,scheme,"http")) return 80;
        if (op(Op.EQUALS,scheme,"https")) return 443;
        return 0;
    }
    get query() : String {
        return (this._query || "");
    }
    get fragment() : String {
        return (this._fragment || "");
    }
    isScheme(scheme : String) : bool {
        let thisScheme : String = this.scheme;
        if (op(Op.EQUALS,scheme,null)) return thisScheme.isEmpty;
        if (scheme.length != thisScheme.length) return false;
        return _Uri._compareScheme(scheme,thisScheme);
    }
    static _compareScheme(scheme : String,uri : String) : bool {
        for(let i : int = 0; op(Op.LT,i,scheme.length); i++){
            let schemeChar : int = scheme.codeUnitAt(i);
            let uriChar : int = uri.codeUnitAt(i);
            let delta : int = op(Op.XOR,schemeChar,uriChar);
            if (delta != 0) {
                if (op(Op.EQUALS,delta,32)) {
                    let lowerChar : int = op(Op.BITOR,uriChar,delta);
                    if (97 <= lowerChar && op(Op.LEQ,lowerChar,122)) {
                        continue;
                    }
                }
                return false;
            }
        }
        return true;
    }
    static _fail(uri : String,index : int,message : String) : void {
        throw new FormatException(message,uri,index);
    }
    static _makeHttpUri(scheme : String,authority : String,unencodedPath : String,queryParameters : Map<String,String>) : Uri {
        let userInfo = "";
        let host = null;
        let port = null;
        if (authority != null && authority.isNotEmpty) {
            let hostStart = 0;
            let hasUserInfo : bool = false;
            for(let i : int = 0; op(Op.LT,i,authority.length); i++){
                let atSign : int = 64;
                if (op(Op.EQUALS,authority.codeUnitAt(i),atSign)) {
                    hasUserInfo = true;
                    userInfo = authority.substring(0,i);
                    hostStart = op(Op.PLUS,i,1);
                    break;
                }
            }
            let hostEnd = hostStart;
            if (hostStart < authority.length && op(Op.EQUALS,authority.codeUnitAt(hostStart),properties._LEFT_BRACKET)) {
                for(; hostEnd < authority.length; hostEnd++){
                    if (op(Op.EQUALS,authority.codeUnitAt(hostEnd),properties._RIGHT_BRACKET)) break;
                }
                if (hostEnd == authority.length) {
                    throw new FormatException("Invalid IPv6 host entry.",authority,hostStart);
                }
                Uri.parseIPv6Address(authority,hostStart + 1,hostEnd);
                hostEnd++;
                if (hostEnd != authority.length && authority.codeUnitAt(hostEnd) != properties._COLON) {
                    throw new FormatException("Invalid end of authority",authority,hostEnd);
                }
            }
            let hasPort : bool = false;
            for(; hostEnd < authority.length; hostEnd++){
                if (op(Op.EQUALS,authority.codeUnitAt(hostEnd),properties._COLON)) {
                    let portString = authority.substring(hostEnd + 1);
                    if (portString.isNotEmpty) port = int.parse(portString);
                    break;
                }
            }
            host = authority.substring(hostStart,hostEnd);
        }
        return new Uri({
            scheme : scheme,userInfo : userInfo,host : host,port : port,pathSegments : unencodedPath.split("/"),queryParameters : queryParameters});
    }
    @namedFactory
    static $file(path : String,_namedArguments? : {windows? : bool}) : _Uri {
        let {windows} = Object.assign({
        }, _namedArguments );
        windows = (op(Op.EQUALS,windows,null)) ? _Uri._isWindows : windows;
        return windows ? _Uri._makeWindowsFileUrl(path,false) : _Uri._makeFileUri(path,false);
    }
    static file : new(path : String,_namedArguments? : {windows? : bool}) => _Uri;

    @namedFactory
    static $directory(path : String,_namedArguments? : {windows? : bool}) : _Uri {
        let {windows} = Object.assign({
        }, _namedArguments );
        windows = (op(Op.EQUALS,windows,null)) ? _Uri._isWindows : windows;
        return windows ? _Uri._makeWindowsFileUrl(path,true) : _Uri._makeFileUri(path,true);
    }
    static directory : new(path : String,_namedArguments? : {windows? : bool}) => _Uri;

    static get _isWindows() : bool {
    }
    static _checkNonWindowsPathReservedCharacters(segments : List<String>,argumentError : bool) {
        segments.forEach((segment : any) =>  {
            if (segment.contains("/")) {
                if (argumentError) {
                    throw new ArgumentError(`Illegal path character ${segment}`);
                }else {
                    throw new UnsupportedError(`Illegal path character ${segment}`);
                }
            }
        });
    }
    static _checkWindowsPathReservedCharacters(segments : List<String>,argumentError : bool,firstSegment? : int) {
        firstSegment = firstSegment || 0;
        for(let segment of segments.skip(firstSegment)) {
            if (segment.contains(new RegExp('["*/:<>?\\|]'))) {
                if (argumentError) {
                    throw new ArgumentError("Illegal character in path");
                }else {
                    throw new UnsupportedError("Illegal character in path");
                }
            }
        }
    }
    static _checkWindowsDriveLetter(charCode : int,argumentError : bool) {
        if ((op(Op.LEQ,properties._UPPER_CASE_A,charCode) && op(Op.LEQ,charCode,properties._UPPER_CASE_Z)) || (op(Op.LEQ,properties._LOWER_CASE_A,charCode) && op(Op.LEQ,charCode,properties._LOWER_CASE_Z))) {
            return;
        }
        if (argumentError) {
            throw new ArgumentError("Illegal drive letter " + new String.fromCharCode(charCode));
        }else {
            throw new UnsupportedError("Illegal drive letter " + new String.fromCharCode(charCode));
        }
    }
    static _makeFileUri(path : String,slashTerminated : bool) {
        let sep : String = "/";
        let segments = path.split(sep);
        if (slashTerminated && segments.isNotEmpty && segments.last.isNotEmpty) {
            segments.add("");
        }
        if (path.startsWith(sep)) {
            return new Uri({
                scheme : "file",pathSegments : segments});
        }else {
            return new Uri({
                pathSegments : segments});
        }
    }
    static _makeWindowsFileUrl(path : String,slashTerminated : bool) {
        if (path.startsWith("\\?\")) {
            if (path.startsWith("UNC\",4)) {
                path = path.replaceRange(0,7,'\');
            }else {
                path = path.substring(4);
                if (op(Op.LT,path.length,3) || path.codeUnitAt(1) != properties._COLON || path.codeUnitAt(2) != properties._BACKSLASH) {
                    throw new ArgumentError("Windows paths with \\?\ prefix must be absolute");
                }
            }
        }else {
            path = path.replaceAll("/",'\');
        }
        let sep : String = '\';
        if (op(Op.GT,path.length,1) && op(Op.EQUALS,path.codeUnitAt(1),properties._COLON)) {
            _Uri._checkWindowsDriveLetter(path.codeUnitAt(0),true);
            if (op(Op.EQUALS,path.length,2) || path.codeUnitAt(2) != properties._BACKSLASH) {
                throw new ArgumentError("Windows paths with drive letter must be absolute");
            }
            let pathSegments = path.split(sep);
            if (slashTerminated && pathSegments.last.isNotEmpty) {
                pathSegments.add("");
            }
            _Uri._checkWindowsPathReservedCharacters(pathSegments,true,1);
            return new Uri({
                scheme : "file",pathSegments : pathSegments});
        }
        if (path.startsWith(sep)) {
            if (path.startsWith(sep,1)) {
                let pathStart : int = path.indexOf('\',2);
                let hostPart : String = (op(Op.LT,pathStart,0)) ? path.substring(2) : path.substring(2,pathStart);
                let pathPart : String = (op(Op.LT,pathStart,0)) ? "" : path.substring(op(Op.PLUS,pathStart,1));
                let pathSegments = pathPart.split(sep);
                _Uri._checkWindowsPathReservedCharacters(pathSegments,true);
                if (slashTerminated && pathSegments.last.isNotEmpty) {
                    pathSegments.add("");
                }
                return new Uri({
                    scheme : "file",host : hostPart,pathSegments : pathSegments});
            }else {
                let pathSegments = path.split(sep);
                if (slashTerminated && pathSegments.last.isNotEmpty) {
                    pathSegments.add("");
                }
                _Uri._checkWindowsPathReservedCharacters(pathSegments,true);
                return new Uri({
                    scheme : "file",pathSegments : pathSegments});
            }
        }else {
            let pathSegments = path.split(sep);
            _Uri._checkWindowsPathReservedCharacters(pathSegments,true);
            if (slashTerminated && pathSegments.isNotEmpty && pathSegments.last.isNotEmpty) {
                pathSegments.add("");
            }
            return new Uri({
                pathSegments : pathSegments});
        }
    }
    replace(_namedArguments? : {scheme? : String,userInfo? : String,host? : String,port? : int,path? : String,pathSegments? : Iterable<String>,query? : String,queryParameters? : Map<String,any>,fragment? : String}) : Uri {
        let {scheme,userInfo,host,port,path,pathSegments,query,queryParameters,fragment} = Object.assign({
        }, _namedArguments );
        let schemeChanged : bool = false;
        if (scheme != null) {
            scheme = _Uri._makeScheme(scheme,0,scheme.length);
            schemeChanged = (scheme != this.scheme);
        }else {
            scheme = this.scheme;
        }
        let isFile : bool = (op(Op.EQUALS,scheme,"file"));
        if (userInfo != null) {
            userInfo = _Uri._makeUserInfo(userInfo,0,userInfo.length);
        }else {
            userInfo = this._userInfo;
        }
        if (port != null) {
            port = _Uri._makePort(port,scheme);
        }else {
            port = this._port;
            if (schemeChanged) {
                port = _Uri._makePort(port,scheme);
            }
        }
        if (host != null) {
            host = _Uri._makeHost(host,0,host.length,false);
        }else if (this.hasAuthority) {
            host = this._host;
        }else if (userInfo.isNotEmpty || port != null || isFile) {
            host = "";
        }
        let hasAuthority : bool = host != null;
        if (path != null || pathSegments != null) {
            path = _Uri._makePath(path,0,_stringOrNullLength(path),pathSegments,scheme,hasAuthority);
        }else {
            path = this.path;
            if ((isFile || (hasAuthority && !path.isEmpty)) && !path.startsWith('/')) {
                path = "/" + path;
            }
        }
        if (query != null || queryParameters != null) {
            query = _Uri._makeQuery(query,0,_stringOrNullLength(query),queryParameters);
        }else {
            query = this._query;
        }
        if (fragment != null) {
            fragment = _Uri._makeFragment(fragment,0,fragment.length);
        }else {
            fragment = this._fragment;
        }
        return new _Uri._internal(scheme,userInfo,host,port,path,query,fragment);
    }
    removeFragment() : Uri {
        if (!this.hasFragment) return this;
        return new _Uri._internal(this.scheme,this._userInfo,this._host,this._port,this.path,this._query,null);
    }
    get pathSegments() : List<String> {
        let result = this._pathSegments;
        if (result != null) return result;
        let pathToSplit = this.path;
        if (pathToSplit.isNotEmpty && op(Op.EQUALS,pathToSplit.codeUnitAt(0),properties._SLASH)) {
            pathToSplit = pathToSplit.substring(1);
        }
        result = (op(Op.EQUALS,pathToSplit,"")) ? new core.DartList.literal<String>() : new List.unmodifiable(pathToSplit.split("/").map(Uri.decodeComponent.bind(Uri)));
        this._pathSegments = result;
        return result;
    }
    get queryParameters() : Map<String,String> {
        if (this._queryParameters == null) {
            this._queryParameters = new core.DartUnmodifiableMapView<String,String>(Uri.splitQueryString(this.query));
        }
        return this._queryParameters;
    }
    get queryParametersAll() : Map<String,List<String>> {
        if (this._queryParameterLists == null) {
            let queryParameterLists : Map<any,any> = _Uri._splitQueryStringAll(this.query);
            for(let key of queryParameterLists.keys) {
                queryParameterLists[key] = new List.unmodifiable(queryParameterLists[key]);
            }
            this._queryParameterLists = new Map.unmodifiable(queryParameterLists);
        }
        return this._queryParameterLists;
    }
    normalizePath() : Uri {
        let path : String = _Uri._normalizePath(this.path,this.scheme,this.hasAuthority);
        if (identical(path,this.path)) return this;
        return this.replace({
            path : path});
    }
    static _makePort(port : int,scheme : String) : int {
        if (port != null && op(Op.EQUALS,port,_Uri._defaultPort(scheme))) return null;
        return port;
    }
    static _makeHost(host : String,start : int,end : int,strictIPv6 : bool) : String {
        if (op(Op.EQUALS,host,null)) return null;
        if (op(Op.EQUALS,start,end)) return "";
        if (op(Op.EQUALS,host.codeUnitAt(start),properties._LEFT_BRACKET)) {
            if (host.codeUnitAt(op(Op.MINUS,end,1)) != properties._RIGHT_BRACKET) {
                _Uri._fail(host,start,'Missing end `]` to match `[` in host');
            }
            Uri.parseIPv6Address(host,op(Op.PLUS,start,1),op(Op.MINUS,end,1));
            return host.substring(start,end).toLowerCase();
        }
        if (!strictIPv6) {
            for(let i : int = start; op(Op.LT,i,end); i++){
                if (op(Op.EQUALS,host.codeUnitAt(i),properties._COLON)) {
                    Uri.parseIPv6Address(host,start,end);
                    return `[${host}]`;
                }
            }
        }
        return _Uri._normalizeRegName(host,start,end);
    }
    static _isRegNameChar(char : int) : bool {
        return op(Op.LT,char,127) && (op(Op.BITAND,op(Op.INDEX,_Uri._regNameTable,op(Op.SHIFTRIGHT,char,4)),(1 << (op(Op.BITAND,char,15))))) != 0;
    }
    static _normalizeRegName(host : String,start : int,end : int) : String {
        let buffer : StringBuffer;
        let sectionStart : int = start;
        let index : int = start;
        let isNormalized : bool = true;
        while (op(Op.LT,index,end)){
            let char : int = host.codeUnitAt(index);
            if (op(Op.EQUALS,char,properties._PERCENT)) {
                let replacement : String = _Uri._normalizeEscape(host,index,true);
                if (op(Op.EQUALS,replacement,null) && isNormalized) {
                    index += 3;
                    continue;
                }
                if (op(Op.EQUALS,buffer,null)) buffer = new StringBuffer();
                let slice : String = host.substring(sectionStart,index);
                if (!isNormalized) slice = slice.toLowerCase();
                buffer.write(slice);
                let sourceLength : int = 3;
                if (op(Op.EQUALS,replacement,null)) {
                    replacement = host.substring(index,op(Op.PLUS,index,3));
                }else if (op(Op.EQUALS,replacement,"%")) {
                    replacement = "%25";
                    sourceLength = 1;
                }
                buffer.write(replacement);
                index += sourceLength;
                sectionStart = index;
                isNormalized = true;
            }else if (_Uri._isRegNameChar(char)) {
                if (isNormalized && op(Op.LEQ,properties._UPPER_CASE_A,char) && op(Op.GEQ,properties._UPPER_CASE_Z,char)) {
                    if (op(Op.EQUALS,buffer,null)) buffer = new StringBuffer();
                    if (op(Op.LT,sectionStart,index)) {
                        buffer.write(host.substring(sectionStart,index));
                        sectionStart = index;
                    }
                    isNormalized = false;
                }
                index++;
            }else if (_Uri._isGeneralDelimiter(char)) {
                _Uri._fail(host,index,"Invalid character");
            }else {
                let sourceLength : int = 1;
                if (op(Op.EQUALS,(op(Op.BITAND,char,64512)),55296) && op(Op.LT,(op(Op.PLUS,index,1)),end)) {
                    let tail : int = host.codeUnitAt(op(Op.PLUS,index,1));
                    if (op(Op.EQUALS,(op(Op.BITAND,tail,64512)),56320)) {
                        char = 65536 | (op(Op.SHIFTLEFT,(op(Op.BITAND,char,1023)),10)) | (op(Op.BITAND,tail,1023));
                        sourceLength = 2;
                    }
                }
                if (op(Op.EQUALS,buffer,null)) buffer = new StringBuffer();
                let slice : String = host.substring(sectionStart,index);
                if (!isNormalized) slice = slice.toLowerCase();
                buffer.write(slice);
                buffer.write(_Uri._escapeChar(char));
                index += sourceLength;
                sectionStart = index;
            }
        }
        if (op(Op.EQUALS,buffer,null)) return host.substring(start,end);
        if (op(Op.LT,sectionStart,end)) {
            let slice : String = host.substring(sectionStart,end);
            if (!isNormalized) slice = slice.toLowerCase();
            buffer.write(slice);
        }
        return buffer.toString();
    }
    static _makeScheme(scheme : String,start : int,end : int) : String {
        if (op(Op.EQUALS,start,end)) return "";
        let firstCodeUnit : int = scheme.codeUnitAt(start);
        if (!_Uri._isAlphabeticCharacter(firstCodeUnit)) {
            _Uri._fail(scheme,start,"Scheme not starting with alphabetic character");
        }
        let containsUpperCase : bool = false;
        for(let i : int = start; op(Op.LT,i,end); i++){
            let codeUnit : int = scheme.codeUnitAt(i);
            if (!_Uri._isSchemeCharacter(codeUnit)) {
                _Uri._fail(scheme,i,"Illegal scheme character");
            }
            if (op(Op.LEQ,properties._UPPER_CASE_A,codeUnit) && op(Op.LEQ,codeUnit,properties._UPPER_CASE_Z)) {
                containsUpperCase = true;
            }
        }
        scheme = scheme.substring(start,end);
        if (containsUpperCase) scheme = scheme.toLowerCase();
        return _Uri._canonicalizeScheme(scheme);
    }
    static _canonicalizeScheme(scheme : String) : String {
        if (op(Op.EQUALS,scheme,"http")) return "http";
        if (op(Op.EQUALS,scheme,"file")) return "file";
        if (op(Op.EQUALS,scheme,"https")) return "https";
        if (op(Op.EQUALS,scheme,"package")) return "package";
        return scheme;
    }
    static _makeUserInfo(userInfo : String,start : int,end : int) : String {
        if (op(Op.EQUALS,userInfo,null)) return "";
        return _Uri._normalizeOrSubstring(userInfo,start,end,_Uri._userinfoTable);
    }
    static _makePath(path : String,start : int,end : int,pathSegments : Iterable<String>,scheme : String,hasAuthority : bool) : String {
        let isFile : bool = (op(Op.EQUALS,scheme,"file"));
        let ensureLeadingSlash : bool = isFile || hasAuthority;
        if (op(Op.EQUALS,path,null) && pathSegments == null) return isFile ? "/" : "";
        if (path != null && pathSegments != null) {
            throw new ArgumentError('Both path and pathSegments specified');
        }
        let result;
        if (path != null) {
            result = _Uri._normalizeOrSubstring(path,start,end,_Uri._pathCharOrSlashTable);
        }else {
            result = pathSegments.map((s : any) =>  {
                return _Uri._uriEncode(_Uri._pathCharTable,s,convert.properties.UTF8,false);
            }).join("/");
        }
        if (result.isEmpty) {
            if (isFile) return "/";
        }else if (ensureLeadingSlash && !result.startsWith('/')) {
            result = "/" + result;
        }
        result = _Uri._normalizePath(result,scheme,hasAuthority);
        return result;
    }
    static _normalizePath(path : String,scheme : String,hasAuthority : bool) : String {
        if (scheme.isEmpty && !hasAuthority && !path.startsWith('/')) {
            return _Uri._normalizeRelativePath(path,scheme.isNotEmpty || hasAuthority);
        }
        return _Uri._removeDotSegments(path);
    }
    static _makeQuery(query : String,start : int,end : int,queryParameters : Map<String,any>) : String {
        if (query != null) {
            if (queryParameters != null) {
                throw new ArgumentError('Both query and queryParameters specified');
            }
            return _Uri._normalizeOrSubstring(query,start,end,_Uri._queryCharTable);
        }
        if (queryParameters == null) return null;
        let result = new StringBuffer();
        let separator = "";
        var writeParameter : (key : String,value : String) => void = (key : String,value : String) : void =>  {
            result.write(separator);
            separator = "&";
            result.write(Uri.encodeQueryComponent(key));
            if (value != null && value.isNotEmpty) {
                result.write("=");
                result.write(Uri.encodeQueryComponent(value));
            }
        };
        queryParameters.forEach((key : any,value : any) =>  {
            if (op(Op.EQUALS,value,null) || is(value, String)) {
                writeParameter(key,value);
            }else {
                let values : Iterable<any> = value;
                for(let value of values) {
                    writeParameter(key,value);
                }
            }
        });
        return result.toString();
    }
    static _makeFragment(fragment : String,start : int,end : int) : String {
        if (op(Op.EQUALS,fragment,null)) return null;
        return _Uri._normalizeOrSubstring(fragment,start,end,_Uri._queryCharTable);
    }
    static _normalizeEscape(source : String,index : int,lowerCase : bool) : String {
        /* TODO (AssertStatementImpl) : assert (source.codeUnitAt(index) == _PERCENT); */;
        if (op(Op.GEQ,op(Op.PLUS,index,2),source.length)) {
            return "%";
        }
        let firstDigit : int = source.codeUnitAt(op(Op.PLUS,index,1));
        let secondDigit : int = source.codeUnitAt(op(Op.PLUS,index,2));
        let firstDigitValue : int = _internal.hexDigitValue(firstDigit);
        let secondDigitValue : int = _internal.hexDigitValue(secondDigit);
        if (op(Op.LT,firstDigitValue,0) || op(Op.LT,secondDigitValue,0)) {
            return "%";
        }
        let value : int = op(Op.PLUS,op(Op.TIMES,firstDigitValue,16),secondDigitValue);
        if (_Uri._isUnreservedChar(value)) {
            if (lowerCase && op(Op.LEQ,properties._UPPER_CASE_A,value) && op(Op.GEQ,properties._UPPER_CASE_Z,value)) {
                value |= 32;
            }
            return new String.fromCharCode(value);
        }
        if (op(Op.GEQ,firstDigit,properties._LOWER_CASE_A) || op(Op.GEQ,secondDigit,properties._LOWER_CASE_A)) {
            return source.substring(index,op(Op.PLUS,index,3)).toUpperCase();
        }
        return null;
    }
    static _escapeChar(char : int) : String {
        /* TODO (AssertStatementImpl) : assert (char <= 0x10ffff); */;
        let codeUnits : List<int>;
        if (op(Op.LT,char,128)) {
            codeUnits = new List<any>(3);
            codeUnits[0] = properties._PERCENT;
            codeUnits[1] = properties._hexDigits.codeUnitAt(op(Op.SHIFTRIGHT,char,4));
            codeUnits[2] = properties._hexDigits.codeUnitAt(op(Op.BITAND,char,15));
        }else {
            let flag : int = 192;
            let encodedBytes : int = 2;
            if (op(Op.GT,char,2047)) {
                flag = 224;
                encodedBytes = 3;
                if (op(Op.GT,char,65535)) {
                    encodedBytes = 4;
                    flag = 240;
                }
            }
            codeUnits = new List<any>(3 * encodedBytes);
            let index : int = 0;
            while (op(Op.GEQ,--encodedBytes,0)){
                let byte : int = op(Op.BITOR,(op(Op.BITAND,(op(Op.SHIFTRIGHT,char,(6 * encodedBytes))),63)),flag);
                codeUnits[index] = properties._PERCENT;
                codeUnits[op(Op.PLUS,index,1)] = properties._hexDigits.codeUnitAt(op(Op.SHIFTRIGHT,byte,4));
                codeUnits[op(Op.PLUS,index,2)] = properties._hexDigits.codeUnitAt(op(Op.BITAND,byte,15));
                index += 3;
                flag = 128;
            }
        }
        return new String.fromCharCodes(codeUnits);
    }
    static _normalizeOrSubstring(component : String,start : int,end : int,charTable : List<int>) : String {
        return (_Uri._normalize(component,start,end,charTable) || component.substring(start,end));
    }
    static _normalize(component : String,start : int,end : int,charTable : List<int>,_namedArguments? : {escapeDelimiters? : bool}) : String {
        let {escapeDelimiters} = Object.assign({
            "escapeDelimiters" : false}, _namedArguments );
        let buffer : StringBuffer;
        let sectionStart : int = start;
        let index : int = start;
        while (op(Op.LT,index,end)){
            let char : int = component.codeUnitAt(index);
            if (op(Op.LT,char,127) && (op(Op.BITAND,charTable[op(Op.SHIFTRIGHT,char,4)],(1 << (op(Op.BITAND,char,15))))) != 0) {
                index++;
            }else {
                let replacement : String;
                let sourceLength : int;
                if (op(Op.EQUALS,char,properties._PERCENT)) {
                    replacement = _Uri._normalizeEscape(component,index,false);
                    if (op(Op.EQUALS,replacement,null)) {
                        index += 3;
                        continue;
                    }
                    if ("%" == replacement) {
                        replacement = "%25";
                        sourceLength = 1;
                    }else {
                        sourceLength = 3;
                    }
                }else if (!escapeDelimiters && _Uri._isGeneralDelimiter(char)) {
                    _Uri._fail(component,index,"Invalid character");
                }else {
                    sourceLength = 1;
                    if (op(Op.EQUALS,(op(Op.BITAND,char,64512)),55296)) {
                        if (op(Op.LT,op(Op.PLUS,index,1),end)) {
                            let tail : int = component.codeUnitAt(op(Op.PLUS,index,1));
                            if (op(Op.EQUALS,(op(Op.BITAND,tail,64512)),56320)) {
                                sourceLength = 2;
                                char = 65536 | (op(Op.SHIFTLEFT,(op(Op.BITAND,char,1023)),10)) | (op(Op.BITAND,tail,1023));
                            }
                        }
                    }
                    replacement = _Uri._escapeChar(char);
                }
                if (op(Op.EQUALS,buffer,null)) buffer = new StringBuffer();
                buffer.write(component.substring(sectionStart,index));
                buffer.write(replacement);
                index += sourceLength;
                sectionStart = index;
            }
        }
        if (op(Op.EQUALS,buffer,null)) {
            return null;
        }
        if (op(Op.LT,sectionStart,end)) {
            buffer.write(component.substring(sectionStart,end));
        }
        return buffer.toString();
    }
    static _isSchemeCharacter(ch : int) : bool {
        return op(Op.LT,ch,128) && ((op(Op.BITAND,op(Op.INDEX,_Uri._schemeTable,op(Op.SHIFTRIGHT,ch,4)),(1 << (op(Op.BITAND,ch,15))))) != 0);
    }
    static _isGeneralDelimiter(ch : int) : bool {
        return op(Op.LEQ,ch,properties._RIGHT_BRACKET) && ((op(Op.BITAND,op(Op.INDEX,_Uri._genDelimitersTable,op(Op.SHIFTRIGHT,ch,4)),(1 << (op(Op.BITAND,ch,15))))) != 0);
    }
    get isAbsolute() : bool {
        return this.scheme != "" && op(Op.EQUALS,this.fragment,"");
    }
    _mergePaths(base : String,reference : String) : String {
        let backCount : int = 0;
        let refStart : int = 0;
        while (reference.startsWith("../",refStart)){
            refStart += 3;
            backCount++;
        }
        let baseEnd : int = base.lastIndexOf('/');
        while (op(Op.GT,baseEnd,0) && op(Op.GT,backCount,0)){
            let newEnd : int = base.lastIndexOf('/',op(Op.MINUS,baseEnd,1));
            if (op(Op.LT,newEnd,0)) {
                break;
            }
            let delta : int = op(Op.MINUS,baseEnd,newEnd);
            if ((op(Op.EQUALS,delta,2) || op(Op.EQUALS,delta,3)) && op(Op.EQUALS,base.codeUnitAt(op(Op.PLUS,newEnd,1)),properties._DOT) && (op(Op.EQUALS,delta,2) || op(Op.EQUALS,base.codeUnitAt(op(Op.PLUS,newEnd,2)),properties._DOT))) {
                break;
            }
            baseEnd = newEnd;
            backCount--;
        }
        return base.replaceRange(op(Op.PLUS,baseEnd,1),null,reference.substring(op(Op.MINUS,refStart,3 * backCount)));
    }
    static _mayContainDotSegments(path : String) : bool {
        if (path.startsWith('.')) return true;
        let index : int = path.indexOf("/.");
        return index != -1;
    }
    static _removeDotSegments(path : String) : String {
        if (!_Uri._mayContainDotSegments(path)) return path;
        /* TODO (AssertStatementImpl) : assert (path.isNotEmpty); */;
        let output : List<String> = new core.DartList.literal();
        let appendSlash : bool = false;
        for(let segment of path.split("/")) {
            appendSlash = false;
            if (op(Op.EQUALS,segment,"..")) {
                if (output.isNotEmpty) {
                    output.removeLast();
                    if (output.isEmpty) {
                        output.add("");
                    }
                }
                appendSlash = true;
            }else if ("." == segment) {
                appendSlash = true;
            }else {
                output.add(segment);
            }
        }
        if (appendSlash) output.add("");
        return output.join("/");
    }
    static _normalizeRelativePath(path : String,allowScheme : bool) : String {
        /* TODO (AssertStatementImpl) : assert (!path.startsWith('/')); */;
        if (!_Uri._mayContainDotSegments(path)) {
            if (!allowScheme) path = _Uri._escapeScheme(path);
            return path;
        }
        /* TODO (AssertStatementImpl) : assert (path.isNotEmpty); */;
        let output : List<String> = new core.DartList.literal();
        let appendSlash : bool = false;
        for(let segment of path.split("/")) {
            appendSlash = false;
            if (".." == segment) {
                if (!output.isEmpty && output.last != "..") {
                    output.removeLast();
                    appendSlash = true;
                }else {
                    output.add("..");
                }
            }else if ("." == segment) {
                appendSlash = true;
            }else {
                output.add(segment);
            }
        }
        if (output.isEmpty || (op(Op.EQUALS,output.length,1) && output[0].isEmpty)) {
            return "./";
        }
        if (appendSlash || op(Op.EQUALS,output.last,'..')) output.add("");
        if (!allowScheme) output[0] = _Uri._escapeScheme(output[0]);
        return output.join("/");
    }
    static _escapeScheme(path : String) : String {
        if (op(Op.GEQ,path.length,2) && _Uri._isAlphabeticCharacter(path.codeUnitAt(0))) {
            for(let i : int = 1; op(Op.LT,i,path.length); i++){
                let char : int = path.codeUnitAt(i);
                if (op(Op.EQUALS,char,properties._COLON)) {
                    return `${path.substring(0,i)}%3A${path.substring(op(Op.PLUS,i,1))}`;
                }
                if (op(Op.GT,char,127) || (op(Op.EQUALS,(op(Op.BITAND,op(Op.INDEX,_Uri._schemeTable,op(Op.SHIFTRIGHT,char,4)),(1 << (op(Op.BITAND,char,15))))),0))) {
                    break;
                }
            }
        }
        return path;
    }
    resolve(reference : String) : Uri {
        return this.resolveUri(Uri.parse(reference));
    }
    resolveUri(reference : Uri) : Uri {
        let targetScheme : String;
        let targetUserInfo : String = "";
        let targetHost : String;
        let targetPort : int;
        let targetPath : String;
        let targetQuery : String;
        if (reference.scheme.isNotEmpty) {
            targetScheme = reference.scheme;
            if (reference.hasAuthority) {
                targetUserInfo = reference.userInfo;
                targetHost = reference.host;
                targetPort = reference.hasPort ? reference.port : null;
            }
            targetPath = _Uri._removeDotSegments(reference.path);
            if (reference.hasQuery) {
                targetQuery = reference.query;
            }
        }else {
            targetScheme = this.scheme;
            if (reference.hasAuthority) {
                targetUserInfo = reference.userInfo;
                targetHost = reference.host;
                targetPort = _Uri._makePort(reference.hasPort ? reference.port : null,targetScheme);
                targetPath = _Uri._removeDotSegments(reference.path);
                if (reference.hasQuery) targetQuery = reference.query;
            }else {
                targetUserInfo = this._userInfo;
                targetHost = this._host;
                targetPort = this._port;
                if (op(Op.EQUALS,reference.path,"")) {
                    targetPath = this.path;
                    if (reference.hasQuery) {
                        targetQuery = reference.query;
                    }else {
                        targetQuery = this._query;
                    }
                }else {
                    if (reference.hasAbsolutePath) {
                        targetPath = _Uri._removeDotSegments(reference.path);
                    }else {
                        if (this.hasEmptyPath) {
                            if (!this.hasAuthority) {
                                if (!this.hasScheme) {
                                    targetPath = reference.path;
                                }else {
                                    targetPath = _Uri._removeDotSegments(reference.path);
                                }
                            }else {
                                targetPath = _Uri._removeDotSegments("/" + reference.path);
                            }
                        }else {
                            let mergedPath = this._mergePaths(this.path,reference.path);
                            if (this.hasScheme || this.hasAuthority || this.hasAbsolutePath) {
                                targetPath = _Uri._removeDotSegments(mergedPath);
                            }else {
                                targetPath = _Uri._normalizeRelativePath(mergedPath,this.hasScheme || this.hasAuthority);
                            }
                        }
                    }
                    if (reference.hasQuery) targetQuery = reference.query;
                }
            }
        }
        let fragment : String = reference.hasFragment ? reference.fragment : null;
        return new _Uri._internal(targetScheme,targetUserInfo,targetHost,targetPort,targetPath,targetQuery,fragment);
    }
    get hasScheme() : bool {
        return this.scheme.isNotEmpty;
    }
    get hasAuthority() : bool {
        return this._host != null;
    }
    get hasPort() : bool {
        return this._port != null;
    }
    get hasQuery() : bool {
        return this._query != null;
    }
    get hasFragment() : bool {
        return this._fragment != null;
    }
    get hasEmptyPath() : bool {
        return this.path.isEmpty;
    }
    get hasAbsolutePath() : bool {
        return this.path.startsWith('/');
    }
    get origin() : String {
        if (op(Op.EQUALS,this.scheme,"")) {
            throw new StateError(`Cannot use origin without a scheme: ${this}`);
        }
        if (this.scheme != "http" && this.scheme != "https") {
            throw new StateError(`Origin is only applicable schemes http and https: ${this}`);
        }
        if (op(Op.EQUALS,this._host,null) || op(Op.EQUALS,this._host,"")) {
            throw new StateError(`A ${this.scheme}: URI should have a non-empty host name: ${this}`);
        }
        if (op(Op.EQUALS,this._port,null)) return `${this.scheme}://${this._host}`;
        return `${this.scheme}://${this._host}:${this._port}`;
    }
    toFilePath(_namedArguments? : {windows? : bool}) : String {
        let {windows} = Object.assign({
        }, _namedArguments );
        if (this.scheme != "" && this.scheme != "file") {
            throw new UnsupportedError(`Cannot extract a file path from a ${this.scheme} URI`);
        }
        if (this.query != "") {
            throw new UnsupportedError("Cannot extract a file path from a URI with a query component");
        }
        if (this.fragment != "") {
            throw new UnsupportedError("Cannot extract a file path from a URI with a fragment component");
        }
        if (op(Op.EQUALS,windows,null)) windows = _Uri._isWindows;
        return windows ? _Uri._toWindowsFilePath(this) : this._toFilePath();
    }
    _toFilePath() : String {
        if (this.hasAuthority && this.host != "") {
            throw new UnsupportedError("Cannot extract a non-Windows file path from a file URI " + "with an authority");
        }
        let pathSegments = this.pathSegments;
        _Uri._checkNonWindowsPathReservedCharacters(pathSegments,false);
        let result = new StringBuffer();
        if (this.hasAbsolutePath) result.write("/");
        result.writeAll(pathSegments,"/");
        return result.toString();
    }
    static _toWindowsFilePath(uri : Uri) : String {
        let hasDriveLetter : bool = false;
        let segments = uri.pathSegments;
        if (op(Op.GT,segments.length,0) && op(Op.EQUALS,segments[0].length,2) && op(Op.EQUALS,segments[0].codeUnitAt(1),properties._COLON)) {
            _Uri._checkWindowsDriveLetter(segments[0].codeUnitAt(0),false);
            _Uri._checkWindowsPathReservedCharacters(segments,false,1);
            hasDriveLetter = true;
        }else {
            _Uri._checkWindowsPathReservedCharacters(segments,false,0);
        }
        let result = new StringBuffer();
        if (uri.hasAbsolutePath && !hasDriveLetter) result.write("\");
        if (uri.hasAuthority) {
            let host = uri.host;
            if (host.isNotEmpty) {
                result.write("\");
                result.write(host);
                result.write("\");
            }
        }
        result.writeAll(segments,"\");
        if (hasDriveLetter && op(Op.EQUALS,segments.length,1)) result.write("\");
        return result.toString();
    }
    get _isPathAbsolute() : bool {
        return this.path != null && this.path.startsWith('/');
    }
    _writeAuthority(ss : StringSink) : void {
        if (this._userInfo.isNotEmpty) {
            ss.write(this._userInfo);
            ss.write("@");
        }
        if (this._host != null) ss.write(this._host);
        if (this._port != null) {
            ss.write(":");
            ss.write(this._port);
        }
    }
    get data() : UriData {
        return (op(Op.EQUALS,this.scheme,"data")) ? new UriData.fromUri(this) : null;
    }
    toString() : String {
        return this._text = ( this._text ) || ( this._initializeText() );
    }
    _initializeText() : String {
        /* TODO (AssertStatementImpl) : assert (_text == null); */;
        let sb : StringBuffer = new StringBuffer();
        if (this.scheme.isNotEmpty) ((_) : StringBuffer =>  {
            {
                _.write(this.scheme);
                _.write(":");
                return _;
            }
        })(sb);
        if (this.hasAuthority || (op(Op.EQUALS,this.scheme,"file"))) {
            sb.write("//");
            this._writeAuthority(sb);
        }
        sb.write(this.path);
        if (this._query != null) ((_) : StringBuffer =>  {
            {
                _.write("?");
                _.write(this._query);
                return _;
            }
        })(sb);
        if (this._fragment != null) ((_) : StringBuffer =>  {
            {
                _.write("#");
                _.write(this._fragment);
                return _;
            }
        })(sb);
        return sb.toString();
    }
    [OperatorMethods.EQUALS](other : any) : bool {
        if (identical(this,other)) return true;
        if (is(other, Uri)) {
            let uri : Uri = other;
            return op(Op.EQUALS,this.scheme,uri.scheme) && op(Op.EQUALS,this.hasAuthority,uri.hasAuthority) && op(Op.EQUALS,this.userInfo,uri.userInfo) && op(Op.EQUALS,this.host,uri.host) && op(Op.EQUALS,this.port,uri.port) && op(Op.EQUALS,this.path,uri.path) && op(Op.EQUALS,this.hasQuery,uri.hasQuery) && op(Op.EQUALS,this.query,uri.query) && op(Op.EQUALS,this.hasFragment,uri.hasFragment) && op(Op.EQUALS,this.fragment,uri.fragment);
        }
        return false;
    }
    get hashCode() : int {
        return this._hashCodeCache = ( this._hashCodeCache ) || ( this.toString().hashCode );
    }
    static _createList() : List<any> {
        return new core.DartList.literal();
    }
    static _splitQueryStringAll(query : String,_namedArguments? : {encoding? : convert.Encoding}) : Map<any,any> {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        let result : Map<any,any> = new core.DartMap.literal([
        ]);
        let i : int = 0;
        let start : int = 0;
        let equalsIndex : int = -1;
        var parsePair : (start : int,equalsIndex : int,end : int) => void = (start : int,equalsIndex : int,end : int) : void =>  {
            let key : String;
            let value : String;
            if (op(Op.EQUALS,start,end)) return;
            if (op(Op.LT,equalsIndex,0)) {
                key = _Uri._uriDecode(query,start,end,encoding,true);
                value = "";
            }else {
                key = _Uri._uriDecode(query,start,equalsIndex,encoding,true);
                value = _Uri._uriDecode(query,op(Op.PLUS,equalsIndex,1),end,encoding,true);
            }
            result.putIfAbsent(key,_Uri._createList.bind(this)).add(value);
        };
        while (op(Op.LT,i,query.length)){
            let char : int = query.codeUnitAt(i);
            if (op(Op.EQUALS,char,properties._EQUALS)) {
                if (op(Op.LT,equalsIndex,0)) equalsIndex = i;
            }else if (op(Op.EQUALS,char,properties._AMPERSAND)) {
                parsePair(start,equalsIndex,i);
                start = op(Op.PLUS,i,1);
                equalsIndex = -1;
            }
            i++;
        }
        parsePair(start,equalsIndex,i);
        return result;
    }
    static _uriEncode(canonicalTable : List<int>,text : String,encoding : convert.Encoding,spaceToPlus : bool) : String {
    }
    static _hexCharPairToByte(s : String,pos : int) : int {
        let byte : int = 0;
        for(let i : int = 0; op(Op.LT,i,2); i++){
            let charCode = s.codeUnitAt(op(Op.PLUS,pos,i));
            if (48 <= charCode && op(Op.LEQ,charCode,57)) {
                byte = op(Op.MINUS,op(Op.PLUS,op(Op.TIMES,byte,16),charCode),48);
            }else {
                charCode |= 32;
                if (97 <= charCode && op(Op.LEQ,charCode,102)) {
                    byte = op(Op.MINUS,op(Op.PLUS,op(Op.TIMES,byte,16),charCode),87);
                }else {
                    throw new ArgumentError("Invalid URL encoding");
                }
            }
        }
        return byte;
    }
    static _uriDecode(text : String,start : int,end : int,encoding : convert.Encoding,plusToSpace : bool) : String {
        /* TODO (AssertStatementImpl) : assert (0 <= start); */;
        /* TODO (AssertStatementImpl) : assert (start <= end); */;
        /* TODO (AssertStatementImpl) : assert (end <= text.length); */;
        /* TODO (AssertStatementImpl) : assert (encoding != null); */;
        let simple : bool = true;
        for(let i : int = start; op(Op.LT,i,end); i++){
            let codeUnit = text.codeUnitAt(i);
            if (op(Op.GT,codeUnit,127) || op(Op.EQUALS,codeUnit,properties._PERCENT) || (plusToSpace && op(Op.EQUALS,codeUnit,properties._PLUS))) {
                simple = false;
                break;
            }
        }
        let bytes : List<int>;
        if (simple) {
            if (op(Op.EQUALS,convert.properties.UTF8,encoding) || op(Op.EQUALS,convert.properties.LATIN1,encoding) || op(Op.EQUALS,convert.properties.ASCII,encoding)) {
                return text.substring(start,end);
            }else {
                bytes = text.substring(start,end).codeUnits;
            }
        }else {
            bytes = new List<any>();
            for(let i : int = start; op(Op.LT,i,end); i++){
                let codeUnit = text.codeUnitAt(i);
                if (op(Op.GT,codeUnit,127)) {
                    throw new ArgumentError("Illegal percent encoding in URI");
                }
                if (op(Op.EQUALS,codeUnit,properties._PERCENT)) {
                    if (op(Op.GT,op(Op.PLUS,i,3),text.length)) {
                        throw new ArgumentError('Truncated URI');
                    }
                    bytes.add(_Uri._hexCharPairToByte(text,op(Op.PLUS,i,1)));
                    i += 2;
                }else if (plusToSpace && op(Op.EQUALS,codeUnit,properties._PLUS)) {
                    bytes.add(properties._SPACE);
                }else {
                    bytes.add(codeUnit);
                }
            }
        }
        return encoding.decode(bytes);
    }
    static _isAlphabeticCharacter(codeUnit : int) : bool {
        let lowerCase = op(Op.BITOR,codeUnit,32);
        return (op(Op.LEQ,properties._LOWER_CASE_A,lowerCase) && op(Op.LEQ,lowerCase,properties._LOWER_CASE_Z));
    }
    static _isUnreservedChar(char : int) : bool {
        return op(Op.LT,char,127) && ((op(Op.BITAND,op(Op.INDEX,_Uri._unreservedTable,op(Op.SHIFTRIGHT,char,4)),(1 << (op(Op.BITAND,char,15))))) != 0);
    }
    private static __$_unreservedTable;
    static get _unreservedTable() { 
        if (this.__$_unreservedTable===undefined) {
            this.__$_unreservedTable = new core.DartList.literal(0,0,24576,1023,65534,34815,65534,18431);
        }
        return this.__$_unreservedTable;
    }

    private static __$_unreserved2396Table;
    static get _unreserved2396Table() { 
        if (this.__$_unreserved2396Table===undefined) {
            this.__$_unreserved2396Table = new core.DartList.literal(0,0,26498,1023,65534,34815,65534,18431);
        }
        return this.__$_unreserved2396Table;
    }

    private static __$_encodeFullTable;
    static get _encodeFullTable() { 
        if (this.__$_encodeFullTable===undefined) {
            this.__$_encodeFullTable = new core.DartList.literal(0,0,65498,45055,65535,34815,65534,18431);
        }
        return this.__$_encodeFullTable;
    }

    private static __$_schemeTable;
    static get _schemeTable() { 
        if (this.__$_schemeTable===undefined) {
            this.__$_schemeTable = new core.DartList.literal(0,0,26624,1023,65534,2047,65534,2047);
        }
        return this.__$_schemeTable;
    }

    private static __$_schemeLowerTable;
    static get _schemeLowerTable() { 
        if (this.__$_schemeLowerTable===undefined) {
            this.__$_schemeLowerTable = new core.DartList.literal(0,0,26624,1023,0,0,65534,2047);
        }
        return this.__$_schemeLowerTable;
    }

    private static __$_subDelimitersTable;
    static get _subDelimitersTable() { 
        if (this.__$_subDelimitersTable===undefined) {
            this.__$_subDelimitersTable = new core.DartList.literal(0,0,32722,11263,65534,34815,65534,18431);
        }
        return this.__$_subDelimitersTable;
    }

    private static __$_genDelimitersTable;
    static get _genDelimitersTable() { 
        if (this.__$_genDelimitersTable===undefined) {
            this.__$_genDelimitersTable = new core.DartList.literal(0,0,32776,33792,1,10240,0,0);
        }
        return this.__$_genDelimitersTable;
    }

    private static __$_userinfoTable;
    static get _userinfoTable() { 
        if (this.__$_userinfoTable===undefined) {
            this.__$_userinfoTable = new core.DartList.literal(0,0,32722,12287,65534,34815,65534,18431);
        }
        return this.__$_userinfoTable;
    }

    private static __$_regNameTable;
    static get _regNameTable() { 
        if (this.__$_regNameTable===undefined) {
            this.__$_regNameTable = new core.DartList.literal(0,0,32754,11263,65534,34815,65534,18431);
        }
        return this.__$_regNameTable;
    }

    private static __$_pathCharTable;
    static get _pathCharTable() { 
        if (this.__$_pathCharTable===undefined) {
            this.__$_pathCharTable = new core.DartList.literal(0,0,32722,12287,65535,34815,65534,18431);
        }
        return this.__$_pathCharTable;
    }

    private static __$_pathCharOrSlashTable;
    static get _pathCharOrSlashTable() { 
        if (this.__$_pathCharOrSlashTable===undefined) {
            this.__$_pathCharOrSlashTable = new core.DartList.literal(0,0,65490,12287,65535,34815,65534,18431);
        }
        return this.__$_pathCharOrSlashTable;
    }

    private static __$_queryCharTable;
    static get _queryCharTable() { 
        if (this.__$_queryCharTable===undefined) {
            this.__$_queryCharTable = new core.DartList.literal(0,0,65490,45055,65535,34815,65534,18431);
        }
        return this.__$_queryCharTable;
    }

}

export namespace Invocation {
    export type Constructors = 'Invocation';
    export type Interface = Omit<Invocation, Constructors>;
}
@DartClass
export class Invocation {
    @AbstractProperty
    get memberName() : Symbol{ throw 'abstract'}
    @AbstractProperty
    get positionalArguments() : List<any>{ throw 'abstract'}
    @AbstractProperty
    get namedArguments() : Map<Symbol,any>{ throw 'abstract'}
    @AbstractProperty
    get isMethod() : bool{ throw 'abstract'}
    @AbstractProperty
    get isGetter() : bool{ throw 'abstract'}
    @AbstractProperty
    get isSetter() : bool{ throw 'abstract'}
    get isAccessor() : bool {
        return this.isGetter || this.isSetter;
    }
    constructor() {
    }
    @defaultConstructor
    Invocation() {
    }
}

export namespace Iterable {
    export type Constructors = 'Iterable';
    export type Interface<E> = Omit<Iterable<E>, Constructors>;
}
@DartClass
export class Iterable<E> {
    constructor() {
    }
    @defaultConstructor
    Iterable() {
    }
    @namedFactory
    static $generate<E>(count : int,generator? : <E>(index : int) => E) : Iterable<E> {
        if (op(Op.LEQ,count,0)) return new _internal.EmptyIterable<E>();
        return new _GeneratorIterable<E>(count,generator);
    }
    static generate : new<E>(count : int,generator : <E>(index : int) => E) => Iterable<E>;

    @namedFactory
    static $empty<E>() : Iterable<E> {
        return new _internal.EmptyIterable<E>();
    }
    static empty : new<E>() => Iterable<E>;

    @AbstractProperty
    get iterator() : Iterator<E>{ throw 'abstract'}
    map<T>(f : <T,E>(e : E) => T) : Iterable<T> {
        return new _internal.MappedIterable<E,T>(this,f);
    }
    where(test : <E>(element : E) => bool) : Iterable<E> {
        return new _internal.WhereIterable<E>(this,test);
    }
    expand<T>(f : <T,E>(element : E) => Iterable<T>) : Iterable<T> {
        return new _internal.ExpandIterable<E,T>(this,f);
    }
    contains(element : Object) : bool {
        for(let e of this) {
            if (op(Op.EQUALS,e,element)) return true;
        }
        return false;
    }
    forEach(f : <E>(element : E) => void) : void {
        for(let element of this) f(element);
    }
    reduce(combine : <E>(value : E,element : E) => E) : E {
        let iterator : Iterator<E> = this.iterator;
        if (!iterator.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        let value : E = iterator.current;
        while (iterator.moveNext()){
            value = combine(value,iterator.current);
        }
        return value;
    }
    fold<T>(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        let value = initialValue;
        for(let element of this) value = combine(value,element);
        return value;
    }
    every(f : <E>(element : E) => bool) : bool {
        for(let element of this) {
            if (!f(element)) return false;
        }
        return true;
    }
    join(separator? : String) : String {
        separator = separator || "";
        let iterator : Iterator<E> = this.iterator;
        if (!iterator.moveNext()) return "";
        let buffer : StringBuffer = new StringBuffer();
        if (op(Op.EQUALS,separator,null) || op(Op.EQUALS,separator,"")) {
            do{
                buffer.write(`${iterator.current}`);
            } while (iterator.moveNext());
        }else {
            buffer.write(`${iterator.current}`);
            while (iterator.moveNext()){
                buffer.write(separator);
                buffer.write(`${iterator.current}`);
            }
        }
        return buffer.toString();
    }
    any(f : <E>(element : E) => bool) : bool {
        for(let element of this) {
            if (f(element)) return true;
        }
        return false;
    }
    toList(_namedArguments? : {growable? : bool}) : List<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        return new List.from(this,{
            growable : growable});
    }
    toSet() : Set<E> {
        return new Set.from(this);
    }
    get length() : int {
        /* TODO (AssertStatementImpl) : assert (this is! EfficientLengthIterable); */;
        let count : int = 0;
        let it : Iterator<any> = this.iterator;
        while (it.moveNext()){
            count++;
        }
        return count;
    }
    get isEmpty() : bool {
        return !this.iterator.moveNext();
    }
    get isNotEmpty() : bool {
        return !this.isEmpty;
    }
    take(count : int) : Iterable<E> {
        return new _internal.TakeIterable<E>(this,count);
    }
    takeWhile(test : <E>(value : E) => bool) : Iterable<E> {
        return new _internal.TakeWhileIterable<E>(this,test);
    }
    skip(count : int) : Iterable<E> {
        return new _internal.SkipIterable<E>(this,count);
    }
    skipWhile(test : <E>(value : E) => bool) : Iterable<E> {
        return new _internal.SkipWhileIterable<E>(this,test);
    }
    get first() : E {
        let it : Iterator<E> = this.iterator;
        if (!it.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        return it.current;
    }
    get last() : E {
        let it : Iterator<E> = this.iterator;
        if (!it.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        let result : E;
        do{
            result = it.current;
        } while (it.moveNext());
        return result;
    }
    get single() : E {
        let it : Iterator<E> = this.iterator;
        if (!it.moveNext()) throw _internal.IterableElementError.noElement();
        let result : E = it.current;
        if (it.moveNext()) throw _internal.IterableElementError.tooMany();
        return result;
    }
    firstWhere(test : <E>(element : E) => bool,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        for(let element of this) {
            if (test(element)) return element;
        }
        if (orElse != null) return orElse();
        throw _internal.IterableElementError.noElement();
    }
    lastWhere(test : <E>(element : E) => bool,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        let result : E = null;
        let foundMatching : bool = false;
        for(let element of this) {
            if (test(element)) {
                result = element;
                foundMatching = true;
            }
        }
        if (foundMatching) return result;
        if (orElse != null) return orElse();
        throw _internal.IterableElementError.noElement();
    }
    singleWhere(test : <E>(element : E) => bool) : E {
        let result : E = null;
        let foundMatching : bool = false;
        for(let element of this) {
            if (test(element)) {
                if (foundMatching) {
                    throw _internal.IterableElementError.tooMany();
                }
                result = element;
                foundMatching = true;
            }
        }
        if (foundMatching) return result;
        throw _internal.IterableElementError.noElement();
    }
    elementAt(index : int) : E {
        if (isNot(index, int)) throw new ArgumentError.notNull("index");
        RangeError.checkNotNegative(index,"index");
        let elementIndex : int = 0;
        for(let element of this) {
            if (op(Op.EQUALS,index,elementIndex)) return element;
            elementIndex++;
        }
        throw new RangeError.index(index,this,"index",null,elementIndex);
    }
    toString() : String {
        return core.DartIterableBase.iterableToShortString(this,'(',')');
    }
}

export namespace _GeneratorIterable {
    export type Constructors = _internal.ListIterable.Constructors | '_GeneratorIterable';
    export type Interface<E> = Omit<_GeneratorIterable<E>, Constructors>;
}
@DartClass
export class _GeneratorIterable<E> extends _internal.ListIterable<E> {
    length : int;

    _generator : <E>(index : int) => E;

    constructor(length : int,generator : <E>(index : int) => E) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _GeneratorIterable(length : int,generator : <E>(index : int) => E) {
        this._generator = (generator != null) ? generator : _GeneratorIterable._id.bind(this) as <E>(index : int) => E;
        this.length = length;
    }
    elementAt(index : int) : E {
        RangeError.checkValidIndex(index,this);
        return this._generator(index);
    }
    static _id(n : int) : int {
        return n;
    }
}

export namespace BidirectionalIterator {
    export type Constructors = 'BidirectionalIterator';
    export type Interface<E> = Omit<BidirectionalIterator<E>, Constructors>;
}
@DartClass
@Implements(Iterator)
export class BidirectionalIterator<E> implements Iterator.Interface<E> {
    @Abstract
    movePrevious() : bool{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    BidirectionalIterator() {
    }
}

export namespace UriData {
    export type Constructors = '_';
    export type Interface = Omit<UriData, Constructors>;
}
@DartClass
export class UriData {
    private static __$_noScheme : int;
    static get _noScheme() : int { 
        if (this.__$_noScheme===undefined) {
            this.__$_noScheme = -1;
        }
        return this.__$_noScheme;
    }

    _text : String;

    _separatorIndices : List<int>;

    _uriCache : Uri;

    @namedConstructor
    _(_text : String,_separatorIndices : List<int>,_uriCache : Uri) {
        this._text = _text;
        this._separatorIndices = _separatorIndices;
        this._uriCache = _uriCache;
    }
    static _ : new(_text : String,_separatorIndices : List<int>,_uriCache : Uri) => UriData;

    @namedFactory
    static $fromString(content : String,_namedArguments? : {mimeType? : String,encoding? : convert.Encoding,parameters? : Map<String,String>,base64? : bool}) : UriData {
        let {mimeType,encoding,parameters,base64} = Object.assign({
            "base64" : false}, _namedArguments );
        let buffer : StringBuffer = new StringBuffer();
        let indices : List<int> = new core.DartList.literal(UriData._noScheme);
        let charsetName : String;
        let encodingName : String;
        if (parameters != null) charsetName = parameters["charset"];
        if (op(Op.EQUALS,encoding,null)) {
            if (charsetName != null) {
                encoding = convert.Encoding.getByName(charsetName);
            }
        }else if (op(Op.EQUALS,charsetName,null)) {
            encodingName = encoding.name;
        }
        encoding = ( encoding ) || ( convert.properties.ASCII );
        UriData._writeUri(mimeType,encodingName,parameters,buffer,indices);
        indices.add(buffer.length);
        if (base64) {
            buffer.write(';base64,');
            indices.add(op(Op.MINUS,buffer.length,1));
            buffer.write(encoding.fuse(convert.properties.BASE64).encode(content));
        }else {
            buffer.write(',');
            UriData._uriEncodeBytes(UriData._uricTable,encoding.encode(content),buffer);
        }
        return new UriData._(buffer.toString(),indices,null);
    }
    static fromString : new(content : String,_namedArguments? : {mimeType? : String,encoding? : convert.Encoding,parameters? : Map<String,String>,base64? : bool}) => UriData;

    @namedFactory
    static $fromBytes(bytes : List<int>,_namedArguments? : {mimeType? : any,parameters? : Map<String,String>,percentEncoded? : any}) : UriData {
        let {mimeType,parameters,percentEncoded} = Object.assign({
            "mimeType" : "application/octet-stream",
            "percentEncoded" : false}, _namedArguments );
        let buffer : StringBuffer = new StringBuffer();
        let indices : List<int> = new core.DartList.literal(UriData._noScheme);
        UriData._writeUri(mimeType,null,parameters,buffer,indices);
        indices.add(buffer.length);
        if (percentEncoded) {
            buffer.write(',');
            UriData._uriEncodeBytes(UriData._uricTable,bytes,buffer);
        }else {
            buffer.write(';base64,');
            indices.add(op(Op.MINUS,buffer.length,1));
            convert.properties.BASE64.encoder.startChunkedConversion(new convert.StringConversionSink.fromStringSink(buffer)).addSlice(bytes,0,bytes.length,true);
        }
        return new UriData._(buffer.toString(),indices,null);
    }
    static fromBytes : new(bytes : List<int>,_namedArguments? : {mimeType? : any,parameters? : Map<String,String>,percentEncoded? : any}) => UriData;

    @namedFactory
    static $fromUri(uri : Uri) : UriData {
        if (uri.scheme != "data") {
            throw new ArgumentError.value(uri,"uri","Scheme must be 'data'");
        }
        if (uri.hasAuthority) {
            throw new ArgumentError.value(uri,"uri","Data uri must not have authority");
        }
        if (uri.hasFragment) {
            throw new ArgumentError.value(uri,"uri","Data uri must not have a fragment part");
        }
        if (!uri.hasQuery) {
            return UriData._parse(uri.path,0,uri);
        }
        return UriData._parse(`${uri}`,5,uri);
    }
    static fromUri : new(uri : Uri) => UriData;

    static _writeUri(mimeType : String,charsetName : String,parameters : Map<String,String>,buffer : StringBuffer,indices : List<any>) : void {
        if (op(Op.EQUALS,mimeType,null) || op(Op.EQUALS,mimeType,"text/plain")) {
            mimeType = "";
        }
        if (mimeType.isEmpty || identical(mimeType,"application/octet-stream")) {
            buffer.write(mimeType);
        }else {
            let slashIndex : int = UriData._validateMimeType(mimeType);
            if (op(Op.LT,slashIndex,0)) {
                throw new ArgumentError.value(mimeType,"mimeType","Invalid MIME type");
            }
            buffer.write(_Uri._uriEncode(UriData._tokenCharTable,mimeType.substring(0,slashIndex),convert.properties.UTF8,false));
            buffer.write("/");
            buffer.write(_Uri._uriEncode(UriData._tokenCharTable,mimeType.substring(op(Op.PLUS,slashIndex,1)),convert.properties.UTF8,false));
        }
        if (charsetName != null) {
            if (indices != null) {
                ((_) : List<any> =>  {
                    {
                        _.add(buffer.length);
                        _.add(op(Op.PLUS,buffer.length,8));
                        return _;
                    }
                })(indices);
            }
            buffer.write(";charset=");
            buffer.write(_Uri._uriEncode(UriData._tokenCharTable,charsetName,convert.properties.UTF8,false));
        }
        ((_518_)=>(!!_518_)?_518_.forEach((key : any,value : any) =>  {
            if (key.isEmpty) {
                throw new ArgumentError.value("","Parameter names must not be empty");
            }
            if (value.isEmpty) {
                throw new ArgumentError.value("","Parameter values must not be empty",`parameters["${key}"]`);
            }
            if (indices != null) indices.add(buffer.length);
            buffer.write(';');
            buffer.write(_Uri._uriEncode(UriData._tokenCharTable,key,convert.properties.UTF8,false));
            if (indices != null) indices.add(buffer.length);
            buffer.write('=');
            buffer.write(_Uri._uriEncode(UriData._tokenCharTable,value,convert.properties.UTF8,false));
        }):null)(parameters);
    }
    static _validateMimeType(mimeType : String) : int {
        let slashIndex : int = -1;
        for(let i : int = 0; op(Op.LT,i,mimeType.length); i++){
            let char = mimeType.codeUnitAt(i);
            if (char != properties._SLASH) continue;
            if (op(Op.LT,slashIndex,0)) {
                slashIndex = i;
                continue;
            }
            return -1;
        }
        return slashIndex;
    }
    static parse(uri : String) : UriData {
        if (op(Op.GEQ,uri.length,5)) {
            let dataDelta : int = _startsWithData(uri,0);
            if (op(Op.EQUALS,dataDelta,0)) {
                return UriData._parse(uri,5,null);
            }
            if (op(Op.EQUALS,dataDelta,32)) {
                return UriData._parse(uri.substring(5),0,null);
            }
        }
        throw new FormatException("Does not start with 'data:'",uri,0);
    }
    get uri() : Uri {
        if (this._uriCache != null) return this._uriCache;
        let path : String = this._text;
        let query : String = null;
        let colonIndex : int = this._separatorIndices[0];
        let queryIndex : int = this._text.indexOf('?',op(Op.PLUS,colonIndex,1));
        let end : int = this._text.length;
        if (op(Op.GEQ,queryIndex,0)) {
            query = _Uri._normalizeOrSubstring(this._text,op(Op.PLUS,queryIndex,1),end,_Uri._queryCharTable);
            end = queryIndex;
        }
        path = _Uri._normalizeOrSubstring(this._text,op(Op.PLUS,colonIndex,1),end,_Uri._pathCharOrSlashTable);
        this._uriCache = new _DataUri(this,path,query);
        return this._uriCache;
    }
    get mimeType() : String {
        let start : int = op(Op.PLUS,this._separatorIndices[0],1);
        let end : int = this._separatorIndices[1];
        if (op(Op.EQUALS,start,end)) return "text/plain";
        return _Uri._uriDecode(this._text,start,end,convert.properties.UTF8,false);
    }
    get charset() : String {
        let parameterStart : int = 1;
        let parameterEnd : int = op(Op.MINUS,this._separatorIndices.length,1);
        if (this.isBase64) {
            parameterEnd -= 1;
        }
        for(let i : int = parameterStart; op(Op.LT,i,parameterEnd); i += 2){
            let keyStart = op(Op.PLUS,this._separatorIndices[i],1);
            let keyEnd = this._separatorIndices[op(Op.PLUS,i,1)];
            if (op(Op.EQUALS,keyEnd,op(Op.PLUS,keyStart,7)) && this._text.startsWith("charset",keyStart)) {
                return _Uri._uriDecode(this._text,op(Op.PLUS,keyEnd,1),this._separatorIndices[op(Op.PLUS,i,2)],convert.properties.UTF8,false);
            }
        }
        return "US-ASCII";
    }
    get isBase64() : bool {
        return this._separatorIndices.length.isOdd;
    }
    get contentText() : String {
        return this._text.substring(op(Op.PLUS,this._separatorIndices.last,1));
    }
    contentAsBytes() : List<int> {
        let text : String = this._text;
        let start : int = op(Op.PLUS,this._separatorIndices.last,1);
        if (this.isBase64) {
            return convert.properties.BASE64.decoder.convert(text,start);
        }
        let percent : int = 37;
        let length : int = op(Op.MINUS,text.length,start);
        for(let i : int = start; op(Op.LT,i,text.length); i++){
            let codeUnit = text.codeUnitAt(i);
            if (op(Op.EQUALS,codeUnit,percent)) {
                i += 2;
                length -= 2;
            }
        }
        let result : typed_data.Uint8List = new typed_data.Uint8List(length);
        if (op(Op.EQUALS,length,text.length)) {
            result.setRange(0,length,text.codeUnits,start);
            return result;
        }
        let index : int = 0;
        for(let i : int = start; op(Op.LT,i,text.length); i++){
            let codeUnit = text.codeUnitAt(i);
            if (codeUnit != percent) {
                op(Op.INDEX_ASSIGN,result,index++,codeUnit);
            }else {
                if (op(Op.LT,op(Op.PLUS,i,2),text.length)) {
                    let byte : int = _internal.parseHexByte(text,op(Op.PLUS,i,1));
                    if (op(Op.GEQ,byte,0)) {
                        op(Op.INDEX_ASSIGN,result,index++,byte);
                        i += 2;
                        continue;
                    }
                }
                throw new FormatException("Invalid percent escape",text,i);
            }
        }
        /* TODO (AssertStatementImpl) : assert (index == result.length); */;
        return result;
    }
    contentAsString(_namedArguments? : {encoding? : convert.Encoding}) : String {
        let {encoding} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,encoding,null)) {
            let charset = this.charset;
            encoding = convert.Encoding.getByName(charset);
            if (op(Op.EQUALS,encoding,null)) {
                throw new UnsupportedError(`Unknown charset: ${charset}`);
            }
        }
        let text : String = this._text;
        let start : int = op(Op.PLUS,this._separatorIndices.last,1);
        if (this.isBase64) {
            let converter = convert.properties.BASE64.decoder.fuse(encoding.decoder);
            return converter.convert(text.substring(start));
        }
        return _Uri._uriDecode(text,start,text.length,encoding,false);
    }
    get parameters() : Map<String,String> {
        let result = new core.DartMap.literal([
        ]);
        for(let i : int = 3; op(Op.LT,i,this._separatorIndices.length); i += 2){
            let start = op(Op.PLUS,this._separatorIndices[op(Op.MINUS,i,2)],1);
            let equals = this._separatorIndices[op(Op.MINUS,i,1)];
            let end = this._separatorIndices[i];
            let key : String = _Uri._uriDecode(this._text,start,equals,convert.properties.UTF8,false);
            let value : String = _Uri._uriDecode(this._text,op(Op.PLUS,equals,1),end,convert.properties.UTF8,false);
            result.set(key,value);
        }
        return result;
    }
    static _parse(text : String,start : int,sourceUri : Uri) : UriData {
        /* TODO (AssertStatementImpl) : assert (start == 0 || start == 5); */;
        /* TODO (AssertStatementImpl) : assert ((start == 5) == text.startsWith("data:")); */;
        let comma : int = 44;
        let slash : int = 47;
        let semicolon : int = 59;
        let equals : int = 61;
        let indices : List<int> = new core.DartList.literal(op(Op.MINUS,start,1));
        let slashIndex : int = -1;
        let char;
        let i : int = start;
        for(; op(Op.LT,i,text.length); i++){
            char = text.codeUnitAt(i);
            if (op(Op.EQUALS,char,comma) || op(Op.EQUALS,char,semicolon)) break;
            if (op(Op.EQUALS,char,slash)) {
                if (op(Op.LT,slashIndex,0)) {
                    slashIndex = i;
                    continue;
                }
                throw new FormatException("Invalid MIME type",text,i);
            }
        }
        if (op(Op.LT,slashIndex,0) && op(Op.GT,i,start)) {
            throw new FormatException("Invalid MIME type",text,i);
        }
        while (char != comma){
            indices.add(i);
            i++;
            let equalsIndex : int = -1;
            for(; op(Op.LT,i,text.length); i++){
                char = text.codeUnitAt(i);
                if (op(Op.EQUALS,char,equals)) {
                    if (op(Op.LT,equalsIndex,0)) equalsIndex = i;
                }else if (op(Op.EQUALS,char,semicolon) || op(Op.EQUALS,char,comma)) {
                    break;
                }
            }
            if (op(Op.GEQ,equalsIndex,0)) {
                indices.add(equalsIndex);
            }else {
                let lastSeparator = indices.last;
                if (char != comma || i != op(Op.PLUS,lastSeparator,7) || !text.startsWith("base64",op(Op.PLUS,lastSeparator,1))) {
                    throw new FormatException("Expecting '='",text,i);
                }
                break;
            }
        }
        indices.add(i);
        let isBase64 : bool = indices.length.isOdd;
        if (isBase64) {
            text = convert.properties.BASE64.normalize(text,op(Op.PLUS,i,1),text.length);
        }else {
            let data = _Uri._normalize(text,op(Op.PLUS,i,1),text.length,UriData._uricTable,{
                escapeDelimiters : true});
            if (data != null) {
                text = text.replaceRange(op(Op.PLUS,i,1),text.length,data);
            }
        }
        return new UriData._(text,indices,sourceUri);
    }
    static _uriEncodeBytes(canonicalTable : List<int>,bytes : List<int>,buffer : StringSink) : void {
        let byteOr : int = 0;
        for(let i : int = 0; op(Op.LT,i,bytes.length); i++){
            let byte : int = bytes[i];
            byteOr |= byte;
            if (op(Op.LT,byte,128) && ((op(Op.BITAND,canonicalTable[op(Op.SHIFTRIGHT,byte,4)],(1 << (op(Op.BITAND,byte,15))))) != 0)) {
                buffer.writeCharCode(byte);
            }else {
                buffer.writeCharCode(properties._PERCENT);
                buffer.writeCharCode(properties._hexDigits.codeUnitAt(op(Op.SHIFTRIGHT,byte,4)));
                buffer.writeCharCode(properties._hexDigits.codeUnitAt(op(Op.BITAND,byte,15)));
            }
        }
        if ((op(Op.BITAND,byteOr,~255)) != 0) {
            for(let i : int = 0; op(Op.LT,i,bytes.length); i++){
                let byte = bytes[i];
                if (op(Op.LT,byte,0) || op(Op.GT,byte,255)) {
                    throw new ArgumentError.value(byte,"non-byte value");
                }
            }
        }
    }
    toString() : String {
        return (op(Op.EQUALS,this._separatorIndices[0],UriData._noScheme)) ? `data:${this._text}` : this._text;
    }
    private static __$_tokenCharTable;
    static get _tokenCharTable() { 
        if (this.__$_tokenCharTable===undefined) {
            this.__$_tokenCharTable = new core.DartList.literal(0,0,27858,1023,65534,51199,65535,32767);
        }
        return this.__$_tokenCharTable;
    }

    private static __$_uricTable;
    static get _uricTable() { 
        if (this.__$_uricTable===undefined) {
            this.__$_uricTable = _Uri._queryCharTable;
        }
        return this.__$_uricTable;
    }

    private static __$_base64Table;
    static get _base64Table() { 
        if (this.__$_base64Table===undefined) {
            this.__$_base64Table = new core.DartList.literal(0,0,34816,1023,65534,2047,65534,2047);
        }
        return this.__$_base64Table;
    }

}

export namespace int {
    export type Constructors = num.Constructors | never;
    export type Interface = Omit<int, Constructors>;
}
@DartClass
export class int extends num {
    @namedFactory
    static $fromEnvironment(name : String,_namedArguments? : {defaultValue? : int}) : int {
        let {defaultValue} = Object.assign({
        }, _namedArguments );
    }
    static fromEnvironment : new(name : String,_namedArguments? : {defaultValue? : int}) => int;

    @Abstract
    [OperatorMethods.BINARY_AND](other : int) : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.BINARY_OR](other : int) : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.XOR](other : int) : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.COMPLEMENT]() : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.SHIFTLEFT](shiftAmount : int) : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.SHIFTRIGHT](shiftAmount : int) : int{ throw 'abstract'}
    @Abstract
    modPow(exponent : int,modulus : int) : int{ throw 'abstract'}
    @Abstract
    modInverse(modulus : int) : int{ throw 'abstract'}
    @Abstract
    gcd(other : int) : int{ throw 'abstract'}
    @AbstractProperty
    get isEven() : bool{ throw 'abstract'}
    @AbstractProperty
    get isOdd() : bool{ throw 'abstract'}
    @AbstractProperty
    get bitLength() : int{ throw 'abstract'}
    @Abstract
    toUnsigned(width : int) : int{ throw 'abstract'}
    @Abstract
    toSigned(width : int) : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.NEGATE]() : int{ throw 'abstract'}
    @Abstract
    abs() : int{ throw 'abstract'}
    @AbstractProperty
    get sign() : int{ throw 'abstract'}
    @Abstract
    round() : int{ throw 'abstract'}
    @Abstract
    floor() : int{ throw 'abstract'}
    @Abstract
    ceil() : int{ throw 'abstract'}
    @Abstract
    truncate() : int{ throw 'abstract'}
    @Abstract
    roundToDouble() : double{ throw 'abstract'}
    @Abstract
    floorToDouble() : double{ throw 'abstract'}
    @Abstract
    ceilToDouble() : double{ throw 'abstract'}
    @Abstract
    truncateToDouble() : double{ throw 'abstract'}
    @Abstract
    toString() : String{ throw 'abstract'}
    @Abstract
    toRadixString(radix : int) : String{ throw 'abstract'}
    static parse(source : String,_namedArguments? : {radix? : int,onError? : (source : String) => int}) : int {
        let {radix,onError} = Object.assign({
        }, _namedArguments );
    }
}

export namespace CyclicInitializationError {
    export type Constructors = Error.Constructors | 'CyclicInitializationError';
    export type Interface = Omit<CyclicInitializationError, Constructors>;
}
@DartClass
export class CyclicInitializationError extends Error {
    variableName : String;

    constructor(variableName? : String) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CyclicInitializationError(variableName? : String) {
        this.variableName = variableName;
    }
    toString() : String {
        return op(Op.EQUALS,this.variableName,null) ? "Reading static variable during its initialization" : `Reading static variable '${this.variableName}' during its initialization`;
    }
}

export namespace ConcurrentModificationError {
    export type Constructors = Error.Constructors | 'ConcurrentModificationError';
    export type Interface = Omit<ConcurrentModificationError, Constructors>;
}
@DartClass
export class ConcurrentModificationError extends Error {
    modifiedObject : Object;

    constructor(modifiedObject? : Object) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConcurrentModificationError(modifiedObject? : Object) {
        this.modifiedObject = modifiedObject;
    }
    toString() : String {
        if (op(Op.EQUALS,this.modifiedObject,null)) {
            return "Concurrent modification during iteration.";
        }
        return "Concurrent modification during iteration: " + `${Error.safeToString(this.modifiedObject)}.`;
    }
}

export namespace StateError {
    export type Constructors = Error.Constructors | 'StateError';
    export type Interface = Omit<StateError, Constructors>;
}
@DartClass
export class StateError extends Error {
    message : String;

    constructor(message : String) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StateError(message : String) {
        this.message = message;
    }
    toString() : String {
        return `Bad state: ${this.message}`;
    }
}

export namespace UnimplementedError {
    export type Constructors = Error.Constructors | 'UnimplementedError';
    export type Interface = Omit<UnimplementedError, Constructors>;
}
@DartClass
@Implements(UnsupportedError)
export class UnimplementedError extends Error implements UnsupportedError.Interface {
    message : String;

    constructor(message? : String) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnimplementedError(message? : String) {
        this.message = message;
    }
    toString() : String {
        return (this.message != null ? `UnimplementedError: ${this.message}` : "UnimplementedError");
    }
}

export namespace UnsupportedError {
    export type Constructors = Error.Constructors | 'UnsupportedError';
    export type Interface = Omit<UnsupportedError, Constructors>;
}
@DartClass
export class UnsupportedError extends Error {
    message : String;

    constructor(message : String) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnsupportedError(message : String) {
        this.message = message;
    }
    toString() : String {
        return `Unsupported operation: ${this.message}`;
    }
}

export namespace NoSuchMethodError {
    export type Constructors = Error.Constructors | 'NoSuchMethodError';
    export type Interface = Omit<NoSuchMethodError, Constructors>;
}
@DartClass
export class NoSuchMethodError extends Error {
    _receiver : Object;

    _memberName : Symbol;

    _arguments : List<any>;

    _namedArguments : Map<Symbol,any>;

    _existingArgumentNames : List<any>;

    constructor(receiver : Object,memberName : Symbol,positionalArguments : List<any>,namedArguments : Map<Symbol,any>,existingArgumentNames? : List<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NoSuchMethodError(receiver : Object,memberName : Symbol,positionalArguments : List<any>,namedArguments : Map<Symbol,any>,existingArgumentNames? : List<any>) {
        existingArgumentNames = existingArgumentNames || null;
    }
    toString() : String {
    }
}

export namespace AbstractClassInstantiationError {
    export type Constructors = Error.Constructors | 'AbstractClassInstantiationError';
    export type Interface = Omit<AbstractClassInstantiationError, Constructors>;
}
@DartClass
export class AbstractClassInstantiationError extends Error {
    _className : String;

    constructor(className : String) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractClassInstantiationError(className : String) {
        this._className = className;
    }
    toString() : String {
    }
}

export namespace FallThroughError {
    export type Constructors = Error.Constructors | 'FallThroughError';
    export type Interface = Omit<FallThroughError, Constructors>;
}
@DartClass
export class FallThroughError extends Error {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FallThroughError() {
    }
    toString() : String {
    }
}

export namespace ArgumentError {
    export type Constructors = Error.Constructors | 'ArgumentError' | 'value' | 'notNull';
    export type Interface = Omit<ArgumentError, Constructors>;
}
@DartClass
export class ArgumentError extends Error {
    _hasValue : bool;

    invalidValue;

    name : String;

    message;

    constructor(message? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ArgumentError(message? : any) {
        this.invalidValue = null;
        this._hasValue = false;
        this.name = null;
        this.message = message;
    }
    @namedConstructor
    value(value : any,name? : String,message? : any) {
        this.invalidValue = value;
        this._hasValue = true;
        this.name = name;
        this.message = message;
    }
    static value : new(value : any,name : String,message : any) => ArgumentError;

    @namedConstructor
    notNull(name? : String) {
        this._hasValue = false;
        this.message = "Must not be null";
        this.invalidValue = null;
        this.name = name;
    }
    static notNull : new(name : String) => ArgumentError;

    get _errorName() : String {
        return `Invalid argument${!this._hasValue ? "(s)" : ""}`;
    }
    get _errorExplanation() : String {
        return "";
    }
    toString() : String {
        let nameString : String = "";
        if (this.name != null) {
            nameString = ` (${this.name})`;
        }
        let message = (op(Op.EQUALS,this.message,null)) ? "" : `: ${this.message}`;
        let prefix : String = `${this._errorName}${nameString}${message}`;
        if (!this._hasValue) return prefix;
        let explanation : String = this._errorExplanation;
        let errorValue : String = Error.safeToString(this.invalidValue);
        return `${prefix}${explanation}: ${errorValue}`;
    }
}

export namespace NullThrownError {
    export type Constructors = Error.Constructors | 'NullThrownError';
    export type Interface = Omit<NullThrownError, Constructors>;
}
@DartClass
export class NullThrownError extends Error {
    toString() : String {
        return "Throw of null.";
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullThrownError() {
    }
}

export namespace CastError {
    export type Constructors = Error.Constructors | 'CastError';
    export type Interface = Omit<CastError, Constructors>;
}
@DartClass
export class CastError extends Error {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CastError() {
    }
}

export namespace AssertionError {
    export type Constructors = Error.Constructors | 'AssertionError';
    export type Interface = Omit<AssertionError, Constructors>;
}
@DartClass
export class AssertionError extends Error {
    message : Object;

    constructor(message? : Object) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssertionError(message? : Object) {
        this.message = message;
    }
    toString() : String {
        return "Assertion failed";
    }
}

export namespace _DataUri {
    export type Constructors = _Uri.Constructors | '_DataUri';
    export type Interface = Omit<_DataUri, Constructors>;
}
@DartClass
export class _DataUri extends _Uri {
    _data : UriData;

    constructor(_data : UriData,path : String,query : String) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DataUri(_data : UriData,path : String,query : String) {
        super._internal("data",null,null,null,path,query,null);
        this._data = _data;
    }
    get data() : UriData {
        return this._data;
    }
}

export namespace double {
    export type Constructors = num.Constructors | 'double';
    export type Interface = Omit<double, Constructors>;
}
@DartClass
export class double extends num {
    private static __$NAN : double;
    static get NAN() : double { 
        if (this.__$NAN===undefined) {
            this.__$NAN = 0.0 / 0.0;
        }
        return this.__$NAN;
    }

    private static __$INFINITY : double;
    static get INFINITY() : double { 
        if (this.__$INFINITY===undefined) {
            this.__$INFINITY = 1.0 / 0.0;
        }
        return this.__$INFINITY;
    }

    private static __$NEGATIVE_INFINITY : double;
    static get NEGATIVE_INFINITY() : double { 
        if (this.__$NEGATIVE_INFINITY===undefined) {
            this.__$NEGATIVE_INFINITY = op(Op.NEG,double.INFINITY);
        }
        return this.__$NEGATIVE_INFINITY;
    }

    private static __$MIN_POSITIVE : double;
    static get MIN_POSITIVE() : double { 
        if (this.__$MIN_POSITIVE===undefined) {
            this.__$MIN_POSITIVE = 5e-324;
        }
        return this.__$MIN_POSITIVE;
    }

    private static __$MAX_FINITE : double;
    static get MAX_FINITE() : double { 
        if (this.__$MAX_FINITE===undefined) {
            this.__$MAX_FINITE = 1.7976931348623157e+308;
        }
        return this.__$MAX_FINITE;
    }

    @Abstract
    remainder(other : num) : double{ throw 'abstract'}
    @Abstract
    [OperatorMethods.PLUS](other : num) : double{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MINUS](other : num) : double{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MULTIPLY](other : num) : double{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MODULE](other : num) : double{ throw 'abstract'}
    @Abstract
    [OperatorMethods.DIVIDE](other : num) : double{ throw 'abstract'}
    @Abstract
    [OperatorMethods.QUOTIENT](other : num) : int{ throw 'abstract'}
    @Abstract
    [OperatorMethods.NEGATE]() : double{ throw 'abstract'}
    @Abstract
    abs() : double{ throw 'abstract'}
    @AbstractProperty
    get sign() : double{ throw 'abstract'}
    @Abstract
    round() : int{ throw 'abstract'}
    @Abstract
    floor() : int{ throw 'abstract'}
    @Abstract
    ceil() : int{ throw 'abstract'}
    @Abstract
    truncate() : int{ throw 'abstract'}
    @Abstract
    roundToDouble() : double{ throw 'abstract'}
    @Abstract
    floorToDouble() : double{ throw 'abstract'}
    @Abstract
    ceilToDouble() : double{ throw 'abstract'}
    @Abstract
    truncateToDouble() : double{ throw 'abstract'}
    @Abstract
    toString() : String{ throw 'abstract'}
    static parse(source : String,onError? : (source : String) => double) : double {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    double() {
    }
}

export namespace Runes {
    export type Constructors = Iterable.Constructors | 'Runes';
    export type Interface = Omit<Runes, Constructors>;
}
@DartClass
export class Runes extends Iterable<int> {
    string : String;

    constructor(string : String) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Runes(string : String) {
        this.string = string;
    }
    get iterator() : RuneIterator {
        return new RuneIterator(this.string);
    }
    get last() : int {
        if (op(Op.EQUALS,this.string.length,0)) {
            throw new StateError('No elements.');
        }
        let length : int = this.string.length;
        let code : int = this.string.codeUnitAt(op(Op.MINUS,length,1));
        if (_isTrailSurrogate(code) && op(Op.GT,this.string.length,1)) {
            let previousCode : int = this.string.codeUnitAt(op(Op.MINUS,length,2));
            if (_isLeadSurrogate(previousCode)) {
                return _combineSurrogatePair(previousCode,code);
            }
        }
        return code;
    }
}

export namespace RangeError {
    export type Constructors = ArgumentError.Constructors | 'RangeError' | 'value' | 'range';
    export type Interface = Omit<RangeError, Constructors>;
}
@DartClass
export class RangeError extends ArgumentError {
    start : num;

    end : num;

    constructor(message : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RangeError(message : any) {
        this.start = null;
        this.end = null;
        super.ArgumentError(message);
    }
    @namedConstructor
    value(value : num,name? : String,message? : String) {
        this.start = null;
        this.end = null;
        super.value(value,name,(message != null) ? message : "Value not in range");
    }
    static value : new(value : num,name : String,message : String) => RangeError;

    @namedConstructor
    range(invalidValue : num,minValue : int,maxValue : int,name? : String,message? : String) {
        this.start = minValue;
        this.end = maxValue;
        super.value(invalidValue,name,(message != null) ? message : "Invalid value");
    }
    static range : new(invalidValue : num,minValue : int,maxValue : int,name : String,message : String) => RangeError;

    @namedFactory
    static $index(index : int,indexable : any,name? : String,message? : String,length? : int) : RangeError {
        return new IndexError(index,indexable,name,message,length);
    }
    static index : new(index : int,indexable : any,name : String,message : String,length : int) => RangeError;

    static checkValueInInterval(value : int,minValue : int,maxValue : int,name? : String,message? : String) : void {
        if (op(Op.LT,value,minValue) || op(Op.GT,value,maxValue)) {
            throw new RangeError.range(value,minValue,maxValue,name,message);
        }
    }
    static checkValidIndex(index : int,indexable : any,name? : String,length? : int,message? : String) : void {
        if (op(Op.EQUALS,length,null)) length = indexable.length;
        if (0 > index || op(Op.GEQ,index,length)) {
            if (op(Op.EQUALS,name,null)) name = "index";
            throw new RangeError.index(index,indexable,name,message,length);
        }
    }
    static checkValidRange(start : int,end : int,length : int,startName? : String,endName? : String,message? : String) : int {
        if (0 > start || op(Op.GT,start,length)) {
            if (op(Op.EQUALS,startName,null)) startName = "start";
            throw new RangeError.range(start,0,length,startName,message);
        }
        if (end != null) {
            if (op(Op.GT,start,end) || op(Op.GT,end,length)) {
                if (op(Op.EQUALS,endName,null)) endName = "end";
                throw new RangeError.range(end,start,length,endName,message);
            }
            return end;
        }
        return length;
    }
    static checkNotNegative(value : int,name? : String,message? : String) : void {
        if (op(Op.LT,value,0)) throw new RangeError.range(value,0,null,name,message);
    }
    get _errorName() : String {
        return "RangeError";
    }
    get _errorExplanation() : String {
        /* TODO (AssertStatementImpl) : assert (_hasValue); */;
        let explanation : String = "";
        if (op(Op.EQUALS,this.start,null)) {
            if (this.end != null) {
                explanation = `: Not less than or equal to ${this.end}`;
            }
        }else if (op(Op.EQUALS,this.end,null)) {
            explanation = `: Not greater than or equal to ${this.start}`;
        }else if (op(Op.GT,this.end,this.start)) {
            explanation = `: Not in range ${this.start}..${this.end}, inclusive`;
        }else if (op(Op.LT,this.end,this.start)) {
            explanation = ": Valid value range is empty";
        }else {
            explanation = `: Only valid value is ${this.start}`;
        }
        return explanation;
    }
}

export namespace IndexError {
    export type Constructors = ArgumentError.Constructors | 'IndexError';
    export type Interface = Omit<IndexError, Constructors>;
}
@DartClass
@Implements(RangeError)
export class IndexError extends ArgumentError implements RangeError.Interface {
    indexable;

    length : int;

    constructor(invalidValue : int,indexable : any,name? : String,message? : String,length? : int) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IndexError(invalidValue : int,indexable : any,name? : String,message? : String,length? : int) {
        this.indexable = indexable;
        this.length = (length != null) ? length : indexable.length;
        super.value(invalidValue,name,(message != null) ? message : "Index out of range");
    }
    get start() : int {
        return 0;
    }
    get end() : int {
        return op(Op.MINUS,this.length,1);
    }
    get _errorName() : String {
        return "RangeError";
    }
    get _errorExplanation() : String {
        /* TODO (AssertStatementImpl) : assert (_hasValue); */;
        if (op(Op.LT,this.invalidValue,0)) {
            return ": index must not be negative";
        }
        if (op(Op.EQUALS,this.length,0)) {
            return ": no indices are valid";
        }
        return `: index should be less than ${this.length}`;
    }
}

export namespace TypeError {
    export type Constructors = AssertionError.Constructors | 'TypeError';
    export type Interface = Omit<TypeError, Constructors>;
}
@DartClass
export class TypeError extends AssertionError {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeError() {
    }
}

export class properties {
    private static __$_queryStartIndex : int;
    static get _queryStartIndex() : int { 
        if (this.__$_queryStartIndex===undefined) {
            this.__$_queryStartIndex = 5;
        }
        return this.__$_queryStartIndex;
    }
    static set _queryStartIndex(__$value : int)  { 
        this.__$_queryStartIndex = __$value;
    }

    private static __$deprecated : Deprecated;
    static get deprecated() : Deprecated { 
        if (this.__$deprecated===undefined) {
            this.__$deprecated = new Deprecated("next release");
        }
        return this.__$deprecated;
    }
    static set deprecated(__$value : Deprecated)  { 
        this.__$deprecated = __$value;
    }

    private static __$override : Object;
    static get override() : Object { 
        if (this.__$override===undefined) {
            this.__$override = new _Override();
        }
        return this.__$override;
    }
    static set override(__$value : Object)  { 
        this.__$override = __$value;
    }

    private static __$proxy : Object;
    static get proxy() : Object { 
        if (this.__$proxy===undefined) {
            this.__$proxy = new _Proxy();
        }
        return this.__$proxy;
    }
    static set proxy(__$value : Object)  { 
        this.__$proxy = __$value;
    }

    private static __$_scannerTables : List<typed_data.Uint8List>;
    static get _scannerTables() : List<typed_data.Uint8List> { 
        if (this.__$_scannerTables===undefined) {
            this.__$_scannerTables = _createTables();
        }
        return this.__$_scannerTables;
    }
    static set _scannerTables(__$value : List<typed_data.Uint8List>)  { 
        this.__$_scannerTables = __$value;
    }

    private static __$_schemeStart : int;
    static get _schemeStart() : int { 
        if (this.__$_schemeStart===undefined) {
            this.__$_schemeStart = 20;
        }
        return this.__$_schemeStart;
    }
    static set _schemeStart(__$value : int)  { 
        this.__$_schemeStart = __$value;
    }

    private static __$_PERCENT : int;
    static get _PERCENT() : int { 
        if (this.__$_PERCENT===undefined) {
            this.__$_PERCENT = 37;
        }
        return this.__$_PERCENT;
    }
    static set _PERCENT(__$value : int)  { 
        this.__$_PERCENT = __$value;
    }

    private static __$_nonSimpleEndStates : int;
    static get _nonSimpleEndStates() : int { 
        if (this.__$_nonSimpleEndStates===undefined) {
            this.__$_nonSimpleEndStates = 14;
        }
        return this.__$_nonSimpleEndStates;
    }
    static set _nonSimpleEndStates(__$value : int)  { 
        this.__$_nonSimpleEndStates = __$value;
    }

    private static __$_uriStart : int;
    static get _uriStart() : int { 
        if (this.__$_uriStart===undefined) {
            this.__$_uriStart = 0;
        }
        return this.__$_uriStart;
    }
    static set _uriStart(__$value : int)  { 
        this.__$_uriStart = __$value;
    }

    private static __$_notSimpleIndex : int;
    static get _notSimpleIndex() : int { 
        if (this.__$_notSimpleIndex===undefined) {
            this.__$_notSimpleIndex = 7;
        }
        return this.__$_notSimpleIndex;
    }
    static set _notSimpleIndex(__$value : int)  { 
        this.__$_notSimpleIndex = __$value;
    }

    private static __$_fragmentStartIndex : int;
    static get _fragmentStartIndex() : int { 
        if (this.__$_fragmentStartIndex===undefined) {
            this.__$_fragmentStartIndex = 6;
        }
        return this.__$_fragmentStartIndex;
    }
    static set _fragmentStartIndex(__$value : int)  { 
        this.__$_fragmentStartIndex = __$value;
    }

    private static __$_hexDigits : String;
    static get _hexDigits() : String { 
        if (this.__$_hexDigits===undefined) {
            this.__$_hexDigits = "0123456789ABCDEF";
        }
        return this.__$_hexDigits;
    }
    static set _hexDigits(__$value : String)  { 
        this.__$_hexDigits = __$value;
    }

    private static __$_pathStartIndex : int;
    static get _pathStartIndex() : int { 
        if (this.__$_pathStartIndex===undefined) {
            this.__$_pathStartIndex = 4;
        }
        return this.__$_pathStartIndex;
    }
    static set _pathStartIndex(__$value : int)  { 
        this.__$_pathStartIndex = __$value;
    }

    private static __$_portStartIndex : int;
    static get _portStartIndex() : int { 
        if (this.__$_portStartIndex===undefined) {
            this.__$_portStartIndex = 3;
        }
        return this.__$_portStartIndex;
    }
    static set _portStartIndex(__$value : int)  { 
        this.__$_portStartIndex = __$value;
    }

    private static __$_hostStartIndex : int;
    static get _hostStartIndex() : int { 
        if (this.__$_hostStartIndex===undefined) {
            this.__$_hostStartIndex = 2;
        }
        return this.__$_hostStartIndex;
    }
    static set _hostStartIndex(__$value : int)  { 
        this.__$_hostStartIndex = __$value;
    }

    private static __$_schemeEndIndex : int;
    static get _schemeEndIndex() : int { 
        if (this.__$_schemeEndIndex===undefined) {
            this.__$_schemeEndIndex = 1;
        }
        return this.__$_schemeEndIndex;
    }
    static set _schemeEndIndex(__$value : int)  { 
        this.__$_schemeEndIndex = __$value;
    }

    private static __$_SPACE : int;
    static get _SPACE() : int { 
        if (this.__$_SPACE===undefined) {
            this.__$_SPACE = 32;
        }
        return this.__$_SPACE;
    }
    static set _SPACE(__$value : int)  { 
        this.__$_SPACE = __$value;
    }

    private static __$_LOWER_CASE_Z : int;
    static get _LOWER_CASE_Z() : int { 
        if (this.__$_LOWER_CASE_Z===undefined) {
            this.__$_LOWER_CASE_Z = 122;
        }
        return this.__$_LOWER_CASE_Z;
    }
    static set _LOWER_CASE_Z(__$value : int)  { 
        this.__$_LOWER_CASE_Z = __$value;
    }

    private static __$_AMPERSAND : int;
    static get _AMPERSAND() : int { 
        if (this.__$_AMPERSAND===undefined) {
            this.__$_AMPERSAND = 38;
        }
        return this.__$_AMPERSAND;
    }
    static set _AMPERSAND(__$value : int)  { 
        this.__$_AMPERSAND = __$value;
    }

    private static __$_PLUS : int;
    static get _PLUS() : int { 
        if (this.__$_PLUS===undefined) {
            this.__$_PLUS = 43;
        }
        return this.__$_PLUS;
    }
    static set _PLUS(__$value : int)  { 
        this.__$_PLUS = __$value;
    }

    private static __$_DOT : int;
    static get _DOT() : int { 
        if (this.__$_DOT===undefined) {
            this.__$_DOT = 46;
        }
        return this.__$_DOT;
    }
    static set _DOT(__$value : int)  { 
        this.__$_DOT = __$value;
    }

    private static __$_SLASH : int;
    static get _SLASH() : int { 
        if (this.__$_SLASH===undefined) {
            this.__$_SLASH = 47;
        }
        return this.__$_SLASH;
    }
    static set _SLASH(__$value : int)  { 
        this.__$_SLASH = __$value;
    }

    private static __$_COLON : int;
    static get _COLON() : int { 
        if (this.__$_COLON===undefined) {
            this.__$_COLON = 58;
        }
        return this.__$_COLON;
    }
    static set _COLON(__$value : int)  { 
        this.__$_COLON = __$value;
    }

    private static __$_EQUALS : int;
    static get _EQUALS() : int { 
        if (this.__$_EQUALS===undefined) {
            this.__$_EQUALS = 61;
        }
        return this.__$_EQUALS;
    }
    static set _EQUALS(__$value : int)  { 
        this.__$_EQUALS = __$value;
    }

    private static __$_UPPER_CASE_A : int;
    static get _UPPER_CASE_A() : int { 
        if (this.__$_UPPER_CASE_A===undefined) {
            this.__$_UPPER_CASE_A = 65;
        }
        return this.__$_UPPER_CASE_A;
    }
    static set _UPPER_CASE_A(__$value : int)  { 
        this.__$_UPPER_CASE_A = __$value;
    }

    private static __$_UPPER_CASE_Z : int;
    static get _UPPER_CASE_Z() : int { 
        if (this.__$_UPPER_CASE_Z===undefined) {
            this.__$_UPPER_CASE_Z = 90;
        }
        return this.__$_UPPER_CASE_Z;
    }
    static set _UPPER_CASE_Z(__$value : int)  { 
        this.__$_UPPER_CASE_Z = __$value;
    }

    private static __$_LEFT_BRACKET : int;
    static get _LEFT_BRACKET() : int { 
        if (this.__$_LEFT_BRACKET===undefined) {
            this.__$_LEFT_BRACKET = 91;
        }
        return this.__$_LEFT_BRACKET;
    }
    static set _LEFT_BRACKET(__$value : int)  { 
        this.__$_LEFT_BRACKET = __$value;
    }

    private static __$_BACKSLASH : int;
    static get _BACKSLASH() : int { 
        if (this.__$_BACKSLASH===undefined) {
            this.__$_BACKSLASH = 92;
        }
        return this.__$_BACKSLASH;
    }
    static set _BACKSLASH(__$value : int)  { 
        this.__$_BACKSLASH = __$value;
    }

    private static __$_RIGHT_BRACKET : int;
    static get _RIGHT_BRACKET() : int { 
        if (this.__$_RIGHT_BRACKET===undefined) {
            this.__$_RIGHT_BRACKET = 93;
        }
        return this.__$_RIGHT_BRACKET;
    }
    static set _RIGHT_BRACKET(__$value : int)  { 
        this.__$_RIGHT_BRACKET = __$value;
    }

    private static __$_LOWER_CASE_A : int;
    static get _LOWER_CASE_A() : int { 
        if (this.__$_LOWER_CASE_A===undefined) {
            this.__$_LOWER_CASE_A = 97;
        }
        return this.__$_LOWER_CASE_A;
    }
    static set _LOWER_CASE_A(__$value : int)  { 
        this.__$_LOWER_CASE_A = __$value;
    }

    private static __$_LOWER_CASE_F : int;
    static get _LOWER_CASE_F() : int { 
        if (this.__$_LOWER_CASE_F===undefined) {
            this.__$_LOWER_CASE_F = 102;
        }
        return this.__$_LOWER_CASE_F;
    }
    static set _LOWER_CASE_F(__$value : int)  { 
        this.__$_LOWER_CASE_F = __$value;
    }

}
