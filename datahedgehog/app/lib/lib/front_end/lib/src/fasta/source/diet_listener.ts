/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/diet_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./stack_listener";
import * as lib4 from "./source_library_builder";
import * as lib5 from "./../builder/class_builder";
import * as lib6 from "./../scope";
import * as lib7 from "@dart2ts/dart/uri";
import * as lib8 from "./../../scanner/token";
import * as lib9 from "./../parser/parser";
import * as lib10 from "./../builder/builder";
import * as lib11 from "./../scanner/token";
import * as lib12 from "./../builder/procedure_builder";
import * as lib13 from "./../builder/member_builder";
import * as lib14 from "./../kernel/body_builder";
import * as lib15 from "./../fasta_codes";
import * as lib16 from "./../util/link";
import * as lib17 from "./../parser/dart_vm_native";
import * as lib18 from "./../errors";

export namespace DietListener {
    export type Constructors = lib3.StackListener.Constructors | 'DietListener';
    export type Interface = Omit<DietListener, Constructors>;
}
@DartClass
export class DietListener extends lib3.StackListener {
    library : lib4.SourceLibraryBuilder<any,any>;

    hierarchy : any;

    coreTypes : any;

    isDartLibrary : boolean;

    typeInferenceEngine : any;

    currentClass : lib5.ClassBuilder<any,any>;

    memberScope : lib6.Scope;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib7.Uri;

