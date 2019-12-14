/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/class_hierarchy.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast";
import * as lib4 from "./type_algebra";
import * as math from "@dart2ts/dart/math";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib7 from "./src/heap";

export var _intervalListContains : (intervalList : typed_data.Uint32List,x : number) => boolean = (intervalList : typed_data.Uint32List,x : number) : boolean =>  {
    let low : number = 0, high : number = intervalList.length - 1;
    if (high == -1 || x < op(Op.INDEX,intervalList,0) || op(Op.INDEX,intervalList,high) <= x) {
        return false;
    }
    while (low < high){
        let mid : number = high - ((high - low) >> 1);
        let pivot : number = op(Op.INDEX,intervalList,mid);
        if (pivot <= x) {
            low = mid;
        }else {
            high = mid - 1;
        }
    }
    return low == high && (low & 1) == 0;
};
export var _intervalListSize : (intervalList : typed_data.Uint32List) => number = (intervalList : typed_data.Uint32List) : number =>  {
    let size : number = 0;
    for(let i : number = 0; i < intervalList.length; i += 2){
        size += op(Op.INDEX,intervalList,i + 1) - op(Op.INDEX,intervalList,i);
    }
    return size;
};
export var _findMemberByName : (members : core.DartList<lib3.Member>,name : lib3.Name) => lib3.Member = (members : core.DartList<lib3.Member>,name : lib3.Name) : lib3.Member =>  {
    let low : number = 0, high : number = members.length - 1;
    while (low <= high){
        let mid : number = low + ((high - low) >> 1);
        let pivot : lib3.Member = members[mid];
        let comparison : number = _compareNames(name,pivot.name);
        if (comparison < 0) {
            high = mid - 1;
        }else if (comparison > 0) {
            low = mid + 1;
        }else if (high != mid) {
            high = mid;
        }else {
            return pivot;
        }
    }
    return null;
};
export var _compareMembers : (first : lib3.Member,second : lib3.Member) => number = (first : lib3.Member,second : lib3.Member) : number =>  {
    return _compareNames(first.name,second.name);
};
export var _compareNames : (firstName : lib3.Name,secondName : lib3.Name) => number = (firstName : lib3.Name,secondName : lib3.Name) : number =>  {
    let firstHash : number = firstName.hashCode;
    let secondHash : number = secondName.hashCode;
    if (firstHash != secondHash) return firstHash - secondHash;
    let firstString : string = firstName.name;
    let secondString : string = secondName.name;
    let firstLength : number = new core.DartString(firstString).length;
    let secondLength : number = new core.DartString(secondString).length;
    if (firstLength != secondLength) {
        return firstLength - secondLength;
    }
    let firstLibrary : lib3.Library = firstName.library;
    let secondLibrary : lib3.Library = secondName.library;
    if (firstLibrary != secondLibrary) {
        if (op(Op.EQUALS,firstLibrary,null)) return -1;
        if (op(Op.EQUALS,secondLibrary,null)) return 1;
        return firstLibrary.compareTo(secondLibrary);
    }
    for(let i : number = 0; i < firstLength; ++i){
        let firstUnit : number = new core.DartString(firstString).codeUnitAt(i);
        let secondUnit : number = new core.DartString(secondString).codeUnitAt(i);
        let delta : number = firstUnit - secondUnit;
        if (delta != 0) return delta;
    }
    return 0;
};
export namespace ClassHierarchy {
    export type Constructors = 'ClassHierarchy' | '_internal';
    export type Interface = Omit<ClassHierarchy, Constructors>;
}
@DartClass
export class ClassHierarchy {
    classes : core.DartList<lib3.Class>;

    _infoFor : core.DartMap<lib3.Class,_ClassInfo>;

