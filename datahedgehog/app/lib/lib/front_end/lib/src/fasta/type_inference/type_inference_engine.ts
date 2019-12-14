/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/type_inference/type_inference_engine.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace FieldNode {
    export type Constructors = 'FieldNode';
    export type Interface = Omit<FieldNode, Constructors>;
}
@DartClass
export class FieldNode extends any {
    _typeInferenceEngine : TypeInferenceEngineImpl;

    _field : any;

    dependencies;

    constructor(_typeInferenceEngine : TypeInferenceEngineImpl,_field : any) {
    }
    @defaultConstructor
    FieldNode(_typeInferenceEngine : TypeInferenceEngineImpl,_field : any) {
        this.dependencies = new core.DartList.literal<FieldNode>();
        this._typeInferenceEngine = _typeInferenceEngine;
        this._field = _field;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEvaluated() : boolean {
        return this._typeInferenceEngine.isFieldInferred(this._field);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<FieldNode> {
        return this.dependencies;
    }
}

export namespace TypeInferenceEngine {
    export type Constructors = 'TypeInferenceEngine';
    export type Interface = Omit<TypeInferenceEngine, Constructors>;
}
@DartClass
export class TypeInferenceEngine {
    @AbstractProperty
    get classHierarchy() : any{ throw 'abstract'}
    @AbstractProperty
    get coreTypes() : any{ throw 'abstract'}
    @Abstract
    createLocalTypeInferrer(uri : lib3.Uri,listener : any) : any{ throw 'abstract'}
    @Abstract
    createTopLevelTypeInferrer(field : any,listener : any) : any{ throw 'abstract'}
    @Abstract
    finishTopLevel() : void{ throw 'abstract'}
    @Abstract
    getFieldDependencies(field : any) : core.DartList<FieldNode>{ throw 'abstract'}
    @Abstract
    prepareTopLevel(coreTypes : any,hierarchy : any) : void{ throw 'abstract'}
    @Abstract
    recordField(field : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypeInferenceEngine() {
    }
}

export namespace _FieldWalker {
    export type Constructors = '_FieldWalker';
    export type Interface = Omit<_FieldWalker, Constructors>;
}
@DartClass
export class _FieldWalker extends any {
    constructor() {
    }
    @defaultConstructor
    _FieldWalker() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(f : FieldNode) : void {
        f._typeInferenceEngine.inferField(f._field,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<FieldNode>) : void {
        for(let f of scc) {
            f._typeInferenceEngine.inferFieldCircular(f._field);
        }
        for(let f of scc) {
            f._typeInferenceEngine.inferField(f._field,false);
        }
    }
}

export namespace TypeInferenceEngineImpl {
    export type Constructors = TypeInferenceEngine.Constructors | 'TypeInferenceEngineImpl';
    export type Interface = Omit<TypeInferenceEngineImpl, Constructors>;
}
@DartClass
export class TypeInferenceEngineImpl extends TypeInferenceEngine {
    instrumentation : any;

    strongMode : boolean;

    fieldNodes;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    coreTypes : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    classHierarchy : any;

    typeSchemaEnvironment : any;

    constructor(instrumentation : any,strongMode : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeInferenceEngineImpl(instrumentation : any,strongMode : boolean) {
        this.fieldNodes = new core.DartList.literal<FieldNode>();
        this.instrumentation = instrumentation;
        this.strongMode = strongMode;
    }
    @Abstract
    clearFieldInitializer(field : any) : void{ throw 'abstract'}
    @Abstract
    createFieldNode(field : any) : FieldNode{ throw 'abstract'}
    @Abstract
    fieldHasInitializer(field : any) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    finishTopLevel() : void {
        for(let fieldNode of this.fieldNodes) {
            if (fieldNode.isEvaluated) continue;
            new _FieldWalker().walk(fieldNode);
        }
    }
    @Abstract
    getFieldDeclaredType(field : any) : any{ throw 'abstract'}
    @Abstract
    getFieldOffset(field : any) : number{ throw 'abstract'}
    @Abstract
    getFieldTypeInferrer(field : any) : any{ throw 'abstract'}
    @Abstract
    getFieldUri(field : any) : string{ throw 'abstract'}
    inferField(field : any,updateType : boolean) : void {
        if (this.fieldHasInitializer(field)) {
            let typeInferrer = this.getFieldTypeInferrer(field);
            let type = this.getFieldDeclaredType(field);
            let inferredType = typeInferrer.inferDeclarationType(typeInferrer.inferFieldInitializer(field,type,op(Op.EQUALS,type,null)));
            if (op(Op.EQUALS,type,null) && this.strongMode && updateType) {
                ((_562_)=>(!!_562_)?_562_.record(lib3.Uri.parse(typeInferrer.uri),this.getFieldOffset(field),'topType',new bare.createInstance(any,null,inferredType)):null)(this.instrumentation);
                this.setFieldInferredType(field,inferredType);
            }
            this.clearFieldInitializer(field);
        }
    }
    inferFieldCircular(field : any) : void {
        if (op(Op.EQUALS,this.getFieldDeclaredType(field),null)) {
            let uri = this.getFieldTypeInferrer(field).uri;
            let inferredType = new bare.createInstance(any,null);
            ((_563_)=>(!!_563_)?_563_.record(lib3.Uri.parse(uri),this.getFieldOffset(field),'topType',new bare.createInstance(any,null,inferredType)):null)(this.instrumentation);
            this.setFieldInferredType(field,inferredType);
        }
    }
    @Abstract
    isFieldInferred(field : any) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    prepareTopLevel(coreTypes : any,hierarchy : any) : void {
        this.coreTypes = coreTypes;
        this.classHierarchy = hierarchy;
        this.typeSchemaEnvironment = new bare.createInstance(any,null,coreTypes,hierarchy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    recordField(field : any) : void {
        this.fieldNodes.add(this.createFieldNode(field));
    }
    @Abstract
    setFieldInferredType(field : any,inferredType : any) : void{ throw 'abstract'}
}

export class properties {
}
