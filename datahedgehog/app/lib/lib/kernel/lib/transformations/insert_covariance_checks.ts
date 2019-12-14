/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/insert_covariance_checks.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./../type_algebra";
import * as lib5 from "./../class_hierarchy";
import * as lib6 from "./../core_types";
import * as lib7 from "./../type_environment";
import * as lib8 from "./../log";
import * as lib9 from "./../clone";
import * as lib10 from "./../visitor";

export var substituteBounds : (type : lib3.DartType,upper : core.DartMap<lib3.TypeParameter,lib3.DartType>,lower : core.DartMap<lib3.TypeParameter,lib3.DartType>) => lib3.DartType = (type : lib3.DartType,upper : core.DartMap<lib3.TypeParameter,lib3.DartType>,lower : core.DartMap<lib3.TypeParameter,lib3.DartType>) : lib3.DartType =>  {
    return lib4.Substitution.fromUpperAndLowerBounds(upper,lower).substituteType(type);
};
export namespace InsertCovarianceChecks {
    export type Constructors = 'InsertCovarianceChecks';
    export type Interface = Omit<InsertCovarianceChecks, Constructors>;
}
@DartClass
export class InsertCovarianceChecks {
    hierarchy : lib5.ClassHierarchy;

    coreTypes : lib6.CoreTypes;

    types : lib7.TypeEnvironment;

    unsafeMemberEntryPoint : core.DartMap<lib3.Member,lib3.Procedure>;

    membersWithCheckedEntryPoint : core.DartSet<lib3.Member>;

    constructor(_namedArguments? : {hierarchy? : lib5.ClassHierarchy,coreTypes? : lib6.CoreTypes}) {
    }
    @defaultConstructor
    InsertCovarianceChecks(_namedArguments? : {hierarchy? : lib5.ClassHierarchy,coreTypes? : lib6.CoreTypes}) {
        let {hierarchy,coreTypes} = Object.assign({
        }, _namedArguments );
        this.unsafeMemberEntryPoint = new core.DartMap.literal([
        ]);
        this.membersWithCheckedEntryPoint = new core.DartSet<lib3.Member>();
        this.hierarchy = hierarchy;
        this.coreTypes = coreTypes;
    }
    transformProgram(program : lib3.Program) : void {
        this.hierarchy = ( this.hierarchy ) || ( new lib5.ClassHierarchy(program) );
        this.coreTypes = ( this.coreTypes ) || ( new lib6.CoreTypes(program) );
        this.types = new lib7.TypeEnvironment(this.coreTypes,this.hierarchy);
        this.hierarchy.classes.forEach(this.transformClass.bind(this));
        program.accept(new _CallTransformer(this));
    }
    transformClass(class_ : lib3.Class) : void {
        new _ClassTransformer(class_,this).transformClass();
    }
}

export namespace _ClassTransformer {
    export type Constructors = '_ClassTransformer';
    export type Interface = Omit<_ClassTransformer, Constructors>;
}
@DartClass
export class _ClassTransformer {
    host : lib3.Class;

    hierarchy : lib5.ClassHierarchy;

    types : lib7.TypeEnvironment;

    global : InsertCovarianceChecks;

    fieldSetterParameter : core.DartMap<lib3.Field,lib3.VariableDeclaration>;

    unsafeParameterTypes : core.DartMap<lib3.VariableDeclaration,core.DartList<lib3.DartType>>;

    ownSubstitution : core.DartMap<lib3.TypeParameter,lib3.DartType>;

    ownUpperBounds : core.DartMap<lib3.TypeParameter,lib3.DartType>;

    superSubstitution : core.DartMap<lib3.TypeParameter,lib3.DartType>;

    superUpperBounds : core.DartMap<lib3.TypeParameter,lib3.DartType>;

    membersNeedingCheckedEntryPoint : core.DartMap<lib3.Name,lib3.Member>;

