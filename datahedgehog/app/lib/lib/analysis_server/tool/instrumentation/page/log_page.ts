/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/instrumentation/page/log_page.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./page_writer";
import * as lib4 from "./../log/log";
import * as lib5 from "./../server";
import * as math from "@dart2ts/dart/math";

export namespace LogPage {
    export type Constructors = lib3.PageWriter.Constructors | 'LogPage';
    export type Interface = Omit<LogPage, Constructors>;
}
@DartClass
export class LogPage extends lib3.PageWriter {
    log : lib4.InstrumentationLog;

    selectedGroup : lib4.EntryGroup;

    entries : core.DartList<lib4.LogEntry>;

    pageStart : number;

    pageLength : number;

    prefixLength : number;

    pluginIdMap : core.DartMap<string,number>;

    constructor(log : lib4.InstrumentationLog) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LogPage(log : lib4.InstrumentationLog) {
        this.pageStart = 0;
        this.pageLength = null;
        this.pluginIdMap = new core.DartMap.literal([
        ]);
        this.log = log;
    }
    getPluginId(pluginId : string) : number {
        return this.pluginIdMap.putIfAbsent(pluginId,() =>  {
            return this.pluginIdMap.length;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeBody(sink : core.DartStringSink) : void {
        this.entries = this.log.entriesInGroup(this.selectedGroup);
        this.prefixLength = this.computePrefixLength(this.entries);
        this.writeMenu(sink);
        this.writeTwoColumns(sink,'leftColumn',this._writeLeftColumn.bind(this),'rightColumn',this._writeRightColumn.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeScripts(sink : core.DartStringSink) : void {
        super.writeScripts(sink);
        sink.writeln('var highlightedRows = [];\nfunction clearHighlight() {\n  for (i = 0; i < highlightedRows.length; i++) {\n    setFontWeight(highlightedRows[i], "normal");\n  }\n}\nfunction highlight(requestId, responseId) {\n  clearHighlight();\n  setFontWeight(requestId, "bold");\n  setFontWeight(responseId, "bold");\n  highlightedRows = [requestId, responseId];\n}\nfunction setFontWeight(id, weight) {\n  var element = document.getElementById(id);\n  if (element != null) {\n    element.style.fontWeight = weight;\n  }\n}\nfunction setDetails(detailsContent) {\n  var element = document.getElementById("details");\n  if (element != null) {\n    element.innerHTML = detailsContent;\n  }\n}\nfunction selectEntryGroup(pageStart) {\n  var element = document.getElementById("entryGroup");\n  var url = "/log?group=" + element.value;\n  window.location.assign(url);\n}\n');
    }
    writeStyleSheet(sink : core.DartStringSink) : void {
        super.writeStyleSheet(sink);
        this.writeTwoColumnStyles(sink,'leftColumn','rightColumn');
    }
    _getDuration(startEntry : lib4.LogEntry,endEntry : lib4.LogEntry) : string {
        if (startEntry != null && endEntry != null) {
            return new core.DartInt((endEntry.timeStamp - startEntry.timeStamp)).toString();
        }
        return '?';
    }
    _writeEntry(sink : core.DartStringSink,entry : lib4.LogEntry) : void {
        let id : string = null;
        let clickHandler : string = 'clearHighlight()';
        let icon : string = '';
        let description : string = entry.kindName;
        if (is(entry, lib4.RequestEntry)) {
            let entryId : string = entry.id;
            id = `req${entryId}`;
            clickHandler = `highlight('req${entryId}', 'res${entryId}')`;
            icon = '&rarr;';
            description = entry.method;
        }else if (is(entry, lib4.ResponseEntry)) {
            let entryId : string = entry.id;
            let request : lib4.RequestEntry = this.log.requestFor(entry);
            id = `res${entryId}`;
            clickHandler = `highlight('req${entryId}', 'res${entryId}')`;
            icon = '&larr;';
            if (request != null) {
                let latency : number = entry.timeStamp - request.timeStamp;
                description = `${request.method} <span class="gray">(${latency} ms)</span>`;
            }
        }else if (is(entry, lib4.NotificationEntry)) {
            id = `e${entry.index}`;
            let pairedEntry : lib4.LogEntry = this.log.pairedEntry(entry);
            if (pairedEntry != null) {
                let pairedId : string = `e${pairedEntry.index}`;
                clickHandler = `highlight('${id}', '${pairedId}')`;
            }
            icon = '&larr;';
            description = entry.event;
            if (entry.isServerStatus) {
                let analysisStatus = entry.param('analysis');
                if (is(analysisStatus, core.DartMap<any,any>)) {
                    if (analysisStatus.get('isAnalyzing')) {
                        description = `${description} <span class="gray">(analysis)</span> (<a href="${lib5.WebServer.taskPath}?analysisStart=${entry.index}">tasks</a>)`;
                    }else {
                        let duration : string = this._getDuration(pairedEntry,entry);
                        description = `${description} <span class="gray">(analysis - ${duration} ms)</span>`;
                    }
                }
                let pubStatus = entry.param('pub');
                if (is(pubStatus, core.DartMap<any,any>)) {
                    if (pubStatus.get('isListingPackageDirs')) {
                        description = `${description} <span class="gray">(pub)</span>`;
                    }else {
                        let duration : string = this._getDuration(pairedEntry,entry);
                        description = `${description} <span class="gray">(pub - ${duration} ms)</span>`;
                    }
                }
            }
        }else if (is(entry, lib4.PluginRequestEntry)) {
            let entryId : string = entry.id;
            let pluginId : number = this.getPluginId(entry.pluginId);
            id = `req${pluginId}.${entryId}`;
            clickHandler = `highlight('req${pluginId}.${entryId}', 'res${pluginId}.${entryId}')`;
            icon = '&rarr;';
            description = `${entry.method} (${entry.shortPluginId})`;
        }else if (is(entry, lib4.PluginResponseEntry)) {
            let entryId : string = entry.id;
            let pluginId : number = this.getPluginId(entry.pluginId);
            let request : lib4.PluginRequestEntry = this.log.pluginRequestFor(entry);
            id = `res${pluginId}.${entryId}`;
            clickHandler = `highlight('req${pluginId}.${entryId}', 'res${pluginId}.${entryId}')`;
            icon = '&larr;';
            if (request != null) {
                let latency : number = entry.timeStamp - request.timeStamp;
                description = `${request.method} <span class="gray">(${latency} ms)</span> (${entry.shortPluginId})`;
            }
        }else if (is(entry, lib4.PluginNotificationEntry)) {
            id = `e${entry.index}`;
            let pairedEntry : lib4.LogEntry = this.log.pairedEntry(entry);
            if (pairedEntry != null) {
                let pairedId : string = `e${pairedEntry.index}`;
                clickHandler = `highlight('${id}', '${pairedId}')`;
            }
            icon = '&larr;';
            description = `${entry.event} (${entry.shortPluginId})`;
        }else if (is(entry, lib4.TaskEntry)) {
            description = entry.description;
        }else if (is(entry, lib4.ErrorEntry)) {
            description = `<span class="error">${description}</span>`;
        }else if (is(entry, lib4.PluginErrorEntry)) {
            description = `<span class="error">${description}</span> (${entry.shortPluginId})`;
        }else if (is(entry, lib4.ExceptionEntry)) {
            description = `<span class="error">${description}</span>`;
        }else if (is(entry, lib4.MalformedLogEntry)) {
            description = `<span class="error">${description}</span>`;
        }
        id = id == null ? '' : `id="${id}" `;
        clickHandler = `${clickHandler}; setDetails('${this.escape(entry.details())}')`;
        let timeStamp : string = new core.DartInt(entry.timeStamp).toString();
        if (this.prefixLength > 0) {
            timeStamp = new core.DartString(timeStamp).substring(this.prefixLength);
        }
        sink.writeln(`<tr ${id}onclick="${clickHandler}">`);
        sink.writeln(`<td>${icon}</td>`);
        sink.writeln('<td>');
        sink.writeln(timeStamp);
        sink.writeln('</td>');
        sink.writeln('<td style="white-space:nowrap;">');
        sink.writeln(description);
        sink.writeln('</td>');
        sink.writeln('</tr>');
    }
    _writeLeftColumn(sink : core.DartStringSink) : void {
        let length : number = this.entries.length;
        let pageEnd : number = this.pageLength == null ? length : math.min(this.pageStart + this.pageLength,length);
        sink.writeln('<div class="columnHeader">');
        sink.writeln('<div style="float: left">');
        sink.writeln('<select id="entryGroup" onchange="selectEntryGroup()">');
        for(let group of lib4.EntryGroup.groups) {
            sink.write('<option value="');
            sink.write(group.id);
            sink.write('"');
            if (op(Op.EQUALS,group,this.selectedGroup)) {
                sink.write(' selected');
            }
            sink.write('>');
            sink.write(group.name);
            sink.writeln('</option>');
        }
        sink.writeln('</select>');
        if (length == 0) {
            sink.writeln('No matching events');
        }else {
            sink.writeln(`Events ${this.pageStart} - ${pageEnd - 1} of ${length}`);
        }
        sink.writeln('</div>');
        sink.writeln('<div style="float: right">');
        if (this.pageStart == 0) {
            sink.writeln('<button type="button" disabled><b>&lt;</b></button>');
        }else {
            sink.write('<button type="button">');
            sink.write(`<a href="${lib5.WebServer.logPath}?group=${this.selectedGroup.id}&start=${this.pageStart - this.pageLength}">`);
            sink.write('<b>&lt;</b>');
            sink.writeln('</a></button>');
        }
        if (pageEnd == length) {
            sink.writeln('<button type="button" disabled><b>&gt;</b></button>');
        }else {
            sink.write('<button type="button">');
            sink.write(`<a href="${lib5.WebServer.logPath}?group=${this.selectedGroup.id}&start=${this.pageStart + this.pageLength}">`);
            sink.write('<b>&gt;</b>');
            sink.writeln('</a></button>');
        }
        sink.writeln('</div>');
        sink.writeln('</div>');
        sink.writeln('<table class="fullWidth">');
        sink.writeln('<tr>');
        sink.writeln('<th class="narrow"></th>');
        sink.writeln('<th>Time</th>');
        sink.writeln('<th>Kind</th>');
        sink.writeln('</tr>');
        for(let i : number = this.pageStart; i < pageEnd; i++){
            let entry : lib4.LogEntry = this.entries[i];
            this._writeEntry(sink,entry);
        }
        sink.writeln('</table>');
    }
    _writeRightColumn(sink : core.DartStringSink) : void {
        sink.writeln('<div class="columnHeader">');
        sink.writeln('<p><b>Entry Details</b></p>');
        sink.writeln('</div>');
        sink.writeln('<div id="details"></div>');
    }
}

export class properties {
}
