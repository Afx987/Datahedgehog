/** Library asset:datahedgehog_monitor/lib/lib/widgets/spacer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./basic";

export namespace Spacer {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Spacer';
    export type Interface = Omit<Spacer, Constructors>;
}
@DartClass
export class Spacer extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,flex? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Spacer(_namedArguments? : {key? : lib4.Key,flex? : number}) {
        let {key,flex} = Object.assign({
            "flex" : 1}, _namedArguments );
        this.assert = assert;
        this.flex = flex;
    }
     : any;

     : any;

     : any;

     : any;

    flex : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib5.Expanded({
            flex : this.flex,child : new lib5.SizedBox.shrink()});
    }
}

export class properties {
}
