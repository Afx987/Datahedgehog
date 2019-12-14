/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/dart_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../utils";
import * as lib4 from "./../../generated/resolver_test_case";
import * as lib5 from "./../context/abstract_context";
import * as lib6 from "./../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(BuildCompilationUnitElementTaskTest);
        defineReflectiveTests(BuildDirectiveElementsTaskTest);
        defineReflectiveTests(BuildEnumMemberElementsTaskTest);
        defineReflectiveTests(BuildExportNamespaceTaskTest);
        defineReflectiveTests(BuildLibraryElementTaskTest);
        defineReflectiveTests(BuildPublicNamespaceTaskTest);
        defineReflectiveTests(BuildSourceExportClosureTaskTest);
        defineReflectiveTests(BuildTypeProviderTaskTest);
        defineReflectiveTests(ComputeConstantDependenciesTaskTest);
        defineReflectiveTests(ComputeConstantValueTaskTest);
        defineReflectiveTests(ComputeInferableStaticVariableDependenciesTaskTest);
        defineReflectiveTests(ComputeLibraryCycleTaskTest);
        defineReflectiveTests(ContainingLibrariesTaskTest);
        defineReflectiveTests(DartErrorsTaskTest);
        defineReflectiveTests(EvaluateUnitConstantsTaskTest);
        defineReflectiveTests(GatherUsedImportedElementsTaskTest);
        defineReflectiveTests(GatherUsedLocalElementsTaskTest);
        defineReflectiveTests(GenerateHintsTaskTest);
        defineReflectiveTests(GenerateLintsTaskTest);
        defineReflectiveTests(InferInstanceMembersInUnitTaskTest);
        defineReflectiveTests(InferStaticVariableTypesInUnitTaskTest);
        defineReflectiveTests(InferStaticVariableTypeTaskTest);
        defineReflectiveTests(LibraryErrorsReadyTaskTest);
        defineReflectiveTests(LibraryUnitErrorsTaskTest);
        defineReflectiveTests(ParseDartTaskTest);
        defineReflectiveTests(PartiallyResolveUnitReferencesTaskTest);
        defineReflectiveTests(ResolveDirectiveElementsTaskTest);
        defineReflectiveTests(ResolveInstanceFieldsInUnitTaskTest);
        defineReflectiveTests(ResolveLibraryTaskTest);
        defineReflectiveTests(ResolveLibraryTypeNamesTaskTest);
        defineReflectiveTests(ResolveTopLevelUnitTypeBoundsTaskTest);
        defineReflectiveTests(ResolveUnitTaskTest);
        defineReflectiveTests(ResolveUnitTypeNamesTaskTest);
        defineReflectiveTests(ResolveVariableReferencesTaskTest);
        defineReflectiveTests(ScanDartTaskTest);
        defineReflectiveTests(StrongModeInferenceTest);
        defineReflectiveTests(StrongModeVerifyUnitTaskTest);
        defineReflectiveTests(VerifyUnitTaskTest);
    });
};
export namespace GenerateLintsTaskTest_TestLinter {
    export type Constructors = 'GenerateLintsTaskTest_TestLinter';
    export type Interface = Omit<GenerateLintsTaskTest_TestLinter, Constructors>;
}
@DartClass
export class GenerateLintsTaskTest_TestLinter extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return 'GenerateLintsTaskTest_TestLinter';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getVisitor() : any {
        return new GenerateLintsTaskTest_AstVisitor(this);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenerateLintsTaskTest_TestLinter() {
    }
}

export namespace GenerateLintsTaskTest_AstVisitor {
    export type Constructors = 'GenerateLintsTaskTest_AstVisitor';
    export type Interface = Omit<GenerateLintsTaskTest_AstVisitor, Constructors>;
}
@DartClass
export class GenerateLintsTaskTest_AstVisitor extends any {
    linter : any;

    constructor(linter : any) {
    }
    @defaultConstructor
    GenerateLintsTaskTest_AstVisitor(linter : any) {
        this.linter = linter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassDeclaration(node : any) {
        if (!new core.DartRegExp('^([_]*)([A-Z]+[a-z0-9]*)+$').hasMatch(node.name.toString())) {
            this.linter.reporter.reportErrorForNode(properties._testLintCode,node,new core.DartList.literal());
        }
    }
}

export namespace _AbstractDartTaskTest {
    export type Constructors = lib5.AbstractContextTest.Constructors | '_AbstractDartTaskTest';
    export type Interface = Omit<_AbstractDartTaskTest, Constructors>;
}
@DartClass
export class _AbstractDartTaskTest extends lib5.AbstractContextTest {
    emptySource : any;

    errorListener : lib6.GatheringErrorListener;

    assertAssignmentStatementTypes(stmt : any,leftType : any,rightType : any) : void {
        let assgn : any = (stmt as any).expression;
        expect(assgn.leftHandSide.staticType,leftType);
        expect(assgn.rightHandSide.staticType,rightType);
    }
    assertIsInvalid(target : any,descriptor : any) : void {
        let entry : any = this.context.getCacheEntry(target);
        expect(entry.isInvalid(descriptor),isTrue);
    }
    assertIsValid(target : any,descriptor : any) : void {
        let entry : any = this.context.getCacheEntry(target);
        expect(entry.isValid(descriptor),isTrue);
    }
    assertSameResults(descriptors : core.DartList<any>) : void {
        descriptors.forEach((descriptor : any) =>  {
            let oldResult = this.oldOutputs.get(descriptor);
            let newResult = this.outputs.get(descriptor);
            expect(newResult,same(oldResult),{
                reason : descriptor.name});
        });
    }
    assertVariableDeclarationStatementTypes(stmt : any,varType : any,initializerType : any) : void {
        let decl : any = op(Op.INDEX,(stmt as any).variables.variables,0);
        this.assertVariableDeclarationTypes(decl,varType,initializerType);
    }
    assertVariableDeclarationTypes(decl : any,varType : any,initializerType : any) : void {
        expect(resolutionMap.elementDeclaredByVariableDeclaration(decl).type,varType);
        expect(decl.initializer.staticType,initializerType);
    }
    computeLibraryResults(sources : core.DartList<any>,result : any,_namedArguments? : {matcher? : any}) : core.DartList<any> {
        let {matcher} = Object.assign({
            "matcher" : null}, _namedArguments );
        var compute : (source : any) => any = (source : any) : any =>  {
            this.computeResult(new bare.createInstance(any,null,source,source),result,{
                matcher : matcher});
            return this.outputs.get(result);
        };
        return sources.map(compute).toList();
    }
    computeLibraryResultsMap(sources : core.DartList<any>,result : any,_namedArguments? : {matcher? : any}) : core.DartList<core.DartMap<any,any>> {
        let {matcher} = Object.assign({
            "matcher" : null}, _namedArguments );
        var compute : (source : any) => core.DartMap<any,any> = (source : any) : core.DartMap<any,any> =>  {
            this.computeResult(source,result,{
                matcher : matcher});
            return this.outputs;
        };
        return sources.map(compute).toList();
    }
    createScript(scriptContent : string) : any {
        let htmlContent : string = `<!DOCTYPE html>\n<html>\n  <head>\n    <title>test page</title>\n    <script type='application/dart'>${scriptContent}</script>\n  </head>\n  <body>Test</body>\n</html>\n`;
        let source : any = this.newSource('/test.html',htmlContent);
        return new bare.createInstance(any,null,source,new core.DartList.literal(new bare.createInstance(any,null,97,5,36,scriptContent)));
    }
    enableStrongMode() : void {
        let options : any = this.context.analysisOptions;
        options.strongMode = true;
        this.context.analysisOptions = options;
    }
    enableUriInPartOf() : void {
        let options : any = this.context.analysisOptions;
        options.enableUriInPartOf = true;
        this.context.analysisOptions = options;
    }
    setUp() : void {
        super.setUp();
        this.emptySource = this.newSource('/test.dart');
    }
    _fillErrorListener(result : any) : void {
        let errors : core.DartList<any> = op(Op.INDEX,this.task.outputs,result) as core.DartList<any>;
        expect(errors,isNotNull,{
            reason : result.name});
        this.errorListener = new lib6.GatheringErrorListener();
        this.errorListener.addAll(errors);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AbstractDartTaskTest() {
        this.errorListener = new lib6.GatheringErrorListener();
    }
}

export namespace BuildExportNamespaceTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'BuildExportNamespaceTaskTest';
    export type Interface = Omit<BuildExportNamespaceTaskTest, Constructors>;
}
@DartClass
export class BuildExportNamespaceTaskTest extends _AbstractDartTaskTest {
    test_perform_entryPoint() {
        let sourceA : any = this.newSource('/a.dart','library lib_a;\nexport \'b.dart\';\n');
        let sourceB : any = this.newSource('/b.dart','library lib_b;\nmain() {}\n');
        this.computeResult(sourceA,LIBRARY_ELEMENT4,{
            matcher : properties.isBuildExportNamespaceTask});
        let library : any = this.outputs.get(LIBRARY_ELEMENT4);
        let entryPoint : any = library.entryPoint;
        expect(entryPoint,isNotNull);
        expect(entryPoint.source,sourceB);
    }
    test_perform_hideCombinator() {
        let sourceA : any = this.newSource('/a.dart','library lib_a;\nexport \'b.dart\' hide B1;\nclass A1 {}\nclass A2 {}\nclass _A3 {}\n');
        this.newSource('/b.dart','library lib_b;\nclass B1 {}\nclass B2 {}\nclass B3 {}\nclass _B4 {}\n');
        this.newSource('/c.dart','library lib_c;\nclass C1 {}\nclass C2 {}\nclass C3 {}\n');
        this.computeResult(sourceA,LIBRARY_ELEMENT4,{
            matcher : properties.isBuildExportNamespaceTask});
        let library : any = this.outputs.get(LIBRARY_ELEMENT4);
        let namespace : any = library.exportNamespace;
        let definedKeys : core.DartIterable<string> = namespace.definedNames.keys;
        expect(definedKeys,unorderedEquals(new core.DartList.literal('A1','A2','B2','B3')));
    }
    test_perform_showCombinator() {
        let sourceA : any = this.newSource('/a.dart','library lib_a;\nexport \'b.dart\' show B1;\nclass A1 {}\nclass A2 {}\nclass _A3 {}\n');
        this.newSource('/b.dart','library lib_b;\nclass B1 {}\nclass B2 {}\nclass _B3 {}\n');
        this.computeResult(sourceA,LIBRARY_ELEMENT4,{
            matcher : properties.isBuildExportNamespaceTask});
        let library : any = this.outputs.get(LIBRARY_ELEMENT4);
        let namespace : any = library.exportNamespace;
        let definedKeys : core.DartIterable<string> = namespace.definedNames.keys;
        expect(definedKeys,unorderedEquals(new core.DartList.literal('A1','A2','B1')));
    }
    test_perform_showCombinator_setter() {
        let sourceA : any = this.newSource('/a.dart','library lib_a;\nexport \'b.dart\' show topLevelB;\nclass A {}\n');
        this.newSource('/b.dart','library lib_b;\nint topLevelB;\n');
        this.computeResult(sourceA,LIBRARY_ELEMENT4,{
            matcher : properties.isBuildExportNamespaceTask});
        let library : any = this.outputs.get(LIBRARY_ELEMENT4);
        let namespace : any = library.exportNamespace;
        let definedKeys : core.DartIterable<string> = namespace.definedNames.keys;
        expect(definedKeys,unorderedEquals(new core.DartList.literal('A','topLevelB','topLevelB=')));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuildExportNamespaceTaskTest() {
    }
}

export namespace BuildLibraryElementTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'BuildLibraryElementTaskTest';
    export type Interface = Omit<BuildLibraryElementTaskTest, Constructors>;
}
@DartClass
export class BuildLibraryElementTaskTest extends _AbstractDartTaskTest {
    librarySource : any;

    libraryUnit : any;

    libraryUnitElement : any;

    partUnits : core.DartList<any>;

    libraryElement : any;

    test_perform() {
        this.enableUriInPartOf();
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','library lib;\npart \'part1.dart\';\npart \'part2.dart\';\n'],
            ['/part1.dart','part of lib;\n'],
            ['/part2.dart','part of \'lib.dart\';\n']]));
        expect(this.outputs,hasLength(3));
        expect(this.outputs.get(BUILD_LIBRARY_ERRORS),isEmpty);
        expect(this.outputs.get(IS_LAUNCHABLE),isFalse);
        expect(this.libraryElement,isNotNull);
        expect(this.libraryElement.entryPoint,isNull);
        expect(this.libraryElement.source,same(this.librarySource));
        expect(this.libraryElement.definingCompilationUnit,this.libraryUnitElement);
        expect(this.libraryElement.parts,unorderedEquals(new core.DartList.literal(this.partUnits[0].element,this.partUnits[1].element)));
        expect((op(Op.INDEX,this.libraryUnit.directives,0) as any).element,same(this.libraryElement));
        expect((op(Op.INDEX,this.partUnits[0].directives,0) as any).element,same(this.libraryElement));
        expect((op(Op.INDEX,this.partUnits[1].directives,0) as any).element,same(this.libraryElement));
        let firstPart : any;
        let secondPart : any;
        if (op(Op.EQUALS,resolutionMap.elementDeclaredByCompilationUnit(this.partUnits[0]).uri,'part1.dart')) {
            firstPart = this.partUnits[0].element;
            secondPart = this.partUnits[1].element;
        }else {
            firstPart = this.partUnits[1].element;
            secondPart = this.partUnits[0].element;
        }
        expect(firstPart.uri,'part1.dart');
        expect(firstPart.uriOffset,18);
        expect(firstPart.uriEnd,30);
        expect((op(Op.INDEX,this.libraryUnit.directives,1) as any).element,same(firstPart));
        expect(secondPart.uri,'part2.dart');
        expect(secondPart.uriOffset,37);
        expect(secondPart.uriEnd,49);
        expect((op(Op.INDEX,this.libraryUnit.directives,2) as any).element,same(secondPart));
    }
    test_perform_error_missingLibraryDirectiveWithPart() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','part \'partA.dart\';\npart \'partB.dart\';\n'],
            ['/partA.dart','part of my_lib;\n        '],
            ['/partB.dart','part of my_lib;\n']]));
        if (this.context.analysisOptions.enableUriInPartOf) {
        }else {
            this._assertErrorsWithCodes(new core.DartList.literal(ResolverErrorCode.MISSING_LIBRARY_DIRECTIVE_WITH_PART));
        }
    }
    test_perform_error_missingLibraryDirectiveWithPart_noCommon() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','part \'partA.dart\';\npart \'partB.dart\';\n'],
            ['/partA.dart','part of libA;\n        '],
            ['/partB.dart','part of libB;\n']]));
        if (this.context.analysisOptions.enableUriInPartOf) {
        }else {
            this._assertErrorsWithCodes(new core.DartList.literal(ResolverErrorCode.MISSING_LIBRARY_DIRECTIVE_WITH_PART));
        }
    }
    test_perform_error_partDoesNotExist() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','library lib;\npart \'part.dart\';\n']]));
        this._assertErrorsWithCodes(new core.DartList.literal());
    }
    test_perform_error_partOfDifferentLibrary() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','library lib;\npart \'part.dart\';\n'],
            ['/part.dart','part of someOtherLib;\n']]));
        this._assertErrorsWithCodes(new core.DartList.literal(StaticWarningCode.PART_OF_DIFFERENT_LIBRARY));
    }
    test_perform_error_partOfNonPart() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','library lib;\npart \'part.dart\';\n'],
            ['/part.dart','// no part of\n']]));
        this._assertErrorsWithCodes(new core.DartList.literal(CompileTimeErrorCode.PART_OF_NON_PART));
    }
    test_perform_invalidUri_part() {
        let invalidUri : string = op(Op.EQUALS,this.resourceProvider.pathContext.separator,'/') ? '//////////' : '\\\\\\';
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart',`library lib;\npart '${invalidUri}';\n`]]));
        expect(this.libraryElement.parts,isEmpty);
    }
    test_perform_isLaunchable_inDefiningUnit() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','library lib;\nmain() {\n}\n']]));
        expect(this.outputs.get(IS_LAUNCHABLE),isTrue);
        expect(this.libraryElement.entryPoint,isNotNull);
    }
    test_perform_isLaunchable_inPartUnit() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','library lib;\npart \'part.dart\';\n'],
            ['/part.dart','part of lib;\nmain() {\n}\n']]));
        expect(this.outputs.get(IS_LAUNCHABLE),isTrue);
        expect(this.libraryElement.entryPoint,isNotNull);
    }
    test_perform_noSuchFilePart() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','library lib;\npart \'no-such-file.dart\';\n']]));
        expect(this.libraryElement.parts,hasLength(1));
        let part : any = op(Op.INDEX,this.libraryElement.parts,0);
        expect(part,isNotNull);
        expect(part.source,isNotNull);
        expect(part.library,same(this.libraryElement));
        expect(this.context.exists(part.source),isFalse);
    }
    test_perform_patchTopLevelAccessors() {
        this._performBuildTask(new core.DartMap.literal([
            ['/lib.dart','library lib;\npart \'part1.dart\';\npart \'part2.dart\';\n'],
            ['/part1.dart','part of lib;\nint get test => 0;\n'],
            ['/part2.dart','part of lib;\nvoid set test(_) {}\n']]));
        let unitElement1 : any = this.partUnits.singleWhere((u : any) =>  {
            return resolutionMap.elementDeclaredByCompilationUnit(u).name.endsWith('part1.dart');
        }).element;
        let unitElement2 : any = this.partUnits.singleWhere((u : any) =>  {
            return resolutionMap.elementDeclaredByCompilationUnit(u).name.endsWith('part2.dart');
        }).element;
        let getter : any = op(Op.INDEX,unitElement1.accessors,0);
        let setter : any = op(Op.INDEX,unitElement2.accessors,0);
        let variable : any = getter.variable;
        expect(getter.isGetter,isTrue);
        expect(setter.isSetter,isTrue);
        expect(variable,isNotNull);
        expect(setter.variable,same(variable));
        expect(unitElement1.topLevelVariables,new core.DartList.literal(variable));
        expect(unitElement2.topLevelVariables,new core.DartList.literal(variable));
    }
    _assertErrorsWithCodes(expectedErrorCodes : core.DartList<any>) : void {
        this._fillErrorListener(BUILD_LIBRARY_ERRORS);
        this.errorListener.assertErrorsWithCodes(expectedErrorCodes);
    }
    _performBuildTask(sourceMap : core.DartMap<string,string>) : void {
        let sources : core.DartList<any> = this.newSources(sourceMap);
        let libSource : any = sources.first;
        this.computeResult(libSource,LIBRARY_ELEMENT1,{
            matcher : properties.isBuildLibraryElementTask});
        this.libraryUnit = this.context.getCacheEntry(new bare.createInstance(any,null,libSource,libSource)).getValue(RESOLVED_UNIT1);
        this.libraryUnitElement = this.libraryUnit.element;
        this.librarySource = this.libraryUnitElement.source;
        this.libraryElement = this.outputs.get(LIBRARY_ELEMENT1);
        this.partUnits = op(Op.INDEX,this.task.inputs,BuildLibraryElementTask.PARTS_UNIT_INPUT) as core.DartList<any>;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuildLibraryElementTaskTest() {
    }
}

export namespace BuildPublicNamespaceTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'BuildPublicNamespaceTaskTest';
    export type Interface = Omit<BuildPublicNamespaceTaskTest, Constructors>;
}
@DartClass
export class BuildPublicNamespaceTaskTest extends _AbstractDartTaskTest {
    test_perform() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/lib.dart','library lib;\npart \'part.dart\';\na() {}\n_b() {}\n'],
            ['/part.dart','part of lib;\n_c() {}\nd() {}\n']]));
        this.computeResult(sources.first,LIBRARY_ELEMENT3,{
            matcher : properties.isBuildPublicNamespaceTask});
        let library : any = this.outputs.get(LIBRARY_ELEMENT3);
        let namespace : any = library.publicNamespace;
        expect(namespace.definedNames.keys,unorderedEquals(new core.DartList.literal('a','d')));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuildPublicNamespaceTaskTest() {
    }
}

