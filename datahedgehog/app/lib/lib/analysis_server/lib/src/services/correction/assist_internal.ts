/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/assist_internal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as collection from "@dart2ts/dart/core";

export namespace AssistProcessor {
    export type Constructors = 'AssistProcessor';
    export type Interface = Omit<AssistProcessor, Constructors>;
}
@DartClass
export class AssistProcessor {
    driver : any;

    source : any;

    file : string;

    fileStamp : number;

    unit : any;

    unitElement : any;

    unitLibraryElement : any;

    unitLibraryFile : string;

    unitLibraryFolder : string;

    selectionOffset : number;

    selectionLength : number;

    selectionEnd : number;

    assists : core.DartList<any>;

    linkedPositionGroups : core.DartMap<string,any>;

    exitPosition : any;

    utils : any;

    node : any;

    change : any;

    _typeProvider : any;

    constructor(dartContext : any) {
    }
    @defaultConstructor
    AssistProcessor(dartContext : any) {
        this.assists = new core.DartList.literal<any>();
        this.linkedPositionGroups = new core.DartMap.literal([
        ]);
        this.exitPosition = null;
        this.change = new bare.createInstance(any,null,'<message>');
        this.driver = dartContext.analysisDriver;
        this.source = dartContext.source;
        this.file = dartContext.source.fullName;
        this.fileStamp = this._modificationStamp(this.file);
        this.unit = dartContext.unit;
        this.unitElement = dartContext.unit.element;
        this.unitLibraryElement = resolutionMap.elementDeclaredByCompilationUnit(dartContext.unit).library;
        this.unitLibraryFile = this.unitLibraryElement.source.fullName;
        this.unitLibraryFolder = lib3.dirname(this.unitLibraryFile);
        this.selectionOffset = dartContext.selectionOffset;
        this.selectionLength = dartContext.selectionLength;
        this.selectionEnd = this.selectionOffset + this.selectionLength;
    }
    get eol() : string {
        return this.utils.endOfLine;
    }
    get typeProvider() : any {
        if (op(Op.EQUALS,this._typeProvider,null)) {
            this._typeProvider = this.unitElement.context.typeProvider;
        }
        return this._typeProvider;
    }
    compute() : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._modificationStamp(this.file) != this.fileStamp) {
                return new core.DartList.literal<any>();
            }
            try {
                this.utils = new bare.createInstance(any,null,this.unit);
            } catch (__error__) {

                {
                    let e = __error__;
                    throw new bare.createInstance(any,null,{
                        exception : e});
                }
            }
            this.node = new bare.createInstance(any,null,this.selectionOffset,this.selectionEnd).searchWithin(this.unit);
            if (op(Op.EQUALS,this.node,null)) {
                return this.assists;
            }
            this._addProposal_addTypeAnnotation_DeclaredIdentifier();
            this._addProposal_addTypeAnnotation_SimpleFormalParameter();
            this._addProposal_addTypeAnnotation_VariableDeclaration();
            this._addProposal_assignToLocalVariable();
            this._addProposal_convertIntoFinalField();
            this._addProposal_convertIntoGetter();
            this._addProposal_convertDocumentationIntoBlock();
            this._addProposal_convertDocumentationIntoLine();
            this._addProposal_convertToBlockFunctionBody();
            this._addProposal_convertToExpressionFunctionBody();
            this._addProposal_convertFlutterChild();
            this._addProposal_convertToForIndexLoop();
            this._addProposal_convertToIsNot_onIs();
            this._addProposal_convertToIsNot_onNot();
            this._addProposal_convertToIsNotEmpty();
            this._addProposal_convertToFieldParameter();
            this._addProposal_convertToNormalParameter();
            this._addProposal_encapsulateField();
            this._addProposal_exchangeOperands();
            this._addProposal_importAddShow();
            this._addProposal_introduceLocalTestedType();
            this._addProposal_invertIf();
            this._addProposal_joinIfStatementInner();
            this._addProposal_joinIfStatementOuter();
            this._addProposal_joinVariableDeclaration_onAssignment();
            this._addProposal_joinVariableDeclaration_onDeclaration();
            this._addProposal_moveFlutterWidgetDown();
            this._addProposal_moveFlutterWidgetUp();
            this._addProposal_removeTypeAnnotation();
            this._addProposal_reparentFlutterList();
            this._addProposal_reparentFlutterWidget();
            this._addProposal_replaceConditionalWithIfElse();
            this._addProposal_replaceIfElseWithConditional();
            this._addProposal_splitAndCondition();
            this._addProposal_splitVariableDeclaration();
            this._addProposal_surroundWith();
            return this.assists;
        } )());
    }

    getEnclosingFunctionBody() : any {
        {
            let function : any = this.node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (function != null) {
                return function.body;
            }
        }
        {
            let function : any = this.node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (function != null) {
                return function.functionExpression.body;
            }
        }
        {
            let constructor : any = this.node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (constructor != null) {
                return constructor.body;
            }
        }
        {
            let method : any = this.node.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (method != null) {
                return method.body;
            }
        }
        return null;
    }
    _addAssist(kind : any,args : core.DartList<any>,_namedArguments? : {assistFile? : string}) : void {
        let {assistFile} = Object.assign({
        }, _namedArguments );
        if (assistFile == null) {
            assistFile = this.file;
        }
        if (this.change.edits.isEmpty) {
            AssistProcessor._coverageMarker();
            return;
        }
        this.change.message = formatList(kind.message,args);
        this.linkedPositionGroups.values.forEach((group : any) =>  {
            return this.change.addLinkedEditGroup(group);
        });
        this.change.selection = this.exitPosition;
        let assist : any = new bare.createInstance(any,null,kind,this.change);
        this.assists.add(assist);
        this.change = new bare.createInstance(any,null,'<message>');
        this.linkedPositionGroups.clear();
        this.exitPosition = null;
    }
    _addIndentEdit(range : any,oldIndent : string,newIndent : string) : void {
        let edit : any = this.utils.createIndentEdit(range,oldIndent,newIndent);
        doSourceChange_addElementEdit(this.change,this.unitElement,edit);
    }
    _addInsertEdit(offset : number,text : string) : void {
        let edit : any = new bare.createInstance(any,null,offset,0,text);
        doSourceChange_addElementEdit(this.change,this.unitElement,edit);
    }
    _addProposal_addTypeAnnotation_DeclaredIdentifier() : void {
        let declaredIdentifier : any = this.node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        if (op(Op.EQUALS,declaredIdentifier,null)) {
            let forEach : any = this.node.getAncestor((n : any) =>  {
                return is(n, any);
            });
            let offset : number = this.node.offset;
            if (forEach != null && forEach.iterable != null && offset < forEach.iterable.offset) {
                declaredIdentifier = forEach.loopVariable;
            }
        }
        if (op(Op.EQUALS,declaredIdentifier,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (declaredIdentifier.type != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let typeSource : string;
        let type : any = declaredIdentifier.identifier.bestType;
        if (is(type, any) || is(type, any)) {
            this._configureTargetLocation(this.node);
            let librariesToImport : core.DartSet<any> = new core.DartSet<any>();
            typeSource = this.utils.getTypeSource(type,librariesToImport);
            addLibraryImports(this.change,this.unitLibraryElement,librariesToImport);
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        if (typeSource == null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let keyword : any = declaredIdentifier.keyword;
        if (op(Op.EQUALS,keyword.keyword,Keyword.VAR)) {
            this._addReplaceEdit(range.token(keyword),typeSource);
        }else {
            this._addInsertEdit(declaredIdentifier.identifier.offset,`${typeSource} `);
        }
        this._addAssist(DartAssistKind.ADD_TYPE_ANNOTATION,new core.DartList.literal());
    }
    _addProposal_addTypeAnnotation_SimpleFormalParameter() : void {
        let node : any = this.node;
        if (isNot(node, any) || isNot(node.parent, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let name : any = node;
        let parameter : any = node.parent;
        if (parameter.type != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let type : any = parameter.element.type;
        if (isNot(type, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let typeSource : string;
        {
            this._configureTargetLocation(node);
            let librariesToImport : core.DartSet<any> = new core.DartSet<any>();
            typeSource = this.utils.getTypeSource(type,librariesToImport);
            addLibraryImports(this.change,this.unitLibraryElement,librariesToImport);
        }
        if (typeSource == null) {
            AssistProcessor._coverageMarker();
            return;
        }
        this._addInsertEdit(name.offset,`${typeSource} `);
        this._addAssist(DartAssistKind.ADD_TYPE_ANNOTATION,new core.DartList.literal());
    }
    _addProposal_addTypeAnnotation_VariableDeclaration() : void {
        let node : any = this.node;
        let declarationList : any = node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (op(Op.EQUALS,declarationList,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (declarationList.type != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let variables : core.DartList<any> = declarationList.variables;
        if (variables.length != 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        let variable : any = variables[0];
        if (this.selectionOffset > variable.name.end) {
            AssistProcessor._coverageMarker();
            return;
        }
        let initializer : any = variable.initializer;
        if (op(Op.EQUALS,initializer,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let type : any = initializer.bestType;
        let typeSource : string;
        if (is(type, any) && !type.isDartCoreNull || is(type, any)) {
            this._configureTargetLocation(node);
            let librariesToImport : core.DartSet<any> = new core.DartSet<any>();
            typeSource = this.utils.getTypeSource(type,librariesToImport);
            addLibraryImports(this.change,this.unitLibraryElement,librariesToImport);
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        if (typeSource == null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let keyword : any = declarationList.keyword;
        if (op(Op.EQUALS,((t)=>(!!t)?t.keyword:null)(keyword),Keyword.VAR)) {
            this._addReplaceEdit(range.token(keyword),typeSource);
        }else {
            this._addInsertEdit(variable.offset,`${typeSource} `);
        }
        this._addAssist(DartAssistKind.ADD_TYPE_ANNOTATION,new core.DartList.literal());
    }
    _addProposal_assignToLocalVariable() : void {
        let expressionStatement : any;
        for(let node : any = this.node; node != null; node = node.parent){
            if (is(node, any)) {
                expressionStatement = node;
                break;
            }
            if (is(node, any) || is(node, any) || is(node, any) || is(node, any)) {
                AssistProcessor._coverageMarker();
                return;
            }
        }
        if (op(Op.EQUALS,expressionStatement,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let expression : any = expressionStatement.expression;
        let offset : number = expression.offset;
        let type : any = expression.bestType;
        if (type.isVoid) {
            AssistProcessor._coverageMarker();
            return;
        }
        let builder : any = new bare.createInstance(any,null,this.file,offset);
        builder.append('var ');
        let excluded : core.DartSet<string> = new core.DartSet<string>();
        {
            let scopedNameFinder : any = new bare.createInstance(any,null,offset);
            expression.accept(scopedNameFinder);
            excluded.addAll(scopedNameFinder.locals.keys.toSet());
        }
        {
            let suggestions : core.DartList<string> = getVariableNameSuggestionsForExpression(type,expression,excluded);
            builder.startPosition('NAME');
            for(let i : number = 0; i < suggestions.length; i++){
                let name : string = suggestions[i];
                if (i == 0) {
                    builder.append(name);
                }
                builder.addSuggestion(LinkedEditSuggestionKind.VARIABLE,name);
            }
            builder.endPosition();
        }
        builder.append(' = ');
        this._insertBuilder(builder);
        this._addAssist(DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE,new core.DartList.literal());
    }
    _addProposal_convertDocumentationIntoBlock() : void {
        let comment : any = this.node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        if (comment != null && comment.isDocumentation) {
            let prefix : string = this.utils.getNodePrefix(comment);
            let sb : any = new bare.createInstance(any,null,this.file,comment.offset);
            sb.append('/**');
            sb.append(this.eol);
            for(let token of comment.tokens) {
                if (is(token, any) && op(Op.EQUALS,token.type,TokenType.SINGLE_LINE_COMMENT)) {
                    sb.append(prefix);
                    sb.append(' *');
                    sb.append(token.lexeme.substring(new core.DartString('///').length));
                    sb.append(this.eol);
                }else {
                    return;
                }
            }
            sb.append(prefix);
            sb.append(' */');
            this._insertBuilder(sb,comment.length);
        }
        this._addAssist(DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK,new core.DartList.literal());
    }
    _addProposal_convertDocumentationIntoLine() : void {
        let comment : any = this.node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        if (comment != null && comment.isDocumentation) {
            if (op(Op.EQUALS,comment.tokens.length,1)) {
                let token : any = comment.tokens.first;
                if (op(Op.EQUALS,token.type,TokenType.MULTI_LINE_COMMENT)) {
                    let text : string = token.lexeme;
                    let lines : core.DartList<string> = new core.DartString(text).split('\n');
                    let prefix : string = this.utils.getNodePrefix(comment);
                    let sb : any = new bare.createInstance(any,null,this.file,comment.offset);
                    let firstLine : boolean = true;
                    let linePrefix : string = '';
                    for(let line of lines) {
                        if (firstLine) {
                            firstLine = false;
                            let expectedPrefix : string = '/**';
                            if (!new core.DartString(line).startsWith(expectedPrefix)) {
                                return;
                            }
                            line = new core.DartString(new core.DartString(line).substring(new core.DartString(expectedPrefix).length)).trim();
                            if (new core.DartString(line).isNotEmpty) {
                                sb.append('/// ');
                                sb.append(line);
                                linePrefix = this.eol + prefix;
                            }
                        }else {
                            if (new core.DartString(line).startsWith(prefix + ' */')) {
                                break;
                            }
                            let expectedPrefix : string = prefix + ' * ';
                            if (!new core.DartString(line).startsWith(expectedPrefix)) {
                                return;
                            }
                            line = new core.DartString(new core.DartString(line).substring(new core.DartString(expectedPrefix).length)).trim();
                            sb.append(linePrefix);
                            sb.append('/// ');
                            sb.append(line);
                            linePrefix = this.eol + prefix;
                        }
                    }
                    this._insertBuilder(sb,comment.length);
                }
            }
        }
        this._addAssist(DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE,new core.DartList.literal());
    }
    _addProposal_convertFlutterChild() : void {
        let namedExp : any;
        if (is(this.node, any) && is(this.node.parent, any) && is(this.node.parent.parent, any)) {
            namedExp = this.node.parent.parent as any;
            if ((this.node as any).name != 'child' || op(Op.EQUALS,namedExp.expression,null)) {
                return;
            }
            if (isNot(((t)=>(!!t)?t.parent:null)(namedExp.parent), any)) {
                return;
            }
            let newExpr : any = namedExp.parent.parent;
            if (op(Op.EQUALS,newExpr,null) || !isFlutterInstanceCreationExpression(newExpr)) {
                return;
            }
        }else {
            let newExpr : any = identifyNewExpression(this.node);
            if (op(Op.EQUALS,newExpr,null) || !isFlutterInstanceCreationExpression(newExpr)) {
                AssistProcessor._coverageMarker();
                return;
            }
            namedExp = findChildArgument(newExpr);
            if (op(Op.EQUALS,namedExp,null) || op(Op.EQUALS,namedExp.expression,null)) {
                AssistProcessor._coverageMarker();
                return;
            }
        }
        let childArg : any = getChildWidget(namedExp,false);
        if (op(Op.EQUALS,childArg,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        convertFlutterChildToChildren(childArg,namedExp,this.eol,this.utils.getNodeText,this.utils.getLinePrefix,this.utils.getIndent,this.utils.getText,this._addInsertEdit.bind(this),this._addRemoveEdit.bind(this),this._addReplaceEdit.bind(this),range.node);
        this._addAssist(DartAssistKind.CONVERT_FLUTTER_CHILD,new core.DartList.literal());
    }
    _addProposal_convertIntoFinalField() : void {
        let getter : any;
        for(let n : any = this.node; n != null; n = n.parent){
            if (is(n, any)) {
                getter = n;
                break;
            }
            if (is(n, any) || is(n, any) || is(n, any)) {
                continue;
            }
            break;
        }
        if (op(Op.EQUALS,getter,null) || !getter.isGetter) {
            return;
        }
        {
            let element : any = getter.element;
            if (op(Op.EQUALS,element,null)) {
                return;
            }
            let enclosing : any = element.enclosingElement;
            if (is(enclosing, any)) {
                if (enclosing.getSetter(element.name) != null) {
                    return;
                }
            }
        }
        let expression : any;
        {
            let body : any = getter.body;
            if (is(body, any)) {
                expression = body.expression;
            }else if (is(body, any)) {
                let statements : core.DartList<any> = body.block.statements;
                if (statements.length == 1) {
                    let statement : any = statements.first;
                    if (is(statement, any)) {
                        expression = statement.expression;
                    }
                }
            }
        }
        if (expression != null) {
            let beginNodeToReplace : any = getter.name;
            let code : string = 'final';
            if (getter.returnType != null) {
                beginNodeToReplace = getter.returnType;
                code += ' ' + this._getNodeText(getter.returnType);
            }
            code += ' ' + this._getNodeText(getter.name);
            if (isNot(expression, any)) {
                code += ' = ' + this._getNodeText(expression);
            }
            code += ';';
            this._addReplaceEdit(range.startEnd(beginNodeToReplace,getter),code);
            this._addAssist(DartAssistKind.CONVERT_INTO_FINAL_FIELD,new core.DartList.literal());
        }
    }
    _addProposal_convertIntoGetter() : void {
        let fieldDeclaration : any;
        for(let n : any = this.node; n != null; n = n.parent){
            if (is(n, any)) {
                fieldDeclaration = n;
                break;
            }
            if (is(n, any) || is(n, any) || is(n, any) || is(n, any) || is(n, any)) {
                continue;
            }
            break;
        }
        if (op(Op.EQUALS,fieldDeclaration,null)) {
            return;
        }
        let fieldList : any = fieldDeclaration.fields;
        if (!fieldList.isFinal || fieldList.variables.length != 1) {
            return;
        }
        let field : any = fieldList.variables.first;
        let initializer : any = field.initializer;
        if (op(Op.EQUALS,initializer,null)) {
            return;
        }
        let code : string = '';
        if (fieldList.type != null) {
            code += this._getNodeText(fieldList.type) + ' ';
        }
        code += 'get';
        code += ' ' + this._getNodeText(field.name);
        code += ' => ' + this._getNodeText(initializer);
        code += ';';
        this._addReplaceEdit(range.startEnd(fieldList.keyword,fieldDeclaration),code);
        this._addAssist(DartAssistKind.CONVERT_INTO_GETTER,new core.DartList.literal());
    }
    _addProposal_convertToBlockFunctionBody() : void {
        let body : any = this.getEnclosingFunctionBody();
        if (isNot(body, any) || body.isGenerator) {
            AssistProcessor._coverageMarker();
            return;
        }
        let returnValue : any = (body as any).expression;
        let returnValueType : any = returnValue.staticType;
        let returnValueCode : string = this._getNodeText(returnValue);
        let prefix : string = this.utils.getNodePrefix(body.parent);
        let indent : string = this.utils.getIndent(1);
        let sb : any = new bare.createInstance(any,null,this.file,body.offset);
        if (body.isAsynchronous) {
            sb.append('async ');
        }
        sb.append(`{${this.eol}${prefix}${indent}`);
        if (!returnValueType.isVoid) {
            sb.append('return ');
        }
        sb.append(returnValueCode);
        sb.append(';');
        sb.setExitOffset();
        sb.append(`${this.eol}${prefix}}`);
        this._insertBuilder(sb,body.length);
        this._addAssist(DartAssistKind.CONVERT_INTO_BLOCK_BODY,new core.DartList.literal());
    }
    _addProposal_convertToExpressionFunctionBody() : void {
        let body : any = this.getEnclosingFunctionBody();
        if (isNot(body, any) || body.isGenerator) {
            AssistProcessor._coverageMarker();
            return;
        }
        let statements : core.DartList<any> = (body as any).block.statements;
        if (statements.length != 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        let onlyStatement : any = statements.first;
        let returnExpression : any;
        if (is(onlyStatement, any)) {
            returnExpression = onlyStatement.expression;
        }else if (is(onlyStatement, any)) {
            returnExpression = onlyStatement.expression;
        }
        if (op(Op.EQUALS,returnExpression,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let sb : any = new bare.createInstance(any,null,this.file,body.offset);
        if (body.isAsynchronous) {
            sb.append('async ');
        }
        sb.append('=> ');
        sb.append(this._getNodeText(returnExpression));
        if (isNot(body.parent, any) || is(body.parent.parent, any)) {
            sb.append(';');
        }
        this._insertBuilder(sb,body.length);
        this._addAssist(DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,new core.DartList.literal());
    }
    _addProposal_convertToFieldParameter() : void {
        if (op(Op.EQUALS,this.node,null)) {
            return;
        }
        let constructor : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (op(Op.EQUALS,constructor,null)) {
            return;
        }
        let parameterList : any = constructor.parameters;
        let initializers : core.DartList<any> = constructor.initializers;
        let parameter : any;
        if (is(this.node.parent, any) && is(this.node.parent.parent, any) && is(this.node.parent.parent.parent, any)) {
            parameter = this.node.parent;
        }
        if (is(this.node, any) && is(this.node.parent, any)) {
            let name : string = (this.node as any).name;
            let initializer : any = this.node.parent;
            if (op(Op.EQUALS,initializer.expression,this.node)) {
                for(let formalParameter of parameterList.parameters) {
                    if (is(formalParameter, any) && op(Op.EQUALS,formalParameter.identifier.name,name)) {
                        parameter = formalParameter;
                    }
                }
            }
        }
        if (parameter != null) {
            let parameterName : string = parameter.identifier.name;
            let parameterElement : any = parameter.element;
            {
                let numOfReferences : number = 0;
                let visitor : any = new _SimpleIdentifierRecursiveAstVisitor((node : any) =>  {
                    if (op(Op.EQUALS,node.staticElement,parameterElement)) {
                        numOfReferences++;
                    }
                });
                for(let initializer of initializers) {
                    initializer.accept(visitor);
                }
                if (numOfReferences != 1) {
                    return;
                }
            }
            let parameterInitializer : any;
            for(let initializer of initializers) {
                if (is(initializer, any)) {
                    let expression : any = initializer.expression;
                    if (is(expression, any) && op(Op.EQUALS,expression.name,parameterName)) {
                        parameterInitializer = initializer;
                    }
                }
            }
            if (op(Op.EQUALS,parameterInitializer,null)) {
                return;
            }
            let fieldName : string = parameterInitializer.fieldName.name;
            this._addReplaceEdit(range.node(parameter),`this.${fieldName}`);
            let initializerIndex : number = initializers.indexOf(parameterInitializer);
            if (initializers.length == 1) {
                this._addRemoveEdit(range.endEnd(parameterList,parameterInitializer));
            }else {
                if (initializerIndex == 0) {
                    let next : any = initializers[initializerIndex + 1];
                    this._addRemoveEdit(range.startStart(parameterInitializer,next));
                }else {
                    let prev : any = initializers[initializerIndex - 1];
                    this._addRemoveEdit(range.endEnd(prev,parameterInitializer));
                }
            }
            this._addAssist(DartAssistKind.CONVERT_TO_FIELD_PARAMETER,new core.DartList.literal());
        }
    }
    _addProposal_convertToForIndexLoop() : void {
        let forEachStatement : any = this.node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        if (op(Op.EQUALS,forEachStatement,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (this.selectionOffset < forEachStatement.offset || op(Op.LT,forEachStatement.rightParenthesis.end,this.selectionOffset)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let loopVariable : any = forEachStatement.loopVariable;
        if (op(Op.EQUALS,loopVariable,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let listName : string;
        let iterable : any = forEachStatement.iterable;
        if (is(iterable, any) && is(iterable.staticElement, any)) {
            listName = iterable.name;
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        {
            let iterableType : any = iterable.bestType;
            let listType : any = this.typeProvider.listType;
            if (isNot(iterableType, any) || iterableType.element != listType.element) {
                AssistProcessor._coverageMarker();
                return;
            }
        }
        if (isNot(forEachStatement.body, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let body : any = forEachStatement.body;
        let indexName : string;
        {
            let conflicts : core.DartSet<string> = this.utils.findPossibleLocalVariableConflicts(forEachStatement.offset);
            if (!conflicts.contains('i')) {
                indexName = 'i';
            }else if (!conflicts.contains('j')) {
                indexName = 'j';
            }else if (!conflicts.contains('k')) {
                indexName = 'k';
            }else {
                AssistProcessor._coverageMarker();
                return;
            }
        }
        let prefix : string = this.utils.getNodePrefix(forEachStatement);
        let indent : string = this.utils.getIndent(1);
        let firstBlockLine : number = this.utils.getLineContentEnd(body.leftBracket.end);
        this._addReplaceEdit(range.startEnd(forEachStatement,forEachStatement.rightParenthesis),`for (int ${indexName} = 0; ${indexName} < ${listName}.length; ${indexName}++)`);
        this._addInsertEdit(firstBlockLine,`${prefix}${indent}${loopVariable} = ${listName}[${indexName}];${this.eol}`);
        this._addAssist(DartAssistKind.CONVERT_INTO_FOR_INDEX,new core.DartList.literal());
    }
    _addProposal_convertToIsNot_onIs() : void {
        let node : any = this.node;
        while (node != null && isNot(node, any)){
            node = node.parent;
        }
        if (isNot(node, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let isExpression : any = node as any;
        if (isExpression.notOperator != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let parent : any = isExpression.parent;
        if (isNot(parent, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let parExpression : any = parent as any;
        let parent2 : any = parent.parent;
        if (isNot(parent2, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let prefExpression : any = parent2 as any;
        if (prefExpression.operator.type != TokenType.BANG) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (op(Op.GEQ,getExpressionParentPrecedence(prefExpression),TokenClass.RELATIONAL_OPERATOR.precedence)) {
            this._addRemoveEdit(range.token(prefExpression.operator));
        }else {
            this._addRemoveEdit(range.startEnd(prefExpression,parExpression.leftParenthesis));
            this._addRemoveEdit(range.startEnd(parExpression.rightParenthesis,prefExpression));
        }
        this._addInsertEdit(isExpression.isOperator.end,'!');
        this._addAssist(DartAssistKind.CONVERT_INTO_IS_NOT,new core.DartList.literal());
    }
    _addProposal_convertToIsNot_onNot() : void {
        if (is(this.node, any) && is(this.node.parent, any)) {
            this.node = this.node.parent;
        }
        if (isNot(this.node, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let prefExpression : any = this.node as any;
        if (prefExpression.operator.type != TokenType.BANG) {
            AssistProcessor._coverageMarker();
            return;
        }
        let operand : any = prefExpression.operand;
        if (isNot(operand, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let parExpression : any = operand as any;
        operand = parExpression.expression;
        if (isNot(operand, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let isExpression : any = operand as any;
        if (isExpression.notOperator != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (op(Op.GEQ,getExpressionParentPrecedence(prefExpression),TokenClass.RELATIONAL_OPERATOR.precedence)) {
            this._addRemoveEdit(range.token(prefExpression.operator));
        }else {
            this._addRemoveEdit(range.startEnd(prefExpression,parExpression.leftParenthesis));
            this._addRemoveEdit(range.startEnd(parExpression.rightParenthesis,prefExpression));
        }
        this._addInsertEdit(isExpression.isOperator.end,'!');
        this._addAssist(DartAssistKind.CONVERT_INTO_IS_NOT,new core.DartList.literal());
    }
    _addProposal_convertToIsNotEmpty() : void {
        let isEmptyAccess : any = null;
        let isEmptyIdentifier : any = null;
        if (is(this.node, any)) {
            let identifier : any = this.node as any;
            let parent : any = identifier.parent;
            if (is(parent, any)) {
                isEmptyIdentifier = parent.propertyName;
                isEmptyAccess = parent;
            }
            if (is(parent, any)) {
                isEmptyIdentifier = parent.identifier;
                isEmptyAccess = parent;
            }
        }
        if (op(Op.EQUALS,isEmptyIdentifier,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let propertyElement : any = isEmptyIdentifier.bestElement;
        if (op(Op.EQUALS,propertyElement,null) || 'isEmpty' != propertyElement.name) {
            AssistProcessor._coverageMarker();
            return;
        }
        let propertyTarget : any = propertyElement.enclosingElement;
        if (op(Op.EQUALS,propertyTarget,null) || getChildren(propertyTarget,'isNotEmpty').isEmpty) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (isNot(isEmptyAccess.parent, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let prefixExpression : any = isEmptyAccess.parent as any;
        if (prefixExpression.operator.type != TokenType.BANG) {
            AssistProcessor._coverageMarker();
            return;
        }
        this._addRemoveEdit(range.startStart(prefixExpression,prefixExpression.operand));
        this._addReplaceEdit(range.node(isEmptyIdentifier),'isNotEmpty');
        this._addAssist(DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY,new core.DartList.literal());
    }
    _addProposal_convertToNormalParameter() : void {
        if (is(this.node, any) && is(this.node.parent, any) && is(this.node.parent.parent, any) && is(this.node.parent.parent.parent, any)) {
            let constructor : any = this.node.parent.parent.parent;
            let parameterList : any = this.node.parent.parent;
            let parameter : any = this.node.parent;
            let parameterElement : any = parameter.element;
            let name : string = (this.node as any).name;
            let type : any = parameterElement.type;
            let librariesToImport : core.DartSet<any> = new core.DartSet<any>();
            let typeCode : string = this.utils.getTypeSource(type,librariesToImport);
            if (type.isDynamic) {
                this._addReplaceEdit(range.node(parameter),name);
            }else {
                this._addReplaceEdit(range.node(parameter),`${typeCode} ${name}`);
            }
            let initializers : core.DartList<any> = constructor.initializers;
            if (initializers.isEmpty) {
                this._addInsertEdit(parameterList.end,` : ${name} = ${name}`);
            }else {
                this._addInsertEdit(initializers.last.end,`, ${name} = ${name}`);
            }
            this._addAssist(DartAssistKind.CONVERT_TO_NORMAL_PARAMETER,new core.DartList.literal());
        }
    }
    _addProposal_encapsulateField() : void {
        let fieldDeclaration : any = this.node.getAncestor((x : any) =>  {
            return is(x, any);
        });
        if (op(Op.EQUALS,fieldDeclaration,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (fieldDeclaration.isStatic) {
            AssistProcessor._coverageMarker();
            return;
        }
        let variableList : any = fieldDeclaration.fields;
        if (op(Op.EQUALS,variableList.keyword,null) && op(Op.EQUALS,variableList.type,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (variableList.isFinal) {
            AssistProcessor._coverageMarker();
            return;
        }
        let fields : core.DartList<any> = variableList.variables;
        if (fields.length != 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        let field : any = fields.first;
        let nameNode : any = field.name;
        let fieldElement : any = nameNode.staticElement;
        let name : string = nameNode.name;
        if (Identifier.isPrivateName(name)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (nameNode != this.node) {
            AssistProcessor._coverageMarker();
            return;
        }
        this._addReplaceEdit(range.node(nameNode),`_${name}`);
        let classDeclaration : any = fieldDeclaration.parent;
        for(let member of classDeclaration.members) {
            if (is(member, any)) {
                for(let parameter of member.parameters.parameters) {
                    let parameterElement : any = parameter.element;
                    if (is(parameterElement, any) && op(Op.EQUALS,parameterElement.field,fieldElement)) {
                        this._addReplaceEdit(range.node(parameter.identifier),`_${name}`);
                    }
                }
            }
        }
        let eol2 : string = this.eol + this.eol;
        let typeNameCode : string = variableList.type != null ? this._getNodeText(variableList.type) + ' ' : '';
        let getterCode : string = `${eol2}  ${typeNameCode}get ${name} => _${name};`;
        let setterCode : string = `${eol2}` + `  void set ${name}(${typeNameCode}${name}) {${this.eol}` + `    _${name} = ${name};${this.eol}` + '  }';
        this._addInsertEdit(fieldDeclaration.end,getterCode + setterCode);
        this._addAssist(DartAssistKind.ENCAPSULATE_FIELD,new core.DartList.literal());
    }
    _addProposal_exchangeOperands() : void {
        if (isNot(this.node, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let binaryExpression : any = this.node as any;
        if (!AssistProcessor._isOperatorSelected(binaryExpression,this.selectionOffset,this.selectionLength)) {
            AssistProcessor._coverageMarker();
            return;
        }
        {
            let leftOperand : any = binaryExpression.leftOperand;
            let rightOperand : any = binaryExpression.rightOperand;
            while (is(binaryExpression.parent, any)){
                let newBinaryExpression : any = binaryExpression.parent as any;
                if (newBinaryExpression.operator.type != binaryExpression.operator.type) {
                    AssistProcessor._coverageMarker();
                    break;
                }
                binaryExpression = newBinaryExpression;
            }
            let leftRange : any = range.startEnd(binaryExpression,leftOperand);
            let rightRange : any = range.startEnd(rightOperand,binaryExpression);
            this._addReplaceEdit(leftRange,this._getRangeText(rightRange));
            this._addReplaceEdit(rightRange,this._getRangeText(leftRange));
            {
                let operator : any = binaryExpression.operator;
                let newOperator : string = null;
                let operatorType : any = operator.type;
                if (op(Op.EQUALS,operatorType,TokenType.LT)) {
                    newOperator = '>';
                }else if (op(Op.EQUALS,operatorType,TokenType.LT_EQ)) {
                    newOperator = '>=';
                }else if (op(Op.EQUALS,operatorType,TokenType.GT)) {
                    newOperator = '<';
                }else if (op(Op.EQUALS,operatorType,TokenType.GT_EQ)) {
                    newOperator = '<=';
                }
                if (newOperator != null) {
                    this._addReplaceEdit(range.token(operator),newOperator);
                }
            }
        }
        this._addAssist(DartAssistKind.EXCHANGE_OPERANDS,new core.DartList.literal());
    }
    _addProposal_importAddShow() : void {
        let importDirective : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (op(Op.EQUALS,importDirective,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (importDirective.combinators.isNotEmpty) {
            AssistProcessor._coverageMarker();
            return;
        }
        let importElement : any = importDirective.element;
        if (op(Op.EQUALS,importElement,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let namespace : core.DartMap<string,any> = getImportNamespace(importElement);
        let referencedNames : collection.SplayTreeSet<string> = new collection.SplayTreeSet<string>();
        let visitor : _SimpleIdentifierRecursiveAstVisitor = new _SimpleIdentifierRecursiveAstVisitor((node : any) =>  {
            let element : any = node.staticElement;
            if (element != null && op(Op.EQUALS,namespace.get(node.name),element)) {
                referencedNames.add(element.displayName);
            }
        });
        this.unit.accept(visitor);
        if (referencedNames.isEmpty) {
            AssistProcessor._coverageMarker();
            return;
        }
        let showCombinator : string = ` show ${referencedNames.join(', ')}`;
        this._addInsertEdit(op(Op.MINUS,importDirective.end,1),showCombinator);
        this._addAssist(DartAssistKind.IMPORT_ADD_SHOW,new core.DartList.literal());
    }
    _addProposal_introduceLocalTestedType() : void {
        let node : any = this.node;
        if (is(node, any)) {
            node = (node as any).condition;
        }else if (is(node, any)) {
            node = (node as any).condition;
        }
        if (isNot(node, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let isExpression : any = node;
        let castType : any = isExpression.type.type;
        let castTypeCode : string = this._getNodeText(isExpression.type);
        let indent : string = this.utils.getIndent(1);
        let prefix : string;
        let targetBlock : any;
        {
            let statement : any = node.getAncestor((n : any) =>  {
                return is(n, any);
            });
            if (is(statement, any) && is(statement.thenStatement, any)) {
                targetBlock = statement.thenStatement;
            }else if (is(statement, any) && is(statement.body, any)) {
                targetBlock = statement.body;
            }else {
                AssistProcessor._coverageMarker();
                return;
            }
            prefix = this.utils.getNodePrefix(statement);
        }
        let offset : number;
        let statementPrefix : string;
        if (op(Op.EQUALS,isExpression.notOperator,null)) {
            offset = targetBlock.leftBracket.end;
            statementPrefix = indent;
        }else {
            offset = targetBlock.rightBracket.end;
            statementPrefix = '';
        }
        let builder : any = new bare.createInstance(any,null,this.file,offset);
        builder.append(this.eol + prefix + statementPrefix);
        builder.append(castTypeCode);
        let excluded : core.DartSet<string> = new core.DartSet<string>();
        {
            let scopedNameFinder : any = new bare.createInstance(any,null,offset);
            isExpression.accept(scopedNameFinder);
            excluded.addAll(scopedNameFinder.locals.keys.toSet());
        }
        {
            let suggestions : core.DartList<string> = getVariableNameSuggestionsForExpression(castType,null,excluded);
            builder.append(' ');
            builder.startPosition('NAME');
            for(let i : number = 0; i < suggestions.length; i++){
                let name : string = suggestions[i];
                if (i == 0) {
                    builder.append(name);
                }
                builder.addSuggestion(LinkedEditSuggestionKind.VARIABLE,name);
            }
            builder.endPosition();
        }
        builder.append(' = ');
        builder.append(this._getNodeText(isExpression.expression));
        builder.append(';');
        builder.setExitOffset();
        this._insertBuilder(builder);
        this._addAssist(DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,new core.DartList.literal());
    }
    _addProposal_invertIf() : void {
        if (isNot(this.node, any)) {
            return;
        }
        let ifStatement : any = this.node as any;
        let condition : any = ifStatement.condition;
        let thenStatement : any = ifStatement.thenStatement;
        let elseStatement : any = ifStatement.elseStatement;
        if (op(Op.EQUALS,thenStatement,null) || op(Op.EQUALS,elseStatement,null)) {
            return;
        }
        let invertedCondition : string = this.utils.invertCondition(condition);
        let thenSource : string = this._getNodeText(thenStatement);
        let elseSource : string = this._getNodeText(elseStatement);
        this._addReplaceEdit(range.node(condition),invertedCondition);
        this._addReplaceEdit(range.node(thenStatement),elseSource);
        this._addReplaceEdit(range.node(elseStatement),thenSource);
        this._addAssist(DartAssistKind.INVERT_IF_STATEMENT,new core.DartList.literal());
    }
    _addProposal_joinIfStatementInner() : void {
        let node : any = this.node;
        while (is(node, any)){
            node = node.parent;
        }
        if (isNot(node, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let targetIfStatement : any = node as any;
        if (targetIfStatement.elseStatement != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let targetThenStatement : any = targetIfStatement.thenStatement;
        let innerStatement : any = getSingleStatement(targetThenStatement);
        if (isNot(innerStatement, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let innerIfStatement : any = innerStatement as any;
        if (innerIfStatement.elseStatement != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let prefix : string = this.utils.getNodePrefix(targetIfStatement);
        let condition : string;
        {
            let targetCondition : any = targetIfStatement.condition;
            let innerCondition : any = innerIfStatement.condition;
            let targetConditionSource : string = this._getNodeText(targetCondition);
            let innerConditionSource : string = this._getNodeText(innerCondition);
            if (AssistProcessor._shouldWrapParenthesisBeforeAnd(targetCondition)) {
                targetConditionSource = `(${targetConditionSource})`;
            }
            if (AssistProcessor._shouldWrapParenthesisBeforeAnd(innerCondition)) {
                innerConditionSource = `(${innerConditionSource})`;
            }
            condition = `${targetConditionSource} && ${innerConditionSource}`;
        }
        {
            let innerThenStatement : any = innerIfStatement.thenStatement;
            let innerThenStatements : core.DartList<any> = getStatements(innerThenStatement);
            let lineRanges : any = this.utils.getLinesRangeStatements(innerThenStatements);
            let oldSource : string = this.utils.getRangeText(lineRanges);
            let newSource : string = this.utils.indentSourceLeftRight(oldSource,false);
            this._addReplaceEdit(range.node(targetIfStatement),`if (${condition}) {${this.eol}${newSource}${prefix}}`);
        }
        this._addAssist(DartAssistKind.JOIN_IF_WITH_INNER,new core.DartList.literal());
    }
    _addProposal_joinIfStatementOuter() : void {
        let node : any = this.node;
        while (is(node, any)){
            node = node.parent;
        }
        if (isNot(node, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let targetIfStatement : any = node as any;
        if (targetIfStatement.elseStatement != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let parent : any = targetIfStatement.parent;
        if (is(parent, any)) {
            if ((parent as any).statements.length != 1) {
                AssistProcessor._coverageMarker();
                return;
            }
            parent = parent.parent;
        }
        if (isNot(parent, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let outerIfStatement : any = parent as any;
        if (outerIfStatement.elseStatement != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let prefix : string = this.utils.getNodePrefix(outerIfStatement);
        let condition : string;
        {
            let targetCondition : any = targetIfStatement.condition;
            let outerCondition : any = outerIfStatement.condition;
            let targetConditionSource : string = this._getNodeText(targetCondition);
            let outerConditionSource : string = this._getNodeText(outerCondition);
            if (AssistProcessor._shouldWrapParenthesisBeforeAnd(targetCondition)) {
                targetConditionSource = `(${targetConditionSource})`;
            }
            if (AssistProcessor._shouldWrapParenthesisBeforeAnd(outerCondition)) {
                outerConditionSource = `(${outerConditionSource})`;
            }
            condition = `${outerConditionSource} && ${targetConditionSource}`;
        }
        {
            let targetThenStatement : any = targetIfStatement.thenStatement;
            let targetThenStatements : core.DartList<any> = getStatements(targetThenStatement);
            let lineRanges : any = this.utils.getLinesRangeStatements(targetThenStatements);
            let oldSource : string = this.utils.getRangeText(lineRanges);
            let newSource : string = this.utils.indentSourceLeftRight(oldSource,false);
            this._addReplaceEdit(range.node(outerIfStatement),`if (${condition}) {${this.eol}${newSource}${prefix}}`);
        }
        this._addAssist(DartAssistKind.JOIN_IF_WITH_OUTER,new core.DartList.literal());
    }
    _addProposal_joinVariableDeclaration_onAssignment() : void {
        if (is(this.node, any) && is(this.node.parent, any) && op(Op.EQUALS,(this.node.parent as any).leftHandSide,this.node) && is(this.node.parent.parent, any)) {
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        let assignExpression : any = this.node.parent as any;
        if (assignExpression.operator.type != TokenType.EQ) {
            AssistProcessor._coverageMarker();
            return;
        }
        let element : any = (this.node as any).staticElement;
        if (op(Op.EQUALS,element,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let declOffset : number = element.nameOffset;
        let declNode : any = new bare.createInstance(any,null,declOffset).searchWithin(this.unit);
        if (declNode != null && is(declNode.parent, any) && op(Op.EQUALS,(declNode.parent as any).name,declNode) && is(declNode.parent.parent, any) && is(declNode.parent.parent.parent, any)) {
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        let decl : any = declNode.parent as any;
        let declStatement : any = decl.parent.parent as any;
        if (decl.initializer != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (declStatement.variables.variables.length != 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        let assignStatement : any = this.node.parent.parent as any;
        if (is(assignStatement.parent, any) && op(Op.EQUALS,assignStatement.parent,declStatement.parent)) {
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        let block : any = assignStatement.parent as any;
        let statements : core.DartList<any> = block.statements;
        if (statements.indexOf(assignStatement) == statements.indexOf(declStatement) + 1) {
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        this._addReplaceEdit(range.endStart(declNode,assignExpression.operator),' ');
        this._addAssist(DartAssistKind.JOIN_VARIABLE_DECLARATION,new core.DartList.literal());
    }
    _addProposal_joinVariableDeclaration_onDeclaration() : void {
        let declList : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (declList != null && op(Op.EQUALS,declList.variables.length,1)) {
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        let decl : any = op(Op.INDEX,declList.variables,0);
        if (decl.initializer != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (is(declList.parent, any) && is(declList.parent.parent, any)) {
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        let declStatement : any = declList.parent as any;
        let block : any = declStatement.parent as any;
        let statements : core.DartList<any> = block.statements;
        let assignExpression : any;
        {
            let declIndex : number = statements.indexOf(declStatement);
            if (declIndex < statements.length - 1) {
            }else {
                AssistProcessor._coverageMarker();
                return;
            }
            let assignStatement : any = statements[declIndex + 1];
            if (is(assignStatement, any)) {
            }else {
                AssistProcessor._coverageMarker();
                return;
            }
            let expressionStatement : any = assignStatement as any;
            if (is(expressionStatement.expression, any)) {
            }else {
                AssistProcessor._coverageMarker();
                return;
            }
            assignExpression = expressionStatement.expression as any;
        }
        if (assignExpression.operator.type != TokenType.EQ) {
            AssistProcessor._coverageMarker();
            return;
        }
        this._addReplaceEdit(range.endStart(decl.name,assignExpression.operator),' ');
        this._addAssist(DartAssistKind.JOIN_VARIABLE_DECLARATION,new core.DartList.literal());
    }
    _addProposal_moveFlutterWidgetDown() : void {
        let exprGoingDown : any = identifyNewExpression(this.node);
        if (op(Op.EQUALS,exprGoingDown,null) || !isFlutterInstanceCreationExpression(exprGoingDown)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let exprGoingUp : any = findChildWidget(exprGoingDown);
        if (op(Op.EQUALS,exprGoingUp,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let stableChild : any = findChildArgument(exprGoingUp);
        if (op(Op.EQUALS,stableChild,null) || op(Op.EQUALS,stableChild.expression,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let exprGoingDownSrc : string = this.utils.getNodeText(exprGoingDown);
        let dnNewlineIdx : number = new core.DartString(exprGoingDownSrc).lastIndexOf(this.eol);
        if (dnNewlineIdx < 0 || dnNewlineIdx == new core.DartString(exprGoingDownSrc).length - 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        let exprGoingUpSrc : string = this.utils.getNodeText(exprGoingUp);
        let upNewlineIdx : number = new core.DartString(exprGoingUpSrc).lastIndexOf(this.eol);
        if (upNewlineIdx < 0 || upNewlineIdx == new core.DartString(exprGoingUpSrc).length - 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        this._swapFlutterWidgets(exprGoingDown,exprGoingUp,stableChild,DartAssistKind.MOVE_FLUTTER_WIDGET_DOWN);
    }
    _addProposal_moveFlutterWidgetUp() : void {
        let exprGoingUp : any = identifyNewExpression(this.node);
        if (op(Op.EQUALS,exprGoingUp,null) || !isFlutterInstanceCreationExpression(exprGoingUp)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let expr : any = ((t)=>(!!t)?t.parent:null)(((t)=>(!!t)?t.parent:null)(exprGoingUp.parent));
        if (op(Op.EQUALS,expr,null) || isNot(expr, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let exprGoingDown : any = expr;
        let stableChild : any = findChildArgument(exprGoingUp);
        if (op(Op.EQUALS,stableChild,null) || op(Op.EQUALS,stableChild.expression,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let exprGoingUpSrc : string = this.utils.getNodeText(exprGoingUp);
        let upNewlineIdx : number = new core.DartString(exprGoingUpSrc).lastIndexOf(this.eol);
        if (upNewlineIdx < 0 || upNewlineIdx == new core.DartString(exprGoingUpSrc).length - 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        let exprGoingDownSrc : string = this.utils.getNodeText(exprGoingDown);
        let dnNewlineIdx : number = new core.DartString(exprGoingDownSrc).lastIndexOf(this.eol);
        if (dnNewlineIdx < 0 || dnNewlineIdx == new core.DartString(exprGoingDownSrc).length - 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        this._swapFlutterWidgets(exprGoingDown,exprGoingUp,stableChild,DartAssistKind.MOVE_FLUTTER_WIDGET_UP);
    }
    _addProposal_removeTypeAnnotation() : void {
        let declarationList : any = this.node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        if (op(Op.EQUALS,declarationList,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let typeNode : any = declarationList.type;
        if (op(Op.EQUALS,typeNode,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (op(Op.EQUALS,declarationList.variables.length,1) && op(Op.INDEX,declarationList.variables,0).name.isSynthetic) {
            AssistProcessor._coverageMarker();
            return;
        }
        let firstVariable : any = op(Op.INDEX,declarationList.variables,0);
        if (this.selectionOffset > firstVariable.name.end) {
            AssistProcessor._coverageMarker();
            return;
        }
        let keyword : any = declarationList.keyword;
        let typeRange : any = range.startStart(typeNode,firstVariable);
        if (keyword != null && keyword.lexeme != 'var') {
            this._addReplaceEdit(typeRange,'');
        }else {
            this._addReplaceEdit(typeRange,'var ');
        }
        this._addAssist(DartAssistKind.REMOVE_TYPE_ANNOTATION,new core.DartList.literal());
    }
    _addProposal_reparentFlutterList() : void {
        if (isNot(this.node, any)) {
            return;
        }
        if ((this.node as any).elements.any((exp : any) =>  {
            return !(is(exp, any) && isFlutterInstanceCreationExpression(exp));
        })) {
            AssistProcessor._coverageMarker();
            return;
        }
        let literalSrc : string = this.utils.getNodeText(this.node);
        let sb : any = new bare.createInstance(any,null,this.file,this.node.offset);
        let newlineIdx : number = new core.DartString(literalSrc).lastIndexOf(this.eol);
        if (newlineIdx < 0 || newlineIdx == new core.DartString(literalSrc).length - 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        let indentOld : string = this.utils.getLinePrefix(op(Op.PLUS,op(Op.PLUS,this.node.offset,1),newlineIdx));
        let indentArg : string = `${indentOld}${this.utils.getIndent(1)}`;
        let indentList : string = `${indentOld}${this.utils.getIndent(2)}`;
        sb.append('[');
        sb.append(this.eol);
        sb.append(indentArg);
        sb.append('new ');
        sb.startPosition('WIDGET');
        sb.append('widget');
        sb.endPosition();
        sb.append('(');
        sb.append(this.eol);
        sb.append(indentList);
        sb.append('children: ');
        sb.append(new core.DartString(literalSrc).replaceAll(new core.DartRegExp(`^${indentOld}`,{
            multiLine : true}),`${indentList}`));
        sb.append(',');
        sb.append(this.eol);
        sb.append(indentArg);
        sb.append('),');
        sb.append(this.eol);
        sb.append(indentOld);
        sb.append(']');
        this.exitPosition = this._newPosition(op(Op.PLUS,sb.offset,sb.length));
        this._insertBuilder(sb,new core.DartString(literalSrc).length);
        this._addAssist(DartAssistKind.REPARENT_FLUTTER_LIST,new core.DartList.literal());
    }
    _addProposal_reparentFlutterWidget() : void {
        let newExpr : any = identifyNewExpression(this.node);
        if (op(Op.EQUALS,newExpr,null) || !isFlutterInstanceCreationExpression(newExpr)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let newExprSrc : string = this.utils.getNodeText(newExpr);
        let sb : any = new bare.createInstance(any,null,this.file,newExpr.offset);
        sb.append('new ');
        sb.startPosition('WIDGET');
        sb.append('widget');
        sb.endPosition();
        sb.append('(');
        if (new core.DartString(newExprSrc).contains(this.eol)) {
            let newlineIdx : number = new core.DartString(newExprSrc).lastIndexOf(this.eol);
            let eolLen : number = new core.DartString(this.eol).length;
            if (newlineIdx == new core.DartString(newExprSrc).length - eolLen) {
                newlineIdx -= eolLen;
            }
            let indentOld : string = this.utils.getLinePrefix(op(Op.PLUS,op(Op.PLUS,newExpr.offset,eolLen),newlineIdx));
            let indentNew : string = `${indentOld}${this.utils.getIndent(1)}`;
            sb.append(this.eol);
            sb.append(indentNew);
            newExprSrc = new core.DartString(newExprSrc).replaceAll(new core.DartRegExp(`^${indentOld}`,{
                multiLine : true}),`${indentNew}`);
            newExprSrc += `,${this.eol}${indentOld}`;
        }
        sb.startPosition('CHILD');
        sb.append('child');
        sb.endPosition();
        sb.append(': ');
        sb.append(newExprSrc);
        sb.append(')');
        this.exitPosition = this._newPosition(op(Op.PLUS,sb.offset,sb.length));
        this._insertBuilder(sb,newExpr.length);
        this._addAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,new core.DartList.literal());
    }
    _addProposal_replaceConditionalWithIfElse() : void {
        let conditional : any = null;
        let statement : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (op(Op.EQUALS,statement,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let inVariable : boolean = false;
        if (is(statement, any)) {
            let variableStatement : any = statement;
            for(let variable of variableStatement.variables.variables) {
                if (is(variable.initializer, any)) {
                    conditional = variable.initializer as any;
                    inVariable = true;
                    break;
                }
            }
        }
        let inAssignment : boolean = false;
        if (is(statement, any)) {
            let exprStmt : any = statement;
            if (is(exprStmt.expression, any)) {
                let assignment : any = exprStmt.expression as any;
                if (op(Op.EQUALS,assignment.operator.type,TokenType.EQ) && is(assignment.rightHandSide, any)) {
                    conditional = assignment.rightHandSide as any;
                    inAssignment = true;
                }
            }
        }
        let inReturn : boolean = false;
        if (is(statement, any)) {
            let returnStatement : any = statement;
            if (is(returnStatement.expression, any)) {
                conditional = returnStatement.expression as any;
                inReturn = true;
            }
        }
        let indent : string = this.utils.getIndent(1);
        let prefix : string = this.utils.getNodePrefix(statement);
        if (inVariable) {
            let variable : any = conditional.parent as any;
            this._addRemoveEdit(range.endEnd(variable.name,conditional));
            let conditionSrc : string = this._getNodeText(conditional.condition);
            let thenSrc : string = this._getNodeText(conditional.thenExpression);
            let elseSrc : string = this._getNodeText(conditional.elseExpression);
            let name : string = variable.name.name;
            let src : string = this.eol;
            src += prefix + `if (${conditionSrc}) {` + this.eol;
            src += prefix + indent + `${name} = ${thenSrc};` + this.eol;
            src += prefix + '} else {' + this.eol;
            src += prefix + indent + `${name} = ${elseSrc};` + this.eol;
            src += prefix + '}';
            this._addReplaceEdit(range.endLength(statement,0),src);
        }
        if (inAssignment) {
            let assignment : any = conditional.parent as any;
            let leftSide : any = assignment.leftHandSide;
            let conditionSrc : string = this._getNodeText(conditional.condition);
            let thenSrc : string = this._getNodeText(conditional.thenExpression);
            let elseSrc : string = this._getNodeText(conditional.elseExpression);
            let name : string = this._getNodeText(leftSide);
            let src : string = '';
            src += `if (${conditionSrc}) {` + this.eol;
            src += prefix + indent + `${name} = ${thenSrc};` + this.eol;
            src += prefix + '} else {' + this.eol;
            src += prefix + indent + `${name} = ${elseSrc};` + this.eol;
            src += prefix + '}';
            this._addReplaceEdit(range.node(statement),src);
        }
        if (inReturn) {
            let conditionSrc : string = this._getNodeText(conditional.condition);
            let thenSrc : string = this._getNodeText(conditional.thenExpression);
            let elseSrc : string = this._getNodeText(conditional.elseExpression);
            let src : string = '';
            src += `if (${conditionSrc}) {` + this.eol;
            src += prefix + indent + `return ${thenSrc};` + this.eol;
            src += prefix + '} else {' + this.eol;
            src += prefix + indent + `return ${elseSrc};` + this.eol;
            src += prefix + '}';
            this._addReplaceEdit(range.node(statement),src);
        }
        this._addAssist(DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,new core.DartList.literal());
    }
    _addProposal_replaceIfElseWithConditional() : void {
        if (isNot(this.node, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let ifStatement : any = this.node as any;
        let thenStatement : any = getSingleStatement(ifStatement.thenStatement);
        let elseStatement : any = getSingleStatement(ifStatement.elseStatement);
        if (op(Op.EQUALS,thenStatement,null) || op(Op.EQUALS,elseStatement,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (is(thenStatement, any) && is(elseStatement, any)) {
            let conditionSrc : string = this._getNodeText(ifStatement.condition);
            let theSrc : string = this._getNodeText(thenStatement.expression);
            let elseSrc : string = this._getNodeText(elseStatement.expression);
            this._addReplaceEdit(range.node(ifStatement),`return ${conditionSrc} ? ${theSrc} : ${elseSrc};`);
        }
        if (is(thenStatement, any) && is(elseStatement, any)) {
            let thenExpression : any = thenStatement.expression;
            let elseExpression : any = elseStatement.expression;
            if (is(thenExpression, any) && is(elseExpression, any)) {
                let thenAssignment : any = thenExpression;
                let elseAssignment : any = elseExpression;
                let thenTarget : string = this._getNodeText(thenAssignment.leftHandSide);
                let elseTarget : string = this._getNodeText(elseAssignment.leftHandSide);
                if (op(Op.EQUALS,thenAssignment.operator.type,TokenType.EQ) && op(Op.EQUALS,elseAssignment.operator.type,TokenType.EQ) && thenTarget == elseTarget) {
                    let conditionSrc : string = this._getNodeText(ifStatement.condition);
                    let theSrc : string = this._getNodeText(thenAssignment.rightHandSide);
                    let elseSrc : string = this._getNodeText(elseAssignment.rightHandSide);
                    this._addReplaceEdit(range.node(ifStatement),`${thenTarget} = ${conditionSrc} ? ${theSrc} : ${elseSrc};`);
                }
            }
        }
        this._addAssist(DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL,new core.DartList.literal());
    }
    _addProposal_splitAndCondition() : void {
        if (isNot(this.node, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let binaryExpression : any = this.node as any;
        if (!AssistProcessor._isOperatorSelected(binaryExpression,this.selectionOffset,this.selectionLength)) {
            AssistProcessor._coverageMarker();
            return;
        }
        if (binaryExpression.operator.type != TokenType.AMPERSAND_AMPERSAND) {
            AssistProcessor._coverageMarker();
            return;
        }
        let statement : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (isNot(statement, any)) {
            AssistProcessor._coverageMarker();
            return;
        }
        let ifStatement : any = statement as any;
        if (ifStatement.elseStatement != null) {
            AssistProcessor._coverageMarker();
            return;
        }
        let condition : any = binaryExpression;
        while (is(condition.parent, any) && op(Op.EQUALS,(condition.parent as any).operator.type,TokenType.AMPERSAND_AMPERSAND)){
            condition = condition.parent as any;
        }
        if (ifStatement.condition != condition) {
            AssistProcessor._coverageMarker();
            return;
        }
        let prefix : string = this.utils.getNodePrefix(ifStatement);
        let indent : string = this.utils.getIndent(1);
        let rightConditionSource : string;
        {
            let rightConditionRange : any = range.startEnd(binaryExpression.rightOperand,condition);
            rightConditionSource = this._getRangeText(rightConditionRange);
        }
        this._addRemoveEdit(range.endEnd(binaryExpression.leftOperand,condition));
        let thenStatement : any = ifStatement.thenStatement;
        if (is(thenStatement, any)) {
            let thenBlock : any = thenStatement;
            let thenBlockRange : any = range.node(thenBlock);
            {
                let source : string = `${this.eol}${prefix}${indent}if (${rightConditionSource}) {`;
                let thenBlockInsideOffset : number = op(Op.PLUS,thenBlockRange.offset,1);
                this._addInsertEdit(thenBlockInsideOffset,source);
            }
            {
                let thenBlockEnd : number = thenBlockRange.end;
                let source : string = `${indent}}`;
                source += `${this.eol}${prefix}`;
                this._addInsertEdit(thenBlockEnd - 1,source);
            }
        }else {
            let source : string = `${this.eol}${prefix}${indent}if (${rightConditionSource})`;
            this._addInsertEdit(op(Op.PLUS,ifStatement.rightParenthesis.offset,1),source);
        }
        {
            let thenStatements : core.DartList<any> = getStatements(thenStatement);
            let linesRange : any = this.utils.getLinesRangeStatements(thenStatements);
            let thenIndentOld : string = `${prefix}${indent}`;
            let thenIndentNew : string = `${thenIndentOld}${indent}`;
            this._addIndentEdit(linesRange,thenIndentOld,thenIndentNew);
        }
        this._addAssist(DartAssistKind.SPLIT_AND_CONDITION,new core.DartList.literal());
    }
    _addProposal_splitVariableDeclaration() : void {
        let statement : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (statement != null && is(statement.parent, any)) {
        }else {
            AssistProcessor._coverageMarker();
            return;
        }
        let variables : core.DartList<any> = statement.variables.variables;
        if (variables.length != 1) {
            AssistProcessor._coverageMarker();
            return;
        }
        let variable : any = variables[0];
        let initializer : any = variable.initializer;
        if (op(Op.EQUALS,initializer,null)) {
            AssistProcessor._coverageMarker();
            return;
        }
        this._addRemoveEdit(range.endStart(variable.name,statement.semicolon));
        let indent : string = this.utils.getNodePrefix(statement);
        let name : string = variable.name.name;
        let initSrc : string = this._getNodeText(initializer);
        let assignRange : any = range.endLength(statement,0);
        this._addReplaceEdit(assignRange,this.eol + indent + name + ' = ' + initSrc + ';');
        this._addAssist(DartAssistKind.SPLIT_VARIABLE_DECLARATION,new core.DartList.literal());
    }
    _addProposal_surroundWith() : void {
        let selectedStatements : core.DartList<any>;
        {
            let selection : any = new bare.createInstance(any,null,this.selectionOffset,this.selectionLength);
            let selectionAnalyzer : any = new bare.createInstance(any,null,this.unit,selection);
            this.unit.accept(selectionAnalyzer);
            let selectedNodes : core.DartList<any> = selectionAnalyzer.selectedNodes;
            selectedStatements = new core.DartList.literal();
            for(let selectedNode of selectedNodes) {
                if (is(selectedNode, any)) {
                    selectedStatements.add(selectedNode);
                }
            }
            if (selectedStatements.isEmpty || selectedStatements.length != selectedNodes.length) {
                return;
            }
        }
        let firstStatement : any = selectedStatements[0];
        let lastStatement : any = selectedStatements[selectedStatements.length - 1];
        let statementsRange : any = this.utils.getLinesRangeStatements(selectedStatements);
        let indentOld : string = this.utils.getNodePrefix(firstStatement);
        let indentNew : string = `${indentOld}${this.utils.getIndent(1)}`;
        let indentedCode : string = this.utils.replaceSourceRangeIndent(statementsRange,indentOld,indentNew);
        {
            this._addInsertEdit(statementsRange.offset,`${indentOld}{${this.eol}`);
            this._addIndentEdit(statementsRange,indentOld,indentNew);
            this._addInsertEdit(statementsRange.end,`${indentOld}}${this.eol}`);
            this.exitPosition = this._newPosition(lastStatement.end);
            this._addAssist(DartAssistKind.SURROUND_WITH_BLOCK,new core.DartList.literal());
        }
        {
            let offset : number = statementsRange.offset;
            let sb : any = new bare.createInstance(any,null,this.file,offset);
            sb.append(indentOld);
            sb.append('if (');
            {
                sb.startPosition('CONDITION');
                sb.append('condition');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('}');
            this.exitPosition = this._newPosition(op(Op.PLUS,sb.offset,sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb,statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_IF,new core.DartList.literal());
        }
        {
            let offset : number = statementsRange.offset;
            let sb : any = new bare.createInstance(any,null,this.file,offset);
            sb.append(indentOld);
            sb.append('while (');
            {
                sb.startPosition('CONDITION');
                sb.append('condition');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('}');
            this.exitPosition = this._newPosition(op(Op.PLUS,sb.offset,sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb,statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_WHILE,new core.DartList.literal());
        }
        {
            let offset : number = statementsRange.offset;
            let sb : any = new bare.createInstance(any,null,this.file,offset);
            sb.append(indentOld);
            sb.append('for (var ');
            {
                sb.startPosition('NAME');
                sb.append('item');
                sb.endPosition();
            }
            sb.append(' in ');
            {
                sb.startPosition('ITERABLE');
                sb.append('iterable');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('}');
            this.exitPosition = this._newPosition(op(Op.PLUS,sb.offset,sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb,statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_FOR_IN,new core.DartList.literal());
        }
        {
            let offset : number = statementsRange.offset;
            let sb : any = new bare.createInstance(any,null,this.file,offset);
            sb.append(indentOld);
            sb.append('for (var ');
            {
                sb.startPosition('VAR');
                sb.append('v');
                sb.endPosition();
            }
            sb.append(' = ');
            {
                sb.startPosition('INIT');
                sb.append('init');
                sb.endPosition();
            }
            sb.append('; ');
            {
                sb.startPosition('CONDITION');
                sb.append('condition');
                sb.endPosition();
            }
            sb.append('; ');
            {
                sb.startPosition('INCREMENT');
                sb.append('increment');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('}');
            this.exitPosition = this._newPosition(op(Op.PLUS,sb.offset,sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb,statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_FOR,new core.DartList.literal());
        }
        {
            let offset : number = statementsRange.offset;
            let sb : any = new bare.createInstance(any,null,this.file,offset);
            sb.append(indentOld);
            sb.append('do {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('} while (');
            {
                sb.startPosition('CONDITION');
                sb.append('condition');
                sb.endPosition();
            }
            sb.append(');');
            this.exitPosition = this._newPosition(op(Op.PLUS,sb.offset,sb.length));
            sb.append(this.eol);
            this._insertBuilder(sb,statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_DO_WHILE,new core.DartList.literal());
        }
        {
            let offset : number = statementsRange.offset;
            let sb : any = new bare.createInstance(any,null,this.file,offset);
            sb.append(indentOld);
            sb.append('try {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('} on ');
            {
                sb.startPosition('EXCEPTION_TYPE');
                sb.append('Exception');
                sb.endPosition();
            }
            sb.append(' catch (');
            {
                sb.startPosition('EXCEPTION_VAR');
                sb.append('e');
                sb.endPosition();
            }
            sb.append(') {');
            sb.append(this.eol);
            sb.append(indentNew);
            {
                sb.startPosition('CATCH');
                sb.append('// TODO');
                sb.endPosition();
                sb.setExitOffset();
            }
            sb.append(this.eol);
            sb.append(indentOld);
            sb.append('}');
            sb.append(this.eol);
            this._insertBuilder(sb,statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_TRY_CATCH,new core.DartList.literal());
        }
        {
            let offset : number = statementsRange.offset;
            let sb : any = new bare.createInstance(any,null,this.file,offset);
            sb.append(indentOld);
            sb.append('try {');
            sb.append(this.eol);
            sb.append(indentedCode);
            sb.append(indentOld);
            sb.append('} finally {');
            sb.append(this.eol);
            sb.append(indentNew);
            {
                sb.startPosition('FINALLY');
                sb.append('// TODO');
                sb.endPosition();
                sb.setExitOffset();
            }
            sb.setExitOffset();
            sb.append(this.eol);
            sb.append(indentOld);
            sb.append('}');
            sb.append(this.eol);
            this._insertBuilder(sb,statementsRange.length);
            this._addAssist(DartAssistKind.SURROUND_WITH_TRY_FINALLY,new core.DartList.literal());
        }
    }
    _addRemoveEdit(range : any) : void {
        this._addReplaceEdit(range,'');
    }
    _addReplaceEdit(range : any,text : string) : void {
        let edit : any = new bare.createInstance(any,null,range.offset,range.length,text);
        doSourceChange_addElementEdit(this.change,this.unitElement,edit);
    }
    _configureTargetLocation(target : core.DartObject) : void {
        this.utils.targetClassElement = null;
        if (is(target, any)) {
            let targetClassDeclaration : any = target.getAncestor((node : any) =>  {
                return is(node, any);
            });
            if (targetClassDeclaration != null) {
                this.utils.targetClassElement = targetClassDeclaration.element;
            }
        }
    }
    _getLinkedPosition(groupId : string) : any {
        let group : any = this.linkedPositionGroups.get(groupId);
        if (op(Op.EQUALS,group,null)) {
            group = new bare.createInstance(any,null);
            this.linkedPositionGroups.set(groupId,group);
        }
        return group;
    }
    _getNodeText(node : any) : string {
        return this.utils.getNodeText(node);
    }
    _getRangeText(range : any) : string {
        return this.utils.getRangeText(range);
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
    _modificationStamp(filePath : string) : number {
        return this.driver.fsState.getFileForPath(filePath).exists ? 0 : -1;
    }
    _newPosition(offset : number) : any {
        return new bare.createInstance(any,null,this.file,offset);
    }
    _swapFlutterWidgets(exprGoingDown : any,exprGoingUp : any,stableChild : any,assistKind : any) : void {
        let currentSource : string = this.unitElement.context.getContents(this.source).data;
        let lineInfo : any = new bare.createInstance(any,null,currentSource);
        let currLn : number = lineInfo.getLocation(exprGoingUp.offset).lineNumber;
        let lnOffset : number = lineInfo.getOffsetOfLine(currLn);
        let sb : any = new bare.createInstance(any,null,this.file,exprGoingDown.offset);
        let argSrc : string = this.utils.getText(exprGoingUp.offset,lnOffset - exprGoingUp.offset);
        sb.append(argSrc);
        var getSrc : (expr : any) => string = (expr : any) : string =>  {
            let startLn : number = lineInfo.getLocation(expr.offset).lineNumber;
            let startOffset : number = lineInfo.getOffsetOfLine(startLn - 1);
            let endLn : number = op(Op.PLUS,lineInfo.getLocation(op(Op.PLUS,expr.offset,expr.length)).lineNumber,1);
            let curOffset : number = lineInfo.getOffsetOfLine(endLn - 1);
            return this.utils.getText(startOffset,curOffset - startOffset);
        };
        let outerIndent : string = this.utils.getNodePrefix(exprGoingDown.parent);
        let innerIndent : string = this.utils.getNodePrefix(exprGoingUp.parent);
        exprGoingUp.argumentList.arguments.forEach((arg : any) =>  {
            if (is(arg, any) && op(Op.EQUALS,arg.name.label.name,'child')) {
                if (stableChild != arg) {
                    AssistProcessor._coverageMarker();
                    return;
                }
                currLn = lineInfo.getLocation(stableChild.offset).lineNumber;
                lnOffset = lineInfo.getOffsetOfLine(currLn - 1);
                argSrc = this.utils.getText(lnOffset,op(Op.MINUS,stableChild.expression.offset,lnOffset));
                argSrc = new core.DartString(argSrc).replaceAll(new core.DartRegExp(`^${innerIndent}`,{
                    multiLine : true}),`${outerIndent}`);
                sb.append(argSrc);
                let nextLn : number = lineInfo.getLocation(exprGoingDown.offset).lineNumber;
                lnOffset = lineInfo.getOffsetOfLine(nextLn);
                argSrc = this.utils.getText(exprGoingDown.offset,lnOffset - exprGoingDown.offset);
                sb.append(argSrc);
                exprGoingDown.argumentList.arguments.forEach((val : any) =>  {
                    if (is(val, any) && op(Op.EQUALS,val.name.label.name,'child')) {
                        sb.append(this.utils.getNodePrefix(arg.name));
                        argSrc = this.utils.getNodeText(stableChild);
                        sb.append(argSrc);
                        if (op(Op.EQUALS,assistKind,DartAssistKind.MOVE_FLUTTER_WIDGET_UP)) {
                            sb.append(`,${this.eol}`);
                        }
                    }else {
                        argSrc = getSrc(val);
                        argSrc = new core.DartString(argSrc).replaceAll(new core.DartRegExp(`^${outerIndent}`,{
                            multiLine : true}),`${innerIndent}`);
                        sb.append(argSrc);
                    }
                });
                if (op(Op.EQUALS,assistKind,DartAssistKind.MOVE_FLUTTER_WIDGET_DOWN)) {
                    sb.append(`,${this.eol}`);
                }
                sb.append(innerIndent);
                sb.append(`),${this.eol}`);
            }else {
                argSrc = getSrc(arg);
                argSrc = new core.DartString(argSrc).replaceAll(new core.DartRegExp(`^${innerIndent}`,{
                    multiLine : true}),`${outerIndent}`);
                sb.append(argSrc);
            }
        });
        sb.append(outerIndent);
        sb.append(')');
        this.exitPosition = this._newPosition(op(Op.PLUS,sb.offset,sb.length));
        this._insertBuilder(sb,exprGoingDown.length);
        this._addAssist(assistKind,new core.DartList.literal());
    }
    static _coverageMarker() : void {
    }
    static _isOperatorSelected(binaryExpression : any,offset : number,length : number) : boolean {
        let left : any = binaryExpression.leftOperand;
        let right : any = binaryExpression.rightOperand;
        if (offset >= left.endToken.end && offset + length <= right.offset) {
            AssistProcessor._coverageMarker();
            return true;
        }
        if (offset == left.offset && offset + length == right.endToken.end) {
            if (is(left, any) || is(right, any)) {
                AssistProcessor._coverageMarker();
                return false;
            }
            AssistProcessor._coverageMarker();
            return true;
        }
        AssistProcessor._coverageMarker();
        return false;
    }
    static _shouldWrapParenthesisBeforeAnd(expr : any) : boolean {
        if (is(expr, any)) {
            let binary : any = expr;
            let precedence : number = binary.operator.type.precedence;
            return precedence < TokenClass.LOGICAL_AND_OPERATOR.precedence;
        }
        return false;
    }
}

export namespace DefaultAssistContributor {
    export type Constructors = 'DefaultAssistContributor';
    export type Interface = Omit<DefaultAssistContributor, Constructors>;
}
@DartClass
export class DefaultAssistContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalComputeAssists(context : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                let processor : AssistProcessor = new AssistProcessor(context);
                return processor.compute();
            } catch (__error__) {

                if (is(__error__,any)){
                    return Assist.EMPTY_LIST;
                }
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultAssistContributor() {
    }
}

export namespace _SimpleIdentifierRecursiveAstVisitor {
    export type Constructors = '_SimpleIdentifierRecursiveAstVisitor';
    export type Interface = Omit<_SimpleIdentifierRecursiveAstVisitor, Constructors>;
}
@DartClass
export class _SimpleIdentifierRecursiveAstVisitor extends any {
    visitor : (node : any) => any;

    constructor(visitor : (node : any) => any) {
    }
    @defaultConstructor
    _SimpleIdentifierRecursiveAstVisitor(visitor : (node : any) => any) {
        this.visitor = visitor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        this.visitor(node);
    }
}

export class properties {
}
