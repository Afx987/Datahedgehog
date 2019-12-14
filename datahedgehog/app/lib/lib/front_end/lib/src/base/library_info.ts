/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/library_info.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var parseCategory : (name : string) => Category = (name : string) : Category =>  {
    switch (name) {
        case 'Client':
            return Category.client;
        case 'Server':
            return Category.server;
        case 'Embedded':
            return Category.embedded;
    }
    return null;
};
export enum Category {
    client,
    server,
    embedded
}

export namespace LibraryInfo {
    export type Constructors = 'LibraryInfo';
    export type Interface = Omit<LibraryInfo, Constructors>;
}
@DartClass
export class LibraryInfo {
    path : string;

    _categories : string;

    dart2jsPath : string;

    dart2jsPatchPath : string;

    documented : boolean;

    platforms : number;

    implementation : boolean;

    maturity : Maturity;

    constructor(path : string,_namedArguments? : {categories? : string,dart2jsPath? : string,dart2jsPatchPath? : string,implementation? : boolean,documented? : boolean,maturity? : Maturity,platforms? : number}) {
    }
    @defaultConstructor
    LibraryInfo(path : string,_namedArguments? : {categories? : string,dart2jsPath? : string,dart2jsPatchPath? : string,implementation? : boolean,documented? : boolean,maturity? : Maturity,platforms? : number}) {
        let {categories,dart2jsPath,dart2jsPatchPath,implementation,documented,maturity,platforms} = Object.assign({
            "categories" : "",
            "implementation" : false,
            "documented" : true,
            "maturity" : Maturity.UNSPECIFIED,
            "platforms" : properties.DART2JS_PLATFORM | properties.VM_PLATFORM}, _namedArguments );
        this._categories = categories;
        this.path = path;
        this.dart2jsPath = dart2jsPath;
        this.dart2jsPatchPath = dart2jsPatchPath;
        this.implementation = implementation;
        this.documented = documented;
        this.maturity = maturity;
        this.platforms = platforms;
    }
    get categories() : core.DartList<Category> {
        if (new core.DartString(this._categories).isEmpty) return new core.DartList.literal<Category>();
        return new core.DartString(this._categories).split(',').map(parseCategory).toList();
    }
    get categoriesString() : string {
        return this._categories;
    }
    get isDart2jsLibrary() : boolean {
        return (this.platforms & properties.DART2JS_PLATFORM) != 0;
    }
    get isInternal() : boolean {
        return this.categories.isEmpty;
    }
    get isVmLibrary() : boolean {
        return (this.platforms & properties.VM_PLATFORM) != 0;
    }
}

export namespace Maturity {
    export type Constructors = 'Maturity';
    export type Interface = Omit<Maturity, Constructors>;
}
@DartClass
export class Maturity {
    private static __$DEPRECATED : Maturity;
    static get DEPRECATED() : Maturity { 
        if (this.__$DEPRECATED===undefined) {
            this.__$DEPRECATED = new Maturity(0,"Deprecated","This library will be remove before next major release.");
        }
        return this.__$DEPRECATED;
    }

    private static __$EXPERIMENTAL : Maturity;
    static get EXPERIMENTAL() : Maturity { 
        if (this.__$EXPERIMENTAL===undefined) {
            this.__$EXPERIMENTAL = new Maturity(1,"Experimental","This library is experimental and will likely change or be removed\n" + "in future versions.");
        }
        return this.__$EXPERIMENTAL;
    }

    private static __$UNSTABLE : Maturity;
    static get UNSTABLE() : Maturity { 
        if (this.__$UNSTABLE===undefined) {
            this.__$UNSTABLE = new Maturity(2,"Unstable","This library is in still changing and have not yet endured\n" + "sufficient real-world testing.\n" + "Backwards-compatibility is NOT guaranteed.");
        }
        return this.__$UNSTABLE;
    }

    private static __$WEB_STABLE : Maturity;
    static get WEB_STABLE() : Maturity { 
        if (this.__$WEB_STABLE===undefined) {
            this.__$WEB_STABLE = new Maturity(3,"Web Stable","This library is tracking the DOM evolution as defined by WC3.\n" + "Backwards-compatibility is NOT guaranteed.");
        }
        return this.__$WEB_STABLE;
    }

    private static __$STABLE : Maturity;
    static get STABLE() : Maturity { 
        if (this.__$STABLE===undefined) {
            this.__$STABLE = new Maturity(4,"Stable","The library is stable. API backwards-compatibility is guaranteed.\n" + "However implementation details might change.");
        }
        return this.__$STABLE;
    }

    private static __$LOCKED : Maturity;
    static get LOCKED() : Maturity { 
        if (this.__$LOCKED===undefined) {
            this.__$LOCKED = new Maturity(5,"Locked","This library will not change except when serious bugs are encountered.");
        }
        return this.__$LOCKED;
    }

    private static __$UNSPECIFIED : Maturity;
    static get UNSPECIFIED() : Maturity { 
        if (this.__$UNSPECIFIED===undefined) {
            this.__$UNSPECIFIED = new Maturity(-1,"Unspecified","The maturity for this library has not been specified.");
        }
        return this.__$UNSPECIFIED;
    }

    level : number;

    name : string;

    description : string;

    constructor(level : number,name : string,description : string) {
    }
    @defaultConstructor
    Maturity(level : number,name : string,description : string) {
        this.level = level;
        this.name = name;
        this.description = description;
    }
    toString() : string {
        return `${this.name}: ${this.level}\n${this.description}\n`;
    }
}

export class properties {
    private static __$DART2JS_PLATFORM : number;
    static get DART2JS_PLATFORM() : number { 
        if (this.__$DART2JS_PLATFORM===undefined) {
            this.__$DART2JS_PLATFORM = 1;
        }
        return this.__$DART2JS_PLATFORM;
    }
    static set DART2JS_PLATFORM(__$value : number)  { 
        this.__$DART2JS_PLATFORM = __$value;
    }

    private static __$VM_PLATFORM : number;
    static get VM_PLATFORM() : number { 
        if (this.__$VM_PLATFORM===undefined) {
            this.__$VM_PLATFORM = 2;
        }
        return this.__$VM_PLATFORM;
    }
    static set VM_PLATFORM(__$value : number)  { 
        this.__$VM_PLATFORM = __$value;
    }

}
