/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/fix_internal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts.packages/path/lib/src/context";

export namespace DartFixContextImpl {
    export type Constructors = 'DartFixContextImpl';
    export type Interface = Omit<DartFixContextImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DartFixContextImpl extends any implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    astProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unit : any;

    constructor(fixContext : any,astProvider : any,unit : any) {
    }
    @defaultConstructor
    DartFixContextImpl(fixContext : any,astProvider : any,unit : any) {
        super.from(fixContext);
        this.astProvider = astProvider;
        this.unit = unit;
    }
    get getTopLevelDeclarations() : any {
        return analysisDriver.getTopLevelNameDeclarations;
    }
}

export namespace DefaultFixContributor {
    export type Constructors = 'DefaultFixContributor';
    export type Interface = Omit<DefaultFixContributor, Constructors>;
}
@DartClass
export class DefaultFixContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalComputeFixes(context : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                let processor : FixProcessor = new FixProcessor(context);
                let fixes : core.DartList<any> = await processor.compute();
                return fixes;
            } catch (__error__) {

                if (is(__error__,any)){
                    return Fix.EMPTY_LIST;
                }
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultFixContributor() {
    }
}

export namespace FixProcessor {
    export type Constructors = 'FixProcessor';
    export type Interface = Omit<FixProcessor, Constructors>;
}
@DartClass
export class FixProcessor {
    private static __$MAX_LEVENSHTEIN_DISTANCE : number;
    static get MAX_LEVENSHTEIN_DISTANCE() : number { 
        if (this.__$MAX_LEVENSHTEIN_DISTANCE===undefined) {
            this.__$MAX_LEVENSHTEIN_DISTANCE = 3;
        }
        return this.__$MAX_LEVENSHTEIN_DISTANCE;
    }

    resourceProvider : any;

    astProvider : any;

    getTopLevelDeclarations : any;

    unit : any;

    error : any;

    driver : any;

    file : string;

    fileStamp : number;

    unitElement : any;

    unitSource : any;

    unitLibraryElement : any;

    unitLibraryFile : any;

    unitLibraryFolder : any;

    fixes : core.DartList<any>;

    change : any;

    linkedPositionGroups : core.DartLinkedHashMap<string,any>;

    exitPosition : any;

    librariesToImport : core.DartSet<any>;

    utils : any;

    errorOffset : number;

    errorLength : number;

    errorEnd : number;

    errorRange : any;

    node : any;

    coveredNode : any;

    _typeProvider : any;

    _typeSystem : any;

