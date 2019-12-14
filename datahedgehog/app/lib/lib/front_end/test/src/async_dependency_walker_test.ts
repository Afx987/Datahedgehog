/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/async_dependency_walker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AsyncDependencyWalkerTest);
    });
};
export namespace AsyncDependencyWalkerTest {
    export type Constructors = 'AsyncDependencyWalkerTest';
    export type Interface = Omit<AsyncDependencyWalkerTest, Constructors>;
}
@DartClass
export class AsyncDependencyWalkerTest {
    nodes;

    checkGraph(graph : core.DartMap<string,core.DartList<string>>,startingNodeName : string,expectedEvaluations : core.DartList<core.DartList<string>>,expectedSccFlags : core.DartList<boolean>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.makeGraph(graph);
            let walker = await this.walk(startingNodeName);
            expect(walker._evaluations,expectedEvaluations.map((x : any) =>  {
                return x.toSet();
            }));
            expect(walker._sccFlags,expectedSccFlags);
        } )());
    }

    getNode(name : string) : TestNode {
        return this.nodes.putIfAbsent(name,() =>  {
            return new TestNode(name);
        });
    }
    makeGraph(graph : core.DartMap<string,core.DartList<string>>) : void {
        graph.forEach((name : any,deps : any) =>  {
            let node = this.getNode(name);
            for(let dep of deps) {
                node._dependencies.add(this.getNode(dep));
            }
        });
    }
    test_complex_graph() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal('b','c')],
                ['b',new core.DartList.literal('c','d')],
                ['c',new core.DartList.literal()],
                ['d',new core.DartList.literal('c','e')],
                ['e',new core.DartList.literal('b','f')],
                ['f',new core.DartList.literal('c','d')]]),'a',new core.DartList.literal(new core.DartList.literal('c'),new core.DartList.literal('b','d','e','f'),new core.DartList.literal('a')),new core.DartList.literal(false,true,false));
        } )());
    }

    test_diamond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal('b','c')],
                ['b',new core.DartList.literal('d')],
                ['c',new core.DartList.literal('d')],
                ['d',new core.DartList.literal()]]),'a',new core.DartList.literal(new core.DartList.literal('d'),new core.DartList.literal('b'),new core.DartList.literal('c'),new core.DartList.literal('a')),new core.DartList.literal(false,false,false,false));
        } )());
    }

    test_singleNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal()]]),'a',new core.DartList.literal(new core.DartList.literal('a')),new core.DartList.literal(false));
        } )());
    }

    test_singleNodeWithTrivialCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal('a')]]),'a',new core.DartList.literal(new core.DartList.literal('a')),new core.DartList.literal(true));
        } )());
    }

    test_threeNodesWithCircularDependency() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal('b')],
                ['b',new core.DartList.literal('c')],
                ['c',new core.DartList.literal('a')]]),'a',new core.DartList.literal(new core.DartList.literal('a','b','c')),new core.DartList.literal(true));
        } )());
    }

    test_twoBacklinksEarlierFirst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal('b')],
                ['b',new core.DartList.literal('c')],
                ['c',new core.DartList.literal('d')],
                ['d',new core.DartList.literal('b','c')]]),'a',new core.DartList.literal(new core.DartList.literal('b','c','d'),new core.DartList.literal('a')),new core.DartList.literal(true,false));
        } )());
    }

    test_twoBacklinksLaterFirst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal('b')],
                ['b',new core.DartList.literal('c')],
                ['c',new core.DartList.literal('d')],
                ['d',new core.DartList.literal('c','b')]]),'a',new core.DartList.literal(new core.DartList.literal('b','c','d'),new core.DartList.literal('a')),new core.DartList.literal(true,false));
        } )());
    }

    test_twoNodesWithCircularDependency() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal('b')],
                ['b',new core.DartList.literal('a')]]),'a',new core.DartList.literal(new core.DartList.literal('a','b')),new core.DartList.literal(true));
        } )());
    }

    test_twoNodesWithSimpleDependency() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkGraph(new core.DartMap.literal([
                ['a',new core.DartList.literal('b')],
                ['b',new core.DartList.literal()]]),'a',new core.DartList.literal(new core.DartList.literal('b'),new core.DartList.literal('a')),new core.DartList.literal(false,false));
        } )());
    }

    walk(startingNodeName : string) : async.Future<TestWalker> { 
        return new async.Future.fromPromise(( async () =>  {
            let testWalker = new TestWalker();
            await testWalker.walk(this.getNode(startingNodeName));
            return testWalker;
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    AsyncDependencyWalkerTest() {
        this.nodes = new core.DartMap.literal([
        ]);
    }
}

export namespace TestNode {
    export type Constructors = 'TestNode';
    export type Interface = Omit<TestNode, Constructors>;
}
@DartClass
export class TestNode extends any {
    _name : string;

    _computeDependenciesCalled : boolean;

    _dependencies;

    constructor(_name : string) {
    }
    @defaultConstructor
    TestNode(_name : string) {
        this._computeDependenciesCalled = false;
        this._dependencies = new core.DartList.literal<TestNode>();
        this._name = _name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : async.Future<core.DartList<TestNode>> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._computeDependenciesCalled,false);
            this._computeDependenciesCalled = true;
            return this._dependencies;
        } )());
    }

}

export namespace TestWalker {
    export type Constructors = 'TestWalker';
    export type Interface = Omit<TestWalker, Constructors>;
}
@DartClass
export class TestWalker extends any {
    _evaluations;

    _sccFlags;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(v : TestNode) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this._evaluations.add(new core.DartList.literal(v._name).toSet());
            this._sccFlags.add(false);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<TestNode>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let sccNames = scc.map((node : any) =>  {
                return node._name;
            }).toSet();
            expect(sccNames.length,scc.length);
            this._evaluations.add(sccNames);
            this._sccFlags.add(true);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TestWalker() {
        this._evaluations = new core.DartList.literal<core.DartSet<string>>();
        this._sccFlags = new core.DartList.literal<boolean>();
    }
}

export class properties {
}
