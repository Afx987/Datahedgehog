/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/source/source_resource_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./../context/mock_sdk";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FileSourceTest);
    });
};
export namespace FileSourceTest {
    export type Constructors = 'FileSourceTest';
    export type Interface = Omit<FileSourceTest, Constructors>;
}
@DartClass
export class FileSourceTest {
    resourceProvider : any;

    test_equals_false_differentFiles() : void {
        let file1 : any = this.resourceProvider.getFile("/does/not/exist1.dart");
        let file2 : any = this.resourceProvider.getFile("/does/not/exist2.dart");
        let source1 : any = new bare.createInstance(any,null,file1);
        let source2 : any = new bare.createInstance(any,null,file2);
        expect(op(Op.EQUALS,source1,source2),isFalse);
    }
    test_equals_false_null() : void {
        let file : any = this.resourceProvider.getFile("/does/not/exist1.dart");
        let source1 : any = new bare.createInstance(any,null,file);
        expect(op(Op.EQUALS,source1,null),isFalse);
    }
    test_equals_true() : void {
        let file1 : any = this.resourceProvider.getFile("/does/not/exist.dart");
        let file2 : any = this.resourceProvider.getFile("/does/not/exist.dart");
        let source1 : any = new bare.createInstance(any,null,file1);
        let source2 : any = new bare.createInstance(any,null,file2);
        expect(op(Op.EQUALS,source1,source2),isTrue);
    }
    test_fileReadMode() : void {
        expect(FileSource.fileReadMode('a'),'a');
        expect(FileSource.fileReadMode('a\n'),'a\n');
        expect(FileSource.fileReadMode('ab'),'ab');
        expect(FileSource.fileReadMode('abc'),'abc');
        expect(FileSource.fileReadMode('a\nb'),'a\nb');
        expect(FileSource.fileReadMode('ab'),'ab');
        expect(FileSource.fileReadMode('a\nb'),'a\nb');
    }
    test_fileReadMode_changed() : void {
        FileSource.fileReadMode = (s : string) =>  {
            return s + 'xyz';
        };
        expect(FileSource.fileReadMode('a'),'axyz');
        expect(FileSource.fileReadMode('a\n'),'a\nxyz');
        expect(FileSource.fileReadMode('ab'),'abxyz');
        expect(FileSource.fileReadMode('abc'),'abcxyz');
        FileSource.fileReadMode = (s : string) =>  {
            return s;
        };
    }
    test_fileReadMode_normalize_eol_always() : void {
        FileSource.fileReadMode = PhysicalResourceProvider.NORMALIZE_EOL_ALWAYS;
        expect(FileSource.fileReadMode('a'),'a');
        expect(FileSource.fileReadMode('\n'),'\n');
        expect(FileSource.fileReadMode('a\n'),'a\n');
        expect(FileSource.fileReadMode('\na'),'\na');
        expect(FileSource.fileReadMode('\n'),'\n');
        expect(FileSource.fileReadMode('a\n'),'a\n');
        expect(FileSource.fileReadMode('\na'),'\na');
        expect(FileSource.fileReadMode(''),'\n');
        expect(FileSource.fileReadMode('a'),'a\n');
        expect(FileSource.fileReadMode('a'),'\na');
        FileSource.fileReadMode = (s : string) =>  {
            return s;
        };
    }
    test_getEncoding() : void {
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.resourceProvider)));
        let fullPath : string = this.resourceProvider.convertPath("/does/not/exist.dart");
        let file : any = this.resourceProvider.getFile(fullPath);
        let source : any = new bare.createInstance(any,null,file);
        expect(factory.fromEncoding(source.encoding),source);
    }
    test_getFullName() : void {
        let fullPath : string = "/does/not/exist.dart";
        let file : any = this.resourceProvider.getFile(fullPath);
        let source : any = new bare.createInstance(any,null,file);
        expect(source.fullName,file.path);
    }
    test_getShortName() : void {
        let file : any = this.resourceProvider.getFile("/does/not/exist.dart");
        let source : any = new bare.createInstance(any,null,file);
        expect(source.shortName,"exist.dart");
    }
    test_hashCode() : void {
        let file1 : any = this.resourceProvider.getFile("/does/not/exist.dart");
        let file2 : any = this.resourceProvider.getFile("/does/not/exist.dart");
        let source1 : any = new bare.createInstance(any,null,file1);
        let source2 : any = new bare.createInstance(any,null,file2);
        expect(source2.hashCode,source1.hashCode);
    }
    test_isInSystemLibrary_contagious() : void {
        let sdk : any = this._createSdk();
        let resolver : any = new bare.createInstance(any,null,sdk);
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal(resolver));
        let result : any = resolver.resolveAbsolute(lib3.Uri.parse("dart:async"));
        expect(result,isNotNull);
        expect(result.isInSystemLibrary,isTrue);
        let partSource : any = factory.resolveUri(result,"stream.dart");
        expect(partSource,isNotNull);
        expect(partSource.isInSystemLibrary,isTrue);
    }
    test_isInSystemLibrary_false() : void {
        let file : any = this.resourceProvider.getFile("/does/not/exist.dart");
        let source : any = new bare.createInstance(any,null,file);
        expect(source,isNotNull);
        expect(source.fullName,file.path);
        expect(source.isInSystemLibrary,isFalse);
    }
    test_issue14500() : void {
        let source : any = new bare.createInstance(any,null,this.resourceProvider.getFile("/some/packages/foo:bar.dart"));
        expect(source,isNotNull);
        expect(source.exists(),isFalse);
    }
    test_resolveRelative_file_fileName() : void {
        if (OSUtilities.isWindows()) {
            return;
        }
        let file : any = this.resourceProvider.getFile("/a/b/test.dart");
        let source : any = new bare.createInstance(any,null,file);
        expect(source,isNotNull);
        let relative : lib3.Uri = resolveRelativeUri(source.uri,lib3.Uri.parse("lib.dart"));
        expect(relative,isNotNull);
        expect(relative.toString(),"file:///a/b/lib.dart");
    }
    test_resolveRelative_file_filePath() : void {
        if (OSUtilities.isWindows()) {
            return;
        }
        let file : any = this.resourceProvider.getFile("/a/b/test.dart");
        let source : any = new bare.createInstance(any,null,file);
        expect(source,isNotNull);
        let relative : lib3.Uri = resolveRelativeUri(source.uri,lib3.Uri.parse("c/lib.dart"));
        expect(relative,isNotNull);
        expect(relative.toString(),"file:///a/b/c/lib.dart");
    }
    test_resolveRelative_file_filePathWithParent() : void {
        if (OSUtilities.isWindows()) {
            return;
        }
        let file : any = this.resourceProvider.getFile("/a/b/test.dart");
        let source : any = new bare.createInstance(any,null,file);
        expect(source,isNotNull);
        let relative : lib3.Uri = resolveRelativeUri(source.uri,lib3.Uri.parse("../c/lib.dart"));
        expect(relative,isNotNull);
        expect(relative.toString(),"file:///a/c/lib.dart");
    }
    test_system() : void {
        let file : any = this.resourceProvider.getFile("/does/not/exist.dart");
        let source : any = new bare.createInstance(any,null,file,lib3.Uri.parse("dart:core"));
        expect(source,isNotNull);
        expect(source.fullName,file.path);
        expect(source.isInSystemLibrary,isTrue);
    }
    _createSdk() : any {
        return new lib4.MockSdk({
            resourceProvider : this.resourceProvider});
    }
    constructor() {
    }
    @defaultConstructor
    FileSourceTest() {
        this.resourceProvider = new bare.createInstance(any,null);
    }
}

export class properties {
}
