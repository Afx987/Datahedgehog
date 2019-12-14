/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/constant/value.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ConstructorInvocation {
    export type Constructors = 'ConstructorInvocation';
    export type Interface = Omit<ConstructorInvocation, Constructors>;
}
@DartClass
export class ConstructorInvocation {
    constructor : any;

    positionalArguments : core.DartList<DartObjectImpl>;

    namedArguments : core.DartMap<string,DartObjectImpl>;

    constructor(constructor : any,positionalArguments : core.DartList<DartObjectImpl>,namedArguments : core.DartMap<string,DartObjectImpl>) {
    }
    @defaultConstructor
    ConstructorInvocation(constructor : any,positionalArguments : core.DartList<DartObjectImpl>,namedArguments : core.DartMap<string,DartObjectImpl>) {
        this.constructor = constructor;
        this.positionalArguments = positionalArguments;
        this.namedArguments = namedArguments;
    }
}

export namespace DartObjectImpl {
    export type Constructors = 'DartObjectImpl';
    export type Interface = Omit<DartObjectImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DartObjectImpl implements any.Interface {
    private static __$EMPTY_LIST : core.DartList<DartObjectImpl>;
    static get EMPTY_LIST() : core.DartList<DartObjectImpl> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<DartObjectImpl>();
        }
        return this.__$EMPTY_LIST;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    type : any;

    _state : InstanceState;

    constructor(type : any,_state : InstanceState) {
    }
    @defaultConstructor
    DartObjectImpl(type : any,_state : InstanceState) {
        this.type = type;
        this._state = _state;
    }
    @namedFactory
    static $validWithUnknownValue(type : any) : DartObjectImpl {
        if (type.element.library.isDartCore) {
            let typeName : string = type.name;
            if (typeName == "bool") {
                return new DartObjectImpl(type,BoolState.UNKNOWN_VALUE);
            }else if (typeName == "double") {
                return new DartObjectImpl(type,DoubleState.UNKNOWN_VALUE);
            }else if (typeName == "int") {
                return new DartObjectImpl(type,IntState.UNKNOWN_VALUE);
            }else if (typeName == "String") {
                return new DartObjectImpl(type,StringState.UNKNOWN_VALUE);
            }
        }
        return new DartObjectImpl(type,GenericState.UNKNOWN_VALUE);
    }
    static validWithUnknownValue : new(type : any) => DartObjectImpl;

