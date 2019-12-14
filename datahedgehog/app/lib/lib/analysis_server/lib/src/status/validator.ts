/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/status/validator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ElementComparator {
    export type Constructors = 'ElementComparator';
    export type Interface = Omit<ElementComparator, Constructors>;
}
@DartClass
export class ElementComparator {
    _buffer : core.DartStringBuffer;

    _needsLineBreak : boolean;

    constructor() {
    }
    @defaultConstructor
    ElementComparator() {
        this._buffer = new core.DartStringBuffer();
        this._needsLineBreak = false;
    }
    get description() : string {
        return this._buffer.toString();
    }
    get hasDifference() : boolean {
        return this._buffer.length > 0;
    }
    compareElements(expected : any,actual : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            if (actual != null) {
                this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                    return op(Op.EQUALS,element,null) ? 'null' : `non null ${element.runtimeType}`;
                });
            }
        }else if (op(Op.EQUALS,actual,null)) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return op(Op.EQUALS,element,null) ? 'null' : `non null ${element.runtimeType}`;
            });
        }else if (is(expected, any) && is(actual, any)) {
            this._compareClassElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareCompilationUnitElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareConstructorElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareExportElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareFieldElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareFieldFormalParameterElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareFunctionElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareFunctionTypeAliasElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareImportElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareLabelElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareLibraryElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareLocalVariableElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareMethodElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareMultiplyDefinedElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareParameterElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._comparePrefixElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._comparePropertyAccessorElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareTopLevelVariableElements(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            this._compareTypeParameterElements(expected,actual);
        }else {
            this._write('Expected an instance of ');
            this._write(expected.runtimeType);
            this._write('; found an instance of ');
            this._writeln(actual.runtimeType);
        }
    }
    _compareClassElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
        if (expected.hasReferenceToSuper != actual.hasReferenceToSuper) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).hasReferenceToSuper ? 'a class that references super' : 'a class that does not reference super';
            });
        }
        if (expected.isAbstract != actual.isAbstract) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isAbstract ? 'an abstract class' : 'a concrete class';
            });
        }
        if (expected.isEnum != actual.isEnum || expected.isMixinApplication != actual.isMixinApplication) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                let classElement : any = element as any;
                return classElement.isEnum ? 'an enum' : (classElement.isMixinApplication ? 'a mixin application' : 'a class');
            });
        }
        if (expected.isOrInheritsProxy != actual.isOrInheritsProxy) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isOrInheritsProxy ? 'a class that is marked as a proxy' : 'a class that is not marked as a proxy';
            });
        }
        if (expected.isValidMixin != actual.isValidMixin) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isValidMixin ? 'a valid mixin' : 'an invalid mixin';
            });
        }
        this._compareTypes('supertype',expected.supertype,actual.supertype);
        this._compareTypeLists('mixin',expected.mixins,actual.mixins);
        this._compareTypeLists('interface',expected.interfaces,actual.interfaces);
        this._compareElementLists(expected.accessors,actual.accessors);
        this._compareElementLists(expected.constructors,actual.constructors);
        this._compareElementLists(expected.fields,actual.fields);
        this._compareElementLists(expected.methods,actual.methods);
        this._compareElementLists(expected.typeParameters,actual.typeParameters);
    }
    _compareCompilationUnitElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
        this._compareElementLists(expected.accessors,actual.accessors);
        this._compareElementLists(expected.enums,actual.enums);
        this._compareElementLists(expected.functions,actual.functions);
        this._compareElementLists(expected.functionTypeAliases,actual.functionTypeAliases);
        this._compareElementLists(expected.topLevelVariables,actual.topLevelVariables);
        this._compareElementLists(expected.types,actual.types);
    }
    _compareConstructorElements(expected : any,actual : any) : void {
        this._compareExecutableElements(expected,actual,'constructor');
        if (expected.isConst != actual.isConst) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isConst ? 'a const constructor' : 'a non-const constructor';
            });
        }
        if (expected.isFactory != actual.isFactory) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isFactory ? 'a factory constructor' : 'a non-factory constructor';
            });
        }
        if (expected.periodOffset != actual.periodOffset) {
            this._write('Expected a period offset of ');
            this._write(expected.periodOffset);
            this._write('; found ');
            this._writeln(actual.periodOffset);
        }
        if ((op(Op.EQUALS,expected.redirectedConstructor,null)) != (op(Op.EQUALS,actual.redirectedConstructor,null))) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return op(Op.EQUALS,(element as any).redirectedConstructor,null) ? 'a redirecting constructor' : 'a non-redirecting constructor';
            });
        }
    }
    _compareElementLists(expected : core.DartList<any>,actual : core.DartList<any>) : void {
        let extraElements : core.DartSet<any> = new core.DartHashSet<any>();
        let commonElements : core.DartMap<any,any> = new core.DartHashMap<any,any>();
        let expectedElements : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        for(let expectedElement of expected) {
            op(Op.INDEX_ASSIGN,expectedElements,expectedElement.name,expectedElement);
        }
        for(let actualElement of actual) {
            let name : string = actualElement.name;
            let expectedElement : any = op(Op.INDEX,expectedElements,name);
            if (op(Op.EQUALS,expectedElement,null)) {
                extraElements.add(actualElement);
            }else {
                op(Op.INDEX_ASSIGN,commonElements,expectedElement,actualElement);
                expectedElements.remove(name);
            }
        }
        commonElements.forEach((expected : any,actual : any) =>  {
            this.compareElements(expected,actual);
        });
        var writeElement : (element : any) => void = (element : any) : void =>  {
            this._write('an instance of ');
            this._write(element.runtimeType);
            if (op(Op.EQUALS,element.name,null)) {
                this._write(' with no name');
            }else {
                this._write(' named ');
                this._write(element.name);
            }
        };
        expectedElements.forEach((name : string,element : any) =>  {
            this._write('Expected ');
            writeElement(element);
            this._writeln('; found no match');
        });
        extraElements.forEach((element : any) =>  {
            this._write('Expected nothing; found ');
            writeElement(element);
        });
    }
    _compareExecutableElements(expected : any,actual : any,kind : string) : void {
        this._compareGenericElements(expected,actual);
        if (expected.hasImplicitReturnType != actual.hasImplicitReturnType) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).hasImplicitReturnType ? 'an implicit return type' : 'an explicit return type';
            });
        }
        if (expected.isAbstract != actual.isAbstract) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isAbstract ? `an abstract ${kind}` : `a concrete ${kind}`;
            });
        }
        if (expected.isAsynchronous != actual.isAsynchronous) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isAsynchronous ? `an asynchronous ${kind}` : `a synchronous ${kind}`;
            });
        }
        if (expected.isExternal != actual.isExternal) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isExternal ? `an external ${kind}` : `a non-external ${kind}`;
            });
        }
        if (expected.isGenerator != actual.isGenerator) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isGenerator ? `a generator ${kind}` : `a non-generator ${kind}`;
            });
        }
        if (expected.isOperator != actual.isOperator) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isOperator ? 'an operator' : `a non-operator ${kind}`;
            });
        }
        if (expected.isStatic != actual.isStatic) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isStatic ? `a static ${kind}` : `an instance ${kind}`;
            });
        }
        if ((op(Op.EQUALS,expected.returnType,null)) != (op(Op.EQUALS,actual.returnType,null))) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return op(Op.EQUALS,(element as any).returnType,null) ? `a ${kind} with no return type` : `a ${kind} with a return type`;
            });
        }else {
            this._compareTypes('return type',expected.returnType,actual.returnType);
        }
        this._compareElementLists(expected.functions,actual.functions);
        this._compareElementLists(expected.labels,actual.labels);
        this._compareElementLists(expected.localVariables,actual.localVariables);
        this._compareElementLists(expected.parameters,actual.parameters);
        this._compareElementLists(expected.typeParameters,actual.typeParameters);
    }
    _compareExportElements(expected : any,actual : any) : void {
        this._compareUriReferencedElements(expected,actual);
        if ((op(Op.EQUALS,expected.exportedLibrary,null)) != (op(Op.EQUALS,actual.exportedLibrary,null))) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                let exportElement : any = element as any;
                return op(Op.EQUALS,exportElement.exportedLibrary,null) ? 'unresolved uri' : `uri resolved to ${exportElement.exportedLibrary.source.fullName}`;
            });
        }
        this._compareElementLists(expected.combinators,actual.combinators);
    }
    _compareFieldElements(expected : any,actual : any) : void {
        this._comparePropertyInducingElements(expected,actual,'field');
        if (expected.isEnumConstant != actual.isEnumConstant) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isEnumConstant ? 'an enum constant' : 'a normal field';
            });
        }
    }
    _compareFieldFormalParameterElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _compareFunctionElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _compareFunctionTypeAliasElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _compareGenericElements(expected : any,actual : any) : void {
        this._compareMetadata(expected.metadata,actual.metadata);
        if (expected.nameOffset != actual.nameOffset) {
            this._write('Expected name offset of ');
            this._write(expected.nameOffset);
            this._write('; found ');
            this._writeln(actual.nameOffset);
        }
        let expectedComment : string = expected.documentationComment;
        let actualComment : string = actual.documentationComment;
        if (expectedComment != actualComment) {
            this._write('Expected documentation comment of "');
            this._write(expectedComment);
            this._write('"; found "');
            this._write(actualComment);
            this._writeln('"');
        }
    }
    _compareImportElements(expected : any,actual : any) : void {
        this._compareUriReferencedElements(expected,actual);
        if (expected.isDeferred != actual.isDeferred) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isDeferred ? 'a deferred import' : 'a non-deferred import';
            });
        }
        if ((op(Op.EQUALS,expected.importedLibrary,null)) != (op(Op.EQUALS,actual.importedLibrary,null))) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                let importElement : any = element as any;
                return op(Op.EQUALS,importElement.importedLibrary,null) ? 'unresolved uri' : `uri resolved to ${importElement.importedLibrary.source.fullName}`;
            });
        }
        if ((op(Op.EQUALS,expected.prefix,null)) != (op(Op.EQUALS,actual.prefix,null))) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                let importElement : any = element as any;
                return op(Op.EQUALS,importElement.prefix,null) ? 'no prefix' : `a prefix named ${importElement.prefix.name}`;
            });
        }
        if (expected.prefixOffset != actual.prefixOffset) {
            this._write('Expected a prefix offset of ');
            this._write(expected.prefixOffset);
            this._write('; found ');
            this._writeln(actual.prefixOffset);
        }
        this._compareElementLists(expected.combinators,actual.combinators);
    }
    _compareLabelElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _compareLibraryElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
        expected.hasLoadLibraryFunction;
        expected.name;
        expected.source;
        this._compareElementLists(expected.imports,actual.imports);
        this._compareElementLists(expected.exports,actual.exports);
        this._compareElementLists(expected.units,actual.units);
    }
    _compareLocalVariableElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _compareMetadata(expected : core.DartList<any>,actual : core.DartList<any>) : void {
    }
    _compareMethodElements(expected : any,actual : any) : void {
        this._compareExecutableElements(expected,actual,'method');
        if (expected.isStatic != actual.isStatic) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isStatic ? 'a static field' : 'an instance field';
            });
        }
    }
    _compareMultiplyDefinedElements(expected : any,actual : any) : void {
    }
    _compareParameterElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _comparePrefixElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _comparePropertyAccessorElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _comparePropertyInducingElements(expected : any,actual : any,kind : string) : void {
        this._compareVariableElements(expected,actual,kind);
    }
    _compareTopLevelVariableElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
    }
    _compareTypeLists(descriptor : string,expected : core.DartList<any>,actual : core.DartList<any>) : void {
        let expectedLength : number = expected.length;
        if (expectedLength != actual.length) {
            this._write('Expected ');
            this._write(expectedLength);
            this._write(' ');
            this._write(descriptor);
            this._write('s; found ');
            this._write(actual.length);
        }else {
            for(let i : number = 0; i < expectedLength; i++){
                this._compareTypes(descriptor,expected[i],actual[i]);
            }
        }
    }
    _compareTypeParameterElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
        expected.bound;
    }
    _compareTypes(descriptor : string,expected : any,actual : any) : void {
        var compareNames : () => void = () : void =>  {
            if (expected.name != actual.name) {
                this._write('Expected a ');
                this._write(descriptor);
                this._write(' named ');
                this._write(expected.name);
                this._write('; found a ');
                this._write(descriptor);
                this._write(' named ');
                this._write(actual.name);
            }
        };
        var compareTypeArguments : (expected : any,actual : any) => void = (expected : any,actual : any) : void =>  {
            let expectedArguments : core.DartList<any> = expected.typeArguments;
            let actualArguments : core.DartList<any> = actual.typeArguments;
            let expectedLength : number = expectedArguments.length;
            if (expectedLength != actualArguments.length) {
                this._write('Expected ');
                this._write(expectedLength);
                this._write(' type arguments; found ');
                this._write(actualArguments.length);
            }else {
                for(let i : number = 0; i < expectedLength; i++){
                    this._compareTypes('type argument',expectedArguments[i],actualArguments[i]);
                }
            }
        };
        if (op(Op.EQUALS,expected,null)) {
            if (actual != null) {
                this._write('Expected no ');
                this._write(descriptor);
                this._write('; found a ');
                this._write(descriptor);
                this._write(' named ');
                this._write(actual.name);
            }
        }else if (op(Op.EQUALS,actual,null)) {
            this._write('Expected a ');
            this._write(descriptor);
            this._write(' named ');
            this._write(expected.name);
            this._write('; found none');
        }else if ((expected.isBottom && actual.isBottom) || (expected.isDynamic && actual.isDynamic) || (expected.isVoid && actual.isVoid)) {
        }else if (is(expected, any) && is(actual, any)) {
            compareNames();
            compareTypeArguments(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            compareNames();
            compareTypeArguments(expected,actual);
        }else if (is(expected, any) && is(actual, any)) {
            compareNames();
            this._compareTypes('bound',expected.element.bound,actual.element.bound);
        }else {
            this._write('Expected an instance of ');
            this._write(expected.runtimeType);
            this._write(' named ');
            this._write(expected.name);
            this._write('; found an instance of ');
            this._writeln(actual.runtimeType);
            this._write(' named ');
            this._write(actual.name);
        }
    }
    _compareUriReferencedElements(expected : any,actual : any) : void {
        this._compareGenericElements(expected,actual);
        if (expected.uri != actual.uri) {
            this._write('Expected a uri of ');
            this._write(expected.uri);
            this._write('; found ');
            this._writeln(actual.uri);
        }
        if (expected.uriOffset != actual.uriOffset) {
            this._write('Expected a uri offset of ');
            this._write(expected.uriOffset);
            this._write('; found ');
            this._writeln(actual.uriOffset);
        }
    }
    _compareVariableElements(expected : any,actual : any,kind : string) : void {
        this._compareGenericElements(expected,actual);
        if ((op(Op.EQUALS,expected.constantValue,null)) != (op(Op.EQUALS,actual.constantValue,null))) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return op(Op.EQUALS,(element as any).constantValue,null) ? `a ${kind} with no constant value` : `a ${kind} with a constant value`;
            });
        }
        if (expected.hasImplicitType != actual.hasImplicitType) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).hasImplicitType ? `a ${kind} with an implicit type` : `a ${kind} with an explicit type`;
            });
        }
        if (expected.isConst != actual.isConst) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isConst ? `a const ${kind}` : `a non-const ${kind}`;
            });
        }
        if (expected.isFinal != actual.isFinal) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isFinal ? `a final ${kind}` : `a non-final ${kind}`;
            });
        }
        if (expected.isStatic != actual.isStatic) {
            this._writeMismatch(expected,actual,(element : core.DartObject) =>  {
                return (element as any).isStatic ? `a static ${kind}` : `an instance ${kind}`;
            });
        }
        this.compareElements(expected.initializer,actual.initializer);
    }
    _write(value : core.DartObject) : void {
        if (this._needsLineBreak) {
            this._buffer.write('</p><p>');
            this._needsLineBreak = false;
        }
        this._buffer.write(value);
    }
    _writeln(value : core.DartObject) : void {
        this._buffer.write(value);
        this._needsLineBreak = true;
    }
    _writeMismatch(expected : core.DartObject,actual : core.DartObject,describe : (value : core.DartObject) => string) : void {
        this._write('Expected ');
        this._write(describe(expected));
        this._write('; found ');
        this._writeln(describe(actual));
    }
}

