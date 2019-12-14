/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/referenced_names.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var computeReferencedNames : (unit : any) => core.DartSet<string> = (unit : any) : core.DartSet<string> =>  {
    let computer : _ReferencedNamesComputer = new _ReferencedNamesComputer();
    unit.accept(computer);
    return computer.names;
};
export namespace _LocalNameScope {
    export type Constructors = '_LocalNameScope';
    export type Interface = Omit<_LocalNameScope, Constructors>;
}
@DartClass
export class _LocalNameScope {
    enclosing : _LocalNameScope;

    names : core.DartSet<string>;

    constructor(enclosing : _LocalNameScope) {
    }
    @defaultConstructor
    _LocalNameScope(enclosing : _LocalNameScope) {
        this.enclosing = enclosing;
    }
    @namedFactory
    static $forBlock(enclosing : _LocalNameScope,node : any) : _LocalNameScope {
        let scope : _LocalNameScope = new _LocalNameScope(enclosing);
        for(let statement of node.statements) {
            if (is(statement, any)) {
                scope.add(statement.functionDeclaration.name);
            }else if (is(statement, any)) {
                scope.addVariableNames(statement.variables);
            }
        }
        return scope;
    }
    static forBlock : new(enclosing : _LocalNameScope,node : any) => _LocalNameScope;

    @namedFactory
    static $forClass(enclosing : _LocalNameScope,node : any) : _LocalNameScope {
        let scope : _LocalNameScope = new _LocalNameScope(enclosing);
        scope.addTypeParameters(node.typeParameters);
        for(let member of node.members) {
            if (is(member, any)) {
                scope.addVariableNames(member.fields);
            }else if (is(member, any)) {
                scope.add(member.name);
            }
        }
        return scope;
    }
    static forClass : new(enclosing : _LocalNameScope,node : any) => _LocalNameScope;

    @namedFactory
    static $forClassTypeAlias(enclosing : _LocalNameScope,node : any) : _LocalNameScope {
        let scope : _LocalNameScope = new _LocalNameScope(enclosing);
        scope.addTypeParameters(node.typeParameters);
        return scope;
    }
    static forClassTypeAlias : new(enclosing : _LocalNameScope,node : any) => _LocalNameScope;

    @namedFactory
    static $forConstructor(enclosing : _LocalNameScope,node : any) : _LocalNameScope {
        let scope : _LocalNameScope = new _LocalNameScope(enclosing);
        scope.addFormalParameters(node.parameters);
        return scope;
    }
    static forConstructor : new(enclosing : _LocalNameScope,node : any) => _LocalNameScope;

    @namedFactory
    static $forFunction(enclosing : _LocalNameScope,node : any) : _LocalNameScope {
        let scope : _LocalNameScope = new _LocalNameScope(enclosing);
        scope.addTypeParameters(node.functionExpression.typeParameters);
        scope.addFormalParameters(node.functionExpression.parameters);
        return scope;
    }
    static forFunction : new(enclosing : _LocalNameScope,node : any) => _LocalNameScope;

    @namedFactory
    static $forFunctionTypeAlias(enclosing : _LocalNameScope,node : any) : _LocalNameScope {
        let scope : _LocalNameScope = new _LocalNameScope(enclosing);
        scope.addTypeParameters(node.typeParameters);
        return scope;
    }
    static forFunctionTypeAlias : new(enclosing : _LocalNameScope,node : any) => _LocalNameScope;

    @namedFactory
    static $forMethod(enclosing : _LocalNameScope,node : any) : _LocalNameScope {
        let scope : _LocalNameScope = new _LocalNameScope(enclosing);
        scope.addTypeParameters(node.typeParameters);
        scope.addFormalParameters(node.parameters);
        return scope;
    }
    static forMethod : new(enclosing : _LocalNameScope,node : any) => _LocalNameScope;

    @namedFactory
    static $forUnit(node : any) : _LocalNameScope {
        let scope : _LocalNameScope = new _LocalNameScope(null);
        for(let declaration of node.declarations) {
            if (is(declaration, any)) {
                scope.add(declaration.name);
            }else if (is(declaration, any)) {
                scope.addVariableNames(declaration.variables);
            }
        }
        return scope;
    }
    static forUnit : new(node : any) => _LocalNameScope;

