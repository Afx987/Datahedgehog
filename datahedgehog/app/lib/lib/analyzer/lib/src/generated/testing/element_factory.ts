/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/testing/element_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as collection from "@dart2ts/dart/core";

export namespace ElementFactory {
    export type Constructors = 'ElementFactory';
    export type Interface = Omit<ElementFactory, Constructors>;
}
@DartClass
export class ElementFactory {
    private static __$_objectElement : any;
    static get _objectElement() : any { 
        return this.__$_objectElement;
    }
    static set _objectElement(__$value : any)  { 
        this.__$_objectElement = __$value;
    }

    static get object() : any {
        if (op(Op.EQUALS,ElementFactory._objectElement,null)) {
            ElementFactory._objectElement = ElementFactory.classElement("Object",null);
        }
        return ElementFactory._objectElement;
    }
    static get objectType() : any {
        return ElementFactory.object.type;
    }
    static classElement(typeName : string,superclassType : any,parameterNames? : core.DartList<string>) : any {
        let element : any = new bare.createInstance(any,null,typeName,0);
        element.constructors = new core.DartList.literal<any>();
        element.supertype = superclassType;
        if (parameterNames != null) {
            element.typeParameters = ElementFactory.typeParameters(parameterNames);
        }
        return element;
    }
    static classElement2(typeName : string,parameterNames? : core.DartList<string>) : any {
        return ElementFactory.classElement(typeName,ElementFactory.objectType,parameterNames);
    }
    static classTypeAlias(typeName : string,superclassType : any,parameterNames? : core.DartList<string>) {
        let element : any = ElementFactory.classElement(typeName,superclassType,parameterNames);
        element.mixinApplication = true;
        return element;
    }
    static classTypeAlias2(typeName : string,parameterNames? : core.DartList<string>) : any {
        return ElementFactory.classTypeAlias(typeName,ElementFactory.objectType,parameterNames);
    }
    static compilationUnit(fileName : string,librarySource? : any) : any {
        let source : any = new bare.createInstance(any,null,fileName,lib3.toUri(fileName),UriKind.FILE_URI);
        let unit : any = new bare.createInstance(any,null,fileName);
        unit.source = source;
        if (op(Op.EQUALS,librarySource,null)) {
            librarySource = source;
        }
        unit.librarySource = librarySource;
        return unit;
    }
    static constLocalVariableElement(name : string) : any {
        return new bare.createInstance(any,null,name,0);
    }
    static constructorElement(definingClass : any,name : string,isConst : boolean,argumentTypes? : core.DartList<any>) : any {
        let constructor : any = name == null ? new bare.createInstance(any,null,"",-1) : new bare.createInstance(any,null,name,0);
        if (name != null) {
            if (new core.DartString(name).isEmpty) {
                constructor.nameEnd = definingClass.name.length;
            }else {
                constructor.periodOffset = definingClass.name.length;
                constructor.nameEnd = op(Op.PLUS,op(Op.PLUS,definingClass.name.length,new core.DartString(name).length),1);
            }
        }
        constructor.isSynthetic = name == null;
        constructor.isConst = isConst;
        if (argumentTypes != null) {
            let count : number = argumentTypes.length;
            let parameters : core.DartList<any> = new core.DartList<any>(count);
            for(let i : number = 0; i < count; i++){
                let parameter : any = new bare.createInstance(any,null,`a${i}`,i);
                parameter.type = argumentTypes[i];
                parameter.parameterKind = ParameterKind.REQUIRED;
                parameters[i] = parameter;
            }
            constructor.parameters = parameters;
        }else {
            constructor.parameters = new core.DartList.literal<any>();
        }
        constructor.enclosingElement = definingClass;
        if (!constructor.isSynthetic) {
            constructor.constantInitializers = new core.DartList.literal<any>();
        }
        return constructor;
    }
    static constructorElement2(definingClass : any,name : string,argumentTypes? : core.DartList<any>) : any {
        return ElementFactory.constructorElement(definingClass,name,false,argumentTypes);
    }
    static enumElement(typeProvider : any,enumName : string,constantNames? : core.DartList<string>) : any {
        let enumElement : any = new bare.createInstance(any,null,enumName,-1);
        let enumType : any = enumElement.type;
        let fields : core.DartList<any> = new core.DartList<any>();
        let intType : any = typeProvider.intType;
        let stringType : any = typeProvider.stringType;
        let indexFieldName : string = "index";
        let indexField : any = new bare.createInstance(any,null,indexFieldName,-1);
        indexField.isFinal = true;
        indexField.type = intType;
        fields.add(indexField);
        let nameFieldName : string = "_name";
        let nameField : any = new bare.createInstance(any,null,nameFieldName,-1);
        nameField.isFinal = true;
        nameField.type = stringType;
        fields.add(nameField);
        let valuesField : any = new bare.createInstance(any,null,"values",-1);
        valuesField.isStatic = true;
        valuesField.isConst = true;
        valuesField.type = typeProvider.listType.instantiate(new core.DartList.literal<any>(enumType));
        fields.add(valuesField);
        if (constantNames != null) {
            let constantCount : number = constantNames.length;
            for(let i : number = 0; i < constantCount; i++){
                let constantName : string = constantNames[i];
                let constantElement : any = new bare.createInstance(any,null,constantName,-1);
                constantElement.isStatic = true;
                constantElement.isConst = true;
                constantElement.type = enumType;
                let fieldMap : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
                op(Op.INDEX_ASSIGN,fieldMap,indexFieldName,new bare.createInstance(any,null,intType,new bare.createInstance(any,null,i)));
                op(Op.INDEX_ASSIGN,fieldMap,nameFieldName,new bare.createInstance(any,null,stringType,new bare.createInstance(any,null,constantName)));
                let value : any = new bare.createInstance(any,null,enumType,new bare.createInstance(any,null,fieldMap));
                constantElement.evaluationResult = new bare.createInstance(any,null,value);
                fields.add(constantElement);
            }
        }
        enumElement.fields = fields;
        return enumElement;
    }
    static exportFor(exportedLibrary : any,combinators? : core.DartList<any>) : any {
        combinators = combinators || NamespaceCombinator.EMPTY_LIST;
        let spec : any = new bare.createInstance(any,null,-1);
        spec.exportedLibrary = exportedLibrary;
        spec.combinators = combinators;
        return spec;
    }
    static fieldElement(name : string,isStatic : boolean,isFinal : boolean,isConst : boolean,type : any,_namedArguments? : {initializer? : any}) : any {
        let {initializer} = Object.assign({
        }, _namedArguments );
        let field : any = isConst ? new bare.createInstance(any,null,name,0) : new bare.createInstance(any,null,name,0);
        field.isConst = isConst;
        field.isFinal = isFinal;
        field.isStatic = isStatic;
        field.type = type;
        if (isConst) {
            (field as any).constantInitializer = initializer;
        }
        new bare.createInstance(any,null,field);
        if (!isConst && !isFinal) {
            new bare.createInstance(any,null,field);
        }
        return field;
    }
    static fieldFormalParameter(name : any) : any {
        return new bare.createInstance(any,null,name);
    }
    static flushStaticState() : void {
        ElementFactory._objectElement = null;
    }
    static functionElement(functionName : string) : any {
        return ElementFactory.functionElement4(functionName,null,null,null,null);
    }
    static functionElement2(functionName : string,returnType : any) : any {
        return ElementFactory.functionElement3(functionName,returnType,null,null);
    }
    static functionElement3(functionName : string,returnType : any,normalParameters : core.DartList<any>,optionalParameters : core.DartList<any>) : any {
        let functionElement : any = new bare.createInstance(any,null,functionName,0);
        let functionType : any = new bare.createInstance(any,null,functionElement);
        functionElement.type = functionType;
        functionElement.returnType = (returnType || VoidTypeImpl.instance);
        let normalCount : number = normalParameters == null ? 0 : normalParameters.length;
        let optionalCount : number = optionalParameters == null ? 0 : optionalParameters.length;
        let totalCount : number = normalCount + optionalCount;
        let parameters : core.DartList<any> = new core.DartList<any>(totalCount);
        for(let i : number = 0; i < totalCount; i++){
            let parameter : any = new bare.createInstance(any,null,`a${i}`,i);
            if (i < normalCount) {
                parameter.type = normalParameters[i].type;
                parameter.parameterKind = ParameterKind.REQUIRED;
            }else {
                parameter.type = optionalParameters[i - normalCount].type;
                parameter.parameterKind = ParameterKind.POSITIONAL;
            }
            parameters[i] = parameter;
        }
        functionElement.parameters = parameters;
        return functionElement;
    }
    static functionElement4(functionName : string,returnElement : any,normalParameters : core.DartList<any>,names : core.DartList<string>,namedParameters : core.DartList<any>) : any {
        let functionElement : any = new bare.createInstance(any,null,functionName,0);
        let functionType : any = new bare.createInstance(any,null,functionElement);
        functionElement.type = functionType;
        let normalCount : number = normalParameters == null ? 0 : normalParameters.length;
        let nameCount : number = names == null ? 0 : names.length;
        let typeCount : number = namedParameters == null ? 0 : namedParameters.length;
        if (names != null && nameCount != typeCount) {
            throw new core.StateError("The passed String[] and ClassElement[] arrays had different lengths.");
        }
        let totalCount : number = normalCount + nameCount;
        let parameters : core.DartList<any> = new core.DartList<any>(totalCount);
        for(let i : number = 0; i < totalCount; i++){
            if (i < normalCount) {
                let parameter : any = new bare.createInstance(any,null,`a${i}`,i);
                parameter.type = normalParameters[i].type;
                parameter.parameterKind = ParameterKind.REQUIRED;
                parameters[i] = parameter;
            }else {
                let parameter : any = new bare.createInstance(any,null,names[i - normalCount],i);
                parameter.type = namedParameters[i - normalCount].type;
                parameter.parameterKind = ParameterKind.NAMED;
                parameters[i] = parameter;
            }
        }
        functionElement.parameters = parameters;
        if (op(Op.EQUALS,returnElement,null)) {
            functionElement.returnType = VoidTypeImpl.instance;
        }else {
            functionElement.returnType = returnElement.type;
        }
        return functionElement;
    }
    static functionElement5(functionName : string,normalParameters : core.DartList<any>) : any {
        return ElementFactory.functionElement3(functionName,null,normalParameters,null);
    }
    static functionElement6(functionName : string,normalParameters : core.DartList<any>,optionalParameters : core.DartList<any>) : any {
        return ElementFactory.functionElement3(functionName,null,normalParameters,optionalParameters);
    }
    static functionElement7(functionName : string,normalParameters : core.DartList<any>,names : core.DartList<string>,namedParameters : core.DartList<any>) : any {
        return ElementFactory.functionElement4(functionName,null,normalParameters,names,namedParameters);
    }
    static functionElement8(parameters : core.DartList<any>,returnType : any,_namedArguments? : {optional? : core.DartList<any>,named? : core.DartMap<string,any>}) : any {
        let {optional,named} = Object.assign({
        }, _namedArguments );
        let parameterElements : core.DartList<any> = new core.DartList<any>();
        for(let i : number = 0; i < parameters.length; i++){
            let parameterElement : any = new bare.createInstance(any,null,`a${i}`,i);
            parameterElement.type = parameters[i];
            parameterElement.parameterKind = ParameterKind.REQUIRED;
            parameterElements.add(parameterElement);
        }
        if (optional != null) {
            let j : number = parameters.length;
            for(let i : number = 0; i < optional.length; i++){
                let parameterElement : any = new bare.createInstance(any,null,`o${i}`,j);
                parameterElement.type = optional[i];
                parameterElement.parameterKind = ParameterKind.POSITIONAL;
                parameterElements.add(parameterElement);
                j++;
            }
        }else if (named != null) {
            let j : number = parameters.length;
            for(let s of named.keys) {
                let parameterElement : any = new bare.createInstance(any,null,s,j);
                parameterElement.type = named.get(s);
                parameterElement.parameterKind = ParameterKind.NAMED;
                parameterElements.add(parameterElement);
            }
        }
        return ElementFactory.functionElementWithParameters("f",returnType,parameterElements);
    }
    static functionElementWithParameters(functionName : string,returnType : any,parameters : core.DartList<any>) : any {
        let functionElement : any = new bare.createInstance(any,null,functionName,0);
        functionElement.returnType = op(Op.EQUALS,returnType,null) ? VoidTypeImpl.instance : returnType;
        functionElement.parameters = parameters;
        let functionType : any = new bare.createInstance(any,null,functionElement);
        functionElement.type = functionType;
        return functionElement;
    }
    static functionTypeAliasElement(name : string) : any {
        let functionTypeAliasElement : any = new bare.createInstance(any,null,name,-1);
        functionTypeAliasElement.type = new bare.createInstance(any,null,functionTypeAliasElement);
        return functionTypeAliasElement;
    }
    static getterElement(name : string,isStatic : boolean,type : any) : any {
        let field : any = new bare.createInstance(any,null,name,-1);
        field.isStatic = isStatic;
        field.isSynthetic = true;
        field.type = type;
        field.isFinal = true;
        let getter : any = new bare.createInstance(any,null,name,0);
        getter.isSynthetic = false;
        getter.getter = true;
        getter.variable = field;
        getter.returnType = type;
        getter.isStatic = isStatic;
        field.getter = getter;
        let getterType : any = new bare.createInstance(any,null,getter);
        getter.type = getterType;
        return getter;
    }
    static importFor(importedLibrary : any,prefix : any,combinators? : core.DartList<any>) : any {
        combinators = combinators || NamespaceCombinator.EMPTY_LIST;
        let spec : any = new bare.createInstance(any,null,0);
        spec.importedLibrary = importedLibrary;
        spec.prefix = prefix;
        spec.combinators = combinators;
        return spec;
    }
    static library(context : any,libraryName : string) : any {
        let fileName : string = `/${libraryName}.dart`;
        let unit : any = ElementFactory.compilationUnit(fileName);
        let library : any = new bare.createInstance(any,null,context,libraryName,0,new core.DartString(libraryName).length);
        library.definingCompilationUnit = unit;
        return library;
    }
    static localVariableElement(name : any) : any {
        return new bare.createInstance(any,null,name);
    }
    static localVariableElement2(name : string) : any {
        return new bare.createInstance(any,null,name,0);
    }
    static methodElement(methodName : string,returnType : any,argumentTypes? : core.DartList<any>) : any {
        let method : any = new bare.createInstance(any,null,methodName,0);
        if (argumentTypes == null) {
            method.parameters = ParameterElement.EMPTY_LIST;
        }else {
            let count : number = argumentTypes.length;
            let parameters : core.DartList<any> = new core.DartList<any>(count);
            for(let i : number = 0; i < count; i++){
                let parameter : any = new bare.createInstance(any,null,`a${i}`,i);
                parameter.type = argumentTypes[i];
                parameter.parameterKind = ParameterKind.REQUIRED;
                parameters[i] = parameter;
            }
            method.parameters = parameters;
        }
        method.returnType = returnType;
        let methodType : any = new bare.createInstance(any,null,method);
        method.type = methodType;
        return method;
    }
    static methodElementWithParameters(enclosingElement : any,methodName : string,returnType : any,parameters : core.DartList<any>) : any {
        let method : any = new bare.createInstance(any,null,methodName,0);
        method.enclosingElement = enclosingElement;
        method.parameters = parameters;
        method.returnType = returnType;
        method.type = new bare.createInstance(any,null,method);
        return method;
    }
    static namedParameter(name : string) : any {
        let parameter : any = new bare.createInstance(any,null,name,0);
        parameter.parameterKind = ParameterKind.NAMED;
        return parameter;
    }
    static namedParameter2(name : string,type : any) : any {
        let parameter : any = new bare.createInstance(any,null,name,0);
        parameter.parameterKind = ParameterKind.NAMED;
        parameter.type = type;
        return parameter;
    }
    static namedParameter3(name : string,_namedArguments? : {type? : any,initializer? : any,initializerCode? : string}) : any {
        let {type,initializer,initializerCode} = Object.assign({
        }, _namedArguments );
        let parameter : any = new bare.createInstance(any,null,name,0);
        parameter.parameterKind = ParameterKind.NAMED;
        parameter.type = type;
        parameter.constantInitializer = initializer;
        parameter.defaultValueCode = initializerCode;
        return parameter;
    }
    static positionalParameter(name : string) : any {
        let parameter : any = new bare.createInstance(any,null,name,0);
        parameter.parameterKind = ParameterKind.POSITIONAL;
        return parameter;
    }
    static positionalParameter2(name : string,type : any) : any {
        let parameter : any = new bare.createInstance(any,null,name,0);
        parameter.parameterKind = ParameterKind.POSITIONAL;
        parameter.type = type;
        return parameter;
    }
    static prefix(name : string) : any {
        return new bare.createInstance(any,null,name,0);
    }
    static requiredParameter(name : string) : any {
        let parameter : any = new bare.createInstance(any,null,name,0);
        parameter.parameterKind = ParameterKind.REQUIRED;
        return parameter;
    }
    static requiredParameter2(name : string,type : any) : any {
        let parameter : any = new bare.createInstance(any,null,name,0);
        parameter.parameterKind = ParameterKind.REQUIRED;
        parameter.type = type;
        return parameter;
    }
    static setterElement(name : string,isStatic : boolean,type : any) : any {
        let field : any = new bare.createInstance(any,null,name,-1);
        field.isStatic = isStatic;
        field.isSynthetic = true;
        field.type = type;
        let getter : any = new bare.createInstance(any,null,name,-1);
        getter.getter = true;
        getter.variable = field;
        getter.returnType = type;
        field.getter = getter;
        let getterType : any = new bare.createInstance(any,null,getter);
        getter.type = getterType;
        let parameter : any = ElementFactory.requiredParameter2("a",type);
        let setter : any = new bare.createInstance(any,null,name,-1);
        setter.setter = true;
        setter.isSynthetic = true;
        setter.variable = field;
        setter.parameters = new core.DartList.literal<any>(parameter);
        setter.returnType = VoidTypeImpl.instance;
        setter.type = new bare.createInstance(any,null,setter);
        field.setter = setter;
        return setter;
    }
    static topLevelVariableElement(name : any) : any {
        return new bare.createInstance(any,null,name);
    }
    static topLevelVariableElement2(name : string) : any {
        return ElementFactory.topLevelVariableElement3(name,false,false,null);
    }
    static topLevelVariableElement3(name : string,isConst : boolean,isFinal : boolean,type : any) : any {
        let variable : any;
        if (isConst) {
            let constant : any = new bare.createInstance(any,null,AstTestFactory.identifier3(name));
            let initializer : any = AstTestFactory.instanceCreationExpression2(Keyword.CONST,AstTestFactory.typeName(type.element));
            if (is(type, any)) {
                let element : any = type.element.unnamedConstructor;
                initializer.staticElement = element;
                initializer.constructorName.staticElement = element;
            }
            constant.constantInitializer = initializer;
            variable = constant;
        }else {
            variable = new bare.createInstance(any,null,name,-1);
        }
        variable.isConst = isConst;
        variable.isFinal = isFinal;
        variable.isSynthetic = false;
        variable.type = type;
        new bare.createInstance(any,null,variable);
        if (!isConst && !isFinal) {
            new bare.createInstance(any,null,variable);
        }
        return variable;
    }
    static typeParameterElement(name : string) : any {
        let element : any = new bare.createInstance(any,null,name,0);
        element.type = new bare.createInstance(any,null,element);
        return element;
    }
    static typeParameters(names : core.DartList<string>) : core.DartList<any> {
        let count : number = names.length;
        if (count == 0) {
            return TypeParameterElement.EMPTY_LIST;
        }
        let typeParameters : core.DartList<any> = new core.DartList<any>(count);
        for(let i : number = 0; i < count; i++){
            typeParameters[i] = ElementFactory.typeParameterWithType(names[i]);
        }
        return typeParameters;
    }
    static typeParameterWithType(name : string,bound? : any) : any {
        let typeParameter : any = ElementFactory.typeParameterElement(name);
        typeParameter.type = new bare.createInstance(any,null,typeParameter);
        typeParameter.bound = bound;
        return typeParameter;
    }
    constructor() {
    }
    @defaultConstructor
    ElementFactory() {
    }
}

export class properties {
}
