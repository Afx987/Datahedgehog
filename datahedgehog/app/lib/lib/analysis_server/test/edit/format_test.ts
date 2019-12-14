/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/edit/format_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FormatTest);
    });
};
export namespace FormatTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'FormatTest';
    export type Interface = Omit<FormatTest, Constructors>;
}
@DartClass
export class FormatTest extends lib3.AbstractAnalysisTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(new core.DartList.literal(this.server.serverPlugin));
        this.handler = new bare.createInstance(any,null,this.server);
    }
    test_format_longLine() : async.Future<any> {
        let content : string = 'fun(firstParam, secondParam, thirdParam, fourthParam) {\n  if (firstParam.noNull && secondParam.noNull && thirdParam.noNull && fourthParam.noNull) {}\n}\n';
        this.addTestFile(content);
        return this.waitForTasksFinished().then((_ : any) =>  {
            let formatResult : any = this._formatAt(0,3,{
                lineLength : 100});
            expect(formatResult.edits,isNotNull);
            expect(formatResult.edits,hasLength(0));
            expect(formatResult.selectionOffset,equals(0));
            expect(formatResult.selectionLength,equals(3));
        });
    }
    test_format_noOp() : async.Future<any> {
        this.addTestFile('main() {\n  int x = 3;\n}\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            let formatResult : any = this._formatAt(0,3);
            expect(formatResult.edits,isNotNull);
            expect(formatResult.edits,hasLength(0));
        });
    }
    test_format_noSelection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() { int x = 3; }\n');
            await this.waitForTasksFinished();
            let formatResult : any = this._formatAt(0,0);
            expect(formatResult.edits,isNotNull);
            expect(formatResult.edits,hasLength(1));
            let edit : any = op(Op.INDEX,formatResult.edits,0);
            expect(edit.replacement,equals('main() {\n  int x = 3;\n}\n'));
            expect(formatResult.selectionOffset,equals(0));
            expect(formatResult.selectionLength,equals(0));
        } )());
    }

    test_format_simple() : async.Future<any> {
        this.addTestFile('main() { int x = 3; }\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            let formatResult : any = this._formatAt(0,3);
            expect(formatResult.edits,isNotNull);
            expect(formatResult.edits,hasLength(1));
            let edit : any = op(Op.INDEX,formatResult.edits,0);
            expect(edit.replacement,equals('main() {\n  int x = 3;\n}\n'));
            expect(formatResult.selectionOffset,equals(0));
            expect(formatResult.selectionLength,equals(3));
        });
    }
    test_format_withErrors() : async.Future<any> {
        this.addTestFile('main() { int x =\n');
        return this.waitForTasksFinished().then((_ : any) =>  {
            let request : any = new bare.createInstance(any,null,this.testFile,0,3).toRequest('0');
            let response : any = this.handler.handleRequest(request);
            expect(response,lib4.isResponseFailure('0'));
        });
    }
    _formatAt(selectionOffset : number,selectionLength : number,_namedArguments? : {lineLength? : number}) : any {
        let {lineLength} = Object.assign({
        }, _namedArguments );
        let request : any = new bare.createInstance(any,null,this.testFile,selectionOffset,selectionLength,{
            lineLength : lineLength}).toRequest('0');
        let response : any = this.handleSuccessfulRequest(request);
        return new bare.createInstance(any,null,response);
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
