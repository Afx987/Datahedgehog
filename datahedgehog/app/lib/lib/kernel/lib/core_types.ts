/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/core_types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./library_index";
import * as lib4 from "./ast";

export namespace CoreTypes {
    export type Constructors = 'CoreTypes';
    export type Interface = Omit<CoreTypes, Constructors>;
}
@DartClass
export class CoreTypes {
    private static __$requiredClasses : core.DartMap<string,core.DartList<string>>;
    static get requiredClasses() : core.DartMap<string,core.DartList<string>> { 
        if (this.__$requiredClasses===undefined) {
            this.__$requiredClasses = new core.DartMap.literal([
                ['dart:core',new core.DartList.literal('Object','Null','bool','int','num','double','String','List','Map','Iterable','Iterator','Symbol','Type','Function','Invocation')],
                ['dart:_internal',new core.DartList.literal('Symbol')],
                ['dart:async',new core.DartList.literal('Future','Stream')]]);
        }
        return this.__$requiredClasses;
    }
    static set requiredClasses(__$value : core.DartMap<string,core.DartList<string>>)  { 
        this.__$requiredClasses = __$value;
    }

    _index : lib3.LibraryIndex;

    _coreLibrary : lib4.Library;

    _objectClass : lib4.Class;

    _nullClass : lib4.Class;

    _boolClass : lib4.Class;

    _intClass : lib4.Class;

    _numClass : lib4.Class;

    _doubleClass : lib4.Class;

    _stringClass : lib4.Class;

    _listClass : lib4.Class;

    _mapClass : lib4.Class;

    _iterableClass : lib4.Class;

    _iteratorClass : lib4.Class;

    _symbolClass : lib4.Class;

    _typeClass : lib4.Class;

    _functionClass : lib4.Class;

    _invocationClass : lib4.Class;

    _externalNameDefaultConstructor : lib4.Constructor;

    _invocationMirrorClass : lib4.Class;

    _invocationMirrorDefaultConstructor : lib4.Constructor;

    _noSuchMethodErrorClass : lib4.Class;

    _listFromConstructor : lib4.Procedure;

    _printProcedure : lib4.Procedure;

    _identicalProcedure : lib4.Procedure;

    _internalSymbolClass : lib4.Class;

    _asyncLibrary : lib4.Library;

    _futureClass : lib4.Class;

    _streamClass : lib4.Class;

    _completerClass : lib4.Class;

    _futureOrClass : lib4.Class;

    _completerSyncConstructor : lib4.Procedure;

    _futureMicrotaskConstructor : lib4.Procedure;

    _syncIterableDefaultConstructor : lib4.Constructor;

    _streamIteratorDefaultConstructor : lib4.Constructor;

    _asyncStarStreamControllerDefaultConstructor : lib4.Constructor;

    _asyncThenWrapperHelperProcedure : lib4.Procedure;

    _asyncErrorWrapperHelperProcedure : lib4.Procedure;

    _awaitHelperProcedure : lib4.Procedure;

    _mirrorsLibrary : lib4.Library;

