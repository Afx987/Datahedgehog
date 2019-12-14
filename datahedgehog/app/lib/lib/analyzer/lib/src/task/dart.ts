/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";

export var getTargetSourceErrors : (listener : any,target : any) => core.DartList<any> = (listener : any,target : any) : core.DartList<any> =>  {
    let source : any = target.source;
    let errors : core.DartList<any> = listener.getErrorsForSource(source);
    return getUniqueErrors(errors);
};
export var getUniqueErrors : (errors : core.DartList<any>) => core.DartList<any> = (errors : core.DartList<any>) : core.DartList<any> =>  {
    if (errors.isEmpty) {
        return errors;
    }
    return errors.toSet().toList();
};
export namespace BuildCompilationUnitElementTask {
    export type Constructors = 'BuildCompilationUnitElementTask';
    export type Interface = Omit<BuildCompilationUnitElementTask, Constructors>;
}
@DartClass
export class BuildCompilationUnitElementTask extends any {
    private static __$PARSED_UNIT_INPUT_NAME : string;
    static get PARSED_UNIT_INPUT_NAME() : string { 
        if (this.__$PARSED_UNIT_INPUT_NAME===undefined) {
            this.__$PARSED_UNIT_INPUT_NAME = 'PARSED_UNIT_INPUT_NAME';
        }
        return this.__$PARSED_UNIT_INPUT_NAME;
    }

    private static __$LINE_INFO_INPUT_NAME : string;
    static get LINE_INFO_INPUT_NAME() : string { 
        if (this.__$LINE_INFO_INPUT_NAME===undefined) {
            this.__$LINE_INFO_INPUT_NAME = 'LINE_INFO_INPUT_NAME';
        }
        return this.__$LINE_INFO_INPUT_NAME;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'BuildCompilationUnitElementTask',BuildCompilationUnitElementTask.createTask.bind(this),BuildCompilationUnitElementTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.COMPILATION_UNIT_CONSTANTS,properties.COMPILATION_UNIT_ELEMENT,properties.CREATED_RESOLVED_UNIT1,properties.RESOLVED_UNIT1));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    BuildCompilationUnitElementTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return BuildCompilationUnitElementTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let librarySpecificUnit : any = target;
        let source : any = getRequiredSource();
        let unit : any = getRequiredInput(BuildCompilationUnitElementTask.PARSED_UNIT_INPUT_NAME);
        let lineInfo : any = getRequiredInput(BuildCompilationUnitElementTask.LINE_INFO_INPUT_NAME);
        let element : any;
        {
            let internalContext : any = context as any;
            let analysisCache : any = internalContext.analysisCache;
            let cacheEntry : any = internalContext.getCacheEntry(target);
            element = analysisCache.getValue(target,properties.COMPILATION_UNIT_ELEMENT);
            if (op(Op.EQUALS,element,null) && internalContext.aboutToComputeResult(cacheEntry,properties.COMPILATION_UNIT_ELEMENT)) {
                element = analysisCache.getValue(target,properties.COMPILATION_UNIT_ELEMENT);
            }
        }
        if (op(Op.EQUALS,element,null)) {
            let builder : any = new bare.createInstance(any,null);
            element = builder.buildCompilationUnit(source,unit,librarySpecificUnit.library);
            (element as any).lineInfo = lineInfo;
        }else {
            new bare.createInstance(any,null).resolve(unit,element);
        }
        let constantFinder : any = new bare.createInstance(any,null);
        unit.accept(constantFinder);
        let constants : core.DartList<ConstantEvaluationTarget> = constantFinder.constantsToCompute.toList();
        op(Op.INDEX_ASSIGN,outputs,properties.COMPILATION_UNIT_CONSTANTS,constants);
        op(Op.INDEX_ASSIGN,outputs,properties.COMPILATION_UNIT_ELEMENT,element);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT1,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT1,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [BuildCompilationUnitElementTask.PARSED_UNIT_INPUT_NAME,PARSED_UNIT.of(unit.unit,{
                flushOnAccess : true})],
            [BuildCompilationUnitElementTask.LINE_INFO_INPUT_NAME,LINE_INFO.of(unit.unit)]]);
    }
    static createTask(context : any,target : any) : BuildCompilationUnitElementTask {
        return new BuildCompilationUnitElementTask(context,target);
    }
}

export namespace BuildDirectiveElementsTask {
    export type Constructors = 'BuildDirectiveElementsTask';
    export type Interface = Omit<BuildDirectiveElementsTask, Constructors>;
}
@DartClass
export class BuildDirectiveElementsTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$UNIT_INPUT_NAME : string;
    static get UNIT_INPUT_NAME() : string { 
        if (this.__$UNIT_INPUT_NAME===undefined) {
            this.__$UNIT_INPUT_NAME = 'UNIT_INPUT_NAME';
        }
        return this.__$UNIT_INPUT_NAME;
    }

    private static __$SOURCES_MODIFICATION_TIME_INPUT_NAME : string;
    static get SOURCES_MODIFICATION_TIME_INPUT_NAME() : string { 
        if (this.__$SOURCES_MODIFICATION_TIME_INPUT_NAME===undefined) {
            this.__$SOURCES_MODIFICATION_TIME_INPUT_NAME = 'SOURCES_MODIFICATION_TIME_INPUT_NAME';
        }
        return this.__$SOURCES_MODIFICATION_TIME_INPUT_NAME;
    }

    private static __$IMPORTS_LIBRARY_ELEMENT_INPUT_NAME : string;
    static get IMPORTS_LIBRARY_ELEMENT_INPUT_NAME() : string { 
        if (this.__$IMPORTS_LIBRARY_ELEMENT_INPUT_NAME===undefined) {
            this.__$IMPORTS_LIBRARY_ELEMENT_INPUT_NAME = 'IMPORTS_LIBRARY_ELEMENT1_INPUT_NAME';
        }
        return this.__$IMPORTS_LIBRARY_ELEMENT_INPUT_NAME;
    }

    private static __$EXPORTS_LIBRARY_ELEMENT_INPUT_NAME : string;
    static get EXPORTS_LIBRARY_ELEMENT_INPUT_NAME() : string { 
        if (this.__$EXPORTS_LIBRARY_ELEMENT_INPUT_NAME===undefined) {
            this.__$EXPORTS_LIBRARY_ELEMENT_INPUT_NAME = 'EXPORTS_LIBRARY_ELEMENT_INPUT_NAME';
        }
        return this.__$EXPORTS_LIBRARY_ELEMENT_INPUT_NAME;
    }

    private static __$IMPORTS_SOURCE_KIND_INPUT_NAME : string;
    static get IMPORTS_SOURCE_KIND_INPUT_NAME() : string { 
        if (this.__$IMPORTS_SOURCE_KIND_INPUT_NAME===undefined) {
            this.__$IMPORTS_SOURCE_KIND_INPUT_NAME = 'IMPORTS_SOURCE_KIND_INPUT_NAME';
        }
        return this.__$IMPORTS_SOURCE_KIND_INPUT_NAME;
    }

    private static __$EXPORTS_SOURCE_KIND_INPUT_NAME : string;
    static get EXPORTS_SOURCE_KIND_INPUT_NAME() : string { 
        if (this.__$EXPORTS_SOURCE_KIND_INPUT_NAME===undefined) {
            this.__$EXPORTS_SOURCE_KIND_INPUT_NAME = 'EXPORTS_SOURCE_KIND_INPUT_NAME';
        }
        return this.__$EXPORTS_SOURCE_KIND_INPUT_NAME;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'BuildDirectiveElementsTask',BuildDirectiveElementsTask.createTask.bind(this),BuildDirectiveElementsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ELEMENT2,properties.BUILD_DIRECTIVES_ERRORS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    BuildDirectiveElementsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return BuildDirectiveElementsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let libraryElement : any = getRequiredInput(BuildDirectiveElementsTask.LIBRARY_INPUT);
        let libraryUnit : any = getRequiredInput(BuildDirectiveElementsTask.UNIT_INPUT_NAME);
        let sourceModificationTimeMap : core.DartMap<any,number> = getRequiredInput(BuildDirectiveElementsTask.SOURCES_MODIFICATION_TIME_INPUT_NAME);
        let importLibraryMap : core.DartMap<any,any> = getRequiredInput(BuildDirectiveElementsTask.IMPORTS_LIBRARY_ELEMENT_INPUT_NAME);
        let exportLibraryMap : core.DartMap<any,any> = getRequiredInput(BuildDirectiveElementsTask.EXPORTS_LIBRARY_ELEMENT_INPUT_NAME);
        let importSourceKindMap : core.DartMap<any,any> = getRequiredInput(BuildDirectiveElementsTask.IMPORTS_SOURCE_KIND_INPUT_NAME);
        let exportSourceKindMap : core.DartMap<any,any> = getRequiredInput(BuildDirectiveElementsTask.EXPORTS_SOURCE_KIND_INPUT_NAME);
        let element : any;
        {
            let internalContext : any = context as any;
            let analysisCache : any = internalContext.analysisCache;
            let cacheEntry : any = internalContext.getCacheEntry(target);
            element = analysisCache.getValue(target,properties.LIBRARY_ELEMENT2);
            if (op(Op.EQUALS,element,null) && internalContext.aboutToComputeResult(cacheEntry,properties.LIBRARY_ELEMENT2)) {
                element = analysisCache.getValue(target,properties.LIBRARY_ELEMENT2);
            }
        }
        let errors : core.DartList<any>;
        if (op(Op.EQUALS,element,null)) {
            let builder : any = new bare.createInstance(any,null,context,libraryElement,sourceModificationTimeMap,importLibraryMap,importSourceKindMap,exportLibraryMap,exportSourceKindMap);
            libraryUnit.accept(builder);
            libraryElement.invalidateLibraryCycles();
            errors = builder.errors;
        }else {
            let resolver : any = new bare.createInstance(any,null,sourceModificationTimeMap,importSourceKindMap,exportSourceKindMap);
            libraryUnit.accept(resolver);
            errors = resolver.errors;
        }
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT2,libraryElement);
        op(Op.INDEX_ASSIGN,outputs,properties.BUILD_DIRECTIVES_ERRORS,errors);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            [BuildDirectiveElementsTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT1.of(source)],
            [BuildDirectiveElementsTask.UNIT_INPUT_NAME,properties.RESOLVED_UNIT1.of(new bare.createInstance(any,null,source,source))],
            [BuildDirectiveElementsTask.SOURCES_MODIFICATION_TIME_INPUT_NAME,properties.REFERENCED_SOURCES.of(source).toMapOf(MODIFICATION_TIME)],
            [BuildDirectiveElementsTask.IMPORTS_LIBRARY_ELEMENT_INPUT_NAME,IMPORTED_LIBRARIES.of(source).toMapOf(properties.LIBRARY_ELEMENT1)],
            [BuildDirectiveElementsTask.EXPORTS_LIBRARY_ELEMENT_INPUT_NAME,EXPORTED_LIBRARIES.of(source).toMapOf(properties.LIBRARY_ELEMENT1)],
            [BuildDirectiveElementsTask.IMPORTS_SOURCE_KIND_INPUT_NAME,IMPORTED_LIBRARIES.of(source).toMapOf(SOURCE_KIND)],
            [BuildDirectiveElementsTask.EXPORTS_SOURCE_KIND_INPUT_NAME,EXPORTED_LIBRARIES.of(source).toMapOf(SOURCE_KIND)]]);
    }
    static createTask(context : any,target : any) : BuildDirectiveElementsTask {
        return new BuildDirectiveElementsTask(context,target);
    }
}

export namespace BuildEnumMemberElementsTask {
    export type Constructors = 'BuildEnumMemberElementsTask';
    export type Interface = Omit<BuildEnumMemberElementsTask, Constructors>;
}
@DartClass
export class BuildEnumMemberElementsTask extends any {
    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'BuildEnumMemberElementsTask',BuildEnumMemberElementsTask.createTask.bind(this),BuildEnumMemberElementsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CREATED_RESOLVED_UNIT3,properties.RESOLVED_UNIT3));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    BuildEnumMemberElementsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return BuildEnumMemberElementsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let typeProvider : any = getRequiredInput(BuildEnumMemberElementsTask.TYPE_PROVIDER_INPUT);
        let unit : any = getRequiredInput(BuildEnumMemberElementsTask.UNIT_INPUT);
        var findFirstEnum : () => any = () : any =>  {
            let members : any = unit.declarations;
            let length : number = members.length;
            for(let i : number = 0; i < length; i++){
                let member : any = op(Op.INDEX,members,i);
                if (is(member, any)) {
                    return member;
                }
            }
            return null;
        };
        let firstEnum : any = findFirstEnum();
        if (firstEnum != null && resolutionMap.elementDeclaredByEnumDeclaration(firstEnum).accessors.isEmpty) {
            let builder : any = new bare.createInstance(any,null,typeProvider);
            unit.accept(builder);
        }
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT3,true);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT3,unit);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [BuildEnumMemberElementsTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)],
            [BuildEnumMemberElementsTask.UNIT_INPUT,properties.RESOLVED_UNIT2.of(unit)]]);
    }
    static createTask(context : any,target : any) : BuildEnumMemberElementsTask {
        return new BuildEnumMemberElementsTask(context,target);
    }
}

export namespace BuildExportNamespaceTask {
    export type Constructors = 'BuildExportNamespaceTask';
    export type Interface = Omit<BuildExportNamespaceTask, Constructors>;
}
@DartClass
export class BuildExportNamespaceTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'BuildExportNamespaceTask',BuildExportNamespaceTask.createTask.bind(this),BuildExportNamespaceTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ELEMENT4));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    BuildExportNamespaceTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return BuildExportNamespaceTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(BuildExportNamespaceTask.LIBRARY_INPUT);
        library.exportNamespace = null;
        let builder : any = new bare.createInstance(any,null);
        let namespace : any = builder.createExportNamespaceForLibrary(library);
        library.exportNamespace = namespace;
        if (op(Op.EQUALS,library.entryPoint,null)) {
            let exportedElements : core.DartIterable<any> = namespace.definedNames.values;
            library.entryPoint = exportedElements.firstWhere((element : any) =>  {
                return is(element, any) && element.isEntryPoint;
            },{
                orElse : () =>  {
                    return null;
                }});
        }
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT4,library);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            [BuildExportNamespaceTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT3.of(source)],
            ['exportsLibraryPublicNamespace',properties.EXPORT_SOURCE_CLOSURE.of(source).toMapOf(properties.LIBRARY_ELEMENT3)]]);
    }
    static createTask(context : any,target : any) : BuildExportNamespaceTask {
        return new BuildExportNamespaceTask(context,target);
    }
}

export namespace BuildLibraryElementTask {
    export type Constructors = 'BuildLibraryElementTask';
    export type Interface = Omit<BuildLibraryElementTask, Constructors>;
}
@DartClass
export class BuildLibraryElementTask extends any {
    private static __$DEFINING_UNIT_INPUT : string;
    static get DEFINING_UNIT_INPUT() : string { 
        if (this.__$DEFINING_UNIT_INPUT===undefined) {
            this.__$DEFINING_UNIT_INPUT = 'DEFINING_UNIT_INPUT';
        }
        return this.__$DEFINING_UNIT_INPUT;
    }

    private static __$PARTS_UNIT_INPUT : string;
    static get PARTS_UNIT_INPUT() : string { 
        if (this.__$PARTS_UNIT_INPUT===undefined) {
            this.__$PARTS_UNIT_INPUT = 'PARTS_UNIT_INPUT';
        }
        return this.__$PARTS_UNIT_INPUT;
    }

    private static __$MODIFICATION_TIME_INPUT : string;
    static get MODIFICATION_TIME_INPUT() : string { 
        if (this.__$MODIFICATION_TIME_INPUT===undefined) {
            this.__$MODIFICATION_TIME_INPUT = 'MODIFICATION_TIME_INPUT';
        }
        return this.__$MODIFICATION_TIME_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'BuildLibraryElementTask',BuildLibraryElementTask.createTask.bind(this),BuildLibraryElementTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.BUILD_LIBRARY_ERRORS,properties.LIBRARY_ELEMENT1,IS_LAUNCHABLE));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    private static __$_UNKNOWN_LIBRARY_NAME : string;
    static get _UNKNOWN_LIBRARY_NAME() : string { 
        if (this.__$_UNKNOWN_LIBRARY_NAME===undefined) {
            this.__$_UNKNOWN_LIBRARY_NAME = 'unknown-library-name';
        }
        return this.__$_UNKNOWN_LIBRARY_NAME;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    BuildLibraryElementTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return BuildLibraryElementTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let errors : core.DartList<any> = new core.DartList.literal<any>();
        let librarySource : any = getRequiredSource();
        let definingCompilationUnit : any = getRequiredInput(BuildLibraryElementTask.DEFINING_UNIT_INPUT);
        let partUnits : core.DartList<any> = getRequiredInput(BuildLibraryElementTask.PARTS_UNIT_INPUT);
        let modificationTime : number = getRequiredInput(BuildLibraryElementTask.MODIFICATION_TIME_INPUT);
        let definingCompilationUnitElement : any = definingCompilationUnit.element;
        let partUnitMap : core.DartMap<any,any> = new core.DartHashMap<any,any>();
        let partLength : number = partUnits.length;
        for(let i : number = 0; i < partLength; i++){
            let partUnit : any = partUnits[i];
            let partSource : any = resolutionMap.elementDeclaredByCompilationUnit(partUnit).source;
            op(Op.INDEX_ASSIGN,partUnitMap,partSource,partUnit);
        }
        let libraryNameNode : any = null;
        let partsLibraryName : string = BuildLibraryElementTask._UNKNOWN_LIBRARY_NAME;
        let hasPartDirective : boolean = false;
        let seenPartSources : core.DartSet<any> = new core.DartSet<any>();
        let entryPoint : any = this._findEntryPoint(definingCompilationUnitElement);
        let directivesToResolve : core.DartList<any> = new core.DartList.literal<any>();
        let sourcedCompilationUnits : core.DartList<any> = new core.DartList.literal<any>();
        let directives : any = definingCompilationUnit.directives;
        let directiveLength : number = directives.length;
        for(let i : number = 0; i < directiveLength; i++){
            let directive : any = op(Op.INDEX,directives,i);
            if (is(directive, any)) {
                libraryNameNode = directive.name;
                directivesToResolve.add(directive);
            }else if (is(directive, any)) {
                let partUri : any = directive.uri;
                let partSource : any = directive.uriSource;
                hasPartDirective = true;
                let partUnit : any = op(Op.INDEX,partUnitMap,partSource);
                if (partUnit != null) {
                    let partElement : any = partUnit.element;
                    partElement.uriOffset = partUri.offset;
                    partElement.uriEnd = partUri.end;
                    partElement.uri = directive.uriContent;
                    if (!seenPartSources.add(partSource)) {
                        errors.add(new bare.createInstance(any,null,librarySource,partUri.offset,partUri.length,CompileTimeErrorCode.DUPLICATE_PART,new core.DartList.literal(partSource.uri)));
                    }
                    if (context.exists(partSource)) {
                        let nameOrSource : _NameOrSource = this._getPartLibraryNameOrUri(context,partSource,partUnit,directivesToResolve);
                        if (op(Op.EQUALS,nameOrSource,null)) {
                            errors.add(new bare.createInstance(any,null,librarySource,partUri.offset,partUri.length,CompileTimeErrorCode.PART_OF_NON_PART,new core.DartList.literal(partUri.toSource())));
                        }else {
                            let name : string = nameOrSource.name;
                            if (name != null) {
                                if (op(Op.EQUALS,libraryNameNode,null)) {
                                    if (partsLibraryName == BuildLibraryElementTask._UNKNOWN_LIBRARY_NAME) {
                                        partsLibraryName = name;
                                    }else if (partsLibraryName != name) {
                                        partsLibraryName = null;
                                    }
                                }else if (libraryNameNode.name != name) {
                                    errors.add(new bare.createInstance(any,null,librarySource,partUri.offset,partUri.length,StaticWarningCode.PART_OF_DIFFERENT_LIBRARY,new core.DartList.literal(libraryNameNode.name,name)));
                                }
                            }else {
                                let source : any = nameOrSource.source;
                                if (source != librarySource) {
                                    errors.add(new bare.createInstance(any,null,librarySource,partUri.offset,partUri.length,StaticWarningCode.PART_OF_DIFFERENT_LIBRARY,new core.DartList.literal(librarySource.uri.toString(),source.uri.toString())));
                                }
                            }
                        }
                    }
                    if (op(Op.EQUALS,entryPoint,null)) {
                        entryPoint = this._findEntryPoint(partElement);
                    }
                    directive.element = partElement;
                    sourcedCompilationUnits.add(partElement);
                }
            }
        }
        if (hasPartDirective && op(Op.EQUALS,libraryNameNode,null) && !context.analysisOptions.enableUriInPartOf) {
            errors.add(new bare.createInstance(any,null,librarySource,0,0,ResolverErrorCode.MISSING_LIBRARY_DIRECTIVE_WITH_PART));
        }
        let owningContext : any = context;
        if (is(context, any)) {
            let internalContext : any = context;
            owningContext = internalContext.getContextFor(librarySource);
        }
        let libraryElement : any;
        {
            let internalContext : any = context as any;
            let analysisCache : any = internalContext.analysisCache;
            let cacheEntry : any = internalContext.getCacheEntry(target);
            libraryElement = analysisCache.getValue(target,properties.LIBRARY_ELEMENT1) as any;
            if (op(Op.EQUALS,libraryElement,null) && internalContext.aboutToComputeResult(cacheEntry,properties.LIBRARY_ELEMENT1)) {
                libraryElement = analysisCache.getValue(target,properties.LIBRARY_ELEMENT1) as any;
            }
        }
        if (op(Op.EQUALS,libraryElement,null)) {
            libraryElement = new bare.createInstance(any,null,owningContext,libraryNameNode);
            libraryElement.isSynthetic = modificationTime < 0;
            libraryElement.definingCompilationUnit = definingCompilationUnitElement;
            libraryElement.entryPoint = entryPoint;
            libraryElement.parts = sourcedCompilationUnits;
            libraryElement.hasExtUri = this._hasExtUri(definingCompilationUnit);
            BuildLibraryElementUtils.patchTopLevelAccessors(libraryElement);
            if (definingCompilationUnit.directives.isNotEmpty) {
                setElementDocumentationComment(libraryElement,definingCompilationUnit.directives.first);
            }
        }
        let length : number = directivesToResolve.length;
        for(let i : number = 0; i < length; i++){
            let directive : any = directivesToResolve[i];
            directive.element = libraryElement;
        }
        op(Op.INDEX_ASSIGN,outputs,properties.BUILD_LIBRARY_ERRORS,errors);
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT1,libraryElement);
        op(Op.INDEX_ASSIGN,outputs,IS_LAUNCHABLE,entryPoint != null);
    }
    _findEntryPoint(element : any) : any {
        let functions : core.DartList<any> = element.functions;
        let length : number = functions.length;
        for(let i : number = 0; i < length; i++){
            let function : any = functions[i];
            if (function.isEntryPoint) {
                return function;
            }
        }
        return null;
    }
    _getPartLibraryNameOrUri(context : any,partSource : any,partUnit : any,directivesToResolve : core.DartList<any>) : _NameOrSource {
        let directives : any = partUnit.directives;
        let length : number = directives.length;
        for(let i : number = 0; i < length; i++){
            let directive : any = op(Op.INDEX,directives,i);
            if (is(directive, any)) {
                directivesToResolve.add(directive);
                let libraryName : any = directive.libraryName;
                if (libraryName != null) {
                    return new _NameOrSource(libraryName.name,null);
                }
                let uri : string = ((t)=>(!!t)?t.stringValue:null)(directive.uri);
                if (uri != null) {
                    let librarySource : any = context.sourceFactory.resolveUri(partSource,uri);
                    if (librarySource != null) {
                        return new _NameOrSource(null,librarySource);
                    }
                }
            }
        }
        return null;
    }
    _hasExtUri(unit : any) : boolean {
        let directives : any = unit.directives;
        let length : number = directives.length;
        for(let i : number = 0; i < length; i++){
            let directive : any = op(Op.INDEX,directives,i);
            if (is(directive, any)) {
                if (DartUriResolver.isDartExtUri(directive.uriContent)) {
                    return true;
                }
            }
        }
        return false;
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            [BuildLibraryElementTask.DEFINING_UNIT_INPUT,properties.RESOLVED_UNIT1.of(new bare.createInstance(any,null,source,source))],
            [BuildLibraryElementTask.PARTS_UNIT_INPUT,INCLUDED_PARTS.of(source).toList((unit : any) =>  {
                return properties.RESOLVED_UNIT1.of(new bare.createInstance(any,null,source,unit));
            })],
            [BuildLibraryElementTask.MODIFICATION_TIME_INPUT,MODIFICATION_TIME.of(source)]]);
    }
    static createTask(context : any,target : any) : BuildLibraryElementTask {
        return new BuildLibraryElementTask(context,target);
    }
}

