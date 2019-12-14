/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/all_the_rest_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./resolver_test_case";
import * as lib6 from "@dart2ts.packages/path/lib/path";
import * as lib7 from "@dart2ts.packages/source_span/lib/src/file";
import * as lib8 from "@dart2ts.packages/source_span/lib/src/span";
import * as lib9 from "./parser_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ContentCacheTest);
        defineReflectiveTests(CustomUriResolverTest);
        defineReflectiveTests(DartUriResolverTest);
        defineReflectiveTests(DirectoryBasedDartSdkTest);
        defineReflectiveTests(DirectoryBasedSourceContainerTest);
        defineReflectiveTests(ElementLocatorTest);
        defineReflectiveTests(EnumMemberBuilderTest);
        defineReflectiveTests(ErrorReporterTest);
        defineReflectiveTests(ErrorSeverityTest);
        defineReflectiveTests(ExitDetectorTest);
        defineReflectiveTests(ExitDetectorTest2);
        defineReflectiveTests(FileBasedSourceTest);
        defineReflectiveTests(ResolveRelativeUriTest);
        defineReflectiveTests(SDKLibrariesReaderTest);
        defineReflectiveTests(UriKindTest);
    });
};
export namespace ContentCacheTest {
    export type Constructors = 'ContentCacheTest';
    export type Interface = Omit<ContentCacheTest, Constructors>;
}
@DartClass
export class ContentCacheTest {
    test_setContents() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = new lib3.TestSource();
            let cache : any = new bare.createInstance(any,null);
            expect(cache.getContents(source),isNull);
            expect(cache.getModificationStamp(source),isNull);
            let contents : string = "library lib;";
            expect(cache.setContents(source,contents),isNull);
            expect(cache.getContents(source),contents);
            expect(cache.getModificationStamp(source),isNotNull);
            expect(cache.setContents(source,contents),contents);
            expect(cache.setContents(source,null),contents);
            expect(cache.getContents(source),isNull);
            expect(cache.getModificationStamp(source),isNull);
            expect(cache.setContents(source,null),isNull);
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    ContentCacheTest() {
    }
}

export namespace CustomUriResolverTest {
    export type Constructors = 'CustomUriResolverTest';
    export type Interface = Omit<CustomUriResolverTest, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class CustomUriResolverTest {
    test_creation() : void {
        expect(new bare.createInstance(any,null,new core.DartMap.literal([
        ])),isNotNull);
    }
    test_resolve_unknown_uri() : void {
        let resolver : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['custom:library','/path/to/library.dart']]));
        let result : any = resolver.resolveAbsolute(lib4.Uri.parse("custom:non_library"));
        expect(result,isNull);
    }
    test_resolve_uri() : void {
        let filePath : string = FileUtilities2.createFile("/path/to/library.dart").getAbsolutePath();
        let resolver : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['custom:library',filePath]]));
        let result : any = resolver.resolveAbsolute(lib4.Uri.parse("custom:library"));
        expect(result,isNotNull);
        expect(result.fullName,filePath);
    }
    constructor() {
    }
    @defaultConstructor
    CustomUriResolverTest() {
    }
}

