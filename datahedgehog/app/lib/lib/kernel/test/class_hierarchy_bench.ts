/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/class_hierarchy_bench.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./class_hierarchy_basic";
import * as math from "@dart2ts/dart/math";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
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
    let program : any = loadProgramFromBinary(filename);
    var buildHierarchy : () => any = () : any =>  {
        return op(Op.INDEX,options,'basic') ? new lib4.BasicClassHierarchy(program) : new bare.createInstance(any,null,program);
    };
    let watch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    buildHierarchy();
    let coldBuildTime : number = watch.elapsedMilliseconds;
    watch.reset();
    let numBuildTrials : number = 100;
    for(let i : number = 0; i < numBuildTrials; i++){
        buildHierarchy();
    }
    let hotBuildTime : number = op(Op.QUOTIENT,watch.elapsedMilliseconds,numBuildTrials);
    let hierarchyCount : number = core.DartInt.parse(op(Op.INDEX,options,'cycle'));
    let hierarchies = new core.DartList.literal<any>();
    for(let i : number = 0; i < hierarchyCount; i++){
        hierarchies.add(buildHierarchy());
    }
    let currentHierarchy : number = 0;
    var getClassHierarchy : () => any = () : any =>  {
        currentHierarchy = (currentHierarchy + 1) % hierarchies.length;
        return hierarchies[currentHierarchy];
    };
    let rnd : math.Random = new math.Random(12345);
    let numQueryTrials : number = 100000;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let first : number = rnd.nextInt(classHierarchy.classes.length);
        let second : number = rnd.nextInt(classHierarchy.classes.length);
        let firstClass : any = op(Op.INDEX,classHierarchy.classes,first);
        let secondClass : any = op(Op.INDEX,classHierarchy.classes,second);
        classHierarchy.isSubclassOf(firstClass,secondClass);
        classHierarchy.isSubmixtureOf(firstClass,secondClass);
        classHierarchy.isSubtypeOf(firstClass,secondClass);
        classHierarchy.getClassAsInstanceOf(firstClass,secondClass);
    }
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let first : number = rnd.nextInt(classHierarchy.classes.length);
        let second : number = rnd.nextInt(classHierarchy.classes.length);
        let firstClass : any = op(Op.INDEX,classHierarchy.classes,first);
        let secondClass : any = op(Op.INDEX,classHierarchy.classes,second);
        classHierarchy.isSubclassOf(firstClass,secondClass);
    }
    let subclassQueryTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let first : number = rnd.nextInt(classHierarchy.classes.length);
        let second : number = rnd.nextInt(classHierarchy.classes.length);
        let firstClass : any = op(Op.INDEX,classHierarchy.classes,first);
        let secondClass : any = op(Op.INDEX,classHierarchy.classes,second);
        classHierarchy.isSubmixtureOf(firstClass,secondClass);
    }
    let submixtureQueryTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let first : number = rnd.nextInt(classHierarchy.classes.length);
        let second : number = rnd.nextInt(classHierarchy.classes.length);
        let firstClass : any = op(Op.INDEX,classHierarchy.classes,first);
        let secondClass : any = op(Op.INDEX,classHierarchy.classes,second);
        classHierarchy.isSubtypeOf(firstClass,secondClass);
    }
    let subtypeQueryTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let first : number = rnd.nextInt(classHierarchy.classes.length);
        let second : number = rnd.nextInt(classHierarchy.classes.length);
        let firstClass : any = op(Op.INDEX,classHierarchy.classes,first);
        let secondClass : any = op(Op.INDEX,classHierarchy.classes,second);
        classHierarchy.getClassAsInstanceOf(firstClass,secondClass);
    }
    let asInstanceOfQueryTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let first : number = rnd.nextInt(classHierarchy.classes.length);
        let second : number = rnd.nextInt(classHierarchy.classes.length);
        op(Op.INDEX,classHierarchy.classes,first);
        op(Op.INDEX,classHierarchy.classes,second);
    }
    let queryNoise : number = watch.elapsedMicroseconds;
    subclassQueryTime -= queryNoise;
    submixtureQueryTime -= queryNoise;
    subtypeQueryTime -= queryNoise;
    asInstanceOfQueryTime -= queryNoise;
    let subclassPerSecond : string = perSecond(subclassQueryTime,numQueryTrials);
    let submixturePerSecond : string = perSecond(submixtureQueryTime,numQueryTrials);
    let subtypePerSecond : string = perSecond(subtypeQueryTime,numQueryTrials);
    let asInstanceOfPerSecond : string = perSecond(asInstanceOfQueryTime,numQueryTrials);
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let classId : number = rnd.nextInt(classHierarchy.classes.length);
        let classNode : any = op(Op.INDEX,classHierarchy.classes,classId);
        classHierarchy.getDispatchTarget(classNode,new bare.createInstance(any,null,'toString'));
    }
    let dispatchToStringTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let classId : number = rnd.nextInt(classHierarchy.classes.length);
        let classNode : any = op(Op.INDEX,classHierarchy.classes,classId);
        classHierarchy.getDispatchTarget(classNode,new bare.createInstance(any,null,'getFloo'));
    }
    let dispatchGenericGetTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let classId : number = rnd.nextInt(classHierarchy.classes.length);
        let classNode : any = op(Op.INDEX,classHierarchy.classes,classId);
        for(let _ of classHierarchy.getDispatchTargets(classNode)) {
        }
    }
    let dispatchAllTargetsTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let classId : number = rnd.nextInt(classHierarchy.classes.length);
        let classNode : any = op(Op.INDEX,classHierarchy.classes,classId);
        classHierarchy.getInterfaceMember(classNode,new bare.createInstance(any,null,'toString'));
    }
    let interfaceToStringTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let classId : number = rnd.nextInt(classHierarchy.classes.length);
        let classNode : any = op(Op.INDEX,classHierarchy.classes,classId);
        classHierarchy.getInterfaceMember(classNode,new bare.createInstance(any,null,'getFloo'));
    }
    let interfaceGenericGetTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let classId : number = rnd.nextInt(classHierarchy.classes.length);
        let classNode : any = op(Op.INDEX,classHierarchy.classes,classId);
        for(let _ of classHierarchy.getInterfaceMembers(classNode)) {
        }
    }
    let interfaceAllTargetsTime : number = watch.elapsedMicroseconds;
    watch.reset();
    for(let i : number = 0; i < numQueryTrials; i++){
        let classHierarchy = getClassHierarchy();
        let classId : number = rnd.nextInt(classHierarchy.classes.length);
        op(Op.INDEX,classHierarchy.classes,classId);
    }
    let dispatchTargetNoise : number = watch.elapsedMicroseconds;
    dispatchToStringTime -= dispatchTargetNoise;
    dispatchGenericGetTime -= dispatchTargetNoise;
    dispatchAllTargetsTime -= dispatchTargetNoise;
    interfaceToStringTime -= dispatchTargetNoise;
    interfaceGenericGetTime -= dispatchTargetNoise;
    interfaceAllTargetsTime -= dispatchTargetNoise;
    let dispatchToStringPerSecond : string = perSecond(dispatchToStringTime,numQueryTrials);
    let dispatchGetPerSecond : string = perSecond(dispatchGenericGetTime,numQueryTrials);
    let dispatchAllTargetsPerSecond : string = perSecond(dispatchAllTargetsTime,numQueryTrials);
    let interfaceToStringPerSecond : string = perSecond(interfaceToStringTime,numQueryTrials);
    let interfaceGetPerSecond : string = perSecond(interfaceGenericGetTime,numQueryTrials);
    let interfaceAllTargetsPerSecond : string = perSecond(interfaceAllTargetsTime,numQueryTrials);
    watch.reset();
    let classHierarchy = getClassHierarchy();
    let numberOfOverridePairs : number = 0;
    for(let class_ of classHierarchy.classes) {
        classHierarchy.forEachOverridePair(class_,(member : any,supermember : any,isSetter : any) =>  {
            ++numberOfOverridePairs;
        });
    }
    let overrideTime : number = watch.elapsedMicroseconds;
    let overridePairsPerSecond : string = perSecond(overrideTime,numberOfOverridePairs);
    let depth : core.DartList<number> = new core.DartList<any>(classHierarchy.classes.length);
    for(let i : number = 0; i < depth.length; ++i){
        let parentDepth : number = 0;
        let classNode = op(Op.INDEX,classHierarchy.classes,i);
        for(let supertype of classNode.supers) {
            let superclass = supertype.classNode;
            let index : number = classHierarchy.getClassIndex(superclass);
            if (!(index < i)) {
                throw `${classNode.name}(${i}) extends ${superclass.name}(${index})`;
            }
            /* TODO (AssertStatementImpl) : assert (index < i); */;
            parentDepth = math.max(parentDepth,depth[index]);
        }
        depth[i] = parentDepth + 1;
    }
    let depthHistogram : core.DartList<number> = getHistogramOf(depth);
    let averageDepth : double = average(depth);
    let medianDepth : double = median(depth);
    let totalDepth : number = sum(depth);
    let numberOfClasses : number = classHierarchy.classes.length;
    let expenseHistogram : string = classHierarchy.getExpenseHistogram().skip(1).join(' ');
    core.print(`classes: ${numberOfClasses}\nbuild.cold: ${coldBuildTime} ms\nbuild.hot:  ${hotBuildTime} ms\nquery.isSubclassOf:                 ${subclassPerSecond}\nquery.isSubmixtureOf:               ${submixturePerSecond}\nquery.isSubtypeOf:                  ${subtypePerSecond}\nquery.getClassAsInstanceOf:         ${asInstanceOfPerSecond}\nquery.getDispatchTarget(toString):  ${dispatchToStringPerSecond}\nquery.getDispatchTarget(getFloo):   ${dispatchGetPerSecond}\nquery.getDispatchTargets.iterate:   ${dispatchAllTargetsPerSecond}\nquery.getInterfaceMember(toString): ${interfaceToStringPerSecond}\nquery.getInterfaceMember(getFloo):  ${interfaceGetPerSecond}\nquery.getInterfaceMembers.iterate:  ${interfaceAllTargetsPerSecond}\nisSubtypeOf.expense-histogram: ${expenseHistogram}\nisSubtypeOf.compression-ratio: ${classHierarchy.getCompressionRatio()}\nasInstanceOf.table-size: ${classHierarchy.getSuperTypeHashTableSize()}\ndepth.histogram: ${depthHistogram.skip(1).join(' ')}\ndepth.average: ${averageDepth}\ndepth.median:  ${medianDepth}\ndepth.total:   ${totalDepth}\noverrides.total:   ${numberOfOverridePairs}\noverrides.iterate: ${op(Op.QUOTIENT,overrideTime,1000)} ms (${overridePairsPerSecond})\n`);
};
export var perSecond : (microseconds : number,trials : number) => string = (microseconds : number,trials : number) : string =>  {
    let millionsPerSecond : double = trials / microseconds;
    return `${new core.DartDouble(millionsPerSecond).toStringAsFixed(1)} M/s`;
};
export var getHistogramOf : (values : core.DartIterable<number>) => core.DartList<number> = (values : core.DartIterable<number>) : core.DartList<number> =>  {
    let result : core.DartList<number> = new core.DartList.literal<number>();
    for(let value of values) {
        while (result.length <= value){
            result.add(0);
        }
        ++result[value];
    }
    return result;
};
export var average : (values : core.DartIterable<number>) => double = (values : core.DartIterable<number>) : double =>  {
    let sum : double = 0.0;
    let length : number = 0;
    for(let x of values) {
        sum += x;
        ++length;
    }
    return length == 0 ? 0.0 : sum / length;
};
export var median : (values : core.DartIterable<number>) => double = (values : core.DartIterable<number>) : double =>  {
    let list : core.DartList<number> = ((_) : core.DartList<number> =>  {
        {
            _.sort();
            return _;
        }
    })(values.toList({
        growable : false}));
    if (list.isEmpty) return 0.0;
    let mid : number = op(Op.QUOTIENT,list.length,2);
    return list.length % 2 == 0 ? ((list[mid] + list[mid + 1]) / 2) : new core.DartNumber(list[mid]).toDouble();
};
export var sum : (values : core.DartIterable<number>) => number = (values : core.DartIterable<number>) : number =>  {
    let result : number = 0;
    for(let x of values) {
        result += x;
    }
    return result;
};
export class properties {
    private static __$argParser : any;
    static get argParser() : any { 
        if (this.__$argParser===undefined) {
            this.__$argParser = ((_) : any =>  {
                {
                    addFlag('basic',{
                        help : 'Measure the basic implementation',negatable : false});
                    addOption('cycle',{
                        abbr : 'c',help : 'Build N copies of the class hierarchy and cycle queries ' + 'between them',defaultsTo : '1'});
                    return _;
                }
            })(new bare.createInstance(any,null));
        }
        return this.__$argParser;
    }
    static set argParser(__$value : any)  { 
        this.__$argParser = __$value;
    }

    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = `Usage: class_hierarchy_bench [options] FILE.dill\n\nOptions:\n${properties.argParser.usage}\n`;
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
