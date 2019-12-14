/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/util/absolute_path_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AbsolutePathContextPosixTest);
        defineReflectiveTests(AbsolutePathContextWindowsTest);
    });
};
export namespace AbsolutePathContextPosixTest {
    export type Constructors = 'AbsolutePathContextPosixTest';
    export type Interface = Omit<AbsolutePathContextPosixTest, Constructors>;
}
@DartClass
export class AbsolutePathContextPosixTest {
    context : any;

    test_append() : void {
        expect(this.context.append('/path/to','foo.dart'),'/path/to/foo.dart');
    }
    test_basename() : void {
        expect(this.context.basename('/path/to/foo.dart'),'foo.dart');
        expect(this.context.basename('/path/to'),'to');
        expect(this.context.basename('/path'),'path');
        expect(this.context.basename('/'),'');
    }
    test_dirname() : void {
        expect(this.context.dirname('/path/to/foo.dart'),'/path/to');
        expect(this.context.dirname('/path/to'),'/path');
        expect(this.context.dirname('/path'),'/');
        expect(this.context.dirname('/'),'/');
    }
    test_isValid_absolute() : void {
        expect(this.context.isValid('/foo/bar'),isTrue);
        expect(this.context.isValid('/foo'),isTrue);
        expect(this.context.isValid('/'),isTrue);
        expect(this.context.isValid(''),isFalse);
        expect(this.context.isValid('foo/bar'),isFalse);
    }
    test_isValid_normalized() : void {
        expect(this.context.isValid('/foo/bar'),isTrue);
        expect(this.context.isValid('/foo/..bar'),isTrue);
        expect(this.context.isValid('/foo/.bar/baz'),isTrue);
        expect(this.context.isValid('/foo/...'),isTrue);
        expect(this.context.isValid('/foo/bar..'),isTrue);
        expect(this.context.isValid('/foo/.../bar'),isTrue);
        expect(this.context.isValid('/foo/.bar/.'),isFalse);
        expect(this.context.isValid('/foo/bar/../baz'),isFalse);
        expect(this.context.isValid('/foo/bar/..'),isFalse);
        expect(this.context.isValid('/foo/./bar'),isFalse);
        expect(this.context.isValid('/.'),isFalse);
    }
    test_isWithin() : void {
        expect(this.context.isWithin('/root/path','/root/path/a'),isTrue);
        expect(this.context.isWithin('/root/path','/root/other'),isFalse);
        expect(this.context.isWithin('/root/path','/root/path'),isFalse);
    }
    test_split() : void {
        expect(this.context.split('/path/to/foo'),new core.DartList.literal('','path','to','foo'));
        expect(this.context.split('/path'),new core.DartList.literal('','path'));
    }
    test_suffix() : void {
        expect(this.context.suffix('/root/path','/root/path/a/b.dart'),'a/b.dart');
        expect(this.context.suffix('/root/path','/root/other.dart'),isNull);
    }
    constructor() {
    }
    @defaultConstructor
    AbsolutePathContextPosixTest() {
        this.context = new bare.createInstance(any,null,false);
    }
}

export namespace AbsolutePathContextWindowsTest {
    export type Constructors = 'AbsolutePathContextWindowsTest';
    export type Interface = Omit<AbsolutePathContextWindowsTest, Constructors>;
}
@DartClass
export class AbsolutePathContextWindowsTest {
    context : any;

    test_append() : void {
        expect(this.context.append('C:\path\to','foo.dart'),'C:\path\to\foo.dart');
    }
    test_basename() : void {
        expect(this.context.basename('C:\path\to\foo.dart'),'foo.dart');
        expect(this.context.basename('C:\path\to'),'to');
        expect(this.context.basename('C:\path'),'path');
        expect(this.context.basename('C:\'),'');
    }
    test_dirname() : void {
        expect(this.context.dirname('C:\path\to\foo.dart'),'C:\path\to');
        expect(this.context.dirname('C:\path\to'),'C:\path');
        expect(this.context.dirname('C:\path'),'C:\');
        expect(this.context.dirname('C:\'),'C:\');
    }
    test_isValid_absolute() : void {
        expect(this.context.isValid('C:\foo\bar'),isTrue);
        expect(this.context.isValid('c:\foo\bar'),isTrue);
        expect(this.context.isValid('D:\foo\bar'),isTrue);
        expect(this.context.isValid('C:\foo'),isTrue);
        expect(this.context.isValid('C:\'),isTrue);
        expect(this.context.isValid(''),isFalse);
        expect(this.context.isValid('foo\bar'),isFalse);
    }
    test_isValid_normalized() : void {
        expect(this.context.isValid('C:\foo\bar'),isTrue);
        expect(this.context.isValid('C:\foo\..bar'),isTrue);
        expect(this.context.isValid('C:\foo\.bar\baz'),isTrue);
        expect(this.context.isValid('C:\foo\...'),isTrue);
        expect(this.context.isValid('C:\foo\bar..'),isTrue);
        expect(this.context.isValid('C:\foo\...\bar'),isTrue);
        expect(this.context.isValid('C:\foo\.bar\.'),isFalse);
        expect(this.context.isValid('C:\foo\bar\..\baz'),isFalse);
        expect(this.context.isValid('C:\foo\bar\..'),isFalse);
        expect(this.context.isValid('C:\foo\.\bar'),isFalse);
        expect(this.context.isValid('C:\.'),isFalse);
    }
    test_isWithin() : void {
        expect(this.context.isWithin('C:\root\path','C:\root\path\a'),isTrue);
        expect(this.context.isWithin('C:\root\path','C:\root\other'),isFalse);
        expect(this.context.isWithin('C:\root\path','C:\root\path'),isFalse);
    }
    test_split() : void {
        expect(this.context.split('C:\path\to\foo'),new core.DartList.literal('C:','path','to','foo'));
        expect(this.context.split('C:\path'),new core.DartList.literal('C:','path'));
    }
    test_suffix() : void {
        expect(this.context.suffix('C:\root\path','C:\root\path\a\b.dart'),'a\b.dart');
        expect(this.context.suffix('C:\root\path','C:\root\other.dart'),isNull);
    }
    constructor() {
    }
    @defaultConstructor
    AbsolutePathContextWindowsTest() {
        this.context = new bare.createInstance(any,null,true);
    }
}

export class properties {
}
