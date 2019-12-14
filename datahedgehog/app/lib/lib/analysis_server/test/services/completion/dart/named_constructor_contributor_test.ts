/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/named_constructor_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NamedConstructorContributorTest);
    });
};
export namespace NamedConstructorContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'NamedConstructorContributorTest';
    export type Interface = Omit<NamedConstructorContributorTest, Constructors>;
}
@DartClass
export class NamedConstructorContributorTest extends lib3.DartCompletionContributorTest {
    assertSuggestNamedConstructor(name : string,returnType : string,relevance? : number,kind? : any) : any {
        relevance = relevance || DART_RELEVANCE_DEFAULT;
        kind = kind || CompletionSuggestionKind.INVOCATION;
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance});
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.CONSTRUCTOR));
        expect(element.name,equals(name));
        let param : string = element.parameters;
        expect(param,isNotNull);
        expect(param[0],equals('('));
        expect(param[new core.DartString(param).length - 1],equals(')'));
        expect(element.returnType,equals(returnType));
        this.assertHasParameterInfo(cs);
        return cs;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_ConstructorName_importedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        var m;\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestNamedConstructor('c','X');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_importedClass_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        var m;\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestNamedConstructor('c','X');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_importedFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        int T1;\n        F1() { }\n        class X {factory X.c(); factory X._d(); z() {}}');
            this.addTestSource('        import "/testB.dart";\n        var m;\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestNamedConstructor('c','X');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_importedFactory2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() {new String.fr^omCharCodes([]);}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,13);
            this.assertSuggestNamedConstructor('fromCharCodes','String');
            this.assertNotSuggested('isEmpty');
            this.assertNotSuggested('isNotEmpty');
            this.assertNotSuggested('length');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('String');
        } )());
    }

    test_ConstructorName_localClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        int T1;\n        F1() { }\n        class X {X.c(); X._d(); z() {}}\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestNamedConstructor('c','X');
            this.assertSuggestNamedConstructor('_d','X');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_localFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        int T1;\n        F1() { }\n        class X {factory X.c(); factory X._d(); z() {}}\n        main() {new X.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestNamedConstructor('c','X');
            this.assertSuggestNamedConstructor('_d','X');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedConstructorContributorTest() {
    }
}

export class properties {
}
