/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/resynthesize_common.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../abstract_single_unit";
import * as lib4 from "./../../generated/test_support";
import * as lib5 from "./../context/abstract_context";
import * as lib6 from "./element_text";
import * as lib7 from "@dart2ts/dart/uri";

export namespace AbstractResynthesizeTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'AbstractResynthesizeTest';
    export type Interface = Omit<AbstractResynthesizeTest, Constructors>;
}
@DartClass
export class AbstractResynthesizeTest extends lib3.AbstractSingleUnitTest {
    otherLibrarySources : core.DartSet<any>;

    variablesWithNotConstInitializers : core.DartSet<string>;

    namesThatCannotBeResolved : core.DartSet<string>;

    allowMissingFiles : boolean;

    shouldCompareLibraryElements : boolean;

    @AbstractProperty
    get isStrongMode() : boolean{ throw 'abstract'}
    addLibrary(uri : string) : void {
        this.otherLibrarySources.add(this.context.sourceFactory.forUri(uri));
    }
    addLibrarySource(filePath : string,contents : string) : any {
        let source : any = this.addSource(filePath,contents);
        this.otherLibrarySources.add(source);
        return source;
    }
    assertNoErrors(source : any) : void {
        let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
        for(let error of this.context.computeErrors(source)) {
            expect(error.source,source);
            let errorCode : any = error.errorCode;
            if (op(Op.EQUALS,errorCode,HintCode.UNUSED_ELEMENT) || op(Op.EQUALS,errorCode,HintCode.UNUSED_FIELD)) {
                continue;
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_CLAUSE) || op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_STACK) || op(Op.EQUALS,errorCode,HintCode.UNUSED_LOCAL_VARIABLE)) {
                continue;
            }
            errorListener.onError(error);
        }
        errorListener.assertNoErrors();
    }
    checkElidablePrefix(prefix : any) : void {
        if (isNot(prefix.staticElement, any) && isNot(prefix.staticElement, any)) {
            fail(`Prefix of type ${prefix.staticElement.runtimeType}` + ' should not have been elided');
        }
    }
    checkLibraryElements(original : any,resynthesized : any) : void {
        this.compareElements(resynthesized,original,'(library)');
        expect(resynthesized.displayName,original.displayName);
        expect(original.enclosingElement,isNull);
        expect(resynthesized.enclosingElement,isNull);
        expect(resynthesized.hasExtUri,original.hasExtUri);
        this.compareCompilationUnitElements(resynthesized.definingCompilationUnit,original.definingCompilationUnit);
        expect(resynthesized.parts.length,original.parts.length,{
            reason : 'parts'});
        for(let i : number = 0; i < resynthesized.parts.length; i++){
            this.compareCompilationUnitElements(op(Op.INDEX,resynthesized.parts,i),op(Op.INDEX,original.parts,i));
        }
        expect(resynthesized.imports.length,original.imports.length,{
            reason : 'imports'});
        for(let i : number = 0; i < resynthesized.imports.length; i++){
            let originalImport : any = op(Op.INDEX,original.imports,i);
            this.compareImportElements(op(Op.INDEX,resynthesized.imports,i),originalImport,originalImport.toString());
        }
        expect(resynthesized.exports.length,original.exports.length,{
            reason : 'exports'});
        for(let i : number = 0; i < resynthesized.exports.length; i++){
            let originalExport : any = op(Op.INDEX,original.exports,i);
            this.compareExportElements(op(Op.INDEX,resynthesized.exports,i),originalExport,originalExport.toString());
        }
        expect(resynthesized.nameLength,original.nameLength);
        this.compareNamespaces(resynthesized.publicNamespace,original.publicNamespace,'(public namespace)');
        this.compareNamespaces(resynthesized.exportNamespace,original.exportNamespace,'(export namespace)');
        if (op(Op.EQUALS,original.entryPoint,null)) {
            expect(resynthesized.entryPoint,isNull);
        }else {
            expect(resynthesized.entryPoint,isNotNull);
            this.compareFunctionElements(resynthesized.entryPoint,original.entryPoint,'(entry point)');
        }
        if (original.name != 'dart.core' && original.name != 'dart.async') {
            this.compareExecutableElements(resynthesized.loadLibraryFunction as any,original.loadLibraryFunction as any,'(loadLibraryFunction)');
        }
        expect(resynthesized.libraryCycle.toSet(),original.libraryCycle.toSet());
    }
    checkMinimalResynthesisWork(resynthesizer : TestSummaryResynthesizer,library : any) : void {
        expect(resynthesizer.resynthesisCount,3);
        expect(resynthesizer.linkedSummariesRequested,hasLength(1));
        expect(resynthesizer.linkedSummariesRequested.first,library.source.uri.toString());
        let expectedCompilationUnitUris : core.DartSet<string> = library.units.map((unit : any) =>  {
            return unit.source.uri.toString();
        }).toSet();
        for(let requestedUri of resynthesizer.unlinkedSummariesRequested) {
            expect(expectedCompilationUnitUris,contains(requestedUri));
        }
    }
    checkPossibleLocalElements(resynthesized : any,original : any) : void {
        if (isNot(original, any) && isNot(resynthesized, any)) {
            return;
        }
        if (is(original, any) && is(resynthesized, any)) {
            expect(resynthesized.visibleRange,original.visibleRange);
        }else {
            fail('Incompatible local elements ' + `${resynthesized.runtimeType} vs. ${original.runtimeType}`);
        }
    }
    checkPossibleMember(resynthesized : any,original : any,desc : string) : void {
        let resynthesizedNonHandle : any = is(resynthesized, any) ? resynthesized.actualElement : resynthesized;
        if (is(original, any)) {
            expect(resynthesizedNonHandle,new bare.createInstance(any,null),{
                reason : desc});
            if (is(resynthesizedNonHandle, any)) {
                let resynthesizedTypeArguments : core.DartList<any> = resynthesizedNonHandle.definingType.typeArguments;
                let originalTypeArguments : core.DartList<any> = original.definingType.typeArguments;
                expect(resynthesizedTypeArguments,hasLength(originalTypeArguments.length),{
                    reason : desc});
                for(let i : number = 0; i < originalTypeArguments.length; i++){
                    this.compareTypeImpls(resynthesizedTypeArguments[i],originalTypeArguments[i],`${desc} type argument ${i}`);
                }
            }
        }else {
            expect(resynthesizedNonHandle,isNot(new bare.createInstance(any,null)),{
                reason : desc});
        }
    }
    compareClassElements(r : any,o : any,desc : string) : void {
        this.compareElements(r,o,desc);
        expect(r.fields.length,o.fields.length,{
            reason : `${desc} fields.length`});
        for(let i : number = 0; i < r.fields.length; i++){
            let name : string = op(Op.INDEX,o.fields,i).name;
            this.compareFieldElements(op(Op.INDEX,r.fields,i),op(Op.INDEX,o.fields,i),`${desc}.field ${name}`);
        }
        this.compareTypes(r.supertype,o.supertype,`${desc} supertype`);
        expect(r.interfaces.length,o.interfaces.length,{
            reason : `${desc} interfaces.length`});
        for(let i : number = 0; i < r.interfaces.length; i++){
            this.compareTypes(op(Op.INDEX,r.interfaces,i),op(Op.INDEX,o.interfaces,i),`${desc} interface ${op(Op.INDEX,o.interfaces,i).name}`);
        }
        expect(r.mixins.length,o.mixins.length,{
            reason : `${desc} mixins.length`});
        for(let i : number = 0; i < r.mixins.length; i++){
            this.compareTypes(op(Op.INDEX,r.mixins,i),op(Op.INDEX,o.mixins,i),`${desc} mixin ${op(Op.INDEX,o.mixins,i).name}`);
        }
        expect(r.typeParameters.length,o.typeParameters.length,{
            reason : `${desc} typeParameters.length`});
        for(let i : number = 0; i < r.typeParameters.length; i++){
            this.compareTypeParameterElements(op(Op.INDEX,r.typeParameters,i),op(Op.INDEX,o.typeParameters,i),`${desc} type parameter ${op(Op.INDEX,o.typeParameters,i).name}`);
        }
        expect(r.constructors.length,o.constructors.length,{
            reason : `${desc} constructors.length`});
        for(let i : number = 0; i < r.constructors.length; i++){
            this.compareConstructorElements(op(Op.INDEX,r.constructors,i),op(Op.INDEX,o.constructors,i),`${desc} constructor ${op(Op.INDEX,o.constructors,i).name}`);
        }
        expect(r.accessors.length,o.accessors.length,{
            reason : `${desc} accessors.length`});
        let rAccessors : core.DartList<any> = this._getSortedPropertyAccessors(r);
        let oAccessors : core.DartList<any> = this._getSortedPropertyAccessors(o);
        for(let i : number = 0; i < r.accessors.length; i++){
            this.comparePropertyAccessorElements(rAccessors[i],oAccessors[i],`${desc} accessor ${oAccessors[i].name}`);
        }
        expect(r.methods.length,o.methods.length,{
            reason : `${desc} methods.length`});
        for(let i : number = 0; i < r.methods.length; i++){
            this.compareMethodElements(op(Op.INDEX,r.methods,i),op(Op.INDEX,o.methods,i),`${desc}.${op(Op.INDEX,o.methods,i).name}`);
        }
        this.compareTypes(r.type,o.type,desc);
        if (is(r, any) && is(o, any)) {
            expect(r.hasBeenInferred,o.hasBeenInferred,{
                reason : desc});
        }
    }
    compareCompilationUnitElements(resynthesized : any,original : any) : void {
        let desc : string = `Compilation unit ${original.source.uri}`;
        this.compareUriReferencedElements(resynthesized,original,desc);
        expect(resynthesized.source,original.source);
        expect(resynthesized.librarySource,original.librarySource);
        this.compareLineInfo(resynthesized.lineInfo,original.lineInfo);
        expect(resynthesized.types.length,original.types.length,{
            reason : `${desc}.types.length`});
        for(let i : number = 0; i < resynthesized.types.length; i++){
            this.compareClassElements(op(Op.INDEX,resynthesized.types,i),op(Op.INDEX,original.types,i),op(Op.INDEX,original.types,i).name);
        }
        expect(resynthesized.topLevelVariables.length,original.topLevelVariables.length,{
            reason : `${desc}.topLevelVariables.length`});
        for(let i : number = 0; i < resynthesized.topLevelVariables.length; i++){
            let name : string = op(Op.INDEX,resynthesized.topLevelVariables,i).name;
            this.compareTopLevelVariableElements(op(Op.INDEX,resynthesized.topLevelVariables,i),original.topLevelVariables.singleWhere((e : any) =>  {
                return op(Op.EQUALS,e.name,name);
            }),`${desc}.topLevelVariables[${name}]`);
        }
        expect(resynthesized.functions.length,original.functions.length,{
            reason : `${desc}.functions.length`});
        for(let i : number = 0; i < resynthesized.functions.length; i++){
            this.compareFunctionElements(op(Op.INDEX,resynthesized.functions,i),op(Op.INDEX,original.functions,i),`${desc}.functions[${i}] /* ${op(Op.INDEX,original.functions,i).name} */`);
        }
        expect(resynthesized.functionTypeAliases.length,original.functionTypeAliases.length,{
            reason : `${desc}.functionTypeAliases.length`});
        for(let i : number = 0; i < resynthesized.functionTypeAliases.length; i++){
            this.compareFunctionTypeAliasElements(op(Op.INDEX,resynthesized.functionTypeAliases,i),op(Op.INDEX,original.functionTypeAliases,i),op(Op.INDEX,original.functionTypeAliases,i).name);
        }
        expect(resynthesized.enums.length,original.enums.length,{
            reason : `${desc}.enums.length`});
        for(let i : number = 0; i < resynthesized.enums.length; i++){
            this.compareClassElements(op(Op.INDEX,resynthesized.enums,i),op(Op.INDEX,original.enums,i),op(Op.INDEX,original.enums,i).name);
        }
        expect(resynthesized.accessors.length,original.accessors.length,{
            reason : `${desc}.accessors.length`});
        for(let i : number = 0; i < resynthesized.accessors.length; i++){
            let name : string = op(Op.INDEX,resynthesized.accessors,i).name;
            if (op(Op.INDEX,original.accessors,i).isGetter) {
                this.comparePropertyAccessorElements(op(Op.INDEX,resynthesized.accessors,i),original.accessors.singleWhere((e : any) =>  {
                    return op(Op.EQUALS,e.name,name);
                }),`${desc}.accessors[${i}] /* getter ${name} */`);
            }else {
                this.comparePropertyAccessorElements(op(Op.INDEX,resynthesized.accessors,i),original.accessors.singleWhere((e : any) =>  {
                    return op(Op.EQUALS,e.name,name);
                }),`${desc}.accessors[${i}] /* setter ${name} */`);
            }
        }
    }
    compareConstAstLists(rItems : core.DartList<core.DartObject>,oItems : core.DartList<core.DartObject>,desc : string) : void {
        if (rItems == null && oItems == null) {
            return;
        }
        expect(rItems != null && oItems != null,isTrue);
        expect(rItems,hasLength(oItems.length));
        for(let i : number = 0; i < oItems.length; i++){
            let rItem : core.DartObject = rItems[i];
            let oItem : core.DartObject = oItems[i];
            if (is(rItem, any) && is(oItem, any)) {
                this.compareConstAsts(rItem,oItem,desc);
            }else if (is(rItem, any) && is(oItem, any)) {
                this.compareConstAsts(rItem.name,oItem.name,desc);
            }else if (is(rItem, any) && is(oItem, any)) {
                expect(rItem.value,oItem.value);
            }else if (is(rItem, any) && is(oItem, any)) {
                this.compareConstAsts(rItem.expression,oItem.expression,desc);
            }else if (is(rItem, any) && is(oItem, any)) {
                this.compareConstAsts(rItem.key,oItem.key,desc);
                this.compareConstAsts(rItem.value,oItem.value,desc);
            }else if (is(oItem, any) && is(rItem, any)) {
                this.compareConstAsts(rItem.fieldName,oItem.fieldName,desc);
                if (this.variablesWithNotConstInitializers.contains(rItem.fieldName.name)) {
                    this._assertUnresolvedIdentifier(rItem.expression,desc);
                }else {
                    this.compareConstAsts(rItem.expression,oItem.expression,desc);
                }
            }else if (is(oItem, any) && is(rItem, any)) {
                this.compareConstAsts(rItem.condition,oItem.condition,`${desc} condition`);
                this.compareConstAsts(rItem.message,oItem.message,`${desc} message`);
            }else if (is(oItem, any) && is(rItem, any)) {
                this.compareElements(rItem.staticElement,oItem.staticElement,desc);
                this.compareConstAsts(rItem.constructorName,oItem.constructorName,desc);
                this.compareConstAstLists(rItem.argumentList.arguments,oItem.argumentList.arguments,desc);
            }else if (is(oItem, any) && is(rItem, any)) {
                this.compareElements(rItem.staticElement,oItem.staticElement,desc);
                this.compareConstAsts(rItem.constructorName,oItem.constructorName,desc);
                this.compareConstAstLists(rItem.argumentList.arguments,oItem.argumentList.arguments,desc);
            }else {
                fail(`${desc} Incompatible item types: ` + `${rItem.runtimeType} vs. ${oItem.runtimeType}`);
            }
        }
    }
    compareConstAsts(r : any,o : any,desc : string) : void {
        if (op(Op.EQUALS,o,null)) {
            expect(r,isNull,{
                reason : desc});
        }else {
            expect(r,isNotNull,{
                reason : desc});
            if (is(o, any)) {
                this.compareConstAsts(r,o.expression,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(r.name,o.name,{
                    reason : desc});
                if (this.namesThatCannotBeResolved.contains(r.name)) {
                    expect(r.staticElement,isNull);
                }else {
                    this.compareElements(r.staticElement,o.staticElement,desc);
                }
            }else if (is(o, any) && is(r, any)) {
                if (is(o.prefix.staticElement, any) || is(o.prefix.staticElement, any)) {
                    this.compareConstAsts(r,o.identifier,desc);
                }else {
                    fail(`Prefix of type ${o.prefix.staticElement.runtimeType} should not` + ' have been elided');
                }
            }else if (is(o, any) && is(r, any)) {
                if (is(r.prefix.staticElement, any)) {
                    let oElement : any = resolutionMap.staticElementForIdentifier(o);
                    this.compareElements(r.prefix.staticElement,((t)=>(!!t)?t.enclosingElement:null)(oElement),desc);
                    this.compareConstAsts(r.identifier,o,desc);
                }else {
                    fail(`Prefix of type ${r.prefix.staticElement.runtimeType} should not` + ' have been elided');
                }
            }else if (is(o, any) && is(o.target, any) && is(r, any)) {
                let oTarget : any = o.target;
                this.checkElidablePrefix(oTarget.prefix);
                this.compareConstAsts(r,AstTestFactory.identifier(oTarget.identifier,o.propertyName),desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAsts(r.prefix,o.prefix,desc);
                this.compareConstAsts(r.identifier,o.identifier,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAsts(r.target,o.target,desc);
                let oName : string = o.propertyName.name;
                let rName : string = r.propertyName.name;
                expect(rName,oName,{
                    reason : desc});
                if (oName == 'length') {
                    this.compareElements(r.propertyName.staticElement,o.propertyName.staticElement,desc);
                }
            }else if (is(o, any) && is(o.target, any) && is(r, any)) {
                let oTarget : any = o.target;
                this.checkElidablePrefix(oTarget.prefix);
                this.checkElidablePrefix(oTarget.identifier);
                this.compareConstAsts(r,o.propertyName,desc);
            }else if (is(o, any) && is(r, any)) {
            }else if (is(o, any) && is(r, any)) {
            }else if (is(o, any)) {
                expect(r,new bare.createInstance(any,null),{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                expect(r.value,o.value,{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                expect(r.value,o.value,{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                if (r.value != null && r.value.isNaN && o.value != null && o.value.isNaN) {
                }else {
                    expect(r.value,o.value,{
                        reason : desc});
                }
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAstLists(r.elements,o.elements,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(r.stringValue,o.stringValue,{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                expect(r.components.map((t : any) =>  {
                    return t.lexeme;
                }).join('.'),o.components.map((t : any) =>  {
                    return t.lexeme;
                }).join('.'),{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                expect(r.name.label.name,o.name.label.name,{
                    reason : desc});
                this.compareConstAsts(r.expression,o.expression,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(r.operator.lexeme,o.operator.lexeme,{
                    reason : desc});
                this.compareConstAsts(r.leftOperand,o.leftOperand,desc);
                this.compareConstAsts(r.rightOperand,o.rightOperand,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(r.operator.lexeme,o.operator.lexeme,{
                    reason : desc});
                this.compareConstAsts(r.operand,o.operand,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAsts(r.condition,o.condition,desc);
                this.compareConstAsts(r.thenExpression,o.thenExpression,desc);
                this.compareConstAsts(r.elseExpression,o.elseExpression,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.typeArguments),((t)=>(!!t)?t.arguments:null)(o.typeArguments),desc);
                this.compareConstAstLists(r.elements,o.elements,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.typeArguments),((t)=>(!!t)?t.arguments:null)(o.typeArguments),desc);
                this.compareConstAstLists(r.entries,o.entries,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAsts(r.target,o.target,desc);
                this.compareConstAsts(r.methodName,o.methodName,desc);
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.typeArguments),((t)=>(!!t)?t.arguments:null)(o.typeArguments),desc);
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.argumentList),((t)=>(!!t)?t.arguments:null)(o.argumentList),desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareElements(r.staticElement,o.staticElement,desc);
                let oConstructor : any = o.constructorName;
                let rConstructor : any = r.constructorName;
                expect(oConstructor,isNotNull,{
                    reason : desc});
                expect(rConstructor,isNotNull,{
                    reason : desc});
                this.compareElements(rConstructor.staticElement,oConstructor.staticElement,desc);
                let oType : any = oConstructor.type;
                let rType : any = rConstructor.type;
                expect(oType,isNotNull,{
                    reason : desc});
                expect(rType,isNotNull,{
                    reason : desc});
                this.compareConstAsts(rType.name,oType.name,desc);
                this.compareConstAsts(rConstructor.name,oConstructor.name,desc);
                if ((((t)=>(!!t)?t.isNotEmpty:null)(((t)=>(!!t)?t.arguments:null)(oType.typeArguments)) || false)) {
                    this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(rType.typeArguments),((t)=>(!!t)?t.arguments:null)(oType.typeArguments),desc);
                }
                this.compareConstAstLists(r.argumentList.arguments,o.argumentList.arguments,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(o.atSign.lexeme,r.atSign.lexeme,{
                    reason : desc});
                let rName : any = r.name;
                let oName : any = o.name;
                if (is(oName, any) && is(rName, any) && o.constructorName != null && o.element != null && op(Op.EQUALS,r.constructorName,null)) {
                    this.compareConstAsts(rName.prefix,oName.identifier,desc);
                    expect(rName.period.lexeme,'.',{
                        reason : desc});
                    this.compareConstAsts(rName.identifier,o.constructorName,desc);
                    expect(r.period,isNull,{
                        reason : desc});
                    expect(r.constructorName,isNull,{
                        reason : desc});
                }else {
                    this.compareConstAsts(r.name,o.name,desc);
                    expect(((t)=>(!!t)?t.lexeme:null)(r.period),((t)=>(!!t)?t.lexeme:null)(o.period),{
                        reason : desc});
                    this.compareConstAsts(r.constructorName,o.constructorName,desc);
                }
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.arguments),((t)=>(!!t)?t.arguments:null)(o.arguments),desc);
                this.compareElements(r.element,o.element,desc);
                expect(o.elementAnnotation,isNull);
                expect(r.elementAnnotation,isNull);
            }else {
                fail(`Not implemented for ${r.runtimeType} vs. ${o.runtimeType}`);
            }
        }
    }
    compareConstructorElements(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,original,null) && op(Op.EQUALS,resynthesized,null)) {
            return;
        }
        this.compareExecutableElements(resynthesized,original,desc);
        let resynthesizedImpl : any = this.getActualElement(resynthesized,desc);
        let originalImpl : any = this.getActualElement(original,desc);
        if (original.isConst) {
            this.compareConstAstLists(resynthesizedImpl.constantInitializers,originalImpl.constantInitializers,desc);
        }
        if (op(Op.EQUALS,original.redirectedConstructor,null)) {
            expect(resynthesized.redirectedConstructor,isNull,{
                reason : desc});
        }else {
            this.compareConstructorElements(resynthesized.redirectedConstructor,original.redirectedConstructor,`${desc} redirectedConstructor`);
        }
        this.checkPossibleMember(resynthesized,original,desc);
        expect(resynthesized.nameEnd,original.nameEnd,{
            reason : desc});
        expect(resynthesized.periodOffset,original.periodOffset,{
            reason : desc});
        expect(resynthesizedImpl.isCycleFree,originalImpl.isCycleFree,{
            reason : desc});
    }
    compareConstValues(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,original,null)) {
            expect(resynthesized,isNull,{
                reason : desc});
        }else {
            expect(resynthesized,isNotNull,{
                reason : desc});
            this.compareTypes(resynthesized.type,original.type,desc);
            expect(resynthesized.hasKnownValue,original.hasKnownValue,{
                reason : desc});
            if (original.isNull) {
                expect(resynthesized.isNull,isTrue,{
                    reason : desc});
            }else if (original.toBoolValue() != null) {
                expect(resynthesized.toBoolValue(),original.toBoolValue(),{
                    reason : desc});
            }else if (original.toIntValue() != null) {
                expect(resynthesized.toIntValue(),original.toIntValue(),{
                    reason : desc});
            }else if (original.toDoubleValue() != null) {
                expect(resynthesized.toDoubleValue(),original.toDoubleValue(),{
                    reason : desc});
            }else if (original.toListValue() != null) {
                let resynthesizedList : core.DartList<any> = resynthesized.toListValue();
                let originalList : core.DartList<any> = original.toListValue();
                expect(resynthesizedList,hasLength(originalList.length));
                for(let i : number = 0; i < originalList.length; i++){
                    this.compareConstValues(resynthesizedList[i],originalList[i],desc);
                }
            }else if (original.toMapValue() != null) {
                let resynthesizedMap : core.DartMap<any,any> = resynthesized.toMapValue();
                let originalMap : core.DartMap<any,any> = original.toMapValue();
                expect(resynthesizedMap,hasLength(originalMap.length));
                let resynthesizedKeys : core.DartList<any> = resynthesizedMap.keys.toList();
                let originalKeys : core.DartList<any> = originalMap.keys.toList();
                for(let i : number = 0; i < originalKeys.length; i++){
                    let resynthesizedKey : any = resynthesizedKeys[i];
                    let originalKey : any = originalKeys[i];
                    this.compareConstValues(resynthesizedKey,originalKey,desc);
                    let resynthesizedValue : any = resynthesizedMap.get(resynthesizedKey);
                    let originalValue : any = originalMap.get(originalKey);
                    this.compareConstValues(resynthesizedValue,originalValue,desc);
                }
            }else if (original.toStringValue() != null) {
                expect(resynthesized.toStringValue(),original.toStringValue(),{
                    reason : desc});
            }else if (original.toSymbolValue() != null) {
                expect(resynthesized.toSymbolValue(),original.toSymbolValue(),{
                    reason : desc});
            }else if (original.toTypeValue() != null) {
                fail('Not implemented');
            }
        }
    }
    compareElementAnnotations(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,original.element,null)) {
            expect(resynthesized.element,isNull);
        }else {
            expect(resynthesized.element,isNotNull,{
                reason : desc});
            expect(resynthesized.element.kind,original.element.kind,{
                reason : desc});
            expect(resynthesized.element.location,original.element.location,{
                reason : desc});
        }
        expect(resynthesized.compilationUnit,isNotNull,{
            reason : desc});
        expect(resynthesized.compilationUnit.location,original.compilationUnit.location,{
            reason : desc});
        expect(resynthesized.annotationAst,isNotNull,{
            reason : desc});
        this.compareConstAsts(resynthesized.annotationAst,original.annotationAst,desc);
    }
    compareElements(resynthesized : any,original : any,desc : string) : void {
        let rImpl : any = this.getActualElement(resynthesized,desc);
        let oImpl : any = this.getActualElement(original,desc);
        if (op(Op.EQUALS,oImpl,null) && op(Op.EQUALS,rImpl,null)) {
            return;
        }
        if (is(oImpl, any)) {
            return;
        }
        expect(original,isNotNull);
        expect(resynthesized,isNotNull,{
            reason : desc});
        if (is(rImpl, any) && is(oImpl, any)) {
            expect(rImpl.evaluationResult,isNull);
        }else {
            let rRuntimeType : core.Type;
            if (is(rImpl, any)) {
                rRuntimeType = ConstFieldElementImpl;
            }else if (is(rImpl, any)) {
                rRuntimeType = FunctionElementImpl;
            }else {
                rRuntimeType = rImpl.runtimeType;
            }
            expect(rRuntimeType,oImpl.runtimeType);
        }
        expect(resynthesized.kind,original.kind);
        expect(resynthesized.location,original.location,{
            reason : desc});
        expect(resynthesized.name,original.name);
        expect(resynthesized.nameOffset,original.nameOffset,{
            reason : `${desc}.nameOffset`});
        expect(rImpl.codeOffset,oImpl.codeOffset,{
            reason : desc});
        expect(rImpl.codeLength,oImpl.codeLength,{
            reason : desc});
        expect(resynthesized.documentationComment,original.documentationComment,{
            reason : desc});
        this.compareMetadata(resynthesized.metadata,original.metadata,desc);
        for(let modifier of Modifier.values) {
            let got : boolean = this._hasModifier(resynthesized,modifier);
            let want : boolean = this._hasModifier(original,modifier);
            expect(got,want,{
                reason : `Mismatch in ${desc}.${modifier}: got ${got}, want ${want}`});
        }
        if (is(oImpl, any)) {
            expect(rImpl,new bare.createInstance(any,null),{
                reason : desc});
        }else {
            expect(rImpl,isNot(new bare.createInstance(any,null)),{
                reason : desc});
        }
    }
    compareExecutableElements(resynthesized : any,original : any,desc : string,_namedArguments? : {shallow? : boolean}) : void {
        let {shallow} = Object.assign({
            "shallow" : false}, _namedArguments );
        this.compareElements(resynthesized,original,desc);
        this.compareParameterElementLists(resynthesized.parameters,original.parameters,desc);
        if (!original.hasImplicitReturnType) {
            this.compareTypes(resynthesized.returnType,original.returnType,`${desc} return type`);
        }
        if (!shallow) {
            this.compareTypes(resynthesized.type,original.type,desc);
        }
        expect(resynthesized.typeParameters.length,original.typeParameters.length);
        for(let i : number = 0; i < resynthesized.typeParameters.length; i++){
            this.compareTypeParameterElements(op(Op.INDEX,resynthesized.typeParameters,i),op(Op.INDEX,original.typeParameters,i),`${desc} type parameter ${op(Op.INDEX,original.typeParameters,i).name}`);
        }
        this.compareLocalElementsOfExecutable(resynthesized,original,desc);
    }
    compareExportElements(resynthesized : any,original : any,desc : string) : void {
        this.compareUriReferencedElements(resynthesized,original,desc);
        expect(resynthesized.exportedLibrary.location,original.exportedLibrary.location);
        expect(resynthesized.combinators.length,original.combinators.length);
        for(let i : number = 0; i < resynthesized.combinators.length; i++){
            this.compareNamespaceCombinators(op(Op.INDEX,resynthesized.combinators,i),op(Op.INDEX,original.combinators,i));
        }
    }
    compareFieldElements(resynthesized : any,original : any,desc : string) : void {
        this.comparePropertyInducingElements(resynthesized,original,desc);
    }
    compareFunctionElements(resynthesized : any,original : any,desc : string,_namedArguments? : {shallow? : boolean}) : void {
        let {shallow} = Object.assign({
            "shallow" : false}, _namedArguments );
        if (op(Op.EQUALS,original,null) && op(Op.EQUALS,resynthesized,null)) {
            return;
        }
        expect(resynthesized,isNotNull,{
            reason : desc});
        this.compareExecutableElements(resynthesized,original,desc,{
            shallow : shallow});
        this.checkPossibleLocalElements(resynthesized,original);
    }
    compareFunctionTypeAliasElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
        let rImpl : any = this.getActualElement(resynthesized,desc);
        let oImpl : any = this.getActualElement(original,desc);
        if (is(rImpl, any)) {
            if (is(oImpl, any)) {
                this.compareParameterElementLists(rImpl.parameters,oImpl.parameters,`${desc}.parameters`);
                this.compareTypes(rImpl.returnType,oImpl.returnType,`${desc}.returnType`);
            }else {
                fail(`Resynthesized a FunctionTypeAliasElementImpl, but expected a ${oImpl.runtimeType}`);
            }
        }else if (is(rImpl, any)) {
            if (is(oImpl, any)) {
                this.compareGenericFunctionTypeElements(rImpl.function,oImpl.function,`${desc}.function`);
            }else {
                fail(`Resynthesized a GenericTypeAliasElementImpl, but expected a ${oImpl.runtimeType}`);
            }
        }else {
            fail(`Resynthesized a ${rImpl.runtimeType}`);
        }
        this.compareTypes(resynthesized.type,original.type,desc);
        expect(resynthesized.typeParameters.length,original.typeParameters.length);
        for(let i : number = 0; i < resynthesized.typeParameters.length; i++){
            this.compareTypeParameterElements(op(Op.INDEX,resynthesized.typeParameters,i),op(Op.INDEX,original.typeParameters,i),`${desc}.typeParameters[${i}] /* ${op(Op.INDEX,original.typeParameters,i).name} */`);
        }
    }
    compareGenericFunctionTypeElements(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,resynthesized,null)) {
            if (original != null) {
                fail('Failed to resynthesize generic function type');
            }
        }else if (op(Op.EQUALS,original,null)) {
            fail('Resynthesizes a generic function type when none expected');
        }
        this.compareTypeParameterElementLists(resynthesized.typeParameters,original.typeParameters,`${desc}.typeParameters`);
        this.compareParameterElementLists(resynthesized.parameters,original.parameters,`${desc}.parameters`);
        this.compareTypes(resynthesized.returnType,original.returnType,`${desc}.returnType`);
    }
    compareImportElements(resynthesized : any,original : any,desc : string) : void {
        this.compareUriReferencedElements(resynthesized,original,desc);
        expect(resynthesized.importedLibrary.location,original.importedLibrary.location,{
            reason : `${desc} importedLibrary location`});
        expect(resynthesized.prefixOffset,original.prefixOffset,{
            reason : `${desc} prefixOffset`});
        if (op(Op.EQUALS,original.prefix,null)) {
            expect(resynthesized.prefix,isNull,{
                reason : `${desc} prefix`});
        }else {
            this.comparePrefixElements(resynthesized.prefix,original.prefix,original.prefix.name);
        }
        expect(resynthesized.combinators.length,original.combinators.length,{
            reason : `${desc} combinators`});
        for(let i : number = 0; i < resynthesized.combinators.length; i++){
            this.compareNamespaceCombinators(op(Op.INDEX,resynthesized.combinators,i),op(Op.INDEX,original.combinators,i));
        }
    }
    compareLabelElements(resynthesized : any,original : any,desc : string) : void {
        expect(resynthesized.isOnSwitchMember,original.isOnSwitchMember,{
            reason : desc});
        expect(resynthesized.isOnSwitchStatement,original.isOnSwitchStatement,{
            reason : desc});
        this.compareElements(resynthesized,original,desc);
    }
    compareLineInfo(resynthesized : any,original : any) : void {
        expect(resynthesized.lineCount,original.lineCount);
        expect(resynthesized.lineStarts,original.lineStarts);
    }
    compareLocalElementsOfExecutable(resynthesized : any,original : any,desc : string) : void {
        if (isNot(original, any)) {
            let rFunctions : core.DartList<any> = resynthesized.functions;
            let oFunctions : core.DartList<any> = original.functions;
            expect(rFunctions,hasLength(oFunctions.length));
            for(let i : number = 0; i < oFunctions.length; i++){
                this.compareFunctionElements(rFunctions[i],oFunctions[i],`${desc} local function ${oFunctions[i].name}`);
            }
        }
        if (isNot(original, any)) {
            let rLabels : core.DartList<any> = resynthesized.labels;
            let oLabels : core.DartList<any> = original.labels;
            expect(rLabels,hasLength(oLabels.length));
            for(let i : number = 0; i < oLabels.length; i++){
                this.compareLabelElements(rLabels[i],oLabels[i],`${desc} label ${oLabels[i].name}`);
            }
        }
        if (isNot(original, any)) {
            let rVariables : core.DartList<any> = resynthesized.localVariables;
            let oVariables : core.DartList<any> = original.localVariables;
            expect(rVariables,hasLength(oVariables.length));
            for(let i : number = 0; i < oVariables.length; i++){
                this.compareVariableElements(rVariables[i],oVariables[i],`${desc} local variable ${oVariables[i].name}`);
            }
        }
    }
    compareMetadata(resynthesized : core.DartList<any>,original : core.DartList<any>,desc : string) : void {
        expect(resynthesized,hasLength(original.length),{
            reason : desc});
        for(let i : number = 0; i < original.length; i++){
            this.compareElementAnnotations(resynthesized[i],original[i],`${desc} annotation ${i}`);
        }
    }
    compareMethodElements(resynthesized : any,original : any,desc : string) : void {
        this.compareExecutableElements(resynthesized,original,desc);
    }
    compareNamespaceCombinators(resynthesized : any,original : any) : void {
        if (is(original, any) && is(resynthesized, any)) {
            expect(resynthesized.shownNames,original.shownNames,{
                reason : 'shownNames'});
            expect(resynthesized.offset,original.offset,{
                reason : 'offset'});
            expect(resynthesized.end,original.end,{
                reason : 'end'});
        }else if (is(original, any) && is(resynthesized, any)) {
            expect(resynthesized.hiddenNames,original.hiddenNames,{
                reason : 'hiddenNames'});
        }else if (resynthesized.runtimeType != original.runtimeType) {
            fail(`Type mismatch: expected ${original.runtimeType}, got ${resynthesized.runtimeType}`);
        }else {
            fail(`Unimplemented comparison for ${original.runtimeType}`);
        }
    }
    compareNamespaces(resynthesized : any,original : any,desc : string) : void {
        let resynthesizedMap : core.DartMap<string,any> = resynthesized.definedNames;
        let originalMap : core.DartMap<string,any> = original.definedNames;
        expect(resynthesizedMap.keys.toSet(),originalMap.keys.toSet(),{
            reason : desc});
        for(let key of originalMap.keys) {
            let resynthesizedElement : any = resynthesizedMap.get(key);
            let originalElement : any = originalMap.get(key);
            this.compareElements(resynthesizedElement,originalElement,key);
        }
    }
    compareParameterElementLists(resynthesizedParameters : core.DartList<any>,originalParameters : core.DartList<any>,desc : string) : void {
        expect(resynthesizedParameters.length,originalParameters.length);
        for(let i : number = 0; i < resynthesizedParameters.length; i++){
            this.compareParameterElements(resynthesizedParameters[i],originalParameters[i],`${desc}.parameters[${i}] /* ${originalParameters[i].name} */`);
        }
    }
    compareParameterElements(resynthesized : any,original : any,desc : string) : void {
        this.compareVariableElements(resynthesized,original,desc);
        this.compareParameterElementLists(resynthesized.parameters,original.parameters,desc);
        expect(resynthesized.parameterKind,original.parameterKind,{
            reason : desc});
        expect(resynthesized.isInitializingFormal,original.isInitializingFormal,{
            reason : desc});
        expect(is(resynthesized, any),is(original, any));
        if (is(resynthesized, any) && is(original, any)) {
            if (op(Op.EQUALS,original.field,null)) {
                expect(resynthesized.field,isNull,{
                    reason : `${desc} field`});
            }else {
                expect(resynthesized.field,isNotNull,{
                    reason : `${desc} field`});
                this.compareFieldElements(resynthesized.field,original.field,`${desc} field`);
            }
        }
        expect(resynthesized.defaultValueCode,original.defaultValueCode,{
            reason : desc});
        expect(resynthesized.isCovariant,original.isCovariant,{
            reason : `${desc} isCovariant`});
        let resynthesizedActual : any = this.getActualElement(resynthesized,desc);
        let originalActual : any = this.getActualElement(original,desc);
        expect(resynthesizedActual.isExplicitlyCovariant,originalActual.isExplicitlyCovariant,{
            reason : desc});
        this.compareFunctionElements(resynthesizedActual.initializer,originalActual.initializer,desc);
    }
    comparePrefixElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
    }
    comparePropertyAccessorElements(resynthesized : any,original : any,desc : string) : void {
        this.compareExecutableElements(resynthesized,original,desc);
        expect(resynthesized.variable,isNotNull);
        expect(resynthesized.variable.location,original.variable.location);
    }
    comparePropertyInducingElements(resynthesized : any,original : any,desc : string) : void {
        this.compareVariableElements(resynthesized,original,desc);
        if (op(Op.EQUALS,original.getter,null)) {
            expect(resynthesized.getter,isNull);
        }else {
            expect(resynthesized.getter,isNotNull);
            expect(resynthesized.getter.location,original.getter.location);
        }
        if (op(Op.EQUALS,original.setter,null)) {
            expect(resynthesized.setter,isNull);
        }else {
            expect(resynthesized.setter,isNotNull);
            expect(resynthesized.setter.location,original.setter.location);
        }
    }
    compareTopLevelVariableElements(resynthesized : any,original : any,desc : string) : void {
        this.comparePropertyInducingElements(resynthesized,original,desc);
    }
    compareTypeImpls(resynthesized : any,original : any,desc : string) : void {
        expect(resynthesized.element.location,original.element.location,{
            reason : `${desc}.element.location`});
        expect(resynthesized.name,original.name,{
            reason : `${desc}.name`});
    }
    compareTypeParameterElementLists(resynthesized : core.DartList<any>,original : core.DartList<any>,desc : string) : void {
        let length : number = original.length;
        expect(resynthesized.length,length,{
            reason : `${desc}.length`});
        for(let i : number = 0; i < length; i++){
            this.compareTypeParameterElements(resynthesized[i],original[i],`${desc}[${i}]`);
        }
    }
    compareTypeParameterElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
        this.compareTypes(resynthesized.type,original.type,`${desc}.type`);
        this.compareTypes(resynthesized.bound,original.bound,`${desc}.bound`);
    }
    compareTypes(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,original,null)) {
            expect(resynthesized,isNull,{
                reason : desc});
        }else if (is(resynthesized, any) && is(original, any)) {
            this.compareTypeImpls(resynthesized,original,desc);
            expect(resynthesized.typeArguments.length,original.typeArguments.length,{
                reason : `${desc}.typeArguments.length`});
            for(let i : number = 0; i < resynthesized.typeArguments.length; i++){
                this.compareTypes(op(Op.INDEX,resynthesized.typeArguments,i),op(Op.INDEX,original.typeArguments,i),`${desc}.typeArguments[${i}] /* ${op(Op.INDEX,original.typeArguments,i).name} */`);
            }
        }else if (is(resynthesized, any) && is(original, any)) {
            this.compareTypeImpls(resynthesized,original,desc);
        }else if (is(resynthesized, any) && is(original, any)) {
            expect(resynthesized,same(original));
        }else if (is(resynthesized, any) && is(original, any)) {
            expect(resynthesized,same(original));
        }else if (is(resynthesized, any) && is(original, any)) {
            this.compareTypeImpls(resynthesized,original,desc);
            expect(resynthesized.isInstantiated,original.isInstantiated,{
                reason : desc});
            if (original.element.isSynthetic && is(original.element, any) && is(resynthesized.element, any)) {
                this.compareFunctionTypeAliasElements(resynthesized.element,original.element,desc);
            }
            if (op(Op.EQUALS,original.element.enclosingElement,null) && is(original.element, any)) {
                expect(resynthesized.element,new bare.createInstance(any,null));
                expect(resynthesized.element.enclosingElement,isNull,{
                    reason : desc});
                this.compareFunctionElements(resynthesized.element,original.element,`${desc}.element`,{
                    shallow : true});
                expect(resynthesized.element.type,same(resynthesized));
            }
            expect(resynthesized.typeArguments.length,original.typeArguments.length,{
                reason : `${desc}.typeArguments.length`});
            for(let i : number = 0; i < resynthesized.typeArguments.length; i++){
                if (op(Op.INDEX,resynthesized.typeArguments,i).isDynamic && is(op(Op.INDEX,original.typeArguments,i), any)) {
                    expect(this.isTypeParameterUsed(op(Op.INDEX,original.typeArguments,i),original.element.type),isFalse);
                }else {
                    this.compareTypes(op(Op.INDEX,resynthesized.typeArguments,i),op(Op.INDEX,original.typeArguments,i),`${desc}.typeArguments[${i}] /* ${op(Op.INDEX,original.typeArguments,i).name} */`);
                }
            }
            if (op(Op.EQUALS,original.typeParameters,null)) {
                expect(resynthesized.typeParameters,isNull,{
                    reason : desc});
            }else {
                expect(resynthesized.typeParameters,isNotNull,{
                    reason : desc});
                expect(resynthesized.typeParameters.length,original.typeParameters.length,{
                    reason : desc});
                for(let i : number = 0; i < resynthesized.typeParameters.length; i++){
                    this.compareTypeParameterElements(op(Op.INDEX,resynthesized.typeParameters,i),op(Op.INDEX,original.typeParameters,i),`${desc}.typeParameters[${i}]`);
                }
            }
            expect(resynthesized.typeFormals.length,original.typeFormals.length,{
                reason : desc});
            for(let i : number = 0; i < resynthesized.typeFormals.length; i++){
                this.compareTypeParameterElements(op(Op.INDEX,resynthesized.typeFormals,i),op(Op.INDEX,original.typeFormals,i),`${desc}.typeFormals[${i}]`);
            }
        }else if (is(resynthesized, any) && is(original, any)) {
            expect(resynthesized,same(original));
        }else if (is(resynthesized, any) && is(original, any)) {
        }else if (is(resynthesized, any) && is(original, any)) {
            expect(resynthesized,same(original));
        }else if (resynthesized.runtimeType != original.runtimeType) {
            fail(`Type mismatch: expected ${original.runtimeType},` + ` got ${resynthesized.runtimeType} (${desc})`);
        }else {
            fail(`Unimplemented comparison for ${original.runtimeType}`);
        }
    }
    compareUriReferencedElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
        expect(resynthesized.uri,original.uri,{
            reason : `${desc}.uri`});
        expect(resynthesized.uriOffset,original.uriOffset,{
            reason : `${desc}.uriOffset`});
        expect(resynthesized.uriEnd,original.uriEnd,{
            reason : `${desc}.uriEnd`});
    }
    compareVariableElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
        this.compareTypes(resynthesized.type,original.type,`${desc}.type`);
        let resynthesizedActual : any = this.getActualElement(resynthesized,desc);
        let originalActual : any = this.getActualElement(original,desc);
        this.compareFunctionElements(resynthesizedActual.initializer,originalActual.initializer,`${desc}.initializer`);
        if (is(originalActual, any)) {
            let oEnclosing : any = original.enclosingElement;
            if (is(oEnclosing, any) && oEnclosing.isEnum) {
                this.compareConstValues(resynthesized.constantValue,original.constantValue,`${desc}.constantValue`);
            }else {
                let initializer : any = resynthesizedActual.constantInitializer;
                if (this.variablesWithNotConstInitializers.contains(resynthesized.name)) {
                    this._assertUnresolvedIdentifier(initializer,desc);
                }else {
                    this.compareConstAsts(initializer,originalActual.constantInitializer,`${desc}.constantInitializer`);
                }
            }
        }
        this.checkPossibleMember(resynthesized,original,desc);
        this.checkPossibleLocalElements(resynthesized,original);
    }
    createDartSdk() : any {
        return lib5.AbstractContextTest.SHARED_MOCK_SDK;
    }
    createOptions() : any {
        return ((_) : any =>  {
            {
                _.enableAssertInitializer = true;
                return _;
            }
        })(new bare.createInstance(any,null));
    }
    getActualElement(element : any,desc : string) : any {
        if (op(Op.EQUALS,element,null)) {
            return null;
        }else if (is(element, any)) {
            return element;
        }else if (is(element, any)) {
            let actualElement : any = element.actualElement;
            expect(actualElement,isNot(new bare.createInstance(any,null)),{
                reason : desc});
            return this.getActualElement(actualElement,desc);
        }else if (is(element, any)) {
            return this.getActualElement(element.baseElement,desc);
        }else {
            fail(`Unexpected type for resynthesized (${desc}):` + ` ${element.runtimeType}`);
            return null;
        }
    }
    isTypeParameterUsed(typeParameter : any,type : any) : boolean {
        if (is(type, any)) {
            return this.isTypeParameterUsed(typeParameter,type.returnType) || type.parameters.any((e : any) =>  {
                return this.isTypeParameterUsed(typeParameter,e.type);
            });
        }else if (is(type, any)) {
            return type.typeArguments.any((t : any) =>  {
                return this.isTypeParameterUsed(typeParameter,t);
            });
        }else if (is(type, any)) {
            return op(Op.EQUALS,type,typeParameter);
        }else {
            expect(type.isDynamic || type.isVoid,isTrue);
            return false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.prepareAnalysisContext(this.createOptions());
    }
    _assertUnresolvedIdentifier(initializer : any,desc : string) : void {
        expect(initializer,new bare.createInstance(any,null),{
            reason : desc});
        let identifier : any = initializer;
        expect(identifier.staticElement,isNull,{
            reason : desc});
    }
    _getSortedPropertyAccessors(classElement : any) : core.DartList<any> {
        let accessors : core.DartList<any> = classElement.accessors.toList();
        accessors.sort((a : any,b : any) =>  {
            return a.displayName.compareTo(b.displayName);
        });
        return accessors;
    }
    _hasModifier(element : any,modifier : any) : boolean {
        if (op(Op.EQUALS,modifier,Modifier.ABSTRACT)) {
            if (is(element, any)) {
                return element.isAbstract;
            }
            if (is(element, any)) {
                return element.isAbstract;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.ASYNCHRONOUS)) {
            if (is(element, any)) {
                return element.isAsynchronous;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.CONST)) {
            if (is(element, any)) {
                return element.isConst;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.COVARIANT)) {
            if (is(element, any)) {
                return element.isExplicitlyCovariant;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.DEFERRED)) {
            if (is(element, any)) {
                return element.isDeferred;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.ENUM)) {
            if (is(element, any)) {
                return element.isEnum;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.EXTERNAL)) {
            if (is(element, any)) {
                return element.isExternal;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.FACTORY)) {
            if (is(element, any)) {
                return element.isFactory;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.FINAL)) {
            if (is(element, any)) {
                return element.isFinal;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.GENERATOR)) {
            if (is(element, any)) {
                return element.isGenerator;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.GETTER)) {
            if (is(element, any)) {
                return element.isGetter;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.HAS_EXT_URI)) {
            if (is(element, any)) {
                return element.hasExtUri;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.IMPLICIT_TYPE)) {
            if (is(element, any)) {
                return element.hasImplicitReturnType;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.MIXIN_APPLICATION)) {
            if (is(element, any)) {
                return element.isMixinApplication;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.REFERENCES_SUPER)) {
            if (is(element, any)) {
                return element.hasReferenceToSuper;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.SETTER)) {
            if (is(element, any)) {
                return element.isSetter;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.STATIC)) {
            if (is(element, any)) {
                return element.isStatic;
            }else if (is(element, any)) {
                return element.isStatic;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.SYNTHETIC)) {
            return element.isSynthetic;
        }
        throw new core.UnimplementedError(`Modifier ${modifier} for ${((t)=>(!!t)?t.runtimeType:null)(element)}`);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractResynthesizeTest() {
        this.otherLibrarySources = new core.DartSet<any>();
        this.variablesWithNotConstInitializers = new core.DartSet<string>();
        this.namesThatCannotBeResolved = new core.DartSet<string>();
        this.allowMissingFiles = false;
        this.shouldCompareLibraryElements = true;
    }
}

export namespace TestSummaryResynthesizer {
    export type Constructors = 'TestSummaryResynthesizer';
    export type Interface = Omit<TestSummaryResynthesizer, Constructors>;
}
@DartClass
export class TestSummaryResynthesizer extends any {
    unlinkedSummaries : core.DartMap<string,any>;

    linkedSummaries : core.DartMap<string,any>;

    allowMissingFiles : boolean;

    unlinkedSummariesRequested : core.DartSet<string>;

    linkedSummariesRequested : core.DartSet<string>;

    constructor(context : any,unlinkedSummaries : core.DartMap<string,any>,linkedSummaries : core.DartMap<string,any>,allowMissingFiles : boolean) {
    }
    @defaultConstructor
    TestSummaryResynthesizer(context : any,unlinkedSummaries : core.DartMap<string,any>,linkedSummaries : core.DartMap<string,any>,allowMissingFiles : boolean) {
        this.unlinkedSummariesRequested = new core.DartSet<string>();
        this.linkedSummariesRequested = new core.DartSet<string>();
        super.DartObject(context,context.sourceFactory,context.analysisOptions.strongMode);
        this.unlinkedSummaries = unlinkedSummaries;
        this.linkedSummaries = linkedSummaries;
        this.allowMissingFiles = allowMissingFiles;
        this.unlinkedSummariesRequested.clear();
        this.linkedSummariesRequested.clear();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedSummary(uri : string) : any {
        this.linkedSummariesRequested.add(uri);
        let serializedLibrary : any = this.linkedSummaries.get(uri);
        if (op(Op.EQUALS,serializedLibrary,null) && !this.allowMissingFiles) {
            fail(`Unexpectedly tried to get linked summary for ${uri}`);
        }
        return serializedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getUnlinkedSummary(uri : string) : any {
        this.unlinkedSummariesRequested.add(uri);
        let serializedUnit : any = this.unlinkedSummaries.get(uri);
        if (op(Op.EQUALS,serializedUnit,null) && !this.allowMissingFiles) {
            fail(`Unexpectedly tried to get unlinked summary for ${uri}`);
        }
        return serializedUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hasLibrarySummary(uri : string) : boolean {
        return true;
    }
}

export namespace ResynthesizeTest {
    export type Constructors = AbstractResynthesizeTest.Constructors | 'ResynthesizeTest';
    export type Interface = Omit<ResynthesizeTest, Constructors>;
}
@DartClass
export class ResynthesizeTest extends AbstractResynthesizeTest {
    @Abstract
    checkLibrary(text : string,_namedArguments? : {allowErrors? : boolean,dumpSummaries? : boolean}) : any{ throw 'abstract'}
    @Abstract
    encodeDecodeLibrarySource(librarySource : any) : any{ throw 'abstract'}
    fail_library_hasExtUri() {
        let library = this.checkLibrary('import "dart-ext:doesNotExist.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_class_abstract() {
        let library = this.checkLibrary('abstract class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class C {\n}\n');
        }else {
            lib6.checkElementText(library,'abstract class C {\n}\n');
        }
    }
    test_class_alias() {
        let library = this.checkLibrary('class C = D with E, F; class D {} class E {} class F {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class alias C extends D with E, F {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\nclass F {\n}\n');
        }else {
            lib6.checkElementText(library,'class alias C extends D with E, F {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\nclass F {\n}\n');
        }
    }
    test_class_alias_abstract() {
        let library = this.checkLibrary('abstract class C = D with E; class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class alias C extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\n');
        }else {
            lib6.checkElementText(library,'abstract class alias C extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\n');
        }
    }
    test_class_alias_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nclass C = D with E;\n\nclass D {}\nclass E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs\n */\nclass alias C extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs\n */\nclass alias C extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\n');
        }
    }
    test_class_alias_with_forwarding_constructors() {
        this.addLibrarySource('/a.dart','class Base {\n  Base._priv();\n  Base();\n  Base.noArgs();\n  Base.requiredArg(x);\n  Base.positionalArg([x]);\n  Base.namedArg({x});\n  factory Base.fact() => null;\n  factory Base.fact2() = Base.noArgs;\n}\n');
        let library = this.checkLibrary('import "a.dart";\nclass M {}\nclass MixinApp = Base with M;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nclass M {\n}\nclass alias MixinApp extends Base with M {\n  synthetic MixinApp._priv() = Base._priv;\n  synthetic MixinApp() = Base;\n  synthetic MixinApp.noArgs() = Base.noArgs;\n  synthetic MixinApp.requiredArg(dynamic x) = Base.requiredArg;\n  synthetic MixinApp.fact() = Base.fact;\n  synthetic MixinApp.fact2() = Base.fact2;\n}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nclass M {\n}\nclass alias MixinApp extends Base with M {\n  synthetic MixinApp._priv() = Base._priv;\n  synthetic MixinApp() = Base;\n  synthetic MixinApp.noArgs() = Base.noArgs;\n  synthetic MixinApp.requiredArg(dynamic x) = Base.requiredArg;\n  synthetic MixinApp.fact() = Base.fact;\n  synthetic MixinApp.fact2() = Base.fact2;\n}\n');
        }
    }
    test_class_alias_with_forwarding_constructors_type_substitution() {
        let library = this.checkLibrary('class Base<T> {\n  Base.ctor(T t, List<T> l);\n}\nclass M {}\nclass MixinApp = Base with M;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class Base<T> {\n  Base.ctor(T t, List<T> l);\n}\nclass M {\n}\nclass alias MixinApp extends Base<dynamic> with M {\n  synthetic MixinApp.ctor(dynamic t, List<dynamic> l) = Base<T>.ctor;\n}\n');
        }else {
            lib6.checkElementText(library,'class Base<T> {\n  Base.ctor(T t, List<T> l);\n}\nclass M {\n}\nclass alias MixinApp extends Base<dynamic> with M {\n  synthetic MixinApp.ctor(dynamic t, List<dynamic> l) = Base<T>.ctor;\n}\n');
        }
    }
    test_class_alias_with_forwarding_constructors_type_substitution_complex() {
        let library = this.checkLibrary('class Base<T> {\n  Base.ctor(T t, List<T> l);\n}\nclass M {}\nclass MixinApp<U> = Base<List<U>> with M;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class Base<T> {\n  Base.ctor(T t, List<T> l);\n}\nclass M {\n}\nclass alias MixinApp<U> extends Base<List<U>> with M {\n  synthetic MixinApp.ctor(List<U> t, List<List<U>> l) = Base<T>.ctor;\n}\n');
        }else {
            lib6.checkElementText(library,'class Base<T> {\n  Base.ctor(T t, List<T> l);\n}\nclass M {\n}\nclass alias MixinApp<U> extends Base<List<U>> with M {\n  synthetic MixinApp.ctor(List<U> t, List<List<U>> l) = Base<T>.ctor;\n}\n');
        }
    }
    test_class_alias_with_mixin_members() {
        let library = this.checkLibrary('class C = D with E;\nclass D {}\nclass E {\n  int get a => null;\n  void set b(int i) {}\n  void f() {}\n  int x;\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class alias C extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n  int x;\n  int get a {}\n  void set b(int i) {}\n  void f() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class alias C extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n  int x;\n  int get a {}\n  void set b(int i) {}\n  void f() {}\n}\n');
        }
    }
    test_class_constructor_const() {
        let library = this.checkLibrary('class C { const C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C();\n}\n');
        }
    }
    test_class_constructor_const_external() {
        let library = this.checkLibrary('class C { external const C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  external const C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  external const C();\n}\n');
        }
    }
    test_class_constructor_explicit_named() {
        let library = this.checkLibrary('class C { C.foo(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C.foo();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C.foo();\n}\n');
        }
    }
    test_class_constructor_explicit_type_params() {
        let library = this.checkLibrary('class C<T, U> { C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n  C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n  C();\n}\n');
        }
    }
    test_class_constructor_explicit_unnamed() {
        let library = this.checkLibrary('class C { C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C();\n}\n');
        }
    }
    test_class_constructor_external() {
        let library = this.checkLibrary('class C { external C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  external C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  external C();\n}\n');
        }
    }
    test_class_constructor_factory() {
        let library = this.checkLibrary('class C { factory C() => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  factory C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  factory C();\n}\n');
        }
    }
    test_class_constructor_field_formal_dynamic_dynamic() {
        let library = this.checkLibrary('class C { dynamic x; C(dynamic this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(dynamic this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(dynamic this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_dynamic_typed() {
        let library = this.checkLibrary('class C { dynamic x; C(int this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(int this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(int this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_dynamic_untyped() {
        let library = this.checkLibrary('class C { dynamic x; C(this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(dynamic this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(dynamic this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_multiple_matching_fields() {
        let library = this.checkLibrary('class C { C(this.x); int x; String x; }',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int x;\n  String x;\n  C(int this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int x;\n  String x;\n  C(int this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_no_matching_field() {
        let library = this.checkLibrary('class C { C(this.x); }',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C(dynamic this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C(dynamic this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_typed_dynamic() {
        let library = this.checkLibrary('class C { num x; C(dynamic this.x); }',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  num x;\n  C(dynamic this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  num x;\n  C(dynamic this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_typed_typed() {
        let library = this.checkLibrary('class C { num x; C(int this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  num x;\n  C(int this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  num x;\n  C(int this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_typed_untyped() {
        let library = this.checkLibrary('class C { num x; C(this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  num x;\n  C(num this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  num x;\n  C(num this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_untyped_dynamic() {
        let library = this.checkLibrary('class C { var x; C(dynamic this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(dynamic this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(dynamic this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_untyped_typed() {
        let library = this.checkLibrary('class C { var x; C(int this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(int this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(int this.x);\n}\n');
        }
    }
    test_class_constructor_field_formal_untyped_untyped() {
        let library = this.checkLibrary('class C { var x; C(this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(dynamic this.x);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(dynamic this.x);\n}\n');
        }
    }
    test_class_constructor_fieldFormal_named_noDefault() {
        let library = this.checkLibrary('class C { int x; C({this.x}); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int x;\n  C({int this.x});\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int x;\n  C({int this.x});\n}\n');
        }
    }
    test_class_constructor_fieldFormal_named_withDefault() {
        let library = this.checkLibrary('class C { int x; C({this.x: 42}); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int x;\n  C({int this.x});\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int x;\n  C({int this.x});\n}\n');
        }
    }
    test_class_constructor_fieldFormal_optional_noDefault() {
        let library = this.checkLibrary('class C { int x; C([this.x]); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int x;\n  C([int this.x]);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int x;\n  C([int this.x]);\n}\n');
        }
    }
    test_class_constructor_fieldFormal_optional_withDefault() {
        let library = this.checkLibrary('class C { int x; C([this.x = 42]); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int x;\n  C([int this.x]);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int x;\n  C([int this.x]);\n}\n');
        }
    }
    test_class_constructor_implicit() {
        let library = this.checkLibrary('class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n}\n');
        }
    }
    test_class_constructor_implicit_type_params() {
        let library = this.checkLibrary('class C<T, U> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n}\n');
        }
    }
    test_class_constructor_params() {
        let library = this.checkLibrary('class C { C(x, int y); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C(dynamic x, int y);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C(dynamic x, int y);\n}\n');
        }
    }
    test_class_constructors() {
        let library = this.checkLibrary('class C { C.foo(); C.bar(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C.foo();\n  C.bar();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C.foo();\n  C.bar();\n}\n');
        }
    }
    test_class_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nclass C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs\n */\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs\n */\nclass C {\n}\n');
        }
    }
    test_class_documented_tripleSlash() {
        let library = this.checkLibrary('/// aaa\n/// bbbb\n/// cc\nclass C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/// aaa\n/// bbbb\n/// cc\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'/// aaa\n/// bbbb\n/// cc\nclass C {\n}\n');
        }
    }
    test_class_documented_with_references() {
        let library = this.checkLibrary('/**\n * Docs referring to [D] and [E]\n */\nclass C {}\n\nclass D {}\nclass E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs referring to [D] and [E]\n */\nclass C {\n}\nclass D {\n}\nclass E {\n}\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs referring to [D] and [E]\n */\nclass C {\n}\nclass D {\n}\nclass E {\n}\n');
        }
    }
    test_class_documented_with_windows_line_endings() {
        let library = this.checkLibrary('/**\n * Docs\n */\nclass C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs\n */\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs\n */\nclass C {\n}\n');
        }
    }
    test_class_field_const() {
        let library = this.checkLibrary('class C { static const int i = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static const int i = 0;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static const int i = 0;\n}\n');
        }
    }
    test_class_field_implicit_type() {
        let library = this.checkLibrary('class C { var x; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n}\n');
        }
    }
    test_class_field_static() {
        let library = this.checkLibrary('class C { static int i; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static int i;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static int i;\n}\n');
        }
    }
    test_class_fields() {
        let library = this.checkLibrary('class C { int i; int j; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int i;\n  int j;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int i;\n  int j;\n}\n');
        }
    }
    test_class_getter_abstract() {
        let library = this.checkLibrary('abstract class C { int get x; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class C {\n  int get x;\n}\n');
        }else {
            lib6.checkElementText(library,'abstract class C {\n  int get x;\n}\n');
        }
    }
    test_class_getter_external() {
        let library = this.checkLibrary('class C { external int get x; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  external int get x {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  external int get x {}\n}\n');
        }
    }
    test_class_getter_implicit_return_type() {
        let library = this.checkLibrary('class C { get x => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic get x {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic get x {}\n}\n');
        }
    }
    test_class_getter_static() {
        let library = this.checkLibrary('class C { static int get x => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static int get x {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static int get x {}\n}\n');
        }
    }
    test_class_getters() {
        let library = this.checkLibrary('class C { int get x => null; get y => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int get x {}\n  dynamic get y {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int get x {}\n  dynamic get y {}\n}\n');
        }
    }
    test_class_implicitField_getterFirst() {
        let library = this.checkLibrary('class C { int get x => 0; void set x(int value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int get x {}\n  void set x(int value) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int get x {}\n  void set x(int value) {}\n}\n');
        }
    }
    test_class_implicitField_setterFirst() {
        let library = this.checkLibrary('class C { void set x(int value) {} int get x => 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void set x(int value) {}\n  int get x {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  void set x(int value) {}\n  int get x {}\n}\n');
        }
    }
    test_class_interfaces() {
        let library = this.checkLibrary('class C implements D, E {} class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C implements D, E {\n}\nclass D {\n}\nclass E {\n}\n');
        }else {
            lib6.checkElementText(library,'class C implements D, E {\n}\nclass D {\n}\nclass E {\n}\n');
        }
    }
    test_class_interfaces_unresolved() {
        let library = this.checkLibrary('class C implements X, Y, Z {} class X {} class Z {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C implements X, Z {\n}\nclass X {\n}\nclass Z {\n}\n');
        }else {
            lib6.checkElementText(library,'class C implements X, Z {\n}\nclass X {\n}\nclass Z {\n}\n');
        }
    }
    test_class_method_abstract() {
        let library = this.checkLibrary('abstract class C { f(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class C {\n  dynamic f();\n}\n');
        }else {
            lib6.checkElementText(library,'abstract class C {\n  dynamic f();\n}\n');
        }
    }
    test_class_method_external() {
        let library = this.checkLibrary('class C { external f(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  external dynamic f() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  external dynamic f() {}\n}\n');
        }
    }
    test_class_method_params() {
        let library = this.checkLibrary('class C { f(x, y) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic f(dynamic x, dynamic y) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic f(dynamic x, dynamic y) {}\n}\n');
        }
    }
    test_class_method_static() {
        let library = this.checkLibrary('class C { static f() {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static dynamic f() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static dynamic f() {}\n}\n');
        }
    }
    test_class_methods() {
        let library = this.checkLibrary('class C { f() {} g() {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic f() {}\n  dynamic g() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic f() {}\n  dynamic g() {}\n}\n');
        }
    }
    test_class_mixins() {
        let library = this.checkLibrary('class C extends Object with D, E {} class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends Object with D, E {\n  synthetic C();\n}\nclass D {\n}\nclass E {\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends Object with D, E {\n  synthetic C();\n}\nclass D {\n}\nclass E {\n}\n');
        }
    }
    test_class_mixins_unresolved() {
        let library = this.checkLibrary('class C extends Object with X, Y, Z; class X {} class Z {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends Object with X, Z {\n  synthetic C();\n}\nclass X {\n}\nclass Z {\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends Object with X, Z {\n  synthetic C();\n}\nclass X {\n}\nclass Z {\n}\n');
        }
    }
    test_class_setter_abstract() {
        let library = this.checkLibrary('abstract class C { void set x(int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class C {\n  void set x(int value);\n}\n');
        }else {
            lib6.checkElementText(library,'abstract class C {\n  void set x(int value);\n}\n');
        }
    }
    test_class_setter_external() {
        let library = this.checkLibrary('class C { external void set x(int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  external void set x(int value) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  external void set x(int value) {}\n}\n');
        }
    }
    test_class_setter_implicit_param_type() {
        let library = this.checkLibrary('class C { void set x(value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void set x(dynamic value) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  void set x(dynamic value) {}\n}\n');
        }
    }
    test_class_setter_implicit_return_type() {
        let library = this.checkLibrary('class C { set x(int value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void set x(int value) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic set x(int value) {}\n}\n');
        }
    }
    test_class_setter_invalid_no_parameter() {
        let library = this.checkLibrary('class C { void set x() {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void set x() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  void set x() {}\n}\n');
        }
    }
    test_class_setter_static() {
        let library = this.checkLibrary('class C { static void set x(int value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static void set x(int value) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static void set x(int value) {}\n}\n');
        }
    }
    test_class_setters() {
        let library = this.checkLibrary('class C { void set x(int value) {} set y(value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void set x(int value) {}\n  void set y(dynamic value) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  void set x(int value) {}\n  dynamic set y(dynamic value) {}\n}\n');
        }
    }
    test_class_supertype() {
        let library = this.checkLibrary('class C extends D {} class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n}\nclass D {\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n}\nclass D {\n}\n');
        }
    }
    test_class_supertype_unresolved() {
        let library = this.checkLibrary('class C extends D {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n}\n');
        }
    }
    test_class_type_parameters() {
        let library = this.checkLibrary('class C<T, U> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n}\n');
        }
    }
    test_class_type_parameters_bound() {
        let library = this.checkLibrary('class C<T extends Object, U extends D> {} class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends Object, U extends D> {\n}\nclass D {\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T extends Object, U extends D> {\n}\nclass D {\n}\n');
        }
    }
    test_class_type_parameters_f_bound_complex() {
        let library = this.checkLibrary('class C<T extends List<U>, U> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends List<U>, U> {\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T extends List<U>, U> {\n}\n');
        }
    }
    test_class_type_parameters_f_bound_simple() {
        let library = this.checkLibrary('class C<T extends U, U> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends U, U> {\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T extends U, U> {\n}\n');
        }
    }
    test_classes() {
        let library = this.checkLibrary('class C {} class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n}\nclass D {\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n}\nclass D {\n}\n');
        }
    }
    test_closure_executable_with_return_type_from_closure() {
        let library = this.checkLibrary('f() {\n  print(() {});\n  print(() => () => 0);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }
    }
    test_closure_generic() {
        let library = this.checkLibrary('final f = <U, V>(U x, V y) => y;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'final <U,V>(U, V) → V f;\n');
        }else {
            lib6.checkElementText(library,'final dynamic f;\n');
        }
    }
    test_closure_in_variable_declaration_in_part() {
        this.addSource('/a.dart','part of lib; final f = (int i) => i.toDouble();');
        let library = this.checkLibrary('library lib;\npart "a.dart";\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library lib;\npart \'a.dart\';\n--------------------\nunit: a.dart\n\nfinal (int) → double f;\n');
        }else {
            lib6.checkElementText(library,'library lib;\npart \'a.dart\';\n--------------------\nunit: a.dart\n\nfinal dynamic f;\n');
        }
    }
    test_const_invalid_field_const() {
        this.variablesWithNotConstInitializers.add('f');
        let library = this.checkLibrary('class C {\n  static const f = 1 + foo();\n}\nint foo() => 42;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static const int f =\n        $$invalidConstExpr$$/*location: null*/;\n}\nint foo() {}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static const dynamic f =\n        $$invalidConstExpr$$/*location: null*/;\n}\nint foo() {}\n');
        }
    }
    test_const_invalid_field_final() {
        this.variablesWithNotConstInitializers.add('f');
        let library = this.checkLibrary('class C {\n  final f = 1 + foo();\n}\nint foo() => 42;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final int f =\n        $$invalidConstExpr$$/*location: null*/;\n}\nint foo() {}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic f =\n        $$invalidConstExpr$$/*location: null*/;\n}\nint foo() {}\n');
        }
    }
    test_const_invalid_topLevel() {
        this.variablesWithNotConstInitializers.add('v');
        let library = this.checkLibrary('const v = 1 + foo();\nint foo() => 42;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int v =\n        $$invalidConstExpr$$/*location: null*/;\nint foo() {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic v =\n        $$invalidConstExpr$$/*location: null*/;\nint foo() {}\n');
        }
    }
    test_const_invokeConstructor_generic_named() {
        let library = this.checkLibrary('class C<K, V> {\n  const C.named(K k, V v);\n}\nconst V = const C<int, String>.named(1, \'222\');\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<K, V> {\n  const C.named(K k, V v);\n}\nconst C<int, String> V = const\n        C/*location: test.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>.\n        named/*location: test.dart;C;named*/(1, \'222\');\n');
        }else {
            lib6.checkElementText(library,'class C<K, V> {\n  const C.named(K k, V v);\n}\nconst dynamic V = const\n        C/*location: test.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>.\n        named/*location: test.dart;C;named*/(1, \'222\');\n');
        }
    }
    test_const_invokeConstructor_generic_named_imported() {
        this.addLibrarySource('/a.dart','class C<K, V> {\n  const C.named(K k, V v);\n}\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst V = const C<int, String>.named(1, \'222\');\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst C<int, String> V = const\n        C/*location: a.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>.\n        named/*location: a.dart;C;named*/(1, \'222\');\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic V = const\n        C/*location: a.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>.\n        named/*location: a.dart;C;named*/(1, \'222\');\n');
        }
    }
    test_const_invokeConstructor_generic_named_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C<K, V> {\n  const C.named(K k, V v);\n}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = const p.C<int, String>.named(1, \'222\');\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst C<int, String> V = const\n        C/*location: a.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>.\n        named/*location: a.dart;C;named*/(1, \'222\');\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        C/*location: a.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>.\n        named/*location: a.dart;C;named*/(1, \'222\');\n');
        }
    }
    test_const_invokeConstructor_generic_noTypeArguments() {
        let library = this.checkLibrary('class C<K, V> {\n  const C();\n}\nconst V = const C();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<K, V> {\n  const C();\n}\nconst C<dynamic, dynamic> V = const\n        C/*location: test.dart;C*/();\n');
        }else {
            lib6.checkElementText(library,'class C<K, V> {\n  const C();\n}\nconst dynamic V = const\n        C/*location: test.dart;C*/();\n');
        }
    }
    test_const_invokeConstructor_generic_unnamed() {
        let library = this.checkLibrary('class C<K, V> {\n  const C();\n}\nconst V = const C<int, String>();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<K, V> {\n  const C();\n}\nconst C<int, String> V = const\n        C/*location: test.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>();\n');
        }else {
            lib6.checkElementText(library,'class C<K, V> {\n  const C();\n}\nconst dynamic V = const\n        C/*location: test.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>();\n');
        }
    }
    test_const_invokeConstructor_generic_unnamed_imported() {
        this.addLibrarySource('/a.dart','class C<K, V> {\n  const C();\n}\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst V = const C<int, String>();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst C<int, String> V = const\n        C/*location: a.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic V = const\n        C/*location: a.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>();\n');
        }
    }
    test_const_invokeConstructor_generic_unnamed_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C<K, V> {\n  const C();\n}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = const p.C<int, String>();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst C<int, String> V = const\n        C/*location: a.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        C/*location: a.dart;C*/<\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>();\n');
        }
    }
    test_const_invokeConstructor_named() {
        let library = this.checkLibrary('class C {\n  const C.named(bool a, int b, int c, {String d, double e});\n}\nconst V = const C.named(true, 1, 2, d: \'ccc\', e: 3.4);\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C.named(bool a, int b, int c, {String d}, {double e});\n}\nconst C V = const\n        C/*location: test.dart;C*/.\n        named/*location: test.dart;C;named*/(true, 1, 2,\n        d/*location: null*/: \'ccc\',\n        e/*location: null*/: 3.4);\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C.named(bool a, int b, int c, {String d}, {double e});\n}\nconst dynamic V = const\n        C/*location: test.dart;C*/.\n        named/*location: test.dart;C;named*/(true, 1, 2,\n        d/*location: null*/: \'ccc\',\n        e/*location: null*/: 3.4);\n');
        }
    }
    test_const_invokeConstructor_named_imported() {
        this.addLibrarySource('/a.dart','class C {\n  const C.named();\n}\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst V = const C.named();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst C V = const\n        C/*location: a.dart;C*/.\n        named/*location: a.dart;C;named*/();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic V = const\n        C/*location: a.dart;C*/.\n        named/*location: a.dart;C;named*/();\n');
        }
    }
    test_const_invokeConstructor_named_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {\n  const C.named();\n}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = const p.C.named();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst C V = const\n        C/*location: a.dart;C*/.\n        named/*location: a.dart;C;named*/();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        C/*location: a.dart;C*/.\n        named/*location: a.dart;C;named*/();\n');
        }
    }
    test_const_invokeConstructor_named_unresolved() {
        let library = this.checkLibrary('class C {}\nconst V = const C.named();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n}\nconst C V = const\n        C/*location: test.dart;C*/.\n        named/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'class C {\n}\nconst dynamic V = const\n        C/*location: test.dart;C*/.\n        named/*location: null*/();\n');
        }
    }
    test_const_invokeConstructor_named_unresolved2() {
        let library = this.checkLibrary('const V = const C.named();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V = const\n        C/*location: null*/.\n        named/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'const dynamic V = const\n        C/*location: null*/.\n        named/*location: null*/();\n');
        }
    }
    test_const_invokeConstructor_named_unresolved3() {
        this.addLibrarySource('/a.dart','class C {\n}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = const p.C.named();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst C V = const\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/.\n        named/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/.\n        named/*location: null*/();\n');
        }
    }
    test_const_invokeConstructor_named_unresolved4() {
        this.addLibrarySource('/a.dart','');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = const p.C.named();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        p/*location: test.dart;p*/.\n        C/*location: null*/.\n        named/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        p/*location: test.dart;p*/.\n        C/*location: null*/.\n        named/*location: null*/();\n');
        }
    }
    test_const_invokeConstructor_named_unresolved5() {
        let library = this.checkLibrary('const V = const p.C.named();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V = const\n        p/*location: null*/.\n        C/*location: null*/.\n        named/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'const dynamic V = const\n        p/*location: null*/.\n        C/*location: null*/.\n        named/*location: null*/();\n');
        }
    }
    test_const_invokeConstructor_named_unresolved6() {
        let library = this.checkLibrary('class C<T> {}\nconst V = const C.named();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n}\nconst C<dynamic> V = const\n        C/*location: test.dart;C*/.\n        named/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n}\nconst dynamic V = const\n        C/*location: test.dart;C*/.\n        named/*location: null*/();\n');
        }
    }
    test_const_invokeConstructor_unnamed() {
        let library = this.checkLibrary('class C {\n  const C();\n}\nconst V = const C();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C();\n}\nconst C V = const\n        C/*location: test.dart;C*/();\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C();\n}\nconst dynamic V = const\n        C/*location: test.dart;C*/();\n');
        }
    }
    test_const_invokeConstructor_unnamed_imported() {
        this.addLibrarySource('/a.dart','class C {\n  const C();\n}\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst V = const C();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst C V = const\n        C/*location: a.dart;C*/();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic V = const\n        C/*location: a.dart;C*/();\n');
        }
    }
    test_const_invokeConstructor_unnamed_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {\n  const C();\n}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = const p.C();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst C V = const\n        C/*location: a.dart;C*/();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        C/*location: a.dart;C*/();\n');
        }
    }
    test_const_invokeConstructor_unnamed_unresolved() {
        let library = this.checkLibrary('const V = const C();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V = const\n        C/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'const dynamic V = const\n        C/*location: null*/();\n');
        }
    }
    test_const_invokeConstructor_unnamed_unresolved2() {
        this.shouldCompareLibraryElements = false;
        this.addLibrarySource('/a.dart','');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = const p.C();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        p/*location: test.dart;p*/.\n        C/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V = const\n        p/*location: test.dart;p*/.\n        C/*location: null*/();\n');
        }
    }
    test_const_invokeConstructor_unnamed_unresolved3() {
        let library = this.checkLibrary('const V = const p.C();\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V = const\n        p/*location: null*/.\n        C/*location: null*/();\n');
        }else {
            lib6.checkElementText(library,'const dynamic V = const\n        p/*location: null*/.\n        C/*location: null*/();\n');
        }
    }
    test_const_length_ofClassConstField() {
        let library = this.checkLibrary('class C {\n  static const String F = \'\';\n}\nconst int v = C.F.length;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static const String F = \'\';\n}\nconst int v =\n        C/*location: test.dart;C*/.\n        F/*location: test.dart;C;F?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static const String F = \'\';\n}\nconst int v =\n        C/*location: test.dart;C*/.\n        F/*location: test.dart;C;F?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }
    }
    test_const_length_ofClassConstField_imported() {
        this.addLibrarySource('/a.dart','class C {\n  static const String F = \'\';\n}\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst int v = C.F.length;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst int v =\n        C/*location: a.dart;C*/.\n        F/*location: a.dart;C;F?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst int v =\n        C/*location: a.dart;C*/.\n        F/*location: a.dart;C;F?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }
    }
    test_const_length_ofClassConstField_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {\n  static const String F = \'\';\n}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst int v = p.C.F.length;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst int v =\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/.\n        F/*location: a.dart;C;F?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst int v =\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/.\n        F/*location: a.dart;C;F?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }
    }
    test_const_length_ofStringLiteral() {
        let library = this.checkLibrary('const v = \'abc\'.length;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic v/*error: instanceGetter*/ = \'abc\'.\n        length/*location: dart:core;String;length?*/;\n');
        }else {
            lib6.checkElementText(library,'const dynamic v = \'abc\'.\n        length/*location: dart:core;String;length?*/;\n');
        }
    }
    test_const_length_ofTopLevelVariable() {
        let library = this.checkLibrary('const String S = \'abc\';\nconst v = S.length;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const String S = \'abc\';\nconst dynamic v/*error: instanceGetter*/ =\n        S/*location: test.dart;S?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }else {
            lib6.checkElementText(library,'const String S = \'abc\';\nconst dynamic v =\n        S/*location: test.dart;S?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }
    }
    test_const_length_ofTopLevelVariable_imported() {
        this.addLibrarySource('/a.dart','const String S = \'abc\';\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst v = S.length;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic v/*error: instanceGetter*/ =\n        S/*location: a.dart;S?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic v =\n        S/*location: a.dart;S?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }
    }
    test_const_length_ofTopLevelVariable_imported_withPrefix() {
        this.addLibrarySource('/a.dart','const String S = \'abc\';\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst v = p.S.length;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic v/*error: instanceGetter*/ =\n        p/*location: test.dart;p*/.\n        S/*location: a.dart;S?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic v =\n        p/*location: test.dart;p*/.\n        S/*location: a.dart;S?*/.\n        length/*location: dart:core;String;length?*/;\n');
        }
    }
    test_const_length_staticMethod() {
        let library = this.checkLibrary('class C {\n  static int length() => 42;\n}\nconst v = C.length;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static int length() {}\n}\nconst () → int v =\n        C/*location: test.dart;C*/.\n        length/*location: test.dart;C;length*/;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static int length() {}\n}\nconst dynamic v =\n        C/*location: test.dart;C*/.\n        length/*location: test.dart;C;length*/;\n');
        }
    }
    test_const_parameterDefaultValue_initializingFormal_functionTyped() {
        let library = this.checkLibrary('class C {\n  final x;\n  const C({this.x: foo});\n}\nint foo() => 42;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C({dynamic this.x});\n}\nint foo() {}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C({dynamic this.x});\n}\nint foo() {}\n');
        }
    }
    test_const_parameterDefaultValue_initializingFormal_named() {
        let library = this.checkLibrary('class C {\n  final x;\n  const C({this.x: 1 + 2});\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C({dynamic this.x});\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C({dynamic this.x});\n}\n');
        }
    }
    test_const_parameterDefaultValue_initializingFormal_positional() {
        let library = this.checkLibrary('class C {\n  final x;\n  const C([this.x = 1 + 2]);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C([dynamic this.x]);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C([dynamic this.x]);\n}\n');
        }
    }
    test_const_parameterDefaultValue_normal() {
        let library = this.checkLibrary('class C {\n  const C.positional([p = 1 + 2]);\n  const C.named({p: 1 + 2});\n  void methodPositional([p = 1 + 2]) {}\n  void methodPositionalWithoutDefault([p]) {}\n  void methodNamed({p: 1 + 2}) {}\n  void methodNamedWithoutDefault({p}) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C.positional([dynamic p = 1 + 2]);\n  const C.named({dynamic p: 1 + 2});\n  void methodPositional([dynamic p = 1 + 2]) {}\n  void methodPositionalWithoutDefault([dynamic p]) {}\n  void methodNamed({dynamic p: 1 + 2}) {}\n  void methodNamedWithoutDefault({dynamic p}) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C.positional([dynamic p = 1 + 2]);\n  const C.named({dynamic p: 1 + 2});\n  void methodPositional([dynamic p = 1 + 2]) {}\n  void methodPositionalWithoutDefault([dynamic p]) {}\n  void methodNamed({dynamic p: 1 + 2}) {}\n  void methodNamedWithoutDefault({dynamic p}) {}\n}\n');
        }
    }
    test_const_reference_staticField() {
        let library = this.checkLibrary('class C {\n  static const int F = 42;\n}\nconst V = C.F;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static const int F = 42;\n}\nconst int V =\n        C/*location: test.dart;C*/.\n        F/*location: test.dart;C;F?*/;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static const int F = 42;\n}\nconst dynamic V =\n        C/*location: test.dart;C*/.\n        F/*location: test.dart;C;F?*/;\n');
        }
    }
    test_const_reference_staticField_imported() {
        this.addLibrarySource('/a.dart','class C {\n  static const int F = 42;\n}\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst V = C.F;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst int V =\n        C/*location: a.dart;C*/.\n        F/*location: a.dart;C;F?*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic V =\n        C/*location: a.dart;C*/.\n        F/*location: a.dart;C;F?*/;\n');
        }
    }
    test_const_reference_staticField_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {\n  static const int F = 42;\n}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = p.C.F;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst int V =\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/.\n        F/*location: a.dart;C;F?*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V =\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/.\n        F/*location: a.dart;C;F?*/;\n');
        }
    }
    test_const_reference_staticMethod() {
        let library = this.checkLibrary('class C {\n  static int m(int a, String b) => 42;\n}\nconst V = C.m;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static int m(int a, String b) {}\n}\nconst (int, String) → int V =\n        C/*location: test.dart;C*/.\n        m/*location: test.dart;C;m*/;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static int m(int a, String b) {}\n}\nconst dynamic V =\n        C/*location: test.dart;C*/.\n        m/*location: test.dart;C;m*/;\n');
        }
    }
    test_const_reference_staticMethod_imported() {
        this.addLibrarySource('/a.dart','class C {\n  static int m(int a, String b) => 42;\n}\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst V = C.m;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst (int, String) → int V =\n        C/*location: a.dart;C*/.\n        m/*location: a.dart;C;m*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic V =\n        C/*location: a.dart;C*/.\n        m/*location: a.dart;C;m*/;\n');
        }
    }
    test_const_reference_staticMethod_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {\n  static int m(int a, String b) => 42;\n}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = p.C.m;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst (int, String) → int V =\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/.\n        m/*location: a.dart;C;m*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V =\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/.\n        m/*location: a.dart;C;m*/;\n');
        }
    }
    test_const_reference_topLevelFunction() {
        let library = this.checkLibrary('foo() {}\nconst V = foo;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const () → dynamic V =\n        foo/*location: test.dart;foo*/;\ndynamic foo() {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic V =\n        foo/*location: test.dart;foo*/;\ndynamic foo() {}\n');
        }
    }
    test_const_reference_topLevelFunction_imported() {
        this.addLibrarySource('/a.dart','foo() {}\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst V = foo;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst () → dynamic V =\n        foo/*location: a.dart;foo*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic V =\n        foo/*location: a.dart;foo*/;\n');
        }
    }
    test_const_reference_topLevelFunction_imported_withPrefix() {
        this.addLibrarySource('/a.dart','foo() {}\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst V = p.foo;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst () → dynamic V =\n        p/*location: test.dart;p*/.\n        foo/*location: a.dart;foo*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic V =\n        p/*location: test.dart;p*/.\n        foo/*location: a.dart;foo*/;\n');
        }
    }
    test_const_reference_topLevelVariable() {
        let library = this.checkLibrary('const A = 1;\nconst B = A + 2;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int A = 1;\nconst int B =\n        A/*location: test.dart;A?*/ + 2;\n');
        }else {
            lib6.checkElementText(library,'const dynamic A = 1;\nconst dynamic B =\n        A/*location: test.dart;A?*/ + 2;\n');
        }
    }
    test_const_reference_topLevelVariable_imported() {
        this.addLibrarySource('/a.dart','const A = 1;\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst B = A + 2;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst int B =\n        A/*location: a.dart;A?*/ + 2;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic B =\n        A/*location: a.dart;A?*/ + 2;\n');
        }
    }
    test_const_reference_topLevelVariable_imported_withPrefix() {
        this.addLibrarySource('/a.dart','const A = 1;\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst B = p.A + 2;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst int B =\n        p/*location: test.dart;p*/.\n        A/*location: a.dart;A?*/ + 2;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic B =\n        p/*location: test.dart;p*/.\n        A/*location: a.dart;A?*/ + 2;\n');
        }
    }
    test_const_reference_type() {
        let library = this.checkLibrary('class C {}\nclass D<T> {}\nenum E {a, b, c}\ntypedef F(int a, String b);\nconst vDynamic = dynamic;\nconst vNull = Null;\nconst vObject = Object;\nconst vClass = C;\nconst vGenericClass = D;\nconst vEnum = E;\nconst vFunctionTypeAlias = F;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(int a, String b);\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E a;\n  static const E b;\n  static const E c;\n}\nclass C {\n}\nclass D<T> {\n}\nconst Type vDynamic =\n        dynamic/*location: dynamic*/;\nconst Type vNull =\n        Null/*location: dart:core;Null*/;\nconst Type vObject =\n        Object/*location: dart:core;Object*/;\nconst Type vClass =\n        C/*location: test.dart;C*/;\nconst Type vGenericClass =\n        D/*location: test.dart;D*/;\nconst Type vEnum =\n        E/*location: test.dart;E*/;\nconst Type vFunctionTypeAlias =\n        F/*location: test.dart;F*/;\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F(int a, String b);\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E a;\n  static const E b;\n  static const E c;\n}\nclass C {\n}\nclass D<T> {\n}\nconst dynamic vDynamic =\n        dynamic/*location: dynamic*/;\nconst dynamic vNull =\n        Null/*location: dart:core;Null*/;\nconst dynamic vObject =\n        Object/*location: dart:core;Object*/;\nconst dynamic vClass =\n        C/*location: test.dart;C*/;\nconst dynamic vGenericClass =\n        D/*location: test.dart;D*/;\nconst dynamic vEnum =\n        E/*location: test.dart;E*/;\nconst dynamic vFunctionTypeAlias =\n        F/*location: test.dart;F*/;\n');
        }
    }
    test_const_reference_type_functionType() {
        let library = this.checkLibrary('typedef F();\nclass C {\n  final f = <F>[];\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F();\nclass C {\n  final List<F> f = const <\n        F/*location: test.dart;F*/>[];\n}\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F();\nclass C {\n  final dynamic f = const <\n        F/*location: test.dart;F*/>[];\n}\n');
        }
    }
    test_const_reference_type_imported() {
        this.addLibrarySource('/a.dart','class C {}\nenum E {a, b, c}\ntypedef F(int a, String b);\n');
        let library = this.checkLibrary('import \'a.dart\';\nconst vClass = C;\nconst vEnum = E;\nconst vFunctionTypeAlias = F;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst Type vClass =\n        C/*location: a.dart;C*/;\nconst Type vEnum =\n        E/*location: a.dart;E*/;\nconst Type vFunctionTypeAlias =\n        F/*location: a.dart;F*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic vClass =\n        C/*location: a.dart;C*/;\nconst dynamic vEnum =\n        E/*location: a.dart;E*/;\nconst dynamic vFunctionTypeAlias =\n        F/*location: a.dart;F*/;\n');
        }
    }
    test_const_reference_type_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {}\nenum E {a, b, c}\ntypedef F(int a, String b);\n');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst vClass = p.C;\nconst vEnum = p.E;\nconst vFunctionTypeAlias = p.F;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst Type vClass =\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/;\nconst Type vEnum =\n        p/*location: test.dart;p*/.\n        E/*location: a.dart;E*/;\nconst Type vFunctionTypeAlias =\n        p/*location: test.dart;p*/.\n        F/*location: a.dart;F*/;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic vClass =\n        p/*location: test.dart;p*/.\n        C/*location: a.dart;C*/;\nconst dynamic vEnum =\n        p/*location: test.dart;p*/.\n        E/*location: a.dart;E*/;\nconst dynamic vFunctionTypeAlias =\n        p/*location: test.dart;p*/.\n        F/*location: a.dart;F*/;\n');
        }
    }
    test_const_reference_type_typeParameter() {
        let library = this.checkLibrary('class C<T> {\n  final f = <T>[];\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n  final List<T> f = const <\n        T/*location: test.dart;C;T*/>[];\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n  final dynamic f = const <\n        T/*location: test.dart;C;T*/>[];\n}\n');
        }
    }
    test_const_reference_unresolved_prefix0() {
        let library = this.checkLibrary('const V = foo;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V =\n        foo/*location: null*/;\n');
        }else {
            lib6.checkElementText(library,'const dynamic V =\n        foo/*location: null*/;\n');
        }
    }
    test_const_reference_unresolved_prefix1() {
        let library = this.checkLibrary('class C {}\nconst v = C.foo;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n}\nconst dynamic v =\n        C/*location: test.dart;C*/.\n        foo/*location: null*/;\n');
        }else {
            lib6.checkElementText(library,'class C {\n}\nconst dynamic v =\n        C/*location: test.dart;C*/.\n        foo/*location: null*/;\n');
        }
    }
    test_const_reference_unresolved_prefix2() {
        this.addLibrarySource('/foo.dart','class C {}\n');
        let library = this.checkLibrary('import \'foo.dart\' as p;\nconst v = p.C.foo;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as p;\nconst dynamic v =\n        p/*location: test.dart;p*/.\n        C/*location: foo.dart;C*/.\n        foo/*location: null*/;\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as p;\nconst dynamic v =\n        p/*location: test.dart;p*/.\n        C/*location: foo.dart;C*/.\n        foo/*location: null*/;\n');
        }
    }
    test_const_topLevel_binary() {
        let library = this.checkLibrary('const vEqual = 1 == 2;\nconst vAnd = true && false;\nconst vOr = false || true;\nconst vBitXor = 1 ^ 2;\nconst vBitAnd = 1 & 2;\nconst vBitOr = 1 | 2;\nconst vBitShiftLeft = 1 << 2;\nconst vBitShiftRight = 1 >> 2;\nconst vAdd = 1 + 2;\nconst vSubtract = 1 - 2;\nconst vMiltiply = 1 * 2;\nconst vDivide = 1 / 2;\nconst vFloorDivide = 1 ~/ 2;\nconst vModulo = 1 % 2;\nconst vGreater = 1 > 2;\nconst vGreaterEqual = 1 >= 2;\nconst vLess = 1 < 2;\nconst vLessEqual = 1 <= 2;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const bool vEqual = 1 == 2;\nconst bool vAnd = true && false;\nconst bool vOr = false || true;\nconst int vBitXor = 1 ^ 2;\nconst int vBitAnd = 1 & 2;\nconst int vBitOr = 1 | 2;\nconst int vBitShiftLeft = 1 << 2;\nconst int vBitShiftRight = 1 >> 2;\nconst int vAdd = 1 + 2;\nconst int vSubtract = 1 - 2;\nconst int vMiltiply = 1 * 2;\nconst num vDivide = 1 / 2;\nconst int vFloorDivide = 1 ~/ 2;\nconst int vModulo = 1 % 2;\nconst bool vGreater = 1 > 2;\nconst bool vGreaterEqual = 1 >= 2;\nconst bool vLess = 1 < 2;\nconst bool vLessEqual = 1 <= 2;\n');
        }else {
            lib6.checkElementText(library,'const dynamic vEqual = 1 == 2;\nconst dynamic vAnd = true && false;\nconst dynamic vOr = false || true;\nconst dynamic vBitXor = 1 ^ 2;\nconst dynamic vBitAnd = 1 & 2;\nconst dynamic vBitOr = 1 | 2;\nconst dynamic vBitShiftLeft = 1 << 2;\nconst dynamic vBitShiftRight = 1 >> 2;\nconst dynamic vAdd = 1 + 2;\nconst dynamic vSubtract = 1 - 2;\nconst dynamic vMiltiply = 1 * 2;\nconst dynamic vDivide = 1 / 2;\nconst dynamic vFloorDivide = 1 ~/ 2;\nconst dynamic vModulo = 1 % 2;\nconst dynamic vGreater = 1 > 2;\nconst dynamic vGreaterEqual = 1 >= 2;\nconst dynamic vLess = 1 < 2;\nconst dynamic vLessEqual = 1 <= 2;\n');
        }
    }
    test_const_topLevel_conditional() {
        let library = this.checkLibrary('const vConditional = (1 == 2) ? 11 : 22;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int vConditional = 1 == 2 ? 11 : 22;\n');
        }else {
            lib6.checkElementText(library,'const dynamic vConditional = 1 == 2 ? 11 : 22;\n');
        }
    }
    test_const_topLevel_identical() {
        let library = this.checkLibrary('const vIdentical = (1 == 2) ? 11 : 22;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int vIdentical = 1 == 2 ? 11 : 22;\n');
        }else {
            lib6.checkElementText(library,'const dynamic vIdentical = 1 == 2 ? 11 : 22;\n');
        }
    }
    test_const_topLevel_ifNull() {
        let library = this.checkLibrary('const vIfNull = 1 ?? 2.0;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const num vIfNull = 1 ?? 2.0;\n');
        }else {
            lib6.checkElementText(library,'const dynamic vIfNull = 1 ?? 2.0;\n');
        }
    }
    test_const_topLevel_literal() {
        let library = this.checkLibrary('const vNull = null;\nconst vBoolFalse = false;\nconst vBoolTrue = true;\nconst vInt = 1;\nconst vIntLong = 0x9876543210987654321;\nconst vDouble = 2.3;\nconst vString = \'abc\';\nconst vStringConcat = \'aaa\' \'bbb\';\nconst vStringInterpolation = \'aaa ${true} ${42} bbb\';\nconst vSymbol = #aaa.bbb.ccc;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic vNull = null;\nconst bool vBoolFalse = false;\nconst bool vBoolTrue = true;\nconst int vInt = 1;\nconst int vIntLong = 44998905507923676709665;\nconst double vDouble = 2.3;\nconst String vString = \'abc\';\nconst String vStringConcat = \'aaabbb\';\nconst String vStringInterpolation = \'aaa ${true} ${42} bbb\';\nconst Symbol vSymbol = #aaa.bbb.ccc;\n');
        }else {
            lib6.checkElementText(library,'const dynamic vNull = null;\nconst dynamic vBoolFalse = false;\nconst dynamic vBoolTrue = true;\nconst dynamic vInt = 1;\nconst dynamic vIntLong = 44998905507923676709665;\nconst dynamic vDouble = 2.3;\nconst dynamic vString = \'abc\';\nconst dynamic vStringConcat = \'aaabbb\';\nconst dynamic vStringInterpolation = \'aaa ${true} ${42} bbb\';\nconst dynamic vSymbol = #aaa.bbb.ccc;\n');
        }
    }
    test_const_topLevel_prefix() {
        let library = this.checkLibrary('const vNotEqual = 1 != 2;\nconst vNot = !true;\nconst vNegate = -1;\nconst vComplement = ~1;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const bool vNotEqual = 1 != 2;\nconst bool vNot = !true;\nconst int vNegate = -1;\nconst int vComplement = ~1;\n');
        }else {
            lib6.checkElementText(library,'const dynamic vNotEqual = 1 != 2;\nconst dynamic vNot = !true;\nconst dynamic vNegate = -1;\nconst dynamic vComplement = ~1;\n');
        }
    }
    test_const_topLevel_super() {
        let library = this.checkLibrary('const vSuper = super;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic vSuper = super;\n');
        }else {
            lib6.checkElementText(library,'const dynamic vSuper = super;\n');
        }
    }
    test_const_topLevel_this() {
        let library = this.checkLibrary('const vThis = this;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic vThis = this;\n');
        }else {
            lib6.checkElementText(library,'const dynamic vThis = this;\n');
        }
    }
    test_const_topLevel_typedList() {
        let library = this.checkLibrary('const vNull = const <Null>[];\nconst vDynamic = const <dynamic>[1, 2, 3];\nconst vInterfaceNoTypeParameters = const <int>[1, 2, 3];\nconst vInterfaceNoTypeArguments = const <List>[];\nconst vInterfaceWithTypeArguments = const <List<String>>[];\nconst vInterfaceWithTypeArguments2 = const <Map<int, List<String>>>[];\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const List<Null> vNull = const <\n        Null/*location: dart:core;Null*/>[];\nconst List<dynamic> vDynamic = const <\n        dynamic/*location: dynamic*/>[1, 2, 3];\nconst List<int> vInterfaceNoTypeParameters = const <\n        int/*location: dart:core;int*/>[1, 2, 3];\nconst List<List<dynamic>> vInterfaceNoTypeArguments = const <\n        List/*location: dart:core;List*/>[];\nconst List<List<String>> vInterfaceWithTypeArguments = const <\n        List/*location: dart:core;List*/<\n        String/*location: dart:core;String*/>>[];\nconst List<Map<int, List<String>>> vInterfaceWithTypeArguments2 = const <\n        Map/*location: dart:core;Map*/<\n        int/*location: dart:core;int*/,\n        List/*location: dart:core;List*/<\n        String/*location: dart:core;String*/>>>[];\n');
        }else {
            lib6.checkElementText(library,'const dynamic vNull = const <\n        Null/*location: dart:core;Null*/>[];\nconst dynamic vDynamic = const <\n        dynamic/*location: dynamic*/>[1, 2, 3];\nconst dynamic vInterfaceNoTypeParameters = const <\n        int/*location: dart:core;int*/>[1, 2, 3];\nconst dynamic vInterfaceNoTypeArguments = const <\n        List/*location: dart:core;List*/>[];\nconst dynamic vInterfaceWithTypeArguments = const <\n        List/*location: dart:core;List*/<\n        String/*location: dart:core;String*/>>[];\nconst dynamic vInterfaceWithTypeArguments2 = const <\n        Map/*location: dart:core;Map*/<\n        int/*location: dart:core;int*/,\n        List/*location: dart:core;List*/<\n        String/*location: dart:core;String*/>>>[];\n');
        }
    }
    test_const_topLevel_typedList_imported() {
        this.addLibrarySource('/a.dart','class C {}');
        let library = this.checkLibrary('import \'a.dart\';\nconst v = const <C>[];\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nconst List<C> v = const <\n        C/*location: a.dart;C*/>[];\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nconst dynamic v = const <\n        C/*location: a.dart;C*/>[];\n');
        }
    }
    test_const_topLevel_typedList_importedWithPrefix() {
        this.addLibrarySource('/a.dart','class C {}');
        let library = this.checkLibrary('import \'a.dart\' as p;\nconst v = const <p.C>[];\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst List<C> v = const <\n        C/*location: a.dart;C*/>[];\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;\nconst dynamic v = const <\n        C/*location: a.dart;C*/>[];\n');
        }
    }
    test_const_topLevel_typedMap() {
        let library = this.checkLibrary('const vDynamic1 = const <dynamic, int>{};\nconst vDynamic2 = const <int, dynamic>{};\nconst vInterface = const <int, String>{};\nconst vInterfaceWithTypeArguments = const <int, List<String>>{};\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const Map<dynamic, int> vDynamic1 = const <\n        dynamic/*location: dynamic*/,\n        int/*location: dart:core;int*/>{};\nconst Map<int, dynamic> vDynamic2 = const <\n        int/*location: dart:core;int*/,\n        dynamic/*location: dynamic*/>{};\nconst Map<int, String> vInterface = const <\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>{};\nconst Map<int, List<String>> vInterfaceWithTypeArguments = const <\n        int/*location: dart:core;int*/,\n        List/*location: dart:core;List*/<\n        String/*location: dart:core;String*/>>{};\n');
        }else {
            lib6.checkElementText(library,'const dynamic vDynamic1 = const <\n        dynamic/*location: dynamic*/,\n        int/*location: dart:core;int*/>{};\nconst dynamic vDynamic2 = const <\n        int/*location: dart:core;int*/,\n        dynamic/*location: dynamic*/>{};\nconst dynamic vInterface = const <\n        int/*location: dart:core;int*/,\n        String/*location: dart:core;String*/>{};\nconst dynamic vInterfaceWithTypeArguments = const <\n        int/*location: dart:core;int*/,\n        List/*location: dart:core;List*/<\n        String/*location: dart:core;String*/>>{};\n');
        }
    }
    test_const_topLevel_untypedList() {
        let library = this.checkLibrary('const v = const [1, 2, 3];\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const List<int> v = const [1, 2, 3];\n');
        }else {
            lib6.checkElementText(library,'const dynamic v = const [1, 2, 3];\n');
        }
    }
    test_const_topLevel_untypedMap() {
        let library = this.checkLibrary('const v = const {0: \'aaa\', 1: \'bbb\', 2: \'ccc\'};\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const Map<int, String> v = const {0: \'aaa\', 1: \'bbb\', 2: \'ccc\'};\n');
        }else {
            lib6.checkElementText(library,'const dynamic v = const {0: \'aaa\', 1: \'bbb\', 2: \'ccc\'};\n');
        }
    }
    test_constExpr_pushReference_enum_field() {
        let library = this.checkLibrary('enum E {a, b, c}\nfinal vValue = E.a;\nfinal vValues = E.values;\nfinal vIndex = E.a.index;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E a;\n  static const E b;\n  static const E c;\n}\nfinal E vValue;\nfinal List<E> vValues;\nfinal dynamic vIndex/*error: instanceGetter*/;\n');
        }else {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E a;\n  static const E b;\n  static const E c;\n}\nfinal dynamic vValue;\nfinal dynamic vValues;\nfinal dynamic vIndex;\n');
        }
    }
    test_constExpr_pushReference_enum_method() {
        let library = this.checkLibrary('enum E {a}\nfinal vToString = E.a.toString();\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E a;\n}\nfinal String vToString;\n');
        }else {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E a;\n}\nfinal dynamic vToString;\n');
        }
    }
    test_constExpr_pushReference_field_simpleIdentifier() {
        let library = this.checkLibrary('class C {\n  static const a = b;\n  static const b = null;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static const dynamic a =\n        C/*location: test.dart;C*/.\n        b/*location: test.dart;C;b?*/;\n  static const dynamic b = null;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static const dynamic a =\n        C/*location: test.dart;C*/.\n        b/*location: test.dart;C;b?*/;\n  static const dynamic b = null;\n}\n');
        }
    }
    test_constExpr_pushReference_staticMethod_simpleIdentifier() {
        let library = this.checkLibrary('class C {\n  static const a = m;\n  static m() {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static const () → dynamic a =\n        C/*location: test.dart;C*/.\n        m/*location: test.dart;C;m*/;\n  static dynamic m() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static const dynamic a =\n        C/*location: test.dart;C*/.\n        m/*location: test.dart;C;m*/;\n  static dynamic m() {}\n}\n');
        }
    }
    test_constructor_documented() {
        let library = this.checkLibrary('class C {\n  /**\n   * Docs\n   */\n  C();\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  /**\n   * Docs\n   */\n  C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  /**\n   * Docs\n   */\n  C();\n}\n');
        }
    }
    test_constructor_initializers_assertInvocation() {
        let library = this.checkLibrary('class C {\n  const C(int x) : assert(x >= 42);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C(int x) : assert(\n        x/*location: test.dart;C;;x*/ >= 42);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C(int x) : assert(\n        x/*location: test.dart;C;;x*/ >= 42);\n}\n');
        }
    }
    test_constructor_initializers_assertInvocation_message() {
        let library = this.checkLibrary('class C {\n  const C(int x) : assert(x >= 42, \'foo\');\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C(int x) : assert(\n        x/*location: test.dart;C;;x*/ >= 42, \'foo\');\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C(int x) : assert(\n        x/*location: test.dart;C;;x*/ >= 42, \'foo\');\n}\n');
        }
    }
    test_constructor_initializers_field() {
        let library = this.checkLibrary('class C {\n  final x;\n  const C() : x = 42;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C() :\n        x/*location: test.dart;C;x*/ = 42;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C() :\n        x/*location: test.dart;C;x*/ = 42;\n}\n');
        }
    }
    test_constructor_initializers_field_notConst() {
        this.variablesWithNotConstInitializers.add('x');
        let library = this.checkLibrary('class C {\n  final x;\n  const A() : x = foo();\n}\nint foo() => 42;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C() :\n        x/*location: test.dart;C;x*/ =\n        $$invalidConstExpr$$/*location: null*/;\n}\nint foo() {}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C() :\n        x/*location: test.dart;C;x*/ =\n        $$invalidConstExpr$$/*location: null*/;\n}\nint foo() {}\n');
        }
    }
    test_constructor_initializers_field_withParameter() {
        let library = this.checkLibrary('class C {\n  final x;\n  const C(int p) : x = 1 + p;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C(int p) :\n        x/*location: test.dart;C;x*/ = 1 +\n        p/*location: test.dart;C;;p*/;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C(int p) :\n        x/*location: test.dart;C;x*/ = 1 +\n        p/*location: test.dart;C;;p*/;\n}\n');
        }
    }
    test_constructor_initializers_superInvocation_named() {
        let library = this.checkLibrary('class A {\n  const A.aaa(int p);\n}\nclass C extends A {\n  const C() : super.aaa(42);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {\n  const A.aaa(int p);\n}\nclass C extends A {\n  const C() : super.\n        aaa/*location: test.dart;A;aaa*/(42);\n}\n');
        }else {
            lib6.checkElementText(library,'class A {\n  const A.aaa(int p);\n}\nclass C extends A {\n  const C() : super.\n        aaa/*location: test.dart;A;aaa*/(42);\n}\n');
        }
    }
    test_constructor_initializers_superInvocation_namedExpression() {
        let library = this.checkLibrary('class A {\n  const A.aaa(a, {int b});\n}\nclass C extends A {\n  const C() : super.aaa(1, b: 2);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {\n  const A.aaa(dynamic a, {int b});\n}\nclass C extends A {\n  const C() : super.\n        aaa/*location: test.dart;A;aaa*/(1,\n        b/*location: null*/: 2);\n}\n');
        }else {
            lib6.checkElementText(library,'class A {\n  const A.aaa(dynamic a, {int b});\n}\nclass C extends A {\n  const C() : super.\n        aaa/*location: test.dart;A;aaa*/(1,\n        b/*location: null*/: 2);\n}\n');
        }
    }
    test_constructor_initializers_superInvocation_unnamed() {
        let library = this.checkLibrary('class A {\n  const A(int p);\n}\nclass C extends A {\n  const C.ccc() : super(42);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {\n  const A(int p);\n}\nclass C extends A {\n  const C.ccc() : super(42);\n}\n');
        }else {
            lib6.checkElementText(library,'class A {\n  const A(int p);\n}\nclass C extends A {\n  const C.ccc() : super(42);\n}\n');
        }
    }
    test_constructor_initializers_thisInvocation_named() {
        let library = this.checkLibrary('class C {\n  const C() : this.named(1, \'bbb\');\n  const C.named(int a, String b);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C() = C.named : this.\n        named/*location: test.dart;C;named*/(1, \'bbb\');\n  const C.named(int a, String b);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C() = C.named : this.\n        named/*location: test.dart;C;named*/(1, \'bbb\');\n  const C.named(int a, String b);\n}\n');
        }
    }
    test_constructor_initializers_thisInvocation_namedExpression() {
        let library = this.checkLibrary('class C {\n  const C() : this.named(1, b: 2);\n  const C.named(a, {int b});\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C() = C.named : this.\n        named/*location: test.dart;C;named*/(1,\n        b/*location: null*/: 2);\n  const C.named(dynamic a, {int b});\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C() = C.named : this.\n        named/*location: test.dart;C;named*/(1,\n        b/*location: null*/: 2);\n  const C.named(dynamic a, {int b});\n}\n');
        }
    }
    test_constructor_initializers_thisInvocation_unnamed() {
        let library = this.checkLibrary('class C {\n  const C.named() : this(1, \'bbb\');\n  const C(int a, String b);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  const C.named() = C : this(1, \'bbb\');\n  const C(int a, String b);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  const C.named() = C : this(1, \'bbb\');\n  const C(int a, String b);\n}\n');
        }
    }
    test_constructor_redirected_factory_named() {
        let library = this.checkLibrary('class C {\n  factory C() = D.named;\n  C._();\n}\nclass D extends C {\n  D.named() : super._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  factory C() = D.named;\n  C._();\n}\nclass D extends C {\n  D.named();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  factory C() = D.named;\n  C._();\n}\nclass D extends C {\n  D.named();\n}\n');
        }
    }
    test_constructor_redirected_factory_named_generic() {
        let library = this.checkLibrary('class C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\nclass D<T, U> extends C<U, T> {\n  D.named() : super._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\nclass D<T, U> extends C<U, T> {\n  D.named();\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\nclass D<T, U> extends C<U, T> {\n  D.named();\n}\n');
        }
    }
    test_constructor_redirected_factory_named_imported() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';\nclass D extends C {\n  D.named() : super._();\n}\n');
        let library = this.checkLibrary('import \'foo.dart\';\nclass C {\n  factory C() = D.named;\n  C._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass C {\n  factory C() = D.named;\n  C._();\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass C {\n  factory C() = D.named;\n  C._();\n}\n');
        }
    }
    test_constructor_redirected_factory_named_imported_generic() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';\nclass D<T, U> extends C<U, T> {\n  D.named() : super._();\n}\n');
        let library = this.checkLibrary('import \'foo.dart\';\nclass C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\n');
        }
    }
    test_constructor_redirected_factory_named_prefixed() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';\nclass D extends C {\n  D.named() : super._();\n}\n');
        let library = this.checkLibrary('import \'foo.dart\' as foo;\nclass C {\n  factory C() = foo.D.named;\n  C._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\nclass C {\n  factory C() = D.named;\n  C._();\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\nclass C {\n  factory C() = D.named;\n  C._();\n}\n');
        }
    }
    test_constructor_redirected_factory_named_prefixed_generic() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';\nclass D<T, U> extends C<U, T> {\n  D.named() : super._();\n}\n');
        let library = this.checkLibrary('import \'foo.dart\' as foo;\nclass C<T, U> {\n  factory C() = foo.D<U, T>.named;\n  C._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\nclass C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\nclass C<T, U> {\n  factory C() = D<U, T>.named;\n  C._();\n}\n');
        }
    }
    test_constructor_redirected_factory_named_unresolved_class() {
        let library = this.checkLibrary('class C<E> {\n  factory C() = D.named<E>;\n}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<E> {\n  factory C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C<E> {\n  factory C();\n}\n');
        }
    }
    test_constructor_redirected_factory_named_unresolved_constructor() {
        let library = this.checkLibrary('class D {}\nclass C<E> {\n  factory C() = D.named<E>;\n}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class D {\n}\nclass C<E> {\n  factory C();\n}\n');
        }else {
            lib6.checkElementText(library,'class D {\n}\nclass C<E> {\n  factory C();\n}\n');
        }
    }
    test_constructor_redirected_factory_unnamed() {
        let library = this.checkLibrary('class C {\n  factory C() = D;\n  C._();\n}\nclass D extends C {\n  D() : super._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  factory C() = D;\n  C._();\n}\nclass D extends C {\n  D();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  factory C() = D;\n  C._();\n}\nclass D extends C {\n  D();\n}\n');
        }
    }
    test_constructor_redirected_factory_unnamed_generic() {
        let library = this.checkLibrary('class C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\nclass D<T, U> extends C<U, T> {\n  D() : super._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\nclass D<T, U> extends C<U, T> {\n  D();\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\nclass D<T, U> extends C<U, T> {\n  D();\n}\n');
        }
    }
    test_constructor_redirected_factory_unnamed_imported() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';\nclass D extends C {\n  D() : super._();\n}\n');
        let library = this.checkLibrary('import \'foo.dart\';\nclass C {\n  factory C() = D;\n  C._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass C {\n  factory C() = D;\n  C._();\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass C {\n  factory C() = D;\n  C._();\n}\n');
        }
    }
    test_constructor_redirected_factory_unnamed_imported_generic() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';\nclass D<T, U> extends C<U, T> {\n  D() : super._();\n}\n');
        let library = this.checkLibrary('import \'foo.dart\';\nclass C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\n');
        }
    }
    test_constructor_redirected_factory_unnamed_prefixed() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';\nclass D extends C {\n  D() : super._();\n}\n');
        let library = this.checkLibrary('import \'foo.dart\' as foo;\nclass C {\n  factory C() = foo.D;\n  C._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\nclass C {\n  factory C() = D;\n  C._();\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\nclass C {\n  factory C() = D;\n  C._();\n}\n');
        }
    }
    test_constructor_redirected_factory_unnamed_prefixed_generic() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';\nclass D<T, U> extends C<U, T> {\n  D() : super._();\n}\n');
        let library = this.checkLibrary('import \'foo.dart\' as foo;\nclass C<T, U> {\n  factory C() = foo.D<U, T>;\n  C._();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\nclass C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\nclass C<T, U> {\n  factory C() = D<U, T>;\n  C._();\n}\n');
        }
    }
    test_constructor_redirected_factory_unnamed_unresolved() {
        let library = this.checkLibrary('class C<E> {\n  factory C() = D<E>;\n}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<E> {\n  factory C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C<E> {\n  factory C();\n}\n');
        }
    }
    test_constructor_redirected_thisInvocation_named() {
        let library = this.checkLibrary('class C {\n  C.named();\n  C() : this.named();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C.named();\n  C() = C.named;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C.named();\n  C() = C.named;\n}\n');
        }
    }
    test_constructor_redirected_thisInvocation_named_generic() {
        let library = this.checkLibrary('class C<T> {\n  C.named();\n  C() : this.named();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n  C.named();\n  C() = C<T>.named;\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n  C.named();\n  C() = C<T>.named;\n}\n');
        }
    }
    test_constructor_redirected_thisInvocation_unnamed() {
        let library = this.checkLibrary('class C {\n  C();\n  C.named() : this();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C();\n  C.named() = C;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C();\n  C.named() = C;\n}\n');
        }
    }
    test_constructor_redirected_thisInvocation_unnamed_generic() {
        let library = this.checkLibrary('class C<T> {\n  C();\n  C.named() : this();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n  C();\n  C.named() = C<T>;\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n  C();\n  C.named() = C<T>;\n}\n');
        }
    }
    test_constructor_withCycles_const() {
        let library = this.checkLibrary('class C {\n  final x;\n  const C() : x = const D();\n}\nclass D {\n  final x;\n  const D() : x = const C();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C() :\n        x/*location: test.dart;C;x*/ = const\n        D/*location: test.dart;D*/();\n}\nclass D {\n  final dynamic x;\n  const D() :\n        x/*location: test.dart;D;x*/ = const\n        C/*location: test.dart;C*/();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  const C() :\n        x/*location: test.dart;C;x*/ = const\n        D/*location: test.dart;D*/();\n}\nclass D {\n  final dynamic x;\n  const D() :\n        x/*location: test.dart;D;x*/ = const\n        C/*location: test.dart;C*/();\n}\n');
        }
    }
    test_constructor_withCycles_nonConst() {
        let library = this.checkLibrary('class C {\n  final x;\n  C() : x = new D();\n}\nclass D {\n  final x;\n  D() : x = new C();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  C();\n}\nclass D {\n  final dynamic x;\n  D();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x;\n  C();\n}\nclass D {\n  final dynamic x;\n  D();\n}\n');
        }
    }
    test_defaultValue_refersToGenericClass_constructor() {
        let library = this.checkLibrary('class B<T> {\n  const B();\n}\nclass C<T> {\n  const C([B<T> b = const B()]);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T> {\n  const B();\n}\nclass C<T> {\n  const C([B<T> b = const\n        B/*location: test.dart;B*/()]);\n}\n');
        }else {
            lib6.checkElementText(library,'class B<T> {\n  const B();\n}\nclass C<T> {\n  const C([B<T> b = const\n        B/*location: test.dart;B*/()]);\n}\n');
        }
    }
    test_defaultValue_refersToGenericClass_constructor2() {
        let library = this.checkLibrary('abstract class A<T> {}\nclass B<T> implements A<T> {\n  const B();\n}\nclass C<T> implements A<Iterable<T>> {\n  const C([A<T> a = const B()]);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class A<T> {\n}\nclass B<T> implements A<T> {\n  const B();\n}\nclass C<T> implements A<Iterable<T>> {\n  const C([A<T> a = const\n        B/*location: test.dart;B*/()]);\n}\n');
        }else {
            lib6.checkElementText(library,'abstract class A<T> {\n}\nclass B<T> implements A<T> {\n  const B();\n}\nclass C<T> implements A<Iterable<T>> {\n  const C([A<T> a = const\n        B/*location: test.dart;B*/()]);\n}\n');
        }
    }
    test_defaultValue_refersToGenericClass_functionG() {
        let library = this.checkLibrary('class B<T> {\n  const B();\n}\nvoid foo<T>([B<T> b = const B()]) {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T> {\n  const B();\n}\nvoid foo<T>([B<T> b = const\n        B/*location: test.dart;B*/()]) {}\n');
        }else {
            lib6.checkElementText(library,'class B<T> {\n  const B();\n}\nvoid foo<T>([B<T> b = const\n        B/*location: test.dart;B*/()]) {}\n');
        }
    }
    test_defaultValue_refersToGenericClass_methodG() {
        let library = this.checkLibrary('class B<T> {\n  const B();\n}\nclass C {\n  void foo<T>([B<T> b = const B()]) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T> {\n  const B();\n}\nclass C {\n  void foo<T>([B<T> b = const\n        B/*location: test.dart;B*/()]) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class B<T> {\n  const B();\n}\nclass C {\n  void foo<T>([B<T> b = const\n        B/*location: test.dart;B*/()]) {}\n}\n');
        }
    }
    test_defaultValue_refersToGenericClass_methodG_classG() {
        let library = this.checkLibrary('class B<T1, T2> {\n  const B();\n}\nclass C<E1> {\n  void foo<E2>([B<E1, E2> b = const B()]) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T1, T2> {\n  const B();\n}\nclass C<E1> {\n  void foo<E2>([B<E1, E2> b = const\n        B/*location: test.dart;B*/()]) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class B<T1, T2> {\n  const B();\n}\nclass C<E1> {\n  void foo<E2>([B<E1, E2> b = const\n        B/*location: test.dart;B*/()]) {}\n}\n');
        }
    }
    test_defaultValue_refersToGenericClass_methodNG() {
        let library = this.checkLibrary('class B<T> {\n  const B();\n}\nclass C<T> {\n  void foo([B<T> b = const B()]) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T> {\n  const B();\n}\nclass C<T> {\n  void foo([B<T> b = const\n        B/*location: test.dart;B*/()]) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class B<T> {\n  const B();\n}\nclass C<T> {\n  void foo([B<T> b = const\n        B/*location: test.dart;B*/()]) {}\n}\n');
        }
    }
    test_enum_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nenum E { v }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs\n */\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs\n */\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\n');
        }
    }
    test_enum_value_documented() {
        let library = this.checkLibrary('enum E {\n  /**\n   * Docs\n   */\n  v\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  /**\n   * Docs\n   */\n  static const E v;\n}\n');
        }else {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  /**\n   * Docs\n   */\n  static const E v;\n}\n');
        }
    }
    test_enum_values() {
        let library = this.checkLibrary('enum E { v1, v2 }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v1;\n  static const E v2;\n}\n');
        }else {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v1;\n  static const E v2;\n}\n');
        }
    }
    test_enums() {
        let library = this.checkLibrary('enum E1 { v1 } enum E2 { v2 }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E1 {\n  synthetic final int index;\n  synthetic static const List<E1> values;\n  static const E1 v1;\n}\nenum E2 {\n  synthetic final int index;\n  synthetic static const List<E2> values;\n  static const E2 v2;\n}\n');
        }else {
            lib6.checkElementText(library,'enum E1 {\n  synthetic final int index;\n  synthetic static const List<E1> values;\n  static const E1 v1;\n}\nenum E2 {\n  synthetic final int index;\n  synthetic static const List<E2> values;\n  static const E2 v2;\n}\n');
        }
    }
    test_error_extendsEnum() {
        let library = this.checkLibrary('enum E {a, b, c}\n\nclass M {}\n\nclass A extends E {\n  foo() {}\n}\n\nclass B implements E, M {\n  foo() {}\n}\n\nclass C extends Object with E, M {\n  foo() {}\n}\n\nclass D = Object with M, E;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E a;\n  static const E b;\n  static const E c;\n}\nclass M {\n}\nclass A {\n  dynamic foo() {}\n}\nclass B implements M {\n  dynamic foo() {}\n}\nclass C extends Object with M {\n  synthetic C();\n  dynamic foo() {}\n}\nclass alias D extends Object with M {\n  synthetic D() = Object;\n}\n');
        }else {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E a;\n  static const E b;\n  static const E c;\n}\nclass M {\n}\nclass A {\n  dynamic foo() {}\n}\nclass B implements M {\n  dynamic foo() {}\n}\nclass C extends Object with M {\n  synthetic C();\n  dynamic foo() {}\n}\nclass alias D extends Object with M {\n  synthetic D() = Object;\n}\n');
        }
    }
    test_executable_parameter_type_typedef() {
        let library = this.checkLibrary('typedef F(int p);\nmain(F f) {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(int p);\ndynamic main(F f) {}\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F(int p);\ndynamic main(F f) {}\n');
        }
    }
    test_export_class() {
        this.addLibrarySource('/a.dart','class C {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_export_class_type_alias() {
        this.addLibrarySource('/a.dart','class C {} exends _D with _E; class _D {} class _E {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_export_configurations_useDefault() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library : any = this.checkLibrary('export \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'foo.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'foo.dart\';\n');
        }
        expect(op(Op.INDEX,library.exports,0).uri,'foo.dart');
        expect(op(Op.INDEX,library.exports,0).exportedLibrary.source.shortName,'foo.dart');
    }
    test_export_configurations_useFirst() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library : any = this.checkLibrary('export \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'foo_io.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'foo_io.dart\';\n');
        }
        expect(op(Op.INDEX,library.exports,0).uri,'foo_io.dart');
        expect(op(Op.INDEX,library.exports,0).exportedLibrary.source.shortName,'foo_io.dart');
    }
    test_export_configurations_useSecond() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.context.declaredVariables.define('dart.library.html','true');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library : any = this.checkLibrary('export \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'foo_html.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'foo_html.dart\';\n');
        }
        let export : any = op(Op.INDEX,library.exports,0);
        expect(export.uri,'foo_html.dart');
        expect(export.exportedLibrary.source.shortName,'foo_html.dart');
    }
    test_export_function() {
        this.addLibrarySource('/a.dart','f() {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_export_getter() {
        this.addLibrarySource('/a.dart','get f() => null;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_export_hide() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('export "dart:async" hide Stream, Future;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'dart:async\' hide Stream, Future;\n');
        }else {
            lib6.checkElementText(library,'export \'dart:async\' hide Stream, Future;\n');
        }
    }
    test_export_multiple_combinators() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('export "dart:async" hide Stream show Future;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'dart:async\' hide Stream show Future;\n');
        }else {
            lib6.checkElementText(library,'export \'dart:async\' hide Stream show Future;\n');
        }
    }
    test_export_setter() {
        this.addLibrarySource('/a.dart','void set f(value) {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_export_show() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('export "dart:async" show Future, Stream;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'dart:async\' show Future, Stream;\n');
        }else {
            lib6.checkElementText(library,'export \'dart:async\' show Future, Stream;\n');
        }
    }
    test_export_typedef() {
        this.addLibrarySource('/a.dart','typedef F();');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_export_variable() {
        this.addLibrarySource('/a.dart','var x;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_export_variable_const() {
        this.addLibrarySource('/a.dart','const x = 0;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_export_variable_final() {
        this.addLibrarySource('/a.dart','final x = 0;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_exportImport_configurations_useDefault() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        this.addLibrarySource('/bar.dart','export \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        let library : any = this.checkLibrary('import \'bar.dart\';\nclass B extends A {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'bar.dart\';\nclass B extends A {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'bar.dart\';\nclass B extends A {\n}\n');
        }
        let typeA = library.definingCompilationUnit.getType('B').supertype;
        expect(typeA.element.source.shortName,'foo.dart');
    }
    test_exportImport_configurations_useFirst() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        this.addLibrarySource('/bar.dart','export \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n');
        let library = this.checkLibrary('import \'bar.dart\';\nclass B extends A {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'bar.dart\';\nclass B extends A {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'bar.dart\';\nclass B extends A {\n}\n');
        }
        let typeA = library.definingCompilationUnit.getType('B').supertype;
        expect(typeA.element.source.shortName,'foo_io.dart');
    }
    test_exports() {
        this.addLibrarySource('/a.dart','library a;');
        this.addLibrarySource('/b.dart','library b;');
        let library = this.checkLibrary('export "a.dart"; export "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\nexport \'b.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\nexport \'b.dart\';\n');
        }
    }
    test_expr_invalid_typeParameter_asPrefix() {
        this.variablesWithNotConstInitializers.add('f');
        let library = this.checkLibrary('class C<T> {\n  final f = T.k;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n  final dynamic f =\n        $$invalidConstExpr$$/*location: null*/;\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n  final dynamic f =\n        $$invalidConstExpr$$/*location: null*/;\n}\n');
        }
    }
    test_field_covariant() {
        let library = this.checkLibrary('class C {\n  covariant int x;\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  covariant int x;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  covariant int x;\n}\n');
        }
    }
    test_field_documented() {
        let library = this.checkLibrary('class C {\n  /**\n   * Docs\n   */\n  var x;\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  /**\n   * Docs\n   */\n  dynamic x;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  /**\n   * Docs\n   */\n  dynamic x;\n}\n');
        }
    }
    test_field_formal_param_inferred_type_implicit() {
        let library = this.checkLibrary('class C extends D { var v; C(this.v); }' + ' abstract class D { int get v; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n  int v;\n  C(int this.v);\n}\nabstract class D {\n  int get v;\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n  dynamic v;\n  C(dynamic this.v);\n}\nabstract class D {\n  int get v;\n}\n');
        }
    }
    test_field_inferred_type_nonStatic_explicit_initialized() {
        let library = this.checkLibrary('class C { num v = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  num v;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  num v;\n}\n');
        }
    }
    test_field_inferred_type_nonStatic_implicit_initialized() {
        let library = this.checkLibrary('class C { var v = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int v;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic v;\n}\n');
        }
    }
    test_field_inferred_type_nonStatic_implicit_uninitialized() {
        let library = this.checkLibrary('class C extends D { var v; } abstract class D { int get v; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n  int v;\n}\nabstract class D {\n  int get v;\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n  dynamic v;\n}\nabstract class D {\n  int get v;\n}\n');
        }
    }
    test_field_inferred_type_static_implicit_initialized() {
        let library = this.checkLibrary('class C { static var v = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static int v;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static dynamic v;\n}\n');
        }
    }
    test_field_propagatedType_const_noDep() {
        let library = this.checkLibrary('class C {\n  static const x = 0;\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static const int x = 0;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static const dynamic x = 0;\n}\n');
        }
    }
    test_field_propagatedType_final_dep_inLib() {
        this.addLibrarySource('/a.dart','final a = 1;');
        let library = this.checkLibrary('import "a.dart";\nclass C {\n  final b = a / 2;\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nclass C {\n  final num b =\n        a/*location: a.dart;a?*/ / 2;\n}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nclass C {\n  final dynamic b =\n        a/*location: a.dart;a?*/ / 2;\n}\n');
        }
    }
    test_field_propagatedType_final_dep_inPart() {
        this.addSource('/a.dart','part of lib; final a = 1;');
        let library = this.checkLibrary('library lib;\npart "a.dart";\nclass C {\n  final b = a / 2;\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library lib;\npart \'a.dart\';\nclass C {\n  final num b =\n        a/*location: test.dart;a.dart;a?*/ / 2;\n}\n--------------------\nunit: a.dart\n\nfinal int a;\n');
        }else {
            lib6.checkElementText(library,'library lib;\npart \'a.dart\';\nclass C {\n  final dynamic b =\n        a/*location: test.dart;a.dart;a?*/ / 2;\n}\n--------------------\nunit: a.dart\n\nfinal dynamic a;\n');
        }
    }
    test_field_propagatedType_final_noDep_instance() {
        let library = this.checkLibrary('class C {\n  final x = 0;\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  final int x = 0;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  final dynamic x = 0;\n}\n');
        }
    }
    test_field_propagatedType_final_noDep_static() {
        let library = this.checkLibrary('class C {\n  static final x = 0;\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static final int x;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static final dynamic x;\n}\n');
        }
    }
    test_field_static_final_untyped() {
        let library = this.checkLibrary('class C { static final x = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static final int x;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static final dynamic x;\n}\n');
        }
    }
    test_field_untyped() {
        let library = this.checkLibrary('class C { var x = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int x;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n}\n');
        }
    }
    test_function_async() {
        let library = this.checkLibrary('import \'dart:async\';\nFuture f() async {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\nFuture<dynamic> f() async {}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\nFuture<dynamic> f() async {}\n');
        }
    }
    test_function_asyncStar() {
        let library = this.checkLibrary('import \'dart:async\';\nStream f() async* {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\nStream<dynamic> f() async* {}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\nStream<dynamic> f() async* {}\n');
        }
    }
    test_function_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nf() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }
    }
    test_function_entry_point() {
        let library = this.checkLibrary('main() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic main() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic main() {}\n');
        }
    }
    test_function_entry_point_in_export() {
        this.addLibrarySource('/a.dart','library a; main() {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_function_entry_point_in_export_hidden() {
        this.addLibrarySource('/a.dart','library a; main() {}');
        let library = this.checkLibrary('export "a.dart" hide main;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\' hide main;\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\' hide main;\n');
        }
    }
    test_function_entry_point_in_part() {
        this.addSource('/a.dart','part of my.lib; main() {}');
        let library = this.checkLibrary('library my.lib; part "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\n--------------------\nunit: a.dart\n\ndynamic main() {}\n');
        }else {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\n--------------------\nunit: a.dart\n\ndynamic main() {}\n');
        }
    }
    test_function_external() {
        let library = this.checkLibrary('external f();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'external dynamic f() {}\n');
        }else {
            lib6.checkElementText(library,'external dynamic f() {}\n');
        }
    }
    test_function_parameter_final() {
        let library = this.checkLibrary('f(final x) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(final dynamic x) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f(final dynamic x) {}\n');
        }
    }
    test_function_parameter_kind_named() {
        let library = this.checkLibrary('f({x}) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f({dynamic x}) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f({dynamic x}) {}\n');
        }
    }
    test_function_parameter_kind_positional() {
        let library = this.checkLibrary('f([x]) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f([dynamic x]) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f([dynamic x]) {}\n');
        }
    }
    test_function_parameter_kind_required() {
        let library = this.checkLibrary('f(x) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(dynamic x) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f(dynamic x) {}\n');
        }
    }
    test_function_parameter_parameters() {
        let library = this.checkLibrary('f(g(x, y)) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f((dynamic, dynamic) → dynamic g) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f((dynamic, dynamic) → dynamic g) {}\n');
        }
    }
    test_function_parameter_return_type() {
        let library = this.checkLibrary('f(int g()) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(() → int g) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f(() → int g) {}\n');
        }
    }
    test_function_parameter_return_type_void() {
        let library = this.checkLibrary('f(void g()) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(() → void g) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f(() → void g) {}\n');
        }
    }
    test_function_parameter_type() {
        let library = this.checkLibrary('f(int i) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(int i) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f(int i) {}\n');
        }
    }
    test_function_parameters() {
        let library = this.checkLibrary('f(x, y) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(dynamic x, dynamic y) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f(dynamic x, dynamic y) {}\n');
        }
    }
    test_function_return_type() {
        let library = this.checkLibrary('int f() => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int f() {}\n');
        }else {
            lib6.checkElementText(library,'int f() {}\n');
        }
    }
    test_function_return_type_implicit() {
        let library = this.checkLibrary('f() => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }
    }
    test_function_return_type_void() {
        let library = this.checkLibrary('void f() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f() {}\n');
        }else {
            lib6.checkElementText(library,'void f() {}\n');
        }
    }
    test_function_type_parameter() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('T f<T, U>(U u) => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'T f<T, U>(U u) {}\n');
        }else {
            lib6.checkElementText(library,'T f<T, U>(U u) {}\n');
        }
    }
    test_function_type_parameter_with_function_typed_parameter() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('void f<T, U>(T x(U u)) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>((U) → T x) {}\n');
        }else {
            lib6.checkElementText(library,'void f<T, U>((U) → T x) {}\n');
        }
    }
    test_functions() {
        let library = this.checkLibrary('f() {} g() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}\ndynamic g() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f() {}\ndynamic g() {}\n');
        }
    }
    test_futureOr() {
        let library = this.checkLibrary('import "dart:async"; FutureOr<int> x;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\nFutureOr<int> x;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\ndynamic x;\n');
        }
        let variables = library.definingCompilationUnit.topLevelVariables;
        expect(variables,hasLength(1));
        if (this.createOptions().strongMode) {
            expect(op(Op.INDEX,variables,0).type.toString(),'FutureOr<int>');
        }else {
            expect(op(Op.INDEX,variables,0).type.toString(),'dynamic');
        }
    }
    test_futureOr_const() {
        let library = this.checkLibrary('import "dart:async"; const x = FutureOr;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\nconst Type x =\n        FutureOr/*location: dart:async;FutureOr*/;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\nconst dynamic x =\n        FutureOr/*location: dart:async;FutureOr*/;\n');
        }
        let variables = library.definingCompilationUnit.topLevelVariables;
        expect(variables,hasLength(1));
        let x = op(Op.INDEX,variables,0) as any;
        if (this.createOptions().strongMode) {
            expect(x.type.toString(),'Type');
        }else {
            expect(x.type.toString(),'dynamic');
        }
        expect(x.constantInitializer.toString(),'FutureOr');
    }
    test_futureOr_inferred() {
        let library = this.checkLibrary('import "dart:async";\nFutureOr<int> f() => null;\nvar x = f();\nvar y = x.then((z) => z.asDouble());\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\nFutureOr<int> x;\ndynamic y;\nFutureOr<int> f() {}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\ndynamic x;\ndynamic y;\ndynamic f() {}\n');
        }
        let variables = library.definingCompilationUnit.topLevelVariables;
        expect(variables,hasLength(2));
        let x = op(Op.INDEX,variables,0);
        expect(x.name,'x');
        let y = op(Op.INDEX,variables,1);
        expect(y.name,'y');
        if (this.createOptions().strongMode) {
            expect(x.type.toString(),'FutureOr<int>');
            expect(y.type.toString(),'dynamic');
        }else {
            expect(x.type.toString(),'dynamic');
            expect(y.type.toString(),'dynamic');
        }
    }
    test_generic_gClass_gMethodStatic() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C<T, U> {\n  static void m<V, W>(V v, W w) {\n    void f<X, Y>(V v, W w, X x, Y y) {\n    }\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n  static void m<V, W>(V v, W w) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n  static void m<V, W>(V v, W w) {}\n}\n');
        }
    }
    test_genericFunction_asFunctionReturnType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('int Function(int a, String b) f() => null;\n');
        lib6.checkElementText(library,'(int, String) → int f() {}\n');
    }
    test_genericFunction_asFunctionTypedParameterReturnType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('void f(int Function(int a, String b) p(num c)) => null;\n');
        lib6.checkElementText(library,'void f((num) → (int, String) → int p) {}\n');
    }
    test_genericFunction_asGenericFunctionReturnType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('typedef F = void Function(String a) Function(int b);\n');
        lib6.checkElementText(library,'typedef F = (String) → void Function(int b);\n');
    }
    test_genericFunction_asMethodReturnType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('class C {\n  int Function(int a, String b) m() => null;\n}\n');
        lib6.checkElementText(library,'class C {\n  (int, String) → int m() {}\n}\n');
    }
    test_genericFunction_asParameterType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('void f(int Function(int a, String b) p) => null;\n');
        lib6.checkElementText(library,'void f((int, String) → int p) {}\n');
    }
    test_genericFunction_asTopLevelVariableType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('int Function(int a, String b) v;\n');
        lib6.checkElementText(library,'(int, String) → int v;\n');
    }
    test_getElement_constructor_named() {
        let text : string = 'class C { C.named(); }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getNamedConstructor('named');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareConstructorElements(resynthesized,original,'C.constructor named');
    }
    test_getElement_constructor_unnamed() {
        let text : string = 'class C { C(); }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').unnamedConstructor;
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareConstructorElements(resynthesized,original,'C.constructor');
    }
    test_getElement_field() {
        let text : string = 'class C { var f; }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getField('f');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareFieldElements(resynthesized,original,'C.field f');
    }
    test_getElement_getter() {
        let text : string = 'class C { get f => null; }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getGetter('f');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.comparePropertyAccessorElements(resynthesized,original,'C.getter f');
    }
    test_getElement_method() {
        let text : string = 'class C { f() {} }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getMethod('f');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareMethodElements(resynthesized,original,'C.method f');
    }
    test_getElement_operator() {
        let text : string = 'class C { operator+(x) => null; }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getMethod('+');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareMethodElements(resynthesized,original,'C.operator+');
    }
    test_getElement_setter() {
        let text : string = 'class C { void set f(value) {} }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getSetter('f');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.comparePropertyAccessorElements(resynthesized,original,'C.setter f');
    }
    test_getElement_unit() {
        let text : string = 'class C { f() {} }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).definingCompilationUnit;
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareCompilationUnitElements(resynthesized,original);
    }
    test_getter_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nget x => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs\n */\ndynamic get x {}\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs\n */\ndynamic get x {}\n');
        }
    }
    test_getter_external() {
        let library = this.checkLibrary('external int get x;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'external int get x {}\n');
        }else {
            lib6.checkElementText(library,'external int get x {}\n');
        }
    }
    test_getter_inferred_type_nonStatic_implicit_return() {
        let library = this.checkLibrary('class C extends D { get f => null; } abstract class D { int get f; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n  int get f {}\n}\nabstract class D {\n  int get f;\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n  dynamic get f {}\n}\nabstract class D {\n  int get f;\n}\n');
        }
    }
    test_getters() {
        let library = this.checkLibrary('int get x => null; get y => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int get x {}\ndynamic get y {}\n');
        }else {
            lib6.checkElementText(library,'int get x {}\ndynamic get y {}\n');
        }
    }
    test_implicitTopLevelVariable_getterFirst() {
        let library = this.checkLibrary('int get x => 0; void set x(int value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int get x {}\nvoid set x(int value) {}\n');
        }else {
            lib6.checkElementText(library,'int get x {}\nvoid set x(int value) {}\n');
        }
    }
    test_implicitTopLevelVariable_setterFirst() {
        let library = this.checkLibrary('void set x(int value) {} int get x => 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void set x(int value) {}\nint get x {}\n');
        }else {
            lib6.checkElementText(library,'void set x(int value) {}\nint get x {}\n');
        }
    }
    test_import_configurations_useDefault() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library = this.checkLibrary('import \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n\nclass B extends A {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass B extends A {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';\nclass B extends A {\n}\n');
        }
        let typeA = library.definingCompilationUnit.getType('B').supertype;
        expect(typeA.element.source.shortName,'foo.dart');
    }
    test_import_configurations_useFirst() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library = this.checkLibrary('import \'foo.dart\'\n  if (dart.library.io) \'foo_io.dart\'\n  if (dart.library.html) \'foo_html.dart\';\n\nclass B extends A {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo_io.dart\';\nclass B extends A {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo_io.dart\';\nclass B extends A {\n}\n');
        }
        let typeA = library.definingCompilationUnit.getType('B').supertype;
        expect(typeA.element.source.shortName,'foo_io.dart');
    }
    test_import_deferred() {
        this.addLibrarySource('/a.dart','f() {}');
        let library = this.checkLibrary('import "a.dart" deferred as p; main() { p.f(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' deferred as p;\ndynamic main() {}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' deferred as p;\ndynamic main() {}\n');
        }
    }
    test_import_hide() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('import "dart:async" hide Stream, Completer; Future f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' hide Stream, Completer;\nFuture<dynamic> f;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\' hide Stream, Completer;\nFuture<dynamic> f;\n');
        }
    }
    test_import_invalidUri_metadata() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        let resynthesized : any = this.checkLibrary('@foo\nimport \'\';\n');
        if (this.isStrongMode) {
            lib6.checkElementText(resynthesized,'@\n        foo/*location: null*/\nimport \'\';\n');
        }else {
            lib6.checkElementText(resynthesized,'@\n        foo/*location: null*/\nimport \'\';\n');
        }
    }
    test_import_multiple_combinators() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('import "dart:async" hide Stream show Future; Future f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' hide Stream show Future;\nFuture<dynamic> f;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\' hide Stream show Future;\nFuture<dynamic> f;\n');
        }
    }
    test_import_prefixed() {
        this.addLibrarySource('/a.dart','library a; class C {}');
        let library = this.checkLibrary('import "a.dart" as a; a.C c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as a;\nC c;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as a;\nC c;\n');
        }
    }
    test_import_self() {
        let resynthesized : any = this.checkLibrary('import \'test.dart\' as p;\nclass C {}\nclass D extends p.C {} // Prevent "unused import" warning\n');
        expect(resynthesized.imports,hasLength(2));
        expect(op(Op.INDEX,resynthesized.imports,0).importedLibrary.location,resynthesized.location);
        expect(op(Op.INDEX,resynthesized.imports,1).importedLibrary.isDartCore,true);
        if (this.isStrongMode) {
            lib6.checkElementText(resynthesized,'import \'test.dart\' as p;\nclass C {\n}\nclass D extends C {\n}\n');
        }else {
            lib6.checkElementText(resynthesized,'import \'test.dart\' as p;\nclass C {\n}\nclass D extends C {\n}\n');
        }
    }
    test_import_short_absolute() {
        this.testFile = '/my/project/bin/test.dart';
        let destinationPath = this.resourceProvider.pathContext.fromUri(lib7.Uri.parse('/a.dart'));
        this.addLibrarySource(destinationPath,'class C {}');
        let library = this.checkLibrary('import "/a.dart"; C c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'/a.dart\';\nC c;\n');
        }else {
            lib6.checkElementText(library,'import \'/a.dart\';\nC c;\n');
        }
    }
    test_import_show() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('import "dart:async" show Future, Stream;\nFuture f;\nStream s;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' show Future, Stream;\nFuture<dynamic> f;\nStream<dynamic> s;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\' show Future, Stream;\nFuture<dynamic> f;\nStream<dynamic> s;\n');
        }
    }
    test_imports() {
        this.addLibrarySource('/a.dart','library a; class C {}');
        this.addLibrarySource('/b.dart','library b; class D {}');
        let library = this.checkLibrary('import "a.dart"; import "b.dart"; C c; D d;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nimport \'b.dart\';\nC c;\nD d;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nimport \'b.dart\';\nC c;\nD d;\n');
        }
    }
    test_inferred_function_type_for_variable_in_generic_function() {
        let library = this.checkLibrary('f<U, V>() {\n  var x = () => 0;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f<U, V>() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f<U, V>() {}\n');
        }
    }
    test_inferred_function_type_in_generic_class_constructor() {
        let library = this.checkLibrary('class C<U, V> {\n  final x;\n  C() : x = (() => () => 0);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<U, V> {\n  final dynamic x;\n  C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C<U, V> {\n  final dynamic x;\n  C();\n}\n');
        }
    }
    test_inferred_function_type_in_generic_class_getter() {
        let library = this.checkLibrary('class C<U, V> {\n  get x => () => () => 0;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<U, V> {\n  dynamic get x {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<U, V> {\n  dynamic get x {}\n}\n');
        }
    }
    test_inferred_function_type_in_generic_class_in_generic_method() {
        let library = this.checkLibrary('class C<T> {\n  f<U, V>() {\n    print(() => () => 0);\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n  dynamic f<U, V>() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n  dynamic f<U, V>() {}\n}\n');
        }
    }
    test_inferred_function_type_in_generic_class_setter() {
        let library = this.checkLibrary('class C<U, V> {\n  void set x(value) {\n    print(() => () => 0);\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<U, V> {\n  void set x(dynamic value) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<U, V> {\n  void set x(dynamic value) {}\n}\n');
        }
    }
    test_inferred_function_type_in_generic_closure() {
        if (!this.createOptions().strongMode) {
            return;
        }
        let library = this.checkLibrary('f<T>() {\n  print(/*<U, V>*/() => () => 0);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f<T>() {}\n');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_inferred_generic_function_type_in_generic_closure() {
        if (!this.createOptions().strongMode) {
            return;
        }
        let library = this.checkLibrary('f<T>() {\n  print(/*<U, V>*/() => /*<W, X, Y, Z>*/() => 0);\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f<T>() {}\n');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_inferred_type_is_typedef() {
        let library = this.checkLibrary('typedef int F(String s);' + ' class C extends D { var v; }' + ' abstract class D { F get v; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef int F(String s);\nclass C extends D {\n  F v;\n}\nabstract class D {\n  F get v;\n}\n');
        }else {
            lib6.checkElementText(library,'typedef int F(String s);\nclass C extends D {\n  dynamic v;\n}\nabstract class D {\n  F get v;\n}\n');
        }
    }
    test_inferred_type_refers_to_bound_type_param() {
        let library = this.checkLibrary('class C<T> extends D<int, T> { var v; }' + ' abstract class D<U, V> { Map<V, U> get v; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> extends D<int, T> {\n  Map<T, int> v;\n}\nabstract class D<U, V> {\n  Map<V, U> get v;\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T> extends D<int, T> {\n  dynamic v;\n}\nabstract class D<U, V> {\n  Map<V, U> get v;\n}\n');
        }
    }
    test_inferred_type_refers_to_function_typed_param_of_typedef() : void {
        let library = this.checkLibrary('typedef void F(int g(String s));\nh(F f) => null;\nvar v = h(/*info:INFERRED_TYPE_CLOSURE*/(y) {});\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef void F((String) → int g);\ndynamic v;\ndynamic h(F f) {}\n');
        }else {
            lib6.checkElementText(library,'typedef void F((String) → int g);\ndynamic v;\ndynamic h(F f) {}\n');
        }
    }
    test_inferred_type_refers_to_function_typed_parameter_type_generic_class() {
        let library = this.checkLibrary('class C<T, U> extends D<U, int> { void f(int x, g) {} }' + ' abstract class D<V, W> { void f(int x, W g(V s)); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> extends D<U, int> {\n  void f(int x, (U) → int g) {}\n}\nabstract class D<V, W> {\n  void f(int x, (V) → W g);\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> extends D<U, int> {\n  void f(int x, dynamic g) {}\n}\nabstract class D<V, W> {\n  void f(int x, (V) → W g);\n}\n');
        }
    }
    test_inferred_type_refers_to_function_typed_parameter_type_other_lib() {
        this.addLibrarySource('/a.dart','import "b.dart"; abstract class D extends E {}');
        this.addLibrarySource('/b.dart','abstract class E { void f(int x, int g(String s)); }');
        let library = this.checkLibrary('import "a.dart"; class C extends D { void f(int x, g) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nclass C extends D {\n  void f(int x, (String) → int g) {}\n}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nclass C extends D {\n  void f(int x, dynamic g) {}\n}\n');
        }
    }
    test_inferred_type_refers_to_method_function_typed_parameter_type() {
        let library = this.checkLibrary('class C extends D { void f(int x, g) {} }' + ' abstract class D { void f(int x, int g(String s)); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n  void f(int x, (String) → int g) {}\n}\nabstract class D {\n  void f(int x, (String) → int g);\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n  void f(int x, dynamic g) {}\n}\nabstract class D {\n  void f(int x, (String) → int g);\n}\n');
        }
    }
    test_inferred_type_refers_to_nested_function_typed_param() {
        let library = this.checkLibrary('f(void g(int x, void h())) => null;\nvar v = f((x, y) {});\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic v;\ndynamic f((int, () → void) → void g) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic v;\ndynamic f((int, () → void) → void g) {}\n');
        }
    }
    test_inferred_type_refers_to_nested_function_typed_param_named() {
        let library = this.checkLibrary('f({void g(int x, void h())}) => null;\nvar v = f(g: (x, y) {});\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic v;\ndynamic f({(int, () → void) → void g}) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic v;\ndynamic f({(int, () → void) → void g}) {}\n');
        }
    }
    test_inferred_type_refers_to_setter_function_typed_parameter_type() {
        let library = this.checkLibrary('class C extends D { void set f(g) {} }' + ' abstract class D { void set f(int g(String s)); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n  void set f((String) → int g) {}\n}\nabstract class D {\n  void set f((String) → int g);\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n  void set f(dynamic g) {}\n}\nabstract class D {\n  void set f((String) → int g);\n}\n');
        }
    }
    test_inferredType_definedInSdkLibraryPart() : void {
        this.addSource('/a.dart','import \'dart:async\';\nclass A {\n  m(Stream p) {}\n}\n');
        let library : any = this.checkLibrary('import \'a.dart\';\nclass B extends A {\n  m(p) {}\n}\n  ');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nclass B extends A {\n  dynamic m(Stream<dynamic> p) {}\n}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nclass B extends A {\n  dynamic m(dynamic p) {}\n}\n');
        }
        let b : any = op(Op.INDEX,library.definingCompilationUnit.types,0);
        let p : any = op(Op.INDEX,op(Op.INDEX,b.methods,0).parameters,0);
        let streamElement : any = p.type.element;
        if (is(streamElement, any)) {
            expect(streamElement.source,isNot(streamElement.library.source));
        }
    }
    test_inferredType_usesSyntheticFunctionType_functionTypedParam() : void {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('int f(int x(String y)) => null;\nString g(int x(String y)) => null;\nvar v = [f, g];\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'List<((String) → int) → Object> v;\nint f((String) → int x) {}\nString g((String) → int x) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic v;\nint f((String) → int x) {}\nString g((String) → int x) {}\n');
        }
    }
    test_inheritance_errors() {
        let library = this.checkLibrary('abstract class A {\n  int m();\n}\n\nabstract class B {\n  String m();\n}\n\nabstract class C implements A, B {}\n\nabstract class D extends C {\n  var f;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class A {\n  int m();\n}\nabstract class B {\n  String m();\n}\nabstract class C implements A, B {\n}\nabstract class D extends C {\n  dynamic f;\n}\n');
        }else {
            lib6.checkElementText(library,'abstract class A {\n  int m();\n}\nabstract class B {\n  String m();\n}\nabstract class C implements A, B {\n}\nabstract class D extends C {\n  dynamic f;\n}\n');
        }
    }
    test_initializer_executable_with_return_type_from_closure() {
        let library = this.checkLibrary('var v = () => 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'() → int v;\n');
        }else {
            lib6.checkElementText(library,'dynamic v;\n');
        }
    }
    test_initializer_executable_with_return_type_from_closure_await_dynamic() {
        let library = this.checkLibrary('var v = (f) async => await f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'(dynamic) → Future<dynamic> v;\n');
        }else {
            lib6.checkElementText(library,'dynamic v;\n');
        }
    }
    test_initializer_executable_with_return_type_from_closure_await_future3_int() {
        let library = this.checkLibrary('import \'dart:async\';\nvar v = (Future<Future<Future<int>>> f) async => await f;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\n(Future<Future<Future<int>>>) → Future<int> v;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\ndynamic v;\n');
        }
    }
    test_initializer_executable_with_return_type_from_closure_await_future_int() {
        let library = this.checkLibrary('import \'dart:async\';\nvar v = (Future<int> f) async => await f;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\n(Future<int>) → Future<int> v;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\ndynamic v;\n');
        }
    }
    test_initializer_executable_with_return_type_from_closure_await_future_noArg() {
        let library = this.checkLibrary('import \'dart:async\';\nvar v = (Future f) async => await f;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\n(Future<dynamic>) → Future<dynamic> v;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\ndynamic v;\n');
        }
    }
    test_initializer_executable_with_return_type_from_closure_field() {
        let library = this.checkLibrary('class C {\n  var v = () => 0;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  () → int v;\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic v;\n}\n');
        }
    }
    test_initializer_executable_with_return_type_from_closure_local() {
        let library = this.checkLibrary('void f() {\n  int u = 0;\n  var v = () => 0;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f() {}\n');
        }else {
            lib6.checkElementText(library,'void f() {}\n');
        }
    }
    test_instantiateToBounds_boundRefersToEarlierTypeArgument() {
        let library = this.checkLibrary('class C<S extends num, T extends C<S, T>> {}\nC c;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<S extends num, T extends C<S, T>> {\n}\nC<num, C<num, dynamic>> c;\n');
        }else {
            lib6.checkElementText(library,'class C<S extends num, T extends C<S, T>> {\n}\nC<dynamic, dynamic> c;\n');
        }
    }
    test_instantiateToBounds_boundRefersToItself() {
        let library = this.checkLibrary('class C<T extends C<T>> {}\nC c;\nvar c2 = new C();\nclass B {\n  var c3 = new C();\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends C<T>> {\n}\nclass B {\n  C<C<dynamic>> c3;\n}\nC<C<dynamic>> c;\nC<C<dynamic>> c2;\n');
        }else {
            lib6.checkElementText(library,'class C<T extends C<T>> {\n}\nclass B {\n  dynamic c3;\n}\nC<dynamic> c;\ndynamic c2;\n');
        }
    }
    test_instantiateToBounds_boundRefersToLaterTypeArgument() {
        let library = this.checkLibrary('class C<T extends C<T, U>, U extends num> {}\nC c;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends C<T, U>, U extends num> {\n}\nC<C<dynamic, num>, num> c;\n');
        }else {
            lib6.checkElementText(library,'class C<T extends C<T, U>, U extends num> {\n}\nC<dynamic, dynamic> c;\n');
        }
    }
    test_instantiateToBounds_functionTypeAlias_simple() {
        let library = this.checkLibrary('typedef F<T extends num>(T p);\nF f;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F<T extends num>(T p);\nF<num> f;\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F<T extends num>(T p);\nF f;\n');
        }
    }
    test_instantiateToBounds_simple() {
        let library = this.checkLibrary('class C<T extends num> {}\nC c;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends num> {\n}\nC<num> c;\n');
        }else {
            lib6.checkElementText(library,'class C<T extends num> {\n}\nC<dynamic> c;\n');
        }
    }
    test_invalid_annotation_prefixed_constructor() {
        this.addLibrarySource('/a.dart','class C {\n  const C.named();\n}\n');
        let library = this.checkLibrary('import "a.dart" as a;\n@a.C.named\nclass D {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as a;\n@\n        a/*location: test.dart;a*/.\n        C/*location: a.dart;C*/.\n        named/*location: a.dart;C;named*/\nclass D {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as a;\n@\n        a/*location: test.dart;a*/.\n        C/*location: a.dart;C*/.\n        named/*location: a.dart;C;named*/\nclass D {\n}\n');
        }
    }
    test_invalid_annotation_unprefixed_constructor() {
        this.addLibrarySource('/a.dart','class C {\n  const C.named();\n}\n');
        let library = this.checkLibrary('import "a.dart";\n@C.named\nclass D {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\n@\n        C/*location: a.dart;C*/.\n        named/*location: a.dart;C;named*/\nclass D {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\n@\n        C/*location: a.dart;C*/.\n        named/*location: a.dart;C;named*/\nclass D {\n}\n');
        }
    }
    test_invalid_importPrefix_asTypeArgument() {
        let library = this.checkLibrary('import \'dart:async\' as ppp;\nclass C {\n  List<ppp> v;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as ppp;\nclass C {\n  List<dynamic> v;\n}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as ppp;\nclass C {\n  List<dynamic> v;\n}\n');
        }
    }
    test_invalid_nameConflict_imported() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','V() {}');
        this.addLibrarySource('/b.dart','V() {}');
        let library = this.checkLibrary('import \'a.dart\';\nimport \'b.dart\';\nfoo([p = V]) {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nimport \'b.dart\';\ndynamic foo([dynamic p =\n        V/*location: null*/]) {}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nimport \'b.dart\';\ndynamic foo([dynamic p =\n        V/*location: null*/]) {}\n');
        }
    }
    test_invalid_nameConflict_imported_exported() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','V() {}');
        this.addLibrarySource('/b.dart','V() {}');
        this.addLibrarySource('/c.dart','export \'a.dart\';\nexport \'b.dart\';\n');
        let library = this.checkLibrary('import \'c.dart\';\nfoo([p = V]) {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'c.dart\';\ndynamic foo([dynamic p =\n        V/*location: null*/]) {}\n');
        }else {
            lib6.checkElementText(library,'import \'c.dart\';\ndynamic foo([dynamic p =\n        V/*location: null*/]) {}\n');
        }
    }
    test_invalid_nameConflict_local() {
        this.namesThatCannotBeResolved.add('V');
        let library = this.checkLibrary('foo([p = V]) {}\nV() {}\nvar V;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic V;\ndynamic foo([dynamic p =\n        V/*location: null*/]) {}\ndynamic V() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic V;\ndynamic foo([dynamic p =\n        V/*location: null*/]) {}\ndynamic V() {}\n');
        }
    }
    test_invalid_setterParameter_fieldFormalParameter() {
        let library = this.checkLibrary('class C {\n  int foo;\n  void set bar(this.foo) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  int foo;\n  void set bar(dynamic this.foo) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  int foo;\n  void set bar(dynamic this.foo) {}\n}\n');
        }
    }
    test_invalid_setterParameter_fieldFormalParameter_self() {
        let library = this.checkLibrary('class C {\n  set x(this.x) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void set x(dynamic this.x) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic set x(dynamic this.x) {}\n}\n');
        }
    }
    test_invalidUri_part_emptyUri() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('part \'\';\nclass B extends A {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'part \'\';\nclass B {\n}\n--------------------\nunit: null\n\n');
        }else {
            lib6.checkElementText(library,'part \'\';\nclass B {\n}\n--------------------\nunit: null\n\n');
        }
    }
    test_invalidUris() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('import \'[invalid uri]\';\nimport \'[invalid uri]:foo.dart\';\nimport \'a1.dart\';\nimport \'[invalid uri]\';\nimport \'[invalid uri]:foo.dart\';\n\nexport \'[invalid uri]\';\nexport \'[invalid uri]:foo.dart\';\nexport \'a2.dart\';\nexport \'[invalid uri]\';\nexport \'[invalid uri]:foo.dart\';\n\npart \'[invalid uri]\';\npart \'a3.dart\';\npart \'[invalid uri]\';\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'[invalid uri]\';\nimport \'[invalid uri]:foo.dart\';\nimport \'a1.dart\';\nimport \'[invalid uri]\';\nimport \'[invalid uri]:foo.dart\';\nexport \'[invalid uri]\';\nexport \'[invalid uri]:foo.dart\';\nexport \'a2.dart\';\nexport \'[invalid uri]\';\nexport \'[invalid uri]:foo.dart\';\npart \'[invalid uri]\';\npart \'a3.dart\';\npart \'[invalid uri]\';\n--------------------\nunit: null\n\n--------------------\nunit: a3.dart\n\n--------------------\nunit: null\n\n');
        }else {
            lib6.checkElementText(library,'import \'[invalid uri]\';\nimport \'[invalid uri]:foo.dart\';\nimport \'a1.dart\';\nimport \'[invalid uri]\';\nimport \'[invalid uri]:foo.dart\';\nexport \'[invalid uri]\';\nexport \'[invalid uri]:foo.dart\';\nexport \'a2.dart\';\nexport \'[invalid uri]\';\nexport \'[invalid uri]:foo.dart\';\npart \'[invalid uri]\';\npart \'a3.dart\';\npart \'[invalid uri]\';\n--------------------\nunit: null\n\n--------------------\nunit: a3.dart\n\n--------------------\nunit: null\n\n');
        }
    }
    test_library() {
        let library = this.checkLibrary('');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_library_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nlibrary foo;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library foo;\n');
        }else {
            lib6.checkElementText(library,'library foo;\n');
        }
    }
    test_library_name_with_spaces() {
        let library = this.checkLibrary('library foo . bar ;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library foo.bar;\n');
        }else {
            lib6.checkElementText(library,'library foo.bar;\n');
        }
    }
    test_library_named() {
        let library = this.checkLibrary('library foo.bar;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library foo.bar;\n');
        }else {
            lib6.checkElementText(library,'library foo.bar;\n');
        }
    }
    test_localFunctions() {
        let library = this.checkLibrary('f() {\n  f1() {}\n  {\n    f2() {}\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }
    }
    test_localFunctions_inConstructor() {
        let library = this.checkLibrary('class C {\n  C() {\n    f() {}\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C();\n}\n');
        }
    }
    test_localFunctions_inMethod() {
        let library = this.checkLibrary('class C {\n  m() {\n    f() {}\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic m() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic m() {}\n}\n');
        }
    }
    test_localFunctions_inTopLevelGetter() {
        let library = this.checkLibrary('get g {\n  f() {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic get g {}\n');
        }else {
            lib6.checkElementText(library,'dynamic get g {}\n');
        }
    }
    test_localLabels_inConstructor() {
        let library = this.checkLibrary('class C {\n  C() {\n    aaa: while (true) {}\n    bbb: switch (42) {\n      ccc: case 0:\n        break;\n    }\n  }\n}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C();\n}\n');
        }
    }
    test_localLabels_inMethod() {
        let library = this.checkLibrary('class C {\n  m() {\n    aaa: while (true) {}\n    bbb: switch (42) {\n      ccc: case 0:\n        break;\n    }\n  }\n}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic m() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic m() {}\n}\n');
        }
    }
    test_localLabels_inTopLevelFunction() {
        let library = this.checkLibrary('main() {\n  aaa: while (true) {}\n  bbb: switch (42) {\n    ccc: case 0:\n      break;\n  }\n}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic main() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic main() {}\n');
        }
    }
    test_localVariables_inConstructor() {
        let library = this.checkLibrary('class C {\n  C() {\n    int v;\n    f() {}\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C();\n}\n');
        }
    }
    test_localVariables_inLocalFunction() {
        let library = this.checkLibrary('f() {\n  f1() {\n    int v1 = 1;\n  } // 2\n  f2() {\n    int v1 = 1;\n    f3() {\n      int v2 = 1;\n    }\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f() {}\n');
        }
    }
    test_localVariables_inMethod() {
        let library = this.checkLibrary('class C {\n  m() {\n    int v;\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic m() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic m() {}\n}\n');
        }
    }
    test_localVariables_inTopLevelFunction() {
        let library = this.checkLibrary('main() {\n  int v1 = 1;\n  {\n    const String v2 = \'bbb\';\n  }\n  Map<int, List<double>> v3;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic main() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic main() {}\n');
        }
    }
    test_localVariables_inTopLevelGetter() {
        let library = this.checkLibrary('get g {\n  int v;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic get g {}\n');
        }else {
            lib6.checkElementText(library,'dynamic get g {}\n');
        }
    }
    test_main_class() {
        let library = this.checkLibrary('class main {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class main {\n}\n');
        }else {
            lib6.checkElementText(library,'class main {\n}\n');
        }
    }
    test_main_class_alias() {
        let library = this.checkLibrary('class main = C with D; class C {} class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class alias main extends C with D {\n  synthetic main() = C;\n}\nclass C {\n}\nclass D {\n}\n');
        }else {
            lib6.checkElementText(library,'class alias main extends C with D {\n  synthetic main() = C;\n}\nclass C {\n}\nclass D {\n}\n');
        }
    }
    test_main_class_alias_via_export() {
        this.addLibrarySource('/a.dart','class main = C with D; class C {} class D {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_main_class_via_export() {
        this.addLibrarySource('/a.dart','class main {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_main_getter() {
        let library = this.checkLibrary('get main => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic get main {}\n');
        }else {
            lib6.checkElementText(library,'dynamic get main {}\n');
        }
    }
    test_main_getter_via_export() {
        this.addLibrarySource('/a.dart','get main => null;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_main_typedef() {
        let library = this.checkLibrary('typedef main();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic main();\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic main();\n');
        }
    }
    test_main_typedef_via_export() {
        this.addLibrarySource('/a.dart','typedef main();');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_main_variable() {
        let library = this.checkLibrary('var main;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic main;\n');
        }else {
            lib6.checkElementText(library,'dynamic main;\n');
        }
    }
    test_main_variable_via_export() {
        this.addLibrarySource('/a.dart','var main;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'a.dart\';\n');
        }
    }
    test_member_function_async() {
        let library = this.checkLibrary('import \'dart:async\';\nclass C {\n  Future f() async {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\nclass C {\n  Future<dynamic> f() async {}\n}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\nclass C {\n  Future<dynamic> f() async {}\n}\n');
        }
    }
    test_member_function_asyncStar() {
        let library = this.checkLibrary('import \'dart:async\';\nclass C {\n  Stream f() async* {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';\nclass C {\n  Stream<dynamic> f() async* {}\n}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\';\nclass C {\n  Stream<dynamic> f() async* {}\n}\n');
        }
    }
    test_metadata_classDeclaration() {
        let library = this.checkLibrary('const a = null;\nconst b = null;\n@a\n@b\nclass C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\n@\n        b/*location: test.dart;b?*/\nclass C {\n}\nconst dynamic a = null;\nconst dynamic b = null;\n');
        }else {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\n@\n        b/*location: test.dart;b?*/\nclass C {\n}\nconst dynamic a = null;\nconst dynamic b = null;\n');
        }
    }
    test_metadata_classTypeAlias() {
        let library = this.checkLibrary('const a = null; @a class C = D with E; class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nclass alias C extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nclass alias C extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_constructor_call_named() {
        let library = this.checkLibrary('class A { const A.named(); } @A.named() class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {\n  const A.named();\n}\n@\n        A/*location: test.dart;A*/.\n        named/*location: test.dart;A;named*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'class A {\n  const A.named();\n}\n@\n        A/*location: test.dart;A*/.\n        named/*location: test.dart;A;named*/()\nclass C {\n}\n');
        }
    }
    test_metadata_constructor_call_named_prefixed() {
        this.addLibrarySource('/foo.dart','class A { const A.named(); }');
        let library = this.checkLibrary('import "foo.dart" as foo; @foo.A.named() class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\n@\n        A/*location: foo.dart;A*/.\n        named/*location: foo.dart;A;named*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\n@\n        A/*location: foo.dart;A*/.\n        named/*location: foo.dart;A;named*/()\nclass C {\n}\n');
        }
    }
    test_metadata_constructor_call_unnamed() {
        let library = this.checkLibrary('class A { const A(); } @A() class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {\n  const A();\n}\n@\n        A/*location: test.dart;A*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'class A {\n  const A();\n}\n@\n        A/*location: test.dart;A*/()\nclass C {\n}\n');
        }
    }
    test_metadata_constructor_call_unnamed_prefixed() {
        this.addLibrarySource('/foo.dart','class A { const A(); }');
        let library = this.checkLibrary('import "foo.dart" as foo; @foo.A() class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\n@\n        A/*location: foo.dart;A*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;\n@\n        A/*location: foo.dart;A*/()\nclass C {\n}\n');
        }
    }
    test_metadata_constructor_call_with_args() {
        let library = this.checkLibrary('class A { const A(x); } @A(null) class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {\n  const A(dynamic x);\n}\n@\n        A/*location: test.dart;A*/(null)\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'class A {\n  const A(dynamic x);\n}\n@\n        A/*location: test.dart;A*/(null)\nclass C {\n}\n');
        }
    }
    test_metadata_constructorDeclaration_named() {
        let library = this.checkLibrary('const a = null; class C { @a C.named(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  C.named();\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  C.named();\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_constructorDeclaration_unnamed() {
        let library = this.checkLibrary('const a = null; class C { @a C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  C();\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  C();\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_enumDeclaration() {
        let library = this.checkLibrary('const a = null; @a enum E { v }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_exportDirective() {
        this.addLibrarySource('/foo.dart','');
        let library = this.checkLibrary('@a export "foo.dart"; const a = null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nexport \'foo.dart\';\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nexport \'foo.dart\';\nconst dynamic a = null;\n');
        }
    }
    test_metadata_fieldDeclaration() {
        let library = this.checkLibrary('const a = null; class C { @a int x; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  int x;\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  int x;\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_fieldFormalParameter() {
        let library = this.checkLibrary('const a = null; class C { var x; C(@a this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(@\n        a/*location: test.dart;a?*/ dynamic this.x);\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C(@\n        a/*location: test.dart;a?*/ dynamic this.x);\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_fieldFormalParameter_withDefault() {
        let library = this.checkLibrary('const a = null; class C { var x; C([@a this.x = null]); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C([@\n        a/*location: test.dart;a?*/ dynamic this.x]);\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C([@\n        a/*location: test.dart;a?*/ dynamic this.x]);\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_functionDeclaration_function() {
        let library = this.checkLibrary('const a = null; @a f() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f() {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f() {}\n');
        }
    }
    test_metadata_functionDeclaration_getter() {
        let library = this.checkLibrary('const a = null; @a get f => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\n@\n        a/*location: test.dart;a?*/\ndynamic get f {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\n@\n        a/*location: test.dart;a?*/\ndynamic get f {}\n');
        }
    }
    test_metadata_functionDeclaration_setter() {
        let library = this.checkLibrary('const a = null; @a set f(value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\n@\n        a/*location: test.dart;a?*/\nvoid set f(dynamic value) {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\n@\n        a/*location: test.dart;a?*/\ndynamic set f(dynamic value) {}\n');
        }
    }
    test_metadata_functionTypeAlias() {
        let library = this.checkLibrary('const a = null; @a typedef F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\ntypedef dynamic F();\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\ntypedef dynamic F();\nconst dynamic a = null;\n');
        }
    }
    test_metadata_functionTypedFormalParameter() {
        let library = this.checkLibrary('const a = null; f(@a g()) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f(@\n        a/*location: test.dart;a?*/ () → dynamic g) {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f(@\n        a/*location: test.dart;a?*/ () → dynamic g) {}\n');
        }
    }
    test_metadata_functionTypedFormalParameter_withDefault() {
        let library = this.checkLibrary('const a = null; f([@a g() = null]) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f([@\n        a/*location: test.dart;a?*/ () → dynamic g = null]) {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f([@\n        a/*location: test.dart;a?*/ () → dynamic g = null]) {}\n');
        }
    }
    test_metadata_importDirective() {
        this.addLibrarySource('/foo.dart','const b = null;');
        let library = this.checkLibrary('@a import "foo.dart"; const a = b;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nimport \'foo.dart\';\nconst dynamic a =\n        b/*location: foo.dart;b?*/;\n');
        }else {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nimport \'foo.dart\';\nconst dynamic a =\n        b/*location: foo.dart;b?*/;\n');
        }
    }
    test_metadata_invalid_classDeclaration() {
        let library = this.checkLibrary('f(_) {} @f(42) class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        f/*location: test.dart;f*/(42)\nclass C {\n}\ndynamic f(dynamic _) {}\n');
        }else {
            lib6.checkElementText(library,'@\n        f/*location: test.dart;f*/(42)\nclass C {\n}\ndynamic f(dynamic _) {}\n');
        }
    }
    test_metadata_libraryDirective() {
        let library = this.checkLibrary('@a library L; const a = null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nlibrary L;\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'@\n        a/*location: test.dart;a?*/\nlibrary L;\nconst dynamic a = null;\n');
        }
    }
    test_metadata_methodDeclaration_getter() {
        let library = this.checkLibrary('const a = null; class C { @a get m => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  dynamic get m {}\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  dynamic get m {}\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_methodDeclaration_method() {
        let library = this.checkLibrary('const a = null;\nconst b = null;\nclass C {\n  @a\n  @b\n  m() {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  @\n        b/*location: test.dart;b?*/\n  dynamic m() {}\n}\nconst dynamic a = null;\nconst dynamic b = null;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  @\n        b/*location: test.dart;b?*/\n  dynamic m() {}\n}\nconst dynamic a = null;\nconst dynamic b = null;\n');
        }
    }
    test_metadata_methodDeclaration_setter() {
        let library = this.checkLibrary('const a = null; class C { @a set m(value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  void set m(dynamic value) {}\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class C {\n  @\n        a/*location: test.dart;a?*/\n  dynamic set m(dynamic value) {}\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_partDirective() {
        this.addSource('/foo.dart','part of L;');
        let library = this.checkLibrary('library L; @a part "foo.dart"; const a = null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library L;\n@\n        a/*location: test.dart;a?*/\npart \'foo.dart\';\nconst dynamic a = null;\n--------------------\nunit: foo.dart\n\n');
        }else {
            lib6.checkElementText(library,'library L;\n@\n        a/*location: test.dart;a?*/\npart \'foo.dart\';\nconst dynamic a = null;\n--------------------\nunit: foo.dart\n\n');
        }
    }
    test_metadata_prefixed_variable() {
        this.addLibrarySource('/a.dart','const b = null;');
        let library = this.checkLibrary('import "a.dart" as a; @a.b class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as a;\n@\n        a/*location: test.dart;a*/.\n        b/*location: a.dart;b?*/\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as a;\n@\n        a/*location: test.dart;a*/.\n        b/*location: a.dart;b?*/\nclass C {\n}\n');
        }
    }
    test_metadata_simpleFormalParameter() {
        let library = this.checkLibrary('const a = null; f(@a x) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f(@\n        a/*location: test.dart;a?*/ dynamic x) {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f(@\n        a/*location: test.dart;a?*/ dynamic x) {}\n');
        }
    }
    test_metadata_simpleFormalParameter_withDefault() {
        let library = this.checkLibrary('const a = null; f([@a x = null]) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f([@\n        a/*location: test.dart;a?*/ dynamic x = null]) {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f([@\n        a/*location: test.dart;a?*/ dynamic x = null]) {}\n');
        }
    }
    test_metadata_topLevelVariableDeclaration() {
        let library = this.checkLibrary('const a = null; @a int v;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\n@\n        a/*location: test.dart;a?*/\nint v;\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\n@\n        a/*location: test.dart;a?*/\nint v;\n');
        }
    }
    test_metadata_typeParameter_ofClass() {
        let library = this.checkLibrary('const a = null; class C<@a T> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_typeParameter_ofClassTypeAlias() {
        let library = this.checkLibrary('const a = null; class C<@a T> = D with E; class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class alias C<T> extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'class alias C<T> extends D with E {\n  synthetic C() = D;\n}\nclass D {\n}\nclass E {\n}\nconst dynamic a = null;\n');
        }
    }
    test_metadata_typeParameter_ofFunction() {
        let library = this.checkLibrary('const a = null; f<@a T>() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f<T>() {}\n');
        }else {
            lib6.checkElementText(library,'const dynamic a = null;\ndynamic f<T>() {}\n');
        }
    }
    test_metadata_typeParameter_ofTypedef() {
        let library = this.checkLibrary('const a = null; typedef F<@a T>();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F<T>();\nconst dynamic a = null;\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F<T>();\nconst dynamic a = null;\n');
        }
    }
    test_method_documented() {
        let library = this.checkLibrary('class C {\n  /**\n   * Docs\n   */\n  f() {}\n}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  /**\n   * Docs\n   */\n  dynamic f() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  /**\n   * Docs\n   */\n  dynamic f() {}\n}\n');
        }
    }
    test_method_inferred_type_nonStatic_implicit_param() {
        let library = this.checkLibrary('class C extends D { void f(value) {} }' + ' abstract class D { void f(int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n  void f(int value) {}\n}\nabstract class D {\n  void f(int value);\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n  void f(dynamic value) {}\n}\nabstract class D {\n  void f(int value);\n}\n');
        }
    }
    test_method_inferred_type_nonStatic_implicit_return() {
        let library = this.checkLibrary('class C extends D { f() => null; } abstract class D { int f(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n  int f() {}\n}\nabstract class D {\n  int f();\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n  dynamic f() {}\n}\nabstract class D {\n  int f();\n}\n');
        }
    }
    test_method_type_parameter() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C { T f<T, U>(U u) => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  T f<T, U>(U u) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  T f<T, U>(U u) {}\n}\n');
        }
    }
    test_method_type_parameter_in_generic_class() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C<T, U> { V f<V, W>(T t, U u, W w) => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n  V f<V, W>(T t, U u, W w) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n  V f<V, W>(T t, U u, W w) {}\n}\n');
        }
    }
    test_method_type_parameter_with_function_typed_parameter() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C { void f<T, U>(T x(U u)) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void f<T, U>((U) → T x) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  void f<T, U>((U) → T x) {}\n}\n');
        }
    }
    test_nameConflict_exportedAndLocal() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','class C {}');
        this.addLibrarySource('/c.dart','export \'a.dart\';\nclass C {}\n');
        let library = this.checkLibrary('import \'c.dart\';\nC v = null;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'c.dart\';\nC v;\n');
        }else {
            lib6.checkElementText(library,'import \'c.dart\';\nC v;\n');
        }
    }
    test_nameConflict_exportedAndLocal_exported() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','class C {}');
        this.addLibrarySource('/c.dart','export \'a.dart\';\nclass C {}\n');
        this.addLibrarySource('/d.dart','export "c.dart";');
        let library = this.checkLibrary('import \'d.dart\';\nC v = null;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'d.dart\';\nC v;\n');
        }else {
            lib6.checkElementText(library,'import \'d.dart\';\nC v;\n');
        }
    }
    test_nameConflict_exportedAndParted() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','class C {}');
        this.addLibrarySource('/b.dart','part of lib;\nclass C {}\n');
        this.addLibrarySource('/c.dart','library lib;\nexport \'a.dart\';\npart \'b.dart\';\n');
        let library = this.checkLibrary('import \'c.dart\';\nC v = null;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'c.dart\';\nC v;\n');
        }else {
            lib6.checkElementText(library,'import \'c.dart\';\nC v;\n');
        }
    }
    test_nameConflict_importWithRelativeUri_exportWithAbsolute() {
        if (this.resourceProvider.pathContext.separator != '/') {
            return;
        }
        this.addLibrarySource('/a.dart','class A {}');
        this.addLibrarySource('/b.dart','export "/a.dart";');
        let library = this.checkLibrary('import \'a.dart\';\nimport \'b.dart\';\nA v = null;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nimport \'b.dart\';\nA v;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nimport \'b.dart\';\nA v;\n');
        }
    }
    test_nested_generic_functions_in_generic_class_with_function_typed_params() {
        let library = this.checkLibrary('class C<T, U> {\n  void g<V, W>() {\n    void h<X, Y>(void p(T t, U u, V v, W w, X x, Y y)) {\n    }\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n  void g<V, W>() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n  void g<V, W>() {}\n}\n');
        }
    }
    test_nested_generic_functions_in_generic_class_with_local_variables() {
        let library = this.checkLibrary('class C<T, U> {\n  void g<V, W>() {\n    void h<X, Y>() {\n      T t;\n      U u;\n      V v;\n      W w;\n      X x;\n      Y y;\n    }\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n  void g<V, W>() {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n  void g<V, W>() {}\n}\n');
        }
    }
    test_nested_generic_functions_with_function_typed_param() {
        let library = this.checkLibrary('void f<T, U>() {\n  void g<V, W>() {\n    void h<X, Y>(void p(T t, U u, V v, W w, X x, Y y)) {\n    }\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>() {}\n');
        }else {
            lib6.checkElementText(library,'void f<T, U>() {}\n');
        }
    }
    test_nested_generic_functions_with_local_variables() {
        let library = this.checkLibrary('void f<T, U>() {\n  void g<V, W>() {\n    void h<X, Y>() {\n      T t;\n      U u;\n      V v;\n      W w;\n      X x;\n      Y y;\n    }\n  }\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>() {}\n');
        }else {
            lib6.checkElementText(library,'void f<T, U>() {}\n');
        }
    }
    test_operator() {
        let library = this.checkLibrary('class C { C operator+(C other) => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C +(C other) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C +(C other) {}\n}\n');
        }
    }
    test_operator_equal() {
        let library = this.checkLibrary('class C { bool operator==(Object other) => false; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  bool ==(Object other) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  bool ==(Object other) {}\n}\n');
        }
    }
    test_operator_external() {
        let library = this.checkLibrary('class C { external C operator+(C other); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  external C +(C other) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  external C +(C other) {}\n}\n');
        }
    }
    test_operator_greater_equal() {
        let library = this.checkLibrary('class C { bool operator>=(C other) => false; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  bool >=(C other) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  bool >=(C other) {}\n}\n');
        }
    }
    test_operator_index() {
        let library = this.checkLibrary('class C { bool operator[](int i) => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  bool [](int i) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  bool [](int i) {}\n}\n');
        }
    }
    test_operator_index_set() {
        let library = this.checkLibrary('class C { void operator[]=(int i, bool v) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void []=(int i, bool v) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  void []=(int i, bool v) {}\n}\n');
        }
    }
    test_operator_less_equal() {
        let library = this.checkLibrary('class C { bool operator<=(C other) => false; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  bool <=(C other) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  bool <=(C other) {}\n}\n');
        }
    }
    test_parameter_checked() : void {
        let library = this.checkLibrary('library meta;\nconst checked = null;\nclass A<T> {\n  void f(@checked T t) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library meta;\nclass A<T> {\n  void f(@\n        checked/*location: test.dart;checked?*/ covariant T t) {}\n}\nconst dynamic checked = null;\n');
        }else {
            lib6.checkElementText(library,'library meta;\nclass A<T> {\n  void f(@\n        checked/*location: test.dart;checked?*/ covariant T t) {}\n}\nconst dynamic checked = null;\n');
        }
    }
    test_parameter_checked_inherited() : void {
        let library = this.checkLibrary('library meta;\nconst checked = null;\nclass A<T> {\n  void f(@checked T t) {}\n}\nclass B<T> extends A<T> {\n  void f(T t) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library meta;\nclass A<T> {\n  void f(@\n        checked/*location: test.dart;checked?*/ covariant T t) {}\n}\nclass B<T> extends A<T> {\n  void f(covariant T t) {}\n}\nconst dynamic checked = null;\n');
        }else {
            lib6.checkElementText(library,'library meta;\nclass A<T> {\n  void f(@\n        checked/*location: test.dart;checked?*/ covariant T t) {}\n}\nclass B<T> extends A<T> {\n  void f(T t) {}\n}\nconst dynamic checked = null;\n');
        }
    }
    test_parameter_covariant() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C { void m(covariant C c) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void m(covariant C c) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  void m(covariant C c) {}\n}\n');
        }
    }
    test_parameter_covariant_inherited() : void {
        let library = this.checkLibrary('class A<T> {\n  void f(covariant T t) {}\n}\nclass B<T> extends A<T> {\n  void f(T t) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A<T> {\n  void f(covariant T t) {}\n}\nclass B<T> extends A<T> {\n  void f(covariant T t) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class A<T> {\n  void f(covariant T t) {}\n}\nclass B<T> extends A<T> {\n  void f(T t) {}\n}\n');
        }
    }
    test_parameter_parameters() {
        let library = this.checkLibrary('class C { f(g(x, y)) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic f((dynamic, dynamic) → dynamic g) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic f((dynamic, dynamic) → dynamic g) {}\n}\n');
        }
    }
    test_parameter_parameters_in_generic_class() {
        let library = this.checkLibrary('class C<A, B> { f(A g(B x)) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<A, B> {\n  dynamic f((B) → A g) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<A, B> {\n  dynamic f((B) → A g) {}\n}\n');
        }
    }
    test_parameter_return_type() {
        let library = this.checkLibrary('class C { f(int g()) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic f(() → int g) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic f(() → int g) {}\n}\n');
        }
    }
    test_parameter_return_type_void() {
        let library = this.checkLibrary('class C { f(void g()) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic f(() → void g) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic f(() → void g) {}\n}\n');
        }
    }
    test_parameterTypeNotInferred_constructor() {
        let library = this.checkLibrary('class C {\n  C.positional([x = 1]);\n  C.named({x: 1});\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  C.positional([dynamic x = 1]);\n  C.named({dynamic x: 1});\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  C.positional([dynamic x = 1]);\n  C.named({dynamic x: 1});\n}\n');
        }
    }
    test_parameterTypeNotInferred_initializingFormal() {
        let library = this.checkLibrary('class C {\n  var x;\n  C.positional([this.x = 1]);\n  C.named({this.x: 1});\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C.positional([dynamic this.x]);\n  C.named({dynamic this.x});\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  dynamic x;\n  C.positional([dynamic this.x]);\n  C.named({dynamic this.x});\n}\n');
        }
    }
    test_parameterTypeNotInferred_staticMethod() {
        let library = this.checkLibrary('class C {\n  static void positional([x = 1]) {}\n  static void named({x: 1}) {}\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static void positional([dynamic x = 1]) {}\n  static void named({dynamic x: 1}) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static void positional([dynamic x = 1]) {}\n  static void named({dynamic x: 1}) {}\n}\n');
        }
    }
    test_parameterTypeNotInferred_topLevelFunction() {
        let library = this.checkLibrary('void positional([x = 1]) {}\nvoid named({x: 1}) {}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void positional([dynamic x = 1]) {}\nvoid named({dynamic x: 1}) {}\n');
        }else {
            lib6.checkElementText(library,'void positional([dynamic x = 1]) {}\nvoid named({dynamic x: 1}) {}\n');
        }
    }
    test_parts() {
        this.addSource('/a.dart','part of my.lib;');
        this.addSource('/b.dart','part of my.lib;');
        let library = this.checkLibrary('library my.lib; part "a.dart"; part "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\npart \'b.dart\';\n--------------------\nunit: a.dart\n\n--------------------\nunit: b.dart\n\n');
        }else {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\npart \'b.dart\';\n--------------------\nunit: a.dart\n\n--------------------\nunit: b.dart\n\n');
        }
    }
    test_parts_invalidUri() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        this.addSource('/foo/bar.dart','part of my.lib;');
        let library = this.checkLibrary('library my.lib; part "foo/";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;\npart \'foo/\';\n--------------------\nunit: null\n\n');
        }else {
            lib6.checkElementText(library,'library my.lib;\npart \'foo/\';\n--------------------\nunit: null\n\n');
        }
    }
    test_parts_invalidUri_nullStringValue() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        this.addSource('/foo/bar.dart','part of my.lib;');
        let library = this.checkLibrary('library my.lib;\npart "${foo}/bar.dart";\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;\npart \'\';\n--------------------\nunit: null\n\n');
        }else {
            lib6.checkElementText(library,'library my.lib;\npart \'\';\n--------------------\nunit: null\n\n');
        }
    }
    test_propagated_type_refers_to_closure() {
        let library = this.checkLibrary('void f() {\n  var x = () => 0;\n  var y = x;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f() {}\n');
        }else {
            lib6.checkElementText(library,'void f() {}\n');
        }
    }
    test_setter_covariant() {
        let library = this.checkLibrary('class C { void set x(covariant int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  void set x(covariant int value);\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  void set x(covariant int value);\n}\n');
        }
    }
    test_setter_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nvoid set x(value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs\n */\nvoid set x(dynamic value) {}\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs\n */\nvoid set x(dynamic value) {}\n');
        }
    }
    test_setter_external() {
        let library = this.checkLibrary('external void set x(int value);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'external void set x(int value) {}\n');
        }else {
            lib6.checkElementText(library,'external void set x(int value) {}\n');
        }
    }
    test_setter_inferred_type_nonStatic_implicit_param() {
        let library = this.checkLibrary('class C extends D { void set f(value) {} }' + ' abstract class D { void set f(int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {\n  void set f(int value) {}\n}\nabstract class D {\n  void set f(int value);\n}\n');
        }else {
            lib6.checkElementText(library,'class C extends D {\n  void set f(dynamic value) {}\n}\nabstract class D {\n  void set f(int value);\n}\n');
        }
    }
    test_setter_inferred_type_static_implicit_return() {
        let library = this.checkLibrary('class C { static set f(int value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  static void set f(int value) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C {\n  static dynamic set f(int value) {}\n}\n');
        }
    }
    test_setter_inferred_type_top_level_implicit_return() {
        let library = this.checkLibrary('set f(int value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void set f(int value) {}\n');
        }else {
            lib6.checkElementText(library,'dynamic set f(int value) {}\n');
        }
    }
    test_setters() {
        let library = this.checkLibrary('void set x(int value) {} set y(value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void set x(int value) {}\nvoid set y(dynamic value) {}\n');
        }else {
            lib6.checkElementText(library,'void set x(int value) {}\ndynamic set y(dynamic value) {}\n');
        }
    }
    test_syntheticFunctionType_genericClosure() {
        if (!this.createOptions().strongMode) {
            return;
        }
        let library = this.checkLibrary('final v = f() ? /*<T>*/(T t) => 0 : /*<T>*/(T t) => 1;\nbool f() => true;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_syntheticFunctionType_genericClosure_inGenericFunction() {
        if (!this.createOptions().strongMode) {
            return;
        }
        let library = this.checkLibrary('void f<T, U>(bool b) {\n  final v = b ? /*<V>*/(T t, U u, V v) => 0 : /*<V>*/(T t, U u, V v) => 1;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>(bool b) {}\n');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_syntheticFunctionType_inGenericClass() {
        let library = this.checkLibrary('class C<T, U> {\n  var v = f() ? (T t, U u) => 0 : (T t, U u) => 1;\n}\nbool f() => false;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n  synthetic C();\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n  dynamic v;\n}\nbool f() {}\n');
        }
    }
    test_syntheticFunctionType_inGenericFunction() {
        let library = this.checkLibrary('void f<T, U>(bool b) {\n  var v = b ? (T t, U u) => 0 : (T t, U u) => 1;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>(bool b) {}\n');
        }else {
            lib6.checkElementText(library,'void f<T, U>(bool b) {}\n');
        }
    }
    test_syntheticFunctionType_noArguments() {
        let library = this.checkLibrary('final v = f() ? () => 0 : () => 1;\nbool f() => true;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'final dynamic v;\nbool f() {}\n');
        }
    }
    test_syntheticFunctionType_withArguments() {
        let library = this.checkLibrary('final v = f() ? (int x, String y) => 0 : (int x, String y) => 1;\nbool f() => true;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'final dynamic v;\nbool f() {}\n');
        }
    }
    test_type_arguments_explicit_dynamic_dynamic() {
        let library = this.checkLibrary('Map<dynamic, dynamic> m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<dynamic, dynamic> m;\n');
        }else {
            lib6.checkElementText(library,'Map<dynamic, dynamic> m;\n');
        }
    }
    test_type_arguments_explicit_dynamic_int() {
        let library = this.checkLibrary('Map<dynamic, int> m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<dynamic, int> m;\n');
        }else {
            lib6.checkElementText(library,'Map<dynamic, int> m;\n');
        }
    }
    test_type_arguments_explicit_String_dynamic() {
        let library = this.checkLibrary('Map<String, dynamic> m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<String, dynamic> m;\n');
        }else {
            lib6.checkElementText(library,'Map<String, dynamic> m;\n');
        }
    }
    test_type_arguments_explicit_String_int() {
        let library = this.checkLibrary('Map<String, int> m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<String, int> m;\n');
        }else {
            lib6.checkElementText(library,'Map<String, int> m;\n');
        }
    }
    test_type_arguments_implicit() {
        let library = this.checkLibrary('Map m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<dynamic, dynamic> m;\n');
        }else {
            lib6.checkElementText(library,'Map<dynamic, dynamic> m;\n');
        }
    }
    test_type_dynamic() {
        let library = this.checkLibrary('dynamic d;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic d;\n');
        }else {
            lib6.checkElementText(library,'dynamic d;\n');
        }
    }
    test_type_invalid_topLevelVariableElement_asType() {
        let library = this.checkLibrary('class C<T extends V> {}\ntypedef V F(V p);\nV f(V p) {}\nV V2 = null;\nint V = 0;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(dynamic p);\nclass C<T extends dynamic> {\n}\ndynamic V2;\nint V;\ndynamic f(dynamic p) {}\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F(dynamic p);\nclass C<T extends dynamic> {\n}\ndynamic V2;\nint V;\ndynamic f(dynamic p) {}\n');
        }
    }
    test_type_invalid_topLevelVariableElement_asTypeArgument() {
        let library = this.checkLibrary('var V;\nstatic List<V> V2;\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic V;\nList<dynamic> V2;\n');
        }else {
            lib6.checkElementText(library,'dynamic V;\nList<dynamic> V2;\n');
        }
    }
    test_type_invalid_typeParameter_asPrefix() {
        let library = this.checkLibrary('class C<T> {\n  m(T.K p) {}\n}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n  dynamic m(dynamic p) {}\n}\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n  dynamic m(dynamic p) {}\n}\n');
        }
    }
    test_type_reference_lib_to_lib() {
        let library = this.checkLibrary('class C {} enum E { v } typedef F(); C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_lib_to_part() {
        this.addSource('/a.dart','part of l; class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('library l; part "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library l;\npart \'a.dart\';\nC c;\nE e;\nF f;\n--------------------\nunit: a.dart\n\ntypedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'library l;\npart \'a.dart\';\nC c;\nE e;\nF f;\n--------------------\nunit: a.dart\n\ntypedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\n');
        }
    }
    test_type_reference_part_to_lib() {
        this.addSource('/a.dart','part of l; C c; E e; F f;');
        let library = this.checkLibrary('library l; part "a.dart"; class C {} enum E { v } typedef F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library l;\npart \'a.dart\';\ntypedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\n--------------------\nunit: a.dart\n\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'library l;\npart \'a.dart\';\ntypedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\n--------------------\nunit: a.dart\n\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_part_to_other_part() {
        this.addSource('/a.dart','part of l; class C {} enum E { v } typedef F();');
        this.addSource('/b.dart','part of l; C c; E e; F f;');
        let library = this.checkLibrary('library l; part "a.dart"; part "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library l;\npart \'a.dart\';\npart \'b.dart\';\n--------------------\nunit: a.dart\n\ntypedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\n--------------------\nunit: b.dart\n\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'library l;\npart \'a.dart\';\npart \'b.dart\';\n--------------------\nunit: a.dart\n\ntypedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\n--------------------\nunit: b.dart\n\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_part_to_part() {
        this.addSource('/a.dart','part of l; class C {} enum E { v } typedef F(); C c; E e; F f;');
        let library = this.checkLibrary('library l; part "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library l;\npart \'a.dart\';\n--------------------\nunit: a.dart\n\ntypedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'library l;\npart \'a.dart\';\n--------------------\nunit: a.dart\n\ntypedef dynamic F();\nenum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nclass C {\n}\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_class() {
        let library = this.checkLibrary('class C {} C c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {\n}\nC c;\n');
        }else {
            lib6.checkElementText(library,'class C {\n}\nC c;\n');
        }
    }
    test_type_reference_to_class_with_type_arguments() {
        let library = this.checkLibrary('class C<T, U> {} C<int, String> c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n}\nC<int, String> c;\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n}\nC<int, String> c;\n');
        }
    }
    test_type_reference_to_class_with_type_arguments_implicit() {
        let library = this.checkLibrary('class C<T, U> {} C c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {\n}\nC<dynamic, dynamic> c;\n');
        }else {
            lib6.checkElementText(library,'class C<T, U> {\n}\nC<dynamic, dynamic> c;\n');
        }
    }
    test_type_reference_to_enum() {
        let library = this.checkLibrary('enum E { v } E e;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nE e;\n');
        }else {
            lib6.checkElementText(library,'enum E {\n  synthetic final int index;\n  synthetic static const List<E> values;\n  static const E v;\n}\nE e;\n');
        }
    }
    test_type_reference_to_import() {
        this.addLibrarySource('/a.dart','class C {} enum E { v }; typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_import_export() {
        this.addLibrarySource('/a.dart','export "b.dart";');
        this.addLibrarySource('/b.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_import_export_export() {
        this.addLibrarySource('/a.dart','export "b.dart";');
        this.addLibrarySource('/b.dart','export "c.dart";');
        this.addLibrarySource('/c.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_import_export_export_in_subdirs() {
        this.addLibrarySource('/a/a.dart','export "b/b.dart";');
        this.addLibrarySource('/a/b/b.dart','export "../c/c.dart";');
        this.addLibrarySource('/a/c/c.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a/a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a/a.dart\';\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'import \'a/a.dart\';\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_import_export_in_subdirs() {
        this.addLibrarySource('/a/a.dart','export "b/b.dart";');
        this.addLibrarySource('/a/b/b.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a/a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a/a.dart\';\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'import \'a/a.dart\';\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_import_part() {
        this.addLibrarySource('/a.dart','library l; part "b.dart";');
        this.addSource('/b.dart','part of l; class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_import_part2() {
        this.addLibrarySource('/a.dart','library l; part "p1.dart"; part "p2.dart";');
        this.addSource('/p1.dart','part of l; class C1 {}');
        this.addSource('/p2.dart','part of l; class C2 {}');
        let library = this.checkLibrary('import "a.dart"; C1 c1; C2 c2;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nC1 c1;\nC2 c2;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nC1 c1;\nC2 c2;\n');
        }
    }
    test_type_reference_to_import_part_in_subdir() {
        this.addLibrarySource('/a/b.dart','library l; part "c.dart";');
        this.addSource('/a/c.dart','part of l; class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a/b.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a/b.dart\';\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'import \'a/b.dart\';\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_import_relative() {
        this.addLibrarySource('/a.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nC c;\nE e;\nF f;\n');
        }
    }
    test_type_reference_to_typedef() {
        let library = this.checkLibrary('typedef F(); F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F();\nF f;\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F();\nF f;\n');
        }
    }
    test_type_reference_to_typedef_with_type_arguments() {
        let library = this.checkLibrary('typedef U F<T, U>(T t); F<int, String> f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);\nF<int, String> f;\n');
        }else {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);\nF<int, String> f;\n');
        }
    }
    test_type_reference_to_typedef_with_type_arguments_implicit() {
        let library = this.checkLibrary('typedef U F<T, U>(T t); F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);\nF f;\n');
        }else {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);\nF f;\n');
        }
    }
    test_type_unresolved() {
        let library = this.checkLibrary('C c;',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic c;\n');
        }else {
            lib6.checkElementText(library,'dynamic c;\n');
        }
    }
    test_type_unresolved_prefixed() {
        let library = this.checkLibrary('import "dart:core" as core; core.C c;',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:core\' as core;\ndynamic c;\n');
        }else {
            lib6.checkElementText(library,'import \'dart:core\' as core;\ndynamic c;\n');
        }
    }
    test_typedef_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\ntypedef F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs\n */\ntypedef dynamic F();\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs\n */\ntypedef dynamic F();\n');
        }
    }
    test_typedef_generic() {
        let library = this.checkLibrary('typedef F<T> = int Function<S>(List<S> list, num Function<A>(A), T);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef F<T> = int Function<S>(List<S> list, <A>(A) → num , T );\n');
        }else {
            lib6.checkElementText(library,'typedef F<T> = int Function<S>(List<S> list, <A>(A) → num , T );\n');
        }
    }
    test_typedef_generic_asFieldType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('typedef Foo<S> = S Function<T>(T x);\nclass A {\n  Foo<int> f;\n}\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef Foo<S> = S Function<T>(T x);\nclass A {\n  <T>(T) → int f;\n}\n');
        }else {
            lib6.checkElementText(library,'typedef Foo<S> = S Function<T>(T x);\nclass A {\n  <T>(T) → int f;\n}\n');
        }
    }
    test_typedef_parameter_parameters() {
        let library = this.checkLibrary('typedef F(g(x, y));');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F((dynamic, dynamic) → dynamic g);\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F((dynamic, dynamic) → dynamic g);\n');
        }
    }
    test_typedef_parameter_parameters_in_generic_class() {
        let library = this.checkLibrary('typedef F<A, B>(A g(B x));');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F<A, B>((B) → A g);\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F<A, B>((B) → A g);\n');
        }
    }
    test_typedef_parameter_return_type() {
        let library = this.checkLibrary('typedef F(int g());');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(() → int g);\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F(() → int g);\n');
        }
    }
    test_typedef_parameter_type() {
        let library = this.checkLibrary('typedef F(int i);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(int i);\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F(int i);\n');
        }
    }
    test_typedef_parameter_type_generic() {
        let library = this.checkLibrary('typedef F<T>(T t);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F<T>(T t);\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F<T>(T t);\n');
        }
    }
    test_typedef_parameters() {
        let library = this.checkLibrary('typedef F(x, y);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(dynamic x, dynamic y);\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F(dynamic x, dynamic y);\n');
        }
    }
    test_typedef_return_type() {
        let library = this.checkLibrary('typedef int F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef int F();\n');
        }else {
            lib6.checkElementText(library,'typedef int F();\n');
        }
    }
    test_typedef_return_type_generic() {
        let library = this.checkLibrary('typedef T F<T>();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef T F<T>();\n');
        }else {
            lib6.checkElementText(library,'typedef T F<T>();\n');
        }
    }
    test_typedef_return_type_implicit() {
        let library = this.checkLibrary('typedef F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F();\n');
        }else {
            lib6.checkElementText(library,'typedef dynamic F();\n');
        }
    }
    test_typedef_return_type_void() {
        let library = this.checkLibrary('typedef void F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef void F();\n');
        }else {
            lib6.checkElementText(library,'typedef void F();\n');
        }
    }
    test_typedef_type_parameters() {
        let library = this.checkLibrary('typedef U F<T, U>(T t);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);\n');
        }else {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);\n');
        }
    }
    test_typedef_type_parameters_bound() {
        let library = this.checkLibrary('typedef U F<T extends Object, U extends D>(T t); class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T extends Object, U extends D>(T t);\nclass D {\n}\n');
        }else {
            lib6.checkElementText(library,'typedef U F<T extends Object, U extends D>(T t);\nclass D {\n}\n');
        }
    }
    test_typedef_type_parameters_bound_recursive() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('typedef void F<T extends F>();');
        lib6.checkElementText(library,'typedef void F<T extends F>();\n');
    }
    test_typedef_type_parameters_bound_recursive2() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('typedef void F<T extends List<F>>();');
        lib6.checkElementText(library,'typedef void F<T extends List<F>>();\n');
    }
    test_typedef_type_parameters_f_bound_complex() {
        let library = this.checkLibrary('typedef U F<T extends List<U>, U>(T t);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T extends List<U>, U>(T t);\n');
        }else {
            lib6.checkElementText(library,'typedef U F<T extends List<U>, U>(T t);\n');
        }
    }
    test_typedef_type_parameters_f_bound_simple() {
        let library = this.checkLibrary('typedef U F<T extends U, U>(T t);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T extends U, U>(T t);\n');
        }else {
            lib6.checkElementText(library,'typedef U F<T extends U, U>(T t);\n');
        }
    }
    test_typedefs() {
        let library = this.checkLibrary('f() {} g() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}\ndynamic g() {}\n');
        }else {
            lib6.checkElementText(library,'dynamic f() {}\ndynamic g() {}\n');
        }
    }
    test_unresolved_annotation_instanceCreation_argument_super() {
        let library = this.checkLibrary('class A {\n  const A(_);\n}\n\n@A(super)\nclass C {}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {\n  A(_);\n}\n\nclass C {\n  synthetic C();\n}\n');
        }else {
            lib6.checkElementText(library,'class A {\n  A(_);\n}\n\nclass C {\n  synthetic C();\n}\n');
        }
    }
    test_unresolved_annotation_instanceCreation_argument_this() {
        let library = this.checkLibrary('class A {\n  const A(_);\n}\n\n@A(this)\nclass C {}\n',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {\n  const A(dynamic _);\n}\n@\n        A/*location: test.dart;A*/(this)\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'class A {\n  const A(dynamic _);\n}\n@\n        A/*location: test.dart;A*/(this)\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_namedConstructorCall_noClass() {
        let library = this.checkLibrary('@foo.bar() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        foo/*location: null*/.\n        bar/*location: null*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'@\n        foo/*location: null*/.\n        bar/*location: null*/()\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_namedConstructorCall_noConstructor() {
        let library = this.checkLibrary('@String.foo() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        String/*location: dart:core;String*/.\n        foo/*location: null*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'@\n        String/*location: dart:core;String*/.\n        foo/*location: null*/()\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_prefixedIdentifier_badPrefix() {
        let library = this.checkLibrary('@foo.bar class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        foo/*location: null*/.\n        bar/*location: null*/\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'@\n        foo/*location: null*/.\n        bar/*location: null*/\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_prefixedIdentifier_noDeclaration() {
        let library = this.checkLibrary('import "dart:async" as foo; @foo.bar class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as foo;\n@\n        foo/*location: test.dart;foo*/.\n        bar/*location: null*/\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as foo;\n@\n        foo/*location: test.dart;foo*/.\n        bar/*location: null*/\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_prefixedNamedConstructorCall_badPrefix() {
        let library = this.checkLibrary('@foo.bar.baz() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        foo/*location: null*/.\n        bar/*location: null*/.\n        baz/*location: null*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'@\n        foo/*location: null*/.\n        bar/*location: null*/.\n        baz/*location: null*/()\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_prefixedNamedConstructorCall_noClass() {
        let library = this.checkLibrary('import "dart:async" as foo; @foo.bar.baz() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as foo;\n@\n        foo/*location: test.dart;foo*/.\n        bar/*location: null*/.\n        baz/*location: null*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as foo;\n@\n        foo/*location: test.dart;foo*/.\n        bar/*location: null*/.\n        baz/*location: null*/()\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_prefixedNamedConstructorCall_noConstructor() {
        let library = this.checkLibrary('import "dart:async" as foo; @foo.Future.bar() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as foo;\n@\n        foo/*location: test.dart;foo*/.\n        Future/*location: dart:async;Future*/.\n        bar/*location: null*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as foo;\n@\n        foo/*location: test.dart;foo*/.\n        Future/*location: dart:async;Future*/.\n        bar/*location: null*/()\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_prefixedUnnamedConstructorCall_badPrefix() {
        let library = this.checkLibrary('@foo.bar() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        foo/*location: null*/.\n        bar/*location: null*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'@\n        foo/*location: null*/.\n        bar/*location: null*/()\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_prefixedUnnamedConstructorCall_noClass() {
        let library = this.checkLibrary('import "dart:async" as foo; @foo.bar() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as foo;\n@\n        foo/*location: test.dart;foo*/.\n        bar/*location: null*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as foo;\n@\n        foo/*location: test.dart;foo*/.\n        bar/*location: null*/()\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_simpleIdentifier() {
        let library = this.checkLibrary('@foo class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        foo/*location: null*/\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'@\n        foo/*location: null*/\nclass C {\n}\n');
        }
    }
    test_unresolved_annotation_unnamedConstructorCall_noClass() {
        let library = this.checkLibrary('@foo() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@\n        foo/*location: null*/()\nclass C {\n}\n');
        }else {
            lib6.checkElementText(library,'@\n        foo/*location: null*/()\nclass C {\n}\n');
        }
    }
    test_unresolved_export() {
        this.allowMissingFiles = true;
        let library = this.checkLibrary("export 'foo.dart';",{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'foo.dart\';\n');
        }else {
            lib6.checkElementText(library,'export \'foo.dart\';\n');
        }
    }
    test_unresolved_import() {
        this.allowMissingFiles = true;
        let library : any = this.checkLibrary("import 'foo.dart';",{
            allowErrors : true});
        let importedLibrary : any = op(Op.INDEX,library.imports,0).importedLibrary;
        expect(importedLibrary.loadLibraryFunction,isNotNull);
        expect(importedLibrary.publicNamespace,isNotNull);
        expect(importedLibrary.exportNamespace,isNotNull);
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';\n');
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';\n');
        }
    }
    test_unresolved_part() {
        this.allowMissingFiles = true;
        let library = this.checkLibrary("part 'foo.dart';",{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'part \'foo.dart\';\n--------------------\nunit: foo.dart\n\n');
        }else {
            lib6.checkElementText(library,'part \'foo.dart\';\n--------------------\nunit: foo.dart\n\n');
        }
    }
    test_unused_type_parameter() {
        let library = this.checkLibrary('class C<T> {\n  void f() {}\n}\nC<int> c;\nvar v = c.f;\n');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {\n  void f() {}\n}\nC<int> c;\n() → void v;\n');
        }else {
            lib6.checkElementText(library,'class C<T> {\n  void f() {}\n}\nC<int> c;\ndynamic v;\n');
        }
    }
    test_variable_const() {
        let library = this.checkLibrary('const int i = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int i = 0;\n');
        }else {
            lib6.checkElementText(library,'const int i = 0;\n');
        }
    }
    test_variable_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0\n/**\n * Docs\n */\nvar x;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**\n * Docs\n */\ndynamic x;\n');
        }else {
            lib6.checkElementText(library,'/**\n * Docs\n */\ndynamic x;\n');
        }
    }
    test_variable_final() {
        let library = this.checkLibrary('final int x = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'final int x;\n');
        }else {
            lib6.checkElementText(library,'final int x;\n');
        }
    }
    test_variable_final_top_level_untyped() {
        let library = this.checkLibrary('final v = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'final int v;\n');
        }else {
            lib6.checkElementText(library,'final dynamic v;\n');
        }
    }
    test_variable_getterInLib_setterInPart() {
        this.addSource('/a.dart','part of my.lib; void set x(int _) {}');
        let library = this.checkLibrary('library my.lib; part "a.dart"; int get x => 42;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\nint get x {}\n--------------------\nunit: a.dart\n\nvoid set x(int _) {}\n');
        }else {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\nint get x {}\n--------------------\nunit: a.dart\n\nvoid set x(int _) {}\n');
        }
    }
    test_variable_getterInPart_setterInLib() {
        this.addSource('/a.dart','part of my.lib; int get x => 42;');
        let library = this.checkLibrary('library my.lib; part "a.dart"; void set x(int _) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\nvoid set x(int _) {}\n--------------------\nunit: a.dart\n\nint get x {}\n');
        }else {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\nvoid set x(int _) {}\n--------------------\nunit: a.dart\n\nint get x {}\n');
        }
    }
    test_variable_getterInPart_setterInPart() {
        this.addSource('/a.dart','part of my.lib; int get x => 42;');
        this.addSource('/b.dart','part of my.lib; void set x(int _) {}');
        let library = this.checkLibrary('library my.lib; part "a.dart"; part "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\npart \'b.dart\';\n--------------------\nunit: a.dart\n\nint get x {}\n--------------------\nunit: b.dart\n\nvoid set x(int _) {}\n');
        }else {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\npart \'b.dart\';\n--------------------\nunit: a.dart\n\nint get x {}\n--------------------\nunit: b.dart\n\nvoid set x(int _) {}\n');
        }
    }
    test_variable_implicit_type() {
        let library = this.checkLibrary('var x;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic x;\n');
        }else {
            lib6.checkElementText(library,'dynamic x;\n');
        }
    }
    test_variable_inferred_type_implicit_initialized() {
        let library = this.checkLibrary('var v = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int v;\n');
        }else {
            lib6.checkElementText(library,'dynamic v;\n');
        }
    }
    test_variable_propagatedType_const_noDep() {
        let library = this.checkLibrary('const i = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int i = 0;\n');
        }else {
            lib6.checkElementText(library,'const dynamic i = 0;\n');
        }
    }
    test_variable_propagatedType_final_dep_inLib() {
        this.addLibrarySource('/a.dart','final a = 1;');
        let library = this.checkLibrary('import "a.dart"; final b = a / 2;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';\nfinal num b;\n');
        }else {
            lib6.checkElementText(library,'import \'a.dart\';\nfinal dynamic b;\n');
        }
    }
    test_variable_propagatedType_final_dep_inPart() {
        this.addSource('/a.dart','part of lib; final a = 1;');
        let library = this.checkLibrary('library lib; part "a.dart"; final b = a / 2;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library lib;\npart \'a.dart\';\nfinal num b;\n--------------------\nunit: a.dart\n\nfinal int a;\n');
        }else {
            lib6.checkElementText(library,'library lib;\npart \'a.dart\';\nfinal dynamic b;\n--------------------\nunit: a.dart\n\nfinal dynamic a;\n');
        }
    }
    test_variable_propagatedType_final_noDep() {
        let library = this.checkLibrary('final i = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'final int i;\n');
        }else {
            lib6.checkElementText(library,'final dynamic i;\n');
        }
    }
    test_variable_propagatedType_implicit_dep() {
        this.addLibrarySource('/a.dart','class C {}');
        this.addLibrarySource('/b.dart','import "a.dart"; C f() => null;');
        let library = this.checkLibrary('import "b.dart"; final x = f();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'b.dart\';\nfinal C x;\n');
        }else {
            lib6.checkElementText(library,'import \'b.dart\';\nfinal dynamic x;\n');
        }
    }
    test_variable_setterInPart_getterInPart() {
        this.addSource('/a.dart','part of my.lib; void set x(int _) {}');
        this.addSource('/b.dart','part of my.lib; int get x => 42;');
        let library = this.checkLibrary('library my.lib; part "a.dart"; part "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\npart \'b.dart\';\n--------------------\nunit: a.dart\n\nvoid set x(int _) {}\n--------------------\nunit: b.dart\n\nint get x {}\n');
        }else {
            lib6.checkElementText(library,'library my.lib;\npart \'a.dart\';\npart \'b.dart\';\n--------------------\nunit: a.dart\n\nvoid set x(int _) {}\n--------------------\nunit: b.dart\n\nint get x {}\n');
        }
    }
    test_variables() {
        let library = this.checkLibrary('int i; int j;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int i;\nint j;\n');
        }else {
            lib6.checkElementText(library,'int i;\nint j;\n');
        }
    }
    validateGetElement(text : string,original : any) : any {
        let resynthesizer : any = this.encodeDecodeLibrarySource(original.library.source);
        let location : any = original.location;
        let result : any = resynthesizer.getElement(location);
        this.checkMinimalResynthesisWork(resynthesizer,original.library);
        expect(resynthesizer.resynthesisCount,3);
        expect(result.location,location);
        return result;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResynthesizeTest() {
    }
}

export class properties {
}
