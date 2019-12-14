/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/colors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./compiler_context";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export var wrap : (string : string,color : string) => string = (string : string,color : string) : string =>  {
    return lib3.CompilerContext.enableColors ? `${color}${string}${properties.DEFAULT_COLOR}` : string;
};
export var black : (string : string) => string = (string : string) : string =>  {
    return wrap(string,properties.BLACK_COLOR);
};
export var red : (string : string) => string = (string : string) : string =>  {
    return wrap(string,properties.RED_COLOR);
};
export var green : (string : string) => string = (string : string) : string =>  {
    return wrap(string,properties.GREEN_COLOR);
};
export var yellow : (string : string) => string = (string : string) : string =>  {
    return wrap(string,properties.YELLOW_COLOR);
};
export var blue : (string : string) => string = (string : string) : string =>  {
    return wrap(string,properties.BLUE_COLOR);
};
export var magenta : (string : string) => string = (string : string) : string =>  {
    return wrap(string,properties.MAGENTA_COLOR);
};
export var cyan : (string : string) => string = (string : string) : string =>  {
    return wrap(string,properties.CYAN_COLOR);
};
export var white : (string : string) => string = (string : string) : string =>  {
    return wrap(string,properties.WHITE_COLOR);
};
export var _supportsAnsiEscapes : (sink : any) => boolean = (sink : any) : boolean =>  {
    try {
        return sink.supportsAnsiEscapes;
    } catch (__error__) {

        if (is(__error__,core.NoSuchMethodError)){
            return null;
        }
    }
};
export var computeEnableColors : (context : lib3.CompilerContext) => boolean = (context : lib3.CompilerContext) : boolean =>  {
    let stderrSupportsColors : boolean = _supportsAnsiEscapes(io.properties.stdout);
    let stdoutSupportsColors : boolean = _supportsAnsiEscapes(io.properties.stderr);
    if (stdoutSupportsColors == false) {
        if (context.options.verbose) {
            core.print("Not enabling colors, stdout does not support ANSI colors.");
        }
        return false;
    }
    if (stderrSupportsColors == false) {
        if (context.options.verbose) {
            core.print("Not enabling colors, stderr does not support ANSI colors.");
        }
        return false;
    }
    if (io.Platform.isWindows) {
        if (stderrSupportsColors != true || stdoutSupportsColors != true) {
            if (context.options.verbose) {
                core.print("Not enabling colors as ANSI is not supported.");
            }
            return false;
        }
        if (context.options.verbose) {
            core.print("Enabling colors as OS is Windows.");
        }
        return true;
    }
    let result : io.ProcessResult = io.Process.runSync("/bin/sh",new core.DartList.literal("-c",`printf '%s' '${properties.TERMINAL_CAPABILITIES}' | tput -S`));
    if (result.exitCode != 0) {
        if (context.options.verbose) {
            core.print("Not enabling colors, running tput failed.");
        }
        return false;
    }
    let lines : core.DartList<string> = result.stdout.split("\n");
    if (lines.length != 2) {
        if (context.options.verbose) {
            core.print("Not enabling colors, unexpected output from tput: " + `${convert.properties.JSON.encode(result.stdout)}.`);
        }
        return false;
    }
    let numberOfColors : string = lines[0];
    if (core.DartInt.parse(numberOfColors,{
        onError : (_ : any) =>  {
            return -1;
        }}) < 8) {
        if (context.options.verbose) {
            core.print("Not enabling colors, less than 8 colors supported: " + `${convert.properties.JSON.encode(numberOfColors)}.`);
        }
        return false;
    }
    let allCodes : string = new core.DartString(lines[1]).trim();
    if (properties.ALL_CODES != allCodes) {
        if (context.options.verbose) {
            core.print("Not enabling colors, color codes don't match: " + `${convert.properties.JSON.encode(properties.ALL_CODES)} != ${convert.properties.JSON.encode(allCodes)}.`);
        }
        return false;
    }
    if (context.options.verbose) {
        core.print("Enabling colors.");
    }
    return true;
};
export class properties {
    private static __$DEFAULT_COLOR : string;
    static get DEFAULT_COLOR() : string { 
        if (this.__$DEFAULT_COLOR===undefined) {
            this.__$DEFAULT_COLOR = "[39;49m";
        }
        return this.__$DEFAULT_COLOR;
    }
    static set DEFAULT_COLOR(__$value : string)  { 
        this.__$DEFAULT_COLOR = __$value;
    }

