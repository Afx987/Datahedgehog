/** Library asset:datahedgehog_monitor/lib/lib/html/html_common/html_common.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as dom.html from "@dart2ts/dart/dom.html";
import * as collection from "@dart2ts/dart/core";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as js from "@dart2ts/dart/js";
import * as math from "@dart2ts/dart/math";
import * as mirrors from "@dart2ts/dart/mirrors";

export var convertDartToNative_PrepareForStructuredClone : (value : any) => any = (value : any) =>  {
    return new _StructuredCloneDartium().convertDartToNative_PrepareForStructuredClone(value);
};
export var convertDartToNative_List : (input : core.DartList<any>) => any = (input : core.DartList<any>) =>  {
    return ((_) : js.JsArray<any> =>  {
        {
            _.addAll(input);
            return _;
        }
    })(new js.JsArray<any>());
};
export var convertDartToNative_StringArray : (input : core.DartList<string>) => core.DartList<any> = (input : core.DartList<string>) : core.DartList<any> =>  {
    return input;
};
export var convertNativeToDart_Dictionary : (values : any) => any = (values : any) =>  {
    return convertNativeToDart_SerializedScriptValue(values);
};
export var convertNativeDictionaryToDartDictionary : (values : any) => any = (values : any) =>  {
    if (isNot(values, core.DartMap<any,any>)) {
        values = convertNativeToDart_SerializedScriptValue(values);
    }
    return values != null ? new _ReturnedDictionary(values) : null;
};
export var convertDartToNative_SerializedScriptValue : (value : any) => any = (value : any) =>  {
    return convertDartToNative_PrepareForStructuredClone(value);
};
export var convertNativeToDart_SerializedScriptValue : (object : any) => any = (object : any) =>  {
    return convertNativeToDart_AcceptStructuredClone(object,{
        mustCopy : true});
};
export var convertDartToNative_Dictionary : (dict : core.DartMap<any,any>) => any = (dict : core.DartMap<any,any>) =>  {
    if (dict == null) return null;
    let jsObject = js.JsNative.newObject();
    dict.forEach((key : string,value : any) =>  {
        if (is(value, core.DartList<any>)) {
            let jsArray = js.JsNative.newArray();
            value.forEach((elem : any) =>  {
                jsArray.add(is(elem, core.DartMap<any,any>) ? convertDartToNative_Dictionary(elem) : elem);
            });
            js.JsNative.setProperty(jsObject,key,jsArray);
        }else {
            js.JsNative.setProperty(jsObject,key,value);
        }
    });
    return jsObject;
};
export var make_dart_rectangle : (r : any) => math.Rectangle<any> = (r : any) : math.Rectangle<any> =>  {
    if (op(Op.EQUALS,r,null)) return null;
    if (is(r, core.DartList<any>)) {
        return new math.Rectangle<any>(r[0],r[1],r[2],r[3]);
    }
    return new math.Rectangle<any>(js.JsNative.getProperty(r,'left'),js.JsNative.getProperty(r,'top'),js.JsNative.getProperty(r,'width'),js.JsNative.getProperty(r,'height'));
};
export var convertDartToNative_DateTime : (date : core.DartDateTime) => any = (date : core.DartDateTime) =>  {
    return date;
};
export var convertNativeToDart_ContextAttributes : (nativeContextAttributes : any) => any = (nativeContextAttributes : any) =>  {
    return new ContextAttributes(nativeContextAttributes.alpha/* JS('var', '#.alpha', nativeContextAttributes) */,nativeContextAttributes.antialias/* JS('var', '#.antialias', nativeContextAttributes) */,nativeContextAttributes.depth/* JS('var', '#.depth', nativeContextAttributes) */,nativeContextAttributes.failIfMajorPerformanceCaveat/* JS('var', '#.failIfMajorPerformanceCaveat', nativeContextAttributes) */,nativeContextAttributes.premultipliedAlpha/* JS('var', '#.premultipliedAlpha', nativeContextAttributes) */,nativeContextAttributes.preserveDrawingBuffer/* JS('var', '#.preserveDrawingBuffer', nativeContextAttributes) */,nativeContextAttributes.stencil/* JS('var', '#.stencil', nativeContextAttributes) */);
};
export var convertNativePromiseToDartFuture : (promise : js.JSObject) => async.Future<any> = (promise : js.JSObject) : async.Future<any> =>  {
    let completer = new async.DartCompleter<any>();
    let newPromise = js.JsNative.callMethod(js.JsNative.callMethod(promise,"then",new core.DartList.literal(js.allowInterop((result : any) =>  {
        return completer.complete(result);
    }))),"catch",new core.DartList.literal(js.allowInterop((result : any) =>  {
        return completer.completeError(result);
    })));
    return completer.future;
};
export var convertNativeToDart_ImageData : (nativeImageData : any) => dom.html.ImageData = (nativeImageData : any) : dom.html.ImageData =>  {
    0/* JS('ImageData', '0') */;
    if (is(nativeImageData, dom.html.ImageData)) {
        let data = nativeImageData.data;
        if (data.constructor === Array/* JS('bool', '#.constructor === Array', data) */) {
            if (typeof CanvasPixelArray !== "undefined"/* JS('bool', 'typeof CanvasPixelArray !== "undefined"') */) {
                data.constructor = CanvasPixelArray/* JS('void', '#.constructor = CanvasPixelArray', data) */;
                data.BYTES_PER_ELEMENT = 1/* JS('void', '#.BYTES_PER_ELEMENT = 1', data) */;
            }
        }
        return nativeImageData;
    }
    return new _TypedImageData(nativeImageData.data/* JS('NativeUint8ClampedList', '#.data', nativeImageData) */,nativeImageData.height/* JS('var', '#.height', nativeImageData) */,nativeImageData.width/* JS('var', '#.width', nativeImageData) */);
};
export var convertDartToNative_ImageData : (imageData : dom.html.ImageData) => any = (imageData : dom.html.ImageData) =>  {
    if (is(imageData, _TypedImageData)) {
        return {data: imageData.data, height: imageData.height, width: imageData.width}/* JS('', '{data: #, height: #, width: #}', imageData.data, imageData.height, imageData.width) */;
    }
    return imageData;
};
export var isJavaScriptPromise : (value : any) => boolean = (value : any) : boolean =>  {
    return is(value, js.JSObject) && core.identical(js.JsNative.getProperty(value,'constructor'),properties._promiseConstructor);
};
export var convertNativeToDart_AcceptStructuredClone : (object : any,_namedArguments? : {mustCopy? : any}) => any = (object : any,_namedArguments? : {mustCopy? : any}) =>  {
    let {mustCopy} = Object.assign({
        "mustCopy" : false}, _namedArguments );
    return new _AcceptStructuredCloneDartium().convertNativeToDart_AcceptStructuredClone(object,{
        mustCopy : mustCopy});
};
export var isImmutableJavaScriptArray : (value : any) => boolean = (value : any) : boolean =>  {
    return isJavaScriptArray(value) && js.JsNative.getProperty(value,`immutable${list}`) != null;
};
export var isJavaScriptDate : (value : any) => boolean = (value : any) : boolean =>  {
    return is(value, js.JSObject) && js.JsNative.instanceof(value,properties._dateConstructor);
};
export var isJavaScriptRegExp : (value : any) => boolean = (value : any) : boolean =>  {
    return is(value, js.JSObject) && js.JsNative.instanceof(value,properties._regexConstructor);
};
export var isJavaScriptArray : (value : any) => boolean = (value : any) : boolean =>  {
    return is(value, js.JSArray);
};
export var _getProto : (object : any) => any = (object : any) =>  {
    return properties._getPrototypeOf(object);
};
export var lookupType : (jsObject : js.JsObject,isElement : boolean) => core.Type = (jsObject : js.JsObject,isElement : boolean) : core.Type =>  {
    try {
        if (is(jsObject, js.JsArray<any>)) {
            return js.JSArray.instanceRuntimeType;
        }
        if (is(jsObject, js.JsFunction)) {
            return js.JSFunction.instanceRuntimeType;
        }
        let constructor = js.JsNative.getProperty(jsObject,'constructor');
        if (op(Op.EQUALS,constructor,null)) {
            return js.JSObject.instanceRuntimeType;
        }
        let jsTypeName = js.JsNative.getProperty(constructor,'name');
        if (isNot(jsTypeName, "string") || new core.DartString(jsTypeName).length == 0) {
            return js.JSObject.instanceRuntimeType;
        }
        let dartClass_instance;
        let customElementClass = null;
        let extendsTag = "";
        let type : core.Type = dom.html.getHtmlCreateType(jsTypeName);
        if (type != null) return type;
        let prototype = js.JsNative.getProperty(jsObject,'__proto__');
        while (prototype != null){
            let constructor = js.JsNative.getProperty(prototype,'constructor');
            if (constructor != null) {
                jsTypeName = js.JsNative.getProperty(constructor,'name');
                type = dom.html.getHtmlCreateType(jsTypeName);
                if (type != null) return type;
            }
            prototype = js.JsNative.getProperty(prototype,'__proto__');
        }
    } catch (__error__) {

        {
            let e = __error__;
            if (js.JsNative.hasProperty(e,"postMessage")) {
                return dom.html.Window.instanceRuntimeType;
            }
        }
    }
    return js.JSObject.instanceRuntimeType;
};
export var isJavaScriptSimpleObject : (value : any) => boolean = (value : any) : boolean =>  {
    if (isNot(value, js.JSObject)) return false;
    let proto = _getProto(value);
    return op(Op.EQUALS,proto,properties._objectProto) || op(Op.EQUALS,proto,null);
};
export namespace CssClassSetImpl {
    export type Constructors = 'CssClassSetImpl';
    export type Interface = Omit<CssClassSetImpl, Constructors>;
}
@DartClass
@Implements(dom.html.CssClassSet)
export class CssClassSetImpl implements dom.html.CssClassSet.Interface {
    private static __$_validTokenRE : core.DartRegExp;
    static get _validTokenRE() : core.DartRegExp { 
        if (this.__$_validTokenRE===undefined) {
            this.__$_validTokenRE = new core.DartRegExp('^\S+$');
        }
        return this.__$_validTokenRE;
    }
    static set _validTokenRE(__$value : core.DartRegExp)  { 
        this.__$_validTokenRE = __$value;
    }

