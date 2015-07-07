var util = require('util');

_.extendOwn(Error, {
    inherit: function (name, constructor, prototype) {
        if (typeof (name) === 'function') {
            constructor = name;
            prototype = constructor;
            name = null;
        }

        var ctor = function () {
            Error.call(this);
            Error.captureStackTrace(this, arguments.callee);

            name && (this.name = name);
            this.code = null;
            this.message = null;
            this.cause = null;
            this.inner = [];

            var argc = arguments.length,
                args = new Array(argc);
            for (var i = 0; i < argc; ++i) {
                args[i] = arguments[i];
            }
            constructor.apply(this, args);
        };

        util.inherits(ctor, Error);
        _.extendOwn(ctor.prototype, new Error());

        prototype && _.extendOwn(ctor.prototype, prototype);

        return ctor;
    }
});

_.extendOwn(Error.prototype, {
    caption: function () {
        var p1 = this.code ? '[' + this.code + '] ' : '',
            p2 = this.name,
            p3 = this.message ? ': ' + this.message : '';
        return p1 + p2 + p3;
    },
    print: function () {
        var lines = [this.caption(), ''];
        if (this.stack) {
            lines.push('Stack:');
            lines.push(this.stack);
            lines.push('');
        }
        if (this.cause) {
            lines.push('Cause:');
            lines.push(this.cause.print ? this.cause.print() : (this.cause.stack || this.cause));
            lines.push('');
        }
        if (this.inner && this.inner.length > 0) {
            lines.push('Inner:');
            this.inner.forEach(function (inner) {
                lines.push(inner.print ? inner.print() : (inner.stack || inner));
                lines.push('');
            })
        }
        return lines.join('\n');
    }
});
