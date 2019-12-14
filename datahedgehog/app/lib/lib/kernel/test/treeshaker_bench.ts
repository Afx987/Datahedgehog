/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/treeshaker_bench.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./class_hierarchy_basic";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    if (args.length == 0) {
        core.print(properties.usage);
        io.exit(1);
    }
    let options : any = properties.argParser.parse(args);
    if (options.rest.length != 1) {
        core.print('Exactly one file must be given');
        io.exit(1);
    }
    let filename : string = options.rest.single;
    let strongMode : boolean = op(Op.INDEX,options,'strong');
    let program : any = loadProgramFromBinary(filename);
    var buildClassHierarchy : () => any = () : any =>  {
        return op(Op.INDEX,options,'basic') ? new lib4.BasicClassHierarchy(program) : new bare.createInstance(any,null,program);
    };
    let coreTypes : any = new bare.createInstance(any,null,program);
    let watch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    let sharedClassHierarchy : any = buildClassHierarchy();
    let coldHierarchyTime : number = watch.elapsedMicroseconds;
    let shaker = new bare.createInstance(any,null,program,{
        hierarchy : sharedClassHierarchy,coreTypes : coreTypes,strongMode : strongMode});
    if (op(Op.INDEX,options,'diagnose')) {
        core.print(shaker.getDiagnosticString());
    }
    shaker = null;
    let coldTreeShakingTime : number = watch.elapsedMicroseconds;
    var getClassHierarchy : () => any = () : any =>  {
        return op(Op.INDEX,options,'from-scratch') ? buildClassHierarchy() : sharedClassHierarchy;
    };
    let numberOfTrials : number = 50;
    let hotHierarchyTime : number = 0;
    let hotTreeShakingTime : number = 0;
    watch.reset();
    for(let i : number = 0; i < numberOfTrials; i++){
        watch.reset();
        let hierarchy = getClassHierarchy();
        hotHierarchyTime += watch.elapsedMicroseconds;
        new bare.createInstance(any,null,program,{
            hierarchy : hierarchy,coreTypes : coreTypes,strongMode : strongMode});
        hotTreeShakingTime += watch.elapsedMicroseconds;
    }
    hotHierarchyTime ~/= numberOfTrials;
    hotTreeShakingTime ~/= numberOfTrials;
    let coldShakingMs = op(Op.QUOTIENT,coldTreeShakingTime,1000);
    let coldHierarchyMs = op(Op.QUOTIENT,coldHierarchyTime,1000);
    let hotShakingMs = op(Op.QUOTIENT,hotTreeShakingTime,1000);
    let hotHierarchyMs = op(Op.QUOTIENT,hotHierarchyTime,1000);
    core.print(`build.cold ${coldShakingMs} ms (${coldHierarchyMs} ms from hierarchy)\nbuild.hot  ${hotShakingMs} ms (${hotHierarchyMs} ms from hierarchy)`);
};
export class properties {
    private static __$argParser : any;
    static get argParser() : any { 
        if (this.__$argParser===undefined) {
            this.__$argParser = ((_) : any =>  {
                {
                    addFlag('basic',{
                        help : 'Use the basic class hierarchy implementation',negatable : false});
                    addFlag('from-scratch',{
                        help : 'Rebuild class hierarchy for each tree shaking',negatable : false});
                    addFlag('diagnose',{
                        abbr : 'd',help : 'Print internal diagnostics',negatable : false});
                    addFlag('strong',{
                        help : 'Run the tree shaker in strong mode',negatable : false});
                    return _;
                }
            })(new bare.createInstance(any,null,{
                allowTrailingOptions : true}));
        }
        return this.__$argParser;
    }
    static set argParser(__$value : any)  { 
        this.__$argParser = __$value;
    }

    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = `Usage: treeshaker_bench [options] FILE.dill\n\nBenchmark the tree shaker and the class hierarchy it depends on.\n\nOptions:\n${properties.argParser.usage}\n`;
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
