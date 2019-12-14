/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/lub_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    var makeTestLibrary : (program : any) => any = (program : any) : any =>  {
        let library = ((_) : any =>  {
            {
                _.parent = program;
                return _;
            }
        })(new bare.createInstance(any,null,lib3.Uri.parse('org-dartlang:///test.dart')));
        program.libraries.add(library);
        return library;
    };
    test('depth',() =>  {
        let program = createMockSdkProgram();
        let coreTypes = new bare.createInstance(any,null,program);
        let defaultSuper = coreTypes.objectClass.asThisSupertype;
        let library = makeTestLibrary(program);
        var addClass : (c : any) => any = (c : any) : any =>  {
            library.addClass(c);
            return c;
        };
        let base = addClass(new bare.createInstance(any,null,{
            name : 'base',supertype : defaultSuper}));
        let extends_ = addClass(new bare.createInstance(any,null,{
            name : 'extends_',supertype : base.asThisSupertype}));
        let with_ = addClass(new bare.createInstance(any,null,{
            name : 'with_',supertype : defaultSuper,mixedInType : base.asThisSupertype}));
        let implements_ = addClass(new bare.createInstance(any,null,{
            name : 'implements_',supertype : defaultSuper,implementedTypes : new core.DartList.literal(base.asThisSupertype)}));
        let hierarchy = new bare.createInstance(any,null,program);
        expect(hierarchy.getClassDepth(coreTypes.objectClass),0);
        expect(hierarchy.getClassDepth(base),1);
        expect(hierarchy.getClassDepth(extends_),2);
        expect(hierarchy.getClassDepth(with_),2);
        expect(hierarchy.getClassDepth(implements_),2);
    });
    test('ranked_superclasses',() =>  {
        let program = createMockSdkProgram();
        let coreTypes = new bare.createInstance(any,null,program);
        let defaultSuper = coreTypes.objectClass.asThisSupertype;
        let library = makeTestLibrary(program);
        var addClass : (name : string,implements_ : core.DartList<any>) => any = (name : string,implements_ : core.DartList<any>) : any =>  {
            let c = new bare.createInstance(any,null,{
                name : name,supertype : defaultSuper,implementedTypes : implements_.map((c : any) =>  {
                    return c.asThisSupertype;
                }).toList()});
            library.addClass(c);
            return c;
        };
        let a = addClass('A',new core.DartList.literal());
        let b = addClass('B',new core.DartList.literal(a));
        let c = addClass('C',new core.DartList.literal(a));
        let d = addClass('D',new core.DartList.literal(c));
        let e = addClass('E',new core.DartList.literal(b,d));
        let hierarchy = new bare.createInstance(any,null,program);
        expect(hierarchy.getRankedSuperclasses(a),new core.DartList.literal(a,coreTypes.objectClass));
        expect(hierarchy.getRankedSuperclasses(b),new core.DartList.literal(b,a,coreTypes.objectClass));
        expect(hierarchy.getRankedSuperclasses(c),new core.DartList.literal(c,a,coreTypes.objectClass));
        expect(hierarchy.getRankedSuperclasses(d),new core.DartList.literal(d,c,a,coreTypes.objectClass));
        if (op(Op.LT,hierarchy.getClassIndex(b),hierarchy.getClassIndex(c))) {
            expect(hierarchy.getRankedSuperclasses(e),new core.DartList.literal(e,d,b,c,a,coreTypes.objectClass));
        }else {
            expect(hierarchy.getRankedSuperclasses(e),new core.DartList.literal(e,d,c,b,a,coreTypes.objectClass));
        }
    });
    test('least_upper_bound_non_generic',() =>  {
        let program = createMockSdkProgram();
        let coreTypes = new bare.createInstance(any,null,program);
        let defaultSuper = coreTypes.objectClass.asThisSupertype;
        let library = makeTestLibrary(program);
        var addClass : (name : string,implements_ : core.DartList<any>) => any = (name : string,implements_ : core.DartList<any>) : any =>  {
            let c = new bare.createInstance(any,null,{
                name : name,supertype : defaultSuper,implementedTypes : implements_.map((c : any) =>  {
                    return c.asThisSupertype;
                }).toList()});
            library.addClass(c);
            return c;
        };
        let a = addClass('A',new core.DartList.literal());
        let b = addClass('B',new core.DartList.literal());
        let c = addClass('C',new core.DartList.literal(a));
        let d = addClass('D',new core.DartList.literal(a));
        let e = addClass('E',new core.DartList.literal(a));
        let f = addClass('F',new core.DartList.literal(c,d));
        let g = addClass('G',new core.DartList.literal(c,d));
        let h = addClass('H',new core.DartList.literal(c,d,e));
        let i = addClass('I',new core.DartList.literal(c,d,e));
        let hierarchy = new bare.createInstance(any,null,program);
        expect(hierarchy.getClassicLeastUpperBound(a.rawType,b.rawType),coreTypes.objectClass.rawType);
        expect(hierarchy.getClassicLeastUpperBound(a.rawType,coreTypes.objectClass.rawType),coreTypes.objectClass.rawType);
        expect(hierarchy.getClassicLeastUpperBound(coreTypes.objectClass.rawType,b.rawType),coreTypes.objectClass.rawType);
        expect(hierarchy.getClassicLeastUpperBound(c.rawType,d.rawType),a.rawType);
        expect(hierarchy.getClassicLeastUpperBound(c.rawType,a.rawType),a.rawType);
        expect(hierarchy.getClassicLeastUpperBound(a.rawType,d.rawType),a.rawType);
        expect(hierarchy.getClassicLeastUpperBound(f.rawType,g.rawType),a.rawType);
        expect(hierarchy.getClassicLeastUpperBound(h.rawType,i.rawType),a.rawType);
    });
    test('least_upper_bound_non_generic',() =>  {
        let program = createMockSdkProgram();
        let coreTypes = new bare.createInstance(any,null,program);
        let defaultSuper = coreTypes.objectClass.asThisSupertype;
        let library = makeTestLibrary(program);
        let int = coreTypes.intClass.rawType;
        let double = coreTypes.doubleClass.rawType;
        let bool = coreTypes.boolClass.rawType;
        var addClass : (name : string,typeParameterNames : core.DartList<string>,implements_ : (typeParameterTypes : core.DartList<any>) => core.DartList<any>) => any = (name : string,typeParameterNames : core.DartList<string>,implements_ : (typeParameterTypes : core.DartList<any>) => core.DartList<any>) : any =>  {
            let typeParameters = typeParameterNames.map((name : any) =>  {
                return new bare.createInstance(any,null,name,coreTypes.objectClass.rawType);
            }).toList();
            let typeParameterTypes = typeParameters.map((parameter : any) =>  {
                return new bare.createInstance(any,null,parameter);
            }).toList();
            let c = new bare.createInstance(any,null,{
                name : name,typeParameters : typeParameters,supertype : defaultSuper,implementedTypes : implements_(typeParameterTypes)});
            library.addClass(c);
            return c;
        };
        let a = addClass('A',new core.DartList.literal(),(_ : any) =>  {
            return new core.DartList.literal();
        });
        let b = addClass('B',new core.DartList.literal('T'),(_ : any) =>  {
            return new core.DartList.literal(a.asThisSupertype);
        });
        let c = addClass('C',new core.DartList.literal('U'),(_ : any) =>  {
            return new core.DartList.literal(a.asThisSupertype);
        });
        let d = addClass('D',new core.DartList.literal('T','U'),(typeParameterTypes : any) =>  {
            let t = typeParameterTypes[0];
            let u = typeParameterTypes[1];
            return new core.DartList.literal(new bare.createInstance(any,null,b,new core.DartList.literal(t)),new bare.createInstance(any,null,c,new core.DartList.literal(u)));
        });
        let e = addClass('E',new core.DartList.literal(),(_ : any) =>  {
            return new core.DartList.literal(new bare.createInstance(any,null,d,new core.DartList.literal(int,double)));
        });
        let f = addClass('F',new core.DartList.literal(),(_ : any) =>  {
            return new core.DartList.literal(new bare.createInstance(any,null,d,new core.DartList.literal(int,bool)));
        });
        let hierarchy = new bare.createInstance(any,null,program);
        expect(hierarchy.getClassicLeastUpperBound(new bare.createInstance(any,null,d,new core.DartList.literal(int,double)),new bare.createInstance(any,null,d,new core.DartList.literal(int,double))),new bare.createInstance(any,null,d,new core.DartList.literal(int,double)));
        expect(hierarchy.getClassicLeastUpperBound(new bare.createInstance(any,null,d,new core.DartList.literal(int,double)),new bare.createInstance(any,null,d,new core.DartList.literal(int,bool))),new bare.createInstance(any,null,b,new core.DartList.literal(int)));
        expect(hierarchy.getClassicLeastUpperBound(new bare.createInstance(any,null,d,new core.DartList.literal(int,double)),new bare.createInstance(any,null,d,new core.DartList.literal(bool,double))),new bare.createInstance(any,null,c,new core.DartList.literal(double)));
        expect(hierarchy.getClassicLeastUpperBound(new bare.createInstance(any,null,d,new core.DartList.literal(int,double)),new bare.createInstance(any,null,d,new core.DartList.literal(bool,int))),a.rawType);
        expect(hierarchy.getClassicLeastUpperBound(e.rawType,f.rawType),new bare.createInstance(any,null,b,new core.DartList.literal(int)));
    });
};
export class properties {
}
