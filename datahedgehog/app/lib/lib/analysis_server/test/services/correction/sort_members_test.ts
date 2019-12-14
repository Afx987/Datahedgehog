/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/sort_members_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SortMembersTest);
    });
};
export namespace SortMembersTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'SortMembersTest';
    export type Interface = Omit<SortMembersTest, Constructors>;
}
@DartClass
export class SortMembersTest extends lib3.AbstractSingleUnitTest {
    test_classMembers_accessor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_accessor_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_external_constructorMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class Chart {
            this._assertSort('class Chart {
        } )());
    }

    test_classMembers_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_field_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_method_emptyLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_method_ignoreCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_method_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_classMembers_mix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {
            this._assertSort('class A {
        } )());
    }

    test_directives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('library lib;
            this._assertSort('library lib;
        } )());
    }

    test_directives_docComment_hasLibrary_lines() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('/// Library documentation comment A.
            this._assertSort('/// Library documentation comment A.
        } )());
    }

    test_directives_docComment_hasLibrary_stars() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('/**
            this._assertSort('/**
        } )());
    }

    test_directives_docComment_noLibrary_lines() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('/// Library documentation comment A
            this._assertSort('/// aaa1
        } )());
    }

    test_directives_docComment_noLibrary_stars() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('/**
            this._assertSort('/**
        } )());
    }

    test_directives_imports_packageAndPath() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('library lib;
            this._assertSort('library lib;
        } )());
    }

    test_unitMembers_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class C {}
            this._assertSort('class A {}
        } )());
    }

    test_unitMembers_class_ignoreCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class C {}
            this._assertSort('class a {}
        } )());
    }

    test_unitMembers_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class M {}
            this._assertSort('class A = Object with M;
        } )());
    }

    test_unitMembers_directive_hasDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('library lib;
            this._assertSort('library lib;
        } )());
    }

    test_unitMembers_directive_noDirective_hasComment_line() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('// Some comment
            this._assertSort('// Some comment
        } )());
    }

    test_unitMembers_directive_noDirective_noComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('
            this._assertSort('
        } )());
    }

    test_unitMembers_enum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('enum C {x, y}
            this._assertSort('enum A {x, y}
        } )());
    }

    test_unitMembers_enumClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('enum C {x, y}
            this._assertSort('class A {}
        } )());
    }

    test_unitMembers_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('fc() {}
            this._assertSort('fa() {}
        } )());
    }

    test_unitMembers_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('typedef FC();
            this._assertSort('typedef FA();
        } )());
    }

    test_unitMembers_importsAndDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('import \'dart:a\';
            this._assertSort('import \'dart:a\';
        } )());
    }

    test_unitMembers_mainFirst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class C {}
            this._assertSort('main() {}
        } )());
    }

    test_unitMembers_mix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('_mmm() {}
            this._assertSort('var mmm;
        } )());
    }

    test_unitMembers_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('int c;
            this._assertSort('int a;
        } )());
    }

    test_unitMembers_topLevelVariable_withConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('int c;
            this._assertSort('const A = 1;
        } )());
    }

    _assertSort(expectedCode : string) : void {
        let sorter : any = new bare.createInstance(any,null,this.testCode,this.testUnit);
        let edits : core.DartList<any> = sorter.sort();
        let result : string = SourceEdit.applySequence(this.testCode,edits);
        expect(result,expectedCode);
    }
    _parseTestUnit(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource(code);
            let result : any = await this.driver.parseFile(this.testSource.fullName);
            this.testUnit = result.unit;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SortMembersTest() {
    }
}

export class properties {
}