export namespace DirectoryBasedDartSdkTest {
    export type Constructors = 'DirectoryBasedDartSdkTest';
    export type Interface = Omit<DirectoryBasedDartSdkTest, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class DirectoryBasedDartSdkTest {
    fail_getDocFileFor() : void {
        let sdk : any = this._createDartSdk();
        let docFile : any = sdk.getDocFileFor("html");
        expect(docFile,isNotNull);
    }
    test_analysisOptions_afterContextCreation() : void {
        let sdk : any = this._createDartSdk();
        sdk.context;
        expect(() =>  {
            sdk.analysisOptions = new bare.createInstance(any,null);
        },throwsStateError);
    }
    test_analysisOptions_beforeContextCreation() : void {
        let sdk : any = this._createDartSdk();
        sdk.analysisOptions = new bare.createInstance(any,null);
        sdk.context;
        expect(() =>  {
            sdk.context.analysisOptions = new bare.createInstance(any,null);
        },throwsStateError);
    }
    test_creation() : void {
        let sdk : any = this._createDartSdk();
        expect(sdk,isNotNull);
    }
    test_fromFile_invalid() : void {
        let sdk : any = this._createDartSdk();
        expect(sdk.fromFileUri(new bare.createInstance(any,null,"/not/in/the/sdk.dart").toURI()),isNull);
    }
    test_fromFile_library() : void {
        let sdk : any = this._createDartSdk();
        let source : any = sdk.fromFileUri(new bare.createInstance(any,null,new bare.createInstance(any,null,sdk.libraryDirectory,"core"),"core.dart").toURI());
        expect(source,isNotNull);
        expect(source.isInSystemLibrary,isTrue);
        expect(source.uri.toString(),"dart:core");
    }
    test_fromFile_library_firstExact() : void {
        let sdk : any = this._createDartSdk();
        let dirHtml : any = new bare.createInstance(any,null,sdk.libraryDirectory,"html");
        let dirDartium : any = new bare.createInstance(any,null,dirHtml,"dartium");
        let file : any = new bare.createInstance(any,null,dirDartium,"html_dartium.dart");
        expect(file.isFile(),isTrue);
        let source : any = sdk.fromFileUri(file.toURI());
        expect(source,isNotNull);
        expect(source.isInSystemLibrary,isTrue);
        expect(source.uri.toString(),"dart:html");
    }
    test_fromFile_library_html_common_dart2js() : void {
        let sdk : any = this._createDartSdk();
        let dirHtml : any = new bare.createInstance(any,null,sdk.libraryDirectory,"html");
        let dirCommon : any = new bare.createInstance(any,null,dirHtml,"html_common");
        let file : any = new bare.createInstance(any,null,dirCommon,"html_common_dart2js.dart");
        expect(file.isFile(),isTrue);
        let source : any = sdk.fromFileUri(file.toURI());
        expect(source,isNotNull);
        expect(source.isInSystemLibrary,isTrue);
        expect(source.uri.toString(),"dart:html_common/html_common_dart2js.dart");
    }
    test_fromFile_part() : void {
        let sdk : any = this._createDartSdk();
        let source : any = sdk.fromFileUri(new bare.createInstance(any,null,new bare.createInstance(any,null,sdk.libraryDirectory,"core"),"num.dart").toURI());
        expect(source,isNotNull);
        expect(source.isInSystemLibrary,isTrue);
        expect(source.uri.toString(),"dart:core/num.dart");
    }
    test_getDart2JsExecutable() : void {
        let sdk : any = this._createDartSdk();
        let executable : any = sdk.dart2JsExecutable;
        expect(executable,isNotNull);
        expect(executable.exists(),isTrue);
        expect(executable.isExecutable(),isTrue);
    }
    test_getDirectory() : void {
        let sdk : any = this._createDartSdk();
        let directory : any = sdk.directory;
        expect(directory,isNotNull);
        expect(directory.exists(),isTrue);
    }
    test_getDocDirectory() : void {
        let sdk : any = this._createDartSdk();
        let directory : any = sdk.docDirectory;
        expect(directory,isNotNull);
    }
    test_getLibraryDirectory() : void {
        let sdk : any = this._createDartSdk();
        let directory : any = sdk.libraryDirectory;
        expect(directory,isNotNull);
        expect(directory.exists(),isTrue);
    }
    test_getPubExecutable() : void {
        let sdk : any = this._createDartSdk();
        let executable : any = sdk.pubExecutable;
        expect(executable,isNotNull);
        expect(executable.exists(),isTrue);
        expect(executable.isExecutable(),isTrue);
    }
    test_getSdkVersion() : void {
        let sdk : any = this._createDartSdk();
        let version : string = sdk.sdkVersion;
        expect(version,isNotNull);
        expect(new core.DartString(version).length > 0,isTrue);
    }
    test_getVmExecutable() : void {
        let sdk : any = this._createDartSdk();
        let executable : any = sdk.vmExecutable;
        expect(executable,isNotNull);
        expect(executable.exists(),isTrue);
        expect(executable.isExecutable(),isTrue);
    }
    test_useSummary_afterContextCreation() : void {
        let sdk : any = this._createDartSdk();
        sdk.context;
        expect(() =>  {
            sdk.useSummary = true;
        },throwsStateError);
    }
    test_useSummary_beforeContextCreation() : void {
        let sdk : any = this._createDartSdk();
        sdk.useSummary = true;
        sdk.context;
    }
    _createDartSdk() : any {
        let sdkDirectory : any = DirectoryBasedDartSdk.defaultSdkDirectory;
        expect(sdkDirectory,isNotNull,{
            reason : "No SDK configured; set the property 'com.google.dart.sdk' on the command line"});
        return new bare.createInstance(any,null,sdkDirectory);
    }
    constructor() {
    }
    @defaultConstructor
    DirectoryBasedDartSdkTest() {
    }
}

export namespace DirectoryBasedSourceContainerTest {
    export type Constructors = 'DirectoryBasedSourceContainerTest';
    export type Interface = Omit<DirectoryBasedSourceContainerTest, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class DirectoryBasedSourceContainerTest {
    test_contains() : void {
        let resourceProvider : any = new bare.createInstance(any,null);
        let file1 : any = resourceProvider.getFile('/does/not/exist/some.dart');
        let file2 : any = resourceProvider.getFile('/does/not/exist/folder/some2.dart');
        let file3 : any = resourceProvider.getFile('/does/not/exist3/some3.dart');
        let source1 : any = new bare.createInstance(any,null,file1);
        let source2 : any = new bare.createInstance(any,null,file2);
        let source3 : any = new bare.createInstance(any,null,file3);
        let container : any = new bare.createInstance(any,null,'/does/not/exist');
        expect(container.contains(source1),isTrue);
        expect(container.contains(source2),isTrue);
        expect(container.contains(source3),isFalse);
    }
    constructor() {
    }
    @defaultConstructor
    DirectoryBasedSourceContainerTest() {
    }
}

export namespace ElementLocatorTest {
    export type Constructors = lib5.ResolverTestCase.Constructors | 'ElementLocatorTest';
    export type Interface = Omit<ElementLocatorTest, Constructors>;
}
@DartClass
export class ElementLocatorTest extends lib5.ResolverTestCase {
    fail_locate_Identifier_partOfDirective() : void {
        fail("Test this case");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reset() : void {
        let analysisOptions : any = new bare.createInstance(any,null);
        analysisOptions.hint = false;
        this.resetWith({
            options : analysisOptions});
    }
    test_locate_AssignmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("+=",'int x = 0;\nvoid main() {\n  x += 1;\n}');
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },MethodElement,element);
        } )());
    }

    test_locate_BinaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("+","var x = 3 + 4;");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },MethodElement,element);
        } )());
    }

    test_locate_ClassDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("class","class A { }");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ClassElement,element);
        } )());
    }

    test_locate_CompilationUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cu : any = await this._resolveContents("// only comment");
            expect(cu.element,isNotNull);
            let element : any = ElementLocator.locate(cu);
            expect(element,same(cu.element));
        } )());
    }

    test_locate_ConstructorDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIndexedIn("bar",0,'class A {\n  A.bar() {}\n}');
            let declaration : any = id.getAncestor((node : any) =>  {
                return is(node, any);
            });
            let element : any = ElementLocator.locate(declaration);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ConstructorElement,element);
        } )());
    }

    test_locate_ExportDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("export","export 'dart:core';");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ExportElement,element);
        } )());
    }

    test_locate_FunctionDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("f","int f() => 3;");
            let declaration : any = id.getAncestor((node : any) =>  {
                return is(node, any);
            });
            let element : any = ElementLocator.locate(declaration);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },FunctionElement,element);
        } )());
    }

    test_locate_Identifier_annotationClass_namedConstructor_forSimpleFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIndexedIn("Class",2,'class Class {\n  const Class.name();\n}\nvoid main(@Class.name() parameter) {\n}');
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ClassElement,element);
        } )());
    }

    test_locate_Identifier_annotationClass_unnamedConstructor_forSimpleFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIndexedIn("Class",2,'class Class {\n  const Class();\n}\nvoid main(@Class() parameter) {\n}');
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ConstructorElement,element);
        } )());
    }

    test_locate_Identifier_className() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("A","class A { }");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ClassElement,element);
        } )());
    }

    test_locate_Identifier_constructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIndexedIn("bar",0,'class A {\n  A.bar() {}\n}');
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ConstructorElement,element);
        } )());
    }

    test_locate_Identifier_constructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIndexedIn("A",1,'class A {\n  A() {}\n}');
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ConstructorElement,element);
        } )());
    }

    test_locate_Identifier_fieldName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("x","class A { var x; }");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },FieldElement,element);
        } )());
    }

    test_locate_Identifier_libraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("foo","library foo.bar;");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },LibraryElement,element);
        } )());
    }

    test_locate_Identifier_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("length",'void main() {\n int x = \'foo\'.length;\n}');
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },PropertyAccessorElement,element);
        } )());
    }

    test_locate_ImportDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("import","import 'dart:core';");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ImportElement,element);
        } )());
    }

    test_locate_IndexExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIndexedIn("\[",1,'void main() {\n  List x = [1, 2];\n  var y = x[0];\n}');
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },MethodElement,element);
        } )());
    }

    test_locate_InstanceCreationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = await this._findNodeIndexedIn("A(",0,'class A {}\nvoid main() {\n new A();\n}');
            let element : any = ElementLocator.locate(node);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ConstructorElement,element);
        } )());
    }

    test_locate_InstanceCreationExpression_type_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let identifier : any = AstTestFactory.identifier3("A");
            let prefixedIdentifier : any = AstTestFactory.identifier4("pref",identifier);
            let creation : any = AstTestFactory.instanceCreationExpression2(Keyword.NEW,AstTestFactory.typeName3(prefixedIdentifier));
            let classElement : any = ElementFactory.classElement2("A");
            identifier.staticElement = classElement;
            let constructorElement : any = ElementFactory.constructorElement2(classElement,null);
            creation.constructorName.staticElement = constructorElement;
            let element : any = ElementLocator.locate(identifier);
            expect(element,same(classElement));
        } )());
    }

    test_locate_InstanceCreationExpression_type_simpleIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let identifier : any = AstTestFactory.identifier3("A");
            let creation : any = AstTestFactory.instanceCreationExpression2(Keyword.NEW,AstTestFactory.typeName3(identifier));
            let classElement : any = ElementFactory.classElement2("A");
            identifier.staticElement = classElement;
            let constructorElement : any = ElementFactory.constructorElement2(classElement,null);
            creation.constructorName.staticElement = constructorElement;
            let element : any = ElementLocator.locate(identifier);
            expect(element,same(classElement));
        } )());
    }

    test_locate_LibraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("library","library foo;");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },LibraryElement,element);
        } )());
    }

    test_locate_MethodDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("m",'class A {\n  void m() {}\n}');
            let declaration : any = id.getAncestor((node : any) =>  {
                return is(node, any);
            });
            let element : any = ElementLocator.locate(declaration);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },MethodElement,element);
        } )());
    }

    test_locate_MethodInvocation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIndexedIn("bar",1,'class A {\n  int bar() => 42;\n}\nvoid main() {\n var f = new A().bar();\n}');
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },MethodElement,element);
        } )());
    }

    test_locate_MethodInvocation_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'foo(x) {}\nvoid main() {\n foo(0);\n}';
            let cu : any = await this._resolveContents(code);
            let offset : number = new core.DartString(code).indexOf('foo(0)');
            let node : any = new bare.createInstance(any,null,offset).searchWithin(cu);
            let invocation : any = node.getAncestor((n : any) =>  {
                return is(n, any);
            });
            let element : any = ElementLocator.locate(invocation);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },FunctionElement,element);
        } )());
    }

    test_locate_PartOfDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let librarySource : any = this.addNamedSource('/lib.dart','library my.lib;\npart \'part.dart\';\n');
            let unitSource : any = this.addNamedSource('/part.dart','part of my.lib;\n');
            let unit : any = this.analysisContext.resolveCompilationUnit2(unitSource,librarySource);
            let partOf : any = unit.directives.first;
            let element : any = ElementLocator.locate(partOf);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },LibraryElement,element);
        } )());
    }

    test_locate_PostfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("++","int addOne(int x) => x++;");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },MethodElement,element);
        } )());
    }

    test_locate_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("int",'import \'dart:core\' as core;\ncore.int value;');
            let identifier : any = id.getAncestor((node : any) =>  {
                return is(node, any);
            });
            let element : any = ElementLocator.locate(identifier);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },ClassElement,element);
        } )());
    }

    test_locate_PrefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("++","int addOne(int x) => ++x;");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },MethodElement,element);
        } )());
    }

    test_locate_StringLiteral_exportUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/foo.dart","library foo;");
            let id : any = await this._findNodeIn("'foo.dart'","export 'foo.dart';");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },LibraryElement,element);
        } )());
    }

    test_locate_StringLiteral_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("abc","var x = 'abc';");
            let element : any = ElementLocator.locate(id);
            expect(element,isNull);
        } )());
    }

    test_locate_StringLiteral_importUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/foo.dart","library foo; class A {}");
            let id : any = await this._findNodeIn("'foo.dart'","import 'foo.dart'; class B extends A {}");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },LibraryElement,element);
        } )());
    }

    test_locate_StringLiteral_partUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/foo.dart","part of app;");
            let id : any = await this._findNodeIn("'foo.dart'","library app; part 'foo.dart';");
            let element : any = ElementLocator.locate(id);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },CompilationUnitElement,element);
        } )());
    }

    test_locate_VariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = await this._findNodeIn("x","var x = 'abc';");
            let declaration : any = id.getAncestor((node : any) =>  {
                return is(node, any);
            });
            let element : any = ElementLocator.locate(declaration);
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },TopLevelVariableElement,element);
        } )());
    }

    _findNodeIn(nodePattern : string,code : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return await this._findNodeIndexedIn(nodePattern,0,code);
        } )());
    }

    _findNodeIndexedIn(nodePattern : string,index : number,code : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cu : any = await this._resolveContents(code);
            let start : number = this._getOffsetOfMatch(code,nodePattern,index);
            let end : number = start + new core.DartString(nodePattern).length;
            return new bare.createInstance(any,null,start,end).searchWithin(cu);
        } )());
    }

    _getOffsetOfMatch(contents : string,pattern : string,matchIndex : number) : number {
        if (matchIndex == 0) {
            return new core.DartString(contents).indexOf(pattern);
        }
        let matches : core.DartIterable<core.DartMatch> = new core.DartRegExp(pattern).allMatches(contents);
        let match : core.DartMatch = matches.toList()[matchIndex];
        return match.start;
    }
    _resolveContents(code : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(code);
            let library : any = this.resolve2(source);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            return this.analysisContext.resolveCompilationUnit(source,library);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementLocatorTest() {
    }
}

