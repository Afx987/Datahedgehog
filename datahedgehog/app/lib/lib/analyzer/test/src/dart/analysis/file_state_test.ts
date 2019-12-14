/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/analysis/file_state_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../context/mock_sdk";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib5 from "@dart2ts/dart/uri";
import * as convert from "@dart2ts/dart/convert";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FileSystemStateTest);
    });
};
export namespace FileSystemStateTest {
    export type Constructors = 'FileSystemStateTest';
    export type Interface = Omit<FileSystemStateTest, Constructors>;
}
@DartClass
export class FileSystemStateTest {
    provider : any;

    sdk : lib3.MockSdk;

    byteStore : any;

    contentOverlay : any;

    logBuffer : core.DartStringBuffer;

    generatedUriResolver : any;

    sourceFactory : any;

    logger : any;

    fileSystemState : any;

    setUp() : void {
        this.logger = new bare.createInstance(any,null,this.logBuffer);
        this.sdk = new lib3.MockSdk({
            resourceProvider : this.provider});
        this.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),this.generatedUriResolver,new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['aaa',new core.DartList.literal(this.provider.getFolder(this._p('/aaa/lib')))],
            ['bbb',new core.DartList.literal(this.provider.getFolder(this._p('/bbb/lib')))]])),new bare.createInstance(any,null,this.provider)),null,this.provider);
        let analysisOptions : any = ((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null));
        this.fileSystemState = new bare.createInstance(any,null,this.logger,this.byteStore,this.contentOverlay,this.provider,this.sourceFactory,analysisOptions,new typed_data.Uint32List(0));
    }
    test_definedClassMemberNames() {
        let path : string = this._p('/aaa/lib/a.dart');
        this.provider.newFile(path,'class A {\n  int a, b;\n  A();\n  A.c();\n  d() {}\n  get e => null;\n  set f(_) {}\n}\nclass B {\n  g() {}\n}\n');
        let file : any = this.fileSystemState.getFileForPath(path);
        expect(file.definedClassMemberNames,unorderedEquals(new core.DartList.literal('a','b','d','e','f','g')));
    }
    test_definedTopLevelNames() {
        let path : string = this._p('/aaa/lib/a.dart');
        this.provider.newFile(path,'class A {}\nclass B = Object with A;\ntypedef C();\nD() {}\nget E => null;\nset F(_) {}\nvar G, H;\n');
        let file : any = this.fileSystemState.getFileForPath(path);
        expect(file.definedTopLevelNames,unorderedEquals(new core.DartList.literal('A','B','C','D','E','F','G','H')));
    }
    test_exportedTopLevelDeclarations_export() {
        let a : string = this._p('/aaa/lib/a.dart');
        let b : string = this._p('/aaa/lib/b.dart');
        this.provider.newFile(a,'class A {}\n');
        this.provider.newFile(b,'export \'a.dart\';\nclass B {}\n');
        let file : any = this.fileSystemState.getFileForPath(b);
        let declarations : core.DartMap<string,any> = file.exportedTopLevelDeclarations;
        expect(declarations.keys,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_exportedTopLevelDeclarations_export2_show() {
        let a : string = this._p('/aaa/lib/a.dart');
        let b : string = this._p('/aaa/lib/b.dart');
        let c : string = this._p('/aaa/lib/c.dart');
        this.provider.newFile(a,'class A1 {}\nclass A2 {}\nclass A3 {}\n');
        this.provider.newFile(b,'export \'a.dart\' show A1, A2;\nclass B1 {}\nclass B2 {}\n');
        this.provider.newFile(c,'export \'b.dart\' show A2, A3, B1;\nclass C {}\n');
        this._assertExportedTopLevelDeclarations(c,new core.DartList.literal('A2','B1','C'));
    }
    test_exportedTopLevelDeclarations_export_flushOnChange() {
        let a : string = this._p('/aaa/lib/a.dart');
        let b : string = this._p('/aaa/lib/b.dart');
        this.provider.newFile(a,'class A {}\n');
        this.provider.newFile(b,'export \'a.dart\';\nclass B {}\n');
        this._assertExportedTopLevelDeclarations(b,new core.DartList.literal('A','B'));
        this.provider.newFile(a,'class A {} class A2 {}');
        this.fileSystemState.getFileForPath(a).refresh();
        this._assertExportedTopLevelDeclarations(b,new core.DartList.literal('A','A2','B'));
    }
    test_exportedTopLevelDeclarations_export_hide() {
        let a : string = this._p('/aaa/lib/a.dart');
        let b : string = this._p('/aaa/lib/b.dart');
        this.provider.newFile(a,'class A1 {}\nclass A2 {}\nclass A3 {}\n');
        this.provider.newFile(b,'export \'a.dart\' hide A2;\nclass B {}\n');
        this._assertExportedTopLevelDeclarations(b,new core.DartList.literal('A1','A3','B'));
    }
    test_exportedTopLevelDeclarations_export_preferLocal() {
        let a : string = this._p('/aaa/lib/a.dart');
        let b : string = this._p('/aaa/lib/b.dart');
        this.provider.newFile(a,'class V {}\n');
        this.provider.newFile(b,'export \'a.dart\';\nint V;\n');
        let file : any = this.fileSystemState.getFileForPath(b);
        let declarations : core.DartMap<string,any> = file.exportedTopLevelDeclarations;
        expect(declarations.keys,unorderedEquals(new core.DartList.literal('V')));
        expect(declarations.get('V').kind,TopLevelDeclarationKind.variable);
    }
    test_exportedTopLevelDeclarations_export_show() {
        let a : string = this._p('/aaa/lib/a.dart');
        let b : string = this._p('/aaa/lib/b.dart');
        this.provider.newFile(a,'class A1 {}\nclass A2 {}\n');
        this.provider.newFile(b,'export \'a.dart\' show A2;\nclass B {}\n');
        this._assertExportedTopLevelDeclarations(b,new core.DartList.literal('A2','B'));
    }
    test_exportedTopLevelDeclarations_export_show2() {
        let a : string = this._p('/aaa/lib/a.dart');
        let b : string = this._p('/aaa/lib/b.dart');
        let c : string = this._p('/aaa/lib/c.dart');
        let d : string = this._p('/aaa/lib/d.dart');
        this.provider.newFile(a,'export \'b.dart\' show Foo;\nexport \'c.dart\' show Bar;\n');
        this.provider.newFile(b,'export \'d.dart\';\n');
        this.provider.newFile(c,'export \'d.dart\';\n');
        this.provider.newFile(d,'class Foo {}\nclass Bar {}\n');
        this._assertExportedTopLevelDeclarations(a,new core.DartList.literal('Foo','Bar'));
    }
    test_exportedTopLevelDeclarations_import() {
        let a : string = this._p('/aaa/lib/a.dart');
        let b : string = this._p('/aaa/lib/b.dart');
        this.provider.newFile(a,'class A {}\n');
        this.provider.newFile(b,'import \'a.dart\';\nclass B {}\n');
        this._assertExportedTopLevelDeclarations(b,new core.DartList.literal('B'));
    }
    test_exportedTopLevelDeclarations_parts() {
        let a : string = this._p('/aaa/lib/a.dart');
        let a2 : string = this._p('/aaa/lib/a2.dart');
        this.provider.newFile(a,'library lib;\npart \'a2.dart\';\nclass A1 {}\n');
        this.provider.newFile(a2,'part of lib;\nclass A2 {}\n');
        this._assertExportedTopLevelDeclarations(a,new core.DartList.literal('A1','A2'));
    }
    test_getFileForPath_doesNotExist() {
        let path : string = this._p('/aaa/lib/a.dart');
        let file : any = this.fileSystemState.getFileForPath(path);
        expect(file.path,path);
        expect(file.uri,lib5.Uri.parse('package:aaa/a.dart'));
        expect(file.content,'');
        expect(file.contentHash,FileSystemStateTest._md5(''));
        expect(this._excludeSdk(file.importedFiles),isEmpty);
        expect(file.exportedFiles,isEmpty);
        expect(file.partedFiles,isEmpty);
        expect(this._excludeSdk(file.directReferencedFiles),isEmpty);
        expect(file.isPart,isFalse);
        expect(file.library,isNull);
        expect(file.unlinked,isNotNull);
        expect(file.unlinked.classes,isEmpty);
    }
    test_getFileForPath_emptyUri() {
        let path : string = this._p('/test.dart');
        this.provider.newFile(path,'import \'\';\nexport \'\';\npart \'\';\n');
        let file : any = this.fileSystemState.getFileForPath(path);
        this._assertIsUnresolvedFile(op(Op.INDEX,file.importedFiles,0));
        this._assertIsUnresolvedFile(op(Op.INDEX,file.exportedFiles,0));
        this._assertIsUnresolvedFile(op(Op.INDEX,file.partedFiles,0));
    }
    test_getFileForPath_hasLibraryDirective_hasPartOfDirective() {
        let a : string = this._p('/test/lib/a.dart');
        this.provider.newFile(a,'library L;\npart of L;\n');
        let file : any = this.fileSystemState.getFileForPath(a);
        expect(file.isPart,isFalse);
    }
    test_getFileForPath_invalidUri() {
        let a : string = this._p('/aaa/lib/a.dart');
        let a1 : string = this._p('/aaa/lib/a1.dart');
        let a2 : string = this._p('/aaa/lib/a2.dart');
        let a3 : string = this._p('/aaa/lib/a3.dart');
        let content_a1 : string = 'import \'package:aaa/a1.dart\';\nimport \'[invalid uri]\';\n\nexport \'package:aaa/a2.dart\';\nexport \'[invalid uri]\';\n\npart \'a3.dart\';\npart \'[invalid uri]\';\n';
        this.provider.newFile(a,content_a1);
        let file : any = this.fileSystemState.getFileForPath(a);
        expect(this._excludeSdk(file.importedFiles),hasLength(2));
        expect(op(Op.INDEX,file.importedFiles,0).path,a1);
        expect(op(Op.INDEX,file.importedFiles,0).uri,lib5.Uri.parse('package:aaa/a1.dart'));
        expect(op(Op.INDEX,file.importedFiles,0).source,isNotNull);
        this._assertIsUnresolvedFile(op(Op.INDEX,file.importedFiles,1));
        expect(this._excludeSdk(file.exportedFiles),hasLength(2));
        expect(op(Op.INDEX,file.exportedFiles,0).path,a2);
        expect(op(Op.INDEX,file.exportedFiles,0).uri,lib5.Uri.parse('package:aaa/a2.dart'));
        expect(op(Op.INDEX,file.exportedFiles,0).source,isNotNull);
        this._assertIsUnresolvedFile(op(Op.INDEX,file.exportedFiles,1));
        expect(this._excludeSdk(file.partedFiles),hasLength(2));
        expect(op(Op.INDEX,file.partedFiles,0).path,a3);
        expect(op(Op.INDEX,file.partedFiles,0).uri,lib5.Uri.parse('package:aaa/a3.dart'));
        expect(op(Op.INDEX,file.partedFiles,0).source,isNotNull);
        this._assertIsUnresolvedFile(op(Op.INDEX,file.partedFiles,1));
    }
    test_getFileForPath_library() {
        let a1 : string = this._p('/aaa/lib/a1.dart');
        let a2 : string = this._p('/aaa/lib/a2.dart');
        let a3 : string = this._p('/aaa/lib/a3.dart');
        let a4 : string = this._p('/aaa/lib/a4.dart');
        let b1 : string = this._p('/bbb/lib/b1.dart');
        let b2 : string = this._p('/bbb/lib/b2.dart');
        let content_a1 : string = 'import \'package:aaa/a2.dart\';\nimport \'package:bbb/b1.dart\';\nexport \'package:bbb/b2.dart\';\nexport \'package:aaa/a3.dart\';\npart \'a4.dart\';\n\nclass A1 {}\n';
        this.provider.newFile(a1,content_a1);
        let file : any = this.fileSystemState.getFileForPath(a1);
        expect(file.path,a1);
        expect(file.content,content_a1);
        expect(file.contentHash,FileSystemStateTest._md5(content_a1));
        expect(file.isPart,isFalse);
        expect(file.library,isNull);
        expect(file.unlinked,isNotNull);
        expect(file.unlinked.classes,hasLength(1));
        expect(op(Op.INDEX,file.unlinked.classes,0).name,'A1');
        expect(this._excludeSdk(file.importedFiles),hasLength(2));
        expect(op(Op.INDEX,file.importedFiles,0).path,a2);
        expect(op(Op.INDEX,file.importedFiles,0).uri,lib5.Uri.parse('package:aaa/a2.dart'));
        expect(op(Op.INDEX,file.importedFiles,0).source,isNotNull);
        expect(op(Op.INDEX,file.importedFiles,1).path,b1);
        expect(op(Op.INDEX,file.importedFiles,1).uri,lib5.Uri.parse('package:bbb/b1.dart'));
        expect(op(Op.INDEX,file.importedFiles,1).source,isNotNull);
        expect(file.exportedFiles,hasLength(2));
        expect(op(Op.INDEX,file.exportedFiles,0).path,b2);
        expect(op(Op.INDEX,file.exportedFiles,0).uri,lib5.Uri.parse('package:bbb/b2.dart'));
        expect(op(Op.INDEX,file.exportedFiles,0).source,isNotNull);
        expect(op(Op.INDEX,file.exportedFiles,1).path,a3);
        expect(op(Op.INDEX,file.exportedFiles,1).uri,lib5.Uri.parse('package:aaa/a3.dart'));
        expect(op(Op.INDEX,file.exportedFiles,1).source,isNotNull);
        expect(file.partedFiles,hasLength(1));
        expect(op(Op.INDEX,file.partedFiles,0).path,a4);
        expect(op(Op.INDEX,file.partedFiles,0).uri,lib5.Uri.parse('package:aaa/a4.dart'));
        expect(this._excludeSdk(file.directReferencedFiles),hasLength(5));
        expect(this.fileSystemState.getFilesForPath(a1),new core.DartList.literal(file));
    }
    test_getFileForPath_onlyDartFiles() {
        let not_dart : string = this._p('/test/lib/not_dart.txt');
        let a : string = this._p('/test/lib/a.dart');
        let b : string = this._p('/test/lib/b.dart');
        let c : string = this._p('/test/lib/c.dart');
        let d : string = this._p('/test/lib/d.dart');
        this.provider.newFile(a,'library lib;\nimport \'dart:math\';\nimport \'b.dart\';\nimport \'not_dart.txt\';\nexport \'c.dart\';\nexport \'not_dart.txt\';\npart \'d.dart\';\npart \'not_dart.txt\';\n');
        let file : any = this.fileSystemState.getFileForPath(a);
        expect(this._excludeSdk(file.importedFiles).map((f : any) =>  {
            return f.path;
        }),unorderedEquals(new core.DartList.literal(b,not_dart)));
        expect(file.exportedFiles.map((f : any) =>  {
            return f.path;
        }),unorderedEquals(new core.DartList.literal(c,not_dart)));
        expect(file.partedFiles.map((f : any) =>  {
            return f.path;
        }),unorderedEquals(new core.DartList.literal(d,not_dart)));
        expect(this._excludeSdk(this.fileSystemState.knownFilePaths),unorderedEquals(new core.DartList.literal(a,b,c,d,not_dart)));
    }
    test_getFileForPath_part() {
        let a1 : string = this._p('/aaa/lib/a1.dart');
        let a2 : string = this._p('/aaa/lib/a2.dart');
        this.provider.newFile(a1,'library a1;\npart \'a2.dart\';\n');
        this.provider.newFile(a2,'part of a1;\nclass A2 {}\n');
        let file_a2 : any = this.fileSystemState.getFileForPath(a2);
        expect(file_a2.path,a2);
        expect(file_a2.uri,lib5.Uri.parse('package:aaa/a2.dart'));
        expect(file_a2.unlinked,isNotNull);
        expect(file_a2.unlinked.classes,hasLength(1));
        expect(op(Op.INDEX,file_a2.unlinked.classes,0).name,'A2');
        expect(this._excludeSdk(file_a2.importedFiles),isEmpty);
        expect(file_a2.exportedFiles,isEmpty);
        expect(file_a2.partedFiles,isEmpty);
        expect(this._excludeSdk(file_a2.directReferencedFiles),isEmpty);
        expect(file_a2.isPart,isTrue);
        expect(file_a2.library,isNull);
        let file_a1 : any = this.fileSystemState.getFileForPath(a1);
        expect(file_a1.partedFiles,hasLength(1));
        expect(op(Op.INDEX,file_a1.partedFiles,0),same(file_a2));
        expect(this._excludeSdk(file_a1.directReferencedFiles),unorderedEquals(new core.DartList.literal(file_a2)));
        expect(file_a2.library,same(file_a1));
        this.provider.newFile(a1,'library a1;\npart \'not-a2.dart\';\n');
        file_a1.refresh();
        expect(file_a2.library,isNull);
    }
    test_getFileForPath_samePath() {
        let path : string = this._p('/aaa/lib/a.dart');
        let file1 : any = this.fileSystemState.getFileForPath(path);
        let file2 : any = this.fileSystemState.getFileForPath(path);
        expect(file2,same(file1));
    }
    test_getFileForUri_packageVsFileUri() {
        let path : string = this._p('/aaa/lib/a.dart');
        let packageUri = lib5.Uri.parse('package:aaa/a.dart');
        let fileUri = this.provider.pathContext.toUri(path);
        let filePackageUri : any = this.fileSystemState.getFileForUri(packageUri);
        let fileFileUri : any = this.fileSystemState.getFileForUri(fileUri);
        expect(filePackageUri,isNot(same(fileFileUri)));
        expect(filePackageUri.path,path);
        expect(filePackageUri.uri,packageUri);
        expect(fileFileUri.path,path);
        expect(fileFileUri.uri,fileUri);
        let files = this.fileSystemState.getFilesForPath(path);
        expect(files,new core.DartList.literal(filePackageUri,fileFileUri));
    }
    test_hasUri() {
        let uri : lib5.Uri = lib5.Uri.parse('package:aaa/foo.dart');
        let templatePath : string = this._p('/aaa/lib/foo.dart');
        let generatedPath : string = this._p('/generated/aaa/lib/foo.dart');
        let generatedSource : any = new _SourceMock();
        when(generatedSource.fullName).thenReturn(generatedPath);
        when(generatedSource.uri).thenReturn(uri);
        when(this.generatedUriResolver.resolveAbsolute(uri,uri)).thenReturn(generatedSource);
        expect(this.fileSystemState.hasUri(templatePath),isFalse);
        expect(this.fileSystemState.hasUri(generatedPath),isTrue);
    }
    test_knownFilesSetChanges() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.fileSystemState.test.knownFilesDelay = new core.DartDuration({
                milliseconds : 5});
            let a : string = this._p('/test/lib/a.dart');
            let b : string = this._p('/test/lib/b.dart');
            let c : string = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'import \'b.dart\';\n');
            this.provider.newFile(b,'');
            this.provider.newFile(c,'');
            let broadcastEvents : async.DartStream<any> = this.fileSystemState.knownFilesSetChanges.asBroadcastStream();
            let file : any = this.fileSystemState.getFileForPath(a);
            {
                let event : any = await broadcastEvents.first;
                expect(event.added,contains(a));
                expect(event.added,contains(b));
                expect(event.removed,isEmpty);
            }
            this.provider.newFile(a,'import \'b.dart\';\nimport \'c.dart\';\n');
            file.refresh();
            {
                let event : any = await broadcastEvents.first;
                expect(event.added,contains(c));
                expect(event.removed,isEmpty);
            }
        } )());
    }

    test_referencedNames() {
        let path : string = this._p('/aaa/lib/a.dart');
        this.provider.newFile(path,'A foo(B p) {\n  foo(null);\n  C c = new C(p);\n  return c;\n}\n');
        let file : any = this.fileSystemState.getFileForPath(path);
        expect(file.referencedNames,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_refresh_differentApiSignature() {
        let path : string = this._p('/aaa/lib/a.dart');
        this.provider.newFile(path,'class A {}\n');
        let file : any = this.fileSystemState.getFileForPath(path);
        expect(op(Op.INDEX,file.unlinked.classes,0).name,'A');
        let signature : core.DartList<number> = file.apiSignature;
        this.provider.newFile(path,'class B {}\n');
        let apiSignatureChanged : boolean = file.refresh();
        expect(apiSignatureChanged,isTrue);
        expect(op(Op.INDEX,file.unlinked.classes,0).name,'B');
        expect(file.apiSignature,isNot(signature));
    }
    test_refresh_sameApiSignature() {
        let path : string = this._p('/aaa/lib/a.dart');
        this.provider.newFile(path,'class C {\n  foo() {\n    print(111);\n  }\n}\n');
        let file : any = this.fileSystemState.getFileForPath(path);
        let signature : core.DartList<number> = file.apiSignature;
        this.provider.newFile(path,'class C {\n  foo() {\n    print(222);\n  }\n}\n');
        let apiSignatureChanged : boolean = file.refresh();
        expect(apiSignatureChanged,isFalse);
        expect(file.apiSignature,signature);
    }
    test_topLevelDeclarations() {
        let path : string = this._p('/aaa/lib/a.dart');
        this.provider.newFile(path,'class C {}\ntypedef F();\nenum E {E1, E2}\nvoid f() {}\nvar V1;\nget V2 => null;\nset V3(_) {}\nget V4 => null;\nset V4(_) {}\n\nclass _C {}\ntypedef _F();\nenum _E {E1, E2}\nvoid _f() {}\nvar _V1;\nget _V2 => null;\nset _V3(_) {}\n');
        let file : any = this.fileSystemState.getFileForPath(path);
        let declarations : core.DartMap<string,any> = file.topLevelDeclarations;
        var assertHas : (name : string,kind : any) => void = (name : string,kind : any) : void =>  {
            expect(((t)=>(!!t)?t.kind:null)(declarations.get(name)),kind);
        };
        expect(declarations.keys,unorderedEquals(new core.DartList.literal('C','F','E','f','V1','V2','V3','V4')));
        assertHas('C',TopLevelDeclarationKind.type);
        assertHas('F',TopLevelDeclarationKind.type);
        assertHas('E',TopLevelDeclarationKind.type);
        assertHas('f',TopLevelDeclarationKind.function);
        assertHas('V1',TopLevelDeclarationKind.variable);
        assertHas('V2',TopLevelDeclarationKind.variable);
        assertHas('V3',TopLevelDeclarationKind.variable);
        assertHas('V4',TopLevelDeclarationKind.variable);
    }
    test_transitiveFiles() {
        let pa : string = this._p('/aaa/lib/a.dart');
        let pb : string = this._p('/aaa/lib/b.dart');
        let pc : string = this._p('/aaa/lib/c.dart');
        let pd : string = this._p('/aaa/lib/d.dart');
        let fa : any = this.fileSystemState.getFileForPath(pa);
        let fb : any = this.fileSystemState.getFileForPath(pb);
        let fc : any = this.fileSystemState.getFileForPath(pc);
        let fd : any = this.fileSystemState.getFileForPath(pd);
        fa.transitiveFiles;
        fb.transitiveFiles;
        fc.transitiveFiles;
        fd.transitiveFiles;
        expect(this._excludeSdk(this.fileSystemState.test.filesWithoutTransitiveFiles),isEmpty);
        this.provider.newFile(pa,"");
        this._assertTransitiveFiles(fa,new core.DartList.literal(fa));
        this.provider.newFile(pa,"import 'b.dart';");
        fa.refresh();
        this._assertFilesWithoutTransitiveFiles(new core.DartList.literal(fa));
        this._assertTransitiveFiles(fa,new core.DartList.literal(fa,fb));
        this.provider.newFile(pb,"import 'c.dart';");
        fb.refresh();
        this._assertFilesWithoutTransitiveFiles(new core.DartList.literal(fa,fb));
        this._assertTransitiveFiles(fa,new core.DartList.literal(fa,fb,fc));
        this._assertTransitiveFiles(fb,new core.DartList.literal(fb,fc));
        this._assertFilesWithoutTransitiveFiles(new core.DartList.literal());
        this.provider.newFile(pb,"export 'd.dart';");
        fb.refresh();
        this._assertFilesWithoutTransitiveFiles(new core.DartList.literal(fa,fb));
        this._assertTransitiveFiles(fa,new core.DartList.literal(fa,fb,fd));
        this._assertTransitiveFiles(fb,new core.DartList.literal(fb,fd));
        this._assertFilesWithoutTransitiveFiles(new core.DartList.literal());
        this.provider.newFile(pa,"");
        fa.refresh();
        this._assertFilesWithoutTransitiveFiles(new core.DartList.literal(fa));
        this._assertTransitiveFiles(fa,new core.DartList.literal(fa));
    }
    test_transitiveFiles_cycle() {
        let pa : string = this._p('/aaa/lib/a.dart');
        let pb : string = this._p('/aaa/lib/b.dart');
        this.provider.newFile(pa,"import 'b.dart';");
        this.provider.newFile(pb,"import 'a.dart';");
        let fa : any = this.fileSystemState.getFileForPath(pa);
        let fb : any = this.fileSystemState.getFileForPath(pb);
        fa.transitiveFiles;
        fb.transitiveFiles;
        this._assertFilesWithoutTransitiveFiles(new core.DartList.literal());
        this._assertTransitiveFiles(fa,new core.DartList.literal(fa,fb));
        this._assertTransitiveFiles(fb,new core.DartList.literal(fa,fb));
        this.provider.newFile(pa,"");
        fa.refresh();
        this._assertFilesWithoutTransitiveFiles(new core.DartList.literal(fa,fb));
        this._assertTransitiveFiles(fa,new core.DartList.literal(fa));
        this._assertTransitiveFiles(fb,new core.DartList.literal(fa,fb));
    }
    test_transitiveSignature() {
        let pa : string = this._p('/aaa/lib/a.dart');
        let pb : string = this._p('/aaa/lib/b.dart');
        let pc : string = this._p('/aaa/lib/c.dart');
        let pd : string = this._p('/aaa/lib/d.dart');
        this.provider.newFile(pa,"class A {}");
        this.provider.newFile(pb,"import 'a.dart';");
        this.provider.newFile(pc,"import 'b.dart';");
        this.provider.newFile(pd,"class D {}");
        let fa : any = this.fileSystemState.getFileForPath(pa);
        let fb : any = this.fileSystemState.getFileForPath(pb);
        let fc : any = this.fileSystemState.getFileForPath(pc);
        let fd : any = this.fileSystemState.getFileForPath(pd);
        expect(fa.transitiveSignature,isNotNull);
        expect(fb.transitiveSignature,isNotNull);
        expect(fc.transitiveSignature,isNotNull);
        expect(fd.transitiveSignature,isNotNull);
        expect(this._excludeSdk(this.fileSystemState.test.filesWithoutTransitiveFiles),isEmpty);
        this.provider.newFile(pa,"class A {} // the same API signature");
        fa.refresh();
        expect(this._excludeSdk(this.fileSystemState.test.filesWithoutTransitiveFiles),isEmpty);
        this.provider.newFile(pa,"class A2 {}");
        fa.refresh();
        this._assertFilesWithoutTransitiveSignatures(new core.DartList.literal(fa,fb,fc));
    }
    _assertExportedTopLevelDeclarations(path : string,expected : core.DartList<string>) : void {
        let file : any = this.fileSystemState.getFileForPath(path);
        let declarations : core.DartMap<string,any> = file.exportedTopLevelDeclarations;
        expect(declarations.keys,unorderedEquals(expected));
    }
    _assertFilesWithoutTransitiveFiles(expected : core.DartList<any>) : void {
        let actual = this.fileSystemState.test.filesWithoutTransitiveFiles;
        expect(this._excludeSdk(actual),unorderedEquals(expected));
    }
    _assertFilesWithoutTransitiveSignatures(expected : core.DartList<any>) : void {
        let actual = this.fileSystemState.test.filesWithoutTransitiveSignature;
        expect(this._excludeSdk(actual),unorderedEquals(expected));
    }
    _assertIsUnresolvedFile(file : any) : void {
        expect(file.path,isNull);
        expect(file.uri,isNull);
        expect(file.source,isNull);
    }
    _assertTransitiveFiles(file : any,expected : core.DartList<any>) : void {
        expect(this._excludeSdk(file.transitiveFiles),unorderedEquals(expected));
    }
    _excludeSdk<T>(files : core.DartIterable<T>) : core.DartList<T> {
        return files.where((file : core.DartObject) =>  {
            if (is(file, any)) {
                return ((t)=>(!!t)?t.scheme:null)(file.uri) != 'dart';
            }else {
                return !new core.DartString((file as string)).startsWith(this._p('/sdk'));
            }
        }).toList();
    }
    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    static _md5(content : string) : string {
        return hex.encode(md5.convert(convert.properties.UTF8.encode(content)).bytes);
    }
    constructor() {
    }
    @defaultConstructor
    FileSystemStateTest() {
        this.provider = new bare.createInstance(any,null);
        this.byteStore = new bare.createInstance(any,null);
        this.contentOverlay = new bare.createInstance(any,null);
        this.logBuffer = new core.DartStringBuffer();
        this.generatedUriResolver = new _GeneratedUriResolverMock();
    }
}

export namespace _GeneratedUriResolverMock {
    export type Constructors = '_GeneratedUriResolverMock';
    export type Interface = Omit<_GeneratedUriResolverMock, Constructors>;
}
@DartClass
@Implements(any)
export class _GeneratedUriResolverMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _GeneratedUriResolverMock() {
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

export class properties {
}
