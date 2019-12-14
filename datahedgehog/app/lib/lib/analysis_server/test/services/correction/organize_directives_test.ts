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
            await this._computeUnitAndErrors('import \'dart:async\' as async1;\nimport \'dart:async\' as async2;\n\nmain() {\n  async1.Future f;\n  async2.Stream s;\n}');
            this._assertOrganize('import \'dart:async\' as async1;\nimport \'dart:async\' as async2;\n\nmain() {\n  async1.Future f;\n  async2.Stream s;\n}',{
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_remove_duplicateImports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\';\nimport \'dart:async\';\n\nmain() {\n  Future f;\n}');
            this._assertOrganize('import \'dart:async\';\n\nmain() {\n  Future f;\n}',{
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_remove_duplicateImports_differentText_uri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\' as async;\nimport "dart:async" as async;\n\nmain() {\n  async.Future f;\n}');
            this._assertOrganize('import \'dart:async\' as async;\n\nmain() {\n  async.Future f;\n}',{
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_remove_duplicateImports_withSamePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\' as async;\nimport \'dart:async\' as async;\n\nmain() {\n  async.Future f;\n}');
            this._assertOrganize('import \'dart:async\' as async;\n\nmain() {\n  async.Future f;\n}',{
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_remove_unresolvedDirectives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/existing_part1.dart','part of lib;');
            this.addSource('/existing_part2.dart','part of lib;');
            await this._computeUnitAndErrors('library lib;\n\nimport \'dart:async\';\nimport \'dart:noSuchImportSdkLibrary\';\nimport \'dart:math\';\nimport \'package:noSuchImportPackage/andLib.dart\';\n\nexport \'dart:noSuchExportSdkLibrary\';\nexport \'dart:async\';\nexport \'package:noSuchExportPackage/andLib.dart\';\nexport \'dart:math\';\n\npart \'existing_part1.dart\';\npart \'no_such_part.dart\';\npart \'existing_part2.dart\';\n\nmain() {\n}\n');
            this._assertOrganize('library lib;\n\nimport \'dart:async\';\nimport \'dart:math\';\n\nexport \'dart:async\';\nexport \'dart:math\';\n\npart \'existing_part1.dart\';\npart \'existing_part2.dart\';\n\nmain() {\n}\n',{
                removeUnresolved : true});
        } )());
    }

    test_remove_unusedImports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('library lib;\n\nimport \'dart:async\';\nimport \'dart:math\';\nimport \'dart:convert\';\nimport \'dart:collection\';\n\nmain() {\n  print(PI);\n  new HashMap();\n}\n');
            this._assertOrganize('library lib;\n\nimport \'dart:collection\';\nimport \'dart:math\';\n\nmain() {\n  print(PI);\n  new HashMap();\n}\n',{
                removeUnused : true});
        } )());
    }

    test_remove_unusedImports2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('import \'dart:async\';\nimport \'dart:math\';\n\nclass A {}\n\nmain() {\n  Future f;\n}');
            this._assertOrganize('import \'dart:async\';\n\nclass A {}\n\nmain() {\n  Future f;\n}',{
                removeUnresolved : true,removeUnused : true});
        } )());
    }

    test_sort() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('library lib;\n\nexport \'dart:bbb\';\nimport \'dart:bbb\';\nexport \'package:bbb/bbb.dart\';\nexport \'http://bbb.com\';\nimport \'bbb/bbb.dart\';\nexport \'http://aaa.com\';\nimport \'http://bbb.com\';\nexport \'dart:aaa\';\nexport \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\nexport \'aaa/aaa.dart\';\nexport \'bbb/bbb.dart\';\nimport \'dart:aaa\';\nimport \'package:aaa/aaa.dart\';\nimport \'aaa/aaa.dart\';\nimport \'http://aaa.com\';\npart \'bbb/bbb.dart\';\npart \'aaa/aaa.dart\';\n\nmain() {\n}\n');
            this._assertOrganize('library lib;\n\nimport \'dart:aaa\';\nimport \'dart:bbb\';\n\nimport \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\n\nimport \'http://aaa.com\';\nimport \'http://bbb.com\';\n\nimport \'aaa/aaa.dart\';\nimport \'bbb/bbb.dart\';\n\nexport \'dart:aaa\';\nexport \'dart:bbb\';\n\nexport \'package:aaa/aaa.dart\';\nexport \'package:bbb/bbb.dart\';\n\nexport \'http://aaa.com\';\nexport \'http://bbb.com\';\n\nexport \'aaa/aaa.dart\';\nexport \'bbb/bbb.dart\';\n\npart \'aaa/aaa.dart\';\npart \'bbb/bbb.dart\';\n\nmain() {\n}\n');
        } )());
    }

    test_sort_hasComments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('// header\nlibrary lib;\n\nimport \'c.dart\';// c\nimport \'a.dart\';// aa\nimport \'b.dart\';// bbb\n\n/** doc */\nmain() {\n}\n');
            this._assertOrganize('// header\nlibrary lib;\n\nimport \'a.dart\';\nimport \'b.dart\';\nimport \'c.dart\';\n// c\n// aa\n// bbb\n\n/** doc */\nmain() {\n}\n');
        } )());
    }

    test_sort_imports_packageAndPath() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._computeUnitAndErrors('library lib;\n\nimport \'package:product.ui.api.bbb/manager1.dart\';\nimport \'package:product.ui.api/entity2.dart\';\nimport \'package:product.ui/entity.dart\';\nimport \'package:product.ui.api.aaa/manager2.dart\';\nimport \'package:product.ui.api/entity1.dart\';\nimport \'package:product2.client/entity.dart\';\n');
            this._assertOrganize('library lib;\n\nimport \'package:product.ui/entity.dart\';\nimport \'package:product.ui.api/entity1.dart\';\nimport \'package:product.ui.api/entity2.dart\';\nimport \'package:product.ui.api.aaa/manager2.dart\';\nimport \'package:product.ui.api.bbb/manager1.dart\';\nimport \'package:product2.client/entity.dart\';\n');
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
