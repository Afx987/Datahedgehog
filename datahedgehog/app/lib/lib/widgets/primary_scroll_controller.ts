/** Library asset:datahedgehog_monitor/lib/lib/widgets/primary_scroll_controller.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./scroll_controller";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace PrimaryScrollController {
    export type Constructors = lib3.InheritedWidget.Constructors | 'PrimaryScrollController' | 'none';
    export type Interface = Omit<PrimaryScrollController, Constructors>;
}
@DartClass
export class PrimaryScrollController extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,controller? : lib5.ScrollController,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrimaryScrollController(_namedArguments? : {key? : lib4.Key,controller? : lib5.ScrollController,child? : lib3.Widget}) {
        let {key,controller,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.controller = controller;
    }
     : any;

     : any;

    key;
    child;

     : any;

    @namedConstructor
    none(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        this.controller = null;
        super.InheritedWidget({
            key : key,child : child});
    }
    static none : new(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) => PrimaryScrollController;

    controller : lib5.ScrollController;

    static of(context : lib3.BuildContext) : lib5.ScrollController {
        let result : PrimaryScrollController = context.inheritFromWidgetOfExactType(PrimaryScrollController);
        return ((t)=>(!!t)?t.controller:null)(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : PrimaryScrollController) : boolean {
        return this.controller != oldWidget.controller;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.DiagnosticsProperty('controller',this.controller,{
            ifNull : 'no controller',showName : false}));
    }
}

export class properties {
}
