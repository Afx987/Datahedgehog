/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/kernel/loader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/kernel/lib/ast";
import * as convert from "@dart2ts/dart/convert";
import * as io from "@dart2ts/dart/io";

export var createPackages : (packagePath : string,_namedArguments? : {discoveryPath? : string}) => async.Future<any> = (packagePath : string,_namedArguments? : {discoveryPath? : string}) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let {discoveryPath} = Object.assign({
    }, _namedArguments );
    if (packagePath != null) {
        let absolutePath = new io.File(packagePath).absolute.path;
        if (await new io.Directory(packagePath).exists()) {
            return getPackagesDirectory(new lib3.Uri.file(absolutePath));
        }else if (await new io.File(packagePath).exists()) {
            return loadPackagesFile(new lib3.Uri.file(absolutePath));
        }else {
            throw `Packages not found: ${packagePath}`;
        }
    }
    if (discoveryPath != null) {
        return findPackagesFromFile(lib3.Uri.parse(discoveryPath));
    }
    return Packages.noPackages;
})());
export var createAnalysisOptions : (strongMode : boolean) => any = (strongMode : boolean) : any =>  {
    return ((_) : any =>  {
        {
            _.strongMode = strongMode;
            _.generateImplicitErrors = false;
            _.generateSdkErrors = false;
            _.preserveComments = false;
            _.hint = false;
            _.enableSuperMixins = true;
            return _;
        }
    })(new bare.createInstance(any,null));
};
export var createDartSdk : (path : string,_namedArguments? : {strongMode? : boolean,isSummary? : boolean}) => any = (path : string,_namedArguments? : {strongMode? : boolean,isSummary? : boolean}) : any =>  {
    let {strongMode,isSummary} = Object.assign({
    }, _namedArguments );
    if ((isSummary || false)) {
        return new bare.createInstance(any,null,path,strongMode);
    }
    let resources = PhysicalResourceProvider.INSTANCE;
    return ((_) : any =>  {
        {
            _.context.analysisOptions.setCrossContextOptionsFrom(createAnalysisOptions(strongMode));
            return _;
        }
    })(new bare.createInstance(any,null,resources,resources.getFolder(path)));
};
export var createContext : (options : DartOptions,packages : any,_namedArguments? : {dartSdk? : any}) => any = (options : DartOptions,packages : any,_namedArguments? : {dartSdk? : any}) : any =>  {
    let {dartSdk} = Object.assign({
    }, _namedArguments );
    let fromSummary : boolean = options.sdkSummary != null;
    dartSdk = ( dartSdk ) || ( createDartSdk(fromSummary ? options.sdkSummary : options.sdk,{
        strongMode : options.strongModeSdk,isSummary : fromSummary}) );
    let resourceProvider = PhysicalResourceProvider.INSTANCE;
    let resourceUriResolver = new bare.createInstance(any,null,resourceProvider);
    let resolvers : core.DartList<any> = new core.DartList.literal();
    let customUriMappings = options.customUriMappings;
    if (customUriMappings != null && customUriMappings.length > 0) {
        resolvers.add(new CustomUriResolver(resourceUriResolver,customUriMappings));
    }
    resolvers.add(new bare.createInstance(any,null,dartSdk));
    resolvers.add(resourceUriResolver);
    if (packages != null) {
        let folderMap = new core.DartMap.literal([
        ]);
        packages.asMap().forEach((packagePath : string,uri : lib3.Uri) =>  {
            let path : string = resourceProvider.pathContext.fromUri(uri);
            folderMap.set(packagePath,new core.DartList.literal(resourceProvider.getFolder(path)));
        });
        resolvers.add(new bare.createInstance(any,null,resourceProvider,folderMap));
    }
    let context : any = ((_) : any =>  {
        {
            _.sourceFactory = new bare.createInstance(any,null,resolvers);
            _.analysisOptions = createAnalysisOptions(options.strongMode);
            return _;
        }
    })(AnalysisEngine.instance.createAnalysisContext());
    options.declaredVariables.forEach((name : string,value : string) =>  {
        context.declaredVariables.define(name,value);
    });
    return context;
};
export namespace DartOptions {
    export type Constructors = 'DartOptions';
    export type Interface = Omit<DartOptions, Constructors>;
}
@DartClass
export class DartOptions {
    strongMode : boolean;

    strongModeSdk : boolean;

    sdk : string;

    sdkSummary : string;

    packagePath : string;

    applicationRoot : any;

    customUriMappings : core.DartMap<lib3.Uri,lib3.Uri>;

    declaredVariables : core.DartMap<string,string>;

