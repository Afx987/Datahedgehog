/** Library asset:datahedgehog_monitor/lib/lib/widgets/unique_widget.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";

export namespace UniqueWidget {
    export type Constructors = lib3.StatefulWidget.Constructors | 'UniqueWidget';
    export type Interface<T extends lib3.State<lib3.StatefulWidget>> = Omit<UniqueWidget<T extends lib3.State<lib3.StatefulWidget>>, Constructors>;
}
@DartClass
export class UniqueWidget<T extends lib3.State<lib3.StatefulWidget>> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib3.GlobalKey<T>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UniqueWidget(_namedArguments? : {key? : lib3.GlobalKey<T>}) {
        let {key} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createState() : T{ throw 'abstract'}
    get currentState() : T {
        let globalKey : lib3.GlobalKey<T> = this.key;
        return globalKey.currentState;
    }
}

export class properties {
}
