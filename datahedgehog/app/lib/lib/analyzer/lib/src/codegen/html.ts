/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/codegen/html.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var cloneHtmlNodes : (nodes : core.DartList<any>) => core.DartList<any> = (nodes : core.DartList<any>) : core.DartList<any> =>  {
    return nodes.map((node : any) =>  {
        return node.clone(true);
    }).toList();
};
export var containsOnlyWhitespace : (nodes : core.DartIterable<any>) => boolean = (nodes : core.DartIterable<any>) : boolean =>  {
    for(let node of nodes) {
        if (!isWhitespaceNode(node)) {
            return false;
        }
    }
    return true;
};
export var innerText : (parent : any) => string = (parent : any) : string =>  {
    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
    var recurse : (parent : any) => void = (parent : any) : void =>  {
        for(let child of parent.nodes) {
            if (is(child, any)) {
                buffer.write(child.text);
            }else if (is(child, any)) {
                recurse(child);
            }
        }
    };
    recurse(parent);
    return buffer.toString();
};
export var isWhitespaceNode : (node : any) => boolean = (node : any) : boolean =>  {
    if (is(node, any)) {
        return false;
    }else if (is(node, any)) {
        return node.text.trim().isEmpty;
    }
    return true;
};
export var makeElement : (name : string,attributes : core.DartMap<any,string>,children : core.DartList<any>) => any = (name : string,attributes : core.DartMap<any,string>,children : core.DartList<any>) : any =>  {
    let result : any = new bare.createInstance(any,"tag",name);
    result.attributes.addAll(attributes);
    for(let child of children) {
        result.append(child);
    }
    return result;
};
export namespace HtmlGenerator {
    export type Constructors = 'HtmlGenerator';
    export type Interface = Omit<HtmlGenerator, Constructors>;
}
@DartClass
export class HtmlGenerator {
    _html : core.DartList<any>;

    add(node : any) : void {
        this._html.add(node);
    }
    addAll(nodes : core.DartIterable<any>) : void {
        for(let node of nodes) {
            this.add(node);
        }
    }
    collectHtml(callback : () => void) : core.DartList<any> {
        let oldHtml : core.DartList<any> = this._html;
        try {
            this._html = new core.DartList.literal<any>();
            if (callback != null) {
                callback();
            }
            return this._html;
        } finally {
            this._html = oldHtml;
        }
    }
    element(name : string,attributes : core.DartMap<any,string>,callback? : () => void) : void {
        this.add(makeElement(name,attributes,this.collectHtml(callback)));
    }
    write(text : string) : void {
        this._html.add(new bare.createInstance(any,null,text));
    }
    writeln(obj? : core.DartObject) : void {
        obj = obj || '';
        this.write(`${obj}\n`);
    }
    constructor() {
    }
    @defaultConstructor
    HtmlGenerator() {
    }
}

export class properties {
}
