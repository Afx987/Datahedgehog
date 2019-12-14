/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/incremental_resolver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ResolutionContext {
    export type Constructors = 'ResolutionContext';
    export type Interface = Omit<ResolutionContext, Constructors>;
}
@DartClass
export class ResolutionContext {
    enclosingUnit : any;

    enclosingClassDeclaration : any;

    enclosingClass : any;

    scope : any;

    constructor() {
    }
    @defaultConstructor
    ResolutionContext() {
    }
}

export namespace ResolutionContextBuilder {
    export type Constructors = 'ResolutionContextBuilder';
    export type Interface = Omit<ResolutionContextBuilder, Constructors>;
}
@DartClass
export class ResolutionContextBuilder {
    _enclosingUnit : any;

    _enclosingClassDeclaration : any;

    _enclosingClass : any;

    _scopeFor(node : any) : any {
        if (is(node, any)) {
            return this._scopeForAstNode(node);
        }
        let parent : any = node.parent;
        if (op(Op.EQUALS,parent,null)) {
            throw new bare.createInstance(any,null,"Cannot create scope: node is not part of a CompilationUnit");
        }
        return this._scopeForAstNode(parent);
    }
    _scopeForAstNode(node : any) : any {
        if (is(node, any)) {
            return this._scopeForCompilationUnit(node);
        }
        let parent : any = node.parent;
        if (op(Op.EQUALS,parent,null)) {
            throw new bare.createInstance(any,null,"Cannot create scope: node is not part of a CompilationUnit");
        }
        let scope : any = this._scopeForAstNode(parent);
        if (is(node, any)) {
            this._enclosingClassDeclaration = node;
            this._enclosingClass = node.element;
            if (op(Op.EQUALS,this._enclosingClass,null)) {
                throw new bare.createInstance(any,null,"Cannot build a scope for an unresolved class");
            }
            scope = new bare.createInstance(any,null,new bare.createInstance(any,null,scope,this._enclosingClass),this._enclosingClass);
        }else if (is(node, any)) {
            let element : any = node.element;
            if (op(Op.EQUALS,element,null)) {
                throw new bare.createInstance(any,null,"Cannot build a scope for an unresolved class type alias");
            }
            scope = new bare.createInstance(any,null,new bare.createInstance(any,null,scope,element),element);
        }else if (is(node, any)) {
            let element : any = node.element;
            if (op(Op.EQUALS,element,null)) {
                throw new bare.createInstance(any,null,"Cannot build a scope for an unresolved constructor");
            }
            let functionScope : any = new bare.createInstance(any,null,scope,element);
            functionScope.defineParameters();
            scope = functionScope;
        }else if (is(node, any)) {
            let element : any = node.element;
            if (op(Op.EQUALS,element,null)) {
                throw new bare.createInstance(any,null,"Cannot build a scope for an unresolved function");
            }
            let functionScope : any = new bare.createInstance(any,null,scope,element);
            functionScope.defineParameters();
            scope = functionScope;
        }else if (is(node, any)) {
            scope = new bare.createInstance(any,null,scope,node.element);
        }else if (is(node, any)) {
            let element : any = node.element;
            if (op(Op.EQUALS,element,null)) {
                throw new bare.createInstance(any,null,"Cannot build a scope for an unresolved method");
            }
            let functionScope : any = new bare.createInstance(any,null,scope,element);
            functionScope.defineParameters();
            scope = functionScope;
        }
        return scope;
    }
    _scopeForCompilationUnit(node : any) : any {
        this._enclosingUnit = node.element;
        if (op(Op.EQUALS,this._enclosingUnit,null)) {
            throw new bare.createInstance(any,null,"Cannot create scope: compilation unit is not resolved");
        }
        let libraryElement : any = this._enclosingUnit.library;
        if (op(Op.EQUALS,libraryElement,null)) {
            throw new bare.createInstance(any,null,"Cannot create scope: compilation unit is not part of a library");
        }
        return new bare.createInstance(any,null,libraryElement);
    }
    static contextFor(node : any) : ResolutionContext {
        if (op(Op.EQUALS,node,null)) {
            throw new bare.createInstance(any,null,"Cannot create context: node is null");
        }
        let builder : ResolutionContextBuilder = new ResolutionContextBuilder();
        let scope : any = builder._scopeFor(node);
        let context : ResolutionContext = new ResolutionContext();
        context.scope = scope;
        context.enclosingUnit = builder._enclosingUnit;
        context.enclosingClassDeclaration = builder._enclosingClassDeclaration;
        context.enclosingClass = builder._enclosingClass;
        return context;
    }
    constructor() {
    }
    @defaultConstructor
    ResolutionContextBuilder() {
    }
}

export class properties {
}
