/** Library asset:datahedgehog_monitor/lib/lib/html/html_common/metadata.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SupportedBrowser {
    export type Constructors = 'SupportedBrowser';
    export type Interface = Omit<SupportedBrowser, Constructors>;
}
@DartClass
export class SupportedBrowser {
    private static __$CHROME : string;
    static get CHROME() : string { 
        if (this.__$CHROME===undefined) {
            this.__$CHROME = "Chrome";
        }
        return this.__$CHROME;
    }

    private static __$FIREFOX : string;
    static get FIREFOX() : string { 
        if (this.__$FIREFOX===undefined) {
            this.__$FIREFOX = "Firefox";
        }
        return this.__$FIREFOX;
    }

    private static __$IE : string;
    static get IE() : string { 
        if (this.__$IE===undefined) {
            this.__$IE = "Internet Explorer";
        }
        return this.__$IE;
    }

    private static __$OPERA : string;
    static get OPERA() : string { 
        if (this.__$OPERA===undefined) {
            this.__$OPERA = "Opera";
        }
        return this.__$OPERA;
    }

    private static __$SAFARI : string;
    static get SAFARI() : string { 
        if (this.__$SAFARI===undefined) {
            this.__$SAFARI = "Safari";
        }
        return this.__$SAFARI;
    }

    browserName : string;

    minimumVersion : string;

    constructor(browserName : string,minimumVersion? : string) {
    }
    @defaultConstructor
    SupportedBrowser(browserName : string,minimumVersion? : string) {
        this.browserName = browserName;
        this.minimumVersion = minimumVersion;
    }
}

export namespace Experimental {
    export type Constructors = 'Experimental';
    export type Interface = Omit<Experimental, Constructors>;
}
@DartClass
export class Experimental {
    constructor() {
    }
    @defaultConstructor
    Experimental() {
    }
}

export namespace DomName {
    export type Constructors = 'DomName';
    export type Interface = Omit<DomName, Constructors>;
}
@DartClass
export class DomName {
    name : string;

    constructor(name : string) {
    }
    @defaultConstructor
    DomName(name : string) {
        this.name = name;
    }
}

export namespace DocsEditable {
    export type Constructors = 'DocsEditable';
    export type Interface = Omit<DocsEditable, Constructors>;
}
@DartClass
export class DocsEditable {
    constructor() {
    }
    @defaultConstructor
    DocsEditable() {
    }
}

export namespace Unstable {
    export type Constructors = 'Unstable';
    export type Interface = Omit<Unstable, Constructors>;
}
@DartClass
export class Unstable {
    constructor() {
    }
    @defaultConstructor
    Unstable() {
    }
}

export class properties {
}
