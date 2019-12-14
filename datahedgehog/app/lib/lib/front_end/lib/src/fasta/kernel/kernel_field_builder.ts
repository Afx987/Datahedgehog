/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_field_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/field_builder";
import * as lib4 from "./../builder/metadata_builder";
import * as lib5 from "./kernel_type_builder";
import * as lib6 from "./../builder/builder";

export namespace KernelFieldBuilder {
    export type Constructors = lib3.FieldBuilder.Constructors | 'KernelFieldBuilder';
    export type Interface = Omit<KernelFieldBuilder, Constructors>;
}
@DartClass
export class KernelFieldBuilder extends lib3.FieldBuilder<any> {
    field : any;

    metadata : core.DartList<lib4.MetadataBuilder<any>>;

    type : lib5.KernelTypeBuilder;

    initializerToken : any;

    constructor(metadata : core.DartList<lib4.MetadataBuilder<any>>,type : lib5.KernelTypeBuilder,name : string,modifiers : number,compilationUnit : lib6.Builder,charOffset : number,initializerToken : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelFieldBuilder(metadata : core.DartList<lib4.MetadataBuilder<any>>,type : lib5.KernelTypeBuilder,name : string,modifiers : number,compilationUnit : lib6.Builder,charOffset : number,initializerToken : any) {
        this.field = ((_) : any =>  {
            {
                _.fileOffset = charOffset;
                return _;
            }
        })(new bare.createInstance(any,null,null,{
            fileUri : ((t)=>(!!t)?t.relativeFileUri:null)(compilationUnit)}));
        super.FieldBuilder(name,modifiers,compilationUnit,charOffset);
        this.metadata = metadata;
        this.type = type;
        this.initializerToken = initializerToken;
    }
    set initializer(value : any) {
        this.field.initializer = ((_) : any =>  {
            {
                _.parent = this.field;
                return _;
            }
        })(value);
    }
    build(library : any) : any {
        this.field.name = ( this.field.name ) || ( new bare.createInstance(any,null,this.name,library.target) );
        if (this.type != null) {
            this.field.type = this.type.build(library);
        }
        let isInstanceMember : boolean = !this.isStatic && !this.isTopLevel;
        ((_) : any =>  {
            {
                _.isFinal = this.isFinal;
                _.isConst = this.isConst;
                _.hasImplicitGetter = isInstanceMember;
                _.hasImplicitSetter = isInstanceMember && !this.isConst && !this.isFinal;
                _.isStatic = !isInstanceMember;
                return _;
            }
        })(this.field);
        if (this.initializerToken != null) {
            library.loader.typeInferenceEngine.recordField(this.field);
        }
        return this.field;
    }
    get target() : any {
        return this.field;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    prepareInitializerInference(library : any,currentClass : any) : void {
        if (this.initializerToken != null) {
            let memberScope = op(Op.EQUALS,currentClass,null) ? library.scope : currentClass.scope;
            let typeInferenceEngine = library.loader.typeInferenceEngine;
            let astFactory = library.loader.astFactory;
            let listener = new bare.createInstance(any,null);
            let typeInferrer = typeInferenceEngine.createTopLevelTypeInferrer(this.field,listener);
            let bodyBuilder = new bare.createInstance(any,null,library,this,memberScope,null,typeInferenceEngine.classHierarchy,typeInferenceEngine.coreTypes,currentClass,this.isInstanceMember,library.uri,typeInferrer,astFactory,{
                fieldDependencies : typeInferenceEngine.getFieldDependencies(this.field)});
            let parser : any = new bare.createInstance(any,null,bodyBuilder);
            let token : any = parser.parseExpression(this.initializerToken);
            let expression : any = bodyBuilder.popForValue();
            bodyBuilder.checkEmpty(token.charOffset);
            this.initializer = expression;
        }
    }
}

export class properties {
}
