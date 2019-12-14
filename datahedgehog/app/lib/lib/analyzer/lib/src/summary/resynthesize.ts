/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/resynthesize.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace SummaryResynthesizer {
    export type Constructors = 'SummaryResynthesizer';
    export type Interface = Omit<SummaryResynthesizer, Constructors>;
}
@DartClass
export class SummaryResynthesizer extends any {
    sourceFactory : any;

    _sources : core.DartMap<string,any>;

    _typeProvider : any;

    strongMode : boolean;

    _resynthesizedUnits : core.DartMap<string,core.DartMap<string,any>>;

    _resynthesizedElements : core.DartMap<string,core.DartMap<string,core.DartMap<string,any>>>;

    _resynthesizedLibraries : core.DartMap<string,any>;

    constructor(context : any,sourceFactory : any,strongMode : boolean) {
    }
    @defaultConstructor
    SummaryResynthesizer(context : any,sourceFactory : any,strongMode : boolean) {
        this._sources = new core.DartMap.literal([
        ]);
        this._resynthesizedUnits = new core.DartMap.literal([
        ]);
        this._resynthesizedElements = new core.DartMap.literal([
        ]);
        this._resynthesizedLibraries = new core.DartMap.literal([
        ]);
        super.DartObject(context);
        this.sourceFactory = sourceFactory;
        this.strongMode = strongMode;
        this._buildTypeProvider();
    }
    get resynthesisCount() : number {
        return this._resynthesizedLibraries.length;
    }
    get typeProvider() : any {
        return this._typeProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getElement(location : any) : any {
        let components : core.DartList<string> = location.components;
        let libraryUri : string = components[0];
        if (components.length == 1) {
            return this.getLibraryElement(libraryUri);
        }else if (components.length == 2) {
            let libraryElement : any = this.getLibraryElement(libraryUri);
            {
                let libraryMap : core.DartMap<string,any> = this._resynthesizedUnits.get(libraryUri);
                /* TODO (AssertStatementImpl) : assert (libraryMap != null); */;
                let unitUri : string = components[1];
                let unitElement : any = libraryMap.get(unitUri);
                if (unitElement != null) {
                    return unitElement;
                }
            }
            {
                let name : string = components[1];
                for(let prefix of libraryElement.prefixes) {
                    if (op(Op.EQUALS,prefix.name,name)) {
                        return prefix;
                    }
                }
            }
            throw new core.Exception(`The element not found in summary: ${location}`);
        }else if (components.length == 3 || components.length == 4) {
            let unitUri : string = components[1];
            let unitsInLibrary : core.DartMap<string,core.DartMap<string,any>> = this._resynthesizedElements.get(libraryUri);
            if (unitsInLibrary == null) {
                unitsInLibrary = new core.DartHashMap<string,core.DartMap<string,any>>();
                this._resynthesizedElements.set(libraryUri,unitsInLibrary);
            }
            let elementsInUnit : core.DartMap<string,any> = unitsInLibrary.get(unitUri);
            if (elementsInUnit == null) {
                let libraryMap : core.DartMap<string,any> = this._resynthesizedUnits.get(libraryUri);
                if (libraryMap == null) {
                    this.getLibraryElement(libraryUri);
                    libraryMap = this._resynthesizedUnits.get(libraryUri);
                    /* TODO (AssertStatementImpl) : assert (libraryMap != null); */;
                }
                let unitElement : any = libraryMap.get(unitUri);
                if (unitElement != null) {
                    elementsInUnit = new core.DartHashMap<string,any>();
                    var putElement : (e : any) => void = (e : any) : void =>  {
                        let id : string = is(e, any) ? e.identifier : e.name;
                        op(Op.INDEX_ASSIGN,elementsInUnit,id,e);
                    };
                    unitElement.accessors.forEach(putElement);
                    unitElement.enums.forEach(putElement);
                    unitElement.functions.forEach(putElement);
                    unitElement.functionTypeAliases.forEach(putElement);
                    unitElement.topLevelVariables.forEach(putElement);
                    unitElement.types.forEach(putElement);
                    unitsInLibrary.set(unitUri,elementsInUnit);
                }
            }
            let element : any = elementsInUnit.get(components[2]);
            if (element != null && components.length == 4) {
                let name : string = components[3];
                let parentElement : any = element;
                if (is(parentElement, any)) {
                    if (new core.DartString(name).endsWith('?')) {
                        element = parentElement.getGetter(new core.DartString(name).substring(0,new core.DartString(name).length - 1));
                    }else if (new core.DartString(name).endsWith('=')) {
                        element = parentElement.getSetter(new core.DartString(name).substring(0,new core.DartString(name).length - 1));
                    }else if (new core.DartString(name).isEmpty) {
                        element = parentElement.unnamedConstructor;
                    }else {
                        element = ((parentElement.getField(name) || parentElement.getMethod(name)) || parentElement.getNamedConstructor(name));
                    }
                }else {
                    throw new core.StateError(`4-element locations not supported for ${element.runtimeType}`);
                }
            }
            if (op(Op.EQUALS,element,null)) {
                throw new core.Exception(`Element not found in summary: ${location}`);
            }
            return element;
        }else {
            throw new core.UnimplementedError(location.toString());
        }
    }
    getLibraryElement(uri : string) : any {
        return this._resynthesizedLibraries.putIfAbsent(uri,() =>  {
            let serializedLibrary : any = this.getLinkedSummary(uri);
            let librarySource : any = this._getSource(uri);
            if (op(Op.EQUALS,serializedLibrary,null)) {
                let libraryElement : any = new bare.createInstance(any,null,context,'',-1,0);
                libraryElement.isSynthetic = true;
                let unitElement : any = new bare.createInstance(any,null,librarySource.shortName);
                libraryElement.definingCompilationUnit = unitElement;
                unitElement.source = librarySource;
                unitElement.librarySource = librarySource;
                libraryElement.createLoadLibraryFunction(this.typeProvider);
                libraryElement.publicNamespace = new bare.createInstance(any,null,new core.DartMap.literal([
                ]));
                libraryElement.exportNamespace = new bare.createInstance(any,null,new core.DartMap.literal([
                ]));
                return libraryElement;
            }
            let unlinkedSummary : any = this.getUnlinkedSummary(uri);
            if (op(Op.EQUALS,unlinkedSummary,null)) {
                throw new core.StateError(`Unable to find unlinked summary: ${uri}`);
            }
            let serializedUnits : core.DartList<any> = new core.DartList.literal<any>(unlinkedSummary);
            for(let part of serializedUnits[0].publicNamespace.parts) {
                let partSource : any = this.sourceFactory.resolveUri(librarySource,part);
                let partUnlinkedUnit : any;
                if (partSource != null) {
                    let partAbsUri : string = partSource.uri.toString();
                    partUnlinkedUnit = this.getUnlinkedSummary(partAbsUri);
                }
                serializedUnits.add((partUnlinkedUnit || new bare.createInstance(any,null,{
                    codeRange : new bare.createInstance(any,null)})));
            }
            let libraryResynthesizer : _LibraryResynthesizer = new _LibraryResynthesizer(this,serializedLibrary,serializedUnits,librarySource);
            let library : any = libraryResynthesizer.buildLibrary();
            this._resynthesizedUnits.set(uri,libraryResynthesizer.resynthesizedUnits);
            return library;
        });
    }
    @Abstract
    getLinkedSummary(uri : string) : any{ throw 'abstract'}
    @Abstract
    getUnlinkedSummary(uri : string) : any{ throw 'abstract'}
    @Abstract
    hasLibrarySummary(uri : string) : boolean{ throw 'abstract'}
    _buildTypeProvider() : void {
        let coreLibrary = this.getLibraryElement('dart:core') as any;
        let asyncLibrary = this.getLibraryElement('dart:async') as any;
        let summaryTypeProvider : any = new bare.createInstance(any,null);
        summaryTypeProvider.initializeCore(coreLibrary);
        summaryTypeProvider.initializeAsync(asyncLibrary);
        coreLibrary.createLoadLibraryFunction(summaryTypeProvider);
        asyncLibrary.createLoadLibraryFunction(summaryTypeProvider);
        this._typeProvider = summaryTypeProvider;
    }
    _getSource(uri : string) : any {
        return this._sources.putIfAbsent(uri,() =>  {
            return this.sourceFactory.forUri(uri);
        });
    }
}

export namespace _ConstExprBuilder {
    export type Constructors = '_ConstExprBuilder';
    export type Interface = Omit<_ConstExprBuilder, Constructors>;
}
@DartClass
export class _ConstExprBuilder {
    private static __$ARGUMENT_LIST;
    static get ARGUMENT_LIST() { 
        if (this.__$ARGUMENT_LIST===undefined) {
            this.__$ARGUMENT_LIST = 'ARGUMENT_LIST';
        }
        return this.__$ARGUMENT_LIST;
    }

