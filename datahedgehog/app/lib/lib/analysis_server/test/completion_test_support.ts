/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/completion_test_support.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./domain_completion_test";
import * as collection from "@dart2ts/dart/core";

export namespace CompletionTestCase {
    export type Constructors = lib3.CompletionDomainHandlerTest.Constructors | 'CompletionTestCase';
    export type Interface = Omit<CompletionTestCase, Constructors>;
}
@DartClass
export class CompletionTestCase extends lib3.CompletionDomainHandlerTest {
    private static __$CURSOR_MARKER : string;
    static get CURSOR_MARKER() : string { 
        if (this.__$CURSOR_MARKER===undefined) {
            this.__$CURSOR_MARKER = '!';
        }
        return this.__$CURSOR_MARKER;
    }

    get suggestedCompletions() : core.DartList<any> {
        return this.suggestions.map((suggestion : any) =>  {
            return suggestion.completion;
        }).toList();
    }
    assertHasCompletion(completion : string) : void {
        let expectedOffset : number = new core.DartString(completion).indexOf(CompletionTestCase.CURSOR_MARKER);
        if (expectedOffset >= 0) {
            if (new core.DartString(completion).indexOf(CompletionTestCase.CURSOR_MARKER,expectedOffset + 1) >= 0) {
                fail(`Invalid completion, contains multiple cursor positions: '${completion}'`);
            }
            completion = new core.DartString(completion).replaceFirst(CompletionTestCase.CURSOR_MARKER,'');
        }else {
            expectedOffset = new core.DartString(completion).length;
        }
        let matchingSuggestion : any;
        this.suggestions.forEach((suggestion : any) =>  {
            if (op(Op.EQUALS,suggestion.completion,completion)) {
                if (op(Op.EQUALS,matchingSuggestion,null)) {
                    matchingSuggestion = suggestion;
                }else {
                    fail(`Expected exactly one '${completion}' but found multiple:\n  ${this.suggestedCompletions}`);
                }
            }
        });
        if (op(Op.EQUALS,matchingSuggestion,null)) {
            fail(`Expected '${completion}' but found none:\n  ${this.suggestedCompletions}`);
        }
        expect(matchingSuggestion.selectionOffset,equals(expectedOffset));
        expect(matchingSuggestion.selectionLength,equals(0));
    }
    assertHasNoCompletion(completion : string) : void {
        if (this.suggestions.any((suggestion : any) =>  {
            return op(Op.EQUALS,suggestion.completion,completion);
        })) {
            fail(`Did not expect completion '${completion}' but found:\n  ${this.suggestedCompletions}`);
        }
    }
    filterResults(content : string) : void {
        let charsAlreadyTyped : string = new core.DartString(new core.DartString(content).substring(this.replacementOffset,this.completionOffset)).toLowerCase();
        this.suggestions = this.suggestions.where((suggestion : any) =>  {
            return suggestion.completion.toLowerCase().startsWith(charsAlreadyTyped);
        }).toList();
    }
    runTest(spec : LocationSpec,extraFiles? : core.DartMap<string,string>) {
        super.setUp();
        return new async.Future<any>(() =>  {
            let content : string = spec.source;
            this.addFile(this.testFile,content);
            this.testCode = content;
            this.completionOffset = spec.testLocation;
            if (extraFiles != null) {
                extraFiles.forEach((fileName : string,content : string) =>  {
                    this.addFile(fileName,content);
                });
            }
        }).then((_ : any) =>  {
            return this.getSuggestions();
        }).then((_ : any) =>  {
            this.filterResults(spec.source);
            for(let result of spec.positiveResults) {
                this.assertHasCompletion(result);
            }
            for(let result of spec.negativeResults) {
                this.assertHasNoCompletion(result);
            }
        }).whenComplete(() =>  {
            super.tearDown();
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompletionTestCase() {
    }
}

export namespace LocationSpec {
    export type Constructors = 'LocationSpec';
    export type Interface = Omit<LocationSpec, Constructors>;
}
@DartClass
export class LocationSpec {
    id : string;

    testLocation : number;

    positiveResults : core.DartList<string>;

    negativeResults : core.DartList<string>;

    source : string;

    constructor(id : string) {
    }
    @defaultConstructor
    LocationSpec(id : string) {
        this.testLocation = -1;
        this.positiveResults = new core.DartList.literal<string>();
        this.negativeResults = new core.DartList.literal<string>();
        this.id = id;
    }
    static from(originalSource : string,validationStrings : core.DartList<string>) : core.DartList<LocationSpec> {
        let tests : core.DartMap<string,LocationSpec> = new core.DartHashMap<string,LocationSpec>();
        let modifiedSource : string = originalSource;
        let modifiedPosition : number = 0;
        while (true){
            let index : number = new core.DartString(modifiedSource).indexOf('!',modifiedPosition);
            if (index < 0) {
                break;
            }
            let n : number = 1;
            let id : string = new core.DartString(modifiedSource).substring(index + 1,index + 2);
            if (id != '!') {
                n = 2;
                let test : LocationSpec = new LocationSpec(id);
                op(Op.INDEX_ASSIGN,tests,id,test);
                test.testLocation = index;
            }else {
                modifiedPosition = index + 1;
            }
            modifiedSource = new core.DartString(modifiedSource).substring(0,index) + new core.DartString(modifiedSource).substring(index + n);
        }
        if (modifiedSource == originalSource) {
            throw new core.StateError("No tests in source: " + originalSource);
        }
        for(let result of validationStrings) {
            if (new core.DartString(result).length < 3) {
                throw new core.StateError("Invalid location result: " + result);
            }
            let id : string = new core.DartString(result).substring(0,1);
            let sign : string = new core.DartString(result).substring(1,2);
            let value : string = new core.DartString(result).substring(2);
            let test : LocationSpec = op(Op.INDEX,tests,id);
            if (op(Op.EQUALS,test,null)) {
                throw new core.StateError(`Invalid location result id: ${id} for: ${result}`);
            }
            test.source = modifiedSource;
            if (sign == '+') {
                test.positiveResults.add(value);
            }else if (sign == '-') {
                test.negativeResults.add(value);
            }else {
                let err : string = `Invalid location result sign: ${sign} for: ${result}`;
                throw new core.StateError(err);
            }
        }
        let badPoints : core.DartList<string> = new core.DartList.literal<string>();
        let badResults : core.DartList<string> = new core.DartList.literal<string>();
        for(let test of tests.values) {
            if (test.testLocation == -1) {
                badPoints.add(test.id);
            }
            if (test.positiveResults.isEmpty && test.negativeResults.isEmpty) {
                badResults.add(test.id);
            }
        }
        if (!(badPoints.isEmpty && badResults.isEmpty)) {
            let err : core.DartStringBuffer = new core.DartStringBuffer();
            if (!badPoints.isEmpty) {
                err.write("No test location for tests:");
                for(let ch of badPoints) {
                    ((_) : core.DartStringBuffer =>  {
                        {
                            _.write(' ');
                            _.write(ch);
                            return _;
                        }
                    })(err);
                }
                err.write(' ');
            }
            if (!badResults.isEmpty) {
                err.write("No results for tests:");
                for(let ch of badResults) {
                    ((_) : core.DartStringBuffer =>  {
                        {
                            _.write(' ');
                            _.write(ch);
                            return _;
                        }
                    })(err);
                }
            }
            throw new core.StateError(err.toString());
        }
        return tests.values.toList();
    }
}

export class properties {
}
