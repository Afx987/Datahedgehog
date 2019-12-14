/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/prelink.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var prelink : (definingUnitUri : string,definingUnit : any,getPart : (absoluteUri : string) => any,getImport : (absoluteUri : string) => any,getDeclaredVariable : (name : string) => string) => any = (definingUnitUri : string,definingUnit : any,getPart : (absoluteUri : string) => any,getImport : (absoluteUri : string) => any,getDeclaredVariable : (name : string) => string) : any =>  {
    return new _Prelinker(definingUnitUri,definingUnit,getPart,getImport,getDeclaredVariable).prelink();
};
export namespace _Meaning {
    export type Constructors = '_Meaning';
    export type Interface = Omit<_Meaning, Constructors>;
}
@DartClass
export class _Meaning {
    unit : number;

    kind : any;

    dependency : number;

    numTypeParameters : number;

    constructor(unit : number,kind : any,dependency : number,numTypeParameters : number) {
    }
    @defaultConstructor
    _Meaning(unit : number,kind : any,dependency : number,numTypeParameters : number) {
        this.unit = unit;
        this.kind = kind;
        this.dependency = dependency;
        this.numTypeParameters = numTypeParameters;
    }
    encodeExportName(name : string) : any {
        return new bare.createInstance(any,null,{
            name : name,dependency : this.dependency,unit : this.unit,kind : this.kind});
    }
    encodeReference() : any {
        return new bare.createInstance(any,null,{
            unit : this.unit,kind : this.kind,dependency : this.dependency,numTypeParameters : this.numTypeParameters});
    }
}

export namespace _Namespace {
    export type Constructors = '_Namespace';
    export type Interface = Omit<_Namespace, Constructors>;
}
@DartClass
export class _Namespace {
    namesWithConflictingDefinitions : core.DartSet<string>;

    libraryNames : core.DartSet<string>;

    map : core.DartMap<string,_Meaning>;

    [OperatorMethods.INDEX](name : string) : _Meaning {
        return this.map.get(name);
    }
    add(name : string,value : _Meaning) : void {
        if (this.namesWithConflictingDefinitions.contains(name)) {
            return;
        }
        let currentValue : _Meaning = this.map.get(name);
        if (op(Op.EQUALS,currentValue,null)) {
            this.map.set(name,value);
        }else if (op(Op.EQUALS,currentValue,value)) {
        }else {
            this.namesWithConflictingDefinitions.add(name);
            this.map.remove(name);
        }
    }
    definesLibraryName(name : string) : boolean {
        return this.libraryNames.contains(name);
    }
    definesName(name : string) : boolean {
        return this.map.containsKey(name);
    }
    forEach(f : (key : string,value : _Meaning) => void) : void {
        this.map.forEach(f);
    }
    rememberLibraryNames() : void {
        this.libraryNames.addAll(this.map.keys);
    }
    constructor() {
    }
    @defaultConstructor
    _Namespace() {
        this.namesWithConflictingDefinitions = new core.DartSet<string>();
        this.libraryNames = new core.DartSet<string>();
        this.map = new core.DartMap.literal([
        ]);
    }
}

export namespace _Prelinker {
    export type Constructors = '_Prelinker';
    export type Interface = Omit<_Prelinker, Constructors>;
}
@DartClass
export class _Prelinker {
    definingUnitUri : string;

    definingUnit : any;

    getPart : (absoluteUri : string) => any;

    getImport : (absoluteUri : string) => any;

    getDeclaredVariable : (name : string) => string;

    importCache : core.DartMap<string,any>;

    partCache : core.DartMap<string,any>;

    privateNamespace : _Namespace;

    dependencies : core.DartList<any>;

    uriToDependency : core.DartMap<string,number>;

    dependencyToPublicNamespace : core.DartList<_Namespace>;