    constructor(program : lib3.Program) {
    }
    @defaultConstructor
    ClassHierarchy(program : lib3.Program) {
        this._infoFor = new core.DartMap.literal([
        ]);
        this._topSortIndex = 0;
        this._topDownSortIndex = 0;
        this._internal(program,ClassHierarchy._countClasses(program));
    }
    get rootClass() : lib3.Class {
        return this.classes[0];
    }
    getClassIndex(class_ : lib3.Class) : number {
        return this._infoFor.get(class_).topologicalIndex;
    }
    isSubclassOf(subclass : lib3.Class,superclass : lib3.Class) : boolean {
        if (core.identical(subclass,superclass)) return true;
        return this._infoFor.get(subclass).isSubclassOf(this._infoFor.get(superclass));
    }
    isSubmixtureOf(submixture : lib3.Class,superclass : lib3.Class) : boolean {
        if (core.identical(submixture,superclass)) return true;
        return this._infoFor.get(submixture).isSubmixtureOf(this._infoFor.get(superclass));
    }
    isSubtypeOf(subtype : lib3.Class,superclass : lib3.Class) : boolean {
        if (core.identical(subtype,superclass)) return true;
        return this._infoFor.get(subtype).isSubtypeOf(this._infoFor.get(superclass));
    }
    isUsedAsSuperClass(class_ : lib3.Class) : boolean {
        return this._infoFor.get(class_).directExtenders.isNotEmpty;
    }
    isUsedAsMixin(class_ : lib3.Class) : boolean {
        return this._infoFor.get(class_).directMixers.isNotEmpty;
    }
    isUsedAsSuperInterface(class_ : lib3.Class) : boolean {
        return this._infoFor.get(class_).directImplementers.isNotEmpty;
    }
    getClassDepth(class_ : lib3.Class) : number {
        return this._infoFor.get(class_).depth;
    }
    getRankedSuperclasses(class_ : lib3.Class) : core.DartList<lib3.Class> {
        return this._getRankedSuperclassInfos(this._infoFor.get(class_)).map((info : any) =>  {
            return info.classNode;
        }).toList();
    }
    _getRankedSuperclassInfos(info : _ClassInfo) : core.DartList<_ClassInfo> {
        if (info.leastUpperBoundInfos != null) return info.leastUpperBoundInfos;
        let heap = ((_) : _LubHeap =>  {
            {
                _.add(info);
                return _;
            }
        })(new _LubHeap());
        let chain = new core.DartList.literal<_ClassInfo>();
        info.leastUpperBoundInfos = chain;
        let lastInfo : _ClassInfo = null;
        while (heap.isNotEmpty){
            let nextInfo = heap.remove();
            if (core.identical(nextInfo,lastInfo)) continue;
            chain.add(nextInfo);
            lastInfo = nextInfo;
            let classNode = nextInfo.classNode;
            var addToHeap : (supertype : lib3.Supertype) => void = (supertype : lib3.Supertype) : void =>  {
                heap.add(this._infoFor.get(supertype.classNode));
            };
            if (classNode.supertype != null) addToHeap(classNode.supertype);
            if (classNode.mixedInType != null) addToHeap(classNode.mixedInType);
            classNode.implementedTypes.forEach(addToHeap);
        }
        return chain;
    }
    getClassicLeastUpperBound(type1 : lib3.InterfaceType,type2 : lib3.InterfaceType) : lib3.InterfaceType {
        let info1 : _ClassInfo = this._infoFor.get(type1.classNode);
        let info2 : _ClassInfo = this._infoFor.get(type2.classNode);
        let classes1 : core.DartList<_ClassInfo>;
        let classes2 : core.DartList<_ClassInfo>;
        if (core.identical(info1,info2) || info1.isSubtypeOf(info2)) {
            classes1 = classes2 = this._getRankedSuperclassInfos(info2);
        }else if (info2.isSubtypeOf(info1)) {
            classes1 = classes2 = this._getRankedSuperclassInfos(info1);
        }else {
            classes1 = this._getRankedSuperclassInfos(info1);
            classes2 = this._getRankedSuperclassInfos(info2);
        }
        let i1 : number = 0;
        let i2 : number = 0;
        let candidate : lib3.InterfaceType = null;
        let currentDepth : number = -1;
        let numCandidatesAtThisDepth : number = 0;
        while (true){
            let next : _ClassInfo = classes1[i1];
            let next2 : _ClassInfo = classes2[i2];
            if (!core.identical(next,next2)) {
                if (_LubHeap.sortsBeforeStatic(next,next2)) {
                    ++i1;
                }else {
                    ++i2;
                }
                continue;
            }
            ++i2;
            ++i1;
            if (next.depth != currentDepth) {
                if (numCandidatesAtThisDepth == 1) return candidate;
                currentDepth = next.depth;
                numCandidatesAtThisDepth = 0;
                candidate = null;
            }else if (numCandidatesAtThisDepth > 1) {
                continue;
            }
            if (next.classNode.typeParameters.isEmpty) {
                candidate = next.classNode.rawType;
                if (currentDepth == 0) return candidate;
                ++numCandidatesAtThisDepth;
            }else {
                let superType1 = core.identical(info1,next) ? type1 : lib4.Substitution.fromInterfaceType(type1).substituteType(info1.genericSuperTypes.get(next.classNode).asInterfaceType);
                let superType2 = core.identical(info2,next) ? type2 : lib4.Substitution.fromInterfaceType(type2).substituteType(info2.genericSuperTypes.get(next.classNode).asInterfaceType);
                if (op(Op.EQUALS,superType1,superType2)) {
                    candidate = superType1;
                    ++numCandidatesAtThisDepth;
                }
            }
        }
    }
    getClassAsInstanceOf(class_ : lib3.Class,superclass : lib3.Class) : lib3.Supertype {
        if (core.identical(class_,superclass)) return class_.asThisSupertype;
        let info : _ClassInfo = this._infoFor.get(class_);
        let superInfo : _ClassInfo = this._infoFor.get(superclass);
        if (!info.isSubtypeOf(superInfo)) return null;
        if (superclass.typeParameters.isEmpty) return superclass.asRawSupertype;
        return info.genericSuperTypes.get(superclass);
    }
    getTypeAsInstanceOf(type : lib3.InterfaceType,superclass : lib3.Class) : lib3.InterfaceType {
        let castedType : lib3.Supertype = this.getClassAsInstanceOf(type.classNode,superclass);
        if (op(Op.EQUALS,castedType,null)) return null;
        return lib4.Substitution.fromInterfaceType(type).substituteType(castedType.asInterfaceType);
    }
    getDispatchTarget(class_ : lib3.Class,name : lib3.Name,_namedArguments? : {setter? : boolean}) : lib3.Member {
        let {setter} = Object.assign({
            "setter" : false}, _namedArguments );
        let info : _ClassInfo = this._infoFor.get(class_);
        let list : core.DartList<lib3.Member> = setter ? info.implementedSetters : info.implementedGettersAndCalls;
        return _findMemberByName(list,name);
    }
    getDispatchTargets(class_ : lib3.Class,_namedArguments? : {setters? : boolean}) : core.DartList<lib3.Member> {
        let {setters} = Object.assign({
            "setters" : false}, _namedArguments );
        let info : _ClassInfo = this._infoFor.get(class_);
        return setters ? info.implementedSetters : info.implementedGettersAndCalls;
    }
    getInterfaceMember(class_ : lib3.Class,name : lib3.Name,_namedArguments? : {setter? : boolean}) : lib3.Member {
        let {setter} = Object.assign({
            "setter" : false}, _namedArguments );
        let list : core.DartList<lib3.Member> = this.getInterfaceMembers(class_,{
            setters : setter});
        return _findMemberByName(list,name);
    }
    getInterfaceMembers(class_ : lib3.Class,_namedArguments? : {setters? : boolean}) : core.DartList<lib3.Member> {
        let {setters} = Object.assign({
            "setters" : false}, _namedArguments );
        return this._buildInterfaceMembers(class_,this._infoFor.get(class_),{
            setters : setters});
    }
    forEachOverridePair(class_ : lib3.Class,callback : (declaredMember : lib3.Member,interfaceMember : lib3.Member,isSetter : boolean) => any) : void {
        let info : _ClassInfo = this._infoFor.get(class_);
        for(let supertype of class_.supers) {
            let superclass = supertype.classNode;
            let superGetters = this.getInterfaceMembers(superclass);
            let superSetters = this.getInterfaceMembers(superclass,{
                setters : true});
            ClassHierarchy._reportOverrides(info.implementedGettersAndCalls,superGetters,callback);
            ClassHierarchy._reportOverrides(info.declaredGettersAndCalls,superGetters,callback,{
                onlyAbstract : true});
            ClassHierarchy._reportOverrides(info.implementedSetters,superSetters,callback,{
                isSetter : true});
            ClassHierarchy._reportOverrides(info.declaredSetters,superSetters,callback,{
                isSetter : true,onlyAbstract : true});
        }
        if (!class_.isAbstract) {
            ClassHierarchy._reportOverrides(info.implementedGettersAndCalls,info.declaredGettersAndCalls,callback);
            ClassHierarchy._reportOverrides(info.implementedSetters,info.declaredSetters,callback,{
                isSetter : true});
        }
    }
    static _reportOverrides(declaredList : core.DartList<lib3.Member>,inheritedList : core.DartList<lib3.Member>,callback : (declaredMember : lib3.Member,interfaceMember : lib3.Member,isSetter : boolean) => any,_namedArguments? : {isSetter? : boolean,onlyAbstract? : boolean}) : void {
        let {isSetter,onlyAbstract} = Object.assign({
            "isSetter" : false,
            "onlyAbstract" : false}, _namedArguments );
        let i : number = 0, j : number = 0;
        while (i < declaredList.length && j < inheritedList.length){
            let declared : lib3.Member = declaredList[i];
            if (onlyAbstract && !declared.isAbstract) {
                ++i;
                continue;
            }
            let inherited : lib3.Member = inheritedList[j];
            let comparison : number = _compareMembers(declared,inherited);
            if (comparison < 0) {
                ++i;
            }else if (comparison > 0) {
                ++j;
            }else {
                if (!core.identical(declared,inherited)) {
                    callback(declared,inherited,isSetter);
                }
                ++j;
            }
        }
    }
    hasProperSubtypes(class_ : lib3.Class) : boolean {
        return !this.getSubtypesOf(class_).isSingleton;
    }
    getSubtypesOf(class_ : lib3.Class) : ClassSet {
        return new ClassSet(this,this._infoFor.get(class_).subtypeIntervalList);
    }
    getSubclassesOf(class_ : lib3.Class) : ClassSet {
        return new ClassSet(this,this._infoFor.get(class_).subclassIntervalList);
    }
    @namedConstructor
    _internal(program : lib3.Program,numberOfClasses : number) {
        this._infoFor = new core.DartMap.literal([
        ]);
        this._topSortIndex = 0;
        this._topDownSortIndex = 0;
        this.classes = new core.DartList<lib3.Class>(numberOfClasses);
        for(let library of program.libraries) {
            for(let classNode of library.classes) {
                this._topologicalSortVisit(classNode);
            }
        }
        for(let i : number = 0; i < this.classes.length; ++i){
            let class_ = this.classes[i];
            let info = this._infoFor.get(class_);
            if (class_.supertype != null) {
                this._infoFor.get(class_.supertype.classNode).directExtenders.add(info);
            }
            if (class_.mixedInType != null) {
                this._infoFor.get(class_.mixedInType.classNode).directMixers.add(info);
            }
            for(let supertype of class_.implementedTypes) {
                this._infoFor.get(supertype.classNode).directImplementers.add(info);
            }
        }
        this._topDownSortVisit(this._infoFor.get(this.rootClass));
        for(let i : number = 0; i < this.classes.length; ++i){
            let class_ = this.classes[i];
            this._buildInterfaceMembers(class_,this._infoFor.get(class_),{
                setters : true});
            this._buildInterfaceMembers(class_,this._infoFor.get(class_),{
                setters : false});
        }
    }
    static _internal : new(program : lib3.Program,numberOfClasses : number) => ClassHierarchy;

