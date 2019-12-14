/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser/parser_main.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./listener";
import * as lib4 from "./../../scanner/token";
import * as lib5 from "./identifier_context";
import * as lib6 from "@dart2ts/dart/uri";
import * as convert from "@dart2ts/dart/convert";
import * as io from "@dart2ts/dart/io";
import * as lib9 from "./../scanner/io";
import * as lib10 from "./../scanner";
import * as lib11 from "./top_level_parser";

export var mainEntryPoint : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    for(let argument of arguments) {
        if (new core.DartString(argument).startsWith("@")) {
            let uri : lib6.Uri = lib6.Uri.base.resolve(new core.DartString(argument).substring(1));
            for await(let file of new io.File.fromUri(uri).openRead().transform(convert.properties.UTF8.decoder).transform(new convert.LineSplitter())) {
                outLine(uri.resolve(file));
            }
        }else {
            outLine(lib6.Uri.base.resolve(argument));
        }
    }
})());
export var outLine : (uri : lib6.Uri) => void = (uri : lib6.Uri) : void =>  {
    new lib11.TopLevelParser(new DebugListener()).parseUnit(lib10.scan(lib9.readBytesFromFileSync(uri)).tokens);
};
export namespace DebugListener {
    export type Constructors = lib3.Listener.Constructors | 'DebugListener';
    export type Interface = Omit<DebugListener, Constructors>;
}
@DartClass
export class DebugListener extends lib3.Listener {
    handleIdentifier(token : lib4.Token,context : lib5.IdentifierContext) : void {
        this.logEvent(`Identifier: ${token.lexeme}`);
    }
    logEvent(name : string) : void {
        core.print(name);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DebugListener() {
    }
}

export class properties {
}