export namespace EntryComparison {
    export type Constructors = 'EntryComparison';
    export type Interface = Omit<EntryComparison, Constructors>;
}
@DartClass
export class EntryComparison {
    target : any;

    originalEntry : any;

    cloneEntry : any;

    obsoleteTarget : boolean;

    resultMap : core.DartMap<any,ResultComparison>;

    constructor(target : any,originalEntry : any,cloneEntry : any) {
    }
    @defaultConstructor
    EntryComparison(target : any,originalEntry : any,cloneEntry : any) {
        this.obsoleteTarget = false;
        this.resultMap = new core.DartHashMap<any,ResultComparison>();
        this.target = target;
        this.originalEntry = originalEntry;
        this.cloneEntry = cloneEntry;
        this._performComparison();
    }
    hasInterestingState() : boolean {
        return this.obsoleteTarget || this.resultMap.isNotEmpty;
    }
    writeOn(buffer : core.DartStringBuffer) : void {
        buffer.write('<p>');
        buffer.write(this.target);
        buffer.write('</p>');
        buffer.write('<blockquote>');
        if (this.obsoleteTarget) {
            buffer.write('<p><b>This target is obsolete.</b></p>');
        }
        let results : core.DartList<any> = this.resultMap.keys.toList();
        results.sort((first : any,second : any) =>  {
            return new core.DartString(first.toString()).compareTo(second.toString());
        });
        for(let result of results) {
            this.resultMap.get(result).writeOn(buffer);
        }
        buffer.write('</blockquote>');
    }
    _compareResults() : void {
        let results : core.DartSet<any> = new core.DartSet<any>();
        results.addAll(this.originalEntry.nonInvalidResults);
        results.addAll(this.cloneEntry.nonInvalidResults);
        for(let result of results) {
            let difference : ResultComparison = new ResultComparison(this,result);
            if (difference.hasInterestingState()) {
                this.resultMap.set(result,difference);
            }
        }
    }
    _isTargetObsolete() : boolean {
        if (is(this.target, any)) {
            let library : any = (this.target as any).library;
            let context : any = library.context;
            let entry : any = context.analysisCache.get(library.source);
            let value : any = entry.getValue(LIBRARY_ELEMENT);
            return value != library;
        }
        return false;
    }
    _performComparison() : void {
        this.obsoleteTarget = this._isTargetObsolete();
        this._compareResults();
    }
}