export namespace EnumMemberBuilderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'EnumMemberBuilderTest';
    export type Interface = Omit<EnumMemberBuilderTest, Constructors>;
}
@DartClass
export class EnumMemberBuilderTest extends lib3.EngineTestCase {
    test_visitEnumDeclaration_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let firstName : string = "ONE";
            let secondName : string = "TWO";
            let thirdName : string = "THREE";
            let enumDeclaration : any = AstTestFactory.enumDeclaration2("E",new core.DartList.literal(firstName,secondName,thirdName));
            let enumElement : any = this._buildElement(enumDeclaration);
            let fields : core.DartList<any> = enumElement.fields;
            expect(fields,hasLength(5));
            let constant : any = fields[2];
            expect(constant,isNotNull);
            expect(constant.name,firstName);
            expect(constant.isStatic,isTrue);
            expect((constant as any).evaluationResult,isNotNull);
            this._assertGetter(constant);
            constant = fields[3];
            expect(constant,isNotNull);
            expect(constant.name,secondName);
            expect(constant.isStatic,isTrue);
            expect((constant as any).evaluationResult,isNotNull);
            this._assertGetter(constant);
            constant = fields[4];
            expect(constant,isNotNull);
            expect(constant.name,thirdName);
            expect(constant.isStatic,isTrue);
            expect((constant as any).evaluationResult,isNotNull);
            this._assertGetter(constant);
        } )());
    }

    test_visitEnumDeclaration_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let firstName : string = "ONE";
            let enumDeclaration : any = AstTestFactory.enumDeclaration2("E",new core.DartList.literal(firstName));
            op(Op.INDEX,enumDeclaration.constants,0).documentationComment = AstTestFactory.documentationComment(new core.DartList.literal(((_) : any =>  {
                {
                    _.offset = 50;
                    return _;
                }
            })(TokenFactory.tokenFromString('/// aaa'))),new core.DartList.literal());
            let enumElement : any = this._buildElement(enumDeclaration);
            let fields : core.DartList<any> = enumElement.fields;
            expect(fields,hasLength(3));
            let field : any = fields[0];
            expect(field,isNotNull);
            expect(field.name,"index");
            expect(field.isStatic,isFalse);
            expect(field.isSynthetic,isTrue);
            this._assertGetter(field);
            field = fields[1];
            expect(field,isNotNull);
            expect(field.name,"values");
            expect(field.isStatic,isTrue);
            expect(field.isSynthetic,isTrue);
            expect((field as any).evaluationResult,isNotNull);
            this._assertGetter(field);
            let constant : any = fields[2];
            expect(constant,isNotNull);
            expect(constant.name,firstName);
            expect(constant.isStatic,isTrue);
            expect((constant as any).evaluationResult,isNotNull);
            expect(constant.documentationComment,'/// aaa');
            this._assertGetter(constant);
        } )());
    }

    _assertGetter(field : any) : void {
        let getter : any = field.getter;
        expect(getter,isNotNull);
        expect(getter.variable,same(field));
        expect(getter.type,isNotNull);
    }
    _buildElement(enumDeclaration : any) : any {
        let holder : any = new bare.createInstance(any,null);
        let elementBuilder : any = this._makeBuilder(holder);
        enumDeclaration.accept(elementBuilder);
        let memberBuilder : any = new bare.createInstance(any,null,new bare.createInstance(any,null));
        enumDeclaration.accept(memberBuilder);
        let enums : core.DartList<any> = holder.enums;
        expect(enums,hasLength(1));
        return enums[0];
    }
    _makeBuilder(holder : any) : any {
        return new bare.createInstance(any,null,holder,new bare.createInstance(any,null,'test.dart'));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumMemberBuilderTest() {
    }
}

