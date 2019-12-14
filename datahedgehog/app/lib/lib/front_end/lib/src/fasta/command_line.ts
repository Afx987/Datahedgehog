/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/command_line.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./errors";
import * as lib4 from "@dart2ts/dart/uri";

export var argumentError : (usage : string,message : string) => any = (usage : string,message : string) =>  {
    if (usage != null) core.print(usage);
    lib3.inputError(null,null,message);
};
export namespace ParsedArguments {
    export type Constructors = 'ParsedArguments';
    export type Interface = Omit<ParsedArguments, Constructors>;
}
@DartClass
export class ParsedArguments {
    options : core.DartMap<string,any>;

    arguments : core.DartList<string>;

    toString() {
        return `ParsedArguments(${this.options}, ${this.arguments})`;
    }
    constructor() {
    }
    @defaultConstructor
    ParsedArguments() {
        this.options = new core.DartMap.literal([
        ]);
        this.arguments = new core.DartList.literal<string>();
    }
}

export namespace CommandLine {
    export type Constructors = 'parsed' | 'CommandLine';
    export type Interface = Omit<CommandLine, Constructors>;
}
@DartClass
export class CommandLine {
    options : core.DartMap<string,any>;

    arguments : core.DartList<string>;

    usage : string;

    @namedConstructor
    parsed(p : ParsedArguments,usage : string) {
        this.options = p.options;
        this.arguments = p.arguments;
        this.usage = usage;
        this.validate();
        if (this.verbose) {
            core.print(p);
        }
    }
    static parsed : new(p : ParsedArguments,usage : string) => CommandLine;

    constructor(arguments : core.DartList<string>,_namedArguments? : {specification? : core.DartMap<string,any>,usage? : string}) {
    }
    @defaultConstructor
    CommandLine(arguments : core.DartList<string>,_namedArguments? : {specification? : core.DartMap<string,any>,usage? : string}) {
        let {specification,usage} = Object.assign({
        }, _namedArguments );
        this.parsed(CommandLine.parse(arguments,specification,usage),usage);
    }
    get verbose() : boolean {
        return this.options.containsKey("-v") || this.options.containsKey("--verbose");
    }
    validate() : void {
    }
    static parse(arguments : core.DartList<string>,specification : core.DartMap<string,any>,usage : string) : ParsedArguments {
        specification = ( specification ) || ( new core.DartMap.literal([
        ]) );
        let result : ParsedArguments = new ParsedArguments();
        let index : number = arguments.indexOf("--");
        let nonOptions : core.DartIterable<string> = new core.DartList.literal<string>();
        let iterator : core.DartIterator<string> = arguments.iterator;
        if (index != -1) {
            nonOptions = arguments.skip(index + 1);
            iterator = arguments.take(index).iterator;
        }
        while (iterator.moveNext()){
            let argument : string = iterator.current;
            if (new core.DartString(argument).startsWith("-")) {
                let valueSpecification = specification.get(argument);
                let value : string;
                if (valueSpecification != null) {
                    if (!iterator.moveNext()) {
                        return argumentError(usage,`Expected value after '${argument}'.`);
                    }
                    value = iterator.current;
                }else {
                    index = new core.DartString(argument).indexOf("=");
                    if (index != -1) {
                        value = new core.DartString(argument).substring(index + 1);
                        argument = new core.DartString(argument).substring(0,index);
                        valueSpecification = specification.get(argument);
                    }
                }
                if (op(Op.EQUALS,valueSpecification,null)) {
                    if (value != null) {
                        return argumentError(usage,`Argument '${argument}' doesn't take a value: '${value}'.`);
                    }
                    result.options.set(argument,true);
                }else {
                    if (isNot(valueSpecification, "string") && isNot(valueSpecification, core.Type)) {
                        return argumentError(usage,"Unrecognized type of value " + `specification: ${valueSpecification.runtimeType}.`);
                    }
                    switch (`${valueSpecification}`) {
                        case ",":
                            result.options.putIfAbsent(argument,() =>  {
                                return new core.DartList.literal<string>();
                            }).addAll(new core.DartString(value).split(","));
                            break;
                        case "int":
                        case "bool":
                        case "String":
                        case "Uri":
                            if (result.options.containsKey(argument)) {
                                return argumentError(usage,`Multiple values for '${argument}': ` + `'${result.options.get(argument)}' and '${value}'.`);
                            }
                            let parsedValue;
                            if (op(Op.EQUALS,valueSpecification,number)) {
                                parsedValue = core.DartInt.parse(value,{
                                    onError : (_ : any) =>  {
                                        return argumentError(usage,`Value for '${argument}', '${value}', isn't an int.`);
                                    }});
                            }else if (op(Op.EQUALS,valueSpecification,boolean)) {
                                if (value == "true" || value == "yes") {
                                    parsedValue = true;
                                }else if (value == "false" || value == "no") {
                                    parsedValue = false;
                                }else {
                                    return argumentError(usage,`Value for '${argument}' is '${value}', ` + "but expected one of: 'true', 'false', 'yes', or 'no'.");
                                }
                            }else if (op(Op.EQUALS,valueSpecification,lib4.Uri)) {
                                parsedValue = lib4.Uri.base.resolve(value);
                            }else if (op(Op.EQUALS,valueSpecification,string)) {
                                parsedValue = value;
                            }else if (is(valueSpecification, "string")) {
                                return argumentError(usage,"Unrecognized value specification: " + `'${valueSpecification}', try using a type literal instead.`);
                            }else {
                                return lib3.internalError("assertion failure");
                            }
                            result.options.set(argument,parsedValue);
                            break;
                        default:
                            return argumentError(usage,`Unrecognized value specification: '${valueSpecification}'.`);
                    }
                }
            }else if (argument == "/?" || argument == "/h") {
                result.options.set(argument,true);
            }else {
                result.arguments.add(argument);
            }
        }
        result.arguments.addAll(nonOptions);
        return result;
    }
}

export class properties {
}
