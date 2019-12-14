/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/_fasta/log_collector.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";
import * as lib5 from "@dart2ts/dart/uri";
import * as isolate from "@dart2ts/dart/isolate";

export var badRequest : (request : io.HttpRequest,status : number,message : string) => any = (request : io.HttpRequest,status : number,message : string) =>  {
    request.response.statusCode = status;
    request.response.write(`<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>${message}</title>\n  </head>\n  <body>\n    <h1>${message}</h1>\n  </body>\n</html>\n`);
    request.response.close().catchError((e : any,s : any) =>  {
        core.print(`Request error: ${e}.`);
    });
    core.print(`${request.uri}: ${message}`);
};
export var collectLog : (time : core.DartDateTime,request : io.HttpRequest) => any = (time : core.DartDateTime,request : io.HttpRequest) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let json : string = await request.transform(convert.properties.UTF8.decoder).join();
    let data;
    try {
        data = convert.properties.JSON.decode(json);
    } catch (__error__) {

        if (is(__error__,core.FormatException)){
            let e : core.FormatException = __error__;
            core.print(e);
            return badRequest(request,io.HttpStatus.BAD_REQUEST,`Malformed JSON data: ${e.message}.`);
        }
    }
    if (isNot(data, core.DartMap<any,any>)) {
        return badRequest(request,io.HttpStatus.BAD_REQUEST,"Malformed JSON data: not a map.");
    }
    if (data.get("type") != "crash") {
        return badRequest(request,io.HttpStatus.BAD_REQUEST,"Malformed JSON data: type should be 'crash'.");
    }
    request.response.close();
    let year : string = new core.DartString(`${time.year}`).padLeft(4,"0");
    let month : string = new core.DartString(`${time.month}`).padLeft(2,"0");
    let day : string = new core.DartString(`${time.day}`).padLeft(2,"0");
    let us : string = new core.DartString(`${time.microsecondsSinceEpoch}`).padLeft(19,'0');
    let uri : lib5.Uri = lib5.Uri.base.resolve(`crash_logs/${data.get('client')}/${year}-${month}-${day}/${us}.log`);
    let file : io.File = new io.File.fromUri(uri);
    await file.parent.create({
        recursive : true});
    await file.writeAsString(json);
    core.print(`Wrote ${uri.toFilePath()}`);
    let type : string = data.get("type");
    let text : string = data.get("uri");
    uri = text == null ? null : lib5.Uri.parse(text);
    let charOffset : number = data.get("offset");
    let error = data.get("error");
    text = data.get("trace");
    let trace : core.DartStackTrace = text == null ? null : new core.DartStackTrace.fromString(text);
    let client : string = data.get("client");
    core.print(`date: ${time}\ntype: ${type}\nclient: ${client}\nuri: ${uri}\noffset: ${charOffset}\nerror:\n${error}\ntrace:\n${trace}\n`);
})());
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let keepAlive : isolate.RawReceivePort = new isolate.RawReceivePort();
    let uri : lib5.Uri;
    if (arguments.length == 1) {
        uri = lib5.Uri.base.resolve(arguments.single);
    }else if (arguments.length == 0) {
        uri = lib5.Uri.parse(defaultServerAddress);
    }else {
        throw `Unexpected arguments: ${arguments.join(' ')}.`;
    }
    let port : number = uri.hasPort ? uri.port : 0;
    let host = new core.DartString(uri.host).isEmpty ? io.InternetAddress.LOOPBACK_IP_V4 : uri.host;
    let server : io.HttpServer = await io.HttpServer.bind(host,port);
    core.print(`Listening on http://${server.address.host}:${server.port}/`);
    for await(let request of server) {
        if (request.method != "POST") {
            badRequest(request,io.HttpStatus.METHOD_NOT_ALLOWED,"Not allowed.");
            continue;
        }
        if (request.uri.path != "/") {
            badRequest(request,io.HttpStatus.NOT_FOUND,"Not found.");
            continue;
        }
        collectLog(new core.DartDateTime.now(),request);
    }
    keepAlive.close();
})());
export class properties {
}
