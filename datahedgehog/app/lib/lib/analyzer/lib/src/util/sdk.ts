/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/util/sdk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var getSdkPath : (args? : core.DartList<string>) => string = (args? : core.DartList<string>) : string =>  {
    if (args != null) {
        let index : number = args.indexOf('--dart-sdk');
        if (index != -1 && (index + 1 < args.length)) {
            return args[index + 1];
        }
        for(let arg of args) {
            if (new core.DartString(arg).startsWith('--dart-sdk=')) {
                return new core.DartString(arg).substring(new core.DartString('--dart-sdk=').length);
            }
        }
    }
    if (io.Platform.environment.get('DART_SDK') != null) {
        return io.Platform.environment.get('DART_SDK');
    }
    return lib4.dirname(lib4.dirname(io.Platform.resolvedExecutable));
};
export class properties {
}
