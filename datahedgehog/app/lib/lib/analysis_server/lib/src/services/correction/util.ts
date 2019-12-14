/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as math from "@dart2ts/dart/math";

export var getExpressionPrecedence : (node : any) => number = (node : any) : number =>  {
    if (is(node, any)) {
        return node.precedence;
    }
    return -1000;
};
export var allListsIdentical : (lists : core.DartList<core.DartList<any>>,position : number) => boolean = (lists : core.DartList<core.DartList<any>>,position : number) : boolean =>  {
    let element : core.DartObject = lists[0][position];
    for(let list of lists) {
        if (list[position] != element) {
            return false;
        }
    }
    return true;
};
export var climbPropertyAccess : (node : any) => any = (node : any) : any =>  {
    while (true){
        let parent : any = node.parent;
        if (is(parent, any) && op(Op.EQUALS,parent.identifier,node)) {
            node = parent;
            continue;
        }
        if (is(parent, any) && op(Op.EQUALS,parent.propertyName,node)) {
            node = parent;
            continue;
        }
        return node;
    }
};
export var getCodeEndOfLine : (code : string) => string = (code : string) : string =>  {
    if (new core.DartString(code).contains('\n')) {
        return '\n';
    }
    return '\n';
};
export var getCommentRanges : (unit : any) => core.DartList<any> = (unit : any) : core.DartList<any> =>  {
    let ranges : core.DartList<any> = new core.DartList.literal<any>();
    let token : any = unit.beginToken;
    while (token != null && token.type != TokenType.EOF){
        let commentToken : any = token.precedingComments;
        while (commentToken != null){
            ranges.add(range.token(commentToken));
            commentToken = commentToken.next;
        }
        token = token.next;
    }
    return ranges;
};
export var getCompilationUnitElement : (element : any) => any = (element : any) : any =>  {
    if (is(element, any)) {
        return element;
    }
    return element.getAncestor((e : any) =>  {
        return is(e, any);
    });
};
export var getDefaultValueCode : (type : any) => string = (type : any) : string =>  {
    if (type != null) {
        let typeName : string = type.displayName;
        if (typeName == "bool") {
            return "false";
        }
        if (typeName == "int") {
            return "0";
        }
        if (typeName == "double") {
            return "0.0";
        }
        if (typeName == "String") {
            return "''";
        }
    }
    return "null";
};
export var getElementKindName : (element : any) => string = (element : any) : string =>  {
    return element.kind.displayName;
};
export var getElementQualifiedName : (element : any) => string = (element : any) : string =>  {
    let kind : any = element.kind;
    if (op(Op.EQUALS,kind,ElementKind.CONSTRUCTOR) || op(Op.EQUALS,kind,ElementKind.FIELD) || op(Op.EQUALS,kind,ElementKind.METHOD)) {
        return `${element.enclosingElement.displayName}.${element.displayName}`;
    }else {
        return element.displayName;
    }
};
export var getEnclosingClassElement : (node : any) => any = (node : any) : any =>  {
    let enclosingClassNode : any = node.getAncestor((node : any) =>  {
        return is(node, any);
    });
    if (enclosingClassNode != null) {
        return enclosingClassNode.element;
    }
    return null;
};
export var getEnclosingClassOrUnitMember : (node : any) => any = (node : any) : any =>  {
    let member : any = node;
    while (node != null){
        if (is(node, any)) {
            return member;
        }
        if (is(node, any)) {
            return member;
        }
        member = node;
        node = node.parent;
    }
    return null;
};
export var getEnclosingExecutableElement : (node : any) => any = (node : any) : any =>  {
    while (node != null){
        if (is(node, any)) {
            return node.element;
        }
        if (is(node, any)) {
            return node.element;
        }
        if (is(node, any)) {
            return node.element;
        }
        node = node.parent;
    }
    return null;
};
export var getEnclosingExecutableNode : (node : any) => any = (node : any) : any =>  {
    while (node != null){
        if (is(node, any)) {
            return node;
        }
        if (is(node, any)) {
            return node;
        }
        if (is(node, any)) {
            return node;
        }
        node = node.parent;
    }
    return null;
};
export var getExpressionParentPrecedence : (node : any) => number = (node : any) : number =>  {
    let parent : any = node.parent;
    if (is(parent, any)) {
        return 0;
    }
    if (is(parent, any) && op(Op.EQUALS,parent.index,node)) {
        return 0;
    }
    return getExpressionPrecedence(parent);
};
export var addLibraryImports : (change : any,targetLibrary : any,libraries : core.DartSet<any>) => void = (change : any,targetLibrary : any,libraries : core.DartSet<any>) : void =>  {
    let libUtils : CorrectionUtils;
    try {
        let unitElement : any = targetLibrary.definingCompilationUnit;
        let unitAst : any = getParsedUnit(unitElement);
        libUtils = new CorrectionUtils(unitAst);
    } catch (__error__) {

        {
            let e = __error__;
            throw new CancelCorrectionException({
                exception : e});
        }
    }
    let eol : string = libUtils.endOfLine;
    let libraryDirective : any;
    let importDirectives : core.DartList<_ImportDirectiveInfo> = new core.DartList.literal<_ImportDirectiveInfo>();
    for(let directive of libUtils.unit.directives) {
        if (is(directive, any)) {
            libraryDirective = directive;
        }else if (is(directive, any)) {
            importDirectives.add(new _ImportDirectiveInfo(directive.uriContent,directive.offset,directive.end));
        }
    }
    let uriList : core.DartList<string> = libraries.map((library : any) =>  {
        return getLibrarySourceUri(targetLibrary,library);
    }).toList();
    uriList.sort((a : any,b : any) =>  {
        return new core.DartString(a).compareTo(b);
    });
    if (importDirectives.isNotEmpty) {
        let isFirstPackage : boolean = true;
        for(let importUri of uriList) {
            let inserted : boolean = false;
            let isPackage : boolean = new core.DartString(importUri).startsWith('package:');
            let isAfterDart : boolean = false;
            for(let existingImport of importDirectives) {
                if (new core.DartString(existingImport.uri).startsWith('dart:')) {
                    isAfterDart = true;
                }
                if (new core.DartString(existingImport.uri).startsWith('package:')) {
                    isFirstPackage = false;
                }
                if (new core.DartString(importUri).compareTo(existingImport.uri) < 0) {
                    let importCode : string = `import '${importUri}';${eol}`;
                    doSourceChange_addElementEdit(change,targetLibrary,new bare.createInstance(any,null,existingImport.offset,0,importCode));
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                let importCode : string = `${eol}import '${importUri}';`;
                if (isPackage && isFirstPackage && isAfterDart) {
                    importCode = eol + importCode;
                }
                doSourceChange_addElementEdit(change,targetLibrary,new bare.createInstance(any,null,importDirectives.last.end,0,importCode));
            }
            if (isPackage) {
                isFirstPackage = false;
            }
        }
        return;
    }
    if (libraryDirective != null) {
        let prefix : string = eol + eol;
        for(let importUri of uriList) {
            let importCode : string = `${prefix}import '${importUri}';`;
            prefix = eol;
            doSourceChange_addElementEdit(change,targetLibrary,new bare.createInstance(any,null,libraryDirective.end,0,importCode));
        }
        return;
    }
    {
        let desc : CorrectionUtils_InsertDesc = libUtils.getInsertDescTop();
        let offset : number = desc.offset;
        for(let i : number = 0; i < uriList.length; i++){
            let importUri : string = uriList[i];
            let importCode : string = `import '${importUri}';${eol}`;
            if (i == 0) {
                importCode = desc.prefix + importCode;
            }
            if (i == uriList.length - 1) {
                importCode = importCode + desc.suffix;
            }
            doSourceChange_addElementEdit(change,targetLibrary,new bare.createInstance(any,null,offset,0,importCode));
        }
    }
};
export var getImportNamespace : (imp : any) => core.DartMap<string,any> = (imp : any) : core.DartMap<string,any> =>  {
    let builder : any = new bare.createInstance(any,null);
    let namespace : any = builder.createImportNamespaceForDirective(imp);
    return namespace.definedNames;
};
export var getLibrarySourceUri : (from : any,what : any) => string = (from : any,what : any) : string =>  {
    let whatPath : string = what.fullName;
    let whatUri : lib3.Uri = what.uri;
    let whatUriScheme : string = whatUri.scheme;
    if (whatUriScheme != '' && whatUriScheme != 'file') {
        return whatUri.toString();
    }
    let fromFolder : string = lib4.dirname(from.source.fullName);
    let relativeFile : string = lib4.relative(whatPath,{
        from : fromFolder});
    return lib4.split(relativeFile).join('/');
};
export var getLinePrefix : (line : string) => string = (line : string) : string =>  {
    let index : number = 0;
    while (index < new core.DartString(line).length){
        let c : number = new core.DartString(line).codeUnitAt(index);
        if (!isWhitespace(c)) {
            break;
        }
        index++;
    }
    return new core.DartString(line).substring(0,index);
};
export var getLocalOrParameterVariableElement : (node : any) => any = (node : any) : any =>  {
    let element : any = node.staticElement;
    if (is(element, any)) {
        return element;
    }
    if (is(element, any)) {
        return element;
    }
    return null;
};
export var getLocalVariableElement : (node : any) => any = (node : any) : any =>  {
    let element : any = node.staticElement;
    if (is(element, any)) {
        return element;
    }
    return null;
};
export var getNearestCommonAncestor : (nodes : core.DartList<any>) => any = (nodes : core.DartList<any>) : any =>  {
    if (nodes.isEmpty) {
        return null;
    }
    let parents : core.DartList<core.DartList<any>> = new core.DartList.literal();
    for(let node of nodes) {
        parents.add(getParents(node));
    }
    let minLength : number = 1 << 20;
    for(let parentList of parents) {
        minLength = math.min(minLength,parentList.length);
    }
    let i : number = 0;
    for(; i < minLength; i++){
        if (!allListsIdentical(parents,i)) {
            break;
        }
    }
    return parents[0][i - 1];
};
export var getNodeQualifier : (node : any) => any = (node : any) : any =>  {
    let parent : any = node.parent;
    if (is(parent, any) && core.identical(parent.methodName,node)) {
        return parent.target;
    }
    if (is(parent, any) && core.identical(parent.propertyName,node)) {
        return parent.target;
    }
    if (is(parent, any) && core.identical(parent.identifier,node)) {
        return parent.prefix;
    }
    return null;
};
export var getParameterElement : (node : any) => any = (node : any) : any =>  {
    let element : any = node.staticElement;
    if (is(element, any)) {
        return element;
    }
    return null;
};
export var getParents : (node : any) => core.DartList<any> = (node : any) : core.DartList<any> =>  {
    let numParents : number = 0;
    {
        let current : any = node.parent;
        while (current != null){
            numParents++;
            current = current.parent;
        }
    }
    let parents : core.DartList<any> = new core.DartList<any>(numParents);
    let current : any = node.parent;
    let index : number = numParents;
    while (current != null){
        parents[--index] = current;
        current = current.parent;
    }
    return parents;
};
export var getParsedClassElementNode : (classElement : any) => any = (classElement : any) : any =>  {
    let unitElement : any = getCompilationUnitElement(classElement);
    let unit : any = getParsedUnit(unitElement);
    let offset : number = classElement.nameOffset;
    let classNameNode : any = new bare.createInstance(any,null,offset).searchWithin(unit);
    if (classElement.isEnum) {
        return classNameNode.getAncestor((node : any) =>  {
            return is(node, any);
        });
    }else {
        return classNameNode.getAncestor((node : any) =>  {
            return is(node, any) || is(node, any);
        });
    }
};
export var getParsedUnit : (unitElement : any) => any = (unitElement : any) : any =>  {
    let context : any = unitElement.context;
    let source : any = unitElement.source;
    let unit : any = context.parseCompilationUnit(source);
    if (op(Op.EQUALS,unit.element,null)) {
        unit.element = unitElement;
    }
    return unit;
};
export var getPropertyAccessorElement : (node : any) => any = (node : any) : any =>  {
    let element : any = node.staticElement;
    if (is(element, any)) {
        return element;
    }
    return null;
};
export var getQualifiedPropertyTarget : (node : any) => any = (node : any) : any =>  {
    let parent : any = node.parent;
    if (is(parent, any)) {
        let prefixed : any = parent;
        if (op(Op.EQUALS,prefixed.identifier,node)) {
            return parent.prefix;
        }
    }
    if (is(parent, any)) {
        let access : any = parent;
        if (op(Op.EQUALS,access.propertyName,node)) {
            return access.realTarget;
        }
    }
    return null;
};
export var stepUpNamedExpression : (expression : any) => any = (expression : any) : any =>  {
    if (expression != null) {
        let parent : any = expression.parent;
        if (is(parent, any) && op(Op.EQUALS,parent.expression,expression)) {
            return parent;
        }
    }
    return expression;
};
export var getSourceContent : (context : any,source : any) => string = (context : any,source : any) : string =>  {
    return context.getContents(source).data;
};
export var getStatements : (statement : any) => core.DartList<any> = (statement : any) : core.DartList<any> =>  {
    if (is(statement, any)) {
        return statement.statements;
    }
    return new core.DartList.literal(statement);
};
export var hasDisplayName : (element : any,name : string) => boolean = (element : any,name : string) : boolean =>  {
    if (op(Op.EQUALS,element,null)) {
        return false;
    }
    return op(Op.EQUALS,element.displayName,name);
};
export var isFieldAccessorElement : (accessor : any) => boolean = (accessor : any) : boolean =>  {
    return accessor != null && is(accessor.variable, any);
};
export var isLeftHandOfAssignment : (node : any) => boolean = (node : any) : boolean =>  {
    if (node.inSetterContext()) {
        return true;
    }
    return is(node.parent, any) && op(Op.EQUALS,(node.parent as any).name,node);
};
export var isNamedExpressionName : (node : any) => boolean = (node : any) : boolean =>  {
    let parent : any = node.parent;
    if (is(parent, any)) {
        let label : any = parent;
        if (core.identical(label.label,node)) {
            let parent2 : any = label.parent;
            if (is(parent2, any)) {
                return core.identical(parent2.name,label);
            }
        }
    }
    return false;
};
export var getSingleStatement : (statement : any) => any = (statement : any) : any =>  {
    if (is(statement, any)) {
        let blockStatements : core.DartList<any> = statement.statements;
        if (blockStatements.length != 1) {
            return null;
        }
        return blockStatements[0];
    }
    return statement;
};
export namespace CancelCorrectionException {
    export type Constructors = 'CancelCorrectionException';
    export type Interface = Omit<CancelCorrectionException, Constructors>;
}
@DartClass
export class CancelCorrectionException {
    exception : core.DartObject;

    constructor(_namedArguments? : {exception? : core.DartObject}) {
    }
    @defaultConstructor
    CancelCorrectionException(_namedArguments? : {exception? : core.DartObject}) {
        let {exception} = Object.assign({
        }, _namedArguments );
        this.exception = exception;
    }
}

export namespace ClassMemberLocation {
    export type Constructors = 'ClassMemberLocation';
    export type Interface = Omit<ClassMemberLocation, Constructors>;
}
@DartClass
export class ClassMemberLocation {
    prefix : string;

    offset : number;

    suffix : string;

    constructor(prefix : string,offset : number,suffix : string) {
    }
    @defaultConstructor
    ClassMemberLocation(prefix : string,offset : number,suffix : string) {
        this.prefix = prefix;
        this.offset = offset;
        this.suffix = suffix;
    }
}

export namespace CorrectionUtils {
    export type Constructors = 'CorrectionUtils';
    export type Interface = Omit<CorrectionUtils, Constructors>;
}
@DartClass
export class CorrectionUtils {
    unit : any;

    targetClassElement : any;

    targetExecutableElement : any;

    _library : any;

    _buffer : string;

    _endOfLine : string;

    constructor(unit : any) {
    }
    @defaultConstructor
    CorrectionUtils(unit : any) {
        this.unit = unit;
        let unitElement : any = this.unit.element;
        let context : any = unitElement.context;
        if (op(Op.EQUALS,context,null)) {
            throw new CancelCorrectionException();
        }
        this._library = unitElement.library;
        this._buffer = context.getContents(unitElement.source).data;
    }
    get endOfLine() : string {
        if (this._endOfLine == null) {
            if (new core.DartString(this._buffer).contains("\n")) {
                this._endOfLine = "\n";
            }else {
                this._endOfLine = "\n";
            }
        }
        return this._endOfLine;
    }
    createIndentEdit(range : any,oldIndent : string,newIndent : string) : any {
        let newSource : string = this.replaceSourceRangeIndent(range,oldIndent,newIndent);
        return new bare.createInstance(any,null,range.offset,range.length,newSource);
    }
    findNode(offset : number) : any {
        return new bare.createInstance(any,null,offset).searchWithin(this.unit);
    }
    findPossibleLocalVariableConflicts(offset : number) : core.DartSet<string> {
        let conflicts : core.DartSet<string> = new core.DartSet<string>();
        let enclosingNode : any = this.findNode(offset);
        let enclosingBlock : any = enclosingNode.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (enclosingBlock != null) {
            let visitor : _CollectReferencedUnprefixedNames = new _CollectReferencedUnprefixedNames();
            enclosingBlock.accept(visitor);
            return visitor.names;
        }
        return conflicts;
    }
    getExpressionTypeSource(expression : any,librariesToImport : core.DartSet<any>) : string {
        if (op(Op.EQUALS,expression,null)) {
            return null;
        }
        let type : any = expression.bestType;
        if (type.isDynamic) {
            return null;
        }
        return this.getTypeSource(type,librariesToImport);
    }
    getIndent(level : number) : string {
        return repeat('  ',level);
    }
    getInsertDescImport() : CorrectionUtils_InsertDesc {
        let prevDirective : any = null;
        for(let directive of this.unit.directives) {
            if (is(directive, any) || is(directive, any) || is(directive, any)) {
                prevDirective = directive;
            }
        }
        if (prevDirective != null) {
            let result : CorrectionUtils_InsertDesc = new CorrectionUtils_InsertDesc();
            result.offset = prevDirective.end;
            let eol : string = this.endOfLine;
            if (is(prevDirective, any)) {
                result.prefix = `${eol}${eol}`;
            }else {
                result.prefix = eol;
            }
            return result;
        }
        return this.getInsertDescTop();
    }
    getInsertDescPart() : CorrectionUtils_InsertDesc {
        let prevDirective : any = null;
        for(let directive of this.unit.directives) {
            prevDirective = directive;
        }
        if (prevDirective != null) {
            let result : CorrectionUtils_InsertDesc = new CorrectionUtils_InsertDesc();
            result.offset = prevDirective.end;
            let eol : string = this.endOfLine;
            if (is(prevDirective, any)) {
                result.prefix = eol;
            }else {
                result.prefix = `${eol}${eol}`;
            }
            return result;
        }
        return this.getInsertDescTop();
    }
    getInsertDescTop() : CorrectionUtils_InsertDesc {
        let offset : number = 0;
        let insertEmptyLineBefore : boolean = false;
        let insertEmptyLineAfter : boolean = false;
        let source : string = this._buffer;
        if (offset < new core.DartString(source).length - 2) {
            let linePrefix : string = this.getText(offset,2);
            if (linePrefix == "#!") {
                insertEmptyLineBefore = true;
                offset = this.getLineNext(offset);
                let emptyOffset : number = offset;
                while (emptyOffset < new core.DartString(source).length - 2){
                    let nextLineOffset : number = this.getLineNext(emptyOffset);
                    let line : string = new core.DartString(source).substring(emptyOffset,nextLineOffset);
                    if (new core.DartString(new core.DartString(line).trim()).isEmpty) {
                        emptyOffset = nextLineOffset;
                        continue;
                    }else if (new core.DartString(line).startsWith("//")) {
                        offset = emptyOffset;
                        break;
                    }else {
                        break;
                    }
                }
            }
        }
        while (offset < new core.DartString(source).length - 2){
            let linePrefix : string = this.getText(offset,2);
            if (linePrefix == "//") {
                insertEmptyLineBefore = true;
                offset = this.getLineNext(offset);
            }else {
                break;
            }
        }
        let nextLineOffset : number = this.getLineNext(offset);
        let insertLine : string = new core.DartString(source).substring(offset,nextLineOffset);
        if (!new core.DartString(new core.DartString(insertLine).trim()).isEmpty) {
            insertEmptyLineAfter = true;
        }
        let desc : CorrectionUtils_InsertDesc = new CorrectionUtils_InsertDesc();
        desc.offset = offset;
        if (insertEmptyLineBefore) {
            desc.prefix = this.endOfLine;
        }
        if (insertEmptyLineAfter) {
            desc.suffix = this.endOfLine;
        }
        return desc;
    }
    getLineContentEnd(index : number) : number {
        let length : number = new core.DartString(this._buffer).length;
        while (index < length){
            let c : number = new core.DartString(this._buffer).codeUnitAt(index);
            if (!isWhitespace(c) || c == 13 || c == 10) {
                break;
            }
            index++;
        }
        if (index < length && new core.DartString(this._buffer).codeUnitAt(index) == 13) {
            index++;
        }
        if (index < length && new core.DartString(this._buffer).codeUnitAt(index) == 10) {
            index++;
        }
        return index;
    }
    getLineContentStart(index : number) : number {
        while (index > 0){
            let c : number = new core.DartString(this._buffer).codeUnitAt(index - 1);
            if (!isSpace(c)) {
                break;
            }
            index--;
        }
        return index;
    }
    getLineNext(index : number) : number {
        let length : number = new core.DartString(this._buffer).length;
        while (index < length){
            let c : number = new core.DartString(this._buffer).codeUnitAt(index);
            if (c == 13 || c == 10) {
                break;
            }
            index++;
        }
        if (index < length && new core.DartString(this._buffer).codeUnitAt(index) == 13) {
            index++;
        }
        if (index < length && new core.DartString(this._buffer).codeUnitAt(index) == 10) {
            index++;
        }
        return index;
    }
    getLinePrefix(index : number) : string {
        let lineStart : number = this.getLineThis(index);
        let length : number = new core.DartString(this._buffer).length;
        let lineNonWhitespace : number = lineStart;
        while (lineNonWhitespace < length){
            let c : number = new core.DartString(this._buffer).codeUnitAt(lineNonWhitespace);
            if (c == 13 || c == 10) {
                break;
            }
            if (!isWhitespace(c)) {
                break;
            }
            lineNonWhitespace++;
        }
        return this.getText(lineStart,lineNonWhitespace - lineStart);
    }
    getLinesRange(sourceRange : any,_namedArguments? : {skipLeadingEmptyLines? : boolean}) : any {
        let {skipLeadingEmptyLines} = Object.assign({
            "skipLeadingEmptyLines" : false}, _namedArguments );
        let startOffset : number = sourceRange.offset;
        let startLineOffset : number = this.getLineContentStart(startOffset);
        if (skipLeadingEmptyLines) {
            startLineOffset = this.skipEmptyLinesLeft(startLineOffset);
        }
        let endOffset : number = sourceRange.end;
        let afterEndLineOffset : number = this.getLineContentEnd(endOffset);
        return range.startOffsetEndOffset(startLineOffset,afterEndLineOffset);
    }
    getLinesRangeStatements(statements : core.DartList<any>) : any {
        return this.getLinesRange(range.nodes(statements));
    }
    getLineThis(index : number) : number {
        while (index > 0){
            let c : number = new core.DartString(this._buffer).codeUnitAt(index - 1);
            if (c == 13 || c == 10) {
                break;
            }
            index--;
        }
        return index;
    }
    getNodePrefix(node : any) : string {
        let offset : number = node.offset;
        if (is(node, any)) {
            return this.getLinePrefix(offset);
        }
        return this.getPrefix(offset);
    }
    getNodeText(node : any) : string {
        return this.getText(node.offset,node.length);
    }
    getParameterSource(type : any,name : string,librariesToImport : core.DartSet<any>) : string {
        if (op(Op.EQUALS,type,null) || type.isDynamic) {
            return name;
        }
        if (is(type, any) && type.element.isSynthetic) {
            let functionType : any = type;
            let sb : core.DartStringBuffer = new core.DartStringBuffer();
            let returnType : any = functionType.returnType;
            if (returnType != null && !returnType.isDynamic) {
                let returnTypeSource : string = this.getTypeSource(returnType,librariesToImport);
                sb.write(returnTypeSource);
                sb.write(' ');
            }
            sb.write(name);
            sb.write('(');
            let fParameters : core.DartList<any> = functionType.parameters;
            for(let i : number = 0; i < fParameters.length; i++){
                let fParameter : any = fParameters[i];
                if (i != 0) {
                    sb.write(", ");
                }
                sb.write(this.getParameterSource(fParameter.type,fParameter.name,librariesToImport));
            }
            sb.write(')');
            return sb.toString();
        }
        let typeSource : string = this.getTypeSource(type,librariesToImport);
        return `${typeSource} ${name}`;
    }
    getPrefix(endIndex : number) : string {
        let startIndex : number = this.getLineContentStart(endIndex);
        return new core.DartString(this._buffer).substring(startIndex,endIndex);
    }
    getRangeText(range : any) : string {
        return this.getText(range.offset,range.length);
    }
    getText(offset : number,length : number) : string {
        return new core.DartString(this._buffer).substring(offset,offset + length);
    }
    getTypeSource(type : any,librariesToImport : core.DartSet<any>,_namedArguments? : {parametersBuffer? : core.DartStringBuffer}) : string {
        let {parametersBuffer} = Object.assign({
        }, _namedArguments );
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        if (!this._isTypeVisible(type)) {
            return 'dynamic';
        }
        if (is(type, any) && isNot(type.element, any)) {
            if (op(Op.EQUALS,parametersBuffer,null)) {
                return "Function";
            }
            parametersBuffer.write('(');
            for(let parameter of type.parameters) {
                let parameterType : string = this.getTypeSource(parameter.type,librariesToImport);
                if (parametersBuffer.length != 1) {
                    parametersBuffer.write(', ');
                }
                parametersBuffer.write(parameterType);
                parametersBuffer.write(' ');
                parametersBuffer.write(parameter.name);
            }
            parametersBuffer.write(')');
            return this.getTypeSource(type.returnType,librariesToImport);
        }
        if (type.isBottom || type.isDartCoreNull) {
            return 'dynamic';
        }
        let element : any = type.element;
        if (op(Op.EQUALS,element,null)) {
            let source : string = type.toString();
            source = new core.DartString(source).replaceAll('<dynamic>','');
            source = new core.DartString(source).replaceAll('<dynamic, dynamic>','');
            return source;
        }
        let library : any = element.library;
        if (library != null && library != this._library) {
            if (element.isPrivate) {
                return null;
            }
            let importElement : any = this._getImportElement(element);
            if (importElement != null) {
                if (importElement.prefix != null) {
                    sb.write(importElement.prefix.displayName);
                    sb.write(".");
                }
            }else {
                librariesToImport.add(library.source);
            }
        }
        let name : string = element.displayName;
        sb.write(name);
        if (is(type, any)) {
            let arguments : core.DartList<any> = type.typeArguments;
            let hasArguments : boolean = false;
            let allArgumentsVisible : boolean = true;
            for(let argument of arguments) {
                hasArguments = hasArguments || !argument.isDynamic;
                allArgumentsVisible = allArgumentsVisible && this._isTypeVisible(argument);
            }
            if (hasArguments && allArgumentsVisible) {
                sb.write("<");
                for(let i : number = 0; i < arguments.length; i++){
                    let argument : any = arguments[i];
                    if (i != 0) {
                        sb.write(", ");
                    }
                    let argumentSrc : string = this.getTypeSource(argument,librariesToImport);
                    if (argumentSrc != null) {
                        sb.write(argumentSrc);
                    }else {
                        return null;
                    }
                }
                sb.write(">");
            }
        }
        return sb.toString();
    }
    indentSourceLeftRight(source : string,right : boolean) : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        let indent : string = this.getIndent(1);
        let eol : string = this.endOfLine;
        let lines : core.DartList<string> = new core.DartString(source).split(eol);
        for(let i : number = 0; i < lines.length; i++){
            let line : string = lines[i];
            if (i == lines.length - 1 && isEmpty(line)) {
                break;
            }
            if (right) {
                line = `${indent}${line}`;
            }else {
                line = removeStart(line,indent);
            }
            sb.write(line);
            sb.write(eol);
        }
        return sb.toString();
    }
    invertCondition(expression : any) : string {
        return this._invertCondition0(expression)._source;
    }
    isClassWithEmptyBody(classDeclaration : any) : boolean {
        return this.getLineThis(classDeclaration.leftBracket.offset) == this.getLineThis(classDeclaration.rightBracket.offset);
    }
    isJustWhitespaceOrComment(range : any) : boolean {
        let trimmedText : string = new core.DartString(this.getRangeText(range)).trim();
        if (new core.DartString(trimmedText).isEmpty) {
            return true;
        }
        return TokenUtils.getTokens(trimmedText).isEmpty;
    }
    prepareNewClassMemberLocation(classDeclaration : any,shouldSkip : (existingMember : any) => boolean) : ClassMemberLocation {
        let indent : string = this.getIndent(1);
        let targetMember : any = null;
        let members : core.DartList<any> = classDeclaration.members;
        for(let member of members) {
            if (shouldSkip(member)) {
                targetMember = member;
            }else {
                break;
            }
        }
        if (targetMember != null) {
            return new ClassMemberLocation(this.endOfLine + this.endOfLine + indent,targetMember.end,'');
        }
        let suffix : string = members.isNotEmpty || this.isClassWithEmptyBody(classDeclaration) ? this.endOfLine : '';
        return new ClassMemberLocation(this.endOfLine + indent,classDeclaration.leftBracket.end,suffix);
    }
    prepareNewConstructorLocation(classDeclaration : any) : ClassMemberLocation {
        return this.prepareNewClassMemberLocation(classDeclaration,(member : any) =>  {
            return is(member, any) || is(member, any);
        });
    }
    prepareNewFieldLocation(classDeclaration : any) : ClassMemberLocation {
        return this.prepareNewClassMemberLocation(classDeclaration,(member : any) =>  {
            return is(member, any);
        });
    }
    prepareNewGetterLocation(classDeclaration : any) : ClassMemberLocation {
        return this.prepareNewClassMemberLocation(classDeclaration,(member : any) =>  {
            return is(member, any) || is(member, any) || is(member, any) && member.isGetter;
        });
    }
    prepareNewMethodLocation(classDeclaration : any) : ClassMemberLocation {
        return this.prepareNewClassMemberLocation(classDeclaration,(member : any) =>  {
            return is(member, any) || is(member, any) || is(member, any);
        });
    }
    replaceSourceIndent(source : string,oldIndent : string,newIndent : string) : string {
        let lineRanges : core.DartList<any> = new core.DartList.literal();
        {
            let tokens : core.DartList<any> = TokenUtils.getTokens(source);
            for(let token of tokens) {
                if (op(Op.EQUALS,token.type,TokenType.STRING)) {
                    lineRanges.add(range.token(token));
                }
                token = token.next;
            }
        }
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        let eol : string = this.endOfLine;
        let lines : core.DartList<string> = new core.DartString(source).split(eol);
        let lineOffset : number = 0;
        for(let i : number = 0; i < lines.length; i++){
            let line : string = lines[i];
            if (i == lines.length - 1 && isEmpty(line)) {
                break;
            }
            let inString : boolean = false;
            for(let lineRange of lineRanges) {
                if (lineOffset > lineRange.offset && lineOffset < lineRange.end) {
                    inString = true;
                }
                if (lineOffset > lineRange.end) {
                    break;
                }
            }
            lineOffset += new core.DartString(line).length + new core.DartString(eol).length;
            if (!inString) {
                line = `${newIndent}${removeStart(line,oldIndent)}`;
            }
            sb.write(line);
            sb.write(eol);
        }
        return sb.toString();
    }
    replaceSourceRangeIndent(range : any,oldIndent : string,newIndent : string) : string {
        let oldSource : string = this.getRangeText(range);
        return this.replaceSourceIndent(oldSource,oldIndent,newIndent);
    }
    selectionIncludesNonWhitespaceOutsideNode(selection : any,node : any) : boolean {
        return this._selectionIncludesNonWhitespaceOutsideRange(selection,range.node(node));
    }
    skipEmptyLinesLeft(index : number) : number {
        let lastLine : number = index;
        while (index > 0){
            let c : number = new core.DartString(this._buffer).codeUnitAt(index - 1);
            if (!isWhitespace(c)) {
                return lastLine;
            }
            if (isEOL(c)) {
                lastLine = index;
            }
            index--;
        }
        return 0;
    }
    _getImportElement(element : any) : any {
        for(let imp of this._library.imports) {
            let definedNames : core.DartMap<string,any> = getImportNamespace(imp);
            if (definedNames.containsValue(element)) {
                return imp;
            }
        }
        return null;
    }
    _invertCondition0(expression : any) : _InvertedCondition {
        if (is(expression, any)) {
            if (expression.value) {
                return _InvertedCondition._simple("false");
            }else {
                return _InvertedCondition._simple("true");
            }
        }else if (is(expression, any)) {
            let operator : any = expression.operator.type;
            let le : any = expression.leftOperand;
            let re : any = expression.rightOperand;
            let ls : _InvertedCondition = this._invertCondition0(le);
            let rs : _InvertedCondition = this._invertCondition0(re);
            if (op(Op.EQUALS,operator,TokenType.LT)) {
                return _InvertedCondition._binary2(ls," >= ",rs);
            }
            if (op(Op.EQUALS,operator,TokenType.GT)) {
                return _InvertedCondition._binary2(ls," <= ",rs);
            }
            if (op(Op.EQUALS,operator,TokenType.LT_EQ)) {
                return _InvertedCondition._binary2(ls," > ",rs);
            }
            if (op(Op.EQUALS,operator,TokenType.GT_EQ)) {
                return _InvertedCondition._binary2(ls," < ",rs);
            }
            if (op(Op.EQUALS,operator,TokenType.EQ_EQ)) {
                return _InvertedCondition._binary2(ls," != ",rs);
            }
            if (op(Op.EQUALS,operator,TokenType.BANG_EQ)) {
                return _InvertedCondition._binary2(ls," == ",rs);
            }
            if (op(Op.EQUALS,operator,TokenType.AMPERSAND_AMPERSAND)) {
                return _InvertedCondition._binary(TokenType.BAR_BAR.precedence,ls," || ",rs);
            }
            if (op(Op.EQUALS,operator,TokenType.BAR_BAR)) {
                return _InvertedCondition._binary(TokenType.AMPERSAND_AMPERSAND.precedence,ls," && ",rs);
            }
        }else if (is(expression, any)) {
            let expressionSource : string = this.getNodeText(expression.expression);
            let typeSource : string = this.getNodeText(expression.type);
            if (op(Op.EQUALS,expression.notOperator,null)) {
                return _InvertedCondition._simple(`${expressionSource} is! ${typeSource}`);
            }else {
                return _InvertedCondition._simple(`${expressionSource} is ${typeSource}`);
            }
        }else if (is(expression, any)) {
            let operator : any = expression.operator.type;
            if (op(Op.EQUALS,operator,TokenType.BANG)) {
                let operand : any = expression.operand.unParenthesized;
                return _InvertedCondition._simple(this.getNodeText(operand));
            }
        }else if (is(expression, any)) {
            return this._invertCondition0(expression.unParenthesized);
        }
        let type : any = expression.bestType;
        if (op(Op.EQUALS,type.displayName,"bool")) {
            return _InvertedCondition._simple(`!${this.getNodeText(expression)}`);
        }
        return _InvertedCondition._simple(this.getNodeText(expression));
    }
    _isTypeVisible(type : any) : boolean {
        if (is(type, any)) {
            let parameterElement : any = type.element;
            let parameterClassElement : any = parameterElement.enclosingElement;
            return core.identical(parameterClassElement,this.targetExecutableElement) || core.identical(parameterClassElement,this.targetClassElement);
        }
        return true;
    }
    _selectionIncludesNonWhitespaceOutsideRange(selection : any,sourceRange : any) : boolean {
        if (!selection.covers(sourceRange)) {
            return false;
        }
        if (!this.isJustWhitespaceOrComment(range.startOffsetEndOffset(selection.offset,sourceRange.offset))) {
            return true;
        }
        if (!this.isJustWhitespaceOrComment(range.startOffsetEndOffset(sourceRange.end,selection.end))) {
            return true;
        }
        return false;
    }
}

