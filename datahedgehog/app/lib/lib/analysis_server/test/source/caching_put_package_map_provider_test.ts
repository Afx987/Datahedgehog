/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/source/caching_put_package_map_provider_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as io from "@dart2ts/dart/io";

export var main : () => any = () =>  {
    group('CachingPubPackageMapProvider',() =>  {
        let resProvider : any;
        let mockRunner : _MockPubListRunner;
        let writeFileException : boolean;
        let result1 : core.DartMap<any,any> = new core.DartMap.literal([
            ['packages',new core.DartMap.literal([
                ['foo','/tmp/proj1/packages/foo']])],
            ['input_files',new core.DartList.literal('/tmp/proj1/pubspec.yaml')]]);
        let result1error : core.DartMap<any,any> = new core.DartMap.literal([
            ['input_files',new core.DartList.literal('/tmp/proj1/pubspec.lock')]]);
        let result2 : core.DartMap<any,any> = new core.DartMap.literal([
            ['packages',new core.DartMap.literal([
                ['bar','/tmp/proj2/packages/bar']])],
            ['input_files',new core.DartList.literal('/tmp/proj2/pubspec.yaml')]]);
        var newProj : (result : core.DartMap<any,any>) => any = (result : core.DartMap<any,any>) : any =>  {
            let packages : core.DartMap<any,any> = result.get('packages');
            packages.forEach((name : string,path : string) =>  {
                resProvider.newFolder(path);
            });
            let inputFiles : core.DartList<string> = result.get('input_files') as core.DartList<string>;
            for(let path of inputFiles) {
                resProvider.newFile(path,'');
            }
            let projectFolder : any = resProvider.getResource(inputFiles[0]).parent;
            resProvider.newFile(op(Op.PLUS,projectFolder.path,'/pubspec.lock'),'');
            return projectFolder;
        };
        var mockWriteFile : (cacheFile : any,content : string) => number = (cacheFile : any,content : string) : number =>  {
            if (writeFileException) {
                throw `simulated write failure: ${cacheFile}`;
            }
            if (!cacheFile.exists) {
                resProvider.newFolder(cacheFile.parent.path);
                resProvider.newFile(cacheFile.path,content);
            }else {
                resProvider.modifyFile(cacheFile.path,content);
            }
            let res : any = resProvider.getResource(cacheFile.path);
            if (is(res, any)) {
                return res.createSource().modificationStamp;
            }
            throw `expected file, but found ${res}`;
        };
        var newPkgProvider : () => any = () : any =>  {
            let sdkFolder : any = resProvider.newFolder(resProvider.convertPath('/Users/user/dart-sdk'));
            return new bare.createInstance(any,null,resProvider,new bare.createInstance(any,null,resProvider,sdkFolder),mockRunner.runPubList.bind(mockRunner),mockWriteFile);
        };
        setUp(() =>  {
            resProvider = new bare.createInstance(any,null);
            resProvider.newFolder('/tmp/proj/packages/foo');
            mockRunner = new _MockPubListRunner();
            writeFileException = false;
        });
        group('computePackageMap',() =>  {
            test('cache memory',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                info = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
            });
            test('cache disk',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider1 : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider1.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                let pkgProvider2 : any = newPkgProvider();
                info = pkgProvider2.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
            });
            test('corrupt cache file',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider1 : any = newPkgProvider();
                resProvider.newFile(pkgProvider1.cacheFile.path,'corrupt content');
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider1.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                let pkgProvider2 : any = newPkgProvider();
                info = pkgProvider2.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
            });
            test('failed write to cache file',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                writeFileException = true;
                let info : any = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                info = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
            });
            test('shared disk cache',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider1 : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider1.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                let folder2 : any = newProj(result2);
                let pkgProvider2 : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result2);
                info = pkgProvider2.computePackageMap(folder2);
                expect(mockRunner.runCount,2);
                _assertInfo(info,result2);
                info = pkgProvider1.computePackageMap(folder2);
                expect(mockRunner.runCount,2);
                _assertInfo(info,result2);
            });
            test('input file changed',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                resProvider.modifyFile(info.dependencies.first,'new content');
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                info = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,2);
                _assertInfo(info,result1);
            });
            test('input file changed 2',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider1 : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider1.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                resProvider.modifyFile(info.dependencies.first,'new content');
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let pkgProvider2 : any = newPkgProvider();
                info = pkgProvider2.computePackageMap(folder1);
                expect(mockRunner.runCount,2);
                _assertInfo(info,result1);
            });
            test('input file deleted',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                resProvider.deleteFile(info.dependencies.first);
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                info = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,2);
                _assertInfo(info,result1);
            });
            test('project removed then restored',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pkgProvider : any = newPkgProvider();
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
                let restorePoint : _RestorePoint = new _RestorePoint(resProvider,folder1);
                resProvider.deleteFolder(folder1.path);
                info = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertError(info,result1error);
                restorePoint.restore();
                info = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,1);
                _assertInfo(info,result1);
            });
            test('dependency changed during execution',() =>  {
                expect(mockRunner.runCount,0);
                let folder1 : any = newProj(result1);
                let pubspecFile : any = folder1.getChild('pubspec.yaml');
                expect(pubspecFile.exists,isTrue);
                let pkgProvider : any = newPkgProvider();
                mockRunner.nextResultFunction = () =>  {
                    resProvider.modifyFile(pubspecFile.path,'new content');
                    return convert.properties.JSON.encode(result1);
                };
                mockRunner.nextResult = convert.properties.JSON.encode(result1);
                let info : any = pkgProvider.computePackageMap(folder1);
                expect(mockRunner.runCount,2);
                _assertInfo(info,result1);
            });
        });
    });
};
export var _assertError : (info : any,expected : core.DartMap<any,any>) => any = (info : any,expected : core.DartMap<any,any>) =>  {
    expect(info.packageMap,isNull);
    let expectedFiles : core.DartList<string> = expected.get('input_files') as core.DartList<string>;
    expect(info.dependencies,hasLength(expectedFiles.length));
    for(let path of expectedFiles) {
        expect(info.dependencies,contains(path));
    }
};
export var _assertInfo : (info : any,expected : core.DartMap<any,any>) => any = (info : any,expected : core.DartMap<any,any>) =>  {
    let expectedPackages : core.DartMap<string,string> = expected.get('packages') as core.DartMap<string,string>;
    expect(info.packageMap,hasLength(expectedPackages.length));
    for(let key of expectedPackages.keys) {
        let packageList : core.DartList<any> = op(Op.INDEX,info.packageMap,key);
        expect(packageList,hasLength(1));
        expect(packageList[0].path,expectedPackages.get(key));
    }
    let expectedFiles : core.DartList<string> = expected.get('input_files') as core.DartList<string>;
    expect(info.dependencies,hasLength(expectedFiles.length));
    for(let path of expectedFiles) {
        expect(info.dependencies,contains(path));
    }
};
export namespace _MockPubListRunner {
    export type Constructors = '_MockPubListRunner';
    export type Interface = Omit<_MockPubListRunner, Constructors>;
}
@DartClass
export class _MockPubListRunner {
    runCount : number;

