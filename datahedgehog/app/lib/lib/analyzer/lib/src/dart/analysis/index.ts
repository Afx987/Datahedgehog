/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/index.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var getUnitElement : (element : any) => any = (element : any) : any =>  {
    for(let e : any = element; e != null; e = e.enclosingElement){
        if (is(e, any)) {
            return e;
        }
        if (is(e, any)) {
            return e.definingCompilationUnit;
        }
    }
    throw new core.StateError(`Element not contained in compilation unit: ${element}`);
};
export var indexUnit : (unit : any) => any = (unit : any) : any =>  {
    return new _IndexAssembler().assemble(unit);
};
export namespace IndexElementInfo {
    export type Constructors = '_';
    export type Interface = Omit<IndexElementInfo, Constructors>;
}
@DartClass
export class IndexElementInfo {
    element : any;

    kind : any;

    constructor(element : any) {
    }
    @defaultFactory
    static $IndexElementInfo(element : any) : IndexElementInfo {
        let kind : any = IndexSyntheticElementKind.notSynthetic;
        let elementKind : any = element.kind;
        if (op(Op.EQUALS,elementKind,ElementKind.LIBRARY) || op(Op.EQUALS,elementKind,ElementKind.COMPILATION_UNIT)) {
            kind = IndexSyntheticElementKind.unit;
        }else if (element.isSynthetic) {
            if (op(Op.EQUALS,elementKind,ElementKind.CONSTRUCTOR)) {
                kind = IndexSyntheticElementKind.constructor;
                element = element.enclosingElement;
            }else if (op(Op.EQUALS,elementKind,ElementKind.FUNCTION) && op(Op.EQUALS,element.name,'loadLibrary')) {
                kind = IndexSyntheticElementKind.loadLibrary;
                element = element.library;
            }else if (op(Op.EQUALS,elementKind,ElementKind.FIELD)) {
                let field : any = element;
                kind = IndexSyntheticElementKind.field;
                element = (field.getter || field.setter);
            }else if (op(Op.EQUALS,elementKind,ElementKind.GETTER) || op(Op.EQUALS,elementKind,ElementKind.SETTER)) {
                let accessor : any = element;
                let enclosing : any = element.enclosingElement;
                let isEnumGetter : boolean = is(enclosing, any) && enclosing.isEnum;
                if (isEnumGetter && op(Op.EQUALS,accessor.name,'index')) {
                    kind = IndexSyntheticElementKind.enumIndex;
                    element = enclosing;
                }else if (isEnumGetter && op(Op.EQUALS,accessor.name,'values')) {
                    kind = IndexSyntheticElementKind.enumValues;
                    element = enclosing;
                }else {
                    kind = accessor.isGetter ? IndexSyntheticElementKind.getter : IndexSyntheticElementKind.setter;
                    element = accessor.variable;
                }
            }else if (op(Op.EQUALS,elementKind,ElementKind.TOP_LEVEL_VARIABLE)) {
                let property : any = element;
                kind = IndexSyntheticElementKind.topLevelVariable;
                element = (property.getter || property.setter);
            }else {
                throw new core.ArgumentError(`Unsupported synthetic element ${element.runtimeType}`);
            }
        }
        return new IndexElementInfo._(element,kind);
    }
    @namedConstructor
    _(element : any,kind : any) {
        this.element = element;
        this.kind = kind;
    }
    static _ : new(element : any,kind : any) => IndexElementInfo;

}

export namespace _ElementInfo {
    export type Constructors = '_ElementInfo';
    export type Interface = Omit<_ElementInfo, Constructors>;
}
@DartClass
export class _ElementInfo {
    unitId : number;

    nameIdUnitMember : _StringInfo;

    nameIdClassMember : _StringInfo;

    nameIdParameter : _StringInfo;

    kind : any;

    id : number;

    constructor(unitId : number,nameIdUnitMember : _StringInfo,nameIdClassMember : _StringInfo,nameIdParameter : _StringInfo,kind : any) {
    }
    @defaultConstructor
    _ElementInfo(unitId : number,nameIdUnitMember : _StringInfo,nameIdClassMember : _StringInfo,nameIdParameter : _StringInfo,kind : any) {
        this.unitId = unitId;
        this.nameIdUnitMember = nameIdUnitMember;
        this.nameIdClassMember = nameIdClassMember;
        this.nameIdParameter = nameIdParameter;
        this.kind = kind;
    }
}

