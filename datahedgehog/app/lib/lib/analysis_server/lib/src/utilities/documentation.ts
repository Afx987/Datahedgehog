/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/utilities/documentation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var getDartDocSummary : (str : string) => string = (str : string) : string =>  {
    if (str == null) {
        return null;
    }
    let lines : core.DartList<string> = new core.DartString(str).split('\n');
    let sb : core.DartStringBuffer = new core.DartStringBuffer();
    let firstLine : boolean = true;
    for(let line of lines) {
        if (sb.length != 0 && new core.DartString(line).isEmpty) {
            return sb.toString();
        }
        if (!firstLine) {
            sb.write('\n');
        }
        firstLine = false;
        sb.write(line);
    }
    return sb.toString();
};
export var removeDartDocDelimiters : (str : string) => string = (str : string) : string =>  {
    if (str == null) {
        return null;
    }
    if (new core.DartString(str).startsWith('/**')) {
        str = new core.DartString(str).substring(3);
    }
    if (new core.DartString(str).endsWith("*/")) {
        str = new core.DartString(str).substring(0,new core.DartString(str).length - 2);
    }
    str = new core.DartString(str).trim();
    let lines : core.DartList<string> = new core.DartString(str).split('\n');
    let sb : core.DartStringBuffer = new core.DartStringBuffer();
    let firstLine : boolean = true;
    for(let line of lines) {
        line = new core.DartString(line).trim();
        if (new core.DartString(line).startsWith("*")) {
            line = new core.DartString(line).substring(1);
            if (new core.DartString(line).startsWith(" ")) {
                line = new core.DartString(line).substring(1);
            }
        }else if (new core.DartString(line).startsWith("///")) {
            line = new core.DartString(line).substring(3);
            if (new core.DartString(line).startsWith(" ")) {
                line = new core.DartString(line).substring(1);
            }
        }
        if (!firstLine) {
            sb.write('\n');
        }
        firstLine = false;
        sb.write(line);
    }
    str = sb.toString();
    return str;
};
export class properties {
}
