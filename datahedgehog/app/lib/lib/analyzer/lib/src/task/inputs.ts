/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/inputs.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ConstantTaskInputBuilder {
    export type Constructors = 'ConstantTaskInputBuilder';
    export type Interface<V> = Omit<ConstantTaskInputBuilder<V>, Constructors>;
}
@DartClass
@Implements(any)
export class ConstantTaskInputBuilder<V> implements any.Interface {
    input : ConstantTaskInput<V>;

    constructor(input : ConstantTaskInput<V>) {
    }
    @defaultConstructor
    ConstantTaskInputBuilder(input : ConstantTaskInput<V>) {
        this.input = input;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentResult() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentTarget() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set currentValue(value : core.DartObject) {
        throw new core.StateError('Only supported after moveNext() returns true');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flushOnAccess() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inputValue() : V {
        return this.input.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    currentValueNotAvailable() : void {
        throw new core.StateError('Only supported after moveNext() returns true');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        return false;
    }
}

export namespace ListTaskInputMixin {
    export type Constructors = 'ListTaskInputMixin';
    export type Interface<E> = Omit<ListTaskInputMixin<E>, Constructors>;
}
@DartClass
@Implements(any)
export class ListTaskInputMixin<E> implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toFlattenListOf(subListResult : any) : any {
        return new ListToFlattenListTaskInput<E,any>(this,(element : E) =>  {
            return subListResult.of(element as any) as any;
        });
    }
    toList(mapper : any) : any {
        return new ListToListTaskInput<E,any>(this,mapper);
    }
    toListOf(valueResult : any) : any {
        return (this as any).toList(valueResult.of);
    }
    toMap(mapper : any) : any {
        return new ListToMapTaskInput<E,any>(this,mapper);
    }
    toMapOf(valueResult : any) : any {
        return (this as ListTaskInputImpl<any>).toMap(valueResult.of);
    }
    constructor() {
    }
    @defaultConstructor
    ListTaskInputMixin() {
    }
}

export namespace MapTaskInputMixin {
    export type Constructors = 'MapTaskInputMixin';
    export type Interface<K,V> = Omit<MapTaskInputMixin<K,V>, Constructors>;
}
@DartClass
@Implements(any)
export class MapTaskInputMixin<K,V> implements any.Interface {
    toFlattenList(mapper : any) : any {
        return new MapToFlattenListTaskInput<K,any,any>(this as any,mapper);
    }
    constructor() {
    }
    @defaultConstructor
    MapTaskInputMixin() {
    }
}

export namespace MapToFlattenListTaskInputBuilder {
    export type Constructors = 'MapToFlattenListTaskInputBuilder';
    export type Interface<K,V,E> = Omit<MapToFlattenListTaskInputBuilder<K,V,E>, Constructors>;
}
@DartClass
@Implements(any)
export class MapToFlattenListTaskInputBuilder<K,V,E> implements any.Interface {
    base : any;

    mapper : any;

    currentBuilder : any;

    baseMap : core.DartMap<K,core.DartList<V>>;

    keyIterator : core.DartIterator<K>;

    valueIterator : core.DartIterator<V>;

    inputValue : core.DartList<E>;

    constructor(base : any,mapper : any) {
    }
    @defaultConstructor
    MapToFlattenListTaskInputBuilder(base : any,mapper : any) {
        this.inputValue = new core.DartList.literal<E>();
        this.base = base;
        this.mapper = mapper;
        this.currentBuilder = this.base.createBuilder();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentResult() : any {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            return null;
        }
        return this.currentBuilder.currentResult;
    }
    get currentTarget() : any {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            return null;
        }
        return this.currentBuilder.currentTarget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set currentValue(value : core.DartObject) {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this.currentBuilder.currentValue = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flushOnAccess() : boolean {
        return this.currentBuilder.flushOnAccess;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    currentValueNotAvailable() : void {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this.currentBuilder.currentValueNotAvailable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (this.baseMap == null) {
            if (this.currentBuilder.moveNext()) {
                return true;
            }
            this.baseMap = this.currentBuilder.inputValue as any;
            if (this.baseMap == null) {
                this.baseMap = new core.DartMap.literal([
                ]);
            }
            this.keyIterator = this.baseMap.keys.iterator;
            this.currentBuilder = null;
        }
        if (this.currentBuilder != null) {
            if (this.currentBuilder.moveNext()) {
                return true;
            }
            let resultValue : E = this.currentBuilder.inputValue as any;
            if (resultValue != null) {
                this.inputValue.add(resultValue);
            }
            this.currentBuilder = null;
        }
        if (this.valueIterator != null && this.valueIterator.moveNext()) {
            let key : K = this.keyIterator.current;
            let value : V = this.valueIterator.current;
            this.currentBuilder = this.mapper(key,value).createBuilder();
            return this.moveNext();
        }
        if (this.keyIterator.moveNext()) {
            let key : K = this.keyIterator.current;
            this.valueIterator = this.baseMap.get(key).iterator;
            return this.moveNext();
        }
        return false;
    }
}

export namespace ObjectToListTaskInputBuilder {
    export type Constructors = 'ObjectToListTaskInputBuilder';
    export type Interface<E> = Omit<ObjectToListTaskInputBuilder<E>, Constructors>;
}
@DartClass
@Implements(any)
export class ObjectToListTaskInputBuilder<E> implements any.Interface {
    input : ObjectToListTaskInput<E>;

    builder : any;

    _inputValue : core.DartList<E>;

    constructor(input : ObjectToListTaskInput<E>) {
    }
    @defaultConstructor
    ObjectToListTaskInputBuilder(input : ObjectToListTaskInput<E>) {
        this._inputValue = null;
        this.input = input;
        this.builder = this.input.baseInput.createBuilder();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentResult() : any {
        if (op(Op.EQUALS,this.builder,null)) {
            return null;
        }
        return this.builder.currentResult;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentTarget() : any {
        if (op(Op.EQUALS,this.builder,null)) {
            return null;
        }
        return this.builder.currentTarget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set currentValue(value : core.DartObject) {
        if (op(Op.EQUALS,this.builder,null)) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this.builder.currentValue = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flushOnAccess() : boolean {
        return this.builder.flushOnAccess;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inputValue() : core.DartList<E> {
        if (this.builder != null) {
            throw new core.StateError('Result value has not been created');
        }
        return this._inputValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    currentValueNotAvailable() : void {
        if (op(Op.EQUALS,this.builder,null)) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this.builder.currentValueNotAvailable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (op(Op.EQUALS,this.builder,null)) {
            return false;
        }else if (this.builder.moveNext()) {
            return true;
        }else {
            this._inputValue = this.input.mapper(this.builder.inputValue);
            this.builder = null;
            return false;
        }
    }
}

export namespace SimpleTaskInputBuilder {
    export type Constructors = 'SimpleTaskInputBuilder';
    export type Interface<V> = Omit<SimpleTaskInputBuilder<V>, Constructors>;
}
@DartClass
@Implements(any)
export class SimpleTaskInputBuilder<V> implements any.Interface {
    private static __$_BEFORE;
    static get _BEFORE() { 
        if (this.__$_BEFORE===undefined) {
            this.__$_BEFORE = -1;
        }
        return this.__$_BEFORE;
    }

    private static __$_AT;
    static get _AT() { 
        if (this.__$_AT===undefined) {
            this.__$_AT = 0;
        }
        return this.__$_AT;
    }

    private static __$_AFTER;
    static get _AFTER() { 
        if (this.__$_AFTER===undefined) {
            this.__$_AFTER = 1;
        }
        return this.__$_AFTER;
    }

    input : SimpleTaskInput<V>;

    _resultValue : V;

    _state : number;

    _resultSet : boolean;

    constructor(input : SimpleTaskInput<V>) {
    }
    @defaultConstructor
    SimpleTaskInputBuilder(input : SimpleTaskInput<V>) {
        this._resultValue = null;
        this._state = SimpleTaskInputBuilder._BEFORE;
        this._resultSet = false;
        this.input = input;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentResult() : any {
        return this._state == SimpleTaskInputBuilder._AT ? this.input.result : null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentTarget() : any {
        return this._state == SimpleTaskInputBuilder._AT ? this.input.target : null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set currentValue(value : core.DartObject) {
        if (this._state != SimpleTaskInputBuilder._AT) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this._resultValue = value as V;
        this._resultSet = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flushOnAccess() : boolean {
        return this.input.flushOnAccess;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inputValue() : V {
        if (this._state != SimpleTaskInputBuilder._AFTER) {
            throw new core.StateError('Result value has not been created');
        }
        return this._resultValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    currentValueNotAvailable() : void {
        if (this._state != SimpleTaskInputBuilder._AT) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this._resultValue = null;
        this._resultSet = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (this._state == SimpleTaskInputBuilder._BEFORE) {
            this._state = SimpleTaskInputBuilder._AT;
            return true;
        }else {
            if (!this._resultSet) {
                throw new core.StateError('The value of the current result must be set before moving to the next result.');
            }
            this._state = SimpleTaskInputBuilder._AFTER;
            return false;
        }
    }
}

export namespace TaskInputImpl {
    export type Constructors = 'TaskInputImpl';
    export type Interface<V> = Omit<TaskInputImpl<V>, Constructors>;
}
@DartClass
@Implements(any)
export class TaskInputImpl<V> implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mappedToList(mapper : <V>(value : V) => core.DartList<any>) : any {
        return new ObjectToListTaskInput<any>(this,(element : core.DartObject) =>  {
            return mapper(element as V);
        });
    }
    constructor() {
    }
    @defaultConstructor
    TaskInputImpl() {
    }
}

export namespace TopLevelTaskInputBuilder {
    export type Constructors = 'TopLevelTaskInputBuilder';
    export type Interface = Omit<TopLevelTaskInputBuilder, Constructors>;
}
@DartClass
@Implements(any)
export class TopLevelTaskInputBuilder implements any.Interface {
    inputDescriptors : core.DartMap<string,any>;

    inputNames : core.DartList<string>;

    nameIndex : number;

    currentBuilder : any;

    inputs : core.DartMap<string,core.DartObject>;

    constructor(inputDescriptors : core.DartMap<string,any>) {
    }
    @defaultConstructor
    TopLevelTaskInputBuilder(inputDescriptors : core.DartMap<string,any>) {
        this.nameIndex = -1;
        this.inputs = new core.DartHashMap<string,core.DartObject>();
        this.inputDescriptors = inputDescriptors;
        this.inputNames = this.inputDescriptors.keys.toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentResult() : any {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            return null;
        }
        return this.currentBuilder.currentResult;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentTarget() : any {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            return null;
        }
        return this.currentBuilder.currentTarget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set currentValue(value : core.DartObject) {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this.currentBuilder.currentValue = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flushOnAccess() : boolean {
        return this.currentBuilder.flushOnAccess;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inputValue() : core.DartMap<string,core.DartObject> {
        if (this.nameIndex < this.inputNames.length) {
            throw new core.StateError('Result value has not been created');
        }
        return this.inputs;
    }
    get _currentName() : string {
        return this.inputNames[this.nameIndex];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    currentValueNotAvailable() : void {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this.currentBuilder.currentValueNotAvailable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (this.nameIndex >= this.inputNames.length) {
            return false;
        }
        if (this.nameIndex < 0) {
            this.nameIndex = 0;
        }else {
            if (this.currentBuilder.moveNext()) {
                return true;
            }
            if (this.currentBuilder.inputValue != null) {
                this.inputs.set(this._currentName,this.currentBuilder.inputValue);
            }
            this.nameIndex++;
        }
        if (this.nameIndex >= this.inputNames.length) {
            return false;
        }
        this.currentBuilder = this.inputDescriptors.get(this._currentName).createBuilder();
        while (!this.currentBuilder.moveNext()){
            if (this.currentBuilder.inputValue != null) {
                this.inputs.set(this._currentName,this.currentBuilder.inputValue);
            }
            this.nameIndex++;
            if (this.nameIndex >= this.inputNames.length) {
                return false;
            }
            this.currentBuilder = this.inputDescriptors.get(this._currentName).createBuilder();
        }
        return true;
    }
}

export namespace _ListToCollectionTaskInputBuilder {
    export type Constructors = '_ListToCollectionTaskInputBuilder';
    export type Interface<B,E,C> = Omit<_ListToCollectionTaskInputBuilder<B,E,C>, Constructors>;
}
@DartClass
@Implements(any)
export class _ListToCollectionTaskInputBuilder<B,E,C> implements any.Interface {
    input : _ListToCollectionTaskInput<B,E,C>;

    currentBuilder : any;

    _baseList : core.DartList<B>;

    _baseListIndex : number;

    _baseListElement : B;

    constructor(input : _ListToCollectionTaskInput<B,E,C>) {
    }
    @defaultConstructor
    _ListToCollectionTaskInputBuilder(input : _ListToCollectionTaskInput<B,E,C>) {
        this._baseList = null;
        this._baseListIndex = -1;
        this.input = input;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentResult() : any {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            return null;
        }
        return this.currentBuilder.currentResult;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentTarget() : any {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            return null;
        }
        return this.currentBuilder.currentTarget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set currentValue(value : core.DartObject) {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this.currentBuilder.currentValue = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flushOnAccess() : boolean {
        return this.currentBuilder.flushOnAccess;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inputValue() : C {
        if (this.currentBuilder != null || op(Op.EQUALS,this._resultValue,null)) {
            throw new core.StateError('Result value has not been created');
        }
        return this._resultValue;
    }
    @AbstractProperty
    get _resultValue() : C{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    currentValueNotAvailable() : void {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            throw new core.StateError('Cannot set the result value when there is no current result');
        }
        this.currentBuilder.currentValueNotAvailable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (op(Op.EQUALS,this.currentBuilder,null)) {
            if (op(Op.EQUALS,this._resultValue,null)) {
                this.currentBuilder = this.input.baseAccessor.createBuilder();
                return this.currentBuilder.moveNext();
            }else {
                return false;
            }
        }
        if (this.currentBuilder.moveNext()) {
            return true;
        }
        if (op(Op.EQUALS,this._resultValue,null)) {
            this._baseList = this.currentBuilder.inputValue as any;
            if (this._baseList == null) {
                this._baseList = new core.DartList.literal();
            }
            this._baseListIndex = 0;
            this._initResultValue();
        }else {
            if (this.currentBuilder.inputValue != null) {
                this._addResultElement(this._baseListElement,this.currentBuilder.inputValue as any);
            }
            this._baseListIndex++;
        }
        if (this._baseListIndex >= this._baseList.length) {
            this.currentBuilder = null;
            return false;
        }
        this._baseListElement = this._baseList[this._baseListIndex];
        this.currentBuilder = this.input.generateTaskInputs(this._baseListElement).createBuilder();
        return this.currentBuilder.moveNext();
    }
    @Abstract
    _addResultElement(baseElement : B,resultElement : E) : void{ throw 'abstract'}
    @Abstract
    _initResultValue() : void{ throw 'abstract'}
}

export namespace ConstantTaskInput {
    export type Constructors = TaskInputImpl.Constructors | 'ConstantTaskInput';
    export type Interface<V> = Omit<ConstantTaskInput<V>, Constructors>;
}
@DartClass
export class ConstantTaskInput<V> extends TaskInputImpl<V> {
    value : V;

    constructor(value : V) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantTaskInput(value : V) {
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new ConstantTaskInputBuilder<V>(this);
    }
}

export namespace ListToFlattenListTaskInputBuilder {
    export type Constructors = _ListToCollectionTaskInputBuilder.Constructors | 'ListToFlattenListTaskInputBuilder';
    export type Interface<B,E> = Omit<ListToFlattenListTaskInputBuilder<B,E>, Constructors>;
}
@DartClass
export class ListToFlattenListTaskInputBuilder<B,E> extends _ListToCollectionTaskInputBuilder<B,E,core.DartList<E>> {
    _resultValue : core.DartList<E>;

    constructor(input : ListToFlattenListTaskInput<B,E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToFlattenListTaskInputBuilder(input : ListToFlattenListTaskInput<B,E>) {
        super._ListToCollectionTaskInputBuilder(input);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _addResultElement(baseElement : B,resultElement : E) : void {
        this._resultValue.addAll(resultElement as core.DartIterable<E>);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _initResultValue() : void {
        this._resultValue = new core.DartList.literal<E>();
    }
}

export namespace ListToListTaskInputBuilder {
    export type Constructors = _ListToCollectionTaskInputBuilder.Constructors | 'ListToListTaskInputBuilder';
    export type Interface<B,E> = Omit<ListToListTaskInputBuilder<B,E>, Constructors>;
}
@DartClass
export class ListToListTaskInputBuilder<B,E> extends _ListToCollectionTaskInputBuilder<B,E,core.DartList<E>> {
    _resultValue : core.DartList<E>;

    constructor(input : ListToListTaskInput<B,E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToListTaskInputBuilder(input : ListToListTaskInput<B,E>) {
        super._ListToCollectionTaskInputBuilder(input);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _addResultElement(baseElement : B,resultElement : E) : void {
        this._resultValue.add(resultElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _initResultValue() : void {
        this._resultValue = new core.DartList.literal<E>();
    }
}

export namespace ListToMapTaskInputBuilder {
    export type Constructors = _ListToCollectionTaskInputBuilder.Constructors | 'ListToMapTaskInputBuilder';
    export type Interface<B,E> = Omit<ListToMapTaskInputBuilder<B,E>, Constructors>;
}
@DartClass
export class ListToMapTaskInputBuilder<B,E> extends _ListToCollectionTaskInputBuilder<B,E,core.DartMap<B,E>> {
    _resultValue : core.DartMap<B,E>;

    constructor(input : ListToMapTaskInput<B,E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToMapTaskInputBuilder(input : ListToMapTaskInput<B,E>) {
        super._ListToCollectionTaskInputBuilder(input);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _addResultElement(baseElement : B,resultElement : E) : void {
        this._resultValue.set(baseElement,resultElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _initResultValue() : void {
        this._resultValue = new core.DartHashMap<B,E>();
    }
}

export namespace MapToFlattenListTaskInput {
    export type Constructors = TaskInputImpl.Constructors | 'MapToFlattenListTaskInput';
    export type Interface<K,V,E> = Omit<MapToFlattenListTaskInput<K,V,E>, Constructors>;
}
@DartClass
export class MapToFlattenListTaskInput<K,V,E> extends TaskInputImpl<core.DartList<E>> {
    base : any;

    mapper : any;

    constructor(base : any,mapper : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapToFlattenListTaskInput(base : any,mapper : any) {
        this.base = base;
        this.mapper = mapper;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new MapToFlattenListTaskInputBuilder<K,V,E>(this.base,this.mapper);
    }
}

export namespace ObjectToListTaskInput {
    export type Constructors = TaskInputImpl.Constructors | 'ObjectToListTaskInput';
    export type Interface<E> = Omit<ObjectToListTaskInput<E>, Constructors>;
}
@DartClass
@Implements(any)
@With(ListTaskInputMixin)
export class ObjectToListTaskInput<E> extends TaskInputImpl<core.DartList<E>> implements any.Interface,ListTaskInputMixin.Interface<E> {
    @Abstract
    toList(mapper : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toMap(mapper : any) : any {
        throw 'from mixin';
    }
    baseInput : any;

    mapper : <P,R>(value : core.DartObject) => core.DartList<E>;

    constructor(baseInput : any,mapper : <P,R>(value : core.DartObject) => core.DartList<E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ObjectToListTaskInput(baseInput : any,mapper : <P,R>(value : core.DartObject) => core.DartList<E>) {
        this.baseInput = baseInput;
        this.mapper = mapper;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new ObjectToListTaskInputBuilder<E>(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toFlattenListOf(subListResult : any) : any {
        return new ListToFlattenListTaskInput<E,any>(this,(element : E) =>  {
            return subListResult.of(element as any) as any;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toListOf(valueResult : any) : any {
        return new ListToListTaskInput<E,any>(this,(element : E) =>  {
            return valueResult.of(element as any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMapOf(valueResult : any) : any {
        return new ListToMapTaskInput<any,any>(this as any,valueResult.of);
    }
}

export namespace SimpleTaskInput {
    export type Constructors = TaskInputImpl.Constructors | 'SimpleTaskInput' | '_unflushable';
    export type Interface<V> = Omit<SimpleTaskInput<V>, Constructors>;
}
@DartClass
export class SimpleTaskInput<V> extends TaskInputImpl<V> {
    target : any;

    result : any;

    flushOnAccess : boolean;

    constructor(target : any,result : any,_namedArguments? : {flushOnAccess? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleTaskInput(target : any,result : any,_namedArguments? : {flushOnAccess? : boolean}) {
        let {flushOnAccess} = Object.assign({
            "flushOnAccess" : false}, _namedArguments );
        this.target = target;
        this.result = result;
        this.flushOnAccess = flushOnAccess;
    }
    @namedConstructor
    _unflushable(target : any,result : any) {
        this.flushOnAccess = false;
        this.target = target;
        this.result = result;
    }
    static _unflushable : new<V>(target : any,result : any) => SimpleTaskInput<V>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new SimpleTaskInputBuilder<V>(this);
    }
}

export namespace _ListToCollectionTaskInput {
    export type Constructors = TaskInputImpl.Constructors | '_ListToCollectionTaskInput';
    export type Interface<B,E,C> = Omit<_ListToCollectionTaskInput<B,E,C>, Constructors>;
}
@DartClass
export class _ListToCollectionTaskInput<B,E,C> extends TaskInputImpl<C> {
    baseAccessor : any;

    generateTaskInputs : <B,E>(object : B) => any;

    constructor(baseAccessor : any,generateTaskInputs : <B,E>(object : B) => any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ListToCollectionTaskInput(baseAccessor : any,generateTaskInputs : <B,E>(object : B) => any) {
        this.baseAccessor = baseAccessor;
        this.generateTaskInputs = generateTaskInputs;
    }
}

export namespace ListTaskInputImpl {
    export type Constructors = SimpleTaskInput.Constructors | 'ListTaskInputImpl';
    export type Interface<E> = Omit<ListTaskInputImpl<E>, Constructors>;
}
@DartClass
@Implements(any)
@With(ListTaskInputMixin)
export class ListTaskInputImpl<E> extends SimpleTaskInput<core.DartList<E>> implements any.Interface,ListTaskInputMixin.Interface<E> {
    @Abstract
    toFlattenListOf(subListResult : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toList(mapper : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toListOf(valueResult : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toMap(mapper : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toMapOf(valueResult : any) : any {
        throw 'from mixin';
    }
    constructor(target : any,result : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListTaskInputImpl(target : any,result : any) {
        super._unflushable(target,result);
    }
}

export namespace ListToFlattenListTaskInput {
    export type Constructors = _ListToCollectionTaskInput.Constructors | 'ListToFlattenListTaskInput';
    export type Interface<B,E> = Omit<ListToFlattenListTaskInput<B,E>, Constructors>;
}
@DartClass
@Implements(any)
@With(ListTaskInputMixin)
export class ListToFlattenListTaskInput<B,E> extends _ListToCollectionTaskInput<B,E,core.DartList<E>> implements any.Interface,ListTaskInputMixin.Interface<E> {
    @Abstract
    toFlattenListOf(subListResult : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toList(mapper : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toListOf(valueResult : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toMap(mapper : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toMapOf(valueResult : any) : any {
        throw 'from mixin';
    }
    constructor(baseAccessor : any,generateTaskInputs : <B,E>(object : B) => any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToFlattenListTaskInput(baseAccessor : any,generateTaskInputs : <B,E>(object : B) => any) {
        super._ListToCollectionTaskInput(baseAccessor,generateTaskInputs);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new ListToFlattenListTaskInputBuilder<B,E>(this);
    }
}

export namespace ListToListTaskInput {
    export type Constructors = _ListToCollectionTaskInput.Constructors | 'ListToListTaskInput';
    export type Interface<B,E> = Omit<ListToListTaskInput<B,E>, Constructors>;
}
@DartClass
@With(ListTaskInputMixin)
export class ListToListTaskInput<B,E> extends _ListToCollectionTaskInput<B,E,core.DartList<E>> implements ListTaskInputMixin.Interface<E> {
    @Abstract
    toFlattenListOf(subListResult : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toList(mapper : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toListOf(valueResult : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toMap(mapper : any) : any {
        throw 'from mixin';
    }
    @Abstract
    toMapOf(valueResult : any) : any {
        throw 'from mixin';
    }
    constructor(baseAccessor : any,generateTaskInputs : <B,E>(object : B) => any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToListTaskInput(baseAccessor : any,generateTaskInputs : <B,E>(object : B) => any) {
        super._ListToCollectionTaskInput(baseAccessor,generateTaskInputs);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new ListToListTaskInputBuilder<B,E>(this);
    }
}

export namespace ListToMapTaskInput {
    export type Constructors = _ListToCollectionTaskInput.Constructors | 'ListToMapTaskInput';
    export type Interface<B,E> = Omit<ListToMapTaskInput<B,E>, Constructors>;
}
@DartClass
@With(MapTaskInputMixin)
export class ListToMapTaskInput<B,E> extends _ListToCollectionTaskInput<B,E,core.DartMap<B,E>> implements MapTaskInputMixin.Interface<B,E> {
    @Abstract
    toFlattenList(mapper : any) : any {
        throw 'from mixin';
    }
    constructor(baseAccessor : any,generateTaskInputs : <B,E>(object : B) => any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListToMapTaskInput(baseAccessor : any,generateTaskInputs : <B,E>(object : B) => any) {
        super._ListToCollectionTaskInput(baseAccessor,generateTaskInputs);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new ListToMapTaskInputBuilder<B,E>(this);
    }
}

export class properties {
}