export namespace _ElementRelationInfo {
    export type Constructors = '_ElementRelationInfo';
    export type Interface = Omit<_ElementRelationInfo, Constructors>;
}
@DartClass
export class _ElementRelationInfo {
    elementInfo : _ElementInfo;

    kind : any;

    offset : number;

    length : number;

    isQualified : boolean;

    constructor(elementInfo : _ElementInfo,kind : any,offset : number,length : number,isQualified : boolean) {
    }
    @defaultConstructor
    _ElementRelationInfo(elementInfo : _ElementInfo,kind : any,offset : number,length : number,isQualified : boolean) {
        this.elementInfo = elementInfo;
        this.kind = kind;
        this.offset = offset;
        this.length = length;
        this.isQualified = isQualified;
    }
}

export namespace _IndexAssembler {
    export type Constructors = '_IndexAssembler';
    export type Interface = Omit<_IndexAssembler, Constructors>;
}
@DartClass
export class _IndexAssembler {
    private static __$NULL_STRING;
    static get NULL_STRING() { 
        if (this.__$NULL_STRING===undefined) {
            this.__$NULL_STRING = '--nullString--';
        }
        return this.__$NULL_STRING;
    }

    elementMap : core.DartMap<any,_ElementInfo>;

    unitMap : core.DartMap<any,number>;

    unitLibraryUris : core.DartList<_StringInfo>;

    unitUnitUris : core.DartList<_StringInfo>;

    stringMap : core.DartMap<string,_StringInfo>;

    elementRelations : core.DartList<_ElementRelationInfo>;

    nameRelations : core.DartList<_NameRelationInfo>;

    nullString : _StringInfo;

