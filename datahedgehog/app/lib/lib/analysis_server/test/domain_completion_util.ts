/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/domain_completion_util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis_abstract";

export namespace AbstractCompletionDomainTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AbstractCompletionDomainTest';
    export type Interface = Omit<AbstractCompletionDomainTest, Constructors>;
}
@DartClass
export class AbstractCompletionDomainTest extends lib3.AbstractAnalysisTest {
    completionId : string;

    completionOffset : number;

    replacementOffset : number;

    replacementLength : number;

    receivedSuggestionsCompleters : core.DartMap<string,async.DartCompleter<core.Null>>;

    suggestions : core.DartList<any>;

    suggestionsDone : boolean;

    allSuggestions : core.DartMap<string,core.DartList<any>>;

    addTestFile(content : string,_namedArguments? : {offset? : number}) : string {
        let {offset} = Object.assign({
        }, _namedArguments );
        this.completionOffset = new core.DartString(content).indexOf('^');
        if (offset != null) {
            expect(this.completionOffset,-1,{
                reason : 'cannot supply offset and ^'});
            this.completionOffset = offset;
            return super.addTestFile(content);
        }
        expect(this.completionOffset,isNot(equals(-1)),{
            reason : 'missing ^'});
        let nextOffset : number = new core.DartString(content).indexOf('^',this.completionOffset + 1);
        expect(nextOffset,equals(-1),{
            reason : 'too many ^'});
        return super.addTestFile(new core.DartString(content).substring(0,this.completionOffset) + new core.DartString(content).substring(this.completionOffset + 1));
    }
    assertHasResult(kind : any,completion : string,_namedArguments? : {relevance? : number,isDeprecated? : boolean,isPotential? : boolean,selectionOffset? : number}) : void {
        let {relevance,isDeprecated,isPotential,selectionOffset} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "isDeprecated" : false,
            "isPotential" : false}, _namedArguments );
        let cs;
        this.suggestions.forEach((s : any) =>  {
            if (op(Op.EQUALS,s.completion,completion)) {
                if (op(Op.EQUALS,cs,null)) {
                    cs = s;
                }else {
                    fail(`expected exactly one ${completion} but found > 1`);
                }
            }
        });
        if (op(Op.EQUALS,cs,null)) {
            let completions = this.suggestions.map((s : any) =>  {
                return s.completion;
            }).toList();
            fail(`expected "${completion}" but found\n ${completions}`);
        }
        expect(cs.kind,equals(kind));
        expect(cs.relevance,equals(relevance));
        expect(cs.selectionOffset,(selectionOffset || new core.DartString(completion).length));
        expect(cs.selectionLength,equals(0));
        expect(cs.isDeprecated,equals(isDeprecated));
        expect(cs.isPotential,equals(isPotential));
    }
    assertNoResult(completion : string) : void {
        if (this.suggestions.any((cs : any) =>  {
            return op(Op.EQUALS,cs.completion,completion);
        })) {
            fail(`did not expect completion: ${completion}`);
        }
    }
    assertValidId(id : string) : void {
        expect(id,isNotNull);
        expect(new core.DartString(id).isNotEmpty,isTrue);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createIndex() : any {
        return createMemoryIndex();
    }
    getSuggestions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,this.testFile,this.completionOffset).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            this.completionId = result.id;
            this.assertValidId(this.completionId);
            await this._getResultsCompleter(this.completionId).future;
            expect(this.suggestionsDone,isTrue);
        } )());
    }

    processNotification(notification : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,notification.event,COMPLETION_RESULTS)) {
                let params = new bare.createInstance(any,null,notification);
                let id : string = params.id;
                this.assertValidId(id);
                this.replacementOffset = params.replacementOffset;
                this.replacementLength = params.replacementLength;
                this.suggestionsDone = params.isLast;
                expect(this.suggestionsDone,isNotNull);
                this.suggestions = params.results;
                expect(this.allSuggestions.containsKey(id),isFalse);
                this.allSuggestions.set(id,params.results);
                this._getResultsCompleter(id).complete(null);
            }else if (op(Op.EQUALS,notification.event,SERVER_ERROR)) {
                fail(`server error: ${notification.toJson()}`);
            }
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        this.handler = new bare.createInstance(any,null,this.server);
    }
    _getResultsCompleter(id : string) : async.DartCompleter<core.Null> {
        return this.receivedSuggestionsCompleters.putIfAbsent(id,() =>  {
            return new async.DartCompleter<core.Null>();
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractCompletionDomainTest() {
        this.receivedSuggestionsCompleters = new core.DartMap.literal([
        ]);
        this.suggestions = new core.DartList.literal();
        this.suggestionsDone = false;
        this.allSuggestions = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
