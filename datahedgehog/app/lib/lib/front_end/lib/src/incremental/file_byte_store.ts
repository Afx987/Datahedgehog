/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/incremental/file_byte_store.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as isolate from "@dart2ts/dart/isolate";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export namespace CacheCleanUpRequest {
    export type Constructors = 'CacheCleanUpRequest';
    export type Interface = Omit<CacheCleanUpRequest, Constructors>;
}
@DartClass
export class CacheCleanUpRequest {
    cachePath : string;

    maxSizeBytes : number;

    replyTo : isolate.SendPort;

    constructor(cachePath : string,maxSizeBytes : number,replyTo : isolate.SendPort) {
    }
    @defaultConstructor
    CacheCleanUpRequest(cachePath : string,maxSizeBytes : number,replyTo : isolate.SendPort) {
        this.cachePath = cachePath;
        this.maxSizeBytes = maxSizeBytes;
        this.replyTo = replyTo;
    }
}

export namespace EvictingFileByteStore {
    export type Constructors = 'EvictingFileByteStore';
    export type Interface = Omit<EvictingFileByteStore, Constructors>;
}
@DartClass
@Implements(any)
export class EvictingFileByteStore implements any.Interface {
    private static __$_cleanUpSendPortShouldBePrepared : boolean;
    static get _cleanUpSendPortShouldBePrepared() : boolean { 
        if (this.__$_cleanUpSendPortShouldBePrepared===undefined) {
            this.__$_cleanUpSendPortShouldBePrepared = true;
        }
        return this.__$_cleanUpSendPortShouldBePrepared;
    }
    static set _cleanUpSendPortShouldBePrepared(__$value : boolean)  { 
        this.__$_cleanUpSendPortShouldBePrepared = __$value;
    }

    private static __$_cleanUpSendPort : isolate.SendPort;
    static get _cleanUpSendPort() : isolate.SendPort { 
        return this.__$_cleanUpSendPort;
    }
    static set _cleanUpSendPort(__$value : isolate.SendPort)  { 
        this.__$_cleanUpSendPort = __$value;
    }

    _cachePath : string;

    _maxSizeBytes : number;

    _fileByteStore : FileByteStore;

    _bytesWrittenSinceCleanup : number;

    _evictionIsolateIsRunning : boolean;

    constructor(_cachePath : string,_maxSizeBytes : number) {
    }
    @defaultConstructor
    EvictingFileByteStore(_cachePath : string,_maxSizeBytes : number) {
        this._bytesWrittenSinceCleanup = 0;
        this._evictionIsolateIsRunning = false;
        this._fileByteStore = new FileByteStore(_cachePath);
        this._cachePath = _cachePath;
        this._maxSizeBytes = _maxSizeBytes;
        this._requestCacheCleanUp();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(key : string) : core.DartList<number> {
        return this._fileByteStore.get(key);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    put(key : string,bytes : core.DartList<number>) : void {
        this._fileByteStore.put(key,bytes);
        this._bytesWrittenSinceCleanup += bytes.length;
        if (this._bytesWrittenSinceCleanup > op(Op.QUOTIENT,this._maxSizeBytes,8)) {
            this._requestCacheCleanUp();
        }
    }
    _requestCacheCleanUp() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (EvictingFileByteStore._cleanUpSendPortShouldBePrepared) {
                EvictingFileByteStore._cleanUpSendPortShouldBePrepared = false;
                let response : isolate.ReceivePort = new isolate.ReceivePort();
                await isolate.Isolate.spawn(EvictingFileByteStore._cacheCleanUpFunction.bind(this),response.sendPort);
                EvictingFileByteStore._cleanUpSendPort = await response.first as isolate.SendPort;
            }else {
                while (op(Op.EQUALS,EvictingFileByteStore._cleanUpSendPort,null)){
                    await new async.Future.delayed(new core.DartDuration({
                        milliseconds : 100}),() =>  {
                    });
                }
            }
            if (!this._evictionIsolateIsRunning) {
                this._evictionIsolateIsRunning = true;
                try {
                    let response : isolate.ReceivePort = new isolate.ReceivePort();
                    EvictingFileByteStore._cleanUpSendPort.send(new CacheCleanUpRequest(this._cachePath,this._maxSizeBytes,response.sendPort));
                    await response.first;
                } finally {
                    this._evictionIsolateIsRunning = false;
                    this._bytesWrittenSinceCleanup = 0;
                }
            }
        } )());
    }

    static _cacheCleanUpFunction(initialReplyTo : isolate.SendPort) : void {
        let port : isolate.ReceivePort = new isolate.ReceivePort();
        initialReplyTo.send(port.sendPort);
        port.listen((request : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            if (is(request, CacheCleanUpRequest)) {
                await EvictingFileByteStore._cleanUpFolder(request.cachePath,request.maxSizeBytes);
                request.replyTo.send(true);
            }
        })()));
    }
    static _cleanUpFolder(cachePath : string,maxSizeBytes : number) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let files : core.DartList<io.File> = new core.DartList.literal<io.File>();
            let fileStatMap : core.DartMap<io.File,io.FileStat> = new core.DartMap.literal([
            ]);
            let currentSizeBytes : number = 0;
            let resources : core.DartList<io.FileSystemEntity> = new io.Directory(cachePath).listSync();
            for(let resource of resources) {
                if (is(resource, io.File)) {
                    try {
                        let fileStat : io.FileStat = await resource.stat();
                        files.add(resource);
                        fileStatMap.set(resource,fileStat);
                        currentSizeBytes += fileStat.size;
                    } catch (__error__) {

                        {
                            let _ = __error__;
                        }
                    }
                }
            }
            files.sort((a : any,b : any) =>  {
                return fileStatMap.get(a).accessed.millisecondsSinceEpoch - fileStatMap.get(b).accessed.millisecondsSinceEpoch;
            });
            for(let file of files) {
                if (currentSizeBytes < maxSizeBytes) {
                    break;
                }
                try {
                    await file.delete();
                } catch (__error__) {

                    {
                        let _ = __error__;
                    }
                }
                currentSizeBytes -= fileStatMap.get(file).size;
            }
        } )());
    }

}

export namespace FileByteStore {
    export type Constructors = 'FileByteStore';
    export type Interface = Omit<FileByteStore, Constructors>;
}
@DartClass
@Implements(any)
export class FileByteStore implements any.Interface {
    _cachePath : string;

    _tempName : string;

    constructor(_cachePath : string) {
    }
    @defaultConstructor
    FileByteStore(_cachePath : string) {
        this._tempName = `temp_${io.properties.pid}`;
        this._cachePath = _cachePath;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(key : string) : core.DartList<number> {
        try {
            return this._getFileForKey(key).readAsBytesSync();
        } catch (__error__) {

            {
                let _ = __error__;
                return null;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    put(key : string,bytes : core.DartList<number>) : void {
        try {
            let tempFile : io.File = this._getFileForKey(this._tempName);
            tempFile.writeAsBytesSync(bytes,{
                flush : true});
            let file : io.File = this._getFileForKey(key);
            tempFile.renameSync(file.path);
        } catch (__error__) {

            {
                let _ = __error__;
            }
        }
    }
    _getFileForKey(key : string) : io.File {
        return new io.File(lib5.join(this._cachePath,key));
    }
}

export class properties {
}
