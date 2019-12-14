/** Library asset:datahedgehog_monitor/lib/lib/gestures/arena.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export enum GestureDisposition {
    accepted,
    rejected
}

export namespace GestureArenaMember {
    export type Constructors = 'GestureArenaMember';
    export type Interface = Omit<GestureArenaMember, Constructors>;
}
@DartClass
export class GestureArenaMember {
    @Abstract
    acceptGesture(pointer : number) : any{ throw 'abstract'}
    @Abstract
    rejectGesture(pointer : number) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    GestureArenaMember() {
    }
}

export namespace GestureArenaEntry {
    export type Constructors = '_';
    export type Interface = Omit<GestureArenaEntry, Constructors>;
}
@DartClass
export class GestureArenaEntry {
    @namedConstructor
    _(_arena : GestureArenaManager,_pointer : number,_member : GestureArenaMember) {
        this._arena = _arena;
        this._pointer = _pointer;
        this._member = _member;
    }
    static _ : new(_arena : GestureArenaManager,_pointer : number,_member : GestureArenaMember) => GestureArenaEntry;

    _arena : GestureArenaManager;

    _pointer : number;

    _member : GestureArenaMember;

    resolve(disposition : GestureDisposition) : any {
        this._arena._resolve(this._pointer,this._member,disposition);
    }
}

export namespace _GestureArena {
    export type Constructors = '_GestureArena';
    export type Interface = Omit<_GestureArena, Constructors>;
}
@DartClass
export class _GestureArena {
    members : core.DartList<GestureArenaMember>;

    isOpen : boolean;

    isHeld : boolean;

    hasPendingSweep : boolean;

    eagerWinner : GestureArenaMember;

    add(member : GestureArenaMember) : any {
        /* TODO (AssertStatementImpl) : assert (isOpen); */;
        this.members.add(member);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = core.DartStringBuffer();
        if (this.members.isEmpty) {
            buffer.write('<empty>');
        }else {
            buffer.write(this.members.map((member : GestureArenaMember) =>  {
                if (op(Op.EQUALS,member,this.eagerWinner)) return `${member} (eager winner)`;
                return `${member}`;
            }).join(', '));
        }
        if (this.isOpen) buffer.write(' [open]');
        if (this.isHeld) buffer.write(' [held]');
        if (this.hasPendingSweep) buffer.write(' [hasPendingSweep]');
        return buffer.toString();
    }
    constructor() {
    }
    @defaultConstructor
    _GestureArena() {
        this.members = new core.DartList.literal<GestureArenaMember>();
        this.isOpen = true;
        this.isHeld = false;
        this.hasPendingSweep = false;
    }
}

export namespace GestureArenaManager {
    export type Constructors = 'GestureArenaManager';
    export type Interface = Omit<GestureArenaManager, Constructors>;
}
@DartClass
export class GestureArenaManager {
    _arenas : core.DartMap<number,_GestureArena>;

