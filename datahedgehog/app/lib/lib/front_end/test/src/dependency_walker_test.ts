/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/dependency_walker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DependencyWalkerTest);
    });
};
export namespace DependencyWalkerTest {
    export type Constructors = 'DependencyWalkerTest';
    export type Interface = Omit<DependencyWalkerTest, Constructors>;
}
@DartClass
export class DependencyWalkerTest {
    nodes;

    checkGraph(graph : core.DartMap<string,core.DartList<string>>,startingNodeName : string,expectedEvaluations : core.DartList<core.DartList<string>>,expectedSccFlags : core.DartList<boolean>) : void {
        this.makeGraph(graph);
        let walker = this.walk(startingNodeName);
        expect(walker._evaluations,expectedEvaluations.map((x : any) =>  {
            return x.toSet();
        }));
        expect(walker._sccFlags,expectedSccFlags);
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
    test_complex_graph() : void {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal('b','c')],
            ['b',new core.DartList.literal('c','d')],
            ['c',new core.DartList.literal()],
            ['d',new core.DartList.literal('c','e')],
            ['e',new core.DartList.literal('b','f')],
            ['f',new core.DartList.literal('c','d')]]),'a',new core.DartList.literal(new core.DartList.literal('c'),new core.DartList.literal('b','d','e','f'),new core.DartList.literal('a')),new core.DartList.literal(false,true,false));
    }
    test_diamond() : void {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal('b','c')],
            ['b',new core.DartList.literal('d')],
            ['c',new core.DartList.literal('d')],
            ['d',new core.DartList.literal()]]),'a',new core.DartList.literal(new core.DartList.literal('d'),new core.DartList.literal('b'),new core.DartList.literal('c'),new core.DartList.literal('a')),new core.DartList.literal(false,false,false,false));
    }
    test_singleNode() : void {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal()]]),'a',new core.DartList.literal(new core.DartList.literal('a')),new core.DartList.literal(false));
    }
    test_singleNodeWithTrivialCycle() : void {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal('a')]]),'a',new core.DartList.literal(new core.DartList.literal('a')),new core.DartList.literal(true));
    }
    test_threeNodesWithCircularDependency() : void {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal('b')],
            ['b',new core.DartList.literal('c')],
            ['c',new core.DartList.literal('a')]]),'a',new core.DartList.literal(new core.DartList.literal('a','b','c')),new core.DartList.literal(true));
    }
    test_twoBacklinksEarlierFirst() {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal('b')],
            ['b',new core.DartList.literal('c')],
            ['c',new core.DartList.literal('d')],
            ['d',new core.DartList.literal('b','c')]]),'a',new core.DartList.literal(new core.DartList.literal('b','c','d'),new core.DartList.literal('a')),new core.DartList.literal(true,false));
    }
    test_twoBacklinksLaterFirst() {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal('b')],
            ['b',new core.DartList.literal('c')],
            ['c',new core.DartList.literal('d')],
            ['d',new core.DartList.literal('c','b')]]),'a',new core.DartList.literal(new core.DartList.literal('b','c','d'),new core.DartList.literal('a')),new core.DartList.literal(true,false));
    }
    test_twoNodesWithCircularDependency() : void {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal('b')],
            ['b',new core.DartList.literal('a')]]),'a',new core.DartList.literal(new core.DartList.literal('a','b')),new core.DartList.literal(true));
    }
    test_twoNodesWithSimpleDependency() : void {
        this.checkGraph(new core.DartMap.literal([
            ['a',new core.DartList.literal('b')],
            ['b',new core.DartList.literal()]]),'a',new core.DartList.literal(new core.DartList.literal('b'),new core.DartList.literal('a')),new core.DartList.literal(false,false));
    }
    walk(startingNodeName : string) : TestWalker {
        return ((_) : TestWalker =>  {
            {
                walk(this.getNode(startingNodeName));
                return _;
            }
        })(new TestWalker());
    }
    constructor() {
    }
    @defaultConstructor
    DependencyWalkerTest() {
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

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEvaluated : boolean;

    _computeDependenciesCalled : boolean;

    _dependencies;

    constructor(_name : string) {
    }
    @defaultConstructor
    TestNode(_name : string) {
        this.isEvaluated = false;
        this._computeDependenciesCalled = false;
        this._dependencies = new core.DartList.literal<TestNode>();
        this._name = _name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<TestNode> {
        expect(this._computeDependenciesCalled,false);
        this._computeDependenciesCalled = true;
        return this._dependencies;
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
    evaluate(v : TestNode) : void {
        v.isEvaluated = true;
        this._evaluations.add(new core.DartList.literal(v._name).toSet());
        this._sccFlags.add(false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<TestNode>) : void {
        for(let v of scc) {
            v.isEvaluated = true;
        }
        let sccNames = scc.map((node : any) =>  {
            return node._name;
        }).toSet();
        expect(sccNames.length,scc.length);
        this._evaluations.add(sccNames);
        this._sccFlags.add(true);
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
