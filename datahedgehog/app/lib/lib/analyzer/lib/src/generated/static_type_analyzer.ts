/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/static_type_analyzer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace StaticTypeAnalyzer {
    export type Constructors = 'StaticTypeAnalyzer';
    export type Interface = Omit<StaticTypeAnalyzer, Constructors>;
}
@DartClass
export class StaticTypeAnalyzer extends any {
    private static __$_HTML_ELEMENT_TO_CLASS_MAP : core.DartHashMap<string,string>;
    static get _HTML_ELEMENT_TO_CLASS_MAP() : core.DartHashMap<string,string> { 
        if (this.__$_HTML_ELEMENT_TO_CLASS_MAP===undefined) {
            this.__$_HTML_ELEMENT_TO_CLASS_MAP = StaticTypeAnalyzer._createHtmlTagToClassMap();
        }
        return this.__$_HTML_ELEMENT_TO_CLASS_MAP;
    }
    static set _HTML_ELEMENT_TO_CLASS_MAP(__$value : core.DartHashMap<string,string>)  { 
        this.__$_HTML_ELEMENT_TO_CLASS_MAP = __$value;
    }

    _resolver : any;

    _typeProvider : any;

    _typeSystem : any;

    _dynamicType : any;

    thisType : any;

    _strongMode : boolean;

    _overrideManager : any;

    _promoteManager : any;

    _propagatedReturnTypes : core.DartHashMap<any,any>;

