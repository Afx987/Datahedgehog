/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/testing/test_type_provider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TestTypeProvider {
    export type Constructors = 'TestTypeProvider';
    export type Interface = Omit<TestTypeProvider, Constructors>;
}
@DartClass
export class TestTypeProvider extends any {
    _boolType : any;

    _bottomType : any;

    _doubleType : any;

    _deprecatedType : any;

    _dynamicType : any;

    _functionType : any;

    _futureDynamicType : any;

    _futureNullType : any;

    _futureOrNullType : any;

    _futureOrType : any;

    _futureType : any;

    _intType : any;

    _iterableDynamicType : any;

    _iterableType : any;

    _iteratorType : any;

    _listType : any;

    _mapType : any;

    _nullObject : any;

    _nullType : any;

    _numType : any;

    _objectType : any;

    _stackTraceType : any;

    _streamDynamicType : any;

    _streamType : any;

    _stringType : any;

    _symbolType : any;

    _typeType : any;

    _undefinedType : any;

    _context : any;

    constructor(_context? : any) {
    }
    @defaultConstructor
    TestTypeProvider(_context? : any) {
        this._context = _context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get boolType() : any {
        if (op(Op.EQUALS,this._boolType,null)) {
            let boolElement : any = ElementFactory.classElement2("bool");
            this._boolType = boolElement.type;
            let fromEnvironment : any = ElementFactory.constructorElement(boolElement,"fromEnvironment",true);
            fromEnvironment.parameters = new core.DartList.literal<any>(ElementFactory.requiredParameter2("name",this.stringType),ElementFactory.namedParameter3("defaultValue",{
                type : this._boolType,initializer : AstTestFactory.booleanLiteral(false),initializerCode : 'false'}));
            fromEnvironment.factory = true;
            fromEnvironment.isCycleFree = true;
            boolElement.constructors = new core.DartList.literal<any>(fromEnvironment);
        }
        return this._boolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get bottomType() : any {
        if (op(Op.EQUALS,this._bottomType,null)) {
            this._bottomType = BottomTypeImpl.instance;
        }
        return this._bottomType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get deprecatedType() : any {
        if (op(Op.EQUALS,this._deprecatedType,null)) {
            let deprecatedElement : any = ElementFactory.classElement2("Deprecated");
            let expiresField : any = ElementFactory.fieldElement('expires',false,true,false,this.stringType);
            deprecatedElement.fields = new core.DartList.literal<any>(expiresField);
            deprecatedElement.accessors = new core.DartList.literal<any>(expiresField.getter);
            let constructor : any = ElementFactory.constructorElement(deprecatedElement,'',true,new core.DartList.literal(this.stringType));
            (op(Op.INDEX,constructor.parameters,0) as any).name = 'expires';
            let expiresInit : any = AstTestFactory.constructorFieldInitializer(true,'expires',AstTestFactory.identifier3('expires'));
            expiresInit.fieldName.staticElement = expiresField;
            (expiresInit.expression as any).staticElement = op(Op.INDEX,constructor.parameters,0);
            constructor.constantInitializers = new core.DartList.literal<any>(expiresInit);
            deprecatedElement.constructors = new core.DartList.literal<any>(constructor);
            this._deprecatedType = deprecatedElement.type;
        }
        return this._deprecatedType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get doubleType() : any {
        if (op(Op.EQUALS,this._doubleType,null)) {
            this._initializeNumericTypes();
        }
        return this._doubleType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dynamicType() : any {
        if (op(Op.EQUALS,this._dynamicType,null)) {
            this._dynamicType = DynamicTypeImpl.instance;
        }
        return this._dynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get functionType() : any {
        if (op(Op.EQUALS,this._functionType,null)) {
            let functionClass : any = ElementFactory.classElement2("Function");
            functionClass.constructors = new core.DartList.literal<any>(ElementFactory.constructorElement(functionClass,null,false));
            this._functionType = functionClass.type;
        }
        return this._functionType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureDynamicType() : any {
        if (op(Op.EQUALS,this._futureDynamicType,null)) {
            this._futureDynamicType = this.futureType.instantiate(new core.DartList.literal<any>(this.dynamicType));
        }
        return this._futureDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureNullType() : any {
        if (op(Op.EQUALS,this._futureNullType,null)) {
            this._futureNullType = this.futureType.instantiate(new core.DartList.literal<any>(this.nullType));
        }
        return this._futureNullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureOrNullType() : any {
        if (op(Op.EQUALS,this._futureOrNullType,null)) {
            this._futureOrNullType = this.futureOrType.instantiate(new core.DartList.literal<any>(this.nullType));
        }
        return this._futureOrNullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureOrType() : any {
        if (op(Op.EQUALS,this._futureOrType,null)) {
            this._initDartAsync();
        }
        return this._futureOrType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get futureType() : any {
        if (op(Op.EQUALS,this._futureType,null)) {
            this._initDartAsync();
        }
        return this._futureType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get intType() : any {
        if (op(Op.EQUALS,this._intType,null)) {
            this._initializeNumericTypes();
        }
        return this._intType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterableDynamicType() : any {
        if (op(Op.EQUALS,this._iterableDynamicType,null)) {
            this._iterableDynamicType = this.iterableType.instantiate(new core.DartList.literal<any>(this.dynamicType));
        }
        return this._iterableDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterableType() : any {
        if (op(Op.EQUALS,this._iterableType,null)) {
            let iterableElement : any = ElementFactory.classElement2("Iterable",new core.DartList.literal("E"));
            this._iterableType = iterableElement.type;
            let eType : any = op(Op.INDEX,iterableElement.typeParameters,0).type;
            this._setAccessors(iterableElement,new core.DartList.literal<any>(ElementFactory.getterElement("iterator",false,this.iteratorType.instantiate(new core.DartList.literal<any>(eType))),ElementFactory.getterElement("last",false,eType)));
            iterableElement.constructors = new core.DartList.literal<any>(((_) : any =>  {
                {
                    _.isCycleFree = true;
                    return _;
                }
            })(ElementFactory.constructorElement(iterableElement,'',true)));
            this._propagateTypeArguments(iterableElement);
        }
        return this._iterableType;
    }
    get iteratorType() : any {
        if (op(Op.EQUALS,this._iteratorType,null)) {
            let iteratorElement : any = ElementFactory.classElement2("Iterator",new core.DartList.literal("E"));
            this._iteratorType = iteratorElement.type;
            let eType : any = op(Op.INDEX,iteratorElement.typeParameters,0).type;
            this._setAccessors(iteratorElement,new core.DartList.literal<any>(ElementFactory.getterElement("current",false,eType)));
            iteratorElement.constructors = new core.DartList.literal<any>(ElementFactory.constructorElement(iteratorElement,null,false));
            this._propagateTypeArguments(iteratorElement);
        }
        return this._iteratorType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get listType() : any {
        if (op(Op.EQUALS,this._listType,null)) {
            let listElement : any = ElementFactory.classElement2("List",new core.DartList.literal("E"));
            listElement.constructors = new core.DartList.literal<any>(ElementFactory.constructorElement2(listElement,null));
            this._listType = listElement.type;
            let eType : any = op(Op.INDEX,listElement.typeParameters,0).type;
            let iterableType : any = this.iterableType.instantiate(new core.DartList.literal<any>(eType));
            listElement.interfaces = new core.DartList.literal<any>(iterableType);
            this._setAccessors(listElement,new core.DartList.literal<any>(ElementFactory.getterElement("length",false,this.intType)));
            listElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("[]",eType,new core.DartList.literal(this.intType)),ElementFactory.methodElement("[]=",VoidTypeImpl.instance,new core.DartList.literal(this.intType,eType)),ElementFactory.methodElement("add",VoidTypeImpl.instance,new core.DartList.literal(eType)));
            this._propagateTypeArguments(listElement);
        }
        return this._listType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mapType() : any {
        if (op(Op.EQUALS,this._mapType,null)) {
            let mapElement : any = ElementFactory.classElement2("Map",new core.DartList.literal("K","V"));
            this._mapType = mapElement.type;
            let kType : any = op(Op.INDEX,mapElement.typeParameters,0).type;
            let vType : any = op(Op.INDEX,mapElement.typeParameters,1).type;
            this._setAccessors(mapElement,new core.DartList.literal<any>(ElementFactory.getterElement("length",false,this.intType)));
            mapElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("[]",vType,new core.DartList.literal(this.objectType)),ElementFactory.methodElement("[]=",VoidTypeImpl.instance,new core.DartList.literal(kType,vType)));
            mapElement.constructors = new core.DartList.literal<any>(((_) : any =>  {
                {
                    _.external = true;
                    _.factory = true;
                    return _;
                }
            })(ElementFactory.constructorElement(mapElement,'',false)));
            this._propagateTypeArguments(mapElement);
        }
        return this._mapType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullObject() : any {
        if (op(Op.EQUALS,this._nullObject,null)) {
            this._nullObject = new bare.createInstance(any,null,this.nullType,NullState.NULL_STATE);
        }
        return this._nullObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nullType() : any {
        if (op(Op.EQUALS,this._nullType,null)) {
            let nullElement = ElementFactory.classElement2("Null");
            nullElement.constructors = new core.DartList.literal<any>(((_) : any =>  {
                {
                    _.factory = true;
                    return _;
                }
            })(ElementFactory.constructorElement(nullElement,'_uninstantiatable',false)));
            let library = new bare.createInstance(any,null,this._context,AstTestFactory.libraryIdentifier2(new core.DartList.literal("dart.core")));
            let unit = new bare.createInstance(any,null,"core.dart");
            library.definingCompilationUnit = unit;
            unit.librarySource = unit.source = new bare.createInstance(any,null,'',null);
            nullElement.enclosingElement = library;
            this._nullType = nullElement.type;
        }
        return this._nullType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get numType() : any {
        if (op(Op.EQUALS,this._numType,null)) {
            this._initializeNumericTypes();
        }
        return this._numType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get objectType() : any {
        if (op(Op.EQUALS,this._objectType,null)) {
            let objectElement : any = ElementFactory.object;
            this._objectType = objectElement.type;
            let constructor : any = ElementFactory.constructorElement(objectElement,'',true);
            constructor.constantInitializers = new core.DartList.literal<any>();
            objectElement.constructors = new core.DartList.literal<any>(constructor);
            objectElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("toString",this.stringType),ElementFactory.methodElement("==",this.boolType,new core.DartList.literal(this._objectType)),ElementFactory.methodElement("noSuchMethod",this.dynamicType,new core.DartList.literal(this.dynamicType)));
            this._setAccessors(objectElement,new core.DartList.literal<any>(ElementFactory.getterElement("hashCode",false,this.intType),ElementFactory.getterElement("runtimeType",false,this.typeType)));
        }
        return this._objectType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stackTraceType() : any {
        if (op(Op.EQUALS,this._stackTraceType,null)) {
            let stackTraceElement : any = ElementFactory.classElement2("StackTrace");
            stackTraceElement.constructors = new core.DartList.literal<any>(ElementFactory.constructorElement(stackTraceElement,null,false));
            this._stackTraceType = stackTraceElement.type;
        }
        return this._stackTraceType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get streamDynamicType() : any {
        if (op(Op.EQUALS,this._streamDynamicType,null)) {
            this._streamDynamicType = this.streamType.instantiate(new core.DartList.literal<any>(this.dynamicType));
        }
        return this._streamDynamicType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get streamType() : any {
        if (op(Op.EQUALS,this._streamType,null)) {
            this._streamType = ElementFactory.classElement2("Stream",new core.DartList.literal("T")).type;
        }
        return this._streamType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get stringType() : any {
        if (op(Op.EQUALS,this._stringType,null)) {
            let stringElement : any = ElementFactory.classElement2("String");
            this._stringType = stringElement.type;
            this._setAccessors(stringElement,new core.DartList.literal<any>(ElementFactory.getterElement("isEmpty",false,this.boolType),ElementFactory.getterElement("length",false,this.intType),ElementFactory.getterElement("codeUnits",false,this.listType.instantiate(new core.DartList.literal<any>(this.intType)))));
            stringElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("+",this._stringType,new core.DartList.literal(this._stringType)),ElementFactory.methodElement("toLowerCase",this._stringType),ElementFactory.methodElement("toUpperCase",this._stringType));
            let fromEnvironment : any = ElementFactory.constructorElement(stringElement,"fromEnvironment",true);
            fromEnvironment.parameters = new core.DartList.literal<any>(ElementFactory.requiredParameter2("name",this.stringType),ElementFactory.namedParameter3("defaultValue",{
                type : this._stringType}));
            fromEnvironment.factory = true;
            fromEnvironment.isCycleFree = true;
            stringElement.constructors = new core.DartList.literal<any>(fromEnvironment);
        }
        return this._stringType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get symbolType() : any {
        if (op(Op.EQUALS,this._symbolType,null)) {
            let symbolClass : any = ElementFactory.classElement2("Symbol");
            let constructor : any = ElementFactory.constructorElement(symbolClass,'',true,new core.DartList.literal(this.stringType));
            constructor.factory = true;
            constructor.isCycleFree = true;
            symbolClass.constructors = new core.DartList.literal<any>(constructor);
            this._symbolType = symbolClass.type;
        }
        return this._symbolType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeType() : any {
        if (op(Op.EQUALS,this._typeType,null)) {
            let typeClass : any = ElementFactory.classElement2("Type");
            typeClass.constructors = new core.DartList.literal<any>(((_) : any =>  {
                {
                    _.isSynthetic = true;
                    return _;
                }
            })(ElementFactory.constructorElement(typeClass,null,false)));
            this._typeType = typeClass.type;
        }
        return this._typeType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get undefinedType() : any {
        if (op(Op.EQUALS,this._undefinedType,null)) {
            this._undefinedType = UndefinedTypeImpl.instance;
        }
        return this._undefinedType;
    }
    _initDartAsync() : void {
        let asyncSource : any = this._context.sourceFactory.forUri(DartSdk.DART_ASYNC);
        this._context.setContents(asyncSource,"");
        let asyncUnit : any = new bare.createInstance(any,null,"async.dart");
        let asyncLibrary : any = new bare.createInstance(any,null,this._context,AstTestFactory.libraryIdentifier2(new core.DartList.literal("dart.async")));
        asyncLibrary.definingCompilationUnit = asyncUnit;
        asyncUnit.librarySource = asyncUnit.source = asyncSource;
        let future : any = ElementFactory.classElement2("Future",new core.DartList.literal("T"));
        this._futureType = future.type;
        asyncUnit.types = new core.DartList.literal<any>(future);
        let futureOr : any = ElementFactory.classElement2("FutureOr",new core.DartList.literal("T"));
        this._futureOrType = futureOr.type;
        asyncUnit.types = new core.DartList.literal<any>(future,futureOr);
    }
    _initializeNumericTypes() : void {
        let numElement : any = ElementFactory.classElement2("num");
        this._numType = numElement.type;
        let intElement : any = ElementFactory.classElement("int",this._numType);
        this._intType = intElement.type;
        let doubleElement : any = ElementFactory.classElement("double",this._numType);
        this._doubleType = doubleElement.type;
        this.objectType;
        this.boolType;
        this.nullType;
        this.stringType;
        numElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("+",this._numType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("-",this._numType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("*",this._numType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("%",this._numType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("/",this._doubleType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("~/",this._numType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("-",this._numType),ElementFactory.methodElement("remainder",this._numType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("<",this._boolType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("<=",this._boolType,new core.DartList.literal(this._numType)),ElementFactory.methodElement(">",this._boolType,new core.DartList.literal(this._numType)),ElementFactory.methodElement(">=",this._boolType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("==",this._boolType,new core.DartList.literal(this._objectType)),ElementFactory.methodElement("isNaN",this._boolType),ElementFactory.methodElement("isNegative",this._boolType),ElementFactory.methodElement("isInfinite",this._boolType),ElementFactory.methodElement("abs",this._numType),ElementFactory.methodElement("floor",this._numType),ElementFactory.methodElement("ceil",this._numType),ElementFactory.methodElement("round",this._numType),ElementFactory.methodElement("truncate",this._numType),ElementFactory.methodElement("toInt",this._intType),ElementFactory.methodElement("toDouble",this._doubleType),ElementFactory.methodElement("toStringAsFixed",this._stringType,new core.DartList.literal(this._intType)),ElementFactory.methodElement("toStringAsExponential",this._stringType,new core.DartList.literal(this._intType)),ElementFactory.methodElement("toStringAsPrecision",this._stringType,new core.DartList.literal(this._intType)),ElementFactory.methodElement("toRadixString",this._stringType,new core.DartList.literal(this._intType)));
        intElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("&",this._intType,new core.DartList.literal(this._intType)),ElementFactory.methodElement("|",this._intType,new core.DartList.literal(this._intType)),ElementFactory.methodElement("^",this._intType,new core.DartList.literal(this._intType)),ElementFactory.methodElement("~",this._intType),ElementFactory.methodElement("<<",this._intType,new core.DartList.literal(this._intType)),ElementFactory.methodElement(">>",this._intType,new core.DartList.literal(this._intType)),ElementFactory.methodElement("-",this._intType),ElementFactory.methodElement("abs",this._intType),ElementFactory.methodElement("round",this._intType),ElementFactory.methodElement("floor",this._intType),ElementFactory.methodElement("ceil",this._intType),ElementFactory.methodElement("truncate",this._intType),ElementFactory.methodElement("toString",this._stringType));
        let fromEnvironment : any = ElementFactory.constructorElement(intElement,"fromEnvironment",true);
        fromEnvironment.parameters = new core.DartList.literal<any>(ElementFactory.requiredParameter2("name",this.stringType),ElementFactory.namedParameter3("defaultValue",{
            type : this._intType}));
        fromEnvironment.factory = true;
        fromEnvironment.isCycleFree = true;
        numElement.constructors = new core.DartList.literal<any>(((_) : any =>  {
            {
                _.isSynthetic = true;
                return _;
            }
        })(ElementFactory.constructorElement(numElement,null,false)));
        intElement.constructors = new core.DartList.literal<any>(fromEnvironment);
        doubleElement.constructors = new core.DartList.literal<any>(((_) : any =>  {
            {
                _.isSynthetic = true;
                return _;
            }
        })(ElementFactory.constructorElement(doubleElement,null,false)));
        let varINFINITY : any = ElementFactory.fieldElement("INFINITY",true,false,true,this._doubleType,{
            initializer : AstTestFactory.doubleLiteral(new core.DartDouble(double).INFINITY)});
        varINFINITY.constantInitializer = AstTestFactory.binaryExpression(AstTestFactory.integer(1),TokenType.SLASH,AstTestFactory.integer(0));
        let fields : core.DartList<any> = new core.DartList.literal<any>(ElementFactory.fieldElement("NAN",true,false,true,this._doubleType,{
            initializer : AstTestFactory.doubleLiteral(new core.DartDouble(double).NAN)}),varINFINITY,ElementFactory.fieldElement("NEGATIVE_INFINITY",true,false,true,this._doubleType,{
            initializer : AstTestFactory.doubleLiteral(new core.DartDouble(double).NEGATIVE_INFINITY)}),ElementFactory.fieldElement("MIN_POSITIVE",true,false,true,this._doubleType,{
            initializer : AstTestFactory.doubleLiteral(new core.DartDouble(double).MIN_POSITIVE)}),ElementFactory.fieldElement("MAX_FINITE",true,false,true,this._doubleType,{
            initializer : AstTestFactory.doubleLiteral(new core.DartDouble(double).MAX_FINITE)}));
        doubleElement.fields = fields;
        let fieldCount : number = fields.length;
        let accessors : core.DartList<any> = new core.DartList<any>(fieldCount);
        for(let i : number = 0; i < fieldCount; i++){
            accessors[i] = fields[i].getter;
        }
        doubleElement.accessors = accessors;
        doubleElement.methods = new core.DartList.literal<any>(ElementFactory.methodElement("remainder",this._doubleType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("+",this._doubleType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("-",this._doubleType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("*",this._doubleType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("%",this._doubleType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("/",this._doubleType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("~/",this._doubleType,new core.DartList.literal(this._numType)),ElementFactory.methodElement("-",this._doubleType),ElementFactory.methodElement("abs",this._doubleType),ElementFactory.methodElement("round",this._doubleType),ElementFactory.methodElement("floor",this._doubleType),ElementFactory.methodElement("ceil",this._doubleType),ElementFactory.methodElement("truncate",this._doubleType),ElementFactory.methodElement("toString",this._stringType));
    }
    _propagateTypeArguments(classElement : any) : void {
        for(let accessor of classElement.accessors) {
            (accessor as any).type = new bare.createInstance(any,null,accessor);
        }
        for(let method of classElement.methods) {
            (method as any).type = new bare.createInstance(any,null,method);
        }
    }
    _setAccessors(element : any,accessors : core.DartList<any>) : void {
        element.accessors = accessors;
        element.fields = accessors.map((accessor : any) =>  {
            return accessor.variable;
        }).toList();
    }
}

export class properties {
}
