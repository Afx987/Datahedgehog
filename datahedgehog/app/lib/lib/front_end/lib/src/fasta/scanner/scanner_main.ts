/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/scanner_main.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./../scanner";
import * as lib5 from "./io";

export var scanAll : (files : core.DartMap<lib3.Uri,core.DartList<number>>) => any = (files : core.DartMap<lib3.Uri,core.DartList<number>>) =>  {
    let sw : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    let byteCount : number = 0;
    files.forEach((uri : lib3.Uri,bytes : core.DartList<number>) =>  {
        lib4.scan(bytes);
        byteCount += bytes.length - 1;
    });
    sw.stop();
    core.print(`Scanning files took: ${sw.elapsed}`);
    core.print(`Bytes/ms: ${byteCount / sw.elapsedMilliseconds}`);
};
export var mainEntryPoint : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    let files : core.DartMap<lib3.Uri,core.DartList<number>> = new core.DartMap.literal([
    ]);
    let sw : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    for(let name of arguments) {
        let uri : lib3.Uri = lib3.Uri.base.resolve(name);
        let bytes : core.DartList<number> = lib5.readBytesFromFileSync(uri);
        files.set(uri,bytes);
    }
    sw.stop();
    core.print(`Reading files took: ${sw.elapsed}`);
    scanAll(files);
};
export class properties {
}
