/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/summary_common.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "./../context/mock_sdk";

export var absUri : (path : string) => string = (path : string) : string =>  {
    let absolutePath : string = lib3.properties.posix.absolute(path);
    return lib3.properties.posix.toUri(absolutePath).toString();
};
export var canonicalize : (obj : core.DartObject,_namedArguments? : {orderByName? : boolean}) => core.DartObject = (obj : core.DartObject,_namedArguments? : {orderByName? : boolean}) : core.DartObject =>  {
    let {orderByName} = Object.assign({
        "orderByName" : false}, _namedArguments );
    if (is(obj, any)) {
        let result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        obj.toMap().forEach((key : string,value : core.DartObject) =>  {
            let orderByName : boolean = false;
            if (is(obj, any) && key == 'names' || is(obj, any) && key == 'members') {
                orderByName = true;
            }
            result.set(key,canonicalize(value,{
                orderByName : orderByName}));
        });
        return result;
    }else if (is(obj, core.DartList<any>)) {
        let result : core.DartList<core.DartObject> = new core.DartList.literal<core.DartObject>();
        for(let item of obj) {
            result.add(canonicalize(item));
        }
        if (orderByName) {
            result.sort((a : core.DartObject,b : core.DartObject) =>  {
                if (is(a, core.DartMap<any,any>) && is(b, core.DartMap<any,any>)) {
                    return core.DartComparable.compare(a.get('name'),b.get('name'));
                }else {
                    return 0;
                }
            });
        }
        return result;
    }else if (is(obj, "string") || is(obj, "number") || is(obj, "boolean")) {
        return obj;
    }else {
        return obj.toString();
    }
};
export var computePublicNamespaceFromText : (text : string,source : any) => any = (text : string,source : any) : any =>  {
    let reader : any = new bare.createInstance(any,null,text);
    let scanner : any = new bare.createInstance(any,null,source,reader,AnalysisErrorListener.NULL_LISTENER);
    let parser : any = new bare.createInstance(any,null,source,AnalysisErrorListener.NULL_LISTENER);
    let unit : any = parser.parseCompilationUnit(scanner.tokenize());
    let namespace : any = new bare.createInstance(any,null,null /*topLevl*/.computePublicNamespace(unit).toBuffer());
    return namespace;
};
export namespace SerializedMockSdk {
    export type Constructors = '_';
    export type Interface = Omit<SerializedMockSdk, Constructors>;
}
@DartClass
export class SerializedMockSdk {
    private static __$instance : SerializedMockSdk;
    static get instance() : SerializedMockSdk { 
        if (this.__$instance===undefined) {
            this.__$instance = SerializedMockSdk._serializeMockSdk();
        }
        return this.__$instance;
    }
    static set instance(__$value : SerializedMockSdk)  { 
        this.__$instance = __$value;
    }

    uriToUnlinkedUnit : core.DartMap<string,any>;

    uriToLinkedLibrary : core.DartMap<string,any>;

    @namedConstructor
    _(uriToUnlinkedUnit : core.DartMap<string,any>,uriToLinkedLibrary : core.DartMap<string,any>) {
        this.uriToUnlinkedUnit = uriToUnlinkedUnit;
        this.uriToLinkedLibrary = uriToLinkedLibrary;
    }
    static _ : new(uriToUnlinkedUnit : core.DartMap<string,any>,uriToLinkedLibrary : core.DartMap<string,any>) => SerializedMockSdk;

    static _serializeMockSdk() : SerializedMockSdk {
        try {
            let uriToUnlinkedUnit : core.DartMap<string,any> = new core.DartMap.literal([
            ]);
            let uriToLinkedLibrary : core.DartMap<string,any> = new core.DartMap.literal([
            ]);
            let bundle : any = new lib4.MockSdk().getLinkedBundle();
            for(let i : number = 0; i < bundle.unlinkedUnitUris.length; i++){
                let uri : string = op(Op.INDEX,bundle.unlinkedUnitUris,i);
                uriToUnlinkedUnit.set(uri,op(Op.INDEX,bundle.unlinkedUnits,i));
            }
            for(let i : number = 0; i < bundle.linkedLibraryUris.length; i++){
                let uri : string = op(Op.INDEX,bundle.linkedLibraryUris,i);
                uriToLinkedLibrary.set(uri,op(Op.INDEX,bundle.linkedLibraries,i));
            }
            return new SerializedMockSdk._(uriToUnlinkedUnit,uriToLinkedLibrary);
        } catch (__error__) {

            {
                let _ = __error__;
                return null;
            }
        }
    }
}

export namespace SummaryTest {
    export type Constructors = 'SummaryTest';
    export type Interface = Omit<SummaryTest, Constructors>;
}
@DartClass
export class SummaryTest {
    allowMissingFiles : boolean;

