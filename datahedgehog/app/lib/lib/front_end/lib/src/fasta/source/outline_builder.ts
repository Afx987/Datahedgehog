/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/outline_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./unhandled_listener";
import * as lib4 from "./source_library_builder";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "./../../scanner/token";
import * as lib7 from "./../builder/type_builder";
import * as lib8 from "./../builder/metadata_builder";
import * as lib9 from "./../combinator";
import * as lib10 from "./stack_listener";
import * as lib11 from "./../operator";
import * as lib12 from "./../parser/identifier_context";
import * as lib13 from "./../quote";
import * as lib14 from "./../errors";
import * as lib15 from "./../builder/type_variable_builder";
import * as lib16 from "./../builder/mixin_application_builder";
import * as lib17 from "./../modifier";
import * as lib18 from "./../parser/parser";
import * as lib19 from "./../builder/formal_parameter_builder";
import * as lib20 from "./../builder/function_type_builder";
import * as lib21 from "./../builder/constructor_reference_builder";
import * as lib22 from "./../fasta_codes";
import * as lib23 from "./../util/link";
import * as lib24 from "./../parser/dart_vm_native";

export enum MethodBody {
    Abstract,
    Regular,
    RedirectingFactoryBody
}

export namespace OutlineBuilder {
    export type Constructors = lib3.UnhandledListener.Constructors | 'OutlineBuilder';
    export type Interface = Omit<OutlineBuilder, Constructors>;
}
@DartClass
export class OutlineBuilder extends lib3.UnhandledListener {
    library : lib4.SourceLibraryBuilder<any,any>;

    isDartLibrary : boolean;

    nativeMethodName : string;

