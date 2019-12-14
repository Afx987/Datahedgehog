/** Library asset:datahedgehog_monitor/lib/lib/_internal/js_runtime/lib/io_patch.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace _Directory {
    export type Constructors = '_Directory';
    export type Interface = Omit<_Directory, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _Directory {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _current() {
        throw new core.UnsupportedError("Directory._current");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _setCurrent(path : any) {
        throw new core.UnsupportedError("Directory_SetCurrent");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _createTemp(path : string) {
        throw new core.UnsupportedError("Directory._createTemp");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _systemTemp() : string {
        throw new core.UnsupportedError("Directory._systemTemp");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _exists(path : string) {
        throw new core.UnsupportedError("Directory._exists");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _create(path : string) {
        throw new core.UnsupportedError("Directory._create");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _deleteNative(path : string,recursive : boolean) {
        throw new core.UnsupportedError("Directory._deleteNative");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _rename(path : string,newPath : string) {
        throw new core.UnsupportedError("Directory._rename");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _fillWithDirectoryListing(list : core.DartList<FileSystemEntity>,path : string,recursive : boolean,followLinks : boolean) : void {
        throw new core.UnsupportedError("Directory._fillWithDirectoryListing");
    }
    constructor() {
    }
    @defaultConstructor
    _Directory() {
    }
}

export namespace _AsyncDirectoryListerOps {
    export type Constructors = never;
    export type Interface = Omit<_AsyncDirectoryListerOps, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _AsyncDirectoryListerOps {
    constructor(pointer : number) {
    }
    @defaultFactory
    static $_AsyncDirectoryListerOps(pointer : number) : _AsyncDirectoryListerOps {
        throw new core.UnsupportedError("Directory._list");
    }
}

export namespace _EventHandler {
    export type Constructors = '_EventHandler';
    export type Interface = Omit<_EventHandler, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _EventHandler {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _sendData(sender : core.DartObject,sendPort : any,data : number) : void {
        throw new core.UnsupportedError("EventHandler._sendData");
    }
    constructor() {
    }
    @defaultConstructor
    _EventHandler() {
    }
}

export namespace FileStat {
    export type Constructors = 'FileStat';
    export type Interface = Omit<FileStat, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class FileStat {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _statSync(path : string) {
        throw new core.UnsupportedError("FileStat.stat");
    }
    constructor() {
    }
    @defaultConstructor
    FileStat() {
    }
}

export namespace FileSystemEntity {
    export type Constructors = 'FileSystemEntity';
    export type Interface = Omit<FileSystemEntity, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class FileSystemEntity {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _getType(path : string,followLinks : boolean) {
        throw new core.UnsupportedError("FileSystemEntity._getType");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _identical(path1 : string,path2 : string) {
        throw new core.UnsupportedError("FileSystemEntity._identical");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _resolveSymbolicLinks(path : string) {
        throw new core.UnsupportedError("FileSystemEntity._resolveSymbolicLinks");
    }
    constructor() {
    }
    @defaultConstructor
    FileSystemEntity() {
    }
}

export namespace _File {
    export type Constructors = '_File';
    export type Interface = Omit<_File, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _File {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _exists(path : string) {
        throw new core.UnsupportedError("File._exists");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _create(path : string) {
        throw new core.UnsupportedError("File._create");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _createLink(path : string,target : string) {
        throw new core.UnsupportedError("File._createLink");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _linkTarget(path : string) {
        throw new core.UnsupportedError("File._linkTarget");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _deleteNative(path : string) {
        throw new core.UnsupportedError("File._deleteNative");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _deleteLinkNative(path : string) {
        throw new core.UnsupportedError("File._deleteLinkNative");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _rename(oldPath : string,newPath : string) {
        throw new core.UnsupportedError("File._rename");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _renameLink(oldPath : string,newPath : string) {
        throw new core.UnsupportedError("File._renameLink");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _copy(oldPath : string,newPath : string) {
        throw new core.UnsupportedError("File._copy");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _lengthFromPath(path : string) {
        throw new core.UnsupportedError("File._lengthFromPath");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _lastModified(path : string) {
        throw new core.UnsupportedError("File._lastModified");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _lastAccessed(path : string) {
        throw new core.UnsupportedError("File._lastAccessed");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _setLastModified(path : string,millis : number) {
        throw new core.UnsupportedError("File._setLastModified");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _setLastAccessed(path : string,millis : number) {
        throw new core.UnsupportedError("File._setLastAccessed");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _open(path : string,mode : number) {
        throw new core.UnsupportedError("File._open");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _openStdio(fd : number) : number {
        throw new core.UnsupportedError("File._openStdio");
    }
    constructor() {
    }
    @defaultConstructor
    _File() {
    }
}

export namespace _RandomAccessFileOps {
    export type Constructors = never;
    export type Interface = Omit<_RandomAccessFileOps, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _RandomAccessFileOps {
    constructor(pointer : number) {
    }
    @defaultFactory
    static $_RandomAccessFileOps(pointer : number) : _RandomAccessFileOps {
        throw new core.UnsupportedError("RandomAccessFile");
    }
}

export namespace _IOCrypto {
    export type Constructors = '_IOCrypto';
    export type Interface = Omit<_IOCrypto, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _IOCrypto {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static getRandomBytes(count : number) : any {
        throw new core.UnsupportedError("_IOCrypto.getRandomBytes");
    }
    constructor() {
    }
    @defaultConstructor
    _IOCrypto() {
    }
}

export namespace _Platform {
    export type Constructors = '_Platform';
    export type Interface = Omit<_Platform, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _Platform {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _numberOfProcessors() : number {
        throw new core.UnsupportedError("Platform._numberOfProcessors");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _pathSeparator() : string {
        throw new core.UnsupportedError("Platform._pathSeparator");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _operatingSystem() : string {
        throw new core.UnsupportedError("Platform._operatingSystem");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _localHostname() {
        throw new core.UnsupportedError("Platform._localHostname");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _executable() {
        throw new core.UnsupportedError("Platform._executable");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _resolvedExecutable() {
        throw new core.UnsupportedError("Platform._resolvedExecutable");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _executableArguments() : core.DartList<string> {
        throw new core.UnsupportedError("Platform._executableArguments");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _packageRoot() : string {
        throw new core.UnsupportedError("Platform._packageRoot");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _packageConfig() : string {
        throw new core.UnsupportedError("Platform._packageConfig");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _environment() {
        throw new core.UnsupportedError("Platform._environment");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _version() : string {
        throw new core.UnsupportedError("Platform._version");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _localeName() : string {
        throw new core.UnsupportedError("Platform._localeName");
    }
    constructor() {
    }
    @defaultConstructor
    _Platform() {
    }
}

export namespace _ProcessUtils {
    export type Constructors = '_ProcessUtils';
    export type Interface = Omit<_ProcessUtils, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _ProcessUtils {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _exit(status : number) : void {
        throw new core.UnsupportedError("ProcessUtils._exit");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _setExitCode(status : number) : void {
        throw new core.UnsupportedError("ProcessUtils._setExitCode");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _getExitCode() : number {
        throw new core.UnsupportedError("ProcessUtils._getExitCode");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _sleep(millis : number) : void {
        throw new core.UnsupportedError("ProcessUtils._sleep");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _pid(process : Process) : number {
        throw new core.UnsupportedError("ProcessUtils._pid");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _watchSignal(signal : any) : any {
        throw new core.UnsupportedError("ProcessUtils._watchSignal");
    }
    constructor() {
    }
    @defaultConstructor
    _ProcessUtils() {
    }
}

export namespace ProcessInfo {
    export type Constructors = 'ProcessInfo';
    export type Interface = Omit<ProcessInfo, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class ProcessInfo {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get currentRss() : number {
        throw new core.UnsupportedError("ProcessInfo.currentRss");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get maxRss() : number {
        throw new core.UnsupportedError("ProcessInfo.maxRss");
    }
    constructor() {
    }
    @defaultConstructor
    ProcessInfo() {
    }
}

export namespace Process {
    export type Constructors = 'Process';
    export type Interface = Omit<Process, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Process {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static start(executable : string,arguments : core.DartList<string>,_namedArguments? : {workingDirectory? : string,environment? : core.DartMap<string,string>,includeParentEnvironment? : boolean,runInShell? : boolean,mode? : any}) : any {
        let {workingDirectory,environment,includeParentEnvironment,runInShell,mode} = Object.assign({
            "includeParentEnvironment" : true,
            "runInShell" : false,
            "mode" : ProcessStartMode.NORMAL}, _namedArguments );
        throw new core.UnsupportedError("Process.start");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static run(executable : string,arguments : core.DartList<string>,_namedArguments? : {workingDirectory? : string,environment? : core.DartMap<string,string>,includeParentEnvironment? : boolean,runInShell? : boolean,stdoutEncoding? : any,stderrEncoding? : any}) : any {
        let {workingDirectory,environment,includeParentEnvironment,runInShell,stdoutEncoding,stderrEncoding} = Object.assign({
            "includeParentEnvironment" : true,
            "runInShell" : false,
            "stdoutEncoding" : SYSTEM_ENCODING,
            "stderrEncoding" : SYSTEM_ENCODING}, _namedArguments );
        throw new core.UnsupportedError("Process.run");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static runSync(executable : string,arguments : core.DartList<string>,_namedArguments? : {workingDirectory? : string,environment? : core.DartMap<string,string>,includeParentEnvironment? : boolean,runInShell? : boolean,stdoutEncoding? : any,stderrEncoding? : any}) : any {
        let {workingDirectory,environment,includeParentEnvironment,runInShell,stdoutEncoding,stderrEncoding} = Object.assign({
            "includeParentEnvironment" : true,
            "runInShell" : false,
            "stdoutEncoding" : SYSTEM_ENCODING,
            "stderrEncoding" : SYSTEM_ENCODING}, _namedArguments );
        throw new core.UnsupportedError("Process.runSync");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static killPid(pid : number,signal? : any) : boolean {
        signal = signal || ProcessSignal.SIGTERM;
        throw new core.UnsupportedError("Process.killPid");
    }
    constructor() {
    }
    @defaultConstructor
    Process() {
    }
}

export namespace InternetAddress {
    export type Constructors = never;
    export type Interface = Omit<InternetAddress, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class InternetAddress {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get LOOPBACK_IP_V4() : InternetAddress {
        throw new core.UnsupportedError("InternetAddress.LOOPBACK_IP_V4");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get LOOPBACK_IP_V6() : InternetAddress {
        throw new core.UnsupportedError("InternetAddress.LOOPBACK_IP_V6");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get ANY_IP_V4() : InternetAddress {
        throw new core.UnsupportedError("InternetAddress.ANY_IP_V4");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get ANY_IP_V6() : InternetAddress {
        throw new core.UnsupportedError("InternetAddress.ANY_IP_V6");
    }
    constructor(address : string) {
    }
    @defaultFactory
    static $InternetAddress(address : string) : InternetAddress {
        throw new core.UnsupportedError("InternetAddress");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static lookup(host : string,_namedArguments? : {type? : any}) : any {
        let {type} = Object.assign({
            "type" : InternetAddressType.ANY}, _namedArguments );
        throw new core.UnsupportedError("InternetAddress.lookup");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _cloneWithNewHost(address : InternetAddress,host : string) : InternetAddress {
        throw new core.UnsupportedError("InternetAddress._cloneWithNewHost");
    }
}

export namespace NetworkInterface {
    export type Constructors = 'NetworkInterface';
    export type Interface = Omit<NetworkInterface, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class NetworkInterface {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get listSupported() : boolean {
        throw new core.UnsupportedError("NetworkInterface.listSupported");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static list(_namedArguments? : {includeLoopback? : boolean,includeLinkLocal? : boolean,type? : any}) : any {
        let {includeLoopback,includeLinkLocal,type} = Object.assign({
            "includeLoopback" : false,
            "includeLinkLocal" : false,
            "type" : InternetAddressType.ANY}, _namedArguments );
        throw new core.UnsupportedError("NetworkInterface.list");
    }
    constructor() {
    }
    @defaultConstructor
    NetworkInterface() {
    }
}

export namespace RawServerSocket {
    export type Constructors = 'RawServerSocket';
    export type Interface = Omit<RawServerSocket, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class RawServerSocket {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static bind(address : any,port : number,_namedArguments? : {backlog? : number,v6Only? : boolean,shared? : boolean}) : any {
        let {backlog,v6Only,shared} = Object.assign({
            "backlog" : 0,
            "v6Only" : false,
            "shared" : false}, _namedArguments );
        throw new core.UnsupportedError("RawServerSocket.bind");
    }
    constructor() {
    }
    @defaultConstructor
    RawServerSocket() {
    }
}

export namespace ServerSocket {
    export type Constructors = 'ServerSocket';
    export type Interface = Omit<ServerSocket, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class ServerSocket {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static bind(address : any,port : number,_namedArguments? : {backlog? : number,v6Only? : boolean,shared? : boolean}) : any {
        let {backlog,v6Only,shared} = Object.assign({
            "backlog" : 0,
            "v6Only" : false,
            "shared" : false}, _namedArguments );
        throw new core.UnsupportedError("ServerSocket.bind");
    }
    constructor() {
    }
    @defaultConstructor
    ServerSocket() {
    }
}

export namespace RawSocket {
    export type Constructors = 'RawSocket';
    export type Interface = Omit<RawSocket, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class RawSocket {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static connect(host : any,port : number,_namedArguments? : {sourceAddress? : any}) : any {
        let {sourceAddress} = Object.assign({
        }, _namedArguments );
        throw new core.UnsupportedError("RawSocket constructor");
    }
    constructor() {
    }
    @defaultConstructor
    RawSocket() {
    }
}

export namespace Socket {
    export type Constructors = 'Socket';
    export type Interface = Omit<Socket, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Socket {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static connect(host : any,port : number,_namedArguments? : {sourceAddress? : any}) : any {
        let {sourceAddress} = Object.assign({
        }, _namedArguments );
        throw new core.UnsupportedError("Socket constructor");
    }
    constructor() {
    }
    @defaultConstructor
    Socket() {
    }
}

export namespace SecureSocket {
    export type Constructors = never;
    export type Interface = Omit<SecureSocket, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class SecureSocket {
    @namedFactory
    static $_(rawSocket : any) : SecureSocket {
        throw new core.UnsupportedError("SecureSocket constructor");
    }
    static _ : new(rawSocket : any) => SecureSocket;

}

export namespace RawSynchronousSocket {
    export type Constructors = 'RawSynchronousSocket';
    export type Interface = Omit<RawSynchronousSocket, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class RawSynchronousSocket {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static connectSync(host : any,port : number) : RawSynchronousSocket {
        throw new core.UnsupportedError("RawSynchronousSocket.connectSync");
    }
    constructor() {
    }
    @defaultConstructor
    RawSynchronousSocket() {
    }
}

export namespace SecurityContext {
    export type Constructors = never;
    export type Interface = Omit<SecurityContext, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class SecurityContext {
    constructor(_namedArguments? : {withTrustedRoots? : boolean}) {
    }
    @defaultFactory
    static $SecurityContext(_namedArguments? : {withTrustedRoots? : boolean}) : SecurityContext {
        let {withTrustedRoots} = Object.assign({
            "withTrustedRoots" : false}, _namedArguments );
        throw new core.UnsupportedError("SecurityContext constructor");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get defaultContext() : SecurityContext {
        throw new core.UnsupportedError("default SecurityContext getter");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get alpnSupported() : boolean {
        throw new core.UnsupportedError("SecurityContext alpnSupported getter");
    }
}

export namespace X509Certificate {
    export type Constructors = never;
    export type Interface = Omit<X509Certificate, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class X509Certificate {
    @namedFactory
    static $_() : X509Certificate {
        throw new core.UnsupportedError("X509Certificate constructor");
    }
    static _ : new() => X509Certificate;

}

export namespace RawDatagramSocket {
    export type Constructors = 'RawDatagramSocket';
    export type Interface = Omit<RawDatagramSocket, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class RawDatagramSocket {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static bind(host : any,port : number,_namedArguments? : {reuseAddress? : boolean}) : any {
        let {reuseAddress} = Object.assign({
            "reuseAddress" : true}, _namedArguments );
        throw new core.UnsupportedError("RawDatagramSocket.bind");
    }
    constructor() {
    }
    @defaultConstructor
    RawDatagramSocket() {
    }
}

export namespace _SecureFilter {
    export type Constructors = never;
    export type Interface = Omit<_SecureFilter, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _SecureFilter {
    constructor() {
    }
    @defaultFactory
    static $_SecureFilter() : _SecureFilter {
        throw new core.UnsupportedError("_SecureFilter._SecureFilter");
    }
}

export namespace _StdIOUtils {
    export type Constructors = '_StdIOUtils';
    export type Interface = Omit<_StdIOUtils, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _StdIOUtils {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _getStdioInputStream() : Stdin {
        throw new core.UnsupportedError("StdIOUtils._getStdioInputStream");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _getStdioOutputStream(fd : number) {
        throw new core.UnsupportedError("StdIOUtils._getStdioOutputStream");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _socketType(socket : Socket) : number {
        throw new core.UnsupportedError("StdIOUtils._socketType");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _getStdioHandleType(fd : number) {
        throw new core.UnsupportedError("StdIOUtils._getStdioHandleType");
    }
    constructor() {
    }
    @defaultConstructor
    _StdIOUtils() {
    }
}

export namespace _WindowsCodePageDecoder {
    export type Constructors = '_WindowsCodePageDecoder';
    export type Interface = Omit<_WindowsCodePageDecoder, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _WindowsCodePageDecoder {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _decodeBytes(bytes : core.DartList<number>) : string {
        throw new core.UnsupportedError("_WindowsCodePageDecoder._decodeBytes");
    }
    constructor() {
    }
    @defaultConstructor
    _WindowsCodePageDecoder() {
    }
}

export namespace _WindowsCodePageEncoder {
    export type Constructors = '_WindowsCodePageEncoder';
    export type Interface = Omit<_WindowsCodePageEncoder, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _WindowsCodePageEncoder {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _encodeString(string : string) : core.DartList<number> {
        throw new core.UnsupportedError("_WindowsCodePageEncoder._encodeString");
    }
    constructor() {
    }
    @defaultConstructor
    _WindowsCodePageEncoder() {
    }
}

export namespace _Filter {
    export type Constructors = '_Filter';
    export type Interface = Omit<_Filter, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _Filter {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _newZLibDeflateFilter(gzip : boolean,level : number,windowBits : number,memLevel : number,strategy : number,dictionary : core.DartList<number>,raw : boolean) : _Filter {
        throw new core.UnsupportedError("_newZLibDeflateFilter");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _newZLibInflateFilter(windowBits : number,dictionary : core.DartList<number>,raw : boolean) : _Filter {
        throw new core.UnsupportedError("_newZLibInflateFilter");
    }
    constructor() {
    }
    @defaultConstructor
    _Filter() {
    }
}

export namespace Stdin {
    export type Constructors = 'Stdin';
    export type Interface = Omit<Stdin, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Stdin {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    readByteSync() : number {
        throw new core.UnsupportedError("Stdin.readByteSync");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    get echoMode() : boolean {
        throw new core.UnsupportedError("Stdin.echoMode");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    set echoMode(enabled : boolean) {
        throw new core.UnsupportedError("Stdin.echoMode");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    get lineMode() : boolean {
        throw new core.UnsupportedError("Stdin.lineMode");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    set lineMode(enabled : boolean) {
        throw new core.UnsupportedError("Stdin.lineMode");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    get supportsAnsiEscapes() : boolean {
        throw new core.UnsupportedError("Stdin.supportsAnsiEscapes");
    }
    constructor() {
    }
    @defaultConstructor
    Stdin() {
    }
}

export namespace Stdout {
    export type Constructors = 'Stdout';
    export type Interface = Omit<Stdout, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Stdout {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    _hasTerminal(fd : number) : boolean {
        throw new core.UnsupportedError("Stdout.hasTerminal");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    _terminalColumns(fd : number) : number {
        throw new core.UnsupportedError("Stdout.terminalColumns");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    _terminalLines(fd : number) : number {
        throw new core.UnsupportedError("Stdout.terminalLines");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _supportsAnsiEscapes(fd : number) : boolean {
        throw new core.UnsupportedError("Stdout.supportsAnsiEscapes");
    }
    constructor() {
    }
    @defaultConstructor
    Stdout() {
    }
}

export namespace _FileSystemWatcher {
    export type Constructors = '_FileSystemWatcher';
    export type Interface = Omit<_FileSystemWatcher, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _FileSystemWatcher {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _watch(path : string,events : number,recursive : boolean) : any {
        throw new core.UnsupportedError("_FileSystemWatcher.watch");
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get isSupported() : boolean {
        throw new core.UnsupportedError("_FileSystemWatcher.isSupported");
    }
    constructor() {
    }
    @defaultConstructor
    _FileSystemWatcher() {
    }
}

export namespace _IOService {
    export type Constructors = '_IOService';
    export type Interface = Omit<_IOService, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class _IOService {
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static _dispatch(request : number,data : core.DartList<any>) : any {
        throw new core.UnsupportedError("_IOService._dispatch");
    }
    constructor() {
    }
    @defaultConstructor
    _IOService() {
    }
}

export class properties {
}
