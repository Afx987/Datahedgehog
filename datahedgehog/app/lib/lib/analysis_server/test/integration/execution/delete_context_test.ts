/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/execution/delete_context_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DeleteContextTest);
    });
};
export namespace DeleteContextTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'DeleteContextTest';
    export type Interface = Omit<DeleteContextTest, Constructors>;
}
@DartClass
export class DeleteContextTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_delete() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('lib/main.dart');
            this.writeFile(pathname,'// dummy');
            this.writeFile(this.sourcePath('.packages'),'foo:lib/');
            this.standardAnalysisSetup();
            let contextId : string = (await this.sendExecutionCreateContext(this.sourceDirectory.path)).id;
            let result : any = await this.sendExecutionMapUri(contextId,{
                uri : 'package:foo/main.dart'});
            expect(result.file,pathname);
            expect(await this.sendExecutionDeleteContext(contextId),isNull);
            try {
                result = await this.sendExecutionMapUri(contextId,{
                    uri : 'package:foo/main.dart'});
                fail('expected exception after context delete');
            } catch (__error__) {

                if (is(__error__,lib3.ServerErrorMessage)){
                    let message : lib3.ServerErrorMessage = __error__;
                    expect(op(Op.INDEX,message.error,'code'),'INVALID_PARAMETER');
                }
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeleteContextTest() {
    }
}

export class properties {
}
