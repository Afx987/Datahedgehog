/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/testing/mock_sdk_program.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var createMockSdkProgram : () => any = () : any =>  {
    let coreLib = new bare.createInstance(any,null,lib3.Uri.parse('dart:core'),{
        name : 'dart.core'});
    let asyncLib = new bare.createInstance(any,null,lib3.Uri.parse('dart:async'),{
        name : 'dart.async'});
    let internalLib = new bare.createInstance(any,null,lib3.Uri.parse('dart:_internal'),{
        name : 'dart._internal'});
    var addClass : (lib : any,c : any) => any = (lib : any,c : any) : any =>  {
        lib.addClass(c);
        return c;
    };
    let objectClass = addClass(coreLib,new bare.createInstance(any,null,{
        name : 'Object'}));
    let objectType = objectClass.rawType;
    var typeParam : (name : string,bound? : any) => any = (name : string,bound? : any) : any =>  {
        return new bare.createInstance(any,null,name,(bound || objectType));
    };
    var class_ : (name : string,_namedArguments? : {supertype? : any,typeParameters? : core.DartList<any>,implementedTypes? : core.DartList<any>}) => any = (name : string,_namedArguments? : {supertype? : any,typeParameters? : core.DartList<any>,implementedTypes? : core.DartList<any>}) : any =>  {
        let {supertype,typeParameters,implementedTypes} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,{
            name : name,supertype : (supertype || objectClass.asThisSupertype),typeParameters : typeParameters,implementedTypes : implementedTypes});
    };
    addClass(coreLib,class_('Null'));
    addClass(coreLib,class_('bool'));
    let num = addClass(coreLib,class_('num'));
    addClass(coreLib,class_('String'));
    let iterable = addClass(coreLib,class_('Iterable',{
        typeParameters : new core.DartList.literal(typeParam('T'))}));
    {
        let T = typeParam('T');
        addClass(coreLib,class_('List',{
            typeParameters : new core.DartList.literal(T),implementedTypes : new core.DartList.literal(new bare.createInstance(any,null,iterable,new core.DartList.literal(new bare.createInstance(any,null,T))))}));
    }
    addClass(coreLib,class_('Map',{
        typeParameters : new core.DartList.literal(typeParam('K'),typeParam('V'))}));
    addClass(coreLib,class_('int',{
        supertype : num.asThisSupertype}));
    addClass(coreLib,class_('double',{
        supertype : num.asThisSupertype}));
    addClass(coreLib,class_('Iterator',{
        typeParameters : new core.DartList.literal(typeParam('T'))}));
    addClass(coreLib,class_('Symbol'));
    addClass(coreLib,class_('Type'));
    addClass(coreLib,class_('Function'));
    addClass(coreLib,class_('Invocation'));
    addClass(asyncLib,class_('Future',{
        typeParameters : new core.DartList.literal(typeParam('T'))}));
    addClass(asyncLib,class_('FutureOr',{
        typeParameters : new core.DartList.literal(typeParam('T'))}));
    addClass(asyncLib,class_('Stream',{
        typeParameters : new core.DartList.literal(typeParam('T'))}));
    addClass(internalLib,class_('Symbol'));
    return new bare.createInstance(any,null,{
        libraries : new core.DartList.literal(coreLib,asyncLib,internalLib)});
};
export class properties {
}