    get fields() : core.DartHashMap<string,DartObjectImpl> {
        return this._state.fields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return JenkinsSmiHash.hash2(this.type.hashCode,this._state.hashCode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasKnownValue() : boolean {
        return !this._state.isUnknown;
    }
    get isBool() : boolean {
        return this._state.isBool;
    }
    get isBoolNumStringOrNull() : boolean {
        return this._state.isBoolNumStringOrNull;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isNull() : boolean {
        return is(this._state, NullState);
    }
    get isUnknown() : boolean {
        return this._state.isUnknown;
    }
    get isUserDefinedObject() : boolean {
        return is(this._state, GenericState);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (is(object, DartObjectImpl)) {
            return op(Op.EQUALS,this.type,object.type) && op(Op.EQUALS,this._state,object._state);
        }
        return false;
    }
    add(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        let result : InstanceState = this._state.add(rightOperand._state);
        if (is(result, IntState)) {
            return new DartObjectImpl(typeProvider.intType,result);
        }else if (is(result, DoubleState)) {
            return new DartObjectImpl(typeProvider.doubleType,result);
        }else if (is(result, NumState)) {
            return new DartObjectImpl(typeProvider.numType,result);
        }else if (is(result, StringState)) {
            return new DartObjectImpl(typeProvider.stringType,result);
        }
        throw new core.StateError(`add returned a ${result.runtimeType}`);
    }
    bitAnd(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.intType,this._state.bitAnd(rightOperand._state));
    }
    bitNot(typeProvider : any) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.intType,this._state.bitNot());
    }
    bitOr(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.intType,this._state.bitOr(rightOperand._state));
    }
    bitXor(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.intType,this._state.bitXor(rightOperand._state));
    }
    concatenate(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.stringType,this._state.concatenate(rightOperand._state));
    }
    convertToBool(typeProvider : any) : DartObjectImpl {
        let boolType : any = typeProvider.boolType;
        if (core.identical(this.type,boolType)) {
            return this;
        }
        return new DartObjectImpl(boolType,this._state.convertToBool());
    }
    divide(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        let result : InstanceState = this._state.divide(rightOperand._state);
        if (is(result, IntState)) {
            return new DartObjectImpl(typeProvider.intType,result);
        }else if (is(result, DoubleState)) {
            return new DartObjectImpl(typeProvider.doubleType,result);
        }else if (is(result, NumState)) {
            return new DartObjectImpl(typeProvider.numType,result);
        }
        throw new core.StateError(`divide returned a ${result.runtimeType}`);
    }
    equalEqual(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        if (this.type != rightOperand.type) {
            let typeName : string = this.type.name;
            if (!(typeName == "bool" || typeName == "double" || typeName == "int" || typeName == "num" || typeName == "String" || typeName == "Null" || this.type.isDynamic)) {
                throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL_NUM_STRING);
            }
        }
        return new DartObjectImpl(typeProvider.boolType,this._state.equalEqual(rightOperand._state));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getField(name : string) : any {
        let state : InstanceState = this._state;
        if (is(state, GenericState)) {
            return op(Op.INDEX,state.fields,name);
        }
        return null;
    }
    getInvocation() : ConstructorInvocation {
        let state : InstanceState = this._state;
        if (is(state, GenericState)) {
            return state.invocation;
        }
        return null;
    }
    greaterThan(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.boolType,this._state.greaterThan(rightOperand._state));
    }
    greaterThanOrEqual(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.boolType,this._state.greaterThanOrEqual(rightOperand._state));
    }
    integerDivide(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.intType,this._state.integerDivide(rightOperand._state));
    }
    isIdentical(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.boolType,this._state.isIdentical(rightOperand._state));
    }
    lessThan(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.boolType,this._state.lessThan(rightOperand._state));
    }
    lessThanOrEqual(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.boolType,this._state.lessThanOrEqual(rightOperand._state));
    }
    logicalAnd(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.boolType,this._state.logicalAnd(rightOperand._state));
    }
    logicalNot(typeProvider : any) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.boolType,this._state.logicalNot());
    }
    logicalOr(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.boolType,this._state.logicalOr(rightOperand._state));
    }
    minus(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        let result : InstanceState = this._state.minus(rightOperand._state);
        if (is(result, IntState)) {
            return new DartObjectImpl(typeProvider.intType,result);
        }else if (is(result, DoubleState)) {
            return new DartObjectImpl(typeProvider.doubleType,result);
        }else if (is(result, NumState)) {
            return new DartObjectImpl(typeProvider.numType,result);
        }
        throw new core.StateError(`minus returned a ${result.runtimeType}`);
    }
    negated(typeProvider : any) : DartObjectImpl {
        let result : InstanceState = this._state.negated();
        if (is(result, IntState)) {
            return new DartObjectImpl(typeProvider.intType,result);
        }else if (is(result, DoubleState)) {
            return new DartObjectImpl(typeProvider.doubleType,result);
        }else if (is(result, NumState)) {
            return new DartObjectImpl(typeProvider.numType,result);
        }
        throw new core.StateError(`negated returned a ${result.runtimeType}`);
    }
    notEqual(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        if (this.type != rightOperand.type) {
            let typeName : string = this.type.name;
            if (typeName != "bool" && typeName != "double" && typeName != "int" && typeName != "num" && typeName != "String") {
                return new DartObjectImpl(typeProvider.boolType,BoolState.TRUE_STATE);
            }
        }
        return new DartObjectImpl(typeProvider.boolType,this._state.equalEqual(rightOperand._state).logicalNot());
    }
    performToString(typeProvider : any) : DartObjectImpl {
        let stringType : any = typeProvider.stringType;
        if (core.identical(this.type,stringType)) {
            return this;
        }
        return new DartObjectImpl(stringType,this._state.convertToString());
    }
    remainder(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        let result : InstanceState = this._state.remainder(rightOperand._state);
        if (is(result, IntState)) {
            return new DartObjectImpl(typeProvider.intType,result);
        }else if (is(result, DoubleState)) {
            return new DartObjectImpl(typeProvider.doubleType,result);
        }else if (is(result, NumState)) {
            return new DartObjectImpl(typeProvider.numType,result);
        }
        throw new core.StateError(`remainder returned a ${result.runtimeType}`);
    }
    shiftLeft(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.intType,this._state.shiftLeft(rightOperand._state));
    }
    shiftRight(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.intType,this._state.shiftRight(rightOperand._state));
    }
    stringLength(typeProvider : any) : DartObjectImpl {
        return new DartObjectImpl(typeProvider.intType,this._state.stringLength());
    }
    times(typeProvider : any,rightOperand : DartObjectImpl) : DartObjectImpl {
        let result : InstanceState = this._state.times(rightOperand._state);
        if (is(result, IntState)) {
            return new DartObjectImpl(typeProvider.intType,result);
        }else if (is(result, DoubleState)) {
            return new DartObjectImpl(typeProvider.doubleType,result);
        }else if (is(result, NumState)) {
            return new DartObjectImpl(typeProvider.numType,result);
        }
        throw new core.StateError(`times returned a ${result.runtimeType}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toBoolValue() : boolean {
        let state : InstanceState = this._state;
        if (is(state, BoolState)) {
            return state.value;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toDoubleValue() : double {
        let state : InstanceState = this._state;
        if (is(state, DoubleState)) {
            return state.value;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toIntValue() : number {
        let state : InstanceState = this._state;
        if (is(state, IntState)) {
            return state.value;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toListValue() : core.DartList<any> {
        let state : InstanceState = this._state;
        if (is(state, ListState)) {
            return state._elements;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toMapValue() : core.DartMap<any,any> {
        let state : InstanceState = this._state;
        if (is(state, MapState)) {
            return state._entries;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.type.displayName} (${this._state})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringValue() : string {
        let state : InstanceState = this._state;
        if (is(state, StringState)) {
            return state.value;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toSymbolValue() : string {
        let state : InstanceState = this._state;
        if (is(state, SymbolState)) {
            return state.value;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toTypeValue() : any {
        let state : InstanceState = this._state;
        if (is(state, TypeState)) {
            return state._type;
        }
        return null;
    }
}

export namespace EvaluationException {
    export type Constructors = 'EvaluationException';
    export type Interface = Omit<EvaluationException, Constructors>;
}
@DartClass
export class EvaluationException {
    errorCode : any;

    constructor(errorCode : any) {
    }
    @defaultConstructor
    EvaluationException(errorCode : any) {
        this.errorCode = errorCode;
    }
}

export namespace InstanceState {
    export type Constructors = 'InstanceState';
    export type Interface = Omit<InstanceState, Constructors>;
}
@DartClass
export class InstanceState {
    get fields() : core.DartHashMap<string,DartObjectImpl> {
        return null;
    }
    get isBool() : boolean {
        return false;
    }
    get isBoolNumStringOrNull() : boolean {
        return false;
    }
    get isUnknown() : boolean {
        return false;
    }
    @AbstractProperty
    get typeName() : string{ throw 'abstract'}
    add(rightOperand : InstanceState) : InstanceState {
        if (is(this, StringState) && is(rightOperand, StringState)) {
            return this.concatenate(rightOperand);
        }
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    assertBool(state : InstanceState) : void {
        if (!(is(state, BoolState) || is(state, DynamicState))) {
            throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL);
        }
    }
    assertBoolNumStringOrNull(state : InstanceState) : void {
        if (!(is(state, BoolState) || is(state, DoubleState) || is(state, IntState) || is(state, NumState) || is(state, StringState) || is(state, NullState) || is(state, DynamicState))) {
            throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL_NUM_STRING);
        }
    }
    assertIntOrNull(state : InstanceState) : void {
        if (!(is(state, IntState) || is(state, NumState) || is(state, NullState) || is(state, DynamicState))) {
            throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_TYPE_INT);
        }
    }
    assertNumOrNull(state : InstanceState) : void {
        if (!(is(state, DoubleState) || is(state, IntState) || is(state, NumState) || is(state, NullState) || is(state, DynamicState))) {
            throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_TYPE_NUM);
        }
    }
    assertString(state : InstanceState) : void {
        if (!(is(state, StringState) || is(state, DynamicState))) {
            throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL);
        }
    }
    bitAnd(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(this);
        this.assertIntOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    bitNot() : IntState {
        this.assertIntOrNull(this);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    bitOr(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(this);
        this.assertIntOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    bitXor(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(this);
        this.assertIntOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    concatenate(rightOperand : InstanceState) : StringState {
        this.assertString(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    convertToBool() : BoolState {
        return BoolState.FALSE_STATE;
    }
    @Abstract
    convertToString() : StringState{ throw 'abstract'}
    divide(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    @Abstract
    equalEqual(rightOperand : InstanceState) : BoolState{ throw 'abstract'}
    greaterThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    greaterThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    integerDivide(rightOperand : InstanceState) : IntState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    @Abstract
    isIdentical(rightOperand : InstanceState) : BoolState{ throw 'abstract'}
    lessThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    lessThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    logicalAnd(rightOperand : InstanceState) : BoolState {
        this.assertBool(this);
        this.assertBool(rightOperand);
        return BoolState.FALSE_STATE;
    }
    logicalNot() : BoolState {
        this.assertBool(this);
        return BoolState.TRUE_STATE;
    }
    logicalOr(rightOperand : InstanceState) : BoolState {
        this.assertBool(this);
        this.assertBool(rightOperand);
        return rightOperand.convertToBool();
    }
    minus(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    negated() : NumState {
        this.assertNumOrNull(this);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    remainder(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    shiftLeft(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(this);
        this.assertIntOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    shiftRight(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(this);
        this.assertIntOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    stringLength() : IntState {
        this.assertString(this);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    times(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(this);
        this.assertNumOrNull(rightOperand);
        throw new EvaluationException(CompileTimeErrorCode.INVALID_CONSTANT);
    }
    constructor() {
    }
    @defaultConstructor
    InstanceState() {
    }
}

export namespace BoolState {
    export type Constructors = InstanceState.Constructors | 'BoolState';
    export type Interface = Omit<BoolState, Constructors>;
}
@DartClass
export class BoolState extends InstanceState {
    private static __$FALSE_STATE : BoolState;
    static get FALSE_STATE() : BoolState { 
        if (this.__$FALSE_STATE===undefined) {
            this.__$FALSE_STATE = new BoolState(false);
        }
        return this.__$FALSE_STATE;
    }
    static set FALSE_STATE(__$value : BoolState)  { 
        this.__$FALSE_STATE = __$value;
    }

    private static __$TRUE_STATE : BoolState;
    static get TRUE_STATE() : BoolState { 
        if (this.__$TRUE_STATE===undefined) {
            this.__$TRUE_STATE = new BoolState(true);
        }
        return this.__$TRUE_STATE;
    }
    static set TRUE_STATE(__$value : BoolState)  { 
        this.__$TRUE_STATE = __$value;
    }

    private static __$UNKNOWN_VALUE : BoolState;
    static get UNKNOWN_VALUE() : BoolState { 
        if (this.__$UNKNOWN_VALUE===undefined) {
            this.__$UNKNOWN_VALUE = new BoolState(null);
        }
        return this.__$UNKNOWN_VALUE;
    }
    static set UNKNOWN_VALUE(__$value : BoolState)  { 
        this.__$UNKNOWN_VALUE = __$value;
    }

    value : boolean;

    constructor(value : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoolState(value : boolean) {
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.value == null ? 0 : (this.value ? 2 : 3);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBool() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBoolNumStringOrNull() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUnknown() : boolean {
        return this.value == null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "bool";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, BoolState) && core.identical(this.value,object.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToBool() : BoolState {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        if (this.value == null) {
            return StringState.UNKNOWN_VALUE;
        }
        return new StringState(this.value ? "true" : "false");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, BoolState)) {
            let rightValue : boolean = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(core.identical(this.value,rightValue));
        }else if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.FALSE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logicalAnd(rightOperand : InstanceState) : BoolState {
        this.assertBool(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        return this.value ? rightOperand.convertToBool() : BoolState.FALSE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logicalNot() : BoolState {
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        return this.value ? BoolState.FALSE_STATE : BoolState.TRUE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logicalOr(rightOperand : InstanceState) : BoolState {
        this.assertBool(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        return this.value ? BoolState.TRUE_STATE : rightOperand.convertToBool();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.value == null ? "-unknown-" : (this.value ? "true" : "false");
    }
    static from(value : boolean) : BoolState {
        return value ? BoolState.TRUE_STATE : BoolState.FALSE_STATE;
    }
}

export namespace DynamicState {
    export type Constructors = InstanceState.Constructors | 'DynamicState';
    export type Interface = Omit<DynamicState, Constructors>;
}
@DartClass
export class DynamicState extends InstanceState {
    private static __$DYNAMIC_STATE : DynamicState;
    static get DYNAMIC_STATE() : DynamicState { 
        if (this.__$DYNAMIC_STATE===undefined) {
            this.__$DYNAMIC_STATE = new DynamicState();
        }
        return this.__$DYNAMIC_STATE;
    }
    static set DYNAMIC_STATE(__$value : DynamicState)  { 
        this.__$DYNAMIC_STATE = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBool() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBoolNumStringOrNull() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "dynamic";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return this._unknownNum(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bitAnd(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        return IntState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bitNot() : IntState {
        return IntState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bitOr(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        return IntState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bitXor(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        return IntState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    concatenate(rightOperand : InstanceState) : StringState {
        this.assertString(rightOperand);
        return StringState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToBool() : BoolState {
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        return StringState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    divide(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return this._unknownNum(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    greaterThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    greaterThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    integerDivide(rightOperand : InstanceState) : IntState {
        this.assertNumOrNull(rightOperand);
        return IntState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lessThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lessThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logicalAnd(rightOperand : InstanceState) : BoolState {
        this.assertBool(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logicalNot() : BoolState {
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logicalOr(rightOperand : InstanceState) : BoolState {
        this.assertBool(rightOperand);
        return rightOperand.convertToBool();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minus(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return this._unknownNum(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    negated() : NumState {
        return NumState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    remainder(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return this._unknownNum(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shiftLeft(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        return IntState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shiftRight(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        return IntState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    times(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return this._unknownNum(rightOperand);
    }
    _unknownNum(rightOperand : InstanceState) : NumState {
        if (is(rightOperand, IntState)) {
            return IntState.UNKNOWN_VALUE;
        }else if (is(rightOperand, DoubleState)) {
            return DoubleState.UNKNOWN_VALUE;
        }
        return NumState.UNKNOWN_VALUE;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DynamicState() {
    }
}

export namespace FunctionState {
    export type Constructors = InstanceState.Constructors | 'FunctionState';
    export type Interface = Omit<FunctionState, Constructors>;
}
@DartClass
export class FunctionState extends InstanceState {
    _element : any;

    constructor(_element : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionState(_element : any) {
        this._element = _element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return op(Op.EQUALS,this._element,null) ? 0 : this._element.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "Function";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, FunctionState) && (op(Op.EQUALS,this._element,object._element));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        if (op(Op.EQUALS,this._element,null)) {
            return StringState.UNKNOWN_VALUE;
        }
        return new StringState(this._element.name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (op(Op.EQUALS,this._element,null)) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, FunctionState)) {
            let rightElement : any = rightOperand._element;
            if (op(Op.EQUALS,rightElement,null)) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(op(Op.EQUALS,this._element,rightElement));
        }else if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.FALSE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return op(Op.EQUALS,this._element,null) ? "-unknown-" : this._element.name;
    }
}

export namespace GenericState {
    export type Constructors = InstanceState.Constructors | 'GenericState';
    export type Interface = Omit<GenericState, Constructors>;
}
@DartClass
export class GenericState extends InstanceState {
    private static __$SUPERCLASS_FIELD : string;
    static get SUPERCLASS_FIELD() : string { 
        if (this.__$SUPERCLASS_FIELD===undefined) {
            this.__$SUPERCLASS_FIELD = "(super)";
        }
        return this.__$SUPERCLASS_FIELD;
    }
    static set SUPERCLASS_FIELD(__$value : string)  { 
        this.__$SUPERCLASS_FIELD = __$value;
    }

    private static __$UNKNOWN_VALUE : GenericState;
    static get UNKNOWN_VALUE() : GenericState { 
        if (this.__$UNKNOWN_VALUE===undefined) {
            this.__$UNKNOWN_VALUE = new GenericState(new core.DartHashMap<string,DartObjectImpl>());
        }
        return this.__$UNKNOWN_VALUE;
    }
    static set UNKNOWN_VALUE(__$value : GenericState)  { 
        this.__$UNKNOWN_VALUE = __$value;
    }

    _fieldMap : core.DartHashMap<string,DartObjectImpl>;

    invocation : ConstructorInvocation;

    constructor(_fieldMap : core.DartHashMap<string,DartObjectImpl>,_namedArguments? : {invocation? : ConstructorInvocation}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericState(_fieldMap : core.DartHashMap<string,DartObjectImpl>,_namedArguments? : {invocation? : ConstructorInvocation}) {
        let {invocation} = Object.assign({
        }, _namedArguments );
        this._fieldMap = _fieldMap;
        this.invocation = invocation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fields() : core.DartHashMap<string,DartObjectImpl> {
        return this._fieldMap;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hashCode : number = 0;
        for(let value of this._fieldMap.values) {
            hashCode += value.hashCode;
        }
        return hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUnknown() : boolean {
        return core.identical(this,GenericState.UNKNOWN_VALUE);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "user defined type";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (is(object, GenericState)) {
            let otherFields : core.DartHashSet<string> = new core.DartHashSet.from(object._fieldMap.keys.toSet());
            for(let fieldName of this._fieldMap.keys.toSet()) {
                if (op(Op.INDEX,this._fieldMap,fieldName) != op(Op.INDEX,object._fieldMap,fieldName)) {
                    return false;
                }
                otherFields.remove(fieldName);
            }
            for(let fieldName of otherFields) {
                if (op(Op.INDEX,object._fieldMap,fieldName) != op(Op.INDEX,this._fieldMap,fieldName)) {
                    return false;
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
    convertToString() : StringState {
        return StringState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.from(op(Op.EQUALS,this,rightOperand));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let fieldNames : core.DartList<string> = this._fieldMap.keys.toList();
        fieldNames.sort();
        let first : boolean = true;
        for(let fieldName of fieldNames) {
            if (first) {
                first = false;
            }else {
                buffer.write('; ');
            }
            buffer.write(fieldName);
            buffer.write(' = ');
            buffer.write(op(Op.INDEX,this._fieldMap,fieldName));
        }
        return buffer.toString();
    }
}

export namespace ListState {
    export type Constructors = InstanceState.Constructors | 'ListState';
    export type Interface = Omit<ListState, Constructors>;
}
@DartClass
export class ListState extends InstanceState {
    _elements : core.DartList<DartObjectImpl>;

    constructor(_elements : core.DartList<DartObjectImpl>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListState(_elements : core.DartList<DartObjectImpl>) {
        this._elements = _elements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let value : number = 0;
        let count : number = this._elements.length;
        for(let i : number = 0; i < count; i++){
            value = (value << 3) ^ this._elements[i].hashCode;
        }
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "List";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (is(object, ListState)) {
            let otherElements : core.DartList<DartObjectImpl> = object._elements;
            let count : number = this._elements.length;
            if (otherElements.length != count) {
                return false;
            }else if (count == 0) {
                return true;
            }
            for(let i : number = 0; i < count; i++){
                if (this._elements[i] != otherElements[i]) {
                    return false;
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
    convertToString() : StringState {
        return StringState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.from(op(Op.EQUALS,this,rightOperand));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write('[');
        let first : boolean = true;
        this._elements.forEach((element : DartObjectImpl) =>  {
            if (first) {
                first = false;
            }else {
                buffer.write(', ');
            }
            buffer.write(element);
        });
        buffer.write(']');
        return buffer.toString();
    }
}

export namespace MapState {
    export type Constructors = InstanceState.Constructors | 'MapState';
    export type Interface = Omit<MapState, Constructors>;
}
@DartClass
export class MapState extends InstanceState {
    _entries : core.DartHashMap<DartObjectImpl,DartObjectImpl>;

    constructor(_entries : core.DartHashMap<DartObjectImpl,DartObjectImpl>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapState(_entries : core.DartHashMap<DartObjectImpl,DartObjectImpl>) {
        this._entries = _entries;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let value : number = 0;
        for(let key of this._entries.keys.toSet()) {
            value = (value << 3) ^ key.hashCode;
        }
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "Map";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (is(object, MapState)) {
            let otherElements : core.DartHashMap<DartObjectImpl,DartObjectImpl> = object._entries;
            let count : number = this._entries.length;
            if (otherElements.length != count) {
                return false;
            }else if (count == 0) {
                return true;
            }
            for(let key of this._entries.keys) {
                let value : DartObjectImpl = op(Op.INDEX,this._entries,key);
                let otherValue : DartObjectImpl = op(Op.INDEX,otherElements,key);
                if (value != otherValue) {
                    return false;
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
    convertToString() : StringState {
        return StringState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.from(op(Op.EQUALS,this,rightOperand));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write('{');
        let first : boolean = true;
        this._entries.forEach((key : DartObjectImpl,value : DartObjectImpl) =>  {
            if (first) {
                first = false;
            }else {
                buffer.write(', ');
            }
            buffer.write(key);
            buffer.write(' = ');
            buffer.write(value);
        });
        buffer.write('}');
        return buffer.toString();
    }
}

export namespace NullState {
    export type Constructors = InstanceState.Constructors | 'NullState';
    export type Interface = Omit<NullState, Constructors>;
}
@DartClass
export class NullState extends InstanceState {
    private static __$NULL_STATE : NullState;
    static get NULL_STATE() : NullState { 
        if (this.__$NULL_STATE===undefined) {
            this.__$NULL_STATE = new NullState();
        }
        return this.__$NULL_STATE;
    }
    static set NULL_STATE(__$value : NullState)  { 
        this.__$NULL_STATE = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBoolNumStringOrNull() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "Null";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, NullState);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToBool() : BoolState {
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        return new StringState("null");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.from(is(rightOperand, NullState));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logicalNot() : BoolState {
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return "null";
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullState() {
    }
}

export namespace NumState {
    export type Constructors = InstanceState.Constructors | 'NumState';
    export type Interface = Omit<NumState, Constructors>;
}
@DartClass
export class NumState extends InstanceState {
    private static __$UNKNOWN_VALUE : NumState;
    static get UNKNOWN_VALUE() : NumState { 
        if (this.__$UNKNOWN_VALUE===undefined) {
            this.__$UNKNOWN_VALUE = new NumState();
        }
        return this.__$UNKNOWN_VALUE;
    }
    static set UNKNOWN_VALUE(__$value : NumState)  { 
        this.__$UNKNOWN_VALUE = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 7;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBoolNumStringOrNull() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUnknown() : boolean {
        return core.identical(this,NumState.UNKNOWN_VALUE);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "num";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, NumState);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return NumState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        return StringState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    divide(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return DoubleState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    greaterThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    greaterThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    integerDivide(rightOperand : InstanceState) : IntState {
        this.assertNumOrNull(rightOperand);
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }else if (rightValue == 0) {
                throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_IDBZE);
            }
        }else if (is(rightOperand, DynamicState)) {
            return IntState.UNKNOWN_VALUE;
        }
        return IntState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lessThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lessThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        return BoolState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minus(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return NumState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    negated() : NumState {
        return NumState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    remainder(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return NumState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    times(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        return NumState.UNKNOWN_VALUE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return "-unknown-";
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NumState() {
    }
}

export namespace StringState {
    export type Constructors = InstanceState.Constructors | 'StringState';
    export type Interface = Omit<StringState, Constructors>;
}
@DartClass
export class StringState extends InstanceState {
    private static __$UNKNOWN_VALUE : StringState;
    static get UNKNOWN_VALUE() : StringState { 
        if (this.__$UNKNOWN_VALUE===undefined) {
            this.__$UNKNOWN_VALUE = new StringState(null);
        }
        return this.__$UNKNOWN_VALUE;
    }
    static set UNKNOWN_VALUE(__$value : StringState)  { 
        this.__$UNKNOWN_VALUE = __$value;
    }

    value : string;

    constructor(value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringState(value : string) {
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.value == null ? 0 : new core.DartString(this.value).hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBoolNumStringOrNull() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUnknown() : boolean {
        return this.value == null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "String";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, StringState) && (this.value == object.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    concatenate(rightOperand : InstanceState) : StringState {
        if (this.value == null) {
            return StringState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, StringState)) {
            let rightValue : string = rightOperand.value;
            if (rightValue == null) {
                return StringState.UNKNOWN_VALUE;
            }
            return new StringState(`${this.value}${rightValue}`);
        }else if (is(rightOperand, DynamicState)) {
            return StringState.UNKNOWN_VALUE;
        }
        return super.concatenate(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, StringState)) {
            let rightValue : string = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value == rightValue);
        }else if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.FALSE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    stringLength() : IntState {
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        return new IntState(new core.DartString(this.value).length);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.value == null ? "-unknown-" : `'${this.value}'`;
    }
}

export namespace SymbolState {
    export type Constructors = InstanceState.Constructors | 'SymbolState';
    export type Interface = Omit<SymbolState, Constructors>;
}
@DartClass
export class SymbolState extends InstanceState {
    value : string;

    constructor(value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SymbolState(value : string) {
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.value == null ? 0 : new core.DartString(this.value).hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "Symbol";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, SymbolState) && (this.value == object.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        if (this.value == null) {
            return StringState.UNKNOWN_VALUE;
        }
        return new StringState(this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, SymbolState)) {
            let rightValue : string = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value == rightValue);
        }else if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.FALSE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.value == null ? "-unknown-" : `#${this.value}`;
    }
}

