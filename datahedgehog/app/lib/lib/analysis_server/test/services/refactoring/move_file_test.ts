/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/move_file_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(MoveFileTest);
    });
};
export namespace MoveFileTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'MoveFileTest';
    export type Interface = Omit<MoveFileTest, Constructors>;
}
@DartClass
export class MoveFileTest extends lib3.RefactoringTest {
    refactoring : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    test_file_definingUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathA : string = '/project/000/1111/a.dart';
            let pathB : string = '/project/000/1111/b.dart';
            let pathC : string = '/project/000/1111/22/c.dart';
            let pathD : string = '/project/000/1111/333/d.dart';
            this.testFile = '/project/000/1111/test.dart';
            this.addSource('/absolute/uri.dart','');
            this.addSource(pathA,'part of lib;');
            this.addSource(pathB,"import 'test.dart';");
            this.addSource(pathC,'');
            this.addSource(pathD,'');
            this.addTestSource('library lib;\nimport \'dart:math\';\nimport \'22/c.dart\';\nexport \'333/d.dart\';\npart \'a.dart\';\npart \'/absolute/uri.dart\';\n');
            this._performAnalysis();
            this._createRefactoring('/project/000/1111/22/new_name.dart');
            await this._assertSuccessfulRefactoring();
            this.assertNoFileChange(pathA);
            this.assertFileChangeResult(pathB,"import '22/new_name.dart';");
            this.assertNoFileChange(pathC);
            this.assertFileChangeResult(this.testFile,'library lib;\nimport \'dart:math\';\nimport \'c.dart\';\nexport \'../333/d.dart\';\npart \'../a.dart\';\npart \'/absolute/uri.dart\';\n');
        } )());
    }

    test_file_importedLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathA : string = '/project/000/1111/a.dart';
            this.testFile = '/project/000/1111/sub/folder/test.dart';
            this.addSource(pathA,'import \'sub/folder/test.dart\';\n');
            this.addTestSource('');
            this._performAnalysis();
            this._createRefactoring('/project/000/new/folder/name/new_name.dart');
            await this._assertSuccessfulRefactoring();
            this.assertFileChangeResult(pathA,'import \'../new/folder/name/new_name.dart\';\n');
            this.assertNoFileChange(this.testFile);
        } )());
    }

    test_file_importedLibrary_down() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathA : string = '/project/000/1111/a.dart';
            this.testFile = '/project/000/1111/test.dart';
            this.addSource(pathA,'import \'test.dart\';\n');
            this.addTestSource('');
            this._performAnalysis();
            this._createRefactoring('/project/000/1111/22/new_name.dart');
            await this._assertSuccessfulRefactoring();
            this.assertFileChangeResult(pathA,'import \'22/new_name.dart\';\n');
            this.assertNoFileChange(this.testFile);
        } )());
    }

    test_file_importedLibrary_package() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/packages/my_pkg/lib/aaa/test.dart';
            this.provider.newFile(this.testFile,'');
            let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartMap.literal([
                ['my_pkg',new core.DartList.literal<any>(this.provider.getResource('/packages/my_pkg/lib'))]]);
            this.context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),new bare.createInstance(any,null,this.provider,packageMap),this.resourceResolver));
            let pathA : string = '/project/bin/a.dart';
            this.addSource(pathA,'import \'package:my_pkg/aaa/test.dart\';\n');
            this.addTestSource('',lib4.Uri.parse('package:my_pkg/aaa/test.dart'));
            this._performAnalysis();
            this._createRefactoring('/packages/my_pkg/lib/bbb/ccc/new_name.dart');
            await this._assertSuccessfulRefactoring();
            this.assertFileChangeResult(pathA,'import \'package:my_pkg/bbb/ccc/new_name.dart\';\n');
            this.assertNoFileChange(this.testFile);
        } )());
    }

    test_file_importedLibrary_up() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathA : string = '/project/000/1111/a.dart';
            this.testFile = '/project/000/1111/22/test.dart';
            this.addSource(pathA,'import \'22/test.dart\';\n');
            this.addTestSource('');
            this._performAnalysis();
            this._createRefactoring('/project/000/1111/new_name.dart');
            await this._assertSuccessfulRefactoring();
            this.assertFileChangeResult(pathA,'import \'new_name.dart\';\n');
            this.assertNoFileChange(this.testFile);
        } )());
    }

    test_file_sourcedUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathA : string = '/project/000/1111/a.dart';
            this.testFile = '/project/000/1111/22/test.dart';
            this.addSource(pathA,'library lib;\npart \'22/test.dart\';\n');
            this.addTestSource('part of lib;\n');
            this._performAnalysis();
            this._createRefactoring('/project/000/1111/22/new_name.dart');
            await this._assertSuccessfulRefactoring();
            this.assertFileChangeResult(pathA,'library lib;\npart \'22/new_name.dart\';\n');
            this.assertNoFileChange(this.testFile);
        } )());
    }

    test_file_sourcedUnit_multipleLibraries() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathA : string = '/project/000/1111/a.dart';
            let pathB : string = '/project/000/b.dart';
            this.testFile = '/project/000/1111/22/test.dart';
            this.addSource(pathA,'library lib;\npart \'22/test.dart\';\n');
            this.addSource(pathB,'library lib;\npart \'1111/22/test.dart\';\n');
            this.addTestSource('part of lib;\n');
            this._performAnalysis();
            this._createRefactoring('/project/000/1111/22/new_name.dart');
            await this._assertSuccessfulRefactoring();
            this.assertFileChangeResult(pathA,'library lib;\npart \'22/new_name.dart\';\n');
            this.assertFileChangeResult(pathB,'library lib;\npart \'1111/22/new_name.dart\';\n');
            this.assertNoFileChange(this.testFile);
        } )());
    }

    test_project() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pubspecPath : string = '/testName/pubspec.yaml';
            let appPath : string = '/testName/bin/myApp.dart';
            this.provider.newFile(pubspecPath,'name: testName\nversion: 0.0.1\ndescription: My pubspec file.\n');
            this.addSource('/testName/lib/myLib.dart','');
            this.addSource(appPath,'import \'package:testName/myLib.dart\';\nexport \'package:testName/myLib.dart\';\n');
            this.context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
                ['testName',new core.DartList.literal<any>(this.provider.getResource('/testName/lib'))]])),this.resourceResolver));
            this._performAnalysis();
            this.refactoring = new bare.createInstance(any,null,this.provider,this.searchEngine,this.context,null,'/testName');
            this.refactoring.newFile = '/newName';
            await this._assertSuccessfulRefactoring();
            this.assertFileChangeResult(pubspecPath,'name: newName\nversion: 0.0.1\ndescription: My pubspec file.\n');
            this.assertFileChangeResult(appPath,'import \'package:newName/myLib.dart\';\nexport \'package:newName/myLib.dart\';\n');
        } )());
    }

    _assertSuccessfulRefactoring() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertRefactoringConditionsOK();
            this.refactoringChange = await this.refactoring.createChange();
        } )());
    }

    _createRefactoring(newName : string) : void {
        this.refactoring = new bare.createInstance(any,null,this.provider,this.searchEngine,this.context,this.testSource,null);
        this.refactoring.newFile = newName;
    }
    _performAnalysis() : void {
        while (true){
            let result : any = this.context.performAnalysisTask();
            if (!result.hasMoreWork) {
                break;
            }
            for(let notice of result.changeNotices) {
                if (notice.source.fullName.startsWith('/project/')) {
                    this.index.indexUnit(notice.resolvedDartUnit);
                }
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MoveFileTest() {
    }
}

export class properties {
}
