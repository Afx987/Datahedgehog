/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/organize_directives.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DirectiveOrganizer {
    export type Constructors = 'DirectiveOrganizer';
    export type Interface = Omit<DirectiveOrganizer, Constructors>;
}
@DartClass
export class DirectiveOrganizer {
    initialCode : string;

    unit : any;

    errors : core.DartList<any>;

    removeUnresolved : boolean;

    removeUnused : boolean;

    code : string;

    endOfLine : string;

    constructor(initialCode : string,unit : any,errors : core.DartList<any>,_namedArguments? : {removeUnresolved? : boolean,removeUnused? : boolean}) {
    }
    @defaultConstructor
    DirectiveOrganizer(initialCode : string,unit : any,errors : core.DartList<any>,_namedArguments? : {removeUnresolved? : boolean,removeUnused? : boolean}) {
        let {removeUnresolved,removeUnused} = Object.assign({
            "removeUnresolved" : true,
            "removeUnused" : true}, _namedArguments );
        this.initialCode = initialCode;
        this.unit = unit;
        this.errors = errors;
        this.removeUnresolved = removeUnresolved;
        this.removeUnused = removeUnused;
        this.code = this.initialCode;
        this.endOfLine = DirectiveOrganizer.getEOL(this.code);
    }
    organize() : core.DartList<any> {
        this._organizeDirectives();
        let edits : core.DartList<any> = new core.DartList.literal<any>();
        if (this.code != this.initialCode) {
            let suffixLength : number = findCommonSuffix(this.initialCode,this.code);
            let edit : any = new bare.createInstance(any,null,0,new core.DartString(this.initialCode).length - suffixLength,new core.DartString(this.code).substring(0,new core.DartString(this.code).length - suffixLength));
            edits.add(edit);
        }
        return edits;
    }
    _isUnresolvedUri(directive : any) : boolean {
        for(let error of this.errors) {
            let errorCode : any = error.errorCode;
            if ((op(Op.EQUALS,errorCode,CompileTimeErrorCode.URI_DOES_NOT_EXIST) || op(Op.EQUALS,errorCode,CompileTimeErrorCode.URI_HAS_NOT_BEEN_GENERATED)) && op(Op.EQUALS,directive.uri.offset,error.offset)) {
                return true;
            }
        }
        return false;
    }
    _isUnusedImport(directive : any) : boolean {
        for(let error of this.errors) {
            if ((op(Op.EQUALS,error.errorCode,HintCode.DUPLICATE_IMPORT) || op(Op.EQUALS,error.errorCode,HintCode.UNUSED_IMPORT)) && op(Op.EQUALS,directive.uri.offset,error.offset)) {
                return true;
            }
        }
        return false;
    }
    _organizeDirectives() : void {
        let directives : core.DartList<_DirectiveInfo> = new core.DartList.literal();
        for(let directive of this.unit.directives) {
            if (is(directive, any)) {
                let priority : _DirectivePriority = DirectiveOrganizer.getDirectivePriority(directive);
                if (priority != null) {
                    let offset : number = directive.offset;
                    let length : number = directive.length;
                    let text : string = new core.DartString(this.code).substring(offset,offset + length);
                    let uriContent : string = directive.uri.stringValue;
                    directives.add(new _DirectiveInfo(directive,priority,uriContent,text));
                }
            }
        }
        if (directives.isEmpty) {
            return;
        }
        let firstDirectiveOffset : number = directives.first.directive.offset;
        let lastDirectiveEnd : number = directives.last.directive.end;
        directives.sort();
        let directivesCode : string;
        {
            let sb : core.DartStringBuffer = new core.DartStringBuffer();
            let currentPriority : _DirectivePriority = null;
            for(let directiveInfo of directives) {
                if (this.removeUnresolved && this._isUnresolvedUri(directiveInfo.directive)) {
                    continue;
                }
                if (this.removeUnused && this._isUnusedImport(directiveInfo.directive)) {
                    continue;
                }
                if (currentPriority != directiveInfo.priority) {
                    if (sb.length != 0) {
                        sb.write(this.endOfLine);
                    }
                    currentPriority = directiveInfo.priority;
                }
                sb.write(directiveInfo.text);
                sb.write(this.endOfLine);
            }
            directivesCode = sb.toString();
            directivesCode = new core.DartString(directivesCode).trimRight();
        }
        {
            let firstCommentToken : boolean = true;
            let token : any = this.unit.beginToken;
            while (token != null && token.type != TokenType.EOF && op(Op.LT,token.end,lastDirectiveEnd)){
                let commentToken : any = token.precedingComments;
                while (commentToken != null){
                    let offset : number = commentToken.offset;
                    let end : number = commentToken.end;
                    if (offset > firstDirectiveOffset && offset < lastDirectiveEnd) {
                        if (firstCommentToken) {
                            directivesCode += this.endOfLine;
                            firstCommentToken = false;
                        }
                        directivesCode += new core.DartString(this.code).substring(offset,end) + this.endOfLine;
                    }
                    commentToken = commentToken.next;
                }
                token = token.next;
            }
        }
        let beforeDirectives : string = new core.DartString(this.code).substring(0,firstDirectiveOffset);
        let afterDirectives : string = new core.DartString(this.code).substring(lastDirectiveEnd);
        this.code = beforeDirectives + directivesCode + afterDirectives;
    }
    static getDirectivePriority(directive : any) : _DirectivePriority {
        let uriContent : string = directive.uri.stringValue;
        if (is(directive, any)) {
            if (new core.DartString(uriContent).startsWith("dart:")) {
                return _DirectivePriority.IMPORT_SDK;
            }else if (new core.DartString(uriContent).startsWith("package:")) {
                return _DirectivePriority.IMPORT_PKG;
            }else if (new core.DartString(uriContent).contains('://')) {
                return _DirectivePriority.IMPORT_OTHER;
            }else {
                return _DirectivePriority.IMPORT_REL;
            }
        }
        if (is(directive, any)) {
            if (new core.DartString(uriContent).startsWith("dart:")) {
                return _DirectivePriority.EXPORT_SDK;
            }else if (new core.DartString(uriContent).startsWith("package:")) {
                return _DirectivePriority.EXPORT_PKG;
            }else if (new core.DartString(uriContent).contains('://')) {
                return _DirectivePriority.EXPORT_OTHER;
            }else {
                return _DirectivePriority.EXPORT_REL;
            }
        }
        if (is(directive, any)) {
            return _DirectivePriority.PART;
        }
        return null;
    }
    static getEOL(code : string) : string {
        if (new core.DartString(code).contains('\n')) {
            return '\n';
        }else {
            return '\n';
        }
    }
}

