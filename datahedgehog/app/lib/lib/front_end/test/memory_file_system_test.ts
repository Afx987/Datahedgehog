/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/memory_file_system_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "@dart2ts.packages/path/lib/src/context";
import * as lib6 from "@dart2ts.packages/path/lib/path";
import * as io from "@dart2ts/dart/io";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(MemoryFileSystemTestNative);
        defineReflectiveTests(MemoryFileSystemTestPosix);
        defineReflectiveTests(MemoryFileSystemTestWindows);
        defineReflectiveTests(FileTest);
    });
};
export namespace _BaseTest {
    export type Constructors = '_BaseTest';
    export type Interface = Omit<_BaseTest, Constructors>;
}
@DartClass
export class _BaseTest {
    @AbstractProperty
    get context() : lib5.Context{ throw 'abstract'}
    @AbstractProperty
    get fileSystem() : any{ throw 'abstract'}
    @AbstractProperty
    get tempPath() : string{ throw 'abstract'}
    entityForPath(path : string) : any {
        return this.fileSystem.entityForUri(this.context.toUri(path));
    }
    @Abstract
    join(path1 : string,path2 : string,path3? : string,path4? : string) : string{ throw 'abstract'}
    @Abstract
    setUp() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    _BaseTest() {
    }
}

export namespace MemoryFileSystemTestMixin {
    export type Constructors = _BaseTest.Constructors | 'MemoryFileSystemTestMixin';
    export type Interface = Omit<MemoryFileSystemTestMixin, Constructors>;
}
@DartClass
export class MemoryFileSystemTestMixin extends _BaseTest {
    tempUri : lib4.Uri;

    setUp() {
        super.setUp();
        this.tempUri = this.context.toUri(this.tempPath);
    }
    test_currentDirectory_trailingSlash() {
        expect(this.fileSystem.currentDirectory.path,endsWith('/'));
        let path = this.fileSystem.currentDirectory.path;
        let currentDirectoryWithoutSlash = this.fileSystem.currentDirectory.replace({
            path : path.substring(0,op(Op.MINUS,path.length,1))});
        expect(new bare.createInstance(any,null,currentDirectoryWithoutSlash).currentDirectory,this.fileSystem.currentDirectory);
        expect(new bare.createInstance(any,null,this.fileSystem.currentDirectory).currentDirectory,this.fileSystem.currentDirectory);
    }
    test_entityForPath_absolutize() {
        expect(this.entityForPath('file.txt').uri,this.fileSystem.currentDirectory.resolve('file.txt'));
    }
    test_entityForPath_normalize_dot() {
        expect(this.entityForPath(this.join(this.tempPath,'.','file.txt')).uri,lib4.Uri.parse(`${this.tempUri}/file.txt`));
    }
    test_entityForPath_normalize_dotDot() {
        expect(this.entityForPath(this.join(this.tempPath,'foo','..','file.txt')).uri,lib4.Uri.parse(`${this.tempUri}/file.txt`));
    }
    test_entityForUri() {
        expect(this.fileSystem.entityForUri(lib4.Uri.parse(`${this.tempUri}/file.txt`)).uri,lib4.Uri.parse(`${this.tempUri}/file.txt`));
    }
    test_entityForUri_fileUri_relative() {
        for(let uri of new core.DartList.literal<lib4.Uri>(new lib4.Uri({
            scheme : 'file',path : 'file.txt'}),lib4.Uri.parse('file:file.txt'),lib4.Uri.parse('file:/file.txt'),lib4.Uri.parse('file://file.txt'),lib4.Uri.parse('file:///file.txt'))) {
            if (!new core.DartString(uri.path).startsWith('/')) {
                expect(() =>  {
                    return this.fileSystem.entityForUri(uri);
                },throwsA(new bare.createInstance(any,null)));
            }
        }
    }
    test_entityForUri_nonFileUri() {
        let uri = lib4.Uri.parse('package:foo/bar.dart');
        expect(this.fileSystem.entityForUri(uri).uri,uri);
    }
    test_entityForUri_normalize_dot() {
        expect(this.fileSystem.entityForUri(lib4.Uri.parse(`${this.tempUri}/./file.txt`)).uri,lib4.Uri.parse(`${this.tempUri}/file.txt`));
    }
    test_entityForUri_normalize_dotDot() {
        expect(this.fileSystem.entityForUri(lib4.Uri.parse(`${this.tempUri}/foo/../file.txt`)).uri,lib4.Uri.parse(`${this.tempUri}/file.txt`));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MemoryFileSystemTestMixin() {
    }
}

export namespace _BaseTestNative {
    export type Constructors = _BaseTest.Constructors | '_BaseTestNative';
    export type Interface = Omit<_BaseTestNative, Constructors>;
}
@DartClass
export class _BaseTestNative extends _BaseTest {
    context : lib5.Context;

