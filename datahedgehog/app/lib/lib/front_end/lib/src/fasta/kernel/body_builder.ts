/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/body_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../source/scope_listener";
import * as lib4 from "./fasta_accessors";
import * as lib5 from "./kernel_library_builder";
import * as lib6 from "./../builder/member_builder";
import * as lib7 from "./kernel_class_builder";
import * as lib8 from "./../scope";
import * as lib9 from "@dart2ts/dart/uri";
import * as lib10 from "./kernel_procedure_builder";
import * as lib11 from "./../builder/type_variable_builder";
import * as lib12 from "./../builder/type_declaration_builder";
import * as lib13 from "./kernel_type_builder";
import * as lib14 from "./../builder/prefix_builder";
import * as lib15 from "./../errors";
import * as lib16 from "./../../scanner/token";
import * as lib17 from "./../source/unhandled_listener";
import * as lib18 from "./../source/stack_listener";
import * as lib19 from "./../builder/builder";
import * as lib20 from "./../builder/field_builder";
import * as lib21 from "./kernel_field_builder";
import * as lib22 from "./frontend_accessors";
import * as lib23 from "./../builder/formal_parameter_builder";
import * as lib24 from "./../names";
import * as lib25 from "./../scanner/token";
import * as lib26 from "./../parser/parser";
import * as lib27 from "./../parser/identifier_context";
import * as lib28 from "./../quote";
import * as lib29 from "./../modifier";
import * as lib30 from "./kernel_variable_builder";
import * as lib31 from "./../builder/type_builder";
import * as lib32 from "./../builder/class_builder";
import * as lib33 from "./redirecting_factory_body";
import * as lib34 from "./../fasta_codes";

export var combineStatements : (statement : any,body : any) => any = (statement : any,body : any) : any =>  {
    if (is(body, any)) {
        body.statements.insert(0,statement);
        statement.parent = body;
        return body;
    }else {
        return new bare.createInstance(any,null,new core.DartList.literal<any>(statement,body));
    }
};
export var debugName : (className : string,name : string,prefix? : string) => string = (className : string,name : string,prefix? : string) : string =>  {
    let result : string = new core.DartString(name).isEmpty ? className : `${className}.${name}`;
    return prefix == null ? result : `${prefix}.result`;
};
export var getNodeName : (node : core.DartObject) => string = (node : core.DartObject) : string =>  {
    if (is(node, Identifier)) {
        return node.name;
    }else if (is(node, lib12.TypeDeclarationBuilder<any,any>)) {
        return node.name;
    }else if (is(node, lib14.PrefixBuilder)) {
        return node.name;
    }else if (is(node, lib4.ThisAccessor)) {
        return node.isSuper ? "super" : "this";
    }else if (is(node, lib4.FastaAccessor)) {
        return node.plainNameForRead;
    }else {
        return lib15.internalError(`Unhandled: ${node.runtimeType}`);
    }
};
export var asyncMarkerFromTokens : (asyncToken : lib16.Token,starToken : lib16.Token) => any = (asyncToken : lib16.Token,starToken : lib16.Token) : any =>  {
    if (op(Op.EQUALS,asyncToken,null) || core.identical(asyncToken.stringValue,"sync")) {
        if (op(Op.EQUALS,starToken,null)) {
            return AsyncMarker.Sync;
        }else {
            /* TODO (AssertStatementImpl) : assert (identical(starToken.stringValue, "*")); */;
            return AsyncMarker.SyncStar;
        }
    }else if (core.identical(asyncToken.stringValue,"async")) {
        if (op(Op.EQUALS,starToken,null)) {
            return AsyncMarker.Async;
        }else {
            /* TODO (AssertStatementImpl) : assert (identical(starToken.stringValue, "*")); */;
            return AsyncMarker.AsyncStar;
        }
    }else {
        return lib15.internalError(`Unknown async modifier: ${asyncToken}`);
    }
};
export namespace BodyBuilder {
    export type Constructors = lib3.ScopeListener.Constructors | 'BodyBuilder';
    export type Interface = Omit<BodyBuilder, Constructors>;
}
@DartClass
@Implements(lib4.BuilderHelper)
export class BodyBuilder extends lib3.ScopeListener<JumpTarget> implements lib4.BuilderHelper.Interface {
    library : lib5.KernelLibraryBuilder;

    member : lib6.MemberBuilder;

    classBuilder : lib7.KernelClassBuilder;

    hierarchy : any;

    coreTypes : any;

    isInstanceMember : boolean;

    fieldInitializers : core.DartMap<string,any>;

    enclosingScope : lib8.Scope;

    isDartLibrary : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib9.Uri;

    _typeInferrer : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    astFactory : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typePromoter : any;

    fieldDependencies : core.DartList<any>;

    needsImplicitSuperInitializer : boolean;

    formalParameterScope : lib8.Scope;

    inInitializer : boolean;

    inCatchClause : boolean;

    inCatchBlock : boolean;

    functionNestingLevel : number;

    compileTimeErrorInTry : any;

    compileTimeErrorInLoopOrSwitch : any;

    switchScope : lib8.Scope;

    cloner : any;

    constantExpressionRequired : boolean;

    currentLocalVariableType : any;

    currentLocalVariableModifiers : number;

