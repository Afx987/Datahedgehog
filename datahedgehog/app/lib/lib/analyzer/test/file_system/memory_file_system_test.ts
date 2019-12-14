/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/file_system/memory_file_system_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FileSystemExceptionTest);
        defineReflectiveTests(FileTest);
        defineReflectiveTests(FolderTest);
        defineReflectiveTests(MemoryFileSourceExistingTest);
        defineReflectiveTests(MemoryFileSourceNotExistingTest);
        defineReflectiveTests(MemoryResourceProviderTest);
    });
};
export namespace FileSystemExceptionTest {
    export type Constructors = 'FileSystemExceptionTest';
    export type Interface = Omit<FileSystemExceptionTest, Constructors>;
}
@DartClass
export class FileSystemExceptionTest {
    test_constructor() : void {
        let exception = new bare.createInstance(any,null,'/my/path','my message');
        expect(exception.path,'/my/path');
        expect(exception.message,'my message');
        expect(exception.toString(),'FileSystemException(path=/my/path; message=my message)');
    }
    constructor() {
    }
    @defaultConstructor
    FileSystemExceptionTest() {
    }
}

export namespace FileTest {
    export type Constructors = 'FileTest';
    export type Interface = Omit<FileTest, Constructors>;
}
@DartClass
export class FileTest {
    provider : any;

