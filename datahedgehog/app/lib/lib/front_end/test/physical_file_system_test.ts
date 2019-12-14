/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/physical_file_system_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";
import * as lib6 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(PhysicalFileSystemTest);
        defineReflectiveTests(FileTest);
        defineReflectiveTests(DirectoryTest);
    });
};
export namespace _BaseTest {
    export type Constructors = '_BaseTest';
    export type Interface = Omit<_BaseTest, Constructors>;
}
@DartClass
export class _BaseTest {
    tempDirectory : io.Directory;

    tempPath : string;

    entityForPath(path : string) : any {
        return PhysicalFileSystem.instance.entityForUri(lib3.toUri(path));
    }
    setUp() {
        this.tempDirectory = io.Directory.systemTemp.createTempSync('test_file_system');
        this.tempPath = this.tempDirectory.absolute.path;
    }
    tearDown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                this.tempDirectory.deleteSync({
                    recursive : true});
            } catch (__error__) {

                if (is(__error__,io.FileSystemException)){
                    await new async.Future.delayed(new core.DartDuration({
                        seconds : 1}));
                    this.tempDirectory.deleteSync({
                        recursive : true});
                }
            }
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    _BaseTest() {
    }
}

export namespace DirectoryTest {
    export type Constructors = _BaseTest.Constructors | 'DirectoryTest';
    export type Interface = Omit<DirectoryTest, Constructors>;
}
@DartClass
export class DirectoryTest extends _BaseTest {
    path : string;

    dir : any;

    setUp() {
        super.setUp();
        this.path = lib3.join(this.tempPath,'dir');
        this.dir = PhysicalFileSystem.instance.entityForUri(lib3.toUri(this.path));
    }
    test_equals_differentPaths() {
        expect(op(Op.EQUALS,this.dir,this.entityForPath(lib3.join(this.tempPath,'dir2'))),isFalse);
    }
    test_equals_samePath() {
        expect(op(Op.EQUALS,this.dir,this.entityForPath(lib3.join(this.tempPath,'dir'))),isTrue);
    }
    test_exists_directoryExists() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await new io.Directory(this.path).create();
            expect(await this.dir.exists(),isTrue);
        } )());
    }

    test_exists_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(await this.dir.exists(),isFalse);
        } )());
    }

    test_readAsBytes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await new io.Directory(this.path).create();
            expect(this.dir.readAsBytes(),properties._throwsFileSystemException);
        } )());
    }

    test_uri() {
        expect(this.dir.uri,lib3.toUri(this.path));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectoryTest() {
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
        this.path = lib3.join(this.tempPath,'file.txt');
        this.file = PhysicalFileSystem.instance.entityForUri(lib3.toUri(this.path));
    }
    test_equals_differentPaths() {
        expect(op(Op.EQUALS,this.file,this.entityForPath(lib3.join(this.tempPath,'file2.txt'))),isFalse);
    }
    test_equals_samePath() {
        expect(op(Op.EQUALS,this.file,this.entityForPath(lib3.join(this.tempPath,'file.txt'))),isTrue);
    }
    test_exists_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(await this.file.exists(),isFalse);
        } )());
    }

    test_exists_fileExists() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            new io.File(this.path).writeAsStringSync('contents');
            expect(await this.file.exists(),isTrue);
        } )());
    }

    test_hashCode_samePath() {
        expect(this.file.hashCode,this.entityForPath(lib3.join(this.tempPath,'file.txt')).hashCode);
    }
    test_lastModified_doesNotExist() {
        expect(this.file.lastModified(),properties._throwsFileSystemException);
    }
    test_lastModified_increasesOnEachChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            new io.File(this.path).writeAsStringSync('contents1');
            let mod1 = await this.file.lastModified();
            await new async.Future.delayed(new core.DartDuration({
                seconds : 1}));
            new io.File(this.path).writeAsStringSync('contents2');
            let mod2 = await this.file.lastModified();
            expect(mod2.isAfter(mod1),isTrue);
            await new async.Future.delayed(new core.DartDuration({
                seconds : 1}));
            let path2 = lib3.join(this.tempPath,'file2.txt');
            new io.File(path2).writeAsStringSync('contents2');
            let file2 = this.entityForPath(path2);
            let mod3 = await file2.lastModified();
            expect(mod3.isAfter(mod2),isTrue);
        } )());
    }

    test_readAsBytes_badUtf8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let bytes : core.DartList<number> = new core.DartList.literal(192,64);
            new io.File(this.path).writeAsBytesSync(bytes);
            expect(await this.file.readAsBytes(),bytes);
        } )());
    }

    test_readAsBytes_doesNotExist() {
        expect(this.file.readAsBytes(),properties._throwsFileSystemException);
    }
    test_readAsBytes_exists() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let s = 'contents';
            new io.File(this.path).writeAsStringSync(s);
            expect(await this.file.readAsBytes(),convert.properties.UTF8.encode(s));
        } )());
    }

    test_readAsString_badUtf8() {
        new io.File(this.path).writeAsBytesSync(new core.DartList.literal(192,64));
        expect(this.file.readAsString(),properties._throwsFileSystemException);
    }
    test_readAsString_doesNotExist() {
        expect(this.file.readAsString(),properties._throwsFileSystemException);
    }
    test_readAsString_exists() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let s = 'contents';
            new io.File(this.path).writeAsStringSync(s);
            expect(await this.file.readAsString(),s);
        } )());
    }

    test_readAsString_utf8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let bytes = new core.DartList.literal(226,130,172);
            new io.File(this.path).writeAsBytesSync(bytes);
            expect(await this.file.readAsString(),'€');
        } )());
    }

    test_uri() {
        expect(this.file.uri,lib3.toUri(this.path));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FileTest() {
    }
}

