/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/treeshaker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./../library_index";
import * as lib5 from "./../class_hierarchy";
import * as lib6 from "./../core_types";
import * as lib7 from "./../visitor";
import * as lib8 from "./../type_environment";

export var transformProgram : (program : lib3.Program,_namedArguments? : {programRoots? : core.DartList<ProgramRoot>}) => lib3.Program = (program : lib3.Program,_namedArguments? : {programRoots? : core.DartList<ProgramRoot>}) : lib3.Program =>  {
    let {programRoots} = Object.assign({
    }, _namedArguments );
    new TreeShaker(program,{
        programRoots : programRoots}).transform(program);
    return program;
};
export enum ProgramRootKind {
    ExternallyInstantiatedClass,
    Setter,
    Getter,
    Constructor,
    Other
}

export namespace ProgramRoot {
    export type Constructors = 'ProgramRoot';
    export type Interface = Omit<ProgramRoot, Constructors>;
}
@DartClass
export class ProgramRoot {
    library : string;

    klass : string;

    member : string;

    kind : ProgramRootKind;

    constructor(library : string,klass : string,member : string,kind : ProgramRootKind) {
    }
    @defaultConstructor
    ProgramRoot(library : string,klass : string,member : string,kind : ProgramRootKind) {
        this.library = library;
        this.klass = klass;
        this.member = member;
        this.kind = kind;
    }
    toString() : string {
        return `ProgramRoot(${this.library}, ${this.klass}, ${this.member}, ${this.kind})`;
    }
    get disambiguatedName() : string {
        if (op(Op.EQUALS,this.kind,ProgramRootKind.Getter)) return `get:${this.member}`;
        if (op(Op.EQUALS,this.kind,ProgramRootKind.Setter)) return `set:${this.member}`;
        return this.member;
    }
    getMember(table : lib4.LibraryIndex) : lib3.Member {
        /* TODO (AssertStatementImpl) : assert (klass != null); */;
        /* TODO (AssertStatementImpl) : assert (member != null); */;
        return table.getMember(this.library,(this.klass || lib4.LibraryIndex.topLevel),this.disambiguatedName);
    }
    getClass(table : lib4.LibraryIndex) : lib3.Class {
        /* TODO (AssertStatementImpl) : assert (klass != null); */;
        return table.getClass(this.library,this.klass);
    }
}

export namespace TreeShaker {
    export type Constructors = 'TreeShaker' | '_internal';
    export type Interface = Omit<TreeShaker, Constructors>;
}
@DartClass
export class TreeShaker {
    program : lib3.Program;

    hierarchy : lib5.ClassHierarchy;

    coreTypes : lib6.CoreTypes;

    strongMode : boolean;

    programRoots : core.DartList<ProgramRoot>;

    _dispatchedNames : core.DartList<core.DartSet<lib3.Name>>;

    _receiversOfName : core.DartMap<lib3.Name,lib5.ClassSet>;

    _dispatchTargetCandidates : core.DartMap<lib3.Name,core.DartList<lib3.TreeNode>>;

    _usedMembersWithHost : core.DartList<core.DartSet<lib3.Member>>;

    _usedMembers : core.DartMap<lib3.Member,core.DartList<lib3.Node>>;

    _classRetention : core.DartList<ClassRetention>;

    _worklist : core.DartList<lib3.TreeNode>;

    _escapedClasses : core.DartSet<lib3.Class>;

    _overriddenMembers : core.DartSet<lib3.Member>;

    _typedCalls : core.DartList<lib3.Expression>;

    _visitor : _TreeShakerVisitor;

    _covariantVisitor : _ExternalTypeVisitor;

    _contravariantVisitor : _ExternalTypeVisitor;

    _invariantVisitor : _ExternalTypeVisitor;

    _mirrorsLibrary : lib3.Library;

    isUsingMirrors : boolean;