    _topSortIndex : number;

    _topologicalSortVisit(classNode : lib3.Class) : number {
        let info = this._infoFor.get(classNode);
        if (info != null) {
            if (info.isBeingVisited) {
                throw `Cyclic inheritance involving ${info.classNode.name}`;
            }
            return info.depth;
        }
        let superDepth : number = -1;
        this._infoFor.set(classNode,info = new _ClassInfo(classNode));
        info.isBeingVisited = true;
        if (classNode.supertype != null) {
            superDepth = math.max(superDepth,this._topologicalSortVisit(classNode.supertype.classNode));
            this._recordSuperTypes(info,classNode.supertype);
        }
        if (classNode.mixedInType != null) {
            superDepth = math.max(superDepth,this._topologicalSortVisit(classNode.mixedInType.classNode));
            this._recordSuperTypes(info,classNode.mixedInType);
        }
        for(let supertype of classNode.implementedTypes) {
            superDepth = math.max(superDepth,this._topologicalSortVisit(supertype.classNode));
            this._recordSuperTypes(info,supertype);
        }
        this._buildDeclaredMembers(classNode,info);
        this._buildImplementedMembers(classNode,info);
        let id : number = this._topSortIndex++;
        info.topologicalIndex = id;
        this.classes[id] = info.classNode;
        info.isBeingVisited = false;
        return info.depth = superDepth + 1;
    }
    _buildDeclaredMembers(classNode : lib3.Class,info : _ClassInfo) : void {
        if (classNode.mixedInType != null) {
            let mixedInfo : _ClassInfo = this._infoFor.get(classNode.mixedInType.classNode);
            info.declaredGettersAndCalls = mixedInfo.declaredGettersAndCalls;
            info.declaredSetters = mixedInfo.declaredSetters;
        }else {
            let members = info.declaredGettersAndCalls = new core.DartList.literal<lib3.Member>();
            let setters = info.declaredSetters = new core.DartList.literal<lib3.Member>();
            for(let procedure of classNode.procedures) {
                if (procedure.isStatic) continue;
                if (op(Op.EQUALS,procedure.kind,lib3.ProcedureKind.Setter)) {
                    setters.add(procedure);
                }else {
                    members.add(procedure);
                }
            }
            for(let field of classNode.fields) {
                if (field.isStatic) continue;
                if (field.hasImplicitGetter) {
                    members.add(field);
                }
                if (field.hasImplicitSetter) {
                    setters.add(field);
                }
            }
            members.sort(_compareMembers);
            setters.sort(_compareMembers);
        }
    }
    _buildImplementedMembers(classNode : lib3.Class,info : _ClassInfo) : void {
        let inheritedMembers : core.DartList<lib3.Member>;
        let inheritedSetters : core.DartList<lib3.Member>;
        if (op(Op.EQUALS,classNode.supertype,null)) {
            inheritedMembers = inheritedSetters = new core.DartList.literal<lib3.Member>();
        }else {
            let superInfo : _ClassInfo = this._infoFor.get(classNode.supertype.classNode);
            inheritedMembers = superInfo.implementedGettersAndCalls;
            inheritedSetters = superInfo.implementedSetters;
        }
        info.implementedGettersAndCalls = ClassHierarchy._inheritMembers(info.declaredGettersAndCalls,inheritedMembers,{
            skipAbstractMembers : true});
        info.implementedSetters = ClassHierarchy._inheritMembers(info.declaredSetters,inheritedSetters,{
            skipAbstractMembers : true});
    }
    _buildInterfaceMembers(classNode : lib3.Class,info : _ClassInfo,_namedArguments? : {setters? : boolean}) : core.DartList<lib3.Member> {
        let {setters} = Object.assign({
        }, _namedArguments );
        let members : core.DartList<lib3.Member> = setters ? info.interfaceSetters : info.interfaceGettersAndCalls;
        if (members != null) return members;
        let allInheritedMembers : core.DartList<lib3.Member> = new core.DartList.literal<lib3.Member>();
        let declared : core.DartList<lib3.Member> = setters ? info.declaredSetters : info.declaredGettersAndCalls;
        var inheritFrom : (type : lib3.Supertype) => void = (type : lib3.Supertype) : void =>  {
            if (op(Op.EQUALS,type,null)) return;
            let inherited : core.DartList<lib3.Member> = this._buildInterfaceMembers(type.classNode,this._infoFor.get(type.classNode),{
                setters : setters});
            inherited = ClassHierarchy._getUnshadowedInheritedMembers(declared,inherited);
            allInheritedMembers = ClassHierarchy._merge(allInheritedMembers,inherited);
        };
        inheritFrom(classNode.supertype);
        inheritFrom(classNode.mixedInType);
        classNode.implementedTypes.forEach(inheritFrom);
        members = ClassHierarchy._inheritMembers(declared,allInheritedMembers);
        if (setters) {
            info.interfaceSetters = members;
        }else {
            info.interfaceGettersAndCalls = members;
        }
        return members;
    }
    static _inheritMembers(declared : core.DartList<lib3.Member>,inherited : core.DartList<lib3.Member>,_namedArguments? : {skipAbstractMembers? : boolean}) : core.DartList<lib3.Member> {
        let {skipAbstractMembers} = Object.assign({
            "skipAbstractMembers" : false}, _namedArguments );
        let result : core.DartList<lib3.Member> = ((_) : core.DartList<lib3.Member> =>  {
            {
                _.length = declared.length + inherited.length;
                return _;
            }
        })(new core.DartList.literal<lib3.Member>());
        let storeIndex : number = 0;
        let i : number = 0, j : number = 0;
        while (i < declared.length && j < inherited.length){
            let declaredMember : lib3.Member = declared[i];
            let inheritedMember : lib3.Member = inherited[j];
            if (skipAbstractMembers && declaredMember.isAbstract) {
                ++i;
                continue;
            }
            if (skipAbstractMembers && inheritedMember.isAbstract) {
                ++j;
                continue;
            }
            let comparison : number = _compareMembers(declaredMember,inheritedMember);
            if (comparison < 0) {
                result[storeIndex++] = declaredMember;
                ++i;
            }else if (comparison > 0) {
                result[storeIndex++] = inheritedMember;
                ++j;
            }else {
                result[storeIndex++] = declaredMember;
                ++i;
                ++j;
            }
        }
        while (i < declared.length){
            let declaredMember : lib3.Member = declared[i++];
            if (skipAbstractMembers && declaredMember.isAbstract) continue;
            result[storeIndex++] = declaredMember;
        }
        while (j < inherited.length){
            let inheritedMember : lib3.Member = inherited[j++];
            if (skipAbstractMembers && inheritedMember.isAbstract) continue;
            result[storeIndex++] = inheritedMember;
        }
        result.length = storeIndex;
        return result;
    }
    static _getUnshadowedInheritedMembers(declared : core.DartList<lib3.Member>,inherited : core.DartList<lib3.Member>) : core.DartList<lib3.Member> {
        let result : core.DartList<lib3.Member> = ((_) : core.DartList<lib3.Member> =>  {
            {
                _.length = inherited.length;
                return _;
            }
        })(new core.DartList.literal<lib3.Member>());
        let storeIndex : number = 0;
        let i : number = 0, j : number = 0;
        while (i < declared.length && j < inherited.length){
            let declaredMember : lib3.Member = declared[i];
            let inheritedMember : lib3.Member = inherited[j];
            let comparison : number = _compareMembers(declaredMember,inheritedMember);
            if (comparison < 0) {
                ++i;
            }else if (comparison > 0) {
                result[storeIndex++] = inheritedMember;
                ++j;
            }else {
                ++j;
            }
        }
        while (j < inherited.length){
            result[storeIndex++] = inherited[j++];
        }
        result.length = storeIndex;
        return result;
    }
    static _merge(first : core.DartList<lib3.Member>,second : core.DartList<lib3.Member>) : core.DartList<lib3.Member> {
        if (first.isEmpty) return second;
        if (second.isEmpty) return first;
        let result : core.DartList<lib3.Member> = ((_) : core.DartList<lib3.Member> =>  {
            {
                _.length = first.length + second.length;
                return _;
            }
        })(new core.DartList.literal<lib3.Member>());
        let storeIndex : number = 0;
        let i : number = 0, j : number = 0;
        while (i < first.length && j < second.length){
            let firstMember : lib3.Member = first[i];
            let secondMember : lib3.Member = second[j];
            let compare : number = _compareMembers(firstMember,secondMember);
            if (compare <= 0) {
                result[storeIndex++] = firstMember;
                ++i;
                if (core.identical(firstMember,secondMember)) {
                    ++j;
                }
            }else {
                result[storeIndex++] = secondMember;
                ++j;
            }
        }
        while (i < first.length){
            result[storeIndex++] = first[i++];
        }
        while (j < second.length){
            result[storeIndex++] = second[j++];
        }
        result.length = storeIndex;
        return result;
    }
    _recordSuperTypes(subInfo : _ClassInfo,supertype : lib3.Supertype) : void {
        let superInfo : _ClassInfo = this._infoFor.get(supertype.classNode);
        if (supertype.typeArguments.isEmpty) {
            if (superInfo.genericSuperTypes == null) return;
            if (subInfo.genericSuperTypes == null && superInfo.ownsGenericSuperTypeMap) {
                subInfo.genericSuperTypes = superInfo.genericSuperTypes;
                superInfo.ownsGenericSuperTypeMap = false;
            }else {
                subInfo.genericSuperTypes = ( subInfo.genericSuperTypes ) || ( new core.DartMap.literal([
                ]) );
                subInfo.genericSuperTypes.addAll(superInfo.genericSuperTypes);
            }
        }else {
            let superclass : lib3.Class = supertype.classNode;
            let substitution = lib4.Substitution.fromPairs(superclass.typeParameters,supertype.typeArguments);
            subInfo.genericSuperTypes = ( subInfo.genericSuperTypes ) || ( new core.DartMap.literal([
            ]) );
            ((_687_)=>(!!_687_)?_687_.forEach((key : lib3.Class,type : lib3.Supertype) =>  {
                subInfo.genericSuperTypes.set(key,substitution.substituteSupertype(type));
            }):null)(superInfo.genericSuperTypes);
            subInfo.genericSuperTypes.set(superclass,supertype);
        }
    }
    _topDownSortIndex : number;

