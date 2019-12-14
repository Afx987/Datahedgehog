/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/completion_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "./completion_test_support";

export var main : () => any = () =>  {
    let builder : CompletionTestBuilder = new CompletionTestBuilder();
    builder.buildAll();
};
export namespace CompletionTestBuilder {
    export type Constructors = 'CompletionTestBuilder';
    export type Interface = Omit<CompletionTestBuilder, Constructors>;
}
@DartClass
export class CompletionTestBuilder {
    expectedPassCount : number;

    expectedFailCount : number;

    buildAll() : void {
        this.buildNumberedTests();
        this.buildCommentSnippetTests();
        this.buildCompletionTests();
        this.buildOtherTests();
        this.buildLibraryTests();
        let testCount : number = this.expectedPassCount + this.expectedFailCount;
        core.print(`Total ${testCount} tests, of which ${this.expectedFailCount} are expected to fail.`);
    }
    buildCommentSnippetTests() : void {
        this.buildTests('testCommentSnippets001','class X {static final num MAX = 0;num yc,xc;mth() {xc = yc = MA!1X;x!2c.abs();num f = M!3AX;}}',new core.DartList.literal<string>("1+MAX","2+xc","3+MAX"));
        this.buildTests('testCommentSnippets002','class Y {String x=\'hi\';mth() {x.l!1ength;int n = 0;x!2.codeUnitAt(n!3);}}',new core.DartList.literal<string>("1+length","2+x","3+n"));
        this.buildTests('testCommentSnippets004','class A {!1int x; !2mth() {!3int y = this.!5x!6;}}class B{}',new core.DartList.literal<string>("1+A","2+B","3+x","3-y","5+mth","6+x"));
        this.buildTests('testCommentSnippets005','class Date { static Date JUN, JUL;}class X { m() { return Da!1te.JU!2L; }}',new core.DartList.literal<string>("1+Date","2+JUN","2+JUL"));
        this.buildTests('testCommentSnippets007','class C {mth(Map x, !1) {}mtf(!2, Map x) {}m() {for (in!3t i=0; i<5; i++); A!4 x;}}class int{}class Arrays{}',new core.DartList.literal<string>("1+bool","2+bool","3+int","4+Arrays"));
        this.buildTests('testCommentSnippets008','class Date{}final num M = Dat!1',new core.DartList.literal<string>("1+Date"));
        this.buildTests('testCommentSnippets009','class Maps{}class x extends!5 !2M!3 !4implements!6 !1\n{}',new core.DartList.literal<string>("1+Map","2+Maps","3+Maps","4-Maps","4+implements","5-Maps","6-Map","6+implements"),{
            failingTests : '46'});
        this.buildTests('testCommentSnippets010','class x implements !1{}',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets011','class x implements M!1{}',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets012','class x implements M!1\n{}',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets013','class x !2{!1}!3',new core.DartList.literal<string>("1+num","2-num","3+num"));
        this.buildTests('testCommentSnippets014','typedef n!1 ;',new core.DartList.literal<string>("1+num"));
        this.buildTests('testCommentSnippets015','class D {f(){} g(){f!1(f!2);}}',new core.DartList.literal<string>("1+f","2+f"));
        this.buildTests('testCommentSnippets016','class F {m() { m(); !1}}',new core.DartList.literal<string>("1+m"));
        this.buildTests('testCommentSnippets017','class F {var x = !1false;}',new core.DartList.literal<string>("1+true"));
        this.buildTests('testCommentSnippets018','class Map{}class Arrays{}class C{ m(!1){} n(!2 x, q)',new core.DartList.literal<string>("1+Map","1-void","1-null","2+Arrays","2-void","2-null"));
        this.buildTests('testCommentSnippets019','class A{m(){Object x;x.!1/**/clear()',new core.DartList.literal<string>("1+toString"));
        this.buildTests('testCommentSnippets020','classMap{}class tst {var newt;void newf(){}test() {var newz;new!1/**/;}}',new core.DartList.literal<string>("1+newt","1+newf","1+newz","1-Map"));
        this.buildTests('testCommentSnippets021','class Map{}class tst {var newt;void newf(){}test() {var newz;new !1/**/;}}',new core.DartList.literal<string>("1+Map","1-newt"));
        this.buildTests('testCommentSnippets022','class Map{}class F{m(){new !1;}}',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets022a','class Map{}class F{m(){new !1',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets022b','class Map{factory Map.qq(){return null;}}class F{m(){new Map.!1qq();}}',new core.DartList.literal<string>("1+qq"));
        this.buildTests('testCommentSnippets023','class X {X c; X(this.!1c!3) : super() {c.!2}}',new core.DartList.literal<string>("1+c","2+c","3+c"));
        this.buildTests('testCommentSnippets024','class q {m(Map q){var x;m(!1)}n(){var x;n(!2)}}',new core.DartList.literal<string>("1+x","2+x"));
        this.buildTests('testCommentSnippets025','class q {num m() {var q; num x=!1 q!3 + !2/**/;}}',new core.DartList.literal<string>("1+q","2+q","3+q"));
        this.buildTests('testCommentSnippets026','class List{}class a implements !1{}',new core.DartList.literal<string>("1+List"));
        this.buildTests('testCommentSnippets027','class String{}class List{}class test <X extends !1String!2> {}',new core.DartList.literal<string>("1+List","2+String","2-List"));
        this.buildTests('testCommentSnippets028','class String{}class List{}class DateTime{}typedef T Y<T extends !1>(List input);',new core.DartList.literal<string>("1+DateTime","1+String"));
        this.buildTests('testCommentSnippets029','interface A<X> default B<X extends !1List!2> {}',new core.DartList.literal<string>("1+DateTime","2+List"));
        this.buildTests('testCommentSnippets030','class Bar<T extends Foo> {const Bar(!1T!2 k);T!3 m(T!4 a, T!5 b){}final T!6 f = null;}',new core.DartList.literal<string>("1+T","2+T","3+T","4+T","5+T","6+T"),{
            failingTests : '123456'});
        this.buildTests('testCommentSnippets031','class Bar<T extends Foo> {m(x){if (x is !1) return;if (x is!!!2)}}',new core.DartList.literal<string>("1+Bar","1+T","2+T","2+Bar"),{
            failingTests : '12'});
        this.buildTests('testCommentSnippets032','class Fit{}class Bar<T extends Fooa> {const !2F!1ara();}',new core.DartList.literal<string>("1+Fit","1+Fara","1-Bar","2+Fit"),{
            failingTests : '1'});
        this.buildTests('testCommentSnippets033','class List{add(){}length(){}}t1() {var x;if (x is List) {x.!1add(3);}}',new core.DartList.literal<string>("1+add","1+length"));
        this.buildTests('testCommentSnippets035','class List{clear(){}length(){}}t3() {var x=new List(), y=x.!1length();x.!2clear();}',new core.DartList.literal<string>("1+length","2+clear"));
        this.buildTests('testCommentSnippets036','class List{}t3() {var x=new List!1}',new core.DartList.literal<string>("1+List"));
        this.buildTests('testCommentSnippets037','class List{factory List.from(){}}t3() {var x=new List.!1}',new core.DartList.literal<string>("1+from"));
        this.buildTests('testCommentSnippets038','f(){int xa; String s = \'$x!1\';}',new core.DartList.literal<string>("1+xa"));
        this.buildTests('testCommentSnippets038a','int xa; String s = \'$x!1\'',new core.DartList.literal<string>("1+xa"));
        this.buildTests('testCommentSnippets039','f(){int xa; String s = \'$!1\';}',new core.DartList.literal<string>("1+xa"));
        this.buildTests('testCommentSnippets039a','int xa; String s = \'$!1\'',new core.DartList.literal<string>("1+xa"));
        this.buildTests('testCommentSnippets040','class List{add(){}}class Map{}class X{m(){List list; list.!1 Map map;}}',new core.DartList.literal<string>("1+add"));
        this.buildTests('testCommentSnippets041','class List{add(){}length(){}}class X{m(){List list; list.!1 zox();}}',new core.DartList.literal<string>("1+add"));
        this.buildTests('testCommentSnippets042','class DateTime{static const int WED=3;int get day;}fd(){DateTime d=new DateTime.now();d.!1WED!2;}',new core.DartList.literal<string>("1+day","2-WED"));
        this.buildTests('testCommentSnippets043','class L{var k;void.!1}',new core.DartList.literal<string>("1-k"));
        this.buildTests('testCommentSnippets044','class List{}class XXX {XXX.fisk();}main() {main(); new !1}}',new core.DartList.literal<string>("1+List","1+XXX.fisk"));
        this.buildTests('testCommentSnippets047','f(){int x;int y=!1;}',new core.DartList.literal<string>("1+x"));
        this.buildTests('testCommentSnippets048','import \'dart:convert\' as json;f() {var x=new js!1}',new core.DartList.literal<string>("1+json"));
        this.buildTests('testCommentSnippets049','import \'dart:convert\' as json;\nimport \'dart:convert\' as jxx;\nclass JsonDecoderX{}\nf1() {var x=new !2j!1s!3}',new core.DartList.literal<string>("1+json","1+jxx","2+json","2+jxx","2-JsonDecoder","3+json","3-jxx"));
        this.buildTests('testCommentSnippets050','class xdr {\n  xdr();\n  const xdr.a(a,b,c);\n  xdr.b();\n  f() => 3;\n}\nclass xa{}\nk() {\n  new x!1dr().f();\n  const x!2dr.!3a(1, 2, 3);\n}',new core.DartList.literal<string>("1+xdr","1+xa","1+xdr.a","1+xdr.b","2+xa","2+xdr","2+xdr.a","2+xdr.b","3+b","3+a"));
        this.buildTests('testCommentSnippets051','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}\nvoid r() {\n  var v;\n  if (v is String) {\n    v.!1length;\n    v.!2getKeys;\n  }\n}',new core.DartList.literal<string>("1+length","2-getKeys"));
        this.buildTests('testCommentSnippets052','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}\nvoid r() {\n  List<String> values = [\'a\',\'b\',\'c\'];\n  for (var v in values) {\n    v.!1toUpperCase;\n    v.!2getKeys;\n  }\n}',new core.DartList.literal<string>("1+toUpperCase","2-getKeys"));
        this.buildTests('testCommentSnippets053','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}\nvoid r() {\n  var v;\n  while (v is String) {\n    v.!1toUpperCase;\n    v.!2getKeys;\n  }\n}',new core.DartList.literal<string>("1+toUpperCase","2-getKeys"));
        this.buildTests('testCommentSnippets054','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}\nvoid r() {\n  var v;\n  for (; v is String; v.!1isEmpty) {\n    v.!2toUpperCase;\n    v.!3getKeys;\n  }\n}',new core.DartList.literal<string>("1+isEmpty","2+toUpperCase","3-getKeys"));
        this.buildTests('testCommentSnippets055','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}\nvoid r() {\n  String v;\n  if (v is Object) {\n    v.!1toUpperCase;\n  }\n}',new core.DartList.literal<string>("1+toUpperCase"));
        this.buildTests('testCommentSnippets056','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}\nvoid f(var v) {\n  if (v is!! String) {\n    return;\n  }\n  v.!1toUpperCase;\n}',new core.DartList.literal<string>("1+toUpperCase"));
        this.buildTests('testCommentSnippets057','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}\nvoid f(var v) {\n  if ((v as String).!2length == 0) {\n    v.!1toUpperCase;\n  }\n}',new core.DartList.literal<string>("1+toUpperCase","2+length"));
        this.buildTests('testCommentSnippets058','typedef vo!2id callback(int k);\nvoid x(callback q){}\nvoid r() {\n  callback v;\n  x(!1);\n}',new core.DartList.literal<string>("1+v","2+void"),{
            failingTests : '2'});
        this.buildTests('testCommentSnippets059','f(){((int x) => x+4).!1call(1);}',new core.DartList.literal<string>("1-call"));
        this.buildTests('testCommentSnippets060','class Map{}\nabstract class MM extends Map{factory MM() => new Map();}\nclass Z {\n  MM x;\n  f() {\n    x!1\n  }\n}',new core.DartList.literal<string>("1+x","1-x[]"));
        this.buildTests('testCommentSnippets061','class A{m(){!1f(3);!2}}n(){!3f(3);!4}f(x)=>x*3;',new core.DartList.literal<string>("1+f","1+n","2+f","2+n","3+f","3+n","4+f","4+n"));
        this.buildTests('testCommentSnippets063','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}\nvoid r(var v) {\n  v.!1toUpperCase;\n  assert(v is String);\n  v.!2toUpperCase;\n}',new core.DartList.literal<string>("1-toUpperCase","2+toUpperCase"));
        this.buildTests('testCommentSnippets064','class Spline {\n  Line c;\n  Spline a() {\n    return this;\n  }\n  Line b() {\n    return null;\n  }\n  Spline f() {\n    Line x = new Line();\n    x.!9h()..!1a()..!2b().!7g();\n    x.!8j..!3b()..!4c..!6c..!5a();\n  }\n}\nclass Line {\n  Spline j;\n  Line g() {\n    return this;\n  }\n  Spline h() {\n    return null;\n  }\n}',new core.DartList.literal<string>("1+a","2+b","1-g","2-h","3+b","4+c","5+a","6+c","7+g","8+j","9+h"));
        this.buildTests('testCommentSnippets065','class Spline {\n  Line c;\n  Spline a() {\n    return this;\n  }\n  Line b() {\n    return null;\n  }\n  Spline f() {\n    Line x = new Line();\n    x.h()..!1;\n  }\n}\nclass Line {\n  Spline j;\n  Line g() {\n    return this;\n  }\n  Spline h() {\n    return null;\n  }\n}',new core.DartList.literal<string>("1+a"));
        this.buildTests('testCommentSnippets066','class Spline {\n  Line c;\n  Spline a() {\n    return this;\n  }\n  Line b() {\n    return null;\n  }\n  Spline f() {\n    Line x = new Line();\n    x.h()..a()..!1;\n  }\n}\nclass Line {\n  Spline j;\n  Line g() {\n    return this;\n  }\n  Spline h() {\n    return null;\n  }\n}',new core.DartList.literal<string>("1+b"));
        this.buildTests('testCommentSnippets067','class Spline {\n  Line c;\n  Spline a() {\n    return this;\n  }\n  Line b() {\n    return null;\n  }\n  Spline f() {\n    Line x = new Line();\n    x.h()..a()..c..!1;\n  }\n}\nclass Line {\n  Spline j;\n  Line g() {\n    return this;\n  }\n  Spline h() {\n    return null;\n  }\n}',new core.DartList.literal<string>("1+b"));
        this.buildTests('testCommentSnippets068','class Spline {\n  Line c;\n  Spline a() {\n    return this;\n  }\n  Line b() {\n    return null;\n  }\n  Spline f() {\n    Line x = new Line();\n    x.j..b()..c..!1;\n  }\n}\nclass Line {\n  Spline j;\n  Line g() {\n    return this;\n  }\n  Spline h() {\n    return null;\n  }\n}',new core.DartList.literal<string>("1+c"));
        this.buildTests('testCommentSnippets069','class Spline {\n  Line c;\n  Spline a() {\n    return this;\n  }\n  Line b() {\n    return null;\n  }\n  Spline f() {\n    Line x = new Line();\n    x.j..b()..!1;\n  }\n}\nclass Line {\n  Spline j;\n  Line g() {\n    return this;\n  }\n  Spline h() {\n    return null;\n  }\n}',new core.DartList.literal<string>("1+c"));
        this.buildTests('testCommentSnippets070','class Spline {\n  Line c;\n  Spline a() {\n    return this;\n  }\n  Line b() {\n    return null;\n  }\n  Spline f() {\n    Line x = new Line();\n    x.j..!1;\n  }\n}\nclass Line {\n  Spline j;\n  Line g() {\n    return this;\n  }\n  Spline h() {\n    return null;\n  }\n}',new core.DartList.literal<string>("1+b"));
        this.buildTests('testCommentSnippets072','class X {\n  int _p;\n  set p(int x) => _p = x;\n}\nf() {\n  X x = new X();\n  x.!1p = 3;\n}',new core.DartList.literal<string>("1+p"));
        this.buildTests('testCommentSnippets073','class X {\n  m() {\n    JSON.stri!1;\n    X f = null;\n  }\n}\nclass JSON {\n  static stringify() {}\n}',new core.DartList.literal<string>("1+stringify"));
        this.buildTests('testCommentSnippets074','class X {\n  m() {\n    _x!1\n  }\n  _x1(){}\n}',new core.DartList.literal<string>("1+_x1"));
        this.buildTests('testCommentSnippets075','p(x)=>0;var E;f(q)=>!1p(!2E);',new core.DartList.literal<string>("1+p","2+E"));
        this.buildTests('testCommentSnippets076','class Map<K,V>{}class List<E>{}class int{}main() {var m=new Map<Lis!1t<Map<int,in!2t>>,List<!3int>>();}',new core.DartList.literal<string>("1+List","2+int","3+int"));
        this.buildTests('testCommentSnippets076a','class Map<K,V>{}class List<E>{}class int{}main() {var m=new Map<Lis!1t<Map<int,in!2t>>,List<!3>>();}',new core.DartList.literal<string>("1+List","2+int","3+int"));
        this.buildTests('testCommentSnippets077','class FileMode {\n  static const READ = const FileMode._internal(0);\n  static const WRITE = const FileMode._internal(1);\n  static const APPEND = const FileMode._internal(2);\n  const FileMode._internal(int this._mode);\n  factory FileMode._internal1(int this._mode);\n  factory FileMode(_mode);\n  final int _mode;\n}\nclass File {\n  factory File(String path) => null;\n  factory File.fromPath(Path path) => null;\n}\nf() => new Fil!1',new core.DartList.literal<string>("1+File","1+File.fromPath","1+FileMode","1+FileMode._internal1","1+FileMode._internal"));
        this.buildTests('testCommentSnippets078','class Map{static from()=>null;clear(){}}void main() { Map.!1 }',new core.DartList.literal<string>("1+from","1-clear"));
        this.buildTests('testCommentSnippets079','class Map{static from()=>null;clear(){}}void main() { Map s; s.!1 }',new core.DartList.literal<string>("1-from","1+clear"));
        this.buildTests('testCommentSnippets080','class RuntimeError{var message;}void main() { RuntimeError.!1 }',new core.DartList.literal<string>("1-message"));
        this.buildTests('testCommentSnippets081','class Foo {this.!1}',new core.DartList.literal<string>("1-Object"),{
            failingTests : '1'});
        this.buildTests('testCommentSnippets082','        class HttpRequest {}\n        class HttpResponse {}\n        main() {\n          var v = (HttpRequest req, HttpResp!1)\n        }',new core.DartList.literal<string>("1+HttpResponse"));
        this.buildTests('testCommentSnippets083','main() {(.!1)}',new core.DartList.literal<string>("1-toString"));
        this.buildTests('testCommentSnippets083a','main() { .!1 }',new core.DartList.literal<string>("1-toString"));
        this.buildTests('testCommentSnippets083b','main() { null.!1 }',new core.DartList.literal<string>("1+toString"));
        this.buildTests('testCommentSnippets085','class List{}class Map{}class Z extends List with !1Ma!2p {}',new core.DartList.literal<string>("1+List","1+Map","2+Map","2-List"));
        this.buildTests('testCommentSnippets086','class Q{f(){xy() {!2};x!1y();}}',new core.DartList.literal<string>("1+xy","2+f","2-xy"),{
            failingTests : '2'});
        this.buildTests('testCommentSnippets087','class Map{}class Q extends Object with !1Map {}',new core.DartList.literal<string>("1+Map","1-HashMap"));
        this.buildTests('testCommentSnippets088','class A {\n  int f;\n  B m(){}\n}\nclass B extends A {\n  num f;\n  A m(){}\n}\nclass Z {\n  B q;\n  f() {q.!1}\n}',new core.DartList.literal<string>("1+f","1+m"));
        this.buildTests('testCommentSnippets089','class Q {\n  fqe() {\n    xya() {\n      xyb() {\n        !1\n      }\n      !3 xyb();\n    };\n    xza() {\n      !2\n    }\n    xya();\n    !4 xza();\n  }\n  fqi() {\n    !5\n  }\n}',new core.DartList.literal<string>("1+fqe","1+fqi","1+Q","1-xya","1-xyb","1-xza","2+fqe","2+fqi","2+Q","2-xya","2-xyb","2-xza","3+fqe","3+fqi","3+Q","3-xya","3+xyb","3-xza","4+fqe","4+fqi","4+Q","4+xya","4-xyb","4+xza","5+fqe","5+fqi","5+Q","5-xya","5-xyb","5-xza"),{
            failingTests : '123'});
        this.buildTests('testCommentSnippets090','class X { f() { var a = \'x\'; a.!1 }}',new core.DartList.literal<string>("1+length"));
    }
    buildCompletionTests() : void {
        this.buildTests('testCompletion_alias_field','typedef int fnint(int k); fn!1int x;',new core.DartList.literal<string>("1+fnint"));
        this.buildTests('testCompletion_annotation_argumentList','class AAA {",\n  const AAA({int aaa, int bbb});",\n}",\n",\n@AAA(!1)\nmain() {\n}',new core.DartList.literal<string>("1+AAA","1+aaa","1+bbb"),{
            failingTests : '1'});
        this.buildTests('testCompletion_annotation_topLevelVar','const fooConst = null;\nfinal fooNotConst = null;\nconst bar = null;\n\n@foo!1\nmain() {\n}',new core.DartList.literal<string>("1+fooConst","1-fooNotConst","1-bar"),{
            failingTests : '1'});
        this.buildTests('testCompletion_annotation_type','class AAA {\n  const AAA({int a, int b});\n  const AAA.nnn(int c, int d);\n}\n@AAA!1\nmain() {\n}',new core.DartList.literal<string>("1+AAA","1+AAA.nnn"),{
            failingTests : '1'});
        this.buildTests('testCompletion_annotation_type_inClass_withoutMember','class AAA {\n  const AAA();\n}\n\nclass C {\n  @A!1\n}',new core.DartList.literal<string>("1+AAA"));
        this.buildTests('testCompletion_argument_typeName','class Enum {\n  static Enum FOO = new Enum();\n}\nf(Enum e) {}\nmain() {\n  f(En!1);\n}',new core.DartList.literal<string>("1+Enum"));
        this.buildTests('testCompletion_arguments_ignoreEmpty','class A {\n  test() {}\n}\nmain(A a) {\n  a.test(!1);\n}',new core.DartList.literal<string>("1-test"));
        this.buildTests('testCompletion_as_asIdentifierPrefix','main(p) {\n  var asVisible;\n  var v = as!1;\n}',new core.DartList.literal<string>("1+asVisible"));
        this.buildTests('testCompletion_as_asPrefixedIdentifierStart','class A {\n  var asVisible;\n}\n\nmain(A p) {\n  var v = p.as!1;\n}',new core.DartList.literal<string>("1+asVisible"));
        this.buildTests('testCompletion_as_incompleteStatement','class MyClass {}\nmain(p) {\n  var justSomeVar;\n  var v = p as !1\n}',new core.DartList.literal<string>("1+MyClass","1-justSomeVar"));
        this.buildTests('testCompletion_cascade','class A {\n  aaa() {}\n}\n\n\nmain(A a) {\n  a..!1 aaa();\n}',new core.DartList.literal<string>("1+aaa","1-main"));
        this.buildTests('testCompletion_combinator_afterComma','import \'dart:math\' show cos, !1;',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_ended','import \'dart:math\' show !1;"',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_export','export \'dart:math\' show !1;"',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_hide','import \'dart:math\' hide !1;"',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_notEnded','import \'dart:math\' show !1"',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_usePrefix','import \'dart:math\' show s!1"',new core.DartList.literal<string>("1+sin","1+sqrt","1-cos","1-String"));
        this.buildTests('testCompletion_constructor_field','class X { X(this.field); int f!1ield;}',new core.DartList.literal<string>("1+field"),{
            failingTests : '1'});
        this.buildTests('testCompletion_constructorArguments_showOnlyCurrent','class A {\n  A.first(int p);\n  A.second(double p);\n}\nmain() {\n  new A.first(!1);\n}',new core.DartList.literal<string>("1+A.first","1-A.second"),{
            failingTests : '1'});
        this.buildTests('testCompletion_constructorArguments_whenPrefixedType','import \'dart:math\' as m;\nmain() {\n  new m.Random(!1);\n}',new core.DartList.literal<string>("1+Random:ARGUMENT_LIST"),{
            failingTests : '1'});
        this.buildTests('testCompletion_dartDoc_reference_forClass','/**\n * [int!1]\n * [method!2]\n */\nclass AAA {\n  methodA() {}\n}',new core.DartList.literal<string>("1+int","1-method","2+methodA","2-int"));
        this.buildTests('testCompletion_dartDoc_reference_forConstructor','class A {\n  /**\n   * [aa!1]\n   * [int!2]\n   * [method!3]\n   */\n  A.named(aaa, bbb) {}\n  methodA() {}\n}',new core.DartList.literal<string>("1+aaa","1-bbb","2+int","2-double","3+methodA"));
        this.buildTests('testCompletion_dartDoc_reference_forFunction','/**\n * [aa!1]\n * [int!2]\n * [function!3]\n */\nfunctionA(aaa, bbb) {}\nfunctionB() {}',new core.DartList.literal<string>("1+aaa","1-bbb","2+int","2-double","3+functionA","3+functionB","3-int"),{
            failingTests : '1'});
        this.buildTests('testCompletion_dartDoc_reference_forFunctionTypeAlias','/**\n * [aa!1]\n * [int!2]\n * [Function!3]\n */\ntypedef FunctionA(aaa, bbb) {}\ntypedef FunctionB() {}',new core.DartList.literal<string>("1+aaa","1-bbb","2+int","2-double","3+FunctionA","3+FunctionB","3-int"),{
            failingTests : '1'});
        this.buildTests('testCompletion_dartDoc_reference_forMethod','class A {\n  /**\n   * [aa!1]\n   * [int!2]\n   * [method!3]\n   */\n  methodA(aaa, bbb) {}\n  methodB() {}\n}',new core.DartList.literal<string>("1+aaa","1-bbb","2+int","2-double","3+methodA","3+methodB","3-int"));
        this.buildTests('testCompletion_dartDoc_reference_incomplete','/**\n * [doubl!1 some text\n * other text\n */\nclass A {}\n/**\n * [!2 some text\n * other text\n */\nclass B {}\n/**\n * [!3] some text\n */\nclass C {}',new core.DartList.literal<string>("1+double","1-int","2+int","2+String","3+int","3+String"));
        this.buildTests('testCompletion_double_inFractionPart','main() {\n  1.0!1\n}',new core.DartList.literal<string>("1-abs","1-main"));
        this.buildTests('testCompletion_enum','enum MyEnum {A, B, C}\nmain() {\n  MyEnum.!1;\n}',new core.DartList.literal<string>("1+values","1+A","1+B","1+C"));
        this.buildTests('testCompletion_exactPrefix_hasHigherRelevance','var STR;\nmain(p) {\n  var str;\n  str!1;\n  STR!2;\n  Str!3;\n}',new core.DartList.literal<string>("1+str","1+STR","2+STR","2+str","3+String","3+STR","3+str"));
        this.buildTests('testCompletion_export_dart','import \'dart:math\nimport \'dart:_chrome\nimport \'dart:_collection.dev\nexport \'dart:!1',new core.DartList.literal<string>("1+dart:core","1+dart:math","1-dart:_chrome","1-dart:_collection.dev"));
        this.buildTests('testCompletion_export_noStringLiteral_noSemicolon','import !1\n\nclass A {}',new core.DartList.literal<string>("1+'dart:!';","1+'package:!';"),{
            failingTests : '1'});
        this.buildTests('testCompletion_forStmt_vars','class int{}class Foo { mth() { for (in!1t i = 0; i!2 < 5; i!3++); }}',new core.DartList.literal<string>("1+int","2+i","3+i"));
        this.buildTests('testCompletion_function','class Foo { int boo = 7; mth() { PNGS.sort((String a, Str!1) => a.compareTo(b)); }}',new core.DartList.literal<string>("1+String"));
        this.buildTests('testCompletion_function_partial','class Foo { int boo = 7; mth() { PNGS.sort((String a, Str!1)); }}',new core.DartList.literal<string>("1+String"));
        this.buildTests('testCompletion_functionTypeParameter_namedArgument','typedef FFF(a, b, {x1, x2, y});\nmain(FFF fff) {\n  fff(1, 2, !1)!2;\n}',new core.DartList.literal<string>("1+x1","2-x2"),{
            failingTests : '1'});
        this.buildTests('testCompletion_ifStmt_field1','class Foo { int myField = 7; mth() { if (!1) {}}}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_field1a','class Foo { int myField = 7; mth() { if (!1) }}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_field2','class Foo { int myField = 7; mth() { if (m!1) {}}}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_field2a','class Foo { int myField = 7; mth() { if (m!1) }}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_field2b','class Foo { myField = 7; mth() { if (m!1) {}}}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_localVar','class Foo { mth() { int value = 7; if (v!1) {}}}',new core.DartList.literal<string>("1+value"));
        this.buildTests('testCompletion_ifStmt_localVara','class Foo { mth() { value = 7; if (v!1) {}}}',new core.DartList.literal<string>("1-value"));
        this.buildTests('testCompletion_ifStmt_topLevelVar','int topValue = 7; class Foo { mth() { if (t!1) {}}}',new core.DartList.literal<string>("1+topValue"));
        this.buildTests('testCompletion_ifStmt_topLevelVara','topValue = 7; class Foo { mth() { if (t!1) {}}}',new core.DartList.literal<string>("1+topValue"));
        this.buildTests('testCompletion_ifStmt_unionType_nonStrict','class A { a() => null; x() => null}\nclass B { a() => null; y() => null}\nvoid main() {\n  var x;\n  var c;\n  if(c) {\n    x = new A();\n  } else {\n    x = new B();\n  }\n  x.!1;\n}',new core.DartList.literal<string>("1+a","1+x","1+y"),{
            failingTests : '1'});
        this.buildTests('testCompletion_ifStmt_unionType_strict','class A { a() => null; x() => null}\nclass B { a() => null; y() => null}\nvoid main() {\n  var x;\n  var c;\n  if(c) {\n    x = new A();\n  } else {\n    x = new B();\n  }\n  x.!1;\n}',new core.DartList.literal<string>("1+a","1-x","1-y"),{
            failingTests : '1'});
        this.buildTests('testCompletion_import','import \'!1\';',new core.DartList.literal<string>("1+dart:!","1+package:!"));
        this.buildTests('testCompletion_import_dart','import \'dart:math\nimport \'dart:_chrome\nimport \'dart:_collection.dev\nimport \'dart:!1',new core.DartList.literal<string>("1+dart:core","1+dart:math","1-dart:_chrome","1-dart:_collection.dev"));
        this.buildTests('testCompletion_import_hasStringLiteral_noSemicolon','import \'!1\'\n\nclass A {}',new core.DartList.literal<string>("1+dart:!","1+package:!"));
        this.buildTests('testCompletion_import_noSpace','import!1',new core.DartList.literal<string>("1+ 'dart:!';","1+ 'package:!';"),{
            failingTests : '1'});
        this.buildTests('testCompletion_import_noStringLiteral','import !1;',new core.DartList.literal<string>("1+'dart:!'","1+'package:!'"),{
            failingTests : '1'});
        this.buildTests('testCompletion_import_noStringLiteral_noSemicolon','import !1\n\nclass A {}',new core.DartList.literal<string>("1+'dart:!';","1+'package:!';"),{
            failingTests : '1'});
        this.buildTests('testCompletion_incompleteClassMember','class A {\n  Str!1\n  final f = null;\n}',new core.DartList.literal<string>("1+String","1-bool"));
        this.buildTests('testCompletion_incompleteClosure_parameterType','f1(cb(String s)) {}\nf2(String s) {}\nmain() {\n  f1((Str!1));\n  f2((Str!2));\n}',new core.DartList.literal<string>("1+String","1-bool","2+String","2-bool"));
        this.buildTests('testCompletion_inPeriodPeriod','main(String str) {\n  1 < str.!1.length;\n  1 + str.!2.length;\n  1 + 2 * str.!3.length;\n}',new core.DartList.literal<string>("1+codeUnits","2+codeUnits","3+codeUnits"),{
            failingTests : '123'});
        this.buildTests('testCompletion_instanceCreation_unresolved','class A {\n}\nmain() {\n  new NoSuchClass(!1);\n  new A.noSuchConstructor(!2);\n}',new core.DartList.literal<string>("1+int","2+int"));
        this.buildTests('testCompletion_import_lib','import \'!1',new core.DartList.literal<string>("1+my_lib.dart"),{
            extraFiles : new core.DartMap.literal([
                ["/my_lib.dart",""]]),failingTests : '1'});
        this.buildTests('testCompletion_is','class MyClass {}\nmain(p) {\n  var isVariable;\n  if (p is MyCla!1) {}\n  var v1 = p is MyCla!2;\n  var v2 = p is !3;\n  var v2 = p is!4;\n}',new core.DartList.literal<string>("1+MyClass","2+MyClass","3+MyClass","3-v1","4+is","4-isVariable"));
        this.buildTests('testCompletion_is_asIdentifierStart','main(p) {\n  var isVisible;\n  var v1 = is!1;\n  var v2 = is!2\n}',new core.DartList.literal<string>("1+isVisible","2+isVisible"));
        this.buildTests('testCompletion_is_asPrefixedIdentifierStart','class A {\n  var isVisible;\n}\n\nmain(A p) {\n  var v1 = p.is!1;\n  var v2 = p.is!2\n}',new core.DartList.literal<string>("1+isVisible","2+isVisible"));
        this.buildTests('testCompletion_is_incompleteStatement1','class MyClass {}\nmain(p) {\n  var justSomeVar;\n  var v = p is !1\n}',new core.DartList.literal<string>("1+MyClass","1-justSomeVar"));
        this.buildTests('testCompletion_is_incompleteStatement2','class MyClass {}\nmain(p) {\n  var isVariable;\n  var v = p is!1\n}',new core.DartList.literal<string>("1+is","1-isVariable"));
        this.buildTests('testCompletion_keyword_in','class Foo { int input = 7; mth() { if (in!1) {}}}',new core.DartList.literal<string>("1+input"));
        this.buildTests('testCompletion_keyword_syntheticIdentifier','main() {\n  var caseVar;\n  var otherVar;\n  var v = case!1\n}',new core.DartList.literal<string>("1+caseVar","1-otherVar"));
        this.buildTests('testCompletion_libraryIdentifier_atEOF','library int.!1',new core.DartList.literal<string>("1-parse","1-bool"));
        this.buildTests('testCompletion_libraryIdentifier_notEOF','library int.!1',new core.DartList.literal<string>("1-parse","1-bool"));
        this.buildTests('testCompletion_methodRef_asArg_incompatibleFunctionType','foo( f(int p) ) {}\nclass Functions {\n  static myFuncInt(int p) {}\n  static myFuncDouble(double p) {}\n}\nbar(p) {}\nmain(p) {\n  foo( Functions.!1; );\n}',new core.DartList.literal<string>("1+myFuncInt","1-myFuncDouble"),{
            failingTests : '1'});
        this.buildTests('testCompletion_methodRef_asArg_notFunctionType','foo( f(int p) ) {}\nclass Functions {\n  static myFunc(int p) {}\n}\nbar(p) {}\nmain(p) {\n  foo( (int p) => Functions.!1; );\n}',new core.DartList.literal<string>("1+myFunc","1-myFunc"),{
            failingTests : '1'});
        this.buildTests('testCompletion_methodRef_asArg_ofFunctionType','foo( f(int p) ) {}\nclass Functions {\n  static int myFunc(int p) {}\n}\nmain(p) {\n  foo(Functions.!1);\n}',new core.DartList.literal<string>("1+myFunc","1+myFunc"));
        this.buildTests('testCompletion_namedArgument_alreadyUsed','func({foo}) {} main() { func(foo: 0, fo!1); }',new core.DartList.literal<string>("1-foo"));
        this.buildTests('testCompletion_namedArgument_constructor','class A {A({foo, bar}) {}} main() { new A(fo!1); }',new core.DartList.literal<string>("1+foo","1-bar"),{
            failingTests : '1'});
        this.buildTests('testCompletion_namedArgument_empty','func({foo, bar}) {} main() { func(!1); }',new core.DartList.literal<string>("1+foo","1-foo"),{
            failingTests : '1'});
        this.buildTests('testCompletion_namedArgument_function','func({foo, bar}) {} main() { func(fo!1); }',new core.DartList.literal<string>("1+foo","1-bar"),{
            failingTests : '1'});
        this.buildTests('testCompletion_namedArgument_notNamed','func([foo]) {} main() { func(fo!1); }',new core.DartList.literal<string>("1-foo"));
        this.buildTests('testCompletion_namedArgument_unresolvedFunction','main() { func(fo!1); }',new core.DartList.literal<string>("1-foo"));
        this.buildTests('testCompletion_newMemberType1','class Collection{}class List extends Collection{}class Foo { !1 }',new core.DartList.literal<string>("1+Collection","1+List"));
        this.buildTests('testCompletion_newMemberType2','class Collection{}class List extends Collection{}class Foo {!1}',new core.DartList.literal<string>("1+Collection","1+List"));
        this.buildTests('testCompletion_newMemberType3','class Collection{}class List extends Collection{}class Foo {L!1}',new core.DartList.literal<string>("1-Collection","1+List"));
        this.buildTests('testCompletion_newMemberType4','class Collection{}class List extends Collection{}class Foo {C!1}',new core.DartList.literal<string>("1+Collection","1-List"));
        this.buildTests('testCompletion_positionalArgument_constructor','class A {\n  A([foo, bar]);\n}\nmain() {\n  new A(!1);\n  new A(0, !2);\n}',new core.DartList.literal<string>("1+foo","1-bar","2-foo","2+bar"),{
            failingTests : '12'});
        this.buildTests('testCompletion_positionalArgument_function','func([foo, bar]) {}\nmain() {\n  func(!1);\n  func(0, !2);\n}',new core.DartList.literal<string>("1+foo","1-bar","2-foo","2+bar"),{
            failingTests : '12'});
        this.buildTests('testCompletion_preferStaticType','class A {\n  foo() {}\n}\nclass B extends A {\n  bar() {}\n}\nmain() {\n  A v = new B();\n  v.!1\n}',new core.DartList.literal<string>("1+foo","1-bar,potential=false,declaringType=B","1+bar,potential=true,declaringType=B"),{
            failingTests : '1'});
        this.buildTests('testCompletion_privateElement_sameLibrary_constructor','class A {\n  A._c();\n  A.c();\n}\nmain() {\n  new A.!1\n}',new core.DartList.literal<string>("1+_c","1+c"));
        this.buildTests('testCompletion_privateElement_sameLibrary_member','class A {\n  _m() {}\n  m() {}\n}\nmain(A a) {\n  a.!1\n}',new core.DartList.literal<string>("1+_m","1+m"));
        this.buildTests('testCompletion_propertyAccess_whenClassTarget','class A {\n  static int FIELD;\n  int field;\n}\nmain() {\n  A.!1\n}',new core.DartList.literal<string>("1+FIELD","1-field"));
        this.buildTests('testCompletion_propertyAccess_whenClassTarget_excludeSuper','class A {\n  static int FIELD_A;\n  static int methodA() {}\n}\nclass B extends A {\n  static int FIELD_B;\n  static int methodB() {}\n}\nmain() {\n  B.!1;\n}',new core.DartList.literal<string>("1+FIELD_B","1-FIELD_A","1+methodB","1-methodA"));
        this.buildTests('testCompletion_propertyAccess_whenInstanceTarget','class A {\n  static int FIELD;\n  int fieldA;\n}\nclass B {\n  A a;\n}\nclass C extends A {\n  int fieldC;\n}\nmain(B b, C c) {\n  b.a.!1;\n  c.!2;\n}',new core.DartList.literal<string>("1-FIELD","1+fieldA","2+fieldC","2+fieldA"));
        this.buildTests('testCompletion_return_withIdentifierPrefix','f() { var vvv = 42; return v!1 }',new core.DartList.literal<string>("1+vvv"));
        this.buildTests('testCompletion_return_withoutExpression','f() { var vvv = 42; return !1 }',new core.DartList.literal<string>("1+vvv"));
        this.buildTests('testCompletion_staticField1','class num{}class Sunflower {static final n!2um MAX_D = 300;nu!3m xc, yc;Sun!4flower() {x!Xc = y!Yc = MA!1 }}',new core.DartList.literal<string>("1+MAX_D","X+xc","Y+yc","2+num","3+num","4+Sunflower"));
        this.buildTests('testCompletion_super_superType','class A {\n  var fa;\n  ma() {}\n}\nclass B extends A {\n  var fb;\n  mb() {}\n  main() {\n    super.!1\n  }\n}',new core.DartList.literal<string>("1+fa","1-fb","1+ma","1-mb"));
        this.buildTests('testCompletion_superConstructorInvocation_noNamePrefix','class A {\n  A.fooA();\n  A.fooB();\n  A.bar();\n}\nclass B extends A {\n  B() : super.!1\n}',new core.DartList.literal<string>("1+fooA","1+fooB","1+bar"),{
            failingTests : '1'});
        this.buildTests('testCompletion_superConstructorInvocation_withNamePrefix','class A {\n  A.fooA();\n  A.fooB();\n  A.bar();\n}\nclass B extends A {\n  B() : super.f!1\n}',new core.DartList.literal<string>("1+fooA","1+fooB","1-bar"),{
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inConstructorInitializer','class A {\n  var f;\n  A() : f = this.!1;\n}',new core.DartList.literal<string>("1-toString"),{
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inFieldDeclaration','class A {\n  var f = this.!1;\n}',new core.DartList.literal<string>("1-toString"),{
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inStaticMethod','class A {\n  static m() {\n    this.!1;\n  }\n}',new core.DartList.literal<string>("1-toString"),{
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inTopLevelFunction','main() {\n  this.!1;\n}',new core.DartList.literal<string>("1-toString"),{
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inTopLevelVariableDeclaration','var v = this.!1;',new core.DartList.literal<string>("1-toString"),{
            failingTests : '1'});
        this.buildTests('testCompletion_this_OK_inConstructorBody','class A {\n  var f;\n  m() {}\n  A() {\n    this.!1;\n  }\n}',new core.DartList.literal<string>("1+f","1+m"));
        this.buildTests('testCompletion_this_OK_localAndSuper','class A {\n  var fa;\n  ma() {}\n}\nclass B extends A {\n  var fb;\n  mb() {}\n  main() {\n    this.!1\n  }\n}',new core.DartList.literal<string>("1+fa","1+fb","1+ma","1+mb"));
        this.buildTests('testCompletion_topLevelField_init2','class DateTime{static var JUN;}final num M = Dat!1eTime.JUN;',new core.DartList.literal<string>("1+DateTime","1-void"));
        this.buildTests('testCompletion_while','class Foo { int boo = 7; mth() { while (b!1) {} }}',new core.DartList.literal<string>("1+boo"));
    }
    buildLibraryTests() : void {
        let sources : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        this.buildTests('test_export_ignoreIfThisLibraryExports','export \'dart:math\';\nlibFunction() {};\nmain() {\n  !1\n}',new core.DartList.literal<string>("1-cos","1+libFunction"));
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib;\nexport \'dart:math\' hide sin;\nlibFunction() {};');
        this.buildTests('test_export_showIfImportLibraryWithExport','import \'lib.dart\' as p;\nmain() {\n  p.!1\n}',new core.DartList.literal<string>("1+cos","1-sin","1+libFunction"),{
            extraFiles : sources,failingTests : '1'});
        this.buildTests('test_importPrefix_hideCombinator','import \'dart:math\' as math hide PI;\nmain() {\n  math.!1\n}',new core.DartList.literal<string>("1-PI","1+LN10"),{
            failingTests : '1'});
        this.buildTests('test_importPrefix_showCombinator','import \'dart:math\' as math show PI;\nmain() {\n  math.!1\n}',new core.DartList.literal<string>("1+PI","1-LN10"),{
            failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib\nclass _A\n  foo() {}\n\nclass A extends _A {\n}');
        this.buildTests('test_memberOfPrivateClass_otherLibrary','import \'lib.dart\';\nmain(A a) {\n  a.!1\n}',new core.DartList.literal<string>("1+foo"),{
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib;\nclass A {\n  A.c();\n  A._c();\n}');
        this.buildTests('test_noPrivateElement_otherLibrary_constructor','import \'lib.dart\';\nmain() {\n  new A.!1\n}',new core.DartList.literal<string>("1-_c","1+c"),{
            failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib;\nclass A {\n  var f;\n  var _f;\n}');
        this.buildTests('test_noPrivateElement_otherLibrary_member','              import \'lib.dart\';\n              main(A a) {\n                a.!1\n              }',new core.DartList.literal<string>("1-_f","1+f"),{
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/firth.dart",'library firth;\nclass SerializationException {\n  const SerializationException();\n}');
        this.buildTests('testLibrary001','import \'firth.dart\';\nmain() {\nthrow new Seria!1lizationException();}',new core.DartList.literal<string>("1+SerializationException"),{
            extraFiles : sources,failingTests : '1'});
        this.buildTests('testLibrary002','t2() {var q=[0],z=q.!1length;q.!2clear();}',new core.DartList.literal<string>("1+length","1+isEmpty","2+clear"),{
            failingTests : '1'});
        this.buildTests('testLibrary003','class X{var q; f() {q.!1a!2}}',new core.DartList.literal<string>("1+end","2+abs","2-end"),{
            failingTests : '12'});
        this.buildTests('testLibrary004','            library foo;\n            import \'dart:convert\' as json;\n            class JsonDecoderX{}\n            f1() {var x=new json.!1}\n            f2() {var x=new json.JsonDe!2}\n            f3() {var x=new json.JsonDecoder!3}',new core.DartList.literal<string>("1+JsonDecoder","1-JsonDecoderX","2+JsonDecoder","2-JsonDecoderX","3+JsonDecoder","3-JsonDecoderX"));
        this.buildTests('testLibrary005','var PHI;main(){PHI=5.3;PHI.abs().!1 Object x;}',new core.DartList.literal<string>("1+abs"),{
            failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/exp2a.dart",'library exp2a;\ne2a() {}');
        op(Op.INDEX_ASSIGN,sources,"/exp1b.dart",'library exp1b;",\ne1b() {}');
        op(Op.INDEX_ASSIGN,sources,"/exp1a.dart",'library exp1a;",\nexport \'exp1b.dart\';",\ne1a() {}');
        op(Op.INDEX_ASSIGN,sources,"/imp1.dart",'library imp1;\nexport \'exp1a.dart\';\ni1() {}');
        op(Op.INDEX_ASSIGN,sources,"/imp2.dart",'library imp2;\nexport \'exp2a.dart\';\ni2() {}');
        this.buildTests('testLibrary006','import \'imp1.dart\';\nimport \'imp2.dart\';\nmain() {!1\n  i1();\n  i2();\n  e1a();\n  e1b();\n  e2a();\n}',new core.DartList.literal<string>("1+i1","1+i2","1+e1a","1+e2a","1+e1b"),{
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/l1.dart",'library l1;\nvar _l1t; var l1t;');
        this.buildTests('testLibrary007','import \'l1.dart\';\nmain() {\n  var x = l!1\n  var y = _!2\n}',new core.DartList.literal<string>("1+l1t","1-_l1t","2-_l1t"),{
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/public.dart",'library public;\nclass NonPrivate {\n  void publicMethod() {\n  }\n}');
        op(Op.INDEX_ASSIGN,sources,"/private.dart",'library _private;\nimport \'public.dart\';\nclass Private extends NonPrivate {\n  void privateMethod() {\n  }\n}');
        this.buildTests('testLibrary008','import \'private.dart\';\nimport \'public.dart\';\nclass Test {\n  void test() {\n    NonPrivate x = new NonPrivate();\n    x.!1 //publicMethod but not privateMethod should appear\n  }\n}',new core.DartList.literal<string>("1-privateMethod","1+publicMethod"),{
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib;\nint X = 1;\nvoid m(){}\nclass Y {}');
        this.buildTests('testLibrary009','import \'lib.dart\' as Q;\nvoid a() {\n  var x = Q.!1\n}\nvoid b() {\n  var x = [Q.!2]\n}\nvoid c() {\n  var x = new List([Q.!3])\n}\nvoid d() {\n  new Q.!4\n}',new core.DartList.literal<string>("1+X","1+m","1+Y","2+X","2+m","2+Y","3+X","3+m","3+Y","4+Y","4-m","4-X"),{
            extraFiles : sources,failingTests : '1234'});
    }
    buildNumberedTests() : void {
        this.buildTests('test001','void r1(var v) {\n  v.!1toString!2().!3hash!4Code\n}',new core.DartList.literal<string>("1+toString","1-==","2+toString","3+hashCode","3+toString","4+hashCode","4-toString"));
        this.buildTests('test002','void r2(var vim) {\n  v!1.toString()\n}',new core.DartList.literal<string>("1+vim"));
        this.buildTests('test003','class A {\n  int a() => 3;\n  int b() => this.!1a();\n}',new core.DartList.literal<string>("1+a"));
        this.buildTests('test004','class A {\n  int x;\n  A() : this.!1x = 1;\n  A.b() : this();\n  A.c() : this.!2b();\n  g() => new A.!3c();\n}',new core.DartList.literal<string>("1+x","2+b","3+c"),{
            failingTests : '12'});
        this.buildTests('test005','class A {}\nvoid rr(var vim) {\n  var !1vq = v!2.toString();\n  var vf;\n  v!3.toString();\n}',new core.DartList.literal<string>("1-A","1-vim","1+vq","1-vf","1-this","1-void","1-null","1-false","2-A","2+vim","2-vf","2-vq","2-this","2-void","2-null","2-false","3+vf","3+vq","3+vim","3-A"),{
            failingTests : '1'});
        this.buildTests('test006','void r2(var vim, {va: 2, b: 3}) {\n  v!1.toString()\n}',new core.DartList.literal<string>("1+va","1-b"));
        this.buildTests('test007','void r2(var vim, [va: 2, b: 3]) {\n  v!1.toString()\n}',new core.DartList.literal<string>("1+va","1-b"));
        this.buildTests('test008','!1class Aclass {}\nclass Bclass !2extends!3 !4Aclass {}\n!5abstract class Eclass implements Aclass, Bclass {}\nclass Fclass extends Bclass !6with !7 Eclass {}',new core.DartList.literal<string>("1+class","1-implements","1-extends","1-with","2+extends","3+extends","4+Aclass","4-Bclass","5+abstract","6+with","7+Eclass","7-Dclass","7-Ctype"),{
            failingTests : '2346'});
        this.buildTests('test009','typedef !1dy!2namic TestFn1();\ntypedef !3vo!4id TestFn2();\ntyp!7edef !5n!6',new core.DartList.literal<string>("1+void","1+TestFn2","2+dynamic","2-void","3+dynamic","4+void","4-dynamic","5+TestFn2","6+num","7+typedef"),{
            failingTests : '1234'});
        this.buildTests('test010','class test !8<!1t !2 !3extends String,!4 List,!5 !6>!7 {}\nclass tezetst !9<!BString,!C !DList>!A {}',new core.DartList.literal<string>("1-String","1-List","1-test","2-String","2-test","3+extends","4-tezetst","4-test","5-String","6-List","7-List","8-List","9-String","A-String","B-String","C-List","C-tezetst","D-List","D-test"),{
            failingTests : '23'});
        this.buildTests('test011','r2(var object, Object object1, Object !1);',new core.DartList.literal<string>("1+object2"),{
            failingTests : '1'});
        this.buildTests('test012','class X {\n  f() {\n    g(!1var!2 z) {!3true.!4toString();};\n  }\n}',new core.DartList.literal<string>("1+var","1+dynamic","1-f","2+var","2-dynamic","3+false","3+true","4+toString"),{
            failingTests : '123'});
        this.buildTests('test013','class Q {\n  bool x;\n  List zs;\n  int k;\n  var a;\n  mth() {\n    while (!1x !9);\n    do{} while(!2x !8);\n    for(z in !3zs) {}\n    switch(!4k) {case 1:{!0}}\n    try {\n    } on !5Object catch(a){}\n    if (!7x !6) {} else {};\n  }\n}',new core.DartList.literal<string>("1+x","2+x","3+zs","4+k","5+Q","5-a","6+==","7+x","8+==","9+==","0+k"),{
            failingTests : '689'});
        this.buildTests('test014','class Q {\n  bool x;\n  List zs;\n  int k;\n  !Dvar a;\n  !Evoid mth() {\n    !1while (z) { !Gcontinue; };\n    !2do{ !Hbreak; } !3while(x);\n    !4for(z !5in zs) {}\n    !6for (int i; i < 3; i++);\n    !7switch(k) {!8case 1:{} !9default:{}}\n    !Atry {\n    } !Bon Object !Ccatch(a){}\n    !Fassert true;\n    !Jif (x) {} !Kelse {};\n    !Lreturn;\n  }\n}',new core.DartList.literal<string>("1+while","2+do","3+while","4+for","5+in","6+for","7+switch","8+case","9+default","A+try","B+on","C+catch","D+var","E+void","F+assert","G+continue","H+break","J+if","K+else","L+return"),{
            failingTests : '3CK'});
        this.buildTests('test015','f(a,b,c) => a + b * c !1;',new core.DartList.literal<string>("1+=="),{
            failingTests : '1'});
        this.buildTests('test016','class X {dynamic f(a,b,c) {return a + b * c !1;}}',new core.DartList.literal<string>("1+=="),{
            failingTests : '1'});
        this.buildTests('test017','!1!2import \'x\' !5as r;\n!3export \'!8uri\' !6hide Q !7show X;\n!4part \'x\';',new core.DartList.literal<string>("1+library","2+import '';","3+export '';","4+part '';","5+as","6+hide","7+show","8-null"),{
            failingTests : '234567'});
        this.buildTests('test018','!1part !2of foo;',new core.DartList.literal<string>("1+part","2+of"),{
            failingTests : '12'});
        this.buildTests('test019','var truefalse = 0;\nvar falsetrue = 1;\nmain() {\n  var foo = true!1\n}',new core.DartList.literal<string>("1+true","1+truefalse","1-falsetrue"));
        this.buildTests('test020','var x = null.!1',new core.DartList.literal<string>("1+toString"));
        this.buildTests('test021','var x = .!1',new core.DartList.literal<string>("1-toString"));
        this.buildTests('test022','var x = .!1;',new core.DartList.literal<string>("1-toString"));
        this.buildTests('test023','class Map{getKeys(){}}\nclass X {\n  static x1(Map m) {\n    m.!1getKeys;\n  }\n  x2(Map m) {\n    m.!2getKeys;\n  }\n}',new core.DartList.literal<string>("1+getKeys","2+getKeys"));
        this.buildTests('test024','class List{factory List.from(Iterable other) {}}\nclass F {\n  f() {\n    new List.!1\n  }\n}',new core.DartList.literal<string>("1+from"));
        this.buildTests('test025','class R {\n  static R _m;\n  static R m;\n  f() {\n    var a = !1m;\n    var b = _!2m;\n    var c = !3g();\n  }\n  static g() {\n    var a = !4m;\n    var b = _!5m;\n    var c = !6g();\n  }\n}\nclass T {\n  f() {\n    R x;\n    x.!7g();\n    x.!8m;\n    x._!9m;\n  }\n  static g() {\n    var q = R._!Am;\n    var g = R.!Bm;\n    var h = R.!Cg();\n  }\n  h() {\n    var q = R._!Dm;\n    var g = R.!Em;\n    var h = R.!Fg();\n  }\n}',new core.DartList.literal<string>("1+m","2+_m","3+g","4+m","5+_m","6+g","7-g","8-m","9-_m","A+_m","B+m","C+g","D+_m","E+m","F+g"));
        this.buildTests('test026','var aBcD; var x=ab!1',new core.DartList.literal<string>("1+aBcD"));
        this.buildTests('test027','m(){try{}catch(eeee,ssss){s!1}',new core.DartList.literal<string>("1+ssss"));
        this.buildTests('test028','m(){var isX=3;if(is!1)',new core.DartList.literal<string>("1+isX"));
        this.buildTests('test029','m(){[1].forEach((x)=>!1x);}',new core.DartList.literal<string>("1+x"));
        this.buildTests('test030','n(){[1].forEach((x){!1});}',new core.DartList.literal<string>("1+x"));
        this.buildTests('test031','class Caster {} m() {try {} on Cas!1ter catch (CastBlock) {!2}}',new core.DartList.literal<string>("1+Caster","1-CastBlock","2+Caster","2+CastBlock"));
        this.buildTests('test032','const ONE = 1;\nconst ICHI = 10;\nconst UKSI = 100;\nconst EIN = 1000;\nm() {\n  int x;\n  switch (x) {\n    case !3ICHI:\n    case UKSI:\n    case EIN!2:\n    case ONE!1: return;\n    default: return;\n  }\n}',new core.DartList.literal<string>("1+ONE","1-UKSI","2+EIN","2-ICHI","3+ICHI","3+UKSI","3+EIN","3+ONE"));
        this.buildTests('test033','class A{}class B extends A{b(){}}class C implements A {c(){}}class X{x(){A f;f.!1}}',new core.DartList.literal<string>("1+b","1-c"),{
            failingTests : '1'});
        this.buildTests('test034','var topvar;\nclass Top {top(){}}\nclass Left extends Top {left(){}}\nclass Right extends Top {right(){}}\nt1() {\n  topvar = new Left();\n}\nt2() {\n  topvar = new Right();\n}\nclass A {\n  var field;\n  a() {\n    field = new Left();\n  }\n  b() {\n    field = new Right();\n  }\n  test() {\n    topvar.!1top();\n    field.!2top();\n  }\n}',new core.DartList.literal<string>("1+top","2+top"),{
            failingTests : '12'});
        this.buildTests('test035','class Y {final x=\'hi\';mth() {x.!1length;}}',new core.DartList.literal<string>("1+length"),{
            failingTests : '1'});
        this.buildTests('test036','class A1 {\n  var field;\n  A1() : field = 0;\n  q() {\n    A1 a = new A1();\n    a.field.!1\n  }\n}\nmain() {\n  A1 a = new A1();\n  a.field.!2\n}',new core.DartList.literal<string>("1+round","2+round"),{
            failingTests : '12'});
        this.buildTests('test037','class HttpServer{}\nclass HttpClient{}\nmain() {\n  new HtS!1\n}',new core.DartList.literal<string>("1+HttpServer","1-HttpClient"),{
            failingTests : '1'});
        this.buildTests('test038','class X {\n  x(){}\n}\nclass Y {\n  y(){}\n}\nclass A<Z extends X> {\n  Y ay;\n  Z az;\n  A(this.ay, this.az) {\n    ay.!1y;\n    az.!2x;\n  }\n}',new core.DartList.literal<string>("1+y","1-x","2+x","2-y"),{
            failingTests : '2'});
        this.buildTests('test039','class X{}var x = null as !1X;',new core.DartList.literal<string>("1-void"));
        this.buildTests('test040','m(){f(a, b, {x1, x2, y}) {};f(1, 2, !1)!2;}',new core.DartList.literal<string>("1+x1","2-x2"),{
            failingTests : '1'});
        this.buildTests('test041','m(){f(a, b, {x1, x2, y}) {};f(1, 2, !1',new core.DartList.literal<string>("1+x1","1+x2","1+y"),{
            failingTests : '1'});
        this.buildTests('test042','m(){f(a, b, {x1, x2, y}) {};f(1, 2, !1;!2',new core.DartList.literal<string>("1+x1","1+x2","2-y"),{
            failingTests : '1'});
    }
    buildOtherTests() : void {
        this.buildTests('test_classMembers_inGetter','class A { var fff; get z {ff!1}}',new core.DartList.literal<string>("1+fff"));
        this.buildTests('testSingle','class A {int x; !2mth() {int y = this.x;}}class B{}',new core.DartList.literal<string>("2+B"));
    }
    buildTests(baseName : string,originalSource : string,results : core.DartList<string>,_namedArguments? : {extraFiles? : core.DartMap<string,string>,failingTests? : string}) : void {
        let {extraFiles,failingTests} = Object.assign({
            "failingTests" : ''}, _namedArguments );
        let completionTests : core.DartList<lib4.LocationSpec> = lib4.LocationSpec.from(originalSource,results);
        completionTests.sort((first : lib4.LocationSpec,second : lib4.LocationSpec) =>  {
            return new core.DartString(first.id).compareTo(second.id);
        });
        if (completionTests.isEmpty) {
            test(baseName,() =>  {
                fail("Expected exclamation point ('!') within the source denoting the" + "position at which code completion should occur");
            });
        }
        let allSpecIds : core.DartSet<string> = completionTests.map((spec : lib4.LocationSpec) =>  {
            return spec.id;
        }).toSet();
        for(let id of new core.DartString(failingTests).split('')) {
            if (!allSpecIds.contains(id)) {
                test(`${baseName}-${id}`,() =>  {
                    fail(`Test case '${id}' included in failingTests, but this id does not exist.`);
                });
            }
        }
        for(let spec of completionTests) {
            let testName : string = `${baseName}-${spec.id}`;
            if (new core.DartString(failingTests).contains(spec.id)) {
                ++this.expectedFailCount;
                test(`${testName} (expected failure ${this.expectedFailCount})`,() =>  {
                    let test : lib4.CompletionTestCase = new lib4.CompletionTestCase();
                    return new async.Future<any>(() =>  {
                        return test.runTest(spec,extraFiles);
                    }).then((_ : any) =>  {
                        fail('Test passed - expected to fail.');
                    },{
                        onError : (_ : any) =>  {
                        }});
                });
            }else {
                ++this.expectedPassCount;
                test(testName,() =>  {
                    let test : lib4.CompletionTestCase = new lib4.CompletionTestCase();
                    return test.runTest(spec,extraFiles);
                });
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    CompletionTestBuilder() {
        this.expectedPassCount = 0;
        this.expectedFailCount = 0;
    }
}

export class properties {
}
