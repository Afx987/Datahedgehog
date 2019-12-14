/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/channel/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./byte_stream_channel_test";
import * as lib4 from "./web_socket_channel_test";

export var main : () => any = () =>  {
    group('computer',() =>  {
        lib3.main();
        lib4.main();
    });
};
export class properties {
}
