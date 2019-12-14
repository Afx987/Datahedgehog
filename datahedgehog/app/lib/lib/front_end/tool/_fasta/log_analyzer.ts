/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/_fasta/log_analyzer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let cl : any = CommandLine.parse(arguments);
    let fields : core.DartSet<string> = cl.commaSeparated("--fields=");
    if (fields.isEmpty) {
        fields.addAll(new core.DartList.literal("uri","offset","json:error"));
    }
    for(let filename of cl.arguments) {
        let json : string = await new io.File(filename).readAsString();
        let data : core.DartMap<string,any> = convert.properties.JSON.decode(json) as core.DartMap<string,any>;
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        let isFirst : boolean = true;
        for(let field of fields) {
            if (!isFirst) {
                sb.write(":");
            }
            if (new core.DartString(field).startsWith("json:")) {
                field = new core.DartString(field).substring(5);
                sb.write(convert.properties.JSON.encode(data.get(field)));
            }else {
                sb.write(data.get(field));
            }
            isFirst = false;
        }
        core.print(`${sb}`);
    }
})());
export class properties {
}
