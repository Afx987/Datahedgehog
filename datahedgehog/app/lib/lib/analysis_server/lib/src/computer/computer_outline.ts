/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/computer_outline.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartUnitOutlineComputer {
    export type Constructors = 'DartUnitOutlineComputer';
    export type Interface = Omit<DartUnitOutlineComputer, Constructors>;
}
@DartClass
export class DartUnitOutlineComputer {
    file : string;

    unit : any;

    lineInfo : any;

    constructor(file : string,lineInfo : any,unit : any) {
    }
    @defaultConstructor
    DartUnitOutlineComputer(file : string,lineInfo : any,unit : any) {
        this.file = file;
        this.lineInfo = lineInfo;
        this.unit = unit;
    }
    compute() : any {
        let unitContents : core.DartList<any> = new core.DartList.literal<any>();
        for(let unitMember of this.unit.declarations) {
            if (is(unitMember, any)) {
                let classDeclaration : any = unitMember;
                let classContents : core.DartList<any> = new core.DartList.literal<any>();
                for(let classMember of classDeclaration.members) {
                    if (is(classMember, any)) {
                        let constructorDeclaration : any = classMember;
                        classContents.add(this._newConstructorOutline(constructorDeclaration));
                    }
                    if (is(classMember, any)) {
                        let fieldDeclaration : any = classMember;
                        let fields : any = fieldDeclaration.fields;
                        if (fields != null) {
                            let fieldType : any = fields.type;
                            let fieldTypeName : string = DartUnitOutlineComputer._safeToSource(fieldType);
                            for(let field of fields.variables) {
                                classContents.add(this._newVariableOutline(fieldTypeName,ElementKind.FIELD,field,fieldDeclaration.isStatic));
                            }
                        }
                    }
                    if (is(classMember, any)) {
                        let methodDeclaration : any = classMember;
                        classContents.add(this._newMethodOutline(methodDeclaration));
                    }
                }
                unitContents.add(this._newClassOutline(classDeclaration,classContents));
            }
            if (is(unitMember, any)) {
                let enumDeclaration : any = unitMember;
                let constantOutlines : core.DartList<any> = new core.DartList.literal<any>();
                for(let constant of enumDeclaration.constants) {
                    constantOutlines.add(this._newEnumConstant(constant));
                }
                unitContents.add(this._newEnumOutline(enumDeclaration,constantOutlines));
            }
            if (is(unitMember, any)) {
                let fieldDeclaration : any = unitMember;
                let fields : any = fieldDeclaration.variables;
                if (fields != null) {
                    let fieldType : any = fields.type;
                    let fieldTypeName : string = DartUnitOutlineComputer._safeToSource(fieldType);
                    for(let field of fields.variables) {
                        unitContents.add(this._newVariableOutline(fieldTypeName,ElementKind.TOP_LEVEL_VARIABLE,field,false));
                    }
                }
            }
            if (is(unitMember, any)) {
                let functionDeclaration : any = unitMember;
                unitContents.add(this._newFunctionOutline(functionDeclaration,true));
            }
            if (is(unitMember, any)) {
                let alias : any = unitMember;
                unitContents.add(this._newClassTypeAlias(alias));
            }
            if (is(unitMember, any)) {
                let alias : any = unitMember;
                unitContents.add(this._newFunctionTypeAliasOutline(alias));
            }
        }
        let unitOutline : any = this._newUnitOutline(unitContents);
        return unitOutline;
    }
    _addLocalFunctionOutlines(body : any) : core.DartList<any> {
        let contents : core.DartList<any> = new core.DartList.literal<any>();
        body.accept(new _LocalFunctionOutlinesVisitor(this,contents));
        return contents;
    }
    _getLocationNode(node : any) : any {
        let offset : number = node.offset;
        let length : number = node.length;
        return this._getLocationOffsetLength(offset,length);
    }
    _getLocationOffsetLength(offset : number,length : number) : any {
        let lineLocation : any = this.lineInfo.getLocation(offset);
        let startLine : number = lineLocation.lineNumber;
        let startColumn : number = lineLocation.columnNumber;
        return new bare.createInstance(any,null,this.file,offset,length,startLine,startColumn);
    }
    _getSourceRegion(node : any) : _SourceRegion {
        let endOffset : number = node.end;
        let firstOffset : number;
        let siblings : core.DartList<any>;
        let parent : any = node.parent;
        if (is(parent, any)) {
            let variableList : any = parent as any;
            let variables : core.DartList<any> = variableList.variables;
            let variableIndex : number = variables.indexOf(node);
            if (variableIndex == variables.length - 1) {
                endOffset = variableList.parent.end;
            }
            if (variableIndex == 0) {
                node = parent.parent;
                parent = node.parent;
            }else if (variableIndex >= 1) {
                firstOffset = variables[variableIndex - 1].end;
                return new _SourceRegion(firstOffset,endOffset - firstOffset);
            }
        }
        if (is(parent, any)) {
            firstOffset = node.offset;
            siblings = parent.declarations;
        }else if (is(parent, any)) {
            firstOffset = parent.leftBracket.end;
            siblings = parent.members;
        }else {
            let offset : number = node.offset;
            return new _SourceRegion(offset,endOffset - offset);
        }
        let index : number = siblings.indexOf(node);
        if (index == 0) {
            return new _SourceRegion(firstOffset,endOffset - firstOffset);
        }
        let prevSiblingEnd : number = siblings[index - 1].end;
        return new _SourceRegion(prevSiblingEnd,endOffset - prevSiblingEnd);
    }
    _newClassOutline(node : any,classContents : core.DartList<any>) : any {
        let nameNode : any = node.name;
        let name : string = nameNode.name;
        let sourceRegion : _SourceRegion = this._getSourceRegion(node);
        let element : any = new bare.createInstance(any,null,ElementKind.CLASS,name,Element.makeFlags({
            isPrivate : Identifier.isPrivateName(name),isDeprecated : DartUnitOutlineComputer._isDeprecated(node),isAbstract : node.isAbstract}),{
            location : this._getLocationNode(nameNode),typeParameters : DartUnitOutlineComputer._getTypeParametersStr(node.typeParameters)});
        return new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length,{
            children : nullIfEmpty(classContents)});
    }
    _newClassTypeAlias(node : any) : any {
        let nameNode : any = node.name;
        let name : string = nameNode.name;
        let sourceRegion : _SourceRegion = this._getSourceRegion(node);
        let element : any = new bare.createInstance(any,null,ElementKind.CLASS_TYPE_ALIAS,name,Element.makeFlags({
            isPrivate : Identifier.isPrivateName(name),isDeprecated : DartUnitOutlineComputer._isDeprecated(node),isAbstract : node.isAbstract}),{
            location : this._getLocationNode(nameNode),typeParameters : DartUnitOutlineComputer._getTypeParametersStr(node.typeParameters)});
        return new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length);
    }
    _newConstructorOutline(constructor : any) : any {
        let returnType : any = constructor.returnType;
        let name : string = returnType.name;
        let offset : number = returnType.offset;
        let length : number = returnType.length;
        let constructorNameNode : any = constructor.name;
        let isPrivate : boolean = false;
        if (constructorNameNode != null) {
            let constructorName : string = constructorNameNode.name;
            isPrivate = Identifier.isPrivateName(constructorName);
            name += `.${constructorName}`;
            offset = constructorNameNode.offset;
            length = constructorNameNode.length;
        }
        let sourceRegion : _SourceRegion = this._getSourceRegion(constructor);
        let parameters : any = constructor.parameters;
        let parametersStr : string = DartUnitOutlineComputer._safeToSource(parameters);
        let element : any = new bare.createInstance(any,null,ElementKind.CONSTRUCTOR,name,Element.makeFlags({
            isPrivate : isPrivate,isDeprecated : DartUnitOutlineComputer._isDeprecated(constructor)}),{
            location : this._getLocationOffsetLength(offset,length),parameters : parametersStr});
        let contents : core.DartList<any> = this._addLocalFunctionOutlines(constructor.body);
        let outline : any = new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length,{
            children : nullIfEmpty(contents)});
        return outline;
    }
    _newEnumConstant(node : any) : any {
        let nameNode : any = node.name;
        let name : string = nameNode.name;
        let sourceRegion : _SourceRegion = this._getSourceRegion(node);
        let element : any = new bare.createInstance(any,null,ElementKind.ENUM_CONSTANT,name,Element.makeFlags({
            isPrivate : Identifier.isPrivateName(name),isDeprecated : DartUnitOutlineComputer._isDeprecated(node)}),{
            location : this._getLocationNode(nameNode)});
        return new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length);
    }
    _newEnumOutline(node : any,children : core.DartList<any>) : any {
        let nameNode : any = node.name;
        let name : string = nameNode.name;
        let sourceRegion : _SourceRegion = this._getSourceRegion(node);
        let element : any = new bare.createInstance(any,null,ElementKind.ENUM,name,Element.makeFlags({
            isPrivate : Identifier.isPrivateName(name),isDeprecated : DartUnitOutlineComputer._isDeprecated(node)}),{
            location : this._getLocationNode(nameNode)});
        return new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length,{
            children : nullIfEmpty(children)});
    }
    _newFunctionOutline(function : any,isStatic : boolean) : any {
        let returnType : any = function.returnType;
        let nameNode : any = function.name;
        let name : string = nameNode.name;
        let functionExpression : any = function.functionExpression;
        let parameters : any = functionExpression.parameters;
        let kind : any;
        if (function.isGetter) {
            kind = ElementKind.GETTER;
        }else if (function.isSetter) {
            kind = ElementKind.SETTER;
        }else {
            kind = ElementKind.FUNCTION;
        }
        let sourceRegion : _SourceRegion = this._getSourceRegion(function);
        let parametersStr : string = DartUnitOutlineComputer._safeToSource(parameters);
        let returnTypeStr : string = DartUnitOutlineComputer._safeToSource(returnType);
        let element : any = new bare.createInstance(any,null,kind,name,Element.makeFlags({
            isPrivate : Identifier.isPrivateName(name),isDeprecated : DartUnitOutlineComputer._isDeprecated(function),isStatic : isStatic}),{
            location : this._getLocationNode(nameNode),parameters : parametersStr,returnType : returnTypeStr});
        let contents : core.DartList<any> = this._addLocalFunctionOutlines(functionExpression.body);
        let outline : any = new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length,{
            children : nullIfEmpty(contents)});
        return outline;
    }
    _newFunctionTypeAliasOutline(node : any) : any {
        let returnType : any = node.returnType;
        let nameNode : any = node.name;
        let name : string = nameNode.name;
        let sourceRegion : _SourceRegion = this._getSourceRegion(node);
        let parameters : any = node.parameters;
        let parametersStr : string = DartUnitOutlineComputer._safeToSource(parameters);
        let returnTypeStr : string = DartUnitOutlineComputer._safeToSource(returnType);
        let element : any = new bare.createInstance(any,null,ElementKind.FUNCTION_TYPE_ALIAS,name,Element.makeFlags({
            isPrivate : Identifier.isPrivateName(name),isDeprecated : DartUnitOutlineComputer._isDeprecated(node)}),{
            location : this._getLocationNode(nameNode),parameters : parametersStr,returnType : returnTypeStr,typeParameters : DartUnitOutlineComputer._getTypeParametersStr(node.typeParameters)});
        return new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length);
    }
    _newMethodOutline(method : any) : any {
        let returnType : any = method.returnType;
        let nameNode : any = method.name;
        let name : string = nameNode.name;
        let parameters : any = method.parameters;
        let kind : any;
        if (method.isGetter) {
            kind = ElementKind.GETTER;
        }else if (method.isSetter) {
            kind = ElementKind.SETTER;
        }else {
            kind = ElementKind.METHOD;
        }
        let sourceRegion : _SourceRegion = this._getSourceRegion(method);
        let parametersStr : string = ((_7_)=>(!!_7_)?_7_.toSource():null)(parameters);
        let returnTypeStr : string = DartUnitOutlineComputer._safeToSource(returnType);
        let element : any = new bare.createInstance(any,null,kind,name,Element.makeFlags({
            isPrivate : Identifier.isPrivateName(name),isDeprecated : DartUnitOutlineComputer._isDeprecated(method),isAbstract : method.isAbstract,isStatic : method.isStatic}),{
            location : this._getLocationNode(nameNode),parameters : parametersStr,returnType : returnTypeStr});
        let contents : core.DartList<any> = this._addLocalFunctionOutlines(method.body);
        let outline : any = new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length,{
            children : nullIfEmpty(contents)});
        return outline;
    }
    _newUnitOutline(unitContents : core.DartList<any>) : any {
        let element : any = new bare.createInstance(any,null,ElementKind.COMPILATION_UNIT,'<unit>',Element.makeFlags(),{
            location : this._getLocationNode(this.unit)});
        return new bare.createInstance(any,null,element,this.unit.offset,this.unit.length,{
            children : nullIfEmpty(unitContents)});
    }
    _newVariableOutline(typeName : string,kind : any,variable : any,isStatic : boolean) : any {
        let nameNode : any = variable.name;
        let name : string = nameNode.name;
        let sourceRegion : _SourceRegion = this._getSourceRegion(variable);
        let element : any = new bare.createInstance(any,null,kind,name,Element.makeFlags({
            isPrivate : Identifier.isPrivateName(name),isDeprecated : DartUnitOutlineComputer._isDeprecated(variable),isStatic : isStatic,isConst : variable.isConst,isFinal : variable.isFinal}),{
            location : this._getLocationNode(nameNode),returnType : typeName});
        let outline : any = new bare.createInstance(any,null,element,sourceRegion.offset,sourceRegion.length);
        return outline;
    }
    static _getTypeParametersStr(parameters : any) : string {
        if (op(Op.EQUALS,parameters,null)) {
            return null;
        }
        return parameters.toSource();
    }
    static _isDeprecated(declaration : any) : boolean {
        let element : any = declaration.element;
        return element != null && element.isDeprecated;
    }
    static _safeToSource(node : any) : string {
        return op(Op.EQUALS,node,null) ? '' : node.toSource();
    }
}

export namespace _LocalFunctionOutlinesVisitor {
    export type Constructors = '_LocalFunctionOutlinesVisitor';
    export type Interface = Omit<_LocalFunctionOutlinesVisitor, Constructors>;
}
@DartClass
export class _LocalFunctionOutlinesVisitor extends any {
    outlineComputer : DartUnitOutlineComputer;

    contents : core.DartList<any>;

    constructor(outlineComputer : DartUnitOutlineComputer,contents : core.DartList<any>) {
    }
    @defaultConstructor
    _LocalFunctionOutlinesVisitor(outlineComputer : DartUnitOutlineComputer,contents : core.DartList<any>) {
        this.outlineComputer = outlineComputer;
        this.contents = contents;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) {
        this.contents.add(this.outlineComputer._newFunctionOutline(node,false));
    }
}

export namespace _SourceRegion {
    export type Constructors = '_SourceRegion';
    export type Interface = Omit<_SourceRegion, Constructors>;
}
@DartClass
export class _SourceRegion {
    length : number;

    offset : number;

    constructor(offset : number,length : number) {
    }
    @defaultConstructor
    _SourceRegion(offset : number,length : number) {
        this.offset = offset;
        this.length = length;
    }
}

export class properties {
}
