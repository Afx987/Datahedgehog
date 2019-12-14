/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/single_context_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/src/context";
import * as lib4 from "@dart2ts/dart/uri";
import * as math from "@dart2ts/dart/math";

export namespace SingleContextManager {
    export type Constructors = 'SingleContextManager';
    export type Interface = Omit<SingleContextManager, Constructors>;
}
@DartClass
@Implements(any)
export class SingleContextManager implements any.Interface {
    resourceProvider : any;

    pathContext : lib3.Context;

    sdkManager : any;

    packageResolverProvider : any;

    analyzedFilesGlobs : core.DartList<any>;

    defaultContextOptions : any;

    includedPaths : core.DartList<string>;

    excludedPaths : core.DartList<string>;

    packageRoots : core.DartMap<string,string>;

    normalizedPackageRoots : core.DartMap<string,string>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    callbacks : any;

    analysisDriver : any;

    context : any;

    contextFolder : any;

    watchSubscriptions : core.DartMap<string,async.DartStreamSubscription<any>>;

    constructor(resourceProvider : any,sdkManager : any,packageResolverProvider : any,analyzedFilesGlobs : core.DartList<any>,defaultContextOptions : any) {
    }
    @defaultConstructor
    SingleContextManager(resourceProvider : any,sdkManager : any,packageResolverProvider : any,analyzedFilesGlobs : core.DartList<any>,defaultContextOptions : any) {
        this.includedPaths = new core.DartList.literal<string>();
        this.excludedPaths = new core.DartList.literal<string>();
        this.packageRoots = new core.DartMap.literal([
        ]);
        this.normalizedPackageRoots = new core.DartMap.literal([
        ]);
        this.watchSubscriptions = new core.DartMap<string,async.DartStreamSubscription<any>>();
        this.resourceProvider = resourceProvider;
        this.sdkManager = sdkManager;
        this.packageResolverProvider = packageResolverProvider;
        this.analyzedFilesGlobs = analyzedFilesGlobs;
        this.defaultContextOptions = defaultContextOptions;
        this.pathContext = this.resourceProvider.pathContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analysisContexts() : core.DartIterable<any> {
        return op(Op.EQUALS,this.context,null) ? new core.DartList.literal<any>() : new core.DartList.literal<any>(this.context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get driverMap() : core.DartMap<any,any> {
        return new core.DartMap.literal([
            [this.contextFolder,this.analysisDriver]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get folderMap() : core.DartMap<any,any> {
        return new core.DartMap.literal([
            [this.contextFolder,this.context]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contextsInAnalysisRoot(analysisRoot : any) : core.DartList<any> {
        if (op(Op.EQUALS,this.context,null) || !this.includedPaths.contains(analysisRoot.path)) {
            return new core.DartList.literal<any>();
        }
        return new core.DartList.literal<any>(this.context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContextFolderFor(path : string) : any {
        if (this.isInAnalysisRoot(path)) {
            return this.contextFolder;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContextFor(path : string) : any {
        if (op(Op.EQUALS,this.context,null)) {
            return null;
        }else if (this._isContainedIn(this.includedPaths,path)) {
            return this.context;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDriverFor(path : string) : any {
        throw new core.UnimplementedError('Unexpected invocation of getDriverFor in SingleContextManager');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDriversInAnalysisRoot(analysisRoot : any) : core.DartList<any> {
        throw new core.UnimplementedError('Unexpected invocation of getDriversInAnalysisRoot in SingleContextManager');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIgnored(path : string) : boolean {
        return !this._isContainedIn(this.includedPaths,path) || this._isExcludedPath(path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isInAnalysisRoot(path : string) : boolean {
        return this._isContainedIn(this.includedPaths,path) && !this._isContainedIn(this.excludedPaths,path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    refresh(roots : core.DartList<any>) : void {
        if (this.context != null) {
            this.callbacks.removeContext(this.contextFolder,null);
            this.context.dispose();
            this.context = null;
            this.contextFolder = null;
            this._cancelCurrentWatchSubscriptions();
            this.setRoots(this.includedPaths,this.excludedPaths,this.packageRoots);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setRoots(includedPaths : core.DartList<string>,excludedPaths : core.DartList<string>,packageRoots : core.DartMap<string,string>) : void {
        includedPaths = this._nonOverlappingPaths(includedPaths);
        excludedPaths = this._nonOverlappingPaths(excludedPaths);
        this.packageRoots = packageRoots;
        this._updateNormalizedPackageRoots();
        {
            let contextPath : string = this._commonPrefix(includedPaths);
            let contextFolder : any = this.resourceProvider.getFolder(contextPath);
            if (contextFolder != this.contextFolder) {
                if (this.context != null) {
                    this.callbacks.moveContext(this.contextFolder,contextFolder);
                }
                this.contextFolder = contextFolder;
            }
        }
        {
            let newSubscriptions : core.DartMap<string,async.DartStreamSubscription<any>> = new core.DartMap<string,async.DartStreamSubscription<any>>();
            for(let includedPath of includedPaths) {
                let resource : any = this.resourceProvider.getResource(includedPath);
                if (is(resource, any)) {
                    let subscription : async.DartStreamSubscription<any> = this.watchSubscriptions.remove(includedPath);
                    if (op(Op.EQUALS,subscription,null)) {
                        subscription = resource.changes.listen(this._handleWatchEvent.bind(this));
                    }
                    newSubscriptions.set(includedPath,subscription);
                }
                this._cancelCurrentWatchSubscriptions();
                this.watchSubscriptions = newSubscriptions;
            }
        }
        if (op(Op.EQUALS,this.context,null)) {
            this.context = this.callbacks.addContext(this.contextFolder,this.defaultContextOptions);
            let changeSet : any = this._buildChangeSet({
                added : this._includedFiles(includedPaths,excludedPaths)});
            this.callbacks.applyChangesToContext(this.contextFolder,changeSet);
        }else {
            let oldFiles : core.DartList<any> = this._includedFiles(this.includedPaths,this.excludedPaths);
            let newFiles : core.DartList<any> = this._includedFiles(includedPaths,excludedPaths);
            let changeSet : any = this._buildChangeSet({
                added : SingleContextManager._diff(newFiles,oldFiles),removed : SingleContextManager._diff(oldFiles,newFiles)});
            this.callbacks.applyChangesToContext(this.contextFolder,changeSet);
        }
        this.includedPaths = includedPaths;
        this.excludedPaths = excludedPaths;
    }
    _addFilesInResource(addedFiles : core.DartList<any>,resource : any,excludedPaths : core.DartList<string>) : void {
        if (this._isImplicitlyExcludedResource(resource)) {
            return;
        }
        let path : string = resource.path;
        if (this._isEqualOrWithinAny(excludedPaths,path)) {
            return;
        }
        if (is(resource, any)) {
            if (this._matchesAnyAnalyzedFilesGlob(path) && resource.exists) {
                addedFiles.add(resource);
            }
        }else if (is(resource, any)) {
            for(let child of SingleContextManager._getChildrenSafe(resource)) {
                this._addFilesInResource(addedFiles,child,excludedPaths);
            }
        }
    }
    _buildChangeSet(_namedArguments? : {added? : core.DartList<any>,removed? : core.DartList<any>}) : any {
        let {added,removed} = Object.assign({
        }, _namedArguments );
        let changeSet : any = new bare.createInstance(any,null);
        if (added != null) {
            for(let file of added) {
                let source : any = SingleContextManager.createSourceInContext(this.context,file);
                changeSet.addedSource(source);
            }
        }
        if (removed != null) {
            for(let file of removed) {
                let source : any = SingleContextManager.createSourceInContext(this.context,file);
                changeSet.removedSource(source);
            }
        }
        return changeSet;
    }
    _cancelCurrentWatchSubscriptions() : void {
        for(let subscription of this.watchSubscriptions.values) {
            subscription.cancel();
        }
        this.watchSubscriptions.clear();
    }
    _commonPrefix(paths : core.DartList<string>) : string {
        if (paths.isEmpty) {
            return '';
        }
        let left : core.DartList<string> = this.pathContext.split(paths[0]);
        let count : number = left.length;
        for(let i : number = 1; i < paths.length; i++){
            let right : core.DartList<string> = this.pathContext.split(paths[i]);
            count = SingleContextManager._commonComponents(left,count,right);
        }
        return this.pathContext.joinAll(left.sublist(0,count));
    }
    _existingResources(pathList : core.DartList<string>) : core.DartList<any> {
        let resources : core.DartList<any> = new core.DartList.literal<any>();
        for(let path of pathList) {
            let resource : any = this.resourceProvider.getResource(path);
            if (is(resource, any)) {
                resources.add(resource);
            }else if (!resource.exists) {
            }else if (is(resource, any)) {
                resources.add(resource);
            }else {
                throw new core.UnimplementedError(`${path} is not a folder. ` + 'Only support for file and folder analysis is implemented.');
            }
        }
        return resources;
    }
    _handleWatchEvent(event : any) : void {
        let path : string = event.path;
        if (this._isExcludedPath(path)) {
            return;
        }
        if (!this._isContainedIn(this.includedPaths,path)) {
            return;
        }
        switch (event.type) {
            case ChangeType.ADD:
                let resource : any = this.resourceProvider.getResource(path);
                if (is(resource, any)) {
                    if (this._matchesAnyAnalyzedFilesGlob(path)) {
                        this.callbacks.applyChangesToContext(this.contextFolder,this._buildChangeSet({
                            added : new core.DartList.literal<any>(resource)}));
                    }
                }
                break;
            case ChangeType.REMOVE:
                let sources : core.DartList<any> = this.context.getSourcesWithFullName(path);
                if (!sources.isEmpty) {
                    let changeSet : any = new bare.createInstance(any,null);
                    sources.forEach(changeSet.removedSource);
                    this.callbacks.applyChangesToContext(this.contextFolder,changeSet);
                }
                break;
            case ChangeType.MODIFY:
                let sources : core.DartList<any> = this.context.getSourcesWithFullName(path);
                if (!sources.isEmpty) {
                    let changeSet : any = new bare.createInstance(any,null);
                    sources.forEach(changeSet.changedSource);
                    this.callbacks.applyChangesToContext(this.contextFolder,changeSet);
                }
                break;
        }
    }
    _includedFiles(includedPaths : core.DartList<string>,excludedPaths : core.DartList<string>) : core.DartList<any> {
        let includedResources : core.DartList<any> = this._existingResources(includedPaths);
        let includedFiles : core.DartList<any> = new core.DartList.literal<any>();
        for(let resource of includedResources) {
            this._addFilesInResource(includedFiles,resource,excludedPaths);
        }
        return includedFiles;
    }
    _isContainedIn(pathList : core.DartList<string>,path : string) : boolean {
        for(let pathInList of pathList) {
            if (this._isEqualOrWithin(pathInList,path)) {
                return true;
            }
        }
        return false;
    }
    _isEqualOrWithin(parent : string,child : string) : boolean {
        return child == parent || this.pathContext.isWithin(parent,child);
    }
    _isEqualOrWithinAny(parents : core.DartList<string>,child : string) : boolean {
        for(let parent of parents) {
            if (this._isEqualOrWithin(parent,child)) {
                return true;
            }
        }
        return false;
    }
    _isExcludedPath(path : string) : boolean {
        let parts : core.DartList<string> = this.resourceProvider.pathContext.split(path);
        for(let part of parts) {
            if (new core.DartString(part).startsWith('.')) {
                return true;
            }
        }
        if (this._isEqualOrWithinAny(this.excludedPaths,path)) {
            return true;
        }
        return false;
    }
    _isImplicitlyExcludedResource(resource : any) : boolean {
        let shortName : string = resource.shortName;
        if (new core.DartString(shortName).startsWith('.')) {
            return true;
        }
        return false;
    }
    _matchesAnyAnalyzedFilesGlob(path : string) : boolean {
        for(let glob of this.analyzedFilesGlobs) {
            if (glob.matches(path)) {
                return true;
            }
        }
        return false;
    }
    _nonOverlappingPaths(pathList : core.DartList<string>) : core.DartList<string> {
        let sortedPaths : core.DartList<string> = new core.DartList.from(pathList);
        sortedPaths.sort((a : any,b : any) =>  {
            return new core.DartString(a).length - new core.DartString(b).length;
        });
        let pathCount : number = sortedPaths.length;
        for(let i : number = pathCount - 1; i > 0; i--){
            let path : string = sortedPaths[i];
            for(let j : number = 0; j < i; j++){
                if (this._isEqualOrWithin(path,sortedPaths[j])) {
                    sortedPaths.removeAt(i);
                    break;
                }
            }
        }
        return sortedPaths;
    }
    _updateNormalizedPackageRoots() : void {
        this.normalizedPackageRoots = new core.DartMap.literal([
        ]);
        this.packageRoots.forEach((sourcePath : string,targetPath : string) =>  {
            let resource : any = this.resourceProvider.getResource(sourcePath);
            if (is(resource, any)) {
                this.normalizedPackageRoots.set(resource.path,targetPath);
            }
        });
    }
    static createSourceInContext(context : any,file : any) : any {
        let source : any = file.createSource();
        if (op(Op.EQUALS,context,null)) {
            return source;
        }
        let uri : lib4.Uri = context.sourceFactory.restoreUri(source);
        return file.createSource(uri);
    }
    static _commonComponents(left : core.DartList<string>,count : number,right : core.DartList<string>) : number {
        let max : number = math.min(count,right.length);
        for(let i : number = 0; i < max; i++){
            if (left[i] != right[i]) {
                return i;
            }
        }
        return max;
    }
    static _diff(left : core.DartList<any>,right : core.DartList<any>) : core.DartList<any> {
        let diff : core.DartList<any> = new core.DartList.from(left);
        for(let file of right) {
            diff.remove(file);
        }
        return diff;
    }
    static _getChildrenSafe(folder : any) : core.DartList<any> {
        try {
            return folder.getChildren();
        } catch (__error__) {

            if (is(__error__,any)){
                return new core.DartList.literal<any>();
            }
        }
    }
}

export class properties {
}