    constructor(_namedArguments? : {strongMode? : boolean,strongModeSdk? : boolean,sdk? : string,sdkSummary? : string,packagePath? : string,applicationRoot? : any,customUriMappings? : core.DartMap<lib3.Uri,lib3.Uri>,declaredVariables? : core.DartMap<string,string>}) {
    }
    @defaultConstructor
    DartOptions(_namedArguments? : {strongMode? : boolean,strongModeSdk? : boolean,sdk? : string,sdkSummary? : string,packagePath? : string,applicationRoot? : any,customUriMappings? : core.DartMap<lib3.Uri,lib3.Uri>,declaredVariables? : core.DartMap<string,string>}) {
        let {strongMode,strongModeSdk,sdk,sdkSummary,packagePath,applicationRoot,customUriMappings,declaredVariables} = Object.assign({
            "strongMode" : false}, _namedArguments );
        this.customUriMappings = (customUriMappings || new core.DartMap.literal([
        ]));
        this.declaredVariables = (declaredVariables || new core.DartMap.literal([
        ]));
        this.strongMode = strongMode;
        this.strongModeSdk = (strongModeSdk || strongMode);
        this.applicationRoot = (applicationRoot || new bare.createInstance(any,null));
        this.sdk = sdk;
        this.sdkSummary = sdkSummary;
        this.packagePath = packagePath;
    }
}

export namespace ReferenceLevelLoader {
    export type Constructors = 'ReferenceLevelLoader';
    export type Interface = Omit<ReferenceLevelLoader, Constructors>;
}
@DartClass
export class ReferenceLevelLoader {
    @Abstract
    getLibraryReference(element : any) : any{ throw 'abstract'}
    @Abstract
    getClassReference(element : any) : any{ throw 'abstract'}
    @Abstract
    getMemberReference(element : any) : any{ throw 'abstract'}
    @Abstract
    getRootClassReference() : any{ throw 'abstract'}
    @Abstract
    getRootClassConstructorReference() : any{ throw 'abstract'}
    @Abstract
    getCoreClassReference(className : string) : any{ throw 'abstract'}
    @Abstract
    getCoreClassConstructorReference(className : string,_namedArguments? : {constructorName? : string,library? : string}) : any{ throw 'abstract'}
    @Abstract
    tryGetClassTypeParameter(element : any) : any{ throw 'abstract'}
    @Abstract
    getSharedMixinApplicationClass(library : any,supertype : any,mixin : any) : any{ throw 'abstract'}
    @AbstractProperty
    get strongMode() : boolean{ throw 'abstract'}
    @AbstractProperty
    get ignoreRedirectingFactories() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ReferenceLevelLoader() {
    }
}

export namespace DartLoader {
    export type Constructors = 'DartLoader';
    export type Interface = Omit<DartLoader, Constructors>;
}
@DartClass
@Implements(ReferenceLevelLoader)
export class DartLoader implements ReferenceLevelLoader.Interface {
    program : any;

    applicationRoot : any;

    _classes : Bimap<any,any>;

    _members : Bimap<any,any>;

    _classTypeParameters : core.DartMap<any,any>;

    _mixinApplications : core.DartMap<any,core.DartMap<string,any>>;

    _libraries : core.DartMap<any,any>;

    context : any;

    _dartCoreLibrary : any;

    errors : core.DartList<any>;

    libraryElements : core.DartList<any>;

    temporaryClassWorklist : core.DartList<any>;

    mixinLibraryWorklist : core.DartMap<any,core.DartList<any>>;

    ignoreRedirectingFactories : boolean;

    _libraryBeingLoaded : any;

    _classBeingPromotedToMixin : any;

