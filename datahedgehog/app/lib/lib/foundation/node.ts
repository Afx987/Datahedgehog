/** Library asset:datahedgehog_monitor/lib/lib/foundation/node.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AbstractNode {
    export type Constructors = 'AbstractNode';
    export type Interface = Omit<AbstractNode, Constructors>;
}
@DartClass
export class AbstractNode {
    get depth() : number {
        return this._depth;
    }
    _depth : number;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    redepthChild(child : AbstractNode) : void {
        /* TODO (AssertStatementImpl) : assert (child.owner == owner); */;
        if (child._depth <= this._depth) {
            child._depth = this._depth + 1;
            child.redepthChildren();
        }
    }
    redepthChildren() : void {
    }
    get owner() : core.DartObject {
        return this._owner;
    }
    _owner : core.DartObject;

    get attached() : boolean {
        return this._owner != null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : core.DartObject) : void {
        /* TODO (AssertStatementImpl) : assert (owner != null); */;
        /* TODO (AssertStatementImpl) : assert (_owner == null); */;
        this._owner = owner;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : void {
        /* TODO (AssertStatementImpl) : assert (_owner != null); */;
        this._owner = null;
        /* TODO (AssertStatementImpl) : assert (parent == null || attached == parent.attached); */;
    }
    get parent() : AbstractNode {
        return this._parent;
    }
    _parent : AbstractNode;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    adoptChild(child : AbstractNode) : void {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child._parent == null); */;
        /* TODO (AssertStatementImpl) : assert (() {AbstractNode node = this; while (node.parent != null) node = node.parent; assert (node != child); return true;}()); */;
        child._parent = this;
        if (this.attached) child.attach(this._owner);
        this.redepthChild(child);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dropChild(child : AbstractNode) : void {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child._parent == this); */;
        /* TODO (AssertStatementImpl) : assert (child.attached == attached); */;
        child._parent = null;
        if (this.attached) child.detach();
    }
    constructor() {
    }
    @defaultConstructor
    AbstractNode() {
        this._depth = 0;
    }
}

export class properties {
}