    test_copy() : void {
        let contents : string = 'contents';
        let file : any = this.provider.newFile(this.provider.convertPath('/foo/file.txt'),contents);
        let destination : any = this.provider.getFolder(this.provider.convertPath('/destination'));
        let copy : any = file.copyTo(destination);
        expect(copy.parent,destination);
        expect(copy.shortName,file.shortName);
        expect(copy.readAsStringSync(),contents);
    }
    test_delete() : void {
        let file : any = this.provider.newFile(this.provider.convertPath('/foo/file.txt'),'content');
        expect(file.exists,isTrue);
        file.delete();
        expect(file.exists,isFalse);
    }
    test_equals_beforeAndAfterCreate() : void {
        let path : string = this.provider.convertPath('/file.txt');
        let file1 : any = this.provider.getResource(path);
        this.provider.newFile(path,'contents');
        let file2 : any = this.provider.getResource(path);
        expect(op(Op.EQUALS,file1,file2),isTrue);
    }
    test_equals_false() : void {
        let fileA : any = this.provider.getResource(this.provider.convertPath('/fileA.txt'));
        let fileB : any = this.provider.getResource(this.provider.convertPath('/fileB.txt'));
        expect(op(Op.EQUALS,fileA,new core.DartObject()),isFalse);
        expect(op(Op.EQUALS,fileA,fileB),isFalse);
    }
    test_equals_true() : void {
        let file : any = this.provider.getResource(this.provider.convertPath('/file.txt'));
        expect(op(Op.EQUALS,file,file),isTrue);
    }
    test_exists_false() : void {
        let file : any = this.provider.getResource(this.provider.convertPath('/file.txt'));
        expect(file,isNotNull);
        expect(file.exists,isFalse);
    }
    test_exists_true() : void {
        let path : string = this.provider.convertPath('/foo/file.txt');
        this.provider.newFile(path,'qwerty');
        let file : any = this.provider.getResource(path);
        expect(file,isNotNull);
        expect(file.exists,isTrue);
    }
    test_fullName() : void {
        let path : string = this.provider.convertPath('/foo/bar/file.txt');
        let file : any = this.provider.getResource(path);
        expect(file.path,path);
    }
    test_hashCode() : void {
        let path : string = this.provider.convertPath('/foo/bar/file.txt');
        let file1 : any = this.provider.getResource(path);
        this.provider.newFile(path,'contents');
        let file2 : any = this.provider.getResource(path);
        expect(file1.hashCode,equals(file2.hashCode));
    }
    test_isOrContains() : void {
        let path : string = this.provider.convertPath('/foo/bar/file.txt');
        let file : any = this.provider.getResource(path);
        expect(file.isOrContains(path),isTrue);
        expect(file.isOrContains(this.provider.convertPath('/foo/bar')),isFalse);
    }
    test_lengthSync_doesNotExist() : void {
        let file : any = this.provider.getResource(this.provider.convertPath('/test.txt'));
        expect(() =>  {
            file.lengthSync;
        },throwsA(properties._isFileSystemException));
    }
    test_lengthSync_exists() : void {
        let bytes : core.DartList<number> = new core.DartList.literal<number>(1,2,3,4,5);
        let file : any = this.provider.newFileWithBytes(this.provider.convertPath('/file.bin'),bytes);
        expect(file.lengthSync,bytes.length);
    }
    test_modificationStamp_doesNotExist() : void {
        let path : string = this.provider.convertPath('/foo/bar/file.txt');
        let file : any = this.provider.newFile(path,'qwerty');
        this.provider.deleteFile(path);
        expect(() =>  {
            file.modificationStamp;
        },throwsA(properties._isFileSystemException));
    }
    test_modificationStamp_exists() : void {
        let path : string = this.provider.convertPath('/foo/bar/file.txt');
        let file : any = this.provider.newFile(path,'qwerty');
        expect(file.modificationStamp,isNonNegative);
    }
    test_parent() : void {
        let path : string = this.provider.convertPath('/foo/bar/file.txt');
        this.provider.newFile(path,'content');
        let file : any = this.provider.getResource(path);
        let parent : any = file.parent;
        expect(parent,new bare.createInstance(any,null));
        expect(parent.path,equals(this.provider.convertPath('/foo/bar')));
    }
    test_readAsBytesSync_doesNotExist() : void {
        let file : any = this.provider.getResource(this.provider.convertPath('/test.bin'));
        expect(() =>  {
            file.readAsBytesSync();
        },throwsA(properties._isFileSystemException));
    }
    test_readAsBytesSync_exists() : void {
        let bytes : core.DartList<number> = new core.DartList.literal<number>(1,2,3,4,5);
        let file : any = this.provider.newFileWithBytes(this.provider.convertPath('/file.bin'),bytes);
        expect(file.readAsBytesSync(),bytes);
    }
    test_readAsStringSync_doesNotExist() : void {
        let file : any = this.provider.getResource(this.provider.convertPath('/test.txt'));
        expect(() =>  {
            file.readAsStringSync();
        },throwsA(properties._isFileSystemException));
    }
    test_readAsStringSync_exists() : void {
        let file : any = this.provider.newFile(this.provider.convertPath('/file.txt'),'abc');
        expect(file.readAsStringSync(),'abc');
    }
    test_renameSync_newDoesNotExist() : void {
        let oldPath : string = this.provider.convertPath('/foo/bar/file.txt');
        let newPath : string = this.provider.convertPath('/foo/bar/new-file.txt');
        let file : any = this.provider.newFile(oldPath,'text');
        let newFile : any = file.renameSync(newPath);
        expect(file.path,oldPath);
        expect(file.exists,isFalse);
        expect(newFile.path,newPath);
        expect(newFile.exists,isTrue);
        expect(newFile.readAsStringSync(),'text');
    }
    test_renameSync_newExists_file() : void {
        let oldPath : string = this.provider.convertPath('/foo/bar/file.txt');
        let newPath : string = this.provider.convertPath('/foo/bar/new-file.txt');
        let file : any = this.provider.newFile(oldPath,'text');
        this.provider.newFile(newPath,'new text');
        let newFile : any = file.renameSync(newPath);
        expect(file.path,oldPath);
        expect(file.exists,isFalse);
        expect(newFile.path,newPath);
        expect(newFile.exists,isTrue);
        expect(newFile.readAsStringSync(),'text');
    }
    test_renameSync_newExists_folder() : void {
        let oldPath : string = this.provider.convertPath('/foo/bar/file.txt');
        let newPath : string = this.provider.convertPath('/foo/bar/baz');
        let file : any = this.provider.newFile(oldPath,'text');
        this.provider.newFolder(newPath);
        expect(() =>  {
            file.renameSync(newPath);
        },throwsA(properties._isFileSystemException));
        expect(file.path,oldPath);
        expect(file.exists,isTrue);
    }
    test_resolveSymbolicLinksSync() : void {
        let file : any = this.provider.newFile(this.provider.convertPath('/test.txt'),'text');
        expect(file.resolveSymbolicLinksSync(),file);
    }
    test_shortName() : void {
        let file : any = this.provider.getResource(this.provider.convertPath('/foo/bar/file.txt'));
        expect(file.shortName,'file.txt');
    }
    test_toString() : void {
        let path : string = this.provider.convertPath('/foo/bar/file.txt');
        let file : any = this.provider.getResource(path);
        expect(file.toString(),path);
    }
    test_toUri() : void {
        let path : string = this.provider.convertPath('/foo/file.txt');
        let file : any = this.provider.newFile(path,'');
        expect(file.toUri(),this.provider.pathContext.toUri(path));
    }
    test_writeAsBytesSync_existing() : void {
        let content : core.DartList<number> = new core.DartList.literal<number>(1,2);
        let file : any = this.provider.newFileWithBytes(this.provider.convertPath('/foo/file.bin'),content);
        expect(file.readAsBytesSync(),content);
        content = new core.DartList.literal<number>(10,20);
        file.writeAsBytesSync(content);
        expect(file.readAsBytesSync(),content);
    }
    test_writeAsBytesSync_new() : void {
        let file : any = this.provider.getFile(this.provider.convertPath('/foo/file.bin'));
        expect(file.exists,false);
        let content : core.DartList<number> = new core.DartList.literal<number>(10,20);
        file.writeAsBytesSync(content);
        expect(file.exists,true);
        expect(file.readAsBytesSync(),content);
    }
    test_writeAsStringSync_existing() : void {
        let content : string = 'ab';
        let file : any = this.provider.newFile(this.provider.convertPath('/foo/file.txt'),content);
        expect(file.readAsStringSync(),content);
        content = 'CD';
        file.writeAsStringSync(content);
        expect(file.readAsStringSync(),content);
    }
    test_writeAsStringSync_new() : void {
        let file : any = this.provider.getFile(this.provider.convertPath('/foo/file.txt'));
        expect(file.exists,false);
        let content : string = 'ef';
        file.writeAsStringSync(content);
        expect(file.exists,true);
        expect(file.readAsStringSync(),content);
    }
    constructor() {
    }
    @defaultConstructor
    FileTest() {
        this.provider = new bare.createInstance(any,null);
    }
}