export namespace BuildSourceExportClosureTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'BuildSourceExportClosureTaskTest';
    export type Interface = Omit<BuildSourceExportClosureTaskTest, Constructors>;
}
@DartClass
export class BuildSourceExportClosureTaskTest extends _AbstractDartTaskTest {
    getExportSourceClosure(outputs : core.DartMap<any,any>) : core.DartList<any> {
        return outputs.get(EXPORT_SOURCE_CLOSURE) as core.DartList<any>;
    }
    test_perform_exportClosure() {
        let sourceA : any = this.newSource('/a.dart','library lib_a;\nexport \'b.dart\';\n');
        let sourceB : any = this.newSource('/b.dart','library lib_b;\nexport \'c.dart\';\n');
        let sourceC : any = this.newSource('/c.dart','library lib_c;\nexport \'a.dart\';\n');
        let sourceD : any = this.newSource('/d.dart','library lib_d;\n');
        {
            this.computeResult(sourceA,EXPORT_SOURCE_CLOSURE,{
                matcher : properties.isBuildSourceExportClosureTask});
            let closure : core.DartList<any> = this.getExportSourceClosure(this.outputs);
            expect(closure,unorderedEquals(new core.DartList.literal(sourceA,sourceB,sourceC)));
        }
        {
            this.computeResult(sourceC,EXPORT_SOURCE_CLOSURE,{
                matcher : properties.isBuildSourceExportClosureTask});
            let closure : core.DartList<any> = this.getExportSourceClosure(this.outputs);
            expect(closure,unorderedEquals(new core.DartList.literal(sourceA,sourceB,sourceC)));
        }
        {
            this.computeResult(sourceD,EXPORT_SOURCE_CLOSURE,{
                matcher : properties.isBuildSourceExportClosureTask});
            let closure : core.DartList<any> = this.getExportSourceClosure(this.outputs);
            expect(closure,unorderedEquals(new core.DartList.literal(sourceD)));
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuildSourceExportClosureTaskTest() {
    }
}

export namespace BuildTypeProviderTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'BuildTypeProviderTaskTest';
    export type Interface = Omit<BuildTypeProviderTaskTest, Constructors>;
}
@DartClass
export class BuildTypeProviderTaskTest extends _AbstractDartTaskTest {
    test_perform() {
        this.computeResult(AnalysisContextTarget.request,TYPE_PROVIDER,{
            matcher : properties.isBuildTypeProviderTask});
        let typeProvider : any = this.outputs.get(TYPE_PROVIDER);
        expect(typeProvider,isNotNull);
        expect(typeProvider.boolType,isNotNull);
        expect(typeProvider.intType,isNotNull);
        expect(typeProvider.futureType,isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuildTypeProviderTaskTest() {
    }
}

export namespace ComputeConstantDependenciesTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ComputeConstantDependenciesTaskTest';
    export type Interface = Omit<ComputeConstantDependenciesTaskTest, Constructors>;
}
@DartClass
export class ComputeConstantDependenciesTaskTest extends _AbstractDartTaskTest {
    findClassAnnotation(unit : any,className : string) : any {
        for(let member of unit.declarations) {
            if (is(member, any) && op(Op.EQUALS,member.name.name,className)) {
                expect(member.metadata,hasLength(1));
                return op(Op.INDEX,member.metadata,0);
            }
        }
        fail('Annotation not found');
        return null;
    }
    test_annotation_with_args() {
        let source : any = this.newSource('/test.dart','const x = 1;\n@D(x) class C {}\nclass D { const D(value); }\n');
        let librarySpecificUnit : any = new bare.createInstance(any,null,source,source);
        this.computeResult(librarySpecificUnit,RESOLVED_UNIT1);
        let unit : any = this.outputs.get(RESOLVED_UNIT1);
        let compilationUnitElement : any = resolutionMap.elementDeclaredByCompilationUnit(unit);
        let accessors : core.DartList<any> = compilationUnitElement.accessors;
        let x : any = accessors.firstWhere((accessor : any) =>  {
            return accessor.isGetter && op(Op.EQUALS,accessor.name,'x');
        }).variable;
        let types : core.DartList<any> = compilationUnitElement.types;
        let constructorForD : any = op(Op.INDEX,types.firstWhere((cls : any) =>  {
            return op(Op.EQUALS,cls.name,'D');
        }).constructors,0);
        let annotation : any = this.findClassAnnotation(unit,'C');
        this.computeResult(resolutionMap.elementAnnotationForAnnotation(annotation),CONSTANT_DEPENDENCIES,{
            matcher : properties.isComputeConstantDependenciesTask});
        expect(this.outputs.get(CONSTANT_DEPENDENCIES).toSet(),new core.DartList.literal(x,constructorForD).toSet());
    }
    test_annotation_with_nonConstArg() {
        let source : any = this.newSource('/test.dart','class A {\n  const A(x);\n}\nclass C {\n  @A(const [(_) => null])\n  String s;\n}\n');
        let librarySpecificUnit : any = new bare.createInstance(any,null,source,source);
        this.computeResult(librarySpecificUnit,RESOLVED_UNIT1);
        let unit : any = this.outputs.get(RESOLVED_UNIT1);
        let classC : any = op(Op.INDEX,unit.declarations,1);
        let annotation : any = op(Op.INDEX,op(Op.INDEX,classC.members,0).metadata,0);
        this.computeResult(resolutionMap.elementAnnotationForAnnotation(annotation),CONSTANT_DEPENDENCIES,{
            matcher : properties.isComputeConstantDependenciesTask});
        expect(this.outputs.get(CONSTANT_DEPENDENCIES),hasLength(1));
    }
    test_annotation_without_args() {
        let source : any = this.newSource('/test.dart','const x = 1;\n@x class C {}\n');
        let librarySpecificUnit : any = new bare.createInstance(any,null,source,source);
        this.computeResult(librarySpecificUnit,RESOLVED_UNIT1);
        let unit : any = this.outputs.get(RESOLVED_UNIT1);
        let accessors : core.DartList<any> = resolutionMap.elementDeclaredByCompilationUnit(unit).accessors;
        let x : any = accessors.firstWhere((accessor : any) =>  {
            return accessor.isGetter && op(Op.EQUALS,accessor.name,'x');
        }).variable;
        let annotation : any = this.findClassAnnotation(unit,'C');
        this.computeResult(resolutionMap.elementAnnotationForAnnotation(annotation),CONSTANT_DEPENDENCIES,{
            matcher : properties.isComputeConstantDependenciesTask});
        expect(this.outputs.get(CONSTANT_DEPENDENCIES),new core.DartList.literal(x));
    }
    test_enumConstant() {
        let source : any = this.newSource('/test.dart','enum E {A, B, C}\n');
        let librarySpecificUnit : any = new bare.createInstance(any,null,source,source);
        this.computeResult(librarySpecificUnit,RESOLVED_UNIT3);
        let unit : any = this.outputs.get(RESOLVED_UNIT3);
        let enumDeclaration : any = op(Op.INDEX,unit.declarations,0);
        let constantDeclaration : any = op(Op.INDEX,enumDeclaration.constants,0);
        let constantElement : any = constantDeclaration.element;
        this.computeResult(constantElement,CONSTANT_DEPENDENCIES,{
            matcher : properties.isComputeConstantDependenciesTask});
        expect(this.outputs.get(CONSTANT_DEPENDENCIES),isEmpty);
    }
    test_perform() {
        let source : any = this.newSource('/test.dart','const x = y;\nconst y = 1;\n');
        let librarySpecificUnit : any = new bare.createInstance(any,null,source,source);
        this.computeResult(librarySpecificUnit,RESOLVED_UNIT1);
        let unit : any = this.outputs.get(RESOLVED_UNIT1);
        let accessors : core.DartList<any> = resolutionMap.elementDeclaredByCompilationUnit(unit).accessors;
        let x : any = accessors.firstWhere((accessor : any) =>  {
            return accessor.isGetter && op(Op.EQUALS,accessor.name,'x');
        }).variable;
        let y : any = accessors.firstWhere((accessor : any) =>  {
            return accessor.isGetter && op(Op.EQUALS,accessor.name,'y');
        }).variable;
        this.computeResult(x,CONSTANT_DEPENDENCIES,{
            matcher : properties.isComputeConstantDependenciesTask});
        expect(this.outputs.get(CONSTANT_DEPENDENCIES),new core.DartList.literal(y));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComputeConstantDependenciesTaskTest() {
    }
}

export namespace ComputeConstantValueTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ComputeConstantValueTaskTest';
    export type Interface = Omit<ComputeConstantValueTaskTest, Constructors>;
}
@DartClass
export class ComputeConstantValueTaskTest extends _AbstractDartTaskTest {
    computeClassAnnotation(source : any,unit : any,className : string) : any {
        for(let member of unit.declarations) {
            if (is(member, any) && op(Op.EQUALS,member.name.name,className)) {
                expect(member.metadata,hasLength(1));
                let annotation : any = op(Op.INDEX,member.metadata,0);
                let target : any = annotation.elementAnnotation;
                this.computeResult(target,CONSTANT_VALUE,{
                    matcher : properties.isComputeConstantValueTask});
                expect(this.outputs.get(CONSTANT_VALUE),same(target));
                let evaluationResult : any = (annotation.elementAnnotation as any).evaluationResult;
                return evaluationResult;
            }
        }
        fail('Annotation not found');
        return null;
    }
    test_annotation_non_const_constructor() {
        let source : any = this.newSource('/test.dart','class A {\n  final int i;\n  A(this.i);\n}\n\n@A(5)\nclass C {}\n');
        let unit : any = this._resolveSource(source);
        let evaluationResult : any = this.computeClassAnnotation(source,unit,'C');
        expect(evaluationResult,isNotNull);
        expect(evaluationResult.value,isNull);
    }
    test_annotation_with_args() {
        let source : any = this.newSource('/test.dart','const x = 1;\n@D(x) class C {}\nclass D {\n  const D(this.value);\n  final value;\n}\n');
        let unit : any = this._resolveSource(source);
        let evaluationResult : any = this.computeClassAnnotation(source,unit,'C');
        expect(evaluationResult,isNotNull);
        expect(evaluationResult.value,isNotNull);
        expect(evaluationResult.value.type,isNotNull);
        expect(evaluationResult.value.type.name,'D');
        expect(evaluationResult.value.fields,contains('value'));
        expect(op(Op.INDEX,evaluationResult.value.fields,'value').toIntValue(),1);
    }
    test_annotation_without_args() {
        let source : any = this.newSource('/test.dart','const x = 1;\n@x class C {}\n');
        let unit : any = this._resolveSource(source);
        let evaluationResult : any = this.computeClassAnnotation(source,unit,'C');
        expect(evaluationResult,isNotNull);
        expect(evaluationResult.value,isNotNull);
        expect(evaluationResult.value.toIntValue(),1);
    }
    test_circular_reference() {
        this._checkCircularities('x',new core.DartList.literal('y'),'const x = y + 1;\nconst y = x + 1;\n');
    }
    test_circular_reference_one_element() {
        this._checkCircularities('x',new core.DartList.literal(),'const x = x;');
    }
    test_circular_reference_strongly_connected_component() {
        this._checkCircularities('a',new core.DartList.literal('b','c','d'),'const a = b;\nconst b = c + d;\nconst c = a;\nconst d = a;\n');
    }
    test_const_constructor_calls_implicit_super_constructor_implicitly() {
        let evaluationResult : any = this._computeTopLevelVariableConstValue('x','class Base {}\nclass Derived extends Base {\n  const Derived();\n}\nconst x = const Derived();\n');
        expect(evaluationResult,isNotNull);
    }
    test_dependency() {
        let evaluationResult : any = this._computeTopLevelVariableConstValue('x','const x = y + 1;\nconst y = 1;\n');
        expect(evaluationResult,isNotNull);
        expect(evaluationResult.value,isNotNull);
        expect(evaluationResult.value.toIntValue(),2);
    }
    test_external_const_factory() {
        let evaluationResult : any = this._computeTopLevelVariableConstValue('x','const x = const C.foo();\n\nclass C extends B {\n  external const factory C.foo();\n}\n\nclass B {}\n');
        expect(evaluationResult,isNotNull);
    }
    test_simple_constant() {
        let evaluationResult : any = this._computeTopLevelVariableConstValue('x','const x = 1;\n');
        expect(evaluationResult,isNotNull);
        expect(evaluationResult.value,isNotNull);
        expect(evaluationResult.value.toIntValue(),1);
    }
    _checkCircularities(variableName : string,otherVariables : core.DartList<string>,content : string) : void {
        let unit : any = this._resolveUnit(content);
        this._expectCircularityError(this._evaluateConstant(unit,variableName));
        for(let otherVariableName of otherVariables) {
            let otherVariableElement : any = lib3.AstFinder.getTopLevelVariableElement(unit,otherVariableName);
            this._expectCircularityError((otherVariableElement as any).evaluationResult);
        }
    }
    _computeTopLevelVariableConstValue(variableName : string,content : string) : any {
        return this._evaluateConstant(this._resolveUnit(content),variableName);
    }
    _evaluateConstant(unit : any,variableName : string) : any {
        let variableElement : any = lib3.AstFinder.getTopLevelVariableElement(unit,variableName);
        this.computeResult(variableElement,CONSTANT_VALUE,{
            matcher : properties.isComputeConstantValueTask});
        expect(this.outputs.get(CONSTANT_VALUE),same(variableElement));
        let evaluationResult : any = (variableElement as any).evaluationResult;
        return evaluationResult;
    }
    _expectCircularityError(evaluationResult : any) : void {
        expect(evaluationResult,isNotNull);
        expect(evaluationResult.value,isNull);
        expect(evaluationResult.errors,hasLength(1));
        expect(op(Op.INDEX,evaluationResult.errors,0).errorCode,CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT);
    }
    _resolveSource(source : any) : any {
        let librarySpecificUnit : any = new bare.createInstance(any,null,source,source);
        this.computeResult(librarySpecificUnit,RESOLVED_UNIT1);
        let unit : any = this.outputs.get(RESOLVED_UNIT1);
        return unit;
    }
    _resolveUnit(content : string) : any {
        return this._resolveSource(this.newSource('/test.dart',content));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComputeConstantValueTaskTest() {
    }
}

export namespace ComputeInferableStaticVariableDependenciesTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ComputeInferableStaticVariableDependenciesTaskTest';
    export type Interface = Omit<ComputeInferableStaticVariableDependenciesTaskTest, Constructors>;
}
@DartClass
export class ComputeInferableStaticVariableDependenciesTaskTest extends _AbstractDartTaskTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.enableStrongMode();
    }
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT7);
        expect(this.outputs.get(RESOLVED_UNIT7),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT7),isTrue);
    }
    test_perform() {
        let source : any = this.newSource('/test.dart','const a = b;\nconst b = 0;\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT7);
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let elementA : any = op(Op.INDEX,resolutionMap.elementDeclaredByCompilationUnit(unit).topLevelVariables,0);
        let elementB : any = op(Op.INDEX,resolutionMap.elementDeclaredByCompilationUnit(unit).topLevelVariables,1);
        this.computeResult(elementA,INFERABLE_STATIC_VARIABLE_DEPENDENCIES,{
            matcher : properties.isComputeInferableStaticVariableDependenciesTask});
        expect(this.outputs,hasLength(1));
        let dependencies : core.DartList<any> = this.outputs.get(INFERABLE_STATIC_VARIABLE_DEPENDENCIES) as core.DartList<any>;
        expect(dependencies,unorderedEquals(new core.DartList.literal(elementB)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComputeInferableStaticVariableDependenciesTaskTest() {
    }
}

export namespace ComputeLibraryCycleTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ComputeLibraryCycleTaskTest';
    export type Interface = Omit<ComputeLibraryCycleTaskTest, Constructors>;
}
@DartClass
export class ComputeLibraryCycleTaskTest extends _AbstractDartTaskTest {
    getLibraryCycle(outputs : core.DartMap<any,any>) : core.DartList<any> {
        return outputs.get(LIBRARY_CYCLE) as core.DartList<any>;
    }
    getLibraryCycleDependencies(outputs : core.DartMap<any,any>) : core.DartList<any> {
        return outputs.get(LIBRARY_CYCLE_DEPENDENCIES) as core.DartList<any>;
    }
    getLibraryCycleUnits(outputs : core.DartMap<any,any>) : core.DartList<any> {
        return outputs.get(LIBRARY_CYCLE_UNITS) as core.DartList<any>;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.enableStrongMode();
    }
    test_library_cycle_incremental() : void {
        this.enableStrongMode();
        let a : any = this.newSource('/a.dart','library a;\n');
        let b : any = this.newSource('/b.dart','library b;\nimport \'a.dart\';\n');
        let c : any = this.newSource('/c.dart','library c;\nimport \'b.dart\';\n');
        this._assertLibraryCycle(a,new core.DartList.literal(a));
        this._assertLibraryCycle(b,new core.DartList.literal(b));
        this._assertLibraryCycle(c,new core.DartList.literal(c));
        this.context.setContents(a,'library a;\nimport \'c.dart\';\n');
        this._expectInvalid(a);
        this._expectInvalid(b);
        this._expectInvalid(c);
        this._assertLibraryCycle(a,new core.DartList.literal(a,b,c));
        this._assertLibraryCycle(b,new core.DartList.literal(a,b,c));
        this._assertLibraryCycle(c,new core.DartList.literal(a,b,c));
        this.context.setContents(a,'library a;\n');
        this._expectInvalid(a);
        this._expectInvalid(b);
        this._expectInvalid(c);
        this._assertLibraryCycle(a,new core.DartList.literal(a));
        this._assertLibraryCycle(b,new core.DartList.literal(b));
        this._assertLibraryCycle(c,new core.DartList.literal(c));
    }
    test_library_cycle_incremental_partial() : void {
        this.enableStrongMode();
        let a : any = this.newSource('/a.dart','library a;\n');
        let b : any = this.newSource('/b.dart','library b;\nimport \'a.dart\';\n');
        let c : any = this.newSource('/c.dart','library c;\nimport \'b.dart\';\n');
        this._assertLibraryCycle(a,new core.DartList.literal(a));
        this._assertLibraryCycle(b,new core.DartList.literal(b));
        this.context.setContents(a,'library a;\nimport \'c.dart\';\n');
        this._expectInvalid(a);
        this._expectInvalid(b);
        this._expectInvalid(c);
        this._assertLibraryCycle(a,new core.DartList.literal(a,b,c));
        this._assertLibraryCycle(b,new core.DartList.literal(a,b,c));
        this._assertLibraryCycle(c,new core.DartList.literal(a,b,c));
    }
    test_library_cycle_incremental_partial2() : void {
        this.enableStrongMode();
        let a : any = this.newSource('/a.dart','library a;\nimport \'b.dart\';\n');
        let b : any = this.newSource('/b.dart','library b;\nimport \'a.dart\';\n');
        let c : any = this.newSource('/c.dart','library c;\nimport \'b.dart\';\n');
        this._assertLibraryCycle(a,new core.DartList.literal(a,b));
        this._assertLibraryCycle(b,new core.DartList.literal(a,b));
        this._assertLibraryCycle(c,new core.DartList.literal(c));
        this.context.setContents(a,'library a;\nimport \'b.dart\';\nimport \'c.dart\';\n');
        this._expectInvalid(a);
        this._expectInvalid(b);
        this._expectInvalid(c);
        this._assertLibraryCycle(b,new core.DartList.literal(a,b,c));
        this._assertLibraryCycle(a,new core.DartList.literal(a,b,c));
        this._assertLibraryCycle(c,new core.DartList.literal(a,b,c));
    }
    test_library_cycle_linear() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart',''],
            ['/b.dart','import \'a.dart\';\n  ']]));
        let results : core.DartList<core.DartMap<any,any>> = this.computeLibraryResultsMap(sources,LIBRARY_CYCLE);
        let component0 : core.DartList<any> = this.getLibraryCycle(results[0]);
        let component1 : core.DartList<any> = this.getLibraryCycle(results[1]);
        expect(component0,hasLength(1));
        expect(component1,hasLength(1));
        let units0 : core.DartList<any> = this.getLibraryCycleUnits(results[0]);
        let units1 : core.DartList<any> = this.getLibraryCycleUnits(results[1]);
        expect(units0,hasLength(1));
        expect(units1,hasLength(1));
        let dep0 : core.DartList<any> = this.getLibraryCycleDependencies(results[0]);
        let dep1 : core.DartList<any> = this.getLibraryCycleDependencies(results[1]);
        expect(dep0,hasLength(1));
        expect(dep1,hasLength(2));
    }
    test_library_cycle_loop() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','  import \'c.dart\';\n'],
            ['/b.dart','  import \'a.dart\';\n  '],
            ['/c.dart','  import \'b.dart\';\n  ']]));
        let results : core.DartList<core.DartMap<any,any>> = this.computeLibraryResultsMap(sources,LIBRARY_CYCLE).toList();
        let component0 : core.DartList<any> = this.getLibraryCycle(results[0]);
        let component1 : core.DartList<any> = this.getLibraryCycle(results[1]);
        let component2 : core.DartList<any> = this.getLibraryCycle(results[2]);
        expect(component0,hasLength(3));
        expect(component1,hasLength(3));
        expect(component2,hasLength(3));
        let units0 : core.DartList<any> = this.getLibraryCycleUnits(results[0]);
        let units1 : core.DartList<any> = this.getLibraryCycleUnits(results[1]);
        let units2 : core.DartList<any> = this.getLibraryCycleUnits(results[2]);
        expect(units0,hasLength(3));
        expect(units1,hasLength(3));
        expect(units2,hasLength(3));
        let dep0 : core.DartList<any> = this.getLibraryCycleDependencies(results[0]);
        let dep1 : core.DartList<any> = this.getLibraryCycleDependencies(results[1]);
        let dep2 : core.DartList<any> = this.getLibraryCycleDependencies(results[2]);
        expect(dep0,hasLength(1));
        expect(dep1,hasLength(1));
        expect(dep2,hasLength(1));
    }
    test_library_cycle_override_inference_incremental() : void {
        this.enableStrongMode();
        let lib1Source : any = this.newSource('/my_lib1.dart','library my_lib1;\nimport \'my_lib3.dart\';\n');
        let lib2Source : any = this.newSource('/my_lib2.dart','library my_lib2;\nimport \'my_lib1.dart\';\n');
        let lib3Source : any = this.newSource('/my_lib3.dart','library my_lib3;\nimport \'my_lib2.dart\';\n\nclass A {\n  int foo(int x) => null;\n}\nclass B extends A {\n  foo(x) => null;\n}\n');
        let lib1Target : any = new bare.createInstance(any,null,lib1Source,lib1Source);
        let lib2Target : any = new bare.createInstance(any,null,lib2Source,lib2Source);
        let lib3Target : any = new bare.createInstance(any,null,lib3Source,lib3Source);
        this.computeResult(lib1Target,RESOLVED_UNIT);
        this.computeResult(lib2Target,RESOLVED_UNIT);
        this.computeResult(lib3Target,RESOLVED_UNIT);
        let unit : any = this.outputs.get(RESOLVED_UNIT);
        let b : any = op(Op.INDEX,unit.declarations,1).element;
        expect(b.getMethod('foo').returnType.toString(),'int');
        this.context.setContents(lib1Source,'library my_lib1;\nimport \'my_lib3.dart\';\nvar foo = 123;\n');
        this._expectInvalid(lib1Source);
        this._expectInvalid(lib2Source);
        this._expectInvalid(lib3Source);
        this.computeResult(lib1Target,RESOLVED_UNIT);
        this.computeResult(lib2Target,RESOLVED_UNIT);
        this.computeResult(lib3Target,RESOLVED_UNIT);
        unit = this.outputs.get(RESOLVED_UNIT);
        b = op(Op.INDEX,unit.declarations,1).element;
        expect(b.getMethod('foo').returnType.toString(),'int',{
            reason : 'edit should not affect member inference'});
    }
    test_library_cycle_self_loop() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','  import \'a.dart\';\n']]));
        let results : core.DartList<core.DartMap<any,any>> = this.computeLibraryResultsMap(sources,LIBRARY_CYCLE).toList();
        let component0 : core.DartList<any> = this.getLibraryCycle(results[0]);
        expect(component0,hasLength(1));
        let units0 : core.DartList<any> = this.getLibraryCycleUnits(results[0]);
        expect(units0,hasLength(1));
        let dep0 : core.DartList<any> = this.getLibraryCycleDependencies(results[0]);
        expect(dep0,hasLength(1));
    }
    test_library_cycle_singleton() : void {
        let source : any = this.newSource('/test.dart','import \'dart:core\';\n');
        this.computeResult(source,LIBRARY_CYCLE);
        let component : core.DartList<any> = this.getLibraryCycle(this.outputs);
        let units : core.DartList<any> = this.getLibraryCycleUnits(this.outputs);
        let deps : core.DartList<any> = this.getLibraryCycleDependencies(this.outputs);
        expect(component,hasLength(1));
        expect(units,hasLength(1));
        expect(deps,hasLength(1));
    }
    test_library_cycle_tree() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart',''],
            ['/b.dart','  '],
            ['/c.dart','  import \'a.dart\';\n  import \'b.dart\';\n  ']]));
        let results : core.DartList<core.DartMap<any,any>> = this.computeLibraryResultsMap(sources,LIBRARY_CYCLE);
        let component0 : core.DartList<any> = this.getLibraryCycle(results[0]);
        let component1 : core.DartList<any> = this.getLibraryCycle(results[1]);
        let component2 : core.DartList<any> = this.getLibraryCycle(results[2]);
        expect(component0,hasLength(1));
        expect(component1,hasLength(1));
        expect(component2,hasLength(1));
        let units0 : core.DartList<any> = this.getLibraryCycleUnits(results[0]);
        let units1 : core.DartList<any> = this.getLibraryCycleUnits(results[1]);
        let units2 : core.DartList<any> = this.getLibraryCycleUnits(results[2]);
        expect(units0,hasLength(1));
        expect(units1,hasLength(1));
        expect(units2,hasLength(1));
        let dep0 : core.DartList<any> = this.getLibraryCycleDependencies(results[0]);
        let dep1 : core.DartList<any> = this.getLibraryCycleDependencies(results[1]);
        let dep2 : core.DartList<any> = this.getLibraryCycleDependencies(results[2]);
        expect(dep0,hasLength(1));
        expect(dep1,hasLength(1));
        expect(dep2,hasLength(3));
    }
    test_library_double_loop() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','  import \'b.dart\';\n'],
            ['/b.dart','  import \'a.dart\';\n  '],
            ['/c.dart','  import \'d.dart\' as foo;\n  import \'a.dart\' as bar;\n  export \'b.dart\';\n  '],
            ['/d.dart','  import \'c.dart\' as foo;\n  import \'b.dart\' as bar;\n  export \'a.dart\';\n  ']]));
        let results : core.DartList<core.DartMap<any,any>> = this.computeLibraryResultsMap(sources,LIBRARY_CYCLE).toList();
        let component0 : core.DartList<any> = this.getLibraryCycle(results[0]);
        let component1 : core.DartList<any> = this.getLibraryCycle(results[1]);
        let component2 : core.DartList<any> = this.getLibraryCycle(results[2]);
        let component3 : core.DartList<any> = this.getLibraryCycle(results[3]);
        expect(component0,hasLength(2));
        expect(component1,hasLength(2));
        expect(component2,hasLength(2));
        expect(component3,hasLength(2));
        let units0 : core.DartList<any> = this.getLibraryCycleUnits(results[0]);
        let units1 : core.DartList<any> = this.getLibraryCycleUnits(results[1]);
        let units2 : core.DartList<any> = this.getLibraryCycleUnits(results[2]);
        let units3 : core.DartList<any> = this.getLibraryCycleUnits(results[3]);
        expect(units0,hasLength(2));
        expect(units1,hasLength(2));
        expect(units2,hasLength(2));
        expect(units3,hasLength(2));
        let dep0 : core.DartList<any> = this.getLibraryCycleDependencies(results[0]);
        let dep1 : core.DartList<any> = this.getLibraryCycleDependencies(results[1]);
        let dep2 : core.DartList<any> = this.getLibraryCycleDependencies(results[2]);
        let dep3 : core.DartList<any> = this.getLibraryCycleDependencies(results[3]);
        expect(dep0,hasLength(1));
        expect(dep1,hasLength(1));
        expect(dep2,hasLength(3));
        expect(dep3,hasLength(3));
    }
    test_library_double_loop_parts() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','  import \'b.dart\';\n  part \'aa.dart\';\n  part \'ab.dart\';\n'],
            ['/b.dart','  import \'a.dart\';\n'],
            ['/aa.dart',''],
            ['/ab.dart',''],
            ['/c.dart','  import \'d.dart\' as foo;\n  import \'a.dart\' as bar;\n  export \'b.dart\';\n'],
            ['/d.dart','  import \'c.dart\' as foo;\n  import \'b.dart\' as bar;\n  export \'a.dart\';\n  part \'da.dart\';\n  part \'db.dart\';\n'],
            ['/da.dart',''],
            ['/db.dart','']]));
        this.computeResult(sources[0],LIBRARY_CYCLE);
        let results0 : core.DartMap<any,any> = this.outputs;
        this.computeResult(sources[1],LIBRARY_CYCLE);
        let results1 : core.DartMap<any,any> = this.outputs;
        this.computeResult(sources[4],LIBRARY_CYCLE);
        let results4 : core.DartMap<any,any> = this.outputs;
        this.computeResult(sources[5],LIBRARY_CYCLE);
        let results5 : core.DartMap<any,any> = this.outputs;
        let component0 : core.DartList<any> = this.getLibraryCycle(results0);
        let component1 : core.DartList<any> = this.getLibraryCycle(results1);
        let component4 : core.DartList<any> = this.getLibraryCycle(results4);
        let component5 : core.DartList<any> = this.getLibraryCycle(results5);
        expect(component0,hasLength(2));
        expect(component1,hasLength(2));
        expect(component4,hasLength(2));
        expect(component5,hasLength(2));
        let units0 : core.DartList<any> = this.getLibraryCycleUnits(results0);
        let units1 : core.DartList<any> = this.getLibraryCycleUnits(results1);
        let units4 : core.DartList<any> = this.getLibraryCycleUnits(results4);
        let units5 : core.DartList<any> = this.getLibraryCycleUnits(results5);
        expect(units0,hasLength(4));
        expect(units1,hasLength(4));
        expect(units4,hasLength(4));
        expect(units5,hasLength(4));
        let dep0 : core.DartList<any> = this.getLibraryCycleDependencies(results0);
        let dep1 : core.DartList<any> = this.getLibraryCycleDependencies(results1);
        let dep4 : core.DartList<any> = this.getLibraryCycleDependencies(results4);
        let dep5 : core.DartList<any> = this.getLibraryCycleDependencies(results5);
        expect(dep0,hasLength(1));
        expect(dep1,hasLength(1));
        expect(dep4,hasLength(5));
        expect(dep5,hasLength(5));
    }
    _assertLibraryCycle(source : any,expected : core.DartList<any>) : void {
        this.computeResult(source,LIBRARY_CYCLE);
        let cycle : core.DartList<any> = this.outputs.get(LIBRARY_CYCLE) as core.DartList<any>;
        expect(cycle.map((e : any) =>  {
            return e.source;
        }),unorderedEquals(expected));
    }
    _expectInvalid(librarySource : any) : void {
        let entry : any = this.context.getCacheEntry(librarySource);
        expect(entry.getState(LIBRARY_CYCLE),CacheState.INVALID);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComputeLibraryCycleTaskTest() {
    }
}

