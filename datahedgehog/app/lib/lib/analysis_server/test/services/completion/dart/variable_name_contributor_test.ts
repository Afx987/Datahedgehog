/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/variable_name_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(VariableNameContributorTest);
    });
};
export namespace VariableNameContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'VariableNameContributorTest';
    export type Interface = Omit<VariableNameContributorTest, Constructors>;
}
@DartClass
export class VariableNameContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_ExpressionStatement_dont_suggest_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    f() { a ^ }\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
        } )());
    }

    test_ExpressionStatement_dont_suggest_type_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    f() { a ^; }\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
        } )());
    }

    test_ExpressionStatement_long() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    f() { AbstractCrazyNonsenseClassName ^ }\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_ExpressionStatement_long_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    f() { AbstractCrazyNonsenseClassName ^; }\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_ExpressionStatement_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    f() { prefix.AbstractCrazyNonsenseClassName ^ }\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_ExpressionStatement_prefixed_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    f() { prefix.AbstractCrazyNonsenseClassName ^; }\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_ExpressionStatement_short() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    f() { A ^ }\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('a');
        } )());
    }

    test_ExpressionStatement_short_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    f() { A ^; }\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('a');
        } )());
    }

    test_TopLevelVariableDeclaration_dont_suggest_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    a ^\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
        } )());
    }

    test_TopLevelVariableDeclaration_dont_suggest_type_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    a ^;\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
        } )());
    }

    test_TopLevelVariableDeclaration_long() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    AbstractCrazyNonsenseClassName ^\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_TopLevelVariableDeclaration_long_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    AbstractCrazyNonsenseClassName ^;\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_TopLevelVariableDeclaration_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    AbstractCrazyNonsenseClassName abs^\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_TopLevelVariableDeclaration_partial_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    AbstractCrazyNonsenseClassName abs^\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_TopLevelVariableDeclaration_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    prefix.AbstractCrazyNonsenseClassName ^\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_TopLevelVariableDeclaration_prefixed_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    prefix.AbstractCrazyNonsenseClassName ^;\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('abstractCrazyNonsenseClassName');
            this.assertSuggestName('crazyNonsenseClassName');
            this.assertSuggestName('nonsenseClassName');
            this.assertSuggestName('className');
            this.assertSuggestName('name');
        } )());
    }

    test_TopLevelVariableDeclaration_short() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    A ^\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('a');
        } )());
    }

    test_TopLevelVariableDeclaration_short_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    A ^;\n    ');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestName('a');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableNameContributorTest() {
    }
}

export class properties {
}
