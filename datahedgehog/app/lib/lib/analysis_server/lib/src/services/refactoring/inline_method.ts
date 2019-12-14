/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/inline_method.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var _getLocalsConflictingRange : (node : any) => any = (node : any) : any =>  {
    let block : any = node.getAncestor((node : any) =>  {
        return is(node, any);
    });
    if (block != null) {
        return range.startEnd(node,block);
    }
    let executableNode : any = getEnclosingExecutableNode(node);
    if (executableNode != null) {
        return range.node(executableNode);
    }
    return SourceRange.EMPTY;
};
export var _getMethodSourceForInvocation : (status : any,part : _SourcePart,utils : any,contextNode : any,targetExpression : any,arguments : core.DartList<any>) => string = (status : any,part : _SourcePart,utils : any,contextNode : any,targetExpression : any,arguments : core.DartList<any>) : string =>  {
    let edits : core.DartList<any> = new core.DartList.literal<any>();
    part._parameters.forEach((parameter : any,occurrences : core.DartList<_ParameterOccurrence>) =>  {
        let argument : any = null;
        for(let arg of arguments) {
            if (op(Op.EQUALS,arg.bestParameterElement,parameter)) {
                argument = arg;
                break;
            }
        }
        if (is(argument, any)) {
            argument = (argument as any).expression;
        }
        let argumentPrecedence : number;
        let argumentSource : string;
        if (argument != null) {
            argumentPrecedence = getExpressionPrecedence(argument);
            argumentSource = utils.getNodeText(argument);
        }else {
            if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.REQUIRED)) {
                status.addError(`No argument for the parameter "${parameter.name}".`,newLocation_fromNode(contextNode));
                return;
            }
            argumentPrecedence = -1000;
            argumentSource = parameter.defaultValueCode;
            if (argumentSource == null) {
                argumentSource = 'null';
            }
        }
        for(let occurrence of occurrences) {
            let range : any = occurrence.range;
            let occurrenceArgumentSource : string;
            if (argumentPrecedence < occurrence.parentPrecedence) {
                occurrenceArgumentSource = `(${argumentSource})`;
            }else {
                occurrenceArgumentSource = argumentSource;
            }
            edits.add(newSourceEdit_range(range,occurrenceArgumentSource));
        }
    });
    part._implicitClassNameOffsets.forEach((className : string,offsets : core.DartList<number>) =>  {
        for(let offset of offsets) {
            edits.add(new bare.createInstance(any,null,offset,0,className + '.'));
        }
    });
    if (targetExpression != null) {
        let targetSource : string = utils.getNodeText(targetExpression);
        for(let offset of part._explicitThisOffsets) {
            edits.add(new bare.createInstance(any,null,offset,4,targetSource));
        }
        targetSource += '.';
        for(let offset of part._implicitThisOffsets) {
            edits.add(new bare.createInstance(any,null,offset,0,targetSource));
        }
    }
    let conflictingNames : core.DartSet<string> = _getNamesConflictingAt(contextNode);
    part._variables.forEach((variable : any,ranges : core.DartList<any>) =>  {
        let originalName : string = variable.displayName;
        let uniqueName : string;
        {
            uniqueName = originalName;
            let uniqueIndex : number = 2;
            while (conflictingNames.contains(uniqueName)){
                uniqueName = originalName + new core.DartInt(uniqueIndex).toString();
                uniqueIndex++;
            }
        }
        if (uniqueName != originalName) {
            for(let range of ranges) {
                edits.add(newSourceEdit_range(range,uniqueName));
            }
        }
    });
    edits.sort((a : any,b : any) =>  {
        return op(Op.MINUS,b.offset,a.offset);
    });
    return SourceEdit.applySequence(part._source,edits);
};
export var _getNamesConflictingAt : (node : any) => core.DartSet<string> = (node : any) : core.DartSet<string> =>  {
    let result : core.DartSet<string> = new core.DartSet<string>();
    {
        let localsRange : any = _getLocalsConflictingRange(node);
        let enclosingExecutable : any = getEnclosingExecutableElement(node);
        if (enclosingExecutable != null) {
            visitChildren(enclosingExecutable,(element : any) =>  {
                if (is(element, any)) {
                    let elementRange : any = element.visibleRange;
                    if (elementRange != null && elementRange.intersects(localsRange)) {
                        result.add(element.displayName);
                    }
                }
                return true;
            });
        }
    }
    {
        let enclosingClassElement : any = getEnclosingClassElement(node);
        if (enclosingClassElement != null) {
            let elements : core.DartSet<any> = new core.DartSet<any>();
            elements.add(enclosingClassElement);
            elements.addAll(getSuperClasses(enclosingClassElement));
            for(let classElement of elements) {
                let classMembers : core.DartList<any> = getChildren(classElement);
                for(let classMemberElement of classMembers) {
                    result.add(classMemberElement.displayName);
                }
            }
        }
    }
    return result;
};
export namespace InlineMethodRefactoringImpl {
    export type Constructors = 'InlineMethodRefactoringImpl';
    export type Interface = Omit<InlineMethodRefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class InlineMethodRefactoringImpl extends any implements any.Interface {
    searchEngine : any;

    astProvider : any;

    unit : any;

    offset : number;

    _unitCache : any;

    utils : any;

    change : any;

    isDeclaration : boolean;

    deleteSource : boolean;

    inlineAll : boolean;

    _methodElement : any;

    _isAccessor : boolean;

    _methodUnit : any;

    _methodUtils : any;

    _methodNode : any;

    _methodParameters : any;

    _methodBody : any;

    _methodExpression : any;

    _methodExpressionPart : _SourcePart;

    _methodStatementsPart : _SourcePart;

    _referenceProcessors : core.DartList<_ReferenceProcessor>;

    _alreadyMadeAsync : core.DartSet<any>;

    constructor(searchEngine : any,astProvider : any,unit : any,offset : number) {
    }
    @defaultConstructor
    InlineMethodRefactoringImpl(searchEngine : any,astProvider : any,unit : any,offset : number) {
        this.isDeclaration = false;
        this.deleteSource = false;
        this.inlineAll = true;
        this._referenceProcessors = new core.DartList.literal();
        this._alreadyMadeAsync = new core.DartSet<any>();
        this.searchEngine = searchEngine;
        this.astProvider = astProvider;
        this.unit = unit;
        this.offset = offset;
        this._unitCache = new bare.createInstance(any,null,this.astProvider,this.unit);
        this.utils = new bare.createInstance(any,null,this.unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get className() : string {
        if (op(Op.EQUALS,this._methodElement,null)) {
            return null;
        }
        let classElement : any = this._methodElement.enclosingElement;
        if (is(classElement, any)) {
            return classElement.displayName;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get methodName() : string {
        if (op(Op.EQUALS,this._methodElement,null)) {
            return null;
        }
        return this._methodElement.displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        if (is(this._methodElement, any)) {
            return "Inline Method";
        }else {
            return "Inline Function";
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> {
        this.change = new bare.createInstance(any,null,this.refactoringName);
        let result : any = new bare.createInstance(any,null);
        if (this.deleteSource && !this.inlineAll) {
            result.addError('All references must be inlined to remove the source.');
        }
        for(let processor of this._referenceProcessors) {
            processor._process(result);
        }
        if (this.deleteSource && this.inlineAll) {
            let methodRange : any = range.node(this._methodNode);
            let linesRange : any = this._methodUtils.getLinesRange(methodRange,{
                skipLeadingEmptyLines : true});
            doSourceChange_addElementEdit(this.change,this._methodElement,newSourceEdit_range(linesRange,''));
        }
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkInitialConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : any = new bare.createInstance(any,null);
            result.addStatus(await this._prepareMethod());
            if (result.hasFatalError) {
                return new async.Future.value(result);
            }
            if (this._methodElement.isOperator) {
                result = new bare.createInstance(any,null,'Cannot inline operator.');
                return new async.Future.value(result);
            }
            if (this._methodElement.isGenerator) {
                result = new bare.createInstance(any,null,'Cannot inline a generator.');
                return new async.Future.value(result);
            }
            result.addStatus(this._prepareMethodParts());
            let references : core.DartList<any> = await this.searchEngine.searchReferences(this._methodElement);
            this._referenceProcessors.clear();
            for(let reference of references) {
                let processor : _ReferenceProcessor = new _ReferenceProcessor(this,reference);
                await processor.init();
                this._referenceProcessors.add(processor);
            }
            return result;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChange() : async.Future<any> {
        return new async.Future.value(this.change);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    requiresPreview() : boolean {
        return false;
    }
    _computeFunctionDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this._unitCache.getUnit(this._methodElement);
            return new bare.createInstance(any,null,this._methodElement.nameOffset).searchWithin(unit).getAncestor((n : any) =>  {
                return is(n, any);
            }) as any;
        } )());
    }

    _computeMethodDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this._unitCache.getUnit(this._methodElement);
            return new bare.createInstance(any,null,this._methodElement.nameOffset).searchWithin(unit).getAncestor((n : any) =>  {
                return is(n, any);
            }) as any;
        } )());
    }

    _createSourcePart(range : any) : _SourcePart {
        let source : string = this._methodUtils.getRangeText(range);
        let prefix : string = getLinePrefix(source);
        let result : _SourcePart = new _SourcePart(range.offset,source,prefix);
        this._methodUnit.accept(new _VariablesVisitor(this._methodElement,range,result));
        return result;
    }
    _prepareMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._methodElement = null;
            this._methodParameters = null;
            this._methodBody = null;
            this.deleteSource = false;
            this.inlineAll = false;
            let fatalStatus : any = new bare.createInstance(any,null,'Method declaration or reference must be selected to activate this refactoring.');
            let node : any = new bare.createInstance(any,null,this.offset).searchWithin(this.unit);
            if (isNot(node, any)) {
                return fatalStatus;
            }
            let identifier : any = node as any;
            let element : any = identifier.bestElement;
            if (isNot(element, any)) {
                return fatalStatus;
            }
            if (element.isSynthetic) {
                return fatalStatus;
            }
            this._methodElement = element as any;
            this._isAccessor = is(element, any);
            this._methodUnit = await this._unitCache.getUnit(element);
            this._methodUtils = new bare.createInstance(any,null,this._methodUnit);
            let isClassMember : boolean = is(element.enclosingElement, any);
            if (is(element, any) || this._isAccessor && isClassMember) {
                let methodDeclaration : any = await this._computeMethodDeclaration();
                this._methodNode = methodDeclaration;
                this._methodParameters = methodDeclaration.parameters;
                this._methodBody = methodDeclaration.body;
                this.isDeclaration = op(Op.EQUALS,node,methodDeclaration.name);
                this.deleteSource = this.isDeclaration;
                this.inlineAll = this.deleteSource;
                return new bare.createInstance(any,null);
            }
            let isUnitMember : boolean = is(element.enclosingElement, any);
            if (is(element, any) || this._isAccessor && isUnitMember) {
                let functionDeclaration : any = await this._computeFunctionDeclaration();
                this._methodNode = functionDeclaration;
                this._methodParameters = functionDeclaration.functionExpression.parameters;
                this._methodBody = functionDeclaration.functionExpression.body;
                this.isDeclaration = op(Op.EQUALS,node,functionDeclaration.name);
                this.deleteSource = this.isDeclaration;
                this.inlineAll = this.deleteSource;
                return new bare.createInstance(any,null);
            }
            return fatalStatus;
        } )());
    }

    _prepareMethodParts() : any {
        let result : any = new bare.createInstance(any,null);
        if (is(this._methodBody, any)) {
            let body : any = this._methodBody as any;
            this._methodExpression = body.expression;
            let methodExpressionRange : any = range.node(this._methodExpression);
            this._methodExpressionPart = this._createSourcePart(methodExpressionRange);
        }else if (is(this._methodBody, any)) {
            let body : any = (this._methodBody as any).block;
            let statements : core.DartList<any> = body.statements;
            if (statements.length >= 1) {
                let lastStatement : any = statements[statements.length - 1];
                if (is(lastStatement, any)) {
                    this._methodExpression = lastStatement.expression;
                    let methodExpressionRange : any = range.node(this._methodExpression);
                    this._methodExpressionPart = this._createSourcePart(methodExpressionRange);
                    statements = statements.sublist(0,statements.length - 1);
                }
                if (!statements.isEmpty) {
                    let statementsRange : any = this._methodUtils.getLinesRangeStatements(statements);
                    this._methodStatementsPart = this._createSourcePart(statementsRange);
                }
            }
            body.accept(new _ReturnsValidatorVisitor(result));
        }else {
            return new bare.createInstance(any,null,'Cannot inline method without body.');
        }
        return result;
    }
}

