/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/utilities_dart_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ResolveRelativeUriTest);
    });
};
export namespace ResolveRelativeUriTest {
    export type Constructors = 'ResolveRelativeUriTest';
    export type Interface = Omit<ResolveRelativeUriTest, Constructors>;
}
@DartClass
export class ResolveRelativeUriTest {
    test_absolute() : void {
        this._validate('dart:core','dart:async','dart:async');
        this._validate('package:foo/foo.dart','dart:async','dart:async');
        this._validate('package:a/a.dart','package:b/b.dart','package:b/b.dart');
        this._validate('foo.dart','dart:async','dart:async');
    }
    test_absoluteDart_relative() : void {
        this._validate('dart:core','int.dart','dart:core/int.dart');
    }
    test_absolutePackage_relative() : void {
        this._validate('package:a/b.dart','c.dart','package:a/c.dart');
        this._validate('package:a/b/c.dart','d.dart','package:a/b/d.dart');
        this._validate('package:a/b/c.dart','../d.dart','package:a/d.dart');
    }
    test_relative_relative() : void {
        this._validate('a/b.dart','c.dart','a/c.dart');
        this._validate('a/b.dart','../c.dart','c.dart');
        this._validate('a.dart','../b.dart','../b.dart');
        this._validate('a.dart','../../b.dart','../../b.dart');
        this._validate('a/b.dart','../../c.dart','../c.dart');
    }
    _validate(base : string,contained : string,expected : string) : void {
        let actual : lib3.Uri = resolveRelativeUri(lib3.Uri.parse(base),lib3.Uri.parse(contained));
        expect(actual.toString(),expected);
    }
    constructor() {
    }
    @defaultConstructor
    ResolveRelativeUriTest() {
    }
}

export class properties {
}
