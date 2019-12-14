/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/messages.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./compiler_context";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./errors";
import * as lib6 from "./colors";
import * as lib7 from "./util/relativize";

export var warning : (uri : lib4.Uri,charOffset : number,message : string) => void = (uri : lib4.Uri,charOffset : number,message : string) : void =>  {
    if (properties.hideWarnings) return;
    core.print(format(uri,charOffset,colorWarning(`Warning: ${message}`)));
    if (properties.warningsAreFatal) {
        if (properties.isVerbose) core.print(core.DartStackTrace.current);
        throw new lib5.InputError(uri,charOffset,"Compilation aborted due to fatal warnings.");
    }
};
export var nit : (uri : lib4.Uri,charOffset : number,message : string) => void = (uri : lib4.Uri,charOffset : number,message : string) : void =>  {
    if (properties.hideNits) return;
    core.print(format(uri,charOffset,colorNit(`Nit: ${message}`)));
    if (properties.nitsAreFatal) {
        if (properties.isVerbose) core.print(core.DartStackTrace.current);
        throw new lib5.InputError(uri,charOffset,"Compilation aborted due to fatal nits.");
    }
};
export var colorWarning : (message : string) => string = (message : string) : string =>  {
    return lib6.magenta(message);
};
export var colorNit : (message : string) => string = (message : string) : string =>  {
    return lib6.cyan(message);
};
export var format : (uri : lib4.Uri,charOffset : number,message : string) => string = (uri : lib4.Uri,charOffset : number,message : string) : string =>  {
    if (uri != null) {
        let path : string = lib7.relativizeUri(uri);
        let location : any = charOffset == -1 ? null : getLocation(path,charOffset);
        let sourceLine : string = getSourceLine(location);
        if (sourceLine == null) {
            sourceLine = "";
        }else {
            sourceLine = `\n${sourceLine}\n` + `${op(Op.TIMES,' ',(op(Op.MINUS,location.column,1)))}^`;
        }
        let position : string = (((_551_)=>(!!_551_)?_551_.toString():null)(location) || path);
        return `${position}: ${message}${sourceLine}`;
    }else {
        return message;
    }
};
export var getLocation : (path : string,charOffset : number) => any = (path : string,charOffset : number) : any =>  {
    return ((_552_)=>(!!_552_)?_552_.getLocation(path,charOffset):null)(lib3.CompilerContext.current.uriToSource.get(path));
};
export var getSourceLine : (location : any) => string = (location : any) : string =>  {
    if (op(Op.EQUALS,location,null)) return null;
    return ((_553_)=>(!!_553_)?_553_.getTextLine(location.line):null)(lib3.CompilerContext.current.uriToSource.get(location.file));
};
export class properties {
    private static __$hideWarnings : boolean;
    static get hideWarnings() : boolean { 
        if (this.__$hideWarnings===undefined) {
            this.__$hideWarnings = false;
        }
        return this.__$hideWarnings;
    }
    static set hideWarnings(__$value : boolean)  { 
        this.__$hideWarnings = __$value;
    }

    static get errorsAreFatal() : boolean {
        return lib3.CompilerContext.current.options.errorsAreFatal;
    }
    static get nitsAreFatal() : boolean {
        return lib3.CompilerContext.current.options.nitsAreFatal;
    }
    static get warningsAreFatal() : boolean {
        return lib3.CompilerContext.current.options.warningsAreFatal;
    }
    static get isVerbose() : boolean {
        return lib3.CompilerContext.current.options.verbose;
    }
    static get hideNits() : boolean {
        return !properties.isVerbose;
    }
}
