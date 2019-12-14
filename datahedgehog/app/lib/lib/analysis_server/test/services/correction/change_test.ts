/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/change_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ChangeTest);
        defineReflectiveTests(EditTest);
        defineReflectiveTests(FileEditTest);
        defineReflectiveTests(LinkedEditGroupTest);
        defineReflectiveTests(LinkedEditSuggestionTest);
        defineReflectiveTests(PositionTest);
    });
};
export namespace ChangeTest {
    export type Constructors = 'ChangeTest';
    export type Interface = Omit<ChangeTest, Constructors>;
}
@DartClass
export class ChangeTest {
    test_addEdit() : void {
        let change : any = new bare.createInstance(any,null,'msg');
        let edit1 : any = new bare.createInstance(any,null,1,2,'a');
        let edit2 : any = new bare.createInstance(any,null,1,2,'b');
        expect(change.edits,hasLength(0));
        change.addEdit('/a.dart',0,edit1);
        expect(change.edits,hasLength(1));
        change.addEdit('/a.dart',0,edit2);
        expect(change.edits,hasLength(1));
        {
            let fileEdit : any = change.getFileEdit('/a.dart');
            expect(fileEdit,isNotNull);
            expect(fileEdit.edits,unorderedEquals(new core.DartList.literal(edit1,edit2)));
        }
    }
    test_getFileEdit() : void {
        let change : any = new bare.createInstance(any,null,'msg');
        let fileEdit : any = new bare.createInstance(any,null,'/a.dart',0);
        change.addFileEdit(fileEdit);
        expect(change.getFileEdit('/a.dart'),fileEdit);
    }
    test_getFileEdit_empty() : void {
        let change : any = new bare.createInstance(any,null,'msg');
        expect(change.getFileEdit('/some.dart'),isNull);
    }
    test_toJson() : void {
        let change : any = new bare.createInstance(any,null,'msg');
        change.addFileEdit(((_) : any =>  {
            {
                add(new bare.createInstance(any,null,1,2,'aaa'));
                add(new bare.createInstance(any,null,10,20,'bbb'));
                return _;
            }
        })(new bare.createInstance(any,null,'/a.dart',1)));
        change.addFileEdit(((_) : any =>  {
            {
                add(new bare.createInstance(any,null,21,22,'xxx'));
                add(new bare.createInstance(any,null,210,220,'yyy'));
                return _;
            }
        })(new bare.createInstance(any,null,'/b.dart',2)));
        {
            let group = new bare.createInstance(any,null);
            change.addLinkedEditGroup(((_) : any =>  {
                {
                    addPosition(new bare.createInstance(any,null,'/ga.dart',1),2);
                    addPosition(new bare.createInstance(any,null,'/ga.dart',10),2);
                    return _;
                }
            })(group));
            group.addSuggestion(new bare.createInstance(any,null,'AA',LinkedEditSuggestionKind.TYPE));
            group.addSuggestion(new bare.createInstance(any,null,'BB',LinkedEditSuggestionKind.TYPE));
        }
        change.addLinkedEditGroup(((_) : any =>  {
            {
                addPosition(new bare.createInstance(any,null,'/gb.dart',10),5);
                addPosition(new bare.createInstance(any,null,'/gb.dart',100),5);
                return _;
            }
        })(new bare.createInstance(any,null)));
        change.selection = new bare.createInstance(any,null,'/selection.dart',42);
        let expectedJson = new core.DartMap.literal([
            ['message','msg'],
            ['edits',new core.DartList.literal(new core.DartMap.literal([
                ['file','/a.dart'],
                ['fileStamp',1],
                ['edits',new core.DartList.literal(new core.DartMap.literal([
                    ['offset',10],
                    ['length',20],
                    ['replacement','bbb']]),new core.DartMap.literal([
                    ['offset',1],
                    ['length',2],
                    ['replacement','aaa']]))]]),new core.DartMap.literal([
                ['file','/b.dart'],
                ['fileStamp',2],
                ['edits',new core.DartList.literal(new core.DartMap.literal([
                    ['offset',210],
                    ['length',220],
                    ['replacement','yyy']]),new core.DartMap.literal([
                    ['offset',21],
                    ['length',22],
                    ['replacement','xxx']]))]]))],
            ['linkedEditGroups',new core.DartList.literal(new core.DartMap.literal([
                ['length',2],
                ['positions',new core.DartList.literal(new core.DartMap.literal([
                    ['file','/ga.dart'],
                    ['offset',1]]),new core.DartMap.literal([
                    ['file','/ga.dart'],
                    ['offset',10]]))],
                ['suggestions',new core.DartList.literal(new core.DartMap.literal([
                    ['kind','TYPE'],
                    ['value','AA']]),new core.DartMap.literal([
                    ['kind','TYPE'],
                    ['value','BB']]))]]),new core.DartMap.literal([
                ['length',5],
                ['positions',new core.DartList.literal(new core.DartMap.literal([
                    ['file','/gb.dart'],
                    ['offset',10]]),new core.DartMap.literal([
                    ['file','/gb.dart'],
                    ['offset',100]]))],
                ['suggestions',new core.DartList.literal()]]))],
            ['selection',new core.DartMap.literal([
                ['file','/selection.dart'],
                ['offset',42]])]]);
        expect(change.toJson(),expectedJson);
        change.toString();
    }
    constructor() {
    }
    @defaultConstructor
    ChangeTest() {
    }
}

