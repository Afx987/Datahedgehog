/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/dart/ast/ast.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace NodeList {
    export type Constructors = 'NodeList';
    export type Interface<E extends AstNode> = Omit<NodeList<E extends AstNode>, Constructors>;
}
@DartClass
@Implements(core.DartList)
export class NodeList<E extends AstNode> implements core.DartList.Interface<E> {
    @AbstractProperty
    get beginToken() : any{ throw 'abstract'}
    @AbstractProperty
    get endToken() : any{ throw 'abstract'}
    @AbstractProperty
    get owner() : AstNode{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set owner(node : AstNode){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    [OperatorMethods.INDEX](index : number) : E{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    [OperatorMethods.INDEX_EQ](index : number,node : E) : void{ throw 'abstract'}
    @Abstract
    accept(visitor : AstVisitor<any>){ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    NodeList() {
    }
}

export namespace AssertInitializer {
    export type Constructors = 'AssertInitializer';
    export type Interface = Omit<AssertInitializer, Constructors>;
}
@DartClass
@Implements(Assertion,ConstructorInitializer)
export class AssertInitializer implements Assertion.Interface,ConstructorInitializer.Interface {
    constructor() {
    }
    @defaultConstructor
    AssertInitializer() {
    }
}

export namespace Assertion {
    export type Constructors = 'Assertion';
    export type Interface = Omit<Assertion, Constructors>;
}
@DartClass
@Implements(AstNode)
export class Assertion implements AstNode.Interface {
    @AbstractProperty
    get assertKeyword() : any{ throw 'abstract'}
    set assertKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get comma() : any{ throw 'abstract'}
    set comma(token : any){ throw 'abstract'}
    @AbstractProperty
    get condition() : Expression{ throw 'abstract'}
    set condition(condition : Expression){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get message() : Expression{ throw 'abstract'}
    set message(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Assertion() {
    }
}

export namespace AssertStatement {
    export type Constructors = 'AssertStatement';
    export type Interface = Omit<AssertStatement, Constructors>;
}
@DartClass
@Implements(Assertion,Statement)
export class AssertStatement implements Assertion.Interface,Statement.Interface {
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AssertStatement() {
    }
}

export namespace AstNode {
    export type Constructors = 'AstNode';
    export type Interface = Omit<AstNode, Constructors>;
}
@DartClass
@Implements(any)
export class AstNode implements any.Interface {
    private static __$EMPTY_LIST : core.DartList<AstNode>;
    static get EMPTY_LIST() : core.DartList<AstNode> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<AstNode>();
        }
        return this.__$EMPTY_LIST;
    }

    private static __$LEXICAL_ORDER : <T>(a : AstNode,b : AstNode) => number;
    static get LEXICAL_ORDER() : <T>(a : AstNode,b : AstNode) => number { 
        if (this.__$LEXICAL_ORDER===undefined) {
            this.__$LEXICAL_ORDER = (first : AstNode,second : AstNode) =>  {
                return first.offset - second.offset;
            };
        }
        return this.__$LEXICAL_ORDER;
    }
    static set LEXICAL_ORDER(__$value : <T>(a : AstNode,b : AstNode) => number)  { 
        this.__$LEXICAL_ORDER = __$value;
    }

    @AbstractProperty
    get beginToken() : any{ throw 'abstract'}
    @AbstractProperty
    get childEntities() : core.DartIterable<any>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get end() : number{ throw 'abstract'}
    @AbstractProperty
    get endToken() : any{ throw 'abstract'}
    @AbstractProperty
    get isSynthetic() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get length() : number{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get offset() : number{ throw 'abstract'}
    @AbstractProperty
    get parent() : AstNode{ throw 'abstract'}
    @AbstractProperty
    get root() : AstNode{ throw 'abstract'}
    @Abstract
    accept(visitor : AstVisitor<any>) : any{ throw 'abstract'}
    @Abstract
    getAncestor(predicate : any) : AstNode{ throw 'abstract'}
    @Abstract
    getProperty(name : string) : core.DartObject{ throw 'abstract'}
    @Abstract
    setProperty(name : string,value : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    toSource() : string{ throw 'abstract'}
    @Abstract
    visitChildren(visitor : AstVisitor<any>) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AstNode() {
    }
}

export namespace AstVisitor {
    export type Constructors = 'AstVisitor';
    export type Interface<R> = Omit<AstVisitor<R>, Constructors>;
}
@DartClass
export class AstVisitor<R> {
    @Abstract
    visitAdjacentStrings(node : AdjacentStrings) : R{ throw 'abstract'}
    @Abstract
    visitAnnotation(node : Annotation) : R{ throw 'abstract'}
    @Abstract
    visitArgumentList(node : ArgumentList) : R{ throw 'abstract'}
    @Abstract
    visitAsExpression(node : AsExpression) : R{ throw 'abstract'}
    @Abstract
    visitAssertInitializer(node : AssertInitializer) : R{ throw 'abstract'}
    @Abstract
    visitAssertStatement(assertStatement : AssertStatement) : R{ throw 'abstract'}
    @Abstract
    visitAssignmentExpression(node : AssignmentExpression) : R{ throw 'abstract'}
    @Abstract
    visitAwaitExpression(node : AwaitExpression) : R{ throw 'abstract'}
    @Abstract
    visitBinaryExpression(node : BinaryExpression) : R{ throw 'abstract'}
    @Abstract
    visitBlock(node : Block) : R{ throw 'abstract'}
    @Abstract
    visitBlockFunctionBody(node : BlockFunctionBody) : R{ throw 'abstract'}
    @Abstract
    visitBooleanLiteral(node : BooleanLiteral) : R{ throw 'abstract'}
    @Abstract
    visitBreakStatement(node : BreakStatement) : R{ throw 'abstract'}
    @Abstract
    visitCascadeExpression(node : CascadeExpression) : R{ throw 'abstract'}
    @Abstract
    visitCatchClause(node : CatchClause) : R{ throw 'abstract'}
    @Abstract
    visitClassDeclaration(node : ClassDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitClassTypeAlias(node : ClassTypeAlias) : R{ throw 'abstract'}
    @Abstract
    visitComment(node : Comment) : R{ throw 'abstract'}
    @Abstract
    visitCommentReference(node : CommentReference) : R{ throw 'abstract'}
    @Abstract
    visitCompilationUnit(node : CompilationUnit) : R{ throw 'abstract'}
    @Abstract
    visitConditionalExpression(node : ConditionalExpression) : R{ throw 'abstract'}
    @Abstract
    visitConfiguration(node : Configuration) : R{ throw 'abstract'}
    @Abstract
    visitConstructorDeclaration(node : ConstructorDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitConstructorFieldInitializer(node : ConstructorFieldInitializer) : R{ throw 'abstract'}
    @Abstract
    visitConstructorName(node : ConstructorName) : R{ throw 'abstract'}
    @Abstract
    visitContinueStatement(node : ContinueStatement) : R{ throw 'abstract'}
    @Abstract
    visitDeclaredIdentifier(node : DeclaredIdentifier) : R{ throw 'abstract'}
    @Abstract
    visitDefaultFormalParameter(node : DefaultFormalParameter) : R{ throw 'abstract'}
    @Abstract
    visitDoStatement(node : DoStatement) : R{ throw 'abstract'}
    @Abstract
    visitDottedName(node : DottedName) : R{ throw 'abstract'}
    @Abstract
    visitDoubleLiteral(node : DoubleLiteral) : R{ throw 'abstract'}
    @Abstract
    visitEmptyFunctionBody(node : EmptyFunctionBody) : R{ throw 'abstract'}
    @Abstract
    visitEmptyStatement(node : EmptyStatement) : R{ throw 'abstract'}
    @Abstract
    visitEnumConstantDeclaration(node : EnumConstantDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitEnumDeclaration(node : EnumDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitExportDirective(node : ExportDirective) : R{ throw 'abstract'}
    @Abstract
    visitExpressionFunctionBody(node : ExpressionFunctionBody) : R{ throw 'abstract'}
    @Abstract
    visitExpressionStatement(node : ExpressionStatement) : R{ throw 'abstract'}
    @Abstract
    visitExtendsClause(node : ExtendsClause) : R{ throw 'abstract'}
    @Abstract
    visitFieldDeclaration(node : FieldDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitFieldFormalParameter(node : FieldFormalParameter) : R{ throw 'abstract'}
    @Abstract
    visitForEachStatement(node : ForEachStatement) : R{ throw 'abstract'}
    @Abstract
    visitFormalParameterList(node : FormalParameterList) : R{ throw 'abstract'}
    @Abstract
    visitForStatement(node : ForStatement) : R{ throw 'abstract'}
    @Abstract
    visitFunctionDeclaration(node : FunctionDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitFunctionDeclarationStatement(node : FunctionDeclarationStatement) : R{ throw 'abstract'}
    @Abstract
    visitFunctionExpression(node : FunctionExpression) : R{ throw 'abstract'}
    @Abstract
    visitFunctionExpressionInvocation(node : FunctionExpressionInvocation) : R{ throw 'abstract'}
    @Abstract
    visitFunctionTypeAlias(functionTypeAlias : FunctionTypeAlias) : R{ throw 'abstract'}
    @Abstract
    visitFunctionTypedFormalParameter(node : FunctionTypedFormalParameter) : R{ throw 'abstract'}
    @Abstract
    visitGenericFunctionType(node : GenericFunctionType) : R{ throw 'abstract'}
    @Abstract
    visitGenericTypeAlias(node : GenericTypeAlias) : R{ throw 'abstract'}
    @Abstract
    visitHideCombinator(node : HideCombinator) : R{ throw 'abstract'}
    @Abstract
    visitIfStatement(node : IfStatement) : R{ throw 'abstract'}
    @Abstract
    visitImplementsClause(node : ImplementsClause) : R{ throw 'abstract'}
    @Abstract
    visitImportDirective(node : ImportDirective) : R{ throw 'abstract'}
    @Abstract
    visitIndexExpression(node : IndexExpression) : R{ throw 'abstract'}
    @Abstract
    visitInstanceCreationExpression(node : InstanceCreationExpression) : R{ throw 'abstract'}
    @Abstract
    visitIntegerLiteral(node : IntegerLiteral) : R{ throw 'abstract'}
    @Abstract
    visitInterpolationExpression(node : InterpolationExpression) : R{ throw 'abstract'}
    @Abstract
    visitInterpolationString(node : InterpolationString) : R{ throw 'abstract'}
    @Abstract
    visitIsExpression(node : IsExpression) : R{ throw 'abstract'}
    @Abstract
    visitLabel(node : Label) : R{ throw 'abstract'}
    @Abstract
    visitLabeledStatement(node : LabeledStatement) : R{ throw 'abstract'}
    @Abstract
    visitLibraryDirective(node : LibraryDirective) : R{ throw 'abstract'}
    @Abstract
    visitLibraryIdentifier(node : LibraryIdentifier) : R{ throw 'abstract'}
    @Abstract
    visitListLiteral(node : ListLiteral) : R{ throw 'abstract'}
    @Abstract
    visitMapLiteral(node : MapLiteral) : R{ throw 'abstract'}
    @Abstract
    visitMapLiteralEntry(node : MapLiteralEntry) : R{ throw 'abstract'}
    @Abstract
    visitMethodDeclaration(node : MethodDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitMethodInvocation(node : MethodInvocation) : R{ throw 'abstract'}
    @Abstract
    visitNamedExpression(node : NamedExpression) : R{ throw 'abstract'}
    @Abstract
    visitNativeClause(node : NativeClause) : R{ throw 'abstract'}
    @Abstract
    visitNativeFunctionBody(node : NativeFunctionBody) : R{ throw 'abstract'}
    @Abstract
    visitNullLiteral(node : NullLiteral) : R{ throw 'abstract'}
    @Abstract
    visitParenthesizedExpression(node : ParenthesizedExpression) : R{ throw 'abstract'}
    @Abstract
    visitPartDirective(node : PartDirective) : R{ throw 'abstract'}
    @Abstract
    visitPartOfDirective(node : PartOfDirective) : R{ throw 'abstract'}
    @Abstract
    visitPostfixExpression(node : PostfixExpression) : R{ throw 'abstract'}
    @Abstract
    visitPrefixedIdentifier(node : PrefixedIdentifier) : R{ throw 'abstract'}
    @Abstract
    visitPrefixExpression(node : PrefixExpression) : R{ throw 'abstract'}
    @Abstract
    visitPropertyAccess(node : PropertyAccess) : R{ throw 'abstract'}
    @Abstract
    visitRedirectingConstructorInvocation(node : RedirectingConstructorInvocation) : R{ throw 'abstract'}
    @Abstract
    visitRethrowExpression(node : RethrowExpression) : R{ throw 'abstract'}
    @Abstract
    visitReturnStatement(node : ReturnStatement) : R{ throw 'abstract'}
    @Abstract
    visitScriptTag(node : ScriptTag) : R{ throw 'abstract'}
    @Abstract
    visitShowCombinator(node : ShowCombinator) : R{ throw 'abstract'}
    @Abstract
    visitSimpleFormalParameter(node : SimpleFormalParameter) : R{ throw 'abstract'}
    @Abstract
    visitSimpleIdentifier(node : SimpleIdentifier) : R{ throw 'abstract'}
    @Abstract
    visitSimpleStringLiteral(node : SimpleStringLiteral) : R{ throw 'abstract'}
    @Abstract
    visitStringInterpolation(node : StringInterpolation) : R{ throw 'abstract'}
    @Abstract
    visitSuperConstructorInvocation(node : SuperConstructorInvocation) : R{ throw 'abstract'}
    @Abstract
    visitSuperExpression(node : SuperExpression) : R{ throw 'abstract'}
    @Abstract
    visitSwitchCase(node : SwitchCase) : R{ throw 'abstract'}
    @Abstract
    visitSwitchDefault(node : SwitchDefault) : R{ throw 'abstract'}
    @Abstract
    visitSwitchStatement(node : SwitchStatement) : R{ throw 'abstract'}
    @Abstract
    visitSymbolLiteral(node : SymbolLiteral) : R{ throw 'abstract'}
    @Abstract
    visitThisExpression(node : ThisExpression) : R{ throw 'abstract'}
    @Abstract
    visitThrowExpression(node : ThrowExpression) : R{ throw 'abstract'}
    @Abstract
    visitTopLevelVariableDeclaration(node : TopLevelVariableDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitTryStatement(node : TryStatement) : R{ throw 'abstract'}
    @Abstract
    visitTypeArgumentList(node : TypeArgumentList) : R{ throw 'abstract'}
    @Abstract
    visitTypeName(node : TypeName) : R{ throw 'abstract'}
    @Abstract
    visitTypeParameter(node : TypeParameter) : R{ throw 'abstract'}
    @Abstract
    visitTypeParameterList(node : TypeParameterList) : R{ throw 'abstract'}
    @Abstract
    visitVariableDeclaration(node : VariableDeclaration) : R{ throw 'abstract'}
    @Abstract
    visitVariableDeclarationList(node : VariableDeclarationList) : R{ throw 'abstract'}
    @Abstract
    visitVariableDeclarationStatement(node : VariableDeclarationStatement) : R{ throw 'abstract'}
    @Abstract
    visitWhileStatement(node : WhileStatement) : R{ throw 'abstract'}
    @Abstract
    visitWithClause(node : WithClause) : R{ throw 'abstract'}
    @Abstract
    visitYieldStatement(node : YieldStatement) : R{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AstVisitor() {
    }
}

export namespace ConstructorReferenceNode {
    export type Constructors = 'ConstructorReferenceNode';
    export type Interface = Omit<ConstructorReferenceNode, Constructors>;
}
@DartClass
export class ConstructorReferenceNode {
    @AbstractProperty
    get staticElement() : any{ throw 'abstract'}
    set staticElement(element : any){ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ConstructorReferenceNode() {
    }
}

export namespace MethodReferenceExpression {
    export type Constructors = 'MethodReferenceExpression';
    export type Interface = Omit<MethodReferenceExpression, Constructors>;
}
@DartClass
export class MethodReferenceExpression {
    @AbstractProperty
    get bestElement() : any{ throw 'abstract'}
    @AbstractProperty
    get propagatedElement() : any{ throw 'abstract'}
    set propagatedElement(element : any){ throw 'abstract'}
    @AbstractProperty
    get staticElement() : any{ throw 'abstract'}
    set staticElement(element : any){ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MethodReferenceExpression() {
    }
}

export namespace NativeClause {
    export type Constructors = AstNode.Constructors | 'NativeClause';
    export type Interface = Omit<NativeClause, Constructors>;
}
@DartClass
export class NativeClause extends AstNode {
    @AbstractProperty
    get name() : StringLiteral{ throw 'abstract'}
    set name(name : StringLiteral){ throw 'abstract'}
    @AbstractProperty
    get nativeKeyword() : any{ throw 'abstract'}
    set nativeKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NativeClause() {
    }
}

export namespace ScriptTag {
    export type Constructors = AstNode.Constructors | 'ScriptTag';
    export type Interface = Omit<ScriptTag, Constructors>;
}
@DartClass
export class ScriptTag extends AstNode {
    @AbstractProperty
    get scriptTag() : any{ throw 'abstract'}
    set scriptTag(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScriptTag() {
    }
}

export namespace AnnotatedNode {
    export type Constructors = AstNode.Constructors | 'AnnotatedNode';
    export type Interface = Omit<AnnotatedNode, Constructors>;
}
@DartClass
export class AnnotatedNode extends AstNode {
    @AbstractProperty
    get documentationComment() : Comment{ throw 'abstract'}
    set documentationComment(comment : Comment){ throw 'abstract'}
    @AbstractProperty
    get firstTokenAfterCommentAndMetadata() : any{ throw 'abstract'}
    @AbstractProperty
    get metadata() : NodeList<Annotation>{ throw 'abstract'}
    @AbstractProperty
    get sortedCommentAndAnnotations() : core.DartList<AstNode>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnnotatedNode() {
    }
}

export namespace WithClause {
    export type Constructors = AstNode.Constructors | 'WithClause';
    export type Interface = Omit<WithClause, Constructors>;
}
@DartClass
export class WithClause extends AstNode {
    @AbstractProperty
    get mixinTypes() : NodeList<TypeName>{ throw 'abstract'}
    @AbstractProperty
    get withKeyword() : any{ throw 'abstract'}
    set withKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WithClause() {
    }
}

export namespace CatchClause {
    export type Constructors = AstNode.Constructors | 'CatchClause';
    export type Interface = Omit<CatchClause, Constructors>;
}
@DartClass
export class CatchClause extends AstNode {
    @AbstractProperty
    get body() : Block{ throw 'abstract'}
    set body(block : Block){ throw 'abstract'}
    @AbstractProperty
    get catchKeyword() : any{ throw 'abstract'}
    set catchKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get comma() : any{ throw 'abstract'}
    set comma(token : any){ throw 'abstract'}
    @AbstractProperty
    get exceptionParameter() : SimpleIdentifier{ throw 'abstract'}
    set exceptionParameter(parameter : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get exceptionType() : TypeAnnotation{ throw 'abstract'}
    set exceptionType(exceptionType : TypeAnnotation){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get onKeyword() : any{ throw 'abstract'}
    set onKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get stackTraceParameter() : SimpleIdentifier{ throw 'abstract'}
    set stackTraceParameter(parameter : SimpleIdentifier){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CatchClause() {
    }
}

export namespace Combinator {
    export type Constructors = AstNode.Constructors | 'Combinator';
    export type Interface = Omit<Combinator, Constructors>;
}
@DartClass
export class Combinator extends AstNode {
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Combinator() {
    }
}

export namespace Comment {
    export type Constructors = AstNode.Constructors | 'Comment';
    export type Interface = Omit<Comment, Constructors>;
}
@DartClass
export class Comment extends AstNode {
    @AbstractProperty
    get isBlock() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isDocumentation() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isEndOfLine() : boolean{ throw 'abstract'}
    @AbstractProperty
    get references() : NodeList<CommentReference>{ throw 'abstract'}
    @AbstractProperty
    get tokens() : core.DartList<any>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Comment() {
    }
}

export namespace CommentReference {
    export type Constructors = AstNode.Constructors | 'CommentReference';
    export type Interface = Omit<CommentReference, Constructors>;
}
@DartClass
export class CommentReference extends AstNode {
    @AbstractProperty
    get identifier() : Identifier{ throw 'abstract'}
    set identifier(identifier : Identifier){ throw 'abstract'}
    @AbstractProperty
    get newKeyword() : any{ throw 'abstract'}
    set newKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CommentReference() {
    }
}

export namespace CompilationUnit {
    export type Constructors = AstNode.Constructors | 'CompilationUnit';
    export type Interface = Omit<CompilationUnit, Constructors>;
}
@DartClass
export class CompilationUnit extends AstNode {
    set beginToken(token : any){ throw 'abstract'}
    @AbstractProperty
    get declarations() : NodeList<CompilationUnitMember>{ throw 'abstract'}
    @AbstractProperty
    get directives() : NodeList<Directive>{ throw 'abstract'}
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    set element(element : any){ throw 'abstract'}
    set endToken(token : any){ throw 'abstract'}
    @AbstractProperty
    get lineInfo() : any{ throw 'abstract'}
    set lineInfo(info : any){ throw 'abstract'}
    @AbstractProperty
    get scriptTag() : ScriptTag{ throw 'abstract'}
    set scriptTag(scriptTag : ScriptTag){ throw 'abstract'}
    @AbstractProperty
    get sortedDirectivesAndDeclarations() : core.DartList<AstNode>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnit() {
    }
}

export namespace TypeParameterList {
    export type Constructors = AstNode.Constructors | 'TypeParameterList';
    export type Interface = Omit<TypeParameterList, Constructors>;
}
@DartClass
export class TypeParameterList extends AstNode {
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : NodeList<TypeParameter>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterList() {
    }
}

export namespace Configuration {
    export type Constructors = AstNode.Constructors | 'Configuration';
    export type Interface = Omit<Configuration, Constructors>;
}
@DartClass
export class Configuration extends AstNode {
    @AbstractProperty
    get equalToken() : any{ throw 'abstract'}
    set equalToken(token : any){ throw 'abstract'}
    @AbstractProperty
    get ifKeyword() : any{ throw 'abstract'}
    set ifKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get libraryUri() : StringLiteral{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set libraryUri(uri : StringLiteral){ throw 'abstract'}
    @AbstractProperty
    get name() : DottedName{ throw 'abstract'}
    set name(name : DottedName){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get uri() : StringLiteral{ throw 'abstract'}
    set uri(uri : StringLiteral){ throw 'abstract'}
    @AbstractProperty
    get uriSource() : any{ throw 'abstract'}
    set uriSource(source : any){ throw 'abstract'}
    @AbstractProperty
    get value() : StringLiteral{ throw 'abstract'}
    set value(value : StringLiteral){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Configuration() {
    }
}

export namespace TypeArgumentList {
    export type Constructors = AstNode.Constructors | 'TypeArgumentList';
    export type Interface = Omit<TypeArgumentList, Constructors>;
}
@DartClass
export class TypeArgumentList extends AstNode {
    @AbstractProperty
    get arguments() : NodeList<TypeAnnotation>{ throw 'abstract'}
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    set rightBracket(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeArgumentList() {
    }
}

export namespace ConstructorInitializer {
    export type Constructors = AstNode.Constructors | 'ConstructorInitializer';
    export type Interface = Omit<ConstructorInitializer, Constructors>;
}
@DartClass
export class ConstructorInitializer extends AstNode {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorInitializer() {
    }
}

export namespace ConstructorName {
    export type Constructors = AstNode.Constructors | 'ConstructorName';
    export type Interface = Omit<ConstructorName, Constructors>;
}
@DartClass
@Implements(ConstructorReferenceNode)
export class ConstructorName extends AstNode implements ConstructorReferenceNode.Interface {
    @AbstractProperty
    get name() : SimpleIdentifier{ throw 'abstract'}
    set name(name : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    @AbstractProperty
    get type() : TypeName{ throw 'abstract'}
    set type(type : TypeName){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorName() {
    }
}

export namespace Annotation {
    export type Constructors = AstNode.Constructors | 'Annotation';
    export type Interface = Omit<Annotation, Constructors>;
}
@DartClass
export class Annotation extends AstNode {
    @AbstractProperty
    get arguments() : ArgumentList{ throw 'abstract'}
    set arguments(arguments : ArgumentList){ throw 'abstract'}
    @AbstractProperty
    get atSign() : any{ throw 'abstract'}
    set atSign(token : any){ throw 'abstract'}
    @AbstractProperty
    get constructorName() : SimpleIdentifier{ throw 'abstract'}
    set constructorName(name : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    set element(element : any){ throw 'abstract'}
    @AbstractProperty
    get elementAnnotation() : any{ throw 'abstract'}
    set elementAnnotation(annotation : any){ throw 'abstract'}
    @AbstractProperty
    get name() : Identifier{ throw 'abstract'}
    set name(name : Identifier){ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Annotation() {
    }
}

export namespace TypeAnnotation {
    export type Constructors = AstNode.Constructors | 'TypeAnnotation';
    export type Interface = Omit<TypeAnnotation, Constructors>;
}
@DartClass
export class TypeAnnotation extends AstNode {
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeAnnotation() {
    }
}

export namespace ArgumentList {
    export type Constructors = AstNode.Constructors | 'ArgumentList';
    export type Interface = Omit<ArgumentList, Constructors>;
}
@DartClass
export class ArgumentList extends AstNode {
    @AbstractProperty
    get arguments() : NodeList<Expression>{ throw 'abstract'}
    set correspondingPropagatedParameters(parameters : core.DartList<any>){ throw 'abstract'}
    set correspondingStaticParameters(parameters : core.DartList<any>){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ArgumentList() {
    }
}

export namespace ImplementsClause {
    export type Constructors = AstNode.Constructors | 'ImplementsClause';
    export type Interface = Omit<ImplementsClause, Constructors>;
}
@DartClass
export class ImplementsClause extends AstNode {
    @AbstractProperty
    get implementsKeyword() : any{ throw 'abstract'}
    set implementsKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get interfaces() : NodeList<TypeName>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImplementsClause() {
    }
}

export namespace Statement {
    export type Constructors = AstNode.Constructors | 'Statement';
    export type Interface = Omit<Statement, Constructors>;
}
@DartClass
export class Statement extends AstNode {
    @AbstractProperty
    get unlabeled() : Statement{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Statement() {
    }
}

export namespace ExtendsClause {
    export type Constructors = AstNode.Constructors | 'ExtendsClause';
    export type Interface = Omit<ExtendsClause, Constructors>;
}
@DartClass
export class ExtendsClause extends AstNode {
    @AbstractProperty
    get extendsKeyword() : any{ throw 'abstract'}
    set extendsKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get superclass() : TypeName{ throw 'abstract'}
    set superclass(name : TypeName){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtendsClause() {
    }
}

export namespace MapLiteralEntry {
    export type Constructors = AstNode.Constructors | 'MapLiteralEntry';
    export type Interface = Omit<MapLiteralEntry, Constructors>;
}
@DartClass
export class MapLiteralEntry extends AstNode {
    @AbstractProperty
    get key() : Expression{ throw 'abstract'}
    set key(string : Expression){ throw 'abstract'}
    @AbstractProperty
    get separator() : any{ throw 'abstract'}
    set separator(token : any){ throw 'abstract'}
    @AbstractProperty
    get value() : Expression{ throw 'abstract'}
    set value(expression : Expression){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapLiteralEntry() {
    }
}

export namespace FunctionBody {
    export type Constructors = AstNode.Constructors | 'FunctionBody';
    export type Interface = Omit<FunctionBody, Constructors>;
}
@DartClass
export class FunctionBody extends AstNode {
    @AbstractProperty
    get isAsynchronous() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isGenerator() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSynchronous() : boolean{ throw 'abstract'}
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    @AbstractProperty
    get star() : any{ throw 'abstract'}
    @Abstract
    isPotentiallyMutatedInClosure(variable : any) : boolean{ throw 'abstract'}
    @Abstract
    isPotentiallyMutatedInScope(variable : any) : boolean{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionBody() {
    }
}

export namespace SwitchMember {
    export type Constructors = AstNode.Constructors | 'SwitchMember';
    export type Interface = Omit<SwitchMember, Constructors>;
}
@DartClass
export class SwitchMember extends AstNode {
    @AbstractProperty
    get colon() : any{ throw 'abstract'}
    set colon(token : any){ throw 'abstract'}
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get labels() : NodeList<Label>{ throw 'abstract'}
    @AbstractProperty
    get statements() : NodeList<Statement>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchMember() {
    }
}

export namespace FormalParameterList {
    export type Constructors = AstNode.Constructors | 'FormalParameterList';
    export type Interface = Omit<FormalParameterList, Constructors>;
}
@DartClass
export class FormalParameterList extends AstNode {
    @AbstractProperty
    get leftDelimiter() : any{ throw 'abstract'}
    set leftDelimiter(token : any){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get parameterElements() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get parameters() : NodeList<FormalParameter>{ throw 'abstract'}
    @AbstractProperty
    get rightDelimiter() : any{ throw 'abstract'}
    set rightDelimiter(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormalParameterList() {
    }
}

export namespace FormalParameter {
    export type Constructors = AstNode.Constructors | 'FormalParameter';
    export type Interface = Omit<FormalParameter, Constructors>;
}
@DartClass
export class FormalParameter extends AstNode {
    @AbstractProperty
    get covariantKeyword() : any{ throw 'abstract'}
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get identifier() : SimpleIdentifier{ throw 'abstract'}
    @AbstractProperty
    get isConst() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFinal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get kind() : any{ throw 'abstract'}
    @AbstractProperty
    get metadata() : NodeList<Annotation>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormalParameter() {
    }
}

export namespace Label {
    export type Constructors = AstNode.Constructors | 'Label';
    export type Interface = Omit<Label, Constructors>;
}
@DartClass
export class Label extends AstNode {
    @AbstractProperty
    get colon() : any{ throw 'abstract'}
    set colon(token : any){ throw 'abstract'}
    @AbstractProperty
    get label() : SimpleIdentifier{ throw 'abstract'}
    set label(label : SimpleIdentifier){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Label() {
    }
}

export namespace Expression {
    export type Constructors = AstNode.Constructors | 'Expression';
    export type Interface = Omit<Expression, Constructors>;
}
@DartClass
export class Expression extends AstNode {
    private static __$EMPTY_LIST : core.DartList<Expression>;
    static get EMPTY_LIST() : core.DartList<Expression> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<Expression>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get bestParameterElement() : any{ throw 'abstract'}
    @AbstractProperty
    get bestType() : any{ throw 'abstract'}
    @AbstractProperty
    get isAssignable() : boolean{ throw 'abstract'}
    @AbstractProperty
    get precedence() : number{ throw 'abstract'}
    @AbstractProperty
    get propagatedParameterElement() : any{ throw 'abstract'}
    @AbstractProperty
    get propagatedType() : any{ throw 'abstract'}
    set propagatedType(type : any){ throw 'abstract'}
    @AbstractProperty
    get staticParameterElement() : any{ throw 'abstract'}
    @AbstractProperty
    get staticType() : any{ throw 'abstract'}
    set staticType(type : any){ throw 'abstract'}
    @AbstractProperty
    get unParenthesized() : Expression{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Expression() {
    }
}

export namespace DottedName {
    export type Constructors = AstNode.Constructors | 'DottedName';
    export type Interface = Omit<DottedName, Constructors>;
}
@DartClass
export class DottedName extends AstNode {
    @AbstractProperty
    get components() : NodeList<SimpleIdentifier>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DottedName() {
    }
}

export namespace InterpolationElement {
    export type Constructors = AstNode.Constructors | 'InterpolationElement';
    export type Interface = Omit<InterpolationElement, Constructors>;
}
@DartClass
export class InterpolationElement extends AstNode {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterpolationElement() {
    }
}

export namespace AsExpression {
    export type Constructors = Expression.Constructors | 'AsExpression';
    export type Interface = Omit<AsExpression, Constructors>;
}
@DartClass
export class AsExpression extends Expression {
    @AbstractProperty
    get asOperator() : any{ throw 'abstract'}
    set asOperator(token : any){ throw 'abstract'}
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get type() : TypeAnnotation{ throw 'abstract'}
    set type(type : TypeAnnotation){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsExpression() {
    }
}

export namespace Directive {
    export type Constructors = AnnotatedNode.Constructors | 'Directive';
    export type Interface = Omit<Directive, Constructors>;
}
@DartClass
export class Directive extends AnnotatedNode {
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    set element(element : any){ throw 'abstract'}
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Directive() {
    }
}

export namespace DoStatement {
    export type Constructors = Statement.Constructors | 'DoStatement';
    export type Interface = Omit<DoStatement, Constructors>;
}
@DartClass
export class DoStatement extends Statement {
    @AbstractProperty
    get body() : Statement{ throw 'abstract'}
    set body(statement : Statement){ throw 'abstract'}
    @AbstractProperty
    get condition() : Expression{ throw 'abstract'}
    set condition(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get doKeyword() : any{ throw 'abstract'}
    set doKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get whileKeyword() : any{ throw 'abstract'}
    set whileKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoStatement() {
    }
}

export namespace Declaration {
    export type Constructors = AnnotatedNode.Constructors | 'Declaration';
    export type Interface = Omit<Declaration, Constructors>;
}
@DartClass
export class Declaration extends AnnotatedNode {
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Declaration() {
    }
}

export namespace TryStatement {
    export type Constructors = Statement.Constructors | 'TryStatement';
    export type Interface = Omit<TryStatement, Constructors>;
}
@DartClass
export class TryStatement extends Statement {
    @AbstractProperty
    get body() : Block{ throw 'abstract'}
    set body(block : Block){ throw 'abstract'}
    @AbstractProperty
    get catchClauses() : NodeList<CatchClause>{ throw 'abstract'}
    @AbstractProperty
    get finallyBlock() : Block{ throw 'abstract'}
    set finallyBlock(block : Block){ throw 'abstract'}
    @AbstractProperty
    get finallyKeyword() : any{ throw 'abstract'}
    set finallyKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get tryKeyword() : any{ throw 'abstract'}
    set tryKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TryStatement() {
    }
}

export namespace EmptyFunctionBody {
    export type Constructors = FunctionBody.Constructors | 'EmptyFunctionBody';
    export type Interface = Omit<EmptyFunctionBody, Constructors>;
}
@DartClass
export class EmptyFunctionBody extends FunctionBody {
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmptyFunctionBody() {
    }
}

export namespace EmptyStatement {
    export type Constructors = Statement.Constructors | 'EmptyStatement';
    export type Interface = Omit<EmptyStatement, Constructors>;
}
@DartClass
export class EmptyStatement extends Statement {
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmptyStatement() {
    }
}

export namespace ThrowExpression {
    export type Constructors = Expression.Constructors | 'ThrowExpression';
    export type Interface = Omit<ThrowExpression, Constructors>;
}
@DartClass
export class ThrowExpression extends Expression {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get throwKeyword() : any{ throw 'abstract'}
    set throwKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThrowExpression() {
    }
}

export namespace ThisExpression {
    export type Constructors = Expression.Constructors | 'ThisExpression';
    export type Interface = Omit<ThisExpression, Constructors>;
}
@DartClass
export class ThisExpression extends Expression {
    @AbstractProperty
    get thisKeyword() : any{ throw 'abstract'}
    set thisKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ThisExpression() {
    }
}

export namespace SwitchStatement {
    export type Constructors = Statement.Constructors | 'SwitchStatement';
    export type Interface = Omit<SwitchStatement, Constructors>;
}
@DartClass
export class SwitchStatement extends Statement {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get members() : NodeList<SwitchMember>{ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    set rightBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get switchKeyword() : any{ throw 'abstract'}
    set switchKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchStatement() {
    }
}

export namespace ContinueStatement {
    export type Constructors = Statement.Constructors | 'ContinueStatement';
    export type Interface = Omit<ContinueStatement, Constructors>;
}
@DartClass
export class ContinueStatement extends Statement {
    @AbstractProperty
    get continueKeyword() : any{ throw 'abstract'}
    set continueKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get label() : SimpleIdentifier{ throw 'abstract'}
    set label(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get target() : AstNode{ throw 'abstract'}
    set target(node : AstNode){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContinueStatement() {
    }
}

export namespace ConstructorFieldInitializer {
    export type Constructors = ConstructorInitializer.Constructors | 'ConstructorFieldInitializer';
    export type Interface = Omit<ConstructorFieldInitializer, Constructors>;
}
@DartClass
export class ConstructorFieldInitializer extends ConstructorInitializer {
    @AbstractProperty
    get equals() : any{ throw 'abstract'}
    set equals(token : any){ throw 'abstract'}
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get fieldName() : SimpleIdentifier{ throw 'abstract'}
    set fieldName(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    @AbstractProperty
    get thisKeyword() : any{ throw 'abstract'}
    set thisKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorFieldInitializer() {
    }
}

export namespace ExpressionStatement {
    export type Constructors = Statement.Constructors | 'ExpressionStatement';
    export type Interface = Omit<ExpressionStatement, Constructors>;
}
@DartClass
export class ExpressionStatement extends Statement {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionStatement() {
    }
}

export namespace ConditionalExpression {
    export type Constructors = Expression.Constructors | 'ConditionalExpression';
    export type Interface = Omit<ConditionalExpression, Constructors>;
}
@DartClass
export class ConditionalExpression extends Expression {
    @AbstractProperty
    get colon() : any{ throw 'abstract'}
    set colon(token : any){ throw 'abstract'}
    @AbstractProperty
    get condition() : Expression{ throw 'abstract'}
    set condition(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get elseExpression() : Expression{ throw 'abstract'}
    set elseExpression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get question() : any{ throw 'abstract'}
    set question(token : any){ throw 'abstract'}
    @AbstractProperty
    get thenExpression() : Expression{ throw 'abstract'}
    set thenExpression(expression : Expression){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConditionalExpression() {
    }
}

export namespace DefaultFormalParameter {
    export type Constructors = FormalParameter.Constructors | 'DefaultFormalParameter';
    export type Interface = Omit<DefaultFormalParameter, Constructors>;
}
@DartClass
export class DefaultFormalParameter extends FormalParameter {
    @AbstractProperty
    get defaultValue() : Expression{ throw 'abstract'}
    set defaultValue(expression : Expression){ throw 'abstract'}
    set kind(kind : any){ throw 'abstract'}
    @AbstractProperty
    get parameter() : NormalFormalParameter{ throw 'abstract'}
    set parameter(formalParameter : NormalFormalParameter){ throw 'abstract'}
    @AbstractProperty
    get separator() : any{ throw 'abstract'}
    set separator(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultFormalParameter() {
    }
}

export namespace SwitchCase {
    export type Constructors = SwitchMember.Constructors | 'SwitchCase';
    export type Interface = Omit<SwitchCase, Constructors>;
}
@DartClass
export class SwitchCase extends SwitchMember {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchCase() {
    }
}

export namespace ForEachStatement {
    export type Constructors = Statement.Constructors | 'ForEachStatement';
    export type Interface = Omit<ForEachStatement, Constructors>;
}
@DartClass
export class ForEachStatement extends Statement {
    @AbstractProperty
    get awaitKeyword() : any{ throw 'abstract'}
    set awaitKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get body() : Statement{ throw 'abstract'}
    set body(statement : Statement){ throw 'abstract'}
    @AbstractProperty
    get forKeyword() : any{ throw 'abstract'}
    set forKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get identifier() : SimpleIdentifier{ throw 'abstract'}
    set identifier(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get inKeyword() : any{ throw 'abstract'}
    set inKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get iterable() : Expression{ throw 'abstract'}
    set iterable(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get loopVariable() : DeclaredIdentifier{ throw 'abstract'}
    set loopVariable(variable : DeclaredIdentifier){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForEachStatement() {
    }
}

export namespace VariableDeclarationList {
    export type Constructors = AnnotatedNode.Constructors | 'VariableDeclarationList';
    export type Interface = Omit<VariableDeclarationList, Constructors>;
}
@DartClass
export class VariableDeclarationList extends AnnotatedNode {
    @AbstractProperty
    get isConst() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFinal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get type() : TypeAnnotation{ throw 'abstract'}
    set type(type : TypeAnnotation){ throw 'abstract'}
    @AbstractProperty
    get variables() : NodeList<VariableDeclaration>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableDeclarationList() {
    }
}

export namespace VariableDeclarationStatement {
    export type Constructors = Statement.Constructors | 'VariableDeclarationStatement';
    export type Interface = Omit<VariableDeclarationStatement, Constructors>;
}
@DartClass
export class VariableDeclarationStatement extends Statement {
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get variables() : VariableDeclarationList{ throw 'abstract'}
    set variables(variables : VariableDeclarationList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableDeclarationStatement() {
    }
}

export namespace ForStatement {
    export type Constructors = Statement.Constructors | 'ForStatement';
    export type Interface = Omit<ForStatement, Constructors>;
}
@DartClass
export class ForStatement extends Statement {
    @AbstractProperty
    get body() : Statement{ throw 'abstract'}
    set body(statement : Statement){ throw 'abstract'}
    @AbstractProperty
    get condition() : Expression{ throw 'abstract'}
    set condition(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get forKeyword() : any{ throw 'abstract'}
    set forKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get initialization() : Expression{ throw 'abstract'}
    set initialization(initialization : Expression){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get leftSeparator() : any{ throw 'abstract'}
    set leftSeparator(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightSeparator() : any{ throw 'abstract'}
    set rightSeparator(token : any){ throw 'abstract'}
    @AbstractProperty
    get updaters() : NodeList<Expression>{ throw 'abstract'}
    @AbstractProperty
    get variables() : VariableDeclarationList{ throw 'abstract'}
    set variables(variableList : VariableDeclarationList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForStatement() {
    }
}

export namespace WhileStatement {
    export type Constructors = Statement.Constructors | 'WhileStatement';
    export type Interface = Omit<WhileStatement, Constructors>;
}
@DartClass
export class WhileStatement extends Statement {
    @AbstractProperty
    get body() : Statement{ throw 'abstract'}
    set body(statement : Statement){ throw 'abstract'}
    @AbstractProperty
    get condition() : Expression{ throw 'abstract'}
    set condition(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get whileKeyword() : any{ throw 'abstract'}
    set whileKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WhileStatement() {
    }
}

export namespace SuperExpression {
    export type Constructors = Expression.Constructors | 'SuperExpression';
    export type Interface = Omit<SuperExpression, Constructors>;
}
@DartClass
export class SuperExpression extends Expression {
    @AbstractProperty
    get superKeyword() : any{ throw 'abstract'}
    set superKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperExpression() {
    }
}

export namespace FunctionDeclarationStatement {
    export type Constructors = Statement.Constructors | 'FunctionDeclarationStatement';
    export type Interface = Omit<FunctionDeclarationStatement, Constructors>;
}
@DartClass
export class FunctionDeclarationStatement extends Statement {
    @AbstractProperty
    get functionDeclaration() : FunctionDeclaration{ throw 'abstract'}
    set functionDeclaration(functionDeclaration : FunctionDeclaration){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionDeclarationStatement() {
    }
}

export namespace FunctionExpression {
    export type Constructors = Expression.Constructors | 'FunctionExpression';
    export type Interface = Omit<FunctionExpression, Constructors>;
}
@DartClass
export class FunctionExpression extends Expression {
    @AbstractProperty
    get body() : FunctionBody{ throw 'abstract'}
    set body(functionBody : FunctionBody){ throw 'abstract'}
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    set element(element : any){ throw 'abstract'}
    @AbstractProperty
    get parameters() : FormalParameterList{ throw 'abstract'}
    set parameters(parameters : FormalParameterList){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionExpression() {
    }
}

export namespace SuperConstructorInvocation {
    export type Constructors = ConstructorInitializer.Constructors | 'SuperConstructorInvocation';
    export type Interface = Omit<SuperConstructorInvocation, Constructors>;
}
@DartClass
@Implements(ConstructorReferenceNode)
export class SuperConstructorInvocation extends ConstructorInitializer implements ConstructorReferenceNode.Interface {
    @AbstractProperty
    get argumentList() : ArgumentList{ throw 'abstract'}
    set argumentList(argumentList : ArgumentList){ throw 'abstract'}
    @AbstractProperty
    get constructorName() : SimpleIdentifier{ throw 'abstract'}
    set constructorName(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    @AbstractProperty
    get superKeyword() : any{ throw 'abstract'}
    set superKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperConstructorInvocation() {
    }
}

export namespace CascadeExpression {
    export type Constructors = Expression.Constructors | 'CascadeExpression';
    export type Interface = Omit<CascadeExpression, Constructors>;
}
@DartClass
export class CascadeExpression extends Expression {
    @AbstractProperty
    get cascadeSections() : NodeList<Expression>{ throw 'abstract'}
    @AbstractProperty
    get target() : Expression{ throw 'abstract'}
    set target(target : Expression){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CascadeExpression() {
    }
}

export namespace ShowCombinator {
    export type Constructors = Combinator.Constructors | 'ShowCombinator';
    export type Interface = Omit<ShowCombinator, Constructors>;
}
@DartClass
export class ShowCombinator extends Combinator {
    @AbstractProperty
    get shownNames() : NodeList<SimpleIdentifier>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShowCombinator() {
    }
}

export namespace GenericFunctionType {
    export type Constructors = TypeAnnotation.Constructors | 'GenericFunctionType';
    export type Interface = Omit<GenericFunctionType, Constructors>;
}
@DartClass
export class GenericFunctionType extends TypeAnnotation {
    @AbstractProperty
    get functionKeyword() : any{ throw 'abstract'}
    set functionKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get parameters() : FormalParameterList{ throw 'abstract'}
    set parameters(parameters : FormalParameterList){ throw 'abstract'}
    @AbstractProperty
    get returnType() : TypeAnnotation{ throw 'abstract'}
    set returnType(type : TypeAnnotation){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericFunctionType() {
    }
}

export namespace YieldStatement {
    export type Constructors = Statement.Constructors | 'YieldStatement';
    export type Interface = Omit<YieldStatement, Constructors>;
}
@DartClass
export class YieldStatement extends Statement {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get star() : any{ throw 'abstract'}
    set star(token : any){ throw 'abstract'}
    @AbstractProperty
    get yieldKeyword() : any{ throw 'abstract'}
    set yieldKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    YieldStatement() {
    }
}

export namespace HideCombinator {
    export type Constructors = Combinator.Constructors | 'HideCombinator';
    export type Interface = Omit<HideCombinator, Constructors>;
}
@DartClass
export class HideCombinator extends Combinator {
    @AbstractProperty
    get hiddenNames() : NodeList<SimpleIdentifier>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HideCombinator() {
    }
}

export namespace Identifier {
    export type Constructors = Expression.Constructors | 'Identifier';
    export type Interface = Omit<Identifier, Constructors>;
}
@DartClass
export class Identifier extends Expression {
    @AbstractProperty
    get bestElement() : any{ throw 'abstract'}
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    @AbstractProperty
    get propagatedElement() : any{ throw 'abstract'}
    @AbstractProperty
    get staticElement() : any{ throw 'abstract'}
    static isPrivateName(name : string) : boolean {
        return StringUtilities.startsWithChar(name,95);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Identifier() {
    }
}

export namespace IfStatement {
    export type Constructors = Statement.Constructors | 'IfStatement';
    export type Interface = Omit<IfStatement, Constructors>;
}
@DartClass
export class IfStatement extends Statement {
    @AbstractProperty
    get condition() : Expression{ throw 'abstract'}
    set condition(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get elseKeyword() : any{ throw 'abstract'}
    set elseKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get elseStatement() : Statement{ throw 'abstract'}
    set elseStatement(statement : Statement){ throw 'abstract'}
    @AbstractProperty
    get ifKeyword() : any{ throw 'abstract'}
    set ifKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get thenStatement() : Statement{ throw 'abstract'}
    set thenStatement(statement : Statement){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IfStatement() {
    }
}

export namespace BreakStatement {
    export type Constructors = Statement.Constructors | 'BreakStatement';
    export type Interface = Omit<BreakStatement, Constructors>;
}
@DartClass
export class BreakStatement extends Statement {
    @AbstractProperty
    get breakKeyword() : any{ throw 'abstract'}
    set breakKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get label() : SimpleIdentifier{ throw 'abstract'}
    set label(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get target() : AstNode{ throw 'abstract'}
    set target(node : AstNode){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BreakStatement() {
    }
}

export namespace ReturnStatement {
    export type Constructors = Statement.Constructors | 'ReturnStatement';
    export type Interface = Omit<ReturnStatement, Constructors>;
}
@DartClass
export class ReturnStatement extends Statement {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get returnKeyword() : any{ throw 'abstract'}
    set returnKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReturnStatement() {
    }
}

export namespace ExpressionFunctionBody {
    export type Constructors = FunctionBody.Constructors | 'ExpressionFunctionBody';
    export type Interface = Omit<ExpressionFunctionBody, Constructors>;
}
@DartClass
export class ExpressionFunctionBody extends FunctionBody {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get functionDefinition() : any{ throw 'abstract'}
    set functionDefinition(token : any){ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionFunctionBody() {
    }
}

export namespace InstanceCreationExpression {
    export type Constructors = Expression.Constructors | 'InstanceCreationExpression';
    export type Interface = Omit<InstanceCreationExpression, Constructors>;
}
@DartClass
@Implements(ConstructorReferenceNode)
export class InstanceCreationExpression extends Expression implements ConstructorReferenceNode.Interface {
    @AbstractProperty
    get argumentList() : ArgumentList{ throw 'abstract'}
    set argumentList(argumentList : ArgumentList){ throw 'abstract'}
    @AbstractProperty
    get constructorName() : ConstructorName{ throw 'abstract'}
    set constructorName(name : ConstructorName){ throw 'abstract'}
    @AbstractProperty
    get isConst() : boolean{ throw 'abstract'}
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstanceCreationExpression() {
    }
}

export namespace RethrowExpression {
    export type Constructors = Expression.Constructors | 'RethrowExpression';
    export type Interface = Omit<RethrowExpression, Constructors>;
}
@DartClass
export class RethrowExpression extends Expression {
    @AbstractProperty
    get rethrowKeyword() : any{ throw 'abstract'}
    set rethrowKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RethrowExpression() {
    }
}

export namespace BlockFunctionBody {
    export type Constructors = FunctionBody.Constructors | 'BlockFunctionBody';
    export type Interface = Omit<BlockFunctionBody, Constructors>;
}
@DartClass
export class BlockFunctionBody extends FunctionBody {
    @AbstractProperty
    get block() : Block{ throw 'abstract'}
    set block(block : Block){ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    set star(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BlockFunctionBody() {
    }
}

export namespace InterpolationExpression {
    export type Constructors = InterpolationElement.Constructors | 'InterpolationExpression';
    export type Interface = Omit<InterpolationExpression, Constructors>;
}
@DartClass
export class InterpolationExpression extends InterpolationElement {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    set rightBracket(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterpolationExpression() {
    }
}

export namespace InterpolationString {
    export type Constructors = InterpolationElement.Constructors | 'InterpolationString';
    export type Interface = Omit<InterpolationString, Constructors>;
}
@DartClass
export class InterpolationString extends InterpolationElement {
    @AbstractProperty
    get contents() : any{ throw 'abstract'}
    set contents(token : any){ throw 'abstract'}
    @AbstractProperty
    get contentsEnd() : number{ throw 'abstract'}
    @AbstractProperty
    get contentsOffset() : number{ throw 'abstract'}
    @AbstractProperty
    get value() : string{ throw 'abstract'}
    set value(value : string){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterpolationString() {
    }
}

export namespace InvocationExpression {
    export type Constructors = Expression.Constructors | 'InvocationExpression';
    export type Interface = Omit<InvocationExpression, Constructors>;
}
@DartClass
export class InvocationExpression extends Expression {
    @AbstractProperty
    get argumentList() : ArgumentList{ throw 'abstract'}
    @AbstractProperty
    get function() : Expression{ throw 'abstract'}
    @AbstractProperty
    get propagatedInvokeType() : any{ throw 'abstract'}
    set propagatedInvokeType(value : any){ throw 'abstract'}
    @AbstractProperty
    get staticInvokeType() : any{ throw 'abstract'}
    set staticInvokeType(value : any){ throw 'abstract'}
    @AbstractProperty
    get typeArguments() : TypeArgumentList{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvocationExpression() {
    }
}

export namespace IsExpression {
    export type Constructors = Expression.Constructors | 'IsExpression';
    export type Interface = Omit<IsExpression, Constructors>;
}
@DartClass
export class IsExpression extends Expression {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get isOperator() : any{ throw 'abstract'}
    set isOperator(token : any){ throw 'abstract'}
    @AbstractProperty
    get notOperator() : any{ throw 'abstract'}
    set notOperator(token : any){ throw 'abstract'}
    @AbstractProperty
    get type() : TypeAnnotation{ throw 'abstract'}
    set type(type : TypeAnnotation){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IsExpression() {
    }
}

export namespace Block {
    export type Constructors = Statement.Constructors | 'Block';
    export type Interface = Omit<Block, Constructors>;
}
@DartClass
export class Block extends Statement {
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    set rightBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get statements() : NodeList<Statement>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Block() {
    }
}

export namespace LabeledStatement {
    export type Constructors = Statement.Constructors | 'LabeledStatement';
    export type Interface = Omit<LabeledStatement, Constructors>;
}
@DartClass
export class LabeledStatement extends Statement {
    @AbstractProperty
    get labels() : NodeList<Label>{ throw 'abstract'}
    @AbstractProperty
    get statement() : Statement{ throw 'abstract'}
    set statement(statement : Statement){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabeledStatement() {
    }
}

export namespace RedirectingConstructorInvocation {
    export type Constructors = ConstructorInitializer.Constructors | 'RedirectingConstructorInvocation';
    export type Interface = Omit<RedirectingConstructorInvocation, Constructors>;
}
@DartClass
@Implements(ConstructorReferenceNode)
export class RedirectingConstructorInvocation extends ConstructorInitializer implements ConstructorReferenceNode.Interface {
    @AbstractProperty
    get argumentList() : ArgumentList{ throw 'abstract'}
    set argumentList(argumentList : ArgumentList){ throw 'abstract'}
    @AbstractProperty
    get constructorName() : SimpleIdentifier{ throw 'abstract'}
    set constructorName(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    @AbstractProperty
    get thisKeyword() : any{ throw 'abstract'}
    set thisKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RedirectingConstructorInvocation() {
    }
}

export namespace PropertyAccess {
    export type Constructors = Expression.Constructors | 'PropertyAccess';
    export type Interface = Omit<PropertyAccess, Constructors>;
}
@DartClass
export class PropertyAccess extends Expression {
    @AbstractProperty
    get isCascaded() : boolean{ throw 'abstract'}
    @AbstractProperty
    get operator() : any{ throw 'abstract'}
    set operator(token : any){ throw 'abstract'}
    @AbstractProperty
    get propertyName() : SimpleIdentifier{ throw 'abstract'}
    set propertyName(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get realTarget() : Expression{ throw 'abstract'}
    @AbstractProperty
    get target() : Expression{ throw 'abstract'}
    set target(expression : Expression){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccess() {
    }
}

export namespace PrefixExpression {
    export type Constructors = Expression.Constructors | 'PrefixExpression';
    export type Interface = Omit<PrefixExpression, Constructors>;
}
@DartClass
@Implements(MethodReferenceExpression)
export class PrefixExpression extends Expression implements MethodReferenceExpression.Interface {
    @AbstractProperty
    get operand() : Expression{ throw 'abstract'}
    set operand(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get operator() : any{ throw 'abstract'}
    set operator(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrefixExpression() {
    }
}

export namespace Literal {
    export type Constructors = Expression.Constructors | 'Literal';
    export type Interface = Omit<Literal, Constructors>;
}
@DartClass
export class Literal extends Expression {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Literal() {
    }
}

export namespace PostfixExpression {
    export type Constructors = Expression.Constructors | 'PostfixExpression';
    export type Interface = Omit<PostfixExpression, Constructors>;
}
@DartClass
@Implements(MethodReferenceExpression)
export class PostfixExpression extends Expression implements MethodReferenceExpression.Interface {
    @AbstractProperty
    get operand() : Expression{ throw 'abstract'}
    set operand(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get operator() : any{ throw 'abstract'}
    set operator(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PostfixExpression() {
    }
}

export namespace BinaryExpression {
    export type Constructors = Expression.Constructors | 'BinaryExpression';
    export type Interface = Omit<BinaryExpression, Constructors>;
}
@DartClass
@Implements(MethodReferenceExpression)
export class BinaryExpression extends Expression implements MethodReferenceExpression.Interface {
    @AbstractProperty
    get leftOperand() : Expression{ throw 'abstract'}
    set leftOperand(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get operator() : any{ throw 'abstract'}
    set operator(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightOperand() : Expression{ throw 'abstract'}
    set rightOperand(expression : Expression){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BinaryExpression() {
    }
}

export namespace ParenthesizedExpression {
    export type Constructors = Expression.Constructors | 'ParenthesizedExpression';
    export type Interface = Omit<ParenthesizedExpression, Constructors>;
}
@DartClass
export class ParenthesizedExpression extends Expression {
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get leftParenthesis() : any{ throw 'abstract'}
    set leftParenthesis(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightParenthesis() : any{ throw 'abstract'}
    set rightParenthesis(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParenthesizedExpression() {
    }
}

export namespace NormalFormalParameter {
    export type Constructors = FormalParameter.Constructors | 'NormalFormalParameter';
    export type Interface = Omit<NormalFormalParameter, Constructors>;
}
@DartClass
export class NormalFormalParameter extends FormalParameter {
    set covariantKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get documentationComment() : Comment{ throw 'abstract'}
    set documentationComment(comment : Comment){ throw 'abstract'}
    set identifier(identifier : SimpleIdentifier){ throw 'abstract'}
    set metadata(metadata : core.DartList<Annotation>){ throw 'abstract'}
    @AbstractProperty
    get sortedCommentAndAnnotations() : core.DartList<AstNode>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NormalFormalParameter() {
    }
}

export namespace AwaitExpression {
    export type Constructors = Expression.Constructors | 'AwaitExpression';
    export type Interface = Omit<AwaitExpression, Constructors>;
}
@DartClass
export class AwaitExpression extends Expression {
    @AbstractProperty
    get awaitKeyword() : any{ throw 'abstract'}
    set awaitKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AwaitExpression() {
    }
}

export namespace AssignmentExpression {
    export type Constructors = Expression.Constructors | 'AssignmentExpression';
    export type Interface = Omit<AssignmentExpression, Constructors>;
}
@DartClass
@Implements(MethodReferenceExpression)
export class AssignmentExpression extends Expression implements MethodReferenceExpression.Interface {
    @AbstractProperty
    get leftHandSide() : Expression{ throw 'abstract'}
    set leftHandSide(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get operator() : any{ throw 'abstract'}
    set operator(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightHandSide() : Expression{ throw 'abstract'}
    set rightHandSide(expression : Expression){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssignmentExpression() {
    }
}

export namespace NamedExpression {
    export type Constructors = Expression.Constructors | 'NamedExpression';
    export type Interface = Omit<NamedExpression, Constructors>;
}
@DartClass
export class NamedExpression extends Expression {
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get expression() : Expression{ throw 'abstract'}
    set expression(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get name() : Label{ throw 'abstract'}
    set name(identifier : Label){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedExpression() {
    }
}

export namespace NamedType {
    export type Constructors = TypeAnnotation.Constructors | 'NamedType';
    export type Interface = Omit<NamedType, Constructors>;
}
@DartClass
export class NamedType extends TypeAnnotation {
    @AbstractProperty
    get isDeferred() : boolean{ throw 'abstract'}
    @AbstractProperty
    get name() : Identifier{ throw 'abstract'}
    set name(identifier : Identifier){ throw 'abstract'}
    @AbstractProperty
    get question() : any{ throw 'abstract'}
    set question(question : any){ throw 'abstract'}
    set type(type : any){ throw 'abstract'}
    @AbstractProperty
    get typeArguments() : TypeArgumentList{ throw 'abstract'}
    set typeArguments(typeArguments : TypeArgumentList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedType() {
    }
}

export namespace NativeFunctionBody {
    export type Constructors = FunctionBody.Constructors | 'NativeFunctionBody';
    export type Interface = Omit<NativeFunctionBody, Constructors>;
}
@DartClass
export class NativeFunctionBody extends FunctionBody {
    @AbstractProperty
    get nativeKeyword() : any{ throw 'abstract'}
    set nativeKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get stringLiteral() : StringLiteral{ throw 'abstract'}
    set stringLiteral(stringLiteral : StringLiteral){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NativeFunctionBody() {
    }
}

export namespace SwitchDefault {
    export type Constructors = SwitchMember.Constructors | 'SwitchDefault';
    export type Interface = Omit<SwitchDefault, Constructors>;
}
@DartClass
export class SwitchDefault extends SwitchMember {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SwitchDefault() {
    }
}

export namespace IndexExpression {
    export type Constructors = Expression.Constructors | 'IndexExpression';
    export type Interface = Omit<IndexExpression, Constructors>;
}
@DartClass
@Implements(MethodReferenceExpression)
export class IndexExpression extends Expression implements MethodReferenceExpression.Interface {
    @AbstractProperty
    get auxiliaryElements() : any{ throw 'abstract'}
    set auxiliaryElements(elements : any){ throw 'abstract'}
    @AbstractProperty
    get index() : Expression{ throw 'abstract'}
    set index(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get isCascaded() : boolean{ throw 'abstract'}
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    @AbstractProperty
    get realTarget() : Expression{ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    @AbstractProperty
    get target() : Expression{ throw 'abstract'}
    set target(expression : Expression){ throw 'abstract'}
    @Abstract
    inGetterContext() : boolean{ throw 'abstract'}
    @Abstract
    inSetterContext() : boolean{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IndexExpression() {
    }
}

export namespace SimpleIdentifier {
    export type Constructors = Identifier.Constructors | 'SimpleIdentifier';
    export type Interface = Omit<SimpleIdentifier, Constructors>;
}
@DartClass
export class SimpleIdentifier extends Identifier {
    @AbstractProperty
    get auxiliaryElements() : any{ throw 'abstract'}
    set auxiliaryElements(elements : any){ throw 'abstract'}
    @AbstractProperty
    get isQualified() : boolean{ throw 'abstract'}
    set propagatedElement(element : any){ throw 'abstract'}
    set staticElement(element : any){ throw 'abstract'}
    @AbstractProperty
    get token() : any{ throw 'abstract'}
    set token(token : any){ throw 'abstract'}
    @Abstract
    inDeclarationContext() : boolean{ throw 'abstract'}
    @Abstract
    inGetterContext() : boolean{ throw 'abstract'}
    @Abstract
    inSetterContext() : boolean{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleIdentifier() {
    }
}

export namespace MethodInvocation {
    export type Constructors = InvocationExpression.Constructors | 'MethodInvocation';
    export type Interface = Omit<MethodInvocation, Constructors>;
}
@DartClass
export class MethodInvocation extends InvocationExpression {
    set argumentList(argumentList : ArgumentList){ throw 'abstract'}
    @AbstractProperty
    get isCascaded() : boolean{ throw 'abstract'}
    @AbstractProperty
    get methodName() : SimpleIdentifier{ throw 'abstract'}
    set methodName(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get operator() : any{ throw 'abstract'}
    set operator(token : any){ throw 'abstract'}
    @AbstractProperty
    get realTarget() : Expression{ throw 'abstract'}
    @AbstractProperty
    get target() : Expression{ throw 'abstract'}
    set target(expression : Expression){ throw 'abstract'}
    set typeArguments(typeArguments : TypeArgumentList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodInvocation() {
    }
}

export namespace NullLiteral {
    export type Constructors = Literal.Constructors | 'NullLiteral';
    export type Interface = Omit<NullLiteral, Constructors>;
}
@DartClass
export class NullLiteral extends Literal {
    @AbstractProperty
    get literal() : any{ throw 'abstract'}
    set literal(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullLiteral() {
    }
}

export namespace BooleanLiteral {
    export type Constructors = Literal.Constructors | 'BooleanLiteral';
    export type Interface = Omit<BooleanLiteral, Constructors>;
}
@DartClass
export class BooleanLiteral extends Literal {
    @AbstractProperty
    get literal() : any{ throw 'abstract'}
    set literal(token : any){ throw 'abstract'}
    @AbstractProperty
    get value() : boolean{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BooleanLiteral() {
    }
}

export namespace ClassMember {
    export type Constructors = Declaration.Constructors | 'ClassMember';
    export type Interface = Omit<ClassMember, Constructors>;
}
@DartClass
export class ClassMember extends Declaration {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassMember() {
    }
}

export namespace PartOfDirective {
    export type Constructors = Directive.Constructors | 'PartOfDirective';
    export type Interface = Omit<PartOfDirective, Constructors>;
}
@DartClass
export class PartOfDirective extends Directive {
    @AbstractProperty
    get libraryName() : LibraryIdentifier{ throw 'abstract'}
    set libraryName(libraryName : LibraryIdentifier){ throw 'abstract'}
    @AbstractProperty
    get ofKeyword() : any{ throw 'abstract'}
    set ofKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get partKeyword() : any{ throw 'abstract'}
    set partKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get uri() : StringLiteral{ throw 'abstract'}
    set uri(uri : StringLiteral){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PartOfDirective() {
    }
}

export namespace VariableDeclaration {
    export type Constructors = Declaration.Constructors | 'VariableDeclaration';
    export type Interface = Omit<VariableDeclaration, Constructors>;
}
@DartClass
export class VariableDeclaration extends Declaration {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get equals() : any{ throw 'abstract'}
    set equals(token : any){ throw 'abstract'}
    @AbstractProperty
    get initializer() : Expression{ throw 'abstract'}
    set initializer(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get isConst() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFinal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get name() : SimpleIdentifier{ throw 'abstract'}
    set name(identifier : SimpleIdentifier){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableDeclaration() {
    }
}

export namespace PrefixedIdentifier {
    export type Constructors = Identifier.Constructors | 'PrefixedIdentifier';
    export type Interface = Omit<PrefixedIdentifier, Constructors>;
}
@DartClass
export class PrefixedIdentifier extends Identifier {
    @AbstractProperty
    get identifier() : SimpleIdentifier{ throw 'abstract'}
    set identifier(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get isDeferred() : boolean{ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    @AbstractProperty
    get prefix() : SimpleIdentifier{ throw 'abstract'}
    set prefix(identifier : SimpleIdentifier){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrefixedIdentifier() {
    }
}

export namespace UriBasedDirective {
    export type Constructors = Directive.Constructors | 'UriBasedDirective';
    export type Interface = Omit<UriBasedDirective, Constructors>;
}
@DartClass
export class UriBasedDirective extends Directive {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get source() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set source(source : any){ throw 'abstract'}
    @AbstractProperty
    get uri() : StringLiteral{ throw 'abstract'}
    set uri(uri : StringLiteral){ throw 'abstract'}
    @AbstractProperty
    get uriContent() : string{ throw 'abstract'}
    set uriContent(content : string){ throw 'abstract'}
    @AbstractProperty
    get uriElement() : any{ throw 'abstract'}
    @AbstractProperty
    get uriSource() : any{ throw 'abstract'}
    set uriSource(source : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UriBasedDirective() {
    }
}

export namespace LibraryIdentifier {
    export type Constructors = Identifier.Constructors | 'LibraryIdentifier';
    export type Interface = Omit<LibraryIdentifier, Constructors>;
}
@DartClass
export class LibraryIdentifier extends Identifier {
    @AbstractProperty
    get components() : NodeList<SimpleIdentifier>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryIdentifier() {
    }
}

export namespace LibraryDirective {
    export type Constructors = Directive.Constructors | 'LibraryDirective';
    export type Interface = Omit<LibraryDirective, Constructors>;
}
@DartClass
export class LibraryDirective extends Directive {
    @AbstractProperty
    get libraryKeyword() : any{ throw 'abstract'}
    set libraryKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get name() : LibraryIdentifier{ throw 'abstract'}
    set name(name : LibraryIdentifier){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryDirective() {
    }
}

export namespace IntegerLiteral {
    export type Constructors = Literal.Constructors | 'IntegerLiteral';
    export type Interface = Omit<IntegerLiteral, Constructors>;
}
@DartClass
export class IntegerLiteral extends Literal {
    @AbstractProperty
    get literal() : any{ throw 'abstract'}
    set literal(token : any){ throw 'abstract'}
    @AbstractProperty
    get value() : number{ throw 'abstract'}
    set value(value : number){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntegerLiteral() {
    }
}

export namespace TypeParameter {
    export type Constructors = Declaration.Constructors | 'TypeParameter';
    export type Interface = Omit<TypeParameter, Constructors>;
}
@DartClass
export class TypeParameter extends Declaration {
    @AbstractProperty
    get bound() : TypeAnnotation{ throw 'abstract'}
    set bound(type : TypeAnnotation){ throw 'abstract'}
    @AbstractProperty
    get extendsKeyword() : any{ throw 'abstract'}
    set extendsKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get name() : SimpleIdentifier{ throw 'abstract'}
    set name(identifier : SimpleIdentifier){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameter() {
    }
}

export namespace TypeName {
    export type Constructors = NamedType.Constructors | 'TypeName';
    export type Interface = Omit<TypeName, Constructors>;
}
@DartClass
export class TypeName extends NamedType {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeName() {
    }
}

export namespace FunctionTypedFormalParameter {
    export type Constructors = NormalFormalParameter.Constructors | 'FunctionTypedFormalParameter';
    export type Interface = Omit<FunctionTypedFormalParameter, Constructors>;
}
@DartClass
export class FunctionTypedFormalParameter extends NormalFormalParameter {
    @AbstractProperty
    get parameters() : FormalParameterList{ throw 'abstract'}
    set parameters(parameters : FormalParameterList){ throw 'abstract'}
    @AbstractProperty
    get question() : any{ throw 'abstract'}
    set question(question : any){ throw 'abstract'}
    @AbstractProperty
    get returnType() : TypeAnnotation{ throw 'abstract'}
    set returnType(type : TypeAnnotation){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypedFormalParameter() {
    }
}

export namespace SimpleFormalParameter {
    export type Constructors = NormalFormalParameter.Constructors | 'SimpleFormalParameter';
    export type Interface = Omit<SimpleFormalParameter, Constructors>;
}
@DartClass
export class SimpleFormalParameter extends NormalFormalParameter {
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get type() : TypeAnnotation{ throw 'abstract'}
    set type(type : TypeAnnotation){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleFormalParameter() {
    }
}

export namespace TypedLiteral {
    export type Constructors = Literal.Constructors | 'TypedLiteral';
    export type Interface = Omit<TypedLiteral, Constructors>;
}
@DartClass
export class TypedLiteral extends Literal {
    @AbstractProperty
    get constKeyword() : any{ throw 'abstract'}
    set constKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get typeArguments() : TypeArgumentList{ throw 'abstract'}
    set typeArguments(typeArguments : TypeArgumentList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypedLiteral() {
    }
}

export namespace DeclaredIdentifier {
    export type Constructors = Declaration.Constructors | 'DeclaredIdentifier';
    export type Interface = Omit<DeclaredIdentifier, Constructors>;
}
@DartClass
export class DeclaredIdentifier extends Declaration {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get identifier() : SimpleIdentifier{ throw 'abstract'}
    set identifier(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get isConst() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isFinal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get type() : TypeAnnotation{ throw 'abstract'}
    set type(type : TypeAnnotation){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeclaredIdentifier() {
    }
}

export namespace DoubleLiteral {
    export type Constructors = Literal.Constructors | 'DoubleLiteral';
    export type Interface = Omit<DoubleLiteral, Constructors>;
}
@DartClass
export class DoubleLiteral extends Literal {
    @AbstractProperty
    get literal() : any{ throw 'abstract'}
    set literal(token : any){ throw 'abstract'}
    @AbstractProperty
    get value() : double{ throw 'abstract'}
    set value(value : double){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleLiteral() {
    }
}

export namespace SymbolLiteral {
    export type Constructors = Literal.Constructors | 'SymbolLiteral';
    export type Interface = Omit<SymbolLiteral, Constructors>;
}
@DartClass
export class SymbolLiteral extends Literal {
    @AbstractProperty
    get components() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get poundSign() : any{ throw 'abstract'}
    set poundSign(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SymbolLiteral() {
    }
}

export namespace FieldFormalParameter {
    export type Constructors = NormalFormalParameter.Constructors | 'FieldFormalParameter';
    export type Interface = Omit<FieldFormalParameter, Constructors>;
}
@DartClass
export class FieldFormalParameter extends NormalFormalParameter {
    @AbstractProperty
    get keyword() : any{ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get parameters() : FormalParameterList{ throw 'abstract'}
    set parameters(parameters : FormalParameterList){ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    @AbstractProperty
    get thisKeyword() : any{ throw 'abstract'}
    set thisKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get type() : TypeAnnotation{ throw 'abstract'}
    set type(type : TypeAnnotation){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldFormalParameter() {
    }
}

export namespace StringLiteral {
    export type Constructors = Literal.Constructors | 'StringLiteral';
    export type Interface = Omit<StringLiteral, Constructors>;
}
@DartClass
export class StringLiteral extends Literal {
    @AbstractProperty
    get stringValue() : string{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringLiteral() {
    }
}

export namespace FunctionExpressionInvocation {
    export type Constructors = InvocationExpression.Constructors | 'FunctionExpressionInvocation';
    export type Interface = Omit<FunctionExpressionInvocation, Constructors>;
}
@DartClass
export class FunctionExpressionInvocation extends InvocationExpression {
    set argumentList(argumentList : ArgumentList){ throw 'abstract'}
    @AbstractProperty
    get bestElement() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get function() : Expression{ throw 'abstract'}
    set function(expression : Expression){ throw 'abstract'}
    @AbstractProperty
    get propagatedElement() : any{ throw 'abstract'}
    set propagatedElement(element : any){ throw 'abstract'}
    @AbstractProperty
    get staticElement() : any{ throw 'abstract'}
    set staticElement(element : any){ throw 'abstract'}
    set typeArguments(typeArguments : TypeArgumentList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionExpressionInvocation() {
    }
}

export namespace EnumConstantDeclaration {
    export type Constructors = Declaration.Constructors | 'EnumConstantDeclaration';
    export type Interface = Omit<EnumConstantDeclaration, Constructors>;
}
@DartClass
export class EnumConstantDeclaration extends Declaration {
    @AbstractProperty
    get name() : SimpleIdentifier{ throw 'abstract'}
    set name(name : SimpleIdentifier){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumConstantDeclaration() {
    }
}

export namespace CompilationUnitMember {
    export type Constructors = Declaration.Constructors | 'CompilationUnitMember';
    export type Interface = Omit<CompilationUnitMember, Constructors>;
}
@DartClass
export class CompilationUnitMember extends Declaration {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitMember() {
    }
}

export namespace FieldDeclaration {
    export type Constructors = ClassMember.Constructors | 'FieldDeclaration';
    export type Interface = Omit<FieldDeclaration, Constructors>;
}
@DartClass
export class FieldDeclaration extends ClassMember {
    @AbstractProperty
    get covariantKeyword() : any{ throw 'abstract'}
    set covariantKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get fields() : VariableDeclarationList{ throw 'abstract'}
    set fields(fields : VariableDeclarationList){ throw 'abstract'}
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get staticKeyword() : any{ throw 'abstract'}
    set staticKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldDeclaration() {
    }
}

export namespace AdjacentStrings {
    export type Constructors = StringLiteral.Constructors | 'AdjacentStrings';
    export type Interface = Omit<AdjacentStrings, Constructors>;
}
@DartClass
export class AdjacentStrings extends StringLiteral {
    @AbstractProperty
    get strings() : NodeList<StringLiteral>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AdjacentStrings() {
    }
}

export namespace NamespaceDirective {
    export type Constructors = UriBasedDirective.Constructors | 'NamespaceDirective';
    export type Interface = Omit<NamespaceDirective, Constructors>;
}
@DartClass
export class NamespaceDirective extends UriBasedDirective {
    @AbstractProperty
    get combinators() : NodeList<Combinator>{ throw 'abstract'}
    @AbstractProperty
    get configurations() : NodeList<Configuration>{ throw 'abstract'}
    set keyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get selectedSource() : any{ throw 'abstract'}
    @AbstractProperty
    get selectedUriContent() : string{ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamespaceDirective() {
    }
}

export namespace TopLevelVariableDeclaration {
    export type Constructors = CompilationUnitMember.Constructors | 'TopLevelVariableDeclaration';
    export type Interface = Omit<TopLevelVariableDeclaration, Constructors>;
}
@DartClass
export class TopLevelVariableDeclaration extends CompilationUnitMember {
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get variables() : VariableDeclarationList{ throw 'abstract'}
    set variables(variables : VariableDeclarationList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelVariableDeclaration() {
    }
}

export namespace SingleStringLiteral {
    export type Constructors = StringLiteral.Constructors | 'SingleStringLiteral';
    export type Interface = Omit<SingleStringLiteral, Constructors>;
}
@DartClass
export class SingleStringLiteral extends StringLiteral {
    @AbstractProperty
    get contentsEnd() : number{ throw 'abstract'}
    @AbstractProperty
    get contentsOffset() : number{ throw 'abstract'}
    @AbstractProperty
    get isMultiline() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isRaw() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSingleQuoted() : boolean{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SingleStringLiteral() {
    }
}

export namespace ConstructorDeclaration {
    export type Constructors = ClassMember.Constructors | 'ConstructorDeclaration';
    export type Interface = Omit<ConstructorDeclaration, Constructors>;
}
@DartClass
export class ConstructorDeclaration extends ClassMember {
    @AbstractProperty
    get body() : FunctionBody{ throw 'abstract'}
    set body(functionBody : FunctionBody){ throw 'abstract'}
    @AbstractProperty
    get constKeyword() : any{ throw 'abstract'}
    set constKeyword(token : any){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    set element(element : any){ throw 'abstract'}
    @AbstractProperty
    get externalKeyword() : any{ throw 'abstract'}
    set externalKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get factoryKeyword() : any{ throw 'abstract'}
    set factoryKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get initializers() : NodeList<ConstructorInitializer>{ throw 'abstract'}
    @AbstractProperty
    get name() : SimpleIdentifier{ throw 'abstract'}
    set name(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get parameters() : FormalParameterList{ throw 'abstract'}
    set parameters(parameters : FormalParameterList){ throw 'abstract'}
    @AbstractProperty
    get period() : any{ throw 'abstract'}
    set period(token : any){ throw 'abstract'}
    @AbstractProperty
    get redirectedConstructor() : ConstructorName{ throw 'abstract'}
    set redirectedConstructor(redirectedConstructor : ConstructorName){ throw 'abstract'}
    @AbstractProperty
    get returnType() : Identifier{ throw 'abstract'}
    set returnType(typeName : Identifier){ throw 'abstract'}
    @AbstractProperty
    get separator() : any{ throw 'abstract'}
    set separator(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorDeclaration() {
    }
}

export namespace NamedCompilationUnitMember {
    export type Constructors = CompilationUnitMember.Constructors | 'NamedCompilationUnitMember';
    export type Interface = Omit<NamedCompilationUnitMember, Constructors>;
}
@DartClass
export class NamedCompilationUnitMember extends CompilationUnitMember {
    @AbstractProperty
    get name() : SimpleIdentifier{ throw 'abstract'}
    set name(identifier : SimpleIdentifier){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedCompilationUnitMember() {
    }
}

export namespace ListLiteral {
    export type Constructors = TypedLiteral.Constructors | 'ListLiteral';
    export type Interface = Omit<ListLiteral, Constructors>;
}
@DartClass
export class ListLiteral extends TypedLiteral {
    @AbstractProperty
    get elements() : NodeList<Expression>{ throw 'abstract'}
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    set rightBracket(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListLiteral() {
    }
}

export namespace MapLiteral {
    export type Constructors = TypedLiteral.Constructors | 'MapLiteral';
    export type Interface = Omit<MapLiteral, Constructors>;
}
@DartClass
export class MapLiteral extends TypedLiteral {
    @AbstractProperty
    get entries() : NodeList<MapLiteralEntry>{ throw 'abstract'}
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    set rightBracket(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapLiteral() {
    }
}

export namespace PartDirective {
    export type Constructors = UriBasedDirective.Constructors | 'PartDirective';
    export type Interface = Omit<PartDirective, Constructors>;
}
@DartClass
export class PartDirective extends UriBasedDirective {
    @AbstractProperty
    get partKeyword() : any{ throw 'abstract'}
    set partKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PartDirective() {
    }
}

export namespace MethodDeclaration {
    export type Constructors = ClassMember.Constructors | 'MethodDeclaration';
    export type Interface = Omit<MethodDeclaration, Constructors>;
}
@DartClass
export class MethodDeclaration extends ClassMember {
    @AbstractProperty
    get body() : FunctionBody{ throw 'abstract'}
    set body(functionBody : FunctionBody){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get externalKeyword() : any{ throw 'abstract'}
    set externalKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get isAbstract() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isGetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isOperator() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isStatic() : boolean{ throw 'abstract'}
    @AbstractProperty
    get modifierKeyword() : any{ throw 'abstract'}
    set modifierKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get name() : SimpleIdentifier{ throw 'abstract'}
    set name(identifier : SimpleIdentifier){ throw 'abstract'}
    @AbstractProperty
    get operatorKeyword() : any{ throw 'abstract'}
    set operatorKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get parameters() : FormalParameterList{ throw 'abstract'}
    set parameters(parameters : FormalParameterList){ throw 'abstract'}
    @AbstractProperty
    get propertyKeyword() : any{ throw 'abstract'}
    set propertyKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get returnType() : TypeAnnotation{ throw 'abstract'}
    set returnType(type : TypeAnnotation){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodDeclaration() {
    }
}

export namespace ExportDirective {
    export type Constructors = NamespaceDirective.Constructors | 'ExportDirective';
    export type Interface = Omit<ExportDirective, Constructors>;
}
@DartClass
export class ExportDirective extends NamespaceDirective {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExportDirective() {
    }
}

export namespace EnumDeclaration {
    export type Constructors = NamedCompilationUnitMember.Constructors | 'EnumDeclaration';
    export type Interface = Omit<EnumDeclaration, Constructors>;
}
@DartClass
export class EnumDeclaration extends NamedCompilationUnitMember {
    @AbstractProperty
    get constants() : NodeList<EnumConstantDeclaration>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get enumKeyword() : any{ throw 'abstract'}
    set enumKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    set rightBracket(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumDeclaration() {
    }
}

export namespace TypeAlias {
    export type Constructors = NamedCompilationUnitMember.Constructors | 'TypeAlias';
    export type Interface = Omit<TypeAlias, Constructors>;
}
@DartClass
export class TypeAlias extends NamedCompilationUnitMember {
    @AbstractProperty
    get semicolon() : any{ throw 'abstract'}
    set semicolon(token : any){ throw 'abstract'}
    @AbstractProperty
    get typedefKeyword() : any{ throw 'abstract'}
    set typedefKeyword(token : any){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeAlias() {
    }
}

export namespace SimpleStringLiteral {
    export type Constructors = SingleStringLiteral.Constructors | 'SimpleStringLiteral';
    export type Interface = Omit<SimpleStringLiteral, Constructors>;
}
@DartClass
export class SimpleStringLiteral extends SingleStringLiteral {
    @AbstractProperty
    get literal() : any{ throw 'abstract'}
    set literal(token : any){ throw 'abstract'}
    @AbstractProperty
    get value() : string{ throw 'abstract'}
    set value(string : string){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleStringLiteral() {
    }
}

export namespace ImportDirective {
    export type Constructors = NamespaceDirective.Constructors | 'ImportDirective';
    export type Interface = Omit<ImportDirective, Constructors>;
}
@DartClass
export class ImportDirective extends NamespaceDirective {
    private static __$COMPARATOR : <T>(a : ImportDirective,b : ImportDirective) => number;
    static get COMPARATOR() : <T>(a : ImportDirective,b : ImportDirective) => number { 
        if (this.__$COMPARATOR===undefined) {
            this.__$COMPARATOR = (import1 : ImportDirective,import2 : ImportDirective) =>  {
                let uri1 : StringLiteral = import1.uri;
                let uri2 : StringLiteral = import2.uri;
                let uriStr1 : string = uri1.stringValue;
                let uriStr2 : string = uri2.stringValue;
                if (uriStr1 != null || uriStr2 != null) {
                    if (uriStr1 == null) {
                        return -1;
                    }else if (uriStr2 == null) {
                        return 1;
                    }else {
                        let compare : number = new core.DartString(uriStr1).compareTo(uriStr2);
                        if (compare != 0) {
                            return compare;
                        }
                    }
                }
                let prefix1 : SimpleIdentifier = import1.prefix;
                let prefix2 : SimpleIdentifier = import2.prefix;
                let prefixStr1 : string = ((t)=>(!!t)?t.name:null)(prefix1);
                let prefixStr2 : string = ((t)=>(!!t)?t.name:null)(prefix2);
                if (prefixStr1 != null || prefixStr2 != null) {
                    if (prefixStr1 == null) {
                        return -1;
                    }else if (prefixStr2 == null) {
                        return 1;
                    }else {
                        let compare : number = new core.DartString(prefixStr1).compareTo(prefixStr2);
                        if (compare != 0) {
                            return compare;
                        }
                    }
                }
                let combinators1 : NodeList<Combinator> = import1.combinators;
                let allHides1 : core.DartList<string> = new core.DartList<string>();
                let allShows1 : core.DartList<string> = new core.DartList<string>();
                let length1 : number = combinators1.length;
                for(let i : number = 0; i < length1; i++){
                    let combinator : Combinator = combinators1[i];
                    if (is(combinator, HideCombinator)) {
                        let hides : NodeList<SimpleIdentifier> = combinator.hiddenNames;
                        let hideLength : number = hides.length;
                        for(let j : number = 0; j < hideLength; j++){
                            let simpleIdentifier : SimpleIdentifier = hides[j];
                            allHides1.add(simpleIdentifier.name);
                        }
                    }else {
                        let shows : NodeList<SimpleIdentifier> = (combinator as ShowCombinator).shownNames;
                        let showLength : number = shows.length;
                        for(let j : number = 0; j < showLength; j++){
                            let simpleIdentifier : SimpleIdentifier = shows[j];
                            allShows1.add(simpleIdentifier.name);
                        }
                    }
                }
                let combinators2 : NodeList<Combinator> = import2.combinators;
                let allHides2 : core.DartList<string> = new core.DartList<string>();
                let allShows2 : core.DartList<string> = new core.DartList<string>();
                let length2 : number = combinators2.length;
                for(let i : number = 0; i < length2; i++){
                    let combinator : Combinator = combinators2[i];
                    if (is(combinator, HideCombinator)) {
                        let hides : NodeList<SimpleIdentifier> = combinator.hiddenNames;
                        let hideLength : number = hides.length;
                        for(let j : number = 0; j < hideLength; j++){
                            let simpleIdentifier : SimpleIdentifier = hides[j];
                            allHides2.add(simpleIdentifier.name);
                        }
                    }else {
                        let shows : NodeList<SimpleIdentifier> = (combinator as ShowCombinator).shownNames;
                        let showLength : number = shows.length;
                        for(let j : number = 0; j < showLength; j++){
                            let simpleIdentifier : SimpleIdentifier = shows[j];
                            allShows2.add(simpleIdentifier.name);
                        }
                    }
                }
                if (allHides1.length != allHides2.length) {
                    return allHides1.length - allHides2.length;
                }
                if (allShows1.length != allShows2.length) {
                    return allShows1.length - allShows2.length;
                }
                if (!allHides1.toSet().containsAll(allHides2)) {
                    return -1;
                }
                if (!allShows1.toSet().containsAll(allShows2)) {
                    return -1;
                }
                return 0;
            };
        }
        return this.__$COMPARATOR;
    }
    static set COMPARATOR(__$value : <T>(a : ImportDirective,b : ImportDirective) => number)  { 
        this.__$COMPARATOR = __$value;
    }

    @AbstractProperty
    get asKeyword() : any{ throw 'abstract'}
    set asKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get deferredKeyword() : any{ throw 'abstract'}
    set deferredKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get prefix() : SimpleIdentifier{ throw 'abstract'}
    set prefix(identifier : SimpleIdentifier){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImportDirective() {
    }
}

export namespace FunctionDeclaration {
    export type Constructors = NamedCompilationUnitMember.Constructors | 'FunctionDeclaration';
    export type Interface = Omit<FunctionDeclaration, Constructors>;
}
@DartClass
export class FunctionDeclaration extends NamedCompilationUnitMember {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get externalKeyword() : any{ throw 'abstract'}
    set externalKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get functionExpression() : FunctionExpression{ throw 'abstract'}
    set functionExpression(functionExpression : FunctionExpression){ throw 'abstract'}
    @AbstractProperty
    get isGetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isSetter() : boolean{ throw 'abstract'}
    @AbstractProperty
    get propertyKeyword() : any{ throw 'abstract'}
    set propertyKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get returnType() : TypeAnnotation{ throw 'abstract'}
    set returnType(type : TypeAnnotation){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionDeclaration() {
    }
}

export namespace ClassDeclaration {
    export type Constructors = NamedCompilationUnitMember.Constructors | 'ClassDeclaration';
    export type Interface = Omit<ClassDeclaration, Constructors>;
}
@DartClass
export class ClassDeclaration extends NamedCompilationUnitMember {
    @AbstractProperty
    get abstractKeyword() : any{ throw 'abstract'}
    set abstractKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get classKeyword() : any{ throw 'abstract'}
    set classKeyword(token : any){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get extendsClause() : ExtendsClause{ throw 'abstract'}
    set extendsClause(extendsClause : ExtendsClause){ throw 'abstract'}
    @AbstractProperty
    get implementsClause() : ImplementsClause{ throw 'abstract'}
    set implementsClause(implementsClause : ImplementsClause){ throw 'abstract'}
    @AbstractProperty
    get isAbstract() : boolean{ throw 'abstract'}
    @AbstractProperty
    get leftBracket() : any{ throw 'abstract'}
    set leftBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get members() : NodeList<ClassMember>{ throw 'abstract'}
    @AbstractProperty
    get nativeClause() : NativeClause{ throw 'abstract'}
    set nativeClause(nativeClause : NativeClause){ throw 'abstract'}
    @AbstractProperty
    get rightBracket() : any{ throw 'abstract'}
    set rightBracket(token : any){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    @AbstractProperty
    get withClause() : WithClause{ throw 'abstract'}
    set withClause(withClause : WithClause){ throw 'abstract'}
    @Abstract
    getConstructor(name : string) : ConstructorDeclaration{ throw 'abstract'}
    @Abstract
    getField(name : string) : VariableDeclaration{ throw 'abstract'}
    @Abstract
    getMethod(name : string) : MethodDeclaration{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassDeclaration() {
    }
}

export namespace StringInterpolation {
    export type Constructors = SingleStringLiteral.Constructors | 'StringInterpolation';
    export type Interface = Omit<StringInterpolation, Constructors>;
}
@DartClass
export class StringInterpolation extends SingleStringLiteral {
    @AbstractProperty
    get elements() : NodeList<InterpolationElement>{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringInterpolation() {
    }
}

export namespace FunctionTypeAlias {
    export type Constructors = TypeAlias.Constructors | 'FunctionTypeAlias';
    export type Interface = Omit<FunctionTypeAlias, Constructors>;
}
@DartClass
export class FunctionTypeAlias extends TypeAlias {
    @AbstractProperty
    get parameters() : FormalParameterList{ throw 'abstract'}
    set parameters(parameters : FormalParameterList){ throw 'abstract'}
    @AbstractProperty
    get returnType() : TypeAnnotation{ throw 'abstract'}
    set returnType(type : TypeAnnotation){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeAlias() {
    }
}

export namespace GenericTypeAlias {
    export type Constructors = TypeAlias.Constructors | 'GenericTypeAlias';
    export type Interface = Omit<GenericTypeAlias, Constructors>;
}
@DartClass
export class GenericTypeAlias extends TypeAlias {
    @AbstractProperty
    get equals() : any{ throw 'abstract'}
    set equals(token : any){ throw 'abstract'}
    @AbstractProperty
    get functionType() : GenericFunctionType{ throw 'abstract'}
    set functionType(functionType : GenericFunctionType){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericTypeAlias() {
    }
}

export namespace ClassTypeAlias {
    export type Constructors = TypeAlias.Constructors | 'ClassTypeAlias';
    export type Interface = Omit<ClassTypeAlias, Constructors>;
}
@DartClass
export class ClassTypeAlias extends TypeAlias {
    @AbstractProperty
    get abstractKeyword() : any{ throw 'abstract'}
    set abstractKeyword(token : any){ throw 'abstract'}
    @AbstractProperty
    get equals() : any{ throw 'abstract'}
    set equals(token : any){ throw 'abstract'}
    @AbstractProperty
    get implementsClause() : ImplementsClause{ throw 'abstract'}
    set implementsClause(implementsClause : ImplementsClause){ throw 'abstract'}
    @AbstractProperty
    get isAbstract() : boolean{ throw 'abstract'}
    @AbstractProperty
    get superclass() : TypeName{ throw 'abstract'}
    set superclass(superclass : TypeName){ throw 'abstract'}
    @AbstractProperty
    get typeParameters() : TypeParameterList{ throw 'abstract'}
    set typeParameters(typeParameters : TypeParameterList){ throw 'abstract'}
    @AbstractProperty
    get withClause() : WithClause{ throw 'abstract'}
    set withClause(withClause : WithClause){ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassTypeAlias() {
    }
}

export class properties {
}
