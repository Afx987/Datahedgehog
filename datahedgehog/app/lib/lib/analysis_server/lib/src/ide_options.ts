/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/ide_options.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace IdeOptions {
    export type Constructors = never;
    export type Interface = Omit<IdeOptions, Constructors>;
}
@DartClass
export class IdeOptions {
    @namedFactory
    static $from(options : any) : IdeOptions {
        return ((_) : IdeOptionsImpl =>  {
            {
                _.generateFlutterWidgetChildrenBoilerPlate = options.enableVerboseFlutterCompletions;
                return _;
            }
        })(new IdeOptionsImpl());
    }
    static from : new(options : any) => IdeOptions;

    @AbstractProperty
    get generateFlutterWidgetChildrenBoilerPlate() : boolean{ throw 'abstract'}
}

export namespace IdeOptionsImpl {
    export type Constructors = 'IdeOptionsImpl';
    export type Interface = Omit<IdeOptionsImpl, Constructors>;
}
@DartClass
@Implements(IdeOptions)
export class IdeOptionsImpl implements IdeOptions.Interface {
    constructor() {
    }
    @defaultConstructor
    IdeOptionsImpl() {
        this.generateFlutterWidgetChildrenBoilerPlate = false;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    generateFlutterWidgetChildrenBoilerPlate : boolean;

}

export class properties {
}