export namespace ErrorReporterTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ErrorReporterTest';
    export type Interface = Omit<ErrorReporterTest, Constructors>;
}
@DartClass
export class ErrorReporterTest extends lib3.EngineTestCase {
    createType(fileName : string,typeName : string) : any {
        let unit : any = ElementFactory.compilationUnit(fileName);
        let element : any = ElementFactory.classElement2(typeName);
        unit.types = new core.DartList.literal<any>(element);
        return element.type;
    }
    test_creation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
            let source : lib3.TestSource = new lib3.TestSource();
            expect(new bare.createInstance(any,null,listener,source),isNotNull);
        } )());
    }

    test_reportErrorForElement_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let type : any = this.createType("/test1.dart","A");
            let element : any = type.element;
            let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
            let reporter : any = new bare.createInstance(any,null,listener,element.source);
            reporter.reportErrorForElement(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER,element,new core.DartList.literal('A'));
            let error : any = listener.errors[0];
            expect(error.offset,element.nameOffset);
        } )());
    }

    test_reportErrorForElement_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let element : any = ElementFactory.importFor(ElementFactory.library(null,''),null);
            let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
            let reporter : any = new bare.createInstance(any,null,listener,new bare.createInstance(any,null,'/test.dart',lib6.toUri('/test.dart'),UriKind.FILE_URI));
            reporter.reportErrorForElement(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER,element,new core.DartList.literal('A'));
            let error : any = listener.errors[0];
            expect(error.offset,element.nameOffset);
        } )());
    }

    test_reportErrorForSpan() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
            let reporter : any = new bare.createInstance(any,null,listener,new lib3.TestSource());
            let src = 'foo: bar\nzap: baz\n';
            let offset : number = new core.DartString(src).indexOf('baz');
            let length : number = new core.DartString('baz').length;
            let span : lib8.SourceSpan = new lib7.SourceFile(src).span(offset,offset + length);
            reporter.reportErrorForSpan(AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUE,span,new core.DartList.literal('test','zip','zap'));
            expect(listener.errors,hasLength(1));
            expect(listener.errors.first.offset,offset);
            expect(listener.errors.first.length,length);
        } )());
    }

    test_reportTypeErrorForNode_differentNames() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let firstType : any = this.createType("/test1.dart","A");
            let secondType : any = this.createType("/test2.dart","B");
            let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
            let reporter : any = new bare.createInstance(any,null,listener,firstType.element.source);
            reporter.reportTypeErrorForNode(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,AstTestFactory.identifier3("x"),new core.DartList.literal(firstType,secondType));
            let error : any = listener.errors[0];
            expect(op(Op.LT,error.message.indexOf("("),0),isTrue);
        } )());
    }

    test_reportTypeErrorForNode_sameName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let typeName : string = "A";
            let firstType : any = this.createType("/test1.dart",typeName);
            let secondType : any = this.createType("/test2.dart",typeName);
            let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
            let reporter : any = new bare.createInstance(any,null,listener,firstType.element.source);
            reporter.reportTypeErrorForNode(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,AstTestFactory.identifier3("x"),new core.DartList.literal(firstType,secondType));
            let error : any = listener.errors[0];
            expect(op(Op.GEQ,error.message.indexOf("("),0),isTrue);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorReporterTest() {
    }
}

export namespace ErrorSeverityTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ErrorSeverityTest';
    export type Interface = Omit<ErrorSeverityTest, Constructors>;
}
@DartClass
export class ErrorSeverityTest extends lib3.EngineTestCase {
    test_max_error_error() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.ERROR.max(ErrorSeverity.ERROR),same(ErrorSeverity.ERROR));
        } )());
    }

    test_max_error_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.ERROR.max(ErrorSeverity.NONE),same(ErrorSeverity.ERROR));
        } )());
    }

    test_max_error_warning() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.ERROR.max(ErrorSeverity.WARNING),same(ErrorSeverity.ERROR));
        } )());
    }

    test_max_none_error() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.NONE.max(ErrorSeverity.ERROR),same(ErrorSeverity.ERROR));
        } )());
    }

    test_max_none_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.NONE.max(ErrorSeverity.NONE),same(ErrorSeverity.NONE));
        } )());
    }

    test_max_none_warning() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.NONE.max(ErrorSeverity.WARNING),same(ErrorSeverity.WARNING));
        } )());
    }

    test_max_warning_error() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.WARNING.max(ErrorSeverity.ERROR),same(ErrorSeverity.ERROR));
        } )());
    }

    test_max_warning_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.WARNING.max(ErrorSeverity.NONE),same(ErrorSeverity.WARNING));
        } )());
    }

    test_max_warning_warning() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ErrorSeverity.WARNING.max(ErrorSeverity.WARNING),same(ErrorSeverity.WARNING));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorSeverityTest() {
    }
}