    get strongMode() : boolean {
        return this.context.analysisOptions.strongMode;
    }
    constructor(program : any,options : DartOptions,packages : any,_namedArguments? : {dartSdk? : any,context? : any,ignoreRedirectingFactories? : boolean}) {
    }
    @defaultConstructor
    DartLoader(program : any,options : DartOptions,packages : any,_namedArguments? : {dartSdk? : any,context? : any,ignoreRedirectingFactories? : boolean}) {
        let {dartSdk,context,ignoreRedirectingFactories} = Object.assign({
            "ignoreRedirectingFactories" : true}, _namedArguments );
        this._classes = new Bimap<any,any>();
        this._members = new Bimap<any,any>();
        this._classTypeParameters = new core.DartMap.literal([
        ]);
        this._mixinApplications = new core.DartMap.literal([
        ]);
        this._libraries = new core.DartMap.literal([
        ]);
        this.errors = new core.DartList.literal();
        this.libraryElements = new core.DartList.literal();
        this.temporaryClassWorklist = new core.DartList.literal();
        this.mixinLibraryWorklist = new core.DartMap.literal([
        ]);
        this._libraryBeingLoaded = null;
        this._classBeingPromotedToMixin = null;
        this.context = (context || createContext(options,packages,{
            dartSdk : dartSdk}));
        this.applicationRoot = options.applicationRoot;
        this.program = program;
        this.ignoreRedirectingFactories = ignoreRedirectingFactories;
    }
    getLibraryName(element : any) : string {
        return element.name.isEmpty ? null : element.name;
    }
    getLibraryElementFromUri(uri : lib3.Uri) : any {
        let source = this.context.sourceFactory.forUri2(uri);
        if (op(Op.EQUALS,source,null)) return null;
        return this.context.computeLibraryElement(source);
    }
    getLibraryReference(element : any) : any {
        let uri = this.applicationRoot.relativeUri(element.source.uri);
        let library = this._libraries.get(element);
        if (op(Op.EQUALS,library,null)) {
            library = ((_) : any =>  {
                {
                    _.isExternal = true;
                    _.name = this.getLibraryName(element);
                    _.fileUri = `${element.source.uri}`;
                    return _;
                }
            })(new bare.createInstance(any,null,uri));
            this.program.libraries.add(((_) : any =>  {
                {
                    _.parent = this.program;
                    return _;
                }
            })(library));
            this._libraries.set(element,library);
        }
        return library;
    }
    getLibraryReferenceFromUri(uri : lib3.Uri) : any {
        return this.getLibraryReference(this.getLibraryElementFromUri(uri));
    }
    _buildTopLevelMember(member : any,element : any,astNode : any) : void {
        /* TODO (AssertStatementImpl) : assert (member.parent != null); */;
        new bare.createInstance(any,null,this,member,element).build(astNode);
    }
    isLibraryBeingLoaded(element : any) : boolean {
        return op(Op.EQUALS,this._libraryBeingLoaded,element);
    }
    isClassBeingPromotedToMixin(element : any) : boolean {
        return op(Op.EQUALS,this._classBeingPromotedToMixin,element);
    }
    _buildLibraryBody(element : any,library : any,units : core.DartList<any>) : void {
        /* TODO (AssertStatementImpl) : assert (_libraryBeingLoaded == null); */;
        this._libraryBeingLoaded = element;
        let classes = new core.DartList.literal<any>();
        let procedures = new core.DartList.literal<any>();
        let fields = new core.DartList.literal<any>();
        var loadClass : (declaration : any) => void = (declaration : any) : void =>  {
            let element : any = declaration.element;
            let node = this.getClassReference(element);
            this.promoteToBodyLevel(node,element,declaration);
            classes.add(node);
        };
        var loadProcedure : (declaration : any) => void = (declaration : any) : void =>  {
            let element = declaration.element;
            let node = this.getMemberReference(element);
            this._buildTopLevelMember(node,element,declaration);
            procedures.add(node);
        };
        var loadField : (declaration : any) => void = (declaration : any) : void =>  {
            for(let field of declaration.variables.variables) {
                let element = field.element;
                if (op(Op.EQUALS,element.name,'')) continue;
                let node = this.getMemberReference(element);
                this._buildTopLevelMember(node,element,field);
                fields.add(node);
            }
        };
        for(let unit of units) {
            for(let declaration of unit.declarations) {
                if (is(declaration, any) || is(declaration, any) || is(declaration, any)) {
                    loadClass(declaration);
                }else if (is(declaration, any)) {
                    loadProcedure(declaration);
                }else if (is(declaration, any)) {
                    loadField(declaration);
                }else if (is(declaration, any)) {
                }else {
                    throw `unexpected node: ${declaration.runtimeType} ${declaration}`;
                }
            }
        }
        this.libraryElements.add(element);
        this._iterateTemporaryClassWorklist();
        ((_) : any =>  {
            {
                clear();
                addAll(classes);
                addAll((((t)=>(!!t)?t.values:null)(this._mixinApplications.get(library)) || new core.DartList.literal()));
                return _;
            }
        })(library.classes);
        ((_) : any =>  {
            {
                clear();
                addAll(fields);
                return _;
            }
        })(library.fields);
        ((_) : any =>  {
            {
                clear();
                addAll(procedures);
                return _;
            }
        })(library.procedures);
        this._libraryBeingLoaded = null;
    }
    getDartCoreLibrary() : any {
        return this._dartCoreLibrary = ( this._dartCoreLibrary ) || ( this._findLibraryElement('dart:core') );
    }
    _findLibraryElement(uri : string) : any {
        let source = this.context.sourceFactory.forUri(uri);
        if (op(Op.EQUALS,source,null)) return null;
        return this.context.computeLibraryElement(source);
    }
    getRootClassReference() : any {
        return this.getCoreClassReference('Object');
    }
    getRootClassConstructorReference() : any {
        let element = op(Op.INDEX,this.getDartCoreLibrary().getType('Object').constructors,0);
        return this.getMemberReference(element);
    }
    getCoreClassReference(className : string) : any {
        return this.getClassReference(this.getDartCoreLibrary().getType(className));
    }
    getCoreClassConstructorReference(className : string,_namedArguments? : {constructorName? : string,library? : string}) : any {
        let {constructorName,library} = Object.assign({
        }, _namedArguments );
        let libraryElement : any = library != null ? this._findLibraryElement(library) : this.getDartCoreLibrary();
        let element : any = libraryElement.getType(className);
        if (op(Op.EQUALS,element,null)) {
            throw `Missing core class ${className} from ${libraryElement.name}`;
        }
        let constructor = element.constructors.firstWhere((constructor : any) =>  {
            return (constructorName == null) ? (op(Op.EQUALS,constructor.nameLength,0)) : (op(Op.EQUALS,constructor.name,constructorName));
        });
        return this.getMemberReference(constructor);
    }
    getClassElement(node : any) : any {
        return this._classes.inverse.get(node);
    }
    addMixinClassToLibrary(class_ : any,library : any) : void {
        /* TODO (AssertStatementImpl) : assert (class_.parent == null); */;
        library.addClass(class_);
        let map = this._mixinApplications.putIfAbsent(library,() =>  {
            return new core.DartMap.literal([
            ]);
        });
        map.set(class_.name,class_);
    }
    getClassReference(element : any) : any {
        let classNode = op(Op.INDEX,this._classes,element);
        if (classNode != null) return classNode;
        op(Op.INDEX_ASSIGN,this._classes,element,classNode = ((_) : any =>  {
            {
                _.fileOffset = element.nameOffset;
                return _;
            }
        })(new bare.createInstance(any,null,{
            name : element.name,isAbstract : element.isAbstract,fileUri : `${element.source.uri}`})));
        classNode.level = lib4.ClassLevel.Temporary;
        let library = this.getLibraryReference(element.library);
        library.addClass(classNode);
        for(let parameter of element.typeParameters) {
            let parameterNode = new bare.createInstance(any,null,parameter.name);
            this._classTypeParameters.set(parameter,parameterNode);
            classNode.typeParameters.add(parameterNode);
            parameterNode.parent = classNode;
        }
        this.temporaryClassWorklist.add(classNode);
        return classNode;
    }
    promoteToTypeLevel(classNode : any) : void {
        if (op(Op.GEQ,classNode.level.index,lib4.ClassLevel.Type.index)) return;
        classNode.level = lib4.ClassLevel.Type;
        let element = this.getClassElement(classNode);
        /* TODO (AssertStatementImpl) : assert (element != null); */;
        let library = this.getLibraryReference(element.library);
        let scope = new bare.createInstance(any,null,this,library);
        for(let i : number = 0; i < classNode.typeParameters.length; ++i){
            let parameter = op(Op.INDEX,element.typeParameters,i);
            let parameterNode = op(Op.INDEX,classNode.typeParameters,i);
            parameterNode.bound = op(Op.EQUALS,parameter.bound,null) ? scope.defaultTypeParameterBound : scope.buildType(parameter.bound);
        }
        let mixins : core.DartIterable<any> = element.mixins;
        if (element.isMixinApplication && mixins.isNotEmpty) {
            classNode.mixedInType = scope.buildSupertype(mixins.last);
            mixins = mixins.take(mixins.length - 1);
        }
        if (element.supertype != null) {
            let supertype : any = scope.buildSupertype(element.supertype);
            let useSharedMixin : boolean = true;
            for(let mixin of mixins) {
                let mixinType = scope.buildSupertype(mixin);
                if (useSharedMixin && this.areDistinctUnboundTypeVariables(supertype,mixinType)) {
                    let mixinClass = this.getSharedMixinApplicationClass(scope.currentLibrary,supertype.classNode,mixinType.classNode);
                    if (op(Op.LT,mixinClass.fileOffset,0)) {
                        mixinClass.fileOffset = element.nameOffset;
                    }
                    supertype = new bare.createInstance(any,null,mixinClass,op(Op.GT,supertype.typeArguments.length,mixinType.typeArguments.length) ? supertype.typeArguments : mixinType.typeArguments);
                }else {
                    let freshParameters = getFreshTypeParameters(classNode.typeParameters);
                    let mixinClass = ((_) : any =>  {
                        {
                            _.fileOffset = element.nameOffset;
                            return _;
                        }
                    })(new bare.createInstance(any,null,{
                        name : `${classNode.name}^${mixinType.classNode.name}`,isAbstract : true,typeParameters : freshParameters.freshTypeParameters,supertype : freshParameters.substituteSuper(supertype),mixedInType : freshParameters.substituteSuper(mixinType),fileUri : classNode.fileUri}));
                    mixinClass.level = lib4.ClassLevel.Type;
                    this.addMixinClassToLibrary(mixinClass,classNode.enclosingLibrary);
                    supertype = new bare.createInstance(any,null,mixinClass,classNode.typeParameters.map(makeTypeParameterType).toList());
                    useSharedMixin = false;
                }
            }
            classNode.supertype = supertype;
            for(let implementedType of element.interfaces) {
                classNode.implementedTypes.add(scope.buildSupertype(implementedType));
            }
        }
    }
    promoteToHierarchyLevel(classNode : any) : void {
        if (op(Op.GEQ,classNode.level.index,lib4.ClassLevel.Hierarchy.index)) return;
        this.promoteToTypeLevel(classNode);
        classNode.level = lib4.ClassLevel.Hierarchy;
        let element = this.getClassElement(classNode);
        if (element != null) {
            for(let field of element.fields) {
                if (!field.isStatic && !field.isSynthetic) {
                    this.getMemberReference(field);
                }
            }
            for(let accessor of element.accessors) {
                if (!accessor.isStatic && !accessor.isSynthetic) {
                    this.getMemberReference(accessor);
                }
            }
            for(let method of element.methods) {
                if (!method.isStatic && !method.isSynthetic) {
                    this.getMemberReference(method);
                }
            }
        }
        for(let supertype of classNode.supers) {
            this.promoteToHierarchyLevel(supertype.classNode);
        }
    }
    promoteToMixinLevel(classNode : any,element : any,astNode : any) : void {
        if (op(Op.GEQ,classNode.level.index,lib4.ClassLevel.Mixin.index)) return;
        this._classBeingPromotedToMixin = element;
        this.promoteToHierarchyLevel(classNode);
        classNode.level = lib4.ClassLevel.Mixin;
        ((_) : any =>  {
            {
                _.fields.clear();
                _.procedures.clear();
                _.constructors.clear();
                return _;
            }
        })(classNode);
        new bare.createInstance(any,null,this,classNode,element).build(astNode);
        this._classBeingPromotedToMixin = null;
        for(let mixin of element.mixins) {
            this._ensureMixinBecomesLoaded(mixin.element);
        }
    }
    _ensureMixinBecomesLoaded(element : any) : void {
        if (this.isClassBeingPromotedToMixin(element)) {
            return;
        }
        let class_ = this.getClassReference(element);
        if (op(Op.GEQ,class_.level.index,lib4.ClassLevel.Mixin.index)) {
            return;
        }
        let list = this.mixinLibraryWorklist.set(element.library,new core.DartList.literal<any>());
        list.add(element);
    }
    promoteToBodyLevel(classNode : any,element : any,astNode : any) : void {
        if (op(Op.EQUALS,classNode.level,lib4.ClassLevel.Body)) return;
        this.promoteToMixinLevel(classNode,element,astNode);
        classNode.level = lib4.ClassLevel.Body;
    }
    tryGetClassTypeParameter(element : any) : any {
        return this._classTypeParameters.get(element);
    }
    getMemberElement(node : any) : any {
        return this._members.inverse.get(node);
    }
    getMemberReference(element : any) : any {
        /* TODO (AssertStatementImpl) : assert (element != null); */;
        /* TODO (AssertStatementImpl) : assert (element is! Member); */;
        return op(Op.INDEX_ASSIGN,this._members,element,this._buildMemberReference(element));
    }
    _buildMemberReference(element : any) : any {
        /* TODO (AssertStatementImpl) : assert (element != null); */;
        let member = this._buildOrphanedMemberReference(element);
        let parent = element.enclosingElement;
        if (is(parent, any)) {
            let class_ = this.getClassReference(parent);
            member.parent = class_;
            if (!this.isLibraryBeingLoaded(element.library)) {
                class_.addMember(member);
            }
        }else {
            let library = this.getLibraryReference(element.library);
            member.parent = library;
            if (!this.isLibraryBeingLoaded(element.library)) {
                library.addMember(member);
            }
        }
        return member;
    }
    _buildOrphanedMemberReference(element : any) : any {
        /* TODO (AssertStatementImpl) : assert (element != null); */;
        let classElement : any = is(element.enclosingElement, any) ? element.enclosingElement : null;
        let scope : any = classElement != null ? new bare.createInstance(any,null,this,this.getLibraryReference(element.library)) : new bare.createInstance(any,null,this);
        if (classElement != null) {
            this.getClassReference(classElement);
        }
        switch (element.kind) {
            case ElementKind.CONSTRUCTOR:
                let constructor : any = element;
                if (constructor.isFactory) {
                    return ((_) : any =>  {
                        {
                            _.fileOffset = element.nameOffset;
                            return _;
                        }
                    })(new bare.createInstance(any,null,this._nameOfMember(constructor),lib4.ProcedureKind.Factory,scope.buildFunctionInterface(constructor),{
                        isAbstract : false,isStatic : true,isExternal : constructor.isExternal,isConst : constructor.isConst,fileUri : `${element.source.uri}`}));
                }
                return ((_) : any =>  {
                    {
                        _.fileOffset = element.nameOffset;
                        return _;
                    }
                })(new bare.createInstance(any,null,scope.buildFunctionInterface(constructor),{
                    name : this._nameOfMember(element),isConst : constructor.isConst,isExternal : constructor.isExternal,isSyntheticDefault : constructor.isSynthetic}));
            case ElementKind.FIELD:
            case ElementKind.TOP_LEVEL_VARIABLE:
                let variable : any = element;
                return ((_) : any =>  {
                    {
                        _.fileOffset = element.nameOffset;
                        return _;
                    }
                })(new bare.createInstance(any,null,this._nameOfMember(variable),{
                    isStatic : variable.isStatic,isFinal : variable.isFinal,isConst : variable.isConst,type : scope.buildType(variable.type),fileUri : `${element.source.uri}`}));
            case ElementKind.METHOD:
            case ElementKind.GETTER:
            case ElementKind.SETTER:
            case ElementKind.FUNCTION:
                if (is(element, any) && isNot(element.enclosingElement, any)) {
                    throw `Function ${element} is nested in ${element.enclosingElement} ` + 'and hence is not a member';
                }
                let executable : any = element;
                return ((_) : any =>  {
                    {
                        _.fileOffset = element.nameOffset;
                        return _;
                    }
                })(new bare.createInstance(any,null,this._nameOfMember(element),this._procedureKindOf(executable),scope.buildFunctionInterface(executable),{
                    isAbstract : executable.isAbstract,isStatic : executable.isStatic,isExternal : executable.isExternal,fileUri : `${element.source.uri}`}));
            default:
                throw `Unexpected member kind: ${element}`;
        }
    }
    _procedureKindOf(element : any) : any {
        if (is(element, any)) {
            return element.isGetter ? lib4.ProcedureKind.Getter : lib4.ProcedureKind.Setter;
        }
        if (is(element, any)) {
            if (element.isOperator) return lib4.ProcedureKind.Operator;
            return lib4.ProcedureKind.Method;
        }
        if (is(element, any)) {
            return lib4.ProcedureKind.Method;
        }
        if (is(element, any)) {
            /* TODO (AssertStatementImpl) : assert (element.isFactory); */;
            return lib4.ProcedureKind.Factory;
        }
        throw `Unexpected procedure: ${element}`;
    }
    _nameOfMember(element : any) : any {
        let name : string = is(element, any) ? element.displayName : element.name;
        return new bare.createInstance(any,null,name,this.getLibraryReference(element.library));
    }
    areDistinctUnboundTypeVariables(first : any,second : any) : boolean {
        let seen = new core.DartSet<any>();
        if (op(Op.LT,first.typeArguments.length,second.typeArguments.length)) {
            let tmp = first;
            first = second;
            second = tmp;
        }
        for(let i : number = 0; i < first.typeArguments.length; ++i){
            let firstArg = op(Op.INDEX,first.typeArguments,i);
            if (!(is(firstArg, any) && seen.add(firstArg.parameter) && is(firstArg.parameter.bound, any))) {
                return false;
            }
            if (i < second.typeArguments.length && firstArg != op(Op.INDEX,second.typeArguments,i)) {
                return false;
            }
        }
        return true;
    }
    getSharedMixinApplicationClass(library : any,superclass : any,mixedInClass : any) : any {
        let name : string = `${superclass.name}&${mixedInClass.name}`;
        return this._mixinApplications.putIfAbsent(library,() =>  {
            return new core.DartMap.literal([
            ]);
        }).putIfAbsent(name,() =>  {
            let fresh = op(Op.GEQ,superclass.typeParameters.length,mixedInClass.typeParameters.length) ? getFreshTypeParameters(superclass.typeParameters) : getFreshTypeParameters(mixedInClass.typeParameters);
            let typeArguments = fresh.freshTypeParameters.map(makeTypeParameterType).toList();
            let superArgs = typeArguments.length != superclass.typeParameters.length ? typeArguments.sublist(0,superclass.typeParameters.length) : typeArguments;
            let mixinArgs = typeArguments.length != mixedInClass.typeParameters.length ? typeArguments.sublist(0,mixedInClass.typeParameters.length) : typeArguments;
            let result = new bare.createInstance(any,null,{
                name : name,isAbstract : true,typeParameters : fresh.freshTypeParameters,supertype : new bare.createInstance(any,null,superclass,superArgs),mixedInType : new bare.createInstance(any,null,mixedInClass,mixinArgs),fileUri : library.fileUri});
            result.level = lib4.ClassLevel.Type;
            library.addClass(result);
            return result;
        });
    }
    formatErrorMessage(error : any,filename : string,lines : any) : string {
        let location = lines.getLocation(error.offset);
        return `[error] ${error.message} (${filename}, ` + `line ${location.lineNumber}, ` + `col ${location.columnNumber})`;
    }
    ensureLibraryIsLoaded(node : any) : void {
        this._ensureLibraryIsLoaded(node);
        this._iterateMixinLibraryWorklist();
    }
    _ensureLibraryIsLoaded(node : any) : void {
        if (!node.isExternal) return;
        node.isExternal = false;
        let source = this.context.sourceFactory.forUri2(this.applicationRoot.absoluteUri(node.importUri));
        /* TODO (AssertStatementImpl) : assert (source != null); */;
        let element = this.context.computeLibraryElement(source);
        let units = new core.DartList.literal<any>();
        let reportErrors : boolean = node.importUri.scheme != 'dart';
        let tree = this.context.resolveCompilationUnit(source,element);
        units.add(tree);
        if (reportErrors) this._processErrors(source);
        for(let part of element.parts) {
            let source = part.source;
            units.add(this.context.resolveCompilationUnit(source,element));
            if (reportErrors) this._processErrors(source);
        }
        for(let import of element.imports) {
            if (import.isDeferred && import.prefix != null) {
                node.addDependency(new bare.createInstance(any,"deferredImport",this.getLibraryReference(import.importedLibrary),import.prefix.name));
            }else {
                node.addDependency(new bare.createInstance(any,"import",this.getLibraryReference(import.importedLibrary),{
                    name : ((t)=>(!!t)?t.name:null)(import.prefix)}));
            }
        }
        for(let export of element.exports) {
            node.addDependency(new bare.createInstance(any,"export",this.getLibraryReference(export.exportedLibrary)));
        }
        this._buildLibraryBody(element,node,units);
    }
    _processErrors(source : any) : void {
        let lines : any;
        for(let error of this.context.computeErrors(source)) {
            if (is(error.errorCode, any) || is(error.errorCode, any) || is(error.errorCode, any) || is(error.errorCode, any)) {
                lines = ( lines ) || ( this.context.computeLineInfo(source) );
                this.errors.add(this.formatErrorMessage(error,source.shortName,lines));
            }
        }
    }
    loadSdkInterface(program : any,target : any) : void {
        let requiredSdkMembers = target.requiredSdkClasses;
        for(let libraryUri of requiredSdkMembers.keys) {
            let source = this.context.sourceFactory.forUri2(lib3.Uri.parse(libraryUri));
            let libraryElement = this.context.computeLibraryElement(source);
            for(let member of op(Op.INDEX,requiredSdkMembers,libraryUri)) {
                let type = libraryElement.getType(member);
                if (op(Op.EQUALS,type,null)) {
                    throw `Could not find ${member} in ${libraryUri}`;
                }
                this.promoteToTypeLevel(this.getClassReference(type));
            }
        }
        this._iterateTemporaryClassWorklist();
        this._iterateMixinLibraryWorklist();
    }
    loadEverything(_namedArguments? : {target? : any,compileSdk? : boolean}) : void {
        let {target,compileSdk} = Object.assign({
        }, _namedArguments );
        compileSdk = ( compileSdk ) || ( true );
        if (compileSdk) {
            this.ensureLibraryIsLoaded(this.getLibraryReference(this.getDartCoreLibrary()));
            if (target != null) {
                for(let uri of target.extraRequiredLibraries) {
                    let library = this._findLibraryElement(uri);
                    if (op(Op.EQUALS,library,null)) {
                        this.errors.add(`Could not find required library ${uri}`);
                        continue;
                    }
                    this.ensureLibraryIsLoaded(this.getLibraryReference(library));
                }
            }
        }
        for(let i : number = 0; i < this.program.libraries.length; ++i){
            let library = op(Op.INDEX,this.program.libraries,i);
            if (compileSdk || library.importUri.scheme != 'dart') {
                this.ensureLibraryIsLoaded(library);
            }
        }
    }
    getLoadedFileNames() : core.DartList<string> {
        let list = new core.DartList.literal<string>();
        for(let library of this.program.libraries) {
            let element : any = this.context.computeLibraryElement(this.context.sourceFactory.forUri2(this.applicationRoot.absoluteUri(library.importUri)));
            for(let unit of element.units) {
                list.add(unit.source.fullName);
            }
        }
        return list;
    }
    _iterateTemporaryClassWorklist() : void {
        while (this.temporaryClassWorklist.isNotEmpty){
            let element = this.temporaryClassWorklist.removeLast();
            this.promoteToTypeLevel(element);
        }
    }
    _iterateMixinLibraryWorklist() : void {
        while (this.mixinLibraryWorklist.isNotEmpty){
            let library : any = this.mixinLibraryWorklist.keys.first;
            this._libraryBeingLoaded = library;
            let classes : core.DartList<any> = this.mixinLibraryWorklist.remove(library);
            for(let class_ of classes) {
                let classNode = this.getClassReference(class_);
                this.promoteToMixinLevel(classNode,class_,class_.computeNode());
            }
            this._libraryBeingLoaded = null;
        }
        this._iterateTemporaryClassWorklist();
    }
    _getMainMethod(uri : lib3.Uri) : any {
        let source : any = this.context.sourceFactory.forUri2(uri);
        let library : any = this.context.computeLibraryElement(source);
        let mainElement = library.entryPoint;
        if (op(Op.EQUALS,mainElement,null)) return null;
        let mainMember = this.getMemberReference(mainElement);
        if (is(mainMember, any) && !mainMember.isAccessor) {
            return mainMember;
        }
        return null;
    }
    _makeMissingMainMethod(library : any) : any {
        let main = ((_) : any =>  {
            {
                _.fileUri = library.fileUri;
                return _;
            }
        })(new bare.createInstance(any,null,new bare.createInstance(any,null,'main'),lib4.ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,'Program has no main method')))),{
            isStatic : true}));
        library.addMember(main);
        return main;
    }
    loadProgram(mainLibrary : lib3.Uri,_namedArguments? : {target? : any,compileSdk? : boolean}) : void {
        let {target,compileSdk} = Object.assign({
        }, _namedArguments );
        let library : any = this.getLibraryReferenceFromUri(mainLibrary);
        this.ensureLibraryIsLoaded(library);
        let mainMethod = this._getMainMethod(mainLibrary);
        this.loadEverything({
            target : target,compileSdk : compileSdk});
        if (op(Op.EQUALS,mainMethod,null)) {
            mainMethod = this._makeMissingMainMethod(library);
        }
        this.program.mainMethod = mainMethod;
        for(let libraryElement of this.libraryElements) {
            for(let compilationUnitElement of libraryElement.units) {
                let source = compilationUnitElement.source;
                let lineInfo : any = this.context.computeLineInfo(source);
                let sourceCode : core.DartList<number>;
                try {
                    sourceCode = new convert.Utf8Encoder().convert(this.context.getContents(source).data);
                } catch (__error__) {

                    {
                        let e = __error__;
                        sourceCode = new core.DartList.literal<number>();
                    }
                }
                op(Op.INDEX_ASSIGN,this.program.uriToSource,`${source.uri}`,new bare.createInstance(any,null,lineInfo.lineStarts,sourceCode));
            }
        }
    }
    loadLibrary(uri : lib3.Uri) : any {
        let library : any = this.getLibraryReferenceFromUri(uri);
        this.ensureLibraryIsLoaded(library);
        return library;
    }
}

