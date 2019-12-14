/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/sort_members.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace MemberSorter {
    export type Constructors = 'MemberSorter';
    export type Interface = Omit<MemberSorter, Constructors>;
}
@DartClass
export class MemberSorter {
    private static __$_PRIORITY_ITEMS : core.DartList<_PriorityItem>;
    static get _PRIORITY_ITEMS() : core.DartList<_PriorityItem> { 
        if (this.__$_PRIORITY_ITEMS===undefined) {
            this.__$_PRIORITY_ITEMS = new core.DartList.literal(new _PriorityItem(false,_MemberKind.UNIT_FUNCTION_MAIN,false),new _PriorityItem(false,_MemberKind.UNIT_VARIABLE_CONST,false),new _PriorityItem(false,_MemberKind.UNIT_VARIABLE_CONST,true),new _PriorityItem(false,_MemberKind.UNIT_VARIABLE,false),new _PriorityItem(false,_MemberKind.UNIT_VARIABLE,true),new _PriorityItem(false,_MemberKind.UNIT_ACCESSOR,false),new _PriorityItem(false,_MemberKind.UNIT_ACCESSOR,true),new _PriorityItem(false,_MemberKind.UNIT_FUNCTION,false),new _PriorityItem(false,_MemberKind.UNIT_FUNCTION,true),new _PriorityItem(false,_MemberKind.UNIT_FUNCTION_TYPE,false),new _PriorityItem(false,_MemberKind.UNIT_FUNCTION_TYPE,true),new _PriorityItem(false,_MemberKind.UNIT_CLASS,false),new _PriorityItem(false,_MemberKind.UNIT_CLASS,true),new _PriorityItem(true,_MemberKind.CLASS_FIELD,false),new _PriorityItem(true,_MemberKind.CLASS_ACCESSOR,false),new _PriorityItem(true,_MemberKind.CLASS_ACCESSOR,true),new _PriorityItem(false,_MemberKind.CLASS_FIELD,false),new _PriorityItem(false,_MemberKind.CLASS_CONSTRUCTOR,false),new _PriorityItem(false,_MemberKind.CLASS_CONSTRUCTOR,true),new _PriorityItem(false,_MemberKind.CLASS_ACCESSOR,false),new _PriorityItem(false,_MemberKind.CLASS_ACCESSOR,true),new _PriorityItem(false,_MemberKind.CLASS_METHOD,false),new _PriorityItem(false,_MemberKind.CLASS_METHOD,true),new _PriorityItem(true,_MemberKind.CLASS_METHOD,false),new _PriorityItem(true,_MemberKind.CLASS_METHOD,true));
        }
        return this.__$_PRIORITY_ITEMS;
    }
    static set _PRIORITY_ITEMS(__$value : core.DartList<_PriorityItem>)  { 
        this.__$_PRIORITY_ITEMS = __$value;
    }

    initialCode : string;

    unit : any;

    code : string;

    endOfLine : string;

