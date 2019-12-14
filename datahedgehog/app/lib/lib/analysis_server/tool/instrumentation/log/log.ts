/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/instrumentation/log/log.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as convert from "@dart2ts/dart/convert";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export namespace EntryGroup {
    export type Constructors = '_';
    export type Interface = Omit<EntryGroup, Constructors>;
}
@DartClass
export class EntryGroup {
    private static __$groups : core.DartList<EntryGroup>;
    static get groups() : core.DartList<EntryGroup> { 
        if (this.__$groups===undefined) {
            this.__$groups = new core.DartList.literal<EntryGroup>(new EntryGroup._('nonTask','Non-task',(entry : LogEntry) =>  {
                return isNot(entry, TaskEntry);
            }),new EntryGroup._('errors','Errors',(entry : LogEntry) =>  {
                return is(entry, ErrorEntry) || is(entry, ExceptionEntry) || (is(entry, NotificationEntry) && entry.isServerError);
            }),new EntryGroup._('malformed','Malformed',(entry : LogEntry) =>  {
                return is(entry, MalformedLogEntry);
            }),new EntryGroup._('all','All',(entry : LogEntry) =>  {
                return true;
            }));
        }
        return this.__$groups;
    }
    static set groups(__$value : core.DartList<EntryGroup>)  { 
        this.__$groups = __$value;
    }

    id : string;

    name : string;

    filter : <T>(value : LogEntry) => boolean;

    @namedConstructor
    _(id : string,name : string,filter : <T>(value : LogEntry) => boolean) {
        this.id = id;
        this.name = name;
        this.filter = filter;
    }
    static _ : new(id : string,name : string,filter : <T>(value : LogEntry) => boolean) => EntryGroup;

    computeMembers(entries : core.DartList<LogEntry>) : core.DartList<LogEntry> {
        return entries.where(this.filter).toList();
    }
    static withId(id : string) : EntryGroup {
        for(let group of EntryGroup.groups) {
            if (group.id == id) {
                return group;
            }
        }
        return null;
    }
}

export namespace EntryRange {
    export type Constructors = 'EntryRange';
    export type Interface = Omit<EntryRange, Constructors>;
}
@DartClass
export class EntryRange {
    firstIndex : number;

    lastIndex : number;

    constructor(firstIndex : number,lastIndex : number) {
    }
    @defaultConstructor
    EntryRange(firstIndex : number,lastIndex : number) {
        this.firstIndex = firstIndex;
        this.lastIndex = lastIndex;
    }
}

export namespace InstrumentationLog {
    export type Constructors = 'InstrumentationLog';
    export type Interface = Omit<InstrumentationLog, Constructors>;
}
@DartClass
export class InstrumentationLog {
    logFilePaths : core.DartList<string>;

    logEntries : core.DartList<LogEntry>;

    entryGroups : core.DartMap<EntryGroup,core.DartList<LogEntry>>;

    _pairedEntries : core.DartMap<LogEntry,LogEntry>;

    _requestMap : core.DartMap<string,RequestEntry>;

    _pluginRequestMap : core.DartMap<string,PluginRequestEntry>;

    _responseMap : core.DartMap<string,ResponseEntry>;

    _pluginResponseMap : core.DartMap<string,PluginResponseEntry>;

    _completionMap : core.DartMap<string,core.DartList<NotificationEntry>>;

    analysisRanges : core.DartList<EntryRange>;