    private static __$BLACK_COLOR : string;
    static get BLACK_COLOR() : string { 
        if (this.__$BLACK_COLOR===undefined) {
            this.__$BLACK_COLOR = "[30m";
        }
        return this.__$BLACK_COLOR;
    }
    static set BLACK_COLOR(__$value : string)  { 
        this.__$BLACK_COLOR = __$value;
    }

    private static __$RED_COLOR : string;
    static get RED_COLOR() : string { 
        if (this.__$RED_COLOR===undefined) {
            this.__$RED_COLOR = "[31m";
        }
        return this.__$RED_COLOR;
    }
    static set RED_COLOR(__$value : string)  { 
        this.__$RED_COLOR = __$value;
    }

    private static __$GREEN_COLOR : string;
    static get GREEN_COLOR() : string { 
        if (this.__$GREEN_COLOR===undefined) {
            this.__$GREEN_COLOR = "[32m";
        }
        return this.__$GREEN_COLOR;
    }
    static set GREEN_COLOR(__$value : string)  { 
        this.__$GREEN_COLOR = __$value;
    }

    private static __$YELLOW_COLOR : string;
    static get YELLOW_COLOR() : string { 
        if (this.__$YELLOW_COLOR===undefined) {
            this.__$YELLOW_COLOR = "[33m";
        }
        return this.__$YELLOW_COLOR;
    }
    static set YELLOW_COLOR(__$value : string)  { 
        this.__$YELLOW_COLOR = __$value;
    }

    private static __$BLUE_COLOR : string;
    static get BLUE_COLOR() : string { 
        if (this.__$BLUE_COLOR===undefined) {
            this.__$BLUE_COLOR = "[34m";
        }
        return this.__$BLUE_COLOR;
    }
    static set BLUE_COLOR(__$value : string)  { 
        this.__$BLUE_COLOR = __$value;
    }

    private static __$MAGENTA_COLOR : string;
    static get MAGENTA_COLOR() : string { 
        if (this.__$MAGENTA_COLOR===undefined) {
            this.__$MAGENTA_COLOR = "[35m";
        }
        return this.__$MAGENTA_COLOR;
    }
    static set MAGENTA_COLOR(__$value : string)  { 
        this.__$MAGENTA_COLOR = __$value;
    }

    private static __$CYAN_COLOR : string;
    static get CYAN_COLOR() : string { 
        if (this.__$CYAN_COLOR===undefined) {
            this.__$CYAN_COLOR = "[36m";
        }
        return this.__$CYAN_COLOR;
    }
    static set CYAN_COLOR(__$value : string)  { 
        this.__$CYAN_COLOR = __$value;
    }

    private static __$WHITE_COLOR : string;
    static get WHITE_COLOR() : string { 
        if (this.__$WHITE_COLOR===undefined) {
            this.__$WHITE_COLOR = "[37m";
        }
        return this.__$WHITE_COLOR;
    }
    static set WHITE_COLOR(__$value : string)  { 
        this.__$WHITE_COLOR = __$value;
    }

    private static __$ALL_CODES : string;
    static get ALL_CODES() : string { 
        if (this.__$ALL_CODES===undefined) {
            this.__$ALL_CODES = properties.BLACK_COLOR + properties.RED_COLOR + properties.GREEN_COLOR + properties.YELLOW_COLOR + properties.BLUE_COLOR + properties.MAGENTA_COLOR + properties.CYAN_COLOR + properties.WHITE_COLOR + properties.DEFAULT_COLOR;
        }
        return this.__$ALL_CODES;
    }
    static set ALL_CODES(__$value : string)  { 
        this.__$ALL_CODES = __$value;
    }

    private static __$TERMINAL_CAPABILITIES : string;
    static get TERMINAL_CAPABILITIES() : string { 
        if (this.__$TERMINAL_CAPABILITIES===undefined) {
            this.__$TERMINAL_CAPABILITIES = "colors\nsetaf 0\nsetaf 1\nsetaf 2\nsetaf 3\nsetaf 4\nsetaf 5\nsetaf 6\nsetaf 7\nop\n";
        }
        return this.__$TERMINAL_CAPABILITIES;
    }
    static set TERMINAL_CAPABILITIES(__$value : string)  { 
        this.__$TERMINAL_CAPABILITIES = __$value;
    }

}