export namespace ResultComparison {
    export type Constructors = 'ResultComparison';
    export type Interface = Omit<ResultComparison, Constructors>;
}
@DartClass
export class ResultComparison {
    entry : EntryComparison;

    result : any;

    differentStates : boolean;

    valueComparison : ValueComparison;

    constructor(entry : EntryComparison,result : any) {
    }
    @defaultConstructor
    ResultComparison(entry : EntryComparison,result : any) {
        this.differentStates = false;
        this.entry = entry;
        this.result = result;
        this._performComparison();
    }
    hasInterestingState() : boolean {
        return this.differentStates || this.valueComparison != null;
    }
    writeOn(buffer : core.DartStringBuffer) : void {
        buffer.write('<p>');
        buffer.write(this.result);
        buffer.write('</p>');
        buffer.write('<blockquote>');
        if (this.differentStates) {
            let originalState : any = this.entry.originalEntry.getState(this.result);
            let cloneState : any = this.entry.cloneEntry.getState(this.result);
            buffer.write('<p>Original state = ');
            buffer.write(originalState.name);
            buffer.write('; clone state = ');
            buffer.write(cloneState.name);
            buffer.write('</p>');
        }
        if (this.valueComparison != null) {
            this.valueComparison.writeOn(buffer);
        }
        buffer.write('</blockquote>');
    }
    _areStatesDifferent(originalState : any,cloneState : any) : boolean {
        if (op(Op.EQUALS,originalState,cloneState)) {
            return false;
        }else if (op(Op.EQUALS,originalState,CacheState.FLUSHED) && op(Op.EQUALS,cloneState,CacheState.VALID)) {
            return false;
        }else if (op(Op.EQUALS,originalState,CacheState.VALID) && op(Op.EQUALS,cloneState,CacheState.FLUSHED)) {
            return false;
        }
        return true;
    }
    _compareValues(originalState : any,cloneState : any) : void {
        if (originalState != cloneState || originalState != CacheState.VALID) {
            return null;
        }
        let comparison : ValueComparison = new ValueComparison(this.entry.originalEntry.getValue(this.result),this.entry.cloneEntry.getValue(this.result));
        if (comparison.hasInterestingState()) {
            this.valueComparison = comparison;
        }
    }
    _performComparison() : void {
        let originalState : any = this.entry.originalEntry.getState(this.result);
        let cloneState : any = this.entry.cloneEntry.getState(this.result);
        if (this._areStatesDifferent(originalState,cloneState)) {
            this.differentStates = true;
            this._compareValues(originalState,cloneState);
        }
    }
}