    resynthesizer : _UnitResynthesizer;

    context : any;

    uc : any;

    intPtr : number;

    doublePtr : number;

    stringPtr : number;

    refPtr : number;

    stack : core.DartList<any>;

    constructor(resynthesizer : _UnitResynthesizer,context : any,uc : any) {
    }
    @defaultConstructor
    _ConstExprBuilder(resynthesizer : _UnitResynthesizer,context : any,uc : any) {
        this.intPtr = 0;
        this.doublePtr = 0;
        this.stringPtr = 0;
        this.refPtr = 0;
        this.stack = new core.DartList.literal<any>();
        this.resynthesizer = resynthesizer;
        this.context = context;
        this.uc = uc;
    }
    get _enclosingConstructor() : any {
        for(let e : any = this.context; e != null; e = e.enclosingElement){
            if (is(e, any)) {
                return e;
            }
        }
        throw new core.StateError(`Unable to find the enclosing constructor of ${this.context}`);
    }
    build() : any {
        if (!this.uc.isValidConst) {
            return AstTestFactory.identifier3('$$invalidConstExpr$$');
        }
        for(let operation of this.uc.operations) {
            switch (operation) {
                case UnlinkedExprOperation.pushNull:
                    this._push(AstTestFactory.nullLiteral());
                    break;
                case UnlinkedExprOperation.pushFalse:
                    this._push(AstTestFactory.booleanLiteral(false));
                    break;
                case UnlinkedExprOperation.pushTrue:
                    this._push(AstTestFactory.booleanLiteral(true));
                    break;
                case UnlinkedExprOperation.pushInt:
                    let value : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
                    this._push(AstTestFactory.integer(value));
                    break;
                case UnlinkedExprOperation.pushLongInt:
                    let value : number = 0;
                    let count : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
                    for(let i : number = 0; i < count; i++){
                        let next : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
                        value = value << 32 | next;
                    }
                    this._push(AstTestFactory.integer(value));
                    break;
                case UnlinkedExprOperation.pushDouble:
                    let value : double = op(Op.INDEX,this.uc.doubles,this.doublePtr++);
                    this._push(AstTestFactory.doubleLiteral(value));
                    break;
                case UnlinkedExprOperation.makeSymbol:
                    let component : string = op(Op.INDEX,this.uc.strings,this.stringPtr++);
                    this._push(AstTestFactory.symbolLiteral(new core.DartList.literal(component)));
                    break;
                case UnlinkedExprOperation.pushString:
                    let value : string = op(Op.INDEX,this.uc.strings,this.stringPtr++);
                    this._push(AstTestFactory.string2(value));
                    break;
                case UnlinkedExprOperation.concatenate:
                    let count : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
                    let elements : core.DartList<any> = new core.DartList.literal<any>();
                    for(let i : number = 0; i < count; i++){
                        let expr : any = this._pop();
                        let element : any = this._newInterpolationElement(expr);
                        elements.insert(0,element);
                    }
                    this._push(AstTestFactory.string(elements));
                    break;
                case UnlinkedExprOperation.equal:
                    this._pushBinary(TokenType.EQ_EQ);
                    break;
                case UnlinkedExprOperation.notEqual:
                    this._pushBinary(TokenType.BANG_EQ);
                    break;
                case UnlinkedExprOperation.and:
                    this._pushBinary(TokenType.AMPERSAND_AMPERSAND);
                    break;
                case UnlinkedExprOperation.or:
                    this._pushBinary(TokenType.BAR_BAR);
                    break;
                case UnlinkedExprOperation.bitXor:
                    this._pushBinary(TokenType.CARET);
                    break;
                case UnlinkedExprOperation.bitAnd:
                    this._pushBinary(TokenType.AMPERSAND);
                    break;
                case UnlinkedExprOperation.bitOr:
                    this._pushBinary(TokenType.BAR);
                    break;
                case UnlinkedExprOperation.bitShiftLeft:
                    this._pushBinary(TokenType.LT_LT);
                    break;
                case UnlinkedExprOperation.bitShiftRight:
                    this._pushBinary(TokenType.GT_GT);
                    break;
                case UnlinkedExprOperation.add:
                    this._pushBinary(TokenType.PLUS);
                    break;
                case UnlinkedExprOperation.subtract:
                    this._pushBinary(TokenType.MINUS);
                    break;
                case UnlinkedExprOperation.multiply:
                    this._pushBinary(TokenType.STAR);
                    break;
                case UnlinkedExprOperation.divide:
                    this._pushBinary(TokenType.SLASH);
                    break;
                case UnlinkedExprOperation.floorDivide:
                    this._pushBinary(TokenType.TILDE_SLASH);
                    break;
                case UnlinkedExprOperation.modulo:
                    this._pushBinary(TokenType.PERCENT);
                    break;
                case UnlinkedExprOperation.greater:
                    this._pushBinary(TokenType.GT);
                    break;
                case UnlinkedExprOperation.greaterEqual:
                    this._pushBinary(TokenType.GT_EQ);
                    break;
                case UnlinkedExprOperation.less:
                    this._pushBinary(TokenType.LT);
                    break;
                case UnlinkedExprOperation.lessEqual:
                    this._pushBinary(TokenType.LT_EQ);
                    break;
                case UnlinkedExprOperation.complement:
                    this._pushPrefix(TokenType.TILDE);
                    break;
                case UnlinkedExprOperation.negate:
                    this._pushPrefix(TokenType.MINUS);
                    break;
                case UnlinkedExprOperation.not:
                    this._pushPrefix(TokenType.BANG);
                    break;
                case UnlinkedExprOperation.conditional:
                    let elseExpr : any = this._pop();
                    let thenExpr : any = this._pop();
                    let condition : any = this._pop();
                    this._push(AstTestFactory.conditionalExpression(condition,thenExpr,elseExpr));
                    break;
                case UnlinkedExprOperation.invokeMethodRef:
                    this._pushInvokeMethodRef();
                    break;
                case UnlinkedExprOperation.makeUntypedList:
                    this._pushList(null);
                    break;
                case UnlinkedExprOperation.makeTypedList:
                    let itemType : any = this._newTypeName();
                    this._pushList(AstTestFactory.typeArgumentList(new core.DartList.literal<any>(itemType)));
                    break;
                case UnlinkedExprOperation.makeUntypedMap:
                    this._pushMap(null);
                    break;
                case UnlinkedExprOperation.makeTypedMap:
                    let keyType : any = this._newTypeName();
                    let valueType : any = this._newTypeName();
                    this._pushMap(AstTestFactory.typeArgumentList(new core.DartList.literal<any>(keyType,valueType)));
                    break;
                case UnlinkedExprOperation.pushReference:
                    this._pushReference();
                    break;
                case UnlinkedExprOperation.extractProperty:
                    this._pushExtractProperty();
                    break;
                case UnlinkedExprOperation.invokeConstructor:
                    this._pushInstanceCreation();
                    break;
                case UnlinkedExprOperation.pushParameter:
                    let name : string = op(Op.INDEX,this.uc.strings,this.stringPtr++);
                    let identifier : any = AstTestFactory.identifier3(name);
                    identifier.staticElement = this._enclosingConstructor.parameters.firstWhere((parameter : any) =>  {
                        return op(Op.EQUALS,parameter.name,name);
                    },{
                        orElse : () =>  {
                            return throw new core.StateError(`Unable to resolve constructor parameter: ${name}`);
                        }});
                    this._push(identifier);
                    break;
                case UnlinkedExprOperation.ifNull:
                    this._pushBinary(TokenType.QUESTION_QUESTION);
                    break;
                case UnlinkedExprOperation.await:
                    let expression : any = this._pop();
                    this._push(AstTestFactory.awaitExpression(expression));
                    break;
                case UnlinkedExprOperation.pushSuper:
                    this._push(AstTestFactory.superExpression());
                    break;
                case UnlinkedExprOperation.pushThis:
                    this._push(AstTestFactory.thisExpression());
                    break;
                case UnlinkedExprOperation.assignToRef:
                case UnlinkedExprOperation.assignToProperty:
                case UnlinkedExprOperation.assignToIndex:
                case UnlinkedExprOperation.extractIndex:
                case UnlinkedExprOperation.invokeMethod:
                case UnlinkedExprOperation.cascadeSectionBegin:
                case UnlinkedExprOperation.cascadeSectionEnd:
                case UnlinkedExprOperation.typeCast:
                case UnlinkedExprOperation.typeCheck:
                case UnlinkedExprOperation.throwException:
                case UnlinkedExprOperation.pushLocalFunctionReference:
                case UnlinkedExprOperation.pushError:
                case UnlinkedExprOperation.pushTypedAbstract:
                case UnlinkedExprOperation.pushUntypedAbstract:
                    throw new core.UnimplementedError(`Unexpected ${operation} in a constant expression.`);
            }
        }
        return this.stack.single;
    }
    _buildArguments() : core.DartList<any> {
        let arguments : core.DartList<any>;
        {
            let numNamedArgs : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
            let numPositionalArgs : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
            let numArgs : number = numNamedArgs + numPositionalArgs;
            arguments = this._removeTopItems(numArgs);
            for(let i : number = 0; i < numNamedArgs; i++){
                let name : string = op(Op.INDEX,this.uc.strings,this.stringPtr++);
                let index : number = numPositionalArgs + i;
                arguments[index] = AstTestFactory.namedExpression2(name,arguments[index]);
            }
        }
        return arguments;
    }
    _buildIdentifierSequence(info : _ReferenceInfo) : any {
        let enclosing : any;
        if (info.enclosing != null) {
            enclosing = this._buildIdentifierSequence(info.enclosing);
        }
        let element : any = info.element;
        if (op(Op.EQUALS,element,null) && info.name == 'length') {
            element = this._getStringLengthElement();
        }
        if (op(Op.EQUALS,enclosing,null)) {
            return ((_) : any =>  {
                {
                    _.staticElement = element;
                    return _;
                }
            })(AstTestFactory.identifier3(info.name));
        }
        if (is(enclosing, any)) {
            let identifier : any = ((_) : any =>  {
                {
                    _.staticElement = element;
                    return _;
                }
            })(AstTestFactory.identifier3(info.name));
            return AstTestFactory.identifier(enclosing,identifier);
        }
        let property : any = ((_) : any =>  {
            {
                _.staticElement = element;
                return _;
            }
        })(AstTestFactory.identifier3(info.name));
        return AstTestFactory.propertyAccess(enclosing,property);
    }
    _buildTypeAst(type : any) : any {
        let argumentNodes : core.DartList<any>;
        if (is(type, any)) {
            if (!this.resynthesizer.libraryResynthesizer.typesWithImplicitTypeArguments.contains(type)) {
                let typeArguments : core.DartList<any> = type.typeArguments;
                argumentNodes = typeArguments.every((a : any) =>  {
                    return a.isDynamic;
                }) ? null : typeArguments.map(this._buildTypeAst.bind(this)).toList();
            }
        }
        let node : any = AstTestFactory.typeName4(type.name,argumentNodes);
        node.type = type;
        (node.name as any).staticElement = type.element;
        return node;
    }
    _getStringLengthElement() : any {
        return this.resynthesizer.typeProvider.stringType.getGetter('length');
    }
    _newInterpolationElement(expr : any) : any {
        if (is(expr, any)) {
            return astFactory.interpolationString(expr.literal,expr.value);
        }else {
            return astFactory.interpolationExpression(TokenFactory.tokenFromType(TokenType.STRING_INTERPOLATION_EXPRESSION),expr,TokenFactory.tokenFromType(TokenType.CLOSE_CURLY_BRACKET));
        }
    }
    _newTypeName() : any {
        let typeRef : any = op(Op.INDEX,this.uc.references,this.refPtr++);
        let type : any = this.resynthesizer.buildType(this.context,typeRef);
        return this._buildTypeAst(type);
    }
    _pop() : any {
        return this.stack.removeLast();
    }
    _push(expr : any) : void {
        this.stack.add(expr);
    }
    _pushBinary(operator : any) : void {
        let right : any = this._pop();
        let left : any = this._pop();
        this._push(AstTestFactory.binaryExpression(left,operator,right));
    }
    _pushExtractProperty() : void {
        let target : any = this._pop();
        let name : string = op(Op.INDEX,this.uc.strings,this.stringPtr++);
        let propertyNode : any = AstTestFactory.identifier3(name);
        if (name == 'length') {
            propertyNode.staticElement = this._getStringLengthElement();
        }
        this._push(AstTestFactory.propertyAccess(target,propertyNode));
    }
    _pushInstanceCreation() : void {
        let ref : any = op(Op.INDEX,this.uc.references,this.refPtr++);
        let info : _ReferenceInfo = this.resynthesizer.getReferenceInfo(ref.reference);
        let typeNode : any;
        let constructorName : string;
        let constructorElement : any;
        if (info.element != null) {
            if (is(info.element, any)) {
                constructorName = info.name;
            }else if (is(info.element, any)) {
                constructorName = null;
            }else {
                let arguments : core.DartList<any> = this._buildArguments();
                let name : any = AstTestFactory.identifier3(info.name);
                name.staticElement = info.element;
                name.setProperty(_ConstExprBuilder.ARGUMENT_LIST,AstTestFactory.argumentList(arguments));
                this._push(name);
                return;
            }
            let definingType : any = this.resynthesizer._createConstructorDefiningType(this.context,info,ref.typeArguments);
            constructorElement = this.resynthesizer._getConstructorForInfo(definingType,info);
            typeNode = this._buildTypeAst(definingType);
        }else {
            if (info.enclosing != null) {
                if (info.enclosing.enclosing != null) {
                    let typeName : any = AstTestFactory.identifier5(info.enclosing.enclosing.name,info.enclosing.name);
                    typeName.prefix.staticElement = info.enclosing.enclosing.element;
                    typeName.identifier.staticElement = info.enclosing.element;
                    typeName.identifier.staticType = info.enclosing.type;
                    typeNode = AstTestFactory.typeName3(typeName);
                    typeNode.type = info.enclosing.type;
                    constructorName = info.name;
                }else if (info.enclosing.element != null) {
                    let typeName : any = AstTestFactory.identifier3(info.enclosing.name);
                    typeName.staticElement = info.enclosing.element;
                    typeName.staticType = info.enclosing.type;
                    typeNode = AstTestFactory.typeName3(typeName);
                    typeNode.type = info.enclosing.type;
                    constructorName = info.name;
                }else {
                    typeNode = AstTestFactory.typeName3(AstTestFactory.identifier5(info.enclosing.name,info.name));
                    constructorName = null;
                }
            }else {
                typeNode = AstTestFactory.typeName4(info.name);
            }
        }
        let arguments : core.DartList<any> = this._buildArguments();
        let constructorNode : any;
        if (constructorName != null) {
            constructorNode = AstTestFactory.constructorName(typeNode,constructorName);
            constructorNode.name.staticElement = constructorElement;
        }else {
            constructorNode = AstTestFactory.constructorName(typeNode,null);
        }
        constructorNode.staticElement = constructorElement;
        let instanceCreation : any = AstTestFactory.instanceCreationExpression(Keyword.CONST,constructorNode,arguments);
        instanceCreation.staticElement = constructorElement;
        this._push(instanceCreation);
    }
    _pushInvokeMethodRef() : void {
        let arguments : core.DartList<any> = this._buildArguments();
        let ref : any = op(Op.INDEX,this.uc.references,this.refPtr++);
        let info : _ReferenceInfo = this.resynthesizer.getReferenceInfo(ref.reference);
        let node : any = this._buildIdentifierSequence(info);
        let typeArguments : any;
        let numTypeArguments : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
        if (numTypeArguments > 0) {
            let typeNames : core.DartList<any> = new core.DartList<any>(numTypeArguments);
            for(let i : number = 0; i < numTypeArguments; i++){
                typeNames[i] = this._newTypeName();
            }
            typeArguments = AstTestFactory.typeArgumentList(typeNames);
        }
        if (is(node, any)) {
            this._push(astFactory.methodInvocation(null,TokenFactory.tokenFromType(TokenType.PERIOD),node,typeArguments,AstTestFactory.argumentList(arguments)));
        }else {
            throw new core.UnimplementedError(`For ${((t)=>(!!t)?t.runtimeType:null)(node)}: ${node}`);
        }
    }
    _pushList(typeArguments : any) : void {
        let count : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
        let elements : core.DartList<any> = new core.DartList.literal<any>();
        for(let i : number = 0; i < count; i++){
            elements.insert(0,this._pop());
        }
        this._push(AstTestFactory.listLiteral2(Keyword.CONST,typeArguments,elements));
    }
    _pushMap(typeArguments : any) : void {
        let count : number = op(Op.INDEX,this.uc.ints,this.intPtr++);
        let entries : core.DartList<any> = new core.DartList.literal<any>();
        for(let i : number = 0; i < count; i++){
            let value : any = this._pop();
            let key : any = this._pop();
            entries.insert(0,AstTestFactory.mapLiteralEntry2(key,value));
        }
        this._push(AstTestFactory.mapLiteral(Keyword.CONST,typeArguments,entries));
    }
    _pushPrefix(operator : any) : void {
        let operand : any = this._pop();
        this._push(AstTestFactory.prefixExpression(operator,operand));
    }
    _pushReference() : void {
        let ref : any = op(Op.INDEX,this.uc.references,this.refPtr++);
        let info : _ReferenceInfo = this.resynthesizer.getReferenceInfo(ref.reference);
        let node : any = this._buildIdentifierSequence(info);
        this._push(node);
    }
    _removeTopItems(count : number) : core.DartList<any> {
        let start : number = this.stack.length - count;
        let end : number = this.stack.length;
        let items : core.DartList<any> = this.stack.getRange(start,end).toList();
        this.stack.removeRange(start,end);
        return items;
    }
}

export namespace _DeferredInitializerElement {
    export type Constructors = '_DeferredInitializerElement';
    export type Interface = Omit<_DeferredInitializerElement, Constructors>;
}
@DartClass
export class _DeferredInitializerElement extends any {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : any;

