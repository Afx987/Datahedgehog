/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/java_engine.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace FileNameUtilities {
    export type Constructors = 'FileNameUtilities';
    export type Interface = Omit<FileNameUtilities, Constructors>;
}
@DartClass
export class FileNameUtilities {
    static getExtension(fileName : string) : string {
        if (fileName == null) {
            return "";
        }
        let index : number = new core.DartString(fileName).lastIndexOf('.');
        if (index >= 0) {
            return new core.DartString(fileName).substring(index + 1);
        }
        return "";
    }
    constructor() {
    }
    @defaultConstructor
    FileNameUtilities() {
    }
}

export namespace StringUtilities {
    export type Constructors = 'StringUtilities';
    export type Interface = Omit<StringUtilities, Constructors>;
}
@DartClass
export class StringUtilities {
    private static __$EMPTY : string;
    static get EMPTY() : string { 
        if (this.__$EMPTY===undefined) {
            this.__$EMPTY = '';
        }
        return this.__$EMPTY;
    }

    private static __$EMPTY_ARRAY : core.DartList<string>;
    static get EMPTY_ARRAY() : core.DartList<string> { 
        if (this.__$EMPTY_ARRAY===undefined) {
            this.__$EMPTY_ARRAY = new core.DartList.literal<string>();
        }
        return this.__$EMPTY_ARRAY;
    }

    private static __$INTERNER : any;
    static get INTERNER() : any { 
        if (this.__$INTERNER===undefined) {
            this.__$INTERNER = new bare.createInstance(any,null);
        }
        return this.__$INTERNER;
    }
    static set INTERNER(__$value : any)  { 
        this.__$INTERNER = __$value;
    }