    fileSystem : any;

    tempPath : string;

    join(path1 : string,path2 : string,path3? : string,path4? : string) : string {
        return lib6.join(path1,path2,path3,path4);
    }
    setUp() {
        this.tempPath = lib6.join(io.Directory.systemTemp.path,'test_file_system');
        this.fileSystem = new bare.createInstance(any,null,lib6.toUri(io.Directory.current.path));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BaseTestNative() {
        this.context = lib6.properties.context;
    }
}

export namespace _BaseTestPosix {
    export type Constructors = _BaseTest.Constructors | '_BaseTestPosix';
    export type Interface = Omit<_BaseTestPosix, Constructors>;
}
@DartClass
export class _BaseTestPosix extends _BaseTest {
    context : lib5.Context;

    fileSystem : any;

    tempPath : string;

    join(path1 : string,path2 : string,path3? : string,path4? : string) : string {
        return lib6.properties.posix.join(path1,path2,path3,path4);
    }
    setUp() : void {
        this.tempPath = '/test_file_system';
        this.fileSystem = new bare.createInstance(any,null,lib4.Uri.parse('file:///cwd'));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BaseTestPosix() {
        this.context = lib6.properties.posix;
    }
}

export namespace _BaseTestWindows {
    export type Constructors = _BaseTest.Constructors | '_BaseTestWindows';
    export type Interface = Omit<_BaseTestWindows, Constructors>;
}
@DartClass
export class _BaseTestWindows extends _BaseTest {
    context : lib5.Context;

    fileSystem : any;

    tempPath : string;

    join(path1 : string,path2 : string,path3? : string,path4? : string) : string {
        return lib6.properties.windows.join(path1,path2,path3,path4);
    }
    setUp() : void {
        this.tempPath = 'c:\test_file_system';
        this.fileSystem = new bare.createInstance(any,null,lib4.Uri.parse('file:///c:/cwd'));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BaseTestWindows() {
        this.context = lib6.properties.windows;
    }
}

export namespace FileTest {
    export type Constructors = _BaseTestNative.Constructors | 'FileTest';
    export type Interface = Omit<FileTest, Constructors>;
}
@DartClass
export class FileTest extends _BaseTestNative {
    path : string;

    file : any;

    setUp() {
        super.setUp();
        this.path = this.join(this.tempPath,'file.txt');
        this.file = this.entityForPath(this.path);
    }
    test_equals_differentPaths() {
        expect(op(Op.EQUALS,this.file,this.entityForPath(this.join(this.tempPath,'file2.txt'))),isFalse);
    }
    test_equals_samePath() {
        expect(op(Op.EQUALS,this.file,this.entityForPath(this.join(this.tempPath,'file.txt'))),isTrue);
    }
    test_exists_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(await this.file.exists(),false);
        } )());
    }

