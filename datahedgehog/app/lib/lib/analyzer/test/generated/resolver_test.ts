/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/resolver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";
import * as lib4 from "./resolver_test_case";
import * as lib5 from "./analysis_context_factory";
import * as collection from "@dart2ts/dart/core";
import * as lib7 from "./parser_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisDeltaTest);
        defineReflectiveTests(ChangeSetTest);
        defineReflectiveTests(EnclosedScopeTest);
        defineReflectiveTests(ErrorResolverTest);
        defineReflectiveTests(LibraryImportScopeTest);
        defineReflectiveTests(LibraryScopeTest);
        defineReflectiveTests(PrefixedNamespaceTest);
        defineReflectiveTests(ScopeTest);
        defineReflectiveTests(StrictModeTest);
        defineReflectiveTests(SubtypeManagerTest);
        defineReflectiveTests(TypeOverrideManagerTest);
        defineReflectiveTests(TypePropagationTest);
        defineReflectiveTests(TypeProviderImplTest);
        defineReflectiveTests(TypeResolverVisitorTest);
    });
};
export namespace AnalysisDeltaTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'AnalysisDeltaTest';
    export type Interface = Omit<AnalysisDeltaTest, Constructors>;
}
@DartClass
export class AnalysisDeltaTest extends lib3.EngineTestCase {
    source1 : lib3.TestSource;

    source2 : lib3.TestSource;

    source3 : lib3.TestSource;

    test_getAddedSources() : void {
        let delta : any = new bare.createInstance(any,null);
        delta.setAnalysisLevel(this.source1,AnalysisLevel.ALL);
        delta.setAnalysisLevel(this.source2,AnalysisLevel.ERRORS);
        delta.setAnalysisLevel(this.source3,AnalysisLevel.NONE);
        let addedSources : core.DartList<any> = delta.addedSources;
        expect(addedSources,hasLength(2));
        expect(addedSources,unorderedEquals(new core.DartList.literal(this.source1,this.source2)));
    }
    test_getAnalysisLevels() : void {
        let delta : any = new bare.createInstance(any,null);
        expect(delta.analysisLevels.length,0);
    }
    test_setAnalysisLevel() : void {
        let delta : any = new bare.createInstance(any,null);
        delta.setAnalysisLevel(this.source1,AnalysisLevel.ALL);
        delta.setAnalysisLevel(this.source2,AnalysisLevel.ERRORS);
        let levels : core.DartMap<any,any> = delta.analysisLevels;
        expect(levels.length,2);
        expect(levels.get(this.source1),AnalysisLevel.ALL);
        expect(levels.get(this.source2),AnalysisLevel.ERRORS);
    }
    test_toString() : void {
        let delta : any = new bare.createInstance(any,null);
        delta.setAnalysisLevel(new lib3.TestSource(),AnalysisLevel.ALL);
        let result : string = delta.toString();
        expect(result,isNotNull);
        expect(new core.DartString(result).length > 0,isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisDeltaTest() {
        this.source1 = new lib3.TestSource('/1.dart');
        this.source2 = new lib3.TestSource('/2.dart');
        this.source3 = new lib3.TestSource('/3.dart');
    }
}

export namespace ChangeSetTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ChangeSetTest';
    export type Interface = Omit<ChangeSetTest, Constructors>;
}
@DartClass
export class ChangeSetTest extends lib3.EngineTestCase {
    test_changedContent() : void {
        let source : lib3.TestSource = new lib3.TestSource();
        let content : string = "";
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.changedContent(source,content);
        expect(changeSet.addedSources,hasLength(0));
        expect(changeSet.changedSources,hasLength(0));
        let map : core.DartMap<any,string> = changeSet.changedContents;
        expect(map,hasLength(1));
        expect(map.get(source),same(content));
        expect(changeSet.changedRanges,hasLength(0));
        expect(changeSet.removedSources,hasLength(0));
        expect(changeSet.removedContainers,hasLength(0));
    }
    test_changedRange() : void {
        let source : lib3.TestSource = new lib3.TestSource();
        let content : string = "";
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.changedRange(source,content,1,2,3);
        expect(changeSet.addedSources,hasLength(0));
        expect(changeSet.changedSources,hasLength(0));
        expect(changeSet.changedContents,hasLength(0));
        let map : core.DartMap<any,any> = changeSet.changedRanges;
        expect(map,hasLength(1));
        let change : any = map.get(source);
        expect(change,isNotNull);
        expect(change.contents,content);
        expect(change.offset,1);
        expect(change.oldLength,2);
        expect(change.newLength,3);
        expect(changeSet.removedSources,hasLength(0));
        expect(changeSet.removedContainers,hasLength(0));
    }
    test_toString() : void {
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.addedSource(new lib3.TestSource());
        changeSet.changedSource(new lib3.TestSource());
        changeSet.changedContent(new lib3.TestSource(),"");
        changeSet.changedRange(new lib3.TestSource(),"",0,0,0);
        changeSet.removedSource(new lib3.TestSource());
        changeSet.removedContainer(new SourceContainer_ChangeSetTest_test_toString());
        expect(changeSet.toString(),isNotNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ChangeSetTest() {
    }
}

export namespace EnclosedScopeTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'EnclosedScopeTest';
    export type Interface = Omit<EnclosedScopeTest, Constructors>;
}
@DartClass
export class EnclosedScopeTest extends lib4.ResolverTestCase {
    test_define_duplicate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let rootScope : any = new _RootScope();
            let scope : any = new bare.createInstance(any,null,rootScope);
            let identifier : any = AstTestFactory.identifier3('v');
            let element1 : any = ElementFactory.localVariableElement(identifier);
            let element2 : any = ElementFactory.localVariableElement(identifier);
            scope.define(element1);
            scope.define(element2);
            expect(scope.lookup(identifier,null),same(element1));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EnclosedScopeTest() {
    }
}

export namespace ErrorResolverTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'ErrorResolverTest';
    export type Interface = Omit<ErrorResolverTest, Constructors>;
}
@DartClass
export class ErrorResolverTest extends lib4.ResolverTestCase {
    test_breakLabelOnSwitchMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m(int i) {\n    switch (i) {\n      l: case 0:\n        break;\n      case 1:\n        break l;\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ResolverErrorCode.BREAK_LABEL_ON_SWITCH_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_continueLabelOnSwitch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m(int i) {\n    l: switch (i) {\n      case 0:\n        continue l;\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ResolverErrorCode.CONTINUE_LABEL_ON_SWITCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_enclosingElement_invalidLocalFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  C() {\n    int get x => 0;\n  }\n}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let types = unit.types;
            expect(types,isNotNull);
            expect(types,hasLength(1));
            let type = op(Op.INDEX,types,0);
            expect(type,isNotNull);
            let constructors = type.constructors;
            expect(constructors,isNotNull);
            expect(constructors,hasLength(1));
            let constructor : any = op(Op.INDEX,constructors,0);
            expect(constructor,isNotNull);
            let functions : core.DartList<any> = constructor.functions;
            expect(functions,isNotNull);
            expect(functions,hasLength(1));
            expect(functions[0].enclosingElement,constructor);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.GETTER_IN_FUNCTION));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorResolverTest() {
    }
}

export namespace GenericMethodResolverTest {
    export type Constructors = lib4.StaticTypeAnalyzer2TestShared.Constructors | 'GenericMethodResolverTest';
    export type Interface = Omit<GenericMethodResolverTest, Constructors>;
}
@DartClass
export class GenericMethodResolverTest extends lib4.StaticTypeAnalyzer2TestShared {
    test_genericMethod_propagatedType_promotion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class Iter {\n  List<S> map<S>(S f(x));\n}\nclass C {}\nC toSpan(dynamic element) {\n  if (element is Iter) {\n    var y = element.map(toSpan);\n  }\n  return null;\n}');
            this.expectIdentifierType('y = ','dynamic','List<dynamic>');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GenericMethodResolverTest() {
    }
}

export namespace LibraryImportScopeTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'LibraryImportScopeTest';
    export type Interface = Omit<LibraryImportScopeTest, Constructors>;
}
@DartClass
export class LibraryImportScopeTest extends lib4.ResolverTestCase {
    test_creation_empty() : void {
        new bare.createInstance(any,null,this.createDefaultTestLibrary());
    }
    test_creation_nonEmpty() : void {
        let context : any = lib5.AnalysisContextFactory.contextWithCore();
        let importedTypeName : string = "A";
        let importedType : any = new bare.createInstance(any,null,AstTestFactory.identifier3(importedTypeName));
        let importedLibrary : any = this.createTestLibrary(context,"imported");
        (importedLibrary.definingCompilationUnit as any).types = new core.DartList.literal<any>(importedType);
        let definingLibrary : any = this.createTestLibrary(context,"importing");
        let importElement : any = new bare.createInstance(any,null,0);
        importElement.importedLibrary = importedLibrary;
        definingLibrary.imports = new core.DartList.literal<any>(importElement);
        let scope : any = new bare.createInstance(any,null,definingLibrary);
        expect(scope.lookup(AstTestFactory.identifier3(importedTypeName),definingLibrary),importedType);
    }
    test_prefixedAndNonPrefixed() : void {
        let context : any = lib5.AnalysisContextFactory.contextWithCore();
        let typeName : string = "C";
        let prefixName : string = "p";
        let prefixedType : any = ElementFactory.classElement2(typeName);
        let nonPrefixedType : any = ElementFactory.classElement2(typeName);
        let prefixedLibrary : any = this.createTestLibrary(context,"import.prefixed");
        (prefixedLibrary.definingCompilationUnit as any).types = new core.DartList.literal<any>(prefixedType);
        let prefixedImport : any = ElementFactory.importFor(prefixedLibrary,ElementFactory.prefix(prefixName));
        let nonPrefixedLibrary : any = this.createTestLibrary(context,"import.nonPrefixed");
        (nonPrefixedLibrary.definingCompilationUnit as any).types = new core.DartList.literal<any>(nonPrefixedType);
        let nonPrefixedImport : any = ElementFactory.importFor(nonPrefixedLibrary,null);
        let importingLibrary : any = this.createTestLibrary(context,"importing");
        importingLibrary.imports = new core.DartList.literal<any>(prefixedImport,nonPrefixedImport);
        let scope : any = new bare.createInstance(any,null,importingLibrary);
        let prefixedElement : any = scope.lookup(AstTestFactory.identifier5(prefixName,typeName),importingLibrary);
        expect(prefixedElement,same(prefixedType));
        let nonPrefixedElement : any = scope.lookup(AstTestFactory.identifier3(typeName),importingLibrary);
        expect(nonPrefixedElement,same(nonPrefixedType));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryImportScopeTest() {
    }
}

export namespace LibraryScopeTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'LibraryScopeTest';
    export type Interface = Omit<LibraryScopeTest, Constructors>;
}
@DartClass
export class LibraryScopeTest extends lib4.ResolverTestCase {
    test_creation_empty() : void {
        new bare.createInstance(any,null,this.createDefaultTestLibrary());
    }
    test_creation_nonEmpty() : void {
        let context : any = lib5.AnalysisContextFactory.contextWithCore();
        let importedTypeName : string = "A";
        let importedType : any = new bare.createInstance(any,null,AstTestFactory.identifier3(importedTypeName));
        let importedLibrary : any = this.createTestLibrary(context,"imported");
        (importedLibrary.definingCompilationUnit as any).types = new core.DartList.literal<any>(importedType);
        let definingLibrary : any = this.createTestLibrary(context,"importing");
        let importElement : any = new bare.createInstance(any,null,0);
        importElement.importedLibrary = importedLibrary;
        definingLibrary.imports = new core.DartList.literal<any>(importElement);
        let scope : any = new bare.createInstance(any,null,definingLibrary);
        expect(scope.lookup(AstTestFactory.identifier3(importedTypeName),definingLibrary),importedType);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryScopeTest() {
    }
}

export namespace PrefixedNamespaceTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'PrefixedNamespaceTest';
    export type Interface = Omit<PrefixedNamespaceTest, Constructors>;
}
@DartClass
export class PrefixedNamespaceTest extends lib4.ResolverTestCase {
    test_lookup_missing() : void {
        let element : any = ElementFactory.classElement2('A');
        let namespace : any = new bare.createInstance(any,null,'p',this._toMap(new core.DartList.literal(element)));
        expect(namespace.get('p.B'),isNull);
    }
    test_lookup_missing_matchesPrefix() : void {
        let element : any = ElementFactory.classElement2('A');
        let namespace : any = new bare.createInstance(any,null,'p',this._toMap(new core.DartList.literal(element)));
        expect(namespace.get('p'),isNull);
    }
    test_lookup_valid() : void {
        let element : any = ElementFactory.classElement2('A');
        let namespace : any = new bare.createInstance(any,null,'p',this._toMap(new core.DartList.literal(element)));
        expect(namespace.get('p.A'),same(element));
    }
    _toMap(elements : core.DartList<any>) : core.DartHashMap<string,any> {
        let map : core.DartHashMap<string,any> = new core.DartHashMap<string,any>();
        for(let element of elements) {
            op(Op.INDEX_ASSIGN,map,element.name,element);
        }
        return map;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrefixedNamespaceTest() {
    }
}

export namespace ScopeTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'ScopeTest';
    export type Interface = Omit<ScopeTest, Constructors>;
}
@DartClass
export class ScopeTest extends lib4.ResolverTestCase {
    test_define_duplicate() : void {
        let scope : any = new _RootScope();
        let identifier : any = AstTestFactory.identifier3('v');
        let element1 : any = ElementFactory.localVariableElement(identifier);
        let element2 : any = ElementFactory.localVariableElement(identifier);
        scope.define(element1);
        scope.define(element2);
        expect(scope.localLookup('v',null),same(element1));
    }
    test_isPrivateName_nonPrivate() : void {
        expect(Scope.isPrivateName("Public"),isFalse);
    }
    test_isPrivateName_private() : void {
        expect(Scope.isPrivateName("_Private"),isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScopeTest() {
    }
}

export namespace SourceContainer_ChangeSetTest_test_toString {
    export type Constructors = 'SourceContainer_ChangeSetTest_test_toString';
    export type Interface = Omit<SourceContainer_ChangeSetTest_test_toString, Constructors>;
}
@DartClass
@Implements(any)
export class SourceContainer_ChangeSetTest_test_toString implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contains(source : any) : boolean {
        return false;
    }
    constructor() {
    }
    @defaultConstructor
    SourceContainer_ChangeSetTest_test_toString() {
    }
}

export namespace StaticTypeVerifier {
    export type Constructors = 'StaticTypeVerifier';
    export type Interface = Omit<StaticTypeVerifier, Constructors>;
}
@DartClass
export class StaticTypeVerifier extends any {
    _unresolvedExpressions : core.DartList<any>;