    _validateToken(value : string) : string {
        if (CssClassSetImpl._validTokenRE.hasMatch(value)) return value;
        throw new core.ArgumentError.value(value,'value','Not a valid class token');
    }
    toString() : string {
        return this.readClasses().join(' ');
    }
    toggle(value : string,shouldAdd? : boolean) : boolean {
        this._validateToken(value);
        let s : core.DartSet<string> = this.readClasses();
        let result : boolean = false;
        if (shouldAdd == null) shouldAdd = !s.contains(value);
        if (shouldAdd) {
            s.add(value);
            result = true;
        }else {
            s.remove(value);
        }
        this.writeClasses(s);
        return result;
    }
    get frozen() : boolean {
        return false;
    }
    get iterator() : core.DartIterator<string> {
        return this.readClasses().iterator;
    }
    forEach(f : (element : string) => void) : void {
        this.readClasses().forEach(f);
    }
    join(separator? : string) : string {
        separator = separator || "";
        return this.readClasses().join(separator);
    }
    map<T>(f : <T>(e : string) => T) : core.DartIterable<T> {
        return this.readClasses().map(f);
    }
    where(f : (element : string) => boolean) : core.DartIterable<string> {
        return this.readClasses().where(f);
    }
    expand<T>(f : <T>(element : string) => core.DartIterable<T>) : core.DartIterable<T> {
        return this.readClasses().expand(f);
    }
    every(f : (element : string) => boolean) : boolean {
        return this.readClasses().every(f);
    }
    any(f : (element : string) => boolean) : boolean {
        return this.readClasses().any(f);
    }
    get isEmpty() : boolean {
        return this.readClasses().isEmpty;
    }
    get isNotEmpty() : boolean {
        return this.readClasses().isNotEmpty;
    }
    get length() : number {
        return this.readClasses().length;
    }
    reduce(combine : (value : string,element : string) => string) : string {
        return this.readClasses().reduce(combine);
    }
    fold<T>(initialValue : T,combine : <T>(previousValue : T,element : string) => T) : T {
        return this.readClasses().fold(initialValue,combine);
    }
    contains(value : core.DartObject) : boolean {
        if (isNot(value, "string")) return false;
        this._validateToken(value);
        return this.readClasses().contains(value);
    }
    lookup(value : core.DartObject) : string {
        return this.contains(value) ? value : null;
    }
    add(value : string) : boolean {
        this._validateToken(value);
        return this.modify((s : any) =>  {
            return s.add(value);
        });
    }
    remove(value : core.DartObject) : boolean {
        this._validateToken(value);
        if (isNot(value, "string")) return false;
        let s : core.DartSet<string> = this.readClasses();
        let result : boolean = s.remove(value);
        this.writeClasses(s);
        return result;
    }
    addAll(iterable : core.DartIterable<string>) : void {
        this.modify((s : any) =>  {
            return s.addAll(iterable.map(this._validateToken.bind(this)));
        });
    }
    removeAll(iterable : core.DartIterable<core.DartObject>) : void {
        this.modify((s : any) =>  {
            return s.removeAll(iterable);
        });
    }
    toggleAll(iterable : core.DartIterable<string>,shouldAdd? : boolean) : void {
        iterable.forEach((e : any) =>  {
            return this.toggle(e,shouldAdd);
        });
    }
    retainAll(iterable : core.DartIterable<core.DartObject>) : void {
        this.modify((s : any) =>  {
            return s.retainAll(iterable);
        });
    }
    removeWhere(test : (name : string) => boolean) : void {
        this.modify((s : any) =>  {
            return s.removeWhere(test);
        });
    }
    retainWhere(test : (name : string) => boolean) : void {
        this.modify((s : any) =>  {
            return s.retainWhere(test);
        });
    }
    containsAll(collection : core.DartIterable<core.DartObject>) : boolean {
        return this.readClasses().containsAll(collection);
    }
    intersection(other : core.DartSet<core.DartObject>) : core.DartSet<string> {
        return this.readClasses().intersection(other);
    }
    union(other : core.DartSet<string>) : core.DartSet<string> {
        return this.readClasses().union(other);
    }
    difference(other : core.DartSet<core.DartObject>) : core.DartSet<string> {
        return this.readClasses().difference(other);
    }
    get first() : string {
        return this.readClasses().first;
    }
    get last() : string {
        return this.readClasses().last;
    }
    get single() : string {
        return this.readClasses().single;
    }
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<string> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        return this.readClasses().toList({
            growable : growable});
    }
    toSet() : core.DartSet<string> {
        return this.readClasses().toSet();
    }
    take(n : number) : core.DartIterable<string> {
        return this.readClasses().take(n);
    }
    takeWhile(test : (value : string) => boolean) : core.DartIterable<string> {
        return this.readClasses().takeWhile(test);
    }
    skip(n : number) : core.DartIterable<string> {
        return this.readClasses().skip(n);
    }
    skipWhile(test : (value : string) => boolean) : core.DartIterable<string> {
        return this.readClasses().skipWhile(test);
    }
    firstWhere(test : (value : string) => boolean,_namedArguments? : {orElse? : () => string}) : string {
        let {orElse} = Object.assign({
        }, _namedArguments );
        return this.readClasses().firstWhere(test,{
            orElse : orElse});
    }
    lastWhere(test : (value : string) => boolean,_namedArguments? : {orElse? : () => string}) : string {
        let {orElse} = Object.assign({
        }, _namedArguments );
        return this.readClasses().lastWhere(test,{
            orElse : orElse});
    }
    singleWhere(test : (value : string) => boolean) : string {
        return this.readClasses().singleWhere(test);
    }
    elementAt(index : number) : string {
        return this.readClasses().elementAt(index);
    }
    clear() : void {
        this.modify((s : any) =>  {
            return s.clear();
        });
    }
    modify(f : (s : core.DartSet<string>) => any) {
        let s : core.DartSet<string> = this.readClasses();
        let ret = f(s);
        this.writeClasses(s);
        return ret;
    }
    @Abstract
    readClasses() : core.DartSet<string>{ throw 'abstract'}
    @Abstract
    writeClasses(s : core.DartSet<string>) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    CssClassSetImpl() {
    }
}

