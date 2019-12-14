/** Library asset:datahedgehog_monitor/lib/lib/painting/text_span.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "./text_style";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib6 from "./basic_types";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/collections";

export namespace TextSpan {
    export type Constructors = lib3.DiagnosticableTree.Constructors | 'TextSpan';
    export type Interface = Omit<TextSpan, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TextSpan extends lib3.DiagnosticableTree {
    constructor(_namedArguments? : {style? : lib4.TextStyle,text? : string,children? : core.DartList<TextSpan>,recognizer? : lib5.GestureRecognizer}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextSpan(_namedArguments? : {style? : lib4.TextStyle,text? : string,children? : core.DartList<TextSpan>,recognizer? : lib5.GestureRecognizer}) {
        let {style,text,children,recognizer} = Object.assign({
        }, _namedArguments );
        this.style = style;
        this.text = text;
        this.children = children;
        this.recognizer = recognizer;
    }
    style : lib4.TextStyle;

    text : string;

    children : core.DartList<TextSpan>;

    recognizer : lib5.GestureRecognizer;

    build(builder : any,_namedArguments? : {textScaleFactor? : double}) : any {
        let {textScaleFactor} = Object.assign({
            "textScaleFactor" : 1.0}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        let hasStyle : boolean = this.style != null;
        if (hasStyle) builder.pushStyle(this.style.getTextStyle({
            textScaleFactor : textScaleFactor}));
        if (this.text != null) builder.addText(this.text);
        if (this.children != null) {
            for(let child of this.children) {
                /* TODO (AssertStatementImpl) : assert (child != null); */;
                child.build(builder,{
                    textScaleFactor : textScaleFactor});
            }
        }
        if (hasStyle) builder.pop();
    }
    visitTextSpan(visitor : (span : TextSpan) => boolean) : boolean {
        if (this.text != null) {
            if (!visitor(this)) return false;
        }
        if (this.children != null) {
            for(let child of this.children) {
                if (!child.visitTextSpan(visitor)) return false;
            }
        }
        return true;
    }
    getSpanForPosition(position : any) : TextSpan {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        let affinity : any = position.affinity;
        let targetOffset : number = position.offset;
        let offset : number = 0;
        let result : TextSpan;
        this.visitTextSpan((span : TextSpan) =>  {
            /* TODO (AssertStatementImpl) : assert (result == null); */;
            let endOffset : number = offset + new core.DartString(span.text).length;
            if (targetOffset == offset && op(Op.EQUALS,affinity,TextAffinity.downstream) || targetOffset > offset && targetOffset < endOffset || targetOffset == endOffset && op(Op.EQUALS,affinity,TextAffinity.upstream)) {
                result = span;
                return false;
            }
            offset = endOffset;
            return true;
        });
        return result;
    }
    toPlainText() : string {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        let buffer : core.DartStringBuffer = core.DartStringBuffer();
        this.visitTextSpan((span : TextSpan) =>  {
            buffer.write(span.text);
            return true;
        });
        return buffer.toString();
    }
    codeUnitAt(index : number) : number {
        if (index < 0) return null;
        let offset : number = 0;
        let result : number;
        this.visitTextSpan((span : TextSpan) =>  {
            if (index - offset < new core.DartString(span.text).length) {
                result = new core.DartString(span.text).codeUnitAt(index - offset);
                return false;
            }
            offset += new core.DartString(span.text).length;
            return true;
        });
        return result;
    }
    debugAssertIsValid() : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (!visitTextSpan((TextSpan span) {if (span.children != null) {for (TextSpan child in span.children) {if (child == null) return false;}} return true;})) {throw FlutterError('TextSpan contains a null child.\n' 'A TextSpan object with a non-null child list should not have any nulls in its child list.\n' 'The full text in question was:\n' '${toStringDeep(prefixLineOne: '  ')}');} return true;}()); */;
        return true;
    }
    compareTo(other : TextSpan) : lib6.RenderComparison {
        if (core.identical(this,other)) return lib6.RenderComparison.identical;
        if (other.text != this.text || ((t)=>(!!t)?t.length:null)(this.children) != ((t)=>(!!t)?t.length:null)(other.children) || (op(Op.EQUALS,this.style,null)) != (op(Op.EQUALS,other.style,null))) return lib6.RenderComparison.layout;
        let result : lib6.RenderComparison = op(Op.EQUALS,this.recognizer,other.recognizer) ? lib6.RenderComparison.identical : lib6.RenderComparison.metadata;
        if (this.style != null) {
            let candidate : lib6.RenderComparison = this.style.compareTo(other.style);
            if (candidate.index > result.index) result = candidate;
            if (op(Op.EQUALS,result,lib6.RenderComparison.layout)) return result;
        }
        if (this.children != null) {
            for(let index : number = 0; index < this.children.length; index += 1){
                let candidate : lib6.RenderComparison = this.children[index].compareTo(other.children[index]);
                if (candidate.index > result.index) result = candidate;
                if (op(Op.EQUALS,result,lib6.RenderComparison.layout)) return result;
            }
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : TextSpan = other;
        return typedOther.text == this.text && op(Op.EQUALS,typedOther.style,this.style) && op(Op.EQUALS,typedOther.recognizer,this.recognizer) && lib7.listEquals(typedOther.children,this.children);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.style,this.text,this.recognizer,hashList(this.children));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return `${this.runtimeType}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.defaultDiagnosticsTreeStyle = lib3.DiagnosticsTreeStyle.whitespace;
        if (this.style != null) this.style.debugFillProperties(properties);
        properties.add(lib3.DiagnosticsProperty('recognizer',this.recognizer,{
            description : ((_807_)=>(!!_807_)?_807_.toString():null)(((t)=>(!!t)?t.runtimeType:null)(this.recognizer)),defaultValue : null}));
        properties.add(lib3.StringProperty('text',this.text,{
            showName : false,defaultValue : null}));
        if (op(Op.EQUALS,this.style,null) && this.text == null && this.children == null) properties.add(lib3.DiagnosticsNode.message('(empty)'));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib3.DiagnosticsNode> {
        if (this.children == null) return new core.DartList.literal<lib3.DiagnosticsNode>();
        return this.children.map((child : TextSpan) =>  {
            if (child != null) {
                return child.toDiagnosticsNode();
            }else {
                return lib3.DiagnosticsNode.message('<null child>');
            }
        }).toList();
    }
}

export class properties {
}