export namespace _SourceClosureTaskInputBuilder {
    export type Constructors = '_SourceClosureTaskInputBuilder';
    export type Interface = Omit<_SourceClosureTaskInputBuilder, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceClosureTaskInputBuilder implements any.Interface {
    kind : _SourceClosureKind;

    _libraries : core.DartSet<any>;

    _newSources : core.DartList<any>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    currentResult : any;

    currentTarget : any;

    constructor(librarySource : any,kind : _SourceClosureKind,currentResult : any) {
    }
    @defaultConstructor
    _SourceClosureTaskInputBuilder(librarySource : any,kind : _SourceClosureKind,currentResult : any) {
        this._libraries = new core.DartHashSet<any>();
        this._newSources = new core.DartList.literal<any>();
        this.kind = kind;
        this.currentResult = currentResult;
        this._newSources.add(librarySource);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set currentValue(value : core.DartObject) {
        let library : any = value;
        if (this._libraries.add(library)) {
            if (op(Op.EQUALS,this.kind,_SourceClosureKind.IMPORT) || op(Op.EQUALS,this.kind,_SourceClosureKind.IMPORT_EXPORT)) {
                let imports : core.DartList<any> = library.imports;
                let length : number = imports.length;
                for(let i : number = 0; i < length; i++){
                    let importElement : any = imports[i];
                    let importedSource : any = ((t)=>(!!t)?t.source:null)(importElement.importedLibrary);
                    if (importedSource != null) {
                        this._newSources.add(importedSource);
                    }
                }
            }
            if (op(Op.EQUALS,this.kind,_SourceClosureKind.EXPORT) || op(Op.EQUALS,this.kind,_SourceClosureKind.IMPORT_EXPORT)) {
                let exports : core.DartList<any> = library.exports;
                let length : number = exports.length;
                for(let i : number = 0; i < length; i++){
                    let exportElement : any = exports[i];
                    let exportedSource : any = ((t)=>(!!t)?t.source:null)(exportElement.exportedLibrary);
                    if (exportedSource != null) {
                        this._newSources.add(exportedSource);
                    }
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flushOnAccess() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get inputValue() : core.DartList<any> {
        return this._libraries.map((library : any) =>  {
            return library.source;
        }).toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    currentValueNotAvailable() : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (this._newSources.isEmpty) {
            return false;
        }
        this.currentTarget = this._newSources.removeLast();
        return true;
    }
}

export namespace BuildSourceExportClosureTask {
    export type Constructors = 'BuildSourceExportClosureTask';
    export type Interface = Omit<BuildSourceExportClosureTask, Constructors>;
}
@DartClass
export class BuildSourceExportClosureTask extends any {
    private static __$EXPORT_INPUT : string;
    static get EXPORT_INPUT() : string { 
        if (this.__$EXPORT_INPUT===undefined) {
            this.__$EXPORT_INPUT = 'EXPORT_INPUT';
        }
        return this.__$EXPORT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'BuildSourceExportClosureTask',BuildSourceExportClosureTask.createTask.bind(this),BuildSourceExportClosureTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.EXPORT_SOURCE_CLOSURE));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    BuildSourceExportClosureTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return BuildSourceExportClosureTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let exportClosure : core.DartList<any> = getRequiredInput(BuildSourceExportClosureTask.EXPORT_INPUT);
        op(Op.INDEX_ASSIGN,outputs,properties.EXPORT_SOURCE_CLOSURE,exportClosure);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            [BuildSourceExportClosureTask.EXPORT_INPUT,new _ExportSourceClosureTaskInput(source,properties.LIBRARY_ELEMENT2)]]);
    }
    static createTask(context : any,target : any) : BuildSourceExportClosureTask {
        return new BuildSourceExportClosureTask(context,target);
    }
}

export namespace BuildTypeProviderTask {
    export type Constructors = 'BuildTypeProviderTask';
    export type Interface = Omit<BuildTypeProviderTask, Constructors>;
}
@DartClass
export class BuildTypeProviderTask extends any {
    private static __$CORE_INPUT : string;
    static get CORE_INPUT() : string { 
        if (this.__$CORE_INPUT===undefined) {
            this.__$CORE_INPUT = 'CORE_INPUT';
        }
        return this.__$CORE_INPUT;
    }

    private static __$ASYNC_INPUT : string;
    static get ASYNC_INPUT() : string { 
        if (this.__$ASYNC_INPUT===undefined) {
            this.__$ASYNC_INPUT = 'ASYNC_INPUT';
        }
        return this.__$ASYNC_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'BuildTypeProviderTask',BuildTypeProviderTask.createTask.bind(this),BuildTypeProviderTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.TYPE_PROVIDER));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    BuildTypeProviderTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return BuildTypeProviderTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let coreLibrary : any = getRequiredInput(BuildTypeProviderTask.CORE_INPUT);
        let asyncLibrary : any = getOptionalInput(BuildTypeProviderTask.ASYNC_INPUT);
        let coreNamespace : any = coreLibrary.publicNamespace;
        let asyncNamespace : any = asyncLibrary.publicNamespace;
        let typeProvider : any = new bare.createInstance(any,null,coreNamespace,asyncNamespace);
        (context as any).typeProvider = typeProvider;
        op(Op.INDEX_ASSIGN,outputs,properties.TYPE_PROVIDER,typeProvider);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let contextTarget : any = target;
        let sourceFactory : any = contextTarget.context.sourceFactory;
        let coreSource : any = sourceFactory.forUri(DartSdk.DART_CORE);
        let asyncSource : any = sourceFactory.forUri(DartSdk.DART_ASYNC);
        if (op(Op.EQUALS,asyncSource,null)) {
            return new core.DartMap.literal([
                [BuildTypeProviderTask.CORE_INPUT,properties.LIBRARY_ELEMENT3.of(coreSource)]]);
        }
        return new core.DartMap.literal([
            [BuildTypeProviderTask.CORE_INPUT,properties.LIBRARY_ELEMENT3.of(coreSource)],
            [BuildTypeProviderTask.ASYNC_INPUT,properties.LIBRARY_ELEMENT3.of(asyncSource)]]);
    }
    static createTask(context : any,target : any) : BuildTypeProviderTask {
        return new BuildTypeProviderTask(context,target);
    }
}

export enum _SourceClosureKind {
    IMPORT,
    EXPORT,
    IMPORT_EXPORT
}

export namespace _NameOrSource {
    export type Constructors = '_NameOrSource';
    export type Interface = Omit<_NameOrSource, Constructors>;
}
@DartClass
export class _NameOrSource {
    name : string;

    source : any;

    constructor(name : string,source : any) {
    }
    @defaultConstructor
    _NameOrSource(name : string,source : any) {
        this.name = name;
        this.source = source;
    }
}

export namespace _ImportSourceClosureTaskInput {
    export type Constructors = '_ImportSourceClosureTaskInput';
    export type Interface = Omit<_ImportSourceClosureTaskInput, Constructors>;
}
@DartClass
export class _ImportSourceClosureTaskInput extends any {
    target : any;

    resultDescriptor : any;

    constructor(target : any,resultDescriptor : any) {
    }
    @defaultConstructor
    _ImportSourceClosureTaskInput(target : any,resultDescriptor : any) {
        this.target = target;
        this.resultDescriptor = resultDescriptor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new _SourceClosureTaskInputBuilder(this.target,_SourceClosureKind.IMPORT,this.resultDescriptor);
    }
}

export namespace ComputeLibraryCycleTask {
    export type Constructors = 'ComputeLibraryCycleTask';
    export type Interface = Omit<ComputeLibraryCycleTask, Constructors>;
}
@DartClass
export class ComputeLibraryCycleTask extends any {
    private static __$LIBRARY_ELEMENT_INPUT : string;
    static get LIBRARY_ELEMENT_INPUT() : string { 
        if (this.__$LIBRARY_ELEMENT_INPUT===undefined) {
            this.__$LIBRARY_ELEMENT_INPUT = 'LIBRARY_ELEMENT_INPUT';
        }
        return this.__$LIBRARY_ELEMENT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ComputeLibraryCycleForUnitTask',ComputeLibraryCycleTask.createTask.bind(this),ComputeLibraryCycleTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_CYCLE,properties.LIBRARY_CYCLE_UNITS,properties.LIBRARY_CYCLE_DEPENDENCIES));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ComputeLibraryCycleTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ComputeLibraryCycleTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ComputeLibraryCycleTask.LIBRARY_ELEMENT_INPUT);
        if (context.analysisOptions.strongMode && !LibraryElementImpl.hasResolutionCapability(library,LibraryResolutionCapability.resolvedTypeNames)) {
            let component : core.DartList<any> = library.libraryCycle;
            let filter : core.DartSet<any> = component.toSet();
            let deps : core.DartSet<any> = new core.DartSet<any>();
            var addLibrary : (l : any) => void = (l : any) : void =>  {
                if (!filter.contains(l)) {
                    deps.addAll(l.units);
                }
            };
            let length : number = component.length;
            for(let i : number = 0; i < length; i++){
                let library : any = component[i];
                library.importedLibraries.forEach(addLibrary);
                library.exportedLibraries.forEach(addLibrary);
            }
            var unitToLSU : (unit : any) => any = (unit : any) : any =>  {
                return new bare.createInstance(any,null,unit.librarySource,unit.source);
            };
            op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_CYCLE,component);
            op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_CYCLE_UNITS,component.expand((l : any) =>  {
                return l.units;
            }).map(unitToLSU).toList());
            op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_CYCLE_DEPENDENCIES,deps.map(unitToLSU).toList());
        }else {
            op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_CYCLE,new core.DartList.literal());
            op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_CYCLE_UNITS,new core.DartList.literal());
            op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_CYCLE_DEPENDENCIES,new core.DartList.literal());
        }
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let librarySource : any = target;
        return new core.DartMap.literal([
            [ComputeLibraryCycleTask.LIBRARY_ELEMENT_INPUT,properties.LIBRARY_ELEMENT2.of(librarySource)],
            ['resolveReachableLibraries',properties.READY_LIBRARY_ELEMENT2.of(librarySource)]]);
    }
    static createTask(context : any,target : any) : ComputeLibraryCycleTask {
        return new ComputeLibraryCycleTask(context,target);
    }
}

export namespace ComputeRequiredConstantsTask {
    export type Constructors = 'ComputeRequiredConstantsTask';
    export type Interface = Omit<ComputeRequiredConstantsTask, Constructors>;
}
@DartClass
export class ComputeRequiredConstantsTask extends any {
    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ComputeRequiredConstantsTask',ComputeRequiredConstantsTask.createTask.bind(this),ComputeRequiredConstantsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.PENDING_ERRORS,properties.REQUIRED_CONSTANTS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ComputeRequiredConstantsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ComputeRequiredConstantsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let source : any = getRequiredSource();
        let unit : any = getRequiredInput(ComputeRequiredConstantsTask.UNIT_INPUT);
        let computer : any = new bare.createInstance(any,null,source);
        unit.accept(computer);
        let pendingErrors : core.DartList<any> = computer.pendingErrors;
        let requiredConstants : core.DartList<ConstantEvaluationTarget> = computer.requiredConstants;
        op(Op.INDEX_ASSIGN,outputs,properties.PENDING_ERRORS,pendingErrors);
        op(Op.INDEX_ASSIGN,outputs,properties.REQUIRED_CONSTANTS,requiredConstants);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [ComputeRequiredConstantsTask.UNIT_INPUT,RESOLVED_UNIT.of(unit)]]);
    }
    static createTask(context : any,target : any) : ComputeRequiredConstantsTask {
        return new ComputeRequiredConstantsTask(context,target);
    }
}

export namespace ConstantEvaluationAnalysisTask {
    export type Constructors = 'ConstantEvaluationAnalysisTask';
    export type Interface = Omit<ConstantEvaluationAnalysisTask, Constructors>;
}
@DartClass
export class ConstantEvaluationAnalysisTask extends any {
    constructor(context : any,constant : ConstantEvaluationTarget) {
    }
    @defaultConstructor
    ConstantEvaluationAnalysisTask(context : any,constant : ConstantEvaluationTarget) {
        super.DartObject(context,constant);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get description() : string {
        let source : any = target.source;
        let sourceName : string = op(Op.EQUALS,source,null) ? '<unknown source>' : source.fullName;
        return `${descriptor.name} for element ${target} in source ${sourceName}`;
    }
}

export namespace ConstantEvaluationTarget {
    export type Constructors = 'ConstantEvaluationTarget';
    export type Interface = Omit<ConstantEvaluationTarget, Constructors>;
}
@DartClass
export class ConstantEvaluationTarget extends any {
    @AbstractProperty
    get context() : any{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantEvaluationTarget() {
    }
}

export namespace ContainingLibrariesTask {
    export type Constructors = 'ContainingLibrariesTask';
    export type Interface = Omit<ContainingLibrariesTask, Constructors>;
}
@DartClass
export class ContainingLibrariesTask extends any {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ContainingLibrariesTask',ContainingLibrariesTask.createTask.bind(this),ContainingLibrariesTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CONTAINING_LIBRARIES));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ContainingLibrariesTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ContainingLibrariesTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let source : any = getRequiredSource();
        op(Op.INDEX_ASSIGN,outputs,properties.CONTAINING_LIBRARIES,context.getLibrariesContaining(source));
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    static createTask(context : any,target : any) : ContainingLibrariesTask {
        return new ContainingLibrariesTask(context,target);
    }
}

export namespace DartErrorsTask {
    export type Constructors = 'DartErrorsTask';
    export type Interface = Omit<DartErrorsTask, Constructors>;
}
@DartClass
export class DartErrorsTask extends any {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'DartErrorsTask',DartErrorsTask.createTask.bind(this),DartErrorsTask.buildInputs.bind(this),new core.DartList.literal<any>(DART_ERRORS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    private static __$IGNORE_INFO_INPUT : string;
    static get IGNORE_INFO_INPUT() : string { 
        if (this.__$IGNORE_INFO_INPUT===undefined) {
            this.__$IGNORE_INFO_INPUT = 'IGNORE_INFO_INPUT';
        }
        return this.__$IGNORE_INFO_INPUT;
    }

    private static __$LINE_INFO_INPUT : string;
    static get LINE_INFO_INPUT() : string { 
        if (this.__$LINE_INFO_INPUT===undefined) {
            this.__$LINE_INFO_INPUT = 'LINE_INFO_INPUT';
        }
        return this.__$LINE_INFO_INPUT;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    DartErrorsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return DartErrorsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let errorLists : core.DartList<core.DartList<any>> = new core.DartList.literal<core.DartList<any>>();
        let enginePlugin : any = AnalysisEngine.instance.enginePlugin;
        let errorsForSource : core.DartList<any> = enginePlugin.dartErrorsForSource;
        let sourceLength : number = errorsForSource.length;
        for(let i : number = 0; i < sourceLength; i++){
            let result : any = errorsForSource[i];
            let inputName : string = op(Op.PLUS,result.name,'_input');
            errorLists.add(getRequiredInput(inputName));
        }
        let errorsForUnit : core.DartList<any> = enginePlugin.dartErrorsForUnit;
        let unitLength : number = errorsForUnit.length;
        for(let i : number = 0; i < unitLength; i++){
            let result : any = errorsForUnit[i];
            let inputName : string = op(Op.PLUS,result.name,'_input');
            let errorMap : core.DartMap<any,core.DartList<any>> = getRequiredInput(inputName);
            for(let errors of errorMap.values) {
                errorLists.add(errors);
            }
        }
        let errors : core.DartList<any> = this._filterIgnores(AnalysisError.mergeLists(errorLists));
        op(Op.INDEX_ASSIGN,outputs,DART_ERRORS,errors);
    }
    _filterIgnores(errors : core.DartList<any>) : core.DartList<any> {
        if (errors.isEmpty) {
            return errors;
        }
        let ignoreInfo : IgnoreInfo = getRequiredInput(DartErrorsTask.IGNORE_INFO_INPUT);
        if (!ignoreInfo.hasIgnores) {
            return errors;
        }
        let lineInfo : any = getRequiredInput(DartErrorsTask.LINE_INFO_INPUT);
        return DartErrorsTask.filterIgnored(errors,ignoreInfo,lineInfo);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        let inputs : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        inputs.set(DartErrorsTask.LINE_INFO_INPUT,LINE_INFO.of(source));
        inputs.set(DartErrorsTask.IGNORE_INFO_INPUT,properties.IGNORE_INFO.of(source));
        let enginePlugin : any = AnalysisEngine.instance.enginePlugin;
        let errorsForSource : core.DartList<any> = enginePlugin.dartErrorsForSource;
        let sourceLength : number = errorsForSource.length;
        for(let i : number = 0; i < sourceLength; i++){
            let result : any = errorsForSource[i];
            let inputName : string = op(Op.PLUS,result.name,'_input');
            inputs.set(inputName,result.of(source));
        }
        let errorsForUnit : core.DartList<any> = enginePlugin.dartErrorsForUnit;
        let unitLength : number = errorsForUnit.length;
        for(let i : number = 0; i < unitLength; i++){
            let result : any = errorsForUnit[i];
            let inputName : string = op(Op.PLUS,result.name,'_input');
            inputs.set(inputName,properties.CONTAINING_LIBRARIES.of(source).toMap((library : any) =>  {
                let unit : any = new bare.createInstance(any,null,library,source);
                return result.of(unit);
            }));
        }
        return inputs;
    }
    static createTask(context : any,target : any) : DartErrorsTask {
        return new DartErrorsTask(context,target);
    }
    static filterIgnored(errors : core.DartList<any>,ignoreInfo : IgnoreInfo,lineInfo : any) : core.DartList<any> {
        if (errors.isEmpty || !ignoreInfo.hasIgnores) {
            return errors;
        }
        var isIgnored : (error : any) => boolean = (error : any) : boolean =>  {
            let errorLine : number = lineInfo.getLocation(error.offset).lineNumber;
            let errorCode : string = error.errorCode.name.toLowerCase();
            return ignoreInfo.ignoredAt(errorCode,errorLine) || ignoreInfo.ignoredAt(errorCode,errorLine - 1);
        };
        return errors.where((e : any) =>  {
            return !isIgnored(e);
        }).toList();
    }
}

export namespace EvaluateUnitConstantsTask {
    export type Constructors = 'EvaluateUnitConstantsTask';
    export type Interface = Omit<EvaluateUnitConstantsTask, Constructors>;
}
@DartClass
export class EvaluateUnitConstantsTask extends any {
    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$CONSTANT_VALUES : string;
    static get CONSTANT_VALUES() : string { 
        if (this.__$CONSTANT_VALUES===undefined) {
            this.__$CONSTANT_VALUES = 'CONSTANT_VALUES';
        }
        return this.__$CONSTANT_VALUES;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'EvaluateUnitConstantsTask',EvaluateUnitConstantsTask.createTask.bind(this),EvaluateUnitConstantsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CREATED_RESOLVED_UNIT12,properties.RESOLVED_UNIT12));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    EvaluateUnitConstantsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return EvaluateUnitConstantsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let unit : any = getRequiredInput(EvaluateUnitConstantsTask.UNIT_INPUT);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT12,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT12,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            ['libraryElement',properties.LIBRARY_ELEMENT9.of(unit.library)],
            [EvaluateUnitConstantsTask.UNIT_INPUT,properties.RESOLVED_UNIT11.of(unit)],
            [EvaluateUnitConstantsTask.CONSTANT_VALUES,properties.COMPILATION_UNIT_CONSTANTS.of(unit).toListOf(properties.CONSTANT_VALUE)],
            ['constantExpressionsDependencies',properties.CONSTANT_EXPRESSIONS_DEPENDENCIES.of(unit).toListOf(properties.CONSTANT_VALUE)]]);
    }
    static createTask(context : any,target : any) : EvaluateUnitConstantsTask {
        return new EvaluateUnitConstantsTask(context,target);
    }
}

export namespace GatherUsedImportedElementsTask {
    export type Constructors = 'GatherUsedImportedElementsTask';
    export type Interface = Omit<GatherUsedImportedElementsTask, Constructors>;
}
@DartClass
export class GatherUsedImportedElementsTask extends any {
    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'GatherUsedImportedElementsTask',GatherUsedImportedElementsTask.createTask.bind(this),GatherUsedImportedElementsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.USED_IMPORTED_ELEMENTS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    GatherUsedImportedElementsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return GatherUsedImportedElementsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let unit : any = getRequiredInput(GatherUsedImportedElementsTask.UNIT_INPUT);
        let unitElement : any = unit.element;
        let libraryElement : any = unitElement.library;
        let visitor : any = new bare.createInstance(any,null,libraryElement);
        unit.accept(visitor);
        op(Op.INDEX_ASSIGN,outputs,properties.USED_IMPORTED_ELEMENTS,visitor.usedElements);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [GatherUsedImportedElementsTask.UNIT_INPUT,properties.RESOLVED_UNIT11.of(unit)]]);
    }
    static createTask(context : any,target : any) : GatherUsedImportedElementsTask {
        return new GatherUsedImportedElementsTask(context,target);
    }
}

export namespace GatherUsedLocalElementsTask {
    export type Constructors = 'GatherUsedLocalElementsTask';
    export type Interface = Omit<GatherUsedLocalElementsTask, Constructors>;
}
@DartClass
export class GatherUsedLocalElementsTask extends any {
    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'GatherUsedLocalElementsTask',GatherUsedLocalElementsTask.createTask.bind(this),GatherUsedLocalElementsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.USED_LOCAL_ELEMENTS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    GatherUsedLocalElementsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return GatherUsedLocalElementsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let unit : any = getRequiredInput(GatherUsedLocalElementsTask.UNIT_INPUT);
        let unitElement : any = unit.element;
        let libraryElement : any = unitElement.library;
        let visitor : any = new bare.createInstance(any,null,libraryElement);
        unit.accept(visitor);
        op(Op.INDEX_ASSIGN,outputs,properties.USED_LOCAL_ELEMENTS,visitor.usedElements);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [GatherUsedLocalElementsTask.UNIT_INPUT,properties.RESOLVED_UNIT11.of(unit)]]);
    }
    static createTask(context : any,target : any) : GatherUsedLocalElementsTask {
        return new GatherUsedLocalElementsTask(context,target);
    }
}

export namespace GenerateHintsTask {
    export type Constructors = 'GenerateHintsTask';
    export type Interface = Omit<GenerateHintsTask, Constructors>;
}
@DartClass
export class GenerateHintsTask extends any {
    private static __$RESOLVED_UNIT_INPUT : string;
    static get RESOLVED_UNIT_INPUT() : string { 
        if (this.__$RESOLVED_UNIT_INPUT===undefined) {
            this.__$RESOLVED_UNIT_INPUT = 'RESOLVED_UNIT';
        }
        return this.__$RESOLVED_UNIT_INPUT;
    }

