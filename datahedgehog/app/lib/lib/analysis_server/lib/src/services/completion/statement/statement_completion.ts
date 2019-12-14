/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/statement/statement_completion.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export namespace DartStatementCompletion {
    export type Constructors = 'DartStatementCompletion';
    export type Interface = Omit<DartStatementCompletion, Constructors>;
}
@DartClass
export class DartStatementCompletion {
    private static __$NO_COMPLETION;
    static get NO_COMPLETION() { 
        if (this.__$NO_COMPLETION===undefined) {
            this.__$NO_COMPLETION = new StatementCompletionKind('No_COMPLETION','No completion available');
        }
        return this.__$NO_COMPLETION;
    }

    private static __$SIMPLE_ENTER;
    static get SIMPLE_ENTER() { 
        if (this.__$SIMPLE_ENTER===undefined) {
            this.__$SIMPLE_ENTER = new StatementCompletionKind('SIMPLE_ENTER',"Insert a newline at the end of the current line");
        }
        return this.__$SIMPLE_ENTER;
    }

    private static __$SIMPLE_SEMICOLON;
    static get SIMPLE_SEMICOLON() { 
        if (this.__$SIMPLE_SEMICOLON===undefined) {
            this.__$SIMPLE_SEMICOLON = new StatementCompletionKind('SIMPLE_SEMICOLON',"Add a semicolon and newline");
        }
        return this.__$SIMPLE_SEMICOLON;
    }

    private static __$COMPLETE_CLASS_DECLARATION;
    static get COMPLETE_CLASS_DECLARATION() { 
        if (this.__$COMPLETE_CLASS_DECLARATION===undefined) {
            this.__$COMPLETE_CLASS_DECLARATION = new StatementCompletionKind('COMPLETE_CLASS_DECLARATION',"Complete class declaration");
        }
        return this.__$COMPLETE_CLASS_DECLARATION;
    }

    private static __$COMPLETE_CONTROL_FLOW_BLOCK;
    static get COMPLETE_CONTROL_FLOW_BLOCK() { 
        if (this.__$COMPLETE_CONTROL_FLOW_BLOCK===undefined) {
            this.__$COMPLETE_CONTROL_FLOW_BLOCK = new StatementCompletionKind('COMPLETE_CONTROL_FLOW_BLOCK',"Complete control flow block");
        }
        return this.__$COMPLETE_CONTROL_FLOW_BLOCK;
    }

    private static __$COMPLETE_DO_STMT;
    static get COMPLETE_DO_STMT() { 
        if (this.__$COMPLETE_DO_STMT===undefined) {
            this.__$COMPLETE_DO_STMT = new StatementCompletionKind('COMPLETE_DO_STMT',"Complete do-statement");
        }
        return this.__$COMPLETE_DO_STMT;
    }

    private static __$COMPLETE_IF_STMT;
    static get COMPLETE_IF_STMT() { 
        if (this.__$COMPLETE_IF_STMT===undefined) {
            this.__$COMPLETE_IF_STMT = new StatementCompletionKind('COMPLETE_IF_STMT',"Complete if-statement");
        }
        return this.__$COMPLETE_IF_STMT;
    }

    private static __$COMPLETE_FOR_STMT;
    static get COMPLETE_FOR_STMT() { 
        if (this.__$COMPLETE_FOR_STMT===undefined) {
            this.__$COMPLETE_FOR_STMT = new StatementCompletionKind('COMPLETE_FOR_STMT',"Complete for-statement");
        }
        return this.__$COMPLETE_FOR_STMT;
    }

    private static __$COMPLETE_FOR_EACH_STMT;
    static get COMPLETE_FOR_EACH_STMT() { 
        if (this.__$COMPLETE_FOR_EACH_STMT===undefined) {
            this.__$COMPLETE_FOR_EACH_STMT = new StatementCompletionKind('COMPLETE_FOR_EACH_STMT',"Complete for-each-statement");
        }
        return this.__$COMPLETE_FOR_EACH_STMT;
    }

    private static __$COMPLETE_FUNCTION_DECLARATION;
    static get COMPLETE_FUNCTION_DECLARATION() { 
        if (this.__$COMPLETE_FUNCTION_DECLARATION===undefined) {
            this.__$COMPLETE_FUNCTION_DECLARATION = new StatementCompletionKind('COMPLETE_FUNCTION_DECLARATION',"Complete function declaration");
        }
        return this.__$COMPLETE_FUNCTION_DECLARATION;
    }

    private static __$COMPLETE_SWITCH_STMT;
    static get COMPLETE_SWITCH_STMT() { 
        if (this.__$COMPLETE_SWITCH_STMT===undefined) {
            this.__$COMPLETE_SWITCH_STMT = new StatementCompletionKind('COMPLETE_SWITCH_STMT',"Complete switch-statement");
        }
        return this.__$COMPLETE_SWITCH_STMT;
    }

    private static __$COMPLETE_TRY_STMT;
    static get COMPLETE_TRY_STMT() { 
        if (this.__$COMPLETE_TRY_STMT===undefined) {
            this.__$COMPLETE_TRY_STMT = new StatementCompletionKind('COMPLETE_TRY_STMT',"Complete try-statement");
        }
        return this.__$COMPLETE_TRY_STMT;
    }

    private static __$COMPLETE_VARIABLE_DECLARATION;
    static get COMPLETE_VARIABLE_DECLARATION() { 
        if (this.__$COMPLETE_VARIABLE_DECLARATION===undefined) {
            this.__$COMPLETE_VARIABLE_DECLARATION = new StatementCompletionKind('COMPLETE_VARIABLE_DECLARATION',"Complete variable declaration");
        }
        return this.__$COMPLETE_VARIABLE_DECLARATION;
    }

    private static __$COMPLETE_WHILE_STMT;
    static get COMPLETE_WHILE_STMT() { 
        if (this.__$COMPLETE_WHILE_STMT===undefined) {
            this.__$COMPLETE_WHILE_STMT = new StatementCompletionKind('COMPLETE_WHILE_STMT',"Complete while-statement");
        }
        return this.__$COMPLETE_WHILE_STMT;
    }

    constructor() {
    }
    @defaultConstructor
    DartStatementCompletion() {
    }
}