export namespace _TypedImageData {
    export type Constructors = '_TypedImageData';
    export type Interface = Omit<_TypedImageData, Constructors>;
}
@DartClass
@Implements(dom.html.ImageData)
export class _TypedImageData implements dom.html.ImageData.Interface {
    data : typed_data.Uint8ClampedList;

    height : number;

    width : number;

    constructor(data : typed_data.Uint8ClampedList,height : number,width : number) {
    }
    @defaultConstructor
    _TypedImageData(data : typed_data.Uint8ClampedList,height : number,width : number) {
        this.data = data;
        this.height = height;
        this.width = width;
    }
}

export namespace ContextAttributes {
    export type Constructors = 'ContextAttributes';
    export type Interface = Omit<ContextAttributes, Constructors>;
}
@DartClass
export class ContextAttributes {
    alpha : boolean;

    antialias : boolean;

    depth : boolean;

    premultipliedAlpha : boolean;

    preserveDrawingBuffer : boolean;

    stencil : boolean;

    failIfMajorPerformanceCaveat : boolean;

    constructor(alpha : boolean,antialias : boolean,depth : boolean,failIfMajorPerformanceCaveat : boolean,premultipliedAlpha : boolean,preserveDrawingBuffer : boolean,stencil : boolean) {
    }
    @defaultConstructor
    ContextAttributes(alpha : boolean,antialias : boolean,depth : boolean,failIfMajorPerformanceCaveat : boolean,premultipliedAlpha : boolean,preserveDrawingBuffer : boolean,stencil : boolean) {
        this.alpha = alpha;
        this.antialias = antialias;
        this.depth = depth;
        this.failIfMajorPerformanceCaveat = failIfMajorPerformanceCaveat;
        this.premultipliedAlpha = premultipliedAlpha;
        this.preserveDrawingBuffer = preserveDrawingBuffer;
        this.stencil = stencil;
    }
}

