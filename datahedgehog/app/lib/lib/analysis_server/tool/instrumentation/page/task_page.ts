/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/instrumentation/page/task_page.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./page_writer";
import * as lib4 from "./../log/log";
import * as math from "@dart2ts/dart/math";
import * as lib6 from "./../server";

export namespace TaskPage {
    export type Constructors = lib3.PageWriter.Constructors | 'TaskPage';
    export type Interface = Omit<TaskPage, Constructors>;
}
@DartClass
export class TaskPage extends lib3.PageWriter {
    log : lib4.InstrumentationLog;

    analysisStart : number;

    pageStart : number;

    pageLength : number;

    prefixLength : number;

    constructor(log : lib4.InstrumentationLog) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TaskPage(log : lib4.InstrumentationLog) {
        this.analysisStart = 0;
        this.pageStart = 0;
        this.pageLength = null;
        this.log = log;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeBody(sink : core.DartStringSink) : void {
        this.writeMenu(sink);
        this.writeTwoColumns(sink,'leftColumn',this._writeLeftColumn.bind(this),'rightColumn',this._writeRightColumn.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeScripts(sink : core.DartStringSink) : void {
        super.writeScripts(sink);
        sink.writeln('function setDetails(detailsContent) {\n  var element = document.getElementById("details");\n  if (element != null) {\n    element.innerHTML = detailsContent;\n  }\n}\n');
    }
    writeStyleSheet(sink : core.DartStringSink) : void {
        super.writeStyleSheet(sink);
        this.writeTwoColumnStyles(sink,'leftColumn','rightColumn');
    }
    _writeEntry(sink : core.DartStringSink,entry : lib4.TaskEntry) : void {
        let clickHandler : string = `setDetails('${this.escape(entry.details())}')`;
        let timeStamp : string = new core.DartInt(entry.timeStamp).toString();
        if (this.prefixLength > 0) {
            timeStamp = new core.DartString(timeStamp).substring(this.prefixLength);
        }
        sink.writeln(`<tr onclick="${clickHandler}">`);
        sink.writeln('<td>');
        sink.writeln(timeStamp);
        sink.writeln('</td>');
        sink.writeln('<td>');
        sink.writeln(entry.taskName);
        sink.writeln('</td>');
        sink.writeln('<td style="white-space:nowrap;">');
        sink.writeln(entry.target);
        sink.writeln('</td>');
        sink.writeln('</tr>');
    }
    _writeLeftColumn(sink : core.DartStringSink) : void {
        let entries : core.DartList<lib4.TaskEntry> = this.log.taskEntriesFor(this.analysisStart);
        this.prefixLength = this.computePrefixLength(entries);
        let length : number = entries.length;
        let pageEnd : number = this.pageLength == null ? length : math.min(this.pageStart + this.pageLength,length);
        sink.writeln('<div class="columnHeader">');
        sink.writeln('<div style="float: left">');
        sink.writeln(`Tasks ${this.pageStart} - ${pageEnd - 1} of ${length - 1}`);
        sink.writeln('</div>');
        sink.writeln('<div style="float: right">');
        if (this.pageStart == 0) {
            sink.writeln('<button type="button" disabled><b>&lt;</b></button>');
        }else {
            sink.write('<button type="button">');
            sink.write(`<a href="${lib6.WebServer.taskPath}?analysisStart=${this.analysisStart}&start=${this.pageStart - this.pageLength}">`);
            sink.write('<b>&lt;</b>');
            sink.writeln('</a></button>');
        }
        if (pageEnd == length) {
            sink.writeln('<button type="button" disabled><b>&gt;</b></button>');
        }else {
            sink.write('<button type="button">');
            sink.write(`<a href="${lib6.WebServer.taskPath}?analysisStart=${this.analysisStart}&start=${this.pageStart + this.pageLength}">`);
            sink.write('<b>&gt;</b>');
            sink.writeln('</a></button>');
        }
        sink.writeln('</div>');
        sink.writeln('</div>');
        sink.writeln('<table class="fullWidth">');
        sink.writeln('<tr>');
        sink.writeln('<th>Time</th>');
        sink.writeln('<th>Task</th>');
        sink.writeln('<th>Target</th>');
        sink.writeln('</tr>');
        for(let i : number = this.pageStart; i < pageEnd; i++){
            let entry : lib4.LogEntry = entries[i];
            this._writeEntry(sink,entry);
        }
        sink.writeln('</table>');
    }
    _writeRightColumn(sink : core.DartStringSink) : void {
        sink.writeln('<div class="columnHeader">');
        sink.writeln('<p><b>Task Details</b></p>');
        sink.writeln('</div>');
        sink.writeln('<div id="details"></div>');
    }
}

export class properties {
}
