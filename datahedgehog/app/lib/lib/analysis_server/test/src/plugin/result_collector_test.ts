/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/result_collector_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ResultCollectorTest);
    });
};
export namespace ResultCollectorTest {
    export type Constructors = 'ResultCollectorTest';
    export type Interface = Omit<ResultCollectorTest, Constructors>;
}
@DartClass
export class ResultCollectorTest {
    private static __$serverId : string;
    static get serverId() : string { 
        if (this.__$serverId===undefined) {
            this.__$serverId = 'server';
        }
        return this.__$serverId;
    }

    collector : any;

    test_clearResultsForFile() : void {
        let filePath1 : string = 'test1.dart';
        let filePath2 : string = 'test2.dart';
        let value1 : string = 'r1';
        let value2 : string = 'r2';
        this.collector.startCollectingFor(filePath1);
        this.collector.startCollectingFor(filePath2);
        this.collector.putResults(filePath1,'p',value1);
        this.collector.putResults(filePath2,'p',value2);
        expect(this.collector.getResults(filePath1),contains(value1));
        expect(this.collector.getResults(filePath2),contains(value2));
        this.collector.clearResultsForFile(filePath2);
        expect(this.collector.getResults(filePath1),contains(value1));
        expect(this.collector.getResults(filePath2),isEmpty);
    }
    test_clearResultsFromPlugin() : void {
        let filePath : string = 'test.dart';
        let p1Name : string = 'p1';
        let p2Name : string = 'p2';
        let p1Value : string = 'r1';
        let p2Value : string = 'r2';
        this.collector.startCollectingFor(filePath);
        this.collector.putResults(filePath,p1Name,p1Value);
        this.collector.putResults(filePath,p2Name,p2Value);
        expect(this.collector.getResults(filePath),contains(p1Value));
        expect(this.collector.getResults(filePath),contains(p2Value));
        this.collector.clearResultsFromPlugin(p1Name);
        expect(this.collector.getResults(filePath),isNot(contains(p1Value)));
        expect(this.collector.getResults(filePath),contains(p2Value));
    }
    test_getResults_emptyCollector() : void {
        expect(this.collector.getResults('test.dart'),isEmpty);
    }
    test_getResults_serverFirst() : void {
        let filePath : string = 'test.dart';
        let value1 : string = 'r1';
        let value2 : string = 'r2';
        this.collector.startCollectingFor(filePath);
        this.collector.putResults(filePath,'p',value1);
        this.collector.putResults(filePath,ResultCollectorTest.serverId,value2);
        expect(this.collector.getResults(filePath),new core.DartList.literal<string>(value2,value1));
    }
    test_putResults_collecting() : void {
        let filePath1 : string = 'test1.dart';
        let filePath2 : string = 'test2.dart';
        let value1 : string = 'r1';
        let value2 : string = 'r2';
        expect(this.collector.getResults(filePath1),isEmpty);
        expect(this.collector.getResults(filePath2),isEmpty);
        this.collector.startCollectingFor(filePath1);
        this.collector.startCollectingFor(filePath2);
        this.collector.putResults(filePath1,'p',value1);
        this.collector.putResults(filePath2,'p',value2);
        expect(this.collector.getResults(filePath1),contains(value1));
        expect(this.collector.getResults(filePath1),isNot(contains(value2)));
        expect(this.collector.getResults(filePath2),contains(value2));
        expect(this.collector.getResults(filePath2),isNot(contains(value1)));
    }
    test_putResults_notCollecting() : void {
        let filePath : string = 'test.dart';
        expect(this.collector.getResults(filePath),isEmpty);
        this.collector.putResults(filePath,'p','r');
        expect(this.collector.getResults(filePath),isEmpty);
    }
    test_stopCollectingFor() : void {
        let filePath : string = 'test.dart';
        let value : string = 'r';
        this.collector.startCollectingFor(filePath);
        this.collector.putResults(filePath,'p',value);
        expect(this.collector.getResults(filePath),contains(value));
        this.collector.stopCollectingFor(filePath);
        expect(this.collector.getResults(filePath),isEmpty);
        this.collector.putResults(filePath,'p',value);
        expect(this.collector.getResults(filePath),isEmpty);
    }
    constructor() {
    }
    @defaultConstructor
    ResultCollectorTest() {
        this.collector = new bare.createInstance(any,null,ResultCollectorTest.serverId);
    }
}

export class properties {
}