export namespace ContainingLibrariesTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ContainingLibrariesTaskTest';
    export type Interface = Omit<ContainingLibrariesTaskTest, Constructors>;
}
@DartClass
export class ContainingLibrariesTaskTest extends _AbstractDartTaskTest {
    getContainingLibraries(outputs : core.DartMap<any,any>) : core.DartList<any> {
        return outputs.get(CONTAINING_LIBRARIES) as core.DartList<any>;
    }
    test_perform_definingCompilationUnit() {
        let library : any = this.newSource('/test.dart','library test;');
        this.computeResult(library,INCLUDED_PARTS);
        this.computeResult(library,CONTAINING_LIBRARIES,{
            matcher : properties.isContainingLibrariesTask});
        expect(this.outputs,hasLength(1));
        let containingLibraries : core.DartList<any> = this.getContainingLibraries(this.outputs);
        expect(containingLibraries,unorderedEquals(new core.DartList.literal(library)));
    }
    test_perform_partInMultipleLibraries() {
        let library1 : any = this.newSource('/lib1.dart','library test; part "part.dart";');
        let library2 : any = this.newSource('/lib2.dart','library test; part "part.dart";');
        let part : any = this.newSource('/part.dart','part of test;');
        this.computeResult(library1,INCLUDED_PARTS);
        this.computeResult(library2,INCLUDED_PARTS);
        this.computeResult(part,SOURCE_KIND);
        this.computeResult(part,CONTAINING_LIBRARIES,{
            matcher : properties.isContainingLibrariesTask});
        expect(this.outputs,hasLength(1));
        let containingLibraries : core.DartList<any> = this.getContainingLibraries(this.outputs);
        expect(containingLibraries,unorderedEquals(new core.DartList.literal(library1,library2)));
    }
    test_perform_partInSingleLibrary() {
        let library : any = this.newSource('/lib.dart','library test; part "part.dart";');
        let part : any = this.newSource('/part.dart','part of test;');
        this.computeResult(library,INCLUDED_PARTS);
        this.computeResult(part,SOURCE_KIND);
        this.computeResult(part,CONTAINING_LIBRARIES,{
            matcher : properties.isContainingLibrariesTask});
        expect(this.outputs,hasLength(1));
        let containingLibraries : core.DartList<any> = this.getContainingLibraries(this.outputs);
        expect(containingLibraries,unorderedEquals(new core.DartList.literal(library)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContainingLibrariesTaskTest() {
    }
}

export namespace DartErrorsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'DartErrorsTaskTest';
    export type Interface = Omit<DartErrorsTaskTest, Constructors>;
}
@DartClass
export class DartErrorsTaskTest extends _AbstractDartTaskTest {
    getDartErrors(outputs : core.DartMap<any,any>) : core.DartList<any> {
        return outputs.get(DART_ERRORS) as core.DartList<any>;
    }
    test_perform_definingCompilationUnit() {
        let library : any = this.newSource('/test.dart','library test; import "dart:math";');
        this.computeResult(library,INCLUDED_PARTS);
        this.computeResult(library,DART_ERRORS,{
            matcher : properties.isDartErrorsTask});
        expect(this.outputs,hasLength(1));
        let errors : core.DartList<any> = this.getDartErrors(this.outputs);
        expect(errors,hasLength(1));
    }
    test_perform_partInSingleLibrary() {
        let library : any = this.newSource('/lib.dart','library test; import "dart:math"; part "part.dart";');
        let part : any = this.newSource('/part.dart','part of test; class A extends A {}');
        this.computeResult(library,INCLUDED_PARTS);
        this.computeResult(library,DART_ERRORS);
        this.computeResult(part,DART_ERRORS,{
            matcher : properties.isDartErrorsTask});
        expect(this.outputs,hasLength(1));
        let errors : core.DartList<any> = this.getDartErrors(this.outputs);
        expect(errors,hasLength(1));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartErrorsTaskTest() {
    }
}

export namespace BuildEnumMemberElementsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'BuildEnumMemberElementsTaskTest';
    export type Interface = Omit<BuildEnumMemberElementsTaskTest, Constructors>;
}
@DartClass
export class BuildEnumMemberElementsTaskTest extends _AbstractDartTaskTest {
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT3);
        expect(this.outputs.get(RESOLVED_UNIT3),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT3),isTrue);
    }
    test_perform() {
        let source : any = this.newSource('/test.dart','enum MyEnum {\n  A, B\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT3,{
            matcher : properties.isBuildEnumMemberElementsTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT3);
        let enumElement : any = resolutionMap.elementDeclaredByCompilationUnit(unit).getEnum('MyEnum');
        let fields : core.DartList<any> = enumElement.fields;
        expect(fields,hasLength(4));
        {
            let index : any = fields[0];
            expect(index,isNotNull);
            expect(index.name,'index');
            expect(index.isStatic,isFalse);
            expect(index.evaluationResult,isNull);
            BuildEnumMemberElementsTaskTest._assertGetter(index);
        }
        {
            let values : any = fields[1];
            expect(values,isNotNull);
            expect(values.name,'values');
            expect(values.isStatic,isTrue);
            expect(values.evaluationResult,isNotNull);
            BuildEnumMemberElementsTaskTest._assertGetter(values);
        }
        {
            let constant : any = fields[2];
            expect(constant,isNotNull);
            expect(constant.name,'A');
            expect(constant.isStatic,isTrue);
            expect(constant.evaluationResult,isNotNull);
            BuildEnumMemberElementsTaskTest._assertGetter(constant);
        }
        {
            let constant : any = fields[3];
            expect(constant,isNotNull);
            expect(constant.name,'B');
            expect(constant.isStatic,isTrue);
            expect(constant.evaluationResult,isNotNull);
            BuildEnumMemberElementsTaskTest._assertGetter(constant);
        }
        let enumNode : any = op(Op.INDEX,unit.declarations,0);
        expect(enumNode.name.staticElement,same(enumElement));
        expect(op(Op.INDEX,enumNode.constants,0).element,same(enumElement.getField('A')));
        expect(op(Op.INDEX,enumNode.constants,1).element,same(enumElement.getField('B')));
    }
    static _assertGetter(field : any) : void {
        let getter : any = field.getter;
        expect(getter,isNotNull);
        expect(getter.variable,same(field));
        expect(getter.type,isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuildEnumMemberElementsTaskTest() {
    }
}

export namespace GatherUsedImportedElementsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'GatherUsedImportedElementsTaskTest';
    export type Interface = Omit<GatherUsedImportedElementsTaskTest, Constructors>;
}
@DartClass
export class GatherUsedImportedElementsTaskTest extends _AbstractDartTaskTest {
    usedElements : any;

    usedElementNames : core.DartSet<string>;

    test_perform_inBody() {
        this.newSource('/a.dart','library lib_a;\nclass A {}\n');
        this.newSource('/b.dart','library lib_b;\nclass B {}\n');
        let source : any = this.newSource('/test.dart','import \'a.dart\';\nimport \'b.dart\';\nmain() {\n  new A();\n}');
        this._computeUsedElements(source);
        expect(this.usedElementNames,unorderedEquals(new core.DartList.literal('A')));
    }
    test_perform_inComment_exportDirective() {
        let source : any = this.newSource('/test.dart','import \'dart:async\';\n/// Use [Future].\nexport \'dart:math\';\n');
        this._computeUsedElements(source);
        expect(this.usedElementNames,unorderedEquals(new core.DartList.literal('Future')));
    }
    test_perform_inComment_importDirective() {
        let source : any = this.newSource('/test.dart','import \'dart:async\';\n/// Use [Future].\nimport \'dart:math\';\n');
        this._computeUsedElements(source);
        expect(this.usedElementNames,unorderedEquals(new core.DartList.literal('Future')));
    }
    test_perform_inComment_libraryDirective() {
        let source : any = this.newSource('/test.dart','/// Use [Future].\nlibrary test;\nimport \'dart:async\';\n');
        this._computeUsedElements(source);
        expect(this.usedElementNames,unorderedEquals(new core.DartList.literal('Future')));
    }
    test_perform_inComment_topLevelFunction() {
        let source : any = this.newSource('/test.dart','import \'dart:async\';\n/// Use [Future].\nmain() {}\n');
        this._computeUsedElements(source);
        expect(this.usedElementNames,unorderedEquals(new core.DartList.literal('Future')));
    }
    _computeUsedElements(source : any) : void {
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,USED_IMPORTED_ELEMENTS,{
            matcher : properties.isGatherUsedImportedElementsTask});
        this.usedElements = this.outputs.get(USED_IMPORTED_ELEMENTS);
        this.usedElementNames = this.usedElements.elements.map((e : any) =>  {
            return e.name;
        }).toSet();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GatherUsedImportedElementsTaskTest() {
    }
}

export namespace GatherUsedLocalElementsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'GatherUsedLocalElementsTaskTest';
    export type Interface = Omit<GatherUsedLocalElementsTaskTest, Constructors>;
}
@DartClass
export class GatherUsedLocalElementsTaskTest extends _AbstractDartTaskTest {
    usedElements : any;

    usedElementNames : core.DartSet<string>;

    test_perform_forPart_afterLibraryUpdate() {
        let libSource : any = this.newSource('/my_lib.dart','library my_lib;\npart \'my_part.dart\';\nfoo() => null;\nclass _LocalClass {}\n');
        let partSource : any = this.newSource('/my_part.dart','part of my_lib;\nbar() {\n  print(_LocalClass);\n}\n');
        let libTarget : any = new bare.createInstance(any,null,libSource,libSource);
        let partTarget : any = new bare.createInstance(any,null,libSource,partSource);
        this.computeResult(libTarget,USED_LOCAL_ELEMENTS);
        this.computeResult(partTarget,USED_LOCAL_ELEMENTS);
        {
            let usedElements : any = this.analysisCache.getValue(partTarget,USED_LOCAL_ELEMENTS);
            expect(usedElements.elements,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.displayName,'_LocalClass');
            })));
        }
        this.context.setContents(libSource,'library my_lib;\npart \'my_part.dart\';\nString foo() => null;\nclass _LocalClass {}\n');
        this.computeResult(libTarget,USED_LOCAL_ELEMENTS);
        this.computeResult(partTarget,USED_LOCAL_ELEMENTS);
        {
            let usedElements : any = this.analysisCache.getValue(partTarget,USED_LOCAL_ELEMENTS);
            expect(usedElements.elements,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.displayName,'_LocalClass');
            })));
        }
    }
    test_perform_localVariable() {
        let source : any = this.newSource('/test.dart','main() {\n  var v1 = 1;\n  var v2 = 2;\n  print(v2);\n}');
        this._computeUsedElements(source);
        expect(this.usedElementNames,unorderedEquals(new core.DartList.literal('v2')));
    }
    test_perform_method() {
        let source : any = this.newSource('/test.dart','class A {\n  _m1() {}\n  _m2() {}\n}\n\nmain(A a, p) {\n  a._m2();\n  p._m3();\n}\n');
        this._computeUsedElements(source);
        expect(this.usedElementNames,unorderedEquals(new core.DartList.literal('A','a','p','_m2')));
        expect(this.usedElements.members,unorderedEquals(new core.DartList.literal('_m2','_m3')));
    }
    _computeUsedElements(source : any) : void {
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,USED_LOCAL_ELEMENTS,{
            matcher : properties.isGatherUsedLocalElementsTask});
        this.usedElements = this.outputs.get(USED_LOCAL_ELEMENTS);
        this.usedElementNames = this.usedElements.elements.map((e : any) =>  {
            return e.name;
        }).toSet();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GatherUsedLocalElementsTaskTest() {
    }
}

