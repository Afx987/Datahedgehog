/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/ast/ast.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as math from "@dart2ts/dart/math";
import * as lib5 from "@dart2ts/dart/uri";

export namespace NodeListImpl {
    export type Constructors = 'NodeListImpl';
    export type Interface<E extends any> = Omit<NodeListImpl<E extends any>, Constructors>;
}
@DartClass
@Implements(any)
@With(core.DartListMixin)
export class NodeListImpl<E extends any> extends core.DartObject implements any.Interface,core.DartListMixin.Interface<E> {
    @Abstract
    elementAt(index : number) : E {
        throw 'from mixin';
    }
    @Abstract
    forEach(action : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    every(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    any(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(element : E) => boolean) : E {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    where(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(previousValue : E,element : E) => E) : E {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<E> {
        throw 'from mixin';
    }
    @Abstract
    remove(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    removeWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    retainWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    _filter(test : <E>(element : any) => boolean,retainMatching : boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    removeLast() : E {
        throw 'from mixin';
    }
    @Abstract
    sort(compare? : <E>(a : E,b : E) => number) : void {
        throw 'from mixin';
    }
    @Abstract
    _compareAny(a : any,b : any) : number {
        throw 'from mixin';
    }
    @Abstract
    shuffle(random? : math.Random) : void {
        throw 'from mixin';
    }
    @Abstract
    asMap() : core.DartMap<number,E> {
        throw 'from mixin';
    }
    @Abstract
    sublist(start : number,end? : number) : core.DartList<E> {
        throw 'from mixin';
    }
    @Abstract
    getRange(start : number,end : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    removeRange(start : number,end : number) : void {
        throw 'from mixin';
    }
    @Abstract
    fillRange(start : number,end : number,fill? : E) : void {
        throw 'from mixin';
    }
    @Abstract
    setRange(start : number,end : number,iterable : core.DartIterable<E>,skipCount? : number) : void {
        skipCount = skipCount || 0;
        throw 'from mixin';
    }
    @Abstract
    replaceRange(start : number,end : number,newContents : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    indexOf(element : core.DartObject,startIndex? : number) : number {
        startIndex = startIndex || 0;
        throw 'from mixin';
    }
    @Abstract
    lastIndexOf(element : core.DartObject,startIndex? : number) : number {
        throw 'from mixin';
    }
    @Abstract
    insertAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    setAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _owner : AstNodeImpl;

    _elements : core.DartList<E>;

    constructor(_owner : AstNodeImpl,elements? : core.DartList<E>) {
    }
    @defaultConstructor
    NodeListImpl(_owner : AstNodeImpl,elements? : core.DartList<E>) {
        this._elements = new core.DartList.literal<E>();
        this._owner = _owner;
        this.addAll(elements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this._elements.length == 0) {
            return null;
        }
        return this._elements[0].beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        let length : number = this._elements.length;
        if (length == 0) {
            return null;
        }
        return this._elements[length - 1].endToken;
    }
    get length() : number {
        return this._elements.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set length(newLength : number) {
        throw new core.UnsupportedError("Cannot resize NodeList.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get owner() : any {
        return this._owner;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set owner(value : any) {
        this._owner = value as AstNodeImpl;
    }
    [OperatorMethods.INDEX](index : number) : E {
        if (index < 0 || index >= this._elements.length) {
            throw new core.RangeError(`Index: ${index}, Size: ${this._elements.length}`);
        }
        return this._elements[index];
    }
    [OperatorMethods.INDEX_EQ](index : number,node : E) : void {
        if (index < 0 || index >= this._elements.length) {
            throw new core.RangeError(`Index: ${index}, Size: ${this._elements.length}`);
        }
        this._owner._becomeParentOf(node as AstNodeImpl);
        this._elements[index] = node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) {
        let length : number = this._elements.length;
        for(let i = 0; i < length; i++){
            this._elements[i].accept(visitor);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(node : E) : void {
        this.insert(this.length,node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addAll(nodes : core.DartIterable<E>) : boolean {
        if (nodes != null && !nodes.isEmpty) {
            if (is(nodes, core.DartList<E>)) {
                let length : number = nodes.length;
                for(let i : number = 0; i < length; i++){
                    let node : E = nodes[i];
                    this._elements.add(node);
                    this._owner._becomeParentOf(node as AstNodeImpl);
                }
            }else {
                for(let node of nodes) {
                    this._elements.add(node);
                    this._owner._becomeParentOf(node as AstNodeImpl);
                }
            }
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clear() : void {
        this._elements = new core.DartList.literal<E>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insert(index : number,node : E) : void {
        let length : number = this._elements.length;
        if (index < 0 || index > length) {
            throw new core.RangeError(`Index: ${index}, Size: ${this._elements.length}`);
        }
        this._owner._becomeParentOf(node as AstNodeImpl);
        if (length == 0) {
            this._elements.add(node);
        }else {
            this._elements.insert(index,node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeAt(index : number) : E {
        if (index < 0 || index >= this._elements.length) {
            throw new core.RangeError(`Index: ${index}, Size: ${this._elements.length}`);
        }
        let removedNode : E = this._elements[index];
        this._elements.removeAt(index);
        return removedNode;
    }
}

export namespace LocalVariableInfo {
    export type Constructors = 'LocalVariableInfo';
    export type Interface = Omit<LocalVariableInfo, Constructors>;
}
@DartClass
export class LocalVariableInfo {
    potentiallyMutatedInClosure : core.DartSet<any>;

    potentiallyMutatedInScope : core.DartSet<any>;

    constructor() {
    }
    @defaultConstructor
    LocalVariableInfo() {
        this.potentiallyMutatedInClosure = new core.DartSet<any>();
        this.potentiallyMutatedInScope = new core.DartSet<any>();
    }
}

export namespace AstNodeImpl {
    export type Constructors = 'AstNodeImpl';
    export type Interface = Omit<AstNodeImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AstNodeImpl implements any.Interface {
    _parent : any;

    _propertyMap : core.DartMap<string,core.DartObject>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get end() : number {
        return this.offset + this.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        let beginToken : any = this.beginToken;
        let endToken : any = this.endToken;
        if (op(Op.EQUALS,beginToken,null) || op(Op.EQUALS,endToken,null)) {
            return -1;
        }
        return op(Op.MINUS,op(Op.PLUS,endToken.offset,endToken.length),beginToken.offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        let beginToken : any = this.beginToken;
        if (op(Op.EQUALS,beginToken,null)) {
            return -1;
        }
        return beginToken.offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parent() : any {
        return this._parent;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get root() : any {
        let root : any = this;
        let parent : any = this.parent;
        while (parent != null){
            root = parent;
            parent = root.parent;
        }
        return root;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getAncestor(predicate : any) : any {
        let node : any = this;
        while (node != null && !predicate(node)){
            node = node.parent;
        }
        return node as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getProperty(name : string) : core.DartObject {
        if (this._propertyMap == null) {
            return null;
        }
        return this._propertyMap.get(name) as core.DartObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setProperty(name : string,value : core.DartObject) : void {
        if (op(Op.EQUALS,value,null)) {
            if (this._propertyMap != null) {
                this._propertyMap.remove(name);
                if (this._propertyMap.isEmpty) {
                    this._propertyMap = null;
                }
            }
        }else {
            if (this._propertyMap == null) {
                this._propertyMap = new core.DartHashMap<string,core.DartObject>();
            }
            this._propertyMap.set(name,value);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toSource() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        accept(new bare.createInstance(any,null,buffer));
        return buffer.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.toSource();
    }
    _becomeParentOf(child : AstNodeImpl) : any {
        if (child != null) {
            child._parent = this;
        }
        return child;
    }
    constructor() {
    }
    @defaultConstructor
    AstNodeImpl() {
    }
}

export namespace StringLexemeHelper {
    export type Constructors = 'StringLexemeHelper';
    export type Interface = Omit<StringLexemeHelper, Constructors>;
}
@DartClass
export class StringLexemeHelper {
    lexeme : string;

    isFirst : boolean;

    isLast : boolean;

    isRaw : boolean;

    isSingleQuoted : boolean;

    isMultiline : boolean;

    start : number;

    end : number;

    constructor(lexeme : string,isFirst : boolean,isLast : boolean) {
    }
    @defaultConstructor
    StringLexemeHelper(lexeme : string,isFirst : boolean,isLast : boolean) {
        this.isRaw = false;
        this.isSingleQuoted = false;
        this.isMultiline = false;
        this.start = 0;
        this.lexeme = lexeme;
        this.isFirst = isFirst;
        this.isLast = isLast;
        if (this.isFirst) {
            this.isRaw = StringUtilities.startsWithChar(this.lexeme,114);
            if (this.isRaw) {
                this.start++;
            }
            if (StringUtilities.startsWith3(this.lexeme,this.start,39,39,39)) {
                this.isSingleQuoted = true;
                this.isMultiline = true;
                this.start += 3;
                this.start = this._trimInitialWhitespace(this.start);
            }else if (StringUtilities.startsWith3(this.lexeme,this.start,34,34,34)) {
                this.isSingleQuoted = false;
                this.isMultiline = true;
                this.start += 3;
                this.start = this._trimInitialWhitespace(this.start);
            }else if (this.start < new core.DartString(this.lexeme).length && new core.DartString(this.lexeme).codeUnitAt(this.start) == 39) {
                this.isSingleQuoted = true;
                this.isMultiline = false;
                this.start++;
            }else if (this.start < new core.DartString(this.lexeme).length && new core.DartString(this.lexeme).codeUnitAt(this.start) == 34) {
                this.isSingleQuoted = false;
                this.isMultiline = false;
                this.start++;
            }
        }
        this.end = new core.DartString(this.lexeme).length;
        if (this.isLast) {
            if (this.start + 3 <= this.end && (StringUtilities.endsWith3(this.lexeme,34,34,34) || StringUtilities.endsWith3(this.lexeme,39,39,39))) {
                this.end -= 3;
            }else if (this.start + 1 <= this.end && (StringUtilities.endsWithChar(this.lexeme,34) || StringUtilities.endsWithChar(this.lexeme,39))) {
                this.end -= 1;
            }
        }
    }
    _trimInitialWhitespace(start : number) : number {
        let length : number = new core.DartString(this.lexeme).length;
        let index : number = start;
        while (index < length){
            let currentChar : number = new core.DartString(this.lexeme).codeUnitAt(index);
            if (currentChar == 13) {
                if (index + 1 < length && new core.DartString(this.lexeme).codeUnitAt(index + 1) == 10) {
                    return index + 2;
                }
                return index + 1;
            }else if (currentChar == 10) {
                return index + 1;
            }else if (currentChar == 92) {
                if (index + 1 >= length) {
                    return start;
                }
                currentChar = new core.DartString(this.lexeme).codeUnitAt(index + 1);
                if (currentChar != 13 && currentChar != 10 && currentChar != 9 && currentChar != 32) {
                    return start;
                }
            }else if (currentChar != 9 && currentChar != 32) {
                return start;
            }
            index++;
        }
        return start;
    }
}

export namespace ChildEntities {
    export type Constructors = 'ChildEntities';
    export type Interface = Omit<ChildEntities, Constructors>;
}
@DartClass
@Implements(core.DartIterable)
@With(core.DartIterableMixin)
export class ChildEntities extends core.DartObject implements core.DartIterable.Interface<any>,core.DartIterableMixin.Interface<any> {
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    where(f : <E>(element : E) => boolean) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    forEach(f : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(value : E,element : E) => E) : any {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    every(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    any(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<any> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<any> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : any {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : any {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(value : E) => boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    elementAt(index : number) : any {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    _entities : core.DartList<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterator() : core.DartIterator<any> {
        return this._entities.iterator;
    }
    add(entity : any) : void {
        if (entity != null) {
            this._entities.add(entity);
        }
    }
    addAll(items : core.DartIterable<any>) : void {
        if (items != null) {
            this._entities.addAll(items);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ChildEntities() {
        this._entities = new core.DartList.literal();
    }
}

export namespace CommentType {
    export type Constructors = 'CommentType';
    export type Interface = Omit<CommentType, Constructors>;
}
@DartClass
export class CommentType {
    private static __$BLOCK : CommentType;
    static get BLOCK() : CommentType { 
        if (this.__$BLOCK===undefined) {
            this.__$BLOCK = new CommentType('BLOCK');
        }
        return this.__$BLOCK;
    }

    private static __$DOCUMENTATION : CommentType;
    static get DOCUMENTATION() : CommentType { 
        if (this.__$DOCUMENTATION===undefined) {
            this.__$DOCUMENTATION = new CommentType('DOCUMENTATION');
        }
        return this.__$DOCUMENTATION;
    }

    private static __$END_OF_LINE : CommentType;
    static get END_OF_LINE() : CommentType { 
        if (this.__$END_OF_LINE===undefined) {
            this.__$END_OF_LINE = new CommentType('END_OF_LINE');
        }
        return this.__$END_OF_LINE;
    }

    name : string;

    constructor(name : string) {
    }
    @defaultConstructor
    CommentType(name : string) {
        this.name = name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace UriValidationCode {
    export type Constructors = 'UriValidationCode';
    export type Interface = Omit<UriValidationCode, Constructors>;
}
@DartClass
export class UriValidationCode {
    private static __$INVALID_URI : UriValidationCode;
    static get INVALID_URI() : UriValidationCode { 
        if (this.__$INVALID_URI===undefined) {
            this.__$INVALID_URI = new UriValidationCode('INVALID_URI');
        }
        return this.__$INVALID_URI;
    }

    private static __$URI_WITH_INTERPOLATION : UriValidationCode;
    static get URI_WITH_INTERPOLATION() : UriValidationCode { 
        if (this.__$URI_WITH_INTERPOLATION===undefined) {
            this.__$URI_WITH_INTERPOLATION = new UriValidationCode('URI_WITH_INTERPOLATION');
        }
        return this.__$URI_WITH_INTERPOLATION;
    }

    private static __$URI_WITH_DART_EXT_SCHEME : UriValidationCode;
    static get URI_WITH_DART_EXT_SCHEME() : UriValidationCode { 
        if (this.__$URI_WITH_DART_EXT_SCHEME===undefined) {
            this.__$URI_WITH_DART_EXT_SCHEME = new UriValidationCode('URI_WITH_DART_EXT_SCHEME');
        }
        return this.__$URI_WITH_DART_EXT_SCHEME;
    }

    name : string;

    constructor(name : string) {
    }
    @defaultConstructor
    UriValidationCode(name : string) {
        this.name = name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace SwitchMemberImpl {
    export type Constructors = AstNodeImpl.Constructors | 'SwitchMemberImpl';
    export type Interface = Omit<SwitchMemberImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SwitchMemberImpl extends AstNodeImpl implements any.Interface {
    _labels : any;

    keyword : any;

    colon : any;

    _statements : any;

    constructor(labels : core.DartList<any>,keyword : any,colon : any,statements : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchMemberImpl(labels : core.DartList<any>,keyword : any,colon : any,statements : core.DartList<any>) {
        this.keyword = keyword;
        this.colon = colon;
        this._labels = new NodeListImpl<any>(this,labels);
        this._statements = new NodeListImpl<any>(this,statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (!this._labels.isEmpty) {
            return this._labels.beginToken;
        }
        return this.keyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (!this._statements.isEmpty) {
            return this._statements.endToken;
        }
        return this.colon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get labels() : any {
        return this._labels;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get statements() : any {
        return this._statements;
    }
}

export namespace AnnotationImpl {
    export type Constructors = AstNodeImpl.Constructors | 'AnnotationImpl';
    export type Interface = Omit<AnnotationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AnnotationImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    atSign : any;

    _name : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    period : any;

    _constructorName : any;

    _arguments : any;

    _element : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elementAnnotation : any;

    constructor(atSign : any,name : IdentifierImpl,period : any,constructorName : SimpleIdentifierImpl,arguments : ArgumentListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnnotationImpl(atSign : any,name : IdentifierImpl,period : any,constructorName : SimpleIdentifierImpl,arguments : ArgumentListImpl) {
        this.atSign = atSign;
        this.period = period;
        this._name = this._becomeParentOf(name);
        this._constructorName = this._becomeParentOf(constructorName);
        this._arguments = this._becomeParentOf(arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get arguments() : any {
        return this._arguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set arguments(arguments : any) {
        this._arguments = this._becomeParentOf(arguments as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.atSign;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.atSign);
                _.add(this._name);
                _.add(this.period);
                _.add(this._constructorName);
                _.add(this._arguments);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructorName() : any {
        return this._constructorName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set constructorName(name : any) {
        this._constructorName = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        if (this._element != null) {
            return this._element;
        }else if (op(Op.EQUALS,this._constructorName,null) && this._name != null) {
            return this._name.staticElement;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set element(element : any) {
        this._element = element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._arguments != null) {
            return this._arguments.endToken;
        }else if (this._constructorName != null) {
            return this._constructorName.endToken;
        }
        return this._name.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(name : any) {
        this._name = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitAnnotation(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_69_)=>(!!_69_)?_69_.accept(visitor):null)(this._name);
        ((_70_)=>(!!_70_)?_70_.accept(visitor):null)(this._constructorName);
        ((_71_)=>(!!_71_)?_71_.accept(visitor):null)(this._arguments);
    }
}

export namespace WithClauseImpl {
    export type Constructors = AstNodeImpl.Constructors | 'WithClauseImpl';
    export type Interface = Omit<WithClauseImpl, Constructors>;
}
@DartClass
@Implements(any)
export class WithClauseImpl extends AstNodeImpl implements any.Interface {
    withKeyword : any;

    _mixinTypes : any;

    constructor(withKeyword : any,mixinTypes : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WithClauseImpl(withKeyword : any,mixinTypes : core.DartList<any>) {
        this.withKeyword = withKeyword;
        this._mixinTypes = new NodeListImpl<any>(this,mixinTypes);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.withKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.withKeyword);
                _.addAll(this._mixinTypes);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._mixinTypes.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mixinTypes() : any {
        return this._mixinTypes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitWithClause(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._mixinTypes.accept(visitor);
    }
}

export namespace ArgumentListImpl {
    export type Constructors = AstNodeImpl.Constructors | 'ArgumentListImpl';
    export type Interface = Omit<ArgumentListImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ArgumentListImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _arguments : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    _correspondingStaticParameters : core.DartList<any>;

    _correspondingPropagatedParameters : core.DartList<any>;

    constructor(leftParenthesis : any,arguments : core.DartList<any>,rightParenthesis : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ArgumentListImpl(leftParenthesis : any,arguments : core.DartList<any>,rightParenthesis : any) {
        this.leftParenthesis = leftParenthesis;
        this.rightParenthesis = rightParenthesis;
        this._arguments = new NodeListImpl<any>(this,arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get arguments() : any {
        return this._arguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.leftParenthesis;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.leftParenthesis);
                _.addAll(this._arguments);
                _.add(this.rightParenthesis);
                return _;
            }
        })(new ChildEntities());
    }
    get correspondingPropagatedParameters() : core.DartList<any> {
        return this._correspondingPropagatedParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set correspondingPropagatedParameters(parameters : core.DartList<any>) {
        if (parameters != null && parameters.length != this._arguments.length) {
            throw new core.ArgumentError(`Expected ${this._arguments.length} parameters, not ${parameters.length}`);
        }
        this._correspondingPropagatedParameters = parameters;
    }
    get correspondingStaticParameters() : core.DartList<any> {
        return this._correspondingStaticParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set correspondingStaticParameters(parameters : core.DartList<any>) {
        if (parameters != null && parameters.length != this._arguments.length) {
            throw new core.ArgumentError(`Expected ${this._arguments.length} parameters, not ${parameters.length}`);
        }
        this._correspondingStaticParameters = parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightParenthesis;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitArgumentList(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._arguments.accept(visitor);
    }
    _getPropagatedParameterElementFor(expression : any) : any {
        if (this._correspondingPropagatedParameters == null || this._correspondingPropagatedParameters.length != this._arguments.length) {
            return null;
        }
        let index : number = this._arguments.indexOf(expression);
        if (index < 0) {
            return null;
        }
        return this._correspondingPropagatedParameters[index];
    }
    _getStaticParameterElementFor(expression : any) : any {
        if (this._correspondingStaticParameters == null || this._correspondingStaticParameters.length != this._arguments.length) {
            return null;
        }
        let index : number = this._arguments.indexOf(expression);
        if (index < 0) {
            return null;
        }
        return this._correspondingStaticParameters[index];
    }
}

export namespace CombinatorImpl {
    export type Constructors = AstNodeImpl.Constructors | 'CombinatorImpl';
    export type Interface = Omit<CombinatorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CombinatorImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    keyword : any;

    constructor(keyword : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CombinatorImpl(keyword : any) {
        this.keyword = keyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.keyword;
    }
}

export namespace CommentImpl {
    export type Constructors = AstNodeImpl.Constructors | 'CommentImpl';
    export type Interface = Omit<CommentImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CommentImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tokens : core.DartList<any>;

    _type : CommentType;

    _references : any;

    constructor(tokens : core.DartList<any>,_type : CommentType,references : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CommentImpl(tokens : core.DartList<any>,_type : CommentType,references : core.DartList<any>) {
        this.tokens = tokens;
        this._type = _type;
        this._references = new NodeListImpl<any>(this,references);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.tokens[0];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this.tokens);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.tokens[this.tokens.length - 1];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBlock() : boolean {
        return op(Op.EQUALS,this._type,CommentType.BLOCK);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDocumentation() : boolean {
        return op(Op.EQUALS,this._type,CommentType.DOCUMENTATION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEndOfLine() : boolean {
        return op(Op.EQUALS,this._type,CommentType.END_OF_LINE);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get references() : any {
        return this._references;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitComment(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._references.accept(visitor);
    }
    static createBlockComment(tokens : core.DartList<any>) : any {
        return new CommentImpl(tokens,CommentType.BLOCK,null);
    }
    static createDocumentationComment(tokens : core.DartList<any>) : any {
        return new CommentImpl(tokens,CommentType.DOCUMENTATION,new core.DartList<any>());
    }
    static createDocumentationCommentWithReferences(tokens : core.DartList<any>,references : core.DartList<any>) : any {
        return new CommentImpl(tokens,CommentType.DOCUMENTATION,references);
    }
    static createEndOfLineComment(tokens : core.DartList<any>) : any {
        return new CommentImpl(tokens,CommentType.END_OF_LINE,null);
    }
}

export namespace CommentReferenceImpl {
    export type Constructors = AstNodeImpl.Constructors | 'CommentReferenceImpl';
    export type Interface = Omit<CommentReferenceImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CommentReferenceImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    newKeyword : any;

    _identifier : any;

    constructor(newKeyword : any,identifier : IdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CommentReferenceImpl(newKeyword : any,identifier : IdentifierImpl) {
        this.newKeyword = newKeyword;
        this._identifier = this._becomeParentOf(identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._identifier.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.newKeyword);
                _.add(this._identifier);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._identifier.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : any {
        return this._identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set identifier(identifier : any) {
        this._identifier = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitCommentReference(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_101_)=>(!!_101_)?_101_.accept(visitor):null)(this._identifier);
    }
}

export namespace CompilationUnitImpl {
    export type Constructors = AstNodeImpl.Constructors | 'CompilationUnitImpl';
    export type Interface = Omit<CompilationUnitImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CompilationUnitImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginToken : any;

    _scriptTag : any;

    _directives : any;

    _declarations : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endToken : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    element : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lineInfo : any;

    constructor(beginToken : any,scriptTag : ScriptTagImpl,directives : core.DartList<any>,declarations : core.DartList<any>,endToken : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitImpl(beginToken : any,scriptTag : ScriptTagImpl,directives : core.DartList<any>,declarations : core.DartList<any>,endToken : any) {
        this.beginToken = beginToken;
        this.endToken = endToken;
        this._scriptTag = this._becomeParentOf(scriptTag);
        this._directives = new NodeListImpl<any>(this,directives);
        this._declarations = new NodeListImpl<any>(this,declarations);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        let result : ChildEntities = ((_) : ChildEntities =>  {
            {
                _.add(this._scriptTag);
                return _;
            }
        })(new ChildEntities());
        if (this._directivesAreBeforeDeclarations) {
            ((_) : ChildEntities =>  {
                {
                    _.addAll(this._directives);
                    _.addAll(this._declarations);
                    return _;
                }
            })(result);
        }else {
            result.addAll(this.sortedDirectivesAndDeclarations);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get declarations() : any {
        return this._declarations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get directives() : any {
        return this._directives;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        let endToken : any = this.endToken;
        if (op(Op.EQUALS,endToken,null)) {
            return 0;
        }
        return op(Op.PLUS,endToken.offset,endToken.length);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get scriptTag() : any {
        return this._scriptTag;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set scriptTag(scriptTag : any) {
        this._scriptTag = this._becomeParentOf(scriptTag as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sortedDirectivesAndDeclarations() : core.DartList<any> {
        return ((_) : core.DartList<any> =>  {
            {
                _.addAll(this._directives);
                _.addAll(this._declarations);
                _.sort(AstNode.LEXICAL_ORDER);
                return _;
            }
        })(new core.DartList.literal<any>());
    }
    get _directivesAreBeforeDeclarations() : boolean {
        if (this._directives.isEmpty || this._declarations.isEmpty) {
            return true;
        }
        let lastDirective : any = op(Op.INDEX,this._directives,op(Op.MINUS,this._directives.length,1));
        let firstDeclaration : any = op(Op.INDEX,this._declarations,0);
        return op(Op.LT,lastDirective.offset,firstDeclaration.offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitCompilationUnit(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_102_)=>(!!_102_)?_102_.accept(visitor):null)(this._scriptTag);
        if (this._directivesAreBeforeDeclarations) {
            this._directives.accept(visitor);
            this._declarations.accept(visitor);
        }else {
            let sortedMembers : core.DartList<any> = this.sortedDirectivesAndDeclarations;
            let length : number = sortedMembers.length;
            for(let i : number = 0; i < length; i++){
                let child : any = sortedMembers[i];
                child.accept(visitor);
            }
        }
    }
}

export namespace ConfigurationImpl {
    export type Constructors = AstNodeImpl.Constructors | 'ConfigurationImpl';
    export type Interface = Omit<ConfigurationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConfigurationImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ifKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _name : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalToken : any;

    _value : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    _uri : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uriSource : any;

    constructor(ifKeyword : any,leftParenthesis : any,name : DottedNameImpl,equalToken : any,value : StringLiteralImpl,rightParenthesis : any,libraryUri : StringLiteralImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConfigurationImpl(ifKeyword : any,leftParenthesis : any,name : DottedNameImpl,equalToken : any,value : StringLiteralImpl,rightParenthesis : any,libraryUri : StringLiteralImpl) {
        this.ifKeyword = ifKeyword;
        this.leftParenthesis = leftParenthesis;
        this.equalToken = equalToken;
        this.rightParenthesis = rightParenthesis;
        this._name = this._becomeParentOf(name);
        this._value = this._becomeParentOf(value);
        this._uri = this._becomeParentOf(libraryUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.ifKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.ifKeyword);
                _.add(this.leftParenthesis);
                _.add(this._name);
                _.add(this.equalToken);
                _.add(this._value);
                _.add(this.rightParenthesis);
                _.add(this._uri);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._uri.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryUri() : any {
        return this._uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set libraryUri(libraryUri : any) {
        this._uri = this._becomeParentOf(libraryUri as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(name : any) {
        this._name = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : any {
        return this._uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uri(uri : any) {
        this._uri = this._becomeParentOf(uri as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : any {
        return this._value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set value(value : any) {
        this._value = this._becomeParentOf(value as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitConfiguration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_106_)=>(!!_106_)?_106_.accept(visitor):null)(this._name);
        ((_107_)=>(!!_107_)?_107_.accept(visitor):null)(this._value);
        ((_108_)=>(!!_108_)?_108_.accept(visitor):null)(this._uri);
    }
}

export namespace TypeParameterListImpl {
    export type Constructors = AstNodeImpl.Constructors | 'TypeParameterListImpl';
    export type Interface = Omit<TypeParameterListImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeParameterListImpl extends AstNodeImpl implements any.Interface {
    leftBracket : any;

    _typeParameters : any;

    rightBracket : any;

    constructor(leftBracket : any,typeParameters : core.DartList<any>,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterListImpl(leftBracket : any,typeParameters : core.DartList<any>,rightBracket : any) {
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._typeParameters = new NodeListImpl<any>(this,typeParameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.leftBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.leftBracket);
                _.addAll(this._typeParameters);
                _.add(this.rightBracket);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitTypeParameterList(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._typeParameters.accept(visitor);
    }
}

export namespace ConstructorInitializerImpl {
    export type Constructors = AstNodeImpl.Constructors | 'ConstructorInitializerImpl';
    export type Interface = Omit<ConstructorInitializerImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConstructorInitializerImpl extends AstNodeImpl implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorInitializerImpl() {
    }
}

export namespace ConstructorNameImpl {
    export type Constructors = AstNodeImpl.Constructors | 'ConstructorNameImpl';
    export type Interface = Omit<ConstructorNameImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConstructorNameImpl extends AstNodeImpl implements any.Interface {
    _type : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    period : any;

    _name : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElement : any;

    constructor(type : TypeNameImpl,period : any,name : SimpleIdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorNameImpl(type : TypeNameImpl,period : any,name : SimpleIdentifierImpl) {
        this.period = period;
        this._type = this._becomeParentOf(type);
        this._name = this._becomeParentOf(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._type.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._type);
                _.add(this.period);
                _.add(this._name);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._name != null) {
            return this._name.endToken;
        }
        return this._type.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(name : any) {
        this._name = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        this._type = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitConstructorName(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_116_)=>(!!_116_)?_116_.accept(visitor):null)(this._type);
        ((_117_)=>(!!_117_)?_117_.accept(visitor):null)(this._name);
    }
}

export namespace AnnotatedNodeImpl {
    export type Constructors = AstNodeImpl.Constructors | 'AnnotatedNodeImpl';
    export type Interface = Omit<AnnotatedNodeImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AnnotatedNodeImpl extends AstNodeImpl implements any.Interface {
    _comment : any;

    _metadata : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnnotatedNodeImpl(comment : CommentImpl,metadata : core.DartList<any>) {
        this._comment = this._becomeParentOf(comment);
        this._metadata = new NodeListImpl<any>(this,metadata);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (op(Op.EQUALS,this._comment,null)) {
            if (this._metadata.isEmpty) {
                return firstTokenAfterCommentAndMetadata;
            }
            return this._metadata.beginToken;
        }else if (this._metadata.isEmpty) {
            return this._comment.beginToken;
        }
        let commentToken : any = this._comment.beginToken;
        let metadataToken : any = this._metadata.beginToken;
        if (op(Op.LT,commentToken.offset,metadataToken.offset)) {
            return commentToken;
        }
        return metadataToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : any {
        return this._comment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set documentationComment(comment : any) {
        this._comment = this._becomeParentOf(comment as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : any {
        return this._metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sortedCommentAndAnnotations() : core.DartList<any> {
        return ((_) : core.DartList<any> =>  {
            {
                _.add(this._comment);
                _.addAll(this._metadata);
                _.sort(AstNode.LEXICAL_ORDER);
                return _;
            }
        })(new core.DartList.literal<any>());
    }
    get _childEntities() : ChildEntities {
        let result : ChildEntities = new ChildEntities();
        if (this._commentIsBeforeAnnotations()) {
            ((_) : ChildEntities =>  {
                {
                    _.add(this._comment);
                    _.addAll(this._metadata);
                    return _;
                }
            })(result);
        }else {
            result.addAll(this.sortedCommentAndAnnotations);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        if (this._commentIsBeforeAnnotations()) {
            ((_68_)=>(!!_68_)?_68_.accept(visitor):null)(this._comment);
            this._metadata.accept(visitor);
        }else {
            let children : core.DartList<any> = this.sortedCommentAndAnnotations;
            let length : number = children.length;
            for(let i : number = 0; i < length; i++){
                children[i].accept(visitor);
            }
        }
    }
    _commentIsBeforeAnnotations() : boolean {
        if (op(Op.EQUALS,this._comment,null) || this._metadata.isEmpty) {
            return true;
        }
        let firstAnnotation : any = op(Op.INDEX,this._metadata,0);
        return op(Op.LT,this._comment.offset,firstAnnotation.offset);
    }
}

export namespace FormalParameterImpl {
    export type Constructors = AstNodeImpl.Constructors | 'FormalParameterImpl';
    export type Interface = Omit<FormalParameterImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FormalParameterImpl extends AstNodeImpl implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        let identifier : any = this.identifier;
        if (op(Op.EQUALS,identifier,null)) {
            return null;
        }
        return identifier.staticElement as any;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormalParameterImpl() {
    }
}

export namespace LabelImpl {
    export type Constructors = AstNodeImpl.Constructors | 'LabelImpl';
    export type Interface = Omit<LabelImpl, Constructors>;
}
@DartClass
@Implements(any)
export class LabelImpl extends AstNodeImpl implements any.Interface {
    _label : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    colon : any;

    constructor(label : SimpleIdentifierImpl,colon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabelImpl(label : SimpleIdentifierImpl,colon : any) {
        this.colon = colon;
        this._label = this._becomeParentOf(label);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._label.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._label);
                _.add(this.colon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.colon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get label() : any {
        return this._label;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set label(label : any) {
        this._label = this._becomeParentOf(label as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitLabel(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_179_)=>(!!_179_)?_179_.accept(visitor):null)(this._label);
    }
}

export namespace InterpolationElementImpl {
    export type Constructors = AstNodeImpl.Constructors | 'InterpolationElementImpl';
    export type Interface = Omit<InterpolationElementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class InterpolationElementImpl extends AstNodeImpl implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterpolationElementImpl() {
    }
}

export namespace NativeClauseImpl {
    export type Constructors = AstNodeImpl.Constructors | 'NativeClauseImpl';
    export type Interface = Omit<NativeClauseImpl, Constructors>;
}
@DartClass
@Implements(any)
export class NativeClauseImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nativeKeyword : any;

    _name : any;

    constructor(nativeKeyword : any,name : StringLiteralImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NativeClauseImpl(nativeKeyword : any,name : StringLiteralImpl) {
        this.nativeKeyword = nativeKeyword;
        this._name = this._becomeParentOf(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.nativeKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.nativeKeyword);
                _.add(this._name);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._name.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(name : any) {
        this._name = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitNativeClause(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_194_)=>(!!_194_)?_194_.accept(visitor):null)(this._name);
    }
}

export namespace ExtendsClauseImpl {
    export type Constructors = AstNodeImpl.Constructors | 'ExtendsClauseImpl';
    export type Interface = Omit<ExtendsClauseImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ExtendsClauseImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    extendsKeyword : any;

    _superclass : any;

    constructor(extendsKeyword : any,superclass : TypeNameImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtendsClauseImpl(extendsKeyword : any,superclass : TypeNameImpl) {
        this.extendsKeyword = extendsKeyword;
        this._superclass = this._becomeParentOf(superclass);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.extendsKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.extendsKeyword);
                _.add(this._superclass);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._superclass.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get superclass() : any {
        return this._superclass;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set superclass(name : any) {
        this._superclass = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitExtendsClause(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_129_)=>(!!_129_)?_129_.accept(visitor):null)(this._superclass);
    }
}

export namespace ScriptTagImpl {
    export type Constructors = AstNodeImpl.Constructors | 'ScriptTagImpl';
    export type Interface = Omit<ScriptTagImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ScriptTagImpl extends AstNodeImpl implements any.Interface {
    scriptTag : any;

    constructor(scriptTag : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScriptTagImpl(scriptTag : any) {
        this.scriptTag = scriptTag;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.scriptTag;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.scriptTag);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.scriptTag;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitScriptTag(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace ExpressionImpl {
    export type Constructors = AstNodeImpl.Constructors | 'ExpressionImpl';
    export type Interface = Omit<ExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ExpressionImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticType : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedType : any;

    get bestParameterElement() : any {
        let propagatedElement : any = this.propagatedParameterElement;
        if (propagatedElement != null) {
            return propagatedElement;
        }
        return this.staticParameterElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestType() : any {
        if (this.propagatedType != null) {
            return this.propagatedType;
        }else if (this.staticType != null) {
            return this.staticType;
        }
        return DynamicTypeImpl.instance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAssignable() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedParameterElement() : any {
        let parent : any = this.parent;
        if (is(parent, ArgumentListImpl)) {
            return parent._getPropagatedParameterElementFor(this);
        }else if (is(parent, IndexExpressionImpl)) {
            if (core.identical(parent.index,this)) {
                return parent._propagatedParameterElementForIndex;
            }
        }else if (is(parent, BinaryExpressionImpl)) {
            if (core.identical(parent.rightOperand,this)) {
                return parent._propagatedParameterElementForRightOperand;
            }
        }else if (is(parent, AssignmentExpressionImpl)) {
            if (core.identical(parent.rightHandSide,this)) {
                return parent._propagatedParameterElementForRightHandSide;
            }
        }else if (is(parent, PrefixExpressionImpl)) {
            return parent._propagatedParameterElementForOperand;
        }else if (is(parent, PostfixExpressionImpl)) {
            return parent._propagatedParameterElementForOperand;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get staticParameterElement() : any {
        let parent : any = this.parent;
        if (is(parent, ArgumentListImpl)) {
            return parent._getStaticParameterElementFor(this);
        }else if (is(parent, IndexExpressionImpl)) {
            if (core.identical(parent.index,this)) {
                return parent._staticParameterElementForIndex;
            }
        }else if (is(parent, BinaryExpressionImpl)) {
            if (core.identical(parent.rightOperand,this)) {
                return parent._staticParameterElementForRightOperand;
            }
        }else if (is(parent, AssignmentExpressionImpl)) {
            if (core.identical(parent.rightHandSide,this)) {
                return parent._staticParameterElementForRightHandSide;
            }
        }else if (is(parent, PrefixExpressionImpl)) {
            return parent._staticParameterElementForOperand;
        }else if (is(parent, PostfixExpressionImpl)) {
            return parent._staticParameterElementForOperand;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unParenthesized() : any {
        return this;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionImpl() {
    }
}

export namespace CatchClauseImpl {
    export type Constructors = AstNodeImpl.Constructors | 'CatchClauseImpl';
    export type Interface = Omit<CatchClauseImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CatchClauseImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onKeyword : any;

    _exceptionType : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    catchKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _exceptionParameter : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    comma : any;

    _stackTraceParameter : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    _body : any;

    constructor(onKeyword : any,exceptionType : TypeAnnotationImpl,catchKeyword : any,leftParenthesis : any,exceptionParameter : SimpleIdentifierImpl,comma : any,stackTraceParameter : SimpleIdentifierImpl,rightParenthesis : any,body : BlockImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CatchClauseImpl(onKeyword : any,exceptionType : TypeAnnotationImpl,catchKeyword : any,leftParenthesis : any,exceptionParameter : SimpleIdentifierImpl,comma : any,stackTraceParameter : SimpleIdentifierImpl,rightParenthesis : any,body : BlockImpl) {
        this.onKeyword = onKeyword;
        this.catchKeyword = catchKeyword;
        this.leftParenthesis = leftParenthesis;
        this.comma = comma;
        this.rightParenthesis = rightParenthesis;
        this._exceptionType = this._becomeParentOf(exceptionType);
        this._exceptionParameter = this._becomeParentOf(exceptionParameter);
        this._stackTraceParameter = this._becomeParentOf(stackTraceParameter);
        this._body = this._becomeParentOf(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this.onKeyword != null) {
            return this.onKeyword;
        }
        return this.catchKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(block : any) {
        this._body = this._becomeParentOf(block as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.onKeyword);
                _.add(this._exceptionType);
                _.add(this.catchKeyword);
                _.add(this.leftParenthesis);
                _.add(this._exceptionParameter);
                _.add(this.comma);
                _.add(this._stackTraceParameter);
                _.add(this.rightParenthesis);
                _.add(this._body);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._body.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exceptionParameter() : any {
        return this._exceptionParameter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set exceptionParameter(parameter : any) {
        this._exceptionParameter = this._becomeParentOf(parameter as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exceptionType() : any {
        return this._exceptionType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set exceptionType(exceptionType : any) {
        this._exceptionType = this._becomeParentOf(exceptionType as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stackTraceParameter() : any {
        return this._stackTraceParameter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set stackTraceParameter(parameter : any) {
        this._stackTraceParameter = this._becomeParentOf(parameter as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitCatchClause(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_86_)=>(!!_86_)?_86_.accept(visitor):null)(this._exceptionType);
        ((_87_)=>(!!_87_)?_87_.accept(visitor):null)(this._exceptionParameter);
        ((_88_)=>(!!_88_)?_88_.accept(visitor):null)(this._stackTraceParameter);
        ((_89_)=>(!!_89_)?_89_.accept(visitor):null)(this._body);
    }
}

export namespace ImplementsClauseImpl {
    export type Constructors = AstNodeImpl.Constructors | 'ImplementsClauseImpl';
    export type Interface = Omit<ImplementsClauseImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ImplementsClauseImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    implementsKeyword : any;

    _interfaces : any;

    constructor(implementsKeyword : any,interfaces : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImplementsClauseImpl(implementsKeyword : any,interfaces : core.DartList<any>) {
        this.implementsKeyword = implementsKeyword;
        this._interfaces = new NodeListImpl<any>(this,interfaces);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.implementsKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.implementsKeyword);
                _.addAll(this.interfaces);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._interfaces.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interfaces() : any {
        return this._interfaces;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitImplementsClause(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._interfaces.accept(visitor);
    }
}

export namespace MapLiteralEntryImpl {
    export type Constructors = AstNodeImpl.Constructors | 'MapLiteralEntryImpl';
    export type Interface = Omit<MapLiteralEntryImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MapLiteralEntryImpl extends AstNodeImpl implements any.Interface {
    _key : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    separator : any;

    _value : any;

    constructor(key : ExpressionImpl,separator : any,value : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapLiteralEntryImpl(key : ExpressionImpl,separator : any,value : ExpressionImpl) {
        this.separator = separator;
        this._key = this._becomeParentOf(key);
        this._value = this._becomeParentOf(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._key.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._key);
                _.add(this.separator);
                _.add(this._value);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._value.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get key() : any {
        return this._key;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set key(string : any) {
        this._key = this._becomeParentOf(string as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : any {
        return this._value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set value(expression : any) {
        this._value = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitMapLiteralEntry(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_181_)=>(!!_181_)?_181_.accept(visitor):null)(this._key);
        ((_182_)=>(!!_182_)?_182_.accept(visitor):null)(this._value);
    }
}

export namespace TypeAnnotationImpl {
    export type Constructors = AstNodeImpl.Constructors | 'TypeAnnotationImpl';
    export type Interface = Omit<TypeAnnotationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeAnnotationImpl extends AstNodeImpl implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeAnnotationImpl() {
    }
}

export namespace StatementImpl {
    export type Constructors = AstNodeImpl.Constructors | 'StatementImpl';
    export type Interface = Omit<StatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class StatementImpl extends AstNodeImpl implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlabeled() : any {
        return this;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatementImpl() {
    }
}

export namespace FunctionBodyImpl {
    export type Constructors = AstNodeImpl.Constructors | 'FunctionBodyImpl';
    export type Interface = Omit<FunctionBodyImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionBodyImpl extends AstNodeImpl implements any.Interface {
    localVariableInfo : LocalVariableInfo;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGenerator() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynchronous() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get keyword() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get star() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isPotentiallyMutatedInClosure(variable : any) : boolean {
        if (op(Op.EQUALS,this.localVariableInfo,null)) {
            throw new core.StateError('Resolution has not yet been performed');
        }
        return this.localVariableInfo.potentiallyMutatedInClosure.contains(variable);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isPotentiallyMutatedInScope(variable : any) : boolean {
        if (op(Op.EQUALS,this.localVariableInfo,null)) {
            throw new core.StateError('Resolution has not yet been performed');
        }
        return this.localVariableInfo.potentiallyMutatedInScope.contains(variable);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionBodyImpl() {
    }
}

export namespace FormalParameterListImpl {
    export type Constructors = AstNodeImpl.Constructors | 'FormalParameterListImpl';
    export type Interface = Omit<FormalParameterListImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FormalParameterListImpl extends AstNodeImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _parameters : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftDelimiter : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightDelimiter : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    constructor(leftParenthesis : any,parameters : core.DartList<any>,leftDelimiter : any,rightDelimiter : any,rightParenthesis : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormalParameterListImpl(leftParenthesis : any,parameters : core.DartList<any>,leftDelimiter : any,rightDelimiter : any,rightParenthesis : any) {
        this.leftParenthesis = leftParenthesis;
        this.leftDelimiter = leftDelimiter;
        this.rightDelimiter = rightDelimiter;
        this.rightParenthesis = rightParenthesis;
        this._parameters = new NodeListImpl<any>(this,parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.leftParenthesis;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        let result : ChildEntities = ((_) : ChildEntities =>  {
            {
                _.add(this.leftParenthesis);
                return _;
            }
        })(new ChildEntities());
        let leftDelimiterNeeded : boolean = this.leftDelimiter != null;
        let length : number = this._parameters.length;
        for(let i : number = 0; i < length; i++){
            let parameter : any = op(Op.INDEX,this._parameters,i);
            if (leftDelimiterNeeded && op(Op.LT,this.leftDelimiter.offset,parameter.offset)) {
                result.add(this.leftDelimiter);
                leftDelimiterNeeded = false;
            }
            result.add(parameter);
        }
        return ((_) : ChildEntities =>  {
            {
                _.add(this.rightDelimiter);
                _.add(this.rightParenthesis);
                return _;
            }
        })(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightParenthesis;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameterElements() : core.DartList<any> {
        let count : number = this._parameters.length;
        let types : core.DartList<any> = new core.DartList<any>(count);
        for(let i : number = 0; i < count; i++){
            types[i] = op(Op.INDEX,this._parameters,i).element;
        }
        return types;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : any {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFormalParameterList(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._parameters.accept(visitor);
    }
}

export namespace DottedNameImpl {
    export type Constructors = AstNodeImpl.Constructors | 'DottedNameImpl';
    export type Interface = Omit<DottedNameImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DottedNameImpl extends AstNodeImpl implements any.Interface {
    _components : any;

    constructor(components : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DottedNameImpl(components : core.DartList<any>) {
        this._components = new NodeListImpl<any>(this,components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._components.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this._components);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get components() : any {
        return this._components;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._components.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitDottedName(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._components.accept(visitor);
    }
}

export namespace TypeArgumentListImpl {
    export type Constructors = AstNodeImpl.Constructors | 'TypeArgumentListImpl';
    export type Interface = Omit<TypeArgumentListImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeArgumentListImpl extends AstNodeImpl implements any.Interface {
    leftBracket : any;

    _arguments : any;

    rightBracket : any;

    constructor(leftBracket : any,arguments : core.DartList<any>,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeArgumentListImpl(leftBracket : any,arguments : core.DartList<any>,rightBracket : any) {
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._arguments = new NodeListImpl<any>(this,arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get arguments() : any {
        return this._arguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.leftBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.leftBracket);
                _.addAll(this._arguments);
                _.add(this.rightBracket);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitTypeArgumentList(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._arguments.accept(visitor);
    }
}

export namespace TypeNameImpl {
    export type Constructors = TypeAnnotationImpl.Constructors | 'TypeNameImpl';
    export type Interface = Omit<TypeNameImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeNameImpl extends TypeAnnotationImpl implements any.Interface {
    _name : any;

    _typeArguments : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    question : any;

    type : any;

    constructor(name : IdentifierImpl,typeArguments : TypeArgumentListImpl,question : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeNameImpl(name : IdentifierImpl,typeArguments : TypeArgumentListImpl,question : any) {
        this.question = question;
        this._name = this._becomeParentOf(name);
        this._typeArguments = this._becomeParentOf(typeArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._name.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._name);
                _.add(this._typeArguments);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._typeArguments != null) {
            return this._typeArguments.endToken;
        }
        return this._name.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeferred() : boolean {
        let identifier : any = this.name;
        if (isNot(identifier, any)) {
            return false;
        }
        return (identifier as any).isDeferred;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this._name.isSynthetic && op(Op.EQUALS,this._typeArguments,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(identifier : any) {
        this._name = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeArguments() : any {
        return this._typeArguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeArguments(typeArguments : any) {
        this._typeArguments = this._becomeParentOf(typeArguments as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitTypeName(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_220_)=>(!!_220_)?_220_.accept(visitor):null)(this._name);
        ((_221_)=>(!!_221_)?_221_.accept(visitor):null)(this._typeArguments);
    }
}

export namespace DefaultFormalParameterImpl {
    export type Constructors = FormalParameterImpl.Constructors | 'DefaultFormalParameterImpl';
    export type Interface = Omit<DefaultFormalParameterImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DefaultFormalParameterImpl extends FormalParameterImpl implements any.Interface {
    _parameter : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    kind : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    separator : any;

    _defaultValue : any;

    constructor(parameter : NormalFormalParameterImpl,kind : any,separator : any,defaultValue : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultFormalParameterImpl(parameter : NormalFormalParameterImpl,kind : any,separator : any,defaultValue : ExpressionImpl) {
        this.kind = kind;
        this.separator = separator;
        this._parameter = this._becomeParentOf(parameter);
        this._defaultValue = this._becomeParentOf(defaultValue);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._parameter.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._parameter);
                _.add(this.separator);
                _.add(this._defaultValue);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get covariantKeyword() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get defaultValue() : any {
        return this._defaultValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set defaultValue(expression : any) {
        this._defaultValue = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._defaultValue != null) {
            return this._defaultValue.endToken;
        }
        return this._parameter.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : any {
        return this._parameter.identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return this._parameter != null && this._parameter.isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return this._parameter != null && this._parameter.isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : any {
        return this._parameter.metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameter() : any {
        return this._parameter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameter(formalParameter : any) {
        this._parameter = this._becomeParentOf(formalParameter as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitDefaultFormalParameter(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_121_)=>(!!_121_)?_121_.accept(visitor):null)(this._parameter);
        ((_122_)=>(!!_122_)?_122_.accept(visitor):null)(this._defaultValue);
    }
}

export namespace DirectiveImpl {
    export type Constructors = AnnotatedNodeImpl.Constructors | 'DirectiveImpl';
    export type Interface = Omit<DirectiveImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DirectiveImpl extends AnnotatedNodeImpl implements any.Interface {
    _element : any;

    constructor(comment : any,metadata : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectiveImpl(comment : any,metadata : core.DartList<any>) {
        super.AnnotatedNodeImpl(comment,metadata);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return this._element;
    }
    set element(element : any) {
        this._element = element;
    }
}

export namespace DoStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'DoStatementImpl';
    export type Interface = Omit<DoStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DoStatementImpl extends StatementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    doKeyword : any;

    _body : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    whileKeyword : any;

    leftParenthesis : any;

    _condition : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(doKeyword : any,body : StatementImpl,whileKeyword : any,leftParenthesis : any,condition : ExpressionImpl,rightParenthesis : any,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoStatementImpl(doKeyword : any,body : StatementImpl,whileKeyword : any,leftParenthesis : any,condition : ExpressionImpl,rightParenthesis : any,semicolon : any) {
        this.doKeyword = doKeyword;
        this.whileKeyword = whileKeyword;
        this.leftParenthesis = leftParenthesis;
        this.rightParenthesis = rightParenthesis;
        this.semicolon = semicolon;
        this._body = this._becomeParentOf(body);
        this._condition = this._becomeParentOf(condition);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.doKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(statement : any) {
        this._body = this._becomeParentOf(statement as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.doKeyword);
                _.add(this._body);
                _.add(this.whileKeyword);
                _.add(this.leftParenthesis);
                _.add(this._condition);
                _.add(this.rightParenthesis);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get condition() : any {
        return this._condition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set condition(expression : any) {
        this._condition = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitDoStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_123_)=>(!!_123_)?_123_.accept(visitor):null)(this._body);
        ((_124_)=>(!!_124_)?_124_.accept(visitor):null)(this._condition);
    }
}

export namespace DeclarationImpl {
    export type Constructors = AnnotatedNodeImpl.Constructors | 'DeclarationImpl';
    export type Interface = Omit<DeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DeclarationImpl extends AnnotatedNodeImpl implements any.Interface {
    constructor(comment : any,metadata : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeclarationImpl(comment : any,metadata : core.DartList<any>) {
        super.AnnotatedNodeImpl(comment,metadata);
    }
}

export namespace ConstructorFieldInitializerImpl {
    export type Constructors = ConstructorInitializerImpl.Constructors | 'ConstructorFieldInitializerImpl';
    export type Interface = Omit<ConstructorFieldInitializerImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConstructorFieldInitializerImpl extends ConstructorInitializerImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    thisKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    period : any;

    _fieldName : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equals : any;

    _expression : any;

    constructor(thisKeyword : any,period : any,fieldName : SimpleIdentifierImpl,equals : any,expression : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorFieldInitializerImpl(thisKeyword : any,period : any,fieldName : SimpleIdentifierImpl,equals : any,expression : ExpressionImpl) {
        this.thisKeyword = thisKeyword;
        this.period = period;
        this.equals = equals;
        this._fieldName = this._becomeParentOf(fieldName);
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this.thisKeyword != null) {
            return this.thisKeyword;
        }
        return this._fieldName.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.thisKeyword);
                _.add(this.period);
                _.add(this._fieldName);
                _.add(this.equals);
                _.add(this._expression);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._expression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fieldName() : any {
        return this._fieldName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set fieldName(identifier : any) {
        this._fieldName = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitConstructorFieldInitializer(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_114_)=>(!!_114_)?_114_.accept(visitor):null)(this._fieldName);
        ((_115_)=>(!!_115_)?_115_.accept(visitor):null)(this._expression);
    }
}

export namespace EmptyFunctionBodyImpl {
    export type Constructors = FunctionBodyImpl.Constructors | 'EmptyFunctionBodyImpl';
    export type Interface = Omit<EmptyFunctionBodyImpl, Constructors>;
}
@DartClass
@Implements(any)
export class EmptyFunctionBodyImpl extends FunctionBodyImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmptyFunctionBodyImpl(semicolon : any) {
        this.semicolon = semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitEmptyFunctionBody(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace EmptyStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'EmptyStatementImpl';
    export type Interface = Omit<EmptyStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class EmptyStatementImpl extends StatementImpl implements any.Interface {
    semicolon : any;

    constructor(semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmptyStatementImpl(semicolon : any) {
        this.semicolon = semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitEmptyStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace TryStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'TryStatementImpl';
    export type Interface = Omit<TryStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TryStatementImpl extends StatementImpl implements any.Interface {
    tryKeyword : any;

    _body : any;

    _catchClauses : any;

    finallyKeyword : any;

    _finallyBlock : any;

    constructor(tryKeyword : any,body : BlockImpl,catchClauses : core.DartList<any>,finallyKeyword : any,finallyBlock : BlockImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TryStatementImpl(tryKeyword : any,body : BlockImpl,catchClauses : core.DartList<any>,finallyKeyword : any,finallyBlock : BlockImpl) {
        this.tryKeyword = tryKeyword;
        this.finallyKeyword = finallyKeyword;
        this._body = this._becomeParentOf(body);
        this._catchClauses = new NodeListImpl<any>(this,catchClauses);
        this._finallyBlock = this._becomeParentOf(finallyBlock);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.tryKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(block : any) {
        this._body = this._becomeParentOf(block as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get catchClauses() : any {
        return this._catchClauses;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.tryKeyword);
                _.add(this._body);
                _.addAll(this._catchClauses);
                _.add(this.finallyKeyword);
                _.add(this._finallyBlock);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._finallyBlock != null) {
            return this._finallyBlock.endToken;
        }else if (this.finallyKeyword != null) {
            return this.finallyKeyword;
        }else if (!this._catchClauses.isEmpty) {
            return this._catchClauses.endToken;
        }
        return this._body.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get finallyBlock() : any {
        return this._finallyBlock;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set finallyBlock(block : any) {
        this._finallyBlock = this._becomeParentOf(block as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitTryStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_217_)=>(!!_217_)?_217_.accept(visitor):null)(this._body);
        this._catchClauses.accept(visitor);
        ((_218_)=>(!!_218_)?_218_.accept(visitor):null)(this._finallyBlock);
    }
}

export namespace ThrowExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'ThrowExpressionImpl';
    export type Interface = Omit<ThrowExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ThrowExpressionImpl extends ExpressionImpl implements any.Interface {
    throwKeyword : any;

    _expression : any;

    constructor(throwKeyword : any,expression : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThrowExpressionImpl(throwKeyword : any,expression : ExpressionImpl) {
        this.throwKeyword = throwKeyword;
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.throwKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.throwKeyword);
                _.add(this._expression);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._expression != null) {
            return this._expression.endToken;
        }
        return this.throwKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitThrowExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_215_)=>(!!_215_)?_215_.accept(visitor):null)(this._expression);
    }
}

export namespace ThisExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'ThisExpressionImpl';
    export type Interface = Omit<ThisExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ThisExpressionImpl extends ExpressionImpl implements any.Interface {
    thisKeyword : any;

    constructor(thisKeyword : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisExpressionImpl(thisKeyword : any) {
        this.thisKeyword = thisKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.thisKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.thisKeyword);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.thisKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 16;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitThisExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace SwitchStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'SwitchStatementImpl';
    export type Interface = Omit<SwitchStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SwitchStatementImpl extends StatementImpl implements any.Interface {
    switchKeyword : any;

    leftParenthesis : any;

    _expression : any;

    rightParenthesis : any;

    leftBracket : any;

    _members : any;

    rightBracket : any;

    constructor(switchKeyword : any,leftParenthesis : any,expression : ExpressionImpl,rightParenthesis : any,leftBracket : any,members : core.DartList<any>,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchStatementImpl(switchKeyword : any,leftParenthesis : any,expression : ExpressionImpl,rightParenthesis : any,leftBracket : any,members : core.DartList<any>,rightBracket : any) {
        this.switchKeyword = switchKeyword;
        this.leftParenthesis = leftParenthesis;
        this.rightParenthesis = rightParenthesis;
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._expression = this._becomeParentOf(expression);
        this._members = new NodeListImpl<any>(this,members);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.switchKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.switchKeyword);
                _.add(this.leftParenthesis);
                _.add(this._expression);
                _.add(this.rightParenthesis);
                _.add(this.leftBracket);
                _.addAll(this._members);
                _.add(this.rightBracket);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get members() : any {
        return this._members;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSwitchStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_214_)=>(!!_214_)?_214_.accept(visitor):null)(this._expression);
        this._members.accept(visitor);
    }
}

export namespace ConditionalExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'ConditionalExpressionImpl';
    export type Interface = Omit<ConditionalExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConditionalExpressionImpl extends ExpressionImpl implements any.Interface {
    _condition : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    question : any;

    _thenExpression : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    colon : any;

    _elseExpression : any;

    constructor(condition : ExpressionImpl,question : any,thenExpression : ExpressionImpl,colon : any,elseExpression : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConditionalExpressionImpl(condition : ExpressionImpl,question : any,thenExpression : ExpressionImpl,colon : any,elseExpression : ExpressionImpl) {
        this.question = question;
        this.colon = colon;
        this._condition = this._becomeParentOf(condition);
        this._thenExpression = this._becomeParentOf(thenExpression);
        this._elseExpression = this._becomeParentOf(elseExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._condition.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._condition);
                _.add(this.question);
                _.add(this._thenExpression);
                _.add(this.colon);
                _.add(this._elseExpression);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get condition() : any {
        return this._condition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set condition(expression : any) {
        this._condition = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elseExpression() : any {
        return this._elseExpression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set elseExpression(expression : any) {
        this._elseExpression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._elseExpression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 3;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get thenExpression() : any {
        return this._thenExpression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set thenExpression(expression : any) {
        this._thenExpression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitConditionalExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_103_)=>(!!_103_)?_103_.accept(visitor):null)(this._condition);
        ((_104_)=>(!!_104_)?_104_.accept(visitor):null)(this._thenExpression);
        ((_105_)=>(!!_105_)?_105_.accept(visitor):null)(this._elseExpression);
    }
}

export namespace AssertStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'AssertStatementImpl';
    export type Interface = Omit<AssertStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AssertStatementImpl extends StatementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assertKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _condition : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    comma : any;

    _message : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(assertKeyword : any,leftParenthesis : any,condition : ExpressionImpl,comma : any,message : ExpressionImpl,rightParenthesis : any,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssertStatementImpl(assertKeyword : any,leftParenthesis : any,condition : ExpressionImpl,comma : any,message : ExpressionImpl,rightParenthesis : any,semicolon : any) {
        this.assertKeyword = assertKeyword;
        this.leftParenthesis = leftParenthesis;
        this.comma = comma;
        this.rightParenthesis = rightParenthesis;
        this.semicolon = semicolon;
        this._condition = this._becomeParentOf(condition);
        this._message = this._becomeParentOf(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.assertKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.assertKeyword);
                _.add(this.leftParenthesis);
                _.add(this._condition);
                _.add(this.comma);
                _.add(this._message);
                _.add(this.rightParenthesis);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get condition() : any {
        return this._condition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set condition(condition : any) {
        this._condition = this._becomeParentOf(condition as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get message() : any {
        return this._message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set message(expression : any) {
        this._message = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitAssertStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_76_)=>(!!_76_)?_76_.accept(visitor):null)(this._condition);
        ((_77_)=>(!!_77_)?_77_.accept(visitor):null)(this.message);
    }
}

export namespace ExpressionStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'ExpressionStatementImpl';
    export type Interface = Omit<ExpressionStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ExpressionStatementImpl extends StatementImpl implements any.Interface {
    _expression : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(expression : ExpressionImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionStatementImpl(expression : ExpressionImpl,semicolon : any) {
        this.semicolon = semicolon;
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._expression.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._expression);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this.semicolon != null) {
            return this.semicolon;
        }
        return this._expression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this._expression.isSynthetic && this.semicolon.isSynthetic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitExpressionStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_128_)=>(!!_128_)?_128_.accept(visitor):null)(this._expression);
    }
}

export namespace AssertInitializerImpl {
    export type Constructors = ConstructorInitializerImpl.Constructors | 'AssertInitializerImpl';
    export type Interface = Omit<AssertInitializerImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AssertInitializerImpl extends ConstructorInitializerImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assertKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _condition : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    comma : any;

    _message : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    constructor(assertKeyword : any,leftParenthesis : any,condition : ExpressionImpl,comma : any,message : ExpressionImpl,rightParenthesis : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssertInitializerImpl(assertKeyword : any,leftParenthesis : any,condition : ExpressionImpl,comma : any,message : ExpressionImpl,rightParenthesis : any) {
        this.assertKeyword = assertKeyword;
        this.leftParenthesis = leftParenthesis;
        this.comma = comma;
        this.rightParenthesis = rightParenthesis;
        this._condition = this._becomeParentOf(condition);
        this._message = this._becomeParentOf(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.assertKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.assertKeyword);
                _.add(this.leftParenthesis);
                _.add(this._condition);
                _.add(this.comma);
                _.add(this._message);
                _.add(this.rightParenthesis);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get condition() : any {
        return this._condition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set condition(condition : any) {
        this._condition = this._becomeParentOf(condition as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightParenthesis;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get message() : any {
        return this._message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set message(expression : any) {
        this._message = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitAssertInitializer(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_74_)=>(!!_74_)?_74_.accept(visitor):null)(this._condition);
        ((_75_)=>(!!_75_)?_75_.accept(visitor):null)(this.message);
    }
}

export namespace SwitchDefaultImpl {
    export type Constructors = SwitchMemberImpl.Constructors | 'SwitchDefaultImpl';
    export type Interface = Omit<SwitchDefaultImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SwitchDefaultImpl extends SwitchMemberImpl implements any.Interface {
    constructor(labels : core.DartList<any>,keyword : any,colon : any,statements : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchDefaultImpl(labels : core.DartList<any>,keyword : any,colon : any,statements : core.DartList<any>) {
        super.SwitchMemberImpl(labels,keyword,colon,statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this.labels);
                _.add(this.keyword);
                _.add(this.colon);
                _.addAll(this.statements);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSwitchDefault(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this.labels.accept(visitor);
        this.statements.accept(visitor);
    }
}

export namespace SwitchCaseImpl {
    export type Constructors = SwitchMemberImpl.Constructors | 'SwitchCaseImpl';
    export type Interface = Omit<SwitchCaseImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SwitchCaseImpl extends SwitchMemberImpl implements any.Interface {
    _expression : any;

    constructor(labels : core.DartList<any>,keyword : any,expression : ExpressionImpl,colon : any,statements : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchCaseImpl(labels : core.DartList<any>,keyword : any,expression : ExpressionImpl,colon : any,statements : core.DartList<any>) {
        super.SwitchMemberImpl(labels,keyword,colon,statements);
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this.labels);
                _.add(this.keyword);
                _.add(this._expression);
                _.add(this.colon);
                _.addAll(this.statements);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSwitchCase(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this.labels.accept(visitor);
        ((_213_)=>(!!_213_)?_213_.accept(visitor):null)(this._expression);
        this.statements.accept(visitor);
    }
}

export namespace ForEachStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'withDeclaration' | 'withReference';
    export type Interface = Omit<ForEachStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ForEachStatementImpl extends StatementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    awaitKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _loopVariable : any;

    _identifier : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inKeyword : any;

    _iterable : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    _body : any;

    @namedConstructor
    withDeclaration(awaitKeyword : any,forKeyword : any,leftParenthesis : any,loopVariable : DeclaredIdentifierImpl,inKeyword : any,iterator : ExpressionImpl,rightParenthesis : any,body : StatementImpl) {
        this.awaitKeyword = awaitKeyword;
        this.forKeyword = forKeyword;
        this.leftParenthesis = leftParenthesis;
        this.inKeyword = inKeyword;
        this.rightParenthesis = rightParenthesis;
        this._loopVariable = this._becomeParentOf(loopVariable);
        this._iterable = this._becomeParentOf(iterator);
        this._body = this._becomeParentOf(body);
    }
    static withDeclaration : new(awaitKeyword : any,forKeyword : any,leftParenthesis : any,loopVariable : DeclaredIdentifierImpl,inKeyword : any,iterator : ExpressionImpl,rightParenthesis : any,body : StatementImpl) => ForEachStatementImpl;

    @namedConstructor
    withReference(awaitKeyword : any,forKeyword : any,leftParenthesis : any,identifier : SimpleIdentifierImpl,inKeyword : any,iterator : ExpressionImpl,rightParenthesis : any,body : StatementImpl) {
        this.awaitKeyword = awaitKeyword;
        this.forKeyword = forKeyword;
        this.leftParenthesis = leftParenthesis;
        this.inKeyword = inKeyword;
        this.rightParenthesis = rightParenthesis;
        this._identifier = this._becomeParentOf(identifier);
        this._iterable = this._becomeParentOf(iterator);
        this._body = this._becomeParentOf(body);
    }
    static withReference : new(awaitKeyword : any,forKeyword : any,leftParenthesis : any,identifier : SimpleIdentifierImpl,inKeyword : any,iterator : ExpressionImpl,rightParenthesis : any,body : StatementImpl) => ForEachStatementImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.forKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(statement : any) {
        this._body = this._becomeParentOf(statement as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.awaitKeyword);
                _.add(this.forKeyword);
                _.add(this.leftParenthesis);
                _.add(this._loopVariable);
                _.add(this._identifier);
                _.add(this.inKeyword);
                _.add(this._iterable);
                _.add(this.rightParenthesis);
                _.add(this._body);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._body.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : any {
        return this._identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set identifier(identifier : any) {
        this._identifier = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterable() : any {
        return this._iterable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set iterable(expression : any) {
        this._iterable = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get loopVariable() : any {
        return this._loopVariable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set loopVariable(variable : any) {
        this._loopVariable = this._becomeParentOf(variable as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitForEachStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_135_)=>(!!_135_)?_135_.accept(visitor):null)(this._loopVariable);
        ((_136_)=>(!!_136_)?_136_.accept(visitor):null)(this._identifier);
        ((_137_)=>(!!_137_)?_137_.accept(visitor):null)(this._iterable);
        ((_138_)=>(!!_138_)?_138_.accept(visitor):null)(this._body);
    }
}

export namespace VariableDeclarationListImpl {
    export type Constructors = AnnotatedNodeImpl.Constructors | 'VariableDeclarationListImpl';
    export type Interface = Omit<VariableDeclarationListImpl, Constructors>;
}
@DartClass
@Implements(any)
export class VariableDeclarationListImpl extends AnnotatedNodeImpl implements any.Interface {
    keyword : any;

    _type : any;

    _variables : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,type : TypeAnnotationImpl,variables : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableDeclarationListImpl(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,type : TypeAnnotationImpl,variables : core.DartList<any>) {
        super.AnnotatedNodeImpl(comment,metadata);
        this.keyword = keyword;
        this._type = this._becomeParentOf(type);
        this._variables = new NodeListImpl<any>(this,variables);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.add(this._type);
                _.addAll(this._variables);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._variables.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        if (this.keyword != null) {
            return this.keyword;
        }else if (this._type != null) {
            return this._type.beginToken;
        }
        return this._variables.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.CONST);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.FINAL);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        this._type = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variables() : any {
        return this._variables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitVariableDeclarationList(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_227_)=>(!!_227_)?_227_.accept(visitor):null)(this._type);
        this._variables.accept(visitor);
    }
}

export namespace VariableDeclarationStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'VariableDeclarationStatementImpl';
    export type Interface = Omit<VariableDeclarationStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class VariableDeclarationStatementImpl extends StatementImpl implements any.Interface {
    _variableList : any;

    semicolon : any;

    constructor(variableList : VariableDeclarationListImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableDeclarationStatementImpl(variableList : VariableDeclarationListImpl,semicolon : any) {
        this.semicolon = semicolon;
        this._variableList = this._becomeParentOf(variableList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._variableList.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._variableList);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variables() : any {
        return this._variableList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set variables(variables : any) {
        this._variableList = this._becomeParentOf(variables as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitVariableDeclarationStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_228_)=>(!!_228_)?_228_.accept(visitor):null)(this._variableList);
    }
}

export namespace ForStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'ForStatementImpl';
    export type Interface = Omit<ForStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ForStatementImpl extends StatementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _variableList : any;

    _initialization : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftSeparator : any;

    _condition : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightSeparator : any;

    _updaters : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    _body : any;

    constructor(forKeyword : any,leftParenthesis : any,variableList : VariableDeclarationListImpl,initialization : ExpressionImpl,leftSeparator : any,condition : ExpressionImpl,rightSeparator : any,updaters : core.DartList<any>,rightParenthesis : any,body : StatementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForStatementImpl(forKeyword : any,leftParenthesis : any,variableList : VariableDeclarationListImpl,initialization : ExpressionImpl,leftSeparator : any,condition : ExpressionImpl,rightSeparator : any,updaters : core.DartList<any>,rightParenthesis : any,body : StatementImpl) {
        this.forKeyword = forKeyword;
        this.leftParenthesis = leftParenthesis;
        this.leftSeparator = leftSeparator;
        this.rightSeparator = rightSeparator;
        this.rightParenthesis = rightParenthesis;
        this._variableList = this._becomeParentOf(variableList);
        this._initialization = this._becomeParentOf(initialization);
        this._condition = this._becomeParentOf(condition);
        this._updaters = new NodeListImpl<any>(this,updaters);
        this._body = this._becomeParentOf(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.forKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(statement : any) {
        this._body = this._becomeParentOf(statement as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.forKeyword);
                _.add(this.leftParenthesis);
                _.add(this._variableList);
                _.add(this._initialization);
                _.add(this.leftSeparator);
                _.add(this._condition);
                _.add(this.rightSeparator);
                _.addAll(this._updaters);
                _.add(this.rightParenthesis);
                _.add(this._body);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get condition() : any {
        return this._condition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set condition(expression : any) {
        this._condition = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._body.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initialization() : any {
        return this._initialization;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set initialization(initialization : any) {
        this._initialization = this._becomeParentOf(initialization as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get updaters() : any {
        return this._updaters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variables() : any {
        return this._variableList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set variables(variableList : any) {
        this._variableList = this._becomeParentOf(variableList as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitForStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_139_)=>(!!_139_)?_139_.accept(visitor):null)(this._variableList);
        ((_140_)=>(!!_140_)?_140_.accept(visitor):null)(this._initialization);
        ((_141_)=>(!!_141_)?_141_.accept(visitor):null)(this._condition);
        this._updaters.accept(visitor);
        ((_142_)=>(!!_142_)?_142_.accept(visitor):null)(this._body);
    }
}

export namespace WhileStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'WhileStatementImpl';
    export type Interface = Omit<WhileStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class WhileStatementImpl extends StatementImpl implements any.Interface {
    whileKeyword : any;

    leftParenthesis : any;

    _condition : any;

    rightParenthesis : any;

    _body : any;

    constructor(whileKeyword : any,leftParenthesis : any,condition : ExpressionImpl,rightParenthesis : any,body : StatementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WhileStatementImpl(whileKeyword : any,leftParenthesis : any,condition : ExpressionImpl,rightParenthesis : any,body : StatementImpl) {
        this.whileKeyword = whileKeyword;
        this.leftParenthesis = leftParenthesis;
        this.rightParenthesis = rightParenthesis;
        this._condition = this._becomeParentOf(condition);
        this._body = this._becomeParentOf(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.whileKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(statement : any) {
        this._body = this._becomeParentOf(statement as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.whileKeyword);
                _.add(this.leftParenthesis);
                _.add(this._condition);
                _.add(this.rightParenthesis);
                _.add(this._body);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get condition() : any {
        return this._condition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set condition(expression : any) {
        this._condition = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._body.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitWhileStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_229_)=>(!!_229_)?_229_.accept(visitor):null)(this._condition);
        ((_230_)=>(!!_230_)?_230_.accept(visitor):null)(this._body);
    }
}

export namespace SuperExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'SuperExpressionImpl';
    export type Interface = Omit<SuperExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SuperExpressionImpl extends ExpressionImpl implements any.Interface {
    superKeyword : any;

    constructor(superKeyword : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperExpressionImpl(superKeyword : any) {
        this.superKeyword = superKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.superKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.superKeyword);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.superKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 16;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSuperExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace FunctionDeclarationStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'FunctionDeclarationStatementImpl';
    export type Interface = Omit<FunctionDeclarationStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionDeclarationStatementImpl extends StatementImpl implements any.Interface {
    _functionDeclaration : any;

    constructor(functionDeclaration : FunctionDeclarationImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionDeclarationStatementImpl(functionDeclaration : FunctionDeclarationImpl) {
        this._functionDeclaration = this._becomeParentOf(functionDeclaration);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._functionDeclaration.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._functionDeclaration);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._functionDeclaration.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionDeclaration() : any {
        return this._functionDeclaration;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set functionDeclaration(functionDeclaration : any) {
        this._functionDeclaration = this._becomeParentOf(functionDeclaration as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFunctionDeclarationStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_146_)=>(!!_146_)?_146_.accept(visitor):null)(this._functionDeclaration);
    }
}

export namespace FunctionExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'FunctionExpressionImpl';
    export type Interface = Omit<FunctionExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionExpressionImpl extends ExpressionImpl implements any.Interface {
    _typeParameters : any;

    _parameters : any;

    _body : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    element : any;

    constructor(typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl,body : FunctionBodyImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionExpressionImpl(typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl,body : FunctionBodyImpl) {
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._parameters = this._becomeParentOf(parameters);
        this._body = this._becomeParentOf(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this._typeParameters != null) {
            return this._typeParameters.beginToken;
        }else if (this._parameters != null) {
            return this._parameters.beginToken;
        }else if (this._body != null) {
            return this._body.beginToken;
        }
        throw new core.StateError("Non-external functions must have a body");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(functionBody : any) {
        this._body = this._becomeParentOf(functionBody as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._parameters);
                _.add(this._body);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._body != null) {
            return this._body.endToken;
        }else if (this._parameters != null) {
            return this._parameters.endToken;
        }
        throw new core.StateError("Non-external functions must have a body");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : any {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : any) {
        this._parameters = this._becomeParentOf(parameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 16;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFunctionExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_147_)=>(!!_147_)?_147_.accept(visitor):null)(this._typeParameters);
        ((_148_)=>(!!_148_)?_148_.accept(visitor):null)(this._parameters);
        ((_149_)=>(!!_149_)?_149_.accept(visitor):null)(this._body);
    }
}

export namespace SuperConstructorInvocationImpl {
    export type Constructors = ConstructorInitializerImpl.Constructors | 'SuperConstructorInvocationImpl';
    export type Interface = Omit<SuperConstructorInvocationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SuperConstructorInvocationImpl extends ConstructorInitializerImpl implements any.Interface {
    superKeyword : any;

    period : any;

    _constructorName : any;

    _argumentList : any;

    staticElement : any;

    constructor(superKeyword : any,period : any,constructorName : SimpleIdentifierImpl,argumentList : ArgumentListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperConstructorInvocationImpl(superKeyword : any,period : any,constructorName : SimpleIdentifierImpl,argumentList : ArgumentListImpl) {
        this.superKeyword = superKeyword;
        this.period = period;
        this._constructorName = this._becomeParentOf(constructorName);
        this._argumentList = this._becomeParentOf(argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get argumentList() : any {
        return this._argumentList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set argumentList(argumentList : any) {
        this._argumentList = this._becomeParentOf(argumentList as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.superKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.superKeyword);
                _.add(this.period);
                _.add(this._constructorName);
                _.add(this._argumentList);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructorName() : any {
        return this._constructorName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set constructorName(identifier : any) {
        this._constructorName = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._argumentList.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSuperConstructorInvocation(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_211_)=>(!!_211_)?_211_.accept(visitor):null)(this._constructorName);
        ((_212_)=>(!!_212_)?_212_.accept(visitor):null)(this._argumentList);
    }
}

export namespace NativeFunctionBodyImpl {
    export type Constructors = FunctionBodyImpl.Constructors | 'NativeFunctionBodyImpl';
    export type Interface = Omit<NativeFunctionBodyImpl, Constructors>;
}
@DartClass
@Implements(any)
export class NativeFunctionBodyImpl extends FunctionBodyImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nativeKeyword : any;

    _stringLiteral : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(nativeKeyword : any,stringLiteral : StringLiteralImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NativeFunctionBodyImpl(nativeKeyword : any,stringLiteral : StringLiteralImpl,semicolon : any) {
        this.nativeKeyword = nativeKeyword;
        this.semicolon = semicolon;
        this._stringLiteral = this._becomeParentOf(stringLiteral);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.nativeKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.nativeKeyword);
                _.add(this._stringLiteral);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stringLiteral() : any {
        return this._stringLiteral;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set stringLiteral(stringLiteral : any) {
        this._stringLiteral = this._becomeParentOf(stringLiteral as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitNativeFunctionBody(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_195_)=>(!!_195_)?_195_.accept(visitor):null)(this._stringLiteral);
    }
}

export namespace AsExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'AsExpressionImpl';
    export type Interface = Omit<AsExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AsExpressionImpl extends ExpressionImpl implements any.Interface {
    _expression : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asOperator : any;

    _type : any;

    constructor(expression : ExpressionImpl,asOperator : any,type : TypeAnnotationImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsExpressionImpl(expression : ExpressionImpl,asOperator : any,type : TypeAnnotationImpl) {
        this.asOperator = asOperator;
        this._expression = this._becomeParentOf(expression);
        this._type = this._becomeParentOf(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._expression.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._expression);
                _.add(this.asOperator);
                _.add(this._type);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._type.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 7;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        this._type = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitAsExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_72_)=>(!!_72_)?_72_.accept(visitor):null)(this._expression);
        ((_73_)=>(!!_73_)?_73_.accept(visitor):null)(this._type);
    }
}

export namespace GenericFunctionTypeImpl {
    export type Constructors = TypeAnnotationImpl.Constructors | 'GenericFunctionTypeImpl';
    export type Interface = Omit<GenericFunctionTypeImpl, Constructors>;
}
@DartClass
@Implements(any)
export class GenericFunctionTypeImpl extends TypeAnnotationImpl implements any.Interface {
    _returnType : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionKeyword : any;

    _typeParameters : any;

    _parameters : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    type : any;

    constructor(returnType : TypeAnnotationImpl,functionKeyword : any,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericFunctionTypeImpl(returnType : TypeAnnotationImpl,functionKeyword : any,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl) {
        this.functionKeyword = functionKeyword;
        this._returnType = this._becomeParentOf(returnType);
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._parameters = this._becomeParentOf(parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return op(Op.EQUALS,this._returnType,null) ? this.functionKeyword : this._returnType.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._returnType);
                _.add(this.functionKeyword);
                _.add(this._typeParameters);
                _.add(this._parameters);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._parameters.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : any {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : any) {
        this._parameters = this._becomeParentOf(parameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(type : any) {
        this._returnType = this._becomeParentOf(type as AstNodeImpl);
    }
    get typeParameters() : any {
        return this._typeParameters;
    }
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitGenericFunctionType(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_161_)=>(!!_161_)?_161_.accept(visitor):null)(this._returnType);
        ((_162_)=>(!!_162_)?_162_.accept(visitor):null)(this._typeParameters);
        ((_163_)=>(!!_163_)?_163_.accept(visitor):null)(this._parameters);
    }
}

export namespace ShowCombinatorImpl {
    export type Constructors = CombinatorImpl.Constructors | 'ShowCombinatorImpl';
    export type Interface = Omit<ShowCombinatorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ShowCombinatorImpl extends CombinatorImpl implements any.Interface {
    _shownNames : any;

    constructor(keyword : any,shownNames : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShowCombinatorImpl(keyword : any,shownNames : core.DartList<any>) {
        super.CombinatorImpl(keyword);
        this._shownNames = new NodeListImpl<any>(this,shownNames);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.addAll(this._shownNames);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._shownNames.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shownNames() : any {
        return this._shownNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitShowCombinator(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._shownNames.accept(visitor);
    }
}

export namespace HideCombinatorImpl {
    export type Constructors = CombinatorImpl.Constructors | 'HideCombinatorImpl';
    export type Interface = Omit<HideCombinatorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class HideCombinatorImpl extends CombinatorImpl implements any.Interface {
    _hiddenNames : any;

    constructor(keyword : any,hiddenNames : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HideCombinatorImpl(keyword : any,hiddenNames : core.DartList<any>) {
        super.CombinatorImpl(keyword);
        this._hiddenNames = new NodeListImpl<any>(this,hiddenNames);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.addAll(this._hiddenNames);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._hiddenNames.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hiddenNames() : any {
        return this._hiddenNames;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitHideCombinator(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._hiddenNames.accept(visitor);
    }
}

export namespace IdentifierImpl {
    export type Constructors = ExpressionImpl.Constructors | 'IdentifierImpl';
    export type Interface = Omit<IdentifierImpl, Constructors>;
}
@DartClass
@Implements(any)
export class IdentifierImpl extends ExpressionImpl implements any.Interface {
    @AbstractProperty
    get bestElement() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAssignable() : boolean {
        return true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IdentifierImpl() {
    }
}

export namespace IfStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'IfStatementImpl';
    export type Interface = Omit<IfStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class IfStatementImpl extends StatementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ifKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftParenthesis : any;

    _condition : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightParenthesis : any;

    _thenStatement : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    elseKeyword : any;

    _elseStatement : any;

    constructor(ifKeyword : any,leftParenthesis : any,condition : ExpressionImpl,rightParenthesis : any,thenStatement : StatementImpl,elseKeyword : any,elseStatement : StatementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IfStatementImpl(ifKeyword : any,leftParenthesis : any,condition : ExpressionImpl,rightParenthesis : any,thenStatement : StatementImpl,elseKeyword : any,elseStatement : StatementImpl) {
        this.ifKeyword = ifKeyword;
        this.leftParenthesis = leftParenthesis;
        this.rightParenthesis = rightParenthesis;
        this.elseKeyword = elseKeyword;
        this._condition = this._becomeParentOf(condition);
        this._thenStatement = this._becomeParentOf(thenStatement);
        this._elseStatement = this._becomeParentOf(elseStatement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.ifKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.ifKeyword);
                _.add(this.leftParenthesis);
                _.add(this._condition);
                _.add(this.rightParenthesis);
                _.add(this._thenStatement);
                _.add(this.elseKeyword);
                _.add(this._elseStatement);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get condition() : any {
        return this._condition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set condition(expression : any) {
        this._condition = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elseStatement() : any {
        return this._elseStatement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set elseStatement(statement : any) {
        this._elseStatement = this._becomeParentOf(statement as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._elseStatement != null) {
            return this._elseStatement.endToken;
        }
        return this._thenStatement.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get thenStatement() : any {
        return this._thenStatement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set thenStatement(statement : any) {
        this._thenStatement = this._becomeParentOf(statement as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitIfStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_167_)=>(!!_167_)?_167_.accept(visitor):null)(this._condition);
        ((_168_)=>(!!_168_)?_168_.accept(visitor):null)(this._thenStatement);
        ((_169_)=>(!!_169_)?_169_.accept(visitor):null)(this._elseStatement);
    }
}

export namespace CascadeExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'CascadeExpressionImpl';
    export type Interface = Omit<CascadeExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CascadeExpressionImpl extends ExpressionImpl implements any.Interface {
    _target : any;

    _cascadeSections : any;

    constructor(target : ExpressionImpl,cascadeSections : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CascadeExpressionImpl(target : ExpressionImpl,cascadeSections : core.DartList<any>) {
        this._target = this._becomeParentOf(target);
        this._cascadeSections = new NodeListImpl<any>(this,cascadeSections);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._target.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get cascadeSections() : any {
        return this._cascadeSections;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._target);
                _.addAll(this._cascadeSections);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._cascadeSections.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 2;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get target() : any {
        return this._target;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set target(target : any) {
        this._target = this._becomeParentOf(target as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitCascadeExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_85_)=>(!!_85_)?_85_.accept(visitor):null)(this._target);
        this._cascadeSections.accept(visitor);
    }
}

export namespace BreakStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'BreakStatementImpl';
    export type Interface = Omit<BreakStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class BreakStatementImpl extends StatementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    breakKeyword : any;

    _label : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    target : any;

    constructor(breakKeyword : any,label : SimpleIdentifierImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BreakStatementImpl(breakKeyword : any,label : SimpleIdentifierImpl,semicolon : any) {
        this.breakKeyword = breakKeyword;
        this.semicolon = semicolon;
        this._label = this._becomeParentOf(label);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.breakKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.breakKeyword);
                _.add(this._label);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get label() : any {
        return this._label;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set label(identifier : any) {
        this._label = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitBreakStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_84_)=>(!!_84_)?_84_.accept(visitor):null)(this._label);
    }
}

export namespace ExpressionFunctionBodyImpl {
    export type Constructors = FunctionBodyImpl.Constructors | 'ExpressionFunctionBodyImpl';
    export type Interface = Omit<ExpressionFunctionBodyImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ExpressionFunctionBodyImpl extends FunctionBodyImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    keyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionDefinition : any;

    _expression : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(keyword : any,functionDefinition : any,expression : ExpressionImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionFunctionBodyImpl(keyword : any,functionDefinition : any,expression : ExpressionImpl,semicolon : any) {
        this.keyword = keyword;
        this.functionDefinition = functionDefinition;
        this.semicolon = semicolon;
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this.keyword != null) {
            return this.keyword;
        }
        return this.functionDefinition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.add(this.functionDefinition);
                _.add(this._expression);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this.semicolon != null) {
            return this.semicolon;
        }
        return this._expression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        return this.keyword != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynchronous() : boolean {
        return op(Op.EQUALS,this.keyword,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitExpressionFunctionBody(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_127_)=>(!!_127_)?_127_.accept(visitor):null)(this._expression);
    }
}

export namespace InstanceCreationExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'InstanceCreationExpressionImpl';
    export type Interface = Omit<InstanceCreationExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class InstanceCreationExpressionImpl extends ExpressionImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    keyword : any;

    _constructorName : any;

    _argumentList : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElement : any;

    constructor(keyword : any,constructorName : ConstructorNameImpl,argumentList : ArgumentListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstanceCreationExpressionImpl(keyword : any,constructorName : ConstructorNameImpl,argumentList : ArgumentListImpl) {
        this.keyword = keyword;
        this._constructorName = this._becomeParentOf(constructorName);
        this._argumentList = this._becomeParentOf(argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get argumentList() : any {
        return this._argumentList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set argumentList(argumentList : any) {
        this._argumentList = this._becomeParentOf(argumentList as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.keyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.add(this._constructorName);
                _.add(this._argumentList);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructorName() : any {
        return this._constructorName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set constructorName(name : any) {
        this._constructorName = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._argumentList.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.CONST);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 16;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitInstanceCreationExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_173_)=>(!!_173_)?_173_.accept(visitor):null)(this._constructorName);
        ((_174_)=>(!!_174_)?_174_.accept(visitor):null)(this._argumentList);
    }
}

export namespace ReturnStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'ReturnStatementImpl';
    export type Interface = Omit<ReturnStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ReturnStatementImpl extends StatementImpl implements any.Interface {
    returnKeyword : any;

    _expression : any;

    semicolon : any;

    constructor(returnKeyword : any,expression : ExpressionImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReturnStatementImpl(returnKeyword : any,expression : ExpressionImpl,semicolon : any) {
        this.returnKeyword = returnKeyword;
        this.semicolon = semicolon;
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.returnKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.returnKeyword);
                _.add(this._expression);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitReturnStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_208_)=>(!!_208_)?_208_.accept(visitor):null)(this._expression);
    }
}

export namespace BlockImpl {
    export type Constructors = StatementImpl.Constructors | 'BlockImpl';
    export type Interface = Omit<BlockImpl, Constructors>;
}
@DartClass
@Implements(any)
export class BlockImpl extends StatementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftBracket : any;

    _statements : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightBracket : any;

    constructor(leftBracket : any,statements : core.DartList<any>,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BlockImpl(leftBracket : any,statements : core.DartList<any>,rightBracket : any) {
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._statements = new NodeListImpl<any>(this,statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.leftBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.leftBracket);
                _.addAll(this._statements);
                _.add(this.rightBracket);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get statements() : any {
        return this._statements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitBlock(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._statements.accept(visitor);
    }
}

export namespace InterpolationExpressionImpl {
    export type Constructors = InterpolationElementImpl.Constructors | 'InterpolationExpressionImpl';
    export type Interface = Omit<InterpolationExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class InterpolationExpressionImpl extends InterpolationElementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftBracket : any;

    _expression : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightBracket : any;

    constructor(leftBracket : any,expression : ExpressionImpl,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterpolationExpressionImpl(leftBracket : any,expression : ExpressionImpl,rightBracket : any) {
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.leftBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.leftBracket);
                _.add(this._expression);
                _.add(this.rightBracket);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this.rightBracket != null) {
            return this.rightBracket;
        }
        return this._expression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitInterpolationExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_175_)=>(!!_175_)?_175_.accept(visitor):null)(this._expression);
    }
}

export namespace InterpolationStringImpl {
    export type Constructors = InterpolationElementImpl.Constructors | 'InterpolationStringImpl';
    export type Interface = Omit<InterpolationStringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class InterpolationStringImpl extends InterpolationElementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contents : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value : string;

    constructor(contents : any,value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterpolationStringImpl(contents : any,value : string) {
        this.contents = contents;
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.contents;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.contents);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contentsEnd() : number {
        let lexeme : string = this.contents.lexeme;
        return this.offset + new StringLexemeHelper(lexeme,true,true).end;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contentsOffset() : number {
        let offset : number = this.contents.offset;
        let lexeme : string = this.contents.lexeme;
        return offset + new StringLexemeHelper(lexeme,true,true).start;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.contents;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitInterpolationString(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace InvocationExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'InvocationExpressionImpl';
    export type Interface = Omit<InvocationExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class InvocationExpressionImpl extends ExpressionImpl implements any.Interface {
    _argumentList : any;

    _typeArguments : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedInvokeType : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticInvokeType : any;

    constructor(typeArguments : TypeArgumentListImpl,argumentList : ArgumentListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvocationExpressionImpl(typeArguments : TypeArgumentListImpl,argumentList : ArgumentListImpl) {
        this._typeArguments = this._becomeParentOf(typeArguments);
        this._argumentList = this._becomeParentOf(argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get argumentList() : any {
        return this._argumentList;
    }
    set argumentList(argumentList : any) {
        this._argumentList = this._becomeParentOf(argumentList as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeArguments() : any {
        return this._typeArguments;
    }
    set typeArguments(typeArguments : any) {
        this._typeArguments = this._becomeParentOf(typeArguments as AstNodeImpl);
    }
}

export namespace IsExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'IsExpressionImpl';
    export type Interface = Omit<IsExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class IsExpressionImpl extends ExpressionImpl implements any.Interface {
    _expression : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isOperator : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    notOperator : any;

    _type : any;

    constructor(expression : ExpressionImpl,isOperator : any,notOperator : any,type : TypeAnnotationImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IsExpressionImpl(expression : ExpressionImpl,isOperator : any,notOperator : any,type : TypeAnnotationImpl) {
        this.isOperator = isOperator;
        this.notOperator = notOperator;
        this._expression = this._becomeParentOf(expression);
        this._type = this._becomeParentOf(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._expression.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._expression);
                _.add(this.isOperator);
                _.add(this.notOperator);
                _.add(this._type);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._type.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 7;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        this._type = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitIsExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_176_)=>(!!_176_)?_176_.accept(visitor):null)(this._expression);
        ((_177_)=>(!!_177_)?_177_.accept(visitor):null)(this._type);
    }
}

export namespace LabeledStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'LabeledStatementImpl';
    export type Interface = Omit<LabeledStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class LabeledStatementImpl extends StatementImpl implements any.Interface {
    _labels : any;

    _statement : any;

    constructor(labels : core.DartList<any>,statement : StatementImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabeledStatementImpl(labels : core.DartList<any>,statement : StatementImpl) {
        this._labels = new NodeListImpl<any>(this,labels);
        this._statement = this._becomeParentOf(statement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (!this._labels.isEmpty) {
            return this._labels.beginToken;
        }
        return this._statement.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this._labels);
                _.add(this._statement);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._statement.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get labels() : any {
        return this._labels;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get statement() : any {
        return this._statement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set statement(statement : any) {
        this._statement = this._becomeParentOf(statement as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unlabeled() : any {
        return this._statement.unlabeled;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitLabeledStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._labels.accept(visitor);
        ((_178_)=>(!!_178_)?_178_.accept(visitor):null)(this._statement);
    }
}

export namespace BlockFunctionBodyImpl {
    export type Constructors = FunctionBodyImpl.Constructors | 'BlockFunctionBodyImpl';
    export type Interface = Omit<BlockFunctionBodyImpl, Constructors>;
}
@DartClass
@Implements(any)
export class BlockFunctionBodyImpl extends FunctionBodyImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    keyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    star : any;

    _block : any;

    constructor(keyword : any,star : any,block : BlockImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BlockFunctionBodyImpl(keyword : any,star : any,block : BlockImpl) {
        this.keyword = keyword;
        this.star = star;
        this._block = this._becomeParentOf(block);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this.keyword != null) {
            return this.keyword;
        }
        return this._block.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get block() : any {
        return this._block;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set block(block : any) {
        this._block = this._becomeParentOf(block as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.add(this.star);
                _.add(this._block);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._block.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAsynchronous() : boolean {
        return this.keyword != null && op(Op.EQUALS,this.keyword.lexeme,Parser.ASYNC);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGenerator() : boolean {
        return this.star != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynchronous() : boolean {
        return op(Op.EQUALS,this.keyword,null) || this.keyword.lexeme != Parser.ASYNC;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitBlockFunctionBody(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_83_)=>(!!_83_)?_83_.accept(visitor):null)(this._block);
    }
}

export namespace RethrowExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'RethrowExpressionImpl';
    export type Interface = Omit<RethrowExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class RethrowExpressionImpl extends ExpressionImpl implements any.Interface {
    rethrowKeyword : any;

    constructor(rethrowKeyword : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RethrowExpressionImpl(rethrowKeyword : any) {
        this.rethrowKeyword = rethrowKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.rethrowKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.rethrowKeyword);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rethrowKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitRethrowExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace RedirectingConstructorInvocationImpl {
    export type Constructors = ConstructorInitializerImpl.Constructors | 'RedirectingConstructorInvocationImpl';
    export type Interface = Omit<RedirectingConstructorInvocationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class RedirectingConstructorInvocationImpl extends ConstructorInitializerImpl implements any.Interface {
    thisKeyword : any;

    period : any;

    _constructorName : any;

    _argumentList : any;

    staticElement : any;

    constructor(thisKeyword : any,period : any,constructorName : SimpleIdentifierImpl,argumentList : ArgumentListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RedirectingConstructorInvocationImpl(thisKeyword : any,period : any,constructorName : SimpleIdentifierImpl,argumentList : ArgumentListImpl) {
        this.thisKeyword = thisKeyword;
        this.period = period;
        this._constructorName = this._becomeParentOf(constructorName);
        this._argumentList = this._becomeParentOf(argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get argumentList() : any {
        return this._argumentList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set argumentList(argumentList : any) {
        this._argumentList = this._becomeParentOf(argumentList as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.thisKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.thisKeyword);
                _.add(this.period);
                _.add(this._constructorName);
                _.add(this._argumentList);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constructorName() : any {
        return this._constructorName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set constructorName(identifier : any) {
        this._constructorName = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._argumentList.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitRedirectingConstructorInvocation(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_206_)=>(!!_206_)?_206_.accept(visitor):null)(this._constructorName);
        ((_207_)=>(!!_207_)?_207_.accept(visitor):null)(this._argumentList);
    }
}

export namespace PropertyAccessImpl {
    export type Constructors = ExpressionImpl.Constructors | 'PropertyAccessImpl';
    export type Interface = Omit<PropertyAccessImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PropertyAccessImpl extends ExpressionImpl implements any.Interface {
    _target : any;

    operator : any;

    _propertyName : any;

    constructor(target : ExpressionImpl,operator : any,propertyName : SimpleIdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccessImpl(target : ExpressionImpl,operator : any,propertyName : SimpleIdentifierImpl) {
        this.operator = operator;
        this._target = this._becomeParentOf(target);
        this._propertyName = this._becomeParentOf(propertyName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this._target != null) {
            return this._target.beginToken;
        }
        return this.operator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._target);
                _.add(this.operator);
                _.add(this._propertyName);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._propertyName.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAssignable() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCascaded() : boolean {
        return this.operator != null && op(Op.EQUALS,this.operator.type,TokenType.PERIOD_PERIOD);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 15;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propertyName() : any {
        return this._propertyName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set propertyName(identifier : any) {
        this._propertyName = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get realTarget() : any {
        if (this.isCascaded) {
            let ancestor : any = this.parent;
            while (isNot(ancestor, any)){
                if (op(Op.EQUALS,ancestor,null)) {
                    return this._target;
                }
                ancestor = ancestor.parent;
            }
            return (ancestor as any).target;
        }
        return this._target;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get target() : any {
        return this._target;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set target(expression : any) {
        this._target = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitPropertyAccess(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_204_)=>(!!_204_)?_204_.accept(visitor):null)(this._target);
        ((_205_)=>(!!_205_)?_205_.accept(visitor):null)(this._propertyName);
    }
}

export namespace LiteralImpl {
    export type Constructors = ExpressionImpl.Constructors | 'LiteralImpl';
    export type Interface = Omit<LiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class LiteralImpl extends ExpressionImpl implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 16;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LiteralImpl() {
    }
}

export namespace AssignmentExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'AssignmentExpressionImpl';
    export type Interface = Omit<AssignmentExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AssignmentExpressionImpl extends ExpressionImpl implements any.Interface {
    _leftHandSide : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    operator : any;

    _rightHandSide : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElement : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedElement : any;

    constructor(leftHandSide : ExpressionImpl,operator : any,rightHandSide : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssignmentExpressionImpl(leftHandSide : ExpressionImpl,operator : any,rightHandSide : ExpressionImpl) {
        this.operator = operator;
        if (op(Op.EQUALS,leftHandSide,null) || op(Op.EQUALS,rightHandSide,null)) {
            let message : string;
            if (op(Op.EQUALS,leftHandSide,null)) {
                if (op(Op.EQUALS,rightHandSide,null)) {
                    message = "Both the left-hand and right-hand sides are null";
                }else {
                    message = "The left-hand size is null";
                }
            }else {
                message = "The right-hand size is null";
            }
            AnalysisEngine.instance.logger.logError(message,new bare.createInstance(any,null,new bare.createInstance(any,null,message),null));
        }
        this._leftHandSide = this._becomeParentOf(leftHandSide);
        this._rightHandSide = this._becomeParentOf(rightHandSide);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._leftHandSide.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        let element : any = this.propagatedElement;
        if (op(Op.EQUALS,element,null)) {
            element = this.staticElement;
        }
        return element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._leftHandSide);
                _.add(this.operator);
                _.add(this._rightHandSide);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._rightHandSide.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get leftHandSide() : any {
        return this._leftHandSide;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set leftHandSide(expression : any) {
        this._leftHandSide = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get rightHandSide() : any {
        return this._rightHandSide;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set rightHandSide(expression : any) {
        this._rightHandSide = this._becomeParentOf(expression as AstNodeImpl);
    }
    get _propagatedParameterElementForRightHandSide() : any {
        let executableElement : any = null;
        if (this.propagatedElement != null) {
            executableElement = this.propagatedElement;
        }else {
            let left : any = this._leftHandSide;
            if (is(left, any)) {
                let leftElement : any = left.propagatedElement;
                if (is(leftElement, any)) {
                    executableElement = leftElement;
                }
            }else if (is(left, any)) {
                let leftElement : any = left.propertyName.propagatedElement;
                if (is(leftElement, any)) {
                    executableElement = leftElement;
                }
            }
        }
        if (op(Op.EQUALS,executableElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = executableElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    get _staticParameterElementForRightHandSide() : any {
        let executableElement : any = null;
        if (this.staticElement != null) {
            executableElement = this.staticElement;
        }else {
            let left : any = this._leftHandSide;
            if (is(left, any)) {
                let leftElement : any = left.staticElement;
                if (is(leftElement, any)) {
                    executableElement = leftElement;
                }
            }else if (is(left, any)) {
                let leftElement : any = left.propertyName.staticElement;
                if (is(leftElement, any)) {
                    executableElement = leftElement;
                }
            }
        }
        if (op(Op.EQUALS,executableElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = executableElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitAssignmentExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_78_)=>(!!_78_)?_78_.accept(visitor):null)(this._leftHandSide);
        ((_79_)=>(!!_79_)?_79_.accept(visitor):null)(this._rightHandSide);
    }
}

export namespace BinaryExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'BinaryExpressionImpl';
    export type Interface = Omit<BinaryExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class BinaryExpressionImpl extends ExpressionImpl implements any.Interface {
    _leftOperand : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    operator : any;

    _rightOperand : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElement : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedElement : any;

    constructor(leftOperand : ExpressionImpl,operator : any,rightOperand : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BinaryExpressionImpl(leftOperand : ExpressionImpl,operator : any,rightOperand : ExpressionImpl) {
        this.operator = operator;
        this._leftOperand = this._becomeParentOf(leftOperand);
        this._rightOperand = this._becomeParentOf(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._leftOperand.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        let element : any = this.propagatedElement;
        if (op(Op.EQUALS,element,null)) {
            element = this.staticElement;
        }
        return element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._leftOperand);
                _.add(this.operator);
                _.add(this._rightOperand);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._rightOperand.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get leftOperand() : any {
        return this._leftOperand;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set leftOperand(expression : any) {
        this._leftOperand = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return this.operator.type.precedence;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get rightOperand() : any {
        return this._rightOperand;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set rightOperand(expression : any) {
        this._rightOperand = this._becomeParentOf(expression as AstNodeImpl);
    }
    get _propagatedParameterElementForRightOperand() : any {
        if (op(Op.EQUALS,this.propagatedElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = this.propagatedElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    get _staticParameterElementForRightOperand() : any {
        if (op(Op.EQUALS,this.staticElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = this.staticElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitBinaryExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_81_)=>(!!_81_)?_81_.accept(visitor):null)(this._leftOperand);
        ((_82_)=>(!!_82_)?_82_.accept(visitor):null)(this._rightOperand);
    }
}

export namespace PrefixExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'PrefixExpressionImpl';
    export type Interface = Omit<PrefixExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PrefixExpressionImpl extends ExpressionImpl implements any.Interface {
    operator : any;

    _operand : any;

    staticElement : any;

    propagatedElement : any;

    constructor(operator : any,operand : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrefixExpressionImpl(operator : any,operand : ExpressionImpl) {
        this.operator = operator;
        this._operand = this._becomeParentOf(operand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.operator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        let element : any = this.propagatedElement;
        if (op(Op.EQUALS,element,null)) {
            element = this.staticElement;
        }
        return element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.operator);
                _.add(this._operand);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._operand.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get operand() : any {
        return this._operand;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set operand(expression : any) {
        this._operand = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 14;
    }
    get _propagatedParameterElementForOperand() : any {
        if (op(Op.EQUALS,this.propagatedElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = this.propagatedElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    get _staticParameterElementForOperand() : any {
        if (op(Op.EQUALS,this.staticElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = this.staticElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitPrefixExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_203_)=>(!!_203_)?_203_.accept(visitor):null)(this._operand);
    }
}

export namespace PostfixExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'PostfixExpressionImpl';
    export type Interface = Omit<PostfixExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PostfixExpressionImpl extends ExpressionImpl implements any.Interface {
    _operand : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    operator : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedElement : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElement : any;

    constructor(operand : ExpressionImpl,operator : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PostfixExpressionImpl(operand : ExpressionImpl,operator : any) {
        this.operator = operator;
        this._operand = this._becomeParentOf(operand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._operand.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        let element : any = this.propagatedElement;
        if (op(Op.EQUALS,element,null)) {
            element = this.staticElement;
        }
        return element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._operand);
                _.add(this.operator);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.operator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get operand() : any {
        return this._operand;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set operand(expression : any) {
        this._operand = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 15;
    }
    get _propagatedParameterElementForOperand() : any {
        if (op(Op.EQUALS,this.propagatedElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = this.propagatedElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    get _staticParameterElementForOperand() : any {
        if (op(Op.EQUALS,this.staticElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = this.staticElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitPostfixExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_200_)=>(!!_200_)?_200_.accept(visitor):null)(this._operand);
    }
}

export namespace ParenthesizedExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'ParenthesizedExpressionImpl';
    export type Interface = Omit<ParenthesizedExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ParenthesizedExpressionImpl extends ExpressionImpl implements any.Interface {
    leftParenthesis : any;

    _expression : any;

    rightParenthesis : any;

    constructor(leftParenthesis : any,expression : ExpressionImpl,rightParenthesis : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParenthesizedExpressionImpl(leftParenthesis : any,expression : ExpressionImpl,rightParenthesis : any) {
        this.leftParenthesis = leftParenthesis;
        this.rightParenthesis = rightParenthesis;
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.leftParenthesis;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.leftParenthesis);
                _.add(this._expression);
                _.add(this.rightParenthesis);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightParenthesis;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 15;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get unParenthesized() : any {
        let expression : any = this._expression;
        while (is(expression, ParenthesizedExpressionImpl)){
            expression = (expression as ParenthesizedExpressionImpl)._expression;
        }
        return expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitParenthesizedExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_197_)=>(!!_197_)?_197_.accept(visitor):null)(this._expression);
    }
}

export namespace NormalFormalParameterImpl {
    export type Constructors = FormalParameterImpl.Constructors | 'NormalFormalParameterImpl';
    export type Interface = Omit<NormalFormalParameterImpl, Constructors>;
}
@DartClass
@Implements(any)
export class NormalFormalParameterImpl extends FormalParameterImpl implements any.Interface {
    _comment : any;

    _metadata : any;

    covariantKeyword : any;

    _identifier : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,identifier : SimpleIdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NormalFormalParameterImpl(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,identifier : SimpleIdentifierImpl) {
        this.covariantKeyword = covariantKeyword;
        this._comment = this._becomeParentOf(comment);
        this._metadata = new NodeListImpl<any>(this,metadata);
        this._identifier = this._becomeParentOf(identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : any {
        return this._comment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set documentationComment(comment : any) {
        this._comment = this._becomeParentOf(comment as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : any {
        return this._identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set identifier(identifier : any) {
        this._identifier = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : any {
        let parent : any = this.parent;
        if (is(parent, any)) {
            return parent.kind;
        }
        return ParameterKind.REQUIRED;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get metadata() : any {
        return this._metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set metadata(metadata : core.DartList<any>) {
        this._metadata.clear();
        this._metadata.addAll(metadata);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sortedCommentAndAnnotations() : core.DartList<any> {
        return ((_) : core.DartList<any> =>  {
            {
                _.add(this._comment);
                _.addAll(this._metadata);
                _.sort(AstNode.LEXICAL_ORDER);
                return _;
            }
        })(new core.DartList.literal<any>());
    }
    get _childEntities() : ChildEntities {
        let result : ChildEntities = new ChildEntities();
        if (this._commentIsBeforeAnnotations()) {
            ((_) : ChildEntities =>  {
                {
                    _.add(this._comment);
                    _.addAll(this._metadata);
                    return _;
                }
            })(result);
        }else {
            result.addAll(this.sortedCommentAndAnnotations);
        }
        if (this.covariantKeyword != null) {
            result.add(this.covariantKeyword);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        if (this._commentIsBeforeAnnotations()) {
            ((_196_)=>(!!_196_)?_196_.accept(visitor):null)(this._comment);
            this._metadata.accept(visitor);
        }else {
            let children : core.DartList<any> = this.sortedCommentAndAnnotations;
            let length : number = children.length;
            for(let i : number = 0; i < length; i++){
                children[i].accept(visitor);
            }
        }
    }
    _commentIsBeforeAnnotations() : boolean {
        if (op(Op.EQUALS,this._comment,null) || this._metadata.isEmpty) {
            return true;
        }
        let firstAnnotation : any = op(Op.INDEX,this._metadata,0);
        return op(Op.LT,this._comment.offset,firstAnnotation.offset);
    }
}

export namespace NamedExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'NamedExpressionImpl';
    export type Interface = Omit<NamedExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class NamedExpressionImpl extends ExpressionImpl implements any.Interface {
    _name : any;

    _expression : any;

    constructor(name : LabelImpl,expression : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedExpressionImpl(name : LabelImpl,expression : ExpressionImpl) {
        this._name = this._becomeParentOf(name);
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._name.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._name);
                _.add(this._expression);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        let element : any = this._name.label.staticElement;
        if (is(element, any)) {
            return element;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._expression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(identifier : any) {
        this._name = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitNamedExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_192_)=>(!!_192_)?_192_.accept(visitor):null)(this._name);
        ((_193_)=>(!!_193_)?_193_.accept(visitor):null)(this._expression);
    }
}

export namespace YieldStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'YieldStatementImpl';
    export type Interface = Omit<YieldStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class YieldStatementImpl extends StatementImpl implements any.Interface {
    yieldKeyword : any;

    star : any;

    _expression : any;

    semicolon : any;

    constructor(yieldKeyword : any,star : any,expression : ExpressionImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    YieldStatementImpl(yieldKeyword : any,star : any,expression : ExpressionImpl,semicolon : any) {
        this.yieldKeyword = yieldKeyword;
        this.star = star;
        this.semicolon = semicolon;
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this.yieldKeyword != null) {
            return this.yieldKeyword;
        }
        return this._expression.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.yieldKeyword);
                _.add(this.star);
                _.add(this._expression);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this.semicolon != null) {
            return this.semicolon;
        }
        return this._expression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitYieldStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_231_)=>(!!_231_)?_231_.accept(visitor):null)(this._expression);
    }
}

export namespace AwaitExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'AwaitExpressionImpl';
    export type Interface = Omit<AwaitExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AwaitExpressionImpl extends ExpressionImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    awaitKeyword : any;

    _expression : any;

    constructor(awaitKeyword : any,expression : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AwaitExpressionImpl(awaitKeyword : any,expression : ExpressionImpl) {
        this.awaitKeyword = awaitKeyword;
        this._expression = this._becomeParentOf(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this.awaitKeyword != null) {
            return this.awaitKeyword;
        }
        return this._expression.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.awaitKeyword);
                _.add(this._expression);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._expression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expression() : any {
        return this._expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set expression(expression : any) {
        this._expression = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitAwaitExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_80_)=>(!!_80_)?_80_.accept(visitor):null)(this._expression);
    }
}

export namespace ContinueStatementImpl {
    export type Constructors = StatementImpl.Constructors | 'ContinueStatementImpl';
    export type Interface = Omit<ContinueStatementImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ContinueStatementImpl extends StatementImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    continueKeyword : any;

    _label : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    target : any;

    constructor(continueKeyword : any,label : SimpleIdentifierImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContinueStatementImpl(continueKeyword : any,label : SimpleIdentifierImpl,semicolon : any) {
        this.continueKeyword = continueKeyword;
        this.semicolon = semicolon;
        this._label = this._becomeParentOf(label);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.continueKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.continueKeyword);
                _.add(this._label);
                _.add(this.semicolon);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get label() : any {
        return this._label;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set label(identifier : any) {
        this._label = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitContinueStatement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_118_)=>(!!_118_)?_118_.accept(visitor):null)(this._label);
    }
}

export namespace IndexExpressionImpl {
    export type Constructors = ExpressionImpl.Constructors | 'forCascade' | 'forTarget';
    export type Interface = Omit<IndexExpressionImpl, Constructors>;
}
@DartClass
@Implements(any)
export class IndexExpressionImpl extends ExpressionImpl implements any.Interface {
    _target : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    period : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftBracket : any;

    _index : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightBracket : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElement : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedElement : any;

    auxiliaryElements : any;

    @namedConstructor
    forCascade(period : any,leftBracket : any,index : ExpressionImpl,rightBracket : any) {
        this.auxiliaryElements = null;
        this.period = period;
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._index = this._becomeParentOf(index);
    }
    static forCascade : new(period : any,leftBracket : any,index : ExpressionImpl,rightBracket : any) => IndexExpressionImpl;

    @namedConstructor
    forTarget(target : ExpressionImpl,leftBracket : any,index : ExpressionImpl,rightBracket : any) {
        this.auxiliaryElements = null;
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._target = this._becomeParentOf(target);
        this._index = this._becomeParentOf(index);
    }
    static forTarget : new(target : ExpressionImpl,leftBracket : any,index : ExpressionImpl,rightBracket : any) => IndexExpressionImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this._target != null) {
            return this._target.beginToken;
        }
        return this.period;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        let element : any = this.propagatedElement;
        if (op(Op.EQUALS,element,null)) {
            element = this.staticElement;
        }
        return element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._target);
                _.add(this.period);
                _.add(this.leftBracket);
                _.add(this._index);
                _.add(this.rightBracket);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get index() : any {
        return this._index;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set index(expression : any) {
        this._index = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAssignable() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCascaded() : boolean {
        return this.period != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 15;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get realTarget() : any {
        if (this.isCascaded) {
            let ancestor : any = this.parent;
            while (isNot(ancestor, any)){
                if (op(Op.EQUALS,ancestor,null)) {
                    return this._target;
                }
                ancestor = ancestor.parent;
            }
            return (ancestor as any).target;
        }
        return this._target;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get target() : any {
        return this._target;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set target(expression : any) {
        this._target = this._becomeParentOf(expression as AstNodeImpl);
    }
    get _propagatedParameterElementForIndex() : any {
        if (op(Op.EQUALS,this.propagatedElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = this.propagatedElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    get _staticParameterElementForIndex() : any {
        if (op(Op.EQUALS,this.staticElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = this.staticElement.parameters;
        if (parameters.length < 1) {
            return null;
        }
        return parameters[0];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitIndexExpression(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inGetterContext() : boolean {
        let parent : any = this.parent;
        if (is(parent, any)) {
            let assignment : any = parent;
            if (core.identical(assignment.leftHandSide,this) && op(Op.EQUALS,assignment.operator.type,TokenType.EQ)) {
                return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inSetterContext() : boolean {
        let parent : any = this.parent;
        if (is(parent, any)) {
            return parent.operator.type.isIncrementOperator;
        }else if (is(parent, any)) {
            return true;
        }else if (is(parent, any)) {
            return core.identical(parent.leftHandSide,this);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_171_)=>(!!_171_)?_171_.accept(visitor):null)(this._target);
        ((_172_)=>(!!_172_)?_172_.accept(visitor):null)(this._index);
    }
}

export namespace DoubleLiteralImpl {
    export type Constructors = LiteralImpl.Constructors | 'DoubleLiteralImpl';
    export type Interface = Omit<DoubleLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DoubleLiteralImpl extends LiteralImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    literal : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value : double;

    constructor(literal : any,value : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleLiteralImpl(literal : any,value : double) {
        this.literal = literal;
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.literal);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitDoubleLiteral(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace NullLiteralImpl {
    export type Constructors = LiteralImpl.Constructors | 'NullLiteralImpl';
    export type Interface = Omit<NullLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class NullLiteralImpl extends LiteralImpl implements any.Interface {
    literal : any;

    constructor(literal : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullLiteralImpl(literal : any) {
        this.literal = literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.literal);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitNullLiteral(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace MethodInvocationImpl {
    export type Constructors = InvocationExpressionImpl.Constructors | 'MethodInvocationImpl';
    export type Interface = Omit<MethodInvocationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MethodInvocationImpl extends InvocationExpressionImpl implements any.Interface {
    _target : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    operator : any;

    _methodName : any;

    constructor(target : ExpressionImpl,operator : any,methodName : SimpleIdentifierImpl,typeArguments : TypeArgumentListImpl,argumentList : ArgumentListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodInvocationImpl(target : ExpressionImpl,operator : any,methodName : SimpleIdentifierImpl,typeArguments : TypeArgumentListImpl,argumentList : ArgumentListImpl) {
        super.InvocationExpressionImpl(typeArguments,argumentList);
        this.operator = operator;
        this._target = this._becomeParentOf(target);
        this._methodName = this._becomeParentOf(methodName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this._target != null) {
            return this._target.beginToken;
        }else if (this.operator != null) {
            return this.operator;
        }
        return this._methodName.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._target);
                _.add(this.operator);
                _.add(this._methodName);
                _.add(this._argumentList);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._argumentList.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get function() : any {
        return this.methodName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCascaded() : boolean {
        return this.operator != null && op(Op.EQUALS,this.operator.type,TokenType.PERIOD_PERIOD);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get methodName() : any {
        return this._methodName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set methodName(identifier : any) {
        this._methodName = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 15;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get realTarget() : any {
        if (this.isCascaded) {
            let ancestor : any = this.parent;
            while (isNot(ancestor, any)){
                if (op(Op.EQUALS,ancestor,null)) {
                    return this._target;
                }
                ancestor = ancestor.parent;
            }
            return (ancestor as any).target;
        }
        return this._target;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get target() : any {
        return this._target;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set target(expression : any) {
        this._target = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitMethodInvocation(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_188_)=>(!!_188_)?_188_.accept(visitor):null)(this._target);
        ((_189_)=>(!!_189_)?_189_.accept(visitor):null)(this._methodName);
        ((_190_)=>(!!_190_)?_190_.accept(visitor):null)(this._typeArguments);
        ((_191_)=>(!!_191_)?_191_.accept(visitor):null)(this._argumentList);
    }
}

export namespace PartOfDirectiveImpl {
    export type Constructors = DirectiveImpl.Constructors | 'PartOfDirectiveImpl';
    export type Interface = Omit<PartOfDirectiveImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PartOfDirectiveImpl extends DirectiveImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    partKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ofKeyword : any;

    _uri : StringLiteralImpl;

    _libraryName : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,partKeyword : any,ofKeyword : any,uri : StringLiteralImpl,libraryName : LibraryIdentifierImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PartOfDirectiveImpl(comment : CommentImpl,metadata : core.DartList<any>,partKeyword : any,ofKeyword : any,uri : StringLiteralImpl,libraryName : LibraryIdentifierImpl,semicolon : any) {
        super.DirectiveImpl(comment,metadata);
        this.partKeyword = partKeyword;
        this.ofKeyword = ofKeyword;
        this.semicolon = semicolon;
        this._uri = this._becomeParentOf(uri);
        this._libraryName = this._becomeParentOf(libraryName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.partKeyword);
                _.add(this.ofKeyword);
                _.add(this._uri);
                _.add(this._libraryName);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this.partKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get keyword() : any {
        return this.partKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryName() : any {
        return this._libraryName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set libraryName(libraryName : any) {
        this._libraryName = this._becomeParentOf(libraryName as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : any {
        return this._uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uri(uri : any) {
        this._uri = this._becomeParentOf(uri as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitPartOfDirective(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_198_)=>(!!_198_)?_198_.accept(visitor):null)(this._libraryName);
        ((_199_)=>(!!_199_)?_199_.accept(visitor):null)(this._uri);
    }
}

export namespace PrefixedIdentifierImpl {
    export type Constructors = IdentifierImpl.Constructors | 'PrefixedIdentifierImpl' | 'temp';
    export type Interface = Omit<PrefixedIdentifierImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PrefixedIdentifierImpl extends IdentifierImpl implements any.Interface {
    _prefix : any;

    period : any;

    _identifier : any;

    constructor(prefix : SimpleIdentifierImpl,period : any,identifier : SimpleIdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrefixedIdentifierImpl(prefix : SimpleIdentifierImpl,period : any,identifier : SimpleIdentifierImpl) {
        this.period = period;
        this._prefix = this._becomeParentOf(prefix);
        this._identifier = this._becomeParentOf(identifier);
    }
    @namedConstructor
    temp(_prefix : any,_identifier : any) {
        this.period = null;
        this._prefix = _prefix;
        this._identifier = _identifier;
    }
    static temp : new(_prefix : any,_identifier : any) => PrefixedIdentifierImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._prefix.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        if (op(Op.EQUALS,this._identifier,null)) {
            return null;
        }
        return this._identifier.bestElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._prefix);
                _.add(this.period);
                _.add(this._identifier);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._identifier.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : any {
        return this._identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set identifier(identifier : any) {
        this._identifier = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDeferred() : boolean {
        let element : any = this._prefix.staticElement;
        if (is(element, any)) {
            let imports : core.DartList<any> = element.enclosingElement.getImportsWithPrefix(element);
            if (imports.length != 1) {
                return false;
            }
            return imports[0].isDeferred;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return `${this._prefix.name}.${this._identifier.name}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 15;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefix() : any {
        return this._prefix;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set prefix(identifier : any) {
        this._prefix = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedElement() : any {
        if (op(Op.EQUALS,this._identifier,null)) {
            return null;
        }
        return this._identifier.propagatedElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get staticElement() : any {
        if (op(Op.EQUALS,this._identifier,null)) {
            return null;
        }
        return this._identifier.staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitPrefixedIdentifier(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_201_)=>(!!_201_)?_201_.accept(visitor):null)(this._prefix);
        ((_202_)=>(!!_202_)?_202_.accept(visitor):null)(this._identifier);
    }
}

export namespace SimpleIdentifierImpl {
    export type Constructors = IdentifierImpl.Constructors | 'SimpleIdentifierImpl';
    export type Interface = Omit<SimpleIdentifierImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SimpleIdentifierImpl extends IdentifierImpl implements any.Interface {
    token : any;

    _staticElement : any;

    _propagatedElement : any;

    auxiliaryElements : any;

    constructor(token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleIdentifierImpl(token : any) {
        this.auxiliaryElements = null;
        this.token = token;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.token;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        if (op(Op.EQUALS,this._propagatedElement,null)) {
            return this._staticElement;
        }
        return this._propagatedElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.token);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.token;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isQualified() : boolean {
        let parent : any = this.parent;
        if (is(parent, any)) {
            return core.identical(parent.identifier,this);
        }else if (is(parent, any)) {
            return core.identical(parent.propertyName,this);
        }else if (is(parent, any)) {
            let invocation : any = parent;
            return core.identical(invocation.methodName,this) && invocation.realTarget != null;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this.token.isSynthetic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this.token.lexeme;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 16;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedElement() : any {
        return this._propagatedElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set propagatedElement(element : any) {
        this._propagatedElement = element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get staticElement() : any {
        return this._staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set staticElement(element : any) {
        this._staticElement = element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSimpleIdentifier(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inDeclarationContext() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inGetterContext() : boolean {
        let initialParent : any = this.parent;
        let parent : any = initialParent;
        let target : any = this;
        if (is(initialParent, any)) {
            if (core.identical(initialParent.prefix,this)) {
                return true;
            }
            parent = initialParent.parent;
            target = initialParent;
        }else if (is(initialParent, any)) {
            if (core.identical(initialParent.target,this)) {
                return true;
            }
            parent = initialParent.parent;
            target = initialParent;
        }
        if (is(parent, any)) {
            return false;
        }
        if (is(parent, any)) {
            if (core.identical(parent.leftHandSide,target) && op(Op.EQUALS,parent.operator.type,TokenType.EQ)) {
                return false;
            }
        }
        if (is(parent, any) && core.identical(parent.fieldName,target)) {
            return false;
        }
        if (is(parent, any)) {
            if (core.identical(parent.identifier,target)) {
                return false;
            }
        }
        if (is(parent, any)) {
            if (core.identical(parent.identifier,target)) {
                return false;
            }
        }
        if (is(parent, any)) {
            if (core.identical(parent.name,target)) {
                return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inSetterContext() : boolean {
        let initialParent : any = this.parent;
        let parent : any = initialParent;
        let target : any = this;
        if (is(initialParent, any)) {
            if (core.identical(initialParent.prefix,this)) {
                return false;
            }
            parent = initialParent.parent;
            target = initialParent;
        }else if (is(initialParent, any)) {
            if (core.identical(initialParent.target,this)) {
                return false;
            }
            parent = initialParent.parent;
            target = initialParent;
        }
        if (is(parent, any)) {
            return parent.operator.type.isIncrementOperator;
        }else if (is(parent, any)) {
            return true;
        }else if (is(parent, any)) {
            return core.identical(parent.leftHandSide,target);
        }else if (is(parent, any)) {
            return core.identical(parent.identifier,target);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace LibraryIdentifierImpl {
    export type Constructors = IdentifierImpl.Constructors | 'LibraryIdentifierImpl';
    export type Interface = Omit<LibraryIdentifierImpl, Constructors>;
}
@DartClass
@Implements(any)
export class LibraryIdentifierImpl extends IdentifierImpl implements any.Interface {
    _components : any;

    constructor(components : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryIdentifierImpl(components : core.DartList<any>) {
        this._components = new NodeListImpl<any>(this,components);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._components.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        return this.staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this._components);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get components() : any {
        return this._components;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._components.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let needsPeriod : boolean = false;
        let length : number = this._components.length;
        for(let i : number = 0; i < length; i++){
            let identifier : any = op(Op.INDEX,this._components,i);
            if (needsPeriod) {
                buffer.write(".");
            }else {
                needsPeriod = true;
            }
            buffer.write(identifier.name);
        }
        return buffer.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 15;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get propagatedElement() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get staticElement() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitLibraryIdentifier(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._components.accept(visitor);
    }
}

export namespace LibraryDirectiveImpl {
    export type Constructors = DirectiveImpl.Constructors | 'LibraryDirectiveImpl';
    export type Interface = Omit<LibraryDirectiveImpl, Constructors>;
}
@DartClass
@Implements(any)
export class LibraryDirectiveImpl extends DirectiveImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    libraryKeyword : any;

    _name : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,libraryKeyword : any,name : LibraryIdentifierImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryDirectiveImpl(comment : CommentImpl,metadata : core.DartList<any>,libraryKeyword : any,name : LibraryIdentifierImpl,semicolon : any) {
        super.DirectiveImpl(comment,metadata);
        this.libraryKeyword = libraryKeyword;
        this.semicolon = semicolon;
        this._name = this._becomeParentOf(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.libraryKeyword);
                _.add(this._name);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this.libraryKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get keyword() : any {
        return this.libraryKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(name : any) {
        this._name = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitLibraryDirective(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_180_)=>(!!_180_)?_180_.accept(visitor):null)(this._name);
    }
}

export namespace IntegerLiteralImpl {
    export type Constructors = LiteralImpl.Constructors | 'IntegerLiteralImpl';
    export type Interface = Omit<IntegerLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class IntegerLiteralImpl extends LiteralImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    literal : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value : number;

    constructor(literal : any,value : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntegerLiteralImpl(literal : any,value : number) {
        this.value = 0;
        this.literal = literal;
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.literal);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitIntegerLiteral(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace BooleanLiteralImpl {
    export type Constructors = LiteralImpl.Constructors | 'BooleanLiteralImpl';
    export type Interface = Omit<BooleanLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class BooleanLiteralImpl extends LiteralImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    literal : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value : boolean;

    constructor(literal : any,value : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BooleanLiteralImpl(literal : any,value : boolean) {
        this.value = false;
        this.literal = literal;
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.literal);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this.literal.isSynthetic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitBooleanLiteral(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace ClassMemberImpl {
    export type Constructors = DeclarationImpl.Constructors | 'ClassMemberImpl';
    export type Interface = Omit<ClassMemberImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ClassMemberImpl extends DeclarationImpl implements any.Interface {
    constructor(comment : any,metadata : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassMemberImpl(comment : any,metadata : core.DartList<any>) {
        super.DeclarationImpl(comment,metadata);
    }
}

export namespace SimpleFormalParameterImpl {
    export type Constructors = NormalFormalParameterImpl.Constructors | 'SimpleFormalParameterImpl';
    export type Interface = Omit<SimpleFormalParameterImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SimpleFormalParameterImpl extends NormalFormalParameterImpl implements any.Interface {
    keyword : any;

    _type : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    element : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,keyword : any,type : TypeAnnotationImpl,identifier : SimpleIdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleFormalParameterImpl(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,keyword : any,type : TypeAnnotationImpl,identifier : SimpleIdentifierImpl) {
        super.NormalFormalParameterImpl(comment,metadata,covariantKeyword,identifier);
        this.keyword = keyword;
        this._type = this._becomeParentOf(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        let metadata : any = this.metadata;
        if (!metadata.isEmpty) {
            return metadata.beginToken;
        }else if (this.covariantKeyword != null) {
            return this.covariantKeyword;
        }else if (this.keyword != null) {
            return this.keyword;
        }else if (this._type != null) {
            return this._type.beginToken;
        }
        return this.identifier.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.add(this._type);
                _.add(this.identifier);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return (((t)=>(!!t)?t.endToken:null)(this.identifier) || ((t)=>(!!t)?t.endToken:null)(this.type));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.CONST);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.FINAL);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        this._type = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSimpleFormalParameter(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_209_)=>(!!_209_)?_209_.accept(visitor):null)(this._type);
        ((_210_)=>(!!_210_)?_210_.accept(visitor):null)(this.identifier);
    }
}

export namespace VariableDeclarationImpl {
    export type Constructors = DeclarationImpl.Constructors | 'VariableDeclarationImpl';
    export type Interface = Omit<VariableDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class VariableDeclarationImpl extends DeclarationImpl implements any.Interface {
    _name : any;

    equals : any;

    _initializer : any;

    constructor(name : SimpleIdentifierImpl,equals : any,initializer : ExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableDeclarationImpl(name : SimpleIdentifierImpl,equals : any,initializer : ExpressionImpl) {
        super.DeclarationImpl(null,null);
        this.equals = equals;
        this._name = this._becomeParentOf(name);
        this._initializer = this._becomeParentOf(initializer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._name);
                _.add(this.equals);
                _.add(this._initializer);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get documentationComment() : any {
        let comment : any = super.documentationComment;
        if (op(Op.EQUALS,comment,null)) {
            let node : any = ((t)=>(!!t)?t.parent:null)(this.parent);
            if (is(node, any)) {
                return node.documentationComment;
            }
        }
        return comment;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._initializer != null) {
            return this._initializer.endToken;
        }
        return this._name.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this._name.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializer() : any {
        return this._initializer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set initializer(expression : any) {
        this._initializer = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        let parent : any = this.parent;
        return is(parent, any) && parent.isConst;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        let parent : any = this.parent;
        return is(parent, any) && parent.isFinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(identifier : any) {
        this._name = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitVariableDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_225_)=>(!!_225_)?_225_.accept(visitor):null)(this._name);
        ((_226_)=>(!!_226_)?_226_.accept(visitor):null)(this._initializer);
    }
}

export namespace FunctionTypedFormalParameterImpl {
    export type Constructors = NormalFormalParameterImpl.Constructors | 'FunctionTypedFormalParameterImpl';
    export type Interface = Omit<FunctionTypedFormalParameterImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionTypedFormalParameterImpl extends NormalFormalParameterImpl implements any.Interface {
    _returnType : any;

    _typeParameters : any;

    _parameters : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    question : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,returnType : TypeAnnotationImpl,identifier : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl,question : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypedFormalParameterImpl(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,returnType : TypeAnnotationImpl,identifier : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl,question : any) {
        super.NormalFormalParameterImpl(comment,metadata,covariantKeyword,identifier);
        this.question = question;
        this._returnType = this._becomeParentOf(returnType);
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._parameters = this._becomeParentOf(parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        let metadata : any = this.metadata;
        if (!metadata.isEmpty) {
            return metadata.beginToken;
        }else if (this.covariantKeyword != null) {
            return this.covariantKeyword;
        }else if (this._returnType != null) {
            return this._returnType.beginToken;
        }
        return this.identifier.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._returnType);
                _.add(this.identifier);
                _.add(this.parameters);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._parameters.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : any {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : any) {
        this._parameters = this._becomeParentOf(parameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(type : any) {
        this._returnType = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFunctionTypedFormalParameter(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_157_)=>(!!_157_)?_157_.accept(visitor):null)(this._returnType);
        ((_158_)=>(!!_158_)?_158_.accept(visitor):null)(this.identifier);
        ((_159_)=>(!!_159_)?_159_.accept(visitor):null)(this._typeParameters);
        ((_160_)=>(!!_160_)?_160_.accept(visitor):null)(this._parameters);
    }
}

export namespace CompilationUnitMemberImpl {
    export type Constructors = DeclarationImpl.Constructors | 'CompilationUnitMemberImpl';
    export type Interface = Omit<CompilationUnitMemberImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CompilationUnitMemberImpl extends DeclarationImpl implements any.Interface {
    constructor(comment : any,metadata : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitMemberImpl(comment : any,metadata : core.DartList<any>) {
        super.DeclarationImpl(comment,metadata);
    }
}

export namespace UriBasedDirectiveImpl {
    export type Constructors = DirectiveImpl.Constructors | 'UriBasedDirectiveImpl';
    export type Interface = Omit<UriBasedDirectiveImpl, Constructors>;
}
@DartClass
@Implements(any)
export class UriBasedDirectiveImpl extends DirectiveImpl implements any.Interface {
    private static __$_DART_EXT_SCHEME : string;
    static get _DART_EXT_SCHEME() : string { 
        if (this.__$_DART_EXT_SCHEME===undefined) {
            this.__$_DART_EXT_SCHEME = "dart-ext:";
        }
        return this.__$_DART_EXT_SCHEME;
    }
    static set _DART_EXT_SCHEME(__$value : string)  { 
        this.__$_DART_EXT_SCHEME = __$value;
    }

    _uri : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uriContent : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uriSource : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,uri : StringLiteralImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriBasedDirectiveImpl(comment : CommentImpl,metadata : core.DartList<any>,uri : StringLiteralImpl) {
        super.DirectiveImpl(comment,metadata);
        this._uri = this._becomeParentOf(uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this.uriSource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set source(source : any) {
        this.uriSource = source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : any {
        return this._uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set uri(uri : any) {
        this._uri = this._becomeParentOf(uri as AstNodeImpl);
    }
    validate() : UriValidationCode {
        return UriBasedDirectiveImpl.validateUri(is(this, any),this.uri,this.uriContent);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_224_)=>(!!_224_)?_224_.accept(visitor):null)(this._uri);
    }
    static validateUri(isImport : boolean,uriLiteral : any,uriContent : string) : UriValidationCode {
        if (is(uriLiteral, any)) {
            return UriValidationCode.URI_WITH_INTERPOLATION;
        }
        if (uriContent == null) {
            return UriValidationCode.INVALID_URI;
        }
        if (isImport && new core.DartString(uriContent).startsWith(UriBasedDirectiveImpl._DART_EXT_SCHEME)) {
            return UriValidationCode.URI_WITH_DART_EXT_SCHEME;
        }
        let uri : lib5.Uri;
        try {
            uri = lib5.Uri.parse(lib5.Uri.encodeFull(uriContent));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return UriValidationCode.INVALID_URI;
            }
        }
        if (new core.DartString(uri.path).isEmpty) {
            return UriValidationCode.INVALID_URI;
        }
        return null;
    }
}

export namespace StringLiteralImpl {
    export type Constructors = LiteralImpl.Constructors | 'StringLiteralImpl';
    export type Interface = Omit<StringLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class StringLiteralImpl extends LiteralImpl implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stringValue() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        try {
            this._appendStringValue(buffer);
        } catch (__error__) {

            if (is(__error__,core.ArgumentError)){
                return null;
            }
        }
        return buffer.toString();
    }
    @Abstract
    _appendStringValue(buffer : core.DartStringBuffer) : void{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringLiteralImpl() {
    }
}

export namespace FunctionExpressionInvocationImpl {
    export type Constructors = InvocationExpressionImpl.Constructors | 'FunctionExpressionInvocationImpl';
    export type Interface = Omit<FunctionExpressionInvocationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionExpressionInvocationImpl extends InvocationExpressionImpl implements any.Interface {
    _function : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticElement : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propagatedElement : any;

    constructor(function : ExpressionImpl,typeArguments : TypeArgumentListImpl,argumentList : ArgumentListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionExpressionInvocationImpl(function : ExpressionImpl,typeArguments : TypeArgumentListImpl,argumentList : ArgumentListImpl) {
        super.InvocationExpressionImpl(typeArguments,argumentList);
        this._function = this._becomeParentOf(function);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._function.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        let element : any = this.propagatedElement;
        if (op(Op.EQUALS,element,null)) {
            element = this.staticElement;
        }
        return element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._function);
                _.add(this._argumentList);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._argumentList.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get function() : any {
        return this._function;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set function(expression : any) {
        this._function = this._becomeParentOf(expression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get precedence() : number {
        return 15;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFunctionExpressionInvocation(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_150_)=>(!!_150_)?_150_.accept(visitor):null)(this._function);
        ((_151_)=>(!!_151_)?_151_.accept(visitor):null)(this._typeArguments);
        ((_152_)=>(!!_152_)?_152_.accept(visitor):null)(this._argumentList);
    }
}

export namespace FieldFormalParameterImpl {
    export type Constructors = NormalFormalParameterImpl.Constructors | 'FieldFormalParameterImpl';
    export type Interface = Omit<FieldFormalParameterImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FieldFormalParameterImpl extends NormalFormalParameterImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    keyword : any;

    _type : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    thisKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    period : any;

    _typeParameters : any;

    _parameters : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,keyword : any,type : TypeAnnotationImpl,thisKeyword : any,period : any,identifier : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldFormalParameterImpl(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,keyword : any,type : TypeAnnotationImpl,thisKeyword : any,period : any,identifier : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl) {
        super.NormalFormalParameterImpl(comment,metadata,covariantKeyword,identifier);
        this.keyword = keyword;
        this.thisKeyword = thisKeyword;
        this.period = period;
        this._type = this._becomeParentOf(type);
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._parameters = this._becomeParentOf(parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        let metadata : any = this.metadata;
        if (!metadata.isEmpty) {
            return metadata.beginToken;
        }else if (this.covariantKeyword != null) {
            return this.covariantKeyword;
        }else if (this.keyword != null) {
            return this.keyword;
        }else if (this._type != null) {
            return this._type.beginToken;
        }
        return this.thisKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.add(this._type);
                _.add(this.thisKeyword);
                _.add(this.period);
                _.add(this.identifier);
                _.add(this._parameters);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._parameters != null) {
            return this._parameters.endToken;
        }
        return this.identifier.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.CONST);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.FINAL);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : any {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : any) {
        this._parameters = this._becomeParentOf(parameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        this._type = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFieldFormalParameter(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_131_)=>(!!_131_)?_131_.accept(visitor):null)(this._type);
        ((_132_)=>(!!_132_)?_132_.accept(visitor):null)(this.identifier);
        ((_133_)=>(!!_133_)?_133_.accept(visitor):null)(this._typeParameters);
        ((_134_)=>(!!_134_)?_134_.accept(visitor):null)(this._parameters);
    }
}

export namespace TypeParameterImpl {
    export type Constructors = DeclarationImpl.Constructors | 'TypeParameterImpl';
    export type Interface = Omit<TypeParameterImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeParameterImpl extends DeclarationImpl implements any.Interface {
    _name : any;

    extendsKeyword : any;

    _bound : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,name : SimpleIdentifierImpl,extendsKeyword : any,bound : TypeAnnotationImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterImpl(comment : CommentImpl,metadata : core.DartList<any>,name : SimpleIdentifierImpl,extendsKeyword : any,bound : TypeAnnotationImpl) {
        super.DeclarationImpl(comment,metadata);
        this.extendsKeyword = extendsKeyword;
        this._name = this._becomeParentOf(name);
        this._bound = this._becomeParentOf(bound);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bound() : any {
        return this._bound;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set bound(type : any) {
        this._bound = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._name);
                _.add(this.extendsKeyword);
                _.add(this._bound);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (op(Op.EQUALS,this._bound,null)) {
            return this._name.endToken;
        }
        return this._bound.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this._name.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(identifier : any) {
        this._name = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitTypeParameter(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_222_)=>(!!_222_)?_222_.accept(visitor):null)(this._name);
        ((_223_)=>(!!_223_)?_223_.accept(visitor):null)(this._bound);
    }
}

export namespace SymbolLiteralImpl {
    export type Constructors = LiteralImpl.Constructors | 'SymbolLiteralImpl';
    export type Interface = Omit<SymbolLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SymbolLiteralImpl extends LiteralImpl implements any.Interface {
    poundSign : any;

    components : core.DartList<any>;

    constructor(poundSign : any,components : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SymbolLiteralImpl(poundSign : any,components : core.DartList<any>) {
        this.poundSign = poundSign;
        this.components = components;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.poundSign;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.poundSign);
                _.addAll(this.components);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.components[this.components.length - 1];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSymbolLiteral(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export namespace DeclaredIdentifierImpl {
    export type Constructors = DeclarationImpl.Constructors | 'DeclaredIdentifierImpl';
    export type Interface = Omit<DeclaredIdentifierImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DeclaredIdentifierImpl extends DeclarationImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    keyword : any;

    _type : any;

    _identifier : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,type : TypeAnnotationImpl,identifier : SimpleIdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeclaredIdentifierImpl(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,type : TypeAnnotationImpl,identifier : SimpleIdentifierImpl) {
        super.DeclarationImpl(comment,metadata);
        this.keyword = keyword;
        this._type = this._becomeParentOf(type);
        this._identifier = this._becomeParentOf(identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.keyword);
                _.add(this._type);
                _.add(this._identifier);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        if (op(Op.EQUALS,this._identifier,null)) {
            return null;
        }
        return this._identifier.staticElement as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._identifier.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        if (this.keyword != null) {
            return this.keyword;
        }else if (this._type != null) {
            return this._type.beginToken;
        }
        return this._identifier.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get identifier() : any {
        return this._identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set identifier(identifier : any) {
        this._identifier = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isConst() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.CONST);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isFinal() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.keyword),Keyword.FINAL);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return this._type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set type(type : any) {
        this._type = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitDeclaredIdentifier(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_119_)=>(!!_119_)?_119_.accept(visitor):null)(this._type);
        ((_120_)=>(!!_120_)?_120_.accept(visitor):null)(this._identifier);
    }
}

export namespace EnumConstantDeclarationImpl {
    export type Constructors = DeclarationImpl.Constructors | 'EnumConstantDeclarationImpl';
    export type Interface = Omit<EnumConstantDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class EnumConstantDeclarationImpl extends DeclarationImpl implements any.Interface {
    _name : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,name : SimpleIdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumConstantDeclarationImpl(comment : CommentImpl,metadata : core.DartList<any>,name : SimpleIdentifierImpl) {
        super.DeclarationImpl(comment,metadata);
        this._name = this._becomeParentOf(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._name);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._name.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this._name.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(name : any) {
        this._name = this._becomeParentOf(name as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitEnumConstantDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_125_)=>(!!_125_)?_125_.accept(visitor):null)(this._name);
    }
}

export namespace TypedLiteralImpl {
    export type Constructors = LiteralImpl.Constructors | 'TypedLiteralImpl';
    export type Interface = Omit<TypedLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypedLiteralImpl extends LiteralImpl implements any.Interface {
    constKeyword : any;

    _typeArguments : any;

    constructor(constKeyword : any,typeArguments : TypeArgumentListImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypedLiteralImpl(constKeyword : any,typeArguments : TypeArgumentListImpl) {
        this.constKeyword = constKeyword;
        this._typeArguments = this._becomeParentOf(typeArguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeArguments() : any {
        return this._typeArguments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeArguments(typeArguments : any) {
        this._typeArguments = this._becomeParentOf(typeArguments as AstNodeImpl);
    }
    get _childEntities() : ChildEntities {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.constKeyword);
                _.add(this._typeArguments);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        ((_219_)=>(!!_219_)?_219_.accept(visitor):null)(this._typeArguments);
    }
}

export namespace ListLiteralImpl {
    export type Constructors = TypedLiteralImpl.Constructors | 'ListLiteralImpl';
    export type Interface = Omit<ListLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ListLiteralImpl extends TypedLiteralImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftBracket : any;

    _elements : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightBracket : any;

    constructor(constKeyword : any,typeArguments : any,leftBracket : any,elements : core.DartList<any>,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListLiteralImpl(constKeyword : any,typeArguments : any,leftBracket : any,elements : core.DartList<any>,rightBracket : any) {
        super.TypedLiteralImpl(constKeyword,typeArguments);
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._elements = new NodeListImpl<any>(this,elements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this.constKeyword != null) {
            return this.constKeyword;
        }
        let typeArguments : any = this.typeArguments;
        if (typeArguments != null) {
            return typeArguments.beginToken;
        }
        return this.leftBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.leftBracket);
                _.addAll(this._elements);
                _.add(this.rightBracket);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elements() : any {
        return this._elements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitListLiteral(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this._elements.accept(visitor);
    }
}

export namespace FieldDeclarationImpl {
    export type Constructors = ClassMemberImpl.Constructors | 'FieldDeclarationImpl';
    export type Interface = Omit<FieldDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FieldDeclarationImpl extends ClassMemberImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    covariantKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticKeyword : any;

    _fieldList : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,staticKeyword : any,fieldList : VariableDeclarationListImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldDeclarationImpl(comment : CommentImpl,metadata : core.DartList<any>,covariantKeyword : any,staticKeyword : any,fieldList : VariableDeclarationListImpl,semicolon : any) {
        super.ClassMemberImpl(comment,metadata);
        this.covariantKeyword = covariantKeyword;
        this.staticKeyword = staticKeyword;
        this.semicolon = semicolon;
        this._fieldList = this._becomeParentOf(fieldList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.staticKeyword);
                _.add(this._fieldList);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : any {
        return this._fieldList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set fields(fields : any) {
        this._fieldList = this._becomeParentOf(fields as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        if (this.covariantKeyword != null) {
            return this.covariantKeyword;
        }else if (this.staticKeyword != null) {
            return this.staticKeyword;
        }
        return this._fieldList.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return this.staticKeyword != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFieldDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_130_)=>(!!_130_)?_130_.accept(visitor):null)(this._fieldList);
    }
}

export namespace AdjacentStringsImpl {
    export type Constructors = StringLiteralImpl.Constructors | 'AdjacentStringsImpl';
    export type Interface = Omit<AdjacentStringsImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AdjacentStringsImpl extends StringLiteralImpl implements any.Interface {
    _strings : any;

    constructor(strings : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AdjacentStringsImpl(strings : core.DartList<any>) {
        this._strings = new NodeListImpl<any>(this,strings);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._strings.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this._strings);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._strings.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strings() : any {
        return this._strings;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitAdjacentStrings(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._strings.accept(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _appendStringValue(buffer : core.DartStringBuffer) : void {
        let length : number = this.strings.length;
        for(let i : number = 0; i < length; i++){
            let stringLiteral : StringLiteralImpl = op(Op.INDEX,this.strings,i);
            stringLiteral._appendStringValue(buffer);
        }
    }
}

export namespace MethodDeclarationImpl {
    export type Constructors = ClassMemberImpl.Constructors | 'MethodDeclarationImpl';
    export type Interface = Omit<MethodDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MethodDeclarationImpl extends ClassMemberImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    externalKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    modifierKeyword : any;

    _returnType : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propertyKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    operatorKeyword : any;

    _name : any;

    _typeParameters : any;

    _parameters : any;

    _body : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,externalKeyword : any,modifierKeyword : any,returnType : TypeAnnotationImpl,propertyKeyword : any,operatorKeyword : any,name : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl,body : FunctionBodyImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodDeclarationImpl(comment : CommentImpl,metadata : core.DartList<any>,externalKeyword : any,modifierKeyword : any,returnType : TypeAnnotationImpl,propertyKeyword : any,operatorKeyword : any,name : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl,body : FunctionBodyImpl) {
        super.ClassMemberImpl(comment,metadata);
        this.externalKeyword = externalKeyword;
        this.modifierKeyword = modifierKeyword;
        this.propertyKeyword = propertyKeyword;
        this.operatorKeyword = operatorKeyword;
        this._returnType = this._becomeParentOf(returnType);
        this._name = this._becomeParentOf(name);
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._parameters = this._becomeParentOf(parameters);
        this._body = this._becomeParentOf(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(functionBody : any) {
        this._body = this._becomeParentOf(functionBody as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.externalKeyword);
                _.add(this.modifierKeyword);
                _.add(this._returnType);
                _.add(this.propertyKeyword);
                _.add(this.operatorKeyword);
                _.add(this._name);
                _.add(this._parameters);
                _.add(this._body);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._body.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        if (this.externalKeyword != null) {
            return this.externalKeyword;
        }else if (this.modifierKeyword != null) {
            return this.modifierKeyword;
        }else if (this._returnType != null) {
            return this._returnType.beginToken;
        }else if (this.propertyKeyword != null) {
            return this.propertyKeyword;
        }else if (this.operatorKeyword != null) {
            return this.operatorKeyword;
        }
        return this._name.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        let body : any = this._body;
        return op(Op.EQUALS,this.externalKeyword,null) && (is(body, any) && !body.semicolon.isSynthetic);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGetter() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.propertyKeyword),Keyword.GET);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOperator() : boolean {
        return this.operatorKeyword != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSetter() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.propertyKeyword),Keyword.SET);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStatic() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.modifierKeyword),Keyword.STATIC);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(identifier : any) {
        this._name = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : any {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : any) {
        this._parameters = this._becomeParentOf(parameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(type : any) {
        this._returnType = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitMethodDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_183_)=>(!!_183_)?_183_.accept(visitor):null)(this._returnType);
        ((_184_)=>(!!_184_)?_184_.accept(visitor):null)(this._name);
        ((_185_)=>(!!_185_)?_185_.accept(visitor):null)(this._typeParameters);
        ((_186_)=>(!!_186_)?_186_.accept(visitor):null)(this._parameters);
        ((_187_)=>(!!_187_)?_187_.accept(visitor):null)(this._body);
    }
}

export namespace NamedCompilationUnitMemberImpl {
    export type Constructors = CompilationUnitMemberImpl.Constructors | 'NamedCompilationUnitMemberImpl';
    export type Interface = Omit<NamedCompilationUnitMemberImpl, Constructors>;
}
@DartClass
@Implements(any)
export class NamedCompilationUnitMemberImpl extends CompilationUnitMemberImpl implements any.Interface {
    _name : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,name : SimpleIdentifierImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedCompilationUnitMemberImpl(comment : CommentImpl,metadata : core.DartList<any>,name : SimpleIdentifierImpl) {
        super.CompilationUnitMemberImpl(comment,metadata);
        this._name = this._becomeParentOf(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(identifier : any) {
        this._name = this._becomeParentOf(identifier as AstNodeImpl);
    }
}

export namespace EphemeralIdentifier {
    export type Constructors = SimpleIdentifierImpl.Constructors | 'EphemeralIdentifier';
    export type Interface = Omit<EphemeralIdentifier, Constructors>;
}
@DartClass
export class EphemeralIdentifier extends SimpleIdentifierImpl {
    constructor(parent : any,location : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EphemeralIdentifier(parent : any,location : number) {
        super.SimpleIdentifierImpl(new bare.createInstance(any,null,TokenType.IDENTIFIER,"",location));
        (parent as AstNodeImpl)._becomeParentOf(this);
    }
}

export namespace PartDirectiveImpl {
    export type Constructors = UriBasedDirectiveImpl.Constructors | 'PartDirectiveImpl';
    export type Interface = Omit<PartDirectiveImpl, Constructors>;
}
@DartClass
@Implements(any)
export class PartDirectiveImpl extends UriBasedDirectiveImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    partKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    constructor(comment : any,metadata : core.DartList<any>,partKeyword : any,partUri : any,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PartDirectiveImpl(comment : any,metadata : core.DartList<any>,partKeyword : any,partUri : any,semicolon : any) {
        super.UriBasedDirectiveImpl(comment,metadata,partUri);
        this.partKeyword = partKeyword;
        this.semicolon = semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.partKeyword);
                _.add(this._uri);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this.partKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get keyword() : any {
        return this.partKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriElement() : any {
        return this.element as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitPartDirective(this);
    }
}

export namespace NamespaceDirectiveImpl {
    export type Constructors = UriBasedDirectiveImpl.Constructors | 'NamespaceDirectiveImpl';
    export type Interface = Omit<NamespaceDirectiveImpl, Constructors>;
}
@DartClass
@Implements(any)
export class NamespaceDirectiveImpl extends UriBasedDirectiveImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    keyword : any;

    _configurations : any;

    _combinators : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    semicolon : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectedUriContent : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectedSource : any;

    constructor(comment : any,metadata : core.DartList<any>,keyword : any,libraryUri : any,configurations : core.DartList<any>,combinators : core.DartList<any>,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamespaceDirectiveImpl(comment : any,metadata : core.DartList<any>,keyword : any,libraryUri : any,configurations : core.DartList<any>,combinators : core.DartList<any>,semicolon : any) {
        super.UriBasedDirectiveImpl(comment,metadata,libraryUri);
        this.keyword = keyword;
        this.semicolon = semicolon;
        this._configurations = new NodeListImpl<any>(this,configurations);
        this._combinators = new NodeListImpl<any>(this,combinators);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get combinators() : any {
        return this._combinators;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get configurations() : any {
        return this._configurations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this.keyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this.selectedSource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set source(source : any) {
        this.selectedSource = source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get uriElement() : any{ throw 'abstract'}
}

export namespace SingleStringLiteralImpl {
    export type Constructors = StringLiteralImpl.Constructors | 'SingleStringLiteralImpl';
    export type Interface = Omit<SingleStringLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SingleStringLiteralImpl extends StringLiteralImpl implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SingleStringLiteralImpl() {
    }
}

export namespace TopLevelVariableDeclarationImpl {
    export type Constructors = CompilationUnitMemberImpl.Constructors | 'TopLevelVariableDeclarationImpl';
    export type Interface = Omit<TopLevelVariableDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TopLevelVariableDeclarationImpl extends CompilationUnitMemberImpl implements any.Interface {
    _variableList : any;

    semicolon : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,variableList : VariableDeclarationListImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelVariableDeclarationImpl(comment : CommentImpl,metadata : core.DartList<any>,variableList : VariableDeclarationListImpl,semicolon : any) {
        super.CompilationUnitMemberImpl(comment,metadata);
        this.semicolon = semicolon;
        this._variableList = this._becomeParentOf(variableList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._variableList);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this._variableList.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variables() : any {
        return this._variableList;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set variables(variables : any) {
        this._variableList = this._becomeParentOf(variables as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitTopLevelVariableDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_216_)=>(!!_216_)?_216_.accept(visitor):null)(this._variableList);
    }
}

export namespace MapLiteralImpl {
    export type Constructors = TypedLiteralImpl.Constructors | 'MapLiteralImpl';
    export type Interface = Omit<MapLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class MapLiteralImpl extends TypedLiteralImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftBracket : any;

    _entries : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightBracket : any;

    constructor(constKeyword : any,typeArguments : any,leftBracket : any,entries : core.DartList<any>,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapLiteralImpl(constKeyword : any,typeArguments : any,leftBracket : any,entries : core.DartList<any>,rightBracket : any) {
        super.TypedLiteralImpl(constKeyword,typeArguments);
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._entries = new NodeListImpl<any>(this,entries);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        if (this.constKeyword != null) {
            return this.constKeyword;
        }
        let typeArguments : any = this.typeArguments;
        if (typeArguments != null) {
            return typeArguments.beginToken;
        }
        return this.leftBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.leftBracket);
                _.addAll(this.entries);
                _.add(this.rightBracket);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get entries() : any {
        return this._entries;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitMapLiteral(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this._entries.accept(visitor);
    }
}

export namespace DeclaredSimpleIdentifier {
    export type Constructors = SimpleIdentifierImpl.Constructors | 'DeclaredSimpleIdentifier';
    export type Interface = Omit<DeclaredSimpleIdentifier, Constructors>;
}
@DartClass
export class DeclaredSimpleIdentifier extends SimpleIdentifierImpl {
    constructor(token : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeclaredSimpleIdentifier(token : any) {
        super.SimpleIdentifierImpl(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inDeclarationContext() : boolean {
        return true;
    }
}

export namespace ConstructorDeclarationImpl {
    export type Constructors = ClassMemberImpl.Constructors | 'ConstructorDeclarationImpl';
    export type Interface = Omit<ConstructorDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConstructorDeclarationImpl extends ClassMemberImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    externalKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    constKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    factoryKeyword : any;

    _returnType : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    period : any;

    _name : any;

    _parameters : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    separator : any;

    _initializers : any;

    _redirectedConstructor : any;

    _body : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    element : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,externalKeyword : any,constKeyword : any,factoryKeyword : any,returnType : IdentifierImpl,period : any,name : SimpleIdentifierImpl,parameters : FormalParameterListImpl,separator : any,initializers : core.DartList<any>,redirectedConstructor : ConstructorNameImpl,body : FunctionBodyImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorDeclarationImpl(comment : CommentImpl,metadata : core.DartList<any>,externalKeyword : any,constKeyword : any,factoryKeyword : any,returnType : IdentifierImpl,period : any,name : SimpleIdentifierImpl,parameters : FormalParameterListImpl,separator : any,initializers : core.DartList<any>,redirectedConstructor : ConstructorNameImpl,body : FunctionBodyImpl) {
        super.ClassMemberImpl(comment,metadata);
        this.externalKeyword = externalKeyword;
        this.constKeyword = constKeyword;
        this.factoryKeyword = factoryKeyword;
        this.period = period;
        this.separator = separator;
        this._returnType = this._becomeParentOf(returnType);
        this._name = this._becomeParentOf(name);
        this._parameters = this._becomeParentOf(parameters);
        this._initializers = new NodeListImpl<any>(this,initializers);
        this._redirectedConstructor = this._becomeParentOf(redirectedConstructor);
        this._body = this._becomeParentOf(body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get body() : any {
        return this._body;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set body(functionBody : any) {
        this._body = this._becomeParentOf(functionBody as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.externalKeyword);
                _.add(this.constKeyword);
                _.add(this.factoryKeyword);
                _.add(this._returnType);
                _.add(this.period);
                _.add(this._name);
                _.add(this._parameters);
                _.add(this.separator);
                _.addAll(this.initializers);
                _.add(this._redirectedConstructor);
                _.add(this._body);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        if (this._body != null) {
            return this._body.endToken;
        }else if (!this._initializers.isEmpty) {
            return this._initializers.endToken;
        }
        return this._parameters.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        let leftMost : any = Token.lexicallyFirst(new core.DartList.literal(this.externalKeyword,this.constKeyword,this.factoryKeyword));
        if (leftMost != null) {
            return leftMost;
        }
        return this._returnType.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get initializers() : any {
        return this._initializers;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : any {
        return this._name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(identifier : any) {
        this._name = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : any {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : any) {
        this._parameters = this._becomeParentOf(parameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get redirectedConstructor() : any {
        return this._redirectedConstructor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set redirectedConstructor(redirectedConstructor : any) {
        this._redirectedConstructor = this._becomeParentOf(redirectedConstructor as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(typeName : any) {
        this._returnType = this._becomeParentOf(typeName as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitConstructorDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_109_)=>(!!_109_)?_109_.accept(visitor):null)(this._returnType);
        ((_110_)=>(!!_110_)?_110_.accept(visitor):null)(this._name);
        ((_111_)=>(!!_111_)?_111_.accept(visitor):null)(this._parameters);
        this._initializers.accept(visitor);
        ((_112_)=>(!!_112_)?_112_.accept(visitor):null)(this._redirectedConstructor);
        ((_113_)=>(!!_113_)?_113_.accept(visitor):null)(this._body);
    }
}

export namespace EnumDeclarationImpl {
    export type Constructors = NamedCompilationUnitMemberImpl.Constructors | 'EnumDeclarationImpl';
    export type Interface = Omit<EnumDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class EnumDeclarationImpl extends NamedCompilationUnitMemberImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enumKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftBracket : any;

    _constants : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightBracket : any;

    constructor(comment : any,metadata : core.DartList<any>,enumKeyword : any,name : any,leftBracket : any,constants : core.DartList<any>,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumDeclarationImpl(comment : any,metadata : core.DartList<any>,enumKeyword : any,name : any,leftBracket : any,constants : core.DartList<any>,rightBracket : any) {
        super.NamedCompilationUnitMemberImpl(comment,metadata,name);
        this.enumKeyword = enumKeyword;
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._constants = new NodeListImpl<any>(this,constants);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.enumKeyword);
                _.add(this._name);
                _.add(this.leftBracket);
                _.addAll(this._constants);
                _.add(this.rightBracket);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constants() : any {
        return this._constants;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this.enumKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitEnumDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_126_)=>(!!_126_)?_126_.accept(visitor):null)(this._name);
        this._constants.accept(visitor);
    }
}

export namespace ExportDirectiveImpl {
    export type Constructors = NamespaceDirectiveImpl.Constructors | 'ExportDirectiveImpl';
    export type Interface = Omit<ExportDirectiveImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ExportDirectiveImpl extends NamespaceDirectiveImpl implements any.Interface {
    constructor(comment : any,metadata : core.DartList<any>,keyword : any,libraryUri : any,configurations : core.DartList<any>,combinators : core.DartList<any>,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExportDirectiveImpl(comment : any,metadata : core.DartList<any>,keyword : any,libraryUri : any,configurations : core.DartList<any>,combinators : core.DartList<any>,semicolon : any) {
        super.NamespaceDirectiveImpl(comment,metadata,keyword,libraryUri,configurations,combinators,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._uri);
                _.addAll(this.combinators);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return super.element as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriElement() : any {
        if (this.element != null) {
            return this.element.exportedLibrary;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitExportDirective(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        this.combinators.accept(visitor);
    }
}

export namespace FunctionDeclarationImpl {
    export type Constructors = NamedCompilationUnitMemberImpl.Constructors | 'FunctionDeclarationImpl';
    export type Interface = Omit<FunctionDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionDeclarationImpl extends NamedCompilationUnitMemberImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    externalKeyword : any;

    _returnType : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propertyKeyword : any;

    _functionExpression : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,externalKeyword : any,returnType : TypeAnnotationImpl,propertyKeyword : any,name : SimpleIdentifierImpl,functionExpression : FunctionExpressionImpl) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionDeclarationImpl(comment : CommentImpl,metadata : core.DartList<any>,externalKeyword : any,returnType : TypeAnnotationImpl,propertyKeyword : any,name : SimpleIdentifierImpl,functionExpression : FunctionExpressionImpl) {
        super.NamedCompilationUnitMemberImpl(comment,metadata,name);
        this.externalKeyword = externalKeyword;
        this.propertyKeyword = propertyKeyword;
        this._returnType = this._becomeParentOf(returnType);
        this._functionExpression = this._becomeParentOf(functionExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.externalKeyword);
                _.add(this._returnType);
                _.add(this.propertyKeyword);
                _.add(this._name);
                _.add(this._functionExpression);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._functionExpression.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        if (this.externalKeyword != null) {
            return this.externalKeyword;
        }else if (this._returnType != null) {
            return this._returnType.beginToken;
        }else if (this.propertyKeyword != null) {
            return this.propertyKeyword;
        }else if (this._name != null) {
            return this._name.beginToken;
        }
        return this._functionExpression.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionExpression() : any {
        return this._functionExpression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set functionExpression(functionExpression : any) {
        this._functionExpression = this._becomeParentOf(functionExpression as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isGetter() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.propertyKeyword),Keyword.GET);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSetter() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(this.propertyKeyword),Keyword.SET);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(type : any) {
        this._returnType = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFunctionDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_143_)=>(!!_143_)?_143_.accept(visitor):null)(this._returnType);
        ((_144_)=>(!!_144_)?_144_.accept(visitor):null)(this._name);
        ((_145_)=>(!!_145_)?_145_.accept(visitor):null)(this._functionExpression);
    }
}

export namespace StringInterpolationImpl {
    export type Constructors = SingleStringLiteralImpl.Constructors | 'StringInterpolationImpl';
    export type Interface = Omit<StringInterpolationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class StringInterpolationImpl extends SingleStringLiteralImpl implements any.Interface {
    _elements : any;

    constructor(elements : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringInterpolationImpl(elements : core.DartList<any>) {
        this._elements = new NodeListImpl<any>(this,elements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this._elements.beginToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this._elements);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contentsEnd() : number {
        let element : any = this._elements.last;
        return element.contentsEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contentsOffset() : number {
        let element : any = this._elements.first;
        return element.contentsOffset;
    }
    get elements() : any {
        return this._elements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this._elements.endToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isMultiline() : boolean {
        return this._firstHelper.isMultiline;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRaw() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSingleQuoted() : boolean {
        return this._firstHelper.isSingleQuoted;
    }
    get _firstHelper() : StringLexemeHelper {
        let lastString : any = this._elements.first;
        let lexeme : string = lastString.contents.lexeme;
        return new StringLexemeHelper(lexeme,true,false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitStringInterpolation(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        this._elements.accept(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _appendStringValue(buffer : core.DartStringBuffer) : void {
        throw new core.ArgumentError();
    }
}

export namespace SimpleStringLiteralImpl {
    export type Constructors = SingleStringLiteralImpl.Constructors | 'SimpleStringLiteralImpl';
    export type Interface = Omit<SimpleStringLiteralImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SimpleStringLiteralImpl extends SingleStringLiteralImpl implements any.Interface {
    literal : any;

    _value : string;

    constructor(literal : any,value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleStringLiteralImpl(literal : any,value : string) {
        this.literal = literal;
        this._value = StringUtilities.intern(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.literal);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contentsEnd() : number {
        return this.offset + this._helper.end;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contentsOffset() : number {
        return this.offset + this._helper.start;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.literal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isMultiline() : boolean {
        return this._helper.isMultiline;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRaw() : boolean {
        return this._helper.isRaw;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSingleQuoted() : boolean {
        return this._helper.isSingleQuoted;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isSynthetic() : boolean {
        return this.literal.isSynthetic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : string {
        return this._value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set value(string : string) {
        this._value = StringUtilities.intern(this._value);
    }
    get _helper() : StringLexemeHelper {
        return new StringLexemeHelper(this.literal.lexeme,true,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitSimpleStringLiteral(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _appendStringValue(buffer : core.DartStringBuffer) : void {
        buffer.write(this.value);
    }
}

export namespace ClassDeclarationImpl {
    export type Constructors = NamedCompilationUnitMemberImpl.Constructors | 'ClassDeclarationImpl';
    export type Interface = Omit<ClassDeclarationImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ClassDeclarationImpl extends NamedCompilationUnitMemberImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    abstractKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    classKeyword : any;

    _typeParameters : any;

    _extendsClause : any;

    _withClause : any;

    _implementsClause : any;

    _nativeClause : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    leftBracket : any;

    _members : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rightBracket : any;

    constructor(comment : any,metadata : core.DartList<any>,abstractKeyword : any,classKeyword : any,name : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,extendsClause : ExtendsClauseImpl,withClause : WithClauseImpl,implementsClause : ImplementsClauseImpl,leftBracket : any,members : core.DartList<any>,rightBracket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassDeclarationImpl(comment : any,metadata : core.DartList<any>,abstractKeyword : any,classKeyword : any,name : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,extendsClause : ExtendsClauseImpl,withClause : WithClauseImpl,implementsClause : ImplementsClauseImpl,leftBracket : any,members : core.DartList<any>,rightBracket : any) {
        super.NamedCompilationUnitMemberImpl(comment,metadata,name);
        this.abstractKeyword = abstractKeyword;
        this.classKeyword = classKeyword;
        this.leftBracket = leftBracket;
        this.rightBracket = rightBracket;
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._extendsClause = this._becomeParentOf(extendsClause);
        this._withClause = this._becomeParentOf(withClause);
        this._implementsClause = this._becomeParentOf(implementsClause);
        this._members = new NodeListImpl<any>(this,members);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.abstractKeyword);
                _.add(this.classKeyword);
                _.add(this._name);
                _.add(this._typeParameters);
                _.add(this._extendsClause);
                _.add(this._withClause);
                _.add(this._implementsClause);
                _.add(this._nativeClause);
                _.add(this.leftBracket);
                _.addAll(this.members);
                _.add(this.rightBracket);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.rightBracket;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get extendsClause() : any {
        return this._extendsClause;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set extendsClause(extendsClause : any) {
        this._extendsClause = this._becomeParentOf(extendsClause as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        if (this.abstractKeyword != null) {
            return this.abstractKeyword;
        }
        return this.classKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implementsClause() : any {
        return this._implementsClause;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set implementsClause(implementsClause : any) {
        this._implementsClause = this._becomeParentOf(implementsClause as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        return this.abstractKeyword != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get members() : any {
        return this._members;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nativeClause() : any {
        return this._nativeClause;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set nativeClause(nativeClause : any) {
        this._nativeClause = this._becomeParentOf(nativeClause as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get withClause() : any {
        return this._withClause;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set withClause(withClause : any) {
        this._withClause = this._becomeParentOf(withClause as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitClassDeclaration(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getConstructor(name : string) : any {
        let length : number = this._members.length;
        for(let i : number = 0; i < length; i++){
            let classMember : any = op(Op.INDEX,this._members,i);
            if (is(classMember, any)) {
                let constructor : any = classMember;
                let constructorName : any = constructor.name;
                if (name == null && op(Op.EQUALS,constructorName,null)) {
                    return constructor;
                }
                if (constructorName != null && op(Op.EQUALS,constructorName.name,name)) {
                    return constructor;
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getField(name : string) : any {
        let memberLength : number = this._members.length;
        for(let i : number = 0; i < memberLength; i++){
            let classMember : any = op(Op.INDEX,this._members,i);
            if (is(classMember, any)) {
                let fieldDeclaration : any = classMember;
                let fields : any = fieldDeclaration.fields.variables;
                let fieldLength : number = fields.length;
                for(let i : number = 0; i < fieldLength; i++){
                    let field : any = op(Op.INDEX,fields,i);
                    let fieldName : any = field.name;
                    if (fieldName != null && name == fieldName.name) {
                        return field;
                    }
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMethod(name : string) : any {
        let length : number = this._members.length;
        for(let i : number = 0; i < length; i++){
            let classMember : any = op(Op.INDEX,this._members,i);
            if (is(classMember, any)) {
                let method : any = classMember;
                let methodName : any = method.name;
                if (methodName != null && name == methodName.name) {
                    return method;
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_90_)=>(!!_90_)?_90_.accept(visitor):null)(this._name);
        ((_91_)=>(!!_91_)?_91_.accept(visitor):null)(this._typeParameters);
        ((_92_)=>(!!_92_)?_92_.accept(visitor):null)(this._extendsClause);
        ((_93_)=>(!!_93_)?_93_.accept(visitor):null)(this._withClause);
        ((_94_)=>(!!_94_)?_94_.accept(visitor):null)(this._implementsClause);
        ((_95_)=>(!!_95_)?_95_.accept(visitor):null)(this._nativeClause);
        this.members.accept(visitor);
    }
}

export namespace ImportDirectiveImpl {
    export type Constructors = NamespaceDirectiveImpl.Constructors | 'ImportDirectiveImpl';
    export type Interface = Omit<ImportDirectiveImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ImportDirectiveImpl extends NamespaceDirectiveImpl implements any.Interface {
    deferredKeyword : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asKeyword : any;

    _prefix : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,libraryUri : StringLiteralImpl,configurations : core.DartList<any>,deferredKeyword : any,asKeyword : any,prefix : SimpleIdentifierImpl,combinators : core.DartList<any>,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImportDirectiveImpl(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,libraryUri : StringLiteralImpl,configurations : core.DartList<any>,deferredKeyword : any,asKeyword : any,prefix : SimpleIdentifierImpl,combinators : core.DartList<any>,semicolon : any) {
        super.NamespaceDirectiveImpl(comment,metadata,keyword,libraryUri,configurations,combinators,semicolon);
        this.deferredKeyword = deferredKeyword;
        this.asKeyword = asKeyword;
        this._prefix = this._becomeParentOf(prefix);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this._uri);
                _.add(this.deferredKeyword);
                _.add(this.asKeyword);
                _.add(this._prefix);
                _.addAll(this.combinators);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return super.element as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prefix() : any {
        return this._prefix;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set prefix(identifier : any) {
        this._prefix = this._becomeParentOf(identifier as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriElement() : any {
        let element : any = this.element;
        if (op(Op.EQUALS,element,null)) {
            return null;
        }
        return element.importedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitImportDirective(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_170_)=>(!!_170_)?_170_.accept(visitor):null)(this._prefix);
        this.combinators.accept(visitor);
    }
}

export namespace TypeAliasImpl {
    export type Constructors = NamedCompilationUnitMemberImpl.Constructors | 'TypeAliasImpl';
    export type Interface = Omit<TypeAliasImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TypeAliasImpl extends NamedCompilationUnitMemberImpl implements any.Interface {
    typedefKeyword : any;

    semicolon : any;

    constructor(comment : any,metadata : core.DartList<any>,typedefKeyword : any,name : any,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeAliasImpl(comment : any,metadata : core.DartList<any>,typedefKeyword : any,name : any,semicolon : any) {
        super.NamedCompilationUnitMemberImpl(comment,metadata,name);
        this.typedefKeyword = typedefKeyword;
        this.semicolon = semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return this.semicolon;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        return this.typedefKeyword;
    }
}

export namespace FunctionTypeAliasImpl {
    export type Constructors = TypeAliasImpl.Constructors | 'FunctionTypeAliasImpl';
    export type Interface = Omit<FunctionTypeAliasImpl, Constructors>;
}
@DartClass
@Implements(any)
export class FunctionTypeAliasImpl extends TypeAliasImpl implements any.Interface {
    _returnType : any;

    _typeParameters : any;

    _parameters : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,returnType : TypeAnnotationImpl,name : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeAliasImpl(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,returnType : TypeAnnotationImpl,name : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,parameters : FormalParameterListImpl,semicolon : any) {
        super.TypeAliasImpl(comment,metadata,keyword,name,semicolon);
        this._returnType = this._becomeParentOf(returnType);
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._parameters = this._becomeParentOf(parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.typedefKeyword);
                _.add(this._returnType);
                _.add(this._name);
                _.add(this._typeParameters);
                _.add(this._parameters);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : any {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : any) {
        this._parameters = this._becomeParentOf(parameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get returnType() : any {
        return this._returnType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set returnType(type : any) {
        this._returnType = this._becomeParentOf(type as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitFunctionTypeAlias(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_153_)=>(!!_153_)?_153_.accept(visitor):null)(this._returnType);
        ((_154_)=>(!!_154_)?_154_.accept(visitor):null)(this._name);
        ((_155_)=>(!!_155_)?_155_.accept(visitor):null)(this._typeParameters);
        ((_156_)=>(!!_156_)?_156_.accept(visitor):null)(this._parameters);
    }
}

export namespace ClassTypeAliasImpl {
    export type Constructors = TypeAliasImpl.Constructors | 'ClassTypeAliasImpl';
    export type Interface = Omit<ClassTypeAliasImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ClassTypeAliasImpl extends TypeAliasImpl implements any.Interface {
    _typeParameters : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equals : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    abstractKeyword : any;

    _superclass : any;

    _withClause : any;

    _implementsClause : any;

    constructor(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,name : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,equals : any,abstractKeyword : any,superclass : TypeNameImpl,withClause : WithClauseImpl,implementsClause : ImplementsClauseImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassTypeAliasImpl(comment : CommentImpl,metadata : core.DartList<any>,keyword : any,name : SimpleIdentifierImpl,typeParameters : TypeParameterListImpl,equals : any,abstractKeyword : any,superclass : TypeNameImpl,withClause : WithClauseImpl,implementsClause : ImplementsClauseImpl,semicolon : any) {
        super.TypeAliasImpl(comment,metadata,keyword,name,semicolon);
        this.equals = equals;
        this.abstractKeyword = abstractKeyword;
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._superclass = this._becomeParentOf(superclass);
        this._withClause = this._becomeParentOf(withClause);
        this._implementsClause = this._becomeParentOf(implementsClause);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.add(this.typedefKeyword);
                _.add(this._name);
                _.add(this._typeParameters);
                _.add(this.equals);
                _.add(this.abstractKeyword);
                _.add(this._superclass);
                _.add(this._withClause);
                _.add(this._implementsClause);
                _.add(this.semicolon);
                return _;
            }
        })(super._childEntities);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return ((t)=>(!!t)?t.staticElement:null)(this._name) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstTokenAfterCommentAndMetadata() : any {
        if (this.abstractKeyword != null) {
            return this.abstractKeyword;
        }
        return this.typedefKeyword;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implementsClause() : any {
        return this._implementsClause;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set implementsClause(implementsClause : any) {
        this._implementsClause = this._becomeParentOf(implementsClause as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isAbstract() : boolean {
        return this.abstractKeyword != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get superclass() : any {
        return this._superclass;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set superclass(superclass : any) {
        this._superclass = this._becomeParentOf(superclass as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get withClause() : any {
        return this._withClause;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set withClause(withClause : any) {
        this._withClause = this._becomeParentOf(withClause as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitClassTypeAlias(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_96_)=>(!!_96_)?_96_.accept(visitor):null)(this._name);
        ((_97_)=>(!!_97_)?_97_.accept(visitor):null)(this._typeParameters);
        ((_98_)=>(!!_98_)?_98_.accept(visitor):null)(this._superclass);
        ((_99_)=>(!!_99_)?_99_.accept(visitor):null)(this._withClause);
        ((_100_)=>(!!_100_)?_100_.accept(visitor):null)(this._implementsClause);
    }
}

export namespace GenericTypeAliasImpl {
    export type Constructors = TypeAliasImpl.Constructors | 'GenericTypeAliasImpl';
    export type Interface = Omit<GenericTypeAliasImpl, Constructors>;
}
@DartClass
@Implements(any)
export class GenericTypeAliasImpl extends TypeAliasImpl implements any.Interface {
    _typeParameters : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equals : any;

    _functionType : any;

    constructor(comment : any,metadata : core.DartList<any>,typedefToken : any,name : any,typeParameters : TypeParameterListImpl,equals : any,functionType : GenericFunctionTypeImpl,semicolon : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericTypeAliasImpl(comment : any,metadata : core.DartList<any>,typedefToken : any,name : any,typeParameters : TypeParameterListImpl,equals : any,functionType : GenericFunctionTypeImpl,semicolon : any) {
        super.TypeAliasImpl(comment,metadata,typedefToken,name,semicolon);
        this.equals = equals;
        this._typeParameters = this._becomeParentOf(typeParameters);
        this._functionType = this._becomeParentOf(functionType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        return ((_) : ChildEntities =>  {
            {
                _.addAll(this.metadata);
                _.add(this.typedefKeyword);
                _.add(this.name);
                _.add(this._typeParameters);
                _.add(this.equals);
                _.add(this._functionType);
                return _;
            }
        })(new ChildEntities());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return this.name.staticElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionType() : any {
        return this._functionType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set functionType(functionType : any) {
        this._functionType = this._becomeParentOf(functionType as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeParameters() : any {
        return this._typeParameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeParameters(typeParameters : any) {
        this._typeParameters = this._becomeParentOf(typeParameters as AstNodeImpl);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : any {
        return visitor.visitGenericTypeAlias(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
        super.visitChildren(visitor);
        ((_164_)=>(!!_164_)?_164_.accept(visitor):null)(this.name);
        ((_165_)=>(!!_165_)?_165_.accept(visitor):null)(this._typeParameters);
        ((_166_)=>(!!_166_)?_166_.accept(visitor):null)(this._functionType);
    }
}

export class properties {
}
