/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/stress/utilities/git.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "./logger";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export namespace BlobDiff {
    export type Constructors = '_';
    export type Interface = Omit<BlobDiff, Constructors>;
}
@DartClass
export class BlobDiff {
    private static __$hunkHeaderRegExp : core.DartRegExp;
    static get hunkHeaderRegExp() : core.DartRegExp { 
        if (this.__$hunkHeaderRegExp===undefined) {
            this.__$hunkHeaderRegExp = new core.DartRegExp('@@ -([0-9]+)(?:,[0-9]+)? \+([0-9]+)(?:,[0-9]+)? @@');
        }
        return this.__$hunkHeaderRegExp;
    }
    static set hunkHeaderRegExp(__$value : core.DartRegExp)  { 
        this.__$hunkHeaderRegExp = __$value;
    }

    hunks : core.DartList<DiffHunk>;

    @namedConstructor
    _(input : core.DartList<string>) {
        this.hunks = new core.DartList.literal<DiffHunk>();
        this._parseInput(input);
    }
    static _ : new(input : core.DartList<string>) => BlobDiff;

    _parseInput(input : core.DartList<string>) : void {
        for(let line of input) {
            this._parseLine(line);
        }
    }
    _parseLine(line : string) : void {
        let currentHunk : DiffHunk = this.hunks.isEmpty ? null : this.hunks.last;
        if (new core.DartString(line).startsWith('@@')) {
            let match : core.DartMatch = BlobDiff.hunkHeaderRegExp.matchAsPrefix(line);
            let srcLine : number = core.DartInt.parse(match.group(1));
            let dstLine : number = core.DartInt.parse(match.group(2));
            this.hunks.add(new DiffHunk(srcLine,dstLine));
        }else if (currentHunk != null && new core.DartString(line).startsWith('+')) {
            currentHunk.addLines.add(new core.DartString(line).substring(1));
        }else if (currentHunk != null && new core.DartString(line).startsWith('-')) {
            currentHunk.removeLines.add(new core.DartString(line).substring(1));
        }
    }
}

export namespace CommitDelta {
    export type Constructors = '_';
    export type Interface = Omit<CommitDelta, Constructors>;
}
@DartClass
export class CommitDelta {
    private static __$SHA_LENGTH : number;
    static get SHA_LENGTH() : number { 
        if (this.__$SHA_LENGTH===undefined) {
            this.__$SHA_LENGTH = 40;
        }
        return this.__$SHA_LENGTH;
    }
    static set SHA_LENGTH(__$value : number)  { 
        this.__$SHA_LENGTH = __$value;
    }

    private static __$COLON : number;
    static get COLON() : number { 
        if (this.__$COLON===undefined) {
            this.__$COLON = new core.DartString(':').codeUnitAt(0);
        }
        return this.__$COLON;
    }
    static set COLON(__$value : number)  { 
        this.__$COLON = __$value;
    }

    private static __$NUL : number;
    static get NUL() : number { 
        if (this.__$NUL===undefined) {
            this.__$NUL = 0;
        }
        return this.__$NUL;
    }
    static set NUL(__$value : number)  { 
        this.__$NUL = __$value;
    }

    private static __$TAB : number;
    static get TAB() : number { 
        if (this.__$TAB===undefined) {
            this.__$TAB = new core.DartString('	').codeUnitAt(0);
        }
        return this.__$TAB;
    }
    static set TAB(__$value : number)  { 
        this.__$TAB = __$value;
    }

    repository : GitRepository;

    diffRecords : core.DartList<DiffRecord>;

    @namedConstructor
    _(repository : GitRepository,diffResults : string) {
        this.diffRecords = new core.DartList.literal<DiffRecord>();
        this.repository = repository;
        this._parseInput(diffResults);
    }
    static _ : new(repository : GitRepository,diffResults : string) => CommitDelta;

