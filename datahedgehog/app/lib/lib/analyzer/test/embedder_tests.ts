/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/embedder_tests.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resource_utils";

export namespace EmbedderRelatedTest {
    export type Constructors = 'EmbedderRelatedTest';
    export type Interface = Omit<EmbedderRelatedTest, Constructors>;
}
@DartClass
export class EmbedderRelatedTest {
    emptyPath : string;

    foxPath : string;

    foxLib : string;

    pathTranslator : lib3.TestPathTranslator;

    resourceProvider : any;

    buildResourceProvider() {
        let rawProvider : any = new bare.createInstance(any,null);
        this.resourceProvider = new lib3.TestResourceProvider(rawProvider);
        this.pathTranslator = ((_) : lib3.TestPathTranslator =>  {
            {
                _.newFolder('/home/.pub-cache/empty');
                _.newFolder('/home/.pub-cache/fox/lib');
                _.newFile('/home/.pub-cache/fox/lib/_embedder.yaml','embedded_libs:\n  "dart:core" : "core.dart"\n  "dart:fox": "slippy.dart"\n  "dart:bear": "grizzly.dart"\n  "dart:relative": "../relative.dart"\n  "dart:deep": "deep/directory/file.dart"\n  "fart:loudly": "nomatter.dart"\n');
                return _;
            }
        })(new lib3.TestPathTranslator(rawProvider));
    }
    clearResourceProvider() {
        this.resourceProvider = null;
        this.pathTranslator = null;
    }
    setUp() : void {
        this.buildResourceProvider();
    }
    tearDown() : void {
        this.clearResourceProvider();
    }
    constructor() {
    }
    @defaultConstructor
    EmbedderRelatedTest() {
        this.emptyPath = '/home/.pub-cache/empty';
        this.foxPath = '/home/.pub-cache/fox';
        this.foxLib = '/home/.pub-cache/fox/lib';
    }
}

export class properties {
}