export namespace _ParameterOccurrence {
    export type Constructors = '_ParameterOccurrence';
    export type Interface = Omit<_ParameterOccurrence, Constructors>;
}
@DartClass
export class _ParameterOccurrence {
    parentPrecedence : number;

    range : any;

    constructor(parentPrecedence : number,range : any) {
    }
    @defaultConstructor
    _ParameterOccurrence(parentPrecedence : number,range : any) {
        this.parentPrecedence = parentPrecedence;
        this.range = range;
    }
}

export namespace _ReferenceProcessor {
    export type Constructors = '_ReferenceProcessor';
    export type Interface = Omit<_ReferenceProcessor, Constructors>;
}
@DartClass
export class _ReferenceProcessor {
    ref : InlineMethodRefactoringImpl;

    reference : any;

    refElement : any;

    _refUtils : any;

    _node : any;

    _refLineRange : any;

    _refPrefix : string;

    constructor(ref : InlineMethodRefactoringImpl,reference : any) {
    }
    @defaultConstructor
    _ReferenceProcessor(ref : InlineMethodRefactoringImpl,reference : any) {
        this.ref = ref;
        this.reference = reference;
    }
    init() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.refElement = this.reference.element;
            let refUnit : any = await this.ref._unitCache.getUnit(this.refElement);
            this._refUtils = new bare.createInstance(any,null,refUnit);
            this._node = this._refUtils.findNode(this.reference.sourceRange.offset);
            let refStatement : any = this._node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (refStatement != null) {
                this._refLineRange = this._refUtils.getLinesRangeStatements(new core.DartList.literal(refStatement));
                this._refPrefix = this._refUtils.getNodePrefix(refStatement);
            }else {
                this._refLineRange = null;
                this._refPrefix = this._refUtils.getLinePrefix(this._node.offset);
            }
        } )());
    }

    _addRefEdit(edit : any) : void {
        doSourceChange_addElementEdit(this.ref.change,this.refElement,edit);
    }
    _canInlineBody(usage : any) : boolean {
        if (op(Op.EQUALS,this.ref._methodStatementsPart,null)) {
            if (op(Op.EQUALS,this.ref._methodExpressionPart,null)) {
                return false;
            }
            return true;
        }
        let parent : any = usage.parent;
        let parent2 : any = parent.parent;
        if (is(parent, any)) {
            return is(parent2, any);
        }
        if (is(parent, any)) {
            let assignment : any = parent;
            if (op(Op.EQUALS,assignment.leftHandSide,usage)) {
                return is(parent2, any) && is(parent2.parent, any);
            }
            return this.ref._methodExpressionPart != null;
        }
        if (this.ref._methodExpressionPart != null) {
            if (is(parent, any)) {
                if (is(parent2, any)) {
                    let parent3 : any = parent2.parent;
                    return is(parent3, any) && is(parent3.parent, any);
                }
            }
        }
        return false;
    }
    _inlineMethodInvocation(status : any,usage : any,cascaded : boolean,target : any,arguments : core.DartList<any>) : void {
        if (cascaded) {
            status.addError('Cannot inline cascade invocation.',newLocation_fromNode(usage));
        }
        if (this._canInlineBody(usage)) {
            if (this.ref._methodStatementsPart != null) {
                let source : string = _getMethodSourceForInvocation(status,this.ref._methodStatementsPart,this._refUtils,usage,target,arguments);
                source = this._refUtils.replaceSourceIndent(source,this.ref._methodStatementsPart._prefix,this._refPrefix);
                let edit : any = newSourceEdit_range(new bare.createInstance(any,null,this._refLineRange.offset,0),source);
                this._addRefEdit(edit);
            }
            if (this.ref._methodExpressionPart != null) {
                let source : string = _getMethodSourceForInvocation(status,this.ref._methodExpressionPart,this._refUtils,usage,target,arguments);
                if (op(Op.LT,getExpressionPrecedence(this.ref._methodExpression),getExpressionParentPrecedence(usage))) {
                    source = `(${source})`;
                }
                let methodUsageRange : any = range.node(usage);
                let edit : any = newSourceEdit_range(methodUsageRange,source);
                this._addRefEdit(edit);
            }else {
                let edit : any = newSourceEdit_range(this._refLineRange,"");
                this._addRefEdit(edit);
            }
            return;
        }
        let source : string;
        {
            source = this.ref._methodUtils.getRangeText(range.startEnd(this.ref._methodParameters.leftParenthesis,this.ref._methodNode));
            let methodPrefix : string = this.ref._methodUtils.getLinePrefix(this.ref._methodNode.offset);
            source = this._refUtils.replaceSourceIndent(source,methodPrefix,this._refPrefix);
            source = new core.DartString(source).trim();
        }
        let edit : any = newSourceEdit_range(range.node(this._node),source);
        this._addRefEdit(edit);
    }
    _process(status : any) : void {
        let nodeParent : any = this._node.parent;
        if (!this._shouldProcess()) {
            return;
        }
        if (this.ref._methodElement.isAsynchronous) {
            let body : any = this._node.getAncestor((n : any) =>  {
                return is(n, any);
            });
            if (body != null) {
                if (body.isSynchronous) {
                    if (body.isGenerator) {
                        status.addFatalError('Cannot inline async into sync*.',newLocation_fromNode(this._node));
                        return;
                    }
                    if (is(this.refElement, any)) {
                        let executable = this.refElement as any;
                        if (!executable.returnType.isDartAsyncFuture) {
                            status.addFatalError('Cannot inline async into a function that does not return a Future.',newLocation_fromNode(this._node));
                            return;
                        }
                    }
                    if (this.ref._alreadyMadeAsync.add(body)) {
                        let bodyStart : any = range.startLength(body,0);
                        this._addRefEdit(newSourceEdit_range(bodyStart,'async '));
                    }
                }
            }
        }
        if (is(nodeParent, any)) {
            let invocation : any = nodeParent;
            let target : any = invocation.target;
            let arguments : core.DartList<any> = invocation.argumentList.arguments;
            this._inlineMethodInvocation(status,invocation,invocation.isCascaded,target,arguments);
        }else {
            if (is(this.ref._methodElement, any)) {
                status.addFatalError('Cannot inline class method reference.',newLocation_fromNode(this._node));
                return;
            }
            if (is(this.ref._methodElement, any)) {
                let usage : any = this._node;
                let target : any = null;
                let cascade : boolean = false;
                if (is(nodeParent, any)) {
                    let propertyAccess : any = nodeParent;
                    usage = propertyAccess;
                    target = propertyAccess.prefix;
                    cascade = false;
                }
                if (is(nodeParent, any)) {
                    let propertyAccess : any = nodeParent;
                    usage = propertyAccess;
                    target = propertyAccess.realTarget;
                    cascade = propertyAccess.isCascaded;
                }
                let arguments : core.DartList<any> = new core.DartList.literal();
                if (this._node.inSetterContext()) {
                    let assignment : any = this._node.getAncestor((node : any) =>  {
                        return is(node, any);
                    });
                    arguments.add(assignment.rightHandSide);
                }
                this._inlineMethodInvocation(status,usage,cascade,target,arguments);
                return;
            }
            let source : string;
            {
                source = this.ref._methodUtils.getRangeText(range.startEnd(this.ref._methodParameters.leftParenthesis,this.ref._methodNode));
                let methodPrefix : string = this.ref._methodUtils.getLinePrefix(this.ref._methodNode.offset);
                source = this._refUtils.replaceSourceIndent(source,methodPrefix,this._refPrefix);
                source = new core.DartString(source).trim();
                source = removeEnd(source,';');
            }
            let edit : any = newSourceEdit_range(range.node(this._node),source);
            this._addRefEdit(edit);
        }
    }
    _shouldProcess() : boolean {
        if (!this.ref.inlineAll) {
            let parentRange : any = range.node(this._node);
            return parentRange.contains(this.ref.offset);
        }
        return true;
    }
}

