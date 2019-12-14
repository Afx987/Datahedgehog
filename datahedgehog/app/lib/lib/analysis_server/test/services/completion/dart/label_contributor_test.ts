/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/label_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LabelContributorTest);
    });
};
export namespace LabelContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'LabelContributorTest';
    export type Interface = Omit<LabelContributorTest, Constructors>;
}
@DartClass
export class LabelContributorTest extends lib3.DartCompletionContributorTest {
    assertSuggestLabel(name : string,_namedArguments? : {relevance? : number,kind? : any}) : any {
        let {relevance,kind} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.IDENTIFIER}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance});
        expect(cs.returnType,isNull);
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.flags,0);
        expect(element.kind,equals(ElementKind.LABEL));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        expect(element.returnType,isNull);
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_break_ignores_outer_functions_using_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {\n    var f = () {\n      bar: while (true) { break ^ }\n    };\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('bar');
            this.assertNotSuggested('foo');
        } )());
    }

    test_break_ignores_outer_functions_using_local_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {\n    void f() {\n      bar: while (true) { break ^ }\n    };\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('bar');
            this.assertNotSuggested('foo');
        } )());
    }

    test_break_ignores_toplevel_variables() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('int x;\nvoid main() {\n  while (true) {\n    break ^\n  }\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
        } )());
    }

    test_break_ignores_unrelated_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {}\n  while (true) { break ^ }\n  bar: while (true) {}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
        } )());
    }

    test_break_to_enclosing_loop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {\n    bar: while (true) {\n      break ^\n    }\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('foo');
            this.assertSuggestLabel('bar');
        } )());
    }

    test_continue_from_loop_to_switch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  switch (x) {\n    foo: case 1:\n      break;\n    bar: case 2:\n      while (true) {\n        continue ^;\n      }\n      break;\n    baz: case 3:\n      break;\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('foo');
            this.assertSuggestLabel('bar');
            this.assertSuggestLabel('baz');
        } )());
    }

    test_continue_from_switch_to_loop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {\n    switch (x) {\n      case 1:\n        continue ^;\n    }\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('foo');
        } )());
    }

    test_continue_ignores_outer_functions_using_closure_with_loop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {\n    var f = () {\n      bar: while (true) { continue ^ }\n    };\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('bar');
            this.assertNotSuggested('foo');
        } )());
    }

    test_continue_ignores_outer_functions_using_closure_with_switch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  switch (x) {\n    foo: case 1:\n      var f = () {\n        bar: while (true) { continue ^ }\n      };\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('bar');
            this.assertNotSuggested('foo');
        } )());
    }

    test_continue_ignores_outer_functions_using_local_function_with_loop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {\n    void f() {\n      bar: while (true) { continue ^ }\n    };\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('bar');
            this.assertNotSuggested('foo');
        } )());
    }

    test_continue_ignores_outer_functions_using_local_function_with_switch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  switch (x) {\n    foo: case 1:\n      void f() {\n        bar: while (true) { continue ^ }\n      };\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('bar');
            this.assertNotSuggested('foo');
        } )());
    }

    test_continue_ignores_unrelated_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {}\n  while (true) { continue ^ }\n  bar: while (true) {}\n}\n');
            await this.computeSuggestions();
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
        } )());
    }

    test_continue_to_earlier_case() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  switch (x) {\n    foo: case 1:\n      break;\n    case 2:\n      continue ^;\n    case 3:\n      break;\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('foo');
        } )());
    }

    test_continue_to_enclosing_loop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  foo: while (true) {\n    bar: while (true) {\n      continue ^\n    }\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('foo');
            this.assertSuggestLabel('bar');
        } )());
    }

    test_continue_to_enclosing_switch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  switch (x) {\n    foo: case 1:\n      break;\n    bar: case 2:\n      switch (y) {\n        case 1:\n          continue ^;\n      }\n      break;\n    baz: case 3:\n      break;\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('foo');
            this.assertSuggestLabel('bar');
            this.assertSuggestLabel('baz');
        } )());
    }

    test_continue_to_later_case() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  switch (x) {\n    case 1:\n      break;\n    case 2:\n      continue ^;\n    foo: case 3:\n      break;\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('foo');
        } )());
    }

    test_continue_to_same_case() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {\n  switch (x) {\n    case 1:\n      break;\n    foo: case 2:\n      continue ^;\n    case 3:\n      break;\n');
            await this.computeSuggestions();
            this.assertSuggestLabel('foo');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabelContributorTest() {
    }
}

export class properties {
}
