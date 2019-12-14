/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/codegen/tools.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var camelJoin : (parts : core.DartList<string>,_namedArguments? : {doCapitalize? : boolean}) => string = (parts : core.DartList<string>,_namedArguments? : {doCapitalize? : boolean}) : string =>  {
    let {doCapitalize} = Object.assign({
        "doCapitalize" : false}, _namedArguments );
    let upcasedParts : core.DartList<string> = new core.DartList.literal<string>();
    for(let i : number = 0; i < parts.length; i++){
        if (i == 0 && !doCapitalize) {
            upcasedParts.add(parts[i]);
        }else {
            upcasedParts.add(capitalize(parts[i]));
        }
    }
    return upcasedParts.join();
};
export var capitalize : (string : string) => string = (string : string) : string =>  {
    return new core.DartString(string[0]).toUpperCase() + new core.DartString(string).substring(1);
};
export namespace CodeGenerator {
    export type Constructors = 'CodeGenerator';
    export type Interface = Omit<CodeGenerator, Constructors>;
}
@DartClass
export class CodeGenerator {
    _state : _CodeGeneratorState;

    codeGeneratorSettings : CodeGeneratorSettings;

    get indentWidth() : number {
        return new core.DartString(this._state.nextIndent).length;
    }
    collectCode(callback : () => void,_namedArguments? : {removeTrailingNewLine? : boolean}) : string {
        let {removeTrailingNewLine} = Object.assign({
            "removeTrailingNewLine" : false}, _namedArguments );
        let oldState : _CodeGeneratorState = this._state;
        try {
            this._state = new _CodeGeneratorState();
            callback();
            let text = new core.DartString(this._state.buffer.toString()).replaceAll(properties.trailingSpacesInLineRegExp,'');
            if (!removeTrailingNewLine) {
                return text;
            }else {
                return new core.DartString(text).replaceAll(properties.trailingWhitespaceRegExp,'');
            }
        } finally {
            this._state = oldState;
        }
    }
    docComment(docs : core.DartList<any>,_namedArguments? : {removeTrailingNewLine? : boolean}) : void {
        let {removeTrailingNewLine} = Object.assign({
            "removeTrailingNewLine" : false}, _namedArguments );
        if (containsOnlyWhitespace(docs)) return;
        if (this.codeGeneratorSettings.docCommentStartMarker != null) this.writeln(this.codeGeneratorSettings.docCommentStartMarker);
        let width : number = this.codeGeneratorSettings.commentLineLength;
        let javadocStyle : boolean = this.codeGeneratorSettings.languageName == 'java';
        this.indentBy(this.codeGeneratorSettings.docCommentLineLeader,() =>  {
            this.write(nodesToText(docs,width - new core.DartString(this._state.indent).length,javadocStyle,{
                removeTrailingNewLine : removeTrailingNewLine}));
        });
        if (this.codeGeneratorSettings.docCommentEndMarker != null) this.writeln(this.codeGeneratorSettings.docCommentEndMarker);
    }
    indent(callback : () => void) : void {
        this.indentSpecial(this.codeGeneratorSettings.indent,this.codeGeneratorSettings.indent,callback);
    }
    indentBy(additionalIndent : string,callback : () => void) : void {
        return this.indentSpecial(additionalIndent,additionalIndent,callback);
    }
    indentSpecial(firstAdditionalIndent : string,additionalIndent : string,callback : () => void) : void {
        let oldNextIndent : string = this._state.nextIndent;
        let oldIndent : string = this._state.indent;
        try {
            this._state.nextIndent += firstAdditionalIndent;
            this._state.indent += additionalIndent;
            callback();
        } finally {
            this._state.nextIndent = oldNextIndent;
            this._state.indent = oldIndent;
        }
    }
    lineComment(docs : core.DartList<any>) : void {
        if (containsOnlyWhitespace(docs)) {
            return;
        }
        this.write(this.codeGeneratorSettings.lineCommentLineLeader);
        let width : number = this.codeGeneratorSettings.commentLineLength;
        this.indentBy(this.codeGeneratorSettings.lineCommentLineLeader,() =>  {
            this.write(nodesToText(docs,width - new core.DartString(this._state.indent).length,false));
        });
    }
    outputHeader(_namedArguments? : {javaStyle? : boolean,year? : string}) : void {
        let {javaStyle,year} = Object.assign({
            "javaStyle" : false,
            "year" : null}, _namedArguments );
        let header : string;
        if (this.codeGeneratorSettings.languageName == 'java') {
            header = `/*\n * Copyright (c) ${(year || '2015')}, the Dart project authors.\n *\n * Licensed under the Eclipse Public License v1.0 (the "License"); you may not use this file except\n * in compliance with the License. You may obtain a copy of the License at\n *\n * http://www.eclipse.org/legal/epl-v10.html\n *\n * Unless required by applicable law or agreed to in writing, software distributed under the License\n * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\n * or implied. See the License for the specific language governing permissions and limitations under\n * the License.\n *\n * This file has been automatically generated.  Please do not edit it manually.\n * To regenerate the file, use the script "pkg/analysis_server/tool/spec/generate_files".\n */`;
        }else if (this.codeGeneratorSettings.languageName == 'python') {
            header = `# Copyright (c) ${(year || '2014')}, the Dart project authors.  Please see the AUTHORS file\n# for details. All rights reserved. Use of this source code is governed by a\n# BSD-style license that can be found in the LICENSE file.\n#\n# This file has been automatically generated.  Please do not edit it manually.\n# To regenerate the file, use the script\n# "pkg/analysis_server/tool/spec/generate_files".\n`;
        }else {
            header = `// Copyright (c) ${(year || '2014')}, the Dart project authors.  Please see the AUTHORS file\n// for details. All rights reserved. Use of this source code is governed by a\n// BSD-style license that can be found in the LICENSE file.\n//\n// This file has been automatically generated.  Please do not edit it manually.\n// To regenerate the file, use the script\n// "pkg/analysis_server/tool/spec/generate_files".\n`;
        }
        this.writeln(new core.DartString(header).trim());
    }
    write(obj : core.DartObject) : void {
        this._state.write(obj.toString());
    }
    writeln(obj? : core.DartObject) : void {
        obj = obj || '';
        this._state.write(`${obj}\n`);
    }
    constructor() {
    }
    @defaultConstructor
    CodeGenerator() {
        this.codeGeneratorSettings = new CodeGeneratorSettings();
    }
}

