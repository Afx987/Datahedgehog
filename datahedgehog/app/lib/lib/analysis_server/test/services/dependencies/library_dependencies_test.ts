/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/dependencies/library_dependencies_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LibraryDependenciesTest);
    });
};
export namespace LibraryDependenciesTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'LibraryDependenciesTest';
    export type Interface = Omit<LibraryDependenciesTest, Constructors>;
}
@DartClass
export class LibraryDependenciesTest extends lib3.AbstractContextTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    test_LibraryDependencies() {
        this.addSource('/lib1.dart','import "lib2.dart";');
        this.addSource('/lib2.dart','import "lib1.dart";');
        this.addSource('/lib3.dart','import "lib2.dart";');
        this.addSource('/lib4.dart','import "lib5.dart";');
        this.provider.newFile('/lib5.dart','import "lib6.dart";');
        this.provider.newFile('/lib6.dart','');
        this._performAnalysis();
        let libs = new bare.createInstance(any,null,new core.DartList.literal(this.context)).collectLibraryDependencies();
        expect(libs,contains('/lib1.dart'));
        expect(libs,contains('/lib2.dart'));
        expect(libs,contains('/lib3.dart'));
        expect(libs,contains('/lib4.dart'));
        expect(libs,contains('/lib5.dart'));
        expect(libs,contains('/lib6.dart'));
    }
    test_PackageMaps() {
    }
    _performAnalysis() : void {
        while (this.context.performAnalysisTask().hasMoreWork)/* TODO (EmptyStatementImpl) : ; */;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryDependenciesTest() {
    }
}

export class properties {
}
