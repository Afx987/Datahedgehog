/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/source/package_map_provider_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(PubPackageMapProviderTest);
    });
};
export namespace PubPackageMapProviderTest {
    export type Constructors = 'PubPackageMapProviderTest';
    export type Interface = Omit<PubPackageMapProviderTest, Constructors>;
}
@DartClass
export class PubPackageMapProviderTest {
    sdk : any;

    resourceProvider : any;

    packageMapProvider : any;

    projectPath : string;

    projectFolder : any;

    parsePackageMap(obj : core.DartMap<any,any>) : any {
        return this.packageMapProvider.parsePackageMap(obj,this.projectFolder);
    }
    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
        let sdkFolder : any = this.resourceProvider.newFolder(this.resourceProvider.convertPath('/Users/user/dart-sdk'));
        this.sdk = new bare.createInstance(any,null,this.resourceProvider,sdkFolder);
        this.packageMapProvider = new bare.createInstance(any,null,this.resourceProvider,this.sdk);
        this.projectPath = this.resourceProvider.convertPath('/path/to/project');
        this.projectFolder = this.resourceProvider.newFolder(this.projectPath);
    }
    test_computePackageMap_noLockFile() : void {
        this.packageMapProvider = new bare.createInstance(any,null,this.resourceProvider,this.sdk,(folder : any) =>  {
            fail('Unexpected "pub list" invocation');
        });
        let info : any = this.packageMapProvider.computePackageMap(this.projectFolder);
        expect(info.packageMap,isNull);
        expect(info.dependencies,unorderedEquals(new core.DartList.literal(this.resourceProvider.pathContext.join(this.projectPath,'pubspec.lock'))));
    }
    test_parsePackageMap_dontIgnoreNonExistingFolder() : void {
        let packageName : string = 'foo';
        let folderPath : string = this.resourceProvider.convertPath('/path/to/folder');
        let result : core.DartMap<string,core.DartList<any>> = this.parsePackageMap(new core.DartMap.literal([
            ['packages',new core.DartMap.literal([
                [packageName,folderPath]])]])).packageMap;
        expect(result,hasLength(1));
        expect(result.keys,contains(packageName));
        expect(result.get(packageName),hasLength(1));
        expect(result.get(packageName)[0],new bare.createInstance(any,null));
        expect(result.get(packageName)[0].path,equals(folderPath));
    }
    test_parsePackageMap_handleDependencies() : void {
        let path1 : string = this.resourceProvider.convertPath('/path/to/folder1/pubspec.lock');
        let path2 : string = this.resourceProvider.convertPath('/path/to/folder2/pubspec.lock');
        this.resourceProvider.newFile(path1,'...');
        this.resourceProvider.newFile(path2,'...');
        let dependencies : core.DartSet<string> = this.parsePackageMap(new core.DartMap.literal([
            ['packages',new core.DartMap.literal([
            ])],
            ['input_files',new core.DartList.literal(path1,path2)]])).dependencies;
        expect(dependencies,hasLength(2));
        expect(dependencies,contains(path1));
        expect(dependencies,contains(path2));
    }
    test_parsePackageMap_normalFolder() : void {
        let packageName : string = 'foo';
        let folderPath : string = this.resourceProvider.convertPath('/path/to/folder');
        this.resourceProvider.newFolder(folderPath);
        let result : core.DartMap<string,core.DartList<any>> = this.parsePackageMap(new core.DartMap.literal([
            ['packages',new core.DartMap.literal([
                [packageName,folderPath]])]])).packageMap;
        expect(result,hasLength(1));
        expect(result.keys,contains(packageName));
        expect(result.get(packageName),hasLength(1));
        expect(result.get(packageName)[0],new bare.createInstance(any,null));
        expect(result.get(packageName)[0].path,equals(folderPath));
    }
    test_parsePackageMap_packageMapsToList() : void {
        let packageName : string = 'foo';
        let folderPath1 : string = this.resourceProvider.convertPath('/path/to/folder1');
        let folderPath2 : string = this.resourceProvider.convertPath('/path/to/folder2');
        this.resourceProvider.newFolder(folderPath1);
        this.resourceProvider.newFolder(folderPath2);
        let result : core.DartMap<string,core.DartList<any>> = this.parsePackageMap(new core.DartMap.literal([
            ['packages',new core.DartMap.literal([
                [packageName,new core.DartList.literal(folderPath1,folderPath2)]])]])).packageMap;
        expect(result,hasLength(1));
        expect(result.keys,contains(packageName));
        expect(result.get(packageName),hasLength(2));
        for(let i : number = 0; i < 2; i++){
            expect(result.get(packageName)[i],new bare.createInstance(any,null));
            expect(result.get(packageName)[i].path,isIn(new core.DartList.literal(folderPath1,folderPath2)));
        }
    }
    test_parsePackageMap_relativePahInPackages() : void {
        let packagePath : string = this.resourceProvider.convertPath('/path/to/package');
        let relativePackagePath : string = '../package';
        let packageName : string = 'foo';
        this.resourceProvider.newFolder(this.projectPath);
        this.resourceProvider.newFolder(packagePath);
        let result : core.DartMap<string,core.DartList<any>> = this.parsePackageMap(new core.DartMap.literal([
            ['packages',new core.DartMap.literal([
                [packageName,new core.DartList.literal(relativePackagePath)]])]])).packageMap;
        expect(result.get(packageName)[0].path,equals(packagePath));
    }
    test_parsePackageMap_relativePathInDependencies() : void {
        let dependencyPath : string = this.resourceProvider.convertPath('/path/to/pubspec.lock');
        let relativeDependencyPath : string = '../pubspec.lock';
        this.resourceProvider.newFolder(this.projectPath);
        this.resourceProvider.newFile(dependencyPath,'contents');
        let dependencies : core.DartSet<string> = this.parsePackageMap(new core.DartMap.literal([
            ['packages',new core.DartMap.literal([
            ])],
            ['input_files',new core.DartList.literal(relativeDependencyPath)]])).dependencies;
        expect(dependencies,hasLength(1));
        expect(dependencies,contains(dependencyPath));
    }
    constructor() {
    }
    @defaultConstructor
    PubPackageMapProviderTest() {
    }
}

export class properties {
}