export namespace CodeGeneratorSettings {
    export type Constructors = 'CodeGeneratorSettings';
    export type Interface = Omit<CodeGeneratorSettings, Constructors>;
}
@DartClass
export class CodeGeneratorSettings {
    languageName : string;

    lineCommentLineLeader : string;

    docCommentStartMarker : string;

    docCommentLineLeader : string;

    docCommentEndMarker : string;

    commentLineLength : number;

    indent : string;

    constructor(_namedArguments? : {languageName? : string,lineCommentLineLeader? : string,docCommentStartMarker? : string,docCommentLineLeader? : string,docCommentEndMarker? : string,commentLineLength? : number,indent? : string}) {
    }
    @defaultConstructor
    CodeGeneratorSettings(_namedArguments? : {languageName? : string,lineCommentLineLeader? : string,docCommentStartMarker? : string,docCommentLineLeader? : string,docCommentEndMarker? : string,commentLineLength? : number,indent? : string}) {
        let {languageName,lineCommentLineLeader,docCommentStartMarker,docCommentLineLeader,docCommentEndMarker,commentLineLength,indent} = Object.assign({
            "languageName" : 'java',
            "lineCommentLineLeader" : '// ',
            "docCommentStartMarker" : '/**',
            "docCommentLineLeader" : ' * ',
            "docCommentEndMarker" : ' */',
            "commentLineLength" : 99,
            "indent" : '  '}, _namedArguments );
        this.languageName = languageName;
        this.lineCommentLineLeader = lineCommentLineLeader;
        this.docCommentStartMarker = docCommentStartMarker;
        this.docCommentLineLeader = docCommentLineLeader;
        this.docCommentEndMarker = docCommentEndMarker;
        this.commentLineLength = commentLineLength;
        this.indent = indent;
    }
}

export namespace HtmlCodeGenerator {
    export type Constructors = 'HtmlCodeGenerator';
    export type Interface = Omit<HtmlCodeGenerator, Constructors>;
}
@DartClass
export class HtmlCodeGenerator {
    _state : _HtmlCodeGeneratorState;

