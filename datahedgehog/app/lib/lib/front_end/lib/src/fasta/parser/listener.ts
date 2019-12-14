/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser/listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./../../scanner/token";
import * as lib5 from "./parser";
import * as lib6 from "./../util/link";
import * as lib7 from "./identifier_context";
import * as lib8 from "./../scanner/token";
import * as lib9 from "./../fasta_codes";

export namespace Listener {
    export type Constructors = 'Listener';
    export type Interface = Omit<Listener, Constructors>;
}
@DartClass
export class Listener {
    recoverableErrors : core.DartList<ParserError>;

    get uri() : lib3.Uri {
        return null;
    }
    logEvent(name : string) : void {
    }
    set suppressParseErrors(value : boolean) {
    }
    beginArguments(token : lib4.Token) : void {
    }
    endArguments(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Arguments");
    }
    handleAsyncModifier(asyncToken : lib4.Token,starToken : lib4.Token) : void {
        this.logEvent("AsyncModifier");
    }
    beginAwaitExpression(token : lib4.Token) : void {
    }
    endAwaitExpression(beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("AwaitExpression");
    }
    beginBlock(token : lib4.Token) : void {
    }
    endBlock(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Block");
    }
    beginCascade(token : lib4.Token) : void {
    }
    endCascade() : void {
        this.logEvent("Cascade");
    }
    beginCaseExpression(caseKeyword : lib4.Token) : void {
    }
    endCaseExpression(colon : lib4.Token) : void {
    }
    beginClassBody(token : lib4.Token) : void {
    }
    endClassBody(memberCount : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("ClassBody");
    }
    beginClassDeclaration(beginToken : lib4.Token,name : lib4.Token) : void {
    }
    endClassDeclaration(interfacesCount : number,beginToken : lib4.Token,classKeyword : lib4.Token,extendsKeyword : lib4.Token,implementsKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("ClassDeclaration");
    }
    beginCombinators(token : lib4.Token) : void {
    }
    endCombinators(count : number) : void {
        this.logEvent("Combinators");
    }
    beginCompilationUnit(token : lib4.Token) : void {
    }
    endCompilationUnit(count : number,token : lib4.Token) : void {
        this.logEvent("CompilationUnit");
    }
    beginConstLiteral(token : lib4.Token) : void {
    }
    endConstLiteral(token : lib4.Token) : void {
        this.logEvent("ConstLiteral");
    }
    beginConstructorReference(start : lib4.Token) : void {
    }
    endConstructorReference(start : lib4.Token,periodBeforeName : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("ConstructorReference");
    }
    beginDoWhileStatement(token : lib4.Token) : void {
    }
    endDoWhileStatement(doKeyword : lib4.Token,whileKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("DoWhileStatement");
    }
    beginDoWhileStatementBody(token : lib4.Token) : void {
    }
    endDoWhileStatementBody(token : lib4.Token) : void {
        this.logEvent("DoWhileStatementBody");
    }
    beginWhileStatementBody(token : lib4.Token) : void {
    }
    endWhileStatementBody(token : lib4.Token) : void {
        this.logEvent("WhileStatementBody");
    }
    beginEnum(enumKeyword : lib4.Token) : void {
    }
    endEnum(enumKeyword : lib4.Token,endBrace : lib4.Token,count : number) : void {
        this.logEvent("Enum");
    }
    beginExport(token : lib4.Token) : void {
    }
    endExport(exportKeyword : lib4.Token,semicolon : lib4.Token) : void {
        this.logEvent("Export");
    }
    beginExpression(token : lib4.Token) : void {
    }
    beginExpressionStatement(token : lib4.Token) : void {
    }
    handleRecoverExpression(token : lib4.Token) : void {
        this.logEvent("RecoverExpression");
    }
    endExpressionStatement(token : lib4.Token) : void {
        this.logEvent("ExpressionStatement");
    }
    beginFactoryMethod(token : lib4.Token) : void {
    }
    endFactoryMethod(beginToken : lib4.Token,factoryKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("FactoryMethod");
    }
    beginFormalParameter(token : lib4.Token,kind : lib5.MemberKind) : void {
    }
    endFormalParameter(thisKeyword : lib4.Token,nameToken : lib4.Token,kind : lib5.FormalParameterType,memberKind : lib5.MemberKind) : void {
        this.logEvent("FormalParameter");
    }
    handleNoFormalParameters(token : lib4.Token,kind : lib5.MemberKind) : void {
        this.logEvent("NoFormalParameters");
    }
    beginFormalParameters(token : lib4.Token,kind : lib5.MemberKind) : void {
    }
    endFormalParameters(count : number,beginToken : lib4.Token,endToken : lib4.Token,kind : lib5.MemberKind) : void {
        this.logEvent("FormalParameters");
    }
    endFields(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Fields");
    }
    beginForStatement(token : lib4.Token) : void {
    }
    endForStatement(forKeyword : lib4.Token,leftSeparator : lib4.Token,updateExpressionCount : number,endToken : lib4.Token) : void {
        this.logEvent("ForStatement");
    }
    beginForStatementBody(token : lib4.Token) : void {
    }
    endForStatementBody(token : lib4.Token) : void {
        this.logEvent("ForStatementBody");
    }
    endForIn(awaitToken : lib4.Token,forToken : lib4.Token,leftParenthesis : lib4.Token,inKeyword : lib4.Token,rightParenthesis : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("ForIn");
    }
    beginForInExpression(token : lib4.Token) : void {
    }
    endForInExpression(token : lib4.Token) : void {
        this.logEvent("ForInExpression");
    }
    beginForInBody(token : lib4.Token) : void {
    }
    endForInBody(token : lib4.Token) : void {
        this.logEvent("ForInBody");
    }
    beginFunction(token : lib4.Token) : void {
    }
    endFunction(getOrSet : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Function");
    }
    beginFunctionDeclaration(token : lib4.Token) : void {
    }
    endFunctionDeclaration(token : lib4.Token) : void {
        this.logEvent("FunctionDeclaration");
    }
    beginBlockFunctionBody(token : lib4.Token) : void {
    }
    endBlockFunctionBody(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("BlockFunctionBody");
    }
    handleNoFunctionBody(token : lib4.Token) : void {
        this.logEvent("NoFunctionBody");
    }
    handleFunctionBodySkipped(token : lib4.Token,isExpressionBody : boolean) : void {
    }
    beginFunctionName(token : lib4.Token) : void {
    }
    endFunctionName(beginToken : lib4.Token,token : lib4.Token) : void {
        this.logEvent("FunctionName");
    }
    beginFunctionTypeAlias(token : lib4.Token) : void {
    }
    endFunctionTypeAlias(typedefKeyword : lib4.Token,equals : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("FunctionTypeAlias");
    }
    beginMixinApplication(token : lib4.Token) : void {
    }
    endMixinApplication(withKeyword : lib4.Token) : void {
        this.logEvent("MixinApplication");
    }
    beginNamedMixinApplication(beginToken : lib4.Token,name : lib4.Token) : void {
    }
    endNamedMixinApplication(begin : lib4.Token,classKeyword : lib4.Token,equals : lib4.Token,implementsKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("NamedMixinApplication");
    }
    beginHide(hideKeyword : lib4.Token) : void {
    }
    endHide(hideKeyword : lib4.Token) : void {
        this.logEvent("Hide");
    }
    beginIdentifierList(token : lib4.Token) : void {
    }
    endIdentifierList(count : number) : void {
        this.logEvent("IdentifierList");
    }
    beginTypeList(token : lib4.Token) : void {
    }
    endTypeList(count : number) : void {
        this.logEvent("TypeList");
    }
    beginIfStatement(token : lib4.Token) : void {
    }
    endIfStatement(ifToken : lib4.Token,elseToken : lib4.Token) : void {
        this.logEvent("IfStatement");
    }
    beginThenStatement(token : lib4.Token) : void {
    }
    endThenStatement(token : lib4.Token) : void {
        this.logEvent("ThenStatement");
    }
    beginElseStatement(token : lib4.Token) : void {
    }
    endElseStatement(token : lib4.Token) : void {
        this.logEvent("ElseStatement");
    }
    beginImport(importKeyword : lib4.Token) : void {
    }
    endImport(importKeyword : lib4.Token,DeferredKeyword : lib4.Token,asKeyword : lib4.Token,semicolon : lib4.Token) : void {
        this.logEvent("Import");
    }
    beginConditionalUris(token : lib4.Token) : void {
    }
    endConditionalUris(count : number) : void {
        this.logEvent("ConditionalUris");
    }
    beginConditionalUri(ifKeyword : lib4.Token) : void {
    }
    endConditionalUri(ifKeyword : lib4.Token,equalitySign : lib4.Token) : void {
        this.logEvent("ConditionalUri");
    }
    beginDottedName(token : lib4.Token) : void {
    }
    endDottedName(count : number,firstIdentifier : lib4.Token) : void {
        this.logEvent("DottedName");
    }
    beginInitializedIdentifier(token : lib4.Token) : void {
    }
    endInitializedIdentifier(nameToken : lib4.Token) : void {
        this.logEvent("InitializedIdentifier");
    }
    beginFieldInitializer(token : lib4.Token) : void {
    }
    endFieldInitializer(assignment : lib4.Token,token : lib4.Token) : void {
        this.logEvent("FieldInitializer");
    }
    handleNoFieldInitializer(token : lib4.Token) : void {
        this.logEvent("NoFieldInitializer");
    }
    beginVariableInitializer(token : lib4.Token) : void {
    }
    endVariableInitializer(assignmentOperator : lib4.Token) : void {
        this.logEvent("VariableInitializer");
    }
    handleNoVariableInitializer(token : lib4.Token) : void {
        this.logEvent("NoVariableInitializer");
    }
    beginInitializer(token : lib4.Token) : void {
    }
    endInitializer(token : lib4.Token) : void {
        this.logEvent("ConstructorInitializer");
    }
    beginInitializers(token : lib4.Token) : void {
    }
    endInitializers(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Initializers");
    }
    handleNoInitializers() : void {
        this.logEvent("NoInitializers");
    }
    handleInvalidExpression(token : lib4.Token) : void {
        this.logEvent("InvalidExpression");
    }
    handleInvalidFunctionBody(token : lib4.Token) : void {
        this.logEvent("InvalidFunctionBody");
    }
    handleInvalidTypeReference(token : lib4.Token) : void {
        this.logEvent("InvalidTypeReference");
    }
    handleLabel(token : lib4.Token) : void {
        this.logEvent("Label");
    }
    beginLabeledStatement(token : lib4.Token,labelCount : number) : void {
    }
    endLabeledStatement(labelCount : number) : void {
        this.logEvent("LabeledStatement");
    }
    beginLibraryName(token : lib4.Token) : void {
    }
    endLibraryName(libraryKeyword : lib4.Token,semicolon : lib4.Token) : void {
        this.logEvent("LibraryName");
    }
    beginLiteralMapEntry(token : lib4.Token) : void {
    }
    endLiteralMapEntry(colon : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("LiteralMapEntry");
    }
    beginLiteralString(token : lib4.Token) : void {
    }
    endLiteralString(interpolationCount : number,endToken : lib4.Token) : void {
        this.logEvent("LiteralString");
    }
    handleStringJuxtaposition(literalCount : number) : void {
        this.logEvent("StringJuxtaposition");
    }
    beginMember(token : lib4.Token) : void {
    }
    endMember() : void {
        this.logEvent("Member");
    }
    handleMemberName(identifiers : lib6.Link<lib4.Token>) : lib6.Link<lib4.Token> {
        return identifiers;
    }
    beginMethod(token : lib4.Token,name : lib4.Token) : void {
    }
    endMethod(getOrSet : lib4.Token,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Method");
    }
    beginMetadataStar(token : lib4.Token) : void {
    }
    endMetadataStar(count : number,forParameter : boolean) : void {
        this.logEvent("MetadataStar");
    }
    beginMetadata(token : lib4.Token) : void {
    }
    endMetadata(beginToken : lib4.Token,periodBeforeName : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Metadata");
    }
    beginOptionalFormalParameters(token : lib4.Token) : void {
    }
    endOptionalFormalParameters(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("OptionalFormalParameters");
    }
    beginPart(token : lib4.Token) : void {
    }
    endPart(partKeyword : lib4.Token,semicolon : lib4.Token) : void {
        this.logEvent("Part");
    }
    beginPartOf(token : lib4.Token) : void {
    }
    endPartOf(partKeyword : lib4.Token,semicolon : lib4.Token,hasName : boolean) : void {
        this.logEvent("PartOf");
    }
    beginRedirectingFactoryBody(token : lib4.Token) : void {
    }
    endRedirectingFactoryBody(beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("RedirectingFactoryBody");
    }
    beginReturnStatement(token : lib4.Token) : void {
    }
    handleEmptyFunctionBody(semicolon : lib4.Token) : void {
        this.logEvent("EmptyFunctionBody");
    }
    handleExpressionFunctionBody(arrowToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("ExpressionFunctionBody");
    }
    endReturnStatement(hasExpression : boolean,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("ReturnStatement");
    }
    beginSend(token : lib4.Token) : void {
    }
    endSend(beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Send");
    }
    beginShow(showKeyword : lib4.Token) : void {
    }
    endShow(showKeyword : lib4.Token) : void {
        this.logEvent("Show");
    }
    beginSwitchStatement(token : lib4.Token) : void {
    }
    endSwitchStatement(switchKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("SwitchStatement");
    }
    beginSwitchBlock(token : lib4.Token) : void {
    }
    endSwitchBlock(caseCount : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("SwitchBlock");
    }
    beginLiteralSymbol(token : lib4.Token) : void {
    }
    endLiteralSymbol(hashToken : lib4.Token,identifierCount : number) : void {
        this.logEvent("LiteralSymbol");
    }
    beginThrowExpression(token : lib4.Token) : void {
    }
    endThrowExpression(throwToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("ThrowExpression");
    }
    beginRethrowStatement(token : lib4.Token) : void {
    }
    endRethrowStatement(rethrowToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("RethrowStatement");
    }
    endTopLevelDeclaration(token : lib4.Token) : void {
        this.logEvent("TopLevelDeclaration");
    }
    beginTopLevelMember(token : lib4.Token) : void {
    }
    endTopLevelFields(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("TopLevelFields");
    }
    beginTopLevelMethod(token : lib4.Token,name : lib4.Token) : void {
    }
    endTopLevelMethod(beginToken : lib4.Token,getOrSet : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("TopLevelMethod");
    }
    beginTryStatement(token : lib4.Token) : void {
    }
    handleCaseMatch(caseKeyword : lib4.Token,colon : lib4.Token) : void {
        this.logEvent("CaseMatch");
    }
    beginCatchClause(token : lib4.Token) : void {
    }
    endCatchClause(token : lib4.Token) : void {
        this.logEvent("CatchClause");
    }
    handleCatchBlock(onKeyword : lib4.Token,catchKeyword : lib4.Token) : void {
        this.logEvent("CatchBlock");
    }
    handleFinallyBlock(finallyKeyword : lib4.Token) : void {
        this.logEvent("FinallyBlock");
    }
    endTryStatement(catchCount : number,tryKeyword : lib4.Token,finallyKeyword : lib4.Token) : void {
        this.logEvent("TryStatement");
    }
    handleType(beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("Type");
    }
    handleNoName(token : lib4.Token) : void {
        this.logEvent("NoName");
    }
    handleFunctionType(functionToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("FunctionType");
    }
    beginTypeArguments(token : lib4.Token) : void {
    }
    endTypeArguments(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("TypeArguments");
    }
    handleNoTypeArguments(token : lib4.Token) : void {
        this.logEvent("NoTypeArguments");
    }
    beginTypeVariable(token : lib4.Token) : void {
    }
    endTypeVariable(token : lib4.Token,extendsOrSuper : lib4.Token) : void {
        this.logEvent("TypeVariable");
    }
    beginTypeVariables(token : lib4.Token) : void {
    }
    endTypeVariables(count : number,beginToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("TypeVariables");
    }
    beginUnnamedFunction(token : lib4.Token) : void {
    }
    endUnnamedFunction(beginToken : lib4.Token,token : lib4.Token) : void {
        this.logEvent("UnnamedFunction");
    }
    beginVariablesDeclaration(token : lib4.Token) : void {
    }
    endVariablesDeclaration(count : number,endToken : lib4.Token) : void {
        this.logEvent("VariablesDeclaration");
    }
    beginWhileStatement(token : lib4.Token) : void {
    }
    endWhileStatement(whileKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("WhileStatement");
    }
    handleAsOperator(operator : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("AsOperator");
    }
    handleAssignmentExpression(token : lib4.Token) : void {
        this.logEvent("AssignmentExpression");
    }
    handleBinaryExpression(token : lib4.Token) : void {
        this.logEvent("BinaryExpression");
    }
    handleConditionalExpression(question : lib4.Token,colon : lib4.Token) : void {
        this.logEvent("ConditionalExpression");
    }
    beginConstExpression(constKeyword : lib4.Token) : void {
    }
    endConstExpression(token : lib4.Token) : void {
        this.logEvent("ConstExpression");
    }
    beginFunctionTypedFormalParameter(token : lib4.Token) : void {
    }
    endFunctionTypedFormalParameter(thisKeyword : lib4.Token,kind : lib5.FormalParameterType) : void {
        this.logEvent("FunctionTypedFormalParameter");
    }
    handleIdentifier(token : lib4.Token,context : lib7.IdentifierContext) : void {
        this.logEvent("Identifier");
    }
    handleIndexedExpression(openCurlyBracket : lib4.Token,closeCurlyBracket : lib4.Token) : void {
        this.logEvent("IndexedExpression");
    }
    handleIsOperator(operator : lib4.Token,not : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("IsOperator");
    }
    handleLiteralBool(token : lib4.Token) : void {
        this.logEvent("LiteralBool");
    }
    handleBreakStatement(hasTarget : boolean,breakKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("BreakStatement");
    }
    handleContinueStatement(hasTarget : boolean,continueKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("ContinueStatement");
    }
    handleEmptyStatement(token : lib4.Token) : void {
        this.logEvent("EmptyStatement");
    }
    handleAssertStatement(assertKeyword : lib4.Token,leftParenthesis : lib4.Token,commaToken : lib4.Token,rightParenthesis : lib4.Token,semicolonToken : lib4.Token) : void {
        this.logEvent("AssertStatement");
    }
    handleLiteralDouble(token : lib4.Token) : void {
        this.logEvent("LiteralDouble");
    }
    handleLiteralInt(token : lib4.Token) : void {
        this.logEvent("LiteralInt");
    }
    handleLiteralList(count : number,beginToken : lib4.Token,constKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("LiteralList");
    }
    handleLiteralMap(count : number,beginToken : lib4.Token,constKeyword : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("LiteralMap");
    }
    handleLiteralNull(token : lib4.Token) : void {
        this.logEvent("LiteralNull");
    }
    handleModifier(token : lib4.Token) : void {
        this.logEvent("Modifier");
    }
    handleModifiers(count : number) : void {
        this.logEvent("Modifiers");
    }
    handleNamedArgument(colon : lib4.Token) : void {
        this.logEvent("NamedArgument");
    }
    beginNewExpression(token : lib4.Token) : void {
    }
    endNewExpression(token : lib4.Token) : void {
        this.logEvent("NewExpression");
    }
    handleNoArguments(token : lib4.Token) : void {
        this.logEvent("NoArguments");
    }
    handleNoExpression(token : lib4.Token) : void {
        this.logEvent("NoExpression");
    }
    handleNoConstructorReferenceContinuationAfterTypeArguments(token : lib4.Token) : void {
        this.logEvent("NoConstructorReferenceContinuationAfterTypeArguments");
    }
    handleNoType(token : lib4.Token) : void {
        this.logEvent("NoType");
    }
    handleNoTypeVariables(token : lib4.Token) : void {
        this.logEvent("NoTypeVariables");
    }
    handleOperator(token : lib4.Token) : void {
        this.logEvent("Operator");
    }
    handleSymbolVoid(token : lib4.Token) : void {
        this.logEvent("SymbolVoid");
    }
    handleOperatorName(operatorKeyword : lib4.Token,token : lib4.Token) : void {
        this.logEvent("OperatorName");
    }
    handleParenthesizedExpression(token : lib8.BeginGroupToken) : void {
        this.logEvent("ParenthesizedExpression");
    }
    handleQualified(period : lib4.Token) : void {
        this.logEvent("Qualified");
    }
    handleStringPart(token : lib4.Token) : void {
        this.logEvent("StringPart");
    }
    handleSuperExpression(token : lib4.Token,context : lib7.IdentifierContext) : void {
        this.logEvent("SuperExpression");
    }
    beginSwitchCase(labelCount : number,expressionCount : number,firstToken : lib4.Token) : void {
    }
    handleSwitchCase(labelCount : number,expressionCount : number,defaultKeyword : lib4.Token,statementCount : number,firstToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("SwitchCase");
    }
    handleThisExpression(token : lib4.Token,context : lib7.IdentifierContext) : void {
        this.logEvent("ThisExpression");
    }
    handleUnaryPostfixAssignmentExpression(token : lib4.Token) : void {
        this.logEvent("UnaryPostfixAssignmentExpression");
    }
    handleUnaryPrefixExpression(token : lib4.Token) : void {
        this.logEvent("UnaryPrefixExpression");
    }
    handleUnaryPrefixAssignmentExpression(token : lib4.Token) : void {
        this.logEvent("UnaryPrefixAssignmentExpression");
    }
    handleValuedFormalParameter(equals : lib4.Token,token : lib4.Token) : void {
        this.logEvent("ValuedFormalParameter");
    }
    handleFormalParameterWithoutValue(token : lib4.Token) : void {
        this.logEvent("FormalParameterWithoutValue");
    }
    handleVoidKeyword(token : lib4.Token) : void {
        this.logEvent("VoidKeyword");
    }
    beginYieldStatement(token : lib4.Token) : void {
    }
    endYieldStatement(yieldToken : lib4.Token,starToken : lib4.Token,endToken : lib4.Token) : void {
        this.logEvent("YieldStatement");
    }
    handleUnrecoverableError(token : lib4.Token,message : lib9.FastaMessage) : lib4.Token {
        throw new ParserError.fromTokens(token,token,message);
    }
    handleRecoverableError(token : lib4.Token,message : lib9.FastaMessage) : void {
        this.recoverableErrors.add(new ParserError.fromTokens(token,token,message));
    }
    handleScript(token : lib4.Token) : void {
        this.logEvent("Script");
    }
    injectGenericCommentTypeAssign(token : lib4.Token) : lib4.Token {
        return token;
    }
    injectGenericCommentTypeList(token : lib4.Token) : lib4.Token {
        return token;
    }
    replaceTokenWithGenericCommentTypeAssign(tokenToStartReplacing : lib4.Token,tokenWithComment : lib4.Token) : lib4.Token {
        return tokenToStartReplacing;
    }
    discardTypeReplacedWithCommentTypeAssign() : void {
    }
    newSyntheticToken(next : lib4.Token) : lib4.Token {
        if (op(Op.EQUALS,next,null)) return null;
        return ((_) : lib8.SymbolToken =>  {
            {
                _.next = next;
                return _;
            }
        })(new lib8.SymbolToken(lib4.TokenType.RECOVERY,next.charOffset));
    }
    constructor() {
    }
    @defaultConstructor
    Listener() {
        this.recoverableErrors = new core.DartList.literal<ParserError>();
    }
}

export namespace ParserError {
    export type Constructors = 'ParserError' | 'fromTokens';
    export type Interface = Omit<ParserError, Constructors>;
}
@DartClass
export class ParserError {
    beginOffset : number;

    endOffset : number;

    message : lib9.FastaMessage;

    constructor(beginOffset : number,endOffset : number,message : lib9.FastaMessage) {
    }
    @defaultConstructor
    ParserError(beginOffset : number,endOffset : number,message : lib9.FastaMessage) {
        this.beginOffset = beginOffset;
        this.endOffset = endOffset;
        this.message = message;
    }
    @namedConstructor
    fromTokens(begin : lib4.Token,end : lib4.Token,message : lib9.FastaMessage) {
        this.ParserError(begin.charOffset,end.charOffset + end.charCount,message);
    }
    static fromTokens : new(begin : lib4.Token,end : lib4.Token,message : lib9.FastaMessage) => ParserError;

    toString() : string {
        return `@${this.beginOffset}: ${this.message.message}\n${this.message.tip}`;
    }
}

export class properties {
}
