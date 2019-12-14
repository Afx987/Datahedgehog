/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/constant/utilities.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var getConstructorImpl : (constructor : any) => any = (constructor : any) : any =>  {
    while (is(constructor, any)){
        constructor = (constructor as any).baseElement;
    }
    if (is(constructor, any)) {
        constructor = (constructor as any).actualElement;
    }
    return constructor;
};
export namespace ConstantAstCloner {
    export type Constructors = 'ConstantAstCloner';
    export type Interface = Omit<ConstantAstCloner, Constructors>;
}
@DartClass
export class ConstantAstCloner extends any {
    constructor() {
    }
    @defaultConstructor
    ConstantAstCloner() {
        super.DartObject(true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : any {
        let annotation : any = super.visitAnnotation(node);
        annotation.element = node.element;
        return annotation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : any {
        let name : any = super.visitConstructorName(node);
        name.staticElement = node.staticElement;
        return name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : any {
        let expression : any = super.visitFunctionExpression(node);
        expression.element = node.element;
        return expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : any {
        let expression : any = super.visitInstanceCreationExpression(node);
        expression.staticElement = node.staticElement;
        return expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : any {
        let invocation : any = super.visitRedirectingConstructorInvocation(node);
        invocation.staticElement = node.staticElement;
        return invocation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : any {
        let identifier : any = super.visitSimpleIdentifier(node);
        identifier.staticElement = node.staticElement;
        return identifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : any {
        let invocation : any = super.visitSuperConstructorInvocation(node);
        invocation.staticElement = node.staticElement;
        return invocation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : any {
        let typeName : any = super.visitTypeName(node);
        typeName.type = node.type;
        return typeName;
    }
}

export namespace ConstantExpressionsDependenciesFinder {
    export type Constructors = 'ConstantExpressionsDependenciesFinder';
    export type Interface = Omit<ConstantExpressionsDependenciesFinder, Constructors>;
}
@DartClass
export class ConstantExpressionsDependenciesFinder extends any {
    dependencies : core.DartHashSet<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : void {
        if (node.isConst) {
            this._find(node);
        }else {
            super.visitInstanceCreationExpression(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : any) : void {
        if (node.constKeyword != null) {
            this._find(node);
        }else {
            super.visitListLiteral(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : any) : void {
        if (node.constKeyword != null) {
            this._find(node);
        }else {
            super.visitMapLiteral(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchCase(node : any) : void {
        this._find(node.expression);
        node.statements.accept(this);
    }
    _find(node : any) : void {
        if (node != null) {
            let referenceFinder : ReferenceFinder = new ReferenceFinder(this.dependencies.add.bind(this.dependencies));
            node.accept(referenceFinder);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantExpressionsDependenciesFinder() {
        this.dependencies = new core.DartHashSet<any>();
    }
}

export namespace ConstantFinder {
    export type Constructors = 'ConstantFinder';
    export type Interface = Omit<ConstantFinder, Constructors>;
}
@DartClass
export class ConstantFinder extends any {
    constantsToCompute : core.DartList<any>;

    treatFinalInstanceVarAsConst : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        super.visitAnnotation(node);
        let elementAnnotation : any = node.elementAnnotation;
        if (op(Op.EQUALS,elementAnnotation,null)) {
            /* TODO (AssertStatementImpl) : assert (node.parent is PartOfDirective || node.parent is EnumConstantDeclaration); */;
        }else {
            this.constantsToCompute.add(elementAnnotation);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) : core.DartObject {
        let prevTreatFinalInstanceVarAsConst : boolean = this.treatFinalInstanceVarAsConst;
        if (resolutionMap.elementDeclaredByClassDeclaration(node).constructors.any((e : any) =>  {
            return e.isConst;
        })) {
            this.treatFinalInstanceVarAsConst = true;
        }
        try {
            return super.visitClassDeclaration(node);
        } finally {
            this.treatFinalInstanceVarAsConst = prevTreatFinalInstanceVarAsConst;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        super.visitConstructorDeclaration(node);
        if (node.constKeyword != null) {
            let element : any = node.element;
            if (element != null) {
                this.constantsToCompute.add(element);
                this.constantsToCompute.addAll(element.parameters);
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDefaultFormalParameter(node : any) : core.DartObject {
        super.visitDefaultFormalParameter(node);
        let defaultValue : any = node.defaultValue;
        if (defaultValue != null && node.element != null) {
            this.constantsToCompute.add(resolutionMap.elementDeclaredByFormalParameter(node));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        super.visitVariableDeclaration(node);
        let initializer : any = node.initializer;
        let element : any = node.element;
        if (initializer != null && (node.isConst || this.treatFinalInstanceVarAsConst && is(element, any) && node.isFinal && !element.isStatic)) {
            if (element != null) {
                this.constantsToCompute.add(element);
            }
        }
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantFinder() {
        this.constantsToCompute = new core.DartList.literal<any>();
        this.treatFinalInstanceVarAsConst = false;
    }
}

export namespace ReferenceFinder {
    export type Constructors = 'ReferenceFinder';
    export type Interface = Omit<ReferenceFinder, Constructors>;
}
@DartClass
export class ReferenceFinder extends any {
    _callback : (dependency : any) => void;

    constructor(_callback : (dependency : any) => void) {
    }
    @defaultConstructor
    ReferenceFinder(_callback : (dependency : any) => void) {
        this._callback = _callback;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        if (node.isConst) {
            let constructor : any = getConstructorImpl(node.staticElement);
            if (constructor != null) {
                this._callback(constructor);
            }
        }
        return super.visitInstanceCreationExpression(node);
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
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        super.visitRedirectingConstructorInvocation(node);
        let target : any = getConstructorImpl(node.staticElement);
        if (target != null) {
            this._callback(target);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        let staticElement : any = node.staticElement;
        let element : any = is(staticElement, any) ? staticElement.variable : staticElement;
        if (is(element, any) && element.isConst) {
            this._callback(element);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        super.visitSuperConstructorInvocation(node);
        let constructor : any = getConstructorImpl(node.staticElement);
        if (constructor != null) {
            this._callback(constructor);
        }
        return null;
    }
}

export class properties {
}