export namespace EditTest {
    export type Constructors = 'EditTest';
    export type Interface = Omit<EditTest, Constructors>;
}
@DartClass
export class EditTest {
    test_applySequence() : void {
        let edit1 : any = new bare.createInstance(any,null,5,2,'abc');
        let edit2 : any = new bare.createInstance(any,null,1,0,'!');
        expect(SourceEdit.applySequence('0123456789',new core.DartList.literal(edit1,edit2)),'0!1234abc789');
    }
    test_editFromRange() : void {
        let range : any = new bare.createInstance(any,null,1,2);
        let edit : any = newSourceEdit_range(range,'foo');
        expect(edit.offset,1);
        expect(edit.length,2);
        expect(edit.replacement,'foo');
    }
    test_eqEq() : void {
        let a : any = new bare.createInstance(any,null,1,2,'aaa');
        expect(op(Op.EQUALS,a,a),isTrue);
        expect(op(Op.EQUALS,a,new bare.createInstance(any,null,1,2,'aaa')),isTrue);
        expect(op(Op.EQUALS,a,this),isFalse);
        expect(op(Op.EQUALS,a,new bare.createInstance(any,null,1,2,'bbb')),isFalse);
        expect(op(Op.EQUALS,a,new bare.createInstance(any,null,10,2,'aaa')),isFalse);
    }
    test_new() : void {
        let edit : any = new bare.createInstance(any,null,1,2,'foo',{
            id : 'my-id'});
        expect(edit.offset,1);
        expect(edit.length,2);
        expect(edit.replacement,'foo');
        expect(edit.toJson(),new core.DartMap.literal([
            ['offset',1],
            ['length',2],
            ['replacement','foo'],
            ['id','my-id']]));
    }
    test_toJson() : void {
        let edit : any = new bare.createInstance(any,null,1,2,'foo');
        let expectedJson = new core.DartMap.literal([
            [OFFSET,1],
            [LENGTH,2],
            [REPLACEMENT,'foo']]);
        expect(edit.toJson(),expectedJson);
    }
    constructor() {
    }
    @defaultConstructor
    EditTest() {
    }
}

export namespace FileEditTest {
    export type Constructors = 'FileEditTest';
    export type Interface = Omit<FileEditTest, Constructors>;
}
@DartClass
export class FileEditTest {
    test_add_sorts() : void {
        let edit1a : any = new bare.createInstance(any,null,1,0,'a1');
        let edit1b : any = new bare.createInstance(any,null,1,0,'a2');
        let edit10 : any = new bare.createInstance(any,null,10,1,'b');
        let edit100 : any = new bare.createInstance(any,null,100,2,'c');
        let fileEdit : any = new bare.createInstance(any,null,'/test.dart',0);
        fileEdit.add(edit100);
        fileEdit.add(edit1a);
        fileEdit.add(edit1b);
        fileEdit.add(edit10);
        expect(fileEdit.edits,new core.DartList.literal(edit100,edit10,edit1b,edit1a));
    }
    test_addAll() : void {
        let edit1a : any = new bare.createInstance(any,null,1,0,'a1');
        let edit1b : any = new bare.createInstance(any,null,1,0,'a2');
        let edit10 : any = new bare.createInstance(any,null,10,1,'b');
        let edit100 : any = new bare.createInstance(any,null,100,2,'c');
        let fileEdit : any = new bare.createInstance(any,null,'/test.dart',0);
        fileEdit.addAll(new core.DartList.literal(edit100,edit1a,edit10,edit1b));
        expect(fileEdit.edits,new core.DartList.literal(edit100,edit10,edit1b,edit1a));
    }
    test_new() : void {
        let fileEdit : any = new bare.createInstance(any,null,'/test.dart',100);
        fileEdit.add(new bare.createInstance(any,null,1,2,'aaa'));
        fileEdit.add(new bare.createInstance(any,null,10,20,'bbb'));
        expect(fileEdit.toString(),'{"file":"/test.dart","fileStamp":100,"edits":[' + '{"offset":10,"length":20,"replacement":"bbb"},' + '{"offset":1,"length":2,"replacement":"aaa"}]}');
    }
    test_toJson() : void {
        let fileEdit : any = new bare.createInstance(any,null,'/test.dart',100);
        fileEdit.add(new bare.createInstance(any,null,1,2,'aaa'));
        fileEdit.add(new bare.createInstance(any,null,10,20,'bbb'));
        let expectedJson = new core.DartMap.literal([
            [FILE,'/test.dart'],
            [FILE_STAMP,100],
            [EDITS,new core.DartList.literal(new core.DartMap.literal([
                [OFFSET,10],
                [LENGTH,20],
                [REPLACEMENT,'bbb']]),new core.DartMap.literal([
                [OFFSET,1],
                [LENGTH,2],
                [REPLACEMENT,'aaa']]))]]);
        expect(fileEdit.toJson(),expectedJson);
    }
    constructor() {
    }
    @defaultConstructor
    FileEditTest() {
    }
}

