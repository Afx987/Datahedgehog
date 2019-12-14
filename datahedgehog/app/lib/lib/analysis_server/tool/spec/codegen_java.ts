/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/codegen_java.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./api";
import * as lib4 from "./from_html";
import * as lib5 from "./to_html";

export var javaGeneratedFile : (path : string,createVisitor : (api : lib3.Api) => CodegenJavaVisitor) => any = (path : string,createVisitor : (api : lib3.Api) => CodegenJavaVisitor) : any =>  {
    return new bare.createInstance(any,null,path,(pkgPath : string) =>  {
        let visitor : CodegenJavaVisitor = createVisitor(lib4.readApi(pkgPath));
        return visitor.collectCode(visitor.visitApi.bind(visitor));
    });
};
export var _valuesSortedByKey : (map : core.DartMap<string,string>) => core.DartIterable<string> = (map : core.DartMap<string,string>) : core.DartIterable<string> =>  {
    let keys : core.DartList<string> = map.keys.toList();
    keys.sort();
    return keys.map((key : string) =>  {
        return map.get(key);
    });
};
export namespace CodegenJavaVisitor {
    export type Constructors = lib3.HierarchicalApiVisitor.Constructors | 'CodegenJavaVisitor';
    export type Interface = Omit<CodegenJavaVisitor, Constructors>;
}
@DartClass
@With(any)
export class CodegenJavaVisitor extends lib3.HierarchicalApiVisitor implements any.Interface {
    private static __$_variableRenames : core.DartMap<string,string>;
    static get _variableRenames() : core.DartMap<string,string> { 
        if (this.__$_variableRenames===undefined) {
            this.__$_variableRenames = new core.DartMap.literal([
                ['default','defaultSdk']]);
        }
        return this.__$_variableRenames;
    }

    private static __$_typeRenames : core.DartMap<string,string>;
    static get _typeRenames() : core.DartMap<string,string> { 
        if (this.__$_typeRenames===undefined) {
            this.__$_typeRenames = new core.DartMap.literal([
                ['bool','boolean'],
                ['int','int'],
                ['ExecutionContextId','String'],
                ['FilePath','String'],
                ['DebugContextId','String'],
                ['object','Object'],
                ['Override','OverrideMember']]);
        }
        return this.__$_typeRenames;
    }

    _state : _CodegenJavaState;

    toHtmlVisitor : lib5.ToHtmlVisitor;

