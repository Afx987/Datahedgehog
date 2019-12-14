/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/perf/completion_timing_tests.dart */
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
    properties.offset = core.DartInt.parse(op(Op.INDEX,args,properties.COMPLETION_OFFSET));
    async.Future.wait(new core.DartList.literal(new CompletionTimingTest().test_timing()));
};
export var _createArgParser : () => any = () : any =>  {
    return ((_) : any =>  {
        {
            addOption(properties.SOURCE_OPTION,{
                help : 'full path to source directory for analysis'});
            addOption(properties.PRIORITY_FILE_OPTION,{
                help : 'full path to a priority file'});
            addOption(properties.COMPLETION_OFFSET,{
                help : 'offset in file for code completions'});
            return _;
        }
    })(new bare.createInstance(any,null));
};
export namespace CompletionTimingTest {
    export type Constructors = lib4.AbstractTimingTest.Constructors | 'CompletionTimingTest';
    export type Interface = Omit<CompletionTimingTest, Constructors>;
}
@DartClass
export class CompletionTimingTest extends lib4.AbstractTimingTest {
    timings : core.DartList<core.DartDuration>;

    test_timing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(properties.priorityFile,isNotNull,{
                reason : 'A priority file must be specified for completion testing.'});
            expect(properties.offset,isNotNull,{
                reason : 'An offset must be specified for completion testing.'});
            await this.init(properties.source);
            this.stopwatch.start();
            this.onCompletionResults.listen((_ : any) =>  {
                this.timings.add(new core.DartDuration({
                    milliseconds : this.stopwatch.elapsed.inMilliseconds}));
            });
            this.setAnalysisRoot();
            this.sendAnalysisSetPriorityFiles(new core.DartList.literal(properties.priorityFile));
            this.sendCompletionGetSuggestions(properties.priorityFile,properties.offset);
            await this.analysisFinished;
            core.print(`analysis completed in ${this.stopwatch.elapsed}`);
            core.print(`completion received at : ${this.timings}`);
            await this.shutdown();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompletionTimingTest() {
        this.timings = new core.DartList.literal<core.DartDuration>();
    }
}

export class properties {
    private static __$COMPLETION_OFFSET;
    static get COMPLETION_OFFSET() { 
        if (this.__$COMPLETION_OFFSET===undefined) {
            this.__$COMPLETION_OFFSET = 'offset';
        }
        return this.__$COMPLETION_OFFSET;
    }
    static set COMPLETION_OFFSET(__$value : any)  { 
        this.__$COMPLETION_OFFSET = __$value;
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

    private static __$offset : number;
    static get offset() : number { 
        return this.__$offset;
    }
    static set offset(__$value : number)  { 
        this.__$offset = __$value;
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
