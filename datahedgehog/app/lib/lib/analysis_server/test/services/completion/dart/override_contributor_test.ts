/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/override_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
};
export namespace OverrideContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'OverrideContributorTest';
    export type Interface = Omit<OverrideContributorTest, Constructors>;
}
@DartClass
export class OverrideContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_fromMultipleSuperclasses() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  A suggested1(int x) => null;\n  B suggested2(String y) => null;\n}\nclass B extends A {\n  B suggested2(String y) => null;\n  C suggested3([String z]) => null;\n}\nclass C extends B {\n  sugg^\n}\n');
            await this.computeSuggestions();
            this._assertOverride('@override\n  A suggested1(int x) {\n    // TODO: implement suggested1\n    return null;\n  }');
            this._assertOverride('@override\n  A suggested1(int x) {\n    // TODO: implement suggested1\n    return null;\n  }');
            this._assertOverride('@override\n  B suggested2(String y) {\n    // TODO: implement suggested2\n    return null;\n  }');
            this._assertOverride('@override\n  C suggested3([String z]) {\n    // TODO: implement suggested3\n    return null;\n  }');
        } )());
    }

    test_fromPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/myLib.dart',`library myLib;\npart '${this.testFile}'\npart '/otherPart.dart'\nclass A {\n  A suggested1(int x) => null;\n  B suggested2(String y) => null;\n}\n`);
            this.addSource('/otherPart.dart','part of myLib;\nclass B extends A {\n  B suggested2(String y) => null;\n  C suggested3([String z]) => null;\n}\n');
            this.addTestSource('part of myLib;\nclass C extends B {\n  sugg^\n}\n');
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            this._assertOverride('@override\n  A suggested1(int x) {\n    // TODO: implement suggested1\n    return null;\n  }');
            this._assertOverride('@override\n  A suggested1(int x) {\n    // TODO: implement suggested1\n    return null;\n  }');
            this._assertOverride('@override\n  B suggested2(String y) {\n    // TODO: implement suggested2\n    return null;\n  }');
            this._assertOverride('@override\n  C suggested3([String z]) {\n    // TODO: implement suggested3\n    return null;\n  }');
        } )());
    }

    _assertOverride(completion : string) : any {
        let cs : any = this.getSuggest({
            completion : completion,csKind : CompletionSuggestionKind.IDENTIFIER,elemKind : null});
        if (op(Op.EQUALS,cs,null)) {
            this.failedCompletion(`expected ${completion}`,this.suggestions);
        }
        expect(cs.kind,equals(CompletionSuggestionKind.IDENTIFIER));
        expect(cs.relevance,equals(DART_RELEVANCE_HIGH));
        expect(cs.importUri,null);
        expect(cs.isDeprecated,isFalse);
        expect(cs.isPotential,isFalse);
        expect(cs.element,isNotNull);
        return cs;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OverrideContributorTest() {
    }
}

export class properties {
}
