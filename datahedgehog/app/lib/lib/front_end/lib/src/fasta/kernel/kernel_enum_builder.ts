/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_enum_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../source/source_class_builder";
import * as lib4 from "./../builder/enum_builder";
import * as lib5 from "./kernel_named_type_builder";
import * as lib6 from "./../builder/metadata_builder";
import * as lib7 from "./../scope";
import * as lib8 from "./../builder/library_builder";
import * as lib9 from "./kernel_library_builder";
import * as lib10 from "./kernel_type_builder";
import * as lib11 from "./../builder/member_builder";
import * as lib12 from "./../modifier";
import * as lib13 from "./kernel_field_builder";
import * as lib14 from "./kernel_formal_parameter_builder";
import * as lib15 from "./../builder/formal_parameter_builder";
import * as lib16 from "./kernel_procedure_builder";
import * as lib17 from "./../errors";
import * as lib18 from "./frontend_accessors";
import * as lib19 from "./kernel_class_builder";
import * as lib20 from "@dart2ts/dart/uri";
import * as lib21 from "./../builder/builder";

export namespace KernelEnumBuilder {
    export type Constructors = lib3.SourceClassBuilder.Constructors | 'internal';
    export type Interface = Omit<KernelEnumBuilder, Constructors>;
}
@DartClass
@Implements(lib4.EnumBuilder)
export class KernelEnumBuilder extends lib3.SourceClassBuilder implements lib4.EnumBuilder.Interface<lib10.KernelTypeBuilder,any> {
    constantNamesAndOffsets : core.DartList<core.DartObject>;

    toStringMap : any;

    intType : lib5.KernelNamedTypeBuilder;

    stringType : lib5.KernelNamedTypeBuilder;

    objectType : lib5.KernelNamedTypeBuilder;

    listType : lib5.KernelNamedTypeBuilder;

    @namedConstructor
    internal(metadata : core.DartList<lib6.MetadataBuilder<any>>,name : string,scope : lib7.Scope,constructors : lib7.Scope,cls : any,constantNamesAndOffsets : core.DartList<core.DartObject>,toStringMap : any,intType : lib5.KernelNamedTypeBuilder,listType : lib5.KernelNamedTypeBuilder,objectType : lib5.KernelNamedTypeBuilder,stringType : lib5.KernelNamedTypeBuilder,parent : lib8.LibraryBuilder<any,any>,charOffset : number) {
        super.SourceClassBuilder(metadata,0,name,null,null,null,scope,constructors,parent,null,charOffset,cls);
        this.constantNamesAndOffsets = constantNamesAndOffsets;
        this.toStringMap = toStringMap;
        this.intType = intType;
        this.listType = listType;
        this.objectType = objectType;
        this.stringType = stringType;
    }
    static internal : new(metadata : core.DartList<lib6.MetadataBuilder<any>>,name : string,scope : lib7.Scope,constructors : lib7.Scope,cls : any,constantNamesAndOffsets : core.DartList<core.DartObject>,toStringMap : any,intType : lib5.KernelNamedTypeBuilder,listType : lib5.KernelNamedTypeBuilder,objectType : lib5.KernelNamedTypeBuilder,stringType : lib5.KernelNamedTypeBuilder,parent : lib8.LibraryBuilder<any,any>,charOffset : number) => KernelEnumBuilder;

