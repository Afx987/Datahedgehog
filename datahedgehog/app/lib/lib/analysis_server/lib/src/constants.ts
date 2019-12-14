/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/constants.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$EDIT_SORT_MEMBERS : string;
    static get EDIT_SORT_MEMBERS() : string { 
        if (this.__$EDIT_SORT_MEMBERS===undefined) {
            this.__$EDIT_SORT_MEMBERS = 'edit.sortMembers';
        }
        return this.__$EDIT_SORT_MEMBERS;
    }
    static set EDIT_SORT_MEMBERS(__$value : string)  { 
        this.__$EDIT_SORT_MEMBERS = __$value;
    }

    private static __$ADDED : string;
    static get ADDED() : string { 
        if (this.__$ADDED===undefined) {
            this.__$ADDED = 'added';
        }
        return this.__$ADDED;
    }
    static set ADDED(__$value : string)  { 
        this.__$ADDED = __$value;
    }

    private static __$ANALYSIS_ANALYZED_FILES : string;
    static get ANALYSIS_ANALYZED_FILES() : string { 
        if (this.__$ANALYSIS_ANALYZED_FILES===undefined) {
            this.__$ANALYSIS_ANALYZED_FILES = 'analysis.analyzedFiles';
        }
        return this.__$ANALYSIS_ANALYZED_FILES;
    }
    static set ANALYSIS_ANALYZED_FILES(__$value : string)  { 
        this.__$ANALYSIS_ANALYZED_FILES = __$value;
    }

    private static __$ANALYSIS_ERRORS : string;
    static get ANALYSIS_ERRORS() : string { 
        if (this.__$ANALYSIS_ERRORS===undefined) {
            this.__$ANALYSIS_ERRORS = 'analysis.errors';
        }
        return this.__$ANALYSIS_ERRORS;
    }
    static set ANALYSIS_ERRORS(__$value : string)  { 
        this.__$ANALYSIS_ERRORS = __$value;
    }

    private static __$ANALYSIS_GET_ERRORS : string;
    static get ANALYSIS_GET_ERRORS() : string { 
        if (this.__$ANALYSIS_GET_ERRORS===undefined) {
            this.__$ANALYSIS_GET_ERRORS = 'analysis.getErrors';
        }
        return this.__$ANALYSIS_GET_ERRORS;
    }
    static set ANALYSIS_GET_ERRORS(__$value : string)  { 
        this.__$ANALYSIS_GET_ERRORS = __$value;
    }

    private static __$ANALYSIS_GET_HOVER : string;
    static get ANALYSIS_GET_HOVER() : string { 
        if (this.__$ANALYSIS_GET_HOVER===undefined) {
            this.__$ANALYSIS_GET_HOVER = 'analysis.getHover';
        }
        return this.__$ANALYSIS_GET_HOVER;
    }
    static set ANALYSIS_GET_HOVER(__$value : string)  { 
        this.__$ANALYSIS_GET_HOVER = __$value;
    }

    private static __$ANALYSIS_GET_LIBRARY_DEPENDENCIES : string;
    static get ANALYSIS_GET_LIBRARY_DEPENDENCIES() : string { 
        if (this.__$ANALYSIS_GET_LIBRARY_DEPENDENCIES===undefined) {
            this.__$ANALYSIS_GET_LIBRARY_DEPENDENCIES = 'analysis.getLibraryDependencies';
        }
        return this.__$ANALYSIS_GET_LIBRARY_DEPENDENCIES;
    }
    static set ANALYSIS_GET_LIBRARY_DEPENDENCIES(__$value : string)  { 
        this.__$ANALYSIS_GET_LIBRARY_DEPENDENCIES = __$value;
    }

    private static __$ANALYSIS_GET_NAVIGATION : string;
    static get ANALYSIS_GET_NAVIGATION() : string { 
        if (this.__$ANALYSIS_GET_NAVIGATION===undefined) {
            this.__$ANALYSIS_GET_NAVIGATION = 'analysis.getNavigation';
        }
        return this.__$ANALYSIS_GET_NAVIGATION;
    }
    static set ANALYSIS_GET_NAVIGATION(__$value : string)  { 
        this.__$ANALYSIS_GET_NAVIGATION = __$value;
    }

    private static __$ANALYSIS_GET_REACHABLE_SOURCES : string;
    static get ANALYSIS_GET_REACHABLE_SOURCES() : string { 
        if (this.__$ANALYSIS_GET_REACHABLE_SOURCES===undefined) {
            this.__$ANALYSIS_GET_REACHABLE_SOURCES = 'analysis.getReachableSources';
        }
        return this.__$ANALYSIS_GET_REACHABLE_SOURCES;
    }
    static set ANALYSIS_GET_REACHABLE_SOURCES(__$value : string)  { 
        this.__$ANALYSIS_GET_REACHABLE_SOURCES = __$value;
    }

    private static __$ANALYSIS_HIGHLIGHTS : string;
    static get ANALYSIS_HIGHLIGHTS() : string { 
        if (this.__$ANALYSIS_HIGHLIGHTS===undefined) {
            this.__$ANALYSIS_HIGHLIGHTS = 'analysis.highlights';
        }
        return this.__$ANALYSIS_HIGHLIGHTS;
    }
    static set ANALYSIS_HIGHLIGHTS(__$value : string)  { 
        this.__$ANALYSIS_HIGHLIGHTS = __$value;
    }

    private static __$ANALYSIS_IMPLEMENTED : string;
    static get ANALYSIS_IMPLEMENTED() : string { 
        if (this.__$ANALYSIS_IMPLEMENTED===undefined) {
            this.__$ANALYSIS_IMPLEMENTED = 'analysis.implemented';
        }
        return this.__$ANALYSIS_IMPLEMENTED;
    }
    static set ANALYSIS_IMPLEMENTED(__$value : string)  { 
        this.__$ANALYSIS_IMPLEMENTED = __$value;
    }

    private static __$ANALYSIS_NAVIGATION : string;
    static get ANALYSIS_NAVIGATION() : string { 
        if (this.__$ANALYSIS_NAVIGATION===undefined) {
            this.__$ANALYSIS_NAVIGATION = 'analysis.navigation';
        }
        return this.__$ANALYSIS_NAVIGATION;
    }
    static set ANALYSIS_NAVIGATION(__$value : string)  { 
        this.__$ANALYSIS_NAVIGATION = __$value;
    }

    private static __$ANALYSIS_OCCURRENCES : string;
    static get ANALYSIS_OCCURRENCES() : string { 
        if (this.__$ANALYSIS_OCCURRENCES===undefined) {
            this.__$ANALYSIS_OCCURRENCES = 'analysis.occurrences';
        }
        return this.__$ANALYSIS_OCCURRENCES;
    }
    static set ANALYSIS_OCCURRENCES(__$value : string)  { 
        this.__$ANALYSIS_OCCURRENCES = __$value;
    }

    private static __$ANALYSIS_OUTLINE : string;
    static get ANALYSIS_OUTLINE() : string { 
        if (this.__$ANALYSIS_OUTLINE===undefined) {
            this.__$ANALYSIS_OUTLINE = 'analysis.outline';
        }
        return this.__$ANALYSIS_OUTLINE;
    }
    static set ANALYSIS_OUTLINE(__$value : string)  { 
        this.__$ANALYSIS_OUTLINE = __$value;
    }

    private static __$ANALYSIS_OVERRIDES : string;
    static get ANALYSIS_OVERRIDES() : string { 
        if (this.__$ANALYSIS_OVERRIDES===undefined) {
            this.__$ANALYSIS_OVERRIDES = 'analysis.overrides';
        }
        return this.__$ANALYSIS_OVERRIDES;
    }
    static set ANALYSIS_OVERRIDES(__$value : string)  { 
        this.__$ANALYSIS_OVERRIDES = __$value;
    }

    private static __$ANALYSIS_REANALYZE : string;
    static get ANALYSIS_REANALYZE() : string { 
        if (this.__$ANALYSIS_REANALYZE===undefined) {
            this.__$ANALYSIS_REANALYZE = 'analysis.reanalyze';
        }
        return this.__$ANALYSIS_REANALYZE;
    }
    static set ANALYSIS_REANALYZE(__$value : string)  { 
        this.__$ANALYSIS_REANALYZE = __$value;
    }

    private static __$ANALYSIS_SET_ANALYSIS_ROOTS : string;
    static get ANALYSIS_SET_ANALYSIS_ROOTS() : string { 
        if (this.__$ANALYSIS_SET_ANALYSIS_ROOTS===undefined) {
            this.__$ANALYSIS_SET_ANALYSIS_ROOTS = 'analysis.setAnalysisRoots';
        }
        return this.__$ANALYSIS_SET_ANALYSIS_ROOTS;
    }
    static set ANALYSIS_SET_ANALYSIS_ROOTS(__$value : string)  { 
        this.__$ANALYSIS_SET_ANALYSIS_ROOTS = __$value;
    }

    private static __$ANALYSIS_SET_GENERAL_SUBSCRIPTIONS : string;
    static get ANALYSIS_SET_GENERAL_SUBSCRIPTIONS() : string { 
        if (this.__$ANALYSIS_SET_GENERAL_SUBSCRIPTIONS===undefined) {
            this.__$ANALYSIS_SET_GENERAL_SUBSCRIPTIONS = 'analysis.setGeneralSubscriptions';
        }
        return this.__$ANALYSIS_SET_GENERAL_SUBSCRIPTIONS;
    }
    static set ANALYSIS_SET_GENERAL_SUBSCRIPTIONS(__$value : string)  { 
        this.__$ANALYSIS_SET_GENERAL_SUBSCRIPTIONS = __$value;
    }

    private static __$ANALYSIS_SET_PRIORITY_FILES : string;
    static get ANALYSIS_SET_PRIORITY_FILES() : string { 
        if (this.__$ANALYSIS_SET_PRIORITY_FILES===undefined) {
            this.__$ANALYSIS_SET_PRIORITY_FILES = 'analysis.setPriorityFiles';
        }
        return this.__$ANALYSIS_SET_PRIORITY_FILES;
    }
    static set ANALYSIS_SET_PRIORITY_FILES(__$value : string)  { 
        this.__$ANALYSIS_SET_PRIORITY_FILES = __$value;
    }

    private static __$ANALYSIS_SET_SUBSCRIPTIONS : string;
    static get ANALYSIS_SET_SUBSCRIPTIONS() : string { 
        if (this.__$ANALYSIS_SET_SUBSCRIPTIONS===undefined) {
            this.__$ANALYSIS_SET_SUBSCRIPTIONS = 'analysis.setSubscriptions';
        }
        return this.__$ANALYSIS_SET_SUBSCRIPTIONS;
    }
    static set ANALYSIS_SET_SUBSCRIPTIONS(__$value : string)  { 
        this.__$ANALYSIS_SET_SUBSCRIPTIONS = __$value;
    }

    private static __$ANALYSIS_UPDATE_CONTENT : string;
    static get ANALYSIS_UPDATE_CONTENT() : string { 
        if (this.__$ANALYSIS_UPDATE_CONTENT===undefined) {
            this.__$ANALYSIS_UPDATE_CONTENT = 'analysis.updateContent';
        }
        return this.__$ANALYSIS_UPDATE_CONTENT;
    }
    static set ANALYSIS_UPDATE_CONTENT(__$value : string)  { 
        this.__$ANALYSIS_UPDATE_CONTENT = __$value;
    }

    private static __$ANALYSIS_UPDATE_OPTIONS : string;
    static get ANALYSIS_UPDATE_OPTIONS() : string { 
        if (this.__$ANALYSIS_UPDATE_OPTIONS===undefined) {
            this.__$ANALYSIS_UPDATE_OPTIONS = 'analysis.updateOptions';
        }
        return this.__$ANALYSIS_UPDATE_OPTIONS;
    }
    static set ANALYSIS_UPDATE_OPTIONS(__$value : string)  { 
        this.__$ANALYSIS_UPDATE_OPTIONS = __$value;
    }

    private static __$ASSISTS : string;
    static get ASSISTS() : string { 
        if (this.__$ASSISTS===undefined) {
            this.__$ASSISTS = 'assists';
        }
        return this.__$ASSISTS;
    }
    static set ASSISTS(__$value : string)  { 
        this.__$ASSISTS = __$value;
    }

    private static __$CHANGE : string;
    static get CHANGE() : string { 
        if (this.__$CHANGE===undefined) {
            this.__$CHANGE = 'change';
        }
        return this.__$CHANGE;
    }
    static set CHANGE(__$value : string)  { 
        this.__$CHANGE = __$value;
    }

    private static __$CHILDREN : string;
    static get CHILDREN() : string { 
        if (this.__$CHILDREN===undefined) {
            this.__$CHILDREN = 'children';
        }
        return this.__$CHILDREN;
    }
    static set CHILDREN(__$value : string)  { 
        this.__$CHILDREN = __$value;
    }

    private static __$CLASS_ELEMENT : string;
    static get CLASS_ELEMENT() : string { 
        if (this.__$CLASS_ELEMENT===undefined) {
            this.__$CLASS_ELEMENT = 'classElement';
        }
        return this.__$CLASS_ELEMENT;
    }
    static set CLASS_ELEMENT(__$value : string)  { 
        this.__$CLASS_ELEMENT = __$value;
    }

    private static __$CLASS_NAME : string;
    static get CLASS_NAME() : string { 
        if (this.__$CLASS_NAME===undefined) {
            this.__$CLASS_NAME = 'className';
        }
        return this.__$CLASS_NAME;
    }
    static set CLASS_NAME(__$value : string)  { 
        this.__$CLASS_NAME = __$value;
    }

    private static __$CODE : string;
    static get CODE() : string { 
        if (this.__$CODE===undefined) {
            this.__$CODE = 'code';
        }
        return this.__$CODE;
    }
    static set CODE(__$value : string)  { 
        this.__$CODE = __$value;
    }

    private static __$COMPLETION : string;
    static get COMPLETION() : string { 
        if (this.__$COMPLETION===undefined) {
            this.__$COMPLETION = 'completion';
        }
        return this.__$COMPLETION;
    }
    static set COMPLETION(__$value : string)  { 
        this.__$COMPLETION = __$value;
    }

    private static __$COMPLETION_GET_SUGGESTIONS : string;
    static get COMPLETION_GET_SUGGESTIONS() : string { 
        if (this.__$COMPLETION_GET_SUGGESTIONS===undefined) {
            this.__$COMPLETION_GET_SUGGESTIONS = 'completion.getSuggestions';
        }
        return this.__$COMPLETION_GET_SUGGESTIONS;
    }
    static set COMPLETION_GET_SUGGESTIONS(__$value : string)  { 
        this.__$COMPLETION_GET_SUGGESTIONS = __$value;
    }

    private static __$COMPLETION_RESULTS : string;
    static get COMPLETION_RESULTS() : string { 
        if (this.__$COMPLETION_RESULTS===undefined) {
            this.__$COMPLETION_RESULTS = 'completion.results';
        }
        return this.__$COMPLETION_RESULTS;
    }
    static set COMPLETION_RESULTS(__$value : string)  { 
        this.__$COMPLETION_RESULTS = __$value;
    }

    private static __$CONTAINING_LIBRARY_NAME : string;
    static get CONTAINING_LIBRARY_NAME() : string { 
        if (this.__$CONTAINING_LIBRARY_NAME===undefined) {
            this.__$CONTAINING_LIBRARY_NAME = 'containingLibraryName';
        }
        return this.__$CONTAINING_LIBRARY_NAME;
    }
    static set CONTAINING_LIBRARY_NAME(__$value : string)  { 
        this.__$CONTAINING_LIBRARY_NAME = __$value;
    }

    private static __$CONTAINING_LIBRARY_PATH : string;
    static get CONTAINING_LIBRARY_PATH() : string { 
        if (this.__$CONTAINING_LIBRARY_PATH===undefined) {
            this.__$CONTAINING_LIBRARY_PATH = 'containingLibraryPath';
        }
        return this.__$CONTAINING_LIBRARY_PATH;
    }
    static set CONTAINING_LIBRARY_PATH(__$value : string)  { 
        this.__$CONTAINING_LIBRARY_PATH = __$value;
    }

    private static __$CONTENT : string;
    static get CONTENT() : string { 
        if (this.__$CONTENT===undefined) {
            this.__$CONTENT = 'content';
        }
        return this.__$CONTENT;
    }
    static set CONTENT(__$value : string)  { 
        this.__$CONTENT = __$value;
    }

    private static __$CORRECTION : string;
    static get CORRECTION() : string { 
        if (this.__$CORRECTION===undefined) {
            this.__$CORRECTION = 'correction';
        }
        return this.__$CORRECTION;
    }
    static set CORRECTION(__$value : string)  { 
        this.__$CORRECTION = __$value;
    }

    private static __$DART_DOC : string;
    static get DART_DOC() : string { 
        if (this.__$DART_DOC===undefined) {
            this.__$DART_DOC = 'dartdoc';
        }
        return this.__$DART_DOC;
    }
    static set DART_DOC(__$value : string)  { 
        this.__$DART_DOC = __$value;
    }

    private static __$DEFAULT : string;
    static get DEFAULT() : string { 
        if (this.__$DEFAULT===undefined) {
            this.__$DEFAULT = 'default';
        }
        return this.__$DEFAULT;
    }
    static set DEFAULT(__$value : string)  { 
        this.__$DEFAULT = __$value;
    }

    private static __$DIAGNOSTIC_GET_DIAGNOSTICS : string;
    static get DIAGNOSTIC_GET_DIAGNOSTICS() : string { 
        if (this.__$DIAGNOSTIC_GET_DIAGNOSTICS===undefined) {
            this.__$DIAGNOSTIC_GET_DIAGNOSTICS = 'diagnostic.getDiagnostics';
        }
        return this.__$DIAGNOSTIC_GET_DIAGNOSTICS;
    }
    static set DIAGNOSTIC_GET_DIAGNOSTICS(__$value : string)  { 
        this.__$DIAGNOSTIC_GET_DIAGNOSTICS = __$value;
    }

    private static __$DIAGNOSTIC_GET_SERVER_PORT : string;
    static get DIAGNOSTIC_GET_SERVER_PORT() : string { 
        if (this.__$DIAGNOSTIC_GET_SERVER_PORT===undefined) {
            this.__$DIAGNOSTIC_GET_SERVER_PORT = 'diagnostic.getServerPort';
        }
        return this.__$DIAGNOSTIC_GET_SERVER_PORT;
    }
    static set DIAGNOSTIC_GET_SERVER_PORT(__$value : string)  { 
        this.__$DIAGNOSTIC_GET_SERVER_PORT = __$value;
    }

    private static __$DISPLAY_NAME : string;
    static get DISPLAY_NAME() : string { 
        if (this.__$DISPLAY_NAME===undefined) {
            this.__$DISPLAY_NAME = 'displayName';
        }
        return this.__$DISPLAY_NAME;
    }
    static set DISPLAY_NAME(__$value : string)  { 
        this.__$DISPLAY_NAME = __$value;
    }

    private static __$EDIT_FORMAT : string;
    static get EDIT_FORMAT() : string { 
        if (this.__$EDIT_FORMAT===undefined) {
            this.__$EDIT_FORMAT = 'edit.format';
        }
        return this.__$EDIT_FORMAT;
    }
    static set EDIT_FORMAT(__$value : string)  { 
        this.__$EDIT_FORMAT = __$value;
    }

    private static __$EDIT_GET_ASSISTS : string;
    static get EDIT_GET_ASSISTS() : string { 
        if (this.__$EDIT_GET_ASSISTS===undefined) {
            this.__$EDIT_GET_ASSISTS = 'edit.getAssists';
        }
        return this.__$EDIT_GET_ASSISTS;
    }
    static set EDIT_GET_ASSISTS(__$value : string)  { 
        this.__$EDIT_GET_ASSISTS = __$value;
    }

    private static __$EDIT_GET_AVAILABLE_REFACTORINGS : string;
    static get EDIT_GET_AVAILABLE_REFACTORINGS() : string { 
        if (this.__$EDIT_GET_AVAILABLE_REFACTORINGS===undefined) {
            this.__$EDIT_GET_AVAILABLE_REFACTORINGS = 'edit.getAvailableRefactorings';
        }
        return this.__$EDIT_GET_AVAILABLE_REFACTORINGS;
    }
    static set EDIT_GET_AVAILABLE_REFACTORINGS(__$value : string)  { 
        this.__$EDIT_GET_AVAILABLE_REFACTORINGS = __$value;
    }

    private static __$EDIT_GET_FIXES : string;
    static get EDIT_GET_FIXES() : string { 
        if (this.__$EDIT_GET_FIXES===undefined) {
            this.__$EDIT_GET_FIXES = 'edit.getFixes';
        }
        return this.__$EDIT_GET_FIXES;
    }
    static set EDIT_GET_FIXES(__$value : string)  { 
        this.__$EDIT_GET_FIXES = __$value;
    }

    private static __$EDIT_GET_REFACTORING : string;
    static get EDIT_GET_REFACTORING() : string { 
        if (this.__$EDIT_GET_REFACTORING===undefined) {
            this.__$EDIT_GET_REFACTORING = 'edit.getRefactoring';
        }
        return this.__$EDIT_GET_REFACTORING;
    }
    static set EDIT_GET_REFACTORING(__$value : string)  { 
        this.__$EDIT_GET_REFACTORING = __$value;
    }

    private static __$EDIT_GET_STATEMENT_COMPLETION : string;
    static get EDIT_GET_STATEMENT_COMPLETION() : string { 
        if (this.__$EDIT_GET_STATEMENT_COMPLETION===undefined) {
            this.__$EDIT_GET_STATEMENT_COMPLETION = "edit.getStatementCompletion";
        }
        return this.__$EDIT_GET_STATEMENT_COMPLETION;
    }
    static set EDIT_GET_STATEMENT_COMPLETION(__$value : string)  { 
        this.__$EDIT_GET_STATEMENT_COMPLETION = __$value;
    }

    private static __$EDIT_ORGANIZE_DIRECTIVES : string;
    static get EDIT_ORGANIZE_DIRECTIVES() : string { 
        if (this.__$EDIT_ORGANIZE_DIRECTIVES===undefined) {
            this.__$EDIT_ORGANIZE_DIRECTIVES = 'edit.organizeDirectives';
        }
        return this.__$EDIT_ORGANIZE_DIRECTIVES;
    }
    static set EDIT_ORGANIZE_DIRECTIVES(__$value : string)  { 
        this.__$EDIT_ORGANIZE_DIRECTIVES = __$value;
    }

    private static __$ADD : string;
    static get ADD() : string { 
        if (this.__$ADD===undefined) {
            this.__$ADD = 'add';
        }
        return this.__$ADD;
    }
    static set ADD(__$value : string)  { 
        this.__$ADD = __$value;
    }

    private static __$EDITS : string;
    static get EDITS() : string { 
        if (this.__$EDITS===undefined) {
            this.__$EDITS = 'edits';
        }
        return this.__$EDITS;
    }
    static set EDITS(__$value : string)  { 
        this.__$EDITS = __$value;
    }

    private static __$ELEMENT : string;
    static get ELEMENT() : string { 
        if (this.__$ELEMENT===undefined) {
            this.__$ELEMENT = 'element';
        }
        return this.__$ELEMENT;
    }
    static set ELEMENT(__$value : string)  { 
        this.__$ELEMENT = __$value;
    }

    private static __$ELEMENT_DESCRIPTION : string;
    static get ELEMENT_DESCRIPTION() : string { 
        if (this.__$ELEMENT_DESCRIPTION===undefined) {
            this.__$ELEMENT_DESCRIPTION = 'elementDescription';
        }
        return this.__$ELEMENT_DESCRIPTION;
    }
    static set ELEMENT_DESCRIPTION(__$value : string)  { 
        this.__$ELEMENT_DESCRIPTION = __$value;
    }

    private static __$ELEMENT_KIND : string;
    static get ELEMENT_KIND() : string { 
        if (this.__$ELEMENT_KIND===undefined) {
            this.__$ELEMENT_KIND = 'elementKind';
        }
        return this.__$ELEMENT_KIND;
    }
    static set ELEMENT_KIND(__$value : string)  { 
        this.__$ELEMENT_KIND = __$value;
    }

    private static __$ENABLE_ASYNC : string;
    static get ENABLE_ASYNC() : string { 
        if (this.__$ENABLE_ASYNC===undefined) {
            this.__$ENABLE_ASYNC = 'enableAsync';
        }
        return this.__$ENABLE_ASYNC;
    }
    static set ENABLE_ASYNC(__$value : string)  { 
        this.__$ENABLE_ASYNC = __$value;
    }

    private static __$ENABLE_DEFERRED_LOADING : string;
    static get ENABLE_DEFERRED_LOADING() : string { 
        if (this.__$ENABLE_DEFERRED_LOADING===undefined) {
            this.__$ENABLE_DEFERRED_LOADING = 'enableDeferredLoading';
        }
        return this.__$ENABLE_DEFERRED_LOADING;
    }
    static set ENABLE_DEFERRED_LOADING(__$value : string)  { 
        this.__$ENABLE_DEFERRED_LOADING = __$value;
    }

    private static __$ENABLE_ENUMS : string;
    static get ENABLE_ENUMS() : string { 
        if (this.__$ENABLE_ENUMS===undefined) {
            this.__$ENABLE_ENUMS = 'enableEnums';
        }
        return this.__$ENABLE_ENUMS;
    }
    static set ENABLE_ENUMS(__$value : string)  { 
        this.__$ENABLE_ENUMS = __$value;
    }

    private static __$ERROR : string;
    static get ERROR() : string { 
        if (this.__$ERROR===undefined) {
            this.__$ERROR = 'error';
        }
        return this.__$ERROR;
    }
    static set ERROR(__$value : string)  { 
        this.__$ERROR = __$value;
    }

    private static __$ERRORS : string;
    static get ERRORS() : string { 
        if (this.__$ERRORS===undefined) {
            this.__$ERRORS = 'errors';
        }
        return this.__$ERRORS;
    }
    static set ERRORS(__$value : string)  { 
        this.__$ERRORS = __$value;
    }

    private static __$EXCLUDED : string;
    static get EXCLUDED() : string { 
        if (this.__$EXCLUDED===undefined) {
            this.__$EXCLUDED = 'excluded';
        }
        return this.__$EXCLUDED;
    }
    static set EXCLUDED(__$value : string)  { 
        this.__$EXCLUDED = __$value;
    }

    private static __$EXECUTION_CREATE_CONTEXT : string;
    static get EXECUTION_CREATE_CONTEXT() : string { 
        if (this.__$EXECUTION_CREATE_CONTEXT===undefined) {
            this.__$EXECUTION_CREATE_CONTEXT = 'execution.createContext';
        }
        return this.__$EXECUTION_CREATE_CONTEXT;
    }
    static set EXECUTION_CREATE_CONTEXT(__$value : string)  { 
        this.__$EXECUTION_CREATE_CONTEXT = __$value;
    }

    private static __$EXECUTION_DELETE_CONTEXT : string;
    static get EXECUTION_DELETE_CONTEXT() : string { 
        if (this.__$EXECUTION_DELETE_CONTEXT===undefined) {
            this.__$EXECUTION_DELETE_CONTEXT = 'execution.deleteContext';
        }
        return this.__$EXECUTION_DELETE_CONTEXT;
    }
    static set EXECUTION_DELETE_CONTEXT(__$value : string)  { 
        this.__$EXECUTION_DELETE_CONTEXT = __$value;
    }

    private static __$EXECUTION_LAUNCH_DATA : string;
    static get EXECUTION_LAUNCH_DATA() : string { 
        if (this.__$EXECUTION_LAUNCH_DATA===undefined) {
            this.__$EXECUTION_LAUNCH_DATA = 'execution.launchData';
        }
        return this.__$EXECUTION_LAUNCH_DATA;
    }
    static set EXECUTION_LAUNCH_DATA(__$value : string)  { 
        this.__$EXECUTION_LAUNCH_DATA = __$value;
    }

    private static __$EXECUTION_MAP_URI : string;
    static get EXECUTION_MAP_URI() : string { 
        if (this.__$EXECUTION_MAP_URI===undefined) {
            this.__$EXECUTION_MAP_URI = 'execution.mapUri';
        }
        return this.__$EXECUTION_MAP_URI;
    }
    static set EXECUTION_MAP_URI(__$value : string)  { 
        this.__$EXECUTION_MAP_URI = __$value;
    }

    private static __$EXECUTION_SET_SUBSCRIPTIONS : string;
    static get EXECUTION_SET_SUBSCRIPTIONS() : string { 
        if (this.__$EXECUTION_SET_SUBSCRIPTIONS===undefined) {
            this.__$EXECUTION_SET_SUBSCRIPTIONS = 'execution.setSubscriptions';
        }
        return this.__$EXECUTION_SET_SUBSCRIPTIONS;
    }
    static set EXECUTION_SET_SUBSCRIPTIONS(__$value : string)  { 
        this.__$EXECUTION_SET_SUBSCRIPTIONS = __$value;
    }

    private static __$FATAL : string;
    static get FATAL() : string { 
        if (this.__$FATAL===undefined) {
            this.__$FATAL = 'fatal';
        }
        return this.__$FATAL;
    }
    static set FATAL(__$value : string)  { 
        this.__$FATAL = __$value;
    }

    private static __$FILE : string;
    static get FILE() : string { 
        if (this.__$FILE===undefined) {
            this.__$FILE = 'file';
        }
        return this.__$FILE;
    }
    static set FILE(__$value : string)  { 
        this.__$FILE = __$value;
    }

    private static __$FILE_STAMP : string;
    static get FILE_STAMP() : string { 
        if (this.__$FILE_STAMP===undefined) {
            this.__$FILE_STAMP = 'fileStamp';
        }
        return this.__$FILE_STAMP;
    }
    static set FILE_STAMP(__$value : string)  { 
        this.__$FILE_STAMP = __$value;
    }

    private static __$FILES : string;
    static get FILES() : string { 
        if (this.__$FILES===undefined) {
            this.__$FILES = 'files';
        }
        return this.__$FILES;
    }
    static set FILES(__$value : string)  { 
        this.__$FILES = __$value;
    }

    private static __$FIXES : string;
    static get FIXES() : string { 
        if (this.__$FIXES===undefined) {
            this.__$FIXES = 'fixes';
        }
        return this.__$FIXES;
    }
    static set FIXES(__$value : string)  { 
        this.__$FIXES = __$value;
    }

    private static __$FLAGS : string;
    static get FLAGS() : string { 
        if (this.__$FLAGS===undefined) {
            this.__$FLAGS = 'flags';
        }
        return this.__$FLAGS;
    }
    static set FLAGS(__$value : string)  { 
        this.__$FLAGS = __$value;
    }

    private static __$GENERATE_DART2JS_HINTS : string;
    static get GENERATE_DART2JS_HINTS() : string { 
        if (this.__$GENERATE_DART2JS_HINTS===undefined) {
            this.__$GENERATE_DART2JS_HINTS = 'generateDart2jsHints';
        }
        return this.__$GENERATE_DART2JS_HINTS;
    }
    static set GENERATE_DART2JS_HINTS(__$value : string)  { 
        this.__$GENERATE_DART2JS_HINTS = __$value;
    }

    private static __$GENERATE_HINTS : string;
    static get GENERATE_HINTS() : string { 
        if (this.__$GENERATE_HINTS===undefined) {
            this.__$GENERATE_HINTS = 'generateHints';
        }
        return this.__$GENERATE_HINTS;
    }
    static set GENERATE_HINTS(__$value : string)  { 
        this.__$GENERATE_HINTS = __$value;
    }

    private static __$HAS_FIX : string;
    static get HAS_FIX() : string { 
        if (this.__$HAS_FIX===undefined) {
            this.__$HAS_FIX = 'hasFix';
        }
        return this.__$HAS_FIX;
    }
    static set HAS_FIX(__$value : string)  { 
        this.__$HAS_FIX = __$value;
    }

    private static __$HIERARCHY_ITEMS : string;
    static get HIERARCHY_ITEMS() : string { 
        if (this.__$HIERARCHY_ITEMS===undefined) {
            this.__$HIERARCHY_ITEMS = 'hierarchyItems';
        }
        return this.__$HIERARCHY_ITEMS;
    }
    static set HIERARCHY_ITEMS(__$value : string)  { 
        this.__$HIERARCHY_ITEMS = __$value;
    }

    private static __$HOVERS : string;
    static get HOVERS() : string { 
        if (this.__$HOVERS===undefined) {
            this.__$HOVERS = 'hovers';
        }
        return this.__$HOVERS;
    }
    static set HOVERS(__$value : string)  { 
        this.__$HOVERS = __$value;
    }

    private static __$ID : string;
    static get ID() : string { 
        if (this.__$ID===undefined) {
            this.__$ID = 'id';
        }
        return this.__$ID;
    }
    static set ID(__$value : string)  { 
        this.__$ID = __$value;
    }

    private static __$INCLUDE_POTENTIAL : string;
    static get INCLUDE_POTENTIAL() : string { 
        if (this.__$INCLUDE_POTENTIAL===undefined) {
            this.__$INCLUDE_POTENTIAL = 'includePotential';
        }
        return this.__$INCLUDE_POTENTIAL;
    }
    static set INCLUDE_POTENTIAL(__$value : string)  { 
        this.__$INCLUDE_POTENTIAL = __$value;
    }

    private static __$INCLUDED : string;
    static get INCLUDED() : string { 
        if (this.__$INCLUDED===undefined) {
            this.__$INCLUDED = 'included';
        }
        return this.__$INCLUDED;
    }
    static set INCLUDED(__$value : string)  { 
        this.__$INCLUDED = __$value;
    }

    private static __$INTERFACE_MEMBERS : string;
    static get INTERFACE_MEMBERS() : string { 
        if (this.__$INTERFACE_MEMBERS===undefined) {
            this.__$INTERFACE_MEMBERS = 'interfaceMembers';
        }
        return this.__$INTERFACE_MEMBERS;
    }
    static set INTERFACE_MEMBERS(__$value : string)  { 
        this.__$INTERFACE_MEMBERS = __$value;
    }

    private static __$INTERFACES : string;
    static get INTERFACES() : string { 
        if (this.__$INTERFACES===undefined) {
            this.__$INTERFACES = 'interfaces';
        }
        return this.__$INTERFACES;
    }
    static set INTERFACES(__$value : string)  { 
        this.__$INTERFACES = __$value;
    }

    private static __$IS_ABSTRACT : string;
    static get IS_ABSTRACT() : string { 
        if (this.__$IS_ABSTRACT===undefined) {
            this.__$IS_ABSTRACT = 'isAbstract';
        }
        return this.__$IS_ABSTRACT;
    }
    static set IS_ABSTRACT(__$value : string)  { 
        this.__$IS_ABSTRACT = __$value;
    }

    private static __$IS_DEPRECATED : string;
    static get IS_DEPRECATED() : string { 
        if (this.__$IS_DEPRECATED===undefined) {
            this.__$IS_DEPRECATED = 'isDeprecated';
        }
        return this.__$IS_DEPRECATED;
    }
    static set IS_DEPRECATED(__$value : string)  { 
        this.__$IS_DEPRECATED = __$value;
    }

    private static __$IS_POTENTIAL : string;
    static get IS_POTENTIAL() : string { 
        if (this.__$IS_POTENTIAL===undefined) {
            this.__$IS_POTENTIAL = 'isPotential';
        }
        return this.__$IS_POTENTIAL;
    }
    static set IS_POTENTIAL(__$value : string)  { 
        this.__$IS_POTENTIAL = __$value;
    }

    private static __$IS_STATIC : string;
    static get IS_STATIC() : string { 
        if (this.__$IS_STATIC===undefined) {
            this.__$IS_STATIC = 'isStatic';
        }
        return this.__$IS_STATIC;
    }
    static set IS_STATIC(__$value : string)  { 
        this.__$IS_STATIC = __$value;
    }

    private static __$KIND : string;
    static get KIND() : string { 
        if (this.__$KIND===undefined) {
            this.__$KIND = 'kind';
        }
        return this.__$KIND;
    }
    static set KIND(__$value : string)  { 
        this.__$KIND = __$value;
    }

    private static __$KINDS : string;
    static get KINDS() : string { 
        if (this.__$KINDS===undefined) {
            this.__$KINDS = 'kinds';
        }
        return this.__$KINDS;
    }
    static set KINDS(__$value : string)  { 
        this.__$KINDS = __$value;
    }

    private static __$LAST : string;
    static get LAST() : string { 
        if (this.__$LAST===undefined) {
            this.__$LAST = 'last';
        }
        return this.__$LAST;
    }
    static set LAST(__$value : string)  { 
        this.__$LAST = __$value;
    }

    private static __$LENGTH : string;
    static get LENGTH() : string { 
        if (this.__$LENGTH===undefined) {
            this.__$LENGTH = 'length';
        }
        return this.__$LENGTH;
    }
    static set LENGTH(__$value : string)  { 
        this.__$LENGTH = __$value;
    }

    private static __$LINKED_EDIT_GROUPS : string;
    static get LINKED_EDIT_GROUPS() : string { 
        if (this.__$LINKED_EDIT_GROUPS===undefined) {
            this.__$LINKED_EDIT_GROUPS = 'linkedEditGroups';
        }
        return this.__$LINKED_EDIT_GROUPS;
    }
    static set LINKED_EDIT_GROUPS(__$value : string)  { 
        this.__$LINKED_EDIT_GROUPS = __$value;
    }

    private static __$LOCATION : string;
    static get LOCATION() : string { 
        if (this.__$LOCATION===undefined) {
            this.__$LOCATION = 'location';
        }
        return this.__$LOCATION;
    }
    static set LOCATION(__$value : string)  { 
        this.__$LOCATION = __$value;
    }

    private static __$MEMBER_ELEMENT : string;
    static get MEMBER_ELEMENT() : string { 
        if (this.__$MEMBER_ELEMENT===undefined) {
            this.__$MEMBER_ELEMENT = 'memberElement';
        }
        return this.__$MEMBER_ELEMENT;
    }
    static set MEMBER_ELEMENT(__$value : string)  { 
        this.__$MEMBER_ELEMENT = __$value;
    }

    private static __$MESSAGE : string;
    static get MESSAGE() : string { 
        if (this.__$MESSAGE===undefined) {
            this.__$MESSAGE = 'message';
        }
        return this.__$MESSAGE;
    }
    static set MESSAGE(__$value : string)  { 
        this.__$MESSAGE = __$value;
    }

    private static __$MIXINS : string;
    static get MIXINS() : string { 
        if (this.__$MIXINS===undefined) {
            this.__$MIXINS = 'mixins';
        }
        return this.__$MIXINS;
    }
    static set MIXINS(__$value : string)  { 
        this.__$MIXINS = __$value;
    }

    private static __$NAME : string;
    static get NAME() : string { 
        if (this.__$NAME===undefined) {
            this.__$NAME = 'name';
        }
        return this.__$NAME;
    }
    static set NAME(__$value : string)  { 
        this.__$NAME = __$value;
    }

    private static __$OCCURRENCES : string;
    static get OCCURRENCES() : string { 
        if (this.__$OCCURRENCES===undefined) {
            this.__$OCCURRENCES = 'occurrences';
        }
        return this.__$OCCURRENCES;
    }
    static set OCCURRENCES(__$value : string)  { 
        this.__$OCCURRENCES = __$value;
    }

    private static __$OFFSET : string;
    static get OFFSET() : string { 
        if (this.__$OFFSET===undefined) {
            this.__$OFFSET = 'offset';
        }
        return this.__$OFFSET;
    }
    static set OFFSET(__$value : string)  { 
        this.__$OFFSET = __$value;
    }

    private static __$VERSION : string;
    static get VERSION() : string { 
        if (this.__$VERSION===undefined) {
            this.__$VERSION = 'version';
        }
        return this.__$VERSION;
    }
    static set VERSION(__$value : string)  { 
        this.__$VERSION = __$value;
    }

    private static __$OPTIONS : string;
    static get OPTIONS() : string { 
        if (this.__$OPTIONS===undefined) {
            this.__$OPTIONS = 'options';
        }
        return this.__$OPTIONS;
    }
    static set OPTIONS(__$value : string)  { 
        this.__$OPTIONS = __$value;
    }

    private static __$OUTLINE : string;
    static get OUTLINE() : string { 
        if (this.__$OUTLINE===undefined) {
            this.__$OUTLINE = 'outline';
        }
        return this.__$OUTLINE;
    }
    static set OUTLINE(__$value : string)  { 
        this.__$OUTLINE = __$value;
    }

    private static __$OVERRIDES : string;
    static get OVERRIDES() : string { 
        if (this.__$OVERRIDES===undefined) {
            this.__$OVERRIDES = 'overrides';
        }
        return this.__$OVERRIDES;
    }
    static set OVERRIDES(__$value : string)  { 
        this.__$OVERRIDES = __$value;
    }

    private static __$PARAMETER : string;
    static get PARAMETER() : string { 
        if (this.__$PARAMETER===undefined) {
            this.__$PARAMETER = 'parameter';
        }
        return this.__$PARAMETER;
    }
    static set PARAMETER(__$value : string)  { 
        this.__$PARAMETER = __$value;
    }

    private static __$PARAMETERS : string;
    static get PARAMETERS() : string { 
        if (this.__$PARAMETERS===undefined) {
            this.__$PARAMETERS = 'parameters';
        }
        return this.__$PARAMETERS;
    }
    static set PARAMETERS(__$value : string)  { 
        this.__$PARAMETERS = __$value;
    }

    private static __$PATH : string;
    static get PATH() : string { 
        if (this.__$PATH===undefined) {
            this.__$PATH = 'path';
        }
        return this.__$PATH;
    }
    static set PATH(__$value : string)  { 
        this.__$PATH = __$value;
    }

    private static __$PATTERN : string;
    static get PATTERN() : string { 
        if (this.__$PATTERN===undefined) {
            this.__$PATTERN = 'pattern';
        }
        return this.__$PATTERN;
    }
    static set PATTERN(__$value : string)  { 
        this.__$PATTERN = __$value;
    }

    private static __$POSITIONS : string;
    static get POSITIONS() : string { 
        if (this.__$POSITIONS===undefined) {
            this.__$POSITIONS = 'positions';
        }
        return this.__$POSITIONS;
    }
    static set POSITIONS(__$value : string)  { 
        this.__$POSITIONS = __$value;
    }

    private static __$PROPAGATED_TYPE : string;
    static get PROPAGATED_TYPE() : string { 
        if (this.__$PROPAGATED_TYPE===undefined) {
            this.__$PROPAGATED_TYPE = 'propagatedType';
        }
        return this.__$PROPAGATED_TYPE;
    }
    static set PROPAGATED_TYPE(__$value : string)  { 
        this.__$PROPAGATED_TYPE = __$value;
    }

    private static __$REFACTORINGS : string;
    static get REFACTORINGS() : string { 
        if (this.__$REFACTORINGS===undefined) {
            this.__$REFACTORINGS = 'refactorings';
        }
        return this.__$REFACTORINGS;
    }
    static set REFACTORINGS(__$value : string)  { 
        this.__$REFACTORINGS = __$value;
    }

    private static __$REGIONS : string;
    static get REGIONS() : string { 
        if (this.__$REGIONS===undefined) {
            this.__$REGIONS = 'regions';
        }
        return this.__$REGIONS;
    }
    static set REGIONS(__$value : string)  { 
        this.__$REGIONS = __$value;
    }

    private static __$RELEVANCE : string;
    static get RELEVANCE() : string { 
        if (this.__$RELEVANCE===undefined) {
            this.__$RELEVANCE = 'relevance';
        }
        return this.__$RELEVANCE;
    }
    static set RELEVANCE(__$value : string)  { 
        this.__$RELEVANCE = __$value;
    }

    private static __$REMOVE : string;
    static get REMOVE() : string { 
        if (this.__$REMOVE===undefined) {
            this.__$REMOVE = 'remove';
        }
        return this.__$REMOVE;
    }
    static set REMOVE(__$value : string)  { 
        this.__$REMOVE = __$value;
    }

    private static __$REMOVED : string;
    static get REMOVED() : string { 
        if (this.__$REMOVED===undefined) {
            this.__$REMOVED = 'removed';
        }
        return this.__$REMOVED;
    }
    static set REMOVED(__$value : string)  { 
        this.__$REMOVED = __$value;
    }

    private static __$REPLACEMENT : string;
    static get REPLACEMENT() : string { 
        if (this.__$REPLACEMENT===undefined) {
            this.__$REPLACEMENT = 'replacement';
        }
        return this.__$REPLACEMENT;
    }
    static set REPLACEMENT(__$value : string)  { 
        this.__$REPLACEMENT = __$value;
    }

    private static __$REPLACEMENT_LENGTH : string;
    static get REPLACEMENT_LENGTH() : string { 
        if (this.__$REPLACEMENT_LENGTH===undefined) {
            this.__$REPLACEMENT_LENGTH = 'replacementLength';
        }
        return this.__$REPLACEMENT_LENGTH;
    }
    static set REPLACEMENT_LENGTH(__$value : string)  { 
        this.__$REPLACEMENT_LENGTH = __$value;
    }

    private static __$REPLACEMENT_OFFSET : string;
    static get REPLACEMENT_OFFSET() : string { 
        if (this.__$REPLACEMENT_OFFSET===undefined) {
            this.__$REPLACEMENT_OFFSET = 'replacementOffset';
        }
        return this.__$REPLACEMENT_OFFSET;
    }
    static set REPLACEMENT_OFFSET(__$value : string)  { 
        this.__$REPLACEMENT_OFFSET = __$value;
    }

    private static __$RESULTS : string;
    static get RESULTS() : string { 
        if (this.__$RESULTS===undefined) {
            this.__$RESULTS = 'results';
        }
        return this.__$RESULTS;
    }
    static set RESULTS(__$value : string)  { 
        this.__$RESULTS = __$value;
    }

    private static __$RETURN_TYPE : string;
    static get RETURN_TYPE() : string { 
        if (this.__$RETURN_TYPE===undefined) {
            this.__$RETURN_TYPE = 'returnType';
        }
        return this.__$RETURN_TYPE;
    }
    static set RETURN_TYPE(__$value : string)  { 
        this.__$RETURN_TYPE = __$value;
    }

    private static __$SEARCH_FIND_ELEMENT_REFERENCES : string;
    static get SEARCH_FIND_ELEMENT_REFERENCES() : string { 
        if (this.__$SEARCH_FIND_ELEMENT_REFERENCES===undefined) {
            this.__$SEARCH_FIND_ELEMENT_REFERENCES = 'search.findElementReferences';
        }
        return this.__$SEARCH_FIND_ELEMENT_REFERENCES;
    }
    static set SEARCH_FIND_ELEMENT_REFERENCES(__$value : string)  { 
        this.__$SEARCH_FIND_ELEMENT_REFERENCES = __$value;
    }

    private static __$SEARCH_FIND_MEMBER_DECLARATIONS : string;
    static get SEARCH_FIND_MEMBER_DECLARATIONS() : string { 
        if (this.__$SEARCH_FIND_MEMBER_DECLARATIONS===undefined) {
            this.__$SEARCH_FIND_MEMBER_DECLARATIONS = 'search.findMemberDeclarations';
        }
        return this.__$SEARCH_FIND_MEMBER_DECLARATIONS;
    }
    static set SEARCH_FIND_MEMBER_DECLARATIONS(__$value : string)  { 
        this.__$SEARCH_FIND_MEMBER_DECLARATIONS = __$value;
    }

    private static __$SEARCH_FIND_MEMBER_REFERENCES : string;
    static get SEARCH_FIND_MEMBER_REFERENCES() : string { 
        if (this.__$SEARCH_FIND_MEMBER_REFERENCES===undefined) {
            this.__$SEARCH_FIND_MEMBER_REFERENCES = 'search.findMemberReferences';
        }
        return this.__$SEARCH_FIND_MEMBER_REFERENCES;
    }
    static set SEARCH_FIND_MEMBER_REFERENCES(__$value : string)  { 
        this.__$SEARCH_FIND_MEMBER_REFERENCES = __$value;
    }

    private static __$SEARCH_FIND_TOP_LEVEL_DECLARATIONS : string;
    static get SEARCH_FIND_TOP_LEVEL_DECLARATIONS() : string { 
        if (this.__$SEARCH_FIND_TOP_LEVEL_DECLARATIONS===undefined) {
            this.__$SEARCH_FIND_TOP_LEVEL_DECLARATIONS = 'search.findTopLevelDeclarations';
        }
        return this.__$SEARCH_FIND_TOP_LEVEL_DECLARATIONS;
    }
    static set SEARCH_FIND_TOP_LEVEL_DECLARATIONS(__$value : string)  { 
        this.__$SEARCH_FIND_TOP_LEVEL_DECLARATIONS = __$value;
    }

    private static __$SEARCH_GET_TYPE_HIERARCHY : string;
    static get SEARCH_GET_TYPE_HIERARCHY() : string { 
        if (this.__$SEARCH_GET_TYPE_HIERARCHY===undefined) {
            this.__$SEARCH_GET_TYPE_HIERARCHY = 'search.getTypeHierarchy';
        }
        return this.__$SEARCH_GET_TYPE_HIERARCHY;
    }
    static set SEARCH_GET_TYPE_HIERARCHY(__$value : string)  { 
        this.__$SEARCH_GET_TYPE_HIERARCHY = __$value;
    }

    private static __$SEARCH_RESULTS : string;
    static get SEARCH_RESULTS() : string { 
        if (this.__$SEARCH_RESULTS===undefined) {
            this.__$SEARCH_RESULTS = 'search.results';
        }
        return this.__$SEARCH_RESULTS;
    }
    static set SEARCH_RESULTS(__$value : string)  { 
        this.__$SEARCH_RESULTS = __$value;
    }

    private static __$SELECTION : string;
    static get SELECTION() : string { 
        if (this.__$SELECTION===undefined) {
            this.__$SELECTION = 'selection';
        }
        return this.__$SELECTION;
    }
    static set SELECTION(__$value : string)  { 
        this.__$SELECTION = __$value;
    }

    private static __$SELECTION_LENGTH : string;
    static get SELECTION_LENGTH() : string { 
        if (this.__$SELECTION_LENGTH===undefined) {
            this.__$SELECTION_LENGTH = 'selectionLength';
        }
        return this.__$SELECTION_LENGTH;
    }
    static set SELECTION_LENGTH(__$value : string)  { 
        this.__$SELECTION_LENGTH = __$value;
    }

    private static __$SELECTION_OFFSET : string;
    static get SELECTION_OFFSET() : string { 
        if (this.__$SELECTION_OFFSET===undefined) {
            this.__$SELECTION_OFFSET = 'selectionOffset';
        }
        return this.__$SELECTION_OFFSET;
    }
    static set SELECTION_OFFSET(__$value : string)  { 
        this.__$SELECTION_OFFSET = __$value;
    }

    private static __$SERVER_CONNECTED : string;
    static get SERVER_CONNECTED() : string { 
        if (this.__$SERVER_CONNECTED===undefined) {
            this.__$SERVER_CONNECTED = 'server.connected';
        }
        return this.__$SERVER_CONNECTED;
    }
    static set SERVER_CONNECTED(__$value : string)  { 
        this.__$SERVER_CONNECTED = __$value;
    }

    private static __$SERVER_ERROR : string;
    static get SERVER_ERROR() : string { 
        if (this.__$SERVER_ERROR===undefined) {
            this.__$SERVER_ERROR = 'server.error';
        }
        return this.__$SERVER_ERROR;
    }
    static set SERVER_ERROR(__$value : string)  { 
        this.__$SERVER_ERROR = __$value;
    }

    private static __$SERVER_GET_VERSION : string;
    static get SERVER_GET_VERSION() : string { 
        if (this.__$SERVER_GET_VERSION===undefined) {
            this.__$SERVER_GET_VERSION = 'server.getVersion';
        }
        return this.__$SERVER_GET_VERSION;
    }
    static set SERVER_GET_VERSION(__$value : string)  { 
        this.__$SERVER_GET_VERSION = __$value;
    }

    private static __$SERVER_SET_SUBSCRIPTIONS : string;
    static get SERVER_SET_SUBSCRIPTIONS() : string { 
        if (this.__$SERVER_SET_SUBSCRIPTIONS===undefined) {
            this.__$SERVER_SET_SUBSCRIPTIONS = 'server.setSubscriptions';
        }
        return this.__$SERVER_SET_SUBSCRIPTIONS;
    }
    static set SERVER_SET_SUBSCRIPTIONS(__$value : string)  { 
        this.__$SERVER_SET_SUBSCRIPTIONS = __$value;
    }

    private static __$SERVER_SHUTDOWN : string;
    static get SERVER_SHUTDOWN() : string { 
        if (this.__$SERVER_SHUTDOWN===undefined) {
            this.__$SERVER_SHUTDOWN = 'server.shutdown';
        }
        return this.__$SERVER_SHUTDOWN;
    }
    static set SERVER_SHUTDOWN(__$value : string)  { 
        this.__$SERVER_SHUTDOWN = __$value;
    }

    private static __$SERVER_STATUS : string;
    static get SERVER_STATUS() : string { 
        if (this.__$SERVER_STATUS===undefined) {
            this.__$SERVER_STATUS = 'server.status';
        }
        return this.__$SERVER_STATUS;
    }
    static set SERVER_STATUS(__$value : string)  { 
        this.__$SERVER_STATUS = __$value;
    }

    private static __$SEVERITY : string;
    static get SEVERITY() : string { 
        if (this.__$SEVERITY===undefined) {
            this.__$SEVERITY = 'severity';
        }
        return this.__$SEVERITY;
    }
    static set SEVERITY(__$value : string)  { 
        this.__$SEVERITY = __$value;
    }

    private static __$STACK_TRACE : string;
    static get STACK_TRACE() : string { 
        if (this.__$STACK_TRACE===undefined) {
            this.__$STACK_TRACE = 'stackTrace';
        }
        return this.__$STACK_TRACE;
    }
    static set STACK_TRACE(__$value : string)  { 
        this.__$STACK_TRACE = __$value;
    }

    private static __$START_COLUMN : string;
    static get START_COLUMN() : string { 
        if (this.__$START_COLUMN===undefined) {
            this.__$START_COLUMN = 'startColumn';
        }
        return this.__$START_COLUMN;
    }
    static set START_COLUMN(__$value : string)  { 
        this.__$START_COLUMN = __$value;
    }

    private static __$START_LINE : string;
    static get START_LINE() : string { 
        if (this.__$START_LINE===undefined) {
            this.__$START_LINE = 'startLine';
        }
        return this.__$START_LINE;
    }
    static set START_LINE(__$value : string)  { 
        this.__$START_LINE = __$value;
    }

    private static __$STATIC_TYPE : string;
    static get STATIC_TYPE() : string { 
        if (this.__$STATIC_TYPE===undefined) {
            this.__$STATIC_TYPE = 'staticType';
        }
        return this.__$STATIC_TYPE;
    }
    static set STATIC_TYPE(__$value : string)  { 
        this.__$STATIC_TYPE = __$value;
    }

    private static __$SUBCLASSES : string;
    static get SUBCLASSES() : string { 
        if (this.__$SUBCLASSES===undefined) {
            this.__$SUBCLASSES = 'subclasses';
        }
        return this.__$SUBCLASSES;
    }
    static set SUBCLASSES(__$value : string)  { 
        this.__$SUBCLASSES = __$value;
    }

    private static __$SUBSCRIPTIONS : string;
    static get SUBSCRIPTIONS() : string { 
        if (this.__$SUBSCRIPTIONS===undefined) {
            this.__$SUBSCRIPTIONS = 'subscriptions';
        }
        return this.__$SUBSCRIPTIONS;
    }
    static set SUBSCRIPTIONS(__$value : string)  { 
        this.__$SUBSCRIPTIONS = __$value;
    }

    private static __$SUGGESTIONS : string;
    static get SUGGESTIONS() : string { 
        if (this.__$SUGGESTIONS===undefined) {
            this.__$SUGGESTIONS = 'suggestions';
        }
        return this.__$SUGGESTIONS;
    }
    static set SUGGESTIONS(__$value : string)  { 
        this.__$SUGGESTIONS = __$value;
    }

    private static __$SUPER_CLASS_MEMBER : string;
    static get SUPER_CLASS_MEMBER() : string { 
        if (this.__$SUPER_CLASS_MEMBER===undefined) {
            this.__$SUPER_CLASS_MEMBER = 'superclassMember';
        }
        return this.__$SUPER_CLASS_MEMBER;
    }
    static set SUPER_CLASS_MEMBER(__$value : string)  { 
        this.__$SUPER_CLASS_MEMBER = __$value;
    }

    private static __$SUPERCLASS : string;
    static get SUPERCLASS() : string { 
        if (this.__$SUPERCLASS===undefined) {
            this.__$SUPERCLASS = 'superclass';
        }
        return this.__$SUPERCLASS;
    }
    static set SUPERCLASS(__$value : string)  { 
        this.__$SUPERCLASS = __$value;
    }

    private static __$TARGETS : string;
    static get TARGETS() : string { 
        if (this.__$TARGETS===undefined) {
            this.__$TARGETS = 'targets';
        }
        return this.__$TARGETS;
    }
    static set TARGETS(__$value : string)  { 
        this.__$TARGETS = __$value;
    }

    private static __$TYPE : string;
    static get TYPE() : string { 
        if (this.__$TYPE===undefined) {
            this.__$TYPE = 'type';
        }
        return this.__$TYPE;
    }
    static set TYPE(__$value : string)  { 
        this.__$TYPE = __$value;
    }

    private static __$VALUE : string;
    static get VALUE() : string { 
        if (this.__$VALUE===undefined) {
            this.__$VALUE = 'value';
        }
        return this.__$VALUE;
    }
    static set VALUE(__$value : string)  { 
        this.__$VALUE = __$value;
    }

    private static __$OFFSETS : string;
    static get OFFSETS() : string { 
        if (this.__$OFFSETS===undefined) {
            this.__$OFFSETS = 'offsets';
        }
        return this.__$OFFSETS;
    }
    static set OFFSETS(__$value : string)  { 
        this.__$OFFSETS = __$value;
    }

}