    constructor(library : lib5.KernelLibraryBuilder,member : lib6.MemberBuilder,scope : lib8.Scope,formalParameterScope : lib8.Scope,hierarchy : any,coreTypes : any,classBuilder : lib7.KernelClassBuilder,isInstanceMember : boolean,uri : lib9.Uri,_typeInferrer : any,astFactory : any,_namedArguments? : {fieldDependencies? : core.DartList<any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BodyBuilder(library : lib5.KernelLibraryBuilder,member : lib6.MemberBuilder,scope : lib8.Scope,formalParameterScope : lib8.Scope,hierarchy : any,coreTypes : any,classBuilder : lib7.KernelClassBuilder,isInstanceMember : boolean,uri : lib9.Uri,_typeInferrer : any,astFactory : any,_namedArguments? : {fieldDependencies? : core.DartList<any>}) {
        let {fieldDependencies} = Object.assign({
        }, _namedArguments );
        this.fieldInitializers = new core.DartMap.literal([
        ]);
        this.inInitializer = false;
        this.inCatchClause = false;
        this.inCatchBlock = false;
        this.functionNestingLevel = 0;
        this.constantExpressionRequired = false;
        this.currentLocalVariableModifiers = -1;
        this.enclosingScope = scope;
        this.library = library;
        this.isDartLibrary = library.uri.scheme == "dart";
        this.needsImplicitSuperInitializer = coreTypes.objectClass != ((t)=>(!!t)?t.cls:null)(classBuilder);
        this.typePromoter = _typeInferrer.typePromoter;
        super.ScopeListener(scope);
        this.member = member;
        this.formalParameterScope = formalParameterScope;
        this.hierarchy = hierarchy;
        this.coreTypes = coreTypes;
        this.classBuilder = classBuilder;
        this.isInstanceMember = isInstanceMember;
        this.uri = uri;
        this._typeInferrer = _typeInferrer;
        this.astFactory = astFactory;
        this.fieldDependencies = fieldDependencies;
    }
    get hasParserError() : boolean {
        return this.recoverableErrors.isNotEmpty;
    }
    get inConstructor() : boolean {
        return this.functionNestingLevel == 0 && is(this.member, lib10.KernelConstructorBuilder);
    }
    get isInstanceContext() : boolean {
        return this.isInstanceMember || is(this.member, lib10.KernelConstructorBuilder);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    push(node : core.DartObject) : void {
        this.inInitializer = false;
        super.push(node);
    }
    popForValue() : any {
        return this.toValue(this.pop());
    }
    popForEffect() : any {
        return this.toEffect(this.pop());
    }
    popForValueIfNotNull(value : core.DartObject) : any {
        return op(Op.EQUALS,value,null) ? null : this.popForValue();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toValue(node : core.DartObject) : any {
        if (is(node, lib4.FastaAccessor)) {
            return node.buildSimpleRead();
        }else if (is(node, lib11.TypeVariableBuilder<any,any>)) {
            let type : any = node.buildTypesWithBuiltArguments(this.library,null);
            if (!this.isInstanceContext && is(type.parameter.parent, any)) {
                return this.buildCompileTimeError("Type variables can only be used in instance methods.");
            }else {
                if (this.constantExpressionRequired) {
                    this.addCompileTimeError(-1,`Type variable can't be used as a constant expression ${type}.`);
                }
                return new bare.createInstance(any,null,type);
            }
        }else if (is(node, lib12.TypeDeclarationBuilder<any,any>)) {
            return new bare.createInstance(any,null,node.buildTypesWithBuiltArguments(this.library,null));
        }else if (is(node, lib13.KernelTypeBuilder)) {
            return new bare.createInstance(any,null,node.build(this.library));
        }else if (is(node, any)) {
            return node;
        }else if (is(node, lib14.PrefixBuilder)) {
            return this.buildCompileTimeError("A library can't be used as an expression.");
        }else if (is(node, lib8.ProblemBuilder)) {
            return this.buildProblemExpression(node,-1);
        }else {
            return lib15.internalError(`Unhandled: ${node.runtimeType}`);
        }
    }
    toEffect(node : core.DartObject) : any {
        if (is(node, lib4.FastaAccessor)) return node.buildForEffect();
        return this.toValue(node);
    }
    popListForValue(n : number) : core.DartList<any> {
        let list : core.DartList<any> = new core.DartList.filled(n,null,{
            growable : true});
        for(let i : number = n - 1; i >= 0; i--){
            list[i] = this.popForValue();
        }
        return list;
    }
    popListForEffect(n : number) : core.DartList<any> {
        let list : core.DartList<any> = new core.DartList.filled(n,null,{
            growable : true});
        for(let i : number = n - 1; i >= 0; i--){
            list[i] = this.popForEffect();
        }
        return list;
    }
    popBlock(count : number,beginToken : lib16.Token) : any {
        let statements : core.DartList<any> = (this.popList(count) || new core.DartList.literal<any>());
        let copy : core.DartList<any>;
        for(let i : number = 0; i < statements.length; i++){
            let statement = statements[i];
            if (is(statement, core.DartList<any>)) {
                copy = ( copy ) || ( new core.DartList.from(statements.getRange(0,i)) );
                let subStatements : core.DartIterable<any> = statement;
                copy.addAll(subStatements);
            }else if (copy != null) {
                copy.add(statement);
            }
        }
        return this.astFactory.block((copy || statements),beginToken);
    }
    popStatementIfNotNull(value : core.DartObject) : any {
        return op(Op.EQUALS,value,null) ? null : this.popStatement();
    }
    popStatement() : any {
        let statement = this.pop();
        if (is(statement, core.DartList<any>)) {
            return new bare.createInstance(any,null,new core.DartList.from(statement));
        }else if (is(statement, any)) {
            return new bare.createInstance(any,null,new core.DartList.literal<any>(statement));
        }else {
            return statement;
        }
    }
    ignore(value : lib17.Unhandled) : void {
        this.pop();
    }
    enterSwitchScope() : void {
        this.push((this.switchScope || lib18.NullValue.SwitchScope));
        this.switchScope = this.scope;
    }
    exitSwitchScope() : void {
        let outerSwitchScope : lib8.Scope = this.pop();
        if (this.switchScope.unclaimedForwardDeclarations != null) {
            this.switchScope.unclaimedForwardDeclarations.forEach((name : string,builder : lib19.Builder) =>  {
                if (op(Op.EQUALS,outerSwitchScope,null)) {
                    this.addCompileTimeError(-1,`Label not found: '${name}'.`);
                }else {
                    outerSwitchScope.forwardDeclareLabel(name,builder);
                }
            });
        }
        this.switchScope = outerSwitchScope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createJumpTarget(kind : lib3.JumpTargetKind,charOffset : number) : JumpTarget {
        return new JumpTarget(kind,this.functionNestingLevel,this.member,charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadata(beginToken : lib16.Token,periodBeforeName : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("Metadata");
        this.pop();
        this.popIfNotNull(periodBeforeName);
        this.pop();
        this.pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadataStar(count : number,forParameter : boolean) : void {
        this.debugEvent("MetadataStar");
        this.push(lib18.NullValue.Metadata);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTopLevelFields(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("TopLevelFields");
        this.doFields(count);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFields(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("Fields");
        this.doFields(count);
        this.pop();
    }
    doFields(count : number) : void {
        for(let i : number = 0; i < count; i++){
            let initializer : any = this.pop();
            let identifier : Identifier = this.pop();
            if (initializer != null) {
                let name : string = identifier.name;
                let field : lib20.FieldBuilder<any>;
                if (this.classBuilder != null) {
                    field = op(Op.INDEX,this.classBuilder,name);
                }else {
                    field = op(Op.INDEX,this.library,name);
                }
                if (field.next != null) {
                    lib15.internalError(`Unhandled: '${field.name}' has more than one declaration.`);
                }
                field.initializer = initializer;
            }
        }
        this.pop();
        this.pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMember() : void {
        this.debugEvent("Member");
        this.checkEmpty(-1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endBlockFunctionBody(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("BlockFunctionBody");
        if (op(Op.EQUALS,beginToken,null)) {
            /* TODO (AssertStatementImpl) : assert (count == 0); */;
            this.push(lib18.NullValue.Block);
        }else {
            let block : any = this.popBlock(count,beginToken);
            this.exitLocalScope();
            this.push(block);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    prepareInitializers() : void {
        this.scope = this.formalParameterScope;
        /* TODO (AssertStatementImpl) : assert (fieldInitializers.isEmpty); */;
        let member = this.member;
        if (is(member, lib10.KernelConstructorBuilder)) {
            let constructor : any = member.constructor;
            this.classBuilder.forEach((name : string,builder : lib19.Builder) =>  {
                if (is(builder, lib21.KernelFieldBuilder) && builder.isInstanceMember) {
                    this.fieldInitializers.set(name,((_) : any =>  {
                        {
                            _.parent = constructor;
                            return _;
                        }
                    })(new bare.createInstance(any,null,builder.field,null)));
                }
            });
            if (member.formals != null) {
                for(let formal of member.formals) {
                    if (formal.hasThis) {
                        let initializer : any = this.fieldInitializers.get(formal.name);
                        if (initializer != null) {
                            this.fieldInitializers.remove(formal.name);
                            initializer.value = ((_) : any =>  {
                                {
                                    _.parent = initializer;
                                    return _;
                                }
                            })(new bare.createInstance(any,null,formal.declaration));
                            member.addInitializer(initializer);
                        }
                    }
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginInitializer(token : lib16.Token) : void {
        this.debugEvent("beginInitializer");
        this.inInitializer = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endInitializer(token : lib16.Token) : void {
        this.debugEvent("endInitializer");
        /* TODO (AssertStatementImpl) : assert (!inInitializer); */;
        let member = this.member;
        let node = this.pop();
        let initializer : any;
        if (is(node, any)) {
            initializer = node;
        }else if (is(node, lib4.FastaAccessor)) {
            initializer = node.buildFieldInitializer(this.fieldInitializers);
        }else if (is(node, any)) {
            initializer = this.buildSuperInitializer(node.target,node.arguments,token.charOffset);
        }else {
            if (isNot(node, any)) {
                this.needsImplicitSuperInitializer = false;
                node = lib22.wrapInvalid(node);
            }
            initializer = this.buildInvalidIntializer(node,token.charOffset);
        }
        if (is(member, lib10.KernelConstructorBuilder)) {
            member.addInitializer(initializer);
        }else {
            this.addCompileTimeError(token.charOffset,`Can't have initializers: ${member.name}`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoInitializers() : void {
        this.debugEvent("NoInitializers");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endInitializers(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("Initializers");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    finishFunction(formals : FormalParameters,asyncModifier : any,body : any) : void {
        this.debugEvent("finishFunction");
        this.typePromoter.finished();
        this._typeInferrer.inferFunctionBody(null,asyncModifier,body);
        let builder : lib10.KernelFunctionBuilder = this.member;
        builder.body = body;
        if (((t)=>(!!t)?t.optional:null)(formals) != null) {
            let formalBuilders : core.DartIterator<lib23.FormalParameterBuilder<any>> = builder.formals.skip(formals.required.length).iterator;
            for(let parameter of formals.optional.formals) {
                let hasMore : boolean = formalBuilders.moveNext();
                /* TODO (AssertStatementImpl) : assert (hasMore); */;
                let realParameter : any = formalBuilders.current.target;
                let initializer : any = (parameter.initializer || this.astFactory.nullLiteral(null));
                realParameter.initializer = ((_) : any =>  {
                    {
                        _.parent = realParameter;
                        return _;
                    }
                })(initializer);
            }
        }
        if (is(builder, lib10.KernelConstructorBuilder)) {
            this.finishConstructor(builder,asyncModifier);
        }else if (is(builder, lib10.KernelProcedureBuilder)) {
            builder.asyncModifier = asyncModifier;
        }else {
            lib15.internalError(`Unhandled: ${builder.runtimeType}`);
        }
    }
    finishConstructor(builder : lib10.KernelConstructorBuilder,asyncModifier : any) : void {
        /* TODO (AssertStatementImpl) : assert (builder == member); */;
        let constructor : any = builder.constructor;
        if (asyncModifier != AsyncMarker.Sync) {
            let offset : number = (((t)=>(!!t)?t.fileOffset:null)(builder.body) || builder.charOffset);
            constructor.initializers.add(this.buildInvalidIntializer(this.buildCompileTimeError(`A constructor can't be '${asyncModifier}'.`,offset),offset));
        }
        if (this.needsImplicitSuperInitializer) {
            let superTarget : any = this.lookupConstructor(lib24.properties.emptyName,{
                isSuper : true});
            let initializer : any;
            let arguments : any = new bare.createInstance(any,null);
            if (op(Op.EQUALS,superTarget,null) || !this.checkArguments(superTarget.function,arguments,new core.DartList.literal<any>())) {
                let superclass : string = this.classBuilder.supertype.fullNameForErrors;
                let message : string = op(Op.EQUALS,superTarget,null) ? `'${superclass}' doesn't have an unnamed constructor.` : `The unnamed constructor in '${superclass}' requires arguments.`;
                initializer = this.buildInvalidIntializer(this.buildCompileTimeError(message,builder.charOffset),builder.charOffset);
            }else {
                initializer = this.buildSuperInitializer(superTarget,arguments,builder.charOffset);
            }
            constructor.initializers.add(initializer);
        }
        setParents(constructor.initializers,constructor);
        if (op(Op.EQUALS,constructor.function.body,null)) {
            constructor.function.body = new bare.createInstance(any,null);
            constructor.function.body.parent = constructor.function;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endExpressionStatement(token : lib16.Token) : void {
        this.debugEvent("ExpressionStatement");
        this.push(this.astFactory.expressionStatement(this.popForEffect()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endArguments(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("Arguments");
        let arguments : core.DartList<any> = (this.popList(count) || new core.DartList.literal<any>());
        let firstNamedArgumentIndex : number = arguments.length;
        for(let i : number = 0; i < arguments.length; i++){
            let node = arguments[i];
            if (is(node, any)) {
                firstNamedArgumentIndex = i < firstNamedArgumentIndex ? i : firstNamedArgumentIndex;
            }else {
                arguments[i] = this.toValue(node);
                if (i > firstNamedArgumentIndex) {
                    arguments[i] = new bare.createInstance(any,null,`#${i}`,this.buildCompileTimeError("Expected named argument.",arguments[i].fileOffset));
                }
            }
        }
        if (firstNamedArgumentIndex < arguments.length) {
            let positional : core.DartList<any> = new core.DartList.from(arguments.getRange(0,firstNamedArgumentIndex));
            let named : core.DartList<any> = new core.DartList.from(arguments.getRange(firstNamedArgumentIndex,arguments.length));
            this.push(this.astFactory.arguments(positional,{
                named : named}));
        }else {
            this.push(this.astFactory.arguments(arguments));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleParenthesizedExpression(token : lib25.BeginGroupToken) : void {
        this.debugEvent("ParenthesizedExpression");
        this.push(new lib4.ParenthesizedExpression(this,this.popForValue(),token.endGroup));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endSend(beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("Send");
        let arguments : any = this.pop();
        let typeArguments : core.DartList<any> = this.pop();
        let receiver : core.DartObject = this.pop();
        if (arguments != null && typeArguments != null) {
            /* TODO (AssertStatementImpl) : assert (arguments.types.isEmpty); */;
            this.astFactory.setExplicitArgumentTypes(arguments,typeArguments);
        }else {
            /* TODO (AssertStatementImpl) : assert (typeArguments == null); */;
        }
        if (is(receiver, Identifier)) {
            let name : any = new bare.createInstance(any,null,receiver.name,this.library.library);
            if (op(Op.EQUALS,arguments,null)) {
                this.push(new lib4.IncompletePropertyAccessor(this,beginToken,name));
            }else {
                this.push(new lib4.SendAccessor(this,beginToken,name,arguments));
            }
        }else if (op(Op.EQUALS,arguments,null)) {
            this.push(receiver);
        }else {
            this.push(this.finishSend(receiver,arguments,beginToken.charOffset));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    finishSend(receiver : core.DartObject,arguments : any,charOffset : number) {
        var isIdentical : (receiver : core.DartObject) => boolean = (receiver : core.DartObject) : boolean =>  {
            return is(receiver, lib4.StaticAccessor) && op(Op.EQUALS,receiver.readTarget,this.coreTypes.identicalProcedure);
        };
        if (is(receiver, lib4.FastaAccessor)) {
            if (this.constantExpressionRequired && !isIdentical(receiver) && !receiver.isInitializer) {
                this.addCompileTimeError(charOffset,"Not a constant expression.");
            }
            return receiver.doInvocation(charOffset,arguments);
        }else {
            return lib4.buildMethodInvocation(this.astFactory,this.toValue(receiver),lib24.properties.callName,arguments,charOffset);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginCascade(token : lib16.Token) : void {
        this.debugEvent("beginCascade");
        let expression : any = this.popForValue();
        if (is(expression, CascadeReceiver)) {
            this.push(expression);
            this.push(new lib4.VariableAccessor(this,token,expression.variable));
            expression.extend();
        }else {
            let variable : any = new bare.createInstance(any,null,expression);
            this.push(new CascadeReceiver(variable));
            this.push(new lib4.VariableAccessor(this,token,variable));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCascade() : void {
        this.debugEvent("endCascade");
        let expression : any = this.popForEffect();
        let cascadeReceiver : CascadeReceiver = this.pop();
        cascadeReceiver.finalize(expression);
        this.push(cascadeReceiver);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleBinaryExpression(token : lib16.Token) : void {
        this.debugEvent("BinaryExpression");
        if (lib26.optional(".",token) || lib26.optional("..",token)) {
            return this.doDotOrCascadeExpression(token);
        }
        if (lib26.optional("&&",token) || lib26.optional("||",token)) {
            return this.doLogicalExpression(token);
        }
        if (lib26.optional("??",token)) return this.doIfNull(token);
        if (lib26.optional("?.",token)) return this.doIfNotNull(token);
        let argument : any = this.popForValue();
        let receiver = this.pop();
        let isSuper : boolean = false;
        if (is(receiver, lib4.ThisAccessor) && receiver.isSuper) {
            let thisAccessorReceiver : lib4.ThisAccessor = receiver;
            isSuper = true;
            receiver = this.astFactory.thisExpression(thisAccessorReceiver.token);
        }
        this.push(this.buildBinaryOperator(this.toValue(receiver),token,argument,isSuper));
    }
    buildBinaryOperator(a : any,token : lib16.Token,b : any,isSuper : boolean) : any {
        let negate : boolean = false;
        let operator : string = token.stringValue;
        if (core.identical("!=",operator)) {
            operator = "==";
            negate = true;
        }
        if (!lib25.isBinaryOperator(operator) && !lib25.isMinusOperator(operator)) {
            return this.buildCompileTimeError(`Not an operator: '${operator}'.`,token.charOffset);
        }else {
            let result : any = lib22.makeBinary(this.astFactory,a,new bare.createInstance(any,null,operator),null,b,{
                offset : token.charOffset});
            if (isSuper) {
                result = this.toSuperMethodInvocation(result);
            }
            return negate ? this.astFactory.not(null,result) : result;
        }
    }
    doLogicalExpression(token : lib16.Token) : void {
        let argument : any = this.popForValue();
        let receiver : any = this.popForValue();
        this.push(this.astFactory.logicalExpression(receiver,token.stringValue,argument));
    }
    doIfNull(token : lib16.Token) : void {
        let b : any = this.popForValue();
        let a : any = this.popForValue();
        let variable : any = new bare.createInstance(any,null,a);
        this.push(lib22.makeLet(variable,new bare.createInstance(any,null,lib22.buildIsNull(this.astFactory,new bare.createInstance(any,null,variable)),b,new bare.createInstance(any,null,variable),new bare.createInstance(any,null))));
    }
    doIfNotNull(token : lib16.Token) : void {
        let send : lib4.IncompleteSend = this.pop();
        this.push(send.withReceiver(this.pop(),{
            isNullAware : true}));
    }
    doDotOrCascadeExpression(token : lib16.Token) : void {
        let send : lib4.IncompleteSend = this.pop();
        let receiver : core.DartObject = lib26.optional(".",token) ? this.pop() : this.popForValue();
        this.push(send.withReceiver(receiver));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toSuperMethodInvocation(node : any) : any {
        let target : any = this.lookupSuperMember(node.name);
        let isNoSuchMethod : boolean = op(Op.EQUALS,target,null);
        if (is(target, any)) {
            if (!target.isAccessor) {
                if (this.areArgumentsCompatible(target.function,node.arguments)) {
                    let result : any = this.astFactory.directMethodInvocation(new bare.createInstance(any,null),target,node.arguments);
                    result = this.astFactory.superMethodInvocation(null,node.name,node.arguments,null);
                    return result;
                }else {
                    isNoSuchMethod = true;
                }
            }
        }
        if (isNoSuchMethod) {
            return this.throwNoSuchMethodError(node.name.name,node.arguments,node.fileOffset,{
                isSuper : true});
        }
        let receiver : any = this.astFactory.directPropertyGet(new bare.createInstance(any,null),target);
        receiver = this.astFactory.superPropertyGet(node.name,target);
        return lib4.buildMethodInvocation(this.astFactory,receiver,lib24.properties.callName,node.arguments,node.fileOffset);
    }
    areArgumentsCompatible(function : any,arguments : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    throwNoSuchMethodError(name : string,arguments : any,charOffset : number,_namedArguments? : {isSuper? : boolean,isGetter? : any,isSetter? : any}) : any {
        let {isSuper,isGetter,isSetter} = Object.assign({
            "isSuper" : false,
            "isGetter" : false,
            "isSetter" : false}, _namedArguments );
        let errorName : string = isSuper ? `super.${name}` : name;
        let message : string;
        if (isGetter) {
            message = `Getter not found: '${errorName}'.`;
        }else if (isSetter) {
            message = `Setter not found: '${errorName}'.`;
        }else {
            message = `Method not found: '${errorName}'.`;
        }
        if (this.constantExpressionRequired) {
            return this.buildCompileTimeError(message,charOffset);
        }
        this.warning(message,charOffset);
        let constructor : any = this.coreTypes.noSuchMethodErrorClass.constructors.first;
        return new bare.createInstance(any,null,new bare.createInstance(any,null,constructor,this.astFactory.arguments(new core.DartList.literal<any>(this.astFactory.nullLiteral(null),new bare.createInstance(any,null,name),new bare.createInstance(any,null,arguments.positional),new bare.createInstance(any,null,arguments.named.map((arg : any) =>  {
            return new bare.createInstance(any,null,new bare.createInstance(any,null,arg.name),arg.value);
        }).toList()),this.astFactory.nullLiteral(null)))));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookupSuperMember(name : any,_namedArguments? : {isSetter? : boolean}) : any {
        let {isSetter} = Object.assign({
            "isSetter" : false}, _namedArguments );
        let superclass : any = this.classBuilder.cls.superclass;
        return op(Op.EQUALS,superclass,null) ? null : this.hierarchy.getDispatchTarget(superclass,name,{
            setter : isSetter});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookupConstructor(name : any,_namedArguments? : {isSuper? : boolean}) : any {
        let {isSuper} = Object.assign({
        }, _namedArguments );
        let cls : any = this.classBuilder.cls;
        if (isSuper) {
            cls = cls.superclass;
            while (cls.isMixinApplication){
                cls = cls.superclass;
            }
        }
        if (cls != null) {
            for(let constructor of cls.constructors) {
                if (op(Op.EQUALS,constructor.name,name)) return constructor;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleIdentifier(token : lib16.Token,context : lib27.IdentifierContext) : void {
        this.debugEvent("handleIdentifier");
        let name : string = token.lexeme;
        if (context.isScopeReference) {
            /* TODO (AssertStatementImpl) : assert (!inInitializer || this.scope == enclosingScope || this.scope.parent == enclosingScope); */;
            let scope : lib8.Scope = this.inInitializer ? this.enclosingScope : this.scope;
            this.push(this.scopeLookup(scope,name,token));
            return;
        }else if (context.inDeclaration) {
            if (op(Op.EQUALS,context,lib27.IdentifierContext.topLevelVariableDeclaration) || op(Op.EQUALS,context,lib27.IdentifierContext.fieldDeclaration)) {
                this.constantExpressionRequired = this.member.isConst;
            }
        }else if (this.constantExpressionRequired && !context.allowedInConstantExpression) {
            this.addCompileTimeError(token.charOffset,`Not a constant expression: ${context}`);
        }
        this.push(new Identifier(token));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scopeLookup(scope : lib8.Scope,name : string,token : lib16.Token,_namedArguments? : {isQualified? : boolean,prefix? : lib14.PrefixBuilder}) {
        let {isQualified,prefix} = Object.assign({
            "isQualified" : false}, _namedArguments );
        let builder : lib19.Builder = scope.lookup(name,offsetForToken(token),this.uri);
        if (op(Op.EQUALS,builder,null) || (!this.isInstanceContext && builder.isInstanceMember)) {
            let n : any = new bare.createInstance(any,null,name,this.library.library);
            if (prefix != null && prefix.deferred && op(Op.EQUALS,builder,null) && "loadLibrary" == name) {
                return this.buildCompileTimeError("Deferred loading isn't implemented yet.",offsetForToken(token));
            }else if (!isQualified && this.isInstanceContext) {
                /* TODO (AssertStatementImpl) : assert (builder == null); */;
                if (this.constantExpressionRequired) {
                    return new lib4.UnresolvedAccessor(this,n,token);
                }
                return new lib4.ThisPropertyAccessor(this,token,n,null,null);
            }else if (this.isDartLibrary && name == "main" && this.library.uri.path == "_builtin" && ((t)=>(!!t)?t.name:null)(this.member) == "_getMainClosure") {
                return this.astFactory.nullLiteral(token);
            }else {
                return new lib4.UnresolvedAccessor(this,n,token);
            }
        }else if (builder.isTypeDeclaration) {
            if (this.constantExpressionRequired && builder.isTypeVariable && !this.member.isConstructor) {
                this.addCompileTimeError(offsetForToken(token),"Not a constant expression.");
            }
            return builder;
        }else if (builder.isLocal) {
            if (this.constantExpressionRequired && !builder.isConst && !this.member.isConstructor) {
                this.addCompileTimeError(offsetForToken(token),"Not a constant expression.");
            }
            return new lib4.VariableAccessor(this,token,builder.target);
        }else if (builder.isInstanceMember) {
            if (this.constantExpressionRequired && !this.inInitializer && !this.member.isConstructor) {
                this.addCompileTimeError(offsetForToken(token),"Not a constant expression.");
            }
            return new lib4.ThisPropertyAccessor(this,token,new bare.createInstance(any,null,name,this.library.library),null,null);
        }else if (builder.isRegularMethod) {
            /* TODO (AssertStatementImpl) : assert (builder.isStatic || builder.isTopLevel); */;
            return new lib4.StaticAccessor(this,token,builder.target,null);
        }else if (is(builder, lib14.PrefixBuilder)) {
            if (this.constantExpressionRequired && builder.deferred) {
                this.addCompileTimeError(offsetForToken(token),`'${name}' can't be used in a constant expression because it's ` + "marked as 'deferred' which means it isn't available until " + "loaded.\n" + "You might try moving the constant to the deferred library, " + "or removing 'deferred' from the import.");
            }
            return builder;
        }else {
            if (builder.hasProblem && isNot(builder, lib8.AccessErrorBuilder)) return builder;
            let setter : lib19.Builder;
            if (builder.isSetter) {
                setter = builder;
            }else if (builder.isGetter) {
                setter = scope.lookupSetter(name,offsetForToken(token),this.uri);
            }else if (builder.isField && !builder.isFinal) {
                setter = builder;
            }
            let accessor : lib4.StaticAccessor = new lib4.StaticAccessor.fromBuilder(this,builder,token,setter);
            if (this.constantExpressionRequired) {
                let readTarget : any = accessor.readTarget;
                if (!(is(readTarget, any) && readTarget.isConst || is(readTarget, any))) {
                    this.addCompileTimeError(offsetForToken(token),"Not a constant expression.");
                }
            }
            return accessor;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleQualified(period : lib16.Token) : void {
        this.debugEvent("Qualified");
        let name : Identifier = this.pop();
        let receiver = this.pop();
        this.push(new core.DartList.literal(receiver,name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginLiteralString(token : lib16.Token) : void {
        this.debugEvent("beginLiteralString");
        this.push(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleStringPart(token : lib16.Token) : void {
        this.debugEvent("StringPart");
        this.push(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLiteralString(interpolationCount : number,endToken : lib16.Token) : void {
        this.debugEvent("endLiteralString");
        if (interpolationCount == 0) {
            let token : lib16.Token = this.pop();
            let value : string = lib28.unescapeString(token.lexeme);
            this.push(this.astFactory.stringLiteral(value,token));
        }else {
            let parts : core.DartList<any> = this.popList(1 + interpolationCount * 2);
            let first : lib16.Token = parts.first;
            let last : lib16.Token = parts.last;
            let quote : lib28.Quote = lib28.analyzeQuote(first.lexeme);
            let expressions : core.DartList<any> = new core.DartList.literal<any>();
            if (new core.DartString(first.lexeme).length > 1) {
                let value : string = lib28.unescapeFirstStringPart(first.lexeme,quote);
                expressions.add(this.astFactory.stringLiteral(value,first));
            }
            for(let i : number = 1; i < parts.length - 1; i++){
                let part = parts[i];
                if (is(part, lib16.Token)) {
                    if (new core.DartString(part.lexeme).length != 0) {
                        let value : string = lib28.unescape(part.lexeme,quote);
                        expressions.add(this.astFactory.stringLiteral(value,part));
                    }
                }else {
                    expressions.add(this.toValue(part));
                }
            }
            if (new core.DartString(last.lexeme).length > 1) {
                let value : string = lib28.unescapeLastStringPart(last.lexeme,quote);
                expressions.add(this.astFactory.stringLiteral(value,last));
            }
            this.push(this.astFactory.stringConcatenation(expressions,endToken));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleScript(token : lib16.Token) : void {
        this.debugEvent("Script");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleStringJuxtaposition(literalCount : number) : void {
        this.debugEvent("StringJuxtaposition");
        let parts : core.DartList<any> = this.popListForValue(literalCount);
        let expressions : core.DartList<any>;
        for(let i : number = 0; i < parts.length; i++){
            let part : any = parts[i];
            if (is(part, any)) {
                if (expressions == null) {
                    expressions = parts.sublist(0,i);
                }
                expressions.addAll(part.expressions);
            }else {
                if (expressions != null) {
                    expressions.add(part);
                }
            }
        }
        this.push(this.astFactory.stringConcatenation((expressions || parts),null));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleLiteralInt(token : lib16.Token) : void {
        this.debugEvent("LiteralInt");
        this.push(this.astFactory.intLiteral(core.DartInt.parse(token.lexeme),token));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEmptyFunctionBody(semicolon : lib16.Token) : void {
        this.debugEvent("ExpressionFunctionBody");
        this.endBlockFunctionBody(0,null,semicolon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleExpressionFunctionBody(arrowToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("ExpressionFunctionBody");
        this.endReturnStatement(true,arrowToken.next,endToken);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endReturnStatement(hasExpression : boolean,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("ReturnStatement");
        let expression : any = hasExpression ? this.popForValue() : null;
        if (expression != null && this.inConstructor) {
            this.push(this.buildCompileTimeErrorStatement("Can't return from a constructor.",beginToken.charOffset));
        }else {
            this.push(((_) : any =>  {
                {
                    _.fileOffset = beginToken.charOffset;
                    return _;
                }
            })(new bare.createInstance(any,null,expression)));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginThenStatement(token : lib16.Token) : void {
        let condition : any = this.popForValue();
        this.typePromoter.enterThen(condition);
        this.push(condition);
        super.beginThenStatement(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endThenStatement(token : lib16.Token) : void {
        this.typePromoter.enterElse();
        super.endThenStatement(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endIfStatement(ifToken : lib16.Token,elseToken : lib16.Token) : void {
        let elsePart : any = this.popStatementIfNotNull(elseToken);
        let thenPart : any = this.popStatement();
        let condition : any = this.popForValue();
        this.typePromoter.exitConditional();
        this.push(this.astFactory.ifStatement(condition,thenPart,elsePart));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endVariableInitializer(assignmentOperator : lib16.Token) : void {
        this.debugEvent("VariableInitializer");
        /* TODO (AssertStatementImpl) : assert (assignmentOperator.stringValue == "="); */;
        this.pushNewLocalVariable(this.popForValue(),{
            equalsToken : assignmentOperator});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoVariableInitializer(token : lib16.Token) : void {
        this.debugEvent("NoVariableInitializer");
        this.pushNewLocalVariable(null);
    }
    pushNewLocalVariable(initializer : any,_namedArguments? : {equalsToken? : lib16.Token}) : void {
        let {equalsToken} = Object.assign({
        }, _namedArguments );
        let identifier : Identifier = this.pop();
        /* TODO (AssertStatementImpl) : assert (currentLocalVariableModifiers != -1); */;
        let isConst : boolean = (this.currentLocalVariableModifiers & lib29.properties.constMask) != 0;
        let isFinal : boolean = (this.currentLocalVariableModifiers & lib29.properties.finalMask) != 0;
        /* TODO (AssertStatementImpl) : assert (isConst == constantExpressionRequired); */;
        this.push(this.astFactory.variableDeclaration(identifier.name,identifier.token,this.functionNestingLevel,{
            initializer : initializer,type : this.currentLocalVariableType,isFinal : isFinal,isConst : isConst,equalsToken : equalsToken}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFieldInitializer(assignmentOperator : lib16.Token,token : lib16.Token) : void {
        this.debugEvent("FieldInitializer");
        /* TODO (AssertStatementImpl) : assert (assignmentOperator.stringValue == "="); */;
        this.push(this.popForValue());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFieldInitializer(token : lib16.Token) : void {
        this.debugEvent("NoFieldInitializer");
        if (this.constantExpressionRequired) {
            this.addCompileTimeError(token.charOffset,"const field must have initializer.");
            this.push(this.astFactory.nullLiteral(token));
        }else {
            this.push(lib18.NullValue.FieldInitializer);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endInitializedIdentifier(nameToken : lib16.Token) : void {
        this.debugEvent("InitializedIdentifier");
        let variable : any = this.pop();
        variable.fileOffset = nameToken.charOffset;
        this.push(variable);
        op(Op.INDEX_ASSIGN,this.scope,variable.name,new lib30.KernelVariableBuilder(variable,((this.member || this.classBuilder) || this.library),this.uri));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginVariablesDeclaration(token : lib16.Token) : void {
        this.debugEvent("beginVariablesDeclaration");
        let type : any = this.pop();
        let modifiers : number = lib29.Modifier.validate(this.pop());
        super.push(this.currentLocalVariableModifiers);
        super.push((this.currentLocalVariableType || lib18.NullValue.Type));
        this.currentLocalVariableType = type;
        this.currentLocalVariableModifiers = modifiers;
        super.push(this.constantExpressionRequired);
        this.constantExpressionRequired = (modifiers & lib29.properties.constMask) != 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endVariablesDeclaration(count : number,endToken : lib16.Token) : void {
        this.debugEvent("VariablesDeclaration");
        let variables : core.DartList<any> = this.popList(count);
        this.constantExpressionRequired = this.pop();
        this.currentLocalVariableType = this.pop();
        this.currentLocalVariableModifiers = this.pop();
        this.pop();
        if (variables.length != 1) {
            this.push(variables);
        }else {
            this.push(variables.single);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endBlock(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("Block");
        let block : any = this.popBlock(count,beginToken);
        this.exitLocalScope();
        this.push(block);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleAssignmentExpression(token : lib16.Token) : void {
        this.debugEvent("AssignmentExpression");
        let value : any = this.popForValue();
        let accessor = this.pop();
        if (is(accessor, lib12.TypeDeclarationBuilder<any,any>)) {
            this.push(lib22.wrapInvalid(this.astFactory.typeLiteral(accessor.buildTypesWithBuiltArguments(this.library,null))));
        }else if (isNot(accessor, lib4.FastaAccessor)) {
            this.push(this.buildCompileTimeError("Can't assign to this.",token.charOffset));
        }else {
            this.push(new DelayedAssignment(this,token,accessor,value,token.stringValue));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enterLoop(charOffset : number) : void {
        if (is(this.peek(), LabelTarget)) {
            let target : LabelTarget = this.peek();
            this.enterBreakTarget(charOffset,target.breakTarget);
            this.enterContinueTarget(charOffset,target.continueTarget);
        }else {
            this.enterBreakTarget(charOffset);
            this.enterContinueTarget(charOffset);
        }
    }
    exitLoopOrSwitch(statement : any) : void {
        if (this.compileTimeErrorInLoopOrSwitch != null) {
            this.push(this.compileTimeErrorInLoopOrSwitch);
            this.compileTimeErrorInLoopOrSwitch = null;
        }else {
            this.push(statement);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endForStatement(forKeyword : lib16.Token,leftSeparator : lib16.Token,updateExpressionCount : number,endToken : lib16.Token) : void {
        this.debugEvent("ForStatement");
        let body : any = this.popStatement();
        let updates : core.DartList<any> = this.popListForEffect(updateExpressionCount);
        let conditionStatement : any = this.popStatement();
        let condition : any = null;
        if (is(conditionStatement, any)) {
            condition = conditionStatement.expression;
        }else {
            /* TODO (AssertStatementImpl) : assert (conditionStatement is EmptyStatement); */;
        }
        let variables : core.DartList<any> = new core.DartList.literal<any>();
        let variableOrExpression : any = this.pop();
        let begin : any;
        if (is(variableOrExpression, lib4.FastaAccessor)) {
            variableOrExpression = variableOrExpression.buildForEffect();
        }
        if (is(variableOrExpression, any)) {
            variables.add(variableOrExpression);
        }else if (is(variableOrExpression, core.DartList<any>)) {
            let vars : core.DartIterable<any> = variableOrExpression;
            variables.addAll(vars);
        }else if (op(Op.EQUALS,variableOrExpression,null)) {
        }else if (is(variableOrExpression, any)) {
            begin = this.astFactory.expressionStatement(variableOrExpression);
        }else {
            return lib15.internalError(`Unhandled: ${variableOrExpression.runtimeType}`);
        }
        this.exitLocalScope();
        let continueTarget : JumpTarget = this.exitContinueTarget();
        let breakTarget : JumpTarget = this.exitBreakTarget();
        if (continueTarget.hasUsers) {
            body = new bare.createInstance(any,null,body);
            continueTarget.resolveContinues(body);
        }
        let result : any = new bare.createInstance(any,null,variables,condition,updates,body);
        if (begin != null) {
            result = new bare.createInstance(any,null,new core.DartList.literal<any>(begin,result));
        }
        if (breakTarget.hasUsers) {
            result = new bare.createInstance(any,null,result);
            breakTarget.resolveBreaks(result);
        }
        this.exitLoopOrSwitch(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endAwaitExpression(keyword : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("AwaitExpression");
        this.push(this.astFactory.awaitExpression(keyword,this.popForValue()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleAsyncModifier(asyncToken : lib16.Token,starToken : lib16.Token) : void {
        this.debugEvent("AsyncModifier");
        this.push(asyncMarkerFromTokens(asyncToken,starToken));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleLiteralList(count : number,beginToken : lib16.Token,constKeyword : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("LiteralList");
        let expressions : core.DartList<any> = this.popListForValue(count);
        let typeArguments : core.DartList<any> = this.pop();
        let typeArgument : any;
        if (typeArguments != null) {
            typeArgument = typeArguments.first;
            if (typeArguments.length > 1) {
                typeArgument = null;
                this.warningNotError("Too many type arguments on List literal.",beginToken.charOffset);
            }
        }
        this.push(this.astFactory.listLiteral(expressions,typeArgument,constKeyword != null,(constKeyword || beginToken)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleLiteralBool(token : lib16.Token) : void {
        this.debugEvent("LiteralBool");
        let value : boolean = lib26.optional("true",token);
        /* TODO (AssertStatementImpl) : assert (value || optional("false", token)); */;
        this.push(this.astFactory.boolLiteral(value,token));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleLiteralDouble(token : lib16.Token) : void {
        this.debugEvent("LiteralDouble");
        this.push(this.astFactory.doubleLiteral(core.DartDouble.parse(token.lexeme),token));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleLiteralNull(token : lib16.Token) : void {
        this.debugEvent("LiteralNull");
        this.push(this.astFactory.nullLiteral(token));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleLiteralMap(count : number,beginToken : lib16.Token,constKeyword : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("LiteralMap");
        let entries : core.DartList<any> = (this.popList(count) || new core.DartList.literal<any>());
        let typeArguments : core.DartList<any> = this.pop();
        let keyType : any = new bare.createInstance(any,null);
        let valueType : any = new bare.createInstance(any,null);
        if (typeArguments != null) {
            if (typeArguments.length != 2) {
                keyType = new bare.createInstance(any,null);
                valueType = new bare.createInstance(any,null);
                this.warningNotError("Map literal requires two type arguments.",beginToken.charOffset);
            }else {
                keyType = typeArguments[0];
                valueType = typeArguments[1];
            }
        }
        this.push(this.astFactory.mapLiteral(beginToken,constKeyword,entries,{
            keyType : keyType,valueType : valueType}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLiteralMapEntry(colon : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("LiteralMapEntry");
        let value : any = this.popForValue();
        let key : any = this.popForValue();
        this.push(new bare.createInstance(any,null,key,value));
    }
    symbolPartToString(name : any) : string {
        if (is(name, Identifier)) {
            return name.name;
        }else if (is(name, Operator)) {
            return name.name;
        }else {
            return lib15.internalError(`Unhandled: ${name.runtimeType}`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLiteralSymbol(hashToken : lib16.Token,identifierCount : number) : void {
        this.debugEvent("LiteralSymbol");
        let value : string;
        if (identifierCount == 1) {
            value = this.symbolPartToString(this.pop());
        }else {
            let parts : core.DartList<any> = this.popList(identifierCount);
            value = this.symbolPartToString(parts.first);
            for(let i : number = 1; i < parts.length; i++){
                value += `.${this.symbolPartToString(parts[i])}`;
            }
        }
        this.push(this.astFactory.symbolLiteral(hashToken,value));
    }
    kernelTypeFromString(name : string,arguments : core.DartList<any>,charOffset : number) : any {
        let builder : lib19.Builder = this.scope.lookup(name,charOffset,this.uri);
        if (op(Op.EQUALS,builder,null)) {
            this.warning(`Type not found: '${name}'.`,charOffset);
            return new bare.createInstance(any,null);
        }else {
            return this.kernelTypeFromBuilder(builder,arguments,charOffset);
        }
    }
    kernelTypeFromBuilder(builder : lib19.Builder,arguments : core.DartList<any>,charOffset : number) : any {
        if (this.constantExpressionRequired && is(builder, lib11.TypeVariableBuilder<any,any>)) {
            this.addCompileTimeError(charOffset,"Not a constant expression.");
        }
        if (is(builder, lib12.TypeDeclarationBuilder<any,any>)) {
            return builder.buildTypesWithBuiltArguments(this.library,arguments);
        }else if (builder.hasProblem) {
            let problem : lib8.ProblemBuilder = builder;
            this.addCompileTimeError(charOffset,problem.message);
        }else {
            this.warningNotError(`Not a type: '${builder.fullNameForErrors}'.`,charOffset);
        }
        return new bare.createInstance(any,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleType(beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("Type");
        let arguments : core.DartList<any> = this.pop();
        let name : any = this.pop();
        if (is(name, core.DartList<any>)) {
            if (name.length != 2) {
                lib15.internalError(`Unexpected: ${name}.length`);
            }
            let prefix = name[0];
            if (is(prefix, Identifier)) {
                prefix = prefix.name;
            }
            let suffix = name[1];
            if (is(suffix, Identifier)) {
                suffix = suffix.name;
            }
            let builder : lib19.Builder;
            if (is(prefix, lib19.Builder)) {
                builder = prefix;
            }else {
                builder = this.scope.lookup(prefix,beginToken.charOffset,this.uri);
            }
            if (is(builder, lib14.PrefixBuilder)) {
                name = this.scopeLookup(builder.exports,suffix,beginToken,{
                    isQualified : true,prefix : builder});
            }else {
                this.push(new bare.createInstance(any,null));
                this.addCompileTimeError(beginToken.charOffset,`Can't be used as a type: '${debugName(prefix,suffix)}'.`);
                return;
            }
        }
        if (is(name, Identifier)) {
            name = name.name;
        }
        if (is(name, lib4.FastaAccessor)) {
            this.warningNotError(`'${beginToken.lexeme}' isn't a type.`,beginToken.charOffset);
            this.push(new bare.createInstance(any,null));
        }else if (is(name, lib11.TypeVariableBuilder<any,any>) && !this.member.isConstructor) {
            if (this.constantExpressionRequired) {
                this.addCompileTimeError(beginToken.charOffset,"Not a constant expression.");
            }
            this.push(name.buildTypesWithBuiltArguments(this.library,arguments));
        }else if (is(name, lib12.TypeDeclarationBuilder<any,any>)) {
            this.push(name.buildTypesWithBuiltArguments(this.library,arguments));
        }else if (is(name, lib31.TypeBuilder)) {
            this.push(name.build(this.library));
        }else if (is(name, lib19.Builder)) {
            this.push(this.kernelTypeFromBuilder(name,arguments,beginToken.charOffset));
        }else if (is(name, "string")) {
            this.push(this.kernelTypeFromString(name,arguments,beginToken.charOffset));
        }else {
            lib15.internalError(`Unhandled: '${name.runtimeType}'.`);
        }
        if (is(this.peek(), any)) {
            let type : any = this.peek();
            if (!this.isInstanceContext && is(type.parameter.parent, any)) {
                this.pop();
                this.warning("Type variables can only be used in instance methods.",beginToken.charOffset);
                this.push(new bare.createInstance(any,null));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFunctionType(functionToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("FunctionType");
        let formals : FormalParameters = this.pop();
        this.ignore(lib17.Unhandled.TypeVariables);
        let returnType : any = this.pop();
        this.push(formals.toFunctionType(returnType));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleVoidKeyword(token : lib16.Token) : void {
        this.debugEvent("VoidKeyword");
        this.push(new bare.createInstance(any,null));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleAsOperator(operator : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("AsOperator");
        let type : any = this.pop();
        let expression : any = this.popForValue();
        this.push(this.astFactory.asExpression(expression,operator,type));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleIsOperator(operator : lib16.Token,not : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("IsOperator");
        let type : any = this.pop();
        let operand : any = this.popForValue();
        let isInverted : boolean = not != null;
        let isExpression : any = this.astFactory.isExpression(operand,type,operator,isInverted);
        if (is(operand, any)) {
            this.typePromoter.handleIsCheck(isExpression,isInverted,operand.variable,type,this.functionNestingLevel);
        }
        this.push(isExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleConditionalExpression(question : lib16.Token,colon : lib16.Token) : void {
        this.debugEvent("ConditionalExpression");
        let elseExpression : any = this.popForValue();
        let thenExpression : any = this.popForValue();
        let condition : any = this.popForValue();
        this.push(this.astFactory.conditionalExpression(condition,thenExpression,elseExpression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endThrowExpression(throwToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("ThrowExpression");
        let expression : any = this.popForValue();
        if (this.constantExpressionRequired) {
            this.push(this.buildCompileTimeError("Not a constant expression.",throwToken.charOffset));
        }else {
            this.push(this.astFactory.throwExpression(throwToken,expression));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFormalParameter(thisKeyword : lib16.Token,nameToken : lib16.Token,kind : lib26.FormalParameterType,memberKind : lib26.MemberKind) : void {
        this.debugEvent("FormalParameter");
        if (thisKeyword != null) {
            if (!this.inConstructor) {
                this.addCompileTimeError(thisKeyword.charOffset,"'this' parameters can only be used on constructors.");
                thisKeyword = null;
            }
        }
        let name : Identifier = this.pop();
        let type : any = this.pop();
        let modifiers : number = lib29.Modifier.validate(this.pop());
        if (this.inCatchClause) {
            modifiers |= lib29.properties.finalMask;
        }
        let isConst : boolean = (modifiers & lib29.properties.constMask) != 0;
        let isFinal : boolean = (modifiers & lib29.properties.finalMask) != 0;
        this.ignore(lib17.Unhandled.Metadata);
        let variable : any;
        if (!this.inCatchClause && this.functionNestingLevel == 0 && memberKind != lib26.MemberKind.GeneralizedFunctionType) {
            let builder : any = this.formalParameterScope.lookup(name.name,offsetForToken(name.token),this.uri);
            if (op(Op.EQUALS,builder,null)) {
                if (op(Op.EQUALS,thisKeyword,null)) {
                    lib15.internalError(`Internal error: formal missing for '${name.name}'`);
                }else {
                    this.addCompileTimeError(thisKeyword.charOffset,`'${name.name}' isn't a field in this class.`);
                    thisKeyword = null;
                }
            }else if (op(Op.EQUALS,thisKeyword,null)) {
                variable = builder.build(this.library);
                variable.initializer = name.initializer;
            }else if (builder.isField && op(Op.EQUALS,builder.parent,this.classBuilder)) {
                let field : lib20.FieldBuilder<any> = builder;
                if (type != null) {
                    this.nit(`Ignoring type on 'this' parameter '${name.name}'.`,thisKeyword.charOffset);
                }
                type = field.target.type;
                variable = this.astFactory.variableDeclaration(name.name,name.token,this.functionNestingLevel,{
                    type : type,initializer : name.initializer,isFinal : isFinal,isConst : isConst});
            }else {
                this.addCompileTimeError(offsetForToken(name.token),`'${name.name}' isn't a field in this class.`);
            }
        }
        variable = ( variable ) || ( this.astFactory.variableDeclaration(((t)=>(!!t)?t.name:null)(name),((t)=>(!!t)?t.token:null)(name),this.functionNestingLevel,{
            type : type,initializer : ((t)=>(!!t)?t.initializer:null)(name),isFinal : isFinal,isConst : isConst}) );
        this.push(variable);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endOptionalFormalParameters(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("OptionalFormalParameters");
        let kind : lib26.FormalParameterType = lib26.optional("{",beginToken) ? lib26.FormalParameterType.NAMED : lib26.FormalParameterType.POSITIONAL;
        this.push(new OptionalFormals(kind,(this.popList(count) || new core.DartList.literal())));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginFunctionTypedFormalParameter(token : lib16.Token) : void {
        this.debugEvent("beginFunctionTypedFormalParameter");
        this.functionNestingLevel++;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionTypedFormalParameter(thisKeyword : lib16.Token,kind : lib26.FormalParameterType) : void {
        this.debugEvent("FunctionTypedFormalParameter");
        if (this.inCatchClause || this.functionNestingLevel != 0) {
            this.exitLocalScope();
        }
        let formals : FormalParameters = this.pop();
        this.ignore(lib17.Unhandled.TypeVariables);
        let name : Identifier = this.pop();
        let returnType : any = this.pop();
        this.push(formals.toFunctionType(returnType));
        this.push(name);
        this.functionNestingLevel--;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleValuedFormalParameter(equals : lib16.Token,token : lib16.Token) : void {
        this.debugEvent("ValuedFormalParameter");
        let initializer : any = this.popForValue();
        let name : Identifier = this.pop();
        this.push(new InitializedIdentifier(name.token,initializer));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFormalParameterWithoutValue(token : lib16.Token) : void {
        this.debugEvent("FormalParameterWithoutValue");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFormalParameters(count : number,beginToken : lib16.Token,endToken : lib16.Token,kind : lib26.MemberKind) : void {
        this.debugEvent("FormalParameters");
        let optional : OptionalFormals;
        if (count > 0 && is(this.peek(), OptionalFormals)) {
            optional = this.pop();
            count--;
        }
        let formals : FormalParameters = new FormalParameters((this.popList(count) || new core.DartList.literal<any>()),optional,beginToken.charOffset);
        this.push(formals);
        if ((this.inCatchClause || this.functionNestingLevel != 0) && kind != lib26.MemberKind.GeneralizedFunctionType) {
            this.enterLocalScope(formals.computeFormalParameterScope(this.scope,((this.member || this.classBuilder) || this.library)));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginCatchClause(token : lib16.Token) : void {
        this.debugEvent("beginCatchClause");
        this.inCatchClause = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCatchClause(token : lib16.Token) : void {
        this.debugEvent("CatchClause");
        this.inCatchClause = false;
        this.push(this.inCatchBlock);
        this.inCatchBlock = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleCatchBlock(onKeyword : lib16.Token,catchKeyword : lib16.Token) : void {
        this.debugEvent("CatchBlock");
        let body : any = this.pop();
        this.inCatchBlock = this.pop();
        if (catchKeyword != null) {
            this.exitLocalScope();
        }
        let catchParameters : FormalParameters = this.popIfNotNull(catchKeyword);
        let type : any = (this.popIfNotNull(onKeyword) || new bare.createInstance(any,null));
        let exception : any;
        let stackTrace : any;
        if (catchParameters != null) {
            if (catchParameters.required.length > 0) {
                exception = catchParameters.required[0];
            }
            if (catchParameters.required.length > 1) {
                stackTrace = catchParameters.required[1];
            }
            if (catchParameters.required.length > 2 || catchParameters.optional != null) {
                body = new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null)));
                this.compileTimeErrorInTry = ( this.compileTimeErrorInTry ) || ( this.buildCompileTimeErrorStatement("Invalid catch arguments.",catchKeyword.next.charOffset) );
            }
        }
        this.push(new bare.createInstance(any,null,exception,body,{
            guard : type,stackTrace : stackTrace}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTryStatement(catchCount : number,tryKeyword : lib16.Token,finallyKeyword : lib16.Token) : void {
        let finallyBlock : any = this.popStatementIfNotNull(finallyKeyword);
        let catches : core.DartList<any> = this.popList(catchCount);
        let tryBlock : any = this.popStatement();
        if (op(Op.EQUALS,this.compileTimeErrorInTry,null)) {
            if (catches != null) {
                tryBlock = new bare.createInstance(any,null,tryBlock,catches);
            }
            if (finallyBlock != null) {
                tryBlock = new bare.createInstance(any,null,tryBlock,finallyBlock);
            }
            this.push(tryBlock);
        }else {
            this.push(this.compileTimeErrorInTry);
            this.compileTimeErrorInTry = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoExpression(token : lib16.Token) : void {
        this.debugEvent("NoExpression");
        this.push(lib18.NullValue.Expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleIndexedExpression(openCurlyBracket : lib16.Token,closeCurlyBracket : lib16.Token) : void {
        this.debugEvent("IndexedExpression");
        let index : any = this.popForValue();
        let receiver = this.pop();
        if (is(receiver, lib4.ThisAccessor) && receiver.isSuper) {
            this.push(new lib4.SuperIndexAccessor(this,receiver.token,index,this.lookupSuperMember(lib22.properties.indexGetName),this.lookupSuperMember(lib22.properties.indexSetName)));
        }else {
            this.push(lib4.IndexAccessor.make(this,openCurlyBracket,this.toValue(receiver),index,null,null));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnaryPrefixExpression(token : lib16.Token) : void {
        this.debugEvent("UnaryPrefixExpression");
        let receiver = this.pop();
        if (lib26.optional("!",token)) {
            this.push(this.astFactory.not(token,this.toValue(receiver)));
        }else {
            let operator : string = token.stringValue;
            if (lib26.optional("-",token)) {
                operator = "unary-";
            }
            if (is(receiver, lib4.ThisAccessor) && receiver.isSuper) {
                this.push(this.toSuperMethodInvocation(lib4.buildMethodInvocation(this.astFactory,this.astFactory.thisExpression(receiver.token),new bare.createInstance(any,null,operator),new bare.createInstance(any,null),token.charOffset)));
            }else {
                this.push(lib4.buildMethodInvocation(this.astFactory,this.toValue(receiver),new bare.createInstance(any,null,operator),new bare.createInstance(any,null),token.charOffset));
            }
        }
    }
    incrementOperator(token : lib16.Token) : any {
        if (lib26.optional("++",token)) return lib24.properties.plusName;
        if (lib26.optional("--",token)) return lib24.properties.minusName;
        return lib15.internalError(`Unknown increment operator: ${token.lexeme}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnaryPrefixAssignmentExpression(token : lib16.Token) : void {
        this.debugEvent("UnaryPrefixAssignmentExpression");
        let accessor = this.pop();
        if (is(accessor, lib4.FastaAccessor)) {
            this.push(accessor.buildPrefixIncrement(this.incrementOperator(token),{
                offset : token.charOffset}));
        }else {
            this.push(lib22.wrapInvalid(this.toValue(accessor)));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnaryPostfixAssignmentExpression(token : lib16.Token) : void {
        this.debugEvent("UnaryPostfixAssignmentExpression");
        let accessor = this.pop();
        if (is(accessor, lib4.FastaAccessor)) {
            this.push(new DelayedPostfixIncrement(this,token,accessor,this.incrementOperator(token),null));
        }else {
            this.push(lib22.wrapInvalid(this.toValue(accessor)));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstructorReference(start : lib16.Token,periodBeforeName : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("ConstructorReference");
        let suffix : Identifier = this.popIfNotNull(periodBeforeName);
        let identifier : Identifier;
        let typeArguments : core.DartList<any> = this.pop();
        let type : any = this.pop();
        if (is(type, core.DartList<any>)) {
            let prefix = type[0];
            identifier = type[1];
            if (is(prefix, lib14.PrefixBuilder)) {
                type = this.scopeLookup(prefix.exports,identifier.name,start,{
                    isQualified : true,prefix : prefix});
                identifier = null;
            }else if (is(prefix, lib32.ClassBuilder<any,any>)) {
                type = prefix;
            }else {
                type = new Identifier(start);
            }
        }
        let name : string;
        if (identifier != null && suffix != null) {
            name = `${identifier.name}.${suffix.name}`;
        }else if (identifier != null) {
            name = identifier.name;
        }else if (suffix != null) {
            name = suffix.name;
        }else {
            name = "";
        }
        this.push(type);
        this.push((typeArguments || lib18.NullValue.TypeArguments));
        this.push(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildStaticInvocation(target : any,arguments : any,_namedArguments? : {isConst? : boolean,charOffset? : number}) : any {
        let {isConst,charOffset} = Object.assign({
            "isConst" : false,
            "charOffset" : -1}, _namedArguments );
        let typeParameters : core.DartList<any> = target.function.typeParameters;
        if (is(target, any)) {
            /* TODO (AssertStatementImpl) : assert (!target.enclosingClass.isAbstract); */;
            typeParameters = target.enclosingClass.typeParameters;
        }
        if (!this.checkArguments(target.function,arguments,typeParameters)) {
            return this.throwNoSuchMethodError(target.name.name,arguments,charOffset);
        }
        if (is(target, any)) {
            return ((_) : any =>  {
                {
                    _.fileOffset = charOffset;
                    return _;
                }
            })(this.astFactory.constructorInvocation(target,arguments,{
                isConst : isConst}));
        }else {
            return ((_) : any =>  {
                {
                    _.fileOffset = charOffset;
                    return _;
                }
            })(this.astFactory.staticInvocation(target,arguments,{
                isConst : isConst}));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkArguments(function : any,arguments : any,typeParameters : core.DartList<any>) : boolean {
        if (op(Op.LT,arguments.positional.length,function.requiredParameterCount) || op(Op.GT,arguments.positional.length,function.positionalParameters.length)) {
            return false;
        }
        let names : core.DartMap<string,any>;
        if (function.namedParameters.isNotEmpty) {
            names = new core.DartMap.literal([
            ]);
            for(let parameter of function.namedParameters) {
                names.set(parameter.name,parameter);
            }
        }
        if (arguments.named.isNotEmpty) {
            if (names == null) return false;
            for(let argument of arguments.named) {
                let parameter : any = names.remove(argument.name);
                if (op(Op.EQUALS,parameter,null)) {
                    return false;
                }
            }
        }
        if (typeParameters.length != arguments.types.length) {
            arguments.types.clear();
            for(let i : number = 0; i < typeParameters.length; i++){
                arguments.types.add(new bare.createInstance(any,null));
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginNewExpression(token : lib16.Token) : void {
        this.debugEvent("beginNewExpression");
        super.push(this.constantExpressionRequired);
        if (this.constantExpressionRequired) {
            this.addCompileTimeError(token.charOffset,"Not a constant expression.");
        }
        this.constantExpressionRequired = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginConstExpression(token : lib16.Token) : void {
        this.debugEvent("beginConstExpression");
        super.push(this.constantExpressionRequired);
        this.constantExpressionRequired = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginConstLiteral(token : lib16.Token) : void {
        this.debugEvent("beginConstLiteral");
        super.push(this.constantExpressionRequired);
        this.constantExpressionRequired = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstLiteral(token : lib16.Token) : void {
        this.debugEvent("endConstLiteral");
        let literal = this.pop();
        this.constantExpressionRequired = this.pop();
        this.push(literal);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endNewExpression(token : lib16.Token) : void {
        this.debugEvent("NewExpression");
        let nameToken : lib16.Token = token.next;
        let arguments : any = this.pop();
        let name : string = this.pop();
        let typeArguments : core.DartList<any> = this.pop();
        let type = this.pop();
        let savedConstantExpressionRequired : boolean = this.pop();
        (() =>  {
            if (op(Op.EQUALS,arguments,null)) {
                this.push(this.buildCompileTimeError("No arguments.",nameToken.charOffset));
                return;
            }
            if (typeArguments != null) {
                /* TODO (AssertStatementImpl) : assert (arguments.types.isEmpty); */;
                this.astFactory.setExplicitArgumentTypes(arguments,typeArguments);
            }
            let errorName : string;
            if (is(type, lib32.ClassBuilder<any,any>)) {
                let b : lib19.Builder = type.findConstructorOrFactory(name,token.charOffset,this.uri);
                let target : any;
                if (op(Op.EQUALS,b,null)) {
                }else if (b.isConstructor) {
                    if (type.isAbstract) {
                        this.push(this.evaluateArgumentsBefore(arguments,this.buildAbstractClassInstantiationError(type.name,nameToken.charOffset)));
                        return;
                    }else {
                        target = b.target;
                    }
                }else if (b.isFactory) {
                    target = lib33.getRedirectionTarget(b.target);
                    if (op(Op.EQUALS,target,null)) {
                        this.push(this.buildCompileTimeError(`Cyclic definition of factory '${name}'.`,nameToken.charOffset));
                        return;
                    }
                }
                if (is(target, any) || (is(target, any) && op(Op.EQUALS,target.kind,ProcedureKind.Factory))) {
                    this.push(this.buildStaticInvocation(target,arguments,{
                        isConst : lib26.optional("const",token),charOffset : nameToken.charOffset}));
                    return;
                }else {
                    errorName = debugName(type.name,name);
                }
            }else {
                errorName = debugName(getNodeName(type),name);
            }
            errorName = ( errorName ) || ( name );
            this.push(this.throwNoSuchMethodError(errorName,arguments,nameToken.charOffset));
        })();
        this.constantExpressionRequired = savedConstantExpressionRequired;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstExpression(token : lib16.Token) : void {
        this.debugEvent("endConstExpression");
        this.endNewExpression(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeArguments(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("TypeArguments");
        this.push(this.popList(count));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleThisExpression(token : lib16.Token,context : lib27.IdentifierContext) : void {
        this.debugEvent("ThisExpression");
        if (context.isScopeReference && this.isInstanceContext) {
            this.push(new lib4.ThisAccessor(this,token,this.inInitializer));
        }else {
            this.push(new lib4.IncompleteError(this,token,"Expected identifier, but got 'this'."));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleSuperExpression(token : lib16.Token,context : lib27.IdentifierContext) : void {
        this.debugEvent("SuperExpression");
        if (context.isScopeReference && this.isInstanceContext) {
            let member : any = this.member.target;
            member.transformerFlags |= TransformerFlag.superCalls;
            this.push(new lib4.ThisAccessor(this,token,this.inInitializer,{
                isSuper : true}));
        }else {
            this.push(new lib4.IncompleteError(this,token,"Expected identifier, but got 'super'."));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNamedArgument(colon : lib16.Token) : void {
        this.debugEvent("NamedArgument");
        let value : any = this.popForValue();
        let identifier : Identifier = this.pop();
        this.push(new bare.createInstance(any,null,identifier.name,value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionName(beginToken : lib16.Token,token : lib16.Token) : void {
        this.debugEvent("FunctionName");
        let name : Identifier = this.pop();
        let variable : any = this.astFactory.variableDeclaration(name.name,name.token,this.functionNestingLevel,{
            isFinal : true,isLocalFunction : true});
        this.push(((_) : any =>  {
            {
                _.fileOffset = beginToken.charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,variable,new bare.createInstance(any,null,new bare.createInstance(any,null)))));
        op(Op.INDEX_ASSIGN,this.scope,variable.name,new lib30.KernelVariableBuilder(variable,((this.member || this.classBuilder) || this.library),this.uri));
        this.enterLocalScope();
    }
    enterFunction() : void {
        this.debugEvent("enterFunction");
        this.functionNestingLevel++;
        this.push((this.switchScope || lib18.NullValue.SwitchScope));
        this.switchScope = null;
        this.push(this.inCatchBlock);
        this.inCatchBlock = false;
    }
    exitFunction() : void {
        this.debugEvent("exitFunction");
        this.functionNestingLevel--;
        this.inCatchBlock = this.pop();
        this.switchScope = this.pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginFunction(token : lib16.Token) : void {
        this.debugEvent("beginFunction");
        this.enterFunction();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginUnnamedFunction(token : lib16.Token) : void {
        this.debugEvent("beginUnnamedFunction");
        this.enterFunction();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunction(getOrSet : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("Function");
        let body : any = this.popStatement();
        let asyncModifier : any = this.pop();
        if (this.functionNestingLevel != 0) {
            this.exitLocalScope();
        }
        let formals : FormalParameters = this.pop();
        let typeParameters : core.DartList<any> = this.pop();
        this.push(formals.addToFunction(((_) : any =>  {
            {
                _.fileOffset = formals.charOffset;
                _.fileEndOffset = endToken.charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,body,{
            typeParameters : typeParameters,asyncMarker : asyncModifier}))));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionDeclaration(token : lib16.Token) : void {
        this.debugEvent("FunctionDeclaration");
        let function : any = this.pop();
        this.exitLocalScope();
        let declaration : any = this.pop();
        function.returnType = (this.pop() || new bare.createInstance(any,null));
        declaration.variable.type = function.functionType;
        this.pop();
        this.exitFunction();
        declaration.function = function;
        function.parent = declaration;
        this.push(declaration);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endUnnamedFunction(beginToken : lib16.Token,token : lib16.Token) : void {
        this.debugEvent("UnnamedFunction");
        let body : any = this.popStatement();
        let asyncModifier : any = this.pop();
        this.exitLocalScope();
        let formals : FormalParameters = this.pop();
        this.exitFunction();
        let typeParameters : core.DartList<any> = this.pop();
        let function : any = formals.addToFunction(((_) : any =>  {
            {
                _.fileOffset = beginToken.charOffset;
                _.fileEndOffset = token.charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,body,{
            typeParameters : typeParameters,asyncMarker : asyncModifier})));
        this.push(this.astFactory.functionExpression(function,beginToken));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endDoWhileStatement(doKeyword : lib16.Token,whileKeyword : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("DoWhileStatement");
        let condition : any = this.popForValue();
        let body : any = this.popStatement();
        let continueTarget : JumpTarget = this.exitContinueTarget();
        let breakTarget : JumpTarget = this.exitBreakTarget();
        if (continueTarget.hasUsers) {
            body = new bare.createInstance(any,null,body);
            continueTarget.resolveContinues(body);
        }
        let result : any = new bare.createInstance(any,null,body,condition);
        if (breakTarget.hasUsers) {
            result = new bare.createInstance(any,null,result);
            breakTarget.resolveBreaks(result);
        }
        this.exitLoopOrSwitch(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginForInExpression(token : lib16.Token) : void {
        this.enterLocalScope(this.scope.parent);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endForInExpression(token : lib16.Token) : void {
        this.debugEvent("ForInExpression");
        let expression : any = this.popForValue();
        this.exitLocalScope();
        this.push((expression || lib18.NullValue.Expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endForIn(awaitToken : lib16.Token,forToken : lib16.Token,leftParenthesis : lib16.Token,inKeyword : lib16.Token,rightParenthesis : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("ForIn");
        let body : any = this.popStatement();
        let expression : any = this.popForValue();
        let lvalue = this.pop();
        this.exitLocalScope();
        let continueTarget : JumpTarget = this.exitContinueTarget();
        let breakTarget : JumpTarget = this.exitBreakTarget();
        if (continueTarget.hasUsers) {
            body = new bare.createInstance(any,null,body);
            continueTarget.resolveContinues(body);
        }
        let variable : any;
        if (is(lvalue, any)) {
            variable = lvalue;
        }else if (is(lvalue, lib4.FastaAccessor)) {
            variable = new bare.createInstance(any,null,null);
            body = combineStatements(this.astFactory.expressionStatement(lvalue.buildAssignment(new bare.createInstance(any,null,variable),{
                voidContext : true})),body);
        }else {
            variable = new bare.createInstance(any,null,this.buildCompileTimeError(`Expected lvalue, but got ${lvalue}`,forToken.next.next.charOffset));
        }
        let result : any = ((_) : any =>  {
            {
                _.fileOffset = body.fileOffset;
                return _;
            }
        })(new bare.createInstance(any,null,variable,expression,body,{
            isAsync : awaitToken != null}));
        if (breakTarget.hasUsers) {
            result = new bare.createInstance(any,null,result);
            breakTarget.resolveBreaks(result);
        }
        this.exitLoopOrSwitch(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleLabel(token : lib16.Token) : void {
        this.debugEvent("Label");
        let identifier : Identifier = this.pop();
        this.push(new Label(identifier.name));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginLabeledStatement(token : lib16.Token,labelCount : number) : void {
        this.debugEvent("beginLabeledStatement");
        let labels : core.DartList<Label> = this.popList(labelCount);
        this.enterLocalScope(this.scope.createNestedLabelScope());
        let target : LabelTarget = new LabelTarget(this.member,this.functionNestingLevel,token.charOffset);
        for(let label of labels) {
            this.scope.declareLabel(label.name,target);
        }
        this.push(target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLabeledStatement(labelCount : number) : void {
        this.debugEvent("LabeledStatement");
        let statement : any = this.popStatement();
        let target : LabelTarget = this.pop();
        this.exitLocalScope();
        if (target.breakTarget.hasUsers) {
            if (isNot(statement, any)) {
                statement = new bare.createInstance(any,null,statement);
            }
            target.breakTarget.resolveBreaks(statement);
        }
        if (target.continueTarget.hasUsers) {
            if (isNot(statement, any)) {
                statement = new bare.createInstance(any,null,statement);
            }
            target.continueTarget.resolveContinues(statement);
        }
        this.push(statement);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endRethrowStatement(rethrowToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("RethrowStatement");
        if (this.inCatchBlock) {
            this.push(this.astFactory.expressionStatement(this.astFactory.rethrowExpression(rethrowToken)));
        }else {
            this.push(this.buildCompileTimeErrorStatement("'rethrow' can only be used in catch clauses.",rethrowToken.charOffset));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFinallyBlock(finallyKeyword : lib16.Token) : void {
        this.debugEvent("FinallyBlock");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endWhileStatement(whileKeyword : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("WhileStatement");
        let body : any = this.popStatement();
        let condition : any = this.popForValue();
        let continueTarget : JumpTarget = this.exitContinueTarget();
        let breakTarget : JumpTarget = this.exitBreakTarget();
        if (continueTarget.hasUsers) {
            body = new bare.createInstance(any,null,body);
            continueTarget.resolveContinues(body);
        }
        let result : any = new bare.createInstance(any,null,condition,body);
        if (breakTarget.hasUsers) {
            result = new bare.createInstance(any,null,result);
            breakTarget.resolveBreaks(result);
        }
        this.exitLoopOrSwitch(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEmptyStatement(token : lib16.Token) : void {
        this.debugEvent("EmptyStatement");
        this.push(new bare.createInstance(any,null));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleAssertStatement(assertKeyword : lib16.Token,leftParenthesis : lib16.Token,commaToken : lib16.Token,rightParenthesis : lib16.Token,semicolonToken : lib16.Token) : void {
        this.debugEvent("AssertStatement");
        let message : any = this.popForValueIfNotNull(commaToken);
        let condition : any = this.popForValue();
        this.push(new bare.createInstance(any,null,condition,message));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endYieldStatement(yieldToken : lib16.Token,starToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("YieldStatement");
        this.push(((_) : any =>  {
            {
                _.fileOffset = yieldToken.charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,this.popForValue(),{
            isYieldStar : starToken != null})));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginSwitchBlock(token : lib16.Token) : void {
        this.debugEvent("beginSwitchBlock");
        this.enterLocalScope();
        this.enterSwitchScope();
        this.enterBreakTarget(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginSwitchCase(labelCount : number,expressionCount : number,firstToken : lib16.Token) : void {
        this.debugEvent("beginSwitchCase");
        let labelsAndExpressions : core.DartList<any> = this.popList(labelCount + expressionCount);
        let labels : core.DartList<Label> = new core.DartList.literal<Label>();
        let expressions : core.DartList<any> = new core.DartList.literal<any>();
        if (labelsAndExpressions != null) {
            for(let labelOrExpression of labelsAndExpressions) {
                if (is(labelOrExpression, Label)) {
                    labels.add(labelOrExpression);
                }else {
                    expressions.add(this.toValue(labelOrExpression));
                }
            }
        }
        /* TODO (AssertStatementImpl) : assert (scope == switchScope); */;
        for(let label of labels) {
            if (this.scope.hasLocalLabel(label.name)) {
                this.scope.claimLabel(label.name);
            }else {
                this.scope.declareLabel(label.name,this.createGotoTarget(firstToken.charOffset));
            }
        }
        this.push(expressions);
        this.push(labels);
        this.enterLocalScope();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleSwitchCase(labelCount : number,expressionCount : number,defaultKeyword : lib16.Token,statementCount : number,firstToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("SwitchCase");
        let block : any = this.popBlock(statementCount,firstToken);
        this.exitLocalScope();
        let labels : core.DartList<Label> = this.pop();
        let expressions : core.DartList<any> = this.pop();
        let expressionOffsets : core.DartList<number> = new core.DartList.literal<number>();
        for(let expression of expressions) {
            expressionOffsets.add(expression.fileOffset);
        }
        this.push(((_) : any =>  {
            {
                _.fileOffset = firstToken.charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,expressions,expressionOffsets,block,{
            isDefault : defaultKeyword != null})));
        this.push(labels);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endSwitchStatement(switchKeyword : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("SwitchStatement");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endSwitchBlock(caseCount : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("SwitchBlock");
        let cases : core.DartList<any> = new core.DartList.filled(caseCount,null,{
            growable : true});
        for(let i : number = caseCount - 1; i >= 0; i--){
            let labels : core.DartList<Label> = this.pop();
            let current : any = cases[i] = this.pop();
            for(let label of labels) {
                let target : JumpTarget = this.switchScope.lookupLabel(label.name);
                if (target != null) {
                    target.resolveGotos(current);
                }
            }
        }
        let target : JumpTarget = this.exitBreakTarget();
        this.exitSwitchScope();
        this.exitLocalScope();
        let expression : any = this.popForValue();
        let result : any = new bare.createInstance(any,null,expression,cases);
        if (target.hasUsers) {
            result = new bare.createInstance(any,null,result);
            target.resolveBreaks(result);
        }
        this.exitLoopOrSwitch(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleCaseMatch(caseKeyword : lib16.Token,colon : lib16.Token) : void {
        this.debugEvent("CaseMatch");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleBreakStatement(hasTarget : boolean,breakKeyword : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("BreakStatement");
        let target = this.breakTarget;
        let name : string;
        if (hasTarget) {
            let identifier : Identifier = this.pop();
            name = identifier.name;
            target = this.scope.lookupLabel(identifier.name);
        }
        if (op(Op.EQUALS,target,null) && name == null) {
            this.push(this.compileTimeErrorInLoopOrSwitch = this.buildCompileTimeErrorStatement("No target of break.",breakKeyword.charOffset));
        }else if (op(Op.EQUALS,target,null) || isNot(target, JumpTarget) || !target.isBreakTarget) {
            this.push(this.compileTimeErrorInLoopOrSwitch = this.buildCompileTimeErrorStatement(`Can't break to '${name}'.`,breakKeyword.next.charOffset));
        }else if (target.functionNestingLevel != this.functionNestingLevel) {
            this.push(this.compileTimeErrorInLoopOrSwitch = this.buildCompileTimeErrorStatement(`Can't break to '${name}' in a different function.`,breakKeyword.next.charOffset));
        }else {
            let statement : any = ((_) : any =>  {
                {
                    _.fileOffset = breakKeyword.charOffset;
                    return _;
                }
            })(new bare.createInstance(any,null,null));
            target.addBreak(statement);
            this.push(statement);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleContinueStatement(hasTarget : boolean,continueKeyword : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("ContinueStatement");
        let target = this.continueTarget;
        let name : string;
        if (hasTarget) {
            let identifier : Identifier = this.pop();
            name = identifier.name;
            target = this.scope.lookupLabel(identifier.name);
            if (target != null && isNot(target, JumpTarget)) {
                this.push(this.compileTimeErrorInLoopOrSwitch = this.buildCompileTimeErrorStatement("Target of continue must be a label.",continueKeyword.charOffset));
                return;
            }
            if (op(Op.EQUALS,target,null)) {
                if (op(Op.EQUALS,this.switchScope,null)) {
                    this.push(this.buildCompileTimeErrorStatement(`Can't find label '${name}'.`,continueKeyword.next.charOffset));
                    return;
                }
                this.switchScope.forwardDeclareLabel(identifier.name,target = this.createGotoTarget(offsetForToken(identifier.token)));
            }
            if (target.isGotoTarget && op(Op.EQUALS,target.functionNestingLevel,this.functionNestingLevel)) {
                let statement : any = new bare.createInstance(any,null,null);
                target.addGoto(statement);
                this.push(statement);
                return;
            }
        }
        if (op(Op.EQUALS,target,null)) {
            this.push(this.compileTimeErrorInLoopOrSwitch = this.buildCompileTimeErrorStatement("No target of continue.",continueKeyword.charOffset));
        }else if (!target.isContinueTarget) {
            this.push(this.compileTimeErrorInLoopOrSwitch = this.buildCompileTimeErrorStatement(`Can't continue at '${name}'.`,continueKeyword.next.charOffset));
        }else if (target.functionNestingLevel != this.functionNestingLevel) {
            this.push(this.compileTimeErrorInLoopOrSwitch = this.buildCompileTimeErrorStatement(`Can't continue at '${name}' in a different function.`,continueKeyword.next.charOffset));
        }else {
            let statement : any = ((_) : any =>  {
                {
                    _.fileOffset = continueKeyword.charOffset;
                    return _;
                }
            })(new bare.createInstance(any,null,null));
            target.addContinue(statement);
            this.push(statement);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeVariable(token : lib16.Token,extendsOrSuper : lib16.Token) : void {
        this.debugEvent("TypeVariable");
        this.pop();
        this.pop();
        this.pop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeVariables(count : number,beginToken : lib16.Token,endToken : lib16.Token) : void {
        this.debugEvent("TypeVariables");
        this.push(lib18.NullValue.TypeVariables);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleModifier(token : lib16.Token) : void {
        this.debugEvent("Modifier");
        this.push(new lib29.Modifier.fromString(token.stringValue));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleModifiers(count : number) : void {
        this.debugEvent("Modifiers");
        this.push((this.popList(count) || lib18.NullValue.Modifiers));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRecoverableError(token : lib16.Token,message : lib34.FastaMessage) : void {
        let silent : boolean = this.hasParserError;
        this.addCompileTimeError(message.charOffset,message.message,{
            silent : silent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnrecoverableError(token : lib16.Token,message : lib34.FastaMessage) : lib16.Token {
        if (this.isDartLibrary && op(Op.EQUALS,message.code,lib34.properties.codeExpectedFunctionBody)) {
            let recover : lib16.Token = this.library.loader.target.skipNativeClause(token);
            if (recover != null) return recover;
        }else if (op(Op.EQUALS,message.code,lib34.properties.codeExpectedButGot)) {
            let expected : string = message.arguments.get("string");
            let trailing : core.DartList<string> = new core.DartList.literal<string>(")","}",";",",");
            if (trailing.contains(token.stringValue) && trailing.contains(expected)) {
                this.handleRecoverableError(token,message);
                return this.newSyntheticToken(token);
            }
        }
        return super.handleUnrecoverableError(token,message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildCompileTimeError(error : any,charOffset? : number) : any {
        charOffset = charOffset || -1;
        this.addCompileTimeError(charOffset,error);
        let message : string = lib15.formatUnexpected(this.uri,charOffset,error);
        let constructor : lib19.Builder = this.library.loader.getCompileTimeError();
        return new bare.createInstance(any,null,this.buildStaticInvocation(constructor.target,this.astFactory.arguments(new core.DartList.literal<any>(new bare.createInstance(any,null,message)))));
    }
    buildAbstractClassInstantiationError(className : string,charOffset? : number) : any {
        charOffset = charOffset || -1;
        this.warning(`The class '${className}' is abstract and can't be instantiated.`,charOffset);
        let constructor : lib19.Builder = this.library.loader.getAbstractClassInstantiationError();
        return new bare.createInstance(any,null,this.buildStaticInvocation(constructor.target,this.astFactory.arguments(new core.DartList.literal<any>(new bare.createInstance(any,null,className)))));
    }
    buildCompileTimeErrorStatement(error : any,charOffset? : number) : any {
        charOffset = charOffset || -1;
        return this.astFactory.expressionStatement(this.buildCompileTimeError(error,charOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildInvalidIntializer(expression : any,charOffset? : number) : any {
        charOffset = charOffset || -1;
        this.needsImplicitSuperInitializer = false;
        return ((_) : any =>  {
            {
                _.fileOffset = charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,new bare.createInstance(any,null,expression)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildSuperInitializer(constructor : any,arguments : any,charOffset? : number) : any {
        charOffset = charOffset || -1;
        this.needsImplicitSuperInitializer = false;
        return ((_) : any =>  {
            {
                _.fileOffset = charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,constructor,arguments));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildRedirectingInitializer(constructor : any,arguments : any,charOffset? : number) : any {
        charOffset = charOffset || -1;
        this.needsImplicitSuperInitializer = false;
        return ((_) : any =>  {
            {
                _.fileOffset = charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,constructor,arguments));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildProblemExpression(builder : lib8.ProblemBuilder,charOffset : number) : any {
        return this.buildCompileTimeError(builder.message,charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleOperator(token : lib16.Token) : void {
        this.debugEvent("Operator");
        this.push(((_) : Operator =>  {
            {
                _.fileOffset = token.charOffset;
                return _;
            }
        })(new Operator(token.stringValue)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleSymbolVoid(token : lib16.Token) : void {
        this.debugEvent("SymbolVoid");
        this.push(new Identifier(token));
    }
    addCompileTimeError(charOffset : number,message : string,_namedArguments? : {silent? : boolean}) : any {
        let {silent} = Object.assign({
            "silent" : false}, _namedArguments );
        return this.library.addCompileTimeError(charOffset,message,{
            fileUri : this.uri});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleInvalidFunctionBody(token : lib16.Token) : void {
        if (this.member.isNative) {
            this.push(lib18.NullValue.FunctionBody);
        }else {
            this.push(new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null))));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    warning(message : string,charOffset? : number) : void {
        charOffset = charOffset || -1;
        if (this.constantExpressionRequired) {
            this.addCompileTimeError(charOffset,message);
        }else {
            super.warning(message,charOffset);
        }
    }
    warningNotError(message : string,charOffset? : number) : void {
        charOffset = charOffset || -1;
        super.warning(message,charOffset);
    }
    evaluateArgumentsBefore(arguments : any,expression : any) : any {
        if (op(Op.EQUALS,arguments,null)) return expression;
        let expressions : core.DartList<any> = new core.DartList.from(arguments.positional);
        for(let named of arguments.named) {
            expressions.add(named.value);
        }
        for(let argument of expressions.reversed) {
            expression = new bare.createInstance(any,null,new bare.createInstance(any,null,argument,{
                isFinal : true}),expression);
        }
        return expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugEvent(name : string) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    makeStaticGet(readTarget : any,token : lib16.Token) : any {
        if (this.fieldDependencies != null && is(readTarget, any)) {
            let fieldNode = this._typeInferrer.getFieldNodeForReadTarget(readTarget);
            if (fieldNode != null) {
                this.fieldDependencies.add(fieldNode);
            }
        }
        return this.astFactory.staticGet(readTarget,token);
    }
}

export namespace Identifier {
    export type Constructors = 'Identifier';
    export type Interface = Omit<Identifier, Constructors>;
}
@DartClass
export class Identifier {
    token : lib16.Token;

    get name() : string {
        return this.token.lexeme;
    }
    constructor(token : lib16.Token) {
    }
    @defaultConstructor
    Identifier(token : lib16.Token) {
        this.token = token;
    }
    get initializer() : any {
        return null;
    }
    toString() : string {
        return `identifier(${this.name})`;
    }
}

export namespace Operator {
    export type Constructors = 'Operator';
    export type Interface = Omit<Operator, Constructors>;
}
@DartClass
export class Operator extends any {
    name : string;

    constructor(name : string) {
    }
    @defaultConstructor
    Operator(name : string) {
        this.name = name;
    }
    toString() : string {
        return `operator(${this.name})`;
    }
}

export namespace Label {
    export type Constructors = 'Label';
    export type Interface = Omit<Label, Constructors>;
}
@DartClass
export class Label extends any {
    name : string;

    constructor(name : string) {
    }
    @defaultConstructor
    Label(name : string) {
        this.name = name;
    }
    toString() : string {
        return `label(${this.name})`;
    }
}

export namespace CascadeReceiver {
    export type Constructors = 'CascadeReceiver';
    export type Interface = Omit<CascadeReceiver, Constructors>;
}
@DartClass
export class CascadeReceiver extends any {
    nextCascade : any;

    constructor(variable : any) {
    }
    @defaultConstructor
    CascadeReceiver(variable : any) {
        super.DartObject(variable,lib22.makeLet(new bare.createInstance(any,null,new bare.createInstance(any,null)),new bare.createInstance(any,null,variable)));
        this.nextCascade = body;
    }
    extend() : void {
        /* TODO (AssertStatementImpl) : assert (nextCascade.variable.initializer is! InvalidExpression); */;
        let newCascade : any = lib22.makeLet(new bare.createInstance(any,null,new bare.createInstance(any,null)),this.nextCascade.body);
        this.nextCascade.body = newCascade;
        newCascade.parent = this.nextCascade;
        this.nextCascade = newCascade;
    }
    finalize(expression : any) : void {
        /* TODO (AssertStatementImpl) : assert (nextCascade.variable.initializer is InvalidExpression); */;
        this.nextCascade.variable.initializer = expression;
        expression.parent = this.nextCascade.variable;
    }
}

export namespace ContextAccessor {
    export type Constructors = lib4.FastaAccessor.Constructors | 'ContextAccessor';
    export type Interface = Omit<ContextAccessor, Constructors>;
}
@DartClass
export class ContextAccessor extends lib4.FastaAccessor {
    helper : lib4.BuilderHelper;

    accessor : lib4.FastaAccessor;

    token : lib16.Token;

    constructor(helper : lib4.BuilderHelper,token : lib16.Token,accessor : lib4.FastaAccessor) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContextAccessor(helper : lib4.BuilderHelper,token : lib16.Token,accessor : lib4.FastaAccessor) {
        this.helper = helper;
        this.token = token;
        this.accessor = accessor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get builtBinary() : any {
        return lib15.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set builtBinary(expression : any) {
        lib15.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get builtGetter() : any {
        return lib15.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set builtGetter(expression : any) {
        lib15.internalError("Unsupported operation.");
    }
    get plainNameForRead() : string {
        return lib15.internalError("Unsupported operation.");
    }
    doInvocation(charOffset : number,arguments : any) : any {
        return lib15.internalError(`Unhandled: ${this.runtimeType}`,this.uri,charOffset);
    }
    @Abstract
    buildSimpleRead() : any{ throw 'abstract'}
    @Abstract
    buildForEffect() : any{ throw 'abstract'}
    buildAssignment(value : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return this.makeInvalidWrite(value);
    }
    buildNullAwareAssignment(value : any,type : any,_namedArguments? : {voidContext? : boolean}) : any {
        let {voidContext} = Object.assign({
            "voidContext" : false}, _namedArguments );
        return this.makeInvalidWrite(value);
    }
    buildCompoundAssignment(binaryOperator : any,value : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.makeInvalidWrite(value);
    }
    buildPrefixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.makeInvalidWrite(null);
    }
    buildPostfixIncrement(binaryOperator : any,_namedArguments? : {offset? : number,voidContext? : boolean,interfaceTarget? : any}) : any {
        let {offset,voidContext,interfaceTarget} = Object.assign({
            "offset" : TreeNode.noOffset,
            "voidContext" : false}, _namedArguments );
        return this.makeInvalidWrite(null);
    }
    makeInvalidRead() {
        return lib15.internalError("not supported");
    }
    makeInvalidWrite(value : any) : any {
        return this.helper.buildCompileTimeError("Can't be used as left-hand side of assignment.",offsetForToken(this.token));
    }
}

export namespace JumpTarget {
    export type Constructors = lib19.Builder.Constructors | 'JumpTarget';
    export type Interface = Omit<JumpTarget, Constructors>;
}
@DartClass
export class JumpTarget extends lib19.Builder {
    users : core.DartList<any>;

    kind : lib3.JumpTargetKind;

    functionNestingLevel : number;

    constructor(kind : lib3.JumpTargetKind,functionNestingLevel : number,member : lib6.MemberBuilder,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JumpTarget(kind : lib3.JumpTargetKind,functionNestingLevel : number,member : lib6.MemberBuilder,charOffset : number) {
        this.users = new core.DartList.literal<any>();
        super.Builder(member,charOffset,member.fileUri);
        this.kind = kind;
        this.functionNestingLevel = functionNestingLevel;
    }
    get isBreakTarget() : boolean {
        return op(Op.EQUALS,this.kind,lib3.JumpTargetKind.Break);
    }
    get isContinueTarget() : boolean {
        return op(Op.EQUALS,this.kind,lib3.JumpTargetKind.Continue);
    }
    get isGotoTarget() : boolean {
        return op(Op.EQUALS,this.kind,lib3.JumpTargetKind.Goto);
    }
    get hasUsers() : boolean {
        return this.users.isNotEmpty;
    }
    addBreak(statement : any) : void {
        /* TODO (AssertStatementImpl) : assert (isBreakTarget); */;
        this.users.add(statement);
    }
    addContinue(statement : any) : void {
        /* TODO (AssertStatementImpl) : assert (isContinueTarget); */;
        this.users.add(statement);
    }
    addGoto(statement : any) : void {
        /* TODO (AssertStatementImpl) : assert (isGotoTarget); */;
        this.users.add(statement);
    }
    resolveBreaks(target : any) : void {
        /* TODO (AssertStatementImpl) : assert (isBreakTarget); */;
        for(let user of this.users) {
            user.target = target;
        }
        this.users.clear();
    }
    resolveContinues(target : any) : void {
        /* TODO (AssertStatementImpl) : assert (isContinueTarget); */;
        for(let user of this.users) {
            user.target = target;
        }
        this.users.clear();
    }
    resolveGotos(target : any) : void {
        /* TODO (AssertStatementImpl) : assert (isGotoTarget); */;
        for(let user of this.users) {
            user.target = target;
        }
        this.users.clear();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return "<jump-target>";
    }
}

export namespace LabelTarget {
    export type Constructors = lib19.Builder.Constructors | 'LabelTarget';
    export type Interface = Omit<LabelTarget, Constructors>;
}
@DartClass
@Implements(JumpTarget)
export class LabelTarget extends lib19.Builder implements JumpTarget.Interface {
    breakTarget : JumpTarget;

    continueTarget : JumpTarget;

    functionNestingLevel : number;

    constructor(member : lib6.MemberBuilder,functionNestingLevel : number,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabelTarget(member : lib6.MemberBuilder,functionNestingLevel : number,charOffset : number) {
        this.breakTarget = new JumpTarget(lib3.JumpTargetKind.Break,functionNestingLevel,member,charOffset);
        this.continueTarget = new JumpTarget(lib3.JumpTargetKind.Continue,functionNestingLevel,member,charOffset);
        super.Builder(member,charOffset,member.fileUri);
        this.functionNestingLevel = functionNestingLevel;
    }
    get hasUsers() : boolean {
        return this.breakTarget.hasUsers || this.continueTarget.hasUsers;
    }
    get users() : core.DartList<any> {
        return lib15.internalError("Unsupported operation.");
    }
    get kind() : lib3.JumpTargetKind {
        return lib15.internalError("Unsupported operation.");
    }
    get isBreakTarget() : boolean {
        return true;
    }
    get isContinueTarget() : boolean {
        return true;
    }
    get isGotoTarget() : boolean {
        return false;
    }
    addBreak(statement : any) : void {
        this.breakTarget.addBreak(statement);
    }
    addContinue(statement : any) : void {
        this.continueTarget.addContinue(statement);
    }
    addGoto(statement : any) : void {
        lib15.internalError("Unsupported operation.");
    }
    resolveBreaks(target : any) : void {
        this.breakTarget.resolveBreaks(target);
    }
    resolveContinues(target : any) : void {
        this.continueTarget.resolveContinues(target);
    }
    resolveGotos(target : any) : void {
        lib15.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return "<label-target>";
    }
}

export namespace OptionalFormals {
    export type Constructors = 'OptionalFormals';
    export type Interface = Omit<OptionalFormals, Constructors>;
}
@DartClass
export class OptionalFormals {
    kind : lib26.FormalParameterType;

    formals : core.DartList<any>;

    constructor(kind : lib26.FormalParameterType,formals : core.DartList<any>) {
    }
    @defaultConstructor
    OptionalFormals(kind : lib26.FormalParameterType,formals : core.DartList<any>) {
        this.kind = kind;
        this.formals = formals;
    }
}

export namespace FormalParameters {
    export type Constructors = 'FormalParameters';
    export type Interface = Omit<FormalParameters, Constructors>;
}
@DartClass
export class FormalParameters {
    required : core.DartList<any>;

    optional : OptionalFormals;

    charOffset : number;

    constructor(required : core.DartList<any>,optional : OptionalFormals,charOffset : number) {
    }
    @defaultConstructor
    FormalParameters(required : core.DartList<any>,optional : OptionalFormals,charOffset : number) {
        this.required = required;
        this.optional = optional;
        this.charOffset = charOffset;
    }
    addToFunction(function : any) : any {
        function.requiredParameterCount = this.required.length;
        function.positionalParameters.addAll(this.required);
        if (this.optional != null) {
            if (this.optional.kind.isPositional) {
                function.positionalParameters.addAll(this.optional.formals);
            }else {
                function.namedParameters.addAll(this.optional.formals);
                setParents(function.namedParameters,function);
            }
        }
        setParents(function.positionalParameters,function);
        return function;
    }
    toFunctionType(returnType : any) : any {
        returnType = ( returnType ) || ( new bare.createInstance(any,null) );
        let requiredParameterCount : number = this.required.length;
        let positionalParameters : core.DartList<any> = new core.DartList.literal<any>();
        let namedParameters : core.DartList<any> = new core.DartList.literal<any>();
        for(let parameter of this.required) {
            positionalParameters.add(parameter.type);
        }
        if (this.optional != null) {
            if (this.optional.kind.isPositional) {
                for(let parameter of this.optional.formals) {
                    positionalParameters.add(parameter.type);
                }
            }else {
                namedParameters = new core.DartList.literal<any>();
                for(let parameter of this.optional.formals) {
                    namedParameters.add(new bare.createInstance(any,null,parameter.name,parameter.type));
                }
                namedParameters.sort();
            }
        }
        return new bare.createInstance(any,null,positionalParameters,returnType,{
            namedParameters : namedParameters,requiredParameterCount : requiredParameterCount});
    }
    computeFormalParameterScope(parent : lib8.Scope,builder : lib19.Builder) : lib8.Scope {
        if (this.required.length == 0 && op(Op.EQUALS,this.optional,null)) return parent;
        let local : core.DartMap<string,lib19.Builder> = new core.DartMap.literal([
        ]);
        for(let parameter of this.required) {
            local.set(parameter.name,new lib30.KernelVariableBuilder(parameter,builder,builder.fileUri));
        }
        if (this.optional != null) {
            for(let parameter of this.optional.formals) {
                local.set(parameter.name,new lib30.KernelVariableBuilder(parameter,builder,builder.fileUri));
            }
        }
        return new lib8.Scope(local,null,parent,{
            isModifiable : false});
    }
}

export namespace InitializedIdentifier {
    export type Constructors = Identifier.Constructors | 'InitializedIdentifier';
    export type Interface = Omit<InitializedIdentifier, Constructors>;
}
@DartClass
export class InitializedIdentifier extends Identifier {
    initializer : any;

    constructor(token : lib16.Token,initializer : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InitializedIdentifier(token : lib16.Token,initializer : any) {
        super.Identifier(token);
        this.initializer = initializer;
    }
    toString() : string {
        return `initialized-identifier(${this.name}, ${this.initializer})`;
    }
}

export namespace DelayedAssignment {
    export type Constructors = ContextAccessor.Constructors | 'DelayedAssignment';
    export type Interface = Omit<DelayedAssignment, Constructors>;
}
@DartClass
export class DelayedAssignment extends ContextAccessor {
    value : any;

    assignmentOperator : string;

    constructor(helper : lib4.BuilderHelper,token : lib16.Token,accessor : lib4.FastaAccessor,value : any,assignmentOperator : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DelayedAssignment(helper : lib4.BuilderHelper,token : lib16.Token,accessor : lib4.FastaAccessor,value : any,assignmentOperator : string) {
        super.ContextAccessor(helper,token,accessor);
        this.value = value;
        this.assignmentOperator = assignmentOperator;
    }
    buildSimpleRead() : any {
        return this.handleAssignment(false);
    }
    buildForEffect() : any {
        return this.handleAssignment(true);
    }
    handleAssignment(voidContext : boolean) : any {
        if (core.identical("=",this.assignmentOperator)) {
            return this.accessor.buildAssignment(this.value,{
                voidContext : voidContext});
        }else if (core.identical("+=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.plusName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("-=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.minusName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("*=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.multiplyName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("%=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.percentName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("&=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.ampersandName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("/=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.divisionName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("<<=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.leftShiftName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical(">>=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.rightShiftName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("??=",this.assignmentOperator)) {
            return this.accessor.buildNullAwareAssignment(this.value,new bare.createInstance(any,null),{
                voidContext : voidContext});
        }else if (core.identical("^=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.caretName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("|=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.barName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else if (core.identical("~/=",this.assignmentOperator)) {
            return this.accessor.buildCompoundAssignment(lib24.properties.mustacheName,this.value,{
                offset : offsetForToken(this.token),voidContext : voidContext});
        }else {
            return lib15.internalError(`Unhandled: ${this.assignmentOperator}`);
        }
    }
    buildFieldInitializer(initializers : core.DartMap<string,any>) : any {
        if (!core.identical("=",this.assignmentOperator) || !this.accessor.isThisPropertyAccessor) {
            return this.accessor.buildFieldInitializer(initializers);
        }
        let name : string = this.accessor.plainNameForRead;
        let initializer : any = initializers.get(name);
        if (initializer != null && op(Op.EQUALS,initializer.value,null)) {
            initializers.remove(name);
            initializer.value = ((_) : any =>  {
                {
                    _.parent = initializer;
                    return _;
                }
            })(this.value);
            return initializer;
        }
        return this.accessor.buildFieldInitializer(initializers);
    }
}

export namespace DelayedPostfixIncrement {
    export type Constructors = ContextAccessor.Constructors | 'DelayedPostfixIncrement';
    export type Interface = Omit<DelayedPostfixIncrement, Constructors>;
}
@DartClass
export class DelayedPostfixIncrement extends ContextAccessor {
    binaryOperator : any;

    interfaceTarget : any;

    constructor(helper : lib4.BuilderHelper,token : lib16.Token,accessor : lib4.FastaAccessor,binaryOperator : any,interfaceTarget : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DelayedPostfixIncrement(helper : lib4.BuilderHelper,token : lib16.Token,accessor : lib4.FastaAccessor,binaryOperator : any,interfaceTarget : any) {
        super.ContextAccessor(helper,token,accessor);
        this.binaryOperator = binaryOperator;
        this.interfaceTarget = interfaceTarget;
    }
    buildSimpleRead() : any {
        return this.accessor.buildPostfixIncrement(this.binaryOperator,{
            offset : offsetForToken(this.token),voidContext : false,interfaceTarget : this.interfaceTarget});
    }
    buildForEffect() : any {
        return this.accessor.buildPostfixIncrement(this.binaryOperator,{
            offset : offsetForToken(this.token),voidContext : true,interfaceTarget : this.interfaceTarget});
    }
}

export class properties {
}
