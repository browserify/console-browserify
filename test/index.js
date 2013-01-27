var console = require("../index")
var test = require("tape")

test("console has expected methods", function (assert) {
    assert.ok(console.log)
    assert.ok(console.info)
    assert.ok(console.warn)
    assert.ok(console.dir)
    assert.ok(console.time, "time")
    assert.ok(console.timeEnd, "timeEnd")
    assert.ok(console.trace, "trace")
    assert.ok(console.assert)

    assert.end()
})

test("all the methods", function (assert) {
    console.log("test-log")
    console.info("test-info")
    console.warn("test-warn")
    console.dir("test-dir")
    console.time("label")
    console.timeEnd("label")
    console.trace("test-trace")
    console.assert(true)

    assert.end()
})
