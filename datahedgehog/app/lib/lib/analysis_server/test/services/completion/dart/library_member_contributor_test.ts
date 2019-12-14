/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/library_member_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LibraryMemberContributorTest);
    });
};
export namespace LibraryMemberContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'LibraryMemberContributorTest';
    export type Interface = Omit<LibraryMemberContributorTest, Constructors>;
}
@DartClass
export class LibraryMemberContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_libraryPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" as bar; foo() {bar.^}');
            await this.computeSuggestions();
            this.assertSuggestClass('Future');
            this.assertNotSuggested('loadLibrary');
        } )());
    }

    test_libraryPrefix2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" as bar; foo() {bar.^ print("f")}');
            await this.computeSuggestions();
            this.assertSuggestClass('Future');
        } )());
    }

    test_libraryPrefix3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" as bar; foo() {new bar.F^ print("f")}');
            await this.computeSuggestions();
            this.assertSuggestConstructor('Future');
            this.assertSuggestConstructor('Future.delayed');
        } )());
    }

    test_libraryPrefix_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    import "dart:math" as math;\n    main() {math..^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_libraryPrefix_cascade2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    import "dart:math" as math;\n    main() {math.^.}');
            await this.computeSuggestions();
            this.assertSuggestFunction('min','T');
        } )());
    }

    test_libraryPrefix_cascade3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    import "dart:math" as math;\n    main() {math..^a}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_libraryPrefix_cascade4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('    import "dart:math" as math;\n    main() {math.^.a}');
            await this.computeSuggestions();
            this.assertSuggestFunction('min','T');
        } )());
    }

    test_libraryPrefix_deferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async" deferred as bar; foo() {bar.^}');
            await this.computeSuggestions();
            this.assertSuggestClass('Future');
            this.assertSuggestFunction('loadLibrary','Future<dynamic>');
        } )());
    }

    test_libraryPrefix_deferred_inPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libFile = `${new core.DartString(this.testFile).substring(0,new core.DartString(this.testFile).length - 5)}A.dart`;
            this.addSource(libFile,`        library testA;\n        import "dart:async" deferred as bar;\n        part "${this.testFile}";`);
            this.addTestSource('part of testA; foo() {bar.^}');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            this.assertSuggestClass('Future');
            this.assertSuggestFunction('loadLibrary','Future<dynamic>');
            this.assertNotSuggested('foo');
        } )());
    }

    test_libraryPrefix_with_exports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA; class A { }');
            this.addSource('/libB.dart','        library libB;\n        export "/libA.dart";\n        class B { }\n        @deprecated class B1 { }');
            this.addTestSource('import "/libB.dart" as foo; main() {foo.^} class C { }');
            await this.computeSuggestions();
            this.assertSuggestClass('B');
            this.assertSuggestClass('B1',{
                relevance : DART_RELEVANCE_LOW,isDeprecated : true});
            this.assertSuggestClass('A');
            this.assertNotSuggested('C');
        } )());
    }

    test_PrefixedIdentifier_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        var T1;\n        class X { }\n        class Y { }');
            this.addTestSource('        import "/testB.dart" as b;\n        var T2;\n        class A { }\n        main() {b.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('X');
            this.assertSuggestClass('Y');
            this.assertSuggestTopLevelVar('T1',null);
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_library_inPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libFile = `${new core.DartString(this.testFile).substring(0,new core.DartString(this.testFile).length - 5)}A.dart`;
            this.addSource('/testB.dart','        lib B;\n        var T1;\n        class X { }\n        class Y { }');
            this.addSource(libFile,`        library testA;\n        import "/testB.dart" as b;\n        part "${this.testFile}";\n        var T2;\n        class A { }`);
            this.addTestSource('        part of testA;\n        main() {b.^}');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('X');
            this.assertSuggestClass('Y');
            this.assertSuggestTopLevelVar('T1',null);
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_library_typesOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        var T1;\n        class X { }\n        class Y { }');
            this.addTestSource('        import "/testB.dart" as b;\n        var T2;\n        class A { }\n        foo(b.^ f) {}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('X');
            this.assertSuggestClass('Y');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_library_typesOnly2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        var T1;\n        class X { }\n        class Y { }');
            this.addTestSource('        import "/testB.dart" as b;\n        var T2;\n        class A { }\n        foo(b.^) {}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestClass('X');
            this.assertSuggestClass('Y');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','        lib B;\n        class _W {M y; var _z;}\n        class X extends _W {}\n        class M{}');
            this.addTestSource('        import "/testB.dart";\n        foo(X x) {x.^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_PrefixedIdentifier_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        class A {static int bar = 10;}\n        _B() {}');
            this.addTestSource('        import "/testA.dart";\n        class X {foo(){A^.bar}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryMemberContributorTest() {
    }
}

export class properties {
}
