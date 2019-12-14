/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/verify_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    positiveTest('Test harness has no errors',(test : TestHarness) =>  {
        return new bare.createInstance(any,null);
    });
    negativeTest('VariableGet out of scope',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,test.makeVariable());
    });
    negativeTest('VariableSet out of scope',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,test.makeVariable(),new bare.createInstance(any,null));
    });
    negativeTest('Variable block scope',(test : TestHarness) =>  {
        let variable : any = test.makeVariable();
        return new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,new core.DartList.literal(variable)),new bare.createInstance(any,null,new bare.createInstance(any,null,variable))));
    });
    negativeTest('Variable let scope',(test : TestHarness) =>  {
        let variable : any = test.makeVariable();
        return new bare.createInstance(any,null,new bare.createInstance(any,null,variable,new bare.createInstance(any,null,variable)),'&&',new bare.createInstance(any,null,variable));
    });
    negativeTest('Variable redeclared',(test : TestHarness) =>  {
        let variable : any = test.makeVariable();
        return new bare.createInstance(any,null,new core.DartList.literal(variable,variable));
    });
    negativeTest('Member redeclared',(test : TestHarness) =>  {
        let field : any = new bare.createInstance(any,null,new bare.createInstance(any,null,'field'),{
            initializer : new bare.createInstance(any,null)});
        return new bare.createInstance(any,null,{
            name : 'Test',supertype : test.objectClass.asRawSupertype,fields : new core.DartList.literal(field,field)});
    });
    negativeTest('Class redeclared',(test : TestHarness) =>  {
        return test.otherClass;
    });
    negativeTest('Class type parameter redeclared',(test : TestHarness) =>  {
        let parameter = test.makeTypeParameter();
        return new bare.createInstance(any,null,{
            name : 'Test',supertype : test.objectClass.asRawSupertype,typeParameters : new core.DartList.literal(parameter,parameter)});
    });
    negativeTest('Member type parameter redeclared',(test : TestHarness) =>  {
        let parameter = test.makeTypeParameter();
        return new bare.createInstance(any,null,new bare.createInstance(any,null,'bar'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null)),{
            typeParameters : new core.DartList.literal(parameter,parameter)}));
    });
    negativeTest('Type parameter out of scope',(test : TestHarness) =>  {
        let parameter = test.makeTypeParameter();
        return new bare.createInstance(any,null,new core.DartList.literal(),{
            typeArgument : new bare.createInstance(any,null,parameter)});
    });
    negativeTest('Class type parameter from another class',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,op(Op.INDEX,test.otherClass.typeParameters,0)));
    });
    negativeTest('Class type parameter in static method',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,'bar'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,test.classTypeParameter)))),{
            isStatic : true});
    });
    negativeTest('Class type parameter in static field',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,'field'),{
            initializer : new bare.createInstance(any,null,new bare.createInstance(any,null,test.classTypeParameter)),isStatic : true});
    });
    negativeTest('Method type parameter out of scope',(test : TestHarness) =>  {
        let parameter = test.makeTypeParameter();
        return new bare.createInstance(any,null,{
            name : 'Test',supertype : test.objectClass.asRawSupertype,procedures : new core.DartList.literal(new bare.createInstance(any,null,new bare.createInstance(any,null,'generic'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null),{
                typeParameters : new core.DartList.literal(parameter)})),new bare.createInstance(any,null,new bare.createInstance(any,null,'use'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,parameter))))))});
    });
    negativeTest('Interface type arity too low',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,test.otherClass,new core.DartList.literal()));
    });
    negativeTest('Interface type arity too high',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null),new bare.createInstance(any,null))));
    });
    negativeTest('Dangling interface type',(test : TestHarness) =>  {
        let orphan = new bare.createInstance(any,null);
        return new bare.createInstance(any,null,new bare.createInstance(any,null,orphan));
    });
    negativeTest('Dangling field get',(test : TestHarness) =>  {
        let orphan = new bare.createInstance(any,null,new bare.createInstance(any,null,'foo'));
        return new bare.createInstance(any,null,new bare.createInstance(any,null),orphan);
    });
    negativeTest('Missing block parent pointer',(test : TestHarness) =>  {
        let block = new bare.createInstance(any,null,new core.DartList.literal());
        block.statements.add(new bare.createInstance(any,null));
        return block;
    });
    negativeTest('Missing function parent pointer',(test : TestHarness) =>  {
        let procedure = new bare.createInstance(any,null,new bare.createInstance(any,null,'bar'),ProcedureKind.Method,null);
        procedure.function = new bare.createInstance(any,null,new bare.createInstance(any,null));
        return procedure;
    });
    negativeTest('StaticGet without target',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,null);
    });
    negativeTest('StaticSet without target',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,null,new bare.createInstance(any,null));
    });
    negativeTest('StaticInvocation without target',(test : TestHarness) =>  {
        return new bare.createInstance(any,null,null,new bare.createInstance(any,null));
    });
    positiveTest('Correct StaticInvocation',(test : TestHarness) =>  {
        let method = new bare.createInstance(any,null,new bare.createInstance(any,null,'foo'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null),{
            positionalParameters : new core.DartList.literal(new bare.createInstance(any,null,'p'))}),{
            isStatic : true});
        test.enclosingClass.addMember(method);
        return new bare.createInstance(any,null,method,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null))));
    });
    negativeTest('StaticInvocation with too many parameters',(test : TestHarness) =>  {
        let method = new bare.createInstance(any,null,new bare.createInstance(any,null,'bar'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null)),{
            isStatic : true});
        test.enclosingClass.addMember(method);
        return new bare.createInstance(any,null,method,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null))));
    });
    negativeTest('StaticInvocation with too few parameters',(test : TestHarness) =>  {
        let method = new bare.createInstance(any,null,new bare.createInstance(any,null,'bar'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null),{
            positionalParameters : new core.DartList.literal(new bare.createInstance(any,null,'p'))}),{
            isStatic : true});
        test.enclosingClass.addMember(method);
        return new bare.createInstance(any,null,method,new bare.createInstance(any,null));
    });
    negativeTest('StaticInvocation with unmatched named parameter',(test : TestHarness) =>  {
        let method = new bare.createInstance(any,null,new bare.createInstance(any,null,'bar'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null)),{
            isStatic : true});
        test.enclosingClass.addMember(method);
        return new bare.createInstance(any,null,method,new bare.createInstance(any,null,new core.DartList.literal(),{
            named : new core.DartList.literal(new bare.createInstance(any,null,'p',new bare.createInstance(any,null)))}));
    });
    negativeTest('StaticInvocation with missing type argument',(test : TestHarness) =>  {
        let method = new bare.createInstance(any,null,new bare.createInstance(any,null,'bar'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null),{
            typeParameters : new core.DartList.literal(test.makeTypeParameter())}),{
            isStatic : true});
        test.enclosingClass.addMember(method);
        return new bare.createInstance(any,null,method,new bare.createInstance(any,null));
    });
    negativeTest('ConstructorInvocation with missing type argument',(test : TestHarness) =>  {
        let class_ = new bare.createInstance(any,null,{
            name : 'Test',typeParameters : new core.DartList.literal(test.makeTypeParameter()),supertype : test.objectClass.asRawSupertype});
        test.enclosingLibrary.addClass(class_);
        let constructor = new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null)),{
            name : new bare.createInstance(any,null,'foo')});
        test.enclosingClass.addMember(constructor);
        return new bare.createInstance(any,null,constructor,new bare.createInstance(any,null));
    });
    positiveTest('Valid typedef Foo = `(C) => void`',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,new core.DartList.literal(test.otherClass.rawType),new bare.createInstance(any,null)));
        test.enclosingLibrary.addTypedef(typedef_);
    });
    positiveTest('Valid typedef Foo = C<dynamic>',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null))));
        test.enclosingLibrary.addTypedef(typedef_);
    });
    positiveTest('Valid typedefs Foo = Bar, Bar = C',(test : TestHarness) =>  {
        let foo = new bare.createInstance(any,null,'Foo',null);
        let bar = new bare.createInstance(any,null,'Bar',null);
        foo.type = new bare.createInstance(any,null,bar);
        bar.type = test.otherClass.rawType;
        test.enclosingLibrary.addTypedef(foo);
        test.enclosingLibrary.addTypedef(bar);
    });
    positiveTest('Valid typedefs Foo = C<Bar>, Bar = C',(test : TestHarness) =>  {
        let foo = new bare.createInstance(any,null,'Foo',null);
        let bar = new bare.createInstance(any,null,'Bar',null);
        foo.type = new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,bar)));
        bar.type = test.otherClass.rawType;
        test.enclosingLibrary.addTypedef(foo);
        test.enclosingLibrary.addTypedef(bar);
    });
    positiveTest('Valid typedef type in field',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,new core.DartList.literal(test.otherClass.rawType),new bare.createInstance(any,null)));
        let field = new bare.createInstance(any,null,new bare.createInstance(any,null,'field'),{
            type : new bare.createInstance(any,null,typedef_)});
        test.enclosingLibrary.addTypedef(typedef_);
        test.enclosingLibrary.addMember(field);
    });
    negativeTest('Invalid typedef Foo = Foo',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'Foo',null);
        typedef_.type = new bare.createInstance(any,null,typedef_);
        test.enclosingLibrary.addTypedef(typedef_);
    });
    negativeTest('Invalid typedef Foo = `(Foo) => void`',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'Foo',null);
        typedef_.type = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,typedef_)),new bare.createInstance(any,null));
        test.enclosingLibrary.addTypedef(typedef_);
    });
    negativeTest('Invalid typedef Foo = `() => Foo`',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'Foo',null);
        typedef_.type = new bare.createInstance(any,null,new core.DartList.literal(),new bare.createInstance(any,null,typedef_));
        test.enclosingLibrary.addTypedef(typedef_);
    });
    negativeTest('Invalid typedef Foo = C<Foo>',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'Foo',null);
        typedef_.type = new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,typedef_)));
        test.enclosingLibrary.addTypedef(typedef_);
    });
    negativeTest('Invalid typedefs Foo = Bar, Bar = Foo',(test : TestHarness) =>  {
        let foo = new bare.createInstance(any,null,'Foo',null);
        let bar = new bare.createInstance(any,null,'Bar',null);
        foo.type = new bare.createInstance(any,null,bar);
        bar.type = new bare.createInstance(any,null,foo);
        test.enclosingLibrary.addTypedef(foo);
        test.enclosingLibrary.addTypedef(bar);
    });
    negativeTest('Invalid typedefs Foo = Bar, Bar = C<Foo>',(test : TestHarness) =>  {
        let foo = new bare.createInstance(any,null,'Foo',null);
        let bar = new bare.createInstance(any,null,'Bar',null);
        foo.type = new bare.createInstance(any,null,bar);
        bar.type = new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,foo)));
        test.enclosingLibrary.addTypedef(foo);
        test.enclosingLibrary.addTypedef(bar);
    });
    negativeTest('Invalid typedefs Foo = C<Bar>, Bar = C<Foo>',(test : TestHarness) =>  {
        let foo = new bare.createInstance(any,null,'Foo',null);
        let bar = new bare.createInstance(any,null,'Bar',null);
        foo.type = new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,bar)));
        bar.type = new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,foo)));
        test.enclosingLibrary.addTypedef(foo);
        test.enclosingLibrary.addTypedef(bar);
    });
    positiveTest('Valid long typedefs C20 = C19 = ... = C1 = C0 = dynamic',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'C0',new bare.createInstance(any,null));
        test.enclosingLibrary.addTypedef(typedef_);
        for(let i : number = 1; i < 20; ++i){
            typedef_ = new bare.createInstance(any,null,`C${i}`,new bare.createInstance(any,null,typedef_));
            test.enclosingLibrary.addTypedef(typedef_);
        }
    });
    negativeTest('Invalid long typedefs C20 = C19 = ... = C1 = C0 = C20',(test : TestHarness) =>  {
        let typedef_ = new bare.createInstance(any,null,'C0',null);
        test.enclosingLibrary.addTypedef(typedef_);
        let first = typedef_;
        for(let i : number = 1; i < 20; ++i){
            typedef_ = new bare.createInstance(any,null,`C${i}`,new bare.createInstance(any,null,typedef_));
            test.enclosingLibrary.addTypedef(typedef_);
        }
        first.type = new bare.createInstance(any,null,typedef_);
    });
    positiveTest('Valid typedef Foo<T extends C> = C<T>',(test : TestHarness) =>  {
        let param = new bare.createInstance(any,null,'T',test.otherClass.rawType);
        let foo = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,param))),{
            typeParameters : new core.DartList.literal(param)});
        test.enclosingLibrary.addTypedef(foo);
    });
    positiveTest('Valid typedef Foo<T extends C<T>> = C<T>',(test : TestHarness) =>  {
        let param = new bare.createInstance(any,null,'T',test.otherClass.rawType);
        param.bound = new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,param)));
        let foo = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,param))),{
            typeParameters : new core.DartList.literal(param)});
        test.enclosingLibrary.addTypedef(foo);
    });
    positiveTest('Valid typedef Foo<T> = dynamic, Bar<T extends Foo<T>> = C<T>',(test : TestHarness) =>  {
        let fooParam = test.makeTypeParameter('T');
        let foo = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null),{
            typeParameters : new core.DartList.literal(fooParam)});
        let barParam = new bare.createInstance(any,null,'T',null);
        barParam.bound = new bare.createInstance(any,null,foo,new core.DartList.literal(new bare.createInstance(any,null,barParam)));
        let bar = new bare.createInstance(any,null,'Bar',new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,barParam))),{
            typeParameters : new core.DartList.literal(barParam)});
        test.enclosingLibrary.addTypedef(foo);
        test.enclosingLibrary.addTypedef(bar);
    });
    negativeTest('Invalid typedefs Foo<T extends Bar<T>>, Bar<T extends Foo<T>>',(test : TestHarness) =>  {
        let fooParam = test.makeTypeParameter('T');
        let foo = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null),{
            typeParameters : new core.DartList.literal(fooParam)});
        let barParam = new bare.createInstance(any,null,'T',null);
        barParam.bound = new bare.createInstance(any,null,foo,new core.DartList.literal(new bare.createInstance(any,null,barParam)));
        let bar = new bare.createInstance(any,null,'Bar',new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,barParam))),{
            typeParameters : new core.DartList.literal(barParam)});
        fooParam.bound = new bare.createInstance(any,null,bar,new core.DartList.literal(new bare.createInstance(any,null,fooParam)));
        test.enclosingLibrary.addTypedef(foo);
        test.enclosingLibrary.addTypedef(bar);
    });
    negativeTest('Invalid typedef Foo<T extends Foo<dynamic> = C<T>',(test : TestHarness) =>  {
        let param = new bare.createInstance(any,null,'T',null);
        let foo = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,test.otherClass,new core.DartList.literal(new bare.createInstance(any,null,param))),{
            typeParameters : new core.DartList.literal(param)});
        param.bound = new bare.createInstance(any,null,foo,new core.DartList.literal(new bare.createInstance(any,null)));
        test.enclosingLibrary.addTypedef(foo);
    });
    negativeTest('Typedef arity error',(test : TestHarness) =>  {
        let param = test.makeTypeParameter('T');
        let foo = new bare.createInstance(any,null,'Foo',test.otherClass.rawType,{
            typeParameters : new core.DartList.literal(param)});
        let field = new bare.createInstance(any,null,new bare.createInstance(any,null,'field'),{
            type : new bare.createInstance(any,null,foo,new core.DartList.literal())});
        test.enclosingLibrary.addTypedef(foo);
        test.enclosingLibrary.addMember(field);
    });
    negativeTest('Dangling typedef reference',(test : TestHarness) =>  {
        let foo = new bare.createInstance(any,null,'Foo',test.otherClass.rawType,{
            typeParameters : new core.DartList.literal()});
        let field = new bare.createInstance(any,null,new bare.createInstance(any,null,'field'),{
            type : new bare.createInstance(any,null,foo,new core.DartList.literal())});
        test.enclosingLibrary.addMember(field);
    });
};
export var checkHasError : (program : any) => any = (program : any) =>  {
    let passed : boolean = false;
    try {
        verifyProgram(program);
        passed = true;
    } catch (__error__) {

        {
            let e = __error__;
        }
    }
    if (passed) {
        fail(`Failed to reject invalid program:\n${programToString(program)}`);
    }
};
export var negativeTest : (name : string,makeTestCase : (test : TestHarness) => any) => any = (name : string,makeTestCase : (test : TestHarness) => any) =>  {
    test(name,() =>  {
        let test = new TestHarness();
        test.addNode(makeTestCase(test));
        checkHasError(test.program);
    });
};
export var positiveTest : (name : string,makeTestCase : (test : TestHarness) => any) => any = (name : string,makeTestCase : (test : TestHarness) => any) =>  {
    test(name,() =>  {
        let test = new TestHarness();
        test.addNode(makeTestCase(test));
        verifyProgram(test.program);
    });
};
export namespace TestHarness {
    export type Constructors = 'TestHarness';
    export type Interface = Omit<TestHarness, Constructors>;
}
@DartClass
export class TestHarness {
    program : any;

