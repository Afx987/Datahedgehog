/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/cancelable_future_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CancelableCompleterTests);
        defineReflectiveTests(CancelableFutureTests);
    });
};
export namespace CancelableCompleterTests {
    export type Constructors = 'CancelableCompleterTests';
    export type Interface = Omit<CancelableCompleterTests, Constructors>;
}
@DartClass
export class CancelableCompleterTests {
    completer : any;

    cancelCount : number;

    setUp() : void {
        this.completer = new bare.createInstance(any,null,() =>  {
            this.cancelCount++;
        });
    }
    test_cancel_after_cancel() : async.Future<any> {
        expect(this.cancelCount,0);
        this.completer.future.cancel();
        expect(this.cancelCount,1);
        this.completer.future.cancel();
        expect(this.cancelCount,1);
        return this.completer.future.then((_ : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(error,new bare.createInstance(any,null));
            }}).then((_ : any) =>  {
            return pumpEventQueue();
        }).then((_ : any) =>  {
            expect(this.completer.isCompleted,isFalse);
            expect(this.cancelCount,1);
        });
    }
    test_cancel_after_chaining() : async.Future<any> {
        let callbackInvoked : boolean = false;
        this.completer.future.then((_ : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(callbackInvoked,isFalse);
                expect(error,new bare.createInstance(any,null));
                callbackInvoked = true;
            }});
        expect(this.cancelCount,0);
        this.completer.future.cancel();
        expect(this.cancelCount,1);
        expect(this.completer.isCompleted,isFalse);
        expect(callbackInvoked,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
            expect(this.completer.isCompleted,isFalse);
            expect(this.cancelCount,1);
        });
    }
    test_cancel_after_complete() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        this.completer.complete(obj);
        this.completer.future.cancel();
        expect(this.cancelCount,0);
        return this.completer.future.then((result : any) =>  {
            expect(result,same(obj));
        }).then((_ : any) =>  {
            return pumpEventQueue();
        }).then((_ : any) =>  {
            expect(this.completer.isCompleted,isTrue);
            expect(this.cancelCount,0);
        });
    }
    test_cancel_before_chaining() : async.Future<any> {
        this.completer.future.cancel();
        expect(this.cancelCount,1);
        expect(this.completer.isCompleted,isFalse);
        let callbackInvoked : boolean = false;
        this.completer.future.then((_ : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(callbackInvoked,isFalse);
                expect(error,new bare.createInstance(any,null));
                callbackInvoked = true;
            }});
        expect(callbackInvoked,isFalse);
        expect(this.completer.isCompleted,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
            expect(this.completer.isCompleted,isFalse);
            expect(this.cancelCount,1);
        });
    }
    test_complete_after_cancel() : async.Future<any> {
        this.completer.future.cancel();
        expect(this.cancelCount,1);
        expect(this.completer.isCompleted,isFalse);
        let obj : core.DartObject = new core.DartObject();
        this.completer.complete(obj);
        expect(this.completer.isCompleted,isTrue);
        return this.completer.future.then((_ : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(error,new bare.createInstance(any,null));
            }}).then((_ : any) =>  {
            return pumpEventQueue();
        }).then((_ : any) =>  {
            expect(this.completer.isCompleted,isTrue);
            expect(this.cancelCount,1);
        });
    }
    test_complete_after_chaining() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        let callbackInvoked : boolean = false;
        this.completer.future.then((result : any) =>  {
            expect(callbackInvoked,isFalse);
            expect(result,same(obj));
            callbackInvoked = true;
        },{
            onError : (error : any) =>  {
                fail('Expected successful completion');
            }});
        expect(this.completer.isCompleted,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            this.completer.complete(obj);
            expect(this.completer.isCompleted,isTrue);
            expect(callbackInvoked,isFalse);
        }).then((_ : any) =>  {
            return pumpEventQueue();
        }).then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
            expect(this.completer.isCompleted,isTrue);
            expect(this.cancelCount,0);
        });
    }
    test_complete_after_complete() : void {
        this.completer.complete();
        expect(() =>  {
            this.completer.complete();
        },throws);
        expect(() =>  {
            this.completer.completeError(new core.DartObject());
        },throws);
    }
    test_complete_after_completeError() : void {
        this.completer.completeError(new core.DartObject());
        expect(() =>  {
            this.completer.complete();
        },throws);
        expect(() =>  {
            this.completer.completeError(new core.DartObject());
        },throws);
        this.completer.future.catchError((_ : any) =>  {
            return null;
        });
    }
    test_complete_before_chaining() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        this.completer.complete(obj);
        expect(this.completer.isCompleted,isTrue);
        let callbackInvoked : boolean = false;
        this.completer.future.then((result : any) =>  {
            expect(callbackInvoked,isFalse);
            expect(result,same(obj));
            callbackInvoked = true;
        },{
            onError : (error : any) =>  {
                fail('Expected successful completion');
            }});
        expect(callbackInvoked,isFalse);
        expect(this.completer.isCompleted,isTrue);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
            expect(this.completer.isCompleted,isTrue);
            expect(this.cancelCount,0);
        });
    }
    test_completeError_after_cancel() : async.Future<any> {
        this.completer.future.cancel();
        expect(this.cancelCount,1);
        expect(this.completer.isCompleted,isFalse);
        let obj : core.DartObject = new core.DartObject();
        this.completer.completeError(obj);
        expect(this.completer.isCompleted,isTrue);
        return this.completer.future.then((_ : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(error,new bare.createInstance(any,null));
            }}).then((_ : any) =>  {
            return pumpEventQueue();
        }).then((_ : any) =>  {
            expect(this.completer.isCompleted,isTrue);
            expect(this.cancelCount,1);
        });
    }
    test_completeError_after_chaining() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        let callbackInvoked : boolean = false;
        this.completer.future.then((_ : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(callbackInvoked,isFalse);
                expect(error,same(obj));
                callbackInvoked = true;
            }});
        expect(this.completer.isCompleted,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            this.completer.completeError(obj);
            expect(this.completer.isCompleted,isTrue);
            expect(callbackInvoked,isFalse);
        }).then((_ : any) =>  {
            return pumpEventQueue();
        }).then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
            expect(this.completer.isCompleted,isTrue);
            expect(this.cancelCount,0);
        });
    }
    test_completeError_before_chaining() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        this.completer.completeError(obj);
        expect(this.completer.isCompleted,isTrue);
        let callbackInvoked : boolean = false;
        this.completer.future.then((_ : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(callbackInvoked,isFalse);
                expect(error,same(obj));
                callbackInvoked = true;
            }});
        expect(callbackInvoked,isFalse);
        expect(this.completer.isCompleted,isTrue);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
            expect(this.completer.isCompleted,isTrue);
            expect(this.cancelCount,0);
        });
    }
    test_initialState() : void {
        expect(this.completer.isCompleted,isFalse);
        expect(this.cancelCount,0);
    }
    constructor() {
    }
    @defaultConstructor
    CancelableCompleterTests() {
        this.cancelCount = 0;
    }
}

