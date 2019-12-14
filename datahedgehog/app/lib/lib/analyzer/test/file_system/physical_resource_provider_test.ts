/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/file_system/physical_resource_provider_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts.packages/path/lib/src/context";
import * as lib6 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    if (!new boolean.fromEnvironment('skipPhysicalResourceProviderTests')) {
        defineReflectiveSuite(() =>  {
            defineReflectiveTests(PhysicalResourceProviderTest);
            defineReflectiveTests(FileTest);
            defineReflectiveTests(FolderTest);
        });
    }
};
export var join : (part1 : string,part2? : string,part3? : string) => string = (part1 : string,part2? : string,part3? : string) : string =>  {
    return lib3.join(part1,part2,part3);
};
export namespace _BaseTest {
    export type Constructors = '_BaseTest';
    export type Interface = Omit<_BaseTest, Constructors>;
}
@DartClass
export class _BaseTest {
    tempDirectory : io.Directory;

    tempPath : string;

    setUp() {
        this.tempDirectory = io.Directory.systemTemp.createTempSync('test_resource');
        this.tempPath = this.tempDirectory.absolute.path;
    }
    tearDown() {
        this.tempDirectory.deleteSync({
            recursive : true});
    }
    constructor() {
    }
    @defaultConstructor
    _BaseTest() {
    }
}

export namespace FileTest {
    export type Constructors = _BaseTest.Constructors | 'FileTest';
    export type Interface = Omit<FileTest, Constructors>;
}
@DartClass
export class FileTest extends _BaseTest {
    path : string;

    file : any;