export namespace _AcceptStructuredClone {
    export type Constructors = '_AcceptStructuredClone';
    export type Interface = Omit<_AcceptStructuredClone, Constructors>;
}
@DartClass
export class _AcceptStructuredClone {
    values;

    copies;

    mustCopy : boolean;

    findSlot(value : any) : number {
        let length : number = this.values.length;
        for(let i : number = 0; i < length; i++){
            if (this.identicalInJs(op(Op.INDEX,this.values,i),value)) return i;
        }
        this.values.add(value);
        this.copies.add(null);
        return length;
    }
    @Abstract
    identicalInJs(a : any,b : any) : boolean{ throw 'abstract'}
    readSlot(i : number) {
        return op(Op.INDEX,this.copies,i);
    }
    writeSlot(i : number,x : any) {
        op(Op.INDEX_ASSIGN,this.copies,i,x);
    }
    @Abstract
    forEachJsField(object : any,action : any){ throw 'abstract'}
    @Abstract
    newDartList(length : any){ throw 'abstract'}
    walk(e : any) {
        if (op(Op.EQUALS,e,null)) return e;
        if (is(e, "boolean")) return e;
        if (is(e, "number")) return e;
        if (is(e, "string")) return e;
        if (isJavaScriptDate(e)) {
            return convertNativeToDart_DateTime(e);
        }
        if (isJavaScriptRegExp(e)) {
            throw new core.UnimplementedError('structured clone of RegExp');
        }
        if (isJavaScriptPromise(e)) {
            return convertNativePromiseToDartFuture(e);
        }
        if (isJavaScriptSimpleObject(e)) {
            let slot = this.findSlot(e);
            let copy = this.readSlot(slot);
            if (copy != null) return copy;
            copy = new core.DartMap.literal([
            ]);
            this.writeSlot(slot,copy);
            this.forEachJsField(e,(key : any,value : any) =>  {
                return copy.set(key,this.walk(value));
            });
            return copy;
        }
        if (isJavaScriptArray(e)) {
            let slot = this.findSlot(e);
            let copy = this.readSlot(slot);
            if (copy != null) return copy;
            let length : number = e.length;
            copy = this.mustCopy ? this.newDartList(length) : e;
            this.writeSlot(slot,copy);
            for(let i : number = 0; i < length; i++){
                op(Op.INDEX_ASSIGN,copy,i,this.walk(op(Op.INDEX,e,i)));
            }
            return copy;
        }
        return e;
    }
    convertNativeToDart_AcceptStructuredClone(object : any,_namedArguments? : {mustCopy? : any}) {
        let {mustCopy} = Object.assign({
            "mustCopy" : false}, _namedArguments );
        this.mustCopy = mustCopy;
        let copy = this.walk(object);
        return copy;
    }
    constructor() {
    }
    @defaultConstructor
    _AcceptStructuredClone() {
        this.values = new core.DartList.literal();
        this.copies = new core.DartList.literal();
        this.mustCopy = false;
    }
}

