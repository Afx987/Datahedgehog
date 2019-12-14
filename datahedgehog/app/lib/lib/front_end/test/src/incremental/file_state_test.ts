/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/incremental/file_state_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./mock_sdk";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FileSystemStateTest);
    });
};
export namespace FileSystemStateTest {
    export type Constructors = 'FileSystemStateTest';
    export type Interface = Omit<FileSystemStateTest, Constructors>;
}
@DartClass
export class FileSystemStateTest {
    fileSystem;

    uriTranslator : any;

    fsState : any;

    _coreUri : lib3.Uri;

    setUp() : void {
        let dartLibraries : core.DartMap<string,lib3.Uri> = lib4.createSdkFiles(this.fileSystem);
        this.uriTranslator.dartLibraries.addAll(dartLibraries);
        this._coreUri = lib3.Uri.parse('dart:core');
        expect(this._coreUri,isNotNull);
        this.fsState = new bare.createInstance(any,null,this.fileSystem,this.uriTranslator);
    }
    test_getFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this.writeFile('/a.dart','');
            let b = this.writeFile('/b.dart','');
            let c = this.writeFile('/c.dart','');
            let d = this.writeFile('/d.dart','import "a.dart";\nexport "b.dart";\npart "c.dart";\n');
            let aFile : any = await this.fsState.getFile(a);
            let bFile : any = await this.fsState.getFile(b);
            let cFile : any = await this.fsState.getFile(c);
            let dFile : any = await this.fsState.getFile(d);
            expect(dFile.fileUri,d);
            expect(dFile.exists,isTrue);
            this._assertImportedUris(dFile,new core.DartList.literal(a,this._coreUri));
            expect(dFile.importedLibraries,contains(aFile));
            expect(dFile.exportedLibraries,contains(bFile));
            expect(dFile.partFiles,contains(cFile));
            expect(aFile.fileUri,a);
            expect(aFile.exists,isTrue);
            this._assertImportedUris(aFile,new core.DartList.literal(this._coreUri));
            expect(aFile.exportedLibraries,isEmpty);
            expect(aFile.partFiles,isEmpty);
            expect(bFile.fileUri,b);
            expect(bFile.exists,isTrue);
            this._assertImportedUris(bFile,new core.DartList.literal(this._coreUri));
            expect(bFile.exportedLibraries,isEmpty);
            expect(bFile.partFiles,isEmpty);
        } )());
    }

    test_getFile_exports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this.writeFile('/a.dart','');
            let b = this.writeFile('/b.dart','');
            let c = this.writeFile('/c.dart','');
            let d = this.writeFile('/d.dart','export "a.dart" show A, B;\nexport "b.dart" hide C, D;\nexport "c.dart" show A, B, C, D hide C show A, D;\n');
            let aFile : any = await this.fsState.getFile(a);
            let bFile : any = await this.fsState.getFile(b);
            let cFile : any = await this.fsState.getFile(c);
            let dFile : any = await this.fsState.getFile(d);
            expect(dFile.exports,hasLength(3));
            {
                let export_ : any = op(Op.INDEX,dFile.exports,0);
                expect(export_.library,aFile);
                expect(export_.combinators,hasLength(1));
                expect(op(Op.INDEX,export_.combinators,0).isShow,isTrue);
                expect(op(Op.INDEX,export_.combinators,0).names,unorderedEquals(new core.DartList.literal('A','B')));
                expect(export_.isExposed('A'),isTrue);
                expect(export_.isExposed('B'),isTrue);
                expect(export_.isExposed('C'),isFalse);
                expect(export_.isExposed('D'),isFalse);
            }
            {
                let export_ : any = op(Op.INDEX,dFile.exports,1);
                expect(export_.library,bFile);
                expect(export_.combinators,hasLength(1));
                expect(op(Op.INDEX,export_.combinators,0).isShow,isFalse);
                expect(op(Op.INDEX,export_.combinators,0).names,unorderedEquals(new core.DartList.literal('C','D')));
                expect(export_.isExposed('A'),isTrue);
                expect(export_.isExposed('B'),isTrue);
                expect(export_.isExposed('C'),isFalse);
                expect(export_.isExposed('D'),isFalse);
            }
            {
                let export_ : any = op(Op.INDEX,dFile.exports,2);
                expect(export_.library,cFile);
                expect(export_.combinators,hasLength(3));
                expect(op(Op.INDEX,export_.combinators,0).isShow,isTrue);
                expect(op(Op.INDEX,export_.combinators,0).names,unorderedEquals(new core.DartList.literal('A','B','C','D')));
                expect(op(Op.INDEX,export_.combinators,1).isShow,isFalse);
                expect(op(Op.INDEX,export_.combinators,1).names,unorderedEquals(new core.DartList.literal('C')));
                expect(op(Op.INDEX,export_.combinators,2).isShow,isTrue);
                expect(op(Op.INDEX,export_.combinators,2).names,unorderedEquals(new core.DartList.literal('A','D')));
                expect(export_.isExposed('A'),isTrue);
                expect(export_.isExposed('B'),isFalse);
                expect(export_.isExposed('C'),isFalse);
                expect(export_.isExposed('D'),isTrue);
            }
        } )());
    }

    test_topologicalOrder_cycleBeforeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let aUri = this._writeFileDirectives('/a.dart');
            let bUri = this._writeFileDirectives('/b.dart',{
                imports : new core.DartList.literal('c.dart')});
            let cUri = this._writeFileDirectives('/c.dart',{
                imports : new core.DartList.literal('b.dart')});
            let dUri = this._writeFileDirectives('/d.dart',{
                imports : new core.DartList.literal('a.dart','b.dart')});
            let core : any = await this.fsState.getFile(this._coreUri);
            let a : any = await this.fsState.getFile(aUri);
            let b : any = await this.fsState.getFile(bUri);
            let c : any = await this.fsState.getFile(cUri);
            let d : any = await this.fsState.getFile(dUri);
            let order : core.DartList<any> = d.topologicalOrder;
            expect(order,hasLength(4));
            expect(order[0].libraries,contains(core));
            expect(order[1].libraries,unorderedEquals(new core.DartList.literal(a)));
            expect(order[2].libraries,unorderedEquals(new core.DartList.literal(b,c)));
            expect(order[3].libraries,unorderedEquals(new core.DartList.literal(d)));
        } )());
    }

    test_topologicalOrder_cycleBeforeTarget_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let aUri = this._writeFileDirectives('/a.dart');
            let bUri = this._writeFileDirectives('/b.dart',{
                exports : new core.DartList.literal('c.dart')});
            let cUri = this._writeFileDirectives('/c.dart',{
                imports : new core.DartList.literal('b.dart')});
            let dUri = this._writeFileDirectives('/d.dart',{
                imports : new core.DartList.literal('a.dart','b.dart')});
            let core : any = await this.fsState.getFile(this._coreUri);
            let a : any = await this.fsState.getFile(aUri);
            let b : any = await this.fsState.getFile(bUri);
            let c : any = await this.fsState.getFile(cUri);
            let d : any = await this.fsState.getFile(dUri);
            let order : core.DartList<any> = d.topologicalOrder;
            expect(order,hasLength(4));
            expect(order[0].libraries,contains(core));
            expect(order[1].libraries,unorderedEquals(new core.DartList.literal(a)));
            expect(order[2].libraries,unorderedEquals(new core.DartList.literal(b,c)));
            expect(order[3].libraries,unorderedEquals(new core.DartList.literal(d)));
        } )());
    }

    test_topologicalOrder_cycleWithTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let aUri = this._writeFileDirectives('/a.dart');
            let bUri = this._writeFileDirectives('/b.dart',{
                imports : new core.DartList.literal('c.dart')});
            let cUri = this._writeFileDirectives('/c.dart',{
                imports : new core.DartList.literal('a.dart','b.dart')});
            let core : any = await this.fsState.getFile(this._coreUri);
            let a : any = await this.fsState.getFile(aUri);
            let b : any = await this.fsState.getFile(bUri);
            let c : any = await this.fsState.getFile(cUri);
            let order : core.DartList<any> = c.topologicalOrder;
            expect(order,hasLength(3));
            expect(order[0].libraries,contains(core));
            expect(order[1].libraries,unorderedEquals(new core.DartList.literal(a)));
            expect(order[2].libraries,unorderedEquals(new core.DartList.literal(b,c)));
        } )());
    }

    writeFile(path : string,text : string) : lib3.Uri {
        let uri : lib3.Uri = lib3.Uri.parse(`file://${path}`);
        this.fileSystem.entityForUri(uri).writeAsStringSync(text);
        return uri;
    }
    _assertImportedUris(file : any,expectedUris : core.DartList<lib3.Uri>) : void {
        let importedUris : core.DartIterable<lib3.Uri> = this._toUris(file.importedLibraries);
        expect(importedUris,unorderedEquals(expectedUris));
    }
    _toUris(files : core.DartList<any>) : core.DartIterable<lib3.Uri> {
        return files.map((f : any) =>  {
            return f.uri;
        });
    }
    _writeFileDirectives(path : string,_namedArguments? : {imports? : core.DartList<string>,exports? : core.DartList<string>}) : lib3.Uri {
        let {imports,exports} = Object.assign({
            "imports" : new core.DartList.literal(),
            "exports" : new core.DartList.literal()}, _namedArguments );
        return this.writeFile(path,`${imports.map((uri : any) =>  {
            return `import "${uri}";`;
        }).join('\n')}\n${exports.map((uri : any) =>  {
            return `export "${uri}";`;
        }).join('\n')}\n`);
    }
    constructor() {
    }
    @defaultConstructor
    FileSystemStateTest() {
        this.fileSystem = new bare.createInstance(any,null,lib3.Uri.parse('file:///'));
        this.uriTranslator = new bare.createInstance(any,null,new core.DartMap.literal([
        ]),new core.DartMap.literal([
        ]));
    }
}

export class properties {
}
