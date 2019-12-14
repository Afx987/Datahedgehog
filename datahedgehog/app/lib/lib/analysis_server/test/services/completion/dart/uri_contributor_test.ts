/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/uri_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts.packages/path/lib/src/context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(UriContributorTest);
        defineReflectiveTests(UriContributorWindowsTest);
    });
};
export namespace UriContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'UriContributorTest';
    export type Interface = Omit<UriContributorTest, Constructors>;
}
@DartClass
export class UriContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_after_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "p"^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions();
        } )());
    }

    test_after_import_raw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import r"p"^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions();
        } )());
    }

    test_before_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import ^"p"');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions();
        } )());
    }

    test_before_import_raw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import ^r"p"');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions();
        } )());
    }

    test_before_import_raw2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import r^"p"');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions();
        } )());
    }

    test_export_package2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('foo','foo.dart','library foo;');
            this.addPackageSource('foo','baz/too.dart','library too;');
            this.addPackageSource('bar','bar.dart','library bar;');
            this.addTestSource('export "package:foo/baz/^" import');
            await this.computeSuggestions();
            this.assertSuggest('package:foo/baz/too.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "^"');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "^ import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,7);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_dart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "d^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('dart:core',{
                csKind : CompletionSuggestionKind.IMPORT,relevance : DART_RELEVANCE_LOW});
            this.assertNotSuggested('dart:_internal');
            this.assertSuggest('dart:async',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('dart:math',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_dart2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:async"; import "d^"');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('dart:core',{
                csKind : CompletionSuggestionKind.IMPORT,relevance : DART_RELEVANCE_LOW});
            this.assertNotSuggested('dart:_internal');
            this.assertSuggest('dart:async',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('dart:math',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_file() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addTestSource('import "^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('completion.dart');
            this.assertSuggest('other.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo');
            this.assertSuggest('foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_import_file2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addTestSource('import "..^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,2);
            this.assertNotSuggested('completion.dart');
            this.assertSuggest('other.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo');
            this.assertSuggest('foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_import_file_child() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addTestSource('import "foo/^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 4);
            expect(this.replacementLength,4);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertSuggest('foo/bar.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_import_file_outside_lib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/lib/completion.dart';
            this.addSource('/proj/lib/other.dart','library other;');
            this.addSource('/proj/lib/foo/bar.dart','library bar;');
            this.addSource('/proj/blat.dart','library blat;');
            this.addSource('/proj/bin/boo.dart','library boo;');
            this.addTestSource('import "../^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../bin');
            this.assertNotSuggested('../bin/');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_import_file_parent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addSource('/proj2/boo.dart','library boo;');
            this.addTestSource('import "../^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertNotSuggested('foo/bar.dart');
            this.assertSuggest('../blat.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('../proj2/',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_file_parent2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addTestSource('import "../b^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 4);
            expect(this.replacementLength,4);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertNotSuggested('foo/bar.dart');
            this.assertSuggest('../blat.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_package() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('foo','foo.dart','library foo;');
            this.addPackageSource('foo','baz/too.dart','library too;');
            this.addPackageSource('bar','bar.dart','library bar;');
            this.addTestSource('import "p^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:foo/foo.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:foo/baz/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('package:foo/baz/too.dart');
            this.assertSuggest('package:bar/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:bar/bar.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_package2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('foo','foo.dart','library foo;');
            this.addPackageSource('foo','baz/too.dart','library too;');
            this.addPackageSource('bar','bar.dart','library bar;');
            this.addTestSource('import "package:foo/baz/^" import');
            await this.computeSuggestions();
            this.assertSuggest('package:foo/baz/too.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_package2_raw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('foo','foo.dart','library foo;');
            this.addPackageSource('foo','baz/too.dart','library too;');
            this.addPackageSource('bar','bar.dart','library bar;');
            this.addTestSource('import r"package:foo/baz/^" import');
            await this.computeSuggestions();
            this.assertSuggest('package:foo/baz/too.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_package2_with_trailing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('foo','foo.dart','library foo;');
            this.addPackageSource('foo','baz/too.dart','library too;');
            this.addPackageSource('bar','bar.dart','library bar;');
            this.addTestSource('import "package:foo/baz/^.dart" import');
            await this.computeSuggestions();
            this.assertSuggest('package:foo/baz/too.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            expect(this.replacementOffset,this.completionOffset - 16);
            expect(this.replacementLength,5 + 16);
        } )());
    }

    test_import_package_missing_lib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkgSrc = this.addPackageSource('bar','bar.dart','library bar;');
            this.provider.deleteFolder(lib4.dirname(pkgSrc.fullName));
            this.addTestSource('import "p^" class');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:bar/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('package:bar/bar.dart');
        } )());
    }

    test_import_package_raw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('foo','foo.dart','library foo;');
            this.addPackageSource('foo','baz/too.dart','library too;');
            this.addPackageSource('bar','bar.dart','library bar;');
            this.addTestSource('import r"p^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:foo/foo.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:foo/baz/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('package:foo/baz/too.dart');
            this.assertSuggest('package:bar/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:bar/bar.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_raw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import r"^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_without_any_quotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import ^ import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions();
        } )());
    }

    test_import_without_any_quotes_eof() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import ^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions();
        } )());
    }

    test_import_without_closing_quote_eof() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_without_closing_quote_eof2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "^d');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,1);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_without_closing_quote_eof3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "d^');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_without_closing_quote_eof4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "d^"');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggest('dart:',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertSuggest('package:',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_outside_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import ^"d" import');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_outside_import2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "d"^ import');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_part_file() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addTestSource('library x; part "^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('completion.dart');
            this.assertSuggest('other.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo');
            this.assertSuggest('foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_part_file2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addTestSource('library x; part "..^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,2);
            this.assertNotSuggested('completion.dart');
            this.assertSuggest('other.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo');
            this.assertSuggest('foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_part_file_child() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addTestSource('library x; part "foo/^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 4);
            expect(this.replacementLength,4);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertSuggest('foo/bar.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_part_file_parent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/proj/completion.dart';
            this.addSource('/proj/other.dart','library other;');
            this.addSource('/proj/foo/bar.dart','library bar;');
            this.addSource('/blat.dart','library blat;');
            this.addTestSource('library x; part "../^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertNotSuggested('foo/bar.dart');
            this.assertSuggest('../blat.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriContributorTest() {
    }
}

export namespace UriContributorWindowsTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'UriContributorWindowsTest';
    export type Interface = Omit<UriContributorWindowsTest, Constructors>;
}
@DartClass
export class UriContributorWindowsTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setupResourceProvider() : void {
        this.provider = new _TestWinResourceProvider();
    }
    test_import_file() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('import "^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('completion.dart');
            this.assertSuggest('other.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo');
            this.assertSuggest('foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_import_file2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('import "..^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,2);
            this.assertNotSuggested('completion.dart');
            this.assertSuggest('other.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo');
            this.assertSuggest('foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_import_file_child() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('import "foo/^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 4);
            expect(this.replacementLength,4);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertSuggest('foo/bar.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_import_file_parent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('import "../^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertNotSuggested('foo/bar.dart');
            this.assertSuggest('../blat.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_import_file_parent2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('import "../b^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 4);
            expect(this.replacementLength,4);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertNotSuggested('foo/bar.dart');
            this.assertSuggest('../blat.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    test_part_file() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('library x; part "^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('completion.dart');
            this.assertSuggest('other.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo');
            this.assertSuggest('foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_part_file2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('library x; part "..^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,2);
            this.assertNotSuggested('completion.dart');
            this.assertSuggest('other.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo');
            this.assertSuggest('foo/',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('foo/bar.dart');
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_part_file_child() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('library x; part "foo/^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 4);
            expect(this.replacementLength,4);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertSuggest('foo/bar.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
            this.assertNotSuggested('../blat.dart');
        } )());
    }

    test_part_file_parent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '\proj\completion.dart';
            this.addSource('\proj\other.dart','library other;');
            this.addSource('\proj\foo\bar.dart','library bar;');
            this.addSource('\blat.dart','library blat;');
            this.addTestSource('library x; part "../^" import');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('completion.dart');
            this.assertNotSuggested('other.dart');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('foo/');
            this.assertNotSuggested('foo/bar.dart');
            this.assertSuggest('../blat.dart',{
                csKind : CompletionSuggestionKind.IMPORT});
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriContributorWindowsTest() {
    }
}

export namespace _TestWinResourceProvider {
    export type Constructors = '_TestWinResourceProvider';
    export type Interface = Omit<_TestWinResourceProvider, Constructors>;
}
@DartClass
export class _TestWinResourceProvider extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pathContext() : lib5.Context {
        return lib4.properties.windows;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TestWinResourceProvider() {
    }
}

export class properties {
}