export namespace _StructuredClone {
    export type Constructors = '_StructuredClone';
    export type Interface = Omit<_StructuredClone, Constructors>;
}
@DartClass
export class _StructuredClone {
    values;

    copies;

    findSlot(value : any) : number {
        let length : number = this.values.length;
        for(let i : number = 0; i < length; i++){
            if (core.identical(op(Op.INDEX,this.values,i),value)) return i;
        }
        this.values.add(value);
        this.copies.add(null);
        return length;
    }
    readSlot(i : number) {
        return op(Op.INDEX,this.copies,i);
    }
    writeSlot(i : number,x : any) {
        op(Op.INDEX_ASSIGN,this.copies,i,x);
    }
    cleanupSlots() {
    }
    @Abstract
    cloneNotRequired(object : any) : boolean{ throw 'abstract'}
    @Abstract
    newJsMap(){ throw 'abstract'}
    @Abstract
    newJsList(length : any){ throw 'abstract'}
    @Abstract
    putIntoMap(map : any,key : any,value : any) : void{ throw 'abstract'}
    walk(e : any) {
        if (op(Op.EQUALS,e,null)) return e;
        if (is(e, "boolean")) return e;
        if (is(e, "number")) return e;
        if (is(e, "string")) return e;
        if (is(e, core.DartDateTime)) {
            return convertDartToNative_DateTime(e);
        }
        if (is(e, core.DartRegExp)) {
            throw new core.UnimplementedError('structured clone of RegExp');
        }
        if (is(e, dom.html.File)) return e;
        if (is(e, dom.html.Blob)) return e;
        if (is(e, dom.html.FileList)) return e;
        if (is(e, dom.html.ImageData)) return e;
        if (this.cloneNotRequired(e)) return e;
        if (is(e, core.DartMap<any,any>)) {
            let slot = this.findSlot(e);
            let copy = this.readSlot(slot);
            if (copy != null) return copy;
            copy = this.newJsMap();
            this.writeSlot(slot,copy);
            e.forEach((key : any,value : any) =>  {
                this.putIntoMap(copy,key,this.walk(value));
            });
            return copy;
        }
        if (is(e, core.DartList<any>)) {
            let slot = this.findSlot(e);
            let copy = this.readSlot(slot);
            if (copy != null) return copy;
            copy = this.copyList(e,slot);
            return copy;
        }
        throw new core.UnimplementedError('structured clone of other type');
    }
    copyList(e : core.DartList<any>,slot : number) {
        let i : number = 0;
        let length : number = e.length;
        let copy = this.newJsList(length);
        this.writeSlot(slot,copy);
        for(; i < length; i++){
            op(Op.INDEX_ASSIGN,copy,i,this.walk(e[i]));
        }
        return copy;
    }
    convertDartToNative_PrepareForStructuredClone(value : any) {
        let copy = this.walk(value);
        this.cleanupSlots();
        return copy;
    }
    constructor() {
    }
    @defaultConstructor
    _StructuredClone() {
        this.values = new core.DartList.literal();
        this.copies = new core.DartList.literal();
    }
}

export namespace _ReturnedDictionary {
    export type Constructors = '_ReturnedDictionary';
    export type Interface = Omit<_ReturnedDictionary, Constructors>;
}
@DartClass
export class _ReturnedDictionary {
    _values : core.DartMap<any,any>;

    noSuchMethod(invocation : core.Invocation) {
        let key = mirrors.MirrorSystem.getName(invocation.memberName);
        if (invocation.isGetter) {
            return this._values.get(key);
        }else if (invocation.isSetter && new core.DartString(key).endsWith('=')) {
            key = new core.DartString(key).substring(0,new core.DartString(key).length - 1);
            this._values.set(key,invocation.positionalArguments[0]);
        }
    }
    get toMap() : core.DartMap<any,any> {
        return this._values;
    }
    constructor(value : core.DartMap<any,any>) {
    }
    @defaultConstructor
    _ReturnedDictionary(value : core.DartMap<any,any>) {
        this._values = value != null ? value : new core.DartMap.literal([
        ]);
    }
}

export namespace NodeListWrapper {
    export type Constructors = 'NodeListWrapper';
    export type Interface = Omit<NodeListWrapper, Constructors>;
}
@DartClass
export class NodeListWrapper {
    @AbstractProperty
    get rawList() : core.DartList<dom.html.Node>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    NodeListWrapper() {
    }
}

