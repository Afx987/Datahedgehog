/** Library asset:datahedgehog_monitor/lib/lib/kernel/bin/transform.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./batch_util";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "./util";

export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    if (arguments.isNotEmpty && arguments[0] == '--batch') {
        if (arguments.length != 1) {
            throw '--batch cannot be used with other arguments';
        }
        await lib3.runBatch((arguments : any) =>  {
            return runTransformation(arguments);
        });
    }else {
        let outcome : lib3.CompilerOutcome = await runTransformation(arguments);
        io.exit(op(Op.EQUALS,outcome,lib3.CompilerOutcome.Ok) ? 0 : 1);
    }
})());
export var runTransformation : (arguments : core.DartList<string>) => async.Future<lib3.CompilerOutcome> = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<lib3.CompilerOutcome> =>  {
    let options : any = properties.parser.parse(arguments);
    if (options.rest.length != 1) {
        throw `Usage:\n${properties.parser.usage}`;
    }
    let input = options.rest.first;
    let output = op(Op.INDEX,options,'out');
    let format = op(Op.INDEX,options,'format');
    let verbose = op(Op.INDEX,options,'verbose');
    if (op(Op.EQUALS,output,null)) {
        output = `${input.substring(0,input.lastIndexOf('.'))}.transformed.dill`;
    }
    let embedderEntryPointManifests : core.DartList<string> = op(Op.INDEX,options,'embedder-entry-points-manifest') as core.DartList<string>;
    let programRoots : core.DartList<any> = lib5.parseProgramRoots(embedderEntryPointManifests);
    let program = loadProgramFromBinary(input);
    switch (op(Op.INDEX,options,'transformation')) {
        case 'continuation':
            program = null /*topLevl*/.transformProgram(program);
            break;
        case 'resolve-mixins':
            program = null /*topLevl*/.transformProgram(program);
            break;
        case 'closures':
            program = null /*topLevl*/.transformProgram(program);
            break;
        case 'treeshake':
            program = null /*topLevl*/.transformProgram(program,{
                programRoots : programRoots});
            break;
        case 'methodcall':
            program = null /*topLevl*/.transformProgram(program);
            break;
        case 'empty':
            program = null /*topLevl*/.transformProgram(program);
            break;
        default:
            throw 'Unknown transformation';
    }
    verifyProgram(program);
    if (op(Op.EQUALS,format,'text')) {
        writeProgramToText(program,{
            path : output});
    }else {
        /* TODO (AssertStatementImpl) : assert (format == 'bin'); */;
        await writeProgramToBinary(program,output);
    }
    if (verbose) {
        writeLibraryToText(program.mainMethod.parent as any);
    }
    return lib3.CompilerOutcome.Ok;
})());
export class properties {
    private static __$parser : any;
    static get parser() : any { 
        if (this.__$parser===undefined) {
            this.__$parser = ((_) : any =>  {
                {
                    addOption('format',{
                        abbr : 'f',allowed : new core.DartList.literal('text','bin'),defaultsTo : 'bin',help : 'Output format.'});
                    addOption('out',{
                        abbr : 'o',help : 'Output file.',defaultsTo : null});
                    addFlag('verbose',{
                        abbr : 'v',negatable : false,help : 'Be verbose (e.g. prints transformed main library).',defaultsTo : false});
                    addOption('embedder-entry-points-manifest',{
                        allowMultiple : true,help : 'A path to a file describing entrypoints ' + '(lines of the form `<library>,<class>,<member>`).'});
                    addOption('transformation',{
                        abbr : 't',help : 'The transformation to apply.',defaultsTo : 'continuation'});
                    return _;
                }
            })(new bare.createInstance(any,null));
        }
        return this.__$parser;
    }
    static set parser(__$value : any)  { 
        this.__$parser = __$value;
    }

}