    private static __$USED_LOCAL_ELEMENTS_INPUT : string;
    static get USED_LOCAL_ELEMENTS_INPUT() : string { 
        if (this.__$USED_LOCAL_ELEMENTS_INPUT===undefined) {
            this.__$USED_LOCAL_ELEMENTS_INPUT = 'USED_LOCAL_ELEMENTS';
        }
        return this.__$USED_LOCAL_ELEMENTS_INPUT;
    }

    private static __$USED_IMPORTED_ELEMENTS_INPUT : string;
    static get USED_IMPORTED_ELEMENTS_INPUT() : string { 
        if (this.__$USED_IMPORTED_ELEMENTS_INPUT===undefined) {
            this.__$USED_IMPORTED_ELEMENTS_INPUT = 'USED_IMPORTED_ELEMENTS';
        }
        return this.__$USED_IMPORTED_ELEMENTS_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'GenerateHintsTask',GenerateHintsTask.createTask.bind(this),GenerateHintsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.HINTS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    GenerateHintsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return GenerateHintsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let analysisOptions : any = context.analysisOptions;
        if (!analysisOptions.hint) {
            op(Op.INDEX_ASSIGN,outputs,properties.HINTS,AnalysisError.NO_ERRORS);
            return;
        }
        let errorListener : any = new bare.createInstance(any,null);
        let source : any = getRequiredSource();
        let errorReporter : any = new bare.createInstance(any,null,errorListener,source);
        let unit : any = getRequiredInput(GenerateHintsTask.RESOLVED_UNIT_INPUT);
        let usedImportedElementsList : core.DartList<any> = getRequiredInput(GenerateHintsTask.USED_IMPORTED_ELEMENTS_INPUT);
        let usedLocalElementsList : core.DartList<any> = getRequiredInput(GenerateHintsTask.USED_LOCAL_ELEMENTS_INPUT);
        let unitElement : any = unit.element;
        let libraryElement : any = unitElement.library;
        let typeSystem : any = context.typeSystem;
        unit.accept(new bare.createInstance(any,null,errorReporter,{
            typeSystem : typeSystem}));
        {
            let verifier : any = new bare.createInstance(any,null);
            verifier.addImports(unit);
            usedImportedElementsList.forEach(verifier.removeUsedElements);
            verifier.generateDuplicateImportHints(errorReporter);
            verifier.generateUnusedImportHints(errorReporter);
            verifier.generateUnusedShownNameHints(errorReporter);
        }
        {
            let usedElements : any = new bare.createInstance(any,null,usedLocalElementsList);
            let visitor : any = new bare.createInstance(any,null,errorListener,usedElements);
            unitElement.accept(visitor);
        }
        if (analysisOptions.dart2jsHint) {
            unit.accept(new bare.createInstance(any,null,errorReporter));
        }
        let inheritanceManager : any = new bare.createInstance(any,null,libraryElement,{
            includeAbstractFromSuperclasses : true});
        let typeProvider : any = getRequiredInput(GenerateHintsTask.TYPE_PROVIDER_INPUT);
        unit.accept(new bare.createInstance(any,null,errorReporter,typeProvider,libraryElement,inheritanceManager,{
            typeSystem : typeSystem}));
        unit.accept(new bare.createInstance(any,null,errorReporter,inheritanceManager));
        new bare.createInstance(any,null,errorReporter).findIn(unit);
        op(Op.INDEX_ASSIGN,outputs,properties.HINTS,errorListener.errors);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        let libSource : any = unit.library;
        return new core.DartMap.literal([
            [GenerateHintsTask.RESOLVED_UNIT_INPUT,RESOLVED_UNIT.of(unit)],
            [GenerateHintsTask.USED_LOCAL_ELEMENTS_INPUT,properties.LIBRARY_SPECIFIC_UNITS.of(libSource).toListOf(properties.USED_LOCAL_ELEMENTS)],
            [GenerateHintsTask.USED_IMPORTED_ELEMENTS_INPUT,properties.LIBRARY_SPECIFIC_UNITS.of(libSource).toListOf(properties.USED_IMPORTED_ELEMENTS)],
            [GenerateHintsTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : GenerateHintsTask {
        return new GenerateHintsTask(context,target);
    }
}

export namespace GenerateLintsTask {
    export type Constructors = 'GenerateLintsTask';
    export type Interface = Omit<GenerateLintsTask, Constructors>;
}
@DartClass
export class GenerateLintsTask extends any {
    private static __$RESOLVED_UNIT_INPUT : string;
    static get RESOLVED_UNIT_INPUT() : string { 
        if (this.__$RESOLVED_UNIT_INPUT===undefined) {
            this.__$RESOLVED_UNIT_INPUT = 'RESOLVED_UNIT';
        }
        return this.__$RESOLVED_UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'GenerateLintsTask',GenerateLintsTask.createTask.bind(this),GenerateLintsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LINTS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    GenerateLintsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return GenerateLintsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let analysisOptions : any = context.analysisOptions;
        if (!analysisOptions.lint) {
            op(Op.INDEX_ASSIGN,outputs,properties.LINTS,AnalysisError.NO_ERRORS);
            return;
        }
        let errorListener : any = new bare.createInstance(any,null);
        let source : any = getRequiredSource();
        let errorReporter : any = new bare.createInstance(any,null,errorListener,source);
        let unit : any = getRequiredInput(GenerateLintsTask.RESOLVED_UNIT_INPUT);
        let visitors : core.DartList<any> = new core.DartList.literal<any>();
        let timeVisits : boolean = analysisOptions.enableTiming;
        let linters : core.DartList<any> = getLints(context);
        let length : number = linters.length;
        for(let i : number = 0; i < length; i++){
            let linter : any = linters[i];
            let visitor : any = linter.getVisitor();
            if (visitor != null) {
                linter.reporter = errorReporter;
                if (timeVisits) {
                    visitor = new bare.createInstance(any,null,visitor,lintRegistry.getTimer(linter));
                }
                visitors.add(visitor);
            }
        }
        let visitor : any = new bare.createInstance(any,null,visitors,ExceptionHandlingDelegatingAstVisitor.logException);
        unit.accept(visitor);
        op(Op.INDEX_ASSIGN,outputs,properties.LINTS,errorListener.errors);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
            [GenerateLintsTask.RESOLVED_UNIT_INPUT,RESOLVED_UNIT.of(target)]]);
    }
    static createTask(context : any,target : any) : GenerateLintsTask {
        return new GenerateLintsTask(context,target);
    }
}

export namespace IgnoreInfo {
    export type Constructors = 'IgnoreInfo';
    export type Interface = Omit<IgnoreInfo, Constructors>;
}
@DartClass
export class IgnoreInfo {
    private static __$_EMPTY_INFO : IgnoreInfo;
    static get _EMPTY_INFO() : IgnoreInfo { 
        if (this.__$_EMPTY_INFO===undefined) {
            this.__$_EMPTY_INFO = new IgnoreInfo();
        }
        return this.__$_EMPTY_INFO;
    }
    static set _EMPTY_INFO(__$value : IgnoreInfo)  { 
        this.__$_EMPTY_INFO = __$value;
    }

    private static __$_IGNORE_MATCHER : core.DartRegExp;
    static get _IGNORE_MATCHER() : core.DartRegExp { 
        if (this.__$_IGNORE_MATCHER===undefined) {
            this.__$_IGNORE_MATCHER = new core.DartRegExp('//[ ]*ignore:(.*)$',{
                multiLine : true});
        }
        return this.__$_IGNORE_MATCHER;
    }
    static set _IGNORE_MATCHER(__$value : core.DartRegExp)  { 
        this.__$_IGNORE_MATCHER = __$value;
    }

    private static __$_IGNORE_FOR_FILE_MATCHER : core.DartRegExp;
    static get _IGNORE_FOR_FILE_MATCHER() : core.DartRegExp { 
        if (this.__$_IGNORE_FOR_FILE_MATCHER===undefined) {
            this.__$_IGNORE_FOR_FILE_MATCHER = new core.DartRegExp('//[ ]*ignore_for_file:(.*)$',{
                multiLine : true});
        }
        return this.__$_IGNORE_FOR_FILE_MATCHER;
    }
    static set _IGNORE_FOR_FILE_MATCHER(__$value : core.DartRegExp)  { 
        this.__$_IGNORE_FOR_FILE_MATCHER = __$value;
    }

    _ignoreMap : core.DartMap<number,core.DartList<string>>;

    _ignoreForFileSet : core.DartSet<string>;

    get hasIgnores() : boolean {
        return this.ignores.isNotEmpty || this._ignoreForFileSet.isNotEmpty;
    }
    get ignores() : core.DartMap<number,core.DartIterable<string>> {
        return this._ignoreMap;
    }
    get ignoreForFiles() : core.DartIterable<string> {
        return this._ignoreForFileSet;
    }
    add(line : number,errorCode : string) : void {
        this._ignoreMap.putIfAbsent(line,() =>  {
            return new core.DartList<string>();
        }).add(errorCode);
    }
    addAll(line : number,errorCodes : core.DartIterable<string>) : void {
        this._ignoreMap.putIfAbsent(line,() =>  {
            return new core.DartList<string>();
        }).addAll(errorCodes);
    }
    addAllForFile(errorCodes : core.DartIterable<string>) : void {
        this._ignoreForFileSet.addAll(errorCodes);
    }
    ignoredAt(errorCode : string,line : number) : boolean {
        return this._ignoreForFileSet.contains(errorCode) || ((_501_)=>(!!_501_)?_501_.contains(errorCode):null)(this._ignoreMap.get(line)) == true;
    }
    static calculateIgnores(content : string,info : any) : IgnoreInfo {
        let matches : core.DartIterable<core.DartMatch> = IgnoreInfo._IGNORE_MATCHER.allMatches(content);
        let fileMatches : core.DartIterable<core.DartMatch> = IgnoreInfo._IGNORE_FOR_FILE_MATCHER.allMatches(content);
        if (matches.isEmpty && fileMatches.isEmpty) {
            return IgnoreInfo._EMPTY_INFO;
        }
        let ignoreInfo : IgnoreInfo = new IgnoreInfo();
        for(let match of matches) {
            let codes : core.DartIterable<string> = new core.DartString(match.group(1)).split(',').map((code : string) =>  {
                return new core.DartString(new core.DartString(code).trim()).toLowerCase();
            });
            ignoreInfo.addAll(info.getLocation(match.start).lineNumber,codes);
        }
        for(let match of fileMatches) {
            let codes : core.DartIterable<string> = new core.DartString(match.group(1)).split(',').map((code : string) =>  {
                return new core.DartString(new core.DartString(code).trim()).toLowerCase();
            });
            ignoreInfo.addAllForFile(codes);
        }
        return ignoreInfo;
    }
    constructor() {
    }
    @defaultConstructor
    IgnoreInfo() {
        this._ignoreMap = new core.DartHashMap<number,core.DartList<string>>();
        this._ignoreForFileSet = new core.DartHashSet<string>();
    }
}

export namespace InferInstanceMembersInUnitTask {
    export type Constructors = 'InferInstanceMembersInUnitTask';
    export type Interface = Omit<InferInstanceMembersInUnitTask, Constructors>;
}
@DartClass
export class InferInstanceMembersInUnitTask extends any {
    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'InferInstanceMembersInUnitTask',InferInstanceMembersInUnitTask.createTask.bind(this),InferInstanceMembersInUnitTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CREATED_RESOLVED_UNIT10,properties.RESOLVED_UNIT10));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,unit : any) {
    }
    @defaultConstructor
    InferInstanceMembersInUnitTask(context : any,unit : any) {
        super.DartObject(context,unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return InferInstanceMembersInUnitTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let unit : any = getRequiredInput(InferInstanceMembersInUnitTask.UNIT_INPUT);
        let typeProvider : any = getRequiredInput(InferInstanceMembersInUnitTask.TYPE_PROVIDER_INPUT);
        let fieldsWithDisabledInference : core.DartSet<any> = new core.DartSet<any>();
        for(let classDeclaration of unit.declarations) {
            if (is(classDeclaration, any)) {
                for(let fieldDeclaration of classDeclaration.members) {
                    if (is(fieldDeclaration, any)) {
                        if (!fieldDeclaration.isStatic) {
                            for(let field of fieldDeclaration.fields.variables) {
                                let initializer : any = field.initializer;
                                if (initializer != null && !isValidForTypeInference(initializer)) {
                                    fieldsWithDisabledInference.add(field.element);
                                }
                            }
                        }
                    }
                }
            }
        }
        if (context.analysisOptions.strongMode) {
            let inheritanceManager = new bare.createInstance(any,null,resolutionMap.elementDeclaredByCompilationUnit(unit).library);
            let inferrer : any = new bare.createInstance(any,null,typeProvider,(_ : any) =>  {
                return inheritanceManager;
            },fieldsWithDisabledInference,{
                typeSystem : context.typeSystem});
            inferrer.inferCompilationUnit(unit.element);
        }
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT10,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT10,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [InferInstanceMembersInUnitTask.UNIT_INPUT,properties.RESOLVED_UNIT9.of(unit)],
            [InferInstanceMembersInUnitTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)],
            ['orderLibraryCycleTasks',properties.LIBRARY_CYCLE_UNITS.of(unit.library).toListOf(properties.CREATED_RESOLVED_UNIT9)],
            ['orderLibraryCycles',properties.LIBRARY_CYCLE_DEPENDENCIES.of(unit.library).toListOf(properties.CREATED_RESOLVED_UNIT10)]]);
    }
    static createTask(context : any,target : any) : InferInstanceMembersInUnitTask {
        return new InferInstanceMembersInUnitTask(context,target);
    }
}

export namespace _ExportSourceClosureTaskInput {
    export type Constructors = '_ExportSourceClosureTaskInput';
    export type Interface = Omit<_ExportSourceClosureTaskInput, Constructors>;
}
@DartClass
export class _ExportSourceClosureTaskInput extends any {
    target : any;

    resultDescriptor : any;

    constructor(target : any,resultDescriptor : any) {
    }
    @defaultConstructor
    _ExportSourceClosureTaskInput(target : any,resultDescriptor : any) {
        this.target = target;
        this.resultDescriptor = resultDescriptor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBuilder() : any {
        return new _SourceClosureTaskInputBuilder(this.target,_SourceClosureKind.EXPORT,this.resultDescriptor);
    }
}

export namespace InferStaticVariableTypesInUnitTask {
    export type Constructors = 'InferStaticVariableTypesInUnitTask';
    export type Interface = Omit<InferStaticVariableTypesInUnitTask, Constructors>;
}
@DartClass
export class InferStaticVariableTypesInUnitTask extends any {
    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$ERRORS_LIST_INPUT : string;
    static get ERRORS_LIST_INPUT() : string { 
        if (this.__$ERRORS_LIST_INPUT===undefined) {
            this.__$ERRORS_LIST_INPUT = 'INFERRED_VARIABLES_INPUT';
        }
        return this.__$ERRORS_LIST_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'InferStaticVariableTypesInUnitTask',InferStaticVariableTypesInUnitTask.createTask.bind(this),InferStaticVariableTypesInUnitTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CREATED_RESOLVED_UNIT8,properties.RESOLVED_UNIT8,properties.STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,unit : any) {
    }
    @defaultConstructor
    InferStaticVariableTypesInUnitTask(context : any,unit : any) {
        super.DartObject(context,unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return InferStaticVariableTypesInUnitTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let unit : any = getRequiredInput(InferStaticVariableTypesInUnitTask.UNIT_INPUT);
        let errorLists : core.DartList<core.DartList<any>> = getRequiredInput(InferStaticVariableTypesInUnitTask.ERRORS_LIST_INPUT);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT8,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT8,true);
        op(Op.INDEX_ASSIGN,outputs,properties.STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT,AnalysisError.mergeLists(errorLists));
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            ['inferredTypes',properties.INFERABLE_STATIC_VARIABLES_IN_UNIT.of(unit).toListOf(properties.INFERRED_STATIC_VARIABLE)],
            [InferStaticVariableTypesInUnitTask.ERRORS_LIST_INPUT,properties.INFERABLE_STATIC_VARIABLES_IN_UNIT.of(unit).toListOf(properties.STATIC_VARIABLE_RESOLUTION_ERRORS)],
            [InferStaticVariableTypesInUnitTask.UNIT_INPUT,properties.RESOLVED_UNIT7.of(unit)]]);
    }
    static createTask(context : any,target : any) : InferStaticVariableTypesInUnitTask {
        return new InferStaticVariableTypesInUnitTask(context,target);
    }
}

export namespace VerifyUnitTask {
    export type Constructors = 'VerifyUnitTask';
    export type Interface = Omit<VerifyUnitTask, Constructors>;
}
@DartClass
export class VerifyUnitTask extends any {
    private static __$PENDING_ERRORS_INPUT : string;
    static get PENDING_ERRORS_INPUT() : string { 
        if (this.__$PENDING_ERRORS_INPUT===undefined) {
            this.__$PENDING_ERRORS_INPUT = 'PENDING_ERRORS_INPUT';
        }
        return this.__$PENDING_ERRORS_INPUT;
    }

    private static __$REFERENCED_SOURCE_MODIFICATION_TIME_MAP_INPUT : string;
    static get REFERENCED_SOURCE_MODIFICATION_TIME_MAP_INPUT() : string { 
        if (this.__$REFERENCED_SOURCE_MODIFICATION_TIME_MAP_INPUT===undefined) {
            this.__$REFERENCED_SOURCE_MODIFICATION_TIME_MAP_INPUT = 'REFERENCED_SOURCE_MODIFICATION_TIME_MAP_INPUT';
        }
        return this.__$REFERENCED_SOURCE_MODIFICATION_TIME_MAP_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'VerifyUnitTask',VerifyUnitTask.createTask.bind(this),VerifyUnitTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.VERIFY_ERRORS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    errorReporter : any;

    sourceTimeMap : core.DartMap<any,number>;

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    VerifyUnitTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return VerifyUnitTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let errorListener : any = new bare.createInstance(any,null);
        let source : any = getRequiredSource();
        this.errorReporter = new bare.createInstance(any,null,errorListener,source);
        let unit : any = getRequiredInput(VerifyUnitTask.UNIT_INPUT);
        let unitElement : any = unit.element;
        let libraryElement : any = unitElement.library;
        if (op(Op.EQUALS,libraryElement,null)) {
            throw new bare.createInstance(any,null,'VerifyUnitTask verifying a unit with no library: ' + `${unitElement.source.fullName}`);
        }
        let pendingErrors : core.DartList<any> = getRequiredInput(VerifyUnitTask.PENDING_ERRORS_INPUT);
        this.sourceTimeMap = getRequiredInput(VerifyUnitTask.REFERENCED_SOURCE_MODIFICATION_TIME_MAP_INPUT);
        let typeProvider : any = getRequiredInput(VerifyUnitTask.TYPE_PROVIDER_INPUT);
        this.validateDirectives(unit);
        let constantVerifier : any = new bare.createInstance(any,null,this.errorReporter,libraryElement,typeProvider,context.declaredVariables);
        unit.accept(constantVerifier);
        let errorVerifier : any = new bare.createInstance(any,null,this.errorReporter,libraryElement,typeProvider,new bare.createInstance(any,null,libraryElement),context.analysisOptions.enableSuperMixins);
        unit.accept(errorVerifier);
        for(let pendingError of pendingErrors) {
            errorListener.onError(pendingError.toAnalysisError());
        }
        op(Op.INDEX_ASSIGN,outputs,properties.VERIFY_ERRORS,getUniqueErrors(errorListener.errors));
    }
    validateDirectives(unit : any) : void {
        let directives : any = unit.directives;
        let length : number = directives.length;
        for(let i : number = 0; i < length; i++){
            let directive : any = op(Op.INDEX,directives,i);
            if (is(directive, any)) {
                this.validateReferencedSource(directive);
            }
        }
    }
    validateReferencedSource(directive : any) : void {
        if (is(directive, any)) {
            for(let configuration of directive.configurations) {
                let source : any = configuration.uriSource;
                let uriLiteral : any = configuration.uri;
                let uriContent : string = ((_502_)=>(!!_502_)?_502_.trim():null)(((t)=>(!!t)?t.stringValue:null)(uriLiteral));
                if (source != null) {
                    let modificationTime : number = (this.sourceTimeMap.get(source) || -1);
                    if (modificationTime >= 0) {
                        continue;
                    }
                }else {
                    if (UriBasedDirectiveImpl.validateUri(is(directive, any),uriLiteral,uriContent) != null) {
                        continue;
                    }
                }
                let errorCode : any = CompileTimeErrorCode.URI_DOES_NOT_EXIST;
                if (this._isGenerated(source)) {
                    errorCode = CompileTimeErrorCode.URI_HAS_NOT_BEEN_GENERATED;
                }
                this.errorReporter.reportErrorForNode(errorCode,uriLiteral,new core.DartList.literal(uriContent));
            }
        }
        let source : any = directive.uriSource;
        if (source != null) {
            let modificationTime : number = (this.sourceTimeMap.get(source) || -1);
            if (modificationTime >= 0) {
                return;
            }
        }else {
            if (directive.validate() != null) {
                return;
            }
        }
        let uriLiteral : any = directive.uri;
        let errorCode : any = CompileTimeErrorCode.URI_DOES_NOT_EXIST;
        if (this._isGenerated(source)) {
            errorCode = CompileTimeErrorCode.URI_HAS_NOT_BEEN_GENERATED;
        }
        this.errorReporter.reportErrorForNode(errorCode,uriLiteral,new core.DartList.literal(directive.uriContent));
    }
    _isGenerated(source : any) : boolean {
        if (op(Op.EQUALS,source,null)) {
            return false;
        }
        let suffixes : core.DartList<string> = new core.DartList.literal<string>('.g.dart','.pb.dart','.pbenum.dart','.pbserver.dart','.pbjson.dart','.template.dart');
        let fullName : string = source.fullName;
        for(let suffix of suffixes) {
            if (new core.DartString(fullName).endsWith(suffix)) {
                return true;
            }
        }
        return false;
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            ['thisLibraryClosureIsReady',properties.READY_RESOLVED_UNIT.of(unit.library)],
            [VerifyUnitTask.UNIT_INPUT,RESOLVED_UNIT.of(unit)],
            [VerifyUnitTask.REFERENCED_SOURCE_MODIFICATION_TIME_MAP_INPUT,properties.REFERENCED_SOURCES.of(unit.library).toMapOf(MODIFICATION_TIME)],
            [VerifyUnitTask.PENDING_ERRORS_INPUT,properties.PENDING_ERRORS.of(unit)],
            ['requiredConstants',properties.REQUIRED_CONSTANTS.of(unit).toListOf(properties.CONSTANT_VALUE)],
            [VerifyUnitTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : VerifyUnitTask {
        return new VerifyUnitTask(context,target);
    }
}

export namespace LibraryErrorsReadyTask {
    export type Constructors = 'LibraryErrorsReadyTask';
    export type Interface = Omit<LibraryErrorsReadyTask, Constructors>;
}
@DartClass
export class LibraryErrorsReadyTask extends any {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'LibraryErrorsReadyTask',LibraryErrorsReadyTask.createTask.bind(this),LibraryErrorsReadyTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ERRORS_READY));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    LibraryErrorsReadyTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return LibraryErrorsReadyTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ERRORS_READY,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            ['allErrors',UNITS.of(source).toListOf(DART_ERRORS)],
            ['libraryElement',LIBRARY_ELEMENT.of(source)]]);
    }
    static createTask(context : any,target : any) : LibraryErrorsReadyTask {
        return new LibraryErrorsReadyTask(context,target);
    }
}

