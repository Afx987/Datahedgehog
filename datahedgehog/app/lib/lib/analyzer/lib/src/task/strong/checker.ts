/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/strong/checker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast_properties";

export var getDefiniteType : (expression : any,typeSystem : any,typeProvider : any) => any = (expression : any,typeSystem : any,typeProvider : any) : any =>  {
    let type : any = (expression.staticType || DynamicTypeImpl.instance);
    if (is(typeSystem, any) && is(type, any) && hasStrictArrow(expression)) {
        return typeSystem.functionTypeToConcreteType(type);
    }
    return type;
};
export var hasStrictArrow : (expression : any) => boolean = (expression : any) : boolean =>  {
    let element = _getKnownElement(expression);
    return is(element, any) || is(element, any);
};
export var _elementType : (e : any) => any = (e : any) : any =>  {
    if (op(Op.EQUALS,e,null)) {
        return DynamicTypeImpl.instance;
    }
    return (e as any).type;
};
export var _getKnownElement : (expression : any) => any = (expression : any) : any =>  {
    if (is(expression, any)) {
        return _getKnownElement(expression.expression);
    }else if (is(expression, any)) {
        return _getKnownElement(expression.expression);
    }else if (is(expression, any)) {
        return expression.element;
    }else if (is(expression, any)) {
        return expression.propertyName.staticElement;
    }else if (is(expression, any)) {
        return expression.staticElement;
    }
    return null;
};
export var _getMemberField : (type : any,member : any) => any = (type : any,member : any) : any =>  {
    let memberName : string = member.name;
    let field : any;
    if (member.isGetter) {
        let getter = type.getGetter(memberName);
        if (op(Op.EQUALS,getter,null) || getter.isStatic) return null;
        field = getter.variable;
    }else if (!member.isSynthetic) {
        let setter = type.getSetter(memberName);
        if (op(Op.EQUALS,setter,null) || setter.isStatic) return null;
        field = setter.variable;
    }else {
        return null;
    }
    if (field.isSynthetic) return null;
    return field;
};
export var _getMemberType : (type : any,member : any) => any = (type : any,member : any) : any =>  {
    return (_memberTypeGetter(member))(type);
};
export var _memberTypeGetter : (member : any) => (type : any) => any = (member : any) : (type : any) => any =>  {
    let memberName : string = member.name;
    let isGetter = is(member, any) && member.isGetter;
    let isSetter = is(member, any) && member.isSetter;
    var f : (type : any) => any = (type : any) : any =>  {
        let baseMethod : any;
        if (member.isPrivate) {
            let subtypeLibrary = member.library;
            let baseLibrary = type.element.library;
            if (baseLibrary != subtypeLibrary) {
                return null;
            }
        }
        try {
            if (isGetter) {
                /* TODO (AssertStatementImpl) : assert (!isSetter); */;
                baseMethod = type.getGetter(memberName);
            }else if (isSetter) {
                baseMethod = type.getSetter(memberName);
            }else {
                baseMethod = type.getMethod(memberName);
            }
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
        if (op(Op.EQUALS,baseMethod,null) || baseMethod.isStatic) return null;
        return baseMethod.type;
    };
    return f;
};
export namespace CodeChecker {
    export type Constructors = 'CodeChecker';
    export type Interface = Omit<CodeChecker, Constructors>;
}
@DartClass
export class CodeChecker extends any {
    rules : any;

    typeProvider : any;

    reporter : any;

    _options : any;

    _overrideChecker : _OverrideChecker;

    _failure : boolean;

    _hasImplicitCasts : boolean;

    constructor(typeProvider : any,rules : any,reporter : any,_options : any) {
    }
    @defaultConstructor
    CodeChecker(typeProvider : any,rules : any,reporter : any,_options : any) {
        this._failure = false;
        this.typeProvider = typeProvider;
        this.rules = rules;
        this.reporter = reporter;
        this._options = _options;
        this._overrideChecker = new _OverrideChecker(this);
    }
    get failure() : boolean {
        return this._failure;
    }
    checkArgument(arg : any,expectedType : any) : void {
        let baseExpression : any = is(arg, any) ? arg.expression : arg;
        this.checkAssignment(baseExpression,expectedType);
    }
    checkArgumentList(node : any,type : any) : void {
        let list : any = node.arguments;
        let len : number = list.length;
        for(let i : number = 0; i < len; ++i){
            let arg : any = op(Op.INDEX,list,i);
            let element : any = arg.staticParameterElement;
            if (op(Op.EQUALS,element,null)) {
                continue;
            }
            this.checkArgument(arg,_elementType(element));
        }
    }
    checkAssignment(expr : any,type : any) : void {
        if (is(expr, any)) {
            this.checkAssignment(expr.expression,type);
        }else {
            this._checkImplicitCast(expr,type);
        }
    }
    checkBoolean(expr : any) : void {
        return this.checkAssignment(expr,this.typeProvider.boolType);
    }
    checkFunctionApplication(node : any) : void {
        let ft = this._getTypeAsCaller(node);
        if (this._isDynamicCall(node,ft)) {
            this._recordDynamicInvoke(node,node.function);
        }else {
            this.checkArgumentList(node.argumentList,ft);
        }
    }
    getType(type : any) : any {
        return (((t)=>(!!t)?t.type:null)(type) || DynamicTypeImpl.instance);
    }
    reset() : void {
        this._failure = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAsExpression(node : any) : void {
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : void {
        let operator : any = node.operator;
        let operatorType : any = operator.type;
        if (op(Op.EQUALS,operatorType,TokenType.EQ) || op(Op.EQUALS,operatorType,TokenType.QUESTION_QUESTION_EQ)) {
            let staticType : any = this._getDefiniteType(node.leftHandSide);
            this.checkAssignment(node.rightHandSide,staticType);
        }else if (op(Op.EQUALS,operatorType,TokenType.AMPERSAND_AMPERSAND_EQ) || op(Op.EQUALS,operatorType,TokenType.BAR_BAR_EQ)) {
            this.checkAssignment(node.leftHandSide,this.typeProvider.boolType);
            this.checkAssignment(node.rightHandSide,this.typeProvider.boolType);
        }else {
            this._checkCompoundAssignment(node);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : void {
        let op = node.operator;
        if (op.isUserDefinableOperator) {
            let element = node.staticElement;
            if (op(Op.EQUALS,element,null)) {
                if (op.type != TokenType.EQ_EQ && op.type != TokenType.BANG_EQ) {
                    this._recordDynamicInvoke(node,node.leftOperand);
                }
            }else {
                if (is(element, any)) {
                    let type = element.type;
                    if (type.normalParameterTypes.isNotEmpty) {
                        this.checkArgument(node.rightOperand,op(Op.INDEX,type.normalParameterTypes,0));
                    }
                }else {
                }
            }
        }else {
            switch (op.type) {
                case TokenType.AMPERSAND_AMPERSAND:
                case TokenType.BAR_BAR:
                    this.checkBoolean(node.leftOperand);
                    this.checkBoolean(node.rightOperand);
                    break;
                case TokenType.BANG_EQ:
                    break;
                case TokenType.QUESTION_QUESTION:
                    break;
                default:
                    /* TODO (AssertStatementImpl) : assert (false); */;
            }
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : void {
        this._overrideChecker.check(node);
        super.visitClassDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) : void {
        this._overrideChecker.check(node);
        super.visitClassTypeAlias(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitComment(node : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : void {
        this._hasImplicitCasts = false;
        node.visitChildren(this);
        lib3.setHasImplicitCasts(node,this._hasImplicitCasts);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConditionalExpression(node : any) : void {
        this.checkBoolean(node.condition);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : void {
        node.visitChildren(this);
        let init = node.initializers;
        for(let i : number = 0, last : number = op(Op.MINUS,init.length,1); i < last; i++){
            let node = op(Op.INDEX,init,i);
            if (is(node, any)) {
                this._recordMessage(node,StrongModeCode.INVALID_SUPER_INVOCATION,new core.DartList.literal(node));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) : void {
        let field = node.fieldName;
        let element = field.staticElement;
        let staticType : any = _elementType(element);
        this.checkAssignment(node.expression,staticType);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : void {
        let parameter = node.parameter;
        let parameterType = _elementType(parameter.element);
        /* TODO (AssertStatementImpl) : assert (parameterType != null); */;
        let defaultValue = node.defaultValue;
        if (defaultValue != null) {
            this.checkAssignment(defaultValue,parameterType);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : void {
        this.checkBoolean(node.condition);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpressionFunctionBody(node : any) : void {
        this._checkReturnOrYield(node.expression,node);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameter(node : any) : void {
        let element = node.element;
        let typeName = node.type;
        if (typeName != null) {
            let type = _elementType(element);
            let fieldElement = node.identifier.staticElement as any;
            let fieldType = _elementType(fieldElement.field);
            if (!this.rules.isSubtypeOf(type,fieldType)) {
                this._recordMessage(node,StrongModeCode.INVALID_PARAMETER_DECLARATION,new core.DartList.literal(node,fieldType));
            }
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) : void {
        let loopVariable = (node.identifier || ((t)=>(!!t)?t.identifier:null)(node.loopVariable));
        if (loopVariable != null) {
            let sequenceInterface = node.awaitKeyword != null ? this.typeProvider.streamType : this.typeProvider.iterableType;
            let iterableType = this._getDefiniteType(node.iterable);
            let elementType = this.rules.mostSpecificTypeArgument(iterableType,sequenceInterface);
            if (op(Op.EQUALS,elementType,null)) {
                let sequenceType = sequenceInterface.instantiate(new core.DartList.literal(DynamicTypeImpl.instance));
                if (this.rules.isSubtypeOf(sequenceType,iterableType)) {
                    this._recordImplicitCast(node.iterable,sequenceType,{
                        from : iterableType});
                    elementType = DynamicTypeImpl.instance;
                }
            }
            if (elementType != null) {
                this._checkImplicitCast(loopVariable,this._getDefiniteType(loopVariable),{
                    from : elementType});
            }
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : void {
        if (node.condition != null) {
            this.checkBoolean(node.condition);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : void {
        this.checkFunctionApplication(node);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIfStatement(node : any) : void {
        this.checkBoolean(node.condition);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : void {
        let target = node.realTarget;
        let element = node.staticElement;
        if (op(Op.EQUALS,element,null)) {
            this._recordDynamicInvoke(node,target);
        }else if (is(element, any)) {
            let type = element.type;
            if (type.normalParameterTypes.isNotEmpty) {
                this.checkArgument(node.index,op(Op.INDEX,type.normalParameterTypes,0));
            }
        }else {
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : void {
        let arguments = node.argumentList;
        let element = node.staticElement;
        if (element != null) {
            let type = _elementType(node.staticElement);
            this.checkArgumentList(arguments,type);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIsExpression(node : any) : void {
        this._checkRuntimeTypeCheck(node,node.type);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : void {
        let type : any = DynamicTypeImpl.instance;
        if (node.typeArguments != null) {
            let targs : any = node.typeArguments.arguments;
            if (op(Op.GT,targs.length,0)) {
                type = op(Op.INDEX,targs,0).type;
            }
        }else {
            let staticType : any = node.staticType;
            if (is(staticType, any)) {
                let targs : core.DartList<any> = staticType.typeArguments;
                if (targs != null && targs.length > 0) {
                    type = targs[0];
                }
            }
        }
        let elements : any = node.elements;
        for(let i : number = 0; i < elements.length; i++){
            this.checkArgument(op(Op.INDEX,elements,i),type);
        }
        super.visitListLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : void {
        let ktype : any = DynamicTypeImpl.instance;
        let vtype : any = DynamicTypeImpl.instance;
        if (node.typeArguments != null) {
            let targs : any = node.typeArguments.arguments;
            if (op(Op.GT,targs.length,0)) {
                ktype = op(Op.INDEX,targs,0).type;
            }
            if (op(Op.GT,targs.length,1)) {
                vtype = op(Op.INDEX,targs,1).type;
            }
        }else {
            let staticType : any = node.staticType;
            if (is(staticType, any)) {
                let targs : core.DartList<any> = staticType.typeArguments;
                if (targs != null) {
                    if (targs.length > 0) {
                        ktype = targs[0];
                    }
                    if (targs.length > 1) {
                        vtype = targs[1];
                    }
                }
            }
        }
        let entries : any = node.entries;
        for(let i : number = 0; i < entries.length; i++){
            let entry : any = op(Op.INDEX,entries,i);
            this.checkArgument(entry.key,ktype);
            this.checkArgument(entry.value,vtype);
        }
        super.visitMapLiteral(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) {
        let target = node.realTarget;
        let element = node.methodName.staticElement;
        if (op(Op.EQUALS,element,null) && !this.typeProvider.isObjectMethod(node.methodName.name)) {
            this._recordDynamicInvoke(node,target);
            lib3.setIsDynamicInvoke(node.methodName,true);
        }else {
            this.checkFunctionApplication(node);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : void {
        this._checkUnary(node.operand,node.operator,node.staticElement);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : void {
        this._checkFieldAccess(node,node.prefix,node.identifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : void {
        if (op(Op.EQUALS,node.operator.type,TokenType.BANG)) {
            this.checkBoolean(node.operand);
        }else {
            this._checkUnary(node.operand,node.operator,node.staticElement);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : void {
        this._checkFieldAccess(node,node.realTarget,node.propertyName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : void {
        let type = ((t)=>(!!t)?t.type:null)(resolutionMap.staticElementForConstructorReference(node));
        if (type != null) {
            this.checkArgumentList(node.argumentList,type);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) : void {
        this._checkReturnOrYield(node.expression,node);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : void {
        let element = node.staticElement;
        if (element != null) {
            let type = resolutionMap.staticElementForConstructorReference(node).type;
            this.checkArgumentList(node.argumentList,type);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : void {
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        let variableElement : any = op(Op.EQUALS,node,null) ? null : resolutionMap.elementDeclaredByVariableDeclaration(node);
        if (!node.isConst && !node.isFinal && op(Op.EQUALS,node.initializer,null) && this.rules.isNonNullableType(((t)=>(!!t)?t.type:null)(variableElement))) {
            this._recordMessage(node,StaticTypeWarningCode.NON_NULLABLE_FIELD_NOT_INITIALIZED,new core.DartList.literal(node.name,((t)=>(!!t)?t.type:null)(variableElement)));
        }
        let parent : any = node.parent;
        if (variableElement != null && is(parent, any) && op(Op.EQUALS,parent.type,null) && node.initializer != null) {
            if (op(Op.EQUALS,variableElement.kind,ElementKind.TOP_LEVEL_VARIABLE) || op(Op.EQUALS,variableElement.kind,ElementKind.FIELD)) {
                this._validateTopLevelInitializer(variableElement.name,node.initializer);
            }
        }
        return super.visitVariableDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclarationList(node : any) : void {
        let type : any = node.type;
        if (op(Op.EQUALS,type,null)) {
        }else {
            for(let variable of node.variables) {
                let initializer = variable.initializer;
                if (initializer != null) {
                    this.checkAssignment(initializer,type.type);
                }
            }
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : void {
        this.checkBoolean(node.condition);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitYieldStatement(node : any) : void {
        this._checkReturnOrYield(node.expression,node,{
            yieldStar : node.star != null});
        node.visitChildren(this);
    }
    _checkCompoundAssignment(expr : any) : void {
        let op = expr.operator.type;
        /* TODO (AssertStatementImpl) : assert (op.isAssignmentOperator && op != TokenType.EQ); */;
        let methodElement = resolutionMap.staticElementForMethodReference(expr);
        if (op(Op.EQUALS,methodElement,null)) {
            this._recordDynamicInvoke(expr,expr.leftHandSide);
        }else {
            /* TODO (AssertStatementImpl) : assert (methodElement.isOperator); */;
            let functionType = methodElement.type;
            let paramTypes = functionType.normalParameterTypes;
            /* TODO (AssertStatementImpl) : assert (paramTypes.length == 1); */;
            /* TODO (AssertStatementImpl) : assert (functionType.namedParameterTypes.isEmpty); */;
            /* TODO (AssertStatementImpl) : assert (functionType.optionalParameterTypes.isEmpty); */;
            let rhsType = this._getDefiniteType(expr.rightHandSide);
            let lhsType = this._getDefiniteType(expr.leftHandSide);
            let returnType = this.rules.refineBinaryExpressionType(lhsType,op,rhsType,functionType.returnType);
            this._checkImplicitCast(expr.rightHandSide,op(Op.INDEX,paramTypes,0),{
                from : rhsType});
            this._checkImplicitCast(expr.leftHandSide,lhsType,{
                from : returnType,opAssign : true});
        }
    }
    _checkFieldAccess(node : any,target : any,field : any) : void {
        if (op(Op.EQUALS,field.staticElement,null) && !this.typeProvider.isObjectMember(field.name)) {
            this._recordDynamicInvoke(node,target);
        }
        node.visitChildren(this);
    }
    _checkImplicitCast(expr : any,to : any,_namedArguments? : {from? : any,opAssign? : boolean}) : void {
        let {from,opAssign} = Object.assign({
            "opAssign" : false}, _namedArguments );
        from = ( from ) || ( this._getDefiniteType(expr) );
        if (this._needsImplicitCast(expr,to,{
            from : from}) == true) {
            this._recordImplicitCast(expr,to,{
                from : from,opAssign : opAssign});
        }
    }
    _checkNonNullAssignment(expression : any,to : any,from : any) : boolean {
        if (this.rules.isNonNullableType(to) && this.rules.isNullableType(from)) {
            this._recordMessage(expression,StaticTypeWarningCode.INVALID_ASSIGNMENT,new core.DartList.literal(from,to));
            return false;
        }
        return true;
    }
    _checkReturnOrYield(expression : any,node : any,_namedArguments? : {yieldStar? : boolean}) : void {
        let {yieldStar} = Object.assign({
            "yieldStar" : false}, _namedArguments );
        let body : any = node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        let type = this._getExpectedReturnType(body,{
            yieldStar : yieldStar});
        if (op(Op.EQUALS,type,null)) {
            return;
        }
        if (expression != null) this.checkAssignment(expression,type);
    }
    _checkRuntimeTypeCheck(node : any,annotation : any) : void {
        let type = this.getType(annotation);
        if (!this.rules.isGroundType(type)) {
            this._recordMessage(node,StrongModeCode.NON_GROUND_TYPE_CHECK_INFO,new core.DartList.literal(type));
        }
    }
    _checkUnary(operand : any,op : any,element : any) : void {
        let isIncrementAssign : boolean = op(Op.EQUALS,op.type,TokenType.PLUS_PLUS) || op(Op.EQUALS,op.type,TokenType.MINUS_MINUS);
        if (op.isUserDefinableOperator || isIncrementAssign) {
            if (op(Op.EQUALS,element,null)) {
                this._recordDynamicInvoke(operand.parent,operand);
            }else if (isIncrementAssign) {
                let functionType = element.type;
                let rhsType = this.typeProvider.intType;
                let lhsType = this._getDefiniteType(operand);
                let returnType = this.rules.refineBinaryExpressionType(lhsType,TokenType.PLUS,rhsType,functionType.returnType);
                this._checkImplicitCast(operand,lhsType,{
                    from : returnType,opAssign : true});
            }
        }
    }
    _getDefiniteType(expr : any) : any {
        return getDefiniteType(expr,this.rules,this.typeProvider);
    }
    _getExpectedReturnType(body : any,_namedArguments? : {yieldStar? : boolean}) : any {
        let {yieldStar} = Object.assign({
            "yieldStar" : false}, _namedArguments );
        let functionType : any;
        let parent = body.parent;
        if (is(parent, any)) {
            functionType = _elementType(parent.element);
        }else {
            /* TODO (AssertStatementImpl) : assert (parent is FunctionExpression); */;
            functionType = ((parent as any).staticType || DynamicTypeImpl.instance);
        }
        let type = functionType.returnType;
        let expectedType : any = null;
        if (body.isAsynchronous) {
            if (body.isGenerator) {
                expectedType = this.typeProvider.streamType;
            }else {
                let typeArg = (op(Op.EQUALS,type.element,this.typeProvider.futureType.element)) ? op(Op.INDEX,(type as any).typeArguments,0) : this.typeProvider.dynamicType;
                return this.typeProvider.futureOrType.instantiate(new core.DartList.literal(typeArg));
            }
        }else {
            if (body.isGenerator) {
                expectedType = this.typeProvider.iterableType;
            }else {
                return type;
            }
        }
        if (yieldStar) {
            if (type.isDynamic) {
                return expectedType.instantiate(new core.DartList.literal(this.typeProvider.dynamicType));
            }else {
                return type;
            }
        }
        if (type.isDynamic) {
            return type;
        }else if (is(type, any) && op(Op.EQUALS,type.element,expectedType.element)) {
            return op(Op.INDEX,type.typeArguments,0);
        }else {
            return null;
        }
    }
    _getTypeAsCaller(node : any) : any {
        let type : any = node.staticInvokeType;
        if (is(type, any)) {
            return type;
        }else if (is(type, any)) {
            return this.rules.getCallMethodDefiniteType(type);
        }
        return null;
    }
    _isDynamicCall(call : any,ft : any) : boolean {
        if (op(Op.EQUALS,ft,null)) return true;
        if (hasStrictArrow(call.function)) {
            return false;
        }
        return this.rules.anyParameterType(ft,(pt : any) =>  {
            return pt.isDynamic;
        });
    }
    _needsImplicitCast(expr : any,to : any,_namedArguments? : {from? : any}) : boolean {
        let {from} = Object.assign({
        }, _namedArguments );
        from = ( from ) || ( this._getDefiniteType(expr) );
        if (!this._checkNonNullAssignment(expr,to,from)) return false;
        if (to.isVoid) return false;
        if (this.rules.isSubtypeOf(from,to)) return false;
        if (this.rules.isAssignableTo(from,to)) return true;
        if (op(Op.EQUALS,to.element,this.typeProvider.futureOrType.element)) {
            let to1 = op(Op.INDEX,(to as any).typeArguments,0);
            let to2 = this.typeProvider.futureType.instantiate(new core.DartList.literal(to1));
            return this._needsImplicitCast(expr,to1,{
                from : from}) == true || this._needsImplicitCast(expr,to2,{
                from : from}) == true;
        }
        return null;
    }
    _recordDynamicInvoke(node : any,target : any) : void {
        this._recordMessage(node,StrongModeCode.DYNAMIC_INVOKE,new core.DartList.literal(node));
        if (target != null) lib3.setIsDynamicInvoke(target,true);
    }
    _recordImplicitCast(expr : any,to : any,_namedArguments? : {from? : any,opAssign? : boolean}) : void {
        let {from,opAssign} = Object.assign({
            "opAssign" : false}, _namedArguments );
        if (is(expr, any)) {
            if (is(expr, any)) {
                this._recordMessage(expr,StrongModeCode.INVALID_CAST_LITERAL_LIST,new core.DartList.literal(from,to));
            }else if (is(expr, any)) {
                this._recordMessage(expr,StrongModeCode.INVALID_CAST_LITERAL_MAP,new core.DartList.literal(from,to));
            }else {
                this._recordMessage(expr,StrongModeCode.INVALID_CAST_LITERAL,new core.DartList.literal(expr,from,to));
            }
            return;
        }
        if (is(expr, any)) {
            this._recordMessage(expr,StrongModeCode.INVALID_CAST_FUNCTION_EXPR,new core.DartList.literal(from,to));
            return;
        }
        if (is(expr, any)) {
            let e : any = expr.staticElement;
            if (op(Op.EQUALS,e,null) || !e.isFactory) {
                this._recordMessage(expr,StrongModeCode.INVALID_CAST_NEW_EXPR,new core.DartList.literal(from,to));
                return;
            }
        }
        let e : any = _getKnownElement(expr);
        if (is(e, any) || is(e, any) && e.isStatic) {
            this._recordMessage(expr,is(e, any) ? StrongModeCode.INVALID_CAST_METHOD : StrongModeCode.INVALID_CAST_FUNCTION,new core.DartList.literal(e.name,from,to));
            return;
        }
        let downCastComposite : boolean = false;
        if (!this.rules.isGroundType(to)) {
            if (is(from, any)) {
                let typeArgs = from.typeArguments;
                downCastComposite = typeArgs.isEmpty || typeArgs.any((t : any) =>  {
                    return t.isDynamic;
                });
            }else {
                downCastComposite = !from.isDynamic;
            }
        }
        let parent = expr.parent;
        let errorCode : any;
        if (downCastComposite) {
            errorCode = StrongModeCode.DOWN_CAST_COMPOSITE;
        }else if (from.isDynamic) {
            errorCode = StrongModeCode.DYNAMIC_CAST;
        }else if (is(parent, any) && op(Op.EQUALS,parent.initializer,expr)) {
            errorCode = StrongModeCode.ASSIGNMENT_CAST;
        }else {
            errorCode = opAssign ? StrongModeCode.DOWN_CAST_IMPLICIT_ASSIGN : StrongModeCode.DOWN_CAST_IMPLICIT;
        }
        this._recordMessage(expr,errorCode,new core.DartList.literal(from,to));
        if (opAssign) {
            lib3.setImplicitAssignmentCast(expr,to);
        }else {
            lib3.setImplicitCast(expr,to);
        }
        this._hasImplicitCasts = true;
    }
    _recordMessage(node : any,errorCode : any,arguments : core.DartList<any>) : void {
        let processor = ErrorProcessor.getProcessor(this._options,new bare.createInstance(any,null,null,-1,0,errorCode,null,null));
        let severity = (processor != null) ? processor.severity : errorCode.errorSeverity;
        if (op(Op.EQUALS,severity,ErrorSeverity.ERROR)) {
            this._failure = true;
        }
        if (op(Op.EQUALS,errorCode.type,ErrorType.HINT) && errorCode.name.startsWith('STRONG_MODE_TOP_LEVEL_')) {
            severity = ErrorSeverity.ERROR;
        }
        if (severity != ErrorSeverity.INFO || this._options.strongModeHints) {
            let begin : number = is(node, any) ? node.firstTokenAfterCommentAndMetadata.offset : node.offset;
            let length : number = op(Op.MINUS,node.end,begin);
            let source = resolutionMap.elementDeclaredByCompilationUnit(node.root as any).source;
            let error = new bare.createInstance(any,null,source,begin,length,errorCode,arguments);
            this.reporter.onError(error);
        }
    }
    _validateTopLevelInitializer(name : string,n : any) : void {
        var validateHasType : (e : any) => void = (e : any) : void =>  {
            if (e.hasImplicitReturnType) {
                let variable = e.variable as any;
                let error : any = variable.typeInferenceError;
                if (error != null) {
                    if (op(Op.EQUALS,error.kind,TopLevelInferenceErrorKind.dependencyCycle)) {
                        this._recordMessage(n,StrongModeCode.TOP_LEVEL_CYCLE,new core.DartList.literal(name,error.arguments));
                    }else {
                        this._recordMessage(n,StrongModeCode.TOP_LEVEL_IDENTIFIER_NO_TYPE,new core.DartList.literal(name,e.name));
                    }
                }
            }
        };
        var validateIdentifierElement : (n : any,e : any) => void = (n : any,e : any) : void =>  {
            if (op(Op.EQUALS,e,null)) {
                return;
            }
            let enclosing : any = e.enclosingElement;
            if (is(enclosing, any)) {
                if (is(e, any)) {
                    validateHasType(e);
                }
            }else if (is(enclosing, any)) {
                if (is(e, any)) {
                    if (e.isStatic) {
                        validateHasType(e);
                    }else {
                        this._recordMessage(n,StrongModeCode.TOP_LEVEL_INSTANCE_GETTER,new core.DartList.literal(name,e.name));
                    }
                }
            }
        };
        if (op(Op.EQUALS,n,null) || is(n, any) || is(n, any) || is(n, any) || is(n, any) || is(n, any) || is(n, any) || is(n, any)) {
        }else if (is(n, any)) {
            this._validateTopLevelInitializer(name,n.expression);
        }else if (is(n, any)) {
        }else if (is(n, any)) {
            this._validateTopLevelInitializer(name,n.expression);
        }else if (is(n, any)) {
            this._validateTopLevelInitializer(name,n.thenExpression);
            this._validateTopLevelInitializer(name,n.elseExpression);
        }else if (is(n, any)) {
            let operator : any = n.operator.type;
            if (op(Op.EQUALS,operator,TokenType.AMPERSAND_AMPERSAND) || op(Op.EQUALS,operator,TokenType.BAR_BAR) || op(Op.EQUALS,operator,TokenType.EQ_EQ) || op(Op.EQUALS,operator,TokenType.BANG_EQ)) {
            }else if (op(Op.EQUALS,operator,TokenType.QUESTION_QUESTION)) {
                this._recordMessage(n,StrongModeCode.TOP_LEVEL_UNSUPPORTED,new core.DartList.literal(name,n.runtimeType.toString()));
            }else {
                this._validateTopLevelInitializer(name,n.leftOperand);
            }
        }else if (is(n, any)) {
            let operator : any = n.operator.type;
            if (op(Op.EQUALS,operator,TokenType.BANG)) {
            }else {
                this._validateTopLevelInitializer(name,n.operand);
            }
        }else if (is(n, any)) {
            this._validateTopLevelInitializer(name,n.operand);
        }else if (is(n, any)) {
            if (op(Op.EQUALS,n.typeArguments,null)) {
                for(let element of n.elements) {
                    this._validateTopLevelInitializer(name,element);
                }
            }
        }else if (is(n, any)) {
            if (op(Op.EQUALS,n.typeArguments,null)) {
                for(let entry of n.entries) {
                    this._validateTopLevelInitializer(name,entry.key);
                    this._validateTopLevelInitializer(name,entry.value);
                }
            }
        }else if (is(n, any)) {
            for(let p of n.parameters.parameters) {
                if (is(p, any)) {
                    p = (p as any).parameter;
                }
                if (is(p, any)) {
                    if (op(Op.EQUALS,p.type,null)) {
                        this._recordMessage(p,StrongModeCode.TOP_LEVEL_FUNCTION_LITERAL_PARAMETER,new core.DartList.literal(name,((t)=>(!!t)?t.name:null)(p.element)));
                    }
                }
            }
            let body : any = n.body;
            if (is(body, any)) {
                this._validateTopLevelInitializer(name,body.expression);
            }else {
                this._recordMessage(n,StrongModeCode.TOP_LEVEL_FUNCTION_LITERAL_BLOCK,new core.DartList.literal());
            }
        }else if (is(n, any)) {
            let constructor : any = n.staticElement;
            let clazz : any = ((t)=>(!!t)?t.enclosingElement:null)(constructor);
            if (clazz != null && clazz.typeParameters.isNotEmpty) {
                let type : any = n.constructorName.type;
                if (op(Op.EQUALS,type.typeArguments,null)) {
                    this._recordMessage(type,StrongModeCode.TOP_LEVEL_TYPE_ARGUMENTS,new core.DartList.literal(name,clazz.name));
                }
            }
        }else if (is(n, any)) {
        }else if (is(n, any)) {
        }else if (is(n, any)) {
            validateIdentifierElement(n,n.staticElement);
        }else if (is(n, any)) {
            let element : any = n.propertyName.staticElement;
            validateIdentifierElement(n.propertyName,element);
        }else if (is(n, any)) {
            this._validateTopLevelInitializer(name,n.function);
        }else if (is(n, any)) {
            this._validateTopLevelInitializer(name,n.target);
            let methodName : any = n.methodName;
            let element : any = methodName.staticElement;
            if (is(element, any) && element.typeParameters.isNotEmpty) {
                if (op(Op.EQUALS,n.typeArguments,null)) {
                    this._recordMessage(methodName,StrongModeCode.TOP_LEVEL_TYPE_ARGUMENTS,new core.DartList.literal(name,methodName.name));
                }
            }
        }else if (is(n, any)) {
            this._validateTopLevelInitializer(name,n.target);
        }else {
            this._recordMessage(n,StrongModeCode.TOP_LEVEL_UNSUPPORTED,new core.DartList.literal(name,n.runtimeType.toString()));
        }
    }
}

export namespace _OverrideChecker {
    export type Constructors = '_OverrideChecker';
    export type Interface = Omit<_OverrideChecker, Constructors>;
}
@DartClass
export class _OverrideChecker {
    rules : any;

    _checker : CodeChecker;

    constructor(checker : CodeChecker) {
    }
    @defaultConstructor
    _OverrideChecker(checker : CodeChecker) {
        this._checker = checker;
        this.rules = checker.rules;
    }
    check(node : any) : void {
        let element = resolutionMap.elementDeclaredByDeclaration(node) as any;
        if (element.type.isObject) {
            return;
        }
        this._checkSuperOverrides(node,element);
        this._checkMixinApplicationOverrides(node,element);
        this._checkAllInterfaceOverrides(node,element);
    }
    _checkAllInterfaceOverrides(node : any,element : any) : void {
        let seen = new core.DartSet<string>();
        var find : (interfaceType : any,result : core.DartSet<any>) => any = (interfaceType : any,result : core.DartSet<any>) =>  {
            if (op(Op.EQUALS,interfaceType,null) || interfaceType.isObject) return;
            if (result.contains(interfaceType)) return;
            result.add(interfaceType);
            find(interfaceType.superclass,result);
            interfaceType.mixins.forEach((i : any) =>  {
                return find(i,result);
            });
            interfaceType.interfaces.forEach((i : any) =>  {
                return find(i,result);
            });
        };
        let localInterfaces = new core.DartSet<any>();
        let type = element.type;
        type.interfaces.forEach((i : any) =>  {
            return find(i,localInterfaces);
        });
        this._checkInterfacesOverrides(type,localInterfaces,seen,{
            includeParents : true,classNode : node});
        let superInterfaces = new core.DartSet<any>();
        let parent = type.superclass;
        while (parent != null && parent.element.isAbstract){
            parent.interfaces.forEach((i : any) =>  {
                return find(i,superInterfaces);
            });
            parent = parent.superclass;
        }
        this._checkInterfacesOverrides(type,superInterfaces,seen,{
            includeParents : false,classNode : node});
    }
    _checkIndividualOverridesFromClass(node : any,baseType : any,seen : core.DartSet<string>,isSubclass : boolean) {
        for(let member of this._classMembers(node)) {
            if (is(member, any)) {
                if (member.isStatic) {
                    continue;
                }
                for(let variable of member.fields.variables) {
                    let element = variable.element as any;
                    let name = element.name;
                    if (seen.contains(name)) {
                        continue;
                    }
                    let getter = element.getter;
                    let setter = element.setter;
                    let found : boolean = this._checkSingleOverride(getter,baseType,variable.name,member,isSubclass);
                    if (!variable.isFinal && !variable.isConst && this._checkSingleOverride(setter,baseType,variable.name,member,isSubclass)) {
                        found = true;
                    }
                    if (found) {
                        seen.add(name);
                    }
                }
            }else if (is(member, any)) {
                if (member.isStatic) {
                    continue;
                }
                let method = resolutionMap.elementDeclaredByMethodDeclaration(member);
                if (seen.contains(method.name)) {
                    continue;
                }
                if (this._checkSingleOverride(method,baseType,member.name,member,isSubclass)) {
                    seen.add(method.name);
                }
            }else {
                /* TODO (AssertStatementImpl) : assert (member is ConstructorDeclaration); */;
            }
        }
    }
    _checkIndividualOverridesFromType(subType : any,baseType : any,errorLocation : any,seen : core.DartSet<string>,isSubclass : boolean) {
        var checkHelper : (e : any) => void = (e : any) : void =>  {
            if (e.isStatic) return;
            if (seen.contains(e.name)) return;
            if (this._checkSingleOverride(e,baseType,null,errorLocation,isSubclass)) {
                seen.add(e.name);
            }
        };
        subType.methods.forEach(checkHelper);
        subType.accessors.forEach(checkHelper);
    }
    _checkInterfacesOverrides(type : any,interfaces : core.DartIterable<any>,seen : core.DartSet<string>,_namedArguments? : {visited? : core.DartSet<any>,includeParents? : boolean,errorLocation? : any,classNode? : any}) : void {
        let {visited,includeParents,errorLocation,classNode} = Object.assign({
            "includeParents" : true}, _namedArguments );
        if (op(Op.EQUALS,visited,null)) {
            visited = new core.DartSet<any>();
        }else if (visited.contains(type)) {
            return;
        }else {
            visited.add(type);
        }
        for(let interfaceType of interfaces) {
            if (classNode != null) {
                this._checkIndividualOverridesFromClass(classNode,interfaceType,seen,false);
            }else {
                this._checkIndividualOverridesFromType(type,interfaceType,errorLocation,seen,false);
            }
        }
        for(let i : number = 0; i < type.mixins.length; i++){
            let loc = (errorLocation || op(Op.INDEX,this._withClause(classNode).mixinTypes,i));
            for(let interfaceType of interfaces) {
                this._checkIndividualOverridesFromType(op(Op.INDEX,type.mixins,i),interfaceType,loc,new core.DartSet.from(seen),false);
            }
        }
        if (includeParents) {
            let parent = type.superclass;
            if (parent.isObject) {
                return;
            }
            let loc = (errorLocation || this._extendsErrorLocation(classNode));
            this._checkInterfacesOverrides(parent,interfaces,seen,{
                visited : visited,includeParents : true,errorLocation : loc});
        }
    }
    _checkMixinApplicationOverrides(node : any,element : any) : void {
        let type = element.type;
        let parent = type.superclass;
        let mixins = type.mixins;
        for(let i : number = 0; i < mixins.length; i++){
            let seen = new core.DartSet<string>();
            let current = op(Op.INDEX,mixins,i);
            let errorLocation = op(Op.INDEX,this._withClause(node).mixinTypes,i);
            for(let j : number = i - 1; j >= 0; j--){
                this._checkIndividualOverridesFromType(current,op(Op.INDEX,mixins,j),errorLocation,seen,true);
            }
            this._checkIndividualOverridesFromType(current,parent,errorLocation,seen,true);
        }
    }
    _checkSingleOverride(element : any,type : any,node : any,errorLocation : any,isSubclass : boolean) : boolean {
        /* TODO (AssertStatementImpl) : assert (!element.isStatic); */;
        let subType : any = _elementType(element);
        let baseType : any = _getMemberType(type,element);
        if (op(Op.EQUALS,baseType,null)) return false;
        if (isSubclass && is(element, any)) {
            let field = _getMemberField(type,element);
            if (field != null && !field.isVirtual) {
                this._checker._recordMessage(errorLocation,StrongModeCode.INVALID_FIELD_OVERRIDE,new core.DartList.literal(element.enclosingElement.name,element.name,subType,type,baseType));
            }
        }
        if (!this.rules.isOverrideSubtypeOf(subType,baseType)) {
            let errorCode : any;
            let parent = ((t)=>(!!t)?t.parent:null)(errorLocation);
            if (is(errorLocation, any) || is(parent, any) && op(Op.EQUALS,parent.superclass,errorLocation)) {
                errorCode = StrongModeCode.INVALID_METHOD_OVERRIDE_FROM_BASE;
            }else if (is(parent, any)) {
                errorCode = StrongModeCode.INVALID_METHOD_OVERRIDE_FROM_MIXIN;
            }else {
                errorCode = StrongModeCode.INVALID_METHOD_OVERRIDE;
            }
            this._checker._recordMessage(errorLocation,errorCode,new core.DartList.literal(element.enclosingElement.name,element.name,subType,type,baseType));
        }
        let hasCovariant : boolean = element.parameters.any((p : any) =>  {
            return p.isCovariant;
        });
        let keepSearching : boolean = hasCovariant && isSubclass;
        return !keepSearching;
    }
    _checkSuperOverrides(node : any,element : any) : void {
        let seen = new core.DartSet<string>();
        let current = element.type;
        let visited = new core.DartSet<any>();
        do{
            visited.add(current);
            current.mixins.reversed.forEach((m : any) =>  {
                return this._checkIndividualOverridesFromClass(node,m,seen,true);
            });
            this._checkIndividualOverridesFromClass(node,current.superclass,seen,true);
            current = current.superclass;
        } while (!current.isObject && !visited.contains(current));
    }
    _classMembers(node : any) : core.DartIterable<any> {
        return is(node, any) ? node.members : new core.DartList.literal();
    }
    _withClause(node : any) : any {
        return is(node, any) ? node.withClause : (node as any).withClause;
    }
    _extendsErrorLocation(node : any) : any {
        return is(node, any) ? node.extendsClause : (node as any).superclass;
    }
}

export class properties {
}