    _invalidlyPropagatedExpressions : core.DartList<any>;

    _unresolvedTypes : core.DartList<any>;

    _resolvedExpressionCount : number;

    _propagatedExpressionCount : number;

    _resolvedTypeCount : number;

    assertResolved() : void {
        if (!this._unresolvedExpressions.isEmpty || !this._unresolvedTypes.isEmpty) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            let unresolvedTypeCount : number = this._unresolvedTypes.length;
            if (unresolvedTypeCount > 0) {
                buffer.write("Failed to resolve ");
                buffer.write(unresolvedTypeCount);
                buffer.write(" of ");
                buffer.write(this._resolvedTypeCount + unresolvedTypeCount);
                buffer.writeln(" type names:");
                for(let identifier of this._unresolvedTypes) {
                    buffer.write("  ");
                    buffer.write(identifier.toString());
                    buffer.write(" (");
                    buffer.write(this._getFileName(identifier));
                    buffer.write(" : ");
                    buffer.write(identifier.offset);
                    buffer.writeln(")");
                }
            }
            let unresolvedExpressionCount : number = this._unresolvedExpressions.length;
            if (unresolvedExpressionCount > 0) {
                buffer.writeln("Failed to resolve ");
                buffer.write(unresolvedExpressionCount);
                buffer.write(" of ");
                buffer.write(this._resolvedExpressionCount + unresolvedExpressionCount);
                buffer.writeln(" expressions:");
                for(let expression of this._unresolvedExpressions) {
                    buffer.write("  ");
                    buffer.write(expression.toString());
                    buffer.write(" (");
                    buffer.write(this._getFileName(expression));
                    buffer.write(" : ");
                    buffer.write(expression.offset);
                    buffer.writeln(")");
                }
            }
            let invalidlyPropagatedExpressionCount : number = this._invalidlyPropagatedExpressions.length;
            if (invalidlyPropagatedExpressionCount > 0) {
                buffer.writeln("Incorrectly propagated ");
                buffer.write(invalidlyPropagatedExpressionCount);
                buffer.write(" of ");
                buffer.write(this._propagatedExpressionCount);
                buffer.writeln(" expressions:");
                for(let expression of this._invalidlyPropagatedExpressions) {
                    buffer.write("  ");
                    buffer.write(expression.toString());
                    buffer.write(" [");
                    buffer.write(resolutionMap.staticTypeForExpression(expression).displayName);
                    buffer.write(", ");
                    buffer.write(resolutionMap.propagatedTypeForExpression(expression).displayName);
                    buffer.writeln("]");
                    buffer.write("    ");
                    buffer.write(this._getFileName(expression));
                    buffer.write(" : ");
                    buffer.write(expression.offset);
                    buffer.writeln(")");
                }
            }
            fail(buffer.toString());
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCommentReference(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpression(node : any) : core.DartObject {
        node.visitChildren(this);
        let staticType : any = node.staticType;
        if (op(Op.EQUALS,staticType,null)) {
            this._unresolvedExpressions.add(node);
        }else {
            this._resolvedExpressionCount++;
            let propagatedType : any = node.propagatedType;
            if (propagatedType != null) {
                this._propagatedExpressionCount++;
                if (!propagatedType.isMoreSpecificThan(staticType)) {
                    this._invalidlyPropagatedExpressions.add(node);
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabel(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryIdentifier(node : any) : core.DartObject {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        if (op(Op.EQUALS,node.staticType,null) && resolutionMap.staticTypeForExpression(node.prefix).isDynamic) {
            return null;
        }
        return super.visitPrefixedIdentifier(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        let parent : any = node.parent;
        if (is(parent, any) && core.identical(node,parent.methodName)) {
            return null;
        }else if (is(parent, any) && core.identical(node,parent.constructorName)) {
            return null;
        }else if (is(parent, any) && core.identical(node,parent.constructorName)) {
            return null;
        }else if (is(parent, any) && core.identical(node,parent.name)) {
            return null;
        }else if (is(parent, any) && core.identical(node,parent.fieldName)) {
            return null;
        }else if (is(node.staticElement, any)) {
            return null;
        }
        return super.visitSimpleIdentifier(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeAnnotation(node : any) : core.DartObject {
        if (op(Op.EQUALS,node.type,null)) {
            this._unresolvedTypes.add(node);
        }else {
            this._resolvedTypeCount++;
        }
        return super.visitTypeAnnotation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeName(node : any) : core.DartObject {
        if (op(Op.EQUALS,node.type,null)) {
            this._unresolvedTypes.add(node);
        }else {
            this._resolvedTypeCount++;
        }
        return null;
    }
    _getFileName(node : any) : string {
        if (node != null) {
            let root : any = node.root;
            if (is(root, any)) {
                let rootCU : any = root;
                if (rootCU.element != null) {
                    return resolutionMap.elementDeclaredByCompilationUnit(rootCU).source.fullName;
                }else {
                    return "<unknown file- CompilationUnit.getElement() returned null>";
                }
            }else {
                return "<unknown file- CompilationUnit.getRoot() is not a CompilationUnit>";
            }
        }
        return "<unknown file- ASTNode is null>";
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticTypeVerifier() {
        this._unresolvedExpressions = new core.DartList<any>();
        this._invalidlyPropagatedExpressions = new core.DartList<any>();
        this._unresolvedTypes = new core.DartList<any>();
        this._resolvedExpressionCount = 0;
        this._propagatedExpressionCount = 0;
        this._resolvedTypeCount = 0;
    }
}

export namespace StrictModeTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'StrictModeTest';
    export type Interface = Omit<StrictModeTest, Constructors>;
}
@DartClass
export class StrictModeTest extends lib4.ResolverTestCase {
    fail_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(List<int> list) {\n  num sum = 0;\n  for (num i = 0; i < list.length; i++) {\n    sum += list[i];\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        let options : any = new bare.createInstance(any,null);
        options.hint = false;
        this.resetWith({
            options : options});
    }
    test_assert_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  assert (n is int);\n  return n & 0x0F;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_conditional_and_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  return (n is int && n > 0) ? n & 0x0F : 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_conditional_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  return (n is int) ? n & 0x0F : 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_conditional_isNot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  return (n is! int) ? 0 : n & 0x0F;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_conditional_or_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  return (n is! int || n < 0) ? 0 : n & 0x0F;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_forEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(List<int> list) {\n  num sum = 0;\n  for (num n in list) {\n    sum += n & 0x0F;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_if_and_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  if (n is int && n > 0) {\n    return n & 0x0F;\n  }\n  return 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_if_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  if (n is int) {\n    return n & 0x0F;\n  }\n  return 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_if_isNot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  if (n is! int) {\n    return 0;\n  } else {\n    return n & 0x0F;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_if_isNot_abrupt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  if (n is! int) {\n    return 0;\n  }\n  return n & 0x0F;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_if_or_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(num n) {\n  if (n is! int || n < 0) {\n    return 0;\n  } else {\n    return n & 0x0F;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_localVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f() {\n  num n = 1234;\n  return n & 0x0F;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_OPERATOR));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrictModeTest() {
    }
}

export namespace SubtypeManagerTest {
    export type Constructors = 'SubtypeManagerTest';
    export type Interface = Omit<SubtypeManagerTest, Constructors>;
}
@DartClass
export class SubtypeManagerTest {
    _subtypeManager : any;

    _definingCompilationUnit : any;

    setUp() : void {
        let resourceProvider : any = new bare.createInstance(any,null);
        let context : any = lib5.AnalysisContextFactory.contextWithCore({
            resourceProvider : resourceProvider});
        let source : any = new bare.createInstance(any,null,resourceProvider.getFile("/test.dart"));
        this._definingCompilationUnit = new bare.createInstance(any,null,"test.dart");
        this._definingCompilationUnit.librarySource = this._definingCompilationUnit.source = source;
        let definingLibrary : any = ElementFactory.library(context,"test");
        definingLibrary.definingCompilationUnit = this._definingCompilationUnit;
        this._subtypeManager = new bare.createInstance(any,null);
    }
    test_computeAllSubtypes_infiniteLoop() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        this._definingCompilationUnit.types = new core.DartList.literal<any>(classA,classB);
        let subtypesOfA : core.DartHashSet<any> = this._subtypeManager.computeAllSubtypes(classA);
        let arraySubtypesOfA : core.DartList<any> = new core.DartList.from(subtypesOfA);
        expect(subtypesOfA,hasLength(2));
        expect(arraySubtypesOfA,unorderedEquals(new core.DartList.literal(classA,classB)));
    }
    test_computeAllSubtypes_manyRecursiveSubtypes() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let classD : any = ElementFactory.classElement("D",classB.type);
        let classE : any = ElementFactory.classElement("E",classB.type);
        this._definingCompilationUnit.types = new core.DartList.literal<any>(classA,classB,classC,classD,classE);
        let subtypesOfA : core.DartHashSet<any> = this._subtypeManager.computeAllSubtypes(classA);
        let arraySubtypesOfA : core.DartList<any> = new core.DartList.from(subtypesOfA);
        let subtypesOfB : core.DartHashSet<any> = this._subtypeManager.computeAllSubtypes(classB);
        let arraySubtypesOfB : core.DartList<any> = new core.DartList.from(subtypesOfB);
        expect(subtypesOfA,hasLength(4));
        expect(arraySubtypesOfA,unorderedEquals(new core.DartList.literal(classB,classC,classD,classE)));
        expect(subtypesOfB,hasLength(3));
        expect(arraySubtypesOfB,unorderedEquals(new core.DartList.literal(classC,classD,classE)));
    }
    test_computeAllSubtypes_noSubtypes() : void {
        let classA : any = ElementFactory.classElement2("A");
        this._definingCompilationUnit.types = new core.DartList.literal<any>(classA);
        let subtypesOfA : core.DartHashSet<any> = this._subtypeManager.computeAllSubtypes(classA);
        expect(subtypesOfA,hasLength(0));
    }
    test_computeAllSubtypes_oneSubtype() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        this._definingCompilationUnit.types = new core.DartList.literal<any>(classA,classB);
        let subtypesOfA : core.DartHashSet<any> = this._subtypeManager.computeAllSubtypes(classA);
        let arraySubtypesOfA : core.DartList<any> = new core.DartList.from(subtypesOfA);
        expect(subtypesOfA,hasLength(1));
        expect(arraySubtypesOfA,unorderedEquals(new core.DartList.literal(classB)));
    }
    constructor() {
    }
    @defaultConstructor
    SubtypeManagerTest() {
    }
}

export namespace TypeOverrideManagerTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'TypeOverrideManagerTest';
    export type Interface = Omit<TypeOverrideManagerTest, Constructors>;
}
@DartClass
export class TypeOverrideManagerTest extends lib3.EngineTestCase {
    test_exitScope_noScopes() : void {
        let manager : any = new bare.createInstance(any,null);
        expect(() =>  {
            manager.exitScope();
        },throwsStateError);
    }
    test_exitScope_oneScope() : void {
        let manager : any = new bare.createInstance(any,null);
        manager.enterScope();
        manager.exitScope();
        expect(() =>  {
            manager.exitScope();
        },throwsStateError);
    }
    test_exitScope_twoScopes() : void {
        let manager : any = new bare.createInstance(any,null);
        manager.enterScope();
        manager.exitScope();
        manager.enterScope();
        manager.exitScope();
        expect(() =>  {
            manager.exitScope();
        },throwsStateError);
    }
    test_getType_enclosedOverride() : void {
        let manager : any = new bare.createInstance(any,null);
        let element : any = ElementFactory.localVariableElement2("v");
        let type : any = ElementFactory.classElement2("C").type;
        manager.enterScope();
        manager.setType(element,type);
        manager.enterScope();
        expect(manager.getType(element),same(type));
    }
    test_getType_immediateOverride() : void {
        let manager : any = new bare.createInstance(any,null);
        let element : any = ElementFactory.localVariableElement2("v");
        let type : any = ElementFactory.classElement2("C").type;
        manager.enterScope();
        manager.setType(element,type);
        expect(manager.getType(element),same(type));
    }
    test_getType_noOverride() : void {
        let manager : any = new bare.createInstance(any,null);
        manager.enterScope();
        expect(manager.getType(ElementFactory.localVariableElement2("v")),isNull);
    }
    test_getType_noScope() : void {
        let manager : any = new bare.createInstance(any,null);
        expect(manager.getType(ElementFactory.localVariableElement2("v")),isNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeOverrideManagerTest() {
    }
}

export namespace TypePropagationTest {
    export type Constructors = lib4.ResolverTestCase.Constructors | 'TypePropagationTest';
    export type Interface = Omit<TypePropagationTest, Constructors>;
}
@DartClass
export class TypePropagationTest extends lib4.ResolverTestCase {
    fail_mergePropagatedTypesAtJoinPoint_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f1(x) {\n  var y = [];\n  if (x) {\n    y = 0;\n  } else {\n    y = \'\';\n  }\n  // Propagated type is [List] here: incorrect.\n  // Best we can do is [Object]?\n  return y; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.dynamicType);
        } )());
    }

    fail_mergePropagatedTypesAtJoinPoint_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f2(x) {\n  var y = [];\n  if (x) {\n    y = 0;\n  } else {\n  }\n  // Propagated type is [List] here: incorrect.\n  // Best we can do is [Object]?\n  return y; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.dynamicType);
        } )());
    }

    fail_mergePropagatedTypesAtJoinPoint_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f4(x) {\n  var y = [];\n  if (x) {\n    y = 0;\n  } else {\n    y = 1.5;\n  }\n  // Propagated type is [List] here: incorrect.\n  // A correct answer is the least upper bound of [int] and [double],\n  // i.e. [num].\n  return y; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.numType);
        } )());
    }

    fail_mergePropagatedTypesAtJoinPoint_5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f6(x,y) {\n  var z = [];\n  if (x || (z = y) < 0) {\n  } else {\n    z = 0;\n  }\n  // Propagated type is [List] here: incorrect.\n  // Best we can do is [Object]?\n  return z; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.dynamicType);
        } )());
    }

    fail_mergePropagatedTypesAtJoinPoint_7() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'f() {\n  var x = 0;\n  var c = false;\n  var d = true;\n  while (d) {\n    if (c) {\n      d = false;\n    } else {\n      x = \'\';\n      c = true;\n      continue;\n    }\n    x; // marker\n  }\n}';
            let unit : any = await this.resolveSource(code);
            let t : any = this.findMarkedIdentifier(code,unit,"; // marker").propagatedType;
            expect(this.typeProvider.intType.isSubtypeOf(t),isTrue);
            expect(this.typeProvider.stringType.isSubtypeOf(t),isTrue);
        } )());
    }