    constructor() {
    }
    @defaultConstructor
    _IndexAssembler() {
        this.elementMap = new core.DartMap.literal([
        ]);
        this.unitMap = new core.DartMap.literal([
        ]);
        this.unitLibraryUris = new core.DartList.literal();
        this.unitUnitUris = new core.DartList.literal();
        this.stringMap = new core.DartMap.literal([
        ]);
        this.elementRelations = new core.DartList.literal();
        this.nameRelations = new core.DartList.literal();
        this.nullString = this._getStringInfo(_IndexAssembler.NULL_STRING);
    }
    addElementRelation(element : any,kind : any,offset : number,length : number,isQualified : boolean) : void {
        let elementInfo : _ElementInfo = this._getElementInfo(element);
        this.elementRelations.add(new _ElementRelationInfo(elementInfo,kind,offset,length,isQualified));
    }
    addNameRelation(name : string,kind : any,offset : number,isQualified : boolean) : void {
        let nameId : _StringInfo = this._getStringInfo(name);
        this.nameRelations.add(new _NameRelationInfo(nameId,kind,offset,isQualified));
    }
    assemble(unit : any) : any {
        unit.accept(new _IndexContributor(this));
        let stringInfoList : core.DartList<_StringInfo> = this.stringMap.values.toList();
        stringInfoList.sort((a : any,b : any) =>  {
            return new core.DartString(a.value).compareTo(b.value);
        });
        for(let i : number = 0; i < stringInfoList.length; i++){
            stringInfoList[i].id = i;
        }
        let elementInfoList : core.DartList<_ElementInfo> = this.elementMap.values.toList();
        elementInfoList.sort((a : any,b : any) =>  {
            let delta : number;
            delta = a.nameIdUnitMember.id - b.nameIdUnitMember.id;
            if (delta != null) {
                return delta;
            }
            delta = a.nameIdClassMember.id - b.nameIdClassMember.id;
            if (delta != null) {
                return delta;
            }
            return a.nameIdParameter.id - b.nameIdParameter.id;
        });
        for(let i : number = 0; i < elementInfoList.length; i++){
            elementInfoList[i].id = i;
        }
        this.elementRelations.sort((a : any,b : any) =>  {
            return a.elementInfo.id - b.elementInfo.id;
        });
        this.nameRelations.sort((a : any,b : any) =>  {
            return a.nameInfo.id - b.nameInfo.id;
        });
        return new bare.createInstance(any,null,{
            strings : stringInfoList.map((s : any) =>  {
                return s.value;
            }).toList(),nullStringId : this.nullString.id,unitLibraryUris : this.unitLibraryUris.map((s : any) =>  {
                return s.id;
            }).toList(),unitUnitUris : this.unitUnitUris.map((s : any) =>  {
                return s.id;
            }).toList(),elementKinds : elementInfoList.map((e : any) =>  {
                return e.kind;
            }).toList(),elementUnits : elementInfoList.map((e : any) =>  {
                return e.unitId;
            }).toList(),elementNameUnitMemberIds : elementInfoList.map((e : any) =>  {
                return e.nameIdUnitMember.id;
            }).toList(),elementNameClassMemberIds : elementInfoList.map((e : any) =>  {
                return e.nameIdClassMember.id;
            }).toList(),elementNameParameterIds : elementInfoList.map((e : any) =>  {
                return e.nameIdParameter.id;
            }).toList(),usedElements : this.elementRelations.map((r : any) =>  {
                return r.elementInfo.id;
            }).toList(),usedElementKinds : this.elementRelations.map((r : any) =>  {
                return r.kind;
            }).toList(),usedElementOffsets : this.elementRelations.map((r : any) =>  {
                return r.offset;
            }).toList(),usedElementLengths : this.elementRelations.map((r : any) =>  {
                return r.length;
            }).toList(),usedElementIsQualifiedFlags : this.elementRelations.map((r : any) =>  {
                return r.isQualified;
            }).toList(),usedNames : this.nameRelations.map((r : any) =>  {
                return r.nameInfo.id;
            }).toList(),usedNameKinds : this.nameRelations.map((r : any) =>  {
                return r.kind;
            }).toList(),usedNameOffsets : this.nameRelations.map((r : any) =>  {
                return r.offset;
            }).toList(),usedNameIsQualifiedFlags : this.nameRelations.map((r : any) =>  {
                return r.isQualified;
            }).toList()});
    }
    _getElementInfo(element : any) : _ElementInfo {
        if (is(element, any)) {
            element = (element as any).baseElement;
        }
        return this.elementMap.putIfAbsent(element,() =>  {
            let unitElement : any = getUnitElement(element);
            let unitId : number = this._getUnitId(unitElement);
            return this._newElementInfo(unitId,element);
        });
    }
    _getStringInfo(string : string) : _StringInfo {
        return this.stringMap.putIfAbsent(string,() =>  {
            return new _StringInfo(string);
        });
    }
    _getUnitId(unitElement : any) : number {
        return this.unitMap.putIfAbsent(unitElement,() =>  {
            /* TODO (AssertStatementImpl) : assert (unitLibraryUris.length == unitUnitUris.length); */;
            let id : number = this.unitUnitUris.length;
            this.unitLibraryUris.add(this._getUriInfo(unitElement.library.source.uri));
            this.unitUnitUris.add(this._getUriInfo(unitElement.source.uri));
            return id;
        });
    }
    _getUriInfo(uri : lib3.Uri) : _StringInfo {
        let str : string = uri.toString();
        return this._getStringInfo(str);
    }
    _newElementInfo(unitId : number,element : any) : _ElementInfo {
        let info : IndexElementInfo = new IndexElementInfo(element);
        element = info.element;
        let nameIdParameter : _StringInfo = this.nullString;
        let nameIdClassMember : _StringInfo = this.nullString;
        let nameIdUnitMember : _StringInfo = this.nullString;
        if (is(element, any)) {
            nameIdParameter = this._getStringInfo(element.name);
            element = element.enclosingElement;
        }
        if (is(((t)=>(!!t)?t.enclosingElement:null)(element), any)) {
            nameIdClassMember = this._getStringInfo(element.name);
            element = element.enclosingElement;
        }
        if (is(((t)=>(!!t)?t.enclosingElement:null)(element), any)) {
            nameIdUnitMember = this._getStringInfo(element.name);
        }
        return new _ElementInfo(unitId,nameIdUnitMember,nameIdClassMember,nameIdParameter,info.kind);
    }
}

