/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/dart/ast/visitor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/parser_test";
import * as lib4 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(BreadthFirstVisitorTest);
    });
};
export namespace BreadthFirstVisitorTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'BreadthFirstVisitorTest';
    export type Interface = Omit<BreadthFirstVisitorTest, Constructors>;
}
@DartClass
export class BreadthFirstVisitorTest extends lib3.ParserTestCase {
    test_it() : void {
        let source : string = 'class A {\n  bool get g => true;\n}\nclass B {\n  int f() {\n    num q() {\n      return 3;\n    }\n  return q() + 4;\n  }\n}\nA f(var p) {\n  if ((p as A).g) {\n    return p;\n  } else {\n    return null;\n  }\n}';
        let unit : any = this.parseCompilationUnit(source);
        let nodes : core.DartList<any> = new core.DartList<any>();
        let visitor : any = new _BreadthFirstVisitorTestHelper(nodes);
        visitor.visitAllNodes(unit);
        expect(nodes,hasLength(59));
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },CompilationUnit,nodes[0]);
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ClassDeclaration,nodes[2]);
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FunctionDeclaration,nodes[3]);
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FunctionDeclarationStatement,nodes[27]);
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },IntegerLiteral,nodes[58]);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BreadthFirstVisitorTest() {
    }
}

export namespace _BreadthFirstVisitorTestHelper {
    export type Constructors = '_BreadthFirstVisitorTestHelper';
    export type Interface = Omit<_BreadthFirstVisitorTestHelper, Constructors>;
}
@DartClass
export class _BreadthFirstVisitorTestHelper extends any {
    nodes : core.DartList<any>;

    constructor(nodes : core.DartList<any>) {
    }
    @defaultConstructor
    _BreadthFirstVisitorTestHelper(nodes : core.DartList<any>) {
        super.DartObject();
        this.nodes = nodes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        this.nodes.add(node);
        return super.visitNode(node);
    }
}

export class properties {
}
