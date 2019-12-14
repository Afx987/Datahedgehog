/** Library asset:datahedgehog_monitor/lib/lib/widgets/annotated_region.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/object";

export namespace AnnotatedRegion {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'AnnotatedRegion';
    export type Interface<T> = Omit<AnnotatedRegion<T>, Constructors>;
}
@DartClass
export class AnnotatedRegion<T> extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,value? : T,sized? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnnotatedRegion(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,value? : T,sized? : boolean}) {
        let {key,child,value,sized} = Object.assign({
            "sized" : true}, _namedArguments );
        this.assert = assert;
        this.value = value;
        this.sized = sized;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    value : T;

    sized : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib6.RenderObject {
        return lib5.RenderAnnotatedRegion({
            value : this.value,sized : this.sized});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib5.RenderAnnotatedRegion<T>) : any {
        ((_) : lib5.RenderAnnotatedRegion<T> =>  {
            {
                _.value = this.value;
                _.sized = this.sized;
                return _;
            }
        })(renderObject);
    }
}

export class properties {
}