    constructor(_resolver : any) {
    }
    @defaultConstructor
    StaticTypeAnalyzer(_resolver : any) {
        this._propagatedReturnTypes = new core.DartHashMap<any,any>();
        this._resolver = _resolver;
        this._typeProvider = this._resolver.typeProvider;
        this._typeSystem = this._resolver.typeSystem;
        this._dynamicType = this._typeProvider.dynamicType;
        this._overrideManager = this._resolver.overrideManager;
        this._promoteManager = this._resolver.promoteManager;
        this._strongMode = this._resolver.strongMode;
    }
    inferConstructorName(node : any,type : any) : void {
        if (this._strongMode) {
            node.type.type = type;
            if (type != this._typeSystem.instantiateToBounds(type.element.type)) {
                this._resolver.inferenceContext.recordInference(node.parent,type);
            }
        }
    }
    inferFormalParameterList(node : any,functionType : any) : boolean {
        let inferred : boolean = false;
        if (this._strongMode && node != null && is(functionType, any)) {
            let ts = this._typeSystem as any;
            var inferType : (p : any,inferredType : any) => void = (p : any,inferredType : any) : void =>  {
                if (p.hasImplicitType && (op(Op.EQUALS,p.type,null) || p.type.isDynamic)) {
                    inferredType = ts.upperBoundForType(inferredType);
                    if (!inferredType.isDynamic) {
                        p.type = inferredType;
                        inferred = true;
                    }
                }
            };
            let parameters : core.DartList<any> = node.parameterElements;
            {
                let positional : core.DartIterator<any> = parameters.where((p : any) =>  {
                    return p.parameterKind != ParameterKind.NAMED;
                }).iterator;
                let fnPositional : core.DartIterator<any> = functionType.parameters.where((p : any) =>  {
                    return p.parameterKind != ParameterKind.NAMED;
                }).iterator;
                while (positional.moveNext() && fnPositional.moveNext()){
                    inferType(positional.current,fnPositional.current.type);
                }
            }
            {
                let namedParameterTypes : core.DartMap<string,any> = functionType.namedParameterTypes;
                let named : core.DartIterable<any> = parameters.where((p : any) =>  {
                    return op(Op.EQUALS,p.parameterKind,ParameterKind.NAMED);
                });
                for(let p of named) {
                    if (!namedParameterTypes.containsKey(p.name)) {
                        continue;
                    }
                    inferType(p,namedParameterTypes.get(p.name));
                }
            }
        }
        return inferred;
    }
    inferListType(node : any,_namedArguments? : {downwards? : boolean}) : any {
        let {downwards} = Object.assign({
            "downwards" : false}, _namedArguments );
        let contextType : any = InferenceContext.getContext(node);
        let ts = this._typeSystem as any;
        let elementTypes : core.DartList<any>;
        let parameters : core.DartList<any>;
        if (downwards) {
            if (op(Op.EQUALS,contextType,null)) {
                return null;
            }
            elementTypes = new core.DartList.literal();
            parameters = new core.DartList.literal();
        }else {
            elementTypes = node.elements.map((e : any) =>  {
                return e.staticType;
            }).where((t : any) =>  {
                return t != null;
            }).toList();
            let listTypeParam = op(Op.INDEX,this._typeProvider.listType.typeParameters,0).type;
            let syntheticParamElement = new bare.createInstance(any,null,'element',listTypeParam,ParameterKind.POSITIONAL);
            parameters = new core.DartList.filled(elementTypes.length,syntheticParamElement);
        }
        let inferred : any = ts.inferGenericFunctionOrType(this._typeProvider.listType,parameters,elementTypes,contextType,{
            downwards : downwards,errorReporter : this._resolver.errorReporter,errorNode : node});
        return inferred;
    }
    inferMapType(node : any,_namedArguments? : {downwards? : boolean}) : any {
        let {downwards} = Object.assign({
            "downwards" : false}, _namedArguments );
        let contextType : any = InferenceContext.getContext(node);
        let elementTypes : core.DartList<any>;
        let parameters : core.DartList<any>;
        if (downwards) {
            if (op(Op.EQUALS,contextType,null)) {
                return null;
            }
            elementTypes = new core.DartList.literal();
            parameters = new core.DartList.literal();
        }else {
            let keyTypes = node.entries.map((e : any) =>  {
                return e.key.staticType;
            }).where((t : any) =>  {
                return t != null;
            });
            let valueTypes = node.entries.map((e : any) =>  {
                return e.value.staticType;
            }).where((t : any) =>  {
                return t != null;
            });
            let keyTypeParam = op(Op.INDEX,this._typeProvider.mapType.typeParameters,0).type;
            let valueTypeParam = op(Op.INDEX,this._typeProvider.mapType.typeParameters,1).type;
            let syntheticKeyParameter = new bare.createInstance(any,null,'key',keyTypeParam,ParameterKind.POSITIONAL);
            let syntheticValueParameter = new bare.createInstance(any,null,'value',valueTypeParam,ParameterKind.POSITIONAL);
            parameters = ((_) : core.DartList<any> =>  {
                {
                    _.addAll(new core.DartList.filled(valueTypes.length,syntheticValueParameter));
                    return _;
                }
            })(new core.DartList.filled(keyTypes.length,syntheticKeyParameter,{
                growable : true}));
            elementTypes = ((_) : core.DartList<any> =>  {
                {
                    _.addAll(valueTypes);
                    return _;
                }
            })(new core.DartList.from(keyTypes));
        }
        let ts = this._typeSystem as any;
        let inferred : any = ts.inferGenericFunctionOrType(this._typeProvider.mapType,parameters,elementTypes,contextType,{
            downwards : downwards,errorReporter : this._resolver.errorReporter,errorNode : node});
        return inferred;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAdjacentStrings(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.stringType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : core.DartObject {
        this._recordStaticType(node,this._getType(node.type));
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        let operator : any = node.operator.type;
        if (op(Op.EQUALS,operator,TokenType.EQ)) {
            let rightHandSide : any = node.rightHandSide;
            let staticType : any = this._getStaticType(rightHandSide);
            this._recordStaticType(node,staticType);
            let overrideType : any = staticType;
            let propagatedType : any = rightHandSide.propagatedType;
            if (propagatedType != null) {
                this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
                overrideType = propagatedType;
            }
            this._resolver.overrideExpression(node.leftHandSide,overrideType,true,true);
        }else if (op(Op.EQUALS,operator,TokenType.QUESTION_QUESTION_EQ)) {
            this._analyzeLeastUpperBound(node,node.leftHandSide,node.rightHandSide);
            return null;
        }else if (op(Op.EQUALS,operator,TokenType.AMPERSAND_AMPERSAND_EQ) || op(Op.EQUALS,operator,TokenType.BAR_BAR_EQ)) {
            this._recordStaticType(node,this._typeProvider.boolType);
        }else {
            let staticMethodElement : any = node.staticElement;
            let staticType : any = this._computeStaticReturnType(staticMethodElement);
            staticType = this._typeSystem.refineBinaryExpressionType(node.leftHandSide.staticType,operator,node.rightHandSide.staticType,staticType);
            this._recordStaticType(node,staticType);
            let propagatedMethodElement : any = node.propagatedElement;
            if (!core.identical(propagatedMethodElement,staticMethodElement)) {
                let propagatedType : any = this._computeStaticReturnType(propagatedMethodElement);
                propagatedType = this._typeSystem.refineBinaryExpressionType(node.leftHandSide.propagatedType,operator,node.rightHandSide.propagatedType,propagatedType);
                this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) : core.DartObject {
        var awaitType : (awaitedType : any) => any = (awaitedType : any) : any =>  {
            if (op(Op.EQUALS,awaitedType,null)) {
                return null;
            }
            if (awaitedType.isDartAsyncFutureOr) {
                return awaitType(op(Op.INDEX,(awaitedType as any).typeArguments,0));
            }
            return awaitedType.flattenFutures(this._typeSystem);
        };
        this._recordStaticType(node,awaitType(this._getStaticType(node.expression)));
        let propagatedType : any = awaitType(node.expression.propagatedType);
        this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        if (op(Op.EQUALS,node.operator.type,TokenType.QUESTION_QUESTION)) {
            this._analyzeLeastUpperBound(node,node.leftOperand,node.rightOperand);
            return null;
        }
        let staticMethodElement : any = node.staticElement;
        let staticType : any = this._computeStaticReturnType(staticMethodElement);
        staticType = this._typeSystem.refineBinaryExpressionType(node.leftOperand.staticType,node.operator.type,node.rightOperand.staticType,staticType);
        this._recordStaticType(node,staticType);
        let propagatedMethodElement : any = node.propagatedElement;
        if (!core.identical(propagatedMethodElement,staticMethodElement)) {
            let propagatedType : any = this._computeStaticReturnType(propagatedMethodElement);
            propagatedType = this._typeSystem.refineBinaryExpressionType(node.leftOperand.bestType,node.operator.type,node.rightOperand.bestType,propagatedType);
            this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBooleanLiteral(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.boolType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCascadeExpression(node : any) : core.DartObject {
        this._recordStaticType(node,this._getStaticType(node.target));
        this._resolver.recordPropagatedTypeIfBetter(node,node.target.propagatedType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : core.DartObject {
        this._analyzeLeastUpperBound(node,node.thenExpression,node.elseExpression);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDeclaredIdentifier(node : any) : core.DartObject {
        super.visitDeclaredIdentifier(node);
        if (this._strongMode) {
            this._inferForEachLoopVariableType(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.doubleType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        let function : any = node.functionExpression;
        let functionElement : any = node.element as any;
        if (is(node.parent, any)) {
            if (this._strongMode && op(Op.EQUALS,node.returnType,null)) {
                this._inferLocalFunctionReturnType(node.functionExpression);
                return null;
            }
            functionElement.returnType = this._computeStaticReturnTypeOfFunctionDeclaration(node);
            this._recordPropagatedTypeOfFunction(functionElement,function.body);
        }
        this._recordStaticType(function,functionElement.type);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (is(node.parent, any)) {
            return null;
        }
        this._inferLocalFunctionReturnType(node);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        if (this._strongMode) {
            this._inferGenericInvocationExpression(node);
        }
        let staticType : any = this._computeInvokeReturnType(node.staticInvokeType);
        this._recordStaticType(node,staticType);
        let functionPropagatedType : any = node.propagatedInvokeType;
        if (is(functionPropagatedType, any)) {
            let propagatedType : any = functionPropagatedType.returnType;
            this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : core.DartObject {
        if (node.inSetterContext()) {
            let staticMethodElement : any = node.staticElement;
            let staticType : any = this._computeArgumentType(staticMethodElement);
            this._recordStaticType(node,staticType);
            let propagatedMethodElement : any = node.propagatedElement;
            if (!core.identical(propagatedMethodElement,staticMethodElement)) {
                let propagatedType : any = this._computeArgumentType(propagatedMethodElement);
                this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
            }
        }else {
            let staticMethodElement : any = node.staticElement;
            let staticType : any = this._computeStaticReturnType(staticMethodElement);
            this._recordStaticType(node,staticType);
            let propagatedMethodElement : any = node.propagatedElement;
            if (!core.identical(propagatedMethodElement,staticMethodElement)) {
                let propagatedType : any = this._computeStaticReturnType(propagatedMethodElement);
                this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        if (this._strongMode) {
            this._inferInstanceCreationExpression(node);
        }
        this._recordStaticType(node,node.constructorName.type.type);
        let element : any = node.staticElement;
        if (element != null && "Element" == element.enclosingElement.name) {
            let library : any = element.library;
            if (this._isHtmlLibrary(library)) {
                let constructorName : string = element.name;
                if ("tag" == constructorName) {
                    let returnType : any = this._getFirstArgumentAsTypeWithMap(library,node.argumentList,StaticTypeAnalyzer._HTML_ELEMENT_TO_CLASS_MAP);
                    this._resolver.recordPropagatedTypeIfBetter(node,returnType);
                }else {
                    let returnType : any = this._getElementNameAsType(library,constructorName,StaticTypeAnalyzer._HTML_ELEMENT_TO_CLASS_MAP);
                    this._resolver.recordPropagatedTypeIfBetter(node,returnType);
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIntegerLiteral(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.intType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.boolType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : core.DartObject {
        let typeArguments : any = node.typeArguments;
        if (typeArguments != null) {
            let staticType : any = this._dynamicType;
            let arguments : any = typeArguments.arguments;
            if (arguments != null && op(Op.EQUALS,arguments.length,1)) {
                let argumentType : any = this._getType(op(Op.INDEX,arguments,0));
                if (argumentType != null) {
                    staticType = argumentType;
                }
            }
            this._recordStaticType(node,this._typeProvider.listType.instantiate(new core.DartList.literal<any>(staticType)));
            return null;
        }
        let listDynamicType : any = this._typeProvider.listType.instantiate(new core.DartList.literal<any>(this._dynamicType));
        if (this._strongMode) {
            let inferred : any = this.inferListType(node);
            if (inferred != listDynamicType) {
                this._resolver.inferenceContext.recordInference(node,inferred);
                this._recordStaticType(node,inferred);
                return null;
            }
        }
        this._recordStaticType(node,listDynamicType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : core.DartObject {
        let typeArguments : any = node.typeArguments;
        let mapDynamicType : any = this._typeProvider.mapType.instantiate(new core.DartList.literal<any>(this._dynamicType,this._dynamicType));
        if (typeArguments != null) {
            let staticKeyType : any = this._dynamicType;
            let staticValueType : any = this._dynamicType;
            let arguments : any = typeArguments.arguments;
            if (arguments != null && op(Op.EQUALS,arguments.length,2)) {
                let entryKeyType : any = this._getType(op(Op.INDEX,arguments,0));
                if (entryKeyType != null) {
                    staticKeyType = entryKeyType;
                }
                let entryValueType : any = this._getType(op(Op.INDEX,arguments,1));
                if (entryValueType != null) {
                    staticValueType = entryValueType;
                }
            }
            this._recordStaticType(node,this._typeProvider.mapType.instantiate(new core.DartList.literal<any>(staticKeyType,staticValueType)));
            return null;
        }
        if (this._strongMode) {
            let inferred : any = this.inferMapType(node);
            if (inferred != mapDynamicType) {
                this._resolver.inferenceContext.recordInference(node,inferred);
                this._recordStaticType(node,inferred);
                return null;
            }
        }
        this._recordStaticType(node,mapDynamicType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) : core.DartObject {
        let methodNameNode : any = node.methodName;
        let staticMethodElement : any = methodNameNode.staticElement;
        if (this._strongMode) {
            this._inferGenericInvocationExpression(node);
        }
        if (is(staticMethodElement, any)) {
            let propagatedType : any = this._overrideManager.getType(staticMethodElement);
            this._resolver.recordPropagatedTypeIfBetter(methodNameNode,propagatedType);
        }
        let inferredStaticType : boolean = this._strongMode && (this._inferMethodInvocationObject(node) || this._inferMethodInvocationInlineJS(node));
        if (!inferredStaticType) {
            let staticStaticType : any = this._computeInvokeReturnType(node.staticInvokeType);
            this._recordStaticType(node,staticStaticType);
        }
        let staticPropagatedType : any = this._computePropagatedReturnType(staticMethodElement);
        this._resolver.recordPropagatedTypeIfBetter(node,staticPropagatedType);
        let needPropagatedType : boolean = true;
        let methodName : string = methodNameNode.name;
        if (!this._strongMode && methodName == "then") {
            let target : any = node.realTarget;
            if (target != null) {
                let targetType : any = target.bestType;
                if (targetType.isDartAsyncFuture) {
                    let arguments : any = node.argumentList.arguments;
                    if (op(Op.EQUALS,arguments.length,1)) {
                        let closureArg : any = op(Op.INDEX,arguments,0);
                        if (is(closureArg, any)) {
                            let closureExpr : any = closureArg;
                            let returnType : any = this._computePropagatedReturnType(closureExpr.element);
                            if (returnType != null) {
                                let newFutureType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal(returnType.flattenFutures(this._typeSystem)));
                                this._resolver.recordPropagatedTypeIfBetter(node,newFutureType);
                                needPropagatedType = false;
                                return null;
                            }
                        }
                    }
                }
            }
        }else if (methodName == "$dom_createEvent") {
            let target : any = node.realTarget;
            if (target != null) {
                let targetType : any = target.bestType;
                if (is(targetType, any) && (op(Op.EQUALS,targetType.name,"HtmlDocument") || op(Op.EQUALS,targetType.name,"Document"))) {
                    let library : any = targetType.element.library;
                    if (this._isHtmlLibrary(library)) {
                        let returnType : any = this._getFirstArgumentAsType(library,node.argumentList);
                        if (returnType != null) {
                            this._recordPropagatedType(node,returnType);
                            needPropagatedType = false;
                        }
                    }
                }
            }
        }else if (methodName == "query") {
            let target : any = node.realTarget;
            if (op(Op.EQUALS,target,null)) {
                let methodElement : any = methodNameNode.bestElement;
                if (methodElement != null) {
                    let library : any = methodElement.library;
                    if (this._isHtmlLibrary(library)) {
                        let returnType : any = this._getFirstArgumentAsQuery(library,node.argumentList);
                        if (returnType != null) {
                            this._recordPropagatedType(node,returnType);
                            needPropagatedType = false;
                        }
                    }
                }
            }else {
                let targetType : any = target.bestType;
                if (is(targetType, any) && (op(Op.EQUALS,targetType.name,"HtmlDocument") || op(Op.EQUALS,targetType.name,"Document"))) {
                    let library : any = targetType.element.library;
                    if (this._isHtmlLibrary(library)) {
                        let returnType : any = this._getFirstArgumentAsQuery(library,node.argumentList);
                        if (returnType != null) {
                            this._recordPropagatedType(node,returnType);
                            needPropagatedType = false;
                        }
                    }
                }
            }
        }else if (methodName == "$dom_createElement") {
            let target : any = node.realTarget;
            if (target != null) {
                let targetType : any = target.bestType;
                if (is(targetType, any) && (op(Op.EQUALS,targetType.name,"HtmlDocument") || op(Op.EQUALS,targetType.name,"Document"))) {
                    let library : any = targetType.element.library;
                    if (this._isHtmlLibrary(library)) {
                        let returnType : any = this._getFirstArgumentAsQuery(library,node.argumentList);
                        if (returnType != null) {
                            this._recordPropagatedType(node,returnType);
                            needPropagatedType = false;
                        }
                    }
                }
            }
        }else if (methodName == "JS") {
            let returnType : any = this._getFirstArgumentAsType(this._typeProvider.objectType.element.library,node.argumentList);
            if (returnType != null) {
                this._recordPropagatedType(node,returnType);
                needPropagatedType = false;
            }
        }else if (methodName == "getContext") {
            let target : any = node.realTarget;
            if (target != null) {
                let targetType : any = target.bestType;
                if (is(targetType, any) && (op(Op.EQUALS,targetType.name,"CanvasElement"))) {
                    let arguments : any = node.argumentList.arguments;
                    if (op(Op.EQUALS,arguments.length,1)) {
                        let argument : any = op(Op.INDEX,arguments,0);
                        if (is(argument, any)) {
                            let value : string = argument.stringValue;
                            if ("2d" == value) {
                                let getter : any = targetType.element.getGetter("context2D");
                                if (getter != null) {
                                    let returnType : any = getter.returnType;
                                    if (returnType != null) {
                                        this._recordPropagatedType(node,returnType);
                                        needPropagatedType = false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (needPropagatedType) {
            let propagatedElement : any = methodNameNode.propagatedElement;
            let propagatedInvokeType : any = node.propagatedInvokeType;
            if (op(Op.EQUALS,propagatedElement,null)) {
                let objMethod : any = this._typeProvider.objectType.getMethod(methodNameNode.name);
                if (objMethod != null) {
                    propagatedElement = objMethod;
                    propagatedInvokeType = objMethod.type;
                }
            }
            if (!core.identical(propagatedElement,staticMethodElement)) {
                let propagatedStaticType : any = this._computeInvokeReturnType(propagatedInvokeType);
                this._resolver.recordPropagatedTypeIfBetter(node,propagatedStaticType,true);
                let propagatedPropagatedType : any = this._computePropagatedReturnType(propagatedElement);
                this._resolver.recordPropagatedTypeIfBetter(node,propagatedPropagatedType,true);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : core.DartObject {
        let expression : any = node.expression;
        this._recordStaticType(node,this._getStaticType(expression));
        this._resolver.recordPropagatedTypeIfBetter(node,expression.propagatedType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNullLiteral(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.nullType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParenthesizedExpression(node : any) : core.DartObject {
        let expression : any = node.expression;
        this._recordStaticType(node,this._getStaticType(expression));
        this._resolver.recordPropagatedTypeIfBetter(node,expression.propagatedType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : core.DartObject {
        let operand : any = node.operand;
        let staticType : any = this._getStaticType(operand);
        let operator : any = node.operator.type;
        if (op(Op.EQUALS,operator,TokenType.MINUS_MINUS) || op(Op.EQUALS,operator,TokenType.PLUS_PLUS)) {
            let intType : any = this._typeProvider.intType;
            if (core.identical(this._getStaticType(node.operand),intType)) {
                staticType = intType;
            }
        }
        this._recordStaticType(node,staticType);
        this._resolver.recordPropagatedTypeIfBetter(node,operand.propagatedType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        let prefixedIdentifier : any = node.identifier;
        let staticElement : any = prefixedIdentifier.staticElement;
        let staticType : any = this._dynamicType;
        let propagatedType : any = null;
        if (is(staticElement, any)) {
            if (this._isNotTypeLiteral(node)) {
                staticType = staticElement.type;
            }else {
                staticType = this._typeProvider.typeType;
            }
        }else if (is(staticElement, any)) {
            if (this._isNotTypeLiteral(node)) {
                staticType = staticElement.type;
            }else {
                staticType = this._typeProvider.typeType;
            }
        }else if (is(staticElement, any)) {
            staticType = staticElement.type;
        }else if (is(staticElement, any)) {
            staticType = this._getTypeOfProperty(staticElement);
            propagatedType = this._getPropertyPropagatedType(staticElement,propagatedType);
        }else if (is(staticElement, any)) {
            staticType = staticElement.type;
        }else if (is(staticElement, any)) {
            staticType = staticElement.type;
        }else if (is(staticElement, any)) {
            staticType = staticElement.type;
        }
        staticType = this._inferGenericInstantiationFromContext(node,staticType);
        if (!(this._strongMode && this._inferObjectAccess(node,staticType,prefixedIdentifier))) {
            this._recordStaticType(prefixedIdentifier,staticType);
            this._recordStaticType(node,staticType);
        }
        let propagatedElement : any = prefixedIdentifier.propagatedElement;
        if (op(Op.EQUALS,propagatedElement,null)) {
            propagatedElement = this._typeProvider.objectType.getGetter(prefixedIdentifier.name);
        }
        if (is(propagatedElement, any)) {
            if (this._isNotTypeLiteral(node)) {
                propagatedType = propagatedElement.type;
            }else {
                propagatedType = this._typeProvider.typeType;
            }
        }else if (is(propagatedElement, any)) {
            propagatedType = propagatedElement.type;
        }else if (is(propagatedElement, any)) {
            propagatedType = propagatedElement.type;
        }else if (is(propagatedElement, any)) {
            propagatedType = this._getTypeOfProperty(propagatedElement);
            propagatedType = this._getPropertyPropagatedType(propagatedElement,propagatedType);
        }else if (is(propagatedElement, any)) {
            propagatedType = propagatedElement.type;
        }else if (is(propagatedElement, any)) {
            propagatedType = propagatedElement.type;
        }else if (is(propagatedElement, any)) {
            propagatedType = propagatedElement.type;
        }
        let overriddenType : any = this._overrideManager.getType(propagatedElement);
        if (op(Op.EQUALS,propagatedType,null) || (overriddenType != null && overriddenType.isMoreSpecificThan(propagatedType))) {
            propagatedType = overriddenType;
        }
        this._resolver.recordPropagatedTypeIfBetter(prefixedIdentifier,propagatedType);
        this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        let operator : any = node.operator.type;
        if (op(Op.EQUALS,operator,TokenType.BANG)) {
            this._recordStaticType(node,this._typeProvider.boolType);
        }else {
            let staticMethodElement : any = node.staticElement;
            let staticType : any = this._computeStaticReturnType(staticMethodElement);
            if (op(Op.EQUALS,operator,TokenType.MINUS_MINUS) || op(Op.EQUALS,operator,TokenType.PLUS_PLUS)) {
                let intType : any = this._typeProvider.intType;
                if (core.identical(this._getStaticType(node.operand),intType)) {
                    staticType = intType;
                }
            }
            this._recordStaticType(node,staticType);
            let propagatedMethodElement : any = node.propagatedElement;
            if (!core.identical(propagatedMethodElement,staticMethodElement)) {
                let propagatedType : any = this._computeStaticReturnType(propagatedMethodElement);
                this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        let propertyName : any = node.propertyName;
        let staticElement : any = propertyName.staticElement;
        let staticType : any = this._dynamicType;
        if (is(staticElement, any)) {
            staticType = staticElement.type;
        }else if (is(staticElement, any)) {
            staticType = this._getTypeOfProperty(staticElement);
        }else {
        }
        staticType = this._inferGenericInstantiationFromContext(node,staticType);
        if (!(this._strongMode && this._inferObjectAccess(node,staticType,propertyName))) {
            this._recordStaticType(propertyName,staticType);
            this._recordStaticType(node,staticType);
        }
        let propagatedElement : any = propertyName.propagatedElement;
        let propagatedType : any = this._overrideManager.getType(propagatedElement);
        if (is(propagatedElement, any)) {
            propagatedType = propagatedElement.type;
        }else if (is(propagatedElement, any)) {
            propagatedType = this._getTypeOfProperty(propagatedElement);
        }else {
        }
        this._resolver.recordPropagatedTypeIfBetter(propertyName,propagatedType);
        this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRethrowExpression(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.bottomType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        let element : any = node.staticElement;
        let staticType : any = this._dynamicType;
        if (is(element, any)) {
            if (this._isNotTypeLiteral(node)) {
                staticType = element.type;
            }else {
                staticType = this._typeProvider.typeType;
            }
        }else if (is(element, any)) {
            if (this._isNotTypeLiteral(node)) {
                staticType = element.type;
            }else {
                staticType = this._typeProvider.typeType;
            }
        }else if (is(element, any)) {
            staticType = element.type;
        }else if (is(element, any)) {
            staticType = this._getTypeOfProperty(element);
        }else if (is(element, any)) {
            staticType = element.type;
        }else if (is(element, any)) {
            staticType = this._typeProvider.typeType;
        }else if (is(element, any)) {
            let variable : any = element;
            staticType = this._promoteManager.getStaticType(variable);
        }else if (is(element, any)) {
            return null;
        }else if (is(element, any)) {
            staticType = this._typeProvider.typeType;
        }else {
            staticType = this._dynamicType;
        }
        staticType = this._inferGenericInstantiationFromContext(node,staticType);
        this._recordStaticType(node,staticType);
        let propagatedType : any = this._getPropertyPropagatedType(element,null);
        if (op(Op.EQUALS,propagatedType,null)) {
            let overriddenType : any = this._overrideManager.getType(element);
            if (op(Op.EQUALS,propagatedType,null) || overriddenType != null && overriddenType.isMoreSpecificThan(propagatedType)) {
                propagatedType = overriddenType;
            }
        }
        this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleStringLiteral(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.stringType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringInterpolation(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.stringType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperExpression(node : any) : core.DartObject {
        if (op(Op.EQUALS,this.thisType,null)) {
            this._recordStaticType(node,this._dynamicType);
        }else {
            this._recordStaticType(node,this.thisType);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.symbolType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) : core.DartObject {
        if (op(Op.EQUALS,this.thisType,null)) {
            this._recordStaticType(node,this._dynamicType);
        }else {
            this._recordStaticType(node,this.thisType);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThrowExpression(node : any) : core.DartObject {
        this._recordStaticType(node,this._typeProvider.bottomType);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        let initializer : any = node.initializer;
        if (this._strongMode) {
            this._inferLocalVariableType(node,initializer);
        }
        if (initializer != null) {
            let rightType : any = initializer.bestType;
            let name : any = node.name;
            this._resolver.recordPropagatedTypeIfBetter(name,rightType);
            let element : any = name.staticElement as any;
            if (element != null) {
                this._resolver.overrideVariable(element,rightType,true);
            }
        }
        return null;
    }
    _analyzeLeastUpperBound(node : any,expr1 : any,expr2 : any) : void {
        let staticType1 : any = this._getDefiniteType(expr1);
        let staticType2 : any = this._getDefiniteType(expr2);
        if (op(Op.EQUALS,staticType1,null)) {
            staticType1 = this._dynamicType;
        }
        if (op(Op.EQUALS,staticType2,null)) {
            staticType2 = this._dynamicType;
        }
        let staticType : any = (this._typeSystem.getLeastUpperBound(staticType1,staticType2) || this._dynamicType);
        this._recordStaticType(node,staticType);
        let propagatedType1 : any = expr1.propagatedType;
        let propagatedType2 : any = expr2.propagatedType;
        if (propagatedType1 != null || propagatedType2 != null) {
            if (op(Op.EQUALS,propagatedType1,null)) {
                propagatedType1 = staticType1;
            }
            if (op(Op.EQUALS,propagatedType2,null)) {
                propagatedType2 = staticType2;
            }
            let propagatedType : any = this._typeSystem.getLeastUpperBound(propagatedType1,propagatedType2);
            this._resolver.recordPropagatedTypeIfBetter(node,propagatedType);
        }
    }
    _computeArgumentType(element : any) : any {
        if (element != null) {
            let parameters : core.DartList<any> = element.parameters;
            if (parameters != null && parameters.length == 2) {
                return parameters[1].type;
            }
        }
        return this._dynamicType;
    }
    _computeInvokeReturnType(type : any) : any {
        if (is(type, any)) {
            let callMethod : any = type.lookUpMethod(FunctionElement.CALL_METHOD_NAME,this._resolver.definingLibrary);
            return (((t)=>(!!t)?t.returnType:null)(((t)=>(!!t)?t.type:null)(callMethod)) || this._dynamicType);
        }else if (is(type, any)) {
            return (type.returnType || this._dynamicType);
        }
        return this._dynamicType;
    }
    _computePropagatedReturnType(element : any) : any {
        if (is(element, any)) {
            return op(Op.INDEX,this._propagatedReturnTypes,element);
        }
        return null;
    }
    _computePropagatedReturnTypeOfFunction(body : any) : any {
        if (is(body, any)) {
            return body.expression.bestType;
        }
        if (is(body, any)) {
            let visitor : _StaticTypeAnalyzer_computePropagatedReturnTypeOfFunction = new _StaticTypeAnalyzer_computePropagatedReturnTypeOfFunction(this._typeProvider,this._typeSystem);
            body.accept(visitor);
            return visitor.result;
        }
        return null;
    }
    _computeReturnTypeOfFunction(body : any,type : any) : any {
        if (body.isGenerator) {
            let genericType : any = body.isAsynchronous ? this._typeProvider.streamType : this._typeProvider.iterableType;
            return genericType.instantiate(new core.DartList.literal<any>(type));
        }else if (body.isAsynchronous) {
            if (type.isDartAsyncFutureOr) {
                type = op(Op.INDEX,(type as any).typeArguments,0);
            }
            return this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(type.flattenFutures(this._typeSystem)));
        }else {
            return type;
        }
    }
    _computeStaticReturnType(element : any) : any {
        if (is(element, any)) {
            let propertyType : any = element.type;
            if (propertyType != null) {
                return this._computeInvokeReturnType(propertyType.returnType);
            }
        }else if (is(element, any)) {
            return this._computeInvokeReturnType(element.type);
        }else if (is(element, any)) {
            let variableType : any = this._promoteManager.getStaticType(element);
            return this._computeInvokeReturnType(variableType);
        }
        return this._dynamicType;
    }
    _computeStaticReturnTypeOfFunctionDeclaration(node : any) : any {
        let returnType : any = node.returnType;
        if (op(Op.EQUALS,returnType,null)) {
            return this._dynamicType;
        }
        return returnType.type;
    }
    _findIteratedType(type : any,targetType : any) : any {
        let result : any;
        let visitedClasses : core.DartHashSet<any>;
        type = type.resolveToBound(this._typeProvider.objectType);
        var _find : (type : any) => boolean = (type : any) : boolean =>  {
            let element : any = type.element;
            if (op(Op.EQUALS,type,this._typeProvider.objectType) || op(Op.EQUALS,element,null)) {
                return false;
            }
            if (op(Op.EQUALS,element,targetType.element)) {
                let typeArguments : core.DartList<any> = type.typeArguments;
                /* TODO (AssertStatementImpl) : assert (typeArguments.length == 1); */;
                result = typeArguments[0];
                return true;
            }
            if (op(Op.EQUALS,visitedClasses,null)) {
                visitedClasses = new core.DartHashSet<any>();
            }
            if (!visitedClasses.add(element)) {
                return false;
            }
            try {
                return _find(type.superclass) || type.interfaces.any(_find) || type.mixins.any(_find);
            } finally {
                visitedClasses.remove(element);
            }
        };
        if (is(type, any)) {
            _find(type);
        }
        return result;
    }
    _getDefiniteType(expr : any) : any {
        return getDefiniteType(expr,this._typeSystem,this._typeProvider);
    }
    _getElementNameAsType(library : any,elementName : string,nameMap : core.DartHashMap<string,string>) : any {
        if (elementName != null) {
            if (nameMap != null) {
                elementName = op(Op.INDEX,nameMap,new core.DartString(elementName).toLowerCase());
            }
            let returnType : any = library.getType(elementName);
            if (returnType != null) {
                if (returnType.typeParameters.isNotEmpty) {
                    return returnType.type.instantiate(returnType.typeParameters.map((_ : any) =>  {
                        return this._dynamicType;
                    }).toList());
                }
                return returnType.type;
            }
        }
        return null;
    }
    _getFirstArgumentAsQuery(library : any,argumentList : any) : any {
        let argumentValue : string = this._getFirstArgumentAsString(argumentList);
        if (argumentValue != null) {
            if (op(Op.GEQ,StringUtilities.indexOf1(argumentValue,0,32),0)) {
                return null;
            }
            let tag : string = argumentValue;
            tag = StringUtilities.substringBeforeChar(tag,58);
            tag = StringUtilities.substringBeforeChar(tag,91);
            tag = StringUtilities.substringBeforeChar(tag,46);
            tag = StringUtilities.substringBeforeChar(tag,35);
            tag = op(Op.INDEX,StaticTypeAnalyzer._HTML_ELEMENT_TO_CLASS_MAP,new core.DartString(tag).toLowerCase());
            let returnType : any = library.getType(tag);
            if (returnType != null) {
                return returnType.type;
            }
        }
        return null;
    }
    _getFirstArgumentAsString(argumentList : any) : string {
        let arguments : any = argumentList.arguments;
        if (op(Op.GT,arguments.length,0)) {
            let argument : any = op(Op.INDEX,arguments,0);
            if (is(argument, any)) {
                return argument.value;
            }
        }
        return null;
    }
    _getFirstArgumentAsType(library : any,argumentList : any) : any {
        return this._getFirstArgumentAsTypeWithMap(library,argumentList,null);
    }
    _getFirstArgumentAsTypeWithMap(library : any,argumentList : any,nameMap : core.DartHashMap<string,string>) : any {
        return this._getElementNameAsType(library,this._getFirstArgumentAsString(argumentList),nameMap);
    }
    _getPropertyPropagatedType(element : any,currentType : any) : any {
        if (is(element, any) && element.isGetter) {
            let variable : any = element.variable;
            let propagatedType : any = variable.propagatedType;
            if (op(Op.EQUALS,currentType,null) || propagatedType != null && propagatedType.isMoreSpecificThan(currentType)) {
                return propagatedType;
            }
        }
        return currentType;
    }
    _getStaticType(expression : any) : any {
        let type : any = expression.staticType;
        if (op(Op.EQUALS,type,null)) {
            return this._dynamicType;
        }
        return type;
    }
    _getType(annotation : any) : any {
        let type : any = annotation.type;
        if (op(Op.EQUALS,type,null)) {
            return this._dynamicType;
        }
        return type;
    }
    _getTypeOfProperty(accessor : any) : any {
        let functionType : any = accessor.type;
        if (op(Op.EQUALS,functionType,null)) {
            return this._dynamicType;
        }
        if (accessor.isSetter) {
            let parameterTypes : core.DartList<any> = functionType.normalParameterTypes;
            if (parameterTypes != null && parameterTypes.length > 0) {
                return parameterTypes[0];
            }
            let getter : any = accessor.variable.getter;
            if (getter != null) {
                functionType = getter.type;
                if (functionType != null) {
                    return functionType.returnType;
                }
            }
            return this._dynamicType;
        }
        return functionType.returnType;
    }
    _inferForEachLoopVariableType(loopVariable : any) : void {
        if (loopVariable != null && op(Op.EQUALS,loopVariable.type,null) && is(loopVariable.parent, any)) {
            let loop : any = loopVariable.parent;
            if (loop.iterable != null) {
                let expr : any = loop.iterable;
                let element : any = loopVariable.element;
                let exprType : any = expr.staticType;
                let targetType : any = (op(Op.EQUALS,loop.awaitKeyword,null)) ? this._typeProvider.iterableType : this._typeProvider.streamType;
                let iteratedType : any = this._findIteratedType(exprType,targetType);
                if (element != null && iteratedType != null) {
                    element.type = iteratedType;
                    loopVariable.identifier.staticType = iteratedType;
                }
            }
        }
    }
    _inferGenericInstantiationFromContext(node : any,type : any) : any {
        if (this._strongMode) {
            let ts : any = this._typeSystem;
            let context = InferenceContext.getContext(node);
            if (is(context, any) && is(type, any) && is(ts, any)) {
                return ts.inferFunctionTypeInstantiation(context,type,{
                    errorReporter : this._resolver.errorReporter,errorNode : node});
            }
        }else if (is(type, any)) {
            return this._typeSystem.instantiateToBounds(type);
        }
        return type;
    }
    _inferGenericInvocationExpression(node : any) : void {
        let arguments : any = node.argumentList;
        let inferred : any = this._inferGenericInvoke(node,node.function.staticType,node.typeArguments,arguments,node.function);
        if (inferred != null && inferred != node.staticInvokeType) {
            arguments.correspondingStaticParameters = ResolverVisitor.resolveArgumentsToParameters(arguments,inferred.parameters,null);
            node.staticInvokeType = inferred;
        }
    }
    _inferGenericInvoke(node : any,fnType : any,typeArguments : any,argumentList : any,errorNode : any) : any {
        let ts : any = this._typeSystem;
        if (op(Op.EQUALS,typeArguments,null) && is(fnType, any) && fnType.typeFormals.isNotEmpty && is(ts, any)) {
            let rawParameters : core.DartList<any> = ResolverVisitor.resolveArgumentsToParameters(argumentList,fnType.parameters,null);
            let params : core.DartList<any> = new core.DartList.literal<any>();
            let argTypes : core.DartList<any> = new core.DartList.literal<any>();
            for(let i : number = 0, length : number = rawParameters.length; i < length; i++){
                let parameter : any = rawParameters[i];
                if (parameter != null) {
                    params.add(parameter);
                    argTypes.add(op(Op.INDEX,argumentList.arguments,i).staticType);
                }
            }
            return ts.inferGenericFunctionOrType(fnType,params,argTypes,InferenceContext.getContext(node),{
                errorReporter : this._resolver.errorReporter,errorNode : errorNode});
        }
        return null;
    }
    _inferInstanceCreationExpression(node : any) : void {
        let constructor : any = node.constructorName;
        let originalElement : any = constructor.staticElement;
        if (isNot(originalElement, any)) {
            return;
        }
        let rawElement = (originalElement as any).baseElement;
        let constructorType : any = StaticTypeAnalyzer.constructorToGenericFunctionType(rawElement);
        let arguments : any = node.argumentList;
        let inferred : any = this._inferGenericInvoke(node,constructorType,constructor.type.typeArguments,arguments,node.constructorName);
        if (inferred != null && inferred != originalElement.type) {
            arguments.correspondingStaticParameters = ResolverVisitor.resolveArgumentsToParameters(arguments,inferred.parameters,null);
            this.inferConstructorName(constructor,inferred.returnType);
            constructor.staticElement = ConstructorMember.from(rawElement,inferred.returnType);
            node.staticElement = constructor.staticElement;
        }
    }
    _inferLocalFunctionReturnType(node : any) : void {
        let recordInference : boolean = false;
        let functionElement : any = node.element as any;
        let body : any = node.body;
        let computedType : any;
        if (is(body, any)) {
            computedType = this._getStaticType(body.expression);
        }else {
            computedType = this._dynamicType;
        }
        if (this._strongMode && (computedType.isDartCoreNull || computedType.isDynamic)) {
            let contextType : any = InferenceContext.getContext(body);
            computedType = (contextType || this._dynamicType);
            recordInference = !computedType.isDynamic;
        }
        computedType = this._computeReturnTypeOfFunction(body,computedType);
        functionElement.returnType = computedType;
        this._recordPropagatedTypeOfFunction(functionElement,node.body);
        this._recordStaticType(node,functionElement.type);
        if (recordInference) {
            this._resolver.inferenceContext.recordInference(node,functionElement.type);
        }
    }
    _inferLocalVariableType(node : any,initializer : any) : void {
        if (initializer != null) {
            let parent : any = node.parent;
            if (is(parent, any) && op(Op.EQUALS,parent.type,null)) {
                let type : any = resolutionMap.staticTypeForExpression(initializer);
                if (type != null && !type.isBottom && !type.isDartCoreNull) {
                    let element : any = node.element;
                    if (is(element, any)) {
                        element.type = initializer.staticType;
                        node.name.staticType = initializer.staticType;
                    }
                }
            }
        }
    }
    _inferMethodInvocationInlineJS(node : any) : boolean {
        let e : any = node.methodName.staticElement;
        if (is(e, any) && e.library.source.uri.toString() == 'dart:_foreign_helper' && op(Op.EQUALS,e.name,'JS')) {
            let typeStr : string = this._getFirstArgumentAsString(node.argumentList);
            let returnType : any = null;
            if (typeStr == '-dynamic') {
                returnType = this._typeProvider.bottomType;
            }else {
                returnType = this._getElementNameAsType(this._typeProvider.objectType.element.library,typeStr,null);
            }
            if (returnType != null) {
                this._recordStaticType(node,returnType);
                return true;
            }
        }
        return false;
    }
    _inferMethodInvocationObject(node : any) : boolean {
        let target : any = node.realTarget;
        if (op(Op.EQUALS,target,null) || is(target, any) && is(target.staticElement, any)) {
            return false;
        }
        let name : string = node.methodName.name;
        let inferredElement : any = this._typeProvider.objectType.element.getMethod(name);
        if (op(Op.EQUALS,inferredElement,null) || inferredElement.isStatic) {
            return false;
        }
        let inferredType : any = inferredElement.type;
        let nodeType : any = node.staticInvokeType;
        if (nodeType != null && nodeType.isDynamic && is(inferredType, any) && inferredType.parameters.isEmpty && node.argumentList.arguments.isEmpty && this._typeProvider.nonSubtypableTypes.contains(inferredType.returnType)) {
            node.staticInvokeType = inferredType;
            this._recordStaticType(node,inferredType.returnType);
            return true;
        }
        return false;
    }
    _inferObjectAccess(node : any,nodeType : any,id : any) : boolean {
        if (is(node, any) && is(node.prefix.staticElement, any)) {
            return false;
        }
        let name : string = id.name;
        let inferredElement : any = this._typeProvider.objectType.element.getGetter(name);
        if (op(Op.EQUALS,inferredElement,null) || inferredElement.isStatic) {
            return false;
        }
        let inferredType : any = inferredElement.type.returnType;
        if (nodeType != null && nodeType.isDynamic && inferredType != null && this._typeProvider.nonSubtypableTypes.contains(inferredType)) {
            this._recordStaticType(id,inferredType);
            this._recordStaticType(node,inferredType);
            return true;
        }
        return false;
    }
    _isHtmlLibrary(library : any) : boolean {
        return library != null && "dart.dom.html" == library.name;
    }
    _isNotTypeLiteral(node : any) : boolean {
        let parent : any = node.parent;
        return is(parent, any) || (is(parent, any) && (is(parent.parent, any) || core.identical(parent.prefix,node))) || (is(parent, any) && core.identical(parent.target,node) && op(Op.EQUALS,parent.operator.type,TokenType.PERIOD)) || (is(parent, any) && core.identical(node,parent.target) && op(Op.EQUALS,parent.operator.type,TokenType.PERIOD));
    }
    _recordPropagatedType(expression : any,type : any) : void {
        if (!this._strongMode && type != null && !type.isBottom && !type.isDynamic && !type.isDartCoreNull) {
            expression.propagatedType = type;
        }
    }
    _recordPropagatedTypeOfFunction(functionElement : any,body : any) : void {
        if (this._strongMode) {
            return;
        }
        let propagatedReturnType : any = this._computePropagatedReturnTypeOfFunction(body);
        if (op(Op.EQUALS,propagatedReturnType,null)) {
            return;
        }
        if (propagatedReturnType.isBottom || propagatedReturnType.isDartCoreNull) {
            return;
        }
        let staticReturnType : any = functionElement.returnType;
        if (!propagatedReturnType.isMoreSpecificThan(staticReturnType)) {
            return;
        }
        op(Op.INDEX_ASSIGN,this._propagatedReturnTypes,functionElement,propagatedReturnType);
    }
    _recordStaticType(expression : any,type : any) : void {
        if (op(Op.EQUALS,type,null)) {
            expression.staticType = this._dynamicType;
        }else {
            expression.staticType = type;
        }
    }
    static constructorToGenericFunctionType(constructor : any) : any {
        let cls : any = constructor.enclosingElement;
        let type : any = constructor.type;
        if (cls.typeParameters.isEmpty) {
            return type;
        }
        let typeVars = new core.DartList.literal<any>();
        let freshTypeVars = new core.DartList.literal<any>();
        let freshVarElements = new core.DartList.literal<any>();
        for(let i : number = 0; i < cls.typeParameters.length; i++){
            let typeParamElement = op(Op.INDEX,cls.typeParameters,i);
            let freshElement = new bare.createInstance(any,null,typeParamElement.name);
            let freshTypeVar = new bare.createInstance(any,null,freshElement);
            freshElement.type = freshTypeVar;
            typeVars.add(typeParamElement.type);
            freshTypeVars.add(freshTypeVar);
            freshVarElements.add(freshElement);
            let bound = (typeParamElement.bound || DynamicTypeImpl.instance);
            freshElement.bound = bound.substitute2(freshTypeVars,typeVars);
        }
        type = type.substitute2(freshTypeVars,typeVars);
        let name = cls.name;
        if (constructor.name != null) {
            name += '.' + constructor.name;
        }
        let function = new bare.createInstance(any,null,name,-1);
        function.enclosingElement = cls;
        function.isSynthetic = true;
        function.returnType = type.returnType;
        function.typeParameters = freshVarElements;
        function.shareParameters(type.parameters);
        return function.type = new bare.createInstance(any,null,function);
    }
    static _createHtmlTagToClassMap() : core.DartHashMap<string,string> {
        let map : core.DartHashMap<string,string> = new core.DartHashMap<string,string>();
        op(Op.INDEX_ASSIGN,map,"a","AnchorElement");
        op(Op.INDEX_ASSIGN,map,"area","AreaElement");
        op(Op.INDEX_ASSIGN,map,"br","BRElement");
        op(Op.INDEX_ASSIGN,map,"base","BaseElement");
        op(Op.INDEX_ASSIGN,map,"body","BodyElement");
        op(Op.INDEX_ASSIGN,map,"button","ButtonElement");
        op(Op.INDEX_ASSIGN,map,"canvas","CanvasElement");
        op(Op.INDEX_ASSIGN,map,"content","ContentElement");
        op(Op.INDEX_ASSIGN,map,"dl","DListElement");
        op(Op.INDEX_ASSIGN,map,"datalist","DataListElement");
        op(Op.INDEX_ASSIGN,map,"details","DetailsElement");
        op(Op.INDEX_ASSIGN,map,"div","DivElement");
        op(Op.INDEX_ASSIGN,map,"embed","EmbedElement");
        op(Op.INDEX_ASSIGN,map,"fieldset","FieldSetElement");
        op(Op.INDEX_ASSIGN,map,"form","FormElement");
        op(Op.INDEX_ASSIGN,map,"hr","HRElement");
        op(Op.INDEX_ASSIGN,map,"head","HeadElement");
        op(Op.INDEX_ASSIGN,map,"h1","HeadingElement");
        op(Op.INDEX_ASSIGN,map,"h2","HeadingElement");
        op(Op.INDEX_ASSIGN,map,"h3","HeadingElement");
        op(Op.INDEX_ASSIGN,map,"h4","HeadingElement");
        op(Op.INDEX_ASSIGN,map,"h5","HeadingElement");
        op(Op.INDEX_ASSIGN,map,"h6","HeadingElement");
        op(Op.INDEX_ASSIGN,map,"html","HtmlElement");
        op(Op.INDEX_ASSIGN,map,"iframe","IFrameElement");
        op(Op.INDEX_ASSIGN,map,"img","ImageElement");
        op(Op.INDEX_ASSIGN,map,"input","InputElement");
        op(Op.INDEX_ASSIGN,map,"keygen","KeygenElement");
        op(Op.INDEX_ASSIGN,map,"li","LIElement");
        op(Op.INDEX_ASSIGN,map,"label","LabelElement");
        op(Op.INDEX_ASSIGN,map,"legend","LegendElement");
        op(Op.INDEX_ASSIGN,map,"link","LinkElement");
        op(Op.INDEX_ASSIGN,map,"map","MapElement");
        op(Op.INDEX_ASSIGN,map,"menu","MenuElement");
        op(Op.INDEX_ASSIGN,map,"meter","MeterElement");
        op(Op.INDEX_ASSIGN,map,"ol","OListElement");
        op(Op.INDEX_ASSIGN,map,"object","ObjectElement");
        op(Op.INDEX_ASSIGN,map,"optgroup","OptGroupElement");
        op(Op.INDEX_ASSIGN,map,"output","OutputElement");
        op(Op.INDEX_ASSIGN,map,"p","ParagraphElement");
        op(Op.INDEX_ASSIGN,map,"param","ParamElement");
        op(Op.INDEX_ASSIGN,map,"pre","PreElement");
        op(Op.INDEX_ASSIGN,map,"progress","ProgressElement");
        op(Op.INDEX_ASSIGN,map,"script","ScriptElement");
        op(Op.INDEX_ASSIGN,map,"select","SelectElement");
        op(Op.INDEX_ASSIGN,map,"source","SourceElement");
        op(Op.INDEX_ASSIGN,map,"span","SpanElement");
        op(Op.INDEX_ASSIGN,map,"style","StyleElement");
        op(Op.INDEX_ASSIGN,map,"caption","TableCaptionElement");
        op(Op.INDEX_ASSIGN,map,"td","TableCellElement");
        op(Op.INDEX_ASSIGN,map,"col","TableColElement");
        op(Op.INDEX_ASSIGN,map,"table","TableElement");
        op(Op.INDEX_ASSIGN,map,"tr","TableRowElement");
        op(Op.INDEX_ASSIGN,map,"textarea","TextAreaElement");
        op(Op.INDEX_ASSIGN,map,"title","TitleElement");
        op(Op.INDEX_ASSIGN,map,"track","TrackElement");
        op(Op.INDEX_ASSIGN,map,"ul","UListElement");
        op(Op.INDEX_ASSIGN,map,"video","VideoElement");
        return map;
    }
}

export namespace _StaticTypeAnalyzer_computePropagatedReturnTypeOfFunction {
    export type Constructors = '_StaticTypeAnalyzer_computePropagatedReturnTypeOfFunction';
    export type Interface = Omit<_StaticTypeAnalyzer_computePropagatedReturnTypeOfFunction, Constructors>;
}
@DartClass
export class _StaticTypeAnalyzer_computePropagatedReturnTypeOfFunction extends any {
    _typeSystem : any;

    _typeProvider : any;

    result : any;

    constructor(_typeProvider : any,_typeSystem : any) {
    }
    @defaultConstructor
    _StaticTypeAnalyzer_computePropagatedReturnTypeOfFunction(_typeProvider : any,_typeSystem : any) {
        this.result = null;
        this._typeProvider = _typeProvider;
        this._typeSystem = _typeSystem;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpression(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : core.DartObject {
        let type : any;
        let expression : any = node.expression;
        if (expression != null) {
            type = expression.bestType;
        }else {
            type = this._typeProvider.nullType;
        }
        if (op(Op.EQUALS,this.result,null)) {
            this.result = type;
        }else {
            this.result = this._typeSystem.getLeastUpperBound(this.result,type);
        }
        return null;
    }
}

export class properties {
}
