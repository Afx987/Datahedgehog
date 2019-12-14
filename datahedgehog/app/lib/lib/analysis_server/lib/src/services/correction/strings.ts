/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/strings.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var capitalize : (str : string) => string = (str : string) : string =>  {
    if (isEmpty(str)) {
        return str;
    }
    return new core.DartString(new core.DartString(str).substring(0,1)).toUpperCase() + new core.DartString(str).substring(1);
};
export var compareStrings : (a : string,b : string) => number = (a : string,b : string) : number =>  {
    if (a == b) {
        return 0;
    }
    if (a == null) {
        return 1;
    }
    if (b == null) {
        return -1;
    }
    return new core.DartString(a).compareTo(b);
};
export var computeSimpleDiff : (oldStr : string,newStr : string) => SimpleDiff = (oldStr : string,newStr : string) : SimpleDiff =>  {
    let prefixLength : number = findCommonPrefix(oldStr,newStr);
    let suffixLength : number = findCommonSuffix(oldStr,newStr);
    while (prefixLength >= 0){
        let oldReplaceLength : number = new core.DartString(oldStr).length - prefixLength - suffixLength;
        let newReplaceLength : number = new core.DartString(newStr).length - prefixLength - suffixLength;
        if (oldReplaceLength >= 0 && newReplaceLength >= 0) {
            return new SimpleDiff(prefixLength,oldReplaceLength,new core.DartString(newStr).substring(prefixLength,new core.DartString(newStr).length - suffixLength));
        }
        prefixLength--;
    }
    return new SimpleDiff(0,new core.DartString(oldStr).length,newStr);
};
export var countLeadingWhitespaces : (str : string) => number = (str : string) : number =>  {
    let i : number = 0;
    for(; i < new core.DartString(str).length; i++){
        let c : number = new core.DartString(str).codeUnitAt(i);
        if (!isWhitespace(c)) {
            break;
        }
    }
    return i;
};
export var countMatches : (str : string,sub : string) => number = (str : string,sub : string) : number =>  {
    if (isEmpty(str) || isEmpty(sub)) {
        return 0;
    }
    let count : number = 0;
    let idx : number = 0;
    while ((idx = new core.DartString(str).indexOf(sub,idx)) != -1){
        count++;
        idx += new core.DartString(sub).length;
    }
    return count;
};
export var countTrailingWhitespaces : (str : string) => number = (str : string) : number =>  {
    let i : number = 0;
    for(; i < new core.DartString(str).length; i++){
        let c : number = new core.DartString(str).codeUnitAt(new core.DartString(str).length - 1 - i);
        if (!isWhitespace(c)) {
            break;
        }
    }
    return i;
};
export var findCommonOverlap : (a : string,b : string) => number = (a : string,b : string) : number =>  {
    let a_length : number = new core.DartString(a).length;
    let b_length : number = new core.DartString(b).length;
    if (a_length == 0 || b_length == 0) {
        return 0;
    }
    if (a_length > b_length) {
        a = new core.DartString(a).substring(a_length - b_length);
    }else if (a_length < b_length) {
        b = new core.DartString(b).substring(0,a_length);
    }
    let text_length : number = math.min(a_length,b_length);
    if (a == b) {
        return text_length;
    }
    let length : number = 0;
    while (length < text_length){
        if (new core.DartString(a).codeUnitAt(text_length - 1 - length) != new core.DartString(b).codeUnitAt(length)) {
            break;
        }
        length++;
    }
    return length;
};
export var findCommonPrefix : (a : string,b : string) => number = (a : string,b : string) : number =>  {
    let n : number = math.min(new core.DartString(a).length,new core.DartString(b).length);
    for(let i : number = 0; i < n; i++){
        if (new core.DartString(a).codeUnitAt(i) != new core.DartString(b).codeUnitAt(i)) {
            return i;
        }
    }
    return n;
};
export var findCommonSuffix : (a : string,b : string) => number = (a : string,b : string) : number =>  {
    let a_length : number = new core.DartString(a).length;
    let b_length : number = new core.DartString(b).length;
    let n : number = math.min(a_length,b_length);
    for(let i : number = 1; i <= n; i++){
        if (new core.DartString(a).codeUnitAt(a_length - i) != new core.DartString(b).codeUnitAt(b_length - i)) {
            return i - 1;
        }
    }
    return n;
};
export var isBlank : (str : string) => boolean = (str : string) : boolean =>  {
    if (str == null) {
        return true;
    }
    if (new core.DartString(str).isEmpty) {
        return true;
    }
    return new core.DartString(str).codeUnits.every(isSpace);
};
export var isDigit : (c : number) => boolean = (c : number) : boolean =>  {
    return c >= 48 && c <= 57;
};
export var isEOL : (c : number) => boolean = (c : number) : boolean =>  {
    return c == 13 || c == 10;
};
export var isLetter : (c : number) => boolean = (c : number) : boolean =>  {
    return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
};
export var isLetterOrDigit : (c : number) => boolean = (c : number) : boolean =>  {
    return isLetter(c) || isDigit(c);
};
export var isSpace : (c : number) => boolean = (c : number) : boolean =>  {
    return c == 32 || c == 9;
};
export var isWhitespace : (c : number) => boolean = (c : number) : boolean =>  {
    return isSpace(c) || isEOL(c);
};
export var remove : (str : string,remove : string) => string = (str : string,remove : string) : string =>  {
    if (isEmpty(str) || isEmpty(remove)) {
        return str;
    }
    return new core.DartString(str).replaceAll(remove,'');
};
export var removeEnd : (str : string,remove : string) => string = (str : string,remove : string) : string =>  {
    if (isEmpty(str) || isEmpty(remove)) {
        return str;
    }
    if (new core.DartString(str).endsWith(remove)) {
        return new core.DartString(str).substring(0,new core.DartString(str).length - new core.DartString(remove).length);
    }
    return str;
};
export var repeat : (s : string,n : number) => string = (s : string,n : number) : string =>  {
    let sb : core.DartStringBuffer = new core.DartStringBuffer();
    for(let i : number = 0; i < n; i++){
        sb.write(s);
    }
    return sb.toString();
};
export var substringAfterLast : (str : string,separator : string) => string = (str : string,separator : string) : string =>  {
    if (isEmpty(str)) {
        return str;
    }
    if (isEmpty(separator)) {
        return '';
    }
    let pos : number = new core.DartString(str).lastIndexOf(separator);
    if (pos == -1) {
        return str;
    }
    return new core.DartString(str).substring(pos + new core.DartString(separator).length);
};
export namespace SimpleDiff {
    export type Constructors = 'SimpleDiff';
    export type Interface = Omit<SimpleDiff, Constructors>;
}
@DartClass
export class SimpleDiff {
    offset : number;

