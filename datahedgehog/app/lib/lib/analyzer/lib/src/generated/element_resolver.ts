/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/element_resolver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ElementResolver {
    export type Constructors = 'ElementResolver';
    export type Interface = Omit<ElementResolver, Constructors>;
}
@DartClass
export class ElementResolver extends any {
    _resolver : any;

    _definingLibrary : any;

    _enableHints : boolean;

    _enableStrictCallChecks : boolean;

    _dynamicType : any;

    _typeType : any;

    _subtypeManager : any;

    _promoteManager : any;

    constructor(_resolver : any) {
    }
    @defaultConstructor
    ElementResolver(_resolver : any) {
        this._enableHints = false;
        this._enableStrictCallChecks = false;
        this._resolver = _resolver;
        this._definingLibrary = this._resolver.definingLibrary;
        let options : any = this._definingLibrary.context.analysisOptions;
        this._enableHints = options.hint;
        this._enableStrictCallChecks = options.enableStrictCallChecks;
        this._dynamicType = this._resolver.typeProvider.dynamicType;
        this._typeType = this._resolver.typeProvider.typeType;
        this._subtypeManager = new bare.createInstance(any,null);
        this._promoteManager = this._resolver.promoteManager;
    }
    get isInConstConstructor() : boolean {
        let function : any = this._resolver.enclosingFunction;
        if (is(function, any)) {
            return function.isConst;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        let operator : any = node.operator;
        let operatorType : any = operator.type;
        if (operatorType != TokenType.AMPERSAND_AMPERSAND_EQ && operatorType != TokenType.BAR_BAR_EQ && operatorType != TokenType.EQ && operatorType != TokenType.QUESTION_QUESTION_EQ) {
            operatorType = this._operatorFromCompoundAssignment(operatorType);
            let leftHandSide : any = node.leftHandSide;
            if (leftHandSide != null) {
                let methodName : string = operatorType.lexeme;
                let staticType : any = this._getStaticType(leftHandSide);
                let staticMethod : any = this._lookUpMethod(leftHandSide,staticType,methodName);
                node.staticElement = staticMethod;
                let propagatedType : any = this._getPropagatedType(leftHandSide);
                let propagatedMethod : any = this._lookUpMethod(leftHandSide,propagatedType,methodName);
                node.propagatedElement = propagatedMethod;
                if (this._shouldReportMissingMember(staticType,staticMethod)) {
                    this._recordUndefinedToken(staticType.element,StaticTypeWarningCode.UNDEFINED_METHOD,operator,new core.DartList.literal(methodName,staticType.displayName));
                }else if (this._enableHints && this._shouldReportMissingMember(propagatedType,propagatedMethod) && !this._memberFoundInSubclass(propagatedType.element,methodName,true,false)) {
                    this._recordUndefinedToken(propagatedType.element,HintCode.UNDEFINED_METHOD,operator,new core.DartList.literal(methodName,propagatedType.displayName));
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        let operator : any = node.operator;
        if (operator.isUserDefinableOperator) {
            this._resolveBinaryExpression(node,operator.lexeme);
        }else if (op(Op.EQUALS,operator.type,TokenType.BANG_EQ)) {
            this._resolveBinaryExpression(node,TokenType.EQ_EQ.lexeme);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : core.DartObject {
        node.target = this._lookupBreakOrContinueTarget(node,node.label,false);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : core.DartObject {
        let identifier : any = node.identifier;
        if (is(identifier, any)) {
            let element : any = this._resolveSimpleIdentifier(identifier);
            if (op(Op.EQUALS,element,null)) {
                element = this._findImportWithoutPrefix(identifier);
                if (is(element, any)) {
                    element = null;
                }
            }
            if (op(Op.EQUALS,element,null)) {
            }else {
                if (op(Op.EQUALS,element.library,null) || element.library != this._definingLibrary) {
                }
                identifier.staticElement = element;
                if (node.newKeyword != null) {
                    if (is(element, any)) {
                        let constructor : any = element.unnamedConstructor;
                        if (op(Op.EQUALS,constructor,null)) {
                        }else {
                            identifier.staticElement = constructor;
                        }
                    }else {
                    }
                }
            }
        }else if (is(identifier, any)) {
            let prefix : any = identifier.prefix;
            let name : any = identifier.identifier;
            let element : any = this._resolveSimpleIdentifier(prefix);
            if (op(Op.EQUALS,element,null)) {
            }else {
                prefix.staticElement = element;
                if (is(element, any)) {
                    element = this._resolver.nameScope.lookup(identifier,this._definingLibrary);
                    name.staticElement = element;
                    return null;
                }
                let library : any = element.library;
                if (op(Op.EQUALS,library,null)) {
                    AnalysisEngine.instance.logger.logError(`Found element with null library: ${element.name}`);
                }else if (library != this._definingLibrary) {
                }
                if (op(Op.EQUALS,node.newKeyword,null)) {
                    if (is(element, any)) {
                        let memberElement : any = this._lookupGetterOrMethod(element.type,name.name);
                        if (op(Op.EQUALS,memberElement,null)) {
                            memberElement = element.getNamedConstructor(name.name);
                            if (op(Op.EQUALS,memberElement,null)) {
                                memberElement = this._lookUpSetter(prefix,element.type,name.name);
                            }
                        }
                        if (op(Op.EQUALS,memberElement,null)) {
                        }else {
                            name.staticElement = memberElement;
                        }
                    }else {
                    }
                }else {
                    if (is(element, any)) {
                        let constructor : any = element.getNamedConstructor(name.name);
                        if (op(Op.EQUALS,constructor,null)) {
                        }else {
                            name.staticElement = constructor;
                        }
                    }else {
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
    visitConstructorDeclaration(node : any) : core.DartObject {
        super.visitConstructorDeclaration(node);
        let element : any = node.element;
        if (is(element, any)) {
            let redirectedNode : any = node.redirectedConstructor;
            if (redirectedNode != null) {
                let redirectedElement : any = redirectedNode.staticElement;
                element.redirectedConstructor = redirectedElement;
            }else {
                for(let initializer of node.initializers) {
                    if (is(initializer, any)) {
                        let redirectedElement : any = initializer.staticElement;
                        element.redirectedConstructor = redirectedElement;
                    }
                }
            }
            ElementResolver.resolveMetadata(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : core.DartObject {
        let fieldName : any = node.fieldName;
        let enclosingClass : any = this._resolver.enclosingClass;
        let fieldElement : any = enclosingClass.getField(fieldName.name);
        fieldName.staticElement = fieldElement;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : core.DartObject {
        let type : any = node.type.type;
        if (type != null && type.isDynamic) {
        }else if (is(type, any)) {
            let constructor : any;
            let name : any = node.name;
            if (op(Op.EQUALS,name,null)) {
                constructor = type.lookUpConstructor(null,this._definingLibrary);
            }else {
                constructor = type.lookUpConstructor(name.name,this._definingLibrary);
                name.staticElement = constructor;
            }
            node.staticElement = constructor;
        }else {
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : core.DartObject {
        node.target = this._lookupBreakOrContinueTarget(node,node.label,true);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitEnumDeclaration(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        let exportElement : any = node.element;
        if (exportElement != null) {
            this._resolveCombinators(exportElement.exportedLibrary,node.combinators);
            ElementResolver.resolveMetadata(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : core.DartObject {
        this._resolveMetadataForParameter(node);
        return super.visitFieldFormalParameter(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        let function : any = node.function;
        let staticInvokeType : any = this._instantiateGenericMethod(function.staticType,node.typeArguments,node);
        let propagatedInvokeType : any = this._instantiateGenericMethod(function.propagatedType,node.typeArguments,node);
        node.staticInvokeType = staticInvokeType;
        node.propagatedInvokeType = this._propagatedInvokeTypeIfBetter(propagatedInvokeType,staticInvokeType);
        let parameters : core.DartList<any> = this._computeCorrespondingParameters(node.argumentList,staticInvokeType);
        if (parameters != null) {
            node.argumentList.correspondingStaticParameters = parameters;
        }
        parameters = this._computeCorrespondingParameters(node.argumentList,propagatedInvokeType);
        if (parameters != null) {
            node.argumentList.correspondingPropagatedParameters = parameters;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypedFormalParameter(node : any) : core.DartObject {
        this._resolveMetadataForParameter(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        let prefixNode : any = node.prefix;
        if (prefixNode != null) {
            let prefixName : string = prefixNode.name;
            let prefixes : core.DartList<any> = this._definingLibrary.prefixes;
            let count : number = prefixes.length;
            for(let i : number = 0; i < count; i++){
                let prefixElement : any = prefixes[i];
                if (op(Op.EQUALS,prefixElement.displayName,prefixName)) {
                    prefixNode.staticElement = prefixElement;
                    break;
                }
            }
        }
        let importElement : any = node.element;
        if (importElement != null) {
            let library : any = importElement.importedLibrary;
            if (library != null) {
                this._resolveCombinators(library,node.combinators);
            }
            ElementResolver.resolveMetadata(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : core.DartObject {
        let target : any = node.realTarget;
        let staticType : any = this._getStaticType(target);
        let propagatedType : any = this._getPropagatedType(target);
        let getterMethodName : string = TokenType.INDEX.lexeme;
        let setterMethodName : string = TokenType.INDEX_EQ.lexeme;
        let isInGetterContext : boolean = node.inGetterContext();
        let isInSetterContext : boolean = node.inSetterContext();
        if (isInGetterContext && isInSetterContext) {
            let setterStaticMethod : any = this._lookUpMethod(target,staticType,setterMethodName);
            let setterPropagatedMethod : any = this._lookUpMethod(target,propagatedType,setterMethodName);
            node.staticElement = setterStaticMethod;
            node.propagatedElement = setterPropagatedMethod;
            this._checkForUndefinedIndexOperator(node,target,getterMethodName,setterStaticMethod,setterPropagatedMethod,staticType,propagatedType);
            let getterStaticMethod : any = this._lookUpMethod(target,staticType,getterMethodName);
            let getterPropagatedMethod : any = this._lookUpMethod(target,propagatedType,getterMethodName);
            let auxiliaryElements : any = new bare.createInstance(any,null,getterStaticMethod,getterPropagatedMethod);
            node.auxiliaryElements = auxiliaryElements;
            this._checkForUndefinedIndexOperator(node,target,getterMethodName,getterStaticMethod,getterPropagatedMethod,staticType,propagatedType);
        }else if (isInGetterContext) {
            let staticMethod : any = this._lookUpMethod(target,staticType,getterMethodName);
            let propagatedMethod : any = this._lookUpMethod(target,propagatedType,getterMethodName);
            node.staticElement = staticMethod;
            node.propagatedElement = propagatedMethod;
            this._checkForUndefinedIndexOperator(node,target,getterMethodName,staticMethod,propagatedMethod,staticType,propagatedType);
        }else if (isInSetterContext) {
            let staticMethod : any = this._lookUpMethod(target,staticType,setterMethodName);
            let propagatedMethod : any = this._lookUpMethod(target,propagatedType,setterMethodName);
            node.staticElement = staticMethod;
            node.propagatedElement = propagatedMethod;
            this._checkForUndefinedIndexOperator(node,target,setterMethodName,staticMethod,propagatedMethod,staticType,propagatedType);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        let invokedConstructor : any = node.constructorName.staticElement;
        node.staticElement = invokedConstructor;
        let argumentList : any = node.argumentList;
        let parameters : core.DartList<any> = this._resolveArgumentsToFunction(node.isConst,argumentList,invokedConstructor);
        if (parameters != null) {
            argumentList.correspondingStaticParameters = parameters;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        let methodName : any = node.methodName;
        if (methodName.isSynthetic) {
            return null;
        }
        let target : any = node.realTarget;
        if (is(target, any) && !ElementResolver._isSuperInValidContext(target)) {
            return null;
        }
        let staticElement : any;
        let propagatedElement : any;
        if (op(Op.EQUALS,target,null)) {
            staticElement = this._resolveInvokedElement(methodName);
            propagatedElement = null;
        }else if (op(Op.EQUALS,methodName.name,FunctionElement.LOAD_LIBRARY_NAME) && this._isDeferredPrefix(target)) {
            if (op(Op.EQUALS,node.operator.type,TokenType.QUESTION_PERIOD)) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT,target,new core.DartList.literal((target as any).name));
            }
            let importedLibrary : any = this._getImportedLibrary(target);
            let loadLibraryFunction : any = ((t)=>(!!t)?t.loadLibraryFunction:null)(importedLibrary);
            methodName.staticElement = loadLibraryFunction;
            node.staticInvokeType = loadLibraryFunction.type;
            return null;
        }else {
            let isConditional : boolean = op(Op.EQUALS,node.operator.type,TokenType.QUESTION_PERIOD);
            let typeReference : any = ElementResolver.getTypeReference(target);
            if (typeReference != null) {
                if (node.isCascaded) {
                    typeReference = this._typeType.element;
                }
                staticElement = this._resolveElement(typeReference,methodName);
            }else {
                let staticType : any = this._resolver.strongMode ? this._getStaticTypeOrFunctionType(target) : this._getStaticType(target);
                let propagatedType : any = this._getPropagatedType(target);
                staticElement = this._resolveInvokedElementWithTarget(target,staticType,methodName,isConditional);
                if (is(propagatedType, any)) {
                    propagatedElement = this._resolveInvokedElementWithTarget(target,propagatedType,methodName,isConditional);
                }
            }
        }
        staticElement = this._convertSetterToGetter(staticElement);
        propagatedElement = this._convertSetterToGetter(propagatedElement);
        let staticInvokeType : any = this._getInvokeType(staticElement);
        methodName.staticType = staticInvokeType;
        let propagatedInvokeType : any = this._getInvokeType(propagatedElement);
        methodName.propagatedType = this._propagatedInvokeTypeIfBetter(propagatedInvokeType,staticInvokeType);
        staticInvokeType = this._instantiateGenericMethod(staticInvokeType,node.typeArguments,node.methodName);
        propagatedInvokeType = this._instantiateGenericMethod(propagatedInvokeType,node.typeArguments,node.methodName);
        methodName.staticElement = staticElement;
        methodName.propagatedElement = propagatedElement;
        node.staticInvokeType = staticInvokeType;
        node.propagatedInvokeType = this._propagatedInvokeTypeIfBetter(propagatedInvokeType,staticInvokeType);
        let argumentList : any = node.argumentList;
        if (staticInvokeType != null) {
            let parameters : core.DartList<any> = this._computeCorrespondingParameters(argumentList,staticInvokeType);
            argumentList.correspondingStaticParameters = parameters;
        }
        if (propagatedInvokeType != null) {
            let parameters : core.DartList<any> = this._computeCorrespondingParameters(argumentList,propagatedInvokeType);
            argumentList.correspondingPropagatedParameters = parameters;
        }
        let errorCode : any = this._checkForInvocationError(target,true,staticElement);
        if (errorCode != null && is(target, any) && is(target.staticElement, any)) {
            let functionName : any = new bare.createInstance(any,null,target,methodName);
            if (this._resolver.nameScope.shouldIgnoreUndefined(functionName)) {
                return null;
            }
        }
        let generatedWithTypePropagation : boolean = false;
        if (this._enableHints && op(Op.EQUALS,errorCode,null) && op(Op.EQUALS,staticElement,null)) {
            errorCode = this._checkForInvocationError(target,false,propagatedElement);
            if (core.identical(errorCode,StaticTypeWarningCode.UNDEFINED_METHOD)) {
                let classElementContext : any = null;
                if (op(Op.EQUALS,target,null)) {
                    classElementContext = this._resolver.enclosingClass;
                }else {
                    let type : any = this._getBestType(target);
                    if (type != null) {
                        let element : any = type.element;
                        if (is(element, any)) {
                            classElementContext = element;
                        }
                    }
                }
                if (classElementContext != null) {
                    this._subtypeManager.ensureLibraryVisited(this._definingLibrary);
                    let subtypeElements : core.DartHashSet<any> = this._subtypeManager.computeAllSubtypes(classElementContext);
                    for(let subtypeElement of subtypeElements) {
                        if (subtypeElement.getMethod(methodName.name) != null) {
                            errorCode = null;
                        }
                    }
                }
            }
            generatedWithTypePropagation = true;
        }
        if (op(Op.EQUALS,errorCode,null)) {
            return null;
        }
        if (core.identical(errorCode,StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION) || core.identical(errorCode,CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT) || core.identical(errorCode,StaticTypeWarningCode.UNDEFINED_FUNCTION)) {
            if (!this._resolver.nameScope.shouldIgnoreUndefined(methodName)) {
                this._resolver.errorReporter.reportErrorForNode(errorCode,methodName,new core.DartList.literal(methodName.name));
            }
        }else if (core.identical(errorCode,StaticTypeWarningCode.UNDEFINED_METHOD)) {
            let targetTypeName : string;
            if (op(Op.EQUALS,target,null)) {
                let enclosingClass : any = this._resolver.enclosingClass;
                targetTypeName = enclosingClass.displayName;
                let proxyErrorCode : any = (generatedWithTypePropagation ? HintCode.UNDEFINED_METHOD : StaticTypeWarningCode.UNDEFINED_METHOD);
                this._recordUndefinedNode(this._resolver.enclosingClass,proxyErrorCode,methodName,new core.DartList.literal(methodName.name,targetTypeName));
            }else {
                let targetType : any = null;
                if (!generatedWithTypePropagation) {
                    targetType = this._getStaticType(target);
                }else {
                    targetType = this._getPropagatedType(target);
                    if (op(Op.EQUALS,targetType,null)) {
                        targetType = this._getStaticType(target);
                    }
                }
                if (!this._enableStrictCallChecks && targetType != null && targetType.isDartCoreFunction && op(Op.EQUALS,methodName.name,FunctionElement.CALL_METHOD_NAME)) {
                    return null;
                }
                if (!node.isCascaded) {
                    let typeReference : any = ElementResolver.getTypeReference(target);
                    if (typeReference != null) {
                        let constructor : any = typeReference.getNamedConstructor(methodName.name);
                        if (constructor != null) {
                            this._recordUndefinedNode(typeReference,StaticTypeWarningCode.UNDEFINED_METHOD_WITH_CONSTRUCTOR,methodName,new core.DartList.literal(methodName.name,typeReference.name));
                            return null;
                        }
                    }
                }
                targetTypeName = ((t)=>(!!t)?t.displayName:null)(targetType);
                let proxyErrorCode : any = (generatedWithTypePropagation ? HintCode.UNDEFINED_METHOD : StaticTypeWarningCode.UNDEFINED_METHOD);
                this._recordUndefinedNode(targetType.element,proxyErrorCode,methodName,new core.DartList.literal(methodName.name,targetTypeName));
            }
        }else if (core.identical(errorCode,StaticTypeWarningCode.UNDEFINED_SUPER_METHOD)) {
            var getSuperType : (type : any) => any = (type : any) : any =>  {
                if (is(type, any) && !type.isObject) {
                    return type.superclass;
                }
                return type;
            };
            let targetType : any = getSuperType(this._getStaticType(target));
            let targetTypeName : string = ((t)=>(!!t)?t.name:null)(targetType);
            this._resolver.errorReporter.reportErrorForNode(StaticTypeWarningCode.UNDEFINED_SUPER_METHOD,methodName,new core.DartList.literal(methodName.name,targetTypeName));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : core.DartObject {
        let operand : any = node.operand;
        let methodName : string = this._getPostfixOperator(node);
        let staticType : any = this._getStaticType(operand);
        let staticMethod : any = this._lookUpMethod(operand,staticType,methodName);
        node.staticElement = staticMethod;
        let propagatedType : any = this._getPropagatedType(operand);
        let propagatedMethod : any = this._lookUpMethod(operand,propagatedType,methodName);
        node.propagatedElement = propagatedMethod;
        if (this._shouldReportMissingMember(staticType,staticMethod)) {
            if (is(operand, any)) {
                this._recordUndefinedToken(staticType.element,StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR,node.operator,new core.DartList.literal(methodName,staticType.displayName));
            }else {
                this._recordUndefinedToken(staticType.element,StaticTypeWarningCode.UNDEFINED_OPERATOR,node.operator,new core.DartList.literal(methodName,staticType.displayName));
            }
        }else if (this._enableHints && this._shouldReportMissingMember(propagatedType,propagatedMethod) && !this._memberFoundInSubclass(propagatedType.element,methodName,true,false)) {
            this._recordUndefinedToken(propagatedType.element,HintCode.UNDEFINED_OPERATOR,node.operator,new core.DartList.literal(methodName,propagatedType.displayName));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        let prefix : any = node.prefix;
        let identifier : any = node.identifier;
        if (op(Op.EQUALS,identifier.name,FunctionElement.LOAD_LIBRARY_NAME) && this._isDeferredPrefix(prefix)) {
            let importedLibrary : any = this._getImportedLibrary(prefix);
            identifier.staticElement = ((t)=>(!!t)?t.loadLibraryFunction:null)(importedLibrary);
            return null;
        }
        let prefixElement : any = prefix.staticElement;
        if (is(prefixElement, any)) {
            let element : any = this._resolver.nameScope.lookup(node,this._definingLibrary);
            if (op(Op.EQUALS,element,null) && identifier.inSetterContext()) {
                let setterName : any = new bare.createInstance(any,null,node.prefix,new bare.createInstance(any,null,new bare.createInstance(any,null,TokenType.STRING,`${node.identifier.name}=`,op(Op.MINUS,node.identifier.offset,1))));
                element = this._resolver.nameScope.lookup(setterName,this._definingLibrary);
            }
            if (op(Op.EQUALS,element,null) && this._resolver.nameScope.shouldIgnoreUndefined(node)) {
                return null;
            }
            if (op(Op.EQUALS,element,null)) {
                if (identifier.inSetterContext()) {
                    this._resolver.errorReporter.reportErrorForNode(StaticWarningCode.UNDEFINED_SETTER,identifier,new core.DartList.literal(identifier.name,prefixElement.name));
                    return null;
                }
                let parent : any = node.parent;
                if (is(parent, any)) {
                    this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_ANNOTATION,parent);
                }else {
                    this._resolver.errorReporter.reportErrorForNode(StaticWarningCode.UNDEFINED_GETTER,identifier,new core.DartList.literal(identifier.name,prefixElement.name));
                }
                return null;
            }
            let accessor : any = element;
            if (is(accessor, any) && identifier.inSetterContext()) {
                let variable : any = accessor.variable;
                if (variable != null) {
                    let setter : any = variable.setter;
                    if (setter != null) {
                        element = setter;
                    }
                }
            }
            identifier.staticElement = element;
            let parent : any = node.parent;
            if (is(parent, any)) {
                this._resolveAnnotationElement(parent);
            }
            return null;
        }
        let parent : any = node.parent;
        if (is(parent, any)) {
            this._resolveAnnotationElement(parent);
        }
        this._resolvePropertyAccess(prefix,identifier,false);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        let operator : any = node.operator;
        let operatorType : any = operator.type;
        if (operatorType.isUserDefinableOperator || op(Op.EQUALS,operatorType,TokenType.PLUS_PLUS) || op(Op.EQUALS,operatorType,TokenType.MINUS_MINUS)) {
            let operand : any = node.operand;
            let methodName : string = this._getPrefixOperator(node);
            let staticType : any = this._getStaticType(operand);
            let staticMethod : any = this._lookUpMethod(operand,staticType,methodName);
            node.staticElement = staticMethod;
            let propagatedType : any = this._getPropagatedType(operand);
            let propagatedMethod : any = this._lookUpMethod(operand,propagatedType,methodName);
            node.propagatedElement = propagatedMethod;
            if (this._shouldReportMissingMember(staticType,staticMethod)) {
                if (is(operand, any)) {
                    this._recordUndefinedToken(staticType.element,StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR,operator,new core.DartList.literal(methodName,staticType.displayName));
                }else {
                    this._recordUndefinedToken(staticType.element,StaticTypeWarningCode.UNDEFINED_OPERATOR,operator,new core.DartList.literal(methodName,staticType.displayName));
                }
            }else if (this._enableHints && this._shouldReportMissingMember(propagatedType,propagatedMethod) && !this._memberFoundInSubclass(propagatedType.element,methodName,true,false)) {
                this._recordUndefinedToken(propagatedType.element,HintCode.UNDEFINED_OPERATOR,operator,new core.DartList.literal(methodName,propagatedType.displayName));
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        let target : any = node.realTarget;
        if (is(target, any) && !ElementResolver._isSuperInValidContext(target)) {
            return null;
        }
        let propertyName : any = node.propertyName;
        this._resolvePropertyAccess(target,propertyName,node.isCascaded);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        let enclosingClass : any = this._resolver.enclosingClass;
        if (op(Op.EQUALS,enclosingClass,null)) {
            return null;
        }
        let name : any = node.constructorName;
        let element : any;
        if (op(Op.EQUALS,name,null)) {
            element = enclosingClass.unnamedConstructor;
        }else {
            element = enclosingClass.getNamedConstructor(name.name);
        }
        if (op(Op.EQUALS,element,null)) {
            return null;
        }
        if (name != null) {
            name.staticElement = element;
        }
        node.staticElement = element;
        let argumentList : any = node.argumentList;
        let parameters : core.DartList<any> = this._resolveArgumentsToFunction(false,argumentList,element);
        if (parameters != null) {
            argumentList.correspondingStaticParameters = parameters;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleFormalParameter(node : any) : core.DartObject {
        this._resolveMetadataForParameter(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        if (node.isSynthetic) {
            return null;
        }
        if (node.inDeclarationContext()) {
            return null;
        }
        if (is(node.staticElement, any) || is(node.staticElement, any)) {
            return null;
        }
        let parent : any = node.parent;
        if (is(parent, any)) {
            return null;
        }else if (is(parent, any) && op(Op.EQUALS,parent.fieldName,node)) {
            return null;
        }else if (is(parent, any) && op(Op.EQUALS,parent.constructorName,node)) {
            return null;
        }
        if (op(Op.EQUALS,node.name,this._dynamicType.name)) {
            node.staticElement = this._dynamicType.element;
            node.staticType = this._typeType;
            return null;
        }
        let element : any = this._resolveSimpleIdentifier(node);
        let enclosingClass : any = this._resolver.enclosingClass;
        if (ElementResolver._isFactoryConstructorReturnType(node) && !core.identical(element,enclosingClass)) {
            this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_FACTORY_NAME_NOT_A_CLASS,node);
        }else if (ElementResolver._isConstructorReturnType(node) && !core.identical(element,enclosingClass)) {
            this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_CONSTRUCTOR_NAME,node);
            element = null;
        }else if (op(Op.EQUALS,element,null) || (is(element, any) && !this._isValidAsPrefix(node))) {
            if (ElementResolver._isConstructorReturnType(node)) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_CONSTRUCTOR_NAME,node);
            }else if (is(parent, any)) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_ANNOTATION,parent);
            }else if (element != null) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT,node,new core.DartList.literal(element.name));
            }else if (op(Op.EQUALS,node.name,"await") && this._resolver.enclosingFunction != null) {
                this._recordUndefinedNode(this._resolver.enclosingClass,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT,node,new core.DartList.literal(this._resolver.enclosingFunction.displayName));
            }else if (!this._resolver.nameScope.shouldIgnoreUndefined(node)) {
                this._recordUndefinedNode(this._resolver.enclosingClass,StaticWarningCode.UNDEFINED_IDENTIFIER,node,new core.DartList.literal(node.name));
            }
        }
        node.staticElement = element;
        if (node.inSetterContext() && node.inGetterContext() && enclosingClass != null) {
            let enclosingType : any = enclosingClass.type;
            let auxiliaryElements : any = new bare.createInstance(any,null,this._lookUpGetter(null,enclosingType,node.name),null);
            node.auxiliaryElements = auxiliaryElements;
        }
        if (is(parent, any)) {
            this._resolveAnnotationElement(parent);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        let enclosingClass : any = AbstractClassElementImpl.getImpl(this._resolver.enclosingClass);
        if (op(Op.EQUALS,enclosingClass,null)) {
            return null;
        }
        let superType : any = enclosingClass.supertype;
        if (op(Op.EQUALS,superType,null)) {
            return null;
        }
        let name : any = node.constructorName;
        let superName : string = ((t)=>(!!t)?t.name:null)(name);
        let element : any = superType.lookUpConstructor(superName,this._definingLibrary);
        if (op(Op.EQUALS,element,null) || (!enclosingClass.doesMixinLackConstructors && !enclosingClass.isSuperConstructorAccessible(element))) {
            if (name != null) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER,node,new core.DartList.literal(superType.displayName,name));
            }else {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT,node,new core.DartList.literal(superType.displayName));
            }
            return null;
        }else {
            if (element.isFactory) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.NON_GENERATIVE_CONSTRUCTOR,node,new core.DartList.literal(element));
            }
        }
        if (name != null) {
            name.staticElement = element;
        }
        node.staticElement = element;
        let declaration : any = node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        let superclassName : any = ((t)=>(!!t)?t.name:null)(((t)=>(!!t)?t.superclass:null)(declaration.extendsClause));
        if (superclassName != null && this._resolver.nameScope.shouldIgnoreUndefined(superclassName)) {
            return null;
        }
        let argumentList : any = node.argumentList;
        let parameters : core.DartList<any> = this._resolveArgumentsToFunction(this.isInConstConstructor,argumentList,element);
        if (parameters != null) {
            argumentList.correspondingStaticParameters = parameters;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : core.DartObject {
        if (!ElementResolver._isSuperInValidContext(node)) {
            this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT,node);
        }
        return super.visitSuperExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameter(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        ElementResolver.resolveMetadata(node);
        return null;
    }
    _checkForInvocationError(target : any,useStaticContext : boolean,element : any) : any {
        if (is(element, any)) {
            return CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT;
        }else if (is(element, any)) {
            let getterType : any = element.type;
            if (getterType != null) {
                let returnType : any = getterType.returnType;
                if (!this._isExecutableType(returnType)) {
                    return StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION;
                }
            }
        }else if (is(element, any)) {
            return null;
        }else if (is(element, any)) {
            return null;
        }else if (op(Op.EQUALS,element,null) && is(target, any)) {
            return StaticTypeWarningCode.UNDEFINED_SUPER_METHOD;
        }else {
            if (is(element, any)) {
                let getter : any = element.getter;
                let getterType : any = getter.type;
                if (getterType != null) {
                    let returnType : any = getterType.returnType;
                    if (!this._isExecutableType(returnType)) {
                        return StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION;
                    }
                }
            }else if (is(element, any)) {
                let variableType : any = element.type;
                if (!this._isExecutableType(variableType)) {
                    return StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION;
                }
            }else {
                if (op(Op.EQUALS,target,null)) {
                    let enclosingClass : any = this._resolver.enclosingClass;
                    if (op(Op.EQUALS,enclosingClass,null)) {
                        return StaticTypeWarningCode.UNDEFINED_FUNCTION;
                    }else if (op(Op.EQUALS,element,null)) {
                        return StaticTypeWarningCode.UNDEFINED_METHOD;
                    }else {
                        return StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION;
                    }
                }else {
                    let targetType : any;
                    if (useStaticContext) {
                        targetType = this._getStaticType(target);
                    }else {
                        targetType = this._getBestType(target);
                    }
                    if (op(Op.EQUALS,targetType,null)) {
                        if (is(target, any) && this._resolver.nameScope.shouldIgnoreUndefined(target)) {
                            return null;
                        }
                        return StaticTypeWarningCode.UNDEFINED_FUNCTION;
                    }else if (!targetType.isDynamic && isNot(target, any)) {
                        return StaticTypeWarningCode.UNDEFINED_METHOD;
                    }
                }
            }
        }
        return null;
    }
    _checkForUndefinedIndexOperator(expression : any,target : any,methodName : string,staticMethod : any,propagatedMethod : any,staticType : any,propagatedType : any) : boolean {
        let shouldReportMissingMember_static : boolean = this._shouldReportMissingMember(staticType,staticMethod);
        let shouldReportMissingMember_propagated : boolean = !shouldReportMissingMember_static && this._enableHints && this._shouldReportMissingMember(propagatedType,propagatedMethod) && !this._memberFoundInSubclass(propagatedType.element,methodName,true,false);
        if (shouldReportMissingMember_static || shouldReportMissingMember_propagated) {
            let leftBracket : any = expression.leftBracket;
            let rightBracket : any = expression.rightBracket;
            let errorCode : any;
            if (shouldReportMissingMember_static) {
                if (is(target, any)) {
                    errorCode = StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR;
                }else {
                    errorCode = StaticTypeWarningCode.UNDEFINED_OPERATOR;
                }
            }else {
                errorCode = HintCode.UNDEFINED_OPERATOR;
            }
            let type : any = shouldReportMissingMember_static ? staticType : propagatedType;
            if (op(Op.EQUALS,leftBracket,null) || op(Op.EQUALS,rightBracket,null)) {
                this._recordUndefinedNode(type.element,errorCode,expression,new core.DartList.literal(methodName,type.displayName));
            }else {
                let offset : number = leftBracket.offset;
                let length : number = op(Op.PLUS,op(Op.MINUS,rightBracket.offset,offset),1);
                this._recordUndefinedOffset(type.element,errorCode,offset,length,new core.DartList.literal(methodName,type.displayName));
            }
            return true;
        }
        return false;
    }
    _computeCorrespondingParameters(argumentList : any,type : any) : core.DartList<any> {
        if (is(type, any)) {
            let callMethod : any = type.lookUpMethod(FunctionElement.CALL_METHOD_NAME,this._definingLibrary);
            if (callMethod != null) {
                return this._resolveArgumentsToFunction(false,argumentList,callMethod);
            }
        }else if (is(type, any)) {
            return this._resolveArgumentsToParameters(false,argumentList,type.parameters);
        }
        return null;
    }
    _convertSetterToGetter(element : any) : any {
        if (is(element, any)) {
            return element.variable.getter;
        }
        return element;
    }
    _doesntHaveProxy(element : any) : boolean {
        return !(is(element, any) && element.isOrInheritsProxy);
    }
    _findImportWithoutPrefix(identifier : any) : any {
        let element : any = null;
        let nameScope : any = this._resolver.nameScope;
        let imports : core.DartList<any> = this._definingLibrary.imports;
        let length : number = imports.length;
        for(let i : number = 0; i < length; i++){
            let importElement : any = imports[i];
            let prefixElement : any = importElement.prefix;
            if (prefixElement != null) {
                let prefixedIdentifier : any = new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,TokenType.STRING,prefixElement.name,prefixElement.nameOffset)),identifier);
                let importedElement : any = nameScope.lookup(prefixedIdentifier,this._definingLibrary);
                if (importedElement != null) {
                    if (op(Op.EQUALS,element,null)) {
                        element = importedElement;
                    }else {
                        element = MultiplyDefinedElementImpl.fromElements(this._definingLibrary.context,element,importedElement);
                    }
                }
            }
        }
        return element;
    }
    _getBestType(expression : any) : any {
        let bestType : any = this._resolveTypeParameter(expression.bestType);
        if (is(bestType, any)) {
            bestType = this._resolver.typeProvider.functionType;
        }
        return bestType;
    }
    _getImportedLibrary(identifier : any) : any {
        let prefixElement : any = identifier.staticElement as any;
        let imports : core.DartList<any> = prefixElement.enclosingElement.getImportsWithPrefix(prefixElement);
        return imports[0].importedLibrary;
    }
    _getInvokeType(element : any) : any {
        let invokeType : any;
        if (is(element, any)) {
            invokeType = element.returnType;
        }else if (is(element, any)) {
            invokeType = element.type;
        }else if (is(element, any)) {
            invokeType = this._promoteManager.getStaticType(element);
        }
        return (invokeType || DynamicTypeImpl.instance);
    }
    _getPostfixOperator(expression : any) : string {
        return (op(Op.EQUALS,expression.operator.type,TokenType.PLUS_PLUS)) ? TokenType.PLUS.lexeme : TokenType.MINUS.lexeme;
    }
    _getPrefixOperator(expression : any) : string {
        let operator : any = expression.operator;
        let operatorType : any = operator.type;
        if (op(Op.EQUALS,operatorType,TokenType.PLUS_PLUS)) {
            return TokenType.PLUS.lexeme;
        }else if (op(Op.EQUALS,operatorType,TokenType.MINUS_MINUS)) {
            return TokenType.MINUS.lexeme;
        }else if (op(Op.EQUALS,operatorType,TokenType.MINUS)) {
            return "unary-";
        }else {
            return operator.lexeme;
        }
    }
    _getPropagatedType(expression : any) : any {
        let propagatedType : any = this._resolveTypeParameter(expression.propagatedType);
        if (is(propagatedType, any)) {
            propagatedType = this._resolver.typeProvider.functionType;
        }
        return propagatedType;
    }
    _getStaticType(expression : any) : any {
        let staticType : any = this._getStaticTypeOrFunctionType(expression);
        if (is(staticType, any)) {
            staticType = this._resolver.typeProvider.functionType;
        }
        return staticType;
    }
    _getStaticTypeOrFunctionType(expression : any) : any {
        if (is(expression, any)) {
            return this._resolver.typeProvider.nullType;
        }
        return this._resolveTypeParameter(expression.staticType);
    }
    _instantiateGenericMethod(invokeType : any,typeArguments : any,node : any) : any {
        if (is(invokeType, any)) {
            let parameters : core.DartList<any> = invokeType.typeFormals;
            let arguments : any = ((t)=>(!!t)?t.arguments:null)(typeArguments);
            if (arguments != null && arguments.length != parameters.length) {
                if (this._resolver.strongMode) {
                    this._resolver.errorReporter.reportErrorForNode(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD,node,new core.DartList.literal(invokeType,parameters.length,(((t)=>(!!t)?t.length:null)(arguments) || 0)));
                }else {
                    this._resolver.errorReporter.reportErrorForNode(HintCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD,node,new core.DartList.literal(invokeType,parameters.length,(((t)=>(!!t)?t.length:null)(arguments) || 0)));
                }
                arguments = null;
            }
            if (parameters.isNotEmpty) {
                if (op(Op.EQUALS,arguments,null)) {
                    return this._resolver.typeSystem.instantiateToBounds(invokeType);
                }else {
                    return invokeType.instantiate(arguments.map((n : any) =>  {
                        return n.type;
                    }).toList());
                }
            }
        }
        return invokeType;
    }
    _isDeferredPrefix(expression : any) : boolean {
        if (is(expression, any)) {
            let element : any = expression.staticElement;
            if (is(element, any)) {
                let imports : core.DartList<any> = element.enclosingElement.getImportsWithPrefix(element);
                if (imports.length != 1) {
                    return false;
                }
                return imports[0].isDeferred;
            }
        }
        return false;
    }
    _isExecutableType(type : any) : boolean {
        type = ((_260_)=>(!!_260_)?_260_.resolveToBound(this._resolver.typeProvider.objectType):null)(type);
        if (type.isDynamic || is(type, any)) {
            return true;
        }else if (!this._enableStrictCallChecks && (type.isDartCoreFunction || type.isObject)) {
            return true;
        }else if (is(type, any)) {
            let classElement : any = type.element;
            if (classElement.isProxy && type.isSubtypeOf(this._resolver.typeProvider.functionType)) {
                return true;
            }
            let methodElement : any = classElement.lookUpMethod(FunctionElement.CALL_METHOD_NAME,this._definingLibrary);
            return methodElement != null;
        }
        return false;
    }
    _isStatic(element : any) : boolean {
        if (is(element, any)) {
            return element.isStatic;
        }else if (is(element, any)) {
            return element.isStatic;
        }
        return false;
    }
    _isValidAsPrefix(node : any) : boolean {
        let parent : any = node.parent;
        if (is(parent, any)) {
            return core.identical(parent.prefix,node);
        }else if (is(parent, any)) {
            return true;
        }else if (is(parent, any)) {
            return core.identical(parent.target,node);
        }
        return false;
    }
    _lookupBreakOrContinueTarget(parentNode : any,labelNode : any,isContinue : boolean) : any {
        if (op(Op.EQUALS,labelNode,null)) {
            return this._resolver.implicitLabelScope.getTarget(isContinue);
        }else {
            let labelScope : any = this._resolver.labelScope;
            if (op(Op.EQUALS,labelScope,null)) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.LABEL_UNDEFINED,labelNode,new core.DartList.literal(labelNode.name));
                return null;
            }
            let definingScope : any = labelScope.lookup(labelNode.name);
            if (op(Op.EQUALS,definingScope,null)) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.LABEL_UNDEFINED,labelNode,new core.DartList.literal(labelNode.name));
                return null;
            }
            labelNode.staticElement = definingScope.element;
            let labelContainer : any = definingScope.element.getAncestor((element : any) =>  {
                return is(element, any);
            });
            if (!core.identical(labelContainer,this._resolver.enclosingFunction)) {
                this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.LABEL_IN_OUTER_SCOPE,labelNode,new core.DartList.literal(labelNode.name));
            }
            return definingScope.node;
        }
    }
    _lookUpGetter(target : any,type : any,getterName : string) : any {
        type = this._resolveTypeParameter(type);
        if (is(type, any)) {
            return type.lookUpInheritedGetter(getterName,{
                library : this._definingLibrary,thisType : isNot(target, any)});
        }
        return null;
    }
    _lookupGetterOrMethod(type : any,memberName : string) : any {
        type = this._resolveTypeParameter(type);
        if (is(type, any)) {
            return type.lookUpInheritedGetterOrMethod(memberName,{
                library : this._definingLibrary});
        }
        return null;
    }
    _lookUpMethod(target : any,type : any,methodName : string) : any {
        type = this._resolveTypeParameter(type);
        if (is(type, any)) {
            return type.lookUpInheritedMethod(methodName,{
                library : this._definingLibrary,thisType : isNot(target, any)});
        }
        return null;
    }
    _lookUpSetter(target : any,type : any,setterName : string) : any {
        type = this._resolveTypeParameter(type);
        if (is(type, any)) {
            return type.lookUpInheritedSetter(setterName,{
                library : this._definingLibrary,thisType : isNot(target, any)});
        }
        return null;
    }
    _memberFoundInSubclass(element : any,memberName : string,asMethod : boolean,asAccessor : boolean) : boolean {
        if (is(element, any)) {
            this._subtypeManager.ensureLibraryVisited(this._definingLibrary);
            let subtypeElements : core.DartHashSet<any> = this._subtypeManager.computeAllSubtypes(element);
            for(let subtypeElement of subtypeElements) {
                if (asMethod && subtypeElement.getMethod(memberName) != null) {
                    return true;
                }else if (asAccessor && (subtypeElement.getGetter(memberName) != null || subtypeElement.getSetter(memberName) != null)) {
                    return true;
                }
            }
        }
        return false;
    }
    _operatorFromCompoundAssignment(operator : any) : any {
        if (op(Op.EQUALS,operator,TokenType.AMPERSAND_EQ)) {
            return TokenType.AMPERSAND;
        }else if (op(Op.EQUALS,operator,TokenType.BAR_EQ)) {
            return TokenType.BAR;
        }else if (op(Op.EQUALS,operator,TokenType.CARET_EQ)) {
            return TokenType.CARET;
        }else if (op(Op.EQUALS,operator,TokenType.GT_GT_EQ)) {
            return TokenType.GT_GT;
        }else if (op(Op.EQUALS,operator,TokenType.LT_LT_EQ)) {
            return TokenType.LT_LT;
        }else if (op(Op.EQUALS,operator,TokenType.MINUS_EQ)) {
            return TokenType.MINUS;
        }else if (op(Op.EQUALS,operator,TokenType.PERCENT_EQ)) {
            return TokenType.PERCENT;
        }else if (op(Op.EQUALS,operator,TokenType.PLUS_EQ)) {
            return TokenType.PLUS;
        }else if (op(Op.EQUALS,operator,TokenType.SLASH_EQ)) {
            return TokenType.SLASH;
        }else if (op(Op.EQUALS,operator,TokenType.STAR_EQ)) {
            return TokenType.STAR;
        }else if (op(Op.EQUALS,operator,TokenType.TILDE_SLASH_EQ)) {
            return TokenType.TILDE_SLASH;
        }else {
            AnalysisEngine.instance.logger.logError(`Failed to map ${operator.lexeme} to it's corresponding operator`);
            return operator;
        }
    }
    _propagatedInvokeTypeIfBetter(propagatedType : any,staticType : any) : any {
        if (this._resolver.strongMode || op(Op.EQUALS,propagatedType,null)) {
            return null;
        }
        if (op(Op.EQUALS,staticType,null) || propagatedType.isMoreSpecificThan(staticType)) {
            return propagatedType;
        }
        return null;
    }
    _recordUndefinedNode(declaringElement : any,errorCode : any,node : any,arguments : core.DartList<core.DartObject>) : void {
        if (this._doesntHaveProxy(declaringElement)) {
            this._resolver.errorReporter.reportErrorForNode(errorCode,node,arguments);
        }
    }
    _recordUndefinedOffset(declaringElement : any,errorCode : any,offset : number,length : number,arguments : core.DartList<core.DartObject>) : void {
        if (this._doesntHaveProxy(declaringElement)) {
            this._resolver.errorReporter.reportErrorForOffset(errorCode,offset,length,arguments);
        }
    }
    _recordUndefinedToken(declaringElement : any,errorCode : any,token : any,arguments : core.DartList<core.DartObject>) : void {
        if (this._doesntHaveProxy(declaringElement)) {
            this._resolver.errorReporter.reportErrorForToken(errorCode,token,arguments);
        }
    }
    _resolveAnnotationConstructorInvocationArguments(annotation : any,constructor : any) : void {
        let argumentList : any = annotation.arguments;
        if (op(Op.EQUALS,argumentList,null)) {
            return;
        }
        let parameters : core.DartList<any> = this._resolveArgumentsToFunction(true,argumentList,constructor);
        if (parameters != null) {
            argumentList.correspondingStaticParameters = parameters;
        }
    }
    _resolveAnnotationElement(annotation : any) : void {
        let nameNode1 : any;
        let nameNode2 : any;
        {
            let annName : any = annotation.name;
            if (is(annName, any)) {
                nameNode1 = annName.prefix;
                nameNode2 = annName.identifier;
            }else {
                nameNode1 = annName as any;
                nameNode2 = null;
            }
        }
        let nameNode3 : any = annotation.constructorName;
        let constructor : any = null;
        if (nameNode1 != null && op(Op.EQUALS,nameNode2,null) && op(Op.EQUALS,nameNode3,null)) {
            let element1 : any = nameNode1.staticElement;
            if (is(element1, any)) {
                this._resolveAnnotationElementGetter(annotation,element1);
                return;
            }
            if (is(element1, any)) {
                constructor = new bare.createInstance(any,null,element1).lookUpConstructor(null,this._definingLibrary);
            }
        }
        if (nameNode1 != null && nameNode2 != null && op(Op.EQUALS,nameNode3,null)) {
            let element1 : any = nameNode1.staticElement;
            let element2 : any = nameNode2.staticElement;
            if (is(element1, any)) {
                element2 = element1.lookUpGetter(nameNode2.name,this._definingLibrary);
            }
            if (is(element2, any)) {
                nameNode2.staticElement = element2;
                annotation.element = element2;
                this._resolveAnnotationElementGetter(annotation,element2);
                return;
            }
            if (is(element2, any)) {
                constructor = element2.unnamedConstructor;
            }
            if (is(element1, any)) {
                constructor = new bare.createInstance(any,null,element1).lookUpConstructor(nameNode2.name,this._definingLibrary);
                nameNode2.staticElement = constructor;
            }
        }
        if (nameNode1 != null && nameNode2 != null && nameNode3 != null) {
            let element2 : any = nameNode2.staticElement;
            if (is(element2, any)) {
                let name3 : string = nameNode3.name;
                let getter : any = element2.lookUpGetter(name3,this._definingLibrary);
                if (getter != null) {
                    nameNode3.staticElement = getter;
                    annotation.element = getter;
                    this._resolveAnnotationElementGetter(annotation,getter);
                    return;
                }
                constructor = new bare.createInstance(any,null,element2).lookUpConstructor(name3,this._definingLibrary);
                nameNode3.staticElement = constructor;
            }
        }
        if (op(Op.EQUALS,constructor,null)) {
            this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_ANNOTATION,annotation);
            return;
        }
        annotation.element = constructor;
        this._resolveAnnotationConstructorInvocationArguments(annotation,constructor);
    }
    _resolveAnnotationElementGetter(annotation : any,accessorElement : any) : void {
        if (!accessorElement.isSynthetic) {
            this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_ANNOTATION,annotation);
            return;
        }
        let variableElement : any = accessorElement.variable;
        if (!variableElement.isConst) {
            this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_ANNOTATION,annotation);
        }
        if (annotation.arguments != null) {
            this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.ANNOTATION_WITH_NON_CLASS,annotation.name,new core.DartList.literal(annotation.name));
        }
        return;
    }
    _resolveArgumentsToFunction(reportAsError : boolean,argumentList : any,executableElement : any) : core.DartList<any> {
        if (op(Op.EQUALS,executableElement,null)) {
            return null;
        }
        let parameters : core.DartList<any> = executableElement.parameters;
        return this._resolveArgumentsToParameters(reportAsError,argumentList,parameters);
    }
    _resolveArgumentsToParameters(reportAsError : boolean,argumentList : any,parameters : core.DartList<any>) : core.DartList<any> {
        return ResolverVisitor.resolveArgumentsToParameters(argumentList,parameters,this._resolver.errorReporter.reportErrorForNode,{
            reportAsError : reportAsError});
    }
    _resolveBinaryExpression(node : any,methodName : string) : void {
        let leftOperand : any = node.leftOperand;
        if (leftOperand != null) {
            let staticType : any = this._getStaticType(leftOperand);
            let staticMethod : any = this._lookUpMethod(leftOperand,staticType,methodName);
            node.staticElement = staticMethod;
            let propagatedType : any = this._getPropagatedType(leftOperand);
            let propagatedMethod : any = this._lookUpMethod(leftOperand,propagatedType,methodName);
            node.propagatedElement = propagatedMethod;
            if (this._shouldReportMissingMember(staticType,staticMethod)) {
                if (is(leftOperand, any)) {
                    this._recordUndefinedToken(staticType.element,StaticTypeWarningCode.UNDEFINED_SUPER_OPERATOR,node.operator,new core.DartList.literal(methodName,staticType.displayName));
                }else {
                    this._recordUndefinedToken(staticType.element,StaticTypeWarningCode.UNDEFINED_OPERATOR,node.operator,new core.DartList.literal(methodName,staticType.displayName));
                }
            }else if (this._enableHints && this._shouldReportMissingMember(propagatedType,propagatedMethod) && !this._memberFoundInSubclass(propagatedType.element,methodName,true,false)) {
                this._recordUndefinedToken(propagatedType.element,HintCode.UNDEFINED_OPERATOR,node.operator,new core.DartList.literal(methodName,propagatedType.displayName));
            }
        }
    }
    _resolveCombinators(library : any,combinators : any) : void {
        if (op(Op.EQUALS,library,null)) {
            return;
        }
        let namespace : any = new bare.createInstance(any,null).createExportNamespaceForLibrary(library);
        for(let combinator of combinators) {
            let names : any;
            if (is(combinator, any)) {
                names = combinator.hiddenNames;
            }else {
                names = (combinator as any).shownNames;
            }
            for(let name of names) {
                let nameStr : string = name.name;
                let element : any = (namespace.get(nameStr) || namespace.get(`${nameStr}=`));
                if (element != null) {
                    if (is(element, any)) {
                        name.staticElement = element.variable;
                    }else {
                        name.staticElement = element;
                    }
                }
            }
        }
    }
    _resolveElement(classElement : any,propertyName : any) : any {
        let name : string = propertyName.name;
        let element : any = null;
        if (propertyName.inSetterContext()) {
            element = classElement.getSetter(name);
        }
        if (op(Op.EQUALS,element,null)) {
            element = classElement.getGetter(name);
        }
        if (op(Op.EQUALS,element,null)) {
            element = classElement.getMethod(name);
        }
        if (element != null && element.isAccessibleIn(this._definingLibrary)) {
            return element;
        }
        return null;
    }
    _resolveInvokedElement(methodName : any) : any {
        let element : any = this._resolver.nameScope.lookup(methodName,this._definingLibrary);
        if (op(Op.EQUALS,element,null)) {
            let enclosingClass : any = this._resolver.enclosingClass;
            if (enclosingClass != null) {
                let enclosingType : any = enclosingClass.type;
                element = this._lookUpMethod(null,enclosingType,methodName.name);
                if (op(Op.EQUALS,element,null)) {
                    element = this._lookUpGetter(null,enclosingType,methodName.name);
                }
            }
        }
        return element;
    }
    _resolveInvokedElementWithTarget(target : any,targetType : any,methodName : any,isConditional : boolean) : any {
        let name : string = methodName.name;
        if (is(targetType, any)) {
            let element : any = this._lookUpMethod(target,targetType,name);
            if (op(Op.EQUALS,element,null)) {
                element = this._lookUpGetter(target,targetType,name);
            }
            return element;
        }else if (is(targetType, any) && this._resolver.typeProvider.isObjectMethod(name)) {
            return this._resolver.typeProvider.objectType.element.getMethod(name);
        }else if (is(target, any)) {
            let targetElement : any = target.staticElement;
            if (is(targetType, any) && name == FunctionElement.CALL_METHOD_NAME) {
                return targetElement;
            }
            if (is(targetElement, any)) {
                if (isConditional) {
                    this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT,target,new core.DartList.literal(target.name));
                }
                let functionName : any = new bare.createInstance(any,null,target,methodName);
                let element : any = this._resolver.nameScope.lookup(functionName,this._definingLibrary);
                if (element != null) {
                    return element;
                }
            }
        }
        return null;
    }
    _resolveMetadataForParameter(node : any) : void {
        ElementResolver._resolveAnnotations(node.metadata);
    }
    _resolveProperty(target : any,targetType : any,propertyName : any) : any {
        let memberElement : any = null;
        if (propertyName.inSetterContext()) {
            memberElement = this._lookUpSetter(target,targetType,propertyName.name);
        }
        if (op(Op.EQUALS,memberElement,null)) {
            memberElement = this._lookUpGetter(target,targetType,propertyName.name);
        }
        if (op(Op.EQUALS,memberElement,null)) {
            memberElement = this._lookUpMethod(target,targetType,propertyName.name);
        }
        return memberElement;
    }
    _resolvePropertyAccess(target : any,propertyName : any,isCascaded : boolean) : void {
        let staticType : any = this._getStaticType(target);
        let propagatedType : any = this._getPropagatedType(target);
        let staticElement : any = null;
        let propagatedElement : any = null;
        let typeReference : any = ElementResolver.getTypeReference(target);
        if (typeReference != null) {
            if (isCascaded) {
                typeReference = this._typeType.element;
            }
            staticElement = propagatedElement = this._resolveElement(typeReference,propertyName);
        }else {
            staticElement = this._resolveProperty(target,staticType,propertyName);
            propagatedElement = this._resolveProperty(target,propagatedType,propertyName);
        }
        if (is(target.parent.parent, any)) {
            if (staticElement != null) {
                propertyName.staticElement = staticElement;
            }
            return;
        }
        propertyName.staticElement = staticElement;
        propertyName.propagatedElement = propagatedElement;
        let shouldReportMissingMember_static : boolean = this._shouldReportMissingMember(staticType,staticElement);
        let shouldReportMissingMember_propagated : boolean = !shouldReportMissingMember_static && this._enableHints && this._shouldReportMissingMember(propagatedType,propagatedElement) && !this._memberFoundInSubclass(propagatedType.element,propertyName.name,false,true);
        if (shouldReportMissingMember_static || shouldReportMissingMember_propagated) {
            let staticOrPropagatedType : any = shouldReportMissingMember_static ? staticType : propagatedType;
            let staticOrPropagatedEnclosingElt : any = staticOrPropagatedType.element;
            let isStaticProperty : boolean = this._isStatic(staticOrPropagatedEnclosingElt);
            let displayType : any = ((staticOrPropagatedType || propagatedType) || staticType);
            if (propertyName.inGetterContext()) {
                if (!isStaticProperty && is(staticOrPropagatedEnclosingElt, any)) {
                    let targetType : any = staticOrPropagatedEnclosingElt.type;
                    if (!this._enableStrictCallChecks && targetType != null && targetType.isDartCoreFunction && op(Op.EQUALS,propertyName.name,FunctionElement.CALL_METHOD_NAME)) {
                        return;
                    }else if (staticOrPropagatedEnclosingElt.isEnum && op(Op.EQUALS,propertyName.name,"_name")) {
                        this._resolver.errorReporter.reportErrorForNode(CompileTimeErrorCode.ACCESS_PRIVATE_ENUM_FIELD,propertyName,new core.DartList.literal(propertyName.name));
                        return;
                    }
                }
            }
            let declaringElement : any = staticType.isVoid ? null : staticOrPropagatedEnclosingElt;
            if (propertyName.inSetterContext()) {
                let errorCode : any;
                if (shouldReportMissingMember_static) {
                    if (is(target, any)) {
                        if (isStaticProperty && !staticType.isVoid) {
                            errorCode = StaticWarningCode.UNDEFINED_SUPER_SETTER;
                        }else {
                            errorCode = StaticTypeWarningCode.UNDEFINED_SUPER_SETTER;
                        }
                    }else {
                        if (isStaticProperty && !staticType.isVoid) {
                            errorCode = StaticWarningCode.UNDEFINED_SETTER;
                        }else {
                            errorCode = StaticTypeWarningCode.UNDEFINED_SETTER;
                        }
                    }
                }else {
                    errorCode = HintCode.UNDEFINED_SETTER;
                }
                this._recordUndefinedNode(declaringElement,errorCode,propertyName,new core.DartList.literal(propertyName.name,displayType.displayName));
            }else if (propertyName.inGetterContext()) {
                let errorCode : any;
                if (shouldReportMissingMember_static) {
                    if (is(target, any)) {
                        if (isStaticProperty && !staticType.isVoid) {
                            errorCode = StaticWarningCode.UNDEFINED_SUPER_GETTER;
                        }else {
                            errorCode = StaticTypeWarningCode.UNDEFINED_SUPER_GETTER;
                        }
                    }else {
                        if (isStaticProperty && !staticType.isVoid) {
                            errorCode = StaticWarningCode.UNDEFINED_GETTER;
                        }else {
                            errorCode = StaticTypeWarningCode.UNDEFINED_GETTER;
                        }
                    }
                }else {
                    errorCode = HintCode.UNDEFINED_GETTER;
                }
                this._recordUndefinedNode(declaringElement,errorCode,propertyName,new core.DartList.literal(propertyName.name,displayType.displayName));
            }else {
                this._recordUndefinedNode(declaringElement,StaticWarningCode.UNDEFINED_IDENTIFIER,propertyName,new core.DartList.literal(propertyName.name));
            }
        }
    }
    _resolveSimpleIdentifier(identifier : any) : any {
        let element : any = this._resolver.nameScope.lookup(identifier,this._definingLibrary);
        if (is(element, any) && identifier.inSetterContext()) {
            let variable : any = (element as any).variable;
            if (variable != null) {
                let setter : any = variable.setter;
                if (op(Op.EQUALS,setter,null)) {
                    let enclosingClass : any = this._resolver.enclosingClass;
                    if (enclosingClass != null) {
                        setter = this._lookUpSetter(null,enclosingClass.type,identifier.name);
                    }
                }
                if (setter != null) {
                    element = setter;
                }
            }
        }else if (op(Op.EQUALS,element,null) && (identifier.inSetterContext() || is(identifier.parent, any))) {
            let setterId : any = new SyntheticIdentifier(`${identifier.name}=`,identifier);
            element = this._resolver.nameScope.lookup(setterId,this._definingLibrary);
            identifier.setProperty(LibraryImportScope.conflictingSdkElements,setterId.getProperty(LibraryImportScope.conflictingSdkElements));
        }
        let enclosingClass : any = this._resolver.enclosingClass;
        if (op(Op.EQUALS,element,null) && enclosingClass != null) {
            let enclosingType : any = enclosingClass.type;
            if (op(Op.EQUALS,element,null) && (identifier.inSetterContext() || is(identifier.parent, any))) {
                element = this._lookUpSetter(null,enclosingType,identifier.name);
            }
            if (op(Op.EQUALS,element,null) && identifier.inGetterContext()) {
                element = this._lookUpGetter(null,enclosingType,identifier.name);
            }
            if (op(Op.EQUALS,element,null)) {
                element = this._lookUpMethod(null,enclosingType,identifier.name);
            }
        }
        return element;
    }
    _resolveTypeParameter(type : any) : any {
        return ((_261_)=>(!!_261_)?_261_.resolveToBound(this._resolver.typeProvider.objectType):null)(type);
    }
    _shouldReportMissingMember(type : any,member : any) : boolean {
        return op(Op.EQUALS,member,null) && type != null && !type.isDynamic && !type.isDartCoreNull;
    }
    static getTypeReference(expression : any) : any {
        if (is(expression, any)) {
            let staticElement : any = expression.staticElement;
            if (is(staticElement, any)) {
                return staticElement;
            }
        }
        return null;
    }
    static resolveMetadata(node : any) : void {
        ElementResolver._resolveAnnotations(node.metadata);
        if (is(node, any)) {
            let parent : any = node.parent;
            if (is(parent, any)) {
                ElementResolver._resolveAnnotations(parent.metadata);
                let grandParent : any = parent.parent;
                if (is(grandParent, any)) {
                    ElementResolver._resolveAnnotations(grandParent.metadata);
                }else if (is(grandParent, any)) {
                    ElementResolver._resolveAnnotations(grandParent.metadata);
                }
            }
        }
    }
    static _isConstructorReturnType(identifier : any) : boolean {
        let parent : any = identifier.parent;
        if (is(parent, any)) {
            return core.identical(parent.returnType,identifier);
        }
        return false;
    }
    static _isFactoryConstructorReturnType(identifier : any) : boolean {
        let parent : any = identifier.parent;
        if (is(parent, any)) {
            return core.identical(parent.returnType,identifier) && parent.factoryKeyword != null;
        }
        return false;
    }
    static _isSuperInValidContext(expression : any) : boolean {
        for(let node : any = expression; node != null; node = node.parent){
            if (is(node, any)) {
                return false;
            }else if (is(node, any)) {
                return op(Op.EQUALS,node.factoryKeyword,null);
            }else if (is(node, any)) {
                return false;
            }else if (is(node, any)) {
                return !node.isStatic;
            }
        }
        return false;
    }
    static _resolveAnnotations(annotations : any) : void {
        for(let annotation of annotations) {
            let elementAnnotation : any = annotation.elementAnnotation;
            elementAnnotation.element = annotation.element;
        }
    }
}

export namespace SyntheticIdentifier {
    export type Constructors = 'SyntheticIdentifier';
    export type Interface = Omit<SyntheticIdentifier, Constructors>;
}
@DartClass
export class SyntheticIdentifier extends any {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    targetIdentifier : any;

    constructor(name : string,targetIdentifier : any) {
    }
    @defaultConstructor
    SyntheticIdentifier(name : string,targetIdentifier : any) {
        this.name = name;
        this.targetIdentifier = targetIdentifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get beginToken() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bestElement() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childEntities() : core.DartIterable<any> {
        /* TODO (AssertStatementImpl) : assert (false); */;
        return new bare.createInstance(any,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return this.targetIdentifier.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this.targetIdentifier.offset;
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
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : any) : void {
    }
}

export class properties {
}
