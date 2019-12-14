/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/translate_uri_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TranslateUriTest);
    });
};
export namespace TranslateUriTest {
    export type Constructors = 'TranslateUriTest';
    export type Interface = Omit<TranslateUriTest, Constructors>;
}
@DartClass
export class TranslateUriTest {
    test_translate_dart() : void {
        let translator = new bare.createInstance(any,null,new core.DartMap.literal([
        ]),new core.DartMap.literal([
            ['core',lib3.Uri.parse('file:///sdk/core/core.dart')],
            ['math',lib3.Uri.parse('file:///sdk/math/math.dart')]]));
        expect(translator.translate(lib3.Uri.parse('dart:core')),lib3.Uri.parse('file:///sdk/core/core.dart'));
        expect(translator.translate(lib3.Uri.parse('dart:core/string.dart')),lib3.Uri.parse('file:///sdk/core/string.dart'));
        expect(translator.translate(lib3.Uri.parse('dart:math')),lib3.Uri.parse('file:///sdk/math/math.dart'));
        expect(translator.translate(lib3.Uri.parse('dart:unknown')),isNull);
    }
    constructor() {
    }
    @defaultConstructor
    TranslateUriTest() {
    }
}

export class properties {
}
