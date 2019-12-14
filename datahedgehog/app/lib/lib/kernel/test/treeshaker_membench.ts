/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/treeshaker_membench.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length == 0) {
        core.print(properties.usage);
        io.exit(1);
    }
    let options : any = properties.argParser.parse(args);
    if (options.rest.length != 1) {
        core.print('Exactly one file should be given');
        io.exit(1);
    }
    let filename : string = options.rest.single;
    let strongMode : boolean = op(Op.INDEX,options,'strong');
    let program : any = loadProgramFromBinary(filename);
    let hierarchy : any = new bare.createInstance(any,null,program);
    let coreTypes : any = new bare.createInstance(any,null,program);
    let copyCount : number = core.DartInt.parse(op(Op.INDEX,options,'count'));
    var buildTreeShaker : () => any = () : any =>  {
        return new bare.createInstance(any,null,program,{
            hierarchy : hierarchy,coreTypes : coreTypes,strongMode : strongMode});
    };
    let keepAlive : core.DartList<any> = new core.DartList.literal<any>();
    for(let i : number = 0; i < copyCount; ++i){
        keepAlive.add(buildTreeShaker());
    }
    core.print(`${copyCount} copies built`);
    if (args.contains('-v')) {
        for(let treeShaker of keepAlive) {
            treeShaker.getClassRetention(hierarchy.rootClass);
        }
    }
};
export class properties {
    private static __$argParser : any;
    static get argParser() : any { 
        if (this.__$argParser===undefined) {
            this.__$argParser = ((_) : any =>  {
                {
                    addOption('count',{
                        abbr : 'c',help : 'Build N copies of the tree shaker',defaultsTo : '100'});
                    addFlag('strong',{
                        help : 'Run the tree shaker in strong mode'});
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
            this.__$usage = `Usage: treeshaker_membench [options] FILE.dill\n\nOptions:\n${properties.argParser.usage}\n`;
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
