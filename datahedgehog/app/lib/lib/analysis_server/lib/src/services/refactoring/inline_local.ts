/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/inline_local.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace InlineLocalRefactoringImpl {
    export type Constructors = 'InlineLocalRefactoringImpl';
    export type Interface = Omit<InlineLocalRefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class InlineLocalRefactoringImpl extends any implements any.Interface {
    searchEngine : any;

    astProvider : any;

    unit : any;

    offset : number;

    unitElement : any;

    utils : any;

    _variableElement : any;

    _variableNode : any;

    _references : core.DartList<any>;

    constructor(searchEngine : any,astProvider : any,unit : any,offset : number) {
    }
    @defaultConstructor
    InlineLocalRefactoringImpl(searchEngine : any,astProvider : any,unit : any,offset : number) {
        this.searchEngine = searchEngine;
        this.astProvider = astProvider;
        this.unit = unit;
        this.offset = offset;
        this.unitElement = this.unit.element;
        this.utils = new bare.createInstance(any,null,this.unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        return 'Inline Local Variable';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get referenceCount() : number {
        if (this._references == null) {
            return 0;
        }
        return this._references.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get variableName() : string {
        if (op(Op.EQUALS,this._variableElement,null)) {
            return null;
        }
        return this._variableElement.name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> {
        let result : any = new bare.createInstance(any,null);
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkInitialConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : any = new bare.createInstance(any,null);
            {
                let offsetNode : any = new bare.createInstance(any,null,this.offset).searchWithin(this.unit);
                if (is(offsetNode, any)) {
                    let element : any = offsetNode.staticElement;
                    if (is(element, any)) {
                        this._variableElement = element;
                        let name : any = await this.astProvider.getResolvedNameForElement(element);
                        this._variableNode = name.parent as any;
                    }
                }
            }
            if (!this._isVariableDeclaredInStatement()) {
                result = new bare.createInstance(any,null,'Local variable declaration or reference must be selected ' + 'to activate this refactoring.');
                return new async.Future.value(result);
            }
            if (op(Op.EQUALS,this._variableNode.initializer,null)) {
                let message : string = format("Local variable '{0}' is not initialized at declaration.",this._variableElement.displayName);
                result = new bare.createInstance(any,null,message,newLocation_fromNode(this._variableNode));
                return new async.Future.value(result);
            }
            this._references = await this.searchEngine.searchReferences(this._variableElement);
            for(let reference of this._references) {
                if (reference.kind != MatchKind.READ) {
                    let message : string = format("Local variable '{0}' is assigned more than once.",new core.DartList.literal(this._variableElement.displayName));
                    return new bare.createInstance(any,null,message,newLocation_fromMatch(reference));
                }
            }
            return result;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChange() : async.Future<any> {
        let change : any = new bare.createInstance(any,null,this.refactoringName);
        {
            let declarationStatement : any = this._variableNode.getAncestor((node : any) =>  {
                return is(node, any);
            });
            let range : any = this.utils.getLinesRangeStatements(new core.DartList.literal(declarationStatement));
            doSourceChange_addElementEdit(change,this.unitElement,newSourceEdit_range(range,''));
        }
        let initializer : any = this._variableNode.initializer;
        let initializerCode : string = this.utils.getNodeText(initializer);
        for(let reference of this._references) {
            let editRange : any = reference.sourceRange;
            let offset : number = editRange.offset;
            let node : any = this.utils.findNode(offset);
            let parent : any = node.parent;
            let codeForReference : string;
            if (is(parent, any)) {
                let target : any = parent.parent;
                if (is(initializer, any) && !initializer.isRaw && op(Op.EQUALS,initializer.isSingleQuoted,target.isSingleQuoted) && (!initializer.isMultiline || target.isMultiline)) {
                    editRange = range.node(parent);
                    let initOffset : number = initializer.contentsOffset;
                    let initLength : number = op(Op.MINUS,initializer.contentsEnd,initOffset);
                    codeForReference = this.utils.getText(initOffset,initLength);
                }else if (InlineLocalRefactoringImpl._shouldBeExpressionInterpolation(parent,initializer)) {
                    codeForReference = `{${initializerCode}}`;
                }else {
                    codeForReference = initializerCode;
                }
            }else if (InlineLocalRefactoringImpl._shouldUseParenthesis(initializer,node)) {
                codeForReference = `(${initializerCode})`;
            }else {
                codeForReference = initializerCode;
            }
            doSourceChange_addElementEdit(change,this.unitElement,newSourceEdit_range(editRange,codeForReference));
        }
        return new async.Future.value(change);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    requiresPreview() : boolean {
        return false;
    }
    _isVariableDeclaredInStatement() : boolean {
        if (op(Op.EQUALS,this._variableNode,null)) {
            return false;
        }
        let parent : any = this._variableNode.parent;
        if (is(parent, any)) {
            parent = parent.parent;
            if (is(parent, any)) {
                parent = parent.parent;
                return is(parent, any) || is(parent, any);
            }
        }
        return false;
    }
    static _shouldBeExpressionInterpolation(target : any,expression : any) : boolean {
        let targetType : any = target.beginToken.type;
        return op(Op.EQUALS,targetType,TokenType.STRING_INTERPOLATION_IDENTIFIER) && isNot(expression, any);
    }
    static _shouldUseParenthesis(init : any,node : any) : boolean {
        let initPrecedence : number = getExpressionPrecedence(init);
        if (initPrecedence < getExpressionParentPrecedence(node)) {
            return true;
        }
        let parent : any = node.parent;
        if (is(init, any) && is(parent, any)) {
            if (op(Op.EQUALS,parent.operator.type,TokenType.MINUS)) {
                let initializerOperator : any = init.operator.type;
                if (op(Op.EQUALS,initializerOperator,TokenType.MINUS) || op(Op.EQUALS,initializerOperator,TokenType.MINUS_MINUS)) {
                    return true;
                }
            }
        }
        return false;
    }
}

export class properties {
}