export namespace GenerateHintsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'GenerateHintsTaskTest';
    export type Interface = Omit<GenerateHintsTaskTest, Constructors>;
}
@DartClass
export class GenerateHintsTaskTest extends _AbstractDartTaskTest {
    test_perform_bestPractices_missingReturn() {
        let source : any = this.newSource('/test.dart','int main() {\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.MISSING_RETURN));
    }
    test_perform_dart2js() {
        let options : any = new bare.createInstance(any,null);
        options.dart2jsHint = true;
        this.prepareAnalysisContext(options);
        let source : any = this.newSource('/test.dart','main(p) {\n  if (p is double) {\n    print(\'double\');\n  }\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.IS_DOUBLE));
    }
    test_perform_deadCode() {
        let source : any = this.newSource('/test.dart','main() {\n  if (false) {\n    print(\'how?\');\n  }\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.DEAD_CODE));
    }
    test_perform_disabled() {
        this.context.analysisOptions = ((_) : any =>  {
            {
                _.hint = false;
                return _;
            }
        })(new bare.createInstance(any,null,this.context.analysisOptions));
        let source : any = this.newSource('/test.dart','int main() {\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertNoErrors();
    }
    test_perform_imports_duplicateImport() {
        this.newSource('/a.dart','library lib_a;\nclass A {}\n');
        let source : any = this.newSource('/test.dart','import \'a.dart\';\nimport \'a.dart\';\nmain() {\n  new A();\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.DUPLICATE_IMPORT));
    }
    test_perform_imports_unusedImport_one() {
        this.newSource('/a.dart','library lib_a;\nclass A {}\n');
        this.newSource('/b.dart','library lib_b;\nclass B {}\n');
        let source : any = this.newSource('/test.dart','import \'a.dart\';\nimport \'b.dart\';\nmain() {\n  new A();\n}');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.UNUSED_IMPORT));
    }
    test_perform_imports_unusedImport_zero() {
        this.newSource('/a.dart','library lib_a;\nclass A {}\n');
        let source : any = this.newSource('/test.dart','import \'a.dart\';\nmain() {\n  new A();\n}');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertNoErrors();
    }
    test_perform_overrideVerifier() {
        let source : any = this.newSource('/test.dart','class A {}\nclass B {\n  @override\n  m() {}\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.OVERRIDE_ON_NON_OVERRIDING_METHOD));
    }
    test_perform_todo() {
        let source : any = this.newSource('/test.dart','main() {\n  // TODO(developer) foo bar\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(TodoCode.TODO));
    }
    test_perform_unusedLocalElements_class() {
        let source : any = this.newSource('/test.dart','class _A {}\nclass _B {}\nmain() {\n  new _A();\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.UNUSED_ELEMENT));
    }
    test_perform_unusedLocalElements_localVariable() {
        let source : any = this.newSource('/test.dart','main() {\n  var v = 42;\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.UNUSED_LOCAL_VARIABLE));
    }
    test_perform_unusedLocalElements_method() {
        let source : any = this.newSource('/my_lib.dart','library my_lib;\npart \'my_part.dart\';\nclass A {\n  _ma() {}\n  _mb() {}\n  _mc() {}\n}\n');
        this.newSource('/my_part.dart','part of my_lib;\n\nf(A a) {\n  a._mb();\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,HINTS,{
            matcher : properties.isGenerateHintsTask});
        this._fillErrorListener(HINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(HintCode.UNUSED_ELEMENT,HintCode.UNUSED_ELEMENT));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenerateHintsTaskTest() {
    }
}

export namespace GenerateLintsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'GenerateLintsTaskTest';
    export type Interface = Omit<GenerateLintsTaskTest, Constructors>;
}
@DartClass
export class GenerateLintsTaskTest extends _AbstractDartTaskTest {
    enableLints() : void {
        let options : any = this.context.analysisOptions;
        options.lint = true;
        this.context.analysisOptions = options;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.enableLints();
        setLints(this.context,new core.DartList.literal(new GenerateLintsTaskTest_TestLinter()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tearDown() : void {
        setLints(this.context,new core.DartList.literal());
        super.tearDown();
    }
    test_camel_case_types() {
        let source : any = this.newSource('/test.dart','class a { }\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,LINTS,{
            matcher : properties.isGenerateLintsTask});
        this._fillErrorListener(LINTS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(properties._testLintCode));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenerateLintsTaskTest() {
    }
}

export namespace BuildDirectiveElementsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'BuildDirectiveElementsTaskTest';
    export type Interface = Omit<BuildDirectiveElementsTaskTest, Constructors>;
}
@DartClass
export class BuildDirectiveElementsTaskTest extends _AbstractDartTaskTest {
    checkMetadata(element : any,compilationUnit : any) : void {
        expect(element.metadata,hasLength(1));
        expect(op(Op.INDEX,element.metadata,0),new bare.createInstance(any,null));
        let elementAnnotation : any = op(Op.INDEX,element.metadata,0);
        expect(elementAnnotation.element,isNull);
        expect(elementAnnotation.compilationUnit,isNotNull);
        expect(elementAnnotation.compilationUnit,compilationUnit);
    }
    test_perform() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','library libA;\nimport \'libB.dart\';\nexport \'libC.dart\';\n'],
            ['/libB.dart','library libB;\n'],
            ['/libC.dart','library libC;\n']]));
        let sourceA : any = sources[0];
        let sourceB : any = sources[1];
        let sourceC : any = sources[2];
        this.computeResult(sourceA,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryElementA : any = this.outputs.get(LIBRARY_ELEMENT2);
        let libraryElementB : any = this._getImportLibraryInput(sourceB);
        let libraryElementC : any = this._getExportLibraryInput(sourceC);
        this._assertErrorsWithCodes(new core.DartList.literal());
        let libraryUnitA : any = this.context.getCacheEntry(new bare.createInstance(any,null,sourceA,sourceA)).getValue(RESOLVED_UNIT1);
        {
            let importNode : any = op(Op.INDEX,libraryUnitA.directives,1);
            let importElement : any = importNode.element;
            expect(importElement,isNotNull);
            expect(importElement.importedLibrary,libraryElementB);
            expect(importElement.prefix,isNull);
            expect(importElement.nameOffset,14);
            expect(importElement.uriOffset,21);
            expect(importElement.uriEnd,32);
        }
        {
            let exportNode : any = op(Op.INDEX,libraryUnitA.directives,2);
            let exportElement : any = exportNode.element;
            expect(exportElement,isNotNull);
            expect(exportElement.exportedLibrary,libraryElementC);
            expect(exportElement.nameOffset,34);
            expect(exportElement.uriOffset,41);
            expect(exportElement.uriEnd,52);
        }
        expect(libraryElementA.hasExtUri,isFalse);
        {
            let imports : core.DartList<any> = libraryElementA.imports;
            expect(imports,hasLength(2));
            expect(imports[1].importedLibrary.isDartCore,isTrue);
            expect(imports[1].isSynthetic,isTrue);
        }
    }
    test_perform_combinators() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','library libA;\nimport \'libB.dart\' show A, B hide C, D;\n'],
            ['/libB.dart','library libB;\n']]));
        let sourceA : any = sources[0];
        this.computeResult(sourceA,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryUnitA : any = this.context.getCacheEntry(new bare.createInstance(any,null,sourceA,sourceA)).getValue(RESOLVED_UNIT1);
        this._assertErrorsWithCodes(new core.DartList.literal());
        let importNode : any = op(Op.INDEX,libraryUnitA.directives,1);
        let importElement : any = importNode.element;
        let combinators : core.DartList<any> = importElement.combinators;
        expect(combinators,hasLength(2));
        {
            let combinator : any = combinators[0];
            expect(combinator.offset,33);
            expect(combinator.end,42);
            expect(combinator.shownNames,new core.DartList.literal('A','B'));
        }
        {
            let combinator : any = combinators[1];
            expect(combinator.hiddenNames,new core.DartList.literal('C','D'));
        }
    }
    test_perform_configurations_export() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.newSource('/foo.dart','');
        let foo_io = this.newSource('/foo_io.dart','');
        this.newSource('/foo_html.dart','');
        let testSource = this.newSource('/test.dart','export \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        this.computeResult(testSource,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let testLibrary : any = this.outputs.get(LIBRARY_ELEMENT2);
        let export : any = op(Op.INDEX,testLibrary.exports,0);
        expect(export.exportedLibrary.source,foo_io);
        expect(export.uri,'foo_io.dart');
    }
    test_perform_configurations_import() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.newSource('/foo.dart','');
        let foo_io = this.newSource('/foo_io.dart','');
        this.newSource('/foo_html.dart','');
        let testSource = this.newSource('/test.dart','import \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        this.computeResult(testSource,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let testLibrary : any = this.outputs.get(LIBRARY_ELEMENT2);
        let import : any = op(Op.INDEX,testLibrary.imports,0);
        expect(import.importedLibrary.source,foo_io);
        expect(import.uri,'foo_io.dart');
    }
    test_perform_dartCoreContext() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','']]));
        let source : any = sources[0];
        this.computeResult(source,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryElement : any = this.outputs.get(LIBRARY_ELEMENT2);
        {
            let coreLibrary : any = op(Op.INDEX,libraryElement.importedLibraries,0);
            let dartSdk : any = this.context.sourceFactory.dartSdk;
            expect(coreLibrary.context,same(dartSdk.context));
        }
    }
    test_perform_error_exportOfNonLibrary() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','library libA;\nexport \'part.dart\';\n'],
            ['/part.dart','part of notLib;\n']]));
        let sourceA : any = sources[0];
        this.computeResult(sourceA,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        this._assertErrorsWithCodes(new core.DartList.literal(CompileTimeErrorCode.EXPORT_OF_NON_LIBRARY));
    }
    test_perform_error_importOfNonLibrary() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','library libA;\nimport \'part.dart\';\n'],
            ['/part.dart','part of notLib;\n']]));
        let sourceA : any = sources[0];
        this.computeResult(sourceA,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        this._assertErrorsWithCodes(new core.DartList.literal(CompileTimeErrorCode.IMPORT_OF_NON_LIBRARY));
    }
    test_perform_explicitDartCoreImport() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/lib.dart','library lib;\nimport \'dart:core\' show List;\n']]));
        let source : any = sources[0];
        this.computeResult(source,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryElement : any = this.outputs.get(LIBRARY_ELEMENT2);
        {
            let imports : core.DartList<any> = libraryElement.imports;
            expect(imports,hasLength(1));
            expect(imports[0].importedLibrary.isDartCore,isTrue);
            expect(imports[0].isSynthetic,isFalse);
        }
    }
    test_perform_hasExtUri() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/lib.dart','import \'dart-ext:doesNotExist.dart\';\n']]));
        let source : any = sources[0];
        this.computeResult(source,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryElement : any = this.outputs.get(LIBRARY_ELEMENT2);
        expect(libraryElement.hasExtUri,isTrue);
    }
    test_perform_importPrefix() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','library libA;\nimport \'libB.dart\' as pref;\nimport \'libC.dart\' as pref;\n'],
            ['/libB.dart','library libB;\n'],
            ['/libC.dart','library libC;\n']]));
        let sourceA : any = sources[0];
        let sourceB : any = sources[1];
        this.computeResult(sourceA,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryUnitA : any = this.context.getCacheEntry(new bare.createInstance(any,null,sourceA,sourceA)).getValue(RESOLVED_UNIT1);
        let importNodeB : any = op(Op.INDEX,libraryUnitA.directives,1);
        let prefixNodeB : any = importNodeB.prefix;
        let importElementB : any = importNodeB.element;
        let prefixElement : any = importElementB.prefix;
        expect(importElementB,isNotNull);
        expect(importElementB.importedLibrary,this._getImportLibraryInput(sourceB));
        expect(prefixElement,isNotNull);
        expect(importElementB.prefixOffset,prefixElement.nameOffset);
        expect(prefixNodeB.staticElement,prefixElement);
        let importNodeC : any = op(Op.INDEX,libraryUnitA.directives,2);
        let prefixNodeC : any = importNodeC.prefix;
        let importElementC : any = importNodeC.element;
        expect(prefixNodeC.staticElement,prefixElement);
        expect(importElementC.prefix,prefixElement);
    }
    test_perform_metadata() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','@a library libA;\n@b import \'libB.dart\';\n@c export \'libC.dart\';\n@d part \'part.dart\';'],
            ['/libB.dart','library libB;'],
            ['/libC.dart','library libC;'],
            ['/part.dart','part of libA;']]));
        let sourceA : any = sources[0];
        this.computeResult(sourceA,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryA : any = this.context.getCacheEntry(sourceA).getValue(LIBRARY_ELEMENT2);
        this.checkMetadata(libraryA,libraryA.definingCompilationUnit);
        this.checkMetadata(op(Op.INDEX,libraryA.imports,0),libraryA.definingCompilationUnit);
        this.checkMetadata(op(Op.INDEX,libraryA.exports,0),libraryA.definingCompilationUnit);
        this.checkMetadata(op(Op.INDEX,libraryA.parts,0),libraryA.definingCompilationUnit);
    }
    test_perform_metadata_partOf() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','library libA;\npart \'part.dart\';'],
            ['/part.dart','@a part of libA;']]));
        let sourceA : any = sources[0];
        let sourcePart : any = sources[1];
        this.computeResult(sourceA,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryA : any = this.context.getCacheEntry(sourceA).getValue(LIBRARY_ELEMENT2);
        let part : any = this.context.getCacheEntry(new bare.createInstance(any,null,sourceA,sourcePart)).getValue(RESOLVED_UNIT1);
        expect(op(Op.INDEX,part.directives,0),new bare.createInstance(any,null));
        expect(op(Op.INDEX,part.directives,0).element,same(libraryA));
        expect(resolutionMap.elementDeclaredByDirective(op(Op.INDEX,part.directives,0)).metadata,isEmpty);
    }
    _assertErrorsWithCodes(expectedErrorCodes : core.DartList<any>) : void {
        this._fillErrorListener(BUILD_DIRECTIVES_ERRORS);
        this.errorListener.assertErrorsWithCodes(expectedErrorCodes);
    }
    _getExportLibraryInput(source : any) {
        let key = BuildDirectiveElementsTask.EXPORTS_LIBRARY_ELEMENT_INPUT_NAME;
        return op(Op.INDEX,op(Op.INDEX,this.task.inputs,key),source);
    }
    _getImportLibraryInput(source : any) {
        let key = BuildDirectiveElementsTask.IMPORTS_LIBRARY_ELEMENT_INPUT_NAME;
        return op(Op.INDEX,op(Op.INDEX,this.task.inputs,key),source);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuildDirectiveElementsTaskTest() {
    }
}

export namespace BuildCompilationUnitElementTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'BuildCompilationUnitElementTaskTest';
    export type Interface = Omit<BuildCompilationUnitElementTaskTest, Constructors>;
}
@DartClass
export class BuildCompilationUnitElementTaskTest extends _AbstractDartTaskTest {
    source : any;

    target : any;

    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT1);
        expect(this.outputs.get(RESOLVED_UNIT1),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT1),isTrue);
    }
    test_perform_find_constants() {
        this._performBuildTask('const x = 1;\nclass C {\n  static const y = 1;\n  const C([p = 1]);\n}\n@x\nf() {\n  const z = 1;\n}\n');
        let unit : any = this.outputs.get(RESOLVED_UNIT1);
        let unitElement : any = this.outputs.get(COMPILATION_UNIT_ELEMENT);
        let annotation : any = op(Op.INDEX,unit.declarations.firstWhere((m : any) =>  {
            return is(m, any);
        }).metadata,0);
        let expectedConstants : core.DartList<any> = new core.DartList.literal<any>(unitElement.accessors.firstWhere((e : any) =>  {
            return e.isGetter;
        }).variable,op(Op.INDEX,op(Op.INDEX,unitElement.types,0).fields,0),op(Op.INDEX,op(Op.INDEX,unitElement.functions,0).localVariables,0),op(Op.INDEX,op(Op.INDEX,unitElement.types,0).constructors,0),resolutionMap.elementAnnotationForAnnotation(annotation),op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,unitElement.types,0).constructors,0).parameters,0));
        expect(this.outputs.get(COMPILATION_UNIT_CONSTANTS).toSet(),expectedConstants.toSet());
    }
    test_perform_library() {
        this._performBuildTask('library lib;\nimport \'lib2.dart\';\nexport \'lib3.dart\';\npart \'part.dart\';\nfinal x = \'\';\nclass A {\n  static final y = 0;\n}\nclass B = Object with A;\n');
        expect(this.outputs,hasLength(4));
        expect(this.outputs.get(COMPILATION_UNIT_CONSTANTS),isNotNull);
        expect(this.outputs.get(COMPILATION_UNIT_ELEMENT),isNotNull);
        expect(this.outputs.get(RESOLVED_UNIT1),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT1),isTrue);
    }
    test_perform_reuseElement() {
        this._performBuildTask('library lib;\nclass A {}\nclass B = Object with A;\n');
        let unit : any = this.outputs.get(RESOLVED_UNIT1);
        let unitElement : any = this.outputs.get(COMPILATION_UNIT_ELEMENT);
        expect(unit,isNotNull);
        expect(unitElement,isNotNull);
        let cacheEntry : any = this.analysisCache.get(this.target);
        cacheEntry.setState(RESOLVED_UNIT1,CacheState.INVALID);
        this.computeResult(this.target,RESOLVED_UNIT1,{
            matcher : properties.isBuildCompilationUnitElementTask});
        expect(this.outputs.get(COMPILATION_UNIT_ELEMENT),same(unitElement));
        expect(this.outputs.get(RESOLVED_UNIT1),isNot(same(unit)));
    }
    _performBuildTask(content : string) : void {
        this.source = this.newSource('/test.dart',content);
        this.target = new bare.createInstance(any,null,this.source,this.source);
        this.computeResult(this.target,RESOLVED_UNIT1,{
            matcher : properties.isBuildCompilationUnitElementTask});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuildCompilationUnitElementTaskTest() {
    }
}

export namespace InferInstanceMembersInUnitTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'InferInstanceMembersInUnitTaskTest';
    export type Interface = Omit<InferInstanceMembersInUnitTaskTest, Constructors>;
}
@DartClass
export class InferInstanceMembersInUnitTaskTest extends _AbstractDartTaskTest {
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT10);
        expect(this.outputs.get(RESOLVED_UNIT10),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT10),isTrue);
    }
    test_perform() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','class A {\n  X f;\n  Y m(Z x) {}\n}\nclass B extends A {\n  var f;\n  m(x) {}\n}\nclass X {}\nclass Y {}\nclass Z {}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT10,{
            matcher : properties.isInferInstanceMembersInUnitTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT10);
        let field : any = lib3.AstFinder.getFieldInClass(unit,'B','f');
        let method : any = lib3.AstFinder.getMethodInClass(unit,'B','m');
        let typeX : any = resolutionMap.elementDeclaredByClassDeclaration(lib3.AstFinder.getClass(unit,'X')).type;
        let typeY : any = resolutionMap.elementDeclaredByClassDeclaration(lib3.AstFinder.getClass(unit,'Y')).type;
        let typeZ : any = resolutionMap.elementDeclaredByClassDeclaration(lib3.AstFinder.getClass(unit,'Z')).type;
        expect(resolutionMap.elementDeclaredByVariableDeclaration(field).type,typeX);
        expect(resolutionMap.elementDeclaredByMethodDeclaration(method).returnType,typeY);
        expect(op(Op.INDEX,resolutionMap.elementDeclaredByMethodDeclaration(method).parameters,0).type,typeZ);
    }
    test_perform_cross_library_const() : void {
        this.enableStrongMode();
        let firstSource : any = this.newSource('/first.dart','library first;\n\nconst a = \'hello\';\n');
        let secondSource : any = this.newSource('/second.dart','import \'first.dart\';\n\nconst b = a;\nclass M {\n   String c = a;\n}\n');
        this.computeResult(new bare.createInstance(any,null,firstSource,firstSource),RESOLVED_UNIT10,{
            matcher : properties.isInferInstanceMembersInUnitTask});
        let firstUnit : any = this.outputs.get(RESOLVED_UNIT10);
        this.computeResult(new bare.createInstance(any,null,secondSource,secondSource),RESOLVED_UNIT10);
        let secondUnit : any = this.outputs.get(RESOLVED_UNIT10);
        let variableA : any = lib3.AstFinder.getTopLevelVariable(firstUnit,'a');
        let variableB : any = lib3.AstFinder.getTopLevelVariable(secondUnit,'b');
        let variableC : any = lib3.AstFinder.getFieldInClass(secondUnit,'M','c');
        let stringType : any = this.context.typeProvider.stringType;
        expect(resolutionMap.elementDeclaredByVariableDeclaration(variableA).type,stringType);
        expect(resolutionMap.elementDeclaredByVariableDeclaration(variableB).type,stringType);
        expect(variableB.initializer.staticType,stringType);
        expect(resolutionMap.elementDeclaredByVariableDeclaration(variableC).type,stringType);
        expect(variableC.initializer.staticType,stringType);
    }
    test_perform_reresolution() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','const topLevel = \'\';\nclass C {\n  String field = topLevel;\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT10);
        let unit : any = this.outputs.get(RESOLVED_UNIT10);
        let topLevelDecl : any = lib3.AstFinder.getTopLevelVariable(unit,'topLevel');
        let fieldDecl : any = lib3.AstFinder.getFieldInClass(unit,'C','field');
        let topLevel : any = topLevelDecl.name.staticElement;
        let field : any = fieldDecl.name.staticElement;
        let stringType : any = this.context.typeProvider.stringType;
        expect(topLevel.type,stringType);
        expect(field.type,stringType);
        expect(fieldDecl.initializer.staticType,stringType);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferInstanceMembersInUnitTaskTest() {
    }
}

export namespace InferStaticVariableTypesInUnitTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'InferStaticVariableTypesInUnitTaskTest';
    export type Interface = Omit<InferStaticVariableTypesInUnitTaskTest, Constructors>;
}
@DartClass
export class InferStaticVariableTypesInUnitTaskTest extends _AbstractDartTaskTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.enableStrongMode();
    }
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT8);
        expect(this.outputs.get(RESOLVED_UNIT8),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT8),isTrue);
    }
    test_perform_const_field() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','class M {\n  static const X = "";\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT8,{
            matcher : properties.isInferStaticVariableTypesInUnitTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT8);
        let declaration : any = lib3.AstFinder.getFieldInClass(unit,'M','X');
        let stringType : any = this.context.typeProvider.stringType;
        expect(resolutionMap.elementDeclaredByVariableDeclaration(declaration).type,stringType);
    }
    test_perform_hasParseError() {
        let source : any = this.newSource('/test.dart','@(i $=\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT8);
        expect(this.outputs.get(RESOLVED_UNIT8),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT8),isTrue);
    }
    test_perform_nestedDeclarations() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','var f = (int x) {\n  int squared(int value) => value * value;\n  var xSquared = squared(x);\n  return xSquared;\n};\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT8,{
            matcher : properties.isInferStaticVariableTypesInUnitTask});
    }
    test_perform_recursive() : void {
        this.enableStrongMode();
        let firstSource : any = this.newSource('/first.dart','import \'second.dart\';\n\nvar a = new M();\nvar c = b;\n');
        let secondSource : any = this.newSource('/second.dart','import \'first.dart\';\n\nvar b = a;\nclass M {}\n');
        this.computeResult(new bare.createInstance(any,null,firstSource,firstSource),RESOLVED_UNIT8,{
            matcher : properties.isInferStaticVariableTypesInUnitTask});
        let firstUnit : any = this.outputs.get(RESOLVED_UNIT8);
        this.computeResult(new bare.createInstance(any,null,secondSource,secondSource),RESOLVED_UNIT8);
        let secondUnit : any = this.outputs.get(RESOLVED_UNIT8);
        let variableA : any = lib3.AstFinder.getTopLevelVariable(firstUnit,'a');
        let variableB : any = lib3.AstFinder.getTopLevelVariable(secondUnit,'b');
        let variableC : any = lib3.AstFinder.getTopLevelVariable(firstUnit,'c');
        let classM : any = lib3.AstFinder.getClass(secondUnit,'M');
        let typeM : any = resolutionMap.elementDeclaredByClassDeclaration(classM).type;
        expect(resolutionMap.elementDeclaredByVariableDeclaration(variableA).type,typeM);
        expect(resolutionMap.elementDeclaredByVariableDeclaration(variableB).type,typeM);
        expect(variableB.initializer.staticType,typeM);
        expect(resolutionMap.elementDeclaredByVariableDeclaration(variableC).type,typeM);
        expect(variableC.initializer.staticType,typeM);
    }
    test_perform_simple() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','var X = 1;\nvar Y = () => 1 + X;\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT8,{
            matcher : properties.isInferStaticVariableTypesInUnitTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT8);
        let declaration : any = op(Op.INDEX,unit.declarations,1);
        let function : any = op(Op.INDEX,declaration.variables.variables,0).initializer;
        let body : any = function.body;
        let expression : any = body.expression;
        let intType : any = this.context.typeProvider.intType;
        expect(expression.staticType,intType);
    }
    test_staticModeHints_forStaticVariableInference() {
        this.context.analysisOptions = ((_) : any =>  {
            {
                _.strongModeHints = true;
                return _;
            }
        })(new bare.createInstance(any,null,this.context.analysisOptions));
        let source : any = this.newSource('/test.dart','var V = [42];\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT8);
        expect(this.outputs.get(RESOLVED_UNIT8),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT8),isTrue);
        let errors : core.DartList<any> = this.outputs.get(STATIC_VARIABLE_RESOLUTION_ERRORS_IN_UNIT) as core.DartList<any>;
        expect(errors,hasLength(1));
        expect(errors[0].errorCode,StrongModeCode.INFERRED_TYPE_LITERAL);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferStaticVariableTypesInUnitTaskTest() {
    }
}

export namespace InferStaticVariableTypeTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'InferStaticVariableTypeTaskTest';
    export type Interface = Omit<InferStaticVariableTypeTaskTest, Constructors>;
}
@DartClass
export class InferStaticVariableTypeTaskTest extends _AbstractDartTaskTest {
    test_getDeclaration_staticField() : void {
        let source : any = this.newSource('/test.dart','class C {\n  var field = \'\';\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT7);
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let declaration : any = lib3.AstFinder.getFieldInClass(unit,'C','field');
        let variable : any = declaration.name.staticElement;
        let inferTask : any = new bare.createInstance(any,null,this.task.context,variable);
        expect(inferTask.getDeclaration(unit),declaration);
    }
    test_getDeclaration_topLevel() : void {
        let source : any = this.newSource('/test.dart','var topLevel = \'\';\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT7);
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let declaration : any = lib3.AstFinder.getTopLevelVariable(unit,'topLevel');
        let variable : any = declaration.name.staticElement;
        let inferTask : any = new bare.createInstance(any,null,this.task.context,variable);
        expect(inferTask.getDeclaration(unit),declaration);
    }
    test_perform() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test3.dart','var topLevel3 = \'\';\nclass C {\n  var field3 = topLevel3;\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT7);
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let topLevelDecl : any = lib3.AstFinder.getTopLevelVariable(unit,'topLevel3');
        let fieldDecl : any = lib3.AstFinder.getFieldInClass(unit,'C','field3');
        let topLevel : any = topLevelDecl.name.staticElement;
        let field : any = fieldDecl.name.staticElement;
        this.computeResult(field,INFERRED_STATIC_VARIABLE,{
            matcher : properties.isInferStaticVariableTypeTask});
        let stringType : any = this.context.typeProvider.stringType;
        expect(topLevel.type,stringType);
        expect(field.type,stringType);
        expect(fieldDecl.initializer.staticType,stringType);
    }
    test_perform_const() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','const topLevel = "hello";\nclass C {\n  var field = topLevel;\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT7);
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let topLevel : any = lib3.AstFinder.getTopLevelVariable(unit,'topLevel').name.staticElement;
        let field : any = lib3.AstFinder.getFieldInClass(unit,'C','field').name.staticElement;
        this.computeResult(field,INFERRED_STATIC_VARIABLE,{
            matcher : properties.isInferStaticVariableTypeTask});
        let stringType : any = this.context.typeProvider.stringType;
        expect(topLevel.type,stringType);
        expect(field.type,stringType);
    }
    test_perform_cycle() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','var piFirst = true;\nvar pi = piFirst ? 3.14 : tau / 2;\nvar tau = piFirst ? pi * 2 : 6.28;\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT7);
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let piFirst : any = lib3.AstFinder.getTopLevelVariable(unit,'piFirst').name.staticElement;
        let pi : any = lib3.AstFinder.getTopLevelVariable(unit,'pi').name.staticElement;
        let tau : any = lib3.AstFinder.getTopLevelVariable(unit,'tau').name.staticElement;
        this.computeResult(piFirst,INFERRED_STATIC_VARIABLE,{
            matcher : properties.isInferStaticVariableTypeTask});
        expect(piFirst.type,this.context.typeProvider.boolType);
        expect(pi.type.isDynamic,isTrue);
        expect(tau.type.isDynamic,isTrue);
    }
    test_perform_error() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','var a = \'\' / null;\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT7);
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let a : any = lib3.AstFinder.getTopLevelVariable(unit,'a').name.staticElement;
        this.computeResult(a,INFERRED_STATIC_VARIABLE,{
            matcher : properties.isInferStaticVariableTypeTask});
        expect(a.type.isDynamic,isTrue);
    }
    test_perform_null() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','var a = null;\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT7);
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let a : any = lib3.AstFinder.getTopLevelVariable(unit,'a').name.staticElement;
        this.computeResult(a,INFERRED_STATIC_VARIABLE,{
            matcher : properties.isInferStaticVariableTypeTask});
        expect(a.type.isDynamic,isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferStaticVariableTypeTaskTest() {
    }
}

export namespace LibraryErrorsReadyTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'LibraryErrorsReadyTaskTest';
    export type Interface = Omit<LibraryErrorsReadyTaskTest, Constructors>;
}
@DartClass
export class LibraryErrorsReadyTaskTest extends _AbstractDartTaskTest {
    test_perform() {
        let library : any = this.newSource('/lib.dart','library lib;\npart \'part1.dart\';\npart \'part2.dart\';\nX v1;\n');
        let part1 : any = this.newSource('/part1.dart','part of lib;\nX v2;\n');
        let part2 : any = this.newSource('/part2.dart','part of lib;\nX v3;\n');
        this.computeResult(library,LIBRARY_ERRORS_READY,{
            matcher : properties.isLibraryErrorsReadyTask});
        expect(this.outputs,hasLength(1));
        let ready : boolean = this.outputs.get(LIBRARY_ERRORS_READY);
        expect(ready,isTrue);
        expect(this.context.getErrors(library).errors,hasLength(1));
        expect(this.context.getErrors(part1).errors,hasLength(1));
        expect(this.context.getErrors(part2).errors,hasLength(1));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryErrorsReadyTaskTest() {
    }
}

export namespace LibraryUnitErrorsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'LibraryUnitErrorsTaskTest';
    export type Interface = Omit<LibraryUnitErrorsTaskTest, Constructors>;
}
@DartClass
export class LibraryUnitErrorsTaskTest extends _AbstractDartTaskTest {
    getLibraryUnitErrors(outputs : core.DartMap<any,any>) : core.DartList<any> {
        return outputs.get(LIBRARY_UNIT_ERRORS) as core.DartList<any>;
    }
    test_perform_definingCompilationUnit() {
        let library : any = this.newSource('/test.dart','library test; import "dart:math";');
        this.computeResult(new bare.createInstance(any,null,library,library),LIBRARY_UNIT_ERRORS,{
            matcher : properties.isLibraryUnitErrorsTask});
        expect(this.outputs,hasLength(1));
        let errors : core.DartList<any> = this.getLibraryUnitErrors(this.outputs);
        expect(errors,hasLength(1));
    }
    test_perform_partInSingleLibrary() {
        let library : any = this.newSource('/lib.dart','library test; part "part.dart";');
        let part : any = this.newSource('/part.dart','part of test;');
        this.computeResult(new bare.createInstance(any,null,library,part),LIBRARY_UNIT_ERRORS,{
            matcher : properties.isLibraryUnitErrorsTask});
        expect(this.outputs,hasLength(1));
        let errors : core.DartList<any> = this.getLibraryUnitErrors(this.outputs);
        expect(errors,hasLength(0));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryUnitErrorsTaskTest() {
    }
}

export namespace ParseDartTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ParseDartTaskTest';
    export type Interface = Omit<ParseDartTaskTest, Constructors>;
}
@DartClass
export class ParseDartTaskTest extends _AbstractDartTaskTest {
    source : any;

    test_perform() {
        this._performParseTask('part of lib;\nclass B {}');
        expect(this.outputs,hasLength(10));
        expect(this.outputs.get(EXPLICITLY_IMPORTED_LIBRARIES),hasLength(0));
        expect(this.outputs.get(EXPORTED_LIBRARIES),hasLength(0));
        ParseDartTaskTest._assertHasCore(this.outputs.get(IMPORTED_LIBRARIES),1);
        expect(this.outputs.get(INCLUDED_PARTS),hasLength(0));
        expect(this.outputs.get(LIBRARY_SPECIFIC_UNITS),hasLength(1));
        expect(this.outputs.get(PARSE_ERRORS),hasLength(0));
        expect(this.outputs.get(PARSED_UNIT),isNotNull);
        expect(this.outputs.get(REFERENCED_SOURCES),hasLength(2));
        expect(this.outputs.get(SOURCE_KIND),SourceKind.PART);
        expect(this.outputs.get(UNITS),hasLength(1));
    }
    test_perform_computeSourceKind_noDirectives_hasContainingLibrary() {
        this.computeResult(this.newSource('/lib.dart','library lib;\npart \'test.dart\';\n'),PARSED_UNIT);
        this._performParseTask('');
        expect(this.outputs.get(SOURCE_KIND),SourceKind.LIBRARY);
    }
    test_perform_computeSourceKind_noDirectives_noContainingLibrary() {
        this._performParseTask('');
        expect(this.outputs.get(SOURCE_KIND),SourceKind.LIBRARY);
    }
    test_perform_doesNotExist() {
        this._performParseTask(null);
        expect(this.outputs,hasLength(10));
        expect(this.outputs.get(EXPLICITLY_IMPORTED_LIBRARIES),hasLength(0));
        expect(this.outputs.get(EXPORTED_LIBRARIES),hasLength(0));
        ParseDartTaskTest._assertHasCore(this.outputs.get(IMPORTED_LIBRARIES),1);
        expect(this.outputs.get(INCLUDED_PARTS),hasLength(0));
        expect(this.outputs.get(LIBRARY_SPECIFIC_UNITS),hasLength(1));
        expect(this.outputs.get(PARSE_ERRORS),hasLength(0));
        expect(this.outputs.get(PARSED_UNIT),isNotNull);
        expect(this.outputs.get(REFERENCED_SOURCES),hasLength(2));
        expect(this.outputs.get(SOURCE_KIND),SourceKind.LIBRARY);
        expect(this.outputs.get(UNITS),hasLength(1));
    }
    test_perform_flushTokenStream() {
        this._performParseTask('class Test {}\n');
        expect(this.analysisCache.getState(this.source,TOKEN_STREAM),CacheState.FLUSHED);
    }
    test_perform_invalidDirectives() {
        this._performParseTask('library lib;\nimport \'/does/not/exist.dart\';\nimport \'://invaliduri.dart\';\nexport \'${a}lib3.dart\';\npart \'part.dart\';\nclass A {}');
        expect(this.outputs,hasLength(10));
        expect(this.outputs.get(EXPLICITLY_IMPORTED_LIBRARIES),hasLength(1));
        expect(this.outputs.get(EXPORTED_LIBRARIES),hasLength(0));
        ParseDartTaskTest._assertHasCore(this.outputs.get(IMPORTED_LIBRARIES),2);
        expect(this.outputs.get(INCLUDED_PARTS),hasLength(1));
        expect(this.outputs.get(LIBRARY_SPECIFIC_UNITS),hasLength(2));
        expect(this.outputs.get(PARSE_ERRORS),hasLength(2));
        expect(this.outputs.get(PARSED_UNIT),isNotNull);
        expect(this.outputs.get(REFERENCED_SOURCES),hasLength(4));
        expect(this.outputs.get(SOURCE_KIND),SourceKind.LIBRARY);
        expect(this.outputs.get(UNITS),hasLength(2));
    }
    test_perform_library() {
        this._performParseTask('library lib;\nimport \'lib2.dart\';\nexport \'lib3.dart\';\npart \'part.dart\';\nclass A {');
        expect(this.outputs,hasLength(10));
        expect(this.outputs.get(EXPLICITLY_IMPORTED_LIBRARIES),hasLength(1));
        expect(this.outputs.get(EXPORTED_LIBRARIES),hasLength(1));
        ParseDartTaskTest._assertHasCore(this.outputs.get(IMPORTED_LIBRARIES),2);
        expect(this.outputs.get(INCLUDED_PARTS),hasLength(1));
        expect(this.outputs.get(LIBRARY_SPECIFIC_UNITS),hasLength(2));
        expect(this.outputs.get(PARSE_ERRORS),hasLength(1));
        expect(this.outputs.get(PARSED_UNIT),isNotNull);
        expect(this.outputs.get(REFERENCED_SOURCES),hasLength(5));
        expect(this.outputs.get(SOURCE_KIND),SourceKind.LIBRARY);
        expect(this.outputs.get(UNITS),hasLength(2));
    }
    test_perform_library_configurations_bool1() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.newSource('/foo.dart','');
        this.newSource('/foo_io.dart','');
        this.newSource('/foo_html.dart','');
        this.newSource('/bar.dart','');
        this.newSource('/bar_io.dart','');
        this.newSource('/bar_html.dart','');
        this._performParseTask('import \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\nexport \'bar.dart\'\n  if (dart.library.io) \'bar_io.dart\'\n  if (dart.library.html) \'bar_html.dart\';\n');
        let unit = this.outputs.get(PARSED_UNIT) as any;
        let imported = this.outputs.get(IMPORTED_LIBRARIES) as core.DartList<any>;
        this._assertContainsOnlyShortName(imported,'foo_io.dart');
        let import = op(Op.INDEX,unit.directives,0) as any;
        expect(import.uriSource.shortName,'foo.dart');
        expect(import.selectedSource.shortName,'foo_io.dart');
        expect(op(Op.INDEX,import.configurations,0).uriSource.shortName,'foo_io.dart');
        expect(op(Op.INDEX,import.configurations,1).uriSource.shortName,'foo_html.dart');
        let exported = this.outputs.get(EXPORTED_LIBRARIES) as core.DartList<any>;
        this._assertContainsOnlyShortName(exported,'bar_io.dart');
        let export = op(Op.INDEX,unit.directives,1) as any;
        expect(export.uriSource.shortName,'bar.dart');
        expect(export.selectedSource.shortName,'bar_io.dart');
        expect(op(Op.INDEX,export.configurations,0).uriSource.shortName,'bar_io.dart');
        expect(op(Op.INDEX,export.configurations,1).uriSource.shortName,'bar_html.dart');
        let refSources = this.outputs.get(REFERENCED_SOURCES) as core.DartList<any>;
        let refNames = refSources.map((source : any) =>  {
            return source.shortName;
        }).toList();
        expect(refNames,contains('test.dart'));
        expect(refNames,contains('foo.dart'));
        expect(refNames,contains('foo_io.dart'));
        expect(refNames,contains('foo_html.dart'));
        expect(refNames,contains('bar.dart'));
        expect(refNames,contains('bar_io.dart'));
        expect(refNames,contains('bar_html.dart'));
    }
    test_perform_library_configurations_bool2() {
        this.context.declaredVariables.define('dart.library.html','true');
        this.newSource('/foo.dart','');
        this.newSource('/foo_io.dart','');
        this.newSource('/foo_html.dart','');
        this._performParseTask('import \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        let imported = this.outputs.get(IMPORTED_LIBRARIES) as core.DartList<any>;
        this._assertContainsOnlyShortName(imported,'foo_html.dart');
    }
    test_perform_library_configurations_default() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.newSource('/foo.dart','');
        this.newSource('/foo_io.dart','');
        this.newSource('/foo_html.dart','');
        this._performParseTask('import \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        let imported = this.outputs.get(IMPORTED_LIBRARIES) as core.DartList<any>;
        this._assertContainsOnlyShortName(imported,'foo.dart');
    }
    test_perform_library_configurations_preferFirst() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.newSource('/foo.dart','');
        this.newSource('/foo_io.dart','');
        this.newSource('/foo_html.dart','');
        this._performParseTask('import \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        let imported = this.outputs.get(IMPORTED_LIBRARIES) as core.DartList<any>;
        this._assertContainsOnlyShortName(imported,'foo_io.dart');
        let unit = this.outputs.get(PARSED_UNIT) as any;
        let import = op(Op.INDEX,unit.directives,0) as any;
        expect(import.uriSource.shortName,'foo.dart');
        expect(import.selectedSource.shortName,'foo_io.dart');
        expect(op(Op.INDEX,import.configurations,0).uriSource.shortName,'foo_io.dart');
        expect(op(Op.INDEX,import.configurations,1).uriSource.shortName,'foo_html.dart');
    }
    test_perform_library_configurations_value() {
        this.context.declaredVariables.define('dart.platform','Windows');
        this.newSource('/foo.dart','');
        this.newSource('/foo_posix.dart','');
        this.newSource('/foo_windows.dart','');
        this._performParseTask('import \'foo.dart\'\n  if (dart.platform == \'Posix\') \'foo_posix.dart\'\n  if (dart.platform == \'Windows\') \'foo_windows.dart\';\n');
        let imported = this.outputs.get(IMPORTED_LIBRARIES) as core.DartList<any>;
        this._assertContainsOnlyShortName(imported,'foo_windows.dart');
    }
    test_perform_library_selfReferenceAsPart() {
        this._performParseTask('library lib;\npart \'test.dart\';\n');
        expect(this.outputs.get(INCLUDED_PARTS),unorderedEquals(new core.DartList.literal<any>(this.source)));
    }
    test_perform_part() {
        this._performParseTask('part of lib;\nclass B {}');
        expect(this.outputs,hasLength(10));
        expect(this.outputs.get(EXPLICITLY_IMPORTED_LIBRARIES),hasLength(0));
        expect(this.outputs.get(EXPORTED_LIBRARIES),hasLength(0));
        ParseDartTaskTest._assertHasCore(this.outputs.get(IMPORTED_LIBRARIES),1);
        expect(this.outputs.get(INCLUDED_PARTS),hasLength(0));
        expect(this.outputs.get(LIBRARY_SPECIFIC_UNITS),hasLength(1));
        expect(this.outputs.get(PARSE_ERRORS),hasLength(0));
        expect(this.outputs.get(PARSED_UNIT),isNotNull);
        expect(this.outputs.get(REFERENCED_SOURCES),hasLength(2));
        expect(this.outputs.get(SOURCE_KIND),SourceKind.PART);
        expect(this.outputs.get(UNITS),hasLength(1));
    }
    _assertContainsOnlyShortName(sources : core.DartList<any>,expectedShortName : string) : void {
        let shortNames : core.DartIterable<string> = sources.map((s : any) =>  {
            return s.shortName;
        });
        if (shortNames.length == 2) {
            expect(shortNames,unorderedEquals(new core.DartList.literal('core.dart',expectedShortName)));
        }else {
            expect(shortNames,unorderedEquals(new core.DartList.literal(expectedShortName)));
        }
    }
    _performParseTask(content : string) : void {
        if (content == null) {
            this.source = this.resourceProvider.getFile(this.resourceProvider.convertPath('/test.dart')).createSource();
        }else {
            this.source = this.newSource('/test.dart',content);
        }
        this.computeResult(this.source,PARSED_UNIT,{
            matcher : properties.isParseDartTask});
    }
    static _assertHasCore(sourceList : any,lenght : number) : void {
        let sources : core.DartList<any> = sourceList as core.DartList<any>;
        expect(sources,hasLength(lenght));
        expect(sources,contains(predicate((s : any) =>  {
            return s.fullName.endsWith('core.dart');
        })));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParseDartTaskTest() {
    }
}

export namespace PartiallyResolveUnitReferencesTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'PartiallyResolveUnitReferencesTaskTest';
    export type Interface = Omit<PartiallyResolveUnitReferencesTaskTest, Constructors>;
}
@DartClass
export class PartiallyResolveUnitReferencesTaskTest extends _AbstractDartTaskTest {
    test_perform_strong_importExport() {
        this.newSource('/a.dart','library a;\nclass A<T> {\n  T m() {}\n}\n');
        this.newSource('/b.dart','library b;\nexport \'a.dart\';\n');
        let sourceC : any = this.newSource('/c.dart','library c;\nimport \'b.dart\';\nmain() {\n  new A<int>().m();\n}\n');
        this.computeResult(new bare.createInstance(any,null,sourceC,sourceC),RESOLVED_UNIT7,{
            matcher : properties.isPartiallyResolveUnitReferencesTask});
        expect(this.outputs.get(INFERABLE_STATIC_VARIABLES_IN_UNIT),hasLength(0));
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        expect(unit,isNotNull);
        let mainFunction : any = op(Op.INDEX,unit.declarations,0);
        expect(mainFunction.element,isNotNull);
        let body : any = mainFunction.functionExpression.body;
        let statements : core.DartList<any> = body.block.statements;
        let statement : any = statements[0];
        let invocation : any = statement.expression;
        let methodElement : any = invocation.methodName.staticElement;
        expect(methodElement,isNull);
    }
    test_perform_strong_inferable() {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','int a = b;\nint b = c;\nvar d = 0;\nclass A {}\nclass C {\n  static final f = \'\';\n  var g = 0;\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT7,{
            matcher : properties.isPartiallyResolveUnitReferencesTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        {
            let variables : core.DartList<any> = this.outputs.get(INFERABLE_STATIC_VARIABLES_IN_UNIT) as core.DartList<any>;
            expect(variables,hasLength(4));
            expect(variables.map((v : any) =>  {
                return v.displayName;
            }),unorderedEquals(new core.DartList.literal('a','b','d','f')));
        }
        let a : any = op(Op.INDEX,unit.declarations,0);
        let variableA : any = op(Op.INDEX,a.variables.variables,0);
        let initializer : any = variableA.initializer;
        expect(initializer.staticElement,isNotNull);
    }
    test_perform_strong_notResolved() {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','int A;\nf1() {\n  A;\n}\nvar f2 = () {\n  A;\n  void f3() {\n    A;\n  }\n}\nclass C {\n  C() {\n    A;\n  }\n  m() {\n    A;\n  }\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT7,{
            matcher : properties.isPartiallyResolveUnitReferencesTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT7);
        let declarations : any = unit.declarations;
        var expectReference : (body : any,isResolved : boolean) => void = (body : any,isResolved : boolean) : void =>  {
            let statement : any = op(Op.INDEX,body.block.statements,0);
            let reference : any = statement.expression;
            expect(reference.staticElement,isResolved ? isNotNull : isNull);
        };
        let f1 : any = op(Op.INDEX,declarations,1);
        expectReference(f1.functionExpression.body,false);
        let f2 : any = op(Op.INDEX,declarations,2);
        let expression2 : any = op(Op.INDEX,f2.variables.variables,0).initializer;
        let body2 : any = expression2.body;
        expectReference(body2,true);
        let statement2 : any = op(Op.INDEX,body2.block.statements,1);
        let innerBody : any = statement2.functionDeclaration.functionExpression.body;
        expectReference(innerBody,true);
        let c : any = op(Op.INDEX,declarations,3);
        let members : any = c.members;
        let constructor : any = op(Op.INDEX,members,0);
        expectReference(constructor.body,false);
        let method : any = op(Op.INDEX,members,1);
        expectReference(method.body,false);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PartiallyResolveUnitReferencesTaskTest() {
    }
}

export namespace ResolveDirectiveElementsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ResolveDirectiveElementsTaskTest';
    export type Interface = Omit<ResolveDirectiveElementsTaskTest, Constructors>;
}
@DartClass
export class ResolveDirectiveElementsTaskTest extends _AbstractDartTaskTest {
    test_perform() {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/libA.dart','library libA;\nimport \'libB.dart\';\nexport \'libC.dart\';\n'],
            ['/libB.dart','library libB;\n'],
            ['/libC.dart','library libC;\n']]));
        let sourceA : any = sources[0];
        let targetA : any = new bare.createInstance(any,null,sourceA,sourceA);
        this.computeResult(sourceA,LIBRARY_ELEMENT2,{
            matcher : properties.isBuildDirectiveElementsTask});
        let libraryElementA : any = this.outputs.get(LIBRARY_ELEMENT2);
        let libraryElementB : any = op(Op.INDEX,libraryElementA.imports,0).importedLibrary;
        let libraryElementC : any = op(Op.INDEX,libraryElementA.exports,0).exportedLibrary;
        {
            let unitA : any = this.context.getResult(targetA,RESOLVED_UNIT1);
            op(Op.INDEX,unitA.directives,1).element = null;
            op(Op.INDEX,unitA.directives,2).element = null;
        }
        this.computeResult(targetA,RESOLVED_UNIT2,{
            matcher : properties.isResolveDirectiveElementsTask});
        let unitA : any = this.context.getResult(targetA,RESOLVED_UNIT2);
        {
            let importNode : any = op(Op.INDEX,unitA.directives,1);
            let importElement : any = importNode.element;
            expect(importElement,isNotNull);
            expect(importElement.importedLibrary,libraryElementB);
        }
        {
            let exportNode : any = op(Op.INDEX,unitA.directives,2);
            let exportElement : any = exportNode.element;
            expect(exportElement,isNotNull);
            expect(exportElement.exportedLibrary,libraryElementC);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveDirectiveElementsTaskTest() {
    }
}

export namespace ResolveInstanceFieldsInUnitTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ResolveInstanceFieldsInUnitTaskTest';
    export type Interface = Omit<ResolveInstanceFieldsInUnitTaskTest, Constructors>;
}
@DartClass
export class ResolveInstanceFieldsInUnitTaskTest extends _AbstractDartTaskTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.enableStrongMode();
    }
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT9);
        expect(this.outputs.get(RESOLVED_UNIT9),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT9),isTrue);
    }
    test_perform_inference_cross_unit_instance() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','          import \'b.dart\';\n          class A {\n            final a2 = new B().b2;\n          }\n      '],
            ['/b.dart','          class B {\n            final b2 = 1;\n          }\n      '],
            ['/main.dart','          import "a.dart";\n\n          test1() {\n            int x = 0;\n            x = new A().a2;\n          }\n    ']]));
        let intType : any = this.context.typeProvider.intType;
        let dynamicType : any = this.context.typeProvider.dynamicType;
        this.computeResult(new bare.createInstance(any,null,sources[1],sources[1]),RESOLVED_UNIT9);
        let unit1 : any = this.outputs.get(RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b2"),dynamicType,intType);
        this.computeResult(new bare.createInstance(any,null,sources[0],sources[0]),RESOLVED_UNIT9);
        let unit0 : any = this.outputs.get(RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b2"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,intType);
        this.computeResult(new bare.createInstance(any,null,sources[2],sources[2]),RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b2"),intType,intType);
    }
    test_perform_inference_cross_unit_instance_cyclic() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','          import \'b.dart\';\n          class A {\n            final a2 = new B().b2;\n          }\n      '],
            ['/b.dart','          import \'a.dart\';\n          class B {\n            final b2 = 1;\n          }\n      '],
            ['/main.dart','          import "a.dart";\n\n          test1() {\n            int x = 0;\n            x = new A().a2;\n          }\n    ']]));
        let dynamicType : any = this.context.typeProvider.dynamicType;
        this.computeResult(new bare.createInstance(any,null,sources[0],sources[0]),RESOLVED_UNIT9);
        let unit0 : any = this.outputs.get(RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,dynamicType);
        this.computeResult(new bare.createInstance(any,null,sources[2],sources[2]),RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,dynamicType);
    }
    test_perform_inference_cross_unit_static_instance() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','          import \'b.dart\';\n          class A {\n            static final a1 = B.b1;\n            final a2 = new B().b2;\n          }\n      '],
            ['/b.dart','          class B {\n            static final b1 = 1;\n            final b2 = 1;\n          }\n      '],
            ['/main.dart','          import "a.dart";\n\n          test1() {\n            int x = 0;\n            // inference in A now works.\n            x = A.a1;\n            x = new A().a2;\n          }\n    ']]));
        let intType : any = this.context.typeProvider.intType;
        let dynamicType : any = this.context.typeProvider.dynamicType;
        this.computeResult(new bare.createInstance(any,null,sources[1],sources[1]),RESOLVED_UNIT9);
        let unit1 : any = this.outputs.get(RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b1"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b2"),dynamicType,intType);
        this.computeResult(new bare.createInstance(any,null,sources[0],sources[0]),RESOLVED_UNIT9);
        let unit0 : any = this.outputs.get(RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a1"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b1"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b2"),intType,intType);
        this.computeResult(new bare.createInstance(any,null,sources[2],sources[2]),RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a1"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b1"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b2"),intType,intType);
    }
    test_perform_inference_instance() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','          import \'b.dart\';\n          class A {\n            final a2 = new B().b2;\n          }\n\n          class B {\n            final b2 = 1;\n          }\n      '],
            ['/main.dart','          import "a.dart";\n\n          test1() {\n            int x = 0;\n            x = new A().a2;\n          }\n    ']]));
        let intType : any = this.context.typeProvider.intType;
        let dynamicType : any = this.context.typeProvider.dynamicType;
        this.computeResult(new bare.createInstance(any,null,sources[0],sources[0]),RESOLVED_UNIT9);
        let unit0 : any = this.outputs.get(RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,dynamicType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"B","b2"),dynamicType,intType);
        this.computeResult(new bare.createInstance(any,null,sources[1],sources[1]),RESOLVED_UNIT9);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,dynamicType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"B","b2"),intType,intType);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveInstanceFieldsInUnitTaskTest() {
    }
}

export namespace ResolveLibraryTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ResolveLibraryTaskTest';
    export type Interface = Omit<ResolveLibraryTaskTest, Constructors>;
}
@DartClass
export class ResolveLibraryTaskTest extends _AbstractDartTaskTest {
    test_perform() {
        let sourceLib : any = this.newSource('/my_lib.dart','library my_lib;\nconst a = new A();\nclass A {\n  const A();\n}\n@a\nclass C {}\n');
        this.computeResult(sourceLib,LIBRARY_ELEMENT,{
            matcher : properties.isResolveLibraryTask});
        let library : any = this.outputs.get(LIBRARY_ELEMENT);
        let classC : any = library.getType('C');
        let metadata : core.DartList<any> = classC.metadata;
        expect(metadata,hasLength(1));
        let annotation : any = metadata[0];
        expect(annotation,isNotNull);
        expect((annotation as any).evaluationResult,isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveLibraryTaskTest() {
    }
}

export namespace ResolveLibraryTypeNamesTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ResolveLibraryTypeNamesTaskTest';
    export type Interface = Omit<ResolveLibraryTypeNamesTaskTest, Constructors>;
}
@DartClass
export class ResolveLibraryTypeNamesTaskTest extends _AbstractDartTaskTest {
    test_perform() {
        let sourceLib : any = this.newSource('/my_lib.dart','library my_lib;\npart \'my_part.dart\';\nclass A {}\nclass B extends A {}\n');
        this.newSource('/my_part.dart','part of my_lib;\nclass C extends A {}\n');
        this.computeResult(sourceLib,LIBRARY_ELEMENT6,{
            matcher : properties.isResolveLibraryTypeNamesTask});
        let library : any = this.outputs.get(LIBRARY_ELEMENT6);
        {
            let classB : any = library.getType('B');
            expect(classB.supertype.displayName,'A');
        }
        {
            let classC : any = library.getType('C');
            expect(classC.supertype.displayName,'A');
        }
        expect(library.loadLibraryFunction,isNotNull);
    }
    test_perform_external() {
        let sourceA : any = this.newSource('/a.dart','library a;\nimport \'b.dart\';\nclass A extends B {}\n');
        this.newSource('/b.dart','library b;\nclass B {}\n');
        this.computeResult(sourceA,LIBRARY_ELEMENT6,{
            matcher : properties.isResolveLibraryTypeNamesTask});
        let library : any = this.outputs.get(LIBRARY_ELEMENT6);
        {
            let clazz : any = library.getType('A');
            expect(clazz.displayName,'A');
            clazz = clazz.supertype.element;
            expect(clazz.displayName,'B');
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveLibraryTypeNamesTaskTest() {
    }
}

export namespace ResolveTopLevelUnitTypeBoundsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ResolveTopLevelUnitTypeBoundsTaskTest';
    export type Interface = Omit<ResolveTopLevelUnitTypeBoundsTaskTest, Constructors>;
}
@DartClass
export class ResolveTopLevelUnitTypeBoundsTaskTest extends _AbstractDartTaskTest {
    test_perform_boundIsGenericType() {
        let source : any = this.newSource('/test.dart','class C<T extends Map<String, List<int>>> {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT4,{
            matcher : properties.isResolveTopLevelUnitTypeBoundsTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT4);
        let nodeC : any = op(Op.INDEX,unit.declarations,0);
        this._assertTypeParameterBound(op(Op.INDEX,nodeC.typeParameters.typeParameters,0),'Map<String, List<int>>','Map');
    }
    test_perform_errors() {
        let source : any = this.newSource('/test.dart','class C<T extends NoSuchClass> {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVE_TYPE_BOUNDS_ERRORS,{
            matcher : properties.isResolveTopLevelUnitTypeBoundsTask});
        this._fillErrorListener(RESOLVE_TYPE_BOUNDS_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(StaticWarningCode.UNDEFINED_CLASS));
    }
    test_perform_ignoreBoundsOfBounds() {
        let source : any = this.newSource('/test.dart','class A<T1 extends num> {}\nclass B<T2 extends A> {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT4,{
            matcher : properties.isResolveTopLevelUnitTypeBoundsTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT4);
        let nodeB : any = op(Op.INDEX,unit.declarations,1);
        this._assertTypeParameterBound(op(Op.INDEX,nodeB.typeParameters.typeParameters,0),'A<dynamic>','A');
    }
    test_perform_outputs() {
        let source : any = this.newSource('/test.dart','class C<T extends int> {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT4);
        expect(this.outputs.get(RESOLVED_UNIT4),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT4),isTrue);
        expect(this.outputs.get(RESOLVE_TYPE_BOUNDS_ERRORS),isNotNull);
    }
    test_perform_unitMember_ClassDeclaration() {
        let source : any = this.newSource('/test.dart','class C<T extends int> extends Object {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT4,{
            matcher : properties.isResolveTopLevelUnitTypeBoundsTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT4);
        let nodeC : any = op(Op.INDEX,unit.declarations,0);
        expect(nodeC.extendsClause.superclass.name.staticElement,isNull);
        this._assertTypeParameterBound(op(Op.INDEX,nodeC.typeParameters.typeParameters,0),'int','int');
    }
    test_perform_unitMember_ClassTypeAlias() {
        let source : any = this.newSource('/test.dart','class C<T extends double> = Object;\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT4,{
            matcher : properties.isResolveTopLevelUnitTypeBoundsTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT4);
        let nodeC : any = op(Op.INDEX,unit.declarations,0);
        expect(nodeC.superclass.name.staticElement,isNull);
        this._assertTypeParameterBound(op(Op.INDEX,nodeC.typeParameters.typeParameters,0),'double','double');
    }
    test_perform_unitMember_FunctionTypeAlias() {
        let source : any = this.newSource('/test.dart','typedef F<T extends String>();\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT4,{
            matcher : properties.isResolveTopLevelUnitTypeBoundsTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT4);
        let nodeF : any = op(Op.INDEX,unit.declarations,0);
        this._assertTypeParameterBound(op(Op.INDEX,nodeF.typeParameters.typeParameters,0),'String','String');
    }
    _assertTypeParameterBound(typeParameter : any,expectedBoundTypeString : string,expectedBoundElementName : string) : void {
        let bound : any = typeParameter.bound;
        expect(bound,new bare.createInstance(any,null));
        let boundNode : any = bound;
        let boundName : any = boundNode.name;
        expect(boundNode.type.toString(),expectedBoundTypeString);
        expect(boundName.staticType.toString(),expectedBoundTypeString);
        expect(resolutionMap.staticElementForIdentifier(boundName).displayName,expectedBoundElementName);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveTopLevelUnitTypeBoundsTaskTest() {
    }
}

export namespace ResolveUnitTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ResolveUnitTaskTest';
    export type Interface = Omit<ResolveUnitTaskTest, Constructors>;
}
@DartClass
export class ResolveUnitTaskTest extends _AbstractDartTaskTest {
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT11);
        expect(this.outputs.get(RESOLVED_UNIT11),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT11),isTrue);
    }
    test_perform() : void {
        let source : any = this.newSource('/test.dart','void f() {\n  var c = new C();\n  c.m();\n}\nclass C {\n  void m() {\n    f();\n  }\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT11,{
            matcher : properties.isResolveUnitTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT11);
        let f : any = op(Op.INDEX,unit.declarations,0);
        this._assertResolved(f.functionExpression.body);
        let m : any = op(Op.INDEX,(op(Op.INDEX,unit.declarations,1) as any).members,0);
        this._assertResolved(m.body);
        expect(this.outputs.get(RESOLVE_UNIT_ERRORS),hasLength(0));
    }
    _assertResolved(body : any) : void {
        let verifier : lib4.ResolutionVerifier = new lib4.ResolutionVerifier();
        body.accept(verifier);
        verifier.assertResolved();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveUnitTaskTest() {
    }
}

export namespace ResolveUnitTypeNamesTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ResolveUnitTypeNamesTaskTest';
    export type Interface = Omit<ResolveUnitTypeNamesTaskTest, Constructors>;
}
@DartClass
export class ResolveUnitTypeNamesTaskTest extends _AbstractDartTaskTest {
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT5);
        expect(this.outputs.get(RESOLVED_UNIT5),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT5),isTrue);
    }
    test_perform() {
        let source : any = this.newSource('/test.dart','class A {}\nclass B extends A {}\nint f(String p) => p.length;\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT5,{
            matcher : properties.isResolveUnitTypeNamesTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT5);
        {
            let nodeA : any = op(Op.INDEX,unit.declarations,0);
            let nodeB : any = op(Op.INDEX,unit.declarations,1);
            let extendsType : any = nodeB.extendsClause.superclass.type;
            expect(extendsType,resolutionMap.elementDeclaredByClassDeclaration(nodeA).type);
        }
        {
            let functionNode : any = op(Op.INDEX,unit.declarations,2);
            let returnType : any = functionNode.returnType.type;
            let parameters : core.DartList<any> = functionNode.functionExpression.parameters.parameters;
            expect(returnType.displayName,'int');
            expect(resolutionMap.elementDeclaredByFormalParameter(parameters[0]).type.displayName,'String');
        }
    }
    test_perform_errors() {
        let source : any = this.newSource('/test.dart','NoSuchClass f() => null;\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVE_TYPE_NAMES_ERRORS,{
            matcher : properties.isResolveUnitTypeNamesTask});
        this._fillErrorListener(RESOLVE_TYPE_NAMES_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(StaticWarningCode.UNDEFINED_CLASS));
    }
    test_perform_typedef() {
        let source : any = this.newSource('/test.dart','typedef int F(G g);\ntypedef String G(int p);\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT5,{
            matcher : properties.isResolveUnitTypeNamesTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT5);
        let nodeF : any = op(Op.INDEX,unit.declarations,0);
        let nodeG : any = op(Op.INDEX,unit.declarations,1);
        {
            let parameter : any = op(Op.INDEX,nodeF.parameters.parameters,0);
            let parameterType : any = resolutionMap.elementDeclaredByFormalParameter(parameter).type;
            let returnTypeElement : any = resolutionMap.typeForTypeName(nodeF.returnType).element;
            expect(returnTypeElement.displayName,'int');
            expect(parameterType.element,nodeG.element);
        }
        {
            let parameter : any = op(Op.INDEX,nodeG.parameters.parameters,0);
            let parameterType : any = resolutionMap.elementDeclaredByFormalParameter(parameter).type;
            expect(resolutionMap.typeForTypeName(nodeG.returnType).element.displayName,'String');
            expect(parameterType.element.displayName,'int');
        }
    }
    test_perform_typedef_errors() {
        let source : any = this.newSource('/test.dart','typedef int F(NoSuchType p);\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVE_TYPE_NAMES_ERRORS,{
            matcher : properties.isResolveUnitTypeNamesTask});
        this._fillErrorListener(RESOLVE_TYPE_NAMES_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(StaticWarningCode.UNDEFINED_CLASS));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveUnitTypeNamesTaskTest() {
    }
}