    constructor(dartContext : any) {
    }
    @defaultConstructor
    FixProcessor(dartContext : any) {
        this.fixes = new core.DartList.literal<any>();
        this.change = new bare.createInstance(any,null,'<message>');
        this.linkedPositionGroups = new core.DartLinkedHashMap<string,any>();
        this.exitPosition = null;
        this.librariesToImport = new core.DartSet<any>();
        this.resourceProvider = dartContext.resourceProvider;
        this.astProvider = dartContext.astProvider;
        this.getTopLevelDeclarations = dartContext.getTopLevelDeclarations;
        this.driver = dartContext.analysisDriver;
        this.unit = dartContext.unit;
        this.unitElement = this.unit.element;
        this.unitSource = this.unitElement.source;
        this.file = this.unitSource.fullName;
        this.fileStamp = this._modificationStamp(this.file);
        this.unitLibraryElement = this.unitElement.library;
        let unitLibraryPath : string = this.unitLibraryElement.source.fullName;
        this.unitLibraryFile = this.resourceProvider.getFile(unitLibraryPath);
        this.unitLibraryFolder = this.unitLibraryFile.parent;
        this.error = dartContext.error;
    }
    get coreTypeBool() : any {
        return this._getCoreType('bool');
    }
    get eol() : string {
        return this.utils.endOfLine;
    }
    get typeProvider() : any {
        if (op(Op.EQUALS,this._typeProvider,null)) {
            this._typeProvider = this.unitElement.context.typeProvider;
        }
        return this._typeProvider;
    }
    get typeSystem() : any {
        if (op(Op.EQUALS,this._typeSystem,null)) {
            if (this.driver.analysisOptions.strongMode) {
                this._typeSystem = new bare.createInstance(any,null,this.typeProvider);
            }else {
                this._typeSystem = new bare.createInstance(any,null,this.typeProvider);
            }
        }
        return this._typeSystem;
    }
    compute() : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._modificationStamp(this.unitSource.fullName) != this.fileStamp) {
                return new core.DartList.literal<any>();
            }
            try {
                this.utils = new bare.createInstance(any,null,this.unit);
            } catch (__error__) {

                {
                    let e = __error__;
                    throw new bare.createInstance(any,null,{
                        exception : e});
                }
            }
            this.errorOffset = this.error.offset;
            this.errorLength = this.error.length;
            this.errorEnd = this.errorOffset + this.errorLength;
            this.errorRange = new bare.createInstance(any,null,this.errorOffset,this.errorLength);
            this.node = new bare.createInstance(any,null,this.errorOffset).searchWithin(this.unit);
            this.coveredNode = new bare.createInstance(any,null,this.errorOffset,this.errorEnd - 1).searchWithin(this.unit);
            let errorCode : any = this.error.errorCode;
            if (op(Op.EQUALS,errorCode,StaticWarningCode.UNDEFINED_CLASS_BOOLEAN)) {
                this._addFix_boolInsteadOfBoolean();
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE)) {
                this._addFix_replaceWithConstInstanceCreation();
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.ASYNC_FOR_IN_WRONG_CONTEXT)) {
                this._addFix_addAsync();
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.INVALID_ANNOTATION)) {
                if (is(this.node, any)) {
                    let annotation : any = this.node;
                    let name : any = annotation.name;
                    if (name != null && op(Op.EQUALS,name.staticElement,null)) {
                        this.node = name;
                        if (op(Op.EQUALS,annotation.arguments,null)) {
                            await this._addFix_importLibrary_withTopLevelVariable();
                        }else {
                            await this._addFix_importLibrary_withType();
                            this._addFix_createClass();
                            this._addFix_undefinedClass_useSimilar();
                        }
                    }
                }
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT)) {
                this._addFix_createConstructorSuperExplicit();
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT)) {
                this._addFix_createConstructorSuperImplicit();
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT)) {
                this._addFix_createConstructorSuperExplicit();
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.URI_DOES_NOT_EXIST)) {
                this._addFix_createImportUri();
                this._addFix_createPartUri();
            }
            if (op(Op.EQUALS,errorCode,HintCode.CAN_BE_NULL_AFTER_NULL_AWARE)) {
                this._addFix_canBeNullAfterNullAware();
            }
            if (op(Op.EQUALS,errorCode,HintCode.DEAD_CODE)) {
                this._addFix_removeDeadCode();
            }
            if (op(Op.EQUALS,errorCode,HintCode.DIVISION_OPTIMIZATION)) {
                this._addFix_useEffectiveIntegerDivision();
            }
            if (op(Op.EQUALS,errorCode,HintCode.TYPE_CHECK_IS_NOT_NULL)) {
                this._addFix_isNotNull();
            }
            if (op(Op.EQUALS,errorCode,HintCode.TYPE_CHECK_IS_NULL)) {
                this._addFix_isNull();
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNDEFINED_GETTER)) {
                this._addFix_undefinedClassAccessor_useSimilar();
                this._addFix_createField();
                this._addFix_createGetter();
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNDEFINED_SETTER)) {
                this._addFix_undefinedClassAccessor_useSimilar();
                this._addFix_createField();
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNNECESSARY_CAST)) {
                this._addFix_removeUnnecessaryCast();
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_CLAUSE)) {
                this._addFix_removeUnusedCatchClause();
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_STACK)) {
                this._addFix_removeUnusedCatchStack();
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNUSED_IMPORT)) {
                this._addFix_removeUnusedImport();
            }
            if (op(Op.EQUALS,errorCode,ParserErrorCode.EXPECTED_TOKEN)) {
                this._addFix_insertSemicolon();
            }
            if (op(Op.EQUALS,errorCode,ParserErrorCode.GETTER_WITH_PARAMETERS)) {
                this._addFix_removeParameters_inGetterDeclaration();
            }
            if (op(Op.EQUALS,errorCode,ParserErrorCode.VAR_AS_TYPE_NAME)) {
                this._addFix_replaceVarWithDynamic();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.ASSIGNMENT_TO_FINAL)) {
                await this._addFix_makeFieldNotFinal();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER)) {
                this._addFix_makeEnclosingClassAbstract();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS) || op(Op.EQUALS,errorCode,StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED)) {
                this._addFix_createConstructor_insteadOfSyntheticDefault();
                await this._addFix_addMissingParameter();
            }
            if (op(Op.EQUALS,errorCode,HintCode.MISSING_REQUIRED_PARAM) || op(Op.EQUALS,errorCode,HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS)) {
                this._addFix_addMissingRequiredArgument();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.FUNCTION_WITHOUT_CALL)) {
                this._addFix_addMissingMethodCall();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR)) {
                this._addFix_createConstructor_named();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR) || op(Op.EQUALS,errorCode,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS)) {
                this._addFix_makeEnclosingClassAbstract();
                this._addFix_createNoSuchMethod();
                this._addFix_createMissingOverrides();
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.UNDEFINED_CLASS) || op(Op.EQUALS,errorCode,StaticWarningCode.CAST_TO_NON_TYPE) || op(Op.EQUALS,errorCode,StaticWarningCode.TYPE_TEST_WITH_UNDEFINED_NAME) || op(Op.EQUALS,errorCode,StaticWarningCode.UNDEFINED_CLASS)) {
                await this._addFix_importLibrary_withType();
                this._addFix_createClass();
                this._addFix_undefinedClass_useSimilar();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.FINAL_NOT_INITIALIZED)) {
                this._addFix_createConstructor_forUninitializedFinalFields();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_1) || op(Op.EQUALS,errorCode,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_2) || op(Op.EQUALS,errorCode,StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS)) {
                this._addFix_updateConstructor_forUninitializedFinalFields();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER)) {
                this._addFix_undefinedClassAccessor_useSimilar();
                this._addFix_createClass();
                this._addFix_createField();
                this._addFix_createGetter();
                this._addFix_createFunction_forFunctionType();
                await this._addFix_importLibrary_withType();
                await this._addFix_importLibrary_withTopLevelVariable();
                this._addFix_createLocalVariable();
            }
            if (op(Op.EQUALS,errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT)) {
                this._addFix_addAsync();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE)) {
                this._addFix_illegalAsyncReturnType();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.INSTANCE_ACCESS_TO_STATIC_MEMBER)) {
                this._addFix_useStaticAccess_method();
                this._addFix_useStaticAccess_property();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.INVALID_ASSIGNMENT)) {
                this._addFix_changeTypeAnnotation();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.INVOCATION_OF_NON_FUNCTION)) {
                this._addFix_removeParentheses_inGetterInvocation();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.NON_BOOL_CONDITION)) {
                this._addFix_nonBoolCondition_addNotNull();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.NON_TYPE_AS_TYPE_ARGUMENT)) {
                await this._addFix_importLibrary_withType();
                this._addFix_createClass();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.UNDEFINED_FUNCTION)) {
                await this._addFix_importLibrary_withFunction();
                this._addFix_undefinedFunction_useSimilar();
                this._addFix_undefinedFunction_create();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.UNDEFINED_GETTER)) {
                this._addFix_undefinedClassAccessor_useSimilar();
                this._addFix_createField();
                this._addFix_createGetter();
                this._addFix_createFunction_forFunctionType();
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNDEFINED_METHOD) || op(Op.EQUALS,errorCode,StaticTypeWarningCode.UNDEFINED_METHOD)) {
                await this._addFix_importLibrary_withFunction();
                this._addFix_undefinedMethod_useSimilar();
                this._addFix_undefinedMethod_create();
                this._addFix_undefinedFunction_create();
            }
            if (op(Op.EQUALS,errorCode,StaticTypeWarningCode.UNDEFINED_SETTER)) {
                this._addFix_undefinedClassAccessor_useSimilar();
                this._addFix_createField();
            }
            if (op(Op.EQUALS,errorCode,CompileTimeErrorCode.UNDEFINED_NAMED_PARAMETER) || op(Op.EQUALS,errorCode,StaticWarningCode.UNDEFINED_NAMED_PARAMETER)) {
                this._addFix_convertFlutterChild();
                this._addFix_convertFlutterChildren();
            }
            if (is(errorCode, any)) {
                if (op(Op.EQUALS,errorCode.name,LintNames.annotate_overrides)) {
                    this._addLintFixAddOverrideAnnotation();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.avoid_annotating_with_dynamic)) {
                    this._addFix_removeTypeName();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.avoid_init_to_null)) {
                    this._addFix_removeInitializer();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.avoid_return_types_on_setters)) {
                    this._addFix_removeTypeName();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.avoid_types_on_closure_parameters)) {
                    this._addFix_replaceWithIdentifier();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.await_only_futures)) {
                    this._addFix_removeAwait();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.empty_statements)) {
                    this._addFix_removeEmptyStatement();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.prefer_collection_literals)) {
                    this._addFix_replaceWithLiteral();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.prefer_conditional_assignment)) {
                    this._addFix_replaceWithConditionalAssignment();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.unnecessary_brace_in_string_interp)) {
                    this._addLintRemoveInterpolationBraces();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.unnecessary_lambdas)) {
                    this._addFix_replaceWithTearOff();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.unnecessary_override)) {
                    this._addFix_removeMethodDeclaration();
                }
                if (op(Op.EQUALS,errorCode.name,LintNames.unnecessary_this)) {
                    this._addFix_removeThisExpression();
                }
            }
            return this.fixes;
        } )());
    }

    _addEdit(target : any,edit : any) : void {
        if (op(Op.EQUALS,target,null)) {
            target = this.unitElement;
        }
        let source : any = target.source;
        if (source.isInSystemLibrary) {
            return;
        }
        doSourceChange_addElementEdit(this.change,target,edit);
    }
    _addFix(kind : any,args : core.DartList<any>,_namedArguments? : {importsOnly? : boolean}) : void {
        let {importsOnly} = Object.assign({
            "importsOnly" : false}, _namedArguments );
        if (this.change.edits.isEmpty && !importsOnly) {
            return;
        }
        this.change.message = formatList(kind.message,args);
        this.linkedPositionGroups.values.forEach((group : any) =>  {
            return this.change.addLinkedEditGroup(group);
        });
        this.change.selection = this.exitPosition;
        addLibraryImports(this.change,this.unitLibraryElement,this.librariesToImport);
        let fix : any = new bare.createInstance(any,null,kind,this.change);
        this.fixes.add(fix);
        this.change = new bare.createInstance(any,null,'<message>');
        this.linkedPositionGroups.clear();
        this.exitPosition = null;
        this.librariesToImport.clear();
    }
    _addFix_addAsync() : void {
        let node : any = this.node;
        let body : any = node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        if (body != null && op(Op.EQUALS,body.keyword,null)) {
            this._addReplaceEdit(range.startLength(body,0),'async ');
            this._replaceReturnTypeWithFuture(body,this.typeProvider);
            this._addFix(DartFixKind.ADD_ASYNC,new core.DartList.literal());
        }
    }
    _addFix_addMissingMethodCall() : void {
        let targetClass : any = this.node.parent as any;
        let insertOffset : number = op(Op.MINUS,targetClass.end,1);
        let sb : any = new bare.createInstance(any,null,this.file,insertOffset);
        let prefix : string = this.utils.getIndent(1);
        let prefix2 : string = this.utils.getIndent(2);
        sb.append(prefix);
        sb.append('call() {');
        sb.append(this.eol);
        sb.append(prefix2);
        sb.append('// TODO: implement call');
        sb.append(this.eol);
        sb.append(prefix);
        sb.append('}');
        sb.append(this.eol);
        this.exitPosition = new bare.createInstance(any,null,this.file,insertOffset);
        this._insertBuilder(sb,this.unitElement);
        this._addFix(DartFixKind.CREATE_MISSING_METHOD_CALL,new core.DartList.literal());
    }
    _addFix_addMissingParameter() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (is(this.node, any) && is(this.node.parent, any)) {
                let argumentList : any = this.node;
                let invocation : any = this.node.parent;
                let methodName : any = invocation.methodName;
                let targetElement : any = methodName.bestElement;
                let arguments : core.DartList<any> = argumentList.arguments;
                if (is(targetElement, any)) {
                    let parameters : core.DartList<any> = targetElement.parameters;
                    let numParameters : number = parameters.length;
                    let requiredParameters : core.DartIterable<any> = parameters.takeWhile((p : any) =>  {
                        return op(Op.EQUALS,p.parameterKind,ParameterKind.REQUIRED);
                    });
                    let optionalParameters : core.DartIterable<any> = parameters.skipWhile((p : any) =>  {
                        return op(Op.EQUALS,p.parameterKind,ParameterKind.REQUIRED);
                    });
                    let numRequired : number = requiredParameters.length;
                    if (numRequired >= arguments.length) {
                        return;
                    }
                    let argument : any = arguments[numRequired];
                    let targetOffset : number;
                    if (numRequired != 0) {
                        let lastName : any = await this.astProvider.getParsedNameForElement(requiredParameters.last);
                        if (lastName != null) {
                            targetOffset = lastName.end;
                        }else {
                            return;
                        }
                    }else {
                        let targetName : any = await this.astProvider.getParsedNameForElement(targetElement);
                        let targetDeclaration : any = ((t)=>(!!t)?t.parent:null)(targetName);
                        if (is(targetDeclaration, any)) {
                            let function : any = targetDeclaration.functionExpression;
                            let paren : any = ((t)=>(!!t)?t.leftParenthesis:null)(function.parameters);
                            if (op(Op.EQUALS,paren,null)) {
                                return;
                            }
                            targetOffset = paren.end;
                        }else if (is(targetDeclaration, any)) {
                            let paren : any = ((t)=>(!!t)?t.leftParenthesis:null)(targetDeclaration.parameters);
                            if (op(Op.EQUALS,paren,null)) {
                                return;
                            }
                            targetOffset = paren.end;
                        }else {
                            return;
                        }
                    }
                    let targetFile : string = targetElement.source.fullName;
                    {
                        let sb : any = new bare.createInstance(any,null,targetFile,targetOffset);
                        if (numRequired != 0) {
                            sb.append(', ');
                        }
                        this._appendParameterForArgument(sb,new core.DartSet<string>(),numRequired,argument);
                        if (numRequired != numParameters) {
                            sb.append(', ');
                        }
                        this._insertBuilder(sb,targetElement);
                        this._addFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,new core.DartList.literal());
                    }
                    if (optionalParameters.isEmpty) {
                        let sb : any = new bare.createInstance(any,null,targetFile,targetOffset);
                        if (numRequired != 0) {
                            sb.append(', ');
                        }
                        sb.append('[');
                        this._appendParameterForArgument(sb,new core.DartSet<string>(),numRequired,argument);
                        sb.append(']');
                        this._insertBuilder(sb,targetElement);
                        this._addFix(DartFixKind.ADD_MISSING_PARAMETER_POSITIONAL,new core.DartList.literal());
                    }
                }
            }
        } )());
    }

    _addFix_addMissingRequiredArgument() : void {
        let targetElement : any;
        let argumentList : any;
        if (is(this.node, any)) {
            let invocation : any = this.node.parent;
            if (is(invocation, any)) {
                targetElement = invocation.methodName.bestElement;
                argumentList = invocation.argumentList;
            }else {
                let ancestor : any = invocation.getAncestor((p : any) =>  {
                    return is(p, any);
                });
                if (is(ancestor, any)) {
                    targetElement = ancestor.staticElement;
                    argumentList = ancestor.argumentList;
                }
            }
        }
        if (is(targetElement, any)) {
            let parts : core.DartList<string> = this.error.message.split("'");
            if (parts.length < 2) {
                return;
            }
            let paramName : string = parts[1];
            let sb : any;
            let args : core.DartList<any> = argumentList.arguments;
            if (args.isEmpty) {
                sb = new bare.createInstance(any,null,this.file,argumentList.leftParenthesis.end);
            }else {
                sb = new bare.createInstance(any,null,this.file,args.last.end);
                sb.append(', ');
            }
            let parameters : core.DartList<any> = targetElement.parameters;
            let element : any = parameters.firstWhere((p : any) =>  {
                return op(Op.EQUALS,p.name,paramName);
            },{
                orElse : () =>  {
                    return null;
                }});
            let defaultValue : string = getDefaultStringParameterValue(element);
            sb.append(`${paramName}: ${defaultValue}`);
            let newExpr : any = identifyNewExpression(this.node);
            if (newExpr != null && isFlutterInstanceCreationExpression(newExpr)) {
                sb.append(',');
            }
            this._insertBuilder(sb,null);
            this._addFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,new core.DartList.literal(paramName));
        }
    }
    _addFix_boolInsteadOfBoolean() : void {
        this._addReplaceEdit(range.error(this.error),'bool');
        this._addFix(DartFixKind.REPLACE_BOOLEAN_WITH_BOOL,new core.DartList.literal());
    }
    _addFix_canBeNullAfterNullAware() : void {
        let node : any = this.coveredNode;
        if (is(node, any)) {
            let parent : any = node.parent;
            while (parent != null){
                if (is(parent, any) && op(Op.EQUALS,parent.target,node)) {
                    this._addReplaceEdit(range.token(parent.operator),'?.');
                }else if (is(parent, any) && op(Op.EQUALS,parent.target,node)) {
                    this._addReplaceEdit(range.token(parent.operator),'?.');
                }else {
                    break;
                }
                node = parent;
                parent = node.parent;
            }
            this._addFix(DartFixKind.REPLACE_WITH_NULL_AWARE,new core.DartList.literal());
        }
    }
    _addFix_changeTypeAnnotation() : void {
        let declaration : any = this.coveredNode.parent;
        if (is(declaration, any) && op(Op.EQUALS,declaration.initializer,this.coveredNode)) {
            let variableList : any = declaration.parent;
            if (is(variableList, any) && op(Op.EQUALS,variableList.variables.length,1)) {
                let typeNode : any = variableList.type;
                if (typeNode != null) {
                    let initializer : any = this.coveredNode;
                    let newType : any = initializer.bestType;
                    if (is(newType, any) || is(newType, any)) {
                        let newTypeSource : string = this.utils.getTypeSource(newType,this.librariesToImport);
                        this._addReplaceEdit(range.node(typeNode),newTypeSource);
                        this._addFix(DartFixKind.CHANGE_TYPE_ANNOTATION,new core.DartList.literal(resolutionMap.typeForTypeName(typeNode),newTypeSource));
                    }
                }
            }
        }
    }
    _addFix_convertFlutterChild() : void {
        let namedExp : any = findFlutterNamedExpression(this.node,'child');
        if (op(Op.EQUALS,namedExp,null)) {
            return;
        }
        let childArg : any = getChildWidget(namedExp,false);
        if (childArg != null) {
            convertFlutterChildToChildren(childArg,namedExp,this.eol,this.utils.getNodeText,this.utils.getLinePrefix,this.utils.getIndent,this.utils.getText,this._addInsertEdit.bind(this),this._addRemoveEdit.bind(this),this._addReplaceEdit.bind(this),range.node);
            this._addFix(DartFixKind.CONVERT_FLUTTER_CHILD,new core.DartList.literal());
            return;
        }
        let listArg : any = getChildList(namedExp);
        if (listArg != null) {
            this._addInsertEdit(op(Op.PLUS,namedExp.offset,new core.DartString('child').length),'ren');
            if (op(Op.EQUALS,listArg.typeArguments,null)) {
                this._addInsertEdit(listArg.offset,'<Widget>');
            }
            this._addFix(DartFixKind.CONVERT_FLUTTER_CHILD,new core.DartList.literal());
        }
    }
    _addFix_convertFlutterChildren() : void {
    }
    _addFix_createClass() : void {
        let prefixElement : any = null;
        let name : string = null;
        let nameNode : any;
        if (is(this.node, any)) {
            let parent : any = this.node.parent;
            if (is(parent, any)) {
                let prefixedIdentifier : any = parent;
                prefixElement = prefixedIdentifier.prefix.staticElement;
                if (op(Op.EQUALS,prefixElement,null)) {
                    return;
                }
                parent = prefixedIdentifier.parent;
                nameNode = prefixedIdentifier.identifier;
                name = prefixedIdentifier.identifier.name;
            }else {
                nameNode = this.node;
                name = nameNode.name;
            }
            if (!FixProcessor._mayBeTypeIdentifier(nameNode)) {
                return;
            }
        }else {
            return;
        }
        let targetUnit : any;
        let sb : any;
        let prefix : string = '';
        let suffix : string = '';
        if (op(Op.EQUALS,prefixElement,null)) {
            targetUnit = this.unitElement;
            let enclosingMember : any = this.node.getAncestor((node : any) =>  {
                return is(node.parent, any);
            });
            if (op(Op.EQUALS,enclosingMember,null)) {
                return;
            }
            let offset : number = enclosingMember.end;
            sb = new bare.createInstance(any,null,this.file,offset);
            prefix = `${this.eol}${this.eol}`;
        }else {
            for(let import of this.unitLibraryElement.imports) {
                if (is(prefixElement, any) && op(Op.EQUALS,import.prefix,prefixElement)) {
                    let library : any = import.importedLibrary;
                    if (library != null) {
                        targetUnit = library.definingCompilationUnit;
                        let targetSource : any = targetUnit.source;
                        let offset : number = targetSource.contents.data.length;
                        sb = new bare.createInstance(any,null,targetSource.fullName,offset);
                        prefix = `${this.eol}`;
                        suffix = `${this.eol}`;
                        break;
                    }
                }
            }
            if (op(Op.EQUALS,sb,null)) {
                return;
            }
        }
        {
            sb.append(prefix);
            sb.append('class ');
            if (op(Op.EQUALS,prefixElement,null)) {
                sb.startPosition('NAME');
                sb.append(name);
                sb.endPosition();
            }else {
                sb.append(name);
            }
            sb.append(' {');
            sb.append(this.eol);
            sb.append('}');
            sb.append(suffix);
        }
        this._insertBuilder(sb,targetUnit);
        if (op(Op.EQUALS,prefixElement,null)) {
            this._addLinkedPosition('NAME',sb,range.node(this.node));
        }
        this._addFix(DartFixKind.CREATE_CLASS,new core.DartList.literal(name));
    }
    _addFix_createConstructor_forUninitializedFinalFields() : void {
        if (isNot(this.node, any) || isNot(this.node.parent, any)) {
            return;
        }
        let classDeclaration : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (op(Op.EQUALS,classDeclaration,null)) {
            return;
        }
        let fieldNames : core.DartList<string> = new core.DartList.literal<string>();
        for(let member of classDeclaration.members) {
            if (is(member, any)) {
                let variableList : any = member.fields;
                if (variableList.isFinal) {
                    fieldNames.addAll(variableList.variables.where((v : any) =>  {
                        return op(Op.EQUALS,v.initializer,null);
                    }).map((v : any) =>  {
                        return v.name.name;
                    }));
                }
            }
        }
        let targetLocation : any = this.utils.prepareNewConstructorLocation(classDeclaration);
        let sb : any = new bare.createInstance(any,null,this.file,targetLocation.offset);
        {
            sb.append(targetLocation.prefix);
            sb.append(classDeclaration.name.name);
            sb.append('(');
            sb.append(fieldNames.map((name : any) =>  {
                return `this.${name}`;
            }).join(', '));
            sb.append(');');
            sb.append(targetLocation.suffix);
        }
        this._insertBuilder(sb,this.unitElement);
        this._addFix(DartFixKind.CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS,new core.DartList.literal());
    }
    _addFix_createConstructor_insteadOfSyntheticDefault() : void {
        if (isNot(this.node, any)) {
            return;
        }
        if (isNot(this.node.parent, any)) {
            return;
        }
        let instanceCreation : any = this.node.parent;
        let constructorName : any = instanceCreation.constructorName;
        let constructorElement : any = constructorName.staticElement;
        if (op(Op.EQUALS,constructorElement,null) || !constructorElement.isDefaultConstructor || !constructorElement.isSynthetic) {
            return;
        }
        if (isNot(constructorElement.enclosingElement, any)) {
            return;
        }
        let targetElement : any = constructorElement.enclosingElement;
        let targetTypeNode : any = getParsedClassElementNode(targetElement);
        if (isNot(targetTypeNode, any)) {
            return;
        }
        let targetLocation : any = this.utils.prepareNewConstructorLocation(targetTypeNode);
        let targetFile : string = targetElement.source.fullName;
        let sb : any = new bare.createInstance(any,null,targetFile,targetLocation.offset);
        {
            sb.append(targetLocation.prefix);
            sb.append(targetElement.name);
            this._addFix_undefinedMethod_create_parameters(sb,instanceCreation.argumentList);
            sb.append(');');
            sb.append(targetLocation.suffix);
        }
        this._insertBuilder(sb,targetElement);
        this._addFix(DartFixKind.CREATE_CONSTRUCTOR,new core.DartList.literal(constructorName));
    }
    _addFix_createConstructor_named() : void {
        let name : any = null;
        let constructorName : any = null;
        let instanceCreation : any = null;
        if (is(this.node, any)) {
            name = this.node as any;
            if (is(name.parent, any)) {
                constructorName = name.parent as any;
                if (op(Op.EQUALS,constructorName.name,name)) {
                    if (is(constructorName.parent, any)) {
                        instanceCreation = constructorName.parent as any;
                        if (instanceCreation.constructorName != constructorName) {
                            return;
                        }
                    }
                }
            }
        }
        if (op(Op.EQUALS,instanceCreation,null)) {
            return;
        }
        let targetType : any = constructorName.type.type;
        if (isNot(targetType, any)) {
            return;
        }
        let targetElement : any = targetType.element as any;
        let targetTypeNode : any = getParsedClassElementNode(targetElement);
        if (isNot(targetTypeNode, any)) {
            return;
        }
        let targetLocation : any = this.utils.prepareNewConstructorLocation(targetTypeNode);
        let targetFile : string = targetElement.source.fullName;
        let sb : any = new bare.createInstance(any,null,targetFile,targetLocation.offset);
        {
            sb.append(targetLocation.prefix);
            sb.append(targetElement.name);
            sb.append('.');
            {
                sb.startPosition('NAME');
                sb.append(name.name);
                sb.endPosition();
            }
            this._addFix_undefinedMethod_create_parameters(sb,instanceCreation.argumentList);
            sb.append(');');
            sb.append(targetLocation.suffix);
        }
        this._insertBuilder(sb,targetElement);
        if (targetFile == this.file) {
            this._addLinkedPosition('NAME',sb,range.node(name));
        }
        this._addFix(DartFixKind.CREATE_CONSTRUCTOR,new core.DartList.literal(constructorName));
    }
    _addFix_createConstructorSuperExplicit() : void {
        if (isNot(this.node.parent, any) || isNot(this.node.parent.parent, any)) {
            return;
        }
        let targetConstructor : any = this.node.parent as any;
        let targetClassNode : any = targetConstructor.parent as any;
        let targetClassElement : any = targetClassNode.element;
        let superType : any = targetClassElement.supertype;
        for(let superConstructor of superType.constructors) {
            let constructorName : string = superConstructor.name;
            if (Identifier.isPrivateName(constructorName)) {
                continue;
            }
            let sb : any;
            {
                let initializers : core.DartList<any> = targetConstructor.initializers;
                if (initializers.isEmpty) {
                    let insertOffset : number = targetConstructor.parameters.end;
                    sb = new bare.createInstance(any,null,this.file,insertOffset);
                    sb.append(' : ');
                }else {
                    let lastInitializer : any = initializers[initializers.length - 1];
                    let insertOffset : number = lastInitializer.end;
                    sb = new bare.createInstance(any,null,this.file,insertOffset);
                    sb.append(', ');
                }
            }
            sb.append('super');
            if (!isEmpty(constructorName)) {
                sb.append('.');
                sb.append(constructorName);
            }
            sb.append('(');
            let firstParameter : boolean = true;
            for(let parameter of superConstructor.parameters) {
                if (parameter.parameterKind != ParameterKind.REQUIRED) {
                    break;
                }
                if (firstParameter) {
                    firstParameter = false;
                }else {
                    sb.append(', ');
                }
                let parameterType : any = parameter.type;
                sb.startPosition(parameter.name);
                sb.append(getDefaultValueCode(parameterType));
                sb.endPosition();
            }
            sb.append(')');
            this._insertBuilder(sb,this.unitElement);
            let proposalName : string = this._getConstructorProposalName(superConstructor);
            this._addFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,new core.DartList.literal(proposalName));
        }
    }
    _addFix_createConstructorSuperImplicit() : void {
        let targetClassNode : any = this.node.parent as any;
        let targetClassElement : any = targetClassNode.element;
        let superType : any = targetClassElement.supertype;
        let targetClassName : string = targetClassElement.name;
        for(let superConstructor of superType.constructors) {
            superConstructor = ConstructorMember.from(superConstructor,superType);
            let constructorName : string = superConstructor.name;
            if (Identifier.isPrivateName(constructorName)) {
                continue;
            }
            let parametersBuffer : any = new bare.createInstance(any,null);
            let argumentsBuffer : any = new bare.createInstance(any,null);
            let firstParameter : boolean = true;
            for(let parameter of superConstructor.parameters) {
                if (parameter.parameterKind != ParameterKind.REQUIRED) {
                    break;
                }
                if (firstParameter) {
                    firstParameter = false;
                }else {
                    parametersBuffer.append(', ');
                    argumentsBuffer.append(', ');
                }
                let parameterName : string = parameter.displayName;
                if (new core.DartString(parameterName).length > 1 && new core.DartString(parameterName).startsWith('_')) {
                    parameterName = new core.DartString(parameterName).substring(1);
                }
                this._appendParameterSource(parametersBuffer,parameter.type,parameterName);
                argumentsBuffer.append(parameterName);
            }
            let targetLocation : any = this.utils.prepareNewConstructorLocation(targetClassNode);
            let sb : any = new bare.createInstance(any,null,this.file,targetLocation.offset);
            {
                sb.append(targetLocation.prefix);
                sb.append(targetClassName);
                if (!new core.DartString(constructorName).isEmpty) {
                    sb.startPosition('NAME');
                    sb.append('.');
                    sb.append(constructorName);
                    sb.endPosition();
                }
                sb.append('(');
                sb.append(parametersBuffer.toString());
                sb.append(') : super');
                if (!new core.DartString(constructorName).isEmpty) {
                    sb.append('.');
                    sb.append(constructorName);
                }
                sb.append('(');
                sb.append(argumentsBuffer.toString());
                sb.append(');');
                sb.append(targetLocation.suffix);
            }
            this._insertBuilder(sb,this.unitElement);
            let proposalName : string = this._getConstructorProposalName(superConstructor);
            this._addFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,new core.DartList.literal(proposalName));
        }
    }
    _addFix_createField() : void {
        if (isNot(this.node, any)) {
            return;
        }
        let nameNode : any = this.node;
        let name : string = nameNode.name;
        let target : any;
        {
            let nameParent : any = nameNode.parent;
            if (is(nameParent, any)) {
                target = nameParent.prefix;
            }
            if (is(nameParent, any)) {
                target = nameParent.realTarget;
            }
        }
        let staticModifier : boolean = false;
        let targetClassElement : any;
        if (target != null) {
            let targetType : any = target.bestType;
            if (isNot(targetType, any)) {
                return;
            }
            targetClassElement = targetType.element;
            if (is(target, any)) {
                let targetIdentifier : any = target;
                let targetElement : any = targetIdentifier.bestElement;
                if (op(Op.EQUALS,targetElement,null)) {
                    return;
                }
                staticModifier = op(Op.EQUALS,targetElement.kind,ElementKind.CLASS);
            }
        }else {
            targetClassElement = getEnclosingClassElement(this.node);
            if (op(Op.EQUALS,targetClassElement,null)) {
                return;
            }
            staticModifier = this._inStaticContext();
        }
        if (targetClassElement.librarySource.isInSystemLibrary) {
            return;
        }
        this.utils.targetClassElement = targetClassElement;
        let targetTypeNode : any = getParsedClassElementNode(targetClassElement);
        if (isNot(targetTypeNode, any)) {
            return;
        }
        let targetClassNode : any = targetTypeNode;
        let targetLocation : any = this.utils.prepareNewFieldLocation(targetClassNode);
        let targetFile : string = targetClassElement.source.fullName;
        let sb : any = new bare.createInstance(any,null,targetFile,targetLocation.offset);
        {
            sb.append(targetLocation.prefix);
            if (staticModifier) {
                sb.append('static ');
            }
            let fieldTypeNode : any = climbPropertyAccess(nameNode);
            let fieldType : any = this._inferUndefinedExpressionType(fieldTypeNode);
            this._appendType(sb,fieldType,{
                groupId : 'TYPE',orVar : true});
            {
                sb.startPosition('NAME');
                sb.append(name);
                sb.endPosition();
            }
            sb.append(';');
            sb.append(targetLocation.suffix);
        }
        this._insertBuilder(sb,targetClassElement);
        if (targetFile == this.file) {
            this._addLinkedPosition('NAME',sb,range.node(this.node));
        }
        this._addFix(DartFixKind.CREATE_FIELD,new core.DartList.literal(name));
    }
    _addFix_createFunction_forFunctionType() : void {
        if (is(this.node, any)) {
            let nameNode : any = this.node as any;
            let targetElement : any;
            let argument : any;
            {
                let target : any = getQualifiedPropertyTarget(this.node);
                if (target != null) {
                    let targetType : any = target.bestType;
                    if (targetType != null && is(targetType.element, any)) {
                        targetElement = targetType.element as any;
                        argument = target.parent as any;
                    }else {
                        return;
                    }
                }else {
                    let enclosingClass : any = this.node.getAncestor((node : any) =>  {
                        return is(node, any);
                    });
                    targetElement = ((t)=>(!!t)?t.element:null)(enclosingClass);
                    argument = nameNode;
                }
            }
            argument = stepUpNamedExpression(argument);
            let parameterElement : any = argument.bestParameterElement;
            if (op(Op.EQUALS,parameterElement,null)) {
                return;
            }
            let parameterType : any = parameterElement.type;
            if (is(parameterType, any) && parameterType.isDartCoreFunction) {
                let element : any = new bare.createInstance(any,null,'',-1);
                parameterType = new bare.createInstance(any,null,element);
            }
            if (isNot(parameterType, any)) {
                return;
            }
            let functionType : any = parameterType as any;
            if (targetElement != null) {
                this._addProposal_createFunction_method(targetElement,functionType);
            }else {
                this._addProposal_createFunction_function(functionType);
            }
        }
    }
    _addFix_createGetter() : void {
        if (isNot(this.node, any)) {
            return;
        }
        let nameNode : any = this.node;
        let name : string = nameNode.name;
        if (!nameNode.inGetterContext()) {
            return;
        }
        let target : any;
        {
            let nameParent : any = nameNode.parent;
            if (is(nameParent, any)) {
                target = nameParent.prefix;
            }
            if (is(nameParent, any)) {
                target = nameParent.realTarget;
            }
        }
        let staticModifier : boolean = false;
        let targetClassElement : any;
        if (target != null) {
            let targetType : any = target.bestType;
            if (isNot(targetType, any)) {
                return;
            }
            targetClassElement = targetType.element;
            if (is(target, any)) {
                let targetIdentifier : any = target;
                let targetElement : any = targetIdentifier.bestElement;
                staticModifier = op(Op.EQUALS,targetElement.kind,ElementKind.CLASS);
            }
        }else {
            targetClassElement = getEnclosingClassElement(this.node);
            if (op(Op.EQUALS,targetClassElement,null)) {
                return;
            }
            staticModifier = this._inStaticContext();
        }
        if (targetClassElement.librarySource.isInSystemLibrary) {
            return;
        }
        this.utils.targetClassElement = targetClassElement;
        let targetTypeNode : any = getParsedClassElementNode(targetClassElement);
        if (isNot(targetTypeNode, any)) {
            return;
        }
        let targetClassNode : any = targetTypeNode;
        let targetLocation : any = this.utils.prepareNewGetterLocation(targetClassNode);
        let targetFile : string = targetClassElement.source.fullName;
        let sb : any = new bare.createInstance(any,null,targetFile,targetLocation.offset);
        {
            sb.append(targetLocation.prefix);
            if (staticModifier) {
                sb.append('static ');
            }
            let fieldTypeNode : any = climbPropertyAccess(nameNode);
            let fieldType : any = this._inferUndefinedExpressionType(fieldTypeNode);
            this._appendType(sb,fieldType,{
                groupId : 'TYPE'});
            sb.append('get ');
            {
                sb.startPosition('NAME');
                sb.append(name);
                sb.endPosition();
            }
            sb.append(' => null;');
            sb.append(targetLocation.suffix);
        }
        this._insertBuilder(sb,targetClassElement);
        if (targetFile == this.file) {
            this._addLinkedPosition('NAME',sb,range.node(this.node));
        }
        this._addFix(DartFixKind.CREATE_GETTER,new core.DartList.literal(name));
    }
    _addFix_createImportUri() : void {
        if (is(this.node, any) && is(this.node.parent, any)) {
            let importDirective : any = this.node.parent;
            let source : any = importDirective.uriSource;
            if (source != null) {
                let file : string = source.fullName;
                if (lib4.isAbsolute(file) && AnalysisEngine.isDartFileName(file)) {
                    let libName : string = this._computeLibraryName(file);
                    let edit : any = new bare.createInstance(any,null,0,0,`library ${libName};${this.eol}${this.eol}`);
                    doSourceChange_addSourceEdit(this.change,source,edit,{
                        isNewFile : true});
                    this._addFix(DartFixKind.CREATE_FILE,new core.DartList.literal(source.shortName));
                }
            }
        }
    }
    _addFix_createLocalVariable() : void {
        if (isNot(this.node, any)) {
            return;
        }
        let nameNode : any = this.node;
        let name : string = nameNode.name;
        if (is(this.node.parent, any)) {
            let assignment : any = this.node.parent;
            if (op(Op.EQUALS,assignment.leftHandSide,this.node) && op(Op.EQUALS,assignment.operator.type,TokenType.EQ) && is(assignment.parent, any)) {
                this._addInsertEdit(this.node.offset,'var ');
                this._addFix(DartFixKind.CREATE_LOCAL_VARIABLE,new core.DartList.literal(name));
                return;
            }
        }
        let target : any = this.node.getAncestor((x : any) =>  {
            return is(x, any);
        });
        if (op(Op.EQUALS,target,null)) {
            return;
        }
        let prefix : string = this.utils.getNodePrefix(target);
        let sb : any = new bare.createInstance(any,null,this.file,target.offset);
        {
            let type : any = this._inferUndefinedExpressionType(this.node);
            if (!(op(Op.EQUALS,type,null) || is(type, any) || is(type, any) && type.element != null && !type.element.isSynthetic)) {
                return;
            }
            this._appendType(sb,type,{
                groupId : 'TYPE',orVar : true});
            {
                sb.startPosition('NAME');
                sb.append(name);
                sb.endPosition();
            }
            sb.append(';');
            sb.append(this.eol);
            sb.append(prefix);
        }
        this._insertBuilder(sb,this.unitElement);
        this._addLinkedPosition('NAME',sb,range.node(this.node));
        this._addFix(DartFixKind.CREATE_LOCAL_VARIABLE,new core.DartList.literal(name));
    }
    _addFix_createMissingOverrides() : void {
        let targetClass : any = this.node.parent as any;
        let targetClassElement : any = targetClass.element;
        this.utils.targetClassElement = targetClassElement;
        let elements : core.DartList<any> = ErrorVerifier.computeMissingOverrides(this.driver.analysisOptions.strongMode,this.typeProvider,this.typeSystem,new bare.createInstance(any,null,this.unitLibraryElement),targetClassElement).toList();
        elements.sort((a : any,b : any) =>  {
            let names : number = compareStrings(a.displayName,b.displayName);
            if (names != 0) {
                return names;
            }
            if (op(Op.EQUALS,a.kind,ElementKind.GETTER)) {
                return -1;
            }
            return 1;
        });
        let insertOffset : number = op(Op.MINUS,targetClass.end,1);
        let sb : any = new bare.createInstance(any,null,this.file,insertOffset);
        let isFirst : boolean = true;
        var addEolIfNotFirst : () => void = () : void =>  {
            if (!isFirst || this.utils.isClassWithEmptyBody(targetClass)) {
                sb.append(this.eol);
            }
            isFirst = false;
        };
        let prefix : string = this.utils.getIndent(1);
        let numElements : number = elements.length;
        for(let i : number = 0; i < elements.length; i++){
            let element : any = elements[i];
            if (op(Op.EQUALS,element.kind,ElementKind.GETTER) && i + 1 < elements.length) {
                let nextElement : any = elements[i + 1];
                if (op(Op.EQUALS,nextElement.kind,ElementKind.SETTER)) {
                    elements.removeAt(i + 1);
                    elements.removeAt(i);
                    i--;
                    numElements--;
                    addEolIfNotFirst();
                    {
                        sb.append(prefix);
                        sb.append('@override');
                        sb.append(this.eol);
                    }
                    sb.append(prefix);
                    this._appendType(sb,element.type.returnType,{
                        orVar : true});
                    sb.append(element.name);
                    sb.append(';');
                    sb.append(this.eol);
                }
            }
        }
        for(let element of elements) {
            addEolIfNotFirst();
            this._addFix_createMissingOverrides_single(sb,targetClass,element);
        }
        this.exitPosition = new bare.createInstance(any,null,this.file,insertOffset);
        this._insertBuilder(sb,this.unitElement);
        this._addFix(DartFixKind.CREATE_MISSING_OVERRIDES,new core.DartList.literal(numElements));
    }
    _addFix_createMissingOverrides_single(sb : any,targetClass : any,element : any) : void {
        this.utils.targetExecutableElement = element;
        let prefix : string = this.utils.getIndent(1);
        let prefix2 : string = this.utils.getIndent(2);
        let elementKind : any = element.kind;
        let isGetter : boolean = op(Op.EQUALS,elementKind,ElementKind.GETTER);
        let isSetter : boolean = op(Op.EQUALS,elementKind,ElementKind.SETTER);
        let isMethod : boolean = op(Op.EQUALS,elementKind,ElementKind.METHOD);
        let isOperator : boolean = isMethod && (element as any).isOperator;
        sb.append(prefix);
        if (isGetter) {
            sb.append(`// TODO: implement ${element.displayName}`);
            sb.append(this.eol);
            sb.append(prefix);
        }
        {
            sb.append('@override');
            sb.append(this.eol);
            sb.append(prefix);
        }
        if (!isSetter) {
            this._appendType(sb,element.type.returnType);
        }
        if (isGetter) {
            sb.append('get ');
        }else if (isSetter) {
            sb.append('set ');
        }else if (isOperator) {
            sb.append('operator ');
        }
        sb.append(element.displayName);
        this._appendTypeParameters(sb,element.typeParameters);
        if (isGetter) {
            sb.append(' => null;');
        }else {
            let parameters : core.DartList<any> = element.parameters;
            this._appendParameters(sb,parameters);
            sb.append(' {');
            sb.append(this.eol);
            sb.append(prefix2);
            sb.append(`// TODO: implement ${element.displayName}`);
            sb.append(this.eol);
            sb.append(prefix);
            sb.append('}');
        }
        sb.append(this.eol);
        this.utils.targetExecutableElement = null;
    }
    _addFix_createNoSuchMethod() : void {
        let targetClass : any = this.node.parent as any;
        let prefix : string = this.utils.getIndent(1);
        let insertOffset : number = op(Op.MINUS,targetClass.end,1);
        let sb : any = new bare.createInstance(any,null,this.file,insertOffset);
        {
            if (!targetClass.members.isEmpty) {
                sb.append(this.eol);
            }
            sb.append(prefix);
            sb.append('noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);');
            sb.append(this.eol);
        }
        this._insertBuilder(sb,this.unitElement);
        this.exitPosition = new bare.createInstance(any,null,this.file,insertOffset);
        this._addFix(DartFixKind.CREATE_NO_SUCH_METHOD,new core.DartList.literal());
    }
    _addFix_createPartUri() : void {
        if (is(this.node, any) && is(this.node.parent, any)) {
            let partDirective : any = this.node.parent;
            let source : any = partDirective.uriSource;
            if (source != null) {
                let libName : string = this.unitLibraryElement.name;
                let edit : any = new bare.createInstance(any,null,0,0,`part of ${libName};${this.eol}${this.eol}`);
                doSourceChange_addSourceEdit(this.change,source,edit,{
                    isNewFile : true});
                this._addFix(DartFixKind.CREATE_FILE,new core.DartList.literal(source.shortName));
            }
        }
    }
    _addFix_illegalAsyncReturnType() : void {
        let typeName : any = this.node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        this._replaceTypeWithFuture(typeName,this.typeProvider);
        this._addFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,new core.DartList.literal());
    }
    _addFix_importLibrary(kind : any,library : any) : void {
        this.librariesToImport.add(library);
        let libraryUri : string = getLibrarySourceUri(this.unitLibraryElement,library);
        this._addFix(kind,new core.DartList.literal(libraryUri),{
            importsOnly : true});
    }
    _addFix_importLibrary_withElement(name : string,elementKinds : core.DartList<any>,kind2 : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (new core.DartString(name).startsWith('_')) {
                return;
            }
            let alreadyImportedWithPrefix : core.DartSet<any> = new core.DartSet<any>();
            for(let imp of this.unitLibraryElement.imports) {
                let libraryElement : any = imp.importedLibrary;
                let element : any = getExportedElement(libraryElement,name);
                if (op(Op.EQUALS,element,null)) {
                    continue;
                }
                if (is(element, any)) {
                    element = (element as any).variable;
                }
                if (!elementKinds.contains(element.kind)) {
                    continue;
                }
                let prefix : any = imp.prefix;
                if (prefix != null) {
                    this._addReplaceEdit(range.startLength(this.node,0),`${prefix.displayName}.`);
                    this._addFix(DartFixKind.IMPORT_LIBRARY_PREFIX,new core.DartList.literal(libraryElement.displayName,prefix.displayName));
                    continue;
                }
                let combinators : core.DartList<any> = imp.combinators;
                if (combinators.length == 1 && is(combinators[0], any)) {
                    let showCombinator : any = combinators[0] as any;
                    let showNames : core.DartSet<string> = new collection.SplayTreeSet<string>();
                    showNames.addAll(showCombinator.shownNames);
                    showNames.add(name);
                    let libraryName : string = libraryElement.definingCompilationUnit.displayName;
                    if (libraryElement.isInSdk) {
                        libraryName = imp.uri;
                    }
                    alreadyImportedWithPrefix.add(libraryElement.source);
                    let newShowCode : string = `show ${showNames.join(', ')}`;
                    let offset : number = showCombinator.offset;
                    let length : number = op(Op.MINUS,showCombinator.end,offset);
                    this._addReplaceEdit(new bare.createInstance(any,null,offset,length),newShowCode,this.unitLibraryElement);
                    this._addFix(DartFixKind.IMPORT_LIBRARY_SHOW,new core.DartList.literal(libraryName));
                }
            }
            {
                let declarations : core.DartList<any> = await this.getTopLevelDeclarations(name);
                for(let declaration of declarations) {
                    if (declaration.declaration.kind != kind2) {
                        continue;
                    }
                    let librarySource : any = declaration.source;
                    if (alreadyImportedWithPrefix.contains(librarySource)) {
                        continue;
                    }
                    if (!this._isSourceVisibleToLibrary(librarySource)) {
                        continue;
                    }
                    let fixKind : any;
                    if (librarySource.isInSystemLibrary) {
                        fixKind = DartFixKind.IMPORT_LIBRARY_SDK;
                    }else if (this._isLibSrcPath(librarySource.fullName)) {
                        fixKind = DartFixKind.IMPORT_LIBRARY_PROJECT3;
                    }else if (declaration.isExported) {
                        fixKind = DartFixKind.IMPORT_LIBRARY_PROJECT2;
                    }else {
                        fixKind = DartFixKind.IMPORT_LIBRARY_PROJECT1;
                    }
                    this._addFix_importLibrary(fixKind,librarySource);
                }
            }
        } )());
    }

    _addFix_importLibrary_withFunction() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (is(this.node, any) && is(this.node.parent, any)) {
                let invocation : any = this.node.parent as any;
                if (op(Op.EQUALS,invocation.realTarget,null) && op(Op.EQUALS,invocation.methodName,this.node)) {
                    let name : string = (this.node as any).name;
                    await this._addFix_importLibrary_withElement(name,new core.DartList.literal(ElementKind.FUNCTION),TopLevelDeclarationKind.function);
                }
            }
        } )());
    }

    _addFix_importLibrary_withTopLevelVariable() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (is(this.node, any)) {
                let name : string = (this.node as any).name;
                await this._addFix_importLibrary_withElement(name,new core.DartList.literal(ElementKind.TOP_LEVEL_VARIABLE),TopLevelDeclarationKind.variable);
            }
        } )());
    }

    _addFix_importLibrary_withType() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (FixProcessor._mayBeTypeIdentifier(this.node)) {
                let typeName : string = (this.node as any).name;
                await this._addFix_importLibrary_withElement(typeName,new core.DartList.literal(ElementKind.CLASS,ElementKind.FUNCTION_TYPE_ALIAS),TopLevelDeclarationKind.type);
            }
        } )());
    }

    _addFix_insertSemicolon() : void {
        if (this.error.message.contains("';'")) {
            if (this._isAwaitNode()) {
                return;
            }
            let insertOffset : number = op(Op.PLUS,this.error.offset,this.error.length);
            this._addInsertEdit(insertOffset,';');
            this._addFix(DartFixKind.INSERT_SEMICOLON,new core.DartList.literal());
        }
    }
    _addFix_isNotNull() : void {
        if (is(this.coveredNode, any)) {
            let isExpression : any = this.coveredNode as any;
            this._addReplaceEdit(range.endEnd(isExpression.expression,isExpression),' != null');
            this._addFix(DartFixKind.USE_NOT_EQ_NULL,new core.DartList.literal());
        }
    }
    _addFix_isNull() : void {
        if (is(this.coveredNode, any)) {
            let isExpression : any = this.coveredNode as any;
            this._addReplaceEdit(range.endEnd(isExpression.expression,isExpression),' == null');
            this._addFix(DartFixKind.USE_EQ_EQ_NULL,new core.DartList.literal());
        }
    }
    _addFix_makeEnclosingClassAbstract() : void {
        let enclosingClass : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (op(Op.EQUALS,enclosingClass,null)) {
            return;
        }
        let className : string = enclosingClass.name.name;
        this._addInsertEdit(enclosingClass.classKeyword.offset,'abstract ');
        this._addFix(DartFixKind.MAKE_CLASS_ABSTRACT,new core.DartList.literal(className));
    }
    _addFix_makeFieldNotFinal() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = this.node;
            if (is(node, any) && is(node.bestElement, any)) {
                let getter : any = node.bestElement;
                if (getter.isGetter && getter.isSynthetic && !getter.variable.isSynthetic && op(Op.EQUALS,getter.variable.setter,null) && is(getter.enclosingElement, any)) {
                    let name : any = await this.astProvider.getParsedNameForElement(getter.variable);
                    let variable : any = ((t)=>(!!t)?t.parent:null)(name);
                    if (is(variable, any) && is(variable.parent, any) && is(variable.parent.parent, any)) {
                        let declarationList : any = variable.parent;
                        let keywordToken : any = declarationList.keyword;
                        if (op(Op.EQUALS,declarationList.variables.length,1) && op(Op.EQUALS,keywordToken.keyword,Keyword.FINAL)) {
                            if (declarationList.type != null) {
                                this._addRemoveEdit(range.startStart(keywordToken,declarationList.type));
                            }else {
                                this._addReplaceEdit(range.startStart(keywordToken,variable),'var ');
                            }
                            let fieldName : string = getter.variable.displayName;
                            this._addFix(DartFixKind.MAKE_FIELD_NOT_FINAL,new core.DartList.literal(fieldName));
                        }
                    }
                }
            }
        } )());
    }

    _addFix_nonBoolCondition_addNotNull() : void {
        this._addInsertEdit(op(Op.PLUS,this.error.offset,this.error.length),' != null');
        this._addFix(DartFixKind.ADD_NE_NULL,new core.DartList.literal());
    }
    _addFix_removeAwait() : void {
        let awaitExpression = this.node;
        if (is(awaitExpression, any)) {
            let awaitToken = awaitExpression.awaitKeyword;
            this._addRemoveEdit(range.startStart(awaitToken,awaitToken.next));
            this._addFix(DartFixKind.REMOVE_AWAIT,new core.DartList.literal());
        }
    }
    _addFix_removeDeadCode() : void {
        let coveringNode : any = this.coveredNode;
        if (is(coveringNode, any)) {
            let parent : any = this.coveredNode.parent;
            if (is(parent, any)) {
                if (op(Op.EQUALS,parent.rightOperand,this.coveredNode)) {
                    this._addRemoveEdit(range.endEnd(parent.leftOperand,this.coveredNode));
                    this._addFix(DartFixKind.REMOVE_DEAD_CODE,new core.DartList.literal());
                }
            }
        }else if (is(coveringNode, any)) {
            let block : any = coveringNode;
            let statementsToRemove : core.DartList<any> = new core.DartList.literal<any>();
            for(let statement of block.statements) {
                if (range.node(statement).intersects(this.errorRange)) {
                    statementsToRemove.add(statement);
                }
            }
            if (statementsToRemove.isNotEmpty) {
                let rangeToRemove : any = this.utils.getLinesRangeStatements(statementsToRemove);
                this._addRemoveEdit(rangeToRemove);
                this._addFix(DartFixKind.REMOVE_DEAD_CODE,new core.DartList.literal());
            }
        }else if (is(coveringNode, any)) {
            let rangeToRemove : any = this.utils.getLinesRangeStatements(new core.DartList.literal<any>(coveringNode));
            this._addRemoveEdit(rangeToRemove);
            this._addFix(DartFixKind.REMOVE_DEAD_CODE,new core.DartList.literal());
        }
    }
    _addFix_removeEmptyStatement() : void {
        let emptyStatement : any = this.node;
        if (is(emptyStatement.parent, any)) {
            this._addRemoveEdit(this.utils.getLinesRange(range.node(emptyStatement)));
            this._addFix(DartFixKind.REMOVE_EMPTY_STATEMENT,new core.DartList.literal());
        }else {
            this._addReplaceEdit(range.endEnd(emptyStatement.beginToken.previous,emptyStatement),' {}');
            this._addFix(DartFixKind.REPLACE_WITH_BRACKETS,new core.DartList.literal());
        }
    }
    _addFix_removeInitializer() : void {
        let ancestor : any = this.node.getAncestor((a : any) =>  {
            return is(a, any);
        });
        if (op(Op.EQUALS,ancestor,null)) {
            return;
        }
        this._addRemoveEdit(range.endEnd(ancestor.name,ancestor.initializer));
        this._addFix(DartFixKind.REMOVE_INITIALIZER,new core.DartList.literal());
    }
    _addFix_removeMethodDeclaration() : void {
        let declaration : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (declaration != null) {
            this._addRemoveEdit(this.utils.getLinesRange(range.node(declaration)));
            this._addFix(DartFixKind.REMOVE_METHOD_DECLARATION,new core.DartList.literal());
        }
    }
    _addFix_removeParameters_inGetterDeclaration() : void {
        if (is(this.node, any)) {
            let method : any = this.node as any;
            let name : any = method.name;
            let body : any = method.body;
            if (name != null && body != null) {
                this._addReplaceEdit(range.endStart(name,body),' ');
                this._addFix(DartFixKind.REMOVE_PARAMETERS_IN_GETTER_DECLARATION,new core.DartList.literal());
            }
        }
    }
    _addFix_removeParentheses_inGetterInvocation() : void {
        if (is(this.node, any) && is(this.node.parent, any)) {
            let invocation : any = this.node.parent as any;
            if (op(Op.EQUALS,invocation.methodName,this.node) && invocation.target != null) {
                this._addRemoveEdit(range.endEnd(this.node,invocation));
                this._addFix(DartFixKind.REMOVE_PARENTHESIS_IN_GETTER_INVOCATION,new core.DartList.literal());
            }
        }
    }
    _addFix_removeThisExpression() : void {
        let thisExpression = is(this.node, any) ? this.node : this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        let parent = thisExpression.parent;
        if (is(parent, any)) {
            this._addRemoveEdit(range.startEnd(parent,parent.operator));
            this._addFix(DartFixKind.REMOVE_THIS_EXPRESSION,new core.DartList.literal());
        }else if (is(parent, any)) {
            this._addRemoveEdit(range.startEnd(parent,parent.operator));
            this._addFix(DartFixKind.REMOVE_THIS_EXPRESSION,new core.DartList.literal());
        }
    }
    _addFix_removeTypeName() : void {
        let type : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (type != null) {
            this._addRemoveEdit(range.startStart(type,type.endToken.next));
            this._addFix(DartFixKind.REMOVE_TYPE_NAME,new core.DartList.literal());
        }
    }
    _addFix_removeUnnecessaryCast() : void {
        if (isNot(this.coveredNode, any)) {
            return;
        }
        let asExpression : any = this.coveredNode as any;
        let expression : any = asExpression.expression;
        let expressionPrecedence : number = getExpressionPrecedence(expression);
        this._addRemoveEdit(range.endEnd(expression,asExpression));
        this._removeEnclosingParentheses(asExpression,expressionPrecedence);
        this._addFix(DartFixKind.REMOVE_UNNECESSARY_CAST,new core.DartList.literal());
    }
    _addFix_removeUnusedCatchClause() : void {
        if (is(this.node, any)) {
            let catchClause : any = this.node.parent;
            if (is(catchClause, any) && op(Op.EQUALS,catchClause.exceptionParameter,this.node)) {
                this._addRemoveEdit(range.startStart(catchClause.catchKeyword,catchClause.body));
                this._addFix(DartFixKind.REMOVE_UNUSED_CATCH_CLAUSE,new core.DartList.literal());
            }
        }
    }
    _addFix_removeUnusedCatchStack() : void {
        if (is(this.node, any)) {
            let catchClause : any = this.node.parent;
            if (is(catchClause, any) && op(Op.EQUALS,catchClause.stackTraceParameter,this.node) && catchClause.exceptionParameter != null) {
                this._addRemoveEdit(range.endEnd(catchClause.exceptionParameter,this.node));
                this._addFix(DartFixKind.REMOVE_UNUSED_CATCH_STACK,new core.DartList.literal());
            }
        }
    }
    _addFix_removeUnusedImport() : void {
        let importDirective : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (op(Op.EQUALS,importDirective,null)) {
            return;
        }
        this._addRemoveEdit(this.utils.getLinesRange(range.node(importDirective)));
        this._addFix(DartFixKind.REMOVE_UNUSED_IMPORT,new core.DartList.literal());
    }
    _addFix_replaceVarWithDynamic() : void {
        this._addReplaceEdit(range.error(this.error),'dynamic');
        this._addFix(DartFixKind.REPLACE_VAR_WITH_DYNAMIC,new core.DartList.literal());
    }
    _addFix_replaceWithConditionalAssignment() : void {
        let ifStatement : any = is(this.node, any) ? this.node : this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        let thenStatement = ifStatement.thenStatement;
        var uniqueStatement : (statement : any) => any = (statement : any) : any =>  {
            if (is(statement, any)) {
                return uniqueStatement(statement.statements.first);
            }
            return statement;
        };
        thenStatement = uniqueStatement(thenStatement);
        if (is(thenStatement, any)) {
            let expression = thenStatement.expression.unParenthesized;
            if (is(expression, any)) {
                let buffer = new core.DartStringBuffer();
                buffer.write(this.utils.getNodeText(expression.leftHandSide));
                buffer.write(' ??= ');
                buffer.write(this.utils.getNodeText(expression.rightHandSide));
                buffer.write(';');
                this._addReplaceEdit(range.node(ifStatement),buffer.toString());
                this._addFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT,new core.DartList.literal());
            }
        }
    }
    _addFix_replaceWithConstInstanceCreation() : void {
        if (is(this.coveredNode, any)) {
            let instanceCreation = this.coveredNode as any;
            this._addReplaceEdit(range.token(instanceCreation.keyword),'const');
            this._addFix(DartFixKind.USE_CONST,new core.DartList.literal());
        }
    }
    _addFix_replaceWithIdentifier() : void {
        let functionTyped : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        if (functionTyped != null) {
            this._addReplaceEdit(range.node(functionTyped),this.utils.getNodeText(functionTyped.identifier));
            this._addFix(DartFixKind.REPLACE_WITH_IDENTIFIER,new core.DartList.literal());
        }else {
            this._addFix_removeTypeName();
        }
    }
    _addFix_replaceWithLiteral() : void {
        let instanceCreation : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        let type : any = instanceCreation.staticType;
        let buffer = new core.DartStringBuffer();
        let generics = instanceCreation.constructorName.type.typeArguments;
        if (generics != null) {
            buffer.write(this.utils.getNodeText(generics));
        }
        if (op(Op.EQUALS,type.name,'List')) {
            buffer.write('[]');
        }else {
            buffer.write('{}');
        }
        this._addReplaceEdit(range.node(instanceCreation),buffer.toString());
        this._addFix(DartFixKind.REPLACE_WITH_LITERAL,new core.DartList.literal());
    }
    _addFix_replaceWithTearOff() : void {
        let ancestor : any = this.node.getAncestor((a : any) =>  {
            return is(a, any);
        });
        if (op(Op.EQUALS,ancestor,null)) {
            return;
        }
        var addFixOfExpression : (expression : any) => void = (expression : any) : void =>  {
            let buffer = new core.DartStringBuffer();
            if (is(expression, any) && expression.target != null) {
                buffer.write(this.utils.getNodeText(expression.target));
                buffer.write('.');
            }
            buffer.write(this.utils.getNodeText(expression.function));
            this._addReplaceEdit(range.node(ancestor),buffer.toString());
            this._addFix(DartFixKind.REPLACE_WITH_TEAR_OFF,new core.DartList.literal());
        };
        let body = ancestor.body;
        if (is(body, any)) {
            let expression = body.expression;
            addFixOfExpression(expression.unParenthesized);
        }else if (is(body, any)) {
            let statement = body.block.statements.first;
            if (is(statement, any)) {
                let expression = statement.expression;
                addFixOfExpression(expression.unParenthesized);
            }else if (is(statement, any)) {
                let expression = statement.expression;
                addFixOfExpression(expression.unParenthesized);
            }
        }
    }
    _addFix_undefinedClass_useSimilar() : void {
        let node : any = this.node;
        let prefixName : string = null;
        if (is(node, any) && is(node.staticElement, any)) {
            let parent : any = node.parent;
            if (is(parent, any) && op(Op.EQUALS,parent.prefix,node) && is(parent.parent, any)) {
                prefixName = (node as any).name;
                node = parent.identifier;
            }
        }
        if (FixProcessor._mayBeTypeIdentifier(node)) {
            let name : string = (node as any).name;
            let finder : _ClosestElementFinder = new _ClosestElementFinder(name,(element : any) =>  {
                return is(element, any);
            },FixProcessor.MAX_LEVENSHTEIN_DISTANCE);
            if (prefixName == null) {
                for(let unit of this.unitLibraryElement.units) {
                    finder._updateList(unit.types);
                }
            }
            for(let importElement of this.unitLibraryElement.imports) {
                if (op(Op.EQUALS,((t)=>(!!t)?t.name:null)(importElement.prefix),prefixName)) {
                    let namespace : core.DartMap<string,any> = getImportNamespace(importElement);
                    finder._updateList(namespace.values);
                }
            }
            if (finder._element != null) {
                let closestName : string = finder._element.name;
                this._addReplaceEdit(range.node(node),closestName);
                if (closestName != null) {
                    this._addFix(DartFixKind.CHANGE_TO,new core.DartList.literal(closestName));
                }
            }
        }
    }
    _addFix_undefinedClassAccessor_useSimilar() : void {
        let node : any = this.node;
        if (is(node, any)) {
            let target : any = null;
            if (is(node.parent, any)) {
                let invocation : any = node.parent as any;
                target = invocation.prefix;
            }
            if (node.inGetterContext()) {
                this._addFix_undefinedClassMember_useSimilar(target,(element : any) =>  {
                    return is(element, any) && element.isGetter || is(element, any) && element.getter != null;
                });
            }
            if (node.inSetterContext()) {
                this._addFix_undefinedClassMember_useSimilar(target,(element : any) =>  {
                    return is(element, any) && element.isSetter || is(element, any) && element.setter != null;
                });
            }
        }
    }
    _addFix_undefinedClassMember_useSimilar(target : any,predicate : (argument : any) => boolean) : void {
        if (is(this.node, any)) {
            let name : string = (this.node as any).name;
            let finder : _ClosestElementFinder = new _ClosestElementFinder(name,predicate,FixProcessor.MAX_LEVENSHTEIN_DISTANCE);
            if (op(Op.EQUALS,target,null)) {
                let clazz : any = this.node.getAncestor((node : any) =>  {
                    return is(node, any);
                });
                if (clazz != null) {
                    let classElement : any = clazz.element;
                    this._updateFinderWithClassMembers(finder,classElement);
                }
            }else {
                let type : any = target.bestType;
                if (is(type, any)) {
                    let classElement : any = type.element;
                    this._updateFinderWithClassMembers(finder,classElement);
                }
            }
            if (finder._element != null) {
                let closestName : string = finder._element.name;
                this._addReplaceEdit(range.node(this.node),closestName);
                this._addFix(DartFixKind.CHANGE_TO,new core.DartList.literal(closestName));
            }
        }
    }
    _addFix_undefinedFunction_create() : void {
        if (is(this.node, any) && is(this.node.parent, any)) {
        }else {
            return;
        }
        let name : string = (this.node as any).name;
        let invocation : any = this.node.parent as any;
        let target : any = invocation.realTarget;
        if (target != null) {
            return;
        }
        let insertOffset : number;
        let sourcePrefix : string;
        let enclosingMember : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        insertOffset = enclosingMember.end;
        sourcePrefix = `${this.eol}${this.eol}`;
        this.utils.targetClassElement = null;
        let sb : any = new bare.createInstance(any,null,this.file,insertOffset);
        {
            sb.append(sourcePrefix);
            {
                let type : any = this._inferUndefinedExpressionType(invocation);
                this._appendType(sb,type,{
                    groupId : 'RETURN_TYPE'});
            }
            {
                sb.startPosition('NAME');
                sb.append(name);
                sb.endPosition();
            }
            this._addFix_undefinedMethod_create_parameters(sb,invocation.argumentList);
            sb.append(`) {${this.eol}}`);
        }
        this._insertBuilder(sb,this.unitElement);
        this._addLinkedPosition('NAME',sb,range.node(this.node));
        this._addFix(DartFixKind.CREATE_FUNCTION,new core.DartList.literal(name));
    }
    _addFix_undefinedFunction_useSimilar() : void {
        let node : any = this.node;
        if (is(node, any)) {
            let prefixName : string = null;
            {
                let invocation : any = node.parent;
                if (is(invocation, any) && op(Op.EQUALS,invocation.methodName,node)) {
                    let target : any = invocation.target;
                    if (is(target, any) && is(target.staticElement, any)) {
                        prefixName = target.name;
                    }
                }
            }
            let finder : _ClosestElementFinder = new _ClosestElementFinder(node.name,(element : any) =>  {
                return is(element, any);
            },FixProcessor.MAX_LEVENSHTEIN_DISTANCE);
            if (prefixName == null) {
                for(let unit of this.unitLibraryElement.units) {
                    finder._updateList(unit.functions);
                }
            }
            for(let importElement of this.unitLibraryElement.imports) {
                if (op(Op.EQUALS,((t)=>(!!t)?t.name:null)(importElement.prefix),prefixName)) {
                    let namespace : core.DartMap<string,any> = getImportNamespace(importElement);
                    finder._updateList(namespace.values);
                }
            }
            if (finder._element != null) {
                let closestName : string = finder._element.name;
                this._addReplaceEdit(range.node(node),closestName);
                this._addFix(DartFixKind.CHANGE_TO,new core.DartList.literal(closestName));
            }
        }
    }
    _addFix_undefinedMethod_create() : void {
        if (is(this.node, any) && is(this.node.parent, any)) {
            let name : string = (this.node as any).name;
            let invocation : any = this.node.parent as any;
            let targetElement : any;
            let staticModifier : boolean = false;
            let targetClassNode : any;
            let target : any = invocation.realTarget;
            if (op(Op.EQUALS,target,null)) {
                targetElement = this.unitElement;
                let enclosingMember : any = this.node.getAncestor((node : any) =>  {
                    return is(node, any);
                });
                targetClassNode = enclosingMember.parent;
                this.utils.targetClassElement = targetClassNode.element;
                staticModifier = this._inStaticContext();
            }else {
                let targetType : any = target.bestType;
                if (isNot(targetType, any)) {
                    return;
                }
                let targetClassElement : any = targetType.element as any;
                if (targetClassElement.librarySource.isInSystemLibrary) {
                    return;
                }
                targetElement = targetClassElement;
                let targetTypeNode : any = getParsedClassElementNode(targetClassElement);
                if (isNot(targetTypeNode, any)) {
                    return;
                }
                targetClassNode = targetTypeNode;
                if (is(target, any)) {
                    staticModifier = op(Op.EQUALS,resolutionMap.bestElementForIdentifier(target).kind,ElementKind.CLASS);
                }
                let targetUnitElement : any = getCompilationUnitElement(targetClassElement);
                let targetUnit : any = getParsedUnit(targetUnitElement);
                this.utils = new bare.createInstance(any,null,targetUnit);
            }
            let targetLocation : any = this.utils.prepareNewMethodLocation(targetClassNode);
            let targetFile : string = targetElement.source.fullName;
            let sb : any = new bare.createInstance(any,null,targetFile,targetLocation.offset);
            {
                sb.append(targetLocation.prefix);
                if (staticModifier) {
                    sb.append('static ');
                }
                {
                    let type : any = this._inferUndefinedExpressionType(invocation);
                    this._appendType(sb,type,{
                        groupId : 'RETURN_TYPE'});
                }
                {
                    sb.startPosition('NAME');
                    sb.append(name);
                    sb.endPosition();
                }
                this._addFix_undefinedMethod_create_parameters(sb,invocation.argumentList);
                sb.append(') {}');
                sb.append(targetLocation.suffix);
            }
            this._insertBuilder(sb,targetElement);
            if (targetFile == this.file) {
                this._addLinkedPosition('NAME',sb,range.node(this.node));
            }
            this._addFix(DartFixKind.CREATE_METHOD,new core.DartList.literal(name));
        }
    }
    _addFix_undefinedMethod_create_parameters(sb : any,argumentList : any) : void {
        let usedNames : core.DartSet<string> = new core.DartSet<string>();
        sb.append('(');
        let arguments : core.DartList<any> = argumentList.arguments;
        let hasNamedParameters : boolean = false;
        for(let i : number = 0; i < arguments.length; i++){
            let argument : any = arguments[i];
            if (i != 0) {
                sb.append(', ');
            }
            if (is(argument, any) && !hasNamedParameters) {
                hasNamedParameters = true;
                sb.append('{');
            }
            this._appendParameterForArgument(sb,usedNames,i,argument);
        }
        if (hasNamedParameters) {
            sb.append('}');
        }
    }
    _addFix_undefinedMethod_useSimilar() : void {
        if (is(this.node.parent, any)) {
            let invocation : any = this.node.parent as any;
            this._addFix_undefinedClassMember_useSimilar(invocation.realTarget,(element : any) =>  {
                return is(element, any) && !element.isOperator;
            });
        }
    }
    _addFix_updateConstructor_forUninitializedFinalFields() : void {
        if (isNot(this.node, any) || isNot(this.node.parent, any)) {
            return;
        }
        let constructor : any = this.node.parent;
        let fields : core.DartList<any> = ErrorVerifier.computeNotInitializedFields(constructor);
        fields.sort((a : any,b : any) =>  {
            return op(Op.MINUS,a.nameOffset,b.nameOffset);
        });
        let fieldParametersCode : string = fields.map((field : any) =>  {
            return `this.${field.name}`;
        }).join(', ');
        let lastRequiredParameter : any;
        let parameters : core.DartList<any> = constructor.parameters.parameters;
        for(let parameter of parameters) {
            if (op(Op.EQUALS,parameter.kind,ParameterKind.REQUIRED)) {
                lastRequiredParameter = parameter;
            }
        }
        if (lastRequiredParameter != null) {
            this._addInsertEdit(lastRequiredParameter.end,`, ${fieldParametersCode}`);
        }else {
            let offset : number = constructor.parameters.leftParenthesis.end;
            if (parameters.isNotEmpty) {
                fieldParametersCode += ', ';
            }
            this._addInsertEdit(offset,fieldParametersCode);
        }
        this._addFix(DartFixKind.ADD_FIELD_FORMAL_PARAMETERS,new core.DartList.literal());
    }
    _addFix_useEffectiveIntegerDivision() : void {
        for(let n : any = this.node; n != null; n = n.parent){
            if (is(n, any) && op(Op.EQUALS,n.offset,this.errorOffset) && op(Op.EQUALS,n.length,this.errorLength)) {
                let target : any = n.target.unParenthesized;
                let binary : any = target as any;
                this._addReplaceEdit(range.token(binary.operator),'~/');
                this._addRemoveEdit(range.startStart(n,binary.leftOperand));
                this._addRemoveEdit(range.endEnd(binary.rightOperand,n));
                this._addFix(DartFixKind.USE_EFFECTIVE_INTEGER_DIVISION,new core.DartList.literal());
                break;
            }
        }
    }
    _addFix_useStaticAccess(target : any,element : any) : void {
        let declaringElement : any = element.enclosingElement;
        if (is(declaringElement, any)) {
            let declaringType : any = declaringElement.type;
            let declaringTypeCode : string = this.utils.getTypeSource(declaringType,this.librariesToImport);
            this._addReplaceEdit(range.node(target),declaringTypeCode);
            this._addFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,new core.DartList.literal(declaringType));
        }
    }
    _addFix_useStaticAccess_method() : void {
        if (is(this.node, any) && is(this.node.parent, any)) {
            let invocation : any = this.node.parent as any;
            if (op(Op.EQUALS,invocation.methodName,this.node)) {
                let target : any = invocation.target;
                let invokedElement : any = invocation.methodName.bestElement;
                this._addFix_useStaticAccess(target,invokedElement);
            }
        }
    }
    _addFix_useStaticAccess_property() : void {
        if (is(this.node, any) && is(this.node.parent, any)) {
            let prefixed : any = this.node.parent as any;
            if (op(Op.EQUALS,prefixed.identifier,this.node)) {
                let target : any = prefixed.prefix;
                let invokedElement : any = prefixed.identifier.bestElement;
                this._addFix_useStaticAccess(target,invokedElement);
            }
        }
    }
    _addInsertEdit(offset : number,text : string,target? : any) : void {
        let edit : any = new bare.createInstance(any,null,offset,0,text);
        this._addEdit(target,edit);
    }
    _addLinkedPosition(groupId : string,sb : any,range : any) : void {
        let offset : number = range.offset;
        if (op(Op.LEQ,sb.offset,offset)) {
            let delta : number = sb.length;
            offset += delta;
        }
        let group : any = this._getLinkedPosition(groupId);
        let position : any = new bare.createInstance(any,null,this.file,offset);
        group.addPosition(position,range.length);
    }
    _addLintFixAddOverrideAnnotation() : void {
        let member : any = this.node.getAncestor((n : any) =>  {
            return is(n, any);
        });
        if (op(Op.EQUALS,member,null)) {
            return;
        }
        let token : any = member.beginToken;
        if (is(token, any)) {
            token = (token as any).parent;
        }
        this.exitPosition = new bare.createInstance(any,null,this.file,op(Op.MINUS,token.offset,1));
        let indent : string = this.utils.getIndent(1);
        this._addReplaceEdit(range.startLength(token,0),`@override${this.eol}${indent}`);
        this._addFix(DartFixKind.LINT_ADD_OVERRIDE,new core.DartList.literal());
    }
    _addLintRemoveInterpolationBraces() : void {
        let node : any = this.node;
        if (is(node, any)) {
            let right : any = node.rightBracket;
            if (node.expression != null && right != null) {
                this._addReplaceEdit(range.startStart(node,node.expression),'$');
                this._addRemoveEdit(range.token(right));
                this._addFix(DartFixKind.LINT_REMOVE_INTERPOLATION_BRACES,new core.DartList.literal());
            }
        }
    }
    _addProposal_createFunction(functionType : any,name : string,targetSource : any,insertOffset : number,isStatic : boolean,prefix : string,sourcePrefix : string,sourceSuffix : string,target : any) : void {
        let targetFile : string = targetSource.fullName;
        let sb : any = new bare.createInstance(any,null,targetFile,insertOffset);
        {
            sb.append(sourcePrefix);
            sb.append(prefix);
            if (isStatic) {
                sb.append('static ');
            }
            this._appendType(sb,functionType.returnType,{
                groupId : 'RETURN_TYPE'});
            {
                sb.startPosition('NAME');
                sb.append(name);
                sb.endPosition();
            }
            sb.append('(');
            let parameters : core.DartList<any> = functionType.parameters;
            for(let i : number = 0; i < parameters.length; i++){
                let parameter : any = parameters[i];
                if (i != 0) {
                    sb.append(', ');
                }
                let type : any = parameter.type;
                if (!type.isDynamic) {
                    let typeSource : string = this.utils.getTypeSource(type,this.librariesToImport);
                    {
                        sb.startPosition(`TYPE${i}`);
                        sb.append(typeSource);
                        FixProcessor._addSuperTypeProposals(sb,type);
                        sb.endPosition();
                    }
                    sb.append(' ');
                }
                {
                    sb.startPosition(`ARG${i}`);
                    sb.append(parameter.displayName);
                    sb.endPosition();
                }
            }
            sb.append(')');
            sb.append(` {${this.eol}${prefix}}`);
            sb.append(sourceSuffix);
        }
        this._insertBuilder(sb,target);
        if (op(Op.EQUALS,targetSource,this.unitSource)) {
            this._addLinkedPosition('NAME',sb,range.node(this.node));
        }
    }
    _addProposal_createFunction_function(functionType : any) : void {
        let name : string = (this.node as any).name;
        let insertOffset : number = this.unit.end;
        let prefix : string = '';
        let sourcePrefix : string = `${this.eol}`;
        let sourceSuffix : string = this.eol;
        this._addProposal_createFunction(functionType,name,this.unitSource,insertOffset,false,prefix,sourcePrefix,sourceSuffix,this.unitElement);
        this._addFix(DartFixKind.CREATE_FUNCTION,new core.DartList.literal(name));
    }
    _addProposal_createFunction_method(targetClassElement : any,functionType : any) : void {
        let name : string = (this.node as any).name;
        let targetSource : any = targetClassElement.source;
        let targetClassNode : any = getParsedClassElementNode(targetClassElement);
        let insertOffset : number = op(Op.MINUS,targetClassNode.end,1);
        let prefix : string = '  ';
        let sourcePrefix : string;
        if (targetClassNode.members.isEmpty) {
            sourcePrefix = '';
        }else {
            sourcePrefix = this.eol;
        }
        let sourceSuffix : string = this.eol;
        this._addProposal_createFunction(functionType,name,targetSource,insertOffset,this._inStaticContext(),prefix,sourcePrefix,sourceSuffix,targetClassElement);
        this._addFix(DartFixKind.CREATE_METHOD,new core.DartList.literal(name));
    }
    _addRemoveEdit(range : any) : void {
        this._addReplaceEdit(range,'');
    }
    _addReplaceEdit(range : any,text : string,target? : any) : void {
        let edit : any = new bare.createInstance(any,null,range.offset,range.length,text);
        this._addEdit(target,edit);
    }
    _appendParameterForArgument(sb : any,excluded : core.DartSet<string>,index : number,argument : any) : void {
        let type : any = argument.bestType;
        if (op(Op.EQUALS,type,null) || type.isBottom || type.isDartCoreNull) {
            type = DynamicTypeImpl.instance;
        }
        let typeSource : string = this.utils.getTypeSource(type,this.librariesToImport);
        if (typeSource != 'dynamic') {
            sb.startPosition(`TYPE${index}`);
            sb.append(typeSource);
            FixProcessor._addSuperTypeProposals(sb,type);
            sb.endPosition();
            sb.append(' ');
        }
        if (is(argument, any)) {
            sb.append(argument.name.label.name);
        }else {
            let suggestions : core.DartList<string> = FixProcessor._getArgumentNameSuggestions(excluded,type,argument,index);
            let favorite : string = suggestions[0];
            excluded.add(favorite);
            sb.startPosition(`ARG${index}`);
            sb.append(favorite);
            sb.addSuggestions(LinkedEditSuggestionKind.PARAMETER,suggestions);
            sb.endPosition();
        }
    }
    _appendParameters(sb : any,parameters : core.DartList<any>) : void {
        sb.append('(');
        let firstParameter : boolean = true;
        let sawNamed : boolean = false;
        let sawPositional : boolean = false;
        for(let parameter of parameters) {
            if (!firstParameter) {
                sb.append(', ');
            }else {
                firstParameter = false;
            }
            let parameterKind : any = parameter.parameterKind;
            if (op(Op.EQUALS,parameterKind,ParameterKind.NAMED)) {
                if (!sawNamed) {
                    sb.append('{');
                    sawNamed = true;
                }
            }
            if (op(Op.EQUALS,parameterKind,ParameterKind.POSITIONAL)) {
                if (!sawPositional) {
                    sb.append('[');
                    sawPositional = true;
                }
            }
            this._appendParameterSource(sb,parameter.type,parameter.name);
            let defaultCode : string = parameter.defaultValueCode;
            if (defaultCode != null) {
                if (sawPositional) {
                    sb.append(' = ');
                }else {
                    sb.append(': ');
                }
                sb.append(defaultCode);
            }
        }
        if (sawNamed) {
            sb.append('}');
        }
        if (sawPositional) {
            sb.append(']');
        }
        sb.append(')');
    }
    _appendParameterSource(sb : any,type : any,name : string) : void {
        let parameterSource : string = this.utils.getParameterSource(type,name,this.librariesToImport);
        sb.append(parameterSource);
    }
    _appendType(sb : any,type : any,_namedArguments? : {groupId? : string,orVar? : boolean,trailingSpace? : boolean}) : void {
        let {groupId,orVar,trailingSpace} = Object.assign({
            "orVar" : false,
            "trailingSpace" : true}, _namedArguments );
        if (type != null && !type.isDynamic) {
            let typeSource : string = this.utils.getTypeSource(type,this.librariesToImport);
            if (groupId != null) {
                sb.startPosition(groupId);
                sb.append(typeSource);
                sb.endPosition();
            }else {
                sb.append(typeSource);
            }
            if (trailingSpace) {
                sb.append(' ');
            }
        }else if (orVar) {
            sb.append('var ');
        }
    }
    _appendTypeParameter(sb : any,typeParameter : any) : void {
        sb.append(typeParameter.name);
        if (typeParameter.bound != null) {
            sb.append(' extends ');
            this._appendType(sb,typeParameter.bound,{
                trailingSpace : false});
        }
    }
    _appendTypeParameters(sb : any,typeParameters : core.DartList<any>) : void {
        if (typeParameters.isNotEmpty) {
            sb.append('<');
            let isFirst : boolean = true;
            for(let typeParameter of typeParameters) {
                if (!isFirst) {
                    sb.append(', ');
                }
                isFirst = false;
                this._appendTypeParameter(sb,typeParameter);
            }
            sb.append('>');
        }
    }
    _computeLibraryName(path : string) : string {
        let pathContext : lib5.Context = this.resourceProvider.pathContext;
        let packageFolder : string = this._computePackageFolder(path);
        if (packageFolder == null) {
            return pathContext.basenameWithoutExtension(path);
        }
        let packageName : string = pathContext.basename(packageFolder);
        let relPath : string = pathContext.relative(path,{
            from : packageFolder});
        let relPathParts : core.DartList<string> = pathContext.split(relPath);
        if (relPathParts.isNotEmpty) {
            if (new core.DartString(relPathParts[0]).toLowerCase() == 'lib') {
                relPathParts.removeAt(0);
            }
            if (relPathParts.isNotEmpty) {
                let nameWithoutExt : string = pathContext.withoutExtension(relPathParts.last);
                relPathParts[relPathParts.length - 1] = nameWithoutExt;
            }
        }
        return packageName + '.' + relPathParts.join('.');
    }
    _computePackageFolder(path : string) : string {
        let pathContext : lib5.Context = this.resourceProvider.pathContext;
        let pubspecFolder : string = lib4.dirname(path);
        while (true){
            if (this.resourceProvider.getResource(pathContext.join(pubspecFolder,'pubspec.yaml')).exists) {
                return pubspecFolder;
            }
            let pubspecFolderNew : string = pathContext.dirname(pubspecFolder);
            if (pubspecFolderNew == pubspecFolder) {
                return null;
            }
            pubspecFolder = pubspecFolderNew;
        }
    }
    _getConstructorProposalName(constructor : any) : string {
        let proposalNameBuffer : any = new bare.createInstance(any,null);
        proposalNameBuffer.append('super');
        let constructorName : string = constructor.displayName;
        if (!new core.DartString(constructorName).isEmpty) {
            proposalNameBuffer.append('.');
            proposalNameBuffer.append(constructorName);
        }
        this._appendParameters(proposalNameBuffer,constructor.parameters);
        return proposalNameBuffer.toString();
    }
    _getCoreType(name : string) : any {
        let libraries : core.DartList<any> = this.unitLibraryElement.importedLibraries;
        for(let library of libraries) {
            if (library.isDartCore) {
                let classElement : any = library.getType(name);
                if (classElement != null) {
                    return classElement.type;
                }
                return null;
            }
        }
        return null;
    }
    _getLinkedPosition(groupId : string) : any {
        let group : any = op(Op.INDEX,this.linkedPositionGroups,groupId);
        if (op(Op.EQUALS,group,null)) {
            group = new bare.createInstance(any,null);
            op(Op.INDEX_ASSIGN,this.linkedPositionGroups,groupId,group);
        }
        return group;
    }
    _inferUndefinedExpressionType(expression : any) : any {
        let parent : any = expression.parent;
        if (is(parent, any)) {
            if (is(expression, any)) {
                return VoidTypeImpl.instance;
            }
        }
        if (is(parent, any)) {
            let executable : any = getEnclosingExecutableElement(expression);
            return ((t)=>(!!t)?t.returnType:null)(executable);
        }
        if (is(parent, any)) {
            let variableDeclaration : any = parent;
            if (op(Op.EQUALS,variableDeclaration.initializer,expression)) {
                let variableElement : any = variableDeclaration.element;
                if (variableElement != null) {
                    return variableElement.type;
                }
            }
        }
        if (is(parent, any)) {
            let assignment : any = parent;
            if (op(Op.EQUALS,assignment.leftHandSide,expression)) {
                let rhs : any = assignment.rightHandSide;
                if (rhs != null) {
                    return rhs.bestType;
                }
            }
        }
        if (is(parent, any)) {
            let assignment : any = parent;
            if (op(Op.EQUALS,assignment.rightHandSide,expression)) {
                if (op(Op.EQUALS,assignment.operator.type,TokenType.EQ)) {
                    let lhs : any = assignment.leftHandSide;
                    if (lhs != null) {
                        return lhs.bestType;
                    }
                }else {
                    let method : any = assignment.bestElement;
                    if (method != null) {
                        let parameters : core.DartList<any> = method.parameters;
                        if (parameters.length == 1) {
                            return parameters[0].type;
                        }
                    }
                }
            }
        }
        if (is(parent, any)) {
            let binary : any = parent;
            let method : any = binary.bestElement;
            if (method != null) {
                if (op(Op.EQUALS,binary.rightOperand,expression)) {
                    let parameters : core.DartList<any> = method.parameters;
                    return parameters.length == 1 ? parameters[0].type : null;
                }
            }
        }
        if (is(parent, any)) {
            let parameter : any = expression.bestParameterElement;
            return ((t)=>(!!t)?t.type:null)(parameter);
        }
        {
            if (is(parent, any)) {
                let statement : any = parent;
                if (op(Op.EQUALS,statement.condition,expression)) {
                    return this.coreTypeBool;
                }
            }
            if (is(parent, any)) {
                let statement : any = parent;
                if (op(Op.EQUALS,statement.condition,expression)) {
                    return this.coreTypeBool;
                }
            }
            if (is(parent, any)) {
                let statement : any = parent;
                if (op(Op.EQUALS,statement.condition,expression)) {
                    return this.coreTypeBool;
                }
            }
            if (is(parent, any)) {
                let statement : any = parent;
                if (op(Op.EQUALS,statement.condition,expression)) {
                    return this.coreTypeBool;
                }
            }
            if (is(parent, any)) {
                let prefixExpression : any = parent;
                if (op(Op.EQUALS,prefixExpression.operator.type,TokenType.BANG)) {
                    return this.coreTypeBool;
                }
            }
            if (is(parent, any)) {
                let binaryExpression : any = parent;
                let operatorType : any = binaryExpression.operator.type;
                if (op(Op.EQUALS,operatorType,TokenType.AMPERSAND_AMPERSAND) || op(Op.EQUALS,operatorType,TokenType.BAR_BAR)) {
                    return this.coreTypeBool;
                }
            }
        }
        return null;
    }
    _insertBuilder(builder : any,target : any) : void {
        let text : string = builder.toString();
        this._addInsertEdit(builder.offset,text,target);
        builder.linkedPositionGroups.forEach((id : string,group : any) =>  {
            let fixGroup : any = this._getLinkedPosition(id);
            group.positions.forEach((position : any) =>  {
                fixGroup.addPosition(position,group.length);
            });
            group.suggestions.forEach((suggestion : any) =>  {
                fixGroup.addSuggestion(suggestion);
            });
        });
    }
    _inStaticContext() : boolean {
        if (this.node.getAncestor((node : any) =>  {
            return is(node, any);
        }) != null) {
            return true;
        }
        if (this.node.getAncestor((node : any) =>  {
            return is(node, any);
        }) != null) {
            return true;
        }
        let method : any = this.node.getAncestor((node : any) =>  {
            return is(node, any);
        });
        return method != null && method.isStatic;
    }
    _isAwaitNode() : boolean {
        let node : any = this.node;
        return is(node, any) && op(Op.EQUALS,node.name,'await');
    }
    _isLibSrcPath(path : string) : boolean {
        let parts : core.DartList<string> = this.resourceProvider.pathContext.split(path);
        for(let i : number = 0; i < parts.length - 2; i++){
            if (parts[i] == 'lib' && parts[i + 1] == 'src') {
                return true;
            }
        }
        return false;
    }
    _isSourceVisibleToLibrary(source : any) : boolean {
        if (!source.uri.isScheme('file')) {
            return true;
        }
        let packageRoot : any;
        for(let folder : any = this.unitLibraryFolder; folder != null; folder = folder.parent){
            if (folder.getChildAssumingFile('pubspec.yaml').exists || folder.getChildAssumingFile('BUILD').exists) {
                packageRoot = folder;
                break;
            }
        }
        if (op(Op.EQUALS,packageRoot,null)) {
            return true;
        }
        return this.resourceProvider.pathContext.isWithin(packageRoot.path,source.fullName);
    }
    _modificationStamp(filePath : string) : number {
        return this.driver.fsState.getFileForPath(filePath).exists ? 0 : -1;
    }
    _removeEnclosingParentheses(expr : any,exprPrecedence : number) : void {
        while (is(expr.parent, any)){
            let parenthesized : any = expr.parent as any;
            if (op(Op.GT,getExpressionParentPrecedence(parenthesized),exprPrecedence)) {
                break;
            }
            this._addRemoveEdit(range.token(parenthesized.leftParenthesis));
            this._addRemoveEdit(range.token(parenthesized.rightParenthesis));
            expr = parenthesized;
        }
    }
    _replaceReturnTypeWithFuture(node : any,typeProvider : any) : void {
        for(; node != null; node = node.parent){
            if (is(node, any)) {
                this._replaceTypeWithFuture(node.returnType,typeProvider);
                return;
            }else if (is(node, any)) {
                this._replaceTypeWithFuture(node.returnType,typeProvider);
                return;
            }
        }
    }
    _replaceTypeWithFuture(typeName : any,typeProvider : any) : void {
        let futureType : any = typeProvider.futureType;
        let type : any = ((t)=>(!!t)?t.type:null)(typeName);
        if (op(Op.EQUALS,type,null) || type.isDynamic || is(type, any) && op(Op.EQUALS,type.element,futureType.element)) {
            return;
        }
        let futureTypeCode : string = this.utils.getTypeSource(futureType,this.librariesToImport);
        let nodeCode : string = this.utils.getNodeText(typeName);
        let returnTypeCode : string;
        if (nodeCode == 'void') {
            returnTypeCode = futureTypeCode;
        }else {
            returnTypeCode = `${futureTypeCode}<${nodeCode}>`;
        }
        this._addReplaceEdit(range.node(typeName),returnTypeCode);
    }
    _updateFinderWithClassMembers(finder : _ClosestElementFinder,clazz : any) : void {
        if (clazz != null) {
            let members : core.DartList<any> = getMembers(clazz);
            finder._updateList(members);
        }
    }
    static _addSuperTypeProposals(sb : any,type : any,alreadyAdded? : core.DartSet<any>) : void {
        alreadyAdded = ( alreadyAdded ) || ( new core.DartSet<any>() );
        if (is(type, any) && alreadyAdded.add(type)) {
            sb.addSuggestion(LinkedEditSuggestionKind.TYPE,type.displayName);
            FixProcessor._addSuperTypeProposals(sb,type.superclass,alreadyAdded);
            for(let interfaceType of type.interfaces) {
                FixProcessor._addSuperTypeProposals(sb,interfaceType,alreadyAdded);
            }
        }
    }
    static _getArgumentNameSuggestions(excluded : core.DartSet<string>,type : any,expression : any,index : number) : core.DartList<string> {
        let suggestions : core.DartList<string> = getVariableNameSuggestionsForExpression(type,expression,excluded);
        if (suggestions.length != 0) {
            return suggestions;
        }
        return new core.DartList.literal<string>(`arg${index}`);
    }
    static _isNameOfType(name : string) : boolean {
        if (new core.DartString(name).isEmpty) {
            return false;
        }
        let firstLetter : string = new core.DartString(name).substring(0,1);
        if (new core.DartString(firstLetter).toUpperCase() != firstLetter) {
            return false;
        }
        return true;
    }
    static _mayBeTypeIdentifier(node : any) : boolean {
        if (is(node, any)) {
            let parent : any = node.parent;
            if (is(parent, any)) {
                return true;
            }
            return FixProcessor._isNameOfType(node.name);
        }
        return false;
    }
}