    constructor(logFilePaths : core.DartList<string>,logContent : core.DartList<string>) {
    }
    @defaultConstructor
    InstrumentationLog(logFilePaths : core.DartList<string>,logContent : core.DartList<string>) {
        this.entryGroups = new core.DartMap.literal([
        ]);
        this._pairedEntries = new core.DartMap.literal([
        ]);
        this._requestMap = new core.DartMap.literal([
        ]);
        this._pluginRequestMap = new core.DartMap.literal([
        ]);
        this._responseMap = new core.DartMap.literal([
        ]);
        this._pluginResponseMap = new core.DartMap.literal([
        ]);
        this._completionMap = new core.DartMap.literal([
        ]);
        this.logFilePaths = logFilePaths;
        this._parseLogContent(logContent);
    }
    completionEventsWithId(id : string) : core.DartList<NotificationEntry> {
        return this._completionMap.get(id);
    }
    entriesInGroup(group : EntryGroup) : core.DartList<LogEntry> {
        return this.entryGroups.putIfAbsent(group,() =>  {
            return group.computeMembers(this.logEntries);
        });
    }
    pairedEntry(entry : LogEntry) : LogEntry {
        return this._pairedEntries.get(entry);
    }
    pluginRequestFor(entry : PluginResponseEntry) : PluginRequestEntry {
        return this._pluginRequestMap.get(entry.id);
    }
    pluginResponseFor(entry : PluginRequestEntry) : PluginResponseEntry {
        return this._pluginResponseMap.get(entry.id);
    }
    requestFor(entry : ResponseEntry) : RequestEntry {
        return this._requestMap.get(entry.id);
    }
    responseFor(entry : RequestEntry) : ResponseEntry {
        return this._responseMap.get(entry.id);
    }
    taskEntriesFor(startIndex : number) : core.DartList<TaskEntry> {
        let taskEntries : core.DartList<TaskEntry> = new core.DartList.literal<TaskEntry>();
        let startEntry : NotificationEntry = this.logEntries[startIndex];
        let endEntry : LogEntry = this.pairedEntry(startEntry);
        let lastIndex : number = op(Op.EQUALS,endEntry,null) ? this.logEntries.length : endEntry.index;
        for(let i : number = startEntry.index + 1; i < lastIndex; i++){
            let entry : LogEntry = this.logEntries[i];
            if (is(entry, TaskEntry)) {
                taskEntries.add(entry);
            }
        }
        return taskEntries;
    }
    _isSessionData(logContent : core.DartList<string>) : boolean {
        if (logContent.length < 2) {
            return false;
        }
        let firstLine : string = logContent[0];
        return new core.DartString(firstLine).startsWith('-----') && new core.DartString(logContent[1]).startsWith('~') || new core.DartString(firstLine).startsWith('~');
    }
    _mergeEntries(logContent : core.DartList<string>) : void {
        var isStartOfEntry : (line : string) => boolean = (line : string) : boolean =>  {
            return new core.DartString(line).startsWith(LogEntry.entryRegExp);
        };
        var merge : (line : string,extraLines : core.DartList<string>) => string = (line : string,extraLines : core.DartList<string>) : string =>  {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.writeln(line);
            for(let extraLine of extraLines) {
                buffer.writeln(extraLine);
            }
            return buffer.toString();
        };
        let extraLines : core.DartList<string> = new core.DartList.literal<string>();
        for(let i : number = logContent.length - 1; i >= 0; i--){
            let line : string = logContent[i];
            if (isStartOfEntry(line)) {
                if (extraLines.isNotEmpty) {
                    logContent[i] = merge(line,extraLines);
                }
                extraLines.clear();
            }else {
                logContent.removeAt(i);
                extraLines.insert(0,line);
            }
        }
        if (extraLines.isNotEmpty) {
            let count : number = math.min(extraLines.length,10);
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.writeln(`${extraLines.length} non-entry lines before any entry`);
            buffer.writeln(`First ${count} lines:`);
            for(let i : number = 0; i < count; i++){
                buffer.writeln(extraLines[i]);
            }
            throw new core.StateError(buffer.toString());
        }
    }
    _parseLogContent(logContent : core.DartList<string>) : void {
        if (this._isSessionData(logContent)) {
            if (new core.DartString(logContent[0]).startsWith('-----')) {
                logContent.removeAt(0);
            }
            let lastIndex : number = logContent.length - 1;
            if (new core.DartString(logContent[lastIndex]).startsWith('extraction complete')) {
                logContent.removeAt(lastIndex);
            }
        }else {
            this._mergeEntries(logContent);
        }
        this.logEntries = new core.DartList.literal<LogEntry>();
        this.analysisRanges = new core.DartList.literal<EntryRange>();
        let analysisStartEntry : NotificationEntry = null;
        let analysisStartIndex : number = -1;
        let pubStartEntry : NotificationEntry = null;
        for(let line of logContent) {
            let entry : LogEntry = new LogEntry.from(this.logEntries.length,line);
            if (entry != null) {
                this.logEntries.add(entry);
                if (is(entry, RequestEntry)) {
                    this._requestMap.set(entry.id,entry);
                }else if (is(entry, ResponseEntry)) {
                    this._responseMap.set(entry.id,entry);
                    let request : RequestEntry = this._requestMap.get(entry.id);
                    this._pairedEntries.set(entry,request);
                    this._pairedEntries.set(request,entry);
                }else if (is(entry, NotificationEntry)) {
                    if (entry.isServerStatus) {
                        let analysisStatus = entry.param('analysis');
                        if (is(analysisStatus, core.DartMap<any,any>)) {
                            if (analysisStatus.get('isAnalyzing')) {
                                if (analysisStartEntry != null) {
                                    analysisStartEntry.recordProblem('Analysis started without being terminated.');
                                }
                                analysisStartEntry = entry;
                                analysisStartIndex = this.logEntries.length - 1;
                            }else {
                                if (op(Op.EQUALS,analysisStartEntry,null)) {
                                    entry.recordProblem('Analysis terminated without being started.');
                                }else {
                                    let analysisEnd : number = this.logEntries.length - 1;
                                    this.analysisRanges.add(new EntryRange(analysisStartIndex,analysisEnd));
                                    this._pairedEntries.set(entry,analysisStartEntry);
                                    this._pairedEntries.set(analysisStartEntry,entry);
                                    analysisStartEntry = null;
                                    analysisStartIndex = -1;
                                }
                            }
                        }
                        let pubStatus = entry.param('pub');
                        if (is(pubStatus, core.DartMap<any,any>)) {
                            if (pubStatus.get('isListingPackageDirs')) {
                                if (pubStartEntry != null) {
                                    pubStartEntry.recordProblem('Pub started without previous being terminated.');
                                }
                                pubStartEntry = entry;
                            }else {
                                if (op(Op.EQUALS,pubStartEntry,null)) {
                                    entry.recordProblem('Pub terminated without being started.');
                                }else {
                                    this._pairedEntries.set(entry,pubStartEntry);
                                    this._pairedEntries.set(pubStartEntry,entry);
                                    pubStartEntry = null;
                                }
                            }
                        }
                    }else if (entry.event == 'completion.results') {
                        let id : string = entry.param('id');
                        if (id != null) {
                            this._completionMap.putIfAbsent(id,() =>  {
                                return new core.DartList<NotificationEntry>();
                            }).add(entry);
                        }
                    }
                }else if (is(entry, PluginRequestEntry)) {
                    this._pluginRequestMap.set(entry.id,entry);
                }else if (is(entry, PluginResponseEntry)) {
                    this._pluginResponseMap.set(entry.id,entry);
                    let request : PluginRequestEntry = this._pluginRequestMap.get(entry.id);
                    this._pairedEntries.set(entry,request);
                    this._pairedEntries.set(request,entry);
                }
            }
        }
        if (analysisStartEntry != null) {
            analysisStartEntry.recordProblem('Analysis started without being terminated.');
        }
        if (pubStartEntry != null) {
            pubStartEntry.recordProblem('Pub started without previous being terminated.');
        }
    }
}

