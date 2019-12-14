/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/edit/get_assists_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetAssistsTest);
    });
};
export namespace GetAssistsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetAssistsTest';
    export type Interface = Omit<GetAssistsTest, Constructors>;
}
@DartClass
export class GetAssistsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_has_assists() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'import \'dart:async\';\n\nFuture f;\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isEmpty);
            let result : any = await this.sendEditGetAssists(pathname,new core.DartString(text).indexOf('dart:async'),0);
            expect(result.assists,isNotEmpty);
            let change : any = result.assists.singleWhere((change : any) =>  {
                return op(Op.EQUALS,change.message,"Add explicit 'show' combinator");
            });
            expect(change.edits,hasLength(1));
            expect(change.edits.first.edits,hasLength(1));
            let edit : any = change.edits.first.edits.first;
            text = new core.DartString(text).replaceRange(edit.offset,edit.end,edit.replacement);
            this.writeFile(pathname,text);
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isEmpty);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetAssistsTest() {
    }
}

export class properties {
}