    test_exists_exists() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.file.writeAsStringSync('x');
            expect(await this.file.exists(),true);
        } )());
    }

    test_hashCode_samePath() {
        expect(this.file.hashCode,this.entityForPath(this.join(this.tempPath,'file.txt')).hashCode);
    }
    test_lastModified_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this.file.lastModified(),properties._throwsFileSystemException);
        } )());
    }

    test_lastModified_increasesOnEachChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.file.writeAsStringSync('x');
            let mod1 = await this.file.lastModified();
            this.file.writeAsStringSync('y');
            let mod2 = await this.file.lastModified();
            expect(mod2.isAfter(mod1),isTrue);
            let file2 = this.entityForPath(this.join(this.tempPath,'file2.txt'));
            file2.writeAsStringSync('z');
            let mod3 = await file2.lastModified();
            expect(mod3.isAfter(mod2),isTrue);
        } )());
    }

    test_path() {
        expect(this.file.uri,this.context.toUri(this.path));
    }
    test_readAsBytes_badUtf8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let bytes : core.DartList<number> = new core.DartList.literal(192,64);
            this.file.writeAsBytesSync(bytes);
            expect(await this.file.readAsBytes(),bytes);
        } )());
    }

    test_readAsBytes_doesNotExist() {
        expect(this.file.readAsBytes(),properties._throwsFileSystemException);
    }
    test_readAsBytes_exists() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let s = 'contents';
            this.file.writeAsStringSync(s);
            expect(await this.file.readAsBytes(),convert.properties.UTF8.encode(s));
        } )());
    }

    test_readAsString_badUtf8() {
        this.file.writeAsBytesSync(new core.DartList.literal(192,64));
        expect(this.file.readAsString(),properties._throwsFileSystemException);
    }
    test_readAsString_doesNotExist() {
        expect(this.file.readAsString(),properties._throwsFileSystemException);
    }
    test_readAsString_exists() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let s = 'contents';
            this.file.writeAsStringSync(s);
            expect(await this.file.readAsString(),s);
        } )());
    }

    test_readAsString_utf8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.file.writeAsBytesSync(new core.DartList.literal(226,130,172));
            expect(await this.file.readAsString(),'€');
        } )());
    }

    test_writeAsBytesSync_modifyAfterRead() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.file.writeAsBytesSync(new core.DartList.literal(1));
            op(Op.INDEX_ASSIGN,(await this.file.readAsBytes()),0,2);
            expect(await this.file.readAsBytes(),new core.DartList.literal(1));
        } )());
    }

    test_writeAsBytesSync_modifyAfterWrite() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let bytes = new core.DartList.literal(1);
            this.file.writeAsBytesSync(bytes);
            bytes[0] = 2;
            expect(await this.file.readAsBytes(),new core.DartList.literal(1));
        } )());
    }

    test_writeAsBytesSync_overwrite() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.file.writeAsBytesSync(new core.DartList.literal(1));
            this.file.writeAsBytesSync(new core.DartList.literal(2));
            expect(await this.file.readAsBytes(),new core.DartList.literal(2));
        } )());
    }

    test_writeAsStringSync_overwrite() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.file.writeAsStringSync('first');
            this.file.writeAsStringSync('second');
            expect(await this.file.readAsString(),'second');
        } )());
    }

    test_writeAsStringSync_utf8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.file.writeAsStringSync('€');
            expect(await this.file.readAsBytes(),new core.DartList.literal(226,130,172));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FileTest() {
    }
}

export namespace MemoryFileSystemTestNative {
    export type Constructors = _BaseTestNative.Constructors | 'MemoryFileSystemTestNative';
    export type Interface = Omit<MemoryFileSystemTestNative, Constructors>;
}
@DartClass
@With(MemoryFileSystemTestMixin)
export class MemoryFileSystemTestNative extends _BaseTestNative implements MemoryFileSystemTestMixin.Interface {
    @Abstract
    setUp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_currentDirectory_trailingSlash() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_absolutize() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_normalize_dot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_normalize_dotDot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_fileUri_relative() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_nonFileUri() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_normalize_dot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_normalize_dotDot() : any {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MemoryFileSystemTestNative() {
    }
}

export namespace MemoryFileSystemTestPosix {
    export type Constructors = _BaseTestPosix.Constructors | 'MemoryFileSystemTestPosix';
    export type Interface = Omit<MemoryFileSystemTestPosix, Constructors>;
}
@DartClass
@With(MemoryFileSystemTestMixin)
export class MemoryFileSystemTestPosix extends _BaseTestPosix implements MemoryFileSystemTestMixin.Interface {
    @Abstract
    setUp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_currentDirectory_trailingSlash() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_absolutize() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_normalize_dot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_normalize_dotDot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_fileUri_relative() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_nonFileUri() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_normalize_dot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_normalize_dotDot() : any {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MemoryFileSystemTestPosix() {
    }
}

export namespace MemoryFileSystemTestWindows {
    export type Constructors = _BaseTestWindows.Constructors | 'MemoryFileSystemTestWindows';
    export type Interface = Omit<MemoryFileSystemTestWindows, Constructors>;
}
@DartClass
@With(MemoryFileSystemTestMixin)
export class MemoryFileSystemTestWindows extends _BaseTestWindows implements MemoryFileSystemTestMixin.Interface {
    @Abstract
    setUp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_currentDirectory_trailingSlash() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_absolutize() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_normalize_dot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForPath_normalize_dotDot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_fileUri_relative() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_nonFileUri() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_normalize_dot() : any {
        throw 'from mixin';
    }
    @Abstract
    test_entityForUri_normalize_dotDot() : any {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MemoryFileSystemTestWindows() {
    }
}

export class properties {
    private static __$_throwsFileSystemException : any;
    static get _throwsFileSystemException() : any { 
        if (this.__$_throwsFileSystemException===undefined) {
            this.__$_throwsFileSystemException = new bare.createInstance(any,null,new bare.createInstance(any,null));
        }
        return this.__$_throwsFileSystemException;
    }
    static set _throwsFileSystemException(__$value : any)  { 
        this.__$_throwsFileSystemException = __$value;
    }

}