    constructor(program : lib4.Program) {
    }
    @defaultConstructor
    CoreTypes(program : lib4.Program) {
        this._index = new lib3.LibraryIndex.coreLibraries(program);
    }
    get asyncErrorWrapperHelperProcedure() : lib4.Procedure {
        return this._asyncErrorWrapperHelperProcedure = ( this._asyncErrorWrapperHelperProcedure ) || ( this._index.getTopLevelMember('dart:async','_asyncErrorWrapperHelper') );
    }
    get asyncLibrary() : lib4.Library {
        return this._asyncLibrary = ( this._asyncLibrary ) || ( this._index.getLibrary('dart:async') );
    }
    get asyncStarStreamControllerDefaultConstructor() : lib4.Constructor {
        return this._asyncStarStreamControllerDefaultConstructor = ( this._asyncStarStreamControllerDefaultConstructor ) || ( this._index.getMember('dart:async','_AsyncStarStreamController','') );
    }
    get asyncThenWrapperHelperProcedure() : lib4.Procedure {
        return this._asyncThenWrapperHelperProcedure = ( this._asyncThenWrapperHelperProcedure ) || ( this._index.getTopLevelMember('dart:async','_asyncThenWrapperHelper') );
    }
    get awaitHelperProcedure() : lib4.Procedure {
        return this._awaitHelperProcedure = ( this._awaitHelperProcedure ) || ( this._index.getTopLevelMember('dart:async','_awaitHelper') );
    }
    get boolClass() : lib4.Class {
        return this._boolClass = ( this._boolClass ) || ( this._index.getClass('dart:core','bool') );
    }
    get completerClass() : lib4.Class {
        return this._completerClass = ( this._completerClass ) || ( this._index.getClass('dart:async','Completer') );
    }
    get completerSyncConstructor() : lib4.Procedure {
        return this._completerSyncConstructor = ( this._completerSyncConstructor ) || ( this._index.getMember('dart:async','Completer','sync') );
    }
    get coreLibrary() : lib4.Library {
        return this._coreLibrary = ( this._coreLibrary ) || ( this._index.getLibrary('dart:core') );
    }
    get doubleClass() : lib4.Class {
        return this._doubleClass = ( this._doubleClass ) || ( this._index.getClass('dart:core','double') );
    }
    get externalNameDefaultConstructor() : lib4.Constructor {
        return this._externalNameDefaultConstructor = ( this._externalNameDefaultConstructor ) || ( this._index.getMember('dart:_internal','ExternalName','') );
    }
    get functionClass() : lib4.Class {
        return this._functionClass = ( this._functionClass ) || ( this._index.getClass('dart:core','Function') );
    }
    get futureClass() : lib4.Class {
        return this._futureClass = ( this._futureClass ) || ( this._index.getClass('dart:async','Future') );
    }
    get futureMicrotaskConstructor() : lib4.Procedure {
        return this._futureMicrotaskConstructor = ( this._futureMicrotaskConstructor ) || ( this._index.getMember('dart:async','Future','microtask') );
    }
    get futureOrClass() : lib4.Class {
        return this._futureOrClass = ( this._futureOrClass ) || ( this._index.getClass('dart:async','FutureOr') );
    }
    get identicalProcedure() : lib4.Procedure {
        return this._identicalProcedure = ( this._identicalProcedure ) || ( this._index.getTopLevelMember('dart:core','identical') );
    }
    get intClass() : lib4.Class {
        return this._intClass = ( this._intClass ) || ( this._index.getClass('dart:core','int') );
    }
    get internalSymbolClass() : lib4.Class {
        return this._internalSymbolClass = ( this._internalSymbolClass ) || ( this._index.getClass('dart:_internal','Symbol') );
    }
    get invocationClass() : lib4.Class {
        return this._invocationClass = ( this._invocationClass ) || ( this._index.getClass('dart:core','Invocation') );
    }
    get invocationMirrorClass() : lib4.Class {
        return this._invocationMirrorClass = ( this._invocationMirrorClass ) || ( this._index.getClass('dart:core','_InvocationMirror') );
    }
    get invocationMirrorDefaultConstructor() : lib4.Constructor {
        return this._invocationMirrorDefaultConstructor = ( this._invocationMirrorDefaultConstructor ) || ( this._index.getMember('dart:core','_InvocationMirror','') );
    }
    get iterableClass() : lib4.Class {
        return this._iterableClass = ( this._iterableClass ) || ( this._index.getClass('dart:core','Iterable') );
    }
    get iteratorClass() : lib4.Class {
        return this._iteratorClass = ( this._iteratorClass ) || ( this._index.getClass('dart:core','Iterator') );
    }
    get listClass() : lib4.Class {
        return this._listClass = ( this._listClass ) || ( this._index.getClass('dart:core','List') );
    }
    get listFromConstructor() : lib4.Procedure {
        return this._listFromConstructor = ( this._listFromConstructor ) || ( this._index.getMember('dart:core','List','from') );
    }
    get mapClass() : lib4.Class {
        return this._mapClass = ( this._mapClass ) || ( this._index.getClass('dart:core','Map') );
    }
    get mirrorsLibrary() : lib4.Library {
        return this._mirrorsLibrary = ( this._mirrorsLibrary ) || ( this._index.tryGetLibrary('dart:mirrors') );
    }
    get noSuchMethodErrorClass() : lib4.Class {
        return this._noSuchMethodErrorClass = ( this._noSuchMethodErrorClass ) || ( this._index.getClass('dart:core','NoSuchMethodError') );
    }
    get nullClass() : lib4.Class {
        return this._nullClass = ( this._nullClass ) || ( this._index.getClass('dart:core','Null') );
    }
    get numClass() : lib4.Class {
        return this._numClass = ( this._numClass ) || ( this._index.getClass('dart:core','num') );
    }
    get objectClass() : lib4.Class {
        return this._objectClass = ( this._objectClass ) || ( this._index.getClass('dart:core','Object') );
    }
    get printProcedure() : lib4.Procedure {
        return this._printProcedure = ( this._printProcedure ) || ( this._index.getTopLevelMember('dart:core','print') );
    }
    get streamClass() : lib4.Class {
        return this._streamClass = ( this._streamClass ) || ( this._index.getClass('dart:async','Stream') );
    }
    get streamIteratorDefaultConstructor() : lib4.Constructor {
        return this._streamIteratorDefaultConstructor = ( this._streamIteratorDefaultConstructor ) || ( this._index.getMember('dart:async','_StreamIterator','') );
    }
    get stringClass() : lib4.Class {
        return this._stringClass = ( this._stringClass ) || ( this._index.getClass('dart:core','String') );
    }
    get symbolClass() : lib4.Class {
        return this._symbolClass = ( this._symbolClass ) || ( this._index.getClass('dart:core','Symbol') );
    }
    get syncIterableDefaultConstructor() : lib4.Constructor {
        return this._syncIterableDefaultConstructor = ( this._syncIterableDefaultConstructor ) || ( this._index.getMember('dart:core','_SyncIterable','') );
    }
    get typeClass() : lib4.Class {
        return this._typeClass = ( this._typeClass ) || ( this._index.getClass('dart:core','Type') );
    }
}

export class properties {
}