export namespace CorrectionUtils_InsertDesc {
    export type Constructors = 'CorrectionUtils_InsertDesc';
    export type Interface = Omit<CorrectionUtils_InsertDesc, Constructors>;
}
@DartClass
export class CorrectionUtils_InsertDesc {
    offset : number;

    prefix : string;

    suffix : string;

    constructor() {
    }
    @defaultConstructor
    CorrectionUtils_InsertDesc() {
        this.offset = 0;
        this.prefix = "";
        this.suffix = "";
    }
}

export namespace TokenUtils {
    export type Constructors = 'TokenUtils';
    export type Interface = Omit<TokenUtils, Constructors>;
}
@DartClass
export class TokenUtils {
    static findKeywordToken(tokens : core.DartList<any>,keyword : any) : any {
        for(let token of tokens) {
            if (op(Op.EQUALS,token.keyword,keyword)) {
                return token;
            }
        }
        return null;
    }
    static findToken(tokens : core.DartList<any>,type : any) : any {
        for(let token of tokens) {
            if (op(Op.EQUALS,token.type,type)) {
                return token;
            }
        }
        return null;
    }
    static getTokens(s : string) : core.DartList<any> {
        try {
            let tokens : core.DartList<any> = new core.DartList.literal();
            let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,s),null);
            let token : any = scanner.tokenize();
            while (token.type != TokenType.EOF){
                tokens.add(token);
                token = token.next;
            }
            return tokens;
        } catch (__error__) {

            {
                let e = __error__;
                return new core.DartList.literal();
            }
        }
    }
    static hasOnly(tokens : core.DartList<any>,type : any) : boolean {
        return tokens.length == 1 && op(Op.EQUALS,tokens[0].type,type);
    }
    constructor() {
    }
    @defaultConstructor
    TokenUtils() {
    }
}

