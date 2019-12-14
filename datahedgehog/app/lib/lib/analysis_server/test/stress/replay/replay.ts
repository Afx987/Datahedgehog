/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/stress/replay/replay.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../utilities/git";
import * as lib4 from "./../utilities/server";
import * as lib5 from "./../utilities/logger";
import * as io from "@dart2ts/dart/io";
import * as math from "@dart2ts/dart/math";
import * as lib8 from "@dart2ts.packages/path/lib/path";
import * as lib9 from "@dart2ts.packages/analyzer/lib/error/listener";
import * as lib10 from "./operation";

export var main : (arguments : core.DartList<string>) => async.Future<core.Null> = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<core.Null> =>  {
    let driver : Driver = new Driver();
    await driver.run(arguments);
})());
export namespace Driver {
    export type Constructors = 'Driver';
    export type Interface = Omit<Driver, Constructors>;
}
@DartClass
export class Driver {
    private static __$CHANGE_OVERLAY_STYLE : string;
    static get CHANGE_OVERLAY_STYLE() : string { 
        if (this.__$CHANGE_OVERLAY_STYLE===undefined) {
            this.__$CHANGE_OVERLAY_STYLE = 'change';
        }
        return this.__$CHANGE_OVERLAY_STYLE;
    }
    static set CHANGE_OVERLAY_STYLE(__$value : string)  { 
        this.__$CHANGE_OVERLAY_STYLE = __$value;
    }

    private static __$HELP_FLAG_NAME : string;
    static get HELP_FLAG_NAME() : string { 
        if (this.__$HELP_FLAG_NAME===undefined) {
            this.__$HELP_FLAG_NAME = 'help';
        }
        return this.__$HELP_FLAG_NAME;
    }
    static set HELP_FLAG_NAME(__$value : string)  { 
        this.__$HELP_FLAG_NAME = __$value;
    }

    private static __$MULTIPLE_ADD_OVERLAY_STYLE : string;
    static get MULTIPLE_ADD_OVERLAY_STYLE() : string { 
        if (this.__$MULTIPLE_ADD_OVERLAY_STYLE===undefined) {
            this.__$MULTIPLE_ADD_OVERLAY_STYLE = 'multipleAdd';
        }
        return this.__$MULTIPLE_ADD_OVERLAY_STYLE;
    }
    static set MULTIPLE_ADD_OVERLAY_STYLE(__$value : string)  { 
        this.__$MULTIPLE_ADD_OVERLAY_STYLE = __$value;
    }

    private static __$OVERLAY_STYLE_OPTION_NAME : string;
    static get OVERLAY_STYLE_OPTION_NAME() : string { 
        if (this.__$OVERLAY_STYLE_OPTION_NAME===undefined) {
            this.__$OVERLAY_STYLE_OPTION_NAME = 'overlay-style';
        }
        return this.__$OVERLAY_STYLE_OPTION_NAME;
    }
    static set OVERLAY_STYLE_OPTION_NAME(__$value : string)  { 
        this.__$OVERLAY_STYLE_OPTION_NAME = __$value;
    }

    private static __$PUBSPEC_FILE_NAME : string;
    static get PUBSPEC_FILE_NAME() : string { 
        if (this.__$PUBSPEC_FILE_NAME===undefined) {
            this.__$PUBSPEC_FILE_NAME = 'pubspec.yaml';
        }
        return this.__$PUBSPEC_FILE_NAME;
    }

    private static __$TEMP_BRANCH_NAME : string;
    static get TEMP_BRANCH_NAME() : string { 
        if (this.__$TEMP_BRANCH_NAME===undefined) {
            this.__$TEMP_BRANCH_NAME = 'temp';
        }
        return this.__$TEMP_BRANCH_NAME;
    }

    private static __$VERBOSE_FLAG_NAME : string;
    static get VERBOSE_FLAG_NAME() : string { 
        if (this.__$VERBOSE_FLAG_NAME===undefined) {
            this.__$VERBOSE_FLAG_NAME = 'verbose';
        }
        return this.__$VERBOSE_FLAG_NAME;
    }
    static set VERBOSE_FLAG_NAME(__$value : string)  { 
        this.__$VERBOSE_FLAG_NAME = __$value;
    }

    overlayStyle : OverlayStyle;

    repositoryPath : string;

    analysisRoots : core.DartList<string>;

