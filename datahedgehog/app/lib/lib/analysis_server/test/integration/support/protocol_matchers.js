"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/support/protocol_matchers.dart */
var _common_1 = require("@dart2ts/dart/_common");
var core = require("@dart2ts/dart/core");
var lib3 = require("./integration_tests");
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "isSearchResultKind", {
        get: function () {
            if (this.__$isSearchResultKind === undefined) {
                this.__$isSearchResultKind = new lib3.MatchesEnum("SearchResultKind", new core.DartList.literal("DECLARATION", "INVOCATION", "READ", "READ_WRITE", "REFERENCE", "UNKNOWN", "WRITE"));
            }
            return this.__$isSearchResultKind;
        },
        set: function (__$value) {
            this.__$isSearchResultKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisError", {
        get: function () {
            if (this.__$isAnalysisError === undefined) {
                this.__$isAnalysisError = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("AnalysisError", new core.DartMap.literal([
                        ["severity", properties.isAnalysisErrorSeverity],
                        ["type", properties.isAnalysisErrorType],
                        ["location", properties.isLocation],
                        ["message", lib3.properties.isString],
                        ["code", lib3.properties.isString]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["correction", lib3.properties.isString],
                            ["hasFix", lib3.properties.isBool]
                        ])
                    });
                });
            }
            return this.__$isAnalysisError;
        },
        set: function (__$value) {
            this.__$isAnalysisError = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisErrorFixes", {
        get: function () {
            if (this.__$isAnalysisErrorFixes === undefined) {
                this.__$isAnalysisErrorFixes = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("AnalysisErrorFixes", new core.DartMap.literal([
                        ["error", properties.isAnalysisError],
                        ["fixes", lib3.isListOf(properties.isSourceChange)]
                    ]));
                });
            }
            return this.__$isAnalysisErrorFixes;
        },
        set: function (__$value) {
            this.__$isAnalysisErrorFixes = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisErrorSeverity", {
        get: function () {
            if (this.__$isAnalysisErrorSeverity === undefined) {
                this.__$isAnalysisErrorSeverity = new lib3.MatchesEnum("AnalysisErrorSeverity", new core.DartList.literal("INFO", "WARNING", "ERROR"));
            }
            return this.__$isAnalysisErrorSeverity;
        },
        set: function (__$value) {
            this.__$isAnalysisErrorSeverity = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisErrorType", {
        get: function () {
            if (this.__$isAnalysisErrorType === undefined) {
                this.__$isAnalysisErrorType = new lib3.MatchesEnum("AnalysisErrorType", new core.DartList.literal("CHECKED_MODE_COMPILE_TIME_ERROR", "COMPILE_TIME_ERROR", "HINT", "LINT", "STATIC_TYPE_WARNING", "STATIC_WARNING", "SYNTACTIC_ERROR", "TODO"));
            }
            return this.__$isAnalysisErrorType;
        },
        set: function (__$value) {
            this.__$isAnalysisErrorType = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisOptions", {
        get: function () {
            if (this.__$isAnalysisOptions === undefined) {
                this.__$isAnalysisOptions = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("AnalysisOptions", null, {
                        optionalFields: new core.DartMap.literal([
                            ["enableAsync", lib3.properties.isBool],
                            ["enableDeferredLoading", lib3.properties.isBool],
                            ["enableEnums", lib3.properties.isBool],
                            ["enableNullAwareOperators", lib3.properties.isBool],
                            ["enableSuperMixins", lib3.properties.isBool],
                            ["generateDart2jsHints", lib3.properties.isBool],
                            ["generateHints", lib3.properties.isBool],
                            ["generateLints", lib3.properties.isBool]
                        ])
                    });
                });
            }
            return this.__$isAnalysisOptions;
        },
        set: function (__$value) {
            this.__$isAnalysisOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisService", {
        get: function () {
            if (this.__$isAnalysisService === undefined) {
                this.__$isAnalysisService = new lib3.MatchesEnum("AnalysisService", new core.DartList.literal("FOLDING", "HIGHLIGHTS", "IMPLEMENTED", "INVALIDATE", "NAVIGATION", "OCCURRENCES", "OUTLINE", "OVERRIDES"));
            }
            return this.__$isAnalysisService;
        },
        set: function (__$value) {
            this.__$isAnalysisService = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisStatus", {
        get: function () {
            if (this.__$isAnalysisStatus === undefined) {
                this.__$isAnalysisStatus = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("AnalysisStatus", new core.DartMap.literal([
                        ["isAnalyzing", lib3.properties.isBool]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["analysisTarget", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isAnalysisStatus;
        },
        set: function (__$value) {
            this.__$isAnalysisStatus = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isChangeContentOverlay", {
        get: function () {
            if (this.__$isChangeContentOverlay === undefined) {
                this.__$isChangeContentOverlay = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("ChangeContentOverlay", new core.DartMap.literal([
                        ["type", _common_1.equals("change")],
                        ["edits", lib3.isListOf(properties.isSourceEdit)]
                    ]));
                });
            }
            return this.__$isChangeContentOverlay;
        },
        set: function (__$value) {
            this.__$isChangeContentOverlay = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isCompletionId", {
        get: function () {
            if (this.__$isCompletionId === undefined) {
                this.__$isCompletionId = lib3.properties.isString;
            }
            return this.__$isCompletionId;
        },
        set: function (__$value) {
            this.__$isCompletionId = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isCompletionSuggestion", {
        get: function () {
            if (this.__$isCompletionSuggestion === undefined) {
                this.__$isCompletionSuggestion = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("CompletionSuggestion", new core.DartMap.literal([
                        ["kind", properties.isCompletionSuggestionKind],
                        ["relevance", lib3.properties.isInt],
                        ["completion", lib3.properties.isString],
                        ["selectionOffset", lib3.properties.isInt],
                        ["selectionLength", lib3.properties.isInt],
                        ["isDeprecated", lib3.properties.isBool],
                        ["isPotential", lib3.properties.isBool]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["docSummary", lib3.properties.isString],
                            ["docComplete", lib3.properties.isString],
                            ["declaringType", lib3.properties.isString],
                            ["defaultArgumentListString", lib3.properties.isString],
                            ["defaultArgumentListTextRanges", lib3.isListOf(lib3.properties.isInt)],
                            ["element", properties.isElement],
                            ["returnType", lib3.properties.isString],
                            ["parameterNames", lib3.isListOf(lib3.properties.isString)],
                            ["parameterTypes", lib3.isListOf(lib3.properties.isString)],
                            ["requiredParameterCount", lib3.properties.isInt],
                            ["hasNamedParameters", lib3.properties.isBool],
                            ["parameterName", lib3.properties.isString],
                            ["parameterType", lib3.properties.isString],
                            ["importUri", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isCompletionSuggestion;
        },
        set: function (__$value) {
            this.__$isCompletionSuggestion = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isCompletionSuggestionKind", {
        get: function () {
            if (this.__$isCompletionSuggestionKind === undefined) {
                this.__$isCompletionSuggestionKind = new lib3.MatchesEnum("CompletionSuggestionKind", new core.DartList.literal("ARGUMENT_LIST", "IMPORT", "IDENTIFIER", "INVOCATION", "KEYWORD", "NAMED_ARGUMENT", "OPTIONAL_ARGUMENT", "PARAMETER"));
            }
            return this.__$isCompletionSuggestionKind;
        },
        set: function (__$value) {
            this.__$isCompletionSuggestionKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isContextData", {
        get: function () {
            if (this.__$isContextData === undefined) {
                this.__$isContextData = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("ContextData", new core.DartMap.literal([
                        ["name", lib3.properties.isString],
                        ["explicitFileCount", lib3.properties.isInt],
                        ["implicitFileCount", lib3.properties.isInt],
                        ["workItemQueueLength", lib3.properties.isInt],
                        ["cacheEntryExceptions", lib3.isListOf(lib3.properties.isString)]
                    ]));
                });
            }
            return this.__$isContextData;
        },
        set: function (__$value) {
            this.__$isContextData = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isElement", {
        get: function () {
            if (this.__$isElement === undefined) {
                this.__$isElement = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("Element", new core.DartMap.literal([
                        ["kind", properties.isElementKind],
                        ["name", lib3.properties.isString],
                        ["flags", lib3.properties.isInt]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["location", properties.isLocation],
                            ["parameters", lib3.properties.isString],
                            ["returnType", lib3.properties.isString],
                            ["typeParameters", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isElement;
        },
        set: function (__$value) {
            this.__$isElement = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isElementKind", {
        get: function () {
            if (this.__$isElementKind === undefined) {
                this.__$isElementKind = new lib3.MatchesEnum("ElementKind", new core.DartList.literal("CLASS", "CLASS_TYPE_ALIAS", "COMPILATION_UNIT", "CONSTRUCTOR", "ENUM", "ENUM_CONSTANT", "FIELD", "FILE", "FUNCTION", "FUNCTION_TYPE_ALIAS", "GETTER", "LABEL", "LIBRARY", "LOCAL_VARIABLE", "METHOD", "PARAMETER", "PREFIX", "SETTER", "TOP_LEVEL_VARIABLE", "TYPE_PARAMETER", "UNIT_TEST_GROUP", "UNIT_TEST_TEST", "UNKNOWN"));
            }
            return this.__$isElementKind;
        },
        set: function (__$value) {
            this.__$isElementKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutableFile", {
        get: function () {
            if (this.__$isExecutableFile === undefined) {
                this.__$isExecutableFile = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("ExecutableFile", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["kind", properties.isExecutableKind]
                    ]));
                });
            }
            return this.__$isExecutableFile;
        },
        set: function (__$value) {
            this.__$isExecutableFile = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutableKind", {
        get: function () {
            if (this.__$isExecutableKind === undefined) {
                this.__$isExecutableKind = new lib3.MatchesEnum("ExecutableKind", new core.DartList.literal("CLIENT", "EITHER", "NOT_EXECUTABLE", "SERVER"));
            }
            return this.__$isExecutableKind;
        },
        set: function (__$value) {
            this.__$isExecutableKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionContextId", {
        get: function () {
            if (this.__$isExecutionContextId === undefined) {
                this.__$isExecutionContextId = lib3.properties.isString;
            }
            return this.__$isExecutionContextId;
        },
        set: function (__$value) {
            this.__$isExecutionContextId = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionService", {
        get: function () {
            if (this.__$isExecutionService === undefined) {
                this.__$isExecutionService = new lib3.MatchesEnum("ExecutionService", new core.DartList.literal("LAUNCH_DATA"));
            }
            return this.__$isExecutionService;
        },
        set: function (__$value) {
            this.__$isExecutionService = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isFileKind", {
        get: function () {
            if (this.__$isFileKind === undefined) {
                this.__$isFileKind = new lib3.MatchesEnum("FileKind", new core.DartList.literal("LIBRARY", "PART"));
            }
            return this.__$isFileKind;
        },
        set: function (__$value) {
            this.__$isFileKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isFilePath", {
        get: function () {
            if (this.__$isFilePath === undefined) {
                this.__$isFilePath = lib3.properties.isString;
            }
            return this.__$isFilePath;
        },
        set: function (__$value) {
            this.__$isFilePath = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isFoldingKind", {
        get: function () {
            if (this.__$isFoldingKind === undefined) {
                this.__$isFoldingKind = new lib3.MatchesEnum("FoldingKind", new core.DartList.literal("COMMENT", "CLASS_MEMBER", "DIRECTIVES", "DOCUMENTATION_COMMENT", "TOP_LEVEL_DECLARATION"));
            }
            return this.__$isFoldingKind;
        },
        set: function (__$value) {
            this.__$isFoldingKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isFoldingRegion", {
        get: function () {
            if (this.__$isFoldingRegion === undefined) {
                this.__$isFoldingRegion = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("FoldingRegion", new core.DartMap.literal([
                        ["kind", properties.isFoldingKind],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isFoldingRegion;
        },
        set: function (__$value) {
            this.__$isFoldingRegion = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isGeneralAnalysisService", {
        get: function () {
            if (this.__$isGeneralAnalysisService === undefined) {
                this.__$isGeneralAnalysisService = new lib3.MatchesEnum("GeneralAnalysisService", new core.DartList.literal("ANALYZED_FILES"));
            }
            return this.__$isGeneralAnalysisService;
        },
        set: function (__$value) {
            this.__$isGeneralAnalysisService = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isHighlightRegion", {
        get: function () {
            if (this.__$isHighlightRegion === undefined) {
                this.__$isHighlightRegion = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("HighlightRegion", new core.DartMap.literal([
                        ["type", properties.isHighlightRegionType],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isHighlightRegion;
        },
        set: function (__$value) {
            this.__$isHighlightRegion = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isHighlightRegionType", {
        get: function () {
            if (this.__$isHighlightRegionType === undefined) {
                this.__$isHighlightRegionType = new lib3.MatchesEnum("HighlightRegionType", new core.DartList.literal("ANNOTATION", "BUILT_IN", "CLASS", "COMMENT_BLOCK", "COMMENT_DOCUMENTATION", "COMMENT_END_OF_LINE", "CONSTRUCTOR", "DIRECTIVE", "DYNAMIC_TYPE", "DYNAMIC_LOCAL_VARIABLE_DECLARATION", "DYNAMIC_LOCAL_VARIABLE_REFERENCE", "DYNAMIC_PARAMETER_DECLARATION", "DYNAMIC_PARAMETER_REFERENCE", "ENUM", "ENUM_CONSTANT", "FIELD", "FIELD_STATIC", "FUNCTION", "FUNCTION_DECLARATION", "FUNCTION_TYPE_ALIAS", "GETTER_DECLARATION", "IDENTIFIER_DEFAULT", "IMPORT_PREFIX", "INSTANCE_FIELD_DECLARATION", "INSTANCE_FIELD_REFERENCE", "INSTANCE_GETTER_DECLARATION", "INSTANCE_GETTER_REFERENCE", "INSTANCE_METHOD_DECLARATION", "INSTANCE_METHOD_REFERENCE", "INSTANCE_SETTER_DECLARATION", "INSTANCE_SETTER_REFERENCE", "INVALID_STRING_ESCAPE", "KEYWORD", "LABEL", "LIBRARY_NAME", "LITERAL_BOOLEAN", "LITERAL_DOUBLE", "LITERAL_INTEGER", "LITERAL_LIST", "LITERAL_MAP", "LITERAL_STRING", "LOCAL_FUNCTION_DECLARATION", "LOCAL_FUNCTION_REFERENCE", "LOCAL_VARIABLE", "LOCAL_VARIABLE_DECLARATION", "LOCAL_VARIABLE_REFERENCE", "METHOD", "METHOD_DECLARATION", "METHOD_DECLARATION_STATIC", "METHOD_STATIC", "PARAMETER", "SETTER_DECLARATION", "TOP_LEVEL_VARIABLE", "PARAMETER_DECLARATION", "PARAMETER_REFERENCE", "STATIC_FIELD_DECLARATION", "STATIC_GETTER_DECLARATION", "STATIC_GETTER_REFERENCE", "STATIC_METHOD_DECLARATION", "STATIC_METHOD_REFERENCE", "STATIC_SETTER_DECLARATION", "STATIC_SETTER_REFERENCE", "TOP_LEVEL_FUNCTION_DECLARATION", "TOP_LEVEL_FUNCTION_REFERENCE", "TOP_LEVEL_GETTER_DECLARATION", "TOP_LEVEL_GETTER_REFERENCE", "TOP_LEVEL_SETTER_DECLARATION", "TOP_LEVEL_SETTER_REFERENCE", "TOP_LEVEL_VARIABLE_DECLARATION", "TYPE_NAME_DYNAMIC", "TYPE_PARAMETER", "UNRESOLVED_INSTANCE_MEMBER_REFERENCE", "VALID_STRING_ESCAPE"));
            }
            return this.__$isHighlightRegionType;
        },
        set: function (__$value) {
            this.__$isHighlightRegionType = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isHoverInformation", {
        get: function () {
            if (this.__$isHoverInformation === undefined) {
                this.__$isHoverInformation = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("HoverInformation", new core.DartMap.literal([
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["containingLibraryPath", lib3.properties.isString],
                            ["containingLibraryName", lib3.properties.isString],
                            ["containingClassDescription", lib3.properties.isString],
                            ["dartdoc", lib3.properties.isString],
                            ["elementDescription", lib3.properties.isString],
                            ["elementKind", lib3.properties.isString],
                            ["isDeprecated", lib3.properties.isBool],
                            ["parameter", lib3.properties.isString],
                            ["propagatedType", lib3.properties.isString],
                            ["staticType", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isHoverInformation;
        },
        set: function (__$value) {
            this.__$isHoverInformation = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isImplementedClass", {
        get: function () {
            if (this.__$isImplementedClass === undefined) {
                this.__$isImplementedClass = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("ImplementedClass", new core.DartMap.literal([
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isImplementedClass;
        },
        set: function (__$value) {
            this.__$isImplementedClass = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isImplementedMember", {
        get: function () {
            if (this.__$isImplementedMember === undefined) {
                this.__$isImplementedMember = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("ImplementedMember", new core.DartMap.literal([
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isImplementedMember;
        },
        set: function (__$value) {
            this.__$isImplementedMember = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isLinkedEditGroup", {
        get: function () {
            if (this.__$isLinkedEditGroup === undefined) {
                this.__$isLinkedEditGroup = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("LinkedEditGroup", new core.DartMap.literal([
                        ["positions", lib3.isListOf(properties.isPosition)],
                        ["length", lib3.properties.isInt],
                        ["suggestions", lib3.isListOf(properties.isLinkedEditSuggestion)]
                    ]));
                });
            }
            return this.__$isLinkedEditGroup;
        },
        set: function (__$value) {
            this.__$isLinkedEditGroup = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isLinkedEditSuggestion", {
        get: function () {
            if (this.__$isLinkedEditSuggestion === undefined) {
                this.__$isLinkedEditSuggestion = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("LinkedEditSuggestion", new core.DartMap.literal([
                        ["value", lib3.properties.isString],
                        ["kind", properties.isLinkedEditSuggestionKind]
                    ]));
                });
            }
            return this.__$isLinkedEditSuggestion;
        },
        set: function (__$value) {
            this.__$isLinkedEditSuggestion = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isLinkedEditSuggestionKind", {
        get: function () {
            if (this.__$isLinkedEditSuggestionKind === undefined) {
                this.__$isLinkedEditSuggestionKind = new lib3.MatchesEnum("LinkedEditSuggestionKind", new core.DartList.literal("METHOD", "PARAMETER", "TYPE", "VARIABLE"));
            }
            return this.__$isLinkedEditSuggestionKind;
        },
        set: function (__$value) {
            this.__$isLinkedEditSuggestionKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isLocation", {
        get: function () {
            if (this.__$isLocation === undefined) {
                this.__$isLocation = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("Location", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt],
                        ["startLine", lib3.properties.isInt],
                        ["startColumn", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isLocation;
        },
        set: function (__$value) {
            this.__$isLocation = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isNavigationRegion", {
        get: function () {
            if (this.__$isNavigationRegion === undefined) {
                this.__$isNavigationRegion = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("NavigationRegion", new core.DartMap.literal([
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt],
                        ["targets", lib3.isListOf(lib3.properties.isInt)]
                    ]));
                });
            }
            return this.__$isNavigationRegion;
        },
        set: function (__$value) {
            this.__$isNavigationRegion = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isNavigationTarget", {
        get: function () {
            if (this.__$isNavigationTarget === undefined) {
                this.__$isNavigationTarget = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("NavigationTarget", new core.DartMap.literal([
                        ["kind", properties.isElementKind],
                        ["fileIndex", lib3.properties.isInt],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt],
                        ["startLine", lib3.properties.isInt],
                        ["startColumn", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isNavigationTarget;
        },
        set: function (__$value) {
            this.__$isNavigationTarget = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isOccurrences", {
        get: function () {
            if (this.__$isOccurrences === undefined) {
                this.__$isOccurrences = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("Occurrences", new core.DartMap.literal([
                        ["element", properties.isElement],
                        ["offsets", lib3.isListOf(lib3.properties.isInt)],
                        ["length", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isOccurrences;
        },
        set: function (__$value) {
            this.__$isOccurrences = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isOutline", {
        get: function () {
            if (this.__$isOutline === undefined) {
                this.__$isOutline = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("Outline", new core.DartMap.literal([
                        ["element", properties.isElement],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["children", lib3.isListOf(properties.isOutline)]
                        ])
                    });
                });
            }
            return this.__$isOutline;
        },
        set: function (__$value) {
            this.__$isOutline = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isOverriddenMember", {
        get: function () {
            if (this.__$isOverriddenMember === undefined) {
                this.__$isOverriddenMember = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("OverriddenMember", new core.DartMap.literal([
                        ["element", properties.isElement],
                        ["className", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isOverriddenMember;
        },
        set: function (__$value) {
            this.__$isOverriddenMember = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isOverride", {
        get: function () {
            if (this.__$isOverride === undefined) {
                this.__$isOverride = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("Override", new core.DartMap.literal([
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["superclassMember", properties.isOverriddenMember],
                            ["interfaceMembers", lib3.isListOf(properties.isOverriddenMember)]
                        ])
                    });
                });
            }
            return this.__$isOverride;
        },
        set: function (__$value) {
            this.__$isOverride = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isPosition", {
        get: function () {
            if (this.__$isPosition === undefined) {
                this.__$isPosition = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("Position", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isPosition;
        },
        set: function (__$value) {
            this.__$isPosition = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isPubStatus", {
        get: function () {
            if (this.__$isPubStatus === undefined) {
                this.__$isPubStatus = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("PubStatus", new core.DartMap.literal([
                        ["isListingPackageDirs", lib3.properties.isBool]
                    ]));
                });
            }
            return this.__$isPubStatus;
        },
        set: function (__$value) {
            this.__$isPubStatus = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRefactoringFeedback", {
        get: function () {
            if (this.__$isRefactoringFeedback === undefined) {
                this.__$isRefactoringFeedback = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("RefactoringFeedback", null);
                });
            }
            return this.__$isRefactoringFeedback;
        },
        set: function (__$value) {
            this.__$isRefactoringFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRefactoringKind", {
        get: function () {
            if (this.__$isRefactoringKind === undefined) {
                this.__$isRefactoringKind = new lib3.MatchesEnum("RefactoringKind", new core.DartList.literal("CONVERT_GETTER_TO_METHOD", "CONVERT_METHOD_TO_GETTER", "EXTRACT_LOCAL_VARIABLE", "EXTRACT_METHOD", "INLINE_LOCAL_VARIABLE", "INLINE_METHOD", "MOVE_FILE", "RENAME", "SORT_MEMBERS"));
            }
            return this.__$isRefactoringKind;
        },
        set: function (__$value) {
            this.__$isRefactoringKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRefactoringMethodParameter", {
        get: function () {
            if (this.__$isRefactoringMethodParameter === undefined) {
                this.__$isRefactoringMethodParameter = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("RefactoringMethodParameter", new core.DartMap.literal([
                        ["kind", properties.isRefactoringMethodParameterKind],
                        ["type", lib3.properties.isString],
                        ["name", lib3.properties.isString]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["id", lib3.properties.isString],
                            ["parameters", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isRefactoringMethodParameter;
        },
        set: function (__$value) {
            this.__$isRefactoringMethodParameter = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRefactoringMethodParameterKind", {
        get: function () {
            if (this.__$isRefactoringMethodParameterKind === undefined) {
                this.__$isRefactoringMethodParameterKind = new lib3.MatchesEnum("RefactoringMethodParameterKind", new core.DartList.literal("REQUIRED", "POSITIONAL", "NAMED"));
            }
            return this.__$isRefactoringMethodParameterKind;
        },
        set: function (__$value) {
            this.__$isRefactoringMethodParameterKind = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRefactoringOptions", {
        get: function () {
            if (this.__$isRefactoringOptions === undefined) {
                this.__$isRefactoringOptions = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("RefactoringOptions", null);
                });
            }
            return this.__$isRefactoringOptions;
        },
        set: function (__$value) {
            this.__$isRefactoringOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRefactoringProblem", {
        get: function () {
            if (this.__$isRefactoringProblem === undefined) {
                this.__$isRefactoringProblem = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("RefactoringProblem", new core.DartMap.literal([
                        ["severity", properties.isRefactoringProblemSeverity],
                        ["message", lib3.properties.isString]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["location", properties.isLocation]
                        ])
                    });
                });
            }
            return this.__$isRefactoringProblem;
        },
        set: function (__$value) {
            this.__$isRefactoringProblem = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRefactoringProblemSeverity", {
        get: function () {
            if (this.__$isRefactoringProblemSeverity === undefined) {
                this.__$isRefactoringProblemSeverity = new lib3.MatchesEnum("RefactoringProblemSeverity", new core.DartList.literal("INFO", "WARNING", "ERROR", "FATAL"));
            }
            return this.__$isRefactoringProblemSeverity;
        },
        set: function (__$value) {
            this.__$isRefactoringProblemSeverity = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRemoveContentOverlay", {
        get: function () {
            if (this.__$isRemoveContentOverlay === undefined) {
                this.__$isRemoveContentOverlay = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("RemoveContentOverlay", new core.DartMap.literal([
                        ["type", _common_1.equals("remove")]
                    ]));
                });
            }
            return this.__$isRemoveContentOverlay;
        },
        set: function (__$value) {
            this.__$isRemoveContentOverlay = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRequestError", {
        get: function () {
            if (this.__$isRequestError === undefined) {
                this.__$isRequestError = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("RequestError", new core.DartMap.literal([
                        ["code", properties.isRequestErrorCode],
                        ["message", lib3.properties.isString]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["stackTrace", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isRequestError;
        },
        set: function (__$value) {
            this.__$isRequestError = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRequestErrorCode", {
        get: function () {
            if (this.__$isRequestErrorCode === undefined) {
                this.__$isRequestErrorCode = new lib3.MatchesEnum("RequestErrorCode", new core.DartList.literal("CONTENT_MODIFIED", "DEBUG_PORT_COULD_NOT_BE_OPENED", "FILE_NOT_ANALYZED", "FORMAT_INVALID_FILE", "FORMAT_WITH_ERRORS", "GET_ERRORS_INVALID_FILE", "GET_NAVIGATION_INVALID_FILE", "GET_REACHABLE_SOURCES_INVALID_FILE", "INVALID_ANALYSIS_ROOT", "INVALID_EXECUTION_CONTEXT", "INVALID_FILE_PATH_FORMAT", "INVALID_OVERLAY_CHANGE", "INVALID_PARAMETER", "INVALID_REQUEST", "ORGANIZE_DIRECTIVES_ERROR", "REFACTORING_REQUEST_CANCELLED", "SERVER_ALREADY_STARTED", "SERVER_ERROR", "SORT_MEMBERS_INVALID_FILE", "SORT_MEMBERS_PARSE_ERRORS", "UNANALYZED_PRIORITY_FILES", "UNKNOWN_REQUEST", "UNKNOWN_SOURCE", "UNSUPPORTED_FEATURE"));
            }
            return this.__$isRequestErrorCode;
        },
        set: function (__$value) {
            this.__$isRequestErrorCode = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchId", {
        get: function () {
            if (this.__$isSearchId === undefined) {
                this.__$isSearchId = lib3.properties.isString;
            }
            return this.__$isSearchId;
        },
        set: function (__$value) {
            this.__$isSearchId = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchResult", {
        get: function () {
            if (this.__$isSearchResult === undefined) {
                this.__$isSearchResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("SearchResult", new core.DartMap.literal([
                        ["location", properties.isLocation],
                        ["kind", properties.isSearchResultKind],
                        ["isPotential", lib3.properties.isBool],
                        ["path", lib3.isListOf(properties.isElement)]
                    ]));
                });
            }
            return this.__$isSearchResult;
        },
        set: function (__$value) {
            this.__$isSearchResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAddContentOverlay", {
        get: function () {
            if (this.__$isAddContentOverlay === undefined) {
                this.__$isAddContentOverlay = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("AddContentOverlay", new core.DartMap.literal([
                        ["type", _common_1.equals("add")],
                        ["content", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isAddContentOverlay;
        },
        set: function (__$value) {
            this.__$isAddContentOverlay = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerService", {
        get: function () {
            if (this.__$isServerService === undefined) {
                this.__$isServerService = new lib3.MatchesEnum("ServerService", new core.DartList.literal("STATUS"));
            }
            return this.__$isServerService;
        },
        set: function (__$value) {
            this.__$isServerService = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSourceChange", {
        get: function () {
            if (this.__$isSourceChange === undefined) {
                this.__$isSourceChange = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("SourceChange", new core.DartMap.literal([
                        ["message", lib3.properties.isString],
                        ["edits", lib3.isListOf(properties.isSourceFileEdit)],
                        ["linkedEditGroups", lib3.isListOf(properties.isLinkedEditGroup)]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["selection", properties.isPosition]
                        ])
                    });
                });
            }
            return this.__$isSourceChange;
        },
        set: function (__$value) {
            this.__$isSourceChange = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSourceEdit", {
        get: function () {
            if (this.__$isSourceEdit === undefined) {
                this.__$isSourceEdit = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("SourceEdit", new core.DartMap.literal([
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt],
                        ["replacement", lib3.properties.isString]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["id", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isSourceEdit;
        },
        set: function (__$value) {
            this.__$isSourceEdit = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSourceFileEdit", {
        get: function () {
            if (this.__$isSourceFileEdit === undefined) {
                this.__$isSourceFileEdit = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("SourceFileEdit", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["fileStamp", lib3.properties.isInt],
                        ["edits", lib3.isListOf(properties.isSourceEdit)]
                    ]));
                });
            }
            return this.__$isSourceFileEdit;
        },
        set: function (__$value) {
            this.__$isSourceFileEdit = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isTypeHierarchyItem", {
        get: function () {
            if (this.__$isTypeHierarchyItem === undefined) {
                this.__$isTypeHierarchyItem = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("TypeHierarchyItem", new core.DartMap.literal([
                        ["classElement", properties.isElement],
                        ["interfaces", lib3.isListOf(lib3.properties.isInt)],
                        ["mixins", lib3.isListOf(lib3.properties.isInt)],
                        ["subclasses", lib3.isListOf(lib3.properties.isInt)]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["displayName", lib3.properties.isString],
                            ["memberElement", properties.isElement],
                            ["superclass", lib3.properties.isInt]
                        ])
                    });
                });
            }
            return this.__$isTypeHierarchyItem;
        },
        set: function (__$value) {
            this.__$isTypeHierarchyItem = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisAnalyzedFilesParams", {
        get: function () {
            if (this.__$isAnalysisAnalyzedFilesParams === undefined) {
                this.__$isAnalysisAnalyzedFilesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.analyzedFiles params", new core.DartMap.literal([
                        ["directories", lib3.isListOf(properties.isFilePath)]
                    ]));
                });
            }
            return this.__$isAnalysisAnalyzedFilesParams;
        },
        set: function (__$value) {
            this.__$isAnalysisAnalyzedFilesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisErrorsParams", {
        get: function () {
            if (this.__$isAnalysisErrorsParams === undefined) {
                this.__$isAnalysisErrorsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.errors params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["errors", lib3.isListOf(properties.isAnalysisError)]
                    ]));
                });
            }
            return this.__$isAnalysisErrorsParams;
        },
        set: function (__$value) {
            this.__$isAnalysisErrorsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisFlushResultsParams", {
        get: function () {
            if (this.__$isAnalysisFlushResultsParams === undefined) {
                this.__$isAnalysisFlushResultsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.flushResults params", new core.DartMap.literal([
                        ["files", lib3.isListOf(properties.isFilePath)]
                    ]));
                });
            }
            return this.__$isAnalysisFlushResultsParams;
        },
        set: function (__$value) {
            this.__$isAnalysisFlushResultsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisFoldingParams", {
        get: function () {
            if (this.__$isAnalysisFoldingParams === undefined) {
                this.__$isAnalysisFoldingParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.folding params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["regions", lib3.isListOf(properties.isFoldingRegion)]
                    ]));
                });
            }
            return this.__$isAnalysisFoldingParams;
        },
        set: function (__$value) {
            this.__$isAnalysisFoldingParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetErrorsParams", {
        get: function () {
            if (this.__$isAnalysisGetErrorsParams === undefined) {
                this.__$isAnalysisGetErrorsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getErrors params", new core.DartMap.literal([
                        ["file", properties.isFilePath]
                    ]));
                });
            }
            return this.__$isAnalysisGetErrorsParams;
        },
        set: function (__$value) {
            this.__$isAnalysisGetErrorsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetErrorsResult", {
        get: function () {
            if (this.__$isAnalysisGetErrorsResult === undefined) {
                this.__$isAnalysisGetErrorsResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getErrors result", new core.DartMap.literal([
                        ["errors", lib3.isListOf(properties.isAnalysisError)]
                    ]));
                });
            }
            return this.__$isAnalysisGetErrorsResult;
        },
        set: function (__$value) {
            this.__$isAnalysisGetErrorsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetHoverParams", {
        get: function () {
            if (this.__$isAnalysisGetHoverParams === undefined) {
                this.__$isAnalysisGetHoverParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getHover params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isAnalysisGetHoverParams;
        },
        set: function (__$value) {
            this.__$isAnalysisGetHoverParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetHoverResult", {
        get: function () {
            if (this.__$isAnalysisGetHoverResult === undefined) {
                this.__$isAnalysisGetHoverResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getHover result", new core.DartMap.literal([
                        ["hovers", lib3.isListOf(properties.isHoverInformation)]
                    ]));
                });
            }
            return this.__$isAnalysisGetHoverResult;
        },
        set: function (__$value) {
            this.__$isAnalysisGetHoverResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetLibraryDependenciesParams", {
        get: function () {
            if (this.__$isAnalysisGetLibraryDependenciesParams === undefined) {
                this.__$isAnalysisGetLibraryDependenciesParams = isNull;
            }
            return this.__$isAnalysisGetLibraryDependenciesParams;
        },
        set: function (__$value) {
            this.__$isAnalysisGetLibraryDependenciesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetLibraryDependenciesResult", {
        get: function () {
            if (this.__$isAnalysisGetLibraryDependenciesResult === undefined) {
                this.__$isAnalysisGetLibraryDependenciesResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getLibraryDependencies result", new core.DartMap.literal([
                        ["libraries", lib3.isListOf(properties.isFilePath)],
                        ["packageMap", lib3.isMapOf(lib3.properties.isString, lib3.isMapOf(lib3.properties.isString, lib3.isListOf(properties.isFilePath)))]
                    ]));
                });
            }
            return this.__$isAnalysisGetLibraryDependenciesResult;
        },
        set: function (__$value) {
            this.__$isAnalysisGetLibraryDependenciesResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetNavigationParams", {
        get: function () {
            if (this.__$isAnalysisGetNavigationParams === undefined) {
                this.__$isAnalysisGetNavigationParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getNavigation params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isAnalysisGetNavigationParams;
        },
        set: function (__$value) {
            this.__$isAnalysisGetNavigationParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetNavigationResult", {
        get: function () {
            if (this.__$isAnalysisGetNavigationResult === undefined) {
                this.__$isAnalysisGetNavigationResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getNavigation result", new core.DartMap.literal([
                        ["files", lib3.isListOf(properties.isFilePath)],
                        ["targets", lib3.isListOf(properties.isNavigationTarget)],
                        ["regions", lib3.isListOf(properties.isNavigationRegion)]
                    ]));
                });
            }
            return this.__$isAnalysisGetNavigationResult;
        },
        set: function (__$value) {
            this.__$isAnalysisGetNavigationResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetReachableSourcesParams", {
        get: function () {
            if (this.__$isAnalysisGetReachableSourcesParams === undefined) {
                this.__$isAnalysisGetReachableSourcesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getReachableSources params", new core.DartMap.literal([
                        ["file", properties.isFilePath]
                    ]));
                });
            }
            return this.__$isAnalysisGetReachableSourcesParams;
        },
        set: function (__$value) {
            this.__$isAnalysisGetReachableSourcesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisGetReachableSourcesResult", {
        get: function () {
            if (this.__$isAnalysisGetReachableSourcesResult === undefined) {
                this.__$isAnalysisGetReachableSourcesResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.getReachableSources result", new core.DartMap.literal([
                        ["sources", lib3.isMapOf(lib3.properties.isString, lib3.isListOf(lib3.properties.isString))]
                    ]));
                });
            }
            return this.__$isAnalysisGetReachableSourcesResult;
        },
        set: function (__$value) {
            this.__$isAnalysisGetReachableSourcesResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisHighlightsParams", {
        get: function () {
            if (this.__$isAnalysisHighlightsParams === undefined) {
                this.__$isAnalysisHighlightsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.highlights params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["regions", lib3.isListOf(properties.isHighlightRegion)]
                    ]));
                });
            }
            return this.__$isAnalysisHighlightsParams;
        },
        set: function (__$value) {
            this.__$isAnalysisHighlightsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisImplementedParams", {
        get: function () {
            if (this.__$isAnalysisImplementedParams === undefined) {
                this.__$isAnalysisImplementedParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.implemented params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["classes", lib3.isListOf(properties.isImplementedClass)],
                        ["members", lib3.isListOf(properties.isImplementedMember)]
                    ]));
                });
            }
            return this.__$isAnalysisImplementedParams;
        },
        set: function (__$value) {
            this.__$isAnalysisImplementedParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisInvalidateParams", {
        get: function () {
            if (this.__$isAnalysisInvalidateParams === undefined) {
                this.__$isAnalysisInvalidateParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.invalidate params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt],
                        ["delta", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isAnalysisInvalidateParams;
        },
        set: function (__$value) {
            this.__$isAnalysisInvalidateParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisNavigationParams", {
        get: function () {
            if (this.__$isAnalysisNavigationParams === undefined) {
                this.__$isAnalysisNavigationParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.navigation params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["regions", lib3.isListOf(properties.isNavigationRegion)],
                        ["targets", lib3.isListOf(properties.isNavigationTarget)],
                        ["files", lib3.isListOf(properties.isFilePath)]
                    ]));
                });
            }
            return this.__$isAnalysisNavigationParams;
        },
        set: function (__$value) {
            this.__$isAnalysisNavigationParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisOccurrencesParams", {
        get: function () {
            if (this.__$isAnalysisOccurrencesParams === undefined) {
                this.__$isAnalysisOccurrencesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.occurrences params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["occurrences", lib3.isListOf(properties.isOccurrences)]
                    ]));
                });
            }
            return this.__$isAnalysisOccurrencesParams;
        },
        set: function (__$value) {
            this.__$isAnalysisOccurrencesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisOutlineParams", {
        get: function () {
            if (this.__$isAnalysisOutlineParams === undefined) {
                this.__$isAnalysisOutlineParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.outline params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["kind", properties.isFileKind],
                        ["outline", properties.isOutline]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["libraryName", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isAnalysisOutlineParams;
        },
        set: function (__$value) {
            this.__$isAnalysisOutlineParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisOverridesParams", {
        get: function () {
            if (this.__$isAnalysisOverridesParams === undefined) {
                this.__$isAnalysisOverridesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.overrides params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["overrides", lib3.isListOf(properties.isOverride)]
                    ]));
                });
            }
            return this.__$isAnalysisOverridesParams;
        },
        set: function (__$value) {
            this.__$isAnalysisOverridesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisReanalyzeParams", {
        get: function () {
            if (this.__$isAnalysisReanalyzeParams === undefined) {
                this.__$isAnalysisReanalyzeParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.reanalyze params", null, {
                        optionalFields: new core.DartMap.literal([
                            ["roots", lib3.isListOf(properties.isFilePath)]
                        ])
                    });
                });
            }
            return this.__$isAnalysisReanalyzeParams;
        },
        set: function (__$value) {
            this.__$isAnalysisReanalyzeParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisReanalyzeResult", {
        get: function () {
            if (this.__$isAnalysisReanalyzeResult === undefined) {
                this.__$isAnalysisReanalyzeResult = isNull;
            }
            return this.__$isAnalysisReanalyzeResult;
        },
        set: function (__$value) {
            this.__$isAnalysisReanalyzeResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisSetAnalysisRootsParams", {
        get: function () {
            if (this.__$isAnalysisSetAnalysisRootsParams === undefined) {
                this.__$isAnalysisSetAnalysisRootsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.setAnalysisRoots params", new core.DartMap.literal([
                        ["included", lib3.isListOf(properties.isFilePath)],
                        ["excluded", lib3.isListOf(properties.isFilePath)]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["packageRoots", lib3.isMapOf(properties.isFilePath, properties.isFilePath)]
                        ])
                    });
                });
            }
            return this.__$isAnalysisSetAnalysisRootsParams;
        },
        set: function (__$value) {
            this.__$isAnalysisSetAnalysisRootsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisSetAnalysisRootsResult", {
        get: function () {
            if (this.__$isAnalysisSetAnalysisRootsResult === undefined) {
                this.__$isAnalysisSetAnalysisRootsResult = isNull;
            }
            return this.__$isAnalysisSetAnalysisRootsResult;
        },
        set: function (__$value) {
            this.__$isAnalysisSetAnalysisRootsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisSetGeneralSubscriptionsParams", {
        get: function () {
            if (this.__$isAnalysisSetGeneralSubscriptionsParams === undefined) {
                this.__$isAnalysisSetGeneralSubscriptionsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.setGeneralSubscriptions params", new core.DartMap.literal([
                        ["subscriptions", lib3.isListOf(properties.isGeneralAnalysisService)]
                    ]));
                });
            }
            return this.__$isAnalysisSetGeneralSubscriptionsParams;
        },
        set: function (__$value) {
            this.__$isAnalysisSetGeneralSubscriptionsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisSetGeneralSubscriptionsResult", {
        get: function () {
            if (this.__$isAnalysisSetGeneralSubscriptionsResult === undefined) {
                this.__$isAnalysisSetGeneralSubscriptionsResult = isNull;
            }
            return this.__$isAnalysisSetGeneralSubscriptionsResult;
        },
        set: function (__$value) {
            this.__$isAnalysisSetGeneralSubscriptionsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisSetPriorityFilesParams", {
        get: function () {
            if (this.__$isAnalysisSetPriorityFilesParams === undefined) {
                this.__$isAnalysisSetPriorityFilesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.setPriorityFiles params", new core.DartMap.literal([
                        ["files", lib3.isListOf(properties.isFilePath)]
                    ]));
                });
            }
            return this.__$isAnalysisSetPriorityFilesParams;
        },
        set: function (__$value) {
            this.__$isAnalysisSetPriorityFilesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisSetPriorityFilesResult", {
        get: function () {
            if (this.__$isAnalysisSetPriorityFilesResult === undefined) {
                this.__$isAnalysisSetPriorityFilesResult = isNull;
            }
            return this.__$isAnalysisSetPriorityFilesResult;
        },
        set: function (__$value) {
            this.__$isAnalysisSetPriorityFilesResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisSetSubscriptionsParams", {
        get: function () {
            if (this.__$isAnalysisSetSubscriptionsParams === undefined) {
                this.__$isAnalysisSetSubscriptionsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.setSubscriptions params", new core.DartMap.literal([
                        ["subscriptions", lib3.isMapOf(properties.isAnalysisService, lib3.isListOf(properties.isFilePath))]
                    ]));
                });
            }
            return this.__$isAnalysisSetSubscriptionsParams;
        },
        set: function (__$value) {
            this.__$isAnalysisSetSubscriptionsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisSetSubscriptionsResult", {
        get: function () {
            if (this.__$isAnalysisSetSubscriptionsResult === undefined) {
                this.__$isAnalysisSetSubscriptionsResult = isNull;
            }
            return this.__$isAnalysisSetSubscriptionsResult;
        },
        set: function (__$value) {
            this.__$isAnalysisSetSubscriptionsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisUpdateContentParams", {
        get: function () {
            if (this.__$isAnalysisUpdateContentParams === undefined) {
                this.__$isAnalysisUpdateContentParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.updateContent params", new core.DartMap.literal([
                        ["files", lib3.isMapOf(properties.isFilePath, lib3.isOneOf(new core.DartList.literal(properties.isAddContentOverlay, properties.isChangeContentOverlay, properties.isRemoveContentOverlay)))]
                    ]));
                });
            }
            return this.__$isAnalysisUpdateContentParams;
        },
        set: function (__$value) {
            this.__$isAnalysisUpdateContentParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisUpdateContentResult", {
        get: function () {
            if (this.__$isAnalysisUpdateContentResult === undefined) {
                this.__$isAnalysisUpdateContentResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.updateContent result", null);
                });
            }
            return this.__$isAnalysisUpdateContentResult;
        },
        set: function (__$value) {
            this.__$isAnalysisUpdateContentResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisUpdateOptionsParams", {
        get: function () {
            if (this.__$isAnalysisUpdateOptionsParams === undefined) {
                this.__$isAnalysisUpdateOptionsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("analysis.updateOptions params", new core.DartMap.literal([
                        ["options", properties.isAnalysisOptions]
                    ]));
                });
            }
            return this.__$isAnalysisUpdateOptionsParams;
        },
        set: function (__$value) {
            this.__$isAnalysisUpdateOptionsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isAnalysisUpdateOptionsResult", {
        get: function () {
            if (this.__$isAnalysisUpdateOptionsResult === undefined) {
                this.__$isAnalysisUpdateOptionsResult = isNull;
            }
            return this.__$isAnalysisUpdateOptionsResult;
        },
        set: function (__$value) {
            this.__$isAnalysisUpdateOptionsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isCompletionGetSuggestionsParams", {
        get: function () {
            if (this.__$isCompletionGetSuggestionsParams === undefined) {
                this.__$isCompletionGetSuggestionsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("completion.getSuggestions params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isCompletionGetSuggestionsParams;
        },
        set: function (__$value) {
            this.__$isCompletionGetSuggestionsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isCompletionGetSuggestionsResult", {
        get: function () {
            if (this.__$isCompletionGetSuggestionsResult === undefined) {
                this.__$isCompletionGetSuggestionsResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("completion.getSuggestions result", new core.DartMap.literal([
                        ["id", properties.isCompletionId]
                    ]));
                });
            }
            return this.__$isCompletionGetSuggestionsResult;
        },
        set: function (__$value) {
            this.__$isCompletionGetSuggestionsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isCompletionResultsParams", {
        get: function () {
            if (this.__$isCompletionResultsParams === undefined) {
                this.__$isCompletionResultsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("completion.results params", new core.DartMap.literal([
                        ["id", properties.isCompletionId],
                        ["replacementOffset", lib3.properties.isInt],
                        ["replacementLength", lib3.properties.isInt],
                        ["results", lib3.isListOf(properties.isCompletionSuggestion)],
                        ["isLast", lib3.properties.isBool]
                    ]));
                });
            }
            return this.__$isCompletionResultsParams;
        },
        set: function (__$value) {
            this.__$isCompletionResultsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isConvertGetterToMethodFeedback", {
        get: function () {
            if (this.__$isConvertGetterToMethodFeedback === undefined) {
                this.__$isConvertGetterToMethodFeedback = isNull;
            }
            return this.__$isConvertGetterToMethodFeedback;
        },
        set: function (__$value) {
            this.__$isConvertGetterToMethodFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isConvertGetterToMethodOptions", {
        get: function () {
            if (this.__$isConvertGetterToMethodOptions === undefined) {
                this.__$isConvertGetterToMethodOptions = isNull;
            }
            return this.__$isConvertGetterToMethodOptions;
        },
        set: function (__$value) {
            this.__$isConvertGetterToMethodOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isConvertMethodToGetterFeedback", {
        get: function () {
            if (this.__$isConvertMethodToGetterFeedback === undefined) {
                this.__$isConvertMethodToGetterFeedback = isNull;
            }
            return this.__$isConvertMethodToGetterFeedback;
        },
        set: function (__$value) {
            this.__$isConvertMethodToGetterFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isConvertMethodToGetterOptions", {
        get: function () {
            if (this.__$isConvertMethodToGetterOptions === undefined) {
                this.__$isConvertMethodToGetterOptions = isNull;
            }
            return this.__$isConvertMethodToGetterOptions;
        },
        set: function (__$value) {
            this.__$isConvertMethodToGetterOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isDiagnosticGetDiagnosticsParams", {
        get: function () {
            if (this.__$isDiagnosticGetDiagnosticsParams === undefined) {
                this.__$isDiagnosticGetDiagnosticsParams = isNull;
            }
            return this.__$isDiagnosticGetDiagnosticsParams;
        },
        set: function (__$value) {
            this.__$isDiagnosticGetDiagnosticsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isDiagnosticGetDiagnosticsResult", {
        get: function () {
            if (this.__$isDiagnosticGetDiagnosticsResult === undefined) {
                this.__$isDiagnosticGetDiagnosticsResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("diagnostic.getDiagnostics result", new core.DartMap.literal([
                        ["contexts", lib3.isListOf(properties.isContextData)]
                    ]));
                });
            }
            return this.__$isDiagnosticGetDiagnosticsResult;
        },
        set: function (__$value) {
            this.__$isDiagnosticGetDiagnosticsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isDiagnosticGetServerPortParams", {
        get: function () {
            if (this.__$isDiagnosticGetServerPortParams === undefined) {
                this.__$isDiagnosticGetServerPortParams = isNull;
            }
            return this.__$isDiagnosticGetServerPortParams;
        },
        set: function (__$value) {
            this.__$isDiagnosticGetServerPortParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isDiagnosticGetServerPortResult", {
        get: function () {
            if (this.__$isDiagnosticGetServerPortResult === undefined) {
                this.__$isDiagnosticGetServerPortResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("diagnostic.getServerPort result", new core.DartMap.literal([
                        ["port", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isDiagnosticGetServerPortResult;
        },
        set: function (__$value) {
            this.__$isDiagnosticGetServerPortResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditFormatParams", {
        get: function () {
            if (this.__$isEditFormatParams === undefined) {
                this.__$isEditFormatParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.format params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["selectionOffset", lib3.properties.isInt],
                        ["selectionLength", lib3.properties.isInt]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["lineLength", lib3.properties.isInt]
                        ])
                    });
                });
            }
            return this.__$isEditFormatParams;
        },
        set: function (__$value) {
            this.__$isEditFormatParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditFormatResult", {
        get: function () {
            if (this.__$isEditFormatResult === undefined) {
                this.__$isEditFormatResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.format result", new core.DartMap.literal([
                        ["edits", lib3.isListOf(properties.isSourceEdit)],
                        ["selectionOffset", lib3.properties.isInt],
                        ["selectionLength", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isEditFormatResult;
        },
        set: function (__$value) {
            this.__$isEditFormatResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerStatusParams", {
        get: function () {
            if (this.__$isServerStatusParams === undefined) {
                this.__$isServerStatusParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("server.status params", null, {
                        optionalFields: new core.DartMap.literal([
                            ["analysis", properties.isAnalysisStatus],
                            ["pub", properties.isPubStatus]
                        ])
                    });
                });
            }
            return this.__$isServerStatusParams;
        },
        set: function (__$value) {
            this.__$isServerStatusParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetAssistsResult", {
        get: function () {
            if (this.__$isEditGetAssistsResult === undefined) {
                this.__$isEditGetAssistsResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getAssists result", new core.DartMap.literal([
                        ["assists", lib3.isListOf(properties.isSourceChange)]
                    ]));
                });
            }
            return this.__$isEditGetAssistsResult;
        },
        set: function (__$value) {
            this.__$isEditGetAssistsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetAvailableRefactoringsParams", {
        get: function () {
            if (this.__$isEditGetAvailableRefactoringsParams === undefined) {
                this.__$isEditGetAvailableRefactoringsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getAvailableRefactorings params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isEditGetAvailableRefactoringsParams;
        },
        set: function (__$value) {
            this.__$isEditGetAvailableRefactoringsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetAvailableRefactoringsResult", {
        get: function () {
            if (this.__$isEditGetAvailableRefactoringsResult === undefined) {
                this.__$isEditGetAvailableRefactoringsResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getAvailableRefactorings result", new core.DartMap.literal([
                        ["kinds", lib3.isListOf(properties.isRefactoringKind)]
                    ]));
                });
            }
            return this.__$isEditGetAvailableRefactoringsResult;
        },
        set: function (__$value) {
            this.__$isEditGetAvailableRefactoringsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetFixesParams", {
        get: function () {
            if (this.__$isEditGetFixesParams === undefined) {
                this.__$isEditGetFixesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getFixes params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isEditGetFixesParams;
        },
        set: function (__$value) {
            this.__$isEditGetFixesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetFixesResult", {
        get: function () {
            if (this.__$isEditGetFixesResult === undefined) {
                this.__$isEditGetFixesResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getFixes result", new core.DartMap.literal([
                        ["fixes", lib3.isListOf(properties.isAnalysisErrorFixes)]
                    ]));
                });
            }
            return this.__$isEditGetFixesResult;
        },
        set: function (__$value) {
            this.__$isEditGetFixesResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetRefactoringParams", {
        get: function () {
            if (this.__$isEditGetRefactoringParams === undefined) {
                this.__$isEditGetRefactoringParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getRefactoring params", new core.DartMap.literal([
                        ["kind", properties.isRefactoringKind],
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt],
                        ["validateOnly", lib3.properties.isBool]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["options", properties.isRefactoringOptions]
                        ])
                    });
                });
            }
            return this.__$isEditGetRefactoringParams;
        },
        set: function (__$value) {
            this.__$isEditGetRefactoringParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetRefactoringResult", {
        get: function () {
            if (this.__$isEditGetRefactoringResult === undefined) {
                this.__$isEditGetRefactoringResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getRefactoring result", new core.DartMap.literal([
                        ["initialProblems", lib3.isListOf(properties.isRefactoringProblem)],
                        ["optionsProblems", lib3.isListOf(properties.isRefactoringProblem)],
                        ["finalProblems", lib3.isListOf(properties.isRefactoringProblem)]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["feedback", properties.isRefactoringFeedback],
                            ["change", properties.isSourceChange],
                            ["potentialEdits", lib3.isListOf(lib3.properties.isString)]
                        ])
                    });
                });
            }
            return this.__$isEditGetRefactoringResult;
        },
        set: function (__$value) {
            this.__$isEditGetRefactoringResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetStatementCompletionParams", {
        get: function () {
            if (this.__$isEditGetStatementCompletionParams === undefined) {
                this.__$isEditGetStatementCompletionParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getStatementCompletion params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isEditGetStatementCompletionParams;
        },
        set: function (__$value) {
            this.__$isEditGetStatementCompletionParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetStatementCompletionResult", {
        get: function () {
            if (this.__$isEditGetStatementCompletionResult === undefined) {
                this.__$isEditGetStatementCompletionResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getStatementCompletion result", new core.DartMap.literal([
                        ["change", properties.isSourceChange],
                        ["whitespaceOnly", lib3.properties.isBool]
                    ]));
                });
            }
            return this.__$isEditGetStatementCompletionResult;
        },
        set: function (__$value) {
            this.__$isEditGetStatementCompletionResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditOrganizeDirectivesParams", {
        get: function () {
            if (this.__$isEditOrganizeDirectivesParams === undefined) {
                this.__$isEditOrganizeDirectivesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.organizeDirectives params", new core.DartMap.literal([
                        ["file", properties.isFilePath]
                    ]));
                });
            }
            return this.__$isEditOrganizeDirectivesParams;
        },
        set: function (__$value) {
            this.__$isEditOrganizeDirectivesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditOrganizeDirectivesResult", {
        get: function () {
            if (this.__$isEditOrganizeDirectivesResult === undefined) {
                this.__$isEditOrganizeDirectivesResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.organizeDirectives result", new core.DartMap.literal([
                        ["edit", properties.isSourceFileEdit]
                    ]));
                });
            }
            return this.__$isEditOrganizeDirectivesResult;
        },
        set: function (__$value) {
            this.__$isEditOrganizeDirectivesResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditSortMembersParams", {
        get: function () {
            if (this.__$isEditSortMembersParams === undefined) {
                this.__$isEditSortMembersParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.sortMembers params", new core.DartMap.literal([
                        ["file", properties.isFilePath]
                    ]));
                });
            }
            return this.__$isEditSortMembersParams;
        },
        set: function (__$value) {
            this.__$isEditSortMembersParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditSortMembersResult", {
        get: function () {
            if (this.__$isEditSortMembersResult === undefined) {
                this.__$isEditSortMembersResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.sortMembers result", new core.DartMap.literal([
                        ["edit", properties.isSourceFileEdit]
                    ]));
                });
            }
            return this.__$isEditSortMembersResult;
        },
        set: function (__$value) {
            this.__$isEditSortMembersResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionCreateContextParams", {
        get: function () {
            if (this.__$isExecutionCreateContextParams === undefined) {
                this.__$isExecutionCreateContextParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("execution.createContext params", new core.DartMap.literal([
                        ["contextRoot", properties.isFilePath]
                    ]));
                });
            }
            return this.__$isExecutionCreateContextParams;
        },
        set: function (__$value) {
            this.__$isExecutionCreateContextParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionCreateContextResult", {
        get: function () {
            if (this.__$isExecutionCreateContextResult === undefined) {
                this.__$isExecutionCreateContextResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("execution.createContext result", new core.DartMap.literal([
                        ["id", properties.isExecutionContextId]
                    ]));
                });
            }
            return this.__$isExecutionCreateContextResult;
        },
        set: function (__$value) {
            this.__$isExecutionCreateContextResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionDeleteContextParams", {
        get: function () {
            if (this.__$isExecutionDeleteContextParams === undefined) {
                this.__$isExecutionDeleteContextParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("execution.deleteContext params", new core.DartMap.literal([
                        ["id", properties.isExecutionContextId]
                    ]));
                });
            }
            return this.__$isExecutionDeleteContextParams;
        },
        set: function (__$value) {
            this.__$isExecutionDeleteContextParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionDeleteContextResult", {
        get: function () {
            if (this.__$isExecutionDeleteContextResult === undefined) {
                this.__$isExecutionDeleteContextResult = isNull;
            }
            return this.__$isExecutionDeleteContextResult;
        },
        set: function (__$value) {
            this.__$isExecutionDeleteContextResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionLaunchDataParams", {
        get: function () {
            if (this.__$isExecutionLaunchDataParams === undefined) {
                this.__$isExecutionLaunchDataParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("execution.launchData params", new core.DartMap.literal([
                        ["file", properties.isFilePath]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["kind", properties.isExecutableKind],
                            ["referencedFiles", lib3.isListOf(properties.isFilePath)]
                        ])
                    });
                });
            }
            return this.__$isExecutionLaunchDataParams;
        },
        set: function (__$value) {
            this.__$isExecutionLaunchDataParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionMapUriParams", {
        get: function () {
            if (this.__$isExecutionMapUriParams === undefined) {
                this.__$isExecutionMapUriParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("execution.mapUri params", new core.DartMap.literal([
                        ["id", properties.isExecutionContextId]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["file", properties.isFilePath],
                            ["uri", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isExecutionMapUriParams;
        },
        set: function (__$value) {
            this.__$isExecutionMapUriParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionMapUriResult", {
        get: function () {
            if (this.__$isExecutionMapUriResult === undefined) {
                this.__$isExecutionMapUriResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("execution.mapUri result", null, {
                        optionalFields: new core.DartMap.literal([
                            ["file", properties.isFilePath],
                            ["uri", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isExecutionMapUriResult;
        },
        set: function (__$value) {
            this.__$isExecutionMapUriResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionSetSubscriptionsParams", {
        get: function () {
            if (this.__$isExecutionSetSubscriptionsParams === undefined) {
                this.__$isExecutionSetSubscriptionsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("execution.setSubscriptions params", new core.DartMap.literal([
                        ["subscriptions", lib3.isListOf(properties.isExecutionService)]
                    ]));
                });
            }
            return this.__$isExecutionSetSubscriptionsParams;
        },
        set: function (__$value) {
            this.__$isExecutionSetSubscriptionsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExecutionSetSubscriptionsResult", {
        get: function () {
            if (this.__$isExecutionSetSubscriptionsResult === undefined) {
                this.__$isExecutionSetSubscriptionsResult = isNull;
            }
            return this.__$isExecutionSetSubscriptionsResult;
        },
        set: function (__$value) {
            this.__$isExecutionSetSubscriptionsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExtractLocalVariableFeedback", {
        get: function () {
            if (this.__$isExtractLocalVariableFeedback === undefined) {
                this.__$isExtractLocalVariableFeedback = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("extractLocalVariable feedback", new core.DartMap.literal([
                        ["names", lib3.isListOf(lib3.properties.isString)],
                        ["offsets", lib3.isListOf(lib3.properties.isInt)],
                        ["lengths", lib3.isListOf(lib3.properties.isInt)]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["coveringExpressionOffsets", lib3.isListOf(lib3.properties.isInt)],
                            ["coveringExpressionLengths", lib3.isListOf(lib3.properties.isInt)]
                        ])
                    });
                });
            }
            return this.__$isExtractLocalVariableFeedback;
        },
        set: function (__$value) {
            this.__$isExtractLocalVariableFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExtractLocalVariableOptions", {
        get: function () {
            if (this.__$isExtractLocalVariableOptions === undefined) {
                this.__$isExtractLocalVariableOptions = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("extractLocalVariable options", new core.DartMap.literal([
                        ["name", lib3.properties.isString],
                        ["extractAll", lib3.properties.isBool]
                    ]));
                });
            }
            return this.__$isExtractLocalVariableOptions;
        },
        set: function (__$value) {
            this.__$isExtractLocalVariableOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExtractMethodFeedback", {
        get: function () {
            if (this.__$isExtractMethodFeedback === undefined) {
                this.__$isExtractMethodFeedback = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("extractMethod feedback", new core.DartMap.literal([
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt],
                        ["returnType", lib3.properties.isString],
                        ["names", lib3.isListOf(lib3.properties.isString)],
                        ["canCreateGetter", lib3.properties.isBool],
                        ["parameters", lib3.isListOf(properties.isRefactoringMethodParameter)],
                        ["offsets", lib3.isListOf(lib3.properties.isInt)],
                        ["lengths", lib3.isListOf(lib3.properties.isInt)]
                    ]));
                });
            }
            return this.__$isExtractMethodFeedback;
        },
        set: function (__$value) {
            this.__$isExtractMethodFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isExtractMethodOptions", {
        get: function () {
            if (this.__$isExtractMethodOptions === undefined) {
                this.__$isExtractMethodOptions = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("extractMethod options", new core.DartMap.literal([
                        ["returnType", lib3.properties.isString],
                        ["createGetter", lib3.properties.isBool],
                        ["name", lib3.properties.isString],
                        ["parameters", lib3.isListOf(properties.isRefactoringMethodParameter)],
                        ["extractAll", lib3.properties.isBool]
                    ]));
                });
            }
            return this.__$isExtractMethodOptions;
        },
        set: function (__$value) {
            this.__$isExtractMethodOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isInlineLocalVariableFeedback", {
        get: function () {
            if (this.__$isInlineLocalVariableFeedback === undefined) {
                this.__$isInlineLocalVariableFeedback = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("inlineLocalVariable feedback", new core.DartMap.literal([
                        ["name", lib3.properties.isString],
                        ["occurrences", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isInlineLocalVariableFeedback;
        },
        set: function (__$value) {
            this.__$isInlineLocalVariableFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isInlineLocalVariableOptions", {
        get: function () {
            if (this.__$isInlineLocalVariableOptions === undefined) {
                this.__$isInlineLocalVariableOptions = isNull;
            }
            return this.__$isInlineLocalVariableOptions;
        },
        set: function (__$value) {
            this.__$isInlineLocalVariableOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isInlineMethodFeedback", {
        get: function () {
            if (this.__$isInlineMethodFeedback === undefined) {
                this.__$isInlineMethodFeedback = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("inlineMethod feedback", new core.DartMap.literal([
                        ["methodName", lib3.properties.isString],
                        ["isDeclaration", lib3.properties.isBool]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["className", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isInlineMethodFeedback;
        },
        set: function (__$value) {
            this.__$isInlineMethodFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isInlineMethodOptions", {
        get: function () {
            if (this.__$isInlineMethodOptions === undefined) {
                this.__$isInlineMethodOptions = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("inlineMethod options", new core.DartMap.literal([
                        ["deleteSource", lib3.properties.isBool],
                        ["inlineAll", lib3.properties.isBool]
                    ]));
                });
            }
            return this.__$isInlineMethodOptions;
        },
        set: function (__$value) {
            this.__$isInlineMethodOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isMoveFileFeedback", {
        get: function () {
            if (this.__$isMoveFileFeedback === undefined) {
                this.__$isMoveFileFeedback = isNull;
            }
            return this.__$isMoveFileFeedback;
        },
        set: function (__$value) {
            this.__$isMoveFileFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isMoveFileOptions", {
        get: function () {
            if (this.__$isMoveFileOptions === undefined) {
                this.__$isMoveFileOptions = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("moveFile options", new core.DartMap.literal([
                        ["newFile", properties.isFilePath]
                    ]));
                });
            }
            return this.__$isMoveFileOptions;
        },
        set: function (__$value) {
            this.__$isMoveFileOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRenameFeedback", {
        get: function () {
            if (this.__$isRenameFeedback === undefined) {
                this.__$isRenameFeedback = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("rename feedback", new core.DartMap.literal([
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt],
                        ["elementKindName", lib3.properties.isString],
                        ["oldName", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isRenameFeedback;
        },
        set: function (__$value) {
            this.__$isRenameFeedback = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isRenameOptions", {
        get: function () {
            if (this.__$isRenameOptions === undefined) {
                this.__$isRenameOptions = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("rename options", new core.DartMap.literal([
                        ["newName", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isRenameOptions;
        },
        set: function (__$value) {
            this.__$isRenameOptions = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchFindElementReferencesParams", {
        get: function () {
            if (this.__$isSearchFindElementReferencesParams === undefined) {
                this.__$isSearchFindElementReferencesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.findElementReferences params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt],
                        ["includePotential", lib3.properties.isBool]
                    ]));
                });
            }
            return this.__$isSearchFindElementReferencesParams;
        },
        set: function (__$value) {
            this.__$isSearchFindElementReferencesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchFindElementReferencesResult", {
        get: function () {
            if (this.__$isSearchFindElementReferencesResult === undefined) {
                this.__$isSearchFindElementReferencesResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.findElementReferences result", null, {
                        optionalFields: new core.DartMap.literal([
                            ["id", properties.isSearchId],
                            ["element", properties.isElement]
                        ])
                    });
                });
            }
            return this.__$isSearchFindElementReferencesResult;
        },
        set: function (__$value) {
            this.__$isSearchFindElementReferencesResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchFindMemberDeclarationsParams", {
        get: function () {
            if (this.__$isSearchFindMemberDeclarationsParams === undefined) {
                this.__$isSearchFindMemberDeclarationsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.findMemberDeclarations params", new core.DartMap.literal([
                        ["name", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isSearchFindMemberDeclarationsParams;
        },
        set: function (__$value) {
            this.__$isSearchFindMemberDeclarationsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchFindMemberDeclarationsResult", {
        get: function () {
            if (this.__$isSearchFindMemberDeclarationsResult === undefined) {
                this.__$isSearchFindMemberDeclarationsResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.findMemberDeclarations result", new core.DartMap.literal([
                        ["id", properties.isSearchId]
                    ]));
                });
            }
            return this.__$isSearchFindMemberDeclarationsResult;
        },
        set: function (__$value) {
            this.__$isSearchFindMemberDeclarationsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchFindMemberReferencesParams", {
        get: function () {
            if (this.__$isSearchFindMemberReferencesParams === undefined) {
                this.__$isSearchFindMemberReferencesParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.findMemberReferences params", new core.DartMap.literal([
                        ["name", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isSearchFindMemberReferencesParams;
        },
        set: function (__$value) {
            this.__$isSearchFindMemberReferencesParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchFindMemberReferencesResult", {
        get: function () {
            if (this.__$isSearchFindMemberReferencesResult === undefined) {
                this.__$isSearchFindMemberReferencesResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.findMemberReferences result", new core.DartMap.literal([
                        ["id", properties.isSearchId]
                    ]));
                });
            }
            return this.__$isSearchFindMemberReferencesResult;
        },
        set: function (__$value) {
            this.__$isSearchFindMemberReferencesResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchFindTopLevelDeclarationsParams", {
        get: function () {
            if (this.__$isSearchFindTopLevelDeclarationsParams === undefined) {
                this.__$isSearchFindTopLevelDeclarationsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.findTopLevelDeclarations params", new core.DartMap.literal([
                        ["pattern", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isSearchFindTopLevelDeclarationsParams;
        },
        set: function (__$value) {
            this.__$isSearchFindTopLevelDeclarationsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchFindTopLevelDeclarationsResult", {
        get: function () {
            if (this.__$isSearchFindTopLevelDeclarationsResult === undefined) {
                this.__$isSearchFindTopLevelDeclarationsResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.findTopLevelDeclarations result", new core.DartMap.literal([
                        ["id", properties.isSearchId]
                    ]));
                });
            }
            return this.__$isSearchFindTopLevelDeclarationsResult;
        },
        set: function (__$value) {
            this.__$isSearchFindTopLevelDeclarationsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchGetTypeHierarchyParams", {
        get: function () {
            if (this.__$isSearchGetTypeHierarchyParams === undefined) {
                this.__$isSearchGetTypeHierarchyParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.getTypeHierarchy params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["superOnly", lib3.properties.isBool]
                        ])
                    });
                });
            }
            return this.__$isSearchGetTypeHierarchyParams;
        },
        set: function (__$value) {
            this.__$isSearchGetTypeHierarchyParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchGetTypeHierarchyResult", {
        get: function () {
            if (this.__$isSearchGetTypeHierarchyResult === undefined) {
                this.__$isSearchGetTypeHierarchyResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.getTypeHierarchy result", null, {
                        optionalFields: new core.DartMap.literal([
                            ["hierarchyItems", lib3.isListOf(properties.isTypeHierarchyItem)]
                        ])
                    });
                });
            }
            return this.__$isSearchGetTypeHierarchyResult;
        },
        set: function (__$value) {
            this.__$isSearchGetTypeHierarchyResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isSearchResultsParams", {
        get: function () {
            if (this.__$isSearchResultsParams === undefined) {
                this.__$isSearchResultsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("search.results params", new core.DartMap.literal([
                        ["id", properties.isSearchId],
                        ["results", lib3.isListOf(properties.isSearchResult)],
                        ["isLast", lib3.properties.isBool]
                    ]));
                });
            }
            return this.__$isSearchResultsParams;
        },
        set: function (__$value) {
            this.__$isSearchResultsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerConnectedParams", {
        get: function () {
            if (this.__$isServerConnectedParams === undefined) {
                this.__$isServerConnectedParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("server.connected params", new core.DartMap.literal([
                        ["version", lib3.properties.isString],
                        ["pid", lib3.properties.isInt]
                    ]), {
                        optionalFields: new core.DartMap.literal([
                            ["sessionId", lib3.properties.isString]
                        ])
                    });
                });
            }
            return this.__$isServerConnectedParams;
        },
        set: function (__$value) {
            this.__$isServerConnectedParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerErrorParams", {
        get: function () {
            if (this.__$isServerErrorParams === undefined) {
                this.__$isServerErrorParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("server.error params", new core.DartMap.literal([
                        ["isFatal", lib3.properties.isBool],
                        ["message", lib3.properties.isString],
                        ["stackTrace", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isServerErrorParams;
        },
        set: function (__$value) {
            this.__$isServerErrorParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerGetVersionParams", {
        get: function () {
            if (this.__$isServerGetVersionParams === undefined) {
                this.__$isServerGetVersionParams = isNull;
            }
            return this.__$isServerGetVersionParams;
        },
        set: function (__$value) {
            this.__$isServerGetVersionParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerGetVersionResult", {
        get: function () {
            if (this.__$isServerGetVersionResult === undefined) {
                this.__$isServerGetVersionResult = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("server.getVersion result", new core.DartMap.literal([
                        ["version", lib3.properties.isString]
                    ]));
                });
            }
            return this.__$isServerGetVersionResult;
        },
        set: function (__$value) {
            this.__$isServerGetVersionResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerSetSubscriptionsParams", {
        get: function () {
            if (this.__$isServerSetSubscriptionsParams === undefined) {
                this.__$isServerSetSubscriptionsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("server.setSubscriptions params", new core.DartMap.literal([
                        ["subscriptions", lib3.isListOf(properties.isServerService)]
                    ]));
                });
            }
            return this.__$isServerSetSubscriptionsParams;
        },
        set: function (__$value) {
            this.__$isServerSetSubscriptionsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerSetSubscriptionsResult", {
        get: function () {
            if (this.__$isServerSetSubscriptionsResult === undefined) {
                this.__$isServerSetSubscriptionsResult = isNull;
            }
            return this.__$isServerSetSubscriptionsResult;
        },
        set: function (__$value) {
            this.__$isServerSetSubscriptionsResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerShutdownParams", {
        get: function () {
            if (this.__$isServerShutdownParams === undefined) {
                this.__$isServerShutdownParams = isNull;
            }
            return this.__$isServerShutdownParams;
        },
        set: function (__$value) {
            this.__$isServerShutdownParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isServerShutdownResult", {
        get: function () {
            if (this.__$isServerShutdownResult === undefined) {
                this.__$isServerShutdownResult = isNull;
            }
            return this.__$isServerShutdownResult;
        },
        set: function (__$value) {
            this.__$isServerShutdownResult = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "isEditGetAssistsParams", {
        get: function () {
            if (this.__$isEditGetAssistsParams === undefined) {
                this.__$isEditGetAssistsParams = new lib3.LazyMatcher(function () {
                    return new lib3.MatchesJsonObject("edit.getAssists params", new core.DartMap.literal([
                        ["file", properties.isFilePath],
                        ["offset", lib3.properties.isInt],
                        ["length", lib3.properties.isInt]
                    ]));
                });
            }
            return this.__$isEditGetAssistsParams;
        },
        set: function (__$value) {
            this.__$isEditGetAssistsParams = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=protocol_matchers.js.map