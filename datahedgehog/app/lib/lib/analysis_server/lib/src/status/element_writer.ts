/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/status/element_writer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as convert from "@dart2ts/dart/convert";

export namespace ElementWriter {
    export type Constructors = 'ElementWriter';
    export type Interface = Omit<ElementWriter, Constructors>;
}
@DartClass
@With(any)
export class ElementWriter extends any implements any.Interface {
    constructor(buffer : core.DartStringBuffer) {
    }
    @defaultConstructor
    ElementWriter(buffer : core.DartStringBuffer) {
        this.buffer = buffer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) : void {
        this._writeElement(element);
        writeProperties(this._computeProperties(element));
        indentLevel++;
        try {
            element.visitChildren(this);
        } finally {
            indentLevel--;
        }
    }
    _computeProperties(element : any) : core.DartMap<string,core.DartObject> {
        let properties : core.DartMap<string,core.DartObject> = new core.DartHashMap<string,core.DartObject>();
        op(Op.INDEX_ASSIGN,properties,'metadata',element.metadata);
        op(Op.INDEX_ASSIGN,properties,'nameOffset',element.nameOffset);
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'hasNonFinalField',element.hasNonFinalField);
            op(Op.INDEX_ASSIGN,properties,'hasReferenceToSuper',element.hasReferenceToSuper);
            op(Op.INDEX_ASSIGN,properties,'hasStaticMember',element.hasStaticMember);
            op(Op.INDEX_ASSIGN,properties,'interfaces',element.interfaces);
            op(Op.INDEX_ASSIGN,properties,'isAbstract',element.isAbstract);
            op(Op.INDEX_ASSIGN,properties,'isEnum',element.isEnum);
            op(Op.INDEX_ASSIGN,properties,'isMixinApplication',element.isMixinApplication);
            op(Op.INDEX_ASSIGN,properties,'isOrInheritsProxy',element.isOrInheritsProxy);
            op(Op.INDEX_ASSIGN,properties,'isProxy',element.isProxy);
            op(Op.INDEX_ASSIGN,properties,'isValidMixin',element.isValidMixin);
            op(Op.INDEX_ASSIGN,properties,'mixins',element.mixins);
            op(Op.INDEX_ASSIGN,properties,'supertype',element.supertype);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'isStatic',element.isStatic);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'hasLoadLibraryFunction',element.hasLoadLibraryFunction);
            op(Op.INDEX_ASSIGN,properties,'source',element.source);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'evaluationResult',element.evaluationResult);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'evaluationResult',element.evaluationResult);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'evaluationResult',element.evaluationResult);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'isConst',element.isConst);
            op(Op.INDEX_ASSIGN,properties,'isDefaultConstructor',element.isDefaultConstructor);
            op(Op.INDEX_ASSIGN,properties,'isFactory',element.isFactory);
            op(Op.INDEX_ASSIGN,properties,'redirectedConstructor',element.redirectedConstructor);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'hasImplicitReturnType',element.hasImplicitReturnType);
            op(Op.INDEX_ASSIGN,properties,'isAbstract',element.isAbstract);
            op(Op.INDEX_ASSIGN,properties,'isAsynchronous',element.isAsynchronous);
            op(Op.INDEX_ASSIGN,properties,'isExternal',element.isExternal);
            op(Op.INDEX_ASSIGN,properties,'isGenerator',element.isGenerator);
            op(Op.INDEX_ASSIGN,properties,'isOperator',element.isOperator);
            op(Op.INDEX_ASSIGN,properties,'isStatic',element.isStatic);
            op(Op.INDEX_ASSIGN,properties,'isSynchronous',element.isSynchronous);
            op(Op.INDEX_ASSIGN,properties,'returnType',element.returnType);
            op(Op.INDEX_ASSIGN,properties,'type',element.type);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'combinators',element.combinators);
            op(Op.INDEX_ASSIGN,properties,'library',element.library);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'isEnumConstant',element.isEnumConstant);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'field',element.field);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'isEntryPoint',element.isEntryPoint);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'returnType',element.returnType);
            op(Op.INDEX_ASSIGN,properties,'type',element.type);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'combinators',element.combinators);
            op(Op.INDEX_ASSIGN,properties,'isDeferred',element.isDeferred);
            op(Op.INDEX_ASSIGN,properties,'library',element.library);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'definingCompilationUnit',element.definingCompilationUnit);
            op(Op.INDEX_ASSIGN,properties,'entryPoint',element.entryPoint);
            op(Op.INDEX_ASSIGN,properties,'hasExtUri',element.hasExtUri);
            op(Op.INDEX_ASSIGN,properties,'hasLoadLibraryFunction',element.hasLoadLibraryFunction);
            op(Op.INDEX_ASSIGN,properties,'isBrowserApplication',element.isBrowserApplication);
            op(Op.INDEX_ASSIGN,properties,'isDartAsync',element.isDartAsync);
            op(Op.INDEX_ASSIGN,properties,'isDartCore',element.isDartCore);
            op(Op.INDEX_ASSIGN,properties,'isInSdk',element.isInSdk);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'visibleRange',element.visibleRange);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'defaultValueCode',element.defaultValueCode);
            op(Op.INDEX_ASSIGN,properties,'isInitializingFormal',element.isInitializingFormal);
            op(Op.INDEX_ASSIGN,properties,'parameterKind',element.parameterKind);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'isGetter',element.isGetter);
            op(Op.INDEX_ASSIGN,properties,'isSetter',element.isSetter);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'isStatic',element.isStatic);
            op(Op.INDEX_ASSIGN,properties,'propagatedType',element.propagatedType);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'type',element.type);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'bound',element.bound);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'typeParameters',element.typeParameters);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'uri',element.uri);
        }
        if (is(element, any)) {
            op(Op.INDEX_ASSIGN,properties,'constantValue',element.constantValue);
            op(Op.INDEX_ASSIGN,properties,'hasImplicitType',element.hasImplicitType);
            op(Op.INDEX_ASSIGN,properties,'isConst',element.isConst);
            op(Op.INDEX_ASSIGN,properties,'isFinal',element.isFinal);
            op(Op.INDEX_ASSIGN,properties,'isStatic',element.isStatic);
            op(Op.INDEX_ASSIGN,properties,'type',element.type);
        }
        return properties;
    }
    _writeElement(element : any) : void {
        indent();
        if (element.isSynthetic) {
            buffer.write('<i>');
        }
        buffer.write(convert.properties.HTML_ESCAPE.convert(element.toString()));
        if (element.isSynthetic) {
            buffer.write('</i>');
        }
        buffer.write(' <span style="color:gray">(');
        buffer.write(element.runtimeType);
        buffer.write(')</span>');
        buffer.write('<br>');
    }
}

export class properties {
}
