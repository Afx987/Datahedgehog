/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/dependency_walker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Node {
    export type Constructors = 'Node';
    export type Interface<NodeType> = Omit<Node<NodeType>, Constructors>;
}
@DartClass
export class Node<NodeType> {
    _index : number;

    _lowLink : number;

    _dependencies : core.DartList<NodeType>;

    get dependencies() : core.DartList<NodeType> {
        return this._dependencies = ( this._dependencies ) || ( this.computeDependencies() );
    }
    @AbstractProperty
    get isEvaluated() : boolean{ throw 'abstract'}
    @Abstract
    computeDependencies() : core.DartList<NodeType>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Node() {
        this._index = 0;
        this._lowLink = 0;
    }
}

export namespace DependencyWalker {
    export type Constructors = 'DependencyWalker';
    export type Interface<NodeType extends Node<NodeType>> = Omit<DependencyWalker<NodeType extends Node<NodeType>>, Constructors>;
}
@DartClass
export class DependencyWalker<NodeType extends Node<NodeType>> {
    @Abstract
    evaluate(v : NodeType) : void{ throw 'abstract'}
    @Abstract
    evaluateScc(scc : core.DartList<NodeType>) : void{ throw 'abstract'}
    walk(startingPoint : NodeType) : void {
        let index : number = 1;
        let stack : core.DartList<NodeType> = new core.DartList.literal<NodeType>();
        var strongConnect : (node : NodeType) => void = (node : NodeType) : void =>  {
            let hasTrivialCycle : boolean = false;
            node._index = node._lowLink = index++;
            stack.add(node);
            for(let dependency of node.dependencies) {
                if (dependency.isEvaluated) {
                    continue;
                }
                if (core.identical(node,dependency)) {
                    hasTrivialCycle = true;
                }else if (dependency._index == 0) {
                    strongConnect(dependency);
                    if (dependency._lowLink < node._lowLink) {
                        node._lowLink = dependency._lowLink;
                    }
                }else {
                    if (dependency._index < node._lowLink) {
                        node._lowLink = dependency._index;
                    }
                }
            }
            if (node._lowLink == node._index) {
                if (core.identical(stack.last,node)) {
                    stack.removeLast();
                    if (hasTrivialCycle) {
                        this.evaluateScc(new core.DartList.literal<NodeType>(node));
                    }else {
                        this.evaluate(node);
                    }
                }else {
                    let scc : core.DartList<NodeType> = new core.DartList.literal<NodeType>();
                    while (true){
                        let otherNode : NodeType = stack.removeLast();
                        scc.add(otherNode);
                        if (core.identical(otherNode,node)) {
                            break;
                        }
                    }
                    this.evaluateScc(scc);
                }
            }
        };
        strongConnect(startingPoint);
    }
    constructor() {
    }
    @defaultConstructor
    DependencyWalker() {
    }
}

export class properties {
}