export namespace LibraryUnitErrorsTask {
    export type Constructors = 'LibraryUnitErrorsTask';
    export type Interface = Omit<LibraryUnitErrorsTask, Constructors>;
}
@DartClass
export class LibraryUnitErrorsTask extends any {
    private static __$BUILD_DIRECTIVES_ERRORS_INPUT : string;
    static get BUILD_DIRECTIVES_ERRORS_INPUT() : string { 
        if (this.__$BUILD_DIRECTIVES_ERRORS_INPUT===undefined) {
            this.__$BUILD_DIRECTIVES_ERRORS_INPUT = 'BUILD_DIRECTIVES_ERRORS';
        }
        return this.__$BUILD_DIRECTIVES_ERRORS_INPUT;
    }

    private static __$BUILD_LIBRARY_ERRORS_INPUT : string;
    static get BUILD_LIBRARY_ERRORS_INPUT() : string { 
        if (this.__$BUILD_LIBRARY_ERRORS_INPUT===undefined) {
            this.__$BUILD_LIBRARY_ERRORS_INPUT = 'BUILD_LIBRARY_ERRORS';
        }
        return this.__$BUILD_LIBRARY_ERRORS_INPUT;
    }

    private static __$HINTS_INPUT : string;
    static get HINTS_INPUT() : string { 
        if (this.__$HINTS_INPUT===undefined) {
            this.__$HINTS_INPUT = 'HINTS';
        }
        return this.__$HINTS_INPUT;
    }

    private static __$LINTS_INPUT : string;
    static get LINTS_INPUT() : string { 
        if (this.__$LINTS_INPUT===undefined) {
            this.__$LINTS_INPUT = 'LINTS';
        }
        return this.__$LINTS_INPUT;
    }

    private static __$STATIC_VARIABLE_RESOLUTION_ERRORS_INPUT : string;
    static get STATIC_VARIABLE_RESOLUTION_ERRORS_INPUT() : string { 
        if (this.__$STATIC_VARIABLE_RESOLUTION_ERRORS_INPUT===undefined) {
            this.__$STATIC_VARIABLE_RESOLUTION_ERRORS_INPUT = 'STATIC_VARIABLE_RESOLUTION_ERRORS_INPUT';
        }
        return this.__$STATIC_VARIABLE_RESOLUTION_ERRORS_INPUT;
    }

    private static __$RESOLVE_DIRECTIVES_ERRORS_INPUT : string;
    static get RESOLVE_DIRECTIVES_ERRORS_INPUT() : string { 
        if (this.__$RESOLVE_DIRECTIVES_ERRORS_INPUT===undefined) {
            this.__$RESOLVE_DIRECTIVES_ERRORS_INPUT = 'RESOLVE_DIRECTIVES_ERRORS';
        }
        return this.__$RESOLVE_DIRECTIVES_ERRORS_INPUT;
    }

    private static __$STRONG_MODE_ERRORS_INPUT : string;
    static get STRONG_MODE_ERRORS_INPUT() : string { 
        if (this.__$STRONG_MODE_ERRORS_INPUT===undefined) {
            this.__$STRONG_MODE_ERRORS_INPUT = 'STRONG_MODE_ERRORS';
        }
        return this.__$STRONG_MODE_ERRORS_INPUT;
    }

    private static __$RESOLVE_TYPE_NAMES_ERRORS_INPUT : string;
    static get RESOLVE_TYPE_NAMES_ERRORS_INPUT() : string { 
        if (this.__$RESOLVE_TYPE_NAMES_ERRORS_INPUT===undefined) {
            this.__$RESOLVE_TYPE_NAMES_ERRORS_INPUT = 'RESOLVE_TYPE_NAMES_ERRORS';
        }
        return this.__$RESOLVE_TYPE_NAMES_ERRORS_INPUT;
    }

    private static __$RESOLVE_TYPE_NAMES_ERRORS2_INPUT : string;
    static get RESOLVE_TYPE_NAMES_ERRORS2_INPUT() : string { 
        if (this.__$RESOLVE_TYPE_NAMES_ERRORS2_INPUT===undefined) {
            this.__$RESOLVE_TYPE_NAMES_ERRORS2_INPUT = 'RESOLVE_TYPE_NAMES_ERRORS2';
        }
        return this.__$RESOLVE_TYPE_NAMES_ERRORS2_INPUT;
    }

    private static __$RESOLVE_UNIT_ERRORS_INPUT : string;
    static get RESOLVE_UNIT_ERRORS_INPUT() : string { 
        if (this.__$RESOLVE_UNIT_ERRORS_INPUT===undefined) {
            this.__$RESOLVE_UNIT_ERRORS_INPUT = 'RESOLVE_UNIT_ERRORS';
        }
        return this.__$RESOLVE_UNIT_ERRORS_INPUT;
    }

    private static __$VARIABLE_REFERENCE_ERRORS_INPUT : string;
    static get VARIABLE_REFERENCE_ERRORS_INPUT() : string { 
        if (this.__$VARIABLE_REFERENCE_ERRORS_INPUT===undefined) {
            this.__$VARIABLE_REFERENCE_ERRORS_INPUT = 'VARIABLE_REFERENCE_ERRORS';
        }
        return this.__$VARIABLE_REFERENCE_ERRORS_INPUT;
    }

    private static __$VERIFY_ERRORS_INPUT : string;
    static get VERIFY_ERRORS_INPUT() : string { 
        if (this.__$VERIFY_ERRORS_INPUT===undefined) {
            this.__$VERIFY_ERRORS_INPUT = 'VERIFY_ERRORS';
        }
        return this.__$VERIFY_ERRORS_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'LibraryUnitErrorsTask',LibraryUnitErrorsTask.createTask.bind(this),LibraryUnitErrorsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_UNIT_ERRORS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    LibraryUnitErrorsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return LibraryUnitErrorsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let errorLists : core.DartList<core.DartList<any>> = new core.DartList.literal<core.DartList<any>>();
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.BUILD_DIRECTIVES_ERRORS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.BUILD_LIBRARY_ERRORS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.HINTS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.LINTS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.RESOLVE_DIRECTIVES_ERRORS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.RESOLVE_TYPE_NAMES_ERRORS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.RESOLVE_TYPE_NAMES_ERRORS2_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.RESOLVE_UNIT_ERRORS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.STATIC_VARIABLE_RESOLUTION_ERRORS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.STRONG_MODE_ERRORS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.VARIABLE_REFERENCE_ERRORS_INPUT));
        errorLists.add(getRequiredInput(LibraryUnitErrorsTask.VERIFY_ERRORS_INPUT));
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_UNIT_ERRORS,AnalysisError.mergeLists(errorLists));
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        let inputs : core.DartMap<string,any> = new core.DartMap.literal([
            [LibraryUnitErrorsTask.HINTS_INPUT,properties.HINTS.of(unit)],
            [LibraryUnitErrorsTask.LINTS_INPUT,properties.LINTS.of(unit)],
            [LibraryUnitErrorsTask.RESOLVE_DIRECTIVES_ERRORS_INPUT,properties.RESOLVE_DIRECTIVES_ERRORS.of(unit)],
            [LibraryUnitErrorsTask.RESOLVE_TYPE_NAMES_ERRORS_INPUT,properties.RESOLVE_TYPE_NAMES_ERRORS.of(unit)],
            [LibraryUnitErrorsTask.RESOLVE_TYPE_NAMES_ERRORS2_INPUT,properties.RESOLVE_TYPE_BOUNDS_ERRORS.of(unit)],
            [LibraryUnitErrorsTask.RESOLVE_UNIT_ERRORS_INPUT,properties.RESOLVE_UNIT_ERRORS.of(unit)],
            [LibraryUnitErrorsTask.STATIC_VARIABLE_RESOLUTION_ERRORS_INPUT,properties.STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT.of(unit)],
            [LibraryUnitErrorsTask.STRONG_MODE_ERRORS_INPUT,properties.STRONG_MODE_ERRORS.of(unit)],
            [LibraryUnitErrorsTask.VARIABLE_REFERENCE_ERRORS_INPUT,properties.VARIABLE_REFERENCE_ERRORS.of(unit)],
            [LibraryUnitErrorsTask.VERIFY_ERRORS_INPUT,properties.VERIFY_ERRORS.of(unit)]]);
        let source : any = unit.source;
        if (op(Op.EQUALS,unit.library,source)) {
            inputs.set(LibraryUnitErrorsTask.BUILD_DIRECTIVES_ERRORS_INPUT,properties.BUILD_DIRECTIVES_ERRORS.of(source));
            inputs.set(LibraryUnitErrorsTask.BUILD_LIBRARY_ERRORS_INPUT,properties.BUILD_LIBRARY_ERRORS.of(source));
        }else {
            inputs.set(LibraryUnitErrorsTask.BUILD_DIRECTIVES_ERRORS_INPUT,new bare.createInstance(any,null,AnalysisError.NO_ERRORS));
            inputs.set(LibraryUnitErrorsTask.BUILD_LIBRARY_ERRORS_INPUT,new bare.createInstance(any,null,AnalysisError.NO_ERRORS));
        }
        return inputs;
    }
    static createTask(context : any,target : any) : LibraryUnitErrorsTask {
        return new LibraryUnitErrorsTask(context,target);
    }
}

export namespace ParseDartTask {
    export type Constructors = 'ParseDartTask';
    export type Interface = Omit<ParseDartTask, Constructors>;
}
@DartClass
export class ParseDartTask extends any {
    private static __$LINE_INFO_INPUT_NAME : string;
    static get LINE_INFO_INPUT_NAME() : string { 
        if (this.__$LINE_INFO_INPUT_NAME===undefined) {
            this.__$LINE_INFO_INPUT_NAME = 'LINE_INFO_INPUT_NAME';
        }
        return this.__$LINE_INFO_INPUT_NAME;
    }

    private static __$MODIFICATION_TIME_INPUT_NAME : string;
    static get MODIFICATION_TIME_INPUT_NAME() : string { 
        if (this.__$MODIFICATION_TIME_INPUT_NAME===undefined) {
            this.__$MODIFICATION_TIME_INPUT_NAME = 'MODIFICATION_TIME_INPUT_NAME';
        }
        return this.__$MODIFICATION_TIME_INPUT_NAME;
    }

    private static __$TOKEN_STREAM_INPUT_NAME : string;
    static get TOKEN_STREAM_INPUT_NAME() : string { 
        if (this.__$TOKEN_STREAM_INPUT_NAME===undefined) {
            this.__$TOKEN_STREAM_INPUT_NAME = 'TOKEN_STREAM_INPUT_NAME';
        }
        return this.__$TOKEN_STREAM_INPUT_NAME;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ParseDartTask',ParseDartTask.createTask.bind(this),ParseDartTask.buildInputs.bind(this),new core.DartList.literal<any>(EXPLICITLY_IMPORTED_LIBRARIES,EXPORTED_LIBRARIES,IMPORTED_LIBRARIES,INCLUDED_PARTS,properties.LIBRARY_SPECIFIC_UNITS,properties.PARSE_ERRORS,PARSED_UNIT,properties.REFERENCED_SOURCES,SOURCE_KIND,UNITS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    _source : any;

    _errorReporter : any;

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ParseDartTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ParseDartTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        this._source = getRequiredSource();
        let lineInfo : any = getRequiredInput(ParseDartTask.LINE_INFO_INPUT_NAME);
        let modificationTime : number = getRequiredInput(ParseDartTask.MODIFICATION_TIME_INPUT_NAME);
        let tokenStream : any = getRequiredInput(ParseDartTask.TOKEN_STREAM_INPUT_NAME);
        let errorListener : any = new bare.createInstance(any,null);
        this._errorReporter = new bare.createInstance(any,null,errorListener,this._source);
        let parser : any = new bare.createInstance(any,null,this._source,errorListener);
        let options : any = context.analysisOptions;
        parser.enableAssertInitializer = options.enableAssertInitializer;
        parser.parseFunctionBodies = options.analyzeFunctionBodiesPredicate(this._source);
        parser.parseGenericMethodComments = options.strongMode;
        parser.enableUriInPartOf = options.enableUriInPartOf;
        let unit : any = parser.parseCompilationUnit(tokenStream);
        unit.lineInfo = lineInfo;
        if (options.patchPaths.isNotEmpty && op(Op.EQUALS,this._source.uri.scheme,'dart')) {
            let resourceProvider = (context.sourceFactory.dartSdk as any).resourceProvider;
            new bare.createInstance(any,null).patch(resourceProvider,context.analysisOptions.strongMode,context.analysisOptions.patchPaths,errorListener,this._source,unit);
        }
        let hasNonPartOfDirective : boolean = false;
        let hasPartOfDirective : boolean = false;
        let explicitlyImportedSourceSet : core.DartHashSet<any> = new core.DartHashSet<any>();
        let exportedSourceSet : core.DartHashSet<any> = new core.DartHashSet<any>();
        let includedSourceSet : core.DartHashSet<any> = new core.DartHashSet<any>();
        let directives : any = unit.directives;
        let length : number = directives.length;
        for(let i : number = 0; i < length; i++){
            let directive : any = op(Op.INDEX,directives,i);
            if (is(directive, any)) {
                hasPartOfDirective = true;
            }else {
                hasNonPartOfDirective = true;
                if (is(directive, any)) {
                    let referencedSource : any = this._resolveDirective(directive);
                    if (referencedSource != null) {
                        if (is(directive, any)) {
                            exportedSourceSet.add(referencedSource);
                        }else if (is(directive, any)) {
                            explicitlyImportedSourceSet.add(referencedSource);
                        }else if (is(directive, any)) {
                            includedSourceSet.add(referencedSource);
                        }else {
                            throw new bare.createInstance(any,null,`${this.runtimeType} failed to handle a ${directive.runtimeType}`);
                        }
                    }
                }
            }
        }
        let importedSourceSet : core.DartHashSet<any> = new core.DartHashSet.from(explicitlyImportedSourceSet);
        let coreLibrarySource : any = context.sourceFactory.forUri(DartSdk.DART_CORE);
        if (op(Op.EQUALS,coreLibrarySource,null)) {
            let message : string;
            let sdk : any = context.sourceFactory.dartSdk;
            if (op(Op.EQUALS,sdk,null)) {
                message = 'Could not resolve "dart:core": SDK not defined';
            }else {
                message = 'Could not resolve "dart:core": SDK incorrectly configured';
            }
            throw new bare.createInstance(any,null,message);
        }
        importedSourceSet.add(coreLibrarySource);
        let sourceKind : any = SourceKind.LIBRARY;
        if (modificationTime == -1) {
            sourceKind = SourceKind.UNKNOWN;
        }else if (hasPartOfDirective && !hasNonPartOfDirective) {
            sourceKind = SourceKind.PART;
        }
        let explicitlyImportedSources : core.DartList<any> = explicitlyImportedSourceSet.toList();
        let exportedSources : core.DartList<any> = exportedSourceSet.toList();
        let importedSources : core.DartList<any> = importedSourceSet.toList();
        let includedSources : core.DartList<any> = includedSourceSet.toList();
        let unitSources : core.DartList<any> = ((_) : core.DartList<any> =>  {
            {
                _.addAll(includedSourceSet);
                return _;
            }
        })(new core.DartList.literal<any>(this._source));
        let librarySpecificUnits : core.DartList<any> = unitSources.map((s : any) =>  {
            return new bare.createInstance(any,null,this._source,s);
        }).toList();
        let referencedSources : core.DartSet<any> = new core.DartSet<any>();
        referencedSources.add(coreLibrarySource);
        referencedSources.addAll(unitSources);
        for(let directive of unit.directives) {
            if (is(directive, any)) {
                referencedSources.add(directive.uriSource);
                for(let configuration of directive.configurations) {
                    referencedSources.add(configuration.uriSource);
                }
            }
        }
        referencedSources.removeWhere((source : any) =>  {
            return op(Op.EQUALS,source,null);
        });
        let parseErrors : core.DartList<any> = getUniqueErrors(errorListener.errors);
        op(Op.INDEX_ASSIGN,outputs,EXPLICITLY_IMPORTED_LIBRARIES,explicitlyImportedSources);
        op(Op.INDEX_ASSIGN,outputs,EXPORTED_LIBRARIES,exportedSources);
        op(Op.INDEX_ASSIGN,outputs,IMPORTED_LIBRARIES,importedSources);
        op(Op.INDEX_ASSIGN,outputs,INCLUDED_PARTS,includedSources);
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_SPECIFIC_UNITS,librarySpecificUnits);
        op(Op.INDEX_ASSIGN,outputs,properties.PARSE_ERRORS,parseErrors);
        op(Op.INDEX_ASSIGN,outputs,PARSED_UNIT,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.REFERENCED_SOURCES,referencedSources.toList());
        op(Op.INDEX_ASSIGN,outputs,SOURCE_KIND,sourceKind);
        op(Op.INDEX_ASSIGN,outputs,UNITS,unitSources);
    }
    _resolveDirective(directive : any) : any {
        let isImport : boolean = is(directive, any);
        let defaultSource : any;
        {
            let uriLiteral : any = directive.uri;
            let uriContent : string = uriLiteral.stringValue;
            if (uriContent != null) {
                uriContent = new core.DartString(uriContent).trim();
                directive.uriContent = uriContent;
            }
            defaultSource = this._resolveUri(isImport,uriLiteral,uriContent);
            directive.uriSource = defaultSource;
        }
        if (is(directive, any)) {
            let configuredUriContent : string;
            let configuredSource : any;
            for(let configuration of directive.configurations) {
                let uriContent : string = configuration.uri.stringValue;
                let source : any = this._resolveUri(isImport,configuration.uri,uriContent);
                configuration.uriSource = source;
                if (op(Op.EQUALS,configuredSource,null)) {
                    let variableName : string = configuration.name.components.map((i : any) =>  {
                        return i.name;
                    }).join('.');
                    let variableValue : string = context.declaredVariables.get(variableName);
                    if (configuration.value != null && variableValue == configuration.value.stringValue || variableValue == 'true') {
                        configuredUriContent = configuration.uri.stringValue;
                        configuredSource = source;
                    }
                }
            }
            let selectedContentUri : string = (configuredUriContent || directive.uriContent);
            let selectedSource : any = (configuredSource || defaultSource);
            directive.selectedUriContent = selectedContentUri;
            directive.selectedSource = selectedSource;
            return selectedSource;
        }
        return defaultSource;
    }
    _resolveUri(isImport : boolean,uriLiteral : any,uriContent : string) : any {
        let code : any = UriBasedDirectiveImpl.validateUri(isImport,uriLiteral,uriContent);
        if (op(Op.EQUALS,code,null)) {
            try {
                lib4.Uri.parse(uriContent);
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    return null;
                }
            }
            return context.sourceFactory.resolveUri(this._source,uriContent);
        }else if (op(Op.EQUALS,code,UriValidationCode.URI_WITH_DART_EXT_SCHEME)) {
            return null;
        }else if (op(Op.EQUALS,code,UriValidationCode.URI_WITH_INTERPOLATION)) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.URI_WITH_INTERPOLATION,uriLiteral);
            return null;
        }else if (op(Op.EQUALS,code,UriValidationCode.INVALID_URI)) {
            this._errorReporter.reportErrorForNode(CompileTimeErrorCode.INVALID_URI,uriLiteral,new core.DartList.literal(uriContent));
            return null;
        }
        throw new bare.createInstance(any,null,`Failed to handle validation code: ${code}`);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
            [ParseDartTask.LINE_INFO_INPUT_NAME,LINE_INFO.of(target)],
            [ParseDartTask.MODIFICATION_TIME_INPUT_NAME,MODIFICATION_TIME.of(target)],
            [ParseDartTask.TOKEN_STREAM_INPUT_NAME,TOKEN_STREAM.of(target,{
                flushOnAccess : true})]]);
    }
    static createTask(context : any,target : any) : ParseDartTask {
        return new ParseDartTask(context,target);
    }
}

export namespace PartiallyResolveUnitReferencesTask {
    export type Constructors = 'PartiallyResolveUnitReferencesTask';
    export type Interface = Omit<PartiallyResolveUnitReferencesTask, Constructors>;
}
@DartClass
export class PartiallyResolveUnitReferencesTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'PartiallyResolveUnitReferencesTask',PartiallyResolveUnitReferencesTask.createTask.bind(this),PartiallyResolveUnitReferencesTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.INFERABLE_STATIC_VARIABLES_IN_UNIT,properties.CREATED_RESOLVED_UNIT7,properties.RESOLVED_UNIT7));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    PartiallyResolveUnitReferencesTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return PartiallyResolveUnitReferencesTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let libraryElement : any = getRequiredInput(PartiallyResolveUnitReferencesTask.LIBRARY_INPUT);
        let unit : any = getRequiredInput(PartiallyResolveUnitReferencesTask.UNIT_INPUT);
        let unitElement : any = unit.element;
        let typeProvider : any = getRequiredInput(PartiallyResolveUnitReferencesTask.TYPE_PROVIDER_INPUT);
        let visitor : any = new bare.createInstance(any,null,libraryElement,unitElement.source,typeProvider,AnalysisErrorListener.NULL_LISTENER);
        unit.accept(visitor);
        if (context.analysisOptions.strongMode) {
            op(Op.INDEX_ASSIGN,outputs,properties.INFERABLE_STATIC_VARIABLES_IN_UNIT,visitor.staticVariables);
        }else {
            op(Op.INDEX_ASSIGN,outputs,properties.INFERABLE_STATIC_VARIABLES_IN_UNIT,VariableElement.EMPTY_LIST);
        }
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT7,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT7,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            ['fullyBuiltLibraryElements',properties.READY_LIBRARY_ELEMENT6.of(unit.library)],
            [PartiallyResolveUnitReferencesTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT6.of(unit.library)],
            [PartiallyResolveUnitReferencesTask.UNIT_INPUT,properties.RESOLVED_UNIT6.of(unit)],
            [PartiallyResolveUnitReferencesTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)],
            ['orderLibraryCycles',properties.LIBRARY_CYCLE_DEPENDENCIES.of(unit.library).toListOf(properties.CREATED_RESOLVED_UNIT10)]]);
    }
    static createTask(context : any,target : any) : PartiallyResolveUnitReferencesTask {
        return new PartiallyResolveUnitReferencesTask(context,target);
    }
}

export namespace ReadyLibraryElement2Task {
    export type Constructors = 'ReadyLibraryElement2Task';
    export type Interface = Omit<ReadyLibraryElement2Task, Constructors>;
}
@DartClass
export class ReadyLibraryElement2Task extends any {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ReadyLibraryElement2Task',ReadyLibraryElement2Task.createTask.bind(this),ReadyLibraryElement2Task.buildInputs.bind(this),new core.DartList.literal<any>(properties.READY_LIBRARY_ELEMENT2));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ReadyLibraryElement2Task(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ReadyLibraryElement2Task.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get handlesDependencyCycles() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        op(Op.INDEX_ASSIGN,outputs,properties.READY_LIBRARY_ELEMENT2,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            ['thisLibraryElementReady',properties.LIBRARY_ELEMENT2.of(source)],
            ['directlyImportedLibrariesReady',IMPORTED_LIBRARIES.of(source).toListOf(properties.READY_LIBRARY_ELEMENT2)],
            ['directlyExportedLibrariesReady',EXPORTED_LIBRARIES.of(source).toListOf(properties.READY_LIBRARY_ELEMENT2)]]);
    }
    static createTask(context : any,target : any) : ReadyLibraryElement2Task {
        return new ReadyLibraryElement2Task(context,target);
    }
}

