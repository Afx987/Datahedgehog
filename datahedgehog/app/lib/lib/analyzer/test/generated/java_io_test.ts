/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/java_io_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    group('JavaFile',() =>  {
        group('toURI',() =>  {
            test('forAbsolute',() =>  {
                let tempPath : string = '/temp';
                let absolutePath : string = lib3.properties.context.join(tempPath,'foo.dart');
                expect(lib3.properties.context.isAbsolute(absolutePath),isTrue,{
                    reason : `"${absolutePath}" is not absolute`});
                let uri : lib4.Uri = new bare.createInstance(any,null,absolutePath).toURI();
                expect(uri.isAbsolute,isTrue);
                expect(uri.scheme,'file');
            });
            test('forRelative',() =>  {
                let tempPath : string = '/temp';
                let absolutePath : string = lib3.properties.context.join(tempPath,'foo.dart');
                expect(lib3.properties.context.isAbsolute(absolutePath),isTrue,{
                    reason : `"${absolutePath}" is not absolute`});
                let relPath : string = lib3.properties.context.relative(absolutePath);
                let uri : lib4.Uri = new bare.createInstance(any,null,relPath).toURI();
                expect(uri.isAbsolute,isTrue);
                expect(uri.scheme,'file');
            });
        });
    });
};
export class properties {
}