export namespace ResolveVariableReferencesTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ResolveVariableReferencesTaskTest';
    export type Interface = Omit<ResolveVariableReferencesTaskTest, Constructors>;
}
@DartClass
export class ResolveVariableReferencesTaskTest extends _AbstractDartTaskTest {
    expectMutated(body : any,variable : any,mutatedInClosure : boolean,mutatedInScope : boolean) : void {
        expect(body.isPotentiallyMutatedInClosure(variable),mutatedInClosure);
        expect(body.isPotentiallyMutatedInScope(variable),mutatedInScope);
    }
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT6);
        expect(this.outputs.get(RESOLVED_UNIT6),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT6),isTrue);
    }
    test_perform_buildClosureLibraryElements() {
        let source : any = this.newSource('/test.dart','main() {\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT6,{
            matcher : properties.isResolveVariableReferencesTask});
    }
    test_perform_local() {
        let source : any = this.newSource('/test.dart','main() {\n  var v1 = 1;\n  var v2 = 1;\n  var v3 = 1;\n  var v4 = 1;\n  v2 = 2;\n  v4 = 2;\n  localFunction() {\n    v3 = 3;\n    v4 = 3;\n  }\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT6,{
            matcher : properties.isResolveVariableReferencesTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT6);
        let mainDeclaration : any = op(Op.INDEX,unit.declarations,0);
        let body : any = mainDeclaration.functionExpression.body;
        let main : any = mainDeclaration.element;
        this.expectMutated(body,op(Op.INDEX,main.localVariables,0),false,false);
        this.expectMutated(body,op(Op.INDEX,main.localVariables,1),false,true);
        this.expectMutated(body,op(Op.INDEX,main.localVariables,2),true,true);
        this.expectMutated(body,op(Op.INDEX,main.localVariables,3),true,true);
    }
    test_perform_parameter() {
        let source : any = this.newSource('/test.dart','main(p1, p2, p3, p4) {\n  p2 = 2;\n  p4 = 2;\n  localFunction() {\n    p3 = 3;\n    p4 = 3;\n  }\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT6,{
            matcher : properties.isResolveVariableReferencesTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT6);
        let mainDeclaration : any = op(Op.INDEX,unit.declarations,0);
        let body : any = mainDeclaration.functionExpression.body;
        let main : any = mainDeclaration.element;
        this.expectMutated(body,op(Op.INDEX,main.parameters,0),false,false);
        this.expectMutated(body,op(Op.INDEX,main.parameters,1),false,true);
        this.expectMutated(body,op(Op.INDEX,main.parameters,2),true,true);
        this.expectMutated(body,op(Op.INDEX,main.parameters,3),true,true);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolveVariableReferencesTaskTest() {
    }
}

export namespace ScanDartTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'ScanDartTaskTest';
    export type Interface = Omit<ScanDartTaskTest, Constructors>;
}
@DartClass
export class ScanDartTaskTest extends _AbstractDartTaskTest {
    test_ignore_info() {
        this._performScanTask('//ignore: error_code\n//ignore_for_file: error_code\nvar x = \'\';\nfoo(); // ignore:   error_code_2\nbar(); //ignore: error_code, error_code_2\n// ignore_for_file:  error_code_2, error_code_3\n');
        let info : any = this.outputs.get(IGNORE_INFO);
        expect(info.ignores.keys,hasLength(3));
        expect(op(Op.INDEX,info.ignores,1).first,'error_code');
        expect(op(Op.INDEX,info.ignores,4).first,'error_code_2');
        expect(op(Op.INDEX,info.ignores,5),unorderedEquals(new core.DartList.literal('error_code','error_code_2')));
        expect(info.ignoreForFiles,unorderedEquals(new core.DartList.literal('error_code','error_code_2','error_code_3')));
    }
    test_perform_errors() {
        this._performScanTask('import "');
        expect(this.outputs,hasLength(4));
        expect(this.outputs.get(LINE_INFO),isNotNull);
        expect(this.outputs.get(SCAN_ERRORS),hasLength(1));
        expect(this.outputs.get(TOKEN_STREAM),isNotNull);
        let ignoreInfo : any = this.outputs.get(IGNORE_INFO);
        expect(ignoreInfo,isNotNull);
        expect(ignoreInfo.hasIgnores,isFalse);
    }
    test_perform_noErrors() {
        this._performScanTask('class A {}');
        expect(this.outputs,hasLength(4));
        expect(this.outputs.get(LINE_INFO),isNotNull);
        expect(this.outputs.get(SCAN_ERRORS),hasLength(0));
        expect(this.outputs.get(TOKEN_STREAM),isNotNull);
        let ignoreInfo : any = this.outputs.get(IGNORE_INFO);
        expect(ignoreInfo,isNotNull);
        expect(ignoreInfo.hasIgnores,isFalse);
    }
    test_perform_script() {
        let scriptContent : string = '      void buttonPressed() {\n    ';
        let htmlContent : string = `<!DOCTYPE html>\n<html>\n  <head>\n    <title>test page</title>\n    <script type='application/dart'>${scriptContent}</script>\n  </head>\n  <body>Test</body>\n</html>\n`;
        let source : any = this.newSource('/test.html',htmlContent);
        let script : any = new bare.createInstance(any,null,source,new core.DartList.literal(new bare.createInstance(any,null,97,5,36,scriptContent)));
        this.computeResult(script,TOKEN_STREAM,{
            matcher : properties.isScanDartTask});
        expect(this.outputs.get(LINE_INFO),isNotNull);
        expect(this.outputs.get(SCAN_ERRORS),isEmpty);
        let tokenStream : any = this.outputs.get(TOKEN_STREAM);
        expect(tokenStream,isNotNull);
        expect(tokenStream.lexeme,'void');
    }
    _performScanTask(content : string) : void {
        let target : any = this.newSource('/test.dart',content);
        this.computeResult(target,TOKEN_STREAM,{
            matcher : properties.isScanDartTask});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScanDartTaskTest() {
    }
}

export namespace StrongModeInferenceTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'StrongModeInferenceTest';
    export type Interface = Omit<StrongModeInferenceTest, Constructors>;
}
@DartClass
export class StrongModeInferenceTest extends _AbstractDartTaskTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.enableStrongMode();
    }
    test_perform_cycle() : void {
        let source : any = this.newSource('/test.dart','var piFirst = true;\nvar pi = piFirst ? 3.14 : tau / 2;\nvar tau = piFirst ? pi * 2 : 6.28;\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT11);
        let unit : any = this.outputs.get(RESOLVED_UNIT11);
        let piFirst : any = lib3.AstFinder.getTopLevelVariable(unit,'piFirst').name.staticElement;
        let pi : any = lib3.AstFinder.getTopLevelVariable(unit,'pi').name.staticElement;
        let tau : any = lib3.AstFinder.getTopLevelVariable(unit,'tau').name.staticElement;
        let piFirstUse : any = (lib3.AstFinder.getTopLevelVariable(unit,'tau').initializer as any).condition;
        expect(piFirstUse.staticType,this.context.typeProvider.boolType);
        expect(piFirst.type,this.context.typeProvider.boolType);
        expect(pi.type.isDynamic,isTrue);
        expect(tau.type.isDynamic,isTrue);
    }
    test_perform_inference_cross_unit_cyclic() : void {
        let firstSource : any = this.newSource('/a.dart','          import \'test.dart\';\n          var x = 2;\n          class A { static var x = 2; }\n');
        let secondSource : any = this.newSource('/test.dart','          import \'a.dart\';\n          var y = x;\n          class B { static var y = A.x; }\n\n          test1() {\n            int t = 3;\n            t = x;\n            t = y;\n            t = A.x;\n            t = B.y;\n          }\n');
        this.computeResult(new bare.createInstance(any,null,firstSource,firstSource),RESOLVED_UNIT11);
        let unit1 : any = this.outputs.get(RESOLVED_UNIT11);
        this.computeResult(new bare.createInstance(any,null,secondSource,secondSource),RESOLVED_UNIT11);
        let unit2 : any = this.outputs.get(RESOLVED_UNIT11);
        let intType : any = this.context.typeProvider.intType;
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit1,"x"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"A","x"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit2,"y"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit2,"B","y"),intType,intType);
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit2,"test1");
        this.assertAssignmentStatementTypes(statements[1],intType,intType);
        this.assertAssignmentStatementTypes(statements[2],intType,intType);
        this.assertAssignmentStatementTypes(statements[3],intType,intType);
        this.assertAssignmentStatementTypes(statements[4],intType,intType);
    }
    test_perform_inference_cross_unit_instance() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','          import \'b.dart\';\n          class A {\n            final a2 = new B().b2;\n          }\n      '],
            ['/b.dart','          class B {\n            final b2 = 1;\n          }\n      '],
            ['/main.dart','          import "a.dart";\n\n          test1() {\n            int x = 0;\n            x = new A().a2;\n          }\n    ']]));
        let units : core.DartList<any> = this.computeLibraryResults(sources,RESOLVED_UNIT11).toList();
        let unit0 : any = units[0];
        let unit1 : any = units[1];
        let unit2 : any = units[2];
        let intType : any = this.context.typeProvider.intType;
        let dynamicType : any = this.context.typeProvider.dynamicType;
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b2"),intType,intType);
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit2,"test1");
        this.assertAssignmentStatementTypes(statements[1],intType,dynamicType);
    }
    test_perform_inference_cross_unit_instance_member() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','          import \'b.dart\';\n            var bar = new B();\n            void foo() {\n              String x = bar.f.z;\n            }\n      '],
            ['/b.dart','        class C {\n          var z = 3;\n        }\n\n        class B {\n          var f = new C();\n        }\n      '],
            ['/c.dart','          import \'b.dart\';\n            var bar = new B();\n            void foo() {\n              String x = bar.f.z;\n            }\n    ']]));
        let units : core.DartList<any> = this.computeLibraryResults(sources,RESOLVED_UNIT11).toList();
        let unit0 : any = units[0];
        let unit2 : any = units[2];
        let intType : any = this.context.typeProvider.intType;
        let stringType : any = this.context.typeProvider.stringType;
        this.assertVariableDeclarationStatementTypes(lib3.AstFinder.getStatementsInTopLevelFunction(unit0,"foo")[0],stringType,intType);
        this.assertVariableDeclarationStatementTypes(lib3.AstFinder.getStatementsInTopLevelFunction(unit2,"foo")[0],stringType,intType);
    }
    test_perform_inference_cross_unit_non_cyclic() : void {
        let firstSource : any = this.newSource('/a.dart','          var x = 2;\n          class A { static var x = 2; }\n');
        let secondSource : any = this.newSource('/test.dart','          import \'a.dart\';\n          var y = x;\n          class B { static var y = A.x; }\n\n          test1() {\n            x = /*severe:StaticTypeError*/"hi";\n            y = /*severe:StaticTypeError*/"hi";\n            A.x = /*severe:StaticTypeError*/"hi";\n            B.y = /*severe:StaticTypeError*/"hi";\n          }\n');
        this.computeResult(new bare.createInstance(any,null,firstSource,firstSource),RESOLVED_UNIT11);
        let unit1 : any = this.outputs.get(RESOLVED_UNIT11);
        this.computeResult(new bare.createInstance(any,null,secondSource,secondSource),RESOLVED_UNIT11);
        let unit2 : any = this.outputs.get(RESOLVED_UNIT11);
        let intType : any = this.context.typeProvider.intType;
        let stringType : any = this.context.typeProvider.stringType;
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit1,"x"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"A","x"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit2,"y"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit2,"B","y"),intType,intType);
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit2,"test1");
        this.assertAssignmentStatementTypes(statements[0],intType,stringType);
        this.assertAssignmentStatementTypes(statements[1],intType,stringType);
    }
    test_perform_inference_cross_unit_static_instance() : void {
        let sources : core.DartList<any> = this.newSources(new core.DartMap.literal([
            ['/a.dart','          import \'b.dart\';\n          class A {\n            static final a1 = B.b1;\n            final a2 = new B().b2;\n          }\n      '],
            ['/b.dart','          class B {\n            static final b1 = 1;\n            final b2 = 1;\n          }\n      '],
            ['/main.dart','          import "a.dart";\n\n          test1() {\n            int x = 0;\n            // inference in A now works.\n            x = A.a1;\n            x = new A().a2;\n          }\n    ']]));
        let units : core.DartList<any> = this.computeLibraryResults(sources,RESOLVED_UNIT11).toList();
        let unit0 : any = units[0];
        let unit1 : any = units[1];
        let unit2 : any = units[2];
        let intType : any = this.context.typeProvider.intType;
        let dynamicType : any = this.context.typeProvider.dynamicType;
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a1"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit0,"A","a2"),dynamicType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b1"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit1,"B","b2"),intType,intType);
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit2,"test1");
        this.assertAssignmentStatementTypes(statements[1],intType,intType);
        this.assertAssignmentStatementTypes(statements[2],intType,dynamicType);
    }
    test_perform_inference_local_variables() : void {
        let source : any = this.newSource('/test.dart','      test() {\n        int x = 3;\n        x = "hi";\n        var y = 3;\n        y = "hi";\n      }\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT11);
        let unit : any = this.outputs.get(RESOLVED_UNIT11);
        let intType : any = this.context.typeProvider.intType;
        let stringType : any = this.context.typeProvider.stringType;
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit,"test");
        this.assertVariableDeclarationStatementTypes(statements[0],intType,intType);
        this.assertAssignmentStatementTypes(statements[1],intType,stringType);
        this.assertVariableDeclarationStatementTypes(statements[2],intType,intType);
        this.assertAssignmentStatementTypes(statements[3],intType,stringType);
    }
    test_perform_inference_local_variables_fields() : void {
        let source : any = this.newSource('/test.dart','      class A {\n        int x = 0;\n\n        test1() {\n          var a = x;\n          a = "hi";\n          a = 3;\n          var b = y;\n          b = "hi";\n          b = 4;\n          var c = z;\n          c = "hi";\n          c = 4;\n        }\n\n        int y; // field def after use\n        final z = 42; // should infer `int`\n      }\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT11);
        let unit : any = this.outputs.get(RESOLVED_UNIT11);
        let intType : any = this.context.typeProvider.intType;
        let stringType : any = this.context.typeProvider.stringType;
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInMethod(unit,"A","test1");
        this.assertVariableDeclarationStatementTypes(statements[0],intType,intType);
        this.assertAssignmentStatementTypes(statements[1],intType,stringType);
        this.assertAssignmentStatementTypes(statements[2],intType,intType);
        this.assertVariableDeclarationStatementTypes(statements[3],intType,intType);
        this.assertAssignmentStatementTypes(statements[4],intType,stringType);
        this.assertAssignmentStatementTypes(statements[5],intType,intType);
        this.assertVariableDeclarationStatementTypes(statements[6],intType,intType);
        this.assertAssignmentStatementTypes(statements[7],intType,stringType);
        this.assertAssignmentStatementTypes(statements[8],intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit,"A","x"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit,"A","z"),intType,intType);
    }
    test_perform_inference_local_variables_topLevel() : void {
        let source : any = this.newSource('/test.dart','      int x = 0;\n\n      test1() {\n        var a = x;\n        a = /*severe:StaticTypeError*/"hi";\n        a = 3;\n        var b = y;\n        b = /*severe:StaticTypeError*/"hi";\n        b = 4;\n        var c = z;\n        c = /*severe:StaticTypeError*/"hi";\n        c = 4;\n      }\n\n      int y = 0; // field def after use\n      final z = 42; // should infer `int`\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT11);
        let unit : any = this.outputs.get(RESOLVED_UNIT11);
        let intType : any = this.context.typeProvider.intType;
        let stringType : any = this.context.typeProvider.stringType;
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit,"test1");
        this.assertVariableDeclarationStatementTypes(statements[0],intType,intType);
        this.assertAssignmentStatementTypes(statements[1],intType,stringType);
        this.assertAssignmentStatementTypes(statements[2],intType,intType);
        this.assertVariableDeclarationStatementTypes(statements[3],intType,intType);
        this.assertAssignmentStatementTypes(statements[4],intType,stringType);
        this.assertAssignmentStatementTypes(statements[5],intType,intType);
        this.assertVariableDeclarationStatementTypes(statements[6],intType,intType);
        this.assertAssignmentStatementTypes(statements[7],intType,stringType);
        this.assertAssignmentStatementTypes(statements[8],intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit,"x"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit,"y"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit,"z"),intType,intType);
    }
    test_perform_inference_null() : void {
        let source : any = this.newSource('/test.dart','      var x = null;\n      var y = 3;\n      class A {\n        static var x = null;\n        static var y = 3;\n\n        var x2 = null;\n        var y2 = 3;\n      }\n\n      test() {\n        x = "hi";\n        y = /*severe:StaticTypeError*/"hi";\n        A.x = "hi";\n        A.y = /*severe:StaticTypeError*/"hi";\n        new A().x2 = "hi";\n        new A().y2 = /*severe:StaticTypeError*/"hi";\n      }\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT11);
        let unit : any = this.outputs.get(RESOLVED_UNIT11);
        let intType : any = this.context.typeProvider.intType;
        let stringType : any = this.context.typeProvider.stringType;
        let nullType : any = this.context.typeProvider.nullType;
        let dynamicType : any = this.context.typeProvider.dynamicType;
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit,"x"),dynamicType,nullType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getTopLevelVariable(unit,"y"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit,"A","x"),dynamicType,nullType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit,"A","y"),intType,intType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit,"A","x2"),dynamicType,nullType);
        this.assertVariableDeclarationTypes(lib3.AstFinder.getFieldInClass(unit,"A","y2"),intType,intType);
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit,"test");
        this.assertAssignmentStatementTypes(statements[0],dynamicType,stringType);
        this.assertAssignmentStatementTypes(statements[1],intType,stringType);
        this.assertAssignmentStatementTypes(statements[2],dynamicType,stringType);
        this.assertAssignmentStatementTypes(statements[3],intType,stringType);
        this.assertAssignmentStatementTypes(statements[4],dynamicType,stringType);
        this.assertAssignmentStatementTypes(statements[5],intType,stringType);
    }
    test_perform_local_explicit_disabled() : void {
        let source : any = this.newSource('/test.dart','      test() {\n        int x = 3;\n        x = "hi";\n      }\n');
        this.computeResult(new bare.createInstance(any,null,source,source),RESOLVED_UNIT11);
        let unit : any = this.outputs.get(RESOLVED_UNIT11);
        let intType : any = this.context.typeProvider.intType;
        let stringType : any = this.context.typeProvider.stringType;
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit,"test");
        let decl : any = op(Op.INDEX,(statements[0] as any).variables.variables,0);
        expect(resolutionMap.elementDeclaredByVariableDeclaration(decl).type,intType);
        expect(decl.initializer.staticType,intType);
        let statement : any = statements[1];
        let assgn : any = statement.expression;
        expect(assgn.leftHandSide.staticType,intType);
        expect(assgn.rightHandSide.staticType,stringType);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeInferenceTest() {
    }
}

export namespace StrongModeVerifyUnitTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'StrongModeVerifyUnitTaskTest';
    export type Interface = Omit<StrongModeVerifyUnitTaskTest, Constructors>;
}
@DartClass
export class StrongModeVerifyUnitTaskTest extends _AbstractDartTaskTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.enableStrongMode();
    }
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT);
        expect(this.outputs.get(RESOLVED_UNIT),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT),isTrue);
    }
    test_perform_recordDynamicInvoke() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','void main() {\n  dynamic a = [];\n  a[0];\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),STRONG_MODE_ERRORS);
        let unit : any = this.outputs.get(RESOLVED_UNIT);
        this._fillErrorListener(STRONG_MODE_ERRORS);
        expect(this.errorListener.errors,isEmpty);
        let statements : core.DartList<any> = lib3.AstFinder.getStatementsInTopLevelFunction(unit,"main");
        let statement : any = statements[1];
        let idx : any = statement.expression;
        expect(null /*topLevl*/.isDynamicInvoke(idx.target),isTrue);
    }
    test_perform_verifyError() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','class A {}\nclass B extends A {}\nB b = new A();\n');
        this.computeResult(new bare.createInstance(any,null,source,source),STRONG_MODE_ERRORS);
        this._fillErrorListener(STRONG_MODE_ERRORS);
        let errors = this.errorListener.errors;
        expect(errors.length,1);
        expect(errors[0].errorCode.name,"STRONG_MODE_INVALID_CAST_NEW_EXPR");
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeVerifyUnitTaskTest() {
    }
}