export namespace LinkedEditGroupTest {
    export type Constructors = 'LinkedEditGroupTest';
    export type Interface = Omit<LinkedEditGroupTest, Constructors>;
}
@DartClass
export class LinkedEditGroupTest {
    test_new() : void {
        let group : any = new bare.createInstance(any,null);
        group.addPosition(new bare.createInstance(any,null,'/a.dart',1),2);
        group.addPosition(new bare.createInstance(any,null,'/b.dart',10),2);
        expect(group.toString(),'{"positions":[' + '{"file":"/a.dart","offset":1},' + '{"file":"/b.dart","offset":10}],"length":2,"suggestions":[]}');
    }
    test_toJson() : void {
        let group : any = new bare.createInstance(any,null);
        group.addPosition(new bare.createInstance(any,null,'/a.dart',1),2);
        group.addPosition(new bare.createInstance(any,null,'/b.dart',10),2);
        group.addSuggestion(new bare.createInstance(any,null,'AA',LinkedEditSuggestionKind.TYPE));
        group.addSuggestion(new bare.createInstance(any,null,'BB',LinkedEditSuggestionKind.TYPE));
        expect(group.toJson(),new core.DartMap.literal([
            ['length',2],
            ['positions',new core.DartList.literal(new core.DartMap.literal([
                ['file','/a.dart'],
                ['offset',1]]),new core.DartMap.literal([
                ['file','/b.dart'],
                ['offset',10]]))],
            ['suggestions',new core.DartList.literal(new core.DartMap.literal([
                ['kind','TYPE'],
                ['value','AA']]),new core.DartMap.literal([
                ['kind','TYPE'],
                ['value','BB']]))]]));
    }
    constructor() {
    }
    @defaultConstructor
    LinkedEditGroupTest() {
    }
}

export namespace LinkedEditSuggestionTest {
    export type Constructors = 'LinkedEditSuggestionTest';
    export type Interface = Omit<LinkedEditSuggestionTest, Constructors>;
}
@DartClass
export class LinkedEditSuggestionTest {
    test_eqEq() : void {
        let a = new bare.createInstance(any,null,'a',LinkedEditSuggestionKind.METHOD);
        let a2 = new bare.createInstance(any,null,'a',LinkedEditSuggestionKind.METHOD);
        let b = new bare.createInstance(any,null,'a',LinkedEditSuggestionKind.TYPE);
        let c = new bare.createInstance(any,null,'c',LinkedEditSuggestionKind.METHOD);
        expect(op(Op.EQUALS,a,a),isTrue);
        expect(op(Op.EQUALS,a,a2),isTrue);
        expect(op(Op.EQUALS,a,this),isFalse);
        expect(op(Op.EQUALS,a,b),isFalse);
        expect(op(Op.EQUALS,a,c),isFalse);
    }
    constructor() {
    }
    @defaultConstructor
    LinkedEditSuggestionTest() {
    }
}

export namespace PositionTest {
    export type Constructors = 'PositionTest';
    export type Interface = Omit<PositionTest, Constructors>;
}
@DartClass
export class PositionTest {
    test_eqEq() : void {
        let a : any = new bare.createInstance(any,null,'/a.dart',1);
        let a2 : any = new bare.createInstance(any,null,'/a.dart',1);
        let b : any = new bare.createInstance(any,null,'/b.dart',1);
        expect(op(Op.EQUALS,a,a),isTrue);
        expect(op(Op.EQUALS,a,a2),isTrue);
        expect(op(Op.EQUALS,a,b),isFalse);
        expect(op(Op.EQUALS,a,this),isFalse);
    }
    test_hashCode() : void {
        let position : any = new bare.createInstance(any,null,'/test.dart',1);
        position.hashCode;
    }
    test_new() : void {
        let position : any = new bare.createInstance(any,null,'/test.dart',1);
        expect(position.file,'/test.dart');
        expect(position.offset,1);
        expect(position.toString(),'{"file":"/test.dart","offset":1}');
    }
    test_toJson() : void {
        let position : any = new bare.createInstance(any,null,'/test.dart',1);
        let expectedJson = new core.DartMap.literal([
            [FILE,'/test.dart'],
            [OFFSET,1]]);
        expect(position.toJson(),expectedJson);
    }
    constructor() {
    }
    @defaultConstructor
    PositionTest() {
    }
}

export class properties {
}