export namespace _IndexContributor {
    export type Constructors = '_IndexContributor';
    export type Interface = Omit<_IndexContributor, Constructors>;
}
@DartClass
export class _IndexContributor extends any {
    assembler : _IndexAssembler;

    constructor(assembler : _IndexAssembler) {
    }
    @defaultConstructor
    _IndexContributor(assembler : _IndexAssembler) {
        this.assembler = assembler;
    }
    recordIsAncestorOf(descendant : any) : void {
        this._recordIsAncestorOf(descendant,descendant,false,new core.DartList.literal<any>());
    }
    recordNameRelation(node : any,kind : any,isQualified : boolean) : void {
        if (node != null) {
            this.assembler.addNameRelation(node.name,kind,node.offset,isQualified);
        }
    }
    recordOperatorReference(operator : any,element : any) : void {
        this.recordRelationToken(element,IndexRelationKind.IS_INVOKED_BY,operator);
    }
    recordRelation(element : any,kind : any,node : any,isQualified : boolean) : void {
        if (element != null && node != null) {
            this.recordRelationOffset(element,kind,node.offset,node.length,isQualified);
        }
    }
    recordRelationOffset(element : any,kind : any,offset : number,length : number,isQualified : boolean) : void {
        let elementKind : any = ((t)=>(!!t)?t.kind:null)(element);
        if (op(Op.EQUALS,elementKind,null) || op(Op.EQUALS,elementKind,ElementKind.DYNAMIC) || op(Op.EQUALS,elementKind,ElementKind.ERROR) || op(Op.EQUALS,elementKind,ElementKind.LABEL) || op(Op.EQUALS,elementKind,ElementKind.LOCAL_VARIABLE) || op(Op.EQUALS,elementKind,ElementKind.PREFIX) || op(Op.EQUALS,elementKind,ElementKind.TYPE_PARAMETER) || op(Op.EQUALS,elementKind,ElementKind.FUNCTION) && is(element, any) && is(element.enclosingElement, any) || op(Op.EQUALS,elementKind,ElementKind.PARAMETER) && is(element, any) && element.parameterKind != ParameterKind.NAMED || false) {
            return;
        }
        if (op(Op.EQUALS,elementKind,ElementKind.PARAMETER) && is(element, any) && element.enclosingElement.isSynthetic) {
            return;
        }
        this.assembler.addElementRelation(element,kind,offset,length,isQualified);
    }
    recordRelationToken(element : any,kind : any,token : any) : void {
        if (element != null && token != null) {
            this.recordRelationOffset(element,kind,token.offset,token.length,true);
        }
    }
    recordSuperType(typeName : any,kind : any) : void {
        let name : any = ((t)=>(!!t)?t.name:null)(typeName);
        if (name != null) {
            let element : any = name.staticElement;
            let isQualified : boolean;
            let relNode : any;
            if (is(name, any)) {
                isQualified = true;
                relNode = name.identifier;
            }else {
                isQualified = false;
                relNode = name;
            }
            this.recordRelation(element,kind,relNode,isQualified);
            this.recordRelation(element,IndexRelationKind.IS_REFERENCED_BY,relNode,isQualified);
            ((_61_)=>(!!_61_)?_61_.accept(this):null)(typeName.typeArguments);
        }
    }
    recordUriReference(element : any,directive : any) : void {
        this.recordRelation(element,IndexRelationKind.IS_REFERENCED_BY,directive.uri,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) {
        this.recordOperatorReference(node.operator,node.bestElement);
        super.visitAssignmentExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) {
        this.recordOperatorReference(node.operator,node.bestElement);
        super.visitBinaryExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) {
        if (op(Op.EQUALS,node.extendsClause,null)) {
            let objectElement : any = ((t)=>(!!t)?t.element:null)(resolutionMap.elementDeclaredByClassDeclaration(node).supertype);
            this.recordRelationOffset(objectElement,IndexRelationKind.IS_EXTENDED_BY,node.name.offset,0,true);
        }
        this.recordIsAncestorOf(node.element);
        super.visitClassDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassTypeAlias(node : any) {
        this.recordIsAncestorOf(node.element);
        super.visitClassTypeAlias(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorFieldInitializer(node : any) {
        let fieldName : any = node.fieldName;
        if (fieldName != null) {
            let element : any = fieldName.staticElement;
            this.recordRelation(element,IndexRelationKind.IS_WRITTEN_BY,fieldName,true);
        }
        ((_62_)=>(!!_62_)?_62_.accept(this):null)(node.expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) {
        let element : any = node.staticElement;
        element = this._getActualConstructorElement(element);
        if (node.name != null) {
            let offset : number = node.period.offset;
            let length : number = op(Op.MINUS,node.name.end,offset);
            this.recordRelationOffset(element,IndexRelationKind.IS_REFERENCED_BY,offset,length,true);
        }else {
            let offset : number = node.type.end;
            this.recordRelationOffset(element,IndexRelationKind.IS_REFERENCED_BY,offset,0,true);
        }
        node.type.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) {
        let element : any = node.element;
        this.recordUriReference(((t)=>(!!t)?t.exportedLibrary:null)(element),node);
        super.visitExportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExtendsClause(node : any) {
        this.recordSuperType(node.superclass,IndexRelationKind.IS_EXTENDED_BY);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImplementsClause(node : any) {
        for(let typeName of node.interfaces) {
            this.recordSuperType(typeName,IndexRelationKind.IS_IMPLEMENTED_BY);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) {
        let element : any = node.element;
        this.recordUriReference(((t)=>(!!t)?t.importedLibrary:null)(element),node);
        super.visitImportDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) {
        let element : any = node.bestElement;
        if (is(element, any)) {
            let operator : any = node.leftBracket;
            this.recordRelationToken(element,IndexRelationKind.IS_INVOKED_BY,operator);
        }
        super.visitIndexExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : any) {
        let name : any = node.methodName;
        let element : any = name.bestElement;
        let isQualified : boolean = node.realTarget != null;
        if (op(Op.EQUALS,element,null)) {
            this.recordNameRelation(name,IndexRelationKind.IS_INVOKED_BY,isQualified);
        }
        let kind : any = is(element, any) ? IndexRelationKind.IS_REFERENCED_BY : IndexRelationKind.IS_INVOKED_BY;
        this.recordRelation(element,kind,name,isQualified);
        ((_63_)=>(!!_63_)?_63_.accept(this):null)(node.target);
        ((_64_)=>(!!_64_)?_64_.accept(this):null)(node.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) {
        let element : any = node.element;
        if (((t)=>(!!t)?t.source:null)(element) != null) {
            this.recordUriReference(element,node);
        }
        super.visitPartDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) {
        this.recordOperatorReference(node.operator,node.bestElement);
        super.visitPostfixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) {
        this.recordOperatorReference(node.operator,node.bestElement);
        super.visitPrefixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) {
        let element : any = node.staticElement;
        if (node.constructorName != null) {
            let offset : number = node.period.offset;
            let length : number = op(Op.MINUS,node.constructorName.end,offset);
            this.recordRelationOffset(element,IndexRelationKind.IS_REFERENCED_BY,offset,length,true);
        }else {
            let offset : number = node.thisKeyword.end;
            this.recordRelationOffset(element,IndexRelationKind.IS_REFERENCED_BY,offset,0,true);
        }
        super.visitRedirectingConstructorInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        if (node.inDeclarationContext()) {
            return;
        }
        let element : any = node.bestElement;
        let isQualified : boolean = this._isQualified(node);
        if (op(Op.EQUALS,element,null)) {
            let inGetterContext : boolean = node.inGetterContext();
            let inSetterContext : boolean = node.inSetterContext();
            let kind : any;
            if (inGetterContext && inSetterContext) {
                kind = IndexRelationKind.IS_READ_WRITTEN_BY;
            }else if (inGetterContext) {
                kind = IndexRelationKind.IS_READ_BY;
            }else {
                kind = IndexRelationKind.IS_WRITTEN_BY;
            }
            this.recordNameRelation(node,kind,isQualified);
        }
        if (is(element, any)) {
            let parent : any = node.parent;
            let kind : any = is(parent, any) && op(Op.EQUALS,parent.identifier,node) ? IndexRelationKind.IS_WRITTEN_BY : IndexRelationKind.IS_REFERENCED_BY;
            this.recordRelation(element.field,kind,node,true);
            return;
        }
        if (is(element, any) && isNot(node.parent, any)) {
            return;
        }
        this.recordRelation(element,IndexRelationKind.IS_REFERENCED_BY,node,isQualified);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) {
        let element : any = node.staticElement;
        if (node.constructorName != null) {
            let offset : number = node.period.offset;
            let length : number = op(Op.MINUS,node.constructorName.end,offset);
            this.recordRelationOffset(element,IndexRelationKind.IS_REFERENCED_BY,offset,length,true);
        }else {
            let offset : number = node.superKeyword.end;
            this.recordRelationOffset(element,IndexRelationKind.IS_REFERENCED_BY,offset,0,true);
        }
        ((_65_)=>(!!_65_)?_65_.accept(this):null)(node.argumentList);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) {
        let parent : any = node.parent;
        if (is(parent, any) && op(Op.EQUALS,parent.superclass,node)) {
            this.recordSuperType(node,IndexRelationKind.IS_EXTENDED_BY);
        }else {
            super.visitTypeName(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitWithClause(node : any) {
        for(let typeName of node.mixinTypes) {
            this.recordSuperType(typeName,IndexRelationKind.IS_MIXED_IN_BY);
        }
    }
    _getActualConstructorElement(constructor : any) : any {
        let seenConstructors : core.DartSet<any> = new core.DartSet<any>();
        while (constructor != null && constructor.isSynthetic && constructor.redirectedConstructor != null){
            constructor = constructor.redirectedConstructor;
            if (!seenConstructors.add(constructor)) {
                return null;
            }
        }
        return constructor;
    }
    _isQualified(node : any) : boolean {
        if (node.isQualified) {
            return true;
        }
        let parent : any = node.parent;
        return is(parent, any) || is(parent, any);
    }
    _recordIsAncestorOf(descendant : any,ancestor : any,includeThis : boolean,visitedElements : core.DartList<any>) : void {
        if (op(Op.EQUALS,ancestor,null)) {
            return;
        }
        if (visitedElements.contains(ancestor)) {
            return;
        }
        visitedElements.add(ancestor);
        if (includeThis) {
            let offset : number = descendant.nameOffset;
            let length : number = descendant.nameLength;
            this.assembler.addElementRelation(ancestor,IndexRelationKind.IS_ANCESTOR_OF,offset,length,false);
        }
        {
            let superType : any = ancestor.supertype;
            if (superType != null) {
                this._recordIsAncestorOf(descendant,superType.element,true,visitedElements);
            }
        }
        for(let mixinType of ancestor.mixins) {
            this._recordIsAncestorOf(descendant,mixinType.element,true,visitedElements);
        }
        for(let implementedType of ancestor.interfaces) {
            this._recordIsAncestorOf(descendant,implementedType.element,true,visitedElements);
        }
    }
}

export namespace _NameRelationInfo {
    export type Constructors = '_NameRelationInfo';
    export type Interface = Omit<_NameRelationInfo, Constructors>;
}
@DartClass
export class _NameRelationInfo {
    nameInfo : _StringInfo;

    kind : any;

    offset : number;

    isQualified : boolean;

    constructor(nameInfo : _StringInfo,kind : any,offset : number,isQualified : boolean) {
    }
    @defaultConstructor
    _NameRelationInfo(nameInfo : _StringInfo,kind : any,offset : number,isQualified : boolean) {
        this.nameInfo = nameInfo;
        this.kind = kind;
        this.offset = offset;
        this.isQualified = isQualified;
    }
}

export namespace _StringInfo {
    export type Constructors = '_StringInfo';
    export type Interface = Omit<_StringInfo, Constructors>;
}
@DartClass
export class _StringInfo {
    value : string;

    id : number;

    constructor(value : string) {
    }
    @defaultConstructor
    _StringInfo(value : string) {
        this.value = value;
    }
}

export class properties {
}
