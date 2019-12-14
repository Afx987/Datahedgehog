/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/timing/completion/completion_simple.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../timing_framework";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    let test : SimpleTest = new SimpleTest();
    test.run().then((result : lib3.TimingResult) =>  {
        core.print(`minTime = ${result.minTime}`);
        core.print(`averageTime = ${result.averageTime}`);
        core.print(`maxTime = ${result.maxTime}`);
        core.print(`standardDeviation = ${result.standardDeviation}`);
        core.print('');
        core.print('Press return to exit');
        return io.properties.stdin.first;
    });
};
export namespace SimpleTest {
    export type Constructors = lib3.TimingTest.Constructors | 'SimpleTest';
    export type Interface = Omit<SimpleTest, Constructors>;
}
@DartClass
export class SimpleTest extends lib3.TimingTest {
    mainFilePath : string;

    originalContent : string;

    cursorOffset : number;

    completionReceived : async.DartCompleter<any>;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleTest() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    oneTimeSetUp() : async.Future<any> {
        return super.oneTimeSetUp().then((_ : any) =>  {
            this.mainFilePath = this.sourcePath('test.dart');
            this.originalContent = 'class C {\n  m() {\n    return 0;\n  }\n}\n\nf(C c) {\n  return c;\n}\n';
            this.cursorOffset = new core.DartString(this.originalContent).indexOf('c;') + 1;
            this.writeFile(this.mainFilePath,this.originalContent);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform() : async.Future<any> {
        this.sendAnalysisUpdateContent(new core.DartMap.literal([
            [this.mainFilePath,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.cursorOffset,0,'.')))]]));
        this.sendCompletionGetSuggestions(this.mainFilePath,this.cursorOffset + 1);
        return this.completionReceived.future;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : async.Future<any> {
        this.completionReceived = new async.DartCompleter<any>();
        this.onCompletionResults.listen((_ : any) =>  {
            if (!this.completionReceived.isCompleted) {
                this.completionReceived.complete();
            }
        });
        this.sendAnalysisSetAnalysisRoots(new core.DartList.literal(lib5.dirname(this.mainFilePath)),new core.DartList.literal());
        this.sendAnalysisUpdateContent(new core.DartMap.literal([
            [this.mainFilePath,new bare.createInstance(any,null,this.originalContent)]]));
        return new async.Future.value();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tearDown() : async.Future<any> {
        this.sendAnalysisSetAnalysisRoots(new core.DartList.literal(),new core.DartList.literal());
        return new async.Future.value();
    }
}

export class properties {
}
