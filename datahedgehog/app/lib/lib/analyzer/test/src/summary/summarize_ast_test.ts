/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/summarize_ast_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./summary_common";
import * as lib4 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LinkedSummarizeAstSpecTest);
    });
};
export namespace LinkerInputs {
    export type Constructors = 'LinkerInputs';
    export type Interface = Omit<LinkerInputs, Constructors>;
}
@DartClass
export class LinkerInputs {
    _allowMissingFiles : boolean;

    _uriToUnit : core.DartMap<string,any>;

    testDartUri : lib4.Uri;

    unlinkedDefiningUnit : any;

    _dependentLinkedLibraries : core.DartMap<string,any>;

    _dependentUnlinkedUnits : core.DartMap<string,any>;

    constructor(_allowMissingFiles : boolean,_uriToUnit : core.DartMap<string,any>,testDartUri : lib4.Uri,unlinkedDefiningUnit : any,_dependentLinkedLibraries : core.DartMap<string,any>,_dependentUnlinkedUnits : core.DartMap<string,any>) {
    }
    @defaultConstructor
    LinkerInputs(_allowMissingFiles : boolean,_uriToUnit : core.DartMap<string,any>,testDartUri : lib4.Uri,unlinkedDefiningUnit : any,_dependentLinkedLibraries : core.DartMap<string,any>,_dependentUnlinkedUnits : core.DartMap<string,any>) {
        this._allowMissingFiles = _allowMissingFiles;
        this._uriToUnit = _uriToUnit;
        this.testDartUri = testDartUri;
        this.unlinkedDefiningUnit = unlinkedDefiningUnit;
        this._dependentLinkedLibraries = _dependentLinkedLibraries;
        this._dependentUnlinkedUnits = _dependentUnlinkedUnits;
    }
    get linkedLibraries() : core.DartSet<string> {
        return this._uriToUnit.keys.toSet();
    }
    getDeclaredVariable(name : string) : string {
        return null;
    }
    getDependency(absoluteUri : string) : any {
        let sdkLibraries : core.DartMap<string,any> = lib3.SerializedMockSdk.instance.uriToLinkedLibrary;
        let linkedLibrary : any = (sdkLibraries.get(absoluteUri) || this._dependentLinkedLibraries.get(absoluteUri));
        if (op(Op.EQUALS,linkedLibrary,null) && !this._allowMissingFiles) {
            let librariesAvailable : core.DartSet<string> = sdkLibraries.keys.toSet();
            librariesAvailable.addAll(this._dependentLinkedLibraries.keys);
            fail(`Linker unexpectedly requested LinkedLibrary for "${absoluteUri}".` + `  Libraries available: ${librariesAvailable.toList()}`);
        }
        return linkedLibrary;
    }
    getUnit(absoluteUri : string) : any {
        if (absoluteUri == null) {
            return null;
        }
        let unit : any = ((this._uriToUnit.get(absoluteUri) || lib3.SerializedMockSdk.instance.uriToUnlinkedUnit.get(absoluteUri)) || this._dependentUnlinkedUnits.get(absoluteUri));
        if (op(Op.EQUALS,unit,null) && !this._allowMissingFiles) {
            fail(`Linker unexpectedly requested unit for "${absoluteUri}".`);
        }
        return unit;
    }
}

export namespace SummaryLinkerTest {
    export type Constructors = 'SummaryLinkerTest';
    export type Interface = Omit<SummaryLinkerTest, Constructors>;
}
@DartClass
export class SummaryLinkerTest {
    _filesToLink : _FilesToLink;