    get forceShaking() : boolean {
        return this.programRoots != null && this.programRoots.isNotEmpty;
    }
    constructor(program : lib3.Program,_namedArguments? : {hierarchy? : lib5.ClassHierarchy,coreTypes? : lib6.CoreTypes,strongMode? : boolean,programRoots? : core.DartList<ProgramRoot>}) {
    }
    @defaultConstructor
    TreeShaker(program : lib3.Program,_namedArguments? : {hierarchy? : lib5.ClassHierarchy,coreTypes? : lib6.CoreTypes,strongMode? : boolean,programRoots? : core.DartList<ProgramRoot>}) {
        let {hierarchy,coreTypes,strongMode,programRoots} = Object.assign({
            "strongMode" : false}, _namedArguments );
        this._receiversOfName = new core.DartMap.literal([
        ]);
        this._dispatchTargetCandidates = new core.DartMap.literal([
        ]);
        this._usedMembers = new core.DartMap.literal([
        ]);
        this._worklist = new core.DartList<lib3.TreeNode>();
        this._escapedClasses = new core.DartSet<lib3.Class>();
        this._overriddenMembers = new core.DartSet<lib3.Member>();
        this._typedCalls = new core.DartList.literal<lib3.Expression>();
        this.isUsingMirrors = false;
        this._internal(program,(hierarchy || new lib5.ClassHierarchy(program)),(coreTypes || new lib6.CoreTypes(program)),strongMode,programRoots);
    }
    isMemberBodyUsed(member : lib3.Member) : boolean {
        return this._usedMembers.containsKey(member);
    }
    isMemberOverridden(member : lib3.Member) : boolean {
        return this._overriddenMembers.contains(member);
    }
    isMemberUsed(member : lib3.Member) : boolean {
        return this.isMemberBodyUsed(member) || this.isMemberOverridden(member);
    }
    isInstantiated(classNode : lib3.Class) : boolean {
        return this.getClassRetention(classNode).index >= ClassRetention.Instance.index;
    }
    isHierarchyUsed(classNode : lib3.Class) : boolean {
        return this.getClassRetention(classNode).index >= ClassRetention.Hierarchy.index;
    }
    getClassRetention(classNode : lib3.Class) : ClassRetention {
        let index : number = this.hierarchy.getClassIndex(classNode);
        return this._classRetention[index];
    }
    transform(program : lib3.Program) : void {
        if (this.isUsingMirrors) return;
        new _TreeShakingTransformer(this).transform(program);
    }
    @namedConstructor
    _internal(program : lib3.Program,hierarchy : lib5.ClassHierarchy,coreTypes : lib6.CoreTypes,strongMode : boolean,programRoots : core.DartList<ProgramRoot>) {
        this._receiversOfName = new core.DartMap.literal([
        ]);
        this._dispatchTargetCandidates = new core.DartMap.literal([
        ]);
        this._usedMembers = new core.DartMap.literal([
        ]);
        this._worklist = new core.DartList<lib3.TreeNode>();
        this._escapedClasses = new core.DartSet<lib3.Class>();
        this._overriddenMembers = new core.DartSet<lib3.Member>();
        this._typedCalls = new core.DartList.literal<lib3.Expression>();
        this.isUsingMirrors = false;
        this.hierarchy = hierarchy;
        this._dispatchedNames = new core.DartList<core.DartSet<lib3.Name>>(hierarchy.classes.length);
        this._usedMembersWithHost = new core.DartList<core.DartSet<lib3.Member>>(hierarchy.classes.length);
        this._classRetention = new core.DartList.filled(hierarchy.classes.length,ClassRetention.None);
        this.program = program;
        this.coreTypes = coreTypes;
        this.strongMode = strongMode;
        this.programRoots = programRoots;
        this._visitor = new _TreeShakerVisitor(this);
        this._covariantVisitor = new _ExternalTypeVisitor(this,{
            isCovariant : true});
        this._contravariantVisitor = new _ExternalTypeVisitor(this,{
            isContravariant : true});
        this._invariantVisitor = new _ExternalTypeVisitor(this,{
            isCovariant : true,isContravariant : true});
        this._mirrorsLibrary = this.coreTypes.mirrorsLibrary;
        try {
            this._build();
        } catch (__error__) {

            if (is(__error__,_UsingMirrorsException)){
                this.isUsingMirrors = true;
            }
        }
    }
    static _internal : new(program : lib3.Program,hierarchy : lib5.ClassHierarchy,coreTypes : lib6.CoreTypes,strongMode : boolean,programRoots : core.DartList<ProgramRoot>) => TreeShaker;