export namespace Bimap {
    export type Constructors = 'Bimap';
    export type Interface<K,V> = Omit<Bimap<K,V>, Constructors>;
}
@DartClass
export class Bimap<K,V> {
    nodeMap : core.DartMap<K,V>;

    inverse : core.DartMap<V,K>;

    containsKey(key : K) : boolean {
        return this.nodeMap.containsKey(key);
    }
    [OperatorMethods.INDEX](key : K) : V {
        return this.nodeMap.get(key);
    }
    [OperatorMethods.INDEX_EQ](key : K,value : V) : void {
        /* TODO (AssertStatementImpl) : assert (!nodeMap.containsKey(key)); */;
        this.nodeMap.set(key,value);
        this.inverse.set(value,key);
    }
    constructor() {
    }
    @defaultConstructor
    Bimap() {
        this.nodeMap = new core.DartMap.literal([
        ]);
        this.inverse = new core.DartMap.literal([
        ]);
    }
}

export namespace DartLoaderBatch {
    export type Constructors = 'DartLoaderBatch';
    export type Interface = Omit<DartLoaderBatch, Constructors>;
}
@DartClass
export class DartLoaderBatch {
    packages : any;

    dartSdk : any;

    lastSdk : string;

    lastPackagePath : string;

    lastStrongMode : boolean;