export namespace ExitDetectorTest {
    export type Constructors = lib9.ParserTestCase.Constructors | 'ExitDetectorTest';
    export type Interface = Omit<ExitDetectorTest, Constructors>;
}
@DartClass
export class ExitDetectorTest extends lib9.ParserTestCase {
    test_asExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a as Object;");
        } )());
    }

    test_asExpression_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw '' as Object;");
        } )());
    }

    test_assertStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("assert(a);");
        } )());
    }

    test_assertStatement_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("assert((throw 0));");
        } )());
    }

    test_assignmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("v = 1;");
        } )());
    }

    test_assignmentExpression_compound_lazy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableLazyAssignmentOperators = true;
            this._assertFalse("v ||= false;");
        } )());
    }

    test_assignmentExpression_lhs_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("a[throw ''] = 0;");
        } )());
    }

    test_assignmentExpression_rhs_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("v = throw '';");
        } )());
    }

    test_await_false() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("await x;");
        } )());
    }

    test_await_throw_true() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("bool b = await (throw '' || true);");
        } )());
    }

    test_binaryExpression_and() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a && b;");
        } )());
    }

    test_binaryExpression_and_lhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw '' && b;");
        } )());
    }

    test_binaryExpression_and_rhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a && (throw '');");
        } )());
    }

    test_binaryExpression_and_rhs2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("false && (throw '');");
        } )());
    }

    test_binaryExpression_and_rhs3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("true && (throw '');");
        } )());
    }

    test_binaryExpression_ifNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a ?? b;");
        } )());
    }

    test_binaryExpression_ifNull_lhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw '' ?? b;");
        } )());
    }

    test_binaryExpression_ifNull_rhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a ?? (throw '');");
        } )());
    }

    test_binaryExpression_ifNull_rhs2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("null ?? (throw '');");
        } )());
    }

    test_binaryExpression_or() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a || b;");
        } )());
    }

    test_binaryExpression_or_lhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw '' || b;");
        } )());
    }

    test_binaryExpression_or_rhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a || (throw '');");
        } )());
    }

    test_binaryExpression_or_rhs2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("true || (throw '');");
        } )());
    }

    test_binaryExpression_or_rhs3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("false || (throw '');");
        } )());
    }

    test_block_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{}");
        } )());
    }

    test_block_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ int i = 0; }");
        } )());
    }

    test_block_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ return 0; }");
        } )());
    }

    test_block_returnNotLast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ return 0; throw 'a'; }");
        } )());
    }

    test_block_throwNotLast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ throw 0; x = null; }");
        } )());
    }

    test_cascadeExpression_argument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("a..b(throw '');");
        } )());
    }

    test_cascadeExpression_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("a..[throw ''];");
        } )());
    }

    test_cascadeExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw ''..b();");
        } )());
    }

    test_conditional_ifElse_bothThrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("c ? throw '' : throw '';");
        } )());
    }

    test_conditional_ifElse_elseThrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("c ? i : throw '';");
        } )());
    }

    test_conditional_ifElse_noThrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("c ? i : j;");
        } )());
    }

    test_conditional_ifElse_thenThrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("c ? throw '' : j;");
        } )());
    }

    test_conditionalAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a?.b;");
        } )());
    }

    test_conditionalAccess_lhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("(throw '')?.b;");
        } )());
    }

    test_conditionalAccessAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a?.b = c;");
        } )());
    }

    test_conditionalAccessAssign_lhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("(throw '')?.b = c;");
        } )());
    }

    test_conditionalAccessAssign_rhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a?.b = throw '';");
        } )());
    }

    test_conditionalAccessAssign_rhs2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("null?.b = throw '';");
        } )());
    }

    test_conditionalAccessIfNullAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a?.b ??= c;");
        } )());
    }

    test_conditionalAccessIfNullAssign_lhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("(throw '')?.b ??= c;");
        } )());
    }

    test_conditionalAccessIfNullAssign_rhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a?.b ??= throw '';");
        } )());
    }

    test_conditionalAccessIfNullAssign_rhs2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("null?.b ??= throw '';");
        } )());
    }

    test_conditionalCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a?.b(c);");
        } )());
    }

    test_conditionalCall_lhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("(throw '')?.b(c);");
        } )());
    }

    test_conditionalCall_rhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a?.b(throw '');");
        } )());
    }

    test_conditionalCall_rhs2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("null?.b(throw '');");
        } )());
    }

    test_creation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(new bare.createInstance(any,null),isNotNull);
        } )());
    }

    test_doStatement_break_and_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ do { if (1==1) break; throw 'T'; } while (0==1); }");
        } )());
    }

    test_doStatement_continue_and_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ do { if (1==1) continue; throw 'T'; } while (0==1); }");
        } )());
    }

    test_doStatement_continueDoInSwitch_and_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse('{\n  D: do {\n    switch (1) {\n      L: case 0: continue D;\n      M: case 1: break;\n    }\n    throw \'T\';\n  } while (0 == 1);\n}');
        } )());
    }

    test_doStatement_continueInSwitch_and_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse('{\n  do {\n    switch (1) {\n      L: case 0: continue;\n      M: case 1: break;\n    }\n    throw \'T\';\n  } while (0 == 1);\n}');
        } )());
    }

    test_doStatement_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ do { return null; } while (1 == 2); }");
        } )());
    }

    test_doStatement_throwCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ do {} while (throw ''); }");
        } )());
    }

    test_doStatement_true_break() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ do { break; } while (true); }");
        } )());
    }

    test_doStatement_true_continue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ do { continue; } while (true); }");
        } )());
    }

    test_doStatement_true_continueWithLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ x: do { continue x; } while (true); }");
        } )());
    }

    test_doStatement_true_if_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ do { if (true) {return null;} } while (true); }");
        } )());
    }

    test_doStatement_true_noBreak() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ do {} while (true); }");
        } )());
    }

    test_doStatement_true_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ do { return null; } while (true);  }");
        } )());
    }

    test_emptyStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse(";");
        } )());
    }

    test_forEachStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("for (element in list) {}");
        } )());
    }

    test_forEachStatement_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("for (element in throw '') {}");
        } )());
    }

    test_forStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("for (; throw 0;) {}");
        } )());
    }

    test_forStatement_implicitTrue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("for (;;) {}");
        } )());
    }

    test_forStatement_implicitTrue_break() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("for (;;) { break; }");
        } )());
    }

    test_forStatement_implicitTrue_if_break() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ for (;;) { if (1==2) { var a = 1; } else { break; } } }");
        } )());
    }

    test_forStatement_initialization() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("for (i = throw 0;;) {}");
        } )());
    }

    test_forStatement_true() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("for (; true; ) {}");
        } )());
    }

    test_forStatement_true_break() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ for (; true; ) { break; } }");
        } )());
    }

    test_forStatement_true_continue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ for (; true; ) { continue; } }");
        } )());
    }

    test_forStatement_true_if_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ for (; true; ) { if (true) {return null;} } }");
        } )());
    }

    test_forStatement_true_noBreak() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ for (; true; ) {} }");
        } )());
    }

    test_forStatement_updaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("for (;; i++, throw 0) {}");
        } )());
    }

    test_forStatement_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("for (int i = throw 0;;) {}");
        } )());
    }

    test_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("(){};");
        } )());
    }

    test_functionExpression_bodyThrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("(int i) => throw '';");
        } )());
    }

    test_functionExpressionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("f(g);");
        } )());
    }

    test_functionExpressionInvocation_argumentThrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("f(throw '');");
        } )());
    }

    test_functionExpressionInvocation_targetThrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw ''(g);");
        } )());
    }

    test_identifier_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a.b;");
        } )());
    }

    test_identifier_simpleIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a;");
        } )());
    }

    test_if_false_else_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("if (false) {} else { return 0; }");
        } )());
    }

    test_if_false_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("if (false) {}");
        } )());
    }

    test_if_false_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("if (false) { return 0; }");
        } )());
    }

    test_if_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("if (c) i++;");
        } )());
    }

    test_if_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("if (c) return 0;");
        } )());
    }

    test_if_true_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("if (true) {}");
        } )());
    }

    test_if_true_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("if (true) { return 0; }");
        } )());
    }

    test_ifElse_bothReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("if (c) return 0; else return 1;");
        } )());
    }

    test_ifElse_elseReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("if (c) i++; else return 1;");
        } )());
    }

    test_ifElse_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("if (c) i++; else j++;");
        } )());
    }

    test_ifElse_thenReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("if (c) return 0; else j++;");
        } )());
    }

    test_ifNullAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a ??= b;");
        } )());
    }

    test_ifNullAssign_rhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a ??= throw '';");
        } )());
    }

    test_indexExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a[b];");
        } )());
    }

    test_indexExpression_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("a[throw ''];");
        } )());
    }

    test_indexExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw ''[b];");
        } )());
    }

    test_instanceCreationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("new A(b);");
        } )());
    }

    test_instanceCreationExpression_argumentThrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("new A(throw '');");
        } )());
    }

    test_isExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("A is B;");
        } )());
    }

    test_isExpression_throws() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw '' is B;");
        } )());
    }

    test_labeledStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("label: a;");
        } )());
    }

    test_labeledStatement_throws() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("label: throw '';");
        } )());
    }

    test_literal_boolean() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("true;");
        } )());
    }

    test_literal_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("1.1;");
        } )());
    }

    test_literal_integer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("1;");
        } )());
    }

    test_literal_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("null;");
        } )());
    }

    test_literal_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("'str';");
        } )());
    }

    test_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("a.b(c);");
        } )());
    }

    test_methodInvocation_argument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("a.b(throw '');");
        } )());
    }

    test_methodInvocation_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw ''.b(c);");
        } )());
    }

    test_parenthesizedExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("(a);");
        } )());
    }

    test_parenthesizedExpression_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("(throw '');");
        } )());
    }

    test_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("new Object().a;");
        } )());
    }

    test_propertyAccess_throws() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("(throw '').a;");
        } )());
    }

    test_rethrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("rethrow;");
        } )());
    }

    test_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("return 0;");
        } )());
    }

    test_superExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("super.a;");
        } )());
    }

    test_switch_allReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("switch (i) { case 0: return 0; default: return 1; }");
        } )());
    }

    test_switch_defaultWithNoStatements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("switch (i) { case 0: return 0; default: }");
        } )());
    }

    test_switch_fallThroughToNotReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("switch (i) { case 0: case 1: break; default: return 1; }");
        } )());
    }

    test_switch_fallThroughToReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("switch (i) { case 0: case 1: return 0; default: return 1; }");
        } )());
    }

    test_switch_includesContinue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue('switch (i) {\n  zero: case 0: return 0;\n  case 1: continue zero;\n  default: return 1;\n}');
        } )());
    }

    test_switch_noDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("switch (i) { case 0: return 0; }");
        } )());
    }

    test_switch_nonReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("switch (i) { case 0: i++; default: return 1; }");
        } )());
    }

    test_thisExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("this.a;");
        } )());
    }

    test_throwExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("throw new Object();");
        } )());
    }

    test_tryStatement_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("try {} catch (e, s) {} finally {}");
        } )());
    }

    test_tryStatement_noReturn_noFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("try {} catch (e, s) {}");
        } )());
    }

    test_tryStatement_return_catch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("try {} catch (e, s) { return 1; } finally {}");
        } )());
    }

    test_tryStatement_return_catch_noFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("try {} catch (e, s) { return 1; }");
        } )());
    }

    test_tryStatement_return_finally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("try {} catch (e, s) {} finally { return 1; }");
        } )());
    }

    test_tryStatement_return_try_noCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("try { return 1; } finally {}");
        } )());
    }

    test_tryStatement_return_try_oneCatchDoesNotExit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("try { return 1; } catch (e, s) {} finally {}");
        } )());
    }

    test_tryStatement_return_try_oneCatchDoesNotExit_noFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("try { return 1; } catch (e, s) {}");
        } )());
    }

    test_tryStatement_return_try_oneCatchExits() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("try { return 1; } catch (e, s) { return 1; } finally {}");
        } )());
    }

    test_tryStatement_return_try_oneCatchExits_noFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("try { return 1; } catch (e, s) { return 1; }");
        } )());
    }

    test_tryStatement_return_try_twoCatchesDoExit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue('try { return 1; }\non int catch (e, s) { return 1; }\non String catch (e, s) { return 1; }\nfinally {}');
        } )());
    }

    test_tryStatement_return_try_twoCatchesDoExit_noFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue('try { return 1; }\non int catch (e, s) { return 1; }\non String catch (e, s) { return 1; }');
        } )());
    }

    test_tryStatement_return_try_twoCatchesDoNotExit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse('try { return 1; }\non int catch (e, s) {}\non String catch (e, s) {}\nfinally {}');
        } )());
    }

    test_tryStatement_return_try_twoCatchesDoNotExit_noFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse('try { return 1; }\non int catch (e, s) {}\non String catch (e, s) {}');
        } )());
    }

    test_tryStatement_return_try_twoCatchesMixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse('try { return 1; }\non int catch (e, s) {}\non String catch (e, s) { return 1; }\nfinally {}');
        } )());
    }

    test_tryStatement_return_try_twoCatchesMixed_noFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse('try { return 1; }\non int catch (e, s) {}\non String catch (e, s) { return 1; }');
        } )());
    }

    test_variableDeclarationStatement_noInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("int i;");
        } )());
    }

    test_variableDeclarationStatement_noThrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("int i = 0;");
        } )());
    }

    test_variableDeclarationStatement_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("int i = throw new Object();");
        } )());
    }

    test_whileStatement_false_nonReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ while (false) {} }");
        } )());
    }

    test_whileStatement_throwCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ while (throw '') {} }");
        } )());
    }

    test_whileStatement_true_break() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ while (true) { break; } }");
        } )());
    }

    test_whileStatement_true_break_and_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertFalse("{ while (true) { if (1==1) break; throw 'T'; } }");
        } )());
    }

    test_whileStatement_true_continue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ while (true) { continue; } }");
        } )());
    }

    test_whileStatement_true_continueWithLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ x: while (true) { continue x; } }");
        } )());
    }

    test_whileStatement_true_doStatement_scopeRequired() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ while (true) { x: do { continue x; } while (true); } }");
        } )());
    }

    test_whileStatement_true_if_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ while (true) { if (true) {return null;} } }");
        } )());
    }

    test_whileStatement_true_noBreak() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ while (true) {} }");
        } )());
    }

    test_whileStatement_true_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ while (true) { return null; } }");
        } )());
    }

    test_whileStatement_true_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertTrue("{ while (true) { throw ''; } }");
        } )());
    }

    _assertFalse(source : string) : void {
        this._assertHasReturn(false,source);
    }
    _assertHasReturn(expectedResult : boolean,source : string) : void {
        let statement : any = this.parseStatement(source,this.enableLazyAssignmentOperators);
        expect(ExitDetector.exits(statement),expectedResult);
    }
    _assertTrue(source : string) : void {
        this._assertHasReturn(true,source);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExitDetectorTest() {
    }
}