    length : number;

    replacement : string;

    constructor(offset : number,length : number,replacement : string) {
    }
    @defaultConstructor
    SimpleDiff(offset : number,length : number,replacement : string) {
        this.offset = offset;
        this.length = length;
        this.replacement = replacement;
    }
}

export class properties {
    private static __$CHAR_DOLLAR : number;
    static get CHAR_DOLLAR() : number { 
        if (this.__$CHAR_DOLLAR===undefined) {
            this.__$CHAR_DOLLAR = 36;
        }
        return this.__$CHAR_DOLLAR;
    }
    static set CHAR_DOLLAR(__$value : number)  { 
        this.__$CHAR_DOLLAR = __$value;
    }

    private static __$CHAR_DOT : number;
    static get CHAR_DOT() : number { 
        if (this.__$CHAR_DOT===undefined) {
            this.__$CHAR_DOT = 46;
        }
        return this.__$CHAR_DOT;
    }
    static set CHAR_DOT(__$value : number)  { 
        this.__$CHAR_DOT = __$value;
    }

    private static __$CHAR_UNDERSCORE : number;
    static get CHAR_UNDERSCORE() : number { 
        if (this.__$CHAR_UNDERSCORE===undefined) {
            this.__$CHAR_UNDERSCORE = 95;
        }
        return this.__$CHAR_UNDERSCORE;
    }
    static set CHAR_UNDERSCORE(__$value : number)  { 
        this.__$CHAR_UNDERSCORE = __$value;
    }

}