export namespace StatementCompletion {
    export type Constructors = 'StatementCompletion';
    export type Interface = Omit<StatementCompletion, Constructors>;
}
@DartClass
export class StatementCompletion {
    kind : StatementCompletionKind;

    change : any;

    constructor(kind : StatementCompletionKind,change : any) {
    }
    @defaultConstructor
    StatementCompletion(kind : StatementCompletionKind,change : any) {
        this.kind = kind;
        this.change = change;
    }
}

export namespace StatementCompletionContext {
    export type Constructors = 'StatementCompletionContext';
    export type Interface = Omit<StatementCompletionContext, Constructors>;
}
@DartClass
export class StatementCompletionContext {
    file : string;

    lineInfo : any;

    selectionOffset : number;

    unit : any;

    unitElement : any;

    errors : core.DartList<any>;

    constructor(file : string,lineInfo : any,selectionOffset : number,unit : any,unitElement : any,errors : core.DartList<any>) {
    }
    @defaultConstructor
    StatementCompletionContext(file : string,lineInfo : any,selectionOffset : number,unit : any,unitElement : any,errors : core.DartList<any>) {
        this.file = file;
        this.lineInfo = lineInfo;
        this.selectionOffset = selectionOffset;
        this.unit = unit;
        this.unitElement = unitElement;
        this.errors = errors;
        if (op(Op.EQUALS,this.unitElement.context,null)) {
            throw new core.DartError();
        }
    }
}

export namespace StatementCompletionKind {
    export type Constructors = 'StatementCompletionKind';
    export type Interface = Omit<StatementCompletionKind, Constructors>;
}
@DartClass
export class StatementCompletionKind {
    name : string;

    message : string;