export namespace LintNames {
    export type Constructors = 'LintNames';
    export type Interface = Omit<LintNames, Constructors>;
}
@DartClass
export class LintNames {
    private static __$annotate_overrides : string;
    static get annotate_overrides() : string { 
        if (this.__$annotate_overrides===undefined) {
            this.__$annotate_overrides = 'annotate_overrides';
        }
        return this.__$annotate_overrides;
    }

    private static __$avoid_annotating_with_dynamic : string;
    static get avoid_annotating_with_dynamic() : string { 
        if (this.__$avoid_annotating_with_dynamic===undefined) {
            this.__$avoid_annotating_with_dynamic = 'avoid_annotating_with_dynamic';
        }
        return this.__$avoid_annotating_with_dynamic;
    }

    private static __$avoid_init_to_null : string;
    static get avoid_init_to_null() : string { 
        if (this.__$avoid_init_to_null===undefined) {
            this.__$avoid_init_to_null = 'avoid_init_to_null';
        }
        return this.__$avoid_init_to_null;
    }

    private static __$avoid_return_types_on_setters : string;
    static get avoid_return_types_on_setters() : string { 
        if (this.__$avoid_return_types_on_setters===undefined) {
            this.__$avoid_return_types_on_setters = 'avoid_return_types_on_setters';
        }
        return this.__$avoid_return_types_on_setters;
    }