export namespace Lists {
    export type Constructors = 'Lists';
    export type Interface = Omit<Lists, Constructors>;
}
@DartClass
export class Lists {
    static indexOf(a : core.DartList<any>,element : core.DartObject,startIndex : number,endIndex : number) : number {
        if (startIndex >= a.length) {
            return -1;
        }
        if (startIndex < 0) {
            startIndex = 0;
        }
        for(let i : number = startIndex; i < endIndex; i++){
            if (op(Op.EQUALS,a[i],element)) {
                return i;
            }
        }
        return -1;
    }
    static lastIndexOf(a : core.DartList<any>,element : core.DartObject,startIndex : number) : number {
        if (startIndex < 0) {
            return -1;
        }
        if (startIndex >= a.length) {
            startIndex = a.length - 1;
        }
        for(let i : number = startIndex; i >= 0; i--){
            if (op(Op.EQUALS,a[i],element)) {
                return i;
            }
        }
        return -1;
    }
    static getRange(a : core.DartList<any>,start : number,end : number,accumulator : core.DartList<any>) : core.DartList<any> {
        if (start < 0) throw new core.RangeError.value(start);
        if (end < start) throw new core.RangeError.value(end);
        if (end > a.length) throw new core.RangeError.value(end);
        for(let i : number = start; i < end; i++){
            accumulator.add(a[i]);
        }
        return accumulator;
    }
    constructor() {
    }
    @defaultConstructor
    Lists() {
    }
}

export namespace FilteredElementList {
    export type Constructors = core.DartListBase.Constructors | 'FilteredElementList';
    export type Interface = Omit<FilteredElementList, Constructors>;
}
@DartClass
@Implements(NodeListWrapper)
export class FilteredElementList extends core.DartListBase<dom.html.Element> implements NodeListWrapper.Interface {
    _node : dom.html.Node;

    _childNodes : core.DartList<dom.html.Node>;

    constructor(node : dom.html.Node) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FilteredElementList(node : dom.html.Node) {
        this._childNodes = node.nodes;
        this._node = node;
    }
    get _iterable() : core.DartIterable<dom.html.Element> {
        return this._childNodes.where((n : any) =>  {
            return is(n, dom.html.Element);
        }).map((n : any) =>  {
            return n as dom.html.Element;
        });
    }
    get _filtered() : core.DartList<dom.html.Element> {
        return new core.DartList.from(this._iterable,{
            growable : false});
    }
    forEach(f : (element : dom.html.Element) => void) : void {
        this._filtered.forEach(f);
    }
    [OperatorMethods.INDEX_EQ](index : number,value : dom.html.Element) : void {
        op(Op.INDEX,this,index).replaceWith(value);
    }
    set length(newLength : number) {
        let len = this.length;
        if (newLength >= len) {
            return;
        }else if (newLength < 0) {
            throw new core.ArgumentError("Invalid list length");
        }
        this.removeRange(newLength,len);
    }
    add(value : dom.html.Element) : void {
        this._childNodes.add(value);
    }
    addAll(iterable : core.DartIterable<dom.html.Element>) : void {
        for(let element of iterable) {
            this.add(element);
        }
    }
    contains(needle : core.DartObject) : boolean {
        if (isNot(needle, dom.html.Element)) return false;
        let element : dom.html.Element = needle;
        return op(Op.EQUALS,element.parentNode,this._node);
    }
    get reversed() : core.DartIterable<dom.html.Element> {
        return this._filtered.reversed;
    }
    sort(compare? : (a : dom.html.Element,b : dom.html.Element) => number) : void {
        throw new core.UnsupportedError('Cannot sort filtered list');
    }
    setRange(start : number,end : number,iterable : core.DartIterable<dom.html.Element>,skipCount? : number) : void {
        skipCount = skipCount || 0;
        throw new core.UnsupportedError('Cannot setRange on filtered list');
    }
    fillRange(start : number,end : number,fillValue? : dom.html.Element) : void {
        throw new core.UnsupportedError('Cannot fillRange on filtered list');
    }
    replaceRange(start : number,end : number,iterable : core.DartIterable<dom.html.Element>) : void {
        throw new core.UnsupportedError('Cannot replaceRange on filtered list');
    }
    removeRange(start : number,end : number) : void {
        new core.DartList.from(this._iterable.skip(start).take(end - start)).forEach((el : any) =>  {
            return el.remove();
        });
    }
    clear() : void {
        this._childNodes.clear();
    }
    removeLast() : dom.html.Element {
        let result = this._iterable.last;
        if (result != null) {
            result.remove();
        }
        return result;
    }
    insert(index : number,value : dom.html.Element) : void {
        if (index == this.length) {
            this.add(value);
        }else {
            let element = this._iterable.elementAt(index);
            element.parentNode.insertBefore(value,element);
        }
    }
    insertAll(index : number,iterable : core.DartIterable<dom.html.Element>) : void {
        if (index == this.length) {
            this.addAll(iterable);
        }else {
            let element = this._iterable.elementAt(index);
            element.parentNode.insertAllBefore(iterable,element);
        }
    }
    removeAt(index : number) : dom.html.Element {
        let result = op(Op.INDEX,this,index);
        result.remove();
        return result;
    }
    remove(element : core.DartObject) : boolean {
        if (isNot(element, dom.html.Element)) return false;
        if (this.contains(element)) {
            (element as dom.html.Element).remove();
            return true;
        }else {
            return false;
        }
    }
    get length() : number {
        return this._iterable.length;
    }
    [OperatorMethods.INDEX](index : number) : dom.html.Element {
        return this._iterable.elementAt(index);
    }
    get iterator() : core.DartIterator<dom.html.Element> {
        return this._filtered.iterator;
    }
    get rawList() : core.DartList<dom.html.Node> {
        return this._node.childNodes;
    }
}

