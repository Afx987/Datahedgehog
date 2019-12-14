/** Library asset:datahedgehog_monitor/lib/lib/material/grid_tile.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export namespace GridTile {
    export type Constructors = lib3.StatelessWidget.Constructors | 'GridTile';
    export type Interface = Omit<GridTile, Constructors>;
}
@DartClass
export class GridTile extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,header? : lib3.Widget,footer? : lib3.Widget,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GridTile(_namedArguments? : {key? : lib4.Key,header? : lib3.Widget,footer? : lib3.Widget,child? : lib3.Widget}) {
        let {key,header,footer,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.header = header;
        this.footer = footer;
        this.child = child;
    }
     : any;

     : any;

     : any;

    header : lib3.Widget;

    footer : lib3.Widget;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (op(Op.EQUALS,this.header,null) && op(Op.EQUALS,this.footer,null)) return this.child;
        let children : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>(lib5.Positioned.fill({
            child : this.child}));
        if (this.header != null) {
            children.add(lib5.Positioned({
                top : 0.0,left : 0.0,right : 0.0,child : this.header}));
        }
        if (this.footer != null) {
            children.add(lib5.Positioned({
                left : 0.0,bottom : 0.0,right : 0.0,child : this.footer}));
        }
        return lib5.Stack({
            children : children});
    }
}

export class properties {
}
