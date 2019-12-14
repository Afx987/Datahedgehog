/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/source_buffer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SourceBuilder {
    export type Constructors = 'SourceBuilder' | 'buffer';
    export type Interface = Omit<SourceBuilder, Constructors>;
}
@DartClass
export class SourceBuilder {
    file : string;

    offset : number;

    _buffer : core.DartStringBuffer;

    linkedPositionGroups : core.DartMap<string,any>;

    _currentLinkedPositionGroup : any;

    _currentPositionStart : number;

    _exitOffset : number;

    constructor(file : string,offset : number) {
    }
    @defaultConstructor
    SourceBuilder(file : string,offset : number) {
        this._buffer = new core.DartStringBuffer();
        this.linkedPositionGroups = new core.DartMap.literal([
        ]);
        this.file = file;
        this.offset = offset;
    }
    @namedConstructor
    buffer() {
        this._buffer = new core.DartStringBuffer();
        this.linkedPositionGroups = new core.DartMap.literal([
        ]);
        this.file = null;
        this.offset = 0;
    }
    static buffer : new() => SourceBuilder;

    get exitOffset() : number {
        if (this._exitOffset == null) {
            return null;
        }
        return this.offset + this._exitOffset;
    }
    get length() : number {
        return this._buffer.length;
    }
    addSuggestion(kind : any,value : string) : void {
        let suggestion = new bare.createInstance(any,null,value,kind);
        this._currentLinkedPositionGroup.addSuggestion(suggestion);
    }
    addSuggestions(kind : any,values : core.DartList<string>) : void {
        values.forEach((value : any) =>  {
            return this.addSuggestion(kind,value);
        });
    }
    append(s : string) : SourceBuilder {
        this._buffer.write(s);
        return this;
    }
    endPosition() : void {
        /* TODO (AssertStatementImpl) : assert (_currentLinkedPositionGroup != null); */;
        this._addPosition();
        this._currentLinkedPositionGroup = null;
    }
    setExitOffset() : void {
        this._exitOffset = this._buffer.length;
    }
    startPosition(id : string) : void {
        /* TODO (AssertStatementImpl) : assert (_currentLinkedPositionGroup == null); */;
        this._currentLinkedPositionGroup = this.linkedPositionGroups.get(id);
        if (op(Op.EQUALS,this._currentLinkedPositionGroup,null)) {
            this._currentLinkedPositionGroup = new bare.createInstance(any,null);
            this.linkedPositionGroups.set(id,this._currentLinkedPositionGroup);
        }
        this._currentPositionStart = this._buffer.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this._buffer.toString();
    }
    _addPosition() : void {
        let start : number = this.offset + this._currentPositionStart;
        let end : number = this.offset + this._buffer.length;
        let length : number = end - start;
        let position : any = new bare.createInstance(any,null,this.file,start);
        this._currentLinkedPositionGroup.addPosition(position,length);
    }
}

export class properties {
}