export namespace Device {
    export type Constructors = 'Device';
    export type Interface = Omit<Device, Constructors>;
}
@DartClass
export class Device {
    private static __$_isOpera : boolean;
    static get _isOpera() : boolean { 
        return this.__$_isOpera;
    }
    static set _isOpera(__$value : boolean)  { 
        this.__$_isOpera = __$value;
    }

    private static __$_isIE : boolean;
    static get _isIE() : boolean { 
        return this.__$_isIE;
    }
    static set _isIE(__$value : boolean)  { 
        this.__$_isIE = __$value;
    }

    private static __$_isFirefox : boolean;
    static get _isFirefox() : boolean { 
        return this.__$_isFirefox;
    }
    static set _isFirefox(__$value : boolean)  { 
        this.__$_isFirefox = __$value;
    }

    private static __$_isWebKit : boolean;
    static get _isWebKit() : boolean { 
        return this.__$_isWebKit;
    }
    static set _isWebKit(__$value : boolean)  { 
        this.__$_isWebKit = __$value;
    }

    private static __$_cachedCssPrefix : string;
    static get _cachedCssPrefix() : string { 
        return this.__$_cachedCssPrefix;
    }
    static set _cachedCssPrefix(__$value : string)  { 
        this.__$_cachedCssPrefix = __$value;
    }

    private static __$_cachedPropertyPrefix : string;
    static get _cachedPropertyPrefix() : string { 
        return this.__$_cachedPropertyPrefix;
    }
    static set _cachedPropertyPrefix(__$value : string)  { 
        this.__$_cachedPropertyPrefix = __$value;
    }

    static get userAgent() : string {
        return dom.html.properties.window.navigator.userAgent;
    }
    static get isOpera() : boolean {
        if (Device._isOpera == null) {
            Device._isOpera = new core.DartString(Device.userAgent).contains("Opera",0);
        }
        return Device._isOpera;
    }
    static get isIE() : boolean {
        if (Device._isIE == null) {
            Device._isIE = !Device.isOpera && new core.DartString(Device.userAgent).contains("Trident/",0);
        }
        return Device._isIE;
    }
    static get isFirefox() : boolean {
        if (Device._isFirefox == null) {
            Device._isFirefox = new core.DartString(Device.userAgent).contains("Firefox",0);
        }
        return Device._isFirefox;
    }
    static get isWebKit() : boolean {
        if (Device._isWebKit == null) {
            Device._isWebKit = !Device.isOpera && new core.DartString(Device.userAgent).contains("WebKit",0);
        }
        return Device._isWebKit;
    }
    static get cssPrefix() : string {
        let prefix : string = Device._cachedCssPrefix;
        if (prefix != null) return prefix;
        if (Device.isFirefox) {
            prefix = '-moz-';
        }else if (Device.isIE) {
            prefix = '-ms-';
        }else if (Device.isOpera) {
            prefix = '-o-';
        }else {
            prefix = '-webkit-';
        }
        return Device._cachedCssPrefix = prefix;
    }
    static get propertyPrefix() : string {
        let prefix : string = Device._cachedPropertyPrefix;
        if (prefix != null) return prefix;
        if (Device.isFirefox) {
            prefix = 'moz';
        }else if (Device.isIE) {
            prefix = 'ms';
        }else if (Device.isOpera) {
            prefix = 'o';
        }else {
            prefix = 'webkit';
        }
        return Device._cachedPropertyPrefix = prefix;
    }
    static isEventTypeSupported(eventType : string) : boolean {
        try {
            let e = new dom.html.Event.eventType(eventType,'');
            return is(e, dom.html.Event);
        } catch (__error__) {

            {
                let _ = __error__;
            }
        }
        return false;
    }
    constructor() {
    }
    @defaultConstructor
    Device() {
    }
}

export namespace _AcceptStructuredCloneDartium {
    export type Constructors = '_AcceptStructuredCloneDartium';
    export type Interface = Omit<_AcceptStructuredCloneDartium, Constructors>;
}
@DartClass
export class _AcceptStructuredCloneDartium {
    newDartList(length : any) {
        return new core.DartList<any>(length);
    }
    identicalInJs(a : any,b : any) : boolean {
        return core.identical(a,b);
    }
    forEachJsField(jsObject : any,action : any) : void {
        let keys = js.JsNative.callMethod(properties._object,"keys",new core.DartList.literal(jsObject));
        for(let key of keys) {
            action(key,js.JsNative.getProperty(jsObject,key));
        }
    }
    clones;

