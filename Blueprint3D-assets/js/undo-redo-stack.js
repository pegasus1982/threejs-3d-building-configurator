!(function (a, b) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = b())
    : typeof define === "function" && define.amd
    ? define(b)
    : (a.UndoRedoStack = b());
})(this, function () {
  "use strict";
  let a = (a) => (b) => a.push(b),
    b = (a) => () => a.pop(),
    c = (a) => () => a.length < 1,
    d = (a) => () => a.splice(0),
    e = (a) => () => a[a.length - 1],
    f = (a) => () => [...a];
  function g(g) {
    return {
      push: a(g),
      pop: b(g),
      isEmpty: c(g),
      clear: d(g),
      current: e(g),
      getValues: f(g),
    };
  }
  function h(a = !1) {
    return g(a || []);
  }
  var i = function b(a) {
      return function (b) {
        return a.push(b);
      };
    },
    j = function c(a, b) {
      return function () {
        a.isEmpty() || b.push(a.pop());
      };
    },
    k = function c(a, b) {
      return function () {
        b.isEmpty() || a.push(b.pop());
      };
    },
    l = function c(a, b) {
      return function () {
        a.clear();
        b.clear();
      };
    },
    m = function b(a) {
      return function () {
        return a.current();
      };
    },
    n = function c(a, b) {
      return function () {
        return { undo: a.getValues(), redo: b.getValues() };
      };
    };
  function o(a, b) {
    return {
      push: i(a),
      undo: j(a, b),
      redo: k(a, b),
      clear: l(a, b),
      latest: m(a),
      getValues: n(a, b),
    };
  }
  function p() {
    var a =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1,
      b =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return a && b ? o(a, b) : o(h(), h());
  }
  return p;
});
//# sourceMappingURL=undo-redo-stack.min.js.map
