/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/closure/mock.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../core_types";
import * as lib4 from "./../../ast";
import * as lib5 from "./../../frontend/accessors";
import * as lib6 from "@dart2ts/dart/uri";

export var mockUpContext : (coreTypes : lib3.CoreTypes,program : lib4.Program) => lib4.Class = (coreTypes : lib3.CoreTypes,program : lib4.Program) : lib4.Class =>  {
    let fileUri : string = "dart:mock";
    let listField : lib4.Field = new lib4.Field(new lib4.Name("list"),{
        type : coreTypes.listClass.rawType,isFinal : true,fileUri : fileUri});
    let listFieldAccessor : lib5.Accessor = new lib5.ThisPropertyAccessor(listField.name,listField,null,lib4.TreeNode.noOffset);
    let parentField : lib4.Field = new lib4.Field(new lib4.Name("parent"),{
        fileUri : fileUri});
    let parentFieldAccessor : lib5.Accessor = new lib5.ThisPropertyAccessor(parentField.name,parentField,parentField,lib4.TreeNode.noOffset);
    let fields : core.DartList<lib4.Field> = new core.DartList.literal<lib4.Field>(listField,parentField);
    let iParameter : lib4.VariableDeclaration = new lib4.VariableDeclaration("i",{
        type : coreTypes.intClass.rawType,isFinal : true});
    let listConstructor : lib4.Procedure = coreTypes.listClass.procedures.firstWhere((p : lib4.Procedure) =>  {
        return p.name.name == 'filled';
    });
    let constructor : lib4.Constructor = new lib4.Constructor(new lib4.FunctionNode(new lib4.EmptyStatement(),{
        positionalParameters : new core.DartList.literal<lib4.VariableDeclaration>(iParameter)}),{
        name : new lib4.Name(""),initializers : new core.DartList.literal<lib4.Initializer>(new lib4.FieldInitializer(listField,new lib4.StaticInvocation(listConstructor,new lib4.Arguments(new core.DartList.literal<lib4.Expression>(new lib5.VariableAccessor(iParameter,null,lib4.TreeNode.noOffset).buildSimpleRead(),new lib4.NullLiteral()),{
            types : new core.DartList.literal<lib4.DartType>(new lib4.DynamicType())}))))});
    iParameter = new lib4.VariableDeclaration("i",{
        type : coreTypes.intClass.rawType,isFinal : true});
    let accessor : lib5.Accessor = lib5.IndexAccessor.make(listFieldAccessor.buildSimpleRead(),new lib5.VariableAccessor(iParameter,null,lib4.TreeNode.noOffset).buildSimpleRead(),null,null);
    let indexGet : lib4.Procedure = new lib4.Procedure(new lib4.Name("[]"),lib4.ProcedureKind.Operator,new lib4.FunctionNode(new lib4.ReturnStatement(accessor.buildSimpleRead()),{
        positionalParameters : new core.DartList.literal<lib4.VariableDeclaration>(iParameter)}),{
        fileUri : fileUri});
    iParameter = new lib4.VariableDeclaration("i",{
        type : coreTypes.intClass.rawType,isFinal : true});
    let valueParameter : lib4.VariableDeclaration = new lib4.VariableDeclaration("value",{
        isFinal : true});
    accessor = lib5.IndexAccessor.make(listFieldAccessor.buildSimpleRead(),new lib5.VariableAccessor(iParameter,null,lib4.TreeNode.noOffset).buildSimpleRead(),null,null);
    let expression : lib4.Expression = accessor.buildAssignment(new lib5.VariableAccessor(valueParameter,null,lib4.TreeNode.noOffset).buildSimpleRead(),{
        voidContext : true});
    let indexSet : lib4.Procedure = new lib4.Procedure(new lib4.Name("[]="),lib4.ProcedureKind.Operator,new lib4.FunctionNode(new lib4.ExpressionStatement(expression),{
        positionalParameters : new core.DartList.literal<lib4.VariableDeclaration>(iParameter,valueParameter)}),{
        fileUri : fileUri});
    let c : lib4.VariableDeclaration = new lib4.VariableDeclaration("c",{
        initializer : new lib4.ConstructorInvocation(constructor,new lib4.Arguments(new core.DartList.literal<lib4.Expression>(new lib4.PropertyGet(listFieldAccessor.buildSimpleRead(),new lib4.Name("length")))))});
    let accessCParent : lib5.Accessor = lib5.PropertyAccessor.make(new lib4.VariableGet(c),parentField.name,parentField,parentField);
    let accessCList : lib5.Accessor = lib5.PropertyAccessor.make(new lib4.VariableGet(c),listField.name,listField,null);
    let statements : core.DartList<lib4.Statement> = new core.DartList.literal<lib4.Statement>(c,new lib4.ExpressionStatement(accessCParent.buildAssignment(parentFieldAccessor.buildSimpleRead(),{
        voidContext : true})),new lib4.ExpressionStatement(new lib4.MethodInvocation(accessCList.buildSimpleRead(),new lib4.Name("setRange"),new lib4.Arguments(new core.DartList.literal<lib4.Expression>(new lib4.IntLiteral(0),new lib4.PropertyGet(listFieldAccessor.buildSimpleRead(),new lib4.Name("length")),listFieldAccessor.buildSimpleRead())))),new lib4.ReturnStatement(new lib4.VariableGet(c)));
    let copy : lib4.Procedure = new lib4.Procedure(new lib4.Name("copy"),lib4.ProcedureKind.Method,new lib4.FunctionNode(new lib4.Block(statements)),{
        fileUri : fileUri});
    let procedures : core.DartList<lib4.Procedure> = new core.DartList.literal<lib4.Procedure>(indexGet,indexSet,copy);
    let contextClass : lib4.Class = new lib4.Class({
        name : "Context",supertype : new lib4.Supertype(coreTypes.objectClass,new core.DartList.literal<lib4.DartType>()),constructors : new core.DartList.literal(constructor),fields : fields,procedures : procedures,fileUri : fileUri});
    let mock : lib4.Library = ((_) : lib4.Library =>  {
        {
            _.fileUri = fileUri;
            return _;
        }
    })(new lib4.Library(lib6.Uri.parse(fileUri),{
        name : "mock",classes : new core.DartList.literal(contextClass)}));
    program.libraries.add(mock);
    mock.parent = program;
    program.uriToSource.set(mock.fileUri,new lib4.Source(new core.DartList.literal<number>(0),new core.DartList.literal<number>()));
    return contextClass;
};
export class properties {
}