    _topDownSortVisit(info : _ClassInfo) : void {
        if (info.topDownIndex != -1) return;
        let isMixedIn : boolean = info.directMixers.isNotEmpty;
        let index : number = this._topDownSortIndex++;
        info.topDownIndex = index;
        let subclassSetBuilder = ((_) : _IntervalListBuilder =>  {
            {
                _.addSingleton(index);
                return _;
            }
        })(new _IntervalListBuilder());
        let submixtureSetBuilder = isMixedIn ? (((_) : _IntervalListBuilder =>  {
            {
                _.addSingleton(index);
                return _;
            }
        })(new _IntervalListBuilder())) : null;
        let subtypeSetBuilder = ((_) : _IntervalListBuilder =>  {
            {
                _.addSingleton(index);
                return _;
            }
        })(new _IntervalListBuilder());
        for(let subtype of info.directExtenders) {
            this._topDownSortVisit(subtype);
            subclassSetBuilder.addIntervalList(subtype.subclassIntervalList);
            ((_688_)=>(!!_688_)?_688_.addIntervalList(subtype.submixtureIntervalList):null)(submixtureSetBuilder);
            subtypeSetBuilder.addIntervalList(subtype.subtypeIntervalList);
        }
        for(let subtype of info.directMixers) {
            this._topDownSortVisit(subtype);
            submixtureSetBuilder.addIntervalList(subtype.submixtureIntervalList);
            subtypeSetBuilder.addIntervalList(subtype.subtypeIntervalList);
        }
        for(let subtype of info.directImplementers) {
            this._topDownSortVisit(subtype);
            subtypeSetBuilder.addIntervalList(subtype.subtypeIntervalList);
        }
        info.subclassIntervalList = subclassSetBuilder.buildIntervalList();
        info.submixtureIntervalList = isMixedIn ? submixtureSetBuilder.buildIntervalList() : info.subclassIntervalList;
        info.subtypeIntervalList = subtypeSetBuilder.buildIntervalList();
    }
    static _countClasses(program : lib3.Program) : number {
        let count : number = 0;
        for(let library of program.libraries) {
            count += library.classes.length;
        }
        return count;
    }
    getExpenseHistogram() : core.DartList<number> {
        let result = new core.DartList.literal<number>();
        for(let class_ of this.classes) {
            let info = this._infoFor.get(class_);
            let intervals : number = op(Op.QUOTIENT,math.max(info.subclassIntervalList.length,info.subtypeIntervalList.length),2);
            if (intervals >= result.length) {
                let oldLength : number = result.length;
                result.length = intervals + 1;
                result.fillRange(oldLength,result.length,0);
            }
            result[intervals] += 1;
        }
        return result;
    }
    getCompressionRatio() : double {
        let intervals : number = 0;
        let sizes : number = 0;
        for(let class_ of this.classes) {
            let info = this._infoFor.get(class_);
            intervals += op(Op.QUOTIENT,(info.subclassIntervalList.length + info.subtypeIntervalList.length),2);
            sizes += _intervalListSize(info.subclassIntervalList) + _intervalListSize(info.subtypeIntervalList);
        }
        return sizes == 0 ? 1.0 : intervals / sizes;
    }
    getSuperTypeHashTableSize() : number {
        let sum : number = 0;
        for(let class_ of this.classes) {
            let info : _ClassInfo = this._infoFor.get(class_);
            if (info.ownsGenericSuperTypeMap) {
                sum += (((t)=>(!!t)?t.length:null)(this._infoFor.get(class_).genericSuperTypes) || 0);
            }
        }
        return sum;
    }
}