export namespace ReadyLibraryElement5Task {
    export type Constructors = 'ReadyLibraryElement5Task';
    export type Interface = Omit<ReadyLibraryElement5Task, Constructors>;
}
@DartClass
export class ReadyLibraryElement5Task extends any {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ReadyLibraryElement5Task',ReadyLibraryElement5Task.createTask.bind(this),ReadyLibraryElement5Task.buildInputs.bind(this),new core.DartList.literal<any>(properties.READY_LIBRARY_ELEMENT6));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ReadyLibraryElement5Task(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ReadyLibraryElement5Task.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get handlesDependencyCycles() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        op(Op.INDEX_ASSIGN,outputs,properties.READY_LIBRARY_ELEMENT6,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            ['thisLibraryElementReady',properties.LIBRARY_ELEMENT6.of(source)],
            ['directlyImportedLibrariesReady',IMPORTED_LIBRARIES.of(source).toListOf(properties.READY_LIBRARY_ELEMENT6)],
            ['directlyExportedLibrariesReady',EXPORTED_LIBRARIES.of(source).toListOf(properties.READY_LIBRARY_ELEMENT6)]]);
    }
    static createTask(context : any,target : any) : ReadyLibraryElement5Task {
        return new ReadyLibraryElement5Task(context,target);
    }
}

export namespace ReadyLibraryElement7Task {
    export type Constructors = 'ReadyLibraryElement7Task';
    export type Interface = Omit<ReadyLibraryElement7Task, Constructors>;
}
@DartClass
export class ReadyLibraryElement7Task extends any {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ReadyLibraryElement7Task',ReadyLibraryElement7Task.createTask.bind(this),ReadyLibraryElement7Task.buildInputs.bind(this),new core.DartList.literal<any>(properties.READY_LIBRARY_ELEMENT7));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ReadyLibraryElement7Task(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ReadyLibraryElement7Task.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get handlesDependencyCycles() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        op(Op.INDEX_ASSIGN,outputs,properties.READY_LIBRARY_ELEMENT7,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            ['thisLibraryElementReady',properties.LIBRARY_ELEMENT7.of(source)],
            ['directlyImportedLibrariesReady',IMPORTED_LIBRARIES.of(source).toListOf(properties.READY_LIBRARY_ELEMENT7)],
            ['directlyExportedLibrariesReady',EXPORTED_LIBRARIES.of(source).toListOf(properties.READY_LIBRARY_ELEMENT7)]]);
    }
    static createTask(context : any,target : any) : ReadyLibraryElement7Task {
        return new ReadyLibraryElement7Task(context,target);
    }
}

export namespace ReadyResolvedUnitTask {
    export type Constructors = 'ReadyResolvedUnitTask';
    export type Interface = Omit<ReadyResolvedUnitTask, Constructors>;
}
@DartClass
export class ReadyResolvedUnitTask extends any {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ReadyResolvedUnitTask',ReadyResolvedUnitTask.createTask.bind(this),ReadyResolvedUnitTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.READY_RESOLVED_UNIT));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ReadyResolvedUnitTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ReadyResolvedUnitTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get handlesDependencyCycles() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        op(Op.INDEX_ASSIGN,outputs,properties.READY_RESOLVED_UNIT,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            ['thisLibraryUnitsReady',properties.LIBRARY_SPECIFIC_UNITS.of(source).toListOf(RESOLVED_UNIT)]]);
    }
    static createTask(context : any,target : any) : ReadyResolvedUnitTask {
        return new ReadyResolvedUnitTask(context,target);
    }
}

export namespace StrongModeVerifyUnitTask {
    export type Constructors = 'StrongModeVerifyUnitTask';
    export type Interface = Omit<StrongModeVerifyUnitTask, Constructors>;
}
@DartClass
export class StrongModeVerifyUnitTask extends any {
    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'StrongModeVerifyUnitTask',StrongModeVerifyUnitTask.createTask.bind(this),StrongModeVerifyUnitTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.STRONG_MODE_ERRORS,properties.CREATED_RESOLVED_UNIT,RESOLVED_UNIT));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    StrongModeVerifyUnitTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return StrongModeVerifyUnitTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let errorListener : any = new bare.createInstance(any,null);
        let typeProvider : any = getRequiredInput(StrongModeVerifyUnitTask.TYPE_PROVIDER_INPUT);
        let unit : any = getRequiredInput(StrongModeVerifyUnitTask.UNIT_INPUT);
        let options : any = context.analysisOptions;
        if (options.strongMode) {
            let checker : any = new bare.createInstance(any,null,typeProvider,new bare.createInstance(any,null,typeProvider,{
                implicitCasts : options.implicitCasts,nonnullableTypes : options.nonnullableTypes}),errorListener,options);
            checker.visitCompilationUnit(unit);
        }
        op(Op.INDEX_ASSIGN,outputs,properties.STRONG_MODE_ERRORS,getUniqueErrors(errorListener.errors));
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT,true);
        op(Op.INDEX_ASSIGN,outputs,RESOLVED_UNIT,unit);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [StrongModeVerifyUnitTask.UNIT_INPUT,properties.RESOLVED_UNIT12.of(unit)],
            [StrongModeVerifyUnitTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : StrongModeVerifyUnitTask {
        return new StrongModeVerifyUnitTask(context,target);
    }
}

export namespace ResolveDirectiveElementsTask {
    export type Constructors = 'ResolveDirectiveElementsTask';
    export type Interface = Omit<ResolveDirectiveElementsTask, Constructors>;
}
@DartClass
export class ResolveDirectiveElementsTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$SOURCES_MODIFICATION_TIME_INPUT : string;
    static get SOURCES_MODIFICATION_TIME_INPUT() : string { 
        if (this.__$SOURCES_MODIFICATION_TIME_INPUT===undefined) {
            this.__$SOURCES_MODIFICATION_TIME_INPUT = 'SOURCES_MODIFICATION_TIME_INPUT';
        }
        return this.__$SOURCES_MODIFICATION_TIME_INPUT;
    }

    private static __$IMPORTS_SOURCE_KIND_INPUT : string;
    static get IMPORTS_SOURCE_KIND_INPUT() : string { 
        if (this.__$IMPORTS_SOURCE_KIND_INPUT===undefined) {
            this.__$IMPORTS_SOURCE_KIND_INPUT = 'IMPORTS_SOURCE_KIND_INPUT';
        }
        return this.__$IMPORTS_SOURCE_KIND_INPUT;
    }

    private static __$EXPORTS_SOURCE_KIND_INPUT : string;
    static get EXPORTS_SOURCE_KIND_INPUT() : string { 
        if (this.__$EXPORTS_SOURCE_KIND_INPUT===undefined) {
            this.__$EXPORTS_SOURCE_KIND_INPUT = 'EXPORTS_SOURCE_KIND_INPUT';
        }
        return this.__$EXPORTS_SOURCE_KIND_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveDirectiveElementsTask',ResolveDirectiveElementsTask.createTask.bind(this),ResolveDirectiveElementsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CREATED_RESOLVED_UNIT2,properties.RESOLVED_UNIT2,properties.RESOLVE_DIRECTIVES_ERRORS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolveDirectiveElementsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveDirectiveElementsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let targetUnit : any = target;
        let unit : any = getRequiredInput(ResolveDirectiveElementsTask.UNIT_INPUT);
        let sourceModificationTimeMap : core.DartMap<any,number> = getRequiredInput(ResolveDirectiveElementsTask.SOURCES_MODIFICATION_TIME_INPUT);
        let importSourceKindMap : core.DartMap<any,any> = getRequiredInput(ResolveDirectiveElementsTask.IMPORTS_SOURCE_KIND_INPUT);
        let exportSourceKindMap : core.DartMap<any,any> = getRequiredInput(ResolveDirectiveElementsTask.EXPORTS_SOURCE_KIND_INPUT);
        let errors : core.DartList<any> = new core.DartList.literal<any>();
        if (op(Op.EQUALS,targetUnit.unit,targetUnit.library)) {
            let resolver : any = new bare.createInstance(any,null,sourceModificationTimeMap,importSourceKindMap,exportSourceKindMap);
            unit.accept(resolver);
            errors = resolver.errors;
        }
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT2,true);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT2,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVE_DIRECTIVES_ERRORS,errors);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [ResolveDirectiveElementsTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT2.of(unit.library)],
            [ResolveDirectiveElementsTask.UNIT_INPUT,properties.RESOLVED_UNIT1.of(unit)],
            [ResolveDirectiveElementsTask.SOURCES_MODIFICATION_TIME_INPUT,properties.REFERENCED_SOURCES.of(unit.library).toMapOf(MODIFICATION_TIME)],
            [ResolveDirectiveElementsTask.IMPORTS_SOURCE_KIND_INPUT,IMPORTED_LIBRARIES.of(unit.library).toMapOf(SOURCE_KIND)],
            [ResolveDirectiveElementsTask.EXPORTS_SOURCE_KIND_INPUT,EXPORTED_LIBRARIES.of(unit.library).toMapOf(SOURCE_KIND)]]);
    }
    static createTask(context : any,target : any) : ResolveDirectiveElementsTask {
        return new ResolveDirectiveElementsTask(context,target);
    }
}

export namespace ResolvedUnit7InLibraryClosureTask {
    export type Constructors = 'ResolvedUnit7InLibraryClosureTask';
    export type Interface = Omit<ResolvedUnit7InLibraryClosureTask, Constructors>;
}
@DartClass
export class ResolvedUnit7InLibraryClosureTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolvedUnit7InLibraryClosureTask',ResolvedUnit7InLibraryClosureTask.createTask.bind(this),ResolvedUnit7InLibraryClosureTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ELEMENT8));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolvedUnit7InLibraryClosureTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolvedUnit7InLibraryClosureTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ResolvedUnit7InLibraryClosureTask.LIBRARY_INPUT);
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT8,library);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            ['readyForClosure',properties.READY_LIBRARY_ELEMENT7.of(source)],
            [ResolvedUnit7InLibraryClosureTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT7.of(source)]]);
    }
    static createTask(context : any,target : any) : ResolvedUnit7InLibraryClosureTask {
        return new ResolvedUnit7InLibraryClosureTask(context,target);
    }
}

export namespace ResolvedUnit7InLibraryTask {
    export type Constructors = 'ResolvedUnit7InLibraryTask';
    export type Interface = Omit<ResolvedUnit7InLibraryTask, Constructors>;
}
@DartClass
export class ResolvedUnit7InLibraryTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolvedUnit7InLibraryTask',ResolvedUnit7InLibraryTask.createTask.bind(this),ResolvedUnit7InLibraryTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ELEMENT7));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolvedUnit7InLibraryTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolvedUnit7InLibraryTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ResolvedUnit7InLibraryTask.LIBRARY_INPUT);
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT7,library);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            ['resolvedUnits',properties.LIBRARY_SPECIFIC_UNITS.of(source).toListOf(properties.RESOLVED_UNIT7)],
            [ResolvedUnit7InLibraryTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT6.of(source)]]);
    }
    static createTask(context : any,target : any) : ResolvedUnit7InLibraryTask {
        return new ResolvedUnit7InLibraryTask(context,target);
    }
}

export namespace ResolveInstanceFieldsInUnitTask {
    export type Constructors = 'ResolveInstanceFieldsInUnitTask';
    export type Interface = Omit<ResolveInstanceFieldsInUnitTask, Constructors>;
}
@DartClass
export class ResolveInstanceFieldsInUnitTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveInstanceFieldsInUnitTask',ResolveInstanceFieldsInUnitTask.createTask.bind(this),ResolveInstanceFieldsInUnitTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CREATED_RESOLVED_UNIT9,properties.RESOLVED_UNIT9));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,unit : any) {
    }
    @defaultConstructor
    ResolveInstanceFieldsInUnitTask(context : any,unit : any) {
        super.DartObject(context,unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveInstanceFieldsInUnitTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let libraryElement : any = getRequiredInput(ResolveInstanceFieldsInUnitTask.LIBRARY_INPUT);
        let unit : any = getRequiredInput(ResolveInstanceFieldsInUnitTask.UNIT_INPUT);
        let typeProvider : any = getRequiredInput(ResolveInstanceFieldsInUnitTask.TYPE_PROVIDER_INPUT);
        let unitElement : any = unit.element;
        if (context.analysisOptions.strongMode) {
            let visitor : any = new bare.createInstance(any,null,libraryElement,unitElement.source,typeProvider,AnalysisErrorListener.NULL_LISTENER);
            visitor.resolveCompilationUnit(unit);
        }
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT9,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT9,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [ResolveInstanceFieldsInUnitTask.UNIT_INPUT,properties.RESOLVED_UNIT8.of(unit)],
            [ResolveInstanceFieldsInUnitTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT6.of(unit.library)],
            [ResolveInstanceFieldsInUnitTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)],
            ['orderLibraryCycleTasks',properties.LIBRARY_CYCLE_UNITS.of(unit.library).toListOf(properties.CREATED_RESOLVED_UNIT8)],
            ['orderLibraryCycles',properties.LIBRARY_CYCLE_DEPENDENCIES.of(unit.library).toListOf(properties.CREATED_RESOLVED_UNIT10)]]);
    }
    static createTask(context : any,target : any) : ResolveInstanceFieldsInUnitTask {
        return new ResolveInstanceFieldsInUnitTask(context,target);
    }
}

export namespace ResolveLibraryReferencesTask {
    export type Constructors = 'ResolveLibraryReferencesTask';
    export type Interface = Omit<ResolveLibraryReferencesTask, Constructors>;
}
@DartClass
export class ResolveLibraryReferencesTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveLibraryReferencesTask',ResolveLibraryReferencesTask.createTask.bind(this),ResolveLibraryReferencesTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ELEMENT9));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolveLibraryReferencesTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveLibraryReferencesTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ResolveLibraryReferencesTask.LIBRARY_INPUT);
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT9,library);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            [ResolveLibraryReferencesTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT8.of(source)],
            ['resolvedUnits',properties.LIBRARY_SPECIFIC_UNITS.of(source).toListOf(properties.RESOLVED_UNIT11)]]);
    }
    static createTask(context : any,target : any) : ResolveLibraryReferencesTask {
        return new ResolveLibraryReferencesTask(context,target);
    }
}

export namespace ResolveLibraryTask {
    export type Constructors = 'ResolveLibraryTask';
    export type Interface = Omit<ResolveLibraryTask, Constructors>;
}
@DartClass
export class ResolveLibraryTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$UNITS_INPUT : string;
    static get UNITS_INPUT() : string { 
        if (this.__$UNITS_INPUT===undefined) {
            this.__$UNITS_INPUT = 'UNITS_INPUT';
        }
        return this.__$UNITS_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveLibraryTask',ResolveLibraryTask.createTask.bind(this),ResolveLibraryTask.buildInputs.bind(this),new core.DartList.literal<any>(LIBRARY_ELEMENT));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolveLibraryTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveLibraryTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ResolveLibraryTask.LIBRARY_INPUT);
        op(Op.INDEX_ASSIGN,outputs,LIBRARY_ELEMENT,library);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            [ResolveLibraryTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT9.of(source)],
            ['thisLibraryClosureIsReady',properties.READY_RESOLVED_UNIT.of(source)]]);
    }
    static createTask(context : any,target : any) : ResolveLibraryTask {
        return new ResolveLibraryTask(context,target);
    }
}

export namespace ResolveLibraryTypeNamesTask {
    export type Constructors = 'ResolveLibraryTypeNamesTask';
    export type Interface = Omit<ResolveLibraryTypeNamesTask, Constructors>;
}
@DartClass
export class ResolveLibraryTypeNamesTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveLibraryTypeNamesTask',ResolveLibraryTypeNamesTask.createTask.bind(this),ResolveLibraryTypeNamesTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ELEMENT6));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolveLibraryTypeNamesTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveLibraryTypeNamesTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ResolveLibraryTypeNamesTask.LIBRARY_INPUT);
        let typeProvider : any = getRequiredInput(ResolveLibraryTypeNamesTask.TYPE_PROVIDER_INPUT);
        (library as any).createLoadLibraryFunction(typeProvider);
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT6,library);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            ['resolvedUnit',properties.LIBRARY_SPECIFIC_UNITS.of(source).toListOf(properties.RESOLVED_UNIT5)],
            [ResolveLibraryTypeNamesTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT5.of(source)],
            [ResolveLibraryTypeNamesTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : ResolveLibraryTypeNamesTask {
        return new ResolveLibraryTypeNamesTask(context,target);
    }
}

export namespace ResolveTopLevelLibraryTypeBoundsTask {
    export type Constructors = 'ResolveTopLevelLibraryTypeBoundsTask';
    export type Interface = Omit<ResolveTopLevelLibraryTypeBoundsTask, Constructors>;
}
@DartClass
export class ResolveTopLevelLibraryTypeBoundsTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveTopLevelLibraryTypeBoundsTask',ResolveTopLevelLibraryTypeBoundsTask.createTask.bind(this),ResolveTopLevelLibraryTypeBoundsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ELEMENT5));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolveTopLevelLibraryTypeBoundsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveTopLevelLibraryTypeBoundsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get handlesDependencyCycles() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ResolveTopLevelLibraryTypeBoundsTask.LIBRARY_INPUT);
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT5,library);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            [ResolveTopLevelLibraryTypeBoundsTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT4.of(source)],
            ['thisLibraryUnitsReady',properties.LIBRARY_SPECIFIC_UNITS.of(source).toListOf(properties.RESOLVED_UNIT4)],
            ['directlyImportedLibrariesReady',IMPORTED_LIBRARIES.of(source).toListOf(properties.LIBRARY_ELEMENT5)],
            ['directlyExportedLibrariesReady',EXPORTED_LIBRARIES.of(source).toListOf(properties.LIBRARY_ELEMENT5)]]);
    }
    static createTask(context : any,target : any) : ResolveTopLevelLibraryTypeBoundsTask {
        return new ResolveTopLevelLibraryTypeBoundsTask(context,target);
    }
}

export namespace ResolveTopLevelUnitTypeBoundsTask {
    export type Constructors = 'ResolveTopLevelUnitTypeBoundsTask';
    export type Interface = Omit<ResolveTopLevelUnitTypeBoundsTask, Constructors>;
}
@DartClass
export class ResolveTopLevelUnitTypeBoundsTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveTopLevelUnitTypeBoundsTask',ResolveTopLevelUnitTypeBoundsTask.createTask.bind(this),ResolveTopLevelUnitTypeBoundsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.RESOLVE_TYPE_BOUNDS_ERRORS,properties.CREATED_RESOLVED_UNIT4,properties.RESOLVED_UNIT4));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolveTopLevelUnitTypeBoundsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveTopLevelUnitTypeBoundsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ResolveTopLevelUnitTypeBoundsTask.LIBRARY_INPUT);
        let unit : any = getRequiredInput(ResolveTopLevelUnitTypeBoundsTask.UNIT_INPUT);
        let unitElement : any = unit.element;
        let typeProvider : any = getRequiredInput(ResolveTopLevelUnitTypeBoundsTask.TYPE_PROVIDER_INPUT);
        let errorListener : any = new bare.createInstance(any,null);
        new bare.createInstance(any,null,typeProvider,library,unitElement.source,errorListener).resolveTypeBounds(unit);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVE_TYPE_BOUNDS_ERRORS,getTargetSourceErrors(errorListener,target));
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT4,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT4,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            ['importsExportNamespace',IMPORTED_LIBRARIES.of(unit.library).toMapOf(properties.LIBRARY_ELEMENT4)],
            ['dependOnAllExportedSources',IMPORTED_LIBRARIES.of(unit.library).toMapOf(properties.EXPORT_SOURCE_CLOSURE)],
            [ResolveTopLevelUnitTypeBoundsTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT4.of(unit.library)],
            [ResolveTopLevelUnitTypeBoundsTask.UNIT_INPUT,properties.RESOLVED_UNIT3.of(unit)],
            [ResolveTopLevelUnitTypeBoundsTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : ResolveTopLevelUnitTypeBoundsTask {
        return new ResolveTopLevelUnitTypeBoundsTask(context,target);
    }
}

export namespace ResolveUnitTask {
    export type Constructors = 'ResolveUnitTask';
    export type Interface = Omit<ResolveUnitTask, Constructors>;
}
@DartClass
export class ResolveUnitTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveUnitTask',ResolveUnitTask.createTask.bind(this),ResolveUnitTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CONSTANT_EXPRESSIONS_DEPENDENCIES,properties.RESOLVE_UNIT_ERRORS,properties.CREATED_RESOLVED_UNIT11,properties.RESOLVED_UNIT11));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,compilationUnit : any) {
    }
    @defaultConstructor
    ResolveUnitTask(context : any,compilationUnit : any) {
        super.DartObject(context,compilationUnit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveUnitTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let target : any = this.target;
        let libraryElement : any = getRequiredInput(ResolveUnitTask.LIBRARY_INPUT);
        let unit : any = getRequiredInput(ResolveUnitTask.UNIT_INPUT);
        let typeProvider : any = getRequiredInput(ResolveUnitTask.TYPE_PROVIDER_INPUT);
        let unitElement : any = unit.element;
        let errorListener : any = new bare.createInstance(any,null);
        let visitor : any = new bare.createInstance(any,null,libraryElement,unitElement.source,typeProvider,errorListener);
        unit.accept(visitor);
        let constExprDependencies : core.DartList<ConstantEvaluationTarget>;
        {
            let finder : any = new bare.createInstance(any,null);
            unit.accept(finder);
            constExprDependencies = finder.dependencies.toList();
        }
        op(Op.INDEX_ASSIGN,outputs,properties.CONSTANT_EXPRESSIONS_DEPENDENCIES,constExprDependencies);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVE_UNIT_ERRORS,getTargetSourceErrors(errorListener,target));
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT11,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT11,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [ResolveUnitTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT8.of(unit.library)],
            [ResolveUnitTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)],
            [ResolveUnitTask.UNIT_INPUT,properties.RESOLVED_UNIT10.of(unit)],
            ['orderLibraryCycleTasks',properties.LIBRARY_CYCLE_UNITS.of(unit.library).toListOf(properties.CREATED_RESOLVED_UNIT10)]]);
    }
    static createTask(context : any,target : any) : ResolveUnitTask {
        return new ResolveUnitTask(context,target);
    }
}

export namespace ResolveUnitTypeNamesTask {
    export type Constructors = 'ResolveUnitTypeNamesTask';
    export type Interface = Omit<ResolveUnitTypeNamesTask, Constructors>;
}
@DartClass
export class ResolveUnitTypeNamesTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveUnitTypeNamesTask',ResolveUnitTypeNamesTask.createTask.bind(this),ResolveUnitTypeNamesTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.RESOLVE_TYPE_NAMES_ERRORS,properties.CREATED_RESOLVED_UNIT5,properties.RESOLVED_UNIT5));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolveUnitTypeNamesTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveUnitTypeNamesTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(ResolveUnitTypeNamesTask.LIBRARY_INPUT);
        let unit : any = getRequiredInput(ResolveUnitTypeNamesTask.UNIT_INPUT);
        let unitElement : any = unit.element;
        let typeProvider : any = getRequiredInput(ResolveUnitTypeNamesTask.TYPE_PROVIDER_INPUT);
        let errorListener : any = new bare.createInstance(any,null);
        let visitor : any = new bare.createInstance(any,null,library,unitElement.source,typeProvider,errorListener);
        unit.accept(visitor);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVE_TYPE_NAMES_ERRORS,getTargetSourceErrors(errorListener,target));
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT5,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT5,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [ResolveUnitTypeNamesTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT5.of(unit.library)],
            [ResolveUnitTypeNamesTask.UNIT_INPUT,properties.RESOLVED_UNIT4.of(unit)],
            [ResolveUnitTypeNamesTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : ResolveUnitTypeNamesTask {
        return new ResolveUnitTypeNamesTask(context,target);
    }
}

