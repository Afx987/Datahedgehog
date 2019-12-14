/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/package_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";
import * as lib4 from "./../src/context/mock_sdk";
import * as lib5 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DependencyFinderTest);
        defineReflectiveTests(PackageDescriptionTest);
        defineReflectiveTests(PackageManagerTest);
    });
};
export namespace DependencyFinderTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'DependencyFinderTest';
    export type Interface = Omit<DependencyFinderTest, Constructors>;
}
@DartClass
export class DependencyFinderTest extends lib3.ResolverTestCase {
    test_transitiveDependenciesFor_circularDependencies() : void {
        let packageA : string = this.resourceProvider.convertPath('/pub-cache/a-1.0');
        let packageB : string = this.resourceProvider.convertPath('/pub-cache/b-1.0');
        let packageC : string = this.resourceProvider.convertPath('/pub-cache/c-1.0');
        this.resourceProvider.newFile(`${packageA}/${properties.pubspecName}`,'    dependencies:\n      b: any\n    ');
        this.resourceProvider.newFile(`${packageB}/${properties.pubspecName}`,'    dependencies:\n      c: any\n    ');
        this.resourceProvider.newFile(`${packageC}/${properties.pubspecName}`,'    dependencies:\n      a: any\n    ');
        let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartMap.literal([
            ['a',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageA))],
            ['b',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageB))],
            ['c',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageC))]]);
        let finder : any = new bare.createInstance(any,null,this.resourceProvider);
        let result : core.DartList<string> = finder.transitiveDependenciesFor(packageMap,packageA);
        expect(result,unorderedEquals(new core.DartList.literal(packageB,packageC)));
    }
    test_transitiveDependenciesFor_missingPubspec() : void {
        let packagePath : string = '/pub-cache/a-1.0';
        let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartMap.literal([
            ['a',new core.DartList.literal<any>(this.resourceProvider.getFolder(packagePath))]]);
        let finder : any = new bare.createInstance(any,null,this.resourceProvider);
        expect(() =>  {
            return finder.transitiveDependenciesFor(packageMap,packagePath);
        },throws);
    }
    test_transitiveDependenciesFor_noDependencies() : void {
        let packagePath : string = '/pub-cache/a-1.0';
        this.resourceProvider.newFile(`${packagePath}/${properties.pubspecName}`,'');
        let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartMap.literal([
            ['a',new core.DartList.literal<any>(this.resourceProvider.getFolder(packagePath))]]);
        let finder : any = new bare.createInstance(any,null,this.resourceProvider);
        let result : core.DartList<string> = finder.transitiveDependenciesFor(packageMap,packagePath);
        expect(result,hasLength(0));
    }
    test_transitiveDependenciesFor_overlappingDependencies() : void {
        let packageA : string = this.resourceProvider.convertPath('/pub-cache/a-1.0');
        let packageB : string = this.resourceProvider.convertPath('/pub-cache/b-1.0');
        let packageC : string = this.resourceProvider.convertPath('/pub-cache/c-1.0');
        let packageD : string = this.resourceProvider.convertPath('/pub-cache/d-1.0');
        this.resourceProvider.newFile(`${packageA}/${properties.pubspecName}`,'    dependencies:\n      b: any\n      c: any\n    ');
        this.resourceProvider.newFile(`${packageB}/${properties.pubspecName}`,'    dependencies:\n      d: any\n    ');
        this.resourceProvider.newFile(`${packageC}/${properties.pubspecName}`,'    dependencies:\n      d: any\n    ');
        this.resourceProvider.newFile(`${packageD}/${properties.pubspecName}`,'');
        let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartMap.literal([
            ['a',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageA))],
            ['b',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageB))],
            ['c',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageC))],
            ['d',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageD))]]);
        let finder : any = new bare.createInstance(any,null,this.resourceProvider);
        let result : core.DartList<string> = finder.transitiveDependenciesFor(packageMap,packageA);
        expect(result,unorderedEquals(new core.DartList.literal(packageB,packageC,packageD)));
    }
    test_transitiveDependenciesFor_simpleDependencies() : void {
        let packageA : string = this.resourceProvider.convertPath('/pub-cache/a-1.0');
        let packageB : string = this.resourceProvider.convertPath('/pub-cache/b-1.0');
        let packageC : string = this.resourceProvider.convertPath('/pub-cache/c-1.0');
        this.resourceProvider.newFile(`${packageA}/${properties.pubspecName}`,'    dependencies:\n      b: any\n      c: any\n    ');
        this.resourceProvider.newFile(`${packageB}/${properties.pubspecName}`,'');
        this.resourceProvider.newFile(`${packageC}/${properties.pubspecName}`,'');
        let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartMap.literal([
            ['a',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageA))],
            ['b',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageB))],
            ['c',new core.DartList.literal<any>(this.resourceProvider.getFolder(packageC))]]);
        let finder : any = new bare.createInstance(any,null,this.resourceProvider);
        let result : core.DartList<string> = finder.transitiveDependenciesFor(packageMap,packageA);
        expect(result,unorderedEquals(new core.DartList.literal(packageB,packageC)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DependencyFinderTest() {
    }
}

export namespace PackageDescriptionTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'PackageDescriptionTest';
    export type Interface = Omit<PackageDescriptionTest, Constructors>;
}
@DartClass
export class PackageDescriptionTest extends lib3.ResolverTestCase {
    test_equal_false_differentOptions() : void {
        let packageId : string = 'path1;path2';
        let sdk : any = new lib4.MockSdk();
        let options1 : any = new bare.createInstance(any,null);
        let options2 : any = new bare.createInstance(any,null);
        options2.enableLazyAssignmentOperators = !options1.enableLazyAssignmentOperators;
        let first : any = new bare.createInstance(any,null,packageId,sdk,options1);
        let second : any = new bare.createInstance(any,null,packageId,sdk,options2);
        expect(op(Op.EQUALS,first,second),isFalse);
    }
    test_equal_false_differentPaths() : void {
        let packageId1 : string = 'path1;path2';
        let packageId2 : string = 'path1;path3';
        let sdk : any = new lib4.MockSdk();
        let options : any = new bare.createInstance(any,null);
        let first : any = new bare.createInstance(any,null,packageId1,sdk,options);
        let second : any = new bare.createInstance(any,null,packageId2,sdk,options);
        expect(op(Op.EQUALS,first,second),isFalse);
    }
    test_equal_false_differentSdks() : void {
        let packageId : string = 'path1;path2';
        let sdk1 : any = new lib4.MockSdk();
        let sdk2 : any = new lib4.MockSdk();
        let options : any = new bare.createInstance(any,null);
        let first : any = new bare.createInstance(any,null,packageId,sdk1,options);
        let second : any = new bare.createInstance(any,null,packageId,sdk2,options);
        expect(op(Op.EQUALS,first,second),isFalse);
    }
    test_equal_true() : void {
        let packageId : string = 'path1;path2';
        let sdk : any = new lib4.MockSdk();
        let options : any = new bare.createInstance(any,null);
        let first : any = new bare.createInstance(any,null,packageId,sdk,options);
        let second : any = new bare.createInstance(any,null,packageId,sdk,options);
        expect(op(Op.EQUALS,first,second),isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PackageDescriptionTest() {
    }
}

export namespace PackageManagerTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'PackageManagerTest';
    export type Interface = Omit<PackageManagerTest, Constructors>;
}
@DartClass
export class PackageManagerTest extends lib3.ResolverTestCase {
    test_getContext() : void {
        let packageA : string = this.resourceProvider.convertPath('/pub-cache/a-1.0');
        let packageB1 : string = this.resourceProvider.convertPath('/pub-cache/b-1.0');
        let packageB2 : string = this.resourceProvider.convertPath('/pub-cache/b-2.0');
        let packageC : string = this.resourceProvider.convertPath('/pub-cache/c-1.0');
        this.resourceProvider.newFile(`${packageA}/${properties.pubspecName}`,'    dependencies:\n      b: any\n      c: any\n    ');
        this.resourceProvider.newFile(`${packageB1}/${properties.pubspecName}`,'');
        this.resourceProvider.newFile(`${packageB2}/${properties.pubspecName}`,'');
        this.resourceProvider.newFile(`${packageC}/${properties.pubspecName}`,'');
        let packages1 : any = new _MockPackages(new core.DartMap.literal([
            ['a',new lib5.Uri.file(packageA)],
            ['b',new lib5.Uri.file(packageB1)],
            ['c',new lib5.Uri.file(packageC)]]));
        let resolver : any = new bare.createInstance(any,null,new lib4.MockSdk());
        let options : any = new bare.createInstance(any,null);
        let manager : any = new bare.createInstance(any,null,this.resourceProvider);
        let context1 : any = manager.getContext(packageA,packages1,resolver,options);
        expect(context1,isNotNull);
        let context2 : any = manager.getContext(packageA,packages1,resolver,options);
        expect(context2,same(context1));
        let packages3 : any = new _MockPackages(new core.DartMap.literal([
            ['a',new lib5.Uri.file(packageA)],
            ['b',new lib5.Uri.file(packageB2)],
            ['c',new lib5.Uri.file(packageC)]]));
        let context3 : any = manager.getContext(packageA,packages3,resolver,options);
        expect(context3,isNot(same(context1)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PackageManagerTest() {
    }
}

export namespace _MockPackages {
    export type Constructors = '_MockPackages';
    export type Interface = Omit<_MockPackages, Constructors>;
}
@DartClass
@Implements(any)
export class _MockPackages implements any.Interface {
    map : core.DartMap<string,lib5.Uri>;

    constructor(map : core.DartMap<string,lib5.Uri>) {
    }
    @defaultConstructor
    _MockPackages(map : core.DartMap<string,lib5.Uri>) {
        this.map = map;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packages() : core.DartIterable<string> {
        return this.map.keys;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asMap() : core.DartMap<string,lib5.Uri> {
        return this.map;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(packageUri : lib5.Uri,_namedArguments? : {notFound? : (packageUri : lib5.Uri) => lib5.Uri}) : lib5.Uri {
        let {notFound} = Object.assign({
        }, _namedArguments );
        fail('Unexpected invocation of resolve');
        return null;
    }
}

export class properties {
    private static __$pubspecName : string;
    static get pubspecName() : string { 
        if (this.__$pubspecName===undefined) {
            this.__$pubspecName = 'pubspec.yaml';
        }
        return this.__$pubspecName;
    }
    static set pubspecName(__$value : string)  { 
        this.__$pubspecName = __$value;
    }

}