    repository : lib3.GitRepository;

    server : lib4.Server;

    fileGlobs : core.DartList<any>;

    statistics : Statistics;

    verbose : boolean;

    logger : lib5.Logger;

    constructor() {
    }
    @defaultConstructor
    Driver() {
        this.verbose = false;
        this.statistics = new Statistics(this);
    }
    readServerOutput() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await new async.Future.delayed(new core.DartDuration({
                milliseconds : 2}));
        } )());
    }

    run(args : core.DartList<string>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this._processCommandLine(args)) {
                return null;
            }
            if (this.verbose) {
                io.properties.stdout.writeln();
                io.properties.stdout.writeln(op(Op.TIMES,'-',80));
                io.properties.stdout.writeln();
            }
            await this._runSimulation();
            if (this.verbose) {
                io.properties.stdout.writeln();
                io.properties.stdout.writeln(op(Op.TIMES,'-',80));
            }
            io.properties.stdout.writeln();
            this.statistics.print();
            if (this.verbose) {
                io.properties.stdout.writeln();
                this.server.printStatistics();
            }
            io.exit(0);
            return null;
        } )());
    }

    _createArgParser() : any {
        let parser : any = new bare.createInstance(any,null);
        parser.addFlag(Driver.HELP_FLAG_NAME,{
            abbr : 'h',help : 'Print usage information',defaultsTo : false,negatable : false});
        parser.addOption(Driver.OVERLAY_STYLE_OPTION_NAME,{
            help : 'The style of interaction to use for analysis.updateContent requests',allowed : new core.DartList.literal(Driver.CHANGE_OVERLAY_STYLE,Driver.MULTIPLE_ADD_OVERLAY_STYLE),allowedHelp : new core.DartMap.literal([
                [Driver.CHANGE_OVERLAY_STYLE,'<add> <change>* <remove>'],
                [Driver.MULTIPLE_ADD_OVERLAY_STYLE,'<add>+ <remove>']]),defaultsTo : 'change'});
        parser.addFlag(Driver.VERBOSE_FLAG_NAME,{
            abbr : 'v',help : 'Produce verbose output for debugging',defaultsTo : false,negatable : false});
        return parser;
    }
    _createSourceEdits(fileEdit : FileEdit,blobDiff : lib3.BlobDiff) : void {
        let info : any = fileEdit.lineInfo;
        for(let hunk of blobDiff.hunks) {
            let srcStart : number = info.getOffsetOfLine(hunk.srcLine);
            let srcEnd : number = info.getOffsetOfLine(math.min(hunk.srcLine + hunk.removeLines.length,op(Op.MINUS,info.lineCount,1)));
            let addedText : string = this._join(hunk.addLines);
            let breakOffsets : core.DartList<number> = this._getBreakOffsets(addedText);
            let breakCount : number = breakOffsets.length;
            let sourceEdits : core.DartList<any> = new core.DartList.literal<any>();
            if (breakCount == 0) {
                sourceEdits.add(new bare.createInstance(any,null,srcStart,srcEnd - srcStart + 1,addedText));
            }else {
                let previousOffset : number = breakOffsets[0];
                let string : string = new core.DartString(addedText).substring(0,previousOffset);
                sourceEdits.add(new bare.createInstance(any,null,srcStart,srcEnd - srcStart + 1,string));
                let reconstruction : string = string;
                for(let i : number = 1; i < breakCount; i++){
                    let offset : number = breakOffsets[i];
                    string = new core.DartString(addedText).substring(previousOffset,offset);
                    reconstruction += string;
                    sourceEdits.add(new bare.createInstance(any,null,srcStart + previousOffset,0,string));
                    previousOffset = offset;
                }
                string = new core.DartString(addedText).substring(previousOffset);
                reconstruction += string;
                sourceEdits.add(new bare.createInstance(any,null,srcStart + previousOffset,0,string));
                if (reconstruction != addedText) {
                    throw new core.AssertionError();
                }
            }
            fileEdit.addSourceEdits(sourceEdits);
        }
    }
    _findPubspecsInAnalysisRoots() : core.DartIterable<string> {
        let pubspecFiles : core.DartList<string> = new core.DartList.literal<string>();
        for(let directoryPath of this.analysisRoots) {
            let directory : io.Directory = new io.Directory(directoryPath);
            let children : core.DartList<io.FileSystemEntity> = directory.listSync({
                recursive : true,followLinks : false});
            for(let child of children) {
                let filePath : string = child.path;
                if (lib8.basename(filePath) == Driver.PUBSPEC_FILE_NAME) {
                    pubspecFiles.add(filePath);
                }
            }
        }
        return pubspecFiles;
    }
    _getBreakOffsets(text : string) : core.DartList<number> {
        let breakOffsets : core.DartList<number> = new core.DartList.literal<number>();
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,text),lib9.AnalysisErrorListener.NULL_LISTENER);
        let token : any = scanner.tokenize();
        while (token.type != TokenType.EOF){
            let offset : number = token.offset;
            let length : number = token.length;
            breakOffsets.add(offset);
            if (op(Op.EQUALS,token.type,TokenType.IDENTIFIER) && length > 3) {
                breakOffsets.add(offset + (op(Op.QUOTIENT,length,2)));
            }
            token = token.next;
        }
        return breakOffsets;
    }
    _join(lines : core.DartList<string>) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        for(let i : number = 0; i < lines.length; i++){
            buffer.writeln(lines[i]);
        }
        return buffer.toString();
    }
    _processCommandLine(args : core.DartList<string>) : boolean {
        let parser : any = this._createArgParser();
        let results : any;
        try {
            results = parser.parse(args);
        } catch (__error__) {

            {
                let exception = __error__;
                this._showUsage(parser);
                return false;
            }
        }
        if (op(Op.INDEX,results,Driver.HELP_FLAG_NAME)) {
            this._showUsage(parser);
            return false;
        }
        let overlayStyleValue : string = op(Op.INDEX,results,Driver.OVERLAY_STYLE_OPTION_NAME);
        if (overlayStyleValue == Driver.CHANGE_OVERLAY_STYLE) {
            this.overlayStyle = OverlayStyle.change;
        }else if (overlayStyleValue == Driver.MULTIPLE_ADD_OVERLAY_STYLE) {
            this.overlayStyle = OverlayStyle.multipleAdd;
        }
        if (op(Op.INDEX,results,Driver.VERBOSE_FLAG_NAME)) {
            this.verbose = true;
            this.logger = new lib5.Logger(io.properties.stdout);
        }
        let arguments : core.DartList<string> = results.rest;
        if (arguments.length < 2) {
            this._showUsage(parser);
            return false;
        }
        this.repositoryPath = lib8.normalize(arguments[0]);
        this.repository = new lib3.GitRepository(this.repositoryPath,{
            logger : this.logger});
        this.analysisRoots = arguments.sublist(1).map((analysisRoot : string) =>  {
            return lib8.normalize(analysisRoot);
        }).toList();
        for(let analysisRoot of this.analysisRoots) {
            if (this.repositoryPath != analysisRoot && !lib8.isWithin(this.repositoryPath,analysisRoot)) {
                this._showUsage(parser,`Analysis roots must be contained within the repository: ${analysisRoot}`);
                return false;
            }
        }
        return true;
    }
    _replayChanges() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let history : lib3.LinearCommitHistory = this.repository.getCommitHistory();
            this.statistics.commitCount = history.commitIds.length;
            let iterator : lib3.LinearCommitHistoryIterator = history.iterator();
            try {
                let firstCheckout : boolean = true;
                let expectedErrors : lib4.ErrorMap = null;
                let changedPubspecs : core.DartIterable<string>;
                while (iterator.moveNext()){
                    let commit : string = iterator.srcCommit;
                    this.repository.checkout(commit);
                    if (expectedErrors != null) {
                        await this.server.computeErrorMap(this.server.analyzedDartFiles);
                    }
                    if (firstCheckout) {
                        changedPubspecs = this._findPubspecsInAnalysisRoots();
                        this.server.sendAnalysisSetAnalysisRoots(this.analysisRoots,new core.DartList.literal());
                        firstCheckout = false;
                    }else {
                        this.server.removeAllOverlays();
                    }
                    await this.readServerOutput();
                    expectedErrors = await this.server.computeErrorMap(this.server.analyzedDartFiles);
                    for(let filePath of changedPubspecs) {
                        this._runPub(filePath);
                    }
                    let commitDelta : lib3.CommitDelta = iterator.next();
                    commitDelta.filterDiffs(this.analysisRoots,this.fileGlobs);
                    if (commitDelta.hasDiffs) {
                        this.statistics.commitsWithChangeInRootCount++;
                        await this._replayDiff(commitDelta);
                    }
                    changedPubspecs = commitDelta.filesMatching(Driver.PUBSPEC_FILE_NAME);
                }
            } finally {
                if (history.commitIds.length > 0) {
                    this.repository.checkout(history.commitIds[0]);
                }
            }
            this.server.removeAllOverlays();
            await this.readServerOutput();
            io.properties.stdout.writeln();
        } )());
    }

    _replayDiff(commitDelta : lib3.CommitDelta) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let editList : core.DartList<FileEdit> = new core.DartList.literal<FileEdit>();
            for(let record of commitDelta.diffRecords) {
                let edit : FileEdit = new FileEdit(this.overlayStyle,record);
                this._createSourceEdits(edit,record.getBlobDiff());
                editList.add(edit);
            }
            for(let edit of editList) {
                let currentFile : core.DartList<string> = new core.DartList.literal<string>(edit.filePath);
                this.server.sendAnalysisSetPriorityFiles(currentFile);
                this.server.sendAnalysisSetSubscriptions(new core.DartMap.literal([
                    [AnalysisService.FOLDING,currentFile],
                    [AnalysisService.HIGHLIGHTS,currentFile],
                    [AnalysisService.IMPLEMENTED,currentFile],
                    [AnalysisService.NAVIGATION,currentFile],
                    [AnalysisService.OCCURRENCES,currentFile],
                    [AnalysisService.OUTLINE,currentFile],
                    [AnalysisService.OVERRIDES,currentFile]]));
                for(let operation of edit.getOperations()) {
                    this.statistics.editCount++;
                    operation.perform(this.server);
                    await this.readServerOutput();
                }
            }
        } )());
    }

    _runPub(filePath : string) : void {
        let directoryPath : string = lib8.dirname(filePath);
        if (new io.Directory(directoryPath).existsSync()) {
            io.Process.runSync('/Users/brianwilkerson/Dev/dart/dart-sdk/bin/pub',new core.DartList.literal('get'),{
                workingDirectory : directoryPath});
        }
    }
    _runSimulation() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.server = new lib4.Server({
                logger : this.logger});
            let stopwatch : core.DartStopwatch = new core.DartStopwatch();
            this.statistics.stopwatch = stopwatch;
            stopwatch.start();
            await this.server.start();
            this.server.sendServerSetSubscriptions(new core.DartList.literal(ServerService.STATUS));
            this.server.sendAnalysisSetGeneralSubscriptions(new core.DartList.literal(GeneralAnalysisService.ANALYZED_FILES));
            this.fileGlobs = new core.DartList.literal<any>(new bare.createInstance(any,null,lib8.properties.context.separator,'**.dart'),new bare.createInstance(any,null,lib8.properties.context.separator,'**.html'),new bare.createInstance(any,null,lib8.properties.context.separator,'**.htm'),new bare.createInstance(any,null,lib8.properties.context.separator,'**/.analysisOptions'));
            try {
                await this._replayChanges();
            } finally {
                this.server.sendServerShutdown();
                this.repository.checkout('master');
            }
            stopwatch.stop();
        } )());
    }

    _showUsage(parser : any,errorMessage? : string) : void {
        errorMessage = errorMessage || null;
        if (errorMessage != null) {
            io.properties.stderr.writeln(errorMessage);
            io.properties.stderr.writeln();
        }
        io.properties.stderr.writeln('Usage: replay [options...] repositoryPath analysisRoot...\n\nUses the commit history of the git repository at the given repository path to\nsimulate the development of a code base while using the analysis server to\nanalyze the code base.\n\nThe repository path must be the absolute path of a directory containing a git\nrepository.\n\nThere must be at least one analysis root, and all of the analysis roots must be\nthe absolute path of a directory contained within the repository directory. The\nanalysis roots represent the portions of the repository that will be analyzed by\nthe analysis server.\n\nOPTIONS:');
        io.properties.stderr.writeln(parser.usage);
    }
}

