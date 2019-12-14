/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/extract_local.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ExtractLocalRefactoringImpl {
    export type Constructors = 'ExtractLocalRefactoringImpl';
    export type Interface = Omit<ExtractLocalRefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ExtractLocalRefactoringImpl extends any implements any.Interface {
    unit : any;

    selectionOffset : number;

    selectionLength : number;

    unitElement : any;

    file : string;

    selectionRange : any;

    utils : any;

    name : string;

    extractAll : boolean;

    coveringExpressionOffsets : core.DartList<number>;

    coveringExpressionLengths : core.DartList<number>;

    names : core.DartList<string>;

    offsets : core.DartList<number>;

    lengths : core.DartList<number>;

    rootExpression : any;

    singleExpression : any;

    wholeStatementExpression : boolean;

    stringLiteralPart : string;

    occurrences : core.DartList<any>;

    elementIds : core.DartMap<any,number>;

    excludedVariableNames : core.DartSet<string>;

    constructor(unit : any,selectionOffset : number,selectionLength : number) {
    }
    @defaultConstructor
    ExtractLocalRefactoringImpl(unit : any,selectionOffset : number,selectionLength : number) {
        this.extractAll = true;
        this.coveringExpressionOffsets = new core.DartList.literal<number>();
        this.coveringExpressionLengths = new core.DartList.literal<number>();
        this.names = new core.DartList.literal<string>();
        this.offsets = new core.DartList.literal<number>();
        this.lengths = new core.DartList.literal<number>();
        this.wholeStatementExpression = false;
        this.occurrences = new core.DartList.literal<any>();
        this.elementIds = new core.DartMap.literal([
        ]);
        this.excludedVariableNames = new core.DartSet<string>();
        this.unit = unit;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
        this.unitElement = this.unit.element;
        this.selectionRange = new bare.createInstance(any,null,this.selectionOffset,this.selectionLength);
        this.utils = new bare.createInstance(any,null,this.unit);
        this.file = this.unitElement.source.fullName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        return 'Extract Local Variable';
    }
    get _declarationKeyword() : string {
        if (this._isPartOfConstantExpression(this.rootExpression)) {
            return "const";
        }else {
            return "var";
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> {
        let result : any = new bare.createInstance(any,null);
        result.addStatus(this.checkName());
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkInitialConditions() : async.Future<any> {
        let result : any = new bare.createInstance(any,null);
        result.addStatus(this._checkSelection());
        if (result.hasFatalError) {
            return new async.Future.value(result);
        }
        this._prepareOccurrences();
        this._prepareOffsetsLengths();
        this.excludedVariableNames = this.utils.findPossibleLocalVariableConflicts(this.selectionOffset);
        this._prepareNames();
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkName() : any {
        let result : any = new bare.createInstance(any,null);
        result.addStatus(validateVariableName(this.name));
        if (this.excludedVariableNames.contains(this.name)) {
            result.addError(format("The name '{0}' is already used in the scope.",this.name));
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChange() : async.Future<any> {
        let change : any = new bare.createInstance(any,null,this.refactoringName);
        let occurrences : core.DartList<any>;
        if (this.extractAll) {
            occurrences = this.occurrences;
        }else {
            occurrences = new core.DartList.literal(this.selectionRange);
        }
        occurrences.sort((a : any,b : any) =>  {
            return op(Op.MINUS,a.offset,b.offset);
        });
        if (this.wholeStatementExpression && occurrences.length == 1) {
            let keyword : string = this._declarationKeyword;
            let declarationSource : string = `${keyword} ${this.name} = `;
            let edit : any = new bare.createInstance(any,null,this.singleExpression.offset,0,declarationSource);
            doSourceChange_addElementEdit(change,this.unitElement,edit);
            return new async.Future.value(change);
        }
        let positions : core.DartList<any> = new core.DartList.literal<any>();
        let occurrencesShift : number = 0;
        var addPosition : (offset : number) => void = (offset : number) : void =>  {
            positions.add(new bare.createInstance(any,null,this.file,offset));
        };
        {
            let declarationCode : string;
            let nameOffsetInDeclarationCode : number;
            if (this.stringLiteralPart != null) {
                declarationCode = 'var ';
                nameOffsetInDeclarationCode = new core.DartString(declarationCode).length;
                declarationCode += `${this.name} = '${this.stringLiteralPart}';`;
            }else {
                let keyword : string = this._declarationKeyword;
                let initializerCode : string = this.utils.getRangeText(this.selectionRange);
                declarationCode = `${keyword} `;
                nameOffsetInDeclarationCode = new core.DartString(declarationCode).length;
                declarationCode += `${this.name} = ${initializerCode};`;
            }
            let target : any = this._findDeclarationTarget(occurrences);
            let eol : string = this.utils.endOfLine;
            if (is(target, any)) {
                let prefix : string = this.utils.getNodePrefix(target);
                let edit : any = new bare.createInstance(any,null,target.offset,0,declarationCode + eol + prefix);
                doSourceChange_addElementEdit(change,this.unitElement,edit);
                addPosition(op(Op.PLUS,edit.offset,nameOffsetInDeclarationCode));
                occurrencesShift = edit.replacement.length;
            }else if (is(target, any)) {
                let prefix : string = this.utils.getNodePrefix(target.parent);
                let indent : string = this.utils.getIndent(1);
                let expr : any = target.expression;
                {
                    let code : string = '{' + eol + prefix + indent;
                    addPosition(op(Op.PLUS,op(Op.PLUS,target.offset,new core.DartString(code).length),nameOffsetInDeclarationCode));
                    code += declarationCode + eol;
                    code += prefix + indent + 'return ';
                    let edit : any = new bare.createInstance(any,null,target.offset,op(Op.MINUS,expr.offset,target.offset),code);
                    occurrencesShift = op(Op.MINUS,op(Op.PLUS,target.offset,new core.DartString(code).length),expr.offset);
                    doSourceChange_addElementEdit(change,this.unitElement,edit);
                }
                doSourceChange_addElementEdit(change,this.unitElement,new bare.createInstance(any,null,expr.end,op(Op.MINUS,target.end,expr.end),';' + eol + prefix + '}'));
            }
        }
        let occurrenceReplacement : string = this.name;
        if (this.stringLiteralPart != null) {
            occurrenceReplacement = `${${this.name}}`;
            occurrencesShift += 2;
        }
        for(let range of occurrences) {
            let edit : any = newSourceEdit_range(range,occurrenceReplacement);
            addPosition(op(Op.PLUS,range.offset,occurrencesShift));
            occurrencesShift += new core.DartString(this.name).length - range.length;
            doSourceChange_addElementEdit(change,this.unitElement,edit);
        }
        change.addLinkedEditGroup(new bare.createInstance(any,null,positions,new core.DartString(this.name).length,this.names.map((name : any) =>  {
            return new bare.createInstance(any,null,name,LinkedEditSuggestionKind.VARIABLE);
        }).toList()));
        return new async.Future.value(change);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    requiresPreview() : boolean {
        return false;
    }
    _checkSelection() : any {
        let selectionStr : string;
        {
            selectionStr = this.utils.getRangeText(this.selectionRange);
            let numLeading : number = countLeadingWhitespaces(selectionStr);
            let numTrailing : number = countTrailingWhitespaces(selectionStr);
            let offset : number = op(Op.PLUS,this.selectionRange.offset,numLeading);
            let end : number = op(Op.MINUS,this.selectionRange.end,numTrailing);
            this.selectionRange = new bare.createInstance(any,null,offset,end - offset);
        }
        let coveringNode : any = new bare.createInstance(any,null,this.selectionRange.offset,this.selectionRange.end).searchWithin(this.unit);
        for(let node : any = coveringNode; node != null; node = node.parent){
            let parent : any = node.parent;
            if (is(node, any) || is(node, any) || is(node, any) || is(node, any)) {
                continue;
            }
            if (is(node, any) || is(node, any) || is(node, any)) {
                this.rootExpression = null;
                this.coveringExpressionOffsets.clear();
                this.coveringExpressionLengths.clear();
                continue;
            }
            if (is(parent, any) && op(Op.EQUALS,parent.identifier,node) || is(parent, any) && op(Op.EQUALS,parent.propertyName,node)) {
                continue;
            }
            if (isNot(node, any)) {
                break;
            }
            if (is(node, any)) {
                let invocation : any = node;
                let element : any = invocation.methodName.bestElement;
                if (is(element, any) && element.returnType != null && element.returnType.isVoid) {
                    if (op(Op.EQUALS,this.rootExpression,null)) {
                        return new bare.createInstance(any,null,'Cannot extract the void expression.',newLocation_fromNode(node));
                    }
                    break;
                }
            }
            if (this.coveringExpressionOffsets.isEmpty) {
                if (is(node, any)) {
                    if (node.inDeclarationContext()) {
                        return new bare.createInstance(any,null,'Cannot extract the name part of a declaration.',newLocation_fromNode(node));
                    }
                    let element : any = node.bestElement;
                    if (is(element, any) || is(element, any)) {
                        continue;
                    }
                }
                if (is(parent, any) && op(Op.EQUALS,parent.leftHandSide,node)) {
                    return new bare.createInstance(any,null,'Cannot extract the left-hand side of an assignment.',newLocation_fromNode(node));
                }
            }
            if (this.coveringExpressionOffsets.isEmpty) {
                this.rootExpression = node;
            }
            this.coveringExpressionOffsets.add(node.offset);
            this.coveringExpressionLengths.add(node.length);
        }
        if (op(Op.EQUALS,coveringNode,null) || op(Op.EQUALS,coveringNode.getAncestor((node : any) =>  {
            return is(node, any);
        }),null)) {
            return new bare.createInstance(any,null,'An expression inside a function must be selected ' + 'to activate this refactoring.');
        }
        if (is(coveringNode, any)) {
            if (this.selectionRange.length != 0 && op(Op.GT,this.selectionRange.offset,coveringNode.offset) && op(Op.LT,this.selectionRange.end,coveringNode.end)) {
                this.stringLiteralPart = selectionStr;
                return new bare.createInstance(any,null);
            }
        }
        if (this.rootExpression != null) {
            this.singleExpression = this.rootExpression;
            this.selectionRange = range.node(this.singleExpression);
            this.wholeStatementExpression = is(this.singleExpression.parent, any);
            return new bare.createInstance(any,null);
        }
        return new bare.createInstance(any,null,'Expression must be selected to activate this refactoring.');
    }
    _encodeElement(element : any) : number {
        if (op(Op.EQUALS,element,null)) {
            return null;
        }
        let id : number = this.elementIds.get(element);
        if (id == null) {
            id = this.elementIds.length;
            this.elementIds.set(element,id);
        }
        return id;
    }
    _encodeExpressionTokens(expr : any,tokens : core.DartList<any>) : string {
        if (op(Op.EQUALS,expr,null)) {
            return tokens.join(properties._TOKEN_SEPARATOR);
        }
        let map : core.DartMap<any,any> = new core.DartHashMap<any,any>({
            equals : (a : any,b : any) =>  {
                return op(Op.EQUALS,a.lexeme,b.lexeme);
            },hashCode : (t : any) =>  {
                return t.lexeme.hashCode;
            }});
        expr.accept(new _TokenLocalElementVisitor(map));
        return tokens.map((token : any) =>  {
            let tokenString : string = token.lexeme;
            let element : any = op(Op.INDEX,map,token);
            if (element != null) {
                let elementId : number = this._encodeElement(element);
                if (elementId != null) {
                    tokenString += `-${elementId}`;
                }
            }
            return tokenString;
        }).join(properties._TOKEN_SEPARATOR);
    }
    _findDeclarationTarget(occurrences : core.DartList<any>) : any {
        let nodes : core.DartList<any> = this._findNodes(occurrences);
        let commonParent : any = getNearestCommonAncestor(nodes);
        if (is(commonParent, any)) {
            let firstParents : core.DartList<any> = getParents(nodes[0]);
            let commonIndex : number = firstParents.indexOf(commonParent);
            return firstParents[commonIndex + 1];
        }
        let expressionBody : any = this._getEnclosingExpressionBody(commonParent);
        if (expressionBody != null) {
            return expressionBody;
        }
        let target : any = commonParent.getAncestor((node : any) =>  {
            return is(node, any);
        });
        while (isNot(target.parent, any)){
            target = target.parent;
        }
        return target;
    }
    _findNodes(ranges : core.DartList<any>) : core.DartList<any> {
        let nodes : core.DartList<any> = new core.DartList.literal<any>();
        for(let range of ranges) {
            let node : any = new bare.createInstance(any,null,range.offset).searchWithin(this.unit);
            nodes.add(node);
        }
        return nodes;
    }
    _getEnclosingExpressionBody(node : any) : any {
        while (node != null){
            if (is(node, any)) {
                return null;
            }
            if (is(node, any)) {
                return node;
            }
            node = node.parent;
        }
        return null;
    }
    _isExtractable(range : any) : boolean {
        let analyzer : _ExtractExpressionAnalyzer = new _ExtractExpressionAnalyzer(range);
        this.utils.unit.accept(analyzer);
        return analyzer.status.isOK;
    }
    _isPartOfConstantExpression(node : any) : boolean {
        if (is(node, any)) {
            return node.constKeyword != null;
        }
        if (is(node, any)) {
            let creation : any = node;
            return creation.isConst;
        }
        if (is(node, any) || is(node, any) || is(node, any) || is(node, any) || is(node, any) || is(node, any) || is(node, any)) {
            return this._isPartOfConstantExpression(node.parent);
        }
        return false;
    }
    _prepareNames() : void {
        this.names.clear();
        if (this.stringLiteralPart != null) {
            this.names.addAll(getVariableNameSuggestionsForText(this.stringLiteralPart,this.excludedVariableNames));
        }else if (this.singleExpression != null) {
            this.names.addAll(getVariableNameSuggestionsForExpression(this.singleExpression.staticType,this.singleExpression,this.excludedVariableNames));
        }
    }
    _prepareOccurrences() : void {
        this.occurrences.clear();
        this.elementIds.clear();
        let selectionSource : string;
        {
            let rawSelectionSource : string = this.utils.getRangeText(this.selectionRange);
            let selectionTokens : core.DartList<any> = TokenUtils.getTokens(rawSelectionSource);
            selectionSource = this._encodeExpressionTokens(this.rootExpression,selectionTokens);
        }
        let enclosingFunction : any;
        {
            let selectionNode : any = new bare.createInstance(any,null,this.selectionOffset).searchWithin(this.unit);
            enclosingFunction = getEnclosingExecutableNode(selectionNode);
        }
        enclosingFunction.accept(new _OccurrencesVisitor(this,this.occurrences,selectionSource));
    }
    _prepareOffsetsLengths() : void {
        this.offsets.clear();
        this.lengths.clear();
        for(let occurrence of this.occurrences) {
            this.offsets.add(occurrence.offset);
            this.lengths.add(occurrence.length);
        }
    }
}

export namespace _ExtractExpressionAnalyzer {
    export type Constructors = '_ExtractExpressionAnalyzer';
    export type Interface = Omit<_ExtractExpressionAnalyzer, Constructors>;
}
@DartClass
export class _ExtractExpressionAnalyzer extends any {
    status : any;

    constructor(selection : any) {
    }
    @defaultConstructor
    _ExtractExpressionAnalyzer(selection : any) {
        this.status = new bare.createInstance(any,null);
        super.DartObject(selection);
    }
    invalidSelection(message : string) : void {
        this._invalidSelection(message,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        super.visitAssignmentExpression(node);
        let lhs : any = node.leftHandSide;
        if (this._isFirstSelectedNode(lhs)) {
            this._invalidSelection('Cannot extract the left-hand side of an assignment.',newLocation_fromNode(lhs));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        super.visitSimpleIdentifier(node);
        if (this._isFirstSelectedNode(node)) {
            if (node.inDeclarationContext()) {
                this.invalidSelection('Cannot extract the name part of a declaration.');
            }
            let element : any = node.bestElement;
            if (is(element, any) || is(element, any)) {
                this.invalidSelection('Cannot extract a single method name.');
            }
            let parent : any = node.parent;
            if (is(parent, any) && core.identical(parent.identifier,node)) {
                this.invalidSelection('Cannot extract name part of a property access.');
            }
            if (is(parent, any) && core.identical(parent.propertyName,node)) {
                this.invalidSelection('Cannot extract name part of a property access.');
            }
        }
        return null;
    }
    _invalidSelection(message : string,location : any) : void {
        this.status.addFatalError(message,location);
        reset();
    }
    _isFirstSelectedNode(node : any) : boolean {
        return op(Op.EQUALS,node,firstSelectedNode);
    }
}

export namespace _HasStatementVisitor {
    export type Constructors = '_HasStatementVisitor';
    export type Interface = Omit<_HasStatementVisitor, Constructors>;
}
@DartClass
export class _HasStatementVisitor extends any {
    result : boolean;

    constructor() {
    }
    @defaultConstructor
    _HasStatementVisitor() {
        this.result = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStatement(node : any) {
        this.result = true;
    }
}

export namespace _OccurrencesVisitor {
    export type Constructors = '_OccurrencesVisitor';
    export type Interface = Omit<_OccurrencesVisitor, Constructors>;
}
@DartClass
export class _OccurrencesVisitor extends any {
    ref : ExtractLocalRefactoringImpl;

    occurrences : core.DartList<any>;

    selectionSource : string;

    constructor(ref : ExtractLocalRefactoringImpl,occurrences : core.DartList<any>,selectionSource : string) {
    }
    @defaultConstructor
    _OccurrencesVisitor(ref : ExtractLocalRefactoringImpl,occurrences : core.DartList<any>,selectionSource : string) {
        this.ref = ref;
        this.occurrences = occurrences;
        this.selectionSource = selectionSource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        if (!this._hasStatements(node)) {
            this._tryToFindOccurrenceFragments(node);
            return null;
        }
        return super.visitBinaryExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpression(node : any) : core.DartObject {
        if (this.ref._isExtractable(range.node(node))) {
            this._tryToFindOccurrence(node);
        }
        return super.visitExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringLiteral(node : any) : core.DartObject {
        if (this.ref.stringLiteralPart != null) {
            let length : number = new core.DartString(this.ref.stringLiteralPart).length;
            let value : string = this.ref.utils.getNodeText(node);
            let lastIndex : number = 0;
            while (true){
                let index : number = new core.DartString(value).indexOf(this.ref.stringLiteralPart,lastIndex);
                if (index == -1) {
                    break;
                }
                lastIndex = index + length;
                let start : number = op(Op.PLUS,node.offset,index);
                let range : any = new bare.createInstance(any,null,start,length);
                this.occurrences.add(range);
            }
            return null;
        }
        return this.visitExpression(node);
    }
    _addOccurrence(range : any) : void {
        if (range.intersects(this.ref.selectionRange)) {
            this.occurrences.add(this.ref.selectionRange);
        }else {
            this.occurrences.add(range);
        }
    }
    _hasStatements(root : any) : boolean {
        let visitor : _HasStatementVisitor = new _HasStatementVisitor();
        root.accept(visitor);
        return visitor.result;
    }
    _tryToFindOccurrence(node : any) : void {
        let nodeSource : string = this.ref.utils.getNodeText(node);
        let nodeTokens : core.DartList<any> = TokenUtils.getTokens(nodeSource);
        nodeSource = this.ref._encodeExpressionTokens(node,nodeTokens);
        if (nodeSource == this.selectionSource) {
            this._addOccurrence(range.node(node));
        }
    }
    _tryToFindOccurrenceFragments(node : any) : void {
        let nodeOffset : number = node.offset;
        let nodeSource : string = this.ref.utils.getNodeText(node);
        let nodeTokens : core.DartList<any> = TokenUtils.getTokens(nodeSource);
        nodeSource = this.ref._encodeExpressionTokens(node,nodeTokens);
        let lastIndex : number = 0;
        while (true){
            let index : number = new core.DartString(nodeSource).indexOf(this.selectionSource,lastIndex);
            if (index == -1) {
                break;
            }
            lastIndex = index + new core.DartString(this.selectionSource).length;
            let startTokenIndex : number = countMatches(new core.DartString(nodeSource).substring(0,index),properties._TOKEN_SEPARATOR);
            let endTokenIndex : number = countMatches(new core.DartString(nodeSource).substring(0,lastIndex),properties._TOKEN_SEPARATOR);
            let startToken : any = nodeTokens[startTokenIndex];
            let endToken : any = nodeTokens[endTokenIndex];
            let start : number = nodeOffset + startToken.offset;
            let end : number = nodeOffset + endToken.end;
            this._addOccurrence(range.startOffsetEndOffset(start,end));
        }
    }
}

export namespace _TokenLocalElementVisitor {
    export type Constructors = '_TokenLocalElementVisitor';
    export type Interface = Omit<_TokenLocalElementVisitor, Constructors>;
}
@DartClass
export class _TokenLocalElementVisitor extends any {
    map : core.DartMap<any,any>;

    constructor(map : core.DartMap<any,any>) {
    }
    @defaultConstructor
    _TokenLocalElementVisitor(map : core.DartMap<any,any>) {
        this.map = map;
    }
    visitSimpleIdentifier(node : any) {
        let element : any = node.staticElement;
        if (is(element, any)) {
            this.map.set(node.token,element);
        }
    }
}

export class properties {
    private static __$_TOKEN_SEPARATOR : string;
    static get _TOKEN_SEPARATOR() : string { 
        if (this.__$_TOKEN_SEPARATOR===undefined) {
            this.__$_TOKEN_SEPARATOR = "￿";
        }
        return this.__$_TOKEN_SEPARATOR;
    }
    static set _TOKEN_SEPARATOR(__$value : string)  { 
        this.__$_TOKEN_SEPARATOR = __$value;
    }

}