    fail_mergePropagatedTypesAtJoinPoint_8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'f() {\n  var x = 0;\n  var c = false;\n  var d = true;\n  while (d) {\n    while (d) {\n      if (c) {\n        d = false;\n      } else {\n        x = \'\';\n        c = true;\n        break;\n      }\n      x; // marker\n    }\n  }\n}';
            let unit : any = await this.resolveSource(code);
            let t : any = this.findMarkedIdentifier(code,unit,"; // marker").propagatedType;
            expect(this.typeProvider.intType.isSubtypeOf(t),isTrue);
            expect(this.typeProvider.stringType.isSubtypeOf(t),isTrue);
        } )());
    }

    fail_propagatedReturnType_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  var v = (() {return 42;})();\n}';
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.dynamicType,this.typeProvider.intType);
        } )());
    }

    test_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  bool get g => true;\n}\nA f(var p) {\n  if ((p as A).g) {\n    return p;\n  } else {\n    return null;\n  }\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let ifStatement : any = op(Op.INDEX,body.block.statements,0) as any;
            let statement : any = op(Op.INDEX,(ifStatement.thenStatement as any).statements,0) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_assert() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  assert (p is A);\n  return p;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v;\n  v = 0;\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,2) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,this.typeProvider.intType);
        } )());
    }

    test_assignment_afterInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = 0;\n  v = 1.0;\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,2) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,this.typeProvider.doubleType);
        } )());
    }

    test_assignment_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  int v; // declare\n  v = null;\n  return v; // return\n}';
            let unit : any;
            {
                let source : any = this.addSource(code);
                let analysisResult : lib4.TestAnalysisResult = await this.computeAnalysisResult(source);
                this.assertNoErrors(source);
                this.verify(new core.DartList.literal(source));
                unit = analysisResult.unit;
            }
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"v; // declare",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.staticType,this.typeProvider.intType);
                expect(identifier.propagatedType,isNull);
            }
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"v = null;",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.staticType,this.typeProvider.intType);
                expect(identifier.propagatedType,isNull);
            }
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"v; // return",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.staticType,this.typeProvider.intType);
                expect(identifier.propagatedType,isNull);
            }
        } )());
    }

    test_assignment_throwExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = 1;\n  v = throw 2;\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source,{
                noErrors : false});
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,2) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,this.typeProvider.intType);
        } )());
    }

    test_CanvasElement_getContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:html\';\nmain(CanvasElement canvas) {\n  var context = canvas.getContext(\'2d\');\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            let identifier : any = lib3.EngineTestCase.findNode(unit,code,"context",(node : any) =>  {
                return is(node, any);
            });
            expect(resolutionMap.propagatedTypeForExpression(identifier).name,"CanvasRenderingContext2D");
        } )());
    }

    test_forEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  var list = <String> [];\n  for (var e in list) {\n    e;\n  }\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"e in",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.propagatedType,this.typeProvider.stringType);
            }
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"e;",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.propagatedType,this.typeProvider.stringType);
            }
        } )());
    }

    test_forEach_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:async\';\nf(Stream<String> stream) async {\n  await for (var e in stream) {\n    e;\n  }\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"e in",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.propagatedType,this.typeProvider.stringType);
            }
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"e;",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.propagatedType,this.typeProvider.stringType);
            }
        } )());
    }

    test_forEach_async_inheritedStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:async\';\nabstract class MyCustomStream<T> implements Stream<List<T>> {}\nf(MyCustomStream<String> stream) async {\n  await for (var e in stream) {\n    e;\n  }\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            let listOfStringType : any = this.typeProvider.listType.instantiate(new core.DartList.literal(this.typeProvider.stringType));
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"e in",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.propagatedType,equals(listOfStringType));
            }
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"e;",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.propagatedType,equals(listOfStringType));
            }
        } )());
    }

    test_functionExpression_asInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class MyMap<K, V> {\n  forEach(f(K key, V value)) {}\n}\nf(MyMap<int, String> m) {\n  m.forEach((k, v) {\n    k;\n    v;\n  });\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            let kParameter : any = lib3.EngineTestCase.findNode(unit,code,"k, ",(node : any) =>  {
                return is(node, any);
            });
            expect(kParameter.identifier.propagatedType,this.typeProvider.intType);
            let kIdentifier : any = lib3.EngineTestCase.findNode(unit,code,"k;",(node : any) =>  {
                return is(node, any);
            });
            expect(kIdentifier.propagatedType,this.typeProvider.intType);
            expect(kIdentifier.staticType,this.typeProvider.dynamicType);
            let vParameter : any = lib3.EngineTestCase.findNode(unit,code,"v)",(node : any) =>  {
                return is(node, any);
            });
            expect(vParameter.identifier.propagatedType,this.typeProvider.stringType);
            let vIdentifier : any = lib3.EngineTestCase.findNode(unit,code,"v;",(node : any) =>  {
                return is(node, any);
            });
            expect(vIdentifier.propagatedType,this.typeProvider.stringType);
            expect(vIdentifier.staticType,this.typeProvider.dynamicType);
        } )());
    }

    test_functionExpression_asInvocationArgument_fromInferredInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class MyMap<K, V> {\n  forEach(f(K key, V value)) {}\n}\nf(MyMap<int, String> m) {\n  var m2 = m;\n  m2.forEach((k, v) {});\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            let kParameter : any = lib3.EngineTestCase.findNode(unit,code,"k, ",(node : any) =>  {
                return is(node, any);
            });
            expect(kParameter.identifier.propagatedType,this.typeProvider.intType);
            let vParameter : any = lib3.EngineTestCase.findNode(unit,code,"v)",(node : any) =>  {
                return is(node, any);
            });
            expect(vParameter.identifier.propagatedType,this.typeProvider.stringType);
        } )());
    }

    test_functionExpression_asInvocationArgument_functionExpressionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  (f(String value)) {} ((v) {\n    v;\n  });\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            let vParameter : any = lib3.EngineTestCase.findNode(unit,code,"v)",(node : any) =>  {
                return is(node, any);
            });
            expect(vParameter.identifier.propagatedType,this.typeProvider.stringType);
            expect(vParameter.identifier.staticType,this.typeProvider.dynamicType);
            let vIdentifier : any = lib3.EngineTestCase.findNode(unit,code,"v;",(node : any) =>  {
                return is(node, any);
            });
            expect(vIdentifier.propagatedType,this.typeProvider.stringType);
            expect(vIdentifier.staticType,this.typeProvider.dynamicType);
        } )());
    }

    test_functionExpression_asInvocationArgument_keepIfLessSpecific() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class MyList {\n  forEach(f(Object value)) {}\n}\nf(MyList list) {\n  list.forEach((int v) {\n    v;\n  });\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            let vParameter : any = lib3.EngineTestCase.findNode(unit,code,"v)",(node : any) =>  {
                return is(node, any);
            });
            expect(vParameter.identifier.propagatedType,isNull);
            expect(vParameter.identifier.staticType,this.typeProvider.intType);
            let vIdentifier : any = lib3.EngineTestCase.findNode(unit,code,"v;",(node : any) =>  {
                return is(node, any);
            });
            expect(vIdentifier.staticType,this.typeProvider.intType);
            expect(vIdentifier.propagatedType,isNull);
        } )());
    }

    test_functionExpression_asInvocationArgument_notSubtypeOfStaticType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A {\n  m(void f(int i)) {}\n}\nx() {\n  A a = new A();\n  a.m(() => 0);\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source,{
                noErrors : false});
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            let functionExpression : any = lib3.EngineTestCase.findNode(unit,code,"() => 0)",(node : any) =>  {
                return is(node, any);
            });
            expect((functionExpression.staticType as any).parameters.length,same(0));
            expect(functionExpression.propagatedType,isNull);
        } )());
    }

    test_functionExpression_asInvocationArgument_replaceIfMoreSpecific() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class MyList<E> {\n  forEach(f(E value)) {}\n}\nf(MyList<String> list) {\n  list.forEach((Object v) {\n    v;\n  });\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            let vParameter : any = lib3.EngineTestCase.findNode(unit,code,"v)",(node : any) =>  {
                return is(node, any);
            });
            expect(vParameter.identifier.propagatedType,this.typeProvider.stringType);
            expect(vParameter.identifier.staticType,this.typeProvider.objectType);
            let vIdentifier : any = lib3.EngineTestCase.findNode(unit,code,"v;",(node : any) =>  {
                return is(node, any);
            });
            expect(vIdentifier.propagatedType,this.typeProvider.stringType);
        } )());
    }

    test_Future_then() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:async\';\nmain(Future<int> firstFuture) {\n  firstFuture.then((p1) {\n    return 1.0;\n  }).then((p2) {\n    return new Future<String>.value(\'str\');\n  }).then((p3) {\n  });\n}';
            let source : any = this.addSource(code);
            let unit : any = await this._computeResolvedUnit(source);
            let p1 : any = lib3.EngineTestCase.findNode(unit,code,"p1) {",(node : any) =>  {
                return is(node, any);
            });
            expect(p1.identifier.propagatedType,this.typeProvider.intType);
            let p2 : any = lib3.EngineTestCase.findNode(unit,code,"p2) {",(node : any) =>  {
                return is(node, any);
            });
            expect(p2.identifier.propagatedType,this.typeProvider.doubleType);
            let p3 : any = lib3.EngineTestCase.findNode(unit,code,"p3) {",(node : any) =>  {
                return is(node, any);
            });
            expect(p3.identifier.propagatedType,this.typeProvider.stringType);
        } )());
    }

    test_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = 0;\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statements : any = body.block.statements;
            {
                let statement : any = op(Op.INDEX,statements,0) as any;
                let variableName : any = op(Op.INDEX,statement.variables.variables,0).name;
                expect(variableName.staticType,this.typeProvider.dynamicType);
                expect(variableName.propagatedType,this.typeProvider.intType);
            }
            {
                let statement : any = op(Op.INDEX,statements,1) as any;
                let variableName : any = statement.expression as any;
                expect(variableName.propagatedType,this.typeProvider.intType);
            }
        } )());
    }

    test_initializer_dereference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = \'String\';\n  v.\n}');
            let unit : any = await this._computeResolvedUnit(source,{
                noErrors : false});
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let invocation : any = statement.expression as any;
            let variableName : any = invocation.prefix;
            expect(variableName.propagatedType,this.typeProvider.stringType);
        } )());
    }

    test_initializer_hasStaticType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  int v = 0;\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statements : any = body.block.statements;
            {
                let statement : any = op(Op.INDEX,statements,0) as any;
                let variableName : any = op(Op.INDEX,statement.variables.variables,0).name;
                expect(variableName.staticType,this.typeProvider.intType);
                expect(variableName.propagatedType,isNull);
            }
            {
                let statement : any = op(Op.INDEX,statements,1) as any;
                let variableName : any = statement.expression as any;
                expect(variableName.staticType,this.typeProvider.intType);
                expect(variableName.propagatedType,isNull);
            }
        } )());
    }

    test_initializer_hasStaticType_parameterized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  List<int> v = <int>[];\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statements : any = body.block.statements;
            {
                let statement : any = op(Op.INDEX,statements,0) as any;
                let variableName : any = op(Op.INDEX,statement.variables.variables,0).name;
                expect(variableName.staticType,isNotNull);
                expect(variableName.propagatedType,isNull);
            }
            {
                let statement : any = op(Op.INDEX,statements,1) as any;
                let variableName : any = statement.expression as any;
                expect(variableName.staticType,isNotNull);
                expect(variableName.propagatedType,isNull);
            }
        } )());
    }

    test_initializer_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  int v = null;\n  return v; // marker\n}';
            let unit : any;
            {
                let source : any = this.addSource(code);
                unit = await this._computeResolvedUnit(source);
            }
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"v = null;",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.staticType,this.typeProvider.intType);
                expect(identifier.propagatedType,isNull);
            }
            {
                let identifier : any = lib3.EngineTestCase.findNode(unit,code,"v; // marker",(node : any) =>  {
                    return is(node, any);
                });
                expect(identifier.staticType,this.typeProvider.intType);
                expect(identifier.propagatedType,isNull);
            }
        } )());
    }

    test_initializer_throwExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = throw 2;\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source,{
                noErrors : false});
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement = op(Op.INDEX,body.block.statements,0) as any;
            let variableName : any = op(Op.INDEX,statement.variables.variables,0).name;
            expect(variableName.propagatedType,isNull);
        } )());
    }

    test_invocation_target_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/helper.dart','library helper;\nint max(int x, int y) => 0;\n');
            let code : string = 'import \'helper.dart\' as helper;\nmain() {\n  helper.max(10, 10); // marker\n}';
            let unit : any = await this.resolveSource(code);
            let methodName : any = this.findMarkedIdentifier(code,unit,"(10, 10); // marker");
            let methodInvoke : any = methodName.parent;
            expect(methodInvoke.methodName.staticElement,isNotNull);
            expect(methodInvoke.methodName.propagatedElement,isNull);
        } )());
    }

    test_is_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  return (p is A) ? p : null;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,0) as any;
            let conditional : any = statement.expression as any;
            let variableName : any = conditional.thenExpression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_is_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  if (p is A) {\n    return p;\n  } else {\n    return null;\n  }\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let typeA : any;
            {
                let classA : any = op(Op.INDEX,unit.declarations,0) as any;
                typeA = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            }
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let ifStatement : any = op(Op.INDEX,body.block.statements,0) as any;
            {
                let isExpression : any = ifStatement.condition;
                let variableName : any = isExpression.expression;
                expect(variableName.propagatedType,isNull);
            }
            {
                let statement : any = op(Op.INDEX,(ifStatement.thenStatement as any).statements,0) as any;
                let variableName : any = statement.expression as any;
                expect(variableName.propagatedType,same(typeA));
            }
        } )());
    }

    test_is_if_lessSpecific() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(A p) {\n  if (p is String) {\n    return p;\n  } else {\n    return null;\n  }\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let ifStatement : any = op(Op.INDEX,body.block.statements,0) as any;
            let statement : any = op(Op.INDEX,(ifStatement.thenStatement as any).statements,0) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,isNull);
        } )());
    }

    test_is_if_logicalAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  if (p is A && p != null) {\n    return p;\n  } else {\n    return null;\n  }\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let ifStatement : any = op(Op.INDEX,body.block.statements,0) as any;
            let statement : any = op(Op.INDEX,(ifStatement.thenStatement as any).statements,0) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_is_postConditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  A a = (p is A) ? p : throw null;\n  return p;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_is_postIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  if (p is A) {\n    A a = p;\n  } else {\n    return null;\n  }\n  return p;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_is_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  B m() => this;\n}\nA f(A p) {\n  if (p is B) {\n    return p.m();\n  }\n  return p;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,2) as any;
            let body : any = function.functionExpression.body as any;
            let ifStatement : any = op(Op.INDEX,body.block.statements,0) as any;
            let statement : any = op(Op.INDEX,(ifStatement.thenStatement as any).statements,0) as any;
            let invocation : any = statement.expression as any;
            expect(invocation.methodName.staticElement,isNotNull);
            expect(invocation.methodName.propagatedElement,isNull);
        } )());
    }

    test_is_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  while (p is A) {\n    return p;\n  }\n  return p;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let whileStatement : any = op(Op.INDEX,body.block.statements,0) as any;
            let statement : any = op(Op.INDEX,(whileStatement.body as any).statements,0) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_isNot_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  return (p is! A) ? null : p;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,0) as any;
            let conditional : any = statement.expression as any;
            let variableName : any = conditional.elseExpression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_isNot_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  if (p is! A) {\n    return null;\n  } else {\n    return p;\n  }\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let ifStatement : any = op(Op.INDEX,body.block.statements,0) as any;
            let statement : any = op(Op.INDEX,(ifStatement.elseStatement as any).statements,0) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_isNot_if_logicalOr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  if (p is! A || null == p) {\n    return null;\n  } else {\n    return p;\n  }\n}');
            let unit : any = await this._computeResolvedUnit(source,{
                noErrors : false});
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let ifStatement : any = op(Op.INDEX,body.block.statements,0) as any;
            let statement : any = op(Op.INDEX,(ifStatement.elseStatement as any).statements,0) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_isNot_postConditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  A a = (p is! A) ? throw null : p;\n  return p;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_isNot_postIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nA f(var p) {\n  if (p is! A) {\n    return null;\n  }\n  return p;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let classA : any = op(Op.INDEX,unit.declarations,0) as any;
            let typeA : any = resolutionMap.elementDeclaredByClassDeclaration(classA).type;
            let function : any = op(Op.INDEX,unit.declarations,1) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let variableName : any = statement.expression as any;
            expect(variableName.propagatedType,same(typeA));
        } )());
    }

    test_issue20904BuggyTypePromotionAtIfJoin_5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A {}\nclass B extends A {}\nf() {\n  var a = new A();\n  var b = new B();\n  b; // B\n  if (a is B) {\n    return a; // marker\n  }\n}';
            let unit : any = await this.resolveSource(code);
            let tB : any = this.findMarkedIdentifier(code,unit,"; // B").propagatedType;
            this.assertTypeOfMarkedExpression(code,unit,null,tB);
        } )());
    }

    test_issue20904BuggyTypePromotionAtIfJoin_6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A {}\nclass B extends A {}\nf() {\n  var b = new B();\n  b; // B\n  if (b is A) {\n    return b; // marker\n  }\n}';
            let unit : any = await this.resolveSource(code);
            let tB : any = this.findMarkedIdentifier(code,unit,"; // B").propagatedType;
            this.assertTypeOfMarkedExpression(code,unit,null,tB);
        } )());
    }

    test_listLiteral_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = [0, \'1\', 2];\n  return v[2];\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let indexExpression : any = statement.expression as any;
            expect(indexExpression.propagatedType,isNull);
        } )());
    }

    test_listLiteral_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = [0, 1, 2];\n  return v[2];\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let indexExpression : any = statement.expression as any;
            expect(indexExpression.propagatedType,isNull);
            let v : any = indexExpression.target;
            let propagatedType : any = v.propagatedType as any;
            expect(propagatedType.element,this.typeProvider.listType.element);
            let typeArguments : core.DartList<any> = propagatedType.typeArguments;
            expect(typeArguments,hasLength(1));
            expect(typeArguments[0],this.typeProvider.dynamicType);
        } )());
    }

    test_mapLiteral_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = {\'0\' : 0, 1 : \'1\', \'2\' : 2};\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let identifier : any = statement.expression as any;
            let propagatedType : any = identifier.propagatedType as any;
            expect(propagatedType.element,this.typeProvider.mapType.element);
            let typeArguments : core.DartList<any> = propagatedType.typeArguments;
            expect(typeArguments,hasLength(2));
            expect(typeArguments[0],this.typeProvider.dynamicType);
            expect(typeArguments[1],this.typeProvider.dynamicType);
        } )());
    }

    test_mapLiteral_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var v = {\'a\' : 0, \'b\' : 1, \'c\' : 2};\n  return v;\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let function : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = function.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,1) as any;
            let identifier : any = statement.expression as any;
            let propagatedType : any = identifier.propagatedType as any;
            expect(propagatedType.element,this.typeProvider.mapType.element);
            let typeArguments : core.DartList<any> = propagatedType.typeArguments;
            expect(typeArguments,hasLength(2));
            expect(typeArguments[0],this.typeProvider.dynamicType);
            expect(typeArguments[1],this.typeProvider.dynamicType);
        } )());
    }

    test_mergePropagatedTypes_afterIfThen_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  var v = 0;\n  if (v != null) {\n    v = \'\';\n  }\n  return v;\n}';
            let unit : any = await this.resolveSource(code);
            {
                let identifier : any = this.findMarkedIdentifier(code,unit,"v;");
                expect(identifier.propagatedType,null);
            }
            {
                let identifier : any = this.findMarkedIdentifier(code,unit,"v = '';");
                expect(identifier.propagatedType,this.typeProvider.stringType);
            }
        } )());
    }

    test_mergePropagatedTypes_afterIfThen_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'main() {\n  var v = 1;\n  if (v != null) {\n    v = 2;\n  }\n  return v; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.intType);
        } )());
    }

    test_mergePropagatedTypes_afterIfThenElse_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'main() {\n  var v = 1;\n  if (v != null) {\n    v = 2;\n  } else {\n    v = \'3\';\n  }\n  return v; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,null);
        } )());
    }

    test_mergePropagatedTypes_afterIfThenElse_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'main() {\n  var v = 1;\n  if (v != null) {\n    v = 2;\n  } else {\n    v = 3;\n  }\n  return v; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.intType);
        } )());
    }

    test_mergePropagatedTypesAtJoinPoint_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f5(x) {\n  var y = [];\n  if (x) {\n    y = 0;\n  } else {\n    return y;\n  }\n  // Propagated type is [int] here: correct.\n  return y; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.intType);
        } )());
    }

    test_mutatedOutsideScope() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Base {\n}\n\nclass Derived extends Base {\n  get y => null;\n}\n\nclass C {\n  void f() {\n    Base x = null;\n    if (x is Derived) {\n      print(x.y); // BAD\n    }\n    x = null;\n  }\n}\n\nvoid g() {\n  Base x = null;\n  if (x is Derived) {\n    print(x.y); // GOOD\n  }\n  x = null;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_objectAccessInference_disabled_for_library_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let name : string = 'hashCode';
            this.addNamedSource('/helper.dart',`library helper;\ndynamic get ${name} => 42;\n`);
            let code : string = `import 'helper.dart' as helper;\nmain() {\n  helper.${name}; // marker\n}`;
            let unit : any = await this.resolveSource(code);
            let id : any = this.findMarkedIdentifier(code,unit,"; // marker");
            let prefixedId : any = id.parent;
            expect(id.staticType,this.typeProvider.dynamicType);
            expect(prefixedId.staticType,this.typeProvider.dynamicType);
        } )());
    }

    test_objectAccessInference_disabled_for_local_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let name : string = 'hashCode';
            let code : string = `dynamic get ${name} => null;\nmain() {\n  ${name}; // marker\n}`;
            let unit : any = await this.resolveSource(code);
            let getter : any = this.findMarkedIdentifier(code,unit,"; // marker");
            expect(getter.staticType,this.typeProvider.dynamicType);
        } )());
    }

    test_objectAccessInference_enabled_for_cascades() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let name : string = 'hashCode';
            let code : string = `main() {\n  dynamic obj;\n  obj..${name}..${name}; // marker\n}`;
            let unit : any = await this.resolveSource(code);
            let access : any = this.findMarkedIdentifier(code,unit,"; // marker").parent;
            expect(access.staticType,this.typeProvider.dynamicType);
            expect(access.realTarget.staticType,this.typeProvider.dynamicType);
        } )());
    }

    test_objectMethodInference_disabled_for_library_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let name : string = 'toString';
            this.addNamedSource('/helper.dart',`library helper;\ndynamic ${name} = (int x) => x + 42');\n`);
            let code : string = `import 'helper.dart' as helper;\nmain() {\n  helper.${name}(); // marker\n}`;
            let unit : any = await this.resolveSource(code);
            let methodName : any = this.findMarkedIdentifier(code,unit,"(); // marker");
            let methodInvoke : any = methodName.parent;
            expect(methodName.staticType,this.typeProvider.dynamicType);
            expect(methodInvoke.staticType,this.typeProvider.dynamicType);
        } )());
    }

    test_objectMethodInference_disabled_for_local_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let name : string = 'toString';
            let code : string = `main() {\n  dynamic ${name} = () => null;\n  ${name}(); // marker\n}`;
            let unit : any = await this.resolveSource(code);
            let identifier : any = this.findMarkedIdentifier(code,unit,`${name} = `);
            expect(identifier.staticType,this.typeProvider.dynamicType);
            let methodName : any = this.findMarkedIdentifier(code,unit,"(); // marker");
            let methodInvoke : any = methodName.parent;
            expect(methodName.staticType,this.typeProvider.dynamicType);
            expect(methodInvoke.staticType,this.typeProvider.dynamicType);
        } )());
    }

    test_objectMethodInference_enabled_for_cascades() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let name : string = 'toString';
            let code : string = `main() {\n  dynamic obj;\n  obj..${name}()..${name}(); // marker\n}`;
            let unit : any = await this.resolveSource(code);
            let methodName : any = this.findMarkedIdentifier(code,unit,"(); // marker");
            let methodInvoke : any = methodName.parent;
            expect(methodInvoke.staticType,this.typeProvider.dynamicType);
            expect(methodInvoke.realTarget.staticType,this.typeProvider.dynamicType);
        } )());
    }

    test_objectMethodOnDynamicExpression_doubleEquals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f1(x) {\n  var v = (x == x);\n  return v; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.boolType);
        } )());
    }

    test_objectMethodOnDynamicExpression_hashCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f1(x) {\n  var v = x.hashCode;\n  return v; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.intType);
        } )());
    }

    test_objectMethodOnDynamicExpression_runtimeType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f1(x) {\n  var v = x.runtimeType;\n  return v; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.typeType);
        } )());
    }

    test_objectMethodOnDynamicExpression_toString() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code = 'f1(x) {\n  var v = x.toString();\n  return v; // marker\n}';
            let unit : any = await this.resolveSource(code);
            this.assertTypeOfMarkedExpression(code,unit,null,this.typeProvider.stringType);
        } )());
    }

    test_propagatedReturnType_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  f() => 42;\n  var v = f();\n}';
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.dynamicType,this.typeProvider.intType);
        } )());
    }

    test_query() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:html\';\n\nmain() {\n  var v1 = query(\'a\');\n  var v2 = query(\'A\');\n  var v3 = query(\'body:active\');\n  var v4 = query(\'button[foo="bar"]\');\n  var v5 = query(\'div.class\');\n  var v6 = query(\'input#id\');\n  var v7 = query(\'select#id\');\n  // invocation of method\n  var m1 = document.query(\'div\');\n // unsupported currently\n  var b1 = query(\'noSuchTag\');\n  var b2 = query(\'DART_EDITOR_NO_SUCH_TYPE\');\n  var b3 = query(\'body div\');\n  return [v1, v2, v3, v4, v5, v6, v7, m1, b1, b2, b3];\n}');
            let unit : any = await this._computeResolvedUnit(source);
            let main : any = op(Op.INDEX,unit.declarations,0) as any;
            let body : any = main.functionExpression.body as any;
            let statement : any = op(Op.INDEX,body.block.statements,11) as any;
            let elements : any = (statement.expression as any).elements;
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,0)).name,"AnchorElement");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,1)).name,"AnchorElement");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,2)).name,"BodyElement");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,3)).name,"ButtonElement");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,4)).name,"DivElement");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,5)).name,"InputElement");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,6)).name,"SelectElement");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,7)).name,"DivElement");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,8)).name,"Element");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,9)).name,"Element");
            expect(resolutionMap.propagatedTypeForExpression(op(Op.INDEX,elements,10)).name,"Element");
        } )());
    }

    _computeResolvedUnit(source : any,_namedArguments? : {noErrors? : boolean}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {noErrors} = Object.assign({
                "noErrors" : true}, _namedArguments );
            let analysisResult : lib4.TestAnalysisResult = await this.computeAnalysisResult(source);
            if (noErrors) {
                this.assertNoErrors(source);
                this.verify(new core.DartList.literal(source));
            }
            return analysisResult.unit;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypePropagationTest() {
    }
}