export namespace ValidationResults {
    export type Constructors = 'ValidationResults';
    export type Interface = Omit<ValidationResults, Constructors>;
}
@DartClass
export class ValidationResults {
    extraTargets : core.DartSet<any>;

    missingTargets : core.DartSet<any>;

    targetMap : core.DartMap<any,EntryComparison>;

    constructor(context : any) {
    }
    @defaultConstructor
    ValidationResults(context : any) {
        this.targetMap = new core.DartHashMap<any,EntryComparison>();
        this._validate(context);
    }
    writeOn(buffer : core.DartStringBuffer) : void {
        if (this.extraTargets.isEmpty && this.missingTargets.isEmpty && this.targetMap.isEmpty) {
            buffer.write('<p>No interesting results.</p>');
            return;
        }
        if (this.extraTargets.isNotEmpty) {
            buffer.write('<h4>Extra Targets</h4>');
            buffer.write('<p style="commentary">');
            buffer.write('Targets that exist in the original context that were not ');
            buffer.write('re-created in the cloned context.');
            buffer.write('</p>');
            this._writeTargetList(buffer,this.extraTargets.toList());
        }
        if (this.missingTargets.isNotEmpty) {
            buffer.write('<h4>Missing Targets</h4>');
            buffer.write('<p style="commentary">');
            buffer.write('Targets that do <b>not</b> exist in the original context ');
            buffer.write('but do exist in the cloned context.');
            buffer.write('</p>');
            this._writeTargetList(buffer,this.missingTargets.toList());
        }
        if (this.targetMap.isNotEmpty) {
            buffer.write('<h4>Differing Targets</h4>');
            for(let comparison of this.targetMap.values) {
                comparison.writeOn(buffer);
            }
        }
    }
    _analyze(context : any) : void {
        while (true){
            let result : any = context.performAnalysisTask();
            if (!result.hasMoreWork) {
                return;
            }
        }
    }
    _clone(context : any) : any {
        let clone : any = AnalysisEngine.instance.createAnalysisContext();
        clone.analysisOptions = context.analysisOptions;
        clone.sourceFactory = context.sourceFactory.clone();
        let changeSet : any = new bare.createInstance(any,null);
        for(let target of context.explicitTargets) {
            if (is(target, any)) {
                changeSet.addedSource(target);
            }
        }
        clone.applyChanges(changeSet);
        return clone;
    }
    _compareContexts(original : any,clone : any) : void {
        let originalCache : any = original.analysisCache;
        let cloneCache : any = clone.analysisCache;
        let originalTargets : core.DartList<any> = this._getKeys(original,originalCache);
        let cloneTargets : core.DartList<any> = this._getKeys(clone,cloneCache);
        this.extraTargets = new core.DartHashSet<any>({
            equals : ValidationResults._equal.bind(this),hashCode : ValidationResults._hashCode.bind(this)});
        this.extraTargets.addAll(originalTargets);
        this.extraTargets.removeAll(cloneTargets);
        this.missingTargets = new core.DartHashSet<any>({
            equals : ValidationResults._equal.bind(this),hashCode : ValidationResults._hashCode.bind(this)});
        this.missingTargets.addAll(cloneTargets);
        this.missingTargets.removeAll(originalTargets);
        for(let cloneTarget of cloneTargets) {
            if (!this.missingTargets.contains(cloneTarget)) {
                let originalTarget : any = this._find(originalTargets,cloneTarget);
                let originalEntry : any = originalCache.get(originalTarget);
                let cloneEntry : any = cloneCache.get(cloneTarget);
                let comparison : EntryComparison = new EntryComparison(cloneTarget,originalEntry,cloneEntry);
                if (comparison.hasInterestingState()) {
                    this.targetMap.set(cloneTarget,comparison);
                }
            }
        }
    }
    _find(originalTargets : core.DartList<any>,cloneTarget : any) : any {
        for(let originalTarget of originalTargets) {
            if (ValidationResults._equal(originalTarget,cloneTarget)) {
                return originalTarget;
            }
        }
        return null;
    }
    _getKeys(context : any,cache : any) : core.DartList<any> {
        let targets : core.DartList<any> = new core.DartList.literal<any>();
        let iterator : any = cache.iterator({
            context : context});
        while (iterator.moveNext()){
            targets.add(iterator.key);
        }
        return targets;
    }
    _validate(context : any) : void {
        let clone : any = this._clone(context);
        this._analyze(clone);
        this._compareContexts(context,clone);
    }
    _writeTargetList(buffer : core.DartStringBuffer,targets : core.DartList<any>) : void {
        for(let target of targets) {
            buffer.write('<p>');
            buffer.write(target);
            buffer.write(' (');
            buffer.write(target.runtimeType);
            buffer.write(')');
            buffer.write('</p>');
        }
    }
    static _equal(first : core.DartObject,second : core.DartObject) : boolean {
        if (op(Op.EQUALS,first,null)) {
            return op(Op.EQUALS,second,null);
        }else if (op(Op.EQUALS,second,null)) {
            return false;
        }
        if (is(first, any) && is(second, any)) {
            return ValidationResults._equal(first.source,second.source) && ValidationResults._equal(first.librarySource,second.librarySource) && ValidationResults._equal(first.annotationAst,second.annotationAst);
        }else if (is(first, any) && is(second, any)) {
            return op(Op.EQUALS,first.runtimeType,second.runtimeType) && op(Op.EQUALS,first.offset,second.offset) && op(Op.EQUALS,first.length,second.length);
        }
        return op(Op.EQUALS,first,second);
    }
    static _hashCode(object : core.DartObject) : number {
        if (is(object, any)) {
            return object.source.hashCode;
        }else if (is(object, any)) {
            return object.offset;
        }
        return object.hashCode;
    }
}

