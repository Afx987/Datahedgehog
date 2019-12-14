/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/resolver_test_case.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";
import * as lib4 from "./analysis_context_factory";
import * as lib5 from "./../src/context/mock_sdk";

export namespace ResolutionVerifier {
    export type Constructors = 'ResolutionVerifier';
    export type Interface = Omit<ResolutionVerifier, Constructors>;
}
@DartClass
export class ResolutionVerifier extends any {
    _knownExceptions : core.DartSet<any>;

    _unresolvedNodes : core.DartList<any>;

    _wrongTypedNodes : core.DartList<any>;

    constructor(_knownExceptions? : core.DartSet<any>) {
    }
    @defaultConstructor
    ResolutionVerifier(_knownExceptions? : core.DartSet<any>) {
        this._unresolvedNodes = new core.DartList<any>();
        this._wrongTypedNodes = new core.DartList<any>();
        this._knownExceptions = _knownExceptions;
    }
    assertResolved() : void {
        if (!this._unresolvedNodes.isEmpty || !this._wrongTypedNodes.isEmpty) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            if (!this._unresolvedNodes.isEmpty) {
                buffer.write("Failed to resolve ");
                buffer.write(this._unresolvedNodes.length);
                buffer.writeln(" nodes:");
                this._printNodes(buffer,this._unresolvedNodes);
            }
            if (!this._wrongTypedNodes.isEmpty) {
                buffer.write("Resolved ");
                buffer.write(this._wrongTypedNodes.length);
                buffer.writeln(" to the wrong type of element:");
                this._printNodes(buffer,this._wrongTypedNodes);
            }
            fail(buffer.toString());
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAnnotation(node : any) : core.DartObject {
        node.visitChildren(this);
        let elementAnnotation : any = node.elementAnnotation;
        if (op(Op.EQUALS,elementAnnotation,null)) {
            if (op(Op.EQUALS,this._knownExceptions,null) || !this._knownExceptions.contains(node)) {
                this._unresolvedNodes.add(node);
            }
        }else if (isNot(elementAnnotation, any)) {
            this._wrongTypedNodes.add(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        node.visitChildren(this);
        if (!node.operator.isUserDefinableOperator) {
            return null;
        }
        let operandType : any = node.leftOperand.staticType;
        if (op(Op.EQUALS,operandType,null) || operandType.isDynamic) {
            return null;
        }
        return this._checkResolved(node,node.staticElement,(node : any) =>  {
            return is(node, any);
        });
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
    visitCompilationUnit(node : any) : core.DartObject {
        node.visitChildren(this);
        return this._checkResolved(node,node.element,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportDirective(node : any) : core.DartObject {
        return this._checkResolved(node,node.element,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionDeclaration(node : any) : core.DartObject {
        node.visitChildren(this);
        if (is(node.element, any)) {
            this._wrongTypedNodes.add(node);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        node.visitChildren(this);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportDirective(node : any) : core.DartObject {
        this._checkResolved(node,node.element,(node : any) =>  {
            return is(node, any);
        });
        let prefix : any = node.prefix;
        if (op(Op.EQUALS,prefix,null)) {
            return null;
        }
        return this._checkResolved(prefix,prefix.staticElement,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : core.DartObject {
        node.visitChildren(this);
        let targetType : any = node.realTarget.staticType;
        if (op(Op.EQUALS,targetType,null) || targetType.isDynamic) {
            return null;
        }
        return this._checkResolved(node,node.staticElement,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryDirective(node : any) : core.DartObject {
        return this._checkResolved(node,node.element,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNamedExpression(node : any) : core.DartObject {
        return node.expression.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartDirective(node : any) : core.DartObject {
        return this._checkResolved(node,node.element,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPartOfDirective(node : any) : core.DartObject {
        return this._checkResolved(node,node.element,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : core.DartObject {
        node.visitChildren(this);
        if (!node.operator.isUserDefinableOperator) {
            return null;
        }
        let operandType : any = node.operand.staticType;
        if (op(Op.EQUALS,operandType,null) || operandType.isDynamic) {
            return null;
        }
        return this._checkResolved(node,node.staticElement,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixedIdentifier(node : any) : core.DartObject {
        let prefix : any = node.prefix;
        prefix.accept(this);
        let prefixType : any = prefix.staticType;
        if (op(Op.EQUALS,prefixType,null) || prefixType.isDynamic) {
            return null;
        }
        return this._checkResolved(node,node.staticElement,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        node.visitChildren(this);
        if (!node.operator.isUserDefinableOperator) {
            return null;
        }
        let operandType : any = node.operand.staticType;
        if (op(Op.EQUALS,operandType,null) || operandType.isDynamic) {
            return null;
        }
        return this._checkResolved(node,node.staticElement,(node : any) =>  {
            return is(node, any);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccess(node : any) : core.DartObject {
        let target : any = node.realTarget;
        target.accept(this);
        let targetType : any = target.staticType;
        if (op(Op.EQUALS,targetType,null) || targetType.isDynamic) {
            return null;
        }
        return node.propertyName.accept(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        if (op(Op.EQUALS,node.name,"void")) {
            return null;
        }
        if (resolutionMap.staticTypeForExpression(node) != null && resolutionMap.staticTypeForExpression(node).isDynamic && op(Op.EQUALS,node.staticElement,null)) {
            return null;
        }
        let parent : any = node.parent;
        if (is(parent, any)) {
            let invocation : any = parent;
            if (core.identical(invocation.methodName,node)) {
                let target : any = invocation.realTarget;
                let targetType : any = op(Op.EQUALS,target,null) ? null : target.staticType;
                if (op(Op.EQUALS,targetType,null) || targetType.isDynamic) {
                    return null;
                }
            }
        }
        return this._checkResolved(node,node.staticElement,null);
    }
    _checkResolved(node : any,element : any,predicate : any) : core.DartObject {
        if (op(Op.EQUALS,element,null)) {
            if (op(Op.EQUALS,this._knownExceptions,null) || !this._knownExceptions.contains(node)) {
                this._unresolvedNodes.add(node);
            }
        }else if (predicate != null) {
            if (!predicate(element)) {
                this._wrongTypedNodes.add(node);
            }
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
    _printNodes(buffer : core.DartStringBuffer,nodes : core.DartList<any>) : void {
        for(let identifier of nodes) {
            buffer.write("  ");
            buffer.write(identifier.toString());
            buffer.write(" (");
            buffer.write(this._getFileName(identifier));
            buffer.write(" : ");
            buffer.write(identifier.offset);
            buffer.writeln(")");
        }
    }
}

export namespace ResolverTestCase {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ResolverTestCase';
    export type Interface = Omit<ResolverTestCase, Constructors>;
}
@DartClass
export class ResolverTestCase extends lib3.EngineTestCase {
    resourceProvider : any;

    analysisContext2 : any;

    enableUnusedElement : boolean;

    enableUnusedLocalVariable : boolean;

    analysisResults : core.DartMap<any,TestAnalysisResult>;

    _logBuffer : core.DartStringBuffer;

    fileContentOverlay : any;

    driver : any;

    get analysisContext() : any {
        return this.analysisContext2;
    }
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    get typeProvider() : any {
        if (this.enableNewAnalysisDriver) {
            if (this.analysisResults.isEmpty) {
                fail('typeProvider can be called after computing an analysis result.');
            }
            return this.analysisResults.values.first.unit.element.context.typeProvider;
        }else {
            return this.analysisContext2.typeProvider;
        }
    }
    get typeSystem() : any {
        return this.analysisContext2.typeSystem;
    }
    addNamedSource(filePath : string,contents : string) : any {
        filePath = this.resourceProvider.convertPath(filePath);
        let file : any = this.resourceProvider.newFile(filePath,contents);
        let source : any = file.createSource();
        if (this.enableNewAnalysisDriver) {
            this.driver.addFile(filePath);
        }else {
            this.analysisContext2.setContents(source,contents);
            let changeSet : any = new bare.createInstance(any,null);
            changeSet.addedSource(source);
            this.analysisContext2.applyChanges(changeSet);
        }
        return source;
    }
    addSource(contents : string) : any {
        return this.addNamedSource("/test.dart",contents);
    }
    assertErrors(source : any,expectedErrorCodes? : core.DartList<any>) : void {
        expectedErrorCodes = expectedErrorCodes || new core.DartList.literal<any>();
        let result : TestAnalysisResult = this.analysisResults.get(source);
        expect(result,isNotNull);
        let errorListener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
        for(let error of result.errors) {
            expect(error.source,source);
            let errorCode : any = error.errorCode;
            if (!this.enableUnusedElement && (op(Op.EQUALS,errorCode,HintCode.UNUSED_ELEMENT) || op(Op.EQUALS,errorCode,HintCode.UNUSED_FIELD))) {
                continue;
            }
            if (!this.enableUnusedLocalVariable && (op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_CLAUSE) || op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_STACK) || op(Op.EQUALS,errorCode,HintCode.UNUSED_LOCAL_VARIABLE))) {
                continue;
            }
            errorListener.onError(error);
        }
        errorListener.assertErrorsWithCodes(expectedErrorCodes);
    }
    assertErrorsInCode(code : string,errors : core.DartList<any>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(code);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,errors);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    assertErrorsInUnverifiedCode(code : string,errors : core.DartList<any>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(code);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,errors);
        } )());
    }

    assertNoErrors(source : any) : void {
        this.assertErrors(source);
    }
    assertNoErrorsInCode(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(code);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    assertPropagatedAssignedType(code : string,unit : any,expectedStaticType : any,expectedPropagatedType : any) : void {
        let identifier : any = this.findMarkedIdentifier(code,unit,"v = ");
        expect(identifier.staticType,expectedStaticType);
        expect(identifier.propagatedType,expectedPropagatedType);
    }
    assertPropagatedIterationType(code : string,unit : any,expectedStaticType : any,expectedPropagatedType : any) : void {
        let identifier : any = this.findMarkedIdentifier(code,unit,"v in ");
        expect(identifier.staticType,expectedStaticType);
        expect(identifier.propagatedType,expectedPropagatedType);
    }
    assertTypeOfMarkedExpression(code : string,unit : any,expectedStaticType : any,expectedPropagatedType : any) : void {
        let identifier : any = this.findMarkedIdentifier(code,unit,"; // marker");
        if (expectedStaticType != null) {
            expect(identifier.staticType,expectedStaticType);
        }
        expect(identifier.propagatedType,expectedPropagatedType);
    }
    changeSource(source : any,contents : string) : void {
        this.analysisContext2.setContents(source,contents);
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.changedSource(source);
        this.analysisContext2.applyChanges(changeSet);
    }
    computeAnalysisResult(source : any) : async.Future<TestAnalysisResult> { 
        return new async.Future.fromPromise(( async () =>  {
            let analysisResult : TestAnalysisResult;
            if (this.enableNewAnalysisDriver) {
                let result : any = await this.driver.getResult(source.fullName);
                analysisResult = new TestAnalysisResult(source,result.unit,result.errors);
            }else {
                this.analysisContext2.computeKindOf(source);
                let libraries : core.DartList<any> = this.analysisContext2.getLibrariesContaining(source);
                if (libraries.length > 0) {
                    let unit : any = this.analysisContext.resolveCompilationUnit2(source,libraries.first);
                    let errors : core.DartList<any> = this.analysisContext.computeErrors(source);
                    analysisResult = new TestAnalysisResult(source,unit,errors);
                }
            }
            this.analysisResults.set(source,analysisResult);
            return analysisResult;
        } )());
    }

    computeTestAnalysisResult(code : string) : async.Future<TestAnalysisResult> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(code);
            return await this.computeAnalysisResult(source);
        } )());
    }

    createDefaultTestLibrary() : any {
        return this.createTestLibrary(lib4.AnalysisContextFactory.contextWithCore(),"test");
    }
    createNamedSource(fileName : string) : any {
        let source : any = this.resourceProvider.getFile(fileName).createSource();
        this.analysisContext2.setContents(source,'');
        return source;
    }
    createTestLibrary(context : any,libraryName : string,typeNames? : core.DartList<string>) : any {
        let fileName : string = `/test/${libraryName}.dart`;
        let definingCompilationUnitSource : any = this.createNamedSource(fileName);
        let sourcedCompilationUnits : core.DartList<any>;
        if (typeNames == null) {
            sourcedCompilationUnits = CompilationUnitElement.EMPTY_LIST;
        }else {
            let count : number = typeNames.length;
            sourcedCompilationUnits = new core.DartList<any>(count);
            for(let i : number = 0; i < count; i++){
                let typeName : string = typeNames[i];
                let type : any = new bare.createInstance(any,null,AstTestFactory.identifier3(typeName));
                let fileName : string = `${typeName}.dart`;
                let compilationUnit : any = new bare.createInstance(any,null,fileName);
                compilationUnit.source = this.createNamedSource(fileName);
                compilationUnit.librarySource = definingCompilationUnitSource;
                compilationUnit.types = new core.DartList.literal<any>(type);
                sourcedCompilationUnits[i] = compilationUnit;
            }
        }
        let compilationUnit : any = new bare.createInstance(any,null,fileName);
        compilationUnit.librarySource = compilationUnit.source = definingCompilationUnitSource;
        let library : any = new bare.createInstance(any,null,context,AstTestFactory.libraryIdentifier2(new core.DartList.literal(libraryName)));
        library.definingCompilationUnit = compilationUnit;
        library.parts = sourcedCompilationUnits;
        return library;
    }
    findMarkedIdentifier(code : string,unit : any,marker : string) : any {
        return lib3.EngineTestCase.findNode(unit,code,marker,(node : any) =>  {
            return is(node, any);
        });
    }
    findTopLevelConstantExpression(compilationUnit : any,name : string) : any {
        return this.findTopLevelDeclaration(compilationUnit,name).initializer;
    }
    findTopLevelDeclaration(compilationUnit : any,name : string) : any {
        for(let member of compilationUnit.declarations) {
            if (is(member, any)) {
                for(let variable of member.variables.variables) {
                    if (op(Op.EQUALS,variable.name.name,name)) {
                        return variable;
                    }
                }
            }
        }
        return null;
    }
    reset() : void {
        this.resetWith();
    }
    resetWith(_namedArguments? : {options? : any,packages? : core.DartList<core.DartList<string>>}) : void {
        let {options,packages} = Object.assign({
        }, _namedArguments );
        if (options != null && packages != null) {
            fail('Only packages or options can be specified.');
        }
        if (this.enableNewAnalysisDriver) {
            options = ( options ) || ( new bare.createInstance(any,null) );
            let sdk : any = ((_) : lib5.MockSdk =>  {
                {
                    _.context.analysisOptions = options;
                    return _;
                }
            })(new lib5.MockSdk({
                resourceProvider : this.resourceProvider}));
            let resolvers : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,sdk),new bare.createInstance(any,null,this.resourceProvider));
            if (packages != null) {
                let packageMap = new core.DartMap.literal([
                ]);
                packages.forEach((args : any) =>  {
                    let name : string = args[0];
                    let path : string = this.resourceProvider.convertPath(`/packages/${name}/${name}.dart`);
                    let content : string = args[1];
                    let file : any = this.resourceProvider.newFile(path,content);
                    packageMap.set(name,new core.DartList.literal<any>(file.parent));
                });
                resolvers.add(new bare.createInstance(any,null,this.resourceProvider,packageMap));
            }
            let sourceFactory : any = new bare.createInstance(any,null,resolvers);
            let log : any = new bare.createInstance(any,null,this._logBuffer);
            let scheduler : any = new bare.createInstance(any,null,log);
            this.driver = new bare.createInstance(any,null,scheduler,log,this.resourceProvider,new bare.createInstance(any,null),this.fileContentOverlay,null,sourceFactory,options);
            scheduler.start();
        }else {
            if (packages != null) {
                let packageMap = new core.DartMap.literal([
                ]);
                packages.forEach((args : any) =>  {
                    let name : string = args[0];
                    let content : string = args[1];
                    packageMap.set(`package:${name}/${name}.dart`,content);
                });
                this.analysisContext2 = lib4.AnalysisContextFactory.contextWithCoreAndPackages(packageMap,{
                    resourceProvider : this.resourceProvider});
            }else if (options != null) {
                this.analysisContext2 = lib4.AnalysisContextFactory.contextWithCoreAndOptions(options,{
                    resourceProvider : this.resourceProvider});
            }else {
                this.analysisContext2 = lib4.AnalysisContextFactory.contextWithCore({
                    resourceProvider : this.resourceProvider});
            }
        }
    }
    resolve2(librarySource : any) : any {
        return this.analysisContext2.computeLibraryElement(librarySource);
    }
    resolveCompilationUnit(source : any,library : any) : any {
        return this.analysisContext2.resolveCompilationUnit(source,library);
    }
    resolveSource(sourceText : string) : async.Future<any> {
        return this.resolveSource2('/test.dart',sourceText);
    }
    resolveSource2(fileName : string,sourceText : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource(fileName,sourceText);
            let analysisResult : TestAnalysisResult = await this.computeAnalysisResult(source);
            return analysisResult.unit;
        } )());
    }

    resolveSources(sourceTexts : core.DartList<string>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            for(let i : number = 0; i < sourceTexts.length; i++){
                let source : any = this.addNamedSource(`/lib${i + 1}.dart`,sourceTexts[i]);
                await this.computeAnalysisResult(source);
                if (i + 1 == sourceTexts.length) {
                    return source;
                }
            }
            return null;
        } )());
    }

    resolveWithAndWithoutExperimental(strSources : core.DartList<string>,codesWithoutExperimental : core.DartList<any>,codesWithExperimental : core.DartList<any>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            this.resetWith({
                options : options});
            let source : any = await this.resolveSources(strSources);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,codesWithoutExperimental);
            this.verify(new core.DartList.literal(source));
            this.reset();
            source = await this.resolveSources(strSources);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,codesWithExperimental);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    resolveWithErrors(strSources : core.DartList<string>,codes : core.DartList<any>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = await this.resolveSources(strSources);
            this.assertErrors(source,codes);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        ElementFactory.flushStaticState();
        super.setUp();
        this.reset();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tearDown() : void {
        this.analysisContext2 = null;
        AnalysisEngine.instance.clearCaches();
        super.tearDown();
    }
    verify(sources : core.DartList<any>) : void {
        let verifier : ResolutionVerifier = new ResolutionVerifier();
        for(let source of sources) {
            let result : TestAnalysisResult = this.analysisResults.get(source);
            expect(result,isNotNull);
            result.unit.accept(verifier);
        }
        verifier.assertResolved();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolverTestCase() {
        this.resourceProvider = new bare.createInstance(any,null);
        this.enableUnusedElement = false;
        this.enableUnusedLocalVariable = false;
        this.analysisResults = new core.DartMap.literal([
        ]);
        this._logBuffer = new core.DartStringBuffer();
        this.fileContentOverlay = new bare.createInstance(any,null);
    }
}

export namespace TestAnalysisResult {
    export type Constructors = 'TestAnalysisResult';
    export type Interface = Omit<TestAnalysisResult, Constructors>;
}
@DartClass
export class TestAnalysisResult {
    source : any;

    unit : any;

    errors : core.DartList<any>;

    constructor(source : any,unit : any,errors : core.DartList<any>) {
    }
    @defaultConstructor
    TestAnalysisResult(source : any,unit : any,errors : core.DartList<any>) {
        this.source = source;
        this.unit = unit;
        this.errors = errors;
    }
}

export namespace StaticTypeAnalyzer2TestShared {
    export type Constructors = ResolverTestCase.Constructors | 'StaticTypeAnalyzer2TestShared';
    export type Interface = Omit<StaticTypeAnalyzer2TestShared, Constructors>;
}
@DartClass
export class StaticTypeAnalyzer2TestShared extends ResolverTestCase {
    testCode : string;

    testSource : any;

    testUnit : any;

    expectFunctionType(name : string,type : string,_namedArguments? : {elementTypeParams? : string,typeParams? : string,typeArgs? : string,typeFormals? : string,identifierType? : string}) : any {
        let {elementTypeParams,typeParams,typeArgs,typeFormals,identifierType} = Object.assign({
            "elementTypeParams" : '[]',
            "typeParams" : '[]',
            "typeArgs" : '[]',
            "typeFormals" : '[]'}, _namedArguments );
        identifierType = ( identifierType ) || ( type );
        var typeParameters : (element : any) => any = (element : any) =>  {
            if (is(element, any)) {
                return element.typeParameters;
            }else if (is(element, any)) {
                return element.typeParameters;
            }
            fail(`Wrong element type: ${element.runtimeType}`);
        };
        let identifier : any = this.findIdentifier(name);
        let element = identifier.staticElement;
        let functionType : any = (element as any).type;
        expect(functionType.toString(),type);
        expect(identifier.staticType.toString(),identifierType);
        expect(typeParameters(element).toString(),elementTypeParams);
        expect(functionType.typeParameters.toString(),typeParams);
        expect(functionType.typeArguments.toString(),typeArgs);
        expect(functionType.typeFormals.toString(),typeFormals);
        return functionType;
    }
    expectIdentifierType(name : string,type : any,propagatedType? : any) : void {
        let identifier : any = this.findIdentifier(name);
        this._expectType(identifier.staticType,type);
        if (propagatedType != null) {
            this._expectType(identifier.propagatedType,propagatedType);
        }
    }
    expectInitializerType(name : string,type : any,propagatedType? : any) : void {
        let identifier : any = this.findIdentifier(name);
        let declaration : any = identifier.getAncestor((node : any) =>  {
            return is(node, any);
        });
        let initializer : any = declaration.initializer;
        this._expectType(initializer.staticType,type);
        if (propagatedType != null) {
            this._expectType(initializer.propagatedType,propagatedType);
        }
    }
    findIdentifier(search : string) : any {
        let identifier : any = lib3.EngineTestCase.findNode(this.testUnit,this.testCode,search,(node : any) =>  {
            return is(node, any);
        });
        return identifier;
    }
    resolveTestUnit(code : string,_namedArguments? : {noErrors? : boolean}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {noErrors} = Object.assign({
                "noErrors" : true}, _namedArguments );
            this.testCode = code;
            this.testSource = this.addSource(this.testCode);
            let analysisResult : TestAnalysisResult = await this.computeAnalysisResult(this.testSource);
            if (noErrors) {
                this.assertNoErrors(this.testSource);
            }
            this.verify(new core.DartList.literal(this.testSource));
            this.testUnit = analysisResult.unit;
        } )());
    }

    _expectType(type : any,expected : any) {
        if (is(expected, "string")) {
            expect(type.toString(),expected);
        }else {
            expect(type,expected);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticTypeAnalyzer2TestShared() {
    }
}

export class properties {
}