    constructor(api : lib3.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CodegenJavaVisitor(api : lib3.Api) {
        this.toHtmlVisitor = new lib5.ToHtmlVisitor(api);
        super.HierarchicalApiVisitor(api);
    }
    constructor(name : string,callback : () => void) : void {
        this._state.constructors.set(name,collectCode(callback));
    }
    isArray(type : lib3.TypeDecl) : boolean {
        return is(type, lib3.TypeList) && this.isPrimitive(type.itemType);
    }
    isDeclaredInSpec(type : lib3.TypeDecl) : boolean {
        if (is(type, lib3.TypeReference)) {
            return this.api.types.containsKey(type.typeName) && this.javaType(type) != 'String';
        }
        return false;
    }
    isList(type : lib3.TypeDecl) : boolean {
        return is(type, lib3.TypeList) && !this.isPrimitive(type.itemType);
    }
    isMap(type : lib3.TypeDecl) : boolean {
        return is(type, lib3.TypeMap);
    }
    isObject(type : lib3.TypeDecl) : boolean {
        let typeStr : string = this.javaType(type);
        return typeStr == 'Object';
    }
    isPrimitive(type : lib3.TypeDecl) : boolean {
        if (is(type, lib3.TypeReference)) {
            let typeStr : string = this.javaType(type);
            return typeStr == 'boolean' || typeStr == 'int' || typeStr == 'long';
        }
        return false;
    }
    javadocComment(docs : core.DartList<any>) : void {
        docComment(docs);
    }
    javaFieldType(field : lib3.TypeObjectField) : string {
        return this.javaType(field.type,field.optional);
    }
    javaName(name : string) : string {
        if (CodegenJavaVisitor._variableRenames.containsKey(name)) {
            return CodegenJavaVisitor._variableRenames.get(name);
        }
        return name;
    }
    javaType(type : lib3.TypeDecl,optional? : boolean) : string {
        optional = optional || false;
        if (is(type, lib3.TypeReference)) {
            let resolvedType : lib3.TypeReference = this.resolveTypeReferenceChain(type);
            let typeName : string = resolvedType.typeName;
            if (CodegenJavaVisitor._typeRenames.containsKey(typeName)) {
                typeName = CodegenJavaVisitor._typeRenames.get(typeName);
                if (optional) {
                    if (typeName == 'boolean') {
                        typeName = 'Boolean';
                    }else if (typeName == 'int') {
                        typeName = 'Integer';
                    }
                }
            }
            return typeName;
        }else if (is(type, lib3.TypeList)) {
            if (this.isPrimitive(type.itemType)) {
                return `${this.javaType(type.itemType)}[]`;
            }else {
                return `List<${this.javaType(type.itemType)}>`;
            }
        }else if (is(type, lib3.TypeMap)) {
            return `Map<${this.javaType(type.keyType)}, ${this.javaType(type.valueType)}>`;
        }else if (is(type, lib3.TypeUnion)) {
            return 'Object';
        }else {
            throw new core.Exception("Can't make type buildable");
        }
    }
    makeClass(header : string,callback : () => void) : void {
        let oldState : _CodegenJavaState = this._state;
        try {
            this._state = new _CodegenJavaState();
            callback();
            writeln(`${header} {`);
            indent(() =>  {
                let allFields : core.DartList<string> = this._state.publicFields.values.toList();
                allFields.addAll(this._state.privateFields.values.toList());
                for(let field of allFields) {
                    writeln();
                    write(field);
                }
                let allConstructors : core.DartList<string> = this._state.constructors.values.toList();
                for(let constructor of allConstructors) {
                    writeln();
                    write(constructor);
                }
                let allMethods : core.DartList<string> = _valuesSortedByKey(this._state.publicMethods).toList();
                allMethods.addAll(_valuesSortedByKey(this._state.privateMethods));
                for(let method of allMethods) {
                    writeln();
                    write(method);
                }
                writeln();
            });
            writeln('}');
        } finally {
            this._state = oldState;
        }
    }
    privateField(fieldName : string,callback : () => void) : void {
        this._state.privateFields.set(fieldName,collectCode(callback));
    }
    privateMethod(methodName : string,callback : () => void) : void {
        this._state.privateMethods.set(methodName,collectCode(callback));
    }
    publicField(fieldName : string,callback : () => void) : void {
        this._state.publicFields.set(fieldName,collectCode(callback));
    }
    publicMethod(methodName : string,callback : () => void) : void {
        this._state.publicMethods.set(methodName,collectCode(callback));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveTypeReferenceChain(type : lib3.TypeDecl) : lib3.TypeDecl {
        let typeDecl : lib3.TypeDecl = super.resolveTypeReferenceChain(type);
        if (is(typeDecl, lib3.TypeEnum)) {
            return new lib3.TypeReference('String',null);
        }
        return type;
    }
}

export namespace _CodegenJavaState {
    export type Constructors = '_CodegenJavaState';
    export type Interface = Omit<_CodegenJavaState, Constructors>;
}
@DartClass
export class _CodegenJavaState {
    publicMethods : core.DartMap<string,string>;

    privateMethods : core.DartMap<string,string>;

    publicFields : core.DartMap<string,string>;

    privateFields : core.DartMap<string,string>;

    constructors : core.DartMap<string,string>;

    constructor() {
    }
    @defaultConstructor
    _CodegenJavaState() {
        this.publicMethods = new core.DartMap.literal([
        ]);
        this.privateMethods = new core.DartMap.literal([
        ]);
        this.publicFields = new core.DartMap.literal([
        ]);
        this.privateFields = new core.DartMap.literal([
        ]);
        this.constructors = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