export namespace ResolveVariableReferencesTask {
    export type Constructors = 'ResolveVariableReferencesTask';
    export type Interface = Omit<ResolveVariableReferencesTask, Constructors>;
}
@DartClass
export class ResolveVariableReferencesTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveVariableReferencesTask',ResolveVariableReferencesTask.createTask.bind(this),ResolveVariableReferencesTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CREATED_RESOLVED_UNIT6,properties.RESOLVED_UNIT6,properties.VARIABLE_REFERENCE_ERRORS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ResolveVariableReferencesTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveVariableReferencesTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let libraryElement : any = getRequiredInput(ResolveVariableReferencesTask.LIBRARY_INPUT);
        let unit : any = getRequiredInput(ResolveVariableReferencesTask.UNIT_INPUT);
        let unitElement : any = unit.element;
        let typeProvider : any = getRequiredInput(ResolveVariableReferencesTask.TYPE_PROVIDER_INPUT);
        let errorListener : any = new bare.createInstance(any,null);
        let nameScope : any = new bare.createInstance(any,null,libraryElement);
        let visitor : any = new bare.createInstance(any,null,libraryElement,unitElement.source,typeProvider,errorListener,{
            nameScope : nameScope});
        unit.accept(visitor);
        op(Op.INDEX_ASSIGN,outputs,properties.RESOLVED_UNIT6,unit);
        op(Op.INDEX_ASSIGN,outputs,properties.CREATED_RESOLVED_UNIT6,true);
        op(Op.INDEX_ASSIGN,outputs,properties.VARIABLE_REFERENCE_ERRORS,getTargetSourceErrors(errorListener,target));
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let unit : any = target;
        return new core.DartMap.literal([
            [ResolveVariableReferencesTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT1.of(unit.library)],
            [ResolveVariableReferencesTask.UNIT_INPUT,properties.RESOLVED_UNIT5.of(unit)],
            [ResolveVariableReferencesTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : ResolveVariableReferencesTask {
        return new ResolveVariableReferencesTask(context,target);
    }
}

export namespace ScanDartTask {
    export type Constructors = 'ScanDartTask';
    export type Interface = Omit<ScanDartTask, Constructors>;
}
@DartClass
export class ScanDartTask extends any {
    private static __$CONTENT_INPUT_NAME : string;
    static get CONTENT_INPUT_NAME() : string { 
        if (this.__$CONTENT_INPUT_NAME===undefined) {
            this.__$CONTENT_INPUT_NAME = 'CONTENT_INPUT_NAME';
        }
        return this.__$CONTENT_INPUT_NAME;
    }

    private static __$MODIFICATION_TIME_INPUT : string;
    static get MODIFICATION_TIME_INPUT() : string { 
        if (this.__$MODIFICATION_TIME_INPUT===undefined) {
            this.__$MODIFICATION_TIME_INPUT = 'MODIFICATION_TIME_INPUT';
        }
        return this.__$MODIFICATION_TIME_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ScanDartTask',ScanDartTask.createTask.bind(this),ScanDartTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.IGNORE_INFO,LINE_INFO,properties.SCAN_ERRORS,TOKEN_STREAM),{
                suitabilityFor : ScanDartTask.suitabilityFor.bind(this)});
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ScanDartTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ScanDartTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let source : any = getRequiredSource();
        let errorListener : any = new bare.createInstance(any,null);
        let modificationTime : number = getRequiredInput(ScanDartTask.MODIFICATION_TIME_INPUT);
        if (modificationTime < 0) {
            let message : string = 'Content could not be read';
            if (is(context, any)) {
                let entry : any = (context as any).getCacheEntry(target);
                let exception : any = entry.exception;
                if (exception != null) {
                    message = exception.toString();
                }
            }
            if (source.exists()) {
                errorListener.onError(new bare.createInstance(any,null,source,0,0,ScannerErrorCode.UNABLE_GET_CONTENT,new core.DartList.literal(message)));
            }
        }
        if (is(target, any)) {
            let script : any = target;
            let fragments : core.DartList<any> = script.fragments;
            if (fragments.length < 1) {
                throw new bare.createInstance(any,null,'Cannot scan scripts with no fragments');
            }else if (fragments.length > 1) {
                throw new bare.createInstance(any,null,'Cannot scan scripts with multiple fragments');
            }
            let fragment : any = fragments[0];
            let scanner : any = new bare.createInstance(any,null,source,new bare.createInstance(any,null,fragment.content,fragment.offset),errorListener);
            scanner.setSourceStart(fragment.line,fragment.column);
            scanner.preserveComments = context.analysisOptions.preserveComments;
            scanner.scanGenericMethodComments = context.analysisOptions.strongMode;
            scanner.scanLazyAssignmentOperators = context.analysisOptions.enableLazyAssignmentOperators;
            let lineInfo : any = new bare.createInstance(any,null,scanner.lineStarts);
            op(Op.INDEX_ASSIGN,outputs,TOKEN_STREAM,scanner.tokenize());
            op(Op.INDEX_ASSIGN,outputs,LINE_INFO,lineInfo);
            op(Op.INDEX_ASSIGN,outputs,properties.IGNORE_INFO,IgnoreInfo.calculateIgnores(fragment.content,lineInfo));
            op(Op.INDEX_ASSIGN,outputs,properties.SCAN_ERRORS,getUniqueErrors(errorListener.errors));
        }else if (is(target, any)) {
            let content : string = getRequiredInput(ScanDartTask.CONTENT_INPUT_NAME);
            let scanner : any = new bare.createInstance(any,null,source,new bare.createInstance(any,null,content),errorListener);
            scanner.preserveComments = context.analysisOptions.preserveComments;
            scanner.scanGenericMethodComments = context.analysisOptions.strongMode;
            scanner.scanLazyAssignmentOperators = context.analysisOptions.enableLazyAssignmentOperators;
            let lineInfo : any = new bare.createInstance(any,null,scanner.lineStarts);
            op(Op.INDEX_ASSIGN,outputs,TOKEN_STREAM,scanner.tokenize());
            op(Op.INDEX_ASSIGN,outputs,LINE_INFO,lineInfo);
            op(Op.INDEX_ASSIGN,outputs,properties.IGNORE_INFO,IgnoreInfo.calculateIgnores(content,lineInfo));
            op(Op.INDEX_ASSIGN,outputs,properties.SCAN_ERRORS,getUniqueErrors(errorListener.errors));
        }else {
            throw new bare.createInstance(any,null,`Cannot scan Dart code from a ${target.runtimeType}`);
        }
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        if (is(target, any)) {
            return new core.DartMap.literal([
                [ScanDartTask.CONTENT_INPUT_NAME,CONTENT.of(target,{
                    flushOnAccess : true})],
                [ScanDartTask.MODIFICATION_TIME_INPUT,MODIFICATION_TIME.of(target)]]);
        }else if (is(target, any)) {
            let source : any = target.source;
            return new core.DartMap.literal([
                ['-',DART_SCRIPTS.of(source)],
                [ScanDartTask.MODIFICATION_TIME_INPUT,MODIFICATION_TIME.of(source)]]);
        }
        throw new bare.createInstance(any,null,`Cannot build inputs for a ${target.runtimeType}`);
    }
    static createTask(context : any,target : any) : ScanDartTask {
        return new ScanDartTask(context,target);
    }
    static suitabilityFor(target : any) : any {
        if (is(target, any)) {
            if (target.shortName.endsWith(AnalysisEngine.SUFFIX_DART)) {
                return TaskSuitability.HIGHEST;
            }
            return TaskSuitability.LOWEST;
        }else if (is(target, any)) {
            return TaskSuitability.HIGHEST;
        }
        return TaskSuitability.NONE;
    }
}

export namespace BuildPublicNamespaceTask {
    export type Constructors = 'BuildPublicNamespaceTask';
    export type Interface = Omit<BuildPublicNamespaceTask, Constructors>;
}
@DartClass
export class BuildPublicNamespaceTask extends any {
    private static __$LIBRARY_INPUT : string;
    static get LIBRARY_INPUT() : string { 
        if (this.__$LIBRARY_INPUT===undefined) {
            this.__$LIBRARY_INPUT = 'LIBRARY_INPUT';
        }
        return this.__$LIBRARY_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'BuildPublicNamespaceTask',BuildPublicNamespaceTask.createTask.bind(this),BuildPublicNamespaceTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.LIBRARY_ELEMENT3));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    BuildPublicNamespaceTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return BuildPublicNamespaceTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let library : any = getRequiredInput(BuildPublicNamespaceTask.LIBRARY_INPUT);
        let builder : any = new bare.createInstance(any,null);
        library.publicNamespace = builder.createPublicNamespaceForLibrary(library);
        op(Op.INDEX_ASSIGN,outputs,properties.LIBRARY_ELEMENT3,library);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let source : any = target;
        return new core.DartMap.literal([
            [BuildPublicNamespaceTask.LIBRARY_INPUT,properties.LIBRARY_ELEMENT2.of(source)]]);
    }
    static createTask(context : any,target : any) : BuildPublicNamespaceTask {
        return new BuildPublicNamespaceTask(context,target);
    }
}

export namespace InferStaticVariableTask {
    export type Constructors = ConstantEvaluationAnalysisTask.Constructors | 'InferStaticVariableTask';
    export type Interface = Omit<InferStaticVariableTask, Constructors>;
}
@DartClass
export class InferStaticVariableTask extends ConstantEvaluationAnalysisTask {
    constructor(context : any,variable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferStaticVariableTask(context : any,variable : any) {
        super.ConstantEvaluationAnalysisTask(context,variable);
    }
    getDeclaration(unit : any) : any {
        let variable : any = target;
        let offset : number = variable.nameOffset;
        let node : any = new bare.createInstance(any,null,offset).searchWithin(unit);
        if (op(Op.EQUALS,node,null)) {
            let variableSource : any = variable.source;
            let unitSource : any = resolutionMap.elementDeclaredByCompilationUnit(unit).source;
            if (variableSource != unitSource) {
                throw new bare.createInstance(any,null,"Failed to find the AST node for the variable " + `${variable.displayName} at ${offset} in ${variableSource} ` + `because we were looking in ${unitSource}`);
            }
            throw new bare.createInstance(any,null,"Failed to find the AST node for the variable " + `${variable.displayName} at ${offset} in ${variableSource}`);
        }
        let declaration : any = node.getAncestor((ancestor : any) =>  {
            return is(ancestor, any);
        });
        if (op(Op.EQUALS,declaration,null) || declaration.name != node) {
            let variableSource : any = variable.source;
            let unitSource : any = resolutionMap.elementDeclaredByCompilationUnit(unit).source;
            if (variableSource != unitSource) {
                if (op(Op.EQUALS,declaration,null)) {
                    throw new bare.createInstance(any,null,"Failed to find the declaration of the variable " + `${variable.displayName} at ${offset} in ${variableSource} ` + "because the node was not in a variable declaration " + `possibly because we were looking in ${unitSource}`);
                }
                throw new bare.createInstance(any,null,"Failed to find the declaration of the variable " + `${variable.displayName} at ${offset} in ${variableSource} ` + `because we were looking in ${unitSource}`);
            }
            if (op(Op.EQUALS,declaration,null)) {
                throw new bare.createInstance(any,null,"Failed to find the declaration of the variable " + `${variable.displayName} at ${offset} in ${variableSource} ` + "because the node was not in a variable declaration");
            }
            throw new bare.createInstance(any,null,"Failed to find the declaration of the variable " + `${variable.displayName} at ${offset} in ${variableSource} ` + "because the node was not the name in a variable declaration");
        }
        return declaration;
    }
}

export namespace ComputeConstantValueTask {
    export type Constructors = ConstantEvaluationAnalysisTask.Constructors | 'ComputeConstantValueTask';
    export type Interface = Omit<ComputeConstantValueTask, Constructors>;
}
@DartClass
export class ComputeConstantValueTask extends ConstantEvaluationAnalysisTask {
    private static __$DEPENDENCIES_INPUT : string;
    static get DEPENDENCIES_INPUT() : string { 
        if (this.__$DEPENDENCIES_INPUT===undefined) {
            this.__$DEPENDENCIES_INPUT = 'DEPENDENCIES_INPUT';
        }
        return this.__$DEPENDENCIES_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ComputeConstantValueTask',ComputeConstantValueTask.createTask.bind(this),ComputeConstantValueTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CONSTANT_VALUE));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,constant : ConstantEvaluationTarget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComputeConstantValueTask(context : any,constant : ConstantEvaluationTarget) {
        super.ConstantEvaluationAnalysisTask(context,constant);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ComputeConstantValueTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get handlesDependencyCycles() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let constant : ConstantEvaluationTarget = target;
        let context : any = constant.context;
        let typeProvider : any = getRequiredInput(ComputeConstantValueTask.TYPE_PROVIDER_INPUT);
        let constantEvaluationEngine : any = new bare.createInstance(any,null,typeProvider,context.declaredVariables,{
            typeSystem : context.typeSystem});
        if (op(Op.EQUALS,dependencyCycle,null)) {
            constantEvaluationEngine.computeConstantValue(constant);
        }else {
            let constantsInCycle : core.DartList<ConstantEvaluationTarget> = new core.DartList.literal<ConstantEvaluationTarget>();
            let length : number = dependencyCycle.length;
            for(let i : number = 0; i < length; i++){
                let workItem : any = op(Op.INDEX,dependencyCycle,i);
                if (op(Op.EQUALS,workItem.descriptor,ComputeConstantValueTask.DESCRIPTOR)) {
                    constantsInCycle.add(workItem.target);
                }
            }
            /* TODO (AssertStatementImpl) : assert (constantsInCycle.isNotEmpty); */;
            constantEvaluationEngine.generateCycleError(constantsInCycle,constant);
        }
        op(Op.INDEX_ASSIGN,outputs,properties.CONSTANT_VALUE,constant);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let evaluationTarget : ConstantEvaluationTarget = target;
        return new core.DartMap.literal([
            [ComputeConstantValueTask.DEPENDENCIES_INPUT,properties.CONSTANT_DEPENDENCIES.of(evaluationTarget).toListOf(properties.CONSTANT_VALUE)],
            [ComputeConstantValueTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : ComputeConstantValueTask {
        return new ComputeConstantValueTask(context,target);
    }
}

export namespace ComputeConstantDependenciesTask {
    export type Constructors = ConstantEvaluationAnalysisTask.Constructors | 'ComputeConstantDependenciesTask';
    export type Interface = Omit<ComputeConstantDependenciesTask, Constructors>;
}
@DartClass
export class ComputeConstantDependenciesTask extends ConstantEvaluationAnalysisTask {
    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ComputeConstantDependenciesTask',ComputeConstantDependenciesTask.createTask.bind(this),ComputeConstantDependenciesTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CONSTANT_DEPENDENCIES));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,constant : ConstantEvaluationTarget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComputeConstantDependenciesTask(context : any,constant : ConstantEvaluationTarget) {
        super.ConstantEvaluationAnalysisTask(context,constant);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ComputeConstantDependenciesTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let constant : ConstantEvaluationTarget = target;
        let typeProvider : any = getRequiredInput(ComputeConstantDependenciesTask.TYPE_PROVIDER_INPUT);
        let dependencies : core.DartList<ConstantEvaluationTarget> = new core.DartList.literal<ConstantEvaluationTarget>();
        new bare.createInstance(any,null,typeProvider,context.declaredVariables,{
            typeSystem : context.typeSystem}).computeDependencies(constant,dependencies.add.bind(dependencies));
        op(Op.INDEX_ASSIGN,outputs,properties.CONSTANT_DEPENDENCIES,dependencies);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['constantExpressionResolved',properties.CONSTANT_EXPRESSION_RESOLVED.of(target)],
            [ComputeConstantDependenciesTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)]]);
    }
    static createTask(context : any,target : any) : ComputeConstantDependenciesTask {
        return new ComputeConstantDependenciesTask(context,target);
    }
}

export namespace ResolveConstantExpressionTask {
    export type Constructors = ConstantEvaluationAnalysisTask.Constructors | 'ResolveConstantExpressionTask';
    export type Interface = Omit<ResolveConstantExpressionTask, Constructors>;
}
@DartClass
export class ResolveConstantExpressionTask extends ConstantEvaluationAnalysisTask {
    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ResolveConstantExpressionTask',ResolveConstantExpressionTask.createTask.bind(this),ResolveConstantExpressionTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.CONSTANT_EXPRESSION_RESOLVED));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,constant : ConstantEvaluationTarget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveConstantExpressionTask(context : any,constant : ConstantEvaluationTarget) {
        super.ConstantEvaluationAnalysisTask(context,constant);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ResolveConstantExpressionTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        op(Op.INDEX_ASSIGN,outputs,properties.CONSTANT_EXPRESSION_RESOLVED,true);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let librarySource : any;
        if (is(target, any)) {
            let unit : any = target.getAncestor((element : any) =>  {
                return is(element, any);
            });
            librarySource = unit.librarySource;
        }else if (is(target, any)) {
            librarySource = target.librarySource;
        }else {
            throw new bare.createInstance(any,null,`Cannot build inputs for a ${target.runtimeType}`);
        }
        return new core.DartMap.literal([
            ['createdResolvedUnit',properties.CREATED_RESOLVED_UNIT11.of(new bare.createInstance(any,null,librarySource,target.source))]]);
    }
    static createTask(context : any,target : any) : ResolveConstantExpressionTask {
        return new ResolveConstantExpressionTask(context,target);
    }
}

export namespace InferStaticVariableTypeTask {
    export type Constructors = InferStaticVariableTask.Constructors | 'InferStaticVariableTypeTask';
    export type Interface = Omit<InferStaticVariableTypeTask, Constructors>;
}
@DartClass
export class InferStaticVariableTypeTask extends InferStaticVariableTask {
    private static __$DEPENDENCIES_INPUT : string;
    static get DEPENDENCIES_INPUT() : string { 
        if (this.__$DEPENDENCIES_INPUT===undefined) {
            this.__$DEPENDENCIES_INPUT = 'DEPENDENCIES_INPUT';
        }
        return this.__$DEPENDENCIES_INPUT;
    }

    private static __$TYPE_PROVIDER_INPUT : string;
    static get TYPE_PROVIDER_INPUT() : string { 
        if (this.__$TYPE_PROVIDER_INPUT===undefined) {
            this.__$TYPE_PROVIDER_INPUT = 'TYPE_PROVIDER_INPUT';
        }
        return this.__$TYPE_PROVIDER_INPUT;
    }

    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'InferStaticVariableTypeTask',InferStaticVariableTypeTask.createTask.bind(this),InferStaticVariableTypeTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.INFERRED_STATIC_VARIABLE,properties.STATIC_VARIABLE_RESOLUTION_ERRORS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,variable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferStaticVariableTypeTask(context : any,variable : any) {
        super.InferStaticVariableTask(context,variable);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return InferStaticVariableTypeTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get handlesDependencyCycles() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let variable : any = target;
        let unit : any = getRequiredInput(InferStaticVariableTypeTask.UNIT_INPUT);
        let typeProvider : any = getRequiredInput(InferStaticVariableTypeTask.TYPE_PROVIDER_INPUT);
        let errors : core.DartList<any> = AnalysisError.NO_ERRORS;
        if (op(Op.EQUALS,dependencyCycle,null) && variable.hasImplicitType) {
            let declaration : any = this.getDeclaration(unit);
            let errorListener : any = new bare.createInstance(any,null);
            let initializer : any = declaration.initializer;
            let newType : any;
            if (!isValidForTypeInference(initializer)) {
                newType = typeProvider.dynamicType;
            }else {
                let resolutionContext : any = ResolutionContextBuilder.contextFor(initializer);
                let visitor : any = new bare.createInstance(any,null,variable.library,variable.source,typeProvider,errorListener,{
                    nameScope : resolutionContext.scope});
                if (resolutionContext.enclosingClassDeclaration != null) {
                    visitor.prepareToResolveMembersInClass(resolutionContext.enclosingClassDeclaration);
                }
                visitor.initForIncrementalResolution();
                initializer.accept(visitor);
                newType = initializer.staticType;
                if (op(Op.EQUALS,newType,null) || newType.isBottom || newType.isDartCoreNull) {
                    newType = typeProvider.dynamicType;
                }
            }
            setFieldType(variable,newType);
            errors = getUniqueErrors(errorListener.errors);
        }else {
        }
        op(Op.INDEX_ASSIGN,outputs,properties.INFERRED_STATIC_VARIABLE,variable);
        op(Op.INDEX_ASSIGN,outputs,properties.STATIC_VARIABLE_RESOLUTION_ERRORS,errors);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let variable : any = target;
        let unit : any = new bare.createInstance(any,null,variable.library.source,variable.source);
        return new core.DartMap.literal([
            [InferStaticVariableTypeTask.DEPENDENCIES_INPUT,properties.INFERABLE_STATIC_VARIABLE_DEPENDENCIES.of(variable).toListOf(properties.INFERRED_STATIC_VARIABLE)],
            [InferStaticVariableTypeTask.TYPE_PROVIDER_INPUT,properties.TYPE_PROVIDER.of(AnalysisContextTarget.request)],
            [InferStaticVariableTypeTask.UNIT_INPUT,properties.RESOLVED_UNIT7.of(unit)],
            ['orderLibraryCycles',properties.LIBRARY_CYCLE_DEPENDENCIES.of(unit.library).toListOf(properties.CREATED_RESOLVED_UNIT10)]]);
    }
    static createTask(context : any,target : any) : InferStaticVariableTypeTask {
        return new InferStaticVariableTypeTask(context,target);
    }
}

export namespace ComputeInferableStaticVariableDependenciesTask {
    export type Constructors = InferStaticVariableTask.Constructors | 'ComputeInferableStaticVariableDependenciesTask';
    export type Interface = Omit<ComputeInferableStaticVariableDependenciesTask, Constructors>;
}
@DartClass
export class ComputeInferableStaticVariableDependenciesTask extends InferStaticVariableTask {
    private static __$UNIT_INPUT : string;
    static get UNIT_INPUT() : string { 
        if (this.__$UNIT_INPUT===undefined) {
            this.__$UNIT_INPUT = 'UNIT_INPUT';
        }
        return this.__$UNIT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ComputeInferableStaticVariableDependenciesTask',ComputeInferableStaticVariableDependenciesTask.createTask.bind(this),ComputeInferableStaticVariableDependenciesTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.INFERABLE_STATIC_VARIABLE_DEPENDENCIES));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,variable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComputeInferableStaticVariableDependenciesTask(context : any,variable : any) {
        super.InferStaticVariableTask(context,variable);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ComputeInferableStaticVariableDependenciesTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let unit : any = getRequiredInput(ComputeInferableStaticVariableDependenciesTask.UNIT_INPUT);
        let declaration : any = this.getDeclaration(unit);
        let gatherer : any = new bare.createInstance(any,null,this._isInferableStatic.bind(this));
        declaration.initializer.accept(gatherer);
        op(Op.INDEX_ASSIGN,outputs,properties.INFERABLE_STATIC_VARIABLE_DEPENDENCIES,gatherer.results.toList());
    }
    _isInferableStatic(variable : any) : boolean {
        return variable.isStatic && variable.hasImplicitType && variable.initializer != null;
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        if (is(target, any)) {
            let unit : any = target.getAncestor((element : any) =>  {
                return is(element, any);
            });
            return new core.DartMap.literal([
                [ComputeInferableStaticVariableDependenciesTask.UNIT_INPUT,properties.RESOLVED_UNIT7.of(new bare.createInstance(any,null,unit.librarySource,unit.source))]]);
        }
        throw new bare.createInstance(any,null,`Cannot build inputs for a ${target.runtimeType}`);
    }
    static createTask(context : any,target : any) : ComputeInferableStaticVariableDependenciesTask {
        return new ComputeInferableStaticVariableDependenciesTask(context,target);
    }
}

