/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/extract_method.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var _getLocalElement : (node : any) => any = (node : any) : any =>  {
    let element : any = node.staticElement;
    if (is(element, any) || is(element, any) || is(element, any) && element.visibleRange != null) {
        return element;
    }
    return null;
};
export var _getNormalizedSource : (src : string) => string = (src : string) : string =>  {
    let selectionTokens : core.DartList<any> = TokenUtils.getTokens(src);
    return selectionTokens.join(properties._TOKEN_SEPARATOR);
};
export var _inverseMap : (map : core.DartMap<string,string>) => core.DartMap<string,string> = (map : core.DartMap<string,string>) : core.DartMap<string,string> =>  {
    let result : core.DartMap<string,string> = new core.DartMap.literal([
    ]);
    map.forEach((key : string,value : string) =>  {
        result.set(value,key);
    });
    return result;
};
export namespace ExtractMethodRefactoringImpl {
    export type Constructors = 'ExtractMethodRefactoringImpl';
    export type Interface = Omit<ExtractMethodRefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ExtractMethodRefactoringImpl extends any implements any.Interface {
    private static __$ERROR_EXITS;
    static get ERROR_EXITS() { 
        if (this.__$ERROR_EXITS===undefined) {
            this.__$ERROR_EXITS = 'Selected statements contain a return statement, but not all possible ' + 'execution flows exit. Semantics may not be preserved.';
        }
        return this.__$ERROR_EXITS;
    }

    searchEngine : any;

    unit : any;

    selectionOffset : number;

    selectionLength : number;

    context : any;

    unitElement : any;

    libraryElement : any;

    selectionRange : any;

    utils : any;

    librariesToImport : core.DartSet<any>;

    returnType : string;

    variableType : string;

    name : string;

    extractAll : boolean;

    canCreateGetter : boolean;

    createGetter : boolean;

    names : core.DartList<string>;

    offsets : core.DartList<number>;

    lengths : core.DartList<number>;

    _localNames : core.DartMap<string,core.DartList<any>>;

    _unqualifiedNames : core.DartSet<string>;

    _excludedNames : core.DartSet<string>;

    _parameters : core.DartList<any>;

    _parametersMap : core.DartMap<string,any>;

    _parameterReferencesMap : core.DartMap<string,core.DartList<any>>;

    _hasAwait : boolean;

    _returnType : any;

    _returnVariableName : string;

    _parentMember : any;

    _selectionExpression : any;

    _selectionFunctionExpression : any;

    _selectionStatements : core.DartList<any>;

    _occurrences : core.DartList<_Occurrence>;

    _staticContext : boolean;

    constructor(searchEngine : any,unit : any,selectionOffset : number,selectionLength : number) {
    }
    @defaultConstructor
    ExtractMethodRefactoringImpl(searchEngine : any,unit : any,selectionOffset : number,selectionLength : number) {
        this.librariesToImport = new core.DartSet<any>();
        this.returnType = '';
        this.extractAll = true;
        this.canCreateGetter = false;
        this.createGetter = false;
        this.names = new core.DartList.literal<string>();
        this.offsets = new core.DartList.literal<number>();
        this.lengths = new core.DartList.literal<number>();
        this._localNames = new core.DartMap.literal([
        ]);
        this._unqualifiedNames = new core.DartSet<string>();
        this._excludedNames = new core.DartSet<string>();
        this._parameters = new core.DartList.literal<any>();
        this._parametersMap = new core.DartMap.literal([
        ]);
        this._parameterReferencesMap = new core.DartMap.literal([
        ]);
        this._hasAwait = false;
        this._occurrences = new core.DartList.literal();
        this._staticContext = false;
        this.searchEngine = searchEngine;
        this.unit = unit;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
        this.unitElement = this.unit.element;
        this.libraryElement = this.unitElement.library;
        this.context = this.libraryElement.context;
        this.selectionRange = new bare.createInstance(any,null,this.selectionOffset,this.selectionLength);
        this.utils = new bare.createInstance(any,null,this.unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parameters() : core.DartList<any> {
        return this._parameters;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set parameters(parameters : core.DartList<any>) {
        this._parameters = parameters.toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        let node : any = new bare.createInstance(any,null,this.selectionOffset).searchWithin(this.unit);
        if (node != null && node.getAncestor((node : any) =>  {
            return is(node, any);
        }) != null) {
            return 'Extract Method';
        }
        return 'Extract Function';
    }
    get signature() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        if (this.createGetter) {
            sb.write('get ');
            sb.write(this.name);
        }else {
            sb.write(this.name);
            sb.write('(');
            let firstParameter : boolean = true;
            for(let parameter of this._parameters) {
                if (firstParameter) {
                    firstParameter = false;
                }else {
                    sb.write(', ');
                }
                {
                    let typeSource : string = parameter.type;
                    if ('dynamic' != typeSource && '' != typeSource) {
                        sb.write(typeSource);
                        sb.write(' ');
                    }
                }
                sb.write(parameter.name);
                if (parameter.parameters != null) {
                    sb.write(parameter.parameters);
                }
            }
            sb.write(')');
        }
        return sb.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : any = new bare.createInstance(any,null);
            result.addStatus(validateMethodName(this.name));
            result.addStatus(this._checkParameterNames());
            let status : any = await this._checkPossibleConflicts();
            result.addStatus(status);
            return result;
        } )());
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
        result.addStatus(this._initializeParameters());
        this._initializeHasAwait();
        this._initializeReturnType();
        this._initializeOccurrences();
        this._prepareOffsetsLengths();
        this.canCreateGetter = this._computeCanCreateGetter();
        this.createGetter = this.canCreateGetter && ExtractMethodRefactoringImpl._isExpressionForGetter(this._selectionExpression);
        this._prepareExcludedNames();
        this._prepareNames();
        if (this._selectionFunctionExpression != null && !this._parameters.isEmpty) {
            let message : string = format('Cannot extract closure as method, it references {0} external variable(s).',this._parameters.length);
            let result : any = new bare.createInstance(any,null,message);
            return new async.Future.value(result);
        }
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkName() : any {
        return validateMethodName(this.name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let change : any = new bare.createInstance(any,null,this.refactoringName);
            for(let occurrence of this._occurrences) {
                let range : any = occurrence.range;
                if (!this.extractAll && !occurrence.isSelection) {
                    continue;
                }
                let invocationSource : string;
                if (this._selectionFunctionExpression != null) {
                    invocationSource = this.name;
                }else {
                    let sb : core.DartStringBuffer = new core.DartStringBuffer();
                    if (this._selectionStatements != null && this.variableType != null) {
                        if (this._returnVariableName != null) {
                            let occurrenceName : string = occurrence._parameterOldToOccurrenceName.get(this._returnVariableName);
                            if (!this._parametersMap.containsKey(this._returnVariableName)) {
                                if (new core.DartString(this.variableType).isEmpty) {
                                    sb.write('var ');
                                }else {
                                    sb.write(this.variableType);
                                    sb.write(' ');
                                }
                            }
                            sb.write(occurrenceName);
                            sb.write(' = ');
                        }else {
                            sb.write('return ');
                        }
                    }
                    if (this._hasAwait) {
                        sb.write('await ');
                    }
                    sb.write(this.name);
                    if (!this.createGetter) {
                        sb.write('(');
                        let firstParameter : boolean = true;
                        for(let parameter of this._parameters) {
                            if (firstParameter) {
                                firstParameter = false;
                            }else {
                                sb.write(', ');
                            }
                            {
                                let argumentName : string = occurrence._parameterOldToOccurrenceName.get(parameter.id);
                                sb.write(argumentName);
                            }
                        }
                        sb.write(')');
                    }
                    invocationSource = sb.toString();
                    if (this._selectionStatements != null) {
                        invocationSource += ';';
                    }
                }
                let edit : any = newSourceEdit_range(range,invocationSource);
                doSourceChange_addElementEdit(change,this.unitElement,edit);
            }
            {
                let prefix : string = this.utils.getNodePrefix(this._parentMember);
                let eol : string = this.utils.endOfLine;
                let annotations : string = '';
                {
                    if (this._staticContext) {
                        annotations = 'static ';
                    }
                }
                let declarationSource : string = null;
                {
                    let returnExpressionSource : string = this._getMethodBodySource();
                    if (this._selectionFunctionExpression != null) {
                        declarationSource = `${this.name}${returnExpressionSource}`;
                        if (is(this._selectionFunctionExpression.body, any)) {
                            declarationSource += ';';
                        }
                    }
                    let asyncKeyword : string = this._hasAwait ? ' async' : '';
                    if (this._selectionExpression != null) {
                        if (new core.DartString(this.returnType).isNotEmpty) {
                            annotations += `${this.returnType} `;
                        }
                        declarationSource = `${annotations}${this.signature}${asyncKeyword} => `;
                        declarationSource += `${returnExpressionSource};`;
                    }
                    if (this._selectionStatements != null) {
                        if (new core.DartString(this.returnType).isNotEmpty) {
                            annotations += this.returnType + ' ';
                        }
                        declarationSource = `${annotations}${this.signature}${asyncKeyword} {${eol}`;
                        declarationSource += returnExpressionSource;
                        if (this._returnVariableName != null) {
                            declarationSource += `${prefix}  return ${this._returnVariableName};${eol}`;
                        }
                        declarationSource += `${prefix}}`;
                    }
                }
                if (declarationSource != null) {
                    let offset : number = this._parentMember.end;
                    let edit : any = new bare.createInstance(any,null,offset,0,`${eol}${eol}${prefix}${declarationSource}`);
                    doSourceChange_addElementEdit(change,this.unitElement,edit);
                }
            }
            addLibraryImports(change,this.libraryElement,this.librariesToImport);
            return change;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    requiresPreview() : boolean {
        return false;
    }
    _addParameterReference(name : string,range : any) : void {
        let references : core.DartList<any> = this._parameterReferencesMap.get(name);
        if (references == null) {
            references = new core.DartList.literal();
            this._parameterReferencesMap.set(name,references);
        }
        references.add(range);
    }
    _checkParameterNames() : any {
        let result : any = new bare.createInstance(any,null);
        for(let parameter of this._parameters) {
            result.addStatus(validateParameterName(parameter.name));
            for(let other of this._parameters) {
                if (!core.identical(parameter,other) && op(Op.EQUALS,other.name,parameter.name)) {
                    result.addError(format("Parameter '{0}' already exists",parameter.name));
                    return result;
                }
            }
            if (this._isParameterNameConflictWithBody(parameter)) {
                result.addError(format("'{0}' is already used as a name in the selected code",parameter.name));
                return result;
            }
        }
        return result;
    }
    _checkPossibleConflicts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : any = new bare.createInstance(any,null);
            let parent : any = this._parentMember.parent;
            if (is(parent, any)) {
                let libraryElement : any = resolutionMap.elementDeclaredByCompilationUnit(parent).library;
                return validateCreateFunction(this.searchEngine,libraryElement,this.name);
            }
            if (is(parent, any)) {
                let classElement : any = parent.element;
                return validateCreateMethod(this.searchEngine,classElement,this.name);
            }
            return new async.Future.value(result);
        } )());
    }

    _checkSelection() : any {
        let selectionAnalyzer : _ExtractMethodAnalyzer = new _ExtractMethodAnalyzer(this.unit,this.selectionRange);
        this.unit.accept(selectionAnalyzer);
        {
            let status : any = selectionAnalyzer.status;
            if (status.hasFatalError) {
                return status;
            }
        }
        let selectedNodes : core.DartList<any> = selectionAnalyzer.selectedNodes;
        if (!selectedNodes.isEmpty) {
            let coveringNode : any = selectionAnalyzer.coveringNode;
            this._parentMember = getEnclosingClassOrUnitMember(coveringNode);
            if (selectedNodes.length == 1 && !this.utils.selectionIncludesNonWhitespaceOutsideNode(this.selectionRange,selectionAnalyzer.firstSelectedNode)) {
                let selectedNode : any = selectionAnalyzer.firstSelectedNode;
                if (is(selectedNode, any)) {
                    this._selectionExpression = selectedNode;
                    if (is(this._selectionExpression, any)) {
                        this._selectionFunctionExpression = this._selectionExpression as any;
                        this._selectionExpression = null;
                    }
                    return new bare.createInstance(any,null);
                }
            }
            {
                let selectedStatements : core.DartList<any> = new core.DartList.literal();
                for(let selectedNode of selectedNodes) {
                    if (is(selectedNode, any)) {
                        selectedStatements.add(selectedNode);
                    }
                }
                if (selectedStatements.length == selectedNodes.length) {
                    this._selectionStatements = selectedStatements;
                    return new bare.createInstance(any,null);
                }
            }
        }
        return new bare.createInstance(any,null,'Can only extract a single expression or a set of statements.');
    }
    _computeCanCreateGetter() : boolean {
        if (this._selectionFunctionExpression != null) {
            return false;
        }
        if (!this.parameters.isEmpty) {
            return false;
        }
        if (this._selectionExpression != null) {
            if (is(this._selectionExpression, any)) {
                return false;
            }
        }
        if (this._selectionStatements != null) {
            return this.returnType != 'void';
        }
        return true;
    }
    _getMethodBodySource() : string {
        let source : string = this.utils.getRangeText(this.selectionRange);
        let replaceEdits : core.DartList<any> = new core.DartList.literal();
        for(let parameter of this._parameters) {
            let ranges : core.DartList<any> = this._parameterReferencesMap.get(parameter.id);
            if (ranges != null) {
                for(let range of ranges) {
                    replaceEdits.add(new bare.createInstance(any,null,op(Op.MINUS,range.offset,this.selectionRange.offset),range.length,parameter.name));
                }
            }
        }
        replaceEdits.sort((a : any,b : any) =>  {
            return op(Op.MINUS,b.offset,a.offset);
        });
        source = SourceEdit.applySequence(source,replaceEdits);
        if (this._selectionFunctionExpression != null) {
            let baseNode : any = this._selectionFunctionExpression.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (baseNode != null) {
                let baseIndent : string = this.utils.getNodePrefix(baseNode);
                let targetIndent : string = this.utils.getNodePrefix(this._parentMember);
                source = this.utils.replaceSourceIndent(source,baseIndent,targetIndent);
                source = new core.DartString(source).trim();
            }
        }
        if (this._selectionStatements != null) {
            let selectionIndent : string = this.utils.getNodePrefix(this._selectionStatements[0]);
            let targetIndent : string = op(Op.PLUS,this.utils.getNodePrefix(this._parentMember),'  ');
            source = this.utils.replaceSourceIndent(source,selectionIndent,targetIndent);
        }
        return source;
    }
    _getSourcePattern(range : any) : _SourcePattern {
        let originalSource : string = this.utils.getText(range.offset,range.length);
        let pattern : _SourcePattern = new _SourcePattern();
        let replaceEdits : core.DartList<any> = new core.DartList.literal<any>();
        this.unit.accept(new _GetSourcePatternVisitor(range,pattern,replaceEdits));
        replaceEdits = replaceEdits.reversed.toList();
        let source : string = SourceEdit.applySequence(originalSource,replaceEdits);
        pattern.normalizedSource = _getNormalizedSource(source);
        return pattern;
    }
    _getTypeCode(type : any) : string {
        return this.utils.getTypeSource(type,this.librariesToImport);
    }
    _initializeHasAwait() : void {
        let visitor : _HasAwaitVisitor = new _HasAwaitVisitor();
        if (this._selectionExpression != null) {
            this._selectionExpression.accept(visitor);
        }else if (this._selectionStatements != null) {
            this._selectionStatements.forEach((statement : any) =>  {
                statement.accept(visitor);
            });
        }
        this._hasAwait = visitor.result;
    }
    _initializeOccurrences() : void {
        this._occurrences.clear();
        let selectionPattern : _SourcePattern = this._getSourcePattern(this.selectionRange);
        let patternToSelectionName : core.DartMap<string,string> = _inverseMap(selectionPattern.originalToPatternNames);
        let enclosingMemberParent : any = this._parentMember.parent;
        enclosingMemberParent.accept(new _InitializeOccurrencesVisitor(this,selectionPattern,patternToSelectionName));
    }
    _initializeParameters() : any {
        this._parameters.clear();
        this._parametersMap.clear();
        this._parameterReferencesMap.clear();
        let result : any = new bare.createInstance(any,null);
        let assignedUsedVariables : core.DartList<any> = new core.DartList.literal();
        this.unit.accept(new _InitializeParametersVisitor(this,assignedUsedVariables));
        if (this._selectionExpression != null) {
            this._returnType = this._selectionExpression.bestType;
        }
        if (this._selectionStatements != null) {
            let hasReturn : boolean = this._selectionStatements.any(ExtractMethodRefactoringImpl._mayEndWithReturnStatement.bind(this));
            if (hasReturn && !ExitDetector.exits(this._selectionStatements.last)) {
                result.addError(ExtractMethodRefactoringImpl.ERROR_EXITS);
            }
        }
        if (this._selectionStatements != null) {
            let returnTypeComputer : _ReturnTypeComputer = new _ReturnTypeComputer(this.context);
            this._selectionStatements.forEach((statement : any) =>  {
                statement.accept(returnTypeComputer);
            });
            this._returnType = returnTypeComputer.returnType;
        }
        if (assignedUsedVariables.length == 1) {
            if (this._returnType != null) {
                result.addFatalError('Ambiguous return value: Selected block contains assignment(s) to ' + 'local variables and return statement.');
                return result;
            }
            let returnVariable : any = assignedUsedVariables[0];
            this._returnType = returnVariable.type;
            this._returnVariableName = returnVariable.displayName;
        }
        if (assignedUsedVariables.length > 1) {
            let sb : core.DartStringBuffer = new core.DartStringBuffer();
            for(let variable of assignedUsedVariables) {
                sb.write(variable.displayName);
                sb.write('\n');
            }
            result.addFatalError(format('Ambiguous return value: Selected block contains more than one ' + 'assignment to local variables. Affected variables are:\n\n{0}',new core.DartString(sb.toString()).trim()));
        }
        return result;
    }
    _initializeReturnType() : void {
        let futureType : any = this.context.typeProvider.futureType;
        if (this._selectionFunctionExpression != null) {
            this.variableType = '';
            this.returnType = '';
        }else if (op(Op.EQUALS,this._returnType,null)) {
            this.variableType = null;
            if (this._hasAwait) {
                this.returnType = this._getTypeCode(futureType);
            }else {
                this.returnType = 'void';
            }
        }else if (this._returnType.isDynamic) {
            this.variableType = '';
            if (this._hasAwait) {
                this.returnType = this._getTypeCode(futureType);
            }else {
                this.returnType = '';
            }
        }else {
            this.variableType = this._getTypeCode(this._returnType);
            if (this._hasAwait) {
                if (this._returnType.element != futureType.element) {
                    this.returnType = this._getTypeCode(futureType.instantiate(new core.DartList.literal(this._returnType)));
                }
            }else {
                this.returnType = this.variableType;
            }
        }
    }
    _isDeclaredInSelection(element : any) : boolean {
        return this.selectionRange.contains(element.nameOffset);
    }
    _isExtractable(range : any) : boolean {
        let analyzer : _ExtractMethodAnalyzer = new _ExtractMethodAnalyzer(this.unit,range);
        this.utils.unit.accept(analyzer);
        return analyzer.status.isOK;
    }
    _isParameterNameConflictWithBody(parameter : any) : boolean {
        let id : string = parameter.id;
        let name : string = parameter.name;
        let parameterRanges : core.DartList<any> = this._parameterReferencesMap.get(id);
        let otherRanges : core.DartList<any> = this._localNames.get(name);
        for(let parameterRange of parameterRanges) {
            if (otherRanges != null) {
                for(let otherRange of otherRanges) {
                    if (parameterRange.intersects(otherRange)) {
                        return true;
                    }
                }
            }
        }
        if (this._unqualifiedNames.contains(name)) {
            return true;
        }
        return false;
    }
    _isUsedAfterSelection(element : any) : boolean {
        let visitor = new _IsUsedAfterSelectionVisitor(this,element);
        this._parentMember.accept(visitor);
        return visitor.result;
    }
    _prepareExcludedNames() : void {
        this._excludedNames.clear();
        let enclosingExecutable : any = getEnclosingExecutableElement(this._parentMember);
        if (enclosingExecutable != null) {
            visitChildren(enclosingExecutable,(element : any) =>  {
                if (is(element, any)) {
                    let elementRange : any = element.visibleRange;
                    if (elementRange != null) {
                        this._excludedNames.add(element.displayName);
                    }
                }
                return true;
            });
        }
    }
    _prepareNames() : void {
        this.names.clear();
        if (this._selectionExpression != null) {
            this.names.addAll(getVariableNameSuggestionsForExpression(this._selectionExpression.staticType,this._selectionExpression,this._excludedNames));
        }
    }
    _prepareOffsetsLengths() : void {
        this.offsets.clear();
        this.lengths.clear();
        for(let occurrence of this._occurrences) {
            this.offsets.add(occurrence.range.offset);
            this.lengths.add(occurrence.range.length);
        }
    }
    static _isExpressionForGetter(expression : any) : boolean {
        if (is(expression, any)) {
            return ExtractMethodRefactoringImpl._isExpressionForGetter(expression.leftOperand) && ExtractMethodRefactoringImpl._isExpressionForGetter(expression.rightOperand);
        }
        if (is(expression, any)) {
            return true;
        }
        if (is(expression, any)) {
            return ExtractMethodRefactoringImpl._isExpressionForGetter(expression.operand);
        }
        if (is(expression, any)) {
            return ExtractMethodRefactoringImpl._isExpressionForGetter(expression.prefix);
        }
        if (is(expression, any)) {
            return ExtractMethodRefactoringImpl._isExpressionForGetter(expression.target);
        }
        if (is(expression, any)) {
            return true;
        }
        return false;
    }
    static _mayEndWithReturnStatement(statement : any) : boolean {
        let visitor : _HasReturnStatementVisitor = new _HasReturnStatementVisitor();
        statement.accept(visitor);
        return visitor.hasReturn;
    }
}

