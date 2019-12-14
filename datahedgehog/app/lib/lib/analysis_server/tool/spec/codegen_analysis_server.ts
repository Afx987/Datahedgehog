/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/codegen_analysis_server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./api";
import * as lib4 from "./codegen_java";

export namespace CodegenAnalysisServer {
    export type Constructors = lib4.CodegenJavaVisitor.Constructors | 'CodegenAnalysisServer';
    export type Interface = Omit<CodegenAnalysisServer, Constructors>;
}
@DartClass
export class CodegenAnalysisServer extends lib4.CodegenJavaVisitor {
    constructor(api : lib3.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CodegenAnalysisServer(api : lib3.Api) {
        super.CodegenJavaVisitor(api);
    }
    consumerName(request : lib3.Request) : string {
        return camelJoin(new core.DartList.literal(request.method,'consumer'),{
            doCapitalize : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitApi() : void {
        outputHeader({
            javaStyle : true});
        writeln('package com.google.dart.server.generated;');
        writeln();
        writeln('import com.google.dart.server.*;');
        writeln('import org.dartlang.analysis.server.protocol.*;');
        writeln();
        writeln('import java.util.List;');
        writeln('import java.util.Map;');
        writeln();
        writeln('/**\n * The interface {@code AnalysisServer} defines the behavior of objects that interface to an\n * analysis server.\n * \n * @coverage dart.server\n */');
        this.makeClass('public interface AnalysisServer',() =>  {
            this.publicMethod('addAnalysisServerListener',() =>  {
                writeln('/**\n * Add the given listener to the list of listeners that will receive notification when new\n * analysis results become available.\n * \n * @param listener the listener to be added\n */');
                writeln('public void addAnalysisServerListener(AnalysisServerListener listener);');
            });
            this.publicMethod('removeAnalysisServerListener',() =>  {
                writeln('/**\n * Remove the given listener from the list of listeners that will receive notification when new\n   * analysis results become available.\n * \n * @param listener the listener to be removed\n */');
                writeln('public void removeAnalysisServerListener(AnalysisServerListener listener);');
            });
            this.publicMethod('addStatusListener',() =>  {
                writeln('/**\n * Add the given listener to the list of listeners that will receive notification when the server\n * is not active\n * \n * @param listener the listener to be added\n */');
                writeln('public void addStatusListener(AnalysisServerStatusListener listener);');
            });
            this.publicMethod('isSocketOpen',() =>  {
                writeln('/**\n * Return {@code true} if the socket is open.\n */');
                writeln('public boolean isSocketOpen();');
            });
            this.publicMethod('start',() =>  {
                writeln('/**\n * Start the analysis server.\n */');
                writeln('public void start() throws Exception;');
            });
            super.visitApi();
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRequest(request : lib3.Request) : void {
        let methodName : string = `${request.domainName}_${request.method}`;
        this.publicMethod(methodName,() =>  {
            docComment(this.toHtmlVisitor.collectHtml(() =>  {
                this.toHtmlVisitor.write(`{@code ${request.longMethod}}`);
                this.toHtmlVisitor.translateHtml(request.html);
                this.toHtmlVisitor.javadocParams(request.params);
                if (request.deprecated) {
                    this.toHtmlVisitor.p(() =>  {
                        return this.toHtmlVisitor.write('@deprecated');
                    });
                }
            }));
            write(`public void ${methodName}(`);
            let arguments : core.DartList<string> = new core.DartList.literal();
            if (request.params != null) {
                for(let field of request.params.fields) {
                    arguments.add(`${this.javaType(field.type)} ${this.javaName(field.name)}`);
                }
            }
            if (request.result != null) {
                arguments.add(`${this.consumerName(request)} consumer`);
            }
            write(arguments.join(', '));
            writeln(');');
        });
    }
}

export class properties {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = lib4.javaGeneratedFile('tool/spec/generated/java/AnalysisServer.java',(api : lib3.Api) =>  {
                return new CodegenAnalysisServer(api);
            });
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

}
