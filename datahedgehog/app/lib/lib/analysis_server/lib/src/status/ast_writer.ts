/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/status/ast_writer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace AstWriter {
    export type Constructors = 'AstWriter';
    export type Interface = Omit<AstWriter, Constructors>;
}
@DartClass
@With(any)
export class AstWriter extends any implements any.Interface {
    constructor(buffer : core.DartStringBuffer) {
    }
    @defaultConstructor
    AstWriter(buffer : core.DartStringBuffer) {
        this.buffer = buffer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : void {
        this._writeNode(node);
        writeProperties(this._computeProperties(node));
        indentLevel++;
        try {
            node.visitChildren(this);
        } finally {
            indentLevel--;
        }
    }
    _computeProperties(node : any) : core.DartMap<string,core.DartObject> {
        let properties : core.DartMap<string,core.DartObject> = new core.DartHashMap<string,core.DartObject>();
        op(Op.INDEX_ASSIGN,properties,'name',this._getName(node));
        if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static parameter types',node.correspondingStaticParameters);
            op(Op.INDEX_ASSIGN,properties,'propagated parameter types',node.correspondingPropagatedParameters);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'element annotation',node.elementAnnotation);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated element',node.propagatedElement);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'abstract keyword',node.abstractKeyword);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'abstract keyword',node.abstractKeyword);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'uriSource',node.uriSource);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'keyword',node.keyword);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'selectedSource',node.selectedSource);
            op(Op.INDEX_ASSIGN,properties,'uriSource',node.uriSource);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static keyword',node.staticKeyword);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'kind',node.kind);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'external keyword',node.externalKeyword);
            op(Op.INDEX_ASSIGN,properties,'property keyword',node.propertyKeyword);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
            op(Op.INDEX_ASSIGN,properties,'static invoke type',node.staticInvokeType);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated element',node.propagatedElement);
            op(Op.INDEX_ASSIGN,properties,'propagated invoke type',node.propagatedInvokeType);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'selectedSource',node.selectedSource);
            op(Op.INDEX_ASSIGN,properties,'uriSource',node.uriSource);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated element',node.propagatedElement);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'external keyword',node.externalKeyword);
            op(Op.INDEX_ASSIGN,properties,'modifier keyword',node.modifierKeyword);
            op(Op.INDEX_ASSIGN,properties,'operator keyword',node.operatorKeyword);
            op(Op.INDEX_ASSIGN,properties,'property keyword',node.propertyKeyword);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static invoke type',node.staticInvokeType);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated invoke type',node.propagatedInvokeType);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
            op(Op.INDEX_ASSIGN,properties,'uriSource',node.uriSource);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated element',node.propagatedElement);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated element',node.propagatedElement);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated element',node.propagatedElement);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'value',node.value);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'type',node.type);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'keyword',node.keyword);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'element',node.element);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'isAsynchronous',node.isAsynchronous);
            op(Op.INDEX_ASSIGN,properties,'isGenerator',node.isGenerator);
        }else if (is(node, any)) {
            op(Op.INDEX_ASSIGN,properties,'static element',node.staticElement);
            op(Op.INDEX_ASSIGN,properties,'static type',node.staticType);
            op(Op.INDEX_ASSIGN,properties,'propagated element',node.propagatedElement);
            op(Op.INDEX_ASSIGN,properties,'propagated type',node.propagatedType);
        }
        return properties;
    }
    _getName(node : any) : string {
        if (is(node, any)) {
            return node.name.name;
        }else if (is(node, any)) {
            return node.name.name;
        }else if (is(node, any)) {
            if (op(Op.EQUALS,node.name,null)) {
                return node.returnType.name;
            }else {
                return op(Op.PLUS,op(Op.PLUS,node.returnType.name,'.'),node.name.name);
            }
        }else if (is(node, any)) {
            return node.toSource();
        }else if (is(node, any)) {
            return this._getNames(node.fields);
        }else if (is(node, any)) {
            let nameNode : any = node.name;
            if (nameNode != null) {
                return nameNode.name;
            }
        }else if (is(node, any)) {
            return node.name.name;
        }else if (is(node, any)) {
            return node.name;
        }else if (is(node, any)) {
            return node.name.name;
        }else if (is(node, any)) {
            return this._getNames(node.variables);
        }else if (is(node, any)) {
            return node.toSource();
        }else if (is(node, any)) {
            return node.name.name;
        }else if (is(node, any)) {
            return node.name.name;
        }
        return null;
    }
    _getNames(variables : any) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let first : boolean = true;
        for(let variable of variables.variables) {
            if (first) {
                first = false;
            }else {
                buffer.write(', ');
            }
            buffer.write(variable.name.name);
        }
        return buffer.toString();
    }
    _writeNode(node : any) : void {
        indent();
        buffer.write(node.runtimeType);
        buffer.write(' <span style="color:gray">[');
        buffer.write(node.offset);
        buffer.write('..');
        buffer.write(op(Op.MINUS,op(Op.PLUS,node.offset,node.length),1));
        buffer.write(']');
        if (node.isSynthetic) {
            buffer.write(' (synthetic)');
        }
        buffer.write('</span>');
        buffer.write('<br>');
    }
}

export class properties {
}