export namespace _ExtractMethodAnalyzer {
    export type Constructors = '_ExtractMethodAnalyzer';
    export type Interface = Omit<_ExtractMethodAnalyzer, Constructors>;
}
@DartClass
export class _ExtractMethodAnalyzer extends any {
    constructor(unit : any,selection : any) {
    }
    @defaultConstructor
    _ExtractMethodAnalyzer(unit : any,selection : any) {
        super.DartObject(unit,selection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNextSelectedNode(node : any) : void {
        super.handleNextSelectedNode(node);
        this._checkParent(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleSelectionEndsIn(node : any) : void {
        super.handleSelectionEndsIn(node);
        invalidSelection('The selection does not cover a set of statements or an expression. ' + 'Extend selection to a valid range.');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        super.visitAssignmentExpression(node);
        let lhs : any = node.leftHandSide;
        if (this._isFirstSelectedNode(lhs)) {
            invalidSelection('Cannot extract the left-hand side of an assignment.',newLocation_fromNode(lhs));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInitializer(node : any) : core.DartObject {
        super.visitConstructorInitializer(node);
        if (this._isFirstSelectedNode(node)) {
            invalidSelection('Cannot extract a constructor initializer. ' + 'Select expression part of initializer.',newLocation_fromNode(node));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        super.visitForStatement(node);
        if (core.identical(node.variables,firstSelectedNode)) {
            invalidSelection("Cannot extract initialization part of a 'for' statement.");
        }else if (node.updaters.contains(lastSelectedNode)) {
            invalidSelection("Cannot extract increment part of a 'for' statement.");
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitGenericFunctionType(node : any) : core.DartObject {
        super.visitGenericFunctionType(node);
        if (this._isFirstSelectedNode(node)) {
            invalidSelection('Cannot extract a single type reference.');
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
                invalidSelection('Cannot extract the name part of a declaration.');
            }
            let element : any = node.bestElement;
            if (is(element, any) || is(element, any)) {
                invalidSelection('Cannot extract a single method name.');
            }
            if (is(node.parent, any) && op(Op.EQUALS,(node.parent as any).identifier,node)) {
                invalidSelection('Can not extract name part of a property access.');
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        super.visitTypeName(node);
        if (this._isFirstSelectedNode(node)) {
            invalidSelection('Cannot extract a single type reference.');
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitVariableDeclaration(node : any) : core.DartObject {
        super.visitVariableDeclaration(node);
        if (this._isFirstSelectedNode(node)) {
            invalidSelection('Cannot extract a variable declaration fragment. ' + 'Select whole declaration statement.',newLocation_fromNode(node));
        }
        return null;
    }
    _checkParent(node : any) : void {
        let firstParent : any = firstSelectedNode.parent;
        do{
            node = node.parent;
            if (core.identical(node,firstParent)) {
                return;
            }
        } while (node != null);
        invalidSelection('Not all selected statements are enclosed by the same parent statement.');
    }
    _isFirstSelectedNode(node : any) : boolean {
        return core.identical(firstSelectedNode,node);
    }
}

export namespace _GetSourcePatternVisitor {
    export type Constructors = '_GetSourcePatternVisitor';
    export type Interface = Omit<_GetSourcePatternVisitor, Constructors>;
}
@DartClass
export class _GetSourcePatternVisitor extends any {
    partRange : any;

    pattern : _SourcePattern;

    replaceEdits : core.DartList<any>;

    constructor(partRange : any,pattern : _SourcePattern,replaceEdits : core.DartList<any>) {
    }
    @defaultConstructor
    _GetSourcePatternVisitor(partRange : any,pattern : _SourcePattern,replaceEdits : core.DartList<any>) {
        this.partRange = partRange;
        this.pattern = pattern;
        this.replaceEdits = replaceEdits;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        let nodeRange : any = range.node(node);
        if (this.partRange.covers(nodeRange)) {
            let element : any = _getLocalElement(node);
            if (element != null) {
                if (isNamedExpressionName(node)) {
                    return;
                }
                let originalName : string = element.displayName;
                let patternName : string = this.pattern.originalToPatternNames.get(originalName);
                if (patternName == null) {
                    let parameterType : any = this._getElementType(element);
                    this.pattern.parameterTypes.add(parameterType);
                    patternName = `__refVar${this.pattern.originalToPatternNames.length}`;
                    this.pattern.originalToPatternNames.set(originalName,patternName);
                }
                this.replaceEdits.add(new bare.createInstance(any,null,op(Op.MINUS,nodeRange.offset,this.partRange.offset),nodeRange.length,patternName));
            }
        }
    }
    _getElementType(element : any) : any {
        if (is(element, any)) {
            return element.type;
        }
        if (is(element, any)) {
            return element.type;
        }
        throw new core.StateError(`Unknown element type: ${((t)=>(!!t)?t.runtimeType:null)(element)}`);
    }
}

export namespace _HasAwaitVisitor {
    export type Constructors = '_HasAwaitVisitor';
    export type Interface = Omit<_HasAwaitVisitor, Constructors>;
}
@DartClass
export class _HasAwaitVisitor extends any {
    result : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAwaitExpression(node : any) {
        this.result = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForEachStatement(node : any) {
        if (node.awaitKeyword != null) {
            this.result = true;
        }
        super.visitForEachStatement(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HasAwaitVisitor() {
        this.result = false;
    }
}

export namespace _HasReturnStatementVisitor {
    export type Constructors = '_HasReturnStatementVisitor';
    export type Interface = Omit<_HasReturnStatementVisitor, Constructors>;
}
@DartClass
export class _HasReturnStatementVisitor extends any {
    hasReturn : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) {
        this.hasReturn = true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HasReturnStatementVisitor() {
        this.hasReturn = false;
    }
}

export namespace _InitializeOccurrencesVisitor {
    export type Constructors = '_InitializeOccurrencesVisitor';
    export type Interface = Omit<_InitializeOccurrencesVisitor, Constructors>;
}
@DartClass
export class _InitializeOccurrencesVisitor extends any {
    ref : ExtractMethodRefactoringImpl;

    selectionPattern : _SourcePattern;

    patternToSelectionName : core.DartMap<string,string>;

    forceStatic : boolean;

    constructor(ref : ExtractMethodRefactoringImpl,selectionPattern : _SourcePattern,patternToSelectionName : core.DartMap<string,string>) {
    }
    @defaultConstructor
    _InitializeOccurrencesVisitor(ref : ExtractMethodRefactoringImpl,selectionPattern : _SourcePattern,patternToSelectionName : core.DartMap<string,string>) {
        this.forceStatic = false;
        this.ref = ref;
        this.selectionPattern = selectionPattern;
        this.patternToSelectionName = patternToSelectionName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlock(node : any) : core.DartObject {
        if (this.ref._selectionStatements != null) {
            this._visitStatements(node.statements);
        }
        return super.visitBlock(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInitializer(node : any) : core.DartObject {
        this.forceStatic = true;
        try {
            return super.visitConstructorInitializer(node);
        } finally {
            this.forceStatic = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpression(node : any) : core.DartObject {
        if (this.ref._selectionFunctionExpression != null || this.ref._selectionExpression != null && op(Op.EQUALS,node.runtimeType,this.ref._selectionExpression.runtimeType)) {
            let nodeRange : any = range.node(node);
            this._tryToFindOccurrence(nodeRange);
        }
        return super.visitExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : core.DartObject {
        this.forceStatic = node.isStatic;
        try {
            return super.visitMethodDeclaration(node);
        } finally {
            this.forceStatic = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchMember(node : any) : core.DartObject {
        if (this.ref._selectionStatements != null) {
            this._visitStatements(node.statements);
        }
        return super.visitSwitchMember(node);
    }
    _tryToFindOccurrence(nodeRange : any) : boolean {
        if (!this.ref._isExtractable(nodeRange)) {
            return false;
        }
        let nodePattern : _SourcePattern = this.ref._getSourcePattern(nodeRange);
        if (this.selectionPattern.isCompatible(nodePattern)) {
            let occurrence : _Occurrence = new _Occurrence(nodeRange,this.ref.selectionRange.intersects(nodeRange));
            this.ref._occurrences.add(occurrence);
            nodePattern.originalToPatternNames.forEach((originalName : string,patternName : string) =>  {
                let selectionName : string = this.patternToSelectionName.get(patternName);
                occurrence._parameterOldToOccurrenceName.set(selectionName,originalName);
            });
            if (this.forceStatic) {
                this.ref._staticContext = true;
            }
            return true;
        }
        return false;
    }
    _visitStatements(statements : core.DartList<any>) : void {
        let beginStatementIndex : number = 0;
        let selectionCount : number = this.ref._selectionStatements.length;
        while (beginStatementIndex + selectionCount <= statements.length){
            let nodeRange : any = range.startEnd(statements[beginStatementIndex],statements[beginStatementIndex + selectionCount - 1]);
            let found : boolean = this._tryToFindOccurrence(nodeRange);
            if (found) {
                beginStatementIndex += selectionCount;
            }else {
                beginStatementIndex++;
            }
        }
    }
}

export namespace _InitializeParametersVisitor {
    export type Constructors = '_InitializeParametersVisitor';
    export type Interface = Omit<_InitializeParametersVisitor, Constructors>;
}
@DartClass
export class _InitializeParametersVisitor extends any {
    ref : ExtractMethodRefactoringImpl;

    assignedUsedVariables : core.DartList<any>;

    constructor(ref : ExtractMethodRefactoringImpl,assignedUsedVariables : core.DartList<any>) {
    }
    @defaultConstructor
    _InitializeParametersVisitor(ref : ExtractMethodRefactoringImpl,assignedUsedVariables : core.DartList<any>) {
        this.ref = ref;
        this.assignedUsedVariables = assignedUsedVariables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : void {
        let nodeRange : any = range.node(node);
        if (!this.ref.selectionRange.covers(nodeRange)) {
            return;
        }
        let name : string = node.name;
        let element : any = _getLocalElement(node);
        if (element != null) {
            if (isNamedExpressionName(node)) {
                return;
            }
            if (!this.ref._isDeclaredInSelection(element)) {
                let parameter : any = this.ref._parametersMap.get(name);
                if (op(Op.EQUALS,parameter,null)) {
                    let parameterType : any = node.bestType;
                    let parametersBuffer : core.DartStringBuffer = new core.DartStringBuffer();
                    let parameterTypeCode : string = this.ref.utils.getTypeSource(parameterType,this.ref.librariesToImport,{
                        parametersBuffer : parametersBuffer});
                    let parametersCode : string = parametersBuffer.isNotEmpty ? parametersBuffer.toString() : null;
                    parameter = new bare.createInstance(any,null,RefactoringMethodParameterKind.REQUIRED,parameterTypeCode,name,{
                        parameters : parametersCode,id : name});
                    this.ref._parameters.add(parameter);
                    this.ref._parametersMap.set(name,parameter);
                }
                this.ref._addParameterReference(name,nodeRange);
            }
            if (isLeftHandOfAssignment(node) && this.ref._isUsedAfterSelection(element)) {
                if (!this.assignedUsedVariables.contains(element)) {
                    this.assignedUsedVariables.add(element);
                }
            }
        }
        if (is(element, any)) {
            if (node.inDeclarationContext()) {
                this.ref._localNames.putIfAbsent(name,() =>  {
                    return new core.DartList.literal<any>();
                });
                this.ref._localNames.get(name).add(element.visibleRange);
            }
        }else {
            if (!node.isQualified) {
                this.ref._unqualifiedNames.add(name);
            }
        }
    }
}

export namespace _IsUsedAfterSelectionVisitor {
    export type Constructors = '_IsUsedAfterSelectionVisitor';
    export type Interface = Omit<_IsUsedAfterSelectionVisitor, Constructors>;
}
@DartClass
export class _IsUsedAfterSelectionVisitor extends any {
    ref : ExtractMethodRefactoringImpl;

    element : any;

    result : boolean;

    constructor(ref : ExtractMethodRefactoringImpl,element : any) {
    }
    @defaultConstructor
    _IsUsedAfterSelectionVisitor(ref : ExtractMethodRefactoringImpl,element : any) {
        this.result = false;
        this.ref = ref;
        this.element = element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        let nodeElement : any = node.staticElement;
        if (core.identical(nodeElement,this.element)) {
            let nodeOffset : number = node.offset;
            if (nodeOffset > this.ref.selectionRange.end) {
                this.result = true;
            }
        }
    }
}

export namespace _Occurrence {
    export type Constructors = '_Occurrence';
    export type Interface = Omit<_Occurrence, Constructors>;
}
@DartClass
export class _Occurrence {
    range : any;

    isSelection : boolean;

    _parameterOldToOccurrenceName : core.DartMap<string,string>;

    constructor(range : any,isSelection : boolean) {
    }
    @defaultConstructor
    _Occurrence(range : any,isSelection : boolean) {
        this._parameterOldToOccurrenceName = new core.DartMap.literal([
        ]);
        this.range = range;
        this.isSelection = isSelection;
    }
}

export namespace _ReturnTypeComputer {
    export type Constructors = '_ReturnTypeComputer';
    export type Interface = Omit<_ReturnTypeComputer, Constructors>;
}
@DartClass
export class _ReturnTypeComputer extends any {
    context : any;

    returnType : any;

    constructor(context : any) {
    }
    @defaultConstructor
    _ReturnTypeComputer(context : any) {
        this.context = context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBlockFunctionBody(node : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) {
        let expression : any = node.expression;
        if (op(Op.EQUALS,expression,null)) {
            return;
        }
        let type : any = expression.bestType;
        if (type.isBottom) {
            return;
        }
        if (op(Op.EQUALS,this.returnType,null)) {
            this.returnType = type;
        }else {
            if (is(this.returnType, any) && is(type, any)) {
                this.returnType = InterfaceType.getSmartLeastUpperBound(this.returnType,type);
            }else {
                this.returnType = this.context.typeSystem.getLeastUpperBound(this.returnType,type);
            }
        }
    }
}

export namespace _SourcePattern {
    export type Constructors = '_SourcePattern';
    export type Interface = Omit<_SourcePattern, Constructors>;
}
@DartClass
export class _SourcePattern {
    parameterTypes : core.DartList<any>;

    normalizedSource : string;

    originalToPatternNames : core.DartMap<string,string>;

    isCompatible(other : _SourcePattern) : boolean {
        if (other.normalizedSource != this.normalizedSource) {
            return false;
        }
        if (other.parameterTypes.length != this.parameterTypes.length) {
            return false;
        }
        for(let i : number = 0; i < this.parameterTypes.length; i++){
            if (other.parameterTypes[i] != this.parameterTypes[i]) {
                return false;
            }
        }
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    _SourcePattern() {
        this.parameterTypes = new core.DartList.literal<any>();
        this.originalToPatternNames = new core.DartMap.literal([
        ]);
    }
}

export class properties {
    private static __$_TOKEN_SEPARATOR : string;
    static get _TOKEN_SEPARATOR() : string { 
        if (this.__$_TOKEN_SEPARATOR===undefined) {
            this.__$_TOKEN_SEPARATOR = '￿';
        }
        return this.__$_TOKEN_SEPARATOR;
    }
    static set _TOKEN_SEPARATOR(__$value : string)  { 
        this.__$_TOKEN_SEPARATOR = __$value;
    }

}
