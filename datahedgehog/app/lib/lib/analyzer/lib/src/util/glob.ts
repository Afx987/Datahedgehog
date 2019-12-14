/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/util/glob.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Glob {
    export type Constructors = 'Glob';
    export type Interface = Omit<Glob, Constructors>;
}
@DartClass
export class Glob {
    private static __$_specialChars : core.DartRegExp;
    static get _specialChars() : core.DartRegExp { 
        if (this.__$_specialChars===undefined) {
            this.__$_specialChars = new core.DartRegExp('([\\\^\$\.\|\+\[\]\(\)\{\}])');
        }
        return this.__$_specialChars;
    }
    static set _specialChars(__$value : core.DartRegExp)  { 
        this.__$_specialChars = __$value;
    }

    _separator : string;

    _pattern : string;

    _suffix : string;

    _regex : core.DartRegExp;

    constructor(_separator : string,_pattern : string) {
    }
    @defaultConstructor
    Glob(_separator : string,_pattern : string) {
        this._separator = _separator;
        this._pattern = _pattern;
        if (Glob._hasJustPrefix(this._pattern,'**/*')) {
            this._suffix = new core.DartString(new core.DartString(this._pattern).substring(4)).toLowerCase();
        }else if (Glob._hasJustPrefix(this._pattern,'**')) {
            this._suffix = new core.DartString(new core.DartString(this._pattern).substring(2)).toLowerCase();
        }else {
            this._regex = Glob._regexpFromGlobPattern(this._pattern);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return new core.DartString(this._pattern).hashCode;
    }
    [OperatorMethods.EQUALS](other : any) : boolean {
        return is(other, Glob) && this._pattern == other._pattern;
    }
    matches(path : string) : boolean {
        let posixPath : string = this._toPosixPath(path);
        if (this._suffix != null) {
            return new core.DartString(new core.DartString(posixPath).toLowerCase()).endsWith(this._suffix);
        }
        return this._regex.matchAsPrefix(posixPath) != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this._pattern;
    }
    _toPosixPath(path : string) : string {
        if (this._separator == '/') {
            return path;
        }
        return new core.DartString(path).replaceAll(this._separator,'/');
    }
    static _hasJustPrefix(pattern : string,prefix : string) : boolean {
        if (new core.DartString(pattern).startsWith(prefix)) {
            let prefixLength : number = new core.DartString(prefix).length;
            return new core.DartString(pattern).indexOf('*',prefixLength) == -1 && new core.DartString(pattern).indexOf('?',prefixLength) == -1;
        }
        return false;
    }
    static _regexpFromGlobPattern(pattern : string) : core.DartRegExp {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write('^');
        let chars : core.DartList<string> = new core.DartString(pattern).split('');
        for(let i : number = 0; i < chars.length; i++){
            let c : string = chars[i];
            if (Glob._specialChars.hasMatch(c)) {
                sb.write('\');
                sb.write(c);
            }else if (c == '*') {
                if (i + 1 < chars.length && chars[i + 1] == '*') {
                    sb.write('.*');
                    i++;
                }else {
                    sb.write('[^/]*');
                }
            }else if (c == '?') {
                sb.write('[^/]');
            }else {
                sb.write(c);
            }
        }
        sb.write('$');
        return new core.DartRegExp(sb.toString(),{
            caseSensitive : false});
    }
}

export class properties {
}
