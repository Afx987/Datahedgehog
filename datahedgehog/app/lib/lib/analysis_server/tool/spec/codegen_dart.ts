/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/codegen_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./api";

export namespace DartCodegenVisitor {
    export type Constructors = lib3.HierarchicalApiVisitor.Constructors | 'DartCodegenVisitor';
    export type Interface = Omit<DartCodegenVisitor, Constructors>;
}
@DartClass
export class DartCodegenVisitor extends lib3.HierarchicalApiVisitor {
    private static __$_typeRenames : core.DartMap<string,string>;
    static get _typeRenames() : core.DartMap<string,string> { 
        if (this.__$_typeRenames===undefined) {
            this.__$_typeRenames = new core.DartMap.literal([
                ['long','int'],
                ['object','Map']]);
        }
        return this.__$_typeRenames;
    }

    constructor(api : lib3.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartCodegenVisitor(api : lib3.Api) {
        super.HierarchicalApiVisitor(api);
    }
    dartType(type : lib3.TypeDecl) : string {
        if (is(type, lib3.TypeReference)) {
            let typeName : string = type.typeName;
            let referencedDefinition : lib3.TypeDefinition = op(Op.INDEX,this.api.types,typeName);
            if (DartCodegenVisitor._typeRenames.containsKey(typeName)) {
                return DartCodegenVisitor._typeRenames.get(typeName);
            }
            if (op(Op.EQUALS,referencedDefinition,null)) {
                return typeName;
            }
            let referencedType : lib3.TypeDecl = referencedDefinition.type;
            if (is(referencedType, lib3.TypeObject) || is(referencedType, lib3.TypeEnum)) {
                return typeName;
            }
            return this.dartType(referencedType);
        }else if (is(type, lib3.TypeList)) {
            return `List<${this.dartType(type.itemType)}>`;
        }else if (is(type, lib3.TypeMap)) {
            return `Map<${this.dartType(type.keyType)}, ${this.dartType(type.valueType)}>`;
        }else if (is(type, lib3.TypeUnion)) {
            return 'dynamic';
        }else {
            throw new core.Exception("Can't convert to a dart type");
        }
    }
}

export class properties {
}