export namespace _IntervalListBuilder {
    export type Constructors = '_IntervalListBuilder';
    export type Interface = Omit<_IntervalListBuilder, Constructors>;
}
@DartClass
export class _IntervalListBuilder {
    events : core.DartList<number>;

    addInterval(start : number,end : number) : void {
        this.events.add(start << 1);
        this.events.add((end << 1) + 1);
    }
    addSingleton(x : number) : void {
        this.addInterval(x,x + 1);
    }
    addIntervalList(intervals : typed_data.Uint32List) : void {
        for(let i : number = 0; i < intervals.length; i += 2){
            this.addInterval(op(Op.INDEX,intervals,i),op(Op.INDEX,intervals,i + 1));
        }
    }
    buildIntervalList() : typed_data.Uint32List {
        this.events.sort();
        let insideCount : number = 0;
        let storeIndex : number = 0;
        for(let i : number = 0; i < this.events.length; ++i){
            let event : number = this.events[i];
            if (event & 1 == 0) {
                ++insideCount;
                if (insideCount == 1) {
                    this.events[storeIndex++] = event >> 1;
                }
            }else {
                --insideCount;
                if (insideCount == 0) {
                    this.events[storeIndex++] = event >> 1;
                }
            }
        }
        let result = new typed_data.Uint32List(storeIndex);
        for(let i : number = 0; i < storeIndex; ++i){
            op(Op.INDEX_ASSIGN,result,i,this.events[i]);
        }
        return result;
    }
    constructor() {
    }
    @defaultConstructor
    _IntervalListBuilder() {
        this.events = new core.DartList.literal<number>();
    }
}

