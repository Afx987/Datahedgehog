/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/async_dependency_walker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AsyncDependencyWalker {
    export type Constructors = 'AsyncDependencyWalker';
    export type Interface<NodeType extends Node<NodeType>> = Omit<AsyncDependencyWalker<NodeType extends Node<NodeType>>, Constructors>;
}
@DartClass
export class AsyncDependencyWalker<NodeType extends Node<NodeType>> {
    @Abstract
    evaluate(v : NodeType) : async.Future<core.Null>{ throw 'abstract'}
    @Abstract
    evaluateScc(scc : core.DartList<NodeType>) : async.Future<core.Null>{ throw 'abstract'}
    walk(startingPoint : NodeType) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let index : number = 1;
            let stack : core.DartList<NodeType> = new core.DartList.literal<NodeType>();
            var strongConnect : (node : NodeType) => async.Future<any> = (node : NodeType) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                let hasTrivialCycle : boolean = false;
                node._index = node._lowLink = index++;
                stack.add(node);
                let dependencies = node._dependencies = ( node._dependencies ) || ( await node.computeDependencies() );
                for(let dependency of dependencies) {
                    if (dependency._isEvaluated) {
                        continue;
                    }
                    if (core.identical(node,dependency)) {
                        hasTrivialCycle = true;
                    }else if (dependency._index == 0) {
                        await strongConnect(dependency);
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
                        node._isEvaluated = true;
                        if (hasTrivialCycle) {
                            await this.evaluateScc(new core.DartList.literal<NodeType>(node));
                        }else {
                            await this.evaluate(node);
                        }
                    }else {
                        let scc : core.DartList<NodeType> = new core.DartList.literal<NodeType>();
                        while (true){
                            let otherNode : NodeType = stack.removeLast();
                            scc.add(otherNode);
                            otherNode._isEvaluated = true;
                            if (core.identical(otherNode,node)) {
                                break;
                            }
                        }
                        await this.evaluateScc(scc);
                    }
                }
            })());
            await strongConnect(startingPoint);
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    AsyncDependencyWalker() {
    }
}

export namespace Node {
    export type Constructors = 'Node';
    export type Interface<NodeType> = Omit<Node<NodeType>, Constructors>;
}
@DartClass
export class Node<NodeType> {
    _index : number;

    _lowLink : number;

    _dependencies : core.DartList<NodeType>;

    _isEvaluated : boolean;

    @Abstract
    computeDependencies() : async.Future<core.DartList<NodeType>>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Node() {
        this._index = 0;
        this._lowLink = 0;
        this._isEvaluated = false;
    }
}

export class properties {
}
