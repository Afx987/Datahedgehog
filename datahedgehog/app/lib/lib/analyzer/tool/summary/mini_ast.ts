/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/summary/mini_ast.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace AnnotatedNode {
    export type Constructors = 'AnnotatedNode';
    export type Interface = Omit<AnnotatedNode, Constructors>;
}
@DartClass
export class AnnotatedNode {
    documentationComment : Comment;

    metadata : core.DartList<Annotation>;

    constructor(documentationComment : Comment,metadata : core.DartList<Annotation>) {
    }
    @defaultConstructor
    AnnotatedNode(documentationComment : Comment,metadata : core.DartList<Annotation>) {
        this.metadata = (metadata || new core.DartList.literal());
        this.documentationComment = documentationComment;
    }
}

export namespace Annotation {
    export type Constructors = 'Annotation';
    export type Interface = Omit<Annotation, Constructors>;
}
@DartClass
export class Annotation {
    name : string;

    constructorName : string;

    arguments : core.DartList<Expression>;

    constructor(name : string,constructorName : string,arguments : core.DartList<Expression>) {
    }
    @defaultConstructor
    Annotation(name : string,constructorName : string,arguments : core.DartList<Expression>) {
        this.name = name;
        this.constructorName = constructorName;
        this.arguments = arguments;
    }
}

export namespace Comment {
    export type Constructors = '_';
    export type Interface = Omit<Comment, Constructors>;
}
@DartClass
export class Comment {
    isDocumentation : boolean;

    tokens : core.DartList<any>;

    constructor(commentToken : any) {
    }
    @defaultFactory
    static $Comment(commentToken : any) : Comment {
        let tokens = new core.DartList.literal<any>();
        let isDocumentation : boolean = false;
        while (commentToken != null){
            if (commentToken.lexeme.startsWith('/**') || commentToken.lexeme.startsWith('///')) {
                isDocumentation = true;
            }
            tokens.add(commentToken);
            commentToken = commentToken.next;
        }
        return new Comment._(isDocumentation,tokens);
    }
    @namedConstructor
    _(isDocumentation : boolean,tokens : core.DartList<any>) {
        this.isDocumentation = isDocumentation;
        this.tokens = tokens;
    }
    static _ : new(isDocumentation : boolean,tokens : core.DartList<any>) => Comment;

}

export namespace CompilationUnit {
    export type Constructors = 'CompilationUnit';
    export type Interface = Omit<CompilationUnit, Constructors>;
}
@DartClass
export class CompilationUnit {
    declarations;

    constructor() {
    }
    @defaultConstructor
    CompilationUnit() {
        this.declarations = new core.DartList.literal<CompilationUnitMember>();
    }
}

export namespace ConstructorReference {
    export type Constructors = 'ConstructorReference';
    export type Interface = Omit<ConstructorReference, Constructors>;
}
@DartClass
export class ConstructorReference {
    name : string;

    constructorName : string;

    constructor(name : string,constructorName : string) {
    }
    @defaultConstructor
    ConstructorReference(name : string,constructorName : string) {
        this.name = name;
        this.constructorName = constructorName;
    }
}

export namespace Expression {
    export type Constructors = 'Expression';
    export type Interface = Omit<Expression, Constructors>;
}
@DartClass
export class Expression {
    constructor() {
    }
    @defaultConstructor
    Expression() {
    }
}

export namespace MiniAstBuilder {
    export type Constructors = 'MiniAstBuilder';
    export type Interface = Omit<MiniAstBuilder, Constructors>;
}
@DartClass
export class MiniAstBuilder extends any {
    inMetadata : boolean;

