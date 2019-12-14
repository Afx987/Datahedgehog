/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/plugin_watcher.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace PluginWatcher {
    export type Constructors = 'PluginWatcher';
    export type Interface = Omit<PluginWatcher, Constructors>;
}
@DartClass
@Implements(any)
export class PluginWatcher implements any.Interface {
    resourceProvider : any;

    manager : any;

    _locator : any;

    _driverInfo : core.DartMap<any,_DriverInfo>;

    constructor(resourceProvider : any,manager : any) {
    }
    @defaultConstructor
    PluginWatcher(resourceProvider : any,manager : any) {
        this._driverInfo = new core.DartMap.literal([
        ]);
        this._locator = new bare.createInstance(any,null,resourceProvider);
        this.resourceProvider = resourceProvider;
        this.manager = manager;
    }
    addedDriver(driver : any,contextRoot : any) : void {
        this._driverInfo.set(driver,new _DriverInfo(contextRoot,new core.DartList.literal<string>(contextRoot.root,this._getSdkPath(driver))));
        driver.fsState.knownFilesSetChanges.listen((change : any) =>  {
            let addedPluginPaths : core.DartList<string> = this._checkPluginsFor(driver,change);
            for(let pluginPath of addedPluginPaths) {
                this.manager.addPluginToContextRoot(contextRoot,pluginPath);
            }
        });
    }
    removedDriver(driver : any) : void {
        let info : _DriverInfo = this._driverInfo.get(driver);
        if (op(Op.EQUALS,info,null)) {
            throw new core.StateError('Cannot remove a driver that was not added');
        }
        this.manager.removedContextRoot(info.contextRoot);
        this._driverInfo.remove(driver);
    }
    _checkPluginsFor(driver : any,change : any) : core.DartList<string> {
        let info : _DriverInfo = this._driverInfo.get(driver);
        if (op(Op.EQUALS,info,null)) {
            return new core.DartList.literal<string>();
        }
        let packageRoots : core.DartList<string> = info.packageRoots;
        let fileSystemState : any = driver.fsState;
        let context : any = this.resourceProvider.absolutePathContext;
        var isInRoot : (path : string) => boolean = (path : string) : boolean =>  {
            for(let root of packageRoots) {
                if (context.isWithin(root,path)) {
                    return true;
                }
            }
            return false;
        };
        var getPackageRoot : (path : string,uri : lib3.Uri) => string = (path : string,uri : lib3.Uri) : string =>  {
            let segments : core.DartList<string> = uri.pathSegments.toList();
            segments[0] = 'lib';
            let suffix : string = this.resourceProvider.pathContext.joinAll(segments);
            return new core.DartString(path).substring(0,new core.DartString(path).length - new core.DartString(suffix).length - 1);
        };
        let addedPluginPaths : core.DartList<string> = new core.DartList.literal<string>();
        for(let path of change.added) {
            let state : any = fileSystemState.getFileForPath(path);
            if (!isInRoot(path)) {
                let uri : lib3.Uri = state.uri;
                if (PackageMapUriResolver.isPackageUri(uri)) {
                    let packageRoot : string = getPackageRoot(path,uri);
                    packageRoots.add(packageRoot);
                    let pluginPath : string = this._locator.findPlugin(packageRoot);
                    if (pluginPath != null) {
                        addedPluginPaths.add(pluginPath);
                    }
                }
            }
        }
        return addedPluginPaths;
    }
    _getSdkPath(driver : any) : string {
        let context : any = this.resourceProvider.absolutePathContext;
        let sdkRoot : string = driver.sourceFactory.forUri('dart:core').fullName;
        while (context.basename(sdkRoot) != 'lib'){
            let parent : string = context.dirname(sdkRoot);
            if (parent == sdkRoot) {
                break;
            }
            sdkRoot = parent;
        }
        return sdkRoot;
    }
}

export namespace _DriverInfo {
    export type Constructors = '_DriverInfo';
    export type Interface = Omit<_DriverInfo, Constructors>;
}
@DartClass
export class _DriverInfo {
    contextRoot : any;

    packageRoots : core.DartList<string>;

    constructor(contextRoot : any,packageRoots : core.DartList<string>) {
    }
    @defaultConstructor
    _DriverInfo(contextRoot : any,packageRoots : core.DartList<string>) {
        this.contextRoot = contextRoot;
        this.packageRoots = packageRoots;
    }
}

export class properties {
}