export namespace ValueComparison {
    export type Constructors = 'ValueComparison';
    export type Interface = Omit<ValueComparison, Constructors>;
}
@DartClass
export class ValueComparison {
    originalValue : core.DartObject;

    cloneValue : core.DartObject;

    description : string;

    constructor(originalValue : core.DartObject,cloneValue : core.DartObject) {
    }
    @defaultConstructor
    ValueComparison(originalValue : core.DartObject,cloneValue : core.DartObject) {
        this.description = null;
        this.originalValue = originalValue;
        this.cloneValue = cloneValue;
        this._performComparison();
    }
    hasInterestingState() : boolean {
        return this.description != null;
    }
    writeOn(buffer : core.DartStringBuffer) : void {
        buffer.write('<p>');
        buffer.write(this.description);
        buffer.write('</p>');
    }
    _compareAnalysisErrors(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        if (op(Op.EQUALS,actual.errorCode,expected.errorCode) && op(Op.EQUALS,actual.source,expected.source) && op(Op.EQUALS,actual.offset,expected.offset)) {
            return true;
        }
        if (buffer != null) {
            var write : (originalError : any) => void = (originalError : any) : void =>  {
                buffer.write('a ');
                buffer.write(originalError.errorCode.uniqueName);
                buffer.write(' in ');
                buffer.write(originalError.source.fullName);
                buffer.write(' at ');
                buffer.write(originalError.offset);
            };
            buffer.write('Expected ');
            write(expected);
            buffer.write('; found ');
            write(actual);
        }
        return false;
    }
    _compareAstNodes(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        if (AstComparator.equalNodes(actual,expected)) {
            return true;
        }
        if (buffer != null) {
            buffer.write('Different AST nodes');
        }
        return false;
    }
    _compareConstantEvaluationTargets(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        if (is(actual, any)) {
            let expectedAnnotation : any = expected;
            let actualAnnotation : any = actual;
            if (op(Op.EQUALS,actualAnnotation.source,expectedAnnotation.source) && op(Op.EQUALS,actualAnnotation.librarySource,expectedAnnotation.librarySource) && op(Op.EQUALS,actualAnnotation.annotationAst,expectedAnnotation.annotationAst)) {
                return true;
            }
            if (buffer != null) {
                var write : (target : any) => void = (target : any) : void =>  {
                    let annotation : any = target.annotationAst;
                    buffer.write(annotation);
                    buffer.write(' at ');
                    buffer.write(annotation.offset);
                    buffer.write(' in ');
                    buffer.write(target.source);
                    buffer.write(' in ');
                    buffer.write(target.librarySource);
                };
                buffer.write('Expected ');
                write(expectedAnnotation);
                buffer.write('; found ');
                write(actualAnnotation);
            }
            return false;
        }
        if (buffer != null) {
            buffer.write('Unknown class of ConstantEvaluationTarget: ');
            buffer.write(actual.runtimeType);
        }
        return false;
    }
    _compareDartScripts(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        return true;
    }
    _compareDocuments(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        return true;
    }
    _compareElements(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        let comparator : ElementComparator = new ElementComparator();
        comparator.compareElements(expected,actual);
        if (comparator.hasDifference) {
            if (buffer != null) {
                buffer.write(comparator.description);
            }
            return false;
        }
        return true;
    }
    _compareLibrarySpecificUnits(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        if (op(Op.EQUALS,actual.library.fullName,expected.library.fullName) && op(Op.EQUALS,actual.unit.fullName,expected.unit.fullName)) {
            return true;
        }
        if (buffer != null) {
            buffer.write('Expected ');
            buffer.write(expected);
            buffer.write('; found ');
            buffer.write(actual);
        }
        return false;
    }
    _compareLineInfos(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        return true;
    }
    _compareLists(expected : core.DartList<any>,actual : core.DartList<any>,buffer : core.DartStringBuffer) : boolean {
        let expectedLength : number = expected.length;
        let actualLength : number = actual.length;
        let left : number = 0;
        while (left < expectedLength && left < actualLength && this._compareObjects(expected[left],actual[left],null)){
            left++;
        }
        if (left == actualLength) {
            if (left == expectedLength) {
                return true;
            }
            if (buffer != null) {
                buffer.write('Expected a list of length ');
                buffer.write(expectedLength);
                buffer.write('; found a list of length ');
                buffer.write(actualLength);
                buffer.write(' that was a prefix of the expected list');
            }
            return false;
        }else if (left == expectedLength) {
            if (buffer != null) {
                buffer.write('Expected a list of length ');
                buffer.write(expectedLength);
                buffer.write('; found a list of length ');
                buffer.write(actualLength);
                buffer.write(' that was an extension of the expected list');
            }
            return false;
        }
        let expectedRight : number = expectedLength - 1;
        let actualRight : number = actualLength - 1;
        while (expectedRight > left && actualRight > left && this._compareObjects(expected[expectedRight],actual[actualRight],null)){
            actualRight--;
            expectedRight--;
        }
        if (buffer != null) {
            var write : (left : number,right : number,length : number) => void = (left : number,right : number,length : number) : void =>  {
                buffer.write('the elements (');
                buffer.write(left);
                buffer.write('..');
                buffer.write(right);
                buffer.write(') in a list of length ');
                buffer.write(length);
            };
            buffer.write('Expected ');
            write(left,expectedRight,expectedLength);
            buffer.write(' to match ');
            write(left,actualRight,actualLength);
            buffer.write(' but they did not');
        }
        return false;
    }
    _compareObjects(expected : core.DartObject,actual : core.DartObject,buffer : core.DartStringBuffer) : boolean {
        if (op(Op.EQUALS,actual,null)) {
            if (op(Op.EQUALS,expected,null)) {
                return true;
            }else {
                if (buffer != null) {
                    buffer.write('Expected an instance of ');
                    buffer.write(expected.runtimeType);
                    buffer.write('; found null');
                }
                return false;
            }
        }
        let actualType : core.Type = actual.runtimeType;
        if (op(Op.EQUALS,expected,null)) {
            if (buffer != null) {
                buffer.write('Expected null; found an instance of ');
                buffer.write(actualType);
            }
            return false;
        }
        let expectedType : core.Type = expected.runtimeType;
        if (expectedType != actualType) {
            if (buffer != null) {
                buffer.write('Expected an instance of ');
                buffer.write(expectedType);
                buffer.write('; found an instance of ');
                buffer.write(actualType);
            }
            return false;
        }
        if (is(actual, "boolean")) {
            return this._comparePrimitives(expected,actual,buffer);
        }else if (is(actual, "number")) {
            return this._comparePrimitives(expected,actual,buffer);
        }else if (is(actual, "string")) {
            return this._compareStrings(expected,actual,buffer);
        }else if (is(actual, core.DartList<any>)) {
            return this._compareLists(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareAnalysisErrors(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareAstNodes(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareDartScripts(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareDocuments(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareElements(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareLibrarySpecificUnits(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareLineInfos(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareSources(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._comparePrimitives(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareTokenStreams(expected,actual,buffer);
        }else if (is(actual, any)) {
            return true;
        }else if (is(actual, any)) {
            return this._compareUsedLocalElements(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareUsedImportedElements(expected,actual,buffer);
        }else if (is(actual, any)) {
            return this._compareConstantEvaluationTargets(expected,actual,buffer);
        }
        if (buffer != null) {
            buffer.write('Cannot compare values of type ');
            buffer.write(actualType);
        }
        return false;
    }
    _comparePrimitives(expected : core.DartObject,actual : core.DartObject,buffer : core.DartStringBuffer) : boolean {
        if (op(Op.EQUALS,actual,expected)) {
            return true;
        }
        if (buffer != null) {
            buffer.write('Expected ');
            buffer.write(expected);
            buffer.write('; found ');
            buffer.write(actual);
        }
        return false;
    }
    _compareSources(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        if (op(Op.EQUALS,actual.fullName,expected.fullName)) {
            return true;
        }
        if (buffer != null) {
            buffer.write('Expected a source for ');
            buffer.write(expected.fullName);
            buffer.write('; found a source for ');
            buffer.write(actual.fullName);
        }
        return false;
    }
    _compareStrings(expected : string,actual : string,buffer : core.DartStringBuffer) : boolean {
        if (actual == expected) {
            return true;
        }
        let expectedLength : number = new core.DartString(expected).length;
        let actualLength : number = new core.DartString(actual).length;
        let left : number = 0;
        while (left < actualLength && left < expectedLength && new core.DartString(actual).codeUnitAt(left) == new core.DartString(expected).codeUnitAt(left)){
            left++;
        }
        if (left == actualLength) {
            if (buffer != null) {
                buffer.write('Expected ...[');
                buffer.write(new core.DartString(expected).substring(left));
                buffer.write(']; found ...[]');
            }
            return false;
        }else if (left == expectedLength) {
            if (buffer != null) {
                buffer.write('Expected ...[]; found ...[');
                buffer.write(new core.DartString(actual).substring(left));
                buffer.write(']');
            }
            return false;
        }
        let actualRight : number = actualLength - 1;
        let expectedRight : number = expectedLength - 1;
        while (actualRight > left && expectedRight > left && new core.DartString(actual).codeUnitAt(actualRight) == new core.DartString(expected).codeUnitAt(expectedRight)){
            actualRight--;
            expectedRight--;
        }
        if (buffer != null) {
            var write : (string : string,left : number,right : number) => void = (string : string,left : number,right : number) : void =>  {
                buffer.write('...[');
                buffer.write(new core.DartString(string).substring(left,right));
                buffer.write(']... (');
                buffer.write(left);
                buffer.write('..');
                buffer.write(right);
                buffer.write(')');
            };
            buffer.write('Expected ');
            write(expected,left,expectedRight);
            buffer.write('; found ');
            write(actual,left,actualRight);
        }
        return false;
    }
    _compareTokenStreams(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        var equals : (originalToken : any,cloneToken : any) => boolean = (originalToken : any,cloneToken : any) : boolean =>  {
            return op(Op.EQUALS,originalToken.type,cloneToken.type) && op(Op.EQUALS,originalToken.offset,cloneToken.offset) && op(Op.EQUALS,originalToken.lexeme,cloneToken.lexeme);
        };
        let actualLeft : any = actual;
        let expectedLeft : any = expected;
        while (actualLeft.type != TokenType.EOF && expectedLeft.type != TokenType.EOF && equals(actualLeft,expectedLeft)){
            actualLeft = actualLeft.next;
            expectedLeft = expectedLeft.next;
        }
        if (op(Op.EQUALS,actualLeft.type,TokenType.EOF) && op(Op.EQUALS,expectedLeft.type,TokenType.EOF)) {
            return true;
        }
        if (buffer != null) {
            var write : (token : any) => void = (token : any) : void =>  {
                buffer.write(token.type);
                buffer.write(' at ');
                buffer.write(token.offset);
                buffer.write(' (');
                buffer.write(token.lexeme);
                buffer.write(')');
            };
            buffer.write('Expected ');
            write(expectedLeft);
            buffer.write('; found ');
            write(actualLeft);
        }
        return false;
    }
    _compareUsedImportedElements(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        return true;
    }
    _compareUsedLocalElements(expected : any,actual : any,buffer : core.DartStringBuffer) : boolean {
        return true;
    }
    _performComparison() : void {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        if (!this._compareObjects(this.cloneValue,this.originalValue,buffer)) {
            this.description = buffer.toString();
        }
    }
}

export class properties {
}