    mustCopy : boolean;

    findSlot(value : any) : core.DartObject {
        return this.clones.putIfAbsent(value,() =>  {
            return null;
        });
    }
    writeSlot(original : any,x : any) {
        op(Op.INDEX_ASSIGN,this.clones,original,x);
    }
    walk(e : any) {
        if (op(Op.EQUALS,e,null)) return e;
        if (is(e, "boolean")) return e;
        if (is(e, "number")) return e;
        if (is(e, "string")) return e;
        if (is(e, core.DartDateTime)) return e;
        if (isJavaScriptRegExp(e)) {
            throw new core.UnimplementedError('structured clone of RegExp');
        }
        if (isJavaScriptPromise(e)) {
            return convertNativePromiseToDartFuture(e);
        }
        if (isJavaScriptSimpleObject(e)) {
            let copy = this.findSlot(e);
            if (copy != null) return copy;
            copy = new core.DartMap.literal([
            ]);
            this.writeSlot(e,copy);
            this.forEachJsField(e,(key : any,value : any) =>  {
                return copy.set(key,this.walk(value));
            });
            return copy;
        }
        if (isJavaScriptArray(e)) {
            let copy = this.findSlot(e);
            if (copy != null) return copy;
            let length : number = e.length;
            copy = this.mustCopy ? this.newDartList(length) : e;
            this.writeSlot(e,copy);
            for(let i : number = 0; i < length; i++){
                op(Op.INDEX_ASSIGN,copy,i,this.walk(op(Op.INDEX,e,i)));
            }
            return copy;
        }
        return e;
    }
    convertNativeToDart_AcceptStructuredClone(object : any,_namedArguments? : {mustCopy? : any}) {
        let {mustCopy} = Object.assign({
            "mustCopy" : false}, _namedArguments );
        this.mustCopy = mustCopy;
        let copy = this.walk(object);
        return copy;
    }
    constructor() {
    }
    @defaultConstructor
    _AcceptStructuredCloneDartium() {
        this.clones = new core.DartHashMap.identity();
        this.mustCopy = false;
    }
}

export namespace _StructuredCloneDartium {
    export type Constructors = _StructuredClone.Constructors | '_StructuredCloneDartium';
    export type Interface = Omit<_StructuredCloneDartium, Constructors>;
}
@DartClass
export class _StructuredCloneDartium extends _StructuredClone {
    newJsMap() {
        return js.JsNative.newObject();
    }
    putIntoMap(map : any,key : any,value : any) {
        return js.JsNative.setProperty(map,key,value);
    }
    newJsList(length : any) {
        return ((_) : js.JSArray =>  {
            {
                _.length = length;
                return _;
            }
        })(js.JsNative.newArray());
    }
    cloneNotRequired(e : any) {
        return is(e, js.JSObject) || is(e, typed_data.TypedData) || is(e, typed_data.ByteBuffer);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StructuredCloneDartium() {
    }
}

export class properties {
    private static __$_promiseConstructor;
    static get _promiseConstructor() { 
        if (this.__$_promiseConstructor===undefined) {
            this.__$_promiseConstructor = js.JsNative.getProperty(dom.html.properties.window,'Promise');
        }
        return this.__$_promiseConstructor;
    }
    static set _promiseConstructor(__$value : any)  { 
        this.__$_promiseConstructor = __$value;
    }

    private static __$_dateConstructor;
    static get _dateConstructor() { 
        if (this.__$_dateConstructor===undefined) {
            this.__$_dateConstructor = js.JsNative.getProperty(dom.html.properties.window,"Date");
        }
        return this.__$_dateConstructor;
    }
    static set _dateConstructor(__$value : any)  { 
        this.__$_dateConstructor = __$value;
    }

    private static __$_regexConstructor;
    static get _regexConstructor() { 
        if (this.__$_regexConstructor===undefined) {
            this.__$_regexConstructor = js.JsNative.getProperty(dom.html.properties.window,"RegExp");
        }
        return this.__$_regexConstructor;
    }
    static set _regexConstructor(__$value : any)  { 
        this.__$_regexConstructor = __$value;
    }

    private static __$_object;
    static get _object() { 
        if (this.__$_object===undefined) {
            this.__$_object = js.JsNative.getProperty(dom.html.properties.window,"Object");
        }
        return this.__$_object;
    }
    static set _object(__$value : any)  { 
        this.__$_object = __$value;
    }

    private static __$_getPrototypeOf;
    static get _getPrototypeOf() { 
        if (this.__$_getPrototypeOf===undefined) {
            this.__$_getPrototypeOf = js.JsNative.getProperty(properties._object,"getPrototypeOf");
        }
        return this.__$_getPrototypeOf;
    }
    static set _getPrototypeOf(__$value : any)  { 
        this.__$_getPrototypeOf = __$value;
    }

    private static __$_objectProto;
    static get _objectProto() { 
        if (this.__$_objectProto===undefined) {
            this.__$_objectProto = js.JsNative.getProperty(properties._object,"prototype");
        }
        return this.__$_objectProto;
    }
    static set _objectProto(__$value : any)  { 
        this.__$_objectProto = __$value;
    }

}