export namespace VerifyUnitTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'VerifyUnitTaskTest';
    export type Interface = Omit<VerifyUnitTaskTest, Constructors>;
}
@DartClass
export class VerifyUnitTaskTest extends _AbstractDartTaskTest {
    test_perform_constantError() {
        let source : any = this.newSource('/test.dart','main(int p) {\n  const v = p;\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
    }
    test_perform_ConstantValidator_declaredIdentifier() {
        let source : any = this.newSource('/test.dart','void main() {\n  for (const foo in []) {\n    print(foo);\n  }\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertNoErrors();
    }
    test_perform_ConstantValidator_dependencyCycle() {
        let source : any = this.newSource('/test.dart','const int a = b;\nconst int b = c;\nconst int c = a;\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT,CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT,CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT));
    }
    test_perform_ConstantValidator_duplicateFields() {
        let source : any = this.newSource('/test.dart','class Test {\n  final int x = 1;\n  final int x = 2;\n  const Test();\n}\n\nmain() {\n  const Test();\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
    }
    test_perform_ConstantValidator_noInitializer() {
        let source : any = this.newSource('/test.dart','const x;\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(CompileTimeErrorCode.CONST_NOT_INITIALIZED));
    }
    test_perform_ConstantValidator_unknownValue() {
        let source : any = this.newSource('/test.dart','import \'no-such-file.dart\' as p;\n\nconst int x = p.y;\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(CompileTimeErrorCode.URI_DOES_NOT_EXIST,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
    }
    test_perform_directiveError_generated() {
        let source : any = this.newSource('/test.dart','import \'generated-file.g.dart\';\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(CompileTimeErrorCode.URI_HAS_NOT_BEEN_GENERATED));
    }
    test_perform_directiveError_nonGenerated() {
        let source : any = this.newSource('/test.dart','import \'no-such-file.dart\';\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
    }
    test_perform_reresolution() : void {
        this.enableStrongMode();
        let source : any = this.newSource('/test.dart','const topLevel = 3;\nclass C {\n  String field = topLevel;\n}\n');
        this.computeResult(new bare.createInstance(any,null,source,source),VERIFY_ERRORS);
        this._fillErrorListener(VERIFY_ERRORS);
        let errors = this.errorListener.errors;
        expect(errors.length,1);
        expect(errors[0].errorCode,StaticTypeWarningCode.INVALID_ASSIGNMENT);
    }
    test_perform_verifyError() {
        let source : any = this.newSource('/test.dart','main() {\n  if (42) {\n    print(\'Not bool!\');\n  }\n}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,VERIFY_ERRORS,{
            matcher : properties.isVerifyUnitTask});
        this._fillErrorListener(VERIFY_ERRORS);
        this.errorListener.assertErrorsWithCodes(new core.DartList.literal<any>(StaticTypeWarningCode.NON_BOOL_CONDITION));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VerifyUnitTaskTest() {
    }
}

export namespace EvaluateUnitConstantsTaskTest {
    export type Constructors = _AbstractDartTaskTest.Constructors | 'EvaluateUnitConstantsTaskTest';
    export type Interface = Omit<EvaluateUnitConstantsTaskTest, Constructors>;
}
@DartClass
export class EvaluateUnitConstantsTaskTest extends _AbstractDartTaskTest {
    test_created_resolved_unit() {
        let source : any = this.newSource('/test.dart','library lib;\nclass A {}\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT12);
        expect(this.outputs.get(RESOLVED_UNIT12),isNotNull);
        expect(this.outputs.get(CREATED_RESOLVED_UNIT12),isTrue);
    }
    test_perform() {
        let source : any = this.newSource('/test.dart','class C {\n  const C();\n}\n\n@x\nf() {}\n\nconst x = const C();\n');
        let target : any = new bare.createInstance(any,null,source,source);
        this.computeResult(target,RESOLVED_UNIT12,{
            matcher : properties.isEvaluateUnitConstantsTask});
        let unit : any = this.outputs.get(RESOLVED_UNIT12);
        let unitElement : any = unit.element;
        expect((op(Op.INDEX,op(Op.INDEX,unitElement.types,0).constructors,0) as any).isCycleFree,isTrue);
        expect((op(Op.INDEX,op(Op.INDEX,unitElement.functions,0).metadata,0) as any).evaluationResult,isNotNull);
        expect((op(Op.INDEX,unitElement.topLevelVariables,0) as any).evaluationResult,isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EvaluateUnitConstantsTaskTest() {
    }
}

export class properties {
    private static __$isResolveDirectiveElementsTask : any;
    static get isResolveDirectiveElementsTask() : any { 
        if (this.__$isResolveDirectiveElementsTask===undefined) {
            this.__$isResolveDirectiveElementsTask = new bare.createInstance(any,null);
        }
        return this.__$isResolveDirectiveElementsTask;
    }
    static set isResolveDirectiveElementsTask(__$value : any)  { 
        this.__$isResolveDirectiveElementsTask = __$value;
    }

    private static __$isBuildCompilationUnitElementTask : any;
    static get isBuildCompilationUnitElementTask() : any { 
        if (this.__$isBuildCompilationUnitElementTask===undefined) {
            this.__$isBuildCompilationUnitElementTask = new bare.createInstance(any,null);
        }
        return this.__$isBuildCompilationUnitElementTask;
    }
    static set isBuildCompilationUnitElementTask(__$value : any)  { 
        this.__$isBuildCompilationUnitElementTask = __$value;
    }

    private static __$isBuildDirectiveElementsTask : any;
    static get isBuildDirectiveElementsTask() : any { 
        if (this.__$isBuildDirectiveElementsTask===undefined) {
            this.__$isBuildDirectiveElementsTask = new bare.createInstance(any,null);
        }
        return this.__$isBuildDirectiveElementsTask;
    }
    static set isBuildDirectiveElementsTask(__$value : any)  { 
        this.__$isBuildDirectiveElementsTask = __$value;
    }

    private static __$isBuildEnumMemberElementsTask : any;
    static get isBuildEnumMemberElementsTask() : any { 
        if (this.__$isBuildEnumMemberElementsTask===undefined) {
            this.__$isBuildEnumMemberElementsTask = new bare.createInstance(any,null);
        }
        return this.__$isBuildEnumMemberElementsTask;
    }
    static set isBuildEnumMemberElementsTask(__$value : any)  { 
        this.__$isBuildEnumMemberElementsTask = __$value;
    }

    private static __$isBuildExportNamespaceTask : any;
    static get isBuildExportNamespaceTask() : any { 
        if (this.__$isBuildExportNamespaceTask===undefined) {
            this.__$isBuildExportNamespaceTask = new bare.createInstance(any,null);
        }
        return this.__$isBuildExportNamespaceTask;
    }
    static set isBuildExportNamespaceTask(__$value : any)  { 
        this.__$isBuildExportNamespaceTask = __$value;
    }

    private static __$isBuildLibraryElementTask : any;
    static get isBuildLibraryElementTask() : any { 
        if (this.__$isBuildLibraryElementTask===undefined) {
            this.__$isBuildLibraryElementTask = new bare.createInstance(any,null);
        }
        return this.__$isBuildLibraryElementTask;
    }
    static set isBuildLibraryElementTask(__$value : any)  { 
        this.__$isBuildLibraryElementTask = __$value;
    }

    private static __$isBuildPublicNamespaceTask : any;
    static get isBuildPublicNamespaceTask() : any { 
        if (this.__$isBuildPublicNamespaceTask===undefined) {
            this.__$isBuildPublicNamespaceTask = new bare.createInstance(any,null);
        }
        return this.__$isBuildPublicNamespaceTask;
    }
    static set isBuildPublicNamespaceTask(__$value : any)  { 
        this.__$isBuildPublicNamespaceTask = __$value;
    }

    private static __$isBuildSourceExportClosureTask : any;
    static get isBuildSourceExportClosureTask() : any { 
        if (this.__$isBuildSourceExportClosureTask===undefined) {
            this.__$isBuildSourceExportClosureTask = new bare.createInstance(any,null);
        }
        return this.__$isBuildSourceExportClosureTask;
    }
    static set isBuildSourceExportClosureTask(__$value : any)  { 
        this.__$isBuildSourceExportClosureTask = __$value;
    }

    private static __$isBuildTypeProviderTask : any;
    static get isBuildTypeProviderTask() : any { 
        if (this.__$isBuildTypeProviderTask===undefined) {
            this.__$isBuildTypeProviderTask = new bare.createInstance(any,null);
        }
        return this.__$isBuildTypeProviderTask;
    }
    static set isBuildTypeProviderTask(__$value : any)  { 
        this.__$isBuildTypeProviderTask = __$value;
    }

    private static __$isComputeConstantDependenciesTask : any;
    static get isComputeConstantDependenciesTask() : any { 
        if (this.__$isComputeConstantDependenciesTask===undefined) {
            this.__$isComputeConstantDependenciesTask = new bare.createInstance(any,null);
        }
        return this.__$isComputeConstantDependenciesTask;
    }
    static set isComputeConstantDependenciesTask(__$value : any)  { 
        this.__$isComputeConstantDependenciesTask = __$value;
    }

    private static __$isComputeConstantValueTask : any;
    static get isComputeConstantValueTask() : any { 
        if (this.__$isComputeConstantValueTask===undefined) {
            this.__$isComputeConstantValueTask = new bare.createInstance(any,null);
        }
        return this.__$isComputeConstantValueTask;
    }
    static set isComputeConstantValueTask(__$value : any)  { 
        this.__$isComputeConstantValueTask = __$value;
    }

    private static __$isComputeInferableStaticVariableDependenciesTask : any;
    static get isComputeInferableStaticVariableDependenciesTask() : any { 
        if (this.__$isComputeInferableStaticVariableDependenciesTask===undefined) {
            this.__$isComputeInferableStaticVariableDependenciesTask = new bare.createInstance(any,null);
        }
        return this.__$isComputeInferableStaticVariableDependenciesTask;
    }
    static set isComputeInferableStaticVariableDependenciesTask(__$value : any)  { 
        this.__$isComputeInferableStaticVariableDependenciesTask = __$value;
    }

    private static __$isContainingLibrariesTask : any;
    static get isContainingLibrariesTask() : any { 
        if (this.__$isContainingLibrariesTask===undefined) {
            this.__$isContainingLibrariesTask = new bare.createInstance(any,null);
        }
        return this.__$isContainingLibrariesTask;
    }
    static set isContainingLibrariesTask(__$value : any)  { 
        this.__$isContainingLibrariesTask = __$value;
    }

    private static __$isDartErrorsTask : any;
    static get isDartErrorsTask() : any { 
        if (this.__$isDartErrorsTask===undefined) {
            this.__$isDartErrorsTask = new bare.createInstance(any,null);
        }
        return this.__$isDartErrorsTask;
    }
    static set isDartErrorsTask(__$value : any)  { 
        this.__$isDartErrorsTask = __$value;
    }

    private static __$isEvaluateUnitConstantsTask : any;
    static get isEvaluateUnitConstantsTask() : any { 
        if (this.__$isEvaluateUnitConstantsTask===undefined) {
            this.__$isEvaluateUnitConstantsTask = new bare.createInstance(any,null);
        }
        return this.__$isEvaluateUnitConstantsTask;
    }
    static set isEvaluateUnitConstantsTask(__$value : any)  { 
        this.__$isEvaluateUnitConstantsTask = __$value;
    }

    private static __$isGatherUsedImportedElementsTask : any;
    static get isGatherUsedImportedElementsTask() : any { 
        if (this.__$isGatherUsedImportedElementsTask===undefined) {
            this.__$isGatherUsedImportedElementsTask = new bare.createInstance(any,null);
        }
        return this.__$isGatherUsedImportedElementsTask;
    }
    static set isGatherUsedImportedElementsTask(__$value : any)  { 
        this.__$isGatherUsedImportedElementsTask = __$value;
    }

    private static __$isGatherUsedLocalElementsTask : any;
    static get isGatherUsedLocalElementsTask() : any { 
        if (this.__$isGatherUsedLocalElementsTask===undefined) {
            this.__$isGatherUsedLocalElementsTask = new bare.createInstance(any,null);
        }
        return this.__$isGatherUsedLocalElementsTask;
    }
    static set isGatherUsedLocalElementsTask(__$value : any)  { 
        this.__$isGatherUsedLocalElementsTask = __$value;
    }

    private static __$isGenerateHintsTask : any;
    static get isGenerateHintsTask() : any { 
        if (this.__$isGenerateHintsTask===undefined) {
            this.__$isGenerateHintsTask = new bare.createInstance(any,null);
        }
        return this.__$isGenerateHintsTask;
    }
    static set isGenerateHintsTask(__$value : any)  { 
        this.__$isGenerateHintsTask = __$value;
    }

    private static __$isGenerateLintsTask : any;
    static get isGenerateLintsTask() : any { 
        if (this.__$isGenerateLintsTask===undefined) {
            this.__$isGenerateLintsTask = new bare.createInstance(any,null);
        }
        return this.__$isGenerateLintsTask;
    }
    static set isGenerateLintsTask(__$value : any)  { 
        this.__$isGenerateLintsTask = __$value;
    }

    private static __$isInferInstanceMembersInUnitTask : any;
    static get isInferInstanceMembersInUnitTask() : any { 
        if (this.__$isInferInstanceMembersInUnitTask===undefined) {
            this.__$isInferInstanceMembersInUnitTask = new bare.createInstance(any,null);
        }
        return this.__$isInferInstanceMembersInUnitTask;
    }
    static set isInferInstanceMembersInUnitTask(__$value : any)  { 
        this.__$isInferInstanceMembersInUnitTask = __$value;
    }

    private static __$isInferStaticVariableTypesInUnitTask : any;
    static get isInferStaticVariableTypesInUnitTask() : any { 
        if (this.__$isInferStaticVariableTypesInUnitTask===undefined) {
            this.__$isInferStaticVariableTypesInUnitTask = new bare.createInstance(any,null);
        }
        return this.__$isInferStaticVariableTypesInUnitTask;
    }
    static set isInferStaticVariableTypesInUnitTask(__$value : any)  { 
        this.__$isInferStaticVariableTypesInUnitTask = __$value;
    }

    private static __$isInferStaticVariableTypeTask : any;
    static get isInferStaticVariableTypeTask() : any { 
        if (this.__$isInferStaticVariableTypeTask===undefined) {
            this.__$isInferStaticVariableTypeTask = new bare.createInstance(any,null);
        }
        return this.__$isInferStaticVariableTypeTask;
    }
    static set isInferStaticVariableTypeTask(__$value : any)  { 
        this.__$isInferStaticVariableTypeTask = __$value;
    }

    private static __$isLibraryErrorsReadyTask : any;
    static get isLibraryErrorsReadyTask() : any { 
        if (this.__$isLibraryErrorsReadyTask===undefined) {
            this.__$isLibraryErrorsReadyTask = new bare.createInstance(any,null);
        }
        return this.__$isLibraryErrorsReadyTask;
    }
    static set isLibraryErrorsReadyTask(__$value : any)  { 
        this.__$isLibraryErrorsReadyTask = __$value;
    }

    private static __$isLibraryUnitErrorsTask : any;
    static get isLibraryUnitErrorsTask() : any { 
        if (this.__$isLibraryUnitErrorsTask===undefined) {
            this.__$isLibraryUnitErrorsTask = new bare.createInstance(any,null);
        }
        return this.__$isLibraryUnitErrorsTask;
    }
    static set isLibraryUnitErrorsTask(__$value : any)  { 
        this.__$isLibraryUnitErrorsTask = __$value;
    }

    private static __$isParseDartTask : any;
    static get isParseDartTask() : any { 
        if (this.__$isParseDartTask===undefined) {
            this.__$isParseDartTask = new bare.createInstance(any,null);
        }
        return this.__$isParseDartTask;
    }
    static set isParseDartTask(__$value : any)  { 
        this.__$isParseDartTask = __$value;
    }

    private static __$isPartiallyResolveUnitReferencesTask : any;
    static get isPartiallyResolveUnitReferencesTask() : any { 
        if (this.__$isPartiallyResolveUnitReferencesTask===undefined) {
            this.__$isPartiallyResolveUnitReferencesTask = new bare.createInstance(any,null);
        }
        return this.__$isPartiallyResolveUnitReferencesTask;
    }
    static set isPartiallyResolveUnitReferencesTask(__$value : any)  { 
        this.__$isPartiallyResolveUnitReferencesTask = __$value;
    }

    private static __$isResolveLibraryReferencesTask : any;
    static get isResolveLibraryReferencesTask() : any { 
        if (this.__$isResolveLibraryReferencesTask===undefined) {
            this.__$isResolveLibraryReferencesTask = new bare.createInstance(any,null);
        }
        return this.__$isResolveLibraryReferencesTask;
    }
    static set isResolveLibraryReferencesTask(__$value : any)  { 
        this.__$isResolveLibraryReferencesTask = __$value;
    }

    private static __$isResolveLibraryTask : any;
    static get isResolveLibraryTask() : any { 
        if (this.__$isResolveLibraryTask===undefined) {
            this.__$isResolveLibraryTask = new bare.createInstance(any,null);
        }
        return this.__$isResolveLibraryTask;
    }
    static set isResolveLibraryTask(__$value : any)  { 
        this.__$isResolveLibraryTask = __$value;
    }

    private static __$isResolveLibraryTypeNamesTask : any;
    static get isResolveLibraryTypeNamesTask() : any { 
        if (this.__$isResolveLibraryTypeNamesTask===undefined) {
            this.__$isResolveLibraryTypeNamesTask = new bare.createInstance(any,null);
        }
        return this.__$isResolveLibraryTypeNamesTask;
    }
    static set isResolveLibraryTypeNamesTask(__$value : any)  { 
        this.__$isResolveLibraryTypeNamesTask = __$value;
    }

    private static __$isResolveTopLevelUnitTypeBoundsTask : any;
    static get isResolveTopLevelUnitTypeBoundsTask() : any { 
        if (this.__$isResolveTopLevelUnitTypeBoundsTask===undefined) {
            this.__$isResolveTopLevelUnitTypeBoundsTask = new bare.createInstance(any,null);
        }
        return this.__$isResolveTopLevelUnitTypeBoundsTask;
    }
    static set isResolveTopLevelUnitTypeBoundsTask(__$value : any)  { 
        this.__$isResolveTopLevelUnitTypeBoundsTask = __$value;
    }

    private static __$isResolveUnitTask : any;
    static get isResolveUnitTask() : any { 
        if (this.__$isResolveUnitTask===undefined) {
            this.__$isResolveUnitTask = new bare.createInstance(any,null);
        }
        return this.__$isResolveUnitTask;
    }
    static set isResolveUnitTask(__$value : any)  { 
        this.__$isResolveUnitTask = __$value;
    }

    private static __$isResolveUnitTypeNamesTask : any;
    static get isResolveUnitTypeNamesTask() : any { 
        if (this.__$isResolveUnitTypeNamesTask===undefined) {
            this.__$isResolveUnitTypeNamesTask = new bare.createInstance(any,null);
        }
        return this.__$isResolveUnitTypeNamesTask;
    }
    static set isResolveUnitTypeNamesTask(__$value : any)  { 
        this.__$isResolveUnitTypeNamesTask = __$value;
    }

    private static __$isResolveVariableReferencesTask : any;
    static get isResolveVariableReferencesTask() : any { 
        if (this.__$isResolveVariableReferencesTask===undefined) {
            this.__$isResolveVariableReferencesTask = new bare.createInstance(any,null);
        }
        return this.__$isResolveVariableReferencesTask;
    }
    static set isResolveVariableReferencesTask(__$value : any)  { 
        this.__$isResolveVariableReferencesTask = __$value;
    }

    private static __$isScanDartTask : any;
    static get isScanDartTask() : any { 
        if (this.__$isScanDartTask===undefined) {
            this.__$isScanDartTask = new bare.createInstance(any,null);
        }
        return this.__$isScanDartTask;
    }
    static set isScanDartTask(__$value : any)  { 
        this.__$isScanDartTask = __$value;
    }

    private static __$isStrongModeVerifyUnitTask : any;
    static get isStrongModeVerifyUnitTask() : any { 
        if (this.__$isStrongModeVerifyUnitTask===undefined) {
            this.__$isStrongModeVerifyUnitTask = new bare.createInstance(any,null);
        }
        return this.__$isStrongModeVerifyUnitTask;
    }
    static set isStrongModeVerifyUnitTask(__$value : any)  { 
        this.__$isStrongModeVerifyUnitTask = __$value;
    }

    private static __$isVerifyUnitTask : any;
    static get isVerifyUnitTask() : any { 
        if (this.__$isVerifyUnitTask===undefined) {
            this.__$isVerifyUnitTask = new bare.createInstance(any,null);
        }
        return this.__$isVerifyUnitTask;
    }
    static set isVerifyUnitTask(__$value : any)  { 
        this.__$isVerifyUnitTask = __$value;
    }

    private static __$_testLintCode : any;
    static get _testLintCode() : any { 
        if (this.__$_testLintCode===undefined) {
            this.__$_testLintCode = new bare.createInstance(any,null,'test lint','test lint code');
        }
        return this.__$_testLintCode;
    }
    static set _testLintCode(__$value : any)  { 
        this.__$_testLintCode = __$value;
    }

}
