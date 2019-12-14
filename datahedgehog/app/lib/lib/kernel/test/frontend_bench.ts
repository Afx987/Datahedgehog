/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/frontend_bench.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length == 0) {
        core.print(properties.usage);
        io.exit(1);
    }
    let options : any = properties.parser.parse(args);
    if (options.rest.length != 1) {
        core.print('Exactly one file must be given');
        io.exit(1);
    }
    let sdk : string = op(Op.INDEX,options,'sdk');
    let packagePath : string = op(Op.INDEX,options,'packages');
    let strongMode : boolean = op(Op.INDEX,options,'strong');
    let path : string = options.rest.single;
    let uri = new lib4.Uri({
        scheme : 'file',path : new io.File(path).absolute.path});
    let packages = getPackagesDirectory(new lib4.Uri({
        scheme : 'file',path : packagePath}));
    let repository : any = new bare.createInstance(any,null);
    new bare.createInstance(any,null,repository,new bare.createInstance(any,null,{
        strongMode : strongMode,sdk : sdk,packagePath : packagePath}),packages).loadProgram(uri);
    CacheEntry.recomputedCounts.forEach((key : any,value : any) =>  {
        core.print(`Recomputed ${key} ${value} times`);
    });
    AnalysisTask.stopwatchMap.forEach((key : any,watch : core.DartStopwatch) =>  {
        core.print(`${key} took ${watch.elapsedMilliseconds} ms`);
    });
};
export class properties {
    private static __$parser : any;
    static get parser() : any { 
        if (this.__$parser===undefined) {
            this.__$parser = ((_) : any =>  {
                {
                    addOption('sdk',{
                        help : 'Path to Dart SDK',valueHelp : 'path',defaultsTo : '/usr/lib/dart'});
                    addOption('packages',{
                        abbr : 'p',help : 'Path to the packages folder or .packages file',valueHelp : 'path'});
                    addFlag('strong',{
                        help : 'Use strong mode'});
                    return _;
                }
            })(new bare.createInstance(any,null));
        }
        return this.__$parser;
    }
    static set parser(__$value : any)  { 
        this.__$parser = __$value;
    }

    static get usage() : string {
        return `Usage: frontend_bench [options] FILE.dart\n\nBenchmark the analyzer-based frontend.\n\nOptions:\n${properties.parser.options}\n`;
    }
}