export namespace _ClassInfo {
    export type Constructors = '_ClassInfo';
    export type Interface = Omit<_ClassInfo, Constructors>;
}
@DartClass
export class _ClassInfo {
    classNode : lib3.Class;

    topologicalIndex : number;

    topDownIndex : number;

    isBeingVisited : boolean;

    depth : number;

    directExtenders : core.DartList<_ClassInfo>;

    directMixers : core.DartList<_ClassInfo>;

    directImplementers : core.DartList<_ClassInfo>;

    subclassIntervalList : typed_data.Uint32List;

    submixtureIntervalList : typed_data.Uint32List;

    subtypeIntervalList : typed_data.Uint32List;

    leastUpperBoundInfos : core.DartList<_ClassInfo>;

    isSubclassOf(other : _ClassInfo) : boolean {
        return _intervalListContains(other.subclassIntervalList,this.topDownIndex);
    }
    isSubmixtureOf(other : _ClassInfo) : boolean {
        return _intervalListContains(other.submixtureIntervalList,this.topDownIndex);
    }
    isSubtypeOf(other : _ClassInfo) : boolean {
        return _intervalListContains(other.subtypeIntervalList,this.topDownIndex);
    }
    genericSuperTypes : core.DartMap<lib3.Class,lib3.Supertype>;