export namespace PhysicalFileSystemTest {
    export type Constructors = _BaseTest.Constructors | 'PhysicalFileSystemTest';
    export type Interface = Omit<PhysicalFileSystemTest, Constructors>;
}
@DartClass
export class PhysicalFileSystemTest extends _BaseTest {
    tempUri : lib6.Uri;

    setUp() {
        super.setUp();
        this.tempUri = new lib6.Uri.directory(this.tempPath);
    }
    test_entityForPath() {
        let path = lib3.join(this.tempPath,'file.txt');
        expect(this.entityForPath(path).uri,lib3.toUri(path));
    }
    test_entityForPath_absolutize() {
        expect(this.entityForPath('file.txt').uri,lib3.toUri(new io.File('file.txt').absolute.path));
    }
    test_entityForPath_normalize_dot() {
        expect(this.entityForPath(lib3.join(this.tempPath,'.','file.txt')).uri,lib3.toUri(lib3.join(this.tempPath,'file.txt')));
    }
    test_entityForPath_normalize_dotDot() {
        expect(this.entityForPath(lib3.join(this.tempPath,'foo','..','file.txt')).uri,lib3.toUri(lib3.join(this.tempPath,'file.txt')));
    }
    test_entityForUri() {
        expect(PhysicalFileSystem.instance.entityForUri(lib6.Uri.parse(`${this.tempUri}file.txt`)).uri,lib3.toUri(lib3.join(this.tempPath,'file.txt')));
    }
    test_entityForUri_bareUri_absolute() {
        expect(PhysicalFileSystem.instance.entityForUri(lib6.Uri.parse('/file.txt')).uri,lib6.Uri.parse('file:///file.txt'));
    }
    test_entityForUri_fileUri_relative() {
        for(let uri of new core.DartList.literal<lib6.Uri>(new lib6.Uri({
            scheme : 'file',path : 'file.txt'}),lib6.Uri.parse('file:file.txt'),lib6.Uri.parse('file:/file.txt'),lib6.Uri.parse('file://file.txt'),lib6.Uri.parse('file:///file.txt'))) {
            if (!new core.DartString(uri.path).startsWith('/')) {
                expect(() =>  {
                    return PhysicalFileSystem.instance.entityForUri(uri);
                },throwsA(new bare.createInstance(any,null)));
            }
        }
    }
    test_entityForUri_nonFileUri() {
        expect(() =>  {
            return PhysicalFileSystem.instance.entityForUri(lib6.Uri.parse('package:foo/bar.dart'));
        },throwsA(new bare.createInstance(any,null)));
    }
    test_entityForUri_normalize_dot() {
        expect(PhysicalFileSystem.instance.entityForUri(lib6.Uri.parse(`${this.tempUri}./file.txt`)).uri,lib3.toUri(lib3.join(this.tempPath,'file.txt')));
    }
    test_entityForUri_normalize_dotDot() {
        expect(PhysicalFileSystem.instance.entityForUri(lib6.Uri.parse(`${this.tempUri}foo/../file.txt`)).uri,lib3.toUri(lib3.join(this.tempPath,'file.txt')));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PhysicalFileSystemTest() {
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
