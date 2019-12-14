/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/util_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(UtilTest);
    });
};
export namespace UtilTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'UtilTest';
    export type Interface = Omit<UtilTest, Constructors>;
}
@DartClass
export class UtilTest extends lib3.AbstractSingleUnitTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    test_addLibraryImports_dart_hasImports_between() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\';\nimport \'dart:math\';\n');
            let newLibrary : any = this._getDartSource('dart:collection');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary),'import \'dart:async\';\nimport \'dart:collection\';\nimport \'dart:math\';\n');
        } )());
    }

    test_addLibraryImports_dart_hasImports_first() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:collection\';\nimport \'dart:math\';\n');
            let newLibrary : any = this._getDartSource('dart:async');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary),'import \'dart:async\';\nimport \'dart:collection\';\nimport \'dart:math\';\n');
        } )());
    }

    test_addLibraryImports_dart_hasImports_last() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\';\nimport \'dart:collection\';\n');
            let newLibrary : any = this._getDartSource('dart:math');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary),'import \'dart:async\';\nimport \'dart:collection\';\nimport \'dart:math\';\n');
        } )());
    }

    test_addLibraryImports_dart_hasImports_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:collection\';\nimport \'dart:math\';\n');
            let newLibrary1 : any = this._getDartSource('dart:async');
            let newLibrary2 : any = this._getDartSource('dart:html');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary1,newLibrary2),'import \'dart:async\';\nimport \'dart:collection\';\nimport \'dart:html\';\nimport \'dart:math\';\n');
        } )());
    }

    test_addLibraryImports_dart_hasImports_multiple_first() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:html\';\nimport \'dart:math\';\n');
            let newLibrary1 : any = this._getDartSource('dart:async');
            let newLibrary2 : any = this._getDartSource('dart:collection');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary1,newLibrary2),'import \'dart:async\';\nimport \'dart:collection\';\nimport \'dart:html\';\nimport \'dart:math\';\n');
        } )());
    }

    test_addLibraryImports_dart_hasImports_multiple_last() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\';\nimport \'dart:collection\';\n');
            let newLibrary1 : any = this._getDartSource('dart:html');
            let newLibrary2 : any = this._getDartSource('dart:math');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary1,newLibrary2),'import \'dart:async\';\nimport \'dart:collection\';\nimport \'dart:html\';\nimport \'dart:math\';\n');
        } )());
    }

    test_addLibraryImports_dart_hasLibraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('library test;\n\nclass A {}\n');
            let newLibrary1 : any = this._getDartSource('dart:math');
            let newLibrary2 : any = this._getDartSource('dart:async');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary1,newLibrary2),'library test;\n\nimport \'dart:async\';\nimport \'dart:math\';\n\nclass A {}\n');
        } )());
    }

    test_addLibraryImports_dart_noDirectives_hasComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/// Comment.\n\nclass A {}\n');
            let newLibrary1 : any = this._getDartSource('dart:math');
            let newLibrary2 : any = this._getDartSource('dart:async');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary1,newLibrary2),'/// Comment.\n\nimport \'dart:async\';\nimport \'dart:math\';\n\nclass A {}\n');
        } )());
    }

    test_addLibraryImports_dart_noDirectives_hasShebang() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('#!/bin/dart\n\nclass A {}\n');
            let newLibrary1 : any = this._getDartSource('dart:math');
            let newLibrary2 : any = this._getDartSource('dart:async');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary1,newLibrary2),'#!/bin/dart\n\nimport \'dart:async\';\nimport \'dart:math\';\n\nclass A {}\n');
        } )());
    }

    test_addLibraryImports_dart_noDirectives_noShebang() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {}\n');
            let newLibrary1 : any = this._getDartSource('dart:math');
            let newLibrary2 : any = this._getDartSource('dart:async');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary1,newLibrary2),'import \'dart:async\';\nimport \'dart:math\';\n\nclass A {}\n');
        } )());
    }

    test_addLibraryImports_package_hasDart_hasPackages_insertAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\';\n\nimport \'package:aaa/aaa.dart\';\n');
            let newLibrary : any = this._getSource('/lib/bbb.dart','package:bbb/bbb.dart');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary),'import \'dart:async\';\n\nimport \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\n');
        } )());
    }

    test_addLibraryImports_package_hasDart_hasPackages_insertBefore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\';\n\nimport \'package:bbb/bbb.dart\';\n');
            let newLibrary : any = this._getSource('/lib/aaa.dart','package:aaa/aaa.dart');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary),'import \'dart:async\';\n\nimport \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\n');
        } )());
    }

    test_addLibraryImports_package_hasImports_between() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'package:aaa/aaa.dart\';\nimport \'package:ddd/ddd.dart\';\n');
            let newLibrary1 : any = this._getSource('/lib/bbb.dart','package:bbb/bbb.dart');
            let newLibrary2 : any = this._getSource('/lib/ccc.dart','package:ccc/ccc.dart');
            this._assertAddLibraryImport(new core.DartList.literal<any>(newLibrary1,newLibrary2),'import \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\nimport \'package:ccc/ccc.dart\';\nimport \'package:ddd/ddd.dart\';\n');
        } )());
    }

    _assertAddLibraryImport(newLibraries : core.DartList<any>,expectedCode : string) : void {
        let change : any = new bare.createInstance(any,null,'');
        addLibraryImports(change,this.testLibraryElement,newLibraries.toSet());
        let testEdit : any = change.getFileEdit(this.testFile);
        expect(testEdit,isNotNull);
        let resultCode : string = SourceEdit.applySequence(this.testCode,testEdit.edits);
        expect(resultCode,expectedCode);
    }
    _getDartSource(uri : string) : any {
        let path : string = removeStart(uri,'dart:');
        return new _SourceMock(`/sdk/lib/${path}.dart`,lib4.Uri.parse(uri));
    }
    _getSource(path : string,uri : string) : any {
        return new _SourceMock(path,lib4.Uri.parse(uri));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UtilTest() {
    }
}

export namespace _SourceMock {
    export type Constructors = '_SourceMock';
    export type Interface = Omit<_SourceMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceMock implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fullName : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib4.Uri;

    constructor(fullName : string,uri : lib4.Uri) {
    }
    @defaultConstructor
    _SourceMock(fullName : string,uri : lib4.Uri) {
        this.fullName = fullName;
        this.uri = uri;
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export class properties {
}