    getLoader(program : any,options : DartOptions,_namedArguments? : {packageDiscoveryPath? : string}) : async.Future<DartLoader> { 
        return new async.Future.fromPromise(( async () =>  {
            let {packageDiscoveryPath} = Object.assign({
            }, _namedArguments );
            if (op(Op.EQUALS,this.dartSdk,null) || this.lastSdk != options.sdk || this.lastStrongMode != options.strongMode) {
                this.lastSdk = options.sdk;
                this.lastStrongMode = options.strongMode;
                this.dartSdk = createDartSdk(options.sdk,{
                    strongMode : options.strongModeSdk});
            }
            if (op(Op.EQUALS,this.packages,null) || this.lastPackagePath != options.packagePath || packageDiscoveryPath != null) {
                this.lastPackagePath = options.packagePath;
                this.packages = await createPackages(options.packagePath,{
                    discoveryPath : packageDiscoveryPath});
            }
            return new DartLoader(program,options,this.packages,{
                dartSdk : this.dartSdk});
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    DartLoaderBatch() {
    }
}

export namespace CustomUriResolver {
    export type Constructors = 'CustomUriResolver';
    export type Interface = Omit<CustomUriResolver, Constructors>;
}
@DartClass
export class CustomUriResolver extends any {
    _resourceUriResolver : any;

    _customUrlMappings : core.DartMap<lib3.Uri,lib3.Uri>;

    constructor(_resourceUriResolver : any,_customUrlMappings : core.DartMap<lib3.Uri,lib3.Uri>) {
    }
    @defaultConstructor
    CustomUriResolver(_resourceUriResolver : any,_customUrlMappings : core.DartMap<lib3.Uri,lib3.Uri>) {
        this._resourceUriResolver = _resourceUriResolver;
        this._customUrlMappings = _customUrlMappings;
    }
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        if (uri.toString() == 'package:mojo/src/internal_contract.dart') {
            uri = actualUri = lib3.Uri.parse('dart:mojo.internal');
        }
        let baseUri : lib3.Uri = uri;
        let relative : string;
        let path : string = uri.path;
        let index : number = new core.DartString(path).indexOf('/');
        if (index > 0) {
            baseUri = uri.replace({
                path : new core.DartString(path).substring(0,index)});
            relative = new core.DartString(path).substring(index + 1);
        }
        let baseMapped : lib3.Uri = this._customUrlMappings.get(baseUri);
        if (op(Op.EQUALS,baseMapped,null)) return null;
        let mapped : lib3.Uri = relative != null ? baseMapped.resolve(relative) : baseMapped;
        return this._resourceUriResolver.resolveAbsolute(mapped,actualUri);
    }
    restoreAbsolute(source : any) : lib3.Uri {
        return this._resourceUriResolver.restoreAbsolute(source);
    }
}

export class properties {
}
