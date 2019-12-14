/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/compiler_command_line.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./command_line";
import * as io from "@dart2ts/dart/io";
import * as lib6 from "./compiler_context";

export var computeUsage : (programName : string,verbose : boolean) => string = (programName : string,verbose : boolean) : string =>  {
    let basicUsage : string = `Usage: ${programName} [options] dartfile\n`;
    let summary : string;
    let options : string = new core.DartString((verbose ? properties.allOptions : properties.frequentOptions)).trim();
    switch (programName) {
        case "outline":
            summary = "Creates an outline of a Dart program in the Dill/Kernel IR format.";
            break;
        case "compile":
            summary = "Compiles a Dart program to the Dill/Kernel IR format.";
            break;
        case "kompile":
            summary = "Compiles a Dart program to the Dill/Kernel IR format via dartk.";
            break;
        case "run":
            summary = "Runs a Dart program.";
            break;
        case "compile_platform":
            summary = "Compiles Dart SDK platform to the Dill/Kernel IR format.";
            basicUsage = `Usage: ${programName} [options] patched_sdk fullOutput ` + "outlineOutput\n";
    }
    let sb : core.DartStringBuffer = new core.DartStringBuffer(basicUsage);
    if (summary != null) {
        sb.writeln();
        sb.writeln(summary);
        sb.writeln();
    }
    sb.write(options);
    return `${sb}`;
};
export namespace CompilerCommandLine {
    export type Constructors = lib4.CommandLine.Constructors | 'CompilerCommandLine';
    export type Interface = Omit<CompilerCommandLine, Constructors>;
}
@DartClass
export class CompilerCommandLine extends lib4.CommandLine {
    programName : string;

    constructor(programName : string,arguments : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilerCommandLine(programName : string,arguments : core.DartList<string>) {
        this.programName = programName;
        super.CommandLine(arguments,{
            specification : properties.optionSpecification,usage : computeUsage(programName,false)});
    }
    get verify() : boolean {
        return this.options.containsKey("--verify");
    }
    get dumpIr() : boolean {
        return this.options.containsKey("--dump-ir");
    }
    get excludeSource() : boolean {
        return this.options.containsKey("--exclude-source");
    }
    get help() : boolean {
        return this.options.containsKey("--help") || this.options.containsKey("-h") || this.options.containsKey("/h") || this.options.containsKey("/?");
    }
    validate() : void {
        if (this.help) {
            core.print(computeUsage(this.programName,this.verbose));
            io.exit(0);
        }
        if (this.options.containsKey("-o") && this.options.containsKey("--output")) {
            return lib4.argumentError(this.usage,"Can't specify both '-o' and '--output'.");
        }
        if (this.options.containsKey("-t") && this.options.containsKey("--target")) {
            return lib4.argumentError(this.usage,"Can't specify both '-t' and '--target'.");
        }
        if (this.programName == "compile_platform" && this.arguments.length != 3) {
            return lib4.argumentError(this.usage,"Expected three arguments.");
        }else if (this.arguments.isEmpty) {
            return lib4.argumentError(this.usage,"No Dart file specified.");
        }
    }
    get output() : lib3.Uri {
        return ((this.options.get("-o") || this.options.get("--output")) || this.defaultOutput);
    }
    get defaultOutput() : lib3.Uri {
        return lib3.Uri.base.resolve(`${this.arguments.first}.dill`);
    }
    get platform() : lib3.Uri {
        return this.options.containsKey("--compile-sdk") ? null : (this.options.get("--platform") || lib3.Uri.base.resolve("platform.dill"));
    }
    get packages() : lib3.Uri {
        return (this.options.get("--packages") || lib3.Uri.base.resolve(".packages"));
    }
    get sdk() : lib3.Uri {
        return this.options.get("--compile-sdk");
    }
    get fatal() : core.DartSet<string> {
        return new core.DartSet.from((this.options.get("--fatal") || new core.DartList.literal<string>()));
    }
    get errorsAreFatal() : boolean {
        return this.fatal.contains("errors");
    }
    get warningsAreFatal() : boolean {
        return this.fatal.contains("warnings");
    }
    get nitsAreFatal() : boolean {
        return this.fatal.contains("nits");
    }
    get strongMode() : boolean {
        return this.options.containsKey("--strong-mode");
    }
    get target() : string {
        return ((this.options.get("-t") || this.options.get("--target")) || "vm");
    }
    static withGlobalOptions(programName : string,arguments : core.DartList<string>,f : (context : lib6.CompilerContext) => any) : any {
        return lib6.CompilerContext.withGlobalOptions(new CompilerCommandLine(programName,arguments),f);
    }
    static forRootContext() : CompilerCommandLine {
        return new CompilerCommandLine("",new core.DartList.literal(""));
    }
}

export class properties {
    private static __$optionSpecification : core.DartMap<string,any>;
    static get optionSpecification() : core.DartMap<string,any> { 
        if (this.__$optionSpecification===undefined) {
            this.__$optionSpecification = new core.DartMap.literal([
                ["--compile-sdk",lib3.Uri],
                ["--fatal",","],
                ["--output",lib3.Uri],
                ["--packages",lib3.Uri],
                ["--platform",lib3.Uri],
                ["-o",lib3.Uri],
                ["--target",string],
                ["-t",string]]);
        }
        return this.__$optionSpecification;
    }
    static set optionSpecification(__$value : core.DartMap<string,any>)  { 
        this.__$optionSpecification = __$value;
    }

    private static __$frequentOptions : string;
    static get frequentOptions() : string { 
        if (this.__$frequentOptions===undefined) {
            this.__$frequentOptions = "Frequently used options:\n\n  -o <file> Generate the output into <file>.\n  -h        Display this message (add -v for information about all options).\n";
        }
        return this.__$frequentOptions;
    }
    static set frequentOptions(__$value : string)  { 
        this.__$frequentOptions = __$value;
    }

    private static __$allOptions : string;
    static get allOptions() : string { 
        if (this.__$allOptions===undefined) {
            this.__$allOptions = "Supported options:\n\n  -o <file>, --output=<file>\n    Generate the output into <file>.\n\n  -h, /h, /?, --help\n    Display this message (add -v for information about all options).\n\n  -v, --verbose\n    Display verbose information.\n\n  --\n    Stop option parsing, the rest of the command line is assumed to be\n    file names or arguments to the Dart program.\n\n  --packages=<file>\n    Use package resolution configuration <file>, which should contain a mapping\n    of package names to paths.\n\n  --platform=<file>\n    Read the SDK platform from <file>, which should be in Dill/Kernel IR format\n    and contain the Dart SDK.\n\n  --target=none|vm|vmcc|vmreify|flutter\n    Specify the target configuration.\n\n  --verify\n    Check that the generated output is free of various problems. This is mostly\n    useful for developers of this compiler or Kernel transformations.\n\n  --dump-ir\n    Print compiled libraries in Kernel source notation.\n\n  --exclude-source\n    Do not include source code in the dill file.\n\n  --compile-sdk=<patched_sdk>\n    Compile the SDK from scratch instead of reading it from 'platform.dill'.\n\n  --fatal=errors\n  --fatal=warnings\n  --fatal=nits\n    Makes messages of the given kinds fatal, that is, immediately stop the\n    compiler with a non-zero exit-code. In --verbose mode, also display an\n    internal stack trace from the compiler. Multiple kinds can be separated by\n    commas, for example, --fatal=errors,warnings.\n";
        }
        return this.__$allOptions;
    }
    static set allOptions(__$value : string)  { 
        this.__$allOptions = __$value;
    }

}
