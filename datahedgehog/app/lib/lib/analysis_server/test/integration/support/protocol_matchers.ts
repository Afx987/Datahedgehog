/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/support/protocol_matchers.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./integration_tests";

export class properties {
    private static __$isSearchResultKind : any;
    static get isSearchResultKind() : any { 
        if (this.__$isSearchResultKind===undefined) {
            this.__$isSearchResultKind = new lib3.MatchesEnum("SearchResultKind",new core.DartList.literal("DECLARATION","INVOCATION","READ","READ_WRITE","REFERENCE","UNKNOWN","WRITE"));
        }
        return this.__$isSearchResultKind;
    }
    static set isSearchResultKind(__$value : any)  { 
        this.__$isSearchResultKind = __$value;
    }

    private static __$isAnalysisError : any;
    static get isAnalysisError() : any { 
        if (this.__$isAnalysisError===undefined) {
            this.__$isAnalysisError = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("AnalysisError",new core.DartMap.literal([
                    ["severity",properties.isAnalysisErrorSeverity],
                    ["type",properties.isAnalysisErrorType],
                    ["location",properties.isLocation],
                    ["message",lib3.properties.isString],
                    ["code",lib3.properties.isString]]),{
                    optionalFields : new core.DartMap.literal([
                        ["correction",lib3.properties.isString],
                        ["hasFix",lib3.properties.isBool]])});
            });
        }
        return this.__$isAnalysisError;
    }
    static set isAnalysisError(__$value : any)  { 
        this.__$isAnalysisError = __$value;
    }

    private static __$isAnalysisErrorFixes : any;
    static get isAnalysisErrorFixes() : any { 
        if (this.__$isAnalysisErrorFixes===undefined) {
            this.__$isAnalysisErrorFixes = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("AnalysisErrorFixes",new core.DartMap.literal([
                    ["error",properties.isAnalysisError],
                    ["fixes",lib3.isListOf(properties.isSourceChange)]]));
            });
        }
        return this.__$isAnalysisErrorFixes;
    }
    static set isAnalysisErrorFixes(__$value : any)  { 
        this.__$isAnalysisErrorFixes = __$value;
    }

    private static __$isAnalysisErrorSeverity : any;
    static get isAnalysisErrorSeverity() : any { 
        if (this.__$isAnalysisErrorSeverity===undefined) {
            this.__$isAnalysisErrorSeverity = new lib3.MatchesEnum("AnalysisErrorSeverity",new core.DartList.literal("INFO","WARNING","ERROR"));
        }
        return this.__$isAnalysisErrorSeverity;
    }
    static set isAnalysisErrorSeverity(__$value : any)  { 
        this.__$isAnalysisErrorSeverity = __$value;
    }

    private static __$isAnalysisErrorType : any;
    static get isAnalysisErrorType() : any { 
        if (this.__$isAnalysisErrorType===undefined) {
            this.__$isAnalysisErrorType = new lib3.MatchesEnum("AnalysisErrorType",new core.DartList.literal("CHECKED_MODE_COMPILE_TIME_ERROR","COMPILE_TIME_ERROR","HINT","LINT","STATIC_TYPE_WARNING","STATIC_WARNING","SYNTACTIC_ERROR","TODO"));
        }
        return this.__$isAnalysisErrorType;
    }
    static set isAnalysisErrorType(__$value : any)  { 
        this.__$isAnalysisErrorType = __$value;
    }

    private static __$isAnalysisOptions : any;
    static get isAnalysisOptions() : any { 
        if (this.__$isAnalysisOptions===undefined) {
            this.__$isAnalysisOptions = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("AnalysisOptions",null,{
                    optionalFields : new core.DartMap.literal([
                        ["enableAsync",lib3.properties.isBool],
                        ["enableDeferredLoading",lib3.properties.isBool],
                        ["enableEnums",lib3.properties.isBool],
                        ["enableNullAwareOperators",lib3.properties.isBool],
                        ["enableSuperMixins",lib3.properties.isBool],
                        ["generateDart2jsHints",lib3.properties.isBool],
                        ["generateHints",lib3.properties.isBool],
                        ["generateLints",lib3.properties.isBool]])});
            });
        }
        return this.__$isAnalysisOptions;
    }
    static set isAnalysisOptions(__$value : any)  { 
        this.__$isAnalysisOptions = __$value;
    }

    private static __$isAnalysisService : any;
    static get isAnalysisService() : any { 
        if (this.__$isAnalysisService===undefined) {
            this.__$isAnalysisService = new lib3.MatchesEnum("AnalysisService",new core.DartList.literal("FOLDING","HIGHLIGHTS","IMPLEMENTED","INVALIDATE","NAVIGATION","OCCURRENCES","OUTLINE","OVERRIDES"));
        }
        return this.__$isAnalysisService;
    }
    static set isAnalysisService(__$value : any)  { 
        this.__$isAnalysisService = __$value;
    }

    private static __$isAnalysisStatus : any;
    static get isAnalysisStatus() : any { 
        if (this.__$isAnalysisStatus===undefined) {
            this.__$isAnalysisStatus = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("AnalysisStatus",new core.DartMap.literal([
                    ["isAnalyzing",lib3.properties.isBool]]),{
                    optionalFields : new core.DartMap.literal([
                        ["analysisTarget",lib3.properties.isString]])});
            });
        }
        return this.__$isAnalysisStatus;
    }
    static set isAnalysisStatus(__$value : any)  { 
        this.__$isAnalysisStatus = __$value;
    }

    private static __$isChangeContentOverlay : any;
    static get isChangeContentOverlay() : any { 
        if (this.__$isChangeContentOverlay===undefined) {
            this.__$isChangeContentOverlay = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("ChangeContentOverlay",new core.DartMap.literal([
                    ["type",equals("change")],
                    ["edits",lib3.isListOf(properties.isSourceEdit)]]));
            });
        }
        return this.__$isChangeContentOverlay;
    }
    static set isChangeContentOverlay(__$value : any)  { 
        this.__$isChangeContentOverlay = __$value;
    }

    private static __$isCompletionId : any;
    static get isCompletionId() : any { 
        if (this.__$isCompletionId===undefined) {
            this.__$isCompletionId = lib3.properties.isString;
        }
        return this.__$isCompletionId;
    }
    static set isCompletionId(__$value : any)  { 
        this.__$isCompletionId = __$value;
    }

    private static __$isCompletionSuggestion : any;
    static get isCompletionSuggestion() : any { 
        if (this.__$isCompletionSuggestion===undefined) {
            this.__$isCompletionSuggestion = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("CompletionSuggestion",new core.DartMap.literal([
                    ["kind",properties.isCompletionSuggestionKind],
                    ["relevance",lib3.properties.isInt],
                    ["completion",lib3.properties.isString],
                    ["selectionOffset",lib3.properties.isInt],
                    ["selectionLength",lib3.properties.isInt],
                    ["isDeprecated",lib3.properties.isBool],
                    ["isPotential",lib3.properties.isBool]]),{
                    optionalFields : new core.DartMap.literal([
                        ["docSummary",lib3.properties.isString],
                        ["docComplete",lib3.properties.isString],
                        ["declaringType",lib3.properties.isString],
                        ["defaultArgumentListString",lib3.properties.isString],
                        ["defaultArgumentListTextRanges",lib3.isListOf(lib3.properties.isInt)],
                        ["element",properties.isElement],
                        ["returnType",lib3.properties.isString],
                        ["parameterNames",lib3.isListOf(lib3.properties.isString)],
                        ["parameterTypes",lib3.isListOf(lib3.properties.isString)],
                        ["requiredParameterCount",lib3.properties.isInt],
                        ["hasNamedParameters",lib3.properties.isBool],
                        ["parameterName",lib3.properties.isString],
                        ["parameterType",lib3.properties.isString],
                        ["importUri",lib3.properties.isString]])});
            });
        }
        return this.__$isCompletionSuggestion;
    }
    static set isCompletionSuggestion(__$value : any)  { 
        this.__$isCompletionSuggestion = __$value;
    }

    private static __$isCompletionSuggestionKind : any;
    static get isCompletionSuggestionKind() : any { 
        if (this.__$isCompletionSuggestionKind===undefined) {
            this.__$isCompletionSuggestionKind = new lib3.MatchesEnum("CompletionSuggestionKind",new core.DartList.literal("ARGUMENT_LIST","IMPORT","IDENTIFIER","INVOCATION","KEYWORD","NAMED_ARGUMENT","OPTIONAL_ARGUMENT","PARAMETER"));
        }
        return this.__$isCompletionSuggestionKind;
    }
    static set isCompletionSuggestionKind(__$value : any)  { 
        this.__$isCompletionSuggestionKind = __$value;
    }

    private static __$isContextData : any;
    static get isContextData() : any { 
        if (this.__$isContextData===undefined) {
            this.__$isContextData = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("ContextData",new core.DartMap.literal([
                    ["name",lib3.properties.isString],
                    ["explicitFileCount",lib3.properties.isInt],
                    ["implicitFileCount",lib3.properties.isInt],
                    ["workItemQueueLength",lib3.properties.isInt],
                    ["cacheEntryExceptions",lib3.isListOf(lib3.properties.isString)]]));
            });
        }
        return this.__$isContextData;
    }
    static set isContextData(__$value : any)  { 
        this.__$isContextData = __$value;
    }

    private static __$isElement : any;
    static get isElement() : any { 
        if (this.__$isElement===undefined) {
            this.__$isElement = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("Element",new core.DartMap.literal([
                    ["kind",properties.isElementKind],
                    ["name",lib3.properties.isString],
                    ["flags",lib3.properties.isInt]]),{
                    optionalFields : new core.DartMap.literal([
                        ["location",properties.isLocation],
                        ["parameters",lib3.properties.isString],
                        ["returnType",lib3.properties.isString],
                        ["typeParameters",lib3.properties.isString]])});
            });
        }
        return this.__$isElement;
    }
    static set isElement(__$value : any)  { 
        this.__$isElement = __$value;
    }

    private static __$isElementKind : any;
    static get isElementKind() : any { 
        if (this.__$isElementKind===undefined) {
            this.__$isElementKind = new lib3.MatchesEnum("ElementKind",new core.DartList.literal("CLASS","CLASS_TYPE_ALIAS","COMPILATION_UNIT","CONSTRUCTOR","ENUM","ENUM_CONSTANT","FIELD","FILE","FUNCTION","FUNCTION_TYPE_ALIAS","GETTER","LABEL","LIBRARY","LOCAL_VARIABLE","METHOD","PARAMETER","PREFIX","SETTER","TOP_LEVEL_VARIABLE","TYPE_PARAMETER","UNIT_TEST_GROUP","UNIT_TEST_TEST","UNKNOWN"));
        }
        return this.__$isElementKind;
    }
    static set isElementKind(__$value : any)  { 
        this.__$isElementKind = __$value;
    }

    private static __$isExecutableFile : any;
    static get isExecutableFile() : any { 
        if (this.__$isExecutableFile===undefined) {
            this.__$isExecutableFile = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("ExecutableFile",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["kind",properties.isExecutableKind]]));
            });
        }
        return this.__$isExecutableFile;
    }
    static set isExecutableFile(__$value : any)  { 
        this.__$isExecutableFile = __$value;
    }

    private static __$isExecutableKind : any;
    static get isExecutableKind() : any { 
        if (this.__$isExecutableKind===undefined) {
            this.__$isExecutableKind = new lib3.MatchesEnum("ExecutableKind",new core.DartList.literal("CLIENT","EITHER","NOT_EXECUTABLE","SERVER"));
        }
        return this.__$isExecutableKind;
    }
    static set isExecutableKind(__$value : any)  { 
        this.__$isExecutableKind = __$value;
    }

    private static __$isExecutionContextId : any;
    static get isExecutionContextId() : any { 
        if (this.__$isExecutionContextId===undefined) {
            this.__$isExecutionContextId = lib3.properties.isString;
        }
        return this.__$isExecutionContextId;
    }
    static set isExecutionContextId(__$value : any)  { 
        this.__$isExecutionContextId = __$value;
    }

    private static __$isExecutionService : any;
    static get isExecutionService() : any { 
        if (this.__$isExecutionService===undefined) {
            this.__$isExecutionService = new lib3.MatchesEnum("ExecutionService",new core.DartList.literal("LAUNCH_DATA"));
        }
        return this.__$isExecutionService;
    }
    static set isExecutionService(__$value : any)  { 
        this.__$isExecutionService = __$value;
    }

    private static __$isFileKind : any;
    static get isFileKind() : any { 
        if (this.__$isFileKind===undefined) {
            this.__$isFileKind = new lib3.MatchesEnum("FileKind",new core.DartList.literal("LIBRARY","PART"));
        }
        return this.__$isFileKind;
    }
    static set isFileKind(__$value : any)  { 
        this.__$isFileKind = __$value;
    }

    private static __$isFilePath : any;
    static get isFilePath() : any { 
        if (this.__$isFilePath===undefined) {
            this.__$isFilePath = lib3.properties.isString;
        }
        return this.__$isFilePath;
    }
    static set isFilePath(__$value : any)  { 
        this.__$isFilePath = __$value;
    }

    private static __$isFoldingKind : any;
    static get isFoldingKind() : any { 
        if (this.__$isFoldingKind===undefined) {
            this.__$isFoldingKind = new lib3.MatchesEnum("FoldingKind",new core.DartList.literal("COMMENT","CLASS_MEMBER","DIRECTIVES","DOCUMENTATION_COMMENT","TOP_LEVEL_DECLARATION"));
        }
        return this.__$isFoldingKind;
    }
    static set isFoldingKind(__$value : any)  { 
        this.__$isFoldingKind = __$value;
    }

    private static __$isFoldingRegion : any;
    static get isFoldingRegion() : any { 
        if (this.__$isFoldingRegion===undefined) {
            this.__$isFoldingRegion = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("FoldingRegion",new core.DartMap.literal([
                    ["kind",properties.isFoldingKind],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]));
            });
        }
        return this.__$isFoldingRegion;
    }
    static set isFoldingRegion(__$value : any)  { 
        this.__$isFoldingRegion = __$value;
    }

    private static __$isGeneralAnalysisService : any;
    static get isGeneralAnalysisService() : any { 
        if (this.__$isGeneralAnalysisService===undefined) {
            this.__$isGeneralAnalysisService = new lib3.MatchesEnum("GeneralAnalysisService",new core.DartList.literal("ANALYZED_FILES"));
        }
        return this.__$isGeneralAnalysisService;
    }
    static set isGeneralAnalysisService(__$value : any)  { 
        this.__$isGeneralAnalysisService = __$value;
    }

    private static __$isHighlightRegion : any;
    static get isHighlightRegion() : any { 
        if (this.__$isHighlightRegion===undefined) {
            this.__$isHighlightRegion = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("HighlightRegion",new core.DartMap.literal([
                    ["type",properties.isHighlightRegionType],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]));
            });
        }
        return this.__$isHighlightRegion;
    }
    static set isHighlightRegion(__$value : any)  { 
        this.__$isHighlightRegion = __$value;
    }

    private static __$isHighlightRegionType : any;
    static get isHighlightRegionType() : any { 
        if (this.__$isHighlightRegionType===undefined) {
            this.__$isHighlightRegionType = new lib3.MatchesEnum("HighlightRegionType",new core.DartList.literal("ANNOTATION","BUILT_IN","CLASS","COMMENT_BLOCK","COMMENT_DOCUMENTATION","COMMENT_END_OF_LINE","CONSTRUCTOR","DIRECTIVE","DYNAMIC_TYPE","DYNAMIC_LOCAL_VARIABLE_DECLARATION","DYNAMIC_LOCAL_VARIABLE_REFERENCE","DYNAMIC_PARAMETER_DECLARATION","DYNAMIC_PARAMETER_REFERENCE","ENUM","ENUM_CONSTANT","FIELD","FIELD_STATIC","FUNCTION","FUNCTION_DECLARATION","FUNCTION_TYPE_ALIAS","GETTER_DECLARATION","IDENTIFIER_DEFAULT","IMPORT_PREFIX","INSTANCE_FIELD_DECLARATION","INSTANCE_FIELD_REFERENCE","INSTANCE_GETTER_DECLARATION","INSTANCE_GETTER_REFERENCE","INSTANCE_METHOD_DECLARATION","INSTANCE_METHOD_REFERENCE","INSTANCE_SETTER_DECLARATION","INSTANCE_SETTER_REFERENCE","INVALID_STRING_ESCAPE","KEYWORD","LABEL","LIBRARY_NAME","LITERAL_BOOLEAN","LITERAL_DOUBLE","LITERAL_INTEGER","LITERAL_LIST","LITERAL_MAP","LITERAL_STRING","LOCAL_FUNCTION_DECLARATION","LOCAL_FUNCTION_REFERENCE","LOCAL_VARIABLE","LOCAL_VARIABLE_DECLARATION","LOCAL_VARIABLE_REFERENCE","METHOD","METHOD_DECLARATION","METHOD_DECLARATION_STATIC","METHOD_STATIC","PARAMETER","SETTER_DECLARATION","TOP_LEVEL_VARIABLE","PARAMETER_DECLARATION","PARAMETER_REFERENCE","STATIC_FIELD_DECLARATION","STATIC_GETTER_DECLARATION","STATIC_GETTER_REFERENCE","STATIC_METHOD_DECLARATION","STATIC_METHOD_REFERENCE","STATIC_SETTER_DECLARATION","STATIC_SETTER_REFERENCE","TOP_LEVEL_FUNCTION_DECLARATION","TOP_LEVEL_FUNCTION_REFERENCE","TOP_LEVEL_GETTER_DECLARATION","TOP_LEVEL_GETTER_REFERENCE","TOP_LEVEL_SETTER_DECLARATION","TOP_LEVEL_SETTER_REFERENCE","TOP_LEVEL_VARIABLE_DECLARATION","TYPE_NAME_DYNAMIC","TYPE_PARAMETER","UNRESOLVED_INSTANCE_MEMBER_REFERENCE","VALID_STRING_ESCAPE"));
        }
        return this.__$isHighlightRegionType;
    }
    static set isHighlightRegionType(__$value : any)  { 
        this.__$isHighlightRegionType = __$value;
    }

    private static __$isHoverInformation : any;
    static get isHoverInformation() : any { 
        if (this.__$isHoverInformation===undefined) {
            this.__$isHoverInformation = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("HoverInformation",new core.DartMap.literal([
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]),{
                    optionalFields : new core.DartMap.literal([
                        ["containingLibraryPath",lib3.properties.isString],
                        ["containingLibraryName",lib3.properties.isString],
                        ["containingClassDescription",lib3.properties.isString],
                        ["dartdoc",lib3.properties.isString],
                        ["elementDescription",lib3.properties.isString],
                        ["elementKind",lib3.properties.isString],
                        ["isDeprecated",lib3.properties.isBool],
                        ["parameter",lib3.properties.isString],
                        ["propagatedType",lib3.properties.isString],
                        ["staticType",lib3.properties.isString]])});
            });
        }
        return this.__$isHoverInformation;
    }
    static set isHoverInformation(__$value : any)  { 
        this.__$isHoverInformation = __$value;
    }

    private static __$isImplementedClass : any;
    static get isImplementedClass() : any { 
        if (this.__$isImplementedClass===undefined) {
            this.__$isImplementedClass = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("ImplementedClass",new core.DartMap.literal([
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]));
            });
        }
        return this.__$isImplementedClass;
    }
    static set isImplementedClass(__$value : any)  { 
        this.__$isImplementedClass = __$value;
    }

    private static __$isImplementedMember : any;
    static get isImplementedMember() : any { 
        if (this.__$isImplementedMember===undefined) {
            this.__$isImplementedMember = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("ImplementedMember",new core.DartMap.literal([
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]));
            });
        }
        return this.__$isImplementedMember;
    }
    static set isImplementedMember(__$value : any)  { 
        this.__$isImplementedMember = __$value;
    }

    private static __$isLinkedEditGroup : any;
    static get isLinkedEditGroup() : any { 
        if (this.__$isLinkedEditGroup===undefined) {
            this.__$isLinkedEditGroup = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("LinkedEditGroup",new core.DartMap.literal([
                    ["positions",lib3.isListOf(properties.isPosition)],
                    ["length",lib3.properties.isInt],
                    ["suggestions",lib3.isListOf(properties.isLinkedEditSuggestion)]]));
            });
        }
        return this.__$isLinkedEditGroup;
    }
    static set isLinkedEditGroup(__$value : any)  { 
        this.__$isLinkedEditGroup = __$value;
    }

    private static __$isLinkedEditSuggestion : any;
    static get isLinkedEditSuggestion() : any { 
        if (this.__$isLinkedEditSuggestion===undefined) {
            this.__$isLinkedEditSuggestion = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("LinkedEditSuggestion",new core.DartMap.literal([
                    ["value",lib3.properties.isString],
                    ["kind",properties.isLinkedEditSuggestionKind]]));
            });
        }
        return this.__$isLinkedEditSuggestion;
    }
    static set isLinkedEditSuggestion(__$value : any)  { 
        this.__$isLinkedEditSuggestion = __$value;
    }

    private static __$isLinkedEditSuggestionKind : any;
    static get isLinkedEditSuggestionKind() : any { 
        if (this.__$isLinkedEditSuggestionKind===undefined) {
            this.__$isLinkedEditSuggestionKind = new lib3.MatchesEnum("LinkedEditSuggestionKind",new core.DartList.literal("METHOD","PARAMETER","TYPE","VARIABLE"));
        }
        return this.__$isLinkedEditSuggestionKind;
    }
    static set isLinkedEditSuggestionKind(__$value : any)  { 
        this.__$isLinkedEditSuggestionKind = __$value;
    }

    private static __$isLocation : any;
    static get isLocation() : any { 
        if (this.__$isLocation===undefined) {
            this.__$isLocation = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("Location",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt],
                    ["startLine",lib3.properties.isInt],
                    ["startColumn",lib3.properties.isInt]]));
            });
        }
        return this.__$isLocation;
    }
    static set isLocation(__$value : any)  { 
        this.__$isLocation = __$value;
    }

    private static __$isNavigationRegion : any;
    static get isNavigationRegion() : any { 
        if (this.__$isNavigationRegion===undefined) {
            this.__$isNavigationRegion = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("NavigationRegion",new core.DartMap.literal([
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt],
                    ["targets",lib3.isListOf(lib3.properties.isInt)]]));
            });
        }
        return this.__$isNavigationRegion;
    }
    static set isNavigationRegion(__$value : any)  { 
        this.__$isNavigationRegion = __$value;
    }

    private static __$isNavigationTarget : any;
    static get isNavigationTarget() : any { 
        if (this.__$isNavigationTarget===undefined) {
            this.__$isNavigationTarget = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("NavigationTarget",new core.DartMap.literal([
                    ["kind",properties.isElementKind],
                    ["fileIndex",lib3.properties.isInt],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt],
                    ["startLine",lib3.properties.isInt],
                    ["startColumn",lib3.properties.isInt]]));
            });
        }
        return this.__$isNavigationTarget;
    }
    static set isNavigationTarget(__$value : any)  { 
        this.__$isNavigationTarget = __$value;
    }

    private static __$isOccurrences : any;
    static get isOccurrences() : any { 
        if (this.__$isOccurrences===undefined) {
            this.__$isOccurrences = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("Occurrences",new core.DartMap.literal([
                    ["element",properties.isElement],
                    ["offsets",lib3.isListOf(lib3.properties.isInt)],
                    ["length",lib3.properties.isInt]]));
            });
        }
        return this.__$isOccurrences;
    }
    static set isOccurrences(__$value : any)  { 
        this.__$isOccurrences = __$value;
    }

    private static __$isOutline : any;
    static get isOutline() : any { 
        if (this.__$isOutline===undefined) {
            this.__$isOutline = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("Outline",new core.DartMap.literal([
                    ["element",properties.isElement],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]),{
                    optionalFields : new core.DartMap.literal([
                        ["children",lib3.isListOf(properties.isOutline)]])});
            });
        }
        return this.__$isOutline;
    }
    static set isOutline(__$value : any)  { 
        this.__$isOutline = __$value;
    }

    private static __$isOverriddenMember : any;
    static get isOverriddenMember() : any { 
        if (this.__$isOverriddenMember===undefined) {
            this.__$isOverriddenMember = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("OverriddenMember",new core.DartMap.literal([
                    ["element",properties.isElement],
                    ["className",lib3.properties.isString]]));
            });
        }
        return this.__$isOverriddenMember;
    }
    static set isOverriddenMember(__$value : any)  { 
        this.__$isOverriddenMember = __$value;
    }

    private static __$isOverride : any;
    static get isOverride() : any { 
        if (this.__$isOverride===undefined) {
            this.__$isOverride = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("Override",new core.DartMap.literal([
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]),{
                    optionalFields : new core.DartMap.literal([
                        ["superclassMember",properties.isOverriddenMember],
                        ["interfaceMembers",lib3.isListOf(properties.isOverriddenMember)]])});
            });
        }
        return this.__$isOverride;
    }
    static set isOverride(__$value : any)  { 
        this.__$isOverride = __$value;
    }

    private static __$isPosition : any;
    static get isPosition() : any { 
        if (this.__$isPosition===undefined) {
            this.__$isPosition = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("Position",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt]]));
            });
        }
        return this.__$isPosition;
    }
    static set isPosition(__$value : any)  { 
        this.__$isPosition = __$value;
    }

    private static __$isPubStatus : any;
    static get isPubStatus() : any { 
        if (this.__$isPubStatus===undefined) {
            this.__$isPubStatus = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("PubStatus",new core.DartMap.literal([
                    ["isListingPackageDirs",lib3.properties.isBool]]));
            });
        }
        return this.__$isPubStatus;
    }
    static set isPubStatus(__$value : any)  { 
        this.__$isPubStatus = __$value;
    }

    private static __$isRefactoringFeedback : any;
    static get isRefactoringFeedback() : any { 
        if (this.__$isRefactoringFeedback===undefined) {
            this.__$isRefactoringFeedback = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("RefactoringFeedback",null);
            });
        }
        return this.__$isRefactoringFeedback;
    }
    static set isRefactoringFeedback(__$value : any)  { 
        this.__$isRefactoringFeedback = __$value;
    }

    private static __$isRefactoringKind : any;
    static get isRefactoringKind() : any { 
        if (this.__$isRefactoringKind===undefined) {
            this.__$isRefactoringKind = new lib3.MatchesEnum("RefactoringKind",new core.DartList.literal("CONVERT_GETTER_TO_METHOD","CONVERT_METHOD_TO_GETTER","EXTRACT_LOCAL_VARIABLE","EXTRACT_METHOD","INLINE_LOCAL_VARIABLE","INLINE_METHOD","MOVE_FILE","RENAME","SORT_MEMBERS"));
        }
        return this.__$isRefactoringKind;
    }
    static set isRefactoringKind(__$value : any)  { 
        this.__$isRefactoringKind = __$value;
    }

    private static __$isRefactoringMethodParameter : any;
    static get isRefactoringMethodParameter() : any { 
        if (this.__$isRefactoringMethodParameter===undefined) {
            this.__$isRefactoringMethodParameter = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("RefactoringMethodParameter",new core.DartMap.literal([
                    ["kind",properties.isRefactoringMethodParameterKind],
                    ["type",lib3.properties.isString],
                    ["name",lib3.properties.isString]]),{
                    optionalFields : new core.DartMap.literal([
                        ["id",lib3.properties.isString],
                        ["parameters",lib3.properties.isString]])});
            });
        }
        return this.__$isRefactoringMethodParameter;
    }
    static set isRefactoringMethodParameter(__$value : any)  { 
        this.__$isRefactoringMethodParameter = __$value;
    }

    private static __$isRefactoringMethodParameterKind : any;
    static get isRefactoringMethodParameterKind() : any { 
        if (this.__$isRefactoringMethodParameterKind===undefined) {
            this.__$isRefactoringMethodParameterKind = new lib3.MatchesEnum("RefactoringMethodParameterKind",new core.DartList.literal("REQUIRED","POSITIONAL","NAMED"));
        }
        return this.__$isRefactoringMethodParameterKind;
    }
    static set isRefactoringMethodParameterKind(__$value : any)  { 
        this.__$isRefactoringMethodParameterKind = __$value;
    }

    private static __$isRefactoringOptions : any;
    static get isRefactoringOptions() : any { 
        if (this.__$isRefactoringOptions===undefined) {
            this.__$isRefactoringOptions = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("RefactoringOptions",null);
            });
        }
        return this.__$isRefactoringOptions;
    }
    static set isRefactoringOptions(__$value : any)  { 
        this.__$isRefactoringOptions = __$value;
    }

    private static __$isRefactoringProblem : any;
    static get isRefactoringProblem() : any { 
        if (this.__$isRefactoringProblem===undefined) {
            this.__$isRefactoringProblem = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("RefactoringProblem",new core.DartMap.literal([
                    ["severity",properties.isRefactoringProblemSeverity],
                    ["message",lib3.properties.isString]]),{
                    optionalFields : new core.DartMap.literal([
                        ["location",properties.isLocation]])});
            });
        }
        return this.__$isRefactoringProblem;
    }
    static set isRefactoringProblem(__$value : any)  { 
        this.__$isRefactoringProblem = __$value;
    }

    private static __$isRefactoringProblemSeverity : any;
    static get isRefactoringProblemSeverity() : any { 
        if (this.__$isRefactoringProblemSeverity===undefined) {
            this.__$isRefactoringProblemSeverity = new lib3.MatchesEnum("RefactoringProblemSeverity",new core.DartList.literal("INFO","WARNING","ERROR","FATAL"));
        }
        return this.__$isRefactoringProblemSeverity;
    }
    static set isRefactoringProblemSeverity(__$value : any)  { 
        this.__$isRefactoringProblemSeverity = __$value;
    }

    private static __$isRemoveContentOverlay : any;
    static get isRemoveContentOverlay() : any { 
        if (this.__$isRemoveContentOverlay===undefined) {
            this.__$isRemoveContentOverlay = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("RemoveContentOverlay",new core.DartMap.literal([
                    ["type",equals("remove")]]));
            });
        }
        return this.__$isRemoveContentOverlay;
    }
    static set isRemoveContentOverlay(__$value : any)  { 
        this.__$isRemoveContentOverlay = __$value;
    }

    private static __$isRequestError : any;
    static get isRequestError() : any { 
        if (this.__$isRequestError===undefined) {
            this.__$isRequestError = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("RequestError",new core.DartMap.literal([
                    ["code",properties.isRequestErrorCode],
                    ["message",lib3.properties.isString]]),{
                    optionalFields : new core.DartMap.literal([
                        ["stackTrace",lib3.properties.isString]])});
            });
        }
        return this.__$isRequestError;
    }
    static set isRequestError(__$value : any)  { 
        this.__$isRequestError = __$value;
    }

    private static __$isRequestErrorCode : any;
    static get isRequestErrorCode() : any { 
        if (this.__$isRequestErrorCode===undefined) {
            this.__$isRequestErrorCode = new lib3.MatchesEnum("RequestErrorCode",new core.DartList.literal("CONTENT_MODIFIED","DEBUG_PORT_COULD_NOT_BE_OPENED","FILE_NOT_ANALYZED","FORMAT_INVALID_FILE","FORMAT_WITH_ERRORS","GET_ERRORS_INVALID_FILE","GET_NAVIGATION_INVALID_FILE","GET_REACHABLE_SOURCES_INVALID_FILE","INVALID_ANALYSIS_ROOT","INVALID_EXECUTION_CONTEXT","INVALID_FILE_PATH_FORMAT","INVALID_OVERLAY_CHANGE","INVALID_PARAMETER","INVALID_REQUEST","ORGANIZE_DIRECTIVES_ERROR","REFACTORING_REQUEST_CANCELLED","SERVER_ALREADY_STARTED","SERVER_ERROR","SORT_MEMBERS_INVALID_FILE","SORT_MEMBERS_PARSE_ERRORS","UNANALYZED_PRIORITY_FILES","UNKNOWN_REQUEST","UNKNOWN_SOURCE","UNSUPPORTED_FEATURE"));
        }
        return this.__$isRequestErrorCode;
    }
    static set isRequestErrorCode(__$value : any)  { 
        this.__$isRequestErrorCode = __$value;
    }

    private static __$isSearchId : any;
    static get isSearchId() : any { 
        if (this.__$isSearchId===undefined) {
            this.__$isSearchId = lib3.properties.isString;
        }
        return this.__$isSearchId;
    }
    static set isSearchId(__$value : any)  { 
        this.__$isSearchId = __$value;
    }

    private static __$isSearchResult : any;
    static get isSearchResult() : any { 
        if (this.__$isSearchResult===undefined) {
            this.__$isSearchResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("SearchResult",new core.DartMap.literal([
                    ["location",properties.isLocation],
                    ["kind",properties.isSearchResultKind],
                    ["isPotential",lib3.properties.isBool],
                    ["path",lib3.isListOf(properties.isElement)]]));
            });
        }
        return this.__$isSearchResult;
    }
    static set isSearchResult(__$value : any)  { 
        this.__$isSearchResult = __$value;
    }

    private static __$isAddContentOverlay : any;
    static get isAddContentOverlay() : any { 
        if (this.__$isAddContentOverlay===undefined) {
            this.__$isAddContentOverlay = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("AddContentOverlay",new core.DartMap.literal([
                    ["type",equals("add")],
                    ["content",lib3.properties.isString]]));
            });
        }
        return this.__$isAddContentOverlay;
    }
    static set isAddContentOverlay(__$value : any)  { 
        this.__$isAddContentOverlay = __$value;
    }

    private static __$isServerService : any;
    static get isServerService() : any { 
        if (this.__$isServerService===undefined) {
            this.__$isServerService = new lib3.MatchesEnum("ServerService",new core.DartList.literal("STATUS"));
        }
        return this.__$isServerService;
    }
    static set isServerService(__$value : any)  { 
        this.__$isServerService = __$value;
    }

    private static __$isSourceChange : any;
    static get isSourceChange() : any { 
        if (this.__$isSourceChange===undefined) {
            this.__$isSourceChange = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("SourceChange",new core.DartMap.literal([
                    ["message",lib3.properties.isString],
                    ["edits",lib3.isListOf(properties.isSourceFileEdit)],
                    ["linkedEditGroups",lib3.isListOf(properties.isLinkedEditGroup)]]),{
                    optionalFields : new core.DartMap.literal([
                        ["selection",properties.isPosition]])});
            });
        }
        return this.__$isSourceChange;
    }
    static set isSourceChange(__$value : any)  { 
        this.__$isSourceChange = __$value;
    }

    private static __$isSourceEdit : any;
    static get isSourceEdit() : any { 
        if (this.__$isSourceEdit===undefined) {
            this.__$isSourceEdit = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("SourceEdit",new core.DartMap.literal([
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt],
                    ["replacement",lib3.properties.isString]]),{
                    optionalFields : new core.DartMap.literal([
                        ["id",lib3.properties.isString]])});
            });
        }
        return this.__$isSourceEdit;
    }
    static set isSourceEdit(__$value : any)  { 
        this.__$isSourceEdit = __$value;
    }

    private static __$isSourceFileEdit : any;
    static get isSourceFileEdit() : any { 
        if (this.__$isSourceFileEdit===undefined) {
            this.__$isSourceFileEdit = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("SourceFileEdit",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["fileStamp",lib3.properties.isInt],
                    ["edits",lib3.isListOf(properties.isSourceEdit)]]));
            });
        }
        return this.__$isSourceFileEdit;
    }
    static set isSourceFileEdit(__$value : any)  { 
        this.__$isSourceFileEdit = __$value;
    }

    private static __$isTypeHierarchyItem : any;
    static get isTypeHierarchyItem() : any { 
        if (this.__$isTypeHierarchyItem===undefined) {
            this.__$isTypeHierarchyItem = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("TypeHierarchyItem",new core.DartMap.literal([
                    ["classElement",properties.isElement],
                    ["interfaces",lib3.isListOf(lib3.properties.isInt)],
                    ["mixins",lib3.isListOf(lib3.properties.isInt)],
                    ["subclasses",lib3.isListOf(lib3.properties.isInt)]]),{
                    optionalFields : new core.DartMap.literal([
                        ["displayName",lib3.properties.isString],
                        ["memberElement",properties.isElement],
                        ["superclass",lib3.properties.isInt]])});
            });
        }
        return this.__$isTypeHierarchyItem;
    }
    static set isTypeHierarchyItem(__$value : any)  { 
        this.__$isTypeHierarchyItem = __$value;
    }

    private static __$isAnalysisAnalyzedFilesParams : any;
    static get isAnalysisAnalyzedFilesParams() : any { 
        if (this.__$isAnalysisAnalyzedFilesParams===undefined) {
            this.__$isAnalysisAnalyzedFilesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.analyzedFiles params",new core.DartMap.literal([
                    ["directories",lib3.isListOf(properties.isFilePath)]]));
            });
        }
        return this.__$isAnalysisAnalyzedFilesParams;
    }
    static set isAnalysisAnalyzedFilesParams(__$value : any)  { 
        this.__$isAnalysisAnalyzedFilesParams = __$value;
    }

    private static __$isAnalysisErrorsParams : any;
    static get isAnalysisErrorsParams() : any { 
        if (this.__$isAnalysisErrorsParams===undefined) {
            this.__$isAnalysisErrorsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.errors params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["errors",lib3.isListOf(properties.isAnalysisError)]]));
            });
        }
        return this.__$isAnalysisErrorsParams;
    }
    static set isAnalysisErrorsParams(__$value : any)  { 
        this.__$isAnalysisErrorsParams = __$value;
    }

    private static __$isAnalysisFlushResultsParams : any;
    static get isAnalysisFlushResultsParams() : any { 
        if (this.__$isAnalysisFlushResultsParams===undefined) {
            this.__$isAnalysisFlushResultsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.flushResults params",new core.DartMap.literal([
                    ["files",lib3.isListOf(properties.isFilePath)]]));
            });
        }
        return this.__$isAnalysisFlushResultsParams;
    }
    static set isAnalysisFlushResultsParams(__$value : any)  { 
        this.__$isAnalysisFlushResultsParams = __$value;
    }

    private static __$isAnalysisFoldingParams : any;
    static get isAnalysisFoldingParams() : any { 
        if (this.__$isAnalysisFoldingParams===undefined) {
            this.__$isAnalysisFoldingParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.folding params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["regions",lib3.isListOf(properties.isFoldingRegion)]]));
            });
        }
        return this.__$isAnalysisFoldingParams;
    }
    static set isAnalysisFoldingParams(__$value : any)  { 
        this.__$isAnalysisFoldingParams = __$value;
    }

    private static __$isAnalysisGetErrorsParams : any;
    static get isAnalysisGetErrorsParams() : any { 
        if (this.__$isAnalysisGetErrorsParams===undefined) {
            this.__$isAnalysisGetErrorsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getErrors params",new core.DartMap.literal([
                    ["file",properties.isFilePath]]));
            });
        }
        return this.__$isAnalysisGetErrorsParams;
    }
    static set isAnalysisGetErrorsParams(__$value : any)  { 
        this.__$isAnalysisGetErrorsParams = __$value;
    }

    private static __$isAnalysisGetErrorsResult : any;
    static get isAnalysisGetErrorsResult() : any { 
        if (this.__$isAnalysisGetErrorsResult===undefined) {
            this.__$isAnalysisGetErrorsResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getErrors result",new core.DartMap.literal([
                    ["errors",lib3.isListOf(properties.isAnalysisError)]]));
            });
        }
        return this.__$isAnalysisGetErrorsResult;
    }
    static set isAnalysisGetErrorsResult(__$value : any)  { 
        this.__$isAnalysisGetErrorsResult = __$value;
    }

    private static __$isAnalysisGetHoverParams : any;
    static get isAnalysisGetHoverParams() : any { 
        if (this.__$isAnalysisGetHoverParams===undefined) {
            this.__$isAnalysisGetHoverParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getHover params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt]]));
            });
        }
        return this.__$isAnalysisGetHoverParams;
    }
    static set isAnalysisGetHoverParams(__$value : any)  { 
        this.__$isAnalysisGetHoverParams = __$value;
    }

    private static __$isAnalysisGetHoverResult : any;
    static get isAnalysisGetHoverResult() : any { 
        if (this.__$isAnalysisGetHoverResult===undefined) {
            this.__$isAnalysisGetHoverResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getHover result",new core.DartMap.literal([
                    ["hovers",lib3.isListOf(properties.isHoverInformation)]]));
            });
        }
        return this.__$isAnalysisGetHoverResult;
    }
    static set isAnalysisGetHoverResult(__$value : any)  { 
        this.__$isAnalysisGetHoverResult = __$value;
    }

    private static __$isAnalysisGetLibraryDependenciesParams : any;
    static get isAnalysisGetLibraryDependenciesParams() : any { 
        if (this.__$isAnalysisGetLibraryDependenciesParams===undefined) {
            this.__$isAnalysisGetLibraryDependenciesParams = isNull;
        }
        return this.__$isAnalysisGetLibraryDependenciesParams;
    }
    static set isAnalysisGetLibraryDependenciesParams(__$value : any)  { 
        this.__$isAnalysisGetLibraryDependenciesParams = __$value;
    }

    private static __$isAnalysisGetLibraryDependenciesResult : any;
    static get isAnalysisGetLibraryDependenciesResult() : any { 
        if (this.__$isAnalysisGetLibraryDependenciesResult===undefined) {
            this.__$isAnalysisGetLibraryDependenciesResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getLibraryDependencies result",new core.DartMap.literal([
                    ["libraries",lib3.isListOf(properties.isFilePath)],
                    ["packageMap",lib3.isMapOf(lib3.properties.isString,lib3.isMapOf(lib3.properties.isString,lib3.isListOf(properties.isFilePath)))]]));
            });
        }
        return this.__$isAnalysisGetLibraryDependenciesResult;
    }
    static set isAnalysisGetLibraryDependenciesResult(__$value : any)  { 
        this.__$isAnalysisGetLibraryDependenciesResult = __$value;
    }

    private static __$isAnalysisGetNavigationParams : any;
    static get isAnalysisGetNavigationParams() : any { 
        if (this.__$isAnalysisGetNavigationParams===undefined) {
            this.__$isAnalysisGetNavigationParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getNavigation params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]));
            });
        }
        return this.__$isAnalysisGetNavigationParams;
    }
    static set isAnalysisGetNavigationParams(__$value : any)  { 
        this.__$isAnalysisGetNavigationParams = __$value;
    }

    private static __$isAnalysisGetNavigationResult : any;
    static get isAnalysisGetNavigationResult() : any { 
        if (this.__$isAnalysisGetNavigationResult===undefined) {
            this.__$isAnalysisGetNavigationResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getNavigation result",new core.DartMap.literal([
                    ["files",lib3.isListOf(properties.isFilePath)],
                    ["targets",lib3.isListOf(properties.isNavigationTarget)],
                    ["regions",lib3.isListOf(properties.isNavigationRegion)]]));
            });
        }
        return this.__$isAnalysisGetNavigationResult;
    }
    static set isAnalysisGetNavigationResult(__$value : any)  { 
        this.__$isAnalysisGetNavigationResult = __$value;
    }

    private static __$isAnalysisGetReachableSourcesParams : any;
    static get isAnalysisGetReachableSourcesParams() : any { 
        if (this.__$isAnalysisGetReachableSourcesParams===undefined) {
            this.__$isAnalysisGetReachableSourcesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getReachableSources params",new core.DartMap.literal([
                    ["file",properties.isFilePath]]));
            });
        }
        return this.__$isAnalysisGetReachableSourcesParams;
    }
    static set isAnalysisGetReachableSourcesParams(__$value : any)  { 
        this.__$isAnalysisGetReachableSourcesParams = __$value;
    }

    private static __$isAnalysisGetReachableSourcesResult : any;
    static get isAnalysisGetReachableSourcesResult() : any { 
        if (this.__$isAnalysisGetReachableSourcesResult===undefined) {
            this.__$isAnalysisGetReachableSourcesResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.getReachableSources result",new core.DartMap.literal([
                    ["sources",lib3.isMapOf(lib3.properties.isString,lib3.isListOf(lib3.properties.isString))]]));
            });
        }
        return this.__$isAnalysisGetReachableSourcesResult;
    }
    static set isAnalysisGetReachableSourcesResult(__$value : any)  { 
        this.__$isAnalysisGetReachableSourcesResult = __$value;
    }

    private static __$isAnalysisHighlightsParams : any;
    static get isAnalysisHighlightsParams() : any { 
        if (this.__$isAnalysisHighlightsParams===undefined) {
            this.__$isAnalysisHighlightsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.highlights params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["regions",lib3.isListOf(properties.isHighlightRegion)]]));
            });
        }
        return this.__$isAnalysisHighlightsParams;
    }
    static set isAnalysisHighlightsParams(__$value : any)  { 
        this.__$isAnalysisHighlightsParams = __$value;
    }

    private static __$isAnalysisImplementedParams : any;
    static get isAnalysisImplementedParams() : any { 
        if (this.__$isAnalysisImplementedParams===undefined) {
            this.__$isAnalysisImplementedParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.implemented params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["classes",lib3.isListOf(properties.isImplementedClass)],
                    ["members",lib3.isListOf(properties.isImplementedMember)]]));
            });
        }
        return this.__$isAnalysisImplementedParams;
    }
    static set isAnalysisImplementedParams(__$value : any)  { 
        this.__$isAnalysisImplementedParams = __$value;
    }

    private static __$isAnalysisInvalidateParams : any;
    static get isAnalysisInvalidateParams() : any { 
        if (this.__$isAnalysisInvalidateParams===undefined) {
            this.__$isAnalysisInvalidateParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.invalidate params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt],
                    ["delta",lib3.properties.isInt]]));
            });
        }
        return this.__$isAnalysisInvalidateParams;
    }
    static set isAnalysisInvalidateParams(__$value : any)  { 
        this.__$isAnalysisInvalidateParams = __$value;
    }

    private static __$isAnalysisNavigationParams : any;
    static get isAnalysisNavigationParams() : any { 
        if (this.__$isAnalysisNavigationParams===undefined) {
            this.__$isAnalysisNavigationParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.navigation params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["regions",lib3.isListOf(properties.isNavigationRegion)],
                    ["targets",lib3.isListOf(properties.isNavigationTarget)],
                    ["files",lib3.isListOf(properties.isFilePath)]]));
            });
        }
        return this.__$isAnalysisNavigationParams;
    }
    static set isAnalysisNavigationParams(__$value : any)  { 
        this.__$isAnalysisNavigationParams = __$value;
    }

    private static __$isAnalysisOccurrencesParams : any;
    static get isAnalysisOccurrencesParams() : any { 
        if (this.__$isAnalysisOccurrencesParams===undefined) {
            this.__$isAnalysisOccurrencesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.occurrences params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["occurrences",lib3.isListOf(properties.isOccurrences)]]));
            });
        }
        return this.__$isAnalysisOccurrencesParams;
    }
    static set isAnalysisOccurrencesParams(__$value : any)  { 
        this.__$isAnalysisOccurrencesParams = __$value;
    }

    private static __$isAnalysisOutlineParams : any;
    static get isAnalysisOutlineParams() : any { 
        if (this.__$isAnalysisOutlineParams===undefined) {
            this.__$isAnalysisOutlineParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.outline params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["kind",properties.isFileKind],
                    ["outline",properties.isOutline]]),{
                    optionalFields : new core.DartMap.literal([
                        ["libraryName",lib3.properties.isString]])});
            });
        }
        return this.__$isAnalysisOutlineParams;
    }
    static set isAnalysisOutlineParams(__$value : any)  { 
        this.__$isAnalysisOutlineParams = __$value;
    }

    private static __$isAnalysisOverridesParams : any;
    static get isAnalysisOverridesParams() : any { 
        if (this.__$isAnalysisOverridesParams===undefined) {
            this.__$isAnalysisOverridesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.overrides params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["overrides",lib3.isListOf(properties.isOverride)]]));
            });
        }
        return this.__$isAnalysisOverridesParams;
    }
    static set isAnalysisOverridesParams(__$value : any)  { 
        this.__$isAnalysisOverridesParams = __$value;
    }

    private static __$isAnalysisReanalyzeParams : any;
    static get isAnalysisReanalyzeParams() : any { 
        if (this.__$isAnalysisReanalyzeParams===undefined) {
            this.__$isAnalysisReanalyzeParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.reanalyze params",null,{
                    optionalFields : new core.DartMap.literal([
                        ["roots",lib3.isListOf(properties.isFilePath)]])});
            });
        }
        return this.__$isAnalysisReanalyzeParams;
    }
    static set isAnalysisReanalyzeParams(__$value : any)  { 
        this.__$isAnalysisReanalyzeParams = __$value;
    }

    private static __$isAnalysisReanalyzeResult : any;
    static get isAnalysisReanalyzeResult() : any { 
        if (this.__$isAnalysisReanalyzeResult===undefined) {
            this.__$isAnalysisReanalyzeResult = isNull;
        }
        return this.__$isAnalysisReanalyzeResult;
    }
    static set isAnalysisReanalyzeResult(__$value : any)  { 
        this.__$isAnalysisReanalyzeResult = __$value;
    }

    private static __$isAnalysisSetAnalysisRootsParams : any;
    static get isAnalysisSetAnalysisRootsParams() : any { 
        if (this.__$isAnalysisSetAnalysisRootsParams===undefined) {
            this.__$isAnalysisSetAnalysisRootsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.setAnalysisRoots params",new core.DartMap.literal([
                    ["included",lib3.isListOf(properties.isFilePath)],
                    ["excluded",lib3.isListOf(properties.isFilePath)]]),{
                    optionalFields : new core.DartMap.literal([
                        ["packageRoots",lib3.isMapOf(properties.isFilePath,properties.isFilePath)]])});
            });
        }
        return this.__$isAnalysisSetAnalysisRootsParams;
    }
    static set isAnalysisSetAnalysisRootsParams(__$value : any)  { 
        this.__$isAnalysisSetAnalysisRootsParams = __$value;
    }

    private static __$isAnalysisSetAnalysisRootsResult : any;
    static get isAnalysisSetAnalysisRootsResult() : any { 
        if (this.__$isAnalysisSetAnalysisRootsResult===undefined) {
            this.__$isAnalysisSetAnalysisRootsResult = isNull;
        }
        return this.__$isAnalysisSetAnalysisRootsResult;
    }
    static set isAnalysisSetAnalysisRootsResult(__$value : any)  { 
        this.__$isAnalysisSetAnalysisRootsResult = __$value;
    }

    private static __$isAnalysisSetGeneralSubscriptionsParams : any;
    static get isAnalysisSetGeneralSubscriptionsParams() : any { 
        if (this.__$isAnalysisSetGeneralSubscriptionsParams===undefined) {
            this.__$isAnalysisSetGeneralSubscriptionsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.setGeneralSubscriptions params",new core.DartMap.literal([
                    ["subscriptions",lib3.isListOf(properties.isGeneralAnalysisService)]]));
            });
        }
        return this.__$isAnalysisSetGeneralSubscriptionsParams;
    }
    static set isAnalysisSetGeneralSubscriptionsParams(__$value : any)  { 
        this.__$isAnalysisSetGeneralSubscriptionsParams = __$value;
    }

    private static __$isAnalysisSetGeneralSubscriptionsResult : any;
    static get isAnalysisSetGeneralSubscriptionsResult() : any { 
        if (this.__$isAnalysisSetGeneralSubscriptionsResult===undefined) {
            this.__$isAnalysisSetGeneralSubscriptionsResult = isNull;
        }
        return this.__$isAnalysisSetGeneralSubscriptionsResult;
    }
    static set isAnalysisSetGeneralSubscriptionsResult(__$value : any)  { 
        this.__$isAnalysisSetGeneralSubscriptionsResult = __$value;
    }

    private static __$isAnalysisSetPriorityFilesParams : any;
    static get isAnalysisSetPriorityFilesParams() : any { 
        if (this.__$isAnalysisSetPriorityFilesParams===undefined) {
            this.__$isAnalysisSetPriorityFilesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.setPriorityFiles params",new core.DartMap.literal([
                    ["files",lib3.isListOf(properties.isFilePath)]]));
            });
        }
        return this.__$isAnalysisSetPriorityFilesParams;
    }
    static set isAnalysisSetPriorityFilesParams(__$value : any)  { 
        this.__$isAnalysisSetPriorityFilesParams = __$value;
    }

    private static __$isAnalysisSetPriorityFilesResult : any;
    static get isAnalysisSetPriorityFilesResult() : any { 
        if (this.__$isAnalysisSetPriorityFilesResult===undefined) {
            this.__$isAnalysisSetPriorityFilesResult = isNull;
        }
        return this.__$isAnalysisSetPriorityFilesResult;
    }
    static set isAnalysisSetPriorityFilesResult(__$value : any)  { 
        this.__$isAnalysisSetPriorityFilesResult = __$value;
    }

    private static __$isAnalysisSetSubscriptionsParams : any;
    static get isAnalysisSetSubscriptionsParams() : any { 
        if (this.__$isAnalysisSetSubscriptionsParams===undefined) {
            this.__$isAnalysisSetSubscriptionsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.setSubscriptions params",new core.DartMap.literal([
                    ["subscriptions",lib3.isMapOf(properties.isAnalysisService,lib3.isListOf(properties.isFilePath))]]));
            });
        }
        return this.__$isAnalysisSetSubscriptionsParams;
    }
    static set isAnalysisSetSubscriptionsParams(__$value : any)  { 
        this.__$isAnalysisSetSubscriptionsParams = __$value;
    }

    private static __$isAnalysisSetSubscriptionsResult : any;
    static get isAnalysisSetSubscriptionsResult() : any { 
        if (this.__$isAnalysisSetSubscriptionsResult===undefined) {
            this.__$isAnalysisSetSubscriptionsResult = isNull;
        }
        return this.__$isAnalysisSetSubscriptionsResult;
    }
    static set isAnalysisSetSubscriptionsResult(__$value : any)  { 
        this.__$isAnalysisSetSubscriptionsResult = __$value;
    }

    private static __$isAnalysisUpdateContentParams : any;
    static get isAnalysisUpdateContentParams() : any { 
        if (this.__$isAnalysisUpdateContentParams===undefined) {
            this.__$isAnalysisUpdateContentParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.updateContent params",new core.DartMap.literal([
                    ["files",lib3.isMapOf(properties.isFilePath,lib3.isOneOf(new core.DartList.literal(properties.isAddContentOverlay,properties.isChangeContentOverlay,properties.isRemoveContentOverlay)))]]));
            });
        }
        return this.__$isAnalysisUpdateContentParams;
    }
    static set isAnalysisUpdateContentParams(__$value : any)  { 
        this.__$isAnalysisUpdateContentParams = __$value;
    }

    private static __$isAnalysisUpdateContentResult : any;
    static get isAnalysisUpdateContentResult() : any { 
        if (this.__$isAnalysisUpdateContentResult===undefined) {
            this.__$isAnalysisUpdateContentResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.updateContent result",null);
            });
        }
        return this.__$isAnalysisUpdateContentResult;
    }
    static set isAnalysisUpdateContentResult(__$value : any)  { 
        this.__$isAnalysisUpdateContentResult = __$value;
    }

    private static __$isAnalysisUpdateOptionsParams : any;
    static get isAnalysisUpdateOptionsParams() : any { 
        if (this.__$isAnalysisUpdateOptionsParams===undefined) {
            this.__$isAnalysisUpdateOptionsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("analysis.updateOptions params",new core.DartMap.literal([
                    ["options",properties.isAnalysisOptions]]));
            });
        }
        return this.__$isAnalysisUpdateOptionsParams;
    }
    static set isAnalysisUpdateOptionsParams(__$value : any)  { 
        this.__$isAnalysisUpdateOptionsParams = __$value;
    }

    private static __$isAnalysisUpdateOptionsResult : any;
    static get isAnalysisUpdateOptionsResult() : any { 
        if (this.__$isAnalysisUpdateOptionsResult===undefined) {
            this.__$isAnalysisUpdateOptionsResult = isNull;
        }
        return this.__$isAnalysisUpdateOptionsResult;
    }
    static set isAnalysisUpdateOptionsResult(__$value : any)  { 
        this.__$isAnalysisUpdateOptionsResult = __$value;
    }

    private static __$isCompletionGetSuggestionsParams : any;
    static get isCompletionGetSuggestionsParams() : any { 
        if (this.__$isCompletionGetSuggestionsParams===undefined) {
            this.__$isCompletionGetSuggestionsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("completion.getSuggestions params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt]]));
            });
        }
        return this.__$isCompletionGetSuggestionsParams;
    }
    static set isCompletionGetSuggestionsParams(__$value : any)  { 
        this.__$isCompletionGetSuggestionsParams = __$value;
    }

    private static __$isCompletionGetSuggestionsResult : any;
    static get isCompletionGetSuggestionsResult() : any { 
        if (this.__$isCompletionGetSuggestionsResult===undefined) {
            this.__$isCompletionGetSuggestionsResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("completion.getSuggestions result",new core.DartMap.literal([
                    ["id",properties.isCompletionId]]));
            });
        }
        return this.__$isCompletionGetSuggestionsResult;
    }
    static set isCompletionGetSuggestionsResult(__$value : any)  { 
        this.__$isCompletionGetSuggestionsResult = __$value;
    }

    private static __$isCompletionResultsParams : any;
    static get isCompletionResultsParams() : any { 
        if (this.__$isCompletionResultsParams===undefined) {
            this.__$isCompletionResultsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("completion.results params",new core.DartMap.literal([
                    ["id",properties.isCompletionId],
                    ["replacementOffset",lib3.properties.isInt],
                    ["replacementLength",lib3.properties.isInt],
                    ["results",lib3.isListOf(properties.isCompletionSuggestion)],
                    ["isLast",lib3.properties.isBool]]));
            });
        }
        return this.__$isCompletionResultsParams;
    }
    static set isCompletionResultsParams(__$value : any)  { 
        this.__$isCompletionResultsParams = __$value;
    }

    private static __$isConvertGetterToMethodFeedback : any;
    static get isConvertGetterToMethodFeedback() : any { 
        if (this.__$isConvertGetterToMethodFeedback===undefined) {
            this.__$isConvertGetterToMethodFeedback = isNull;
        }
        return this.__$isConvertGetterToMethodFeedback;
    }
    static set isConvertGetterToMethodFeedback(__$value : any)  { 
        this.__$isConvertGetterToMethodFeedback = __$value;
    }

    private static __$isConvertGetterToMethodOptions : any;
    static get isConvertGetterToMethodOptions() : any { 
        if (this.__$isConvertGetterToMethodOptions===undefined) {
            this.__$isConvertGetterToMethodOptions = isNull;
        }
        return this.__$isConvertGetterToMethodOptions;
    }
    static set isConvertGetterToMethodOptions(__$value : any)  { 
        this.__$isConvertGetterToMethodOptions = __$value;
    }

    private static __$isConvertMethodToGetterFeedback : any;
    static get isConvertMethodToGetterFeedback() : any { 
        if (this.__$isConvertMethodToGetterFeedback===undefined) {
            this.__$isConvertMethodToGetterFeedback = isNull;
        }
        return this.__$isConvertMethodToGetterFeedback;
    }
    static set isConvertMethodToGetterFeedback(__$value : any)  { 
        this.__$isConvertMethodToGetterFeedback = __$value;
    }

    private static __$isConvertMethodToGetterOptions : any;
    static get isConvertMethodToGetterOptions() : any { 
        if (this.__$isConvertMethodToGetterOptions===undefined) {
            this.__$isConvertMethodToGetterOptions = isNull;
        }
        return this.__$isConvertMethodToGetterOptions;
    }
    static set isConvertMethodToGetterOptions(__$value : any)  { 
        this.__$isConvertMethodToGetterOptions = __$value;
    }

    private static __$isDiagnosticGetDiagnosticsParams : any;
    static get isDiagnosticGetDiagnosticsParams() : any { 
        if (this.__$isDiagnosticGetDiagnosticsParams===undefined) {
            this.__$isDiagnosticGetDiagnosticsParams = isNull;
        }
        return this.__$isDiagnosticGetDiagnosticsParams;
    }
    static set isDiagnosticGetDiagnosticsParams(__$value : any)  { 
        this.__$isDiagnosticGetDiagnosticsParams = __$value;
    }

    private static __$isDiagnosticGetDiagnosticsResult : any;
    static get isDiagnosticGetDiagnosticsResult() : any { 
        if (this.__$isDiagnosticGetDiagnosticsResult===undefined) {
            this.__$isDiagnosticGetDiagnosticsResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("diagnostic.getDiagnostics result",new core.DartMap.literal([
                    ["contexts",lib3.isListOf(properties.isContextData)]]));
            });
        }
        return this.__$isDiagnosticGetDiagnosticsResult;
    }
    static set isDiagnosticGetDiagnosticsResult(__$value : any)  { 
        this.__$isDiagnosticGetDiagnosticsResult = __$value;
    }

    private static __$isDiagnosticGetServerPortParams : any;
    static get isDiagnosticGetServerPortParams() : any { 
        if (this.__$isDiagnosticGetServerPortParams===undefined) {
            this.__$isDiagnosticGetServerPortParams = isNull;
        }
        return this.__$isDiagnosticGetServerPortParams;
    }
    static set isDiagnosticGetServerPortParams(__$value : any)  { 
        this.__$isDiagnosticGetServerPortParams = __$value;
    }

    private static __$isDiagnosticGetServerPortResult : any;
    static get isDiagnosticGetServerPortResult() : any { 
        if (this.__$isDiagnosticGetServerPortResult===undefined) {
            this.__$isDiagnosticGetServerPortResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("diagnostic.getServerPort result",new core.DartMap.literal([
                    ["port",lib3.properties.isInt]]));
            });
        }
        return this.__$isDiagnosticGetServerPortResult;
    }
    static set isDiagnosticGetServerPortResult(__$value : any)  { 
        this.__$isDiagnosticGetServerPortResult = __$value;
    }

    private static __$isEditFormatParams : any;
    static get isEditFormatParams() : any { 
        if (this.__$isEditFormatParams===undefined) {
            this.__$isEditFormatParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.format params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["selectionOffset",lib3.properties.isInt],
                    ["selectionLength",lib3.properties.isInt]]),{
                    optionalFields : new core.DartMap.literal([
                        ["lineLength",lib3.properties.isInt]])});
            });
        }
        return this.__$isEditFormatParams;
    }
    static set isEditFormatParams(__$value : any)  { 
        this.__$isEditFormatParams = __$value;
    }

    private static __$isEditFormatResult : any;
    static get isEditFormatResult() : any { 
        if (this.__$isEditFormatResult===undefined) {
            this.__$isEditFormatResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.format result",new core.DartMap.literal([
                    ["edits",lib3.isListOf(properties.isSourceEdit)],
                    ["selectionOffset",lib3.properties.isInt],
                    ["selectionLength",lib3.properties.isInt]]));
            });
        }
        return this.__$isEditFormatResult;
    }
    static set isEditFormatResult(__$value : any)  { 
        this.__$isEditFormatResult = __$value;
    }

    private static __$isServerStatusParams : any;
    static get isServerStatusParams() : any { 
        if (this.__$isServerStatusParams===undefined) {
            this.__$isServerStatusParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("server.status params",null,{
                    optionalFields : new core.DartMap.literal([
                        ["analysis",properties.isAnalysisStatus],
                        ["pub",properties.isPubStatus]])});
            });
        }
        return this.__$isServerStatusParams;
    }
    static set isServerStatusParams(__$value : any)  { 
        this.__$isServerStatusParams = __$value;
    }

    private static __$isEditGetAssistsResult : any;
    static get isEditGetAssistsResult() : any { 
        if (this.__$isEditGetAssistsResult===undefined) {
            this.__$isEditGetAssistsResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getAssists result",new core.DartMap.literal([
                    ["assists",lib3.isListOf(properties.isSourceChange)]]));
            });
        }
        return this.__$isEditGetAssistsResult;
    }
    static set isEditGetAssistsResult(__$value : any)  { 
        this.__$isEditGetAssistsResult = __$value;
    }

    private static __$isEditGetAvailableRefactoringsParams : any;
    static get isEditGetAvailableRefactoringsParams() : any { 
        if (this.__$isEditGetAvailableRefactoringsParams===undefined) {
            this.__$isEditGetAvailableRefactoringsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getAvailableRefactorings params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]));
            });
        }
        return this.__$isEditGetAvailableRefactoringsParams;
    }
    static set isEditGetAvailableRefactoringsParams(__$value : any)  { 
        this.__$isEditGetAvailableRefactoringsParams = __$value;
    }

    private static __$isEditGetAvailableRefactoringsResult : any;
    static get isEditGetAvailableRefactoringsResult() : any { 
        if (this.__$isEditGetAvailableRefactoringsResult===undefined) {
            this.__$isEditGetAvailableRefactoringsResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getAvailableRefactorings result",new core.DartMap.literal([
                    ["kinds",lib3.isListOf(properties.isRefactoringKind)]]));
            });
        }
        return this.__$isEditGetAvailableRefactoringsResult;
    }
    static set isEditGetAvailableRefactoringsResult(__$value : any)  { 
        this.__$isEditGetAvailableRefactoringsResult = __$value;
    }

    private static __$isEditGetFixesParams : any;
    static get isEditGetFixesParams() : any { 
        if (this.__$isEditGetFixesParams===undefined) {
            this.__$isEditGetFixesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getFixes params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt]]));
            });
        }
        return this.__$isEditGetFixesParams;
    }
    static set isEditGetFixesParams(__$value : any)  { 
        this.__$isEditGetFixesParams = __$value;
    }

    private static __$isEditGetFixesResult : any;
    static get isEditGetFixesResult() : any { 
        if (this.__$isEditGetFixesResult===undefined) {
            this.__$isEditGetFixesResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getFixes result",new core.DartMap.literal([
                    ["fixes",lib3.isListOf(properties.isAnalysisErrorFixes)]]));
            });
        }
        return this.__$isEditGetFixesResult;
    }
    static set isEditGetFixesResult(__$value : any)  { 
        this.__$isEditGetFixesResult = __$value;
    }

    private static __$isEditGetRefactoringParams : any;
    static get isEditGetRefactoringParams() : any { 
        if (this.__$isEditGetRefactoringParams===undefined) {
            this.__$isEditGetRefactoringParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getRefactoring params",new core.DartMap.literal([
                    ["kind",properties.isRefactoringKind],
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt],
                    ["validateOnly",lib3.properties.isBool]]),{
                    optionalFields : new core.DartMap.literal([
                        ["options",properties.isRefactoringOptions]])});
            });
        }
        return this.__$isEditGetRefactoringParams;
    }
    static set isEditGetRefactoringParams(__$value : any)  { 
        this.__$isEditGetRefactoringParams = __$value;
    }

    private static __$isEditGetRefactoringResult : any;
    static get isEditGetRefactoringResult() : any { 
        if (this.__$isEditGetRefactoringResult===undefined) {
            this.__$isEditGetRefactoringResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getRefactoring result",new core.DartMap.literal([
                    ["initialProblems",lib3.isListOf(properties.isRefactoringProblem)],
                    ["optionsProblems",lib3.isListOf(properties.isRefactoringProblem)],
                    ["finalProblems",lib3.isListOf(properties.isRefactoringProblem)]]),{
                    optionalFields : new core.DartMap.literal([
                        ["feedback",properties.isRefactoringFeedback],
                        ["change",properties.isSourceChange],
                        ["potentialEdits",lib3.isListOf(lib3.properties.isString)]])});
            });
        }
        return this.__$isEditGetRefactoringResult;
    }
    static set isEditGetRefactoringResult(__$value : any)  { 
        this.__$isEditGetRefactoringResult = __$value;
    }

    private static __$isEditGetStatementCompletionParams : any;
    static get isEditGetStatementCompletionParams() : any { 
        if (this.__$isEditGetStatementCompletionParams===undefined) {
            this.__$isEditGetStatementCompletionParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getStatementCompletion params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt]]));
            });
        }
        return this.__$isEditGetStatementCompletionParams;
    }
    static set isEditGetStatementCompletionParams(__$value : any)  { 
        this.__$isEditGetStatementCompletionParams = __$value;
    }

    private static __$isEditGetStatementCompletionResult : any;
    static get isEditGetStatementCompletionResult() : any { 
        if (this.__$isEditGetStatementCompletionResult===undefined) {
            this.__$isEditGetStatementCompletionResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getStatementCompletion result",new core.DartMap.literal([
                    ["change",properties.isSourceChange],
                    ["whitespaceOnly",lib3.properties.isBool]]));
            });
        }
        return this.__$isEditGetStatementCompletionResult;
    }
    static set isEditGetStatementCompletionResult(__$value : any)  { 
        this.__$isEditGetStatementCompletionResult = __$value;
    }

    private static __$isEditOrganizeDirectivesParams : any;
    static get isEditOrganizeDirectivesParams() : any { 
        if (this.__$isEditOrganizeDirectivesParams===undefined) {
            this.__$isEditOrganizeDirectivesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.organizeDirectives params",new core.DartMap.literal([
                    ["file",properties.isFilePath]]));
            });
        }
        return this.__$isEditOrganizeDirectivesParams;
    }
    static set isEditOrganizeDirectivesParams(__$value : any)  { 
        this.__$isEditOrganizeDirectivesParams = __$value;
    }

    private static __$isEditOrganizeDirectivesResult : any;
    static get isEditOrganizeDirectivesResult() : any { 
        if (this.__$isEditOrganizeDirectivesResult===undefined) {
            this.__$isEditOrganizeDirectivesResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.organizeDirectives result",new core.DartMap.literal([
                    ["edit",properties.isSourceFileEdit]]));
            });
        }
        return this.__$isEditOrganizeDirectivesResult;
    }
    static set isEditOrganizeDirectivesResult(__$value : any)  { 
        this.__$isEditOrganizeDirectivesResult = __$value;
    }

    private static __$isEditSortMembersParams : any;
    static get isEditSortMembersParams() : any { 
        if (this.__$isEditSortMembersParams===undefined) {
            this.__$isEditSortMembersParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.sortMembers params",new core.DartMap.literal([
                    ["file",properties.isFilePath]]));
            });
        }
        return this.__$isEditSortMembersParams;
    }
    static set isEditSortMembersParams(__$value : any)  { 
        this.__$isEditSortMembersParams = __$value;
    }

    private static __$isEditSortMembersResult : any;
    static get isEditSortMembersResult() : any { 
        if (this.__$isEditSortMembersResult===undefined) {
            this.__$isEditSortMembersResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.sortMembers result",new core.DartMap.literal([
                    ["edit",properties.isSourceFileEdit]]));
            });
        }
        return this.__$isEditSortMembersResult;
    }
    static set isEditSortMembersResult(__$value : any)  { 
        this.__$isEditSortMembersResult = __$value;
    }

    private static __$isExecutionCreateContextParams : any;
    static get isExecutionCreateContextParams() : any { 
        if (this.__$isExecutionCreateContextParams===undefined) {
            this.__$isExecutionCreateContextParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("execution.createContext params",new core.DartMap.literal([
                    ["contextRoot",properties.isFilePath]]));
            });
        }
        return this.__$isExecutionCreateContextParams;
    }
    static set isExecutionCreateContextParams(__$value : any)  { 
        this.__$isExecutionCreateContextParams = __$value;
    }

    private static __$isExecutionCreateContextResult : any;
    static get isExecutionCreateContextResult() : any { 
        if (this.__$isExecutionCreateContextResult===undefined) {
            this.__$isExecutionCreateContextResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("execution.createContext result",new core.DartMap.literal([
                    ["id",properties.isExecutionContextId]]));
            });
        }
        return this.__$isExecutionCreateContextResult;
    }
    static set isExecutionCreateContextResult(__$value : any)  { 
        this.__$isExecutionCreateContextResult = __$value;
    }

    private static __$isExecutionDeleteContextParams : any;
    static get isExecutionDeleteContextParams() : any { 
        if (this.__$isExecutionDeleteContextParams===undefined) {
            this.__$isExecutionDeleteContextParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("execution.deleteContext params",new core.DartMap.literal([
                    ["id",properties.isExecutionContextId]]));
            });
        }
        return this.__$isExecutionDeleteContextParams;
    }
    static set isExecutionDeleteContextParams(__$value : any)  { 
        this.__$isExecutionDeleteContextParams = __$value;
    }

    private static __$isExecutionDeleteContextResult : any;
    static get isExecutionDeleteContextResult() : any { 
        if (this.__$isExecutionDeleteContextResult===undefined) {
            this.__$isExecutionDeleteContextResult = isNull;
        }
        return this.__$isExecutionDeleteContextResult;
    }
    static set isExecutionDeleteContextResult(__$value : any)  { 
        this.__$isExecutionDeleteContextResult = __$value;
    }

    private static __$isExecutionLaunchDataParams : any;
    static get isExecutionLaunchDataParams() : any { 
        if (this.__$isExecutionLaunchDataParams===undefined) {
            this.__$isExecutionLaunchDataParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("execution.launchData params",new core.DartMap.literal([
                    ["file",properties.isFilePath]]),{
                    optionalFields : new core.DartMap.literal([
                        ["kind",properties.isExecutableKind],
                        ["referencedFiles",lib3.isListOf(properties.isFilePath)]])});
            });
        }
        return this.__$isExecutionLaunchDataParams;
    }
    static set isExecutionLaunchDataParams(__$value : any)  { 
        this.__$isExecutionLaunchDataParams = __$value;
    }

    private static __$isExecutionMapUriParams : any;
    static get isExecutionMapUriParams() : any { 
        if (this.__$isExecutionMapUriParams===undefined) {
            this.__$isExecutionMapUriParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("execution.mapUri params",new core.DartMap.literal([
                    ["id",properties.isExecutionContextId]]),{
                    optionalFields : new core.DartMap.literal([
                        ["file",properties.isFilePath],
                        ["uri",lib3.properties.isString]])});
            });
        }
        return this.__$isExecutionMapUriParams;
    }
    static set isExecutionMapUriParams(__$value : any)  { 
        this.__$isExecutionMapUriParams = __$value;
    }

    private static __$isExecutionMapUriResult : any;
    static get isExecutionMapUriResult() : any { 
        if (this.__$isExecutionMapUriResult===undefined) {
            this.__$isExecutionMapUriResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("execution.mapUri result",null,{
                    optionalFields : new core.DartMap.literal([
                        ["file",properties.isFilePath],
                        ["uri",lib3.properties.isString]])});
            });
        }
        return this.__$isExecutionMapUriResult;
    }
    static set isExecutionMapUriResult(__$value : any)  { 
        this.__$isExecutionMapUriResult = __$value;
    }

    private static __$isExecutionSetSubscriptionsParams : any;
    static get isExecutionSetSubscriptionsParams() : any { 
        if (this.__$isExecutionSetSubscriptionsParams===undefined) {
            this.__$isExecutionSetSubscriptionsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("execution.setSubscriptions params",new core.DartMap.literal([
                    ["subscriptions",lib3.isListOf(properties.isExecutionService)]]));
            });
        }
        return this.__$isExecutionSetSubscriptionsParams;
    }
    static set isExecutionSetSubscriptionsParams(__$value : any)  { 
        this.__$isExecutionSetSubscriptionsParams = __$value;
    }

    private static __$isExecutionSetSubscriptionsResult : any;
    static get isExecutionSetSubscriptionsResult() : any { 
        if (this.__$isExecutionSetSubscriptionsResult===undefined) {
            this.__$isExecutionSetSubscriptionsResult = isNull;
        }
        return this.__$isExecutionSetSubscriptionsResult;
    }
    static set isExecutionSetSubscriptionsResult(__$value : any)  { 
        this.__$isExecutionSetSubscriptionsResult = __$value;
    }

    private static __$isExtractLocalVariableFeedback : any;
    static get isExtractLocalVariableFeedback() : any { 
        if (this.__$isExtractLocalVariableFeedback===undefined) {
            this.__$isExtractLocalVariableFeedback = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("extractLocalVariable feedback",new core.DartMap.literal([
                    ["names",lib3.isListOf(lib3.properties.isString)],
                    ["offsets",lib3.isListOf(lib3.properties.isInt)],
                    ["lengths",lib3.isListOf(lib3.properties.isInt)]]),{
                    optionalFields : new core.DartMap.literal([
                        ["coveringExpressionOffsets",lib3.isListOf(lib3.properties.isInt)],
                        ["coveringExpressionLengths",lib3.isListOf(lib3.properties.isInt)]])});
            });
        }
        return this.__$isExtractLocalVariableFeedback;
    }
    static set isExtractLocalVariableFeedback(__$value : any)  { 
        this.__$isExtractLocalVariableFeedback = __$value;
    }

    private static __$isExtractLocalVariableOptions : any;
    static get isExtractLocalVariableOptions() : any { 
        if (this.__$isExtractLocalVariableOptions===undefined) {
            this.__$isExtractLocalVariableOptions = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("extractLocalVariable options",new core.DartMap.literal([
                    ["name",lib3.properties.isString],
                    ["extractAll",lib3.properties.isBool]]));
            });
        }
        return this.__$isExtractLocalVariableOptions;
    }
    static set isExtractLocalVariableOptions(__$value : any)  { 
        this.__$isExtractLocalVariableOptions = __$value;
    }

    private static __$isExtractMethodFeedback : any;
    static get isExtractMethodFeedback() : any { 
        if (this.__$isExtractMethodFeedback===undefined) {
            this.__$isExtractMethodFeedback = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("extractMethod feedback",new core.DartMap.literal([
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt],
                    ["returnType",lib3.properties.isString],
                    ["names",lib3.isListOf(lib3.properties.isString)],
                    ["canCreateGetter",lib3.properties.isBool],
                    ["parameters",lib3.isListOf(properties.isRefactoringMethodParameter)],
                    ["offsets",lib3.isListOf(lib3.properties.isInt)],
                    ["lengths",lib3.isListOf(lib3.properties.isInt)]]));
            });
        }
        return this.__$isExtractMethodFeedback;
    }
    static set isExtractMethodFeedback(__$value : any)  { 
        this.__$isExtractMethodFeedback = __$value;
    }

    private static __$isExtractMethodOptions : any;
    static get isExtractMethodOptions() : any { 
        if (this.__$isExtractMethodOptions===undefined) {
            this.__$isExtractMethodOptions = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("extractMethod options",new core.DartMap.literal([
                    ["returnType",lib3.properties.isString],
                    ["createGetter",lib3.properties.isBool],
                    ["name",lib3.properties.isString],
                    ["parameters",lib3.isListOf(properties.isRefactoringMethodParameter)],
                    ["extractAll",lib3.properties.isBool]]));
            });
        }
        return this.__$isExtractMethodOptions;
    }
    static set isExtractMethodOptions(__$value : any)  { 
        this.__$isExtractMethodOptions = __$value;
    }

    private static __$isInlineLocalVariableFeedback : any;
    static get isInlineLocalVariableFeedback() : any { 
        if (this.__$isInlineLocalVariableFeedback===undefined) {
            this.__$isInlineLocalVariableFeedback = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("inlineLocalVariable feedback",new core.DartMap.literal([
                    ["name",lib3.properties.isString],
                    ["occurrences",lib3.properties.isInt]]));
            });
        }
        return this.__$isInlineLocalVariableFeedback;
    }
    static set isInlineLocalVariableFeedback(__$value : any)  { 
        this.__$isInlineLocalVariableFeedback = __$value;
    }

    private static __$isInlineLocalVariableOptions : any;
    static get isInlineLocalVariableOptions() : any { 
        if (this.__$isInlineLocalVariableOptions===undefined) {
            this.__$isInlineLocalVariableOptions = isNull;
        }
        return this.__$isInlineLocalVariableOptions;
    }
    static set isInlineLocalVariableOptions(__$value : any)  { 
        this.__$isInlineLocalVariableOptions = __$value;
    }

    private static __$isInlineMethodFeedback : any;
    static get isInlineMethodFeedback() : any { 
        if (this.__$isInlineMethodFeedback===undefined) {
            this.__$isInlineMethodFeedback = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("inlineMethod feedback",new core.DartMap.literal([
                    ["methodName",lib3.properties.isString],
                    ["isDeclaration",lib3.properties.isBool]]),{
                    optionalFields : new core.DartMap.literal([
                        ["className",lib3.properties.isString]])});
            });
        }
        return this.__$isInlineMethodFeedback;
    }
    static set isInlineMethodFeedback(__$value : any)  { 
        this.__$isInlineMethodFeedback = __$value;
    }

    private static __$isInlineMethodOptions : any;
    static get isInlineMethodOptions() : any { 
        if (this.__$isInlineMethodOptions===undefined) {
            this.__$isInlineMethodOptions = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("inlineMethod options",new core.DartMap.literal([
                    ["deleteSource",lib3.properties.isBool],
                    ["inlineAll",lib3.properties.isBool]]));
            });
        }
        return this.__$isInlineMethodOptions;
    }
    static set isInlineMethodOptions(__$value : any)  { 
        this.__$isInlineMethodOptions = __$value;
    }

    private static __$isMoveFileFeedback : any;
    static get isMoveFileFeedback() : any { 
        if (this.__$isMoveFileFeedback===undefined) {
            this.__$isMoveFileFeedback = isNull;
        }
        return this.__$isMoveFileFeedback;
    }
    static set isMoveFileFeedback(__$value : any)  { 
        this.__$isMoveFileFeedback = __$value;
    }

    private static __$isMoveFileOptions : any;
    static get isMoveFileOptions() : any { 
        if (this.__$isMoveFileOptions===undefined) {
            this.__$isMoveFileOptions = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("moveFile options",new core.DartMap.literal([
                    ["newFile",properties.isFilePath]]));
            });
        }
        return this.__$isMoveFileOptions;
    }
    static set isMoveFileOptions(__$value : any)  { 
        this.__$isMoveFileOptions = __$value;
    }

    private static __$isRenameFeedback : any;
    static get isRenameFeedback() : any { 
        if (this.__$isRenameFeedback===undefined) {
            this.__$isRenameFeedback = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("rename feedback",new core.DartMap.literal([
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt],
                    ["elementKindName",lib3.properties.isString],
                    ["oldName",lib3.properties.isString]]));
            });
        }
        return this.__$isRenameFeedback;
    }
    static set isRenameFeedback(__$value : any)  { 
        this.__$isRenameFeedback = __$value;
    }

    private static __$isRenameOptions : any;
    static get isRenameOptions() : any { 
        if (this.__$isRenameOptions===undefined) {
            this.__$isRenameOptions = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("rename options",new core.DartMap.literal([
                    ["newName",lib3.properties.isString]]));
            });
        }
        return this.__$isRenameOptions;
    }
    static set isRenameOptions(__$value : any)  { 
        this.__$isRenameOptions = __$value;
    }

    private static __$isSearchFindElementReferencesParams : any;
    static get isSearchFindElementReferencesParams() : any { 
        if (this.__$isSearchFindElementReferencesParams===undefined) {
            this.__$isSearchFindElementReferencesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.findElementReferences params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt],
                    ["includePotential",lib3.properties.isBool]]));
            });
        }
        return this.__$isSearchFindElementReferencesParams;
    }
    static set isSearchFindElementReferencesParams(__$value : any)  { 
        this.__$isSearchFindElementReferencesParams = __$value;
    }

    private static __$isSearchFindElementReferencesResult : any;
    static get isSearchFindElementReferencesResult() : any { 
        if (this.__$isSearchFindElementReferencesResult===undefined) {
            this.__$isSearchFindElementReferencesResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.findElementReferences result",null,{
                    optionalFields : new core.DartMap.literal([
                        ["id",properties.isSearchId],
                        ["element",properties.isElement]])});
            });
        }
        return this.__$isSearchFindElementReferencesResult;
    }
    static set isSearchFindElementReferencesResult(__$value : any)  { 
        this.__$isSearchFindElementReferencesResult = __$value;
    }

    private static __$isSearchFindMemberDeclarationsParams : any;
    static get isSearchFindMemberDeclarationsParams() : any { 
        if (this.__$isSearchFindMemberDeclarationsParams===undefined) {
            this.__$isSearchFindMemberDeclarationsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.findMemberDeclarations params",new core.DartMap.literal([
                    ["name",lib3.properties.isString]]));
            });
        }
        return this.__$isSearchFindMemberDeclarationsParams;
    }
    static set isSearchFindMemberDeclarationsParams(__$value : any)  { 
        this.__$isSearchFindMemberDeclarationsParams = __$value;
    }

    private static __$isSearchFindMemberDeclarationsResult : any;
    static get isSearchFindMemberDeclarationsResult() : any { 
        if (this.__$isSearchFindMemberDeclarationsResult===undefined) {
            this.__$isSearchFindMemberDeclarationsResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.findMemberDeclarations result",new core.DartMap.literal([
                    ["id",properties.isSearchId]]));
            });
        }
        return this.__$isSearchFindMemberDeclarationsResult;
    }
    static set isSearchFindMemberDeclarationsResult(__$value : any)  { 
        this.__$isSearchFindMemberDeclarationsResult = __$value;
    }

    private static __$isSearchFindMemberReferencesParams : any;
    static get isSearchFindMemberReferencesParams() : any { 
        if (this.__$isSearchFindMemberReferencesParams===undefined) {
            this.__$isSearchFindMemberReferencesParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.findMemberReferences params",new core.DartMap.literal([
                    ["name",lib3.properties.isString]]));
            });
        }
        return this.__$isSearchFindMemberReferencesParams;
    }
    static set isSearchFindMemberReferencesParams(__$value : any)  { 
        this.__$isSearchFindMemberReferencesParams = __$value;
    }

    private static __$isSearchFindMemberReferencesResult : any;
    static get isSearchFindMemberReferencesResult() : any { 
        if (this.__$isSearchFindMemberReferencesResult===undefined) {
            this.__$isSearchFindMemberReferencesResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.findMemberReferences result",new core.DartMap.literal([
                    ["id",properties.isSearchId]]));
            });
        }
        return this.__$isSearchFindMemberReferencesResult;
    }
    static set isSearchFindMemberReferencesResult(__$value : any)  { 
        this.__$isSearchFindMemberReferencesResult = __$value;
    }

    private static __$isSearchFindTopLevelDeclarationsParams : any;
    static get isSearchFindTopLevelDeclarationsParams() : any { 
        if (this.__$isSearchFindTopLevelDeclarationsParams===undefined) {
            this.__$isSearchFindTopLevelDeclarationsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.findTopLevelDeclarations params",new core.DartMap.literal([
                    ["pattern",lib3.properties.isString]]));
            });
        }
        return this.__$isSearchFindTopLevelDeclarationsParams;
    }
    static set isSearchFindTopLevelDeclarationsParams(__$value : any)  { 
        this.__$isSearchFindTopLevelDeclarationsParams = __$value;
    }

    private static __$isSearchFindTopLevelDeclarationsResult : any;
    static get isSearchFindTopLevelDeclarationsResult() : any { 
        if (this.__$isSearchFindTopLevelDeclarationsResult===undefined) {
            this.__$isSearchFindTopLevelDeclarationsResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.findTopLevelDeclarations result",new core.DartMap.literal([
                    ["id",properties.isSearchId]]));
            });
        }
        return this.__$isSearchFindTopLevelDeclarationsResult;
    }
    static set isSearchFindTopLevelDeclarationsResult(__$value : any)  { 
        this.__$isSearchFindTopLevelDeclarationsResult = __$value;
    }

    private static __$isSearchGetTypeHierarchyParams : any;
    static get isSearchGetTypeHierarchyParams() : any { 
        if (this.__$isSearchGetTypeHierarchyParams===undefined) {
            this.__$isSearchGetTypeHierarchyParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.getTypeHierarchy params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt]]),{
                    optionalFields : new core.DartMap.literal([
                        ["superOnly",lib3.properties.isBool]])});
            });
        }
        return this.__$isSearchGetTypeHierarchyParams;
    }
    static set isSearchGetTypeHierarchyParams(__$value : any)  { 
        this.__$isSearchGetTypeHierarchyParams = __$value;
    }

    private static __$isSearchGetTypeHierarchyResult : any;
    static get isSearchGetTypeHierarchyResult() : any { 
        if (this.__$isSearchGetTypeHierarchyResult===undefined) {
            this.__$isSearchGetTypeHierarchyResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.getTypeHierarchy result",null,{
                    optionalFields : new core.DartMap.literal([
                        ["hierarchyItems",lib3.isListOf(properties.isTypeHierarchyItem)]])});
            });
        }
        return this.__$isSearchGetTypeHierarchyResult;
    }
    static set isSearchGetTypeHierarchyResult(__$value : any)  { 
        this.__$isSearchGetTypeHierarchyResult = __$value;
    }

    private static __$isSearchResultsParams : any;
    static get isSearchResultsParams() : any { 
        if (this.__$isSearchResultsParams===undefined) {
            this.__$isSearchResultsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("search.results params",new core.DartMap.literal([
                    ["id",properties.isSearchId],
                    ["results",lib3.isListOf(properties.isSearchResult)],
                    ["isLast",lib3.properties.isBool]]));
            });
        }
        return this.__$isSearchResultsParams;
    }
    static set isSearchResultsParams(__$value : any)  { 
        this.__$isSearchResultsParams = __$value;
    }

    private static __$isServerConnectedParams : any;
    static get isServerConnectedParams() : any { 
        if (this.__$isServerConnectedParams===undefined) {
            this.__$isServerConnectedParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("server.connected params",new core.DartMap.literal([
                    ["version",lib3.properties.isString],
                    ["pid",lib3.properties.isInt]]),{
                    optionalFields : new core.DartMap.literal([
                        ["sessionId",lib3.properties.isString]])});
            });
        }
        return this.__$isServerConnectedParams;
    }
    static set isServerConnectedParams(__$value : any)  { 
        this.__$isServerConnectedParams = __$value;
    }

    private static __$isServerErrorParams : any;
    static get isServerErrorParams() : any { 
        if (this.__$isServerErrorParams===undefined) {
            this.__$isServerErrorParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("server.error params",new core.DartMap.literal([
                    ["isFatal",lib3.properties.isBool],
                    ["message",lib3.properties.isString],
                    ["stackTrace",lib3.properties.isString]]));
            });
        }
        return this.__$isServerErrorParams;
    }
    static set isServerErrorParams(__$value : any)  { 
        this.__$isServerErrorParams = __$value;
    }

    private static __$isServerGetVersionParams : any;
    static get isServerGetVersionParams() : any { 
        if (this.__$isServerGetVersionParams===undefined) {
            this.__$isServerGetVersionParams = isNull;
        }
        return this.__$isServerGetVersionParams;
    }
    static set isServerGetVersionParams(__$value : any)  { 
        this.__$isServerGetVersionParams = __$value;
    }

    private static __$isServerGetVersionResult : any;
    static get isServerGetVersionResult() : any { 
        if (this.__$isServerGetVersionResult===undefined) {
            this.__$isServerGetVersionResult = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("server.getVersion result",new core.DartMap.literal([
                    ["version",lib3.properties.isString]]));
            });
        }
        return this.__$isServerGetVersionResult;
    }
    static set isServerGetVersionResult(__$value : any)  { 
        this.__$isServerGetVersionResult = __$value;
    }

    private static __$isServerSetSubscriptionsParams : any;
    static get isServerSetSubscriptionsParams() : any { 
        if (this.__$isServerSetSubscriptionsParams===undefined) {
            this.__$isServerSetSubscriptionsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("server.setSubscriptions params",new core.DartMap.literal([
                    ["subscriptions",lib3.isListOf(properties.isServerService)]]));
            });
        }
        return this.__$isServerSetSubscriptionsParams;
    }
    static set isServerSetSubscriptionsParams(__$value : any)  { 
        this.__$isServerSetSubscriptionsParams = __$value;
    }

    private static __$isServerSetSubscriptionsResult : any;
    static get isServerSetSubscriptionsResult() : any { 
        if (this.__$isServerSetSubscriptionsResult===undefined) {
            this.__$isServerSetSubscriptionsResult = isNull;
        }
        return this.__$isServerSetSubscriptionsResult;
    }
    static set isServerSetSubscriptionsResult(__$value : any)  { 
        this.__$isServerSetSubscriptionsResult = __$value;
    }

    private static __$isServerShutdownParams : any;
    static get isServerShutdownParams() : any { 
        if (this.__$isServerShutdownParams===undefined) {
            this.__$isServerShutdownParams = isNull;
        }
        return this.__$isServerShutdownParams;
    }
    static set isServerShutdownParams(__$value : any)  { 
        this.__$isServerShutdownParams = __$value;
    }

    private static __$isServerShutdownResult : any;
    static get isServerShutdownResult() : any { 
        if (this.__$isServerShutdownResult===undefined) {
            this.__$isServerShutdownResult = isNull;
        }
        return this.__$isServerShutdownResult;
    }
    static set isServerShutdownResult(__$value : any)  { 
        this.__$isServerShutdownResult = __$value;
    }

    private static __$isEditGetAssistsParams : any;
    static get isEditGetAssistsParams() : any { 
        if (this.__$isEditGetAssistsParams===undefined) {
            this.__$isEditGetAssistsParams = new lib3.LazyMatcher(() =>  {
                return new lib3.MatchesJsonObject("edit.getAssists params",new core.DartMap.literal([
                    ["file",properties.isFilePath],
                    ["offset",lib3.properties.isInt],
                    ["length",lib3.properties.isInt]]));
            });
        }
        return this.__$isEditGetAssistsParams;
    }
    static set isEditGetAssistsParams(__$value : any)  { 
        this.__$isEditGetAssistsParams = __$value;
    }

}
