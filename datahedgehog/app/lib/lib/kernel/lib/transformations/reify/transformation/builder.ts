/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/reify/transformation/builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "./binding";
import * as lib5 from "./../asts";

export namespace Scope {
    export type Constructors = 'Scope';
    export type Interface = Omit<Scope, Constructors>;
}
@DartClass
export class Scope {
    names : core.DartMap<string,any>;

    nameAlreadyTaken(name : string,node : any) : boolean {
        let existing : any = this.names.get(name);
        return existing != null && op(Op.EQUALS,existing,node);
    }
    add(name : string,node : any) : void {
        /* TODO (AssertStatementImpl) : assert (!nameAlreadyTaken(name, node)); */;
        this.names.set(name,node);
    }
    constructor() {
    }
    @defaultConstructor
    Scope() {
        this.names = new core.DartMap.literal([
        ]);
    }
}

export namespace Namer {
    export type Constructors = 'Namer';
    export type Interface = Omit<Namer, Constructors>;
}
@DartClass
export class Namer {
    scope : Scope;

    constructor(scope? : Scope) {
    }
    @defaultConstructor
    Namer(scope? : Scope) {
        this.scope = (scope || new Scope());
    }
    _getProposal(node : any) : string {
        if (is(node, any)) {
            return node.name;
        }
        throw `unsupported node: ${node}`;
    }
    getNameFor(node : any) : string {
        let base : string = this._getProposal(node);
        let id : number = 0;
        let proposal : string = base;
        while (this.scope.nameAlreadyTaken(proposal,node)){
            proposal = `${base}${++id}`;
        }
        this.scope.add(proposal,node);
        return proposal;
    }
}

export namespace RuntimeTypeSupportBuilder {
    export type Constructors = 'RuntimeTypeSupportBuilder';
    export type Interface = Omit<RuntimeTypeSupportBuilder, Constructors>;
}
@DartClass
export class RuntimeTypeSupportBuilder {
    reifiedClassIds : core.DartLinkedHashMap<any,number>;

    currentDeclarationId : number;

    declarations : any;

    rtiLibrary : lib4.RuntimeLibrary;

    coreTypes : any;

    declarationType : any;

    constructor(rtiLibrary : lib4.RuntimeLibrary,coreTypes : any,mainLibrary : any) {
    }
    @defaultConstructor
    RuntimeTypeSupportBuilder(rtiLibrary : lib4.RuntimeLibrary,coreTypes : any,mainLibrary : any) {
        this.reifiedClassIds = new core.DartLinkedHashMap<any,number>();
        this.currentDeclarationId = 0;
        this.indexOperatorName = new bare.createInstance(any,null,"[]");
        this.declarations = new bare.createInstance(any,null,new bare.createInstance(any,null,"$declarations"),{
            isFinal : true,isStatic : true,fileUri : mainLibrary.fileUri});
        this.declarationType = new bare.createInstance(any,null,coreTypes.listClass,new core.DartList.literal<any>(rtiLibrary.declarationClass.rawType));
        this.rtiLibrary = rtiLibrary;
        this.coreTypes = coreTypes;
        mainLibrary.addMember(this.declarations);
    }
    addDeclaration(cls : any) : number {
        return this.reifiedClassIds.putIfAbsent(cls,() =>  {
            return this.currentDeclarationId++;
        });
    }
    indexOperatorName : any;