    ownsGenericSuperTypeMap : boolean;

    declaredGettersAndCalls : core.DartList<lib3.Member>;

    declaredSetters : core.DartList<lib3.Member>;

    implementedGettersAndCalls : core.DartList<lib3.Member>;

    implementedSetters : core.DartList<lib3.Member>;

    interfaceGettersAndCalls : core.DartList<lib3.Member>;

    interfaceSetters : core.DartList<lib3.Member>;

    constructor(classNode : lib3.Class) {
    }
    @defaultConstructor
    _ClassInfo(classNode : lib3.Class) {
        this.topologicalIndex = 0;
        this.topDownIndex = -1;
        this.isBeingVisited = false;
        this.depth = 0;
        this.directExtenders = new core.DartList.literal<_ClassInfo>();
        this.directMixers = new core.DartList.literal<_ClassInfo>();
        this.directImplementers = new core.DartList.literal<_ClassInfo>();
        this.ownsGenericSuperTypeMap = true;
        this.classNode = classNode;
    }
}

export namespace ClassSet {
    export type Constructors = 'ClassSet';
    export type Interface = Omit<ClassSet, Constructors>;
}
@DartClass
export class ClassSet {
    _hierarchy : ClassHierarchy;

    _intervalList : typed_data.Uint32List;

