/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/codegen_inttest_methods.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "./from_html";
import * as lib5 from "./codegen_dart";
import * as lib6 from "./to_html";
import * as lib7 from "./api";
import * as convert from "@dart2ts/dart/convert";

export namespace CodegenInttestMethodsVisitor {
    export type Constructors = lib5.DartCodegenVisitor.Constructors | 'CodegenInttestMethodsVisitor';
    export type Interface = Omit<CodegenInttestMethodsVisitor, Constructors>;
}
@DartClass
@With(any)
export class CodegenInttestMethodsVisitor extends lib5.DartCodegenVisitor implements any.Interface {
    packageName : string;

    toHtmlVisitor : lib6.ToHtmlVisitor;

    fieldInitializationCode : core.DartList<string>;

    notificationSwitchContents : core.DartList<string>;

    constructor(packageName : string,api : lib7.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CodegenInttestMethodsVisitor(packageName : string,api : lib7.Api) {
        this.fieldInitializationCode = new core.DartList.literal<string>();
        this.notificationSwitchContents = new core.DartList.literal<string>();
        this.toHtmlVisitor = new lib6.ToHtmlVisitor(api);
        super.DartCodegenVisitor(api);
        this.packageName = packageName;
        codeGeneratorSettings.commentLineLength = 79;
        codeGeneratorSettings.languageName = 'dart';
    }
    formatArgument(field : lib7.TypeObjectField) : string {
        return `${this.dartType(field.type)} ${field.name}`;
    }
    jsonType(type : lib7.TypeDecl) : string {
        type = this.resolveTypeReferenceChain(type);
        if (is(type, lib7.TypeEnum)) {
            return 'String';
        }else if (is(type, lib7.TypeList)) {
            return `List<${this.jsonType(type.itemType)}>`;
        }else if (is(type, lib7.TypeMap)) {
            return `Map<String, ${this.jsonType(type.valueType)}>`;
        }else if (is(type, lib7.TypeObject)) {
            return 'Map<String, dynamic>';
        }else if (is(type, lib7.TypeReference)) {
            switch (type.typeName) {
                case 'String':
                case 'int':
                case 'bool':
                    return type.typeName;
                case 'object':
                    return 'Map<String, dynamic>';
                default:
                    throw new core.Exception(type.typeName);
            }
        }else if (is(type, lib7.TypeUnion)) {
            return 'Object';
        }else {
            throw new core.Exception('Unexpected kind of TypeDecl');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitApi() {
        outputHeader({
            year : '2017'});
        writeln();
        writeln('/**');
        writeln(' * Convenience methods for running integration tests');
        writeln(' */');
        writeln("import 'dart:async';");
        writeln();
        writeln(`import 'package:${this.packageName}/protocol/protocol_generated.dart';`);
        writeln(`import 'package:${this.packageName}/src/protocol/protocol_internal.dart';`);
        writeln("import 'package:test/test.dart';");
        writeln();
        writeln("import 'integration_tests.dart';");
        writeln("import 'protocol_matchers.dart';");
        for(let uri of this.api.types.importUris) {
            write("import '");
            write(uri);
            writeln("';");
        }
        writeln();
        writeln('/**');
        writeln(' * Convenience methods for running integration tests');
        writeln(' */');
        writeln('abstract class IntegrationTestMixin {');
        indent(() =>  {
            writeln('Server get server;');
            super.visitApi();
            writeln();
            docComment(this.toHtmlVisitor.collectHtml(() =>  {
                this.toHtmlVisitor.writeln('Initialize the fields in InttestMixin, and');
                this.toHtmlVisitor.writeln('ensure that notifications will be handled.');
            }));
            writeln('void initializeInttestMixin() {');
            indent(() =>  {
                write(this.fieldInitializationCode.join());
            });
            writeln('}');
            writeln();
            docComment(this.toHtmlVisitor.collectHtml(() =>  {
                this.toHtmlVisitor.writeln('Dispatch the notification named [event], and');
                this.toHtmlVisitor.writeln('containing parameters [params], to the');
                this.toHtmlVisitor.writeln('appropriate stream.');
            }));
            writeln('void dispatchNotification(String event, params) {');
            indent(() =>  {
                writeln('ResponseDecoder decoder = new ResponseDecoder(null);');
                writeln('switch (event) {');
                indent(() =>  {
                    write(this.notificationSwitchContents.join());
                    writeln('default:');
                    indent(() =>  {
                        writeln("fail('Unexpected notification: $event');");
                        writeln('break;');
                    });
                });
                writeln('}');
            });
            writeln('}');
        });
        writeln('}');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNotification(notification : lib7.Notification) {
        let streamName : string = camelJoin(new core.DartList.literal('on',notification.domainName,notification.event));
        let className : string = camelJoin(new core.DartList.literal(notification.domainName,notification.event,'params'),{
            doCapitalize : true});
        writeln();
        docComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.translateHtml(notification.html);
            this.toHtmlVisitor.describePayload(notification.params,'Parameters');
        }));
        writeln(`Stream<${className}> ${streamName};`);
        writeln();
        docComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.write(`Stream controller for [${streamName}].`);
        }));
        writeln(`StreamController<${className}> _${streamName};`);
        this.fieldInitializationCode.add(collectCode(() =>  {
            writeln(`_${streamName} = new StreamController<${className}>(sync: true);`);
            writeln(`${streamName} = _${streamName}.stream.asBroadcastStream();`);
        }));
        this.notificationSwitchContents.add(collectCode(() =>  {
            writeln(`case ${convert.properties.JSON.encode(notification.longEvent)}:`);
            indent(() =>  {
                let paramsValidator : string = camelJoin(new core.DartList.literal('is',notification.domainName,notification.event,'params'));
                writeln(`outOfTestExpect(params, ${paramsValidator});`);
                let constructorCall : string;
                if (op(Op.EQUALS,notification.params,null)) {
                    constructorCall = `new ${className}()`;
                }else {
                    constructorCall = `new ${className}.fromJson(decoder, 'params', params)`;
                }
                writeln(`_${streamName}.add(${constructorCall});`);
                writeln('break;');
            });
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRequest(request : lib7.Request) {
        let methodName : string = camelJoin(new core.DartList.literal('send',request.domainName,request.method));
        let args : core.DartList<string> = new core.DartList.literal<string>();
        let optionalArgs : core.DartList<string> = new core.DartList.literal<string>();
        if (request.params != null) {
            for(let field of request.params.fields) {
                if (field.optional) {
                    optionalArgs.add(this.formatArgument(field));
                }else {
                    args.add(this.formatArgument(field));
                }
            }
        }
        if (optionalArgs.isNotEmpty) {
            args.add(`{${optionalArgs.join(', ')}}`);
        }
        writeln();
        docComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.translateHtml(request.html);
            this.toHtmlVisitor.describePayload(request.params,'Parameters');
            this.toHtmlVisitor.describePayload(request.result,'Returns');
        }));
        if (request.deprecated) {
            writeln('@deprecated');
        }
        let resultClass : string;
        let futureClass : string;
        if (op(Op.EQUALS,request.result,null)) {
            futureClass = 'Future';
        }else {
            resultClass = camelJoin(new core.DartList.literal(request.domainName,request.method,'result'),{
                doCapitalize : true});
            futureClass = `Future<${resultClass}>`;
        }
        writeln(`${futureClass} ${methodName}(${args.join(', ')}) async {`);
        indent(() =>  {
            let requestClass : string = camelJoin(new core.DartList.literal(request.domainName,request.method,'params'),{
                doCapitalize : true});
            let paramsVar : string = 'null';
            if (request.params != null) {
                paramsVar = 'params';
                let args : core.DartList<string> = new core.DartList.literal<string>();
                let optionalArgs : core.DartList<string> = new core.DartList.literal<string>();
                for(let field of request.params.fields) {
                    if (field.optional) {
                        optionalArgs.add(`${field.name}: ${field.name}`);
                    }else {
                        args.add(field.name);
                    }
                }
                args.addAll(optionalArgs);
                writeln(`var params = new ${requestClass}(${args.join(', ')}).toJson();`);
            }
            let methodJson : string = convert.properties.JSON.encode(request.longMethod);
            writeln(`var result = await server.send(${methodJson}, ${paramsVar});`);
            if (request.result != null) {
                let kind : string = 'null';
                if (requestClass == 'EditGetRefactoringParams') {
                    kind = 'kind';
                }
                writeln(`ResponseDecoder decoder = new ResponseDecoder(${kind});`);
                writeln(`return new ${resultClass}.fromJson(decoder, 'result', result);`);
            }else {
                writeln('outOfTestExpect(result, isNull);');
                writeln('return null;');
            }
        });
        writeln('}');
    }
}

export class properties {
    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new bare.createInstance(any,null,'test/integration/support/integration_test_methods.dart',(pkgPath : string) =>  {
                let visitor : CodegenInttestMethodsVisitor = new CodegenInttestMethodsVisitor(lib3.basename(pkgPath),lib4.readApi(pkgPath));
                return visitor.collectCode(visitor.visitApi.bind(visitor));
            });
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

}
