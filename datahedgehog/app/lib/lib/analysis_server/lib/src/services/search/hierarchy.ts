/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/search/hierarchy.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var getChildren : (parent : any,name? : string) => core.DartList<any> = (parent : any,name? : string) : core.DartList<any> =>  {
    let children : core.DartList<any> = new core.DartList.literal<any>();
    visitChildren(parent,(element : any) =>  {
        if (name == null || op(Op.EQUALS,element.displayName,name)) {
            children.add(element);
        }
    });
    return children;
};
export var getClassMembers : (clazz : any,name? : string) => core.DartList<any> = (clazz : any,name? : string) : core.DartList<any> =>  {
    let members : core.DartList<any> = new core.DartList.literal<any>();
    visitChildren(clazz,(element : any) =>  {
        if (element.isSynthetic) {
            return false;
        }
        if (is(element, any)) {
            return false;
        }
        if (name != null && element.displayName != name) {
            return false;
        }
        if (is(element, any)) {
            members.add(element);
        }
        if (is(element, any)) {
            members.add(element);
        }
        return false;
    });
    return members;
};
export var getDirectSubClasses : (searchEngine : any,seed : any) => async.Future<core.DartSet<any>> = (searchEngine : any,seed : any) => new async.Future.fromPromise(( async () : Promise<core.DartSet<any>> =>  {
    let matches : core.DartList<any> = await searchEngine.searchSubtypes(seed);
    return matches.map((match : any) =>  {
        return match.element;
    }).toSet();
})());
export var getHierarchyMembers : (searchEngine : any,member : any) => async.Future<core.DartSet<any>> = (searchEngine : any,member : any) => new async.Future.fromPromise(( async () : Promise<core.DartSet<any>> =>  {
    let result : core.DartSet<any> = new core.DartHashSet<any>();
    if (member.isStatic || is(member, any)) {
        result.add(member);
        return new async.Future.value(result);
    }
    let name : string = member.displayName;
    let memberClass : any = member.enclosingElement;
    let searchClasses : core.DartSet<any> = getSuperClasses(memberClass);
    searchClasses.add(memberClass);
    for(let superClass of searchClasses) {
        if (getClassMembers(superClass,name).isEmpty) {
            continue;
        }
        let subClasses : core.DartSet<any> = await searchEngine.searchAllSubtypes(superClass);
        subClasses.add(superClass);
        for(let subClass of subClasses) {
            let subClassMembers : core.DartList<any> = getChildren(subClass,name);
            for(let member of subClassMembers) {
                if (is(member, any)) {
                    result.add(member);
                }
            }
        }
    }
    return result;
})());
export var getMembers : (clazz : any) => core.DartList<any> = (clazz : any) : core.DartList<any> =>  {
    let members : core.DartList<any> = new core.DartList.literal<any>();
    members.addAll(getClassMembers(clazz));
    let superClasses : core.DartSet<any> = getSuperClasses(clazz);
    for(let superClass of superClasses) {
        members.addAll(getClassMembers(superClass));
    }
    return members;
};
export var getSuperClasses : (seed : any) => core.DartSet<any> = (seed : any) : core.DartSet<any> =>  {
    let result : core.DartSet<any> = new core.DartHashSet<any>();
    let queue : core.DartList<any> = new core.DartList<any>();
    queue.add(seed);
    while (!queue.isEmpty){
        let current : any = queue.removeLast();
        if (!result.add(current)) {
            continue;
        }
        {
            let superType : any = current.supertype;
            if (superType != null) {
                queue.add(superType.element);
            }
        }
        for(let interface of current.interfaces) {
            queue.add(interface.element);
        }
    }
    result.remove(seed);
    return result;
};
export var getSyntheticAccessorVariable : (element : any) => any = (element : any) : any =>  {
    if (is(element, any)) {
        if (element.isSynthetic) {
            return element.variable;
        }
    }
    return element;
};
export class properties {
}
