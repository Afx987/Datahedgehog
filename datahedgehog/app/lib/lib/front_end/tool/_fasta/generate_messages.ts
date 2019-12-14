/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/_fasta/generate_messages.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as isolate from "@dart2ts/dart/isolate";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts/dart/uri";

export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let port = new isolate.ReceivePort();
    let messagesFile : lib5.Uri = io.Platform.script.resolve("../../messages.yaml");
    let yaml : core.DartMap<any,any> = loadYaml(await new io.File.fromUri(messagesFile).readAsStringSync());
    let sb : core.DartStringBuffer = new core.DartStringBuffer();
    sb.writeln("// Copyright (c) 2017, the Dart project authors.  Please see the AUTHORS file\n// for details. All rights reserved. Use of this source code is governed by a\n// BSD-style license that can be found in the LICENSE file.\n\n// NOTE: THIS FILE IS GENERATED. DO NOT EDIT.\n//\n// Instead modify 'pkg/front_end/messages.yaml' and run\n// 'pkg/front_end/tool/_fasta/generate_messages.dart' to update.\n\npart of fasta.codes;\n");
    yaml.forEach((name : string,description : any) =>  {
        while (is(description, "string")){
            description = yaml.get(description);
        }
        let map : core.DartMap<any,any> = description;
        sb.writeln(compileTemplate(name,map.get('template'),map.get('tip'),map.get('analyzerCode'),map.get('dart2jsCode')));
    });
    let dartfmtedText : string = new bare.createInstance(any,null).format(`${sb}`);
    let problemsFile : lib5.Uri = await isolate.Isolate.resolvePackageUri(lib5.Uri.parse('package:front_end/src/fasta/fasta_codes_generated.dart'));
    await new io.File.fromUri(problemsFile).writeAsString(dartfmtedText,{
        flush : true});
    port.close();
})());
export var compileTemplate : (name : string,template : string,tip : string,analyzerCode : string,dart2jsCode : string) => string = (name : string,template : string,tip : string,analyzerCode : string,dart2jsCode : string) : string =>  {
    let parameters = new core.DartSet<string>();
    let conversions = new core.DartSet<string>();
    let arguments = new core.DartSet<string>();
    parameters.add("Uri uri");
    parameters.add("int charOffset");
    for(let match of properties.placeholderPattern.allMatches(`${template}${(tip || '')}`)) {
        switch (op(Op.INDEX,match,0)) {
            case "#character":
                parameters.add("String character");
                arguments.add("'character': character");
                break;
            case "#unicode":
                parameters.add("int codePoint");
                conversions.add("String unicode = " + "\"(U+${codePoint.toRadixString(16).padLeft(4, '0')})\";");
                arguments.add("'codePoint': codePoint");
                break;
            case "#name":
                parameters.add("String name");
                arguments.add("'name': name");
                break;
            case "#lexeme":
                parameters.add("Token token");
                conversions.add("String lexeme = token.lexeme;");
                arguments.add("'token': token");
                break;
            case "#string":
                parameters.add("String string");
                arguments.add("'string': string");
                break;
            default:
                throw `Unhandled placeholder in template: ${op(Op.INDEX,match,0)}`;
        }
    }
    var interpolate : (name : string,text : string) => string = (name : string,text : string) : string =>  {
        return `${name}: ` + `"${new core.DartString(new core.DartString(text).replaceAll('$','\$')).replaceAll('#','$')}"`;
    };
    let codeArguments : core.DartList<string> = new core.DartList.literal<string>();
    if (template != null) {
        codeArguments.add(`template: r"${template}"`);
    }
    if (tip != null) {
        codeArguments.add(`tip: r"${tip}"`);
    }
    if (analyzerCode != null) {
        codeArguments.add(`analyzerCode: "${analyzerCode}"`);
    }
    if (dart2jsCode != null) {
        codeArguments.add(`dart2jsCode: "${dart2jsCode}"`);
    }
    codeArguments.add(`format: _format${name}`);
    let messageArguments : core.DartList<string> = new core.DartList.literal<string>();
    messageArguments.add(interpolate("message",template));
    if (tip != null) {
        messageArguments.add(interpolate("tip",tip));
    }
    messageArguments.add(`arguments: { ${arguments.join(', ')} }`);
    return `// DO NOT EDIT. THIS FILE IS GENERATED. SEE TOP OF FILE.\nconst FastaCode<_${name}> code${name} =\n    const FastaCode<_${name}>("${name}", ${codeArguments.join(', ')});\n\ntypedef FastaMessage _${name}(${parameters.join(', ')});\n\n// DO NOT EDIT. THIS FILE IS GENERATED. SEE TOP OF FILE.\nFastaMessage _format${name}(${parameters.join(', ')}) {\n  ${conversions.join('\n  ')}\n  return new FastaMessage(\n     uri,\n     charOffset,\n     code${name},\n     ${messageArguments.join(', ')});\n}\n`;
};
export class properties {
    private static __$placeholderPattern : core.DartRegExp;
    static get placeholderPattern() : core.DartRegExp { 
        if (this.__$placeholderPattern===undefined) {
            this.__$placeholderPattern = new core.DartRegExp("#[a-zA-Z0-9_]+");
        }
        return this.__$placeholderPattern;
    }
    static set placeholderPattern(__$value : core.DartRegExp)  { 
        this.__$placeholderPattern = __$value;
    }

}
