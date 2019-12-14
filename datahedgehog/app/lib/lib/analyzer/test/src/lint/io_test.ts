/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/lint/io_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : () => any = () =>  {
    defineTests();
};
export var defineTests : () => any = () =>  {
    group('processing',() =>  {
        group('files',() =>  {
            test('dart',() =>  {
                let file = new io.File('foo.dart');
                expect(isLintable(file),isTrue);
            });
            test('pubspec',() =>  {
                let file = new io.File('pubspec.yaml');
                expect(isLintable(file),isTrue);
            });
            test('_pubspec',() =>  {
                let file = new io.File('_pubspec.yaml');
                expect(isLintable(file),isTrue);
            });
            test('text',() =>  {
                let file = new io.File('foo.txt');
                expect(isLintable(file),isFalse);
            });
            test('hidden dirs',() =>  {
                expect(isInHiddenDir('.foo/'),isTrue);
                expect(isInHiddenDir('.foo/bar'),isTrue);
            });
        });
    });
};
export class properties {
}