    @AbstractProperty
    get allowMissingFiles() : boolean{ throw 'abstract'}
    addBundle(path : string,bundle : any) : void {
        this._filesToLink.summaryDataStore.addBundle(path,bundle);
    }
    addNamedSource(filePath : string,contents : string) : any {
        let unit : any = this._parseText(contents);
        let unlinkedUnit : any = serializeAstUnlinked(unit);
        this._filesToLink.uriToUnit.set(lib3.absUri(filePath),unlinkedUnit);
        return null;
    }
    createLinkerInputs(text : string,_namedArguments? : {path? : string,uri? : string}) : LinkerInputs {
        let {path,uri} = Object.assign({
            "path" : '/test.dart'}, _namedArguments );
        uri = ( uri ) || ( lib3.absUri(path) );
        let testDartUri : lib4.Uri = lib4.Uri.parse(uri);
        let unlinkedDefiningUnit : any = this.createUnlinkedSummary(testDartUri,text);
        this._filesToLink.uriToUnit.set(testDartUri.toString(),unlinkedDefiningUnit);
        let linkerInputs : LinkerInputs = new LinkerInputs(this.allowMissingFiles,this._filesToLink.uriToUnit,testDartUri,unlinkedDefiningUnit,this._filesToLink.summaryDataStore.linkedMap,this._filesToLink.summaryDataStore.unlinkedMap);
        this._filesToLink = new _FilesToLink();
        return linkerInputs;
    }
    createPackageBundle(text : string,_namedArguments? : {path? : string,uri? : string}) : any {
        let {path,uri} = Object.assign({
            "path" : '/test.dart'}, _namedArguments );
        let assembler : any = new bare.createInstance(any,null);
        assembler.recordDependencies(this._filesToLink.summaryDataStore);
        let linkerInputs : LinkerInputs = this.createLinkerInputs(text,{
            path : path,uri : uri});
        let linkedLibraries : core.DartMap<string,any> = link(linkerInputs.linkedLibraries,linkerInputs.getDependency.bind(linkerInputs),linkerInputs.getUnit.bind(linkerInputs),linkerInputs.getDeclaredVariable.bind(linkerInputs),true);
        linkedLibraries.forEach(assembler.addLinkedLibrary);
        linkerInputs._uriToUnit.forEach((uri : string,unit : any) =>  {
            assembler.addUnlinkedUnitWithHash(uri,unit,'HASH');
        });
        return assembler.assemble();
    }
    createUnlinkedSummary(uri : lib4.Uri,text : string) : any {
        return serializeAstUnlinked(this._parseText(text));
    }
    _parseText(text : string) : any {
        let reader : any = new bare.createInstance(any,null,text);
        let scanner : any = new bare.createInstance(any,null,null,reader,AnalysisErrorListener.NULL_LISTENER);
        let token : any = scanner.tokenize();
        let parser : any = new bare.createInstance(any,null,null,AnalysisErrorListener.NULL_LISTENER);
        parser.enableAssertInitializer = true;
        let unit : any = parser.parseCompilationUnit(token);
        unit.lineInfo = new bare.createInstance(any,null,scanner.lineStarts);
        return unit;
    }
    constructor() {
    }
    @defaultConstructor
    SummaryLinkerTest() {
        this._filesToLink = new _FilesToLink();
    }
}

export namespace _FilesToLink {
    export type Constructors = '_FilesToLink';
    export type Interface = Omit<_FilesToLink, Constructors>;
}
@DartClass
export class _FilesToLink {
    uriToUnit : core.DartMap<string,any>;

    summaryDataStore : any;

    constructor() {
    }
    @defaultConstructor
    _FilesToLink() {
        this.uriToUnit = new core.DartMap.literal([
        ]);
        this.summaryDataStore = new bare.createInstance(any,null,new core.DartList.literal(),{
            recordDependencyInfo : true});
    }
}

