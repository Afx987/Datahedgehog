/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/test_support.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TestAnalysisTask {
    export type Constructors = 'TestAnalysisTask';
    export type Interface = Omit<TestAnalysisTask, Constructors>;
}
@DartClass
export class TestAnalysisTask extends any {
    descriptor : any;

    exception : any;

    results : core.DartList<any>;

    value : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handlesDependencyCycles : boolean;

    constructor(context : any,target : any,_namedArguments? : {descriptor? : any,exception? : any,handlesDependencyCycles? : boolean,results? : core.DartList<any>,value? : number}) {
    }
    @defaultConstructor
    TestAnalysisTask(context : any,target : any,_namedArguments? : {descriptor? : any,exception? : any,handlesDependencyCycles? : boolean,results? : core.DartList<any>,value? : number}) {
        let {descriptor,exception,handlesDependencyCycles,results,value} = Object.assign({
            "handlesDependencyCycles" : false,
            "value" : 1}, _namedArguments );
        super.DartObject(context,target);
        this.descriptor = descriptor;
        this.exception = exception;
        this.handlesDependencyCycles = handlesDependencyCycles;
        this.results = results;
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get description() : string {
        return 'Test task';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() {
        if (this.exception != null) {
            caughtException = this.exception;
        }else if (this.results != null) {
            for(let result of this.results) {
                op(Op.INDEX_ASSIGN,outputs,result,this.value++);
            }
        }else if (this.descriptor != null) {
            for(let result of this.descriptor.results) {
                op(Op.INDEX_ASSIGN,outputs,result,this.value++);
            }
        }
    }
}

export class properties {
}