    add(pointer : number,member : GestureArenaMember) : GestureArenaEntry {
        let state : _GestureArena = this._arenas.putIfAbsent(pointer,() =>  {
            /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, '★ Opening new gesture arena.')); */;
            return _GestureArena();
        });
        state.add(member);
        /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Adding: $member')); */;
        return GestureArenaEntry._(this,pointer,member);
    }
    close(pointer : number) : any {
        let state : _GestureArena = this._arenas.get(pointer);
        if (op(Op.EQUALS,state,null)) return;
        state.isOpen = false;
        /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Closing', state)); */;
        this._tryToResolveArena(pointer,state);
    }
    sweep(pointer : number) : any {
        let state : _GestureArena = this._arenas.get(pointer);
        if (op(Op.EQUALS,state,null)) return;
        /* TODO (AssertStatementImpl) : assert (!state.isOpen); */;
        if (state.isHeld) {
            state.hasPendingSweep = true;
            /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Delaying sweep', state)); */;
            return;
        }
        /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Sweeping', state)); */;
        this._arenas.remove(pointer);
        if (state.members.isNotEmpty) {
            /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Winner: ${state.members.first}')); */;
            state.members.first.acceptGesture(pointer);
            for(let i : number = 1; i < state.members.length; i++)state.members[i].rejectGesture(pointer);
        }
    }
    hold(pointer : number) : any {
        let state : _GestureArena = this._arenas.get(pointer);
        if (op(Op.EQUALS,state,null)) return;
        state.isHeld = true;
        /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Holding', state)); */;
    }
    release(pointer : number) : any {
        let state : _GestureArena = this._arenas.get(pointer);
        if (op(Op.EQUALS,state,null)) return;
        state.isHeld = false;
        /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Releasing', state)); */;
        if (state.hasPendingSweep) this.sweep(pointer);
    }
    _resolve(pointer : number,member : GestureArenaMember,disposition : GestureDisposition) : any {
        let state : _GestureArena = this._arenas.get(pointer);
        if (op(Op.EQUALS,state,null)) return;
        /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, '${disposition == GestureDisposition.accepted ? "Accepting" : "Rejecting"}: $member')); */;
        /* TODO (AssertStatementImpl) : assert (state.members.contains(member)); */;
        if (op(Op.EQUALS,disposition,GestureDisposition.rejected)) {
            state.members.remove(member);
            member.rejectGesture(pointer);
            if (!state.isOpen) this._tryToResolveArena(pointer,state);
        }else {
            /* TODO (AssertStatementImpl) : assert (disposition == GestureDisposition.accepted); */;
            if (state.isOpen) {
                state.eagerWinner = ( state.eagerWinner ) || ( member );
            }else {
                /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Self-declared winner: $member')); */;
                this._resolveInFavorOf(pointer,state,member);
            }
        }
    }
    _tryToResolveArena(pointer : number,state : _GestureArena) : any {
        /* TODO (AssertStatementImpl) : assert (_arenas[pointer] == state); */;
        /* TODO (AssertStatementImpl) : assert (!state.isOpen); */;
        if (state.members.length == 1) {
            async.scheduleMicrotask(() =>  {
                return this._resolveByDefault(pointer,state);
            });
        }else if (state.members.isEmpty) {
            this._arenas.remove(pointer);
            /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Arena empty.')); */;
        }else if (state.eagerWinner != null) {
            /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Eager winner: ${state.eagerWinner}')); */;
            this._resolveInFavorOf(pointer,state,state.eagerWinner);
        }
    }
    _resolveByDefault(pointer : number,state : _GestureArena) : any {
        if (!this._arenas.containsKey(pointer)) return;
        /* TODO (AssertStatementImpl) : assert (_arenas[pointer] == state); */;
        /* TODO (AssertStatementImpl) : assert (!state.isOpen); */;
        let members : core.DartList<GestureArenaMember> = state.members;
        /* TODO (AssertStatementImpl) : assert (members.length == 1); */;
        this._arenas.remove(pointer);
        /* TODO (AssertStatementImpl) : assert (_debugLogDiagnostic(pointer, 'Default winner: ${state.members.first}')); */;
        state.members.first.acceptGesture(pointer);
    }
    _resolveInFavorOf(pointer : number,state : _GestureArena,member : GestureArenaMember) : any {
        /* TODO (AssertStatementImpl) : assert (state == _arenas[pointer]); */;
        /* TODO (AssertStatementImpl) : assert (state != null); */;
        /* TODO (AssertStatementImpl) : assert (state.eagerWinner == null || state.eagerWinner == member); */;
        /* TODO (AssertStatementImpl) : assert (!state.isOpen); */;
        this._arenas.remove(pointer);
        for(let rejectedMember of state.members) {
            if (rejectedMember != member) rejectedMember.rejectGesture(pointer);
        }
        member.acceptGesture(pointer);
    }
    _debugLogDiagnostic(pointer : number,message : string,state? : _GestureArena) : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintGestureArenaDiagnostics) {final int count = state != null ? state.members.length : null; final String s = count != 1 ? 's' : ''; debugPrint('Gesture arena ${pointer.toString().padRight(4)} ❙ $message${count != null ? " with $count member$s." : ""}');} return true;}()); */;
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    GestureArenaManager() {
        this._arenas = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
