/** Library asset:datahedgehog_monitor/lib/lib/services/clipboard.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./system_channels";

export namespace ClipboardData {
    export type Constructors = 'ClipboardData';
    export type Interface = Omit<ClipboardData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ClipboardData {
    constructor(_namedArguments? : {text? : string}) {
    }
    @defaultConstructor
    ClipboardData(_namedArguments? : {text? : string}) {
        let {text} = Object.assign({
        }, _namedArguments );
        this.text = text;
    }
    text : string;

}

export namespace Clipboard {
    export type Constructors = '_';
    export type Interface = Omit<Clipboard, Constructors>;
}
@DartClass
export class Clipboard {
    @namedConstructor
    _() {
    }
    static _ : new() => Clipboard;

    private static __$kTextPlain : string;
    static get kTextPlain() : string { 
        if (this.__$kTextPlain===undefined) {
            this.__$kTextPlain = 'text/plain';
        }
        return this.__$kTextPlain;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    setData(data : ClipboardData) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            op(Op.LT,await lib3.SystemChannels.platform.invokeMethod.bind(lib3.SystemChannels.platform),);
            op(Op.GT,,('Clipboard.setData'));
            new core.DartMap.literal([
                ['text',data.text]]);
            ;
        } )());
    }

    static getData(format : string) : async.Future<ClipboardData> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : core.DartMap<string,any> = await lib3.SystemChannels.platform.invokeMethod('Clipboard.getData',format);
            if (result == null) return null;
            return ClipboardData({
                text : result.get('text')});
        } )());
    }

}

export class properties {
}
