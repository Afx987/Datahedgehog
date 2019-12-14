/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/summary/dump_inferred_types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as lib4 from "@dart2ts/dart/uri";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    let summaryDataStore : any = new bare.createInstance(any,null,args);
    let collector : InferredTypeCollector = new InferredTypeCollector((uri : string) =>  {
        return op(Op.INDEX,summaryDataStore.linkedMap,uri);
    },(uri : string) =>  {
        return op(Op.INDEX,summaryDataStore.unlinkedMap,uri);
    });
    collector.visitSummaryDataStore(summaryDataStore);
    collector.dumpCollectedTypes();
};
export namespace InferredTypeCollector {
    export type Constructors = 'InferredTypeCollector';
    export type Interface = Omit<InferredTypeCollector, Constructors>;
}
@DartClass
export class InferredTypeCollector {
    unlinkedUnit : any;

    linkedUnit : any;

    unitForLink : any;

    inferredTypes : core.DartMap<string,string>;

    typeParamsInScope : core.DartList<string>;

    _linker : any;

    constructor(getDependency : any,getUnit : any) {
    }
    @defaultConstructor
    InferredTypeCollector(getDependency : any,getUnit : any) {
        this.inferredTypes = new core.DartMap.literal([
        ]);
        this.typeParamsInScope = new core.DartList.literal<string>();
        this._linker = new bare.createInstance(any,null,new core.DartMap.literal([
        ]),getDependency,getUnit,true);
    }
    collectInferredType(slot : number,path : string) : void {
        for(let type of this.linkedUnit.types) {
            if (op(Op.EQUALS,type.slot,slot)) {
                this.inferredTypes.set(path,this.formatType(type));
                return;
            }
        }
    }
    collectInferredTypes(obj : any,properties : core.DartMap<string,core.DartObject>,path : string) : void {
        if (is(obj, any)) {
            this.collectInferredType(obj.inferredTypeSlot,path);
            properties.remove('initializer');
        }else if (is(obj, any)) {
            this.collectInferredType(obj.inferredReturnTypeSlot,path);
            properties.remove('localFunctions');
            properties.remove('localVariables');
        }else if (is(obj, any)) {
            this.collectInferredType(obj.inferredTypeSlot,path);
            properties.remove('initializer');
        }
    }
    dumpCollectedTypes() : void {
        core.print(`Collected types (${this.inferredTypes.length}):`);
        let paths : core.DartList<string> = this.inferredTypes.keys.toList();
        paths.sort();
        for(let path of paths) {
            core.print(`${path} -> ${this.inferredTypes.get(path)}`);
        }
    }
    formatDartType(type : any) : string {
        if (is(type, any)) {
            let argStrings : core.DartList<string> = type.normalParameterTypes.map(this.formatDartType.bind(this)).toList();
            let optionalParameterTypes : core.DartList<any> = type.optionalParameterTypes;
            if (optionalParameterTypes.isNotEmpty) {
                let optionalArgStrings : core.DartList<string> = optionalParameterTypes.map(this.formatDartType.bind(this)).toList();
                argStrings.add(`[${optionalArgStrings.join(', ')}]`);
            }
            let namedParameterTypes : core.DartMap<string,any> = type.namedParameterTypes;
            if (namedParameterTypes.isNotEmpty) {
                let namedArgStrings : core.DartList<string> = new core.DartList.literal<string>();
                namedParameterTypes.forEach((name : string,type : any) =>  {
                    namedArgStrings.add(`${name}: ${this.formatDartType(type)}`);
                });
                argStrings.add(`{${namedArgStrings.join(', ')}}`);
            }
            return `(${argStrings.join(', ')}) → ${this.formatDartType(type.returnType)}`;
        }else if (is(type, any)) {
            if (type.typeArguments.isNotEmpty) {
                throw new core.UnimplementedError('type args');
            }
            return this.formatElement(type.element);
        }else if (is(type, any)) {
            return type.toString();
        }else {
            throw new core.UnimplementedError(`Don't know how to format type of type ${type.runtimeType}`);
        }
    }
    formatElement(element : any) : string {
        if (is(element, any) || is(element, any) || is(element, any) || is(element, any) || is(element, any) || is(element, any)) {
            return element.toString();
        }else if (is(element, any)) {
            return this.formatDartType(element.type);
        }else if (is(element, any)) {
            return '???';
        }else {
            throw new core.UnimplementedError(`Don't know how to format reference of type ${element.runtimeType}`);
        }
    }
    formatParam(param : any) : string {
        if (param.isFunctionTyped) {
            return `BAD(${convert.properties.JSON.encode(param)})`;
        }
        let result : string;
        if (param.type != null) {
            result = `${this.formatType(param.type)} ${param.name}`;
        }else {
            result = param.name;
        }
        if (op(Op.EQUALS,param.kind,UnlinkedParamKind.named)) {
            result = `{${result}}`;
        }else if (op(Op.EQUALS,param.kind,UnlinkedParamKind.positional)) {
            result = `[${result}]`;
        }
        return result;
    }
    formatReference(index : number,_namedArguments? : {typeOf? : boolean}) : string {
        let {typeOf} = Object.assign({
            "typeOf" : false}, _namedArguments );
        let element : any = this.unitForLink.resolveRef(index);
        return this.formatElement(element);
    }
    formatType(entityRef : any) : string {
        let implicitFunctionTypeIndices : core.DartList<number> = entityRef.implicitFunctionTypeIndices;
        if (entityRef.syntheticReturnType != null) {
            let params : string = entityRef.syntheticParams.map(this.formatParam.bind(this)).join(', ');
            let retType : string = this.formatType(entityRef.syntheticReturnType);
            return `(${params}) -> ${retType}`;
        }
        if (entityRef.paramReference != 0) {
            return this.typeParamsInScope[this.typeParamsInScope.length - entityRef.paramReference];
        }
        let result : string = this.formatReference(entityRef.reference,{
            typeOf : true});
        let typeArguments : core.DartList<any> = entityRef.typeArguments.toList();
        while (typeArguments.isNotEmpty && this.isDynamic(typeArguments.last)){
            typeArguments.removeLast();
        }
        if (typeArguments.isNotEmpty) {
            result += `<${typeArguments.map(this.formatType.bind(this)).join(', ')}>`;
        }
        if (implicitFunctionTypeIndices.isNotEmpty) {
            result = `parameterOf(${result}, ${implicitFunctionTypeIndices.join(', ')})`;
        }
        return result;
    }
    isDynamic(entityRef : any) : boolean {
        if (entityRef.syntheticReturnType != null || entityRef.paramReference != 0) {
            return false;
        }
        return this.formatReference(entityRef.reference,{
            typeOf : true}) == 'dynamic';
    }
    visit(obj : any,properties : core.DartMap<string,core.DartObject>,path : string) : void {
        let oldTypeParamsInScope : core.DartList<string> = this.typeParamsInScope;
        let newTypeParams : core.DartObject = properties.get('typeParameters');
        if (is(newTypeParams, core.DartList<any>) && newTypeParams.isNotEmpty) {
            this.typeParamsInScope = this.typeParamsInScope.toList();
            for(let typeParam of newTypeParams) {
                if (is(typeParam, any)) {
                    this.typeParamsInScope.add(typeParam.name);
                }else {
                    throw new core.StateError(`Unexpected type param type: ${typeParam.runtimeType}`);
                }
            }
        }
        this.collectInferredTypes(obj,properties,path);
        properties.forEach((key : string,value : core.DartObject) =>  {
            if (is(value, any)) {
                this.visit(value,value.toMap(),`${path}.${key}`);
            }else if (is(value, core.DartList<any>)) {
                for(let i : number = 0; i < value.length; i++){
                    let item : core.DartObject = value[i];
                    if (is(item, any)) {
                        let itemProperties : core.DartMap<string,core.DartObject> = item.toMap();
                        let indexOrName : string = (itemProperties.get('name') || new core.DartInt(i).toString());
                        this.visit(item,itemProperties,`${path}.${key}[${indexOrName}]`);
                    }
                }
            }
        });
        this.typeParamsInScope = oldTypeParamsInScope;
    }
    visitSummaryDataStore(summaryDataStore : any) : void {
        let partOfUris : core.DartSet<string> = new core.DartSet<string>();
        summaryDataStore.unlinkedMap.forEach((unitUriString : string,unlinkedUnit : any) =>  {
            let unitUri : lib4.Uri = lib4.Uri.parse(unitUriString);
            for(let relativePartUriString of unlinkedUnit.publicNamespace.parts) {
                partOfUris.add(resolveRelativeUri(unitUri,lib4.Uri.parse(relativePartUriString)).toString());
            }
        });
        summaryDataStore.linkedMap.forEach((libraryUriString : string,linkedLibrary : any) =>  {
            if (partOfUris.contains(libraryUriString)) {
                return;
            }
            if (new core.DartString(libraryUriString).startsWith('dart:')) {
                return;
            }
            let libraryUri : lib4.Uri = lib4.Uri.parse(libraryUriString);
            let definingUnlinkedUnit : any = op(Op.INDEX,summaryDataStore.unlinkedMap,libraryUriString);
            if (definingUnlinkedUnit != null) {
                this.visitUnit(definingUnlinkedUnit,op(Op.INDEX,linkedLibrary.units,0),libraryUriString,0);
                for(let i : number = 0; i < definingUnlinkedUnit.publicNamespace.parts.length; i++){
                    let relativePartUri : lib4.Uri = lib4.Uri.parse(op(Op.INDEX,definingUnlinkedUnit.publicNamespace.parts,i));
                    let unitUriString : string = resolveRelativeUri(libraryUri,relativePartUri).toString();
                    let unlinkedUnit : any = op(Op.INDEX,summaryDataStore.unlinkedMap,unitUriString);
                    if (unlinkedUnit != null) {
                        this.visitUnit(unlinkedUnit,op(Op.INDEX,linkedLibrary.units,i + 1),libraryUriString,i + 1);
                    }
                }
            }
        });
    }
    visitUnit(unlinkedUnit : any,linkedUnit : any,libraryUriString : string,unitNum : number) : void {
        this.unlinkedUnit = unlinkedUnit;
        this.linkedUnit = linkedUnit;
        this.unitForLink = op(Op.INDEX,this._linker.getLibrary(lib4.Uri.parse(libraryUriString)).units,unitNum);
        this.visit(unlinkedUnit,unlinkedUnit.toMap(),libraryUriString);
        this.unlinkedUnit = null;
        this.linkedUnit = null;
        this.unitForLink = null;
    }
}

export class properties {
}