export namespace CancelableFutureTests {
    export type Constructors = 'CancelableFutureTests';
    export type Interface = Omit<CancelableFutureTests, Constructors>;
}
@DartClass
export class CancelableFutureTests {
    test_defaultConstructor_returnFuture() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        let callbackInvoked : boolean = false;
        new bare.createInstance(any,null,() =>  {
            return new async.Future<any>(() =>  {
                return obj;
            });
        }).then((result : any) =>  {
            expect(callbackInvoked,isFalse);
            expect(result,same(obj));
            callbackInvoked = true;
        },{
            onError : (error : any) =>  {
                fail('Expected successful completion');
            }});
        expect(callbackInvoked,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
        });
    }
    test_defaultConstructor_returnValue() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        let callbackInvoked : boolean = false;
        new bare.createInstance(any,null,() =>  {
            return obj;
        }).then((result : any) =>  {
            expect(callbackInvoked,isFalse);
            expect(result,same(obj));
            callbackInvoked = true;
        },{
            onError : (error : any) =>  {
                fail('Expected successful completion');
            }});
        expect(callbackInvoked,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
        });
    }
    test_defaultConstructor_throwException() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        let callbackInvoked : boolean = false;
        new bare.createInstance(any,null,() =>  {
            throw obj;
        }).then((result : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(callbackInvoked,isFalse);
                expect(error,same(obj));
                callbackInvoked = true;
            }});
        expect(callbackInvoked,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
        });
    }
    test_delayed_noCallback() : async.Future<any> {
        let start : core.DartDateTime = new core.DartDateTime.now();
        return new bare.createInstance(any,null,new core.DartDuration({
            seconds : 1})).then((result : any) =>  {
            let end : core.DartDateTime = new core.DartDateTime.now();
            expect(result,isNull);
            expect(end.difference(start).inMilliseconds > 900,isTrue);
        });
    }
    test_delayed_withCallback() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        let start : core.DartDateTime = new core.DartDateTime.now();
        return new bare.createInstance(any,null,new core.DartDuration({
            seconds : 1}),() =>  {
            let end : core.DartDateTime = new core.DartDateTime.now();
            expect(end.difference(start).inMilliseconds > 900,isTrue);
            return obj;
        }).then((result : any) =>  {
            expect(result,same(obj));
        });
    }
    test_error() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        return new bare.createInstance(any,null,obj).then((result : any) =>  {
            fail('Expected error completion');
        },{
            onError : (error : any) =>  {
                expect(error,same(obj));
            }});
    }
    test_microtask() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        let callbackInvoked : boolean = false;
        new bare.createInstance(any,null,() =>  {
            return obj;
        }).then((result : any) =>  {
            expect(callbackInvoked,isFalse);
            expect(result,same(obj));
            callbackInvoked = true;
        },{
            onError : (error : any) =>  {
                fail('Expected successful completion');
            }});
        expect(callbackInvoked,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
        });
    }
    test_sync() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        let callbackInvoked : boolean = false;
        new bare.createInstance(any,null,() =>  {
            return obj;
        }).then((result : any) =>  {
            expect(callbackInvoked,isFalse);
            expect(result,same(obj));
            callbackInvoked = true;
        },{
            onError : (error : any) =>  {
                fail('Expected successful completion');
            }});
        expect(callbackInvoked,isFalse);
        return pumpEventQueue().then((_ : any) =>  {
            expect(callbackInvoked,isTrue);
        });
    }
    test_value() : async.Future<any> {
        let obj : core.DartObject = new core.DartObject();
        return new bare.createInstance(any,null,obj).then((result : any) =>  {
            expect(result,same(obj));
        },{
            onError : (error : any) =>  {
                fail('Expected successful completion');
            }});
    }
    constructor() {
    }
    @defaultConstructor
    CancelableFutureTests() {
    }
}

export class properties {
}
