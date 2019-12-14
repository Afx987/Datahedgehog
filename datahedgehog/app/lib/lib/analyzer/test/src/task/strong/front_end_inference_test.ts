/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong/front_end_inference_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "./../../dart/analysis/base";
import * as lib6 from "@dart2ts/dart/uri";
import * as lib7 from "@dart2ts.packages/front_end/lib/src/base/instrumentation";
import * as convert from "@dart2ts/dart/convert";

export var main : () => any = () =>  {
    group('front_end_inference_test',() =>  {
        defineReflectiveSuite(() =>  {
            defineReflectiveTests(RunFrontEndInferenceTest);
        });
    },{
        timeout : new bare.createInstance(any,null,new core.DartDuration({
            seconds : 120}))});
};
export var _appendElementName : (buffer : core.DartStringBuffer,element : any) => void = (buffer : core.DartStringBuffer,element : any) : void =>  {
    if (element.isSynthetic && is(element, any)) {
        return;
    }
    let library : any = element.library;
    if (op(Op.EQUALS,library,null)) {
        throw new core.StateError(`Unexpected element without library: ${element}`);
    }
    let libraryName : string = library.name;
    let name : string = (element.name || '');
    if (libraryName != 'dart.core' && libraryName != 'dart.async' && libraryName != 'test') {
        buffer.write(`${libraryName}::`);
    }
    let enclosing = element.enclosingElement;
    if (is(enclosing, any)) {
        buffer.write(`${enclosing.name}::`);
    }
    buffer.write(`${name}`);
};
export namespace RunFrontEndInferenceTest {
    export type Constructors = 'RunFrontEndInferenceTest';
    export type Interface = Omit<RunFrontEndInferenceTest, Constructors>;
}
@DartClass
export class RunFrontEndInferenceTest {
    test_run() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkgPath : string = this._findPkgRoot();
            let fePath : string = lib3.join(pkgPath,'front_end','testcases','inference');
            let dartFiles : core.DartList<io.File> = new io.Directory(fePath).listSync().where((entry : any) =>  {
                return is(entry, io.File) && new core.DartString(entry.path).endsWith('.dart');
            }).map((entry : any) =>  {
                return entry as io.File;
            }).toList();
            let allProblems = new core.DartStringBuffer();
            for(let file of dartFiles) {
                let test = new _FrontEndInferenceTest();
                await test.setUp();
                try {
                    let code : string = file.readAsStringSync();
                    let problems : string = await test.runTest(file.path,code);
                    if (problems != null) {
                        allProblems.writeln(problems);
                    }
                } finally {
                    await test.tearDown();
                }
            }
            if (allProblems.isNotEmpty) {
                fail(allProblems.toString());
            }
        } )());
    }

    _findPkgRoot() : string {
        let scriptPath : string = lib3.fromUri(io.Platform.script);
        let parts : core.DartList<string> = lib3.split(scriptPath);
        for(let i : number = 0; i < parts.length - 2; i++){
            if (parts[i] == 'pkg' && parts[i + 1] == 'analyzer' && parts[i + 2] == 'test') {
                return lib3.joinAll(parts.sublist(0,i + 1));
            }
        }
        throw new core.StateError(`Unable to find sdk/pkg/ in ${scriptPath}`);
    }
    constructor() {
    }
    @defaultConstructor
    RunFrontEndInferenceTest() {
    }
}