export namespace FileEdit {
    export type Constructors = 'FileEdit';
    export type Interface = Omit<FileEdit, Constructors>;
}
@DartClass
export class FileEdit {
    overlayStyle : OverlayStyle;

    filePath : string;

    content : string;

    lineInfo : any;

    editLists : core.DartList<core.DartList<any>>;

    currentContent : string;

    constructor(overlayStyle : OverlayStyle,record : lib3.DiffRecord) {
    }
    @defaultConstructor
    FileEdit(overlayStyle : OverlayStyle,record : lib3.DiffRecord) {
        this.editLists = new core.DartList.literal<core.DartList<any>>();
        this.overlayStyle = overlayStyle;
        this.filePath = record.srcPath;
        if (record.isAddition) {
            this.content = '';
            this.lineInfo = new bare.createInstance(any,null,new core.DartList.literal<number>(0));
        }else if (record.isCopy || record.isRename || record.isTypeChange) {
            throw new core.ArgumentError(`Unhandled change of type ${record.status}`);
        }else {
            this.content = new io.File(this.filePath).readAsStringSync();
            this.lineInfo = new bare.createInstance(any,null,StringUtilities.computeLineStarts(this.content));
        }
        this.currentContent = this.content;
    }
    addSourceEdits(sourceEdits : core.DartList<any>) : void {
        this.editLists.add(sourceEdits);
    }
    getOperations() : core.DartList<lib10.ServerOperation> {
        let operations : core.DartList<lib10.ServerOperation> = new core.DartList.literal<lib10.ServerOperation>();
        var addUpdateContent : (overlay : any) => void = (overlay : any) : void =>  {
            operations.add(new lib10.Analysis_UpdateContent(this.filePath,overlay));
        };
        addUpdateContent(new bare.createInstance(any,null,this.content));
        for(let editList of this.editLists.reversed) {
            for(let edit of editList.reversed) {
                let overlay = null;
                if (op(Op.EQUALS,this.overlayStyle,OverlayStyle.change)) {
                    overlay = new bare.createInstance(any,null,new core.DartList.literal(edit));
                }else if (op(Op.EQUALS,this.overlayStyle,OverlayStyle.multipleAdd)) {
                    this.currentContent = edit.apply(this.currentContent);
                    overlay = new bare.createInstance(any,null,this.currentContent);
                }else {
                    throw new core.StateError(`Failed to handle overlay style = ${this.overlayStyle}`);
                }
                if (overlay != null) {
                    addUpdateContent(overlay);
                }
            }
        }
        addUpdateContent(new bare.createInstance(any,null));
        return operations;
    }
}