export namespace TypeProviderImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'TypeProviderImplTest';
    export type Interface = Omit<TypeProviderImplTest, Constructors>;
}
@DartClass
export class TypeProviderImplTest extends lib3.EngineTestCase {
    test_creation() : void {
        let objectType : any = this._classElement("Object",null).type;
        let boolType : any = this._classElement("bool",objectType).type;
        let numType : any = this._classElement("num",objectType).type;
        let doubleType : any = this._classElement("double",numType).type;
        let functionType : any = this._classElement("Function",objectType).type;
        let futureType : any = this._classElement("Future",objectType,new core.DartList.literal("T")).type;
        let futureOrType : any = this._classElement("FutureOr",objectType,new core.DartList.literal("T")).type;
        let intType : any = this._classElement("int",numType).type;
        let iterableType : any = this._classElement("Iterable",objectType,new core.DartList.literal("T")).type;
        let listType : any = this._classElement("List",objectType,new core.DartList.literal("E")).type;
        let mapType : any = this._classElement("Map",objectType,new core.DartList.literal("K","V")).type;
        let stackTraceType : any = this._classElement("StackTrace",objectType).type;
        let streamType : any = this._classElement("Stream",objectType,new core.DartList.literal("T")).type;
        let stringType : any = this._classElement("String",objectType).type;
        let symbolType : any = this._classElement("Symbol",objectType).type;
        let typeType : any = this._classElement("Type",objectType).type;
        let coreUnit : any = new bare.createInstance(any,null,"core.dart");
        coreUnit.types = new core.DartList.literal<any>(boolType.element,doubleType.element,functionType.element,intType.element,iterableType.element,listType.element,mapType.element,objectType.element,stackTraceType.element,stringType.element,symbolType.element,typeType.element);
        let asyncUnit : any = new bare.createInstance(any,null,"async.dart");
        asyncUnit.types = new core.DartList.literal<any>(futureType.element,futureOrType.element,streamType.element);
        let context : any = AnalysisEngine.instance.createAnalysisContext();
        let coreLibrary : any = new bare.createInstance(any,null,context,AstTestFactory.libraryIdentifier2(new core.DartList.literal("dart.core")));
        coreLibrary.definingCompilationUnit = coreUnit;
        let asyncLibrary : any = new bare.createInstance(any,null,context,AstTestFactory.libraryIdentifier2(new core.DartList.literal("dart.async")));
        asyncLibrary.definingCompilationUnit = asyncUnit;
        let provider : any = new bare.createInstance(any,null,coreLibrary,asyncLibrary);
        expect(provider.boolType,same(boolType));
        expect(provider.bottomType,isNotNull);
        expect(provider.doubleType,same(doubleType));
        expect(provider.dynamicType,isNotNull);
        expect(provider.functionType,same(functionType));
        expect(provider.futureType,same(futureType));
        expect(provider.futureOrType,same(futureOrType));
        expect(provider.intType,same(intType));
        expect(provider.listType,same(listType));
        expect(provider.mapType,same(mapType));
        expect(provider.objectType,same(objectType));
        expect(provider.stackTraceType,same(stackTraceType));
        expect(provider.streamType,same(streamType));
        expect(provider.stringType,same(stringType));
        expect(provider.symbolType,same(symbolType));
        expect(provider.typeType,same(typeType));
    }
    _classElement(typeName : string,superclassType : any,parameterNames? : core.DartList<string>) : any {
        let element : any = new bare.createInstance(any,null,AstTestFactory.identifier3(typeName));
        element.supertype = superclassType;
        if (parameterNames != null) {
            let count : number = parameterNames.length;
            if (count > 0) {
                let typeParameters : core.DartList<any> = new core.DartList<any>(count);
                let typeArguments : core.DartList<any> = new core.DartList<any>(count);
                for(let i : number = 0; i < count; i++){
                    let typeParameter : any = new bare.createInstance(any,null,AstTestFactory.identifier3(parameterNames[i]));
                    typeParameters[i] = typeParameter;
                    typeArguments[i] = new bare.createInstance(any,null,typeParameter);
                    typeParameter.type = typeArguments[i];
                }
                element.typeParameters = typeParameters;
            }
        }
        return element;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeProviderImplTest() {
    }
}

export namespace TypeResolverVisitorTest {
    export type Constructors = lib7.ParserTestCase.Constructors | 'TypeResolverVisitorTest';
    export type Interface = Omit<TypeResolverVisitorTest, Constructors>;
}
@DartClass
export class TypeResolverVisitorTest extends lib7.ParserTestCase {
    _listener : lib3.GatheringErrorListener;

