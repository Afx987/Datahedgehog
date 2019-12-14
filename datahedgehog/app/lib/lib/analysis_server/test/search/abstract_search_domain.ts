/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/search/abstract_search_domain.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export namespace AbstractSearchDomainTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AbstractSearchDomainTest';
    export type Interface = Omit<AbstractSearchDomainTest, Constructors>;
}
@DartClass
export class AbstractSearchDomainTest extends lib3.AbstractAnalysisTest {
    resultSets : core.DartMap<string,_ResultSet>;

    searchId : string;

    results : core.DartList<any>;

    result : any;

    assertHasResult(kind : any,search : string,length? : number) : void {
        let offset : number = this.findOffset(search);
        if (length == null) {
            length = lib3.findIdentifierLength(search);
        }
        this.findResult(kind,this.testFile,offset,length,true);
    }
    assertNoResult(kind : any,search : string,length? : number) : void {
        let offset : number = this.findOffset(search);
        if (length == null) {
            length = lib3.findIdentifierLength(search);
        }
        this.findResult(kind,this.testFile,offset,length,false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createIndex() : any {
        return createMemoryIndex();
    }
    findResult(kind : any,file : string,offset : number,length : number,expected : boolean) : void {
        for(let result of this.results) {
            let location : any = result.location;
            if (op(Op.EQUALS,result.kind,kind) && op(Op.EQUALS,location.file,file) && op(Op.EQUALS,location.offset,offset) && op(Op.EQUALS,location.length,length)) {
                if (!expected) {
                    fail(`Unexpected result ${result} in\n` + this.results.join('\n'));
                }
                this.result = result;
                return;
            }
        }
        if (expected) {
            fail(`Not found: "search" kind=${kind} offset=${offset} length=${length}\nin\n` + this.results.join('\n'));
        }
    }
    getPathString(path : core.DartList<any>) : string {
        return path.map((element : any) =>  {
            let kindName : string = element.kind.name;
            let name : string = element.name;
            if (new core.DartString(name).isEmpty) {
                return kindName;
            }else {
                return `${kindName} ${name}`;
            }
        }).join('\n');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    processNotification(notification : any) : void {
        super.processNotification(notification);
        if (op(Op.EQUALS,notification.event,SEARCH_RESULTS)) {
            let params = new bare.createInstance(any,null,notification);
            let id : string = params.id;
            let resultSet : _ResultSet = this.resultSets.get(id);
            if (op(Op.EQUALS,resultSet,null)) {
                resultSet = new _ResultSet(id);
                this.resultSets.set(id,resultSet);
            }
            resultSet.results.addAll(params.results);
            resultSet.done = params.isLast;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        this.server.handlers = new core.DartList.literal(new bare.createInstance(any,null,this.server));
    }
    waitForSearchResults() : async.Future<any> {
        let resultSet : _ResultSet = this.resultSets.get(this.searchId);
        if (resultSet != null && resultSet.done) {
            this.results = resultSet.results;
            return new async.Future.value();
        }
        return new async.Future.delayed(core.DartDuration.ZERO,this.waitForSearchResults.bind(this));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractSearchDomainTest() {
        this.resultSets = new core.DartMap.literal([
        ]);
        this.results = new core.DartList.literal<any>();
    }
}

export namespace _ResultSet {
    export type Constructors = '_ResultSet';
    export type Interface = Omit<_ResultSet, Constructors>;
}
@DartClass
export class _ResultSet {
    id : string;

    results : core.DartList<any>;

    done : boolean;

    constructor(id : string) {
    }
    @defaultConstructor
    _ResultSet(id : string) {
        this.results = new core.DartList.literal<any>();
        this.done = false;
        this.id = id;
    }
}

export class properties {
}
