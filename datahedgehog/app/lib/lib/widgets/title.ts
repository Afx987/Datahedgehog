/** Library asset:datahedgehog_monitor/lib/lib/widgets/title.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/services/system_chrome";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace Title {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Title';
    export type Interface = Omit<Title, Constructors>;
}
@DartClass
export class Title extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,title? : string,color? : any,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Title(_namedArguments? : {key? : lib4.Key,title? : string,color? : any,child? : lib3.Widget}) {
        let {key,title,color,child} = Object.assign({
            "title" : ''}, _namedArguments );
        this.assert = assert;
        this.title = title;
        this.color = color;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    title : string;

    color : any;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        lib5.SystemChrome.setApplicationSwitcherDescription(lib5.ApplicationSwitcherDescription({
            label : this.title,primaryColor : this.color.value}));
        return this.child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.StringProperty('title',this.title,{
            defaultValue : ''}));
        properties.add(lib6.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
    }
}

export class properties {
}