    add(node : any) : void {
        this._state.add(node);
    }
    addAll(nodes : core.DartIterable<any>) : void {
        for(let node of nodes) {
            this._state.add(node);
        }
    }
    collectHtml(callback : () => void) : core.DartList<any> {
        let oldState : _HtmlCodeGeneratorState = this._state;
        try {
            this._state = new _HtmlCodeGeneratorState();
            if (callback != null) {
                callback();
            }
            return this._state.buffer;
        } finally {
            this._state = oldState;
        }
    }
    element(name : string,attributes : core.DartMap<any,string>,callback? : () => void) : void {
        this.add(makeElement(name,attributes,this.collectHtml(callback)));
    }
    indent(callback : () => void) : void {
        let oldIndent : string = this._state.indent;
        try {
            this._state.indent += '  ';
            callback();
        } finally {
            this._state.indent = oldIndent;
        }
    }
    write(obj : core.DartObject) : void {
        this._state.write(obj.toString());
    }
    writeln(obj? : core.DartObject) : void {
        obj = obj || '';
        this._state.write(`${obj}\n`);
    }
    constructor() {
    }
    @defaultConstructor
    HtmlCodeGenerator() {
    }
}

export namespace _CodeGeneratorState {
    export type Constructors = '_CodeGeneratorState';
    export type Interface = Omit<_CodeGeneratorState, Constructors>;
}
@DartClass
export class _CodeGeneratorState {
    buffer : core.DartStringBuffer;

    nextIndent : string;

    indent : string;

    indentNeeded : boolean;

    write(text : string) : void {
        let lines : core.DartList<string> = new core.DartString(text).split('\n');
        for(let i : number = 0; i < lines.length; i++){
            if (i == lines.length - 1 && new core.DartString(lines[i]).isEmpty) {
                break;
            }
            if (this.indentNeeded) {
                this.buffer.write(this.nextIndent);
                this.nextIndent = this.indent;
            }
            this.indentNeeded = false;
            this.buffer.write(lines[i]);
            if (i != lines.length - 1) {
                this.buffer.writeln();
                this.indentNeeded = true;
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    _CodeGeneratorState() {
        this.buffer = new core.DartStringBuffer();
        this.nextIndent = '';
        this.indent = '';
        this.indentNeeded = true;
    }
}

export namespace _HtmlCodeGeneratorState {
    export type Constructors = '_HtmlCodeGeneratorState';
    export type Interface = Omit<_HtmlCodeGeneratorState, Constructors>;
}
@DartClass
export class _HtmlCodeGeneratorState {
    buffer : core.DartList<any>;

    indent : string;

    indentNeeded : boolean;

    add(node : any) : void {
        if (is(node, any)) {
            this.write(node.text);
        }else {
            this.buffer.add(node);
        }
    }
    write(text : string) : void {
        if (new core.DartString(text).isEmpty) {
            return;
        }
        if (this.indentNeeded) {
            this.buffer.add(new bare.createInstance(any,null,this.indent));
        }
        let lines : core.DartList<string> = new core.DartString(text).split('\n');
        if (new core.DartString(lines.last).isEmpty) {
            lines.removeLast();
            this.buffer.add(new bare.createInstance(any,null,lines.join(`\n${this.indent}`) + '\n'));
            this.indentNeeded = true;
        }else {
            this.buffer.add(new bare.createInstance(any,null,lines.join(`\n${this.indent}`)));
            this.indentNeeded = false;
        }
    }
    constructor() {
    }
    @defaultConstructor
    _HtmlCodeGeneratorState() {
        this.buffer = new core.DartList.literal<any>();
        this.indent = '';
        this.indentNeeded = true;
    }
}

export class properties {
    private static __$trailingSpacesInLineRegExp : core.DartRegExp;
    static get trailingSpacesInLineRegExp() : core.DartRegExp { 
        if (this.__$trailingSpacesInLineRegExp===undefined) {
            this.__$trailingSpacesInLineRegExp = new core.DartRegExp(' +$',{
                multiLine : true});
        }
        return this.__$trailingSpacesInLineRegExp;
    }
    static set trailingSpacesInLineRegExp(__$value : core.DartRegExp)  { 
        this.__$trailingSpacesInLineRegExp = __$value;
    }

    private static __$trailingWhitespaceRegExp : core.DartRegExp;
    static get trailingWhitespaceRegExp() : core.DartRegExp { 
        if (this.__$trailingWhitespaceRegExp===undefined) {
            this.__$trailingWhitespaceRegExp = new core.DartRegExp('[\n ]+$');
        }
        return this.__$trailingWhitespaceRegExp;
    }
    static set trailingWhitespaceRegExp(__$value : core.DartRegExp)  { 
        this.__$trailingWhitespaceRegExp = __$value;
    }

}