    constructor(enclosingElement : any) {
    }
    @defaultConstructor
    _DeferredInitializerElement(enclosingElement : any) {
        super.DartObject(null,null);
        this.enclosingElement = enclosingElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return this.enclosingElement.initializer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        return this.enclosingElement.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get location() : any {
        return this.actualElement.location;
    }
}

export namespace _DeferredLocalFunctionElement {
    export type Constructors = '_DeferredLocalFunctionElement';
    export type Interface = Omit<_DeferredLocalFunctionElement, Constructors>;
}
@DartClass
export class _DeferredLocalFunctionElement extends any {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : any;

    _localIndex : number;

    constructor(enclosingElement : any,_localIndex : number) {
    }
    @defaultConstructor
    _DeferredLocalFunctionElement(enclosingElement : any,_localIndex : number) {
        super.DartObject(null,null);
        this.enclosingElement = enclosingElement;
        this._localIndex = _localIndex;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        let enclosingElement : any = this.enclosingElement;
        if (is(enclosingElement, any) && enclosingElement.isSynthetic) {
            return enclosingElement.variable.initializer;
        }else {
            return op(Op.INDEX,enclosingElement.functions,this._localIndex);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        return this.enclosingElement.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get location() : any {
        return this.actualElement.location;
    }
}

export namespace _DeferredLocalVariableElement {
    export type Constructors = '_DeferredLocalVariableElement';
    export type Interface = Omit<_DeferredLocalVariableElement, Constructors>;
}
@DartClass
export class _DeferredLocalVariableElement extends any {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enclosingElement : any;

    _localIndex : number;

    constructor(enclosingElement : any,_localIndex : number) {
    }
    @defaultConstructor
    _DeferredLocalVariableElement(enclosingElement : any,_localIndex : number) {
        super.DartObject(null,null);
        this.enclosingElement = enclosingElement;
        this._localIndex = _localIndex;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get actualElement() : any {
        return op(Op.INDEX,this.enclosingElement.localVariables,this._localIndex);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        return this.enclosingElement.context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get location() : any {
        return this.actualElement.location;
    }
}

export namespace _LibraryResynthesizer {
    export type Constructors = '_LibraryResynthesizer';
    export type Interface = Omit<_LibraryResynthesizer, Constructors>;
}
@DartClass
export class _LibraryResynthesizer {
    summaryResynthesizer : SummaryResynthesizer;

    linkedLibrary : any;

    unlinkedUnits : core.DartList<any>;

    librarySource : any;

    libraryUri : string;

    isCoreLibrary : boolean;

    library : any;

    resynthesizedUnits : core.DartMap<string,any>;

    typesWithImplicitTypeArguments : core.DartSet<any>;

    constructor(summaryResynthesizer : SummaryResynthesizer,linkedLibrary : any,unlinkedUnits : core.DartList<any>,librarySource : any) {
    }
    @defaultConstructor
    _LibraryResynthesizer(summaryResynthesizer : SummaryResynthesizer,linkedLibrary : any,unlinkedUnits : core.DartList<any>,librarySource : any) {
        this.resynthesizedUnits = new core.DartMap.literal([
        ]);
        this.typesWithImplicitTypeArguments = new core.DartSet.identity();
        this.summaryResynthesizer = summaryResynthesizer;
        this.linkedLibrary = linkedLibrary;
        this.unlinkedUnits = unlinkedUnits;
        this.librarySource = librarySource;
        this.libraryUri = this.librarySource.uri.toString();
        this.isCoreLibrary = this.libraryUri == 'dart:core';
    }
    buildCombinator(serializedCombinator : any) : any {
        if (serializedCombinator.shows.isNotEmpty) {
            return new bare.createInstance(any,null,serializedCombinator);
        }else {
            return new bare.createInstance(any,null,serializedCombinator);
        }
    }
    buildExportName(exportName : any) : any {
        let name : string = exportName.name;
        if (op(Op.EQUALS,exportName.kind,ReferenceKind.topLevelPropertyAccessor) && !new core.DartString(name).endsWith('=')) {
            name += '?';
        }
        let location : any = new bare.createInstance(any,null,this.getReferencedLocationComponents(exportName.dependency,exportName.unit,name));
        switch (exportName.kind) {
            case ReferenceKind.classOrEnum:
                return new bare.createInstance(any,null,this.summaryResynthesizer,location);
            case ReferenceKind.typedef:
                return new bare.createInstance(any,null,this.summaryResynthesizer,location);
            case ReferenceKind.genericFunctionTypedef:
                return new bare.createInstance(any,null,this.summaryResynthesizer,location);
            case ReferenceKind.topLevelFunction:
                return new bare.createInstance(any,null,this.summaryResynthesizer,location);
            case ReferenceKind.topLevelPropertyAccessor:
                return new bare.createInstance(any,null,this.summaryResynthesizer,location);
            case ReferenceKind.constructor:
            case ReferenceKind.function:
            case ReferenceKind.propertyAccessor:
            case ReferenceKind.method:
            case ReferenceKind.prefix:
            case ReferenceKind.unresolved:
            case ReferenceKind.variable:
                throw new core.StateError(`Unexpected export name kind: ${exportName.kind}`);
        }
        return null;
    }
    buildExportNamespace(publicNamespace : any,exportNames : core.DartList<any>) : any {
        let definedNames : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        publicNamespace.definedNames.forEach((name : string,element : any) =>  {
            op(Op.INDEX_ASSIGN,definedNames,name,element);
        });
        for(let exportName of exportNames) {
            definedNames.putIfAbsent(exportName.name,() =>  {
                return this.buildExportName(exportName);
            });
        }
        return new bare.createInstance(any,null,definedNames);
    }
    buildLibrary() : any {
        let hasName : boolean = this.unlinkedUnits[0].libraryName.isNotEmpty;
        this.library = new bare.createInstance(any,null,this.summaryResynthesizer.context,this.unlinkedUnits[0].libraryName,hasName ? this.unlinkedUnits[0].libraryNameOffset : -1,this.unlinkedUnits[0].libraryNameLength,new _LibraryResynthesizerContext(this),this.unlinkedUnits[0]);
        let definingUnitResynthesizer : _UnitResynthesizer = this.createUnitResynthesizer(0,this.librarySource,null);
        let definingUnit : any = definingUnitResynthesizer.unit;
        this.library.definingCompilationUnit = definingUnit;
        definingUnit.source = this.librarySource;
        definingUnit.librarySource = this.librarySource;
        let partResynthesizers : core.DartList<_UnitResynthesizer> = new core.DartList.literal<_UnitResynthesizer>();
        let unlinkedDefiningUnit : any = this.unlinkedUnits[0];
        /* TODO (AssertStatementImpl) : assert (unlinkedDefiningUnit.publicNamespace.parts.length + 1 == linkedLibrary.units.length); */;
        for(let i : number = 1; i < this.linkedLibrary.units.length; i++){
            let partResynthesizer : _UnitResynthesizer = this.buildPart(definingUnitResynthesizer,op(Op.INDEX,unlinkedDefiningUnit.publicNamespace.parts,i - 1),op(Op.INDEX,unlinkedDefiningUnit.parts,i - 1),i);
            if (partResynthesizer != null) {
                partResynthesizers.add(partResynthesizer);
            }
        }
        this.library.parts = partResynthesizers.map((r : any) =>  {
            return r.unit;
        }).toList();
        this.rememberUriToUnit(definingUnitResynthesizer);
        for(let partResynthesizer of partResynthesizers) {
            this.rememberUriToUnit(partResynthesizer);
        }
        if (this.library.name != 'dart.core' && this.library.name != 'dart.async') {
            this.library.createLoadLibraryFunction(this.summaryResynthesizer.typeProvider);
        }
        return this.library;
    }
    buildPart(definingUnitResynthesizer : _UnitResynthesizer,uri : string,partDecl : any,unitNum : number) : _UnitResynthesizer {
        let unitSource : any = this.summaryResynthesizer.sourceFactory.resolveUri(this.librarySource,uri);
        let partResynthesizer : _UnitResynthesizer = this.createUnitResynthesizer(unitNum,unitSource,partDecl);
        let partUnit : any = partResynthesizer.unit;
        partUnit.uriOffset = partDecl.uriOffset;
        partUnit.uriEnd = partDecl.uriEnd;
        partUnit.source = unitSource;
        partUnit.librarySource = this.librarySource;
        partUnit.uri = uri;
        return partResynthesizer;
    }
    createUnitResynthesizer(unitNum : number,unitSource : any,unlinkedPart : any) : _UnitResynthesizer {
        let linkedUnit : any = op(Op.INDEX,this.linkedLibrary.units,unitNum);
        let unlinkedUnit : any = this.unlinkedUnits[unitNum];
        return new _UnitResynthesizer(this,unlinkedUnit,linkedUnit,unitSource,unlinkedPart);
    }
    getReferencedLocationComponents(dependencyIndex : number,unit : number,name : string) : core.DartList<string> {
        if (dependencyIndex == 0) {
            let referencedLibraryUri : string = this.libraryUri;
            let partUri : string;
            if (unit != 0) {
                let uri : string = op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.parts,unit - 1);
                let partSource : any = this.summaryResynthesizer.sourceFactory.resolveUri(this.librarySource,uri);
                partUri = partSource.uri.toString();
            }else {
                partUri = referencedLibraryUri;
            }
            return new core.DartList.literal<string>(referencedLibraryUri,partUri,name);
        }
        let dependency : any = op(Op.INDEX,this.linkedLibrary.dependencies,dependencyIndex);
        let referencedLibrarySource : any = this.summaryResynthesizer.sourceFactory.resolveUri(this.librarySource,dependency.uri);
        let referencedLibraryUri : string = referencedLibrarySource.uri.toString();
        let partUri : string;
        if (unit != 0) {
            let uri : string = op(Op.INDEX,dependency.parts,unit - 1);
            let partSource : any = this.summaryResynthesizer.sourceFactory.resolveUri(this.librarySource,uri);
            partUri = partSource.uri.toString();
        }else {
            partUri = referencedLibraryUri;
        }
        return new core.DartList.literal<string>(referencedLibraryUri,partUri,name);
    }
    rememberUriToUnit(unitResynthesizer : _UnitResynthesizer) : void {
        let unit : any = unitResynthesizer.unit;
        let source : any = unit.source;
        if (source != null) {
            let absoluteUri : string = source.uri.toString();
            this.resynthesizedUnits.set(absoluteUri,unit);
        }
    }
}

export namespace _LibraryResynthesizerContext {
    export type Constructors = '_LibraryResynthesizerContext';
    export type Interface = Omit<_LibraryResynthesizerContext, Constructors>;
}
@DartClass
@Implements(any)
export class _LibraryResynthesizerContext implements any.Interface {
    resynthesizer : _LibraryResynthesizer;

    constructor(resynthesizer : _LibraryResynthesizer) {
    }
    @defaultConstructor
    _LibraryResynthesizerContext(resynthesizer : _LibraryResynthesizer) {
        this.resynthesizer = resynthesizer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get linkedLibrary() : any {
        return this.resynthesizer.linkedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildExportedLibrary(relativeUri : string) : any {
        return this._getLibraryByRelativeUri(relativeUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildExportNamespace() : any {
        let library : any = this.resynthesizer.library;
        return this.resynthesizer.buildExportNamespace(library.publicNamespace,this.resynthesizer.linkedLibrary.exportNames);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildImportedLibrary(dependency : number) : any {
        let depUri : string = op(Op.INDEX,this.resynthesizer.linkedLibrary.dependencies,dependency).uri;
        return this._getLibraryByRelativeUri(depUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPublicNamespace() : any {
        let library : any = this.resynthesizer.library;
        return new bare.createInstance(any,null).createPublicNamespaceForLibrary(library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    findEntryPoint() : any {
        let library : any = this.resynthesizer.library;
        let entryPoint : any = library.exportNamespace.get(FunctionElement.MAIN_FUNCTION_NAME);
        if (is(entryPoint, any)) {
            return entryPoint;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    patchTopLevelAccessors() : void {
        let library : any = this.resynthesizer.library;
        BuildLibraryElementUtils.patchTopLevelAccessors(library);
    }
    _getLibraryByRelativeUri(depUri : string) : any {
        let source : any = this.resynthesizer.summaryResynthesizer.sourceFactory.resolveUri(this.resynthesizer.librarySource,depUri);
        if (op(Op.EQUALS,source,null)) {
            return null;
        }
        let absoluteUri : string = source.uri.toString();
        return new bare.createInstance(any,null,this.resynthesizer.summaryResynthesizer,new bare.createInstance(any,null,new core.DartList.literal<string>(absoluteUri)));
    }
}

export namespace _ReferenceInfo {
    export type Constructors = '_ReferenceInfo';
    export type Interface = Omit<_ReferenceInfo, Constructors>;
}
@DartClass
export class _ReferenceInfo {
    libraryResynthesizer : _LibraryResynthesizer;

    enclosing : _ReferenceInfo;

    name : string;

    isDeclarableType : boolean;

    element : any;

    _type : any;

    numTypeParameters : number;

    _isBeingInstantiatedToBounds : boolean;

    _isRecursiveWhileInstantiateToBounds : boolean;

    constructor(libraryResynthesizer : _LibraryResynthesizer,enclosing : _ReferenceInfo,name : string,isDeclarableType : boolean,element : any,specialType : any,numTypeParameters : number) {
    }
    @defaultConstructor
    _ReferenceInfo(libraryResynthesizer : _LibraryResynthesizer,enclosing : _ReferenceInfo,name : string,isDeclarableType : boolean,element : any,specialType : any,numTypeParameters : number) {
        this._isBeingInstantiatedToBounds = false;
        this._isRecursiveWhileInstantiateToBounds = false;
        this.libraryResynthesizer = libraryResynthesizer;
        this.enclosing = enclosing;
        this.name = name;
        this.isDeclarableType = isDeclarableType;
        this.element = element;
        this.numTypeParameters = numTypeParameters;
        if (specialType != null) {
            this._type = specialType;
        }
    }
    get type() : any {
        if (op(Op.EQUALS,this._type,null)) {
            this._type = this._buildType(true,0,(_ : any) =>  {
                return DynamicTypeImpl.instance;
            },new core.DartList.literal());
        }
        return this._type;
    }
    get _dynamicTypeArguments() : core.DartList<any> {
        return new core.DartList.filled(this.numTypeParameters,DynamicTypeImpl.instance);
    }
    buildType(instantiateToBoundsAllowed : boolean,numTypeArguments : number,getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        let result : any = (this.numTypeParameters == 0 && implicitFunctionTypeIndices.isEmpty) ? this.type : this._buildType(instantiateToBoundsAllowed,numTypeArguments,getTypeArgument,implicitFunctionTypeIndices);
        if (op(Op.EQUALS,result,null)) {
            return DynamicTypeImpl.instance;
        }
        return result;
    }
    _buildType(instantiateToBoundsAllowed : boolean,numTypeArguments : number,getTypeArgument : (i : number) => any,implicitFunctionTypeIndices : core.DartList<number>) : any {
        let element : any = this.element;
        if (is(element, any)) {
            let typeArguments : core.DartList<any> = null;
            if (this.numTypeParameters == 0) {
                return element.type;
            }else if (numTypeArguments == this.numTypeParameters) {
                typeArguments = this._buildTypeArguments(numTypeArguments,getTypeArgument);
            }
            let type : any = new bare.createInstance(any,null,element,this.name,() =>  {
                if (typeArguments == null) {
                    if (this.libraryResynthesizer.summaryResynthesizer.strongMode && instantiateToBoundsAllowed) {
                        let instantiatedToBounds : any = this.libraryResynthesizer.summaryResynthesizer.context.typeSystem.instantiateToBounds(element.type) as any;
                        return instantiatedToBounds.typeArguments;
                    }else {
                        return this._dynamicTypeArguments;
                    }
                }
                return typeArguments;
            });
            if (typeArguments == null) {
                this.libraryResynthesizer.typesWithImplicitTypeArguments.add(type);
            }
            return type;
        }else if (is(element, any)) {
            let actualElement : any = element.actualElement;
            let argumentTypes : core.DartList<any> = new core.DartList.generate(numTypeArguments,getTypeArgument);
            return actualElement.typeAfterSubstitution(argumentTypes);
        }else if (is(element, any)) {
            if (is(element, any)) {
                let typeArguments : core.DartList<any>;
                if (numTypeArguments == this.numTypeParameters) {
                    typeArguments = this._buildTypeArguments(numTypeArguments,getTypeArgument);
                }else if (this.libraryResynthesizer.summaryResynthesizer.strongMode && instantiateToBoundsAllowed) {
                    if (!this._isBeingInstantiatedToBounds) {
                        this._isBeingInstantiatedToBounds = true;
                        this._isRecursiveWhileInstantiateToBounds = false;
                        try {
                            let instantiatedToBounds : any = this.libraryResynthesizer.summaryResynthesizer.context.typeSystem.instantiateToBounds(element.type) as any;
                            if (!this._isRecursiveWhileInstantiateToBounds) {
                                typeArguments = instantiatedToBounds.typeArguments;
                            }else {
                                typeArguments = this._dynamicTypeArguments;
                            }
                        } finally {
                            this._isBeingInstantiatedToBounds = false;
                        }
                    }else {
                        this._isRecursiveWhileInstantiateToBounds = true;
                        typeArguments = this._dynamicTypeArguments;
                    }
                }else {
                    typeArguments = this._dynamicTypeArguments;
                }
                return new bare.createInstance(any,null,element,this.name,typeArguments,this.numTypeParameters != 0);
            }else {
                let computer : any;
                if (implicitFunctionTypeIndices.isNotEmpty) {
                    numTypeArguments = this.numTypeParameters;
                    computer = () =>  {
                        let element : any = this.element;
                        for(let index of implicitFunctionTypeIndices) {
                            element = op(Op.INDEX,element.parameters,index).type.element;
                        }
                        return element;
                    };
                }else {
                    numTypeArguments = (((t)=>(!!t)?t.numTypeParameters:null)(this.enclosing) || 0);
                    computer = () =>  {
                        return this.element as any;
                    };
                }
                return new bare.createInstance(any,null,computer,null,this._buildTypeArguments(numTypeArguments,getTypeArgument),false);
            }
        }else {
            return null;
        }
    }
    _buildTypeArguments(numTypeArguments : number,getTypeArgument : (i : number) => any) : core.DartList<any> {
        let typeArguments : core.DartList<any> = new core.DartList.literal<any>();
        if (numTypeArguments != 0) {
            typeArguments = new core.DartList<any>(numTypeArguments);
            for(let i : number = 0; i < numTypeArguments; i++){
                typeArguments[i] = getTypeArgument(i);
            }
        }
        return typeArguments;
    }
}

export namespace _ResynthesizerContext {
    export type Constructors = '_ResynthesizerContext';
    export type Interface = Omit<_ResynthesizerContext, Constructors>;
}
@DartClass
@Implements(any)
export class _ResynthesizerContext implements any.Interface {
    _unitResynthesizer : _UnitResynthesizer;

    constructor(_unitResynthesizer : _UnitResynthesizer) {
    }
    @defaultConstructor
    _ResynthesizerContext(_unitResynthesizer : _UnitResynthesizer) {
        this._unitResynthesizer = _unitResynthesizer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStrongMode() : boolean {
        return this._unitResynthesizer.summaryResynthesizer.strongMode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildAnnotation(context : any,uc : any) : any {
        return this._unitResynthesizer.buildAnnotation(context,uc);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildExpression(context : any,uc : any) : any {
        return this._unitResynthesizer._buildConstExpression(context,uc);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTopLevelAccessors() : any {
        return this._unitResynthesizer.buildUnitExplicitTopLevelAccessors();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTopLevelVariables() : any {
        return this._unitResynthesizer.buildUnitExplicitTopLevelVariables();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getTypeInferenceError(slot : number) : any {
        return this._unitResynthesizer.getTypeInferenceError(slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inheritsCovariant(slot : number) : boolean {
        return this._unitResynthesizer.parametersInheritingCovariant.contains(slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isInConstCycle(slot : number) : boolean {
        return this._unitResynthesizer.constCycles.contains(slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveConstructorRef(context : any,entry : any) : any {
        return this._unitResynthesizer._getConstructorForEntry(context,entry);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveLinkedType(context : any,slot : number) : any {
        return this._unitResynthesizer.buildLinkedType(context,slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveTypeRef(context : any,type : any,_namedArguments? : {defaultVoid? : boolean,instantiateToBoundsAllowed? : boolean,declaredType? : boolean}) : any {
        let {defaultVoid,instantiateToBoundsAllowed,declaredType} = Object.assign({
            "defaultVoid" : false,
            "instantiateToBoundsAllowed" : true,
            "declaredType" : false}, _namedArguments );
        return this._unitResynthesizer.buildType(context,type,{
            defaultVoid : defaultVoid,instantiateToBoundsAllowed : instantiateToBoundsAllowed,declaredType : declaredType});
    }
}

export namespace _UnitResynthesizer {
    export type Constructors = '_UnitResynthesizer';
    export type Interface = Omit<_UnitResynthesizer, Constructors>;
}
@DartClass
export class _UnitResynthesizer {
    libraryResynthesizer : _LibraryResynthesizer;

    unlinkedUnit : any;

    linkedUnit : any;

    unit : any;

    linkedTypeMap : core.DartMap<number,any>;

    constCycles : core.DartSet<number>;

    parametersInheritingCovariant : core.DartSet<number>;

    numLinkedReferences : number;

    numUnlinkedReferences : number;

    referenceInfos : core.DartList<_ReferenceInfo>;

    _resynthesizerContext : any;

    constructor(libraryResynthesizer : _LibraryResynthesizer,unlinkedUnit : any,linkedUnit : any,unitSource : any,unlinkedPart : any) {
    }
    @defaultConstructor
    _UnitResynthesizer(libraryResynthesizer : _LibraryResynthesizer,unlinkedUnit : any,linkedUnit : any,unitSource : any,unlinkedPart : any) {
        this.linkedTypeMap = new core.DartMap.literal([
        ]);
        this.libraryResynthesizer = libraryResynthesizer;
        this.unlinkedUnit = unlinkedUnit;
        this.linkedUnit = linkedUnit;
        this._resynthesizerContext = new _ResynthesizerContext(this);
        this.unit = new bare.createInstance(any,null,this.libraryResynthesizer.library,this._resynthesizerContext,this.unlinkedUnit,unlinkedPart,((t)=>(!!t)?t.shortName:null)(unitSource));
        {
            let lineStarts : core.DartList<number> = this.unlinkedUnit.lineStarts;
            if (lineStarts.isEmpty) {
                lineStarts = new core.DartList.literal<number>(0);
            }
            this.unit.lineInfo = new bare.createInstance(any,null,lineStarts);
        }
        for(let t of this.linkedUnit.types) {
            this.linkedTypeMap.set(t.slot,t);
        }
        this.constCycles = this.linkedUnit.constCycles.toSet();
        this.parametersInheritingCovariant = this.linkedUnit.parametersInheritingCovariant.toSet();
        this.numLinkedReferences = this.linkedUnit.references.length;
        this.numUnlinkedReferences = this.unlinkedUnit.references.length;
        this.referenceInfos = new core.DartList<_ReferenceInfo>(this.numLinkedReferences);
    }
    get summaryResynthesizer() : SummaryResynthesizer {
        return this.libraryResynthesizer.summaryResynthesizer;
    }
    get typeProvider() : any {
        return this.summaryResynthesizer.typeProvider;
    }
    buildAnnotation(context : any,uc : any) : any {
        let elementAnnotation : any = new bare.createInstance(any,null,this.unit);
        let constExpr : any = this._buildConstExpression(context,uc);
        if (is(constExpr, any)) {
            let arguments : any = constExpr.getProperty(_ConstExprBuilder.ARGUMENT_LIST);
            elementAnnotation.element = constExpr.staticElement;
            elementAnnotation.annotationAst = AstTestFactory.annotation2(constExpr,null,arguments);
        }else if (is(constExpr, any)) {
            elementAnnotation.element = constExpr.staticElement;
            let typeName : any = constExpr.constructorName.type.name;
            let constructorName : any = constExpr.constructorName.name;
            if (is(typeName, any) && constructorName != null) {
                typeName = AstTestFactory.identifier(typeName,constructorName);
                constructorName = null;
            }
            elementAnnotation.annotationAst = ((_) : any =>  {
                {
                    _.element = constExpr.staticElement;
                    return _;
                }
            })(AstTestFactory.annotation2(typeName,constructorName,constExpr.argumentList));
        }else if (is(constExpr, any)) {
            let target = constExpr.target as any;
            let propertyName = constExpr.propertyName;
            let arguments : any = constExpr.getProperty(_ConstExprBuilder.ARGUMENT_LIST);
            elementAnnotation.element = propertyName.staticElement;
            elementAnnotation.annotationAst = ((_) : any =>  {
                {
                    _.element = propertyName.staticElement;
                    return _;
                }
            })(AstTestFactory.annotation2(target,propertyName,arguments));
        }else {
            throw new core.StateError(`Unexpected annotation type: ${constExpr.runtimeType}`);
        }
        return elementAnnotation;
    }
    buildImplicitGetter(property : any) : any {
        let getter : any = new bare.createInstance(any,null,property);
        getter.enclosingElement = property.enclosingElement;
        return getter;
    }
    buildImplicitSetter(property : any) : any {
        let setter : any = new bare.createInstance(any,null,property);
        setter.enclosingElement = property.enclosingElement;
        return setter;
    }
    buildLinkedType(context : any,slot : number) : any {
        if (slot == 0) {
            return null;
        }
        let type : any = this.linkedTypeMap.get(slot);
        if (op(Op.EQUALS,type,null)) {
            return null;
        }
        return this.buildType(context,type);
    }
    buildType(context : any,type : any,_namedArguments? : {defaultVoid? : boolean,instantiateToBoundsAllowed? : boolean,declaredType? : boolean}) : any {
        let {defaultVoid,instantiateToBoundsAllowed,declaredType} = Object.assign({
            "defaultVoid" : false,
            "instantiateToBoundsAllowed" : true,
            "declaredType" : false}, _namedArguments );
        if (op(Op.EQUALS,type,null)) {
            if (defaultVoid) {
                return VoidTypeImpl.instance;
            }else {
                return DynamicTypeImpl.instance;
            }
        }
        if (type.paramReference != 0) {
            return context.typeParameterContext.getTypeParameterType(type.paramReference);
        }else if (op(Op.EQUALS,type.entityKind,EntityRefKind.genericFunctionType)) {
            let element : any = new bare.createInstance(any,null,context,type);
            return element.type;
        }else if (type.syntheticReturnType != null) {
            let element : any = new bare.createInstance(any,null,context,type);
            return element.type;
        }else {
            var getTypeArgument : (i : number) => any = (i : number) : any =>  {
                if (i < type.typeArguments.length) {
                    return this.buildType(context,op(Op.INDEX,type.typeArguments,i),{
                        declaredType : declaredType});
                }else {
                    return DynamicTypeImpl.instance;
                }
            };
            let referenceInfo : _ReferenceInfo = this.getReferenceInfo(type.reference);
            if (declaredType && !referenceInfo.isDeclarableType) {
                return DynamicTypeImpl.instance;
            }
            return referenceInfo.buildType(instantiateToBoundsAllowed,type.typeArguments.length,getTypeArgument,type.implicitFunctionTypeIndices);
        }
    }
    buildUnitExplicitTopLevelAccessors() : any {
        let implicitVariables : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        let accessorsData : any = new bare.createInstance(any,null);
        for(let unlinkedExecutable of this.unlinkedUnit.executables) {
            let kind : any = unlinkedExecutable.kind;
            if (op(Op.EQUALS,kind,UnlinkedExecutableKind.getter) || op(Op.EQUALS,kind,UnlinkedExecutableKind.setter)) {
                let name : string = unlinkedExecutable.name;
                if (op(Op.EQUALS,kind,UnlinkedExecutableKind.setter)) {
                    /* TODO (AssertStatementImpl) : assert (name.endsWith('=')); */;
                    name = new core.DartString(name).substring(0,new core.DartString(name).length - 1);
                }
                let accessor : any = new bare.createInstance(any,null,unlinkedExecutable,this.unit);
                accessorsData.accessors.add(accessor);
                let variable : any = op(Op.INDEX,implicitVariables,name);
                if (op(Op.EQUALS,variable,null)) {
                    variable = new bare.createInstance(any,null,name,-1);
                    variable.enclosingElement = this.unit;
                    op(Op.INDEX_ASSIGN,implicitVariables,name,variable);
                    accessorsData.implicitVariables.add(variable);
                    variable.isSynthetic = true;
                    variable.isFinal = op(Op.EQUALS,kind,UnlinkedExecutableKind.getter);
                }else {
                    variable.isFinal = false;
                }
                accessor.variable = variable;
                if (op(Op.EQUALS,kind,UnlinkedExecutableKind.getter)) {
                    variable.getter = accessor;
                }else {
                    variable.setter = accessor;
                }
            }
        }
        return accessorsData;
    }
    buildUnitExplicitTopLevelVariables() : any {
        let unlinkedVariables : core.DartList<any> = this.unlinkedUnit.variables;
        let numberOfVariables : number = unlinkedVariables.length;
        let variablesData : any = new bare.createInstance(any,null,numberOfVariables);
        for(let i : number = 0; i < numberOfVariables; i++){
            let unlinkedVariable : any = unlinkedVariables[i];
            let element : any;
            if (((t)=>(!!t)?t.bodyExpr:null)(unlinkedVariable.initializer) != null && unlinkedVariable.isConst) {
                element = new bare.createInstance(any,null,unlinkedVariable,this.unit);
            }else {
                element = new bare.createInstance(any,null,unlinkedVariable,this.unit);
            }
            op(Op.INDEX_ASSIGN,variablesData.variables,i,element);
            variablesData.implicitAccessors.add(this.buildImplicitGetter(element));
            if (!(element.isConst || element.isFinal)) {
                variablesData.implicitAccessors.add(this.buildImplicitSetter(element));
            }
        }
        return variablesData;
    }
    getReferenceInfo(index : number) : _ReferenceInfo {
        let result : _ReferenceInfo = this.referenceInfos[index];
        if (op(Op.EQUALS,result,null)) {
            let linkedReference : any = op(Op.INDEX,this.linkedUnit.references,index);
            let name : string;
            let containingReference : number;
            if (index < this.numUnlinkedReferences) {
                name = op(Op.INDEX,this.unlinkedUnit.references,index).name;
                containingReference = op(Op.INDEX,this.unlinkedUnit.references,index).prefixReference;
            }else {
                name = op(Op.INDEX,this.linkedUnit.references,index).name;
                containingReference = op(Op.INDEX,this.linkedUnit.references,index).containingReference;
            }
            let enclosingInfo : _ReferenceInfo = containingReference != 0 ? this.getReferenceInfo(containingReference) : null;
            let element : any;
            let type : any;
            let isDeclarableType : boolean = false;
            let numTypeParameters : number = linkedReference.numTypeParameters;
            if (op(Op.EQUALS,linkedReference.kind,ReferenceKind.unresolved)) {
                type = UndefinedTypeImpl.instance;
                element = null;
                isDeclarableType = true;
            }else if (name == 'dynamic') {
                type = DynamicTypeImpl.instance;
                element = type.element;
                isDeclarableType = true;
            }else if (name == 'void') {
                type = VoidTypeImpl.instance;
                element = type.element;
                isDeclarableType = true;
            }else if (name == '*bottom*') {
                type = BottomTypeImpl.instance;
                element = null;
                isDeclarableType = true;
            }else {
                let locationComponents : core.DartList<string>;
                if (enclosingInfo != null && is(enclosingInfo.element, any)) {
                    let identifier : string = _UnitResynthesizer._getElementIdentifier(name,linkedReference.kind);
                    locationComponents = enclosingInfo.element.location.components.toList();
                    locationComponents.add(identifier);
                }else {
                    let identifier : string = _UnitResynthesizer._getElementIdentifier(name,linkedReference.kind);
                    locationComponents = this.libraryResynthesizer.getReferencedLocationComponents(linkedReference.dependency,linkedReference.unit,identifier);
                    if (op(Op.EQUALS,linkedReference.kind,ReferenceKind.prefix)) {
                        locationComponents = new core.DartList.literal<string>(locationComponents[0],locationComponents[2]);
                    }
                }
                if (!this._resynthesizerContext.isStrongMode && locationComponents.length == 3 && locationComponents[0] == 'dart:async' && locationComponents[2] == 'FutureOr') {
                    type = this.typeProvider.dynamicType;
                    numTypeParameters = 0;
                }
                let location : any = new bare.createInstance(any,null,locationComponents);
                if (enclosingInfo != null) {
                    numTypeParameters += enclosingInfo.numTypeParameters;
                }
                switch (linkedReference.kind) {
                    case ReferenceKind.classOrEnum:
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        isDeclarableType = true;
                        break;
                    case ReferenceKind.constructor:
                        /* TODO (AssertStatementImpl) : assert (location.components.length == 4); */;
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        break;
                    case ReferenceKind.method:
                        /* TODO (AssertStatementImpl) : assert (location.components.length == 4); */;
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        break;
                    case ReferenceKind.propertyAccessor:
                        /* TODO (AssertStatementImpl) : assert (location.components.length == 4); */;
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        break;
                    case ReferenceKind.topLevelFunction:
                        /* TODO (AssertStatementImpl) : assert (location.components.length == 3); */;
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        break;
                    case ReferenceKind.topLevelPropertyAccessor:
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        break;
                    case ReferenceKind.typedef:
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        isDeclarableType = true;
                        break;
                    case ReferenceKind.genericFunctionTypedef:
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        isDeclarableType = true;
                        break;
                    case ReferenceKind.variable:
                        let enclosingElement : any = enclosingInfo.element;
                        if (is(enclosingElement, any)) {
                            element = new _DeferredLocalVariableElement(enclosingElement,linkedReference.localIndex);
                        }else {
                            throw new core.StateError('Unexpected element enclosing variable:' + ` ${enclosingElement.runtimeType}`);
                        }
                        break;
                    case ReferenceKind.function:
                        let enclosingElement : any = enclosingInfo.element;
                        if (is(enclosingElement, any)) {
                            element = new _DeferredInitializerElement(enclosingElement);
                        }else if (is(enclosingElement, any)) {
                            element = new _DeferredLocalFunctionElement(enclosingElement,linkedReference.localIndex);
                        }else {
                            throw new core.StateError('Unexpected element enclosing function:' + ` ${enclosingElement.runtimeType}`);
                        }
                        break;
                    case ReferenceKind.prefix:
                        element = new bare.createInstance(any,null,this.summaryResynthesizer,location);
                        break;
                    case ReferenceKind.unresolved:
                        break;
                }
            }
            result = new _ReferenceInfo(this.libraryResynthesizer,enclosingInfo,name,isDeclarableType,element,type,numTypeParameters);
            this.referenceInfos[index] = result;
        }
        return result;
    }
    getTypeInferenceError(slot : number) : any {
        if (slot == 0) {
            return null;
        }
        for(let error of this.linkedUnit.topLevelInferenceErrors) {
            if (op(Op.EQUALS,error.slot,slot)) {
                return error;
            }
        }
        return null;
    }
    _buildConstExpression(context : any,uc : any) : any {
        return new _ConstExprBuilder(this,context,uc).build();
    }
    _createConstructorDefiningType(context : any,info : _ReferenceInfo,typeArgumentRefs : core.DartList<any>) : any {
        let isClass : boolean = is(info.element, any);
        let classInfo : _ReferenceInfo = isClass ? info : info.enclosing;
        if (op(Op.EQUALS,classInfo,null)) {
            return DynamicTypeImpl.instance;
        }
        let typeArguments : core.DartList<any> = typeArgumentRefs.map((t : any) =>  {
            return this.buildType(context,t);
        }).toList();
        return classInfo.buildType(true,typeArguments.length,(i : any) =>  {
            if (i < typeArguments.length) {
                return typeArguments[i];
            }else {
                return DynamicTypeImpl.instance;
            }
        },new core.DartList.literal<number>());
    }
    _getConstructorForEntry(context : any,entry : any) : any {
        let info : _ReferenceInfo = this.getReferenceInfo(entry.reference);
        let type : any = this._createConstructorDefiningType(context,info,entry.typeArguments);
        if (is(type, any)) {
            return this._getConstructorForInfo(type,info);
        }
        return null;
    }
    _getConstructorForInfo(classType : any,info : _ReferenceInfo) : any {
        let element : any;
        let infoElement : any = info.element;
        if (is(infoElement, any)) {
            element = infoElement;
        }else if (is(infoElement, any)) {
            element = infoElement.unnamedConstructor;
        }
        if (element != null && info.numTypeParameters != 0) {
            return new bare.createInstance(any,null,element,classType);
        }
        return element;
    }
    static _getElementIdentifier(name : string,kind : any) : string {
        if (op(Op.EQUALS,kind,ReferenceKind.topLevelPropertyAccessor) || op(Op.EQUALS,kind,ReferenceKind.propertyAccessor)) {
            if (!new core.DartString(name).endsWith('=')) {
                return name + '?';
            }
        }
        return name;
    }
}

export class properties {
}