export namespace ExitDetectorTest2 {
    export type Constructors = lib5.ResolverTestCase.Constructors | 'ExitDetectorTest2';
    export type Interface = Omit<ExitDetectorTest2, Constructors>;
}
@DartClass
export class ExitDetectorTest2 extends lib5.ResolverTestCase {
    test_forStatement_implicitTrue_breakWithLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() {\n  x: for (;;) {\n    if (1 < 2) {\n      break x;\n    }\n    return;\n  }\n}\n');
            this._assertNthStatementDoesNotExit(source,0);
        } )());
    }

    test_switch_withEnum_false_noDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { A, B }\nString f(E e) {\n  var x;\n  switch (e) {\n    case A:\n      x = \'A\';\n    case B:\n      x = \'B\';\n  }\n  return x;\n}\n');
            this._assertNthStatementDoesNotExit(source,1);
        } )());
    }

    test_switch_withEnum_false_withDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { A, B }\nString f(E e) {\n  var x;\n  switch (e) {\n    case A:\n      x = \'A\';\n    default:\n      x = \'?\';\n  }\n  return x;\n}\n');
            this._assertNthStatementDoesNotExit(source,1);
        } )());
    }

    test_switch_withEnum_true_noDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { A, B }\nString f(E e) {\n  switch (e) {\n    case A:\n      return \'A\';\n    case B:\n      return \'B\';\n  }\n}\n');
            this._assertNthStatementDoesNotExit(source,0);
        } )());
    }

    test_switch_withEnum_true_withExitingDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { A, B }\nString f(E e) {\n  switch (e) {\n    case A:\n      return \'A\';\n    default:\n      return \'?\';\n  }\n}\n');
            this._assertNthStatementExits(source,0);
        } )());
    }

    test_switch_withEnum_true_withNonExitingDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { A, B }\nString f(E e) {\n  var x;\n  switch (e) {\n    case A:\n      return \'A\';\n    default:\n      x = \'?\';\n  }\n}\n');
            this._assertNthStatementDoesNotExit(source,1);
        } )());
    }

    test_whileStatement_breakWithLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() {\n  x: while (true) {\n    if (1 < 2) {\n      break x;\n    }\n    return;\n  }\n}\n');
            this._assertNthStatementDoesNotExit(source,0);
        } )());
    }

    test_whileStatement_breakWithLabel_afterExiting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() {\n  x: while (true) {\n    return;\n    if (1 < 2) {\n      break x;\n    }\n  }\n}\n');
            this._assertNthStatementExits(source,0);
        } )());
    }

    test_whileStatement_switchWithBreakWithLabel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() {\n  x: while (true) {\n    switch (true) {\n      case false: break;\n      case true: break x;\n    }\n  }\n}\n');
            this._assertNthStatementDoesNotExit(source,0);
        } )());
    }

    test_yieldStatement_plain() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() sync* {\n  yield 1;\n}\n');
            this._assertNthStatementDoesNotExit(source,0);
        } )());
    }

    test_yieldStatement_star_plain() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() sync* {\n  yield* 1;\n}\n');
            this._assertNthStatementDoesNotExit(source,0);
        } )());
    }

    test_yieldStatement_star_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() sync* {\n  yield* throw \'\';\n}\n');
            this._assertNthStatementExits(source,0);
        } )());
    }

    test_yieldStatement_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() sync* {\n  yield throw \'\';\n}\n');
            this._assertNthStatementExits(source,0);
        } )());
    }

    _assertHasReturn(expectedResult : boolean,source : any,n : number) : void {
        let element : any = this.resolve2(source);
        let unit : any = this.resolveCompilationUnit(source,element);
        let function : any = unit.declarations.last;
        let body : any = function.functionExpression.body;
        let statement : any = op(Op.INDEX,body.block.statements,n);
        expect(ExitDetector.exits(statement),expectedResult);
    }
    _assertNthStatementDoesNotExit(source : any,n : number) : void {
        this._assertHasReturn(false,source,n);
    }
    _assertNthStatementExits(source : any,n : number) : void {
        this._assertHasReturn(true,source,n);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExitDetectorTest2() {
    }
}

