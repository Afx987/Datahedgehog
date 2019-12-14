/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/element_text.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var applyCheckElementTextReplacements : () => void = () : void =>  {
    if (properties._testPath != null && properties._replacements.isNotEmpty) {
        properties._replacements.sort((a : any,b : any) =>  {
            return b.offset - a.offset;
        });
        let newCode : string = properties._testCode;
        properties._replacements.forEach((r : any) =>  {
            newCode = new core.DartString(newCode).substring(0,r.offset) + r.text + new core.DartString(newCode).substring(r.end);
        });
        new io.File(properties._testPath).writeAsStringSync(newCode);
    }
};
export var checkElementText : (library : any,expected : string,_namedArguments? : {withOffsets? : boolean,withSyntheticAccessors? : boolean,withSyntheticFields? : boolean}) => void = (library : any,expected : string,_namedArguments? : {withOffsets? : boolean,withSyntheticAccessors? : boolean,withSyntheticFields? : boolean}) : void =>  {
    let {withOffsets,withSyntheticAccessors,withSyntheticFields} = Object.assign({
        "withOffsets" : false,
        "withSyntheticAccessors" : false,
        "withSyntheticFields" : false}, _namedArguments );
    let writer = new _ElementWriter({
        withOffsets : withOffsets,withSyntheticAccessors : withSyntheticAccessors,withSyntheticFields : withSyntheticFields});
    writer.writeLibraryElement(library);
    let actualText : string = writer.buffer.toString();
    actualText = new core.DartString(actualText).split('\n').map((line : any) =>  {
        return new core.DartString(line).trimRight();
    }).join('\n');
    if (properties._testPath != null && actualText != expected) {
        if (properties._testCode == null) {
            properties._testCode = new io.File(properties._testPath).readAsStringSync();
            properties._testCodeLines = new bare.createInstance(any,null,properties._testCode);
        }
        try {
            throw 42;
        } catch (__error__) {

            {
                let trace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                let traceString : string = trace.toString();
                let testFilePathOffset : number = new core.DartString(traceString).indexOf(properties._testPath);
                expect(testFilePathOffset,isNonNegative);
                expect(traceString[testFilePathOffset + new core.DartString(properties._testPath).length],':');
                let lineOffset : number = testFilePathOffset + new core.DartString(properties._testPath).length + new core.DartString(':').length;
                let invocationLine : number = core.DartInt.parse(new core.DartString(traceString).substring(lineOffset,new core.DartString(traceString).indexOf(':',lineOffset)));
                let invocationOffset : number = properties._testCodeLines.getOffsetOfLine(invocationLine - 1);
                let rawStringPrefix : string = "r'''";
                let expectationOffset : number = new core.DartString(properties._testCode).indexOf(rawStringPrefix,invocationOffset);
                expect(new core.DartString(properties._testCode).substring(invocationOffset,expectationOffset),isNot(anyOf(contains("'"),contains('"'),contains('}'))));
                expectationOffset += new core.DartString(rawStringPrefix).length;
                let expectationEnd : number = new core.DartString(properties._testCode).indexOf("'''",expectationOffset);
                properties._replacements.add(new _Replacement(expectationOffset,expectationEnd,'\n' + actualText));
            }
        }
    }
    expect(actualText,expected);
};
export namespace _ElementWriter {
    export type Constructors = '_ElementWriter';
    export type Interface = Omit<_ElementWriter, Constructors>;
}
@DartClass
export class _ElementWriter {
    withOffsets : boolean;

    withConstElements : boolean;

    withSyntheticAccessors : boolean;

    withSyntheticFields : boolean;

    buffer : core.DartStringBuffer;

