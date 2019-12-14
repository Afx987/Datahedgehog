/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/edit/statement_completion_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StatementCompletionTest);
    });
};
export namespace StatementCompletionTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'StatementCompletionTest';
    export type Interface = Omit<StatementCompletionTest, Constructors>;
}
@DartClass
export class StatementCompletionTest extends lib3.AbstractAnalysisTest {
    change : any;

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
    test_plainEnterFromStart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  int v = 1;\n}\n');
            await this.waitForTasksFinished();
            await this._prepareCompletion('v = 1;',{
                atStart : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  int v = 1;\n  /*caret*/\n}\n');
        } )());
    }

    test_plainOleEnter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  int v = 1;\n}\n');
            await this.waitForTasksFinished();
            await this._prepareCompletion('v = 1;',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  int v = 1;\n  /*caret*/\n}\n');
        } )());
    }

    test_plainOleEnterWithError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  int v =\n}\n');
            await this.waitForTasksFinished();
            let match : string = 'v =';
            await this._prepareCompletion(match,{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  int v =\n  x\n}\n',(s : any) =>  {
                return op(Op.PLUS,s.indexOf(match),new core.DartString(match).length);
            });
        } )());
    }

    _assertHasChange(message : string,expectedCode : string,cmp? : Function) : void {
        if (op(Op.EQUALS,this.change.message,message)) {
            if (!this.change.edits.isEmpty) {
                let resultCode : string = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
                expect(resultCode,new core.DartString(expectedCode).replaceAll('/*caret*/',''));
                if (cmp != null) {
                    let offset : number = cmp(resultCode);
                    expect(this.change.selection.offset,offset);
                }
            }else {
                if (cmp != null) {
                    let offset : number = cmp(this.testCode);
                    expect(this.change.selection.offset,offset);
                }
            }
            return;
        }
        fail(`Expected to find |${message}| but got: ` + this.change.message);
    }
    _prepareCompletion(search : string,_namedArguments? : {atStart? : boolean,atEnd? : boolean,delta? : number}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {atStart,atEnd,delta} = Object.assign({
                "atStart" : false,
                "atEnd" : false,
                "delta" : 0}, _namedArguments );
            let offset : number = this.findOffset(search);
            if (atStart) {
                delta = 0;
            }else if (atEnd) {
                delta = new core.DartString(search).length;
            }
            await this._prepareCompletionAt(offset + delta);
        } )());
    }

    _prepareCompletionAt(offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,this.testFile,offset).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            this.change = result.change;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatementCompletionTest() {
    }
}

export class properties {
}
