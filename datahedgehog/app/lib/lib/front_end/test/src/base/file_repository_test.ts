/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/base/file_repository_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FileRepositoryTest);
    });
};
export namespace FileRepositoryTest {
    export type Constructors = 'FileRepositoryTest';
    export type Interface = Omit<FileRepositoryTest, Constructors>;
}
@DartClass
export class FileRepositoryTest {
    fileRepository;

    test_clearContents() {
        let uri = lib3.Uri.parse('file:///foo/bar.dart');
        this.fileRepository.store(uri,'contents1');
        expect(this.fileRepository.getContentsForTesting(),isNotEmpty);
        this.fileRepository.clearContents();
        expect(this.fileRepository.getContentsForTesting(),isEmpty);
    }
    test_contentsForPath() {
        let path1 = this.fileRepository.store(lib3.Uri.parse('file:///foo/bar.dart'),'contents1');
        let path2 = this.fileRepository.store(lib3.Uri.parse('package:foo/bar.dart'),'contents2');
        expect(this.fileRepository.contentsForPath(path1),'contents1');
        expect(this.fileRepository.contentsForPath(path2),'contents2');
    }
    test_pathForUri() {
        let uri1 = lib3.Uri.parse('file:///foo/bar.dart');
        let path1 = this.fileRepository.store(uri1,'contents1');
        let uri2 = lib3.Uri.parse('package:foo/bar.dart');
        let path2 = this.fileRepository.store(uri2,'contents2');
        expect(this.fileRepository.pathForUri(uri1),path1);
        expect(this.fileRepository.pathForUri(uri2),path2);
    }
    test_pathForUri_allocate() {
        let uri1 = lib3.Uri.parse('file:///foo/bar.dart');
        let path1 = this.fileRepository.pathForUri(uri1,{
            allocate : true});
        let uri2 = lib3.Uri.parse('package:foo/bar.dart');
        let path2 = this.fileRepository.pathForUri(uri2,{
            allocate : true});
        expect(this.fileRepository.store(uri1,'contents1'),path1);
        expect(this.fileRepository.store(uri2,'contents2'),path2);
    }
    test_store() {
        let uri = lib3.Uri.parse('file:///foo/bar.dart');
        let path = this.fileRepository.store(uri,'contents1');
        expect(path,endsWith('.dart'));
        expect(this.fileRepository.contentsForPath(path),'contents1');
        expect(this.fileRepository.getContentsForTesting(),new core.DartMap.literal([
            [path,'contents1']]));
        expect(this.fileRepository.store(uri,'contents2'),path);
        expect(this.fileRepository.contentsForPath(path),'contents2');
        expect(this.fileRepository.getContentsForTesting(),new core.DartMap.literal([
            [path,'contents2']]));
    }
    test_uriForPath() {
        let uri1 = lib3.Uri.parse('file:///foo/bar.dart');
        let path1 = this.fileRepository.store(uri1,'contents1');
        let uri2 = lib3.Uri.parse('package:foo/bar.dart');
        let path2 = this.fileRepository.store(uri2,'contents2');
        expect(this.fileRepository.uriForPath(path1),uri1);
        expect(this.fileRepository.uriForPath(path2),uri2);
    }
    constructor() {
    }
    @defaultConstructor
    FileRepositoryTest() {
        this.fileRepository = new bare.createInstance(any,null);
    }
}

export class properties {
}
