/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/resolver/inheritance_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace InheritanceManager {
    export type Constructors = 'InheritanceManager';
    export type Interface = Omit<InheritanceManager, Constructors>;
}
@DartClass
export class InheritanceManager {
    _library : any;

    _includeAbstractFromSuperclasses : boolean;

    _classLookup : core.DartMap<any,core.DartMap<string,any>>;

    _interfaceLookup : core.DartMap<any,core.DartMap<string,any>>;

    _errorsInClassElement : core.DartMap<any,core.DartSet<any>>;

    ignoreErrors : boolean;

    constructor(library : any,_namedArguments? : {includeAbstractFromSuperclasses? : boolean,ignoreErrors? : boolean}) {
    }
    @defaultConstructor
    InheritanceManager(library : any,_namedArguments? : {includeAbstractFromSuperclasses? : boolean,ignoreErrors? : boolean}) {
        let {includeAbstractFromSuperclasses,ignoreErrors} = Object.assign({
            "includeAbstractFromSuperclasses" : false,
            "ignoreErrors" : false}, _namedArguments );
        this._errorsInClassElement = new core.DartHashMap<any,core.DartSet<any>>();
        this.ignoreErrors = ignoreErrors;
        this._library = library;
        this._includeAbstractFromSuperclasses = includeAbstractFromSuperclasses;
        this._classLookup = new core.DartHashMap<any,core.DartMap<string,any>>();
        this._interfaceLookup = new core.DartHashMap<any,core.DartMap<string,any>>();
    }
    set libraryElement(library : any) {
        this._library = library;
    }
    getErrors(classElt : any) : core.DartSet<any> {
        return this._errorsInClassElement.get(classElt);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    getMapOfMembersInheritedFromClasses(classElt : any) : MemberMap {
        return new MemberMap.fromMap(this._computeClassChainLookupMap(classElt,new core.DartHashSet<any>()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    getMapOfMembersInheritedFromInterfaces(classElt : any) : MemberMap {
        return new MemberMap.fromMap(this._computeInterfaceLookupMap(classElt,new core.DartHashSet<any>()));
    }
    getMembersInheritedFromClasses(classElt : any) : core.DartMap<string,any> {
        return this._computeClassChainLookupMap(classElt,new core.DartHashSet<any>());
    }
    getMembersInheritedFromInterfaces(classElt : any) : core.DartMap<string,any> {
        return this._computeInterfaceLookupMap(classElt,new core.DartHashSet<any>());
    }
    lookupInheritance(classElt : any,memberName : string) : any {
        if (memberName == null || new core.DartString(memberName).isEmpty) {
            return null;
        }
        let executable : any = this._computeClassChainLookupMap(classElt,new core.DartHashSet<any>()).get(memberName);
        if (op(Op.EQUALS,executable,null)) {
            return this._computeInterfaceLookupMap(classElt,new core.DartHashSet<any>()).get(memberName);
        }
        return executable;
    }
    lookupMember(classElt : any,memberName : string) : any {
        let element : any = this._lookupMemberInClass(classElt,memberName);
        if (element != null) {
            return element;
        }
        return this.lookupInheritance(classElt,memberName);
    }
    lookupOverrides(classElt : any,memberName : string) : core.DartList<any> {
        let result : core.DartList<any> = new core.DartList<any>();
        if (memberName == null || new core.DartString(memberName).isEmpty) {
            return result;
        }
        let interfaceMaps : core.DartList<core.DartMap<string,any>> = this._gatherInterfaceLookupMaps(classElt,new core.DartHashSet<any>());
        if (interfaceMaps != null) {
            for(let interfaceMap of interfaceMaps) {
                let overriddenElement : any = interfaceMap.get(memberName);
                if (overriddenElement != null) {
                    if (is(overriddenElement, any)) {
                        for(let element of overriddenElement.inheritedElements) {
                            result.add(element);
                        }
                    }else {
                        result.add(overriddenElement);
                    }
                }
            }
        }
        return result;
    }
    substituteTypeArgumentsInMemberFromInheritance(baseFunctionType : any,memberName : string,definingType : any) : any {
        if (op(Op.EQUALS,baseFunctionType,null) || op(Op.EQUALS,baseFunctionType.typeArguments.length,0)) {
            return baseFunctionType;
        }
        let inheritancePath : collection.Queue<any> = new collection.Queue<any>();
        this._computeInheritancePath(inheritancePath,definingType,memberName);
        if (op(Op.EQUALS,inheritancePath,null) || inheritancePath.isEmpty) {
            return baseFunctionType;
        }
        let functionTypeToReturn : any = baseFunctionType;
        while (!inheritancePath.isEmpty){
            let lastType : any = inheritancePath.removeLast();
            let parameterTypes : core.DartList<any> = lastType.element.type.typeArguments;
            let argumentTypes : core.DartList<any> = lastType.typeArguments;
            functionTypeToReturn = functionTypeToReturn.substitute2(argumentTypes,parameterTypes);
        }
        return functionTypeToReturn;
    }
    _computeClassChainLookupMap(classElt : any,visitedClasses : core.DartSet<any>) : core.DartMap<string,any> {
        let resultMap : core.DartMap<string,any> = this._classLookup.get(classElt);
        if (resultMap != null) {
            return resultMap;
        }else {
            resultMap = new core.DartMap<string,any>();
        }
        let supertype : any = classElt.supertype;
        if (op(Op.EQUALS,supertype,null)) {
            this._classLookup.set(classElt,resultMap);
            return resultMap;
        }
        let superclassElt : any = supertype.element;
        if (superclassElt != null) {
            if (!visitedClasses.contains(superclassElt)) {
                visitedClasses.add(superclassElt);
                try {
                    resultMap = new core.DartMap.from(this._computeClassChainLookupMap(superclassElt,visitedClasses));
                    this._substituteTypeParametersDownHierarchy(supertype,resultMap);
                    this._recordMapWithClassMembers(resultMap,supertype,this._includeAbstractFromSuperclasses);
                } finally {
                    visitedClasses.remove(superclassElt);
                }
            }else {
                this._classLookup.set(superclassElt,resultMap);
                return resultMap;
            }
        }
        let mixins : core.DartList<any> = classElt.mixins;
        for(let mixin of mixins) {
            let mixinElement : any = mixin.element;
            if (mixinElement != null) {
                if (!visitedClasses.contains(mixinElement)) {
                    visitedClasses.add(mixinElement);
                    try {
                        let map : core.DartMap<string,any> = new core.DartMap<string,any>();
                        this._recordMapWithClassMembers(map,mixin,this._includeAbstractFromSuperclasses);
                        for(let memberName of map.keys) {
                            let value : any = map.get(memberName);
                            let definingClass : any = value.getAncestor((element : any) =>  {
                                return is(element, any);
                            });
                            if (!definingClass.type.isObject) {
                                let existingValue : any = resultMap.get(memberName);
                                if (op(Op.EQUALS,existingValue,null) || (existingValue != null && !InheritanceManager._isAbstract(value))) {
                                    resultMap.set(memberName,value);
                                }
                            }
                        }
                    } finally {
                        visitedClasses.remove(mixinElement);
                    }
                }else {
                    this._classLookup.set(mixinElement,resultMap);
                    return resultMap;
                }
            }
        }
        this._classLookup.set(classElt,resultMap);
        return resultMap;
    }
    _computeInheritancePath(chain : collection.Queue<any>,currentType : any,memberName : string) : void {
        chain.add(currentType);
        let classElt : any = currentType.element;
        let supertype : any = classElt.supertype;
        if (op(Op.EQUALS,supertype,null)) {
            return;
        }
        if (chain.length != 1) {
            if (this._lookupMemberInClass(classElt,memberName) != null) {
                return;
            }
        }
        let mixins : core.DartList<any> = classElt.mixins;
        for(let i : number = mixins.length - 1; i >= 0; i--){
            let mixinElement : any = mixins[i].element;
            if (mixinElement != null) {
                let elt : any = this._lookupMemberInClass(mixinElement,memberName);
                if (elt != null) {
                    chain.add(mixins[i]);
                    return;
                }
            }
        }
        let superclassElt : any = supertype.element;
        if (this.lookupMember(superclassElt,memberName) != null) {
            this._computeInheritancePath(chain,supertype,memberName);
            return;
        }
        let interfaces : core.DartList<any> = classElt.interfaces;
        for(let interfaceType of interfaces) {
            let interfaceElement : any = interfaceType.element;
            if (interfaceElement != null && this.lookupMember(interfaceElement,memberName) != null) {
                this._computeInheritancePath(chain,interfaceType,memberName);
                return;
            }
        }
    }
    _computeInterfaceLookupMap(classElt : any,visitedInterfaces : core.DartHashSet<any>) : core.DartMap<string,any> {
        let resultMap : core.DartMap<string,any> = this._interfaceLookup.get(classElt);
        if (resultMap != null) {
            return resultMap;
        }
        let lookupMaps : core.DartList<core.DartMap<string,any>> = this._gatherInterfaceLookupMaps(classElt,visitedInterfaces);
        if (lookupMaps == null) {
            resultMap = new core.DartMap<string,any>();
        }else {
            let unionMap : core.DartHashMap<string,core.DartList<any>> = this._unionInterfaceLookupMaps(lookupMaps);
            resultMap = this._resolveInheritanceLookup(classElt,unionMap);
        }
        this._interfaceLookup.set(classElt,resultMap);
        return resultMap;
    }
    _gatherInterfaceLookupMaps(classElt : any,visitedInterfaces : core.DartHashSet<any>) : core.DartList<core.DartMap<string,any>> {
        let supertype : any = classElt.supertype;
        let superclassElement : any = ((t)=>(!!t)?t.element:null)(supertype);
        let mixins : core.DartList<any> = classElt.mixins;
        let interfaces : core.DartList<any> = classElt.interfaces;
        let lookupMaps : core.DartList<core.DartMap<string,any>> = new core.DartList<core.DartMap<string,any>>();
        if (superclassElement != null) {
            if (!visitedInterfaces.contains(superclassElement)) {
                try {
                    visitedInterfaces.add(superclassElement);
                    let map : core.DartMap<string,any> = this._computeInterfaceLookupMap(superclassElement,visitedInterfaces);
                    map = new core.DartMap.from(map);
                    this._substituteTypeParametersDownHierarchy(supertype,map);
                    this._recordMapWithClassMembers(map,supertype,true);
                    lookupMaps.add(map);
                } finally {
                    visitedInterfaces.remove(superclassElement);
                }
            }else {
                return null;
            }
        }
        for(let i : number = mixins.length - 1; i >= 0; i--){
            let mixinType : any = mixins[i];
            let mixinElement : any = mixinType.element;
            if (mixinElement != null) {
                if (!visitedInterfaces.contains(mixinElement)) {
                    try {
                        visitedInterfaces.add(mixinElement);
                        let map : core.DartMap<string,any> = this._computeInterfaceLookupMap(mixinElement,visitedInterfaces);
                        map = new core.DartMap.from(map);
                        this._substituteTypeParametersDownHierarchy(mixinType,map);
                        this._recordMapWithClassMembers(map,mixinType,true);
                        lookupMaps.add(map);
                    } finally {
                        visitedInterfaces.remove(mixinElement);
                    }
                }else {
                    return null;
                }
            }
        }
        let interfaceLength : number = interfaces.length;
        for(let i : number = 0; i < interfaceLength; i++){
            let interfaceType : any = interfaces[i];
            let interfaceElement : any = interfaceType.element;
            if (interfaceElement != null) {
                if (!visitedInterfaces.contains(interfaceElement)) {
                    try {
                        visitedInterfaces.add(interfaceElement);
                        let map : core.DartMap<string,any> = this._computeInterfaceLookupMap(interfaceElement,visitedInterfaces);
                        map = new core.DartMap.from(map);
                        this._substituteTypeParametersDownHierarchy(interfaceType,map);
                        this._recordMapWithClassMembers(map,interfaceType,true);
                        lookupMaps.add(map);
                    } finally {
                        visitedInterfaces.remove(interfaceElement);
                    }
                }else {
                    return null;
                }
            }
        }
        if (lookupMaps.length == 0) {
            return null;
        }
        return lookupMaps;
    }
    _lookupMemberInClass(classElement : any,memberName : string) : any {
        let methods : core.DartList<any> = classElement.methods;
        let methodLength : number = methods.length;
        for(let i : number = 0; i < methodLength; i++){
            let method : any = methods[i];
            if (memberName == method.name && method.isAccessibleIn(this._library) && !method.isStatic) {
                return method;
            }
        }
        let accessors : core.DartList<any> = classElement.accessors;
        let accessorLength : number = accessors.length;
        for(let i : number = 0; i < accessorLength; i++){
            let accessor : any = accessors[i];
            if (memberName == accessor.name && accessor.isAccessibleIn(this._library) && !accessor.isStatic) {
                return accessor;
            }
        }
        return null;
    }
    _recordMapWithClassMembers(map : core.DartMap<string,any>,type : any,doIncludeAbstract : boolean) : void {
        let seenTypes : core.DartSet<any> = new core.DartHashSet<any>();
        while (type.element.isMixinApplication){
            let mixins : core.DartList<any> = type.mixins;
            if (!seenTypes.add(type) || mixins.isEmpty) {
                return;
            }
            type = mixins.last;
        }
        let methods : core.DartList<any> = type.methods;
        for(let method of methods) {
            if (method.isAccessibleIn(this._library) && !method.isStatic && (doIncludeAbstract || !method.isAbstract)) {
                map.set(method.name,method);
            }
        }
        let accessors : core.DartList<any> = type.accessors;
        for(let accessor of accessors) {
            if (accessor.isAccessibleIn(this._library) && !accessor.isStatic && (doIncludeAbstract || !accessor.isAbstract)) {
                map.set(accessor.name,accessor);
            }
        }
    }
    _reportError(classElt : any,errorCode : any,arguments : core.DartList<core.DartObject>) : void {
        if (this.ignoreErrors) {
            return;
        }
        let errorSet : core.DartHashSet<any> = this._errorsInClassElement.putIfAbsent(classElt,() =>  {
            return new core.DartHashSet<any>();
        });
        errorSet.add(new bare.createInstance(any,null,classElt.source,classElt.nameOffset,classElt.nameLength,errorCode,arguments));
    }
    _resolveInheritanceLookup(classElt : any,unionMap : core.DartMap<string,core.DartList<any>>) : core.DartMap<string,any> {
        let resultMap : core.DartMap<string,any> = new core.DartMap<string,any>();
        unionMap.forEach((key : string,list : core.DartList<any>) =>  {
            let numOfEltsWithMatchingNames : number = list.length;
            if (numOfEltsWithMatchingNames == 1) {
                resultMap.set(key,list[0]);
            }else {
                let allMethods : boolean = true;
                let allSetters : boolean = true;
                let allGetters : boolean = true;
                for(let executableElement of list) {
                    if (is(executableElement, any)) {
                        allMethods = false;
                        if (executableElement.isSetter) {
                            allGetters = false;
                        }else {
                            allSetters = false;
                        }
                    }else {
                        allGetters = false;
                        allSetters = false;
                    }
                }
                if (allMethods || allGetters || allSetters) {
                    let elements : core.DartList<any> = new core.DartList.from(list);
                    let executableElementTypes : core.DartList<any> = new core.DartList<any>(numOfEltsWithMatchingNames);
                    for(let i : number = 0; i < numOfEltsWithMatchingNames; i++){
                        executableElementTypes[i] = elements[i].type;
                    }
                    let subtypesOfAllOtherTypesIndexes : core.DartList<number> = new core.DartList<number>();
                    for(let i : number = 0; i < numOfEltsWithMatchingNames; i++){
                        let subtype : any = executableElementTypes[i];
                        if (op(Op.EQUALS,subtype,null)) {
                            continue;
                        }
                        let subtypeOfAllTypes : boolean = true;
                        let typeSystem : any = this._library.context.typeSystem;
                        for(let j : number = 0; j < numOfEltsWithMatchingNames && subtypeOfAllTypes; j++){
                            if (i != j) {
                                if (!typeSystem.isSubtypeOf(subtype,executableElementTypes[j])) {
                                    subtypeOfAllTypes = false;
                                    break;
                                }
                            }
                        }
                        if (subtypeOfAllTypes) {
                            subtypesOfAllOtherTypesIndexes.add(i);
                        }
                    }
                    if (subtypesOfAllOtherTypesIndexes.length == 1) {
                        resultMap.set(key,elements[subtypesOfAllOtherTypesIndexes[0]]);
                    }else {
                        if (subtypesOfAllOtherTypesIndexes.isEmpty) {
                            let classHasMember : boolean = false;
                            if (allMethods) {
                                classHasMember = classElt.getMethod(key) != null;
                            }else {
                                let accessors : core.DartList<any> = classElt.accessors;
                                for(let i : number = 0; i < accessors.length; i++){
                                    if (op(Op.EQUALS,accessors[i].name,key)) {
                                        classHasMember = true;
                                    }
                                }
                            }
                            if (!classHasMember) {
                                let firstTwoFuntionTypesStr : string = `${executableElementTypes[0]}, ${executableElementTypes[1]}`;
                                this._reportError(classElt,StaticTypeWarningCode.INCONSISTENT_METHOD_INHERITANCE,new core.DartList.literal(key,firstTwoFuntionTypesStr));
                            }
                        }else {
                            let elementArrayToMerge : core.DartList<any> = new core.DartList<any>(subtypesOfAllOtherTypesIndexes.length);
                            for(let i : number = 0; i < elementArrayToMerge.length; i++){
                                elementArrayToMerge[i] = elements[subtypesOfAllOtherTypesIndexes[i]];
                            }
                            let mergedExecutableElement : any = InheritanceManager._computeMergedExecutableElement(elementArrayToMerge);
                            resultMap.set(key,mergedExecutableElement);
                        }
                    }
                }else {
                    this._reportError(classElt,StaticWarningCode.INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD,new core.DartList.literal(key));
                }
            }
        });
        return resultMap;
    }
    _substituteTypeParametersDownHierarchy(superType : any,map : core.DartMap<string,any>) : void {
        for(let memberName of map.keys) {
            let executableElement : any = map.get(memberName);
            if (is(executableElement, any)) {
                map.set(memberName,MethodMember.from(executableElement,superType));
            }else if (is(executableElement, any)) {
                map.set(memberName,PropertyAccessorMember.from(executableElement,superType));
            }
        }
    }
    _unionInterfaceLookupMaps(lookupMaps : core.DartList<core.DartMap<string,any>>) : core.DartHashMap<string,core.DartList<any>> {
        let unionMap : core.DartHashMap<string,core.DartList<any>> = new core.DartHashMap<string,core.DartList<any>>();
        for(let lookupMap of lookupMaps) {
            for(let memberName of lookupMap.keys) {
                let list : core.DartList<any> = unionMap.putIfAbsent(memberName,() =>  {
                    return new core.DartList<any>();
                });
                let newExecutableElementEntry : any = lookupMap.get(memberName);
                if (list.isEmpty) {
                    list.add(newExecutableElementEntry);
                }else {
                    let alreadyInList : boolean = false;
                    let isMethod1 : boolean = is(newExecutableElementEntry, any);
                    for(let executableElementInList of list) {
                        let isMethod2 : boolean = is(executableElementInList, any);
                        if (isMethod1 == isMethod2 && op(Op.EQUALS,executableElementInList.type,newExecutableElementEntry.type)) {
                            alreadyInList = true;
                            break;
                        }
                    }
                    if (!alreadyInList) {
                        list.add(newExecutableElementEntry);
                    }
                }
            }
        }
        return unionMap;
    }
    static _computeMergedExecutableElement(elementArrayToMerge : core.DartList<any>) : any {
        let h : number = InheritanceManager._getNumOfPositionalParameters(elementArrayToMerge[0]);
        let r : number = InheritanceManager._getNumOfRequiredParameters(elementArrayToMerge[0]);
        let namedParametersList : core.DartSet<string> = new core.DartHashSet<string>();
        for(let i : number = 1; i < elementArrayToMerge.length; i++){
            let element : any = elementArrayToMerge[i];
            let numOfPositionalParams : number = InheritanceManager._getNumOfPositionalParameters(element);
            if (h < numOfPositionalParams) {
                h = numOfPositionalParams;
            }
            let numOfRequiredParams : number = InheritanceManager._getNumOfRequiredParameters(element);
            if (r > numOfRequiredParams) {
                r = numOfRequiredParams;
            }
            namedParametersList.addAll(InheritanceManager._getNamedParameterNames(element));
        }
        return InheritanceManager._createSyntheticExecutableElement(elementArrayToMerge,elementArrayToMerge[0].displayName,r,h - r,new core.DartList.from(namedParametersList));
    }
    static _createSyntheticExecutableElement(elementArrayToMerge : core.DartList<any>,name : string,numOfRequiredParameters : number,numOfPositionalParameters : number,namedParameters : core.DartList<string>) : any {
        let dynamicType : any = DynamicTypeImpl.instance;
        let nameIdentifier : any = astFactory.simpleIdentifier(new bare.createInstance(any,null,TokenType.IDENTIFIER,name,0));
        let executable : any;
        let elementToMerge : any = elementArrayToMerge[0];
        if (is(elementToMerge, any)) {
            let unionedMethod : any = new bare.createInstance(any,null,nameIdentifier);
            unionedMethod.inheritedElements = elementArrayToMerge;
            executable = unionedMethod;
        }else if (is(elementToMerge, any)) {
            let unionedPropertyAccessor : any = new bare.createInstance(any,null,nameIdentifier);
            unionedPropertyAccessor.getter = elementToMerge.isGetter;
            unionedPropertyAccessor.setter = elementToMerge.isSetter;
            unionedPropertyAccessor.inheritedElements = elementArrayToMerge;
            executable = unionedPropertyAccessor;
        }else {
            throw new bare.createInstance(any,null,`Invalid class of element in merge: ${elementToMerge.runtimeType}`);
        }
        let numOfParameters : number = numOfRequiredParameters + numOfPositionalParameters + namedParameters.length;
        let parameters : core.DartList<any> = new core.DartList<any>(numOfParameters);
        let i : number = 0;
        for(let j : number = 0; j < numOfRequiredParameters; j++,i++){
            let parameter : any = new bare.createInstance(any,null,"",0);
            parameter.type = dynamicType;
            parameter.parameterKind = ParameterKind.REQUIRED;
            parameters[i] = parameter;
        }
        for(let k : number = 0; k < numOfPositionalParameters; k++,i++){
            let parameter : any = new bare.createInstance(any,null,"",0);
            parameter.type = dynamicType;
            parameter.parameterKind = ParameterKind.POSITIONAL;
            parameters[i] = parameter;
        }
        for(let m : number = 0; m < namedParameters.length; m++,i++){
            let parameter : any = new bare.createInstance(any,null,namedParameters[m],0);
            parameter.type = dynamicType;
            parameter.parameterKind = ParameterKind.NAMED;
            parameters[i] = parameter;
        }
        executable.returnType = dynamicType;
        executable.parameters = parameters;
        let methodType : any = new bare.createInstance(any,null,executable);
        executable.type = methodType;
        return executable;
    }
    static _getNamedParameterNames(executableElement : any) : core.DartList<string> {
        let namedParameterNames : core.DartList<string> = new core.DartList<string>();
        let parameters : core.DartList<any> = executableElement.parameters;
        for(let i : number = 0; i < parameters.length; i++){
            let parameterElement : any = parameters[i];
            if (op(Op.EQUALS,parameterElement.parameterKind,ParameterKind.NAMED)) {
                namedParameterNames.add(parameterElement.name);
            }
        }
        return namedParameterNames;
    }
    static _getNumOfParameters(executableElement : any,parameterKind : any) : number {
        let parameterCount : number = 0;
        let parameters : core.DartList<any> = executableElement.parameters;
        for(let i : number = 0; i < parameters.length; i++){
            let parameterElement : any = parameters[i];
            if (op(Op.EQUALS,parameterElement.parameterKind,parameterKind)) {
                parameterCount++;
            }
        }
        return parameterCount;
    }
    static _getNumOfPositionalParameters(executableElement : any) : number {
        return InheritanceManager._getNumOfParameters(executableElement,ParameterKind.REQUIRED) + InheritanceManager._getNumOfParameters(executableElement,ParameterKind.POSITIONAL);
    }
    static _getNumOfRequiredParameters(executableElement : any) : number {
        return InheritanceManager._getNumOfParameters(executableElement,ParameterKind.REQUIRED);
    }
    static _isAbstract(executableElement : any) : boolean {
        if (is(executableElement, any)) {
            return executableElement.isAbstract;
        }else if (is(executableElement, any)) {
            return executableElement.isAbstract;
        }
        return false;
    }
}

export namespace MemberMap {
    export type Constructors = 'MemberMap' | 'from' | 'fromMap';
    export type Interface = Omit<MemberMap, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class MemberMap {
    _size : number;

    _keys : core.DartList<string>;

    _values : core.DartList<any>;

    constructor(initialCapacity? : number) {
    }
    @defaultConstructor
    MemberMap(initialCapacity? : number) {
        initialCapacity = initialCapacity || 10;
        this._size = 0;
        this._initArrays(initialCapacity);
    }
    @namedConstructor
    from(memberMap : MemberMap) {
        this._size = 0;
        this._initArrays(memberMap._size + 5);
        for(let i : number = 0; i < memberMap._size; i++){
            this._keys[i] = memberMap._keys[i];
            this._values[i] = memberMap._values[i];
        }
        this._size = memberMap._size;
    }
    static from : new(memberMap : MemberMap) => MemberMap;

    @namedConstructor
    fromMap(map : core.DartMap<string,any>) {
        this._size = 0;
        this._size = map.length;
        this._initArrays(this._size + 5);
        let index : number = 0;
        map.forEach((memberName : string,element : any) =>  {
            this._keys[index] = memberName;
            this._values[index] = element;
            index++;
        });
    }
    static fromMap : new(map : core.DartMap<string,any>) => MemberMap;

    get size() : number {
        return this._size;
    }
    get(key : string) : any {
        for(let i : number = 0; i < this._size; i++){
            if (this._keys[i] != null && this._keys[i] == key) {
                return this._values[i];
            }
        }
        return null;
    }
    getKey(i : number) : string {
        return this._keys[i];
    }
    getValue(i : number) : any {
        return this._values[i];
    }
    put(key : string,value : any) : void {
        for(let i : number = 0; i < this._size; i++){
            if (this._keys[i] != null && this._keys[i] == key) {
                this._values[i] = value;
                return;
            }
        }
        if (this._size == this._keys.length) {
            let newArrayLength : number = this._size * 2;
            let keys_new_array : core.DartList<string> = new core.DartList<string>(newArrayLength);
            let values_new_array : core.DartList<any> = new core.DartList<any>(newArrayLength);
            for(let i : number = 0; i < this._size; i++){
                keys_new_array[i] = this._keys[i];
            }
            for(let i : number = 0; i < this._size; i++){
                values_new_array[i] = this._values[i];
            }
            this._keys = keys_new_array;
            this._values = values_new_array;
        }
        this._keys[this._size] = key;
        this._values[this._size] = value;
        this._size++;
    }
    remove(key : string) : void {
        for(let i : number = 0; i < this._size; i++){
            if (this._keys[i] == key) {
                this._keys[i] = null;
                this._values[i] = null;
                return;
            }
        }
    }
    setValue(i : number,value : any) : void {
        this._values[i] = value;
    }
    _initArrays(initialCapacity : number) : void {
        this._keys = new core.DartList<string>(initialCapacity);
        this._values = new core.DartList<any>(initialCapacity);
    }
}

export class properties {
}
