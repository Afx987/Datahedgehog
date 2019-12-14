/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/codegen/text_formatter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var nodesToText : (desc : core.DartList<any>,width : number,javadocStyle : boolean,_namedArguments? : {removeTrailingNewLine? : boolean}) => string = (desc : core.DartList<any>,width : number,javadocStyle : boolean,_namedArguments? : {removeTrailingNewLine? : boolean}) : string =>  {
    let {removeTrailingNewLine} = Object.assign({
        "removeTrailingNewLine" : false}, _namedArguments );
    let formatter : _TextFormatter = new _TextFormatter(width,javadocStyle);
    return formatter.collectCode(() =>  {
        formatter.addAll(desc);
        formatter.lineBreak(false);
    },{
        removeTrailingNewLine : removeTrailingNewLine});
};
export namespace _TextFormatter {
    export type Constructors = '_TextFormatter';
    export type Interface = Omit<_TextFormatter, Constructors>;
}
@DartClass
export class _TextFormatter extends any {
    width : number;

    word : string;

    line : string;

    verticalSpaceNeeded : boolean;

    atStart : boolean;

    preserveSpaces : boolean;

    javadocStyle : boolean;

    constructor(width : number,javadocStyle : boolean) {
    }
    @defaultConstructor
    _TextFormatter(width : number,javadocStyle : boolean) {
        this.word = '';
        this.line = '';
        this.verticalSpaceNeeded = false;
        this.atStart = true;
        this.preserveSpaces = false;
        this.width = width;
        this.javadocStyle = javadocStyle;
    }
    add(node : any) : void {
        if (is(node, any)) {
            for(let char of node.text.split('')) {
                if (this.preserveSpaces) {
                    this.wordBreak();
                    write(this.escape(char));
                }else if (properties.whitespace.hasMatch(char)) {
                    this.wordBreak();
                }else {
                    this.resolveVerticalSpace();
                    this.word += this.escape(char);
                }
            }
        }else if (is(node, any)) {
            switch (node.localName) {
                case 'br':
                    this.lineBreak(false);
                    break;
                case 'dl':
                case 'dt':
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'p':
                    this.lineBreak(true);
                    this.addAll(node.nodes);
                    this.lineBreak(true);
                    break;
                case 'div':
                    this.lineBreak(false);
                    if (node.classes.contains('hangingIndent')) {
                        this.resolveVerticalSpace();
                        indentSpecial('','        ',() =>  {
                            this.addAll(node.nodes);
                            this.lineBreak(false);
                        });
                    }else {
                        this.addAll(node.nodes);
                        this.lineBreak(false);
                    }
                    break;
                case 'ul':
                    this.lineBreak(false);
                    this.addAll(node.nodes);
                    this.lineBreak(false);
                    break;
                case 'li':
                    this.lineBreak(false);
                    this.resolveVerticalSpace();
                    indentSpecial('- ','  ',() =>  {
                        this.addAll(node.nodes);
                        this.lineBreak(false);
                    });
                    break;
                case 'dd':
                    this.lineBreak(true);
                    indent(() =>  {
                        this.addAll(node.nodes);
                        this.lineBreak(true);
                    });
                    break;
                case 'pre':
                    this.lineBreak(false);
                    this.resolveVerticalSpace();
                    if (this.javadocStyle) {
                        writeln('<pre>');
                    }
                    let oldPreserveSpaces : boolean = this.preserveSpaces;
                    try {
                        this.preserveSpaces = true;
                        this.addAll(node.nodes);
                    } finally {
                        this.preserveSpaces = oldPreserveSpaces;
                    }
                    writeln();
                    if (this.javadocStyle) {
                        writeln('</pre>');
                    }
                    this.lineBreak(false);
                    break;
                case 'a':
                case 'b':
                case 'body':
                case 'html':
                case 'i':
                case 'span':
                case 'tt':
                    this.addAll(node.nodes);
                    break;
                case 'head':
                    break;
                default:
                    throw new core.Exception(`Unexpected HTML element: ${node.localName}`);
            }
        }else {
            throw new core.Exception(`Unexpected HTML: ${node}`);
        }
    }
    addAll(nodes : core.DartList<any>) : void {
        for(let node of nodes) {
            this.add(node);
        }
    }
    escape(char : string) : string {
        if (this.javadocStyle) {
            switch (char) {
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '&':
                    return '&amp;';
            }
        }
        return char;
    }
    lineBreak(gap : boolean) : void {
        this.wordBreak();
        if (new core.DartString(this.line).isNotEmpty) {
            writeln(this.line);
            this.line = '';
        }
        if (gap && !this.atStart) {
            this.verticalSpaceNeeded = true;
        }
    }
    resolveVerticalSpace() : void {
        if (this.verticalSpaceNeeded) {
            writeln();
            this.verticalSpaceNeeded = false;
        }
    }
    wordBreak() : void {
        if (new core.DartString(this.word).isNotEmpty) {
            this.atStart = false;
            if (new core.DartString(this.line).isNotEmpty) {
                if (op(Op.LEQ,op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,indentWidth,new core.DartString(this.line).length),1),new core.DartString(this.word).length),this.width)) {
                    this.line += ` ${this.word}`;
                }else {
                    writeln(this.line);
                    this.line = this.word;
                }
            }else {
                this.line = this.word;
            }
            this.word = '';
        }
    }
}

export class properties {
    private static __$whitespace : core.DartRegExp;
    static get whitespace() : core.DartRegExp { 
        if (this.__$whitespace===undefined) {
            this.__$whitespace = new core.DartRegExp('\s');
        }
        return this.__$whitespace;
    }
    static set whitespace(__$value : core.DartRegExp)  { 
        this.__$whitespace = __$value;
    }

}
