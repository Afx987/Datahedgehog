/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/resolver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace INIT_STATE {
    export type Constructors = 'INIT_STATE';
    export type Interface = Omit<INIT_STATE, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class INIT_STATE implements core.DartComparable.Interface<INIT_STATE> {
    private static __$NOT_INIT : INIT_STATE;
    static get NOT_INIT() : INIT_STATE { 
        if (this.__$NOT_INIT===undefined) {
            this.__$NOT_INIT = new INIT_STATE('NOT_INIT',0);
        }
        return this.__$NOT_INIT;
    }

    private static __$INIT_IN_DECLARATION : INIT_STATE;
    static get INIT_IN_DECLARATION() : INIT_STATE { 
        if (this.__$INIT_IN_DECLARATION===undefined) {
            this.__$INIT_IN_DECLARATION = new INIT_STATE('INIT_IN_DECLARATION',1);
        }
        return this.__$INIT_IN_DECLARATION;
    }

    private static __$INIT_IN_FIELD_FORMAL : INIT_STATE;
    static get INIT_IN_FIELD_FORMAL() : INIT_STATE { 
        if (this.__$INIT_IN_FIELD_FORMAL===undefined) {
            this.__$INIT_IN_FIELD_FORMAL = new INIT_STATE('INIT_IN_FIELD_FORMAL',2);
        }
        return this.__$INIT_IN_FIELD_FORMAL;
    }

    private static __$INIT_IN_INITIALIZERS : INIT_STATE;
    static get INIT_IN_INITIALIZERS() : INIT_STATE { 
        if (this.__$INIT_IN_INITIALIZERS===undefined) {
            this.__$INIT_IN_INITIALIZERS = new INIT_STATE('INIT_IN_INITIALIZERS',3);
        }
        return this.__$INIT_IN_INITIALIZERS;
    }

    private static __$values : core.DartList<INIT_STATE>;
    static get values() : core.DartList<INIT_STATE> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(INIT_STATE.NOT_INIT,INIT_STATE.INIT_IN_DECLARATION,INIT_STATE.INIT_IN_FIELD_FORMAL,INIT_STATE.INIT_IN_INITIALIZERS);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    INIT_STATE(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : INIT_STATE) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace BuildLibraryElementUtils {
    export type Constructors = 'BuildLibraryElementUtils';
    export type Interface = Omit<BuildLibraryElementUtils, Constructors>;
}
@DartClass
export class BuildLibraryElementUtils {
    static patchTopLevelAccessors(library : any) : void {
        let parts : core.DartList<any> = library.parts;
        if (parts.isEmpty) {
            return;
        }
        let getters : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        let setters : core.DartList<any> = new core.DartList.literal<any>();
        BuildLibraryElementUtils._collectAccessors(getters,setters,library.definingCompilationUnit);
        let partLength : number = parts.length;
        for(let i : number = 0; i < partLength; i++){
            let unit : any = parts[i];
            BuildLibraryElementUtils._collectAccessors(getters,setters,unit);
        }
        let setterLength : number = setters.length;
        for(let j : number = 0; j < setterLength; j++){
            let setter : any = setters[j];
            let getter : any = op(Op.INDEX,getters,setter.displayName);
            if (getter != null) {
                let variable : any = getter.variable;
                let setterVariable : any = setter.variable;
                let setterUnit : any = setterVariable.enclosingElement;
                setterUnit.replaceTopLevelVariable(setterVariable,variable);
                variable.setter = setter;
                (setter as any).variable = variable;
            }
        }
    }
    static _collectAccessors(getters : core.DartMap<string,any>,setters : core.DartList<any>,unit : any) : void {
        let accessors : core.DartList<any> = unit.accessors;
        let length : number = accessors.length;
        for(let i : number = 0; i < length; i++){
            let accessor : any = accessors[i];
            if (accessor.isGetter) {
                if (!accessor.isSynthetic && op(Op.EQUALS,accessor.correspondingSetter,null)) {
                    getters.set(accessor.displayName,accessor);
                }
            }else {
                if (!accessor.isSynthetic && op(Op.EQUALS,accessor.correspondingGetter,null)) {
                    setters.add(accessor);
                }
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    BuildLibraryElementUtils() {
    }
}

export namespace ConstantVerifier {
    export type Constructors = 'ConstantVerifier';
    export type Interface = Omit<ConstantVerifier, Constructors>;
}
@DartClass
export class ConstantVerifier extends any {
    _errorReporter : any;

    _typeProvider : TypeProvider;

    _typeSystem : any;

    declaredVariables : any;

    _boolType : any;

    _intType : any;

    _numType : any;

    _stringType : any;

    _currentLibrary : any;

    constructor(_errorReporter : any,currentLibrary : any,_typeProvider : TypeProvider,declaredVariables : any) {
    }
    @defaultConstructor
    ConstantVerifier(_errorReporter : any,currentLibrary : any,_typeProvider : TypeProvider,declaredVariables : any) {
        this._currentLibrary = currentLibrary;
        this._typeSystem = currentLibrary.context.typeSystem;
        this._errorReporter = _errorReporter;
        this._typeProvider = _typeProvider;
        this.declaredVariables = declaredVariables;
        this._boolType = this._typeProvider.boolType;
        this._intType = this._typeProvider.intType;
        this._numType = this._typeProvider.numType;
        this._stringType = this._typeProvider.stringType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        super.visitAnnotation(node);
        let element : any = node.element;
        if (is(element, any)) {
            if (!element.isConst) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.NON_CONSTANT_ANNOTATION_CONSTRUCTOR,node);
                return null;
            }
            let argumentList : any = node.arguments;
            if (op(Op.EQUALS,argumentList,null)) {
                this._errorReporter.reportErrorForNode(CompileTimeErrorCode.NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS,node);
                return null;
            }
            this._validateConstantArguments(argumentList);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        if (node.constKeyword != null) {
            this._validateConstructorInitializers(node);
            this._validateFieldInitializers(node.parent as any,node);
        }
        this._validateDefaultValues(node.parameters);
        return super.visitConstructorDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        super.visitFunctionExpression(node);
        this._validateDefaultValues(node.parameters);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        if (node.isConst) {
            let constructor : any = node.staticElement;
            if (constructor != null) {
                let evaluationEngine : any = new bare.createInstance(any,null,this._typeProvider,this.declaredVariables,{
                    typeSystem : this._typeSystem});
                let constantVisitor : any = new bare.createInstance(any,null,evaluationEngine,this._errorReporter);
                evaluationEngine.evaluateConstructorCall(node,node.argumentList.arguments,constructor,constantVisitor,this._errorReporter);
            }
        }
        this._validateInstanceCreationArguments(node);
        return super.visitInstanceCreationExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : core.DartObject {
        super.visitListLiteral(node);
        if (node.constKeyword != null) {
            let result : any;
            for(let element of node.elements) {
                result = this._validate(element,CompileTimeErrorCode.NON_CONSTANT_LIST_ELEMENT);
                if (result != null) {
                    this._reportErrorIfFromDeferredLibrary(element,CompileTimeErrorCode.NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY);
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : core.DartObject {
        super.visitMapLiteral(node);
        let isConst : boolean = node.constKeyword != null;
        let reportEqualKeys : boolean = true;
        let keys : core.DartHashSet<any> = new core.DartHashSet<any>();
        let invalidKeys : core.DartList<any> = new core.DartList<any>();
        for(let entry of node.entries) {
            let key : any = entry.key;
            if (isConst) {
                let keyResult : any = this._validate(key,CompileTimeErrorCode.NON_CONSTANT_MAP_KEY);
                let valueExpression : any = entry.value;
                let valueResult : any = this._validate(valueExpression,CompileTimeErrorCode.NON_CONSTANT_MAP_VALUE);
                if (valueResult != null) {
                    this._reportErrorIfFromDeferredLibrary(valueExpression,CompileTimeErrorCode.NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY);
                }
                if (keyResult != null) {
                    this._reportErrorIfFromDeferredLibrary(key,CompileTimeErrorCode.NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY);
                    if (keys.contains(keyResult)) {
                        invalidKeys.add(key);
                    }else {
                        keys.add(keyResult);
                    }
                    let type : any = keyResult.type;
                    if (this._implementsEqualsWhenNotAllowed(type)) {
                        this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS,key,new core.DartList.literal(type.displayName));
                    }
                }
            }else {
                let errorListener : any = AnalysisErrorListener.NULL_LISTENER;
                let subErrorReporter : any = new bare.createInstance(any,null,errorListener,this._errorReporter.source);
                let result : any = key.accept(new bare.createInstance(any,null,new bare.createInstance(any,null,this._typeProvider,this.declaredVariables,{
                    typeSystem : this._typeSystem}),subErrorReporter));
                if (result != null) {
                    if (keys.contains(result)) {
                        invalidKeys.add(key);
                    }else {
                        keys.add(result);
                    }
                }else {
                    reportEqualKeys = false;
                }
            }
        }
        if (reportEqualKeys) {
            let length : number = invalidKeys.length;
            for(let i : number = 0; i < length; i++){
                this._errorReporter.reportErrorForNode(StaticWarningCode.EQUAL_KEYS_IN_MAP,invalidKeys[i]);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        super.visitMethodDeclaration(node);
        this._validateDefaultValues(node.parameters);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : core.DartObject {
        let switchMembers : any = node.members;
        let foundError : boolean = false;
        let firstType : any = null;
        for(let switchMember of switchMembers) {
            if (is(switchMember, any)) {
                let expression : any = switchMember.expression;
                let caseResult : any = this._validate(expression,CompileTimeErrorCode.NON_CONSTANT_CASE_EXPRESSION);
                if (caseResult != null) {
                    this._reportErrorIfFromDeferredLibrary(expression,CompileTimeErrorCode.NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY);
                    let value : any = caseResult;
                    if (op(Op.EQUALS,firstType,null)) {
                        firstType = value.type;
                    }else {
                        let nType : any = value.type;
                        if (firstType != nType) {
                            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INCONSISTENT_CASE_EXPRESSION_TYPES,expression,new core.DartList.literal(expression.toSource(),firstType.displayName));
                            foundError = true;
                        }
                    }
                }
            }
        }
        if (!foundError) {
            this._checkForCaseExpressionTypeImplementsEquals(node,firstType);
        }
        return super.visitSwitchStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        super.visitVariableDeclaration(node);
        let initializer : any = node.initializer;
        if (initializer != null && (node.isConst || node.isFinal)) {
            let element : any = node.element as any;
            let result : any = element.evaluationResult;
            if (op(Op.EQUALS,result,null)) {
                /* TODO (AssertStatementImpl) : assert (!node.isConst); */;
                return null;
            }
            this._reportErrors(result.errors,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE);
            this._reportErrorIfFromDeferredLibrary(initializer,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY);
        }
        return null;
    }
    _checkForCaseExpressionTypeImplementsEquals(node : any,type : any) : boolean {
        if (!this._implementsEqualsWhenNotAllowed(type)) {
            return false;
        }
        this._errorReporter.reportErrorForToken(CompileTimeErrorCode.CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS,node.switchKeyword,new core.DartList.literal(type.displayName));
        return true;
    }
    _implementsEqualsWhenNotAllowed(type : any) : boolean {
        if (op(Op.EQUALS,type,null) || op(Op.EQUALS,type,this._intType) || op(Op.EQUALS,type,this._typeProvider.stringType)) {
            return false;
        }else if (op(Op.EQUALS,type,this._typeProvider.doubleType)) {
            return true;
        }
        let element : any = type.element;
        if (is(element, any)) {
            let method : any = element.lookUpConcreteMethod("==",this._currentLibrary);
            if (op(Op.EQUALS,method,null) || method.enclosingElement.type.isObject) {
                return false;
            }
            return true;
        }
        return false;
    }
    _reportErrorIfFromDeferredLibrary(expression : any,errorCode : any) : void {
        let referenceDetector : any = new bare.createInstance(any,null);
        expression.accept(referenceDetector);
        if (referenceDetector.result) {
            this._errorReporter.reportErrorForNode(errorCode,expression);
        }
    }
    _reportErrors(errors : core.DartList<any>,errorCode : any) : void {
        let length : number = errors.length;
        for(let i : number = 0; i < length; i++){
            let data : any = errors[i];
            let dataErrorCode : any = data.errorCode;
            if (core.identical(dataErrorCode,CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION) || core.identical(dataErrorCode,CompileTimeErrorCode.CONST_EVAL_THROWS_IDBZE) || core.identical(dataErrorCode,CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL_NUM_STRING) || core.identical(dataErrorCode,CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL) || core.identical(dataErrorCode,CompileTimeErrorCode.CONST_EVAL_TYPE_INT) || core.identical(dataErrorCode,CompileTimeErrorCode.CONST_EVAL_TYPE_NUM) || core.identical(dataErrorCode,CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT) || core.identical(dataErrorCode,CheckedModeCompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION) || core.identical(dataErrorCode,CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH) || core.identical(dataErrorCode,CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH) || core.identical(dataErrorCode,CheckedModeCompileTimeErrorCode.VARIABLE_TYPE_MISMATCH)) {
                this._errorReporter.reportError(data);
            }else if (errorCode != null) {
                this._errorReporter.reportError(new bare.createInstance(any,null,data.source,data.offset,data.length,errorCode));
            }
        }
    }
    _validate(expression : any,errorCode : any) : any {
        let errorListener : any = new bare.createInstance(any,null);
        let subErrorReporter : any = new bare.createInstance(any,null,errorListener,this._errorReporter.source);
        let result : any = expression.accept(new bare.createInstance(any,null,new bare.createInstance(any,null,this._typeProvider,this.declaredVariables,{
            typeSystem : this._typeSystem}),subErrorReporter));
        this._reportErrors(errorListener.errors,errorCode);
        return result;
    }
    _validateConstantArguments(argumentList : any) : void {
        for(let argument of argumentList.arguments) {
            let realArgument : any = is(argument, any) ? argument.expression : argument;
            this._validate(realArgument,CompileTimeErrorCode.CONST_WITH_NON_CONSTANT_ARGUMENT);
        }
    }
    _validateConstructorInitializers(constructor : any) : void {
        let parameterElements : core.DartList<any> = constructor.parameters.parameterElements;
        let initializers : any = constructor.initializers;
        for(let initializer of initializers) {
            if (is(initializer, any)) {
                this._validateInitializerExpression(parameterElements,initializer.condition);
                let message : any = initializer.message;
                if (message != null) {
                    this._validateInitializerExpression(parameterElements,message);
                }
            }else if (is(initializer, any)) {
                this._validateInitializerExpression(parameterElements,initializer.expression);
            }else if (is(initializer, any)) {
                this._validateInitializerInvocationArguments(parameterElements,initializer.argumentList);
            }else if (is(initializer, any)) {
                this._validateInitializerInvocationArguments(parameterElements,initializer.argumentList);
            }
        }
    }
    _validateDefaultValues(parameters : any) : void {
        if (op(Op.EQUALS,parameters,null)) {
            return;
        }
        for(let parameter of parameters.parameters) {
            if (is(parameter, any)) {
                let defaultValue : any = parameter.defaultValue;
                let result : any;
                if (op(Op.EQUALS,defaultValue,null)) {
                    result = new bare.createInstance(any,null,this._typeProvider.nullType,NullState.NULL_STATE);
                }else {
                    result = this._validate(defaultValue,CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE);
                    if (result != null) {
                        this._reportErrorIfFromDeferredLibrary(defaultValue,CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY);
                    }
                }
                let element : any = parameter.element as any;
                element.evaluationResult = new bare.createInstance(any,null,result);
            }
        }
    }
    _validateFieldInitializers(classDeclaration : any,errorSite : any) : void {
        let members : any = classDeclaration.members;
        for(let member of members) {
            if (is(member, any) && !member.isStatic) {
                for(let variableDeclaration of member.fields.variables) {
                    let initializer : any = variableDeclaration.initializer;
                    if (initializer != null) {
                        let errorListener : any = AnalysisErrorListener.NULL_LISTENER;
                        let subErrorReporter : any = new bare.createInstance(any,null,errorListener,this._errorReporter.source);
                        let result : any = initializer.accept(new bare.createInstance(any,null,new bare.createInstance(any,null,this._typeProvider,this.declaredVariables,{
                            typeSystem : this._typeSystem}),subErrorReporter));
                        if (op(Op.EQUALS,result,null)) {
                            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST,errorSite,new core.DartList.literal(variableDeclaration.name.name));
                        }
                    }
                }
            }
        }
    }
    _validateInitializerExpression(parameterElements : core.DartList<any>,expression : any) : void {
        let errorListener : any = new bare.createInstance(any,null);
        let subErrorReporter : any = new bare.createInstance(any,null,errorListener,this._errorReporter.source);
        let result : any = expression.accept(new _ConstantVerifier_validateInitializerExpression(this._typeProvider,subErrorReporter,this,parameterElements,this.declaredVariables,{
            typeSystem : this._typeSystem}));
        this._reportErrors(errorListener.errors,CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER);
        if (result != null) {
            this._reportErrorIfFromDeferredLibrary(expression,CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY);
        }
    }
    _validateInitializerInvocationArguments(parameterElements : core.DartList<any>,argumentList : any) : void {
        if (op(Op.EQUALS,argumentList,null)) {
            return;
        }
        for(let argument of argumentList.arguments) {
            this._validateInitializerExpression(parameterElements,argument);
        }
    }
    _validateInstanceCreationArguments(node : any) : void {
        if (!node.isConst) {
            return;
        }
        let argumentList : any = node.argumentList;
        if (op(Op.EQUALS,argumentList,null)) {
            return;
        }
        this._validateConstantArguments(argumentList);
    }
}

export namespace Dart2JSVerifier {
    export type Constructors = 'Dart2JSVerifier';
    export type Interface = Omit<Dart2JSVerifier, Constructors>;
}
@DartClass
export class Dart2JSVerifier extends any {
    private static __$_DOUBLE_TYPE_NAME : string;
    static get _DOUBLE_TYPE_NAME() : string { 
        if (this.__$_DOUBLE_TYPE_NAME===undefined) {
            this.__$_DOUBLE_TYPE_NAME = "double";
        }
        return this.__$_DOUBLE_TYPE_NAME;
    }
    static set _DOUBLE_TYPE_NAME(__$value : string)  { 
        this.__$_DOUBLE_TYPE_NAME = __$value;
    }

    _errorReporter : any;

    constructor(_errorReporter : any) {
    }
    @defaultConstructor
    Dart2JSVerifier(_errorReporter : any) {
        this._errorReporter = _errorReporter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : core.DartObject {
        this._checkForIsDoubleHints(node);
        return super.visitIsExpression(node);
    }
    _checkForIsDoubleHints(node : any) : boolean {
        let type : any = node.type.type;
        let element : any = ((t)=>(!!t)?t.element:null)(type);
        if (element != null) {
            let typeNameStr : string = element.name;
            let libraryElement : any = element.library;
            if (typeNameStr == Dart2JSVerifier._DOUBLE_TYPE_NAME && libraryElement != null && libraryElement.isDartCore) {
                if (op(Op.EQUALS,node.notOperator,null)) {
                    this._errorReporter.reportErrorForNode(HintCode.IS_DOUBLE,node);
                }else {
                    this._errorReporter.reportErrorForNode(HintCode.IS_NOT_DOUBLE,node);
                }
                return true;
            }
        }
        return false;
    }
}

export namespace DeadCodeVerifier {
    export type Constructors = 'DeadCodeVerifier';
    export type Interface = Omit<DeadCodeVerifier, Constructors>;
}
@DartClass
export class DeadCodeVerifier extends any {
    _errorReporter : any;

    _typeSystem : any;

    constructor(_errorReporter : any,_namedArguments? : {typeSystem? : any}) {
    }
    @defaultConstructor
    DeadCodeVerifier(_errorReporter : any,_namedArguments? : {typeSystem? : any}) {
        let {typeSystem} = Object.assign({
        }, _namedArguments );
        this._typeSystem = (typeSystem || new bare.createInstance(any,null,null));
        this._errorReporter = _errorReporter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        let operator : any = node.operator;
        let isAmpAmp : boolean = op(Op.EQUALS,operator.type,TokenType.AMPERSAND_AMPERSAND);
        let isBarBar : boolean = op(Op.EQUALS,operator.type,TokenType.BAR_BAR);
        if (isAmpAmp || isBarBar) {
            let lhsCondition : any = node.leftOperand;
            if (!this._isDebugConstant(lhsCondition)) {
                let lhsResult : any = this._getConstantBooleanValue(lhsCondition);
                if (lhsResult != null) {
                    let value : boolean = lhsResult.value.toBoolValue();
                    if (value == true && isBarBar) {
                        this._errorReporter.reportErrorForNode(HintCode.DEAD_CODE,node.rightOperand);
                        ((_263_)=>(!!_263_)?_263_.accept(this):null)(lhsCondition);
                        return null;
                    }else if (value == false && isAmpAmp) {
                        this._errorReporter.reportErrorForNode(HintCode.DEAD_CODE,node.rightOperand);
                        ((_264_)=>(!!_264_)?_264_.accept(this):null)(lhsCondition);
                        return null;
                    }
                }
            }
        }
        return super.visitBinaryExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : core.DartObject {
        let statements : any = node.statements;
        this._checkForDeadStatementsInNodeList(statements);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : core.DartObject {
        let conditionExpression : any = node.condition;
        ((_265_)=>(!!_265_)?_265_.accept(this):null)(conditionExpression);
        if (!this._isDebugConstant(conditionExpression)) {
            let result : any = this._getConstantBooleanValue(conditionExpression);
            if (result != null) {
                if (op(Op.EQUALS,result.value.toBoolValue(),true)) {
                    this._errorReporter.reportErrorForNode(HintCode.DEAD_CODE,node.elseExpression);
                    ((_266_)=>(!!_266_)?_266_.accept(this):null)(node.thenExpression);
                    return null;
                }else {
                    this._errorReporter.reportErrorForNode(HintCode.DEAD_CODE,node.thenExpression);
                    ((_267_)=>(!!_267_)?_267_.accept(this):null)(node.elseExpression);
                    return null;
                }
            }
        }
        return super.visitConditionalExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        let exportElement : any = node.element;
        if (exportElement != null) {
            let library : any = exportElement.exportedLibrary;
            if (library != null && !library.isSynthetic) {
                for(let combinator of node.combinators) {
                    this._checkCombinator(library,combinator);
                }
            }
        }
        return super.visitExportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : core.DartObject {
        let conditionExpression : any = node.condition;
        ((_268_)=>(!!_268_)?_268_.accept(this):null)(conditionExpression);
        if (!this._isDebugConstant(conditionExpression)) {
            let result : any = this._getConstantBooleanValue(conditionExpression);
            if (result != null) {
                if (op(Op.EQUALS,result.value.toBoolValue(),true)) {
                    let elseStatement : any = node.elseStatement;
                    if (elseStatement != null) {
                        this._errorReporter.reportErrorForNode(HintCode.DEAD_CODE,elseStatement);
                        ((_269_)=>(!!_269_)?_269_.accept(this):null)(node.thenStatement);
                        return null;
                    }
                }else {
                    this._errorReporter.reportErrorForNode(HintCode.DEAD_CODE,node.thenStatement);
                    ((_270_)=>(!!_270_)?_270_.accept(this):null)(node.elseStatement);
                    return null;
                }
            }
        }
        return super.visitIfStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        let importElement : any = node.element;
        if (importElement != null) {
            let library : any = importElement.importedLibrary;
            if (library != null && !library.isSynthetic) {
                for(let combinator of node.combinators) {
                    this._checkCombinator(library,combinator);
                }
            }
        }
        return super.visitImportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        this._checkForDeadStatementsInNodeList(node.statements,{
            allowMandated : true});
        return super.visitSwitchCase(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        this._checkForDeadStatementsInNodeList(node.statements,{
            allowMandated : true});
        return super.visitSwitchDefault(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : core.DartObject {
        ((_271_)=>(!!_271_)?_271_.accept(this):null)(node.body);
        ((_272_)=>(!!_272_)?_272_.accept(this):null)(node.finallyBlock);
        let catchClauses : any = node.catchClauses;
        let numOfCatchClauses : number = catchClauses.length;
        let visitedTypes : core.DartList<any> = new core.DartList<any>();
        for(let i : number = 0; i < numOfCatchClauses; i++){
            let catchClause : any = op(Op.INDEX,catchClauses,i);
            if (catchClause.onKeyword != null) {
                let currentType : any = ((t)=>(!!t)?t.type:null)(catchClause.exceptionType);
                if (currentType != null) {
                    if (currentType.isObject) {
                        ((_273_)=>(!!_273_)?_273_.accept(this):null)(catchClause);
                        if (i + 1 != numOfCatchClauses) {
                            let nextCatchClause : any = op(Op.INDEX,catchClauses,i + 1);
                            let lastCatchClause : any = op(Op.INDEX,catchClauses,numOfCatchClauses - 1);
                            let offset : number = nextCatchClause.offset;
                            let length : number = op(Op.MINUS,lastCatchClause.end,offset);
                            this._errorReporter.reportErrorForOffset(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH,offset,length);
                            return null;
                        }
                    }
                    let length : number = visitedTypes.length;
                    for(let j : number = 0; j < length; j++){
                        let type : any = visitedTypes[j];
                        if (this._typeSystem.isSubtypeOf(currentType,type)) {
                            let lastCatchClause : any = op(Op.INDEX,catchClauses,numOfCatchClauses - 1);
                            let offset : number = catchClause.offset;
                            let length : number = op(Op.MINUS,lastCatchClause.end,offset);
                            this._errorReporter.reportErrorForOffset(HintCode.DEAD_CODE_ON_CATCH_SUBTYPE,offset,length,new core.DartList.literal(currentType.displayName,type.displayName));
                            return null;
                        }
                    }
                    visitedTypes.add(currentType);
                }
                ((_274_)=>(!!_274_)?_274_.accept(this):null)(catchClause);
            }else {
                ((_275_)=>(!!_275_)?_275_.accept(this):null)(catchClause);
                if (i + 1 != numOfCatchClauses) {
                    let nextCatchClause : any = op(Op.INDEX,catchClauses,i + 1);
                    let lastCatchClause : any = op(Op.INDEX,catchClauses,numOfCatchClauses - 1);
                    let offset : number = nextCatchClause.offset;
                    let length : number = op(Op.MINUS,lastCatchClause.end,offset);
                    this._errorReporter.reportErrorForOffset(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH,offset,length);
                    return null;
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        let conditionExpression : any = node.condition;
        ((_276_)=>(!!_276_)?_276_.accept(this):null)(conditionExpression);
        if (!this._isDebugConstant(conditionExpression)) {
            let result : any = this._getConstantBooleanValue(conditionExpression);
            if (result != null) {
                if (op(Op.EQUALS,result.value.toBoolValue(),false)) {
                    this._errorReporter.reportErrorForNode(HintCode.DEAD_CODE,node.body);
                    return null;
                }
            }
        }
        ((_277_)=>(!!_277_)?_277_.accept(this):null)(node.body);
        return null;
    }
    _checkCombinator(library : any,combinator : any) : void {
        let namespace : any = new bare.createInstance(any,null).createExportNamespaceForLibrary(library);
        let names : any;
        let hintCode : any;
        if (is(combinator, any)) {
            names = combinator.hiddenNames;
            hintCode = HintCode.UNDEFINED_HIDDEN_NAME;
        }else {
            names = (combinator as any).shownNames;
            hintCode = HintCode.UNDEFINED_SHOWN_NAME;
        }
        for(let name of names) {
            let nameStr : string = name.name;
            let element : any = namespace.get(nameStr);
            if (op(Op.EQUALS,element,null)) {
                element = namespace.get(`${nameStr}=`);
            }
            if (op(Op.EQUALS,element,null)) {
                this._errorReporter.reportErrorForNode(hintCode,name,new core.DartList.literal(library.identifier,nameStr));
            }
        }
    }
    _checkForDeadStatementsInNodeList(statements : any,_namedArguments? : {allowMandated? : boolean}) : void {
        let {allowMandated} = Object.assign({
            "allowMandated" : false}, _namedArguments );
        var statementExits : (statement : any) => boolean = (statement : any) : boolean =>  {
            if (is(statement, any)) {
                return op(Op.EQUALS,statement.label,null);
            }else if (is(statement, any)) {
                return op(Op.EQUALS,statement.label,null);
            }
            return ExitDetector.exits(statement);
        };
        let size : number = statements.length;
        for(let i : number = 0; i < size; i++){
            let currentStatement : any = op(Op.INDEX,statements,i);
            ((_278_)=>(!!_278_)?_278_.accept(this):null)(currentStatement);
            if (statementExits(currentStatement) && i != size - 1) {
                let nextStatement : any = op(Op.INDEX,statements,i + 1);
                let lastStatement : any = op(Op.INDEX,statements,size - 1);
                if (allowMandated && i == size - 2 && is(nextStatement, any)) {
                    return;
                }
                let offset : number = nextStatement.offset;
                let length : number = op(Op.MINUS,lastStatement.end,offset);
                this._errorReporter.reportErrorForOffset(HintCode.DEAD_CODE,offset,length);
                return;
            }
        }
    }
    _getConstantBooleanValue(expression : any) : any {
        if (is(expression, any)) {
            if (expression.value) {
                return new bare.createInstance(any,null,new bare.createInstance(any,null,null,BoolState.from(true)));
            }else {
                return new bare.createInstance(any,null,new bare.createInstance(any,null,null,BoolState.from(false)));
            }
        }
        return null;
    }
    _isDebugConstant(expression : any) : boolean {
        let element : any = null;
        if (is(expression, any)) {
            element = expression.staticElement;
        }else if (is(expression, any)) {
            element = expression.propertyName.staticElement;
        }
        if (is(element, any)) {
            let variable : any = element.variable;
            return variable != null && variable.isConst;
        }
        return false;
    }
}

export namespace DirectiveResolver {
    export type Constructors = 'DirectiveResolver';
    export type Interface = Omit<DirectiveResolver, Constructors>;
}
@DartClass
export class DirectiveResolver extends any {
    sourceModificationTimeMap : core.DartMap<any,number>;

    importSourceKindMap : core.DartMap<any,any>;

    exportSourceKindMap : core.DartMap<any,any>;

    errors : core.DartList<any>;

    _enclosingLibrary : any;

    constructor(sourceModificationTimeMap : core.DartMap<any,number>,importSourceKindMap : core.DartMap<any,any>,exportSourceKindMap : core.DartMap<any,any>) {
    }
    @defaultConstructor
    DirectiveResolver(sourceModificationTimeMap : core.DartMap<any,number>,importSourceKindMap : core.DartMap<any,any>,exportSourceKindMap : core.DartMap<any,any>) {
        this.errors = new core.DartList.literal<any>();
        this.sourceModificationTimeMap = sourceModificationTimeMap;
        this.importSourceKindMap = importSourceKindMap;
        this.exportSourceKindMap = exportSourceKindMap;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : void {
        this._enclosingLibrary = resolutionMap.elementDeclaredByCompilationUnit(node).library;
        for(let directive of node.directives) {
            directive.accept(this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : void {
        let nodeOffset : number = node.offset;
        node.element = null;
        for(let element of this._enclosingLibrary.exports) {
            if (op(Op.EQUALS,element.nameOffset,nodeOffset)) {
                node.element = element;
                let exportedSource : any = element.exportedLibrary.source;
                let exportedTime : number = (this.sourceModificationTimeMap.get(exportedSource) || -1);
                if (exportedTime >= 0 && this.exportSourceKindMap.get(exportedSource) != SourceKind.LIBRARY) {
                    let uriLiteral : any = node.uri;
                    this.errors.add(new bare.createInstance(any,null,this._enclosingLibrary.source,uriLiteral.offset,uriLiteral.length,CompileTimeErrorCode.EXPORT_OF_NON_LIBRARY,new core.DartList.literal(uriLiteral.toSource())));
                }
                break;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : void {
        let nodeOffset : number = node.offset;
        node.element = null;
        for(let element of this._enclosingLibrary.imports) {
            if (op(Op.EQUALS,element.nameOffset,nodeOffset)) {
                node.element = element;
                let importedSource : any = element.importedLibrary.source;
                let importedTime : number = (this.sourceModificationTimeMap.get(importedSource) || -1);
                if (importedTime >= 0 && this.importSourceKindMap.get(importedSource) != SourceKind.LIBRARY) {
                    let uriLiteral : any = node.uri;
                    let errorCode : any = element.isDeferred ? StaticWarningCode.IMPORT_OF_NON_LIBRARY : CompileTimeErrorCode.IMPORT_OF_NON_LIBRARY;
                    this.errors.add(new bare.createInstance(any,null,this._enclosingLibrary.source,uriLiteral.offset,uriLiteral.length,errorCode,new core.DartList.literal(uriLiteral.toSource())));
                }
                break;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : void {
        node.element = this._enclosingLibrary;
    }
}

export namespace ElementHolder {
    export type Constructors = 'ElementHolder';
    export type Interface = Omit<ElementHolder, Constructors>;
}
@DartClass
export class ElementHolder {
    _accessors : core.DartList<any>;

    _constructors : core.DartList<any>;

    _enums : core.DartList<any>;

    _fields : core.DartList<any>;

    _functions : core.DartList<any>;

    _labels : core.DartList<any>;

    _localVariables : core.DartList<any>;

    _methods : core.DartList<any>;

    _parameters : core.DartList<any>;

    _topLevelVariables : core.DartList<any>;

    _types : core.DartList<any>;

    _typeAliases : core.DartList<any>;

    _typeParameters : core.DartList<any>;

    get accessors() : core.DartList<any> {
        if (this._accessors == null) {
            return PropertyAccessorElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._accessors;
        this._accessors = null;
        return result;
    }
    get constructors() : core.DartList<any> {
        if (this._constructors == null) {
            return ConstructorElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._constructors;
        this._constructors = null;
        return result;
    }
    get enums() : core.DartList<any> {
        if (this._enums == null) {
            return ClassElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._enums;
        this._enums = null;
        return result;
    }
    get fields() : core.DartList<any> {
        if (this._fields == null) {
            return FieldElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._fields;
        this._fields = null;
        return result;
    }
    get fieldsWithoutFlushing() : core.DartList<any> {
        if (this._fields == null) {
            return FieldElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._fields;
        return result;
    }
    get functions() : core.DartList<any> {
        if (this._functions == null) {
            return FunctionElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._functions;
        this._functions = null;
        return result;
    }
    get labels() : core.DartList<any> {
        if (this._labels == null) {
            return LabelElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._labels;
        this._labels = null;
        return result;
    }
    get localVariables() : core.DartList<any> {
        if (this._localVariables == null) {
            return LocalVariableElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._localVariables;
        this._localVariables = null;
        return result;
    }
    get methods() : core.DartList<any> {
        if (this._methods == null) {
            return MethodElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._methods;
        this._methods = null;
        return result;
    }
    get parameters() : core.DartList<any> {
        if (this._parameters == null) {
            return ParameterElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._parameters;
        this._parameters = null;
        return result;
    }
    get topLevelVariables() : core.DartList<any> {
        if (this._topLevelVariables == null) {
            return TopLevelVariableElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._topLevelVariables;
        this._topLevelVariables = null;
        return result;
    }
    get typeAliases() : core.DartList<any> {
        if (this._typeAliases == null) {
            return FunctionTypeAliasElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._typeAliases;
        this._typeAliases = null;
        return result;
    }
    get typeParameters() : core.DartList<any> {
        if (this._typeParameters == null) {
            return TypeParameterElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._typeParameters;
        this._typeParameters = null;
        return result;
    }
    get types() : core.DartList<any> {
        if (this._types == null) {
            return ClassElement.EMPTY_LIST;
        }
        let result : core.DartList<any> = this._types;
        this._types = null;
        return result;
    }
    addAccessor(element : any) : void {
        if (this._accessors == null) {
            this._accessors = new core.DartList<any>();
        }
        this._accessors.add(element);
    }
    addConstructor(element : any) : void {
        if (this._constructors == null) {
            this._constructors = new core.DartList<any>();
        }
        this._constructors.add(element);
    }
    addEnum(element : any) : void {
        if (this._enums == null) {
            this._enums = new core.DartList<any>();
        }
        this._enums.add(element);
    }
    addField(element : any) : void {
        if (this._fields == null) {
            this._fields = new core.DartList<any>();
        }
        this._fields.add(element);
    }
    addFunction(element : any) : void {
        if (this._functions == null) {
            this._functions = new core.DartList<any>();
        }
        this._functions.add(element);
    }
    addLabel(element : any) : void {
        if (this._labels == null) {
            this._labels = new core.DartList<any>();
        }
        this._labels.add(element);
    }
    addLocalVariable(element : any) : void {
        if (this._localVariables == null) {
            this._localVariables = new core.DartList<any>();
        }
        this._localVariables.add(element);
    }
    addMethod(element : any) : void {
        if (this._methods == null) {
            this._methods = new core.DartList<any>();
        }
        this._methods.add(element);
    }
    addParameter(element : any) : void {
        if (this._parameters == null) {
            this._parameters = new core.DartList<any>();
        }
        this._parameters.add(element);
    }
    addTopLevelVariable(element : any) : void {
        if (this._topLevelVariables == null) {
            this._topLevelVariables = new core.DartList<any>();
        }
        this._topLevelVariables.add(element);
    }
    addType(element : any) : void {
        if (this._types == null) {
            this._types = new core.DartList<any>();
        }
        this._types.add(element);
    }
    addTypeAlias(element : any) : void {
        if (this._typeAliases == null) {
            this._typeAliases = new core.DartList<any>();
        }
        this._typeAliases.add(element);
    }
    addTypeParameter(element : any) : void {
        if (this._typeParameters == null) {
            this._typeParameters = new core.DartList<any>();
        }
        this._typeParameters.add(element);
    }
    getField(fieldName : string,_namedArguments? : {synthetic? : boolean}) : any {
        let {synthetic} = Object.assign({
            "synthetic" : false}, _namedArguments );
        if (this._fields == null) {
            return null;
        }
        let length : number = this._fields.length;
        for(let i : number = 0; i < length; i++){
            let field : any = this._fields[i];
            if (op(Op.EQUALS,field.name,fieldName) && op(Op.EQUALS,field.isSynthetic,synthetic)) {
                return field;
            }
        }
        return null;
    }
    getTopLevelVariable(variableName : string) : any {
        if (this._topLevelVariables == null) {
            return null;
        }
        let length : number = this._topLevelVariables.length;
        for(let i : number = 0; i < length; i++){
            let variable : any = this._topLevelVariables[i];
            if (op(Op.EQUALS,variable.name,variableName)) {
                return variable;
            }
        }
        return null;
    }
    validate() : void {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        if (this._accessors != null) {
            buffer.write(this._accessors.length);
            buffer.write(" accessors");
        }
        if (this._constructors != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._constructors.length);
            buffer.write(" constructors");
        }
        if (this._fields != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._fields.length);
            buffer.write(" fields");
        }
        if (this._functions != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._functions.length);
            buffer.write(" functions");
        }
        if (this._labels != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._labels.length);
            buffer.write(" labels");
        }
        if (this._localVariables != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._localVariables.length);
            buffer.write(" local variables");
        }
        if (this._methods != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._methods.length);
            buffer.write(" methods");
        }
        if (this._parameters != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._parameters.length);
            buffer.write(" parameters");
        }
        if (this._topLevelVariables != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._topLevelVariables.length);
            buffer.write(" top-level variables");
        }
        if (this._types != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._types.length);
            buffer.write(" types");
        }
        if (this._typeAliases != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._typeAliases.length);
            buffer.write(" type aliases");
        }
        if (this._typeParameters != null) {
            if (buffer.length > 0) {
                buffer.write("; ");
            }
            buffer.write(this._typeParameters.length);
            buffer.write(" type parameters");
        }
        if (buffer.length > 0) {
            AnalysisEngine.instance.logger.logError(`Failed to capture elements: ${buffer}`);
        }
    }
    constructor() {
    }
    @defaultConstructor
    ElementHolder() {
    }
}

export namespace EnumMemberBuilder {
    export type Constructors = 'EnumMemberBuilder';
    export type Interface = Omit<EnumMemberBuilder, Constructors>;
}
@DartClass
export class EnumMemberBuilder extends any {
    _typeProvider : TypeProvider;

    constructor(_typeProvider : TypeProvider) {
    }
    @defaultConstructor
    EnumMemberBuilder(_typeProvider : TypeProvider) {
        this._typeProvider = _typeProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        let enumElement : any = node.name.staticElement as any;
        let enumType : any = enumElement.type;
        let fields : core.DartList<any> = new core.DartList<any>();
        let getters : core.DartList<any> = new core.DartList<any>();
        let intType : any = this._typeProvider.intType;
        let indexFieldName : string = "index";
        let indexField : any = new bare.createInstance(any,null,indexFieldName,-1);
        indexField.isFinal = true;
        indexField.isSynthetic = true;
        indexField.type = intType;
        fields.add(indexField);
        getters.add(this._createGetter(indexField));
        let valuesField : any = new bare.createInstance(any,null,"values",-1);
        valuesField.isStatic = true;
        valuesField.isConst = true;
        valuesField.isSynthetic = true;
        valuesField.type = this._typeProvider.listType.instantiate(new core.DartList.literal<any>(enumType));
        fields.add(valuesField);
        getters.add(this._createGetter(valuesField));
        let constants : any = node.constants;
        let constantValues : core.DartList<any> = new core.DartList<any>();
        let constantCount : number = constants.length;
        for(let i : number = 0; i < constantCount; i++){
            let constant : any = op(Op.INDEX,constants,i);
            let constantField : any = constant.name.staticElement;
            let fieldMap : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
            op(Op.INDEX_ASSIGN,fieldMap,indexFieldName,new bare.createInstance(any,null,intType,new bare.createInstance(any,null,i)));
            let value : any = new bare.createInstance(any,null,enumType,new bare.createInstance(any,null,fieldMap));
            constantValues.add(value);
            constantField.evaluationResult = new bare.createInstance(any,null,value);
            fields.add(constantField);
            getters.add(constantField.getter);
        }
        valuesField.evaluationResult = new bare.createInstance(any,null,new bare.createInstance(any,null,valuesField.type,new bare.createInstance(any,null,constantValues)));
        enumElement.fields = fields;
        enumElement.accessors = getters;
        return super.visitEnumDeclaration(node);
    }
    _createGetter(field : any) : any {
        return new bare.createInstance(any,null,field);
    }
}

export namespace ExitDetector {
    export type Constructors = 'ExitDetector';
    export type Interface = Omit<ExitDetector, Constructors>;
}
@DartClass
export class ExitDetector extends any {
    _enclosingBlockContainsBreak : boolean;

    _enclosingBlockContainsContinue : boolean;

    _enclosingBlockBreaksLabel : core.DartSet<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : boolean {
        return this._visitExpressions(node.arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : boolean {
        return this._nodeExits(node.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : boolean {
        let leftHandSide : any = node.leftHandSide;
        if (this._nodeExits(leftHandSide)) {
            return true;
        }
        let operatorType : any = node.operator.type;
        if (op(Op.EQUALS,operatorType,TokenType.AMPERSAND_AMPERSAND_EQ) || op(Op.EQUALS,operatorType,TokenType.BAR_BAR_EQ) || op(Op.EQUALS,operatorType,TokenType.QUESTION_QUESTION_EQ)) {
            return false;
        }
        if (is(leftHandSide, any) && op(Op.EQUALS,leftHandSide.operator.type,TokenType.QUESTION_PERIOD)) {
            return false;
        }
        return this._nodeExits(node.rightHandSide);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : boolean {
        return this._nodeExits(node.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : boolean {
        let lhsExpression : any = node.leftOperand;
        let rhsExpression : any = node.rightOperand;
        let operatorType : any = node.operator.type;
        if (op(Op.EQUALS,operatorType,TokenType.BAR_BAR)) {
            if (is(lhsExpression, any)) {
                if (!lhsExpression.value) {
                    return this._nodeExits(rhsExpression);
                }
            }
            return this._nodeExits(lhsExpression);
        }
        if (op(Op.EQUALS,operatorType,TokenType.AMPERSAND_AMPERSAND)) {
            if (is(lhsExpression, any)) {
                if (lhsExpression.value) {
                    return this._nodeExits(rhsExpression);
                }
            }
            return this._nodeExits(lhsExpression);
        }
        if (op(Op.EQUALS,operatorType,TokenType.QUESTION_QUESTION)) {
            return this._nodeExits(lhsExpression);
        }
        return this._nodeExits(lhsExpression) || this._nodeExits(rhsExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : boolean {
        return this._visitStatements(node.statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : boolean {
        return this._nodeExits(node.block);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : boolean {
        this._enclosingBlockContainsBreak = true;
        if (node.label != null) {
            this._enclosingBlockBreaksLabel.add(node.target);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : boolean {
        return this._nodeExits(node.target) || this._visitExpressions(node.cascadeSections);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : boolean {
        let conditionExpression : any = node.condition;
        let thenStatement : any = node.thenExpression;
        let elseStatement : any = node.elseExpression;
        if (this._nodeExits(conditionExpression)) {
            return true;
        }
        if (op(Op.EQUALS,thenStatement,null) || op(Op.EQUALS,elseStatement,null)) {
            return false;
        }
        return thenStatement.accept(this) && elseStatement.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : boolean {
        this._enclosingBlockContainsContinue = true;
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : boolean {
        let outerBreakValue : boolean = this._enclosingBlockContainsBreak;
        let outerContinueValue : boolean = this._enclosingBlockContainsContinue;
        this._enclosingBlockContainsBreak = false;
        this._enclosingBlockContainsContinue = false;
        try {
            let bodyExits : boolean = this._nodeExits(node.body);
            let containsBreakOrContinue : boolean = this._enclosingBlockContainsBreak || this._enclosingBlockContainsContinue;
            if (bodyExits && !containsBreakOrContinue) {
                return true;
            }
            let conditionExpression : any = node.condition;
            if (this._nodeExits(conditionExpression)) {
                return true;
            }
            if (is(conditionExpression, any)) {
                if (conditionExpression.value && !this._enclosingBlockContainsBreak) {
                    return true;
                }
            }
            return false;
        } finally {
            this._enclosingBlockContainsBreak = outerBreakValue;
            this._enclosingBlockContainsContinue = outerContinueValue;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyStatement(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionStatement(node : any) : boolean {
        return this._nodeExits(node.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : boolean {
        let outerBreakValue : boolean = this._enclosingBlockContainsBreak;
        this._enclosingBlockContainsBreak = false;
        try {
            return this._nodeExits(node.iterable);
        } finally {
            this._enclosingBlockContainsBreak = outerBreakValue;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : boolean {
        let outerBreakValue : boolean = this._enclosingBlockContainsBreak;
        this._enclosingBlockContainsBreak = false;
        try {
            if (node.variables != null && this._visitVariableDeclarations(node.variables.variables)) {
                return true;
            }
            if (node.initialization != null && this._nodeExits(node.initialization)) {
                return true;
            }
            let conditionExpression : any = node.condition;
            if (conditionExpression != null && this._nodeExits(conditionExpression)) {
                return true;
            }
            if (this._visitExpressions(node.updaters)) {
                return true;
            }
            let blockReturns : boolean = this._nodeExits(node.body);
            let implicitOrExplictTrue : boolean = op(Op.EQUALS,conditionExpression,null) || (is(conditionExpression, any) && conditionExpression.value);
            if (implicitOrExplictTrue) {
                if (blockReturns || !this._enclosingBlockContainsBreak) {
                    return true;
                }
            }
            return false;
        } finally {
            this._enclosingBlockContainsBreak = outerBreakValue;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationStatement(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : boolean {
        if (this._nodeExits(node.function)) {
            return true;
        }
        return node.argumentList.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIdentifier(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : boolean {
        let conditionExpression : any = node.condition;
        let thenStatement : any = node.thenStatement;
        let elseStatement : any = node.elseStatement;
        if (this._nodeExits(conditionExpression)) {
            return true;
        }
        if (is(conditionExpression, any)) {
            if (conditionExpression.value) {
                return this._nodeExits(thenStatement);
            }else if (elseStatement != null) {
                return this._nodeExits(elseStatement);
            }
        }
        let thenExits : boolean = this._nodeExits(thenStatement);
        let elseExits : boolean = this._nodeExits(elseStatement);
        if (op(Op.EQUALS,thenStatement,null) || op(Op.EQUALS,elseStatement,null)) {
            return false;
        }
        return thenExits && elseExits;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : boolean {
        let target : any = node.realTarget;
        if (this._nodeExits(target)) {
            return true;
        }
        if (this._nodeExits(node.index)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : boolean {
        return this._nodeExits(node.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : boolean {
        return node.expression.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : boolean {
        try {
            let statementExits : boolean = this._nodeExits(node.statement);
            let neverBrokeFromLabel : boolean = !this._enclosingBlockBreaksLabel.contains(node.statement);
            return statementExits && neverBrokeFromLabel;
        } finally {
            this._enclosingBlockBreaksLabel.remove(node.statement);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLiteral(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : boolean {
        let target : any = node.realTarget;
        if (target != null) {
            if (target.accept(this)) {
                return true;
            }
            if (op(Op.EQUALS,node.operator.type,TokenType.QUESTION_PERIOD)) {
                return false;
            }
        }
        return this._nodeExits(node.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : boolean {
        return node.expression.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : boolean {
        return node.expression.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : boolean {
        let target : any = node.realTarget;
        if (target != null && target.accept(this)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : boolean {
        return this._visitStatements(node.statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : boolean {
        return this._visitStatements(node.statements);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : boolean {
        let outerBreakValue : boolean = this._enclosingBlockContainsBreak;
        this._enclosingBlockContainsBreak = false;
        try {
            let hasDefault : boolean = false;
            let hasNonExitingCase : boolean = false;
            let members : core.DartList<any> = node.members;
            for(let i : number = 0; i < members.length; i++){
                let switchMember : any = members[i];
                if (is(switchMember, any)) {
                    hasDefault = true;
                    if (switchMember.statements.isEmpty && i + 1 == members.length) {
                        hasNonExitingCase = true;
                        continue;
                    }
                }
                if (!switchMember.statements.isEmpty && !switchMember.accept(this)) {
                    hasNonExitingCase = true;
                }
            }
            if (hasNonExitingCase) {
                return false;
            }
            return hasDefault;
        } finally {
            this._enclosingBlockContainsBreak = outerBreakValue;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : boolean {
        if (this._nodeExits(node.finallyBlock)) {
            return true;
        }
        if (!this._nodeExits(node.body)) {
            return false;
        }
        for(let c of node.catchClauses) {
            if (!this._nodeExits(c.body)) {
                return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : boolean {
        let initializer : any = node.initializer;
        if (initializer != null) {
            return initializer.accept(this);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : boolean {
        return this._visitVariableDeclarations(node.variables);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationStatement(node : any) : boolean {
        let variables : any = node.variables.variables;
        for(let i : number = 0; i < variables.length; i++){
            if (op(Op.INDEX,variables,i).accept(this)) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : boolean {
        let outerBreakValue : boolean = this._enclosingBlockContainsBreak;
        this._enclosingBlockContainsBreak = false;
        try {
            let conditionExpression : any = node.condition;
            if (conditionExpression.accept(this)) {
                return true;
            }
            node.body.accept(this);
            if (is(conditionExpression, any)) {
                if (conditionExpression.value && !this._enclosingBlockContainsBreak) {
                    return true;
                }
            }
            return false;
        } finally {
            this._enclosingBlockContainsBreak = outerBreakValue;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : boolean {
        return this._nodeExits(node.expression);
    }
    _nodeExits(node : any) : boolean {
        if (op(Op.EQUALS,node,null)) {
            return false;
        }
        return node.accept(this);
    }
    _visitExpressions(expressions : any) : boolean {
        for(let i : number = op(Op.MINUS,expressions.length,1); i >= 0; i--){
            if (op(Op.INDEX,expressions,i).accept(this)) {
                return true;
            }
        }
        return false;
    }
    _visitStatements(statements : any) : boolean {
        for(let i : number = 0; i < statements.length; i++){
            if (op(Op.INDEX,statements,i).accept(this)) {
                return true;
            }
        }
        return false;
    }
    _visitVariableDeclarations(variableDeclarations : any) : boolean {
        for(let i : number = op(Op.MINUS,variableDeclarations.length,1); i >= 0; i--){
            if (op(Op.INDEX,variableDeclarations,i).accept(this)) {
                return true;
            }
        }
        return false;
    }
    static exits(node : any) : boolean {
        return new ExitDetector()._nodeExits(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExitDetector() {
        this._enclosingBlockContainsBreak = false;
        this._enclosingBlockContainsContinue = false;
        this._enclosingBlockBreaksLabel = new core.DartSet<any>();
    }
}

export namespace GatherUsedImportedElementsVisitor {
    export type Constructors = 'GatherUsedImportedElementsVisitor';
    export type Interface = Omit<GatherUsedImportedElementsVisitor, Constructors>;
}
@DartClass
export class GatherUsedImportedElementsVisitor extends any {
    library : any;

    usedElements : UsedImportedElements;

    constructor(library : any) {
    }
    @defaultConstructor
    GatherUsedImportedElementsVisitor(library : any) {
        this.usedElements = new UsedImportedElements();
        this.library = library;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : void {
        this._visitDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : void {
        this._visitDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : void {
        this._visitDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : void {
        this._visitIdentifier(node,node.staticElement);
    }
    _recordPrefixMap(identifier : any,element : any) : boolean {
        var recordIfTargetIsPrefixElement : (target : any) => boolean = (target : any) : boolean =>  {
            if (is(target, any) && is(target.staticElement, any)) {
                let prefixedElements : core.DartList<any> = this.usedElements.prefixMap.putIfAbsent(target.staticElement,() =>  {
                    return new core.DartList.literal<any>();
                });
                prefixedElements.add(element);
                return true;
            }
            return false;
        };
        let parent : any = identifier.parent;
        if (is(parent, any) && op(Op.EQUALS,parent.methodName,identifier)) {
            return recordIfTargetIsPrefixElement(parent.target);
        }
        if (is(parent, any) && op(Op.EQUALS,parent.identifier,identifier)) {
            return recordIfTargetIsPrefixElement(parent.prefix);
        }
        return false;
    }
    _visitDirective(directive : any) : void {
        ((_279_)=>(!!_279_)?_279_.accept(this):null)(directive.documentationComment);
        directive.metadata.accept(this);
    }
    _visitIdentifier(identifier : any,element : any) : void {
        if (op(Op.EQUALS,element,null)) {
            return;
        }
        if (is(element, any)) {
            let conflictingElements : core.DartList<any> = element.conflictingElements;
            let length : number = conflictingElements.length;
            for(let i : number = 0; i < length; i++){
                let elt : any = conflictingElements[i];
                this._visitIdentifier(identifier,elt);
            }
            return;
        }
        if (this._recordPrefixMap(identifier,element)) {
            return;
        }
        if (is(element, any)) {
            this.usedElements.prefixMap.putIfAbsent(element,() =>  {
                return new core.DartList.literal<any>();
            });
            return;
        }else if (isNot(element.enclosingElement, any)) {
            return;
        }
        let containingLibrary : any = element.library;
        if (op(Op.EQUALS,containingLibrary,null)) {
            return;
        }
        if (op(Op.EQUALS,this.library,containingLibrary)) {
            return;
        }
        this.usedElements.elements.add(element);
    }
}

export namespace GatherUsedLocalElementsVisitor {
    export type Constructors = 'GatherUsedLocalElementsVisitor';
    export type Interface = Omit<GatherUsedLocalElementsVisitor, Constructors>;
}
@DartClass
export class GatherUsedLocalElementsVisitor extends any {
    usedElements : UsedLocalElements;

    _enclosingLibrary : any;

    _enclosingClass : any;

    _enclosingExec : any;

    constructor(_enclosingLibrary : any) {
    }
    @defaultConstructor
    GatherUsedLocalElementsVisitor(_enclosingLibrary : any) {
        this.usedElements = new UsedLocalElements();
        this._enclosingLibrary = _enclosingLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) {
        let exceptionParameter : any = node.exceptionParameter;
        let stackTraceParameter : any = node.stackTraceParameter;
        if (exceptionParameter != null) {
            let element : any = exceptionParameter.staticElement;
            this.usedElements.addCatchException(element);
            if (stackTraceParameter != null || op(Op.EQUALS,node.onKeyword,null)) {
                this.usedElements.addElement(element);
            }
        }
        if (stackTraceParameter != null) {
            let element : any = stackTraceParameter.staticElement;
            this.usedElements.addCatchStackTrace(element);
        }
        super.visitCatchClause(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) {
        let enclosingClassOld : any = this._enclosingClass;
        try {
            this._enclosingClass = node.element;
            super.visitClassDeclaration(node);
        } finally {
            this._enclosingClass = enclosingClassOld;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) {
        let enclosingExecOld : any = this._enclosingExec;
        try {
            this._enclosingExec = node.element;
            super.visitFunctionDeclaration(node);
        } finally {
            this._enclosingExec = enclosingExecOld;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) {
        if (isNot(node.parent, any)) {
            this.usedElements.addElement(node.element);
        }
        super.visitFunctionExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) {
        let enclosingExecOld : any = this._enclosingExec;
        try {
            this._enclosingExec = node.element;
            super.visitMethodDeclaration(node);
        } finally {
            this._enclosingExec = enclosingExecOld;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        if (node.inDeclarationContext()) {
            return;
        }
        let element : any = node.staticElement;
        let isIdentifierRead : boolean = GatherUsedLocalElementsVisitor._isReadIdentifier(node);
        if (is(element, any)) {
            if (isIdentifierRead) {
                this.usedElements.addElement(element);
            }
        }else {
            this._useIdentifierElement(node);
            if (op(Op.EQUALS,element,null) || is(element.enclosingElement, any) && !core.identical(element,this._enclosingExec)) {
                this.usedElements.members.add(node.name);
                if (isIdentifierRead) {
                    this.usedElements.readMembers.add(node.name);
                }
            }
        }
    }
    _useIdentifierElement(node : any) : void {
        let element : any = node.staticElement;
        if (op(Op.EQUALS,element,null)) {
            return;
        }
        if (!core.identical(element.library,this._enclosingLibrary)) {
            return;
        }
        if (core.identical(element,this._enclosingClass)) {
            return;
        }
        if (core.identical(element,this._enclosingExec)) {
            return;
        }
        if (is(node.parent, any)) {
            if (is(element, any)) {
                let parent2 : any = node.parent.parent;
                if (is(parent2, any)) {
                    return;
                }
                if (is(parent2, any)) {
                    if (isNot(parent2.parent, any)) {
                        return;
                    }
                }
            }
        }
        this.usedElements.addElement(element);
    }
    static _isReadIdentifier(node : any) : boolean {
        if (!node.inGetterContext()) {
            return false;
        }
        let parent : any = node.parent;
        if (is(parent.parent, any)) {
            if (is(parent, any) || is(parent, any)) {
                return false;
            }
            if (is(parent, any) && op(Op.EQUALS,parent.leftHandSide,node)) {
                let operatorType : any = ((t)=>(!!t)?t.type:null)(parent.operator);
                return op(Op.EQUALS,operatorType,TokenType.QUESTION_QUESTION_EQ);
            }
        }
        return true;
    }
}

export namespace HintGenerator {
    export type Constructors = 'HintGenerator';
    export type Interface = Omit<HintGenerator, Constructors>;
}
@DartClass
export class HintGenerator {
    _compilationUnits : core.DartList<any>;

    _context : any;

    _errorListener : any;

    _library : any;

    _usedImportedElementsVisitor : GatherUsedImportedElementsVisitor;

    _enableDart2JSHints : boolean;

    _manager : any;

    _usedLocalElementsVisitor : GatherUsedLocalElementsVisitor;

    constructor(_compilationUnits : core.DartList<any>,_context : any,_errorListener : any) {
    }
    @defaultConstructor
    HintGenerator(_compilationUnits : core.DartList<any>,_context : any,_errorListener : any) {
        this._enableDart2JSHints = false;
        this._compilationUnits = _compilationUnits;
        this._context = _context;
        this._errorListener = _errorListener;
        this._library = resolutionMap.elementDeclaredByCompilationUnit(this._compilationUnits[0]).library;
        this._usedImportedElementsVisitor = new GatherUsedImportedElementsVisitor(this._library);
        this._enableDart2JSHints = this._context.analysisOptions.dart2jsHint;
        this._manager = new bare.createInstance(any,null,this._library,{
            includeAbstractFromSuperclasses : true});
        this._usedLocalElementsVisitor = new GatherUsedLocalElementsVisitor(this._library);
    }
    generateForLibrary() : void {
        PerformanceStatistics.hints.makeCurrentWhile(() =>  {
            let length : number = this._compilationUnits.length;
            for(let i : number = 0; i < length; i++){
                let unit : any = this._compilationUnits[i];
                let element : any = unit.element;
                if (element != null) {
                    this._generateForCompilationUnit(unit,element.source);
                }
            }
            let definingUnit : any = this._compilationUnits[0];
            let definingUnitErrorReporter : any = new bare.createInstance(any,null,this._errorListener,resolutionMap.elementDeclaredByCompilationUnit(definingUnit).source);
            {
                let importsVerifier : ImportsVerifier = new ImportsVerifier();
                importsVerifier.addImports(definingUnit);
                importsVerifier.removeUsedElements(this._usedImportedElementsVisitor.usedElements);
                importsVerifier.generateDuplicateImportHints(definingUnitErrorReporter);
                importsVerifier.generateUnusedImportHints(definingUnitErrorReporter);
                importsVerifier.generateUnusedShownNameHints(definingUnitErrorReporter);
            }
            this._library.accept(new UnusedLocalElementsVerifier(this._errorListener,this._usedLocalElementsVisitor.usedElements));
        });
    }
    _generateForCompilationUnit(unit : any,source : any) : void {
        let errorReporter : any = new bare.createInstance(any,null,this._errorListener,source);
        unit.accept(this._usedImportedElementsVisitor);
        unit.accept(new DeadCodeVerifier(errorReporter,{
            typeSystem : this._context.typeSystem}));
        unit.accept(this._usedLocalElementsVisitor);
        if (this._enableDart2JSHints) {
            unit.accept(new Dart2JSVerifier(errorReporter));
        }
        unit.accept(new BestPracticesVerifier(errorReporter,this._context.typeProvider,this._library,this._manager,{
            typeSystem : this._context.typeSystem}));
        unit.accept(new OverrideVerifier(errorReporter,this._manager));
        new ToDoFinder(errorReporter).findIn(unit);
    }
}

export namespace ImportsVerifier {
    export type Constructors = 'ImportsVerifier';
    export type Interface = Omit<ImportsVerifier, Constructors>;
}
@DartClass
export class ImportsVerifier {
    _unusedImports : core.DartList<any>;

    _duplicateImports : core.DartList<any>;

    _libraryMap : core.DartHashMap<any,core.DartList<any>>;

    _namespaceMap : core.DartHashMap<any,any>;

    _prefixElementMap : core.DartHashMap<any,core.DartList<any>>;

    _unusedShownNamesMap : core.DartHashMap<any,core.DartList<any>>;

    addImports(node : any) : void {
        for(let directive of node.directives) {
            if (is(directive, any)) {
                let libraryElement : any = directive.uriElement;
                if (op(Op.EQUALS,libraryElement,null)) {
                    continue;
                }
                this._unusedImports.add(directive);
                if (directive.asKeyword != null) {
                    let prefixIdentifier : any = directive.prefix;
                    if (prefixIdentifier != null) {
                        let element : any = prefixIdentifier.staticElement;
                        if (is(element, any)) {
                            let list : core.DartList<any> = op(Op.INDEX,this._prefixElementMap,element);
                            if (list == null) {
                                list = new core.DartList<any>();
                                op(Op.INDEX_ASSIGN,this._prefixElementMap,element,list);
                            }
                            list.add(directive);
                        }
                    }
                }
                this._putIntoLibraryMap(libraryElement,directive);
                this._addAdditionalLibrariesForExports(libraryElement,directive,new core.DartHashSet<any>());
                this._addShownNames(directive);
            }
        }
        if (this._unusedImports.length > 1) {
            let importDirectiveArray : core.DartList<any> = new core.DartList.from(this._unusedImports);
            importDirectiveArray.sort(ImportDirective.COMPARATOR);
            let currentDirective : any = importDirectiveArray[0];
            for(let i : number = 1; i < importDirectiveArray.length; i++){
                let nextDirective : any = importDirectiveArray[i];
                if (op(Op.EQUALS,ImportDirective.COMPARATOR(currentDirective,nextDirective),0)) {
                    if (op(Op.LT,currentDirective.offset,nextDirective.offset)) {
                        this._duplicateImports.add(nextDirective);
                    }else {
                        this._duplicateImports.add(currentDirective);
                    }
                }
                currentDirective = nextDirective;
            }
        }
    }
    generateDuplicateImportHints(errorReporter : any) : void {
        let length : number = this._duplicateImports.length;
        for(let i : number = 0; i < length; i++){
            errorReporter.reportErrorForNode(HintCode.DUPLICATE_IMPORT,this._duplicateImports[i].uri);
        }
    }
    generateUnusedImportHints(errorReporter : any) : void {
        let length : number = this._unusedImports.length;
        for(let i : number = 0; i < length; i++){
            let unusedImport : any = this._unusedImports[i];
            let importElement : any = unusedImport.element;
            if (importElement != null) {
                let libraryElement : any = importElement.importedLibrary;
                if (op(Op.EQUALS,libraryElement,null) || libraryElement.isDartCore || libraryElement.isSynthetic) {
                    continue;
                }
            }
            errorReporter.reportErrorForNode(HintCode.UNUSED_IMPORT,unusedImport.uri);
        }
    }
    generateUnusedShownNameHints(reporter : any) : void {
        this._unusedShownNamesMap.forEach((importDirective : any,identifiers : core.DartList<any>) =>  {
            if (this._unusedImports.contains(importDirective)) {
                return;
            }
            let length : number = identifiers.length;
            for(let i : number = 0; i < length; i++){
                let identifier : any = identifiers[i];
                reporter.reportErrorForNode(HintCode.UNUSED_SHOWN_NAME,identifier,new core.DartList.literal(identifier.name));
            }
        });
    }
    removeUsedElements(usedElements : UsedImportedElements) : void {
        if (this._unusedImports.isEmpty && this._unusedShownNamesMap.isEmpty) {
            return;
        }
        usedElements.prefixMap.forEach((prefix : any,elements : core.DartList<any>) =>  {
            let importDirectives : core.DartList<any> = op(Op.INDEX,this._prefixElementMap,prefix);
            if (importDirectives != null) {
                let importLength : number = importDirectives.length;
                for(let i : number = 0; i < importLength; i++){
                    let importDirective : any = importDirectives[i];
                    this._unusedImports.remove(importDirective);
                    let elementLength : number = elements.length;
                    for(let j : number = 0; j < elementLength; j++){
                        let element : any = elements[j];
                        this._removeFromUnusedShownNamesMap(element,importDirective);
                    }
                }
            }
        });
        for(let element of usedElements.elements) {
            if (this._unusedImports.isEmpty && this._unusedShownNamesMap.isEmpty) {
                return;
            }
            let library : any = element.library;
            let importsLibrary : core.DartList<any> = op(Op.INDEX,this._libraryMap,library);
            if (importsLibrary == null) {
                continue;
            }
            if (importsLibrary.length == 1) {
                let usedImportDirective : any = importsLibrary[0];
                this._unusedImports.remove(usedImportDirective);
                this._removeFromUnusedShownNamesMap(element,usedImportDirective);
                continue;
            }
            let name : string = element.displayName;
            for(let importDirective of importsLibrary) {
                let namespace : any = this._computeNamespace(importDirective);
                if (((_280_)=>(!!_280_)?_280_.get(name):null)(namespace) != null) {
                    this._unusedImports.remove(importDirective);
                    this._removeFromUnusedShownNamesMap(element,importDirective);
                }
            }
        }
    }
    _addAdditionalLibrariesForExports(library : any,importDirective : any,visitedLibraries : core.DartSet<any>) : void {
        if (op(Op.EQUALS,library,null) || !visitedLibraries.add(library)) {
            return;
        }
        let exports : core.DartList<any> = library.exports;
        let length : number = exports.length;
        for(let i : number = 0; i < length; i++){
            let exportElt : any = exports[i];
            let exportedLibrary : any = exportElt.exportedLibrary;
            this._putIntoLibraryMap(exportedLibrary,importDirective);
            this._addAdditionalLibrariesForExports(exportedLibrary,importDirective,visitedLibraries);
        }
    }
    _addShownNames(importDirective : any) : void {
        if (op(Op.EQUALS,importDirective.combinators,null)) {
            return;
        }
        let identifiers : core.DartList<any> = new core.DartList<any>();
        op(Op.INDEX_ASSIGN,this._unusedShownNamesMap,importDirective,identifiers);
        for(let combinator of importDirective.combinators) {
            if (is(combinator, any)) {
                for(let name of combinator.shownNames) {
                    if (name.staticElement != null) {
                        identifiers.add(name);
                    }
                }
            }
        }
    }
    _computeNamespace(importDirective : any) : any {
        let namespace : any = op(Op.INDEX,this._namespaceMap,importDirective);
        if (op(Op.EQUALS,namespace,null)) {
            let importElement : any = importDirective.element;
            if (importElement != null) {
                let builder : any = new bare.createInstance(any,null);
                namespace = builder.createImportNamespaceForDirective(importElement);
                op(Op.INDEX_ASSIGN,this._namespaceMap,importDirective,namespace);
            }
        }
        return namespace;
    }
    _putIntoLibraryMap(libraryElement : any,importDirective : any) : void {
        let importList : core.DartList<any> = op(Op.INDEX,this._libraryMap,libraryElement);
        if (importList == null) {
            importList = new core.DartList<any>();
            op(Op.INDEX_ASSIGN,this._libraryMap,libraryElement,importList);
        }
        importList.add(importDirective);
    }
    _removeFromUnusedShownNamesMap(element : any,importDirective : any) : void {
        let identifiers : core.DartList<any> = op(Op.INDEX,this._unusedShownNamesMap,importDirective);
        if (identifiers == null) {
            return;
        }
        let length : number = identifiers.length;
        for(let i : number = 0; i < length; i++){
            let identifier : any = identifiers[i];
            if (is(element, any)) {
                if (op(Op.EQUALS,identifier.staticElement,element.variable)) {
                    identifiers.remove(identifier);
                    break;
                }
            }else {
                if (op(Op.EQUALS,identifier.staticElement,element)) {
                    identifiers.remove(identifier);
                    break;
                }
            }
        }
        if (identifiers.isEmpty) {
            this._unusedShownNamesMap.remove(importDirective);
        }
    }
    constructor() {
    }
    @defaultConstructor
    ImportsVerifier() {
        this._unusedImports = new core.DartList.literal<any>();
        this._duplicateImports = new core.DartList.literal<any>();
        this._libraryMap = new core.DartHashMap<any,core.DartList<any>>();
        this._namespaceMap = new core.DartHashMap<any,any>();
        this._prefixElementMap = new core.DartHashMap<any,core.DartList<any>>();
        this._unusedShownNamesMap = new core.DartHashMap<any,core.DartList<any>>();
    }
}

export namespace InferenceContext {
    export type Constructors = '_';
    export type Interface = Omit<InferenceContext, Constructors>;
}
@DartClass
export class InferenceContext {
    private static __$_typeProperty : string;
    static get _typeProperty() : string { 
        if (this.__$_typeProperty===undefined) {
            this.__$_typeProperty = 'analyzer.src.generated.InferenceContext.contextType';
        }
        return this.__$_typeProperty;
    }

    _errorReporter : any;

    _inferenceHints : boolean;

    _typeProvider : TypeProvider;

    _typeSystem : any;

    _inferredReturn : core.DartList<any>;

    _returnStack : core.DartList<any>;

    @namedConstructor
    _(typeProvider : TypeProvider,_typeSystem : any,_inferenceHints : boolean,_errorReporter : any) {
        this._inferredReturn = new core.DartList.literal<any>();
        this._returnStack = new core.DartList.literal<any>();
        this._typeProvider = typeProvider;
        this._typeSystem = _typeSystem;
        this._inferenceHints = _inferenceHints;
        this._errorReporter = _errorReporter;
    }
    static _ : new(typeProvider : TypeProvider,_typeSystem : any,_inferenceHints : boolean,_errorReporter : any) => InferenceContext;

    get returnContext() : any {
        return this._returnStack.isNotEmpty ? this._returnStack.last : null;
    }
    addReturnOrYieldType(type : any) : void {
        if (this._returnStack.isEmpty) {
            return;
        }
        let inferred : any = this._inferredReturn.last;
        inferred = this._typeSystem.getLeastUpperBound(type,inferred);
        this._inferredReturn[this._inferredReturn.length - 1] = inferred;
    }
    popReturnContext(node : any) : void {
        if (this._returnStack.isNotEmpty && this._inferredReturn.isNotEmpty) {
            let context : any = (this._returnStack.removeLast() || DynamicTypeImpl.instance);
            let inferred : any = this._inferredReturn.removeLast();
            if (this._typeSystem.isSubtypeOf(inferred,context)) {
                InferenceContext.setType(node,inferred);
            }
        }else {
            /* TODO (AssertStatementImpl) : assert (false); */;
        }
    }
    pushReturnContext(node : any) : void {
        this._returnStack.add(InferenceContext.getContext(node));
        this._inferredReturn.add(this._typeProvider.nullType);
    }
    recordInference(node : any,type : any) : void {
        if (!this._inferenceHints) {
            return;
        }
        let error : any;
        if (is(node, any)) {
            error = StrongModeCode.INFERRED_TYPE_LITERAL;
        }else if (is(node, any)) {
            error = StrongModeCode.INFERRED_TYPE_ALLOCATION;
        }else if (is(node, any)) {
            error = StrongModeCode.INFERRED_TYPE_CLOSURE;
        }else {
            error = StrongModeCode.INFERRED_TYPE;
        }
        this._errorReporter.reportErrorForNode(error,node,new core.DartList.literal(node,type));
    }
    static clearType(node : any) : void {
        ((_281_)=>(!!_281_)?_281_.setProperty(InferenceContext._typeProperty,null):null)(node);
    }
    static getContext(node : any) : any {
        return ((_282_)=>(!!_282_)?_282_.getProperty(InferenceContext._typeProperty):null)(node);
    }
    static setType(node : any,type : any) : void {
        if (op(Op.EQUALS,type,null) || type.isDynamic) {
            InferenceContext.clearType(node);
        }else {
            ((_283_)=>(!!_283_)?_283_.setProperty(InferenceContext._typeProperty,type):null)(node);
        }
    }
    static setTypeFromNode(innerNode : any,outerNode : any) : void {
        InferenceContext.setType(innerNode,InferenceContext.getContext(outerNode));
    }
}

export namespace BestPracticesVerifier {
    export type Constructors = 'BestPracticesVerifier';
    export type Interface = Omit<BestPracticesVerifier, Constructors>;
}
@DartClass
export class BestPracticesVerifier extends any {
    private static __$_NULL_TYPE_NAME : string;
    static get _NULL_TYPE_NAME() : string { 
        if (this.__$_NULL_TYPE_NAME===undefined) {
            this.__$_NULL_TYPE_NAME = "Null";
        }
        return this.__$_NULL_TYPE_NAME;
    }
    static set _NULL_TYPE_NAME(__$value : string)  { 
        this.__$_NULL_TYPE_NAME = __$value;
    }

    private static __$_TO_INT_METHOD_NAME : string;
    static get _TO_INT_METHOD_NAME() : string { 
        if (this.__$_TO_INT_METHOD_NAME===undefined) {
            this.__$_TO_INT_METHOD_NAME = "toInt";
        }
        return this.__$_TO_INT_METHOD_NAME;
    }
    static set _TO_INT_METHOD_NAME(__$value : string)  { 
        this.__$_TO_INT_METHOD_NAME = __$value;
    }

    _enclosingClass : any;

    inDeprecatedMember : boolean;

    _errorReporter : any;

    _nullType : any;

    _futureNullType : any;

    _typeSystem : any;

    _currentLibrary : any;

    _manager : any;

    constructor(_errorReporter : any,typeProvider : TypeProvider,_currentLibrary : any,_manager : any,_namedArguments? : {typeSystem? : any}) {
    }
    @defaultConstructor
    BestPracticesVerifier(_errorReporter : any,typeProvider : TypeProvider,_currentLibrary : any,_manager : any,_namedArguments? : {typeSystem? : any}) {
        let {typeSystem} = Object.assign({
        }, _namedArguments );
        this._nullType = typeProvider.nullType;
        this._futureNullType = typeProvider.futureNullType;
        this._typeSystem = (typeSystem || new bare.createInstance(any,null,typeProvider));
        this._errorReporter = _errorReporter;
        this._currentLibrary = _currentLibrary;
        this._manager = _manager;
        this.inDeprecatedMember = this._currentLibrary.isDeprecated;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        let element : any = resolutionMap.elementAnnotationForAnnotation(node);
        if (op(Op.EQUALS,((t)=>(!!t)?t.isFactory:null)(element),true)) {
            let parent : any = node.parent;
            if (is(parent, any)) {
                this._checkForInvalidFactory(parent);
            }else {
                this._errorReporter.reportErrorForNode(HintCode.INVALID_FACTORY_ANNOTATION,node,new core.DartList.literal());
            }
        }else if (op(Op.EQUALS,((t)=>(!!t)?t.isImmutable:null)(element),true)) {
            let parent : any = node.parent;
            if (isNot(parent, any)) {
                this._errorReporter.reportErrorForNode(HintCode.INVALID_IMMUTABLE_ANNOTATION,node,new core.DartList.literal());
            }
        }
        return super.visitAnnotation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : core.DartObject {
        for(let argument of node.arguments) {
            let parameter : any = argument.bestParameterElement;
            if (op(Op.EQUALS,((t)=>(!!t)?t.parameterKind:null)(parameter),ParameterKind.POSITIONAL)) {
                this._checkForDeprecatedMemberUse(parameter,argument);
            }
        }
        this._checkForArgumentTypesNotAssignableInList(node);
        return super.visitArgumentList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : core.DartObject {
        this._checkForUnnecessaryCast(node);
        return super.visitAsExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertInitializer(node : any) : core.DartObject {
        this._checkForPossibleNullCondition(node.condition);
        return super.visitAssertInitializer(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : core.DartObject {
        this._checkForPossibleNullCondition(node.condition);
        return super.visitAssertStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        let operatorType : any = node.operator.type;
        if (op(Op.EQUALS,operatorType,TokenType.EQ)) {
            this._checkForUseOfVoidResult(node.rightHandSide);
            this._checkForInvalidAssignment(node.leftHandSide,node.rightHandSide);
        }else {
            this._checkForDeprecatedMemberUse(node.bestElement,node);
        }
        return super.visitAssignmentExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        this._checkForDivisionOptimizationHint(node);
        this._checkForDeprecatedMemberUse(node.bestElement,node);
        return super.visitBinaryExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        let outerClass : any = this._enclosingClass;
        let wasInDeprecatedMember : boolean = this.inDeprecatedMember;
        let element : any = AbstractClassElementImpl.getImpl(node.element);
        if (element != null && element.isDeprecated) {
            this.inDeprecatedMember = true;
        }
        try {
            this._enclosingClass = element;
            this._checkForImmutable(node);
            return super.visitClassDeclaration(node);
        } finally {
            this._enclosingClass = outerClass;
            this.inDeprecatedMember = wasInDeprecatedMember;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : core.DartObject {
        this._checkForPossibleNullCondition(node.condition);
        return super.visitConditionalExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        if (resolutionMap.elementDeclaredByConstructorDeclaration(node).isFactory) {
            if (is(node.body, any)) {
                if (!ExitDetector.exits(node.body)) {
                    this._errorReporter.reportErrorForNode(HintCode.MISSING_RETURN,node,new core.DartList.literal(node.returnType.name));
                }
            }
        }
        return super.visitConstructorDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : core.DartObject {
        this._checkForPossibleNullCondition(node.condition);
        return super.visitDoStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUse(node.uriElement,node);
        return super.visitExportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        this._checkForPossibleNullCondition(node.condition);
        return super.visitForStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let wasInDeprecatedMember : boolean = this.inDeprecatedMember;
        let element : any = node.element;
        if (element != null && element.isDeprecated) {
            this.inDeprecatedMember = true;
        }
        try {
            this._checkForMissingReturn(node.returnType,node.functionExpression.body);
            return super.visitFunctionDeclaration(node);
        } finally {
            this.inDeprecatedMember = wasInDeprecatedMember;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : core.DartObject {
        this._checkForPossibleNullCondition(node.condition);
        return super.visitIfStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUse(node.uriElement,node);
        let importElement : any = node.element;
        if (importElement != null && importElement.isDeferred) {
            this._checkForLoadLibraryFunction(node,importElement);
        }
        return super.visitImportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUse(node.bestElement,node);
        return super.visitIndexExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUse(node.staticElement,node);
        return super.visitInstanceCreationExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : core.DartObject {
        this._checkAllTypeChecks(node);
        return super.visitIsExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        let wasInDeprecatedMember : boolean = this.inDeprecatedMember;
        let element : any = node.element;
        if (element != null && element.isDeprecated) {
            this.inDeprecatedMember = true;
        }
        try {
            this._checkForMissingReturn(node.returnType,node.body);
            this._checkForUnnecessaryNoSuchMethod(node);
            return super.visitMethodDeclaration(node);
        } finally {
            this.inDeprecatedMember = wasInDeprecatedMember;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        let realTarget : any = node.realTarget;
        this._checkForAbstractSuperMemberReference(realTarget,node.methodName);
        this._checkForCanBeNullAfterNullAware(realTarget,node.operator,null,node.methodName);
        let staticInvokeType : any = node.staticInvokeType;
        if (is(staticInvokeType, any)) {
            let methodElement : any = staticInvokeType.lookUpMethod(FunctionElement.CALL_METHOD_NAME,this._currentLibrary);
            this._checkForDeprecatedMemberUse(methodElement,node);
        }
        return super.visitMethodInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUse(node.bestElement,node);
        return super.visitPostfixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUse(node.bestElement,node);
        return super.visitPrefixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        let realTarget : any = node.realTarget;
        this._checkForAbstractSuperMemberReference(realTarget,node.propertyName);
        this._checkForCanBeNullAfterNullAware(realTarget,node.operator,node.propertyName,null);
        return super.visitPropertyAccess(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUse(node.staticElement,node);
        return super.visitRedirectingConstructorInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUseAtIdentifier(node);
        this._checkForInvalidProtectedMemberAccess(node);
        return super.visitSimpleIdentifier(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        this._checkForDeprecatedMemberUse(node.staticElement,node);
        return super.visitSuperConstructorInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        this._checkForUseOfVoidResult(node.initializer);
        this._checkForInvalidAssignment(node.name,node.initializer);
        return super.visitVariableDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        this._checkForPossibleNullCondition(node.condition);
        return super.visitWhileStatement(node);
    }
    _checkAllTypeChecks(node : any) : boolean {
        let expression : any = node.expression;
        let typeName : any = node.type;
        let lhsType : any = expression.staticType;
        let rhsType : any = typeName.type;
        if (op(Op.EQUALS,lhsType,null) || op(Op.EQUALS,rhsType,null)) {
            return false;
        }
        let rhsNameStr : string = is(typeName, any) ? typeName.name.name : null;
        if (rhsType.isDynamic && rhsNameStr == Keyword.DYNAMIC.lexeme) {
            if (op(Op.EQUALS,node.notOperator,null)) {
                this._errorReporter.reportErrorForNode(HintCode.UNNECESSARY_TYPE_CHECK_TRUE,node);
            }else {
                this._errorReporter.reportErrorForNode(HintCode.UNNECESSARY_TYPE_CHECK_FALSE,node);
            }
            return true;
        }
        let rhsElement : any = rhsType.element;
        let libraryElement : any = ((t)=>(!!t)?t.library:null)(rhsElement);
        if (libraryElement != null && libraryElement.isDartCore) {
            if (rhsType.isObject || (is(expression, any) && rhsNameStr == BestPracticesVerifier._NULL_TYPE_NAME)) {
                if (op(Op.EQUALS,node.notOperator,null)) {
                    this._errorReporter.reportErrorForNode(HintCode.UNNECESSARY_TYPE_CHECK_TRUE,node);
                }else {
                    this._errorReporter.reportErrorForNode(HintCode.UNNECESSARY_TYPE_CHECK_FALSE,node);
                }
                return true;
            }else if (rhsNameStr == BestPracticesVerifier._NULL_TYPE_NAME) {
                if (op(Op.EQUALS,node.notOperator,null)) {
                    this._errorReporter.reportErrorForNode(HintCode.TYPE_CHECK_IS_NULL,node);
                }else {
                    this._errorReporter.reportErrorForNode(HintCode.TYPE_CHECK_IS_NOT_NULL,node);
                }
                return true;
            }
        }
        return false;
    }
    _checkForAbstractSuperMemberReference(target : any,name : any) : void {
        if (is(target, any) && !this._currentLibrary.context.analysisOptions.enableSuperMixins) {
            let element : any = name.staticElement;
            if (is(element, any) && element.isAbstract) {
                if (!this._enclosingClass.hasNoSuchMethod) {
                    let concrete : any = null;
                    if (op(Op.EQUALS,element.kind,ElementKind.METHOD)) {
                        concrete = this._enclosingClass.lookUpInheritedConcreteMethod(element.displayName,this._currentLibrary);
                    }else if (op(Op.EQUALS,element.kind,ElementKind.GETTER)) {
                        concrete = this._enclosingClass.lookUpInheritedConcreteGetter(element.displayName,this._currentLibrary);
                    }else if (op(Op.EQUALS,element.kind,ElementKind.SETTER)) {
                        concrete = this._enclosingClass.lookUpInheritedConcreteSetter(element.displayName,this._currentLibrary);
                    }
                    if (op(Op.EQUALS,concrete,null)) {
                        this._errorReporter.reportTypeErrorForNode(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE,name,new core.DartList.literal(element.kind.displayName,name.name));
                    }
                }
            }
        }
    }
    _checkForArgumentTypeNotAssignable(expression : any,expectedStaticType : any,actualStaticType : any,expectedPropagatedType : any,actualPropagatedType : any,hintCode : any) : boolean {
        if (actualStaticType != null && expectedStaticType != null) {
            if (!this._typeSystem.isAssignableTo(actualStaticType,expectedStaticType)) {
                return false;
            }
        }
        let expectedBestType : any = (expectedPropagatedType || expectedStaticType);
        let actualBestType : any = (actualPropagatedType || actualStaticType);
        if (actualBestType != null && expectedBestType != null) {
            if (!this._typeSystem.isAssignableTo(actualBestType,expectedBestType)) {
                this._errorReporter.reportTypeErrorForNode(hintCode,expression,new core.DartList.literal(actualBestType,expectedBestType));
                return true;
            }
        }
        return false;
    }
    _checkForArgumentTypeNotAssignableForArgument(argument : any) : boolean {
        if (op(Op.EQUALS,argument,null)) {
            return false;
        }
        let staticParameterElement : any = argument.staticParameterElement;
        let staticParameterType : any = ((t)=>(!!t)?t.type:null)(staticParameterElement);
        let propagatedParameterElement : any = argument.propagatedParameterElement;
        let propagatedParameterType : any = ((t)=>(!!t)?t.type:null)(propagatedParameterElement);
        return this._checkForArgumentTypeNotAssignableWithExpectedTypes(argument,staticParameterType,propagatedParameterType,HintCode.ARGUMENT_TYPE_NOT_ASSIGNABLE);
    }
    _checkForArgumentTypeNotAssignableWithExpectedTypes(expression : any,expectedStaticType : any,expectedPropagatedType : any,errorCode : any) : boolean {
        return this._checkForArgumentTypeNotAssignable(expression,expectedStaticType,expression.staticType,expectedPropagatedType,expression.propagatedType,errorCode);
    }
    _checkForArgumentTypesNotAssignableInList(argumentList : any) : boolean {
        if (op(Op.EQUALS,argumentList,null)) {
            return false;
        }
        let problemReported : boolean = false;
        for(let argument of argumentList.arguments) {
            if (this._checkForArgumentTypeNotAssignableForArgument(argument)) {
                problemReported = true;
            }
        }
        return problemReported;
    }
    _checkForCanBeNullAfterNullAware(target : any,operator : any,propertyName : any,methodName : any) : void {
        if (op(Op.EQUALS,((t)=>(!!t)?t.type:null)(operator),TokenType.QUESTION_PERIOD)) {
            return;
        }
        var isNullTypeMember : () => boolean = () : boolean =>  {
            if (propertyName != null) {
                let name : string = propertyName.name;
                return this._nullType.lookUpGetter(name,this._currentLibrary) != null;
            }
            if (methodName != null) {
                let name : string = methodName.name;
                return this._nullType.lookUpMethod(name,this._currentLibrary) != null;
            }
            return false;
        };
        target = ((t)=>(!!t)?t.unParenthesized:null)(target);
        if (is(target, any)) {
            if (op(Op.EQUALS,((t)=>(!!t)?t.type:null)(target.operator),TokenType.QUESTION_PERIOD) && !isNullTypeMember()) {
                this._errorReporter.reportErrorForNode(HintCode.CAN_BE_NULL_AFTER_NULL_AWARE,target);
            }
        }else if (is(target, any)) {
            if (op(Op.EQUALS,target.operator.type,TokenType.QUESTION_PERIOD) && !isNullTypeMember()) {
                this._errorReporter.reportErrorForNode(HintCode.CAN_BE_NULL_AFTER_NULL_AWARE,target);
            }
        }
    }
    _checkForDeprecatedMemberUse(element : any,node : any) : void {
        var isDeprecated : (element : any) => boolean = (element : any) : boolean =>  {
            if (op(Op.EQUALS,element,null)) {
                return false;
            }else if (is(element, any) && element.isSynthetic) {
                let variable : any = element.variable;
                if (op(Op.EQUALS,variable,null)) {
                    return false;
                }
                return variable.isDeprecated;
            }
            return element.isDeprecated;
        };
        if (!this.inDeprecatedMember && isDeprecated(element)) {
            let displayName : string = element.displayName;
            if (is(element, any)) {
                displayName = element.enclosingElement.displayName;
                if (!element.displayName.isEmpty) {
                    displayName = `${displayName}.${element.displayName}`;
                }
            }else if (displayName == FunctionElement.CALL_METHOD_NAME && is(node, any) && is(node.staticInvokeType, any)) {
                displayName = `${resolutionMap.staticInvokeTypeForInvocationExpression(node).displayName}.${element.displayName}`;
            }
            this._errorReporter.reportErrorForNode(HintCode.DEPRECATED_MEMBER_USE,node,new core.DartList.literal(displayName));
        }
    }
    _checkForDeprecatedMemberUseAtIdentifier(identifier : any) : void {
        if (identifier.inDeclarationContext()) {
            return;
        }
        let parent : any = identifier.parent;
        if ((is(parent, any) && core.identical(identifier,parent.name)) || (is(parent, any) && core.identical(identifier,parent.returnType)) || (is(parent, any) && core.identical(identifier,parent.constructorName)) || is(parent, any)) {
            return;
        }
        this._checkForDeprecatedMemberUse(identifier.bestElement,identifier);
    }
    _checkForDivisionOptimizationHint(node : any) : boolean {
        if (node.operator.type != TokenType.SLASH) {
            return false;
        }
        let methodElement : any = node.bestElement;
        if (op(Op.EQUALS,methodElement,null)) {
            return false;
        }
        let libraryElement : any = methodElement.library;
        if (libraryElement != null && !libraryElement.isDartCore) {
            return false;
        }
        let parent : any = node.parent;
        if (is(parent, any)) {
            let parenthesizedExpression : any = BestPracticesVerifier._wrapParenthesizedExpression(parent);
            let grandParent : any = parenthesizedExpression.parent;
            if (is(grandParent, any)) {
                if (BestPracticesVerifier._TO_INT_METHOD_NAME == grandParent.methodName.name && grandParent.argumentList.arguments.isEmpty) {
                    this._errorReporter.reportErrorForNode(HintCode.DIVISION_OPTIMIZATION,grandParent);
                    return true;
                }
            }
        }
        return false;
    }
    _checkForImmutable(node : any) : void {
        var isImmutable : (element : any) => boolean = (element : any) : boolean =>  {
            for(let annotation of element.metadata) {
                if (annotation.isImmutable) {
                    return true;
                }
            }
            return false;
        };
        var isOrInheritsImmutable : (element : any,visited : core.DartHashSet<any>) => boolean = (element : any,visited : core.DartHashSet<any>) : boolean =>  {
            if (visited.add(element)) {
                if (isImmutable(element)) {
                    return true;
                }
                for(let interface of element.mixins) {
                    if (isOrInheritsImmutable(interface.element,visited)) {
                        return true;
                    }
                }
                for(let mixin of element.interfaces) {
                    if (isOrInheritsImmutable(mixin.element,visited)) {
                        return true;
                    }
                }
                if (element.supertype != null) {
                    return isOrInheritsImmutable(element.supertype.element,visited);
                }
            }
            return false;
        };
        var hasNonFinalInstanceField : (element : any) => boolean = (element : any) : boolean =>  {
            for(let field of element.fields) {
                if (!field.isSynthetic && !field.isFinal && !field.isStatic) {
                    return true;
                }
            }
            return false;
        };
        var hasOrInheritsNonFinalInstanceField : (element : any,visited : core.DartHashSet<any>) => boolean = (element : any,visited : core.DartHashSet<any>) : boolean =>  {
            if (visited.add(element)) {
                if (hasNonFinalInstanceField(element)) {
                    return true;
                }
                for(let mixin of element.mixins) {
                    if (hasNonFinalInstanceField(mixin.element)) {
                        return true;
                    }
                }
                if (element.supertype != null) {
                    return hasOrInheritsNonFinalInstanceField(element.supertype.element,visited);
                }
            }
            return false;
        };
        let element : any = node.element;
        if (isOrInheritsImmutable(element,new core.DartHashSet<any>()) && hasOrInheritsNonFinalInstanceField(element,new core.DartHashSet<any>())) {
            this._errorReporter.reportErrorForNode(HintCode.MUST_BE_IMMUTABLE,node.name);
        }
    }
    _checkForInvalidAssignment(lhs : any,rhs : any) : boolean {
        if (op(Op.EQUALS,lhs,null) || op(Op.EQUALS,rhs,null)) {
            return false;
        }
        let leftVariableElement : any = ErrorVerifier.getVariableElement(lhs);
        let leftType : any = (op(Op.EQUALS,leftVariableElement,null)) ? ErrorVerifier.getStaticType(lhs) : leftVariableElement.type;
        let staticRightType : any = ErrorVerifier.getStaticType(rhs);
        if (!this._typeSystem.isAssignableTo(staticRightType,leftType)) {
            return false;
        }
        let bestRightType : any = rhs.bestType;
        if (leftType != null && bestRightType != null) {
            if (!this._typeSystem.isAssignableTo(bestRightType,leftType)) {
                this._errorReporter.reportTypeErrorForNode(HintCode.INVALID_ASSIGNMENT,rhs,new core.DartList.literal(bestRightType,leftType));
                return true;
            }
        }
        return false;
    }
    _checkForInvalidFactory(decl : any) : void {
        let returnType : any = ((t)=>(!!t)?t.type:null)(decl.returnType);
        if (is(returnType, any)) {
            this._errorReporter.reportErrorForNode(HintCode.INVALID_FACTORY_METHOD_DECL,decl.name,new core.DartList.literal(decl.name.toString()));
            return;
        }
        let body : any = decl.body;
        if (is(body, any)) {
            return;
        }
        var factoryExpression : (expression : any) => boolean = (expression : any) : boolean =>  {
            return is(expression, any) || is(expression, any);
        };
        if (is(body, any) && factoryExpression(body.expression)) {
            return;
        }else if (is(body, any)) {
            let statements : any = body.block.statements;
            if (statements.isNotEmpty) {
                let last : any = statements.last;
                if (is(last, any) && factoryExpression(last.expression)) {
                    return;
                }
            }
        }
        this._errorReporter.reportErrorForNode(HintCode.INVALID_FACTORY_METHOD_IMPL,decl.name,new core.DartList.literal(decl.name.toString()));
    }
    _checkForInvalidProtectedMemberAccess(identifier : any) : void {
        if (identifier.inDeclarationContext()) {
            return;
        }
        var isProtected : (element : any) => boolean = (element : any) : boolean =>  {
            if (is(element, any) && is(element.enclosingElement, any) && (element.isProtected || element.variable.isProtected)) {
                return true;
            }
            if (is(element, any) && is(element.enclosingElement, any) && element.isProtected) {
                return true;
            }
            return false;
        };
        var inCommentReference : (identifier : any) => boolean = (identifier : any) : boolean =>  {
            return identifier.getAncestor((node : any) =>  {
                return is(node, any);
            }) != null;
        };
        var inCurrentLibrary : (element : any) => boolean = (element : any) : boolean =>  {
            return op(Op.EQUALS,element.library,this._currentLibrary);
        };
        let element : any = identifier.bestElement;
        if (isProtected(element) && !inCurrentLibrary(element) && !inCommentReference(identifier)) {
            let definingClass : any = element.enclosingElement;
            let accessingClass : any = identifier.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (op(Op.EQUALS,accessingClass,null) || !this._hasTypeOrSuperType(accessingClass.element,definingClass.type)) {
                this._errorReporter.reportErrorForNode(HintCode.INVALID_USE_OF_PROTECTED_MEMBER,identifier,new core.DartList.literal(identifier.name.toString(),definingClass.name));
            }
        }
    }
    _checkForLoadLibraryFunction(node : any,importElement : any) : boolean {
        let importedLibrary : any = importElement.importedLibrary;
        if (op(Op.EQUALS,importedLibrary,null)) {
            return false;
        }
        if (importedLibrary.hasLoadLibraryFunction) {
            this._errorReporter.reportErrorForNode(HintCode.IMPORT_DEFERRED_LIBRARY_WITH_LOAD_FUNCTION,node,new core.DartList.literal(importedLibrary.name));
            return true;
        }
        return false;
    }
    _checkForMissingReturn(returnType : any,body : any) : void {
        if (op(Op.EQUALS,returnType,null) || op(Op.EQUALS,body,null)) {
            return;
        }
        if (is(body, any)) {
            if (body.isGenerator) {
                return;
            }
            let returnTypeType : any = returnType.type;
            if (op(Op.EQUALS,returnTypeType,null) || returnTypeType.isVoid) {
                return;
            }
            if (body.isAsynchronous) {
                if (returnTypeType.isDynamic) {
                    return;
                }
                if (is(returnTypeType, any) && returnTypeType.isDartAsyncFuture) {
                    let futureArgument : any = op(Op.INDEX,returnTypeType.typeArguments,0);
                    if (futureArgument.isDynamic || futureArgument.isDartCoreNull || futureArgument.isObject) {
                        return;
                    }
                }
            }
            if (!ExitDetector.exits(body)) {
                this._errorReporter.reportErrorForNode(HintCode.MISSING_RETURN,returnType,new core.DartList.literal(returnTypeType.displayName));
            }
        }
    }
    _checkForPossibleNullCondition(condition : any) : void {
        condition = ((t)=>(!!t)?t.unParenthesized:null)(condition);
        if (is(condition, any)) {
            this._checkForPossibleNullConditionInBinaryExpression(condition);
        }else if (is(condition, any)) {
            this._checkForPossibleNullConditionInPrefixExpression(condition);
        }else {
            this._checkForPossibleNullConditionInSimpleExpression(condition);
        }
    }
    _checkForPossibleNullConditionInBinaryExpression(condition : any) : void {
        let type : any = ((t)=>(!!t)?t.type:null)(condition.operator);
        if (op(Op.EQUALS,type,TokenType.AMPERSAND_AMPERSAND) || op(Op.EQUALS,type,TokenType.BAR_BAR)) {
            this._checkForPossibleNullCondition(condition.leftOperand);
            this._checkForPossibleNullCondition(condition.rightOperand);
        }
    }
    _checkForPossibleNullConditionInPrefixExpression(condition : any) : void {
        if (op(Op.EQUALS,((t)=>(!!t)?t.type:null)(condition.operator),TokenType.BANG)) {
            this._checkForPossibleNullCondition(condition.operand);
        }
    }
    _checkForPossibleNullConditionInSimpleExpression(condition : any) : void {
        if (is(condition, any)) {
            if (op(Op.EQUALS,((t)=>(!!t)?t.type:null)(condition.operator),TokenType.QUESTION_PERIOD)) {
                this._errorReporter.reportErrorForNode(HintCode.NULL_AWARE_IN_CONDITION,condition);
            }
        }else if (is(condition, any)) {
            if (op(Op.EQUALS,((t)=>(!!t)?t.type:null)(condition.operator),TokenType.QUESTION_PERIOD)) {
                this._errorReporter.reportErrorForNode(HintCode.NULL_AWARE_IN_CONDITION,condition);
            }
        }
    }
    _checkForUnnecessaryCast(node : any) : boolean {
        let parent : any = node.parent;
        if (is(parent, any) && (op(Op.EQUALS,node,parent.thenExpression) || op(Op.EQUALS,node,parent.elseExpression))) {
            let thenExpression : any = parent.thenExpression;
            let thenType : any;
            if (is(thenExpression, any)) {
                thenType = thenExpression.expression.staticType;
            }else {
                thenType = thenExpression.staticType;
            }
            let elseExpression : any = parent.elseExpression;
            let elseType : any;
            if (is(elseExpression, any)) {
                elseType = elseExpression.expression.staticType;
            }else {
                elseType = elseExpression.staticType;
            }
            if (thenType != null && elseType != null && !thenType.isDynamic && !elseType.isDynamic && !thenType.isMoreSpecificThan(elseType) && !elseType.isMoreSpecificThan(thenType)) {
                return false;
            }
        }
        let lhsType : any = node.expression.staticType;
        let rhsType : any = node.type.type;
        if (lhsType != null && rhsType != null && !lhsType.isDynamic && !rhsType.isDynamic && lhsType.isMoreSpecificThan(rhsType)) {
            this._errorReporter.reportErrorForNode(HintCode.UNNECESSARY_CAST,node);
            return true;
        }
        return false;
    }
    _checkForUnnecessaryNoSuchMethod(node : any) : boolean {
        if (node.name.name != FunctionElement.NO_SUCH_METHOD_METHOD_NAME) {
            return false;
        }
        var isNonObjectNoSuchMethodInvocation : (invocation : any) => boolean = (invocation : any) : boolean =>  {
            if (is(invocation, any) && is(invocation.target, any) && op(Op.EQUALS,invocation.argumentList.arguments.length,1)) {
                let name : any = invocation.methodName;
                if (op(Op.EQUALS,name.name,FunctionElement.NO_SUCH_METHOD_METHOD_NAME)) {
                    let methodElement : any = name.staticElement;
                    let classElement : any = ((t)=>(!!t)?t.enclosingElement:null)(methodElement);
                    return is(methodElement, any) && is(classElement, any) && !classElement.type.isObject;
                }
            }
            return false;
        };
        let body : any = node.body;
        if (is(body, any)) {
            if (isNonObjectNoSuchMethodInvocation(body.expression)) {
                this._errorReporter.reportErrorForNode(HintCode.UNNECESSARY_NO_SUCH_METHOD,node);
                return true;
            }
        }else if (is(body, any)) {
            let statements : core.DartList<any> = body.block.statements;
            if (statements.length == 1) {
                let returnStatement : any = statements.first;
                if (is(returnStatement, any) && isNonObjectNoSuchMethodInvocation(returnStatement.expression)) {
                    this._errorReporter.reportErrorForNode(HintCode.UNNECESSARY_NO_SUCH_METHOD,node);
                    return true;
                }
            }
        }
        return false;
    }
    _checkForUseOfVoidResult(expression : any) : void {
        if (is(expression, any)) {
            if (core.identical(expression.staticType,VoidTypeImpl.instance)) {
                let methodName : any = expression.methodName;
                this._errorReporter.reportErrorForNode(HintCode.USE_OF_VOID_RESULT,methodName,new core.DartList.literal(methodName.name));
            }
        }
    }
    _hasTypeOrSuperType(element : any,type : any) : boolean {
        if (op(Op.EQUALS,element,null)) {
            return false;
        }
        let typeElement : any = type.element;
        return op(Op.EQUALS,element,typeElement) || element.allSupertypes.any((t : any) =>  {
            return op(Op.EQUALS,t.element,typeElement);
        });
    }
    static _wrapParenthesizedExpression(parenthesizedExpression : any) : any {
        let parent : any = parenthesizedExpression.parent;
        if (is(parent, any)) {
            return BestPracticesVerifier._wrapParenthesizedExpression(parent);
        }
        return parenthesizedExpression;
    }
}

export namespace _ResolverVisitor_isVariableAccessedInClosure {
    export type Constructors = '_ResolverVisitor_isVariableAccessedInClosure';
    export type Interface = Omit<_ResolverVisitor_isVariableAccessedInClosure, Constructors>;
}
@DartClass
export class _ResolverVisitor_isVariableAccessedInClosure extends any {
    variable : any;

    result : boolean;

    _inClosure : boolean;

    constructor(variable : any) {
    }
    @defaultConstructor
    _ResolverVisitor_isVariableAccessedInClosure(variable : any) {
        this.result = false;
        this._inClosure = false;
        this.variable = variable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        let inClosure : boolean = this._inClosure;
        try {
            this._inClosure = true;
            return super.visitFunctionExpression(node);
        } finally {
            this._inClosure = inClosure;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        if (this.result) {
            return null;
        }
        if (this._inClosure && core.identical(node.staticElement,this.variable)) {
            this.result = true;
        }
        return null;
    }
}

export namespace OverrideVerifier {
    export type Constructors = 'OverrideVerifier';
    export type Interface = Omit<OverrideVerifier, Constructors>;
}
@DartClass
export class OverrideVerifier extends any {
    _errorReporter : any;

    _manager : any;

    constructor(_errorReporter : any,_manager : any) {
    }
    @defaultConstructor
    OverrideVerifier(_errorReporter : any,_manager : any) {
        this._errorReporter = _errorReporter;
        this._manager = _manager;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) {
        for(let field of node.fields.variables) {
            let fieldElement : any = field.element;
            if (is(fieldElement, any) && this._isOverride(fieldElement)) {
                let getter : any = fieldElement.getter;
                let setter : any = fieldElement.setter;
                if (!(getter != null && this._getOverriddenMember(getter) != null || setter != null && this._getOverriddenMember(setter) != null)) {
                    this._errorReporter.reportErrorForNode(HintCode.OVERRIDE_ON_NON_OVERRIDING_FIELD,field.name);
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) {
        let element : any = node.element;
        if (this._isOverride(element)) {
            if (op(Op.EQUALS,this._getOverriddenMember(element),null)) {
                if (is(element, any)) {
                    this._errorReporter.reportErrorForNode(HintCode.OVERRIDE_ON_NON_OVERRIDING_METHOD,node.name);
                }else if (is(element, any)) {
                    if (element.isGetter) {
                        this._errorReporter.reportErrorForNode(HintCode.OVERRIDE_ON_NON_OVERRIDING_GETTER,node.name);
                    }else {
                        this._errorReporter.reportErrorForNode(HintCode.OVERRIDE_ON_NON_OVERRIDING_SETTER,node.name);
                    }
                }
            }
        }
    }
    _getOverriddenMember(member : any) : any {
        let library : any = member.library;
        if (op(Op.EQUALS,library,null)) {
            return null;
        }
        let classElement : any = member.getAncestor((element : any) =>  {
            return is(element, any);
        });
        if (op(Op.EQUALS,classElement,null)) {
            return null;
        }
        return this._manager.lookupInheritance(classElement,member.name);
    }
    _isOverride(element : any) : boolean {
        return element != null && element.isOverride;
    }
}

export namespace _ConstantVerifier_validateInitializerExpression {
    export type Constructors = '_ConstantVerifier_validateInitializerExpression';
    export type Interface = Omit<_ConstantVerifier_validateInitializerExpression, Constructors>;
}
@DartClass
export class _ConstantVerifier_validateInitializerExpression extends any {
    verifier : ConstantVerifier;

    parameterElements : core.DartList<any>;

    _typeSystem : any;

    constructor(typeProvider : TypeProvider,errorReporter : any,verifier : ConstantVerifier,parameterElements : core.DartList<any>,declaredVariables : any,_namedArguments? : {typeSystem? : any}) {
    }
    @defaultConstructor
    _ConstantVerifier_validateInitializerExpression(typeProvider : TypeProvider,errorReporter : any,verifier : ConstantVerifier,parameterElements : core.DartList<any>,declaredVariables : any,_namedArguments? : {typeSystem? : any}) {
        let {typeSystem} = Object.assign({
        }, _namedArguments );
        this._typeSystem = (typeSystem || new bare.createInstance(any,null,typeProvider));
        super.DartObject(new bare.createInstance(any,null,typeProvider,declaredVariables,{
            typeSystem : typeSystem}),errorReporter);
        this.verifier = verifier;
        this.parameterElements = parameterElements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : any {
        let element : any = node.staticElement;
        let length : number = this.parameterElements.length;
        for(let i : number = 0; i < length; i++){
            let parameterElement : any = this.parameterElements[i];
            if (core.identical(parameterElement,element) && parameterElement != null) {
                let type : any = parameterElement.type;
                if (type != null) {
                    if (type.isDynamic) {
                        return new bare.createInstance(any,null,this.verifier._typeProvider.objectType,DynamicState.DYNAMIC_STATE);
                    }else if (this._typeSystem.isSubtypeOf(type,this.verifier._boolType)) {
                        return new bare.createInstance(any,null,this.verifier._typeProvider.boolType,BoolState.UNKNOWN_VALUE);
                    }else if (this._typeSystem.isSubtypeOf(type,this.verifier._typeProvider.doubleType)) {
                        return new bare.createInstance(any,null,this.verifier._typeProvider.doubleType,DoubleState.UNKNOWN_VALUE);
                    }else if (this._typeSystem.isSubtypeOf(type,this.verifier._intType)) {
                        return new bare.createInstance(any,null,this.verifier._typeProvider.intType,IntState.UNKNOWN_VALUE);
                    }else if (this._typeSystem.isSubtypeOf(type,this.verifier._numType)) {
                        return new bare.createInstance(any,null,this.verifier._typeProvider.numType,NumState.UNKNOWN_VALUE);
                    }else if (this._typeSystem.isSubtypeOf(type,this.verifier._stringType)) {
                        return new bare.createInstance(any,null,this.verifier._typeProvider.stringType,StringState.UNKNOWN_VALUE);
                    }
                }
                return new bare.createInstance(any,null,is(type, any) ? type : this.verifier._typeProvider.objectType,GenericState.UNKNOWN_VALUE);
            }
        }
        return super.visitSimpleIdentifier(node);
    }
}

export namespace PubVerifier {
    export type Constructors = 'PubVerifier';
    export type Interface = Omit<PubVerifier, Constructors>;
}
@DartClass
export class PubVerifier extends any {
    _context : any;

    _errorReporter : any;

    constructor(_context : any,_errorReporter : any) {
    }
    @defaultConstructor
    PubVerifier(_context : any,_errorReporter : any) {
        this._context = _context;
        this._errorReporter = _errorReporter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(directive : any) : core.DartObject {
        return null;
    }
}

export namespace RedirectingConstructorKind {
    export type Constructors = 'RedirectingConstructorKind';
    export type Interface = Omit<RedirectingConstructorKind, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class RedirectingConstructorKind implements core.DartComparable.Interface<RedirectingConstructorKind> {
    private static __$CONST : RedirectingConstructorKind;
    static get CONST() : RedirectingConstructorKind { 
        if (this.__$CONST===undefined) {
            this.__$CONST = new RedirectingConstructorKind('CONST',0);
        }
        return this.__$CONST;
    }

    private static __$NORMAL : RedirectingConstructorKind;
    static get NORMAL() : RedirectingConstructorKind { 
        if (this.__$NORMAL===undefined) {
            this.__$NORMAL = new RedirectingConstructorKind('NORMAL',1);
        }
        return this.__$NORMAL;
    }

    private static __$values : core.DartList<RedirectingConstructorKind>;
    static get values() : core.DartList<RedirectingConstructorKind> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(RedirectingConstructorKind.CONST,RedirectingConstructorKind.NORMAL);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    RedirectingConstructorKind(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : RedirectingConstructorKind) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace ResolverErrorCode {
    export type Constructors = 'ResolverErrorCode';
    export type Interface = Omit<ResolverErrorCode, Constructors>;
}
@DartClass
export class ResolverErrorCode extends any {
    private static __$BREAK_LABEL_ON_SWITCH_MEMBER : ResolverErrorCode;
    static get BREAK_LABEL_ON_SWITCH_MEMBER() : ResolverErrorCode { 
        if (this.__$BREAK_LABEL_ON_SWITCH_MEMBER===undefined) {
            this.__$BREAK_LABEL_ON_SWITCH_MEMBER = new ResolverErrorCode('BREAK_LABEL_ON_SWITCH_MEMBER',"Break label resolves to case or default statement");
        }
        return this.__$BREAK_LABEL_ON_SWITCH_MEMBER;
    }

    private static __$CONTINUE_LABEL_ON_SWITCH : ResolverErrorCode;
    static get CONTINUE_LABEL_ON_SWITCH() : ResolverErrorCode { 
        if (this.__$CONTINUE_LABEL_ON_SWITCH===undefined) {
            this.__$CONTINUE_LABEL_ON_SWITCH = new ResolverErrorCode('CONTINUE_LABEL_ON_SWITCH',"A continue label resolves to switch, must be loop or switch member");
        }
        return this.__$CONTINUE_LABEL_ON_SWITCH;
    }

    private static __$MISSING_LIBRARY_DIRECTIVE_WITH_PART : ResolverErrorCode;
    static get MISSING_LIBRARY_DIRECTIVE_WITH_PART() : ResolverErrorCode { 
        if (this.__$MISSING_LIBRARY_DIRECTIVE_WITH_PART===undefined) {
            this.__$MISSING_LIBRARY_DIRECTIVE_WITH_PART = new ResolverErrorCode('MISSING_LIBRARY_DIRECTIVE_WITH_PART',"Libraries that have parts must have a library directive");
        }
        return this.__$MISSING_LIBRARY_DIRECTIVE_WITH_PART;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    ResolverErrorCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return this.type.severity;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.COMPILE_TIME_ERROR;
    }
}

export namespace TypeParameterBoundsResolver {
    export type Constructors = 'TypeParameterBoundsResolver';
    export type Interface = Omit<TypeParameterBoundsResolver, Constructors>;
}
@DartClass
export class TypeParameterBoundsResolver {
    typeProvider : TypeProvider;

    library : any;

    source : any;

    errorListener : any;

    libraryScope : any;

    typeNameResolver : TypeNameResolver;

    constructor(typeProvider : TypeProvider,library : any,source : any,errorListener : any) {
    }
    @defaultConstructor
    TypeParameterBoundsResolver(typeProvider : TypeProvider,library : any,source : any,errorListener : any) {
        this.libraryScope = null;
        this.typeNameResolver = null;
        this.typeProvider = typeProvider;
        this.library = library;
        this.source = source;
        this.errorListener = errorListener;
    }
    resolveTypeBounds(unit : any) : void {
        for(let unitMember of unit.declarations) {
            if (is(unitMember, any)) {
                this._resolveTypeParameters(unitMember.typeParameters,() =>  {
                    return new bare.createInstance(any,null,this.libraryScope,unitMember.element);
                });
            }else if (is(unitMember, any)) {
                this._resolveTypeParameters(unitMember.typeParameters,() =>  {
                    return new bare.createInstance(any,null,this.libraryScope,unitMember.element);
                });
            }else if (is(unitMember, any)) {
                this._resolveTypeParameters(unitMember.typeParameters,() =>  {
                    return new bare.createInstance(any,null,this.libraryScope,unitMember.element);
                });
            }
        }
    }
    _resolveTypeName(type : any) : void {
        if (is(type, any)) {
            ((_340_)=>(!!_340_)?_340_.forEach(this._resolveTypeName.bind(this)):null)(((t)=>(!!t)?t.arguments:null)(type.typeArguments));
            this.typeNameResolver.resolveTypeName(type);
        }else {
            throw new core.ArgumentError(`Cannot resolve a ${type.runtimeType}`);
        }
    }
    _resolveTypeParameters(typeParameters : any,createTypeParametersScope : () => any) : void {
        if (typeParameters != null) {
            let typeParametersScope : any = null;
            for(let typeParameter of typeParameters.typeParameters) {
                let bound : any = typeParameter.bound;
                if (bound != null) {
                    let typeParameterElement : any = typeParameter.name.staticElement;
                    if (is(typeParameterElement, any)) {
                        if (LibraryElementImpl.hasResolutionCapability(this.library,LibraryResolutionCapability.resolvedTypeNames)) {
                            if (is(bound, any)) {
                                bound.type = typeParameterElement.bound;
                            }else {
                                throw new core.ArgumentError(`Cannot resolve a ${bound.runtimeType}`);
                            }
                        }else {
                            this.libraryScope = ( this.libraryScope ) || ( new bare.createInstance(any,null,this.library) );
                            typeParametersScope = ( typeParametersScope ) || ( createTypeParametersScope() );
                            this.typeNameResolver = ( this.typeNameResolver ) || ( new TypeNameResolver(new bare.createInstance(any,null,this.typeProvider),this.typeProvider,this.library,this.source,this.errorListener) );
                            this.typeNameResolver.nameScope = typeParametersScope;
                            this._resolveTypeName(bound);
                            typeParameterElement.bound = bound.type;
                        }
                    }
                }
            }
        }
    }
}

export namespace ScopedVisitor {
    export type Constructors = 'ScopedVisitor';
    export type Interface = Omit<ScopedVisitor, Constructors>;
}
@DartClass
export class ScopedVisitor extends any {
    definingLibrary : any;

    source : any;

    typeProvider : TypeProvider;

    errorReporter : any;

    nameScope : any;

    _implicitLabelScope : any;

    labelScope : any;

    enclosingClass : any;

    constructor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
    }
    @defaultConstructor
    ScopedVisitor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        let {nameScope} = Object.assign({
        }, _namedArguments );
        this._implicitLabelScope = ImplicitLabelScope.ROOT;
        this.source = source;
        this.errorReporter = new bare.createInstance(any,null,errorListener,source);
        this.definingLibrary = definingLibrary;
        this.typeProvider = typeProvider;
        if (op(Op.EQUALS,nameScope,null)) {
            this.nameScope = new bare.createInstance(any,null,this.definingLibrary);
        }else {
            this.nameScope = nameScope;
        }
    }
    get implicitLabelScope() : any {
        return this._implicitLabelScope;
    }
    popNameScope() : any {
        this.nameScope = this.nameScope.enclosingScope;
        return this.nameScope;
    }
    pushNameScope() : any {
        let newScope : any = new bare.createInstance(any,null,this.nameScope);
        this.nameScope = newScope;
        return this.nameScope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : core.DartObject {
        let outerScope : any = this.nameScope;
        try {
            let enclosedScope : any = new bare.createInstance(any,null,this.nameScope,node);
            this.nameScope = enclosedScope;
            super.visitBlock(node);
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        let implicitOuterScope : any = this._implicitLabelScope;
        try {
            this._implicitLabelScope = ImplicitLabelScope.ROOT;
            super.visitBlockFunctionBody(node);
        } finally {
            this._implicitLabelScope = implicitOuterScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        let exception : any = node.exceptionParameter;
        if (exception != null) {
            let outerScope : any = this.nameScope;
            try {
                this.nameScope = new bare.createInstance(any,null,this.nameScope);
                this.nameScope.define(exception.staticElement);
                let stackTrace : any = node.stackTraceParameter;
                if (stackTrace != null) {
                    this.nameScope.define(stackTrace.staticElement);
                }
                super.visitCatchClause(node);
            } finally {
                this.nameScope = outerScope;
            }
        }else {
            super.visitCatchClause(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        let classElement : any = node.element;
        let outerScope : any = this.nameScope;
        try {
            if (op(Op.EQUALS,classElement,null)) {
                AnalysisEngine.instance.logger.logInformation(`Missing element for class declaration ${node.name.name} in ${this.definingLibrary.source.fullName}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
                super.visitClassDeclaration(node);
            }else {
                let outerClass : any = this.enclosingClass;
                try {
                    this.enclosingClass = node.element;
                    this.nameScope = new bare.createInstance(any,null,this.nameScope,classElement);
                    this.visitClassDeclarationInScope(node);
                    this.nameScope = new bare.createInstance(any,null,this.nameScope,classElement);
                    this.visitClassMembersInScope(node);
                } finally {
                    this.enclosingClass = outerClass;
                }
            }
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    visitClassDeclarationInScope(node : any) : void {
        ((_316_)=>(!!_316_)?_316_.accept(this):null)(node.name);
        ((_317_)=>(!!_317_)?_317_.accept(this):null)(node.typeParameters);
        ((_318_)=>(!!_318_)?_318_.accept(this):null)(node.extendsClause);
        ((_319_)=>(!!_319_)?_319_.accept(this):null)(node.withClause);
        ((_320_)=>(!!_320_)?_320_.accept(this):null)(node.implementsClause);
        ((_321_)=>(!!_321_)?_321_.accept(this):null)(node.nativeClause);
    }
    visitClassMembersInScope(node : any) : void {
        ((_322_)=>(!!_322_)?_322_.accept(this):null)(node.documentationComment);
        node.metadata.accept(this);
        node.members.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        let outerScope : any = this.nameScope;
        try {
            let element : any = node.element;
            this.nameScope = new bare.createInstance(any,null,new bare.createInstance(any,null,this.nameScope,element),element);
            super.visitClassTypeAlias(node);
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        let constructorElement : any = node.element;
        if (op(Op.EQUALS,constructorElement,null)) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write("Missing element for constructor ");
            buffer.write(node.returnType.name);
            if (node.name != null) {
                buffer.write(".");
                buffer.write(node.name.name);
            }
            buffer.write(" in ");
            buffer.write(this.definingLibrary.source.fullName);
            AnalysisEngine.instance.logger.logInformation(buffer.toString(),new bare.createInstance(any,null,new bare.createInstance(any,null),null));
        }
        let outerScope : any = this.nameScope;
        try {
            if (constructorElement != null) {
                this.nameScope = new bare.createInstance(any,null,this.nameScope,constructorElement);
            }
            ((_323_)=>(!!_323_)?_323_.accept(this):null)(node.documentationComment);
            node.metadata.accept(this);
            ((_324_)=>(!!_324_)?_324_.accept(this):null)(node.returnType);
            ((_325_)=>(!!_325_)?_325_.accept(this):null)(node.name);
            ((_326_)=>(!!_326_)?_326_.accept(this):null)(node.parameters);
            let functionScope : any = this.nameScope;
            try {
                if (constructorElement != null) {
                    this.nameScope = new bare.createInstance(any,null,this.nameScope,constructorElement);
                }
                node.initializers.accept(this);
            } finally {
                this.nameScope = functionScope;
            }
            ((_327_)=>(!!_327_)?_327_.accept(this):null)(node.redirectedConstructor);
            this.visitConstructorDeclarationInScope(node);
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    visitConstructorDeclarationInScope(node : any) : void {
        ((_328_)=>(!!_328_)?_328_.accept(this):null)(node.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : core.DartObject {
        let element : any = node.element;
        if (element != null) {
            this.nameScope.define(element);
        }
        super.visitDeclaredIdentifier(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : core.DartObject {
        let outerImplicitScope : any = this._implicitLabelScope;
        try {
            this._implicitLabelScope = this._implicitLabelScope.nest(node);
            this.visitStatementInScope(node.body);
            ((_329_)=>(!!_329_)?_329_.accept(this):null)(node.condition);
        } finally {
            this._implicitLabelScope = outerImplicitScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        let classElement : any = node.element;
        let outerScope : any = this.nameScope;
        try {
            if (op(Op.EQUALS,classElement,null)) {
                AnalysisEngine.instance.logger.logInformation(`Missing element for enum declaration ${node.name.name} in ${this.definingLibrary.source.fullName}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
                super.visitEnumDeclaration(node);
            }else {
                let outerClass : any = this.enclosingClass;
                try {
                    this.enclosingClass = node.element;
                    this.nameScope = new bare.createInstance(any,null,this.nameScope,classElement);
                    this.visitEnumMembersInScope(node);
                } finally {
                    this.enclosingClass = outerClass;
                }
            }
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    visitEnumMembersInScope(node : any) : void {
        ((_330_)=>(!!_330_)?_330_.accept(this):null)(node.documentationComment);
        node.metadata.accept(this);
        node.constants.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : core.DartObject {
        let outerNameScope : any = this.nameScope;
        let outerImplicitScope : any = this._implicitLabelScope;
        try {
            this.nameScope = new bare.createInstance(any,null,this.nameScope);
            this._implicitLabelScope = this._implicitLabelScope.nest(node);
            this.visitForEachStatementInScope(node);
        } finally {
            this.nameScope = outerNameScope;
            this._implicitLabelScope = outerImplicitScope;
        }
        return null;
    }
    visitForEachStatementInScope(node : any) : void {
        ((_331_)=>(!!_331_)?_331_.accept(this):null)(node.identifier);
        ((_332_)=>(!!_332_)?_332_.accept(this):null)(node.iterable);
        ((_333_)=>(!!_333_)?_333_.accept(this):null)(node.loopVariable);
        this.visitStatementInScope(node.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFormalParameterList(node : any) : core.DartObject {
        super.visitFormalParameterList(node);
        if (is(this.nameScope, any) && isNot(node.parent, any)) {
            (this.nameScope as any).defineParameters();
        }
        if (is(this.nameScope, any)) {
            (this.nameScope as any).defineParameters();
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        let outerNameScope : any = this.nameScope;
        let outerImplicitScope : any = this._implicitLabelScope;
        try {
            this.nameScope = new bare.createInstance(any,null,this.nameScope);
            this._implicitLabelScope = this._implicitLabelScope.nest(node);
            this.visitForStatementInScope(node);
        } finally {
            this.nameScope = outerNameScope;
            this._implicitLabelScope = outerImplicitScope;
        }
        return null;
    }
    visitForStatementInScope(node : any) : void {
        ((_334_)=>(!!_334_)?_334_.accept(this):null)(node.variables);
        ((_335_)=>(!!_335_)?_335_.accept(this):null)(node.initialization);
        ((_336_)=>(!!_336_)?_336_.accept(this):null)(node.condition);
        node.updaters.accept(this);
        this.visitStatementInScope(node.body);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let functionElement : any = node.element;
        if (functionElement != null && isNot(functionElement.enclosingElement, any)) {
            this.nameScope.define(functionElement);
        }
        let outerScope : any = this.nameScope;
        try {
            if (op(Op.EQUALS,functionElement,null)) {
                AnalysisEngine.instance.logger.logInformation(`Missing element for top-level function ${node.name.name} in ${this.definingLibrary.source.fullName}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
            }else {
                this.nameScope = new bare.createInstance(any,null,this.nameScope,functionElement);
            }
            this.visitFunctionDeclarationInScope(node);
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    visitFunctionDeclarationInScope(node : any) : void {
        super.visitFunctionDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (is(node.parent, any)) {
            super.visitFunctionExpression(node);
        }else {
            let outerScope : any = this.nameScope;
            try {
                let functionElement : any = node.element;
                if (op(Op.EQUALS,functionElement,null)) {
                    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                    buffer.write("Missing element for function ");
                    let parent : any = node.parent;
                    while (parent != null){
                        if (is(parent, any)) {
                            let parentElement : any = parent.element;
                            buffer.write(op(Op.EQUALS,parentElement,null) ? "<unknown> " : `${parentElement.name} `);
                        }
                        parent = parent.parent;
                    }
                    buffer.write("in ");
                    buffer.write(this.definingLibrary.source.fullName);
                    AnalysisEngine.instance.logger.logInformation(buffer.toString(),new bare.createInstance(any,null,new bare.createInstance(any,null),null));
                }else {
                    this.nameScope = new bare.createInstance(any,null,this.nameScope,functionElement);
                }
                super.visitFunctionExpression(node);
            } finally {
                this.nameScope = outerScope;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        let outerScope : any = this.nameScope;
        try {
            this.nameScope = new bare.createInstance(any,null,this.nameScope,node.element);
            this.visitFunctionTypeAliasInScope(node);
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    visitFunctionTypeAliasInScope(node : any) : void {
        super.visitFunctionTypeAlias(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : core.DartObject {
        let outerScope : any = this.nameScope;
        try {
            let parameterElement : any = node.element;
            if (op(Op.EQUALS,parameterElement,null)) {
                AnalysisEngine.instance.logger.logInformation(`Missing element for function typed formal parameter ${node.identifier.name} in ${this.definingLibrary.source.fullName}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
            }else {
                this.nameScope = new bare.createInstance(any,null,this.nameScope);
                let typeParameters : core.DartList<any> = parameterElement.typeParameters;
                let length : number = typeParameters.length;
                for(let i : number = 0; i < length; i++){
                    this.nameScope.define(typeParameters[i]);
                }
            }
            super.visitFunctionTypedFormalParameter(node);
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        let element : any = node.type.element;
        let outerScope : any = this.nameScope;
        try {
            if (op(Op.EQUALS,element,null)) {
                AnalysisEngine.instance.logger.logInformation(`Missing element for generic function type in ${this.definingLibrary.source.fullName}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
                super.visitGenericFunctionType(node);
            }else {
                this.nameScope = new bare.createInstance(any,null,this.nameScope,element);
                super.visitGenericFunctionType(node);
            }
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericTypeAlias(node : any) : core.DartObject {
        let element : any = node.element;
        let outerScope : any = this.nameScope;
        try {
            if (op(Op.EQUALS,element,null)) {
                AnalysisEngine.instance.logger.logInformation(`Missing element for generic function type in ${this.definingLibrary.source.fullName}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
                super.visitGenericTypeAlias(node);
            }else {
                this.nameScope = new bare.createInstance(any,null,this.nameScope,element);
                super.visitGenericTypeAlias(node);
            }
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : core.DartObject {
        ((_337_)=>(!!_337_)?_337_.accept(this):null)(node.condition);
        this.visitStatementInScope(node.thenStatement);
        this.visitStatementInScope(node.elseStatement);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabeledStatement(node : any) : core.DartObject {
        let outerScope : any = this._addScopesFor(node.labels,node.unlabeled);
        try {
            super.visitLabeledStatement(node);
        } finally {
            this.labelScope = outerScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        let outerScope : any = this.nameScope;
        try {
            let methodElement : any = node.element;
            if (op(Op.EQUALS,methodElement,null)) {
                AnalysisEngine.instance.logger.logInformation(`Missing element for method ${node.name.name} in ${this.definingLibrary.source.fullName}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
            }else {
                this.nameScope = new bare.createInstance(any,null,this.nameScope,methodElement);
            }
            this.visitMethodDeclarationInScope(node);
        } finally {
            this.nameScope = outerScope;
        }
        return null;
    }
    visitMethodDeclarationInScope(node : any) : void {
        super.visitMethodDeclaration(node);
    }
    visitStatementInScope(node : any) : void {
        if (is(node, any)) {
            this.visitBlock(node);
        }else if (node != null) {
            let outerNameScope : any = this.nameScope;
            try {
                this.nameScope = new bare.createInstance(any,null,this.nameScope);
                node.accept(this);
            } finally {
                this.nameScope = outerNameScope;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        node.expression.accept(this);
        let outerNameScope : any = this.nameScope;
        try {
            this.nameScope = new bare.createInstance(any,null,this.nameScope);
            node.statements.accept(this);
        } finally {
            this.nameScope = outerNameScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        let outerNameScope : any = this.nameScope;
        try {
            this.nameScope = new bare.createInstance(any,null,this.nameScope);
            node.statements.accept(this);
        } finally {
            this.nameScope = outerNameScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : core.DartObject {
        let outerScope : any = this.labelScope;
        let outerImplicitScope : any = this._implicitLabelScope;
        try {
            this._implicitLabelScope = this._implicitLabelScope.nest(node);
            for(let member of node.members) {
                for(let label of member.labels) {
                    let labelName : any = label.label;
                    let labelElement : any = labelName.staticElement as any;
                    this.labelScope = new bare.createInstance(any,null,this.labelScope,labelName.name,member,labelElement);
                }
            }
            super.visitSwitchStatement(node);
        } finally {
            this.labelScope = outerScope;
            this._implicitLabelScope = outerImplicitScope;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        super.visitVariableDeclaration(node);
        if (isNot(node.parent.parent, any) && isNot(node.parent.parent, any)) {
            let element : any = node.element;
            if (element != null) {
                this.nameScope.define(element);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        ((_338_)=>(!!_338_)?_338_.accept(this):null)(node.condition);
        let outerImplicitScope : any = this._implicitLabelScope;
        try {
            this._implicitLabelScope = this._implicitLabelScope.nest(node);
            this.visitStatementInScope(node.body);
        } finally {
            this._implicitLabelScope = outerImplicitScope;
        }
        return null;
    }
    _addScopesFor(labels : any,node : any) : any {
        let outerScope : any = this.labelScope;
        for(let label of labels) {
            let labelNameNode : any = label.label;
            let labelName : string = labelNameNode.name;
            let labelElement : any = labelNameNode.staticElement as any;
            this.labelScope = new bare.createInstance(any,null,this.labelScope,labelName,node,labelElement);
        }
        return outerScope;
    }
}

export namespace SubtypeManager {
    export type Constructors = 'SubtypeManager';
    export type Interface = Omit<SubtypeManager, Constructors>;
}
@DartClass
export class SubtypeManager {
    _subtypeMap : core.DartHashMap<any,core.DartHashSet<any>>;

    _visitedLibraries : core.DartHashSet<any>;

    computeAllSubtypes(classElement : any) : core.DartHashSet<any> {
        this._computeSubtypesInLibrary(classElement.library);
        let allSubtypes : core.DartHashSet<any> = new core.DartHashSet<any>();
        this._safelyComputeAllSubtypes(classElement,new core.DartHashSet<any>(),allSubtypes);
        return allSubtypes;
    }
    ensureLibraryVisited(libraryElement : any) : void {
        this._computeSubtypesInLibrary(libraryElement);
    }
    _computeSubtypesInClass(classElement : any) : void {
        let supertypeType : any = classElement.supertype;
        if (supertypeType != null) {
            let supertypeElement : any = supertypeType.element;
            if (supertypeElement != null) {
                this._putInSubtypeMap(supertypeElement,classElement);
            }
        }
        let interfaceTypes : core.DartList<any> = classElement.interfaces;
        let interfaceLength : number = interfaceTypes.length;
        for(let i : number = 0; i < interfaceLength; i++){
            let interfaceType : any = interfaceTypes[i];
            let interfaceElement : any = interfaceType.element;
            if (interfaceElement != null) {
                this._putInSubtypeMap(interfaceElement,classElement);
            }
        }
        let mixinTypes : core.DartList<any> = classElement.mixins;
        let mixinLength : number = mixinTypes.length;
        for(let i : number = 0; i < mixinLength; i++){
            let mixinType : any = mixinTypes[i];
            let mixinElement : any = mixinType.element;
            if (mixinElement != null) {
                this._putInSubtypeMap(mixinElement,classElement);
            }
        }
    }
    _computeSubtypesInCompilationUnit(unitElement : any) : void {
        let classElements : core.DartList<any> = unitElement.types;
        let length : number = classElements.length;
        for(let i : number = 0; i < length; i++){
            let classElement : any = classElements[i];
            this._computeSubtypesInClass(classElement);
        }
    }
    _computeSubtypesInLibrary(libraryElement : any) : void {
        if (op(Op.EQUALS,libraryElement,null) || this._visitedLibraries.contains(libraryElement)) {
            return;
        }
        this._visitedLibraries.add(libraryElement);
        this._computeSubtypesInCompilationUnit(libraryElement.definingCompilationUnit);
        let parts : core.DartList<any> = libraryElement.parts;
        let partLength : number = parts.length;
        for(let i : number = 0; i < partLength; i++){
            let part : any = parts[i];
            this._computeSubtypesInCompilationUnit(part);
        }
        let imports : core.DartList<any> = libraryElement.importedLibraries;
        let importLength : number = imports.length;
        for(let i : number = 0; i < importLength; i++){
            let importElt : any = imports[i];
            this._computeSubtypesInLibrary(importElt.library);
        }
        let exports : core.DartList<any> = libraryElement.exportedLibraries;
        let exportLength : number = exports.length;
        for(let i : number = 0; i < exportLength; i++){
            let exportElt : any = exports[i];
            this._computeSubtypesInLibrary(exportElt.library);
        }
    }
    _putInSubtypeMap(supertypeElement : any,subtypeElement : any) : void {
        let subtypes : core.DartHashSet<any> = op(Op.INDEX,this._subtypeMap,supertypeElement);
        if (op(Op.EQUALS,subtypes,null)) {
            subtypes = new core.DartHashSet<any>();
            op(Op.INDEX_ASSIGN,this._subtypeMap,supertypeElement,subtypes);
        }
        subtypes.add(subtypeElement);
    }
    _safelyComputeAllSubtypes(classElement : any,visitedClasses : core.DartHashSet<any>,allSubtypes : core.DartHashSet<any>) : void {
        if (!visitedClasses.add(classElement)) {
            return;
        }
        let subtypes : core.DartHashSet<any> = op(Op.INDEX,this._subtypeMap,classElement);
        if (op(Op.EQUALS,subtypes,null)) {
            return;
        }
        for(let subtype of subtypes) {
            this._safelyComputeAllSubtypes(subtype,visitedClasses,allSubtypes);
        }
        allSubtypes.addAll(subtypes);
    }
    constructor() {
    }
    @defaultConstructor
    SubtypeManager() {
        this._subtypeMap = new core.DartHashMap<any,core.DartHashSet<any>>();
        this._visitedLibraries = new core.DartHashSet<any>();
    }
}

export namespace ToDoFinder {
    export type Constructors = 'ToDoFinder';
    export type Interface = Omit<ToDoFinder, Constructors>;
}
@DartClass
export class ToDoFinder {
    _errorReporter : any;

    constructor(_errorReporter : any) {
    }
    @defaultConstructor
    ToDoFinder(_errorReporter : any) {
        this._errorReporter = _errorReporter;
    }
    findIn(unit : any) : void {
        this._gatherTodoComments(unit.beginToken);
    }
    _gatherTodoComments(token : any) : void {
        while (token != null && token.type != TokenType.EOF){
            let commentToken : any = token.precedingComments;
            while (commentToken != null){
                if (op(Op.EQUALS,commentToken.type,TokenType.SINGLE_LINE_COMMENT) || op(Op.EQUALS,commentToken.type,TokenType.MULTI_LINE_COMMENT)) {
                    this._scrapeTodoComment(commentToken);
                }
                commentToken = commentToken.next;
            }
            token = token.next;
        }
    }
    _scrapeTodoComment(commentToken : any) : void {
        let matches : core.DartIterable<core.DartMatch> = TodoCode.TODO_REGEX.allMatches(commentToken.lexeme);
        for(let match of matches) {
            let offset : number = op(Op.PLUS,op(Op.PLUS,commentToken.offset,match.start),new core.DartString(match.group(1)).length);
            let length : number = new core.DartString(match.group(2)).length;
            this._errorReporter.reportErrorForOffset(TodoCode.TODO,offset,length,new core.DartList.literal(match.group(2)));
        }
    }
}

export namespace TypeNameResolver {
    export type Constructors = 'TypeNameResolver';
    export type Interface = Omit<TypeNameResolver, Constructors>;
}
@DartClass
export class TypeNameResolver {
    typeSystem : any;

    dynamicType : any;

    undefinedType : any;

    definingLibrary : any;

    source : any;

    errorListener : any;

    nameScope : any;

    constructor(typeSystem : any,typeProvider : TypeProvider,definingLibrary : any,source : any,errorListener : any) {
    }
    @defaultConstructor
    TypeNameResolver(typeSystem : any,typeProvider : TypeProvider,definingLibrary : any,source : any,errorListener : any) {
        this.dynamicType = typeProvider.dynamicType;
        this.undefinedType = typeProvider.undefinedType;
        this.typeSystem = typeSystem;
        this.definingLibrary = definingLibrary;
        this.source = source;
        this.errorListener = errorListener;
    }
    reportErrorForNode(errorCode : any,node : any,arguments? : core.DartList<core.DartObject>) : void {
        this.errorListener.onError(new bare.createInstance(any,null,this.source,node.offset,node.length,errorCode,arguments));
    }
    resolveTypeName(node : any) : void {
        let typeName : any = node.name;
        this._setElement(typeName,null);
        let argumentList : any = node.typeArguments;
        let element : any = this.nameScope.lookup(typeName,this.definingLibrary);
        if (op(Op.EQUALS,element,null)) {
            if (op(Op.EQUALS,typeName.name,this.dynamicType.name)) {
                this._setElement(typeName,this.dynamicType.element);
                typeName.staticType = this.dynamicType;
                node.type = this.dynamicType;
                return;
            }
            let voidType : any = VoidTypeImpl.instance;
            if (op(Op.EQUALS,typeName.name,voidType.name)) {
                typeName.staticType = voidType;
                node.type = voidType;
                return;
            }
            if (this.nameScope.shouldIgnoreUndefined(typeName)) {
                typeName.staticType = this.undefinedType;
                node.type = this.undefinedType;
                return;
            }
            let parent : any = node.parent;
            if (is(typeName, any) && is(parent, any) && op(Op.EQUALS,argumentList,null)) {
                let name : any = parent;
                if (op(Op.EQUALS,name.name,null)) {
                    let prefixedIdentifier : any = typeName as any;
                    let prefix : any = prefixedIdentifier.prefix;
                    element = this.nameScope.lookup(prefix,this.definingLibrary);
                    if (is(element, any)) {
                        if (this.nameScope.shouldIgnoreUndefined(typeName)) {
                            typeName.staticType = this.undefinedType;
                            node.type = this.undefinedType;
                            return;
                        }
                        let grandParent : any = parent.parent;
                        if (is(grandParent, any) && grandParent.isConst) {
                            this.reportErrorForNode(CompileTimeErrorCode.CONST_WITH_NON_TYPE,prefixedIdentifier.identifier,new core.DartList.literal(prefixedIdentifier.identifier.name));
                        }else {
                            this.reportErrorForNode(StaticWarningCode.NEW_WITH_NON_TYPE,prefixedIdentifier.identifier,new core.DartList.literal(prefixedIdentifier.identifier.name));
                        }
                        this._setElement(prefix,element);
                        return;
                    }else if (element != null) {
                        name.name = prefixedIdentifier.identifier;
                        name.period = prefixedIdentifier.period;
                        node.name = prefix;
                        typeName = prefix;
                    }
                }
            }
            if (this.nameScope.shouldIgnoreUndefined(typeName)) {
                typeName.staticType = this.undefinedType;
                node.type = this.undefinedType;
                return;
            }
        }
        let elementValid : boolean = isNot(element, any);
        if (elementValid && isNot(element, any) && this._isTypeNameInInstanceCreationExpression(node)) {
            let typeNameSimple : any = this._getTypeSimpleIdentifier(typeName);
            let creation : any = node.parent.parent as any;
            if (creation.isConst) {
                if (op(Op.EQUALS,element,null)) {
                    this.reportErrorForNode(CompileTimeErrorCode.UNDEFINED_CLASS,typeNameSimple,new core.DartList.literal(typeName));
                }else {
                    this.reportErrorForNode(CompileTimeErrorCode.CONST_WITH_NON_TYPE,typeNameSimple,new core.DartList.literal(typeName));
                }
                elementValid = false;
            }else {
                if (element != null) {
                    this.reportErrorForNode(StaticWarningCode.NEW_WITH_NON_TYPE,typeNameSimple,new core.DartList.literal(typeName));
                    elementValid = false;
                }
            }
        }
        if (elementValid && op(Op.EQUALS,element,null)) {
            let typeNameSimple : any = this._getTypeSimpleIdentifier(typeName);
            let redirectingConstructorKind : RedirectingConstructorKind;
            if (TypeNameResolver._isBuiltInIdentifier(node) && TypeNameResolver._isTypeAnnotation(node)) {
                this.reportErrorForNode(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE,typeName,new core.DartList.literal(typeName.name));
            }else if (op(Op.EQUALS,typeNameSimple.name,"boolean")) {
                this.reportErrorForNode(StaticWarningCode.UNDEFINED_CLASS_BOOLEAN,typeNameSimple,new core.DartList.literal());
            }else if (this._isTypeNameInCatchClause(node)) {
                this.reportErrorForNode(StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE,typeName,new core.DartList.literal(typeName.name));
            }else if (this._isTypeNameInAsExpression(node)) {
                this.reportErrorForNode(StaticWarningCode.CAST_TO_NON_TYPE,typeName,new core.DartList.literal(typeName.name));
            }else if (this._isTypeNameInIsExpression(node)) {
                this.reportErrorForNode(StaticWarningCode.TYPE_TEST_WITH_UNDEFINED_NAME,typeName,new core.DartList.literal(typeName.name));
            }else if ((redirectingConstructorKind = this._getRedirectingConstructorKind(node)) != null) {
                let errorCode : any = (op(Op.EQUALS,redirectingConstructorKind,RedirectingConstructorKind.CONST) ? CompileTimeErrorCode.REDIRECT_TO_NON_CLASS : StaticWarningCode.REDIRECT_TO_NON_CLASS);
                this.reportErrorForNode(errorCode,typeName,new core.DartList.literal(typeName.name));
            }else if (this._isTypeNameInTypeArgumentList(node)) {
                this.reportErrorForNode(StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT,typeName,new core.DartList.literal(typeName.name));
            }else {
                this.reportErrorForNode(StaticWarningCode.UNDEFINED_CLASS,typeName,new core.DartList.literal(typeName.name));
            }
            elementValid = false;
        }
        if (!elementValid) {
            if (is(element, any)) {
                this._setElement(typeName,element);
            }
            typeName.staticType = this.undefinedType;
            node.type = this.undefinedType;
            return;
        }
        let type : any = null;
        if (is(element, any)) {
            type = element.type;
            if (!this.typeSystem.isStrong && type.isDartAsyncFutureOr) {
                type = this.dynamicType;
                this._setElement(typeName,type.element);
                typeName.staticType = type;
                node.type = type;
                if (argumentList != null) {
                    let arguments : any = argumentList.arguments;
                    if (arguments.length != 1) {
                        this.reportErrorForNode(this._getInvalidTypeParametersErrorCode(node),node,new core.DartList.literal(typeName.name,1,arguments.length));
                    }
                }
                return;
            }
            this._setElement(typeName,element);
        }else if (is(element, any)) {
            this._setElement(typeName,element);
            type = element.type;
        }else if (is(element, any)) {
            this._setElement(typeName,element);
            type = element.type;
        }else if (is(element, any)) {
            let elements : core.DartList<any> = element.conflictingElements;
            type = this._getTypeWhenMultiplyDefined(elements);
            if (type != null) {
                node.type = type;
            }
        }else {
            let redirectingConstructorKind : RedirectingConstructorKind;
            if (this._isTypeNameInCatchClause(node)) {
                this.reportErrorForNode(StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE,typeName,new core.DartList.literal(typeName.name));
            }else if (this._isTypeNameInAsExpression(node)) {
                this.reportErrorForNode(StaticWarningCode.CAST_TO_NON_TYPE,typeName,new core.DartList.literal(typeName.name));
            }else if (this._isTypeNameInIsExpression(node)) {
                this.reportErrorForNode(StaticWarningCode.TYPE_TEST_WITH_NON_TYPE,typeName,new core.DartList.literal(typeName.name));
            }else if ((redirectingConstructorKind = this._getRedirectingConstructorKind(node)) != null) {
                let errorCode : any = (op(Op.EQUALS,redirectingConstructorKind,RedirectingConstructorKind.CONST) ? CompileTimeErrorCode.REDIRECT_TO_NON_CLASS : StaticWarningCode.REDIRECT_TO_NON_CLASS);
                this.reportErrorForNode(errorCode,typeName,new core.DartList.literal(typeName.name));
            }else if (this._isTypeNameInTypeArgumentList(node)) {
                this.reportErrorForNode(StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT,typeName,new core.DartList.literal(typeName.name));
            }else {
                let parent : any = typeName.parent;
                while (is(parent, any)){
                    parent = parent.parent;
                }
                if (is(parent, any) || is(parent, any) || is(parent, any) || is(parent, any)) {
                }else if (is(element, any) || (is(element, any) && is(element.enclosingElement, any))) {
                    this.reportErrorForNode(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION,typeName,new core.DartList.literal(typeName.name));
                }else {
                    this.reportErrorForNode(StaticWarningCode.NOT_A_TYPE,typeName,new core.DartList.literal(typeName.name));
                }
            }
            typeName.staticType = this.dynamicType;
            node.type = this.dynamicType;
            return;
        }
        if (argumentList != null) {
            let arguments : any = argumentList.arguments;
            let argumentCount : number = arguments.length;
            let parameters : core.DartList<any> = this.typeSystem.typeFormalsAsTypes(type);
            let parameterCount : number = parameters.length;
            let typeArguments : core.DartList<any> = new core.DartList<any>(parameterCount);
            if (argumentCount == parameterCount) {
                for(let i : number = 0; i < parameterCount; i++){
                    typeArguments[i] = this._getType(op(Op.INDEX,arguments,i));
                }
            }else {
                this.reportErrorForNode(this._getInvalidTypeParametersErrorCode(node),node,new core.DartList.literal(typeName.name,parameterCount,argumentCount));
                for(let i : number = 0; i < parameterCount; i++){
                    typeArguments[i] = this.dynamicType;
                }
            }
            if (is(element, any)) {
                type = (element.typeAfterSubstitution(typeArguments) || this.dynamicType);
            }else {
                type = this.typeSystem.instantiateType(type,typeArguments);
            }
        }else {
            if (is(element, any)) {
                type = (element.typeAfterSubstitution(null) || this.dynamicType);
            }else {
                type = this.typeSystem.instantiateToBounds(type);
            }
        }
        typeName.staticType = type;
        node.type = type;
    }
    _getInvalidTypeParametersErrorCode(typeName : any) : any {
        let parent : any = typeName.parent;
        if (is(parent, any)) {
            parent = parent.parent;
            if (is(parent, any)) {
                if (parent.isConst) {
                    return CompileTimeErrorCode.CONST_WITH_INVALID_TYPE_PARAMETERS;
                }else {
                    return StaticWarningCode.NEW_WITH_INVALID_TYPE_PARAMETERS;
                }
            }
        }
        return StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS;
    }
    _getRedirectingConstructorKind(typeName : any) : RedirectingConstructorKind {
        let parent : any = typeName.parent;
        if (is(parent, any)) {
            let grandParent : any = parent.parent;
            if (is(grandParent, any)) {
                if (core.identical(grandParent.redirectedConstructor,parent)) {
                    if (grandParent.constKeyword != null) {
                        return RedirectingConstructorKind.CONST;
                    }
                    return RedirectingConstructorKind.NORMAL;
                }
            }
        }
        return null;
    }
    _getType(annotation : any) : any {
        let type : any = annotation.type;
        if (op(Op.EQUALS,type,null)) {
            return this.undefinedType;
        }else if (is(type, any)) {
            let element : any = type.element;
            if (is(annotation, any) && is(element, any)) {
                let argumentList : any = annotation.typeArguments;
                let typeArguments : core.DartList<any> = null;
                if (argumentList != null) {
                    let arguments : core.DartList<any> = argumentList.arguments;
                    let argumentCount : number = arguments.length;
                    typeArguments = new core.DartList<any>(argumentCount);
                    for(let i : number = 0; i < argumentCount; i++){
                        typeArguments[i] = this._getType(arguments[i]);
                    }
                }
                return (element.typeAfterSubstitution(typeArguments) || this.dynamicType);
            }
        }
        return type;
    }
    _getTypeSimpleIdentifier(typeName : any) : any {
        if (is(typeName, any)) {
            return typeName;
        }else {
            return (typeName as any).identifier;
        }
    }
    _getTypeWhenMultiplyDefined(elements : core.DartList<any>) : any {
        let type : any = null;
        let length : number = elements.length;
        for(let i : number = 0; i < length; i++){
            let element : any = elements[i];
            if (is(element, any)) {
                if (type != null) {
                    return null;
                }
                type = element.type;
            }
        }
        return type;
    }
    _isTypeNameInAsExpression(typeName : any) : boolean {
        let parent : any = typeName.parent;
        if (is(parent, any)) {
            return core.identical(parent.type,typeName);
        }
        return false;
    }
    _isTypeNameInCatchClause(typeName : any) : boolean {
        let parent : any = typeName.parent;
        if (is(parent, any)) {
            return core.identical(parent.exceptionType,typeName);
        }
        return false;
    }
    _isTypeNameInInstanceCreationExpression(typeName : any) : boolean {
        let parent : any = typeName.parent;
        if (is(parent, any) && is(parent.parent, any)) {
            return parent != null && core.identical(parent.type,typeName);
        }
        return false;
    }
    _isTypeNameInIsExpression(typeName : any) : boolean {
        let parent : any = typeName.parent;
        if (is(parent, any)) {
            return core.identical(parent.type,typeName);
        }
        return false;
    }
    _isTypeNameInTypeArgumentList(typeName : any) : boolean {
        return is(typeName.parent, any);
    }
    _setElement(typeName : any,element : any) : void {
        if (is(typeName, any)) {
            typeName.staticElement = element;
        }else if (is(typeName, any)) {
            typeName.identifier.staticElement = element;
            let prefix : any = typeName.prefix;
            prefix.staticElement = this.nameScope.lookup(prefix,this.definingLibrary);
        }
    }
    static _isBuiltInIdentifier(typeName : any) : boolean {
        let token : any = typeName.name.beginToken;
        return token.type.isKeyword;
    }
    static _isTypeAnnotation(typeName : any) : boolean {
        let parent : any = typeName.parent;
        if (is(parent, any)) {
            return core.identical(parent.type,typeName);
        }else if (is(parent, any)) {
            return core.identical(parent.type,typeName);
        }else if (is(parent, any)) {
            return core.identical(parent.type,typeName);
        }
        return false;
    }
}

export namespace TypeOverrideManager {
    export type Constructors = 'TypeOverrideManager';
    export type Interface = Omit<TypeOverrideManager, Constructors>;
}
@DartClass
export class TypeOverrideManager {
    currentScope : TypeOverrideManager_TypeOverrideScope;

    applyOverrides(overrides : core.DartMap<any,any>) : void {
        if (op(Op.EQUALS,this.currentScope,null)) {
            throw new core.StateError("Cannot apply overrides without a scope");
        }
        this.currentScope.applyOverrides(overrides);
    }
    captureLocalOverrides() : core.DartMap<any,any> {
        if (op(Op.EQUALS,this.currentScope,null)) {
            throw new core.StateError("Cannot capture local overrides without a scope");
        }
        return this.currentScope.captureLocalOverrides();
    }
    captureOverrides(variableList : any) : core.DartMap<any,any> {
        if (op(Op.EQUALS,this.currentScope,null)) {
            throw new core.StateError("Cannot capture overrides without a scope");
        }
        return this.currentScope.captureOverrides(variableList);
    }
    enterScope() : void {
        this.currentScope = new TypeOverrideManager_TypeOverrideScope(this.currentScope);
    }
    exitScope() : void {
        if (op(Op.EQUALS,this.currentScope,null)) {
            throw new core.StateError("No scope to exit");
        }
        this.currentScope = this.currentScope._outerScope;
    }
    getBestType(element : any) : any {
        let bestType : any = this.getType(element);
        return (bestType || element.type);
    }
    getType(element : any) : any {
        if (op(Op.EQUALS,this.currentScope,null)) {
            return null;
        }
        return this.currentScope.getType(element);
    }
    mergeOverrides(perBranchOverrides : core.DartList<core.DartMap<any,any>>) : void {
        let length : number = perBranchOverrides.length;
        for(let i : number = 0; i < length; i++){
            let branch : core.DartMap<any,any> = perBranchOverrides[i];
            branch.forEach((variable : any,branchType : any) =>  {
                let currentType : any = this.currentScope.getType(variable);
                if (currentType != branchType) {
                    this.currentScope.resetType(variable);
                }
            });
        }
    }
    setType(element : any,type : any) : void {
        if (op(Op.EQUALS,this.currentScope,null)) {
            throw new core.StateError("Cannot override without a scope");
        }
        this.currentScope.setType(element,type);
    }
    constructor() {
    }
    @defaultConstructor
    TypeOverrideManager() {
    }
}

export namespace TypeOverrideManager_TypeOverrideScope {
    export type Constructors = 'TypeOverrideManager_TypeOverrideScope';
    export type Interface = Omit<TypeOverrideManager_TypeOverrideScope, Constructors>;
}
@DartClass
export class TypeOverrideManager_TypeOverrideScope {
    _outerScope : TypeOverrideManager_TypeOverrideScope;

    _overriddenTypes : core.DartMap<any,any>;

    constructor(_outerScope : TypeOverrideManager_TypeOverrideScope) {
    }
    @defaultConstructor
    TypeOverrideManager_TypeOverrideScope(_outerScope : TypeOverrideManager_TypeOverrideScope) {
        this._overriddenTypes = new core.DartHashMap<any,any>();
        this._outerScope = _outerScope;
    }
    applyOverrides(overrides : core.DartMap<any,any>) : void {
        this._overriddenTypes.addAll(overrides);
    }
    captureLocalOverrides() : core.DartMap<any,any> {
        return this._overriddenTypes;
    }
    captureOverrides(variableList : any) : core.DartMap<any,any> {
        let overrides : core.DartMap<any,any> = new core.DartHashMap<any,any>();
        if (variableList.isConst || variableList.isFinal) {
            for(let variable of variableList.variables) {
                let element : any = variable.element;
                if (element != null) {
                    let type : any = this._overriddenTypes.get(element);
                    if (type != null) {
                        op(Op.INDEX_ASSIGN,overrides,element,type);
                    }
                }
            }
        }
        return overrides;
    }
    getType(element : any) : any {
        let nonAccessor : any = is(element, any) ? element.variable : element;
        let type : any = this._overriddenTypes.get(nonAccessor);
        if (this._overriddenTypes.containsKey(nonAccessor)) {
            return type;
        }
        return (type || ((_339_)=>(!!_339_)?_339_.getType(element):null)(this._outerScope));
    }
    resetType(element : any) : void {
        this._overriddenTypes.set(element,null);
    }
    setType(element : any,type : any) : void {
        this._overriddenTypes.set(element,type);
    }
}

export namespace _ResolverVisitor_isVariablePotentiallyMutatedIn {
    export type Constructors = '_ResolverVisitor_isVariablePotentiallyMutatedIn';
    export type Interface = Omit<_ResolverVisitor_isVariablePotentiallyMutatedIn, Constructors>;
}
@DartClass
export class _ResolverVisitor_isVariablePotentiallyMutatedIn extends any {
    variable : any;

    result : boolean;

    constructor(variable : any) {
    }
    @defaultConstructor
    _ResolverVisitor_isVariablePotentiallyMutatedIn(variable : any) {
        this.result = false;
        this.variable = variable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        if (this.result) {
            return null;
        }
        if (core.identical(node.staticElement,this.variable)) {
            if (node.inSetterContext()) {
                this.result = true;
            }
        }
        return null;
    }
}

export namespace TypePromotionManager {
    export type Constructors = 'TypePromotionManager';
    export type Interface = Omit<TypePromotionManager, Constructors>;
}
@DartClass
export class TypePromotionManager {
    currentScope : TypePromotionManager_TypePromoteScope;

    get promotedElements() : core.DartIterable<any> {
        return this.currentScope.promotedElements;
    }
    enterScope() : void {
        this.currentScope = new TypePromotionManager_TypePromoteScope(this.currentScope);
    }
    exitScope() : void {
        if (op(Op.EQUALS,this.currentScope,null)) {
            throw new core.StateError("No scope to exit");
        }
        this.currentScope = this.currentScope._outerScope;
    }
    getStaticType(variable : any) : any {
        return (this.getType(variable) || variable.type);
    }
    getType(element : any) : any {
        return ((_341_)=>(!!_341_)?_341_.getType(element):null)(this.currentScope);
    }
    setType(element : any,type : any) : void {
        if (op(Op.EQUALS,this.currentScope,null)) {
            throw new core.StateError("Cannot promote without a scope");
        }
        this.currentScope.setType(element,type);
    }
    constructor() {
    }
    @defaultConstructor
    TypePromotionManager() {
    }
}

export namespace TypePromotionManager_TypePromoteScope {
    export type Constructors = 'TypePromotionManager_TypePromoteScope';
    export type Interface = Omit<TypePromotionManager_TypePromoteScope, Constructors>;
}
@DartClass
export class TypePromotionManager_TypePromoteScope {
    _outerScope : TypePromotionManager_TypePromoteScope;

    _promotedTypes : core.DartHashMap<any,any>;

    constructor(_outerScope : TypePromotionManager_TypePromoteScope) {
    }
    @defaultConstructor
    TypePromotionManager_TypePromoteScope(_outerScope : TypePromotionManager_TypePromoteScope) {
        this._promotedTypes = new core.DartHashMap<any,any>();
        this._outerScope = _outerScope;
    }
    get promotedElements() : core.DartIterable<any> {
        return this._promotedTypes.keys.toSet();
    }
    getType(element : any) : any {
        let type : any = op(Op.INDEX,this._promotedTypes,element);
        if (op(Op.EQUALS,type,null) && is(element, any)) {
            type = op(Op.INDEX,this._promotedTypes,element.variable);
        }
        if (type != null) {
            return type;
        }else if (this._outerScope != null) {
            return this._outerScope.getType(element);
        }
        return null;
    }
    setType(element : any,type : any) : void {
        op(Op.INDEX_ASSIGN,this._promotedTypes,element,type);
    }
}

export namespace TypeProvider {
    export type Constructors = 'TypeProvider';
    export type Interface = Omit<TypeProvider, Constructors>;
}
@DartClass
export class TypeProvider {
    @AbstractProperty
    get boolType() : any{ throw 'abstract'}
    @AbstractProperty
    get bottomType() : any{ throw 'abstract'}
    @AbstractProperty
    get deprecatedType() : any{ throw 'abstract'}
    @AbstractProperty
    get doubleType() : any{ throw 'abstract'}
    @AbstractProperty
    get dynamicType() : any{ throw 'abstract'}
    @AbstractProperty
    get functionType() : any{ throw 'abstract'}
    @AbstractProperty
    get futureDynamicType() : any{ throw 'abstract'}
    @AbstractProperty
    get futureNullType() : any{ throw 'abstract'}
    @AbstractProperty
    get futureOrNullType() : any{ throw 'abstract'}
    @AbstractProperty
    get futureOrType() : any{ throw 'abstract'}
    @AbstractProperty
    get futureType() : any{ throw 'abstract'}
    @AbstractProperty
    get intType() : any{ throw 'abstract'}
    @AbstractProperty
    get iterableDynamicType() : any{ throw 'abstract'}
    @AbstractProperty
    get iterableType() : any{ throw 'abstract'}
    @AbstractProperty
    get listType() : any{ throw 'abstract'}
    @AbstractProperty
    get mapType() : any{ throw 'abstract'}
    @AbstractProperty
    get nonSubtypableTypes() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get nullObject() : any{ throw 'abstract'}
    @AbstractProperty
    get nullType() : any{ throw 'abstract'}
    @AbstractProperty
    get numType() : any{ throw 'abstract'}
    @AbstractProperty
    get objectType() : any{ throw 'abstract'}
    @AbstractProperty
    get stackTraceType() : any{ throw 'abstract'}
    @AbstractProperty
    get streamDynamicType() : any{ throw 'abstract'}
    @AbstractProperty
    get streamType() : any{ throw 'abstract'}
    @AbstractProperty
    get stringType() : any{ throw 'abstract'}
    @AbstractProperty
    get symbolType() : any{ throw 'abstract'}
    @AbstractProperty
    get typeType() : any{ throw 'abstract'}
    @AbstractProperty
    get undefinedType() : any{ throw 'abstract'}
    @Abstract
    isObjectGetter(id : string) : boolean{ throw 'abstract'}
    @Abstract
    isObjectMember(id : string) : boolean{ throw 'abstract'}
    @Abstract
    isObjectMethod(id : string) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypeProvider() {
    }
}

export namespace TypeProviderBase {
    export type Constructors = 'TypeProviderBase';
    export type Interface = Omit<TypeProviderBase, Constructors>;
}
@DartClass
@Implements(TypeProvider)
export class TypeProviderBase implements TypeProvider.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nonSubtypableTypes() : core.DartList<any> {
        return new core.DartList.literal<any>(this.nullType,this.numType,this.intType,this.doubleType,this.boolType,this.stringType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isObjectGetter(id : string) : boolean {
        let element : any = this.objectType.element.getGetter(id);
        return (element != null && !element.isStatic);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isObjectMember(id : string) : boolean {
        return this.isObjectGetter(id) || this.isObjectMethod(id);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isObjectMethod(id : string) : boolean {
        let element : any = this.objectType.element.getMethod(id);
        return (element != null && !element.isStatic);
    }
    constructor() {
    }
    @defaultConstructor
    TypeProviderBase() {
    }
}

export enum TypeResolverMode {
    everything,
    api,
    local
}

export namespace UnusedLocalElementsVerifier {
    export type Constructors = 'UnusedLocalElementsVerifier';
    export type Interface = Omit<UnusedLocalElementsVerifier, Constructors>;
}
@DartClass
export class UnusedLocalElementsVerifier extends any {
    _errorListener : any;

    _usedElements : UsedLocalElements;

    constructor(_errorListener : any,_usedElements : UsedLocalElements) {
    }
    @defaultConstructor
    UnusedLocalElementsVerifier(_errorListener : any,_usedElements : UsedLocalElements) {
        this._errorListener = _errorListener;
        this._usedElements = _usedElements;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassElement(element : any) {
        if (!this._isUsedElement(element)) {
            this._reportErrorForElement(HintCode.UNUSED_ELEMENT,element,new core.DartList.literal(element.kind.displayName,element.displayName));
        }
        super.visitClassElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldElement(element : any) {
        if (!this._isReadMember(element)) {
            this._reportErrorForElement(HintCode.UNUSED_FIELD,element,new core.DartList.literal(element.displayName));
        }
        super.visitFieldElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionElement(element : any) {
        if (!this._isUsedElement(element)) {
            this._reportErrorForElement(HintCode.UNUSED_ELEMENT,element,new core.DartList.literal(element.kind.displayName,element.displayName));
        }
        super.visitFunctionElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAliasElement(element : any) {
        if (!this._isUsedElement(element)) {
            this._reportErrorForElement(HintCode.UNUSED_ELEMENT,element,new core.DartList.literal(element.kind.displayName,element.displayName));
        }
        super.visitFunctionTypeAliasElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLocalVariableElement(element : any) {
        if (!this._isUsedElement(element) && !this._isNamedUnderscore(element)) {
            let errorCode : any;
            if (this._usedElements.isCatchException(element)) {
                errorCode = HintCode.UNUSED_CATCH_CLAUSE;
            }else if (this._usedElements.isCatchStackTrace(element)) {
                errorCode = HintCode.UNUSED_CATCH_STACK;
            }else {
                errorCode = HintCode.UNUSED_LOCAL_VARIABLE;
            }
            this._reportErrorForElement(errorCode,element,new core.DartList.literal(element.displayName));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodElement(element : any) {
        if (!this._isUsedMember(element)) {
            this._reportErrorForElement(HintCode.UNUSED_ELEMENT,element,new core.DartList.literal(element.kind.displayName,element.displayName));
        }
        super.visitMethodElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccessorElement(element : any) {
        if (!this._isUsedMember(element)) {
            this._reportErrorForElement(HintCode.UNUSED_ELEMENT,element,new core.DartList.literal(element.kind.displayName,element.displayName));
        }
        super.visitPropertyAccessorElement(element);
    }
    _isNamedUnderscore(element : any) : boolean {
        let name : string = element.name;
        if (name != null) {
            for(let index : number = new core.DartString(name).length - 1; index >= 0; --index){
                if (new core.DartString(name).codeUnitAt(index) != 95) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    _isReadMember(element : any) : boolean {
        if (element.isPublic) {
            return true;
        }
        if (element.isSynthetic) {
            return true;
        }
        return this._usedElements.readMembers.contains(element.displayName);
    }
    _isUsedElement(element : any) : boolean {
        if (element.isSynthetic) {
            return true;
        }
        if (is(element, any) || is(element, any) && !element.isStatic) {
        }else {
            if (element.isPublic) {
                return true;
            }
        }
        return this._usedElements.elements.contains(element);
    }
    _isUsedMember(element : any) : boolean {
        if (element.isPublic) {
            return true;
        }
        if (element.isSynthetic) {
            return true;
        }
        if (this._usedElements.members.contains(element.displayName)) {
            return true;
        }
        return this._usedElements.elements.contains(element);
    }
    _reportErrorForElement(errorCode : any,element : any,arguments : core.DartList<core.DartObject>) : void {
        if (element != null) {
            this._errorListener.onError(new bare.createInstance(any,null,element.source,element.nameOffset,element.nameLength,errorCode,arguments));
        }
    }
}

export namespace UsedImportedElements {
    export type Constructors = 'UsedImportedElements';
    export type Interface = Omit<UsedImportedElements, Constructors>;
}
@DartClass
export class UsedImportedElements {
    prefixMap : core.DartMap<any,core.DartList<any>>;

    elements : core.DartSet<any>;

    constructor() {
    }
    @defaultConstructor
    UsedImportedElements() {
        this.prefixMap = new core.DartHashMap<any,core.DartList<any>>();
        this.elements = new core.DartHashSet<any>();
    }
}

export namespace UsedLocalElements {
    export type Constructors = 'UsedLocalElements';
    export type Interface = Omit<UsedLocalElements, Constructors>;
}
@DartClass
export class UsedLocalElements {
    elements : core.DartHashSet<any>;

    catchExceptionElements : core.DartHashSet<any>;

    catchStackTraceElements : core.DartHashSet<any>;

    members : core.DartHashSet<string>;

    readMembers : core.DartHashSet<string>;

    constructor() {
    }
    @defaultConstructor
    UsedLocalElements() {
        this.elements = new core.DartHashSet<any>();
        this.catchExceptionElements = new core.DartHashSet<any>();
        this.catchStackTraceElements = new core.DartHashSet<any>();
        this.members = new core.DartHashSet<string>();
        this.readMembers = new core.DartHashSet<string>();
    }
    @namedFactory
    static $merge(parts : core.DartList<UsedLocalElements>) : UsedLocalElements {
        let result : UsedLocalElements = new UsedLocalElements();
        let length : number = parts.length;
        for(let i : number = 0; i < length; i++){
            let part : UsedLocalElements = parts[i];
            result.elements.addAll(part.elements);
            result.catchExceptionElements.addAll(part.catchExceptionElements);
            result.catchStackTraceElements.addAll(part.catchStackTraceElements);
            result.members.addAll(part.members);
            result.readMembers.addAll(part.readMembers);
        }
        return result;
    }
    static merge : new(parts : core.DartList<UsedLocalElements>) => UsedLocalElements;

    addCatchException(element : any) : void {
        if (element != null) {
            this.catchExceptionElements.add(element);
        }
    }
    addCatchStackTrace(element : any) : void {
        if (element != null) {
            this.catchStackTraceElements.add(element);
        }
    }
    addElement(element : any) : void {
        if (element != null) {
            this.elements.add(element);
        }
    }
    isCatchException(element : any) : boolean {
        return this.catchExceptionElements.contains(element);
    }
    isCatchStackTrace(element : any) : boolean {
        return this.catchStackTraceElements.contains(element);
    }
}

export namespace TypeResolverVisitor {
    export type Constructors = ScopedVisitor.Constructors | 'TypeResolverVisitor';
    export type Interface = Omit<TypeResolverVisitor, Constructors>;
}
@DartClass
export class TypeResolverVisitor extends ScopedVisitor {
    _dynamicType : any;

    _undefinedType : any;

    _hasReferenceToSuper : boolean;

    _strongMode : boolean;

    _typeSystem : any;

    _typeNameResolver : TypeNameResolver;

    mode : TypeResolverMode;

    _localModeVisitAll : boolean;

    _localModeScopeReady : boolean;

    constructor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any,mode? : TypeResolverMode}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeResolverVisitor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any,mode? : TypeResolverMode}) {
        let {nameScope,mode} = Object.assign({
            "mode" : TypeResolverMode.everything}, _namedArguments );
        this._hasReferenceToSuper = false;
        this._localModeVisitAll = false;
        this._localModeScopeReady = false;
        super.ScopedVisitor(definingLibrary,source,typeProvider,errorListener,{
            nameScope : nameScope});
        this.mode = mode;
        this._dynamicType = typeProvider.dynamicType;
        this._undefinedType = typeProvider.undefinedType;
        this._strongMode = definingLibrary.context.analysisOptions.strongMode;
        this._typeSystem = TypeSystem.create(definingLibrary.context);
        this._typeNameResolver = new TypeNameResolver(this._typeSystem,typeProvider,definingLibrary,source,errorListener);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        super.visitAnnotation(node);
        let identifier : any = node.name;
        if (identifier.name.endsWith(ElementAnnotationImpl.PROXY_VARIABLE_NAME) && is(node.parent, any)) {
            let element : any = this.nameScope.lookup(identifier,this.definingLibrary);
            if (element != null && element.library.isDartCore && is(element, any)) {
                let elementAnnotation : any = node.elementAnnotation;
                elementAnnotation.element = element;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCatchClause(node : any) : core.DartObject {
        super.visitCatchClause(node);
        let exception : any = node.exceptionParameter;
        if (exception != null) {
            let exceptionTypeName : any = node.exceptionType;
            let exceptionType : any;
            if (op(Op.EQUALS,exceptionTypeName,null)) {
                exceptionType = this.typeProvider.dynamicType;
            }else {
                exceptionType = this._typeNameResolver._getType(exceptionTypeName);
            }
            this._recordType(exception,exceptionType);
            let element : any = exception.staticElement;
            if (is(element, any)) {
                element.declaredType = exceptionType;
            }else {
            }
        }
        let stackTrace : any = node.stackTraceParameter;
        if (stackTrace != null) {
            this._recordType(stackTrace,this.typeProvider.stackTraceType);
            let element : any = stackTrace.staticElement;
            if (is(element, any)) {
                element.declaredType = this.typeProvider.stackTraceType;
            }else {
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        this._hasReferenceToSuper = false;
        super.visitClassDeclaration(node);
        let classElement : any = this._getClassElement(node.name);
        if (classElement != null) {
            classElement.hasBeenInferred = false;
            classElement.hasReferenceToSuper = this._hasReferenceToSuper;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclarationInScope(node : any) : void {
        super.visitClassDeclarationInScope(node);
        let extendsClause : any = node.extendsClause;
        let withClause : any = node.withClause;
        let implementsClause : any = node.implementsClause;
        let classElement : any = this._getClassElement(node.name);
        let superclassType : any = null;
        if (extendsClause != null) {
            let errorCode : any = (op(Op.EQUALS,withClause,null) ? CompileTimeErrorCode.EXTENDS_NON_CLASS : CompileTimeErrorCode.MIXIN_WITH_NON_CLASS_SUPERCLASS);
            superclassType = this._resolveType(extendsClause.superclass,errorCode,CompileTimeErrorCode.EXTENDS_ENUM,errorCode);
        }
        if (classElement != null) {
            if (op(Op.EQUALS,superclassType,null)) {
                let objectType : any = this.typeProvider.objectType;
                if (!core.identical(classElement.type,objectType)) {
                    superclassType = objectType;
                }
            }
            classElement.supertype = superclassType;
        }
        this._resolve(classElement,withClause,implementsClause);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassMembersInScope(node : any) : void {
        ((_342_)=>(!!_342_)?_342_.accept(this):null)(node.documentationComment);
        node.metadata.accept(this);
        let nonFields : core.DartList<any> = new core.DartList<any>();
        let members : any = node.members;
        let length : number = members.length;
        for(let i : number = 0; i < length; i++){
            let member : any = op(Op.INDEX,members,i);
            if (is(member, any)) {
                nonFields.add(member);
            }else {
                member.accept(this);
            }
        }
        let count : number = nonFields.length;
        for(let i : number = 0; i < count; i++){
            nonFields[i].accept(this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        super.visitClassTypeAlias(node);
        let errorCode : any = CompileTimeErrorCode.MIXIN_WITH_NON_CLASS_SUPERCLASS;
        let superclassType : any = this._resolveType(node.superclass,errorCode,CompileTimeErrorCode.EXTENDS_ENUM,errorCode);
        if (op(Op.EQUALS,superclassType,null)) {
            superclassType = this.typeProvider.objectType;
        }
        let classElement : any = this._getClassElement(node.name);
        if (classElement != null) {
            classElement.supertype = superclassType;
        }
        this._resolve(classElement,node.withClause,node.implementsClause);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        super.visitConstructorDeclaration(node);
        if (op(Op.EQUALS,node.element,null)) {
            let classNode : any = node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write("The element for the constructor ");
            buffer.write(op(Op.EQUALS,node.name,null) ? "<unnamed>" : node.name.name);
            buffer.write(" in ");
            if (op(Op.EQUALS,classNode,null)) {
                buffer.write("<unknown class>");
            }else {
                buffer.write(classNode.name.name);
            }
            buffer.write(" in ");
            buffer.write(this.source.fullName);
            buffer.write(" was not set while trying to resolve types.");
            AnalysisEngine.instance.logger.logError(buffer.toString(),new bare.createInstance(any,null,new bare.createInstance(any,null),null));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : core.DartObject {
        super.visitDeclaredIdentifier(node);
        let declaredType : any;
        let typeName : any = node.type;
        if (op(Op.EQUALS,typeName,null)) {
            declaredType = this._dynamicType;
        }else {
            declaredType = this._typeNameResolver._getType(typeName);
        }
        let element : any = node.element as any;
        element.declaredType = declaredType;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : core.DartObject {
        super.visitFieldFormalParameter(node);
        let element : any = node.identifier.staticElement;
        if (is(element, any)) {
            let parameterList : any = node.parameters;
            if (op(Op.EQUALS,parameterList,null)) {
                let type : any;
                let typeName : any = node.type;
                if (op(Op.EQUALS,typeName,null)) {
                    element.hasImplicitType = true;
                    if (is(element, any)) {
                        let fieldElement : any = (element as any).field;
                        type = ((t)=>(!!t)?t.type:null)(fieldElement);
                    }
                }else {
                    type = this._typeNameResolver._getType(typeName);
                }
                element.declaredType = (type || this._dynamicType);
            }else {
                this._setFunctionTypedParameterType(element,node.type,node.parameters);
            }
        }else {
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        super.visitFunctionDeclaration(node);
        let element : any = node.element as any;
        if (op(Op.EQUALS,element,null)) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write("The element for the top-level function ");
            buffer.write(node.name);
            buffer.write(" in ");
            buffer.write(this.source.fullName);
            buffer.write(" was not set while trying to resolve types.");
            AnalysisEngine.instance.logger.logError(buffer.toString(),new bare.createInstance(any,null,new bare.createInstance(any,null),null));
        }
        element.declaredReturnType = this._computeReturnType(node.returnType);
        element.type = new bare.createInstance(any,null,element);
        this._inferSetterReturnType(element);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        let element : any = node.element as any;
        super.visitFunctionTypeAlias(node);
        element.returnType = this._computeReturnType(node.returnType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : core.DartObject {
        super.visitFunctionTypedFormalParameter(node);
        let element : any = node.identifier.staticElement;
        if (is(element, any)) {
            this._setFunctionTypedParameterType(element,node.returnType,node.parameters);
        }else {
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        let element : any = node.type.element as any;
        super.visitGenericFunctionType(node);
        element.returnType = (this._computeReturnType(node.returnType) || DynamicTypeImpl.instance);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        super.visitMethodDeclaration(node);
        let element : any = node.element as any;
        if (op(Op.EQUALS,element,null)) {
            let classNode : any = node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write("The element for the method ");
            buffer.write(node.name.name);
            buffer.write(" in ");
            if (op(Op.EQUALS,classNode,null)) {
                buffer.write("<unknown class>");
            }else {
                buffer.write(classNode.name.name);
            }
            buffer.write(" in ");
            buffer.write(this.source.fullName);
            buffer.write(" was not set while trying to resolve types.");
            AnalysisEngine.instance.logger.logError(buffer.toString(),new bare.createInstance(any,null,new bare.createInstance(any,null),null));
        }
        if (LibraryElementImpl.hasResolutionCapability(this.definingLibrary,LibraryResolutionCapability.resolvedTypeNames)) {
            return null;
        }
        element.declaredReturnType = this._computeReturnType(node.returnType);
        element.type = new bare.createInstance(any,null,element);
        this._inferSetterReturnType(element);
        if (is(element, any)) {
            let accessor : any = element as any;
            let variable : any = accessor.variable as any;
            if (accessor.isGetter) {
                variable.declaredType = element.returnType;
            }else if (op(Op.EQUALS,variable.type,null)) {
                let parameters : core.DartList<any> = element.parameters;
                let type : any = parameters != null && parameters.length > 0 ? parameters[0].type : this._dynamicType;
                variable.declaredType = type;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        if (op(Op.EQUALS,this.mode,TypeResolverMode.api)) {
            if (is(node, any)) {
                return null;
            }
            if (is(node, any)) {
                node.parameter.accept(this);
                return null;
            }
            if (is(node, any)) {
                return null;
            }
        }
        if (op(Op.EQUALS,this.mode,TypeResolverMode.local)) {
            if (this._localModeVisitAll) {
                return super.visitNode(node);
            }
            if (!this._localModeScopeReady) {
                var fillNameScope : (node : any) => void = (node : any) : void =>  {
                    if (is(node, any) || is(node, any) || is(node, any)) {
                        throw new core.StateError('Local type resolution must start from a class or unit member.');
                    }
                    let parent : any = node.parent;
                    if (parent != null) {
                        fillNameScope(parent);
                    }
                    if (is(node, any)) {
                        let classElement : any = node.element;
                        this.nameScope = new bare.createInstance(any,null,this.nameScope,classElement);
                        this.nameScope = new bare.createInstance(any,null,this.nameScope,classElement);
                    }
                };
                fillNameScope(node);
                this._localModeScopeReady = true;
            }
            var visitAllNodes : (node : any) => void = (node : any) : void =>  {
                if (node != null) {
                    let wasVisitAllInLocalMode : boolean = this._localModeVisitAll;
                    try {
                        this._localModeVisitAll = true;
                        node.accept(this);
                    } finally {
                        this._localModeVisitAll = wasVisitAllInLocalMode;
                    }
                }
            };
            if (is(node, any)) {
                node.declarations.forEach(this.visitNode.bind(this));
            }else if (is(node, any)) {
                node.members.forEach(this.visitNode.bind(this));
            }else if (is(node, any)) {
                visitAllNodes(node.defaultValue);
            }else if (is(node, any)) {
                this.visitNode(node.fields);
            }else if (is(node, any)) {
                visitAllNodes(node);
            }else if (is(node, any)) {
                this.visitNode(node.functionExpression.parameters);
                visitAllNodes(node.functionExpression.body);
            }else if (is(node, any)) {
                node.parameters.accept(this);
            }else if (is(node, any)) {
                this.visitNode(node.parameters);
                visitAllNodes(node.body);
            }else if (is(node, any)) {
                this.visitNode(node.variables);
            }else if (is(node, any)) {
                visitAllNodes(node.initializer);
            }else if (is(node, any)) {
                node.variables.forEach(this.visitNode.bind(this));
            }
            return null;
        }
        return super.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : core.DartObject {
        super.visitSimpleFormalParameter(node);
        let declaredType : any;
        let typeName : any = node.type;
        if (op(Op.EQUALS,typeName,null)) {
            declaredType = this._dynamicType;
        }else {
            declaredType = this._typeNameResolver._getType(typeName);
        }
        let element : any = node.element;
        if (is(element, any)) {
            element.declaredType = declaredType;
        }else {
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : core.DartObject {
        this._hasReferenceToSuper = true;
        return super.visitSuperExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        super.visitTypeName(node);
        this._typeNameResolver.nameScope = this.nameScope;
        this._typeNameResolver.resolveTypeName(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : core.DartObject {
        super.visitTypeParameter(node);
        let parent2 : any = ((t)=>(!!t)?t.parent:null)(node.parent);
        if (is(parent2, any) || is(parent2, any) || is(parent2, any)) {
        }else {
            let bound : any = node.bound;
            if (bound != null) {
                let typeParameter : any = node.name.staticElement as any;
                if (typeParameter != null) {
                    typeParameter.bound = bound.type;
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        super.visitVariableDeclaration(node);
        let variableList = node.parent as any;
        if (is(variableList.parent, any) && LibraryElementImpl.hasResolutionCapability(this.definingLibrary,LibraryResolutionCapability.resolvedTypeNames)) {
            return null;
        }
        let declaredType : any;
        let typeName : any = variableList.type;
        if (op(Op.EQUALS,typeName,null)) {
            declaredType = this._dynamicType;
        }else {
            declaredType = this._typeNameResolver._getType(typeName);
        }
        let element : any = node.name.staticElement;
        if (is(element, any)) {
            element.declaredType = declaredType;
        }
        return null;
    }
    _computeReturnType(returnType : any) : any {
        if (op(Op.EQUALS,returnType,null)) {
            return this._dynamicType;
        }else {
            return this._typeNameResolver._getType(returnType);
        }
    }
    _getClassElement(identifier : any) : any {
        if (op(Op.EQUALS,identifier,null)) {
            return null;
        }
        let element : any = identifier.staticElement;
        if (is(element, any)) {
            return element;
        }
        return null;
    }
    _getElements(parameterList : any) : core.DartList<any> {
        let elements : core.DartList<any> = new core.DartList<any>();
        for(let parameter of parameterList.parameters) {
            let element : any = parameter.identifier.staticElement as any;
            if (element != null) {
                elements.add(element);
            }
        }
        return elements;
    }
    _inferSetterReturnType(element : any) : void {
        if (this._strongMode && is(element, any) && element.isSetter && element.hasImplicitReturnType) {
            element.declaredReturnType = VoidTypeImpl.instance;
        }
    }
    _recordType(expression : any,type : any) : core.DartObject {
        if (op(Op.EQUALS,type,null)) {
            expression.staticType = this._dynamicType;
        }else {
            expression.staticType = type;
        }
        return null;
    }
    _resolve(classElement : any,withClause : any,implementsClause : any) : void {
        if (withClause != null) {
            let mixinTypes : core.DartList<any> = this._resolveTypes(withClause.mixinTypes,CompileTimeErrorCode.MIXIN_OF_NON_CLASS,CompileTimeErrorCode.MIXIN_OF_ENUM,CompileTimeErrorCode.MIXIN_OF_NON_CLASS);
            if (classElement != null) {
                classElement.mixins = mixinTypes;
            }
        }
        if (implementsClause != null) {
            let interfaces : any = implementsClause.interfaces;
            let interfaceTypes : core.DartList<any> = this._resolveTypes(interfaces,CompileTimeErrorCode.IMPLEMENTS_NON_CLASS,CompileTimeErrorCode.IMPLEMENTS_ENUM,CompileTimeErrorCode.IMPLEMENTS_DYNAMIC);
            if (classElement != null) {
                classElement.interfaces = interfaceTypes;
            }
            let count : number = interfaces.length;
            let detectedRepeatOnIndex : core.DartList<boolean> = new core.DartList.filled(count,false);
            for(let i : number = 0; i < detectedRepeatOnIndex.length; i++){
                detectedRepeatOnIndex[i] = false;
            }
            for(let i : number = 0; i < count; i++){
                let typeName : any = op(Op.INDEX,interfaces,i);
                if (!detectedRepeatOnIndex[i]) {
                    let element : any = typeName.name.staticElement;
                    for(let j : number = i + 1; j < count; j++){
                        let typeName2 : any = op(Op.INDEX,interfaces,j);
                        let identifier2 : any = typeName2.name;
                        let name2 : string = identifier2.name;
                        let element2 : any = identifier2.staticElement;
                        if (element != null && op(Op.EQUALS,element,element2)) {
                            detectedRepeatOnIndex[j] = true;
                            this.errorReporter.reportErrorForNode(CompileTimeErrorCode.IMPLEMENTS_REPEATED,typeName2,new core.DartList.literal(name2));
                        }
                    }
                }
            }
        }
    }
    _resolveType(typeName : any,nonTypeError : any,enumTypeError : any,dynamicTypeError : any) : any {
        let type : any = typeName.type;
        if (is(type, any)) {
            let element : any = type.element;
            if (element != null && element.isEnum) {
                this.errorReporter.reportErrorForNode(enumTypeError,typeName);
                return null;
            }
            return type;
        }
        let name : any = typeName.name;
        if (op(Op.EQUALS,name.name,Keyword.DYNAMIC.lexeme)) {
            this.errorReporter.reportErrorForNode(dynamicTypeError,name,new core.DartList.literal(name.name));
        }else if (!this.nameScope.shouldIgnoreUndefined(name)) {
            this.errorReporter.reportErrorForNode(nonTypeError,name,new core.DartList.literal(name.name));
        }
        return null;
    }
    _resolveTypes(typeNames : any,nonTypeError : any,enumTypeError : any,dynamicTypeError : any) : core.DartList<any> {
        let types : core.DartList<any> = new core.DartList<any>();
        for(let typeName of typeNames) {
            let type : any = this._resolveType(typeName,nonTypeError,enumTypeError,dynamicTypeError);
            if (type != null) {
                types.add(type);
            }
        }
        return types;
    }
    _setFunctionTypedParameterType(element : any,returnType : any,parameterList : any) : void {
        let parameters : core.DartList<any> = this._getElements(parameterList);
        let functionElement : any = new bare.createInstance(any,null,null);
        functionElement.isSynthetic = true;
        functionElement.shareParameters(parameters);
        functionElement.declaredReturnType = this._computeReturnType(returnType);
        functionElement.enclosingElement = element;
        functionElement.shareTypeParameters(element.typeParameters);
        element.type = new bare.createInstance(any,null,functionElement);
        functionElement.type = element.type;
    }
}

export namespace TypeProviderImpl {
    export type Constructors = TypeProviderBase.Constructors | 'TypeProviderImpl' | 'forNamespaces';
    export type Interface = Omit<TypeProviderImpl, Constructors>;
}
@DartClass
export class TypeProviderImpl extends TypeProviderBase {
    _boolType : any;

    _bottomType : any;

    _doubleType : any;

    _deprecatedType : any;

    _dynamicType : any;

    _functionType : any;

    _futureDynamicType : any;

    _futureNullType : any;

    _futureOrNullType : any;

    _futureOrType : any;

    _futureType : any;

    _intType : any;

    _iterableDynamicType : any;

    _iterableType : any;

    _listType : any;

    _mapType : any;

    _nullObject : any;

    _nullType : any;

    _numType : any;

    _objectType : any;

    _stackTraceType : any;

    _streamDynamicType : any;

    _streamType : any;

    _stringType : any;

    _symbolType : any;

    _typeType : any;

    _undefinedType : any;

    constructor(coreLibrary : any,asyncLibrary : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeProviderImpl(coreLibrary : any,asyncLibrary : any) {
        let coreNamespace : any = new bare.createInstance(any,null).createPublicNamespaceForLibrary(coreLibrary);
        let asyncNamespace : any = new bare.createInstance(any,null).createPublicNamespaceForLibrary(asyncLibrary);
        this._initializeFrom(coreNamespace,asyncNamespace);
    }
    @namedConstructor
    forNamespaces(coreNamespace : any,asyncNamespace : any) {
        this._initializeFrom(coreNamespace,asyncNamespace);
    }
    static forNamespaces : new(coreNamespace : any,asyncNamespace : any) => TypeProviderImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get boolType() : any {
        return this._boolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bottomType() : any {
        return this._bottomType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get deprecatedType() : any {
        return this._deprecatedType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get doubleType() : any {
        return this._doubleType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dynamicType() : any {
        return this._dynamicType;
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
    get futureDynamicType() : any {
        return this._futureDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureNullType() : any {
        return this._futureNullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureOrNullType() : any {
        return this._futureOrNullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureOrType() : any {
        return this._futureOrType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureType() : any {
        return this._futureType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get intType() : any {
        return this._intType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterableDynamicType() : any {
        return this._iterableDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterableType() : any {
        return this._iterableType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get listType() : any {
        return this._listType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mapType() : any {
        return this._mapType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullObject() : any {
        if (op(Op.EQUALS,this._nullObject,null)) {
            this._nullObject = new bare.createInstance(any,null,this.nullType,NullState.NULL_STATE);
        }
        return this._nullObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullType() : any {
        return this._nullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numType() : any {
        return this._numType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get objectType() : any {
        return this._objectType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stackTraceType() : any {
        return this._stackTraceType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get streamDynamicType() : any {
        return this._streamDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get streamType() : any {
        return this._streamType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stringType() : any {
        return this._stringType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get symbolType() : any {
        return this._symbolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeType() : any {
        return this._typeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get undefinedType() : any {
        return this._undefinedType;
    }
    _getType(namespace : any,typeName : string) : any {
        let element : any = namespace.get(typeName);
        if (op(Op.EQUALS,element,null)) {
            AnalysisEngine.instance.logger.logInformation(`No definition of type ${typeName}`);
            return null;
        }
        return (element as any).type;
    }
    _initializeFrom(coreNamespace : any,asyncNamespace : any) : void {
        this._boolType = this._getType(coreNamespace,"bool");
        this._bottomType = BottomTypeImpl.instance;
        this._deprecatedType = this._getType(coreNamespace,"Deprecated");
        this._doubleType = this._getType(coreNamespace,"double");
        this._dynamicType = DynamicTypeImpl.instance;
        this._functionType = this._getType(coreNamespace,"Function");
        this._futureOrType = this._getType(asyncNamespace,"FutureOr");
        this._futureType = this._getType(asyncNamespace,"Future");
        this._intType = this._getType(coreNamespace,"int");
        this._iterableType = this._getType(coreNamespace,"Iterable");
        this._listType = this._getType(coreNamespace,"List");
        this._mapType = this._getType(coreNamespace,"Map");
        this._nullType = this._getType(coreNamespace,"Null");
        this._numType = this._getType(coreNamespace,"num");
        this._objectType = this._getType(coreNamespace,"Object");
        this._stackTraceType = this._getType(coreNamespace,"StackTrace");
        this._streamType = this._getType(asyncNamespace,"Stream");
        this._stringType = this._getType(coreNamespace,"String");
        this._symbolType = this._getType(coreNamespace,"Symbol");
        this._typeType = this._getType(coreNamespace,"Type");
        this._undefinedType = UndefinedTypeImpl.instance;
        this._futureDynamicType = this._futureType.instantiate(new core.DartList.literal<any>(this._dynamicType));
        this._futureNullType = this._futureType.instantiate(new core.DartList.literal<any>(this._nullType));
        this._iterableDynamicType = this._iterableType.instantiate(new core.DartList.literal<any>(this._dynamicType));
        this._streamDynamicType = this._streamType.instantiate(new core.DartList.literal<any>(this._dynamicType));
        this._futureOrType = ( this._futureOrType ) || ( TypeProviderImpl.createPlaceholderFutureOr(this._futureType,this._objectType) );
        this._futureOrNullType = this._futureOrType.instantiate(new core.DartList.literal<any>(this._nullType));
    }
    static createPlaceholderFutureOr(futureType : any,objectType : any) : any {
        let compilationUnit = futureType.element.getAncestor((e : any) =>  {
            return is(e, any);
        });
        let element = ElementFactory.classElement('FutureOr',objectType,new core.DartList.literal('T'));
        element.enclosingElement = compilationUnit;
        return element.type;
    }
}

export namespace VariableResolverVisitor {
    export type Constructors = ScopedVisitor.Constructors | 'VariableResolverVisitor';
    export type Interface = Omit<VariableResolverVisitor, Constructors>;
}
@DartClass
export class VariableResolverVisitor extends ScopedVisitor {
    _enclosingFunction : any;

    _localVariableInfo : any;

    constructor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableResolverVisitor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        let {nameScope} = Object.assign({
        }, _namedArguments );
        super.ScopedVisitor(definingLibrary,source,typeProvider,errorListener,{
            nameScope : nameScope});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        /* TODO (AssertStatementImpl) : assert (_localVariableInfo != null); */;
        return super.visitBlockFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        let outerFunction : any = this._enclosingFunction;
        let outerLocalVariableInfo : any = this._localVariableInfo;
        try {
            this._localVariableInfo = ( this._localVariableInfo ) || ( new bare.createInstance(any,null) );
            (node.body as any).localVariableInfo = this._localVariableInfo;
            this._enclosingFunction = node.element;
            return super.visitConstructorDeclaration(node);
        } finally {
            this._localVariableInfo = outerLocalVariableInfo;
            this._enclosingFunction = outerFunction;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        /* TODO (AssertStatementImpl) : assert (_localVariableInfo != null); */;
        return super.visitExpressionFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let outerFunction : any = this._enclosingFunction;
        let outerLocalVariableInfo : any = this._localVariableInfo;
        try {
            this._localVariableInfo = ( this._localVariableInfo ) || ( new bare.createInstance(any,null) );
            (node.functionExpression.body as any).localVariableInfo = this._localVariableInfo;
            this._enclosingFunction = node.element;
            return super.visitFunctionDeclaration(node);
        } finally {
            this._localVariableInfo = outerLocalVariableInfo;
            this._enclosingFunction = outerFunction;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (isNot(node.parent, any)) {
            let outerFunction : any = this._enclosingFunction;
            let outerLocalVariableInfo : any = this._localVariableInfo;
            try {
                this._localVariableInfo = ( this._localVariableInfo ) || ( new bare.createInstance(any,null) );
                (node.body as any).localVariableInfo = this._localVariableInfo;
                this._enclosingFunction = node.element;
                return super.visitFunctionExpression(node);
            } finally {
                this._localVariableInfo = outerLocalVariableInfo;
                this._enclosingFunction = outerFunction;
            }
        }else {
            return super.visitFunctionExpression(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        let outerFunction : any = this._enclosingFunction;
        let outerLocalVariableInfo : any = this._localVariableInfo;
        try {
            this._localVariableInfo = ( this._localVariableInfo ) || ( new bare.createInstance(any,null) );
            (node.body as any).localVariableInfo = this._localVariableInfo;
            this._enclosingFunction = node.element;
            return super.visitMethodDeclaration(node);
        } finally {
            this._localVariableInfo = outerLocalVariableInfo;
            this._enclosingFunction = outerFunction;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        if (node.inDeclarationContext()) {
            return null;
        }
        let parent : any = node.parent;
        if (is(parent, any)) {
            return null;
        }else if (is(parent, any) && op(Op.EQUALS,parent.returnType,node)) {
            return null;
        }else if (is(parent, any) && op(Op.EQUALS,parent.fieldName,node)) {
            return null;
        }
        if (is(parent, any) && core.identical(parent.identifier,node)) {
            return null;
        }
        if (is(parent, any) && core.identical(parent.propertyName,node)) {
            return null;
        }
        if (is(parent, any) && core.identical(parent.methodName,node) && parent.realTarget != null) {
            return null;
        }
        if (is(parent, any)) {
            return null;
        }
        if (is(parent, any)) {
            return null;
        }
        let element : any = this.nameScope.lookup(node,this.definingLibrary);
        if (isNot(element, any)) {
            return null;
        }
        let kind : any = element.kind;
        if (op(Op.EQUALS,kind,ElementKind.LOCAL_VARIABLE) || op(Op.EQUALS,kind,ElementKind.PARAMETER)) {
            node.staticElement = element;
            if (node.inSetterContext()) {
                this._localVariableInfo.potentiallyMutatedInScope.add(element);
                if (element.enclosingElement != this._enclosingFunction) {
                    this._localVariableInfo.potentiallyMutatedInClosure.add(element);
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        return null;
    }
}

export namespace ResolverVisitor {
    export type Constructors = ScopedVisitor.Constructors | 'ResolverVisitor';
    export type Interface = Omit<ResolverVisitor, Constructors>;
}
@DartClass
export class ResolverVisitor extends ScopedVisitor {
    elementResolver : any;

    typeAnalyzer : any;

    typeSystem : any;

    _enclosingClassDeclaration : any;

    _enclosingFunctionTypeAlias : any;

    _enclosingFunction : any;

    inferenceContext : InferenceContext;

    _overrideManager : TypeOverrideManager;

    _promoteManager : TypePromotionManager;

    resolveOnlyCommentInFunctionBody : boolean;

    _currentFunctionBody : any;

    strongMode : boolean;

    constructor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolverVisitor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        let {nameScope} = Object.assign({
        }, _namedArguments );
        this._enclosingClassDeclaration = null;
        this._enclosingFunctionTypeAlias = null;
        this._enclosingFunction = null;
        this.inferenceContext = null;
        this._overrideManager = new TypeOverrideManager();
        this._promoteManager = new TypePromotionManager();
        this.resolveOnlyCommentInFunctionBody = false;
        super.ScopedVisitor(definingLibrary,source,typeProvider,errorListener,{
            nameScope : nameScope});
        let options : any = definingLibrary.context.analysisOptions;
        this.strongMode = options.strongMode;
        this.elementResolver = new bare.createInstance(any,null,this);
        this.typeSystem = definingLibrary.context.typeSystem;
        let strongModeHints : boolean = false;
        if (is(options, any)) {
            strongModeHints = options.strongModeHints;
        }
        this.inferenceContext = new InferenceContext._(typeProvider,this.typeSystem,strongModeHints,this.errorReporter);
        this.typeAnalyzer = new bare.createInstance(any,null,this);
    }
    get enclosingFunction() : any {
        return this._enclosingFunction;
    }
    get overrideManager() : TypeOverrideManager {
        return this._overrideManager;
    }
    get promoteManager() : TypePromotionManager {
        return this._promoteManager;
    }
    getOverridablePropagatedElement(expression : any) : any {
        let element : any = null;
        if (is(expression, any)) {
            element = expression.propagatedElement;
        }else if (is(expression, any)) {
            element = expression.propagatedElement;
        }else if (is(expression, any)) {
            element = expression.propertyName.propagatedElement;
        }
        if (is(element, any)) {
            return element;
        }
        return null;
    }
    getOverridableStaticElement(expression : any) : any {
        let element : any = null;
        if (is(expression, any)) {
            element = expression.staticElement;
        }else if (is(expression, any)) {
            element = expression.staticElement;
        }else if (is(expression, any)) {
            element = expression.propertyName.staticElement;
        }
        if (is(element, any)) {
            return element;
        }
        return null;
    }
    getPromotionStaticElement(expression : any) : any {
        expression = ((t)=>(!!t)?t.unParenthesized:null)(expression);
        if (is(expression, any)) {
            let element : any = expression.staticElement;
            if (is(element, any)) {
                let kind : any = element.kind;
                if (op(Op.EQUALS,kind,ElementKind.LOCAL_VARIABLE) || op(Op.EQUALS,kind,ElementKind.PARAMETER)) {
                    return element;
                }
            }
        }
        return null;
    }
    initForIncrementalResolution() : void {
        this._overrideManager.enterScope();
    }
    matchFunctionTypeParameters(typeParameterList : any,fnType : any) : any {
        if (op(Op.EQUALS,typeParameterList,null)) {
            if (fnType.typeFormals.isEmpty) {
                return fnType;
            }
            return null;
        }
        let typeParameters : any = typeParameterList.typeParameters;
        if (fnType.typeFormals.isEmpty) {
            return null;
        }
        if (fnType.typeFormals.length != typeParameters.length) {
            return null;
        }
        return fnType.instantiate(typeParameters.map((t : any) =>  {
            return (t.name.staticElement as any).type;
        }).toList());
    }
    overrideExpression(expression : any,potentialType : any,allowPrecisionLoss : boolean,setExpressionType : boolean) : void {
        let element : any = this.getOverridableStaticElement(expression);
        if (element != null) {
            let newBestType : any = this.overrideVariable(element,potentialType,allowPrecisionLoss);
            if (setExpressionType) {
                this.recordPropagatedTypeIfBetter(expression,newBestType);
            }
        }
        element = this.getOverridablePropagatedElement(expression);
        if (element != null) {
            this.overrideVariable(element,potentialType,allowPrecisionLoss);
        }
    }
    overrideVariable(element : any,potentialType : any,allowPrecisionLoss : boolean) : any {
        if (is(element, any)) {
            return null;
        }
        if (op(Op.EQUALS,potentialType,null) || potentialType.isBottom || potentialType.isDartCoreNull) {
            return null;
        }
        let currentType : any = this._overrideManager.getBestType(element);
        if (op(Op.EQUALS,potentialType,currentType)) {
            return null;
        }
        if (op(Op.EQUALS,currentType,null) || allowPrecisionLoss || !currentType.isMoreSpecificThan(potentialType) || potentialType.isMoreSpecificThan(currentType)) {
            this._overrideManager.setType(element,potentialType);
            return potentialType;
        }
        return null;
    }
    prepareToResolveMembersInClass(node : any) : void {
        this._enclosingClassDeclaration = node;
        this.enclosingClass = node.element;
        this.typeAnalyzer.thisType = ((t)=>(!!t)?t.type:null)(this.enclosingClass);
    }
    recordPropagatedTypeIfBetter(expression : any,type : any,hasOldPropagatedType? : boolean) : void {
        hasOldPropagatedType = hasOldPropagatedType || false;
        if (this.strongMode || op(Op.EQUALS,type,null) || type.isBottom || type.isDynamic || type.isDartCoreNull) {
            if (!hasOldPropagatedType) {
                expression.propagatedType = null;
            }
            return;
        }
        let staticType : any = expression.staticType;
        if (op(Op.EQUALS,type,staticType) || !type.isMoreSpecificThan(staticType)) {
            expression.propagatedType = null;
            return;
        }
        if (hasOldPropagatedType) {
            let oldPropagatedType : any = expression.propagatedType;
            if (oldPropagatedType != null && !type.isMoreSpecificThan(oldPropagatedType)) {
                return;
            }
        }
        expression.propagatedType = type;
    }
    safelyVisitComment(comment : any) : void {
        if (comment != null) {
            super.visitComment(comment);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        let parent : any = node.parent;
        if (core.identical(parent,this._enclosingClassDeclaration) || core.identical(parent,this._enclosingFunctionTypeAlias)) {
            return null;
        }
        ((_284_)=>(!!_284_)?_284_.accept(this):null)(node.name);
        ((_285_)=>(!!_285_)?_285_.accept(this):null)(node.constructorName);
        let element : any = node.element;
        if (is(element, any)) {
            InferenceContext.setType(node.arguments,element.type);
        }
        ((_286_)=>(!!_286_)?_286_.accept(this):null)(node.arguments);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        let elementAnnotationImpl : any = node.elementAnnotation;
        if (op(Op.EQUALS,elementAnnotationImpl,null)) {
            /* TODO (AssertStatementImpl) : assert (parent is PartOfDirective); */;
        }else {
            elementAnnotationImpl.annotationAst = new bare.createInstance(any,null).cloneNode(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitArgumentList(node : any) : core.DartObject {
        let callerType : any = InferenceContext.getContext(node);
        if (is(callerType, any)) {
            let namedParameterTypes : core.DartMap<string,any> = callerType.namedParameterTypes;
            let normalParameterTypes : core.DartList<any> = callerType.normalParameterTypes;
            let optionalParameterTypes : core.DartList<any> = callerType.optionalParameterTypes;
            let normalCount : number = normalParameterTypes.length;
            let optionalCount : number = optionalParameterTypes.length;
            let arguments : any = node.arguments;
            let positional : core.DartIterable<any> = arguments.takeWhile((l : any) =>  {
                return isNot(l, any);
            });
            let required : core.DartIterable<any> = positional.take(normalCount);
            let optional : core.DartIterable<any> = positional.skip(normalCount).take(optionalCount);
            let named : core.DartIterable<any> = arguments.skipWhile((l : any) =>  {
                return isNot(l, any);
            });
            let index : number = 0;
            for(let argument of required) {
                InferenceContext.setType(argument,normalParameterTypes[index++]);
            }
            index = 0;
            for(let argument of optional) {
                InferenceContext.setType(argument,optionalParameterTypes[index++]);
            }
            for(let argument of named) {
                if (is(argument, any)) {
                    let type : any = namedParameterTypes.get(argument.name.label.name);
                    if (type != null) {
                        InferenceContext.setType(argument,type);
                    }
                }
            }
        }
        return super.visitArgumentList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : core.DartObject {
        super.visitAsExpression(node);
        this.overrideExpression(node.expression,node.type.type,false,false);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssertStatement(node : any) : core.DartObject {
        super.visitAssertStatement(node);
        this._propagateTrueState(node.condition);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        ((_287_)=>(!!_287_)?_287_.accept(this):null)(node.leftHandSide);
        let operator : any = node.operator.type;
        if (op(Op.EQUALS,operator,TokenType.EQ) || op(Op.EQUALS,operator,TokenType.QUESTION_QUESTION_EQ)) {
            InferenceContext.setType(node.rightHandSide,node.leftHandSide.staticType);
        }
        ((_288_)=>(!!_288_)?_288_.accept(this):null)(node.rightHandSide);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : core.DartObject {
        let contextType : any = InferenceContext.getContext(node);
        if (contextType != null) {
            let futureUnion = this._createFutureOr(contextType);
            InferenceContext.setType(node.expression,futureUnion);
        }
        return super.visitAwaitExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        let operatorType : any = node.operator.type;
        let leftOperand : any = node.leftOperand;
        let rightOperand : any = node.rightOperand;
        if (op(Op.EQUALS,operatorType,TokenType.AMPERSAND_AMPERSAND)) {
            ((_289_)=>(!!_289_)?_289_.accept(this):null)(leftOperand);
            if (rightOperand != null) {
                this._overrideManager.enterScope();
                try {
                    this._promoteManager.enterScope();
                    try {
                        this._propagateTrueState(leftOperand);
                        this._promoteTypes(leftOperand);
                        this._clearTypePromotionsIfPotentiallyMutatedIn(leftOperand);
                        this._clearTypePromotionsIfPotentiallyMutatedIn(rightOperand);
                        this._clearTypePromotionsIfAccessedInClosureAndProtentiallyMutated(rightOperand);
                        rightOperand.accept(this);
                    } finally {
                        this._promoteManager.exitScope();
                    }
                } finally {
                    this._overrideManager.exitScope();
                }
            }
        }else if (op(Op.EQUALS,operatorType,TokenType.BAR_BAR)) {
            ((_290_)=>(!!_290_)?_290_.accept(this):null)(leftOperand);
            if (rightOperand != null) {
                this._overrideManager.enterScope();
                try {
                    this._propagateFalseState(leftOperand);
                    rightOperand.accept(this);
                } finally {
                    this._overrideManager.exitScope();
                }
            }
        }else {
            if (op(Op.EQUALS,operatorType,TokenType.QUESTION_QUESTION)) {
                InferenceContext.setTypeFromNode(leftOperand,node);
            }
            ((_291_)=>(!!_291_)?_291_.accept(this):null)(leftOperand);
            if (op(Op.EQUALS,operatorType,TokenType.QUESTION_QUESTION)) {
                let contextType : any = InferenceContext.getContext(node);
                let leftType : any = ((t)=>(!!t)?t.staticType:null)(leftOperand);
                if (op(Op.EQUALS,contextType,null) || contextType.isDynamic) {
                    contextType = leftType;
                }
                InferenceContext.setType(rightOperand,contextType);
            }
            ((_292_)=>(!!_292_)?_292_.accept(this):null)(rightOperand);
        }
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            this.inferenceContext.pushReturnContext(node);
            super.visitBlockFunctionBody(node);
        } finally {
            this._overrideManager.exitScope();
            this.inferenceContext.popReturnContext(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : core.DartObject {
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : core.DartObject {
        InferenceContext.setTypeFromNode(node.target,node);
        return super.visitCascadeExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        ((_293_)=>(!!_293_)?_293_.accept(this):null)(node.metadata);
        this._enclosingClassDeclaration = node;
        let outerType : any = this.enclosingClass;
        try {
            this.enclosingClass = node.element;
            this.typeAnalyzer.thisType = ((t)=>(!!t)?t.type:null)(this.enclosingClass);
            super.visitClassDeclaration(node);
            node.accept(this.elementResolver);
            node.accept(this.typeAnalyzer);
        } finally {
            this.typeAnalyzer.thisType = ((t)=>(!!t)?t.type:null)(outerType);
            this.enclosingClass = outerType;
            this._enclosingClassDeclaration = null;
        }
        return null;
    }
    visitClassDeclarationIncrementally(node : any) {
        ((_294_)=>(!!_294_)?_294_.accept(this):null)(node.metadata);
        this._enclosingClassDeclaration = node;
        this.enclosingClass = node.element;
        this.typeAnalyzer.thisType = ((t)=>(!!t)?t.type:null)(this.enclosingClass);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : core.DartObject {
        let parent : any = node.parent;
        if (is(parent, any) || is(parent, any) || is(parent, any) || is(parent, any)) {
            return null;
        }
        super.visitComment(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : core.DartObject {
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            let directives : any = node.directives;
            let directiveCount : number = directives.length;
            for(let i : number = 0; i < directiveCount; i++){
                op(Op.INDEX,directives,i).accept(this);
            }
            let declarations : any = node.declarations;
            let declarationCount : number = declarations.length;
            for(let i : number = 0; i < declarationCount; i++){
                op(Op.INDEX,declarations,i).accept(this);
            }
        } finally {
            this._overrideManager.exitScope();
        }
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : core.DartObject {
        let condition : any = node.condition;
        ((_295_)=>(!!_295_)?_295_.accept(this):null)(condition);
        let thenExpression : any = node.thenExpression;
        if (thenExpression != null) {
            this._overrideManager.enterScope();
            try {
                this._promoteManager.enterScope();
                try {
                    this._propagateTrueState(condition);
                    this._promoteTypes(condition);
                    this._clearTypePromotionsIfPotentiallyMutatedIn(thenExpression);
                    this._clearTypePromotionsIfAccessedInClosureAndProtentiallyMutated(thenExpression);
                    InferenceContext.setTypeFromNode(thenExpression,node);
                    thenExpression.accept(this);
                } finally {
                    this._promoteManager.exitScope();
                }
            } finally {
                this._overrideManager.exitScope();
            }
        }
        let elseExpression : any = node.elseExpression;
        if (elseExpression != null) {
            this._overrideManager.enterScope();
            try {
                this._propagateFalseState(condition);
                InferenceContext.setTypeFromNode(elseExpression,node);
                elseExpression.accept(this);
            } finally {
                this._overrideManager.exitScope();
            }
        }
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        let thenIsAbrupt : boolean = this._isAbruptTerminationExpression(thenExpression);
        let elseIsAbrupt : boolean = this._isAbruptTerminationExpression(elseExpression);
        if (elseIsAbrupt && !thenIsAbrupt) {
            this._propagateTrueState(condition);
            this._propagateState(thenExpression);
        }else if (thenIsAbrupt && !elseIsAbrupt) {
            this._propagateFalseState(condition);
            this._propagateState(elseExpression);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        let outerFunction : any = this._enclosingFunction;
        let outerFunctionBody : any = this._currentFunctionBody;
        try {
            this._currentFunctionBody = node.body;
            this._enclosingFunction = node.element;
            let type : any = this._enclosingFunction.type;
            InferenceContext.setType(node.body,type.returnType);
            super.visitConstructorDeclaration(node);
        } finally {
            this._currentFunctionBody = outerFunctionBody;
            this._enclosingFunction = outerFunction;
        }
        let constructor : any = node.element;
        constructor.constantInitializers = new bare.createInstance(any,null).cloneNodeList(node.initializers);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclarationInScope(node : any) : void {
        super.visitConstructorDeclarationInScope(node);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        this.safelyVisitComment(node.documentationComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : core.DartObject {
        let fieldElement : any = this.enclosingClass.getField(node.fieldName.name);
        InferenceContext.setType(node.expression,((t)=>(!!t)?t.type:null)(fieldElement));
        ((_296_)=>(!!_296_)?_296_.accept(this):null)(node.expression);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : core.DartObject {
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : core.DartObject {
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        InferenceContext.setType(node.defaultValue,((t)=>(!!t)?t.type:null)(resolutionMap.elementDeclaredByFormalParameter(node.parameter)));
        super.visitDefaultFormalParameter(node);
        let element : any = node.element;
        if (element.initializer != null && node.defaultValue != null) {
            (element.initializer as any).returnType = node.defaultValue.staticType;
        }
        if (!this._hasSerializedConstantInitializer(element)) {
            (element as any).constantInitializer = new bare.createInstance(any,null).cloneNode(node.defaultValue);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            super.visitDoStatement(node);
        } finally {
            this._overrideManager.exitScope();
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEmptyFunctionBody(node : any) : core.DartObject {
        if (this.resolveOnlyCommentInFunctionBody) {
            return null;
        }
        return super.visitEmptyFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        if (node.metadata != null) {
            node.metadata.accept(this);
            ElementResolver.resolveMetadata(node);
        }
        let outerType : any = this.enclosingClass;
        try {
            this.enclosingClass = node.element;
            this.typeAnalyzer.thisType = ((t)=>(!!t)?t.type:null)(this.enclosingClass);
            super.visitEnumDeclaration(node);
            node.accept(this.elementResolver);
            node.accept(this.typeAnalyzer);
        } finally {
            this.typeAnalyzer.thisType = ((t)=>(!!t)?t.type:null)(outerType);
            this.enclosingClass = outerType;
            this._enclosingClassDeclaration = null;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        if (this.resolveOnlyCommentInFunctionBody) {
            return null;
        }
        this._overrideManager.enterScope();
        try {
            InferenceContext.setTypeFromNode(node.expression,node);
            super.visitExpressionFunctionBody(node);
        } finally {
            this._overrideManager.exitScope();
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            super.visitFieldDeclaration(node);
        } finally {
            let overrides : core.DartMap<any,any> = this._overrideManager.captureOverrides(node.fields);
            this._overrideManager.exitScope();
            this._overrideManager.applyOverrides(overrides);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            super.visitForEachStatement(node);
        } finally {
            this._overrideManager.exitScope();
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatementInScope(node : any) : void {
        let iterable : any = node.iterable;
        let loopVariable : any = node.loopVariable;
        let identifier : any = node.identifier;
        if (((t)=>(!!t)?t.type:null)(((t)=>(!!t)?t.type:null)(loopVariable)) != null) {
            let targetType : any = (op(Op.EQUALS,node.awaitKeyword,null)) ? this.typeProvider.iterableType : this.typeProvider.streamType;
            InferenceContext.setType(iterable,targetType.instantiate(new core.DartList.literal(resolutionMap.typeForTypeName(loopVariable.type))));
        }
        ((_297_)=>(!!_297_)?_297_.accept(this):null)(iterable);
        ((_298_)=>(!!_298_)?_298_.accept(this):null)(loopVariable);
        ((_299_)=>(!!_299_)?_299_.accept(this):null)(identifier);
        let body : any = node.body;
        if (body != null) {
            this._overrideManager.enterScope();
            try {
                if (loopVariable != null && iterable != null) {
                    let loopElement : any = loopVariable.element;
                    if (loopElement != null) {
                        let propagatedType : any = null;
                        if (op(Op.EQUALS,node.awaitKeyword,null)) {
                            propagatedType = this._getIteratorElementType(iterable);
                        }else {
                            propagatedType = this._getStreamElementType(iterable);
                        }
                        if (propagatedType != null) {
                            this.overrideVariable(loopElement,propagatedType,true);
                            this.recordPropagatedTypeIfBetter(loopVariable.identifier,propagatedType);
                        }
                    }
                }else if (identifier != null && iterable != null) {
                    let identifierElement : any = identifier.staticElement;
                    if (is(identifierElement, any)) {
                        let iteratorElementType : any = this._getIteratorElementType(iterable);
                        this.overrideVariable(identifierElement,iteratorElementType,true);
                        this.recordPropagatedTypeIfBetter(identifier,iteratorElementType);
                    }
                }
                this.visitStatementInScope(body);
            } finally {
                this._overrideManager.exitScope();
            }
        }
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            super.visitForStatement(node);
        } finally {
            this._overrideManager.exitScope();
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatementInScope(node : any) : void {
        ((_300_)=>(!!_300_)?_300_.accept(this):null)(node.variables);
        ((_301_)=>(!!_301_)?_301_.accept(this):null)(node.initialization);
        ((_302_)=>(!!_302_)?_302_.accept(this):null)(node.condition);
        this._overrideManager.enterScope();
        try {
            this._propagateTrueState(node.condition);
            this.visitStatementInScope(node.body);
            node.updaters.accept(this);
        } finally {
            this._overrideManager.exitScope();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let outerFunction : any = this._enclosingFunction;
        let outerFunctionBody : any = this._currentFunctionBody;
        try {
            let functionName : any = node.name;
            this._currentFunctionBody = node.functionExpression.body;
            this._enclosingFunction = functionName.staticElement as any;
            InferenceContext.setType(node.functionExpression,this._enclosingFunction.type);
            super.visitFunctionDeclaration(node);
        } finally {
            this._currentFunctionBody = outerFunctionBody;
            this._enclosingFunction = outerFunction;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclarationInScope(node : any) : void {
        super.visitFunctionDeclarationInScope(node);
        this.safelyVisitComment(node.documentationComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        let outerFunction : any = this._enclosingFunction;
        let outerFunctionBody : any = this._currentFunctionBody;
        try {
            this._currentFunctionBody = node.body;
            this._enclosingFunction = node.element;
            this._overrideManager.enterScope();
            try {
                let functionType : any = InferenceContext.getContext(node);
                let ts = this.typeSystem;
                if (is(functionType, any) && is(ts, any)) {
                    functionType = this.matchFunctionTypeParameters(node.typeParameters,functionType);
                    if (is(functionType, any)) {
                        this._inferFormalParameterList(node.parameters,functionType);
                        InferenceContext.setType(node.body,this._computeReturnOrYieldType(functionType.returnType));
                    }
                }
                super.visitFunctionExpression(node);
            } finally {
                this._overrideManager.exitScope();
            }
        } finally {
            this._currentFunctionBody = outerFunctionBody;
            this._enclosingFunction = outerFunction;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        ((_303_)=>(!!_303_)?_303_.accept(this):null)(node.function);
        node.accept(this.elementResolver);
        this._inferArgumentTypesForInvocation(node);
        ((_304_)=>(!!_304_)?_304_.accept(this):null)(node.argumentList);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        if (node.metadata != null) {
            node.metadata.accept(this);
        }
        let outerAlias : any = this._enclosingFunctionTypeAlias;
        this._enclosingFunctionTypeAlias = node;
        try {
            super.visitFunctionTypeAlias(node);
        } finally {
            this._enclosingFunctionTypeAlias = outerAlias;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAliasInScope(node : any) : void {
        super.visitFunctionTypeAliasInScope(node);
        this.safelyVisitComment(node.documentationComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitHideCombinator(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : core.DartObject {
        let condition : any = node.condition;
        ((_305_)=>(!!_305_)?_305_.accept(this):null)(condition);
        let thenOverrides : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        let thenStatement : any = node.thenStatement;
        if (thenStatement != null) {
            this._overrideManager.enterScope();
            try {
                this._promoteManager.enterScope();
                try {
                    this._propagateTrueState(condition);
                    this._promoteTypes(condition);
                    this._clearTypePromotionsIfPotentiallyMutatedIn(thenStatement);
                    this._clearTypePromotionsIfAccessedInClosureAndProtentiallyMutated(thenStatement);
                    this.visitStatementInScope(thenStatement);
                } finally {
                    this._promoteManager.exitScope();
                }
            } finally {
                thenOverrides = this._overrideManager.captureLocalOverrides();
                this._overrideManager.exitScope();
            }
        }
        let elseOverrides : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        let elseStatement : any = node.elseStatement;
        if (elseStatement != null) {
            this._overrideManager.enterScope();
            try {
                this._propagateFalseState(condition);
                this.visitStatementInScope(elseStatement);
            } finally {
                elseOverrides = this._overrideManager.captureLocalOverrides();
                this._overrideManager.exitScope();
            }
        }
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        let thenIsAbrupt : boolean = this._isAbruptTerminationStatement(thenStatement);
        let elseIsAbrupt : boolean = this._isAbruptTerminationStatement(elseStatement);
        if (elseIsAbrupt && !thenIsAbrupt) {
            this._propagateTrueState(condition);
            this._overrideManager.applyOverrides(thenOverrides);
        }else if (thenIsAbrupt && !elseIsAbrupt) {
            this._propagateFalseState(condition);
            this._overrideManager.applyOverrides(elseOverrides);
        }else if (!thenIsAbrupt && !elseIsAbrupt) {
            let perBranchOverrides : core.DartList<core.DartMap<any,any>> = new core.DartList.literal<core.DartMap<any,any>>();
            perBranchOverrides.add(thenOverrides);
            perBranchOverrides.add(elseOverrides);
            this._overrideManager.mergeOverrides(perBranchOverrides);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        ((_306_)=>(!!_306_)?_306_.accept(this):null)(node.constructorName);
        this._inferArgumentTypesForInstanceCreate(node);
        ((_307_)=>(!!_307_)?_307_.accept(this):null)(node.argumentList);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : core.DartObject {
        let listT : any;
        if (node.typeArguments != null) {
            let targs = node.typeArguments.arguments.map((t : any) =>  {
                return t.type;
            }).toList();
            if (op(Op.EQUALS,targs.length,1) && !op(Op.INDEX,targs,0).isDynamic) {
                listT = this.typeProvider.listType.instantiate(new core.DartList.literal(op(Op.INDEX,targs,0)));
            }
        }else if (this.strongMode) {
            listT = this.typeAnalyzer.inferListType(node,{
                downwards : true});
        }
        if (listT != null) {
            let eType : any = op(Op.INDEX,listT.typeArguments,0);
            for(let child of node.elements) {
                InferenceContext.setType(child,eType);
            }
            InferenceContext.setType(node,listT);
        }else {
            InferenceContext.clearType(node);
        }
        super.visitListLiteral(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : core.DartObject {
        let mapT : any;
        if (node.typeArguments != null) {
            let targs = node.typeArguments.arguments.map((t : any) =>  {
                return t.type;
            }).toList();
            if (op(Op.EQUALS,targs.length,2) && targs.any((t : any) =>  {
                return !t.isDynamic;
            })) {
                mapT = this.typeProvider.mapType.instantiate(new core.DartList.literal(op(Op.INDEX,targs,0),op(Op.INDEX,targs,1)));
            }
        }else if (this.strongMode) {
            mapT = this.typeAnalyzer.inferMapType(node,{
                downwards : true});
        }
        if (mapT != null) {
            let kType : any = op(Op.INDEX,mapT.typeArguments,0);
            let vType : any = op(Op.INDEX,mapT.typeArguments,1);
            for(let entry of node.entries) {
                InferenceContext.setType(entry.key,kType);
                InferenceContext.setType(entry.value,vType);
            }
            InferenceContext.setType(node,mapT);
        }else {
            InferenceContext.clearType(node);
        }
        super.visitMapLiteral(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        let outerFunction : any = this._enclosingFunction;
        let outerFunctionBody : any = this._currentFunctionBody;
        try {
            this._currentFunctionBody = node.body;
            this._enclosingFunction = node.element;
            let returnType : any = this._computeReturnOrYieldType(((t)=>(!!t)?t.returnType:null)(this._enclosingFunction.type));
            InferenceContext.setType(node.body,returnType);
            super.visitMethodDeclaration(node);
        } finally {
            this._currentFunctionBody = outerFunctionBody;
            this._enclosingFunction = outerFunction;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclarationInScope(node : any) : void {
        super.visitMethodDeclarationInScope(node);
        this.safelyVisitComment(node.documentationComment);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        ((_308_)=>(!!_308_)?_308_.accept(this):null)(node.target);
        ((_309_)=>(!!_309_)?_309_.accept(this):null)(node.typeArguments);
        node.accept(this.elementResolver);
        this._inferArgumentTypesForInvocation(node);
        ((_310_)=>(!!_310_)?_310_.accept(this):null)(node.argumentList);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : core.DartObject {
        InferenceContext.setTypeFromNode(node.expression,node);
        return super.visitNamedExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        node.visitChildren(this);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : core.DartObject {
        InferenceContext.setTypeFromNode(node.expression,node);
        return super.visitParenthesizedExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        ((_311_)=>(!!_311_)?_311_.accept(this):null)(node.prefix);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        ((_312_)=>(!!_312_)?_312_.accept(this):null)(node.target);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        InferenceContext.setType(node.argumentList,((t)=>(!!t)?t.type:null)(resolutionMap.staticElementForConstructorReference(node)));
        ((_313_)=>(!!_313_)?_313_.accept(this):null)(node.argumentList);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : core.DartObject {
        let e : any = node.expression;
        InferenceContext.setType(e,this.inferenceContext.returnContext);
        super.visitReturnStatement(node);
        let type : any = ((t)=>(!!t)?t.staticType:null)(e);
        if (type != null && op(Op.EQUALS,((t)=>(!!t)?t.isGenerator:null)(this._enclosingFunction),false)) {
            if (this._enclosingFunction.isAsynchronous) {
                type = type.flattenFutures(this.typeSystem);
            }
            this.inferenceContext.addReturnOrYieldType(type);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitShowCombinator(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        InferenceContext.setType(node.argumentList,((t)=>(!!t)?t.type:null)(resolutionMap.staticElementForConstructorReference(node)));
        ((_314_)=>(!!_314_)?_314_.accept(this):null)(node.argumentList);
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            super.visitSwitchCase(node);
        } finally {
            this._overrideManager.exitScope();
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchDefault(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            super.visitSwitchDefault(node);
        } finally {
            this._overrideManager.exitScope();
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : core.DartObject {
        this._overrideManager.enterScope();
        try {
            super.visitTopLevelVariableDeclaration(node);
        } finally {
            let overrides : core.DartMap<any,any> = this._overrideManager.captureOverrides(node.variables);
            this._overrideManager.exitScope();
            this._overrideManager.applyOverrides(overrides);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        InferenceContext.setTypeFromNode(node.initializer,node);
        super.visitVariableDeclaration(node);
        let element : any = node.element;
        if (element.initializer != null && node.initializer != null) {
            (element.initializer as any).returnType = node.initializer.staticType;
        }
        if ((element.isConst || (is(element, any) && element.isFinal && !element.isStatic)) && node.initializer != null) {
            (element as any).constantInitializer = new bare.createInstance(any,null).cloneNode(node.initializer);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) {
        for(let decl of node.variables) {
            let variableElement : any = resolutionMap.elementDeclaredByVariableDeclaration(decl);
            InferenceContext.setType(decl,((t)=>(!!t)?t.type:null)(variableElement));
        }
        super.visitVariableDeclarationList(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        let outerImplicitScope : any = this._implicitLabelScope;
        try {
            this._implicitLabelScope = this._implicitLabelScope.nest(node);
            let condition : any = node.condition;
            ((_315_)=>(!!_315_)?_315_.accept(this):null)(condition);
            let body : any = node.body;
            if (body != null) {
                this._overrideManager.enterScope();
                try {
                    this._propagateTrueState(condition);
                    this.visitStatementInScope(body);
                } finally {
                    this._overrideManager.exitScope();
                }
            }
        } finally {
            this._implicitLabelScope = outerImplicitScope;
        }
        node.accept(this.elementResolver);
        node.accept(this.typeAnalyzer);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : core.DartObject {
        let e : any = node.expression;
        let returnType : any = this.inferenceContext.returnContext;
        let isGenerator : boolean = (((t)=>(!!t)?t.isGenerator:null)(this._enclosingFunction) || false);
        if (returnType != null && isGenerator) {
            let type : any = returnType;
            if (node.star != null) {
                let wrapperType : any = this._enclosingFunction.isSynchronous ? this.typeProvider.iterableType : this.typeProvider.streamType;
                type = wrapperType.instantiate(new core.DartList.literal<any>(type));
            }
            InferenceContext.setType(e,type);
        }
        super.visitYieldStatement(node);
        let type : any = ((t)=>(!!t)?t.staticType:null)(e);
        if (type != null && isGenerator) {
            if (node.star != null) {
                let wrapperType : any = this._enclosingFunction.isSynchronous ? this.typeProvider.iterableType : this.typeProvider.streamType;
                type = this.typeSystem.mostSpecificTypeArgument(type,wrapperType);
            }
            if (type != null) {
                this.inferenceContext.addReturnOrYieldType(type);
            }
        }
        return null;
    }
    _clearTypePromotionsIfAccessedInClosureAndProtentiallyMutated(target : any) : void {
        for(let element of this._promoteManager.promotedElements) {
            if (this._currentFunctionBody.isPotentiallyMutatedInScope(element)) {
                if (this._isVariableAccessedInClosure(element,target)) {
                    this._promoteManager.setType(element,null);
                }
            }
        }
    }
    _clearTypePromotionsIfPotentiallyMutatedIn(target : any) : void {
        for(let element of this._promoteManager.promotedElements) {
            if (this._isVariablePotentiallyMutatedIn(element,target)) {
                this._promoteManager.setType(element,null);
            }
        }
    }
    _computeReturnOrYieldType(declaredType : any) : any {
        let isGenerator : boolean = this._enclosingFunction.isGenerator;
        let isAsynchronous : boolean = this._enclosingFunction.isAsynchronous;
        if (!isGenerator && !isAsynchronous) {
            return declaredType;
        }
        if (is(declaredType, any)) {
            if (isGenerator) {
                let rawType : any = isAsynchronous ? this.typeProvider.streamType : this.typeProvider.iterableType;
                let targs : core.DartList<any> = declaredType.typeArguments;
                if (targs.length == 1 && op(Op.EQUALS,rawType.instantiate(targs),declaredType)) {
                    return targs[0];
                }
            }
            let futureTypeParam = declaredType.flattenFutures(this.typeSystem);
            return this._createFutureOr(futureTypeParam);
        }
        return declaredType;
    }
    _createFutureOr(type : any) : any {
        if (type.isDartAsyncFutureOr) {
            return type;
        }
        return this.typeProvider.futureOrType.instantiate(new core.DartList.literal(type));
    }
    _getIteratorElementType(iteratorExpression : any) : any {
        let expressionType : any = iteratorExpression.bestType;
        if (is(expressionType, any)) {
            let iteratorFunction : any = expressionType.lookUpInheritedGetter("iterator");
            if (op(Op.EQUALS,iteratorFunction,null)) {
                return null;
            }
            let iteratorType : any = iteratorFunction.returnType;
            if (is(iteratorType, any)) {
                let currentFunction : any = iteratorType.lookUpInheritedGetter("current");
                if (op(Op.EQUALS,currentFunction,null)) {
                    return null;
                }
                return currentFunction.returnType;
            }
        }
        return null;
    }
    _getStreamElementType(streamExpression : any) : any {
        let streamType : any = streamExpression.bestType;
        if (is(streamType, any)) {
            let listenFunction : any = streamType.lookUpInheritedMethod("listen");
            if (op(Op.EQUALS,listenFunction,null)) {
                return null;
            }
            let listenParameters : core.DartList<any> = listenFunction.parameters;
            if (listenParameters == null || listenParameters.length < 1) {
                return null;
            }
            let onDataType : any = listenParameters[0].type;
            if (is(onDataType, any)) {
                let onDataParameters : core.DartList<any> = onDataType.parameters;
                if (onDataParameters == null || onDataParameters.isEmpty) {
                    return null;
                }
                return onDataParameters[0].type;
            }
        }
        return null;
    }
    _hasSerializedConstantInitializer(parameter : any) : boolean {
        if (LibraryElementImpl.hasResolutionCapability(this.definingLibrary,LibraryResolutionCapability.constantExpressions)) {
            let executable : any = parameter.enclosingElement;
            if (is(executable, any)) {
                return true;
            }
            if (is(executable, any)) {
                return is(executable.enclosingElement, any);
            }
        }
        return false;
    }
    _inferArgumentTypesForGeneric(inferenceNode : any,uninstantiatedType : any,typeArguments : any,_namedArguments? : {errorNode? : any}) : any {
        let {errorNode} = Object.assign({
        }, _namedArguments );
        errorNode = ( errorNode ) || ( inferenceNode );
        let ts : any = this.typeSystem;
        if (op(Op.EQUALS,typeArguments,null) && is(uninstantiatedType, any) && uninstantiatedType.typeFormals.isNotEmpty && is(ts, any)) {
            return ts.inferGenericFunctionOrType(uninstantiatedType,ParameterElement.EMPTY_LIST,DartType.EMPTY_LIST,InferenceContext.getContext(inferenceNode),{
                downwards : true,errorReporter : this.errorReporter,errorNode : errorNode});
        }
        return null;
    }
    _inferArgumentTypesForInstanceCreate(node : any) : void {
        let constructor : any = node.constructorName;
        let classTypeName : any = ((t)=>(!!t)?t.type:null)(constructor);
        if (op(Op.EQUALS,classTypeName,null) || !this.strongMode) {
            return;
        }
        let originalElement : any = resolutionMap.staticElementForConstructorReference(constructor);
        let inferred : any;
        if (op(Op.EQUALS,classTypeName.typeArguments,null) && is(originalElement, any)) {
            let rawElement = originalElement.baseElement;
            let constructorType : any = StaticTypeAnalyzer.constructorToGenericFunctionType(rawElement);
            inferred = this._inferArgumentTypesForGeneric(node,constructorType,constructor.type.typeArguments,{
                errorNode : node.constructorName});
            if (inferred != null) {
                let arguments : any = node.argumentList;
                InferenceContext.setType(arguments,inferred);
                arguments.correspondingStaticParameters = ResolverVisitor.resolveArgumentsToParameters(arguments,inferred.parameters,null);
                constructor.type.type = inferred.returnType;
                if (UnknownInferredType.isKnown(inferred)) {
                    this.inferenceContext.recordInference(node,inferred.returnType);
                }
                constructor.staticElement = ConstructorMember.from(rawElement,inferred.returnType);
                node.staticElement = constructor.staticElement;
            }
        }
        if (op(Op.EQUALS,inferred,null)) {
            InferenceContext.setType(node.argumentList,((t)=>(!!t)?t.type:null)(originalElement));
        }
    }
    _inferArgumentTypesForInvocation(node : any) : void {
        if (!this.strongMode) {
            this._inferFunctionExpressionsParametersTypes(node.argumentList);
            return;
        }
        let inferred : any = this._inferArgumentTypesForGeneric(node,node.function.staticType,node.typeArguments);
        InferenceContext.setType(node.argumentList,(inferred || node.staticInvokeType));
    }
    _inferFormalParameterList(node : any,type : any) : void {
        if (this.typeAnalyzer.inferFormalParameterList(node,type)) {
            this.inferenceContext.recordInference(node.parent,type);
        }
    }
    _inferFunctionExpressionParametersTypes(mayBeClosure : any,mayByFunctionType : any) : void {
        if (isNot(mayBeClosure, any)) {
            return;
        }
        let closure : any = mayBeClosure as any;
        if (isNot(mayByFunctionType, any)) {
            return;
        }
        let expectedClosureType : any = mayByFunctionType as any;
        let staticClosureType : any = ((t)=>(!!t)?t.type:null)(resolutionMap.elementDeclaredByFunctionExpression(closure));
        if (staticClosureType != null && !FunctionTypeImpl.relate(expectedClosureType,staticClosureType,(t : any,s : any,_ : any,__ : any) =>  {
            return (t as any).isMoreSpecificThan(s);
        },new bare.createInstance(any,null,this.typeProvider).instantiateToBounds,{
            returnRelation : (s : any,t : any) =>  {
                return true;
            }})) {
            return;
        }
        if (!this.strongMode) {
            closure.propagatedType = expectedClosureType;
        }
        let parameters : any = closure.parameters.parameters;
        let expectedParameters : core.DartList<any> = expectedClosureType.parameters;
        for(let i : number = 0; i < parameters.length && i < expectedParameters.length; i++){
            let parameter : any = op(Op.INDEX,parameters,i);
            let element : any = parameter.element;
            let currentType : any = this._overrideManager.getBestType(element);
            let expectedType : any = expectedParameters[i].type;
            if (op(Op.EQUALS,currentType,null) || expectedType.isMoreSpecificThan(currentType)) {
                this._overrideManager.setType(element,expectedType);
            }
        }
    }
    _inferFunctionExpressionsParametersTypes(argumentList : any) : void {
        let arguments : any = argumentList.arguments;
        let length : number = arguments.length;
        for(let i : number = 0; i < length; i++){
            let argument : any = op(Op.INDEX,arguments,i);
            let parameter : any = argument.propagatedParameterElement;
            if (op(Op.EQUALS,parameter,null)) {
                parameter = argument.staticParameterElement;
            }
            if (parameter != null) {
                this._inferFunctionExpressionParametersTypes(argument,parameter.type);
            }
        }
    }
    _isAbruptTerminationExpression(expression : any) : boolean {
        expression = ((t)=>(!!t)?t.unParenthesized:null)(expression);
        return is(expression, any) || is(expression, any);
    }
    _isAbruptTerminationStatement(statement : any) : boolean {
        if (is(statement, any)) {
            return true;
        }else if (is(statement, any)) {
            return this._isAbruptTerminationExpression(statement.expression);
        }else if (is(statement, any)) {
            let statements : any = statement.statements;
            let size : number = statements.length;
            if (size == 0) {
                return false;
            }
            return this._isAbruptTerminationStatement(op(Op.INDEX,statements,size - 1));
        }
        return false;
    }
    _isVariableAccessedInClosure(variable : any,target : any) : boolean {
        let visitor : _ResolverVisitor_isVariableAccessedInClosure = new _ResolverVisitor_isVariableAccessedInClosure(variable);
        target.accept(visitor);
        return visitor.result;
    }
    _isVariablePotentiallyMutatedIn(variable : any,target : any) : boolean {
        let visitor : _ResolverVisitor_isVariablePotentiallyMutatedIn = new _ResolverVisitor_isVariablePotentiallyMutatedIn(variable);
        target.accept(visitor);
        return visitor.result;
    }
    _promote(expression : any,potentialType : any) : void {
        let element : any = this.getPromotionStaticElement(expression);
        if (element != null) {
            if (this._currentFunctionBody.isPotentiallyMutatedInClosure(element)) {
                return;
            }
            let type : any = ((this._promoteManager.getType(element) || expression.staticType) || DynamicTypeImpl.instance);
            potentialType = ( potentialType ) || ( DynamicTypeImpl.instance );
            let promoteType : any = this.typeSystem.tryPromoteToType(potentialType,type);
            if (promoteType != null) {
                this._promoteManager.setType(element,promoteType);
            }
        }
    }
    _promoteTypes(condition : any) : void {
        if (is(condition, any)) {
            if (op(Op.EQUALS,condition.operator.type,TokenType.AMPERSAND_AMPERSAND)) {
                let left : any = condition.leftOperand;
                let right : any = condition.rightOperand;
                this._promoteTypes(left);
                this._promoteTypes(right);
                this._clearTypePromotionsIfPotentiallyMutatedIn(right);
            }
        }else if (is(condition, any)) {
            if (op(Op.EQUALS,condition.notOperator,null)) {
                this._promote(condition.expression,condition.type.type);
            }
        }else if (is(condition, any)) {
            this._promoteTypes(condition.expression);
        }
    }
    _propagateFalseState(condition : any) : void {
        if (is(condition, any)) {
            if (op(Op.EQUALS,condition.operator.type,TokenType.BAR_BAR)) {
                this._propagateFalseState(condition.leftOperand);
                this._propagateFalseState(condition.rightOperand);
            }
        }else if (is(condition, any)) {
            if (condition.notOperator != null) {
                this.overrideExpression(condition.expression,condition.type.type,false,false);
            }
        }else if (is(condition, any)) {
            if (op(Op.EQUALS,condition.operator.type,TokenType.BANG)) {
                this._propagateTrueState(condition.operand);
            }
        }else if (is(condition, any)) {
            this._propagateFalseState(condition.expression);
        }
    }
    _propagateState(expression : any) : void {
    }
    _propagateTrueState(condition : any) : void {
        if (is(condition, any)) {
            if (op(Op.EQUALS,condition.operator.type,TokenType.AMPERSAND_AMPERSAND)) {
                this._propagateTrueState(condition.leftOperand);
                this._propagateTrueState(condition.rightOperand);
            }
        }else if (is(condition, any)) {
            if (op(Op.EQUALS,condition.notOperator,null)) {
                this.overrideExpression(condition.expression,condition.type.type,false,false);
            }
        }else if (is(condition, any)) {
            if (op(Op.EQUALS,condition.operator.type,TokenType.BANG)) {
                this._propagateFalseState(condition.operand);
            }
        }else if (is(condition, any)) {
            this._propagateTrueState(condition.expression);
        }
    }
    static resolveArgumentsToParameters(argumentList : any,parameters : core.DartList<any>,onError : (errorCode : any,node : any,arguments : core.DartList<core.DartObject>?) => void,_namedArguments? : {reportAsError? : boolean}) : core.DartList<any> {
        let {reportAsError} = Object.assign({
            "reportAsError" : false}, _namedArguments );
        if (parameters.isEmpty && argumentList.arguments.isEmpty) {
            return new core.DartList.literal<any>();
        }
        let requiredParameterCount : number = 0;
        let unnamedParameterCount : number = 0;
        let unnamedParameters : core.DartList<any> = new core.DartList<any>();
        let namedParameters : core.DartHashMap<string,any> = null;
        let length : number = parameters.length;
        for(let i : number = 0; i < length; i++){
            let parameter : any = parameters[i];
            let kind : any = parameter.parameterKind;
            if (op(Op.EQUALS,kind,ParameterKind.REQUIRED)) {
                unnamedParameters.add(parameter);
                unnamedParameterCount++;
                requiredParameterCount++;
            }else if (op(Op.EQUALS,kind,ParameterKind.POSITIONAL)) {
                unnamedParameters.add(parameter);
                unnamedParameterCount++;
            }else {
                namedParameters = ( namedParameters ) || ( new core.DartHashMap<string,any>() );
                op(Op.INDEX_ASSIGN,namedParameters,parameter.name,parameter);
            }
        }
        let unnamedIndex : number = 0;
        let arguments : any = argumentList.arguments;
        let argumentCount : number = arguments.length;
        let resolvedParameters : core.DartList<any> = new core.DartList<any>(argumentCount);
        let positionalArgumentCount : number = 0;
        let usedNames : core.DartHashSet<string> = null;
        let noBlankArguments : boolean = true;
        for(let i : number = 0; i < argumentCount; i++){
            let argument : any = op(Op.INDEX,arguments,i);
            if (is(argument, any)) {
                let nameNode : any = argument.name.label;
                let name : string = nameNode.name;
                let element : any = namedParameters != null ? op(Op.INDEX,namedParameters,name) : null;
                if (op(Op.EQUALS,element,null)) {
                    let errorCode : any = (reportAsError ? CompileTimeErrorCode.UNDEFINED_NAMED_PARAMETER : StaticWarningCode.UNDEFINED_NAMED_PARAMETER);
                    if (onError != null) {
                        onError(errorCode,nameNode,new core.DartList.literal(name));
                    }
                }else {
                    resolvedParameters[i] = element;
                    nameNode.staticElement = element;
                }
                usedNames = ( usedNames ) || ( new core.DartHashSet<string>() );
                if (!usedNames.add(name)) {
                    if (onError != null) {
                        onError(CompileTimeErrorCode.DUPLICATE_NAMED_ARGUMENT,nameNode,new core.DartList.literal(name));
                    }
                }
            }else {
                if (is(argument, any) && argument.name.isEmpty) {
                    noBlankArguments = false;
                }
                positionalArgumentCount++;
                if (unnamedIndex < unnamedParameterCount) {
                    resolvedParameters[i] = unnamedParameters[unnamedIndex++];
                }
            }
        }
        if (positionalArgumentCount < requiredParameterCount && noBlankArguments) {
            let errorCode : any = (reportAsError ? CompileTimeErrorCode.NOT_ENOUGH_REQUIRED_ARGUMENTS : StaticWarningCode.NOT_ENOUGH_REQUIRED_ARGUMENTS);
            if (onError != null) {
                onError(errorCode,argumentList,new core.DartList.literal(requiredParameterCount,positionalArgumentCount));
            }
        }else if (positionalArgumentCount > unnamedParameterCount && noBlankArguments) {
            let errorCode : any;
            let namedParameterCount : number = (((t)=>(!!t)?t.length:null)(namedParameters) || 0);
            let namedArgumentCount : number = (((t)=>(!!t)?t.length:null)(usedNames) || 0);
            if (namedParameterCount > namedArgumentCount) {
                errorCode = (reportAsError ? CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED : StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED);
            }else {
                errorCode = (reportAsError ? CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS : StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS);
            }
            if (onError != null) {
                onError(errorCode,argumentList,new core.DartList.literal(unnamedParameterCount,positionalArgumentCount));
            }
        }
        return resolvedParameters;
    }
}

export namespace InstanceFieldResolverVisitor {
    export type Constructors = ResolverVisitor.Constructors | 'InstanceFieldResolverVisitor';
    export type Interface = Omit<InstanceFieldResolverVisitor, Constructors>;
}
@DartClass
export class InstanceFieldResolverVisitor extends ResolverVisitor {
    constructor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstanceFieldResolverVisitor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        let {nameScope} = Object.assign({
        }, _namedArguments );
        super.ResolverVisitor(definingLibrary,source,typeProvider,errorListener,{
            nameScope : nameScope});
    }
    resolveCompilationUnit(node : any) : void {
        this._overrideManager.enterScope();
        try {
            let declarations : any = node.declarations;
            let declarationCount : number = declarations.length;
            for(let i : number = 0; i < declarationCount; i++){
                let declaration : any = op(Op.INDEX,declarations,i);
                if (is(declaration, any)) {
                    this._resolveClassDeclaration(declaration);
                }
            }
        } finally {
            this._overrideManager.exitScope();
        }
    }
    _resolveClassDeclaration(node : any) : void {
        this._enclosingClassDeclaration = node;
        let outerType : any = this.enclosingClass;
        let outerScope : any = this.nameScope;
        try {
            this.enclosingClass = node.element;
            this.typeAnalyzer.thisType = ((t)=>(!!t)?t.type:null)(this.enclosingClass);
            if (op(Op.EQUALS,this.enclosingClass,null)) {
                AnalysisEngine.instance.logger.logInformation(`Missing element for class declaration ${node.name.name} in ${this.definingLibrary.source.fullName}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
            }else {
                this.nameScope = new bare.createInstance(any,null,this.nameScope,this.enclosingClass);
                let members : any = node.members;
                let length : number = members.length;
                for(let i : number = 0; i < length; i++){
                    let member : any = op(Op.INDEX,members,i);
                    if (is(member, any)) {
                        this._resolveFieldDeclaration(member);
                    }
                }
            }
        } finally {
            this.nameScope = outerScope;
            this.typeAnalyzer.thisType = ((t)=>(!!t)?t.type:null)(outerType);
            this.enclosingClass = outerType;
            this._enclosingClassDeclaration = null;
        }
    }
    _resolveFieldDeclaration(node : any) : void {
        if (!node.isStatic) {
            for(let field of node.fields.variables) {
                if (field.initializer != null) {
                    field.initializer.accept(this);
                    let fieldElement : any = field.name.staticElement;
                    if (fieldElement.initializer != null) {
                        (fieldElement.initializer as any).returnType = field.initializer.staticType;
                    }
                }
            }
        }
    }
}

export namespace PartialResolverVisitor {
    export type Constructors = ResolverVisitor.Constructors | 'PartialResolverVisitor';
    export type Interface = Omit<PartialResolverVisitor, Constructors>;
}
@DartClass
export class PartialResolverVisitor extends ResolverVisitor {
    staticVariables : core.DartList<any>;

    constructor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PartialResolverVisitor(definingLibrary : any,source : any,typeProvider : TypeProvider,errorListener : any,_namedArguments? : {nameScope? : any}) {
        let {nameScope} = Object.assign({
        }, _namedArguments );
        this.staticVariables = new core.DartList.literal<any>();
        super.ResolverVisitor(definingLibrary,source,typeProvider,errorListener,{
            nameScope : nameScope});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) : core.DartObject {
        if (this._shouldBeSkipped(node)) {
            return null;
        }
        return super.visitBlockFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : core.DartObject {
        if (this._shouldBeSkipped(node)) {
            return null;
        }
        return super.visitExpressionFunctionBody(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldDeclaration(node : any) : core.DartObject {
        if (node.isStatic) {
            this._addStaticVariables(node.fields.variables);
        }
        return super.visitFieldDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        return super.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableDeclaration(node : any) : core.DartObject {
        this._addStaticVariables(node.variables.variables);
        return super.visitTopLevelVariableDeclaration(node);
    }
    _addStaticVariables(variables : core.DartList<any>) : void {
        let length : number = variables.length;
        for(let i : number = 0; i < length; i++){
            let variable : any = variables[i];
            if (variable.name.name.isNotEmpty && variable.initializer != null) {
                this.staticVariables.add(variable.element);
            }
        }
    }
    _shouldBeSkipped(body : any) : boolean {
        let parent : any = body.parent;
        if (is(parent, any)) {
            return op(Op.EQUALS,parent.body,body);
        }
        if (is(parent, any)) {
            return op(Op.EQUALS,parent.body,body);
        }
        if (is(parent, any)) {
            let parent2 : any = parent.parent;
            if (is(parent2, any) && isNot(parent2.parent, any)) {
                return op(Op.EQUALS,parent.body,body);
            }
        }
        return false;
    }
}

export class properties {
}
