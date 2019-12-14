/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/class_hierarchy_self_check.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./self_check_util";
import * as lib4 from "./class_hierarchy_basic";
import * as io from "@dart2ts/dart/io";
import * as math from "@dart2ts/dart/math";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    lib3.runSelfCheck(args,(filename : string) =>  {
        testClassHierarchyOnProgram(loadProgramFromBinary(filename));
    });
};
export var testClassHierarchyOnProgram : (program : any,_namedArguments? : {verbose? : boolean}) => void = (program : any,_namedArguments? : {verbose? : boolean}) : void =>  {
    let {verbose} = Object.assign({
        "verbose" : false}, _namedArguments );
    let basic : lib4.BasicClassHierarchy = new lib4.BasicClassHierarchy(program);
    let classHierarchy : any = new bare.createInstance(any,null,program);
    let total : number = classHierarchy.classes.length;
    let progress : number = 0;
    for(let class1 of classHierarchy.classes) {
        for(let class2 of classHierarchy.classes) {
            let isSubclass : boolean = classHierarchy.isSubclassOf(class1,class2);
            let isSubmixture : boolean = classHierarchy.isSubmixtureOf(class1,class2);
            let isSubtype : boolean = classHierarchy.isSubtypeOf(class1,class2);
            let asInstance = classHierarchy.getClassAsInstanceOf(class1,class2);
            if (isSubclass != basic.isSubclassOf(class1,class2)) {
                fail(`isSubclassOf(${class1.name}, ${class2.name}) returned ` + `${isSubclass} but should be ${!isSubclass}`);
            }
            if (isSubmixture != basic.isSubmixtureOf(class1,class2)) {
                fail(`isSubmixtureOf(${class1.name}, ${class2.name}) returned ` + `${isSubclass} but should be ${!isSubclass}`);
            }
            if (isSubtype != basic.isSubtypeOf(class1,class2)) {
                fail(`isSubtypeOf(${class1.name}, ${class2.name}) returned ` + `${isSubtype} but should be ${!isSubtype}`);
            }
            if (asInstance != basic.getClassAsInstanceOf(class1,class2)) {
                fail(`asInstanceOf(${class1.name}, ${class2.name}) returned ` + `${asInstance} but should be ` + `${basic.getClassAsInstanceOf(class1,class2)}`);
            }
        }
        ++progress;
        if (verbose) {
            io.properties.stdout.write(`Subclass queries ${op(Op.QUOTIENT,100 * progress,total)}%`);
        }
    }
    let names : core.DartSet<any> = new core.DartSet<any>();
    for(let classNode of classHierarchy.classes) {
        for(let member of classNode.members) {
            names.add(member.name);
        }
    }
    let nameList : core.DartList<any> = names.toList();
    progress = 0;
    for(let classNode of classHierarchy.classes) {
        let candidateNames : core.DartIterable<any> = new core.DartList.literal<core.DartIterable<any>>(basic.gettersAndCalls.get(classNode).keys,basic.setters.get(classNode).keys,pickRandom(nameList,100)).expand((x : any) =>  {
            return x;
        });
        for(let name of candidateNames) {
            let expectedGetter : any = basic.getDispatchTarget(classNode,name,{
                setter : false});
            let expectedSetter : any = basic.getDispatchTarget(classNode,name,{
                setter : true});
            let actualGetter : any = classHierarchy.getDispatchTarget(classNode,name,{
                setter : false});
            let actualSetter : any = classHierarchy.getDispatchTarget(classNode,name,{
                setter : true});
            if (actualGetter != expectedGetter) {
                fail(`lookupGetter(${classNode}, ${name}) returned ` + `${actualGetter} but should be ${expectedGetter}`);
            }
            if (actualSetter != expectedSetter) {
                fail(`lookupSetter(${classNode}, ${name}) returned ` + `${actualSetter} but should be ${expectedSetter}`);
            }
        }
        ++progress;
        if (verbose) {
            io.properties.stdout.write(`Dispatch queries ${op(Op.QUOTIENT,100 * progress,total)}%`);
        }
    }
    progress = 0;
    for(let classNode of classHierarchy.classes) {
        let candidateNames : core.DartIterable<any> = new core.DartList.literal(basic.interfaceGettersAndCalls.get(classNode).keys,basic.interfaceSetters.get(classNode).keys,pickRandom(nameList,100)).expand((x : any) =>  {
            return x;
        });
        for(let name of candidateNames) {
            let expectedGetter : any = basic.getInterfaceMember(classNode,name,{
                setter : false});
            let expectedSetter : any = basic.getInterfaceMember(classNode,name,{
                setter : true});
            let actualGetter : any = classHierarchy.getInterfaceMember(classNode,name,{
                setter : false});
            let actualSetter : any = classHierarchy.getInterfaceMember(classNode,name,{
                setter : true});
            if (actualGetter != expectedGetter) {
                fail(`getInterfaceMember(${classNode}, ${name}) returned ` + `${actualGetter} but should be ${expectedGetter}`);
            }
            if (actualSetter != expectedSetter) {
                fail(`getInterfaceMember(${classNode}, ${name}, setter: true) ` + `returned ${actualSetter} but should be ${expectedSetter}`);
            }
        }
        ++progress;
        if (verbose) {
            io.properties.stdout.write(`Interface queries ${op(Op.QUOTIENT,100 * progress,total)}%`);
        }
    }
    for(let classNode of classHierarchy.classes) {
        var getHash : (member : any,superMember : any,setter : any) => string = (member : any,superMember : any,setter : any) : string =>  {
            let eq : string = setter ? '=' : '';
            return `${member}${eq} overrides ${superMember}${eq}`;
        };
        let expectedOverrides : core.DartSet<string> = new core.DartSet<string>();
        basic.forEachOverridePair(classNode,(member : any,superMember : any,setter : any) =>  {
            expectedOverrides.add(getHash(member,superMember,setter));
        });
        let actualOverrides : core.DartSet<string> = new core.DartSet<string>();
        classHierarchy.forEachOverridePair(classNode,(member : any,superMember : any,setter : any) =>  {
            actualOverrides.add(getHash(member,superMember,setter));
        });
        for(let actual of actualOverrides) {
            if (!expectedOverrides.contains(actual)) {
                fail(`forEachOverridePair(${classNode}) should not report that ${actual}`);
            }
        }
        for(let expected of expectedOverrides) {
            if (!actualOverrides.contains(expected)) {
                fail(`forEachOverridePair(${classNode}) did not report that ${expected}`);
            }
        }
    }
    if (verbose) {
        core.print('Progress 100%. Done.');
    }
};
export var pickRandom : (items : core.DartList<any>,n : number) => core.DartList<any> = (items : core.DartList<any>,n : number) : core.DartList<any> =>  {
    let result = new core.DartList.literal();
    for(let i : number = 0; i < n; ++i){
        result.add(items[properties.random.nextInt(items.length)]);
    }
    return result;
};
export class properties {
    private static __$random;
    static get random() { 
        if (this.__$random===undefined) {
            this.__$random = new math.Random(12345);
        }
        return this.__$random;
    }
    static set random(__$value : any)  { 
        this.__$random = __$value;
    }

}
