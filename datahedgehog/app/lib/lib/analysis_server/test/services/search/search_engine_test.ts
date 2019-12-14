/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/search/search_engine_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SearchEngineImplTest);
    });
};
export namespace ExpectedMatch {
    export type Constructors = 'ExpectedMatch';
    export type Interface = Omit<ExpectedMatch, Constructors>;
}
@DartClass
export class ExpectedMatch {
    element : any;

    kind : any;

    range : any;

    isResolved : boolean;

    isQualified : boolean;

    constructor(element : any,kind : any,offset : number,length : number,_namedArguments? : {isResolved? : boolean,isQualified? : boolean}) {
    }
    @defaultConstructor
    ExpectedMatch(element : any,kind : any,offset : number,length : number,_namedArguments? : {isResolved? : boolean,isQualified? : boolean}) {
        let {isResolved,isQualified} = Object.assign({
            "isResolved" : true,
            "isQualified" : false}, _namedArguments );
        this.element = element;
        this.kind = kind;
        this.isResolved = isResolved;
        this.isQualified = isQualified;
        this.range = new bare.createInstance(any,null,offset,length);
    }
    [OperatorMethods.EQUALS](match : core.DartObject) : boolean {
        return is(match, any) && op(Op.EQUALS,match.element,this.element) && op(Op.EQUALS,match.kind,this.kind) && op(Op.EQUALS,match.isResolved,this.isResolved) && op(Op.EQUALS,match.isQualified,this.isQualified) && op(Op.EQUALS,match.sourceRange,this.range);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("ExpectedMatch(kind=");
        buffer.write(this.kind);
        buffer.write(", element=");
        buffer.write(this.element != null ? this.element.displayName : 'null');
        buffer.write(", range=");
        buffer.write(this.range);
        buffer.write(", isResolved=");
        buffer.write(this.isResolved);
        buffer.write(", isQualified=");
        buffer.write(this.isQualified);
        buffer.write(")");
        return buffer.toString();
    }
}

export namespace SearchEngineImplTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'SearchEngineImplTest';
    export type Interface = Omit<SearchEngineImplTest, Constructors>;
}
@DartClass
export class SearchEngineImplTest extends lib3.AbstractSingleUnitTest {
    index : any;