export namespace FolderTest {
    export type Constructors = 'FolderTest';
    export type Interface = Omit<FolderTest, Constructors>;
}
@DartClass
export class FolderTest {
    provider : any;

    path : string;

    folder : any;

    setUp() : void {
        this.path = this.provider.convertPath('/foo/bar');
        this.folder = this.provider.newFolder(this.path);
    }
    test_canonicalizePath() : void {
        expect(this.folder.canonicalizePath(this.provider.convertPath('baz')),equals(this.provider.convertPath('/foo/bar/baz')));
        expect(this.folder.canonicalizePath(this.provider.convertPath('/baz')),equals(this.provider.convertPath('/baz')));
        expect(this.folder.canonicalizePath(this.provider.convertPath('../baz')),equals(this.provider.convertPath('/foo/baz')));
        expect(this.folder.canonicalizePath(this.provider.convertPath('/a/b/../c')),equals(this.provider.convertPath('/a/c')));
        expect(this.folder.canonicalizePath(this.provider.convertPath('./baz')),equals(this.provider.convertPath('/foo/bar/baz')));
        expect(this.folder.canonicalizePath(this.provider.convertPath('/a/b/./c')),equals(this.provider.convertPath('/a/b/c')));
    }
    test_contains() : void {
        expect(this.folder.contains(this.provider.convertPath('/foo/bar/aaa.txt')),isTrue);
        expect(this.folder.contains(this.provider.convertPath('/foo/bar/aaa/bbb.txt')),isTrue);
        expect(this.folder.contains(this.provider.convertPath('/baz.txt')),isFalse);
        expect(this.folder.contains(this.provider.convertPath('/foo/bar')),isFalse);
    }
    test_copy() : void {
        let sourcePath : string = this.provider.convertPath('/source');
        let subdirPath : string = this.provider.convertPath('/source/subdir');
        this.provider.newFolder(sourcePath);
        this.provider.newFolder(subdirPath);
        this.provider.newFile(this.provider.convertPath('/source/file1.txt'),'file1');
        this.provider.newFile(this.provider.convertPath('/source/subdir/file2.txt'),'file2');
        let source : any = this.provider.getFolder(sourcePath);
        let destination : any = this.provider.getFolder(this.provider.convertPath('/destination'));
        let copy : any = source.copyTo(destination);
        expect(copy.parent,destination);
        this._verifyStructure(copy,source);
    }
    test_delete() : void {
        let folder : any = this.provider.newFolder(this.provider.convertPath('/foo'));
        let barFolder : any = this.provider.newFolder(this.provider.convertPath('/foo/bar'));
        let aFile : any = this.provider.newFile(this.provider.convertPath('/foo/bar/a.txt'),'');
        let bFile : any = this.provider.newFile(this.provider.convertPath('/foo/b.txt'),'');
        expect(folder.exists,isTrue);
        expect(barFolder.exists,isTrue);
        expect(aFile.exists,isTrue);
        expect(bFile.exists,isTrue);
        folder.delete();
        expect(folder.exists,isFalse);
        expect(barFolder.exists,isFalse);
        expect(aFile.exists,isFalse);
        expect(bFile.exists,isFalse);
    }
    test_equal_false() : void {
        let path2 : string = this.provider.convertPath('/foo/baz');
        let folder2 : any = this.provider.newFolder(path2);
        expect(op(Op.EQUALS,this.folder,folder2),isFalse);
    }
    test_equal_true() : void {
        let folder2 : any = this.provider.getResource(this.path);
        expect(op(Op.EQUALS,this.folder,folder2),isTrue);
    }
    test_getChild_doesNotExist() : void {
        let file : any = this.folder.getChild('file.txt');
        expect(file,isNotNull);
        expect(file.exists,isFalse);
    }
    test_getChild_file() : void {
        this.provider.newFile(this.provider.convertPath('/foo/bar/file.txt'),'content');
        let child : any = this.folder.getChild('file.txt');
        expect(child,isNotNull);
        expect(child.exists,isTrue);
    }
    test_getChild_folder() : void {
        this.provider.newFolder(this.provider.convertPath('/foo/bar/baz'));
        let child : any = this.folder.getChild('baz');
        expect(child,isNotNull);
        expect(child.exists,isTrue);
    }
    test_getChildAssumingFile_doesNotExist() : void {
        let child : any = this.folder.getChildAssumingFile('name');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChildAssumingFile_file() : void {
        this.provider.newFile(this.provider.convertPath('/foo/bar/name'),'content');
        let child : any = this.folder.getChildAssumingFile('name');
        expect(child,isNotNull);
        expect(child.exists,isTrue);
    }
    test_getChildAssumingFile_folder() : void {
        this.provider.newFolder(this.provider.convertPath('/foo/bar/name'));
        let child : any = this.folder.getChildAssumingFile('name');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChildAssumingFolder_doesNotExist() : void {
        let child : any = this.folder.getChildAssumingFolder('foldername');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChildAssumingFolder_file() : void {
        this.provider.newFile(this.provider.convertPath('/foo/bar/foldername'),'content');
        let child : any = this.folder.getChildAssumingFolder('foldername');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChildAssumingFolder_folder() : void {
        this.provider.newFolder(this.provider.convertPath('/foo/bar/foldername'));
        let child : any = this.folder.getChildAssumingFolder('foldername');
        expect(child,isNotNull);
        expect(child.exists,isTrue);
    }
    test_getChildren_doesNotExist() : void {
        this.folder = this.folder.getChildAssumingFolder('no-such-folder');
        expect(() =>  {
            this.folder.getChildren();
        },throwsA(properties._isFileSystemException));
    }
    test_getChildren_exists() : void {
        this.provider.newFile(this.provider.convertPath('/foo/bar/a.txt'),'aaa');
        this.provider.newFolder(this.provider.convertPath('/foo/bar/bFolder'));
        this.provider.newFile(this.provider.convertPath('/foo/bar/c.txt'),'ccc');
        let children : core.DartList<any> = this.folder.getChildren();
        expect(children,hasLength(3));
        children.sort((a : any,b : any) =>  {
            return a.shortName.compareTo(b.shortName);
        });
        children.forEach((child : any) =>  {
            expect(child.exists,true);
        });
        expect(children[0].shortName,'a.txt');
        expect(children[1].shortName,'bFolder');
        expect(children[2].shortName,'c.txt');
        expect(children[0],properties._isFile);
        expect(children[1],properties._isFolder);
        expect(children[2],properties._isFile);
    }
    test_hashCode() : void {
        let folder2 : any = this.provider.getResource(this.path);
        expect(this.folder.hashCode,folder2.hashCode);
    }
    test_isOrContains() : void {
        expect(this.folder.isOrContains(this.provider.convertPath('/foo/bar')),isTrue);
        expect(this.folder.isOrContains(this.provider.convertPath('/foo/bar/aaa.txt')),isTrue);
        expect(this.folder.isOrContains(this.provider.convertPath('/foo/bar/aaa/bbb.txt')),isTrue);
        expect(this.folder.isOrContains(this.provider.convertPath('/baz.txt')),isFalse);
    }
    test_parent() : void {
        let parent1 : any = this.folder.parent;
        expect(parent1,new bare.createInstance(any,null));
        expect(parent1.path,equals(this.provider.convertPath('/foo')));
        let parent2 : any = parent1.parent;
        expect(parent2,new bare.createInstance(any,null));
        expect(parent2.path,equals(this.provider.convertPath('/')));
        expect(parent2.parent,isNull);
    }
    test_toUri() : void {
        let path : string = this.provider.convertPath('/foo/directory');
        let folder : any = this.provider.newFolder(path);
        expect(folder.toUri(),this.provider.pathContext.toUri(path));
    }
    _verifyStructure(copy : any,source : any) : void {
        expect(copy.shortName,source.shortName);
        let sourceFiles : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let sourceFolders : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        for(let child of source.getChildren()) {
            if (is(child, any)) {
                sourceFiles.set(child.shortName,child);
            }else if (is(child, any)) {
                sourceFolders.set(child.shortName,child);
            }else {
                fail(`Unknown class of resource: ${child.runtimeType}`);
            }
        }
        let copyFiles : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let copyFolders : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        for(let child of source.getChildren()) {
            if (is(child, any)) {
                copyFiles.set(child.shortName,child);
            }else if (is(child, any)) {
                copyFolders.set(child.shortName,child);
            }else {
                fail(`Unknown class of resource: ${child.runtimeType}`);
            }
        }
        for(let fileName of sourceFiles.keys) {
            let sourceChild : any = sourceFiles.get(fileName);
            let copiedChild : any = copyFiles.get(fileName);
            if (op(Op.EQUALS,copiedChild,null)) {
                fail(`Failed to copy file ${sourceChild.path}`);
            }
            expect(copiedChild.readAsStringSync(),sourceChild.readAsStringSync(),{
                reason : `Incorrectly copied file ${sourceChild.path}`});
        }
        for(let fileName of sourceFolders.keys) {
            let sourceChild : any = sourceFolders.get(fileName);
            let copiedChild : any = copyFolders.get(fileName);
            if (op(Op.EQUALS,copiedChild,null)) {
                fail(`Failed to copy folder ${sourceChild.path}`);
            }
            this._verifyStructure(copiedChild,sourceChild);
        }
    }
    constructor() {
    }
    @defaultConstructor
    FolderTest() {
        this.provider = new bare.createInstance(any,null);
    }
}

export namespace MemoryFileSourceExistingTest {
    export type Constructors = 'MemoryFileSourceExistingTest';
    export type Interface = Omit<MemoryFileSourceExistingTest, Constructors>;
}
@DartClass
export class MemoryFileSourceExistingTest {
    provider : any;

    path : string;

    source : any;

    setUp() {
        this.path = this.provider.convertPath('/foo/test.dart');
        let file : any = this.provider.newFile(this.path,'library test;');
        this.source = file.createSource();
    }
    test_contents() : void {
        let contents : any = this.source.contents;
        expect(contents.data,'library test;');
    }
    test_encoding() : void {
        let expected : string = 'file:///foo/test.dart';
        if (op(Op.EQUALS,this.provider.pathContext.style,lib3.properties.windows.style)) {
            expected = 'file:///C:/foo/test.dart';
        }
        expect(this.source.encoding,expected);
    }
    test_equals_false_differentFile() : void {
        let fileA : any = this.provider.newFile(this.provider.convertPath('/foo/a.dart'),'');
        let fileB : any = this.provider.newFile(this.provider.convertPath('/foo/b.dart'),'');
        let sourceA : any = fileA.createSource();
        let sourceB : any = fileB.createSource();
        expect(op(Op.EQUALS,sourceA,sourceB),isFalse);
    }
    test_equals_false_notMemorySource() : void {
        let file : any = this.provider.newFile(this.path,'');
        let source : any = file.createSource();
        expect(op(Op.EQUALS,source,new core.DartObject()),isFalse);
    }
    test_equals_true_sameFile() : void {
        let file : any = this.provider.newFile(this.path,'');
        let sourceA : any = file.createSource();
        let sourceB : any = file.createSource();
        expect(op(Op.EQUALS,sourceA,sourceB),isTrue);
    }
    test_equals_true_self() : void {
        let file : any = this.provider.newFile(this.path,'');
        let source : any = file.createSource();
        expect(op(Op.EQUALS,source,source),isTrue);
    }
    test_exists() : void {
        expect(this.source.exists(),isTrue);
    }
    test_fullName() : void {
        expect(this.source.fullName,this.path);
    }
    test_hashCode() : void {
        this.source.hashCode;
    }
    test_resolveRelative() : void {
        let relative : lib4.Uri = resolveRelativeUri(this.source.uri,this.provider.pathContext.toUri(this.provider.pathContext.join('bar','baz.dart')));
        expect(relative,this.provider.pathContext.toUri(this.provider.convertPath('/foo/bar/baz.dart')));
    }
    test_resolveRelative_dart() : void {
        let file : any = this.provider.newFile(this.provider.convertPath('/sdk/lib/core/core.dart'),'');
        let source : any = file.createSource(lib4.Uri.parse('dart:core'));
        let resolved : lib4.Uri = resolveRelativeUri(source.uri,lib4.Uri.parse('int.dart'));
        expect(resolved.toString(),'dart:core/int.dart');
    }
    test_shortName() : void {
        expect(this.source.shortName,'test.dart');
    }
    constructor() {
    }
    @defaultConstructor
    MemoryFileSourceExistingTest() {
        this.provider = new bare.createInstance(any,null);
    }
}

export namespace MemoryFileSourceNotExistingTest {
    export type Constructors = 'MemoryFileSourceNotExistingTest';
    export type Interface = Omit<MemoryFileSourceNotExistingTest, Constructors>;
}
@DartClass
export class MemoryFileSourceNotExistingTest {
    provider : any;

    path : string;

    source : any;

    setUp() {
        this.path = this.provider.convertPath('/foo/test.dart');
        let file : any = this.provider.getResource(this.path);
        this.source = file.createSource();
    }
    test_contents() : void {
        expect(() =>  {
            this.source.contents;
        },throwsA(properties._isFileSystemException));
    }
    test_encoding() : void {
        let expected : string = 'file:///foo/test.dart';
        if (op(Op.EQUALS,this.provider.pathContext.style,lib3.properties.windows.style)) {
            expected = 'file:///C:/foo/test.dart';
        }
        expect(this.source.encoding,expected);
    }
    test_exists() : void {
        expect(this.source.exists(),isFalse);
    }
    test_fullName() : void {
        expect(this.source.fullName,this.path);
    }
    test_modificationStamp() : void {
        expect(this.source.modificationStamp,-1);
    }
    test_resolveRelative() : void {
        let relative : lib4.Uri = resolveRelativeUri(this.source.uri,this.provider.pathContext.toUri(this.provider.pathContext.join('bar','baz.dart')));
        expect(relative,this.provider.pathContext.toUri(this.provider.convertPath('/foo/bar/baz.dart')));
    }
    test_shortName() : void {
        expect(this.source.shortName,'test.dart');
    }
    constructor() {
    }
    @defaultConstructor
    MemoryFileSourceNotExistingTest() {
        this.provider = new bare.createInstance(any,null);
    }
}

export namespace MemoryResourceProviderTest {
    export type Constructors = 'MemoryResourceProviderTest';
    export type Interface = Omit<MemoryResourceProviderTest, Constructors>;
}
@DartClass
export class MemoryResourceProviderTest {
    provider : any;

    test_deleteFile_folder() : void {
        let path : string = this.provider.convertPath('/my/file');
        this.provider.newFolder(path);
        expect(() =>  {
            this.provider.deleteFile(path);
        },throwsA(new bare.createInstance(any,null)));
        expect(this.provider.getResource(path),new bare.createInstance(any,null));
    }
    test_deleteFile_notExistent() : void {
        let path : string = this.provider.convertPath('/my/file');
        expect(() =>  {
            this.provider.deleteFile(path);
        },throwsA(new bare.createInstance(any,null)));
        let file : any = this.provider.getResource(path);
        expect(file,isNotNull);
        expect(file.exists,isFalse);
    }
    test_deleteFile_success() : void {
        let path : string = this.provider.convertPath('/my/file');
        this.provider.newFile(path,'contents');
        let file : any = this.provider.getResource(path);
        expect(file,new bare.createInstance(any,null));
        expect(file.exists,isTrue);
        this.provider.deleteFile(path);
        expect(file.exists,isFalse);
    }
    test_getFolder_existing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = this.provider.convertPath('/foo/bar');
            this.provider.newFolder(path);
            let folder : any = this.provider.getFolder(path);
            expect(folder,isNotNull);
            expect(folder.path,path);
            expect(folder.exists,isTrue);
        } )());
    }

