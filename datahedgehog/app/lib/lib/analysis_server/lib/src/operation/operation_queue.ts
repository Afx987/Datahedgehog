/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/operation/operation_queue.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ServerOperationQueue {
    export type Constructors = 'ServerOperationQueue';
    export type Interface = Omit<ServerOperationQueue, Constructors>;
}
@DartClass
export class ServerOperationQueue {
    _queues : core.DartList<collection.Queue<any>>;

    constructor() {
    }
    @defaultConstructor
    ServerOperationQueue() {
        this._queues = new core.DartList.literal<collection.Queue<any>>();
        for(let i : number = 0; i < ServerOperationPriority.COUNT; i++){
            let queue = new collection.DoubleLinkedQueue<any>();
            this._queues.add(queue);
        }
    }
    get isEmpty() : boolean {
        return this._queues.every((queue : any) =>  {
            return queue.isEmpty;
        });
    }
    add(operation : any) : void {
        let queueIndex : number = operation.priority.ordinal;
        let queue : collection.Queue<any> = this._queues[queueIndex];
        for(let existingOperation of queue) {
            if (is(existingOperation, any) && existingOperation.merge(operation)) {
                return;
            }
        }
        queue.addLast(operation);
    }
    clear() : void {
        for(let queue of this._queues) {
            queue.clear();
        }
    }
    contextRemoved(context : any) : void {
        for(let queue of this._queues) {
            queue.removeWhere((operation : any) =>  {
                return op(Op.EQUALS,operation.context,context);
            });
        }
    }
    peek() : any {
        for(let queue of this._queues) {
            if (!queue.isEmpty) {
                return queue.first;
            }
        }
        return null;
    }
    reschedule() : void {
        let operations : core.DartList<any> = new core.DartList.literal<any>();
        for(let queue of this._queues) {
            operations.addAll(queue);
            queue.clear();
        }
        operations.forEach(this.add.bind(this));
    }
    sourceAboutToChange(source : any) : void {
        for(let queue of this._queues) {
            queue.removeWhere((operation : any) =>  {
                if (is(operation, any)) {
                    return operation.shouldBeDiscardedOnSourceChange(source);
                }
                return false;
            });
        }
    }
    take() : any {
        for(let queue of this._queues) {
            if (!queue.isEmpty) {
                return queue.removeFirst();
            }
        }
        return null;
    }
    takeIf(test : (operation : any) => boolean) : any {
        for(let queue of this._queues) {
            for(let operation of queue) {
                if (test(operation)) {
                    queue.remove(operation);
                    return operation;
                }
            }
        }
        return null;
    }
}

export class properties {
}
