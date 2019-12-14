/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/error_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisErrorIntegrationTest);
    });
};
export namespace AnalysisErrorIntegrationTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'AnalysisErrorIntegrationTest';
    export type Interface = Omit<AnalysisErrorIntegrationTest, Constructors>;
}
@DartClass
export class AnalysisErrorIntegrationTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_detect_simple_error() {
        let pathname : string = this.sourcePath('test.dart');
        this.writeFile(pathname,'main() {\n  print(null) // parse error: missing \';\'\n}');
        this.standardAnalysisSetup();
        return this.analysisFinished.then((_ : any) =>  {
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isList);
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,pathname);
            expect(errors,hasLength(1));
            expect(errors[0].location.file,equals(pathname));
        });
    }
    test_super_mixins_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            this.writeFile(pathname,'class Test extends Object with C {\n  void foo() {}\n}\nabstract class B {\n  void foo() {}\n}\nabstract class C extends B {\n  void bar() {\n    super.foo();\n  }\n}\n');
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isList);
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,pathname);
            expect(errors,hasLength(2));
            let allErrorMessages : core.DartSet<string> = errors.map((e : any) =>  {
                return e.message;
            }).toSet();
            expect(allErrorMessages,contains("The class 'C' can't be used as a mixin because it extends a class other than Object."));
            expect(allErrorMessages,contains("The class 'C' can't be used as a mixin because it references 'super'."));
        } )());
    }

    test_super_mixins_enabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            this.writeFile(pathname,'class Test extends Object with C {\n  void foo() {}\n}\nabstract class B {\n  void foo() {}\n}\nabstract class C extends B {\n  void bar() {\n    super.foo();\n  }\n}\n');
            await this.sendAnalysisUpdateOptions(((_) : any =>  {
                {
                    _.enableSuperMixins = true;
                    return _;
                }
            })(new bare.createInstance(any,null)));
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isList);
            let errors : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,pathname);
            expect(errors,isEmpty);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisErrorIntegrationTest() {
    }
}

export class properties {
}