    add(identifier : any) : void {
        if (identifier != null) {
            this.names = ( this.names ) || ( new core.DartSet<string>() );
            this.names.add(identifier.name);
        }
    }
    addFormalParameters(parameterList : any) : void {
        if (parameterList != null) {
            parameterList.parameters.map((p : any) =>  {
                return is(p, any) ? p.identifier : null;
            }).forEach(this.add.bind(this));
        }
    }
    addTypeParameters(typeParameterList : any) : void {
        if (typeParameterList != null) {
            typeParameterList.typeParameters.map((p : any) =>  {
                return p.name;
            }).forEach(this.add.bind(this));
        }
    }
    addVariableNames(variableList : any) : void {
        for(let variable of variableList.variables) {
            this.add(variable.name);
        }
    }
    contains(name : string) : boolean {
        if (this.names != null && this.names.contains(name)) {
            return true;
        }
        if (this.enclosing != null) {
            return this.enclosing.contains(name);
        }
        return false;
    }
}

export namespace _ReferencedNamesComputer {
    export type Constructors = '_ReferencedNamesComputer';
    export type Interface = Omit<_ReferencedNamesComputer, Constructors>;
}
@DartClass
export class _ReferencedNamesComputer extends any {
    names : core.DartSet<string>;

    importPrefixNames : core.DartSet<string>;

    localScope : _LocalNameScope;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) {
        let outerScope : _LocalNameScope = this.localScope;
        try {
            this.localScope = new _LocalNameScope.forBlock(this.localScope,node);
            super.visitBlock(node);
        } finally {
            this.localScope = outerScope;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) {
        let outerScope : _LocalNameScope = this.localScope;
        try {
            this.localScope = new _LocalNameScope.forClass(this.localScope,node);
            super.visitClassDeclaration(node);
        } finally {
            this.localScope = outerScope;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) {
        let outerScope : _LocalNameScope = this.localScope;
        try {
            this.localScope = new _LocalNameScope.forClassTypeAlias(this.localScope,node);
            super.visitClassTypeAlias(node);
        } finally {
            this.localScope = outerScope;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) {
        this.localScope = new _LocalNameScope.forUnit(node);
        super.visitCompilationUnit(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) {
        let outerScope : _LocalNameScope = this.localScope;
        try {
            this.localScope = new _LocalNameScope.forConstructor(this.localScope,node);
            super.visitConstructorDeclaration(node);
        } finally {
            this.localScope = outerScope;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) {
        if (isNot(node.parent, any)) {
            super.visitConstructorName(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) {
        let outerScope : _LocalNameScope = this.localScope;
        try {
            this.localScope = new _LocalNameScope.forFunction(this.localScope,node);
            super.visitFunctionDeclaration(node);
        } finally {
            this.localScope = outerScope;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAlias(node : any) {
        let outerScope : _LocalNameScope = this.localScope;
        try {
            this.localScope = new _LocalNameScope.forFunctionTypeAlias(this.localScope,node);
            super.visitFunctionTypeAlias(node);
        } finally {
            this.localScope = outerScope;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) {
        if (node.prefix != null) {
            this.importPrefixNames.add(node.prefix.name);
        }
        super.visitImportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) {
        let outerScope : _LocalNameScope = this.localScope;
        try {
            this.localScope = new _LocalNameScope.forMethod(this.localScope,node);
            super.visitMethodDeclaration(node);
        } finally {
            this.localScope = outerScope;
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
        let parent : any = node.parent;
        if (is(parent, any) && op(Op.EQUALS,parent.returnType,node)) {
            return;
        }
        let name : string = node.name;
        if (node.isQualified || _ReferencedNamesComputer._isNameExpressionLabel(parent)) {
        }else {
            if (this.localScope.contains(name)) {
                return;
            }
            if (this.importPrefixNames.contains(name)) {
                return;
            }
        }
        this.names.add(name);
    }
    static _isNameExpressionLabel(parent : any) : boolean {
        if (is(parent, any)) {
            let parent2 : any = ((t)=>(!!t)?t.parent:null)(parent);
            return is(parent2, any) && op(Op.EQUALS,parent2.name,parent);
        }
        return false;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ReferencedNamesComputer() {
        this.names = new core.DartSet<string>();
        this.importPrefixNames = new core.DartSet<string>();
        this.localScope = new _LocalNameScope(null);
    }
}

export class properties {
}