    constructor(definingUnitUri : string,definingUnit : any,getPart : (absoluteUri : string) => any,getImport : (absoluteUri : string) => any,getDeclaredVariable : (name : string) => string) {
    }
    @defaultConstructor
    _Prelinker(definingUnitUri : string,definingUnit : any,getPart : (absoluteUri : string) => any,getImport : (absoluteUri : string) => any,getDeclaredVariable : (name : string) => string) {
        this.importCache = new core.DartMap.literal([
        ]);
        this.partCache = new core.DartMap.literal([
        ]);
        this.privateNamespace = ((_) : _Namespace =>  {
            {
                _.add('dynamic',new _Meaning(0,ReferenceKind.classOrEnum,0,0));
                _.add('void',new _Meaning(0,ReferenceKind.classOrEnum,0,0));
                return _;
            }
        })(new _Namespace());
        this.dependencies = new core.DartList.literal<any>();
        this.uriToDependency = new core.DartMap.literal([
        ]);
        this.dependencyToPublicNamespace = new core.DartList.literal<_Namespace>();
        this.definingUnitUri = definingUnitUri;
        this.definingUnit = definingUnit;
        this.getPart = getPart;
        this.getImport = getImport;
        this.getDeclaredVariable = getDeclaredVariable;
        this.partCache.set(this.definingUnitUri,this.definingUnit);
        this.importCache.set(this.definingUnitUri,this.definingUnit.publicNamespace);
    }
    aggregatePublicNamespace(absoluteUri : string) : _Namespace {
        if (this.uriToDependency.containsKey(absoluteUri)) {
            return this.dependencyToPublicNamespace[this.uriToDependency.get(absoluteUri)];
        }
        /* TODO (AssertStatementImpl) : assert (dependencies.length == dependencyToPublicNamespace.length); */;
        let dependency : number = this.dependencies.length;
        this.uriToDependency.set(absoluteUri,dependency);
        let unitUris : core.DartList<string> = this.getUnitUris(absoluteUri);
        let linkedDependency : any = new bare.createInstance(any,null,{
            uri : absoluteUri,parts : unitUris.skip(1).map((uri : any) =>  {
                return (uri || '');
            }).toList()});
        this.dependencies.add(linkedDependency);
        let aggregated : _Namespace = new _Namespace();
        for(let unitNum : number = 0; unitNum < unitUris.length; unitNum++){
            let unitUri : string = unitUris[unitNum];
            let importedNamespace : any = this.getImportCached(unitUri);
            if (op(Op.EQUALS,importedNamespace,null)) {
                continue;
            }
            for(let name of importedNamespace.names) {
                if (op(Op.EQUALS,name.kind,ReferenceKind.classOrEnum)) {
                    let namespace : _Namespace = new _Namespace();
                    name.members.forEach((executable : any) =>  {
                        namespace.add(executable.name,new _Meaning(unitNum,executable.kind,0,executable.numTypeParameters));
                    });
                    aggregated.add(name.name,new _ClassMeaning(unitNum,dependency,name.numTypeParameters,namespace));
                }else {
                    aggregated.add(name.name,new _Meaning(unitNum,name.kind,dependency,name.numTypeParameters));
                }
            }
        }
        aggregated.rememberLibraryNames();
        this.dependencyToPublicNamespace.add(aggregated);
        return aggregated;
    }
    computeExportNamespace(absoluteUri : string) : _Namespace {
        let seenUris : core.DartSet<string> = new core.DartSet<string>();
        var chaseExports : (absoluteUri : string,filter : any) => _Namespace = (absoluteUri : string,filter : any) : _Namespace =>  {
            let exportedNamespace : _Namespace = this.aggregatePublicNamespace(absoluteUri);
            if (seenUris.add(absoluteUri)) {
                let publicNamespace : any = this.getImportCached(absoluteUri);
                if (publicNamespace != null) {
                    for(let export of publicNamespace.exports) {
                        let unlinkedExportUri : string = this._selectUri(export.uri,export.configurations);
                        let exportUri : string = this.resolveUri(absoluteUri,unlinkedExportUri);
                        if (exportUri != null) {
                            let newFilter : any = filter.merge(new bare.createInstance(any,null,export.combinators));
                            let exportNamespace : _Namespace = chaseExports(exportUri,newFilter);
                            exportNamespace.forEach((name : string,meaning : _Meaning) =>  {
                                if (newFilter.accepts(name) && !exportedNamespace.definesLibraryName(name)) {
                                    exportedNamespace.add(name,meaning);
                                }
                            });
                        }
                    }
                }
                seenUris.remove(absoluteUri);
            }
            return exportedNamespace;
        };
        return chaseExports(absoluteUri,NameFilter.identity);
    }
    extractPrivateNames(unit : any,unitNum : number) : void {
        for(let cls of unit.classes) {
            let namespace : _Namespace = new _Namespace();
            cls.fields.forEach((field : any) =>  {
                if (field.isStatic && field.isConst) {
                    namespace.add(field.name,new _Meaning(unitNum,ReferenceKind.propertyAccessor,0,0));
                }
            });
            cls.executables.forEach((executable : any) =>  {
                let kind : any = null;
                if (op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.constructor)) {
                    kind = ReferenceKind.constructor;
                }else if (op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.functionOrMethod) && executable.isStatic) {
                    kind = ReferenceKind.method;
                }else if (op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.getter) && executable.isStatic) {
                    kind = ReferenceKind.propertyAccessor;
                }
                if (kind != null && executable.name.isNotEmpty) {
                    namespace.add(executable.name,new _Meaning(unitNum,kind,0,executable.typeParameters.length));
                }
            });
            this.privateNamespace.add(cls.name,new _ClassMeaning(unitNum,0,cls.typeParameters.length,namespace));
        }
        for(let enm of unit.enums) {
            let namespace : _Namespace = new _Namespace();
            enm.values.forEach((value : any) =>  {
                namespace.add(value.name,new _Meaning(unitNum,ReferenceKind.propertyAccessor,0,0));
            });
            namespace.add('values',new _Meaning(unitNum,ReferenceKind.propertyAccessor,0,0));
            this.privateNamespace.add(enm.name,new _ClassMeaning(unitNum,0,0,namespace));
        }
        for(let executable of unit.executables) {
            this.privateNamespace.add(executable.name,new _Meaning(unitNum,op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.functionOrMethod) ? ReferenceKind.topLevelFunction : ReferenceKind.topLevelPropertyAccessor,0,executable.typeParameters.length));
        }
        for(let typedef of unit.typedefs) {
            let kind : any;
            switch (typedef.style) {
                case TypedefStyle.functionType:
                    kind = ReferenceKind.typedef;
                    break;
                case TypedefStyle.genericFunctionType:
                    kind = ReferenceKind.genericFunctionTypedef;
                    break;
            }
            /* TODO (AssertStatementImpl) : assert (kind != null); */;
            this.privateNamespace.add(typedef.name,new _Meaning(unitNum,kind,0,typedef.typeParameters.length));
        }
        for(let variable of unit.variables) {
            this.privateNamespace.add(variable.name,new _Meaning(unitNum,ReferenceKind.topLevelPropertyAccessor,0,0));
            if (!(variable.isConst || variable.isFinal)) {
                this.privateNamespace.add(op(Op.PLUS,variable.name,'='),new _Meaning(unitNum,ReferenceKind.topLevelPropertyAccessor,0,0));
            }
        }
    }
    filterExportNamespace(absoluteUri : string,combinators : core.DartList<any>,result : _Namespace) : void {
        let exportNamespace : _Namespace = this.computeExportNamespace(absoluteUri);
        if (op(Op.EQUALS,result,null)) {
            return;
        }
        let filter : any = new bare.createInstance(any,null,combinators);
        exportNamespace.forEach((name : string,meaning : _Meaning) =>  {
            if (filter.accepts(name) && !result.definesLibraryName(name)) {
                result.add(name,meaning);
            }
        });
    }
    getImportCached(absoluteUri : string) : any {
        return this.importCache.putIfAbsent(absoluteUri,() =>  {
            return this.getImport(absoluteUri);
        });
    }
    getPartCached(absoluteUri : string) : any {
        return this.partCache.putIfAbsent(absoluteUri,() =>  {
            let unit : any = this.getPart(absoluteUri);
            this.importCache.set(absoluteUri,((t)=>(!!t)?t.publicNamespace:null)(unit));
            return unit;
        });
    }
    getUnitUris(absoluteUri : string) : core.DartList<string> {
        let result : core.DartList<string> = new core.DartList.literal<string>(absoluteUri);
        let publicNamespace : any = this.getImportCached(absoluteUri);
        if (publicNamespace != null) {
            result.addAll(publicNamespace.parts.map((uri : string) =>  {
                return this.resolveUri(absoluteUri,uri);
            }));
        }
        return result;
    }
    handleImport(import : any) : number {
        let unlinkedUri : string = import.isImplicit ? 'dart:core' : this._selectUri(import.uri,import.configurations);
        let absoluteUri : string = this.resolveUri(this.definingUnitUri,unlinkedUri);
        let targetNamespace : _Namespace = null;
        if (import.prefixReference != 0) {
            /* TODO (AssertStatementImpl) : assert (definingUnit.references[import.prefixReference].prefixReference == 0); */;
            let prefix : string = op(Op.INDEX,this.definingUnit.references,import.prefixReference).name;
            let prefixMeaning : _Meaning = op(Op.INDEX,this.privateNamespace,prefix);
            if (is(prefixMeaning, _PrefixMeaning)) {
                targetNamespace = prefixMeaning.namespace;
            }
        }else {
            targetNamespace = this.privateNamespace;
        }
        this.filterExportNamespace(absoluteUri,import.combinators,targetNamespace);
        return this.uriToDependency.get(absoluteUri);
    }
    linkUnit(unit : any) : any {
        if (op(Op.EQUALS,unit,null)) {
            return new bare.createInstance(any,null);
        }
        let prefixNamespaces : core.DartMap<number,_Namespace> = new core.DartMap.literal([
        ]);
        let references : core.DartList<any> = new core.DartList.literal<any>();
        for(let i : number = 0; i < unit.references.length; i++){
            let reference : any = op(Op.INDEX,unit.references,i);
            let namespace : _Namespace;
            if (op(Op.EQUALS,reference.prefixReference,0)) {
                namespace = this.privateNamespace;
            }else {
                /* TODO (AssertStatementImpl) : assert (reference.prefixReference < i); */;
                namespace = prefixNamespaces.get(reference.prefixReference);
                namespace = ( namespace ) || ( new _Namespace() );
            }
            let meaning : _Meaning = op(Op.INDEX,namespace,reference.name);
            if (meaning != null) {
                if (is(meaning, _PrefixMeaning)) {
                    prefixNamespaces.set(i,meaning.namespace);
                }else if (is(meaning, _ClassMeaning)) {
                    prefixNamespaces.set(i,meaning.namespace);
                }
                references.add(meaning.encodeReference());
            }else {
                references.add(new bare.createInstance(any,null,{
                    kind : ReferenceKind.unresolved}));
            }
        }
        return new bare.createInstance(any,null,{
            references : references});
    }
    prelink() : any {
        this.aggregatePublicNamespace(this.definingUnitUri);
        let unitUris : core.DartList<string> = this.getUnitUris(this.definingUnitUri);
        let units : core.DartList<any> = unitUris.map(this.getPartCached.bind(this)).toList();
        for(let unitNum : number = 0; unitNum < units.length; unitNum++){
            let unit : any = units[unitNum];
            if (unit != null) {
                this.extractPrivateNames(unit,unitNum);
            }
        }
        let exportNames : core.DartList<any> = new core.DartList.literal<any>();
        this.computeExportNamespace(this.definingUnitUri).forEach((name : string,meaning : _Meaning) =>  {
            if (!this.privateNamespace.definesName(name)) {
                exportNames.add(meaning.encodeExportName(name));
            }
        });
        for(let import of units[0].imports) {
            if (import.prefixReference != 0) {
                let name : string = op(Op.INDEX,units[0].references,import.prefixReference).name;
                if (!this.privateNamespace.definesName(name)) {
                    this.privateNamespace.add(name,new _PrefixMeaning());
                }
            }
        }
        this.privateNamespace.rememberLibraryNames();
        let importDependencies : core.DartList<number> = this.definingUnit.imports.map(this.handleImport.bind(this)).toList();
        let exportDependencies : core.DartList<number> = this.definingUnit.publicNamespace.exports.map((exp : any) =>  {
            let unlinkedUri : string = this._selectUri(exp.uri,exp.configurations);
            let absoluteUri : string = this.resolveUri(this.definingUnitUri,unlinkedUri);
            return this.uriToDependency.get(absoluteUri);
        }).where((dependency : any) =>  {
            return dependency != null;
        }).toList();
        let linkedUnits : core.DartList<any> = units.map(this.linkUnit.bind(this)).toList();
        return new bare.createInstance(any,null,{
            units : linkedUnits,dependencies : this.dependencies,importDependencies : importDependencies,exportDependencies : exportDependencies,exportNames : exportNames,numPrelinkedDependencies : this.dependencies.length});
    }
    resolveUri(containingUri : string,relativeUri : string) : string {
        if (relativeUri == '') {
            return null;
        }
        try {
            let containingUriObj : lib3.Uri = lib3.Uri.parse(containingUri);
            let relativeUriObj : lib3.Uri = lib3.Uri.parse(relativeUri);
            return resolveRelativeUri(containingUriObj,relativeUriObj).toString();
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return null;
            }
        }
    }
    _selectUri(defaultUri : string,configurations : core.DartList<any>) : string {
        for(let configuration of configurations) {
            if (this.getDeclaredVariable(configuration.name) == configuration.value) {
                return configuration.uri;
            }
        }
        return defaultUri;
    }
}

export namespace _ClassMeaning {
    export type Constructors = _Meaning.Constructors | '_ClassMeaning';
    export type Interface = Omit<_ClassMeaning, Constructors>;
}
@DartClass
export class _ClassMeaning extends _Meaning {
    namespace : _Namespace;

    constructor(unit : number,dependency : number,numTypeParameters : number,namespace : _Namespace) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ClassMeaning(unit : number,dependency : number,numTypeParameters : number,namespace : _Namespace) {
        super._Meaning(unit,ReferenceKind.classOrEnum,dependency,numTypeParameters);
        this.namespace = namespace;
    }
}

export namespace _PrefixMeaning {
    export type Constructors = _Meaning.Constructors | '_PrefixMeaning';
    export type Interface = Omit<_PrefixMeaning, Constructors>;
}
@DartClass
export class _PrefixMeaning extends _Meaning {
    namespace : _Namespace;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PrefixMeaning() {
        this.namespace = new _Namespace();
        super._Meaning(0,ReferenceKind.prefix,0,0);
    }
}

export class properties {
}