    constructor(initialCode : string,unit : any) {
    }
    @defaultConstructor
    MemberSorter(initialCode : string,unit : any) {
        this.initialCode = initialCode;
        this.unit = unit;
        this.code = this.initialCode;
        this.endOfLine = MemberSorter.getEOL(this.code);
    }
    sort() : core.DartList<any> {
        this._sortClassesMembers();
        this._sortUnitMembers();
        this._sortUnitDirectives();
        let edits : core.DartList<any> = new core.DartList.literal<any>();
        if (this.code != this.initialCode) {
            let diff : any = computeSimpleDiff(this.initialCode,this.code);
            let edit : any = new bare.createInstance(any,null,diff.offset,diff.length,diff.replacement);
            edits.add(edit);
        }
        return edits;
    }
    _sortAndReorderMembers(members : core.DartList<_MemberInfo>) : void {
        let membersSorted : core.DartList<_MemberInfo> = MemberSorter._getSortedMembers(members);
        let size : number = membersSorted.length;
        for(let i : number = 0; i < size; i++){
            let newInfo : _MemberInfo = membersSorted[size - 1 - i];
            let oldInfo : _MemberInfo = members[size - 1 - i];
            if (newInfo != oldInfo) {
                let beforeCode : string = new core.DartString(this.code).substring(0,oldInfo.offset);
                let afterCode : string = new core.DartString(this.code).substring(oldInfo.end);
                this.code = beforeCode + newInfo.text + afterCode;
            }
        }
    }
    _sortClassesMembers() : void {
        for(let unitMember of this.unit.declarations) {
            if (is(unitMember, any)) {
                let classDeclaration : any = unitMember;
                this._sortClassMembers(classDeclaration);
            }
        }
    }
    _sortClassMembers(classDeclaration : any) : void {
        let members : core.DartList<_MemberInfo> = new core.DartList.literal<_MemberInfo>();
        for(let member of classDeclaration.members) {
            let kind : _MemberKind = null;
            let isStatic : boolean = false;
            let name : string = null;
            if (is(member, any)) {
                kind = _MemberKind.CLASS_CONSTRUCTOR;
                let nameNode : any = member.name;
                if (op(Op.EQUALS,nameNode,null)) {
                    name = "";
                }else {
                    name = nameNode.name;
                }
            }
            if (is(member, any)) {
                let fieldDeclaration : any = member;
                let fields : core.DartList<any> = fieldDeclaration.fields.variables;
                if (!fields.isEmpty) {
                    kind = _MemberKind.CLASS_FIELD;
                    isStatic = fieldDeclaration.isStatic;
                    name = fields[0].name.name;
                }
            }
            if (is(member, any)) {
                let method : any = member;
                isStatic = method.isStatic;
                name = method.name.name;
                if (method.isGetter) {
                    kind = _MemberKind.CLASS_ACCESSOR;
                    name += " getter";
                }else if (method.isSetter) {
                    kind = _MemberKind.CLASS_ACCESSOR;
                    name += " setter";
                }else {
                    kind = _MemberKind.CLASS_METHOD;
                }
            }
            if (name != null) {
                let item : _PriorityItem = new _PriorityItem.forName(isStatic,name,kind);
                let offset : number = member.offset;
                let length : number = member.length;
                let text : string = new core.DartString(this.code).substring(offset,offset + length);
                members.add(new _MemberInfo(item,name,offset,length,text));
            }
        }
        this._sortAndReorderMembers(members);
    }
    _sortUnitDirectives() : void {
        let hasLibraryDirective : boolean = false;
        let directives : core.DartList<_DirectiveInfo> = new core.DartList.literal();
        for(let directive of this.unit.directives) {
            if (is(directive, any)) {
                hasLibraryDirective = true;
            }
            if (isNot(directive, any)) {
                continue;
            }
            let uriDirective : any = directive as any;
            let uriContent : string = uriDirective.uri.stringValue;
            let kind : _DirectivePriority = null;
            if (is(directive, any)) {
                if (new core.DartString(uriContent).startsWith("dart:")) {
                    kind = _DirectivePriority.IMPORT_SDK;
                }else if (new core.DartString(uriContent).startsWith("package:")) {
                    kind = _DirectivePriority.IMPORT_PKG;
                }else if (new core.DartString(uriContent).contains('://')) {
                    kind = _DirectivePriority.IMPORT_OTHER;
                }else {
                    kind = _DirectivePriority.IMPORT_REL;
                }
            }
            if (is(directive, any)) {
                if (new core.DartString(uriContent).startsWith("dart:")) {
                    kind = _DirectivePriority.EXPORT_SDK;
                }else if (new core.DartString(uriContent).startsWith("package:")) {
                    kind = _DirectivePriority.EXPORT_PKG;
                }else if (new core.DartString(uriContent).contains('://')) {
                    kind = _DirectivePriority.EXPORT_OTHER;
                }else {
                    kind = _DirectivePriority.EXPORT_REL;
                }
            }
            if (is(directive, any)) {
                kind = _DirectivePriority.PART;
            }
            if (kind != null) {
                let documentationText : string;
                if (directive.documentationComment != null) {
                    documentationText = new core.DartString(this.code).substring(directive.documentationComment.offset,directive.documentationComment.end);
                }
                let annotationText : string;
                if (directive.metadata.beginToken != null) {
                    annotationText = new core.DartString(this.code).substring(directive.metadata.beginToken.offset,directive.metadata.endToken.end);
                }
                let offset : number = directive.firstTokenAfterCommentAndMetadata.offset;
                let length : number = op(Op.MINUS,directive.end,offset);
                let text : string = new core.DartString(this.code).substring(offset,offset + length);
                directives.add(new _DirectiveInfo(directive,kind,uriContent,documentationText,annotationText,text));
            }
        }
        if (directives.isEmpty) {
            return;
        }
        let firstDirectiveOffset : number = directives[0].directive.offset;
        let lastDirectiveEnd : number = directives[directives.length - 1].directive.end;
        let libraryDocumentationDirective : _DirectiveInfo;
        if (!hasLibraryDirective && directives.isNotEmpty) {
            libraryDocumentationDirective = directives.first;
        }
        directives.sort();
        let directivesCode : string;
        {
            let sb : core.DartStringBuffer = new core.DartStringBuffer();
            let endOfLine : string = this.endOfLine;
            let currentPriority : _DirectivePriority = null;
            let firstOutputDirective : boolean = true;
            for(let directive of directives) {
                if (currentPriority != directive.priority) {
                    if (sb.length != 0) {
                        sb.write(endOfLine);
                    }
                    currentPriority = directive.priority;
                }
                if (directive != libraryDocumentationDirective && directive.documentationText != null) {
                    sb.write(directive.documentationText);
                    sb.write(endOfLine);
                }
                if (firstOutputDirective) {
                    firstOutputDirective = false;
                    if (libraryDocumentationDirective != null && libraryDocumentationDirective.documentationText != null) {
                        sb.write(libraryDocumentationDirective.documentationText);
                        sb.write(endOfLine);
                    }
                }
                if (directive.annotationText != null) {
                    sb.write(directive.annotationText);
                    sb.write(endOfLine);
                }
                sb.write(directive.text);
                sb.write(endOfLine);
            }
            directivesCode = sb.toString();
            directivesCode = new core.DartString(directivesCode).trimRight();
        }
        let beforeDirectives : string = new core.DartString(this.code).substring(0,firstDirectiveOffset);
        let afterDirectives : string = new core.DartString(this.code).substring(lastDirectiveEnd);
        this.code = beforeDirectives + directivesCode + afterDirectives;
    }
    _sortUnitMembers() : void {
        let members : core.DartList<_MemberInfo> = new core.DartList.literal();
        for(let member of this.unit.declarations) {
            let kind : _MemberKind = null;
            let name : string = null;
            if (is(member, any)) {
                kind = _MemberKind.UNIT_CLASS;
                name = member.name.name;
            }
            if (is(member, any)) {
                kind = _MemberKind.UNIT_CLASS;
                name = member.name.name;
            }
            if (is(member, any)) {
                kind = _MemberKind.UNIT_CLASS;
                name = member.name.name;
            }
            if (is(member, any)) {
                let function : any = member;
                name = function.name.name;
                if (function.isGetter) {
                    kind = _MemberKind.UNIT_ACCESSOR;
                    name += " getter";
                }else if (function.isSetter) {
                    kind = _MemberKind.UNIT_ACCESSOR;
                    name += " setter";
                }else {
                    if (name == 'main') {
                        kind = _MemberKind.UNIT_FUNCTION_MAIN;
                    }else {
                        kind = _MemberKind.UNIT_FUNCTION;
                    }
                }
            }
            if (is(member, any)) {
                kind = _MemberKind.UNIT_FUNCTION_TYPE;
                name = member.name.name;
            }
            if (is(member, any)) {
                let variableDeclaration : any = member;
                let variables : core.DartList<any> = variableDeclaration.variables.variables;
                if (!variables.isEmpty) {
                    if (variableDeclaration.variables.isConst) {
                        kind = _MemberKind.UNIT_VARIABLE_CONST;
                    }else {
                        kind = _MemberKind.UNIT_VARIABLE;
                    }
                    name = variables[0].name.name;
                }
            }
            if (name != null) {
                let item : _PriorityItem = new _PriorityItem.forName(false,name,kind);
                let offset : number = member.offset;
                let length : number = member.length;
                let text : string = new core.DartString(this.code).substring(offset,offset + length);
                members.add(new _MemberInfo(item,name,offset,length,text));
            }
        }
        this._sortAndReorderMembers(members);
    }
    static getEOL(code : string) : string {
        if (new core.DartString(code).contains('\n')) {
            return '\n';
        }else {
            return '\n';
        }
    }
    static _getPriority(item : _PriorityItem) : number {
        for(let i : number = 0; i < MemberSorter._PRIORITY_ITEMS.length; i++){
            if (op(Op.EQUALS,MemberSorter._PRIORITY_ITEMS[i],item)) {
                return i;
            }
        }
        return 0;
    }
    static _getSortedMembers(members : core.DartList<_MemberInfo>) : core.DartList<_MemberInfo> {
        let membersSorted : core.DartList<_MemberInfo> = new core.DartList.from(members);
        membersSorted.sort((o1 : _MemberInfo,o2 : _MemberInfo) =>  {
            let priority1 : number = MemberSorter._getPriority(o1.item);
            let priority2 : number = MemberSorter._getPriority(o2.item);
            if (priority1 == priority2) {
                if (op(Op.EQUALS,o1.item.kind,_MemberKind.CLASS_FIELD)) {
                    return o1.offset - o2.offset;
                }
                let name1 : string = new core.DartString(o1.name).toLowerCase();
                let name2 : string = new core.DartString(o2.name).toLowerCase();
                return new core.DartString(name1).compareTo(name2);
            }
            return priority1 - priority2;
        });
        return membersSorted;
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

    documentationText : string;

    annotationText : string;

    text : string;

    constructor(directive : any,priority : _DirectivePriority,uri : string,documentationText : string,annotationText : string,text : string) {
    }
    @defaultConstructor
    _DirectiveInfo(directive : any,priority : _DirectivePriority,uri : string,documentationText : string,annotationText : string,text : string) {
        this.directive = directive;
        this.priority = priority;
        this.uri = uri;
        this.documentationText = documentationText;
        this.annotationText = annotationText;
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

export namespace _MemberInfo {
    export type Constructors = '_MemberInfo';
    export type Interface = Omit<_MemberInfo, Constructors>;
}
@DartClass
export class _MemberInfo {
    item : _PriorityItem;

    name : string;

    offset : number;

    length : number;

    end : number;

    text : string;

    constructor(item : _PriorityItem,name : string,offset : number,length : number,text : string) {
    }
    @defaultConstructor
    _MemberInfo(item : _PriorityItem,name : string,offset : number,length : number,text : string) {
        this.offset = offset;
        this.length = length;
        this.end = offset + length;
        this.item = item;
        this.name = name;
        this.text = text;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `(priority=${this.item}; name=${this.name}; offset=${this.offset}; length=${this.length})`;
    }
}

export namespace _MemberKind {
    export type Constructors = '_MemberKind';
    export type Interface = Omit<_MemberKind, Constructors>;
}
@DartClass
export class _MemberKind {
    private static __$UNIT_FUNCTION_MAIN;
    static get UNIT_FUNCTION_MAIN() { 
        if (this.__$UNIT_FUNCTION_MAIN===undefined) {
            this.__$UNIT_FUNCTION_MAIN = new _MemberKind('UNIT_FUNCTION_MAIN',0);
        }
        return this.__$UNIT_FUNCTION_MAIN;
    }

    private static __$UNIT_ACCESSOR;
    static get UNIT_ACCESSOR() { 
        if (this.__$UNIT_ACCESSOR===undefined) {
            this.__$UNIT_ACCESSOR = new _MemberKind('UNIT_ACCESSOR',1);
        }
        return this.__$UNIT_ACCESSOR;
    }

    private static __$UNIT_FUNCTION;
    static get UNIT_FUNCTION() { 
        if (this.__$UNIT_FUNCTION===undefined) {
            this.__$UNIT_FUNCTION = new _MemberKind('UNIT_FUNCTION',2);
        }
        return this.__$UNIT_FUNCTION;
    }

    private static __$UNIT_FUNCTION_TYPE;
    static get UNIT_FUNCTION_TYPE() { 
        if (this.__$UNIT_FUNCTION_TYPE===undefined) {
            this.__$UNIT_FUNCTION_TYPE = new _MemberKind('UNIT_FUNCTION_TYPE',3);
        }
        return this.__$UNIT_FUNCTION_TYPE;
    }

    private static __$UNIT_CLASS;
    static get UNIT_CLASS() { 
        if (this.__$UNIT_CLASS===undefined) {
            this.__$UNIT_CLASS = new _MemberKind('UNIT_CLASS',4);
        }
        return this.__$UNIT_CLASS;
    }

    private static __$UNIT_VARIABLE_CONST;
    static get UNIT_VARIABLE_CONST() { 
        if (this.__$UNIT_VARIABLE_CONST===undefined) {
            this.__$UNIT_VARIABLE_CONST = new _MemberKind('UNIT_VARIABLE',5);
        }
        return this.__$UNIT_VARIABLE_CONST;
    }

    private static __$UNIT_VARIABLE;
    static get UNIT_VARIABLE() { 
        if (this.__$UNIT_VARIABLE===undefined) {
            this.__$UNIT_VARIABLE = new _MemberKind('UNIT_VARIABLE',6);
        }
        return this.__$UNIT_VARIABLE;
    }

    private static __$CLASS_ACCESSOR;
    static get CLASS_ACCESSOR() { 
        if (this.__$CLASS_ACCESSOR===undefined) {
            this.__$CLASS_ACCESSOR = new _MemberKind('CLASS_ACCESSOR',7);
        }
        return this.__$CLASS_ACCESSOR;
    }

    private static __$CLASS_CONSTRUCTOR;
    static get CLASS_CONSTRUCTOR() { 
        if (this.__$CLASS_CONSTRUCTOR===undefined) {
            this.__$CLASS_CONSTRUCTOR = new _MemberKind('CLASS_CONSTRUCTOR',8);
        }
        return this.__$CLASS_CONSTRUCTOR;
    }

    private static __$CLASS_FIELD;
    static get CLASS_FIELD() { 
        if (this.__$CLASS_FIELD===undefined) {
            this.__$CLASS_FIELD = new _MemberKind('CLASS_FIELD',9);
        }
        return this.__$CLASS_FIELD;
    }

    private static __$CLASS_METHOD;
    static get CLASS_METHOD() { 
        if (this.__$CLASS_METHOD===undefined) {
            this.__$CLASS_METHOD = new _MemberKind('CLASS_METHOD',10);
        }
        return this.__$CLASS_METHOD;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    _MemberKind(name : string,ordinal : number) {
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

export namespace _PriorityItem {
    export type Constructors = '_PriorityItem';
    export type Interface = Omit<_PriorityItem, Constructors>;
}
@DartClass
export class _PriorityItem {
    kind : _MemberKind;

    isPrivate : boolean;

    isStatic : boolean;

    constructor(isStatic : boolean,kind : _MemberKind,isPrivate : boolean) {
    }
    @defaultConstructor
    _PriorityItem(isStatic : boolean,kind : _MemberKind,isPrivate : boolean) {
        this.isStatic = isStatic;
        this.kind = kind;
        this.isPrivate = isPrivate;
    }
    @namedFactory
    static $forName(isStatic : boolean,name : string,kind : _MemberKind) : _PriorityItem {
        let isPrivate : boolean = Identifier.isPrivateName(name);
        return new _PriorityItem(isStatic,kind,isPrivate);
    }
    static forName : new(isStatic : boolean,name : string,kind : _MemberKind) => _PriorityItem;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](obj : core.DartObject) : boolean {
        let other : _PriorityItem = obj as _PriorityItem;
        if (op(Op.EQUALS,this.kind,_MemberKind.CLASS_FIELD)) {
            return op(Op.EQUALS,other.kind,this.kind) && other.isStatic == this.isStatic;
        }
        return op(Op.EQUALS,other.kind,this.kind) && other.isPrivate == this.isPrivate && other.isStatic == this.isStatic;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.kind.toString();
    }
}

export class properties {
}
