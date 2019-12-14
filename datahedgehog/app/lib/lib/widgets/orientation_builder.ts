/** Library asset:datahedgehog_monitor/lib/lib/widgets/orientation_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./media_query";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib7 from "./layout_builder";

export namespace OrientationBuilder {
    export type Constructors = lib3.StatelessWidget.Constructors | 'OrientationBuilder';
    export type Interface = Omit<OrientationBuilder, Constructors>;
}
@DartClass
export class OrientationBuilder extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext,orientation : lib5.Orientation) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OrientationBuilder(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext,orientation : lib5.Orientation) => lib3.Widget}) {
        let {key,builder} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.builder = builder;
    }
     : any;

     : any;

     : any;

    builder : (context : lib3.BuildContext,orientation : lib5.Orientation) => lib3.Widget;

    _buildWithConstraints(context : lib3.BuildContext,constraints : lib6.BoxConstraints) : lib3.Widget {
        let orientation : lib5.Orientation = constraints.maxWidth > constraints.maxHeight ? lib5.Orientation.landscape : lib5.Orientation.portrait;
        return this.builder(context,orientation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib7.LayoutBuilder({
            builder : this._buildWithConstraints.bind(this)});
    }
}

export class properties {
}
