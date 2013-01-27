var now = require("date-now")
var util = require("util")
var assert = require("assert")

var slice = Array.prototype.slice
var console
var times = {}

if (typeof global !== "undefined" && global.console) {
    console = global.console
} else if (typeof window !== "undefined" && window.console) {
    console = window.console
} else {
    console = consoleShim()
}

if (!console.time) {
    console.time = time
}

if (!console.timeEnd) {
    console.timeEnd = timeEnd
}

if (!console.trace) {
    console.trace = trace
}

if (!console.dir) {
    console.dir = dir
}

if (!console.assert) {
    console.assert = assert
}

module.exports = console

function consoleShim() {
    return {
        log: function () {}
        , warn: function () {}
        , error: function () {}
        , info: function () {}
        , dir: function () {}
        , assert: function () {}
    }
}

function time(label) {
    times[label] = now()
}

function timeEnd(label) {
    var time = times[label]
    if (!time) {
        throw new Error("No such label: " + label)
    }

    var duration = now() - time
    console.log(label + ": " + duration + "ms")
}

function trace() {
    var err = new Error()
    err.name = "Trace"
    err.message = util.format.apply(null, arguments)
    console.error(err.stack)
}

function dir(object) {
    console.log(util.inspect(object) + "\n")
}

function assert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1)
        assert.ok(false, util.format.apply(null, arr))
    }
}