    objectClass : any;

    stubLibrary : any;

    classTypeParameter : any;

    enclosingLibrary : any;

    enclosingClass : any;

    enclosingMember : any;

    otherClass : any;

    addNode(node : any) : void {
        if (is(node, any)) {
            this.addExpression(node);
        }else if (is(node, any)) {
            this.addStatement(node);
        }else if (is(node, any)) {
            this.addClassMember(node);
        }else if (is(node, any)) {
            this.addClass(node);
        }
    }
    addExpression(node : any) : void {
        this.addStatement(new bare.createInstance(any,null,node));
    }
    addStatement(node : any) : void {
        let function = this.enclosingMember.function;
        function.body = ((_) : any =>  {
            {
                _.parent = function;
                return _;
            }
        })(node);
    }
    addClassMember(node : any) : void {
        this.enclosingClass.addMember(node);
    }
    addTopLevelMember(node : any) : void {
        this.enclosingLibrary.addMember(node);
    }
    addClass(node : any) : void {
        this.enclosingLibrary.addClass(node);
    }
    makeVariable() : any {
        return new bare.createInstance(any,null,null);
    }
    makeTypeParameter(name? : string) : any {
        return new bare.createInstance(any,null,name,new bare.createInstance(any,null,this.objectClass));
    }
    constructor() {
    }
    @defaultConstructor
    TestHarness() {
        this.setupProgram();
    }
    setupProgram() : void {
        this.program = new bare.createInstance(any,null);
        this.stubLibrary = new bare.createInstance(any,null,lib3.Uri.parse('dart:core'));
        this.program.libraries.add(((_) : any =>  {
            {
                _.parent = this.program;
                return _;
            }
        })(this.stubLibrary));
        this.stubLibrary.name = 'dart.core';
        this.objectClass = new bare.createInstance(any,null,{
            name : 'Object'});
        this.stubLibrary.addClass(this.objectClass);
        this.enclosingLibrary = new bare.createInstance(any,null,lib3.Uri.parse('file://test.dart'));
        this.program.libraries.add(((_) : any =>  {
            {
                _.parent = this.program;
                return _;
            }
        })(this.enclosingLibrary));
        this.enclosingLibrary.name = 'test_lib';
        this.classTypeParameter = this.makeTypeParameter('T');
        this.enclosingClass = new bare.createInstance(any,null,{
            name : 'TestClass',typeParameters : new core.DartList.literal(this.classTypeParameter),supertype : this.objectClass.asRawSupertype});
        this.enclosingLibrary.addClass(this.enclosingClass);
        this.enclosingMember = new bare.createInstance(any,null,new bare.createInstance(any,null,'test'),ProcedureKind.Method,new bare.createInstance(any,null,new bare.createInstance(any,null)));
        this.enclosingClass.addMember(this.enclosingMember);
        this.otherClass = new bare.createInstance(any,null,{
            name : 'OtherClass',typeParameters : new core.DartList.literal(this.makeTypeParameter('OtherT')),supertype : this.objectClass.asRawSupertype});
        this.enclosingLibrary.addClass(this.otherClass);
    }
}

export class properties {
}