    createArrayAccess(target : any,index : number) : any {
        return new bare.createInstance(any,null,target,this.indexOperatorName,new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,index))));
    }
    createAccessDeclaration(cls : any) : any {
        return this.createArrayAccess(new bare.createInstance(any,null,this.declarations),this.addDeclaration(cls));
    }
    getTypeTestTagName(cls : any) : any {
        return new bare.createInstance(any,null,`$is$${cls.name}`);
    }
    typeVariableGetterName(parameter : any) : any {
        let cls : any = lib5.getEnclosingClass(parameter);
        return new bare.createInstance(any,null,`$${cls.name}$${parameter.name}`);
    }
    attachTypeToConstructorInvocation(invocation : any,member : any) : any {
        /* TODO (AssertStatementImpl) : assert (member is Procedure && member.kind == ProcedureKind.Factory || member is Constructor); */;
        let targetClass : any = member.parent;
        /* TODO (AssertStatementImpl) : assert (targetClass != null); */;
        let type : any = new bare.createInstance(any,null,targetClass,invocation.arguments.types);
        return this.callAttachType(invocation,type);
    }
    callAttachType(expression : any,type : any) : any {
        return new bare.createInstance(any,null,this.rtiLibrary.attachTypeFunction,new bare.createInstance(any,null,new core.DartList.literal<any>(expression,this.createRuntimeType(type))));
    }
    createGetType(receiver : any,_namedArguments? : {needsInterceptor? : any}) : any {
        let {needsInterceptor} = Object.assign({
            "needsInterceptor" : true}, _namedArguments );
        if (is(receiver, any) || !needsInterceptor) {
            return new bare.createInstance(any,null,receiver,this.rtiLibrary.runtimeTypeName);
        }
        return new bare.createInstance(any,null,this.rtiLibrary.interceptorFunction,new bare.createInstance(any,null,new core.DartList.literal<any>(receiver)));
    }
    createGetTypeArguments(typeObject : any) : any {
        return new bare.createInstance(any,null,this.rtiLibrary.typeArgumentsFunction,new bare.createInstance(any,null,new core.DartList.literal<any>(typeObject)));
    }
    createIsSubtypeOf(receiver : any,typeExpression : any,_namedArguments? : {targetHasTypeProperty? : any}) : any {
        let {targetHasTypeProperty} = Object.assign({
            "targetHasTypeProperty" : false}, _namedArguments );
        let receiverType : any = this.createGetType(receiver,{
            needsInterceptor : !targetHasTypeProperty});
        return new bare.createInstance(any,null,this.rtiLibrary.isSubtypeOfFunction,new bare.createInstance(any,null,new core.DartList.literal<any>(receiverType,typeExpression)));
    }
    getTypeVariableIndex(variable : any) : number {
        let c : any = lib5.getEnclosingClass(variable);
        let variables : core.DartList<any> = c.typeParameters;
        for(let i : number = 0; i < variables.length; ++i){
            if (op(Op.EQUALS,variables[i].name,variable.name)) {
                return i;
            }
        }
        throw new core.Exception(`Type variable ${variable} not found in enclosing class ${c}`);
    }
    createNewInterface(declaration : any,typeArgumentList : any) : any {
        let arguments : core.DartList<any> = new core.DartList.literal<any>(declaration);
        if (typeArgumentList != null) {
            arguments.add(typeArgumentList);
        }
        return new bare.createInstance(any,null,this.rtiLibrary.interfaceTypeConstructor,new bare.createInstance(any,null,arguments));
    }
    matchesTypeParameters(types : core.DartList<any>) : boolean {
        let parameters : core.DartList<any>;
        for(let i : number = 0; i < types.length; ++i){
            let type = types[i];
            if (is(type, any)) {
                if (parameters == null) {
                    let cls : any = lib5.getEnclosingClass(type.parameter);
                    parameters = cls.typeParameters;
                    if (parameters.length != types.length) return false;
                }
                if (type.parameter != parameters[i]) {
                    return false;
                }
            }else {
                return false;
            }
        }
        return true;
    }
    createRuntimeType(type : any,_namedArguments? : {reifyTypeVariable? : any,createReference? : (cls : any) => any,typeContext? : any}) : any {
        let {reifyTypeVariable,createReference,typeContext} = Object.assign({
            "reifyTypeVariable" : false}, _namedArguments );
        var buildReifiedTypeVariable : (type : any) => any = (type : any) : any =>  {
            let typeVariables : any = new bare.createInstance(any,null,createReference(type.parameter.parent),this.rtiLibrary.variablesFieldName);
            return this.createArrayAccess(typeVariables,this.getTypeVariableIndex(type.parameter));
        };
        var buildDirectTypeVariableAccess : (variable : any) => any = (variable : any) : any =>  {
            let cls : any = lib5.getEnclosingClass(variable.parameter);
            return this.extractTypeVariable(cls,variable.parameter,this.getTypeVariableIndex(variable.parameter),new bare.createInstance(any,null,typeContext));
        };
        var buildGetterTypeVariableAccess : (type : any) => any = (type : any) : any =>  {
            return new bare.createInstance(any,null,new bare.createInstance(any,null),this.typeVariableGetterName(type.parameter));
        };
        var buildTypeVariable : (type : any) => any = (type : any) : any =>  {
            if (reifyTypeVariable) {
                /* TODO (AssertStatementImpl) : assert (typeContext == null); */;
                return buildReifiedTypeVariable(type);
            }else if (typeContext != null) {
                return buildDirectTypeVariableAccess(type);
            }else {
                return buildGetterTypeVariableAccess(type);
            }
        };
        createReference = ( createReference ) || ( this.createAccessDeclaration.bind(this) );
        var createPart : (type : any) => any = (type : any) : any =>  {
            return this.createRuntimeType(type,{
                reifyTypeVariable : reifyTypeVariable,createReference : createReference,typeContext : typeContext});
        };
        if (is(type, any) || is(type, any)) {
            let interfaceType : any = (is(type, any)) ? type : (type as any).asInterfaceType;
            let cls : any = interfaceType.classNode;
            let declaration : any = createReference(cls);
            let typeArguments : core.DartList<any> = interfaceType.typeArguments;
            let typeArgumentList : any;
            if (typeArguments.isNotEmpty) {
                if (!reifyTypeVariable && this.matchesTypeParameters(typeArguments)) {
                    let parameterType : any = typeArguments[0];
                    let cls : any = parameterType.parameter.parent;
                    let typeObject : any = typeContext != null ? new bare.createInstance(any,null,typeContext) : this.createGetType(new bare.createInstance(any,null));
                    typeArgumentList = this.createGetTypeArguments(this.createCallAsInstanceOf(typeObject,cls));
                }else {
                    typeArgumentList = new bare.createInstance(any,null,typeArguments.map(createPart).toList());
                }
            }
            return this.createNewInterface(declaration,typeArgumentList);
        }else if (is(type, any)) {
            return new bare.createInstance(any,null,this.rtiLibrary.dynamicTypeConstructor,new bare.createInstance(any,null,new core.DartList.literal()),{
                isConst : true});
        }else if (is(type, any)) {
            return buildTypeVariable(type);
        }else if (is(type, any)) {
            let functionType : any = type;
            let returnType : any = createPart(functionType.returnType);
            let encodedParameterTypes : core.DartList<any> = functionType.positionalParameters.map(createPart).toList();
            let namedParameters : core.DartList<any> = functionType.namedParameters;
            let data : number;
            if (namedParameters.isNotEmpty) {
                for(let param of namedParameters) {
                    encodedParameterTypes.add(new bare.createInstance(any,null,param.name));
                    encodedParameterTypes.add(createPart(param.type));
                }
                data = op(Op.BITOR,op(Op.SHIFTLEFT,functionType.namedParameters.length,1),1);
            }else {
                data = op(Op.SHIFTLEFT,(op(Op.MINUS,functionType.positionalParameters.length,functionType.requiredParameterCount)),1);
            }
            let functionTypeExpression : any = new bare.createInstance(any,null,this.rtiLibrary.interfaceTypeConstructor,new bare.createInstance(any,null,new core.DartList.literal<any>(createReference(this.coreTypes.functionClass))));
            let arguments : any = new bare.createInstance(any,null,new core.DartList.literal<any>(functionTypeExpression,returnType,new bare.createInstance(any,null,data),new bare.createInstance(any,null,encodedParameterTypes)));
            return new bare.createInstance(any,null,this.rtiLibrary.functionTypeConstructor,arguments);
        }else if (is(type, any)) {
            return new bare.createInstance(any,null,this.rtiLibrary.voidTypeConstructor,new bare.createInstance(any,null,new core.DartList.literal<any>()));
        }
        return new bare.createInstance(any,null);
    }
    createCallAsInstanceOf(receiver : any,cls : any) : any {
        return new bare.createInstance(any,null,this.rtiLibrary.asInstanceOfFunction,new bare.createInstance(any,null,new core.DartList.literal<any>(receiver,this.createAccessDeclaration(cls))));
    }
    createTypeVariableGetter(cls : any,variable : any,index : number) : any {
        let type : any = this.createGetType(new bare.createInstance(any,null));
        let argument : any = this.extractTypeVariable(cls,variable,index,type);
        return new bare.createInstance(any,null,this.typeVariableGetterName(variable),ProcedureKind.Getter,new bare.createInstance(any,null,new bare.createInstance(any,null,argument),{
            returnType : this.rtiLibrary.typeType}),{
            fileUri : cls.fileUri});
    }
    extractTypeVariable(cls : any,variable : any,index : number,typeObject : any) : any {
        let type : any = this.createCallAsInstanceOf(typeObject,cls);
        let arguments : any = new bare.createInstance(any,null,this.rtiLibrary.typeArgumentsFunction,new bare.createInstance(any,null,new core.DartList.literal<any>(type)));
        return this.createArrayAccess(arguments,index);
    }
    insertAsFirstArgument(arguments : any,expression : any) : void {
        expression.parent = arguments;
        arguments.positional.insert(0,expression);
    }
    createCallInit(declarations : any,index : number,supertype : any,interfaces : core.DartList<any>,callableType : any) : any {
        var createReference : (declaration : any) => any = (declaration : any) : any =>  {
            let id : number = op(Op.INDEX,this.reifiedClassIds,declaration);
            return this.createArrayAccess(new bare.createInstance(any,null,declarations),id);
        };
        var isNotMarkerInterface : (interface : any) => boolean = (interface : any) : boolean =>  {
            return interface.classNode != this.rtiLibrary.markerClass;
        };
        var createLocalType : (type : any) => any = (type : any) : any =>  {
            if (op(Op.EQUALS,type,null)) return null;
            return this.createRuntimeType(type,{
                reifyTypeVariable : true,createReference : createReference});
        };
        let supertypeExpression : any = op(Op.EQUALS,supertype,null) ? new bare.createInstance(any,null) : createLocalType(supertype);
        let interfaceTypes : core.DartList<any> = interfaces.where(isNotMarkerInterface).map(createLocalType).toList({
            growable : false});
        let callableTypeExpression : any = createLocalType(callableType);
        let arguments : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,declarations),new bare.createInstance(any,null,index),supertypeExpression);
        if (interfaceTypes.isNotEmpty || callableTypeExpression != null) {
            arguments.add(new bare.createInstance(any,null,interfaceTypes));
            if (callableTypeExpression != null) {
                arguments.add(callableTypeExpression);
            }
        }
        return new bare.createInstance(any,null,this.rtiLibrary.initFunction,new bare.createInstance(any,null,arguments));
    }
    createDeclarationsInitializer() : any {
        let statements : core.DartList<any> = new core.DartList.literal<any>();
        let classNamer : Namer = new Namer();
        let names : core.DartList<any> = new core.DartList.literal<any>();
        let parameterCount : core.DartList<any> = new core.DartList.literal<any>();
        this.reifiedClassIds.keys.forEach((c : any) =>  {
            names.add(new bare.createInstance(any,null,classNamer.getNameFor(c)));
            parameterCount.add(new bare.createInstance(any,null,c.typeParameters.length));
        });
        let namesList : any = new bare.createInstance(any,null,names);
        let parameterCountList : any = new bare.createInstance(any,null,parameterCount);
        let callAllocate : any = new bare.createInstance(any,null,this.rtiLibrary.allocateDeclarationsFunction,new bare.createInstance(any,null,new core.DartList.literal<any>(namesList,parameterCountList)));
        let parameter : any = new bare.createInstance(any,null,"d",{
            type : this.declarationType});
        this.reifiedClassIds.forEach((cls : any,id : number) =>  {
            if (op(Op.EQUALS,cls,this.rtiLibrary.markerClass)) return;
            let callableType : any;
            let call : any = cls.procedures.firstWhere((p : any) =>  {
                return op(Op.EQUALS,p.name.name,"call");
            },{
                orElse : () =>  {
                    return null;
                }});
            if (call != null) {
                let function : any = call.function;
                let namedParameters = new core.DartList<any>();
                for(let v of function.namedParameters) {
                    namedParameters.add(new bare.createInstance(any,null,v.name,v.type));
                }
                let positionalArguments : core.DartList<any> = function.positionalParameters.map((v : any) =>  {
                    return v.type;
                }).toList();
                callableType = new bare.createInstance(any,null,positionalArguments,function.returnType,{
                    namedParameters : namedParameters,requiredParameterCount : function.requiredParameterCount});
            }
            statements.add(new bare.createInstance(any,null,this.createCallInit(parameter,id,((t)=>(!!t)?t.asInterfaceType:null)(cls.supertype),cls.implementedTypes.map((type : any) =>  {
                return ((t)=>(!!t)?t.asInterfaceType:null)(type);
            }).toList(),callableType)));
        });
        statements.add(new bare.createInstance(any,null,new bare.createInstance(any,null,parameter)));
        let function : any = new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,statements),{
            positionalParameters : new core.DartList.literal<any>(parameter),returnType : this.declarationType}));
        return new bare.createInstance(any,null,function,new bare.createInstance(any,null,"call"),new bare.createInstance(any,null,new core.DartList.literal<any>(callAllocate)));
    }
    createDeclarations() : void {
        var collectNewReferencedClasses : (type : any,newClasses : core.DartSet<any>) => void = (type : any,newClasses : core.DartSet<any>) : void =>  {
            if (is(type, any) || is(type, any)) {
                let interfaceType : any = null;
                if (is(type, any)) {
                    interfaceType = type;
                }else {
                    interfaceType = (type as any).asInterfaceType;
                }
                let cls : any = interfaceType.classNode;
                if (!this.reifiedClassIds.containsKey(cls) && !newClasses.contains(cls)) {
                    newClasses.add(cls);
                }
                interfaceType.typeArguments.forEach((argument : any) =>  {
                    collectNewReferencedClasses(argument,newClasses);
                });
            }
        };
        let classes : core.DartIterable<any> = this.reifiedClassIds.keys;
        while (classes.isNotEmpty){
            let newClasses : core.DartSet<any> = new core.DartSet<any>();
            for(let c of classes) {
                collectNewReferencedClasses(((t)=>(!!t)?t.asInterfaceType:null)(c.supertype),newClasses);
                c.implementedTypes.forEach((supertype : any) =>  {
                    collectNewReferencedClasses(((t)=>(!!t)?t.asInterfaceType:null)(supertype),newClasses);
                });
            }
            for(let newClass of newClasses) {
                this.addDeclaration(newClass);
            }
            classes = newClasses;
        }
        let initializer : any = this.createDeclarationsInitializer();
        initializer.parent = this.declarations;
        this.declarations.initializer = initializer;
        this.declarations.type = this.declarationType;
    }
    createGetter(name : any,expression : any,cls : any,type : any) : any {
        return new bare.createInstance(any,null,name,ProcedureKind.Getter,new bare.createInstance(any,null,new bare.createInstance(any,null,expression),{
            returnType : type}),{
            fileUri : cls.fileUri});
    }
}

export class properties {
}