    get definingUnit() : any {
        return op(Op.INDEX,this.linked.units,0);
    }
    get includeInformative() : boolean {
        return true;
    }
    @AbstractProperty
    get linked() : any{ throw 'abstract'}
    @AbstractProperty
    get skipFullyLinkedData() : boolean{ throw 'abstract'}
    @AbstractProperty
    get skipNonConstInitializers() : boolean{ throw 'abstract'}
    @AbstractProperty
    get strongMode() : boolean{ throw 'abstract'}
    @AbstractProperty
    get unlinkedUnits() : core.DartList<any>{ throw 'abstract'}
    @Abstract
    addNamedSource(filePath : string,contents : string) : any{ throw 'abstract'}
    assertUnlinkedConst(constExpr : any,_namedArguments? : {isValidConst? : boolean,operators? : core.DartList<any>,assignmentOperators? : core.DartList<any>,ints? : core.DartList<number>,doubles? : core.DartList<double>,strings? : core.DartList<string>,referenceValidators? : core.DartList<(entityRef : any) => void>}) : void {
        let {isValidConst,operators,assignmentOperators,ints,doubles,strings,referenceValidators} = Object.assign({
            "isValidConst" : true,
            "operators" : new core.DartList.literal<any>(),
            "assignmentOperators" : new core.DartList.literal<any>(),
            "ints" : new core.DartList.literal<number>(),
            "doubles" : new core.DartList.literal<double>(),
            "strings" : new core.DartList.literal<string>(),
            "referenceValidators" : new core.DartList.literal<(entityRef : any) => void>()}, _namedArguments );
        expect(constExpr,isNotNull);
        expect(constExpr.isValidConst,isValidConst);
        expect(constExpr.operations,operators);
        expect(constExpr.ints,ints);
        expect(constExpr.doubles,doubles);
        expect(constExpr.strings,strings);
        expect(constExpr.assignmentOperators,assignmentOperators);
        expect(constExpr.references,hasLength(referenceValidators.length));
        for(let i : number = 0; i < referenceValidators.length; i++){
            (referenceValidators[i])(op(Op.INDEX,constExpr.references,i));
        }
    }
    checkAnnotationA(annotations : core.DartList<any>) : void {
        expect(annotations,hasLength(1));
        this.assertUnlinkedConst(annotations[0],{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    checkConstCycle(className : string,_namedArguments? : {name? : string,hasCycle? : boolean}) : void {
        let {name,hasCycle} = Object.assign({
            "name" : '',
            "hasCycle" : true}, _namedArguments );
        let cls : any = this.findClass(className);
        let constCycleSlot : number = this.findExecutable(name,{
            executables : cls.executables}).constCycleSlot;
        expect(constCycleSlot,isNot(0));
        if (!this.skipFullyLinkedData) {
            expect(this.definingUnit.constCycles,hasCycle ? contains(constCycleSlot) : isNot(contains(constCycleSlot)));
        }
    }
    checkDependency(dependency : number,absoluteUri : string) : void {
        expect(dependency,new bare.createInstance(any,null));
        expect(op(Op.INDEX,this.linked.dependencies,dependency).uri,absoluteUri);
    }
    checkDependencyParts(dependency : any,relativeUris : core.DartList<string>) : void {
        expect(dependency.parts,relativeUris);
    }
    checkDocumentationComment(documentationComment : any,text : string) : void {
        expect(documentationComment,isNotNull);
        let commentStart : number = new core.DartString(text).indexOf('/*');
        expect(commentStart,isNot(-1));
        let commentEnd : number = new core.DartString(text).indexOf('*/');
        expect(commentEnd,isNot(-1));
        commentEnd += 2;
        let expectedCommentText : string = new core.DartString(new core.DartString(text).substring(commentStart,commentEnd)).replaceAll('\n','\n');
        expect(documentationComment.text,expectedCommentText);
    }
    checkDynamicTypeRef(typeRef : any) : void {
        this.checkTypeRef(typeRef,null,'dynamic');
    }
    checkExportName(exportName : any,absoluteUri : string,expectedName : string,expectedKind : any,_namedArguments? : {expectedTargetUnit? : number}) : void {
        let {expectedTargetUnit} = Object.assign({
            "expectedTargetUnit" : 0}, _namedArguments );
        expect(exportName,new bare.createInstance(any,null));
        expect(exportName.dependency,isNot(0));
        this.checkDependency(exportName.dependency,absoluteUri);
        expect(exportName.name,expectedName);
        expect(exportName.kind,expectedKind);
        expect(exportName.unit,expectedTargetUnit);
    }
    checkHasDependency(relativeUri : string,_namedArguments? : {fullyLinked? : boolean}) : number {
        let {fullyLinked} = Object.assign({
            "fullyLinked" : false}, _namedArguments );
        let found : core.DartList<string> = new core.DartList.literal<string>();
        for(let i : number = 0; i < this.linked.dependencies.length; i++){
            let dep : any = op(Op.INDEX,this.linked.dependencies,i);
            if (op(Op.EQUALS,dep.uri,relativeUri)) {
                if (fullyLinked) {
                    expect(i,greaterThanOrEqualTo(this.linked.numPrelinkedDependencies));
                }else {
                    expect(i,lessThan(this.linked.numPrelinkedDependencies));
                }
                return i;
            }
            found.add(dep.uri);
        }
        fail(`Did not find dependency ${relativeUri}.  Found: ${found}`);
        return null;
    }
    checkInferredTypeSlot(slotId : number,absoluteUri : string,expectedName : string,_namedArguments? : {numTypeArguments? : number,expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number,onlyInStrongMode? : boolean}) : void {
        let {numTypeArguments,expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters,onlyInStrongMode} = Object.assign({
            "numTypeArguments" : 0,
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0,
            "onlyInStrongMode" : true}, _namedArguments );
        if (this.strongMode || !onlyInStrongMode) {
            this.checkLinkedTypeSlot(slotId,absoluteUri,expectedName,{
                numTypeArguments : numTypeArguments,expectedKind : expectedKind,expectedTargetUnit : expectedTargetUnit,linkedSourceUnit : linkedSourceUnit,unlinkedSourceUnit : unlinkedSourceUnit,numTypeParameters : numTypeParameters});
        }else {
            expect(slotId,isNot(0));
            expect(this.getTypeRefForSlot(slotId,{
                linkedSourceUnit : linkedSourceUnit}),isNull);
        }
    }
    checkLacksDependency(relativeUri : string) : void {
        for(let dep of this.linked.dependencies) {
            if (op(Op.EQUALS,dep.uri,relativeUri)) {
                fail(`Unexpected dependency found: ${relativeUri}`);
            }
        }
    }
    checkLinkedDynamicTypeRef(typeRef : any) : void {
        this.checkLinkedTypeRef(typeRef,null,'dynamic');
    }
    checkLinkedTypeRef(typeRef : any,absoluteUri : string,expectedName : string,_namedArguments? : {numTypeArguments? : number,expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number}) : void {
        let {numTypeArguments,expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters} = Object.assign({
            "numTypeArguments" : 0,
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0}, _namedArguments );
        linkedSourceUnit = ( linkedSourceUnit ) || ( this.definingUnit );
        expect(typeRef,isNotNull,{
            reason : 'No entry in linkedSourceUnit.types matching slotId'});
        expect(typeRef.paramReference,0);
        let index : number = typeRef.reference;
        expect(typeRef.typeArguments,hasLength(numTypeArguments));
        this.checkReferenceIndex(index,absoluteUri,expectedName,{
            expectedKind : expectedKind,expectedTargetUnit : expectedTargetUnit,linkedSourceUnit : linkedSourceUnit,unlinkedSourceUnit : unlinkedSourceUnit,numTypeParameters : numTypeParameters});
    }
    checkLinkedTypeSlot(slotId : number,absoluteUri : string,expectedName : string,_namedArguments? : {numTypeArguments? : number,expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number}) : void {
        let {numTypeArguments,expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters} = Object.assign({
            "numTypeArguments" : 0,
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0}, _namedArguments );
        expect(slotId,isNot(0));
        if (this.skipFullyLinkedData) {
            return;
        }
        linkedSourceUnit = ( linkedSourceUnit ) || ( this.definingUnit );
        this.checkLinkedTypeRef(this.getTypeRefForSlot(slotId,{
            linkedSourceUnit : linkedSourceUnit}),absoluteUri,expectedName,{
            numTypeArguments : numTypeArguments,expectedKind : expectedKind,expectedTargetUnit : expectedTargetUnit,linkedSourceUnit : linkedSourceUnit,unlinkedSourceUnit : unlinkedSourceUnit,numTypeParameters : numTypeParameters});
    }
    checkParamTypeRef(typeRef : any,deBruijnIndex : number) : void {
        expect(typeRef,new bare.createInstance(any,null));
        expect(typeRef.reference,0);
        expect(typeRef.typeArguments,isEmpty);
        expect(typeRef.paramReference,deBruijnIndex);
    }
    checkPrefix(prefixReference : number,name : string) : void {
        expect(prefixReference,isNot(0));
        expect(op(Op.INDEX,this.unlinkedUnits[0].references,prefixReference).prefixReference,0);
        expect(op(Op.INDEX,this.unlinkedUnits[0].references,prefixReference).name,name);
        expect(op(Op.INDEX,this.definingUnit.references,prefixReference).dependency,0);
        expect(op(Op.INDEX,this.definingUnit.references,prefixReference).kind,ReferenceKind.prefix);
        expect(op(Op.INDEX,this.definingUnit.references,prefixReference).unit,0);
    }
    checkReferenceIndex(referenceIndex : number,absoluteUri : string,expectedName : string,_namedArguments? : {expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number,localIndex? : number,unresolvedHasName? : boolean}) : any {
        let {expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters,localIndex,unresolvedHasName} = Object.assign({
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0,
            "localIndex" : 0,
            "unresolvedHasName" : false}, _namedArguments );
        linkedSourceUnit = ( linkedSourceUnit ) || ( this.definingUnit );
        unlinkedSourceUnit = ( unlinkedSourceUnit ) || ( this.unlinkedUnits[0] );
        let referenceResolution : any = op(Op.INDEX,linkedSourceUnit.references,referenceIndex);
        let name : string;
        let reference : any;
        if (referenceIndex < unlinkedSourceUnit.references.length) {
            expect(referenceResolution.name,isEmpty);
            reference = op(Op.INDEX,unlinkedSourceUnit.references,referenceIndex);
            name = reference.name;
            if (reference.prefixReference != 0) {
                expect(reference.prefixReference,lessThan(referenceIndex));
            }
        }else {
            name = referenceResolution.name;
        }
        expect(referenceIndex,isNot(0));
        if (absoluteUri == null) {
            expect(referenceResolution.dependency,0);
        }else {
            this.checkDependency(referenceResolution.dependency,absoluteUri);
        }
        if (expectedName == null) {
            expect(name,isEmpty);
        }else {
            expect(name,expectedName);
        }
        expect(referenceResolution.kind,expectedKind);
        expect(referenceResolution.unit,expectedTargetUnit);
        expect(referenceResolution.numTypeParameters,numTypeParameters);
        expect(referenceResolution.localIndex,localIndex);
        return reference;
    }
    checkTypeRef(typeRef : any,absoluteUri : string,expectedName : string,_namedArguments? : {expectedPrefix? : string,prefixExpectations? : core.DartList<_PrefixExpectation>,numTypeArguments? : number,expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number,unresolvedHasName? : boolean}) : void {
        let {expectedPrefix,prefixExpectations,numTypeArguments,expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters,unresolvedHasName} = Object.assign({
            "numTypeArguments" : 0,
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0,
            "unresolvedHasName" : false}, _namedArguments );
        linkedSourceUnit = ( linkedSourceUnit ) || ( this.definingUnit );
        expect(typeRef,new bare.createInstance(any,null));
        expect(typeRef.paramReference,0);
        let index : number = typeRef.reference;
        expect(typeRef.typeArguments,hasLength(numTypeArguments));
        let reference : any = this.checkReferenceIndex(index,absoluteUri,expectedName,{
            expectedKind : expectedKind,expectedTargetUnit : expectedTargetUnit,linkedSourceUnit : linkedSourceUnit,unlinkedSourceUnit : unlinkedSourceUnit,numTypeParameters : numTypeParameters,unresolvedHasName : unresolvedHasName});
        expect(reference,isNotNull,{
            reason : 'Unlinked type refs must refer to an explicit reference'});
        if (expectedPrefix != null) {
            this.checkPrefix(reference.prefixReference,expectedPrefix);
        }else if (prefixExpectations != null) {
            for(let expectation of prefixExpectations) {
                expect(reference.prefixReference,isNot(0));
                reference = this.checkReferenceIndex(reference.prefixReference,expectation.absoluteUri,expectation.name,{
                    expectedKind : expectation.kind,expectedTargetUnit : expectedTargetUnit,linkedSourceUnit : linkedSourceUnit,unlinkedSourceUnit : unlinkedSourceUnit,numTypeParameters : expectation.numTypeParameters});
            }
            expect(reference.prefixReference,0);
        }else {
            expect(reference.prefixReference,0);
        }
    }
    checkUnresolvedTypeRef(typeRef : any,expectedPrefix : string,expectedName : string,_namedArguments? : {linkedSourceUnit? : any,unlinkedSourceUnit? : any}) : void {
        let {linkedSourceUnit,unlinkedSourceUnit} = Object.assign({
        }, _namedArguments );
        this.checkTypeRef(typeRef,null,expectedName,{
            expectedPrefix : expectedPrefix,expectedKind : ReferenceKind.unresolved,linkedSourceUnit : linkedSourceUnit,unlinkedSourceUnit : unlinkedSourceUnit});
    }
    checkVoidTypeRef(typeRef : any) : void {
        this.checkTypeRef(typeRef,null,'void');
    }
    fail_invalid_prefix_dynamic() {
        let t = this.serializeTypeText('dynamic.T',{
            allowErrors : true});
        this.checkUnresolvedTypeRef(t,'dynamic','T');
    }
    fail_invalid_prefix_type_parameter() {
        this.checkUnresolvedTypeRef(op(Op.INDEX,this.serializeClassText('class C<T> { T.U x; }',{
            allowErrors : true}).fields,0).type,'T','U');
    }
    fail_invalid_prefix_void() {
        this.checkUnresolvedTypeRef(this.serializeTypeText('void.T',{
            allowErrors : true}),'void','T');
    }
    findClass(className : string,_namedArguments? : {failIfAbsent? : boolean,unit? : any}) : any {
        let {failIfAbsent,unit} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        unit = ( unit ) || ( this.unlinkedUnits[0] );
        let result : any;
        for(let cls of unit.classes) {
            if (op(Op.EQUALS,cls.name,className)) {
                if (result != null) {
                    fail(`Duplicate class ${className}`);
                }
                result = cls;
            }
        }
        if (op(Op.EQUALS,result,null) && failIfAbsent) {
            fail(`Class ${className} not found in serialized output`);
        }
        return result;
    }
    findEnum(enumName : string,_namedArguments? : {failIfAbsent? : boolean,unit? : any}) : any {
        let {failIfAbsent,unit} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        unit = ( unit ) || ( this.unlinkedUnits[0] );
        let result : any;
        for(let e of unit.enums) {
            if (op(Op.EQUALS,e.name,enumName)) {
                if (result != null) {
                    fail(`Duplicate enum ${enumName}`);
                }
                result = e;
            }
        }
        if (op(Op.EQUALS,result,null) && failIfAbsent) {
            fail(`Enum ${enumName} not found in serialized output`);
        }
        return result;
    }
    findExecutable(executableName : string,_namedArguments? : {executables? : core.DartList<any>,failIfAbsent? : boolean}) : any {
        let {executables,failIfAbsent} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        executables = ( executables ) || ( this.unlinkedUnits[0].executables );
        let result : any;
        for(let executable of executables) {
            if (op(Op.EQUALS,executable.name,executableName)) {
                if (result != null) {
                    fail(`Duplicate executable ${executableName}`);
                }
                result = executable;
            }
        }
        if (op(Op.EQUALS,result,null) && failIfAbsent) {
            fail(`Executable ${executableName} not found in serialized output`);
        }
        return result;
    }
    findTypedef(typedefName : string,_namedArguments? : {failIfAbsent? : boolean,unit? : any}) : any {
        let {failIfAbsent,unit} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        unit = ( unit ) || ( this.unlinkedUnits[0] );
        let result : any;
        for(let type of unit.typedefs) {
            if (op(Op.EQUALS,type.name,typedefName)) {
                if (result != null) {
                    fail(`Duplicate typedef ${typedefName}`);
                }
                result = type;
            }
        }
        if (op(Op.EQUALS,result,null) && failIfAbsent) {
            fail(`Typedef ${typedefName} not found in serialized output`);
        }
        return result;
    }
    findVariable(variableName : string,_namedArguments? : {variables? : core.DartList<any>,failIfAbsent? : boolean}) : any {
        let {variables,failIfAbsent} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        variables = ( variables ) || ( this.unlinkedUnits[0].variables );
        let result : any;
        for(let variable of variables) {
            if (op(Op.EQUALS,variable.name,variableName)) {
                if (result != null) {
                    fail(`Duplicate variable ${variableName}`);
                }
                result = variable;
            }
        }
        if (op(Op.EQUALS,result,null) && failIfAbsent) {
            fail(`Variable ${variableName} not found in serialized output`);
        }
        return result;
    }
    getTypeRefForSlot(slotId : number,_namedArguments? : {linkedSourceUnit? : any}) : any {
        let {linkedSourceUnit} = Object.assign({
        }, _namedArguments );
        linkedSourceUnit = ( linkedSourceUnit ) || ( this.definingUnit );
        for(let typeRef of linkedSourceUnit.types) {
            if (op(Op.EQUALS,typeRef.slot,slotId)) {
                return typeRef;
            }
        }
        return null;
    }
    serializeClassText(text : string,_namedArguments? : {className? : string,allowErrors? : boolean}) : any {
        let {className,allowErrors} = Object.assign({
            "className" : 'C',
            "allowErrors" : false}, _namedArguments );
        this.serializeLibraryText(text,{
            allowErrors : allowErrors});
        return this.findClass(className,{
            failIfAbsent : true});
    }
    serializeEnumText(text : string,enumName? : string) : any {
        enumName = enumName || 'E';
        this.serializeLibraryText(text);
        return this.findEnum(enumName,{
            failIfAbsent : true});
    }
    serializeExecutableText(text : string,_namedArguments? : {executableName? : string,allowErrors? : boolean}) : any {
        let {executableName,allowErrors} = Object.assign({
            "executableName" : 'f',
            "allowErrors" : false}, _namedArguments );
        this.serializeLibraryText(text,{
            allowErrors : allowErrors});
        return this.findExecutable(executableName,{
            failIfAbsent : true});
    }
    @Abstract
    serializeLibraryText(text : string,_namedArguments? : {allowErrors? : boolean}) : void{ throw 'abstract'}
    serializeMethodText(text : string,executableName? : string) : any {
        executableName = executableName || 'f';
        this.serializeLibraryText(`class C { ${text} }`);
        return this.findExecutable(executableName,{
            executables : this.findClass('C',{
                failIfAbsent : true}).executables,failIfAbsent : true});
    }
    serializeTypedefText(text : string,typedefName? : string) : any {
        typedefName = typedefName || 'F';
        this.serializeLibraryText(text);
        return this.findTypedef(typedefName,{
            failIfAbsent : true});
    }
    serializeTypeText(text : string,_namedArguments? : {otherDeclarations? : string,allowErrors? : boolean}) : any {
        let {otherDeclarations,allowErrors} = Object.assign({
            "otherDeclarations" : '',
            "allowErrors" : false}, _namedArguments );
        return this.serializeVariableText(`${otherDeclarations}\n${text} v;`,{
            allowErrors : allowErrors}).type;
    }
    serializeVariableText(text : string,_namedArguments? : {variableName? : string,allowErrors? : boolean}) : any {
        let {variableName,allowErrors} = Object.assign({
            "variableName" : 'v',
            "allowErrors" : false}, _namedArguments );
        this.serializeLibraryText(text,{
            allowErrors : allowErrors});
        return this.findVariable(variableName,{
            failIfAbsent : true});
    }
    test_apiSignature() {
        let signature1 : core.DartList<number>;
        let signature2 : core.DartList<number>;
        let signature3 : core.DartList<number>;
        {
            this.serializeLibraryText('class A {}');
            signature1 = this.unlinkedUnits[0].apiSignature;
        }
        {
            this.serializeLibraryText('class A { }');
            signature2 = this.unlinkedUnits[0].apiSignature;
        }
        {
            this.serializeLibraryText('class B {}');
            signature3 = this.unlinkedUnits[0].apiSignature;
        }
        expect(signature2,signature1);
        expect(signature3,isNot(signature1));
    }
    test_apiSignature_excludeBody_constructor() {
        let signature1 : core.DartList<number>;
        let signature2 : core.DartList<number>;
        let signature3 : core.DartList<number>;
        {
            this.serializeLibraryText('class A {\n  A() {\n  }\n}\n');
            signature1 = this.unlinkedUnits[0].apiSignature;
        }
        {
            this.serializeLibraryText('class A {\n  A() {\n    int v1;\n    f() {\n      double v2;\n    }\n  }\n}\n');
            signature2 = this.unlinkedUnits[0].apiSignature;
        }
        {
            this.serializeLibraryText('class A {\n  A(int p) {\n  }\n}\n');
        }
        expect(signature2,signature1);
        expect(signature3,isNot(signature1));
    }
    test_apiSignature_excludeBody_method() {
        let signature1 : core.DartList<number>;
        let signature2 : core.DartList<number>;
        let signature3 : core.DartList<number>;
        {
            this.serializeLibraryText('class A {\n  m() {\n  }\n}\n');
            signature1 = this.unlinkedUnits[0].apiSignature;
        }
        {
            this.serializeLibraryText('class A {\n  m() {\n    int v1;\n    f() {\n      double v2;\n    }\n  }\n}\n');
            signature2 = this.unlinkedUnits[0].apiSignature;
        }
        {
            this.serializeLibraryText('class A {\n  m(p) {\n  }\n}\n');
        }
        expect(signature2,signature1);
        expect(signature3,isNot(signature1));
    }
    test_apiSignature_excludeBody_topLevelFunction() {
        let signature1 : core.DartList<number>;
        let signature2 : core.DartList<number>;
        let signature3 : core.DartList<number>;
        {
            this.serializeLibraryText('main() {}');
            signature1 = this.unlinkedUnits[0].apiSignature;
        }
        {
            this.serializeLibraryText('main() {\n  int v1 = 1;\n  f() {\n    int v2 = 2;\n  }\n}\n');
            signature2 = this.unlinkedUnits[0].apiSignature;
        }
        {
            this.serializeLibraryText('main(p) {}');
            signature3 = this.unlinkedUnits[0].apiSignature;
        }
        expect(signature2,signature1);
        expect(signature3,isNot(signature1));
    }
    test_bottom_reference_shared() {
        if (this.skipFullyLinkedData) {
            return;
        }
        this.serializeLibraryText('int x = null; int y = null;');
        let xInitializerReturnType : any = this.getTypeRefForSlot(this.findVariable('x').initializer.inferredReturnTypeSlot);
        let yInitializerReturnType : any = this.getTypeRefForSlot(this.findVariable('y').initializer.inferredReturnTypeSlot);
        expect(xInitializerReturnType.reference,yInitializerReturnType.reference);
    }
    test_cascaded_export_hide_hide() {
        this.addNamedSource('/lib1.dart','export "lib2.dart" hide C hide B, C;');
        this.addNamedSource('/lib2.dart','class A {} class B {} class C {}');
        this.serializeLibraryText('import \'lib1.dart\';\nA a;\nB b;\nC c;\n    ',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('a').type,absUri('/lib2.dart'),'A');
        this.checkUnresolvedTypeRef(this.findVariable('b').type,null,'B');
        this.checkUnresolvedTypeRef(this.findVariable('c').type,null,'C');
    }
    test_cascaded_export_hide_show() {
        this.addNamedSource('/lib1.dart','export "lib2.dart" hide C show A, C;');
        this.addNamedSource('/lib2.dart','class A {} class B {} class C {}');
        this.serializeLibraryText('import \'lib1.dart\';\nA a;\nB b;\nC c;\n    ',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('a').type,absUri('/lib2.dart'),'A');
        this.checkUnresolvedTypeRef(this.findVariable('b').type,null,'B');
        this.checkUnresolvedTypeRef(this.findVariable('c').type,null,'C');
    }
    test_cascaded_export_show_hide() {
        this.addNamedSource('/lib1.dart','export "lib2.dart" show A, B hide B, C;');
        this.addNamedSource('/lib2.dart','class A {} class B {} class C {}');
        this.serializeLibraryText('import \'lib1.dart\';\nA a;\nB b;\nC c;\n    ',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('a').type,absUri('/lib2.dart'),'A');
        this.checkUnresolvedTypeRef(this.findVariable('b').type,null,'B');
        this.checkUnresolvedTypeRef(this.findVariable('c').type,null,'C');
    }
    test_cascaded_export_show_show() {
        this.addNamedSource('/lib1.dart','export "lib2.dart" show A, B show A, C;');
        this.addNamedSource('/lib2.dart','class A {} class B {} class C {}');
        this.serializeLibraryText('import \'lib1.dart\';\nA a;\nB b;\nC c;\n    ',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('a').type,absUri('/lib2.dart'),'A');
        this.checkUnresolvedTypeRef(this.findVariable('b').type,null,'B');
        this.checkUnresolvedTypeRef(this.findVariable('c').type,null,'C');
    }
    test_cascaded_import_hide_hide() {
        this.addNamedSource('/lib.dart','class A {} class B {} class C {}');
        this.serializeLibraryText('import \'lib.dart\' hide C hide B, C;\nA a;\nB b;\nC c;\n    ',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('a').type,absUri('/lib.dart'),'A');
        this.checkUnresolvedTypeRef(this.findVariable('b').type,null,'B');
        this.checkUnresolvedTypeRef(this.findVariable('c').type,null,'C');
    }
    test_cascaded_import_hide_show() {
        this.addNamedSource('/lib.dart','class A {} class B {} class C {}');
        this.serializeLibraryText('import \'lib.dart\' hide C show A, C;\nA a;\nB b;\nC c;\n    ',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('a').type,absUri('/lib.dart'),'A');
        this.checkUnresolvedTypeRef(this.findVariable('b').type,null,'B');
        this.checkUnresolvedTypeRef(this.findVariable('c').type,null,'C');
    }
    test_cascaded_import_show_hide() {
        this.addNamedSource('/lib.dart','class A {} class B {} class C {}');
        this.serializeLibraryText('import \'lib.dart\' show A, B hide B, C;\nA a;\nB b;\nC c;\n    ',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('a').type,absUri('/lib.dart'),'A');
        this.checkUnresolvedTypeRef(this.findVariable('b').type,null,'B');
        this.checkUnresolvedTypeRef(this.findVariable('c').type,null,'C');
    }
    test_cascaded_import_show_show() {
        this.addNamedSource('/lib.dart','class A {} class B {} class C {}');
        this.serializeLibraryText('import \'lib.dart\' show A, B show A, C;\nA a;\nB b;\nC c;\n    ',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('a').type,absUri('/lib.dart'),'A');
        this.checkUnresolvedTypeRef(this.findVariable('b').type,null,'B');
        this.checkUnresolvedTypeRef(this.findVariable('c').type,null,'C');
    }
    test_class_abstract() {
        let cls : any = this.serializeClassText('abstract class C {}');
        expect(cls.isAbstract,true);
    }
    test_class_alias_abstract() {
        let cls : any = this.serializeClassText('abstract class C = D with E; class D {} class E {}');
        expect(cls.isAbstract,true);
    }
    test_class_alias_concrete() {
        let cls : any = this.serializeClassText('class C = _D with _E; class _D {} class _E {}');
        expect(cls.isAbstract,false);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).kind,ReferenceKind.classOrEnum);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'C');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,0);
    }
    test_class_alias_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nclass C = D with E;\n\nclass D {}\nclass E {}';
        let cls : any = this.serializeClassText(text);
        expect(cls.documentationComment,isNotNull);
        this.checkDocumentationComment(cls.documentationComment,text);
    }
    test_class_alias_flag() {
        let cls : any = this.serializeClassText('class C = D with E; class D {} class E {}');
        expect(cls.isMixinApplication,true);
    }
    test_class_alias_generic() {
        this.serializeClassText('class C<A, B> = _D with _E; class _D {} class _E {}');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,2);
    }
    test_class_alias_mixin_order() {
        let cls : any = this.serializeClassText('class C = D with E, F;\nclass D {}\nclass E {}\nclass F {}\n');
        expect(cls.mixins,hasLength(2));
        this.checkTypeRef(op(Op.INDEX,cls.mixins,0),null,'E');
        this.checkTypeRef(op(Op.INDEX,cls.mixins,1),null,'F');
    }
    test_class_alias_no_implicit_constructors() {
        let cls : any = this.serializeClassText('class C = D with E;\nclass D {\n  D.foo();\n  D.bar();\n}\nclass E {}\n');
        expect(cls.executables,isEmpty);
    }
    test_class_alias_private() {
        this.serializeClassText('class _C = _D with _E; class _D {} class _E {}',{
            className : '_C'});
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
    }
    test_class_alias_reference_generic() {
        let typeRef : any = this.serializeTypeText('C',{
            otherDeclarations : 'class C<D, E> = F with G; class F {} class G {}'});
        this.checkTypeRef(typeRef,null,'C',{
            numTypeParameters : 2});
    }
    test_class_alias_reference_generic_imported() {
        this.addNamedSource('/lib.dart','class C<D, E> = F with G; class F {} class G {}');
        let typeRef : any = this.serializeTypeText('C',{
            otherDeclarations : 'import "lib.dart";'});
        this.checkTypeRef(typeRef,absUri('/lib.dart'),'C',{
            numTypeParameters : 2});
    }
    test_class_alias_supertype() {
        let cls : any = this.serializeClassText('class C = D with E; class D {} class E {}');
        this.checkTypeRef(cls.supertype,null,'D');
        expect(cls.hasNoSupertype,isFalse);
    }
    test_class_codeRange() {
        if (!this.includeInformative) return;
        let cls : any = this.serializeClassText(' class C {}');
        this._assertCodeRange(cls.codeRange,1,10);
    }
    test_class_concrete() {
        let cls : any = this.serializeClassText('class C {}');
        expect(cls.isAbstract,false);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).kind,ReferenceKind.classOrEnum);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'C');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,0);
    }
    test_class_constMembers() {
        let cls : any = this.serializeClassText('class C {\n  int fieldInstance = 0;\n  final int fieldInstanceFinal = 0;\n  static int fieldStatic = 0;\n  static final int fieldStaticFinal = 0;\n  static const int fieldStaticConst = 0;\n  static const int _fieldStaticConstPrivate = 0;\n  static void methodStaticPublic() {}\n  static void _methodStaticPrivate() {}\n  void methodInstancePublic() {}\n  C operator+(C c) => null;\n}\n');
        expect(cls.isAbstract,false);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        let className : any = op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0);
        expect(className.kind,ReferenceKind.classOrEnum);
        expect(className.name,'C');
        expect(className.numTypeParameters,0);
        let executablesMap : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        className.members.forEach((e : any) =>  {
            return executablesMap.set(e.name,e);
        });
        expect(executablesMap,hasLength(4));
        let expectedExecutableKinds : core.DartMap<string,any> = new core.DartMap.literal([
            ['fieldStaticConst',ReferenceKind.propertyAccessor],
            ['fieldStaticFinal',ReferenceKind.propertyAccessor],
            ['fieldStatic',ReferenceKind.propertyAccessor],
            ['methodStaticPublic',ReferenceKind.method]]);
        expectedExecutableKinds.forEach((name : string,expectedKind : any) =>  {
            let executable : any = executablesMap.get(name);
            expect(executable.kind,expectedKind);
            expect(executable.members,isEmpty);
        });
    }
    test_class_constMembers_constructors() {
        let cls : any = this.serializeClassText('class C {\n  const C();\n  const C.constructorNamedPublicConst();\n  C.constructorNamedPublic();\n  C._constructorNamedPrivate();\n}\n');
        expect(cls.isAbstract,false);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        let className : any = op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0);
        expect(className.kind,ReferenceKind.classOrEnum);
        expect(className.name,'C');
        expect(className.numTypeParameters,0);
        let executablesMap : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        className.members.forEach((e : any) =>  {
            return executablesMap.set(e.name,e);
        });
        expect(executablesMap,hasLength(2));
        {
            let executable : any = executablesMap.get('constructorNamedPublicConst');
            expect(executable.kind,ReferenceKind.constructor);
            expect(executable.members,isEmpty);
        }
        {
            let executable : any = executablesMap.get('constructorNamedPublic');
            expect(executable.kind,ReferenceKind.constructor);
            expect(executable.members,isEmpty);
        }
    }
    test_class_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nclass C {}';
        let cls : any = this.serializeClassText(text);
        expect(cls.documentationComment,isNotNull);
        this.checkDocumentationComment(cls.documentationComment,text);
    }
    test_class_documented_tripleSlash() {
        if (!this.includeInformative) return;
        let text : string = '/// aaa\n/// bbbb\n/// cc\nclass C {}';
        let cls : any = this.serializeClassText(text);
        let comment : any = cls.documentationComment;
        expect(comment,isNotNull);
        expect(comment.text,'/// aaa\n/// bbbb\n/// cc');
    }
    test_class_documented_with_references() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs referring to [D] and [E]\n */\nclass C {}\n\nclass D {}\nclass E {}';
        let cls : any = this.serializeClassText(text);
        expect(cls.documentationComment,isNotNull);
        this.checkDocumentationComment(cls.documentationComment,text);
    }
    test_class_documented_with_with_windows_line_endings() {
        if (!this.includeInformative) return;
        let text : string = '/**\n * Docs\n */\nclass C {}';
        let cls : any = this.serializeClassText(text);
        expect(cls.documentationComment,isNotNull);
        this.checkDocumentationComment(cls.documentationComment,text);
    }
    test_class_interface() {
        let cls : any = this.serializeClassText('class C implements D {}\nclass D {}\n');
        expect(cls.interfaces,hasLength(1));
        this.checkTypeRef(op(Op.INDEX,cls.interfaces,0),null,'D');
    }
    test_class_interface_order() {
        let cls : any = this.serializeClassText('class C implements D, E {}\nclass D {}\nclass E {}\n');
        expect(cls.interfaces,hasLength(2));
        this.checkTypeRef(op(Op.INDEX,cls.interfaces,0),null,'D');
        this.checkTypeRef(op(Op.INDEX,cls.interfaces,1),null,'E');
    }
    test_class_mixin() {
        let cls : any = this.serializeClassText('class C extends Object with D {}\nclass D {}\n');
        expect(cls.mixins,hasLength(1));
        this.checkTypeRef(op(Op.INDEX,cls.mixins,0),null,'D');
    }
    test_class_mixin_order() {
        let cls : any = this.serializeClassText('class C extends Object with D, E {}\nclass D {}\nclass E {}\n');
        expect(cls.mixins,hasLength(2));
        this.checkTypeRef(op(Op.INDEX,cls.mixins,0),null,'D');
        this.checkTypeRef(op(Op.INDEX,cls.mixins,1),null,'E');
    }
    test_class_name() {
        let classText = 'class C {}';
        let cls : any = this.serializeClassText(classText);
        expect(cls.name,'C');
        if (this.includeInformative) {
            expect(cls.nameOffset,new core.DartString(classText).indexOf('C'));
        }
    }
    test_class_no_flags() {
        let cls : any = this.serializeClassText('class C {}');
        expect(cls.isAbstract,false);
        expect(cls.isMixinApplication,false);
    }
    test_class_no_interface() {
        let cls : any = this.serializeClassText('class C {}');
        expect(cls.interfaces,isEmpty);
    }
    test_class_no_mixins() {
        let cls : any = this.serializeClassText('class C {}');
        expect(cls.mixins,isEmpty);
    }
    test_class_no_type_param() {
        let cls : any = this.serializeClassText('class C {}');
        expect(cls.typeParameters,isEmpty);
    }
    test_class_non_alias_flag() {
        let cls : any = this.serializeClassText('class C {}');
        expect(cls.isMixinApplication,false);
    }
    test_class_private() {
        this.serializeClassText('class _C {}',{
            className : '_C'});
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
    }
    test_class_reference_generic() {
        let typeRef : any = this.serializeTypeText('C',{
            otherDeclarations : 'class C<D, E> {}'});
        this.checkTypeRef(typeRef,null,'C',{
            numTypeParameters : 2});
    }
    test_class_reference_generic_imported() {
        this.addNamedSource('/lib.dart','class C<D, E> {}');
        let typeRef : any = this.serializeTypeText('C',{
            otherDeclarations : 'import "lib.dart";'});
        this.checkTypeRef(typeRef,absUri('/lib.dart'),'C',{
            numTypeParameters : 2});
    }
    test_class_superclass() {
        let cls : any = this.serializeClassText('class C {}');
        expect(cls.supertype,isNull);
        expect(cls.hasNoSupertype,isFalse);
    }
    test_class_superclass_explicit() {
        let cls : any = this.serializeClassText('class C extends D {} class D {}');
        expect(cls.supertype,isNotNull);
        this.checkTypeRef(cls.supertype,null,'D');
        expect(cls.hasNoSupertype,isFalse);
    }
    test_class_type_param_bound() {
        let cls : any = this.serializeClassText('class C<T extends List> {}');
        expect(cls.typeParameters,hasLength(1));
        {
            let typeParameter : any = op(Op.INDEX,cls.typeParameters,0);
            expect(typeParameter.name,'T');
            expect(typeParameter.bound,isNotNull);
            this.checkTypeRef(typeParameter.bound,'dart:core','List',{
                numTypeParameters : 1});
        }
    }
    test_class_type_param_f_bound() {
        let cls : any = this.serializeClassText('class C<T, U extends List<T>> {}');
        let typeArgument : any = op(Op.INDEX,op(Op.INDEX,cls.typeParameters,1).bound.typeArguments,0);
        this.checkParamTypeRef(typeArgument,2);
    }
    test_class_type_param_f_bound_self_ref() {
        let cls : any = this.serializeClassText('class C<T, U extends List<U>> {}');
        let typeArgument : any = op(Op.INDEX,op(Op.INDEX,cls.typeParameters,1).bound.typeArguments,0);
        this.checkParamTypeRef(typeArgument,1);
    }
    test_class_type_param_no_bound() {
        let text : string = 'class C<T> {}';
        let cls : any = this.serializeClassText(text);
        expect(cls.typeParameters,hasLength(1));
        expect(op(Op.INDEX,cls.typeParameters,0).name,'T');
        if (this.includeInformative) {
            expect(op(Op.INDEX,cls.typeParameters,0).nameOffset,new core.DartString(text).indexOf('T'));
        }
        expect(op(Op.INDEX,cls.typeParameters,0).bound,isNull);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,1);
    }
    test_closure_executable_with_bottom_return_type() {
        let variable : any = this.serializeVariableText('var v = (() => null);');
        let closure : any;
        {
            let executable : any = variable.initializer;
            expect(executable.localFunctions,hasLength(1));
            expect(op(Op.INDEX,executable.localFunctions,0).returnType,isNull);
            closure = op(Op.INDEX,executable.localFunctions,0);
        }
        if (this.strongMode) {
            expect(this.getTypeRefForSlot(closure.inferredReturnTypeSlot),isNull);
        }else {
            this.checkInferredTypeSlot(closure.inferredReturnTypeSlot,null,'*bottom*',{
                onlyInStrongMode : false});
        }
    }
    test_closure_executable_with_imported_return_type() {
        this.addNamedSource('/a.dart','class C { D d; } class D {}');
        let executable : any = op(Op.INDEX,this.serializeVariableText('import "a.dart";\nvar v = (() {\n  print((() => new C().d)());\n});\n').initializer.localFunctions,0);
        expect(executable.localFunctions,hasLength(1));
        expect(op(Op.INDEX,executable.localFunctions,0).returnType,isNull);
        this.checkInferredTypeSlot(op(Op.INDEX,executable.localFunctions,0).inferredReturnTypeSlot,absUri('/a.dart'),'D',{
            onlyInStrongMode : false});
        this.checkHasDependency(absUri('/a.dart'),{
            fullyLinked : false});
    }
    test_closure_executable_with_return_type_from_closure() {
        if (this.skipFullyLinkedData) {
            return;
        }
        let executable : any = this.serializeExecutableText('f() {\n  print(() {}); // force the closure below to have index 1\n  print(() => () => 0);\n}\n');
        expect(executable.localFunctions,hasLength(2));
        let closureType : any = this.getTypeRefForSlot(op(Op.INDEX,executable.localFunctions,1).inferredReturnTypeSlot);
        this.checkLinkedTypeRef(closureType,null,'',{
            expectedKind : ReferenceKind.function});
        let outerClosureIndex : number = op(Op.INDEX,this.definingUnit.references,closureType.reference).containingReference;
        this.checkReferenceIndex(outerClosureIndex,null,'',{
            expectedKind : ReferenceKind.function,localIndex : 1});
        let topLevelFunctionIndex : number = op(Op.INDEX,this.definingUnit.references,outerClosureIndex).containingReference;
        this.checkReferenceIndex(topLevelFunctionIndex,null,'f',{
            expectedKind : ReferenceKind.topLevelFunction});
        expect(op(Op.INDEX,this.definingUnit.references,topLevelFunctionIndex).containingReference,0);
    }
    test_closure_executable_with_unimported_return_type() {
        this.addNamedSource('/a.dart','import "b.dart"; class C { D d; }');
        this.addNamedSource('/b.dart','class D {}');
        let executable : any = op(Op.INDEX,this.serializeVariableText('import "a.dart";\nvar v = (() {\n  print((() => new C().d)());\n});\n').initializer.localFunctions,0);
        expect(executable.localFunctions,hasLength(1));
        expect(op(Op.INDEX,executable.localFunctions,0).returnType,isNull);
        this.checkInferredTypeSlot(op(Op.INDEX,executable.localFunctions,0).inferredReturnTypeSlot,absUri('/b.dart'),'D',{
            onlyInStrongMode : false});
        if (!this.skipFullyLinkedData) {
            this.checkHasDependency('b.dart',{
                fullyLinked : true});
        }
    }
    test_constExpr_binary_add() {
        let variable : any = this.serializeVariableText('const v = 1 + 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.add),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_and() {
        let variable : any = this.serializeVariableText('const v = true && false;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushTrue,UnlinkedExprOperation.pushFalse,UnlinkedExprOperation.and)});
    }
    test_constExpr_binary_bitAnd() {
        let variable : any = this.serializeVariableText('const v = 1 & 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.bitAnd),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_bitOr() {
        let variable : any = this.serializeVariableText('const v = 1 | 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.bitOr),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_bitShiftLeft() {
        let variable : any = this.serializeVariableText('const v = 1 << 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.bitShiftLeft),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_bitShiftRight() {
        let variable : any = this.serializeVariableText('const v = 1 >> 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.bitShiftRight),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_bitXor() {
        let variable : any = this.serializeVariableText('const v = 1 ^ 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.bitXor),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_divide() {
        let variable : any = this.serializeVariableText('const v = 1 / 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.divide),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_equal() {
        let variable : any = this.serializeVariableText('const v = 1 == 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.equal),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_equal_not() {
        let variable : any = this.serializeVariableText('const v = 1 != 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.notEqual),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_floorDivide() {
        let variable : any = this.serializeVariableText('const v = 1 ~/ 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.floorDivide),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_greater() {
        let variable : any = this.serializeVariableText('const v = 1 > 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.greater),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_greaterEqual() {
        let variable : any = this.serializeVariableText('const v = 1 >= 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.greaterEqual),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_less() {
        let variable : any = this.serializeVariableText('const v = 1 < 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.less),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_lessEqual() {
        let variable : any = this.serializeVariableText('const v = 1 <= 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.lessEqual),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_modulo() {
        let variable : any = this.serializeVariableText('const v = 1 % 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.modulo),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_multiply() {
        let variable : any = this.serializeVariableText('const v = 1 * 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.multiply),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_or() {
        let variable : any = this.serializeVariableText('const v = false || true;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushFalse,UnlinkedExprOperation.pushTrue,UnlinkedExprOperation.or)});
    }
    test_constExpr_binary_qq() {
        let variable : any = this.serializeVariableText('const v = 1 ?? 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.ifNull),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_binary_subtract() {
        let variable : any = this.serializeVariableText('const v = 1 - 2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.subtract),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_classMember_shadows_typeParam() {
        let text : string = 'class C<T> {\n  static const T = null;\n  final x;\n  const C() : x = T;\n}\n';
        let cls : any = this.serializeClassText(text,{
            allowErrors : true});
        this.assertUnlinkedConst(op(Op.INDEX,op(Op.INDEX,cls.executables,0).constantInitializers,0).expression,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'T',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        numTypeParameters : 1}))});
            })});
    }
    test_constExpr_conditional() {
        let variable : any = this.serializeVariableText('const v = true ? 1 : 2;',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushTrue,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.conditional),ints : new core.DartList.literal(1,2)});
    }
    test_constExpr_constructorParam_shadows_classMember() {
        let cls : any = this.serializeClassText('class C {\n  static const a = null;\n  final b;\n  const C(a) : b = a;\n}\n');
        this.assertUnlinkedConst(op(Op.INDEX,op(Op.INDEX,cls.executables,0).constantInitializers,0).expression,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter),strings : new core.DartList.literal('a')});
    }
    test_constExpr_constructorParam_shadows_typeParam() {
        let cls : any = this.serializeClassText('class C<T> {\n  final x;\n  const C(T) : x = T;\n}\n');
        this.assertUnlinkedConst(op(Op.INDEX,op(Op.INDEX,cls.executables,0).constantInitializers,0).expression,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter),strings : new core.DartList.literal('T')});
    }
    test_constExpr_functionExpression() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('import \'dart:async\';\nconst v = (f) async => await f;\n');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.await),strings : new core.DartList.literal('f'),ints : new core.DartList.literal()});
    }
    test_constExpr_functionExpression_asArgument() {
        let variable : any = this.serializeVariableText('const v = foo(5, () => 42);\nfoo(a, b) {}\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushLocalFunctionReference,UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(5,0,0,0,2,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_constExpr_functionExpression_asArgument_multiple() {
        let variable : any = this.serializeVariableText('const v = foo(5, () => 42, () => 43);\nfoo(a, b, c) {}\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushLocalFunctionReference,UnlinkedExprOperation.pushLocalFunctionReference,UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(5,0,0,0,1,0,3,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_constExpr_functionExpression_inConstructorInitializers() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C {\n  final x, y;\n  const C() : x = (() => 42), y = (() => 43);\n}\n').executables,0);
        expect(executable.localFunctions,hasLength(2));
        this.assertUnlinkedConst(op(Op.INDEX,executable.constantInitializers,0).expression,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushLocalFunctionReference),ints : new core.DartList.literal(0,0)});
        this.assertUnlinkedConst(op(Op.INDEX,executable.constantInitializers,1).expression,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushLocalFunctionReference),ints : new core.DartList.literal(0,1)});
    }
    test_constExpr_invokeConstructor_generic_named() {
        let variable : any = this.serializeVariableText('class C<K, V> {\n  const C.named();\n}\nconst v = const C<int, String>.named();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        numTypeParameters : 2})),numTypeArguments : 2});
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,0),'dart:core','int');
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,1),'dart:core','String');
            })});
    }
    test_constExpr_invokeConstructor_generic_named_imported() {
        this.addNamedSource('/a.dart','class C<K, V> {\n  const C.named();\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = const C<int, String>.named();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart'),numTypeParameters : 2})),numTypeArguments : 2});
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,0),'dart:core','int');
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,1),'dart:core','String');
            })});
    }
    test_constExpr_invokeConstructor_generic_named_imported_withPrefix() {
        this.addNamedSource('/a.dart','class C<K, V> {\n  const C.named();\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = const p.C<int, String>.named();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart'),numTypeParameters : 2}),new _PrefixExpectation(ReferenceKind.prefix,'p')),numTypeArguments : 2});
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,0),'dart:core','int');
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,1),'dart:core','String');
            })});
    }
    test_constExpr_invokeConstructor_generic_unnamed() {
        let variable : any = this.serializeVariableText('class C<K, V> {\n  const C();\n}\nconst v = const C<int, String>();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum,numTypeParameters : 2,numTypeArguments : 2});
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,0),'dart:core','int');
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,1),'dart:core','String');
            })});
    }
    test_constExpr_invokeConstructor_generic_unnamed_imported() {
        this.addNamedSource('/a.dart','class C<K, V> {\n  const C();\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = const C<int, String>();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                this.checkTypeRef(r,absUri('/a.dart'),'C',{
                    expectedKind : ReferenceKind.classOrEnum,numTypeParameters : 2,numTypeArguments : 2});
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,0),'dart:core','int');
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,1),'dart:core','String');
            })});
    }
    test_constExpr_invokeConstructor_generic_unnamed_imported_withPrefix() {
        this.addNamedSource('/a.dart','class C<K, V> {\n  const C();\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = const p.C<int, String>();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                this.checkTypeRef(r,absUri('/a.dart'),'C',{
                    expectedKind : ReferenceKind.classOrEnum,numTypeParameters : 2,numTypeArguments : 2,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.prefix,'p'))});
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,0),'dart:core','int');
                this.checkTypeRef(op(Op.INDEX,r.typeArguments,1),'dart:core','String');
            })});
    }
    test_constExpr_invokeConstructor_named() {
        let variable : any = this.serializeVariableText('class C {\n  const C.named();\n}\nconst v = const C.named();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_invokeConstructor_named_imported() {
        this.addNamedSource('/a.dart','class C {\n  const C.named();\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = const C.named();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}))});
            })});
    }
    test_constExpr_invokeConstructor_named_imported_withPrefix() {
        this.addNamedSource('/a.dart','class C {\n  const C.named();\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = const p.C.named();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_invokeConstructor_unnamed() {
        let variable : any = this.serializeVariableText('class C {\n  const C(a, b, c, d, {e, f, g});\n}\nconst v = const C(11, 22, 3.3, \'444\', e: 55, g: \'777\', f: 66);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushDouble,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(11,22,55,66,3,4),doubles : new core.DartList.literal(3.3),strings : new core.DartList.literal('444','777','e','g','f'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_constExpr_invokeConstructor_unnamed_imported() {
        this.addNamedSource('/a.dart','class C {\n  const C();\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = const C();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_constExpr_invokeConstructor_unnamed_imported_withPrefix() {
        this.addNamedSource('/a.dart','class C {\n  const C();\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = const p.C();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'C',{
                    expectedKind : ReferenceKind.classOrEnum,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_invokeConstructor_unresolved_named() {
        let variable : any = this.serializeVariableText('class C {}\nconst v = const C.foo();\n',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_invokeConstructor_unresolved_named2() {
        let variable : any = this.serializeVariableText('const v = const C.foo();\n',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.unresolved,'C'))});
            })});
    }
    test_constExpr_invokeConstructor_unresolved_named_prefixed() {
        this.addNamedSource('/a.dart','class C {\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = const p.C.foo();\n',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_invokeConstructor_unresolved_named_prefixed2() {
        this.addNamedSource('/a.dart','');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = const p.C.foo();\n',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.unresolved,'C'),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_invokeConstructor_unresolved_unnamed() {
        let variable : any = this.serializeVariableText('const v = const Foo();\n',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'Foo',{
                    expectedKind : ReferenceKind.unresolved});
            })});
    }
    test_constExpr_invokeMethodRef_identical() {
        let variable : any = this.serializeVariableText('const v = identical(42, null);');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushNull,UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(42,0,2,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                this.checkTypeRef(r,'dart:core','identical',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_constExpr_length_classConstField() {
        let variable : any = this.serializeVariableText('class C {\n  static const int length = 0;\n}\nconst int v = C.length;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'length',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_length_classConstField_imported_withPrefix() {
        this.addNamedSource('/a.dart','class C {\n  static const int length = 0;\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst int v = p.C.length;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'length',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_length_identifierTarget() {
        let variable : any = this.serializeVariableText('const String a = \'aaa\';\nconst int v = a.length;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'length',{
                    expectedKind : ReferenceKind.unresolved,unresolvedHasName : true,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.topLevelPropertyAccessor,'a'))});
            })});
    }
    test_constExpr_length_identifierTarget_classConstField() {
        let variable : any = this.serializeVariableText('class C {\n  static const String F = \'\';\n}\nconst int v = C.F.length;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'length',{
                    expectedKind : ReferenceKind.unresolved,unresolvedHasName : true,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.propertyAccessor,'F'),new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_length_identifierTarget_imported() {
        this.addNamedSource('/a.dart','const String a = \'aaa\';\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst int v = a.length;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'length',{
                    expectedKind : ReferenceKind.unresolved,unresolvedHasName : true,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.topLevelPropertyAccessor,'a',{
                        absoluteUri : absUri('/a.dart')}))});
            })});
    }
    test_constExpr_length_identifierTarget_imported_withPrefix() {
        this.addNamedSource('/a.dart','const String a = \'aaa\';\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst int v = p.a.length;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'length',{
                    expectedKind : ReferenceKind.unresolved,unresolvedHasName : true,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.topLevelPropertyAccessor,'a',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_length_parenthesizedBinaryTarget() {
        let variable : any = this.serializeVariableText('const v = ("abc" + "edf").length;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushString,UnlinkedExprOperation.add,UnlinkedExprOperation.extractProperty),strings : new core.DartList.literal('abc','edf','length')});
    }
    test_constExpr_length_parenthesizedStringTarget() {
        let variable : any = this.serializeVariableText('const v = ("abc").length;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString,UnlinkedExprOperation.extractProperty),strings : new core.DartList.literal('abc','length')});
    }
    test_constExpr_length_stringLiteralTarget() {
        let variable : any = this.serializeVariableText('const v = "abc".length;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString,UnlinkedExprOperation.extractProperty),strings : new core.DartList.literal('abc','length')});
    }
    test_constExpr_makeSymbol() {
        let variable : any = this.serializeVariableText('const v = #a.bb.ccc;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.makeSymbol),strings : new core.DartList.literal('a.bb.ccc')});
    }
    test_constExpr_makeTypedList() {
        let variable : any = this.serializeVariableText('const v = const <int>[11, 22, 33];');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.makeTypedList),ints : new core.DartList.literal(11,22,33,3),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,'dart:core','int',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_constExpr_makeTypedList_dynamic() {
        let variable : any = this.serializeVariableText('const v = const <dynamic>[11, 22, 33];');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.makeTypedList),ints : new core.DartList.literal(11,22,33,3),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkDynamicTypeRef(r);
            })});
    }
    test_constExpr_makeTypedMap() {
        let variable : any = this.serializeVariableText('const v = const <int, String>{11: "aaa", 22: "bbb", 33: "ccc"};');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.makeTypedMap),ints : new core.DartList.literal(11,22,33,3),strings : new core.DartList.literal('aaa','bbb','ccc'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,'dart:core','int',{
                    expectedKind : ReferenceKind.classOrEnum});
            },(r : any) =>  {
                return this.checkTypeRef(r,'dart:core','String',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_constExpr_makeTypedMap_dynamic() {
        let variable : any = this.serializeVariableText('const v = const <dynamic, dynamic>{11: "aaa", 22: "bbb", 33: "ccc"};');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.makeTypedMap),ints : new core.DartList.literal(11,22,33,3),strings : new core.DartList.literal('aaa','bbb','ccc'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkDynamicTypeRef(r);
            },(r : any) =>  {
                return this.checkDynamicTypeRef(r);
            })});
    }
    test_constExpr_makeUntypedList() {
        let variable : any = this.serializeVariableText('const v = const [11, 22, 33];');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.makeUntypedList),ints : new core.DartList.literal(11,22,33,3)});
    }
    test_constExpr_makeUntypedMap() {
        let variable : any = this.serializeVariableText('const v = const {11: "aaa", 22: "bbb", 33: "ccc"};');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.makeUntypedMap),ints : new core.DartList.literal(11,22,33,3),strings : new core.DartList.literal('aaa','bbb','ccc')});
    }
    test_constExpr_parenthesized() {
        let variable : any = this.serializeVariableText('const v = (1 + 2) * 3;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.add,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.multiply),ints : new core.DartList.literal(1,2,3)});
    }
    test_constExpr_prefix_complement() {
        let variable : any = this.serializeVariableText('const v = ~2;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.complement),ints : new core.DartList.literal(2)});
    }
    test_constExpr_prefix_negate() {
        let variable : any = this.serializeVariableText('const v = -(2);');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.negate),ints : new core.DartList.literal(2)});
    }
    test_constExpr_prefix_not() {
        let variable : any = this.serializeVariableText('const v = !true;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushTrue,UnlinkedExprOperation.not)});
    }
    test_constExpr_pushDouble() {
        let variable : any = this.serializeVariableText('const v = 123.4567;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushDouble),doubles : new core.DartList.literal(123.4567)});
    }
    test_constExpr_pushFalse() {
        let variable : any = this.serializeVariableText('const v = false;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushFalse)});
    }
    test_constExpr_pushInt() {
        let variable : any = this.serializeVariableText('const v = 1;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(1)});
    }
    test_constExpr_pushInt_max() {
        let variable : any = this.serializeVariableText('const v = 0xFFFFFFFF;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(4294967295)});
    }
    test_constExpr_pushInt_negative() {
        let variable : any = this.serializeVariableText('const v = -5;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.negate),ints : new core.DartList.literal(5)});
    }
    test_constExpr_pushLongInt() {
        let variable : any = this.serializeVariableText('const v = 0xA123456789ABCDEF012345678;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushLongInt),ints : new core.DartList.literal(4,10,305419896,2596069104,305419896)});
    }
    test_constExpr_pushLongInt_min2() {
        let variable : any = this.serializeVariableText('const v = 0x100000000;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushLongInt),ints : new core.DartList.literal(2,1,0)});
    }
    test_constExpr_pushLongInt_min3() {
        let variable : any = this.serializeVariableText('const v = 0x10000000000000000;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushLongInt),ints : new core.DartList.literal(3,1,0,0)});
    }
    test_constExpr_pushNull() {
        let variable : any = this.serializeVariableText('const v = null;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushNull)});
    }
    test_constExpr_pushReference_class() {
        let variable : any = this.serializeVariableText('class C {}\nconst v = C;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_constExpr_pushReference_enum() {
        let variable : any = this.serializeVariableText('enum C {V1, V2, V3}\nconst v = C;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_constExpr_pushReference_enumValue() {
        let variable : any = this.serializeVariableText('enum C {V1, V2, V3}\nconst v = C.V1;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'V1',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_pushReference_enumValue_viaImport() {
        this.addNamedSource('/a.dart','enum C {V1, V2, V3}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = C.V1;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'V1',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}))});
            })});
    }
    test_constExpr_pushReference_enumValues() {
        let variable : any = this.serializeVariableText('enum C {V1, V2, V3}\nconst v = C.values;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'values',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_pushReference_enumValues_viaImport() {
        this.addNamedSource('/a.dart','enum C {V1, V2, V3}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = C.values;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'values',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}))});
            })});
    }
    test_constExpr_pushReference_field() {
        let variable : any = this.serializeVariableText('class C {\n  static const int F = 1;\n}\nconst v = C.F;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'F',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_pushReference_field_imported() {
        this.addNamedSource('/a.dart','class C {\n  static const int F = 1;\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = C.F;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'F',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}))});
            })});
    }
    test_constExpr_pushReference_field_imported_withPrefix() {
        this.addNamedSource('/a.dart','class C {\n  static const int F = 1;\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = p.C.F;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'F',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_pushReference_field_simpleIdentifier() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C {\n  static const a = b;\n  static const b = null;\n}\n').fields,0);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'b',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_pushReference_staticGetter() {
        let variable : any = this.serializeVariableText('class C {\n  static int get x => null;\n}\nconst v = C.x;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'x',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_pushReference_staticGetter_imported() {
        this.addNamedSource('/a.dart','class C {\n  static int get x => null;\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = C.x;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'x',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}))});
            })});
    }
    test_constExpr_pushReference_staticGetter_imported_withPrefix() {
        this.addNamedSource('/a.dart','class C {\n  static int get x => null;\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = p.C.x;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'x',{
                    expectedKind : ReferenceKind.propertyAccessor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_pushReference_staticMethod() {
        let variable : any = this.serializeVariableText('class C {\n  static m() {}\n}\nconst v = C.m;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'m',{
                    expectedKind : ReferenceKind.method,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_pushReference_staticMethod_imported() {
        this.addNamedSource('/a.dart','class C {\n  static m() {}\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = C.m;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'m',{
                    expectedKind : ReferenceKind.method,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}))});
            })});
    }
    test_constExpr_pushReference_staticMethod_imported_withPrefix() {
        this.addNamedSource('/a.dart','class C {\n  static m() {}\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = p.C.m;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'m',{
                    expectedKind : ReferenceKind.method,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_pushReference_staticMethod_simpleIdentifier() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C {\n  static const a = m;\n  static m() {}\n}\n').fields,0);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'m',{
                    expectedKind : ReferenceKind.method,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_pushReference_topLevelFunction() {
        let variable : any = this.serializeVariableText('f() {}\nconst v = f;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'f',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_constExpr_pushReference_topLevelFunction_imported() {
        this.addNamedSource('/a.dart','f() {}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = f;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'f',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_constExpr_pushReference_topLevelFunction_imported_withPrefix() {
        this.addNamedSource('/a.dart','f() {}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = p.f;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'f',{
                    expectedKind : ReferenceKind.topLevelFunction,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_pushReference_topLevelGetter() {
        let variable : any = this.serializeVariableText('int get x => null;\nconst v = x;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'x',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_constExpr_pushReference_topLevelGetter_imported() {
        this.addNamedSource('/a.dart','int get x => null;');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = x;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'x',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_constExpr_pushReference_topLevelGetter_imported_withPrefix() {
        this.addNamedSource('/a.dart','int get x => null;');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = p.x;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'x',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor,expectedPrefix : 'p'});
            })});
    }
    test_constExpr_pushReference_topLevelVariable() {
        let variable : any = this.serializeVariableText('const int a = 1;\nconst v = a;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_constExpr_pushReference_topLevelVariable_imported() {
        this.addNamedSource('/a.dart','const int a = 1;');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nconst v = a;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_constExpr_pushReference_topLevelVariable_imported_withPrefix() {
        this.addNamedSource('/a.dart','const int a = 1;');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = p.a;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor,expectedPrefix : 'p'});
            })});
    }
    test_constExpr_pushReference_typeParameter() {
        let text : string = 'class C<T> {\n  static const a = T;\n}\n';
        let variable : any = op(Op.INDEX,this.serializeClassText(text,{
            allowErrors : true}).fields,0);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkParamTypeRef(r,1);
            })});
    }
    test_constExpr_pushReference_unresolved_prefix0() {
        let variable : any = this.serializeVariableText('const v = foo;\n',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.unresolved});
            })});
    }
    test_constExpr_pushReference_unresolved_prefix1() {
        let variable : any = this.serializeVariableText('class C {}\nconst v = C.foo;\n',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_constExpr_pushReference_unresolved_prefix2() {
        this.addNamedSource('/a.dart','class C {}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nconst v = p.C.foo;\n',{
            allowErrors : true});
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_constExpr_pushString_adjacent() {
        let variable : any = this.serializeVariableText('const v = "aaa" "b" "ccc";');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString),strings : new core.DartList.literal('aaabccc')});
    }
    test_constExpr_pushString_adjacent_interpolation() {
        let variable : any = this.serializeVariableText('const v = "aaa" "bb ${42} bbb" "cccc";');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.concatenate,UnlinkedExprOperation.pushString,UnlinkedExprOperation.concatenate),ints : new core.DartList.literal(42,3,3),strings : new core.DartList.literal('aaa','bb ',' bbb','cccc')});
    }
    test_constExpr_pushString_interpolation() {
        let variable : any = this.serializeVariableText('const v = "aaa ${42} bbb";');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.concatenate),ints : new core.DartList.literal(42,3),strings : new core.DartList.literal('aaa ',' bbb')});
    }
    test_constExpr_pushString_simple() {
        let variable : any = this.serializeVariableText('const v = "abc";');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString),strings : new core.DartList.literal('abc')});
    }
    test_constExpr_pushTrue() {
        let variable : any = this.serializeVariableText('const v = true;');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushTrue)});
    }
    test_constructor() {
        let text : string = 'class C { C(); }';
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText(text).executables});
        expect(executable.kind,UnlinkedExecutableKind.constructor);
        expect(executable.returnType,isNull);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,isFalse);
        expect(executable.isGenerator,isFalse);
        if (this.includeInformative) {
            expect(executable.nameOffset,new core.DartString(text).indexOf('C();'));
            expect(executable.periodOffset,0);
            expect(executable.nameEnd,0);
        }
        expect(executable.isRedirectedConstructor,isFalse);
        expect(executable.redirectedConstructor,isNull);
        expect(executable.redirectedConstructorName,isEmpty);
        if (this.includeInformative) {
            expect(executable.visibleOffset,0);
            expect(executable.visibleLength,0);
        }
    }
    test_constructor_anonymous() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(); }').executables});
        expect(executable.name,isEmpty);
    }
    test_constructor_const() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { const C(); }').executables});
        expect(executable.isConst,isTrue);
        expect(executable.isExternal,isFalse);
    }
    test_constructor_const_external() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { external const C(); }').executables});
        expect(executable.isConst,isTrue);
        expect(executable.isExternal,isTrue);
    }
    test_constructor_documented() {
        if (!this.includeInformative) return;
        let text : string = 'class C {\n  /**\n   * Docs\n   */\n  C();\n}';
        let executable : any = op(Op.INDEX,this.serializeClassText(text).executables,0);
        expect(executable.documentationComment,isNotNull);
        this.checkDocumentationComment(executable.documentationComment,text);
    }
    test_constructor_external() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { external C(); }').executables});
        expect(executable.isExternal,isTrue);
    }
    test_constructor_factory() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { factory C() => null; }').executables});
        expect(executable.isFactory,isTrue);
    }
    test_constructor_implicit() {
        let executable : any = this.findExecutable(null,{
            executables : this.serializeClassText('class C { C(); }').executables,failIfAbsent : false});
        expect(executable,isNull);
    }
    test_constructor_initializers_assertInvocation() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  const C(int x) : assert(x >= 42);\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.assertInvocation);
        expect(initializer.name,'');
        expect(initializer.expression,isNull);
        expect(initializer.arguments,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.greaterEqual),ints : new core.DartList.literal(42),strings : new core.DartList.literal('x')});
    }
    test_constructor_initializers_assertInvocation_message() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  const C(int x) : assert(x >= 42, \'foo\');\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.assertInvocation);
        expect(initializer.name,'');
        expect(initializer.expression,isNull);
        expect(initializer.arguments,hasLength(2));
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.greaterEqual),ints : new core.DartList.literal(42),strings : new core.DartList.literal('x')});
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,1),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString),strings : new core.DartList.literal('foo')});
    }
    test_constructor_initializers_field() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  final x;\n  const C() : x = 42;\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.field);
        expect(initializer.name,'x');
        this.assertUnlinkedConst(initializer.expression,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(42)});
        expect(initializer.arguments,isEmpty);
    }
    test_constructor_initializers_field_withParameter() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  final x;\n  const C(int p) : x = p;\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.field);
        expect(initializer.name,'x');
        this.assertUnlinkedConst(initializer.expression,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter),strings : new core.DartList.literal('p')});
        expect(initializer.arguments,isEmpty);
    }
    test_constructor_initializers_notConst() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  final x;\n  C() : x = 42;\n}\n').executables});
        expect(executable.constantInitializers,isEmpty);
    }
    test_constructor_initializers_superInvocation_named() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class A {\n  const A.aaa(int p);\n}\nclass C extends A {\n  const C() : super.aaa(42);\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.superInvocation);
        expect(initializer.name,'aaa');
        expect(initializer.expression,isNull);
        expect(initializer.arguments,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(42)});
    }
    test_constructor_initializers_superInvocation_namedExpression() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class A {\n  const A(a, {int b, int c});\n}\nclass C extends A {\n  const C() : super(1, b: 2, c: 3);\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.superInvocation);
        expect(initializer.name,'');
        expect(initializer.expression,isNull);
        expect(initializer.arguments,hasLength(3));
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(1)});
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,1),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(2)});
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,2),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(3)});
        expect(initializer.argumentNames,new core.DartList.literal('b','c'));
    }
    test_constructor_initializers_superInvocation_unnamed() {
        let executable : any = this.findExecutable('ccc',{
            executables : this.serializeClassText('class A {\n  const A(int p);\n}\nclass C extends A {\n  const C.ccc() : super(42);\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.superInvocation);
        expect(initializer.name,'');
        expect(initializer.expression,isNull);
        expect(initializer.arguments,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(42)});
    }
    test_constructor_initializers_thisInvocation_named() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  const C() : this.named(1, \'bbb\');\n  const C.named(int a, String b);\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.thisInvocation);
        expect(initializer.name,'named');
        expect(initializer.expression,isNull);
        expect(initializer.arguments,hasLength(2));
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(1)});
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,1),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString),strings : new core.DartList.literal('bbb')});
    }
    test_constructor_initializers_thisInvocation_namedExpression() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  const C() : this.named(1, b: 2, c: 3);\n  const C.named(a, {int b, int c});\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.thisInvocation);
        expect(initializer.name,'named');
        expect(initializer.expression,isNull);
        expect(initializer.arguments,hasLength(3));
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(1)});
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,1),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(2)});
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,2),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(3)});
        expect(initializer.argumentNames,new core.DartList.literal('b','c'));
    }
    test_constructor_initializers_thisInvocation_unnamed() {
        let executable : any = this.findExecutable('named',{
            executables : this.serializeClassText('class C {\n  const C.named() : this(1, \'bbb\');\n  const C(int a, String b);\n}\n').executables});
        expect(executable.constantInitializers,hasLength(1));
        let initializer : any = op(Op.INDEX,executable.constantInitializers,0);
        expect(initializer.kind,UnlinkedConstructorInitializerKind.thisInvocation);
        expect(initializer.name,'');
        expect(initializer.expression,isNull);
        expect(initializer.arguments,hasLength(2));
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(1)});
        this.assertUnlinkedConst(op(Op.INDEX,initializer.arguments,1),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushString),strings : new core.DartList.literal('bbb')});
    }
    test_constructor_initializing_formal() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.isInitializingFormal,isTrue);
    }
    test_constructor_initializing_formal_explicit_type() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(int this.x); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        this.checkTypeRef(parameter.type,'dart:core','int');
    }
    test_constructor_initializing_formal_function_typed() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x()); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.isFunctionTyped,isTrue);
    }
    test_constructor_initializing_formal_function_typed_explicit_return_type() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(int this.x()); Function x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        this.checkTypeRef(parameter.type,'dart:core','int');
    }
    test_constructor_initializing_formal_function_typed_implicit_return_type() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x()); Function x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.isFunctionTyped,isTrue);
        expect(parameter.type,isNull);
    }
    test_constructor_initializing_formal_function_typed_no_parameters() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x()); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.parameters,isEmpty);
    }
    test_constructor_initializing_formal_function_typed_parameter() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x(a)); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.parameters,hasLength(1));
    }
    test_constructor_initializing_formal_function_typed_parameter_order() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x(a, b)); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.parameters,hasLength(2));
        expect(op(Op.INDEX,parameter.parameters,0).name,'a');
        expect(op(Op.INDEX,parameter.parameters,1).name,'b');
    }
    test_constructor_initializing_formal_function_typed_withDefault() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  C([this.x() = foo]);\n  final x;\n}\nint foo() => 0;\n').executables});
        let param : any = op(Op.INDEX,executable.parameters,0);
        expect(param.isFunctionTyped,isTrue);
        expect(param.kind,UnlinkedParamKind.positional);
        expect(param.defaultValueCode,'foo');
        this.assertUnlinkedConst(param.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_constructor_initializing_formal_implicit_type() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x); int x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.type,isNull);
    }
    test_constructor_initializing_formal_name() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.name,'x');
    }
    test_constructor_initializing_formal_named() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C({this.x}); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.kind,UnlinkedParamKind.named);
        expect(parameter.initializer,isNull);
        expect(parameter.defaultValueCode,isEmpty);
    }
    test_constructor_initializing_formal_named_withDefault() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C({this.x: 42}); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.kind,UnlinkedParamKind.named);
        expect(parameter.initializer,isNotNull);
        expect(parameter.defaultValueCode,'42');
        if (this.includeInformative) {
            this._assertCodeRange(parameter.codeRange,13,10);
        }
        this.assertUnlinkedConst(parameter.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(42)});
    }
    test_constructor_initializing_formal_non_function_typed() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.isFunctionTyped,isFalse);
    }
    test_constructor_initializing_formal_positional() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C([this.x]); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.kind,UnlinkedParamKind.positional);
        expect(parameter.initializer,isNull);
        expect(parameter.defaultValueCode,isEmpty);
    }
    test_constructor_initializing_formal_positional_withDefault() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C([this.x = 42]); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.kind,UnlinkedParamKind.positional);
        expect(parameter.initializer,isNotNull);
        expect(parameter.defaultValueCode,'42');
        if (this.includeInformative) {
            this._assertCodeRange(parameter.codeRange,13,11);
        }
        this.assertUnlinkedConst(parameter.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(42)});
    }
    test_constructor_initializing_formal_required() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(this.x); final x; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.kind,UnlinkedParamKind.required);
    }
    test_constructor_initializing_formal_typedef() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('typedef F<T>(T x); class C<X> { C(this.f); F<X> f; }').executables});
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        expect(parameter.isFunctionTyped,isFalse);
        expect(parameter.parameters,isEmpty);
    }
    test_constructor_initializing_formal_withDefault() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C {\n  C([this.x = 42]);\n  final int x;\n}').executables});
        let param : any = op(Op.INDEX,executable.parameters,0);
        expect(param.kind,UnlinkedParamKind.positional);
        expect(param.defaultValueCode,'42');
        this.assertUnlinkedConst(param.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(42)});
    }
    test_constructor_named() {
        let text : string = 'class C { C.foo(); }';
        let executable : any = this.findExecutable('foo',{
            executables : this.serializeClassText(text).executables});
        expect(executable.name,'foo');
        if (this.includeInformative) {
            expect(executable.nameOffset,new core.DartString(text).indexOf('foo'));
            expect(executable.periodOffset,new core.DartString(text).indexOf('.foo'));
            expect(executable.nameEnd,new core.DartString(text).indexOf('()'));
            this._assertCodeRange(executable.codeRange,10,8);
        }
    }
    test_constructor_non_const() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(); }').executables});
        expect(executable.isConst,isFalse);
    }
    test_constructor_non_factory() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(); }').executables});
        expect(executable.isFactory,isFalse);
    }
    test_constructor_param_inferred_type_explicit() {
        let ctor : any = op(Op.INDEX,this.serializeClassText('class C { C(int v); }').executables,0);
        expect(ctor.kind,UnlinkedExecutableKind.constructor);
        expect(op(Op.INDEX,ctor.parameters,0).inferredTypeSlot,0);
    }
    test_constructor_param_inferred_type_implicit() {
        let ctor : any = op(Op.INDEX,this.serializeClassText('class C { C(v); }').executables,0);
        expect(ctor.kind,UnlinkedExecutableKind.constructor);
        expect(op(Op.INDEX,ctor.parameters,0).inferredTypeSlot,0);
    }
    test_constructor_redirected_factory_named() {
        let text : string = 'class C {\n  factory C() = D.named;\n  C._();\n}\nclass D extends C {\n  D.named() : super._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,null,'named',{
            expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'D'))});
    }
    test_constructor_redirected_factory_named_generic() {
        let text : string = 'class C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\nclass D<T, U> extends C<U, T> {\n  D.named() : super._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,null,'named',{
            expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'D',{
                numTypeParameters : 2})),numTypeArguments : 2});
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,0),1);
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,1),2);
    }
    test_constructor_redirected_factory_named_imported() {
        this.addNamedSource('/foo.dart','import \'test.dart\';\nclass D extends C {\n  D.named() : super._();\n}\n');
        let text : string = 'import \'foo.dart\';\nclass C {\n  factory C() = D.named;\n  C._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,null,'named',{
            expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'D',{
                absoluteUri : absUri('/foo.dart')}))});
    }
    test_constructor_redirected_factory_named_imported_generic() {
        this.addNamedSource('/foo.dart','import \'test.dart\';\nclass D<T, U> extends C<U, T> {\n  D.named() : super._();\n}\n');
        let text : string = 'import \'foo.dart\';\nclass C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,null,'named',{
            expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'D',{
                numTypeParameters : 2,absoluteUri : absUri('/foo.dart')})),numTypeArguments : 2});
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,0),1);
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,1),2);
    }
    test_constructor_redirected_factory_named_prefixed() {
        this.addNamedSource('/foo.dart','import \'test.dart\';\nclass D extends C {\n  D.named() : super._();\n}\n');
        let text : string = 'import \'foo.dart\' as foo;\nclass C {\n  factory C() = foo.D.named;\n  C._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,null,'named',{
            expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'D',{
                absoluteUri : absUri('/foo.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'foo'))});
    }
    test_constructor_redirected_factory_named_prefixed_generic() {
        this.addNamedSource('/foo.dart','import \'test.dart\';\nclass D<T, U> extends C<U, T> {\n  D.named() : super._();\n}\n');
        let text : string = 'import \'foo.dart\' as foo;\nclass C<T, U> {\n  factory C() = foo.D<U, T>.named;\n  C._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,null,'named',{
            expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'D',{
                numTypeParameters : 2,absoluteUri : absUri('/foo.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'foo')),numTypeArguments : 2});
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,0),1);
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,1),2);
    }
    test_constructor_redirected_factory_unnamed() {
        let text : string = 'class C {\n  factory C() = D;\n  C._();\n}\nclass D extends C {\n  D() : super._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,null,'D');
    }
    test_constructor_redirected_factory_unnamed_generic() {
        let text : string = 'class C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\nclass D<T, U> extends C<U, T> {\n  D() : super._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,null,'D',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,0),1);
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,1),2);
    }
    test_constructor_redirected_factory_unnamed_imported() {
        this.addNamedSource('/foo.dart','import \'test.dart\';\nclass D extends C {\n  D() : super._();\n}\n');
        let text : string = 'import \'foo.dart\';\nclass C {\n  factory C() = D;\n  C._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,absUri('/foo.dart'),'D');
    }
    test_constructor_redirected_factory_unnamed_imported_generic() {
        this.addNamedSource('/foo.dart','import \'test.dart\';\nclass D<T, U> extends C<U, T> {\n  D() : super._();\n}\n');
        let text : string = 'import \'foo.dart\';\nclass C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,absUri('/foo.dart'),'D',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,0),1);
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,1),2);
    }
    test_constructor_redirected_factory_unnamed_prefixed() {
        this.addNamedSource('/foo.dart','import \'test.dart\';\nclass D extends C {\n  D() : super._();\n}\n');
        let text : string = 'import \'foo.dart\' as foo;\nclass C {\n  factory C() = foo.D;\n  C._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,absUri('/foo.dart'),'D',{
            expectedPrefix : 'foo'});
    }
    test_constructor_redirected_factory_unnamed_prefixed_generic() {
        this.addNamedSource('/foo.dart','import \'test.dart\';\nclass D<T, U> extends C<U, T> {\n  D() : super._();\n}\n');
        let text : string = 'import \'foo.dart\' as foo;\nclass C<T, U> {\n  factory C() = foo.D<U, T>;\n  C._();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isTrue);
        expect(executable.redirectedConstructorName,isEmpty);
        this.checkTypeRef(executable.redirectedConstructor,absUri('/foo.dart'),'D',{
            numTypeParameters : 2,expectedPrefix : 'foo',numTypeArguments : 2});
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,0),1);
        this.checkParamTypeRef(op(Op.INDEX,executable.redirectedConstructor.typeArguments,1),2);
    }
    test_constructor_redirected_thisInvocation_named() {
        let text : string = 'class C {\n  C() : this.named();\n  C.named();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isFalse);
        expect(executable.redirectedConstructorName,'named');
        expect(executable.redirectedConstructor,isNull);
    }
    test_constructor_redirected_thisInvocation_unnamed() {
        let text : string = 'class C {\n  C.named() : this();\n  C();\n}\n';
        let executable : any = op(Op.INDEX,this.serializeClassText(text,{
            className : 'C'}).executables,0);
        expect(executable.isRedirectedConstructor,isTrue);
        expect(executable.isFactory,isFalse);
        expect(executable.redirectedConstructorName,isEmpty);
        expect(executable.redirectedConstructor,isNull);
    }
    test_constructor_return_type() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C { C(); }').executables});
        expect(executable.returnType,isNull);
    }
    test_constructor_return_type_parameterized() {
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText('class C<T, U> { C(); }').executables});
        expect(executable.returnType,isNull);
    }
    test_constructor_withCycles_const() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = const D();\n}\nclass D {\n  final x;\n  const D() : x = const C();\n}\nclass E {\n  final x;\n  const E() : x = null;\n}\n');
        this.checkConstCycle('C');
        this.checkConstCycle('D');
        this.checkConstCycle('E',{
            hasCycle : false});
    }
    test_constructor_withCycles_nonConst() {
        this.serializeLibraryText('class C {\n  final x;\n  C() : x = new D();\n}\nclass D {\n  final x;\n  D() : x = new C();\n}\n');
        expect(op(Op.INDEX,this.findClass('C').executables,0).constCycleSlot,0);
        expect(op(Op.INDEX,this.findClass('D').executables,0).constCycleSlot,0);
    }
    test_constructorCycle_redirectToImplicitConstructor() {
        this.serializeLibraryText('class C {\n  const factory C() = D;\n}\nclass D extends C {}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_redirectToNonConstConstructor() {
        this.serializeLibraryText('class C {\n  const factory C() = D;\n}\nclass D extends C {\n  D();\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_redirectToSymbolConstructor() {
        this.serializeLibraryText('class C {\n  const factory C(String name) = Symbol;\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToClass() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = C;\n}\n');
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToEnum() {
        this.serializeLibraryText('enum E { v }\nclass C {\n  final x;\n  const C() : x = E;\n}\n');
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToEnumValue() {
        this.serializeLibraryText('enum E { v }\nclass C {\n  final x;\n  const C() : x = E.v;\n}\n');
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToEnumValues() {
        this.serializeLibraryText('enum E { v }\nclass C {\n  final x;\n  const C() : x = E.values;\n}\n');
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToGenericParameter() {
        this.serializeLibraryText('class C<T> {\n  final x;\n  const C() : x = T;\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToGenericParameter_asSupertype() {
        this.serializeLibraryText('class C<T> extends T {\n  const C();\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToStaticMethod_inOtherClass() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = D.f;\n}\nclass D {\n  static void f() {}\n}\n');
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToStaticMethod_inSameClass() {
        this.serializeLibraryText('class C {\n  final x;\n  static void f() {}\n  const C() : x = f;\n}\n');
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToTopLevelFunction() {
        this.serializeLibraryText('void f() {}\nclass C {\n  final x;\n  const C() : x = f;\n}\n');
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToTypedef() {
        this.serializeLibraryText('typedef F();\nclass C {\n  final x;\n  const C() : x = F;\n}\n');
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToUndefinedName() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = foo;\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToUndefinedName_viaPrefix() {
        this.addNamedSource('/a.dart','');
        this.serializeLibraryText('import \'a.dart\' as a;\nclass C {\n  final x;\n  const C() : x = a.foo;\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_referenceToUndefinedName_viaPrefix_nonExistentFile() {
        this.allowMissingFiles = true;
        this.serializeLibraryText('import \'a.dart\' as a;\nclass C {\n  final x;\n  const C() : x = a.foo;\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_trivial() {
        this.serializeLibraryText('class C {\n  const C() : this();\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C');
    }
    test_constructorCycle_viaFactoryRedirect() {
        this.serializeLibraryText('class C {\n  const C();\n  const factory C.named() = D;\n}\nclass D extends C {\n  final x;\n  const D() : x = y;\n}\nconst y = const C.named();\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
        this.checkConstCycle('C',{
            name : 'named'});
        this.checkConstCycle('D');
    }
    test_constructorCycle_viaFinalField() {
        this.serializeLibraryText('class C {\n  final x = const C();\n  const C();\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C');
    }
    test_constructorCycle_viaLength() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = y.length;\n}\nconst y = const C();\n',{
            allowErrors : true});
        this.checkConstCycle('C');
    }
    test_constructorCycle_viaNamedConstructor() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = const D.named();\n}\nclass D {\n  final x;\n  const D.named() : x = const C();\n}\n');
        this.checkConstCycle('C');
        this.checkConstCycle('D',{
            name : 'named'});
    }
    test_constructorCycle_viaOrdinaryRedirect() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : this.named();\n  const C.named() : x = const C();\n}\n');
        this.checkConstCycle('C');
        this.checkConstCycle('C',{
            name : 'named'});
    }
    test_constructorCycle_viaOrdinaryRedirect_suppressSupertype() {
        this.serializeLibraryText('class B {\n  final x;\n  const B() : x = const C();\n  const B.named() : x = null;\n}\nclass C extends B {\n  const C() : this.named();\n  const C.named() : super.named();\n}\n');
        this.checkConstCycle('B',{
            hasCycle : false});
        this.checkConstCycle('B',{
            name : 'named',hasCycle : false});
        this.checkConstCycle('C',{
            hasCycle : false});
        this.checkConstCycle('C',{
            name : 'named',hasCycle : false});
    }
    test_constructorCycle_viaRedirectArgument() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : this.named(y);\n  const C.named(this.x);\n}\nconst y = const C();\n',{
            allowErrors : true});
        this.checkConstCycle('C');
        this.checkConstCycle('C',{
            name : 'named',hasCycle : false});
    }
    test_constructorCycle_viaStaticField_inOtherClass() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = D.y;\n}\nclass D {\n  static const y = const C();\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C');
    }
    test_constructorCycle_viaStaticField_inSameClass() {
        this.serializeLibraryText('class C {\n  final x;\n  static const y = const C();\n  const C() : x = y;\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C');
    }
    test_constructorCycle_viaSuperArgument() {
        this.serializeLibraryText('class B {\n  final x;\n  const B(this.x);\n}\nclass C extends B {\n  const C() : super(y);\n}\nconst y = const C();\n',{
            allowErrors : true});
        this.checkConstCycle('B',{
            hasCycle : false});
        this.checkConstCycle('C');
    }
    test_constructorCycle_viaSupertype() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = const D();\n}\nclass D extends C {\n  const D();\n}\n');
        this.checkConstCycle('C');
        this.checkConstCycle('D');
    }
    test_constructorCycle_viaSupertype_Enum() {
        this.serializeLibraryText('enum E { v }\nclass C extends E {\n  const C();\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
    }
    test_constructorCycle_viaSupertype_explicit() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = const D();\n  const C.named() : x = const D.named();\n}\nclass D extends C {\n  const D() : super();\n  const D.named() : super.named();\n}\n');
        this.checkConstCycle('C');
        this.checkConstCycle('C',{
            name : 'named'});
        this.checkConstCycle('D');
        this.checkConstCycle('D',{
            name : 'named'});
    }
    test_constructorCycle_viaSupertype_explicit_undefined() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = const D();\n}\nclass D extends C {\n  const D() : super.named();\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C',{
            hasCycle : false});
        this.checkConstCycle('D',{
            hasCycle : false});
    }
    test_constructorCycle_viaSupertype_withDefaultTypeArgument() {
        this.serializeLibraryText('class C<T> {\n  final x;\n  const C() : x = const D();\n}\nclass D extends C {\n  const D();\n}\n');
        this.checkConstCycle('C');
        this.checkConstCycle('D');
    }
    test_constructorCycle_viaSupertype_withTypeArgument() {
        this.serializeLibraryText('class C<T> {\n  final x;\n  const C() : x = const D();\n}\nclass D extends C<int> {\n  const D();\n}\n');
        this.checkConstCycle('C');
        this.checkConstCycle('D');
    }
    test_constructorCycle_viaTopLevelVariable() {
        this.serializeLibraryText('class C {\n  final x;\n  const C() : x = y;\n}\nconst y = const C();\n',{
            allowErrors : true});
        this.checkConstCycle('C');
    }
    test_constructorCycle_viaTopLevelVariable_imported() {
        this.addNamedSource('/a.dart','import \'test.dart\';\nconst y = const C();\n    ');
        this.serializeLibraryText('import \'a.dart\';\nclass C {\n  final x;\n  const C() : x = y;\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C');
    }
    test_constructorCycle_viaTopLevelVariable_importedViaPrefix() {
        this.addNamedSource('/a.dart','import \'test.dart\';\nconst y = const C();\n    ');
        this.serializeLibraryText('import \'a.dart\' as a;\nclass C {\n  final x;\n  const C() : x = a.y;\n}\n',{
            allowErrors : true});
        this.checkConstCycle('C');
    }
    test_dependencies_export_to_export_unused() {
        this.addNamedSource('/a.dart','export "b.dart";');
        this.addNamedSource('/b.dart','');
        this.serializeLibraryText('export "a.dart";');
        this.checkHasDependency(absUri('/b.dart'));
    }
    test_dependencies_export_unused() {
        this.addNamedSource('/a.dart','');
        this.serializeLibraryText('export "a.dart";');
        this.checkHasDependency(absUri('/a.dart'));
    }
    test_dependencies_import_to_export() {
        this.addNamedSource('/a.dart','library a; export "b.dart"; class A {}');
        this.addNamedSource('/b.dart','library b;');
        this.serializeLibraryText('import "a.dart"; A a;');
        this.checkHasDependency(absUri('/a.dart'));
        this.checkHasDependency(absUri('/b.dart'));
    }
    test_dependencies_import_to_export_in_subdirs_absolute_export() {
        this.addNamedSource('/a/a.dart',`library a; export "${absUri('/a/b/b.dart')}"; class A {}`);
        this.addNamedSource('/a/b/b.dart','library b;');
        this.serializeLibraryText('import "a/a.dart"; A a;');
        this.checkHasDependency(absUri('/a/a.dart'));
        this.checkHasDependency(absUri('/a/b/b.dart'));
    }
    test_dependencies_import_to_export_in_subdirs_absolute_import() {
        this.addNamedSource('/a/a.dart','library a; export "b/b.dart"; class A {}');
        this.addNamedSource('/a/b/b.dart','library b;');
        this.serializeLibraryText(`import "${absUri('/a/a.dart')}"; A a;`);
        this.checkHasDependency(absUri('/a/a.dart'));
        this.checkHasDependency(absUri('/a/b/b.dart'));
    }
    test_dependencies_import_to_export_in_subdirs_relative() {
        this.addNamedSource('/a/a.dart','library a; export "b/b.dart"; class A {}');
        this.addNamedSource('/a/b/b.dart','library b;');
        this.serializeLibraryText('import "a/a.dart"; A a;');
        this.checkHasDependency(absUri('/a/a.dart'));
        this.checkHasDependency(absUri('/a/b/b.dart'));
    }
    test_dependencies_import_to_export_loop() {
        this.addNamedSource('/a.dart','library a; export "b.dart"; class A {}');
        this.addNamedSource('/b.dart','library b; export "a.dart";');
        this.serializeLibraryText('import "a.dart"; A a;');
        this.checkHasDependency(absUri('/a.dart'));
        this.checkHasDependency(absUri('/b.dart'));
    }
    test_dependencies_import_to_export_transitive_closure() {
        this.addNamedSource('/a.dart','library a; export "b.dart"; class A {}');
        this.addNamedSource('/b.dart','library b; export "c.dart";');
        this.addNamedSource('/c.dart','library c;');
        this.serializeLibraryText('import "a.dart"; A a;');
        this.checkHasDependency(absUri('/a.dart'));
        this.checkHasDependency(absUri('/c.dart'));
    }
    test_dependencies_import_to_export_unused() {
        this.addNamedSource('/a.dart','export "b.dart";');
        this.addNamedSource('/b.dart','');
        this.serializeLibraryText('import "a.dart";',{
            allowErrors : true});
        this.checkHasDependency(absUri('/b.dart'));
    }
    test_dependencies_import_transitive_closure() {
        this.addNamedSource('/a.dart','library a; import "b.dart"; class A extends B {}');
        this.addNamedSource('/b.dart','library b; class B {}');
        this.serializeLibraryText('import "a.dart"; A a;');
        this.checkHasDependency(absUri('/a.dart'));
        this.checkLacksDependency(absUri('/b.dart'));
    }
    test_dependencies_import_unused() {
        this.addNamedSource('/a.dart','');
        this.serializeLibraryText('import "a.dart";',{
            allowErrors : true});
        this.checkHasDependency(absUri('/a.dart'));
    }
    test_dependencies_parts() {
        this.addNamedSource('/a.dart','library a; part "b.dart"; part "c.dart"; class A {}');
        this.addNamedSource('/b.dart','part of a;');
        this.addNamedSource('/c.dart','part of a;');
        this.serializeLibraryText('import "a.dart"; A a;');
        let dep : number = this.checkHasDependency(absUri('/a.dart'));
        this.checkDependencyParts(op(Op.INDEX,this.linked.dependencies,dep),new core.DartList.literal(absUri('/b.dart'),absUri('/c.dart')));
    }
    test_dependencies_parts_relative_to_importing_library() {
        this.addNamedSource('/a/b.dart','export "c/d.dart";');
        this.addNamedSource('/a/c/d.dart','library d; part "e/f.dart"; part "g/h.dart"; class D {}');
        this.addNamedSource('/a/c/e/f.dart','part of d;');
        this.addNamedSource('/a/c/g/h.dart','part of d;');
        this.serializeLibraryText('import "a/b.dart"; D d;');
        let dep : number = this.checkHasDependency(absUri('/a/c/d.dart'));
        this.checkDependencyParts(op(Op.INDEX,this.linked.dependencies,dep),new core.DartList.literal(absUri('/a/c/e/f.dart'),absUri('/a/c/g/h.dart')));
    }
    test_elements_in_part() {
        this.addNamedSource('/part1.dart','part of my.lib;\n\nclass C {}\nenum E { v }\nvar v;\nf() {}\ntypedef F();\n');
        this.serializeLibraryText('library my.lib; part "part1.dart";');
        let unit : any = this.unlinkedUnits[1];
        expect(this.findClass('C',{
            unit : unit}),isNotNull);
        expect(this.findEnum('E',{
            unit : unit}),isNotNull);
        expect(this.findVariable('v',{
            variables : unit.variables}),isNotNull);
        expect(this.findExecutable('f',{
            executables : unit.executables}),isNotNull);
        expect(this.findTypedef('F',{
            unit : unit}),isNotNull);
    }
    test_enum() {
        let text : string = 'enum E { v1 }';
        let e : any = this.serializeEnumText(text);
        expect(e.name,'E');
        if (this.includeInformative) {
            expect(e.nameOffset,new core.DartString(text).indexOf('E'));
        }
        expect(e.values,hasLength(1));
        expect(op(Op.INDEX,e.values,0).name,'v1');
        if (this.includeInformative) {
            expect(op(Op.INDEX,e.values,0).nameOffset,new core.DartString(text).indexOf('v1'));
            this._assertCodeRange(e.codeRange,0,13);
        }
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).kind,ReferenceKind.classOrEnum);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'E');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,0);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,hasLength(2));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).kind,ReferenceKind.propertyAccessor);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).name,'values');
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).numTypeParameters,0);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,1).kind,ReferenceKind.propertyAccessor);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,1).name,'v1');
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,1).numTypeParameters,0);
    }
    test_enum_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nenum E { v }';
        let enm : any = this.serializeEnumText(text);
        expect(enm.documentationComment,isNotNull);
        this.checkDocumentationComment(enm.documentationComment,text);
    }
    test_enum_order() {
        let e : any = this.serializeEnumText('enum E { v1, v2 }');
        expect(e.values,hasLength(2));
        expect(op(Op.INDEX,e.values,0).name,'v1');
        expect(op(Op.INDEX,e.values,1).name,'v2');
    }
    test_enum_private() {
        this.serializeEnumText('enum _E { v1 }','_E');
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
    }
    test_enum_value_documented() {
        if (!this.includeInformative) return;
        let text : string = 'enum E {\n  /**\n   * Docs\n   */\n  v\n}';
        let value : any = op(Op.INDEX,this.serializeEnumText(text).values,0);
        expect(value.documentationComment,isNotNull);
        this.checkDocumentationComment(value.documentationComment,text);
    }
    test_enum_value_private() {
        this.serializeEnumText('enum E { _v }','E');
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,hasLength(1));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).name,'values');
    }
    test_executable_abstract() {
        let executable : any = op(Op.INDEX,this.serializeClassText('abstract class C { f(); }').executables,0);
        expect(executable.isAbstract,isTrue);
    }
    test_executable_concrete() {
        let executable : any = op(Op.INDEX,this.serializeClassText('abstract class C { f() {} }').executables,0);
        expect(executable.isAbstract,isFalse);
    }
    test_executable_function() {
        let text : string = '  f() {}';
        let executable : any = this.serializeExecutableText(text);
        expect(executable.kind,UnlinkedExecutableKind.functionOrMethod);
        expect(executable.returnType,isNull);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,isFalse);
        expect(executable.isGenerator,isFalse);
        if (this.includeInformative) {
            expect(executable.nameOffset,new core.DartString(text).indexOf('f'));
            expect(executable.visibleOffset,0);
            expect(executable.visibleLength,0);
        }
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).kind,ReferenceKind.topLevelFunction);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'f');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,0);
    }
    test_executable_function_async() {
        let executable : any = this.serializeExecutableText('import \'dart:async\';\nFuture f() async {}\n');
        expect(executable.isAsynchronous,isTrue);
        expect(executable.isGenerator,isFalse);
    }
    test_executable_function_asyncStar() {
        let executable : any = this.serializeExecutableText('import \'dart:async\';\nStream f() async* {}\n');
        expect(executable.isAsynchronous,isTrue);
        expect(executable.isGenerator,isTrue);
    }
    test_executable_function_explicit_return() {
        let executable : any = this.serializeExecutableText('dynamic f() => null;');
        this.checkDynamicTypeRef(executable.returnType);
    }
    test_executable_function_external() {
        let executable : any = this.serializeExecutableText('external f();');
        expect(executable.isExternal,isTrue);
    }
    test_executable_function_private() {
        this.serializeExecutableText('_f() {}',{
            executableName : '_f'});
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
    }
    test_executable_getter() {
        let text : string = 'int get f => 1;';
        let executable : any = this.serializeExecutableText(text);
        expect(executable.kind,UnlinkedExecutableKind.getter);
        expect(executable.returnType,isNotNull);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,isFalse);
        expect(executable.isGenerator,isFalse);
        if (this.includeInformative) {
            expect(executable.nameOffset,new core.DartString(text).indexOf('f'));
        }
        expect(this.findVariable('f'),isNull);
        expect(this.findExecutable('f='),isNull);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).kind,ReferenceKind.topLevelPropertyAccessor);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'f');
    }
    test_executable_getter_external() {
        let executable : any = this.serializeExecutableText('external int get f;');
        expect(executable.isExternal,isTrue);
    }
    test_executable_getter_private() {
        this.serializeExecutableText('int get _f => 1;',{
            executableName : '_f'});
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
    }
    test_executable_getter_type() {
        let executable : any = this.serializeExecutableText('int get f => 1;');
        this.checkTypeRef(executable.returnType,'dart:core','int');
        expect(executable.parameters,isEmpty);
    }
    test_executable_getter_type_implicit() {
        let executable : any = this.serializeExecutableText('get f => 1;');
        expect(executable.returnType,isNull);
        expect(executable.parameters,isEmpty);
    }
    test_executable_localFunctions() {
        let code : string = 'f() {\n  f1() {}\n  {\n    f2() {}\n  }\n}\n';
        let executable : any = this.serializeExecutableText(code);
        let functions : core.DartList<any> = executable.localFunctions;
        expect(functions,isEmpty);
    }
    test_executable_localLabels_inMethod() {
        let code : string = 'class C {\n  m() {\n    aaa: while (true) {}\n    bbb: while (true) {}\n  }\n}\n';
        let executable : any = this.findExecutable('m',{
            executables : this.serializeClassText(code).executables});
        let labels : core.DartList<any> = executable.localLabels;
        expect(labels,isEmpty);
    }
    test_executable_localLabels_inTopLevelFunction() {
        let code : string = 'f() {\n  aaa: while (true) {}\n  bbb: switch (42) {\n    ccc: case 0:\n      break;\n    ddd: default:\n      break;\n  }\n}\n';
        let executable : any = this.serializeExecutableText(code);
        let labels : core.DartList<any> = executable.localLabels;
        expect(labels,isEmpty);
    }
    test_executable_localLabels_inTopLevelGetter() {
        let code : string = 'get g {\n  aaa: while (true) {}\n  bbb: while (true) {}\n}\n';
        let executable : any = this.serializeExecutableText(code,{
            executableName : 'g'});
        let labels : core.DartList<any> = executable.localLabels;
        expect(labels,isEmpty);
    }
    test_executable_localLabels_namedExpressionLabel() {
        let code : string = 'f() {\n  foo(p: 42);\n}\nfoo({int p}) {}\n';
        let executable : any = this.serializeExecutableText(code);
        let labels : core.DartList<any> = executable.localLabels;
        expect(labels,isEmpty);
    }
    test_executable_localVariables_catch() {
        let code : string = 'var v = (\n  () { // 1\n    try {\n      throw 42;\n    } on int catch (e, st) { // 2\n      print(e);\n      print(st);\n    } // 3\n  } // 4\n);\n';
        let executable : any = op(Op.INDEX,this.serializeVariableText(code).initializer.localFunctions,0);
        let variables : core.DartList<any> = executable.localVariables;
        expect(variables,hasLength(2));
        {
            let e : any = variables.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'e');
            });
            this._assertVariableVisible(code,e,'on int catch (','} // 3');
            this.checkTypeRef(e.type,'dart:core','int');
        }
        {
            let st : any = variables.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'st');
            });
            this._assertVariableVisible(code,st,'on int catch (','} // 3');
        }
    }
    test_executable_localVariables_catch_noVariables() {
        let code : string = 'f() {\n  try {\n    throw 42;\n  } on int {}\n}\n';
        let executable : any = this.serializeExecutableText(code);
        let variables : core.DartList<any> = executable.localVariables;
        expect(variables,isEmpty);
    }
    test_executable_localVariables_empty() {
        let executable : any = this.serializeExecutableText('f() {\n}\n');
        expect(executable.localVariables,isEmpty);
    }
    test_executable_localVariables_forEachLoop() {
        let code : string = 'var v = (() {\n  f() { // 1\n    for (int i in <int>[]) { // 2\n      print(i);\n    } // 3\n  } // 4\n});\n';
        let executable : any = op(Op.INDEX,op(Op.INDEX,this.serializeVariableText(code).initializer.localFunctions,0).localFunctions,0);
        let variables : core.DartList<any> = executable.localVariables;
        expect(variables,hasLength(1));
        {
            let i : any = variables.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'i');
            });
            this._assertVariableVisible(code,i,'for','} // 3');
            this.checkTypeRef(i.type,'dart:core','int');
        }
    }
    test_executable_localVariables_forEachLoop_outside() {
        let code : string = 'var v = (() {\n  f() { // 1\n    int i;\n    for (i in <int>[]) {\n      print(i);\n    }\n  } // 4\n});\n';
        let executable : any = op(Op.INDEX,op(Op.INDEX,this.serializeVariableText(code).initializer.localFunctions,0).localFunctions,0);
        let variables : core.DartList<any> = executable.localVariables;
        expect(variables,hasLength(1));
        {
            let i : any = variables.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'i');
            });
            this._assertVariableVisible(code,i,'{ // 1','} // 4');
            this.checkTypeRef(i.type,'dart:core','int');
        }
    }
    test_executable_localVariables_forLoop() {
        let code : string = 'var v = (() {\n  f() { // 1\n    for (int i = 0, j = 0; i < 10; i++, j++) { // 2\n      print(i);\n    } // 3\n  } // 4\n});\n';
        let executable : any = op(Op.INDEX,op(Op.INDEX,this.serializeVariableText(code).initializer.localFunctions,0).localFunctions,0);
        let variables : core.DartList<any> = executable.localVariables;
        expect(variables,hasLength(2));
        {
            let i : any = variables.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'i');
            });
            this._assertVariableVisible(code,i,'for','} // 3');
            this.checkTypeRef(i.type,'dart:core','int');
        }
        {
            let i : any = variables.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'j');
            });
            this._assertVariableVisible(code,i,'for','} // 3');
            this.checkTypeRef(i.type,'dart:core','int');
        }
    }
    test_executable_localVariables_forLoop_noVariables() {
        let code : string = 'var v = (() {\n  f() {\n    for (; true;) {}\n  }\n});\n';
        let executable : any = op(Op.INDEX,op(Op.INDEX,this.serializeVariableText(code).initializer.localFunctions,0).localFunctions,0);
        let variables : core.DartList<any> = executable.localVariables;
        expect(variables,isEmpty);
    }
    test_executable_localVariables_inConstructor() {
        let code : string = 'class C {\n  C() {\n    int v;\n  }\n}\n';
        let executable : any = this.findExecutable('',{
            executables : this.serializeClassText(code).executables});
        let variables : core.DartList<any> = executable.localVariables;
        expect(variables,isEmpty);
    }
    test_executable_localVariables_inLocalFunctions() {
        let code : string = 'var v = (() {\n  f() {\n    f1() { // 1\n      int v1 = 1;\n    } // 2\n    f2() { // 3\n      int v1 = 1;\n      f3() { // 4\n        int v2 = 1;\n      } // 5\n    } // 6\n  } // 7\n});\n';
        let executable : any = op(Op.INDEX,op(Op.INDEX,this.serializeVariableText(code).initializer.localFunctions,0).localFunctions,0);
        let functions : core.DartList<any> = executable.localFunctions;
        expect(functions,hasLength(2));
        {
            let f1 : any = functions.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'f1');
            });
            let variables : core.DartList<any> = f1.localVariables;
            expect(variables,hasLength(1));
            let v1 : any = variables.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'v1');
            });
            this._assertVariableVisible(code,v1,'{ // 1','} // 2');
            this.checkTypeRef(v1.type,'dart:core','int');
        }
        {
            let f2 : any = functions.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'f2');
            });
            let variables2 : core.DartList<any> = f2.localVariables;
            let functions2 : core.DartList<any> = f2.localFunctions;
            expect(variables2,hasLength(1));
            expect(functions2,hasLength(1));
            let v1 : any = variables2.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'v1');
            });
            this._assertVariableVisible(code,v1,'{ // 3','} // 6');
            this.checkTypeRef(v1.type,'dart:core','int');
            let f3 : any = functions2.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'f3');
            });
            this._assertExecutableVisible(code,f3,'{ // 3','} // 6');
            let variables3 : core.DartList<any> = f3.localVariables;
            let functions3 : core.DartList<any> = f3.localFunctions;
            expect(variables3,hasLength(1));
            expect(functions3,hasLength(0));
            let v2 : any = variables3.singleWhere((v : any) =>  {
                return op(Op.EQUALS,v.name,'v2');
            });
            this._assertVariableVisible(code,v2,'{ // 4','} // 5');
            this.checkTypeRef(v2.type,'dart:core','int');
        }
    }
    test_executable_localVariables_inMethod() {
        let code : string = 'class C {\n  m() {\n    int v;\n    f() {}\n  }\n}\n';
        let executable : any = this.findExecutable('m',{
            executables : this.serializeClassText(code).executables});
        expect(executable.localFunctions,isEmpty);
        expect(executable.localVariables,isEmpty);
    }
    test_executable_localVariables_inTopLevelFunction() {
        let code : string = 'f() {\n  int v1 = 1;\n  {\n    int v2 = 2;\n  }\n  var v3 = 3;\n}\n';
        let executable : any = this.serializeExecutableText(code);
        let variables : core.DartList<any> = executable.localVariables;
        expect(variables,isEmpty);
    }
    test_executable_localVariables_inTopLevelGetter() {
        let code : string = 'get g { // 1\n  int v;\n  f() {}\n} // 2\n';
        let executable : any = this.serializeExecutableText(code,{
            executableName : 'g'});
        expect(executable.localFunctions,isEmpty);
        expect(executable.localVariables,isEmpty);
    }
    test_executable_member_function() {
        let executable : any = this.findExecutable('f',{
            executables : this.serializeClassText('class C { f() {} }').executables});
        expect(executable.kind,UnlinkedExecutableKind.functionOrMethod);
        expect(executable.returnType,isNull);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,isFalse);
        expect(executable.isGenerator,isFalse);
        if (this.includeInformative) {
            expect(executable.visibleOffset,0);
            expect(executable.visibleLength,0);
            this._assertCodeRange(executable.codeRange,10,6);
        }
    }
    test_executable_member_function_async() {
        let executable : any = this.findExecutable('f',{
            executables : this.serializeClassText('import \'dart:async\';\nclass C {\n  Future f() async {}\n}\n').executables});
        expect(executable.isAsynchronous,isTrue);
        expect(executable.isGenerator,isFalse);
    }
    test_executable_member_function_asyncStar() {
        let executable : any = this.findExecutable('f',{
            executables : this.serializeClassText('import \'dart:async\';\nclass C {\n  Stream f() async* {}\n}\n').executables});
        expect(executable.isAsynchronous,isTrue);
        expect(executable.isGenerator,isTrue);
    }
    test_executable_member_function_explicit_return() {
        let executable : any = this.findExecutable('f',{
            executables : this.serializeClassText('class C { dynamic f() => null; }').executables});
        expect(executable.returnType,isNotNull);
    }
    test_executable_member_function_external() {
        let executable : any = this.findExecutable('f',{
            executables : this.serializeClassText('class C { external f(); }').executables});
        expect(executable.isExternal,isTrue);
    }
    test_executable_member_getter() {
        let cls : any = this.serializeClassText('class C { int get f => 1; }');
        let executable : any = this.findExecutable('f',{
            executables : cls.executables,failIfAbsent : true});
        expect(executable.kind,UnlinkedExecutableKind.getter);
        expect(executable.returnType,isNotNull);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,isFalse);
        expect(executable.isGenerator,isFalse);
        expect(executable.isStatic,isFalse);
        if (this.includeInformative) {
            this._assertCodeRange(executable.codeRange,10,15);
        }
        expect(this.findVariable('f',{
            variables : cls.fields}),isNull);
        expect(this.findExecutable('f=',{
            executables : cls.executables}),isNull);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'C');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,isEmpty);
    }
    test_executable_member_getter_external() {
        let cls : any = this.serializeClassText('class C { external int get f; }');
        let executable : any = this.findExecutable('f',{
            executables : cls.executables,failIfAbsent : true});
        expect(executable.isExternal,isTrue);
    }
    test_executable_member_getter_static() {
        let cls : any = this.serializeClassText('class C { static int get f => 1; }');
        let executable : any = this.findExecutable('f',{
            executables : cls.executables,failIfAbsent : true});
        expect(executable.isStatic,isTrue);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'C');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,hasLength(1));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).name,'f');
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).kind,ReferenceKind.propertyAccessor);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).numTypeParameters,0);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).members,isEmpty);
    }
    test_executable_member_setter() {
        let cls : any = this.serializeClassText('class C { void set f(value) {} }');
        let executable : any = this.findExecutable('f=',{
            executables : cls.executables,failIfAbsent : true});
        expect(executable.kind,UnlinkedExecutableKind.setter);
        expect(executable.returnType,isNotNull);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,isFalse);
        expect(executable.isGenerator,isFalse);
        if (this.includeInformative) {
            this._assertCodeRange(executable.codeRange,10,20);
        }
        expect(this.findVariable('f',{
            variables : cls.fields}),isNull);
        expect(this.findExecutable('f',{
            executables : cls.executables}),isNull);
    }
    test_executable_member_setter_external() {
        let cls : any = this.serializeClassText('class C { external void set f(value); }');
        let executable : any = this.findExecutable('f=',{
            executables : cls.executables,failIfAbsent : true});
        expect(executable.isExternal,isTrue);
    }
    test_executable_member_setter_implicit_return() {
        let cls : any = this.serializeClassText('class C { set f(value) {} }');
        let executable : any = this.findExecutable('f=',{
            executables : cls.executables,failIfAbsent : true});
        expect(executable.returnType,isNull);
    }
    test_executable_name() {
        let executable : any = this.serializeExecutableText('f() {}');
        expect(executable.name,'f');
    }
    test_executable_no_flags() {
        let executable : any = this.serializeExecutableText('f() {}');
        expect(executable.isAbstract,isFalse);
        expect(executable.isConst,isFalse);
        expect(executable.isFactory,isFalse);
        expect(executable.isStatic,isFalse);
    }
    test_executable_non_static() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { f() {} }').executables,0);
        expect(executable.isStatic,isFalse);
    }
    test_executable_non_static_top_level() {
        let executable : any = this.serializeExecutableText('f() {}');
        expect(executable.isStatic,isFalse);
    }
    test_executable_operator() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { C operator+(C c) => null; }').executables,0);
        expect(executable.kind,UnlinkedExecutableKind.functionOrMethod);
        expect(executable.name,'+');
        expect(executable.returnType,isNotNull);
        expect(executable.isAbstract,false);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isConst,false);
        expect(executable.isFactory,false);
        expect(executable.isGenerator,isFalse);
        expect(executable.isStatic,false);
        expect(executable.parameters,hasLength(1));
        this.checkTypeRef(executable.returnType,null,'C');
        expect(executable.typeParameters,isEmpty);
        expect(executable.isExternal,false);
    }
    test_executable_operator_abstract() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { C operator+(C c); }',{
            allowErrors : true}).executables,0);
        expect(executable.isAbstract,true);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,false);
        expect(executable.isGenerator,isFalse);
    }
    test_executable_operator_equal() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { bool operator==(Object other) => false; }').executables,0);
        expect(executable.name,'==');
    }
    test_executable_operator_external() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { external C operator+(C c); }').executables,0);
        expect(executable.isAbstract,false);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,true);
        expect(executable.isGenerator,isFalse);
    }
    test_executable_operator_greater_equal() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { bool operator>=(C other) => false; }').executables,0);
        expect(executable.name,'>=');
    }
    test_executable_operator_index() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { bool operator[](int i) => null; }').executables,0);
        expect(executable.kind,UnlinkedExecutableKind.functionOrMethod);
        expect(executable.name,'[]');
        expect(executable.returnType,isNotNull);
        expect(executable.isAbstract,false);
        expect(executable.isConst,false);
        expect(executable.isFactory,false);
        expect(executable.isStatic,false);
        expect(executable.parameters,hasLength(1));
        this.checkTypeRef(executable.returnType,'dart:core','bool');
        expect(executable.typeParameters,isEmpty);
    }
    test_executable_operator_index_set() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { void operator[]=(int i, bool v) => null; }').executables,0);
        expect(executable.kind,UnlinkedExecutableKind.functionOrMethod);
        expect(executable.name,'[]=');
        expect(executable.returnType,isNotNull);
        expect(executable.isAbstract,false);
        expect(executable.isConst,false);
        expect(executable.isFactory,false);
        expect(executable.isStatic,false);
        expect(executable.parameters,hasLength(2));
        this.checkVoidTypeRef(executable.returnType);
        expect(executable.typeParameters,isEmpty);
    }
    test_executable_operator_less_equal() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { bool operator<=(C other) => false; }').executables,0);
        expect(executable.name,'<=');
    }
    test_executable_param_codeRange() {
        if (!this.includeInformative) return;
        let executable : any = this.serializeExecutableText('f(int x) {}');
        let parameter : any = op(Op.INDEX,executable.parameters,0);
        this._assertCodeRange(parameter.codeRange,2,5);
    }
    test_executable_param_function_typed() {
        let executable : any = this.serializeExecutableText('f(g()) {}');
        expect(op(Op.INDEX,executable.parameters,0).isFunctionTyped,isTrue);
        expect(op(Op.INDEX,executable.parameters,0).type,isNull);
    }
    test_executable_param_function_typed_explicit_return_type() {
        let executable : any = this.serializeExecutableText('f(dynamic g()) {}');
        expect(op(Op.INDEX,executable.parameters,0).type,isNotNull);
    }
    test_executable_param_function_typed_param() {
        let executable : any = this.serializeExecutableText('f(g(x)) {}');
        expect(op(Op.INDEX,executable.parameters,0).parameters,hasLength(1));
    }
    test_executable_param_function_typed_param_none() {
        let executable : any = this.serializeExecutableText('f(g()) {}');
        expect(op(Op.INDEX,executable.parameters,0).parameters,isEmpty);
    }
    test_executable_param_function_typed_param_order() {
        let executable : any = this.serializeExecutableText('f(g(x, y)) {}');
        expect(op(Op.INDEX,executable.parameters,0).parameters,hasLength(2));
        expect(op(Op.INDEX,op(Op.INDEX,executable.parameters,0).parameters,0).name,'x');
        expect(op(Op.INDEX,op(Op.INDEX,executable.parameters,0).parameters,1).name,'y');
    }
    test_executable_param_function_typed_return_type() {
        let executable : any = this.serializeExecutableText('f(int g()) {}');
        this.checkTypeRef(op(Op.INDEX,executable.parameters,0).type,'dart:core','int');
    }
    test_executable_param_function_typed_return_type_implicit() {
        let executable : any = this.serializeExecutableText('f(g()) {}');
        expect(op(Op.INDEX,executable.parameters,0).isFunctionTyped,isTrue);
        expect(op(Op.INDEX,executable.parameters,0).type,isNull);
    }
    test_executable_param_function_typed_return_type_void() {
        let executable : any = this.serializeExecutableText('f(void g()) {}');
        this.checkVoidTypeRef(op(Op.INDEX,executable.parameters,0).type);
    }
    test_executable_param_function_typed_withDefault() {
        let executable : any = this.serializeExecutableText('f([int p(int a2, String b2) = foo]) {}\nint foo(int a, String b) => 0;\n');
        let param : any = op(Op.INDEX,executable.parameters,0);
        expect(param.kind,UnlinkedParamKind.positional);
        expect(param.initializer,isNotNull);
        expect(param.defaultValueCode,'foo');
        this.assertUnlinkedConst(param.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_executable_param_isFinal() {
        let text : string = 'f(x, final y) {}';
        let executable : any = this.serializeExecutableText(text);
        expect(executable.parameters,hasLength(2));
        expect(op(Op.INDEX,executable.parameters,0).name,'x');
        expect(op(Op.INDEX,executable.parameters,0).isFinal,isFalse);
        expect(op(Op.INDEX,executable.parameters,1).name,'y');
        expect(op(Op.INDEX,executable.parameters,1).isFinal,isTrue);
    }
    test_executable_param_kind_named() {
        let executable : any = this.serializeExecutableText('f({x}) {}');
        let param : any = op(Op.INDEX,executable.parameters,0);
        expect(param.kind,UnlinkedParamKind.named);
        expect(param.initializer,isNull);
        expect(param.defaultValueCode,isEmpty);
    }
    test_executable_param_kind_named_withDefault() {
        let executable : any = this.serializeExecutableText('f({x: 42}) {}');
        let param : any = op(Op.INDEX,executable.parameters,0);
        expect(param.kind,UnlinkedParamKind.named);
        expect(param.initializer,isNotNull);
        expect(param.defaultValueCode,'42');
        if (this.includeInformative) {
            this._assertCodeRange(param.codeRange,3,5);
        }
        this.assertUnlinkedConst(param.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(42)});
    }
    test_executable_param_kind_positional() {
        let executable : any = this.serializeExecutableText('f([x]) {}');
        let param : any = op(Op.INDEX,executable.parameters,0);
        expect(param.kind,UnlinkedParamKind.positional);
        expect(param.initializer,isNull);
        expect(param.defaultValueCode,isEmpty);
    }
    test_executable_param_kind_positional_withDefault() {
        let executable : any = this.serializeExecutableText('f([x = 42]) {}');
        let param : any = op(Op.INDEX,executable.parameters,0);
        expect(param.kind,UnlinkedParamKind.positional);
        expect(param.initializer,isNotNull);
        expect(param.defaultValueCode,'42');
        if (this.includeInformative) {
            this._assertCodeRange(param.codeRange,3,6);
        }
        this.assertUnlinkedConst(param.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(42)});
    }
    test_executable_param_kind_required() {
        let executable : any = this.serializeExecutableText('f(x) {}');
        let param : any = op(Op.INDEX,executable.parameters,0);
        expect(param.kind,UnlinkedParamKind.required);
        expect(param.initializer,isNull);
        expect(param.defaultValueCode,isEmpty);
    }
    test_executable_param_name() {
        let text : string = 'f(x) {}';
        let executable : any = this.serializeExecutableText(text);
        expect(executable.parameters,hasLength(1));
        expect(op(Op.INDEX,executable.parameters,0).name,'x');
        if (this.includeInformative) {
            expect(op(Op.INDEX,executable.parameters,0).nameOffset,new core.DartString(text).indexOf('x'));
        }
    }
    test_executable_param_no_flags() {
        let executable : any = this.serializeExecutableText('f(x) {}');
        expect(op(Op.INDEX,executable.parameters,0).isFunctionTyped,isFalse);
        expect(op(Op.INDEX,executable.parameters,0).isInitializingFormal,isFalse);
    }
    test_executable_param_non_function_typed() {
        let executable : any = this.serializeExecutableText('f(g) {}');
        expect(op(Op.INDEX,executable.parameters,0).isFunctionTyped,isFalse);
    }
    test_executable_param_none() {
        let executable : any = this.serializeExecutableText('f() {}');
        expect(executable.parameters,isEmpty);
    }
    test_executable_param_of_constructor_no_covariance() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { C(x); }').executables,0);
        expect(op(Op.INDEX,executable.parameters,0).inheritsCovariantSlot,0);
    }
    test_executable_param_of_method_covariance() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { m(x) {} }').executables,0);
        expect(op(Op.INDEX,executable.parameters,0).inheritsCovariantSlot,isNot(0));
    }
    test_executable_param_of_param_no_covariance() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { m(f(x)) {} }').executables,0);
        expect(op(Op.INDEX,op(Op.INDEX,executable.parameters,0).parameters,0).inheritsCovariantSlot,0);
    }
    test_executable_param_of_setter_covariance() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { void set s(x) {} }').executables,0);
        expect(op(Op.INDEX,executable.parameters,0).inheritsCovariantSlot,isNot(0));
    }
    test_executable_param_of_static_method_no_covariance() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { static m(x) {} }').executables,0);
        expect(op(Op.INDEX,executable.parameters,0).inheritsCovariantSlot,0);
    }
    test_executable_param_of_top_level_function_no_covariance() {
        let executable : any = this.serializeExecutableText('f(x) {}');
        expect(op(Op.INDEX,executable.parameters,0).inheritsCovariantSlot,0);
    }
    test_executable_param_order() {
        let executable : any = this.serializeExecutableText('f(x, y) {}');
        expect(executable.parameters,hasLength(2));
        expect(op(Op.INDEX,executable.parameters,0).name,'x');
        expect(op(Op.INDEX,executable.parameters,1).name,'y');
    }
    test_executable_param_type_explicit() {
        let executable : any = this.serializeExecutableText('f(dynamic x) {}');
        this.checkDynamicTypeRef(op(Op.INDEX,executable.parameters,0).type);
    }
    test_executable_param_type_implicit() {
        let executable : any = this.serializeExecutableText('f(x) {}');
        expect(op(Op.INDEX,executable.parameters,0).type,isNull);
    }
    test_executable_param_type_typedef() {
        let executable : any = this.serializeExecutableText('typedef MyFunction(int p);\nf(MyFunction myFunction) {}\n');
        expect(op(Op.INDEX,executable.parameters,0).isFunctionTyped,isFalse);
        this.checkTypeRef(op(Op.INDEX,executable.parameters,0).type,null,'MyFunction',{
            expectedKind : ReferenceKind.typedef});
    }
    test_executable_return_type() {
        let executable : any = this.serializeExecutableText('int f() => 1;');
        this.checkTypeRef(executable.returnType,'dart:core','int');
    }
    test_executable_return_type_implicit() {
        let executable : any = this.serializeExecutableText('f() {}');
        expect(executable.returnType,isNull);
    }
    test_executable_return_type_void() {
        let executable : any = this.serializeExecutableText('void f() {}');
        this.checkVoidTypeRef(executable.returnType);
    }
    test_executable_setter() {
        let text : string = 'void set f(value) {}';
        let executable : any = this.serializeExecutableText(text,{
            executableName : 'f='});
        expect(executable.kind,UnlinkedExecutableKind.setter);
        expect(executable.returnType,isNotNull);
        expect(executable.isAsynchronous,isFalse);
        expect(executable.isExternal,isFalse);
        expect(executable.isGenerator,isFalse);
        if (this.includeInformative) {
            expect(executable.nameOffset,new core.DartString(text).indexOf('f'));
        }
        expect(this.findVariable('f'),isNull);
        expect(this.findExecutable('f'),isNull);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).kind,ReferenceKind.topLevelPropertyAccessor);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'f=');
    }
    test_executable_setter_external() {
        let executable : any = this.serializeExecutableText('external void set f(value);',{
            executableName : 'f='});
        expect(executable.isExternal,isTrue);
    }
    test_executable_setter_implicit_return() {
        let executable : any = this.serializeExecutableText('set f(value) {}',{
            executableName : 'f='});
        expect(executable.returnType,isNull);
    }
    test_executable_setter_private() {
        this.serializeExecutableText('void set _f(value) {}',{
            executableName : '_f='});
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
    }
    test_executable_setter_type() {
        let executable : any = this.serializeExecutableText('void set f(int value) {}',{
            executableName : 'f='});
        this.checkVoidTypeRef(executable.returnType);
        expect(executable.parameters,hasLength(1));
        expect(op(Op.INDEX,executable.parameters,0).name,'value');
        this.checkTypeRef(op(Op.INDEX,executable.parameters,0).type,'dart:core','int');
    }
    test_executable_static() {
        let executable : any = op(Op.INDEX,this.serializeClassText('class C { static f() {} }').executables,0);
        expect(executable.isStatic,isTrue);
    }
    test_executable_type_param_f_bound_function() {
        let ex : any = this.serializeExecutableText('void f<T, U extends List<T>>() {}');
        let typeArgument : any = op(Op.INDEX,op(Op.INDEX,ex.typeParameters,1).bound.typeArguments,0);
        this.checkParamTypeRef(typeArgument,2);
    }
    test_executable_type_param_f_bound_method() {
        let ex : any = this.serializeMethodText('void f<T, U extends List<T>>() {}');
        let typeArgument : any = op(Op.INDEX,op(Op.INDEX,ex.typeParameters,1).bound.typeArguments,0);
        this.checkParamTypeRef(typeArgument,2);
    }
    test_executable_type_param_f_bound_self_ref_function() {
        let ex : any = this.serializeExecutableText('void f<T, U extends List<U>>() {}');
        let typeArgument : any = op(Op.INDEX,op(Op.INDEX,ex.typeParameters,1).bound.typeArguments,0);
        this.checkParamTypeRef(typeArgument,1);
    }
    test_executable_type_param_f_bound_self_ref_method() {
        let ex : any = this.serializeMethodText('void f<T, U extends List<U>>() {}');
        let typeArgument : any = op(Op.INDEX,op(Op.INDEX,ex.typeParameters,1).bound.typeArguments,0);
        this.checkParamTypeRef(typeArgument,1);
    }
    test_executable_type_param_in_parameter_function() {
        let ex : any = this.serializeExecutableText('void f<T>(T t) {}');
        this.checkParamTypeRef(op(Op.INDEX,ex.parameters,0).type,1);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,1);
    }
    test_executable_type_param_in_parameter_method() {
        let ex : any = this.serializeMethodText('void f<T>(T t) {}');
        this.checkParamTypeRef(op(Op.INDEX,ex.parameters,0).type,1);
    }
    test_executable_type_param_in_return_type_function() {
        let ex : any = this.serializeExecutableText('T f<T>() => null;');
        this.checkParamTypeRef(ex.returnType,1);
    }
    test_executable_type_param_in_return_type_method() {
        let ex : any = this.serializeMethodText('T f<T>() => null;');
        this.checkParamTypeRef(ex.returnType,1);
    }
    test_export_class() {
        this.addNamedSource('/a.dart','class C {}');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'C',ReferenceKind.classOrEnum);
    }
    test_export_class_alias() {
        this.addNamedSource('/a.dart','class C extends _D with _E {} class _D {} class _E {}');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'C',ReferenceKind.classOrEnum);
    }
    test_export_configurations() {
        this.addNamedSource('/foo.dart','class A {}');
        this.addNamedSource('/foo_io.dart','class A {}');
        this.addNamedSource('/foo_html.dart','class A {}');
        let libraryText : string = 'export \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.flavor == \'html\') \'foo_html.dart\';\n\nclass B extends A {}\n';
        this.serializeLibraryText(libraryText);
        let exp : any = op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0);
        expect(exp.configurations,hasLength(2));
        {
            let configuration : any = op(Op.INDEX,exp.configurations,0);
            expect(configuration.name,'dart.library.io');
            expect(configuration.value,'true');
            expect(configuration.uri,'foo_io.dart');
        }
        {
            let configuration : any = op(Op.INDEX,exp.configurations,1);
            expect(configuration.name,'dart.flavor');
            expect(configuration.value,'html');
            expect(configuration.uri,'foo_html.dart');
        }
    }
    test_export_dependency() {
        this.serializeLibraryText('export "dart:async";');
        expect(this.unlinkedUnits[0].exports,hasLength(1));
        this.checkDependency(op(Op.INDEX,this.linked.exportDependencies,0),'dart:async');
    }
    test_export_enum() {
        this.addNamedSource('/a.dart','enum E { v }');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'E',ReferenceKind.classOrEnum);
    }
    test_export_from_part() {
        this.addNamedSource('/a.dart','library foo; part "b.dart";');
        this.addNamedSource('/b.dart','part of foo; f() {}');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'f',ReferenceKind.topLevelFunction,{
            expectedTargetUnit : 1});
    }
    test_export_function() {
        this.addNamedSource('/a.dart','f() {}');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'f',ReferenceKind.topLevelFunction);
    }
    test_export_getter() {
        this.addNamedSource('/a.dart','get f => null');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'f',ReferenceKind.topLevelPropertyAccessor);
    }
    test_export_hide() {
        this.addNamedSource('/a.dart','f() {} g() {}');
        this.serializeLibraryText('export "a.dart" hide g;');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'f',ReferenceKind.topLevelFunction);
    }
    test_export_hide_order() {
        this.serializeLibraryText('export "dart:async" hide Future, Stream;');
        expect(this.unlinkedUnits[0].publicNamespace.exports,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,hasLength(1));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).shows,isEmpty);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).hides,hasLength(2));
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).hides,0),'Future');
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).hides,1),'Stream');
        if (this.includeInformative) {
            expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).offset,0);
            expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).end,0);
        }
        expect(this.linked.exportNames,isNotEmpty);
    }
    test_export_missing() {
        this.allowMissingFiles = true;
        this.serializeLibraryText('export "foo.dart";',{
            allowErrors : true});
        expect(this.unlinkedUnits[0].imports,hasLength(1));
        this.checkDependency(op(Op.INDEX,this.linked.exportDependencies,0),absUri('/foo.dart'));
    }
    test_export_names_excludes_names_from_library() {
        this.addNamedSource('/a.dart','part of my.lib; int y; int _y;');
        this.serializeLibraryText('library my.lib; part "a.dart"; int x; int _x;');
        expect(this.linked.exportNames,isEmpty);
    }
    test_export_no_combinators() {
        this.serializeLibraryText('export "dart:async";');
        expect(this.unlinkedUnits[0].publicNamespace.exports,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,isEmpty);
    }
    test_export_not_shadowed_by_prefix() {
        this.addNamedSource('/a.dart','f() {}');
        this.serializeLibraryText('export "a.dart"; import "dart:core" as f; f.int _x;');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'f',ReferenceKind.topLevelFunction);
    }
    test_export_offset() {
        let libraryText : string = '    export "dart:async";';
        this.serializeLibraryText(libraryText);
        expect(op(Op.INDEX,this.unlinkedUnits[0].exports,0).uriOffset,new core.DartString(libraryText).indexOf('"dart:async"'));
        expect(op(Op.INDEX,this.unlinkedUnits[0].exports,0).uriEnd,new core.DartString(libraryText).indexOf(';'));
        expect(op(Op.INDEX,this.unlinkedUnits[0].exports,0).offset,new core.DartString(libraryText).indexOf('export'));
    }
    test_export_private() {
        this.addNamedSource('/a.dart','_f() {}');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,isEmpty);
    }
    test_export_setter() {
        this.addNamedSource('/a.dart','void set f(value) {}');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'f=',ReferenceKind.topLevelPropertyAccessor);
    }
    test_export_shadowed() {
        this.addNamedSource('/a.dart','f() {}');
        this.serializeLibraryText('export "a.dart"; f() {}');
        expect(this.linked.exportNames,isEmpty);
    }
    test_export_shadowed_variable() {
        this.addNamedSource('/a.dart','var v;');
        this.serializeLibraryText('export "a.dart"; var v;');
        expect(this.linked.exportNames,isEmpty);
    }
    test_export_shadowed_variable_const() {
        this.addNamedSource('/a.dart','var v;');
        this.serializeLibraryText('export "a.dart"; const v = 0;');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'v=',ReferenceKind.topLevelPropertyAccessor);
    }
    test_export_shadowed_variable_final() {
        this.addNamedSource('/a.dart','var v;');
        this.serializeLibraryText('export "a.dart"; final v = 0;');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'v=',ReferenceKind.topLevelPropertyAccessor);
    }
    test_export_show() {
        this.addNamedSource('/a.dart','f() {} g() {}');
        this.serializeLibraryText('export "a.dart" show f;');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'f',ReferenceKind.topLevelFunction);
    }
    test_export_show_order() {
        let libraryText : string = 'export "dart:async" show Future, Stream;';
        this.serializeLibraryText(libraryText);
        expect(this.unlinkedUnits[0].publicNamespace.exports,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,hasLength(1));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).shows,hasLength(2));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).hides,isEmpty);
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).shows,0),'Future');
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).shows,1),'Stream');
        if (this.includeInformative) {
            expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).offset,new core.DartString(libraryText).indexOf('show'));
            expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).combinators,0).end,new core.DartString(libraryText).indexOf(';'));
        }
    }
    test_export_typedef() {
        this.addNamedSource('/a.dart','typedef F();');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'F',ReferenceKind.typedef);
    }
    test_export_typedef_genericFunction() {
        this.addNamedSource('/a.dart','typedef F<S> = S Function<T>(T x);');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(1));
        this.checkExportName(op(Op.INDEX,this.linked.exportNames,0),absUri('/a.dart'),'F',ReferenceKind.genericFunctionTypedef);
    }
    test_export_uri() {
        this.addNamedSource('/a.dart','library my.lib;');
        let uriString : string = '"a.dart"';
        let libraryText : string = `export ${uriString};`;
        this.serializeLibraryText(libraryText);
        let unlinkedExports = this.unlinkedUnits[0].publicNamespace.exports;
        expect(unlinkedExports,hasLength(1));
        expect(op(Op.INDEX,unlinkedExports,0).uri,'a.dart');
        expect(op(Op.INDEX,unlinkedExports,0).configurations,isEmpty);
    }
    test_export_uri_invalid() {
        let uriString : string = '[invalid uri]';
        let libraryText : string = `export "${uriString}";`;
        this.serializeLibraryText(libraryText);
        expect(this.unlinkedUnits[0].publicNamespace.exports,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).uri,uriString);
    }
    test_export_uri_nullStringValue() {
        let libraryText : string = 'export "${\'a\'}.dart";\n';
        this.serializeLibraryText(libraryText);
        let unlinkedExports = this.unlinkedUnits[0].publicNamespace.exports;
        expect(unlinkedExports,hasLength(1));
        expect(op(Op.INDEX,unlinkedExports,0).uri,'');
        expect(op(Op.INDEX,unlinkedExports,0).configurations,isEmpty);
    }
    test_export_variable() {
        this.addNamedSource('/a.dart','var v;');
        this.serializeLibraryText('export "a.dart";');
        expect(this.linked.exportNames,hasLength(2));
        let getter : any = this.linked.exportNames.firstWhere((e : any) =>  {
            return op(Op.EQUALS,e.name,'v');
        });
        expect(getter,isNotNull);
        this.checkExportName(getter,absUri('/a.dart'),'v',ReferenceKind.topLevelPropertyAccessor);
        let setter : any = this.linked.exportNames.firstWhere((e : any) =>  {
            return op(Op.EQUALS,e.name,'v=');
        });
        expect(setter,isNotNull);
        this.checkExportName(setter,absUri('/a.dart'),'v=',ReferenceKind.topLevelPropertyAccessor);
    }
    test_expr_assignOperator_assign() {
        this._assertAssignmentOperator('(a = 1 + 2) + 3',UnlinkedExprAssignOperator.assign);
    }
    test_expr_assignOperator_bitAnd() {
        this._assertAssignmentOperator('(a &= 1 + 2) + 3',UnlinkedExprAssignOperator.bitAnd);
    }
    test_expr_assignOperator_bitOr() {
        this._assertAssignmentOperator('(a |= 1 + 2) + 3',UnlinkedExprAssignOperator.bitOr);
    }
    test_expr_assignOperator_bitXor() {
        this._assertAssignmentOperator('(a ^= 1 + 2) + 3',UnlinkedExprAssignOperator.bitXor);
    }
    test_expr_assignOperator_divide() {
        this._assertAssignmentOperator('(a /= 1 + 2) + 3',UnlinkedExprAssignOperator.divide);
    }
    test_expr_assignOperator_floorDivide() {
        this._assertAssignmentOperator('(a ~/= 1 + 2) + 3',UnlinkedExprAssignOperator.floorDivide);
    }
    test_expr_assignOperator_ifNull() {
        this._assertAssignmentOperator('(a ??= 1 + 2) + 3',UnlinkedExprAssignOperator.ifNull);
    }
    test_expr_assignOperator_minus() {
        this._assertAssignmentOperator('(a -= 1 + 2) + 3',UnlinkedExprAssignOperator.minus);
    }
    test_expr_assignOperator_modulo() {
        this._assertAssignmentOperator('(a %= 1 + 2) + 3',UnlinkedExprAssignOperator.modulo);
    }
    test_expr_assignOperator_multiply() {
        this._assertAssignmentOperator('(a *= 1 + 2) + 3',UnlinkedExprAssignOperator.multiply);
    }
    test_expr_assignOperator_plus() {
        this._assertAssignmentOperator('(a += 1 + 2) + 3',UnlinkedExprAssignOperator.plus);
    }
    test_expr_assignOperator_shiftLeft() {
        this._assertAssignmentOperator('(a <<= 1 + 2) + 3',UnlinkedExprAssignOperator.shiftLeft);
    }
    test_expr_assignOperator_shiftRight() {
        this._assertAssignmentOperator('(a >>= 1 + 2) + 3',UnlinkedExprAssignOperator.shiftRight);
    }
    test_expr_assignToIndex_ofFieldSequence() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class A {\n  B b;\n}\nclass B {\n  C c;\n}\nclass C {\n  List<int> f = <int>[0, 1, 2];\n}\nA a = new A();\nfinal v = (a.b.c.f[1] = 5);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushReference,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.assignToIndex),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(5,1),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'f',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.unresolved,'c'),new _PrefixExpectation(ReferenceKind.unresolved,'b'),new _PrefixExpectation(ReferenceKind.topLevelPropertyAccessor,'a'))});
            })});
    }
    test_expr_assignToIndex_ofIndexExpression() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class A {\n List<B> b;\n}\nclass B {\n  List<C> c;\n}\nclass C {\n  List<int> f = <int>[0, 1, 2];\n}\nA a = new A();\nfinal v = (a.b[1].c[2].f[3] = 5);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushReference,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.extractIndex,UnlinkedExprOperation.extractProperty,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.extractIndex,UnlinkedExprOperation.extractProperty,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.assignToIndex),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(5,1,2,3),strings : new core.DartList.literal('c','f'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'b',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.topLevelPropertyAccessor,'a'))});
            })});
    }
    test_expr_assignToIndex_ofTopLevelVariable() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('List<int> a = <int>[0, 1, 2];\nfinal v = (a[1] = 5);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushReference,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.assignToIndex),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(5,1),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_expr_assignToProperty_ofInstanceCreation() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class C {\n  int f;\n}\nfinal v = (new C().f = 5);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.invokeConstructor,UnlinkedExprOperation.assignToProperty),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(5,0,0),strings : new core.DartList.literal('f'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_assignToRef_classStaticField() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class C {\n  static int f;\n}\nfinal v = (C.f = 1);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.assignToRef),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(1),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'f',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_expr_assignToRef_fieldSequence() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class A {\n  B b;\n}\nclass B {\n  C c;\n}\nclass C {\n  int f;\n}\nA a = new A();\nfinal v = (a.b.c.f = 1);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.assignToRef),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(1),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'f',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.unresolved,'c'),new _PrefixExpectation(ReferenceKind.unresolved,'b'),new _PrefixExpectation(ReferenceKind.topLevelPropertyAccessor,'a'))});
            })});
    }
    test_expr_assignToRef_postfixDecrement() {
        this._assertRefPrefixPostfixIncrementDecrement('a-- + 2',UnlinkedExprAssignOperator.postfixDecrement);
    }
    test_expr_assignToRef_postfixIncrement() {
        this._assertRefPrefixPostfixIncrementDecrement('a++ + 2',UnlinkedExprAssignOperator.postfixIncrement);
    }
    test_expr_assignToRef_prefixDecrement() {
        this._assertRefPrefixPostfixIncrementDecrement('--a + 2',UnlinkedExprAssignOperator.prefixDecrement);
    }
    test_expr_assignToRef_prefixIncrement() {
        this._assertRefPrefixPostfixIncrementDecrement('++a + 2',UnlinkedExprAssignOperator.prefixIncrement);
    }
    test_expr_assignToRef_topLevelVariable() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('int a = 0;\nfinal v = (a = 1);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.assignToRef),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(1),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_expr_assignToRef_topLevelVariable_imported() {
        if (this.skipNonConstInitializers) {
            return;
        }
        this.addNamedSource('/a.dart','int a = 0;\n');
        let variable : any = this.serializeVariableText('import \'a.dart\';\nfinal v = (a = 1);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.assignToRef),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(1),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_expr_assignToRef_topLevelVariable_imported_withPrefix() {
        if (this.skipNonConstInitializers) {
            return;
        }
        this.addNamedSource('/a.dart','int a = 0;\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nfinal v = (p.a = 1);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.assignToRef),assignmentOperators : new core.DartList.literal((UnlinkedExprAssignOperator.assign)),ints : new core.DartList.literal(1),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor,expectedPrefix : 'p'});
            })});
    }
    test_expr_cascadeSection_assignToIndex() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class C {\n  List<int> items;\n}\nfinal C c = new C();\nfinal v = c.items..[1] = 2;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),assignmentOperators : new core.DartList.literal(),ints : new core.DartList.literal(),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'items',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.topLevelPropertyAccessor,'c'))});
            })});
    }
    test_expr_cascadeSection_assignToProperty() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class C {\n  int f1 = 0;\n  int f2 = 0;\n}\nfinal v = new C()..f1 = 1..f2 += 2;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),assignmentOperators : new core.DartList.literal(),ints : new core.DartList.literal(0,0),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_cascadeSection_embedded() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class A {\n  int fa1;\n  B b;\n  int fa2;\n}\nclass B {\n  int fb;\n}\nfinal v = new A()\n  ..fa1 = 1\n  ..b = (new B()..fb = 2)\n  ..fa2 = 3;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),assignmentOperators : new core.DartList.literal(),ints : new core.DartList.literal(0,0),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'A',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_cascadeSection_invokeMethod() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class A {\n  int m(int _) => 0;\n}\nfinal A a = new A();\nfinal v = a..m(5).abs()..m(6);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),ints : new core.DartList.literal(),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_expr_extractIndex_ofClassField() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class C {\n  List<int> get items => null;\n}\nfinal v = new C().items[5];\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor,UnlinkedExprOperation.extractProperty,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.extractIndex),ints : new core.DartList.literal(0,0,5),strings : new core.DartList.literal('items'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_extractProperty_ofInvokeConstructor() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class C {\n  int f = 0;\n}\nfinal v = new C().f;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor,UnlinkedExprOperation.extractProperty),ints : new core.DartList.literal(0,0),strings : new core.DartList.literal('f'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_functionExpression_asArgument() {
        let variable : any = this.serializeVariableText('final v = foo(5, () => 42);\nfoo(a, b) {}\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(0,0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_expr_functionExpression_asArgument_multiple() {
        let variable : any = this.serializeVariableText('final v = foo(5, () => 42, () => 43);\nfoo(a, b, c) {}\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(0,0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'foo',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_expr_functionExpression_withBlockBody() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = () { return 42; };\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushLocalFunctionReference),ints : new core.DartList.literal(0,0)});
    }
    test_expr_functionExpression_withExpressionBody() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = () => 42;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushLocalFunctionReference),ints : new core.DartList.literal(0,0)});
    }
    test_expr_functionExpressionInvocation_withBlockBody() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = ((a, b) {return 42;})(1, 2);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushNull)});
    }
    test_expr_functionExpressionInvocation_withExpressionBody() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = ((a, b) => 42)(1, 2);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushNull)});
    }
    test_expr_inClosure() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = () => 1;');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(1)});
    }
    test_expr_inClosure_noTypeInferenceNeeded() {
        let variable : any = this.serializeVariableText('Object v = () => 1;');
        expect(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,isNull);
    }
    test_expr_inClosure_refersToOuterParam() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = (x) => (y) => x;');
        this.assertUnlinkedConst(op(Op.INDEX,op(Op.INDEX,variable.initializer.localFunctions,0).localFunctions,0).bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter),strings : new core.DartList.literal('x')});
    }
    test_expr_inClosure_refersToParam() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = (x) => x;');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter),strings : new core.DartList.literal('x')});
    }
    test_expr_inClosure_refersToParam_methodCall() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = (x) => x.f();');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.invokeMethod),strings : new core.DartList.literal('x','f'),ints : new core.DartList.literal(0,0,0)});
    }
    test_expr_inClosure_refersToParam_methodCall_prefixed() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = (x) => x.y.f();');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.extractProperty,UnlinkedExprOperation.invokeMethod),strings : new core.DartList.literal('x','y','f'),ints : new core.DartList.literal(0,0,0)});
    }
    test_expr_inClosure_refersToParam_outOfScope() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var x; var v = (b) => (b ? (x) => x : x);');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.pushLocalFunctionReference,UnlinkedExprOperation.pushReference,UnlinkedExprOperation.conditional),strings : new core.DartList.literal('b'),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'x',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_expr_inClosure_refersToParam_prefixedIdentifier() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = (x) => x.y;');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.extractProperty),strings : new core.DartList.literal('x','y')});
    }
    test_expr_inClosure_refersToParam_prefixedIdentifier_assign() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = (x) => x.y = null;');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushNull,UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.assignToProperty),strings : new core.DartList.literal('x','y'),assignmentOperators : new core.DartList.literal(UnlinkedExprAssignOperator.assign)});
    }
    test_expr_inClosure_refersToParam_prefixedPrefixedIdentifier() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = (x) => x.y.z;');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.extractProperty,UnlinkedExprOperation.extractProperty),strings : new core.DartList.literal('x','y','z')});
    }
    test_expr_inClosure_refersToParam_prefixedPrefixedIdentifier_assign() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('var v = (x) => x.y.z = null;');
        this.assertUnlinkedConst(op(Op.INDEX,variable.initializer.localFunctions,0).bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushNull,UnlinkedExprOperation.pushParameter,UnlinkedExprOperation.extractProperty,UnlinkedExprOperation.assignToProperty),strings : new core.DartList.literal('x','y','z'),assignmentOperators : new core.DartList.literal(UnlinkedExprAssignOperator.assign)});
    }
    test_expr_invalid_typeParameter_asPrefix() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let c = this.serializeClassText('class C<T> {\n  final f = T.k;\n}\n');
        this.assertUnlinkedConst(op(Op.INDEX,c.fields,0).initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal()});
    }
    test_expr_invokeMethod_instance() {
        let variable : any = this.serializeVariableText('class C {\n  int m(a, {b, c}) => 42;\n}\nfinal v = new C().m(1, b: 2, c: 3);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor,UnlinkedExprOperation.invokeMethod),ints : new core.DartList.literal(0,0,0,0,0),strings : new core.DartList.literal('m'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_invokeMethod_withTypeParameters() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class C {\n  f<T, U>() => null;\n}\nfinal v = new C().f<int, String>();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor,UnlinkedExprOperation.invokeMethod),ints : new core.DartList.literal(0,0,0,0,2),strings : new core.DartList.literal('f'),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'C');
            },(r : any) =>  {
                return this.checkTypeRef(r,'dart:core','int');
            },(r : any) =>  {
                return this.checkTypeRef(r,'dart:core','String');
            })});
    }
    test_expr_invokeMethodRef_instance() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('class A {\n  B b;\n}\nclass B {\n  C c;\n}\nclass C {\n  int m(int a, int b) => a + b;\n}\nA a = new A();\nfinal v = a.b.c.m(10, 20);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(0,0,0),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'m',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.unresolved,'c'),new _PrefixExpectation(ReferenceKind.unresolved,'b'),new _PrefixExpectation(ReferenceKind.topLevelPropertyAccessor,'a'))});
            })});
    }
    test_expr_invokeMethodRef_static_importedWithPrefix() {
        if (this.skipNonConstInitializers) {
            return;
        }
        this.addNamedSource('/a.dart','class C {\n  static int m() => 42;\n}\n');
        let variable : any = this.serializeVariableText('import \'a.dart\' as p;\nfinal v = p.C.m();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(0,0,0),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'m',{
                    expectedKind : ReferenceKind.method,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C',{
                        absoluteUri : absUri('/a.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'p'))});
            })});
    }
    test_expr_invokeMethodRef_with_reference_arg() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('f(x) => null;\nfinal u = null;\nfinal v = f(u);\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(0,0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'f',{
                    expectedKind : ReferenceKind.topLevelFunction});
            })});
    }
    test_expr_invokeMethodRef_withTypeParameters() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('f<T, U>() => null;\nfinal v = f<int, String>();\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.invokeMethodRef),ints : new core.DartList.literal(0,0,2),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'f',{
                    expectedKind : ReferenceKind.topLevelFunction,numTypeParameters : 2});
            },(r : any) =>  {
                return this.checkTypeRef(r,'dart:core','int');
            },(r : any) =>  {
                return this.checkTypeRef(r,'dart:core','String');
            })});
    }
    test_expr_makeTypedList() {
        let variable : any = this.serializeVariableText('var v = <int>[11, 22, 33];');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.makeTypedList),ints : new core.DartList.literal(0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,'dart:core','int',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_makeTypedMap() {
        let variable : any = this.serializeVariableText('var v = <int, String>{11: "aaa", 22: "bbb", 33: "ccc"};');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.makeTypedMap),ints : new core.DartList.literal(0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,'dart:core','int',{
                    expectedKind : ReferenceKind.classOrEnum});
            },(r : any) =>  {
                return this.checkTypeRef(r,'dart:core','String',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_makeUntypedList() {
        let variable : any = this.serializeVariableText('var v = [11, 22, 33];');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.makeUntypedList),ints : new core.DartList.literal(11,22,33,3)});
    }
    test_expr_makeUntypedMap() {
        let variable : any = this.serializeVariableText('var v = {11: "aaa", 22: "bbb", 33: "ccc"};');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushString,UnlinkedExprOperation.makeUntypedMap),ints : new core.DartList.literal(11,22,33,3),strings : new core.DartList.literal('aaa','bbb','ccc')});
    }
    test_expr_super() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = super;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushSuper)});
    }
    test_expr_this() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = this;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushThis)});
    }
    test_expr_throwException() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = throw 1 + 2;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.add,UnlinkedExprOperation.throwException),ints : new core.DartList.literal(1,2)});
    }
    test_expr_typeCast() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = 42 as num;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.typeCast),ints : new core.DartList.literal(42),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,'dart:core','num',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_expr_typeCheck() {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = 42 is num;\n');
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.typeCheck),ints : new core.DartList.literal(42),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,'dart:core','num',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_field() {
        let cls : any = this.serializeClassText('class C { int i; }');
        let variable : any = this.findVariable('i',{
            variables : cls.fields});
        expect(variable,isNotNull);
        expect(variable.isConst,isFalse);
        expect(variable.isStatic,isFalse);
        expect(variable.isFinal,isFalse);
        expect(variable.initializer,isNull);
        expect(variable.inheritsCovariantSlot,isNot(0));
        expect(this.findExecutable('i',{
            executables : cls.executables}),isNull);
        expect(this.findExecutable('i=',{
            executables : cls.executables}),isNull);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'C');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,isEmpty);
    }
    test_field_const() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C { static const int i = 0; }').fields,0);
        expect(variable.isConst,isTrue);
        expect(variable.inheritsCovariantSlot,0);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(0)});
    }
    test_field_documented() {
        if (!this.includeInformative) return;
        let text : string = 'class C {\n  /**\n   * Docs\n   */\n  var v;\n}';
        let variable : any = op(Op.INDEX,this.serializeClassText(text).fields,0);
        expect(variable.documentationComment,isNotNull);
        this.checkDocumentationComment(variable.documentationComment,text);
    }
    test_field_final() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C { final int i = 0; }').fields,0);
        expect(variable.isFinal,isTrue);
        expect(variable.inheritsCovariantSlot,0);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushInt),ints : new core.DartList.literal(0)});
    }
    test_field_final_notConstExpr() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C {\n  final int f = 1 + m();\n  static int m() => 42;\n}').fields,0);
        expect(variable.isFinal,isTrue);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.invokeMethodRef,UnlinkedExprOperation.add),ints : new core.DartList.literal(1,0,0,0),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'m',{
                    expectedKind : ReferenceKind.method,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'C'))});
            })});
    }
    test_field_final_typeParameter() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C<T> {\n  final f = <T>[];\n}').fields,0);
        expect(variable.isFinal,isTrue);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            operators : new core.DartList.literal(UnlinkedExprOperation.makeTypedList),ints : new core.DartList.literal(0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkParamTypeRef(r,1);
            })});
    }
    test_field_formal_param_inferred_type_explicit() {
        let cls : any = this.serializeClassText('class C extends D { var v; C(int this.v); }' + ' abstract class D { num get v; }',{
            className : 'C'});
        this.checkInferredTypeSlot(op(Op.INDEX,cls.fields,0).inferredTypeSlot,'dart:core','num');
        expect(op(Op.INDEX,cls.executables,0).kind,UnlinkedExecutableKind.constructor);
        expect(op(Op.INDEX,op(Op.INDEX,cls.executables,0).parameters,0).inferredTypeSlot,0);
    }
    test_field_formal_param_inferred_type_implicit() {
        let cls : any = this.serializeClassText('class C extends D { var v; C(this.v); }' + ' abstract class D { int get v; }',{
            className : 'C'});
        this.checkInferredTypeSlot(op(Op.INDEX,cls.fields,0).inferredTypeSlot,'dart:core','int');
        expect(op(Op.INDEX,cls.executables,0).kind,UnlinkedExecutableKind.constructor);
        expect(op(Op.INDEX,op(Op.INDEX,cls.executables,0).parameters,0).inferredTypeSlot,0);
    }
    test_field_inferred_type_nonstatic_explicit_initialized() {
        let v : any = op(Op.INDEX,this.serializeClassText('class C { num v = 0; }').fields,0);
        expect(v.inferredTypeSlot,0);
    }
    test_field_inferred_type_nonstatic_explicit_uninitialized() {
        let v : any = op(Op.INDEX,this.serializeClassText('class C extends D { num v; } abstract class D { int get v; }',{
            className : 'C',allowErrors : true}).fields,0);
        expect(v.inferredTypeSlot,0);
    }
    test_field_inferred_type_nonstatic_implicit_initialized() {
        let v : any = op(Op.INDEX,this.serializeClassText('class C { var v = 0; }').fields,0);
        this.checkInferredTypeSlot(v.inferredTypeSlot,'dart:core','int');
    }
    test_field_inferred_type_nonstatic_implicit_uninitialized() {
        let v : any = op(Op.INDEX,this.serializeClassText('class C extends D { var v; } abstract class D { int get v; }',{
            className : 'C'}).fields,0);
        this.checkInferredTypeSlot(v.inferredTypeSlot,'dart:core','int');
    }
    test_field_inferred_type_static_explicit_initialized() {
        let v : any = op(Op.INDEX,this.serializeClassText('class C { static int v = 0; }').fields,0);
        expect(v.inferredTypeSlot,0);
    }
    test_field_inferred_type_static_implicit_initialized() {
        let v : any = op(Op.INDEX,this.serializeClassText('class C { static var v = 0; }').fields,0);
        this.checkInferredTypeSlot(v.inferredTypeSlot,'dart:core','int');
    }
    test_field_inferred_type_static_implicit_uninitialized() {
        let v : any = op(Op.INDEX,this.serializeClassText('class C { static var v; }').fields,0);
        expect(v.inferredTypeSlot,0);
    }
    test_field_static() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C { static int i; }').fields,0);
        expect(variable.isStatic,isTrue);
        expect(variable.initializer,isNull);
        expect(variable.inheritsCovariantSlot,0);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'C');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,hasLength(1));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).name,'i');
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).kind,ReferenceKind.propertyAccessor);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).numTypeParameters,0);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).members,0).members,isEmpty);
    }
    test_field_static_final() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C { static final int i = 0; }').fields,0);
        expect(variable.isStatic,isTrue);
        expect(variable.isFinal,isTrue);
        expect(variable.initializer.bodyExpr,isNull);
        expect(variable.inheritsCovariantSlot,0);
    }
    test_field_static_final_untyped() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C { static final x = 0; }').fields,0);
        expect(variable.initializer.bodyExpr,isNotNull);
        expect(variable.inheritsCovariantSlot,0);
    }
    test_field_untyped() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C { var x = 0; }').fields,0);
        expect(variable.initializer.bodyExpr,isNotNull);
        expect(variable.inheritsCovariantSlot,isNot(0));
    }
    test_fully_linked_references_follow_other_references() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        this.serializeLibraryText('final x = 0; String y;');
        this.checkLinkedTypeSlot(op(Op.INDEX,this.unlinkedUnits[0].variables,0).inferredTypeSlot,'dart:core','int');
        this.checkTypeRef(op(Op.INDEX,this.unlinkedUnits[0].variables,1).type,'dart:core','String');
        let propagatedType : any = this.getTypeRefForSlot(op(Op.INDEX,this.unlinkedUnits[0].variables,0).inferredTypeSlot);
        expect(op(Op.INDEX,this.unlinkedUnits[0].variables,1).type.reference,lessThan(propagatedType.reference));
    }
    test_function_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nf() {}';
        let executable : any = this.serializeExecutableText(text);
        expect(executable.documentationComment,isNotNull);
        this.checkDocumentationComment(executable.documentationComment,text);
    }
    test_function_inferred_type_implicit_param() {
        let f : any = this.serializeExecutableText('void f(value) {}');
        expect(op(Op.INDEX,f.parameters,0).inferredTypeSlot,0);
    }
    test_function_inferred_type_implicit_return() {
        let f : any = this.serializeExecutableText('f() => null;');
        expect(f.inferredReturnTypeSlot,0);
    }
    test_generic_method_in_generic_class() {
        let cls : any = this.serializeClassText('class C<T, U> { void m<V, W>(T t, U u, V v, W w) {} }');
        let params : core.DartList<any> = op(Op.INDEX,cls.executables,0).parameters;
        this.checkParamTypeRef(params[0].type,4);
        this.checkParamTypeRef(params[1].type,3);
        this.checkParamTypeRef(params[2].type,2);
        this.checkParamTypeRef(params[3].type,1);
    }
    test_getter_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nget f => null;';
        let executable : any = this.serializeExecutableText(text);
        expect(executable.documentationComment,isNotNull);
        this.checkDocumentationComment(executable.documentationComment,text);
    }
    test_getter_inferred_type_nonstatic_explicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { num get f => null; }' + ' abstract class D { int get f; }',{
            className : 'C',allowErrors : true}).executables,0);
        expect(f.inferredReturnTypeSlot,0);
    }
    test_getter_inferred_type_nonstatic_implicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { get f => null; } abstract class D { int get f; }',{
            className : 'C'}).executables,0);
        this.checkInferredTypeSlot(f.inferredReturnTypeSlot,'dart:core','int');
    }
    test_getter_inferred_type_static_implicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { static get f => null; }' + ' class D { static int get f => null; }',{
            className : 'C'}).executables,0);
        expect(f.inferredReturnTypeSlot,0);
    }
    test_implicit_dependencies_follow_other_dependencies() {
        if (this.skipFullyLinkedData) {
            return;
        }
        this.addNamedSource('/a.dart','import "b.dart"; class C {} D f() => null;');
        this.addNamedSource('/b.dart','class D {}');
        this.serializeLibraryText('import "a.dart"; final x = f(); C y;');
        let aDep : number = this.checkHasDependency('a.dart',{
            fullyLinked : false});
        let bDep : number = this.checkHasDependency('b.dart',{
            fullyLinked : true});
        expect(aDep,lessThan(bDep));
    }
    test_import_configurations() {
        this.addNamedSource('/foo.dart','bar() {}');
        this.addNamedSource('/foo_io.dart','bar() {}');
        this.addNamedSource('/foo_html.dart','bar() {}');
        let libraryText : string = 'import \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.flavor == \'html\') \'foo_html.dart\';\n';
        this.serializeLibraryText(libraryText);
        let imp : any = op(Op.INDEX,this.unlinkedUnits[0].imports,0);
        expect(imp.configurations,hasLength(2));
        {
            let configuration : any = op(Op.INDEX,imp.configurations,0);
            expect(configuration.name,'dart.library.io');
            expect(configuration.value,'true');
            expect(configuration.uri,'foo_io.dart');
        }
        {
            let configuration : any = op(Op.INDEX,imp.configurations,1);
            expect(configuration.name,'dart.flavor');
            expect(configuration.value,'html');
            expect(configuration.uri,'foo_html.dart');
        }
    }
    test_import_deferred() {
        this.serializeLibraryText('import "dart:async" deferred as a; main() { print(a.Future); }');
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).isDeferred,isTrue);
    }
    test_import_dependency() {
        this.serializeLibraryText('import "dart:async"; Future x;');
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        this.checkDependency(op(Op.INDEX,this.linked.importDependencies,0),'dart:async');
    }
    test_import_explicit() {
        this.serializeLibraryText('import "dart:core"; int i;');
        expect(this.unlinkedUnits[0].imports,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).isImplicit,isFalse);
    }
    test_import_hide_order() {
        this.serializeLibraryText('import "dart:async" hide Future, Stream; Completer c;');
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,hasLength(1));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).shows,isEmpty);
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).hides,hasLength(2));
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).hides,0),'Future');
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).hides,1),'Stream');
        if (this.includeInformative) {
            expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).offset,0);
            expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).end,0);
        }
    }
    test_import_implicit() {
        this.serializeLibraryText('');
        expect(this.unlinkedUnits[0].imports,hasLength(1));
        this.checkDependency(op(Op.INDEX,this.linked.importDependencies,0),'dart:core');
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uri,isEmpty);
        if (this.includeInformative) {
            expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uriOffset,0);
            expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uriEnd,0);
        }
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).prefixReference,0);
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,isEmpty);
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).isImplicit,isTrue);
    }
    test_import_missing() {
        this.allowMissingFiles = true;
        this.serializeLibraryText('import "foo.dart";',{
            allowErrors : true});
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        this.checkDependency(op(Op.INDEX,this.linked.importDependencies,0),absUri('/foo.dart'));
    }
    test_import_no_combinators() {
        this.serializeLibraryText('import "dart:async"; Future x;');
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,isEmpty);
    }
    test_import_no_flags() {
        this.serializeLibraryText('import "dart:async"; Future x;');
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).isImplicit,isFalse);
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).isDeferred,isFalse);
    }
    test_import_non_deferred() {
        this.serializeLibraryText('import "dart:async" as a; main() { print(a.Future); }');
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).isDeferred,isFalse);
    }
    test_import_of_file_with_missing_part() {
        this.allowMissingFiles = true;
        this.addNamedSource('/foo.dart','part "bar.dart"; class C {}');
        this.serializeLibraryText('import "foo.dart"; C x;');
        this.checkTypeRef(this.findVariable('x').type,absUri('/foo.dart'),'C');
    }
    test_import_of_missing_export() {
        this.allowMissingFiles = true;
        this.addNamedSource('/foo.dart','export "bar.dart"; class C {}');
        this.serializeLibraryText('import "foo.dart"; C x;');
        this.checkTypeRef(this.findVariable('x').type,absUri('/foo.dart'),'C');
    }
    test_import_offset() {
        let libraryText : string = '    import "dart:async"; Future x;';
        this.serializeLibraryText(libraryText);
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).offset,new core.DartString(libraryText).indexOf('import'));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uriOffset,new core.DartString(libraryText).indexOf('"dart:async"'));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uriEnd,new core.DartString(libraryText).indexOf('; Future'));
    }
    test_import_prefix_name() {
        let libraryText : string = 'import "dart:async" as a; a.Future x;';
        this.serializeLibraryText(libraryText);
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        this.checkPrefix(op(Op.INDEX,this.unlinkedUnits[0].imports,0).prefixReference,'a');
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).prefixOffset,new core.DartString(libraryText).indexOf('a;'));
    }
    test_import_prefix_none() {
        this.serializeLibraryText('import "dart:async"; Future x;');
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).prefixReference,0);
    }
    test_import_prefix_not_in_public_namespace() {
        this.serializeLibraryText('import "dart:async" as a; a.Future v;');
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'v');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,1).name,'v=');
    }
    test_import_prefix_reference() {
        let variable : any = this.serializeVariableText('import "dart:async" as a; a.Future v;');
        this.checkTypeRef(variable.type,'dart:async','Future',{
            expectedPrefix : 'a',numTypeParameters : 1});
    }
    test_import_prefixes_take_precedence_over_imported_names() {
        this.addNamedSource('/a.dart','class b {} class A');
        this.addNamedSource('/b.dart','class Cls {}');
        this.addNamedSource('/c.dart','class Cls {}');
        this.addNamedSource('/d.dart','class c {} class D');
        this.serializeLibraryText('import \'a.dart\';\nimport \'b.dart\' as b;\nimport \'c.dart\' as c;\nimport \'d.dart\';\nA aCls;\nb.Cls bCls;\nc.Cls cCls;\nD dCls;\n');
        this.checkTypeRef(this.findVariable('aCls').type,absUri('/a.dart'),'A');
        this.checkTypeRef(this.findVariable('bCls').type,absUri('/b.dart'),'Cls',{
            expectedPrefix : 'b'});
        this.checkTypeRef(this.findVariable('cCls').type,absUri('/c.dart'),'Cls',{
            expectedPrefix : 'c'});
        this.checkTypeRef(this.findVariable('dCls').type,absUri('/d.dart'),'D');
    }
    test_import_reference() {
        let variable : any = this.serializeVariableText('import "dart:async"; Future v;');
        this.checkTypeRef(variable.type,'dart:async','Future',{
            numTypeParameters : 1});
    }
    test_import_reference_merged_no_prefix() {
        this.serializeLibraryText('import "dart:async" show Future;\nimport "dart:async" show Stream;\n\nFuture f;\nStream s;\n');
        {
            let typeRef : any = this.findVariable('f').type;
            this.checkTypeRef(typeRef,'dart:async','Future',{
                numTypeParameters : 1});
        }
        {
            let typeRef : any = this.findVariable('s').type;
            this.checkTypeRef(typeRef,'dart:async','Stream',{
                expectedTargetUnit : 1,numTypeParameters : 1});
        }
    }
    test_import_reference_merged_prefixed() {
        this.serializeLibraryText('import "dart:async" as a show Future;\nimport "dart:async" as a show Stream;\n\na.Future f;\na.Stream s;\n');
        {
            let typeRef : any = this.findVariable('f').type;
            this.checkTypeRef(typeRef,'dart:async','Future',{
                expectedPrefix : 'a',numTypeParameters : 1});
        }
        {
            let typeRef : any = this.findVariable('s').type;
            this.checkTypeRef(typeRef,'dart:async','Stream',{
                expectedTargetUnit : 1,expectedPrefix : 'a',numTypeParameters : 1});
        }
    }
    test_import_reference_merged_prefixed_separate_libraries() {
        this.addNamedSource('/a.dart','class A {}');
        this.addNamedSource('/b.dart','class B {}');
        this.serializeLibraryText('import \'a.dart\' as p;\nimport \'b.dart\' as p;\n\np.A a;\np.B b;\n');
        this.checkTypeRef(this.findVariable('a').type,absUri('/a.dart'),'A',{
            expectedPrefix : 'p'});
        this.checkTypeRef(this.findVariable('b').type,absUri('/b.dart'),'B',{
            expectedPrefix : 'p'});
    }
    test_import_self() {
        this.serializeLibraryText('import \'test.dart\' as p;\nclass C {}\nclass D extends p.C {} // Prevent "unused import" warning\n');
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uri,'test.dart');
        this.checkDependency(op(Op.INDEX,this.linked.importDependencies,0),absUri('/test.dart'));
        this.checkTypeRef(op(Op.INDEX,this.unlinkedUnits[0].classes,1).supertype,absUri('/test.dart'),'C',{
            expectedPrefix : 'p'});
    }
    test_import_show_order() {
        let libraryText : string = 'import "dart:async" show Future, Stream; Future x; Stream y;';
        this.serializeLibraryText(libraryText);
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,hasLength(1));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).shows,hasLength(2));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).hides,isEmpty);
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).shows,0),'Future');
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).shows,1),'Stream');
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).offset,new core.DartString(libraryText).indexOf('show'));
        expect(op(Op.INDEX,op(Op.INDEX,this.unlinkedUnits[0].imports,0).combinators,0).end,new core.DartString(libraryText).indexOf('; Future'));
    }
    test_import_uri() {
        let uriString : string = '"dart:async"';
        let libraryText : string = `import ${uriString}; Future x;`;
        this.serializeLibraryText(libraryText);
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uri,'dart:async');
    }
    test_import_uri_invalid() {
        let uriString : string = '[invalid uri]';
        let libraryText : string = `import "${uriString}";`;
        this.serializeLibraryText(libraryText);
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uri,uriString);
    }
    test_import_uri_nullStringValue() {
        let libraryText : string = 'import "${\'a\'}.dart";\n';
        this.serializeLibraryText(libraryText);
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uri,'');
    }
    test_inferred_function_type_parameter_type_with_unrelated_type_param() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let c : any = this.serializeClassText('abstract class B<T> {\n  void f(void g());\n}\nclass C<T> extends B<T> {\n  void f(g) {}\n}\n');
        expect(c.executables,hasLength(1));
        let f : any = op(Op.INDEX,c.executables,0);
        expect(f.parameters,hasLength(1));
        let g : any = op(Op.INDEX,f.parameters,0);
        expect(g.name,'g');
        let typeRef : any = this.getTypeRefForSlot(g.inferredTypeSlot);
        this.checkLinkedTypeRef(typeRef,null,'f',{
            expectedKind : ReferenceKind.method,numTypeArguments : 1});
        this.checkParamTypeRef(op(Op.INDEX,typeRef.typeArguments,0),1);
    }
    test_inferred_type_keeps_leading_dynamic() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let cls : any = this.serializeClassText('class C { final x = <dynamic, int>{}; }');
        let type : any = this.getTypeRefForSlot(op(Op.INDEX,cls.fields,0).inferredTypeSlot);
        this.checkLinkedTypeRef(type,'dart:core','Map',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkLinkedTypeRef(op(Op.INDEX,type.typeArguments,0),null,'dynamic');
        this.checkLinkedTypeRef(op(Op.INDEX,type.typeArguments,1),'dart:core','int');
    }
    test_inferred_type_reference_shared_prefixed() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        this.addNamedSource('/a.dart','class C {}');
        this.serializeLibraryText('import "a.dart" as p; p.C x; var y = new p.C();');
        let xType : any = this.findVariable('x').type;
        let yType : any = this.getTypeRefForSlot(this.findVariable('y').inferredTypeSlot);
        expect(yType.reference,xType.reference);
    }
    test_inferred_type_refers_to_bound_type_param() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let cls : any = this.serializeClassText('class C<T> extends D<int, T> { var v; }' + ' abstract class D<U, V> { Map<V, U> get v; }',{
            className : 'C'});
        let type : any = this.getTypeRefForSlot(op(Op.INDEX,cls.fields,0).inferredTypeSlot);
        this.checkLinkedTypeRef(type,'dart:core','Map',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkParamTypeRef(op(Op.INDEX,type.typeArguments,0),1);
        this.checkLinkedTypeRef(op(Op.INDEX,type.typeArguments,1),'dart:core','int');
    }
    test_inferred_type_refers_to_function_typed_param_of_typedef() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let v : any = this.serializeVariableText('typedef void F(int g(String s));\nh(F f) => null;\nvar v = h((y) {});\n');
        expect(v.initializer.localFunctions,hasLength(1));
        let closure : any = op(Op.INDEX,v.initializer.localFunctions,0);
        expect(closure.parameters,hasLength(1));
        let y : any = op(Op.INDEX,closure.parameters,0);
        expect(y.name,'y');
        let typeRef : any = this.getTypeRefForSlot(y.inferredTypeSlot);
        this.checkLinkedTypeRef(typeRef,null,'F',{
            expectedKind : ReferenceKind.typedef});
        expect(typeRef.implicitFunctionTypeIndices,new core.DartList.literal(0));
    }
    test_inferred_type_refers_to_function_typed_parameter_type_generic_class() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let cls : any = this.serializeClassText('class C<T, U> extends D<U, int> { void f(int x, g) {} }' + ' abstract class D<V, W> { void f(int x, W g(V s)); }',{
            className : 'C'});
        let type : any = this.getTypeRefForSlot(op(Op.INDEX,op(Op.INDEX,cls.executables,0).parameters,1).inferredTypeSlot);
        expect(type.implicitFunctionTypeIndices,new core.DartList.literal(1));
        expect(type.paramReference,0);
        expect(type.typeArguments,hasLength(2));
        this.checkParamTypeRef(op(Op.INDEX,type.typeArguments,0),1);
        this.checkTypeRef(op(Op.INDEX,type.typeArguments,1),'dart:core','int');
        expect(type.reference,greaterThanOrEqualTo(this.unlinkedUnits[0].references.length));
        let linkedReference : any = op(Op.INDEX,op(Op.INDEX,this.linked.units,0).references,type.reference);
        expect(linkedReference.dependency,0);
        expect(linkedReference.kind,ReferenceKind.method);
        expect(linkedReference.name,'f');
        expect(linkedReference.numTypeParameters,0);
        expect(linkedReference.unit,0);
        expect(linkedReference.containingReference,isNot(0));
        expect(linkedReference.containingReference,lessThan(type.reference));
        this.checkReferenceIndex(linkedReference.containingReference,null,'D',{
            numTypeParameters : 2});
    }
    test_inferred_type_refers_to_function_typed_parameter_type_other_lib() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        this.addNamedSource('/a.dart','import "b.dart"; abstract class D extends E {}');
        this.addNamedSource('/b.dart','abstract class E { void f(int x, int g(String s)); }');
        let cls : any = this.serializeClassText('import "a.dart"; class C extends D { void f(int x, g) {} }');
        let type : any = this.getTypeRefForSlot(op(Op.INDEX,op(Op.INDEX,cls.executables,0).parameters,1).inferredTypeSlot);
        expect(type.implicitFunctionTypeIndices,new core.DartList.literal(1));
        expect(type.paramReference,0);
        expect(type.typeArguments,isEmpty);
        expect(type.reference,greaterThanOrEqualTo(this.unlinkedUnits[0].references.length));
        let linkedReference : any = op(Op.INDEX,op(Op.INDEX,this.linked.units,0).references,type.reference);
        expect(linkedReference.dependency,0);
        expect(linkedReference.kind,ReferenceKind.method);
        expect(linkedReference.name,'f');
        expect(linkedReference.numTypeParameters,0);
        expect(linkedReference.unit,0);
        expect(linkedReference.containingReference,isNot(0));
        expect(linkedReference.containingReference,lessThan(type.reference));
        this.checkReferenceIndex(linkedReference.containingReference,absUri('/b.dart'),'E');
    }
    test_inferred_type_refers_to_method_function_typed_parameter_type() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let cls : any = this.serializeClassText('class C extends D { void f(int x, g) {} }' + ' abstract class D { void f(int x, int g(String s)); }',{
            className : 'C'});
        let type : any = this.getTypeRefForSlot(op(Op.INDEX,op(Op.INDEX,cls.executables,0).parameters,1).inferredTypeSlot);
        expect(type.implicitFunctionTypeIndices,new core.DartList.literal(1));
        expect(type.paramReference,0);
        expect(type.typeArguments,isEmpty);
        expect(type.reference,greaterThanOrEqualTo(this.unlinkedUnits[0].references.length));
        let linkedReference : any = op(Op.INDEX,op(Op.INDEX,this.linked.units,0).references,type.reference);
        expect(linkedReference.dependency,0);
        expect(linkedReference.kind,ReferenceKind.method);
        expect(linkedReference.name,'f');
        expect(linkedReference.numTypeParameters,0);
        expect(linkedReference.unit,0);
        expect(linkedReference.containingReference,isNot(0));
        expect(linkedReference.containingReference,lessThan(type.reference));
        this.checkReferenceIndex(linkedReference.containingReference,null,'D');
    }
    test_inferred_type_refers_to_nested_function_typed_param() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let v : any = this.serializeVariableText('f(void g(int x, void h())) => null;\nvar v = f((x, y) {});\n');
        expect(v.initializer.localFunctions,hasLength(1));
        let closure : any = op(Op.INDEX,v.initializer.localFunctions,0);
        expect(closure.parameters,hasLength(2));
        let y : any = op(Op.INDEX,closure.parameters,1);
        expect(y.name,'y');
        let typeRef : any = this.getTypeRefForSlot(y.inferredTypeSlot);
        this.checkLinkedTypeRef(typeRef,null,'f',{
            expectedKind : ReferenceKind.topLevelFunction});
        expect(typeRef.implicitFunctionTypeIndices,new core.DartList.literal(0,1));
    }
    test_inferred_type_refers_to_nested_function_typed_param_named() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let v : any = this.serializeVariableText('f({void g(int x, void h())}) => null;\nvar v = f(g: (x, y) {});\n');
        expect(v.initializer.localFunctions,hasLength(1));
        let closure : any = op(Op.INDEX,v.initializer.localFunctions,0);
        expect(closure.parameters,hasLength(2));
        let y : any = op(Op.INDEX,closure.parameters,1);
        expect(y.name,'y');
        let typeRef : any = this.getTypeRefForSlot(y.inferredTypeSlot);
        this.checkLinkedTypeRef(typeRef,null,'f',{
            expectedKind : ReferenceKind.topLevelFunction});
        expect(typeRef.implicitFunctionTypeIndices,new core.DartList.literal(0,1));
    }
    test_inferred_type_refers_to_setter_function_typed_parameter_type() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let cls : any = this.serializeClassText('class C extends D { void set f(g) {} }' + ' abstract class D { void set f(int g(String s)); }',{
            className : 'C'});
        let type : any = this.getTypeRefForSlot(op(Op.INDEX,op(Op.INDEX,cls.executables,0).parameters,0).inferredTypeSlot);
        expect(type.implicitFunctionTypeIndices,new core.DartList.literal(0));
        expect(type.paramReference,0);
        expect(type.typeArguments,isEmpty);
        expect(type.reference,greaterThanOrEqualTo(this.unlinkedUnits[0].references.length));
        let linkedReference : any = op(Op.INDEX,op(Op.INDEX,this.linked.units,0).references,type.reference);
        expect(linkedReference.dependency,0);
        expect(linkedReference.kind,ReferenceKind.propertyAccessor);
        expect(linkedReference.name,'f=');
        expect(linkedReference.numTypeParameters,0);
        expect(linkedReference.unit,0);
        expect(linkedReference.containingReference,isNot(0));
        expect(linkedReference.containingReference,lessThan(type.reference));
        this.checkReferenceIndex(linkedReference.containingReference,null,'D');
    }
    test_inferred_type_skips_trailing_dynamic() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let cls : any = this.serializeClassText('class C { final x = <int, dynamic>{}; }');
        let type : any = this.getTypeRefForSlot(op(Op.INDEX,cls.fields,0).inferredTypeSlot);
        this.checkLinkedTypeRef(type,'dart:core','Map',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkLinkedTypeRef(op(Op.INDEX,type.typeArguments,0),'dart:core','int');
        this.checkLinkedDynamicTypeRef(op(Op.INDEX,type.typeArguments,1));
    }
    test_inferred_type_skips_unnecessary_dynamic() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let cls : any = this.serializeClassText('class C { final x = []; }');
        let type : any = this.getTypeRefForSlot(op(Op.INDEX,cls.fields,0).inferredTypeSlot);
        this.checkLinkedTypeRef(type,'dart:core','List',{
            numTypeParameters : 1,numTypeArguments : 1});
    }
    test_initializer_executable_with_bottom_return_type() {
        let variable : any = this.serializeVariableText('int v = null;');
        expect(variable.initializer.returnType,isNull);
        this.checkInferredTypeSlot(variable.initializer.inferredReturnTypeSlot,null,'*bottom*',{
            onlyInStrongMode : false});
    }
    test_initializer_executable_with_imported_return_type() {
        this.addNamedSource('/a.dart','class C { D d; } class D {}');
        let variable : any = this.serializeVariableText('import "a.dart"; int v = new C().d;',{
            allowErrors : true});
        expect(variable.initializer.returnType,isNull);
        this.checkInferredTypeSlot(variable.initializer.inferredReturnTypeSlot,absUri('/a.dart'),'D',{
            onlyInStrongMode : false});
        this.checkHasDependency(absUri('/a.dart'),{
            fullyLinked : false});
    }
    test_initializer_executable_with_return_type_from_closure() {
        if (this.skipFullyLinkedData) {
            return;
        }
        let variable : any = this.serializeVariableText('int v = () => 0;',{
            allowErrors : true});
        let closureType : any = this.getTypeRefForSlot(variable.initializer.inferredReturnTypeSlot);
        this.checkLinkedTypeRef(closureType,null,'',{
            expectedKind : ReferenceKind.function});
        let initializerIndex : number = op(Op.INDEX,this.definingUnit.references,closureType.reference).containingReference;
        this.checkReferenceIndex(initializerIndex,null,'',{
            expectedKind : ReferenceKind.function});
        let variableIndex : number = op(Op.INDEX,this.definingUnit.references,initializerIndex).containingReference;
        this.checkReferenceIndex(variableIndex,null,'v',{
            expectedKind : ReferenceKind.topLevelPropertyAccessor});
        expect(op(Op.INDEX,this.definingUnit.references,variableIndex).containingReference,0);
    }
    test_initializer_executable_with_return_type_from_closure_field() {
        if (this.skipFullyLinkedData) {
            return;
        }
        let cls : any = this.serializeClassText('class C {\n  int v = () => 0;\n}\n',{
            allowErrors : true});
        let variable : any = op(Op.INDEX,cls.fields,0);
        let closureType : any = this.getTypeRefForSlot(variable.initializer.inferredReturnTypeSlot);
        this.checkLinkedTypeRef(closureType,null,'',{
            expectedKind : ReferenceKind.function});
        let initializerIndex : number = op(Op.INDEX,this.definingUnit.references,closureType.reference).containingReference;
        this.checkReferenceIndex(initializerIndex,null,'',{
            expectedKind : ReferenceKind.function});
        let variableIndex : number = op(Op.INDEX,this.definingUnit.references,initializerIndex).containingReference;
        this.checkReferenceIndex(variableIndex,null,'v',{
            expectedKind : ReferenceKind.propertyAccessor});
        let classIndex : number = op(Op.INDEX,this.definingUnit.references,variableIndex).containingReference;
        this.checkReferenceIndex(classIndex,null,'C');
        expect(op(Op.INDEX,this.definingUnit.references,classIndex).containingReference,0);
    }
    test_initializer_executable_with_return_type_from_closure_local() {
        if (this.skipFullyLinkedData) {
            return;
        }
        let executable : any = this.serializeExecutableText('void f() {\n  int u = 0; // force the variable below to have index 1\n  int v = () => 0;\n}',{
            allowErrors : true});
        let variable : any = op(Op.INDEX,executable.localVariables,1);
        let closureType : any = this.getTypeRefForSlot(variable.initializer.inferredReturnTypeSlot);
        this.checkLinkedTypeRef(closureType,null,'',{
            expectedKind : ReferenceKind.function});
        let initializerIndex : number = op(Op.INDEX,this.definingUnit.references,closureType.reference).containingReference;
        this.checkReferenceIndex(initializerIndex,null,'',{
            expectedKind : ReferenceKind.function});
        let variableIndex : number = op(Op.INDEX,this.definingUnit.references,initializerIndex).containingReference;
        this.checkReferenceIndex(variableIndex,null,'v',{
            expectedKind : ReferenceKind.variable,localIndex : 1});
        let topLevelFunctionIndex : number = op(Op.INDEX,this.definingUnit.references,variableIndex).containingReference;
        this.checkReferenceIndex(topLevelFunctionIndex,null,'f',{
            expectedKind : ReferenceKind.topLevelFunction});
        expect(op(Op.INDEX,this.definingUnit.references,topLevelFunctionIndex).containingReference,0);
    }
    test_initializer_executable_with_unimported_return_type() {
        this.addNamedSource('/a.dart','import "b.dart"; class C { D d; }');
        this.addNamedSource('/b.dart','class D {}');
        let variable : any = this.serializeVariableText('import "a.dart"; int v = new C().d;',{
            allowErrors : true});
        expect(variable.initializer.returnType,isNull);
        this.checkInferredTypeSlot(variable.initializer.inferredReturnTypeSlot,absUri('/b.dart'),'D',{
            onlyInStrongMode : false});
        if (!this.skipFullyLinkedData) {
            this.checkHasDependency('b.dart',{
                fullyLinked : true});
        }
    }
    test_library_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nlibrary foo;';
        this.serializeLibraryText(text);
        expect(this.unlinkedUnits[0].libraryDocumentationComment,isNotNull);
        this.checkDocumentationComment(this.unlinkedUnits[0].libraryDocumentationComment,text);
    }
    test_library_name_with_spaces() {
        let text : string = 'library foo . bar ;';
        this.serializeLibraryText(text);
        expect(this.unlinkedUnits[0].libraryName,'foo.bar');
        expect(this.unlinkedUnits[0].libraryNameOffset,new core.DartString(text).indexOf('foo . bar'));
        expect(this.unlinkedUnits[0].libraryNameLength,new core.DartString('foo . bar').length);
    }
    test_library_named() {
        let text : string = 'library foo.bar;';
        this.serializeLibraryText(text);
        expect(this.unlinkedUnits[0].libraryName,'foo.bar');
        expect(this.unlinkedUnits[0].libraryNameOffset,new core.DartString(text).indexOf('foo.bar'));
        expect(this.unlinkedUnits[0].libraryNameLength,new core.DartString('foo.bar').length);
    }
    test_library_unnamed() {
        this.serializeLibraryText('');
        expect(this.unlinkedUnits[0].libraryName,isEmpty);
        expect(this.unlinkedUnits[0].libraryNameOffset,0);
        expect(this.unlinkedUnits[0].libraryNameLength,0);
    }
    test_library_with_missing_part() {
        this.allowMissingFiles = true;
        this.addNamedSource('/bar.dart','part of my.lib; class C {}');
        this.serializeLibraryText('library my.lib; part "foo.dart"; part "bar.dart"; C c;',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('c').type,null,'C',{
            expectedTargetUnit : 2});
    }
    test_lineStarts() {
        let text : string = new core.DartString('int foo;\nclass Test {}\n\nint bar;').replaceAll('\n','\n');
        this.serializeLibraryText(text);
        expect(this.unlinkedUnits[0].lineStarts,new core.DartList.literal(0,9,23,24));
    }
    test_linked_reference_reuse() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        this.addNamedSource('/a.dart','class C {}');
        this.addNamedSource('/b.dart','import "a.dart"; C f() => null;');
        this.serializeLibraryText('import "a.dart"; import "b.dart"; C c1; final c2 = f();');
        let explicitReference : number = this.findVariable('c1').type.reference;
        expect(this.getTypeRefForSlot(this.findVariable('c2').inferredTypeSlot).reference,explicitReference);
    }
    test_linked_type_dependency_reuse() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        this.addNamedSource('/a.dart','class C {} class D {}');
        this.addNamedSource('/b.dart','import "a.dart"; D f() => null;');
        this.serializeLibraryText('import "a.dart"; import "b.dart"; C c; final d = f();');
        let cReference : number = this.findVariable('c').type.reference;
        let explicitDependency : number = op(Op.INDEX,op(Op.INDEX,this.linked.units,0).references,cReference).dependency;
        let dReference : number = this.getTypeRefForSlot(this.findVariable('d').inferredTypeSlot).reference;
        expect(op(Op.INDEX,op(Op.INDEX,this.linked.units,0).references,dReference).dependency,explicitDependency);
    }
    test_local_names_take_precedence_over_imported_names() {
        this.addNamedSource('/a.dart','class C {} class D {}');
        this.serializeLibraryText('import \'a.dart\';\nclass C {}\nC c;\nD d;');
        this.checkTypeRef(this.findVariable('c').type,null,'C');
        this.checkTypeRef(this.findVariable('d').type,absUri('/a.dart'),'D');
    }
    test_localNameShadowsImportPrefix() {
        this.serializeLibraryText('import "dart:async" as a; class a {}; a x;');
        this.checkTypeRef(this.findVariable('x').type,null,'a');
    }
    test_metadata_classDeclaration() {
        this.checkAnnotationA(this.serializeClassText('const a = null; @a class C {}').annotations);
    }
    test_metadata_classTypeAlias() {
        this.checkAnnotationA(this.serializeClassText('const a = null; @a class C = D with E; class D {} class E {}',{
            className : 'C'}).annotations);
    }
    test_metadata_constructor_call_named() {
        let cls : any = this.serializeClassText('class A { const A.named(); } @A.named() class C {}');
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'A'))});
            })});
    }
    test_metadata_constructor_call_named_prefixed() {
        this.addNamedSource('/foo.dart','class A { const A.named(); }');
        let cls : any = this.serializeClassText('import "foo.dart" as foo; @foo.A.named() class C {}');
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.constructor,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'A',{
                        absoluteUri : absUri('/foo.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'foo'))});
            })});
    }
    test_metadata_constructor_call_named_prefixed_unresolved_class() {
        this.addNamedSource('/foo.dart','');
        let cls : any = this.serializeClassText('import "foo.dart" as foo; @foo.A.named() class C {}',{
            allowErrors : true});
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.unresolved,'A'),new _PrefixExpectation(ReferenceKind.prefix,'foo'))});
            })});
    }
    test_metadata_constructor_call_named_prefixed_unresolved_constructor() {
        this.addNamedSource('/foo.dart','class A {}');
        let cls : any = this.serializeClassText('import "foo.dart" as foo; @foo.A.named() class C {}',{
            allowErrors : true});
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'A',{
                        absoluteUri : absUri('/foo.dart')}),new _PrefixExpectation(ReferenceKind.prefix,'foo'))});
            })});
    }
    test_metadata_constructor_call_named_unresolved_class() {
        let cls : any = this.serializeClassText('@A.named() class C {}',{
            allowErrors : true});
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.unresolved,'A'))});
            })});
    }
    test_metadata_constructor_call_named_unresolved_constructor() {
        let cls : any = this.serializeClassText('class A {} @A.named() class C {}',{
            allowErrors : true});
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'named',{
                    expectedKind : ReferenceKind.unresolved,prefixExpectations : new core.DartList.literal(new _PrefixExpectation(ReferenceKind.classOrEnum,'A'))});
            })});
    }
    test_metadata_constructor_call_unnamed() {
        let cls : any = this.serializeClassText('class A { const A(); } @A() class C {}');
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'A',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_metadata_constructor_call_unnamed_prefixed() {
        this.addNamedSource('/foo.dart','class A { const A(); }');
        let cls : any = this.serializeClassText('import "foo.dart" as foo; @foo.A() class C {}');
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/foo.dart'),'A',{
                    expectedKind : ReferenceKind.classOrEnum,expectedPrefix : 'foo'});
            })});
    }
    test_metadata_constructor_call_unnamed_prefixed_unresolved() {
        this.addNamedSource('/foo.dart','');
        let cls : any = this.serializeClassText('import "foo.dart" as foo; @foo.A() class C {}',{
            allowErrors : true});
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'A',{
                    expectedKind : ReferenceKind.unresolved,expectedPrefix : 'foo'});
            })});
    }
    test_metadata_constructor_call_unnamed_unresolved() {
        let cls : any = this.serializeClassText('@A() class C {}',{
            allowErrors : true});
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,0),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'A',{
                    expectedKind : ReferenceKind.unresolved});
            })});
    }
    test_metadata_constructor_call_with_args() {
        let cls : any = this.serializeClassText('class A { const A(x); } @A(null) class C {}');
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushNull,UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,1),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'A',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_metadata_constructorDeclaration_named() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeClassText('const a = null; class C { @a C.named(); }').executables,0).annotations);
    }
    test_metadata_constructorDeclaration_unnamed() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeClassText('const a = null; class C { @a C(); }').executables,0).annotations);
    }
    test_metadata_enumDeclaration() {
        this.checkAnnotationA(this.serializeEnumText('const a = null; @a enum E { v }').annotations);
    }
    test_metadata_exportDirective() {
        this.addNamedSource('/foo.dart','');
        this.serializeLibraryText('@a export "foo.dart"; const a = null;');
        this.checkAnnotationA(op(Op.INDEX,this.unlinkedUnits[0].exports,0).annotations);
    }
    test_metadata_fieldDeclaration() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeClassText('const a = null; class C { @a int x; }').fields,0).annotations);
    }
    test_metadata_fieldFormalParameter() {
        this.checkAnnotationA(op(Op.INDEX,op(Op.INDEX,this.serializeClassText('const a = null; class C { var x; C(@a this.x); }').executables,0).parameters,0).annotations);
    }
    test_metadata_fieldFormalParameter_withDefault() {
        this.checkAnnotationA(op(Op.INDEX,op(Op.INDEX,this.serializeClassText('const a = null; class C { var x; C([@a this.x = null]); }').executables,0).parameters,0).annotations);
    }
    test_metadata_functionDeclaration_function() {
        this.checkAnnotationA(this.serializeExecutableText('const a = null; @a f() {}').annotations);
    }
    test_metadata_functionDeclaration_getter() {
        this.checkAnnotationA(this.serializeExecutableText('const a = null; @a get f => null;').annotations);
    }
    test_metadata_functionDeclaration_setter() {
        this.checkAnnotationA(this.serializeExecutableText('const a = null; @a set f(value) {}',{
            executableName : 'f='}).annotations);
    }
    test_metadata_functionTypeAlias() {
        this.checkAnnotationA(this.serializeTypedefText('const a = null; @a typedef F();').annotations);
    }
    test_metadata_functionTypedFormalParameter() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeExecutableText('const a = null; f(@a g()) {}').parameters,0).annotations);
    }
    test_metadata_functionTypedFormalParameter_withDefault() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeExecutableText('const a = null; f([@a g() = null]) {}').parameters,0).annotations);
    }
    test_metadata_importDirective() {
        this.addNamedSource('/foo.dart','const b = null;');
        this.serializeLibraryText('@a import "foo.dart"; const a = b;');
        this.checkAnnotationA(op(Op.INDEX,this.unlinkedUnits[0].imports,0).annotations);
    }
    test_metadata_invalid_assignable() {
        this.serializeLibraryText('@a(-b=""c');
        expect(this.unlinkedUnits,hasLength(1));
        let variables : core.DartList<any> = this.unlinkedUnits[0].variables;
        expect(variables,hasLength(1));
        let annotations : core.DartList<any> = variables[0].annotations;
        expect(annotations,hasLength(1));
        expect(annotations[0].isValidConst,isFalse);
    }
    test_metadata_invalid_instanceCreation_argument_super() {
        let annotations : core.DartList<any> = this.serializeClassText('class A {\n  const A(_);\n}\n\n@A(super)\nclass C {}\n').annotations;
        expect(annotations,hasLength(1));
        this.assertUnlinkedConst(annotations[0],{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushSuper,UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,1),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'A',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_metadata_invalid_instanceCreation_argument_this() {
        let annotations : core.DartList<any> = this.serializeClassText('class A {\n  const A(_);\n}\n\n@A(this)\nclass C {}\n').annotations;
        expect(annotations,hasLength(1));
        this.assertUnlinkedConst(annotations[0],{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushThis,UnlinkedExprOperation.invokeConstructor),ints : new core.DartList.literal(0,1),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'A',{
                    expectedKind : ReferenceKind.classOrEnum});
            })});
    }
    test_metadata_libraryDirective() {
        this.serializeLibraryText('@a library L; const a = null;');
        this.checkAnnotationA(this.unlinkedUnits[0].libraryAnnotations);
    }
    test_metadata_methodDeclaration_getter() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeClassText('const a = null; class C { @a get m => null; }').executables,0).annotations);
    }
    test_metadata_methodDeclaration_method() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeClassText('const a = null; class C { @a m() {} }').executables,0).annotations);
    }
    test_metadata_methodDeclaration_setter() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeClassText('const a = null; class C { @a set m(value) {} }').executables,0).annotations);
    }
    test_metadata_multiple_annotations() {
        let cls : any = this.serializeClassText('const a = null, b = null; @a @b class C {}');
        let annotations : core.DartList<any> = cls.annotations;
        expect(annotations,hasLength(2));
        this.assertUnlinkedConst(annotations[0],{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
        this.assertUnlinkedConst(annotations[1],{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'b',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    test_metadata_partDirective() {
        this.addNamedSource('/foo.dart','part of L;');
        this.serializeLibraryText('library L; @a part "foo.dart"; const a = null;');
        this.checkAnnotationA(op(Op.INDEX,this.unlinkedUnits[0].parts,0).annotations);
    }
    test_metadata_prefixed_variable() {
        this.addNamedSource('/a.dart','const b = null;');
        let cls : any = this.serializeClassText('import "a.dart" as a; @a.b class C {}');
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,absUri('/a.dart'),'b',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor,expectedPrefix : 'a'});
            })});
    }
    test_metadata_prefixed_variable_unresolved() {
        this.addNamedSource('/a.dart','');
        let cls : any = this.serializeClassText('import "a.dart" as a; @a.b class C {}',{
            allowErrors : true});
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'b',{
                    expectedKind : ReferenceKind.unresolved,expectedPrefix : 'a'});
            })});
    }
    test_metadata_simpleFormalParameter() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeExecutableText('const a = null; f(@a x) {}').parameters,0).annotations);
    }
    test_metadata_simpleFormalParameter_withDefault() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeExecutableText('const a = null; f([@a x = null]) {}').parameters,0).annotations);
    }
    test_metadata_topLevelVariableDeclaration() {
        this.checkAnnotationA(this.serializeVariableText('const a = null; @a int v;').annotations);
    }
    test_metadata_typeParameter_ofClass() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeClassText('const a = null; class C<@a T> {}').typeParameters,0).annotations);
    }
    test_metadata_typeParameter_ofClassTypeAlias() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeClassText('const a = null; class C<@a T> = D with E; class D {} class E {}',{
            className : 'C'}).typeParameters,0).annotations);
    }
    test_metadata_typeParameter_ofFunction() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeExecutableText('const a = null; f<@a T>() {}').typeParameters,0).annotations);
    }
    test_metadata_typeParameter_ofTypedef() {
        this.checkAnnotationA(op(Op.INDEX,this.serializeTypedefText('const a = null; typedef F<@a T>();').typeParameters,0).annotations);
    }
    test_metadata_variable_unresolved() {
        let cls : any = this.serializeClassText('@a class C {}',{
            allowErrors : true});
        expect(cls.annotations,hasLength(1));
        this.assertUnlinkedConst(op(Op.INDEX,cls.annotations,0),{
            operators : new core.DartList.literal(UnlinkedExprOperation.pushReference),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.unresolved});
            })});
    }
    test_method_documented() {
        if (!this.includeInformative) return;
        let text : string = 'class C {\n  /**\n   * Docs\n   */\n  f() {}\n}';
        let executable : any = op(Op.INDEX,this.serializeClassText(text).executables,0);
        expect(executable.documentationComment,isNotNull);
        this.checkDocumentationComment(executable.documentationComment,text);
    }
    test_method_inferred_type_nonstatic_explicit_param() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { void f(num value) {} }' + ' abstract class D { void f(int value); }',{
            className : 'C'}).executables,0);
        expect(op(Op.INDEX,f.parameters,0).inferredTypeSlot,0);
    }
    test_method_inferred_type_nonstatic_explicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { num f() => null; } abstract class D { int f(); }',{
            className : 'C',allowErrors : true}).executables,0);
        expect(f.inferredReturnTypeSlot,0);
    }
    test_method_inferred_type_nonstatic_implicit_param() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { void f(value) {} }' + ' abstract class D { void f(int value); }',{
            className : 'C'}).executables,0);
        this.checkInferredTypeSlot(op(Op.INDEX,f.parameters,0).inferredTypeSlot,'dart:core','int');
    }
    test_method_inferred_type_nonstatic_implicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { f() => null; } abstract class D { int f(); }',{
            className : 'C'}).executables,0);
        this.checkInferredTypeSlot(f.inferredReturnTypeSlot,'dart:core','int');
    }
    test_method_inferred_type_static_implicit_param() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { static void f(value) {} }' + ' class D { static void f(int value) {} }',{
            className : 'C'}).executables,0);
        expect(op(Op.INDEX,f.parameters,0).inferredTypeSlot,0);
    }
    test_method_inferred_type_static_implicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { static f() => null; }' + ' class D { static int f() => null; }',{
            className : 'C'}).executables,0);
        expect(f.inferredReturnTypeSlot,0);
    }
    test_nested_generic_functions() {
        let executable : any = op(Op.INDEX,op(Op.INDEX,this.serializeVariableText('var v = (() {\n  void f<T, U>() {\n    void g<V, W>() {\n      void h<X, Y>() {\n        T t;\n        U u;\n        V v;\n        W w;\n        X x;\n        Y y;\n      }\n    }\n  }\n});\n').initializer.localFunctions,0).localFunctions,0);
        expect(executable.typeParameters,hasLength(2));
        expect(op(Op.INDEX,executable.localFunctions,0).typeParameters,hasLength(2));
        expect(op(Op.INDEX,op(Op.INDEX,executable.localFunctions,0).localFunctions,0).typeParameters,hasLength(2));
        let localVariables : core.DartList<any> = op(Op.INDEX,op(Op.INDEX,executable.localFunctions,0).localFunctions,0).localVariables;
        this.checkParamTypeRef(this.findVariable('t',{
            variables : localVariables}).type,6);
        this.checkParamTypeRef(this.findVariable('u',{
            variables : localVariables}).type,5);
        this.checkParamTypeRef(this.findVariable('v',{
            variables : localVariables}).type,4);
        this.checkParamTypeRef(this.findVariable('w',{
            variables : localVariables}).type,3);
        this.checkParamTypeRef(this.findVariable('x',{
            variables : localVariables}).type,2);
        this.checkParamTypeRef(this.findVariable('y',{
            variables : localVariables}).type,1);
    }
    test_parameter_visibleRange_abstractMethod() {
        let m : any = this.findExecutable('m',{
            executables : this.serializeClassText('abstract class C { m(p); }').executables,failIfAbsent : true});
        this._assertParameterZeroVisibleRange(op(Op.INDEX,m.parameters,0));
    }
    test_parameter_visibleRange_function_blockBody() {
        let text : string = 'var v = (() {\n  f(x) { // 1\n    f2(y) { // 2\n    } // 3\n  } // 4\n});\n';
        let closure = op(Op.INDEX,this.serializeVariableText(text).initializer.localFunctions,0);
        let f : any = op(Op.INDEX,closure.localFunctions,0);
        let f2 : any = op(Op.INDEX,f.localFunctions,0);
        this._assertParameterVisible(text,op(Op.INDEX,f.parameters,0),'{ // 1','} // 4');
        this._assertParameterVisible(text,op(Op.INDEX,f2.parameters,0),'{ // 2','} // 3');
    }
    test_parameter_visibleRange_function_emptyBody() {
        let f : any = this.serializeExecutableText('external f(x);');
        this._assertParameterZeroVisibleRange(op(Op.INDEX,f.parameters,0));
    }
    test_parameter_visibleRange_function_expressionBody() {
        let text : string = 'f(x) => 42;\n';
        let f : any = this.serializeExecutableText(text);
        this._assertParameterVisible(text,op(Op.INDEX,f.parameters,0),'=>',';');
    }
    test_parameter_visibleRange_inFunctionTypedParameter() {
        let text : string = 'f(g(p)) {}';
        let f : any = this.serializeExecutableText(text);
        let g : any = op(Op.INDEX,f.parameters,0);
        let p : any = op(Op.INDEX,g.parameters,0);
        expect(g.name,'g');
        expect(p.name,'p');
        this._assertParameterVisible(text,g,'{','}');
        this._assertParameterZeroVisibleRange(p);
    }
    test_parameter_visibleRange_invalid_fieldFormalParameter() {
        let m : any = this.findExecutable('m',{
            executables : this.serializeClassText('class C {\n  int foo;\n  void m(this.foo) {}\n}\n').executables});
        this._assertParameterZeroVisibleRange(op(Op.INDEX,m.parameters,0));
    }
    test_parameter_visibleRange_typedef() {
        let type : any = this.serializeTypedefText('typedef F(x);');
        this._assertParameterZeroVisibleRange(op(Op.INDEX,type.parameters,0));
    }
    test_part_declaration() {
        this.addNamedSource('/a.dart','part of my.lib;');
        let text : string = 'library my.lib; part "a.dart"; // <-part';
        this.serializeLibraryText(text);
        expect(this.unlinkedUnits[0].publicNamespace.parts,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.parts,0),'a.dart');
        expect(this.unlinkedUnits[0].parts,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].parts,0).uriOffset,new core.DartString(text).indexOf('"a.dart"'));
        expect(op(Op.INDEX,this.unlinkedUnits[0].parts,0).uriEnd,new core.DartString(text).indexOf('; // <-part'));
    }
    test_part_declaration_invalidUri_nullStringValue() {
        this.addNamedSource('/a.dart','part of my.lib;');
        let text : string = 'library my.lib;\npart "${\'a\'}.dart"; // <-part\n';
        this.serializeLibraryText(text);
        expect(this.unlinkedUnits[0].publicNamespace.parts,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.parts,0),'');
        expect(this.unlinkedUnits[0].parts,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].parts,0).uriOffset,new core.DartString(text).indexOf('"${'));
        expect(op(Op.INDEX,this.unlinkedUnits[0].parts,0).uriEnd,new core.DartString(text).indexOf('; // <-part'));
    }
    test_part_isPartOf() {
        this.addNamedSource('/a.dart','part of foo; class C {}');
        this.serializeLibraryText('library foo; part "a.dart";');
        expect(this.unlinkedUnits[0].isPartOf,isFalse);
        expect(this.unlinkedUnits[1].isPartOf,isTrue);
    }
    test_part_uri_invalid() {
        let uriString : string = '[invalid uri]';
        let libraryText : string = `part "${uriString}";`;
        this.serializeLibraryText(libraryText);
        expect(this.unlinkedUnits[0].publicNamespace.parts,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.parts,0),uriString);
    }
    test_parts_defining_compilation_unit() {
        this.serializeLibraryText('');
        expect(this.linked.units,hasLength(1));
        expect(this.unlinkedUnits[0].publicNamespace.parts,isEmpty);
    }
    test_parts_included() {
        this.addNamedSource('/part1.dart','part of my.lib;');
        let partString : string = '"part1.dart"';
        let libraryText : string = `library my.lib; part ${partString};`;
        this.serializeLibraryText(libraryText);
        expect(this.linked.units,hasLength(2));
        expect(this.unlinkedUnits[0].publicNamespace.parts,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.parts,0),'part1.dart');
    }
    test_public_namespace_of_part() {
        this.addNamedSource('/a.dart','part of foo; class C {}');
        this.serializeLibraryText('library foo; part "a.dart";');
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
        expect(this.unlinkedUnits[1].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[1].publicNamespace.names,0).name,'C');
    }
    test_reference_zero() {
        this.serializeLibraryText('');
        let unlinkedReference0 : any = op(Op.INDEX,this.unlinkedUnits[0].references,0);
        expect(unlinkedReference0.name,'');
        expect(unlinkedReference0.prefixReference,0);
        let linkedReference0 : any = op(Op.INDEX,op(Op.INDEX,this.linked.units,0).references,0);
        expect(linkedReference0.containingReference,0);
        expect(linkedReference0.dependency,0);
        expect(linkedReference0.kind,ReferenceKind.unresolved);
        expect(linkedReference0.localIndex,0);
        expect(linkedReference0.name,'');
        expect(linkedReference0.numTypeParameters,0);
        expect(linkedReference0.unit,0);
    }
    test_setter_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nvoid set f(value) {}';
        let executable : any = this.serializeExecutableText(text,{
            executableName : 'f='});
        expect(executable.documentationComment,isNotNull);
        this.checkDocumentationComment(executable.documentationComment,text);
    }
    test_setter_inferred_type_nonstatic_explicit_param() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { void set f(num value) {} }' + ' abstract class D { void set f(int value); }',{
            className : 'C'}).executables,0);
        expect(op(Op.INDEX,f.parameters,0).inferredTypeSlot,0);
    }
    test_setter_inferred_type_nonstatic_explicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C { void set f(int value) {} }').executables,0);
        expect(f.inferredReturnTypeSlot,0);
    }
    test_setter_inferred_type_nonstatic_implicit_param() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { void set f(value) {} }' + ' abstract class D { void set f(int value); }',{
            className : 'C'}).executables,0);
        this.checkInferredTypeSlot(op(Op.INDEX,f.parameters,0).inferredTypeSlot,'dart:core','int');
    }
    test_setter_inferred_type_nonstatic_implicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C { set f(int value) {} }').executables,0);
        this.checkInferredTypeSlot(f.inferredReturnTypeSlot,null,'void');
    }
    test_setter_inferred_type_static_implicit_param() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C extends D { static void set f(value) {} }' + ' class D { static void set f(int value) {} }',{
            className : 'C'}).executables,0);
        expect(op(Op.INDEX,f.parameters,0).inferredTypeSlot,0);
    }
    test_setter_inferred_type_static_implicit_return() {
        let f : any = op(Op.INDEX,this.serializeClassText('class C { static set f(int value) {} }').executables,0);
        expect(f.inferredReturnTypeSlot,0);
    }
    test_setter_inferred_type_top_level_implicit_param() {
        let f : any = this.serializeExecutableText('void set f(value) {}',{
            executableName : 'f='});
        expect(op(Op.INDEX,f.parameters,0).inferredTypeSlot,0);
    }
    test_setter_inferred_type_top_level_implicit_return() {
        let f : any = this.serializeExecutableText('set f(int value) {}',{
            executableName : 'f='});
        expect(f.inferredReturnTypeSlot,0);
    }
    test_slot_reuse() {
        this.addNamedSource('/a.dart','part of foo; final v = 0;');
        this.serializeLibraryText('library foo; part "a.dart"; final w = 0;');
        expect(op(Op.INDEX,this.unlinkedUnits[1].variables,0).inferredTypeSlot,op(Op.INDEX,this.unlinkedUnits[0].variables,0).inferredTypeSlot);
    }
    test_syntheticFunctionType_genericClosure() {
        if (this.skipFullyLinkedData) {
            return;
        }
        if (!this.strongMode) {
            return;
        }
        let variable : any = this.serializeVariableText('final v = f() ? /*<T>*/(T t) => 0 : /*<T>*/(T t) => 1;\nbool f() => true;\n');
        let inferredType : any = this.getTypeRefForSlot(variable.inferredTypeSlot);
        this.checkLinkedTypeRef(inferredType.syntheticReturnType,'dart:core','int');
        expect(inferredType.syntheticParams,hasLength(1));
        this.checkLinkedTypeRef(op(Op.INDEX,inferredType.syntheticParams,0).type,null,'*bottom*');
    }
    test_syntheticFunctionType_genericClosure_inGenericFunction() {
        if (this.skipFullyLinkedData) {
            return;
        }
        if (!this.strongMode) {
            return;
        }
        let variable : any = op(Op.INDEX,this.serializeExecutableText('void f<T, U>(bool b) {\n  final v = b ? /*<V>*/(T t, U u, V v) => 0 : /*<V>*/(T t, U u, V v) => 1;\n}\n').localVariables,0);
        let inferredType : any = this.getTypeRefForSlot(variable.inferredTypeSlot);
        this.checkLinkedTypeRef(inferredType.syntheticReturnType,'dart:core','int');
        expect(inferredType.syntheticParams,hasLength(3));
        this.checkParamTypeRef(op(Op.INDEX,inferredType.syntheticParams,0).type,2);
        this.checkParamTypeRef(op(Op.INDEX,inferredType.syntheticParams,1).type,1);
        this.checkLinkedTypeRef(op(Op.INDEX,inferredType.syntheticParams,2).type,null,'*bottom*');
    }
    test_syntheticFunctionType_inGenericClass() {
        if (this.skipFullyLinkedData) {
            return;
        }
        let variable : any = op(Op.INDEX,this.serializeClassText('class C<T, U> {\n  var v = f() ? (T t, U u) => 0 : (T t, U u) => 1;\n}\nbool f() => false;\n').fields,0);
        let inferredType : any = this.getTypeRefForSlot(variable.initializer.inferredReturnTypeSlot);
        this.checkLinkedTypeRef(inferredType.syntheticReturnType,'dart:core','int');
        this.checkParamTypeRef(op(Op.INDEX,inferredType.syntheticParams,0).type,2);
        this.checkParamTypeRef(op(Op.INDEX,inferredType.syntheticParams,1).type,1);
    }
    test_syntheticFunctionType_inGenericFunction() {
        if (this.skipFullyLinkedData) {
            return;
        }
        let variable : any = op(Op.INDEX,this.serializeExecutableText('void f<T, U>(bool b) {\n  var v = b ? (T t, U u) => 0 : (T t, U u) => 1;\n}\n').localVariables,0);
        let inferredType : any = this.getTypeRefForSlot(variable.initializer.inferredReturnTypeSlot);
        this.checkLinkedTypeRef(inferredType.syntheticReturnType,'dart:core','int');
        this.checkParamTypeRef(op(Op.INDEX,inferredType.syntheticParams,0).type,2);
        this.checkParamTypeRef(op(Op.INDEX,inferredType.syntheticParams,1).type,1);
    }
    test_type_arguments_explicit() {
        let typeRef : any = this.serializeTypeText('List<int>');
        this.checkTypeRef(typeRef,'dart:core','List',{
            numTypeParameters : 1,numTypeArguments : 1});
        this.checkTypeRef(op(Op.INDEX,typeRef.typeArguments,0),'dart:core','int');
    }
    test_type_arguments_explicit_dynamic() {
        let typeRef : any = this.serializeTypeText('List<dynamic>');
        this.checkTypeRef(typeRef,'dart:core','List',{
            numTypeParameters : 1,numTypeArguments : 1});
        this.checkDynamicTypeRef(op(Op.INDEX,typeRef.typeArguments,0));
    }
    test_type_arguments_explicit_dynamic_dynamic() {
        let typeRef : any = this.serializeTypeText('Map<dynamic, dynamic>');
        this.checkTypeRef(typeRef,'dart:core','Map',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkDynamicTypeRef(op(Op.INDEX,typeRef.typeArguments,0));
        this.checkDynamicTypeRef(op(Op.INDEX,typeRef.typeArguments,1));
    }
    test_type_arguments_explicit_dynamic_int() {
        let typeRef : any = this.serializeTypeText('Map<dynamic, int>');
        this.checkTypeRef(typeRef,'dart:core','Map',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkDynamicTypeRef(op(Op.INDEX,typeRef.typeArguments,0));
        this.checkTypeRef(op(Op.INDEX,typeRef.typeArguments,1),'dart:core','int');
    }
    test_type_arguments_explicit_dynamic_typedef() {
        let typeRef : any = this.serializeTypeText('F<dynamic>',{
            otherDeclarations : 'typedef T F<T>();'});
        this.checkTypeRef(typeRef,null,'F',{
            expectedKind : ReferenceKind.typedef,numTypeParameters : 1,numTypeArguments : 1});
        this.checkDynamicTypeRef(op(Op.INDEX,typeRef.typeArguments,0));
    }
    test_type_arguments_explicit_String_dynamic() {
        let typeRef : any = this.serializeTypeText('Map<String, dynamic>');
        this.checkTypeRef(typeRef,'dart:core','Map',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkTypeRef(op(Op.INDEX,typeRef.typeArguments,0),'dart:core','String');
        this.checkDynamicTypeRef(op(Op.INDEX,typeRef.typeArguments,1));
    }
    test_type_arguments_explicit_String_int() {
        let typeRef : any = this.serializeTypeText('Map<String, int>');
        this.checkTypeRef(typeRef,'dart:core','Map',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkTypeRef(op(Op.INDEX,typeRef.typeArguments,0),'dart:core','String');
        this.checkTypeRef(op(Op.INDEX,typeRef.typeArguments,1),'dart:core','int');
    }
    test_type_arguments_explicit_typedef() {
        let typeRef : any = this.serializeTypeText('F<int>',{
            otherDeclarations : 'typedef T F<T>();'});
        this.checkTypeRef(typeRef,null,'F',{
            expectedKind : ReferenceKind.typedef,numTypeParameters : 1,numTypeArguments : 1});
        this.checkTypeRef(op(Op.INDEX,typeRef.typeArguments,0),'dart:core','int');
    }
    test_type_arguments_implicit() {
        let typeRef : any = this.serializeTypeText('List');
        this.checkTypeRef(typeRef,'dart:core','List',{
            numTypeParameters : 1});
    }
    test_type_arguments_implicit_typedef() {
        let typeRef : any = this.serializeTypeText('F',{
            otherDeclarations : 'typedef T F<T>();'});
        this.checkTypeRef(typeRef,null,'F',{
            expectedKind : ReferenceKind.typedef,numTypeParameters : 1});
    }
    test_type_arguments_implicit_typedef_withBound() {
        let typeRef : any = this.serializeTypeText('F',{
            otherDeclarations : 'typedef T F<T extends num>();'});
        this.checkTypeRef(typeRef,null,'F',{
            expectedKind : ReferenceKind.typedef,numTypeParameters : 1});
    }
    test_type_arguments_order() {
        let typeRef : any = this.serializeTypeText('Map<int, Object>');
        this.checkTypeRef(typeRef,'dart:core','Map',{
            numTypeParameters : 2,numTypeArguments : 2});
        this.checkTypeRef(op(Op.INDEX,typeRef.typeArguments,0),'dart:core','int');
        this.checkTypeRef(op(Op.INDEX,typeRef.typeArguments,1),'dart:core','Object');
    }
    test_type_dynamic() {
        this.checkDynamicTypeRef(this.serializeTypeText('dynamic'));
    }
    test_type_invalid_typeParameter_asPrefix() {
        let c : any = this.serializeClassText('class C<T> {\n  m(T.K p) {}\n}\n');
        let m : any = op(Op.INDEX,c.executables,0);
        expect(m.name,'m');
        this.checkTypeRef(op(Op.INDEX,m.parameters,0).type,null,'dynamic');
    }
    test_type_param_codeRange() {
        if (!this.includeInformative) return;
        let cls : any = this.serializeClassText('class A {} class C<T extends A> {}');
        let typeParameter : any = op(Op.INDEX,cls.typeParameters,0);
        this._assertCodeRange(typeParameter.codeRange,19,11);
    }
    test_type_param_not_shadowed_by_constructor() {
        let cls : any = this.serializeClassText('class C<D> { D x; C.D(); } class D {}');
        this.checkParamTypeRef(op(Op.INDEX,cls.fields,0).type,1);
    }
    test_type_param_not_shadowed_by_field_in_extends() {
        let cls : any = this.serializeClassText('class C<T> extends D<T> { T x; } class D<T> {}');
        this.checkParamTypeRef(op(Op.INDEX,cls.supertype.typeArguments,0),1);
    }
    test_type_param_not_shadowed_by_field_in_implements() {
        let cls : any = this.serializeClassText('class C<T> implements D<T> { T x; } class D<T> {}');
        this.checkParamTypeRef(op(Op.INDEX,op(Op.INDEX,cls.interfaces,0).typeArguments,0),1);
    }
    test_type_param_not_shadowed_by_field_in_with() {
        let cls : any = this.serializeClassText('class C<T> extends Object with D<T> { T x; } class D<T> {}');
        this.checkParamTypeRef(op(Op.INDEX,op(Op.INDEX,cls.mixins,0).typeArguments,0),1);
    }
    test_type_param_not_shadowed_by_method_parameter() {
        let cls : any = this.serializeClassText('class C<T> { f(int T, T x) {} }');
        this.checkParamTypeRef(op(Op.INDEX,op(Op.INDEX,cls.executables,0).parameters,1).type,1);
    }
    test_type_param_not_shadowed_by_setter() {
        let workAroundBug25525 : boolean = true;
        let cls : any = this.serializeClassText('class C<D> { D x; void set D(value) {} } class D {}',{
            allowErrors : workAroundBug25525});
        this.checkParamTypeRef(op(Op.INDEX,cls.fields,0).type,1);
    }
    test_type_param_not_shadowed_by_typedef_parameter() {
        let typedef : any = this.serializeTypedefText('typedef void F<T>(int T, T x);');
        this.checkParamTypeRef(op(Op.INDEX,typedef.parameters,1).type,1);
    }
    test_type_param_shadowed_by_field() {
        let cls : any = this.serializeClassText('class C<D> { D x; int D; } class D {}',{
            allowErrors : true});
        this.checkDynamicTypeRef(op(Op.INDEX,cls.fields,0).type);
    }
    test_type_param_shadowed_by_getter() {
        let cls : any = this.serializeClassText('class C<D> { D x; int get D => null; } class D {}',{
            allowErrors : true});
        this.checkDynamicTypeRef(op(Op.INDEX,cls.fields,0).type);
    }
    test_type_param_shadowed_by_method() {
        let cls : any = this.serializeClassText('class C<D> { D x; void D() {} } class D {}',{
            allowErrors : true});
        this.checkDynamicTypeRef(op(Op.INDEX,cls.fields,0).type);
    }
    test_type_param_shadowed_by_type_param() {
        let cls : any = this.serializeClassText('class C<T> { T f<T>(T x) => null; }');
        this.checkParamTypeRef(op(Op.INDEX,cls.executables,0).returnType,1);
        this.checkParamTypeRef(op(Op.INDEX,op(Op.INDEX,cls.executables,0).parameters,0).type,1);
    }
    test_type_reference_from_part() {
        this.addNamedSource('/a.dart','part of foo; C v;');
        this.serializeLibraryText('library foo; part "a.dart"; class C {}');
        this.checkTypeRef(this.findVariable('v',{
            variables : this.unlinkedUnits[1].variables}).type,null,'C',{
            expectedKind : ReferenceKind.classOrEnum,linkedSourceUnit : op(Op.INDEX,this.linked.units,1),unlinkedSourceUnit : this.unlinkedUnits[1]});
    }
    test_type_reference_from_part_withPrefix() {
        this.addNamedSource('/a.dart','class C {}');
        this.addNamedSource('/p.dart','part of foo; a.C v;');
        this.serializeLibraryText('library foo; import "a.dart"; import "a.dart" as a; part "p.dart";',{
            allowErrors : true});
        this.checkTypeRef(this.findVariable('v',{
            variables : this.unlinkedUnits[1].variables}).type,absUri('/a.dart'),'C',{
            expectedPrefix : 'a',linkedSourceUnit : op(Op.INDEX,this.linked.units,1),unlinkedSourceUnit : this.unlinkedUnits[1]});
    }
    test_type_reference_to_class_argument() {
        let cls : any = this.serializeClassText('class C<T, U> { T t; U u; }');
        {
            let typeRef : any = this.findVariable('t',{
                variables : cls.fields,failIfAbsent : true}).type;
            this.checkParamTypeRef(typeRef,2);
        }
        {
            let typeRef : any = this.findVariable('u',{
                variables : cls.fields,failIfAbsent : true}).type;
            this.checkParamTypeRef(typeRef,1);
        }
    }
    test_type_reference_to_import_of_export() {
        this.addNamedSource('/a.dart','library a; export "b.dart";');
        this.addNamedSource('/b.dart','library b; class C {}');
        this.checkTypeRef(this.serializeTypeText('C',{
            otherDeclarations : 'import "a.dart";'}),absUri('/b.dart'),'C');
    }
    test_type_reference_to_import_of_export_via_prefix() {
        this.addNamedSource('/a.dart','library a; export "b.dart";');
        this.addNamedSource('/b.dart','library b; class C {}');
        this.checkTypeRef(this.serializeTypeText('p.C',{
            otherDeclarations : 'import "a.dart" as p;'}),absUri('/b.dart'),'C',{
            expectedPrefix : 'p'});
    }
    test_type_reference_to_imported_part() {
        this.addNamedSource('/a.dart','library my.lib; part "b.dart";');
        this.addNamedSource('/b.dart','part of my.lib; class C {}');
        this.checkTypeRef(this.serializeTypeText('C',{
            otherDeclarations : 'library my.lib; import "a.dart";'}),absUri('/a.dart'),'C',{
            expectedTargetUnit : 1});
    }
    test_type_reference_to_imported_part_with_prefix() {
        this.addNamedSource('/a.dart','library my.lib; part "b.dart";');
        this.addNamedSource('/b.dart','part of my.lib; class C {}');
        this.checkTypeRef(this.serializeTypeText('p.C',{
            otherDeclarations : 'library my.lib; import "a.dart" as p;'}),absUri('/a.dart'),'C',{
            expectedPrefix : 'p',expectedTargetUnit : 1});
    }
    test_type_reference_to_internal_class() {
        this.checkTypeRef(this.serializeTypeText('C',{
            otherDeclarations : 'class C {}'}),null,'C');
    }
    test_type_reference_to_internal_class_alias() {
        this.checkTypeRef(this.serializeTypeText('C',{
            otherDeclarations : 'class C = D with E; class D {} class E {}'}),null,'C');
    }
    test_type_reference_to_internal_enum() {
        this.checkTypeRef(this.serializeTypeText('E',{
            otherDeclarations : 'enum E { value }'}),null,'E');
    }
    test_type_reference_to_local_part() {
        this.addNamedSource('/a.dart','part of my.lib; class C {}');
        this.checkTypeRef(this.serializeTypeText('C',{
            otherDeclarations : 'library my.lib; part "a.dart";'}),null,'C',{
            expectedTargetUnit : 1});
    }
    test_type_reference_to_nonexistent_file_via_prefix() {
        this.allowMissingFiles = true;
        let typeRef : any = this.serializeTypeText('p.C',{
            otherDeclarations : 'import "foo.dart" as p;',allowErrors : true});
        this.checkUnresolvedTypeRef(typeRef,'p','C');
    }
    test_type_reference_to_part() {
        this.addNamedSource('/a.dart','part of foo; class C { C(); }');
        this.serializeLibraryText('library foo; part "a.dart"; C c;');
        this.checkTypeRef(this.unlinkedUnits[0].variables.single.type,null,'C',{
            expectedKind : ReferenceKind.classOrEnum,expectedTargetUnit : 1});
    }
    test_type_reference_to_type_visible_via_multiple_import_prefixes() {
        this.addNamedSource('/lib1.dart','class C');
        this.addNamedSource('/lib2.dart','export "lib1.dart";');
        this.addNamedSource('/lib3.dart','export "lib1.dart";');
        this.addNamedSource('/lib4.dart','export "lib1.dart";');
        this.serializeLibraryText('import \'lib2.dart\';\nimport \'lib3.dart\' as a;\nimport \'lib4.dart\' as b;\nC c2;\na.C c3;\nb.C c4;');
        this.checkTypeRef(this.findVariable('c2').type,absUri('/lib1.dart'),'C');
        this.checkTypeRef(this.findVariable('c3').type,absUri('/lib1.dart'),'C',{
            expectedPrefix : 'a'});
        this.checkTypeRef(this.findVariable('c4').type,absUri('/lib1.dart'),'C',{
            expectedPrefix : 'b'});
    }
    test_type_reference_to_typedef() {
        this.checkTypeRef(this.serializeTypeText('F',{
            otherDeclarations : 'typedef void F();'}),null,'F',{
            expectedKind : ReferenceKind.typedef});
    }
    test_type_unit_counts_unreferenced_units() {
        this.addNamedSource('/a.dart','library a; part "b.dart"; part "c.dart";');
        this.addNamedSource('/b.dart','part of a;');
        this.addNamedSource('/c.dart','part of a; class C {}');
        let typeRef : any = this.serializeTypeText('C',{
            otherDeclarations : 'import "a.dart";'});
        this.checkTypeRef(typeRef,absUri('/a.dart'),'C',{
            expectedTargetUnit : 2});
    }
    test_type_unresolved() {
        let typeRef : any = this.serializeTypeText('Foo',{
            allowErrors : true});
        this.checkUnresolvedTypeRef(typeRef,null,'Foo');
    }
    test_typedef_codeRange() {
        if (!this.includeInformative) return;
        let type : any = this.serializeTypedefText('typedef F();');
        this._assertCodeRange(type.codeRange,0,12);
    }
    test_typedef_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\ntypedef F();';
        let typedef : any = this.serializeTypedefText(text);
        expect(typedef.documentationComment,isNotNull);
        this.checkDocumentationComment(typedef.documentationComment,text);
    }
    test_typedef_genericFunction_reference() {
        let typeRef : any = this.serializeTypeText('F',{
            otherDeclarations : 'typedef F<S> = S Function<T>(T x);'});
        this.checkTypeRef(typeRef,null,'F',{
            numTypeParameters : 1,expectedKind : ReferenceKind.genericFunctionTypedef});
    }
    test_typedef_genericFunction_typeNames() {
        let typedef : any = this.serializeTypedefText('typedef F<S> = S Function(int x, String y);');
        expect(typedef.style,TypedefStyle.genericFunctionType);
        expect(typedef.typeParameters,hasLength(1));
        expect(op(Op.INDEX,typedef.typeParameters,0).name,'S');
        expect(typedef.parameters,isEmpty);
        let genericFunction : any = typedef.returnType;
        expect(genericFunction.entityKind,EntityRefKind.genericFunctionType);
        expect(genericFunction.typeParameters,isEmpty);
        let functionParameters : core.DartList<any> = genericFunction.syntheticParams;
        expect(functionParameters,hasLength(2));
        expect(functionParameters[0].name,'x');
        expect(functionParameters[1].name,'y');
        this.checkLinkedTypeRef(functionParameters[0].type,'dart:core','int');
        this.checkLinkedTypeRef(functionParameters[1].type,'dart:core','String');
        this.checkParamTypeRef(genericFunction.syntheticReturnType,1);
    }
    test_typedef_genericFunction_typeParameters() {
        let typedef : any = this.serializeTypedefText('typedef F<S> = S Function<T1, T2>(T1 x, T2 y);');
        expect(typedef.style,TypedefStyle.genericFunctionType);
        expect(typedef.typeParameters,hasLength(1));
        expect(op(Op.INDEX,typedef.typeParameters,0).name,'S');
        expect(typedef.parameters,isEmpty);
        let genericFunction : any = typedef.returnType;
        expect(genericFunction.entityKind,EntityRefKind.genericFunctionType);
        expect(genericFunction.typeParameters,hasLength(2));
        expect(op(Op.INDEX,genericFunction.typeParameters,0).name,'T1');
        expect(op(Op.INDEX,genericFunction.typeParameters,1).name,'T2');
        expect(genericFunction.syntheticParams,hasLength(2));
        expect(op(Op.INDEX,genericFunction.syntheticParams,0).name,'x');
        expect(op(Op.INDEX,genericFunction.syntheticParams,1).name,'y');
        this.checkParamTypeRef(op(Op.INDEX,genericFunction.syntheticParams,0).type,2);
        this.checkParamTypeRef(op(Op.INDEX,genericFunction.syntheticParams,1).type,1);
        this.checkParamTypeRef(genericFunction.syntheticReturnType,3);
    }
    test_typedef_name() {
        let text : string = 'typedef F();';
        let type : any = this.serializeTypedefText(text);
        expect(type.name,'F');
        if (this.includeInformative) {
            expect(type.nameOffset,new core.DartString(text).indexOf('F'));
        }
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).kind,ReferenceKind.typedef);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'F');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,0);
    }
    test_typedef_param_none() {
        let type : any = this.serializeTypedefText('typedef F();');
        expect(type.parameters,isEmpty);
    }
    test_typedef_param_order() {
        let type : any = this.serializeTypedefText('typedef F(x, y);');
        expect(type.parameters,hasLength(2));
        expect(op(Op.INDEX,type.parameters,0).name,'x');
        expect(op(Op.INDEX,type.parameters,1).name,'y');
    }
    test_typedef_private() {
        this.serializeTypedefText('typedef _F();','_F');
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
    }
    test_typedef_reference_generic() {
        let typeRef : any = this.serializeTypeText('F',{
            otherDeclarations : 'typedef void F<A, B>();'});
        this.checkTypeRef(typeRef,null,'F',{
            numTypeParameters : 2,expectedKind : ReferenceKind.typedef});
    }
    test_typedef_reference_generic_imported() {
        this.addNamedSource('/lib.dart','typedef void F<A, B>();');
        let typeRef : any = this.serializeTypeText('F',{
            otherDeclarations : 'import "lib.dart";'});
        this.checkTypeRef(typeRef,absUri('/lib.dart'),'F',{
            numTypeParameters : 2,expectedKind : ReferenceKind.typedef});
    }
    test_typedef_return_type_explicit() {
        let type : any = this.serializeTypedefText('typedef int F();');
        this.checkTypeRef(type.returnType,'dart:core','int');
    }
    test_typedef_type_param_in_parameter() {
        let type : any = this.serializeTypedefText('typedef F<T>(T t);');
        this.checkParamTypeRef(op(Op.INDEX,type.parameters,0).type,1);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,1);
    }
    test_typedef_type_param_in_return_type() {
        let type : any = this.serializeTypedefText('typedef T F<T>();');
        this.checkParamTypeRef(type.returnType,1);
    }
    test_typedef_type_param_none() {
        let type : any = this.serializeTypedefText('typedef F();');
        expect(type.typeParameters,isEmpty);
    }
    test_typedef_type_param_order() {
        let type : any = this.serializeTypedefText('typedef F<T, U>();');
        expect(type.typeParameters,hasLength(2));
        expect(op(Op.INDEX,type.typeParameters,0).name,'T');
        expect(op(Op.INDEX,type.typeParameters,1).name,'U');
    }
    test_unit_codeRange() {
        if (!this.includeInformative) return;
        this.serializeLibraryText('  int a = 1;  ');
        let unit : any = this.unlinkedUnits[0];
        this._assertCodeRange(unit.codeRange,0,14);
    }
    test_unresolved_export() {
        this.allowMissingFiles = true;
        this.serializeLibraryText("export 'foo.dart';",{
            allowErrors : true});
        expect(this.unlinkedUnits[0].publicNamespace.exports,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.exports,0).uri,'foo.dart');
        expect(this.linked.exportDependencies,hasLength(1));
        this.checkDependency(op(Op.INDEX,this.linked.exportDependencies,0),absUri('/foo.dart'));
    }
    test_unresolved_import() {
        this.allowMissingFiles = true;
        this.serializeLibraryText("import 'foo.dart';",{
            allowErrors : true});
        expect(this.unlinkedUnits[0].imports,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,0).uri,'foo.dart');
        expect(op(Op.INDEX,this.unlinkedUnits[0].imports,1).isImplicit,true);
        expect(this.linked.importDependencies,hasLength(2));
        this.checkDependency(op(Op.INDEX,this.linked.importDependencies,0),absUri('/foo.dart'));
    }
    test_unresolved_part() {
        this.allowMissingFiles = true;
        this.serializeLibraryText("part 'foo.dart';",{
            allowErrors : true});
        expect(this.unlinkedUnits[0].publicNamespace.parts,hasLength(1));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.parts,0),'foo.dart');
    }
    test_unresolved_reference_in_multiple_parts() {
        this.addNamedSource('/a.dart','part of foo; int x; Unresolved y;');
        this.serializeLibraryText('library foo; part "a.dart"; Unresolved z;',{
            allowErrors : true});
        this.checkUnresolvedTypeRef(op(Op.INDEX,this.unlinkedUnits[0].variables,0).type,null,'Unresolved');
        this.checkUnresolvedTypeRef(op(Op.INDEX,this.unlinkedUnits[1].variables,1).type,null,'Unresolved',{
            linkedSourceUnit : op(Op.INDEX,this.linked.units,1),unlinkedSourceUnit : this.unlinkedUnits[1]});
    }
    test_unresolved_reference_shared() {
        this.serializeLibraryText('C x; C y;',{
            allowErrors : true});
        let xType : any = this.findVariable('x').type;
        let yType : any = this.findVariable('y').type;
        expect(xType.reference,yType.reference);
    }
    test_unused_type_parameter() {
        if (!this.strongMode || this.skipFullyLinkedData) {
            return;
        }
        let variable : any = this.serializeVariableText('class C<T> {\n  void f() {}\n}\nC<int> c;\nvar v = c.f;\n');
        let type : any = this.getTypeRefForSlot(variable.initializer.inferredReturnTypeSlot);
        expect(type.typeArguments,hasLength(1));
        this.checkLinkedTypeRef(op(Op.INDEX,type.typeArguments,0),'dart:core','int');
    }
    test_variable() {
        let text : string = 'int i;';
        let v : any = this.serializeVariableText(text,{
            variableName : 'i'});
        if (this.includeInformative) {
            expect(v.nameOffset,new core.DartString(text).indexOf('i;'));
        }
        expect(this.findExecutable('i'),isNull);
        expect(this.findExecutable('i='),isNull);
        expect(this.unlinkedUnits[0].publicNamespace.names,hasLength(2));
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).kind,ReferenceKind.topLevelPropertyAccessor);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).name,'i');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,0).numTypeParameters,0);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,1).kind,ReferenceKind.topLevelPropertyAccessor);
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,1).name,'i=');
        expect(op(Op.INDEX,this.unlinkedUnits[0].publicNamespace.names,1).numTypeParameters,0);
    }
    test_variable_codeRange() {
        if (!this.includeInformative) return;
        this.serializeLibraryText(' int a = 1, b = 22;');
        let variables : core.DartList<any> = this.unlinkedUnits[0].variables;
        this._assertCodeRange(variables[0].codeRange,1,18);
        this._assertCodeRange(variables[1].codeRange,1,18);
    }
    test_variable_const() {
        let variable : any = this.serializeVariableText('const int i = 0;',{
            variableName : 'i'});
        expect(variable.isConst,isTrue);
    }
    test_variable_documented() {
        if (!this.includeInformative) return;
        let text : string = '// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nvar v;';
        let variable : any = this.serializeVariableText(text);
        expect(variable.documentationComment,isNotNull);
        this.checkDocumentationComment(variable.documentationComment,text);
    }
    test_variable_explicit_dynamic() {
        let variable : any = this.serializeVariableText('dynamic v;');
        this.checkDynamicTypeRef(variable.type);
    }
    test_variable_final_top_level() {
        let variable : any = this.serializeVariableText('final int i = 0;',{
            variableName : 'i'});
        expect(variable.isFinal,isTrue);
        expect(variable.initializer.bodyExpr,isNull);
    }
    test_variable_final_top_level_untyped() {
        let variable : any = this.serializeVariableText('final v = 0;');
        expect(variable.initializer.bodyExpr,isNotNull);
    }
    test_variable_implicit_dynamic() {
        let variable : any = this.serializeVariableText('var v;');
        expect(variable.type,isNull);
    }
    test_variable_inferred_type_explicit_initialized() {
        let v : any = this.serializeVariableText('int v = 0;');
        expect(v.inferredTypeSlot,0);
    }
    test_variable_inferred_type_implicit_initialized() {
        let v : any = this.serializeVariableText('var v = 0;');
        this.checkInferredTypeSlot(v.inferredTypeSlot,'dart:core','int');
    }
    test_variable_inferred_type_implicit_uninitialized() {
        let v : any = this.serializeVariableText('var v;');
        expect(v.inferredTypeSlot,0);
    }
    test_variable_initializer_literal() {
        let variable : any = this.serializeVariableText('var v = 42;');
        let initializer : any = variable.initializer;
        expect(initializer,isNotNull);
        if (this.includeInformative) {
            expect(initializer.nameOffset,8);
        }
        expect(initializer.name,isEmpty);
        expect(initializer.localFunctions,isEmpty);
        expect(initializer.localVariables,isEmpty);
    }
    test_variable_initializer_noInitializer() {
        let variable : any = this.serializeVariableText('var v;');
        expect(variable.initializer,isNull);
    }
    test_variable_initializer_withLocals() {
        let text : string = 'var v = <dynamic, dynamic>{"1": () { f1() {} var v1; }, ' + '"2": () { f2() {} var v2; }};';
        let variable : any = this.serializeVariableText(text);
        let initializer : any = variable.initializer;
        expect(initializer,isNotNull);
        if (this.includeInformative) {
            expect(initializer.nameOffset,new core.DartString(text).indexOf('<dynamic, dynamic>{"1'));
        }
        expect(initializer.name,isEmpty);
        expect(initializer.localFunctions,hasLength(2));
        {
            let closure : any = op(Op.INDEX,initializer.localFunctions,0);
            if (this.includeInformative) {
                expect(closure.nameOffset,new core.DartString(text).indexOf('() { f1()'));
            }
            expect(closure.name,isEmpty);
            expect(closure.localFunctions,hasLength(1));
            expect(op(Op.INDEX,closure.localFunctions,0).name,'f1');
            if (this.includeInformative) {
                expect(op(Op.INDEX,closure.localFunctions,0).nameOffset,new core.DartString(text).indexOf('f1()'));
            }
            expect(closure.localVariables,hasLength(1));
            expect(op(Op.INDEX,closure.localVariables,0).name,'v1');
            if (this.includeInformative) {
                expect(op(Op.INDEX,closure.localVariables,0).nameOffset,new core.DartString(text).indexOf('v1;'));
            }
        }
        {
            let closure : any = op(Op.INDEX,initializer.localFunctions,1);
            if (this.includeInformative) {
                expect(closure.nameOffset,new core.DartString(text).indexOf('() { f2()'));
            }
            expect(closure.name,isEmpty);
            expect(closure.localFunctions,hasLength(1));
            expect(op(Op.INDEX,closure.localFunctions,0).name,'f2');
            if (this.includeInformative) {
                expect(op(Op.INDEX,closure.localFunctions,0).nameOffset,new core.DartString(text).indexOf('f2()'));
            }
            expect(closure.localVariables,hasLength(1));
            expect(op(Op.INDEX,closure.localVariables,0).name,'v2');
            if (this.includeInformative) {
                expect(op(Op.INDEX,closure.localVariables,0).nameOffset,new core.DartString(text).indexOf('v2;'));
            }
        }
    }
    test_variable_name() {
        let variable : any = this.serializeVariableText('int i;',{
            variableName : 'i'});
        expect(variable.name,'i');
    }
    test_variable_no_flags() {
        let variable : any = this.serializeVariableText('int i;',{
            variableName : 'i'});
        expect(variable.isStatic,isFalse);
        expect(variable.isConst,isFalse);
        expect(variable.isFinal,isFalse);
    }
    test_variable_non_const() {
        let variable : any = this.serializeVariableText('int i = 0;',{
            variableName : 'i'});
        expect(variable.isConst,isFalse);
    }
    test_variable_non_final() {
        let variable : any = this.serializeVariableText('int i;',{
            variableName : 'i'});
        expect(variable.isFinal,isFalse);
    }
    test_variable_non_static() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C { int i; }').fields,0);
        expect(variable.isStatic,isFalse);
    }
    test_variable_non_static_top_level() {
        let variable : any = this.serializeVariableText('int i;',{
            variableName : 'i'});
        expect(variable.isStatic,isFalse);
    }
    test_variable_private() {
        this.serializeVariableText('int _i;',{
            variableName : '_i'});
        expect(this.unlinkedUnits[0].publicNamespace.names,isEmpty);
    }
    test_variable_static() {
        let variable : any = op(Op.INDEX,this.serializeClassText('class C { static int i; }').fields,0);
        expect(variable.isStatic,isTrue);
    }
    test_variable_type() {
        let variable : any = this.serializeVariableText('int i;',{
            variableName : 'i'});
        this.checkTypeRef(variable.type,'dart:core','int');
    }
    validateLinkedLibrary(linkedLibrary : any) : void {
        for(let unit of linkedLibrary.units) {
            for(let reference of unit.references) {
                switch (reference.kind) {
                    case ReferenceKind.classOrEnum:
                    case ReferenceKind.topLevelPropertyAccessor:
                    case ReferenceKind.topLevelFunction:
                    case ReferenceKind.typedef:
                        break;
                    case ReferenceKind.prefix:
                        expect(reference.dependency,0,{
                            reason : 'Nonzero dependency for prefix'});
                        break;
                    case ReferenceKind.unresolved:
                        expect(reference.dependency,0,{
                            reason : 'Nonzero dependency for undefined'});
                        break;
                    default:
                        expect(reference.dependency,0,{
                            reason : `Nonzero dependency for ${reference.kind}`});
                }
            }
        }
    }
    _assertAssignmentOperator(expr : string,expectedAssignOperator : any) : void {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText(`int a = 0;\nfinal v = ${expr};\n    `);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.pushInt,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.add,UnlinkedExprOperation.assignToRef,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.add),assignmentOperators : new core.DartList.literal(expectedAssignOperator),ints : new core.DartList.literal(1,2,3),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    _assertCodeRange(codeRange : any,offset : number,length : number) : void {
        expect(codeRange,isNotNull);
        expect(codeRange.offset,offset);
        expect(codeRange.length,length);
    }
    _assertExecutableVisible(code : string,f : any,visibleBegin : string,visibleEnd : string) : void {
        let expectedVisibleOffset : number = new core.DartString(code).indexOf(visibleBegin);
        let expectedVisibleLength : number = new core.DartString(code).indexOf(visibleEnd) - expectedVisibleOffset + 1;
        expect(f.visibleOffset,expectedVisibleOffset);
        expect(f.visibleLength,expectedVisibleLength);
    }
    _assertParameterVisible(code : string,p : any,visibleBegin : string,visibleEnd : string) : void {
        let expectedVisibleOffset : number = new core.DartString(code).indexOf(visibleBegin);
        let expectedVisibleLength : number = new core.DartString(code).indexOf(visibleEnd) - expectedVisibleOffset + 1;
        expect(p.visibleOffset,expectedVisibleOffset);
        expect(p.visibleLength,expectedVisibleLength);
    }
    _assertParameterZeroVisibleRange(p : any) : void {
        expect(p.visibleOffset,isZero);
        expect(p.visibleLength,isZero);
    }
    _assertRefPrefixPostfixIncrementDecrement(expr : string,expectedAssignmentOperator : any) : void {
        if (this.skipNonConstInitializers) {
            return;
        }
        let variable : any = this.serializeVariableText(`int a = 0;\nfinal v = ${expr};\n`);
        this.assertUnlinkedConst(variable.initializer.bodyExpr,{
            isValidConst : false,operators : new core.DartList.literal(UnlinkedExprOperation.assignToRef,UnlinkedExprOperation.pushInt,UnlinkedExprOperation.add),assignmentOperators : new core.DartList.literal(expectedAssignmentOperator),ints : new core.DartList.literal(2),strings : new core.DartList.literal(),referenceValidators : new core.DartList.literal((r : any) =>  {
                return this.checkTypeRef(r,null,'a',{
                    expectedKind : ReferenceKind.topLevelPropertyAccessor});
            })});
    }
    _assertVariableVisible(code : string,v : any,visibleBegin : string,visibleEnd : string) : void {
        let expectedVisibleOffset : number = new core.DartString(code).indexOf(visibleBegin);
        let expectedVisibleLength : number = new core.DartString(code).indexOf(visibleEnd) - expectedVisibleOffset + 1;
        expect(v.visibleOffset,expectedVisibleOffset);
        expect(v.visibleLength,expectedVisibleLength);
    }
    constructor() {
    }
    @defaultConstructor
    SummaryTest() {
        this.allowMissingFiles = false;
    }
}

export namespace _PrefixExpectation {
    export type Constructors = '_PrefixExpectation';
    export type Interface = Omit<_PrefixExpectation, Constructors>;
}
@DartClass
export class _PrefixExpectation {
    kind : any;

    name : string;

    absoluteUri : string;

    numTypeParameters : number;

    constructor(kind : any,name : string,_namedArguments? : {absoluteUri? : string,numTypeParameters? : number}) {
    }
    @defaultConstructor
    _PrefixExpectation(kind : any,name : string,_namedArguments? : {absoluteUri? : string,numTypeParameters? : number}) {
        let {absoluteUri,numTypeParameters} = Object.assign({
            "numTypeParameters" : 0}, _namedArguments );
        this.kind = kind;
        this.name = name;
        this.absoluteUri = absoluteUri;
        this.numTypeParameters = numTypeParameters;
    }
}

export class properties {
}