export namespace LogEntry {
    export type Constructors = 'LogEntry';
    export type Interface = Omit<LogEntry, Constructors>;
}
@DartClass
export class LogEntry {
    private static __$fieldSeparator : number;
    static get fieldSeparator() : number { 
        if (this.__$fieldSeparator===undefined) {
            this.__$fieldSeparator = new core.DartString(':').codeUnitAt(0);
        }
        return this.__$fieldSeparator;
    }
    static set fieldSeparator(__$value : number)  { 
        this.__$fieldSeparator = __$value;
    }

    private static __$entryRegExp : core.DartRegExp;
    static get entryRegExp() : core.DartRegExp { 
        if (this.__$entryRegExp===undefined) {
            this.__$entryRegExp = new core.DartRegExp('[0-9]+\:');
        }
        return this.__$entryRegExp;
    }
    static set entryRegExp(__$value : core.DartRegExp)  { 
        this.__$entryRegExp = __$value;
    }

    private static __$kindMap : core.DartMap<string,string>;
    static get kindMap() : core.DartMap<string,string> { 
        if (this.__$kindMap===undefined) {
            this.__$kindMap = new core.DartMap.literal([
                ['Err','Error'],
                ['Ex','Exception'],
                ['Log','Log message'],
                ['Mal','Malformed entry'],
                ['Noti','Notification'],
                ['Read','Read file'],
                ['Req','Request'],
                ['Res','Response'],
                ['Perf','Performance data'],
                ['SPResult','Subprocess result'],
                ['SPStart','Subprocess start'],
                ['Task','Task'],
                ['Ver','Version information'],
                ['Watch','Watch event']]);
        }
        return this.__$kindMap;
    }
    static set kindMap(__$value : core.DartMap<string,string>)  { 
        this.__$kindMap = __$value;
    }