export namespace _FrontEndInferenceTest {
    export type Constructors = lib5.BaseAnalysisDriverTest.Constructors | '_FrontEndInferenceTest';
    export type Interface = Omit<_FrontEndInferenceTest, Constructors>;
}
@DartClass
export class _FrontEndInferenceTest extends lib5.BaseAnalysisDriverTest {
    runTest(path : string,code : string) : async.Future<string> { 
        return new async.Future.fromPromise(( async () =>  {
            let uri : lib6.Uri = this.provider.pathContext.toUri(path);
            let lineStarts : core.DartList<number> = new bare.createInstance(any,null,code).lineStarts;
            op(Op.INDEX_ASSIGN,lib7.CompilerContext.current.uriToSource,relativizeUri(uri).toString(),new bare.createInstance(any,null,lineStarts,convert.properties.UTF8.encode(code)));
            let validation = new bare.createInstance(any,null);
            await validation.loadExpectations(uri);
            this.provider.newFile(path,code);
            let result : any = await this.driver.getResult(path);
            result.unit.accept(new _InstrumentationVisitor(validation,uri));
            validation.finish();
            if (validation.hasProblems) {
                if (properties.fixProblems) {
                    validation.fixSource(uri);
                    return null;
                }else {
                    return validation.problemsAsString;
                }
            }else {
                return null;
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FrontEndInferenceTest() {
    }
}

export namespace _InstrumentationValueForMethodElement {
    export type Constructors = '_InstrumentationValueForMethodElement';
    export type Interface = Omit<_InstrumentationValueForMethodElement, Constructors>;
}
@DartClass
export class _InstrumentationValueForMethodElement extends any {
    element : any;

    constructor(element : any) {
    }
    @defaultConstructor
    _InstrumentationValueForMethodElement(element : any) {
        this.element = element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        _appendElementName(buffer,this.element);
        return buffer.toString();
    }
}

export namespace _InstrumentationValueForType {
    export type Constructors = '_InstrumentationValueForType';
    export type Interface = Omit<_InstrumentationValueForType, Constructors>;
}
@DartClass
export class _InstrumentationValueForType extends any {
    type : any;

    constructor(type : any) {
    }
    @defaultConstructor
    _InstrumentationValueForType(type : any) {
        this.type = type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        this._appendType(buffer,this.type);
        return buffer.toString();
    }
    _appendList<T>(buffer : core.DartStringBuffer,open : string,close : string,items : core.DartList<T>,separator : string,writeItem : <T>(item : T) => any,_namedArguments? : {includeEmpty? : boolean}) : void {
        let {includeEmpty} = Object.assign({
            "includeEmpty" : false}, _namedArguments );
        if (!includeEmpty && items.isEmpty) {
            return;
        }
        buffer.write(open);
        let first : boolean = true;
        for(let item of items) {
            if (!first) {
                buffer.write(separator);
            }
            writeItem(item);
            first = false;
        }
        buffer.write(close);
    }
    _appendParameters(buffer : core.DartStringBuffer,parameters : core.DartList<any>) : void {
        this._appendList(buffer,'(',')',parameters,', ',(parameter : any) =>  {
            this._appendType(buffer,parameter.type);
        },{
            includeEmpty : true});
    }
    _appendType(buffer : core.DartStringBuffer,type : any) : void {
        if (is(type, any)) {
            this._appendTypeArguments(buffer,type.typeArguments);
            this._appendParameters(buffer,type.parameters);
            buffer.write(' -> ');
            this._appendType(buffer,type.returnType);
        }else if (is(type, any)) {
            let element : any = type.element;
            _appendElementName(buffer,element);
            this._appendTypeArguments(buffer,type.typeArguments);
        }else if (type.isBottom) {
            buffer.write('<BottomType>');
        }else {
            buffer.write(type.toString());
        }
    }
    _appendTypeArguments(buffer : core.DartStringBuffer,typeArguments : core.DartList<any>) : void {
        this._appendList(buffer,'<','>',typeArguments,', ',(type : any) =>  {
            return this._appendType(buffer,type);
        });
    }
}

export namespace _InstrumentationValueForTypeArgs {
    export type Constructors = '_InstrumentationValueForTypeArgs';
    export type Interface = Omit<_InstrumentationValueForTypeArgs, Constructors>;
}
@DartClass
export class _InstrumentationValueForTypeArgs extends any {
    types : core.DartList<any>;

    constructor(types : core.DartList<any>) {
    }
    @defaultConstructor
    _InstrumentationValueForTypeArgs(types : core.DartList<any>) {
        this.types = types;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.types.map((type : any) =>  {
            return new _InstrumentationValueForType(type).toString();
        }).join(', ');
    }
}

export namespace _InstrumentationVisitor {
    export type Constructors = '_InstrumentationVisitor';
    export type Interface = Omit<_InstrumentationVisitor, Constructors>;
}
@DartClass
export class _InstrumentationVisitor extends any {
    _instrumentation : any;

    uri : lib6.Uri;

    constructor(_instrumentation : any,uri : lib6.Uri) {
    }
    @defaultConstructor
    _InstrumentationVisitor(_instrumentation : any,uri : lib6.Uri) {
        this._instrumentation = _instrumentation;
        this.uri = uri;
    }
    visitBinaryExpression(node : any) {
        super.visitBinaryExpression(node);
        this._recordMethodTarget(node.operator.charOffset,node.staticElement);
    }
    visitFunctionExpression(node : any) {
        super.visitFunctionExpression(node);
        if (isNot(node.parent, any)) {
            let type : any = node.staticType;
            if (is(type, any)) {
                this._instrumentation.record(this.uri,node.offset,'returnType',new _InstrumentationValueForType(type.returnType));
                let parameters : core.DartList<any> = node.parameters.parameters;
                for(let i : number = 0; i < parameters.length; i++){
                    let parameter : any = parameters[i];
                    if (is(parameter, any) && op(Op.EQUALS,parameter.type,null)) {
                        this._recordType(parameter.offset,op(Op.INDEX,type.parameters,i).type);
                    }
                }
            }
        }
    }
    visitIndexExpression(node : any) {
        super.visitIndexExpression(node);
        this._recordMethodTarget(node.leftBracket.charOffset,node.staticElement);
    }
    visitInstanceCreationExpression(node : any) {
        super.visitInstanceCreationExpression(node);
        let type : any = node.staticType;
        if (is(type, any)) {
            if (type.typeParameters.isNotEmpty && op(Op.EQUALS,node.constructorName.type.typeArguments,null)) {
                this._recordTypeArguments(node.constructorName.offset,type.typeArguments);
            }
        }
    }
    visitListLiteral(node : any) {
        super.visitListLiteral(node);
        if (op(Op.EQUALS,node.typeArguments,null)) {
            let type : any = node.staticType;
            if (is(type, any)) {
                this._recordTypeArguments(node.offset,type.typeArguments);
            }
        }
    }
    visitMapLiteral(node : any) {
        super.visitMapLiteral(node);
        if (op(Op.EQUALS,node.typeArguments,null)) {
            let type : any = node.staticType;
            if (is(type, any)) {
                this._recordTypeArguments(node.offset,type.typeArguments);
            }
        }
    }
    visitMethodInvocation(node : any) {
        super.visitMethodInvocation(node);
        this._recordMethodTarget(node.methodName.offset,node.methodName.staticElement);
        if (op(Op.EQUALS,node.typeArguments,null)) {
            let inferredTypeArguments = this._getInferredFunctionTypeArguments(node.function.staticType,node.staticInvokeType,node.typeArguments).toList();
            if (inferredTypeArguments.isNotEmpty) {
                this._recordTypeArguments(node.methodName.offset,inferredTypeArguments);
            }
        }
    }
    visitPrefixExpression(node : any) {
        super.visitPrefixExpression(node);
        this._recordMethodTarget(node.operator.charOffset,node.staticElement);
    }
    visitSimpleIdentifier(node : any) {
        super.visitSimpleIdentifier(node);
        let element : any = node.staticElement;
        var recordPromotions : (elementType : any) => void = (elementType : any) : void =>  {
            if (node.inGetterContext() && !node.inDeclarationContext()) {
                let offset : number = node.offset;
                let type : any = node.staticType;
                if (!core.identical(type,elementType)) {
                    this._instrumentation.record(this.uri,offset,'promotedType',new _InstrumentationValueForType(type));
                }
            }
        };
        if (is(element, any)) {
            recordPromotions(element.type);
        }else if (is(element, any)) {
            recordPromotions(element.type);
        }
    }
    visitVariableDeclarationList(node : any) {
        super.visitVariableDeclarationList(node);
        if (op(Op.EQUALS,node.type,null)) {
            for(let variable of node.variables) {
                let element : any = variable.element;
                if (is(element, any)) {
                    this._recordType(variable.name.offset,element.type);
                }else {
                    this._recordTopType(variable.name.offset,element.type);
                }
            }
        }
    }
    _getInferredFunctionTypeArguments(g : any,f : any,typeArgs : any) : core.DartIterable<any> {
        if (is(g, any) && g.typeFormals.isNotEmpty && is(f, any) && f.typeFormals.isEmpty) {
            return this._recoverTypeArguments(g,f);
        }else {
            return new core.DartList.literal();
        }
    }
    _recordMethodTarget(offset : number,element : any) : void {
        if (is(element, any)) {
            this._instrumentation.record(this.uri,offset,'target',new _InstrumentationValueForMethodElement(element));
        }
    }
    _recordTopType(offset : number,type : any) : void {
        this._instrumentation.record(this.uri,offset,'topType',new _InstrumentationValueForType(type));
    }
    _recordType(offset : number,type : any) : void {
        this._instrumentation.record(this.uri,offset,'type',new _InstrumentationValueForType(type));
    }
    _recordTypeArguments(offset : number,typeArguments : core.DartList<any>) : void {
        this._instrumentation.record(this.uri,offset,'typeArgs',new _InstrumentationValueForTypeArgs(typeArguments));
    }
    _recoverTypeArguments(g : any,f : any) : core.DartIterable<any> {
        /* TODO (AssertStatementImpl) : assert (identical(g.element, f.element)); */;
        /* TODO (AssertStatementImpl) : assert (g.typeFormals.isNotEmpty && f.typeFormals.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (g.typeFormals.length + g.typeArguments.length == f.typeArguments.length); */;
        return f.typeArguments.skip(g.typeArguments.length);
    }
}

export class properties {
    private static __$fixProblems : boolean;
    static get fixProblems() : boolean { 
        if (this.__$fixProblems===undefined) {
            this.__$fixProblems = false;
        }
        return this.__$fixProblems;
    }
    static set fixProblems(__$value : boolean)  { 
        this.__$fixProblems = __$value;
    }

}