    constructor(_hierarchy : ClassHierarchy,_intervalList : typed_data.Uint32List) {
    }
    @defaultConstructor
    ClassSet(_hierarchy : ClassHierarchy,_intervalList : typed_data.Uint32List) {
        this._hierarchy = _hierarchy;
        this._intervalList = _intervalList;
    }
    get isEmpty() : boolean {
        return this._intervalList.isEmpty;
    }
    get isSingleton() : boolean {
        let list = this._intervalList;
        return list.length == 2 && op(Op.INDEX,list,0) + 1 == op(Op.INDEX,list,1);
    }
    contains(class_ : lib3.Class) : boolean {
        return _intervalListContains(this._intervalList,this._hierarchy._infoFor.get(class_).topDownIndex);
    }
    union(other : ClassSet) : ClassSet {
        /* TODO (AssertStatementImpl) : assert (_hierarchy == other._hierarchy); */;
        if (core.identical(this._intervalList,other._intervalList)) return this;
        let builder : _IntervalListBuilder = new _IntervalListBuilder();
        builder.addIntervalList(this._intervalList);
        builder.addIntervalList(other._intervalList);
        return new ClassSet(this._hierarchy,builder.buildIntervalList());
    }
}

export namespace _LubHeap {
    export type Constructors = lib7.Heap.Constructors | '_LubHeap';
    export type Interface = Omit<_LubHeap, Constructors>;
}
@DartClass
export class _LubHeap extends lib7.Heap<_ClassInfo> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sortsBefore(a : _ClassInfo,b : _ClassInfo) : boolean {
        return _LubHeap.sortsBeforeStatic(a,b);
    }
    static sortsBeforeStatic(a : _ClassInfo,b : _ClassInfo) : boolean {
        if (a.depth > b.depth) return true;
        if (a.depth < b.depth) return false;
        return a.topologicalIndex < b.topologicalIndex;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LubHeap() {
    }
}

export class properties {
}