    compilationUnit;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : lib3.Uri {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginMetadata(token : any) : void {
        this.inMetadata = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginMetadataStar(token : any) : void {
        debugEvent("beginMetadataStar");
        if (token.precedingComments != null) {
            push(new Comment(token.precedingComments));
        }else {
            push(NullValue.Comments);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endArguments(count : number,beginToken : any,endToken : any) : void {
        debugEvent("Arguments");
        push(popList(count));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endClassBody(memberCount : number,beginToken : any,endToken : any) : void {
        debugEvent("ClassBody");
        push(popList(memberCount));
    }
    endClassDeclaration(interfacesCount : number,beginToken : any,classKeyword : any,extendsKeyword : any,implementsKeyword : any,endToken : any) : void {
        debugEvent("ClassDeclaration");
        let members : core.DartList<ClassMember> = pop();
        let superclass : TypeName = pop();
        pop();
        let name : string = pop();
        let metadata : core.DartList<Annotation> = pop();
        let comment : Comment = pop();
        this.compilationUnit.declarations.add(new ClassDeclaration(comment,metadata,name,superclass,members));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCombinators(count : number) : void {
        debugEvent("Combinators");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConditionalUris(count : number) : void {
        debugEvent("ConditionalUris");
        if (count != 0) {
            internalError('Conditional URIs are not supported by summary codegen');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstructorReference(start : any,periodBeforeName : any,endToken : any) : void {
        debugEvent("ConstructorReference");
        let constructorName : string = popIfNotNull(periodBeforeName);
        pop();
        let name : string = pop();
        push(new ConstructorReference(name,constructorName));
    }
    endEnum(enumKeyword : any,endBrace : any,count : number) : void {
        debugEvent("Enum");
        let constants : core.DartList<EnumConstantDeclaration> = popList(count);
        let name : string = pop();
        let metadata : core.DartList<Annotation> = pop();
        let comment : Comment = pop();
        this.compilationUnit.declarations.add(new EnumDeclaration(comment,metadata,name,constants));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFactoryMethod(beginToken : any,factoryKeyword : any,endToken : any) : void {
        debugEvent("FactoryMethod");
        pop();
        let name : ConstructorReference = pop();
        let metadata : core.DartList<Annotation> = pop();
        let comment : Comment = pop();
        push(new ConstructorDeclaration(comment,metadata,name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFieldInitializer(assignment : any,token : any) : void {
        debugEvent("FieldInitializer");
        pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFormalParameter(thisKeyword : any,nameToken : any,kind : any,memberKind : any) : void {
        debugEvent("FormalParameter");
        pop();
        pop();
        pop();
        pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFormalParameters(count : number,beginToken : any,endToken : any,kind : any) : void {
        debugEvent("FormalParameters");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endIdentifierList(count : number) : void {
        debugEvent("IdentifierList");
        push(popList(count));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endImport(importKeyword : any,deferredKeyword : any,asKeyword : any,semicolon : any) : void {
        debugEvent("Import");
        popIfNotNull(asKeyword);
        pop();
        pop();
        pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLibraryName(libraryKeyword : any,semicolon : any) : void {
        debugEvent("LibraryName");
        pop();
        pop();
        pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLiteralString(interpolationCount : number,endToken : any) : void {
        super.endLiteralString(interpolationCount,endToken);
        let value : string = pop();
        push(new StringLiteral(value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMember() : void {
        debugEvent("Member");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadata(beginToken : any,periodBeforeName : any,endToken : any) : void {
        debugEvent("Metadata");
        this.inMetadata = false;
        let arguments : core.DartList<Expression> = pop();
        let constructorName : string = popIfNotNull(periodBeforeName);
        pop();
        let name : string = pop();
        push(new Annotation(name,constructorName,arguments));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadataStar(count : number,forParameter : boolean) : void {
        debugEvent("MetadataStar");
        push((popList(count) || NullValue.Metadata));
    }
    endMethod(getOrSet : any,beginToken : any,endToken : any) : void {
        debugEvent("Method");
        pop();
        pop();
        pop();
        pop();
        let name : string = pop();
        let returnType : TypeName = pop();
        let metadata : core.DartList<Annotation> = pop();
        let comment : Comment = pop();
        push(new MethodDeclaration(comment,metadata,op(Op.EQUALS,((t)=>(!!t)?t.lexeme:null)(getOrSet),'get'),name,returnType));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endSend(beginToken : any,endToken : any) : void {
        debugEvent("Send");
        pop();
        pop();
        pop();
        push(new UnknownExpression());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endShow(showKeyword : any) : void {
        debugEvent("Show");
        pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTopLevelFields(count : number,beginToken : any,endToken : any) : void {
        debugEvent("TopLevelFields");
        popList(count);
        pop();
        pop();
        pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeArguments(count : number,beginToken : any,endToken : any) : void {
        debugEvent("TypeArguments");
        push(popList(count));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleAsyncModifier(asyncToken : any,starToken : any) : void {
        debugEvent("AsyncModifier");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleBinaryExpression(token : any) : void {
        debugEvent("BinaryExpression");
        pop();
        pop();
        push(new UnknownExpression());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFormalParameterWithoutValue(token : any) : void {
        debugEvent("FormalParameterWithoutValue");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFunctionBodySkipped(token : any,isExpressionBody : boolean) : void {
        if (isExpressionBody) pop();
        push(NullValue.FunctionBody);
    }
    handleIdentifier(token : any,context : any) : void {
        if (op(Op.EQUALS,context,IdentifierContext.enumValueDeclaration)) {
            let comment = new Comment(token.precedingComments);
            push(new EnumConstantDeclaration(comment,null,token.lexeme));
        }else {
            push(token.lexeme);
        }
    }
    handleLiteralInt(token : any) : void {
        debugEvent("LiteralInt");
        push(new IntegerLiteral(core.DartInt.parse(token.lexeme)));
    }
    handleLiteralNull(token : any) : void {
        debugEvent("LiteralNull");
        push(new UnknownExpression());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleModifier(token : any) : void {
        debugEvent("Modifier");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleModifiers(count : number) : void {
        debugEvent("Modifiers");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleQualified(period : any) : void {
        debugEvent("Qualified");
        let suffix : string = pop();
        let prefix : string = pop();
        push(`${prefix}.${suffix}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleType(beginToken : any,endToken : any) : void {
        debugEvent("Type");
        let typeArguments : core.DartList<TypeName> = pop();
        let name : string = pop();
        push(new TypeName(name,typeArguments));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MiniAstBuilder() {
        this.inMetadata = false;
        this.compilationUnit = new CompilationUnit();
    }
}

export namespace MiniAstParser {
    export type Constructors = 'MiniAstParser';
    export type Interface = Omit<MiniAstParser, Constructors>;
}
@DartClass
export class MiniAstParser extends any {
    constructor(listener : MiniAstBuilder) {
    }
    @defaultConstructor
    MiniAstParser(listener : MiniAstBuilder) {
        super.DartObject(listener);
    }
    parseArgumentsOpt(token : any) : any {
        let listener : MiniAstBuilder = this.listener;
        if (listener.inMetadata) {
            return super.parseArgumentsOpt(token);
        }else {
            return skipArgumentsOpt(token);
        }
    }
    parseFunctionBody(token : any,isExpression : boolean,allowAbstract : boolean) : any {
        return skipFunctionBody(token,isExpression,allowAbstract);
    }
}

export namespace TypeName {
    export type Constructors = 'TypeName';
    export type Interface = Omit<TypeName, Constructors>;
}
@DartClass
export class TypeName {
    name : string;

    typeArguments : core.DartList<TypeName>;

    constructor(name : string,typeArguments : core.DartList<TypeName>) {
    }
    @defaultConstructor
    TypeName(name : string,typeArguments : core.DartList<TypeName>) {
        this.name = name;
        this.typeArguments = typeArguments;
    }
}

export namespace ClassMember {
    export type Constructors = AnnotatedNode.Constructors | 'ClassMember';
    export type Interface = Omit<ClassMember, Constructors>;
}
@DartClass
export class ClassMember extends AnnotatedNode {
    constructor(documentationComment : Comment,metadata : core.DartList<Annotation>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassMember(documentationComment : Comment,metadata : core.DartList<Annotation>) {
        super.AnnotatedNode(documentationComment,metadata);
    }
}

export namespace CompilationUnitMember {
    export type Constructors = AnnotatedNode.Constructors | 'CompilationUnitMember';
    export type Interface = Omit<CompilationUnitMember, Constructors>;
}
@DartClass
export class CompilationUnitMember extends AnnotatedNode {
    constructor(documentationComment : Comment,metadata : core.DartList<Annotation>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitMember(documentationComment : Comment,metadata : core.DartList<Annotation>) {
        super.AnnotatedNode(documentationComment,metadata);
    }
}

export namespace EnumConstantDeclaration {
    export type Constructors = AnnotatedNode.Constructors | 'EnumConstantDeclaration';
    export type Interface = Omit<EnumConstantDeclaration, Constructors>;
}
@DartClass
export class EnumConstantDeclaration extends AnnotatedNode {
    name : string;

    constructor(documentationComment : Comment,metadata : core.DartList<Annotation>,name : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumConstantDeclaration(documentationComment : Comment,metadata : core.DartList<Annotation>,name : string) {
        super.AnnotatedNode(documentationComment,metadata);
        this.name = name;
    }
}

export namespace IntegerLiteral {
    export type Constructors = Expression.Constructors | 'IntegerLiteral';
    export type Interface = Omit<IntegerLiteral, Constructors>;
}
@DartClass
export class IntegerLiteral extends Expression {
    value : number;

    constructor(value : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntegerLiteral(value : number) {
        this.value = value;
    }
}

export namespace StringLiteral {
    export type Constructors = Expression.Constructors | 'StringLiteral';
    export type Interface = Omit<StringLiteral, Constructors>;
}
@DartClass
export class StringLiteral extends Expression {
    stringValue : string;

    constructor(stringValue : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringLiteral(stringValue : string) {
        this.stringValue = stringValue;
    }
}

export namespace UnknownExpression {
    export type Constructors = Expression.Constructors | 'UnknownExpression';
    export type Interface = Omit<UnknownExpression, Constructors>;
}
@DartClass
export class UnknownExpression extends Expression {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnknownExpression() {
    }
}

export namespace ClassDeclaration {
    export type Constructors = CompilationUnitMember.Constructors | 'ClassDeclaration';
    export type Interface = Omit<ClassDeclaration, Constructors>;
}
@DartClass
export class ClassDeclaration extends CompilationUnitMember {
    name : string;

    superclass : TypeName;

    members : core.DartList<ClassMember>;

    constructor(documentationComment : Comment,metadata : core.DartList<Annotation>,name : string,superclass : TypeName,members : core.DartList<ClassMember>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassDeclaration(documentationComment : Comment,metadata : core.DartList<Annotation>,name : string,superclass : TypeName,members : core.DartList<ClassMember>) {
        super.CompilationUnitMember(documentationComment,metadata);
        this.name = name;
        this.superclass = superclass;
        this.members = members;
    }
}

export namespace ConstructorDeclaration {
    export type Constructors = ClassMember.Constructors | 'ConstructorDeclaration';
    export type Interface = Omit<ConstructorDeclaration, Constructors>;
}
@DartClass
export class ConstructorDeclaration extends ClassMember {
    name : ConstructorReference;

    constructor(documentationComment : Comment,metadata : core.DartList<Annotation>,name : ConstructorReference) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorDeclaration(documentationComment : Comment,metadata : core.DartList<Annotation>,name : ConstructorReference) {
        super.ClassMember(documentationComment,metadata);
        this.name = name;
    }
}

export namespace EnumDeclaration {
    export type Constructors = CompilationUnitMember.Constructors | 'EnumDeclaration';
    export type Interface = Omit<EnumDeclaration, Constructors>;
}
@DartClass
export class EnumDeclaration extends CompilationUnitMember {
    name : string;

    constants : core.DartList<EnumConstantDeclaration>;

    constructor(documentationComment : Comment,metadata : core.DartList<Annotation>,name : string,constants : core.DartList<EnumConstantDeclaration>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnumDeclaration(documentationComment : Comment,metadata : core.DartList<Annotation>,name : string,constants : core.DartList<EnumConstantDeclaration>) {
        super.CompilationUnitMember(documentationComment,metadata);
        this.name = name;
        this.constants = constants;
    }
}

export namespace MethodDeclaration {
    export type Constructors = ClassMember.Constructors | 'MethodDeclaration';
    export type Interface = Omit<MethodDeclaration, Constructors>;
}
@DartClass
export class MethodDeclaration extends ClassMember {
    isGetter : boolean;

    name : string;

    returnType : TypeName;

    constructor(documentationComment : Comment,metadata : core.DartList<Annotation>,isGetter : boolean,name : string,returnType : TypeName) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodDeclaration(documentationComment : Comment,metadata : core.DartList<Annotation>,isGetter : boolean,name : string,returnType : TypeName) {
        super.ClassMember(documentationComment,metadata);
        this.isGetter = isGetter;
        this.name = name;
        this.returnType = returnType;
    }
}

export class properties {
}