export class properties {
    private static __$LIBRARY_ELEMENT8 : any;
    static get LIBRARY_ELEMENT8() : any { 
        if (this.__$LIBRARY_ELEMENT8===undefined) {
            this.__$LIBRARY_ELEMENT8 = new bare.createInstance(any,null,'LIBRARY_ELEMENT8',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT8;
    }
    static set LIBRARY_ELEMENT8(__$value : any)  { 
        this.__$LIBRARY_ELEMENT8 = __$value;
    }

    private static __$AST_RESOLVED_CACHING_POLICY : any;
    static get AST_RESOLVED_CACHING_POLICY() : any { 
        if (this.__$AST_RESOLVED_CACHING_POLICY===undefined) {
            this.__$AST_RESOLVED_CACHING_POLICY = new bare.createInstance(any,null,1024,32);
        }
        return this.__$AST_RESOLVED_CACHING_POLICY;
    }
    static set AST_RESOLVED_CACHING_POLICY(__$value : any)  { 
        this.__$AST_RESOLVED_CACHING_POLICY = __$value;
    }

    private static __$AST_REUSABLE_CACHING_POLICY : any;
    static get AST_REUSABLE_CACHING_POLICY() : any { 
        if (this.__$AST_REUSABLE_CACHING_POLICY===undefined) {
            this.__$AST_REUSABLE_CACHING_POLICY = new bare.createInstance(any,null,1024,64);
        }
        return this.__$AST_REUSABLE_CACHING_POLICY;
    }
    static set AST_REUSABLE_CACHING_POLICY(__$value : any)  { 
        this.__$AST_REUSABLE_CACHING_POLICY = __$value;
    }

    private static __$CONSTANT_EVALUATION_TARGET_LIST_POLICY : any;
    static get CONSTANT_EVALUATION_TARGET_LIST_POLICY() : any { 
        if (this.__$CONSTANT_EVALUATION_TARGET_LIST_POLICY===undefined) {
            this.__$CONSTANT_EVALUATION_TARGET_LIST_POLICY = new bare.createInstance(any,null,-1,-1);
        }
        return this.__$CONSTANT_EVALUATION_TARGET_LIST_POLICY;
    }
    static set CONSTANT_EVALUATION_TARGET_LIST_POLICY(__$value : any)  { 
        this.__$CONSTANT_EVALUATION_TARGET_LIST_POLICY = __$value;
    }

    private static __$CONSTANT_EVALUATION_TARGET_POLICY : any;
    static get CONSTANT_EVALUATION_TARGET_POLICY() : any { 
        if (this.__$CONSTANT_EVALUATION_TARGET_POLICY===undefined) {
            this.__$CONSTANT_EVALUATION_TARGET_POLICY = new bare.createInstance(any,null,-1,-1);
        }
        return this.__$CONSTANT_EVALUATION_TARGET_POLICY;
    }
    static set CONSTANT_EVALUATION_TARGET_POLICY(__$value : any)  { 
        this.__$CONSTANT_EVALUATION_TARGET_POLICY = __$value;
    }

    private static __$ELEMENT_CACHING_POLICY : any;
    static get ELEMENT_CACHING_POLICY() : any { 
        if (this.__$ELEMENT_CACHING_POLICY===undefined) {
            this.__$ELEMENT_CACHING_POLICY = new bare.createInstance(any,null,-1,-1);
        }
        return this.__$ELEMENT_CACHING_POLICY;
    }
    static set ELEMENT_CACHING_POLICY(__$value : any)  { 
        this.__$ELEMENT_CACHING_POLICY = __$value;
    }

    private static __$TOKEN_STREAM_CACHING_POLICY : any;
    static get TOKEN_STREAM_CACHING_POLICY() : any { 
        if (this.__$TOKEN_STREAM_CACHING_POLICY===undefined) {
            this.__$TOKEN_STREAM_CACHING_POLICY = new bare.createInstance(any,null,1,1);
        }
        return this.__$TOKEN_STREAM_CACHING_POLICY;
    }
    static set TOKEN_STREAM_CACHING_POLICY(__$value : any)  { 
        this.__$TOKEN_STREAM_CACHING_POLICY = __$value;
    }

    private static __$USED_IMPORTED_ELEMENTS_POLICY : any;
    static get USED_IMPORTED_ELEMENTS_POLICY() : any { 
        if (this.__$USED_IMPORTED_ELEMENTS_POLICY===undefined) {
            this.__$USED_IMPORTED_ELEMENTS_POLICY = new bare.createInstance(any,null,-1,-1);
        }
        return this.__$USED_IMPORTED_ELEMENTS_POLICY;
    }
    static set USED_IMPORTED_ELEMENTS_POLICY(__$value : any)  { 
        this.__$USED_IMPORTED_ELEMENTS_POLICY = __$value;
    }

    private static __$USED_LOCAL_ELEMENTS_POLICY : any;
    static get USED_LOCAL_ELEMENTS_POLICY() : any { 
        if (this.__$USED_LOCAL_ELEMENTS_POLICY===undefined) {
            this.__$USED_LOCAL_ELEMENTS_POLICY = new bare.createInstance(any,null,-1,-1);
        }
        return this.__$USED_LOCAL_ELEMENTS_POLICY;
    }
    static set USED_LOCAL_ELEMENTS_POLICY(__$value : any)  { 
        this.__$USED_LOCAL_ELEMENTS_POLICY = __$value;
    }

    private static __$BUILD_DIRECTIVES_ERRORS : any;
    static get BUILD_DIRECTIVES_ERRORS() : any { 
        if (this.__$BUILD_DIRECTIVES_ERRORS===undefined) {
            this.__$BUILD_DIRECTIVES_ERRORS = new bare.createInstance(any,null,'BUILD_DIRECTIVES_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$BUILD_DIRECTIVES_ERRORS;
    }
    static set BUILD_DIRECTIVES_ERRORS(__$value : any)  { 
        this.__$BUILD_DIRECTIVES_ERRORS = __$value;
    }

    private static __$BUILD_LIBRARY_ERRORS : any;
    static get BUILD_LIBRARY_ERRORS() : any { 
        if (this.__$BUILD_LIBRARY_ERRORS===undefined) {
            this.__$BUILD_LIBRARY_ERRORS = new bare.createInstance(any,null,'BUILD_LIBRARY_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$BUILD_LIBRARY_ERRORS;
    }
    static set BUILD_LIBRARY_ERRORS(__$value : any)  { 
        this.__$BUILD_LIBRARY_ERRORS = __$value;
    }

    private static __$COMPILATION_UNIT_CONSTANTS : any;
    static get COMPILATION_UNIT_CONSTANTS() : any { 
        if (this.__$COMPILATION_UNIT_CONSTANTS===undefined) {
            this.__$COMPILATION_UNIT_CONSTANTS = new bare.createInstance(any,null,'COMPILATION_UNIT_CONSTANTS',null,{
                cachingPolicy : properties.CONSTANT_EVALUATION_TARGET_LIST_POLICY});
        }
        return this.__$COMPILATION_UNIT_CONSTANTS;
    }
    static set COMPILATION_UNIT_CONSTANTS(__$value : any)  { 
        this.__$COMPILATION_UNIT_CONSTANTS = __$value;
    }

    private static __$COMPILATION_UNIT_ELEMENT : any;
    static get COMPILATION_UNIT_ELEMENT() : any { 
        if (this.__$COMPILATION_UNIT_ELEMENT===undefined) {
            this.__$COMPILATION_UNIT_ELEMENT = new bare.createInstance(any,null,'COMPILATION_UNIT_ELEMENT',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$COMPILATION_UNIT_ELEMENT;
    }
    static set COMPILATION_UNIT_ELEMENT(__$value : any)  { 
        this.__$COMPILATION_UNIT_ELEMENT = __$value;
    }

    private static __$CONSTANT_DEPENDENCIES : any;
    static get CONSTANT_DEPENDENCIES() : any { 
        if (this.__$CONSTANT_DEPENDENCIES===undefined) {
            this.__$CONSTANT_DEPENDENCIES = new bare.createInstance(any,null,'CONSTANT_DEPENDENCIES',new core.DartList.literal<ConstantEvaluationTarget>());
        }
        return this.__$CONSTANT_DEPENDENCIES;
    }
    static set CONSTANT_DEPENDENCIES(__$value : any)  { 
        this.__$CONSTANT_DEPENDENCIES = __$value;
    }

    private static __$CONSTANT_EXPRESSION_RESOLVED : any;
    static get CONSTANT_EXPRESSION_RESOLVED() : any { 
        if (this.__$CONSTANT_EXPRESSION_RESOLVED===undefined) {
            this.__$CONSTANT_EXPRESSION_RESOLVED = new bare.createInstance(any,null,'CONSTANT_EXPRESSION_RESOLVED',false);
        }
        return this.__$CONSTANT_EXPRESSION_RESOLVED;
    }
    static set CONSTANT_EXPRESSION_RESOLVED(__$value : any)  { 
        this.__$CONSTANT_EXPRESSION_RESOLVED = __$value;
    }

    private static __$CONSTANT_EXPRESSIONS_DEPENDENCIES : any;
    static get CONSTANT_EXPRESSIONS_DEPENDENCIES() : any { 
        if (this.__$CONSTANT_EXPRESSIONS_DEPENDENCIES===undefined) {
            this.__$CONSTANT_EXPRESSIONS_DEPENDENCIES = new bare.createInstance(any,null,'CONSTANT_EXPRESSIONS_DEPENDENCIES',new core.DartList.literal<ConstantEvaluationTarget>());
        }
        return this.__$CONSTANT_EXPRESSIONS_DEPENDENCIES;
    }
    static set CONSTANT_EXPRESSIONS_DEPENDENCIES(__$value : any)  { 
        this.__$CONSTANT_EXPRESSIONS_DEPENDENCIES = __$value;
    }

    private static __$CONSTANT_VALUE : any;
    static get CONSTANT_VALUE() : any { 
        if (this.__$CONSTANT_VALUE===undefined) {
            this.__$CONSTANT_VALUE = new bare.createInstance(any,null,'CONSTANT_VALUE',null,{
                cachingPolicy : properties.CONSTANT_EVALUATION_TARGET_POLICY});
        }
        return this.__$CONSTANT_VALUE;
    }
    static set CONSTANT_VALUE(__$value : any)  { 
        this.__$CONSTANT_VALUE = __$value;
    }

    private static __$CONTAINING_LIBRARIES : any;
    static get CONTAINING_LIBRARIES() : any { 
        if (this.__$CONTAINING_LIBRARIES===undefined) {
            this.__$CONTAINING_LIBRARIES = new bare.createInstance(any,null,'CONTAINING_LIBRARIES',Source.EMPTY_LIST);
        }
        return this.__$CONTAINING_LIBRARIES;
    }
    static set CONTAINING_LIBRARIES(__$value : any)  { 
        this.__$CONTAINING_LIBRARIES = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT : any;
    static get CREATED_RESOLVED_UNIT() : any { 
        if (this.__$CREATED_RESOLVED_UNIT===undefined) {
            this.__$CREATED_RESOLVED_UNIT = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT',false);
        }
        return this.__$CREATED_RESOLVED_UNIT;
    }
    static set CREATED_RESOLVED_UNIT(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT1 : any;
    static get CREATED_RESOLVED_UNIT1() : any { 
        if (this.__$CREATED_RESOLVED_UNIT1===undefined) {
            this.__$CREATED_RESOLVED_UNIT1 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT1',false);
        }
        return this.__$CREATED_RESOLVED_UNIT1;
    }
    static set CREATED_RESOLVED_UNIT1(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT1 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT10 : any;
    static get CREATED_RESOLVED_UNIT10() : any { 
        if (this.__$CREATED_RESOLVED_UNIT10===undefined) {
            this.__$CREATED_RESOLVED_UNIT10 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT10',false);
        }
        return this.__$CREATED_RESOLVED_UNIT10;
    }
    static set CREATED_RESOLVED_UNIT10(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT10 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT11 : any;
    static get CREATED_RESOLVED_UNIT11() : any { 
        if (this.__$CREATED_RESOLVED_UNIT11===undefined) {
            this.__$CREATED_RESOLVED_UNIT11 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT11',false);
        }
        return this.__$CREATED_RESOLVED_UNIT11;
    }
    static set CREATED_RESOLVED_UNIT11(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT11 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT12 : any;
    static get CREATED_RESOLVED_UNIT12() : any { 
        if (this.__$CREATED_RESOLVED_UNIT12===undefined) {
            this.__$CREATED_RESOLVED_UNIT12 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT12',false);
        }
        return this.__$CREATED_RESOLVED_UNIT12;
    }
    static set CREATED_RESOLVED_UNIT12(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT12 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT2 : any;
    static get CREATED_RESOLVED_UNIT2() : any { 
        if (this.__$CREATED_RESOLVED_UNIT2===undefined) {
            this.__$CREATED_RESOLVED_UNIT2 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT2',false);
        }
        return this.__$CREATED_RESOLVED_UNIT2;
    }
    static set CREATED_RESOLVED_UNIT2(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT2 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT3 : any;
    static get CREATED_RESOLVED_UNIT3() : any { 
        if (this.__$CREATED_RESOLVED_UNIT3===undefined) {
            this.__$CREATED_RESOLVED_UNIT3 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT3',false);
        }
        return this.__$CREATED_RESOLVED_UNIT3;
    }
    static set CREATED_RESOLVED_UNIT3(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT3 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT4 : any;
    static get CREATED_RESOLVED_UNIT4() : any { 
        if (this.__$CREATED_RESOLVED_UNIT4===undefined) {
            this.__$CREATED_RESOLVED_UNIT4 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT4',false);
        }
        return this.__$CREATED_RESOLVED_UNIT4;
    }
    static set CREATED_RESOLVED_UNIT4(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT4 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT5 : any;
    static get CREATED_RESOLVED_UNIT5() : any { 
        if (this.__$CREATED_RESOLVED_UNIT5===undefined) {
            this.__$CREATED_RESOLVED_UNIT5 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT5',false);
        }
        return this.__$CREATED_RESOLVED_UNIT5;
    }
    static set CREATED_RESOLVED_UNIT5(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT5 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT6 : any;
    static get CREATED_RESOLVED_UNIT6() : any { 
        if (this.__$CREATED_RESOLVED_UNIT6===undefined) {
            this.__$CREATED_RESOLVED_UNIT6 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT6',false);
        }
        return this.__$CREATED_RESOLVED_UNIT6;
    }
    static set CREATED_RESOLVED_UNIT6(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT6 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT7 : any;
    static get CREATED_RESOLVED_UNIT7() : any { 
        if (this.__$CREATED_RESOLVED_UNIT7===undefined) {
            this.__$CREATED_RESOLVED_UNIT7 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT7',false);
        }
        return this.__$CREATED_RESOLVED_UNIT7;
    }
    static set CREATED_RESOLVED_UNIT7(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT7 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT8 : any;
    static get CREATED_RESOLVED_UNIT8() : any { 
        if (this.__$CREATED_RESOLVED_UNIT8===undefined) {
            this.__$CREATED_RESOLVED_UNIT8 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT8',false);
        }
        return this.__$CREATED_RESOLVED_UNIT8;
    }
    static set CREATED_RESOLVED_UNIT8(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT8 = __$value;
    }

    private static __$CREATED_RESOLVED_UNIT9 : any;
    static get CREATED_RESOLVED_UNIT9() : any { 
        if (this.__$CREATED_RESOLVED_UNIT9===undefined) {
            this.__$CREATED_RESOLVED_UNIT9 = new bare.createInstance(any,null,'CREATED_RESOLVED_UNIT9',false);
        }
        return this.__$CREATED_RESOLVED_UNIT9;
    }
    static set CREATED_RESOLVED_UNIT9(__$value : any)  { 
        this.__$CREATED_RESOLVED_UNIT9 = __$value;
    }

    private static __$ERROR_SOURCE_RESULTS : core.DartList<any>;
    static get ERROR_SOURCE_RESULTS() : core.DartList<any> { 
        if (this.__$ERROR_SOURCE_RESULTS===undefined) {
            this.__$ERROR_SOURCE_RESULTS = new core.DartList.literal<any>(properties.BUILD_DIRECTIVES_ERRORS,properties.BUILD_LIBRARY_ERRORS,properties.PARSE_ERRORS,properties.SCAN_ERRORS);
        }
        return this.__$ERROR_SOURCE_RESULTS;
    }
    static set ERROR_SOURCE_RESULTS(__$value : core.DartList<any>)  { 
        this.__$ERROR_SOURCE_RESULTS = __$value;
    }

    private static __$ERROR_UNIT_RESULTS : core.DartList<any>;
    static get ERROR_UNIT_RESULTS() : core.DartList<any> { 
        if (this.__$ERROR_UNIT_RESULTS===undefined) {
            this.__$ERROR_UNIT_RESULTS = new core.DartList.literal<any>(properties.HINTS,properties.LIBRARY_UNIT_ERRORS,properties.LINTS,properties.RESOLVE_DIRECTIVES_ERRORS,properties.RESOLVE_TYPE_BOUNDS_ERRORS,properties.RESOLVE_TYPE_NAMES_ERRORS,properties.RESOLVE_UNIT_ERRORS,properties.STRONG_MODE_ERRORS,properties.VARIABLE_REFERENCE_ERRORS,properties.VERIFY_ERRORS);
        }
        return this.__$ERROR_UNIT_RESULTS;
    }
    static set ERROR_UNIT_RESULTS(__$value : core.DartList<any>)  { 
        this.__$ERROR_UNIT_RESULTS = __$value;
    }

    private static __$EXPORT_SOURCE_CLOSURE : any;
    static get EXPORT_SOURCE_CLOSURE() : any { 
        if (this.__$EXPORT_SOURCE_CLOSURE===undefined) {
            this.__$EXPORT_SOURCE_CLOSURE = new bare.createInstance(any,null,'EXPORT_SOURCE_CLOSURE',null);
        }
        return this.__$EXPORT_SOURCE_CLOSURE;
    }
    static set EXPORT_SOURCE_CLOSURE(__$value : any)  { 
        this.__$EXPORT_SOURCE_CLOSURE = __$value;
    }

    private static __$HINTS : any;
    static get HINTS() : any { 
        if (this.__$HINTS===undefined) {
            this.__$HINTS = new bare.createInstance(any,null,'HINT_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$HINTS;
    }
    static set HINTS(__$value : any)  { 
        this.__$HINTS = __$value;
    }

    private static __$IGNORE_INFO : any;
    static get IGNORE_INFO() : any { 
        if (this.__$IGNORE_INFO===undefined) {
            this.__$IGNORE_INFO = new bare.createInstance(any,null,'IGNORE_INFO',null);
        }
        return this.__$IGNORE_INFO;
    }
    static set IGNORE_INFO(__$value : any)  { 
        this.__$IGNORE_INFO = __$value;
    }

    private static __$INFERABLE_STATIC_VARIABLE_DEPENDENCIES : any;
    static get INFERABLE_STATIC_VARIABLE_DEPENDENCIES() : any { 
        if (this.__$INFERABLE_STATIC_VARIABLE_DEPENDENCIES===undefined) {
            this.__$INFERABLE_STATIC_VARIABLE_DEPENDENCIES = new bare.createInstance(any,null,'INFERABLE_STATIC_VARIABLE_DEPENDENCIES',null);
        }
        return this.__$INFERABLE_STATIC_VARIABLE_DEPENDENCIES;
    }
    static set INFERABLE_STATIC_VARIABLE_DEPENDENCIES(__$value : any)  { 
        this.__$INFERABLE_STATIC_VARIABLE_DEPENDENCIES = __$value;
    }

    private static __$INFERABLE_STATIC_VARIABLES_IN_UNIT : any;
    static get INFERABLE_STATIC_VARIABLES_IN_UNIT() : any { 
        if (this.__$INFERABLE_STATIC_VARIABLES_IN_UNIT===undefined) {
            this.__$INFERABLE_STATIC_VARIABLES_IN_UNIT = new bare.createInstance(any,null,'INFERABLE_STATIC_VARIABLES_IN_UNIT',null);
        }
        return this.__$INFERABLE_STATIC_VARIABLES_IN_UNIT;
    }
    static set INFERABLE_STATIC_VARIABLES_IN_UNIT(__$value : any)  { 
        this.__$INFERABLE_STATIC_VARIABLES_IN_UNIT = __$value;
    }

    private static __$INFERRED_STATIC_VARIABLE : any;
    static get INFERRED_STATIC_VARIABLE() : any { 
        if (this.__$INFERRED_STATIC_VARIABLE===undefined) {
            this.__$INFERRED_STATIC_VARIABLE = new bare.createInstance(any,null,'INFERRED_STATIC_VARIABLE',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$INFERRED_STATIC_VARIABLE;
    }
    static set INFERRED_STATIC_VARIABLE(__$value : any)  { 
        this.__$INFERRED_STATIC_VARIABLE = __$value;
    }

    private static __$LIBRARY_CYCLE : any;
    static get LIBRARY_CYCLE() : any { 
        if (this.__$LIBRARY_CYCLE===undefined) {
            this.__$LIBRARY_CYCLE = new bare.createInstance(any,null,'LIBRARY_CYCLE',null);
        }
        return this.__$LIBRARY_CYCLE;
    }
    static set LIBRARY_CYCLE(__$value : any)  { 
        this.__$LIBRARY_CYCLE = __$value;
    }

    private static __$LIBRARY_CYCLE_DEPENDENCIES : any;
    static get LIBRARY_CYCLE_DEPENDENCIES() : any { 
        if (this.__$LIBRARY_CYCLE_DEPENDENCIES===undefined) {
            this.__$LIBRARY_CYCLE_DEPENDENCIES = new bare.createInstance(any,null,'LIBRARY_CYCLE_DEPENDENCIES',null);
        }
        return this.__$LIBRARY_CYCLE_DEPENDENCIES;
    }
    static set LIBRARY_CYCLE_DEPENDENCIES(__$value : any)  { 
        this.__$LIBRARY_CYCLE_DEPENDENCIES = __$value;
    }

    private static __$LIBRARY_CYCLE_UNITS : any;
    static get LIBRARY_CYCLE_UNITS() : any { 
        if (this.__$LIBRARY_CYCLE_UNITS===undefined) {
            this.__$LIBRARY_CYCLE_UNITS = new bare.createInstance(any,null,'LIBRARY_CYCLE_UNITS',null);
        }
        return this.__$LIBRARY_CYCLE_UNITS;
    }
    static set LIBRARY_CYCLE_UNITS(__$value : any)  { 
        this.__$LIBRARY_CYCLE_UNITS = __$value;
    }

    private static __$LIBRARY_ELEMENT1 : any;
    static get LIBRARY_ELEMENT1() : any { 
        if (this.__$LIBRARY_ELEMENT1===undefined) {
            this.__$LIBRARY_ELEMENT1 = new bare.createInstance(any,null,'LIBRARY_ELEMENT1',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT1;
    }
    static set LIBRARY_ELEMENT1(__$value : any)  { 
        this.__$LIBRARY_ELEMENT1 = __$value;
    }

    private static __$LIBRARY_ELEMENT2 : any;
    static get LIBRARY_ELEMENT2() : any { 
        if (this.__$LIBRARY_ELEMENT2===undefined) {
            this.__$LIBRARY_ELEMENT2 = new bare.createInstance(any,null,'LIBRARY_ELEMENT2',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT2;
    }
    static set LIBRARY_ELEMENT2(__$value : any)  { 
        this.__$LIBRARY_ELEMENT2 = __$value;
    }

    private static __$LIBRARY_ELEMENT3 : any;
    static get LIBRARY_ELEMENT3() : any { 
        if (this.__$LIBRARY_ELEMENT3===undefined) {
            this.__$LIBRARY_ELEMENT3 = new bare.createInstance(any,null,'LIBRARY_ELEMENT3',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT3;
    }
    static set LIBRARY_ELEMENT3(__$value : any)  { 
        this.__$LIBRARY_ELEMENT3 = __$value;
    }

    private static __$LIBRARY_ELEMENT4 : any;
    static get LIBRARY_ELEMENT4() : any { 
        if (this.__$LIBRARY_ELEMENT4===undefined) {
            this.__$LIBRARY_ELEMENT4 = new bare.createInstance(any,null,'LIBRARY_ELEMENT4',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT4;
    }
    static set LIBRARY_ELEMENT4(__$value : any)  { 
        this.__$LIBRARY_ELEMENT4 = __$value;
    }

    private static __$LIBRARY_ELEMENT5 : any;
    static get LIBRARY_ELEMENT5() : any { 
        if (this.__$LIBRARY_ELEMENT5===undefined) {
            this.__$LIBRARY_ELEMENT5 = new bare.createInstance(any,null,'LIBRARY_ELEMENT5',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT5;
    }
    static set LIBRARY_ELEMENT5(__$value : any)  { 
        this.__$LIBRARY_ELEMENT5 = __$value;
    }

    private static __$LIBRARY_ELEMENT6 : any;
    static get LIBRARY_ELEMENT6() : any { 
        if (this.__$LIBRARY_ELEMENT6===undefined) {
            this.__$LIBRARY_ELEMENT6 = new bare.createInstance(any,null,'LIBRARY_ELEMENT6',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT6;
    }
    static set LIBRARY_ELEMENT6(__$value : any)  { 
        this.__$LIBRARY_ELEMENT6 = __$value;
    }

    private static __$LIBRARY_ELEMENT7 : any;
    static get LIBRARY_ELEMENT7() : any { 
        if (this.__$LIBRARY_ELEMENT7===undefined) {
            this.__$LIBRARY_ELEMENT7 = new bare.createInstance(any,null,'LIBRARY_ELEMENT7',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT7;
    }
    static set LIBRARY_ELEMENT7(__$value : any)  { 
        this.__$LIBRARY_ELEMENT7 = __$value;
    }

    private static __$AST_CACHING_POLICY : any;
    static get AST_CACHING_POLICY() : any { 
        if (this.__$AST_CACHING_POLICY===undefined) {
            this.__$AST_CACHING_POLICY = new bare.createInstance(any,null,16384,32);
        }
        return this.__$AST_CACHING_POLICY;
    }
    static set AST_CACHING_POLICY(__$value : any)  { 
        this.__$AST_CACHING_POLICY = __$value;
    }

    private static __$LIBRARY_ELEMENT9 : any;
    static get LIBRARY_ELEMENT9() : any { 
        if (this.__$LIBRARY_ELEMENT9===undefined) {
            this.__$LIBRARY_ELEMENT9 = new bare.createInstance(any,null,'LIBRARY_ELEMENT9',null,{
                cachingPolicy : properties.ELEMENT_CACHING_POLICY});
        }
        return this.__$LIBRARY_ELEMENT9;
    }
    static set LIBRARY_ELEMENT9(__$value : any)  { 
        this.__$LIBRARY_ELEMENT9 = __$value;
    }

    private static __$LIBRARY_ELEMENT_RESULTS : core.DartList<any>;
    static get LIBRARY_ELEMENT_RESULTS() : core.DartList<any> { 
        if (this.__$LIBRARY_ELEMENT_RESULTS===undefined) {
            this.__$LIBRARY_ELEMENT_RESULTS = new core.DartList.literal<any>(properties.LIBRARY_ELEMENT1,properties.LIBRARY_ELEMENT2,properties.LIBRARY_ELEMENT3,properties.LIBRARY_ELEMENT4,properties.LIBRARY_ELEMENT5,properties.LIBRARY_ELEMENT6,properties.LIBRARY_ELEMENT7,properties.LIBRARY_ELEMENT8,properties.LIBRARY_ELEMENT9,LIBRARY_ELEMENT);
        }
        return this.__$LIBRARY_ELEMENT_RESULTS;
    }
    static set LIBRARY_ELEMENT_RESULTS(__$value : core.DartList<any>)  { 
        this.__$LIBRARY_ELEMENT_RESULTS = __$value;
    }

    private static __$LIBRARY_ERRORS_READY : any;
    static get LIBRARY_ERRORS_READY() : any { 
        if (this.__$LIBRARY_ERRORS_READY===undefined) {
            this.__$LIBRARY_ERRORS_READY = new bare.createInstance(any,null,'LIBRARY_ERRORS_READY',false);
        }
        return this.__$LIBRARY_ERRORS_READY;
    }
    static set LIBRARY_ERRORS_READY(__$value : any)  { 
        this.__$LIBRARY_ERRORS_READY = __$value;
    }

    private static __$LIBRARY_SPECIFIC_UNITS : any;
    static get LIBRARY_SPECIFIC_UNITS() : any { 
        if (this.__$LIBRARY_SPECIFIC_UNITS===undefined) {
            this.__$LIBRARY_SPECIFIC_UNITS = new bare.createInstance(any,null,'LIBRARY_SPECIFIC_UNITS',LibrarySpecificUnit.EMPTY_LIST);
        }
        return this.__$LIBRARY_SPECIFIC_UNITS;
    }
    static set LIBRARY_SPECIFIC_UNITS(__$value : any)  { 
        this.__$LIBRARY_SPECIFIC_UNITS = __$value;
    }

    private static __$LIBRARY_UNIT_ERRORS : any;
    static get LIBRARY_UNIT_ERRORS() : any { 
        if (this.__$LIBRARY_UNIT_ERRORS===undefined) {
            this.__$LIBRARY_UNIT_ERRORS = new bare.createInstance(any,null,'LIBRARY_UNIT_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$LIBRARY_UNIT_ERRORS;
    }
    static set LIBRARY_UNIT_ERRORS(__$value : any)  { 
        this.__$LIBRARY_UNIT_ERRORS = __$value;
    }

    private static __$LINTS : any;
    static get LINTS() : any { 
        if (this.__$LINTS===undefined) {
            this.__$LINTS = new bare.createInstance(any,null,'LINT_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$LINTS;
    }
    static set LINTS(__$value : any)  { 
        this.__$LINTS = __$value;
    }

    private static __$PARSE_ERRORS : any;
    static get PARSE_ERRORS() : any { 
        if (this.__$PARSE_ERRORS===undefined) {
            this.__$PARSE_ERRORS = new bare.createInstance(any,null,'PARSE_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$PARSE_ERRORS;
    }
    static set PARSE_ERRORS(__$value : any)  { 
        this.__$PARSE_ERRORS = __$value;
    }

    private static __$PENDING_ERRORS : any;
    static get PENDING_ERRORS() : any { 
        if (this.__$PENDING_ERRORS===undefined) {
            this.__$PENDING_ERRORS = new bare.createInstance(any,null,'PENDING_ERRORS',new core.DartList.literal<any>());
        }
        return this.__$PENDING_ERRORS;
    }
    static set PENDING_ERRORS(__$value : any)  { 
        this.__$PENDING_ERRORS = __$value;
    }

    private static __$READY_LIBRARY_ELEMENT2 : any;
    static get READY_LIBRARY_ELEMENT2() : any { 
        if (this.__$READY_LIBRARY_ELEMENT2===undefined) {
            this.__$READY_LIBRARY_ELEMENT2 = new bare.createInstance(any,null,'READY_LIBRARY_ELEMENT2',false);
        }
        return this.__$READY_LIBRARY_ELEMENT2;
    }
    static set READY_LIBRARY_ELEMENT2(__$value : any)  { 
        this.__$READY_LIBRARY_ELEMENT2 = __$value;
    }

    private static __$READY_LIBRARY_ELEMENT6 : any;
    static get READY_LIBRARY_ELEMENT6() : any { 
        if (this.__$READY_LIBRARY_ELEMENT6===undefined) {
            this.__$READY_LIBRARY_ELEMENT6 = new bare.createInstance(any,null,'READY_LIBRARY_ELEMENT6',false);
        }
        return this.__$READY_LIBRARY_ELEMENT6;
    }
    static set READY_LIBRARY_ELEMENT6(__$value : any)  { 
        this.__$READY_LIBRARY_ELEMENT6 = __$value;
    }

    private static __$READY_LIBRARY_ELEMENT7 : any;
    static get READY_LIBRARY_ELEMENT7() : any { 
        if (this.__$READY_LIBRARY_ELEMENT7===undefined) {
            this.__$READY_LIBRARY_ELEMENT7 = new bare.createInstance(any,null,'READY_LIBRARY_ELEMENT7',false);
        }
        return this.__$READY_LIBRARY_ELEMENT7;
    }
    static set READY_LIBRARY_ELEMENT7(__$value : any)  { 
        this.__$READY_LIBRARY_ELEMENT7 = __$value;
    }

    private static __$READY_RESOLVED_UNIT : any;
    static get READY_RESOLVED_UNIT() : any { 
        if (this.__$READY_RESOLVED_UNIT===undefined) {
            this.__$READY_RESOLVED_UNIT = new bare.createInstance(any,null,'READY_RESOLVED_UNIT',false);
        }
        return this.__$READY_RESOLVED_UNIT;
    }
    static set READY_RESOLVED_UNIT(__$value : any)  { 
        this.__$READY_RESOLVED_UNIT = __$value;
    }

    private static __$REFERENCED_SOURCES : any;
    static get REFERENCED_SOURCES() : any { 
        if (this.__$REFERENCED_SOURCES===undefined) {
            this.__$REFERENCED_SOURCES = new bare.createInstance(any,null,'REFERENCED_SOURCES',Source.EMPTY_LIST);
        }
        return this.__$REFERENCED_SOURCES;
    }
    static set REFERENCED_SOURCES(__$value : any)  { 
        this.__$REFERENCED_SOURCES = __$value;
    }

    private static __$REQUIRED_CONSTANTS : any;
    static get REQUIRED_CONSTANTS() : any { 
        if (this.__$REQUIRED_CONSTANTS===undefined) {
            this.__$REQUIRED_CONSTANTS = new bare.createInstance(any,null,'REQUIRED_CONSTANTS',new core.DartList.literal<ConstantEvaluationTarget>());
        }
        return this.__$REQUIRED_CONSTANTS;
    }
    static set REQUIRED_CONSTANTS(__$value : any)  { 
        this.__$REQUIRED_CONSTANTS = __$value;
    }

    private static __$RESOLVE_DIRECTIVES_ERRORS : any;
    static get RESOLVE_DIRECTIVES_ERRORS() : any { 
        if (this.__$RESOLVE_DIRECTIVES_ERRORS===undefined) {
            this.__$RESOLVE_DIRECTIVES_ERRORS = new bare.createInstance(any,null,'RESOLVE_DIRECTIVES_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$RESOLVE_DIRECTIVES_ERRORS;
    }
    static set RESOLVE_DIRECTIVES_ERRORS(__$value : any)  { 
        this.__$RESOLVE_DIRECTIVES_ERRORS = __$value;
    }

    private static __$RESOLVE_TYPE_BOUNDS_ERRORS : any;
    static get RESOLVE_TYPE_BOUNDS_ERRORS() : any { 
        if (this.__$RESOLVE_TYPE_BOUNDS_ERRORS===undefined) {
            this.__$RESOLVE_TYPE_BOUNDS_ERRORS = new bare.createInstance(any,null,'RESOLVE_TYPE_BOUNDS_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$RESOLVE_TYPE_BOUNDS_ERRORS;
    }
    static set RESOLVE_TYPE_BOUNDS_ERRORS(__$value : any)  { 
        this.__$RESOLVE_TYPE_BOUNDS_ERRORS = __$value;
    }

    private static __$RESOLVE_TYPE_NAMES_ERRORS : any;
    static get RESOLVE_TYPE_NAMES_ERRORS() : any { 
        if (this.__$RESOLVE_TYPE_NAMES_ERRORS===undefined) {
            this.__$RESOLVE_TYPE_NAMES_ERRORS = new bare.createInstance(any,null,'RESOLVE_TYPE_NAMES_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$RESOLVE_TYPE_NAMES_ERRORS;
    }
    static set RESOLVE_TYPE_NAMES_ERRORS(__$value : any)  { 
        this.__$RESOLVE_TYPE_NAMES_ERRORS = __$value;
    }

    private static __$RESOLVE_UNIT_ERRORS : any;
    static get RESOLVE_UNIT_ERRORS() : any { 
        if (this.__$RESOLVE_UNIT_ERRORS===undefined) {
            this.__$RESOLVE_UNIT_ERRORS = new bare.createInstance(any,null,'RESOLVE_UNIT_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$RESOLVE_UNIT_ERRORS;
    }
    static set RESOLVE_UNIT_ERRORS(__$value : any)  { 
        this.__$RESOLVE_UNIT_ERRORS = __$value;
    }

    private static __$RESOLVED_UNIT1 : any;
    static get RESOLVED_UNIT1() : any { 
        if (this.__$RESOLVED_UNIT1===undefined) {
            this.__$RESOLVED_UNIT1 = new bare.createInstance(any,null,'RESOLVED_UNIT1',null,{
                cachingPolicy : properties.AST_REUSABLE_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT1;
    }
    static set RESOLVED_UNIT1(__$value : any)  { 
        this.__$RESOLVED_UNIT1 = __$value;
    }

    private static __$RESOLVED_UNIT10 : any;
    static get RESOLVED_UNIT10() : any { 
        if (this.__$RESOLVED_UNIT10===undefined) {
            this.__$RESOLVED_UNIT10 = new bare.createInstance(any,null,'RESOLVED_UNIT10',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT10;
    }
    static set RESOLVED_UNIT10(__$value : any)  { 
        this.__$RESOLVED_UNIT10 = __$value;
    }

    private static __$RESOLVED_UNIT11 : any;
    static get RESOLVED_UNIT11() : any { 
        if (this.__$RESOLVED_UNIT11===undefined) {
            this.__$RESOLVED_UNIT11 = new bare.createInstance(any,null,'RESOLVED_UNIT11',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT11;
    }
    static set RESOLVED_UNIT11(__$value : any)  { 
        this.__$RESOLVED_UNIT11 = __$value;
    }

    private static __$RESOLVED_UNIT12 : any;
    static get RESOLVED_UNIT12() : any { 
        if (this.__$RESOLVED_UNIT12===undefined) {
            this.__$RESOLVED_UNIT12 = new bare.createInstance(any,null,'RESOLVED_UNIT12',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT12;
    }
    static set RESOLVED_UNIT12(__$value : any)  { 
        this.__$RESOLVED_UNIT12 = __$value;
    }

    private static __$RESOLVED_UNIT2 : any;
    static get RESOLVED_UNIT2() : any { 
        if (this.__$RESOLVED_UNIT2===undefined) {
            this.__$RESOLVED_UNIT2 = new bare.createInstance(any,null,'RESOLVED_UNIT2',null,{
                cachingPolicy : properties.AST_REUSABLE_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT2;
    }
    static set RESOLVED_UNIT2(__$value : any)  { 
        this.__$RESOLVED_UNIT2 = __$value;
    }

    private static __$RESOLVED_UNIT3 : any;
    static get RESOLVED_UNIT3() : any { 
        if (this.__$RESOLVED_UNIT3===undefined) {
            this.__$RESOLVED_UNIT3 = new bare.createInstance(any,null,'RESOLVED_UNIT3',null,{
                cachingPolicy : properties.AST_REUSABLE_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT3;
    }
    static set RESOLVED_UNIT3(__$value : any)  { 
        this.__$RESOLVED_UNIT3 = __$value;
    }

    private static __$RESOLVED_UNIT4 : any;
    static get RESOLVED_UNIT4() : any { 
        if (this.__$RESOLVED_UNIT4===undefined) {
            this.__$RESOLVED_UNIT4 = new bare.createInstance(any,null,'RESOLVED_UNIT4',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT4;
    }
    static set RESOLVED_UNIT4(__$value : any)  { 
        this.__$RESOLVED_UNIT4 = __$value;
    }

    private static __$RESOLVED_UNIT5 : any;
    static get RESOLVED_UNIT5() : any { 
        if (this.__$RESOLVED_UNIT5===undefined) {
            this.__$RESOLVED_UNIT5 = new bare.createInstance(any,null,'RESOLVED_UNIT5',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT5;
    }
    static set RESOLVED_UNIT5(__$value : any)  { 
        this.__$RESOLVED_UNIT5 = __$value;
    }

    private static __$RESOLVED_UNIT6 : any;
    static get RESOLVED_UNIT6() : any { 
        if (this.__$RESOLVED_UNIT6===undefined) {
            this.__$RESOLVED_UNIT6 = new bare.createInstance(any,null,'RESOLVED_UNIT6',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT6;
    }
    static set RESOLVED_UNIT6(__$value : any)  { 
        this.__$RESOLVED_UNIT6 = __$value;
    }

    private static __$RESOLVED_UNIT7 : any;
    static get RESOLVED_UNIT7() : any { 
        if (this.__$RESOLVED_UNIT7===undefined) {
            this.__$RESOLVED_UNIT7 = new bare.createInstance(any,null,'RESOLVED_UNIT7',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT7;
    }
    static set RESOLVED_UNIT7(__$value : any)  { 
        this.__$RESOLVED_UNIT7 = __$value;
    }

    private static __$RESOLVED_UNIT8 : any;
    static get RESOLVED_UNIT8() : any { 
        if (this.__$RESOLVED_UNIT8===undefined) {
            this.__$RESOLVED_UNIT8 = new bare.createInstance(any,null,'RESOLVED_UNIT8',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT8;
    }
    static set RESOLVED_UNIT8(__$value : any)  { 
        this.__$RESOLVED_UNIT8 = __$value;
    }

    private static __$RESOLVED_UNIT9 : any;
    static get RESOLVED_UNIT9() : any { 
        if (this.__$RESOLVED_UNIT9===undefined) {
            this.__$RESOLVED_UNIT9 = new bare.createInstance(any,null,'RESOLVED_UNIT9',null,{
                cachingPolicy : properties.AST_CACHING_POLICY});
        }
        return this.__$RESOLVED_UNIT9;
    }
    static set RESOLVED_UNIT9(__$value : any)  { 
        this.__$RESOLVED_UNIT9 = __$value;
    }

    private static __$RESOLVED_UNIT_RESULTS : core.DartList<any>;
    static get RESOLVED_UNIT_RESULTS() : core.DartList<any> { 
        if (this.__$RESOLVED_UNIT_RESULTS===undefined) {
            this.__$RESOLVED_UNIT_RESULTS = new core.DartList.literal<any>(properties.RESOLVED_UNIT1,properties.RESOLVED_UNIT2,properties.RESOLVED_UNIT3,properties.RESOLVED_UNIT4,properties.RESOLVED_UNIT5,properties.RESOLVED_UNIT6,properties.RESOLVED_UNIT7,properties.RESOLVED_UNIT8,properties.RESOLVED_UNIT9,properties.RESOLVED_UNIT10,properties.RESOLVED_UNIT11,properties.RESOLVED_UNIT12,RESOLVED_UNIT);
        }
        return this.__$RESOLVED_UNIT_RESULTS;
    }
    static set RESOLVED_UNIT_RESULTS(__$value : core.DartList<any>)  { 
        this.__$RESOLVED_UNIT_RESULTS = __$value;
    }

    private static __$SCAN_ERRORS : any;
    static get SCAN_ERRORS() : any { 
        if (this.__$SCAN_ERRORS===undefined) {
            this.__$SCAN_ERRORS = new bare.createInstance(any,null,'SCAN_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$SCAN_ERRORS;
    }
    static set SCAN_ERRORS(__$value : any)  { 
        this.__$SCAN_ERRORS = __$value;
    }

    private static __$STATIC_VARIABLE_RESOLUTION_ERRORS : any;
    static get STATIC_VARIABLE_RESOLUTION_ERRORS() : any { 
        if (this.__$STATIC_VARIABLE_RESOLUTION_ERRORS===undefined) {
            this.__$STATIC_VARIABLE_RESOLUTION_ERRORS = new bare.createInstance(any,null,'STATIC_VARIABLE_RESOLUTION_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$STATIC_VARIABLE_RESOLUTION_ERRORS;
    }
    static set STATIC_VARIABLE_RESOLUTION_ERRORS(__$value : any)  { 
        this.__$STATIC_VARIABLE_RESOLUTION_ERRORS = __$value;
    }

    private static __$STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT : any;
    static get STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT() : any { 
        if (this.__$STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT===undefined) {
            this.__$STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT = new bare.createInstance(any,null,'STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT',AnalysisError.NO_ERRORS);
        }
        return this.__$STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT;
    }
    static set STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT(__$value : any)  { 
        this.__$STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT = __$value;
    }

    private static __$STRONG_MODE_ERRORS : any;
    static get STRONG_MODE_ERRORS() : any { 
        if (this.__$STRONG_MODE_ERRORS===undefined) {
            this.__$STRONG_MODE_ERRORS = new bare.createInstance(any,null,'STRONG_MODE_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$STRONG_MODE_ERRORS;
    }
    static set STRONG_MODE_ERRORS(__$value : any)  { 
        this.__$STRONG_MODE_ERRORS = __$value;
    }

    private static __$TYPE_PROVIDER : any;
    static get TYPE_PROVIDER() : any { 
        if (this.__$TYPE_PROVIDER===undefined) {
            this.__$TYPE_PROVIDER = new bare.createInstance(any,null,'TYPE_PROVIDER',null);
        }
        return this.__$TYPE_PROVIDER;
    }
    static set TYPE_PROVIDER(__$value : any)  { 
        this.__$TYPE_PROVIDER = __$value;
    }

    private static __$USED_IMPORTED_ELEMENTS : any;
    static get USED_IMPORTED_ELEMENTS() : any { 
        if (this.__$USED_IMPORTED_ELEMENTS===undefined) {
            this.__$USED_IMPORTED_ELEMENTS = new bare.createInstance(any,null,'USED_IMPORTED_ELEMENTS',null,{
                cachingPolicy : properties.USED_IMPORTED_ELEMENTS_POLICY});
        }
        return this.__$USED_IMPORTED_ELEMENTS;
    }
    static set USED_IMPORTED_ELEMENTS(__$value : any)  { 
        this.__$USED_IMPORTED_ELEMENTS = __$value;
    }

    private static __$USED_LOCAL_ELEMENTS : any;
    static get USED_LOCAL_ELEMENTS() : any { 
        if (this.__$USED_LOCAL_ELEMENTS===undefined) {
            this.__$USED_LOCAL_ELEMENTS = new bare.createInstance(any,null,'USED_LOCAL_ELEMENTS',null,{
                cachingPolicy : properties.USED_LOCAL_ELEMENTS_POLICY});
        }
        return this.__$USED_LOCAL_ELEMENTS;
    }
    static set USED_LOCAL_ELEMENTS(__$value : any)  { 
        this.__$USED_LOCAL_ELEMENTS = __$value;
    }

    private static __$VARIABLE_REFERENCE_ERRORS : any;
    static get VARIABLE_REFERENCE_ERRORS() : any { 
        if (this.__$VARIABLE_REFERENCE_ERRORS===undefined) {
            this.__$VARIABLE_REFERENCE_ERRORS = new bare.createInstance(any,null,'VARIABLE_REFERENCE_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$VARIABLE_REFERENCE_ERRORS;
    }
    static set VARIABLE_REFERENCE_ERRORS(__$value : any)  { 
        this.__$VARIABLE_REFERENCE_ERRORS = __$value;
    }

    private static __$VERIFY_ERRORS : any;
    static get VERIFY_ERRORS() : any { 
        if (this.__$VERIFY_ERRORS===undefined) {
            this.__$VERIFY_ERRORS = new bare.createInstance(any,null,'VERIFY_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$VERIFY_ERRORS;
    }
    static set VERIFY_ERRORS(__$value : any)  { 
        this.__$VERIFY_ERRORS = __$value;
    }

}