export namespace FileBasedSourceTest {
    export type Constructors = 'FileBasedSourceTest';
    export type Interface = Omit<FileBasedSourceTest, Constructors>;
}
@DartClass
export class FileBasedSourceTest {
    test_equals_false_differentFiles() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file1 : any = FileUtilities2.createFile("/does/not/exist1.dart");
            let file2 : any = FileUtilities2.createFile("/does/not/exist2.dart");
            let source1 : any = new bare.createInstance(any,null,file1);
            let source2 : any = new bare.createInstance(any,null,file2);
            expect(op(Op.EQUALS,source1,source2),isFalse);
        } )());
    }

    test_equals_false_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : any = FileUtilities2.createFile("/does/not/exist1.dart");
            let source1 : any = new bare.createInstance(any,null,file);
            expect(op(Op.EQUALS,source1,null),isFalse);
        } )());
    }

    test_equals_true() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file1 : any = FileUtilities2.createFile("/does/not/exist.dart");
            let file2 : any = FileUtilities2.createFile("/does/not/exist.dart");
            let source1 : any = new bare.createInstance(any,null,file1);
            let source2 : any = new bare.createInstance(any,null,file2);
            expect(op(Op.EQUALS,source1,source2),isTrue);
        } )());
    }

    test_fileReadMode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(FileBasedSource.fileReadMode('a'),'a');
            expect(FileBasedSource.fileReadMode('a\n'),'a\n');
            expect(FileBasedSource.fileReadMode('ab'),'ab');
            expect(FileBasedSource.fileReadMode('abc'),'abc');
            expect(FileBasedSource.fileReadMode('a\nb'),'a\nb');
            expect(FileBasedSource.fileReadMode('ab'),'ab');
            expect(FileBasedSource.fileReadMode('a\nb'),'a\nb');
        } )());
    }

    test_fileReadMode_changed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            FileBasedSource.fileReadMode = (s : string) =>  {
                return s + 'xyz';
            };
            expect(FileBasedSource.fileReadMode('a'),'axyz');
            expect(FileBasedSource.fileReadMode('a\n'),'a\nxyz');
            expect(FileBasedSource.fileReadMode('ab'),'abxyz');
            expect(FileBasedSource.fileReadMode('abc'),'abcxyz');
            FileBasedSource.fileReadMode = (s : string) =>  {
                return s;
            };
        } )());
    }

    test_fileReadMode_normalize_eol_always() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            FileBasedSource.fileReadMode = PhysicalResourceProvider.NORMALIZE_EOL_ALWAYS;
            expect(FileBasedSource.fileReadMode('a'),'a');
            expect(FileBasedSource.fileReadMode('\n'),'\n');
            expect(FileBasedSource.fileReadMode('a\n'),'a\n');
            expect(FileBasedSource.fileReadMode('\na'),'\na');
            expect(FileBasedSource.fileReadMode('\n'),'\n');
            expect(FileBasedSource.fileReadMode('a\n'),'a\n');
            expect(FileBasedSource.fileReadMode('\na'),'\na');
            expect(FileBasedSource.fileReadMode(''),'\n');
            expect(FileBasedSource.fileReadMode('a'),'a\n');
            expect(FileBasedSource.fileReadMode('a'),'\na');
            FileBasedSource.fileReadMode = (s : string) =>  {
                return s;
            };
        } )());
    }

    test_getEncoding() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,PhysicalResourceProvider.INSTANCE)));
            let fullPath : string = "/does/not/exist.dart";
            let file : any = FileUtilities2.createFile(fullPath);
            let source : any = new bare.createInstance(any,null,file);
            expect(factory.fromEncoding(source.encoding),source);
        } )());
    }

    test_getFullName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let fullPath : string = "/does/not/exist.dart";
            let file : any = FileUtilities2.createFile(fullPath);
            let source : any = new bare.createInstance(any,null,file);
            expect(source.fullName,file.getAbsolutePath());
        } )());
    }

    test_getShortName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : any = FileUtilities2.createFile("/does/not/exist.dart");
            let source : any = new bare.createInstance(any,null,file);
            expect(source.shortName,"exist.dart");
        } )());
    }

    test_hashCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file1 : any = FileUtilities2.createFile("/does/not/exist.dart");
            let file2 : any = FileUtilities2.createFile("/does/not/exist.dart");
            let source1 : any = new bare.createInstance(any,null,file1);
            let source2 : any = new bare.createInstance(any,null,file2);
            expect(source2.hashCode,source1.hashCode);
        } )());
    }

    test_isInSystemLibrary_contagious() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let sdk : any = (((_) : _SimpleDartSdkTest =>  {
                {
                    _.setUp();
                    return _;
                }
            })(new _SimpleDartSdkTest())).sdk;
            let resolver : any = new bare.createInstance(any,null,sdk);
            let factory : any = new bare.createInstance(any,null,new core.DartList.literal(resolver));
            let result : any = resolver.resolveAbsolute(lib4.Uri.parse("dart:core"));
            expect(result,isNotNull);
            expect(result.isInSystemLibrary,isTrue);
            let partSource : any = factory.resolveUri(result,"num.dart");
            expect(partSource,isNotNull);
            expect(partSource.isInSystemLibrary,isTrue);
        } )());
    }

    test_isInSystemLibrary_false() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : any = FileUtilities2.createFile("/does/not/exist.dart");
            let source : any = new bare.createInstance(any,null,file);
            expect(source,isNotNull);
            expect(source.fullName,file.getAbsolutePath());
            expect(source.isInSystemLibrary,isFalse);
        } )());
    }

    test_issue14500() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = new bare.createInstance(any,null,FileUtilities2.createFile("/some/packages/foo:bar.dart"));
            expect(source,isNotNull);
            expect(source.exists(),isFalse);
        } )());
    }

    test_resolveRelative_file_fileName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (OSUtilities.isWindows()) {
                return;
            }
            let file : any = FileUtilities2.createFile("/a/b/test.dart");
            let source : any = new bare.createInstance(any,null,file);
            expect(source,isNotNull);
            let relative : lib4.Uri = resolveRelativeUri(source.uri,lib4.Uri.parse("lib.dart"));
            expect(relative,isNotNull);
            expect(relative.toString(),"file:///a/b/lib.dart");
        } )());
    }

    test_resolveRelative_file_filePath() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (OSUtilities.isWindows()) {
                return;
            }
            let file : any = FileUtilities2.createFile("/a/b/test.dart");
            let source : any = new bare.createInstance(any,null,file);
            expect(source,isNotNull);
            let relative : lib4.Uri = resolveRelativeUri(source.uri,lib4.Uri.parse("c/lib.dart"));
            expect(relative,isNotNull);
            expect(relative.toString(),"file:///a/b/c/lib.dart");
        } )());
    }

    test_resolveRelative_file_filePathWithParent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (OSUtilities.isWindows()) {
                return;
            }
            let file : any = FileUtilities2.createFile("/a/b/test.dart");
            let source : any = new bare.createInstance(any,null,file);
            expect(source,isNotNull);
            let relative : lib4.Uri = resolveRelativeUri(source.uri,lib4.Uri.parse("../c/lib.dart"));
            expect(relative,isNotNull);
            expect(relative.toString(),"file:///a/c/lib.dart");
        } )());
    }

    test_system() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : any = FileUtilities2.createFile("/does/not/exist.dart");
            let source : any = new bare.createInstance(any,null,file,lib4.Uri.parse("dart:core"));
            expect(source,isNotNull);
            expect(source.fullName,file.getAbsolutePath());
            expect(source.isInSystemLibrary,isTrue);
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    FileBasedSourceTest() {
    }
}

export namespace ResolveRelativeUriTest {
    export type Constructors = 'ResolveRelativeUriTest';
    export type Interface = Omit<ResolveRelativeUriTest, Constructors>;
}
@DartClass
export class ResolveRelativeUriTest {
    test_resolveRelative_dart_dartUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('dart:foo','dart:bar','dart:bar');
        } )());
    }

    test_resolveRelative_dart_fileName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('dart:test','lib.dart','dart:test/lib.dart');
        } )());
    }

    test_resolveRelative_dart_filePath() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('dart:test','c/lib.dart','dart:test/c/lib.dart');
        } )());
    }

    test_resolveRelative_dart_filePathWithParent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('dart:test/b/test.dart','../c/lib.dart','dart:test/c/lib.dart');
        } )());
    }

    test_resolveRelative_package_dartUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('package:foo/bar.dart','dart:test','dart:test');
        } )());
    }

    test_resolveRelative_package_emptyPath() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('package:foo/bar.dart','','package:foo/bar.dart');
        } )());
    }

    test_resolveRelative_package_fileName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('package:b/test.dart','lib.dart','package:b/lib.dart');
        } )());
    }

    test_resolveRelative_package_fileNameWithoutPackageName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('package:test.dart','lib.dart','package:lib.dart');
        } )());
    }

    test_resolveRelative_package_filePath() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('package:b/test.dart','c/lib.dart','package:b/c/lib.dart');
        } )());
    }

    test_resolveRelative_package_filePathWithParent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertResolve('package:a/b/test.dart','../c/lib.dart','package:a/c/lib.dart');
        } )());
    }

    _assertResolve(baseStr : string,containedStr : string,expectedStr : string) : void {
        let base : lib4.Uri = lib4.Uri.parse(baseStr);
        let contained : lib4.Uri = lib4.Uri.parse(containedStr);
        let result : lib4.Uri = resolveRelativeUri(base,contained);
        expect(result,isNotNull);
        expect(result.toString(),expectedStr);
    }
    constructor() {
    }
    @defaultConstructor
    ResolveRelativeUriTest() {
    }
}