    constructor(_namedArguments? : {withOffsets? : boolean,withConstElements? : boolean,withSyntheticAccessors? : boolean,withSyntheticFields? : boolean}) {
    }
    @defaultConstructor
    _ElementWriter(_namedArguments? : {withOffsets? : boolean,withConstElements? : boolean,withSyntheticAccessors? : boolean,withSyntheticFields? : boolean}) {
        let {withOffsets,withConstElements,withSyntheticAccessors,withSyntheticFields} = Object.assign({
            "withOffsets" : false,
            "withConstElements" : true,
            "withSyntheticFields" : false}, _namedArguments );
        this.buffer = new core.DartStringBuffer();
        this.withOffsets = withOffsets;
        this.withConstElements = withConstElements;
        this.withSyntheticAccessors = withSyntheticAccessors;
        this.withSyntheticFields = withSyntheticFields;
    }
    isDynamicType(type : any) : boolean {
        return is(type, any);
    }
    isEnumField(e : any) : boolean {
        let enclosing : any = e.enclosingElement;
        return is(enclosing, any) && enclosing.isEnum;
    }
    newLineIfNotEmpty() : void {
        if (this.buffer.isNotEmpty) {
            this.buffer.writeln();
        }
    }
    writeBodyModifiers(e : any) : void {
        if (e.isAsynchronous) {
            expect(e.isSynchronous,isFalse);
            this.buffer.write(' async');
        }
        if (e.isSynchronous && e.isGenerator) {
            expect(e.isAsynchronous,isFalse);
            this.buffer.write(' sync');
        }
        this.writeIf(e.isGenerator,'*');
    }
    writeClassElement(e : any) : void {
        this.writeDocumentation(e);
        this.writeMetadata(e,'','\n');
        this.writeIf(e.isAbstract,'abstract ');
        if (e.isEnum) {
            this.buffer.write('enum ');
        }else {
            this.buffer.write('class ');
        }
        this.writeIf(e.isMixinApplication,'alias ');
        this.writeName(e);
        this.writeTypeParameterElements(e.typeParameters);
        if (e.supertype != null && e.supertype.displayName != 'Object' || e.mixins.isNotEmpty) {
            this.buffer.write(' extends ');
            this.writeType(e.supertype);
        }
        this.writeList(' with ','',e.mixins,', ',this.writeType.bind(this));
        this.writeList(' implements ','',e.interfaces,', ',this.writeType.bind(this));
        this.buffer.writeln(' {');
        e.fields.forEach(this.writePropertyInducingElement.bind(this));
        e.accessors.forEach(this.writePropertyAccessorElement.bind(this));
        if (e.isEnum) {
            expect(e.constructors,isEmpty);
        }else {
            expect(e.constructors,isNotEmpty);
        }
        if (op(Op.EQUALS,e.constructors.length,1) && op(Op.INDEX,e.constructors,0).isSynthetic && e.mixins.isEmpty) {
            expect(op(Op.INDEX,e.constructors,0).parameters,isEmpty);
        }else {
            e.constructors.forEach(this.writeConstructorElement.bind(this));
        }
        e.methods.forEach(this.writeMethodElement.bind(this));
        this.buffer.writeln('}');
    }
    writeConstructorElement(e : any) : void {
        this.writeDocumentation(e,'  ');
        this.writeMetadata(e,'  ','\n');
        this.buffer.write('  ');
        this.writeIf(e.isSynthetic,'synthetic ');
        this.writeIf(e.isExternal,'external ');
        this.writeIf(e.isConst,'const ');
        this.writeIf(e.isFactory,'factory ');
        this.buffer.write(e.enclosingElement.name);
        if (e.name.isNotEmpty) {
            this.buffer.write('.');
            this.writeName(e);
        }
        this.writeParameterElements(e.parameters);
        {
            let redirected : any = e.redirectedConstructor;
            if (redirected != null) {
                this.buffer.write(' = ');
                this.buffer.write(redirected.returnType);
                if (redirected.name.isNotEmpty) {
                    this.buffer.write('.');
                    this.buffer.write(redirected.name);
                }
            }
        }
        if (is(e, any)) {
            if (e.constantInitializers != null) {
                this.writeList(' : ','',e.constantInitializers,', ',this.writeExpression.bind(this));
            }
        }
        expect(e.isAsynchronous,isFalse);
        expect(e.isGenerator,isFalse);
        this.buffer.writeln(';');
    }
    writeDocumentation(e : any,prefix? : string) : void {
        prefix = prefix || '';
        if (e.documentationComment != null) {
            this.buffer.write(prefix);
            this.buffer.writeln(e.documentationComment);
        }
    }
    writeExportElement(e : any) : void {
        this.writeMetadata(e,'','\n');
        this.buffer.write('export ');
        this.writeUri(e,((t)=>(!!t)?t.source:null)(e.exportedLibrary));
        e.combinators.forEach(this.writeNamespaceCombinator.bind(this));
        this.buffer.writeln(';');
    }
    writeExpression(e : any) : void {
        if (is(e, any)) {
            this.buffer.write('@');
            this.writeExpression(e.name);
            if (e.constructorName != null) {
                this.buffer.write('.');
                this.writeExpression(e.constructorName);
            }
            if (e.arguments != null) {
                this.writeList('(',')',e.arguments.arguments,', ',this.writeExpression.bind(this),{
                    includeEmpty : true});
            }
        }else if (is(e, any)) {
            this.buffer.write('assert(');
            this.writeExpression(e.condition);
            if (e.message != null) {
                this.buffer.write(', ');
                this.writeExpression(e.message);
            }
            this.buffer.write(')');
        }else if (is(e, any)) {
            this.writeExpression(e.leftOperand);
            this.buffer.write(' ');
            this.buffer.write(e.operator.lexeme);
            this.buffer.write(' ');
            this.writeExpression(e.rightOperand);
        }else if (is(e, any)) {
            this.buffer.write(e.value);
        }else if (is(e, any)) {
            this.writeExpression(e.condition);
            this.buffer.write(' ? ');
            this.writeExpression(e.thenExpression);
            this.buffer.write(' : ');
            this.writeExpression(e.elseExpression);
        }else if (is(e, any)) {
            this.writeExpression(e.fieldName);
            this.buffer.write(' = ');
            this.writeExpression(e.expression);
        }else if (is(e, any)) {
            this.writeExpression(e.type);
            if (e.name != null) {
                this.buffer.write('.');
                this.writeExpression(e.name);
            }
        }else if (is(e, any)) {
            this.buffer.write(e.value);
        }else if (is(e, any)) {
            this.buffer.write(e.keyword.lexeme);
            this.buffer.write(' ');
            this.writeExpression(e.constructorName);
            this.writeList('(',')',e.argumentList.arguments,', ',this.writeExpression.bind(this),{
                includeEmpty : true});
        }else if (is(e, any)) {
            this.buffer.write(e.value);
        }else if (is(e, any)) {
            this.buffer.write('${');
            this.writeExpression(e.expression);
            this.buffer.write('}');
        }else if (is(e, any)) {
            this.buffer.write(e.value.replaceAll("'","\'"));
        }else if (is(e, any)) {
            if (e.constKeyword != null) {
                this.buffer.write('const ');
            }
            if (e.typeArguments != null) {
                this.writeList('<','>',e.typeArguments.arguments,', ',this.writeExpression.bind(this));
            }
            this.writeList('[',']',e.elements,', ',this.writeExpression.bind(this),{
                includeEmpty : true});
        }else if (is(e, any)) {
            this.writeExpression(e.label);
            this.buffer.write(': ');
        }else if (is(e, any)) {
            if (e.constKeyword != null) {
                this.buffer.write('const ');
            }
            if (e.typeArguments != null) {
                this.writeList('<','>',e.typeArguments.arguments,', ',this.writeExpression.bind(this));
            }
            this.writeList('{','}',e.entries,', ',this.writeExpression.bind(this),{
                includeEmpty : true});
        }else if (is(e, any)) {
            this.writeExpression(e.key);
            this.buffer.write(': ');
            this.writeExpression(e.value);
        }else if (is(e, any)) {
            this.writeExpression(e.name);
            this.buffer.write(e.expression);
        }else if (is(e, any)) {
            this.buffer.write('null');
        }else if (is(e, any)) {
            this.buffer.write(e.operator.lexeme);
            this.writeExpression(e.operand);
        }else if (is(e, any)) {
            this.writeExpression(e.prefix);
            this.buffer.write('.');
            this.writeExpression(e.identifier);
        }else if (is(e, any)) {
            this.writeExpression(e.target);
            this.buffer.write('.');
            this.writeExpression(e.propertyName);
        }else if (is(e, any)) {
            this.buffer.write('this');
            if (e.constructorName != null) {
                this.buffer.write('.');
                this.writeExpression(e.constructorName);
            }
            this.writeList('(',')',e.argumentList.arguments,', ',this.writeExpression.bind(this),{
                includeEmpty : true});
        }else if (is(e, any)) {
            if (this.withConstElements) {
                this.buffer.writeln();
                this.buffer.write(op(Op.TIMES,'  ',4));
                this.buffer.write(e.name);
                this.buffer.write('/*');
                this.buffer.write('location: ');
                this.buffer.write(this._getElementLocationString(e.staticElement));
                this.buffer.write('*/');
            }else {
                this.buffer.write(e.name);
            }
        }else if (is(e, any)) {
            this.buffer.write("'");
            this.buffer.write(e.value.replaceAll("'","\'"));
            this.buffer.write("'");
        }else if (is(e, any)) {
            this.buffer.write("'");
            e.elements.forEach(this.writeExpression.bind(this));
            this.buffer.write("'");
        }else if (is(e, any)) {
            this.buffer.write('super');
            if (e.constructorName != null) {
                this.buffer.write('.');
                this.writeExpression(e.constructorName);
            }
            this.writeList('(',')',e.argumentList.arguments,', ',this.writeExpression.bind(this),{
                includeEmpty : true});
        }else if (is(e, any)) {
            this.buffer.write('super');
        }else if (is(e, any)) {
            this.buffer.write('#');
            this.writeList('','',e.components,'.',(token : any) =>  {
                return this.buffer.write(token.lexeme);
            });
        }else if (is(e, any)) {
            this.buffer.write('this');
        }else if (is(e, any)) {
            this.writeExpression(e.name);
            if (e.typeArguments != null) {
                this.writeList('<','>',e.typeArguments.arguments,', ',this.writeExpression.bind(this));
            }
        }else {
            fail(`Unsupported expression type: ${e.runtimeType}`);
        }
    }
    writeFunctionElement(e : any) : void {
        this.writeIf(e.isExternal,'external ');
        this.writeType2(e.returnType);
        this.writeName(e);
        this.writeTypeParameterElements(e.typeParameters);
        this.writeParameterElements(e.parameters);
        this.writeBodyModifiers(e);
        this.buffer.writeln(' {}');
    }
    writeFunctionTypeAliasElement(e : any) : void {
        this.writeDocumentation(e);
        this.writeMetadata(e,'','\n');
        if (is(e, any)) {
            this.buffer.write('typedef ');
            this.writeName(e);
            this.writeTypeParameterElements(e.typeParameters);
            this.buffer.write(' = ');
            this.writeType(e.function.returnType);
            this.buffer.write(' Function');
            this.writeTypeParameterElements(e.function.typeParameters);
            this.writeParameterElements(e.function.parameters);
        }else {
            this.buffer.write('typedef ');
            this.writeType2(e.returnType);
            this.writeName(e);
            this.writeTypeParameterElements(e.typeParameters);
            this.writeParameterElements(e.parameters);
        }
        this.buffer.writeln(';');
    }
    writeIf(flag : boolean,str : string) : void {
        if (flag) {
            this.buffer.write(str);
        }
    }
    writeImportElement(e : any) : void {
        if (!e.isSynthetic) {
            this.writeMetadata(e,'','\n');
            this.buffer.write('import ');
            this.writeUri(e,((t)=>(!!t)?t.source:null)(e.importedLibrary));
            this.writeIf(e.isDeferred,' deferred');
            if (e.prefix != null) {
                this.buffer.write(' as ');
                this.writeName(e.prefix);
                if (this.withOffsets) {
                    this.buffer.write(`(${e.prefixOffset})`);
                }
            }
            e.combinators.forEach(this.writeNamespaceCombinator.bind(this));
            this.buffer.writeln(';');
        }
    }
    writeLibraryElement(e : any) : void {
        if (e.displayName != '') {
            this.writeMetadata(e,'','\n');
            this.buffer.write('library ');
            this.writeName(e);
            this.buffer.writeln(';');
        }
        e.imports.forEach(this.writeImportElement.bind(this));
        e.exports.forEach(this.writeExportElement.bind(this));
        e.parts.forEach(this.writePartElement.bind(this));
        e.units.forEach(this.writeUnitElement.bind(this));
    }
    writeList<T>(open : string,close : string,items : core.DartList<T>,separator : string,writeItem : <T>(item : T) => any,_namedArguments? : {includeEmpty? : boolean}) : void {
        let {includeEmpty} = Object.assign({
            "includeEmpty" : false}, _namedArguments );
        if (!includeEmpty && items.isEmpty) {
            return;
        }
        this.buffer.write(open);
        let first : boolean = true;
        for(let item of items) {
            if (!first) {
                this.buffer.write(separator);
            }
            writeItem(item);
            first = false;
        }
        this.buffer.write(close);
    }
    writeMetadata(e : any,prefix : string,separator : string) : void {
        if (e.metadata.isNotEmpty) {
            this.writeList(prefix,'',e.metadata,`${separator}${prefix}`,(a : any) =>  {
                this.writeExpression((a as any).annotationAst);
            });
            this.buffer.write(separator);
        }
    }
    writeMethodElement(e : any) : void {
        this.writeDocumentation(e,'  ');
        this.writeMetadata(e,'  ','\n');
        this.buffer.write('  ');
        this.writeIf(e.isExternal,'external ');
        this.writeIf(e.isStatic,'static ');
        this.writeType2(e.returnType);
        this.writeName(e);
        this.writeTypeParameterElements(e.typeParameters);
        this.writeParameterElements(e.parameters);
        this.writeBodyModifiers(e);
        if (e.isAbstract) {
            this.buffer.writeln(';');
        }else {
            this.buffer.writeln(' {}');
        }
    }
    writeName(e : any) : void {
        this.buffer.write(e.displayName);
        if (this.withOffsets) {
            this.buffer.write('@');
            this.buffer.write(e.nameOffset);
        }
    }
    writeNamespaceCombinator(e : any) : void {
        if (is(e, any)) {
            this.buffer.write(' show ');
            this.buffer.write(e.shownNames.join(', '));
        }else if (is(e, any)) {
            this.buffer.write(' hide ');
            this.buffer.write(e.hiddenNames.join(', '));
        }
    }
    writeParameterElement(e : any) : void {
        let defaultValueSeparator : string;
        let defaultValue : any = is(e, any) ? e.constantInitializer : null;
        let closeString : string;
        let kind : any = e.parameterKind;
        if (op(Op.EQUALS,kind,ParameterKind.REQUIRED)) {
            closeString = '';
        }else if (op(Op.EQUALS,kind,ParameterKind.POSITIONAL)) {
            this.buffer.write('[');
            defaultValueSeparator = ' = ';
            closeString = ']';
        }else if (op(Op.EQUALS,kind,ParameterKind.NAMED)) {
            this.buffer.write('{');
            defaultValueSeparator = ': ';
            closeString = '}';
        }else {
            fail(`Unknown parameter kind: ${kind}`);
        }
        this.writeMetadata(e,'',' ');
        this.writeIf(e.isCovariant,'covariant ');
        this.writeIf(e.isFinal,'final ');
        this.writeType2(e.type);
        if (is(e, any)) {
            this.buffer.write('this.');
        }
        this.writeName(e);
        this.writeVariableTypeInferenceError(e);
        if (defaultValue != null) {
            this.buffer.write(defaultValueSeparator);
            this.writeExpression(defaultValue);
        }
        this.buffer.write(closeString);
    }
    writeParameterElements(elements : core.DartList<any>) : void {
        this.writeList('(',')',elements,', ',this.writeParameterElement.bind(this),{
            includeEmpty : true});
    }
    writePartElement(e : any) : void {
        this.writeMetadata(e,'','\n');
        this.buffer.write('part ');
        this.writeUri(e,e.source);
        this.buffer.writeln(';');
    }
    writePropertyAccessorElement(e : any) : void {
        if (e.isSynthetic && !this.withSyntheticAccessors) {
            return;
        }
        if (is(e.enclosingElement, any)) {
            this.writeDocumentation(e,'  ');
            this.writeMetadata(e,'  ','\n');
            this.buffer.write('  ');
            this.writeIf(e.isSynthetic,'synthetic ');
            this.writeIf(e.isStatic,'static ');
        }else {
            this.writeDocumentation(e);
            this.writeMetadata(e,'','\n');
            this.writeIf(e.isSynthetic,'synthetic ');
        }
        this.writeIf(e.isExternal,'external ');
        this.writeType2(e.returnType);
        if (e.isGetter) {
            this.buffer.write('get ');
        }else {
            this.buffer.write('set ');
        }
        this.writeName(e);
        if (e.isSetter || e.parameters.isNotEmpty) {
            this.writeParameterElements(e.parameters);
        }
        expect(e.typeParameters,isEmpty);
        expect(e.isSynchronous,isTrue);
        expect(e.isAsynchronous,isFalse);
        expect(e.isGenerator,isFalse);
        if (e.isAbstract) {
            this.buffer.writeln(';');
        }else {
            this.buffer.writeln(' {}');
        }
    }
    writePropertyInducingElement(e : any) : void {
        if (e.isSynthetic && !this.withSyntheticFields && !this.isEnumField(e)) {
            return;
        }
        let type : any = e.type;
        expect(type,isNotNull);
        if (is(e.enclosingElement, any)) {
            this.writeDocumentation(e,'  ');
            this.writeMetadata(e,'  ','\n');
            this.buffer.write('  ');
            this.writeIf(e.isSynthetic,'synthetic ');
            this.writeIf(e.isStatic,'static ');
            this.writeIf(is(e, any) && e.isCovariant,'covariant ');
        }else {
            this.writeDocumentation(e);
            this.writeMetadata(e,'','\n');
        }
        this.writeIf(e.isFinal,'final ');
        this.writeIf(e.isConst,'const ');
        this.writeType2(type);
        this.writeName(e);
        this.writeVariableTypeInferenceError(e);
        if (is(e, any)) {
            let initializer : any = (e as any).constantInitializer;
            if (initializer != null) {
                this.buffer.write(' = ');
                this.writeExpression(initializer);
            }
        }
        this.buffer.writeln(';');
    }
    writeType(type : any) : void {
        if (is(type, any)) {
            this.buffer.write(type.element.name);
            if (type.element.typeParameters.isNotEmpty) {
                this.writeList('<','>',type.typeArguments,', ',this.writeType.bind(this));
            }
        }else {
            this.buffer.write(type.displayName);
        }
    }
    writeType2(type : any) : void {
        this.writeType(type);
        this.buffer.write(' ');
    }
    writeTypeParameterElement(e : any) : void {
        this.writeName(e);
        if (e.bound != null) {
            this.buffer.write(' extends ');
            this.writeType(e.bound);
        }
    }
    writeTypeParameterElements(elements : core.DartList<any>) : void {
        this.writeList('<','>',elements,', ',this.writeTypeParameterElement.bind(this));
    }
    writeUnitElement(e : any) : void {
        if (e.library.definingCompilationUnit != e) {
            this.buffer.writeln(op(Op.TIMES,'-',20));
            this.buffer.writeln(`unit: ${((t)=>(!!t)?t.shortName:null)(e.source)}`);
            this.buffer.writeln();
        }
        e.functionTypeAliases.forEach(this.writeFunctionTypeAliasElement.bind(this));
        e.enums.forEach(this.writeClassElement.bind(this));
        e.types.forEach(this.writeClassElement.bind(this));
        e.topLevelVariables.forEach(this.writePropertyInducingElement.bind(this));
        e.accessors.forEach(this.writePropertyAccessorElement.bind(this));
        e.functions.forEach(this.writeFunctionElement.bind(this));
    }
    writeUri(e : any,source : any) : void {
        let uri : string = (e.uri || source.uri.toString());
        this.buffer.write(`'${uri}'`);
        if (this.withOffsets) {
            this.buffer.write('(');
            this.buffer.write(`${e.uriOffset}, `);
            this.buffer.write(`${e.uriEnd})`);
            this.buffer.write(')');
        }
    }
    writeVariableTypeInferenceError(e : any) : void {
        if (is(e, any)) {
            let inferenceError : any = e.typeInferenceError;
            if (inferenceError != null) {
                let kindName : string = inferenceError.kind.toString();
                if (new core.DartString(kindName).startsWith('TopLevelInferenceErrorKind.')) {
                    kindName = new core.DartString(kindName).substring(new core.DartString('TopLevelInferenceErrorKind.').length);
                }
                this.buffer.write(`/*error: ${kindName}*/`);
            }
        }
    }
    _getElementLocationString(element : any) : string {
        if (op(Op.EQUALS,element,null)) {
            return 'null';
        }
        var onlyName : (uri : string) => string = (uri : string) : string =>  {
            if (new core.DartString(uri).startsWith('file:///')) {
                return new core.DartString(uri).substring(new core.DartString(uri).lastIndexOf('/') + 1);
            }
            return uri;
        };
        let location : any = element.location;
        let components : core.DartList<string> = location.components.toList();
        if (components.length >= 1) {
            components[0] = onlyName(components[0]);
        }
        if (components.length >= 2) {
            components[1] = onlyName(components[1]);
            if (components[0] == components[1]) {
                components.removeAt(0);
            }
        }
        return components.join(';');
    }
}

