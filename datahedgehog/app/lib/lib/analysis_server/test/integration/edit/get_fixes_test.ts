/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/edit/get_fixes_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetFixesTest);
    });
};
export namespace GetFixesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetFixesTest';
    export type Interface = Omit<GetFixesTest, Constructors>;
}
@DartClass
export class GetFixesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_has_fixes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'Future f;\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isNotEmpty);
            let result : any = await this.sendEditGetFixes(pathname,new core.DartString(text).indexOf('Future f'));
            expect(result.fixes,hasLength(1));
            let fix : any = result.fixes.first;
            expect(fix.error.code,'undefined_class');
            expect(fix.fixes,isNotEmpty);
            let change : any = fix.fixes.singleWhere((change : any) =>  {
                return change.message.startsWith('Import ');
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

    test_no_fixes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'import \'dart:async\';\n\nFuture f;\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            let result : any = await this.sendEditGetFixes(pathname,new core.DartString(text).indexOf('Future f'));
            expect(result.fixes,isEmpty);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetFixesTest() {
    }
}

export class properties {
}
