/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/constant/evaluation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ConstantEvaluationEngine {
    export type Constructors = 'ConstantEvaluationEngine';
    export type Interface = Omit<ConstantEvaluationEngine, Constructors>;
}
@DartClass
export class ConstantEvaluationEngine {
    private static __$_DEFAULT_VALUE_PARAM : string;
    static get _DEFAULT_VALUE_PARAM() : string { 
        if (this.__$_DEFAULT_VALUE_PARAM===undefined) {
            this.__$_DEFAULT_VALUE_PARAM = "defaultValue";
        }
        return this.__$_DEFAULT_VALUE_PARAM;
    }
    static set _DEFAULT_VALUE_PARAM(__$value : string)  { 
        this.__$_DEFAULT_VALUE_PARAM = __$value;
    }

    private static __$_PUBLIC_IDENTIFIER_RE : string;
    static get _PUBLIC_IDENTIFIER_RE() : string { 
        if (this.__$_PUBLIC_IDENTIFIER_RE===undefined) {
            this.__$_PUBLIC_IDENTIFIER_RE = `(?!${ConstantValueComputer._RESERVED_WORD_RE}\b(?!\$))[a-zA-Z$][\w$]*`;
        }
        return this.__$_PUBLIC_IDENTIFIER_RE;
    }
    static set _PUBLIC_IDENTIFIER_RE(__$value : string)  { 
        this.__$_PUBLIC_IDENTIFIER_RE = __$value;
    }

    private static __$_PUBLIC_SYMBOL_PATTERN : core.DartRegExp;
    static get _PUBLIC_SYMBOL_PATTERN() : core.DartRegExp { 
        if (this.__$_PUBLIC_SYMBOL_PATTERN===undefined) {
            this.__$_PUBLIC_SYMBOL_PATTERN = new core.DartRegExp(`^(?:${ConstantValueComputer._OPERATOR_RE}$|${ConstantEvaluationEngine._PUBLIC_IDENTIFIER_RE}(?:=?$|[.](?!$)))+?$`);
        }
        return this.__$_PUBLIC_SYMBOL_PATTERN;
    }
    static set _PUBLIC_SYMBOL_PATTERN(__$value : core.DartRegExp)  { 
        this.__$_PUBLIC_SYMBOL_PATTERN = __$value;
    }

    typeProvider : any;

    typeSystem : any;

    _declaredVariables : any;

    validator : ConstantEvaluationValidator;

    strongMode : boolean;

