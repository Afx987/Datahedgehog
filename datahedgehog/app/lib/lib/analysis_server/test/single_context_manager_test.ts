/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/single_context_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./context_manager_test";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "./mocks";
import * as lib6 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SingleContextManagerTest);
    });
};
export namespace SingleContextManagerTest {
    export type Constructors = 'SingleContextManagerTest';
    export type Interface = Omit<SingleContextManagerTest, Constructors>;
}
@DartClass
export class SingleContextManagerTest {
    resourceProvider : any;

    packageResolver : TestUriResolver;

    callbacks : lib3.TestContextManagerCallbacks;

    manager : any;

    get analysisFilesGlobs() : core.DartList<any> {
        let patterns : core.DartList<string> = new core.DartList.literal<string>(`**/*.${AnalysisEngine.SUFFIX_DART}`,`**/*.${AnalysisEngine.SUFFIX_HTML}`);
        return patterns.map((pattern : any) =>  {
            return new bare.createInstance(any,null,lib4.properties.posix.separator,pattern);
        }).toList();
    }
    newFile(pathComponents : core.DartList<string>,content? : string) : string {
        content = content || '';
        let filePath : string = lib4.properties.posix.joinAll(pathComponents);
        this.resourceProvider.newFile(filePath,content);
        return filePath;
    }
    newFolder(pathComponents : core.DartList<string>) : string {
        let folderPath : string = lib4.properties.posix.joinAll(pathComponents);
        this.resourceProvider.newFolder(folderPath);
        return folderPath;
    }
    setUp() : void {
        this.packageResolver = new TestUriResolver();
        this._processRequiredPlugins();
        let sdkManager : any = new bare.createInstance(any,null,'/',false);
        this.manager = new bare.createInstance(any,null,this.resourceProvider,sdkManager,(_ : any) =>  {
            return this.packageResolver;
        },this.analysisFilesGlobs,new bare.createInstance(any,null));
        let logger : any = new bare.createInstance(any,null,new bare.createInstance(any,null));
        let scheduler : any = new bare.createInstance(any,null,logger);
        this.callbacks = new lib3.TestContextManagerCallbacks(this.resourceProvider,sdkManager,logger,scheduler);
        this.manager.callbacks = this.callbacks;
    }
    test_isIgnored_false() : void {
        let project : string = '/project';
        this.resourceProvider.newFolder(project);
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.isIgnored(`${project}/file.dart`),isFalse);
    }
    test_isIgnored_true_inDotFolder() : void {
        let project : string = '/project';
        this.resourceProvider.newFolder(project);
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.isIgnored(`${project}/foo/.bar/file.dart`),isTrue);
    }
    test_isIgnored_true_inExcludedPath() : void {
        let project : string = '/project';
        let excludedPath : string = '/project/excluded';
        this.resourceProvider.newFolder(project);
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(excludedPath),new core.DartMap.literal([
        ]));
        expect(this.manager.isIgnored(`${excludedPath}/file.dart`),isTrue);
    }
    test_isIgnored_true_notInRoot() : void {
        let root1 : string = '/context/root1';
        let root2 : string = '/context/root2';
        this.resourceProvider.newFolder(root1);
        this.resourceProvider.newFolder(root2);
        this.manager.setRoots(new core.DartList.literal<string>(root1,root2),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.isIgnored('/context/root3/file.dart'),isTrue);
    }
    test_isInAnalysisRoot_false_inExcludedPath() : void {
        let project : string = '/project';
        let excludedPath : string = '/project/excluded';
        this.resourceProvider.newFolder(project);
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(excludedPath),new core.DartMap.literal([
        ]));
        expect(this.manager.isInAnalysisRoot(`${excludedPath}/file.dart`),isFalse);
    }
    test_isInAnalysisRoot_false_notInRoot() : void {
        let root1 : string = '/context/root1';
        let root2 : string = '/context/root2';
        this.resourceProvider.newFolder(root1);
        this.resourceProvider.newFolder(root2);
        this.manager.setRoots(new core.DartList.literal<string>(root1,root2),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.isInAnalysisRoot('/context/root3/file.dart'),isFalse);
    }
    test_isInAnalysisRoot_true() : void {
        let project : string = '/project';
        this.resourceProvider.newFolder(project);
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.isInAnalysisRoot(`${project}/file.dart`),isTrue);
    }
    test_refresh() : void {
        let project : string = '/project';
        let file1 : string = `${project}/file1.dart`;
        let file2 : string = `${project}/file2.dart`;
        this.resourceProvider.newFile(file1,'');
        this.resourceProvider.newFile(file2,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file2),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
        this.manager.refresh(new core.DartList.literal());
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
    }
    test_setRoots_addFolderWithDartFile() : void {
        let project : string = '/project';
        let file : string = `${project}/lib/foo.dart`;
        this.resourceProvider.newFile(file,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file));
    }
    test_setRoots_addFolderWithDartFileInSubfolder() : void {
        let project : string = '/project';
        let file : string = `${project}/foo/bar.dart`;
        this.resourceProvider.newFile(file,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file));
    }
    test_setRoots_addFolderWithDummyLink() : void {
        let project : string = '/project';
        let file : string = `${project}/foo.dart`;
        this.resourceProvider.newDummyLink(file);
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextFiles(project,new core.DartList.literal());
    }
    test_setRoots_exclude_newRoot_withExcludedFile() : void {
        let project : string = '/project';
        let file1 : string = `${project}/file1.dart`;
        let file2 : string = `${project}/file2.dart`;
        this.resourceProvider.newFile(file1,'');
        this.resourceProvider.newFile(file2,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file1),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file2));
    }
    test_setRoots_exclude_newRoot_withExcludedFolder() : void {
        let project : string = '/project';
        let folderA : string = `${project}/aaa`;
        let folderB : string = `${project}/bbb`;
        let fileA : string = `${folderA}/a.dart`;
        let fileB : string = `${folderB}/b.dart`;
        this.resourceProvider.newFile(fileA,'');
        this.resourceProvider.newFile(fileB,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(folderB),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
    }
    test_setRoots_exclude_sameRoot_addExcludedFile() : void {
        let project : string = '/project';
        let file1 : string = `${project}/file1.dart`;
        let file2 : string = `${project}/file2.dart`;
        this.resourceProvider.newFile(file1,'');
        this.resourceProvider.newFile(file2,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1,file2));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file2),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
    }
    test_setRoots_exclude_sameRoot_addExcludedFolder() : void {
        let project : string = '/project';
        let folderA : string = `${project}/aaa`;
        let folderB : string = `${project}/bbb`;
        let fileA : string = `${folderA}/a.dart`;
        let fileB : string = `${folderB}/b.dart`;
        this.resourceProvider.newFile(fileA,'library a;');
        this.resourceProvider.newFile(fileB,'library b;');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA,fileB));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(folderB),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
    }
    test_setRoots_exclude_sameRoot_removeExcludedFile() : void {
        let project : string = '/project';
        let file1 : string = `${project}/file1.dart`;
        let file2 : string = `${project}/file2.dart`;
        this.resourceProvider.newFile(file1,'// 1');
        this.resourceProvider.newFile(file2,'// 2');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file2),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1,file2));
    }
    test_setRoots_exclude_sameRoot_removeExcludedFile_inFolder() : void {
        let project : string = '/project';
        let file1 : string = `${project}/bin/file1.dart`;
        let file2 : string = `${project}/bin/file2.dart`;
        this.resourceProvider.newFile(file1,'// 1');
        this.resourceProvider.newFile(file2,'// 2');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file2),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1,file2));
    }
    test_setRoots_exclude_sameRoot_removeExcludedFolder() : void {
        let project : string = '/project';
        let folderA : string = `${project}/aaa`;
        let folderB : string = `${project}/bbb`;
        let fileA : string = `${folderA}/a.dart`;
        let fileB : string = `${folderB}/b.dart`;
        this.resourceProvider.newFile(fileA,'library a;');
        this.resourceProvider.newFile(fileB,'library b;');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(folderB),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA,fileB));
    }
    test_setRoots_ignoreGlobs() : void {
        let project : string = '/project';
        let file1 : string = `${project}/file.dart`;
        let file2 : string = `${project}/file.foo`;
        this.resourceProvider.newFile(file1,'');
        this.resourceProvider.newFile(file2,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
    }
    test_setRoots_newContextFolder_coverNewRoot() : void {
        let contextPath : string = '/context';
        let root1 : string = `${contextPath}/root1`;
        let file1 : string = `${root1}/file1.dart`;
        let root2 : string = `${contextPath}/root2`;
        let file2 : string = `${root2}/file1.dart`;
        this.resourceProvider.newFile(file1,'');
        this.resourceProvider.newFile(file2,'');
        this.manager.setRoots(new core.DartList.literal<string>(root1),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root1));
        this.callbacks.assertContextFiles(root1,new core.DartList.literal(file1));
        this.manager.setRoots(new core.DartList.literal<string>(root1,root2),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(contextPath));
        this.callbacks.assertContextFiles(contextPath,new core.DartList.literal(file1,file2));
        this.manager.setRoots(new core.DartList.literal<string>(root2),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root2));
        this.callbacks.assertContextFiles(root2,new core.DartList.literal(file2));
    }
    test_setRoots_newContextFolder_replace() : void {
        let contextPath1 : string = '/context1';
        let root11 : string = `${contextPath1}/root1`;
        let root12 : string = `${contextPath1}/root2`;
        let file11 : string = `${root11}/file1.dart`;
        let file12 : string = `${root12}/file2.dart`;
        let contextPath2 : string = '/context2';
        let root21 : string = `${contextPath2}/root1`;
        let root22 : string = `${contextPath2}/root2`;
        let file21 : string = `${root21}/file1.dart`;
        let file22 : string = `${root22}/file2.dart`;
        this.resourceProvider.newFile(file11,'');
        this.resourceProvider.newFile(file12,'');
        this.resourceProvider.newFile(file21,'');
        this.resourceProvider.newFile(file22,'');
        this.manager.setRoots(new core.DartList.literal<string>(root11,root12),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(contextPath1));
        this.callbacks.assertContextFiles(contextPath1,new core.DartList.literal(file11,file12));
        this.manager.setRoots(new core.DartList.literal<string>(root21,root22),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(contextPath2));
        this.callbacks.assertContextFiles(contextPath2,new core.DartList.literal(file21,file22));
    }
    test_setRoots_pathContainsDotFile() : void {
        let project : string = '/project';
        let fileA : string = `${project}/foo.dart`;
        let fileB : string = `${project}/.pub/bar.dart`;
        this.resourceProvider.newFile(fileA,'');
        this.resourceProvider.newFile(fileB,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
    }
    test_setRoots_rootPathContainsDotFile() : void {
        let project : string = '/.pub/project';
        let fileA : string = `${project}/foo.dart`;
        this.resourceProvider.newFile(fileA,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
    }
    test_watch_addFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/project';
            this.resourceProvider.newFolder(project);
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextFiles(project,new core.DartList.literal());
            let file : string = `${project}/foo.dart`;
            this.resourceProvider.newFile(file,'contents');
            await lib5.pumpEventQueue();
            this.callbacks.assertContextFiles(project,new core.DartList.literal(file));
        } )());
    }

    test_watch_addFile_afterChangingRoots() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let contextPath : string = '/context';
            let root1 : string = `${contextPath}/root1`;
            let root2 : string = `${contextPath}/root2`;
            let file1 : string = `${root1}/file1.dart`;
            let file2 : string = `${root2}/file2.dart`;
            this.resourceProvider.newFolder(root1);
            this.resourceProvider.newFolder(root2);
            this.manager.setRoots(new core.DartList.literal<string>(root1),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.manager.setRoots(new core.DartList.literal<string>(root2),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.manager.setRoots(new core.DartList.literal<string>(root1,root2),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.manager.setRoots(new core.DartList.literal<string>(root2),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextFiles(root2,new core.DartList.literal());
            this.resourceProvider.newFile(file1,'');
            this.resourceProvider.newFile(file2,'');
            await lib5.pumpEventQueue();
            this.callbacks.assertContextFiles(root2,new core.DartList.literal(file2));
        } )());
    }

    test_watch_addFile_excluded() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/project';
            let folderA : string = `${project}/aaa`;
            let folderB : string = `${project}/bbb`;
            let fileA : string = `${folderA}/a.dart`;
            let fileB : string = `${folderB}/b.dart`;
            this.resourceProvider.newFile(fileA,'library a;');
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(folderB),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
            this.resourceProvider.newFile(fileB,'library b;');
            await lib5.pumpEventQueue();
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        } )());
    }

    test_watch_addFile_notInRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let contextPath : string = '/roots';
            let root1 : string = `${contextPath}/root1`;
            let root2 : string = `${contextPath}/root2`;
            let root3 : string = `${contextPath}/root3`;
            let file1 : string = `${root1}/file1.dart`;
            let file2 : string = `${root2}/file2.dart`;
            let file3 : string = `${root3}/file3.dart`;
            this.resourceProvider.newFile(file1,'');
            this.resourceProvider.newFile(file2,'');
            this.manager.setRoots(new core.DartList.literal<string>(root1,root2),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextPaths(new core.DartList.literal(contextPath));
            this.callbacks.assertContextFiles(contextPath,new core.DartList.literal(file1,file2));
            this.resourceProvider.newFile(file3,'');
            await lib5.pumpEventQueue();
            this.callbacks.assertContextPaths(new core.DartList.literal(contextPath));
            this.callbacks.assertContextFiles(contextPath,new core.DartList.literal(file1,file2));
        } )());
    }

    test_watch_addFile_pathContainsDotFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/project';
            let fileA : string = `${project}/foo.dart`;
            let fileB : string = `${project}/.pub/bar.dart`;
            this.resourceProvider.newFile(fileA,'');
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
            this.resourceProvider.newFile(fileB,'');
            await lib5.pumpEventQueue();
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        } )());
    }

    test_watch_addFileInSubFolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/project';
            this.resourceProvider.newFolder(project);
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextFiles(project,new core.DartList.literal());
            let file : string = `${project}/foo/bar.dart`;
            this.resourceProvider.newFile(file,'contents');
            await lib5.pumpEventQueue();
            this.callbacks.assertContextFiles(project,new core.DartList.literal(file));
        } )());
    }

    test_watch_deleteFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/project';
            let file : string = `${project}/foo.dart`;
            this.resourceProvider.newFile(file,'contents');
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(file));
            this.resourceProvider.deleteFile(file);
            await lib5.pumpEventQueue();
            this.callbacks.assertContextFiles(project,new core.DartList.literal());
        } )());
    }

    test_watch_deleteFolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/project';
            let file : string = `${project}/foo.dart`;
            this.resourceProvider.newFile(file,'contents');
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(file));
            this.resourceProvider.deleteFolder(project);
            await lib5.pumpEventQueue();
            this.callbacks.assertContextFiles(project,new core.DartList.literal());
        } )());
    }

    test_watch_modifyFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/project';
            let file : string = `${project}/foo.dart`;
            this.resourceProvider.newFile(file,'contents');
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            let filePaths : core.DartMap<string,number> = this.callbacks.currentContextFilePaths.get(project);
            expect(filePaths,hasLength(1));
            expect(filePaths,contains(file));
            expect(filePaths.get(file),equals(this.callbacks.now));
            this.callbacks.now++;
            this.resourceProvider.modifyFile(file,'new contents');
            await lib5.pumpEventQueue();
            return expect(filePaths.get(file),equals(this.callbacks.now));
        } )());
    }

    _processRequiredPlugins() : void {
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
    }
    constructor() {
    }
    @defaultConstructor
    SingleContextManagerTest() {
        this.resourceProvider = new bare.createInstance(any,null);
    }
}

export namespace TestUriResolver {
    export type Constructors = 'TestUriResolver';
    export type Interface = Omit<TestUriResolver, Constructors>;
}
@DartClass
export class TestUriResolver extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib6.Uri,actualUri? : lib6.Uri) : any {
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TestUriResolver() {
    }
}

export class properties {
}
