/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/util/glob_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GlobPosixTest);
        defineReflectiveTests(GlobWindowsTest);
    });
};
export namespace GlobPosixTest {
    export type Constructors = 'GlobPosixTest';
    export type Interface = Omit<GlobPosixTest, Constructors>;
}
@DartClass
export class GlobPosixTest {
    test_case() : void {
        let glob : any = new bare.createInstance(any,null,'\','**.DaRt');
        expect(glob.matches('aaa.dart'),isTrue);
        expect(glob.matches('bbb.DART'),isTrue);
        expect(glob.matches('ccc.dArT'),isTrue);
        expect(glob.matches('ddd.DaRt'),isTrue);
    }
    test_question() : void {
        let glob : any = new bare.createInstance(any,null,'/','?.dart');
        expect(glob.matches('a.dart'),isTrue);
        expect(glob.matches('b.dart'),isTrue);
        expect(glob.matches('cc.dart'),isFalse);
    }
    test_specialChars() : void {
        let glob : any = new bare.createInstance(any,null,'/','*.dart');
        expect(glob.matches('a.dart'),isTrue);
        expect(glob.matches('_-a.dart'),isTrue);
        expect(glob.matches('^$*?.dart'),isTrue);
        expect(glob.matches('()[]{}.dart'),isTrue);
        expect(glob.matches('♥.dart'),isTrue);
    }
    test_specialChars2() : void {
        let glob : any = new bare.createInstance(any,null,'/','a[]b.dart');
        expect(glob.matches('a[]b.dart'),isTrue);
        expect(glob.matches('aNb.dart'),isFalse);
    }
    test_star() : void {
        let glob : any = new bare.createInstance(any,null,'/','web/*.dart');
        expect(glob.matches('web/foo.dart'),isTrue);
        expect(glob.matches('web/barbaz.dart'),isTrue);
        expect(glob.matches('web/foo.html'),isFalse);
        expect(glob.matches('lib/foo.dart'),isFalse);
        expect(glob.matches('/web/foo.dart'),isFalse);
        expect(glob.matches('web/sub/foo.dart'),isFalse);
    }
    test_starStar() : void {
        let glob : any = new bare.createInstance(any,null,'/','**.dart');
        expect(glob.matches('foo/bar.dart'),isTrue);
        expect(glob.matches('foo/bar/baz.dart'),isTrue);
        expect(glob.matches('/foo/bar.dart'),isTrue);
        expect(glob.matches('/foo/bar/baz.dart'),isTrue);
        expect(glob.matches('/web/foo.html'),isFalse);
    }
    test_starStar_star() : void {
        let glob : any = new bare.createInstance(any,null,'/','**/*.dart');
        expect(glob.matches('foo/bar.dart'),isTrue);
        expect(glob.matches('foo/bar/baz.dart'),isTrue);
        expect(glob.matches('/foo/bar.dart'),isTrue);
        expect(glob.matches('/foo/bar/baz.dart'),isTrue);
        expect(glob.matches('/web/foo.html'),isFalse);
    }
    constructor() {
    }
    @defaultConstructor
    GlobPosixTest() {
    }
}

export namespace GlobWindowsTest {
    export type Constructors = 'GlobWindowsTest';
    export type Interface = Omit<GlobWindowsTest, Constructors>;
}
@DartClass
export class GlobWindowsTest {
    test_case() : void {
        let glob : any = new bare.createInstance(any,null,'\','**.dart');
        expect(glob.matches('aaa.dart'),isTrue);
        expect(glob.matches('bbb.DART'),isTrue);
        expect(glob.matches('ccc.dArT'),isTrue);
        expect(glob.matches('ddd.DaRt'),isTrue);
    }
    test_question() : void {
        let glob : any = new bare.createInstance(any,null,'\','?.dart');
        expect(glob.matches('a.dart'),isTrue);
        expect(glob.matches('b.dart'),isTrue);
        expect(glob.matches('cc.dart'),isFalse);
    }
    test_specialChars() : void {
        let glob : any = new bare.createInstance(any,null,'\','*.dart');
        expect(glob.matches('a.dart'),isTrue);
        expect(glob.matches('_-a.dart'),isTrue);
        expect(glob.matches('^$*?.dart'),isTrue);
        expect(glob.matches('()[]{}.dart'),isTrue);
        expect(glob.matches('♥.dart'),isTrue);
    }
    test_star() : void {
        let glob : any = new bare.createInstance(any,null,'\','web/*.dart');
        expect(glob.matches('web\foo.dart'),isTrue);
        expect(glob.matches('web\barbaz.dart'),isTrue);
        expect(glob.matches('web\foo.html'),isFalse);
        expect(glob.matches('lib\foo.dart'),isFalse);
        expect(glob.matches('\web\foo.dart'),isFalse);
        expect(glob.matches('web\sub\foo.dart'),isFalse);
    }
    test_starStar() : void {
        let glob : any = new bare.createInstance(any,null,'\','**.dart');
        expect(glob.matches('foo\bar.dart'),isTrue);
        expect(glob.matches('foo\bar\baz.dart'),isTrue);
        expect(glob.matches('C:\foo\bar.dart'),isTrue);
        expect(glob.matches('C:\foo\bar\baz.dart'),isTrue);
        expect(glob.matches('C:\web\foo.html'),isFalse);
    }
    constructor() {
    }
    @defaultConstructor
    GlobWindowsTest() {
    }
}

export class properties {
}
