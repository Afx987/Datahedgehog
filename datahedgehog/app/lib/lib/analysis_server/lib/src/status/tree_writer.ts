/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/status/tree_writer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";

export namespace TreeWriter {
    export type Constructors = 'TreeWriter';
    export type Interface = Omit<TreeWriter, Constructors>;
}
@DartClass
export class TreeWriter {
    buffer : core.DartStringBuffer;

    indentLevel : number;

    exceptions : core.DartList<any>;

    indent(extra? : number) : void {
        extra = extra || 0;
        for(let i : number = 0; i < this.indentLevel; i++){
            this.buffer.write('&#x250A;&nbsp;&nbsp;&nbsp;');
        }
        if (extra > 0) {
            this.buffer.write('&#x250A;&nbsp;&nbsp;&nbsp;');
            for(let i : number = 1; i < extra; i++){
                this.buffer.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            }
        }
    }
    writeProperties(properties : core.DartMap<string,core.DartObject>) : void {
        let propertyNames : core.DartList<string> = properties.keys.toList();
        propertyNames.sort();
        for(let propertyName of propertyNames) {
            this.writeProperty(propertyName,properties.get(propertyName));
        }
    }
    writeProperty(name : string,value : core.DartObject) : void {
        if (value != null) {
            this.indent(2);
            this.buffer.write(`${name} = `);
            this._writePropertyValue(value,this.indentLevel);
            this.buffer.write('<br>');
        }
    }
    _toString(value : core.DartObject) : string {
        try {
            if (is(value, any)) {
                return `Source (uri="${value.uri}", path="${value.fullName}")`;
            }else if (is(value, any)) {
                let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                buffer.write(this._toString(value.element));
                let result : any = value.evaluationResult;
                if (op(Op.EQUALS,result,null)) {
                    buffer.write(': no result');
                }else {
                    buffer.write(': value = ');
                    buffer.write(result.value);
                    buffer.write('; errors = ');
                    buffer.write(result.errors);
                }
                return buffer.toString();
            }else {
                return value.toString();
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                this.exceptions.add(new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        return null;
    }
    _writePropertyValue(value : core.DartObject,baseIndent : number) : void {
        if (is(value, core.DartList<any>)) {
            if (value.isEmpty) {
                this.buffer.write('[]');
            }else {
                let elementIndent : number = baseIndent + 2;
                this.buffer.write('[<br>');
                for(let element of value) {
                    this.indent(elementIndent);
                    this._writePropertyValue(element,elementIndent);
                    this.buffer.write('<br>');
                }
                this.indent(baseIndent);
                this.buffer.write(']');
            }
        }else {
            let valueString : string = this._toString(value);
            if (valueString == null) {
                this.buffer.write('<span style="color: #FF0000">');
                this.buffer.write(convert.properties.HTML_ESCAPE.convert(value.runtimeType.toString()));
                this.buffer.write('</span>');
            }else {
                this.buffer.write(convert.properties.HTML_ESCAPE.convert(valueString));
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    TreeWriter() {
        this.indentLevel = 0;
        this.exceptions = new core.DartList.literal<any>();
    }
}

export class properties {
}