    test_getFolder_notExisting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = this.provider.convertPath('/foo/bar');
            let folder : any = this.provider.getFolder(path);
            expect(folder,isNotNull);
            expect(folder.path,path);
            expect(folder.exists,isFalse);
        } )());
    }

    test_getModificationTimes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : any = this.provider.newFile(this.provider.convertPath('/test.dart'),'');
            let source : any = file.createSource();
            let times : core.DartList<number> = await this.provider.getModificationTimes(new core.DartList.literal(source));
            expect(times,new core.DartList.literal(source.modificationStamp));
        } )());
    }

    test_getStateLocation_uniqueness() : void {
        let idOne : string = 'one';
        let folderOne : any = this.provider.getStateLocation(idOne);
        expect(folderOne,isNotNull);
        let idTwo : string = 'two';
        let folderTwo : any = this.provider.getStateLocation(idTwo);
        expect(folderTwo,isNotNull);
        expect(folderTwo,isNot(equals(folderOne)));
        expect(this.provider.getStateLocation(idOne),equals(folderOne));
    }
    test_modifyFile_isFolder() : void {
        let path : string = this.provider.convertPath('/my/file');
        this.provider.newFolder(path);
        expect(() =>  {
            this.provider.modifyFile(path,'contents');
        },throwsA(new bare.createInstance(any,null)));
        expect(this.provider.getResource(path),new bare.createInstance(any,null));
    }
    test_modifyFile_notExistent() : void {
        let path : string = this.provider.convertPath('/my/file');
        expect(() =>  {
            this.provider.modifyFile(path,'contents');
        },throwsA(new bare.createInstance(any,null)));
        let file : any = this.provider.getResource(path);
        expect(file,isNotNull);
        expect(file.exists,isFalse);
    }
    test_modifyFile_success() : void {
        let path : string = this.provider.convertPath('/my/file');
        this.provider.newFile(path,'contents 1');
        let file : any = this.provider.getResource(path);
        expect(file,new bare.createInstance(any,null));
        let source : any = (file as any).createSource();
        expect(source.contents.data,equals('contents 1'));
        this.provider.modifyFile(path,'contents 2');
        expect(source.contents.data,equals('contents 2'));
    }
    test_newFileWithBytes() : void {
        let path : string = this.provider.convertPath('/my/file');
        let bytes : core.DartList<number> = new core.DartList.literal<number>(1,2,3,4,5);
        this.provider.newFileWithBytes(path,bytes);
        let file : any = this.provider.getResource(path);
        expect(file,isNotNull);
        expect(file.exists,isTrue);
        expect(file.readAsBytesSync(),bytes);
    }
    test_newFolder_alreadyExists_asFile() : void {
        this.provider.newFile(this.provider.convertPath('/my/file'),'qwerty');
        expect(() =>  {
            this.provider.newFolder(this.provider.convertPath('/my/file'));
        },throwsA(new bare.createInstance(any,null)));
    }
    test_newFolder_alreadyExists_asFolder() : void {
        let path : string = this.provider.convertPath('/my/folder');
        let folder : any = this.provider.newFolder(path);
        let newFolder : any = this.provider.newFolder(path);
        expect(newFolder,folder);
    }
    test_newFolder_emptyPath() : void {
        expect(() =>  {
            this.provider.newFolder('');
        },throwsA(new bare.createInstance(any,null)));
    }
    test_newFolder_notAbsolute() : void {
        expect(() =>  {
            this.provider.newFolder('not/absolute');
        },throwsA(new bare.createInstance(any,null)));
    }
    test_watch_createFile() {
        let rootPath : string = this.provider.convertPath('/my/path');
        this.provider.newFolder(rootPath);
        return this._watchingFolder(rootPath,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            let path : string = this.provider.pathContext.join(rootPath,'foo');
            this.provider.newFile(path,'contents');
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                expect(changesReceived[0].type,equals(ChangeType.ADD));
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    test_watch_deleteFile() {
        let rootPath : string = this.provider.convertPath('/my/path');
        this.provider.newFolder(rootPath);
        let path : string = this.provider.pathContext.join(rootPath,'foo');
        this.provider.newFile(path,'contents 1');
        return this._watchingFolder(rootPath,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            this.provider.deleteFile(path);
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                expect(changesReceived[0].type,equals(ChangeType.REMOVE));
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    test_watch_modifyFile() {
        let rootPath : string = this.provider.convertPath('/my/path');
        this.provider.newFolder(rootPath);
        let path : string = this.provider.pathContext.join(rootPath,'foo');
        this.provider.newFile(path,'contents 1');
        return this._watchingFolder(rootPath,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            this.provider.modifyFile(path,'contents 2');
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                expect(changesReceived[0].type,equals(ChangeType.MODIFY));
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    test_watch_modifyFile_inSubDir() {
        let rootPath : string = this.provider.convertPath('/my/path');
        this.provider.newFolder(rootPath);
        let subdirPath : string = this.provider.pathContext.join(rootPath,'foo');
        this.provider.newFolder(subdirPath);
        let path : string = this.provider.pathContext.join(rootPath,'bar');
        this.provider.newFile(path,'contents 1');
        return this._watchingFolder(rootPath,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            this.provider.modifyFile(path,'contents 2');
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                expect(changesReceived[0].type,equals(ChangeType.MODIFY));
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    _delayed(computation : () => any) : async.Future<any> {
        return new async.Future.delayed(core.DartDuration.ZERO,computation);
    }
    _watchingFolder(path : string,test : (changesReceived : core.DartList<any>) => any) {
        let folder : any = this.provider.getResource(path);
        let changesReceived = new core.DartList.literal<any>();
        folder.changes.listen(changesReceived.add.bind(changesReceived));
        return test(changesReceived);
    }
    constructor() {
    }
    @defaultConstructor
    MemoryResourceProviderTest() {
        this.provider = new bare.createInstance(any,null);
    }
}

export class properties {
    private static __$_isFile;
    static get _isFile() { 
        if (this.__$_isFile===undefined) {
            this.__$_isFile = new bare.createInstance(any,null);
        }
        return this.__$_isFile;
    }
    static set _isFile(__$value : any)  { 
        this.__$_isFile = __$value;
    }

    private static __$_isFileSystemException;
    static get _isFileSystemException() { 
        if (this.__$_isFileSystemException===undefined) {
            this.__$_isFileSystemException = new bare.createInstance(any,null);
        }
        return this.__$_isFileSystemException;
    }
    static set _isFileSystemException(__$value : any)  { 
        this.__$_isFileSystemException = __$value;
    }

    private static __$_isFolder;
    static get _isFolder() { 
        if (this.__$_isFolder===undefined) {
            this.__$_isFolder = new bare.createInstance(any,null);
        }
        return this.__$_isFolder;
    }
    static set _isFolder(__$value : any)  { 
        this.__$_isFolder = __$value;
    }

}
