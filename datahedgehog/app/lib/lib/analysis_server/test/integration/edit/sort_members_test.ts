/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/edit/sort_members_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SortMembersTest);
    });
};
export namespace SortMembersTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'SortMembersTest';
    export type Interface = Omit<SortMembersTest, Constructors>;
}
@DartClass
export class SortMembersTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_sort() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'int foo;\nint bar;\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            let result : any = await this.sendEditSortMembers(pathname);
            let edit : any = result.edit;
            expect(edit.edits,hasLength(1));
            expect(edit.edits.first.replacement,"bar;\nint foo");
        } )());
    }

    test_sort_no_changes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'int bar;\nint foo;\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            let result : any = await this.sendEditSortMembers(pathname);
            let edit : any = result.edit;
            expect(edit.edits,isEmpty);
        } )());
    }

    test_sort_with_errors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'int foo\nint bar;\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            try {
                await this.sendEditSortMembers(pathname);
            } catch (__error__) {

                if (is(__error__,lib3.ServerErrorMessage)){
                    let message : lib3.ServerErrorMessage = __error__;
                    expect(op(Op.INDEX,message.error,'code'),'SORT_MEMBERS_PARSE_ERRORS');
                }
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SortMembersTest() {
    }
}

export class properties {
}