    constructor(host : lib3.Class,global : InsertCovarianceChecks) {
    }
    @defaultConstructor
    _ClassTransformer(host : lib3.Class,global : InsertCovarianceChecks) {
        this.fieldSetterParameter = new core.DartMap.literal([
        ]);
        this.unsafeParameterTypes = new core.DartMap<lib3.VariableDeclaration,core.DartList<lib3.DartType>>();
        this.membersNeedingCheckedEntryPoint = new core.DartMap.literal([
        ]);
        this.hierarchy = global.hierarchy;
        this.types = global.types;
        this.global = global;
        this.host = host;
    }
    addUnsafeParameter(parameter : lib3.VariableDeclaration,type : lib3.DartType,member : lib3.Member) : void {
        this.unsafeParameterTypes.putIfAbsent(parameter,() =>  {
            return new core.DartList.literal<lib3.DartType>();
        }).add(type);
        this.requireLocalCheckedEntryPoint(member);
    }
    getFieldSetterParameter(field : lib3.Field) : lib3.VariableDeclaration {
        return this.fieldSetterParameter.putIfAbsent(field,() =>  {
            return new lib3.VariableDeclaration(`${field.name.name}_`,{
                type : field.type});
        });
    }
    addUnsafeField(field : lib3.Field,type : lib3.DartType) : void {
        this.addUnsafeParameter(this.getFieldSetterParameter(field),type,field);
    }
    hasCheckedEntryPoint(member : lib3.Member,_namedArguments? : {setter? : boolean}) : boolean {
        let {setter} = Object.assign({
            "setter" : false}, _namedArguments );
        if (!setter && is(member, lib3.Field)) {
            return false;
        }
        return this.global.membersWithCheckedEntryPoint.contains(member);
    }
    requireLocalCheckedEntryPoint(member : lib3.Member) : void {
        this.membersNeedingCheckedEntryPoint.set(member.name,member);
        this.global.membersWithCheckedEntryPoint.add(member);
    }
    transformClass() : void {
        if (this.host.isMixinApplication) {
            throw 'Mixin applications must be resolved before inserting covariance ' + 'checks';
        }
        if (this.host.typeParameters.isNotEmpty) {
            let upperBounds = lib4.getUpperBoundSubstitutionMap(this.host);
            for(let field of this.host.fields) {
                if (field.hasImplicitSetter) {
                    let rawType = substituteBounds(field.type,upperBounds,new core.DartMap.literal([
                    ]));
                    if (!core.identical(rawType,field.type)) {
                        this.requireLocalCheckedEntryPoint(field);
                        this.addUnsafeField(field,rawType);
                    }
                }
            }
            for(let procedure of this.host.procedures) {
                if (procedure.isStatic) continue;
                var handleParameter : (parameter : lib3.VariableDeclaration) => void = (parameter : lib3.VariableDeclaration) : void =>  {
                    let rawType = substituteBounds(parameter.type,upperBounds,new core.DartMap.literal([
                    ]));
                    if (!core.identical(rawType,parameter.type)) {
                        this.requireLocalCheckedEntryPoint(procedure);
                        this.addUnsafeParameter(parameter,rawType,procedure);
                    }
                };
                procedure.function.positionalParameters.forEach(handleParameter);
                procedure.function.namedParameters.forEach(handleParameter);
            }
        }
        this.hierarchy.forEachOverridePair(this.host,(ownMember : lib3.Member,superMember : lib3.Member,isSetter : boolean) =>  {
            if (this.hasCheckedEntryPoint(superMember,{
                setter : isSetter})) {
                this.requireLocalCheckedEntryPoint(ownMember);
            }
            if (superMember.enclosingClass.typeParameters.isEmpty) return;
            this.ownSubstitution = lib4.getSubstitutionMap(this.hierarchy.getClassAsInstanceOf(this.host,ownMember.enclosingClass));
            this.ownUpperBounds = lib4.getUpperBoundSubstitutionMap(ownMember.enclosingClass);
            this.superSubstitution = lib4.getSubstitutionMap(this.hierarchy.getClassAsInstanceOf(this.host,superMember.enclosingClass));
            this.superUpperBounds = lib4.getUpperBoundSubstitutionMap(superMember.enclosingClass);
            if (is(ownMember, lib3.Procedure)) {
                if (is(superMember, lib3.Procedure)) {
                    this.checkProcedureOverride(ownMember,superMember);
                }else if (is(superMember, lib3.Field) && isSetter) {
                    this.checkSetterFieldOverride(ownMember,superMember);
                }
            }else if (isSetter) {
                this.checkFieldOverride(ownMember,superMember);
            }
        });
        for(let member of this.membersNeedingCheckedEntryPoint.values) {
            this.ownSubstitution = lib4.getSubstitutionMap(this.hierarchy.getClassAsInstanceOf(this.host,member.enclosingClass));
            this.ownSubstitution = _ClassTransformer.ensureMutable(this.ownSubstitution);
            this.generateCheckedEntryPoint(member);
        }
    }
    getSafeType(inputTypes : core.DartList<lib3.DartType>) : lib3.DartType {
        let safeType = inputTypes[0];
        for(let i : number = 1; i < inputTypes.length; ++i){
            if (inputTypes[i] != safeType) {
                return new lib3.DynamicType();
            }
        }
        return safeType;
    }
    fail(message : string) : void {
        lib8.properties.log.warning(`[unsoundness] ${message}`);
    }
    checkFieldOverride(field : lib3.Field,superMember : lib3.Member) : void {
        let fieldType = substituteBounds(field.type,this.ownUpperBounds,this.ownSubstitution);
        let superType = substituteBounds(superMember.setterType,this.superUpperBounds,this.superSubstitution);
        if (!this.types.isSubtypeOf(superType,fieldType)) {
            this.addUnsafeField(field,superType);
        }
    }
    checkSetterFieldOverride(ownMember : lib3.Procedure,superMember : lib3.Field) : void {
        /* TODO (AssertStatementImpl) : assert (ownMember.isSetter); */;
        let ownParameter = ownMember.function.positionalParameters[0];
        let ownType = substituteBounds(ownParameter.type,this.ownUpperBounds,this.ownSubstitution);
        let superType = substituteBounds(superMember.setterType,this.superUpperBounds,this.superSubstitution);
        if (!this.types.isSubtypeOf(superType,ownType)) {
            this.addUnsafeParameter(ownParameter,superType,ownMember);
        }
    }
    checkProcedureOverride(ownMember : lib3.Procedure,superMember : lib3.Procedure) : void {
        let ownFunction = ownMember.function;
        let superFunction = superMember.function;
        if (ownFunction.requiredParameterCount > superFunction.requiredParameterCount) {
            this.fail(`${ownMember} requires more parameters than ${superMember}`);
            return;
        }
        if (ownFunction.positionalParameters.length < superFunction.positionalParameters.length) {
            this.fail(`${ownMember} allows fewer parameters than ${superMember}`);
            return;
        }
        if (ownFunction.typeParameters.length != superFunction.typeParameters.length) {
            this.fail(`${ownMember} declares a different number of type parameters ` + `than ${superMember}`);
            return;
        }
        if (superFunction.typeParameters.isNotEmpty) {
            this.superSubstitution = _ClassTransformer.ensureMutable(this.superSubstitution);
            this.superUpperBounds = _ClassTransformer.ensureMutable(this.superUpperBounds);
        }
        for(let i : number = 0; i < superFunction.typeParameters.length; ++i){
            let ownTypeParameter = ownFunction.typeParameters[i];
            let superTypeParameter = superFunction.typeParameters[i];
            let type = new lib3.TypeParameterType(ownTypeParameter);
            this.superSubstitution.set(superTypeParameter,type);
            this.superUpperBounds.set(superTypeParameter,type);
        }
        var checkParameterPair : (ownParameter : lib3.VariableDeclaration,superParameter : lib3.VariableDeclaration) => void = (ownParameter : lib3.VariableDeclaration,superParameter : lib3.VariableDeclaration) : void =>  {
            let ownType = lib4.substitute(ownParameter.type,this.ownSubstitution);
            let superType = substituteBounds(superParameter.type,this.superUpperBounds,this.superSubstitution);
            if (!this.types.isSubtypeOf(superType,ownType)) {
                this.addUnsafeParameter(ownParameter,superType,ownMember);
            }
        };
        for(let i : number = 0; i < superFunction.positionalParameters.length; ++i){
            checkParameterPair(ownFunction.positionalParameters[i],superFunction.positionalParameters[i]);
        }
        for(let i : number = 0; i < superFunction.namedParameters.length; ++i){
            let superParameter = superFunction.namedParameters[i];
            let found : boolean = false;
            for(let j : number = 0; j < ownFunction.namedParameters.length; ++j){
                let ownParameter = ownFunction.namedParameters[j];
                if (ownParameter.name == superParameter.name) {
                    found = true;
                    checkParameterPair(ownParameter,superParameter);
                    break;
                }
            }
            if (!found) {
                this.fail(`${ownMember} is missing the named parameter ` + `${superParameter.name} from ${superMember}`);
            }
        }
    }
    generateCheckedEntryPoint(member : lib3.Member) : void {
        if (is(member, lib3.Procedure)) {
            this.generateCheckedProcedure(member);
        }else {
            this.generateCheckedFieldSetter(member);
        }
    }
    generateCheckedProcedure(procedure : lib3.Procedure) : void {
        let function = procedure.function;
        let body = function.body;
        function.body = null;
        let cloner = new lib9.CloneVisitor({
            typeSubstitution : this.ownSubstitution});
        let checkedProcedure : lib3.Procedure = cloner.clone(procedure);
        let checkedFunction : lib3.FunctionNode = checkedProcedure.function;
        function.body = body;
        checkedFunction.asyncMarker = lib3.AsyncMarker.Sync;
        checkedProcedure.isExternal = false;
        var getParameter : (parameter : lib3.VariableDeclaration) => lib3.Expression = (parameter : lib3.VariableDeclaration) : lib3.Expression =>  {
            let cloneParameter = cloner.variables.get(parameter);
            let unsafeInputs = this.unsafeParameterTypes.get(parameter);
            if (unsafeInputs == null) {
                return new lib3.VariableGet(cloneParameter);
            }
            let targetType = cloneParameter.type;
            cloneParameter.type = cloner.visitType(this.getSafeType(unsafeInputs));
            return ((_) : lib3.AsExpression =>  {
                {
                    _.fileOffset = parameter.fileOffset;
                    return _;
                }
            })(new lib3.AsExpression(new lib3.VariableGet(cloneParameter),targetType));
        };
        let types = checkedFunction.typeParameters.map((p : any) =>  {
            return new lib3.TypeParameterType(p);
        }).toList();
        let positional = function.positionalParameters.map(getParameter).toList();
        let named = function.namedParameters.map((p : any) =>  {
            return new lib3.NamedExpression(p.name,getParameter(p));
        }).toList();
        checkedProcedure.name = _ClassTransformer.covariantCheckedName(procedure.name);
        this.host.addMember(checkedProcedure);
        if (!procedure.isAbstract && !procedure.isInExternalLibrary) {
            let call = procedure.isSetter ? new lib3.DirectPropertySet(new lib3.ThisExpression(),procedure,positional[0]) : new lib3.DirectMethodInvocation(new lib3.ThisExpression(),procedure,new lib3.Arguments(positional,{
                named : named,types : types}));
            let checkedBody = is(function.returnType, lib3.VoidType) ? new lib3.ExpressionStatement(call) : new lib3.ReturnStatement(call);
            checkedFunction.body = ((_) : lib3.Statement =>  {
                {
                    _.parent = checkedFunction;
                    return _;
                }
            })(checkedBody);
        }
        if (op(Op.EQUALS,procedure.enclosingClass,this.host)) {
            this.global.unsafeMemberEntryPoint.set(procedure,checkedProcedure);
        }
    }
    generateCheckedFieldSetter(field : lib3.Field) : void {
        let parameter = this.getFieldSetterParameter(field);
        let unsafeTypes = this.unsafeParameterTypes.get(parameter);
        let argument : lib3.Expression = new lib3.VariableGet(parameter);
        if (unsafeTypes != null) {
            let castType = lib4.substitute(field.type,this.ownSubstitution);
            argument = ((_) : lib3.AsExpression =>  {
                {
                    _.fileOffset = field.fileOffset;
                    return _;
                }
            })(new lib3.AsExpression(argument,castType));
            let inputType = lib4.substitute(this.getSafeType(unsafeTypes),this.ownSubstitution);
            parameter.type = inputType;
        }
        let body : lib3.Statement = field.isInExternalLibrary ? null : new lib3.ExpressionStatement(new lib3.DirectPropertySet(new lib3.ThisExpression(),field,argument));
        let setter = ((_) : lib3.Procedure =>  {
            {
                _.fileUri = field.fileUri;
                return _;
            }
        })(new lib3.Procedure(_ClassTransformer.covariantCheckedName(field.name),lib3.ProcedureKind.Setter,new lib3.FunctionNode(body,{
            positionalParameters : new core.DartList.literal(parameter)})));
        this.host.addMember(setter);
        if (op(Op.EQUALS,field.enclosingClass,this.host)) {
            this.global.unsafeMemberEntryPoint.set(field,setter);
        }
    }
    static covariantCheckedName(name : lib3.Name) : lib3.Name {
        return new lib3.Name(`${name.name}$cc`,name.library);
    }
    static ensureMutable(map : core.DartMap<lib3.TypeParameter,lib3.DartType>) : core.DartMap<lib3.TypeParameter,lib3.DartType> {
        if (map.isEmpty) return new core.DartMap.literal([
        ]);
        return map;
    }
}

