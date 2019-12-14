/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/completion/get_suggestions_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetSuggestionsTest);
    });
};
export namespace GetSuggestionsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetSuggestionsTest';
    export type Interface = Omit<GetSuggestionsTest, Constructors>;
}
@DartClass
export class GetSuggestionsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    path : string;

    content : string;

    completionOffset : number;

    setTestSource(relPath : string,content : string) : void {
        this.path = this.sourcePath(relPath);
        expect(this.completionOffset,isNull,{
            reason : 'Call addTestUnit exactly once'});
        this.completionOffset = new core.DartString(content).indexOf('^');
        expect(this.completionOffset,isNot(equals(-1)),{
            reason : 'missing ^'});
        let nextOffset : number = new core.DartString(content).indexOf('^',this.completionOffset + 1);
        expect(nextOffset,equals(-1),{
            reason : 'too many ^'});
        this.content = new core.DartString(content).substring(0,this.completionOffset) + new core.DartString(content).substring(this.completionOffset + 1);
    }
    test_getSuggestions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.setTestSource('test.dart','String test = \'\';\nmain() {\n  test.^\n}\n');
            this.writeFile(this.path,this.content);
            await this.standardAnalysisSetup();
            await this.analysisFinished;
            let result : any = await this.sendCompletionGetSuggestions(this.path,this.completionOffset);
            let completionId : string = result.id;
            let param : any = await this.onCompletionResults.firstWhere((param : any) =>  {
                return op(Op.EQUALS,param.id,completionId) && param.isLast;
            });
            expect(param.replacementOffset,this.completionOffset);
            expect(param.replacementLength,0);
            param.results.firstWhere((suggestion : any) =>  {
                return op(Op.EQUALS,suggestion.completion,'length');
            });
        } )());
    }

    test_getSuggestions_onlyOverlay() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.setTestSource('test.dart','String test = \'\';\nmain() {\n  test.^\n}\n');
            await this.standardAnalysisSetup();
            await this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [this.path,new bare.createInstance(any,null,this.content)]]));
            await this.analysisFinished;
            let result : any = await this.sendCompletionGetSuggestions(this.path,this.completionOffset);
            let completionId : string = result.id;
            let param : any = await this.onCompletionResults.firstWhere((param : any) =>  {
                return op(Op.EQUALS,param.id,completionId) && param.isLast;
            });
            expect(param.replacementOffset,this.completionOffset);
            expect(param.replacementLength,0);
            param.results.firstWhere((suggestion : any) =>  {
                return op(Op.EQUALS,suggestion.completion,'length');
            });
        } )());
    }

    test_getSuggestions_onlyOverlay_noWait() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.setTestSource('test.dart','String test = \'\';\nmain() {\n  test.^\n}\n');
            this.standardAnalysisSetup({
                subscribeStatus : false});
            this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [this.path,new bare.createInstance(any,null,this.content)]]));
            this.sendCompletionGetSuggestions(this.path,this.completionOffset);
            let param : any = await this.onCompletionResults.firstWhere((param : any) =>  {
                return param.isLast;
            });
            expect(param.replacementOffset,this.completionOffset);
            expect(param.replacementLength,0);
            param.results.firstWhere((suggestion : any) =>  {
                return op(Op.EQUALS,suggestion.completion,'length');
            });
        } )());
    }

    test_getSuggestions_sourceMissing_noWait() {
        this.path = this.sourcePath('does_not_exist.dart');
        this.standardAnalysisSetup({
            subscribeStatus : false});
        let errorToken = 'exception from server';
        return this.sendCompletionGetSuggestions(this.path,0).catchError((e : any) =>  {
            return errorToken;
        }).then((result : any) =>  {
            expect(result,same(errorToken));
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetSuggestionsTest() {
    }
}

export class properties {
}
