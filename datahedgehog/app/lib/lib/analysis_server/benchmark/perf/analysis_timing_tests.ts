/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/perf/analysis_timing_tests.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./performance_tests";

export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    let parser : any = _createArgParser();
    let args = parser.parse(arguments);
    if (op(Op.EQUALS,op(Op.INDEX,args,properties.SOURCE_OPTION),null)) {
        core.print('path to source directory must be specified');
        io.exit(1);
    }
    properties.source = op(Op.INDEX,args,properties.SOURCE_OPTION);
    properties.priorityFile = op(Op.INDEX,args,properties.PRIORITY_FILE_OPTION);
    let names : core.DartList<any> = op(Op.INDEX,args,properties.METRIC_NAME_OPTION) as core.DartList<any>;
    for(let name of names) {
        properties.metricNames.add(name as string);
    }
    let test;
    if (properties.metricNames.isEmpty) {
        test = new AnalysisTimingTest();
    }else {
        test = new SubscriptionTimingTest();
    }
    async.Future.wait(new core.DartList.literal<async.Future<any>>(test.test_timing()));
};
export var _createArgParser : () => any = () : any =>  {
    return ((_) : any =>  {
        {
            addOption(properties.METRIC_NAME_OPTION,{
                help : 'metric name (defaults to `analysis`)',allowMultiple : true});
            addOption(properties.SOURCE_OPTION,{
                help : 'full path to source directory for analysis'});
            addOption(properties.PRIORITY_FILE_OPTION,{
                help : '(optional) full path to a priority file'});
            return _;
        }
    })(new bare.createInstance(any,null));
};
export namespace AnalysisTimingTest {
    export type Constructors = lib4.AbstractTimingTest.Constructors | 'AnalysisTimingTest';
    export type Interface = Omit<AnalysisTimingTest, Constructors>;
}
@DartClass
export class AnalysisTimingTest extends lib4.AbstractTimingTest {
    test_timing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.init(properties.source);
            this.setAnalysisRoot();
            this.stopwatch.start();
            await this.analysisFinished;
            core.print(`analysis completed in ${this.stopwatch.elapsed}`);
            await this.shutdown();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisTimingTest() {
    }
}

export namespace Metric {
    export type Constructors = 'Metric';
    export type Interface = Omit<Metric, Constructors>;
}
@DartClass
export class Metric {
    timings : core.DartList<core.DartDuration>;

    eventStream : async.DartStream<any>;

    service : any;

    name : string;

    constructor(name : string,service : any,eventStream : async.DartStream<any>) {
    }
    @defaultConstructor
    Metric(name : string,service : any,eventStream : async.DartStream<any>) {
        this.timings = new core.DartList.literal<core.DartDuration>();
        this.name = name;
        this.service = service;
        this.eventStream = eventStream;
    }
    toString() : string {
        return `${this.name}: ${this.service}, ${this.eventStream.runtimeType}, ${this.timings}`;
    }
}

export namespace SubscriptionTimingTest {
    export type Constructors = lib4.AbstractTimingTest.Constructors | 'SubscriptionTimingTest';
    export type Interface = Omit<SubscriptionTimingTest, Constructors>;
}
@DartClass
export class SubscriptionTimingTest extends lib4.AbstractTimingTest {
    _metrics : core.DartList<Metric>;

