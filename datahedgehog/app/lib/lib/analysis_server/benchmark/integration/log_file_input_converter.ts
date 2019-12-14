/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/log_file_input_converter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./input_converter";
import * as convert from "@dart2ts/dart/convert";
import * as lib5 from "./operation";

export namespace LogFileInputConverter {
    export type Constructors = lib3.CommonInputConverter.Constructors | 'LogFileInputConverter';
    export type Interface = Omit<LogFileInputConverter, Constructors>;
}
@DartClass
export class LogFileInputConverter extends lib3.CommonInputConverter {
    constructor(tmpSrcDirPath : string,srcPathMap : lib3.PathMap) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LogFileInputConverter(tmpSrcDirPath : string,srcPathMap : lib3.PathMap) {
        super.CommonInputConverter(tmpSrcDirPath,srcPathMap);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convert(line : string) : lib5.Operation {
        try {
            let timeStampString : string = LogFileInputConverter._parseTimeStamp(line);
            let data : string = new core.DartString(line).substring(new core.DartString(timeStampString).length);
            if (new core.DartString(data).startsWith(properties.RECEIVED_FRAGMENT)) {
                let json : core.DartMap<string,any> = this.asMap(convert.properties.JSON.decode(new core.DartString(data).substring(4)));
                if (json.containsKey('event')) {
                    return this.convertNotification(json);
                }else {
                    return this.convertResponse(json);
                }
            }else if (new core.DartString(data).startsWith(properties.SENT_FRAGMENT)) {
                let json : core.DartMap<string,any> = this.asMap(convert.properties.JSON.decode(new core.DartString(data).substring(4)));
                if (json.containsKey('method')) {
                    return this.convertRequest(json);
                }
                return null;
            }
            this.logger.log(Level.INFO,`unknown input line: ${line}`);
            return null;
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                throw new bare.createInstance(any,null,`Failed to parse line\n  ${line}`,new bare.createInstance(any,null,e,s));
            }
        }
    }
    static isFormat(line : string) : boolean {
        let timeStampString : string = LogFileInputConverter._parseTimeStamp(line);
        let start : number = new core.DartString(timeStampString).length;
        let end : number = start + properties.CONNECTED_MSG_FRAGMENT.length;
        return (10 < start && end < new core.DartString(line).length) && new core.DartString(line).substring(start,end) == properties.CONNECTED_MSG_FRAGMENT;
    }
    static _parseTimeStamp(line : string) : string {
        let index : number = 0;
        while (index < new core.DartString(line).length){
            let code : number = new core.DartString(line).codeUnitAt(index);
            if (code < properties.ZERO || properties.NINE < code) {
                return new core.DartString(line).substring(0,index);
            }
            ++index;
        }
        return line;
    }
}

export class properties {
    private static __$CONNECTED_MSG_FRAGMENT;
    static get CONNECTED_MSG_FRAGMENT() { 
        if (this.__$CONNECTED_MSG_FRAGMENT===undefined) {
            this.__$CONNECTED_MSG_FRAGMENT = ' <= {"event":"server.connected"';
        }
        return this.__$CONNECTED_MSG_FRAGMENT;
    }
    static set CONNECTED_MSG_FRAGMENT(__$value : any)  { 
        this.__$CONNECTED_MSG_FRAGMENT = __$value;
    }

    private static __$RECEIVED_FRAGMENT;
    static get RECEIVED_FRAGMENT() { 
        if (this.__$RECEIVED_FRAGMENT===undefined) {
            this.__$RECEIVED_FRAGMENT = ' <= {';
        }
        return this.__$RECEIVED_FRAGMENT;
    }
    static set RECEIVED_FRAGMENT(__$value : any)  { 
        this.__$RECEIVED_FRAGMENT = __$value;
    }

    private static __$SENT_FRAGMENT;
    static get SENT_FRAGMENT() { 
        if (this.__$SENT_FRAGMENT===undefined) {
            this.__$SENT_FRAGMENT = ' => {';
        }
        return this.__$SENT_FRAGMENT;
    }
    static set SENT_FRAGMENT(__$value : any)  { 
        this.__$SENT_FRAGMENT = __$value;
    }

    private static __$NINE : number;
    static get NINE() : number { 
        if (this.__$NINE===undefined) {
            this.__$NINE = new core.DartString('9').codeUnitAt(0);
        }
        return this.__$NINE;
    }
    static set NINE(__$value : number)  { 
        this.__$NINE = __$value;
    }

    private static __$ZERO : number;
    static get ZERO() : number { 
        if (this.__$ZERO===undefined) {
            this.__$ZERO = new core.DartString('0').codeUnitAt(0);
        }
        return this.__$ZERO;
    }
    static set ZERO(__$value : number)  { 
        this.__$ZERO = __$value;
    }

}