    constructor(typeProvider : any,_declaredVariables : any,_namedArguments? : {validator? : ConstantEvaluationValidator,typeSystem? : any}) {
    }
    @defaultConstructor
    ConstantEvaluationEngine(typeProvider : any,_declaredVariables : any,_namedArguments? : {validator? : ConstantEvaluationValidator,typeSystem? : any}) {
        let {validator,typeSystem} = Object.assign({
        }, _namedArguments );
        this.typeProvider = typeProvider;
        this.strongMode = typeProvider.objectType.element.context.analysisOptions.strongMode;
        this.validator = (validator || new ConstantEvaluationValidator_ForProduction());
        this.typeSystem = (typeSystem || new bare.createInstance(any,null,typeProvider));
        this._declaredVariables = _declaredVariables;
    }
    checkFromEnvironmentArguments(arguments : any,argumentValues : core.DartList<any>,namedArgumentValues : core.DartHashMap<string,any>,expectedDefaultValueType : any) : boolean {
        let argumentCount : number = arguments.length;
        if (argumentCount < 1 || argumentCount > 2) {
            return false;
        }
        if (is(op(Op.INDEX,arguments,0), any)) {
            return false;
        }
        if (!core.identical(argumentValues[0].type,this.typeProvider.stringType)) {
            return false;
        }
        if (argumentCount == 2) {
            let secondArgument : any = op(Op.INDEX,arguments,1);
            if (is(secondArgument, any)) {
                if (!(op(Op.EQUALS,secondArgument.name.label.name,ConstantEvaluationEngine._DEFAULT_VALUE_PARAM))) {
                    return false;
                }
                let defaultValueType : any = op(Op.INDEX,namedArgumentValues,ConstantEvaluationEngine._DEFAULT_VALUE_PARAM).type;
                if (!(core.identical(defaultValueType,expectedDefaultValueType) || core.identical(defaultValueType,this.typeProvider.nullType))) {
                    return false;
                }
            }else {
                return false;
            }
        }
        return true;
    }
    checkSymbolArguments(arguments : any,argumentValues : core.DartList<any>,namedArgumentValues : core.DartHashMap<string,any>) : boolean {
        if (arguments.length != 1) {
            return false;
        }
        if (is(op(Op.INDEX,arguments,0), any)) {
            return false;
        }
        if (!core.identical(argumentValues[0].type,this.typeProvider.stringType)) {
            return false;
        }
        let name : string = argumentValues[0].toStringValue();
        return ConstantEvaluationEngine.isValidPublicSymbol(name);
    }
    computeConstantValue(constant : any) : void {
        this.validator.beforeComputeValue(constant);
        if (is(constant, any)) {
            let defaultValue : any = constant.constantInitializer;
            if (defaultValue != null) {
                let errorListener : any = new bare.createInstance(any,null);
                let errorReporter : any = new bare.createInstance(any,null,errorListener,constant.source);
                let dartObject : any = defaultValue.accept(new ConstantVisitor(this,errorReporter));
                constant.evaluationResult = new EvaluationResultImpl(dartObject,errorListener.errors);
            }
        }else if (is(constant, any)) {
            let constantInitializer : any = constant.constantInitializer;
            if (constantInitializer != null) {
                let errorListener : any = new bare.createInstance(any,null);
                let errorReporter : any = new bare.createInstance(any,null,errorListener,constant.source);
                let dartObject : any = constantInitializer.accept(new ConstantVisitor(this,errorReporter));
                if (dartObject != null && constant.isConst) {
                    if (!this.runtimeTypeMatch(dartObject,constant.type)) {
                        errorReporter.reportErrorForElement(CheckedModeCompileTimeErrorCode.VARIABLE_TYPE_MISMATCH,constant,new core.DartList.literal(dartObject.type,constant.type));
                    }
                }
                constant.evaluationResult = new EvaluationResultImpl(dartObject,errorListener.errors);
            }
        }else if (is(constant, any)) {
            if (constant.isConst) {
                (constant as any).isCycleFree = true;
            }
        }else if (is(constant, any)) {
            let constNode : any = constant.annotationAst;
            let element : any = constant.element;
            if (is(element, any) && is(element.variable, any)) {
                let variableElement : any = element.variable as any;
                if (variableElement.evaluationResult != null) {
                    constant.evaluationResult = variableElement.evaluationResult;
                }else {
                    constant.evaluationResult = new EvaluationResultImpl(null);
                }
            }else if (is(element, any) && element.isConst && constNode.arguments != null) {
                let errorListener : any = new bare.createInstance(any,null);
                let errorReporter : any = new bare.createInstance(any,null,errorListener,constant.source);
                let constantVisitor : ConstantVisitor = new ConstantVisitor(this,errorReporter);
                let result : any = this.evaluateConstructorCall(constNode,constNode.arguments.arguments,element,constantVisitor,errorReporter);
                constant.evaluationResult = new EvaluationResultImpl(result,errorListener.errors);
            }else {
                constant.evaluationResult = new EvaluationResultImpl(null);
            }
        }else if (is(constant, any)) {
        }else {
            /* TODO (AssertStatementImpl) : assert (false); */;
            AnalysisEngine.instance.logger.logError(`Constant value computer trying to compute the value of a node of type ${constant.runtimeType}`);
            return;
        }
    }
    computeDependencies(constant : any,callback : any) : void {
        let referenceFinder : any = new bare.createInstance(any,null,callback);
        if (is(constant, any)) {
            constant = getConstructorImpl(constant);
        }
        if (is(constant, any)) {
            let initializer : any = constant.constantInitializer;
            if (initializer != null) {
                initializer.accept(referenceFinder);
            }
        }else if (is(constant, any)) {
            if (constant.isConst) {
                constant.isCycleFree = false;
                let redirectedConstructor : any = this.getConstRedirectedConstructor(constant);
                if (redirectedConstructor != null) {
                    let redirectedConstructorBase : any = getConstructorImpl(redirectedConstructor);
                    callback(redirectedConstructorBase);
                    return;
                }else if (constant.isFactory) {
                    return;
                }
                let defaultSuperInvocationNeeded : boolean = true;
                let initializers : core.DartList<any> = constant.constantInitializers;
                if (initializers != null) {
                    for(let initializer of initializers) {
                        if (is(initializer, any) || is(initializer, any)) {
                            defaultSuperInvocationNeeded = false;
                        }
                        initializer.accept(referenceFinder);
                    }
                }
                if (defaultSuperInvocationNeeded) {
                    let superclass : any = (constant.returnType as any).superclass;
                    if (superclass != null && !superclass.isObject) {
                        let unnamedConstructor : any = getConstructorImpl(superclass.element.unnamedConstructor);
                        if (unnamedConstructor != null) {
                            callback(unnamedConstructor);
                        }
                    }
                }
                for(let field of constant.enclosingElement.fields) {
                    if ((field.isFinal || field.isConst) && !field.isStatic && field.initializer != null) {
                        callback(field);
                    }
                }
                for(let parameterElement of constant.parameters) {
                    callback(parameterElement);
                }
            }
        }else if (is(constant, any)) {
            let constNode : any = constant.annotationAst;
            let element : any = constant.element;
            if (is(element, any) && is(element.variable, any)) {
                callback(element.variable);
            }else if (is(element, any)) {
                callback(element);
            }else {
            }
            if (op(Op.EQUALS,constNode,null)) {
                AnalysisEngine.instance.logger.logInformation(`No annotationAst for ${constant} in ${constant.compilationUnit}`);
            }else if (constNode.arguments != null) {
                constNode.arguments.accept(referenceFinder);
            }
        }else if (is(constant, any)) {
        }else {
            /* TODO (AssertStatementImpl) : assert (false); */;
            AnalysisEngine.instance.logger.logError(`Constant value computer trying to compute the value of a node of type ${constant.runtimeType}`);
        }
    }
    computeValueFromEnvironment(environmentValue : any,builtInDefaultValue : any,namedArgumentValues : core.DartHashMap<string,any>) : any {
        let value : any = environmentValue as any;
        if (value.isUnknown || value.isNull) {
            if (namedArgumentValues.containsKey(ConstantEvaluationEngine._DEFAULT_VALUE_PARAM)) {
                value = op(Op.INDEX,namedArgumentValues,ConstantEvaluationEngine._DEFAULT_VALUE_PARAM);
            }else if (value.isNull) {
                value = builtInDefaultValue;
            }else {
            }
        }
        return value;
    }
    evaluateConstructorCall(node : any,arguments : core.DartList<any>,constructor : any,constantVisitor : ConstantVisitor,errorReporter : any,_namedArguments? : {invocation? : any}) : any {
        let {invocation} = Object.assign({
        }, _namedArguments );
        if (!getConstructorImpl(constructor).isCycleFree) {
            return new bare.createInstance(any,null,constructor.returnType);
        }
        let argumentCount : number = arguments.length;
        let argumentValues : core.DartList<any> = new core.DartList<any>(argumentCount);
        let positionalArguments : core.DartList<any> = new core.DartList.literal<any>();
        let argumentNodes : core.DartList<any> = new core.DartList<any>(argumentCount);
        let namedArgumentValues : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        let namedArgumentNodes : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        for(let i : number = 0; i < argumentCount; i++){
            let argument : any = arguments[i];
            if (is(argument, any)) {
                let name : string = argument.name.label.name;
                op(Op.INDEX_ASSIGN,namedArgumentValues,name,constantVisitor._valueOf(argument.expression));
                op(Op.INDEX_ASSIGN,namedArgumentNodes,name,argument);
                argumentValues[i] = this.typeProvider.nullObject;
            }else {
                let argumentValue = constantVisitor._valueOf(argument);
                argumentValues[i] = argumentValue;
                positionalArguments.add(argumentValue);
                argumentNodes[i] = argument;
            }
        }
        if (op(Op.EQUALS,invocation,null)) {
            invocation = new bare.createInstance(any,null,constructor,positionalArguments,namedArgumentValues);
        }
        constructor = this.followConstantRedirectionChain(constructor);
        let definingClass : any = constructor.returnType as any;
        if (constructor.isFactory) {
            if (op(Op.EQUALS,constructor.name,"fromEnvironment")) {
                if (!this.checkFromEnvironmentArguments(arguments,argumentValues,namedArgumentValues,definingClass)) {
                    errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,node);
                    return null;
                }
                let variableName : string = argumentCount < 1 ? null : argumentValues[0].toStringValue();
                if (core.identical(definingClass,this.typeProvider.boolType)) {
                    let valueFromEnvironment : any;
                    valueFromEnvironment = this._declaredVariables.getBool(this.typeProvider,variableName);
                    return this.computeValueFromEnvironment(valueFromEnvironment,new bare.createInstance(any,null,this.typeProvider.boolType,BoolState.FALSE_STATE),namedArgumentValues);
                }else if (core.identical(definingClass,this.typeProvider.intType)) {
                    let valueFromEnvironment : any;
                    valueFromEnvironment = this._declaredVariables.getInt(this.typeProvider,variableName);
                    return this.computeValueFromEnvironment(valueFromEnvironment,new bare.createInstance(any,null,this.typeProvider.nullType,NullState.NULL_STATE),namedArgumentValues);
                }else if (core.identical(definingClass,this.typeProvider.stringType)) {
                    let valueFromEnvironment : any;
                    valueFromEnvironment = this._declaredVariables.getString(this.typeProvider,variableName);
                    return this.computeValueFromEnvironment(valueFromEnvironment,new bare.createInstance(any,null,this.typeProvider.nullType,NullState.NULL_STATE),namedArgumentValues);
                }
            }else if (op(Op.EQUALS,constructor.name,"") && core.identical(definingClass,this.typeProvider.symbolType) && argumentCount == 1) {
                if (!this.checkSymbolArguments(arguments,argumentValues,namedArgumentValues)) {
                    errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,node);
                    return null;
                }
                let argumentValue : string = argumentValues[0].toStringValue();
                return new bare.createInstance(any,null,definingClass,new bare.createInstance(any,null,argumentValue));
            }
            return new bare.createInstance(any,null,definingClass);
        }
        let constructorBase : any = getConstructorImpl(constructor);
        this.validator.beforeGetConstantInitializers(constructorBase);
        let initializers : core.DartList<any> = constructorBase.constantInitializers;
        if (initializers == null) {
            return new bare.createInstance(any,null,definingClass);
        }
        let typeArgumentMap : core.DartHashMap<string,any>;
        if (this.strongMode) {
            definingClass = constantVisitor.evaluateType(definingClass);
            constructor = ConstructorMember.from(constructorBase,definingClass);
            typeArgumentMap = new core.DartHashMap.fromIterables(definingClass.typeParameters.map((t : any) =>  {
                return t.name;
            }),definingClass.typeArguments.map(constantVisitor.typeConstant.bind(constantVisitor)));
        }
        let fieldMap = new core.DartHashMap<string,any>();
        let externalErrorListener = new bare.createInstance(any,null);
        let externalErrorReporter = new bare.createInstance(any,null,externalErrorListener,constructor.source);
        var reportLocalErrorForRecordedExternalErrors : () => void = () : void =>  {
            let errorCode : any;
            for(let error of externalErrorListener.errors) {
                if (is(error.errorCode, any)) {
                    errorCode = CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION;
                    break;
                }
                if (is(error.errorCode, any)) {
                    errorCode = CheckedModeCompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION;
                    break;
                }
            }
            if (errorCode != null) {
                errorReporter.reportErrorForNode(errorCode,node);
            }
        };
        let fieldInitVisitor = new ConstantVisitor(this,externalErrorReporter,{
            lexicalEnvironment : typeArgumentMap});
        let fields : core.DartList<any> = constructor.enclosingElement.fields;
        for(let i : number = 0; i < fields.length; i++){
            let field : any = fields[i];
            if ((field.isFinal || field.isConst) && !field.isStatic && is(field, any)) {
                this.validator.beforeGetFieldEvaluationResult(field);
                let fieldValue : any;
                if (this.strongMode) {
                    fieldValue = field.constantInitializer.accept(fieldInitVisitor);
                }else {
                    fieldValue = ((t)=>(!!t)?t.value:null)(field.evaluationResult);
                }
                if (op(Op.EQUALS,fieldValue,null)) {
                    continue;
                }
                let fieldType : any = FieldMember.from(field,constructor.returnType).type;
                if (fieldValue != null && !this.runtimeTypeMatch(fieldValue,fieldType)) {
                    errorReporter.reportErrorForNode(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH,node,new core.DartList.literal(fieldValue.type,field.name,fieldType));
                }
                op(Op.INDEX_ASSIGN,fieldMap,field.name,fieldValue);
            }
        }
        let parameterMap : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        let parameters : core.DartList<any> = constructor.parameters;
        let parameterCount : number = parameters.length;
        for(let i : number = 0; i < parameterCount; i++){
            let parameter : any = parameters[i];
            let baseParameter : any = parameter;
            while (is(baseParameter, any)){
                baseParameter = (baseParameter as any).baseElement;
            }
            let argumentValue : any = null;
            let errorTarget : any = null;
            if (op(Op.EQUALS,baseParameter.parameterKind,ParameterKind.NAMED)) {
                argumentValue = op(Op.INDEX,namedArgumentValues,baseParameter.name);
                errorTarget = op(Op.INDEX,namedArgumentNodes,baseParameter.name);
            }else if (i < argumentCount) {
                argumentValue = argumentValues[i];
                errorTarget = argumentNodes[i];
            }
            if (op(Op.EQUALS,errorTarget,null)) {
                errorTarget = node;
            }
            if (op(Op.EQUALS,argumentValue,null) && is(baseParameter, any)) {
                this.validator.beforeGetParameterDefault(baseParameter);
                if (this.strongMode && is(baseParameter, any)) {
                    let defaultValue = (baseParameter as any).constantInitializer;
                    if (op(Op.EQUALS,defaultValue,null)) {
                        argumentValue = this.typeProvider.nullObject;
                    }else {
                        argumentValue = defaultValue.accept(fieldInitVisitor);
                    }
                }else {
                    let evaluationResult : EvaluationResultImpl = baseParameter.evaluationResult;
                    if (op(Op.EQUALS,evaluationResult,null)) {
                        argumentValue = this.typeProvider.nullObject;
                    }else if (evaluationResult.value != null) {
                        argumentValue = evaluationResult.value;
                    }
                }
            }
            if (argumentValue != null) {
                if (!this.runtimeTypeMatch(argumentValue,parameter.type)) {
                    errorReporter.reportErrorForNode(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,errorTarget,new core.DartList.literal(argumentValue.type,parameter.type));
                }
                if (baseParameter.isInitializingFormal) {
                    let field : any = (parameter as any).field;
                    if (field != null) {
                        let fieldType : any = field.type;
                        if (fieldType != parameter.type) {
                            if (!this.runtimeTypeMatch(argumentValue,fieldType)) {
                                errorReporter.reportErrorForNode(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH,errorTarget,new core.DartList.literal(argumentValue.type,fieldType));
                            }
                        }
                        let fieldName : string = field.name;
                        if (fieldMap.containsKey(fieldName)) {
                            errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,node);
                        }
                        op(Op.INDEX_ASSIGN,fieldMap,fieldName,argumentValue);
                    }
                }
                let name : string = baseParameter.name;
                op(Op.INDEX_ASSIGN,parameterMap,name,argumentValue);
            }
        }
        let initializerVisitor : ConstantVisitor = new ConstantVisitor(this,externalErrorReporter,{
            lexicalEnvironment : parameterMap});
        let superName : string = null;
        let superArguments : any = null;
        for(let initializer of initializers) {
            if (is(initializer, any)) {
                let initializerExpression : any = initializer.expression;
                let evaluationResult : any = initializerExpression.accept(initializerVisitor);
                if (evaluationResult != null) {
                    let fieldName : string = initializer.fieldName.name;
                    if (fieldMap.containsKey(fieldName)) {
                        errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,node);
                    }
                    op(Op.INDEX_ASSIGN,fieldMap,fieldName,evaluationResult);
                    let getter : any = definingClass.getGetter(fieldName);
                    if (getter != null) {
                        let field : any = getter.variable;
                        if (!this.runtimeTypeMatch(evaluationResult,field.type)) {
                            errorReporter.reportErrorForNode(CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_FIELD_TYPE_MISMATCH,node,new core.DartList.literal(evaluationResult.type,fieldName,field.type));
                        }
                    }
                }
            }else if (is(initializer, any)) {
                let name : any = initializer.constructorName;
                if (name != null) {
                    superName = name.name;
                }
                superArguments = initializer.argumentList.arguments;
            }else if (is(initializer, any)) {
                let constructor : any = initializer.staticElement;
                if (constructor != null && constructor.isConst) {
                    constructor = ConstructorMember.from(constructor,definingClass);
                    let result : any = this.evaluateConstructorCall(node,initializer.argumentList.arguments,constructor,initializerVisitor,externalErrorReporter,{
                        invocation : invocation});
                    reportLocalErrorForRecordedExternalErrors();
                    return result;
                }
            }
        }
        let superclass : any = definingClass.superclass;
        if (superclass != null && !superclass.isObject) {
            let superConstructor : any = superclass.lookUpConstructor(superName,constructor.library);
            if (superConstructor != null) {
                if (op(Op.EQUALS,superArguments,null)) {
                    superArguments = astFactory.nodeList(null);
                }
                this.evaluateSuperConstructorCall(node,fieldMap,superConstructor,superArguments,initializerVisitor,externalErrorReporter);
            }
        }
        reportLocalErrorForRecordedExternalErrors();
        return new bare.createInstance(any,null,definingClass,new bare.createInstance(any,null,fieldMap,{
            invocation : invocation}));
    }
    evaluateSuperConstructorCall(node : any,fieldMap : core.DartHashMap<string,any>,superConstructor : any,superArguments : core.DartList<any>,initializerVisitor : ConstantVisitor,errorReporter : any) : void {
        if (superConstructor != null && superConstructor.isConst) {
            let evaluationResult : any = this.evaluateConstructorCall(node,superArguments,superConstructor,initializerVisitor,errorReporter);
            if (evaluationResult != null) {
                op(Op.INDEX_ASSIGN,fieldMap,GenericState.SUPERCLASS_FIELD,evaluationResult);
            }
        }
    }
    followConstantRedirectionChain(constructor : any) : any {
        let constructorsVisited : core.DartHashSet<any> = new core.DartHashSet<any>();
        while (true){
            let redirectedConstructor : any = this.getConstRedirectedConstructor(constructor);
            if (op(Op.EQUALS,redirectedConstructor,null)) {
                break;
            }else {
                let constructorBase : any = getConstructorImpl(constructor);
                constructorsVisited.add(constructorBase);
                let redirectedConstructorBase : any = getConstructorImpl(redirectedConstructor);
                if (constructorsVisited.contains(redirectedConstructorBase)) {
                    break;
                }
            }
            constructor = redirectedConstructor;
        }
        return constructor;
    }
    generateCycleError(cycle : core.DartIterable<any>,constant : any) : void {
        if (is(constant, any)) {
            let errorListener : any = new bare.createInstance(any,null);
            let errorReporter : any = new bare.createInstance(any,null,errorListener,constant.source);
            errorReporter.reportErrorForElement(CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT,constant,new core.DartList.literal());
            (constant as any).evaluationResult = new EvaluationResultImpl(null,errorListener.errors);
        }else if (is(constant, any)) {
        }else {
            /* TODO (AssertStatementImpl) : assert (false); */;
            AnalysisEngine.instance.logger.logError(`Constant value computer trying to report a cycle error for a node of type ${constant.runtimeType}`);
        }
    }
    getConstRedirectedConstructor(constructor : any) : any {
        if (!constructor.isFactory) {
            return null;
        }
        if (core.identical(constructor.enclosingElement.type,this.typeProvider.symbolType)) {
            return null;
        }
        let redirectedConstructor : any = constructor.redirectedConstructor;
        if (op(Op.EQUALS,redirectedConstructor,null)) {
            return null;
        }
        if (!redirectedConstructor.isConst) {
            return null;
        }
        return redirectedConstructor;
    }
    runtimeTypeMatch(obj : any,type : any) : boolean {
        if (obj.isNull) {
            return true;
        }
        if (type.isUndefined) {
            return false;
        }
        return obj.type.isSubtypeOf(type);
    }
    static isValidPublicSymbol(name : string) : boolean {
        return new core.DartString(name).isEmpty || name == "void" || ConstantEvaluationEngine._PUBLIC_SYMBOL_PATTERN.hasMatch(name);
    }
}

