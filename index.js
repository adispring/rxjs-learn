const { Observable } = require('rxjs')
const { map } = require('rxjs/operators')
const onSubscribe = observer => {
  observer.next(1)
}

const square = x => x * x
const source$ = new Observable(onSubscribe)
const sourceMap$ = source$.pipe(map(square))
const subscription = sourceMap$.subscribe(console.log)
subscription.unsubscribe()
