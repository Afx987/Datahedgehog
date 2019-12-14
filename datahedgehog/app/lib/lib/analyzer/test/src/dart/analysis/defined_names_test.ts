/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/analysis/defined_names_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../generated/parser_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DefinedNamesTest);
    });
};
export namespace DefinedNamesTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'DefinedNamesTest';
    export type Interface = Omit<DefinedNamesTest, Constructors>;
}
@DartClass
export class DefinedNamesTest extends lib3.ParserTestCase {
    test_classMemberNames() {
        let names : any = this._computeDefinedNames('class A {\n  int a, b;\n  A();\n  A.c();\n  d() {}\n  get e => null;\n  set f(_) {}\n}\nclass B {\n  g() {}\n}\n');
        expect(names.topLevelNames,unorderedEquals(new core.DartList.literal('A','B')));
        expect(names.classMemberNames,unorderedEquals(new core.DartList.literal('a','b','d','e','f','g')));
    }
    test_topLevelNames() {
        let names : any = this._computeDefinedNames('class A {}\nclass B = Object with A;\ntypedef C {}\nD() {}\nget E => null;\nset F(_) {}\nvar G, H;\n');
        expect(names.topLevelNames,unorderedEquals(new core.DartList.literal('A','B','C','D','E','F','G','H')));
        expect(names.classMemberNames,isEmpty);
    }
    _computeDefinedNames(code : string) : any {
        let unit : any = this.parseCompilationUnit2(code);
        return computeDefinedNames(unit);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefinedNamesTest() {
    }
}

export class properties {
}
