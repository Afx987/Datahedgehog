/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/index/index_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(IndexTest);
    });
};
export namespace IndexTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'IndexTest';
    export type Interface = Omit<IndexTest, Constructors>;
}
@DartClass
export class IndexTest extends lib3.AbstractSingleUnitTest {
    index : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    findLocation(locations : core.DartList<any>,libraryUri : string,unitUri : string,offset : number,length : number,isQualified : boolean) : any {
        for(let location of locations) {
            if (op(Op.EQUALS,location.libraryUri,libraryUri) && op(Op.EQUALS,location.unitUri,unitUri) && op(Op.EQUALS,location.offset,offset) && op(Op.EQUALS,location.length,length) && op(Op.EQUALS,location.isQualified,isQualified)) {
                return location;
            }
        }
        fail(`No at ${offset} with length ${length} qualified=${isQualified} in\n` + `${locations.join('\n')}`);
        return null;
    }
    findLocationSource(locations : core.DartList<any>,source : any,search : string,isQualified : boolean,_namedArguments? : {length? : number}) : any {
        let {length} = Object.assign({
        }, _namedArguments );
        let code : string = source.contents.data;
        let offset : number = new core.DartString(code).indexOf(search);
        expect(offset,isNonNegative,{
            reason : `Not found "${search}" in\n${code}`});
        length = ( length ) || ( this.getLeadingIdentifierLength(search) );
        let uri : string = source.uri.toString();
        return this.findLocation(locations,uri,uri,offset,length,isQualified);
    }
    findLocationTest(locations : core.DartList<any>,search : string,isQualified : boolean,_namedArguments? : {length? : number}) : any {
        let {length} = Object.assign({
        }, _namedArguments );
        let offset : number = this.findOffset(search);
        length = ( length ) || ( this.getLeadingIdentifierLength(search) );
        let testUri : string = this.testSource.uri.toString();
        return this.findLocation(locations,testUri,testUri,offset,length,isQualified);
    }
    setUp() : void {
        super.setUp();
    }
    tearDown() : void {
        super.tearDown();
        this.index = null;
    }
    test_getDefinedNames_classMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  test() {}\n}\nclass B {\n  int test = 1;\n  main() {\n    int test = 2;\n  }\n}\n');
            let classA : any = this.findElement('A');
            let classB : any = this.findElement('B');
            let locations : core.DartList<any> = await this.index.getDefinedNames(new core.DartRegExp('^test$'),IndexNameKind.classMember);
            expect(locations,hasLength(2));
            this._assertHasDefinedName(locations,op(Op.INDEX,classA.methods,0));
            this._assertHasDefinedName(locations,op(Op.INDEX,classB.fields,0));
        } )());
    }

    test_getDefinedNames_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {} // A\nclass B = Object with A;\ntypedef C();\nD() {}\nvar E = null;\nclass NoMatchABCDE {}\n');
            let topA : any = this.findElement('A');
            let topB : any = this.findElement('B');
            let topC : any = this.findElement('C');
            let topD : any = this.findElement('D');
            let topE : any = this.findElement('E');
            let locations : core.DartList<any> = await this.index.getDefinedNames(new core.DartRegExp('^[A-E]$'),IndexNameKind.topLevel);
            expect(locations,hasLength(5));
            this._assertHasDefinedName(locations,topA);
            this._assertHasDefinedName(locations,topB);
            this._assertHasDefinedName(locations,topC);
            this._assertHasDefinedName(locations,topD);
            this._assertHasDefinedName(locations,topE);
        } )());
    }

    test_getDefinedNames_topLevel2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {} // A\nclass B = Object with A;\nclass NoMatchABCDE {}\n',{
                declOnly : true});
            let topA : any = this.findElement('A');
            let topB : any = this.findElement('B');
            let locations : core.DartList<any> = await this.index.getDefinedNames(new core.DartRegExp('^[A-E]$'),IndexNameKind.topLevel);
            expect(locations,hasLength(2));
            this._assertHasDefinedName(locations,topA);
            this._assertHasDefinedName(locations,topB);
        } )());
    }

    test_getRelations_isExtendedBy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\nclass B extends A {} // B\n');
            let source2 : any = await this._indexUnit('/test2.dart','import \'test.dart\';\nclass C extends A {} // C\n');
            let elementA : any = this.testUnitElement.getType('A');
            let locations : core.DartList<any> = await this.index.getRelations(elementA,IndexRelationKind.IS_EXTENDED_BY);
            this.findLocationTest(locations,'A {} // B',false);
            this.findLocationSource(locations,source2,'A {} // C',false);
        } )());
    }

    test_getRelations_isReferencedBy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('main(int a, int b) {\n}\n');
            let intElement : any = this.context.typeProvider.intType.element;
            let locations : core.DartList<any> = await this.index.getRelations(intElement,IndexRelationKind.IS_REFERENCED_BY);
            this.findLocationTest(locations,'int a',false);
            this.findLocationTest(locations,'int b',false);
        } )());
    }

    test_getUnresolvedMemberReferences_qualified_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  var test; // A\n}\nmain(A a) {\n  print(a.test);\n  a.test = 1;\n  a.test += 2;\n  a.test();\n}\n');
            let locations : core.DartList<any> = await this.index.getUnresolvedMemberReferences('test');
            expect(locations,isEmpty);
        } )());
    }

    test_getUnresolvedMemberReferences_qualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  var test; // A\n}\nmain(p) {\n  print(p.test);\n  p.test = 1;\n  p.test += 2;\n  p.test();\n  print(p.test2); // not requested\n}\n');
            let locations : core.DartList<any> = await this.index.getUnresolvedMemberReferences('test');
            expect(locations,hasLength(4));
            this.findLocationTest(locations,'test);',true);
            this.findLocationTest(locations,'test = 1;',true);
            this.findLocationTest(locations,'test += 2;',true);
            this.findLocationTest(locations,'test();',true);
        } )());
    }

    test_getUnresolvedMemberReferences_unqualified_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  var test;\n  m() {\n    print(test);\n    test = 1;\n    test += 2;\n    test();\n  }\n}\n');
            let locations : core.DartList<any> = await this.index.getUnresolvedMemberReferences('test');
            expect(locations,isEmpty);
        } )());
    }

    test_getUnresolvedMemberReferences_unqualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this._indexTestUnit('class A {\n  m() {\n    print(test);\n    test = 1;\n    test += 2;\n    test();\n    print(test2); // not requested\n  }\n}\n');
            let locations : core.DartList<any> = await this.index.getUnresolvedMemberReferences('test');
            expect(locations,hasLength(4));
            this.findLocationTest(locations,'test);',false);
            this.findLocationTest(locations,'test = 1;',false);
            this.findLocationTest(locations,'test += 2;',false);
            this.findLocationTest(locations,'test();',false);
        } )());
    }

    test_indexDeclarations_afterIndexUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var a = 0;\nvar b = a + 1;\n');
            this.index.indexUnit(this.testUnit);
            let a : any = this.findElement('a');
            {
                let locations : core.DartList<any> = await this.index.getRelations(a.getter,IndexRelationKind.IS_REFERENCED_BY);
                this.findLocationTest(locations,'a + 1',false);
            }
            this.index.indexDeclarations(this.testUnit);
            {
                let locations : core.DartList<any> = await this.index.getRelations(a.getter,IndexRelationKind.IS_REFERENCED_BY);
                this.findLocationTest(locations,'a + 1',false);
            }
        } )());
    }

    test_indexDeclarations_nullUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.index.indexDeclarations(null);
        } )());
    }

    test_indexDeclarations_nullUnitElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('');
            this.testUnit.element = null;
            this.index.indexDeclarations(this.testUnit);
        } )());
    }

    test_indexUnit_nullLibraryElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('');
            let unitElement : any = new _CompilationUnitElementMock();
            expect(unitElement.library,isNull);
            this.testUnit.element = unitElement;
            this.index.indexUnit(this.testUnit);
        } )());
    }

    test_indexUnit_nullUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.index.indexUnit(null);
        } )());
    }

    test_indexUnit_nullUnitElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('');
            this.testUnit.element = null;
            this.index.indexUnit(this.testUnit);
        } )());
    }

    test_removeContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\n');
            let regExp : core.DartRegExp = new core.DartRegExp('^A$');
            expect(await this.index.getDefinedNames(regExp,IndexNameKind.topLevel),hasLength(1));
            this.index.removeContext(this.context);
            expect(await this.index.getDefinedNames(regExp,IndexNameKind.topLevel),isEmpty);
        } )());
    }

    test_removeUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let regExp : core.DartRegExp = new core.DartRegExp('^[AB]$');
            let sourceA : any = this.addSource('/a.dart','class A {}');
            let sourceB : any = this.addSource('/b.dart','class B {}');
            let unitA : any = await this.resolveLibraryUnit(sourceA);
            let unitB : any = await this.resolveLibraryUnit(sourceB);
            this.index.indexUnit(unitA);
            this.index.indexUnit(unitB);
            {
                let locations : core.DartList<any> = await this.index.getDefinedNames(regExp,IndexNameKind.topLevel);
                expect(locations,hasLength(2));
                expect(locations.map((l : any) =>  {
                    return l.libraryUri;
                }),unorderedEquals(new core.DartList.literal(sourceA.uri.toString(),sourceB.uri.toString())));
            }
            this.index.removeUnit(this.context,sourceA,sourceA);
            {
                let locations : core.DartList<any> = await this.index.getDefinedNames(regExp,IndexNameKind.topLevel);
                expect(locations,hasLength(1));
                expect(locations.map((l : any) =>  {
                    return l.libraryUri;
                }),unorderedEquals(new core.DartList.literal(sourceB.uri.toString())));
            }
        } )());
    }

    _assertHasDefinedName(locations : core.DartList<any>,element : any) : void {
        let libraryUri : string = element.library.source.uri.toString();
        let unitUri : string = element.source.uri.toString();
        for(let location of locations) {
            if (op(Op.EQUALS,location.libraryUri,libraryUri) && op(Op.EQUALS,location.unitUri,unitUri) && op(Op.EQUALS,location.offset,element.nameOffset) && op(Op.EQUALS,location.length,element.nameLength)) {
                return;
            }
        }
        fail(`No declaration of ${element} at ${element.nameOffset} in\n` + `${locations.join('\n')}`);
    }
    _indexTestUnit(code : string,_namedArguments? : {declOnly? : boolean}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {declOnly} = Object.assign({
                "declOnly" : false}, _namedArguments );
            await this.resolveTestUnit(code);
            if (declOnly) {
                this.index.indexDeclarations(this.testUnit);
            }else {
                this.index.indexUnit(this.testUnit);
            }
        } )());
    }

    _indexUnit(path : string,code : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(path,code);
            let unit : any = await this.resolveLibraryUnit(source);
            this.index.indexUnit(unit);
            return source;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IndexTest() {
        this.index = createMemoryIndex();
    }
}

export namespace _CompilationUnitElementMock {
    export type Constructors = '_CompilationUnitElementMock';
    export type Interface = Omit<_CompilationUnitElementMock, Constructors>;
}
@DartClass
@Implements(any)
export class _CompilationUnitElementMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CompilationUnitElementMock() {
    }
}

export class properties {
}