    index : number;

    timeStamp : number;

    _problems : core.DartList<string>;

    constructor(index : number,timeStamp : number) {
    }
    @defaultConstructor
    LogEntry(index : number,timeStamp : number) {
        this._problems = null;
        this.index = index;
        this.timeStamp = timeStamp;
    }
    @namedFactory
    static $from(index : number,entry : string) : LogEntry {
        if (new core.DartString(entry).isEmpty) {
            return null;
        }
        try {
            let components : core.DartList<string> = LogEntry._parseComponents(entry);
            let timeStamp : number;
            let component : string = components[0];
            if (new core.DartString(component).startsWith('~')) {
                component = new core.DartString(component).substring(1);
            }
            timeStamp = core.DartInt.parse(component);
            let entryKind : string = components[1];
            if (entryKind == InstrumentationService.TAG_ANALYSIS_TASK) {
                return new TaskEntry(index,timeStamp,components[2],components[3]);
            }else if (entryKind == InstrumentationService.TAG_ERROR) {
                return new ErrorEntry(index,timeStamp,entryKind,components.sublist(2));
            }else if (entryKind == InstrumentationService.TAG_EXCEPTION) {
                return new ExceptionEntry(index,timeStamp,entryKind,components.sublist(2));
            }else if (entryKind == InstrumentationService.TAG_FILE_READ) {
            }else if (entryKind == InstrumentationService.TAG_LOG_ENTRY) {
            }else if (entryKind == InstrumentationService.TAG_NOTIFICATION) {
                let requestData : core.DartMap<any,any> = convert.properties.JSON.decode(components[2]);
                return new NotificationEntry(index,timeStamp,requestData);
            }else if (entryKind == InstrumentationService.TAG_PERFORMANCE) {
            }else if (entryKind == InstrumentationService.TAG_PLUGIN_ERROR) {
                return new PluginErrorEntry(index,timeStamp,entryKind,components.sublist(2,4),components.sublist(4));
            }else if (entryKind == InstrumentationService.TAG_PLUGIN_EXCEPTION) {
                return new PluginExceptionEntry(index,timeStamp,entryKind,components.sublist(2,5),components.sublist(5));
            }else if (entryKind == InstrumentationService.TAG_PLUGIN_NOTIFICATION) {
                let requestData : core.DartMap<any,any> = convert.properties.JSON.decode(components[2]);
                return new PluginNotificationEntry(index,timeStamp,requestData,components.sublist(3));
            }else if (entryKind == InstrumentationService.TAG_PLUGIN_REQUEST) {
                let requestData : core.DartMap<any,any> = convert.properties.JSON.decode(components[2]);
                return new PluginRequestEntry(index,timeStamp,requestData,components.sublist(3));
            }else if (entryKind == InstrumentationService.TAG_PLUGIN_RESPONSE) {
                let responseData : core.DartMap<any,any> = convert.properties.JSON.decode(components[2]);
                return new PluginResponseEntry(index,timeStamp,responseData,components.sublist(3));
            }else if (entryKind == InstrumentationService.TAG_PLUGIN_TIMEOUT) {
                return new PluginErrorEntry(index,timeStamp,entryKind,components.sublist(2,3),components.sublist(3));
            }else if (entryKind == InstrumentationService.TAG_REQUEST) {
                let requestData : core.DartMap<any,any> = convert.properties.JSON.decode(components[2]);
                return new RequestEntry(index,timeStamp,requestData);
            }else if (entryKind == InstrumentationService.TAG_RESPONSE) {
                let responseData : core.DartMap<any,any> = convert.properties.JSON.decode(components[2]);
                return new ResponseEntry(index,timeStamp,responseData);
            }else if (entryKind == InstrumentationService.TAG_SUBPROCESS_START) {
            }else if (entryKind == InstrumentationService.TAG_SUBPROCESS_RESULT) {
            }else if (entryKind == InstrumentationService.TAG_VERSION) {
            }else if (entryKind == InstrumentationService.TAG_WATCH_EVENT) {
            }
            return new GenericEntry(index,timeStamp,entryKind,components.sublist(2));
        } catch (__error__) {

            {
                let exception = __error__;
                let logEntry : LogEntry = new MalformedLogEntry(index,entry);
                logEntry.recordProblem(exception.toString());
                return logEntry;
            }
        }
    }
    static from : new(index : number,entry : string) => LogEntry;