export namespace ConstantEvaluationValidator {
    export type Constructors = 'ConstantEvaluationValidator';
    export type Interface = Omit<ConstantEvaluationValidator, Constructors>;
}
@DartClass
export class ConstantEvaluationValidator {
    @Abstract
    beforeComputeValue(constant : any) : void{ throw 'abstract'}
    @Abstract
    beforeGetConstantInitializers(constructor : any) : void{ throw 'abstract'}
    @Abstract
    beforeGetEvaluationResult(constant : any) : void{ throw 'abstract'}
    @Abstract
    beforeGetFieldEvaluationResult(field : any) : void{ throw 'abstract'}
    @Abstract
    beforeGetParameterDefault(parameter : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ConstantEvaluationValidator() {
    }
}

export namespace ConstantEvaluationValidator_ForProduction {
    export type Constructors = 'ConstantEvaluationValidator_ForProduction';
    export type Interface = Omit<ConstantEvaluationValidator_ForProduction, Constructors>;
}
@DartClass
@Implements(ConstantEvaluationValidator)
export class ConstantEvaluationValidator_ForProduction implements ConstantEvaluationValidator.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeComputeValue(constant : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeGetConstantInitializers(constructor : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeGetEvaluationResult(constant : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeGetFieldEvaluationResult(field : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeGetParameterDefault(parameter : any) : void {
    }
    constructor() {
    }
    @defaultConstructor
    ConstantEvaluationValidator_ForProduction() {
    }
}

export namespace ConstantValueComputer {
    export type Constructors = 'ConstantValueComputer';
    export type Interface = Omit<ConstantValueComputer, Constructors>;
}
@DartClass
export class ConstantValueComputer {
    private static __$_OPERATOR_RE : string;
    static get _OPERATOR_RE() : string { 
        if (this.__$_OPERATOR_RE===undefined) {
            this.__$_OPERATOR_RE = "(?:[\-+*/%&|^]|\[\]=?|==|~/?|<[<=]?|>[>=]?|unary-)";
        }
        return this.__$_OPERATOR_RE;
    }
    static set _OPERATOR_RE(__$value : string)  { 
        this.__$_OPERATOR_RE = __$value;
    }

    private static __$_RESERVED_WORD_RE : string;
    static get _RESERVED_WORD_RE() : string { 
        if (this.__$_RESERVED_WORD_RE===undefined) {
            this.__$_RESERVED_WORD_RE = "(?:assert|break|c(?:a(?:se|tch)|lass|on(?:st|tinue))|d(?:efault|o)|e(?:lse|num|xtends)|f(?:alse|inal(?:ly)?|or)|i[fns]|n(?:ew|ull)|ret(?:hrow|urn)|s(?:uper|witch)|t(?:h(?:is|row)|r(?:ue|y))|v(?:ar|oid)|w(?:hile|ith))";
        }
        return this.__$_RESERVED_WORD_RE;
    }
    static set _RESERVED_WORD_RE(__$value : string)  { 
        this.__$_RESERVED_WORD_RE = __$value;
    }

    referenceGraph : any;

    _constantsToCompute : core.DartHashSet<any>;

    evaluationEngine : ConstantEvaluationEngine;

    constructor(typeProvider : any,declaredVariables : any,validator? : ConstantEvaluationValidator,typeSystem? : any) {
    }
    @defaultConstructor
    ConstantValueComputer(typeProvider : any,declaredVariables : any,validator? : ConstantEvaluationValidator,typeSystem? : any) {
        this.referenceGraph = new bare.createInstance(any,null);
        this._constantsToCompute = new core.DartHashSet<any>();
        this.evaluationEngine = new ConstantEvaluationEngine(typeProvider,declaredVariables,{
            validator : validator,typeSystem : typeSystem});
    }
    add(unit : any) : void {
        let constantFinder : any = new bare.createInstance(any,null);
        unit.accept(constantFinder);
        this._constantsToCompute.addAll(constantFinder.constantsToCompute);
    }
    computeValues() : void {
        for(let constant of this._constantsToCompute) {
            this.referenceGraph.addNode(constant);
            this.evaluationEngine.computeDependencies(constant,(dependency : any) =>  {
                this.referenceGraph.addEdge(constant,dependency);
            });
        }
        let topologicalSort : core.DartList<core.DartList<any>> = this.referenceGraph.computeTopologicalSort();
        for(let constantsInCycle of topologicalSort) {
            if (constantsInCycle.length == 1) {
                let constant : any = constantsInCycle[0];
                if (!this.referenceGraph.getTails(constant).contains(constant)) {
                    this._computeValueFor(constant);
                    continue;
                }
            }
            for(let constant of constantsInCycle) {
                this.evaluationEngine.generateCycleError(constantsInCycle,constant);
            }
        }
    }
    _computeValueFor(constant : any) : void {
        if (!this._constantsToCompute.contains(constant)) {
            return;
        }
        this.evaluationEngine.computeConstantValue(constant);
    }
}

export namespace ConstantVisitor {
    export type Constructors = 'ConstantVisitor';
    export type Interface = Omit<ConstantVisitor, Constructors>;
}
@DartClass
export class ConstantVisitor extends any {
    evaluationEngine : ConstantEvaluationEngine;

    _lexicalEnvironment : core.DartHashMap<string,any>;

    _errorReporter : any;

    _dartObjectComputer : DartObjectComputer;

    constructor(evaluationEngine : ConstantEvaluationEngine,_errorReporter : any,_namedArguments? : {lexicalEnvironment? : core.DartHashMap<string,any>}) {
    }
    @defaultConstructor
    ConstantVisitor(evaluationEngine : ConstantEvaluationEngine,_errorReporter : any,_namedArguments? : {lexicalEnvironment? : core.DartHashMap<string,any>}) {
        let {lexicalEnvironment} = Object.assign({
        }, _namedArguments );
        this._lexicalEnvironment = lexicalEnvironment;
        this.evaluationEngine = evaluationEngine;
        this._errorReporter = _errorReporter;
        this._dartObjectComputer = new DartObjectComputer(this._errorReporter,this.evaluationEngine.typeProvider);
    }
    get _typeProvider() : any {
        return this.evaluationEngine.typeProvider;
    }
    get _typeSystem() : any {
        return this.evaluationEngine.typeSystem;
    }
    evaluateType(type : any) : any {
        if (is(type, any)) {
            if (!this.evaluationEngine.strongMode) {
                return null;
            }
            let name : string = type.name;
            if (this._lexicalEnvironment != null) {
                return (((_232_)=>(!!_232_)?_232_.toTypeValue():null)(op(Op.INDEX,this._lexicalEnvironment,name)) || type);
            }
            return type;
        }
        if (is(type, any)) {
            let typeArguments : core.DartList<any>;
            for(let i : number = 0; i < type.typeArguments.length; i++){
                let ta : any = op(Op.INDEX,type.typeArguments,i);
                let t : any = this.evaluateType(ta);
                if (!core.identical(t,ta)) {
                    if (typeArguments == null) {
                        typeArguments = type.typeArguments.toList({
                            growable : false});
                    }
                    typeArguments[i] = t;
                }
            }
            if (typeArguments == null) return type;
            return type.substitute2(typeArguments,type.typeArguments);
        }
        return type;
    }
    typeConstant(type : any) : any {
        return new bare.createInstance(any,null,this._typeProvider.typeType,new bare.createInstance(any,null,type));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : any {
        let result : any = null;
        for(let string of node.strings) {
            if (op(Op.EQUALS,result,null)) {
                result = string.accept(this);
            }else {
                result = this._dartObjectComputer.concatenate(node,result,string.accept(this));
            }
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : any {
        let leftResult : any = node.leftOperand.accept(this);
        let rightResult : any = node.rightOperand.accept(this);
        let operatorType : any = node.operator.type;
        if (operatorType != TokenType.BANG_EQ && operatorType != TokenType.EQ_EQ && operatorType != TokenType.QUESTION_QUESTION) {
            if (leftResult != null && leftResult.isNull || rightResult != null && rightResult.isNull) {
                this._error(node,CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
                return null;
            }
        }
        if (op(Op.EQUALS,operatorType,TokenType.AMPERSAND)) {
            return this._dartObjectComputer.bitAnd(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.AMPERSAND_AMPERSAND)) {
            return this._dartObjectComputer.logicalAnd(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.BANG_EQ)) {
            return this._dartObjectComputer.notEqual(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.BAR)) {
            return this._dartObjectComputer.bitOr(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.BAR_BAR)) {
            return this._dartObjectComputer.logicalOr(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.CARET)) {
            return this._dartObjectComputer.bitXor(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.EQ_EQ)) {
            return this._dartObjectComputer.equalEqual(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.GT)) {
            return this._dartObjectComputer.greaterThan(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.GT_EQ)) {
            return this._dartObjectComputer.greaterThanOrEqual(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.GT_GT)) {
            return this._dartObjectComputer.shiftRight(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.LT)) {
            return this._dartObjectComputer.lessThan(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.LT_EQ)) {
            return this._dartObjectComputer.lessThanOrEqual(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.LT_LT)) {
            return this._dartObjectComputer.shiftLeft(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.MINUS)) {
            return this._dartObjectComputer.minus(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.PERCENT)) {
            return this._dartObjectComputer.remainder(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.PLUS)) {
            return this._dartObjectComputer.add(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.STAR)) {
            return this._dartObjectComputer.times(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.SLASH)) {
            return this._dartObjectComputer.divide(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.TILDE_SLASH)) {
            return this._dartObjectComputer.integerDivide(node,leftResult,rightResult);
        }else if (op(Op.EQUALS,operatorType,TokenType.QUESTION_QUESTION)) {
            return this._dartObjectComputer.questionQuestion(node,leftResult,rightResult);
        }else {
            this._error(node,null);
            return null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : any {
        return new bare.createInstance(any,null,this._typeProvider.boolType,BoolState.from(node.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : any {
        let condition : any = node.condition;
        let conditionResult : any = condition.accept(this);
        let thenResult : any = node.thenExpression.accept(this);
        let elseResult : any = node.elseExpression.accept(this);
        if (op(Op.EQUALS,conditionResult,null)) {
            return conditionResult;
        }else if (!conditionResult.isBool) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL,condition);
            return null;
        }else if (op(Op.EQUALS,thenResult,null)) {
            return thenResult;
        }else if (op(Op.EQUALS,elseResult,null)) {
            return elseResult;
        }
        conditionResult = this._dartObjectComputer.applyBooleanConversion(condition,conditionResult);
        if (op(Op.EQUALS,conditionResult,null)) {
            return conditionResult;
        }
        if (op(Op.EQUALS,conditionResult.toBoolValue(),true)) {
            return thenResult;
        }else if (op(Op.EQUALS,conditionResult.toBoolValue(),false)) {
            return elseResult;
        }
        let thenType : any = thenResult.type;
        let elseType : any = elseResult.type;
        return new bare.createInstance(any,null,this._typeSystem.getLeastUpperBound(thenType,elseType) as any);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : any {
        return new bare.createInstance(any,null,this._typeProvider.doubleType,new bare.createInstance(any,null,node.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : any {
        if (!node.isConst) {
            this._error(node,null);
            return null;
        }
        let constructor : any = node.staticElement;
        if (op(Op.EQUALS,constructor,null)) {
            return null;
        }
        return this.evaluationEngine.evaluateConstructorCall(node,node.argumentList.arguments,constructor,this,this._errorReporter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : any {
        return new bare.createInstance(any,null,this._typeProvider.intType,new bare.createInstance(any,null,node.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationExpression(node : any) : any {
        let result : any = node.expression.accept(this);
        if (result != null && !result.isBoolNumStringOrNull) {
            this._error(node,CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL_NUM_STRING);
            return null;
        }
        return this._dartObjectComputer.performToString(node,result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterpolationString(node : any) : any {
        return new bare.createInstance(any,null,this._typeProvider.stringType,new bare.createInstance(any,null,node.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : any {
        if (op(Op.EQUALS,node.constKeyword,null)) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.MISSING_CONST_IN_LIST_LITERAL,node);
            return null;
        }
        let errorOccurred : boolean = false;
        let elements : core.DartList<any> = new core.DartList<any>();
        for(let element of node.elements) {
            let elementResult : any = element.accept(this);
            if (op(Op.EQUALS,elementResult,null)) {
                errorOccurred = true;
            }else {
                elements.add(elementResult);
            }
        }
        if (errorOccurred) {
            return null;
        }
        let elementType : any = this._typeProvider.dynamicType;
        let typeArgs : any = ((t)=>(!!t)?t.arguments:null)(node.typeArguments);
        if (op(Op.EQUALS,((t)=>(!!t)?t.length:null)(typeArgs),1)) {
            let type : any = ((_233_)=>(!!_233_)?_233_.toTypeValue():null)(this.visitTypeAnnotation(op(Op.INDEX,typeArgs,0)));
            if (type != null) {
                elementType = type;
            }
        }
        let listType : any = this._typeProvider.listType.instantiate(new core.DartList.literal(elementType));
        return new bare.createInstance(any,null,listType,new bare.createInstance(any,null,elements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : any {
        if (op(Op.EQUALS,node.constKeyword,null)) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.MISSING_CONST_IN_MAP_LITERAL,node);
            return null;
        }
        let errorOccurred : boolean = false;
        let map : core.DartLinkedHashMap<any,any> = new core.DartLinkedHashMap<any,any>();
        for(let entry of node.entries) {
            let keyResult : any = entry.key.accept(this);
            let valueResult : any = entry.value.accept(this);
            if (op(Op.EQUALS,keyResult,null) || op(Op.EQUALS,valueResult,null)) {
                errorOccurred = true;
            }else {
                op(Op.INDEX_ASSIGN,map,keyResult,valueResult);
            }
        }
        if (errorOccurred) {
            return null;
        }
        let keyType : any = this._typeProvider.dynamicType;
        let valueType : any = this._typeProvider.dynamicType;
        let typeArgs : any = ((t)=>(!!t)?t.arguments:null)(node.typeArguments);
        if (op(Op.EQUALS,((t)=>(!!t)?t.length:null)(typeArgs),2)) {
            let keyTypeCandidate : any = ((_234_)=>(!!_234_)?_234_.toTypeValue():null)(this.visitTypeAnnotation(op(Op.INDEX,typeArgs,0)));
            if (keyTypeCandidate != null) {
                keyType = keyTypeCandidate;
            }
            let valueTypeCandidate : any = ((_235_)=>(!!_235_)?_235_.toTypeValue():null)(this.visitTypeAnnotation(op(Op.INDEX,typeArgs,1)));
            if (valueTypeCandidate != null) {
                valueType = valueTypeCandidate;
            }
        }
        let mapType : any = this._typeProvider.mapType.instantiate(new core.DartList.literal(keyType,valueType));
        return new bare.createInstance(any,null,mapType,new bare.createInstance(any,null,map));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : any {
        let element : any = node.methodName.staticElement;
        if (is(element, any)) {
            if (op(Op.EQUALS,element.name,"identical")) {
                let arguments : any = node.argumentList.arguments;
                if (op(Op.EQUALS,arguments.length,2)) {
                    let enclosingElement : any = element.enclosingElement;
                    if (is(enclosingElement, any)) {
                        let library : any = enclosingElement.library;
                        if (library.isDartCore) {
                            let leftArgument : any = op(Op.INDEX,arguments,0).accept(this);
                            let rightArgument : any = op(Op.INDEX,arguments,1).accept(this);
                            return this._dartObjectComputer.isIdentical(node,leftArgument,rightArgument);
                        }
                    }
                }
            }
        }
        this._error(node,null);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : any {
        return node.expression.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : any {
        this._error(node,null);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : any {
        return this._typeProvider.nullObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : any {
        return node.expression.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : any {
        let prefixNode : any = node.prefix;
        let prefixElement : any = prefixNode.staticElement;
        if (isNot(prefixElement, any) && isNot(prefixElement, any)) {
            let prefixResult : any = node.prefix.accept(this);
            if (this._isStringLength(prefixResult,node.identifier)) {
                return prefixResult.stringLength(this._typeProvider);
            }
        }
        if (isNot(prefixElement, any)) {
            let prefixResult : any = prefixNode.accept(this);
            if (op(Op.EQUALS,prefixResult,null)) {
                return null;
            }
        }
        return this._getConstantValue(node,node.staticElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : any {
        let operand : any = node.operand.accept(this);
        if (operand != null && operand.isNull) {
            this._error(node,CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION);
            return null;
        }
        if (op(Op.EQUALS,node.operator.type,TokenType.BANG)) {
            return this._dartObjectComputer.logicalNot(node,operand);
        }else if (op(Op.EQUALS,node.operator.type,TokenType.TILDE)) {
            return this._dartObjectComputer.bitNot(node,operand);
        }else if (op(Op.EQUALS,node.operator.type,TokenType.MINUS)) {
            return this._dartObjectComputer.negated(node,operand);
        }else {
            this._error(node,null);
            return null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : any {
        if (node.target != null) {
            let prefixResult : any = node.target.accept(this);
            if (this._isStringLength(prefixResult,node.propertyName)) {
                return prefixResult.stringLength(this._typeProvider);
            }
        }
        return this._getConstantValue(node,node.propertyName.staticElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : any {
        if (this._lexicalEnvironment != null && this._lexicalEnvironment.containsKey(node.name)) {
            return op(Op.INDEX,this._lexicalEnvironment,node.name);
        }
        return this._getConstantValue(node,node.staticElement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : any {
        return new bare.createInstance(any,null,this._typeProvider.stringType,new bare.createInstance(any,null,node.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : any {
        let result : any = null;
        let first : boolean = true;
        for(let element of node.elements) {
            if (first) {
                result = element.accept(this);
                first = false;
            }else {
                result = this._dartObjectComputer.concatenate(node,result,element.accept(this));
            }
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : any {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let components : core.DartList<any> = node.components;
        for(let i : number = 0; i < components.length; i++){
            if (i > 0) {
                buffer.writeCharCode(46);
            }
            buffer.write(components[i].lexeme);
        }
        return new bare.createInstance(any,null,this._typeProvider.symbolType,new bare.createInstance(any,null,buffer.toString()));
    }
    visitTypeAnnotation(node : any) : any {
        let type : any = this.evaluateType(node.type);
        if (op(Op.EQUALS,type,null)) {
            return super.visitTypeName(node);
        }
        return this.typeConstant(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : any {
        return this.visitTypeAnnotation(node);
    }
    _error(node : any,code : any) : void {
        this._errorReporter.reportErrorForNode((code || CompileTimeErrorCode.INVALID_CONSTANT),node);
    }
    _getConstantValue(node : any,element : any) : any {
        let variableElement : any = is(element, any) ? element.variable : element;
        if (is(variableElement, any)) {
            this.evaluationEngine.validator.beforeGetEvaluationResult(variableElement);
            let value : EvaluationResultImpl = variableElement.evaluationResult;
            if (variableElement.isConst && value != null) {
                return value.value;
            }
        }else if (is(variableElement, any)) {
            let function : any = element;
            if (function.isStatic) {
                let functionType : any = function.type;
                if (op(Op.EQUALS,functionType,null)) {
                    functionType = this._typeProvider.functionType;
                }
                return new bare.createInstance(any,null,functionType,new bare.createInstance(any,null,function));
            }
        }else if (is(variableElement, any)) {
            if (this.evaluationEngine.strongMode || isNot(variableElement, any)) {
                return new bare.createInstance(any,null,this._typeProvider.typeType,new bare.createInstance(any,null,variableElement.type));
            }
        }
        this._error(node,null);
        return null;
    }
    _isStringLength(targetResult : any,identifier : any) : boolean {
        if (op(Op.EQUALS,targetResult,null) || targetResult.type != this._typeProvider.stringType) {
            return false;
        }
        return op(Op.EQUALS,identifier.name,'length');
    }
    _valueOf(expression : any) : any {
        let expressionValue : any = expression.accept(this);
        if (expressionValue != null) {
            return expressionValue;
        }
        return this._typeProvider.nullObject;
    }
}

export namespace DartObjectComputer {
    export type Constructors = 'DartObjectComputer';
    export type Interface = Omit<DartObjectComputer, Constructors>;
}
@DartClass
export class DartObjectComputer {
    _errorReporter : any;

    _typeProvider : any;

    constructor(_errorReporter : any,_typeProvider : any) {
    }
    @defaultConstructor
    DartObjectComputer(_errorReporter : any,_typeProvider : any) {
        this._errorReporter = _errorReporter;
        this._typeProvider = _typeProvider;
    }
    add(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.add(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                    return null;
                }
            }
        }
        return null;
    }
    applyBooleanConversion(node : any,evaluationResult : any) : any {
        if (evaluationResult != null) {
            try {
                return evaluationResult.convertToBool(this._typeProvider);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    bitAnd(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.bitAnd(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    bitNot(node : any,evaluationResult : any) : any {
        if (evaluationResult != null) {
            try {
                return evaluationResult.bitNot(this._typeProvider);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    bitOr(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.bitOr(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    bitXor(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.bitXor(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    concatenate(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.concatenate(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    divide(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.divide(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    equalEqual(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.equalEqual(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    greaterThan(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.greaterThan(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    greaterThanOrEqual(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.greaterThanOrEqual(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    integerDivide(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.integerDivide(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    isIdentical(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.isIdentical(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    lessThan(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.lessThan(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    lessThanOrEqual(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.lessThanOrEqual(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    logicalAnd(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.logicalAnd(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    logicalNot(node : any,evaluationResult : any) : any {
        if (evaluationResult != null) {
            try {
                return evaluationResult.logicalNot(this._typeProvider);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    logicalOr(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.logicalOr(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    minus(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.minus(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    negated(node : any,evaluationResult : any) : any {
        if (evaluationResult != null) {
            try {
                return evaluationResult.negated(this._typeProvider);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    notEqual(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.notEqual(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    performToString(node : any,evaluationResult : any) : any {
        if (evaluationResult != null) {
            try {
                return evaluationResult.performToString(this._typeProvider);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    questionQuestion(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            if (leftOperand.isNull) {
                return rightOperand;
            }
            return leftOperand;
        }
        return null;
    }
    remainder(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.remainder(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    shiftLeft(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.shiftLeft(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    shiftRight(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.shiftRight(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
    stringLength(node : any,evaluationResult : EvaluationResultImpl) : EvaluationResultImpl {
        if (evaluationResult.value != null) {
            try {
                return new EvaluationResultImpl(evaluationResult.value.stringLength(this._typeProvider));
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return new EvaluationResultImpl(null);
    }
    times(node : any,leftOperand : any,rightOperand : any) : any {
        if (leftOperand != null && rightOperand != null) {
            try {
                return leftOperand.times(this._typeProvider,rightOperand);
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    this._errorReporter.reportErrorForNode(exception.errorCode,node);
                }
            }
        }
        return null;
    }
}

export namespace EvaluationResult {
    export type Constructors = 'EvaluationResult';
    export type Interface = Omit<EvaluationResult, Constructors>;
}
@DartClass
export class EvaluationResult {
    value : any;

    _errors : core.DartList<any>;

    constructor(value : any,_errors : core.DartList<any>) {
    }
    @defaultConstructor
    EvaluationResult(value : any,_errors : core.DartList<any>) {
        this.value = value;
        this._errors = _errors;
    }
    get errors() : core.DartList<any> {
        return (this._errors || AnalysisError.NO_ERRORS);
    }
    get isValid() : boolean {
        return this._errors == null;
    }
    static forErrors(errors : core.DartList<any>) : EvaluationResult {
        return new EvaluationResult(null,errors);
    }
    static forValue(value : any) : EvaluationResult {
        return new EvaluationResult(value,null);
    }
}

export namespace EvaluationResultImpl {
    export type Constructors = 'EvaluationResultImpl';
    export type Interface = Omit<EvaluationResultImpl, Constructors>;
}
@DartClass
export class EvaluationResultImpl {
    _errors : core.DartList<any>;

    value : any;

    constructor(value : any,errors? : core.DartList<any>) {
    }
    @defaultConstructor
    EvaluationResultImpl(value : any,errors? : core.DartList<any>) {
        this.value = value;
        this._errors = (errors || new core.DartList.literal<any>());
    }
    get errors() : core.DartList<any> {
        return this._errors;
    }
    equalValues(typeProvider : any,result : EvaluationResultImpl) : boolean {
        if (this.value != null) {
            if (op(Op.EQUALS,result.value,null)) {
                return false;
            }
            return op(Op.EQUALS,this.value,result.value);
        }else {
            return false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (op(Op.EQUALS,this.value,null)) {
            return "error";
        }
        return this.value.toString();
    }
}

export class properties {
}
