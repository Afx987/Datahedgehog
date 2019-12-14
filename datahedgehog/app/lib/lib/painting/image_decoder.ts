/** Library asset:datahedgehog_monitor/lib/lib/painting/image_decoder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib4 from "./binding";

export var decodeImageFromList : (bytes : typed_data.Uint8List) => async.Future<any> = (bytes : typed_data.Uint8List) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let codec : any = await lib4.properties.PaintingBinding.instance.instantiateImageCodec(bytes);
    let frameInfo : any = await codec.getNextFrame();
    return frameInfo.image;
})());
export class properties {
}