export namespace _CollectReferencedUnprefixedNames {
    export type Constructors = '_CollectReferencedUnprefixedNames';
    export type Interface = Omit<_CollectReferencedUnprefixedNames, Constructors>;
}
@DartClass
export class _CollectReferencedUnprefixedNames extends any {
    names : core.DartSet<string>;

    visitSimpleIdentifier(node : any) : void {
        if (!_CollectReferencedUnprefixedNames._isPrefixed(node)) {
            this.names.add(node.name);
        }
    }
    static _isPrefixed(node : any) : boolean {
        let parent : any = node.parent;
        return is(parent, any) && op(Op.EQUALS,parent.name,node) || is(parent, any) && op(Op.EQUALS,parent.methodName,node) && parent.realTarget != null || is(parent, any) && op(Op.EQUALS,parent.identifier,node) || is(parent, any) && op(Op.EQUALS,parent.target,node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CollectReferencedUnprefixedNames() {
        this.names = new core.DartSet<string>();
    }
}

export namespace _ImportDirectiveInfo {
    export type Constructors = '_ImportDirectiveInfo';
    export type Interface = Omit<_ImportDirectiveInfo, Constructors>;
}
@DartClass
export class _ImportDirectiveInfo {
    uri : string;

    offset : number;

    end : number;

    constructor(uri : string,offset : number,end : number) {
    }
    @defaultConstructor
    _ImportDirectiveInfo(uri : string,offset : number,end : number) {
        this.uri = uri;
        this.offset = offset;
        this.end = end;
    }
}

export namespace _InvertedCondition {
    export type Constructors = '_InvertedCondition';
    export type Interface = Omit<_InvertedCondition, Constructors>;
}
@DartClass
export class _InvertedCondition {
    _precedence : number;

    _source : string;

    constructor(_precedence : number,_source : string) {
    }
    @defaultConstructor
    _InvertedCondition(_precedence : number,_source : string) {
        this._precedence = _precedence;
        this._source = _source;
    }
    static _binary(precedence : number,left : _InvertedCondition,operation : string,right : _InvertedCondition) : _InvertedCondition {
        let src : string = _InvertedCondition._parenthesizeIfRequired(left,precedence) + operation + _InvertedCondition._parenthesizeIfRequired(right,precedence);
        return new _InvertedCondition(precedence,src);
    }
    static _binary2(left : _InvertedCondition,operation : string,right : _InvertedCondition) : _InvertedCondition {
        return new _InvertedCondition(1 << 20,`${left._source}${operation}${right._source}`);
    }
    static _parenthesizeIfRequired(expr : _InvertedCondition,newOperatorPrecedence : number) : string {
        if (expr._precedence < newOperatorPrecedence) {
            return `(${expr._source})`;
        }
        return expr._source;
    }
    static _simple(source : string) : _InvertedCondition {
        return new _InvertedCondition(2147483647,source);
    }
}

export class properties {
}