export namespace TypeState {
    export type Constructors = InstanceState.Constructors | 'TypeState';
    export type Interface = Omit<TypeState, Constructors>;
}
@DartClass
export class TypeState extends InstanceState {
    _type : any;

    constructor(_type : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeState(_type : any) {
        this._type = _type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return (((t)=>(!!t)?t.hashCode:null)(this._type) || 0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "Type";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, TypeState) && (op(Op.EQUALS,this._type,object._type));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        if (op(Op.EQUALS,this._type,null)) {
            return StringState.UNKNOWN_VALUE;
        }
        return new StringState(this._type.displayName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (op(Op.EQUALS,this._type,null)) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, TypeState)) {
            let rightType : any = rightOperand._type;
            if (op(Op.EQUALS,rightType,null)) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(op(Op.EQUALS,this._type,rightType));
        }else if (is(rightOperand, DynamicState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.FALSE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return (((_236_)=>(!!_236_)?_236_.toString():null)(this._type) || "-unknown-");
    }
}

export namespace DoubleState {
    export type Constructors = NumState.Constructors | 'DoubleState';
    export type Interface = Omit<DoubleState, Constructors>;
}
@DartClass
export class DoubleState extends NumState {
    private static __$UNKNOWN_VALUE : DoubleState;
    static get UNKNOWN_VALUE() : DoubleState { 
        if (this.__$UNKNOWN_VALUE===undefined) {
            this.__$UNKNOWN_VALUE = new DoubleState(null);
        }
        return this.__$UNKNOWN_VALUE;
    }
    static set UNKNOWN_VALUE(__$value : DoubleState)  { 
        this.__$UNKNOWN_VALUE = __$value;
    }

    value : double;

    constructor(value : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleState(value : double) {
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.value == null ? 0 : new core.DartDouble(this.value).hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBoolNumStringOrNull() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUnknown() : boolean {
        return this.value == null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "double";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, DoubleState) && (this.value == object.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return DoubleState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value + new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value + rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return DoubleState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        if (this.value == null) {
            return StringState.UNKNOWN_VALUE;
        }
        return new StringState(new core.DartDouble(this.value).toString());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    divide(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return DoubleState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value / new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value / rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return DoubleState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    greaterThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value > new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value > rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    greaterThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value >= new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value >= rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    integerDivide(rightOperand : InstanceState) : IntState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            let result : double = this.value / new core.DartInt(rightValue).toDouble();
            return new IntState(new core.DartDouble(result).toInt());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            let result : double = this.value / rightValue;
            return new IntState(new core.DartDouble(result).toInt());
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value == rightValue);
        }else if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value == new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.FALSE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lessThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value < new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value < rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lessThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value <= new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value <= rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minus(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return DoubleState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value - new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value - rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return DoubleState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    negated() : NumState {
        if (this.value == null) {
            return DoubleState.UNKNOWN_VALUE;
        }
        return new DoubleState(-(this.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    remainder(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return DoubleState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value % new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value % rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return DoubleState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    times(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return DoubleState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value * new core.DartInt(rightValue).toDouble());
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(this.value * rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return DoubleState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.value == null ? "-unknown-" : new core.DartDouble(this.value).toString();
    }
}

export namespace IntState {
    export type Constructors = NumState.Constructors | 'IntState';
    export type Interface = Omit<IntState, Constructors>;
}
@DartClass
export class IntState extends NumState {
    private static __$UNKNOWN_VALUE : IntState;
    static get UNKNOWN_VALUE() : IntState { 
        if (this.__$UNKNOWN_VALUE===undefined) {
            this.__$UNKNOWN_VALUE = new IntState(null);
        }
        return this.__$UNKNOWN_VALUE;
    }
    static set UNKNOWN_VALUE(__$value : IntState)  { 
        this.__$UNKNOWN_VALUE = __$value;
    }

    value : number;

    constructor(value : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntState(value : number) {
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.value == null ? 0 : new core.DartInt(this.value).hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isBoolNumStringOrNull() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUnknown() : boolean {
        return this.value == null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeName() : string {
        return "int";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, IntState) && (this.value == object.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            if (is(rightOperand, DoubleState)) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            return new IntState(this.value + rightValue);
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(new core.DartInt(this.value).toDouble() + rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bitAnd(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            return new IntState(this.value & rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bitNot() : IntState {
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        return new IntState(~this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bitOr(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            return new IntState(this.value | rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bitXor(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            return new IntState(this.value ^ rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convertToString() : StringState {
        if (this.value == null) {
            return StringState.UNKNOWN_VALUE;
        }
        return new StringState(new core.DartInt(this.value).toString());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    divide(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return DoubleState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }else {
                return new DoubleState(new core.DartInt(this.value).toDouble() / new core.DartInt(rightValue).toDouble());
            }
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(new core.DartInt(this.value).toDouble() / rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return DoubleState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    equalEqual(rightOperand : InstanceState) : BoolState {
        this.assertBoolNumStringOrNull(rightOperand);
        return this.isIdentical(rightOperand);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    greaterThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(new core.DartInt(this.value).compareTo(rightValue) > 0);
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(new core.DartInt(this.value).toDouble() > rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    greaterThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(new core.DartInt(this.value).compareTo(rightValue) >= 0);
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(new core.DartInt(this.value).toDouble() >= rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    integerDivide(rightOperand : InstanceState) : IntState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }else if (rightValue == 0) {
                throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_IDBZE);
            }
            return new IntState(op(Op.QUOTIENT,this.value,rightValue));
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            let result : double = new core.DartInt(this.value).toDouble() / rightValue;
            return new IntState(new core.DartDouble(result).toInt());
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIdentical(rightOperand : InstanceState) : BoolState {
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(this.value == rightValue);
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(rightValue == new core.DartInt(this.value).toDouble());
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        return BoolState.FALSE_STATE;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lessThan(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(new core.DartInt(this.value).compareTo(rightValue) < 0);
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(new core.DartInt(this.value).toDouble() < rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lessThanOrEqual(rightOperand : InstanceState) : BoolState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            return BoolState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(new core.DartInt(this.value).compareTo(rightValue) <= 0);
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return BoolState.UNKNOWN_VALUE;
            }
            return BoolState.from(new core.DartInt(this.value).toDouble() <= rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return BoolState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minus(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            if (is(rightOperand, DoubleState)) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            return new IntState(this.value - rightValue);
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(new core.DartInt(this.value).toDouble() - rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    negated() : NumState {
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        return new IntState(-this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    remainder(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            if (is(rightOperand, DoubleState)) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }else if (rightValue == 0) {
                return new DoubleState(new core.DartInt(this.value).toDouble() % new core.DartInt(rightValue).toDouble());
            }
            return new IntState(new core.DartInt(this.value).remainder(rightValue));
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(new core.DartInt(this.value).toDouble() % rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shiftLeft(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }else if (new core.DartInt(rightValue).bitLength > 31) {
                return IntState.UNKNOWN_VALUE;
            }
            return new IntState(this.value << rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shiftRight(rightOperand : InstanceState) : IntState {
        this.assertIntOrNull(rightOperand);
        if (this.value == null) {
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }else if (new core.DartInt(rightValue).bitLength > 31) {
                return IntState.UNKNOWN_VALUE;
            }
            return new IntState(this.value >> rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    times(rightOperand : InstanceState) : NumState {
        this.assertNumOrNull(rightOperand);
        if (this.value == null) {
            if (is(rightOperand, DoubleState)) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return IntState.UNKNOWN_VALUE;
        }
        if (is(rightOperand, IntState)) {
            let rightValue : number = rightOperand.value;
            if (rightValue == null) {
                return IntState.UNKNOWN_VALUE;
            }
            return new IntState(this.value * rightValue);
        }else if (is(rightOperand, DoubleState)) {
            let rightValue : double = rightOperand.value;
            if (rightValue == null) {
                return DoubleState.UNKNOWN_VALUE;
            }
            return new DoubleState(new core.DartInt(this.value).toDouble() * rightValue);
        }else if (is(rightOperand, DynamicState) || is(rightOperand, NumState)) {
            return IntState.UNKNOWN_VALUE;
        }
        throw new EvaluationException(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.value == null ? "-unknown-" : new core.DartInt(this.value).toString();
    }
}

export class properties {
}