export namespace SDKLibrariesReaderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'SDKLibrariesReaderTest';
    export type Interface = Omit<SDKLibrariesReaderTest, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class SDKLibrariesReaderTest extends lib3.EngineTestCase {
    test_readFrom_dart2js() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libraryMap : any = new bare.createInstance(any,null,true).readFromFile(FileUtilities2.createFile("/libs.dart"),'final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  \'first\' : const LibraryInfo(\n    \'first/first.dart\',\n    categories: \'Client\',\n    documented: true,\n    platforms: VM_PLATFORM,\n    dart2jsPath: \'first/first_dart2js.dart\'),\n};');
            expect(libraryMap,isNotNull);
            expect(libraryMap.size(),1);
            let first : any = libraryMap.getLibrary("dart:first");
            expect(first,isNotNull);
            expect(first.category,"Client");
            expect(first.path,"first/first_dart2js.dart");
            expect(first.shortName,"dart:first");
            expect(first.isDart2JsLibrary,false);
            expect(first.isDocumented,true);
            expect(first.isImplementation,false);
            expect(first.isVmLibrary,true);
        } )());
    }

    test_readFrom_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libraryMap : any = new bare.createInstance(any,null,false).readFromFile(FileUtilities2.createFile("/libs.dart"),"");
            expect(libraryMap,isNotNull);
            expect(libraryMap.size(),0);
        } )());
    }

    test_readFrom_normal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libraryMap : any = new bare.createInstance(any,null,false).readFromFile(FileUtilities2.createFile("/libs.dart"),'final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  \'first\' : const LibraryInfo(\n    \'first/first.dart\',\n    categories: \'Client\',\n    documented: true,\n    platforms: VM_PLATFORM),\n\n  \'second\' : const LibraryInfo(\n    \'second/second.dart\',\n    categories: \'Server\',\n    documented: false,\n    implementation: true,\n    platforms: 0),\n};');
            expect(libraryMap,isNotNull);
            expect(libraryMap.size(),2);
            let first : any = libraryMap.getLibrary("dart:first");
            expect(first,isNotNull);
            expect(first.category,"Client");
            expect(first.path,"first/first.dart");
            expect(first.shortName,"dart:first");
            expect(first.isDart2JsLibrary,false);
            expect(first.isDocumented,true);
            expect(first.isImplementation,false);
            expect(first.isVmLibrary,true);
            let second : any = libraryMap.getLibrary("dart:second");
            expect(second,isNotNull);
            expect(second.category,"Server");
            expect(second.path,"second/second.dart");
            expect(second.shortName,"dart:second");
            expect(second.isDart2JsLibrary,false);
            expect(second.isDocumented,false);
            expect(second.isImplementation,true);
            expect(second.isVmLibrary,false);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SDKLibrariesReaderTest() {
    }
}

export namespace UriKindTest {
    export type Constructors = 'UriKindTest';
    export type Interface = Omit<UriKindTest, Constructors>;
}
@DartClass
export class UriKindTest {
    test_fromEncoding() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(UriKind.fromEncoding(100),same(UriKind.DART_URI));
            expect(UriKind.fromEncoding(102),same(UriKind.FILE_URI));
            expect(UriKind.fromEncoding(112),same(UriKind.PACKAGE_URI));
            expect(UriKind.fromEncoding(88),same(null));
        } )());
    }

    test_getEncoding() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(UriKind.DART_URI.encoding,100);
            expect(UriKind.FILE_URI.encoding,102);
            expect(UriKind.PACKAGE_URI.encoding,112);
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    UriKindTest() {
    }
}

export namespace _SimpleDartSdkTest {
    export type Constructors = '_SimpleDartSdkTest';
    export type Interface = Omit<_SimpleDartSdkTest, Constructors>;
}
@DartClass
export class _SimpleDartSdkTest {
    resourceProvider : any;

    coreCorePath : string;

    coreIntPath : string;

    sdk : any;

    setUp() : void {
        let sdkFolder : any = this.resourceProvider.newFolder(this.resourceProvider.convertPath('/sdk'));
        this.resourceProvider.newFile(this.resourceProvider.convertPath('/sdk/lib/_internal/sdk_library_metadata/lib/libraries.dart'),'const Map<String, LibraryInfo> libraries = const {\n  "core": const LibraryInfo("core/core.dart")\n};\n');
        this.coreCorePath = this.resourceProvider.convertPath('/sdk/lib/core/core.dart');
        this.resourceProvider.newFile(this.coreCorePath,'library dart.core;\npart \'int.dart\';\n');
        this.coreIntPath = this.resourceProvider.convertPath('/sdk/lib/core/int.dart');
        this.resourceProvider.newFile(this.coreIntPath,'part of dart.core;\n');
        this.sdk = new bare.createInstance(any,null,this.resourceProvider,sdkFolder);
    }
    constructor() {
    }
    @defaultConstructor
    _SimpleDartSdkTest() {
        this.resourceProvider = new bare.createInstance(any,null);
    }
}

export namespace _SourceMock {
    export type Constructors = '_SourceMock';
    export type Interface = Omit<_SourceMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SourceMock() {
    }
}

export namespace DartUriResolverTest {
    export type Constructors = _SimpleDartSdkTest.Constructors | 'DartUriResolverTest';
    export type Interface = Omit<DartUriResolverTest, Constructors>;
}
@DartClass
export class DartUriResolverTest extends _SimpleDartSdkTest {
    resolver : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() {
        super.setUp();
        this.resolver = new bare.createInstance(any,null,this.sdk);
    }
    test_creation() : void {
        expect(new bare.createInstance(any,null,this.sdk),isNotNull);
    }
    test_isDartUri_null_scheme() : void {
        let uri : lib4.Uri = lib4.Uri.parse("foo.dart");
        expect('',uri.scheme);
        expect(DartUriResolver.isDartUri(uri),isFalse);
    }
    test_resolve_dart_library() : void {
        let source : any = this.resolver.resolveAbsolute(lib4.Uri.parse('dart:core'));
        expect(source,isNotNull);
    }
    test_resolve_dart_nonExistingLibrary() : void {
        let result : any = this.resolver.resolveAbsolute(lib4.Uri.parse("dart:cor"));
        expect(result,isNull);
    }
    test_resolve_dart_part() : void {
        let source : any = this.resolver.resolveAbsolute(lib4.Uri.parse('dart:core/int.dart'));
        expect(source,isNotNull);
    }
    test_resolve_nonDart() : void {
        let result : any = this.resolver.resolveAbsolute(lib4.Uri.parse("package:some/file.dart"));
        expect(result,isNull);
    }
    test_restoreAbsolute_library() : void {
        let source : any = new _SourceMock();
        let fileUri : lib4.Uri = this.resourceProvider.pathContext.toUri(this.coreCorePath);
        when(source.uri).thenReturn(fileUri);
        let dartUri : lib4.Uri = this.resolver.restoreAbsolute(source);
        expect(dartUri.toString(),'dart:core');
    }
    test_restoreAbsolute_part() : void {
        let source : any = new _SourceMock();
        let fileUri : lib4.Uri = this.resourceProvider.pathContext.toUri(this.coreIntPath);
        when(source.uri).thenReturn(fileUri);
        let dartUri : lib4.Uri = this.resolver.restoreAbsolute(source);
        expect(dartUri.toString(),'dart:core/int.dart');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartUriResolverTest() {
    }
}

export class properties {
}