    _typeProvider : any;

    libraryScope : any;

    _visitor : any;

    fail_visitConstructorDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            fail("Not yet tested");
            this._listener.assertNoErrors();
        } )());
    }

    fail_visitFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            fail("Not yet tested");
            this._listener.assertNoErrors();
        } )());
    }

    fail_visitVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            fail("Not yet tested");
            let type : any = ElementFactory.classElement2("A");
            let node : any = AstTestFactory.variableDeclaration("a");
            AstTestFactory.variableDeclarationList(null,AstTestFactory.typeName(type),new core.DartList.literal(node));
            expect(node.name.staticType,same(type.type));
            this._listener.assertNoErrors();
        } )());
    }

    setUp() : void {
        this._listener = new lib3.GatheringErrorListener();
        let resourceProvider : any = new bare.createInstance(any,null);
        let context : any = lib5.AnalysisContextFactory.contextWithCore({
            resourceProvider : resourceProvider});
        let librarySource : any = new bare.createInstance(any,null,resourceProvider.getFile("/lib.dart"));
        let element : any = new bare.createInstance(any,null,context,AstTestFactory.libraryIdentifier2(new core.DartList.literal("lib")));
        element.definingCompilationUnit = new bare.createInstance(any,null,"lib.dart");
        this._typeProvider = new bare.createInstance(any,null);
        this.libraryScope = new bare.createInstance(any,null,element);
        this._visitor = new bare.createInstance(any,null,element,librarySource,this._typeProvider,this._listener,{
            nameScope : this.libraryScope});
    }
    test_modeApi() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = this.parseCompilationUnit('class C extends A with A implements A {\n  A f = new A();\n  A m() {\n    A v1;\n  }\n}\nA f([A p = const A()]) {\n  A v2;\n}\nA V = new A();\n');
            let unitElement = new bare.createInstance(any,null,'/test.dart');
            let A : any = ElementFactory.classElement2('A');
            {
                let holder = new bare.createInstance(any,null);
                unit.accept(new bare.createInstance(any,null,holder,unitElement));
            }
            {
                let resourceProvider : any = new bare.createInstance(any,null);
                let context : any = lib5.AnalysisContextFactory.contextWithCore({
                    resourceProvider : resourceProvider});
                let source = resourceProvider.getFile('/test.dart').createSource();
                let libraryElement = ((_) : any =>  {
                    {
                        _.definingCompilationUnit = unitElement;
                        return _;
                    }
                })(new bare.createInstance(any,null,context,null));
                let libraryScope = new bare.createInstance(any,null,libraryElement);
                let visitor = new bare.createInstance(any,null,libraryElement,source,this._typeProvider,this._listener,{
                    nameScope : libraryScope,mode : TypeResolverMode.api});
                libraryScope.define(A);
                unit.accept(visitor);
            }
            {
                let c = op(Op.INDEX,unit.declarations,0) as any;
                expect(c.extendsClause.superclass.toString(),'A');
                expect(op(Op.INDEX,c.withClause.mixinTypes,0).type.toString(),'A');
                expect(op(Op.INDEX,c.implementsClause.interfaces,0).type.toString(),'A');
                {
                    let fd = op(Op.INDEX,c.members,0) as any;
                    expect(fd.fields.type.type.toString(),'A');
                    let f = op(Op.INDEX,fd.fields.variables,0);
                    let fi = f.initializer as any;
                    expect(fi.constructorName.type.type,isNull);
                }
                {
                    let m = op(Op.INDEX,c.members,1) as any;
                    expect(m.returnType.type.toString(),'A');
                    let body = m.body as any;
                    let vd = body.block.statements.single as any;
                    expect(vd.variables.type.type,isNull);
                }
            }
            {
                let f = op(Op.INDEX,unit.declarations,1) as any;
                let fe : any = f.functionExpression;
                expect(f.returnType.type.toString(),'A');
                let pd = op(Op.INDEX,fe.parameters.parameters,0) as any;
                let p = pd.parameter as any;
                expect(p.type.type.toString(),'A');
                {
                    let pde = pd.defaultValue as any;
                    expect(pde.constructorName.type.type,isNull);
                }
                let body = fe.body as any;
                let vd = body.block.statements.single as any;
                expect(vd.variables.type.type,isNull);
            }
            {
                let vd = op(Op.INDEX,unit.declarations,2) as any;
                expect(vd.variables.type.toString(),'A');
                let v : any = op(Op.INDEX,vd.variables.variables,0);
                let vi = v.initializer as any;
                expect(vi.constructorName.type.type,isNull);
            }
        } )());
    }

    test_modeLocal_noContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any;
            this._resolveTypeModeLocal('class C {\n  A f = new A();\n  A m([A p = const A()]) {\n    A v;\n  }\n}\nA f([A p = const A()]) {\n  A v1 = new A();\n  A f2(A p2) {\n    A v2;\n  }\n}\nA V = new A();\nA get G => new A();\n',(u : any) =>  {
                unit = u;
                return u;
            });
            {
                let c = op(Op.INDEX,unit.declarations,0) as any;
                {
                    let fd = op(Op.INDEX,c.members,0) as any;
                    expect(fd.fields.type.type,isNull);
                    let f = op(Op.INDEX,fd.fields.variables,0);
                    let fi = f.initializer as any;
                    expect(fi.constructorName.type.type.toString(),'A');
                }
                {
                    let m = op(Op.INDEX,c.members,1) as any;
                    expect(m.returnType.type,isNull);
                    let pd = op(Op.INDEX,m.parameters.parameters,0) as any;
                    let p = pd.parameter as any;
                    expect(p.type.type,isNull);
                    let pdd = pd.defaultValue as any;
                    expect(pdd.constructorName.type.type.toString(),'A');
                    let mb = m.body as any;
                    let vd = op(Op.INDEX,mb.block.statements,0) as any;
                    expect(vd.variables.type.type.toString(),'A');
                }
            }
            {
                let f = op(Op.INDEX,unit.declarations,1) as any;
                expect(f.returnType.type,isNull);
                let fe = f.functionExpression;
                let pd = op(Op.INDEX,fe.parameters.parameters,0) as any;
                let p = pd.parameter as any;
                expect(p.type.type,isNull);
                let pdd = pd.defaultValue as any;
                expect(pdd.constructorName.type.type.toString(),'A');
                let fb = fe.body as any;
                let vd = op(Op.INDEX,fb.block.statements,0) as any;
                expect(vd.variables.type.type.toString(),'A');
                let v = op(Op.INDEX,vd.variables.variables,0);
                let vi = v.initializer as any;
                expect(vi.constructorName.type.type.toString(),'A');
                {
                    let f2s = op(Op.INDEX,fb.block.statements,1) as any;
                    let f2 = f2s.functionDeclaration;
                    expect(f2.returnType.type.toString(),'A');
                    let f2e = f2.functionExpression;
                    let p2 = op(Op.INDEX,f2e.parameters.parameters,0) as any;
                    expect(p2.type.type.toString(),'A');
                    let f2b = f2e.body as any;
                    let v2d = op(Op.INDEX,f2b.block.statements,0) as any;
                    expect(v2d.variables.type.type.toString(),'A');
                }
            }
            {
                let vd = op(Op.INDEX,unit.declarations,2) as any;
                expect(vd.variables.type.type,isNull);
                let v : any = op(Op.INDEX,vd.variables.variables,0);
                let vi = v.initializer as any;
                expect(vi.constructorName.type.type.toString(),'A');
            }
            {
                let g = op(Op.INDEX,unit.declarations,3) as any;
                expect(g.returnType.type,isNull);
                let gb = g.functionExpression.body as any;
                let ge = gb.expression as any;
                expect(ge.constructorName.type.type.toString(),'A');
            }
        } )());
    }

    test_modeLocal_withContext_bad_methodBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(() =>  {
                this._resolveTypeModeLocal('class C<T1> {\n  A m<T2>() {\n    T1 v1;\n    T2 v2;\n  }\n}\n',(u : any) =>  {
                    let c = op(Op.INDEX,u.declarations,0) as any;
                    let m = op(Op.INDEX,c.members,0) as any;
                    let mb = m.body as any;
                    return mb;
                });
            },throwsStateError);
        } )());
    }

    test_modeLocal_withContext_bad_topLevelVariable_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(() =>  {
                this._resolveTypeModeLocal('var v = new A();\n',(u : any) =>  {
                    let tlv = op(Op.INDEX,u.declarations,0) as any;
                    return op(Op.INDEX,tlv.variables.variables,0);
                });
            },throwsStateError);
        } )());
    }

    test_modeLocal_withContext_bad_topLevelVariable_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(() =>  {
                this._resolveTypeModeLocal('var v = new A();\n',(u : any) =>  {
                    let tlv = op(Op.INDEX,u.declarations,0) as any;
                    return op(Op.INDEX,tlv.variables.variables,0).initializer;
                });
            },throwsStateError);
        } )());
    }

    test_modeLocal_withContext_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let c : any;
            this._resolveTypeModeLocal('class C<T1> {\n  A m<T2>() {\n    T1 v1;\n    T2 v2;\n  }\n}\n',(u : any) =>  {
                c = op(Op.INDEX,u.declarations,0) as any;
                return c;
            });
            let m = op(Op.INDEX,c.members,0) as any;
            expect(m.returnType.type,isNull);
            let mb = m.body as any;
            let ms = mb.block.statements;
            {
                let vd = op(Op.INDEX,ms,0) as any;
                expect(vd.variables.type.type.toString(),'T1');
            }
            {
                let vd = op(Op.INDEX,ms,1) as any;
                expect(vd.variables.type.type.toString(),'T2');
            }
        } )());
    }

    test_modeLocal_withContext_inClass_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let cc : any;
            this._resolveTypeModeLocal('class C<T> {\n  C() {\n    T v1;\n  }\n}\n',(u : any) =>  {
                let c = op(Op.INDEX,u.declarations,0) as any;
                cc = op(Op.INDEX,c.members,0) as any;
                return cc;
            });
            let ccb = cc.body as any;
            let ccs = ccb.block.statements;
            {
                let vd = op(Op.INDEX,ccs,0) as any;
                expect(vd.variables.type.type.toString(),'T');
            }
        } )());
    }

    test_modeLocal_withContext_inClass_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let m : any;
            this._resolveTypeModeLocal('class C<T1> {\n  A m<T2>() {\n    T1 v1;\n    T2 v2;\n  }\n}\n',(u : any) =>  {
                let c = op(Op.INDEX,u.declarations,0) as any;
                m = op(Op.INDEX,c.members,0) as any;
                return m;
            });
            expect(m.returnType.type,isNull);
            let mb = m.body as any;
            let ms = mb.block.statements;
            {
                let vd = op(Op.INDEX,ms,0) as any;
                expect(vd.variables.type.type.toString(),'T1');
            }
            {
                let vd = op(Op.INDEX,ms,1) as any;
                expect(vd.variables.type.type.toString(),'T2');
            }
        } )());
    }

    test_modeLocal_withContext_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let f : any;
            this._resolveTypeModeLocal('A m<T>() {\n  T v;\n}\n',(u : any) =>  {
                f = op(Op.INDEX,u.declarations,0) as any;
                return f;
            });
            expect(f.returnType.type,isNull);
            let fb = f.functionExpression.body as any;
            let fs = fb.block.statements;
            let vd = op(Op.INDEX,fs,0) as any;
            expect(vd.variables.type.type.toString(),'T');
        } )());
    }

    test_modeLocal_withContext_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let v : any;
            this._resolveTypeModeLocal('A v = new A();\n',(u : any) =>  {
                v = op(Op.INDEX,u.declarations,0) as any;
                return v;
            });
            expect(v.variables.type.type,isNull);
            let vi = op(Op.INDEX,v.variables.variables,0).initializer as any;
            expect(vi.constructorName.type.type.toString(),'A');
        } )());
    }

    test_visitCatchClause_exception() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let clause : any = AstTestFactory.catchClause("e");
            let exceptionParameter : any = clause.exceptionParameter;
            exceptionParameter.staticElement = new bare.createInstance(any,null,exceptionParameter);
            this._resolveCatchClause(clause,this._typeProvider.dynamicType,null);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitCatchClause_exception_stackTrace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let clause : any = AstTestFactory.catchClause2("e","s");
            let exceptionParameter : any = clause.exceptionParameter;
            exceptionParameter.staticElement = new bare.createInstance(any,null,exceptionParameter);
            let stackTraceParameter : any = clause.stackTraceParameter;
            stackTraceParameter.staticElement = new bare.createInstance(any,null,stackTraceParameter);
            this._resolveCatchClause(clause,this._typeProvider.dynamicType,this._typeProvider.stackTraceType);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitCatchClause_on_exception() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let exceptionElement : any = ElementFactory.classElement2("E");
            let exceptionType : any = AstTestFactory.typeName(exceptionElement);
            let clause : any = AstTestFactory.catchClause4(exceptionType,"e");
            let exceptionParameter : any = clause.exceptionParameter;
            exceptionParameter.staticElement = new bare.createInstance(any,null,exceptionParameter);
            this._resolveCatchClause(clause,exceptionElement.type,null,new core.DartList.literal(exceptionElement));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitCatchClause_on_exception_stackTrace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let exceptionElement : any = ElementFactory.classElement2("E");
            let exceptionType : any = AstTestFactory.typeName(exceptionElement);
            (exceptionType.name as any).staticElement = exceptionElement;
            let clause : any = AstTestFactory.catchClause5(exceptionType,"e","s");
            let exceptionParameter : any = clause.exceptionParameter;
            exceptionParameter.staticElement = new bare.createInstance(any,null,exceptionParameter);
            let stackTraceParameter : any = clause.stackTraceParameter;
            stackTraceParameter.staticElement = new bare.createInstance(any,null,stackTraceParameter);
            this._resolveCatchClause(clause,exceptionElement.type,this._typeProvider.stackTraceType,new core.DartList.literal(exceptionElement));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitClassDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementA : any = ElementFactory.classElement2("A");
            let elementB : any = ElementFactory.classElement2("B");
            let elementC : any = ElementFactory.classElement2("C");
            let elementD : any = ElementFactory.classElement2("D");
            let extendsClause : any = AstTestFactory.extendsClause(AstTestFactory.typeName(elementB));
            let withClause : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName(elementC)));
            let implementsClause : any = AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName(elementD)));
            let declaration : any = AstTestFactory.classDeclaration(null,"A",null,extendsClause,withClause,implementsClause);
            declaration.name.staticElement = elementA;
            this._resolveNode(declaration,new core.DartList.literal(elementA,elementB,elementC,elementD));
            expect(elementA.supertype,same(elementB.type));
            let mixins : core.DartList<any> = elementA.mixins;
            expect(mixins,hasLength(1));
            expect(mixins[0],same(elementC.type));
            let interfaces : core.DartList<any> = elementA.interfaces;
            expect(interfaces,hasLength(1));
            expect(interfaces[0],same(elementD.type));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitClassDeclaration_instanceMemberCollidesWithClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementA : any = ElementFactory.classElement2("A");
            let elementB : any = ElementFactory.classElement2("B");
            elementB.methods = new core.DartList.literal<any>(ElementFactory.methodElement("A",VoidTypeImpl.instance));
            let extendsClause : any = AstTestFactory.extendsClause(AstTestFactory.typeName(elementA));
            let declaration : any = AstTestFactory.classDeclaration(null,"B",null,extendsClause,null,null);
            declaration.name.staticElement = elementB;
            this._resolveNode(declaration,new core.DartList.literal(elementA,elementB));
            expect(elementB.supertype,same(elementA.type));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitClassTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementA : any = ElementFactory.classElement2("A");
            let elementB : any = ElementFactory.classElement2("B");
            let elementC : any = ElementFactory.classElement2("C");
            let elementD : any = ElementFactory.classElement2("D");
            let withClause : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName(elementC)));
            let implementsClause : any = AstTestFactory.implementsClause(new core.DartList.literal(AstTestFactory.typeName(elementD)));
            let alias : any = AstTestFactory.classTypeAlias("A",null,null,AstTestFactory.typeName(elementB),withClause,implementsClause);
            alias.name.staticElement = elementA;
            this._resolveNode(alias,new core.DartList.literal(elementA,elementB,elementC,elementD));
            expect(elementA.supertype,same(elementB.type));
            let mixins : core.DartList<any> = elementA.mixins;
            expect(mixins,hasLength(1));
            expect(mixins[0],same(elementC.type));
            let interfaces : core.DartList<any> = elementA.interfaces;
            expect(interfaces,hasLength(1));
            expect(interfaces[0],same(elementD.type));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitClassTypeAlias_constructorWithOptionalParams_ignored() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classT : any = ElementFactory.classElement2('T',new core.DartList.literal());
            let classB : any = ElementFactory.classElement2('B',new core.DartList.literal());
            let constructorBc1 : any = ElementFactory.constructorElement2(classB,'c1',new core.DartList.literal());
            let constructorBc2 : any = ElementFactory.constructorElement2(classB,'c2',new core.DartList.literal(classT.type));
            (op(Op.INDEX,constructorBc2.parameters,0) as any).parameterKind = ParameterKind.POSITIONAL;
            let constructorBc3 : any = ElementFactory.constructorElement2(classB,'c3',new core.DartList.literal(classT.type));
            (op(Op.INDEX,constructorBc3.parameters,0) as any).parameterKind = ParameterKind.NAMED;
            classB.constructors = new core.DartList.literal(constructorBc1,constructorBc2,constructorBc3);
            let classM : any = ElementFactory.classElement2('M',new core.DartList.literal());
            let withClause : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName(classM,new core.DartList.literal())));
            let classC : any = ElementFactory.classTypeAlias2('C',new core.DartList.literal());
            let alias : any = AstTestFactory.classTypeAlias('C',null,null,AstTestFactory.typeName(classB,new core.DartList.literal()),withClause,null);
            alias.name.staticElement = classC;
            this._resolveNode(alias,new core.DartList.literal(classT,classB,classM,classC));
            expect(classC.constructors,hasLength(1));
            let constructor : any = op(Op.INDEX,classC.constructors,0);
            expect(constructor.isFactory,isFalse);
            expect(constructor.isSynthetic,isTrue);
            expect(constructor.name,'c1');
            expect(constructor.functions,hasLength(0));
            expect(constructor.labels,hasLength(0));
            expect(constructor.localVariables,hasLength(0));
            expect(constructor.parameters,isEmpty);
        } )());
    }

    test_visitClassTypeAlias_constructorWithParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classT : any = ElementFactory.classElement2('T',new core.DartList.literal());
            let classB : any = ElementFactory.classElement2('B',new core.DartList.literal());
            let constructorB : any = ElementFactory.constructorElement2(classB,'',new core.DartList.literal(classT.type));
            classB.constructors = new core.DartList.literal(constructorB);
            let classM : any = ElementFactory.classElement2('M',new core.DartList.literal());
            let withClause : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName(classM,new core.DartList.literal())));
            let classC : any = ElementFactory.classTypeAlias2('C',new core.DartList.literal());
            let alias : any = AstTestFactory.classTypeAlias('C',null,null,AstTestFactory.typeName(classB,new core.DartList.literal()),withClause,null);
            alias.name.staticElement = classC;
            this._resolveNode(alias,new core.DartList.literal(classT,classB,classM,classC));
            expect(classC.constructors,hasLength(1));
            let constructor : any = op(Op.INDEX,classC.constructors,0);
            expect(constructor.isFactory,isFalse);
            expect(constructor.isSynthetic,isTrue);
            expect(constructor.name,'');
            expect(constructor.functions,hasLength(0));
            expect(constructor.labels,hasLength(0));
            expect(constructor.localVariables,hasLength(0));
            expect(constructor.parameters,hasLength(1));
            expect(op(Op.INDEX,constructor.parameters,0).type,equals(classT.type));
            expect(op(Op.INDEX,constructor.parameters,0).name,equals(op(Op.INDEX,constructorB.parameters,0).name));
        } )());
    }

    test_visitClassTypeAlias_defaultConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classB : any = ElementFactory.classElement2('B',new core.DartList.literal());
            let constructorB : any = ElementFactory.constructorElement2(classB,'',new core.DartList.literal());
            constructorB.setModifier(Modifier.SYNTHETIC,true);
            classB.constructors = new core.DartList.literal(constructorB);
            let classM : any = ElementFactory.classElement2('M',new core.DartList.literal());
            let withClause : any = AstTestFactory.withClause(new core.DartList.literal(AstTestFactory.typeName(classM,new core.DartList.literal())));
            let classC : any = ElementFactory.classTypeAlias2('C',new core.DartList.literal());
            let alias : any = AstTestFactory.classTypeAlias('C',null,null,AstTestFactory.typeName(classB,new core.DartList.literal()),withClause,null);
            alias.name.staticElement = classC;
            this._resolveNode(alias,new core.DartList.literal(classB,classM,classC));
            expect(classC.constructors,hasLength(1));
            let constructor : any = op(Op.INDEX,classC.constructors,0);
            expect(constructor.isFactory,isFalse);
            expect(constructor.isSynthetic,isTrue);
            expect(constructor.name,'');
            expect(constructor.functions,hasLength(0));
            expect(constructor.labels,hasLength(0));
            expect(constructor.localVariables,hasLength(0));
            expect(constructor.parameters,isEmpty);
        } )());
    }

    test_visitFieldFormalParameter_functionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let intType : any = this._typeProvider.intType;
            let intTypeName : any = AstTestFactory.typeName4("int");
            let innerParameterName : string = "a";
            let parameter : any = AstTestFactory.simpleFormalParameter3(innerParameterName);
            parameter.element = parameter.identifier.staticElement = ElementFactory.requiredParameter(innerParameterName);
            let outerParameterName : string = "p";
            let node : any = AstTestFactory.fieldFormalParameter(null,intTypeName,outerParameterName,AstTestFactory.formalParameterList(new core.DartList.literal(parameter)));
            node.identifier.staticElement = ElementFactory.requiredParameter(outerParameterName);
            let parameterType : any = this._resolveFormalParameter(node,new core.DartList.literal(intType.element));
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },FunctionType,parameterType);
            let functionType : any = parameterType as any;
            expect(functionType.returnType,same(intType));
            expect(functionType.parameters,hasLength(1));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitFieldFormalParameter_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let parameterName : string = "p";
            let node : any = AstTestFactory.fieldFormalParameter(Keyword.VAR,null,parameterName);
            node.identifier.staticElement = ElementFactory.requiredParameter(parameterName);
            expect(this._resolveFormalParameter(node),same(this._typeProvider.dynamicType));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitFieldFormalParameter_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let intType : any = this._typeProvider.intType;
            let intTypeName : any = AstTestFactory.typeName4("int");
            let parameterName : string = "p";
            let node : any = AstTestFactory.fieldFormalParameter(null,intTypeName,parameterName);
            node.identifier.staticElement = ElementFactory.requiredParameter(parameterName);
            expect(this._resolveFormalParameter(node,new core.DartList.literal(intType.element)),same(intType));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitFunctionDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementR : any = ElementFactory.classElement2('R');
            let elementP : any = ElementFactory.classElement2('P');
            let elementF : any = ElementFactory.functionElement('f');
            let declaration : any = AstTestFactory.functionDeclaration(AstTestFactory.typeName4('R'),null,'f',AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('P'),'p'))),null));
            declaration.name.staticElement = elementF;
            this._resolveNode(declaration,new core.DartList.literal(elementR,elementP));
            expect(declaration.returnType.type,elementR.type);
            let parameter : any = op(Op.INDEX,declaration.functionExpression.parameters.parameters,0);
            expect(parameter.type.type,elementP.type);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitFunctionDeclaration_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementE : any = ElementFactory.typeParameterElement('E');
            let elementF : any = ElementFactory.functionElement('f');
            elementF.typeParameters = new core.DartList.literal<any>(elementE);
            let declaration : any = AstTestFactory.functionDeclaration(AstTestFactory.typeName4('E'),null,'f',AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('E'),'e'))),null));
            declaration.name.staticElement = elementF;
            this._resolveNode(declaration,new core.DartList.literal());
            expect(declaration.returnType.type,elementE.type);
            let parameter : any = op(Op.INDEX,declaration.functionExpression.parameters.parameters,0);
            expect(parameter.type.type,elementE.type);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitFunctionTypedFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementR : any = ElementFactory.classElement2('R');
            let elementP : any = ElementFactory.classElement2('P');
            let elementF : any = ElementFactory.functionElement('f');
            let requiredParameter : any = ElementFactory.requiredParameter('p');
            let parameterDeclaration : any = AstTestFactory.functionTypedFormalParameter(AstTestFactory.typeName4('R'),'g',new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('P'),'p')));
            parameterDeclaration.identifier.staticElement = requiredParameter;
            let declaration : any = AstTestFactory.functionDeclaration(AstTestFactory.typeName4('R'),null,'f',AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(new core.DartList.literal(parameterDeclaration)),null));
            declaration.name.staticElement = elementF;
            this._resolveNode(declaration,new core.DartList.literal(elementR,elementP));
            expect(declaration.returnType.type,elementR.type);
            let parameter : any = op(Op.INDEX,declaration.functionExpression.parameters.parameters,0);
            expect(parameter.returnType.type,elementR.type);
            let innerParameter : any = op(Op.INDEX,parameter.parameters.parameters,0);
            expect(innerParameter.type.type,elementP.type);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitFunctionTypedFormalParameter_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementR : any = ElementFactory.classElement2('R');
            let elementE : any = ElementFactory.typeParameterElement('E');
            let elementF : any = ElementFactory.functionElement('f');
            let requiredParameter : any = ElementFactory.requiredParameter('g');
            requiredParameter.typeParameters = new core.DartList.literal<any>(elementE);
            let parameterDeclaration : any = AstTestFactory.functionTypedFormalParameter(AstTestFactory.typeName4('R'),'g',new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('E'),'e')));
            parameterDeclaration.identifier.staticElement = requiredParameter;
            let declaration : any = AstTestFactory.functionDeclaration(AstTestFactory.typeName4('R'),null,'f',AstTestFactory.functionExpression2(AstTestFactory.formalParameterList(new core.DartList.literal(parameterDeclaration)),null));
            declaration.name.staticElement = elementF;
            this._resolveNode(declaration,new core.DartList.literal(elementR));
            expect(declaration.returnType.type,elementR.type);
            let parameter : any = op(Op.INDEX,declaration.functionExpression.parameters.parameters,0);
            expect(parameter.returnType.type,elementR.type);
            let innerParameter : any = op(Op.INDEX,parameter.parameters.parameters,0);
            expect(innerParameter.type.type,elementE.type);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitMethodDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementA : any = ElementFactory.classElement2('A');
            let elementR : any = ElementFactory.classElement2('R');
            let elementP : any = ElementFactory.classElement2('P');
            let elementM : any = ElementFactory.methodElement('m',null);
            elementA.methods = new core.DartList.literal<any>(elementM);
            let declaration : any = AstTestFactory.methodDeclaration(null,AstTestFactory.typeName4('R'),null,null,AstTestFactory.identifier3('m'),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('P'),'p'))));
            declaration.name.staticElement = elementM;
            this._resolveNode(declaration,new core.DartList.literal(elementA,elementR,elementP));
            expect(declaration.returnType.type,elementR.type);
            let parameter : any = op(Op.INDEX,declaration.parameters.parameters,0);
            expect(parameter.type.type,elementP.type);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitMethodDeclaration_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let elementA : any = ElementFactory.classElement2('A');
            let elementE : any = ElementFactory.typeParameterElement('E');
            let elementM : any = ElementFactory.methodElement('m',null);
            elementM.typeParameters = new core.DartList.literal<any>(elementE);
            elementA.methods = new core.DartList.literal<any>(elementM);
            let declaration : any = AstTestFactory.methodDeclaration(null,AstTestFactory.typeName4('E'),null,null,AstTestFactory.identifier3('m'),AstTestFactory.formalParameterList(new core.DartList.literal(AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName4('E'),'e'))));
            declaration.name.staticElement = elementM;
            this._resolveNode(declaration,new core.DartList.literal(elementA));
            expect(declaration.returnType.type,elementE.type);
            let parameter : any = op(Op.INDEX,declaration.parameters.parameters,0);
            expect(parameter.type.type,elementE.type);
            this._listener.assertNoErrors();
        } )());
    }

    test_visitSimpleFormalParameter_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = AstTestFactory.simpleFormalParameter3("p");
            node.element = node.identifier.staticElement = new bare.createInstance(any,null,AstTestFactory.identifier3("p"));
            expect(this._resolveFormalParameter(node),same(this._typeProvider.dynamicType));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitSimpleFormalParameter_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let intType : any = this._typeProvider.intType;
            let intElement : any = intType.element;
            let node : any = AstTestFactory.simpleFormalParameter4(AstTestFactory.typeName(intElement),"p");
            let identifier : any = node.identifier;
            let element : any = new bare.createInstance(any,null,identifier);
            node.element = identifier.staticElement = element;
            expect(this._resolveFormalParameter(node,new core.DartList.literal(intElement)),same(intType));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitTypeName_noParameters_noArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let typeName : any = AstTestFactory.typeName(classA);
            typeName.type = null;
            this._resolveNode(typeName,new core.DartList.literal(classA));
            expect(typeName.type,same(classA.type));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitTypeName_noParameters_noArguments_undefined() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : any = ((_) : any =>  {
                {
                    _.staticElement = new _StaleElement();
                    return _;
                }
            })(AstTestFactory.identifier3("unknown"));
            let typeName : any = astFactory.typeName(id,null);
            this._resolveNode(typeName,new core.DartList.literal());
            expect(typeName.type,UndefinedTypeImpl.instance);
            expect(typeName.name.staticElement,null);
            this._listener.assertErrorsWithCodes(new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
        } )());
    }

    test_visitTypeName_parameters_arguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
            let classB : any = ElementFactory.classElement2("B");
            let typeName : any = AstTestFactory.typeName(classA,new core.DartList.literal(AstTestFactory.typeName(classB)));
            typeName.type = null;
            this._resolveNode(typeName,new core.DartList.literal(classA,classB));
            let resultType : any = typeName.type as any;
            expect(resultType.element,same(classA));
            let resultArguments : core.DartList<any> = resultType.typeArguments;
            expect(resultArguments,hasLength(1));
            expect(resultArguments[0],same(classB.type));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitTypeName_parameters_noArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
            let typeName : any = AstTestFactory.typeName(classA);
            typeName.type = null;
            this._resolveNode(typeName,new core.DartList.literal(classA));
            let resultType : any = typeName.type as any;
            expect(resultType.element,same(classA));
            let resultArguments : core.DartList<any> = resultType.typeArguments;
            expect(resultArguments,hasLength(1));
            expect(resultArguments[0],same(DynamicTypeImpl.instance));
            this._listener.assertNoErrors();
        } )());
    }

    test_visitTypeName_prefixed_noParameters_noArguments_undefined() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let prefix : any = ((_) : any =>  {
                {
                    _.staticElement = new _StaleElement();
                    return _;
                }
            })(AstTestFactory.identifier3("unknownPrefix"));
            let suffix : any = ((_) : any =>  {
                {
                    _.staticElement = new _StaleElement();
                    return _;
                }
            })(AstTestFactory.identifier3("unknownSuffix"));
            let typeName : any = astFactory.typeName(AstTestFactory.identifier(prefix,suffix),null);
            this._resolveNode(typeName,new core.DartList.literal());
            expect(typeName.type,UndefinedTypeImpl.instance);
            expect(prefix.staticElement,null);
            expect(suffix.staticElement,null);
            this._listener.assertErrorsWithCodes(new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
        } )());
    }

    test_visitTypeName_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let classA : any = ElementFactory.classElement2("A");
            let typeName : any = AstTestFactory.typeName4("void");
            this._resolveNode(typeName,new core.DartList.literal(classA));
            expect(typeName.type,same(VoidTypeImpl.instance));
            this._listener.assertNoErrors();
        } )());
    }

    _resolveCatchClause(node : any,exceptionType : any,stackTraceType : any,definedElements? : core.DartList<any>) : void {
        this._resolveNode(node,definedElements);
        let exceptionParameter : any = node.exceptionParameter;
        if (exceptionParameter != null) {
            expect(exceptionParameter.staticType,same(exceptionType));
        }
        let stackTraceParameter : any = node.stackTraceParameter;
        if (stackTraceParameter != null) {
            expect(stackTraceParameter.staticType,same(stackTraceType));
        }
    }
    _resolveFormalParameter(node : any,definedElements? : core.DartList<any>) : any {
        this._resolveNode(node,definedElements);
        return (node.identifier.staticElement as any).type;
    }
    _resolveNode(node : any,definedElements? : core.DartList<any>) : void {
        if (definedElements != null) {
            for(let element of definedElements) {
                this.libraryScope.define(element);
            }
        }
        node.accept(this._visitor);
    }
    _resolveTypeModeLocal(code : string,getNodeToResolve : (unit : any) => any) : void {
        let unit : any = this.parseCompilationUnit2(code);
        let unitElement = new bare.createInstance(any,null,'/test.dart');
        {
            let holder = new bare.createInstance(any,null);
            unit.accept(new bare.createInstance(any,null,holder,unitElement));
        }
        let libraryScope : any;
        let visitor : any;
        {
            let resourceProvider : any = new bare.createInstance(any,null);
            let context : any = lib5.AnalysisContextFactory.contextWithCore({
                resourceProvider : resourceProvider});
            let source = resourceProvider.getFile('/test.dart').createSource();
            let libraryElement = ((_) : any =>  {
                {
                    _.definingCompilationUnit = unitElement;
                    return _;
                }
            })(new bare.createInstance(any,null,context,null));
            libraryScope = new bare.createInstance(any,null,libraryElement);
            visitor = new bare.createInstance(any,null,libraryElement,source,this._typeProvider,this._listener,{
                nameScope : libraryScope,mode : TypeResolverMode.local});
        }
        let A : any = ElementFactory.classElement2('A');
        libraryScope.define(A);
        let nodeToResolve : any = getNodeToResolve(unit);
        nodeToResolve.accept(visitor);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeResolverVisitorTest() {
    }
}

export namespace _RootScope {
    export type Constructors = '_RootScope';
    export type Interface = Omit<_RootScope, Constructors>;
}
@DartClass
export class _RootScope extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalLookup(identifier : any,name : string,referencingLibrary : any) : any {
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RootScope() {
    }
}

export namespace _StaleElement {
    export type Constructors = '_StaleElement';
    export type Interface = Omit<_StaleElement, Constructors>;
}
@DartClass
export class _StaleElement extends any {
    constructor() {
    }
    @defaultConstructor
    _StaleElement() {
        super.DartObject("_StaleElement",-1);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get kind() {
        return throw "_StaleElement's kind shouldn't be accessed";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(_ : any) {
        return throw "_StaleElement shouldn't be visited";
    }
}

export class properties {
}