export namespace _CallTransformer {
    export type Constructors = lib10.RecursiveVisitor.Constructors | '_CallTransformer';
    export type Interface = Omit<_CallTransformer, Constructors>;
}
@DartClass
export class _CallTransformer extends lib10.RecursiveVisitor<any> {
    global : InsertCovarianceChecks;

    types : lib7.TypeEnvironment;

    checkedInterfaceMethod : core.DartMap<lib3.Member,lib3.Procedure>;

    constructor(global : InsertCovarianceChecks) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CallTransformer(global : InsertCovarianceChecks) {
        this.checkedInterfaceMethod = global.unsafeMemberEntryPoint;
        this.types = global.types;
        this.global = global;
    }
    getChecked(receiver : lib3.Expression,member : lib3.Member) : lib3.Member {
        let checked = this.checkedInterfaceMethod.get(member);
        if (op(Op.EQUALS,checked,null)) return member;
        if (!this.receiverNeedsChecks(receiver)) return member;
        return checked;
    }
    receiverNeedsChecks(node : lib3.Expression) : boolean {
        if (is(node, lib3.ThisExpression)) return false;
        let type = node.getStaticType(this.types);
        if (is(type, lib3.InterfaceType) && type.typeArguments.every(this.isSealedType.bind(this))) {
            return false;
        }
        return true;
    }
    isSealedType(type : lib3.DartType) : boolean {
        return is(type, lib3.InterfaceType) && this.types.isSealedClass(type.classNode);
    }
    isTrustedLibrary(node : lib3.Library) : boolean {
        return node.importUri.scheme == 'dart';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClass(node : lib3.Class) {
        this.types.thisType = node.thisType;
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibrary(node : lib3.Library) {
        if (!this.isTrustedLibrary(node)) {
            node.visitChildren(this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : lib3.MethodInvocation) {
        let target = this.getChecked(node.receiver,node.interfaceTarget);
        if (target != null) {
            node.interfaceTarget = target;
            node.name = target.name;
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertySet(node : lib3.PropertySet) {
        let target = this.getChecked(node.receiver,node.interfaceTarget);
        if (target != null) {
            node.interfaceTarget = target;
            node.name = target.name;
        }
        node.visitChildren(this);
    }
}

export class properties {
}
