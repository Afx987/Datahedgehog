/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/stress/utilities/logger.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Logger {
    export type Constructors = 'Logger';
    export type Interface = Omit<Logger, Constructors>;
}
@DartClass
export class Logger {
    private static __$_labelWidth : number;
    static get _labelWidth() : number { 
        if (this.__$_labelWidth===undefined) {
            this.__$_labelWidth = 8;
        }
        return this.__$_labelWidth;
    }

    private static __$_separator : string;
    static get _separator() : string { 
        if (this.__$_separator===undefined) {
            this.__$_separator = ' : ';
        }
        return this.__$_separator;
    }

    sink : core.DartStringSink;

    constructor(sink : core.DartStringSink) {
    }
    @defaultConstructor
    Logger(sink : core.DartStringSink) {
        this.sink = sink;
    }
    log(label : string,content : string,_namedArguments? : {arguments? : core.DartList<string>}) : void {
        let {arguments} = Object.assign({
            "arguments" : null}, _namedArguments );
        for(let i : number = Logger._labelWidth - new core.DartString(label).length; i > 0; i--){
            this.sink.write(' ');
        }
        this.sink.write(label);
        this.sink.write(Logger._separator);
        this.sink.write(content);
        ((_45_)=>(!!_45_)?_45_.forEach((argument : string) =>  {
            this.sink.write(' ');
            this.sink.write(argument);
        }):null)(arguments);
        this.sink.writeln();
    }
}

export class properties {
}