export namespace LinkedSummarizeAstTest {
    export type Constructors = SummaryLinkerTest.Constructors | 'LinkedSummarizeAstTest';
    export type Interface = Omit<LinkedSummarizeAstTest, Constructors>;
}
@DartClass
@With(lib3.SummaryTest)
export class LinkedSummarizeAstTest extends SummaryLinkerTest implements lib3.SummaryTest.Interface {
    @Abstract
    addNamedSource(filePath : string,contents : string) : any {
        throw 'from mixin';
    }
    @Abstract
    assertUnlinkedConst(constExpr : any,_namedArguments? : {isValidConst? : boolean,operators? : core.DartList<any>,assignmentOperators? : core.DartList<any>,ints? : core.DartList<number>,doubles? : core.DartList<double>,strings? : core.DartList<string>,referenceValidators? : core.DartList<(entityRef : any) => void>}) : void {
        let {isValidConst,operators,assignmentOperators,ints,doubles,strings,referenceValidators} = Object.assign({
            "isValidConst" : true,
            "operators" : new core.DartList.literal<any>(),
            "assignmentOperators" : new core.DartList.literal<any>(),
            "ints" : new core.DartList.literal<number>(),
            "doubles" : new core.DartList.literal<double>(),
            "strings" : new core.DartList.literal<string>(),
            "referenceValidators" : new core.DartList.literal<(entityRef : any) => void>()}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkAnnotationA(annotations : core.DartList<any>) : void {
        throw 'from mixin';
    }
    @Abstract
    checkConstCycle(className : string,_namedArguments? : {name? : string,hasCycle? : boolean}) : void {
        let {name,hasCycle} = Object.assign({
            "name" : '',
            "hasCycle" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkDependency(dependency : number,absoluteUri : string) : void {
        throw 'from mixin';
    }
    @Abstract
    checkDependencyParts(dependency : any,relativeUris : core.DartList<string>) : void {
        throw 'from mixin';
    }
    @Abstract
    checkDocumentationComment(documentationComment : any,text : string) : void {
        throw 'from mixin';
    }
    @Abstract
    checkDynamicTypeRef(typeRef : any) : void {
        throw 'from mixin';
    }
    @Abstract
    checkExportName(exportName : any,absoluteUri : string,expectedName : string,expectedKind : any,_namedArguments? : {expectedTargetUnit? : number}) : void {
        let {expectedTargetUnit} = Object.assign({
            "expectedTargetUnit" : 0}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkHasDependency(relativeUri : string,_namedArguments? : {fullyLinked? : boolean}) : number {
        let {fullyLinked} = Object.assign({
            "fullyLinked" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkInferredTypeSlot(slotId : number,absoluteUri : string,expectedName : string,_namedArguments? : {numTypeArguments? : number,expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number,onlyInStrongMode? : boolean}) : void {
        let {numTypeArguments,expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters,onlyInStrongMode} = Object.assign({
            "numTypeArguments" : 0,
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0,
            "onlyInStrongMode" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkLacksDependency(relativeUri : string) : void {
        throw 'from mixin';
    }
    @Abstract
    checkLinkedDynamicTypeRef(typeRef : any) : void {
        throw 'from mixin';
    }
    @Abstract
    checkLinkedTypeRef(typeRef : any,absoluteUri : string,expectedName : string,_namedArguments? : {numTypeArguments? : number,expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number}) : void {
        let {numTypeArguments,expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters} = Object.assign({
            "numTypeArguments" : 0,
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkLinkedTypeSlot(slotId : number,absoluteUri : string,expectedName : string,_namedArguments? : {numTypeArguments? : number,expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number}) : void {
        let {numTypeArguments,expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters} = Object.assign({
            "numTypeArguments" : 0,
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkParamTypeRef(typeRef : any,deBruijnIndex : number) : void {
        throw 'from mixin';
    }
    @Abstract
    checkPrefix(prefixReference : number,name : string) : void {
        throw 'from mixin';
    }
    @Abstract
    checkReferenceIndex(referenceIndex : number,absoluteUri : string,expectedName : string,_namedArguments? : {expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number,localIndex? : number,unresolvedHasName? : boolean}) : any {
        let {expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters,localIndex,unresolvedHasName} = Object.assign({
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0,
            "localIndex" : 0,
            "unresolvedHasName" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkTypeRef(typeRef : any,absoluteUri : string,expectedName : string,_namedArguments? : {expectedPrefix? : string,prefixExpectations? : core.DartList<lib3._PrefixExpectation>,numTypeArguments? : number,expectedKind? : any,expectedTargetUnit? : number,linkedSourceUnit? : any,unlinkedSourceUnit? : any,numTypeParameters? : number,unresolvedHasName? : boolean}) : void {
        let {expectedPrefix,prefixExpectations,numTypeArguments,expectedKind,expectedTargetUnit,linkedSourceUnit,unlinkedSourceUnit,numTypeParameters,unresolvedHasName} = Object.assign({
            "numTypeArguments" : 0,
            "expectedKind" : ReferenceKind.classOrEnum,
            "expectedTargetUnit" : 0,
            "numTypeParameters" : 0,
            "unresolvedHasName" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkUnresolvedTypeRef(typeRef : any,expectedPrefix : string,expectedName : string,_namedArguments? : {linkedSourceUnit? : any,unlinkedSourceUnit? : any}) : void {
        let {linkedSourceUnit,unlinkedSourceUnit} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    checkVoidTypeRef(typeRef : any) : void {
        throw 'from mixin';
    }
    @Abstract
    fail_invalid_prefix_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    fail_invalid_prefix_type_parameter() : any {
        throw 'from mixin';
    }
    @Abstract
    fail_invalid_prefix_void() : any {
        throw 'from mixin';
    }
    @Abstract
    findClass(className : string,_namedArguments? : {failIfAbsent? : boolean,unit? : any}) : any {
        let {failIfAbsent,unit} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    findEnum(enumName : string,_namedArguments? : {failIfAbsent? : boolean,unit? : any}) : any {
        let {failIfAbsent,unit} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    findExecutable(executableName : string,_namedArguments? : {executables? : core.DartList<any>,failIfAbsent? : boolean}) : any {
        let {executables,failIfAbsent} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    findTypedef(typedefName : string,_namedArguments? : {failIfAbsent? : boolean,unit? : any}) : any {
        let {failIfAbsent,unit} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    findVariable(variableName : string,_namedArguments? : {variables? : core.DartList<any>,failIfAbsent? : boolean}) : any {
        let {variables,failIfAbsent} = Object.assign({
            "failIfAbsent" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    getTypeRefForSlot(slotId : number,_namedArguments? : {linkedSourceUnit? : any}) : any {
        let {linkedSourceUnit} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    serializeClassText(text : string,_namedArguments? : {className? : string,allowErrors? : boolean}) : any {
        let {className,allowErrors} = Object.assign({
            "className" : 'C',
            "allowErrors" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    serializeEnumText(text : string,enumName? : string) : any {
        enumName = enumName || 'E';
        throw 'from mixin';
    }
    @Abstract
    serializeExecutableText(text : string,_namedArguments? : {executableName? : string,allowErrors? : boolean}) : any {
        let {executableName,allowErrors} = Object.assign({
            "executableName" : 'f',
            "allowErrors" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    serializeMethodText(text : string,executableName? : string) : any {
        executableName = executableName || 'f';
        throw 'from mixin';
    }
    @Abstract
    serializeTypedefText(text : string,typedefName? : string) : any {
        typedefName = typedefName || 'F';
        throw 'from mixin';
    }
    @Abstract
    serializeTypeText(text : string,_namedArguments? : {otherDeclarations? : string,allowErrors? : boolean}) : any {
        let {otherDeclarations,allowErrors} = Object.assign({
            "otherDeclarations" : '',
            "allowErrors" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    serializeVariableText(text : string,_namedArguments? : {variableName? : string,allowErrors? : boolean}) : any {
        let {variableName,allowErrors} = Object.assign({
            "variableName" : 'v',
            "allowErrors" : false}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    test_apiSignature() : any {
        throw 'from mixin';
    }
    @Abstract
    test_apiSignature_excludeBody_constructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_apiSignature_excludeBody_method() : any {
        throw 'from mixin';
    }
    @Abstract
    test_apiSignature_excludeBody_topLevelFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_bottom_reference_shared() : any {
        throw 'from mixin';
    }
    @Abstract
    test_cascaded_export_hide_hide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_cascaded_export_hide_show() : any {
        throw 'from mixin';
    }
    @Abstract
    test_cascaded_export_show_hide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_cascaded_export_show_show() : any {
        throw 'from mixin';
    }
    @Abstract
    test_cascaded_import_hide_hide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_cascaded_import_hide_show() : any {
        throw 'from mixin';
    }
    @Abstract
    test_cascaded_import_show_hide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_cascaded_import_show_show() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_abstract() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_abstract() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_concrete() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_flag() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_mixin_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_no_implicit_constructors() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_reference_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_reference_generic_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_alias_supertype() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_codeRange() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_concrete() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_constMembers() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_constMembers_constructors() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_documented_tripleSlash() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_documented_with_references() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_documented_with_with_windows_line_endings() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_interface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_interface_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_mixin() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_mixin_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_name() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_no_flags() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_no_interface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_no_mixins() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_no_type_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_non_alias_flag() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_reference_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_reference_generic_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_superclass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_superclass_explicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_type_param_bound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_type_param_f_bound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_type_param_f_bound_self_ref() : any {
        throw 'from mixin';
    }
    @Abstract
    test_class_type_param_no_bound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_closure_executable_with_bottom_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_closure_executable_with_imported_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_closure_executable_with_return_type_from_closure() : any {
        throw 'from mixin';
    }
    @Abstract
    test_closure_executable_with_unimported_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_add() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_and() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_bitAnd() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_bitOr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_bitShiftLeft() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_bitShiftRight() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_bitXor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_divide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_equal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_equal_not() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_floorDivide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_greater() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_greaterEqual() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_less() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_lessEqual() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_modulo() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_multiply() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_or() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_qq() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_binary_subtract() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_classMember_shadows_typeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_conditional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_constructorParam_shadows_classMember() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_constructorParam_shadows_typeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_functionExpression() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_functionExpression_asArgument() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_functionExpression_asArgument_multiple() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_functionExpression_inConstructorInitializers() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_generic_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_generic_named_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_generic_named_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_generic_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_generic_unnamed_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_generic_unnamed_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_named_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_named_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_unnamed_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_unnamed_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_unresolved_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_unresolved_named2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_unresolved_named_prefixed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_unresolved_named_prefixed2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeConstructor_unresolved_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_invokeMethodRef_identical() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_classConstField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_classConstField_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_identifierTarget() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_identifierTarget_classConstField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_identifierTarget_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_identifierTarget_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_parenthesizedBinaryTarget() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_parenthesizedStringTarget() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_length_stringLiteralTarget() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_makeSymbol() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_makeTypedList() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_makeTypedList_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_makeTypedMap() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_makeTypedMap_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_makeUntypedList() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_makeUntypedMap() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_parenthesized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_prefix_complement() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_prefix_negate() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_prefix_not() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushDouble() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushFalse() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushInt() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushInt_max() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushInt_negative() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushLongInt() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushLongInt_min2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushLongInt_min3() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_class() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_enum() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_enumValue() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_enumValue_viaImport() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_enumValues() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_enumValues_viaImport() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_field() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_field_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_field_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_field_simpleIdentifier() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_staticGetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_staticGetter_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_staticGetter_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_staticMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_staticMethod_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_staticMethod_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_staticMethod_simpleIdentifier() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelFunction_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelFunction_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelGetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelGetter_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelGetter_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelVariable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelVariable_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_topLevelVariable_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_typeParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_unresolved_prefix0() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_unresolved_prefix1() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushReference_unresolved_prefix2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushString_adjacent() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushString_adjacent_interpolation() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushString_interpolation() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushString_simple() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constExpr_pushTrue() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_anonymous() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_const_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_factory() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_assertInvocation() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_assertInvocation_message() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_field() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_field_withParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_notConst() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_superInvocation_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_superInvocation_namedExpression() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_superInvocation_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_thisInvocation_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_thisInvocation_namedExpression() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializers_thisInvocation_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_explicit_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_function_typed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_function_typed_explicit_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_function_typed_implicit_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_function_typed_no_parameters() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_function_typed_parameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_function_typed_parameter_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_function_typed_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_implicit_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_name() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_named_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_non_function_typed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_positional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_positional_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_required() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializing_formal_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_non_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_non_factory() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_param_inferred_type_explicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_param_inferred_type_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_named_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_named_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_named_imported_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_named_prefixed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_named_prefixed_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_unnamed_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_unnamed_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_unnamed_imported_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_unnamed_prefixed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_factory_unnamed_prefixed_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_thisInvocation_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_redirected_thisInvocation_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_return_type_parameterized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_withCycles_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_withCycles_nonConst() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_redirectToImplicitConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_redirectToNonConstConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_redirectToSymbolConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToEnum() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToEnumValue() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToEnumValues() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToGenericParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToGenericParameter_asSupertype() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToStaticMethod_inOtherClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToStaticMethod_inSameClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToTopLevelFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToTypedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToUndefinedName() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToUndefinedName_viaPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_referenceToUndefinedName_viaPrefix_nonExistentFile() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_trivial() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaFactoryRedirect() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaFinalField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaLength() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaNamedConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaOrdinaryRedirect() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaOrdinaryRedirect_suppressSupertype() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaRedirectArgument() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaStaticField_inOtherClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaStaticField_inSameClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaSuperArgument() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaSupertype() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaSupertype_Enum() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaSupertype_explicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaSupertype_explicit_undefined() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaSupertype_withDefaultTypeArgument() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaSupertype_withTypeArgument() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaTopLevelVariable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaTopLevelVariable_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructorCycle_viaTopLevelVariable_importedViaPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_export_to_export_unused() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_export_unused() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_to_export() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_to_export_in_subdirs_absolute_export() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_to_export_in_subdirs_absolute_import() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_to_export_in_subdirs_relative() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_to_export_loop() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_to_export_transitive_closure() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_to_export_unused() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_transitive_closure() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_import_unused() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_parts() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dependencies_parts_relative_to_importing_library() : any {
        throw 'from mixin';
    }
    @Abstract
    test_elements_in_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_enum() : any {
        throw 'from mixin';
    }
    @Abstract
    test_enum_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_enum_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_enum_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_enum_value_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_enum_value_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_abstract() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_concrete() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_function() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_function_async() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_function_asyncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_function_explicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_function_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_function_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_getter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_getter_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_getter_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_getter_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_getter_type_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localFunctions() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localLabels_inMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localLabels_inTopLevelFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localLabels_inTopLevelGetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localLabels_namedExpressionLabel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_catch() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_catch_noVariables() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_empty() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_forEachLoop() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_forEachLoop_outside() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_forLoop() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_forLoop_noVariables() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_inConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_inLocalFunctions() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_inMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_inTopLevelFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_localVariables_inTopLevelGetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_function() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_function_async() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_function_asyncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_function_explicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_function_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_getter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_getter_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_getter_static() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_setter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_setter_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_member_setter_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_name() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_no_flags() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_non_static() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_non_static_top_level() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_operator() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_operator_abstract() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_operator_equal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_operator_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_operator_greater_equal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_operator_index() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_operator_index_set() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_operator_less_equal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_codeRange() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed_explicit_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed_param_none() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed_param_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed_return_type_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed_return_type_void() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_function_typed_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_isFinal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_kind_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_kind_named_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_kind_positional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_kind_positional_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_kind_required() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_name() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_no_flags() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_non_function_typed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_none() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_of_constructor_no_covariance() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_of_method_covariance() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_of_param_no_covariance() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_of_setter_covariance() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_of_static_method_no_covariance() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_of_top_level_function_no_covariance() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_type_explicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_type_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_param_type_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_return_type_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_return_type_void() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_setter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_setter_external() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_setter_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_setter_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_setter_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_static() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_type_param_f_bound_function() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_type_param_f_bound_method() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_type_param_f_bound_self_ref_function() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_type_param_f_bound_self_ref_method() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_type_param_in_parameter_function() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_type_param_in_parameter_method() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_type_param_in_return_type_function() : any {
        throw 'from mixin';
    }
    @Abstract
    test_executable_type_param_in_return_type_method() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_class() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_class_alias() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_configurations() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_dependency() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_enum() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_from_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_function() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_getter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_hide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_hide_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_missing() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_names_excludes_names_from_library() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_no_combinators() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_not_shadowed_by_prefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_offset() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_setter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_shadowed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_shadowed_variable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_shadowed_variable_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_shadowed_variable_final() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_show() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_show_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_typedef_genericFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_uri() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_uri_invalid() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_uri_nullStringValue() : any {
        throw 'from mixin';
    }
    @Abstract
    test_export_variable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_assign() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_bitAnd() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_bitOr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_bitXor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_divide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_floorDivide() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_ifNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_minus() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_modulo() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_multiply() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_plus() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_shiftLeft() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignOperator_shiftRight() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToIndex_ofFieldSequence() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToIndex_ofIndexExpression() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToIndex_ofTopLevelVariable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToProperty_ofInstanceCreation() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_classStaticField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_fieldSequence() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_postfixDecrement() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_postfixIncrement() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_prefixDecrement() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_prefixIncrement() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_topLevelVariable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_topLevelVariable_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_assignToRef_topLevelVariable_imported_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_cascadeSection_assignToIndex() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_cascadeSection_assignToProperty() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_cascadeSection_embedded() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_cascadeSection_invokeMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_extractIndex_ofClassField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_extractProperty_ofInvokeConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_functionExpression_asArgument() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_functionExpression_asArgument_multiple() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_functionExpression_withBlockBody() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_functionExpression_withExpressionBody() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_functionExpressionInvocation_withBlockBody() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_functionExpressionInvocation_withExpressionBody() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_noTypeInferenceNeeded() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToOuterParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToParam_methodCall() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToParam_methodCall_prefixed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToParam_outOfScope() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToParam_prefixedIdentifier() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToParam_prefixedIdentifier_assign() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToParam_prefixedPrefixedIdentifier() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_inClosure_refersToParam_prefixedPrefixedIdentifier_assign() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_invalid_typeParameter_asPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_invokeMethod_instance() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_invokeMethod_withTypeParameters() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_invokeMethodRef_instance() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_invokeMethodRef_static_importedWithPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_invokeMethodRef_with_reference_arg() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_invokeMethodRef_withTypeParameters() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_makeTypedList() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_makeTypedMap() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_makeUntypedList() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_makeUntypedMap() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_super() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_this() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_throwException() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_typeCast() : any {
        throw 'from mixin';
    }
    @Abstract
    test_expr_typeCheck() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_final() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_final_notConstExpr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_final_typeParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_formal_param_inferred_type_explicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_formal_param_inferred_type_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_inferred_type_nonstatic_explicit_initialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_inferred_type_nonstatic_explicit_uninitialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_inferred_type_nonstatic_implicit_initialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_inferred_type_nonstatic_implicit_uninitialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_inferred_type_static_explicit_initialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_inferred_type_static_implicit_initialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_inferred_type_static_implicit_uninitialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_static() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_static_final() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_static_final_untyped() : any {
        throw 'from mixin';
    }
    @Abstract
    test_field_untyped() : any {
        throw 'from mixin';
    }
    @Abstract
    test_fully_linked_references_follow_other_references() : any {
        throw 'from mixin';
    }
    @Abstract
    test_function_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_function_inferred_type_implicit_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_function_inferred_type_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_generic_method_in_generic_class() : any {
        throw 'from mixin';
    }
    @Abstract
    test_getter_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_getter_inferred_type_nonstatic_explicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_getter_inferred_type_nonstatic_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_getter_inferred_type_static_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_implicit_dependencies_follow_other_dependencies() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_configurations() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_deferred() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_dependency() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_explicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_hide_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_missing() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_no_combinators() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_no_flags() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_non_deferred() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_of_file_with_missing_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_of_missing_export() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_offset() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_prefix_name() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_prefix_none() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_prefix_not_in_public_namespace() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_prefix_reference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_prefixes_take_precedence_over_imported_names() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_reference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_reference_merged_no_prefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_reference_merged_prefixed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_reference_merged_prefixed_separate_libraries() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_self() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_show_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_uri() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_uri_invalid() : any {
        throw 'from mixin';
    }
    @Abstract
    test_import_uri_nullStringValue() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_function_type_parameter_type_with_unrelated_type_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_keeps_leading_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_reference_shared_prefixed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_refers_to_bound_type_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_refers_to_function_typed_param_of_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_refers_to_function_typed_parameter_type_generic_class() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_refers_to_function_typed_parameter_type_other_lib() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_refers_to_method_function_typed_parameter_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_refers_to_nested_function_typed_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_refers_to_nested_function_typed_param_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_refers_to_setter_function_typed_parameter_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_skips_trailing_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_type_skips_unnecessary_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_initializer_executable_with_bottom_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_initializer_executable_with_imported_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_initializer_executable_with_return_type_from_closure() : any {
        throw 'from mixin';
    }
    @Abstract
    test_initializer_executable_with_return_type_from_closure_field() : any {
        throw 'from mixin';
    }
    @Abstract
    test_initializer_executable_with_return_type_from_closure_local() : any {
        throw 'from mixin';
    }
    @Abstract
    test_initializer_executable_with_unimported_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_library_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_library_name_with_spaces() : any {
        throw 'from mixin';
    }
    @Abstract
    test_library_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_library_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_library_with_missing_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_lineStarts() : any {
        throw 'from mixin';
    }
    @Abstract
    test_linked_reference_reuse() : any {
        throw 'from mixin';
    }
    @Abstract
    test_linked_type_dependency_reuse() : any {
        throw 'from mixin';
    }
    @Abstract
    test_local_names_take_precedence_over_imported_names() : any {
        throw 'from mixin';
    }
    @Abstract
    test_localNameShadowsImportPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_classDeclaration() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_classTypeAlias() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_named_prefixed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_named_prefixed_unresolved_class() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_named_prefixed_unresolved_constructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_named_unresolved_class() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_named_unresolved_constructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_unnamed_prefixed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_unnamed_prefixed_unresolved() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_unnamed_unresolved() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructor_call_with_args() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructorDeclaration_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_constructorDeclaration_unnamed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_enumDeclaration() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_exportDirective() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_fieldDeclaration() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_fieldFormalParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_fieldFormalParameter_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_functionDeclaration_function() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_functionDeclaration_getter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_functionDeclaration_setter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_functionTypeAlias() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_functionTypedFormalParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_functionTypedFormalParameter_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_importDirective() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_invalid_assignable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_invalid_instanceCreation_argument_super() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_invalid_instanceCreation_argument_this() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_libraryDirective() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_methodDeclaration_getter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_methodDeclaration_method() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_methodDeclaration_setter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_multiple_annotations() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_partDirective() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_prefixed_variable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_prefixed_variable_unresolved() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_simpleFormalParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_simpleFormalParameter_withDefault() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_topLevelVariableDeclaration() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_typeParameter_ofClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_typeParameter_ofClassTypeAlias() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_typeParameter_ofFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_typeParameter_ofTypedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_metadata_variable_unresolved() : any {
        throw 'from mixin';
    }
    @Abstract
    test_method_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_method_inferred_type_nonstatic_explicit_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_method_inferred_type_nonstatic_explicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_method_inferred_type_nonstatic_implicit_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_method_inferred_type_nonstatic_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_method_inferred_type_static_implicit_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_method_inferred_type_static_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_nested_generic_functions() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parameter_visibleRange_abstractMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parameter_visibleRange_function_blockBody() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parameter_visibleRange_function_emptyBody() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parameter_visibleRange_function_expressionBody() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parameter_visibleRange_inFunctionTypedParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parameter_visibleRange_invalid_fieldFormalParameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parameter_visibleRange_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_part_declaration() : any {
        throw 'from mixin';
    }
    @Abstract
    test_part_declaration_invalidUri_nullStringValue() : any {
        throw 'from mixin';
    }
    @Abstract
    test_part_isPartOf() : any {
        throw 'from mixin';
    }
    @Abstract
    test_part_uri_invalid() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parts_defining_compilation_unit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_parts_included() : any {
        throw 'from mixin';
    }
    @Abstract
    test_public_namespace_of_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_reference_zero() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_inferred_type_nonstatic_explicit_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_inferred_type_nonstatic_explicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_inferred_type_nonstatic_implicit_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_inferred_type_nonstatic_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_inferred_type_static_implicit_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_inferred_type_static_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_inferred_type_top_level_implicit_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_setter_inferred_type_top_level_implicit_return() : any {
        throw 'from mixin';
    }
    @Abstract
    test_slot_reuse() : any {
        throw 'from mixin';
    }
    @Abstract
    test_syntheticFunctionType_genericClosure() : any {
        throw 'from mixin';
    }
    @Abstract
    test_syntheticFunctionType_genericClosure_inGenericFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_syntheticFunctionType_inGenericClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_syntheticFunctionType_inGenericFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_explicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_explicit_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_explicit_dynamic_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_explicit_dynamic_int() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_explicit_dynamic_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_explicit_String_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_explicit_String_int() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_explicit_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_implicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_implicit_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_implicit_typedef_withBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_arguments_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_invalid_typeParameter_asPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_codeRange() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_not_shadowed_by_constructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_not_shadowed_by_field_in_extends() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_not_shadowed_by_field_in_implements() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_not_shadowed_by_field_in_with() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_not_shadowed_by_method_parameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_not_shadowed_by_setter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_not_shadowed_by_typedef_parameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_shadowed_by_field() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_shadowed_by_getter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_shadowed_by_method() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_param_shadowed_by_type_param() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_from_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_from_part_withPrefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_class_argument() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_import_of_export() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_import_of_export_via_prefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_imported_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_imported_part_with_prefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_internal_class() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_internal_class_alias() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_internal_enum() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_local_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_nonexistent_file_via_prefix() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_type_visible_via_multiple_import_prefixes() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_reference_to_typedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_unit_counts_unreferenced_units() : any {
        throw 'from mixin';
    }
    @Abstract
    test_type_unresolved() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_codeRange() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_genericFunction_reference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_genericFunction_typeNames() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_genericFunction_typeParameters() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_name() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_param_none() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_param_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_reference_generic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_reference_generic_imported() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_return_type_explicit() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_type_param_in_parameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_type_param_in_return_type() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_type_param_none() : any {
        throw 'from mixin';
    }
    @Abstract
    test_typedef_type_param_order() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unit_codeRange() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unresolved_export() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unresolved_import() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unresolved_part() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unresolved_reference_in_multiple_parts() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unresolved_reference_shared() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unused_type_parameter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_codeRange() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_documented() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_explicit_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_final_top_level() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_final_top_level_untyped() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_implicit_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_inferred_type_explicit_initialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_inferred_type_implicit_initialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_inferred_type_implicit_uninitialized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_initializer_literal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_initializer_noInitializer() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_initializer_withLocals() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_name() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_no_flags() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_non_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_non_final() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_non_static() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_non_static_top_level() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_private() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_static() : any {
        throw 'from mixin';
    }
    @Abstract
    test_variable_type() : any {
        throw 'from mixin';
    }
    @Abstract
    validateLinkedLibrary(linkedLibrary : any) : void {
        throw 'from mixin';
    }
    @Abstract
    _assertAssignmentOperator(expr : string,expectedAssignOperator : any) : void {
        throw 'from mixin';
    }
    @Abstract
    _assertCodeRange(codeRange : any,offset : number,length : number) : void {
        throw 'from mixin';
    }
    @Abstract
    _assertExecutableVisible(code : string,f : any,visibleBegin : string,visibleEnd : string) : void {
        throw 'from mixin';
    }
    @Abstract
    _assertParameterVisible(code : string,p : any,visibleBegin : string,visibleEnd : string) : void {
        throw 'from mixin';
    }
    @Abstract
    _assertParameterZeroVisibleRange(p : any) : void {
        throw 'from mixin';
    }
    @Abstract
    _assertRefPrefixPostfixIncrementDecrement(expr : string,expectedAssignmentOperator : any) : void {
        throw 'from mixin';
    }
    @Abstract
    _assertVariableVisible(code : string,v : any,visibleBegin : string,visibleEnd : string) : void {
        throw 'from mixin';
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    linked : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unlinkedUnits : core.DartList<any>;

    linkerInputs : LinkerInputs;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get skipFullyLinkedData() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get skipNonConstInitializers() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    serializeLibraryText(text : string,_namedArguments? : {allowErrors? : boolean}) : void {
        let {allowErrors} = Object.assign({
            "allowErrors" : false}, _namedArguments );
        let uriToUnit : core.DartMap<string,any> = this._filesToLink.uriToUnit;
        this.linkerInputs = this.createLinkerInputs(text);
        this.linked = op(Op.INDEX,link(this.linkerInputs.linkedLibraries,this.linkerInputs.getDependency.bind(this.linkerInputs),this.linkerInputs.getUnit.bind(this.linkerInputs),(name : any) =>  {
            return null;
        },this.strongMode),this.linkerInputs.testDartUri.toString());
        expect(this.linked,isNotNull);
        this.validateLinkedLibrary(this.linked);
        this.unlinkedUnits = new core.DartList.literal<any>(this.linkerInputs.unlinkedDefiningUnit);
        for(let relativeUriStr of this.linkerInputs.unlinkedDefiningUnit.publicNamespace.parts) {
            let relativeUri : lib4.Uri;
            try {
                relativeUri = lib4.Uri.parse(relativeUriStr);
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    this.unlinkedUnits.add(new bare.createInstance(any,null));
                    continue;
                }
            }
            let unit : any = uriToUnit.get(resolveRelativeUri(this.linkerInputs.testDartUri,relativeUri).toString());
            if (op(Op.EQUALS,unit,null)) {
                if (!allowMissingFiles) {
                    fail(`Test referred to unknown unit ${relativeUriStr}`);
                }
            }else {
                this.unlinkedUnits.add(unit);
            }
        }
    }
    test_class_no_superclass() {
        let cls : any = this.serializeClassText('part of dart.core; class Object {}',{
            className : 'Object'});
        expect(cls.supertype,isNull);
        expect(cls.hasNoSupertype,isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinkedSummarizeAstTest() {
    }
}

export namespace LinkedSummarizeAstSpecTest {
    export type Constructors = LinkedSummarizeAstTest.Constructors | 'LinkedSummarizeAstSpecTest';
    export type Interface = Omit<LinkedSummarizeAstSpecTest, Constructors>;
}
@DartClass
export class LinkedSummarizeAstSpecTest extends LinkedSummarizeAstTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strongMode() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_bottom_reference_shared() {
        super.test_bottom_reference_shared();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_closure_executable_with_bottom_return_type() {
        super.test_closure_executable_with_bottom_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_closure_executable_with_imported_return_type() {
        super.test_closure_executable_with_imported_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_closure_executable_with_return_type_from_closure() {
        super.test_closure_executable_with_return_type_from_closure();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_closure_executable_with_unimported_return_type() {
        super.test_closure_executable_with_unimported_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_implicit_dependencies_follow_other_dependencies() {
        super.test_implicit_dependencies_follow_other_dependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_bottom_return_type() {
        super.test_initializer_executable_with_bottom_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_imported_return_type() {
        super.test_initializer_executable_with_imported_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_return_type_from_closure() {
        super.test_initializer_executable_with_return_type_from_closure();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_return_type_from_closure_field() {
        super.test_initializer_executable_with_return_type_from_closure_field();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_return_type_from_closure_local() {
        super.test_initializer_executable_with_return_type_from_closure_local();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_initializer_executable_with_unimported_return_type() {
        super.test_initializer_executable_with_unimported_return_type();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_inGenericClass() {
        super.test_syntheticFunctionType_inGenericClass();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_inGenericFunction() {
        super.test_syntheticFunctionType_inGenericFunction();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinkedSummarizeAstSpecTest() {
    }
}

export class properties {
}
