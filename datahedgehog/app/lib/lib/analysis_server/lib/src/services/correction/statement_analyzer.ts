/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/statement_analyzer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var _getTokens : (text : string) => core.DartList<any> = (text : string) : core.DartList<any> =>  {
    try {
        let tokens : core.DartList<any> = new core.DartList.literal<any>();
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,text),null);
        let token : any = scanner.tokenize();
        while (token.type != TokenType.EOF){
            tokens.add(token);
            token = token.next;
        }
        return tokens;
    } catch (__error__) {

        {
            let e = __error__;
            return new core.DartList<any>(0);
        }
    }
};
export namespace StatementAnalyzer {
    export type Constructors = 'StatementAnalyzer';
    export type Interface = Omit<StatementAnalyzer, Constructors>;
}
@DartClass
export class StatementAnalyzer extends any {
    unit : any;

    _status : any;

    constructor(unit : any,selection : any) {
    }
    @defaultConstructor
    StatementAnalyzer(unit : any,selection : any) {
        this._status = new bare.createInstance(any,null);
        super.DartObject(selection);
        this.unit = unit;
    }
    get status() : any {
        return this._status;
    }
    invalidSelection(message : string,context? : any) : void {
        if (!this._status.hasFatalError) {
            this._status.addFatalError(message,context);
        }
        reset();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : core.DartObject {
        super.visitCompilationUnit(node);
        if (!hasSelectedNodes) {
            return null;
        }
        {
            let selectionStart : number = selection.offset;
            let selectionEnd : number = selection.end;
            let commentRanges : core.DartList<any> = getCommentRanges(this.unit);
            for(let commentRange of commentRanges) {
                if (commentRange.contains(selectionStart)) {
                    this.invalidSelection("Selection begins inside a comment.");
                }
                if (commentRange.containsExclusive(selectionEnd)) {
                    this.invalidSelection("Selection ends inside a comment.");
                }
            }
        }
        if (!this._status.hasFatalError) {
            this._checkSelectedNodes(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoStatement(node : any) : core.DartObject {
        super.visitDoStatement(node);
        let selectedNodes : core.DartList<any> = this.selectedNodes;
        if (StatementAnalyzer._contains(selectedNodes,node.body)) {
            this.invalidSelection("Operation not applicable to a 'do' statement's body and expression.");
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitForStatement(node : any) : core.DartObject {
        super.visitForStatement(node);
        let selectedNodes : core.DartList<any> = this.selectedNodes;
        let containsInit : boolean = StatementAnalyzer._contains(selectedNodes,node.initialization) || StatementAnalyzer._contains(selectedNodes,node.variables);
        let containsCondition : boolean = StatementAnalyzer._contains(selectedNodes,node.condition);
        let containsUpdaters : boolean = StatementAnalyzer._containsAny(selectedNodes,node.updaters);
        let containsBody : boolean = StatementAnalyzer._contains(selectedNodes,node.body);
        if (containsInit && containsCondition) {
            this.invalidSelection("Operation not applicable to a 'for' statement's initializer and condition.");
        }else if (containsCondition && containsUpdaters) {
            this.invalidSelection("Operation not applicable to a 'for' statement's condition and updaters.");
        }else if (containsUpdaters && containsBody) {
            this.invalidSelection("Operation not applicable to a 'for' statement's updaters and body.");
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSwitchStatement(node : any) : core.DartObject {
        super.visitSwitchStatement(node);
        let selectedNodes : core.DartList<any> = this.selectedNodes;
        let switchMembers : core.DartList<any> = node.members;
        for(let selectedNode of selectedNodes) {
            if (switchMembers.contains(selectedNode)) {
                this.invalidSelection("Selection must either cover whole switch statement or parts of a single case block.");
                break;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTryStatement(node : any) : core.DartObject {
        super.visitTryStatement(node);
        let firstSelectedNode : any = this.firstSelectedNode;
        if (firstSelectedNode != null) {
            if (op(Op.EQUALS,firstSelectedNode,node.body) || op(Op.EQUALS,firstSelectedNode,node.finallyBlock)) {
                this.invalidSelection("Selection must either cover whole try statement or parts of try, catch, or finally block.");
            }else {
                let catchClauses : core.DartList<any> = node.catchClauses;
                for(let catchClause of catchClauses) {
                    if (op(Op.EQUALS,firstSelectedNode,catchClause) || op(Op.EQUALS,firstSelectedNode,catchClause.body) || op(Op.EQUALS,firstSelectedNode,catchClause.exceptionParameter)) {
                        this.invalidSelection("Selection must either cover whole try statement or parts of try, catch, or finally block.");
                    }
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWhileStatement(node : any) : core.DartObject {
        super.visitWhileStatement(node);
        let selectedNodes : core.DartList<any> = this.selectedNodes;
        if (StatementAnalyzer._contains(selectedNodes,node.condition) && StatementAnalyzer._contains(selectedNodes,node.body)) {
            this.invalidSelection("Operation not applicable to a while statement's expression and body.");
        }
        return null;
    }
    _checkSelectedNodes(unit : any) : void {
        let nodes : core.DartList<any> = selectedNodes;
        {
            let firstNode : any = nodes[0];
            let rangeBeforeFirstNode : any = range.startOffsetEndOffset(selection.offset,firstNode.offset);
            if (this._hasTokens(rangeBeforeFirstNode)) {
                this.invalidSelection("The beginning of the selection contains characters that " + "do not belong to a statement.",newLocation_fromUnit(unit,rangeBeforeFirstNode));
            }
        }
        {
            let lastNode : any = nodes.last;
            let rangeAfterLastNode : any = range.startOffsetEndOffset(lastNode.end,selection.end);
            if (this._hasTokens(rangeAfterLastNode)) {
                this.invalidSelection("The end of the selection contains characters that " + "do not belong to a statement.",newLocation_fromUnit(unit,rangeAfterLastNode));
            }
        }
    }
    _hasTokens(range : any) : boolean {
        let unitElement : any = this.unit.element;
        let fullText : string = unitElement.context.getContents(unitElement.source).data;
        let rangeText : string = new core.DartString(fullText).substring(range.offset,range.end);
        return _getTokens(rangeText).isNotEmpty;
    }
    static _contains(nodes : core.DartList<any>,node : any) : boolean {
        return nodes.contains(node);
    }
    static _containsAny(nodes : core.DartList<any>,otherNodes : core.DartList<any>) : boolean {
        for(let otherNode of otherNodes) {
            if (nodes.contains(otherNode)) {
                return true;
            }
        }
        return false;
    }
}

export class properties {
}
