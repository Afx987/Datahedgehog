/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/source/error_processor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../generated/test_support";

export var main : () => any = () =>  {
    let invalid_assignment : any = new bare.createInstance(any,null,new lib3.TestSource(),0,1,HintCode.INVALID_ASSIGNMENT,new core.DartList.literal(new core.DartList.literal('x'),new core.DartList.literal('y')));
    let missing_return : any = new bare.createInstance(any,null,new lib3.TestSource(),0,1,HintCode.MISSING_RETURN,new core.DartList.literal(new core.DartList.literal('x')));
    let unused_local_variable : any = new bare.createInstance(any,null,new lib3.TestSource(),0,1,HintCode.UNUSED_LOCAL_VARIABLE,new core.DartList.literal(new core.DartList.literal('x')));
    let use_of_void_result : any = new bare.createInstance(any,null,new lib3.TestSource(),0,1,HintCode.USE_OF_VOID_RESULT,new core.DartList.literal(new core.DartList.literal('x')));
    let non_bool_operand : any = new bare.createInstance(any,null,new lib3.TestSource(),0,1,StaticTypeWarningCode.NON_BOOL_OPERAND,new core.DartList.literal(new core.DartList.literal('x')));
    let annotate_overrides : any = new bare.createInstance(any,null,new lib3.TestSource(),0,1,new bare.createInstance(any,null,'annotate_overrides',''));
    oneTimeSetup();
    setUp(() =>  {
        properties.context = new TestContext();
    });
    group('ErrorProcessor',() =>  {
        test('configureOptions',() =>  {
            configureOptions('analyzer:\n  errors:\n    invalid_assignment: error # severity ERROR\n    missing_return: false # ignore\n    unused_local_variable: true # skipped\n    use_of_void_result: unsupported_action # skipped\n');
            expect(getProcessor(invalid_assignment).severity,ErrorSeverity.ERROR);
            expect(getProcessor(missing_return).severity,isNull);
            expect(getProcessor(unused_local_variable),isNull);
            expect(getProcessor(use_of_void_result),isNull);
        });
        test('upgrades static type warnings to errors in strong mode',() =>  {
            configureOptions('analyzer:\n  strong-mode: true\n');
            expect(getProcessor(non_bool_operand).severity,ErrorSeverity.ERROR);
        });
        test('does not upgrade other warnings to errors in strong mode',() =>  {
            configureOptions('analyzer:\n  strong-mode: true\n');
            expect(getProcessor(unused_local_variable),isNull);
        });
    });
    group('ErrorConfig',() =>  {
        let config = 'analyzer:\n  errors:\n    invalid_assignment: unsupported_action # should be skipped\n    missing_return: false\n    unused_local_variable: error\n';
        group('processing',() =>  {
            test('yaml map',() =>  {
                let options = properties.optionsProvider.getOptionsFromString(config);
                let errorConfig = new bare.createInstance(any,null,op(Op.INDEX,(op(Op.INDEX,options,'analyzer') as any),'errors'));
                expect(errorConfig.processors,hasLength(2));
                let missingReturnProcessor = errorConfig.processors.firstWhere((p : any) =>  {
                    return p.appliesTo(missing_return);
                });
                expect(missingReturnProcessor.severity,isNull);
                let unusedLocalProcessor = errorConfig.processors.firstWhere((p : any) =>  {
                    return p.appliesTo(unused_local_variable);
                });
                expect(unusedLocalProcessor.severity,ErrorSeverity.ERROR);
                let invalidAssignmentProcessor = errorConfig.processors.firstWhere((p : any) =>  {
                    return p.appliesTo(invalid_assignment);
                },{
                    orElse : () =>  {
                        return null;
                    }});
                expect(invalidAssignmentProcessor,isNull);
            });
            test('string map',() =>  {
                let options = new core.DartMap.literal([
                    ['invalid_assignment','unsupported_action'],
                    ['missing_return','false'],
                    ['unused_local_variable','error']]);
                let errorConfig = new bare.createInstance(any,null,options);
                expect(errorConfig.processors,hasLength(2));
                let missingReturnProcessor = errorConfig.processors.firstWhere((p : any) =>  {
                    return p.appliesTo(missing_return);
                });
                expect(missingReturnProcessor.severity,isNull);
                let unusedLocalProcessor = errorConfig.processors.firstWhere((p : any) =>  {
                    return p.appliesTo(unused_local_variable);
                });
                expect(unusedLocalProcessor.severity,ErrorSeverity.ERROR);
                let invalidAssignmentProcessor = errorConfig.processors.firstWhere((p : any) =>  {
                    return p.appliesTo(invalid_assignment);
                },{
                    orElse : () =>  {
                        return null;
                    }});
                expect(invalidAssignmentProcessor,isNull);
            });
        });
        test('configure lints',() =>  {
            let options = properties.optionsProvider.getOptionsFromString('analyzer:\n  errors:\n    annotate_overrides: warning\n');
            let errorConfig = new bare.createInstance(any,null,op(Op.INDEX,(op(Op.INDEX,options,'analyzer') as any),'errors'));
            expect(errorConfig.processors,hasLength(1));
            let processor : any = errorConfig.processors.first;
            expect(processor.appliesTo(annotate_overrides),true);
            expect(processor.severity,ErrorSeverity.WARNING);
        });
    });
};
export var configureOptions : (options : string) => void = (options : string) : void =>  {
    let optionMap : core.DartMap<string,any> = properties.optionsProvider.getOptionsFromString(options);
    applyToAnalysisOptions(properties.context.analysisOptions,optionMap);
};
export var getProcessor : (error : any) => any = (error : any) : any =>  {
    return ErrorProcessor.getProcessor(properties.context.analysisOptions,error);
};
export var oneTimeSetup : () => void = () : void =>  {
    let plugins : core.DartList<any> = new core.DartList.literal<any>();
    plugins.addAll(AnalysisEngine.instance.requiredPlugins);
    let manager : any = new bare.createInstance(any,null);
    manager.processPlugins(plugins);
};
export namespace TestContext {
    export type Constructors = 'TestContext';
    export type Interface = Omit<TestContext, Constructors>;
}
@DartClass
export class TestContext extends any {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TestContext() {
    }
}

export class properties {
    private static __$context : TestContext;
    static get context() : TestContext { 
        return this.__$context;
    }
    static set context(__$value : TestContext)  { 
        this.__$context = __$value;
    }

    private static __$optionsProvider : any;
    static get optionsProvider() : any { 
        if (this.__$optionsProvider===undefined) {
            this.__$optionsProvider = new bare.createInstance(any,null);
        }
        return this.__$optionsProvider;
    }
    static set optionsProvider(__$value : any)  { 
        this.__$optionsProvider = __$value;
    }

    private static __$processor : any;
    static get processor() : any { 
        return this.__$processor;
    }
    static set processor(__$value : any)  { 
        this.__$processor = __$value;
    }

}