export namespace _ReturnsValidatorVisitor {
    export type Constructors = '_ReturnsValidatorVisitor';
    export type Interface = Omit<_ReturnsValidatorVisitor, Constructors>;
}
@DartClass
export class _ReturnsValidatorVisitor extends any {
    result : any;

    _numReturns : number;

    constructor(result : any) {
    }
    @defaultConstructor
    _ReturnsValidatorVisitor(result : any) {
        this._numReturns = 0;
        this.result = result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitReturnStatement(node : any) {
        this._numReturns++;
        if (this._numReturns == 2) {
            this.result.addError('Ambiguous return value.',newLocation_fromNode(node));
        }
    }
}

export namespace _SourcePart {
    export type Constructors = '_SourcePart';
    export type Interface = Omit<_SourcePart, Constructors>;
}
@DartClass
export class _SourcePart {
    _base : number;

    _source : string;

    _prefix : string;

    _parameters : core.DartMap<any,core.DartList<_ParameterOccurrence>>;

    _variables : core.DartMap<any,core.DartList<any>>;

    _explicitThisOffsets : core.DartList<number>;

    _implicitThisOffsets : core.DartList<number>;

    _implicitClassNameOffsets : core.DartMap<string,core.DartList<number>>;

    constructor(_base : number,_source : string,_prefix : string) {
    }
    @defaultConstructor
    _SourcePart(_base : number,_source : string,_prefix : string) {
        this._parameters = new core.DartMap.literal([
        ]);
        this._variables = new core.DartMap.literal([
        ]);
        this._explicitThisOffsets = new core.DartList.literal();
        this._implicitThisOffsets = new core.DartList.literal();
        this._implicitClassNameOffsets = new core.DartMap.literal([
        ]);
        this._base = _base;
        this._source = _source;
        this._prefix = _prefix;
    }
    addExplicitThisOffset(offset : number) : void {
        this._explicitThisOffsets.add(offset - this._base);
    }
    addImplicitClassNameOffset(className : string,offset : number) : void {
        let offsets : core.DartList<number> = this._implicitClassNameOffsets.get(className);
        if (offsets == null) {
            offsets = new core.DartList.literal();
            this._implicitClassNameOffsets.set(className,offsets);
        }
        offsets.add(offset - this._base);
    }
    addImplicitThisOffset(offset : number) : void {
        this._implicitThisOffsets.add(offset - this._base);
    }
    addParameterOccurrence(parameter : any,identifierRange : any,precedence : number) : void {
        if (parameter != null) {
            let occurrences : core.DartList<_ParameterOccurrence> = this._parameters.get(parameter);
            if (occurrences == null) {
                occurrences = new core.DartList.literal();
                this._parameters.set(parameter,occurrences);
            }
            identifierRange = range.offsetBy(identifierRange,-this._base);
            occurrences.add(new _ParameterOccurrence(precedence,identifierRange));
        }
    }
    addVariable(element : any,identifierRange : any) : void {
        let ranges : core.DartList<any> = this._variables.get(element);
        if (ranges == null) {
            ranges = new core.DartList.literal();
            this._variables.set(element,ranges);
        }
        identifierRange = range.offsetBy(identifierRange,-this._base);
        ranges.add(identifierRange);
    }
}

export namespace _VariablesVisitor {
    export type Constructors = '_VariablesVisitor';
    export type Interface = Omit<_VariablesVisitor, Constructors>;
}
@DartClass
export class _VariablesVisitor extends any {
    methodElement : any;

