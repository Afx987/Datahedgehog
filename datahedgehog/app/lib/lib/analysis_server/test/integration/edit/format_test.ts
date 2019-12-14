/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/edit/format_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FormatTest);
    });
};
export namespace FormatTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'FormatTest';
    export type Interface = Omit<FormatTest, Constructors>;
}
@DartClass
export class FormatTest extends lib3.AbstractAnalysisServerIntegrationTest {
    formatTestSetup(_namedArguments? : {withErrors? : boolean}) : string {
        let {withErrors} = Object.assign({
            "withErrors" : false}, _namedArguments );
        let pathname : string = this.sourcePath('test.dart');
        if (withErrors) {
            let text : string = 'class Class1 {\n  int field\n  void foo() {\n  }\n}\n';
            this.writeFile(pathname,text);
        }else {
            let text : string = 'class Class1 {\n  int field;\n\n  void foo() {\n  }\n\n  void bar() {\n  }\n}\n';
            this.writeFile(pathname,text);
        }
        this.standardAnalysisSetup();
        return pathname;
    }
    test_format() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.formatTestSetup();
            let result : any = await this.sendEditFormat(pathname,0,0);
            expect(result.edits,isNotEmpty);
            expect(result.selectionOffset,0);
            expect(result.selectionLength,0);
        } )());
    }

    test_format_preserve_selection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.formatTestSetup();
            let initialPosition : number = new core.DartString(this.readFile(pathname)).indexOf('bar()');
            let result : any = await this.sendEditFormat(pathname,initialPosition,new core.DartString('bar').length);
            expect(result.edits,isNotEmpty);
            expect(result.selectionOffset,initialPosition - 3);
            expect(result.selectionLength,new core.DartString('bar').length);
        } )());
    }

    test_format_with_errors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.formatTestSetup({
                withErrors : true});
            try {
                await this.sendEditFormat(pathname,0,0);
                fail('expected FORMAT_WITH_ERRORS');
            } catch (__error__) {

                if (is(__error__,lib3.ServerErrorMessage)){
                    let message : lib3.ServerErrorMessage = __error__;
                    expect(op(Op.INDEX,message.error,'code'),'FORMAT_WITH_ERRORS');
                }
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormatTest() {
    }
}

export class properties {
}
