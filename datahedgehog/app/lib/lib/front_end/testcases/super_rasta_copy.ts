/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/super_rasta_copy.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var use : (x : any) => any = (x : any) =>  {
    if (op(Op.EQUALS,x,new core.DartDateTime.now().millisecondsSinceEpoch)) throw "Shouldn't happen";
};
export var main : () => any = () =>  {
    try {
        new C().test();
    } catch (__error__) {

        if (is(__error__,core.NoSuchMethodError)){
            return;
        }
    }
    throw "Test failed";
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    a;

    b;

    c;

    d;

    get e() {
        return null;
    }
    f;

    set g(_ : any) {
    }
    get h() {
        return null;
    }
    set h(_ : any) {
    }
    get i() {
        return null;
    }
    [OperatorMethods.INDEX](_ : any) {
        return null;
    }
    [OperatorMethods.INDEX_EQ](a : any,b : any) {
    }
    [OperatorMethods.COMPLEMENT]() {
        return 117;
    }
    [OperatorMethods.NEGATE]() {
        return 117;
    }
    [OperatorMethods.EQUALS](other : any) {
        return true;
    }
    m() : void {
    }
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A {
    get b() {
        return null;
    }
    set c(x : any) {
    }
    d;

    set i(x : any) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
}

export namespace C {
    export type Constructors = B.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends B {
    test() {
        op(Op.BITNEG,super);
        use(op(Op.BITNEG,super));
        op(Op.NEG,super);
        use(op(Op.NEG,super));
        op(Op.EQUALS,super,87);
        use(op(Op.EQUALS,super,87));
        super != 87;
        use(super != 87);
        super.a;
        use(super.a);
        super.b;
        use(super.b);
        super.c;
        use(super.c);
        super.d;
        use(super.d);
        super.e;
        use(super.e);
        super.f;
        use(super.f);
        super.g;
        use(super.g);
        super.h;
        use(super.h);
        super.i;
        use(super.i);
        op(Op.INDEX,super,87);
        use(op(Op.INDEX,super,87));
        super.m.bind(super);
        use(super.m.bind(super));
        super.a++;
        use(super.a++);
        super.b++;
        use(super.b++);
        super.c++;
        use(super.c++);
        super.d++;
        use(super.d++);
        super.e++;
        use(super.e++);
        super.f++;
        use(super.f++);
        super.g++;
        use(super.g++);
        super.h++;
        use(super.h++);
        super.i++;
        use(super.i++);
        op(Op.INDEX,super,87)++;
        use(op(Op.INDEX,super,87)++);
        super.m.bind(super)++;
        use(super.m.bind(super)++);
        ++super.a;
        use(++super.a);
        ++super.b;
        use(++super.b);
        ++super.c;
        use(++super.c);
        ++super.d;
        use(++super.d);
        ++super.e;
        use(++super.e);
        ++super.f;
        use(++super.f);
        ++super.g;
        use(++super.g);
        ++super.h;
        use(++super.h);
        ++super.i;
        use(++super.i);
        ++op(Op.INDEX,super,87);
        use(++op(Op.INDEX,super,87));
        ++super.m.bind(super);
        use(++super.m.bind(super));
        super.this.a();
        use(super.this.a());
        super.this.b();
        use(super.this.b());
        super.c();
        use(super.c());
        super.this.d();
        use(super.this.d());
        super.this.e();
        use(super.this.e());
        super.this.f();
        use(super.this.f());
        super.g();
        use(super.g());
        super.this.h();
        use(super.this.h());
        super.i();
        use(super.i());
        (op(Op.INDEX,super,87))();
        use((op(Op.INDEX,super,87))());
        super.m();
        use(super.m());
        super.m(87);
        use(super.m(87));
        super.a = 42;
        use(super.a = 42);
        super.b = 42;
        use(super.b = 42);
        super.c = 42;
        use(super.c = 42);
        super.d = 42;
        use(super.d = 42);
        super.e = 42;
        use(super.e = 42);
        super.f = 42;
        use(super.f = 42);
        super.g = 42;
        use(super.g = 42);
        super.h = 42;
        use(super.h = 42);
        super.i = 42;
        use(super.i = 42);
        op(Op.INDEX_ASSIGN,super,87,42);
        use(op(Op.INDEX_ASSIGN,super,87,42));
        super.m.bind(super);
        use(super.m.bind(super));
        super.a = ( super.a ) || ( 42 );
        use(super.a = ( super.a ) || ( 42 ));
        super.b = ( super.b ) || ( 42 );
        use(super.b = ( super.b ) || ( 42 ));
        super.c = ( super.c ) || ( 42 );
        use(super.c = ( super.c ) || ( 42 ));
        super.d = ( super.d ) || ( 42 );
        use(super.d = ( super.d ) || ( 42 ));
        super.e = ( super.e ) || ( 42 );
        use(super.e = ( super.e ) || ( 42 ));
        super.f = ( super.f ) || ( 42 );
        use(super.f = ( super.f ) || ( 42 ));
        super.g = ( super.g ) || ( 42 );
        use(super.g = ( super.g ) || ( 42 ));
        super.h = ( super.h ) || ( 42 );
        use(super.h = ( super.h ) || ( 42 ));
        super.i = ( super.i ) || ( 42 );
        use(super.i = ( super.i ) || ( 42 ));
        op(Op.INDEX_ASSIGN,super,87,42);
        use(op(Op.INDEX_ASSIGN,super,87,42));
        super.m.bind(super);
        use(super.m.bind(super));
        super.a += 42;
        use(super.a += 42);
        super.b += 42;
        use(super.b += 42);
        super.c += 42;
        use(super.c += 42);
        super.d += 42;
        use(super.d += 42);
        super.e += 42;
        use(super.e += 42);
        super.f += 42;
        use(super.f += 42);
        super.g += 42;
        use(super.g += 42);
        super.h += 42;
        use(super.h += 42);
        super.i += 42;
        use(super.i += 42);
        op(Op.INDEX_ASSIGN,super,87,42);
        use(op(Op.INDEX_ASSIGN,super,87,42));
        super.m.bind(super);
        use(super.m.bind(super));
        super.a -= 42;
        use(super.a -= 42);
        super.b -= 42;
        use(super.b -= 42);
        super.c -= 42;
        use(super.c -= 42);
        super.d -= 42;
        use(super.d -= 42);
        super.e -= 42;
        use(super.e -= 42);
        super.f -= 42;
        use(super.f -= 42);
        super.g -= 42;
        use(super.g -= 42);
        super.h -= 42;
        use(super.h -= 42);
        super.i -= 42;
        use(super.i -= 42);
        op(Op.INDEX_ASSIGN,super,87,42);
        use(op(Op.INDEX_ASSIGN,super,87,42));
        super.m.bind(super);
        use(super.m.bind(super));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
