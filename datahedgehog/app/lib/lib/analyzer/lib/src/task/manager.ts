/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace TaskManager {
    export type Constructors = 'TaskManager';
    export type Interface = Omit<TaskManager, Constructors>;
}
@DartClass
export class TaskManager {
    taskMap : core.DartMap<any,core.DartList<any>>;

    generalResults : core.DartSet<any>;

    priorityResults : core.DartSet<any>;

    addGeneralResult(result : any) : void {
        this.generalResults.add(result);
    }
    addPriorityResult(result : any) : void {
        this.priorityResults.add(result);
    }
    addTaskDescriptor(descriptor : any) : void {
        descriptor.results.forEach((result : any) =>  {
            let descriptors : core.DartList<any> = this.taskMap.get(result);
            if (descriptors == null) {
                descriptors = new core.DartList.literal<any>();
                this.taskMap.set(result,descriptors);
            }
            descriptors.add(descriptor);
        });
    }
    addTaskDescriptors(descriptors : core.DartList<any>) : void {
        descriptors.forEach(this.addTaskDescriptor.bind(this));
    }
    findTask(target : any,result : any) : any {
        let descriptors : core.DartList<any> = this.taskMap.get(result);
        if (descriptors == null) {
            throw new bare.createInstance(any,null,`No tasks registered to compute ${result} for ${target}`);
        }
        return this._findBestTask(descriptors,target);
    }
    removeGeneralResult(result : any) : void {
        this.generalResults.remove(result);
    }
    removePriorityResult(result : any) : void {
        this.priorityResults.remove(result);
    }
    _findBestTask(descriptors : core.DartList<any>,target : any) : any {
        let best : any = null;
        for(let descriptor of descriptors) {
            let suitability : any = descriptor.suitabilityFor(target);
            if (op(Op.EQUALS,suitability,TaskSuitability.HIGHEST)) {
                return descriptor;
            }else if (op(Op.EQUALS,best,null) && op(Op.EQUALS,suitability,TaskSuitability.LOWEST)) {
                best = descriptor;
            }
        }
        return best;
    }
    constructor() {
    }
    @defaultConstructor
    TaskManager() {
        this.taskMap = new core.DartHashMap<any,core.DartList<any>>();
        this.generalResults = new core.DartSet<any>();
        this.priorityResults = new core.DartSet<any>();
    }
}

export class properties {
}
