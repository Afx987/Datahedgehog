/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/errors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./messages";
import * as lib5 from "./colors";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export var internalError : (error : core.DartObject,uri? : lib3.Uri,charOffset? : number) => any = (error : core.DartObject,uri? : lib3.Uri,charOffset? : number) : any =>  {
    charOffset = charOffset || -1;
    if (op(Op.EQUALS,uri,null) && charOffset == -1) {
        throw error;
    }else {
        throw lib4.format(uri,charOffset,`Internal error: ${safeToString(error)}`);
    }
};
export var inputError : (uri : lib3.Uri,charOffset : number,error : core.DartObject) => any = (uri : lib3.Uri,charOffset : number,error : core.DartObject) : any =>  {
    if (lib4.properties.errorsAreFatal && lib4.properties.isVerbose) {
        core.print(core.DartStackTrace.current);
    }
    throw new InputError(uri,charOffset,error);
};
export var printUnexpected : (uri : lib3.Uri,charOffset : number,message : string) => string = (uri : lib3.Uri,charOffset : number,message : string) : string =>  {
    let formattedMessage : string = formatUnexpected(uri,charOffset,message);
    if (lib4.properties.errorsAreFatal) {
        core.print(formattedMessage);
        if (lib4.properties.isVerbose) core.print(core.DartStackTrace.current);
        throw new InputError(uri,charOffset,message);
    }
    core.print(formattedMessage);
    return formattedMessage;
};
export var formatUnexpected : (uri : lib3.Uri,charOffset : number,message : string) => string = (uri : lib3.Uri,charOffset : number,message : string) : string =>  {
    return lib4.format(uri,charOffset,colorError(`Error: ${message}`));
};
export var colorError : (message : string) => string = (message : string) : string =>  {
    return lib5.red(message);
};
export var resetCrashReporting : () => void = () : void =>  {
    properties.firstSourceUri = null;
    properties.hasCrashed = false;
};
export var reportCrash : (error : any,trace : core.DartStackTrace,uri? : lib3.Uri,charOffset? : number) => async.Future<any> = (error : any,trace : core.DartStackTrace,uri? : lib3.Uri,charOffset? : number) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    var note : (note : string) => any = (note : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        io.properties.stderr.write(note);
        await io.properties.stderr.flush();
    })());
    if (properties.hasCrashed) return new async.Future.error(error,trace);
    if (is(error, Crash)) {
        trace = (error.trace || trace);
        uri = (error.uri || uri);
        charOffset = (error.charOffset || charOffset);
        error = error.error;
    }
    uri = ( uri ) || ( properties.firstSourceUri );
    properties.hasCrashed = true;
    let data : core.DartMap<string,any> = new core.DartMap.literal([
    ]);
    data.set("type","crash");
    data.set("client","package:fasta");
    if (uri != null) data.set("uri",`${uri}`);
    if (charOffset != null) data.set("offset",charOffset);
    data.set("error",safeToString(error));
    data.set("trace",`${trace}`);
    let json : string = convert.properties.JSON.encode(data);
    let client : io.HttpClient = new io.HttpClient();
    try {
        let uri : lib3.Uri = lib3.Uri.parse(properties.defaultServerAddress);
        let request : io.HttpClientRequest;
        try {
            request = await client.postUrl(uri);
        } catch (__error__) {

            if (is(__error__,io.SocketException)){
                await client.close({
                    force : true});
                return new async.Future.error(error,trace);
            }
        }
        if (request != null) {
            await note("\nSending crash report data");
            request.persistentConnection = false;
            request.bufferOutput = false;
            let host : string = ((t)=>(!!t)?t.host:null)(((t)=>(!!t)?t.remoteAddress:null)(((t)=>(!!t)?t.connectionInfo:null)(request)));
            let port : number = ((t)=>(!!t)?t.remotePort:null)(((t)=>(!!t)?t.connectionInfo:null)(request));
            await note(` to ${host}:${port}`);
            ((_) : io.HttpClientRequest =>  {
                {
                    _.headers.contentType = io.ContentType.JSON;
                    _.write(json);
                    return _;
                }
            })(await request);
            await request.close();
            await note(".");
        }
    } catch (__error__) {

        {
            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let e = __error__;
            await note(`\n${safeToString(e)}\n${s}\n`);
            await note(`\n\n\nFE::ERROR::${json}\n\n\n`);
        }
    }
    await client.close({
        force : true});
    await note("\n");
    return new async.Future.error(error,trace);
})());
export var safeToString : (object : core.DartObject) => string = (object : core.DartObject) : string =>  {
    try {
        return `${object}`;
    } catch (__error__) {

        {
            let e = __error__;
            return `Error when converting ${object.runtimeType} to string.`;
        }
    }
};
export namespace InputError {
    export type Constructors = 'InputError';
    export type Interface = Omit<InputError, Constructors>;
}
@DartClass
export class InputError {
    uri : lib3.Uri;

    charOffset : number;

    error : core.DartObject;

    constructor(uri : lib3.Uri,charOffset : number,error : core.DartObject) {
    }
    @defaultConstructor
    InputError(uri : lib3.Uri,charOffset : number,error : core.DartObject) {
        this.charOffset = (charOffset || -1);
        this.uri = uri;
        this.error = error;
    }
    toString() {
        return `InputError: ${this.error}`;
    }
    format() : string {
        return formatUnexpected(this.uri,this.charOffset,safeToString(this.error));
    }
}

export namespace Crash {
    export type Constructors = 'Crash';
    export type Interface = Omit<Crash, Constructors>;
}
@DartClass
export class Crash {
    uri : lib3.Uri;

    charOffset : number;

    error : core.DartObject;

    trace : core.DartStackTrace;

    constructor(uri : lib3.Uri,charOffset : number,error : core.DartObject,trace : core.DartStackTrace) {
    }
    @defaultConstructor
    Crash(uri : lib3.Uri,charOffset : number,error : core.DartObject,trace : core.DartStackTrace) {
        this.uri = uri;
        this.charOffset = charOffset;
        this.error = error;
        this.trace = trace;
    }
    toString() : string {
        return `Crash when compiling ${this.uri},\nat character offset ${this.charOffset}:\n${this.error}${op(Op.EQUALS,this.trace,null) ? '' : `\n${this.trace}`}\n`;
    }
}

export class properties {
    private static __$defaultServerAddress : string;
    static get defaultServerAddress() : string { 
        if (this.__$defaultServerAddress===undefined) {
            this.__$defaultServerAddress = "http://127.0.0.1:59410/";
        }
        return this.__$defaultServerAddress;
    }
    static set defaultServerAddress(__$value : string)  { 
        this.__$defaultServerAddress = __$value;
    }

    private static __$hasCrashed : boolean;
    static get hasCrashed() : boolean { 
        if (this.__$hasCrashed===undefined) {
            this.__$hasCrashed = false;
        }
        return this.__$hasCrashed;
    }
    static set hasCrashed(__$value : boolean)  { 
        this.__$hasCrashed = __$value;
    }

    private static __$firstSourceUri : lib3.Uri;
    static get firstSourceUri() : lib3.Uri { 
        return this.__$firstSourceUri;
    }
    static set firstSourceUri(__$value : lib3.Uri)  { 
        this.__$firstSourceUri = __$value;
    }

}
