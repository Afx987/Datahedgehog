/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/instrumentation_input_converter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./input_converter";
import * as lib4 from "./operation";
import * as convert from "@dart2ts/dart/convert";

export namespace InstrumentationInputConverter {
    export type Constructors = lib3.CommonInputConverter.Constructors | 'InstrumentationInputConverter';
    export type Interface = Omit<InstrumentationInputConverter, Constructors>;
}
@DartClass
export class InstrumentationInputConverter extends lib3.CommonInputConverter {
    codesSeen : core.DartSet<string>;

    readBuffer : core.DartStringBuffer;

    constructor(tmpSrcDirPath : string,srcPathMap : lib3.PathMap) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstrumentationInputConverter(tmpSrcDirPath : string,srcPathMap : lib3.PathMap) {
        this.codesSeen = new core.DartSet<string>();
        this.readBuffer = null;
        super.CommonInputConverter(tmpSrcDirPath,srcPathMap);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convert(line : string) : lib4.Operation {
        let fields : core.DartList<string>;
        try {
            fields = InstrumentationInputConverter._parseFields(line);
            if (fields.length < 2) {
                if (this.readBuffer != null) {
                    this.readBuffer.writeln(fields.length == 1 ? fields[0] : '');
                    return null;
                }
                throw `Failed to process line:\n${line}`;
            }
            if (this.readBuffer != null) {
                this.readBuffer = null;
            }
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                throw new bare.createInstance(any,null,`Failed to parse line\n${line}`,new bare.createInstance(any,null,e,s));
            }
        }
        let opCode : string = fields[1];
        if (opCode == InstrumentationService.TAG_NOTIFICATION) {
            return this.convertNotification(this.decodeJson(line,fields[2]));
        }else if (opCode == 'Read') {
            this.readBuffer = new core.DartStringBuffer(fields.length > 4 ? fields[4] : '');
            return null;
        }else if (opCode == InstrumentationService.TAG_REQUEST) {
            return this.convertRequest(this.decodeJson(line,fields[2]));
        }else if (opCode == InstrumentationService.TAG_RESPONSE) {
            return this.convertResponse(this.decodeJson(line,fields[2]));
        }else if (opCode == InstrumentationService.TAG_ANALYSIS_TASK) {
            return null;
        }else if (opCode == InstrumentationService.TAG_LOG_ENTRY) {
            return null;
        }else if (opCode == InstrumentationService.TAG_PERFORMANCE) {
            return null;
        }else if (opCode == InstrumentationService.TAG_SUBPROCESS_START) {
            return null;
        }else if (opCode == InstrumentationService.TAG_SUBPROCESS_RESULT) {
            return null;
        }else if (opCode == InstrumentationService.TAG_VERSION) {
            return null;
        }else if (opCode == InstrumentationService.TAG_WATCH_EVENT) {
            return null;
        }
        if (this.codesSeen.add(opCode)) {
            this.logger.log(Level.WARNING,`Ignored instrumentation op code: ${opCode}\n  ${line}`);
        }
        return null;
    }
    decodeJson(line : string,text : string) : core.DartMap<string,any> {
        try {
            return this.asMap(convert.properties.JSON.decode(text));
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                throw new bare.createInstance(any,null,`Failed to decode JSON: ${text}\n${line}`,new bare.createInstance(any,null,e,s));
            }
        }
    }
    static isFormat(line : string) : boolean {
        let fields : core.DartList<string> = InstrumentationInputConverter._parseFields(line);
        if (fields.length < 2) return false;
        let timeStamp : number = core.DartInt.parse(fields[0],{
            onError : (_ : any) =>  {
                return -1;
            }});
        let opCode : string = fields[1];
        return timeStamp > 0 && opCode == 'Ver';
    }
    static _parseFields(line : string) : core.DartList<string> {
        let fields : core.DartList<string> = new core.DartList<string>();
        let index : number = 0;
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        while (index < new core.DartString(line).length){
            let code : number = new core.DartString(line).codeUnitAt(index);
            if (code == properties.COLON) {
                let next : number = index + 1;
                if (next < new core.DartString(line).length && new core.DartString(line).codeUnitAt(next) == properties.COLON) {
                    sb.write(':');
                    ++index;
                }else {
                    fields.add(sb.toString());
                    sb.clear();
                }
            }else {
                sb.writeCharCode(code);
            }
            ++index;
        }
        if (sb.isNotEmpty) {
            fields.add(sb.toString());
        }
        return fields;
    }
}

export class properties {
    private static __$COLON : number;
    static get COLON() : number { 
        if (this.__$COLON===undefined) {
            this.__$COLON = new core.DartString(':').codeUnitAt(0);
        }
        return this.__$COLON;
    }
    static set COLON(__$value : number)  { 
        this.__$COLON = __$value;
    }

}
