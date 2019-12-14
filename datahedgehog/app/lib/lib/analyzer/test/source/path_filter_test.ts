/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/source/path_filter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    var root : (path : string) => string = (path : string) : string =>  {
        return lib3.properties.context.absolute(lib3.properties.context.normalize(path));
    };
    group('PathFilterTest',() =>  {
        setUp(() =>  {
        });
        tearDown(() =>  {
        });
        test('test_ignoreEverything',() =>  {
            let filter = new bare.createInstance(any,null,root('/'),new core.DartList.literal('*'),lib3.properties.context);
            expect(filter.ignored('a'),isTrue);
        });
        test('test_ignoreFile',() =>  {
            let filter = new bare.createInstance(any,null,root('/'),new core.DartList.literal('apple'),lib3.properties.context);
            expect(filter.ignored('apple'),isTrue);
            expect(filter.ignored('banana'),isFalse);
        });
        test('test_ignoreMultipleFiles',() =>  {
            let filter = new bare.createInstance(any,null,root('/'),new core.DartList.literal('apple','banana'),lib3.properties.context);
            expect(filter.ignored('apple'),isTrue);
            expect(filter.ignored('banana'),isTrue);
        });
        test('test_ignoreSubDir',() =>  {
            let filter = new bare.createInstance(any,null,root('/'),new core.DartList.literal('apple/*'),lib3.properties.context);
            expect(filter.ignored('apple/banana'),isTrue);
            expect(filter.ignored('apple/banana/cantaloupe'),isFalse);
        });
        test('test_ignoreTree',() =>  {
            let filter = new bare.createInstance(any,null,root('/'),new core.DartList.literal('apple/**'),lib3.properties.context);
            expect(filter.ignored('apple/banana'),isTrue);
            expect(filter.ignored('apple/banana/cantaloupe'),isTrue);
        });
        test('test_ignoreSdkExt',() =>  {
            let filter = new bare.createInstance(any,null,root('/'),new core.DartList.literal('sdk_ext/**'),lib3.properties.context);
            expect(filter.ignored('sdk_ext/entry.dart'),isTrue);
            expect(filter.ignored('sdk_ext/lib/src/part.dart'),isTrue);
        });
        test('test_outsideRoot',() =>  {
            let filter = new bare.createInstance(any,null,root('/workspace/dart/sdk'),new core.DartList.literal('sdk_ext/**'),lib3.properties.context);
            expect(filter.ignored('/'),isTrue);
            expect(filter.ignored('/workspace'),isTrue);
            expect(filter.ignored('/workspace/dart'),isTrue);
            expect(filter.ignored('/workspace/dart/sdk'),isFalse);
            expect(filter.ignored('/workspace/dart/../dart/sdk'),isFalse);
        });
        test('test_relativePaths',() =>  {
            let filter = new bare.createInstance(any,null,root('/workspace/dart/sdk'),new core.DartList.literal('sdk_ext/**'),lib3.properties.context);
            expect(filter.ignored('../apple'),isTrue);
            expect(filter.ignored('../sdk/main.dart'),isFalse);
            expect(filter.ignored('../sdk/sdk_ext/entry.dart'),isTrue);
        });
    });
};
export class properties {
}