    setUp() {
        super.setUp();
        this.path = join(this.tempPath,'file.txt');
        this.file = PhysicalResourceProvider.INSTANCE.getResource(this.path);
    }
    test_copy() : void {
        let provider : any = PhysicalResourceProvider.INSTANCE;
        let contents : string = 'contents';
        new io.File(this.path).writeAsStringSync(contents);
        let destination : any = provider.getFolder(join(this.tempPath,'destination'));
        let copy : any = this.file.copyTo(destination);
        expect(copy.parent,destination);
        expect(copy.shortName,this.file.shortName);
        expect(copy.readAsStringSync(),contents);
    }
    test_createSource() : void {
        new io.File(this.path).writeAsStringSync('contents');
        let source : any = this.file.createSource();
        expect(source.uriKind,UriKind.FILE_URI);
        expect(source.exists(),isTrue);
        expect(source.contents.data,'contents');
    }
    test_delete() : void {
        new io.File(this.path).writeAsStringSync('contents');
        expect(this.file.exists,isTrue);
        this.file.delete();
        expect(this.file.exists,isFalse);
    }
    test_equals_differentPaths() : void {
        let path2 : string = join(this.tempPath,'file2.txt');
        let file2 : any = PhysicalResourceProvider.INSTANCE.getResource(path2);
        expect(op(Op.EQUALS,this.file,file2),isFalse);
    }
    test_equals_samePath() : void {
        new io.File(this.path).writeAsStringSync('contents');
        let file2 : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(op(Op.EQUALS,this.file,file2),isTrue);
    }
    test_exists_false() : void {
        expect(this.file.exists,isFalse);
    }
    test_exists_true() : void {
        new io.File(this.path).writeAsStringSync('contents');
        expect(this.file.exists,isTrue);
    }
    test_fullName() : void {
        expect(this.file.path,this.path);
    }
    test_hashCode() : void {
        new io.File(this.path).writeAsStringSync('contents');
        let file2 : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(this.file.hashCode,equals(file2.hashCode));
    }
    test_isOrContains() : void {
        let file : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(file.isOrContains(this.path),isTrue);
        expect(file.isOrContains('foo'),isFalse);
    }
    test_lengthSync_doesNotExist() : void {
        let file : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(() =>  {
            file.lengthSync;
        },throwsA(properties._isFileSystemException));
    }
    test_lengthSync_exists() : void {
        let bytes : core.DartList<number> = new core.DartList.literal<number>(1,2,3,4,5);
        new io.File(this.path).writeAsBytesSync(bytes);
        expect(this.file.lengthSync,bytes.length);
    }
    test_modificationStamp_doesNotExist() : void {
        let file : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(() =>  {
            file.modificationStamp;
        },throwsA(properties._isFileSystemException));
    }
    test_modificationStamp_exists() : void {
        new io.File(this.path).writeAsStringSync('contents');
        let file : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(file.modificationStamp,isNonNegative);
    }
    test_parent() : void {
        let parent : any = this.file.parent;
        expect(parent,new bare.createInstance(any,null));
        expect(parent.path,equals(this.tempPath));
    }
    test_readAsBytesSync_doesNotExist() : void {
        let file : any = PhysicalResourceProvider.INSTANCE.getResource('/test.bin');
        expect(() =>  {
            file.readAsBytesSync();
        },throwsA(properties._isFileSystemException));
    }
    test_readAsBytesSync_exists() : void {
        let bytes : core.DartList<number> = new core.DartList.literal<number>(1,2,3,4,5);
        new io.File(this.path).writeAsBytesSync(bytes);
        expect(this.file.readAsBytesSync(),bytes);
    }
    test_readAsStringSync_doesNotExist() : void {
        let file : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(() =>  {
            file.readAsStringSync();
        },throwsA(properties._isFileSystemException));
    }
    test_readAsStringSync_exists() : void {
        new io.File(this.path).writeAsStringSync('abc');
        let file : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(file.readAsStringSync(),'abc');
    }
    test_renameSync_newDoesNotExist() : void {
        let oldPath : string = `${this.tempPath}/file.txt`;
        let newPath : string = `${this.tempPath}/new-file.txt`;
        new io.File(oldPath).writeAsStringSync('text');
        let file : any = PhysicalResourceProvider.INSTANCE.getResource(oldPath);
        let newFile : any = file.renameSync(newPath);
        expect(file.path,oldPath);
        expect(file.exists,isFalse);
        expect(newFile.path,newPath);
        expect(newFile.exists,isTrue);
        expect(newFile.readAsStringSync(),'text');
    }
    test_renameSync_newExists_file() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let oldPath : string = `${this.tempPath}/file.txt`;
            let newPath : string = `${this.tempPath}/new-file.txt`;
            new io.File(oldPath).writeAsStringSync('text');
            new io.File(newPath).writeAsStringSync('new text');
            let file : any = PhysicalResourceProvider.INSTANCE.getResource(oldPath);
            let newFile : any = file.renameSync(newPath);
            expect(file.path,oldPath);
            expect(file.exists,isFalse);
            expect(newFile.path,newPath);
            expect(newFile.exists,isTrue);
            expect(newFile.readAsStringSync(),'text');
        } )());
    }

    test_renameSync_newExists_folder() : void {
        let oldPath : string = `${this.tempPath}/file.txt`;
        let newPath : string = `${this.tempPath}/foo`;
        new io.File(oldPath).writeAsStringSync('text');
        new io.Directory(newPath).createSync();
        let file : any = PhysicalResourceProvider.INSTANCE.getResource(oldPath);
        expect(() =>  {
            file.renameSync(newPath);
        },throwsA(properties._isFileSystemException));
        expect(file.path,oldPath);
        expect(file.exists,isTrue);
    }
    test_resolveSymbolicLinksSync_links() : void {
        let pathContext : lib5.Context = PhysicalResourceProvider.INSTANCE.pathContext;
        let pathA : string = pathContext.join(this.tempPath,'a');
        let pathB : string = pathContext.join(pathA,'b');
        new io.Directory(pathB).createSync({
            recursive : true});
        let filePath : string = pathContext.join(pathB,'test.txt');
        let testFile : io.File = new io.File(filePath);
        testFile.writeAsStringSync('test');
        let pathC : string = pathContext.join(this.tempPath,'c');
        let pathD : string = pathContext.join(pathC,'d');
        new io.Link(pathD).createSync(pathA,{
            recursive : true});
        let pathE : string = pathContext.join(this.tempPath,'e');
        let pathF : string = pathContext.join(pathE,'f');
        new io.Link(pathF).createSync(pathC,{
            recursive : true});
        let linkPath : string = pathContext.join(this.tempPath,'e','f','d','b','test.txt');
        let file : any = PhysicalResourceProvider.INSTANCE.getFile(linkPath);
        expect(file.resolveSymbolicLinksSync().path,testFile.resolveSymbolicLinksSync());
    }
    test_resolveSymbolicLinksSync_noLinks() : void {
        let ioFile : io.File = new io.File(this.path);
        ioFile.writeAsStringSync('test');
        this.file = PhysicalResourceProvider.INSTANCE.getFile(ioFile.resolveSymbolicLinksSync());
        expect(this.file.resolveSymbolicLinksSync(),this.file);
    }
    test_shortName() : void {
        expect(this.file.shortName,'file.txt');
    }
    test_toString() : void {
        expect(this.file.toString(),this.path);
    }
    test_toUri() : void {
        let path : string = '/foo/file.txt';
        let file : any = PhysicalResourceProvider.INSTANCE.getFile(path);
        expect(file.toUri(),new lib6.Uri.file(path));
    }
    test_writeAsBytesSync() : void {
        let content : core.DartList<number> = new core.DartList.literal<number>(1,2);
        new io.File(this.path).writeAsBytesSync(content);
        expect(this.file.readAsBytesSync(),content);
        content = new core.DartList.literal<number>(10,20);
        this.file.writeAsBytesSync(content);
        expect(this.file.readAsBytesSync(),content);
    }
    test_writeAsStringSync() : void {
        let content : string = 'ab';
        new io.File(this.path).writeAsStringSync(content);
        expect(this.file.readAsStringSync(),content);
        content = 'CD';
        this.file.writeAsStringSync(content);
        expect(this.file.readAsStringSync(),content);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FileTest() {
    }
}

