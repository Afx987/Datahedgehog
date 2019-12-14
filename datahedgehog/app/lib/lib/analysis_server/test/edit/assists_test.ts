/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/edit/assists_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AssistsTest);
    });
};
export namespace AssistsTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AssistsTest';
    export type Interface = Omit<AssistsTest, Constructors>;
}
@DartClass
export class AssistsTest extends lib3.AbstractAnalysisTest {
    changes : core.DartList<any>;

    prepareAssists(search : string,length? : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            length = length || 0;
            let offset : number = this.findOffset(search);
            await this.prepareAssistsAt(offset,length);
        } )());
    }

    prepareAssistsAt(offset : number,length : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,this.testFile,offset,length).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            this.changes = result.assists;
        } )());
    }

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
    test_fromPlugins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let info : any = new bare.createInstance(any,null,'a','b','c',null,null);
            let message : string = 'From a plugin';
            let change : any = new bare.createInstance(any,null,5,new bare.createInstance(any,null,message,{
                edits : new core.DartList.literal<any>(new bare.createInstance(any,null,'',0,{
                    edits : new core.DartList.literal<any>(new bare.createInstance(any,null,0,0,'x'))}))}));
            let result : any = new bare.createInstance(any,null,new core.DartList.literal<any>(change));
            this.pluginManager.broadcastResults = new core.DartMap.literal([
                [info,new async.Future.value(result.toResponse('-',1))]]);
            this.addTestFile('main() {}');
            await this.waitForTasksFinished();
            await this.prepareAssists('in(');
            this._assertHasChange(message,'xmain() {}');
        } )());
    }

    test_removeTypeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  int v = 1;\n}\n');
            await this.waitForTasksFinished();
            await this.prepareAssists('v =');
            this._assertHasChange('Remove type annotation','main() {\n  var v = 1;\n}\n');
        } )());
    }

    test_splitVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  int v = 1;\n}\n');
            await this.waitForTasksFinished();
            await this.prepareAssists('v =');
            this._assertHasChange('Split variable declaration','main() {\n  int v;\n  v = 1;\n}\n');
        } )());
    }

    test_surroundWithIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  print(1);\n  print(2);\n}\n');
            await this.waitForTasksFinished();
            let offset : number = this.findOffset('  print(1)');
            let length : number = this.findOffset('}') - offset;
            await this.prepareAssistsAt(offset,length);
            this._assertHasChange("Surround with 'if'",'main() {\n  if (condition) {\n    print(1);\n    print(2);\n  }\n}\n');
        } )());
    }

    _assertHasChange(message : string,expectedCode : string) : void {
        for(let change of this.changes) {
            if (op(Op.EQUALS,change.message,message)) {
                let resultCode : string = SourceEdit.applySequence(this.testCode,op(Op.INDEX,change.edits,0).edits);
                expect(resultCode,expectedCode);
                return;
            }
        }
        fail(`Expected to find |${message}| in\n` + this.changes.join('\n'));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssistsTest() {
    }
}

export class properties {
}