    constructor(name : string,message : string) {
    }
    @defaultConstructor
    StatementCompletionKind(name : string,message : string) {
        this.name = name;
        this.message = message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace StatementCompletionProcessor {
    export type Constructors = 'StatementCompletionProcessor';
    export type Interface = Omit<StatementCompletionProcessor, Constructors>;
}
@DartClass
export class StatementCompletionProcessor {
    private static __$NO_COMPLETION;
    static get NO_COMPLETION() { 
        if (this.__$NO_COMPLETION===undefined) {
            this.__$NO_COMPLETION = new StatementCompletion(DartStatementCompletion.NO_COMPLETION,new bare.createInstance(any,null,"",{
                edits : new core.DartList.literal()}));
        }
        return this.__$NO_COMPLETION;
    }
    static set NO_COMPLETION(__$value : any)  { 
        this.__$NO_COMPLETION = __$value;
    }

    statementContext : StatementCompletionContext;

    analysisContext : any;

    utils : any;

    fileStamp : number;

    node : any;

    completion : StatementCompletion;

    change : any;

    errors : core.DartList<any>;

    linkedPositionGroups : core.DartMap<string,any>;

    exitPosition : any;

    constructor(statementContext : StatementCompletionContext) {
    }
    @defaultConstructor
    StatementCompletionProcessor(statementContext : StatementCompletionContext) {
        this.change = new bare.createInstance(any,null,'statement-completion');
        this.errors = new core.DartList.literal<any>();
        this.linkedPositionGroups = new core.DartMap.literal([
        ]);
        this.exitPosition = null;
        this.analysisContext = statementContext.unitElement.context;
        this.utils = new bare.createInstance(any,null,statementContext.unit);
        this.statementContext = statementContext;
        this.fileStamp = this.analysisContext.getModificationStamp(this.source);
    }
    get eol() : string {
        return this.utils.endOfLine;
    }
    get file() : string {
        return this.statementContext.file;
    }
    get lineInfo() : any {
        return this.statementContext.lineInfo;
    }
    get requestLine() : number {
        return this.lineInfo.getLocation(this.selectionOffset).lineNumber;
    }
    get selectionOffset() : number {
        return this.statementContext.selectionOffset;
    }
    get source() : any {
        return this.statementContext.unitElement.source;
    }
    get unit() : any {
        return this.statementContext.unit;
    }
    get unitElement() : any {
        return this.statementContext.unitElement;
    }
    compute() : async.Future<StatementCompletion> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.analysisContext.getModificationStamp(this.source) != this.fileStamp) {
                return StatementCompletionProcessor.NO_COMPLETION;
            }
            this.node = this._selectedNode();
            if (op(Op.EQUALS,this.node,null)) {
                return StatementCompletionProcessor.NO_COMPLETION;
            }
            this.node = this.node.getAncestor((n : any) =>  {
                return is(n, any) || this._isNonStatementDeclaration(n);
            });
            if (op(Op.EQUALS,this.node,null)) {
                return this._complete_simpleEnter() ? this.completion : StatementCompletionProcessor.NO_COMPLETION;
            }
            if (is(this.node, any)) {
                let blockNode : any = this.node;
                if (blockNode.statements.isNotEmpty) {
                    this.node = blockNode.statements.last;
                }
            }
            if (this._isEmptyStatement(this.node)) {
                this.node = this.node.parent;
            }
            for(let error of this.statementContext.errors) {
                if (op(Op.GEQ,error.offset,this.node.offset) && op(Op.LEQ,error.offset,op(Op.PLUS,this.node.offset,this.node.length))) {
                    if (isNot(error.errorCode, any)) {
                        this.errors.add(error);
                    }
                }
            }
            this._checkExpressions();
            if (is(this.node, any)) {
                if (this.errors.isEmpty) {
                    if (this._complete_ifStatement() || this._complete_forStatement() || this._complete_forEachStatement() || this._complete_whileStatement() || this._complete_controlFlowBlock()) {
                        return this.completion;
                    }
                }else {
                    if (this._complete_ifStatement() || this._complete_doStatement() || this._complete_forStatement() || this._complete_forEachStatement() || this._complete_functionDeclarationStatement() || this._complete_switchStatement() || this._complete_tryStatement() || this._complete_whileStatement() || this._complete_controlFlowBlock() || this._complete_simpleSemicolon() || this._complete_methodCall()) {
                        return this.completion;
                    }
                }
            }else if (is(this.node, any)) {
                if (this.errors.isNotEmpty) {
                    if (this._complete_classDeclaration() || this._complete_functionDeclaration() || this._complete_variableDeclaration()) {
                        return this.completion;
                    }
                }
            }
            if (this._complete_simpleEnter()) {
                return this.completion;
            }
            return StatementCompletionProcessor.NO_COMPLETION;
        } )());
    }

    _addInsertEdit(offset : number,text : string) : void {
        let edit : any = new bare.createInstance(any,null,offset,0,text);
        doSourceChange_addElementEdit(this.change,this.unitElement,edit);
    }
    _addReplaceEdit(range : any,text : string) : void {
        let edit : any = new bare.createInstance(any,null,range.offset,range.length,text);
        doSourceChange_addElementEdit(this.change,this.unitElement,edit);
    }
    _appendEmptyBraces(sb : any,needsExitMark? : boolean) : void {
        needsExitMark = needsExitMark || false;
        sb.append('{');
        sb.append(this.eol);
        let indent : string = this.utils.getLinePrefix(this.selectionOffset);
        sb.append(indent);
        sb.append(this.utils.getIndent(1));
        if (needsExitMark && op(Op.EQUALS,sb.exitOffset,null)) {
            sb.setExitOffset();
        }
        sb.append(this.eol);
        sb.append(indent);
        sb.append('}');
    }
    _appendNewlinePlusIndent() : number {
        return this._appendNewlinePlusIndentAt(this.selectionOffset);
    }
    _appendNewlinePlusIndentAt(offset : number) : number {
        let indent : string = this.utils.getLinePrefix(offset);
        let loc : number = this.utils.getLineNext(offset);
        this._addInsertEdit(loc,indent + this.eol);
        return loc + new core.DartString(indent).length;
    }
    _baseNodeText(astNode : any) : string {
        let text : string = this.utils.getNodeText(astNode);
        if (new core.DartString(text).endsWith(this.eol)) {
            text = new core.DartString(text).substring(0,new core.DartString(text).length - new core.DartString(this.eol).length);
        }
        return text;
    }
    _checkExpressions() : void {
        var errorMatching : (errorCode : any,_namedArguments? : {partialMatch? : any}) => any = (errorCode : any,_namedArguments? : {partialMatch? : any}) : any =>  {
            let {partialMatch} = Object.assign({
                "partialMatch" : null}, _namedArguments );
            let error = this._findError(errorCode,{
                partialMatch : partialMatch});
            if (op(Op.EQUALS,error,null)) {
                return null;
            }
            let expr : any = this._selectedNode();
            return (op(Op.EQUALS,expr.getAncestor((n : any) =>  {
                return is(n, any);
            }),null)) ? expr : null;
        };
        let expr = errorMatching(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
        if (expr != null) {
            let source : string = this.utils.getNodeText(expr);
            let content : string = source;
            let char : number = new core.DartString(content).codeUnitAt(0);
            if (char == new core.DartString('r').codeUnitAt(0)) {
                content = new core.DartString(source).substring(1);
                char = new core.DartString(content).codeUnitAt(0);
            }
            let delimiter : string;
            let loc : number;
            if (new core.DartString(content).length >= 3 && char == new core.DartString(content).codeUnitAt(1) && char == new core.DartString(content).codeUnitAt(2)) {
                delimiter = new core.DartString(content).substring(0,3);
                let newlineLoc : number = new core.DartString(source).indexOf(this.eol,this.selectionOffset - expr.offset);
                if (newlineLoc < 0) {
                    newlineLoc = new core.DartString(source).length;
                }
                loc = newlineLoc + expr.offset;
            }else {
                delimiter = new core.DartString(content).substring(0,1);
                loc = op(Op.PLUS,expr.offset,new core.DartString(source).length);
            }
            this._removeError(ScannerErrorCode.UNTERMINATED_STRING_LITERAL);
            this._addInsertEdit(loc,delimiter);
        }
        expr = errorMatching(ParserErrorCode.EXPECTED_TOKEN,{
            partialMatch : "']'"});
        if (expr != null) {
            expr = expr.getAncestor((n : any) =>  {
                return is(n, any);
            });
            if (expr != null) {
                let lit : any = expr;
                if (lit.rightBracket.isSynthetic) {
                    let src : string = this.utils.getNodeText(expr).trim();
                    let loc : number = op(Op.PLUS,expr.offset,new core.DartString(src).length);
                    if (new core.DartString(src).contains(this.eol)) {
                        let indent : string = this.utils.getNodePrefix(this.node);
                        this._addInsertEdit(loc,',' + this.eol + indent + ']');
                    }else {
                        this._addInsertEdit(loc,']');
                    }
                    this._removeError(ParserErrorCode.EXPECTED_TOKEN,{
                        partialMatch : "']'"});
                    let ms = this._findError(ParserErrorCode.EXPECTED_TOKEN,{
                        partialMatch : "';'"});
                    if (ms != null) {
                        ms.offset = loc - 1;
                    }
                }
            }
        }
    }
    _complete_classDeclaration() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let decl : any = this.node;
        if (decl.leftBracket.isSynthetic && this.errors.length == 1) {
            let sb : any = new bare.createInstance(any,null,this.file,op(Op.MINUS,decl.end,1));
            sb.append(' ');
            this._appendEmptyBraces(sb,true);
            this._insertBuilder(sb);
            this._setCompletion(DartStatementCompletion.COMPLETE_CLASS_DECLARATION);
            return true;
        }
        return false;
    }
    _complete_controlFlowBlock() : boolean {
        let expr : any = (is(this.node, any)) ? (this.node as any).expression : (is(this.node, any) ? (this.node as any).expression : null);
        if (!(is(this.node, any) || is(expr, any))) {
            return false;
        }
        if (isNot(this.node.parent, any)) {
            return false;
        }
        let outer : any = this.node.parent.parent;
        if (!(is(outer, any) || is(outer, any) || is(outer, any) || is(outer, any) || is(outer, any))) {
            return false;
        }
        let previousInsertions : number = this._lengthOfInsertions();
        let delta : number = 0;
        if (this.errors.isNotEmpty) {
            let error = this._findError(ParserErrorCode.EXPECTED_TOKEN,{
                partialMatch : "';'"});
            if (error != null) {
                let insertOffset : number;
                if (op(Op.EQUALS,expr,null) || expr.isSynthetic) {
                    if (is(this.node, any)) {
                        insertOffset = (this.node as any).returnKeyword.end;
                    }else if (is(this.node, any)) {
                        insertOffset = ((this.node as any).expression as any).throwKeyword.end;
                    }else {
                        insertOffset = this.node.end;
                    }
                }else {
                    insertOffset = expr.end;
                }
                this._addInsertEdit(insertOffset,';');
                delta = 1;
            }
        }
        let offset : number = this._appendNewlinePlusIndentAt(this.node.parent.end);
        this.exitPosition = new bare.createInstance(any,null,this.file,offset + delta + previousInsertions);
        this._setCompletion(DartStatementCompletion.COMPLETE_CONTROL_FLOW_BLOCK);
        return true;
    }
    _complete_doStatement() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let statement : any = this.node;
        let sb : any = this._sourceBuilderAfterKeyword(statement.doKeyword);
        let hasWhileKeyword : boolean = op(Op.EQUALS,statement.whileKeyword.lexeme,"while");
        let exitDelta : number = 0;
        if (!this._statementHasValidBody(statement.doKeyword,statement.body)) {
            let text : string = this.utils.getNodeText(statement.body);
            let delta : number = 0;
            if (new core.DartString(text).startsWith(';')) {
                delta = 1;
                this._addReplaceEdit(range.startLength(statement.body,delta),'');
                if (hasWhileKeyword) {
                    text = this.utils.getNodeText(statement);
                    if (new core.DartString(text).indexOf(new core.DartRegExp('do\s*;\s*while')) == 0) {
                        let end : number = new core.DartString(text).indexOf('while');
                        let start : number = new core.DartString(text).indexOf(';') + 1;
                        delta += end - start - 1;
                        this._addReplaceEdit(new bare.createInstance(any,null,start + statement.offset,end - start),' ');
                    }
                }
                sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,sb.offset,delta));
                sb.append(' ');
            }
            this._appendEmptyBraces(sb,!(hasWhileKeyword && this._isSyntheticExpression(statement.condition)));
            if (delta != 0) {
                exitDelta = op(Op.MINUS,sb.length,delta);
            }
        }else if (this._isEmptyBlock(statement.body)) {
            sb = new bare.createInstance(any,null,sb.file,statement.body.end);
        }
        let sb2 : any;
        if (hasWhileKeyword) {
            let stmt = new _KeywordConditionBlockStructure(statement.whileKeyword,statement.leftParenthesis,statement.condition,statement.rightParenthesis,null);
            sb2 = this._complete_keywordCondition(stmt);
            if (op(Op.EQUALS,sb2,null)) {
                return false;
            }
            if (op(Op.EQUALS,sb2.length,0)) {
                if (this.exitPosition != null) {
                    if (statement.semicolon.isSynthetic) {
                        this._insertBuilder(sb);
                        sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,this.exitPosition.offset,1));
                        sb.append(';');
                    }
                }
            }else {
                if (op(Op.EQUALS,sb.exitOffset,null) && ((t)=>(!!t)?t.exitOffset:null)(sb2) != null) {
                    this._insertBuilder(sb);
                    sb = sb2;
                    sb.append(';');
                }else {
                    sb.append(sb2.toString());
                }
            }
        }else {
            sb.append(" while (");
            sb.setExitOffset();
            sb.append(");");
        }
        this._insertBuilder(sb);
        if (exitDelta != 0) {
            this.exitPosition = new bare.createInstance(any,null,this.exitPosition.file,op(Op.PLUS,this.exitPosition.offset,exitDelta));
        }
        this._setCompletion(DartStatementCompletion.COMPLETE_DO_STMT);
        return true;
    }
    _complete_forEachStatement() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let forNode : any = this.node;
        if (forNode.inKeyword.isSynthetic) {
            return false;
        }
        let sb : any = new bare.createInstance(any,null,this.file,op(Op.PLUS,forNode.rightParenthesis.offset,1));
        let name : any = forNode.identifier;
        name = ( name ) || ( forNode.loopVariable );
        let src : string = this.utils.getNodeText(forNode);
        if (op(Op.EQUALS,name,null)) {
            this.exitPosition = new bare.createInstance(any,null,this.file,op(Op.PLUS,forNode.leftParenthesis.offset,1));
            src = new core.DartString(src).substring(op(Op.MINUS,forNode.leftParenthesis.offset,forNode.offset));
            if (new core.DartString(src).startsWith(new core.DartRegExp('\(\s*in\s*\)'))) {
                this._addReplaceEdit(range.startOffsetEndOffset(op(Op.PLUS,forNode.leftParenthesis.offset,1),forNode.rightParenthesis.offset),' in ');
            }else if (new core.DartString(src).startsWith(new core.DartRegExp('\(\s*in'))) {
                this._addReplaceEdit(range.startOffsetEndOffset(op(Op.PLUS,forNode.leftParenthesis.offset,1),forNode.inKeyword.offset),' ');
            }
        }else if (this._isSyntheticExpression(forNode.iterable)) {
            this.exitPosition = new bare.createInstance(any,null,this.file,op(Op.PLUS,forNode.rightParenthesis.offset,1));
            src = new core.DartString(src).substring(op(Op.MINUS,forNode.inKeyword.offset,forNode.offset));
            if (new core.DartString(src).startsWith(new core.DartRegExp('in\s*\)'))) {
                this._addReplaceEdit(range.startOffsetEndOffset(op(Op.PLUS,forNode.inKeyword.offset,forNode.inKeyword.length),forNode.rightParenthesis.offset),' ');
            }
        }
        if (!this._statementHasValidBody(forNode.forKeyword,forNode.body)) {
            sb.append(' ');
            this._appendEmptyBraces(sb,op(Op.EQUALS,this.exitPosition,null));
        }
        this._insertBuilder(sb);
        this._setCompletion(DartStatementCompletion.COMPLETE_FOR_EACH_STMT);
        return true;
    }
    _complete_forStatement() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let forNode : any = this.node;
        let sb : any;
        let replacementLength : number = 0;
        if (forNode.leftParenthesis.isSynthetic) {
            if (!forNode.rightParenthesis.isSynthetic) {
                return false;
            }
            sb = this._sourceBuilderAfterKeyword(forNode.forKeyword);
            sb.append('(');
            sb.setExitOffset();
            sb.append(')');
        }else {
            if (!forNode.rightSeparator.isSynthetic) {
                sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,forNode.rightParenthesis.offset,1));
            }else if (!forNode.leftSeparator.isSynthetic) {
                if (this._isSyntheticExpression(forNode.condition)) {
                    let text : string = this.utils.getNodeText(forNode).substring(op(Op.MINUS,forNode.leftSeparator.offset,forNode.offset));
                    let match : core.DartMatch = new core.DartRegExp(';\s*(/\*.*\*/\s*)?\)[ \t]*').matchAsPrefix(text);
                    if (match != null) {
                        replacementLength = match.end - match.start;
                        sb = new bare.createInstance(any,null,this.file,forNode.leftSeparator.offset);
                        sb.append(`; ${match.group(1) == null ? '' : match.group(1)}; )`);
                        let suffix : string = new core.DartString(text).substring(match.end);
                        if (new core.DartString(new core.DartString(suffix).trim()).isNotEmpty) {
                            sb.append(' ');
                            sb.append(new core.DartString(suffix).trim());
                            replacementLength += new core.DartString(suffix).length;
                            if (new core.DartString(suffix).endsWith(this.eol)) {
                                replacementLength -= new core.DartString(this.eol).length;
                            }
                        }
                        this.exitPosition = this._newPosition(op(Op.PLUS,forNode.leftSeparator.offset,2));
                    }else {
                        return false;
                    }
                }else {
                    sb = new bare.createInstance(any,null,this.file,forNode.rightParenthesis.offset);
                    replacementLength = 1;
                    sb.append('; )');
                    this.exitPosition = this._newPosition(op(Op.PLUS,forNode.rightSeparator.offset,2));
                }
            }else if (this._isSyntheticExpression(forNode.initialization)) {
                this.exitPosition = this._newPosition(forNode.rightParenthesis.offset);
                sb = new bare.createInstance(any,null,this.file,forNode.rightParenthesis.offset);
            }else {
                let start : number = op(Op.PLUS,forNode.condition.offset,forNode.condition.length);
                let text : string = this.utils.getNodeText(forNode).substring(start - forNode.offset);
                if (new core.DartString(text).startsWith(new core.DartRegExp('\s*\)'))) {
                    let end : number = new core.DartString(text).indexOf(')');
                    sb = new bare.createInstance(any,null,this.file,start);
                    this._addReplaceEdit(new bare.createInstance(any,null,start,end),'; ; ');
                    this.exitPosition = new bare.createInstance(any,null,this.file,start - (end - new core.DartString('; ').length));
                }else {
                    this.exitPosition = this._newPosition(forNode.rightParenthesis.offset);
                    sb = new bare.createInstance(any,null,this.file,forNode.rightParenthesis.offset);
                }
            }
        }
        if (!this._statementHasValidBody(forNode.forKeyword,forNode.body)) {
            sb.append(' ');
            this._appendEmptyBraces(sb,true);
        }else if (is(forNode.body, any)) {
            let body : any = forNode.body;
            if (op(Op.LEQ,body.rightBracket.end,this.selectionOffset)) {
                this.errors = new core.DartList.literal();
                return false;
            }
        }
        this._insertBuilder(sb,replacementLength);
        this._setCompletion(DartStatementCompletion.COMPLETE_FOR_STMT);
        return true;
    }
    _complete_functionDeclaration() : boolean {
        if (isNot(this.node, any) && isNot(this.node, any)) {
            return false;
        }
        let needsParen : boolean = false;
        var computeExitPos : (parameters : any) => number = (parameters : any) : number =>  {
            if (needsParen = parameters.rightParenthesis.isSynthetic) {
                let error = this._findError(ParserErrorCode.MISSING_CLOSING_PARENTHESIS);
                if (error != null) {
                    return op(Op.MINUS,error.offset,1);
                }
            }
            return op(Op.MINUS,this.node.end,1);
        };
        let paramListEnd : number;
        if (is(this.node, any)) {
            let func : any = this.node;
            paramListEnd = computeExitPos(func.functionExpression.parameters);
        }else {
            let meth : any = this.node;
            paramListEnd = computeExitPos(meth.parameters);
        }
        let sb : any = new bare.createInstance(any,null,this.file,paramListEnd);
        if (needsParen) {
            sb.append(')');
        }
        sb.append(' ');
        this._appendEmptyBraces(sb,true);
        this._insertBuilder(sb);
        this._setCompletion(DartStatementCompletion.COMPLETE_FUNCTION_DECLARATION);
        return true;
    }
    _complete_functionDeclarationStatement() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let error = this._findError(ParserErrorCode.EXPECTED_TOKEN,{
            partialMatch : "';'"});
        if (error != null) {
            let stmt : any = this.node;
            let src : string = this.utils.getNodeText(stmt);
            let insertOffset : number = op(Op.MINUS,stmt.functionDeclaration.end,1);
            if (is(stmt.functionDeclaration.functionExpression.body, any)) {
                let fnb : any = stmt.functionDeclaration.functionExpression.body;
                let fnbOffset : number = fnb.functionDefinition.offset;
                let fnSrc : string = new core.DartString(src).substring(fnbOffset - stmt.offset);
                if (!new core.DartString(fnSrc).startsWith('=>')) {
                    return false;
                }
                let delta : number = 0;
                if (fnb.expression.isSynthetic) {
                    if (!new core.DartString(fnSrc).startsWith('=> ')) {
                        this._addInsertEdit(insertOffset,' ');
                        delta = 1;
                    }
                    this._addInsertEdit(insertOffset,';');
                    this._appendNewlinePlusIndentAt(insertOffset);
                }else {
                    delta = 1;
                    this._addInsertEdit(insertOffset,';');
                    insertOffset = this._appendNewlinePlusIndent();
                }
                this._setCompletionAt(DartStatementCompletion.SIMPLE_SEMICOLON,insertOffset + delta);
                return true;
            }
        }
        return false;
    }
    _complete_ifOrWhileStatement(statement : _KeywordConditionBlockStructure,kind : StatementCompletionKind) : boolean {
        if (this._statementHasValidBody(statement.keyword,statement.block)) {
            return false;
        }
        let sb : any = this._complete_keywordCondition(statement);
        if (op(Op.EQUALS,sb,null)) {
            return false;
        }
        let overshoot : number = this._lengthOfDeletions();
        sb.append(' ');
        this._appendEmptyBraces(sb,op(Op.EQUALS,this.exitPosition,null));
        this._insertBuilder(sb);
        if (overshoot != 0) {
            this.exitPosition = this._newPosition(op(Op.MINUS,this.exitPosition.offset,overshoot));
        }
        this._setCompletion(kind);
        return true;
    }
    _complete_ifStatement() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let ifNode : any = this.node;
        if (ifNode.elseKeyword != null) {
            if (this.selectionOffset >= ifNode.elseKeyword.end && is(ifNode.elseStatement, any)) {
                let sb : any = new bare.createInstance(any,null,this.file,this.selectionOffset);
                let src : string = this.utils.getNodeText(ifNode);
                if (!new core.DartString(new core.DartString(src).substring(op(Op.MINUS,ifNode.elseKeyword.end,this.node.offset))).startsWith(new core.DartRegExp('[ \t]'))) {
                    sb.append(' ');
                }
                this._appendEmptyBraces(sb,true);
                this._insertBuilder(sb);
                this._setCompletion(DartStatementCompletion.COMPLETE_IF_STMT);
                return true;
            }
            return false;
        }
        let stmt = new _KeywordConditionBlockStructure(ifNode.ifKeyword,ifNode.leftParenthesis,ifNode.condition,ifNode.rightParenthesis,ifNode.thenStatement);
        return this._complete_ifOrWhileStatement(stmt,DartStatementCompletion.COMPLETE_IF_STMT);
    }
    _complete_keywordCondition(statement : _KeywordConditionBlockStructure) : any {
        let sb : any;
        if (statement.leftParenthesis.isSynthetic) {
            if (!statement.rightParenthesis.isSynthetic) {
                return null;
            }
            sb = this._sourceBuilderAfterKeyword(statement.keyword);
            sb.append('(');
            sb.setExitOffset();
            sb.append(')');
        }else {
            if (this._isSyntheticExpression(statement.condition)) {
                this.exitPosition = this._newPosition(op(Op.PLUS,statement.leftParenthesis.offset,1));
                sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,statement.rightParenthesis.offset,1));
            }else {
                let afterParen : number = op(Op.PLUS,statement.rightParenthesis.offset,1);
                if (this.utils.getNodeText(this.node).substring(afterParen - this.node.offset).startsWith(new core.DartRegExp('[ \t]'))) {
                    this._addReplaceEdit(new bare.createInstance(any,null,afterParen,1),'');
                    sb = new bare.createInstance(any,null,this.file,afterParen + 1);
                }else {
                    sb = new bare.createInstance(any,null,this.file,afterParen);
                }
            }
        }
        return sb;
    }
    _complete_methodCall() : boolean {
        let parenError = this._findError(ParserErrorCode.EXPECTED_TOKEN,{
            partialMatch : "')'"});
        if (op(Op.EQUALS,parenError,null)) {
            return false;
        }
        let argList : any = this._selectedNode({
            at : this.selectionOffset}).getAncestor((n : any) =>  {
            return is(n, any);
        });
        if (op(Op.EQUALS,argList,null)) {
            argList = this._selectedNode({
                at : parenError.offset}).getAncestor((n : any) =>  {
                return is(n, any);
            });
        }
        if (op(Op.EQUALS,((_34_)=>(!!_34_)?_34_.getAncestor((n : any) =>  {
            return op(Op.EQUALS,n,this.node);
        }):null)(argList),null)) {
            return false;
        }
        let previousInsertions : number = this._lengthOfInsertions();
        let loc : number = math.min(this.selectionOffset,op(Op.MINUS,argList.end,1));
        let delta : number = 1;
        let semicolonError = this._findError(ParserErrorCode.EXPECTED_TOKEN,{
            partialMatch : "';'"});
        if (op(Op.EQUALS,semicolonError,null)) {
            loc += 1;
            delta = 0;
        }
        this._addInsertEdit(loc,')');
        if (semicolonError != null) {
            this._addInsertEdit(loc,';');
        }
        let indent : string = this.utils.getLinePrefix(this.selectionOffset);
        let exit : number = this.utils.getLineNext(this.selectionOffset);
        this._addInsertEdit(exit,indent + this.eol);
        exit += new core.DartString(indent).length + new core.DartString(this.eol).length + previousInsertions;
        this._setCompletionAt(DartStatementCompletion.SIMPLE_ENTER,exit + delta);
        return true;
    }
    _complete_simpleEnter() : boolean {
        let offset : number;
        if (!this.errors.isEmpty) {
            offset = this.selectionOffset;
        }else {
            let indent : string = this.utils.getLinePrefix(this.selectionOffset);
            let loc : number = this.utils.getLineNext(this.selectionOffset);
            this._addInsertEdit(loc,indent + this.eol);
            offset = loc + new core.DartString(indent).length;
        }
        this._setCompletionAt(DartStatementCompletion.SIMPLE_ENTER,offset);
        return true;
    }
    _complete_simpleSemicolon() : boolean {
        if (this.errors.length != 1) {
            return false;
        }
        let error = this._findError(ParserErrorCode.EXPECTED_TOKEN,{
            partialMatch : "';'"});
        if (error != null) {
            let previousInsertions : number = this._lengthOfInsertions();
            let insertOffset : number = op(Op.PLUS,error.offset,error.length);
            this._addInsertEdit(insertOffset,';');
            let offset : number = this._appendNewlinePlusIndent() + 1 + previousInsertions;
            this._setCompletionAt(DartStatementCompletion.SIMPLE_SEMICOLON,offset);
            return true;
        }
        return false;
    }
    _complete_switchStatement() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let sb : any;
        let switchNode : any = this.node;
        if (switchNode.leftParenthesis.isSynthetic && switchNode.rightParenthesis.isSynthetic) {
            this.exitPosition = new bare.createInstance(any,null,this.file,op(Op.PLUS,switchNode.switchKeyword.end,2));
            let src : string = this.utils.getNodeText(switchNode);
            if (new core.DartString(new core.DartString(src).substring(op(Op.MINUS,switchNode.switchKeyword.end,switchNode.offset))).startsWith(new core.DartRegExp('[ \t]+'))) {
                sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,switchNode.switchKeyword.end,1));
            }else {
                sb = new bare.createInstance(any,null,this.file,switchNode.switchKeyword.end);
                sb.append(' ');
            }
            sb.append('()');
        }else if (switchNode.leftParenthesis.isSynthetic || switchNode.rightParenthesis.isSynthetic) {
            return false;
        }else {
            sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,switchNode.rightParenthesis.offset,1));
            if (this._isSyntheticExpression(switchNode.expression)) {
                this.exitPosition = new bare.createInstance(any,null,this.file,op(Op.PLUS,switchNode.leftParenthesis.offset,1));
            }
        }
        if (switchNode.leftBracket.isSynthetic) {
            sb.append(' ');
            this._appendEmptyBraces(sb,op(Op.EQUALS,this.exitPosition,null));
        }else {
            let member : any = this._findInvalidElement(switchNode.members);
            if (member != null) {
                if (member.colon.isSynthetic) {
                    let loc : number = is(member, any) ? member.expression.end : member.keyword.end;
                    sb = new bare.createInstance(any,null,this.file,loc);
                    sb.append(': ');
                    this.exitPosition = new bare.createInstance(any,null,this.file,loc + 2);
                }
            }
        }
        this._insertBuilder(sb);
        this._setCompletion(DartStatementCompletion.COMPLETE_SWITCH_STMT);
        return true;
    }
    _complete_tryStatement() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let tryNode : any = this.node;
        let sb : any;
        let catchNode : any;
        let addSpace : boolean = true;
        if (tryNode.body.leftBracket.isSynthetic) {
            let src : string = this.utils.getNodeText(tryNode);
            if (new core.DartString(new core.DartString(src).substring(op(Op.MINUS,tryNode.tryKeyword.end,tryNode.offset))).startsWith(new core.DartRegExp('[ \t]+'))) {
                sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,tryNode.tryKeyword.end,1));
            }else {
                sb = new bare.createInstance(any,null,this.file,tryNode.tryKeyword.end);
                sb.append(' ');
            }
            this._appendEmptyBraces(sb,true);
            this._insertBuilder(sb);
            sb = null;
        }else if ((catchNode = this._findInvalidElement(tryNode.catchClauses)) != null) {
            if (catchNode.onKeyword != null) {
                if (op(Op.EQUALS,catchNode.exceptionType.length,0) || null != this._findError(StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE,{
                    partialMatch : "name 'catch"})) {
                    let src : string = this.utils.getNodeText(catchNode);
                    if (new core.DartString(src).startsWith(new core.DartRegExp('on[ \t]+'))) {
                        if (new core.DartString(src).startsWith(new core.DartRegExp('on[ \t][ \t]+'))) {
                            this.exitPosition = new bare.createInstance(any,null,this.file,op(Op.PLUS,catchNode.onKeyword.end,1));
                            sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,catchNode.onKeyword.end,2));
                            addSpace = false;
                        }else {
                            sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,catchNode.onKeyword.end,1));
                            sb.setExitOffset();
                        }
                    }else {
                        sb = new bare.createInstance(any,null,this.file,catchNode.onKeyword.end);
                        sb.append(' ');
                        sb.setExitOffset();
                    }
                }else {
                    sb = new bare.createInstance(any,null,this.file,catchNode.exceptionType.end);
                }
            }
            if (catchNode.catchKeyword != null) {
                let struct = new _KeywordConditionBlockStructure(catchNode.catchKeyword,catchNode.leftParenthesis,catchNode.exceptionParameter,catchNode.rightParenthesis,catchNode.body);
                if (sb != null) {
                    this._insertBuilder(sb);
                }
                sb = this._complete_keywordCondition(struct);
                if (op(Op.EQUALS,sb,null)) {
                    return false;
                }
            }
            if (catchNode.body.leftBracket.isSynthetic) {
                if (addSpace) {
                    sb.append(' ');
                }
                this._appendEmptyBraces(sb,op(Op.EQUALS,this.exitPosition,null));
            }
            this._insertBuilder(sb);
        }else if (tryNode.finallyKeyword != null) {
            if (tryNode.finallyBlock.leftBracket.isSynthetic) {
                sb = new bare.createInstance(any,null,this.file,tryNode.finallyKeyword.end);
                sb.append(' ');
                this._appendEmptyBraces(sb,true);
                this._insertBuilder(sb);
            }
        }
        this._setCompletion(DartStatementCompletion.COMPLETE_TRY_STMT);
        return true;
    }
    _complete_variableDeclaration() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        this._addInsertEdit(this.node.end,';');
        this.exitPosition = new bare.createInstance(any,null,this.file,this._appendNewlinePlusIndentAt(this.node.end) + 1);
        this._setCompletion(DartStatementCompletion.COMPLETE_VARIABLE_DECLARATION);
        return true;
    }
    _complete_whileStatement() : boolean {
        if (isNot(this.node, any)) {
            return false;
        }
        let whileNode : any = this.node;
        if (whileNode != null) {
            let stmt = new _KeywordConditionBlockStructure(whileNode.whileKeyword,whileNode.leftParenthesis,whileNode.condition,whileNode.rightParenthesis,whileNode.body);
            return this._complete_ifOrWhileStatement(stmt,DartStatementCompletion.COMPLETE_WHILE_STMT);
        }
        return false;
    }
    _findError(code : any,_namedArguments? : {partialMatch? : any}) : any {
        let {partialMatch} = Object.assign({
            "partialMatch" : null}, _namedArguments );
        return this.errors.firstWhere((err : any) =>  {
            return op(Op.EQUALS,err.errorCode,code) && (op(Op.EQUALS,partialMatch,null) ? true : err.message.contains(partialMatch));
        },{
            orElse : () =>  {
                return null;
            }});
    }
    _findInvalidElement<T extends any>(list : any) : T {
        return list.firstWhere((item : any) =>  {
            return this.selectionOffset >= item.offset && this.selectionOffset <= item.end;
        },{
            orElse : () =>  {
                return null;
            }});
    }
    _getLinkedPosition(groupId : string) : any {
        let group : any = this.linkedPositionGroups.get(groupId);
        if (op(Op.EQUALS,group,null)) {
            group = new bare.createInstance(any,null);
            this.linkedPositionGroups.set(groupId,group);
        }
        return group;
    }
    _insertBuilder(builder : any,length? : number) : void {
        length = length || 0;
        {
            let range : any = new bare.createInstance(any,null,builder.offset,length);
            let text : string = builder.toString();
            this._addReplaceEdit(range,text);
        }
        builder.linkedPositionGroups.forEach((id : string,group : any) =>  {
            let fixGroup : any = this._getLinkedPosition(id);
            group.positions.forEach((position : any) =>  {
                fixGroup.addPosition(position,group.length);
            });
            group.suggestions.forEach((suggestion : any) =>  {
                fixGroup.addSuggestion(suggestion);
            });
        });
        {
            let exitOffset : number = builder.exitOffset;
            if (exitOffset != null) {
                this.exitPosition = this._newPosition(exitOffset);
            }
        }
    }
    _isEmptyBlock(stmt : any) : boolean {
        return is(stmt, any) && stmt.statements.isEmpty;
    }
    _isEmptyStatement(stmt : any) : boolean {
        return is(stmt, any) || this._isEmptyBlock(stmt);
    }
    _isNonStatementDeclaration(n : any) : boolean {
        if (isNot(n, any)) {
            return false;
        }
        if (isNot(n, any) && isNot(n, any)) {
            return true;
        }
        let p : any = n.parent;
        return isNot(p, any) && isNot(((t)=>(!!t)?t.parent:null)(p), any);
    }
    _isSyntheticExpression(expr : any) : boolean {
        return is(expr, any) && expr.isSynthetic;
    }
    _lengthOfDeletions() : number {
        if (this.change.edits.isEmpty) {
            return 0;
        }
        let length : number = 0;
        for(let edit of this.change.edits) {
            for(let srcEdit of edit.edits) {
                if (op(Op.GT,srcEdit.length,0)) {
                    length += op(Op.MINUS,srcEdit.length,srcEdit.replacement.length);
                }
            }
        }
        return length;
    }
    _lengthOfInsertions() : number {
        if (this.change.edits.isEmpty) {
            return 0;
        }
        let length : number = 0;
        for(let edit of this.change.edits) {
            for(let srcEdit of edit.edits) {
                if (op(Op.EQUALS,srcEdit.length,0)) {
                    length += srcEdit.replacement.length;
                }
            }
        }
        return length;
    }
    _newPosition(offset : number) : any {
        return new bare.createInstance(any,null,this.file,offset);
    }
    _removeError(errorCode : any,_namedArguments? : {partialMatch? : any}) : void {
        let {partialMatch} = Object.assign({
            "partialMatch" : null}, _namedArguments );
        let error = this._findError(errorCode,{
            partialMatch : partialMatch});
        if (error != null) {
            this.errors.remove(error);
        }
    }
    _selectedNode(_namedArguments? : {at? : number}) : any {
        let {at} = Object.assign({
            "at" : null}, _namedArguments );
        return new bare.createInstance(any,null,at == null ? this.selectionOffset : at).searchWithin(this.unit);
    }
    _setCompletion(kind : StatementCompletionKind,args? : core.DartList<any>) : void {
        /* TODO (AssertStatementImpl) : assert (exitPosition != null); */;
        this.change.selection = this.exitPosition;
        this.change.message = formatList(kind.message,args);
        this.linkedPositionGroups.values.forEach((group : any) =>  {
            return this.change.addLinkedEditGroup(group);
        });
        this.completion = new StatementCompletion(kind,this.change);
    }
    _setCompletionAt(kind : StatementCompletionKind,offset : number,args? : core.DartList<any>) : void {
        this.exitPosition = this._newPosition(offset);
        this._setCompletion(kind,args);
    }
    _sourceBuilderAfterKeyword(keyword : any) : any {
        let sb : any;
        let text : string = this._baseNodeText(this.node);
        text = new core.DartString(text).substring(op(Op.MINUS,keyword.offset,this.node.offset));
        let len : number = keyword.length;
        if (new core.DartString(text).length == len || !new core.DartString(new core.DartString(text).substring(len,len + 1)).contains(new core.DartRegExp('[ \t]'))) {
            sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,keyword.offset,len));
            sb.append(' ');
        }else {
            sb = new bare.createInstance(any,null,this.file,op(Op.PLUS,op(Op.PLUS,keyword.offset,len),1));
        }
        return sb;
    }
    _statementHasValidBody(keyword : any,body : any) : boolean {
        if (body.isSynthetic) {
            return false;
        }
        if (is(body, any)) {
            let block : any = body;
            return (!(block.leftBracket.isSynthetic));
        }
        return (op(Op.EQUALS,this.lineInfo.getLocation(keyword.offset),this.lineInfo.getLocation(body.offset)));
    }
}

export namespace _KeywordConditionBlockStructure {
    export type Constructors = '_KeywordConditionBlockStructure';
    export type Interface = Omit<_KeywordConditionBlockStructure, Constructors>;
}
@DartClass
export class _KeywordConditionBlockStructure {
    keyword : any;

    leftParenthesis : any;
    rightParenthesis : any;

    condition : any;

    block : any;

    constructor(keyword : any,leftParenthesis : any,condition : any,rightParenthesis : any,block : any) {
    }
    @defaultConstructor
    _KeywordConditionBlockStructure(keyword : any,leftParenthesis : any,condition : any,rightParenthesis : any,block : any) {
        this.keyword = keyword;
        this.leftParenthesis = leftParenthesis;
        this.condition = condition;
        this.rightParenthesis = rightParenthesis;
        this.block = block;
    }
    get offset() : number {
        return this.keyword.offset;
    }
}

export class properties {
}
