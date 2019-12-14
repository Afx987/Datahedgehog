/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/arglist_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";
import * as lib4 from "./../../correction/flutter_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ArgListContributorTest);
    });
};
export namespace ArgListContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'ArgListContributorTest';
    export type Interface = Omit<ArgListContributorTest, Constructors>;
}
@DartClass
export class ArgListContributorTest extends lib3.DartCompletionContributorTest {
    assertNoOtherSuggestions(expected : core.DartIterable<any>) : void {
        for(let suggestion of this.suggestions) {
            if (!expected.contains(suggestion)) {
                this.failedCompletion('did not expect completion: ' + `${suggestion.completion}\n  ${suggestion}`);
            }
        }
    }
    assertSuggestArgumentAndCompletion(name : string,_namedArguments? : {completion? : string,selectionOffset? : number,selectionLength? : number}) : void {
        let {completion,selectionOffset,selectionLength} = Object.assign({
            "selectionLength" : 0}, _namedArguments );
        let suggestion : any = this.suggestions.firstWhere((s : any) =>  {
            return op(Op.EQUALS,s.parameterName,name);
        });
        expect(suggestion,isNotNull);
        expect(suggestion.completion,completion);
        expect(suggestion.selectionOffset,selectionOffset);
        expect(suggestion.selectionLength,selectionLength);
    }
    assertSuggestArgumentList(paramNames : core.DartList<string>,paramTypes : core.DartList<string>) : void {
        this.assertNoSuggestions({
            kind : CompletionSuggestionKind.ARGUMENT_LIST});
    }
    assertSuggestArgumentList_params(expectedNames : core.DartList<string>,expectedTypes : core.DartList<string>,actualNames : core.DartList<string>,actualTypes : core.DartList<string>) : void {
        if (actualNames != null && actualNames.length == expectedNames.length && actualTypes != null && actualTypes.length == expectedTypes.length) {
            let index : number = 0;
            while (index < expectedNames.length){
                if (actualNames[index] != expectedNames[index] || actualTypes[index] != expectedTypes[index]) {
                    break;
                }
                ++index;
            }
            if (index == expectedNames.length) {
                return;
            }
        }
        let msg : core.DartStringBuffer = new core.DartStringBuffer();
        msg.writeln('Argument list not the same');
        msg.writeln(`  Expected names: ${expectedNames}`);
        msg.writeln(`           found: ${actualNames}`);
        msg.writeln(`  Expected types: ${expectedTypes}`);
        msg.writeln(`           found: ${actualTypes}`);
        fail(msg.toString());
    }
    assertSuggestArgumentsAndTypes(_namedArguments? : {namedArgumentsWithTypes? : core.DartMap<string,string>,includeColon? : boolean,includeComma? : boolean}) : void {
        let {namedArgumentsWithTypes,includeColon,includeComma} = Object.assign({
            "includeColon" : true,
            "includeComma" : false}, _namedArguments );
        let expected : core.DartList<any> = new core.DartList<any>();
        namedArgumentsWithTypes.forEach((name : string,type : string) =>  {
            let completion : string = includeColon ? `${name}: ` : name;
            let selectionOffset : number = new core.DartString(completion).length;
            if (includeComma) {
                completion = `${completion},`;
            }
            expected.add(this.assertSuggest(completion,{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,paramName : name,paramType : type,selectionOffset : selectionOffset}));
        });
        this.assertNoOtherSuggestions(expected);
    }
    assertSuggestions(suggestions : core.DartList<string>) : void {
        let expected : core.DartList<any> = new core.DartList<any>();
        for(let suggestion of suggestions) {
            let selectionOffset : number = new core.DartString(suggestion).endsWith(',') ? new core.DartString(suggestion).length - 1 : new core.DartString(suggestion).length;
            expected.add(this.assertSuggest(`${suggestion}`,{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,selectionOffset : selectionOffset}));
        }
        this.assertNoOtherSuggestions(expected);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    fail_test_Annotation_local_constructor_named_param_10() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A({int one, String two: \'defaultValue\'}); }\n@A(two: \'2\' ^) main() { }');
            await this.computeSuggestions();
            this.assertSuggestions(new core.DartList.literal(', one: '));
        } )());
    }

    fail_test_Annotation_local_constructor_named_param_9() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A({int one, String two: \'defaultValue\'}); }\n@A(two: \'2\'^) main() { }');
            await this.computeSuggestions();
            this.assertSuggestions(new core.DartList.literal(', one: '));
        } )());
    }

    test_Annotation_imported_constructor_named_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; class A { const A({int one, String two: \'defaultValue\'}); }');
            this.addTestSource('import "/libA.dart"; @A(^) main() { }');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int'],
                    ['two','String']])});
        } )());
    }

    test_Annotation_local_constructor_named_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A({int one, String two: \'defaultValue\'}); }\n@A(^) main() { }');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int'],
                    ['two','String']])});
        } )());
    }

    test_Annotation_local_constructor_named_param_11() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A({int one, String two: \'defaultValue\'}); }\n@A(two: \'2\', ^) main() { }');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
        } )());
    }

    test_Annotation_local_constructor_named_param_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A({int one, String two: \'defaultValue\'}); }\n@A(^ two: \'2\') main() { }');
            await this.computeSuggestions();
            this.assertSuggestions(new core.DartList.literal('one: ,'));
        } )());
    }

    test_Annotation_local_constructor_named_param_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A({int one, String two: \'defaultValue\'}); }\n@A(^two: \'2\') main() { }');
            await this.computeSuggestions();
            this.assertSuggestions(new core.DartList.literal('one: ,'));
        } )());
    }

    test_Annotation_local_constructor_named_param_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A({int one, String two: \'defaultValue\'}); }\n@A(^, two: \'2\') main() { }');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
        } )());
    }

    test_Annotation_local_constructor_named_param_5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A({int one, String two: \'defaultValue\'}); }\n@A(^ , two: \'2\') main() { }');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
        } )());
    }

    test_Annotation_local_constructor_named_param_6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A(int zero, {int one, String two: \'defaultValue\'}); }\n@A(0, ^, two: \'2\') main() { }');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
        } )());
    }

    test_Annotation_local_constructor_named_param_7() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A(int zero, {int one, String two: \'defaultValue\'}); }\n@A(0, ^ two: \'2\') main() { }');
            await this.computeSuggestions();
            this.assertSuggestions(new core.DartList.literal('one: ,'));
        } )());
    }

    test_Annotation_local_constructor_named_param_8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A(int zero, {int one, String two: \'defaultValue\'}); }\n@A(0, ^two: \'2\') main() { }');
            await this.computeSuggestions();
            this.assertSuggestions(new core.DartList.literal('one: ,'));
        } )());
    }

    test_Annotation_local_constructor_named_param_negative() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { const A(int one, int two, int three, {int four, String five:\n  \'defaultValue\'}); }\n@A(1, ^, 3) main() { }');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_Flutter_InstanceCreationExpression_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            this.addTestSource('import \'package:flutter/src/widgets/framework.dart\';\n\nbuild() => new Row(\n    ^\n  );\n');
            await this.computeSuggestions();
            this.assertSuggest('children: <Widget>[],',{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,defaultArgListString : null,selectionOffset : 19,defaultArgumentListTextRanges : null});
        } )());
    }

    test_ArgumentList_Flutter_InstanceCreationExpression_01() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            this.addTestSource('import \'package:flutter/src/widgets/framework.dart\';\n\n  build() => new Scaffold(\n        appBar: new AppBar(\n          ^\n        ),\n  );\n');
            await this.computeSuggestions();
            this.assertSuggest('color: ,',{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,defaultArgListString : null,selectionOffset : 7});
        } )());
    }

    test_ArgumentList_Flutter_InstanceCreationExpression_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            this.addTestSource('import \'package:flutter/src/widgets/framework.dart\';\n\nbuild() => new Row(\n    key: null,\n    ^\n  );\n');
            await this.computeSuggestions();
            this.assertSuggest('children: <Widget>[],',{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,defaultArgListString : null,selectionOffset : 19,defaultArgumentListTextRanges : null});
        } )());
    }

    test_ArgumentList_Flutter_InstanceCreationExpression_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            this.addTestSource('import \'package:flutter/src/widgets/framework.dart\';\n\nbuild() => new Row(\n    ^\n    key: null,\n  );\n');
            await this.computeSuggestions();
            this.assertSuggest('children: <Widget>[],',{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,defaultArgListString : null,selectionOffset : 19,defaultArgumentListTextRanges : null});
        } )());
    }

    test_ArgumentList_Flutter_InstanceCreationExpression_children_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code + '\nclass DynamicRow extends Widget { DynamicRow({List children: null}){}}']]));
            this.addTestSource('import \'package:flutter/src/widgets/framework.dart\';\n\nbuild() => new Container(\n    child: new DynamicRow(^);\n  );\n');
            await this.computeSuggestions();
            this.assertSuggest('children: [],',{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,defaultArgListString : null,selectionOffset : 11,defaultArgumentListTextRanges : null});
        } )());
    }

    test_ArgumentList_Flutter_InstanceCreationExpression_children_Map() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code + '\nclass MapRow extends Widget { MapRow({Map<Object,Object> children: null}){}}']]));
            this.addTestSource('import \'package:flutter/src/widgets/framework.dart\';\n\nbuild() => new Container(\n    child: new MapRow(^);\n  );\n');
            await this.computeSuggestions();
            this.assertSuggest('children: ,',{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,selectionOffset : 10,defaultArgListString : null});
        } )());
    }

    test_ArgumentList_Flutter_MethodExpression_children() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code + '\nfoo({String children})']]));
            this.addTestSource('import \'package:flutter/src/widgets/framework.dart\';\n\nmain() {\nfoo(^);\n');
            await this.computeSuggestions();
            this.assertSuggest('children: ',{
                csKind : CompletionSuggestionKind.NAMED_ARGUMENT,relevance : DART_RELEVANCE_NAMED_PARAMETER,defaultArgListString : null});
        } )());
    }

    test_ArgumentList_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int get foo => 7; main() {foo(^)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_imported_constructor_named_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; class A{A({int one}); }');
            this.addTestSource('import "/libA.dart"; main() { new A(^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
        } )());
    }

    test_ArgumentList_imported_constructor_named_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; class A{A.foo({int one}); }');
            this.addTestSource('import "/libA.dart"; main() { new A.foo(^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
        } )());
    }

    test_ArgumentList_imported_constructor_named_typed_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; class A { A({int i, String s, d}) {} }}');
            this.addTestSource('import "/libA.dart"; main() { var a = new A(^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['i','int'],
                    ['s','String'],
                    ['d','dynamic']])});
        } )());
    }

    test_ArgumentList_imported_factory_named_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; class A{factory A({int one}) => null;}');
            this.addTestSource('import "/libA.dart"; main() { new A(^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
        } )());
    }

    test_ArgumentList_imported_factory_named_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; abstract class A{factory A.foo({int one});}');
            this.addTestSource('import "/libA.dart"; main() { new A.foo(^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
        } )());
    }

    test_ArgumentList_imported_factory_named_typed_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; class A {factory A({int i, String s, d}) {} }}');
            this.addTestSource('import "/libA.dart"; main() { var a = new A(^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['i','int'],
                    ['s','String'],
                    ['d','dynamic']])});
        } )());
    }

    test_ArgumentList_imported_function_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      expect() { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B { }\n      String bar() => true;\n      void main() {expect(a^)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_imported_function_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      expect(String arg) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B { }\n      String bar() => true;\n      void main() {expect(^)}');
            await this.computeSuggestions();
            this.assertSuggestArgumentList(new core.DartList.literal('arg'),new core.DartList.literal('String'));
        } )());
    }

    test_ArgumentList_imported_function_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      expect(String arg1, int arg2) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B { }\n      String bar() => true;\n      void main() {expect(^)}');
            await this.computeSuggestions();
            this.assertSuggestArgumentList(new core.DartList.literal('arg1','arg2'),new core.DartList.literal('String','int'));
        } )());
    }

    test_ArgumentList_imported_function_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      expect(String arg1, int arg2, {bool arg3}) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B { }\n      String bar() => true;\n      void main() {expect(^)}');
            await this.computeSuggestions();
            this.assertSuggestArgumentList(new core.DartList.literal('arg1','arg2'),new core.DartList.literal('String','int'));
        } )());
    }

    test_ArgumentList_imported_function_3a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      expect(String arg1, int arg2, {bool arg3}) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B { }\n      String bar() => true;\n      void main() {expect(\'hello\', ^)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_imported_function_3b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      expect(String arg1, int arg2, {bool arg3}) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B { }\n      String bar() => true;\n      void main() {expect(\'hello\', ^x)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_imported_function_3c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      expect(String arg1, int arg2, {bool arg3}) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B { }\n      String bar() => true;\n      void main() {expect(\'hello\', x^)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_imported_function_3d() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      expect(String arg1, int arg2, {bool arg3}) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B { }\n      String bar() => true;\n      void main() {expect(\'hello\', x ^)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_imported_function_named_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { int.parse("16", ^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['radix','int'],
                    ['onError','(String) → int']])});
        } )());
    }

    test_ArgumentList_imported_function_named_param1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { int.parse("16", r^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['radix','int'],
                    ['onError','(String) → int']])});
        } )());
    }

    test_ArgumentList_imported_function_named_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { int.parse("16", radix: 7, ^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['onError','(String) → int']])});
        } )());
    }

    test_ArgumentList_imported_function_named_param2a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { int.parse("16", radix: ^);}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_imported_function_named_param_label1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { int.parse("16", r^: 16);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['radix','int'],
                    ['onError','(String) → int']]),includeColon : false});
        } )());
    }

    test_ArgumentList_imported_function_named_param_label2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { int.parse("16", ^r: 16);}');
            await this.computeSuggestions();
            this.assertSuggestions(new core.DartList.literal('radix: ,','onError: ,'));
        } )());
    }

    test_ArgumentList_imported_function_named_param_label3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { int.parse("16", ^: 16);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['radix','int'],
                    ['onError','(String) → int']])});
        } )());
    }

    test_ArgumentList_local_constructor_named_fieldFormal_documentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'class A {\n  /// aaa\n  ///\n  /// bbb\n  /// ccc\n  int fff;\n  A({this.fff});\n}\nmain() {\n  new A(^);\n}\n';
            this.addTestSource(content);
            await this.computeSuggestions();
            expect(this.suggestions,hasLength(1));
            let suggestion : any = this.suggestions[0];
            expect(suggestion.docSummary,'aaa');
            expect(suggestion.docComplete,'aaa\n\nbbb\nccc');
            let element : any = suggestion.element;
            expect(element,isNotNull);
            expect(element.kind,ElementKind.PARAMETER);
            expect(element.name,'fff');
            expect(element.location.offset,new core.DartString(content).indexOf('fff})'));
        } )());
    }

    test_ArgumentList_local_constructor_named_fieldFormal_noDocumentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'class A {\n  int fff;\n  A({this.fff});\n}\nmain() {\n  new A(^);\n}\n';
            this.addTestSource(content);
            await this.computeSuggestions();
            expect(this.suggestions,hasLength(1));
            let suggestion : any = this.suggestions[0];
            expect(suggestion.docSummary,isNull);
            expect(suggestion.docComplete,isNull);
            let element : any = suggestion.element;
            expect(element,isNotNull);
            expect(element.kind,ElementKind.PARAMETER);
            expect(element.name,'fff');
            expect(element.location.offset,new core.DartString(content).indexOf('fff})'));
        } )());
    }

    test_ArgumentList_local_constructor_named_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int'],
                    ['two','String']])});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(o^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int'],
                    ['two','String']])});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(^o,);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int'],
                    ['two','String']])});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(two: \'foo\', ^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(two: \'foo\', o^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(two: \'foo\', o^,);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']])});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A.foo({int one, String two: \'defaultValue\'}) { } }\nmain() { new A.foo(^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int'],
                    ['two','String']])});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_prefixed_prepend() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(o^ two: \'foo\');}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']]),includeComma : true});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ,',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_prepend() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(^ two: \'foo\');}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']]),includeComma : true});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ,',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_prepend_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(o^, two: \'foo\');}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']]),includeComma : false});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_constructor_named_param_prepend_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A({int one, String two: \'defaultValue\'}) { } }\nmain() { new A(^, two: \'foo\');}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['one','int']]),includeComma : false});
            this.assertSuggestArgumentAndCompletion('one',{
                completion : 'one: ',selectionOffset : 5});
        } )());
    }

    test_ArgumentList_local_function_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import \'/libA.dart\'\n      expect(arg) { }\n      class B { }\n      String bar() => true;\n      void main() {expect(^)}');
            await this.computeSuggestions();
            this.assertSuggestArgumentList(new core.DartList.literal('arg'),new core.DartList.literal('dynamic'));
        } )());
    }

    test_ArgumentList_local_function_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import \'/libA.dart\'\n      expect(arg1, int arg2) { }\n      class B { }\n      String bar() => true;\n      void main() {expect(^)}');
            await this.computeSuggestions();
            this.assertSuggestArgumentList(new core.DartList.literal('arg1','arg2'),new core.DartList.literal('dynamic','int'));
        } )());
    }

    test_ArgumentList_local_function_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import \'/libA.dart\'\n      expect(arg1, int arg2) { }\n      class B { }\n      String bar() => true;\n      void main() {expect(^)}');
            await this.computeSuggestions();
            this.assertSuggestArgumentList(new core.DartList.literal('arg1','arg2'),new core.DartList.literal('dynamic','int'));
        } )());
    }

    test_ArgumentList_local_function_3a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import \'/libA.dart\'\n      expect(arg1, int arg2, {bool arg3}) { }\n      class B { }\n      String bar() => true;\n      void main() {expect(\'hello\', ^)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_local_function_3b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import \'/libA.dart\'\n      expect(arg1, int arg2, {bool arg3}) { }\n      class B { }\n      String bar() => true;\n      void main() {expect(\'hello\', ^x)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_local_function_3c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import \'/libA.dart\'\n      expect(arg1, int arg2, {bool arg3}) { }\n      class B { }\n      String bar() => true;\n      void main() {expect(\'hello\', x^)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_local_function_3d() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      import \'/libA.dart\'\n      expect(arg1, int arg2, {bool arg3}) { }\n      class B { }\n      String bar() => true;\n      void main() {expect(\'hello\', x ^)}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_local_function_named_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f(v,{int radix, int onError(String s)}){}\nmain() { f("16", ^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['radix','int'],
                    ['onError','(String) → int']])});
        } )());
    }

    test_ArgumentList_local_function_named_param1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f(v,{int radix, int onError(String s)}){}\nmain() { f("16", r^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['radix','int'],
                    ['onError','(String) → int']])});
        } )());
    }

    test_ArgumentList_local_function_named_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f(v,{int radix, int onError(String s)}){}\nmain() { f("16", radix: 7, ^);}');
            await this.computeSuggestions();
            this.assertSuggestArgumentsAndTypes({
                namedArgumentsWithTypes : new core.DartMap.literal([
                    ['onError','(String) → int']])});
        } )());
    }

    test_ArgumentList_local_function_named_param2a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f(v,{int radix, int onError(String s)}){}\nmain() { f("16", radix: ^);}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_local_method_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B {\n        expect() { }\n        void foo() {expect(^)}}\n      String bar() => true;');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ArgumentList_local_method_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','      library A;\n      bool hasLength(int expected) { }\n      void baz() { }');
            this.addTestSource('      import \'/libA.dart\'\n      class B {\n        expect(arg, int blat) { }\n        void foo() {expect(^)}}\n      String bar() => true;');
            await this.computeSuggestions();
            this.assertSuggestArgumentList(new core.DartList.literal('arg','blat'),new core.DartList.literal('dynamic','int'));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ArgListContributorTest() {
    }
}

export class properties {
}
