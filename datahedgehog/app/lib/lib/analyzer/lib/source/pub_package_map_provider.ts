/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/pub_package_map_provider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";
import * as collection from "@dart2ts/dart/core";

export namespace PubPackageMapProvider {
    export type Constructors = 'PubPackageMapProvider';
    export type Interface = Omit<PubPackageMapProvider, Constructors>;
}
@DartClass
@Implements(any)
export class PubPackageMapProvider implements any.Interface {
    private static __$PUB_LIST_COMMAND : string;
    static get PUB_LIST_COMMAND() : string { 
        if (this.__$PUB_LIST_COMMAND===undefined) {
            this.__$PUB_LIST_COMMAND = 'list-package-dirs';
        }
        return this.__$PUB_LIST_COMMAND;
    }

    private static __$PUBSPEC_LOCK_NAME : string;
    static get PUBSPEC_LOCK_NAME() : string { 
        if (this.__$PUBSPEC_LOCK_NAME===undefined) {
            this.__$PUBSPEC_LOCK_NAME = 'pubspec.lock';
        }
        return this.__$PUBSPEC_LOCK_NAME;
    }

    resourceProvider : any;

    sdk : any;

    _runPubList : (folder : any) => io.ProcessResult;

    constructor(resourceProvider : any,sdk : any,_runPubList? : (folder : any) => io.ProcessResult) {
    }
    @defaultConstructor
    PubPackageMapProvider(resourceProvider : any,sdk : any,_runPubList? : (folder : any) => io.ProcessResult) {
        this.resourceProvider = resourceProvider;
        this.sdk = sdk;
        this._runPubList = _runPubList;
        if (op(Op.EQUALS,this._runPubList,null)) {
            this._runPubList = this._runPubListDefault.bind(this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computePackageMap(folder : any) : any {
        {
            let lockPath : string = this.getPubspecLockPath(folder);
            if (!this.resourceProvider.getFile(lockPath).exists) {
                return this.computePackageMapError(folder);
            }
        }
        let result : io.ProcessResult;
        try {
            result = this._runPubList(folder);
        } catch (__error__) {

            if (is(__error__,io.ProcessException)){
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception : io.ProcessException = __error__;
                AnalysisEngine.instance.logger.logInformation(`Error running pub ${PubPackageMapProvider.PUB_LIST_COMMAND}\n${exception}\n${stackTrace}`);
            }
        }
        if (op(Op.EQUALS,result,null) || result.exitCode != 0) {
            let exitCode : string = result != null ? `exit code ${result.exitCode}` : 'null';
            AnalysisEngine.instance.logger.logInformation(`pub ${PubPackageMapProvider.PUB_LIST_COMMAND} failed: ${exitCode}`);
            return this.computePackageMapError(folder);
        }
        try {
            let packageMap : any = this.parsePackageMap(convert.properties.JSON.decode(result.stdout),folder);
            return packageMap;
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logError(`Malformed output from pub ${PubPackageMapProvider.PUB_LIST_COMMAND}\n${exception}\n${stackTrace}`);
            }
        }
        return this.computePackageMapError(folder);
    }
    computePackageMapError(folder : any) : any {
        let lockPath : string = this.getPubspecLockPath(folder);
        let dependencies : core.DartList<string> = new core.DartList.literal<string>(lockPath);
        return new bare.createInstance(any,null,null,dependencies.toSet());
    }
    getPubspecLockPath(folder : any) : string {
        return this.resourceProvider.pathContext.join(folder.path,PubPackageMapProvider.PUBSPEC_LOCK_NAME);
    }
    parsePackageMap(obj : core.DartMap<any,any>,folder : any) : any {
        let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartHashMap<string,core.DartList<any>>();
        let packages : core.DartMap<any,any> = obj.get('packages');
        var processPaths : (packageName : string,paths : core.DartList<any>) => any = (packageName : string,paths : core.DartList<any>) =>  {
            let folders : core.DartList<any> = new core.DartList.literal<any>();
            for(let path of paths) {
                if (is(path, "string")) {
                    let resource : any = folder.getChildAssumingFolder(path);
                    if (is(resource, any)) {
                        folders.add(resource);
                    }
                }
            }
            if (folders.isNotEmpty) {
                op(Op.INDEX_ASSIGN,packageMap,packageName,folders);
            }
        };
        packages.forEach((key : any,value : any) =>  {
            if (is(value, "string")) {
                processPaths(key,new core.DartList.literal(value));
            }else if (is(value, core.DartList<any>)) {
                processPaths(key,value);
            }
        });
        let dependencies : core.DartSet<string> = new core.DartSet<string>();
        let inputFiles : core.DartList<any> = obj.get('input_files');
        if (inputFiles != null) {
            for(let path of inputFiles) {
                if (is(path, "string")) {
                    dependencies.add(folder.canonicalizePath(path));
                }
            }
        }
        return new bare.createInstance(any,null,packageMap,dependencies);
    }
    _runPubListDefault(folder : any) : io.ProcessResult {
        let executablePath : string = this.sdk.pubExecutable.path;
        let arguments : core.DartList<string> = new core.DartList.literal(PubPackageMapProvider.PUB_LIST_COMMAND);
        let workingDirectory : string = folder.path;
        let subprocessId : number = AnalysisEngine.instance.instrumentationService.logSubprocessStart(executablePath,arguments,workingDirectory);
        let result : io.ProcessResult = io.Process.runSync(executablePath,arguments,{
            workingDirectory : workingDirectory});
        AnalysisEngine.instance.instrumentationService.logSubprocessResult(subprocessId,result.exitCode,result.stdout,result.stderr);
        return result;
    }
}

export class properties {
}