export namespace _DirectiveInfo {
    export type Constructors = '_DirectiveInfo';
    export type Interface = Omit<_DirectiveInfo, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class _DirectiveInfo implements core.DartComparable.Interface<_DirectiveInfo> {
    directive : any;

    priority : _DirectivePriority;

    uri : string;

    text : string;

    constructor(directive : any,priority : _DirectivePriority,uri : string,text : string) {
    }
    @defaultConstructor
    _DirectiveInfo(directive : any,priority : _DirectivePriority,uri : string,text : string) {
        this.directive = directive;
        this.priority = priority;
        this.uri = uri;
        this.text = text;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : _DirectiveInfo) : number {
        if (op(Op.EQUALS,this.priority,other.priority)) {
            return _DirectiveInfo._compareUri(this.uri,other.uri);
        }
        return this.priority.ordinal - other.priority.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `(priority=${this.priority}; text=${this.text})`;
    }
    static _compareUri(a : string,b : string) : number {
        let aList : core.DartList<string> = _DirectiveInfo._splitUri(a);
        let bList : core.DartList<string> = _DirectiveInfo._splitUri(b);
        let result : number;
        if ((result = new core.DartString(aList[0]).compareTo(bList[0])) != 0) return result;
        if ((result = new core.DartString(aList[1]).compareTo(bList[1])) != 0) return result;
        return 0;
    }
    static _splitUri(uri : string) : core.DartList<string> {
        let index : number = new core.DartString(uri).indexOf('/');
        if (index == -1) {
            return new core.DartList.literal<string>(uri,'');
        }
        return new core.DartList.literal<string>(new core.DartString(uri).substring(0,index),new core.DartString(uri).substring(index + 1));
    }
}

export namespace _DirectivePriority {
    export type Constructors = '_DirectivePriority';
    export type Interface = Omit<_DirectivePriority, Constructors>;
}
@DartClass
export class _DirectivePriority {
    private static __$IMPORT_SDK;
    static get IMPORT_SDK() { 
        if (this.__$IMPORT_SDK===undefined) {
            this.__$IMPORT_SDK = new _DirectivePriority('IMPORT_SDK',0);
        }
        return this.__$IMPORT_SDK;
    }

    private static __$IMPORT_PKG;
    static get IMPORT_PKG() { 
        if (this.__$IMPORT_PKG===undefined) {
            this.__$IMPORT_PKG = new _DirectivePriority('IMPORT_PKG',1);
        }
        return this.__$IMPORT_PKG;
    }

    private static __$IMPORT_OTHER;
    static get IMPORT_OTHER() { 
        if (this.__$IMPORT_OTHER===undefined) {
            this.__$IMPORT_OTHER = new _DirectivePriority('IMPORT_OTHER',2);
        }
        return this.__$IMPORT_OTHER;
    }

    private static __$IMPORT_REL;
    static get IMPORT_REL() { 
        if (this.__$IMPORT_REL===undefined) {
            this.__$IMPORT_REL = new _DirectivePriority('IMPORT_REL',3);
        }
        return this.__$IMPORT_REL;
    }

    private static __$EXPORT_SDK;
    static get EXPORT_SDK() { 
        if (this.__$EXPORT_SDK===undefined) {
            this.__$EXPORT_SDK = new _DirectivePriority('EXPORT_SDK',4);
        }
        return this.__$EXPORT_SDK;
    }

    private static __$EXPORT_PKG;
    static get EXPORT_PKG() { 
        if (this.__$EXPORT_PKG===undefined) {
            this.__$EXPORT_PKG = new _DirectivePriority('EXPORT_PKG',5);
        }
        return this.__$EXPORT_PKG;
    }

    private static __$EXPORT_OTHER;
    static get EXPORT_OTHER() { 
        if (this.__$EXPORT_OTHER===undefined) {
            this.__$EXPORT_OTHER = new _DirectivePriority('EXPORT_OTHER',6);
        }
        return this.__$EXPORT_OTHER;
    }

    private static __$EXPORT_REL;
    static get EXPORT_REL() { 
        if (this.__$EXPORT_REL===undefined) {
            this.__$EXPORT_REL = new _DirectivePriority('EXPORT_REL',7);
        }
        return this.__$EXPORT_REL;
    }

    private static __$PART;
    static get PART() { 
        if (this.__$PART===undefined) {
            this.__$PART = new _DirectivePriority('PART',8);
        }
        return this.__$PART;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    _DirectivePriority(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export class properties {
}
