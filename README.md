# synccloud.node-globals


### Errors

`Error.inherit([name, ] constructor [, prototype]) -> Function`  
Creates new constructor properly inherited from `Error` calling `constructor` function.  
Sets `name` field if provided and extends newly created constructor with own properties of `prototype`.

`Error#caption() -> String`  
Should return error representation header lines (e.g. `Backend Error: something went wrong`).

`Error#print() -> String`  
Should return full error representation with `Error#caption()`, traceback, inner errors.


### Logging

`$log(name) -> Debug`  
`debug` module wrapper.

`Debug#out([format [, args]]) -> void`  
Prints to stdout.

`Debug#err([format [, args]]) -> void`  
Prints to stderr.

`Debug#trace([prefix, ] error) -> void`  
Pretty-prints `error` to stderr prefixed with `prefix` if provided.


### Promises<br>https://github.com/petkaantonov/bluebird/blob/master/API.md

`$q(function (resolve, reject)) -> Promise`  
Returns new promise resolved via supplied callback.

`$q.when(value) -> Promise`  
Returns promise resolved with `value`.


### Underscore via global `_` variable
