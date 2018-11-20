import Rx from 'rxjs/Rx';
import { map } from 'rxjs/operators';

let obj = {a:1,b:true};

let observable = Rx.Observable.of(obj);
let mappedObservable = observable.pipe(map(val => val.b));

mappedObservable.subscribe(value => console.log(value));