    static computeLineStarts(content : string) : core.DartList<number> {
        let lineStarts : core.DartList<number> = new core.DartList.literal<number>(0);
        let length : number = new core.DartString(content).length;
        let unit : number;
        for(let index : number = 0; index < length; index++){
            unit = new core.DartString(content).codeUnitAt(index);
            if (unit == 13) {
                if ((index + 1 < length) && new core.DartString(content).codeUnitAt(index + 1) == 10) {
                }else {
                    lineStarts.add(index + 1);
                }
            }
            if (unit == 10) {
                lineStarts.add(index + 1);
            }
        }
        return lineStarts;
    }
    static endsWith3(str : string,c1 : number,c2 : number,c3 : number) {
        let length = new core.DartString(str).length;
        return length >= 3 && new core.DartString(str).codeUnitAt(length - 3) == c1 && new core.DartString(str).codeUnitAt(length - 2) == c2 && new core.DartString(str).codeUnitAt(length - 1) == c3;
    }
    static endsWithChar(str : string,c : number) {
        let length : number = new core.DartString(str).length;
        return length > 0 && new core.DartString(str).codeUnitAt(length - 1) == c;
    }
    static indexOf1(str : string,start : number,c : number) : number {
        let index : number = start;
        let last : number = new core.DartString(str).length;
        while (index < last){
            if (new core.DartString(str).codeUnitAt(index) == c) {
                return index;
            }
            index++;
        }
        return -1;
    }
    static indexOf2(str : string,start : number,c1 : number,c2 : number) : number {
        let index : number = start;
        let last : number = new core.DartString(str).length - 1;
        while (index < last){
            if (new core.DartString(str).codeUnitAt(index) == c1 && new core.DartString(str).codeUnitAt(index + 1) == c2) {
                return index;
            }
            index++;
        }
        return -1;
    }
    static indexOf4(string : string,start : number,c1 : number,c2 : number,c3 : number,c4 : number) : number {
        let index : number = start;
        let last : number = new core.DartString(string).length - 3;
        while (index < last){
            if (new core.DartString(string).codeUnitAt(index) == c1 && new core.DartString(string).codeUnitAt(index + 1) == c2 && new core.DartString(string).codeUnitAt(index + 2) == c3 && new core.DartString(string).codeUnitAt(index + 3) == c4) {
                return index;
            }
            index++;
        }
        return -1;
    }
    static indexOf5(str : string,start : number,c1 : number,c2 : number,c3 : number,c4 : number,c5 : number) : number {
        let index : number = start;
        let last : number = new core.DartString(str).length - 4;
        while (index < last){
            if (new core.DartString(str).codeUnitAt(index) == c1 && new core.DartString(str).codeUnitAt(index + 1) == c2 && new core.DartString(str).codeUnitAt(index + 2) == c3 && new core.DartString(str).codeUnitAt(index + 3) == c4 && new core.DartString(str).codeUnitAt(index + 4) == c5) {
                return index;
            }
            index++;
        }
        return -1;
    }
    static indexOfFirstNotLetterDigit(string : string,startIndex : number) : number {
        let index : number = startIndex;
        let last : number = new core.DartString(string).length;
        while (index < last){
            let c : number = new core.DartString(string).codeUnitAt(index);
            if (!Character.isLetterOrDigit(c)) {
                return index;
            }
            index++;
        }
        return last;
    }
    static intern(string : string) : string {
        return StringUtilities.INTERNER.intern(string);
    }
    static isEmpty(s : string) : boolean {
        return s == null || new core.DartString(s).isEmpty;
    }
    static isTagName(s : string) : boolean {
        if (s == null || new core.DartString(s).length == 0) {
            return false;
        }
        let sz : number = new core.DartString(s).length;
        for(let i : number = 0; i < sz; i++){
            let c : number = new core.DartString(s).codeUnitAt(i);
            if (!Character.isLetter(c)) {
                if (i == 0) {
                    return false;
                }
                if (!Character.isDigit(c) && c != 45) {
                    return false;
                }
            }
        }
        return true;
    }
    static printListOfQuotedNames(names : core.DartList<string>) : string {
        if (names == null) {
            throw new core.ArgumentError("The list must not be null");
        }
        let count : number = names.length;
        if (count < 2) {
            throw new core.ArgumentError("The list must contain at least two names");
        }
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("'");
        buffer.write(names[0]);
        buffer.write("'");
        for(let i : number = 1; i < count - 1; i++){
            buffer.write(", '");
            buffer.write(names[i]);
            buffer.write("'");
        }
        buffer.write(" and '");
        buffer.write(names[count - 1]);
        buffer.write("'");
        return buffer.toString();
    }
    static startsWith2(str : string,start : number,c1 : number,c2 : number) {
        return new core.DartString(str).length - start >= 2 && new core.DartString(str).codeUnitAt(start) == c1 && new core.DartString(str).codeUnitAt(start + 1) == c2;
    }
    static startsWith3(str : string,start : number,c1 : number,c2 : number,c3 : number) {
        return new core.DartString(str).length - start >= 3 && new core.DartString(str).codeUnitAt(start) == c1 && new core.DartString(str).codeUnitAt(start + 1) == c2 && new core.DartString(str).codeUnitAt(start + 2) == c3;
    }
    static startsWith4(str : string,start : number,c1 : number,c2 : number,c3 : number,c4 : number) {
        return new core.DartString(str).length - start >= 4 && new core.DartString(str).codeUnitAt(start) == c1 && new core.DartString(str).codeUnitAt(start + 1) == c2 && new core.DartString(str).codeUnitAt(start + 2) == c3 && new core.DartString(str).codeUnitAt(start + 3) == c4;
    }
    static startsWith5(str : string,start : number,c1 : number,c2 : number,c3 : number,c4 : number,c5 : number) {
        return new core.DartString(str).length - start >= 5 && new core.DartString(str).codeUnitAt(start) == c1 && new core.DartString(str).codeUnitAt(start + 1) == c2 && new core.DartString(str).codeUnitAt(start + 2) == c3 && new core.DartString(str).codeUnitAt(start + 3) == c4 && new core.DartString(str).codeUnitAt(start + 4) == c5;
    }
    static startsWith6(str : string,start : number,c1 : number,c2 : number,c3 : number,c4 : number,c5 : number,c6 : number) {
        return new core.DartString(str).length - start >= 6 && new core.DartString(str).codeUnitAt(start) == c1 && new core.DartString(str).codeUnitAt(start + 1) == c2 && new core.DartString(str).codeUnitAt(start + 2) == c3 && new core.DartString(str).codeUnitAt(start + 3) == c4 && new core.DartString(str).codeUnitAt(start + 4) == c5 && new core.DartString(str).codeUnitAt(start + 5) == c6;
    }
    static startsWithChar(str : string,c : number) {
        return new core.DartString(str).length != 0 && new core.DartString(str).codeUnitAt(0) == c;
    }
    static substringBefore(str : string,separator : string) : string {
        if (str == null || new core.DartString(str).isEmpty) {
            return str;
        }
        if (separator == null) {
            return str;
        }
        let pos : number = new core.DartString(str).indexOf(separator);
        if (pos < 0) {
            return str;
        }
        return new core.DartString(str).substring(0,pos);
    }
    static substringBeforeChar(str : string,c : number) : string {
        if (StringUtilities.isEmpty(str)) {
            return str;
        }
        let pos : number = StringUtilities.indexOf1(str,0,c);
        if (pos < 0) {
            return str;
        }
        return new core.DartString(str).substring(0,pos);
    }
    constructor() {
    }
    @defaultConstructor
    StringUtilities() {
    }
}

export namespace UUID {
    export type Constructors = 'UUID';
    export type Interface = Omit<UUID, Constructors>;
}
@DartClass
export class UUID {
    private static __$__nextId : number;
    static get __nextId() : number { 
        if (this.__$__nextId===undefined) {
            this.__$__nextId = 0;
        }
        return this.__$__nextId;
    }
    static set __nextId(__$value : number)  { 
        this.__$__nextId = __$value;
    }

    id : string;

    constructor(id : string) {
    }
    @defaultConstructor
    UUID(id : string) {
        this.id = id;
    }
    toString() : string {
        return this.id;
    }
    static randomUUID() : UUID {
        return new UUID(new core.DartInt((UUID.__nextId)).toString());
    }
}

export class properties {
}