    bodyRange : any;

    result : _SourcePart;

    offset : number;

    constructor(methodElement : any,bodyRange : any,result : _SourcePart) {
    }
    @defaultConstructor
    _VariablesVisitor(methodElement : any,bodyRange : any,result : _SourcePart) {
        this.methodElement = methodElement;
        this.bodyRange = bodyRange;
        this.result = result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) {
        let nodeRange : any = range.node(node);
        if (!this.bodyRange.intersects(nodeRange)) {
            return null;
        }
        super.visitNode(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        let nodeRange : any = range.node(node);
        if (this.bodyRange.covers(nodeRange)) {
            this._addMemberQualifier(node);
            this._addParameter(node);
            this._addVariable(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitThisExpression(node : any) {
        let offset : number = node.offset;
        if (this.bodyRange.contains(offset)) {
            this.result.addExplicitThisOffset(offset);
        }
    }
    _addMemberQualifier(node : any) : void {
        let qualifier : any = getNodeQualifier(node);
        if (qualifier != null) {
            return;
        }
        let element : any = node.staticElement;
        if (!(is(element, any) || is(element, any))) {
            return;
        }
        if (isNot(element.enclosingElement, any)) {
            return;
        }
        let member : any = element;
        let offset : number = node.offset;
        if (member.isStatic) {
            let className : string = member.enclosingElement.displayName;
            this.result.addImplicitClassNameOffset(className,offset);
        }else {
            this.result.addImplicitThisOffset(offset);
        }
    }
    _addParameter(node : any) : void {
        let parameterElement : any = getParameterElement(node);
        if (op(Op.EQUALS,parameterElement,null)) {
            return;
        }
        if (!this.methodElement.parameters.contains(parameterElement)) {
            return;
        }
        let nodeRange : any = range.node(node);
        let parentPrecedence : number = getExpressionParentPrecedence(node);
        this.result.addParameterOccurrence(parameterElement,nodeRange,parentPrecedence);
    }
    _addVariable(node : any) : void {
        let variableElement : any = getLocalVariableElement(node);
        if (variableElement != null) {
            let nodeRange : any = range.node(node);
            this.result.addVariable(variableElement,nodeRange);
        }
    }
}

export class properties {
}
