/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/treeshaker_dump.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.isEmpty) {
        core.print(properties.usage);
        io.exit(1);
    }
    let options : any = properties.parser.parse(args);
    if (options.rest.length != 1) {
        core.print('Exactly one file should be given.');
        io.exit(1);
    }
    let filename : string = options.rest.single;
    if (op(Op.INDEX,options,'output') != null && !op(Op.INDEX,options,'diff')) {
        core.print('--output must be used with --diff');
        io.exit(1);
    }
    let strong : boolean = op(Op.INDEX,options,'strong');
    let program : any = loadProgramFromBinary(filename);
    let shaker : any = new bare.createInstance(any,null,program,{
        strongMode : strong});
    let totalClasses : number = 0;
    let totalInstantiationCandidates : number = 0;
    let totalMembers : number = 0;
    let usedClasses : number = 0;
    let instantiatedClasses : number = 0;
    let usedMembers : number = 0;
    var visitMember : (member : any) => void = (member : any) : void =>  {
        if (member.isAbstract) return;
        ++totalMembers;
        let isUsed : boolean = shaker.isMemberBodyUsed(member);
        if (isUsed) {
            ++usedMembers;
        }
        if (isUsed && op(Op.INDEX,options,'used') || !isUsed && op(Op.INDEX,options,'unused')) {
            let prefix : string = (op(Op.INDEX,options,'used') && op(Op.INDEX,options,'unused')) ? (isUsed ? 'USED   ' : 'UNUSED ') : '';
            core.print(`${prefix}${member}`);
        }
    };
    for(let library of program.libraries) {
        library.members.forEach(visitMember);
        for(let classNode of library.classes) {
            ++totalClasses;
            if (shaker.isInstantiated(classNode)) {
                ++instantiatedClasses;
                ++totalInstantiationCandidates;
            }else if (!classNode.isAbstract && classNode.members.any((m : any) =>  {
                return m.isInstanceMember;
            })) {
                ++totalInstantiationCandidates;
            }
            if (shaker.isHierarchyUsed(classNode)) {
                ++usedClasses;
            }
            classNode.members.forEach(visitMember);
            if (op(Op.INDEX,options,'instantiated') && shaker.isInstantiated(classNode)) {
                core.print(classNode);
            }
            if (op(Op.INDEX,options,'types') && shaker.isHierarchyUsed(classNode)) {
                core.print(classNode);
            }
        }
    }
    if (op(Op.INDEX,options,'summary')) {
        core.print(`Classes used:         ${ratio(usedClasses,totalClasses)}`);
        core.print('Classes instantiated: ' + `${ratio(instantiatedClasses,totalInstantiationCandidates)}`);
        core.print(`Members used:         ${ratio(usedMembers,totalMembers)}`);
    }
    if (op(Op.INDEX,options,'diff')) {
        let name : string = lib4.basenameWithoutExtension(filename);
        let outputDir : string = (op(Op.INDEX,options,'output') || '');
        let beforeFile : string = lib4.join(outputDir,`${name}.before.txt`);
        let afterFile : string = lib4.join(outputDir,`${name}.after.txt`);
        let names : any = new bare.createInstance(any,null);
        let before : core.DartStringBuffer = new core.DartStringBuffer();
        new bare.createInstance(any,null,before,{
            syntheticNames : names}).writeProgramFile(program);
        new io.File(beforeFile).writeAsStringSync(`${before}`);
        new bare.createInstance(any,null,program,{
            strongMode : strong}).transform(program);
        let after : core.DartStringBuffer = new core.DartStringBuffer();
        new bare.createInstance(any,null,after,{
            syntheticNames : names}).writeProgramFile(program);
        new io.File(afterFile).writeAsStringSync(`${after}`);
        core.print(`Text written to ${beforeFile} and ${afterFile}`);
    }
};
export var ratio : (x : number,total : number) => string = (x : number,total : number) : string =>  {
    return `${x} / ${total} (${percent(x,total)})`;
};
export var percent : (x : number,total : number) => string = (x : number,total : number) : string =>  {
    return total == 0 ? '0%' : (new core.DartDouble((100 * x / total)).toStringAsFixed(0) + '%');
};
export class properties {
    private static __$parser : any;
    static get parser() : any { 
        if (this.__$parser===undefined) {
            this.__$parser = ((_) : any =>  {
                {
                    addFlag('used',{
                        help : 'Print used members',negatable : false});
                    addFlag('unused',{
                        help : 'Print unused members',negatable : false});
                    addFlag('instantiated',{
                        help : 'Print instantiated classes',negatable : false});
                    addFlag('types',{
                        help : 'Print classes used as a type',negatable : false});
                    addFlag('summary',{
                        help : 'Print short summary of tree shaking results',defaultsTo : true});
                    addFlag('diff',{
                        help : 'Print textual output before and after tree shaking.\n' + 'Files are written to FILE.before.txt and FILE.after.txt',negatable : false});
                    addOption('output',{
                        help : 'The --diff files are written to the given directory instead of ' + 'the working directory'});
                    addFlag('strong',{
                        help : 'Run the tree shaker in strong mode'});
                    return _;
                }
            })(new bare.createInstance(any,null,{
                allowTrailingOptions : true}));
        }
        return this.__$parser;
    }
    static set parser(__$value : any)  { 
        this.__$parser = __$value;
    }

    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = `Usage: treeshaker_dump [options] FILE.dill\n\nRuns tree shaking on the given program and prints information about the results.\n\nExample:\n  treeshaker_dump --instantiated foo.dill\n\nExample:\n    treeshaker_dump --diff foo.dill\n    diff -cd foo.{before,after}.txt > diff.txt\n    # open diff.txt in an editor\n\nOptions:\n${properties.parser.usage}\n`;
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