    _build() : void {
        if (op(Op.EQUALS,this.program.mainMethod,null)) {
            throw 'Cannot perform tree shaking on a program without a main method';
        }
        if (this.program.mainMethod.function.positionalParameters.length > 0) {
            this._addInstantiatedExternalSubclass(this.coreTypes.listClass);
            this._addInstantiatedExternalSubclass(this.coreTypes.stringClass);
        }
        this._addDispatchedName(this.hierarchy.rootClass,new lib3.Name('noSuchMethod'));
        this._addPervasiveUses();
        this._addUsedMember(null,this.program.mainMethod);
        if (this.programRoots != null) {
            let table = new lib4.LibraryIndex(this.program,this.programRoots.map((r : any) =>  {
                return r.library;
            }));
            for(let root of this.programRoots) {
                this._addUsedRoot(root,table);
            }
        }
        this._iterateWorklist();
        if (this.strongMode) {
            for(let i : number = this.hierarchy.classes.length - 1; i >= 0; --i){
                let class_ : lib3.Class = this.hierarchy.classes[i];
                if (this.isHierarchyUsed(class_)) {
                    this.hierarchy.forEachOverridePair(class_,(ownMember : lib3.Member,superMember : lib3.Member,isSetter : boolean) =>  {
                        if (this.isMemberBodyUsed(ownMember) || this._overriddenMembers.contains(ownMember)) {
                            this._overriddenMembers.add(superMember);
                            this._visitor.visitMemberInterface(superMember);
                        }
                    });
                }
            }
            /* TODO (AssertStatementImpl) : assert (_worklist.isEmpty); */;
        }
    }
    _addPervasiveUses() : void {
        this._addInstantiatedExternalSubclass(this.coreTypes.stringClass);
        this._addInstantiatedExternalSubclass(this.coreTypes.intClass);
        this._addInstantiatedExternalSubclass(this.coreTypes.boolClass);
        this._addInstantiatedExternalSubclass(this.coreTypes.nullClass);
        this._addInstantiatedExternalSubclass(this.coreTypes.functionClass);
        this._addInstantiatedExternalSubclass(this.coreTypes.invocationClass);
    }
    _addDispatchedName(receiver : lib3.Class,name : lib3.Name) : void {
        let index : number = this.hierarchy.getClassIndex(receiver);
        let receiverNames : core.DartSet<lib3.Name> = this._dispatchedNames[index] = ( this._dispatchedNames[index] ) || ( new core.DartSet<lib3.Name>() );
        if (receiverNames.add(name)) {
            let candidates : core.DartList<lib3.TreeNode> = this._dispatchTargetCandidates.get(name);
            if (candidates != null) {
                for(let i : number = 0; i < candidates.length; i += 2){
                    let host : lib3.Class = candidates[i];
                    if (this.hierarchy.isSubtypeOf(host,receiver)) {
                        let member : lib3.Member = candidates[i + 1];
                        let lastPair : number = candidates.length - 2;
                        candidates[i] = candidates[lastPair];
                        candidates[i + 1] = candidates[lastPair + 1];
                        candidates.length -= 2;
                        i -= 2;
                        this._addUsedMember(host,member);
                    }
                }
            }
            let subtypes = this.hierarchy.getSubtypesOf(receiver);
            let receiverSet = this._receiversOfName.get(name);
            this._receiversOfName.set(name,op(Op.EQUALS,receiverSet,null) ? subtypes : this._receiversOfName.get(name).union(subtypes));
        }
    }
    _addDispatchTarget(host : lib3.Class,member : lib3.Member) : void {
        let receivers : lib5.ClassSet = this._receiversOfName.get(member.name);
        if (receivers != null && receivers.contains(host)) {
            this._addUsedMember(host,member);
        }else {
            ((_) : core.DartList<lib3.TreeNode> =>  {
                {
                    _.add(host);
                    _.add(member);
                    return _;
                }
            })(this._dispatchTargetCandidates.putIfAbsent(member.name,TreeShaker._makeTreeNodeList.bind(this)));
        }
    }
    static _makeTreeNodeList() : core.DartList<lib3.TreeNode> {
        return new core.DartList.literal<lib3.TreeNode>();
    }
    _addInstantiatedClass(classNode : lib3.Class) : void {
        let index : number = this.hierarchy.getClassIndex(classNode);
        let retention : ClassRetention = this._classRetention[index];
        if (retention.index < ClassRetention.Instance.index) {
            this._classRetention[index] = ClassRetention.Instance;
            this._propagateClassInstanceLevel(classNode,retention);
        }
    }
    _addInstantiatedExternalSubclass(classNode : lib3.Class) : void {
        let index : number = this.hierarchy.getClassIndex(classNode);
        let retention : ClassRetention = this._classRetention[index];
        if (retention.index < ClassRetention.ExternalInstance.index) {
            this._classRetention[index] = ClassRetention.ExternalInstance;
            this._propagateClassExternalInstanceLevel(classNode,retention);
        }
    }
    _propagateClassExternalInstanceLevel(classNode : lib3.Class,oldRetention : ClassRetention) : void {
        if (oldRetention.index >= ClassRetention.ExternalInstance.index) {
            return;
        }
        this._propagateClassInstanceLevel(classNode,oldRetention);
        for(let member of this.hierarchy.getInterfaceMembers(classNode)) {
            if (is(member, lib3.Field)) {
                this._covariantVisitor.visit(member.type);
            }else {
                this._addCallToExternalProcedure(member);
            }
            this._addDispatchTarget(classNode,member);
        }
        for(let member of this.hierarchy.getInterfaceMembers(classNode,{
            setters : true})) {
            this._addDispatchTarget(classNode,member);
        }
    }
    _propagateClassInstanceLevel(classNode : lib3.Class,oldRetention : ClassRetention) : void {
        if (oldRetention.index >= ClassRetention.Instance.index) {
            return;
        }
        this._propagateClassHierarchyLevel(classNode,oldRetention);
        for(let member of this.hierarchy.getDispatchTargets(classNode)) {
            this._addDispatchTarget(classNode,member);
        }
        for(let member of this.hierarchy.getDispatchTargets(classNode,{
            setters : true})) {
            this._addDispatchTarget(classNode,member);
        }
        for(let node : lib3.Class = classNode; node != null; node = node.superclass){
            for(let field of node.mixin.fields) {
                if (!field.isStatic) {
                    this._addUsedMember(classNode,field);
                }
            }
        }
    }
    _propagateClassHierarchyLevel(classNode : lib3.Class,oldRetention : ClassRetention) : void {
        if (oldRetention.index >= ClassRetention.Hierarchy.index) {
            return;
        }
        this._propagateClassNamespaceLevel(classNode,oldRetention);
        let visitor = this._visitor;
        ((_700_)=>(!!_700_)?_700_.accept(visitor):null)(classNode.supertype);
        ((_701_)=>(!!_701_)?_701_.accept(visitor):null)(classNode.mixedInType);
        lib3.visitList(classNode.implementedTypes,visitor);
        lib3.visitList(classNode.typeParameters,visitor);
    }
    _propagateClassNamespaceLevel(classNode : lib3.Class,oldRetention : ClassRetention) : void {
        if (oldRetention.index >= ClassRetention.Namespace.index) {
            return;
        }
        lib3.visitList(classNode.annotations,this._visitor);
    }
    _addUsedRoot(root : ProgramRoot,table : lib4.LibraryIndex) : void {
        if (op(Op.EQUALS,root.kind,ProgramRootKind.ExternallyInstantiatedClass)) {
            let class_ : lib3.Class = root.getClass(table);
            this._addInstantiatedClass(class_);
            for(let constructor of class_.constructors) {
                this._addUsedMember(class_,constructor);
            }
            for(let member of class_.procedures) {
                if (member.isStatic && op(Op.EQUALS,member.kind,lib3.ProcedureKind.Factory)) {
                    this._addUsedMember(class_,member);
                }
            }
        }else {
            let member = root.getMember(table);
            this._addUsedMember(member.enclosingClass,member);
            if (is(member, lib3.Constructor)) {
                this._addInstantiatedClass(member.enclosingClass);
            }
        }
    }
    _addClassUsedInType(classNode : lib3.Class) : void {
        let index : number = this.hierarchy.getClassIndex(classNode);
        let retention : ClassRetention = this._classRetention[index];
        if (retention.index < ClassRetention.Hierarchy.index) {
            this._classRetention[index] = ClassRetention.Hierarchy;
            this._propagateClassHierarchyLevel(classNode,retention);
        }
    }
    _addStaticNamespace(container : lib3.TreeNode) : void {
        /* TODO (AssertStatementImpl) : assert (container is Class || container is Library); */;
        if (is(container, lib3.Class)) {
            let index : number = this.hierarchy.getClassIndex(container);
            let oldRetention = this._classRetention[index];
            if (op(Op.EQUALS,oldRetention,ClassRetention.None)) {
                this._classRetention[index] = ClassRetention.Namespace;
                this._propagateClassNamespaceLevel(container,oldRetention);
            }
        }
    }
    _addUsedMember(host : lib3.Class,member : lib3.Member) : void {
        if (!this.forceShaking && op(Op.EQUALS,member.enclosingLibrary,this._mirrorsLibrary)) {
            throw new _UsingMirrorsException();
        }
        if (host != null) {
            let index : number = this.hierarchy.getClassIndex(host);
            let members : core.DartSet<lib3.Member> = this._usedMembersWithHost[index] = ( this._usedMembersWithHost[index] ) || ( new core.DartSet<lib3.Member>() );
            if (!members.add(member)) return;
            this._usedMembers.putIfAbsent(member,TreeShaker._makeIncompleteSummary.bind(this));
        }else {
            if (this._usedMembers.containsKey(member)) return;
            this._usedMembers.set(member,TreeShaker._makeIncompleteSummary());
            if (isNot(member, lib3.Constructor)) {
                this._addStaticNamespace(member.parent);
            }
        }
        ((_) : core.DartList<lib3.TreeNode> =>  {
            {
                _.add(host);
                _.add(member);
                return _;
            }
        })(this._worklist);
        if (is(member, lib3.Procedure) && member.isExternal) {
            this._addCallToExternalProcedure(member);
        }
    }
    _addCallToExternalProcedure(member : lib3.Procedure) : void {
        let function : lib3.FunctionNode = member.function;
        this._covariantVisitor.visit(function.returnType);
        for(let i : number = 0; i < function.positionalParameters.length; ++i){
            this._contravariantVisitor.visit(function.positionalParameters[i].type);
        }
        for(let i : number = 0; i < function.namedParameters.length; ++i){
            this._contravariantVisitor.visit(function.namedParameters[i].type);
        }
    }
    _addEscapedClass(node : lib3.Class) : void {
        if (!this._escapedClasses.add(node)) return;
        for(let member of this.hierarchy.getInterfaceMembers(node)) {
            if (is(member, lib3.Procedure)) {
                this._addDispatchedName(node,member.name);
            }
        }
    }
    static _makeIncompleteSummary() : core.DartList<lib3.Node> {
        return new core.DartList.literal<lib3.Node>(null);
    }
    isIncompleteSummary(summary : core.DartList<lib3.Node>) : boolean {
        return summary.isNotEmpty && op(Op.EQUALS,summary[0],null);
    }
    _iterateWorklist() : void {
        while (this._worklist.isNotEmpty){
            let member : lib3.Member = this._worklist.removeLast();
            let host : lib3.Class = this._worklist.removeLast();
            let summary : core.DartList<lib3.Node> = this._usedMembers.get(member);
            if (this.isIncompleteSummary(summary)) {
                summary.clear();
                this._visitor.analyzeAndBuildSummary(member,summary);
            }
            for(let i : number = 0; i < summary.length; ++i){
                let summaryNode : lib3.Node = summary[i];
                if (is(summaryNode, lib3.Member)) {
                    this._addUsedMember(host,summaryNode);
                }else if (is(summaryNode, lib3.Name)) {
                    let target : lib3.Member = this.hierarchy.getDispatchTarget(host,summaryNode);
                    if (target != null) {
                        this._addUsedMember(host,target);
                    }
                }else if (core.identical(summaryNode,properties._setterSentinel)) {
                    let name : lib3.Name = summary[++i];
                    let target : lib3.Member = this.hierarchy.getDispatchTarget(host,name,{
                        setter : true});
                    if (target != null) {
                        this._addUsedMember(host,target);
                    }
                }else {
                    throw `Unexpected summary node: ${summaryNode}`;
                }
            }
        }
    }
    getDiagnosticString() : string {
        return `dispatchNames: ${this._dispatchedNames.length}\ndispatchTargetCandidates.keys: ${this._dispatchTargetCandidates.length}\nusedMembersWithHost: ${this._usedMembersWithHost.length}\nusedMembers: ${this._usedMembers.length}\nclassRetention: ${this._classRetention.length}\nescapedClasses: ${this._escapedClasses.length}\n`;
    }
}