    get metrics() : core.DartList<Metric> {
        return this._metrics = ( this._metrics ) || ( properties.metricNames.map(this.getMetric.bind(this)).toList() );
    }
    getMetric(name : string) : Metric {
        switch (name) {
            case 'folding':
                return new Metric(name,AnalysisService.FOLDING,this.onAnalysisFolding);
            case 'highlighting':
                return new Metric(name,AnalysisService.HIGHLIGHTS,this.onAnalysisHighlights);
            case 'implemented':
                return new Metric(name,AnalysisService.IMPLEMENTED,this.onAnalysisImplemented);
            case 'navigation':
                return new Metric(name,AnalysisService.NAVIGATION,this.onAnalysisNavigation);
            case 'outline':
                return new Metric(name,AnalysisService.OUTLINE,this.onAnalysisOutline);
            case 'occurences':
                return new Metric(name,AnalysisService.OCCURRENCES,this.onAnalysisOccurrences);
            case 'overrides':
                return new Metric(name,AnalysisService.OVERRIDES,this.onAnalysisOverrides);
        }
        core.print(`no metric found for ${name}`);
        io.exit(1);
        return null;
    }
    test_timing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this.metrics,isNotEmpty);
            expect(properties.priorityFile,isNotNull,{
                reason : 'A priority file must be specified for ' + `${this.metrics.first.name} testing.`});
            await this.init(properties.source);
            this.stopwatch.start();
            this.metrics.forEach((m : Metric) =>  {
                return m.eventStream.listen((_ : any) =>  {
                    m.timings.add(new core.DartDuration({
                        milliseconds : this.stopwatch.elapsed.inMilliseconds}));
                });
            });
            let subscriptions = new core.DartMap.literal([
            ]);
            this.metrics.forEach((m : Metric) =>  {
                return subscriptions.set(m.service,new core.DartList.literal(properties.priorityFile));
            });
            this.sendAnalysisSetSubscriptions(subscriptions);
            this.setAnalysisRoot();
            this.sendAnalysisSetPriorityFiles(new core.DartList.literal(properties.priorityFile));
            await this.analysisFinished;
            core.print(`analysis completed in ${this.stopwatch.elapsed}`);
            this.metrics.forEach((m : Metric) =>  {
                return core.print(`${m.name} timings: ${m.timings}`);
            });
            await this.shutdown();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SubscriptionTimingTest() {
    }
}

export class properties {
    private static __$DEFAULT_METRIC;
    static get DEFAULT_METRIC() { 
        if (this.__$DEFAULT_METRIC===undefined) {
            this.__$DEFAULT_METRIC = 'analysis';
        }
        return this.__$DEFAULT_METRIC;
    }
    static set DEFAULT_METRIC(__$value : any)  { 
        this.__$DEFAULT_METRIC = __$value;
    }

    private static __$METRIC_NAME_OPTION;
    static get METRIC_NAME_OPTION() { 
        if (this.__$METRIC_NAME_OPTION===undefined) {
            this.__$METRIC_NAME_OPTION = 'metric';
        }
        return this.__$METRIC_NAME_OPTION;
    }
    static set METRIC_NAME_OPTION(__$value : any)  { 
        this.__$METRIC_NAME_OPTION = __$value;
    }

    private static __$PRIORITY_FILE_OPTION;
    static get PRIORITY_FILE_OPTION() { 
        if (this.__$PRIORITY_FILE_OPTION===undefined) {
            this.__$PRIORITY_FILE_OPTION = 'priority';
        }
        return this.__$PRIORITY_FILE_OPTION;
    }
    static set PRIORITY_FILE_OPTION(__$value : any)  { 
        this.__$PRIORITY_FILE_OPTION = __$value;
    }

    private static __$SOURCE_OPTION;
    static get SOURCE_OPTION() { 
        if (this.__$SOURCE_OPTION===undefined) {
            this.__$SOURCE_OPTION = 'source';
        }
        return this.__$SOURCE_OPTION;
    }
    static set SOURCE_OPTION(__$value : any)  { 
        this.__$SOURCE_OPTION = __$value;
    }

    private static __$metricNames;
    static get metricNames() { 
        if (this.__$metricNames===undefined) {
            this.__$metricNames = new core.DartList.literal<string>();
        }
        return this.__$metricNames;
    }
    static set metricNames(__$value : any)  { 
        this.__$metricNames = __$value;
    }

    private static __$priorityFile : string;
    static get priorityFile() : string { 
        return this.__$priorityFile;
    }
    static set priorityFile(__$value : string)  { 
        this.__$priorityFile = __$value;
    }

    private static __$source : string;
    static get source() : string { 
        return this.__$source;
    }
    static set source(__$value : string)  { 
        this.__$source = __$value;
    }

}