    private static __$avoid_types_on_closure_parameters : string;
    static get avoid_types_on_closure_parameters() : string { 
        if (this.__$avoid_types_on_closure_parameters===undefined) {
            this.__$avoid_types_on_closure_parameters = 'avoid_types_on_closure_parameters';
        }
        return this.__$avoid_types_on_closure_parameters;
    }

    private static __$await_only_futures : string;
    static get await_only_futures() : string { 
        if (this.__$await_only_futures===undefined) {
            this.__$await_only_futures = 'await_only_futures';
        }
        return this.__$await_only_futures;
    }

    private static __$empty_statements : string;
    static get empty_statements() : string { 
        if (this.__$empty_statements===undefined) {
            this.__$empty_statements = 'empty_statements';
        }
        return this.__$empty_statements;
    }

    private static __$prefer_collection_literals : string;
    static get prefer_collection_literals() : string { 
        if (this.__$prefer_collection_literals===undefined) {
            this.__$prefer_collection_literals = 'prefer_collection_literals';
        }
        return this.__$prefer_collection_literals;
    }

    private static __$prefer_conditional_assignment : string;
    static get prefer_conditional_assignment() : string { 
        if (this.__$prefer_conditional_assignment===undefined) {
            this.__$prefer_conditional_assignment = 'prefer_conditional_assignment';
        }
        return this.__$prefer_conditional_assignment;
    }

