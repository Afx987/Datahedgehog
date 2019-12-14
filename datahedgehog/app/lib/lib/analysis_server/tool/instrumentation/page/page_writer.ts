/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/instrumentation/page/page_writer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as lib4 from "./../log/log";
import * as lib5 from "./../server";

export namespace PageWriter {
    export type Constructors = 'PageWriter';
    export type Interface = Omit<PageWriter, Constructors>;
}
@DartClass
export class PageWriter {
    private static __$htmlEscape : convert.HtmlEscape;
    static get htmlEscape() : convert.HtmlEscape { 
        if (this.__$htmlEscape===undefined) {
            this.__$htmlEscape = new convert.HtmlEscape();
        }
        return this.__$htmlEscape;
    }
    static set htmlEscape(__$value : convert.HtmlEscape)  { 
        this.__$htmlEscape = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    PageWriter() {
    }
    computePrefixLength(entries : core.DartList<lib4.LogEntry>) : number {
        let length : number = entries.length;
        if (length < 2) {
            return 0;
        }
        let firstTime : string = new core.DartInt(entries[0].timeStamp).toString();
        let lastTime : string = new core.DartInt(entries[length - 1].timeStamp).toString();
        let prefixLength : number = 0;
        let timeLength : number = new core.DartString(firstTime).length;
        while (prefixLength < timeLength && new core.DartString(firstTime).codeUnitAt(prefixLength) == new core.DartString(lastTime).codeUnitAt(prefixLength)){
            prefixLength++;
        }
        return prefixLength;
    }
    escape(unsafe : string) : string {
        return new core.DartString(PageWriter.htmlEscape.convert(unsafe)).replaceAll('&#39;','&amp;#39;');
    }
    @Abstract
    writeBody(sink : core.DartStringSink) : void{ throw 'abstract'}
    writeDate(sink : core.DartStringSink,date : core.DartDateTime) : void {
        let isoString : string = date.toIso8601String();
        let index : number = new core.DartString(isoString).indexOf('T');
        let dateString : string = new core.DartString(isoString).substring(0,index);
        let timeString : string = new core.DartString(isoString).substring(index + 1);
        sink.write(dateString);
        sink.write(' at ');
        sink.write(timeString);
    }
    writeMenu(sink : core.DartStringSink) : void {
        sink.writeln('<div class="menu">');
        sink.write(`<a href="${lib5.WebServer.logPath}" class="menuItem">Log</a>`);
        sink.write('&nbsp;&bullet;&nbsp;');
        sink.write(`<a href="${lib5.WebServer.statsPath}" class="menuItem">Stats</a>`);
        sink.writeln('</div>');
    }
    writePage(sink : core.DartStringSink) : void {
        sink.writeln('<!DOCTYPE html>');
        sink.writeln('<html lang="en-US">');
        sink.writeln('<head>');
        sink.writeln('<meta charset="utf-8">');
        sink.writeln('<meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0">');
        sink.writeln('<title>Instrumentation Log</title>');
        sink.writeln('<style>');
        this.writeStyleSheet(sink);
        sink.writeln('</style>');
        sink.writeln('<script>');
        this.writeScripts(sink);
        sink.writeln('</script>');
        sink.writeln('</head>');
        sink.writeln('<body>');
        this.writeBody(sink);
        sink.writeln('</body>');
        sink.writeln('</html>');
    }
    writeScripts(sink : core.DartStringSink) : void {
    }
    writeStyleSheet(sink : core.DartStringSink) : void {
        sink.writeln('a {\n  color: #000000;\n  text-decoration: none;\n}\na.menuItem {\n  font-weight: bold;\n}\nbody {\n  font-family: sans-serif;\n  height: 100%;\n  margin: 0px;\n  overflow: hidden;\n  padding: 0px;\n  width: 100%;\n}\ndiv.columnHeader {\n}\ndiv.button {\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid;\n  height: 16px;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\ndiv.inset {\n  padding: 10px;\n}\ndiv.menu {\n  background-color: #cce6ff;\n  padding: 5px;\n}\nhtml {\n  height: 100%;\n  width: 100%;\n}\nspan.button {\n  border-radius: 5px;\n  border: 1px solid;\n  height: 16px;\n  width: 16px;\n}\nspan.error {\n  color: #ff0000;\n}\nspan.gray {\n  color: #777777;\n}\nspan.label {\n  font-weight: bold;\n}\ntable.fullWidth {\n  border: 0px;\n  width: 100%;\n}\ntd.halfWidth {\n  width: 50%;\n  vertical-align: top;\n}\ntd.int {\n  text-align: right;\n}\nth {\n  text-align: left;\n}\nth.narrow {\n  width: 16px;\n}\n\n#container {\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n  width: 100%;\n}\n#content {\n  height: 90%;\n  width: 100%;\n}\n');
    }
    writeThreeColumns(sink : core.DartStringSink,leftColumnId : string,writeLeftColumn : (sink : core.DartStringSink) => void,centerColumnId : string,writeCenterColumn : (sink : core.DartStringSink) => void,rightColumnId : string,writeRightColumn : (sink : core.DartStringSink) => void) : void {
        sink.writeln('<div>');
        sink.writeln('  <div>');
        sink.writeln(`    <div id="${leftColumnId}">`);
        sink.writeln('      <div class="inset">');
        writeLeftColumn(sink);
        sink.writeln('      </div>');
        sink.writeln('    </div>');
        sink.writeln(`    <div id="${rightColumnId}">`);
        sink.writeln('      <div class="inset">');
        writeRightColumn(sink);
        sink.writeln('      </div>');
        sink.writeln('    </div>');
        sink.writeln(`    <div id="${centerColumnId}">`);
        sink.writeln('      <div class="inset">');
        writeCenterColumn(sink);
        sink.writeln('      </div>');
        sink.writeln('    </div>');
        sink.writeln('  </div>');
        sink.writeln('</div>');
    }
    writeThreeColumnStyles(sink : core.DartStringSink,leftColumnId : string,centerColumnId : string,rightColumnId : string) : void {
        sink.writeln(`#${leftColumnId} {\n  float: left;\n  height: 100%;\n  overflow: auto;\n  width: 33%;\n}\n#${centerColumnId} {\n  height: 100%;\n  overflow: auto;\n  width: 33%;\n}\n#${rightColumnId} {\n  float: right;\n  height: 100%;\n  overflow: auto;\n  width: 33%;\n}\n`);
    }
    writeTwoColumns(sink : core.DartStringSink,leftColumnId : string,writeLeftColumn : (sink : core.DartStringSink) => void,rightColumnId : string,writeRightColumn : (sink : core.DartStringSink) => void) : void {
        sink.writeln('<div id="container">');
        sink.writeln('  <div id="content">');
        sink.writeln(`    <div id="${leftColumnId}">`);
        sink.writeln('      <div class="inset">');
        writeLeftColumn(sink);
        sink.writeln('      </div>');
        sink.writeln('    </div>');
        sink.writeln(`    <div id="${rightColumnId}">`);
        sink.writeln('      <div class="inset">');
        writeRightColumn(sink);
        sink.writeln('      </div>');
        sink.writeln('    </div>');
        sink.writeln('  </div>');
        sink.writeln('</div>');
    }
    writeTwoColumnStyles(sink : core.DartStringSink,leftColumnId : string,rightColumnId : string) : void {
        sink.writeln(`#${leftColumnId} {\n  float: left;\n  height: 100%;\n  overflow: auto;\n  width: 50%;\n}\n#${rightColumnId} {\n  float: right;\n  height: 100%;\n  overflow: auto;\n  width: 50%;\n}\n`);
    }
}

export class properties {
}