    nextResults : core.DartList<any>;

    set nextResult(result : string) {
        this.nextResults.add(result);
    }
    set nextResultFunction(resultFunction : () => string) {
        this.nextResults.add(resultFunction);
    }
    runPubList(folder : any) : io.ProcessResult {
        if (this.nextResults.isEmpty) {
            throw 'missing nextResult';
        }
        let result = this.nextResults.removeAt(0);
        if (is(result, () => string)) {
            result = result();
        }
        ++this.runCount;
        return new _MockResult(result);
    }
    constructor() {
    }
    @defaultConstructor
    _MockPubListRunner() {
        this.runCount = 0;
        this.nextResults = new core.DartList.literal();
    }
}

export namespace _MockResult {
    export type Constructors = '_MockResult';
    export type Interface = Omit<_MockResult, Constructors>;
}
@DartClass
@Implements(io.ProcessResult)
export class _MockResult implements io.ProcessResult.Interface {
    result : string;

    constructor(result : string) {
    }
    @defaultConstructor
    _MockResult(result : string) {
        this.result = result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exitCode() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stdout() {
        return this.result;
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace _RestorePoint {
    export type Constructors = '_RestorePoint';
    export type Interface = Omit<_RestorePoint, Constructors>;
}
@DartClass
export class _RestorePoint {
    provider : any;

    _folderPaths : core.DartList<string>;

    _filePaths : core.DartList<string>;

    _fileContents : core.DartList<any>;

    constructor(provider : any,folder : any) {
    }
    @defaultConstructor
    _RestorePoint(provider : any,folder : any) {
        this._folderPaths = new core.DartList.literal<string>();
        this._filePaths = new core.DartList.literal<string>();
        this._fileContents = new core.DartList.literal<any>();
        this.provider = provider;
        this.record(folder);
    }
    record(folder : any) : void {
        this._folderPaths.add(folder.path);
        for(let child of folder.getChildren()) {
            if (is(child, any)) {
                this.record(child);
            }else if (is(child, any)) {
                this._filePaths.add(child.path);
                this._fileContents.add(child.createSource().contents);
            }else {
                throw `unknown resource: ${child}`;
            }
        }
    }
    restore() : void {
        for(let path of this._folderPaths) {
            this.provider.newFolder(path);
        }
        let fileCount : number = this._filePaths.length;
        for(let fileIndex : number = 0; fileIndex < fileCount; ++fileIndex){
            let path : string = this._filePaths[fileIndex];
            let content : any = this._fileContents[fileIndex];
            this.provider.newFile(path,content.data,content.modificationTime);
        }
    }
}

export class properties {
}