    private static __$unnecessary_brace_in_string_interp : string;
    static get unnecessary_brace_in_string_interp() : string { 
        if (this.__$unnecessary_brace_in_string_interp===undefined) {
            this.__$unnecessary_brace_in_string_interp = 'unnecessary_brace_in_string_interp';
        }
        return this.__$unnecessary_brace_in_string_interp;
    }

    private static __$unnecessary_lambdas : string;
    static get unnecessary_lambdas() : string { 
        if (this.__$unnecessary_lambdas===undefined) {
            this.__$unnecessary_lambdas = 'unnecessary_lambdas';
        }
        return this.__$unnecessary_lambdas;
    }

    private static __$unnecessary_override : string;
    static get unnecessary_override() : string { 
        if (this.__$unnecessary_override===undefined) {
            this.__$unnecessary_override = 'unnecessary_override';
        }
        return this.__$unnecessary_override;
    }

    private static __$unnecessary_this : string;
    static get unnecessary_this() : string { 
        if (this.__$unnecessary_this===undefined) {
            this.__$unnecessary_this = 'unnecessary_this';
        }
        return this.__$unnecessary_this;
    }

    constructor() {
    }
    @defaultConstructor
    LintNames() {
    }
}

export namespace _ClosestElementFinder {
    export type Constructors = '_ClosestElementFinder';
    export type Interface = Omit<_ClosestElementFinder, Constructors>;
}
@DartClass
export class _ClosestElementFinder {
    _targetName : string;

    _predicate : (argument : any) => boolean;

    _element : any;

    _distance : number;

    constructor(_targetName : string,_predicate : (argument : any) => boolean,_distance : number) {
    }
    @defaultConstructor
    _ClosestElementFinder(_targetName : string,_predicate : (argument : any) => boolean,_distance : number) {
        this._element = null;
        this._targetName = _targetName;
        this._predicate = _predicate;
        this._distance = _distance;
    }
    _update(element : any) : void {
        if (this._predicate(element)) {
            let memberDistance : number = levenshtein(element.name,this._targetName,this._distance);
            if (memberDistance < this._distance) {
                this._element = element;
                this._distance = memberDistance;
            }
        }
    }
    _updateList(elements : core.DartIterable<any>) : void {
        for(let element of elements) {
            this._update(element);
        }
    }
}

export class properties {
}