    get hasDiffs() : boolean {
        return this.diffRecords.isNotEmpty;
    }
    filesMatching(fileName : string) : core.DartIterable<string> {
        return this.diffRecords.where((record : DiffRecord) =>  {
            return record.isFor(fileName);
        }).map((record : DiffRecord) =>  {
            return record.srcPath;
        });
    }
    filterDiffs(inclusionPaths : core.DartList<string>,globPatterns : core.DartList<any>) : void {
        this.diffRecords.retainWhere((record : DiffRecord) =>  {
            let filePath : string = (record.srcPath || record.dstPath);
            for(let inclusionPath of inclusionPaths) {
                if (lib3.isWithin(inclusionPath,filePath)) {
                    for(let glob of globPatterns) {
                        if (glob.matches(filePath)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        });
    }
    _findEnd(string : string,start : number) : number {
        let length : number = new core.DartString(string).length;
        let end : number = start;
        while (end < length && new core.DartString(string).codeUnitAt(end) != CommitDelta.NUL){
            end++;
        }
        return end;
    }
    _makeAbsolute(relativePath : string) : string {
        return lib3.join(this.repository.path,relativePath);
    }
    _parseInput(input : string) : void {
        let length : number = new core.DartString(input).length;
        let start : number = 0;
        while (start < length){
            start = this._parseRecord(input,start);
        }
    }
    _parseRecord(input : string,startIndex : number) : number {
        startIndex += 15;
        let srcSha : string = new core.DartString(input).substring(startIndex,startIndex + CommitDelta.SHA_LENGTH);
        startIndex += CommitDelta.SHA_LENGTH + 1;
        let dstSha : string = new core.DartString(input).substring(startIndex,startIndex + CommitDelta.SHA_LENGTH);
        startIndex += CommitDelta.SHA_LENGTH + 1;
        let endIndex : number = this._findEnd(input,startIndex);
        let status : string = new core.DartString(input).substring(startIndex,endIndex);
        startIndex = endIndex + 1;
        endIndex = this._findEnd(input,startIndex);
        let srcPath : string = this._makeAbsolute(new core.DartString(input).substring(startIndex,endIndex));
        startIndex = endIndex + 1;
        let dstPath : string = null;
        if (new core.DartString(status).startsWith('C') || new core.DartString(status).startsWith('R')) {
            endIndex = this._findEnd(input,startIndex);
            dstPath = this._makeAbsolute(new core.DartString(input).substring(startIndex,endIndex));
        }
        this.diffRecords.add(new DiffRecord(this.repository,srcSha,dstSha,status,srcPath,dstPath));
        return endIndex + 1;
    }
}

export namespace DiffHunk {
    export type Constructors = 'DiffHunk';
    export type Interface = Omit<DiffHunk, Constructors>;
}
@DartClass
export class DiffHunk {
    diffSrcLine : number;

    diffDstLine : number;

    removeLines : core.DartList<string>;

    addLines : core.DartList<string>;

    constructor(diffSrcLine : number,diffDstLine : number) {
    }
    @defaultConstructor
    DiffHunk(diffSrcLine : number,diffDstLine : number) {
        this.removeLines = new core.DartList.literal<string>();
        this.addLines = new core.DartList.literal<string>();
        this.diffSrcLine = diffSrcLine;
        this.diffDstLine = diffDstLine;
    }
    get dstLine() : number {
        return this.addLines.isEmpty ? this.diffDstLine : this.diffDstLine - 1;
    }
    get srcLine() : number {
        return this.removeLines.isEmpty ? this.diffSrcLine : this.diffSrcLine - 1;
    }
}

export namespace DiffRecord {
    export type Constructors = 'DiffRecord';
    export type Interface = Omit<DiffRecord, Constructors>;
}
@DartClass
export class DiffRecord {
    repository : GitRepository;

    srcBlob : string;

    dstBlob : string;

    status : string;

    srcPath : string;

    dstPath : string;

    constructor(repository : GitRepository,srcBlob : string,dstBlob : string,status : string,srcPath : string,dstPath : string) {
    }
    @defaultConstructor
    DiffRecord(repository : GitRepository,srcBlob : string,dstBlob : string,status : string,srcPath : string,dstPath : string) {
        this.repository = repository;
        this.srcBlob = srcBlob;
        this.dstBlob = dstBlob;
        this.status = status;
        this.srcPath = srcPath;
        this.dstPath = dstPath;
    }
    get isAddition() : boolean {
        return this.status == 'A';
    }
    get isCopy() : boolean {
        return new core.DartString(this.status).startsWith('C');
    }
    get isDeletion() : boolean {
        return this.status == 'D';
    }
    get isModification() : boolean {
        return this.status == 'M';
    }
    get isRename() : boolean {
        return new core.DartString(this.status).startsWith('R');
    }
    get isTypeChange() : boolean {
        return this.status == 'T';
    }
    getBlobDiff() : BlobDiff {
        return this.repository.getBlobDiff(this.srcBlob,this.dstBlob);
    }
    isFor(fileName : string) : boolean {
        return (this.srcPath != null && fileName == lib3.basename(this.srcPath)) || (this.dstPath != null && fileName == lib3.basename(this.dstPath));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return (this.srcPath || this.dstPath);
    }
}

export namespace GitRepository {
    export type Constructors = 'GitRepository';
    export type Interface = Omit<GitRepository, Constructors>;
}
@DartClass
export class GitRepository {
    path : string;

    logger : lib4.Logger;

    constructor(path : string,_namedArguments? : {logger? : lib4.Logger}) {
    }
    @defaultConstructor
    GitRepository(path : string,_namedArguments? : {logger? : lib4.Logger}) {
        let {logger} = Object.assign({
            "logger" : null}, _namedArguments );
        this.path = path;
        this.logger = logger;
    }
    checkout(commit : string) : void {
        this._run(new core.DartList.literal('checkout',commit));
    }
    getBlobDiff(srcBlob : string,dstBlob : string) : BlobDiff {
        let result : io.ProcessResult = this._run(new core.DartList.literal('diff','-U0',srcBlob,dstBlob));
        let diffResults : core.DartList<string> = convert.LineSplitter.split(result.stdout).toList();
        return new BlobDiff._(diffResults);
    }
    getCommitDiff(srcCommit : string,dstCommit : string) : CommitDelta {
        let result : io.ProcessResult = this._run(new core.DartList.literal('diff','--raw','--no-abbrev','--no-renames','-z',srcCommit,dstCommit));
        return new CommitDelta._(this,result.stdout);
    }
    getCommitHistory() : LinearCommitHistory {
        let result : io.ProcessResult = this._run(new core.DartList.literal('rev-list','--first-parent','HEAD'));
        let commitIds : core.DartList<string> = convert.LineSplitter.split(result.stdout).toList();
        return new LinearCommitHistory(this,commitIds);
    }
    _run(arguments : core.DartList<string>) : io.ProcessResult {
        ((_44_)=>(!!_44_)?_44_.log('git','git',{
            arguments : arguments}):null)(this.logger);
        return io.Process.runSync('git',arguments,{
            stderrEncoding : convert.properties.UTF8,stdoutEncoding : convert.properties.UTF8,workingDirectory : this.path});
    }
}

export namespace LinearCommitHistory {
    export type Constructors = 'LinearCommitHistory';
    export type Interface = Omit<LinearCommitHistory, Constructors>;
}
@DartClass
export class LinearCommitHistory {
    repository : GitRepository;

    commitIds : core.DartList<string>;

    constructor(repository : GitRepository,commitIds : core.DartList<string>) {
    }
    @defaultConstructor
    LinearCommitHistory(repository : GitRepository,commitIds : core.DartList<string>) {
        this.repository = repository;
        this.commitIds = commitIds;
    }
    iterator() : LinearCommitHistoryIterator {
        return new LinearCommitHistoryIterator(this);
    }
}

export namespace LinearCommitHistoryIterator {
    export type Constructors = 'LinearCommitHistoryIterator';
    export type Interface = Omit<LinearCommitHistoryIterator, Constructors>;
}
@DartClass
export class LinearCommitHistoryIterator {
    history : LinearCommitHistory;

    currentCommit : number;

    constructor(history : LinearCommitHistory) {
    }
    @defaultConstructor
    LinearCommitHistoryIterator(history : LinearCommitHistory) {
        this.history = history;
        this.currentCommit = this.history.commitIds.length;
    }
    get dstCommit() : string {
        return this.history.commitIds[this.currentCommit - 1];
    }
    get srcCommit() : string {
        return this.history.commitIds[this.currentCommit];
    }
    moveNext() : boolean {
        if (this.currentCommit <= 1) {
            return false;
        }
        this.currentCommit--;
        return true;
    }
    next() : CommitDelta {
        return this.history.repository.getCommitDiff(this.srcCommit,this.dstCommit);
    }
}

export class properties {
}
