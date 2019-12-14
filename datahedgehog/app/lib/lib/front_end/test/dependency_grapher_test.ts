/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/dependency_grapher_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DependencyGrapherTest);
    });
};
export namespace DependencyGrapherTest {
    export type Constructors = 'DependencyGrapherTest';
    export type Interface = Omit<DependencyGrapherTest, Constructors>;
}
@DartClass
export class DependencyGrapherTest {
    checkLibrary(cycle : any,uri : string,_namedArguments? : {dependencies? : core.DartList<string>,parts? : core.DartList<string>}) : any {
        let {dependencies,parts} = Object.assign({
            "dependencies" : new core.DartList.literal('dart:core'),
            "parts" : new core.DartList.literal()}, _namedArguments );
        let library = op(Op.INDEX,cycle.libraries,lib3.Uri.parse(uri));
        expect(`${library.uri}`,uri);
        expect(library.dependencies.map((dep : any) =>  {
            return `${dep.uri}`;
        }),unorderedEquals(dependencies));
        expect(library.parts.map((part : any) =>  {
            return `${part}`;
        }),unorderedEquals(parts));
        return library;
    }
    getCycles(contents : core.DartMap<string,string>,_namedArguments? : {startingPoints? : core.DartList<string>,packagesFilePath? : string}) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let {startingPoints,packagesFilePath} = Object.assign({
                "packagesFilePath" : ''}, _namedArguments );
            startingPoints = ( startingPoints ) || ( new core.DartList.literal(contents.keys.first) );
            let fileSystem = new bare.createInstance(any,null,lib3.Uri.parse('file:///'));
            contents.forEach((path : any,text : any) =>  {
                fileSystem.entityForUri(lib4.properties.posix.toUri(path)).writeAsStringSync(text);
            });
            let options = ((_) : any =>  {
                {
                    _.fileSystem = fileSystem;
                    _.chaseDependencies = true;
                    _.packagesFileUri = packagesFilePath == '' ? new lib3.Uri() : lib4.properties.posix.toUri(packagesFilePath);
                    return _;
                }
            })(new bare.createInstance(any,null));
            let graph = await graphForProgram(startingPoints.map(lib4.properties.posix.toUri.bind(lib4.properties.posix)).toList(),options);
            return graph.topologicallySortedCycles;
        } )());
    }

    sortCycles(cycles : core.DartIterable<any>) : core.DartList<any> {
        let result = cycles.toList();
        var sortKey : (node : any) => string = (node : any) : string =>  {
            return node.libraries.keys.join(',');
        };
        result.sort((a : any,b : any) =>  {
            return core.DartComparable.compare(sortKey(a),sortKey(b));
        });
        return result;
    }
    test_explicitCoreDependency() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/foo.dart','import "dart:core";']]));
            expect(cycles,hasLength(1));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'file:///foo.dart');
        } )());
    }

    test_exportDependency() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/foo.dart','export "bar.dart";'],
                ['/bar.dart','']]));
            expect(cycles,hasLength(2));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'file:///bar.dart');
            expect(cycles[1].libraries,hasLength(1));
            this.checkLibrary(cycles[1],'file:///foo.dart',{
                dependencies : new core.DartList.literal('file:///bar.dart','dart:core')});
        } )());
    }

    test_importDependency() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/foo.dart','import "bar.dart";'],
                ['/bar.dart','']]));
            expect(cycles,hasLength(2));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'file:///bar.dart');
            expect(cycles[1].libraries,hasLength(1));
            this.checkLibrary(cycles[1],'file:///foo.dart',{
                dependencies : new core.DartList.literal('file:///bar.dart','dart:core')});
        } )());
    }

    test_multipleStartingPoints() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/a.dart','import "c.dart";'],
                ['/b.dart','import "c.dart";'],
                ['/c.dart','']]),{
                startingPoints : new core.DartList.literal('/a.dart','/b.dart')});
            expect(cycles,hasLength(3));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'file:///c.dart');
            let otherCycles : core.DartList<any> = this.sortCycles(cycles.sublist(1));
            this.checkLibrary(otherCycles[0],'file:///a.dart',{
                dependencies : new core.DartList.literal('file:///c.dart','dart:core')});
            this.checkLibrary(otherCycles[1],'file:///b.dart',{
                dependencies : new core.DartList.literal('file:///c.dart','dart:core')});
        } )());
    }

    test_packages() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/foo.dart','import "package:foo/bar.dart";'],
                ['/.packages','foo:pkg/foo/lib\nbar:pkg/bar/lib\n'],
                ['/pkg/foo/lib/bar.dart','import "package:bar/baz.dart";'],
                ['/pkg/bar/lib/baz.dart','']]),{
                packagesFilePath : '/.packages'});
            expect(cycles,hasLength(3));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'package:bar/baz.dart');
            expect(cycles[1].libraries,hasLength(1));
            this.checkLibrary(cycles[1],'package:foo/bar.dart',{
                dependencies : new core.DartList.literal('package:bar/baz.dart','dart:core')});
            expect(cycles[2].libraries,hasLength(1));
            this.checkLibrary(cycles[2],'file:///foo.dart',{
                dependencies : new core.DartList.literal('package:foo/bar.dart','dart:core')});
        } )());
    }

    test_parts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/foo.dart','library foo; part "a.dart"; part "b.dart";'],
                ['/a.dart','part of foo;'],
                ['/b.dart','part of foo;']]));
            expect(cycles,hasLength(1));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'file:///foo.dart',{
                parts : new core.DartList.literal('file:///a.dart','file:///b.dart')});
        } )());
    }

    test_relativeUris() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/a.dart','import "b/c.dart";'],
                ['/b/c.dart','import "d/e.dart";'],
                ['/b/d/e.dart','import "../f.dart";'],
                ['/b/f.dart','']]));
            expect(cycles,hasLength(4));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'file:///b/f.dart');
            expect(cycles[1].libraries,hasLength(1));
            this.checkLibrary(cycles[1],'file:///b/d/e.dart',{
                dependencies : new core.DartList.literal('file:///b/f.dart','dart:core')});
            expect(cycles[2].libraries,hasLength(1));
            this.checkLibrary(cycles[2],'file:///b/c.dart',{
                dependencies : new core.DartList.literal('file:///b/d/e.dart','dart:core')});
            expect(cycles[3].libraries,hasLength(1));
            this.checkLibrary(cycles[3],'file:///a.dart',{
                dependencies : new core.DartList.literal('file:///b/c.dart','dart:core')});
        } )());
    }

    test_sdkDependency() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/foo.dart','import "dart:async";']]));
            expect(cycles,hasLength(1));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'file:///foo.dart',{
                dependencies : new core.DartList.literal('dart:core','dart:async')});
        } )());
    }

    test_simpleCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/foo.dart','import "bar.dart";'],
                ['/bar.dart','import "foo.dart";']]));
            expect(cycles,hasLength(1));
            expect(cycles[0].libraries,hasLength(2));
            let foo = this.checkLibrary(cycles[0],'file:///foo.dart',{
                dependencies : new core.DartList.literal('file:///bar.dart','dart:core')});
            let bar = this.checkLibrary(cycles[0],'file:///bar.dart',{
                dependencies : new core.DartList.literal('file:///foo.dart','dart:core')});
            expect(op(Op.INDEX,foo.dependencies,0),same(bar));
            expect(op(Op.INDEX,bar.dependencies,0),same(foo));
        } )());
    }

    test_singleFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cycles = await this.getCycles(new core.DartMap.literal([
                ['/foo.dart','']]));
            expect(cycles,hasLength(1));
            expect(cycles[0].libraries,hasLength(1));
            this.checkLibrary(cycles[0],'file:///foo.dart');
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    DependencyGrapherTest() {
    }
}

export class properties {
}