    constructor(library : lib4.SourceLibraryBuilder<any,any>,hierarchy : any,coreTypes : any,typeInferenceEngine : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DietListener(library : lib4.SourceLibraryBuilder<any,any>,hierarchy : any,coreTypes : any,typeInferenceEngine : any) {
        this.library = library;
        this.uri = library.fileUri;
        this.memberScope = library.scope;
        this.isDartLibrary = library.uri.scheme == "dart";
        this.hierarchy = hierarchy;
        this.coreTypes = coreTypes;
        this.typeInferenceEngine = typeInferenceEngine;
    }
    discard(n : number) : void {
        for(let i : number = 0; i < n; i++){
            this.pop();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadataStar(count : number,forParameter : boolean) : void {
        this.debugEvent("MetadataStar");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadata(beginToken : lib8.Token,periodBeforeName : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("Metadata");
        this.popIfNotNull(periodBeforeName);
        this.discard(1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endPartOf(partKeyword : lib8.Token,semicolon : lib8.Token,hasName : boolean) : void {
        this.debugEvent("PartOf");
        if (hasName) this.discard(1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoArguments(token : lib8.Token) : void {
        this.debugEvent("NoArguments");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleModifiers(count : number) : void {
        this.debugEvent("Modifiers");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoTypeArguments(token : lib8.Token) : void {
        this.debugEvent("NoTypeArguments");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoConstructorReferenceContinuationAfterTypeArguments(token : lib8.Token) : void {
        this.debugEvent("NoConstructorReferenceContinuationAfterTypeArguments");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoType(token : lib8.Token) : void {
        this.debugEvent("NoType");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleType(beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("Type");
        this.discard(1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeList(count : number) : void {
        this.debugEvent("TypeList");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMixinApplication(withKeyword : lib8.Token) : void {
        this.debugEvent("MixinApplication");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeArguments(count : number,beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("TypeArguments");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFieldInitializer(assignmentOperator : lib8.Token,token : lib8.Token) : void {
        this.debugEvent("FieldInitializer");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFieldInitializer(token : lib8.Token) : void {
        this.debugEvent("NoFieldInitializer");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoTypeVariables(token : lib8.Token) : void {
        this.debugEvent("NoTypeVariables");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFormalParameters(count : number,beginToken : lib8.Token,endToken : lib8.Token,kind : lib9.MemberKind) : void {
        this.debugEvent("FormalParameters");
        /* TODO (AssertStatementImpl) : assert (count == 0); */;
        if (kind != lib9.MemberKind.GeneralizedFunctionType && core.identical(this.peek(),"-") && core.identical(beginToken.next,endToken)) {
            this.pop();
            this.push("unary-");
        }
        this.push(beginToken);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFormalParameters(token : lib8.Token,kind : lib9.MemberKind) : void {
        this.debugEvent("NoFormalParameters");
        if (core.identical(this.peek(),"-")) {
            this.pop();
            this.push("unary-");
        }
        this.push(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFunctionType(functionToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("FunctionType");
        this.discard(1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionTypeAlias(typedefKeyword : lib8.Token,equals : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("FunctionTypeAlias");
        if (equals != null) {
            this.discard(1);
        }else {
            this.discard(2);
        }
        this.checkEmpty(typedefKeyword.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFields(count : number,beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("Fields");
        let names : core.DartList<string> = this.popList(count);
        let builder : lib10.Builder = this.lookupBuilder(beginToken,null,names.first);
        this.buildFields(beginToken,false,builder);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleAsyncModifier(asyncToken : lib8.Token,startToken : lib8.Token) : void {
        this.debugEvent("AsyncModifier");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTopLevelMethod(beginToken : lib8.Token,getOrSet : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("TopLevelMethod");
        let bodyToken : lib8.Token = this.pop();
        let name : string = this.pop();
        this.checkEmpty(beginToken.charOffset);
        this.buildFunctionBody(bodyToken,this.lookupBuilder(beginToken,getOrSet,name),lib9.MemberKind.TopLevelMethod);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFunctionBody(token : lib8.Token) : void {
        this.debugEvent("NoFunctionBody");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTopLevelFields(count : number,beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("TopLevelFields");
        let names : core.DartList<string> = this.popList(count);
        let builder : lib10.Builder = this.lookupBuilder(beginToken,null,names.first);
        this.buildFields(beginToken,true,builder);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleVoidKeyword(token : lib8.Token) : void {
        this.debugEvent("VoidKeyword");
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
    endInitializers(count : number,beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("Initializers");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleQualified(period : lib8.Token) : void {
        this.debugEvent("handleQualified");
        let name : string = this.pop();
        let receiver : string = this.pop();
        this.push(`${receiver}.${name}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLibraryName(libraryKeyword : lib8.Token,semicolon : lib8.Token) : void {
        this.debugEvent("endLibraryName");
        this.discard(1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginLiteralString(token : lib8.Token) : void {
        this.debugEvent("beginLiteralString");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLiteralString(interpolationCount : number,endToken : lib8.Token) : void {
        this.debugEvent("endLiteralString");
        this.discard(interpolationCount);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleScript(token : lib8.Token) : void {
        this.debugEvent("Script");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleStringJuxtaposition(literalCount : number) : void {
        this.debugEvent("StringJuxtaposition");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endDottedName(count : number,firstIdentifier : lib8.Token) : void {
        this.debugEvent("DottedName");
        this.discard(count);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConditionalUri(ifKeyword : lib8.Token,equalitySign : lib8.Token) : void {
        this.debugEvent("ConditionalUri");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConditionalUris(count : number) : void {
        this.debugEvent("ConditionalUris");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleOperatorName(operatorKeyword : lib8.Token,token : lib8.Token) : void {
        this.debugEvent("OperatorName");
        this.push(token.stringValue);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endIdentifierList(count : number) : void {
        this.debugEvent("IdentifierList");
        this.discard(count);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endShow(showKeyword : lib8.Token) : void {
        this.debugEvent("Show");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endHide(hideKeyword : lib8.Token) : void {
        this.debugEvent("Hide");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCombinators(count : number) : void {
        this.debugEvent("Combinators");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endImport(importKeyword : lib8.Token,DeferredKeyword : lib8.Token,asKeyword : lib8.Token,semicolon : lib8.Token) : void {
        this.debugEvent("Import");
        this.popIfNotNull(asKeyword);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endExport(exportKeyword : lib8.Token,semicolon : lib8.Token) : void {
        this.debugEvent("Export");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endPart(partKeyword : lib8.Token,semicolon : lib8.Token) : void {
        this.debugEvent("Part");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeVariable(token : lib8.Token,extendsOrSuper : lib8.Token) : void {
        this.debugEvent("TypeVariable");
        this.discard(1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeVariables(count : number,beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("TypeVariables");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleModifier(token : lib8.Token) : void {
        this.debugEvent("Modifier");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstructorReference(start : lib8.Token,periodBeforeName : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("ConstructorReference");
        this.popIfNotNull(periodBeforeName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFactoryMethod(beginToken : lib8.Token,factoryKeyword : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("FactoryMethod");
        let bodyToken : lib11.BeginGroupToken = this.pop();
        let name : string = this.pop();
        this.checkEmpty(beginToken.charOffset);
        if (op(Op.EQUALS,bodyToken,null) || lib9.optional("=",bodyToken.endGroup.next)) {
            return;
        }
        this.buildFunctionBody(bodyToken,this.lookupBuilder(beginToken,null,name),lib9.MemberKind.Factory);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endRedirectingFactoryBody(beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("RedirectingFactoryBody");
        this.discard(1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMethod(getOrSet : lib8.Token,beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("Method");
        let bodyToken : lib8.Token = this.pop();
        let name : string = this.pop();
        this.checkEmpty(beginToken.charOffset);
        if (op(Op.EQUALS,bodyToken,null)) {
            return;
        }
        let builder : lib12.ProcedureBuilder<any> = this.lookupBuilder(beginToken,getOrSet,name);
        this.buildFunctionBody(bodyToken,builder,builder.isStatic ? lib9.MemberKind.StaticMethod : lib9.MemberKind.NonStaticMethod);
    }
    createListener(builder : lib13.MemberBuilder,memberScope : lib6.Scope,isInstanceMember : boolean,formalParameterScope? : lib6.Scope) : lib3.StackListener {
        let listener = new bare.createInstance(any,null);
        let typeInferrer = this.typeInferenceEngine.createLocalTypeInferrer(this.uri,listener);
        return ((_) : lib14.BodyBuilder =>  {
            {
                _.constantExpressionRequired = builder.isConstructor && builder.isConst;
                return _;
            }
        })(new lib14.BodyBuilder(this.library,builder,memberScope,formalParameterScope,this.hierarchy,this.coreTypes,this.currentClass,isInstanceMember,this.uri,typeInferrer,new bare.createInstance(any,null)));
    }
    buildFunctionBody(token : lib8.Token,builder : lib12.ProcedureBuilder<any>,kind : lib9.MemberKind) : void {
        let typeParameterScope : lib6.Scope = builder.computeTypeParameterScope(this.memberScope);
        let formalParameterScope : lib6.Scope = builder.computeFormalParameterScope(typeParameterScope);
        /* TODO (AssertStatementImpl) : assert (typeParameterScope != null); */;
        /* TODO (AssertStatementImpl) : assert (formalParameterScope != null); */;
        this.parseFunctionBody(this.createListener(builder,typeParameterScope,builder.isInstanceMember,formalParameterScope),token,kind);
    }
    buildFields(token : lib8.Token,isTopLevel : boolean,builder : lib13.MemberBuilder) : void {
        this.parseFields(this.createListener(builder,this.memberScope,builder.isInstanceMember),token,isTopLevel);
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
    beginClassBody(token : lib8.Token) : void {
        this.debugEvent("beginClassBody");
        let name : string = this.pop();
        /* TODO (AssertStatementImpl) : assert (currentClass == null); */;
        this.currentClass = this.lookupBuilder(token,null,name);
        /* TODO (AssertStatementImpl) : assert (memberScope == library.scope); */;
        this.memberScope = this.currentClass.scope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endClassBody(memberCount : number,beginToken : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("ClassBody");
        this.currentClass = null;
        this.checkEmpty(beginToken.charOffset);
        this.memberScope = this.library.scope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endClassDeclaration(interfacesCount : number,beginToken : lib8.Token,classKeyword : lib8.Token,extendsKeyword : lib8.Token,implementsKeyword : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("ClassDeclaration");
        this.checkEmpty(beginToken.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endEnum(enumKeyword : lib8.Token,endBrace : lib8.Token,count : number) : void {
        this.debugEvent("Enum");
        this.discard(count);
        this.pop();
        this.checkEmpty(enumKeyword.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endNamedMixinApplication(beginToken : lib8.Token,classKeyword : lib8.Token,equals : lib8.Token,implementsKeyword : lib8.Token,endToken : lib8.Token) : void {
        this.debugEvent("NamedMixinApplication");
        this.pop();
        this.checkEmpty(beginToken.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnrecoverableError(token : lib8.Token,message : lib15.FastaMessage) : lib8.Token {
        if (this.isDartLibrary && op(Op.EQUALS,message.code,lib15.properties.codeExpectedBlockToSkip)) {
            let recover : lib8.Token = this.library.loader.target.skipNativeClause(token);
            if (recover != null) return recover;
        }
        return super.handleUnrecoverableError(token,message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleMemberName(identifiers : lib16.Link<lib8.Token>) : lib16.Link<lib8.Token> {
        if (!this.isDartLibrary || identifiers.isEmpty) return identifiers;
        return lib17.removeNativeClause(identifiers);
    }
    getAsyncMarker(listener : lib3.StackListener) : any {
        return listener.pop();
    }
    parseFunctionBody(listener : lib3.StackListener,token : lib8.Token,kind : lib9.MemberKind) : void {
        try {
            let parser : lib9.Parser = new lib9.Parser(listener);
            token = parser.parseFormalParametersOpt(token,kind);
            let formals = listener.pop();
            listener.checkEmpty(token.charOffset);
            listener.prepareInitializers();
            token = parser.parseInitializersOpt(token);
            token = parser.parseAsyncModifier(token);
            let asyncModifier : any = (this.getAsyncMarker(listener) || AsyncMarker.Sync);
            let isExpression : boolean = false;
            let allowAbstract : boolean = op(Op.EQUALS,asyncModifier,AsyncMarker.Sync);
            parser.parseFunctionBody(token,isExpression,allowAbstract);
            let body = listener.pop();
            if (listener.stack.length == 2) {
                listener.pop();
                listener.pop();
            }
            listener.checkEmpty(token.charOffset);
            listener.finishFunction(formals,asyncModifier,body);
        } catch (__error__) {

            if (is(__error__,lib18.InputError)){
                /* TODO (RethrowExpressionImpl): rethrow */;
            }


            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                throw new lib18.Crash(this.uri,token.charOffset,e,s);
            }
        }
    }
    parseFields(listener : lib3.StackListener,token : lib8.Token,isTopLevel : boolean) : void {
        let parser : lib9.Parser = new lib9.Parser(listener);
        if (isTopLevel) {
            token = parser.parseTopLevelMember(token);
        }else {
            token = parser.parseMember(token);
        }
        listener.checkEmpty(token.charOffset);
    }
    lookupBuilder(token : lib8.Token,getOrSet : lib8.Token,name : string) : lib10.Builder {
        let builder : lib10.Builder;
        if (this.currentClass != null) {
            if (getOrSet != null && lib9.optional("set",getOrSet)) {
                builder = this.currentClass.scope.setters.get(name);
            }else {
                builder = this.currentClass.scope.local.get(name);
            }
            if (op(Op.EQUALS,builder,null)) {
                if (name == this.currentClass.name) {
                    name = "";
                }else {
                    let index : number = new core.DartString(name).indexOf(".");
                    name = new core.DartString(name).substring(index + 1);
                }
                builder = this.currentClass.constructors.local.get(name);
            }
        }else if (getOrSet != null && lib9.optional("set",getOrSet)) {
            builder = this.library.scope.setters.get(name);
        }else {
            builder = op(Op.INDEX,this.library.scopeBuilder,name);
        }
        if (op(Op.EQUALS,builder,null)) {
            return lib18.internalError(`Builder not found: ${name}`,this.uri,token.charOffset);
        }
        if (builder.next != null) {
            return lib18.inputError(this.uri,token.charOffset,`Duplicated name: ${name}`);
        }
        return builder;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugEvent(name : string) : void {
    }
}

export class properties {
}