    constructor(library : lib4.SourceLibraryBuilder<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OutlineBuilder(library : lib4.SourceLibraryBuilder<any,any>) {
        this.library = library;
        this.isDartLibrary = library.uri.scheme == "dart";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : lib5.Uri {
        return this.library.fileUri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    popCharOffset() : number {
        return this.pop();
    }
    popIdentifierList(count : number) : core.DartList<string> {
        if (count == 0) return null;
        let list : core.DartList<string> = new core.DartList.filled(count,null,{
            growable : true});
        for(let i : number = count - 1; i >= 0; i--){
            this.popCharOffset();
            list[i] = this.pop();
        }
        return list;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMetadata(beginToken : lib6.Token,periodBeforeName : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("Metadata");
        let arguments : core.DartList<any> = this.pop();
        this.popIfNotNull(periodBeforeName);
        let postfix : string = this.popIfNotNull(periodBeforeName);
        let typeArguments : core.DartList<lib7.TypeBuilder> = this.pop();
        if (arguments == null) {
            let charOffset : number = this.pop();
            let expression : string = this.pop();
            this.push(new lib8.MetadataBuilder.fromExpression(expression,postfix,this.library,charOffset));
        }else {
            let charOffset : number = this.pop();
            let typeName : string = this.pop();
            this.push(new lib8.MetadataBuilder.fromConstructor(this.library.addConstructorReference(typeName,typeArguments,postfix,charOffset),arguments,this.library,beginToken.charOffset));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endHide(hideKeyword : lib6.Token) : void {
        this.debugEvent("Hide");
        let names : core.DartList<string> = this.pop();
        this.push(new lib9.Combinator.hide(names,hideKeyword.charOffset,this.library.fileUri));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endShow(showKeyword : lib6.Token) : void {
        this.debugEvent("Show");
        let names : core.DartList<string> = this.pop();
        this.push(new lib9.Combinator.show(names,showKeyword.charOffset,this.library.fileUri));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endCombinators(count : number) : void {
        this.debugEvent("Combinators");
        this.push((this.popList(count) || lib10.NullValue.Combinators));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endExport(exportKeyword : lib6.Token,semicolon : lib6.Token) : void {
        this.debugEvent("Export");
        let combinators : core.DartList<lib9.Combinator> = this.pop();
        let conditionalUris : lib3.Unhandled = this.pop();
        this.popCharOffset();
        let uri : string = this.pop();
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        if (uri != null) {
            this.library.addExport(metadata,uri,conditionalUris,combinators,exportKeyword.charOffset);
        }
        this.checkEmpty(exportKeyword.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endImport(importKeyword : lib6.Token,deferredKeyword : lib6.Token,asKeyword : lib6.Token,semicolon : lib6.Token) : void {
        this.debugEvent("endImport");
        let combinators : core.DartList<lib9.Combinator> = this.pop();
        let prefixOffset : number = (this.popIfNotNull(asKeyword) || -1);
        let prefix : string = this.popIfNotNull(asKeyword);
        let conditionalUris : lib3.Unhandled = this.pop();
        this.popCharOffset();
        let uri : string = this.pop();
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        if (uri != null) {
            this.library.addImport(metadata,uri,conditionalUris,prefix,combinators,deferredKeyword != null,importKeyword.charOffset,prefixOffset);
        }
        this.checkEmpty(importKeyword.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRecoverExpression(token : lib6.Token) : void {
        this.debugEvent("RecoverExpression");
        this.push(lib10.NullValue.Expression);
        this.push(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endPart(partKeyword : lib6.Token,semicolon : lib6.Token) : void {
        this.debugEvent("Part");
        this.popCharOffset();
        let uri : string = this.pop();
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        if (uri != null) {
            this.library.addPart(metadata,uri);
        }
        this.checkEmpty(partKeyword.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleOperatorName(operatorKeyword : lib6.Token,token : lib6.Token) : void {
        this.debugEvent("OperatorName");
        this.push(lib11.operatorFromString(token.stringValue));
        this.push(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleIdentifier(token : lib6.Token,context : lib12.IdentifierContext) : void {
        super.handleIdentifier(token,context);
        this.push(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoName(token : lib6.Token) : void {
        super.handleNoName(token);
        this.push(token.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLiteralString(interpolationCount : number,endToken : lib6.Token) : void {
        this.debugEvent("endLiteralString");
        if (interpolationCount == 0) {
            let token : lib6.Token = this.pop();
            this.push(lib13.unescapeString(token.lexeme));
            this.push(token.charOffset);
        }else {
            lib14.internalError("String interpolation not implemented.");
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleStringJuxtaposition(literalCount : number) : void {
        this.debugEvent("StringJuxtaposition");
        let list : core.DartList<string> = new core.DartList.filled(literalCount,null,{
            growable : false});
        let charOffset : number = -1;
        for(let i : number = literalCount - 1; i >= 0; i--){
            charOffset = this.pop();
            list[i] = this.pop();
        }
        this.push(list.join(""));
        this.push(charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endIdentifierList(count : number) : void {
        this.debugEvent("endIdentifierList");
        this.push((this.popIdentifierList(count) || lib10.NullValue.IdentifierList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleQualified(period : lib6.Token) : void {
        this.debugEvent("handleQualified");
        let charOffset : number = this.pop();
        let name : string = this.pop();
        charOffset = this.pop();
        let receiver : string = this.pop();
        this.push(`${receiver}.${name}`);
        this.push(charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endLibraryName(libraryKeyword : lib6.Token,semicolon : lib6.Token) : void {
        this.debugEvent("endLibraryName");
        this.popCharOffset();
        let name : string = this.pop();
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.name = name;
        this.library.metadata = metadata;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginClassDeclaration(begin : lib6.Token,name : lib6.Token) : void {
        this.library.beginNestedDeclaration(name.lexeme);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endClassDeclaration(interfacesCount : number,beginToken : lib6.Token,classKeyword : lib6.Token,extendsKeyword : lib6.Token,implementsKeyword : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("endClassDeclaration");
        let interfaces : core.DartList<lib7.TypeBuilder> = this.popList(interfacesCount);
        let supertype : lib7.TypeBuilder = this.pop();
        let typeVariables : core.DartList<lib15.TypeVariableBuilder<any,any>> = this.pop();
        let charOffset : number = this.pop();
        let name : string = this.pop();
        if (typeVariables != null && is(supertype, lib16.MixinApplicationBuilder<any>)) {
            supertype.typeVariables = typeVariables;
            supertype.subclassName = name;
        }
        let modifiers : number = lib17.Modifier.validate(this.pop());
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.addClass(metadata,modifiers,name,typeVariables,supertype,interfaces,charOffset);
        this.checkEmpty(beginToken.charOffset);
    }
    computeProcedureKind(token : lib6.Token) : any {
        if (op(Op.EQUALS,token,null)) return ProcedureKind.Method;
        if (lib18.optional("get",token)) return ProcedureKind.Getter;
        if (lib18.optional("set",token)) return ProcedureKind.Setter;
        return lib14.internalError(`Unhandled: ${token.lexeme}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginTopLevelMethod(token : lib6.Token,name : lib6.Token) : void {
        this.library.beginNestedDeclaration(name.lexeme,{
            hasMembers : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTopLevelMethod(beginToken : lib6.Token,getOrSet : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("endTopLevelMethod");
        let kind : MethodBody = this.pop();
        let formals : core.DartList<lib19.FormalParameterBuilder<any>> = this.pop();
        let formalsOffset : number = this.pop();
        let typeVariables : core.DartList<lib15.TypeVariableBuilder<any,any>> = this.pop();
        let charOffset : number = this.pop();
        let name : string = this.pop();
        let returnType : lib7.TypeBuilder = this.pop();
        let modifiers : number = lib17.Modifier.validate(this.pop(),{
            isAbstract : op(Op.EQUALS,kind,MethodBody.Abstract)});
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.checkEmpty(beginToken.charOffset);
        this.library.addProcedure(metadata,modifiers,returnType,name,typeVariables,formals,this.computeProcedureKind(getOrSet),charOffset,formalsOffset,endToken.charOffset,this.nativeMethodName,{
            isTopLevel : true});
        this.nativeMethodName = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFunctionBody(token : lib6.Token) : void {
        this.debugEvent("NoFunctionBody");
        this.push(MethodBody.Abstract);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFunctionBodySkipped(token : lib6.Token,isExpressionBody : boolean) : void {
        this.debugEvent("handleFunctionBodySkipped");
        this.push(MethodBody.Regular);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginMethod(token : lib6.Token,name : lib6.Token) : void {
        this.library.beginNestedDeclaration(name.lexeme,{
            hasMembers : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMethod(getOrSet : lib6.Token,beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("Method");
        let bodyKind : MethodBody = this.pop();
        if (op(Op.EQUALS,bodyKind,MethodBody.RedirectingFactoryBody)) {
            this.pop();
        }
        let formals : core.DartList<lib19.FormalParameterBuilder<any>> = this.pop();
        let formalsOffset : number = this.pop();
        let typeVariables : core.DartList<lib15.TypeVariableBuilder<any,any>> = this.pop();
        let charOffset : number = this.pop();
        let nameOrOperator : any = this.pop();
        if (op(Op.EQUALS,lib11.Operator.subtract,nameOrOperator) && formals == null) {
            nameOrOperator = lib11.Operator.unaryMinus;
        }
        let name : string;
        let kind : any;
        if (is(nameOrOperator, lib11.Operator)) {
            name = lib11.operatorToString(nameOrOperator);
            kind = ProcedureKind.Operator;
            let requiredArgumentCount : number = lib11.operatorRequiredArgumentCount(nameOrOperator);
            if (((((t)=>(!!t)?t.length:null)(formals) || 0)) != requiredArgumentCount) {
                this.library.addCompileTimeError(charOffset,`Operator '${name}' must have exactly ${requiredArgumentCount} ` + "parameters.");
            }else {
                if (formals != null) {
                    for(let formal of formals) {
                        if (!formal.isRequired) {
                            this.library.addCompileTimeError(formal.charOffset,"An operator can't have optional parameters.");
                        }
                    }
                }
            }
        }else {
            name = nameOrOperator;
            kind = this.computeProcedureKind(getOrSet);
        }
        let returnType : lib7.TypeBuilder = this.pop();
        let modifiers : number = lib17.Modifier.validate(this.pop(),{
            isAbstract : op(Op.EQUALS,bodyKind,MethodBody.Abstract)});
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.addProcedure(metadata,modifiers,returnType,name,typeVariables,formals,kind,charOffset,formalsOffset,endToken.charOffset,this.nativeMethodName,{
            isTopLevel : false});
        this.nativeMethodName = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endMixinApplication(withKeyword : lib6.Token) : void {
        this.debugEvent("MixinApplication");
        let mixins : core.DartList<lib7.TypeBuilder> = this.pop();
        let supertype : lib7.TypeBuilder = this.pop();
        this.push(this.library.addMixinApplication(supertype,mixins,-1));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginNamedMixinApplication(begin : lib6.Token,name : lib6.Token) : void {
        this.library.beginNestedDeclaration(name.lexeme,{
            hasMembers : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endNamedMixinApplication(beginToken : lib6.Token,classKeyword : lib6.Token,equals : lib6.Token,implementsKeyword : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("endNamedMixinApplication");
        let interfaces : core.DartList<lib7.TypeBuilder> = this.popIfNotNull(implementsKeyword);
        let mixinApplication : lib7.TypeBuilder = this.pop();
        let typeVariables : core.DartList<lib15.TypeVariableBuilder<any,any>> = this.pop();
        let charOffset : number = this.pop();
        let name : string = this.pop();
        let modifiers : number = lib17.Modifier.validate(this.pop());
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.addNamedMixinApplication(metadata,name,typeVariables,modifiers,mixinApplication,interfaces,charOffset);
        this.checkEmpty(beginToken.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeArguments(count : number,beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("TypeArguments");
        this.push((this.popList(count) || lib10.NullValue.TypeArguments));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleScript(token : lib6.Token) : void {
        this.debugEvent("Script");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleType(beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("Type");
        let arguments : core.DartList<lib7.TypeBuilder> = this.pop();
        let charOffset : number = this.pop();
        let name : string = this.pop();
        this.push(this.library.addNamedType(name,arguments,charOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeList(count : number) : void {
        this.debugEvent("TypeList");
        this.push((this.popList(count) || lib10.NullValue.TypeList));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeVariables(count : number,beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("TypeVariables");
        this.push((this.popList(count) || lib10.NullValue.TypeVariables));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleVoidKeyword(token : lib6.Token) : void {
        this.debugEvent("VoidKeyword");
        this.push(this.library.addVoidType(token.charOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFormalParameter(thisKeyword : lib6.Token,nameToken : lib6.Token,kind : lib18.FormalParameterType,memberKind : lib18.MemberKind) : void {
        this.debugEvent("FormalParameter");
        let charOffset : number = this.pop();
        let name : string = this.pop();
        let type : lib7.TypeBuilder = this.pop();
        let modifiers : number = lib17.Modifier.validate(this.pop());
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.push(this.library.addFormalParameter(metadata,modifiers,type,name,thisKeyword != null,charOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleValuedFormalParameter(equals : lib6.Token,token : lib6.Token) : void {
        this.debugEvent("ValuedFormalParameter");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFormalParameterWithoutValue(token : lib6.Token) : void {
        this.debugEvent("FormalParameterWithoutValue");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionTypedFormalParameter(thisKeyword : lib6.Token,kind : lib18.FormalParameterType) : void {
        this.debugEvent("FunctionTypedFormalParameter");
        let formals : core.DartList<lib19.FormalParameterBuilder<any>> = this.pop();
        let formalsOffset : number = this.pop();
        let typeVariables : core.DartList<lib15.TypeVariableBuilder<any,any>> = this.pop();
        let charOffset : number = this.pop();
        let name : string = this.pop();
        let returnType : lib7.TypeBuilder = this.pop();
        this.push(this.library.addFunctionType(returnType,typeVariables,formals,formalsOffset));
        this.push(name);
        this.push(charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endOptionalFormalParameters(count : number,beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("OptionalFormalParameters");
        let kind : lib18.FormalParameterType = lib18.optional("{",beginToken) ? lib18.FormalParameterType.NAMED : lib18.FormalParameterType.POSITIONAL;
        let parameters : core.DartList<any> = (this.popList(count) || new core.DartList.literal());
        for(let parameter of parameters) {
            parameter.kind = kind;
        }
        this.push(parameters);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFormalParameters(count : number,beginToken : lib6.Token,endToken : lib6.Token,kind : lib18.MemberKind) : void {
        this.debugEvent("FormalParameters");
        let formals : core.DartList<any> = this.popList(count);
        if (formals != null && formals.isNotEmpty) {
            let last = formals.last;
            if (is(last, core.DartList<any>)) {
                let newList : core.DartList<any> = new core.DartList<lib19.FormalParameterBuilder<any>>(formals.length - 1 + last.length);
                newList.setRange(0,formals.length - 1,formals);
                newList.setRange(formals.length - 1,newList.length,last);
                for(let i : number = 0; i < last.length; i++){
                    newList[i + formals.length - 1] = last[i];
                }
                formals = newList;
            }
        }
        if (formals != null) {
            for(let formal of formals) {
                if (isNot(formal, lib19.FormalParameterBuilder<any>)) {
                    lib14.internalError(formals);
                }
            }
            formals = new core.DartList.from(formals);
        }
        this.push(beginToken.charOffset);
        this.push((formals || lib10.NullValue.FormalParameters));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFormalParameters(token : lib6.Token,kind : lib18.MemberKind) : void {
        this.push(token.charOffset);
        super.handleNoFormalParameters(token,kind);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endEnum(enumKeyword : lib6.Token,endBrace : lib6.Token,count : number) : void {
        let constantNamesAndOffsets : core.DartList<any> = this.popList(count * 2);
        let charOffset : number = this.pop();
        let name : string = this.pop();
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.addEnum(metadata,name,constantNamesAndOffsets,charOffset,endBrace.charOffset);
        this.checkEmpty(enumKeyword.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginFunctionTypeAlias(token : lib6.Token) : void {
        this.library.beginNestedDeclaration(null,{
            hasMembers : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleFunctionType(functionToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("FunctionType");
        let formals : core.DartList<lib19.FormalParameterBuilder<any>> = this.pop();
        this.pop();
        let typeVariables : core.DartList<lib15.TypeVariableBuilder<any,any>> = this.pop();
        let returnType : lib7.TypeBuilder = this.pop();
        this.push(this.library.addFunctionType(returnType,typeVariables,formals,functionToken.charOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFunctionTypeAlias(typedefKeyword : lib6.Token,equals : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("endFunctionTypeAlias");
        let formals : core.DartList<lib19.FormalParameterBuilder<any>>;
        let typeVariables : core.DartList<lib15.TypeVariableBuilder<any,any>>;
        let name : string;
        let returnType : lib7.TypeBuilder;
        let charOffset : number;
        if (op(Op.EQUALS,equals,null)) {
            formals = this.pop();
            this.pop();
            typeVariables = this.pop();
            charOffset = this.pop();
            name = this.pop();
            returnType = this.pop();
        }else {
            let type = this.pop();
            typeVariables = this.pop();
            charOffset = this.pop();
            name = this.pop();
            if (is(type, lib20.FunctionTypeBuilder)) {
                formals = type.formals;
                returnType = type.returnType;
            }else {
                this.library.addCompileTimeError(equals.charOffset,"Can't create typedef from non-function type.");
            }
        }
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.addFunctionTypeAlias(metadata,returnType,name,typeVariables,formals,charOffset);
        this.checkEmpty(typedefKeyword.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTopLevelFields(count : number,beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("endTopLevelFields");
        let namesOffsetsAndInitializers : core.DartList<any> = this.popList(count * 4);
        let type : lib7.TypeBuilder = this.pop();
        let modifiers : number = lib17.Modifier.validate(this.pop());
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.addFields(metadata,modifiers,type,namesOffsetsAndInitializers);
        this.checkEmpty(beginToken.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFields(count : number,beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("Fields");
        let namesOffsetsAndInitializers : core.DartList<any> = this.popList(count * 4);
        let type : lib7.TypeBuilder = this.pop();
        let modifiers : number = lib17.Modifier.validate(this.pop());
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.addFields(metadata,modifiers,type,namesOffsetsAndInitializers);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endTypeVariable(token : lib6.Token,extendsOrSuper : lib6.Token) : void {
        this.debugEvent("endTypeVariable");
        let bound : lib7.TypeBuilder = this.pop();
        let charOffset : number = this.pop();
        let name : string = this.pop();
        this.pop();
        this.push(this.library.addTypeVariable(name,bound,charOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endPartOf(partKeyword : lib6.Token,semicolon : lib6.Token,hasName : boolean) : void {
        this.debugEvent("endPartOf");
        this.popCharOffset();
        let containingLibrary : string = this.pop();
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        if (hasName) {
            this.library.addPartOf(metadata,containingLibrary,null);
        }else {
            this.library.addPartOf(metadata,null,containingLibrary);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstructorReference(start : lib6.Token,periodBeforeName : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("ConstructorReference");
        this.popIfNotNull(periodBeforeName);
        let suffix : string = this.popIfNotNull(periodBeforeName);
        let typeArguments : core.DartList<lib7.TypeBuilder> = this.pop();
        let charOffset : number = this.pop();
        let name : string = this.pop();
        this.push(this.library.addConstructorReference(name,typeArguments,suffix,charOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginFactoryMethod(token : lib6.Token) : void {
        this.library.beginNestedDeclaration(null,{
            hasMembers : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFactoryMethod(beginToken : lib6.Token,factoryKeyword : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("FactoryMethod");
        let kind : MethodBody = this.pop();
        let redirectionTarget : lib21.ConstructorReferenceBuilder;
        if (op(Op.EQUALS,kind,MethodBody.RedirectingFactoryBody)) {
            redirectionTarget = this.pop();
        }
        let formals : core.DartList<lib19.FormalParameterBuilder<any>> = this.pop();
        let formalsOffset : number = this.pop();
        let name = this.pop();
        let modifiers : number = lib17.Modifier.validate(this.pop());
        let metadata : core.DartList<lib8.MetadataBuilder<any>> = this.pop();
        this.library.addFactoryMethod(metadata,modifiers,name,formals,redirectionTarget,factoryKeyword.next.charOffset,formalsOffset,endToken.charOffset,this.nativeMethodName);
        this.nativeMethodName = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endRedirectingFactoryBody(beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("RedirectingFactoryBody");
        this.push(MethodBody.RedirectingFactoryBody);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endFieldInitializer(assignmentOperator : lib6.Token,token : lib6.Token) : void {
        this.debugEvent("FieldInitializer");
        this.push(assignmentOperator.next);
        this.push(token);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNoFieldInitializer(token : lib6.Token) : void {
        this.debugEvent("NoFieldInitializer");
        this.push(lib10.NullValue.FieldInitializer);
        this.push(lib10.NullValue.FieldInitializer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endInitializers(count : number,beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("Initializers");
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
    endMember() : void {
        this.debugEvent("Member");
        /* TODO (AssertStatementImpl) : assert (nativeMethodName == null); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endClassBody(memberCount : number,beginToken : lib6.Token,endToken : lib6.Token) : void {
        this.debugEvent("ClassBody");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleAsyncModifier(asyncToken : lib6.Token,starToken : lib6.Token) : void {
        this.debugEvent("AsyncModifier");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleModifier(token : lib6.Token) : void {
        this.debugEvent("Modifier");
        this.push(new lib17.Modifier.fromString(token.stringValue));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleModifiers(count : number) : void {
        this.debugEvent("Modifiers");
        this.push((this.popList(count) || lib10.NullValue.Modifiers));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleUnrecoverableError(token : lib6.Token,message : lib22.FastaMessage) : lib6.Token {
        if (this.isDartLibrary && op(Op.EQUALS,message.code,lib22.properties.codeExpectedBlockToSkip)) {
            let target = this.library.loader.target;
            let recover : lib6.Token = target.skipNativeClause(token);
            if (recover != null) {
                this.nativeMethodName = target.extractNativeMethodName(token);
                return recover;
            }
        }
        return super.handleUnrecoverableError(token,message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleMemberName(identifiers : lib23.Link<lib6.Token>) : lib23.Link<lib6.Token> {
        if (!this.isDartLibrary || identifiers.isEmpty) return identifiers;
        return lib24.removeNativeClause(identifiers);
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