    get hasProblems() : boolean {
        return this._problems != null;
    }
    @AbstractProperty
    get kind() : string{ throw 'abstract'}
    get kindName() : string {
        return (LogEntry.kindMap.get(this.kind) || this.kind);
    }
    get problems() : core.DartList<string> {
        return this._problems;
    }
    get toTime() : core.DartDateTime {
        return new core.DartDateTime.fromMillisecondsSinceEpoch(this.timeStamp);
    }
    details() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        this._appendDetails(buffer);
        return buffer.toString();
    }
    recordProblem(problem : string) : void {
        this._problems = ( this._problems ) || ( new core.DartList.literal<string>() );
        this._problems.add(problem);
    }
    _appendDetails(buffer : core.DartStringBuffer) : void {
        if (this._problems != null) {
            for(let problem of this._problems) {
                buffer.write(`<p><span class="error">${problem}</span></p>`);
            }
        }
    }
    static _parseComponents(entry : string) : core.DartList<string> {
        let components : core.DartList<string> = new core.DartList.literal<string>();
        let component : core.DartStringBuffer = new core.DartStringBuffer();
        let length : number = new core.DartString(entry).length;
        for(let i : number = 0; i < length; i++){
            let char : number = new core.DartString(entry).codeUnitAt(i);
            if (char == LogEntry.fieldSeparator) {
                if (new core.DartString(entry).codeUnitAt(i + 1) == LogEntry.fieldSeparator) {
                    component.write(':');
                    i++;
                }else {
                    components.add(component.toString());
                    component.clear();
                }
            }else {
                component.writeCharCode(char);
            }
        }
        components.add(component.toString());
        return components;
    }
}

export namespace PluginEntryMixin {
    export type Constructors = 'PluginEntryMixin';
    export type Interface = Omit<PluginEntryMixin, Constructors>;
}
@DartClass
export class PluginEntryMixin {
    @AbstractProperty
    get pluginData() : core.DartList<string>{ throw 'abstract'}
    get pluginId() : string {
        return this.pluginData[0];
    }
    get pluginName() : string {
        return this.pluginData[1];
    }
    get pluginVersion() : string {
        return this.pluginData[2];
    }
    get shortPluginId() : string {
        let index : number = new core.DartString(this.pluginId).lastIndexOf(lib5.properties.separator);
        if (index > 0) {
            return new core.DartString(this.pluginId).substring(index + 1);
        }
        return this.pluginId;
    }
    constructor() {
    }
    @defaultConstructor
    PluginEntryMixin() {
    }
}

export namespace GenericEntry {
    export type Constructors = LogEntry.Constructors | 'GenericEntry';
    export type Interface = Omit<GenericEntry, Constructors>;
}
@DartClass
export class GenericEntry extends LogEntry {
    entryKind : string;

    components : core.DartList<string>;

