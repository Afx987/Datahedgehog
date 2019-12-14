/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/selection_analyzer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SelectionAnalyzer {
    export type Constructors = 'SelectionAnalyzer';
    export type Interface = Omit<SelectionAnalyzer, Constructors>;
}
@DartClass
export class SelectionAnalyzer extends any {
    selection : any;

    _coveringNode : any;

    _selectedNodes : core.DartList<any>;

    constructor(selection : any) {
    }
    @defaultConstructor
    SelectionAnalyzer(selection : any) {
        this.selection = selection;
    }
    get coveringNode() : any {
        return this._coveringNode;
    }
    get firstSelectedNode() : any {
        if (this._selectedNodes == null || this._selectedNodes.isEmpty) {
            return null;
        }
        return this._selectedNodes[0];
    }
    get hasSelectedNodes() : boolean {
        return this._selectedNodes != null && !this._selectedNodes.isEmpty;
    }
    get isFirstNode() : boolean {
        return this._selectedNodes == null;
    }
    get lastSelectedNode() : any {
        if (this._selectedNodes == null || this._selectedNodes.isEmpty) {
            return null;
        }
        return this._selectedNodes[this._selectedNodes.length - 1];
    }
    get selectedNodeRange() : any {
        if (this._selectedNodes == null || this._selectedNodes.isEmpty) {
            return null;
        }
        let firstNode : any = this._selectedNodes[0];
        let lastNode : any = this._selectedNodes[this._selectedNodes.length - 1];
        return range.startEnd(firstNode,lastNode);
    }
    get selectedNodes() : core.DartList<any> {
        if (this._selectedNodes == null || this._selectedNodes.isEmpty) {
            return new core.DartList.literal();
        }
        return this._selectedNodes;
    }
    handleFirstSelectedNode(node : any) : void {
        this._selectedNodes = new core.DartList.literal();
        this._selectedNodes.add(node);
    }
    handleNextSelectedNode(node : any) : void {
        if (op(Op.EQUALS,this.firstSelectedNode.parent,node.parent)) {
            this._selectedNodes.add(node);
        }
    }
    handleSelectionEndsIn(node : any) : void {
    }
    handleSelectionStartsIn(node : any) : void {
    }
    reset() : void {
        this._selectedNodes = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) : core.DartObject {
        let nodeRange : any = range.node(node);
        if (this.selection.covers(nodeRange)) {
            if (this.isFirstNode) {
                this.handleFirstSelectedNode(node);
            }else {
                this.handleNextSelectedNode(node);
            }
            return null;
        }else if (this.selection.coveredBy(nodeRange)) {
            this._coveringNode = node;
            node.visitChildren(this);
            return null;
        }else if (this.selection.startsIn(nodeRange)) {
            this.handleSelectionStartsIn(node);
            node.visitChildren(this);
            return null;
        }else if (this.selection.endsIn(nodeRange)) {
            this.handleSelectionEndsIn(node);
            node.visitChildren(this);
            return null;
        }
        return null;
    }
}

export class properties {
}
