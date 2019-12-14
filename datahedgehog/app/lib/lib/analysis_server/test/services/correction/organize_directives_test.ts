/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/organize_directives_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OrganizeDirectivesTest);
    });
};
export namespace OrganizeDirectivesTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'OrganizeDirectivesTest';
    export type Interface = Omit<OrganizeDirectivesTest, Constructors>;
}
@DartClass
export class OrganizeDirectivesTest extends lib3.AbstractSingleUnitTest {
    testErrors : core.DartList<any>;

    test_keep_duplicateImports_withDifferentPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\' as async1;
            this._assertOrganize('import \'dart:async\' as async1;
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_remove_duplicateImports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\';
            this._assertOrganize('import \'dart:async\';
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_remove_duplicateImports_differentText_uri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\' as async;
            this._assertOrganize('import \'dart:async\' as async;
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_remove_duplicateImports_withSamePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\' as async;
            this._assertOrganize('import \'dart:async\' as async;
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_remove_unresolvedDirectives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/existing_part1.dart','part of lib;');
            this.addSource('/existing_part2.dart','part of lib;');
            await this._computeUnitAndErrors('library lib;
            this._assertOrganize('library lib;
                removeUnresolved : true});
        } )());
    }

    test_remove_unusedImports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('library lib;
            this._assertOrganize('library lib;
                removeUnused : true});
        } )());
    }

    test_remove_unusedImports2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\';
            this._assertOrganize('import \'dart:async\';
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_sort() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('library lib;
            this._assertOrganize('library lib;
        } )());
    }

    test_sort_hasComments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('// header
            this._assertOrganize('// header
        } )());
    }

    test_sort_imports_packageAndPath() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('library lib;
            this._assertOrganize('library lib;
        } )());
    }

    _assertOrganize(expectedCode : string,_namedArguments? : {removeUnresolved? : boolean,removeUnused? : boolean}) : void {
        let {removeUnresolved,removeUnused} = Object.assign({
            "removeUnresolved" : false,
            "removeUnused" : false}, _namedArguments );
        let organizer : any = new bare.createInstance(any,null,this.testCode,this.testUnit,this.testErrors,{
            removeUnresolved : removeUnresolved,removeUnused : removeUnused});
        let edits : core.DartList<any> = organizer.organize();
        let result : string = SourceEdit.applySequence(this.testCode,edits);
        expect(result,expectedCode);
    }
    _computeUnitAndErrors(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource(code);
            let result : any = await this.driver.getResult(this.testSource.fullName);
            this.testUnit = result.unit;
            this.testErrors = result.errors;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OrganizeDirectivesTest() {
    }
}

export class properties {
}