    constructor(astFactory : any,metadata : core.DartList<lib6.MetadataBuilder<any>>,name : string,constantNamesAndOffsets : core.DartList<core.DartObject>,parent : lib9.KernelLibraryBuilder,charOffset : number,charEndOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $KernelEnumBuilder(astFactory : any,metadata : core.DartList<lib6.MetadataBuilder<any>>,name : string,constantNamesAndOffsets : core.DartList<core.DartObject>,parent : lib9.KernelLibraryBuilder,charOffset : number,charEndOffset : number) : KernelEnumBuilder {
        constantNamesAndOffsets = ( constantNamesAndOffsets ) || ( new core.DartList.literal<core.DartObject>() );
        let intType : lib10.KernelTypeBuilder = new lib5.KernelNamedTypeBuilder("int",null,charOffset,parent.fileUri);
        let stringType : lib10.KernelTypeBuilder = new lib5.KernelNamedTypeBuilder("String",null,charOffset,parent.fileUri);
        let objectType : lib5.KernelNamedTypeBuilder = new lib5.KernelNamedTypeBuilder("Object",null,charOffset,parent.fileUri);
        let cls : any = new bare.createInstance(any,null,{
            name : name});
        let members : core.DartMap<string,lib11.MemberBuilder> = new core.DartMap.literal([
        ]);
        let constructors : core.DartMap<string,lib11.MemberBuilder> = new core.DartMap.literal([
        ]);
        let selfType : lib5.KernelNamedTypeBuilder = new lib5.KernelNamedTypeBuilder(name,null,charOffset,parent.fileUri);
        let listType : lib10.KernelTypeBuilder = new lib5.KernelNamedTypeBuilder("List",new core.DartList.literal<lib10.KernelTypeBuilder>(selfType),charOffset,parent.fileUri);
        members.set("index",new lib13.KernelFieldBuilder(null,intType,"index",lib12.properties.finalMask,parent,charOffset,null));
        let constructorBuilder : lib16.KernelConstructorBuilder = new lib16.KernelConstructorBuilder(null,lib12.properties.constMask,null,"",null,new core.DartList.literal<lib15.FormalParameterBuilder<any>>(new lib14.KernelFormalParameterBuilder(null,0,intType,"index",true,parent,charOffset)),parent,charOffset,charOffset,charEndOffset);
        constructors.set("",constructorBuilder);
        let index : number = 0;
        let toStringEntries : core.DartList<any> = new core.DartList.literal<any>();
        let valuesBuilder : lib13.KernelFieldBuilder = new lib13.KernelFieldBuilder(null,listType,"values",lib12.properties.constMask | lib12.properties.staticMask,parent,charOffset,null);
        members.set("values",valuesBuilder);
        let toStringBuilder : lib16.KernelProcedureBuilder = new lib16.KernelProcedureBuilder(null,0,stringType,"toString",null,null,ProcedureKind.Method,parent,charOffset,charOffset,charEndOffset);
        members.set("toString",toStringBuilder);
        let className : string = name;
        for(let i : number = 0; i < constantNamesAndOffsets.length; i += 2){
            let name : string = constantNamesAndOffsets[i];
            let charOffset : number = constantNamesAndOffsets[i + 1];
            if (members.containsKey(name)) {
                lib17.inputError(null,null,`Duplicated name: ${name}`);
                continue;
            }
            let fieldBuilder : lib13.KernelFieldBuilder = new lib13.KernelFieldBuilder(null,selfType,name,lib12.properties.constMask | lib12.properties.staticMask,parent,charOffset,null);
            members.set(name,fieldBuilder);
            toStringEntries.add(new bare.createInstance(any,null,new bare.createInstance(any,null,index),new bare.createInstance(any,null,`${className}.${name}`)));
            index++;
        }
        let toStringMap : any = new bare.createInstance(any,null,toStringEntries,{
            isConst : true});
        let enumBuilder : KernelEnumBuilder = new KernelEnumBuilder.internal(metadata,name,new lib7.Scope(members,null,parent.scope,{
            isModifiable : false}),new lib7.Scope(constructors,null,null,{
            isModifiable : false}),cls,constantNamesAndOffsets,toStringMap,intType,listType,objectType,stringType,parent,charOffset);
        var setParent : (name : string,b : any) => void = (name : string,b : any) : void =>  {
            let builder : lib11.MemberBuilder = b;
            builder.parent = enumBuilder;
        };
        members.forEach(setParent);
        constructors.forEach(setParent);
        selfType.bind(enumBuilder);
        return enumBuilder;
    }
    get mixedInType() : lib10.KernelTypeBuilder {
        return null;
    }
    buildType(library : lib8.LibraryBuilder<any,any>,arguments : core.DartList<lib10.KernelTypeBuilder>) : any {
        return this.cls.rawType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(libraryBuilder : lib9.KernelLibraryBuilder,coreLibrary : lib8.LibraryBuilder<any,any>) : any {
        if (this.constantNamesAndOffsets.isEmpty) {
            libraryBuilder.addCompileTimeError(-1,"An enum declaration can't be empty.");
        }
        this.intType.resolveIn(coreLibrary.scope);
        this.stringType.resolveIn(coreLibrary.scope);
        this.objectType.resolveIn(coreLibrary.scope);
        this.listType.resolveIn(coreLibrary.scope);
        this.toStringMap.keyType = this.intType.build(libraryBuilder);
        this.toStringMap.valueType = this.stringType.build(libraryBuilder);
        let indexFieldBuilder : lib13.KernelFieldBuilder = op(Op.INDEX,this,"index");
        let indexField : any = indexFieldBuilder.build(libraryBuilder);
        let toStringBuilder : lib16.KernelProcedureBuilder = op(Op.INDEX,this,"toString");
        toStringBuilder.body = new bare.createInstance(any,null,new bare.createInstance(any,null,this.toStringMap,lib18.properties.indexGetName,new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,new bare.createInstance(any,null),indexField)))));
        let values : core.DartList<any> = new core.DartList.literal<any>();
        for(let i : number = 0; i < this.constantNamesAndOffsets.length; i += 2){
            let name : string = this.constantNamesAndOffsets[i];
            let builder : lib13.KernelFieldBuilder = op(Op.INDEX,this,name);
            values.add(new bare.createInstance(any,null,builder.build(libraryBuilder)));
        }
        let valuesBuilder : lib13.KernelFieldBuilder = op(Op.INDEX,this,"values");
        valuesBuilder.build(libraryBuilder);
        valuesBuilder.initializer = new bare.createInstance(any,null,values,{
            typeArgument : this.cls.rawType,isConst : true});
        let constructorBuilder : lib16.KernelConstructorBuilder = op(Op.INDEX,this.constructorScopeBuilder,"");
        let constructor : any = constructorBuilder.build(libraryBuilder);
        constructor.initializers.insert(0,((_) : any =>  {
            {
                _.parent = constructor;
                return _;
            }
        })(new bare.createInstance(any,null,indexField,new bare.createInstance(any,null,constructor.function.positionalParameters.single))));
        let objectClass : lib19.KernelClassBuilder = this.objectType.builder;
        let superConstructor : lib11.MemberBuilder = objectClass.findConstructorOrFactory("",this.charOffset,this.fileUri);
        if (op(Op.EQUALS,superConstructor,null) || !superConstructor.isConstructor) {
            this.addCompileTimeError(-1,"'Object' has no unnamed constructor.");
        }else {
            constructor.initializers.add(((_) : any =>  {
                {
                    _.parent = constructor;
                    return _;
                }
            })(new bare.createInstance(any,null,superConstructor.target,new bare.createInstance(any,null))));
        }
        let index : number = 0;
        for(let i : number = 0; i < this.constantNamesAndOffsets.length; i += 2){
            let constant : string = this.constantNamesAndOffsets[i];
            let field : lib13.KernelFieldBuilder = op(Op.INDEX,this,constant);
            field.build(libraryBuilder);
            let arguments : any = new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,index++)));
            field.initializer = new bare.createInstance(any,null,constructor,arguments,{
                isConst : true});
        }
        return super.build(libraryBuilder,coreLibrary);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    findConstructorOrFactory(name : string,charOffset : number,uri : lib20.Uri) : lib21.Builder {
        return null;
    }
}

export class properties {
}
