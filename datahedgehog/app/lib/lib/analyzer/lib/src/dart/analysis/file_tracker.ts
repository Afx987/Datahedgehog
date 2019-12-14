/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/file_tracker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace FileTracker {
    export type Constructors = 'FileTracker';
    export type Interface = Omit<FileTracker, Constructors>;
}
@DartClass
export class FileTracker {
    _changeHook : () => void;

    _logger : any;

    _fsState : any;

    addedFiles;

    _changedFiles;

    _pendingChangedFiles;

    _pendingImportFiles;

    _pendingErrorFiles;

    _pendingFiles;

    constructor(_logger : any,_fsState : any,_changeHook : () => void) {
    }
    @defaultConstructor
    FileTracker(_logger : any,_fsState : any,_changeHook : () => void) {
        this.addedFiles = new core.DartLinkedHashSet<string>();
        this._changedFiles = new core.DartLinkedHashSet<string>();
        this._pendingChangedFiles = new core.DartLinkedHashSet<string>();
        this._pendingImportFiles = new core.DartLinkedHashSet<string>();
        this._pendingErrorFiles = new core.DartLinkedHashSet<string>();
        this._pendingFiles = new core.DartLinkedHashSet<string>();
        this._logger = _logger;
        this._fsState = _fsState;
        this._changeHook = _changeHook;
    }
    get anyPendingFile() : string {
        if (this._pendingChangedFiles.isNotEmpty) {
            return this._pendingChangedFiles.first;
        }
        if (this._pendingImportFiles.isNotEmpty) {
            return this._pendingImportFiles.first;
        }
        if (this._pendingErrorFiles.isNotEmpty) {
            return this._pendingErrorFiles.first;
        }
        return this._pendingFiles.first;
    }
    get hasChangedFiles() : boolean {
        return this._changedFiles.isNotEmpty;
    }
    get hasPendingChangedFiles() : boolean {
        return this._pendingChangedFiles.isNotEmpty;
    }
    get hasPendingErrorFiles() : boolean {
        return this._pendingErrorFiles.isNotEmpty;
    }
    get hasPendingFiles() : boolean {
        return this.hasPendingChangedFiles || this.hasPendingImportFiles || this.hasPendingErrorFiles || this._pendingFiles.isNotEmpty;
    }
    get hasPendingImportFiles() : boolean {
        return this._pendingImportFiles.isNotEmpty;
    }
    get numberOfPendingFiles() : number {
        return op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,this._pendingChangedFiles.length,this._pendingImportFiles.length),this._pendingErrorFiles.length),this._pendingFiles.length);
    }
    addFile(path : string) : void {
        this.addedFiles.add(path);
        this._pendingFiles.add(path);
        this._changeHook();
    }
    addFiles(paths : core.DartIterable<string>) : void {
        this.addedFiles.addAll(paths);
        this._pendingFiles.addAll(paths);
        this._changeHook();
    }
    changeFile(path : string) : void {
        this._changedFiles.add(path);
        if (this.addedFiles.contains(path)) {
            this._pendingChangedFiles.add(path);
        }
        this._changeHook();
    }
    fileWasAnalyzed(path : string) : void {
        this._pendingChangedFiles.remove(path);
        this._pendingImportFiles.remove(path);
        this._pendingErrorFiles.remove(path);
        this._pendingFiles.remove(path);
    }
    isFilePending(path : string) : boolean {
        return this._pendingChangedFiles.contains(path) || this._pendingImportFiles.contains(path) || this._pendingErrorFiles.contains(path) || this._pendingFiles.contains(path);
    }
    removeFile(path : string) : void {
        this.addedFiles.remove(path);
        this._pendingChangedFiles.remove(path);
        this._pendingImportFiles.remove(path);
        this._pendingErrorFiles.remove(path);
        this._pendingFiles.remove(path);
        this._fsState.removeFile(path);
        this._pendingFiles.addAll(this.addedFiles);
        this._changeHook();
    }
    verifyApiSignature(path : string) : any {
        return this._logger.run(`Verify API signature of ${path}`,() =>  {
            let anyApiChanged : boolean = false;
            let files : core.DartList<any> = this._fsState.getFilesForPath(path);
            for(let file of files) {
                let apiChanged : boolean = file.refresh();
                if (apiChanged) {
                    anyApiChanged = true;
                }
            }
            if (anyApiChanged) {
                this._logger.writeln(`API signatures mismatch found for ${path}`);
                let pendingChangedFiles = new core.DartLinkedHashSet<string>();
                let pendingImportFiles = new core.DartLinkedHashSet<string>();
                let pendingErrorFiles = new core.DartLinkedHashSet<string>();
                let pendingFiles = new core.DartLinkedHashSet<string>();
                if (this.addedFiles.contains(path)) {
                    pendingChangedFiles.add(path);
                }
                for(let addedPath of this.addedFiles) {
                    let addedFile : any = this._fsState.getFileForPath(addedPath);
                    for(let changedFile of files) {
                        if (addedFile.importedFiles.contains(changedFile)) {
                            pendingImportFiles.add(addedPath);
                        }
                    }
                }
                for(let addedPath of this.addedFiles) {
                    let addedFile : any = this._fsState.getFileForPath(addedPath);
                    if (addedFile.hasErrorOrWarning) {
                        pendingErrorFiles.add(addedPath);
                    }
                }
                pendingChangedFiles.addAll(this._pendingChangedFiles);
                pendingImportFiles.addAll(this._pendingImportFiles);
                pendingErrorFiles.addAll(this._pendingErrorFiles);
                pendingFiles.addAll(this._pendingFiles);
                pendingFiles.addAll(this.addedFiles);
                this._pendingChangedFiles = pendingChangedFiles;
                this._pendingImportFiles = pendingImportFiles;
                this._pendingErrorFiles = pendingErrorFiles;
                this._pendingFiles = pendingFiles;
            }
            return files[0];
        });
    }
    verifyChangedFilesIfNeeded() : boolean {
        if (this._changedFiles.isNotEmpty) {
            let path : string = this._changedFiles.first;
            this._changedFiles.remove(path);
            if (this._fsState.knownFilePaths.contains(path)) {
                this.verifyApiSignature(path);
            }
            return true;
        }
        return false;
    }
}

export class properties {
}
