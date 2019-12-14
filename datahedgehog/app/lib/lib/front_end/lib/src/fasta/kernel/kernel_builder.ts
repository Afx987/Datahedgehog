/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/library_builder";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../errors";

export var computeDefaultTypeArguments : (library : lib3.LibraryBuilder<any,any>,typeParameters : core.DartList<any>,arguments : core.DartList<any>) => core.DartList<any> = (library : lib3.LibraryBuilder<any,any>,typeParameters : core.DartList<any>,arguments : core.DartList<any>) : core.DartList<any> =>  {
    if (arguments == null) {
        return new core.DartList.filled(typeParameters.length,new bare.createInstance(any,null));
    }
    if (arguments.length < typeParameters.length) {
        arguments = new core.DartList.from(arguments);
        for(let i : number = arguments.length; i < typeParameters.length; i++){
            arguments.add(new bare.createInstance(any,null));
        }
    }else if (arguments.length > typeParameters.length) {
        return arguments.sublist(0,typeParameters.length);
    }
    return arguments;
};
export var memberError : (member : any,error : core.DartObject,charOffset? : number) => any = (member : any,error : core.DartObject,charOffset? : number) : any =>  {
    let name : string = ((t)=>(!!t)?t.name:null)(member.name);
    if (name == "") {
        name = Printer.emptyNameString;
    }else if (name == null) {
        name = "<anon>";
    }
    let library : any = member.enclosingLibrary;
    let cls : any = member.enclosingClass;
    let fileUri : string;
    if (is(member, any)) {
        fileUri = member.fileUri;
    }else if (is(member, any)) {
        fileUri = member.fileUri;
    }
    fileUri = ( fileUri ) || ( (((t)=>(!!t)?t.fileUri:null)(cls) || library.fileUri) );
    let uri : lib4.Uri = fileUri == null ? library.importUri : lib4.Uri.base.resolve(fileUri);
    charOffset = ( charOffset ) || ( -1 );
    if (charOffset == -1) {
        charOffset = (member.fileOffset || -1);
    }
    if (charOffset == -1) {
        charOffset = (((t)=>(!!t)?t.fileOffset:null)(cls) || -1);
    }
    name = (op(Op.EQUALS,cls,null) ? "" : `${cls.name}::`) + name;
    return lib5.inputError(uri,charOffset,`Error in ${name}: ${error}`);
};
export var compareProcedures : (a : any,b : any) => number = (a : any,b : any) : number =>  {
    let i : number = a.fileUri.compareTo(b.fileUri);
    if (i != 0) return i;
    return a.fileOffset.compareTo(b.fileOffset);
};
export var isRedirectingGenerativeConstructorImplementation : (constructor : any) => boolean = (constructor : any) : boolean =>  {
    let initializers : core.DartList<any> = constructor.initializers;
    return initializers.length == 1 && is(initializers.single, any);
};
export class properties {
}
