/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/base/libraries_reader_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LibrariesReaderTest);
    });
};
export namespace LibrariesReaderTest {
    export type Constructors = 'LibrariesReaderTest';
    export type Interface = Omit<LibrariesReaderTest, Constructors>;
}
@DartClass
export class LibrariesReaderTest {
    test_categoriesClient() {
        let info = this._computeSingleInfo('const LibraryInfo("", categories: "Client")');
        expect(info.categories,new core.DartList.literal(Category.client));
        expect(info.categoriesString,'Client');
    }
    test_categoriesDefault() {
        let info = this._computeSingleInfo('const LibraryInfo("")');
        expect(info.categories,isEmpty);
        expect(info.categoriesString,'');
    }
    test_categoriesMultiple() {
        let info = this._computeSingleInfo('const LibraryInfo("", categories: "Client,Server")');
        expect(info.categories,unorderedEquals(new core.DartList.literal(Category.client,Category.server)));
        expect(info.categoriesString,'Client,Server');
    }
    test_categoriesNone() {
        let info = this._computeSingleInfo('const LibraryInfo("", categories: "")');
        expect(info.categories,isEmpty);
        expect(info.categoriesString,'');
    }
    test_categoriesSingle() {
        let info = this._computeSingleInfo('const LibraryInfo("", categories: "Client")');
        expect(info.categories,new core.DartList.literal(Category.client));
        expect(info.categoriesString,'Client');
    }
    test_complex() {
        let info = this._computeSingleInfo('const LibraryInfo(\n    "async/async.dart",\n    categories: "Client,Server",\n    maturity: Maturity.STABLE,\n    dart2jsPatchPath: "_internal/js_runtime/lib/async_patch.dart"))\n',{
            additionalDeclarations : 'class Maturity {\n  final int level;\n  final String name;\n  final String description;\n\n  const Maturity(this.level, this.name, this.description);\n\n  static const Maturity STABLE = const Maturity(4, "Stable", "Stable description");\n}\n'});
        expect(info.path,'async/async.dart');
        expect(info.categories,unorderedEquals(new core.DartList.literal(Category.client,Category.server)));
        expect(info.maturity.name,'Stable');
        expect(info.dart2jsPatchPath,'_internal/js_runtime/lib/async_patch.dart');
    }
    test_dart2jsPatchPathDefault() {
        let info = this._computeSingleInfo('const LibraryInfo("")');
        expect(info.dart2jsPatchPath,null);
    }
    test_dart2jsPatchPathString() {
        let info = this._computeSingleInfo('const LibraryInfo(\n    "",\n    dart2jsPatchPath: "_internal/js_runtime/lib/async_patch.dart")\n');
        expect(info.dart2jsPatchPath,'_internal/js_runtime/lib/async_patch.dart');
    }
    test_dart2jsPathDefault() {
        let info = this._computeSingleInfo('const LibraryInfo("")');
        expect(info.dart2jsPath,null);
    }
    test_dart2jsPathString() {
        let info = this._computeSingleInfo('const LibraryInfo("", dart2jsPath: "html/dart2js/html_dart2js.dart"');
        expect(info.dart2jsPath,'html/dart2js/html_dart2js.dart');
    }
    test_documentedDefault() {
        let info = this._computeSingleInfo('const LibraryInfo("")');
        expect(info.documented,true);
    }
    test_documentedFalse() {
        let info = this._computeSingleInfo('const LibraryInfo("", documented: false)');
        expect(info.documented,false);
    }
    test_documentedTrue() {
        let info = this._computeSingleInfo('const LibraryInfo("", documented: true)');
        expect(info.documented,true);
    }
    test_implementationDefault() {
        let info = this._computeSingleInfo('const LibraryInfo("")');
        expect(info.implementation,false);
    }
    test_implementationFalse() {
        let info = this._computeSingleInfo('const LibraryInfo("", implementation: false)');
        expect(info.implementation,false);
    }
    test_implementationTrue() {
        let info = this._computeSingleInfo('const LibraryInfo("", implementation: true)');
        expect(info.implementation,true);
    }
    test_maturityDefault() {
        let info = this._computeSingleInfo('const LibraryInfo("")');
        expect(info.maturity,Maturity.UNSPECIFIED);
    }
    test_maturityStable() {
        let info = this._computeSingleInfo('const LibraryInfo("", maturity: Maturity.FOO)',{
            additionalDeclarations : 'class Maturity {\n  final int level;\n  final String name;\n  final String description;\n\n  const Maturity(this.level, this.name, this.description);\n\n  static const Maturity FOO = const Maturity(10, "Foo", "Foo description");\n}\n'});
        expect(info.maturity.level,10);
        expect(info.maturity.name,'Foo');
        expect(info.maturity.description,'Foo description');
    }
    test_multipleLibraries() {
        let info = this._computeLibraries('const Map<String, LibraryInfo> libraries = const {\n  "async": const LibraryInfo("async/async.dart"),\n  "core": const LibraryInfo("core/core.dart")\n}\n');
        expect(info.keys,unorderedEquals(new core.DartList.literal('async','core')));
        expect(info.get('async').path,'async/async.dart');
        expect(info.get('core').path,'core/core.dart');
    }
    test_path() {
        let info = this._computeSingleInfo('const LibraryInfo("core/core.dart")');
        expect(info.path,'core/core.dart');
    }
    test_platformsDefault() {
        let info = this._computeSingleInfo('const LibraryInfo("")');
        expect(info.platforms,op(Op.BITOR,DART2JS_PLATFORM,VM_PLATFORM));
    }
    test_platformsMultiple() {
        let info = this._computeSingleInfo('const LibraryInfo("", platforms: VM_PLATFORM | DART2JS_PLATFORM)',{
            additionalDeclarations : 'const int DART2JS_PLATFORM = 1;\nconst int VM_PLATFORM = 2;\n'});
        expect(info.platforms,1 | 2);
    }
    test_platformsSingle() {
        let info = this._computeSingleInfo('const LibraryInfo("", platforms: VM_PLATFORM)',{
            additionalDeclarations : 'const int VM_PLATFORM = 2;\n'});
        expect(info.platforms,2);
    }
    _computeLibraries(text : string,_namedArguments? : {additionalDeclarations? : string}) : core.DartMap<string,any> {
        let {additionalDeclarations} = Object.assign({
            "additionalDeclarations" : ''}, _namedArguments );
        let fullText = `${text}\n${additionalDeclarations}`;
        let scanner = new _Scanner(fullText);
        let token = scanner.tokenize();
        let parser = new bare.createInstance(any,null,null,AnalysisErrorListener.NULL_LISTENER);
        let compilationUnit = parser.parseCompilationUnit(token);
        let unlinkedUnit = serializeAstUnlinked(compilationUnit);
        return readLibraries(unlinkedUnit);
    }
    _computeSingleInfo(text : string,_namedArguments? : {additionalDeclarations? : string}) : any {
        let {additionalDeclarations} = Object.assign({
            "additionalDeclarations" : ''}, _namedArguments );
        let libraries = this._computeLibraries(`const Map<String, LibraryInfo> libraries = const { "x": ${text} };`,{
            additionalDeclarations : additionalDeclarations});
        return libraries.get('x');
    }
    constructor() {
    }
    @defaultConstructor
    LibrariesReaderTest() {
    }
}

export namespace _Scanner {
    export type Constructors = '_Scanner';
    export type Interface = Omit<_Scanner, Constructors>;
}
@DartClass
export class _Scanner extends any {
    constructor(contents : string) {
    }
    @defaultConstructor
    _Scanner(contents : string) {
        super.create(new bare.createInstance(any,null,contents));
        preserveComments = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
        fail(`Unexpected error(${errorCode}, ${offset}, ${arguments})`);
    }
}

export class properties {
}