export namespace _Replacement {
    export type Constructors = '_Replacement';
    export type Interface = Omit<_Replacement, Constructors>;
}
@DartClass
export class _Replacement {
    offset : number;

    end : number;

    text : string;

    constructor(offset : number,end : number,text : string) {
    }
    @defaultConstructor
    _Replacement(offset : number,end : number,text : string) {
        this.offset = offset;
        this.end = end;
        this.text = text;
    }
}

export class properties {
    private static __$_testPath : string;
    static get _testPath() : string { 
        if (this.__$_testPath===undefined) {
            this.__$_testPath = null;
        }
        return this.__$_testPath;
    }
    static set _testPath(__$value : string)  { 
        this.__$_testPath = __$value;
    }

    private static __$_replacements : core.DartList<_Replacement>;
    static get _replacements() : core.DartList<_Replacement> { 
        if (this.__$_replacements===undefined) {
            this.__$_replacements = new core.DartList.literal();
        }
        return this.__$_replacements;
    }
    static set _replacements(__$value : core.DartList<_Replacement>)  { 
        this.__$_replacements = __$value;
    }

    private static __$_testCode : string;
    static get _testCode() : string { 
        return this.__$_testCode;
    }
    static set _testCode(__$value : string)  { 
        this.__$_testCode = __$value;
    }

    private static __$_testCodeLines : any;
    static get _testCodeLines() : any { 
        return this.__$_testCodeLines;
    }
    static set _testCodeLines(__$value : any)  { 
        this.__$_testCodeLines = __$value;
    }

}