    constructor(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericEntry(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>) {
        super.LogEntry(index,timeStamp);
        this.entryKind = entryKind;
        this.components = components;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return this.entryKind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _appendDetails(buffer : core.DartStringBuffer) : void {
        super._appendDetails(buffer);
        for(let component of this.components) {
            buffer.write(component);
            buffer.write('<br>');
        }
    }
}

export namespace JsonBasedEntry {
    export type Constructors = LogEntry.Constructors | 'JsonBasedEntry';
    export type Interface = Omit<JsonBasedEntry, Constructors>;
}
@DartClass
export class JsonBasedEntry extends LogEntry {
    private static __$singleIndent : string;
    static get singleIndent() : string { 
        if (this.__$singleIndent===undefined) {
            this.__$singleIndent = '&nbsp;&nbsp;&nbsp;';
        }
        return this.__$singleIndent;
    }

    data : core.DartMap<any,any>;

    constructor(index : number,timeStamp : number,data : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonBasedEntry(index : number,timeStamp : number,data : core.DartMap<any,any>) {
        super.LogEntry(index,timeStamp);
        this.data = data;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _appendDetails(buffer : core.DartStringBuffer) : void {
        super._appendDetails(buffer);
        this._format(buffer,'',this.data);
    }
    _encodeSourceCode(string : string) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let length : number = new core.DartString(string).length;
        let index : number = 0;
        while (index < length){
            let char : number = new core.DartString(string).codeUnitAt(index);
            index++;
            if (char == new core.DartString('').codeUnitAt(0)) {
                if (index < length && new core.DartString(string).codeUnitAt(index) == new core.DartString('\n').codeUnitAt(0)) {
                    index++;
                }
                buffer.write('<br>');
            }else if (char == new core.DartString('\n').codeUnitAt(0)) {
                buffer.write('<br>');
            }else if (char == new core.DartString(' ').codeUnitAt(0)) {
                buffer.write('&nbsp;');
            }else {
                buffer.writeCharCode(char);
            }
        }
        return buffer.toString();
    }
    _format(buffer : core.DartStringBuffer,indent : string,object : core.DartObject) : void {
        if (is(object, "string")) {
            buffer.write('"');
            buffer.write(this._encodeSourceCode(object));
            buffer.write('"');
        }else if (is(object, "number") || is(object, "boolean")) {
            buffer.write(object);
        }else if (is(object, core.DartMap<any,any>)) {
            buffer.write('{<br>');
            object.forEach((key : core.DartObject,value : core.DartObject) =>  {
                let newIndent : string = indent + JsonBasedEntry.singleIndent;
                buffer.write(newIndent);
                this._format(buffer,newIndent,key);
                buffer.write(' : ');
                this._format(buffer,newIndent,value);
                buffer.write('<br>');
            });
            buffer.write(indent);
            buffer.write('}');
        }else if (is(object, core.DartList<any>)) {
            buffer.write('[<br>');
            object.forEach((element : core.DartObject) =>  {
                let newIndent : string = indent + JsonBasedEntry.singleIndent;
                buffer.write(newIndent);
                this._format(buffer,newIndent,element);
                buffer.write('<br>');
            });
            buffer.write(indent);
            buffer.write(']');
        }
    }
}

export namespace MalformedLogEntry {
    export type Constructors = LogEntry.Constructors | 'MalformedLogEntry';
    export type Interface = Omit<MalformedLogEntry, Constructors>;
}
@DartClass
export class MalformedLogEntry extends LogEntry {
    entry : string;

    constructor(index : number,entry : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MalformedLogEntry(index : number,entry : string) {
        super.LogEntry(index,-1);
        this.entry = entry;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return 'Mal';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _appendDetails(buffer : core.DartStringBuffer) : void {
        super._appendDetails(buffer);
        buffer.write(this.entry);
        buffer.write('<br>');
    }
}

export namespace TaskEntry {
    export type Constructors = LogEntry.Constructors | 'TaskEntry';
    export type Interface = Omit<TaskEntry, Constructors>;
}
@DartClass
export class TaskEntry extends LogEntry {
    context : string;

    description : string;

    _taskName : string;

    _target : string;

    constructor(index : number,timeStamp : number,context : string,description : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TaskEntry(index : number,timeStamp : number,context : string,description : string) {
        this._taskName = null;
        this._target = null;
        super.LogEntry(index,timeStamp);
        this.context = context;
        this.description = description;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return 'Task';
    }
    get target() : string {
        if (this._target == null) {
            this._splitDescription();
        }
        return this._target;
    }
    get taskName() : string {
        if (this._taskName == null) {
            this._splitDescription();
        }
        return this._taskName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _appendDetails(buffer : core.DartStringBuffer) : void {
        super._appendDetails(buffer);
        buffer.write('<span class="label">Context:</span> ');
        buffer.write(this.context);
        buffer.write('<br><span class="label">Description: </span> ');
        buffer.write(this.description);
    }
    _splitDescription() : void {
        let index : number = new core.DartString(this.description).indexOf(' ');
        if (index < 0) {
            this._taskName = '';
        }else {
            this._taskName = new core.DartString(this.description).substring(0,index);
        }
        index = new core.DartString(this.description).lastIndexOf(' ');
        this._target = new core.DartString(this.description).substring(index + 1);
        let slash : number = new core.DartString(this.context).lastIndexOf('/');
        if (slash < 0) {
            slash = new core.DartString(this.context).lastIndexOf('\');
        }
        if (slash >= 0) {
            let prefix : string = new core.DartString(this.context).substring(0,slash);
            this._target = new core.DartString(this._target).replaceAll(prefix,'...');
        }
    }
}

export namespace ErrorEntry {
    export type Constructors = GenericEntry.Constructors | 'ErrorEntry';
    export type Interface = Omit<ErrorEntry, Constructors>;
}
@DartClass
export class ErrorEntry extends GenericEntry {
    constructor(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorEntry(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>) {
        super.GenericEntry(index,timeStamp,entryKind,components);
    }
}

export namespace ExceptionEntry {
    export type Constructors = GenericEntry.Constructors | 'ExceptionEntry';
    export type Interface = Omit<ExceptionEntry, Constructors>;
}
@DartClass
export class ExceptionEntry extends GenericEntry {
    constructor(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExceptionEntry(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>) {
        super.GenericEntry(index,timeStamp,entryKind,components);
    }
}

export namespace GenericPluginEntry {
    export type Constructors = GenericEntry.Constructors | 'GenericPluginEntry';
    export type Interface = Omit<GenericPluginEntry, Constructors>;
}
@DartClass
@With(PluginEntryMixin)
export class GenericPluginEntry extends GenericEntry implements PluginEntryMixin.Interface {
    pluginData : core.DartList<string>;

    constructor(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>,pluginData : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericPluginEntry(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>,pluginData : core.DartList<string>) {
        super.GenericEntry(index,timeStamp,entryKind,components);
        this.pluginData = pluginData;
    }
}

export namespace JsonBasedPluginEntry {
    export type Constructors = JsonBasedEntry.Constructors | 'JsonBasedPluginEntry';
    export type Interface = Omit<JsonBasedPluginEntry, Constructors>;
}
@DartClass
@With(PluginEntryMixin)
export class JsonBasedPluginEntry extends JsonBasedEntry implements PluginEntryMixin.Interface {
    pluginData : core.DartList<string>;

    constructor(index : number,timeStamp : number,notificationData : core.DartMap<any,any>,pluginData : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonBasedPluginEntry(index : number,timeStamp : number,notificationData : core.DartMap<any,any>,pluginData : core.DartList<string>) {
        super.JsonBasedEntry(index,timeStamp,notificationData);
        this.pluginData = pluginData;
    }
}

export namespace NotificationEntry {
    export type Constructors = JsonBasedEntry.Constructors | 'NotificationEntry';
    export type Interface = Omit<NotificationEntry, Constructors>;
}
@DartClass
export class NotificationEntry extends JsonBasedEntry {
    constructor(index : number,timeStamp : number,notificationData : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NotificationEntry(index : number,timeStamp : number,notificationData : core.DartMap<any,any>) {
        super.JsonBasedEntry(index,timeStamp,notificationData);
    }
    get event() : string {
        return this.data.get('event');
    }
    get isServerError() : boolean {
        return this.event == 'server.error';
    }
    get isServerStatus() : boolean {
        return this.event == 'server.status';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return 'Noti';
    }
    param(parameterName : string) : any {
        let parameters = this.data.get('params');
        if (is(parameters, core.DartMap<any,any>)) {
            return parameters.get(parameterName);
        }
        return null;
    }
}

export namespace RequestEntry {
    export type Constructors = JsonBasedEntry.Constructors | 'RequestEntry';
    export type Interface = Omit<RequestEntry, Constructors>;
}
@DartClass
export class RequestEntry extends JsonBasedEntry {
    constructor(index : number,timeStamp : number,requestData : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RequestEntry(index : number,timeStamp : number,requestData : core.DartMap<any,any>) {
        super.JsonBasedEntry(index,timeStamp,requestData);
    }
    get clientRequestTime() : number {
        return this.data.get('clientRequestTime');
    }
    get id() : string {
        return this.data.get('id');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return 'Req';
    }
    get method() : string {
        return this.data.get('method');
    }
    param(parameterName : string) : any {
        let parameters = this.data.get('params');
        if (is(parameters, core.DartMap<any,any>)) {
            return parameters.get(parameterName);
        }
        return null;
    }
}

export namespace ResponseEntry {
    export type Constructors = JsonBasedEntry.Constructors | 'ResponseEntry';
    export type Interface = Omit<ResponseEntry, Constructors>;
}
@DartClass
export class ResponseEntry extends JsonBasedEntry {
    constructor(index : number,timeStamp : number,responseData : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResponseEntry(index : number,timeStamp : number,responseData : core.DartMap<any,any>) {
        super.JsonBasedEntry(index,timeStamp,responseData);
    }
    get id() : string {
        return this.data.get('id');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return 'Res';
    }
    result(resultName : string) : any {
        let results = this.data.get('result');
        if (is(results, core.DartMap<any,any>)) {
            return results.get(resultName);
        }
        return null;
    }
}

export namespace PluginErrorEntry {
    export type Constructors = GenericPluginEntry.Constructors | 'PluginErrorEntry';
    export type Interface = Omit<PluginErrorEntry, Constructors>;
}
@DartClass
export class PluginErrorEntry extends GenericPluginEntry {
    constructor(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>,pluginData : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PluginErrorEntry(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>,pluginData : core.DartList<string>) {
        super.GenericPluginEntry(index,timeStamp,entryKind,components,pluginData);
    }
}

export namespace PluginExceptionEntry {
    export type Constructors = GenericPluginEntry.Constructors | 'PluginExceptionEntry';
    export type Interface = Omit<PluginExceptionEntry, Constructors>;
}
@DartClass
export class PluginExceptionEntry extends GenericPluginEntry {
    constructor(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>,pluginData : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PluginExceptionEntry(index : number,timeStamp : number,entryKind : string,components : core.DartList<string>,pluginData : core.DartList<string>) {
        super.GenericPluginEntry(index,timeStamp,entryKind,components,pluginData);
    }
}

export namespace PluginNotificationEntry {
    export type Constructors = JsonBasedPluginEntry.Constructors | 'PluginNotificationEntry';
    export type Interface = Omit<PluginNotificationEntry, Constructors>;
}
@DartClass
export class PluginNotificationEntry extends JsonBasedPluginEntry {
    constructor(index : number,timeStamp : number,notificationData : core.DartMap<any,any>,pluginData : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PluginNotificationEntry(index : number,timeStamp : number,notificationData : core.DartMap<any,any>,pluginData : core.DartList<string>) {
        super.JsonBasedPluginEntry(index,timeStamp,notificationData,pluginData);
    }
    get event() : string {
        return this.data.get('event');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return 'PluginNoti';
    }
    param(parameterName : string) : any {
        let parameters = this.data.get('params');
        if (is(parameters, core.DartMap<any,any>)) {
            return parameters.get(parameterName);
        }
        return null;
    }
}

export namespace PluginRequestEntry {
    export type Constructors = JsonBasedPluginEntry.Constructors | 'PluginRequestEntry';
    export type Interface = Omit<PluginRequestEntry, Constructors>;
}
@DartClass
export class PluginRequestEntry extends JsonBasedPluginEntry {
    constructor(index : number,timeStamp : number,requestData : core.DartMap<any,any>,pluginData : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PluginRequestEntry(index : number,timeStamp : number,requestData : core.DartMap<any,any>,pluginData : core.DartList<string>) {
        super.JsonBasedPluginEntry(index,timeStamp,requestData,pluginData);
    }
    get id() : string {
        return this.data.get('id');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return 'PluginReq';
    }
    get method() : string {
        return this.data.get('method');
    }
    param(parameterName : string) : any {
        let parameters = this.data.get('params');
        if (is(parameters, core.DartMap<any,any>)) {
            return parameters.get(parameterName);
        }
        return null;
    }
}

export namespace PluginResponseEntry {
    export type Constructors = JsonBasedPluginEntry.Constructors | 'PluginResponseEntry';
    export type Interface = Omit<PluginResponseEntry, Constructors>;
}
@DartClass
export class PluginResponseEntry extends JsonBasedPluginEntry {
    constructor(index : number,timeStamp : number,responseData : core.DartMap<any,any>,pluginData : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PluginResponseEntry(index : number,timeStamp : number,responseData : core.DartMap<any,any>,pluginData : core.DartList<string>) {
        super.JsonBasedPluginEntry(index,timeStamp,responseData,pluginData);
    }
    get id() : string {
        return this.data.get('id');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() : string {
        return 'PluginRes';
    }
    result(resultName : string) : any {
        let results = this.data.get('result');
        if (is(results, core.DartMap<any,any>)) {
            return results.get(resultName);
        }
        return null;
    }
}

export class properties {
}