export namespace _TreeShakerVisitor {
    export type Constructors = lib7.RecursiveVisitor.Constructors | '_TreeShakerVisitor';
    export type Interface = Omit<_TreeShakerVisitor, Constructors>;
}
@DartClass
export class _TreeShakerVisitor extends lib7.RecursiveVisitor<any> {
    shaker : TreeShaker;

    coreTypes : lib6.CoreTypes;

    types : lib8.TypeEnvironment;

    strongMode : boolean;

    summary : core.DartList<lib3.Node>;

    constructor(shaker : TreeShaker) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TreeShakerVisitor(shaker : TreeShaker) {
        this.shaker = shaker;
        this.coreTypes = shaker.coreTypes;
        this.strongMode = shaker.strongMode;
        this.types = new lib8.TypeEnvironment(shaker.coreTypes,shaker.hierarchy);
        this.types.errorHandler = this.handleError.bind(this);
    }
    handleError(node : lib3.TreeNode,message : string) : void {
        core.print(`[error] ${message} (${node.location})`);
    }
    analyzeAndBuildSummary(member : lib3.Member,summary : core.DartList<lib3.Node>) : void {
        this.summary = summary;
        this.types.thisType = ((t)=>(!!t)?t.thisType:null)(member.enclosingClass);
        member.accept(this);
    }
    visitMemberInterface(node : lib3.Member) : void {
        if (is(node, lib3.Field)) {
            node.type.accept(this);
        }else if (is(node, lib3.Procedure)) {
            this.visitFunctionInterface(node.function);
        }
    }
    visitFunctionInterface(node : lib3.FunctionNode) {
        for(let parameter of node.typeParameters) {
            parameter.bound.accept(this);
        }
        for(let parameter of node.positionalParameters) {
            parameter.type.accept(this);
        }
        for(let parameter of node.namedParameters) {
            parameter.type.accept(this);
        }
        node.returnType.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionNode(node : lib3.FunctionNode) {
        switch (node.asyncMarker) {
            case lib3.AsyncMarker.Sync:
                break;
            case lib3.AsyncMarker.SyncStar:
                this.shaker._addInstantiatedExternalSubclass(this.coreTypes.iterableClass);
                break;
            case lib3.AsyncMarker.Async:
                this.shaker._addInstantiatedExternalSubclass(this.coreTypes.futureClass);
                break;
            case lib3.AsyncMarker.AsyncStar:
                this.shaker._addInstantiatedExternalSubclass(this.coreTypes.streamClass);
                break;
            case lib3.AsyncMarker.SyncYielding:
                break;
        }
        node.visitChildren(this);
    }
    addUseFrom(target : lib3.Member,from : lib3.Class) : void {
        this.shaker._addUsedMember(from,target);
    }
    addUseFromCurrentHost(target : lib3.Member) : void {
        this.summary.add(target);
    }
    addStaticUse(target : lib3.Member) : void {
        this.shaker._addUsedMember(null,target);
    }
    addSelfDispatch(name : lib3.Name,_namedArguments? : {setter? : boolean}) : void {
        let {setter} = Object.assign({
            "setter" : false}, _namedArguments );
        if (setter) {
            ((_) : core.DartList<lib3.Node> =>  {
                {
                    _.add(properties._setterSentinel);
                    _.add(name);
                    return _;
                }
            })(this.summary);
        }else {
            this.summary.add(name);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperInitializer(node : lib3.SuperInitializer) {
        this.addUseFromCurrentHost(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingInitializer(node : lib3.RedirectingInitializer) {
        this.addUseFromCurrentHost(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInvocation(node : lib3.ConstructorInvocation) {
        this.shaker._addInstantiatedClass(node.target.enclosingClass);
        this.addUseFrom(node.target,node.target.enclosingClass);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticInvocation(node : lib3.StaticInvocation) {
        this.addStaticUse(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectMethodInvocation(node : lib3.DirectMethodInvocation) {
        if (isNot(node.receiver, lib3.ThisExpression)) {
            throw 'Direct calls are only supported on "this"';
        }
        this.addUseFromCurrentHost(node.target);
        node.visitChildren(this);
    }
    getKnownSupertype(type : lib3.DartType) : lib3.Class {
        if (is(type, lib3.InterfaceType)) {
            return type.classNode;
        }else if (is(type, lib3.TypeParameterType)) {
            return this.getKnownSupertype(type.parameter.bound);
        }else if (is(type, lib3.FunctionType)) {
            return this.coreTypes.functionClass;
        }else if (is(type, lib3.BottomType)) {
            return this.coreTypes.nullClass;
        }else {
            return this.coreTypes.objectClass;
        }
    }
    getStaticType(node : lib3.Expression) : lib3.Class {
        if (!this.strongMode) return this.coreTypes.objectClass;
        return this.getKnownSupertype(node.getStaticType(this.types));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : lib3.MethodInvocation) {
        if (is(node.receiver, lib3.ThisExpression)) {
            this.addSelfDispatch(node.name);
        }else {
            this.shaker._addDispatchedName(this.getStaticType(node.receiver),node.name);
            if (node.interfaceTarget != null) {
                this.shaker._typedCalls.add(node);
            }
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticGet(node : lib3.StaticGet) {
        this.addStaticUse(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticSet(node : lib3.StaticSet) {
        this.addStaticUse(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectPropertyGet(node : lib3.DirectPropertyGet) {
        if (isNot(node.receiver, lib3.ThisExpression)) {
            throw 'Direct calls are only supported on "this"';
        }
        this.addUseFromCurrentHost(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectPropertySet(node : lib3.DirectPropertySet) {
        if (isNot(node.receiver, lib3.ThisExpression)) {
            throw 'Direct calls are only supported on "this"';
        }
        this.addUseFromCurrentHost(node.target);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyGet(node : lib3.PropertyGet) {
        if (is(node.receiver, lib3.ThisExpression)) {
            this.addSelfDispatch(node.name);
        }else {
            this.shaker._addDispatchedName(this.getStaticType(node.receiver),node.name);
            if (node.interfaceTarget != null) {
                this.shaker._typedCalls.add(node);
            }
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertySet(node : lib3.PropertySet) {
        if (is(node.receiver, lib3.ThisExpression)) {
            this.addSelfDispatch(node.name,{
                setter : true});
        }else {
            this.shaker._addDispatchedName(this.getStaticType(node.receiver),node.name);
            if (node.interfaceTarget != null) {
                this.shaker._typedCalls.add(node);
            }
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitListLiteral(node : lib3.ListLiteral) {
        this.shaker._addInstantiatedExternalSubclass(this.coreTypes.listClass);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMapLiteral(node : lib3.MapLiteral) {
        this.shaker._addInstantiatedExternalSubclass(this.coreTypes.mapClass);
        node.visitChildren(this);
    }
    private static __$_toStringName : lib3.Name;
    static get _toStringName() : lib3.Name { 
        if (this.__$_toStringName===undefined) {
            this.__$_toStringName = new lib3.Name('toString');
        }
        return this.__$_toStringName;
    }
    static set _toStringName(__$value : lib3.Name)  { 
        this.__$_toStringName = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStringConcatenation(node : lib3.StringConcatenation) {
        for(let expression of node.expressions) {
            this.shaker._addDispatchedName(this.getStaticType(expression),_TreeShakerVisitor._toStringName);
        }
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterfaceType(node : lib3.InterfaceType) {
        this.shaker._addClassUsedInType(node.classNode);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSupertype(node : lib3.Supertype) {
        this.shaker._addClassUsedInType(node.classNode);
        node.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDoubleLiteral(node : lib3.DoubleLiteral) {
        this.shaker._addInstantiatedExternalSubclass(this.coreTypes.doubleClass);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSymbolLiteral(node : lib3.SymbolLiteral) {
        this.shaker._addInstantiatedExternalSubclass(this.coreTypes.symbolClass);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeLiteral(node : lib3.TypeLiteral) {
        this.shaker._addInstantiatedExternalSubclass(this.coreTypes.typeClass);
        node.visitChildren(this);
    }
}

export enum ClassRetention {
    None,
    Namespace,
    Hierarchy,
    Instance,
    ExternalInstance
}

export namespace _TreeShakingTransformer {
    export type Constructors = lib7.Transformer.Constructors | '_TreeShakingTransformer';
    export type Interface = Omit<_TreeShakingTransformer, Constructors>;
}
@DartClass
export class _TreeShakingTransformer extends lib7.Transformer {
    shaker : TreeShaker;

    constructor(shaker : TreeShaker) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TreeShakingTransformer(shaker : TreeShaker) {
        this.shaker = shaker;
    }
    _translateInterfaceTarget(target : lib3.Member) : lib3.Member {
        return target != null && this.shaker.isMemberUsed(target) ? target : null;
    }
    transform(program : lib3.Program) : void {
        for(let node of this.shaker._typedCalls) {
            if (is(node, lib3.MethodInvocation)) {
                node.interfaceTarget = this._translateInterfaceTarget(node.interfaceTarget);
            }else if (is(node, lib3.PropertyGet)) {
                node.interfaceTarget = this._translateInterfaceTarget(node.interfaceTarget);
            }else if (is(node, lib3.PropertySet)) {
                node.interfaceTarget = this._translateInterfaceTarget(node.interfaceTarget);
            }
        }
        for(let library of program.libraries) {
            if (!this.shaker.forceShaking && library.importUri.scheme == 'dart') {
                continue;
            }
            library.transformChildren(this);
        }
    }
    visitClass(node : lib3.Class) : lib3.Class {
        switch (this.shaker.getClassRetention(node)) {
            case ClassRetention.None:
                ((_702_)=>(!!_702_)?_702_.unbind():null)(node.canonicalName);
                return null;
            case ClassRetention.Namespace:
                node.supertype = this.shaker.coreTypes.objectClass.asRawSupertype;
                node.implementedTypes.clear();
                node.typeParameters.clear();
                node.isAbstract = true;
                /* TODO (AssertStatementImpl) : assert (node.mixedInType == null); */;
                break;
            case ClassRetention.Hierarchy:
                node.isAbstract = true;
                break;
            case ClassRetention.Instance:
            case ClassRetention.ExternalInstance:
                break;
        }
        node.transformChildren(this);
        return node;
    }
    defaultMember(node : lib3.Member) : lib3.Member {
        if (!this.shaker.isMemberBodyUsed(node)) {
            if (!this.shaker.isMemberOverridden(node)) {
                ((_703_)=>(!!_703_)?_703_.unbind():null)(node.canonicalName);
                return null;
            }
            if (is(node, lib3.Procedure)) {
                if (node.enclosingClass.isAbstract) {
                    node.isAbstract = true;
                    node.function.body = null;
                }else {
                    if (node.function.body != null) {
                        node.function.body = ((_) : lib3.ExpressionStatement =>  {
                            {
                                _.parent = node.function;
                                return _;
                            }
                        })(new lib3.ExpressionStatement(new lib3.Throw(new lib3.StringLiteral('Method removed by tree-shaking'))));
                    }
                }
                node.function.asyncMarker = lib3.AsyncMarker.Sync;
            }else if (is(node, lib3.Field)) {
                node.initializer = null;
            }
        }
        return node;
    }
    defaultTreeNode(node : lib3.TreeNode) : lib3.TreeNode {
        return node;
    }
}

export namespace _ExternalTypeVisitor {
    export type Constructors = lib7.DartTypeVisitor.Constructors | '_ExternalTypeVisitor';
    export type Interface = Omit<_ExternalTypeVisitor, Constructors>;
}
@DartClass
export class _ExternalTypeVisitor extends lib7.DartTypeVisitor<any> {
    shaker : TreeShaker;

    isCovariant : boolean;

    isContravariant : boolean;

    get hierarchy() : lib5.ClassHierarchy {
        return this.shaker.hierarchy;
    }
    constructor(shaker : TreeShaker,_namedArguments? : {isCovariant? : boolean,isContravariant? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ExternalTypeVisitor(shaker : TreeShaker,_namedArguments? : {isCovariant? : boolean,isContravariant? : boolean}) {
        let {isCovariant,isContravariant} = Object.assign({
            "isCovariant" : false,
            "isContravariant" : false}, _namedArguments );
        this.shaker = shaker;
        this.isCovariant = isCovariant;
        this.isContravariant = isContravariant;
    }
    visit(type : lib3.DartType) : void {
        return ((_704_)=>(!!_704_)?_704_.accept(this):null)(type);
    }
    visitContravariant(type : lib3.DartType) : void {
        if (this.isCovariant && this.isContravariant) {
            ((_705_)=>(!!_705_)?_705_.accept(this):null)(type);
        }else if (this.isContravariant) {
            ((_706_)=>(!!_706_)?_706_.accept(this.shaker._covariantVisitor):null)(type);
        }else {
            ((_707_)=>(!!_707_)?_707_.accept(this.shaker._contravariantVisitor):null)(type);
        }
    }
    visitCovariant(type : lib3.DartType) {
        return ((_708_)=>(!!_708_)?_708_.accept(this):null)(type);
    }
    visitInvariant(type : lib3.DartType) {
        return this.shaker._invariantVisitor.visit(type);
    }
    visitInvalidType(node : lib3.InvalidType) {
    }
    visitDynamicType(node : lib3.DynamicType) {
    }
    visitVoidType(node : lib3.VoidType) {
    }
    visitVectorType(node : lib3.VectorType) {
    }
    visitInterfaceType(node : lib3.InterfaceType) {
        if (this.isCovariant) {
            this.shaker._addInstantiatedExternalSubclass(node.classNode);
        }
        if (this.isContravariant) {
            this.shaker._addEscapedClass(node.classNode);
        }
        for(let i : number = 0; i < node.typeArguments.length; ++i){
            let typeArgument : lib3.DartType = node.typeArguments[i];
            if (this.isWhitelistedCovariant(node.classNode)) {
                this.visitCovariant(typeArgument);
            }else {
                this.visitInvariant(typeArgument);
            }
        }
    }
    visitTypedefType(node : lib3.TypedefType) {
        throw 'TypedefType is not implemented in tree shaker';
    }
    visitFunctionType(node : lib3.FunctionType) {
        this.visit(node.returnType);
        for(let i : number = 0; i < node.positionalParameters.length; ++i){
            this.visitContravariant(node.positionalParameters[i]);
        }
        for(let i : number = 0; i < node.namedParameters.length; ++i){
            this.visitContravariant(node.namedParameters[i].type);
        }
    }
    visitTypeParameterType(node : lib3.TypeParameterType) {
    }
    isWhitelistedCovariant(classNode : lib3.Class) : boolean {
        if (classNode.typeParameters.isEmpty) return false;
        let coreTypes : lib6.CoreTypes = this.shaker.coreTypes;
        return op(Op.EQUALS,classNode,coreTypes.iteratorClass) || op(Op.EQUALS,classNode,coreTypes.iterableClass) || op(Op.EQUALS,classNode,coreTypes.futureClass) || op(Op.EQUALS,classNode,coreTypes.streamClass) || op(Op.EQUALS,classNode,coreTypes.listClass) || op(Op.EQUALS,classNode,coreTypes.mapClass);
    }
}

export namespace _UsingMirrorsException {
    export type Constructors = '_UsingMirrorsException';
    export type Interface = Omit<_UsingMirrorsException, Constructors>;
}
@DartClass
export class _UsingMirrorsException {
    constructor() {
    }
    @defaultConstructor
    _UsingMirrorsException() {
    }
}

export class properties {
    private static __$_setterSentinel : lib3.Node;
    static get _setterSentinel() : lib3.Node { 
        if (this.__$_setterSentinel===undefined) {
            this.__$_setterSentinel = new lib3.InvalidType();
        }
        return this.__$_setterSentinel;
    }
    static set _setterSentinel(__$value : lib3.Node)  { 
        this.__$_setterSentinel = __$value;
    }

}