    searchEngine : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    setUp() : void {
        super.setUp();
        this.index = createMemoryIndex();
        this.searchEngine = new bare.createInstance(any,null,this.index,(_ : any) =>  {
            return new bare.createInstance(any,null,this.context);
        });
    }
    test_searchAllSubtypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class T {}
            let element : any = this.findElement('T');
            let subtypes : core.DartSet<any> = await this.searchEngine.searchAllSubtypes(element);
            expect(subtypes,hasLength(3));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'A');
            })));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'B');
            })));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'C');
            })));
        } )());
    }

    test_searchMemberDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let elementA : any = this.findElement('A');
            let elementB : any = this.findElement('B');
            let expected = new core.DartList.literal(this._expectId(op(Op.INDEX,elementA.methods,0),MatchKind.DECLARATION,'test() {}'),this._expectId(op(Op.INDEX,elementB.fields,0),MatchKind.DECLARATION,'test = 1;'));
            let matches : core.DartList<any> = await this.searchEngine.searchMemberDeclarations('test');
            SearchEngineImplTest._assertMatches(matches,expected);
        } )());
    }

    test_searchMemberReferences_qualified_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class C {
            let matches : core.DartList<any> = await this.searchEngine.searchMemberReferences('test');
            expect(matches,isEmpty);
        } )());
    }

    test_searchMemberReferences_qualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('main(p) {
            let main : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectIdQU(main,MatchKind.READ,'test);'),this._expectIdQU(main,MatchKind.WRITE,'test = 1;'),this._expectIdQU(main,MatchKind.READ_WRITE,'test += 2;'),this._expectIdQU(main,MatchKind.INVOCATION,'test();'));
            let matches : core.DartList<any> = await this.searchEngine.searchMemberReferences('test');
            SearchEngineImplTest._assertMatches(matches,expected);
        } )());
    }

    test_searchMemberReferences_unqualified_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class C {
            let matches : core.DartList<any> = await this.searchEngine.searchMemberReferences('test');
            expect(matches,isEmpty);
        } )());
    }

    test_searchMemberReferences_unqualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('class C {
            let main : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectIdU(main,MatchKind.READ,'test);'),this._expectIdU(main,MatchKind.WRITE,'test = 1;'),this._expectIdU(main,MatchKind.READ_WRITE,'test += 2;'),this._expectIdU(main,MatchKind.INVOCATION,'test();'));
            let matches : core.DartList<any> = await this.searchEngine.searchMemberReferences('test');
            SearchEngineImplTest._assertMatches(matches,expected);
        } )());
    }

    test_searchReferences_ClassElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}
            let element : any = this.findElement('A');
            let pElement : any = this.findElement('p');
            let vElement : any = this.findElement('v');
            let expected = new core.DartList.literal(this._expectId(pElement,MatchKind.REFERENCE,'A p'),this._expectId(vElement,MatchKind.REFERENCE,'A v'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_CompilationUnitElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_part.dart','part of lib;
            await this._indexTestUnit('library lib;
            let element : any = op(Op.INDEX,this.testLibraryElement.parts,0);
            let expected = new core.DartList.literal(this._expectIdQ(this.testUnitElement,MatchKind.REFERENCE,"'my_part.dart'",{
                length : new core.DartString("'my_part.dart'").length}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ConstructorElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let element : any = this.findElement('named');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(mainElement,MatchKind.REFERENCE,'.named();',{
                length : 6}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ConstructorElement_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let classElement : any = this.findElement('A');
            let element : any = classElement.unnamedConstructor;
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(mainElement,MatchKind.REFERENCE,'();',{
                length : 0}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_Element_unknown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._verifyReferences(DynamicElementImpl.instance,new core.DartList.literal());
        } )());
    }

    test_searchReferences_FieldElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let element : any = this.findElement('field',ElementKind.FIELD);
            let main : any = this.findElement('main');
            let fieldParameter : any = this.findElement('field',ElementKind.PARAMETER);
            let expected = new core.DartList.literal(this._expectIdQ(fieldParameter,MatchKind.WRITE,'field}'),this._expectIdQ(main,MatchKind.REFERENCE,'field: 1'),this._expectId(main,MatchKind.READ,'field); // ref-nq'),this._expectIdQ(main,MatchKind.READ,'field); // ref-q'),this._expectId(main,MatchKind.INVOCATION,'field(); // inv-nq'),this._expectIdQ(main,MatchKind.INVOCATION,'field(); // inv-q'),this._expectId(main,MatchKind.WRITE,'field = 2; // ref-nq'),this._expectIdQ(main,MatchKind.WRITE,'field = 3; // ref-q'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_FieldElement_ofEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('enum MyEnum {
            let enumElement : any = this.findElement('MyEnum');
            let mainElement : any = this.findElement('main');
            await this._verifyReferences(enumElement.getField('index'),new core.DartList.literal(this._expectIdQ(mainElement,MatchKind.READ,'index);')));
            await this._verifyReferences(enumElement.getField('values'),new core.DartList.literal(this._expectIdQ(mainElement,MatchKind.READ,'values);')));
            await this._verifyReferences(enumElement.getField('A'),new core.DartList.literal(this._expectIdQ(mainElement,MatchKind.READ,'A.index);'),this._expectIdQ(mainElement,MatchKind.READ,'A);')));
            await this._verifyReferences(enumElement.getField('B'),new core.DartList.literal(this._expectIdQ(mainElement,MatchKind.READ,'B);')));
        } )());
    }

    test_searchReferences_FieldElement_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let element : any = this.findElement('field',ElementKind.FIELD);
            let main : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(main,MatchKind.READ,'field); // ref-nq'),this._expectIdQ(main,MatchKind.READ,'field); // ref-q'),this._expectId(main,MatchKind.INVOCATION,'field(); // inv-nq'),this._expectIdQ(main,MatchKind.INVOCATION,'field(); // inv-q'),this._expectId(main,MatchKind.WRITE,'field = 2; // ref-nq'),this._expectIdQ(main,MatchKind.WRITE,'field = 3; // ref-q'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('test() {}
            let element : any = this.findElement('test');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,MatchKind.INVOCATION,'test();'),this._expectId(mainElement,MatchKind.REFERENCE,'test);'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_FunctionElement_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('main() {
            let element : any = this.findElement('test');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,MatchKind.INVOCATION,'test();'),this._expectId(mainElement,MatchKind.REFERENCE,'test);'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_FunctionTypeAliasElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('typedef Test();
            let element : any = this.findElement('Test');
            let aElement : any = this.findElement('a');
            let bElement : any = this.findElement('b');
            let expected = new core.DartList.literal(this._expectId(aElement,MatchKind.REFERENCE,'Test a;'),this._expectId(bElement,MatchKind.REFERENCE,'Test b;'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ImportElement_noPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('import \'dart:math\' show max, PI, Random hide min;
            let element : any = op(Op.INDEX,this.testLibraryElement.imports,0);
            let mainElement : any = this.findElement('main');
            let barElement : any = this.findElement('bar');
            let kind = MatchKind.REFERENCE;
            let expected = new core.DartList.literal(this._expectId(mainElement,kind,'PI);',{
                length : 0}),this._expectId(mainElement,kind,'Random()',{
                length : 0}),this._expectId(mainElement,kind,'max(',{
                length : 0}),this._expectId(barElement,kind,'Random bar()',{
                length : 0}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ImportElement_withPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('import \'dart:math\' as math show max, PI, Random hide min;
            let element : any = op(Op.INDEX,this.testLibraryElement.imports,0);
            let mainElement : any = this.findElement('main');
            let barElement : any = this.findElement('bar');
            let kind = MatchKind.REFERENCE;
            let length = new core.DartString('math.').length;
            let expected = new core.DartList.literal(this._expectId(mainElement,kind,'math.PI);',{
                length : length}),this._expectId(mainElement,kind,'math.Random()',{
                length : length}),this._expectId(mainElement,kind,'math.max(',{
                length : length}),this._expectId(barElement,kind,'math.Random bar()',{
                length : length}));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ImportElement_withPrefix_forMultipleImports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('import \'dart:async\' as p;
            let mainElement : any = this.findElement('main');
            let kind = MatchKind.REFERENCE;
            let length = new core.DartString('p.').length;
            {
                let element : any = op(Op.INDEX,this.testLibraryElement.imports,0);
                let expected = new core.DartList.literal(this._expectId(mainElement,kind,'p.Future;',{
                    length : length}));
                await this._verifyReferences(element,expected);
            }
            {
                let element : any = op(Op.INDEX,this.testLibraryElement.imports,1);
                let expected = new core.DartList.literal(this._expectId(mainElement,kind,'p.Random',{
                    length : length}));
                await this._verifyReferences(element,expected);
            }
        } )());
    }

    test_searchReferences_LabelElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('main() {
            let element : any = this.findElement('label');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,MatchKind.REFERENCE,'label; // 1'),this._expectId(mainElement,MatchKind.REFERENCE,'label; // 2'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_LibraryElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let codeA = 'part of lib; // A';
            let codeB = 'part of lib; // B';
            let sourceA = this.addSource('/unitA.dart',codeA);
            let sourceB = this.addSource('/unitB.dart',codeB);
            await this._indexTestUnit('library lib;
            let element : any = this.testLibraryElement;
            let unitElementA : any = op(Op.INDEX,element.parts,0);
            let unitElementB : any = op(Op.INDEX,element.parts,1);
            this.index.indexUnit(this.context.resolveCompilationUnit2(sourceA,this.testLibraryElement.source));
            this.index.indexUnit(this.context.resolveCompilationUnit2(sourceB,this.testLibraryElement.source));
            let expected = new core.DartList.literal(new ExpectedMatch(unitElementA,MatchKind.REFERENCE,new core.DartString(codeA).indexOf('lib; // A'),new core.DartString('lib').length),new ExpectedMatch(unitElementB,MatchKind.REFERENCE,new core.DartString(codeB).indexOf('lib; // B'),new core.DartString('lib').length));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_LocalVariableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('main() {
            let element : any = this.findElement('v');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,MatchKind.WRITE,'v = 1;'),this._expectId(mainElement,MatchKind.READ_WRITE,'v += 2;'),this._expectId(mainElement,MatchKind.READ,'v);'),this._expectId(mainElement,MatchKind.INVOCATION,'v();'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_LocalVariableElement_inForEachLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('main() {
            let element : any = this.findElement('v');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,MatchKind.WRITE,'v = 1;'),this._expectId(mainElement,MatchKind.READ_WRITE,'v += 2;'),this._expectId(mainElement,MatchKind.READ,'v);'),this._expectId(mainElement,MatchKind.INVOCATION,'v();'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let method : any = this.findElement('m');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,MatchKind.INVOCATION,'m(); // 1'),this._expectIdQ(mainElement,MatchKind.INVOCATION,'m(); // 2'),this._expectId(mainElement,MatchKind.REFERENCE,'m); // 3'),this._expectIdQ(mainElement,MatchKind.REFERENCE,'m); // 4'));
            await this._verifyReferences(method,expected);
        } )());
    }

    test_searchReferences_MethodMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A<T> {
            let method : any = this.findNodeElementAtString('m(); // ref');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(mainElement,MatchKind.INVOCATION,'m(); // ref'));
            await this._verifyReferences(method,expected);
        } )());
    }

    test_searchReferences_null_noUnitElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let method : any = this.findElement('m');
            let matches : core.DartList<any> = await this.searchEngine.searchReferences(method);
            expect(matches,hasLength(1));
            this.context.setContents(this.testSource,'');
            expect(matches.single.element,isNull);
        } )());
    }

    test_searchReferences_ParameterElement_ofConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class C {
            let element : any = this.findElement('p');
            let classC : any = this.findElement('C');
            let constructorA : any = classC.unnamedConstructor;
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(constructorA,MatchKind.READ,'p + 1 {'),this._expectId(constructorA,MatchKind.WRITE,'p = 2;'),this._expectId(constructorA,MatchKind.READ_WRITE,'p += 3;'),this._expectId(constructorA,MatchKind.READ,'p);'),this._expectId(constructorA,MatchKind.INVOCATION,'p();'),this._expectIdQ(mainElement,MatchKind.REFERENCE,'p: 42'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ParameterElement_ofLocalFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('main() {
            let element : any = this.findElement('p');
            let fooElement : any = this.findElement('foo');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(fooElement,MatchKind.WRITE,'p = 1;'),this._expectId(fooElement,MatchKind.READ_WRITE,'p += 2;'),this._expectId(fooElement,MatchKind.READ,'p);'),this._expectId(fooElement,MatchKind.INVOCATION,'p();'),this._expectIdQ(mainElement,MatchKind.REFERENCE,'p: 42'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ParameterElement_ofMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class C {
            let element : any = this.findElement('p');
            let fooElement : any = this.findElement('foo');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(fooElement,MatchKind.WRITE,'p = 1;'),this._expectId(fooElement,MatchKind.READ_WRITE,'p += 2;'),this._expectId(fooElement,MatchKind.READ,'p);'),this._expectId(fooElement,MatchKind.INVOCATION,'p();'),this._expectIdQ(mainElement,MatchKind.REFERENCE,'p: 42'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_ParameterElement_ofTopLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('foo({p}) {
            let element : any = this.findElement('p');
            let fooElement : any = this.findElement('foo');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(fooElement,MatchKind.WRITE,'p = 1;'),this._expectId(fooElement,MatchKind.READ_WRITE,'p += 2;'),this._expectId(fooElement,MatchKind.READ,'p);'),this._expectId(fooElement,MatchKind.INVOCATION,'p();'),this._expectIdQ(mainElement,MatchKind.REFERENCE,'p: 42'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_PrefixElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('import \'dart:async\' as ppp;
            let element : any = this.findNodeElementAtString('ppp;');
            let elementA : any = this.findElement('a');
            let elementB : any = this.findElement('b');
            let expected = new core.DartList.literal(this._expectId(elementA,MatchKind.REFERENCE,'ppp.Future'),this._expectId(elementB,MatchKind.REFERENCE,'ppp.Stream'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_PropertyAccessorElement_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let element : any = this.findElement('ggg',ElementKind.GETTER);
            let main : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(main,MatchKind.REFERENCE,'ggg); // ref-nq'),this._expectIdQ(main,MatchKind.REFERENCE,'ggg); // ref-q'),this._expectId(main,MatchKind.INVOCATION,'ggg(); // inv-nq'),this._expectIdQ(main,MatchKind.INVOCATION,'ggg(); // inv-q'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_PropertyAccessorElement_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {
            let element : any = this.findElement('s=');
            let mainElement : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectId(mainElement,MatchKind.REFERENCE,'s = 1'),this._expectIdQ(mainElement,MatchKind.REFERENCE,'s = 2'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchReferences_TopLevelVariableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;
            await this._indexTestUnit('import \'lib.dart\' show V; // imp
            let importElement : any = op(Op.INDEX,this.testLibraryElement.imports,0);
            let impUnit : any = importElement.importedLibrary.definingCompilationUnit;
            let variable : any = op(Op.INDEX,impUnit.topLevelVariables,0);
            let main : any = this.findElement('main');
            let expected = new core.DartList.literal(this._expectIdQ(this.testUnitElement,MatchKind.REFERENCE,'V; // imp'),this._expectIdQ(main,MatchKind.WRITE,'V = 1; // q'),this._expectIdQ(main,MatchKind.READ,'V); // q'),this._expectIdQ(main,MatchKind.INVOCATION,'V(); // q'),this._expectId(main,MatchKind.WRITE,'V = 1; // nq'),this._expectId(main,MatchKind.READ,'V); // nq'),this._expectId(main,MatchKind.INVOCATION,'V(); // nq'));
            await this._verifyReferences(variable,expected);
        } )());
    }

    test_searchReferences_TypeParameterElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A<T> {
            let element : any = this.findElement('T');
            let aElement : any = this.findElement('a');
            let bElement : any = this.findElement('b');
            let expected = new core.DartList.literal(this._expectId(aElement,MatchKind.REFERENCE,'T a'),this._expectId(bElement,MatchKind.REFERENCE,'T b'));
            await this._verifyReferences(element,expected);
        } )());
    }

    test_searchSubtypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class T {}
            let element : any = this.findElement('T');
            let elementA : any = this.findElement('A');
            let elementB : any = this.findElement('B');
            let elementC : any = this.findElement('C');
            let expected = new core.DartList.literal(this._expectId(elementA,MatchKind.REFERENCE,'T {} // A'),this._expectId(elementB,MatchKind.REFERENCE,'T; // B'),this._expectId(elementC,MatchKind.REFERENCE,'T {} // C'));
            let matches : core.DartList<any> = await this.searchEngine.searchSubtypes(element);
            SearchEngineImplTest._assertMatches(matches,expected);
        } )());
    }

    test_searchTopLevelDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {} // A
            let topA : any = this.findElement('A');
            let topB : any = this.findElement('B');
            let topC : any = this.findElement('C');
            let topD : any = this.findElement('D');
            let topE : any = this.findElement('E');
            let expected = new core.DartList.literal(this._expectId(topA,MatchKind.DECLARATION,'A {} // A'),this._expectId(topB,MatchKind.DECLARATION,'B ='),this._expectId(topC,MatchKind.DECLARATION,'C()'),this._expectId(topD,MatchKind.DECLARATION,'D() {}'),this._expectId(topE,MatchKind.DECLARATION,'E = null'));
            let matches : core.DartList<any> = await this.searchEngine.searchTopLevelDeclarations('^[A-E]$');
            SearchEngineImplTest._assertMatches(matches,expected);
        } )());
    }

    _expectId(element : any,kind : any,search : string,_namedArguments? : {length? : number,isResolved? : boolean,isQualified? : boolean}) : ExpectedMatch {
        let {length,isResolved,isQualified} = Object.assign({
            "isResolved" : true,
            "isQualified" : false}, _namedArguments );
        let offset : number = this.findOffset(search);
        if (length == null) {
            length = this.getLeadingIdentifierLength(search);
        }
        return new ExpectedMatch(element,kind,offset,length,{
            isResolved : isResolved,isQualified : isQualified});
    }
    _expectIdQ(element : any,kind : any,search : string,_namedArguments? : {length? : number,isResolved? : boolean}) : ExpectedMatch {
        let {length,isResolved} = Object.assign({
            "isResolved" : true}, _namedArguments );
        return this._expectId(element,kind,search,{
            isQualified : true,length : length});
    }
    _expectIdQU(element : any,kind : any,search : string,_namedArguments? : {length? : number}) : ExpectedMatch {
        let {length} = Object.assign({
        }, _namedArguments );
        return this._expectId(element,kind,search,{
            isQualified : true,isResolved : false,length : length});
    }
    _expectIdU(element : any,kind : any,search : string,_namedArguments? : {length? : number}) : ExpectedMatch {
        let {length} = Object.assign({
        }, _namedArguments );
        return this._expectId(element,kind,search,{
            isQualified : false,isResolved : false,length : length});
    }
    _indexTestUnit(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(code);
            this.index.indexUnit(this.testUnit);
        } )());
    }

    _verifyReferences(element : any,expectedMatches : core.DartList<ExpectedMatch>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = await this.searchEngine.searchReferences(element);
            SearchEngineImplTest._assertMatches(matches,expectedMatches);
            expect(matches,hasLength(expectedMatches.length));
        } )());
    }

    static _assertMatches(matches : core.DartList<any>,expectedMatches : core.DartList<ExpectedMatch>) : void {
        expect(matches,unorderedEquals(expectedMatches));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SearchEngineImplTest() {
    }
}

export class properties {
}