export enum OverlayStyle {
    change,
    multipleAdd
}

export namespace Statistics {
    export type Constructors = 'Statistics';
    export type Interface = Omit<Statistics, Constructors>;
}
@DartClass
export class Statistics {
    driver : Driver;

    stopwatch : core.DartStopwatch;

    commitCount : number;

    commitsWithChangeInRootCount : number;

    editCount : number;

    constructor(driver : Driver) {
    }
    @defaultConstructor
    Statistics(driver : Driver) {
        this.commitsWithChangeInRootCount = 0;
        this.editCount = 0;
        this.driver = driver;
    }
    print() : void {
        io.properties.stdout.write('Replay commits in ');
        io.properties.stdout.writeln(this.driver.repositoryPath);
        io.properties.stdout.write('  replay took ');
        io.properties.stdout.writeln(this._printTime(this.stopwatch.elapsedMilliseconds));
        io.properties.stdout.write('  analysis roots = ');
        io.properties.stdout.writeln(this.driver.analysisRoots);
        io.properties.stdout.write('  number of commits = ');
        io.properties.stdout.writeln(this.commitCount);
        io.properties.stdout.write('  number of commits with a change in an analysis root = ');
        io.properties.stdout.writeln(this.commitsWithChangeInRootCount);
        io.properties.stdout.write('  number of edits = ');
        io.properties.stdout.writeln(this.editCount);
    }
    _printTime(milliseconds : number) : string {
        let seconds : number = op(Op.QUOTIENT,milliseconds,1000);
        milliseconds -= seconds * 1000;
        let minutes : number = op(Op.QUOTIENT,seconds,60);
        seconds -= minutes * 60;
        let hours : number = op(Op.QUOTIENT,minutes,60);
        minutes -= hours * 60;
        if (hours > 0) {
            return `${hours}:${minutes}:${seconds}.${milliseconds}`;
        }else if (minutes > 0) {
            return `${minutes}:${seconds}.${milliseconds}`;
        }
        return `${seconds}.${milliseconds}`;
    }
}

export class properties {
}
