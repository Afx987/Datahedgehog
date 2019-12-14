/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/instrumentation/page/stats_page.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./page_writer";
import * as lib4 from "./../log/log";

export namespace StatsPage {
    export type Constructors = lib3.PageWriter.Constructors | 'StatsPage';
    export type Interface = Omit<StatsPage, Constructors>;
}
@DartClass
export class StatsPage extends lib3.PageWriter {
    log : lib4.InstrumentationLog;

    entryCounts : core.DartMap<string,number>;

    errorCount : number;

    pluginErrorCount : core.DartMap<string,number>;

    latencyData : core.DartMap<string,core.DartList<number>>;

    pluginResponseData : core.DartMap<string,core.DartMap<string,core.DartList<number>>>;

    completionResponseTimes : core.DartList<number>;

    constructor(log : lib4.InstrumentationLog) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatsPage(log : lib4.InstrumentationLog) {
        this.entryCounts = new core.DartMap.literal([
        ]);
        this.errorCount = 0;
        this.pluginErrorCount = new core.DartMap.literal([
        ]);
        this.latencyData = new core.DartMap.literal([
        ]);
        this.pluginResponseData = new core.DartMap.literal([
        ]);
        this.completionResponseTimes = new core.DartList.literal<number>();
        this.log = log;
        this._processEntries(this.log.logEntries);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeBody(sink : core.DartStringSink) : void {
        this.writeMenu(sink);
        this.writeTwoColumns(sink,'leftColumn',this._writeLeftColumn.bind(this),'rightColumn',this._writeRightColumn.bind(this));
    }
    writeStyleSheet(sink : core.DartStringSink) : void {
        super.writeStyleSheet(sink);
        this.writeTwoColumnStyles(sink,'leftColumn','rightColumn');
    }
    _mean(values : core.DartList<number>) : number {
        let sum : number = values.fold(0,(sum : number,latency : number) =>  {
            return sum + latency;
        });
        return op(Op.QUOTIENT,sum,values.length);
    }
    _processEntries(entries : core.DartList<lib4.LogEntry>) : void {
        var increment : (map : core.DartMap<any,number>,key : any) => void = (map : core.DartMap<any,number>,key : any) : void =>  {
            map.set(key,((map.get(key) || 0)) + 1);
        };
        for(let entry of entries) {
            let kind : string = entry.kind;
            increment(this.entryCounts,kind);
            if (is(entry, lib4.ResponseEntry)) {
                if (entry.result('error') != null) {
                    this.errorCount++;
                }
            }else if (is(entry, lib4.RequestEntry)) {
                let method : string = entry.method;
                let latency : number = entry.timeStamp - entry.clientRequestTime;
                this.latencyData.putIfAbsent(method,() =>  {
                    return new core.DartList<number>();
                }).add(latency);
                if (method == 'completion.getSuggestions') {
                    let response : lib4.ResponseEntry = this.log.responseFor(entry);
                    if (response != null) {
                        let id : string = response.result('id');
                        if (id != null) {
                            let events : core.DartList<lib4.NotificationEntry> = this.log.completionEventsWithId(id);
                            if (events != null && events.length > 0) {
                                this.completionResponseTimes.add(events[0].timeStamp - entry.timeStamp);
                            }
                        }
                    }
                }
            }else if (is(entry, lib4.PluginResponseEntry)) {
                if (entry.result('error') != null) {
                    let count : number = (this.pluginErrorCount.get(entry.pluginId) || 0);
                    this.pluginErrorCount.set(entry.pluginId,count + 1);
                }
            }else if (is(entry, lib4.PluginRequestEntry)) {
                let response : lib4.PluginResponseEntry = this.log.pluginResponseFor(entry);
                let responseTime : number = response.timeStamp - entry.timeStamp;
                let pluginData = this.pluginResponseData.putIfAbsent(entry.pluginId,() =>  {
                    return new core.DartMap.literal([
                    ]);
                });
                pluginData.putIfAbsent(entry.method,() =>  {
                    return new core.DartList<number>();
                }).add(responseTime);
            }
        }
    }
    _writeLeftColumn(sink : core.DartStringSink) : void {
        let filePaths : core.DartList<string> = this.log.logFilePaths;
        let entries : core.DartList<lib4.LogEntry> = this.log.logEntries;
        let startDate : core.DartDateTime = entries[0].toTime;
        let endDate : core.DartDateTime = entries[entries.length - 1].toTime;
        let duration : core.DartDuration = endDate.difference(startDate);
        let entryKinds : core.DartList<string> = ((_) : core.DartList<string> =>  {
            {
                _.sort();
                return _;
            }
        })(this.entryCounts.keys.toList());
        sink.writeln('<h3>General</h3>');
        sink.writeln('<p>');
        if (filePaths.length == 1) {
            sink.write('<span class="label">Log file:</span> ');
            sink.write(filePaths[0]);
        }else {
            sink.write('<span class="label">Log files:</span> ');
            let needsSeparator : boolean = false;
            for(let path of filePaths) {
                if (needsSeparator) {
                    sink.write(', ');
                }else {
                    needsSeparator = true;
                }
                sink.write(path);
            }
        }
        sink.writeln('<br>');
        sink.write('<span class="label">Start time:</span> ');
        this.writeDate(sink,startDate);
        sink.writeln('<br>');
        sink.write('<span class="label">End time:</span> ');
        this.writeDate(sink,endDate);
        sink.writeln('<br>');
        sink.write('<span class="label">Duration:</span> ');
        sink.write(duration.toString());
        sink.writeln('</p>');
        sink.writeln('<h3>Entries</h3>');
        sink.write('<p>');
        sink.write('<span class="label">Number of entries:</span> ');
        sink.write(entries.length);
        sink.writeln('</p>');
        sink.write('<p>');
        sink.write('<span class="label">Error count:</span> ');
        sink.write(this.errorCount);
        sink.writeln('</p>');
        this.pluginErrorCount.forEach((pluginId : string,count : number) =>  {
            sink.write('<p>');
            sink.write(`<span class="label">Errors from ${pluginId}:</span> `);
            sink.write(count);
            sink.writeln('</p>');
        });
        sink.writeln('<table>');
        sink.writeln('<tr><th>count</th><th>kind</th></tr>');
        for(let kind of entryKinds) {
            sink.write('<tr><td class="int">');
            sink.write(this.entryCounts.get(kind));
            sink.write('</td><td>');
            sink.write(kind);
            sink.writeln('</td></tr>');
        }
        sink.write('<tr><td class="int">');
        sink.write(entries.length);
        sink.writeln('</td><td>Total</td></tr>');
        sink.writeln('</table>');
    }
    _writeRightColumn(sink : core.DartStringSink) : void {
        this.completionResponseTimes.sort();
        sink.writeln('<h3>Latency</h3>');
        sink.write('<p>');
        sink.write('<span class="label">Latency by method</span>');
        sink.writeln('</p>');
        sink.writeln('<table>');
        sink.writeln('<tr><th>min</th><th>mean</th><th>max</th><th>method</th></tr>');
        let methodNames : core.DartList<string> = ((_) : core.DartList<string> =>  {
            {
                _.sort();
                return _;
            }
        })(this.latencyData.keys.toList());
        for(let method of methodNames) {
            let latencies : core.DartList<number> = ((_) : core.DartList<number> =>  {
                {
                    _.sort();
                    return _;
                }
            })(this.latencyData.get(method));
            sink.write('<tr><td class="int">');
            sink.write(latencies[0]);
            sink.write('</td><td class="int">');
            sink.write(this._mean(latencies));
            sink.write('</td><td class="int">');
            sink.write(latencies[latencies.length - 1]);
            sink.write('</td><td>');
            sink.write(method);
            sink.writeln('</td></tr>');
        }
        sink.writeln('</table>');
        sink.writeln('<h3>Completion</h3>');
        sink.write('<p>');
        sink.write('<span class="label">Time to first notification:</span> ');
        sink.write(this.completionResponseTimes[0]);
        sink.write(', ');
        sink.write(this._mean(this.completionResponseTimes));
        sink.write(', ');
        sink.write(this.completionResponseTimes[this.completionResponseTimes.length - 1]);
        sink.writeln('</p>');
        if (this.pluginResponseData.isNotEmpty) {
            sink.writeln('<h3>Plugin response times</h3>');
            this.pluginResponseData.forEach((pluginId : string,responseData : core.DartMap<string,core.DartList<number>>) =>  {
                sink.write('<p>');
                sink.write(pluginId);
                sink.writeln('</p>');
                sink.writeln('<table>');
                let methodNames : core.DartList<string> = ((_) : core.DartList<string> =>  {
                    {
                        _.sort();
                        return _;
                    }
                })(responseData.keys.toList());
                for(let method of methodNames) {
                    let responseTimes : core.DartList<number> = ((_) : core.DartList<number> =>  {
                        {
                            _.sort();
                            return _;
                        }
                    })(responseData.get(method));
                    sink.write('<tr><td class="int">');
                    sink.write(responseTimes[0]);
                    sink.write('</td><td class="int">');
                    sink.write(this._mean(responseTimes));
                    sink.write('</td><td class="int">');
                    sink.write(responseTimes[responseTimes.length - 1]);
                    sink.write('</td><td>');
                    sink.write(method);
                    sink.writeln('</td></tr>');
                }
                /* TODO (EmptyStatementImpl) : ; */;
                sink.writeln('</table>');
            });
        }
    }
}

export class properties {
}