export namespace FolderTest {
    export type Constructors = _BaseTest.Constructors | 'FolderTest';
    export type Interface = Omit<FolderTest, Constructors>;
}
@DartClass
export class FolderTest extends _BaseTest {
    path : string;

    folder : any;

    setUp() {
        super.setUp();
        this.path = join(this.tempPath,'folder');
        new io.Directory(this.path).createSync();
        this.folder = PhysicalResourceProvider.INSTANCE.getResource(this.path);
    }
    test_canonicalizePath() : void {
        let path2 : string = join(this.tempPath,'folder2');
        let path3 : string = join(this.tempPath,'folder3');
        expect(this.folder.canonicalizePath('baz'),equals(join(this.path,'baz')));
        expect(this.folder.canonicalizePath(path2),equals(path2));
        expect(this.folder.canonicalizePath(join('..','folder2')),equals(path2));
        expect(this.folder.canonicalizePath(join(path2,'..','folder3')),equals(path3));
        expect(this.folder.canonicalizePath(join('.','baz')),equals(join(this.path,'baz')));
        expect(this.folder.canonicalizePath(join(path2,'.','baz')),equals(join(path2,'baz')));
    }
    test_contains() : void {
        expect(this.folder.contains(join(this.path,'aaa.txt')),isTrue);
        expect(this.folder.contains(join(this.path,'aaa','bbb.txt')),isTrue);
        expect(this.folder.contains(join(this.tempPath,'baz.txt')),isFalse);
        expect(this.folder.contains(this.path),isFalse);
    }
    test_copy() : void {
        let provider : any = PhysicalResourceProvider.INSTANCE;
        let sourcePath : string = join(this.tempPath,'source');
        let subdirPath : string = join(sourcePath,'subdir');
        new io.Directory(sourcePath).createSync();
        new io.Directory(subdirPath).createSync();
        new io.File(join(sourcePath,'file1.txt')).writeAsStringSync('file1');
        new io.File(join(subdirPath,'file2.txt')).writeAsStringSync('file2');
        let source : any = provider.getFolder(sourcePath);
        let destination : any = provider.getFolder(join(this.tempPath,'destination'));
        let copy : any = source.copyTo(destination);
        expect(copy.parent,destination);
        this._verifyStructure(copy,source);
    }
    test_delete() : void {
        new io.File(join(this.path,'myFile')).createSync();
        let child = this.folder.getChild('myFile');
        expect(child,properties._isFile);
        expect(child.exists,isTrue);
        this.folder.delete();
        expect(child.exists,isFalse);
    }
    test_equals_differentPaths() : void {
        let path2 : string = join(this.tempPath,'folder2');
        new io.Directory(path2).createSync();
        let folder2 : any = PhysicalResourceProvider.INSTANCE.getResource(path2);
        expect(op(Op.EQUALS,this.folder,folder2),isFalse);
    }
    test_equals_samePath() : void {
        let folder2 : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(op(Op.EQUALS,this.folder,folder2),isTrue);
    }
    test_getChild_doesNotExist() : void {
        let child = this.folder.getChild('no-such-resource');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChild_file() : void {
        new io.File(join(this.path,'myFile')).createSync();
        let child = this.folder.getChild('myFile');
        expect(child,properties._isFile);
        expect(child.exists,isTrue);
    }
    test_getChild_folder() : void {
        new io.Directory(join(this.path,'myFolder')).createSync();
        let child = this.folder.getChild('myFolder');
        expect(child,properties._isFolder);
        expect(child.exists,isTrue);
    }
    test_getChildAssumingFile_doesNotExist() : void {
        let child : any = this.folder.getChildAssumingFile('no-such-resource');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChildAssumingFile_file() : void {
        new io.File(join(this.path,'myFile')).createSync();
        let child : any = this.folder.getChildAssumingFile('myFile');
        expect(child,isNotNull);
        expect(child.exists,isTrue);
    }
    test_getChildAssumingFile_folder() : void {
        new io.Directory(join(this.path,'myFolder')).createSync();
        let child : any = this.folder.getChildAssumingFile('myFolder');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChildAssumingFolder_doesNotExist() : void {
        let child : any = this.folder.getChildAssumingFolder('no-such-resource');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChildAssumingFolder_file() : void {
        new io.File(join(this.path,'myFile')).createSync();
        let child : any = this.folder.getChildAssumingFolder('myFile');
        expect(child,isNotNull);
        expect(child.exists,isFalse);
    }
    test_getChildAssumingFolder_folder() : void {
        new io.Directory(join(this.path,'myFolder')).createSync();
        let child : any = this.folder.getChildAssumingFolder('myFolder');
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
        new io.File(join(this.path,'a.txt')).createSync();
        new io.Directory(join(this.path,'bFolder')).createSync();
        new io.File(join(this.path,'c.txt')).createSync();
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
        let folder2 : any = PhysicalResourceProvider.INSTANCE.getResource(this.path);
        expect(this.folder.hashCode,equals(folder2.hashCode));
    }
    test_isOrContains() : void {
        expect(this.folder.isOrContains(this.path),isTrue);
        expect(this.folder.isOrContains(join(this.path,'aaa.txt')),isTrue);
        expect(this.folder.isOrContains(join(this.path,'aaa','bbb.txt')),isTrue);
        expect(this.folder.isOrContains(join(this.tempPath,'baz.txt')),isFalse);
    }
    test_parent() : void {
        let parent : any = this.folder.parent;
        expect(parent,new bare.createInstance(any,null));
        expect(parent.path,equals(this.tempPath));
        while (true){
            let grandParent : any = parent.parent;
            if (op(Op.EQUALS,grandParent,null)) {
                break;
            }
            expect(grandParent,new bare.createInstance(any,null));
            expect(grandParent.path.length,lessThan(parent.path.length));
            parent = grandParent;
        }
    }
    test_toUri() : void {
        let path : string = '/foo/directory';
        let folder : any = PhysicalResourceProvider.INSTANCE.getFolder(path);
        expect(folder.toUri(),new lib6.Uri.directory(path));
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
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FolderTest() {
    }
}

export namespace PhysicalResourceProviderTest {
    export type Constructors = _BaseTest.Constructors | 'PhysicalResourceProviderTest';
    export type Interface = Omit<PhysicalResourceProviderTest, Constructors>;
}
@DartClass
export class PhysicalResourceProviderTest extends _BaseTest {
    test_getFolder_trailingSeparator() {
        let path : string = this.tempPath;
        let provider : any = PhysicalResourceProvider.INSTANCE;
        let folder : any = provider.getFolder(`${path}${lib3.properties.separator}`);
        expect(folder.path,path);
    }
    test_getModificationTimes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let provider : any = PhysicalResourceProvider.INSTANCE;
            let path : string = join(this.tempPath,'file1.txt');
            new io.File(path).writeAsStringSync('');
            let source : any = provider.getFile(path).createSource();
            let times : core.DartList<number> = await provider.getModificationTimes(new core.DartList.literal(source));
            expect(times,new core.DartList.literal(source.modificationStamp));
        } )());
    }

    test_getStateLocation_uniqueness() : void {
        let provider : any = PhysicalResourceProvider.INSTANCE;
        let idOne : string = 'one';
        let folderOne : any = provider.getStateLocation(idOne);
        expect(folderOne,isNotNull);
        let idTwo : string = 'two';
        let folderTwo : any = provider.getStateLocation(idTwo);
        expect(folderTwo,isNotNull);
        expect(folderTwo,isNot(equals(folderOne)));
        expect(provider.getStateLocation(idOne),equals(folderOne));
    }
    test_watchFile_delete() {
        let path = join(this.tempPath,'foo');
        let file = new io.File(path);
        file.writeAsStringSync('contents 1');
        return this._watchingFile(path,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            file.deleteSync();
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                if (io.Platform.isWindows) {
                    core.print(`PhysicalResourceProviderTest:test_watchFile_delete received an event with type = ${changesReceived[0].type}`);
                }else {
                    expect(changesReceived[0].type,equals(ChangeType.REMOVE));
                }
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    test_watchFile_modify() {
        let path = join(this.tempPath,'foo');
        let file = new io.File(path);
        file.writeAsStringSync('contents 1');
        return this._watchingFile(path,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            file.writeAsStringSync('contents 2');
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                expect(changesReceived[0].type,equals(ChangeType.MODIFY));
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    test_watchFolder_createFile() {
        return this._watchingFolder(this.tempPath,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            let path = join(this.tempPath,'foo');
            new io.File(path).writeAsStringSync('contents');
            return this._delayed(() =>  {
                expect(changesReceived,isNotEmpty);
                expect(changesReceived[0].type,equals(ChangeType.ADD));
                expect(changesReceived[0].path,equals(path));
                for(let i : number = 1; i < changesReceived.length; i++){
                    expect(changesReceived[i].type,equals(ChangeType.MODIFY));
                    expect(changesReceived[i].path,equals(path));
                }
            });
        });
    }
    test_watchFolder_deleteFile() {
        let path = join(this.tempPath,'foo');
        let file = new io.File(path);
        file.writeAsStringSync('contents 1');
        return this._watchingFolder(this.tempPath,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            file.deleteSync();
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                expect(changesReceived[0].type,equals(ChangeType.REMOVE));
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    test_watchFolder_modifyFile() {
        let path = join(this.tempPath,'foo');
        let file = new io.File(path);
        file.writeAsStringSync('contents 1');
        return this._watchingFolder(this.tempPath,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            file.writeAsStringSync('contents 2');
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                expect(changesReceived[0].type,equals(ChangeType.MODIFY));
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    test_watchFolder_modifyFile_inSubDir() {
        let fooPath = join(this.tempPath,'foo');
        new io.Directory(fooPath).createSync();
        let path = join(this.tempPath,'bar');
        let file = new io.File(path);
        file.writeAsStringSync('contents 1');
        return this._watchingFolder(this.tempPath,(changesReceived : any) =>  {
            expect(changesReceived,hasLength(0));
            file.writeAsStringSync('contents 2');
            return this._delayed(() =>  {
                expect(changesReceived,hasLength(1));
                expect(changesReceived[0].type,equals(ChangeType.MODIFY));
                expect(changesReceived[0].path,equals(path));
            });
        });
    }
    _delayed(computation : () => any) : async.Future<any> {
        return new async.Future.delayed(new core.DartDuration({
            seconds : 1}),computation);
    }
    _watchingFile(path : string,test : (changesReceived : core.DartList<any>) => any) {
        return this._delayed(() =>  {
            let file : any = PhysicalResourceProvider.INSTANCE.getResource(path);
            let changesReceived = new core.DartList.literal<any>();
            let subscription = file.changes.listen(changesReceived.add.bind(changesReceived));
            return this._delayed(() =>  {
                return test(changesReceived);
            }).whenComplete(() =>  {
                subscription.cancel();
            });
        });
    }
    _watchingFolder(path : string,test : (changesReceived : core.DartList<any>) => any) {
        return this._delayed(() =>  {
            let folder : any = PhysicalResourceProvider.INSTANCE.getResource(path);
            let changesReceived = new core.DartList.literal<any>();
            let subscription = folder.changes.listen(changesReceived.add.bind(changesReceived));
            return this._delayed(() =>  {
                return test(changesReceived);
            }).whenComplete(() =>  {
                subscription.cancel();
            });
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PhysicalResourceProviderTest() {
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
